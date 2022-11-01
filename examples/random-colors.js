/*
$ node examples/random-colors.js
#c2ac85
#c39c62
#d3aa7e
#c49e7f
#bca671
#cfa369
#c2966c
#cea587
#c8ad78
#bba079
*/

import phiColor from "../index.js";
import chroma from "chroma-js";

const origin = chroma("steelblue").hcl();

const colors = phiColor(origin, 0.25, 10).map((c) => {
  return c.hex();
});

console.log(colors.join("\n"));
