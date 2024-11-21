import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  testEnvironment: 'jsdom',
  testRegex: '/tests/.*\\.test\\.(ts|tsx)$',
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
};

export default createJestConfig(config);
