const execSync = require('child_process').execSync;

module.exports = function(options = {}) {
    const {
        filename = 'source-stats.html',
        format = 'html',
        gzip,
        noBorderChecks,
        sort,
        noRoot,
        excludeSourceMap
    } = options;

    return {
        name: 'rollup-plugin-source-map-explorer',
        load(outputOptions) {
            this.addWatchFile(outputOptions.file);
        },
        generateBundle(outputOptions) {
            execSync([
                "source-map-explorer",
                outputOptions.file,
                `--${format}`,
                filename,
                `${gzip ? "--gzip" : ""}`,
                `${noBorderChecks ? "--no-border-checks" : ""}`,
                `${sort ? "--sort" : ""}`,
                `${noRoot ? "--no-root" : ""}`,
                `${excludeSourceMap ? "--exclude-source-map" : ""}`
            ].join(' '), (err, stdout, stderr) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(stdout);
            });
        }
    }
}
