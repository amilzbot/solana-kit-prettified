/**
 * Prettified types from `@solana-program/system`.
 *
 * The highest-value targets are the instruction return types — each is a
 * multi-intersection of `Instruction & InstructionWithData & InstructionWithAccounts`
 * that Prettify flattens into a single readable object.
 *
 * Input types, InstructionData types, and Parsed* types are already plain objects
 * but we prettify them for consistency and tooltip improvement on generic params.
 */
import type { Prettify } from '../prettify.js';

import type {
    // Instructions
    TransferSolInstruction,
    TransferSolInput,
    TransferSolInstructionData,
    TransferSolInstructionDataArgs,
    ParsedTransferSolInstruction,

    CreateAccountInstruction,
    CreateAccountInput,
    CreateAccountInstructionData,
    CreateAccountInstructionDataArgs,
    ParsedCreateAccountInstruction,

    AllocateInstruction,
    AllocateInput,
    AllocateInstructionData,
    AllocateInstructionDataArgs,
    ParsedAllocateInstruction,

    AllocateWithSeedInstruction,
    AllocateWithSeedInput,
    AllocateWithSeedInstructionData,
    AllocateWithSeedInstructionDataArgs,
    ParsedAllocateWithSeedInstruction,

    AssignInstruction,
    AssignInput,
    AssignInstructionData,
    AssignInstructionDataArgs,
    ParsedAssignInstruction,

    AssignWithSeedInstruction,
    AssignWithSeedInput,
    AssignWithSeedInstructionData,
    AssignWithSeedInstructionDataArgs,
    ParsedAssignWithSeedInstruction,

    AdvanceNonceAccountInstruction,
    AdvanceNonceAccountInput,
    AdvanceNonceAccountInstructionData,
    AdvanceNonceAccountInstructionDataArgs,
    ParsedAdvanceNonceAccountInstruction,

    AuthorizeNonceAccountInstruction,
    AuthorizeNonceAccountInput,
    AuthorizeNonceAccountInstructionData,
    AuthorizeNonceAccountInstructionDataArgs,
    ParsedAuthorizeNonceAccountInstruction,

    InitializeNonceAccountInstruction,
    InitializeNonceAccountInput,
    InitializeNonceAccountInstructionData,
    InitializeNonceAccountInstructionDataArgs,
    ParsedInitializeNonceAccountInstruction,

    WithdrawNonceAccountInstruction,
    WithdrawNonceAccountInput,
    WithdrawNonceAccountInstructionData,
    WithdrawNonceAccountInstructionDataArgs,
    ParsedWithdrawNonceAccountInstruction,

    UpgradeNonceAccountInstruction,
    UpgradeNonceAccountInput,
    UpgradeNonceAccountInstructionData,
    UpgradeNonceAccountInstructionDataArgs,
    ParsedUpgradeNonceAccountInstruction,

    CreateAccountWithSeedInstruction,
    CreateAccountWithSeedInput,
    CreateAccountWithSeedInstructionData,
    CreateAccountWithSeedInstructionDataArgs,
    ParsedCreateAccountWithSeedInstruction,

    TransferSolWithSeedInstruction,
    TransferSolWithSeedInput,
    TransferSolWithSeedInstructionData,
    TransferSolWithSeedInstructionDataArgs,
    ParsedTransferSolWithSeedInstruction,

    // Account types
    Nonce as SystemNonce,
    NonceArgs as SystemNonceArgs,

    // Enums
    NonceState,
    NonceVersion,

    // Program address
    SYSTEM_PROGRAM_ADDRESS,
} from '@solana-program/system';

import type { AccountMeta } from '@solana/kit';

// ============================================================================
// Re-exports (originals available alongside Pretty* versions)
// ============================================================================

export type {
    // Instructions
    TransferSolInstruction,
    TransferSolInput,
    TransferSolInstructionData,
    TransferSolInstructionDataArgs,
    ParsedTransferSolInstruction,

    CreateAccountInstruction,
    CreateAccountInput,
    CreateAccountInstructionData,
    CreateAccountInstructionDataArgs,
    ParsedCreateAccountInstruction,

    AllocateInstruction,
    AllocateInput,
    AllocateInstructionData,
    AllocateInstructionDataArgs,
    ParsedAllocateInstruction,

    AllocateWithSeedInstruction,
    AllocateWithSeedInput,
    AllocateWithSeedInstructionData,
    AllocateWithSeedInstructionDataArgs,
    ParsedAllocateWithSeedInstruction,

    AssignInstruction,
    AssignInput,
    AssignInstructionData,
    AssignInstructionDataArgs,
    ParsedAssignInstruction,

    AssignWithSeedInstruction,
    AssignWithSeedInput,
    AssignWithSeedInstructionData,
    AssignWithSeedInstructionDataArgs,
    ParsedAssignWithSeedInstruction,

    AdvanceNonceAccountInstruction,
    AdvanceNonceAccountInput,
    AdvanceNonceAccountInstructionData,
    AdvanceNonceAccountInstructionDataArgs,
    ParsedAdvanceNonceAccountInstruction,

    AuthorizeNonceAccountInstruction,
    AuthorizeNonceAccountInput,
    AuthorizeNonceAccountInstructionData,
    AuthorizeNonceAccountInstructionDataArgs,
    ParsedAuthorizeNonceAccountInstruction,

    InitializeNonceAccountInstruction,
    InitializeNonceAccountInput,
    InitializeNonceAccountInstructionData,
    InitializeNonceAccountInstructionDataArgs,
    ParsedInitializeNonceAccountInstruction,

    WithdrawNonceAccountInstruction,
    WithdrawNonceAccountInput,
    WithdrawNonceAccountInstructionData,
    WithdrawNonceAccountInstructionDataArgs,
    ParsedWithdrawNonceAccountInstruction,

    UpgradeNonceAccountInstruction,
    UpgradeNonceAccountInput,
    UpgradeNonceAccountInstructionData,
    UpgradeNonceAccountInstructionDataArgs,
    ParsedUpgradeNonceAccountInstruction,

    CreateAccountWithSeedInstruction,
    CreateAccountWithSeedInput,
    CreateAccountWithSeedInstructionData,
    CreateAccountWithSeedInstructionDataArgs,
    ParsedCreateAccountWithSeedInstruction,

    TransferSolWithSeedInstruction,
    TransferSolWithSeedInput,
    TransferSolWithSeedInstructionData,
    TransferSolWithSeedInstructionDataArgs,
    ParsedTransferSolWithSeedInstruction,

    // Account types — re-exported with 'System' prefix to avoid collision with
    // Nonce (branded string) from @solana/transaction-messages re-exported via core
    Nonce as SystemNonce,
    NonceArgs as SystemNonceArgs,

} from '@solana-program/system';

export {
    // Enums (value exports)
    NonceState,
    NonceVersion,

    // Program address
    SYSTEM_PROGRAM_ADDRESS,

    // Instruction builders (value exports)
    getTransferSolInstruction,
    getCreateAccountInstruction,
    getAllocateInstruction,
    getAllocateWithSeedInstruction,
    getAssignInstruction,
    getAssignWithSeedInstruction,
    getAdvanceNonceAccountInstruction,
    getAuthorizeNonceAccountInstruction,
    getInitializeNonceAccountInstruction,
    getWithdrawNonceAccountInstruction,
    getUpgradeNonceAccountInstruction,
    getCreateAccountWithSeedInstruction,
    getTransferSolWithSeedInstruction,

    // Parsers
    parseTransferSolInstruction,
    parseCreateAccountInstruction,
    parseAllocateInstruction,
    parseAllocateWithSeedInstruction,
    parseAssignInstruction,
    parseAssignWithSeedInstruction,
    parseAdvanceNonceAccountInstruction,
    parseAuthorizeNonceAccountInstruction,
    parseInitializeNonceAccountInstruction,
    parseWithdrawNonceAccountInstruction,
    parseUpgradeNonceAccountInstruction,
    parseCreateAccountWithSeedInstruction,
    parseTransferSolWithSeedInstruction,

    // Codecs
    getTransferSolInstructionDataEncoder,
    getTransferSolInstructionDataDecoder,
    getTransferSolInstructionDataCodec,
    getCreateAccountInstructionDataEncoder,
    getCreateAccountInstructionDataDecoder,
    getCreateAccountInstructionDataCodec,
    getAllocateInstructionDataEncoder,
    getAllocateInstructionDataDecoder,
    getAllocateInstructionDataCodec,
    getAllocateWithSeedInstructionDataEncoder,
    getAllocateWithSeedInstructionDataDecoder,
    getAllocateWithSeedInstructionDataCodec,
    getAssignInstructionDataEncoder,
    getAssignInstructionDataDecoder,
    getAssignInstructionDataCodec,
    getAssignWithSeedInstructionDataEncoder,
    getAssignWithSeedInstructionDataDecoder,
    getAssignWithSeedInstructionDataCodec,
    getAdvanceNonceAccountInstructionDataEncoder,
    getAdvanceNonceAccountInstructionDataDecoder,
    getAdvanceNonceAccountInstructionDataCodec,
    getAuthorizeNonceAccountInstructionDataEncoder,
    getAuthorizeNonceAccountInstructionDataDecoder,
    getAuthorizeNonceAccountInstructionDataCodec,
    getInitializeNonceAccountInstructionDataEncoder,
    getInitializeNonceAccountInstructionDataDecoder,
    getInitializeNonceAccountInstructionDataCodec,
    getWithdrawNonceAccountInstructionDataEncoder,
    getWithdrawNonceAccountInstructionDataDecoder,
    getWithdrawNonceAccountInstructionDataCodec,
    getUpgradeNonceAccountInstructionDataEncoder,
    getUpgradeNonceAccountInstructionDataDecoder,
    getUpgradeNonceAccountInstructionDataCodec,
    getCreateAccountWithSeedInstructionDataEncoder,
    getCreateAccountWithSeedInstructionDataDecoder,
    getCreateAccountWithSeedInstructionDataCodec,
    getTransferSolWithSeedInstructionDataEncoder,
    getTransferSolWithSeedInstructionDataDecoder,
    getTransferSolWithSeedInstructionDataCodec,

    // Account codecs + fetchers
    getNonceEncoder,
    getNonceDecoder,
    getNonceCodec,
    getNonceSize,
    decodeNonce,
    fetchNonce,
    fetchMaybeNonce,
    fetchAllNonce,
    fetchAllMaybeNonce,
} from '@solana-program/system';

// ============================================================================
// Prettified Instruction Types (multi-intersection → flat object)
// ============================================================================

// --- TransferSol ---

/** Flattened `TransferSolInstruction`. Drops intersection noise from `Instruction & InstructionWithData & InstructionWithAccounts`. */
export type PrettyTransferSolInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountSource extends string | AccountMeta<string> = string,
    TAccountDestination extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<TransferSolInstruction<TProgram, TAccountSource, TAccountDestination, TRemainingAccounts>>;

/** Flattened `TransferSolInput`. */
export type PrettyTransferSolInput<
    TAccountSource extends string = string,
    TAccountDestination extends string = string,
> = Prettify<TransferSolInput<TAccountSource, TAccountDestination>>;

/** Flattened `ParsedTransferSolInstruction`. */
export type PrettyParsedTransferSolInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedTransferSolInstruction<TProgram, TAccountMetas>>;

// --- CreateAccount ---

/** Flattened `CreateAccountInstruction`. */
export type PrettyCreateAccountInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountPayer extends string | AccountMeta<string> = string,
    TAccountNewAccount extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<CreateAccountInstruction<TProgram, TAccountPayer, TAccountNewAccount, TRemainingAccounts>>;

/** Flattened `CreateAccountInput`. */
export type PrettyCreateAccountInput<
    TAccountPayer extends string = string,
    TAccountNewAccount extends string = string,
> = Prettify<CreateAccountInput<TAccountPayer, TAccountNewAccount>>;

/** Flattened `ParsedCreateAccountInstruction`. */
export type PrettyParsedCreateAccountInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedCreateAccountInstruction<TProgram, TAccountMetas>>;

// --- Allocate ---

/** Flattened `AllocateInstruction`. */
export type PrettyAllocateInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountNewAccount extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<AllocateInstruction<TProgram, TAccountNewAccount, TRemainingAccounts>>;

/** Flattened `AllocateInput`. */
export type PrettyAllocateInput<
    TAccountNewAccount extends string = string,
> = Prettify<AllocateInput<TAccountNewAccount>>;

/** Flattened `ParsedAllocateInstruction`. */
export type PrettyParsedAllocateInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedAllocateInstruction<TProgram, TAccountMetas>>;

// --- AllocateWithSeed ---

/** Flattened `AllocateWithSeedInstruction`. */
export type PrettyAllocateWithSeedInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountNewAccount extends string | AccountMeta<string> = string,
    TAccountBaseAccount extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<AllocateWithSeedInstruction<TProgram, TAccountNewAccount, TAccountBaseAccount, TRemainingAccounts>>;

/** Flattened `AllocateWithSeedInput`. */
export type PrettyAllocateWithSeedInput<
    TAccountNewAccount extends string = string,
    TAccountBaseAccount extends string = string,
> = Prettify<AllocateWithSeedInput<TAccountNewAccount, TAccountBaseAccount>>;

/** Flattened `ParsedAllocateWithSeedInstruction`. */
export type PrettyParsedAllocateWithSeedInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedAllocateWithSeedInstruction<TProgram, TAccountMetas>>;

// --- Assign ---

/** Flattened `AssignInstruction`. */
export type PrettyAssignInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<AssignInstruction<TProgram, TAccountAccount, TRemainingAccounts>>;

/** Flattened `AssignInput`. */
export type PrettyAssignInput<
    TAccountAccount extends string = string,
> = Prettify<AssignInput<TAccountAccount>>;

/** Flattened `ParsedAssignInstruction`. */
export type PrettyParsedAssignInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedAssignInstruction<TProgram, TAccountMetas>>;

// --- AssignWithSeed ---

/** Flattened `AssignWithSeedInstruction`. */
export type PrettyAssignWithSeedInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TAccountBaseAccount extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<AssignWithSeedInstruction<TProgram, TAccountAccount, TAccountBaseAccount, TRemainingAccounts>>;

/** Flattened `AssignWithSeedInput`. */
export type PrettyAssignWithSeedInput<
    TAccountAccount extends string = string,
    TAccountBaseAccount extends string = string,
> = Prettify<AssignWithSeedInput<TAccountAccount, TAccountBaseAccount>>;

/** Flattened `ParsedAssignWithSeedInstruction`. */
export type PrettyParsedAssignWithSeedInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedAssignWithSeedInstruction<TProgram, TAccountMetas>>;

// --- AdvanceNonceAccount ---

/** Flattened `AdvanceNonceAccountInstruction`. */
export type PrettyAdvanceNonceAccountInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountNonceAccount extends string | AccountMeta<string> = string,
    TAccountRecentBlockhashesSysvar extends string | AccountMeta<string> = string,
    TAccountNonceAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<AdvanceNonceAccountInstruction<TProgram, TAccountNonceAccount, TAccountRecentBlockhashesSysvar, TAccountNonceAuthority, TRemainingAccounts>>;

/** Flattened `AdvanceNonceAccountInput`. */
export type PrettyAdvanceNonceAccountInput<
    TAccountNonceAccount extends string = string,
    TAccountRecentBlockhashesSysvar extends string = string,
    TAccountNonceAuthority extends string = string,
> = Prettify<AdvanceNonceAccountInput<TAccountNonceAccount, TAccountRecentBlockhashesSysvar, TAccountNonceAuthority>>;

/** Flattened `ParsedAdvanceNonceAccountInstruction`. */
export type PrettyParsedAdvanceNonceAccountInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedAdvanceNonceAccountInstruction<TProgram, TAccountMetas>>;

// --- AuthorizeNonceAccount ---

/** Flattened `AuthorizeNonceAccountInstruction`. */
export type PrettyAuthorizeNonceAccountInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountNonceAccount extends string | AccountMeta<string> = string,
    TAccountNonceAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<AuthorizeNonceAccountInstruction<TProgram, TAccountNonceAccount, TAccountNonceAuthority, TRemainingAccounts>>;

/** Flattened `AuthorizeNonceAccountInput`. */
export type PrettyAuthorizeNonceAccountInput<
    TAccountNonceAccount extends string = string,
    TAccountNonceAuthority extends string = string,
> = Prettify<AuthorizeNonceAccountInput<TAccountNonceAccount, TAccountNonceAuthority>>;

/** Flattened `ParsedAuthorizeNonceAccountInstruction`. */
export type PrettyParsedAuthorizeNonceAccountInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedAuthorizeNonceAccountInstruction<TProgram, TAccountMetas>>;

// --- InitializeNonceAccount ---

/** Flattened `InitializeNonceAccountInstruction`. */
export type PrettyInitializeNonceAccountInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountNonceAccount extends string | AccountMeta<string> = string,
    TAccountRecentBlockhashesSysvar extends string | AccountMeta<string> = string,
    TAccountRentSysvar extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeNonceAccountInstruction<TProgram, TAccountNonceAccount, TAccountRecentBlockhashesSysvar, TAccountRentSysvar, TRemainingAccounts>>;

/** Flattened `InitializeNonceAccountInput`. */
export type PrettyInitializeNonceAccountInput<
    TAccountNonceAccount extends string = string,
    TAccountRecentBlockhashesSysvar extends string = string,
    TAccountRentSysvar extends string = string,
> = Prettify<InitializeNonceAccountInput<TAccountNonceAccount, TAccountRecentBlockhashesSysvar, TAccountRentSysvar>>;

/** Flattened `ParsedInitializeNonceAccountInstruction`. */
export type PrettyParsedInitializeNonceAccountInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeNonceAccountInstruction<TProgram, TAccountMetas>>;

// --- WithdrawNonceAccount ---

/** Flattened `WithdrawNonceAccountInstruction`. */
export type PrettyWithdrawNonceAccountInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountNonceAccount extends string | AccountMeta<string> = string,
    TAccountDestination extends string | AccountMeta<string> = string,
    TAccountRecentBlockhashesSysvar extends string | AccountMeta<string> = string,
    TAccountRentSysvar extends string | AccountMeta<string> = string,
    TAccountNonceAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<WithdrawNonceAccountInstruction<TProgram, TAccountNonceAccount, TAccountDestination, TAccountRecentBlockhashesSysvar, TAccountRentSysvar, TAccountNonceAuthority, TRemainingAccounts>>;

/** Flattened `WithdrawNonceAccountInput`. */
export type PrettyWithdrawNonceAccountInput<
    TAccountNonceAccount extends string = string,
    TAccountDestination extends string = string,
    TAccountRecentBlockhashesSysvar extends string = string,
    TAccountRentSysvar extends string = string,
    TAccountNonceAuthority extends string = string,
> = Prettify<WithdrawNonceAccountInput<TAccountNonceAccount, TAccountDestination, TAccountRecentBlockhashesSysvar, TAccountRentSysvar, TAccountNonceAuthority>>;

/** Flattened `ParsedWithdrawNonceAccountInstruction`. */
export type PrettyParsedWithdrawNonceAccountInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedWithdrawNonceAccountInstruction<TProgram, TAccountMetas>>;

// --- UpgradeNonceAccount ---

/** Flattened `UpgradeNonceAccountInstruction`. */
export type PrettyUpgradeNonceAccountInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountNonceAccount extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<UpgradeNonceAccountInstruction<TProgram, TAccountNonceAccount, TRemainingAccounts>>;

/** Flattened `UpgradeNonceAccountInput`. */
export type PrettyUpgradeNonceAccountInput<
    TAccountNonceAccount extends string = string,
> = Prettify<UpgradeNonceAccountInput<TAccountNonceAccount>>;

/** Flattened `ParsedUpgradeNonceAccountInstruction`. */
export type PrettyParsedUpgradeNonceAccountInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedUpgradeNonceAccountInstruction<TProgram, TAccountMetas>>;

// --- CreateAccountWithSeed ---

/** Flattened `CreateAccountWithSeedInstruction`. */
export type PrettyCreateAccountWithSeedInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountPayer extends string | AccountMeta<string> = string,
    TAccountNewAccount extends string | AccountMeta<string> = string,
    TAccountBaseAccount extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<CreateAccountWithSeedInstruction<TProgram, TAccountPayer, TAccountNewAccount, TAccountBaseAccount, TRemainingAccounts>>;

/** Flattened `CreateAccountWithSeedInput`. */
export type PrettyCreateAccountWithSeedInput<
    TAccountPayer extends string = string,
    TAccountNewAccount extends string = string,
    TAccountBaseAccount extends string = string,
> = Prettify<CreateAccountWithSeedInput<TAccountPayer, TAccountNewAccount, TAccountBaseAccount>>;

/** Flattened `ParsedCreateAccountWithSeedInstruction`. */
export type PrettyParsedCreateAccountWithSeedInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedCreateAccountWithSeedInstruction<TProgram, TAccountMetas>>;

// --- TransferSolWithSeed ---

/** Flattened `TransferSolWithSeedInstruction`. */
export type PrettyTransferSolWithSeedInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountSource extends string | AccountMeta<string> = string,
    TAccountBaseAccount extends string | AccountMeta<string> = string,
    TAccountDestination extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<TransferSolWithSeedInstruction<TProgram, TAccountSource, TAccountBaseAccount, TAccountDestination, TRemainingAccounts>>;

/** Flattened `TransferSolWithSeedInput`. */
export type PrettyTransferSolWithSeedInput<
    TAccountSource extends string = string,
    TAccountBaseAccount extends string = string,
    TAccountDestination extends string = string,
> = Prettify<TransferSolWithSeedInput<TAccountSource, TAccountBaseAccount, TAccountDestination>>;

/** Flattened `ParsedTransferSolWithSeedInstruction`. */
export type PrettyParsedTransferSolWithSeedInstruction<
    TProgram extends string = typeof SYSTEM_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedTransferSolWithSeedInstruction<TProgram, TAccountMetas>>;

// ============================================================================
// Prettified Data Types
// ============================================================================

/** Flattened `TransferSolInstructionData`. */
export type PrettyTransferSolInstructionData = Prettify<TransferSolInstructionData>;
/** Flattened `TransferSolInstructionDataArgs`. */
export type PrettyTransferSolInstructionDataArgs = Prettify<TransferSolInstructionDataArgs>;

/** Flattened `CreateAccountInstructionData`. */
export type PrettyCreateAccountInstructionData = Prettify<CreateAccountInstructionData>;
/** Flattened `CreateAccountInstructionDataArgs`. */
export type PrettyCreateAccountInstructionDataArgs = Prettify<CreateAccountInstructionDataArgs>;

/** Flattened `AllocateInstructionData`. */
export type PrettyAllocateInstructionData = Prettify<AllocateInstructionData>;
/** Flattened `AllocateInstructionDataArgs`. */
export type PrettyAllocateInstructionDataArgs = Prettify<AllocateInstructionDataArgs>;

/** Flattened `AllocateWithSeedInstructionData`. */
export type PrettyAllocateWithSeedInstructionData = Prettify<AllocateWithSeedInstructionData>;
/** Flattened `AllocateWithSeedInstructionDataArgs`. */
export type PrettyAllocateWithSeedInstructionDataArgs = Prettify<AllocateWithSeedInstructionDataArgs>;

/** Flattened `AssignInstructionData`. */
export type PrettyAssignInstructionData = Prettify<AssignInstructionData>;
/** Flattened `AssignInstructionDataArgs`. */
export type PrettyAssignInstructionDataArgs = Prettify<AssignInstructionDataArgs>;

/** Flattened `AssignWithSeedInstructionData`. */
export type PrettyAssignWithSeedInstructionData = Prettify<AssignWithSeedInstructionData>;
/** Flattened `AssignWithSeedInstructionDataArgs`. */
export type PrettyAssignWithSeedInstructionDataArgs = Prettify<AssignWithSeedInstructionDataArgs>;

/** Flattened `AdvanceNonceAccountInstructionData`. */
export type PrettyAdvanceNonceAccountInstructionData = Prettify<AdvanceNonceAccountInstructionData>;
/** Flattened `AdvanceNonceAccountInstructionDataArgs`. */
export type PrettyAdvanceNonceAccountInstructionDataArgs = Prettify<AdvanceNonceAccountInstructionDataArgs>;

/** Flattened `AuthorizeNonceAccountInstructionData`. */
export type PrettyAuthorizeNonceAccountInstructionData = Prettify<AuthorizeNonceAccountInstructionData>;
/** Flattened `AuthorizeNonceAccountInstructionDataArgs`. */
export type PrettyAuthorizeNonceAccountInstructionDataArgs = Prettify<AuthorizeNonceAccountInstructionDataArgs>;

/** Flattened `InitializeNonceAccountInstructionData`. */
export type PrettyInitializeNonceAccountInstructionData = Prettify<InitializeNonceAccountInstructionData>;
/** Flattened `InitializeNonceAccountInstructionDataArgs`. */
export type PrettyInitializeNonceAccountInstructionDataArgs = Prettify<InitializeNonceAccountInstructionDataArgs>;

/** Flattened `WithdrawNonceAccountInstructionData`. */
export type PrettyWithdrawNonceAccountInstructionData = Prettify<WithdrawNonceAccountInstructionData>;
/** Flattened `WithdrawNonceAccountInstructionDataArgs`. */
export type PrettyWithdrawNonceAccountInstructionDataArgs = Prettify<WithdrawNonceAccountInstructionDataArgs>;

/** Flattened `UpgradeNonceAccountInstructionData`. */
export type PrettyUpgradeNonceAccountInstructionData = Prettify<UpgradeNonceAccountInstructionData>;
/** Flattened `UpgradeNonceAccountInstructionDataArgs`. */
export type PrettyUpgradeNonceAccountInstructionDataArgs = Prettify<UpgradeNonceAccountInstructionDataArgs>;

/** Flattened `CreateAccountWithSeedInstructionData`. */
export type PrettyCreateAccountWithSeedInstructionData = Prettify<CreateAccountWithSeedInstructionData>;
/** Flattened `CreateAccountWithSeedInstructionDataArgs`. */
export type PrettyCreateAccountWithSeedInstructionDataArgs = Prettify<CreateAccountWithSeedInstructionDataArgs>;

/** Flattened `TransferSolWithSeedInstructionData`. */
export type PrettyTransferSolWithSeedInstructionData = Prettify<TransferSolWithSeedInstructionData>;
/** Flattened `TransferSolWithSeedInstructionDataArgs`. */
export type PrettyTransferSolWithSeedInstructionDataArgs = Prettify<TransferSolWithSeedInstructionDataArgs>;

// ============================================================================
// Prettified Account Types
// ============================================================================

/** Flattened `Nonce` (system program account data). Aliased as `SystemNonce` to avoid collision with `Nonce` from `@solana/transaction-messages`. */
export type PrettySystemNonce = Prettify<SystemNonce>;
/** Flattened `NonceArgs`. */
export type PrettySystemNonceArgs = Prettify<SystemNonceArgs>;

// InstructionWithByteDelta is internal to @solana-program/system (not exported)
