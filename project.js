const isProduction = process.env.NODE_ENV === 'production';

module.exports = require("marko-starter").projectConfig({
  name: "ustad-chhote-rahimat-khan", // Optional, but added here for demo purposes
  lassoConfig: {
    bundlingEnabled: isProduction,
    fingerprintsEnabled: isProduction,
    urlPrefix:"/ustadji",    
    minifyJS: false,
    plugins: [
        'lasso-marko'
    ]
}
});
