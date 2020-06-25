const path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '~': path.join(__dirname, '.')
            }
        },
        module: {
            rules: [
                {
                    test: /\.(gif|png|jpg)(\?.*$|$)/,
                    use: [
                        {
                            loader: 'url-loader'
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 65
                                },
                                // optipng.enabled: false will disable optipng
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: [0.65, 0.90],
                                    speed: 4
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                // the webp option will enable WEBP
                                webp: {
                                    quality: 75
                                }
                            },
                        }
                    ]
                }
            ]
        }
    })
}