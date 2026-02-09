import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/programs/token-2022.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
});
