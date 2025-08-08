// jest.config.js
export default {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // handles CSS imports
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest', // use babel-jest to transpile files
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
