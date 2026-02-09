/**
 * Programmatic hover capture for plugin types (Phase 2).
 * Run: node examples/capture-hover-plugins.ts
 */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const ts = require('/usr/local/lib/node_modules/typescript');
import * as path from 'path';
import * as fs from 'fs';

const projectDir = path.resolve(import.meta.dirname, '..');
const hoverTestFile = path.resolve(projectDir, 'examples/hover-test-plugins.ts');
const outputFile = path.resolve(projectDir, 'docs/screenshots/hover-results-plugins.md');

const configPath = ts.findConfigFile(projectDir, ts.sys.fileExists, 'tsconfig.json');
const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
const parsed = ts.parseJsonConfigFileContent(configFile.config, ts.sys, projectDir);

const files = [...parsed.fileNames, hoverTestFile];
const fileVersions = new Map();
files.forEach(f => fileVersions.set(f, '1'));

const serviceHost = {
  getScriptFileNames: () => files,
  getScriptVersion: (fileName) => fileVersions.get(fileName) || '1',
  getScriptSnapshot: (fileName) => {
    if (!fs.existsSync(fileName)) return undefined;
    return ts.ScriptSnapshot.fromString(fs.readFileSync(fileName, 'utf8'));
  },
  getCurrentDirectory: () => projectDir,
  getCompilationSettings: () => ({ ...parsed.options, noEmit: true }),
  getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
  fileExists: ts.sys.fileExists,
  readFile: ts.sys.readFile,
  readDirectory: ts.sys.readDirectory,
  directoryExists: ts.sys.directoryExists,
  getDirectories: ts.sys.getDirectories,
};

const service = ts.createLanguageService(serviceHost, ts.createDocumentRegistry());
const sourceText = fs.readFileSync(hoverTestFile, 'utf8');
const sourceFile = ts.createSourceFile(hoverTestFile, sourceText, ts.ScriptTarget.ES2022, true);

const results = [];

ts.forEachChild(sourceFile, (node) => {
  if (ts.isTypeAliasDeclaration(node)) {
    const name = node.name.text;
    const pos = node.name.getStart(sourceFile);
    const info = service.getQuickInfoAtPosition(hoverTestFile, pos);
    const display = info ? ts.displayPartsToString(info.displayParts) : '(no info)';
    const line = sourceFile.getLineAndCharacterOfPosition(pos).line + 1;
    results.push({ name, display, line });
  }
});

const lines = [
  '# Plugin Hover Test Results (Phase 2)',
  '',
  `Generated: ${new Date().toISOString()}`,
  '',
  'Compare Original* vs Prettified* pairs for plugin types.',
  '',
  '---',
  '',
];

for (const { name, display, line } of results) {
  lines.push(`### \`${name}\` (line ${line})`);
  lines.push('```typescript');
  lines.push(display);
  lines.push('```');
  lines.push('');
}

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, lines.join('\n'));
console.log(`✅ Wrote ${results.length} type hover infos to ${path.relative(projectDir, outputFile)}`);
