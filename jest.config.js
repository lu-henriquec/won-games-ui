module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts'
  ],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
