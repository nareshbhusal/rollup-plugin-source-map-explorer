import { Plugin } from "rollup";
export interface PluginOptions {
    filename?: string;
    format?: string;
    gzip?: boolean;
    noBorderChecks?: boolean;
    sort?: boolean;
    noRoot?: boolean;
    excludeSourceMap?: boolean;
}
export declare const visualizeSource: (options?: PluginOptions) => Plugin;
export default visualizeSource;
