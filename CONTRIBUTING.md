# Contributing

## Setup

```bash
git clone https://github.com/amilzbot/solana-kit-prettified.git
cd solana-kit-prettified
npm install --include=dev
```

## Development

```bash
npm run typecheck    # Type-check all source files
npm test             # Run type compatibility tests (vitest + expect-type)
npm run build        # Build CJS + ESM + .d.ts via tsup
```

## Adding new Pretty types

1. Create or edit a file in `src/core/`, `src/plugins/`, or `src/programs/`
2. Follow the pattern:
   ```typescript
   import type { OriginalType } from '@solana/package';
   import type { Prettify } from '../prettify.js';

   export type PrettyOriginalType<TGeneric = Default> = Prettify<OriginalType<TGeneric>>;
   export type { OriginalType } from '@solana/package';
   ```
3. Re-export from the appropriate `index.ts` barrel
4. Add bidirectional assignability tests in `src/__tests__/`
5. Run `npm run typecheck && npm test && npm run build`

## Rules

- **Preserve all generic parameters** from the original type
- **Re-export originals** so consumers can import both from one place
- **Branded primitives** (Address, Signature, Lamports) pass through `Prettify` unchanged — don't force-prettify them
- **Use shallow `Prettify`** by default; `PrettifyDeep` only when nested intersections need flattening
- **Test assignability both directions**: `Pretty → Original` AND `Original → Pretty`

## Token-2022

Token-2022 types are in a separate entry point (`src/programs/token-2022.ts`) due to name collisions with base token. Don't add them to the main barrel.
