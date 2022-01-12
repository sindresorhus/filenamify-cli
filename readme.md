# filenamify-cli

> Convert a string to a [valid safe filename](https://github.com/sindresorhus/filenamify) on the command-line

## Install

```sh
npm install --global filenamify-cli
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
    $ filenamify 'https://sindresorhus.com/foo?bar=baz'
    sindresorhus.com!foo!bar=baz
```

## Related

- [filenamify](https://github.com/sindresorhus/filenamify) - API for this module
