export default {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
  // Mocks the css styles
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.ts',
  },
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '<rootDir>/src/app/',
    '<rootDir>/src/reportWebVitals.ts',
    '<rootDir>/src/index.tsx',
  ],
};
