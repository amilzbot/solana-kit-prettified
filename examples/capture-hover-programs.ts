/**
 * Programmatic hover capture for Phase 3 program types.
 * Uses TS Language Service QuickInfo API (same as VS Code hover).
 */
import ts from 'typescript';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const testFile = resolve(__dirname, 'hover-test-programs.ts');

// Read tsconfig
const configPath = resolve(rootDir, 'tsconfig.json');
const configFile = ts.readConfigFile(configPath, (p) => readFileSync(p, 'utf-8'));
const parsed = ts.parseJsonConfigFileContent(configFile.config, ts.sys, rootDir);

// Create program with the hover test file included
const program = ts.createProgram([testFile], {
  ...parsed.options,
  noEmit: true,
});

const checker = program.getTypeChecker();
const sourceFile = program.getSourceFile(testFile)!;
const sourceText = sourceFile.getFullText();

// Find all `type _Xxx = ...` declarations and capture the resolved type
const results: { name: string; display: string }[] = [];

ts.forEachChild(sourceFile, (node) => {
  if (ts.isTypeAliasDeclaration(node) && node.name.text.startsWith('_')) {
    const type = checker.getTypeAtLocation(node.name);
    const display = checker.typeToString(
      type,
      node,
      ts.TypeFormatFlags.NoTruncation | ts.TypeFormatFlags.MultilineObjectLiterals
    );
    results.push({ name: node.name.text, display });
  }
});

// Format output
let output = '# Phase 3: Program Types — Hover Results\n\n';
output += `Generated: ${new Date().toISOString()}\n\n`;

// Group by pairs (Original vs Pretty)
for (let i = 0; i < results.length; i++) {
  const r = results[i];
  output += `## \`${r.name}\`\n\n`;
  output += '```typescript\n';
  output += `type ${r.name} = ${r.display}\n`;
  output += '```\n\n';
}

const outPath = resolve(rootDir, 'docs/screenshots/hover-results-programs.md');
writeFileSync(outPath, output);
console.log(`Wrote ${results.length} hover results to ${outPath}`);
