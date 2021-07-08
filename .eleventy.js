
module.exports = config => {
    config.addPassthroughCopy('./src/images/');
    config.addPassthroughCopy('./src/javascript/');
    config.addPassthroughCopy('./src/CSS/');
    config.addPassthroughCopy('./src/manifest.webmanifest');
    config.addPassthroughCopy('./src/sw.js');

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};
