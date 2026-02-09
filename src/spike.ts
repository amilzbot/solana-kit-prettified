/**
 * T02 Spike: Verify Prettify behavior against Kit's branded/intersection types.
 * This file is a type-level test — it should compile with zero errors.
 * Run: npx tsc --noEmit src/spike.ts
 */

import type { Prettify, PrettifyDeep } from './prettify';

// ============================================================
// 1. Simulate Kit's nominal type system (avoid import issues)
// ============================================================

type NominalType<TKey extends string, TMarker extends string> = {
    readonly [K in `__${TKey}:@solana/kit`]: TMarker;
};
type Brand<T, TBrandName extends string> = NominalType<'brand', TBrandName> & T;
type EncodedString<T extends string, TEncoding extends string> = NominalType<'stringEncoding', TEncoding> & T;

// ============================================================
// 2. Recreate Kit types locally
// ============================================================

type Address<TAddress extends string = string> = Brand<EncodedString<TAddress, 'base58'>, 'Address'>;
type Signature = Brand<EncodedString<string, 'base58'>, 'Signature'>;
type Lamports = Brand<bigint, 'Lamports'>;

type BaseAccount = {
    readonly executable: boolean;
    readonly lamports: Lamports;
    readonly programAddress: Address;
    readonly space: bigint;
};

type Account<TData extends Uint8Array | object = Uint8Array, TAddress extends string = string> = BaseAccount & {
    readonly address: Address<TAddress>;
    readonly data: TData;
};

interface Instruction<TProgramAddress extends string = string> {
    readonly accounts?: readonly unknown[];
    readonly data?: Uint8Array;
    readonly programAddress: Address<TProgramAddress>;
}

interface InstructionWithAccounts<TAccounts extends readonly unknown[]> extends Instruction {
    readonly accounts: TAccounts;
}

interface InstructionWithData<TData extends Uint8Array> extends Instruction {
    readonly data: TData;
}

// Combined instruction (like Codama output)
type CombinedInstruction = Instruction<'11111111111111111111111111111111'>
    & InstructionWithAccounts<readonly [unknown, unknown]>
    & InstructionWithData<Uint8Array>;

type TransactionMessage = {
    readonly instructions: readonly Instruction[];
    readonly version: 'legacy' | 0;
};

type TransactionMessageWithFeePayer<TAddress extends string = string> = TransactionMessage & {
    readonly feePayer: Address<TAddress>;
};

// ============================================================
// 3. Apply Prettify and test assignability
// ============================================================

// --- Address (branded string intersection) ---
type PrettyAddress<T extends string = string> = Prettify<Address<T>>;

// Branded string: Prettify maps only object keys. The `& string` part matters.
// Test: can we assign Address to PrettyAddress and vice versa?
declare const addr: Address<'abc'>;
declare const prettyAddr: PrettyAddress<'abc'>;
const _a1: Address<'abc'> = prettyAddr;    // PrettyAddress → Address
const _a2: PrettyAddress<'abc'> = addr;    // Address → PrettyAddress

// --- Signature (same pattern as Address) ---
type PrettySignature = Prettify<Signature>;
declare const sig: Signature;
declare const prettySig: PrettySignature;
const _s1: Signature = prettySig;
const _s2: PrettySignature = sig;

// --- Lamports (branded bigint) ---
type PrettyLamports = Prettify<Lamports>;
declare const lam: Lamports;
declare const prettyLam: PrettyLamports;
const _l1: Lamports = prettyLam;
const _l2: PrettyLamports = lam;

// --- Account (intersection — the main target) ---
type PrettyAccount<TData extends Uint8Array | object = Uint8Array, TAddress extends string = string> =
    Prettify<Account<TData, TAddress>>;

declare const acct: Account<{ name: string }, 'abc'>;
declare const prettyAcct: PrettyAccount<{ name: string }, 'abc'>;
const _ac1: Account<{ name: string }, 'abc'> = prettyAcct;    // Pretty → Original
const _ac2: PrettyAccount<{ name: string }, 'abc'> = acct;    // Original → Pretty

// --- CombinedInstruction (multi-interface intersection) ---
type PrettyCombinedInstruction = Prettify<CombinedInstruction>;
declare const cix: CombinedInstruction;
declare const prettyCix: PrettyCombinedInstruction;
const _ci1: CombinedInstruction = prettyCix;
const _ci2: PrettyCombinedInstruction = cix;

// --- TransactionMessageWithFeePayer (intersection) ---
type PrettyTxMsgWithFeePayer<T extends string = string> = Prettify<TransactionMessageWithFeePayer<T>>;
declare const txMsg: TransactionMessageWithFeePayer<'abc'>;
declare const prettyTxMsg: PrettyTxMsgWithFeePayer<'abc'>;
const _tm1: TransactionMessageWithFeePayer<'abc'> = prettyTxMsg;
const _tm2: PrettyTxMsgWithFeePayer<'abc'> = txMsg;

// ============================================================
// 4. Brand discrimination (Address ≠ Signature)
// ============================================================

// @ts-expect-error Address should not be assignable to Signature
const _brand1: Signature = addr;
// @ts-expect-error Signature should not be assignable to Address
const _brand2: Address = sig;
// @ts-expect-error PrettyAddress should not be assignable to PrettySignature
const _brand3: PrettySignature = prettyAddr;
// @ts-expect-error PrettySignature should not be assignable to PrettyAddress
const _brand4: PrettyAddress = prettySig;

// ============================================================
// 5. PrettifyDeep test on Account
// ============================================================

type DeepPrettyAccount<TData extends Uint8Array | object = Uint8Array, TAddress extends string = string> =
    PrettifyDeep<Account<TData, TAddress>>;

declare const deepAcct: DeepPrettyAccount<{ name: string }, 'abc'>;
const _da1: Account<{ name: string }, 'abc'> = deepAcct;
const _da2: DeepPrettyAccount<{ name: string }, 'abc'> = acct;

// ============================================================
// Done. If this file compiles, the spike passes.
// ============================================================
export {};
