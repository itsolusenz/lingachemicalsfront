const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    basePath: '/react/porto/demo3',
    trailingSlash: isProduction

} 