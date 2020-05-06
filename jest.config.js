module.exports = {
  testURL: 'http://localhost/',
  moduleFileExtensions: ['js', 'ts', 'vue'],
  snapshotSerializers: ['jest-serializer-vue'],

  globals: {
    'vue-jest': {
      babelConfig: false
    },

    'ts-jest': {
      babelConfig: true
    }
  },

  transform: {
    '^.+?\\.ts$': 'ts-jest',
    '^.+?\\.vue$': 'vue-jest'
  }
};
