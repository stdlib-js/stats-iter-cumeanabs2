<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# itercumeanabs2

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative [arithmetic mean][arithmetic-mean] of squared absolute values.

<section class="intro">

The cumulative [arithmetic mean][arithmetic-mean] of squared absolute values is defined as

<!-- <equation class="equation" label="eq:cumulative_arithmetic_mean_squared_absolute_values" align="center" raw="\bar{x}_n = \frac{1}{n} \sum_{i=0}^n x_i^2" alt="Equation for the cumulative arithmetic mean of squared absolute values."> -->

<div class="equation" align="center" data-raw-text="\bar{x}_n = \frac{1}{n} \sum_{i=0}^n x_i^2" data-equation="eq:cumulative_arithmetic_mean_squared_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d3d95236f834a139a4cb700b0acc4f1667a9ffa5/lib/node_modules/@stdlib/stats/iter/cumeanabs2/docs/img/equation_cumulative_arithmetic_mean_squared_absolute_values.svg" alt="Equation for the cumulative arithmetic mean of squared absolute values.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import itercumeanabs2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-cumeanabs2@deno/mod.js';
```

#### itercumeanabs2( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative [arithmetic mean][arithmetic-mean] of squared absolute values.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@deno/mod.js';

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itercumeanabs2( arr );

var m = it.next().value;
// returns 4.0

m = it.next().value;
// returns 2.5

m = it.next().value;
// returns ~4.67

m = it.next().value;
// returns 15.75

m = it.next().value;
// returns 17.6
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the function returns `NaN` for **all** future iterations. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import runif from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-uniform@deno/mod.js';
import itercumeanabs2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-cumeanabs2@deno/mod.js';

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a cumulative mean of squared absolute values:
var it = itercumeanabs2( rand );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'meanabs2: %d', v.value );
    }
    if ( v.done ) {
        break;
    }
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-iter/cumean`][@stdlib/stats/iter/cumean]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative arithmetic mean.</span>
-   <span class="package-name">[`@stdlib/stats-iter/cumeanabs`][@stdlib/stats/iter/cumeanabs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative arithmetic mean of absolute values.</span>
-   <span class="package-name">[`@stdlib/stats-iter/cusumabs2`][@stdlib/stats/iter/cusumabs2]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative sum of squared absolute values.</span>
-   <span class="package-name">[`@stdlib/stats-iter/meanabs2`][@stdlib/stats/iter/meanabs2]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of squared absolute values for all iterated values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-iter-cumeanabs2.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-iter-cumeanabs2

[test-image]: https://github.com/stdlib-js/stats-iter-cumeanabs2/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-iter-cumeanabs2/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-iter-cumeanabs2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-iter-cumeanabs2?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-iter-cumeanabs2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-iter-cumeanabs2/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-iter-cumeanabs2/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-iter-cumeanabs2/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-iter-cumeanabs2/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-iter-cumeanabs2/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-iter-cumeanabs2/main/LICENSE

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/cumean]: https://github.com/stdlib-js/stats-iter-cumean/tree/deno

[@stdlib/stats/iter/cumeanabs]: https://github.com/stdlib-js/stats-iter-cumeanabs/tree/deno

[@stdlib/stats/iter/cusumabs2]: https://github.com/stdlib-js/stats-iter-cusumabs2/tree/deno

[@stdlib/stats/iter/meanabs2]: https://github.com/stdlib-js/stats-iter-meanabs2/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
