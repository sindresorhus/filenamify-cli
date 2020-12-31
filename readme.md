# filenamify-cli

> Convert a string to a [valid safe filename](https://github.com/sindresorhus/filenamify) on the command-line


## Install

```
$ npm install --global filenamify-cli
```


## Usage

```
$ filenamify --help

  Usage
    $ filenamify <text>

  Options
    --replacement  Replacement for reserved filename characters [Default: !]

  Example
    $ filenamify 'foo/bar' --replacement=🦄
    foo🦄bar
```


## Related

- [filenamify](https://github.com/sindresorhus/filenamify) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
