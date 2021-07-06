
module.exports = config => {
    config.addPassthroughCopy('./src/images/');
    config.addPassthroughCopy('./src/javascript/');
    config.addPassthroughCopy('./src/CSS/');

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
