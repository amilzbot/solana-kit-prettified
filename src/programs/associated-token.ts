/**
 * Prettified types for the Associated Token Account program and the Memo program.
 *
 * ATA instructions live in `@solana-program/token` but belong to a separate
 * on-chain program (ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL).
 *
 * Instruction types are multi-intersection (Instruction & InstructionWithData &
 * InstructionWithAccounts) — the same high-value Prettify targets as system/token.
 *
 * Also includes helper instruction plans (transferToATA, mintToATA) and the
 * findAssociatedTokenPda utility.
 */
import type { Prettify } from '../prettify.js';

import type {
    // CreateAssociatedToken
    CreateAssociatedTokenInstruction,
    CreateAssociatedTokenInput,
    CreateAssociatedTokenAsyncInput,
    CreateAssociatedTokenInstructionData,
    CreateAssociatedTokenInstructionDataArgs,
    ParsedCreateAssociatedTokenInstruction,

    // CreateAssociatedTokenIdempotent
    CreateAssociatedTokenIdempotentInstruction,
    CreateAssociatedTokenIdempotentInput,
    CreateAssociatedTokenIdempotentAsyncInput,
    CreateAssociatedTokenIdempotentInstructionData,
    CreateAssociatedTokenIdempotentInstructionDataArgs,
    ParsedCreateAssociatedTokenIdempotentInstruction,

    // RecoverNestedAssociatedToken
    RecoverNestedAssociatedTokenInstruction,
    RecoverNestedAssociatedTokenInput,
    RecoverNestedAssociatedTokenAsyncInput,
    RecoverNestedAssociatedTokenInstructionData,
    RecoverNestedAssociatedTokenInstructionDataArgs,
    ParsedRecoverNestedAssociatedTokenInstruction,

    // Program
    AssociatedTokenInstruction,
    ParsedAssociatedTokenInstruction,

    // PDA
    AssociatedTokenSeeds,
} from '@solana-program/token';

import type { AccountMeta } from '@solana/kit';

// ─── CreateAssociatedToken ───────────────────────────────────────────────────

/** Prettified CreateAssociatedToken instruction (flattens Instruction & InstructionWithData & InstructionWithAccounts). */
export type PrettyCreateAssociatedTokenInstruction<
    TProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
    TAccountPayer extends string | AccountMeta<string> = string,
    TAccountAta extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountSystemProgram extends string | AccountMeta<string> = '11111111111111111111111111111111',
    TAccountTokenProgram extends string | AccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<CreateAssociatedTokenInstruction<TProgram, TAccountPayer, TAccountAta, TAccountOwner, TAccountMint, TAccountSystemProgram, TAccountTokenProgram, TRemainingAccounts>>;

/** Prettified CreateAssociatedToken sync input. */
export type PrettyCreateAssociatedTokenInput<
    TAccountPayer extends string = string,
    TAccountAta extends string = string,
    TAccountOwner extends string = string,
    TAccountMint extends string = string,
    TAccountSystemProgram extends string = string,
    TAccountTokenProgram extends string = string,
> = Prettify<CreateAssociatedTokenInput<TAccountPayer, TAccountAta, TAccountOwner, TAccountMint, TAccountSystemProgram, TAccountTokenProgram>>;

/** Prettified CreateAssociatedToken async input. */
export type PrettyCreateAssociatedTokenAsyncInput<
    TAccountPayer extends string = string,
    TAccountAta extends string = string,
    TAccountOwner extends string = string,
    TAccountMint extends string = string,
    TAccountSystemProgram extends string = string,
    TAccountTokenProgram extends string = string,
> = Prettify<CreateAssociatedTokenAsyncInput<TAccountPayer, TAccountAta, TAccountOwner, TAccountMint, TAccountSystemProgram, TAccountTokenProgram>>;

/** Prettified CreateAssociatedToken instruction data. */
export type PrettyCreateAssociatedTokenInstructionData = Prettify<CreateAssociatedTokenInstructionData>;

/** Prettified CreateAssociatedToken instruction data args. */
export type PrettyCreateAssociatedTokenInstructionDataArgs = Prettify<CreateAssociatedTokenInstructionDataArgs>;

/** Prettified parsed CreateAssociatedToken instruction. */
export type PrettyParsedCreateAssociatedTokenInstruction<
    TProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedCreateAssociatedTokenInstruction<TProgram, TAccountMetas>>;

// ─── CreateAssociatedTokenIdempotent ─────────────────────────────────────────

/** Prettified CreateAssociatedTokenIdempotent instruction. */
export type PrettyCreateAssociatedTokenIdempotentInstruction<
    TProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
    TAccountPayer extends string | AccountMeta<string> = string,
    TAccountAta extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountSystemProgram extends string | AccountMeta<string> = '11111111111111111111111111111111',
    TAccountTokenProgram extends string | AccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<CreateAssociatedTokenIdempotentInstruction<TProgram, TAccountPayer, TAccountAta, TAccountOwner, TAccountMint, TAccountSystemProgram, TAccountTokenProgram, TRemainingAccounts>>;

/** Prettified CreateAssociatedTokenIdempotent sync input. */
export type PrettyCreateAssociatedTokenIdempotentInput<
    TAccountPayer extends string = string,
    TAccountAta extends string = string,
    TAccountOwner extends string = string,
    TAccountMint extends string = string,
    TAccountSystemProgram extends string = string,
    TAccountTokenProgram extends string = string,
> = Prettify<CreateAssociatedTokenIdempotentInput<TAccountPayer, TAccountAta, TAccountOwner, TAccountMint, TAccountSystemProgram, TAccountTokenProgram>>;

/** Prettified CreateAssociatedTokenIdempotent async input. */
export type PrettyCreateAssociatedTokenIdempotentAsyncInput<
    TAccountPayer extends string = string,
    TAccountAta extends string = string,
    TAccountOwner extends string = string,
    TAccountMint extends string = string,
    TAccountSystemProgram extends string = string,
    TAccountTokenProgram extends string = string,
> = Prettify<CreateAssociatedTokenIdempotentAsyncInput<TAccountPayer, TAccountAta, TAccountOwner, TAccountMint, TAccountSystemProgram, TAccountTokenProgram>>;

/** Prettified CreateAssociatedTokenIdempotent instruction data. */
export type PrettyCreateAssociatedTokenIdempotentInstructionData = Prettify<CreateAssociatedTokenIdempotentInstructionData>;

/** Prettified CreateAssociatedTokenIdempotent instruction data args. */
export type PrettyCreateAssociatedTokenIdempotentInstructionDataArgs = Prettify<CreateAssociatedTokenIdempotentInstructionDataArgs>;

/** Prettified parsed CreateAssociatedTokenIdempotent instruction. */
export type PrettyParsedCreateAssociatedTokenIdempotentInstruction<
    TProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedCreateAssociatedTokenIdempotentInstruction<TProgram, TAccountMetas>>;

// ─── RecoverNestedAssociatedToken ────────────────────────────────────────────

/** Prettified RecoverNestedAssociatedToken instruction. */
export type PrettyRecoverNestedAssociatedTokenInstruction<
    TProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
    TAccountNestedAssociatedAccountAddress extends string | AccountMeta<string> = string,
    TAccountNestedTokenMintAddress extends string | AccountMeta<string> = string,
    TAccountDestinationAssociatedAccountAddress extends string | AccountMeta<string> = string,
    TAccountOwnerAssociatedAccountAddress extends string | AccountMeta<string> = string,
    TAccountOwnerTokenMintAddress extends string | AccountMeta<string> = string,
    TAccountWalletAddress extends string | AccountMeta<string> = string,
    TAccountTokenProgram extends string | AccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<RecoverNestedAssociatedTokenInstruction<TProgram, TAccountNestedAssociatedAccountAddress, TAccountNestedTokenMintAddress, TAccountDestinationAssociatedAccountAddress, TAccountOwnerAssociatedAccountAddress, TAccountOwnerTokenMintAddress, TAccountWalletAddress, TAccountTokenProgram, TRemainingAccounts>>;

/** Prettified RecoverNestedAssociatedToken sync input. */
export type PrettyRecoverNestedAssociatedTokenInput<
    TAccountNestedAssociatedAccountAddress extends string = string,
    TAccountNestedTokenMintAddress extends string = string,
    TAccountDestinationAssociatedAccountAddress extends string = string,
    TAccountOwnerAssociatedAccountAddress extends string = string,
    TAccountOwnerTokenMintAddress extends string = string,
    TAccountWalletAddress extends string = string,
    TAccountTokenProgram extends string = string,
> = Prettify<RecoverNestedAssociatedTokenInput<TAccountNestedAssociatedAccountAddress, TAccountNestedTokenMintAddress, TAccountDestinationAssociatedAccountAddress, TAccountOwnerAssociatedAccountAddress, TAccountOwnerTokenMintAddress, TAccountWalletAddress, TAccountTokenProgram>>;

/** Prettified RecoverNestedAssociatedToken async input. */
export type PrettyRecoverNestedAssociatedTokenAsyncInput<
    TAccountNestedAssociatedAccountAddress extends string = string,
    TAccountNestedTokenMintAddress extends string = string,
    TAccountDestinationAssociatedAccountAddress extends string = string,
    TAccountOwnerAssociatedAccountAddress extends string = string,
    TAccountOwnerTokenMintAddress extends string = string,
    TAccountWalletAddress extends string = string,
    TAccountTokenProgram extends string = string,
> = Prettify<RecoverNestedAssociatedTokenAsyncInput<TAccountNestedAssociatedAccountAddress, TAccountNestedTokenMintAddress, TAccountDestinationAssociatedAccountAddress, TAccountOwnerAssociatedAccountAddress, TAccountOwnerTokenMintAddress, TAccountWalletAddress, TAccountTokenProgram>>;

/** Prettified RecoverNestedAssociatedToken instruction data. */
export type PrettyRecoverNestedAssociatedTokenInstructionData = Prettify<RecoverNestedAssociatedTokenInstructionData>;

/** Prettified RecoverNestedAssociatedToken instruction data args. */
export type PrettyRecoverNestedAssociatedTokenInstructionDataArgs = Prettify<RecoverNestedAssociatedTokenInstructionDataArgs>;

/** Prettified parsed RecoverNestedAssociatedToken instruction. */
export type PrettyParsedRecoverNestedAssociatedTokenInstruction<
    TProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedRecoverNestedAssociatedTokenInstruction<TProgram, TAccountMetas>>;

// ─── Program-level types ─────────────────────────────────────────────────────

/** Prettified parsed ATA program instruction (discriminated union). */
export type PrettyParsedAssociatedTokenInstruction<
    TProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
> = Prettify<ParsedAssociatedTokenInstruction<TProgram>>;

/** Prettified AssociatedTokenSeeds (findAssociatedTokenPda input). */
export type PrettyAssociatedTokenSeeds = Prettify<AssociatedTokenSeeds>;

// ─── Re-exports ──────────────────────────────────────────────────────────────

// Original types
export type {
    CreateAssociatedTokenInstruction,
    CreateAssociatedTokenInput,
    CreateAssociatedTokenAsyncInput,
    CreateAssociatedTokenInstructionData,
    CreateAssociatedTokenInstructionDataArgs,
    ParsedCreateAssociatedTokenInstruction,

    CreateAssociatedTokenIdempotentInstruction,
    CreateAssociatedTokenIdempotentInput,
    CreateAssociatedTokenIdempotentAsyncInput,
    CreateAssociatedTokenIdempotentInstructionData,
    CreateAssociatedTokenIdempotentInstructionDataArgs,
    ParsedCreateAssociatedTokenIdempotentInstruction,

    RecoverNestedAssociatedTokenInstruction,
    RecoverNestedAssociatedTokenInput,
    RecoverNestedAssociatedTokenAsyncInput,
    RecoverNestedAssociatedTokenInstructionData,
    RecoverNestedAssociatedTokenInstructionDataArgs,
    ParsedRecoverNestedAssociatedTokenInstruction,

    AssociatedTokenInstruction,
    ParsedAssociatedTokenInstruction,
    AssociatedTokenSeeds,
} from '@solana-program/token';

// Value exports (functions, constants, enums)
export {
    // Constants
    ASSOCIATED_TOKEN_PROGRAM_ADDRESS,

    // Discriminators
    CREATE_ASSOCIATED_TOKEN_DISCRIMINATOR,
    getCreateAssociatedTokenDiscriminatorBytes,
    CREATE_ASSOCIATED_TOKEN_IDEMPOTENT_DISCRIMINATOR,
    getCreateAssociatedTokenIdempotentDiscriminatorBytes,
    RECOVER_NESTED_ASSOCIATED_TOKEN_DISCRIMINATOR,
    getRecoverNestedAssociatedTokenDiscriminatorBytes,

    // Instruction builders
    getCreateAssociatedTokenInstruction,
    getCreateAssociatedTokenInstructionAsync,
    getCreateAssociatedTokenIdempotentInstruction,
    getCreateAssociatedTokenIdempotentInstructionAsync,
    getRecoverNestedAssociatedTokenInstruction,
    getRecoverNestedAssociatedTokenInstructionAsync,

    // Codecs
    getCreateAssociatedTokenInstructionDataEncoder,
    getCreateAssociatedTokenInstructionDataDecoder,
    getCreateAssociatedTokenInstructionDataCodec,
    getCreateAssociatedTokenIdempotentInstructionDataEncoder,
    getCreateAssociatedTokenIdempotentInstructionDataDecoder,
    getCreateAssociatedTokenIdempotentInstructionDataCodec,
    getRecoverNestedAssociatedTokenInstructionDataEncoder,
    getRecoverNestedAssociatedTokenInstructionDataDecoder,
    getRecoverNestedAssociatedTokenInstructionDataCodec,

    // Parsers
    parseCreateAssociatedTokenInstruction,
    parseCreateAssociatedTokenIdempotentInstruction,
    parseRecoverNestedAssociatedTokenInstruction,
    identifyAssociatedTokenInstruction,
    parseAssociatedTokenInstruction,

    // PDA
    findAssociatedTokenPda,

    // Helper instruction plans
    getTransferToATAInstructionPlan,
    getTransferToATAInstructionPlanAsync,
    getMintToATAInstructionPlan,
    getMintToATAInstructionPlanAsync,
} from '@solana-program/token';
