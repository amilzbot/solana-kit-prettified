/**
 * Prettified instruction types from `@solana/instructions`.
 *
 * The main value here is flattening combined instruction types like
 * `Instruction & InstructionWithAccounts & InstructionWithData` — which is
 * what Codama-generated program clients produce — into a single readable shape.
 *
 * Individual interfaces (Instruction, AccountMeta, AccountLookupMeta) are already
 * fairly clean in tooltips, but we provide Pretty* versions for consistency and
 * for cases where they appear in intersections.
 */
import type { ReadonlyUint8Array } from '@solana/codecs-core';
import type {
    AccountLookupMeta,
    AccountMeta,
    Instruction,
    InstructionWithAccounts,
    InstructionWithData,
    ReadonlyAccount,
    ReadonlyAccountLookup,
    ReadonlySignerAccount,
    WritableAccount,
    WritableAccountLookup,
    WritableSignerAccount,
} from '@solana/instructions';

import type { Prettify } from '../prettify.js';

// --- Account Meta types ---

/** AccountMeta with flattened tooltip. Drop-in compatible with AccountMeta. */
export type PrettyAccountMeta<TAddress extends string = string> = Prettify<AccountMeta<TAddress>>;

/** ReadonlyAccount with flattened tooltip. */
export type PrettyReadonlyAccount<TAddress extends string = string> = Prettify<ReadonlyAccount<TAddress>>;

/** WritableAccount with flattened tooltip. */
export type PrettyWritableAccount<TAddress extends string = string> = Prettify<WritableAccount<TAddress>>;

/** ReadonlySignerAccount with flattened tooltip. */
export type PrettyReadonlySignerAccount<TAddress extends string = string> = Prettify<ReadonlySignerAccount<TAddress>>;

/** WritableSignerAccount with flattened tooltip. */
export type PrettyWritableSignerAccount<TAddress extends string = string> = Prettify<WritableSignerAccount<TAddress>>;

// --- Account Lookup Meta types ---

/** AccountLookupMeta with flattened tooltip. */
export type PrettyAccountLookupMeta<
    TAddress extends string = string,
    TLookupTableAddress extends string = string,
> = Prettify<AccountLookupMeta<TAddress, TLookupTableAddress>>;

/** ReadonlyAccountLookup with flattened tooltip. */
export type PrettyReadonlyAccountLookup<
    TAddress extends string = string,
    TLookupTableAddress extends string = string,
> = Prettify<ReadonlyAccountLookup<TAddress, TLookupTableAddress>>;

/** WritableAccountLookup with flattened tooltip. */
export type PrettyWritableAccountLookup<
    TAddress extends string = string,
    TLookupTableAddress extends string = string,
> = Prettify<WritableAccountLookup<TAddress, TLookupTableAddress>>;

// --- Instruction types ---

/** Instruction with flattened tooltip. Drop-in compatible with Instruction. */
export type PrettyInstruction<
    TProgramAddress extends string = string,
    TAccounts extends readonly (AccountLookupMeta | AccountMeta)[] = readonly (AccountLookupMeta | AccountMeta)[],
> = Prettify<Instruction<TProgramAddress, TAccounts>>;

/** InstructionWithAccounts with flattened tooltip. */
export type PrettyInstructionWithAccounts<
    TAccounts extends readonly (AccountLookupMeta | AccountMeta)[],
> = Prettify<InstructionWithAccounts<TAccounts>>;

/** InstructionWithData with flattened tooltip. */
export type PrettyInstructionWithData<TData extends ReadonlyUint8Array> = Prettify<InstructionWithData<TData>>;

/**
 * Combined instruction type — the most common pattern from Codama-generated program clients.
 * Flattens `Instruction & InstructionWithAccounts & InstructionWithData` into one readable shape.
 *
 * This is the highest-value prettify target for instructions.
 */
export type PrettyCombinedInstruction<
    TProgramAddress extends string = string,
    TAccounts extends readonly (AccountLookupMeta | AccountMeta)[] = readonly (AccountLookupMeta | AccountMeta)[],
    TData extends ReadonlyUint8Array = ReadonlyUint8Array,
> = Prettify<
    Instruction<TProgramAddress, TAccounts> &
    InstructionWithAccounts<TAccounts> &
    InstructionWithData<TData>
>;

// --- Re-exports ---
export type {
    AccountLookupMeta,
    AccountMeta,
    AccountRole,
    Instruction,
    InstructionWithAccounts,
    InstructionWithData,
    ReadonlyAccount,
    ReadonlyAccountLookup,
    ReadonlySignerAccount,
    WritableAccount,
    WritableAccountLookup,
    WritableSignerAccount,
} from '@solana/instructions';
