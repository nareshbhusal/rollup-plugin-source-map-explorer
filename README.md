# rollup-plugin-source-map-explorer

## Requirements

This plugin depends on [source-map-explorer](https://github.com/danvk/source-map-explorer "source-map-explorer") and `rollup`.

To install `source-map-explorer`, run:

```console
npm install -g source-map-explorer
```
## Installation

```console
npm install --save-dev rollup-plugin-source-map-explorer
# or
yarn add -D rollup-plugin-source-map-explorer
```

## Usage

```javascript
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
Type: `string`<br>
Default: `source-stats.html`

Name of the generated visualisation file.
### `format`
Type: `string`<br>
Default: `html`

Format of the file. Possible types are all those that `source-map-explorer` supports:
`html`| `json` | `tsv`
### `gzip`
Type: `boolean`<br>
Default: `false`

Calculate gzip size.

### `sort`
Type: `boolean`<br>
Default: `false`

To sort filenames or not.
### `noRoot`
Type: `boolean`<br>
Default: `false`

### `noBorderChecks`
Type: `boolean`<br>
Default: `false`

### `excludeSourceMap`
Type: `boolean`<br>
Default: `false`

If the invalid mapping column/line checks should be disabled.

## License

[MIT](https://github.com/nareshbhusal/rollup-plugin-source-map-explorer/blob/main/LICENSE "MIT")
