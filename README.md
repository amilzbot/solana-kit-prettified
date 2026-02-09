# solana-kit-prettified

**Readable IDE tooltips for `@solana/kit` types.**

`@solana/kit` is beautifully engineered TypeScript — layered generics, branded types, intersections across 30+ packages. The tradeoff: IDE hover tooltips show cascading type algebra instead of readable shapes.

This package re-exports every Kit type through a `Prettify<T>` utility that forces TypeScript to flatten intersections into plain object shapes. Drop-in compatible. Zero runtime cost (types only).

## Before / After

**`Account` — intersection → flat object:**

```typescript
// Before: what VS Code shows for Account<TokenData>
type T = BaseAccount & {
  readonly address: Address<string>;
  readonly data: { mint: Address; owner: Address; amount: bigint };
}

// After: PrettyAccount<TokenData>
type T = {
  readonly executable: boolean;
  readonly lamports: Lamports;
  readonly programAddress: Address;
  readonly space: bigint;
  readonly address: Address<string>;
  readonly data: { mint: Address; owner: Address; amount: bigint };
}
```

**`CompilableTransactionMessage` — 3-way intersection → flat:**

```typescript
// Before
type T = TransactionMessage &
  ITransactionMessageWithFeePayer<Address<string>> & {
    readonly lifetimeConstraint: BlockhashLifetimeConstraint;
  }

// After: PrettyCompilableTransactionMessage
type T = {
  readonly version: 0 | "legacy";
  readonly instructions: readonly Instruction[];
  readonly feePayer: Address<string>;
  readonly lifetimeConstraint: BlockhashLifetimeConstraint;
}
```

**`KeyPairSigner` — nested intersection → flat:**

```typescript
// Before
type T = MessagePartialSigner<TAddress> &
  TransactionPartialSigner<TAddress> & {
    keyPair: CryptoKeyPair;
  }

// After: PrettyKeyPairSigner
type T = {
  readonly address: Address<TAddress>;
  readonly signMessages: (...) => Promise<...>;
  readonly signTransactions: (...) => Promise<...>;
  keyPair: CryptoKeyPair;
}
```

## Install

```bash
npm install solana-kit-prettified
```

Requires `@solana/kit` ≥ 6.0.0 as a peer dependency. Program-specific types require their respective `@solana-program/*` packages (all optional).

## Usage

```typescript
// Import prettified types alongside or instead of originals
import type {
  PrettyAccount,
  PrettyKeyPairSigner,
  PrettyCompilableTransactionMessage,
  PrettyTransferSolInstruction,
} from 'solana-kit-prettified';

// Use as drop-in replacements — fully assignable to/from originals
const account: PrettyAccount<TokenData> = await fetchAccount(rpc, address);
const signer: PrettyKeyPairSigner = await generateKeyPairSigner();
```

### Token-2022

Token-2022 types are in a separate entry point to avoid name collisions with base token:

```typescript
import type {
  PrettyToken2022Mint,
  PrettyTransferCheckedInstruction,
} from 'solana-kit-prettified/token-2022';
```

### Prettify your own types

```typescript
import type { Prettify, PrettifyDeep } from 'solana-kit-prettified';

// Flatten any intersection
type MyType = Prettify<BaseAccount & { extra: string }>;

// Recursively flatten nested objects
type MyDeepType = PrettifyDeep<ComplexNestedIntersection>;
```

## What's covered

| Category | Types | Value |
|---|---|---|
| **Core** | Account, MaybeAccount, KeyPairSigner, TransactionSigner, CompilableTransactionMessage, Transaction, Instruction, AccountMeta | High — flattens multi-intersection types |
| **Branded primitives** | Address, Signature, Lamports, etc. | Pass-through (already readable) |
| **Kit Plugins** | Client return types from `createDefaultRpcClient`, `createDefaultLocalhostRpcClient`, `createDefaultLiteSVMClient` | High — flattens chained `.use()` intersections |
| **Instruction Plans** | TransactionPlan variants, TransactionPlanResult variants, executor configs | Medium |
| **System Program** | All 13 instruction types + inputs + parsed types | High — flattens Instruction & InstructionWithData & InstructionWithAccounts |
| **Token Program** | All 22 instruction types + Mint, Token account types | High |
| **Token-2022** | All 94 instruction types + extension types | High |
| **ATA + Memo** | ATA instructions, AddMemo | Medium |

## How it works

```typescript
// The core utility — forces TS to evaluate intersections into flat objects
type Prettify<T> = T extends string | number | bigint | boolean | symbol
  ? T  // Preserve branded primitives (Address, Lamports, etc.)
  : { [K in keyof T]: T[K] } & {};
```

The primitive guard is critical: Kit's branded types (e.g., `Address = Brand<EncodedString<string, 'base58'>, 'Address'>`) are `string & { brands }` intersections. Naive `Prettify` would strip the string base. The guard returns branded primitives unchanged — they already show compact tooltips anyway.

## Type safety

- **Bidirectional assignability**: `PrettyAccount` is assignable to `Account` and vice versa
- **Brand discrimination preserved**: `PrettyAddress` is NOT assignable to `PrettySignature`
- **108 type compatibility tests** verify these properties across all wrapped types
- **Zero runtime code** — this package is 100% type-level

### Known limitations

4 system program instruction types with complex `AccountSignerMeta` tuple intersections don't survive `Prettify` round-trip in strict function signatures. They still show readable tooltips but aren't perfect drop-in replacements in those edge cases.

## Versioning

Tracks `@solana/kit` releases. Breaking Kit type changes = major version bump.

## License

MIT
