/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@esm/index.d.ts"/>

import { Collection } from '@stdlib/types/array';

/**
* Tests if two indexed arrays have equal values.
*
* ## Notes
*
* -   If provided arrays of unequal length, the function returns `false`.
*
* @param x - first input array
* @param y - second input array
* @returns boolean indicating whether both arrays have equal values
*
* @example
* var x = [ 0, 0, 1, 0 ];
* var y = [ 0, 0, 1, 0 ];
*
* var out = hasEqualValuesIndexed( x, y );
* // returns true
*/
declare function hasEqualValuesIndexed<T = unknown, U = unknown>( x: Collection<T>, y: Collection<U> ): boolean;


// EXPORTS //

export = hasEqualValuesIndexed;