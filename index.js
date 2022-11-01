import chroma from "chroma-js";

const phi = (d) => {
  let x = 2;
  for (let i = 0; i < 10; i++) {
    x = (1 + x) ** (1 / (d + 1));
  }
  return x;
};

const generatePhiCircle = function* (options) {
  const d = (options && options.d) || 3;
  const seed = (options && options.seed) || 0.5;
  const SAFETY = (options && options.SAFETY) || 100;
  const G = phi(d);
  const alpha = [...new Array(d)].map((_, j) => {
    return (1 / G) ** (j + 1) % 1;
  });

  let i = 0;
  while (i < SAFETY) {
    const point = alpha.map((a) => {
      return (seed + a * (i + 1)) % 1;
    });
    const eucDist = Math.sqrt(
      point.reduce((a, p) => {
        return a + (p - 0.5) ** 2;
      }, 0)
    );

    if (eucDist <= 0.5) {
      yield point;
    }
    i++;
  }
};

const phiColor = (origin, mag, n) => {
  const colors = [];
  const domain = [360, 200, 100];
  const scaled = domain.map((s) => {
    return s * mag;
  });
  for (const c of generatePhiCircle()) {
    const color = origin.map((o, i) => {
      return (c[i] - 0.5) * scaled[i] + o;
    });
    if (
      color[1] > 0 &&
      color[1] < domain[1] &&
      color[2] > 0 &&
      color[2] < domain[2]
    ) {
      colors.push(chroma.hcl(color));
      if (colors.length == n) break;
    }
  }
  return colors;
};

export default phiColor;
