module.exports = {
  name: 'sw06',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw06',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
