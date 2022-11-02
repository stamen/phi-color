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

const phiColor = require("../index.js");
const chroma = require("chroma-js");

const origin = chroma("steelblue").hcl();

const colors = phiColor(origin, 0.5, 25).map((c) => {
  return c.hex();
});

// console.log(colors.join("\n"));

for (let r = 0; r < 5; r++) {
    let row = ""
    for (let c = 0; c < 5; c++) {
        const cl = colors[r * 5 + c].slice(1, 8);
        row += `![](https://placehold.co/15x15/${cl}/${cl}.png) `
    }
    console.log(row)
}


