module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@app': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@context': './src/con',
            '@hooks': './src/hooks',
            '@themes': './src/themes',
            '@types': './src/types',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
