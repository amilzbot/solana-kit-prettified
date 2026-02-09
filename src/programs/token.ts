/**
 * Prettified types from `@solana-program/token`.
 *
 * Covers all 22 token program instructions (excluding ATA program instructions
 * which live in associated-token.ts), plus Mint, Token, and Multisig account types.
 *
 * The highest-value targets are instruction return types — each is a
 * multi-intersection of `Instruction & InstructionWithData & InstructionWithAccounts`
 * that Prettify flattens into a single readable object.
 */
import type { Prettify } from '../prettify.js';

import type {
    // Account types
    Mint,
    MintArgs,
    Token as TokenAccount,
    TokenArgs,
    Multisig,
    MultisigArgs,

    // Enum types (type-only for Args aliases)
    AccountStateArgs,
    AuthorityTypeArgs,

    // Instructions
    TransferInstruction,
    TransferInput,
    TransferInstructionData,
    TransferInstructionDataArgs,
    ParsedTransferInstruction,

    TransferCheckedInstruction,
    TransferCheckedInput,
    TransferCheckedInstructionData,
    TransferCheckedInstructionDataArgs,
    ParsedTransferCheckedInstruction,

    InitializeMintInstruction,
    InitializeMintInput,
    InitializeMintInstructionData,
    InitializeMintInstructionDataArgs,
    ParsedInitializeMintInstruction,

    InitializeMint2Instruction,
    InitializeMint2Input,
    InitializeMint2InstructionData,
    InitializeMint2InstructionDataArgs,
    ParsedInitializeMint2Instruction,

    InitializeAccountInstruction,
    InitializeAccountInput,
    InitializeAccountInstructionData,
    InitializeAccountInstructionDataArgs,
    ParsedInitializeAccountInstruction,

    InitializeAccount2Instruction,
    InitializeAccount2Input,
    InitializeAccount2InstructionData,
    InitializeAccount2InstructionDataArgs,
    ParsedInitializeAccount2Instruction,

    InitializeAccount3Instruction,
    InitializeAccount3Input,
    InitializeAccount3InstructionData,
    InitializeAccount3InstructionDataArgs,
    ParsedInitializeAccount3Instruction,

    InitializeMultisigInstruction,
    InitializeMultisigInput,
    InitializeMultisigInstructionData,
    InitializeMultisigInstructionDataArgs,
    ParsedInitializeMultisigInstruction,

    InitializeMultisig2Instruction,
    InitializeMultisig2Input,
    InitializeMultisig2InstructionData,
    InitializeMultisig2InstructionDataArgs,
    ParsedInitializeMultisig2Instruction,

    InitializeImmutableOwnerInstruction,
    InitializeImmutableOwnerInput,
    InitializeImmutableOwnerInstructionData,
    InitializeImmutableOwnerInstructionDataArgs,
    ParsedInitializeImmutableOwnerInstruction,

    ApproveInstruction,
    ApproveInput,
    ApproveInstructionData,
    ApproveInstructionDataArgs,
    ParsedApproveInstruction,

    ApproveCheckedInstruction,
    ApproveCheckedInput,
    ApproveCheckedInstructionData,
    ApproveCheckedInstructionDataArgs,
    ParsedApproveCheckedInstruction,

    RevokeInstruction,
    RevokeInput,
    RevokeInstructionData,
    RevokeInstructionDataArgs,
    ParsedRevokeInstruction,

    MintToInstruction,
    MintToInput,
    MintToInstructionData,
    MintToInstructionDataArgs,
    ParsedMintToInstruction,

    MintToCheckedInstruction,
    MintToCheckedInput,
    MintToCheckedInstructionData,
    MintToCheckedInstructionDataArgs,
    ParsedMintToCheckedInstruction,

    BurnInstruction,
    BurnInput,
    BurnInstructionData,
    BurnInstructionDataArgs,
    ParsedBurnInstruction,

    BurnCheckedInstruction,
    BurnCheckedInput,
    BurnCheckedInstructionData,
    BurnCheckedInstructionDataArgs,
    ParsedBurnCheckedInstruction,

    CloseAccountInstruction,
    CloseAccountInput,
    CloseAccountInstructionData,
    CloseAccountInstructionDataArgs,
    ParsedCloseAccountInstruction,

    FreezeAccountInstruction,
    FreezeAccountInput,
    FreezeAccountInstructionData,
    FreezeAccountInstructionDataArgs,
    ParsedFreezeAccountInstruction,

    ThawAccountInstruction,
    ThawAccountInput,
    ThawAccountInstructionData,
    ThawAccountInstructionDataArgs,
    ParsedThawAccountInstruction,

    SetAuthorityInstruction,
    SetAuthorityInput,
    SetAuthorityInstructionData,
    SetAuthorityInstructionDataArgs,
    ParsedSetAuthorityInstruction,

    SyncNativeInstruction,
    SyncNativeInput,
    SyncNativeInstructionData,
    SyncNativeInstructionDataArgs,
    ParsedSyncNativeInstruction,

    AmountToUiAmountInstruction,
    AmountToUiAmountInput,
    AmountToUiAmountInstructionData,
    AmountToUiAmountInstructionDataArgs,
    ParsedAmountToUiAmountInstruction,

    UiAmountToAmountInstruction,
    UiAmountToAmountInput,
    UiAmountToAmountInstructionData,
    UiAmountToAmountInstructionDataArgs,
    ParsedUiAmountToAmountInstruction,

    GetAccountDataSizeInstruction,
    GetAccountDataSizeInput,
    GetAccountDataSizeInstructionData,
    GetAccountDataSizeInstructionDataArgs,
    ParsedGetAccountDataSizeInstruction,

    // Program address
    TOKEN_PROGRAM_ADDRESS,
} from '@solana-program/token';

import type { AccountMeta } from '@solana/kit';

// ============================================================================
// Re-exports (originals available alongside Pretty* versions)
// ============================================================================

export type {
    // Account types
    Mint,
    MintArgs,
    TokenAccount,
    TokenArgs,
    Multisig,
    MultisigArgs,

    // Enum types (Args only — enums are value-exported below)
    AccountStateArgs,
    AuthorityTypeArgs,

    // Instructions
    TransferInstruction,
    TransferInput,
    TransferInstructionData,
    TransferInstructionDataArgs,
    ParsedTransferInstruction,

    TransferCheckedInstruction,
    TransferCheckedInput,
    TransferCheckedInstructionData,
    TransferCheckedInstructionDataArgs,
    ParsedTransferCheckedInstruction,

    InitializeMintInstruction,
    InitializeMintInput,
    InitializeMintInstructionData,
    InitializeMintInstructionDataArgs,
    ParsedInitializeMintInstruction,

    InitializeMint2Instruction,
    InitializeMint2Input,
    InitializeMint2InstructionData,
    InitializeMint2InstructionDataArgs,
    ParsedInitializeMint2Instruction,

    InitializeAccountInstruction,
    InitializeAccountInput,
    InitializeAccountInstructionData,
    InitializeAccountInstructionDataArgs,
    ParsedInitializeAccountInstruction,

    InitializeAccount2Instruction,
    InitializeAccount2Input,
    InitializeAccount2InstructionData,
    InitializeAccount2InstructionDataArgs,
    ParsedInitializeAccount2Instruction,

    InitializeAccount3Instruction,
    InitializeAccount3Input,
    InitializeAccount3InstructionData,
    InitializeAccount3InstructionDataArgs,
    ParsedInitializeAccount3Instruction,

    InitializeMultisigInstruction,
    InitializeMultisigInput,
    InitializeMultisigInstructionData,
    InitializeMultisigInstructionDataArgs,
    ParsedInitializeMultisigInstruction,

    InitializeMultisig2Instruction,
    InitializeMultisig2Input,
    InitializeMultisig2InstructionData,
    InitializeMultisig2InstructionDataArgs,
    ParsedInitializeMultisig2Instruction,

    InitializeImmutableOwnerInstruction,
    InitializeImmutableOwnerInput,
    InitializeImmutableOwnerInstructionData,
    InitializeImmutableOwnerInstructionDataArgs,
    ParsedInitializeImmutableOwnerInstruction,

    ApproveInstruction,
    ApproveInput,
    ApproveInstructionData,
    ApproveInstructionDataArgs,
    ParsedApproveInstruction,

    ApproveCheckedInstruction,
    ApproveCheckedInput,
    ApproveCheckedInstructionData,
    ApproveCheckedInstructionDataArgs,
    ParsedApproveCheckedInstruction,

    RevokeInstruction,
    RevokeInput,
    RevokeInstructionData,
    RevokeInstructionDataArgs,
    ParsedRevokeInstruction,

    MintToInstruction,
    MintToInput,
    MintToInstructionData,
    MintToInstructionDataArgs,
    ParsedMintToInstruction,

    MintToCheckedInstruction,
    MintToCheckedInput,
    MintToCheckedInstructionData,
    MintToCheckedInstructionDataArgs,
    ParsedMintToCheckedInstruction,

    BurnInstruction,
    BurnInput,
    BurnInstructionData,
    BurnInstructionDataArgs,
    ParsedBurnInstruction,

    BurnCheckedInstruction,
    BurnCheckedInput,
    BurnCheckedInstructionData,
    BurnCheckedInstructionDataArgs,
    ParsedBurnCheckedInstruction,

    CloseAccountInstruction,
    CloseAccountInput,
    CloseAccountInstructionData,
    CloseAccountInstructionDataArgs,
    ParsedCloseAccountInstruction,

    FreezeAccountInstruction,
    FreezeAccountInput,
    FreezeAccountInstructionData,
    FreezeAccountInstructionDataArgs,
    ParsedFreezeAccountInstruction,

    ThawAccountInstruction,
    ThawAccountInput,
    ThawAccountInstructionData,
    ThawAccountInstructionDataArgs,
    ParsedThawAccountInstruction,

    SetAuthorityInstruction,
    SetAuthorityInput,
    SetAuthorityInstructionData,
    SetAuthorityInstructionDataArgs,
    ParsedSetAuthorityInstruction,

    SyncNativeInstruction,
    SyncNativeInput,
    SyncNativeInstructionData,
    SyncNativeInstructionDataArgs,
    ParsedSyncNativeInstruction,

    AmountToUiAmountInstruction,
    AmountToUiAmountInput,
    AmountToUiAmountInstructionData,
    AmountToUiAmountInstructionDataArgs,
    ParsedAmountToUiAmountInstruction,

    UiAmountToAmountInstruction,
    UiAmountToAmountInput,
    UiAmountToAmountInstructionData,
    UiAmountToAmountInstructionDataArgs,
    ParsedUiAmountToAmountInstruction,

    GetAccountDataSizeInstruction,
    GetAccountDataSizeInput,
    GetAccountDataSizeInstructionData,
    GetAccountDataSizeInstructionDataArgs,
    ParsedGetAccountDataSizeInstruction,
};

export {
    // Enums (value exports)
    AccountState,
    AuthorityType,
    TokenInstruction,

    // Program address
    TOKEN_PROGRAM_ADDRESS,

    // Instruction builders
    getTransferInstruction,
    getTransferCheckedInstruction,
    getInitializeMintInstruction,
    getInitializeMint2Instruction,
    getInitializeAccountInstruction,
    getInitializeAccount2Instruction,
    getInitializeAccount3Instruction,
    getInitializeMultisigInstruction,
    getInitializeMultisig2Instruction,
    getInitializeImmutableOwnerInstruction,
    getApproveInstruction,
    getApproveCheckedInstruction,
    getRevokeInstruction,
    getMintToInstruction,
    getMintToCheckedInstruction,
    getBurnInstruction,
    getBurnCheckedInstruction,
    getCloseAccountInstruction,
    getFreezeAccountInstruction,
    getThawAccountInstruction,
    getSetAuthorityInstruction,
    getSyncNativeInstruction,
    getAmountToUiAmountInstruction,
    getUiAmountToAmountInstruction,
    getGetAccountDataSizeInstruction,

    // Parsers
    parseTransferInstruction,
    parseTransferCheckedInstruction,
    parseInitializeMintInstruction,
    parseInitializeMint2Instruction,
    parseInitializeAccountInstruction,
    parseInitializeAccount2Instruction,
    parseInitializeAccount3Instruction,
    parseInitializeMultisigInstruction,
    parseInitializeMultisig2Instruction,
    parseInitializeImmutableOwnerInstruction,
    parseApproveInstruction,
    parseApproveCheckedInstruction,
    parseRevokeInstruction,
    parseMintToInstruction,
    parseMintToCheckedInstruction,
    parseBurnInstruction,
    parseBurnCheckedInstruction,
    parseCloseAccountInstruction,
    parseFreezeAccountInstruction,
    parseThawAccountInstruction,
    parseSetAuthorityInstruction,
    parseSyncNativeInstruction,
    parseAmountToUiAmountInstruction,
    parseUiAmountToAmountInstruction,
    parseGetAccountDataSizeInstruction,
    parseTokenInstruction,
    identifyTokenInstruction,

    // Instruction data codecs
    getTransferInstructionDataEncoder,
    getTransferInstructionDataDecoder,
    getTransferInstructionDataCodec,
    getTransferCheckedInstructionDataEncoder,
    getTransferCheckedInstructionDataDecoder,
    getTransferCheckedInstructionDataCodec,
    getInitializeMintInstructionDataEncoder,
    getInitializeMintInstructionDataDecoder,
    getInitializeMintInstructionDataCodec,
    getInitializeMint2InstructionDataEncoder,
    getInitializeMint2InstructionDataDecoder,
    getInitializeMint2InstructionDataCodec,
    getInitializeAccountInstructionDataEncoder,
    getInitializeAccountInstructionDataDecoder,
    getInitializeAccountInstructionDataCodec,
    getInitializeAccount2InstructionDataEncoder,
    getInitializeAccount2InstructionDataDecoder,
    getInitializeAccount2InstructionDataCodec,
    getInitializeAccount3InstructionDataEncoder,
    getInitializeAccount3InstructionDataDecoder,
    getInitializeAccount3InstructionDataCodec,
    getInitializeMultisigInstructionDataEncoder,
    getInitializeMultisigInstructionDataDecoder,
    getInitializeMultisigInstructionDataCodec,
    getInitializeMultisig2InstructionDataEncoder,
    getInitializeMultisig2InstructionDataDecoder,
    getInitializeMultisig2InstructionDataCodec,
    getInitializeImmutableOwnerInstructionDataEncoder,
    getInitializeImmutableOwnerInstructionDataDecoder,
    getInitializeImmutableOwnerInstructionDataCodec,
    getApproveInstructionDataEncoder,
    getApproveInstructionDataDecoder,
    getApproveInstructionDataCodec,
    getApproveCheckedInstructionDataEncoder,
    getApproveCheckedInstructionDataDecoder,
    getApproveCheckedInstructionDataCodec,
    getRevokeInstructionDataEncoder,
    getRevokeInstructionDataDecoder,
    getRevokeInstructionDataCodec,
    getMintToInstructionDataEncoder,
    getMintToInstructionDataDecoder,
    getMintToInstructionDataCodec,
    getMintToCheckedInstructionDataEncoder,
    getMintToCheckedInstructionDataDecoder,
    getMintToCheckedInstructionDataCodec,
    getBurnInstructionDataEncoder,
    getBurnInstructionDataDecoder,
    getBurnInstructionDataCodec,
    getBurnCheckedInstructionDataEncoder,
    getBurnCheckedInstructionDataDecoder,
    getBurnCheckedInstructionDataCodec,
    getCloseAccountInstructionDataEncoder,
    getCloseAccountInstructionDataDecoder,
    getCloseAccountInstructionDataCodec,
    getFreezeAccountInstructionDataEncoder,
    getFreezeAccountInstructionDataDecoder,
    getFreezeAccountInstructionDataCodec,
    getThawAccountInstructionDataEncoder,
    getThawAccountInstructionDataDecoder,
    getThawAccountInstructionDataCodec,
    getSetAuthorityInstructionDataEncoder,
    getSetAuthorityInstructionDataDecoder,
    getSetAuthorityInstructionDataCodec,
    getSyncNativeInstructionDataEncoder,
    getSyncNativeInstructionDataDecoder,
    getSyncNativeInstructionDataCodec,
    getAmountToUiAmountInstructionDataEncoder,
    getAmountToUiAmountInstructionDataDecoder,
    getAmountToUiAmountInstructionDataCodec,
    getUiAmountToAmountInstructionDataEncoder,
    getUiAmountToAmountInstructionDataDecoder,
    getUiAmountToAmountInstructionDataCodec,
    getGetAccountDataSizeInstructionDataEncoder,
    getGetAccountDataSizeInstructionDataDecoder,
    getGetAccountDataSizeInstructionDataCodec,

    // Account type codecs + fetchers
    getMintEncoder,
    getMintDecoder,
    getMintCodec,
    getMintSize,
    decodeMint,
    fetchMint,
    fetchMaybeMint,
    fetchAllMint,
    fetchAllMaybeMint,

    getTokenEncoder,
    getTokenDecoder,
    getTokenCodec,
    getTokenSize,
    decodeToken,
    fetchToken,
    fetchMaybeToken,
    fetchAllToken,
    fetchAllMaybeToken,

    getMultisigEncoder,
    getMultisigDecoder,
    getMultisigCodec,
    getMultisigSize,
    decodeMultisig,
    fetchMultisig,
    fetchMaybeMultisig,
    fetchAllMultisig,
    fetchAllMaybeMultisig,

    // Enum codecs
    getAccountStateEncoder,
    getAccountStateDecoder,
    getAccountStateCodec,
    getAuthorityTypeEncoder,
    getAuthorityTypeDecoder,
    getAuthorityTypeCodec,

    // Account/instruction identification
    identifyTokenAccount,
    TokenAccount as TokenAccountKind,
} from '@solana-program/token';

// ============================================================================
// Prettified Account Types
// ============================================================================

/** Flattened `Mint` account data. Already a plain object but prettified for consistency. */
export type PrettyMint = Prettify<Mint>;

/** Flattened `MintArgs`. */
export type PrettyMintArgs = Prettify<MintArgs>;

/** Flattened `Token` (token account) data. */
export type PrettyTokenAccount = Prettify<TokenAccount>;

/** Flattened `TokenArgs`. */
export type PrettyTokenArgs = Prettify<TokenArgs>;

/** Flattened `Multisig` account data. */
export type PrettyMultisig = Prettify<Multisig>;

/** Flattened `MultisigArgs`. */
export type PrettyMultisigArgs = Prettify<MultisigArgs>;

// ============================================================================
// Prettified Instruction Types (multi-intersection → flat object)
// ============================================================================

// --- Transfer ---

/** Flattened `TransferInstruction`. */
export type PrettyTransferInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountSource extends string | AccountMeta<string> = string,
    TAccountDestination extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<TransferInstruction<TProgram, TAccountSource, TAccountDestination, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `TransferInput`. */
export type PrettyTransferInput<
    TAccountSource extends string = string,
    TAccountDestination extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<TransferInput<TAccountSource, TAccountDestination, TAccountAuthority>>;

/** Flattened `ParsedTransferInstruction`. */
export type PrettyParsedTransferInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedTransferInstruction<TProgram, TAccountMetas>>;

// --- TransferChecked ---

/** Flattened `TransferCheckedInstruction`. */
export type PrettyTransferCheckedInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountSource extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountDestination extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<TransferCheckedInstruction<TProgram, TAccountSource, TAccountMint, TAccountDestination, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `TransferCheckedInput`. */
export type PrettyTransferCheckedInput<
    TAccountSource extends string = string,
    TAccountMint extends string = string,
    TAccountDestination extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<TransferCheckedInput<TAccountSource, TAccountMint, TAccountDestination, TAccountAuthority>>;

/** Flattened `ParsedTransferCheckedInstruction`. */
export type PrettyParsedTransferCheckedInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedTransferCheckedInstruction<TProgram, TAccountMetas>>;

// --- InitializeMint ---

/** Flattened `InitializeMintInstruction`. */
export type PrettyInitializeMintInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountRent extends string | AccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeMintInstruction<TProgram, TAccountMint, TAccountRent, TRemainingAccounts>>;

/** Flattened `InitializeMintInput`. */
export type PrettyInitializeMintInput<
    TAccountMint extends string = string,
    TAccountRent extends string = string,
> = Prettify<InitializeMintInput<TAccountMint, TAccountRent>>;

/** Flattened `ParsedInitializeMintInstruction`. */
export type PrettyParsedInitializeMintInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeMintInstruction<TProgram, TAccountMetas>>;

// --- InitializeMint2 ---

/** Flattened `InitializeMint2Instruction`. */
export type PrettyInitializeMint2Instruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeMint2Instruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializeMint2Input`. */
export type PrettyInitializeMint2Input<
    TAccountMint extends string = string,
> = Prettify<InitializeMint2Input<TAccountMint>>;

/** Flattened `ParsedInitializeMint2Instruction`. */
export type PrettyParsedInitializeMint2Instruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeMint2Instruction<TProgram, TAccountMetas>>;

// --- InitializeAccount ---

/** Flattened `InitializeAccountInstruction`. */
export type PrettyInitializeAccountInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TAccountRent extends string | AccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeAccountInstruction<TProgram, TAccountAccount, TAccountMint, TAccountOwner, TAccountRent, TRemainingAccounts>>;

/** Flattened `InitializeAccountInput`. */
export type PrettyInitializeAccountInput<
    TAccountAccount extends string = string,
    TAccountMint extends string = string,
    TAccountOwner extends string = string,
    TAccountRent extends string = string,
> = Prettify<InitializeAccountInput<TAccountAccount, TAccountMint, TAccountOwner, TAccountRent>>;

/** Flattened `ParsedInitializeAccountInstruction`. */
export type PrettyParsedInitializeAccountInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeAccountInstruction<TProgram, TAccountMetas>>;

// --- InitializeAccount2 ---

/** Flattened `InitializeAccount2Instruction`. */
export type PrettyInitializeAccount2Instruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountRent extends string | AccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeAccount2Instruction<TProgram, TAccountAccount, TAccountMint, TAccountRent, TRemainingAccounts>>;

/** Flattened `InitializeAccount2Input`. */
export type PrettyInitializeAccount2Input<
    TAccountAccount extends string = string,
    TAccountMint extends string = string,
    TAccountRent extends string = string,
> = Prettify<InitializeAccount2Input<TAccountAccount, TAccountMint, TAccountRent>>;

/** Flattened `ParsedInitializeAccount2Instruction`. */
export type PrettyParsedInitializeAccount2Instruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeAccount2Instruction<TProgram, TAccountMetas>>;

// --- InitializeAccount3 ---

/** Flattened `InitializeAccount3Instruction`. */
export type PrettyInitializeAccount3Instruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeAccount3Instruction<TProgram, TAccountAccount, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializeAccount3Input`. */
export type PrettyInitializeAccount3Input<
    TAccountAccount extends string = string,
    TAccountMint extends string = string,
> = Prettify<InitializeAccount3Input<TAccountAccount, TAccountMint>>;

/** Flattened `ParsedInitializeAccount3Instruction`. */
export type PrettyParsedInitializeAccount3Instruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeAccount3Instruction<TProgram, TAccountMetas>>;

// --- InitializeMultisig ---

/** Flattened `InitializeMultisigInstruction`. */
export type PrettyInitializeMultisigInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMultisig extends string | AccountMeta<string> = string,
    TAccountRent extends string | AccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeMultisigInstruction<TProgram, TAccountMultisig, TAccountRent, TRemainingAccounts>>;

/** Flattened `InitializeMultisigInput`. */
export type PrettyInitializeMultisigInput<
    TAccountMultisig extends string = string,
    TAccountRent extends string = string,
> = Prettify<InitializeMultisigInput<TAccountMultisig, TAccountRent>>;

/** Flattened `ParsedInitializeMultisigInstruction`. */
export type PrettyParsedInitializeMultisigInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeMultisigInstruction<TProgram, TAccountMetas>>;

// --- InitializeMultisig2 ---

/** Flattened `InitializeMultisig2Instruction`. */
export type PrettyInitializeMultisig2Instruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMultisig extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeMultisig2Instruction<TProgram, TAccountMultisig, TRemainingAccounts>>;

/** Flattened `InitializeMultisig2Input`. */
export type PrettyInitializeMultisig2Input<
    TAccountMultisig extends string = string,
> = Prettify<InitializeMultisig2Input<TAccountMultisig>>;

/** Flattened `ParsedInitializeMultisig2Instruction`. */
export type PrettyParsedInitializeMultisig2Instruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeMultisig2Instruction<TProgram, TAccountMetas>>;

// --- InitializeImmutableOwner ---

/** Flattened `InitializeImmutableOwnerInstruction`. */
export type PrettyInitializeImmutableOwnerInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeImmutableOwnerInstruction<TProgram, TAccountAccount, TRemainingAccounts>>;

/** Flattened `InitializeImmutableOwnerInput`. */
export type PrettyInitializeImmutableOwnerInput<
    TAccountAccount extends string = string,
> = Prettify<InitializeImmutableOwnerInput<TAccountAccount>>;

/** Flattened `ParsedInitializeImmutableOwnerInstruction`. */
export type PrettyParsedInitializeImmutableOwnerInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeImmutableOwnerInstruction<TProgram, TAccountMetas>>;

// --- Approve ---

/** Flattened `ApproveInstruction`. */
export type PrettyApproveInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountSource extends string | AccountMeta<string> = string,
    TAccountDelegate extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<ApproveInstruction<TProgram, TAccountSource, TAccountDelegate, TAccountOwner, TRemainingAccounts>>;

/** Flattened `ApproveInput`. */
export type PrettyApproveInput<
    TAccountSource extends string = string,
    TAccountDelegate extends string = string,
    TAccountOwner extends string = string,
> = Prettify<ApproveInput<TAccountSource, TAccountDelegate, TAccountOwner>>;

/** Flattened `ParsedApproveInstruction`. */
export type PrettyParsedApproveInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedApproveInstruction<TProgram, TAccountMetas>>;

// --- ApproveChecked ---

/** Flattened `ApproveCheckedInstruction`. */
export type PrettyApproveCheckedInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountSource extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountDelegate extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<ApproveCheckedInstruction<TProgram, TAccountSource, TAccountMint, TAccountDelegate, TAccountOwner, TRemainingAccounts>>;

/** Flattened `ApproveCheckedInput`. */
export type PrettyApproveCheckedInput<
    TAccountSource extends string = string,
    TAccountMint extends string = string,
    TAccountDelegate extends string = string,
    TAccountOwner extends string = string,
> = Prettify<ApproveCheckedInput<TAccountSource, TAccountMint, TAccountDelegate, TAccountOwner>>;

/** Flattened `ParsedApproveCheckedInstruction`. */
export type PrettyParsedApproveCheckedInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedApproveCheckedInstruction<TProgram, TAccountMetas>>;

// --- Revoke ---

/** Flattened `RevokeInstruction`. */
export type PrettyRevokeInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountSource extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<RevokeInstruction<TProgram, TAccountSource, TAccountOwner, TRemainingAccounts>>;

/** Flattened `RevokeInput`. */
export type PrettyRevokeInput<
    TAccountSource extends string = string,
    TAccountOwner extends string = string,
> = Prettify<RevokeInput<TAccountSource, TAccountOwner>>;

/** Flattened `ParsedRevokeInstruction`. */
export type PrettyParsedRevokeInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedRevokeInstruction<TProgram, TAccountMetas>>;

// --- MintTo ---

/** Flattened `MintToInstruction`. */
export type PrettyMintToInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountMintAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<MintToInstruction<TProgram, TAccountMint, TAccountToken, TAccountMintAuthority, TRemainingAccounts>>;

/** Flattened `MintToInput`. */
export type PrettyMintToInput<
    TAccountMint extends string = string,
    TAccountToken extends string = string,
    TAccountMintAuthority extends string = string,
> = Prettify<MintToInput<TAccountMint, TAccountToken, TAccountMintAuthority>>;

/** Flattened `ParsedMintToInstruction`. */
export type PrettyParsedMintToInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedMintToInstruction<TProgram, TAccountMetas>>;

// --- MintToChecked ---

/** Flattened `MintToCheckedInstruction`. */
export type PrettyMintToCheckedInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountMintAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<MintToCheckedInstruction<TProgram, TAccountMint, TAccountToken, TAccountMintAuthority, TRemainingAccounts>>;

/** Flattened `MintToCheckedInput`. */
export type PrettyMintToCheckedInput<
    TAccountMint extends string = string,
    TAccountToken extends string = string,
    TAccountMintAuthority extends string = string,
> = Prettify<MintToCheckedInput<TAccountMint, TAccountToken, TAccountMintAuthority>>;

/** Flattened `ParsedMintToCheckedInstruction`. */
export type PrettyParsedMintToCheckedInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedMintToCheckedInstruction<TProgram, TAccountMetas>>;

// --- Burn ---

/** Flattened `BurnInstruction`. */
export type PrettyBurnInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<BurnInstruction<TProgram, TAccountAccount, TAccountMint, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `BurnInput`. */
export type PrettyBurnInput<
    TAccountAccount extends string = string,
    TAccountMint extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<BurnInput<TAccountAccount, TAccountMint, TAccountAuthority>>;

/** Flattened `ParsedBurnInstruction`. */
export type PrettyParsedBurnInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedBurnInstruction<TProgram, TAccountMetas>>;

// --- BurnChecked ---

/** Flattened `BurnCheckedInstruction`. */
export type PrettyBurnCheckedInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<BurnCheckedInstruction<TProgram, TAccountAccount, TAccountMint, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `BurnCheckedInput`. */
export type PrettyBurnCheckedInput<
    TAccountAccount extends string = string,
    TAccountMint extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<BurnCheckedInput<TAccountAccount, TAccountMint, TAccountAuthority>>;

/** Flattened `ParsedBurnCheckedInstruction`. */
export type PrettyParsedBurnCheckedInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedBurnCheckedInstruction<TProgram, TAccountMetas>>;

// --- CloseAccount ---

/** Flattened `CloseAccountInstruction`. */
export type PrettyCloseAccountInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TAccountDestination extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<CloseAccountInstruction<TProgram, TAccountAccount, TAccountDestination, TAccountOwner, TRemainingAccounts>>;

/** Flattened `CloseAccountInput`. */
export type PrettyCloseAccountInput<
    TAccountAccount extends string = string,
    TAccountDestination extends string = string,
    TAccountOwner extends string = string,
> = Prettify<CloseAccountInput<TAccountAccount, TAccountDestination, TAccountOwner>>;

/** Flattened `ParsedCloseAccountInstruction`. */
export type PrettyParsedCloseAccountInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedCloseAccountInstruction<TProgram, TAccountMetas>>;

// --- FreezeAccount ---

/** Flattened `FreezeAccountInstruction`. */
export type PrettyFreezeAccountInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<FreezeAccountInstruction<TProgram, TAccountAccount, TAccountMint, TAccountOwner, TRemainingAccounts>>;

/** Flattened `FreezeAccountInput`. */
export type PrettyFreezeAccountInput<
    TAccountAccount extends string = string,
    TAccountMint extends string = string,
    TAccountOwner extends string = string,
> = Prettify<FreezeAccountInput<TAccountAccount, TAccountMint, TAccountOwner>>;

/** Flattened `ParsedFreezeAccountInstruction`. */
export type PrettyParsedFreezeAccountInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedFreezeAccountInstruction<TProgram, TAccountMetas>>;

// --- ThawAccount ---

/** Flattened `ThawAccountInstruction`. */
export type PrettyThawAccountInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<ThawAccountInstruction<TProgram, TAccountAccount, TAccountMint, TAccountOwner, TRemainingAccounts>>;

/** Flattened `ThawAccountInput`. */
export type PrettyThawAccountInput<
    TAccountAccount extends string = string,
    TAccountMint extends string = string,
    TAccountOwner extends string = string,
> = Prettify<ThawAccountInput<TAccountAccount, TAccountMint, TAccountOwner>>;

/** Flattened `ParsedThawAccountInstruction`. */
export type PrettyParsedThawAccountInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedThawAccountInstruction<TProgram, TAccountMetas>>;

// --- SetAuthority ---

/** Flattened `SetAuthorityInstruction`. */
export type PrettySetAuthorityInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountOwned extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<SetAuthorityInstruction<TProgram, TAccountOwned, TAccountOwner, TRemainingAccounts>>;

/** Flattened `SetAuthorityInput`. */
export type PrettySetAuthorityInput<
    TAccountOwned extends string = string,
    TAccountOwner extends string = string,
> = Prettify<SetAuthorityInput<TAccountOwned, TAccountOwner>>;

/** Flattened `ParsedSetAuthorityInstruction`. */
export type PrettyParsedSetAuthorityInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedSetAuthorityInstruction<TProgram, TAccountMetas>>;

// --- SyncNative ---

/** Flattened `SyncNativeInstruction`. */
export type PrettySyncNativeInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<SyncNativeInstruction<TProgram, TAccountAccount, TRemainingAccounts>>;

/** Flattened `SyncNativeInput`. */
export type PrettySyncNativeInput<
    TAccountAccount extends string = string,
> = Prettify<SyncNativeInput<TAccountAccount>>;

/** Flattened `ParsedSyncNativeInstruction`. */
export type PrettyParsedSyncNativeInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedSyncNativeInstruction<TProgram, TAccountMetas>>;

// --- AmountToUiAmount ---

/** Flattened `AmountToUiAmountInstruction`. */
export type PrettyAmountToUiAmountInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<AmountToUiAmountInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `AmountToUiAmountInput`. */
export type PrettyAmountToUiAmountInput<
    TAccountMint extends string = string,
> = Prettify<AmountToUiAmountInput<TAccountMint>>;

/** Flattened `ParsedAmountToUiAmountInstruction`. */
export type PrettyParsedAmountToUiAmountInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedAmountToUiAmountInstruction<TProgram, TAccountMetas>>;

// --- UiAmountToAmount ---

/** Flattened `UiAmountToAmountInstruction`. */
export type PrettyUiAmountToAmountInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<UiAmountToAmountInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `UiAmountToAmountInput`. */
export type PrettyUiAmountToAmountInput<
    TAccountMint extends string = string,
> = Prettify<UiAmountToAmountInput<TAccountMint>>;

/** Flattened `ParsedUiAmountToAmountInstruction`. */
export type PrettyParsedUiAmountToAmountInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedUiAmountToAmountInstruction<TProgram, TAccountMetas>>;

// --- GetAccountDataSize ---

/** Flattened `GetAccountDataSizeInstruction`. */
export type PrettyGetAccountDataSizeInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<GetAccountDataSizeInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `GetAccountDataSizeInput`. */
export type PrettyGetAccountDataSizeInput<
    TAccountMint extends string = string,
> = Prettify<GetAccountDataSizeInput<TAccountMint>>;

/** Flattened `ParsedGetAccountDataSizeInstruction`. */
export type PrettyParsedGetAccountDataSizeInstruction<
    TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedGetAccountDataSizeInstruction<TProgram, TAccountMetas>>;

// ============================================================================
// Prettified InstructionData types (for consistency)
// ============================================================================

export type PrettyTransferInstructionData = Prettify<TransferInstructionData>;
export type PrettyTransferInstructionDataArgs = Prettify<TransferInstructionDataArgs>;
export type PrettyTransferCheckedInstructionData = Prettify<TransferCheckedInstructionData>;
export type PrettyTransferCheckedInstructionDataArgs = Prettify<TransferCheckedInstructionDataArgs>;
export type PrettyInitializeMintInstructionData = Prettify<InitializeMintInstructionData>;
export type PrettyInitializeMintInstructionDataArgs = Prettify<InitializeMintInstructionDataArgs>;
export type PrettyInitializeMint2InstructionData = Prettify<InitializeMint2InstructionData>;
export type PrettyInitializeMint2InstructionDataArgs = Prettify<InitializeMint2InstructionDataArgs>;
export type PrettyInitializeAccountInstructionData = Prettify<InitializeAccountInstructionData>;
export type PrettyInitializeAccountInstructionDataArgs = Prettify<InitializeAccountInstructionDataArgs>;
export type PrettyInitializeAccount2InstructionData = Prettify<InitializeAccount2InstructionData>;
export type PrettyInitializeAccount2InstructionDataArgs = Prettify<InitializeAccount2InstructionDataArgs>;
export type PrettyInitializeAccount3InstructionData = Prettify<InitializeAccount3InstructionData>;
export type PrettyInitializeAccount3InstructionDataArgs = Prettify<InitializeAccount3InstructionDataArgs>;
export type PrettyInitializeMultisigInstructionData = Prettify<InitializeMultisigInstructionData>;
export type PrettyInitializeMultisigInstructionDataArgs = Prettify<InitializeMultisigInstructionDataArgs>;
export type PrettyInitializeMultisig2InstructionData = Prettify<InitializeMultisig2InstructionData>;
export type PrettyInitializeMultisig2InstructionDataArgs = Prettify<InitializeMultisig2InstructionDataArgs>;
export type PrettyInitializeImmutableOwnerInstructionData = Prettify<InitializeImmutableOwnerInstructionData>;
export type PrettyInitializeImmutableOwnerInstructionDataArgs = Prettify<InitializeImmutableOwnerInstructionDataArgs>;
export type PrettyApproveInstructionData = Prettify<ApproveInstructionData>;
export type PrettyApproveInstructionDataArgs = Prettify<ApproveInstructionDataArgs>;
export type PrettyApproveCheckedInstructionData = Prettify<ApproveCheckedInstructionData>;
export type PrettyApproveCheckedInstructionDataArgs = Prettify<ApproveCheckedInstructionDataArgs>;
export type PrettyRevokeInstructionData = Prettify<RevokeInstructionData>;
export type PrettyRevokeInstructionDataArgs = Prettify<RevokeInstructionDataArgs>;
export type PrettyMintToInstructionData = Prettify<MintToInstructionData>;
export type PrettyMintToInstructionDataArgs = Prettify<MintToInstructionDataArgs>;
export type PrettyMintToCheckedInstructionData = Prettify<MintToCheckedInstructionData>;
export type PrettyMintToCheckedInstructionDataArgs = Prettify<MintToCheckedInstructionDataArgs>;
export type PrettyBurnInstructionData = Prettify<BurnInstructionData>;
export type PrettyBurnInstructionDataArgs = Prettify<BurnInstructionDataArgs>;
export type PrettyBurnCheckedInstructionData = Prettify<BurnCheckedInstructionData>;
export type PrettyBurnCheckedInstructionDataArgs = Prettify<BurnCheckedInstructionDataArgs>;
export type PrettyCloseAccountInstructionData = Prettify<CloseAccountInstructionData>;
export type PrettyCloseAccountInstructionDataArgs = Prettify<CloseAccountInstructionDataArgs>;
export type PrettyFreezeAccountInstructionData = Prettify<FreezeAccountInstructionData>;
export type PrettyFreezeAccountInstructionDataArgs = Prettify<FreezeAccountInstructionDataArgs>;
export type PrettyThawAccountInstructionData = Prettify<ThawAccountInstructionData>;
export type PrettyThawAccountInstructionDataArgs = Prettify<ThawAccountInstructionDataArgs>;
export type PrettySetAuthorityInstructionData = Prettify<SetAuthorityInstructionData>;
export type PrettySetAuthorityInstructionDataArgs = Prettify<SetAuthorityInstructionDataArgs>;
export type PrettySyncNativeInstructionData = Prettify<SyncNativeInstructionData>;
export type PrettySyncNativeInstructionDataArgs = Prettify<SyncNativeInstructionDataArgs>;
export type PrettyAmountToUiAmountInstructionData = Prettify<AmountToUiAmountInstructionData>;
export type PrettyAmountToUiAmountInstructionDataArgs = Prettify<AmountToUiAmountInstructionDataArgs>;
export type PrettyUiAmountToAmountInstructionData = Prettify<UiAmountToAmountInstructionData>;
export type PrettyUiAmountToAmountInstructionDataArgs = Prettify<UiAmountToAmountInstructionDataArgs>;
export type PrettyGetAccountDataSizeInstructionData = Prettify<GetAccountDataSizeInstructionData>;
export type PrettyGetAccountDataSizeInstructionDataArgs = Prettify<GetAccountDataSizeInstructionDataArgs>;
