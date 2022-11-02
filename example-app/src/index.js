import phiColor from "../../index.js";
import chroma from "chroma-js";

const contain = document.getElementById("contain");

const url = new URL(window.location);

let origin = url.searchParams.get("origin") || "steelblue";
let magnitude = url.searchParams.get("magnitude") || 0.15;


if (!(url.searchParams.get("origin") && url.searchParams.get("magnitude"))) {
    url.searchParams.set("origin", origin);
    url.searchParams.set("magnitude", magnitude);
    window.history.pushState(null, "", url.toString());
}

try {
    origin = chroma(origin);
    magnitude = parseFloat(magnitude);
} catch(err) {
    console.error(err)
}


const colors = phiColor(origin.hcl(), magnitude, 100);
console.log(colors)
for (let i = 0; i < 100; i++) {
    const box = document.createElement('div');
    box.classList.add("panel");
    box.style.backgroundColor = colors[i].hex();
    contain.appendChild(box)
}