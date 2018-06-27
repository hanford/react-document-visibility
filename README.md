# react-document-visibility

[![npm package][npm-badge]][npm]

## Installation

```sh
$ npm install --save next-offline
```

```sh
$ yarn add next-offline
```

### child is a function

To use the `Visible` component, you pass it a function. It will be called whenever the state changes, with the new value of `visible`.

```js
import Visible from 'react-document-visibility'

const Component = () => (
  <Visbility>
    {({ visible }) => (
      <h1>{`Document is visible: ${visible}`}</h1>
    )}
  </Visbility>
)

export default Component
```

[npm-badge]: https://img.shields.io/npm/v/react-document-visibility.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-document-visibility

Questions? Feedback? [Please let me know](https://github.com/hanford/react-document-visibility/issues/new)

## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```
Copyright © 2017-present [Jack Hanford](http://jackhanford.com), jackhanford@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
