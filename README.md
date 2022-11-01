# phi-color
Generate random colors with a given sphere in the HCL color space using the Golden Ratio


## usage
```node
phiColor(origin, magitude, n)
```
### Parameters
- `origin`: The `chroma.Color` that should be used as the perceptual center for the color palette
- `magnitude`: The magnitude as a proportion of each dimension of HCL that colors should be created within. A `magnitude` of 0 will return `n` colors identical to the `origin`, while a magnitudes above 1 will create entirely disparate colors
- `n`: The number of colors to generate

### Returns
- `Array` of `chroma.Color` objects of length `n`

## examples
- Return 10 colors as line-delimited hex from a `steelblue` origin: https://github.com/stamen/phi-color/blob/main/examples/random-colors.js
