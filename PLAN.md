# Solana Kit Prettify Wrappers — Project Plan

## Problem

Solana Kit (`@solana/kit`) is a masterclass in TypeScript — deeply layered generics, branded types, intersections across 30+ packages. The result: IDE hover/go-to-definition shows cascading type gibberish instead of readable shapes. Developers can't glance at a function and know what arguments to pass.

## Solution

A standalone package (`solana-kit-prettified`) that re-exports Kit types through a `Prettify<T>` utility, forcing TypeScript to flatten intersections and mapped types into readable object shapes in IDE tooltips.

**Repo:** https://github.com/amilzbot/solana-kit-prettified

## Core Utility

```typescript
type Prettify<T> = { [K in keyof T]: T[K] } & {};
type PrettifyDeep<T> = T extends (...args: infer A) => infer R
  ? (...args: PrettifyDeep<A>) => PrettifyDeep<R>
  : T extends object
    ? { [K in keyof T]: PrettifyDeep<T[K]> } & {}
    : T;
```

## Architecture Notes (from source review)

### Nominal/Branded Types

Kit uses a custom nominal type system in `@solana/nominal-types`:

```typescript
// The foundation — property-based branding, NOT unique symbol
type NominalType<TKey extends string, TMarker extends string> = {
    readonly [K in `__${TKey}:@solana/kit`]: TMarker;
};
type Brand<T, TBrandName extends string> = NominalType<'brand', TBrandName> & T;
type EncodedString<T extends string, TEncoding extends StringEncoding> = NominalType<'encoding', TEncoding> & T;
```

**Key insight:** These are NOT `unique symbol` brands — they're mapped property brands (`__brand:@solana/kit`, `__encoding:@solana/kit`, etc.). This means `Prettify<T>` should preserve them since it maps over keys, and the branded properties will appear as normal readonly properties in the flattened type. **This is good news** — it means the branded type risk is lower than initially feared. Still needs T02 verification.

### Address Type Chain

```
Address<TAddress> = Brand<EncodedString<TAddress, 'base58'>, 'Address'>
                  = NominalType<'brand', 'Address'> & NominalType<'encoding', 'base58'> & TAddress
                  = { readonly '__brand:@solana/kit': 'Address' } & { readonly '__encoding:@solana/kit': 'base58' } & TAddress
```

After `Prettify`, this should flatten to: `{ readonly '__brand:@solana/kit': 'Address'; readonly '__encoding:@solana/kit': 'base58' } & TAddress`. The string intersection with `TAddress` is the only concern — `Prettify` only maps object keys, so the `& string` part may behave differently. **Must test.**

### Account Type Chain

```
Account<TData, TAddress> = BaseAccount & { address: Address<TAddress>, data: TData }
BaseAccount = { executable: boolean, lamports: Lamports, programAddress: Address, space: bigint }
```

This is a straightforward intersection — `Prettify` will flatten it perfectly into one object shape. This is the highest-value target.

### Instruction Type

```typescript
interface Instruction<TProgramAddress, TAccounts> {
    readonly accounts?: TAccounts;
    readonly data?: ReadonlyUint8Array;
    readonly programAddress: Address<TProgramAddress>;
}
```

Already an interface (not intersection), so hover is actually decent here. But combined types like `InstructionWithAccounts & InstructionWithData` will benefit from prettifying.

### Program Client Types (Codama-generated)

System program `TransferSolInput` is actually quite clean:
```typescript
type TransferSolInput<TAccountSource, TAccountDestination> = {
    source: TransactionSigner<TAccountSource>;
    destination: Address<TAccountDestination>;
    amount: TransferSolInstructionDataArgs['amount'];
};
```

But the *instruction return type* is where it gets ugly:
```typescript
type TransferSolInstruction<TProgram, TAccountSource, TAccountDestination, TRemainingAccounts>
  = Instruction<TProgram>
  & InstructionWithData<ReadonlyUint8Array>
  & InstructionWithAccounts<[WritableSignerAccount<...>, WritableAccount<...>, ...TRemainingAccounts]>
```

**These instruction return types are the highest-value Codama targets.**

### Kit Plugins Client Types

The `createDefaultRpcClient` etc. return types are built via chained `.use()` calls which produce deeply nested intersection types from the plugin system. These will be among the worst tooltip offenders and highest value to prettify.

The plugin system uses `createEmptyClient().use(plugin1).use(plugin2)...` where each `.use()` intersects the client type with the plugin's contributed properties. The final type is an intersection of 4-5 plugin contributions.

## Package Structure

```
solana-kit-prettified/
├── package.json
├── tsconfig.json
├── src/
│   ├── prettify.ts              # Prettify + PrettifyDeep utilities
│   ├── index.ts                 # Re-exports everything
│   ├── core/
│   │   ├── addresses.ts         # Address, ProgramDerivedAddress
│   │   ├── keys.ts              # Signature, KeyPairSigner, TransactionSigner, MessageSigner
│   │   ├── accounts.ts          # Account, MaybeAccount, EncodedAccount, DecodedAccount, BaseAccount
│   │   ├── instructions.ts      # Instruction, AccountMeta, AccountLookupMeta, InstructionWithAccounts, InstructionWithData
│   │   ├── transaction-messages.ts  # TransactionMessage, TransactionMessageWithFeePayer, CompilableTransactionMessage
│   │   ├── transactions.ts      # Transaction, FullySignedTransaction
│   │   ├── rpc.ts               # Rpc, RpcSubscriptions, SolanaRpcApi, Lamports, Commitment, Slot
│   │   └── codecs.ts            # Encoder, Decoder, Codec
│   ├── plugins/
│   │   ├── clients.ts           # Return types of createDefaultRpcClient, createDefaultLocalhostRpcClient, createDefaultLiteSVMClient
│   │   └── plans.ts             # TransactionPlanExecutor, TransactionPlan variants, TransactionPlanResult variants
│   └── programs/
│       ├── system.ts            # TransferSolInstruction, CreateAccountInstruction, etc. (instruction return types + inputs)
│       ├── token.ts             # All token instruction types + Mint/Token account types
│       ├── token-2022.ts        # Same as token + extension config types
│       └── associated-token.ts  # ATA instruction types
```

## Phase Breakdown

### Phase 0: Scaffolding + Spike

Set up the package and validate the `Prettify` approach against Kit's nominal type system.

### Phase 1: Core Kit Types (highest impact)

The types every Solana developer touches daily.

| Package | Types | Notes |
|---|---|---|
| `@solana/addresses` | `Address`, `ProgramDerivedAddress` | Branded via `NominalType` — test carefully |
| `@solana/keys` | `Signature`, `KeyPairSigner`, `TransactionSigner`, `MessageSigner` | `Signature` is branded |
| `@solana/accounts` | `Account`, `MaybeAccount`, `EncodedAccount`, `DecodedAccount`, `BaseAccount` | Intersection-heavy — best `Prettify` target |
| `@solana/instructions` | `Instruction`, `AccountMeta`, `AccountLookupMeta`, `InstructionWithAccounts`, `InstructionWithData` | `Instruction` is interface (ok), but combined types need it |
| `@solana/transaction-messages` | `TransactionMessage`, `TransactionMessageWithFeePayer`, `CompilableTransactionMessage` | Union + intersection types |
| `@solana/transactions` | `Transaction`, `FullySignedTransaction` | |
| `@solana/rpc-types` | `Lamports`, `Commitment`, `Slot`, `UnixTimestamp` | `Lamports` is branded bigint |
| `@solana/rpc` | `Rpc`, `RpcSubscriptions`, `SolanaRpcApi` | Complex generics |
| `@solana/codecs-core` | `Encoder`, `Decoder`, `Codec` | |

### Phase 2: Kit Plugins

| Package | Types | Notes |
|---|---|---|
| `@solana/kit-plugins` | Return types of `createDefaultRpcClient`, `createDefaultLocalhostRpcClient`, `createDefaultLiteSVMClient` | Chained `.use()` intersection nightmare |
| `@solana/kit-plugins` | Plugin configs: `rpc`, `payer`, `sendTransactions`, `airdrop`, `litesvm` | From individual plugin packages |
| `@solana/instruction-plans` | `TransactionPlan`, `SingleTransactionPlan`, `ParallelTransactionPlan`, `SequentialTransactionPlan` | Recursive union type |
| `@solana/instruction-plans` | `TransactionPlanExecutor`, `TransactionPlanResult`, `TransactionPlanExecutorConfig` | Generic-heavy |

### Phase 3: Program Clients (Codama-generated)

| Program | Types | Notes |
|---|---|---|
| `@solana-program/system` | `TransferSolInstruction`, `CreateAccountInstruction`, `AllocateInstruction`, `AssignInstruction`, `AdvanceNonceAccountInstruction` + all `*Input` types | Instruction types are multi-intersection. Inputs are cleaner but still generic |
| `@solana-program/token` | All instruction types + `Mint`, `Token` account types | |
| `@solana-program/token-2022` | Same as token + extension types: `TransferFeeConfig`, etc. | Most complex program client |
| `@solana-program/associated-token-account` | `CreateInstruction`, `CreateIdempotentInstruction` + inputs | |

## Implementation Pattern

```typescript
// src/core/accounts.ts
import type { Account, MaybeAccount, BaseAccount } from '@solana/accounts';
import type { Prettify } from '../prettify';

/** Account with flattened type for readable IDE tooltips. Drop-in compatible with Account. */
export type PrettyAccount<TData = Uint8Array, TAddress extends string = string> = Prettify<Account<TData, TAddress>>;

/** MaybeAccount with flattened type. */
export type PrettyMaybeAccount<TData = Uint8Array, TAddress extends string = string> = Prettify<MaybeAccount<TData, TAddress>>;

// Re-export originals
export type { Account, MaybeAccount, BaseAccount } from '@solana/accounts';
```

## Design Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Naming | `Pretty` prefix (e.g. `PrettyAccount`) | No collision, clear intent |
| Generics | Preserve all generic params | Drop-in compatibility |
| Dependencies | Peer deps only | Use developer's existing Kit install |
| Versioning | Track Kit versions | Breaking Kit type changes = major bump |
| Branded types | Shallow `Prettify` for branded primitives, `PrettifyDeep` for objects | Preserve type safety while improving readability |

## Risks & Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Branded type stripping | Type safety loss | T02 spike tests each branded type individually |
| Codama-generated type churn | Maintenance burden | CI against latest program client releases |
| TS recursion limits | Build failures on deep types | Cap `PrettifyDeep` depth, fall back to shallow |
| Kit ships fast | Stale wrappers | Weekly CI cron checking against latest Kit |
| `& string` intersection in Address | Prettify can't map string primitives | May need custom handling for primitive-intersected brands |
