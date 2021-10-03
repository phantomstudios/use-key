# use-key

[![NPM version][npm-image]][npm-url]
[![Actions Status][ci-image]][ci-url]
[![PR Welcome][npm-downloads-image]][npm-downloads-url]

A simple React hook for listening to custom keyboard events. This hook is also SSR safe and does not break when used without `window` existing.

## Installation

Install this package with `npm`.

```bash
npm i -D @phntms/use-key
```

## Usage

To listen to a single key:

```jsx
import useKey from "@phntms/use-key";

useKey("Escape", (pressed: boolean) => {
  if (pressed) // Do something on "Escape"...
});
```

To listen for key combinations:

```jsx
import useKey from "@phntms/use-key";

useKey("g", (pressed: boolean, event: KeyboardEvent) => {
  if (pressed && event.ctrlKey) // Do something on "Ctrl + G"...
});
```

## API

The hook uses [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) under the hood. This means using the `onChange` event, you can get the state of modifier keys such as Shift as well as the keyboard locale and layout.

## Contributing

Want to get involved, or found an issue? Please contribute using the GitHub Flow. Create a branch, add commits, and open a Pull Request or submit a new issue.

Please read `CONTRIBUTING` for details on our `CODE_OF_CONDUCT`, and the process for submitting pull requests to us!

[npm-image]: https://img.shields.io/npm/v/@phntms/use-key.svg?style=flat-square&logo=react
[npm-url]: https://npmjs.org/package/@phntms/use-key
[npm-downloads-image]: https://img.shields.io/npm/dm/@phntms/use-key.svg
[npm-downloads-url]: https://npmcharts.com/compare/@phntms/use-key?minimal=true
[ci-image]: https://github.com/phantomstudios/use-key/workflows/test/badge.svg
[ci-url]: https://github.com/phantomstudios/use-key/actions
