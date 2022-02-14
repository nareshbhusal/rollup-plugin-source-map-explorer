# rollup-plugin-source-map-explorer

### Requirements

This plugin depends on `source-map-explorer` and `rollup`.
To install `source-map-explorer`, run:
`
npm install -g source-map-explorer
`
## Installation

`
npm install --save-dev rollup-plugin-source-map-explorer
`
or via yarn:
`
yarn add --dev rollup-plugin-source-map-explorer
`

## Usage

```
import visualizeSource from 'rollup-plugin-source-map-explorer';

//...
plugins: [
    //...
    visualizeSource();
]
//...
```

## Options

Reference [source-map-explorer](https://github.com/danvk/source-map-explorer#readme "source-map-explorer") docs to learn more about these options.
### `filename`
Type: `string`
Default: `source-stats.html`

Name of the generated visualisation file.
#### `format`
Type: `string`
Default: `html`

Format of the file. Possible types are all those that `source-map-explorer` supports:
`html`| `json` | `tsv`
### `gzip`
Type: `boolean`
Default: `false`

Calculate gzip size.

### `sort`
Type: `boolean`
Default: `false`

To sort filenames or not.
### `noRoot`
Type: `boolean`
Default: `false`

### `noBorderChecks`
Type: `boolean`
Default: `false`

### `excludeSourceMap`
Type: `boolean`
Default: `false`

If the invalid mapping column/line checks should be disabled.
