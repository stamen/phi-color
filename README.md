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

### `steelblue` origin with magnitude=0.1
![](https://placehold.co/15x15/6784af/6784af.png) ![](https://placehold.co/15x15/2b7cba/2b7cba.png) ![](https://placehold.co/15x15/488bbd/488bbd.png) ![](https://placehold.co/15x15/467fa4/467fa4.png) ![](https://placehold.co/15x15/5a7db4/5a7db4.png) 
![](https://placehold.co/15x15/2984c2/2984c2.png) ![](https://placehold.co/15x15/277aaa/277aaa.png) ![](https://placehold.co/15x15/4a88ac/4a88ac.png) ![](https://placehold.co/15x15/5c85bd/5c85bd.png) ![](https://placehold.co/15x15/537ba6/537ba6.png) 
![](https://placehold.co/15x15/2882b2/2882b2.png) ![](https://placehold.co/15x15/5683af/5683af.png) ![](https://placehold.co/15x15/298bba/298bba.png) ![](https://placehold.co/15x15/437db4/437db4.png) ![](https://placehold.co/15x15/598cb7/598cb7.png) 
![](https://placehold.co/15x15/657faf/657faf.png) ![](https://placehold.co/15x15/4386bd/4386bd.png) ![](https://placehold.co/15x15/407ba4/407ba4.png) ![](https://placehold.co/15x15/6887b8/6887b8.png) ![](https://placehold.co/15x15/448ec6/448ec6.png) 
![](https://placehold.co/15x15/4283ad/4283ad.png) ![](https://placehold.co/15x15/5c80bd/5c80bd.png) ![](https://placehold.co/15x15/5076a6/5076a6.png) ![](https://placehold.co/15x15/1e7db3/1e7db3.png) ![](https://placehold.co/15x15/458cb5/458cb5.png) 

### `steelblue` origin with magnitude=0.25
![](https://placehold.co/15x15/8588a5/8588a5.png) ![](https://placehold.co/15x15/0072c2/0072c2.png) ![](https://placehold.co/15x15/4a98c9/4a98c9.png) ![](https://placehold.co/15x15/50798c/50798c.png) ![](https://placehold.co/15x15/7774af/7774af.png) 
![](https://placehold.co/15x15/0088d8/0088d8.png) ![](https://placehold.co/15x15/006d99/006d99.png) ![](https://placehold.co/15x15/5d8e9f/5d8e9f.png) ![](https://placehold.co/15x15/7e89c8/7e89c8.png) ![](https://placehold.co/15x15/5e7190/5e7190.png) 
![](https://placehold.co/15x15/0082ab/0082ab.png) ![](https://placehold.co/15x15/6986a6/6986a6.png) ![](https://placehold.co/15x15/0097bd/0097bd.png) ![](https://placehold.co/15x15/4075b4/4075b4.png) ![](https://placehold.co/15x15/749bbc/749bbc.png) 
![](https://placehold.co/15x15/817ba2/817ba2.png) ![](https://placehold.co/15x15/3f8bcb/3f8bcb.png) ![](https://placehold.co/15x15/3b6f8d/3b6f8d.png) ![](https://placehold.co/15x15/8d90ba/8d90ba.png) ![](https://placehold.co/15x15/3da2e0/3da2e0.png) 
![](https://placehold.co/15x15/4584a1/4584a1.png) ![](https://placehold.co/15x15/847ac2/847ac2.png) ![](https://placehold.co/15x15/57658f/57658f.png) ![](https://placehold.co/15x15/0077af/0077af.png) ![](https://placehold.co/15x15/4f99b4/4f99b4.png) 

### `steelblue` origin with magnitude=0.5

![](https://placehold.co/15x15/979798/979798.png) ![](https://placehold.co/15x15/005fcd/005fcd.png) ![](https://placehold.co/15x15/4faede/4faede.png) ![](https://placehold.co/15x15/666b6c/666b6c.png) ![](https://placehold.co/15x15/9d6396/9d6396.png) 
![](https://placehold.co/15x15/008efe/008efe.png) ![](https://placehold.co/15x15/00587a/00587a.png) ![](https://placehold.co/15x15/869393/869393.png) ![](https://placehold.co/15x15/b68ecf/b68ecf.png) ![](https://placehold.co/15x15/61636d/61636d.png) 
![](https://placehold.co/15x15/008098/008098.png) ![](https://placehold.co/15x15/808a98/808a98.png) ![](https://placehold.co/15x15/00aab1/00aab1.png) ![](https://placehold.co/15x15/4468b1/4468b1.png) ![](https://placehold.co/15x15/9fb3c4/9fb3c4.png) 
![](https://placehold.co/15x15/927c8c/927c8c.png) ![](https://placehold.co/15x15/3894e1/3894e1.png) ![](https://placehold.co/15x15/3b5b69/3b5b69.png) ![](https://placehold.co/15x15/b6a3bc/b6a3bc.png) ![](https://placehold.co/15x15/13c3ff/13c3ff.png) 
![](https://placehold.co/15x15/55838e/55838e.png) ![](https://placehold.co/15x15/c568ae/c568ae.png) ![](https://placehold.co/15x15/554c69/554c69.png) ![](https://placehold.co/15x15/006ca4/006ca4.png) ![](https://placehold.co/15x15/73acb1/73acb1.png) 
