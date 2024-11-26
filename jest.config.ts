import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  testEnvironment: 'jsdom',
  testRegex: '/src/.*\\.test\\.(ts|tsx)$',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default createJestConfig(config);
