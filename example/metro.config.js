const path = require('path');
const { getDefaultConfig } = require('@react-native/metro-config');
const { getConfig } = require('react-native-builder-bob/metro-config');
const pkg = require('../package.json');

const root = path.resolve(__dirname, '..');

// Metro configuration
module.exports = {
  ...getConfig(getDefaultConfig(__dirname), {
    root,
    pkg,
    project: __dirname,
  }),
  resolver: {
    extraNodeModules: {
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    },
  },
  watchFolders: [
    path.resolve(__dirname, '..'), // Watch the parent directory where the library is located
  ],
};
