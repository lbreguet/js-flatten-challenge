[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Flatten Challenge

Multidimensional arrays are those that contain at least one array and those
arrays can also contain at least one array, and so on. Flattening a
multidimensional array results in a one-dimensional array containing every
element. For example, flattening `[0, [1], [2, 3], [4, [5, 6, [7, 8]]]]` results
in `[0, 1, 2, 3, 4, 5, 6, 7, 8]`.

Create an `Array` method named `flatten()` that, when invoked on an array,
returns a flattened array. Empty arrays should be discarded. For example,

```javascript
const array = [0, [1], [2, [3], []], []];
const flattenedArray = array.flatten();

// All of the following calls will print [0, 1, 2, 3].
console.log([0, [1], [2, [3], []], []].flatten());
console.log(array.flatten());
console.log(flattenedArray);
```

## Prerequisites

-   Topics with which developers should be familiar with.
-   Prerequisites are "just-in-time", so if I have a prerequisite that mentions
    Sass, I would **not** need to include CSS as a prerequisite.
-   [Links to previous materials](https://www.github.com/ga-wdi-boston/example)
    are often useful.
-   In a challenge, it is useful to link to reference material, such as talk
    repositories.

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Install dependencies.
1.  Create and checkout a new branch to work on.
1.  Fulfill the listed requirements.

Starter code is available in [`lib/challenge.js`](lib/challenge.js). A pull
request is not required, but it is necessary if you want a code review.

You may wish to refer to [FAQs](https://github.com/ga-wdi-boston/meta/wiki/)
related to [forking,
cloning](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone).

## Requirements

Describe behavioral requirements as you'll be using them in tests. That is,
list requirements in language that describes how the written code will be used,
not how it will be written, with the exception of constraints you may wish to
place on implementation. It's a good idea to include the below paragraph
verbatim.

You should be running `grunt nag` before diagnosing any bugs, since it finds
some of the most common sources of errors. After `grunt nag` passes, you should
run `grunt test` to run the included tests. Tests will tell you whether of not
you've met these requirements.

## Bonus

Bonuses are described after the requirements, if included. They should be worked
on **only after** passing requirements.

Sometimes, we ask questions that promote thinking critically about code.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
