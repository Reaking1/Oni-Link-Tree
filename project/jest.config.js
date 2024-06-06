export const preset = 'ts-jest';
export const testEnvironment = 'jsdom';
export const setupFilesAfterEnv = ['<rootDir>/src/setupTests.ts'];
export const moduleNameMapper = {
  '\\.(css|less)$': 'identity-obj-proxy',
};
