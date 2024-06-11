module.exports = {
  setupFiles: ['./jest.polyfills.js'],
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  testMatch: ['<rootDir>/src/**/*.(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/src/__mocks__/styleMock.js'
  },
}
