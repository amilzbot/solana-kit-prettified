/**
 * Prettified types from `@solana-program/token-2022`.
 *
 * Covers all 94 token-2022 program instructions (including extension instructions
 * like confidential transfers, transfer fees, metadata, groups, CPI guard, etc.),
 * plus Mint, Token, and Multisig account types and extension types.
 *
 * The highest-value targets are instruction return types — each is a
 * multi-intersection of `Instruction & InstructionWithData & InstructionWithAccounts`
 * that Prettify flattens into a single readable object.
 */
import type { Prettify } from '../prettify.js';

import type {
    // Account types
    Mint as Token2022Mint,
    MintArgs as Token2022MintArgs,
    Token as Token2022Account,
    TokenArgs as Token2022Args,
    Multisig as Token2022Multisig,
    MultisigArgs as Token2022MultisigArgs,

    // Extension/enum types
    Extension,
    ExtensionArgs,
    ExtensionType,
    ExtensionTypeArgs,
    TransferFee,
    TransferFeeArgs,
    DecryptableBalance,
    DecryptableBalanceArgs,
    EncryptedBalance,
    EncryptedBalanceArgs,
    AccountStateArgs,
    AuthorityTypeArgs,
    TokenMetadataFieldArgs,

    // AmountToUiAmount
    AmountToUiAmountInstruction,
    AmountToUiAmountInput,
    AmountToUiAmountInstructionData,
    AmountToUiAmountInstructionDataArgs,
    ParsedAmountToUiAmountInstruction,

    // ApplyConfidentialPendingBalance
    ApplyConfidentialPendingBalanceInstruction,
    ApplyConfidentialPendingBalanceInput,
    ApplyConfidentialPendingBalanceInstructionData,
    ApplyConfidentialPendingBalanceInstructionDataArgs,
    ParsedApplyConfidentialPendingBalanceInstruction,

    // Approve
    ApproveInstruction,
    ApproveInput,
    ApproveInstructionData,
    ApproveInstructionDataArgs,
    ParsedApproveInstruction,

    // ApproveChecked
    ApproveCheckedInstruction,
    ApproveCheckedInput,
    ApproveCheckedInstructionData,
    ApproveCheckedInstructionDataArgs,
    ParsedApproveCheckedInstruction,

    // ApproveConfidentialTransferAccount
    ApproveConfidentialTransferAccountInstruction,
    ApproveConfidentialTransferAccountInput,
    ApproveConfidentialTransferAccountInstructionData,
    ApproveConfidentialTransferAccountInstructionDataArgs,
    ParsedApproveConfidentialTransferAccountInstruction,

    // Burn
    BurnInstruction,
    BurnInput,
    BurnInstructionData,
    BurnInstructionDataArgs,
    ParsedBurnInstruction,

    // BurnChecked
    BurnCheckedInstruction,
    BurnCheckedInput,
    BurnCheckedInstructionData,
    BurnCheckedInstructionDataArgs,
    ParsedBurnCheckedInstruction,

    // CloseAccount
    CloseAccountInstruction,
    CloseAccountInput,
    CloseAccountInstructionData,
    CloseAccountInstructionDataArgs,
    ParsedCloseAccountInstruction,

    // ConfidentialDeposit
    ConfidentialDepositInstruction,
    ConfidentialDepositInput,
    ConfidentialDepositInstructionData,
    ConfidentialDepositInstructionDataArgs,
    ParsedConfidentialDepositInstruction,

    // ConfidentialTransfer
    ConfidentialTransferInstruction,
    ConfidentialTransferInput,
    ConfidentialTransferInstructionData,
    ConfidentialTransferInstructionDataArgs,
    ParsedConfidentialTransferInstruction,

    // ConfidentialTransferWithFee
    ConfidentialTransferWithFeeInstruction,
    ConfidentialTransferWithFeeInput,
    ConfidentialTransferWithFeeInstructionData,
    ConfidentialTransferWithFeeInstructionDataArgs,
    ParsedConfidentialTransferWithFeeInstruction,

    // ConfidentialWithdraw
    ConfidentialWithdrawInstruction,
    ConfidentialWithdrawInput,
    ConfidentialWithdrawInstructionData,
    ConfidentialWithdrawInstructionDataArgs,
    ParsedConfidentialWithdrawInstruction,

    // ConfigureConfidentialTransferAccount
    ConfigureConfidentialTransferAccountInstruction,
    ConfigureConfidentialTransferAccountInput,
    ConfigureConfidentialTransferAccountInstructionData,
    ConfigureConfidentialTransferAccountInstructionDataArgs,
    ParsedConfigureConfidentialTransferAccountInstruction,

    // CreateAssociatedToken
    CreateAssociatedTokenInstruction,
    CreateAssociatedTokenInput,
    CreateAssociatedTokenInstructionData,
    CreateAssociatedTokenInstructionDataArgs,
    ParsedCreateAssociatedTokenInstruction,

    // CreateAssociatedTokenIdempotent
    CreateAssociatedTokenIdempotentInstruction,
    CreateAssociatedTokenIdempotentInput,
    CreateAssociatedTokenIdempotentInstructionData,
    CreateAssociatedTokenIdempotentInstructionDataArgs,
    ParsedCreateAssociatedTokenIdempotentInstruction,

    // CreateNativeMint
    CreateNativeMintInstruction,
    CreateNativeMintInput,
    CreateNativeMintInstructionData,
    CreateNativeMintInstructionDataArgs,
    ParsedCreateNativeMintInstruction,

    // DisableConfidentialCredits
    DisableConfidentialCreditsInstruction,
    DisableConfidentialCreditsInput,
    DisableConfidentialCreditsInstructionData,
    DisableConfidentialCreditsInstructionDataArgs,
    ParsedDisableConfidentialCreditsInstruction,

    // DisableCpiGuard
    DisableCpiGuardInstruction,
    DisableCpiGuardInput,
    DisableCpiGuardInstructionData,
    DisableCpiGuardInstructionDataArgs,
    ParsedDisableCpiGuardInstruction,

    // DisableHarvestToMint
    DisableHarvestToMintInstruction,
    DisableHarvestToMintInput,
    DisableHarvestToMintInstructionData,
    DisableHarvestToMintInstructionDataArgs,
    ParsedDisableHarvestToMintInstruction,

    // DisableMemoTransfers
    DisableMemoTransfersInstruction,
    DisableMemoTransfersInput,
    DisableMemoTransfersInstructionData,
    DisableMemoTransfersInstructionDataArgs,
    ParsedDisableMemoTransfersInstruction,

    // DisableNonConfidentialCredits
    DisableNonConfidentialCreditsInstruction,
    DisableNonConfidentialCreditsInput,
    DisableNonConfidentialCreditsInstructionData,
    DisableNonConfidentialCreditsInstructionDataArgs,
    ParsedDisableNonConfidentialCreditsInstruction,

    // EmitTokenMetadata
    EmitTokenMetadataInstruction,
    EmitTokenMetadataInput,
    EmitTokenMetadataInstructionData,
    EmitTokenMetadataInstructionDataArgs,
    ParsedEmitTokenMetadataInstruction,

    // EmptyConfidentialTransferAccount
    EmptyConfidentialTransferAccountInstruction,
    EmptyConfidentialTransferAccountInput,
    EmptyConfidentialTransferAccountInstructionData,
    EmptyConfidentialTransferAccountInstructionDataArgs,
    ParsedEmptyConfidentialTransferAccountInstruction,

    // EnableConfidentialCredits
    EnableConfidentialCreditsInstruction,
    EnableConfidentialCreditsInput,
    EnableConfidentialCreditsInstructionData,
    EnableConfidentialCreditsInstructionDataArgs,
    ParsedEnableConfidentialCreditsInstruction,

    // EnableCpiGuard
    EnableCpiGuardInstruction,
    EnableCpiGuardInput,
    EnableCpiGuardInstructionData,
    EnableCpiGuardInstructionDataArgs,
    ParsedEnableCpiGuardInstruction,

    // EnableHarvestToMint
    EnableHarvestToMintInstruction,
    EnableHarvestToMintInput,
    EnableHarvestToMintInstructionData,
    EnableHarvestToMintInstructionDataArgs,
    ParsedEnableHarvestToMintInstruction,

    // EnableMemoTransfers
    EnableMemoTransfersInstruction,
    EnableMemoTransfersInput,
    EnableMemoTransfersInstructionData,
    EnableMemoTransfersInstructionDataArgs,
    ParsedEnableMemoTransfersInstruction,

    // EnableNonConfidentialCredits
    EnableNonConfidentialCreditsInstruction,
    EnableNonConfidentialCreditsInput,
    EnableNonConfidentialCreditsInstructionData,
    EnableNonConfidentialCreditsInstructionDataArgs,
    ParsedEnableNonConfidentialCreditsInstruction,

    // FreezeAccount
    FreezeAccountInstruction,
    FreezeAccountInput,
    FreezeAccountInstructionData,
    FreezeAccountInstructionDataArgs,
    ParsedFreezeAccountInstruction,

    // GetAccountDataSize
    GetAccountDataSizeInstruction,
    GetAccountDataSizeInput,
    GetAccountDataSizeInstructionData,
    GetAccountDataSizeInstructionDataArgs,
    ParsedGetAccountDataSizeInstruction,

    // HarvestWithheldTokensToMint
    HarvestWithheldTokensToMintInstruction,
    HarvestWithheldTokensToMintInput,
    HarvestWithheldTokensToMintInstructionData,
    HarvestWithheldTokensToMintInstructionDataArgs,
    ParsedHarvestWithheldTokensToMintInstruction,

    // HarvestWithheldTokensToMintForConfidentialTransferFee
    HarvestWithheldTokensToMintForConfidentialTransferFeeInstruction,
    HarvestWithheldTokensToMintForConfidentialTransferFeeInput,
    HarvestWithheldTokensToMintForConfidentialTransferFeeInstructionData,
    HarvestWithheldTokensToMintForConfidentialTransferFeeInstructionDataArgs,
    ParsedHarvestWithheldTokensToMintForConfidentialTransferFeeInstruction,

    // InitializeAccount
    InitializeAccountInstruction,
    InitializeAccountInput,
    InitializeAccountInstructionData,
    InitializeAccountInstructionDataArgs,
    ParsedInitializeAccountInstruction,

    // InitializeAccount2
    InitializeAccount2Instruction,
    InitializeAccount2Input,
    InitializeAccount2InstructionData,
    InitializeAccount2InstructionDataArgs,
    ParsedInitializeAccount2Instruction,

    // InitializeAccount3
    InitializeAccount3Instruction,
    InitializeAccount3Input,
    InitializeAccount3InstructionData,
    InitializeAccount3InstructionDataArgs,
    ParsedInitializeAccount3Instruction,

    // InitializeConfidentialTransferFee
    InitializeConfidentialTransferFeeInstruction,
    InitializeConfidentialTransferFeeInput,
    InitializeConfidentialTransferFeeInstructionData,
    InitializeConfidentialTransferFeeInstructionDataArgs,
    ParsedInitializeConfidentialTransferFeeInstruction,

    // InitializeConfidentialTransferMint
    InitializeConfidentialTransferMintInstruction,
    InitializeConfidentialTransferMintInput,
    InitializeConfidentialTransferMintInstructionData,
    InitializeConfidentialTransferMintInstructionDataArgs,
    ParsedInitializeConfidentialTransferMintInstruction,

    // InitializeDefaultAccountState
    InitializeDefaultAccountStateInstruction,
    InitializeDefaultAccountStateInput,
    InitializeDefaultAccountStateInstructionData,
    InitializeDefaultAccountStateInstructionDataArgs,
    ParsedInitializeDefaultAccountStateInstruction,

    // InitializeGroupMemberPointer
    InitializeGroupMemberPointerInstruction,
    InitializeGroupMemberPointerInput,
    InitializeGroupMemberPointerInstructionData,
    InitializeGroupMemberPointerInstructionDataArgs,
    ParsedInitializeGroupMemberPointerInstruction,

    // InitializeGroupPointer
    InitializeGroupPointerInstruction,
    InitializeGroupPointerInput,
    InitializeGroupPointerInstructionData,
    InitializeGroupPointerInstructionDataArgs,
    ParsedInitializeGroupPointerInstruction,

    // InitializeImmutableOwner
    InitializeImmutableOwnerInstruction,
    InitializeImmutableOwnerInput,
    InitializeImmutableOwnerInstructionData,
    InitializeImmutableOwnerInstructionDataArgs,
    ParsedInitializeImmutableOwnerInstruction,

    // InitializeInterestBearingMint
    InitializeInterestBearingMintInstruction,
    InitializeInterestBearingMintInput,
    InitializeInterestBearingMintInstructionData,
    InitializeInterestBearingMintInstructionDataArgs,
    ParsedInitializeInterestBearingMintInstruction,

    // InitializeMetadataPointer
    InitializeMetadataPointerInstruction,
    InitializeMetadataPointerInput,
    InitializeMetadataPointerInstructionData,
    InitializeMetadataPointerInstructionDataArgs,
    ParsedInitializeMetadataPointerInstruction,

    // InitializeMint
    InitializeMintInstruction,
    InitializeMintInput,
    InitializeMintInstructionData,
    InitializeMintInstructionDataArgs,
    ParsedInitializeMintInstruction,

    // InitializeMint2
    InitializeMint2Instruction,
    InitializeMint2Input,
    InitializeMint2InstructionData,
    InitializeMint2InstructionDataArgs,
    ParsedInitializeMint2Instruction,

    // InitializeMintCloseAuthority
    InitializeMintCloseAuthorityInstruction,
    InitializeMintCloseAuthorityInput,
    InitializeMintCloseAuthorityInstructionData,
    InitializeMintCloseAuthorityInstructionDataArgs,
    ParsedInitializeMintCloseAuthorityInstruction,

    // InitializeMultisig
    InitializeMultisigInstruction,
    InitializeMultisigInput,
    InitializeMultisigInstructionData,
    InitializeMultisigInstructionDataArgs,
    ParsedInitializeMultisigInstruction,

    // InitializeMultisig2
    InitializeMultisig2Instruction,
    InitializeMultisig2Input,
    InitializeMultisig2InstructionData,
    InitializeMultisig2InstructionDataArgs,
    ParsedInitializeMultisig2Instruction,

    // InitializeNonTransferableMint
    InitializeNonTransferableMintInstruction,
    InitializeNonTransferableMintInput,
    InitializeNonTransferableMintInstructionData,
    InitializeNonTransferableMintInstructionDataArgs,
    ParsedInitializeNonTransferableMintInstruction,

    // InitializePausableConfig
    InitializePausableConfigInstruction,
    InitializePausableConfigInput,
    InitializePausableConfigInstructionData,
    InitializePausableConfigInstructionDataArgs,
    ParsedInitializePausableConfigInstruction,

    // InitializePermanentDelegate
    InitializePermanentDelegateInstruction,
    InitializePermanentDelegateInput,
    InitializePermanentDelegateInstructionData,
    InitializePermanentDelegateInstructionDataArgs,
    ParsedInitializePermanentDelegateInstruction,

    // InitializePermissionedBurn
    InitializePermissionedBurnInstruction,
    InitializePermissionedBurnInput,
    InitializePermissionedBurnInstructionData,
    InitializePermissionedBurnInstructionDataArgs,
    ParsedInitializePermissionedBurnInstruction,

    // InitializeScaledUiAmountMint
    InitializeScaledUiAmountMintInstruction,
    InitializeScaledUiAmountMintInput,
    InitializeScaledUiAmountMintInstructionData,
    InitializeScaledUiAmountMintInstructionDataArgs,
    ParsedInitializeScaledUiAmountMintInstruction,

    // InitializeTokenGroup
    InitializeTokenGroupInstruction,
    InitializeTokenGroupInput,
    InitializeTokenGroupInstructionData,
    InitializeTokenGroupInstructionDataArgs,
    ParsedInitializeTokenGroupInstruction,

    // InitializeTokenGroupMember
    InitializeTokenGroupMemberInstruction,
    InitializeTokenGroupMemberInput,
    InitializeTokenGroupMemberInstructionData,
    InitializeTokenGroupMemberInstructionDataArgs,
    ParsedInitializeTokenGroupMemberInstruction,

    // InitializeTokenMetadata
    InitializeTokenMetadataInstruction,
    InitializeTokenMetadataInput,
    InitializeTokenMetadataInstructionData,
    InitializeTokenMetadataInstructionDataArgs,
    ParsedInitializeTokenMetadataInstruction,

    // InitializeTransferFeeConfig
    InitializeTransferFeeConfigInstruction,
    InitializeTransferFeeConfigInput,
    InitializeTransferFeeConfigInstructionData,
    InitializeTransferFeeConfigInstructionDataArgs,
    ParsedInitializeTransferFeeConfigInstruction,

    // InitializeTransferHook
    InitializeTransferHookInstruction,
    InitializeTransferHookInput,
    InitializeTransferHookInstructionData,
    InitializeTransferHookInstructionDataArgs,
    ParsedInitializeTransferHookInstruction,

    // MintTo
    MintToInstruction,
    MintToInput,
    MintToInstructionData,
    MintToInstructionDataArgs,
    ParsedMintToInstruction,

    // MintToChecked
    MintToCheckedInstruction,
    MintToCheckedInput,
    MintToCheckedInstructionData,
    MintToCheckedInstructionDataArgs,
    ParsedMintToCheckedInstruction,

    // Pause
    PauseInstruction,
    PauseInput,
    PauseInstructionData,
    PauseInstructionDataArgs,
    ParsedPauseInstruction,

    // PermissionedBurn
    PermissionedBurnInstruction,
    PermissionedBurnInput,
    PermissionedBurnInstructionData,
    PermissionedBurnInstructionDataArgs,
    ParsedPermissionedBurnInstruction,

    // PermissionedBurnChecked
    PermissionedBurnCheckedInstruction,
    PermissionedBurnCheckedInput,
    PermissionedBurnCheckedInstructionData,
    PermissionedBurnCheckedInstructionDataArgs,
    ParsedPermissionedBurnCheckedInstruction,

    // Reallocate
    ReallocateInstruction,
    ReallocateInput,
    ReallocateInstructionData,
    ReallocateInstructionDataArgs,
    ParsedReallocateInstruction,

    // RecoverNestedAssociatedToken
    RecoverNestedAssociatedTokenInstruction,
    RecoverNestedAssociatedTokenInput,
    RecoverNestedAssociatedTokenInstructionData,
    RecoverNestedAssociatedTokenInstructionDataArgs,
    ParsedRecoverNestedAssociatedTokenInstruction,

    // RemoveTokenMetadataKey
    RemoveTokenMetadataKeyInstruction,
    RemoveTokenMetadataKeyInput,
    RemoveTokenMetadataKeyInstructionData,
    RemoveTokenMetadataKeyInstructionDataArgs,
    ParsedRemoveTokenMetadataKeyInstruction,

    // Resume
    ResumeInstruction,
    ResumeInput,
    ResumeInstructionData,
    ResumeInstructionDataArgs,
    ParsedResumeInstruction,

    // Revoke
    RevokeInstruction,
    RevokeInput,
    RevokeInstructionData,
    RevokeInstructionDataArgs,
    ParsedRevokeInstruction,

    // SetAuthority
    SetAuthorityInstruction,
    SetAuthorityInput,
    SetAuthorityInstructionData,
    SetAuthorityInstructionDataArgs,
    ParsedSetAuthorityInstruction,

    // SetTransferFee
    SetTransferFeeInstruction,
    SetTransferFeeInput,
    SetTransferFeeInstructionData,
    SetTransferFeeInstructionDataArgs,
    ParsedSetTransferFeeInstruction,

    // SyncNative
    SyncNativeInstruction,
    SyncNativeInput,
    SyncNativeInstructionData,
    SyncNativeInstructionDataArgs,
    ParsedSyncNativeInstruction,

    // ThawAccount
    ThawAccountInstruction,
    ThawAccountInput,
    ThawAccountInstructionData,
    ThawAccountInstructionDataArgs,
    ParsedThawAccountInstruction,

    // Transfer
    TransferInstruction,
    TransferInput,
    TransferInstructionData,
    TransferInstructionDataArgs,
    ParsedTransferInstruction,

    // TransferChecked
    TransferCheckedInstruction,
    TransferCheckedInput,
    TransferCheckedInstructionData,
    TransferCheckedInstructionDataArgs,
    ParsedTransferCheckedInstruction,

    // TransferCheckedWithFee
    TransferCheckedWithFeeInstruction,
    TransferCheckedWithFeeInput,
    TransferCheckedWithFeeInstructionData,
    TransferCheckedWithFeeInstructionDataArgs,
    ParsedTransferCheckedWithFeeInstruction,

    // UiAmountToAmount
    UiAmountToAmountInstruction,
    UiAmountToAmountInput,
    UiAmountToAmountInstructionData,
    UiAmountToAmountInstructionDataArgs,
    ParsedUiAmountToAmountInstruction,

    // UnwrapLamports
    UnwrapLamportsInstruction,
    UnwrapLamportsInput,
    UnwrapLamportsInstructionData,
    UnwrapLamportsInstructionDataArgs,
    ParsedUnwrapLamportsInstruction,

    // UpdateConfidentialTransferMint
    UpdateConfidentialTransferMintInstruction,
    UpdateConfidentialTransferMintInput,
    UpdateConfidentialTransferMintInstructionData,
    UpdateConfidentialTransferMintInstructionDataArgs,
    ParsedUpdateConfidentialTransferMintInstruction,

    // UpdateDefaultAccountState
    UpdateDefaultAccountStateInstruction,
    UpdateDefaultAccountStateInput,
    UpdateDefaultAccountStateInstructionData,
    UpdateDefaultAccountStateInstructionDataArgs,
    ParsedUpdateDefaultAccountStateInstruction,

    // UpdateGroupMemberPointer
    UpdateGroupMemberPointerInstruction,
    UpdateGroupMemberPointerInput,
    UpdateGroupMemberPointerInstructionData,
    UpdateGroupMemberPointerInstructionDataArgs,
    ParsedUpdateGroupMemberPointerInstruction,

    // UpdateGroupPointer
    UpdateGroupPointerInstruction,
    UpdateGroupPointerInput,
    UpdateGroupPointerInstructionData,
    UpdateGroupPointerInstructionDataArgs,
    ParsedUpdateGroupPointerInstruction,

    // UpdateMetadataPointer
    UpdateMetadataPointerInstruction,
    UpdateMetadataPointerInput,
    UpdateMetadataPointerInstructionData,
    UpdateMetadataPointerInstructionDataArgs,
    ParsedUpdateMetadataPointerInstruction,

    // UpdateMultiplierScaledUiMint
    UpdateMultiplierScaledUiMintInstruction,
    UpdateMultiplierScaledUiMintInput,
    UpdateMultiplierScaledUiMintInstructionData,
    UpdateMultiplierScaledUiMintInstructionDataArgs,
    ParsedUpdateMultiplierScaledUiMintInstruction,

    // UpdateRateInterestBearingMint
    UpdateRateInterestBearingMintInstruction,
    UpdateRateInterestBearingMintInput,
    UpdateRateInterestBearingMintInstructionData,
    UpdateRateInterestBearingMintInstructionDataArgs,
    ParsedUpdateRateInterestBearingMintInstruction,

    // UpdateTokenGroupMaxSize
    UpdateTokenGroupMaxSizeInstruction,
    UpdateTokenGroupMaxSizeInput,
    UpdateTokenGroupMaxSizeInstructionData,
    UpdateTokenGroupMaxSizeInstructionDataArgs,
    ParsedUpdateTokenGroupMaxSizeInstruction,

    // UpdateTokenGroupUpdateAuthority
    UpdateTokenGroupUpdateAuthorityInstruction,
    UpdateTokenGroupUpdateAuthorityInput,
    UpdateTokenGroupUpdateAuthorityInstructionData,
    UpdateTokenGroupUpdateAuthorityInstructionDataArgs,
    ParsedUpdateTokenGroupUpdateAuthorityInstruction,

    // UpdateTokenMetadataField
    UpdateTokenMetadataFieldInstruction,
    UpdateTokenMetadataFieldInput,
    UpdateTokenMetadataFieldInstructionData,
    UpdateTokenMetadataFieldInstructionDataArgs,
    ParsedUpdateTokenMetadataFieldInstruction,

    // UpdateTokenMetadataUpdateAuthority
    UpdateTokenMetadataUpdateAuthorityInstruction,
    UpdateTokenMetadataUpdateAuthorityInput,
    UpdateTokenMetadataUpdateAuthorityInstructionData,
    UpdateTokenMetadataUpdateAuthorityInstructionDataArgs,
    ParsedUpdateTokenMetadataUpdateAuthorityInstruction,

    // UpdateTransferHook
    UpdateTransferHookInstruction,
    UpdateTransferHookInput,
    UpdateTransferHookInstructionData,
    UpdateTransferHookInstructionDataArgs,
    ParsedUpdateTransferHookInstruction,

    // WithdrawExcessLamports
    WithdrawExcessLamportsInstruction,
    WithdrawExcessLamportsInput,
    WithdrawExcessLamportsInstructionData,
    WithdrawExcessLamportsInstructionDataArgs,
    ParsedWithdrawExcessLamportsInstruction,

    // WithdrawWithheldTokensFromAccounts
    WithdrawWithheldTokensFromAccountsInstruction,
    WithdrawWithheldTokensFromAccountsInput,
    WithdrawWithheldTokensFromAccountsInstructionData,
    WithdrawWithheldTokensFromAccountsInstructionDataArgs,
    ParsedWithdrawWithheldTokensFromAccountsInstruction,

    // WithdrawWithheldTokensFromAccountsForConfidentialTransferFee
    WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction,
    WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInput,
    WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionData,
    WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionDataArgs,
    ParsedWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction,

    // WithdrawWithheldTokensFromMint
    WithdrawWithheldTokensFromMintInstruction,
    WithdrawWithheldTokensFromMintInput,
    WithdrawWithheldTokensFromMintInstructionData,
    WithdrawWithheldTokensFromMintInstructionDataArgs,
    ParsedWithdrawWithheldTokensFromMintInstruction,

    // WithdrawWithheldTokensFromMintForConfidentialTransferFee
    WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction,
    WithdrawWithheldTokensFromMintForConfidentialTransferFeeInput,
    WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionData,
    WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataArgs,
    ParsedWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction,

    // Program address
    TOKEN_2022_PROGRAM_ADDRESS,
} from '@solana-program/token-2022';

import type { AccountMeta } from '@solana/kit';
import { ASSOCIATED_TOKEN_PROGRAM_ADDRESS } from '@solana-program/token-2022';

// ============================================================================
// Re-exports (originals available alongside Pretty* versions)
// ============================================================================

export type {
    // Account types (aliased to avoid collision with base token program)
    Token2022Mint,
    Token2022MintArgs,
    Token2022Account,
    Token2022Args,
    Token2022Multisig,
    Token2022MultisigArgs,

    // Extension/enum types (unique to token-2022)
    Extension,
    ExtensionArgs,
    ExtensionType,
    ExtensionTypeArgs,
    TransferFee,
    TransferFeeArgs,
    DecryptableBalance,
    DecryptableBalanceArgs,
    EncryptedBalance,
    EncryptedBalanceArgs,
    TokenMetadataFieldArgs,
};


export {
    // Enums
    AccountState,
    AuthorityType,
    ExtensionType as ExtensionTypeEnum,
    Token2022Instruction,

    // Program address
    TOKEN_2022_PROGRAM_ADDRESS,

    // Instruction builders
    getAmountToUiAmountInstruction,
    getApplyConfidentialPendingBalanceInstruction,
    getApproveInstruction,
    getApproveCheckedInstruction,
    getApproveConfidentialTransferAccountInstruction,
    getBurnInstruction,
    getBurnCheckedInstruction,
    getCloseAccountInstruction,
    getConfidentialDepositInstruction,
    getConfidentialTransferInstruction,
    getConfidentialTransferWithFeeInstruction,
    getConfidentialWithdrawInstruction,
    getConfigureConfidentialTransferAccountInstruction,
    getCreateAssociatedTokenInstruction,
    getCreateAssociatedTokenIdempotentInstruction,
    getCreateNativeMintInstruction,
    getDisableConfidentialCreditsInstruction,
    getDisableCpiGuardInstruction,
    getDisableHarvestToMintInstruction,
    getDisableMemoTransfersInstruction,
    getDisableNonConfidentialCreditsInstruction,
    getEmitTokenMetadataInstruction,
    getEmptyConfidentialTransferAccountInstruction,
    getEnableConfidentialCreditsInstruction,
    getEnableCpiGuardInstruction,
    getEnableHarvestToMintInstruction,
    getEnableMemoTransfersInstruction,
    getEnableNonConfidentialCreditsInstruction,
    getFreezeAccountInstruction,
    getGetAccountDataSizeInstruction,
    getHarvestWithheldTokensToMintInstruction,
    getHarvestWithheldTokensToMintForConfidentialTransferFeeInstruction,
    getInitializeAccountInstruction,
    getInitializeAccount2Instruction,
    getInitializeAccount3Instruction,
    getInitializeConfidentialTransferFeeInstruction,
    getInitializeConfidentialTransferMintInstruction,
    getInitializeDefaultAccountStateInstruction,
    getInitializeGroupMemberPointerInstruction,
    getInitializeGroupPointerInstruction,
    getInitializeImmutableOwnerInstruction,
    getInitializeInterestBearingMintInstruction,
    getInitializeMetadataPointerInstruction,
    getInitializeMintInstruction,
    getInitializeMint2Instruction,
    getInitializeMintCloseAuthorityInstruction,
    getInitializeMultisigInstruction,
    getInitializeMultisig2Instruction,
    getInitializeNonTransferableMintInstruction,
    getInitializePausableConfigInstruction,
    getInitializePermanentDelegateInstruction,
    getInitializePermissionedBurnInstruction,
    getInitializeScaledUiAmountMintInstruction,
    getInitializeTokenGroupInstruction,
    getInitializeTokenGroupMemberInstruction,
    getInitializeTokenMetadataInstruction,
    getInitializeTransferFeeConfigInstruction,
    getInitializeTransferHookInstruction,
    getMintToInstruction,
    getMintToCheckedInstruction,
    getPauseInstruction,
    getPermissionedBurnInstruction,
    getPermissionedBurnCheckedInstruction,
    getReallocateInstruction,
    getRecoverNestedAssociatedTokenInstruction,
    getRemoveTokenMetadataKeyInstruction,
    getResumeInstruction,
    getRevokeInstruction,
    getSetAuthorityInstruction,
    getSetTransferFeeInstruction,
    getSyncNativeInstruction,
    getThawAccountInstruction,
    getTransferInstruction,
    getTransferCheckedInstruction,
    getTransferCheckedWithFeeInstruction,
    getUiAmountToAmountInstruction,
    getUnwrapLamportsInstruction,
    getUpdateConfidentialTransferMintInstruction,
    getUpdateDefaultAccountStateInstruction,
    getUpdateGroupMemberPointerInstruction,
    getUpdateGroupPointerInstruction,
    getUpdateMetadataPointerInstruction,
    getUpdateMultiplierScaledUiMintInstruction,
    getUpdateRateInterestBearingMintInstruction,
    getUpdateTokenGroupMaxSizeInstruction,
    getUpdateTokenGroupUpdateAuthorityInstruction,
    getUpdateTokenMetadataFieldInstruction,
    getUpdateTokenMetadataUpdateAuthorityInstruction,
    getUpdateTransferHookInstruction,
    getWithdrawExcessLamportsInstruction,
    getWithdrawWithheldTokensFromAccountsInstruction,
    getWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction,
    getWithdrawWithheldTokensFromMintInstruction,
    getWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction,

    // Parsers
    parseAmountToUiAmountInstruction,
    parseApplyConfidentialPendingBalanceInstruction,
    parseApproveInstruction,
    parseApproveCheckedInstruction,
    parseApproveConfidentialTransferAccountInstruction,
    parseBurnInstruction,
    parseBurnCheckedInstruction,
    parseCloseAccountInstruction,
    parseConfidentialDepositInstruction,
    parseConfidentialTransferInstruction,
    parseConfidentialTransferWithFeeInstruction,
    parseConfidentialWithdrawInstruction,
    parseConfigureConfidentialTransferAccountInstruction,
    parseCreateAssociatedTokenInstruction,
    parseCreateAssociatedTokenIdempotentInstruction,
    parseCreateNativeMintInstruction,
    parseDisableConfidentialCreditsInstruction,
    parseDisableCpiGuardInstruction,
    parseDisableHarvestToMintInstruction,
    parseDisableMemoTransfersInstruction,
    parseDisableNonConfidentialCreditsInstruction,
    parseEmitTokenMetadataInstruction,
    parseEmptyConfidentialTransferAccountInstruction,
    parseEnableConfidentialCreditsInstruction,
    parseEnableCpiGuardInstruction,
    parseEnableHarvestToMintInstruction,
    parseEnableMemoTransfersInstruction,
    parseEnableNonConfidentialCreditsInstruction,
    parseFreezeAccountInstruction,
    parseGetAccountDataSizeInstruction,
    parseHarvestWithheldTokensToMintInstruction,
    parseHarvestWithheldTokensToMintForConfidentialTransferFeeInstruction,
    parseInitializeAccountInstruction,
    parseInitializeAccount2Instruction,
    parseInitializeAccount3Instruction,
    parseInitializeConfidentialTransferFeeInstruction,
    parseInitializeConfidentialTransferMintInstruction,
    parseInitializeDefaultAccountStateInstruction,
    parseInitializeGroupMemberPointerInstruction,
    parseInitializeGroupPointerInstruction,
    parseInitializeImmutableOwnerInstruction,
    parseInitializeInterestBearingMintInstruction,
    parseInitializeMetadataPointerInstruction,
    parseInitializeMintInstruction,
    parseInitializeMint2Instruction,
    parseInitializeMintCloseAuthorityInstruction,
    parseInitializeMultisigInstruction,
    parseInitializeMultisig2Instruction,
    parseInitializeNonTransferableMintInstruction,
    parseInitializePausableConfigInstruction,
    parseInitializePermanentDelegateInstruction,
    parseInitializePermissionedBurnInstruction,
    parseInitializeScaledUiAmountMintInstruction,
    parseInitializeTokenGroupInstruction,
    parseInitializeTokenGroupMemberInstruction,
    parseInitializeTokenMetadataInstruction,
    parseInitializeTransferFeeConfigInstruction,
    parseInitializeTransferHookInstruction,
    parseMintToInstruction,
    parseMintToCheckedInstruction,
    parsePauseInstruction,
    parsePermissionedBurnInstruction,
    parsePermissionedBurnCheckedInstruction,
    parseReallocateInstruction,
    parseRecoverNestedAssociatedTokenInstruction,
    parseRemoveTokenMetadataKeyInstruction,
    parseResumeInstruction,
    parseRevokeInstruction,
    parseSetAuthorityInstruction,
    parseSetTransferFeeInstruction,
    parseSyncNativeInstruction,
    parseThawAccountInstruction,
    parseTransferInstruction,
    parseTransferCheckedInstruction,
    parseTransferCheckedWithFeeInstruction,
    parseUiAmountToAmountInstruction,
    parseUnwrapLamportsInstruction,
    parseUpdateConfidentialTransferMintInstruction,
    parseUpdateDefaultAccountStateInstruction,
    parseUpdateGroupMemberPointerInstruction,
    parseUpdateGroupPointerInstruction,
    parseUpdateMetadataPointerInstruction,
    parseUpdateMultiplierScaledUiMintInstruction,
    parseUpdateRateInterestBearingMintInstruction,
    parseUpdateTokenGroupMaxSizeInstruction,
    parseUpdateTokenGroupUpdateAuthorityInstruction,
    parseUpdateTokenMetadataFieldInstruction,
    parseUpdateTokenMetadataUpdateAuthorityInstruction,
    parseUpdateTransferHookInstruction,
    parseWithdrawExcessLamportsInstruction,
    parseWithdrawWithheldTokensFromAccountsInstruction,
    parseWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction,
    parseWithdrawWithheldTokensFromMintInstruction,
    parseWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction,
    parseToken2022Instruction,
    identifyToken2022Instruction,

    // Instruction data codecs
    getAmountToUiAmountInstructionDataEncoder,
    getAmountToUiAmountInstructionDataDecoder,
    getAmountToUiAmountInstructionDataCodec,
    getApplyConfidentialPendingBalanceInstructionDataEncoder,
    getApplyConfidentialPendingBalanceInstructionDataDecoder,
    getApplyConfidentialPendingBalanceInstructionDataCodec,
    getApproveInstructionDataEncoder,
    getApproveInstructionDataDecoder,
    getApproveInstructionDataCodec,
    getApproveCheckedInstructionDataEncoder,
    getApproveCheckedInstructionDataDecoder,
    getApproveCheckedInstructionDataCodec,
    getApproveConfidentialTransferAccountInstructionDataEncoder,
    getApproveConfidentialTransferAccountInstructionDataDecoder,
    getApproveConfidentialTransferAccountInstructionDataCodec,
    getBurnInstructionDataEncoder,
    getBurnInstructionDataDecoder,
    getBurnInstructionDataCodec,
    getBurnCheckedInstructionDataEncoder,
    getBurnCheckedInstructionDataDecoder,
    getBurnCheckedInstructionDataCodec,
    getCloseAccountInstructionDataEncoder,
    getCloseAccountInstructionDataDecoder,
    getCloseAccountInstructionDataCodec,
    getConfidentialDepositInstructionDataEncoder,
    getConfidentialDepositInstructionDataDecoder,
    getConfidentialDepositInstructionDataCodec,
    getConfidentialTransferInstructionDataEncoder,
    getConfidentialTransferInstructionDataDecoder,
    getConfidentialTransferInstructionDataCodec,
    getConfidentialTransferWithFeeInstructionDataEncoder,
    getConfidentialTransferWithFeeInstructionDataDecoder,
    getConfidentialTransferWithFeeInstructionDataCodec,
    getConfidentialWithdrawInstructionDataEncoder,
    getConfidentialWithdrawInstructionDataDecoder,
    getConfidentialWithdrawInstructionDataCodec,
    getConfigureConfidentialTransferAccountInstructionDataEncoder,
    getConfigureConfidentialTransferAccountInstructionDataDecoder,
    getConfigureConfidentialTransferAccountInstructionDataCodec,
    getCreateAssociatedTokenInstructionDataEncoder,
    getCreateAssociatedTokenInstructionDataDecoder,
    getCreateAssociatedTokenInstructionDataCodec,
    getCreateAssociatedTokenIdempotentInstructionDataEncoder,
    getCreateAssociatedTokenIdempotentInstructionDataDecoder,
    getCreateAssociatedTokenIdempotentInstructionDataCodec,
    getCreateNativeMintInstructionDataEncoder,
    getCreateNativeMintInstructionDataDecoder,
    getCreateNativeMintInstructionDataCodec,
    getDisableConfidentialCreditsInstructionDataEncoder,
    getDisableConfidentialCreditsInstructionDataDecoder,
    getDisableConfidentialCreditsInstructionDataCodec,
    getDisableCpiGuardInstructionDataEncoder,
    getDisableCpiGuardInstructionDataDecoder,
    getDisableCpiGuardInstructionDataCodec,
    getDisableHarvestToMintInstructionDataEncoder,
    getDisableHarvestToMintInstructionDataDecoder,
    getDisableHarvestToMintInstructionDataCodec,
    getDisableMemoTransfersInstructionDataEncoder,
    getDisableMemoTransfersInstructionDataDecoder,
    getDisableMemoTransfersInstructionDataCodec,
    getDisableNonConfidentialCreditsInstructionDataEncoder,
    getDisableNonConfidentialCreditsInstructionDataDecoder,
    getDisableNonConfidentialCreditsInstructionDataCodec,
    getEmitTokenMetadataInstructionDataEncoder,
    getEmitTokenMetadataInstructionDataDecoder,
    getEmitTokenMetadataInstructionDataCodec,
    getEmptyConfidentialTransferAccountInstructionDataEncoder,
    getEmptyConfidentialTransferAccountInstructionDataDecoder,
    getEmptyConfidentialTransferAccountInstructionDataCodec,
    getEnableConfidentialCreditsInstructionDataEncoder,
    getEnableConfidentialCreditsInstructionDataDecoder,
    getEnableConfidentialCreditsInstructionDataCodec,
    getEnableCpiGuardInstructionDataEncoder,
    getEnableCpiGuardInstructionDataDecoder,
    getEnableCpiGuardInstructionDataCodec,
    getEnableHarvestToMintInstructionDataEncoder,
    getEnableHarvestToMintInstructionDataDecoder,
    getEnableHarvestToMintInstructionDataCodec,
    getEnableMemoTransfersInstructionDataEncoder,
    getEnableMemoTransfersInstructionDataDecoder,
    getEnableMemoTransfersInstructionDataCodec,
    getEnableNonConfidentialCreditsInstructionDataEncoder,
    getEnableNonConfidentialCreditsInstructionDataDecoder,
    getEnableNonConfidentialCreditsInstructionDataCodec,
    getFreezeAccountInstructionDataEncoder,
    getFreezeAccountInstructionDataDecoder,
    getFreezeAccountInstructionDataCodec,
    getGetAccountDataSizeInstructionDataEncoder,
    getGetAccountDataSizeInstructionDataDecoder,
    getGetAccountDataSizeInstructionDataCodec,
    getHarvestWithheldTokensToMintInstructionDataEncoder,
    getHarvestWithheldTokensToMintInstructionDataDecoder,
    getHarvestWithheldTokensToMintInstructionDataCodec,
    getHarvestWithheldTokensToMintForConfidentialTransferFeeInstructionDataEncoder,
    getHarvestWithheldTokensToMintForConfidentialTransferFeeInstructionDataDecoder,
    getHarvestWithheldTokensToMintForConfidentialTransferFeeInstructionDataCodec,
    getInitializeAccountInstructionDataEncoder,
    getInitializeAccountInstructionDataDecoder,
    getInitializeAccountInstructionDataCodec,
    getInitializeAccount2InstructionDataEncoder,
    getInitializeAccount2InstructionDataDecoder,
    getInitializeAccount2InstructionDataCodec,
    getInitializeAccount3InstructionDataEncoder,
    getInitializeAccount3InstructionDataDecoder,
    getInitializeAccount3InstructionDataCodec,
    getInitializeConfidentialTransferFeeInstructionDataEncoder,
    getInitializeConfidentialTransferFeeInstructionDataDecoder,
    getInitializeConfidentialTransferFeeInstructionDataCodec,
    getInitializeConfidentialTransferMintInstructionDataEncoder,
    getInitializeConfidentialTransferMintInstructionDataDecoder,
    getInitializeConfidentialTransferMintInstructionDataCodec,
    getInitializeDefaultAccountStateInstructionDataEncoder,
    getInitializeDefaultAccountStateInstructionDataDecoder,
    getInitializeDefaultAccountStateInstructionDataCodec,
    getInitializeGroupMemberPointerInstructionDataEncoder,
    getInitializeGroupMemberPointerInstructionDataDecoder,
    getInitializeGroupMemberPointerInstructionDataCodec,
    getInitializeGroupPointerInstructionDataEncoder,
    getInitializeGroupPointerInstructionDataDecoder,
    getInitializeGroupPointerInstructionDataCodec,
    getInitializeImmutableOwnerInstructionDataEncoder,
    getInitializeImmutableOwnerInstructionDataDecoder,
    getInitializeImmutableOwnerInstructionDataCodec,
    getInitializeInterestBearingMintInstructionDataEncoder,
    getInitializeInterestBearingMintInstructionDataDecoder,
    getInitializeInterestBearingMintInstructionDataCodec,
    getInitializeMetadataPointerInstructionDataEncoder,
    getInitializeMetadataPointerInstructionDataDecoder,
    getInitializeMetadataPointerInstructionDataCodec,
    getInitializeMintInstructionDataEncoder,
    getInitializeMintInstructionDataDecoder,
    getInitializeMintInstructionDataCodec,
    getInitializeMint2InstructionDataEncoder,
    getInitializeMint2InstructionDataDecoder,
    getInitializeMint2InstructionDataCodec,
    getInitializeMintCloseAuthorityInstructionDataEncoder,
    getInitializeMintCloseAuthorityInstructionDataDecoder,
    getInitializeMintCloseAuthorityInstructionDataCodec,
    getInitializeMultisigInstructionDataEncoder,
    getInitializeMultisigInstructionDataDecoder,
    getInitializeMultisigInstructionDataCodec,
    getInitializeMultisig2InstructionDataEncoder,
    getInitializeMultisig2InstructionDataDecoder,
    getInitializeMultisig2InstructionDataCodec,
    getInitializeNonTransferableMintInstructionDataEncoder,
    getInitializeNonTransferableMintInstructionDataDecoder,
    getInitializeNonTransferableMintInstructionDataCodec,
    getInitializePausableConfigInstructionDataEncoder,
    getInitializePausableConfigInstructionDataDecoder,
    getInitializePausableConfigInstructionDataCodec,
    getInitializePermanentDelegateInstructionDataEncoder,
    getInitializePermanentDelegateInstructionDataDecoder,
    getInitializePermanentDelegateInstructionDataCodec,
    getInitializePermissionedBurnInstructionDataEncoder,
    getInitializePermissionedBurnInstructionDataDecoder,
    getInitializePermissionedBurnInstructionDataCodec,
    getInitializeScaledUiAmountMintInstructionDataEncoder,
    getInitializeScaledUiAmountMintInstructionDataDecoder,
    getInitializeScaledUiAmountMintInstructionDataCodec,
    getInitializeTokenGroupInstructionDataEncoder,
    getInitializeTokenGroupInstructionDataDecoder,
    getInitializeTokenGroupInstructionDataCodec,
    getInitializeTokenGroupMemberInstructionDataEncoder,
    getInitializeTokenGroupMemberInstructionDataDecoder,
    getInitializeTokenGroupMemberInstructionDataCodec,
    getInitializeTokenMetadataInstructionDataEncoder,
    getInitializeTokenMetadataInstructionDataDecoder,
    getInitializeTokenMetadataInstructionDataCodec,
    getInitializeTransferFeeConfigInstructionDataEncoder,
    getInitializeTransferFeeConfigInstructionDataDecoder,
    getInitializeTransferFeeConfigInstructionDataCodec,
    getInitializeTransferHookInstructionDataEncoder,
    getInitializeTransferHookInstructionDataDecoder,
    getInitializeTransferHookInstructionDataCodec,
    getMintToInstructionDataEncoder,
    getMintToInstructionDataDecoder,
    getMintToInstructionDataCodec,
    getMintToCheckedInstructionDataEncoder,
    getMintToCheckedInstructionDataDecoder,
    getMintToCheckedInstructionDataCodec,
    getPauseInstructionDataEncoder,
    getPauseInstructionDataDecoder,
    getPauseInstructionDataCodec,
    getPermissionedBurnInstructionDataEncoder,
    getPermissionedBurnInstructionDataDecoder,
    getPermissionedBurnInstructionDataCodec,
    getPermissionedBurnCheckedInstructionDataEncoder,
    getPermissionedBurnCheckedInstructionDataDecoder,
    getPermissionedBurnCheckedInstructionDataCodec,
    getReallocateInstructionDataEncoder,
    getReallocateInstructionDataDecoder,
    getReallocateInstructionDataCodec,
    getRecoverNestedAssociatedTokenInstructionDataEncoder,
    getRecoverNestedAssociatedTokenInstructionDataDecoder,
    getRecoverNestedAssociatedTokenInstructionDataCodec,
    getRemoveTokenMetadataKeyInstructionDataEncoder,
    getRemoveTokenMetadataKeyInstructionDataDecoder,
    getRemoveTokenMetadataKeyInstructionDataCodec,
    getResumeInstructionDataEncoder,
    getResumeInstructionDataDecoder,
    getResumeInstructionDataCodec,
    getRevokeInstructionDataEncoder,
    getRevokeInstructionDataDecoder,
    getRevokeInstructionDataCodec,
    getSetAuthorityInstructionDataEncoder,
    getSetAuthorityInstructionDataDecoder,
    getSetAuthorityInstructionDataCodec,
    getSetTransferFeeInstructionDataEncoder,
    getSetTransferFeeInstructionDataDecoder,
    getSetTransferFeeInstructionDataCodec,
    getSyncNativeInstructionDataEncoder,
    getSyncNativeInstructionDataDecoder,
    getSyncNativeInstructionDataCodec,
    getThawAccountInstructionDataEncoder,
    getThawAccountInstructionDataDecoder,
    getThawAccountInstructionDataCodec,
    getTransferInstructionDataEncoder,
    getTransferInstructionDataDecoder,
    getTransferInstructionDataCodec,
    getTransferCheckedInstructionDataEncoder,
    getTransferCheckedInstructionDataDecoder,
    getTransferCheckedInstructionDataCodec,
    getTransferCheckedWithFeeInstructionDataEncoder,
    getTransferCheckedWithFeeInstructionDataDecoder,
    getTransferCheckedWithFeeInstructionDataCodec,
    getUiAmountToAmountInstructionDataEncoder,
    getUiAmountToAmountInstructionDataDecoder,
    getUiAmountToAmountInstructionDataCodec,
    getUnwrapLamportsInstructionDataEncoder,
    getUnwrapLamportsInstructionDataDecoder,
    getUnwrapLamportsInstructionDataCodec,
    getUpdateConfidentialTransferMintInstructionDataEncoder,
    getUpdateConfidentialTransferMintInstructionDataDecoder,
    getUpdateConfidentialTransferMintInstructionDataCodec,
    getUpdateDefaultAccountStateInstructionDataEncoder,
    getUpdateDefaultAccountStateInstructionDataDecoder,
    getUpdateDefaultAccountStateInstructionDataCodec,
    getUpdateGroupMemberPointerInstructionDataEncoder,
    getUpdateGroupMemberPointerInstructionDataDecoder,
    getUpdateGroupMemberPointerInstructionDataCodec,
    getUpdateGroupPointerInstructionDataEncoder,
    getUpdateGroupPointerInstructionDataDecoder,
    getUpdateGroupPointerInstructionDataCodec,
    getUpdateMetadataPointerInstructionDataEncoder,
    getUpdateMetadataPointerInstructionDataDecoder,
    getUpdateMetadataPointerInstructionDataCodec,
    getUpdateMultiplierScaledUiMintInstructionDataEncoder,
    getUpdateMultiplierScaledUiMintInstructionDataDecoder,
    getUpdateMultiplierScaledUiMintInstructionDataCodec,
    getUpdateRateInterestBearingMintInstructionDataEncoder,
    getUpdateRateInterestBearingMintInstructionDataDecoder,
    getUpdateRateInterestBearingMintInstructionDataCodec,
    getUpdateTokenGroupMaxSizeInstructionDataEncoder,
    getUpdateTokenGroupMaxSizeInstructionDataDecoder,
    getUpdateTokenGroupMaxSizeInstructionDataCodec,
    getUpdateTokenGroupUpdateAuthorityInstructionDataEncoder,
    getUpdateTokenGroupUpdateAuthorityInstructionDataDecoder,
    getUpdateTokenGroupUpdateAuthorityInstructionDataCodec,
    getUpdateTokenMetadataFieldInstructionDataEncoder,
    getUpdateTokenMetadataFieldInstructionDataDecoder,
    getUpdateTokenMetadataFieldInstructionDataCodec,
    getUpdateTokenMetadataUpdateAuthorityInstructionDataEncoder,
    getUpdateTokenMetadataUpdateAuthorityInstructionDataDecoder,
    getUpdateTokenMetadataUpdateAuthorityInstructionDataCodec,
    getUpdateTransferHookInstructionDataEncoder,
    getUpdateTransferHookInstructionDataDecoder,
    getUpdateTransferHookInstructionDataCodec,
    getWithdrawExcessLamportsInstructionDataEncoder,
    getWithdrawExcessLamportsInstructionDataDecoder,
    getWithdrawExcessLamportsInstructionDataCodec,
    getWithdrawWithheldTokensFromAccountsInstructionDataEncoder,
    getWithdrawWithheldTokensFromAccountsInstructionDataDecoder,
    getWithdrawWithheldTokensFromAccountsInstructionDataCodec,
    getWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionDataEncoder,
    getWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionDataDecoder,
    getWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionDataCodec,
    getWithdrawWithheldTokensFromMintInstructionDataEncoder,
    getWithdrawWithheldTokensFromMintInstructionDataDecoder,
    getWithdrawWithheldTokensFromMintInstructionDataCodec,
    getWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataEncoder,
    getWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataDecoder,
    getWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataCodec,

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

    // Extension/type codecs
    getExtensionEncoder,
    getExtensionDecoder,
    getExtensionCodec,
    getExtensionTypeEncoder,
    getExtensionTypeDecoder,
    getExtensionTypeCodec,
    getTransferFeeEncoder,
    getTransferFeeDecoder,
    getTransferFeeCodec,
    getDecryptableBalanceEncoder,
    getDecryptableBalanceDecoder,
    getDecryptableBalanceCodec,
    getEncryptedBalanceEncoder,
    getEncryptedBalanceDecoder,
    getEncryptedBalanceCodec,
    getAccountStateEncoder,
    getAccountStateDecoder,
    getAccountStateCodec,
    getAuthorityTypeEncoder,
    getAuthorityTypeDecoder,
    getAuthorityTypeCodec,
    getTokenMetadataFieldEncoder,
    getTokenMetadataFieldDecoder,
    getTokenMetadataFieldCodec,

    // Extension utilities
    extension,
    isExtension,
    getPreInitializeInstructionsForMintExtensions,

    // Account/instruction identification
    identifyToken2022Account,
    Token2022Account as Token2022AccountKind,
} from '@solana-program/token-2022';

// ============================================================================
// Prettified Account Types
// ============================================================================

/** Flattened Token-2022 `Mint` account data (includes extension fields). */
export type PrettyToken2022Mint = Prettify<Token2022Mint>;
export type PrettyToken2022MintArgs = Prettify<Token2022MintArgs>;
/** Flattened Token-2022 token account data. */
export type PrettyToken2022Account = Prettify<Token2022Account>;
export type PrettyToken2022Args = Prettify<Token2022Args>;
/** Flattened Token-2022 `Multisig` account data. */
export type PrettyToken2022Multisig = Prettify<Token2022Multisig>;
export type PrettyToken2022MultisigArgs = Prettify<Token2022MultisigArgs>;

// ============================================================================
// Prettified Extension Types
// ============================================================================

/** Flattened `TransferFee` — the fee config within TransferFeeConfig extension. */
export type PrettyTransferFee = Prettify<TransferFee>;
export type PrettyTransferFeeArgs = Prettify<TransferFeeArgs>;
/** Flattened `DecryptableBalance` — used in confidential transfer extensions. */
export type PrettyDecryptableBalance = Prettify<DecryptableBalance>;
export type PrettyDecryptableBalanceArgs = Prettify<DecryptableBalanceArgs>;
/** Flattened `EncryptedBalance` — used in confidential transfer extensions. */
export type PrettyEncryptedBalance = Prettify<EncryptedBalance>;
export type PrettyEncryptedBalanceArgs = Prettify<EncryptedBalanceArgs>;

// ============================================================================
// Prettified Instruction Types (multi-intersection → flat object)
// ============================================================================

// --- AmountToUiAmount ---

/** Flattened `AmountToUiAmountInstruction`. */
export type PrettyAmountToUiAmountInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<AmountToUiAmountInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `AmountToUiAmountInput`. */
export type PrettyAmountToUiAmountInput<
    TAccountMint extends string = string,
> = Prettify<AmountToUiAmountInput<TAccountMint>>;

/** Flattened `ParsedAmountToUiAmountInstruction`. */
export type PrettyParsedAmountToUiAmountInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedAmountToUiAmountInstruction<TProgram, TAccountMetas>>;

export type PrettyAmountToUiAmountInstructionData = Prettify<AmountToUiAmountInstructionData>;
export type PrettyAmountToUiAmountInstructionDataArgs = Prettify<AmountToUiAmountInstructionDataArgs>;

// --- ApplyConfidentialPendingBalance ---

/** Flattened `ApplyConfidentialPendingBalanceInstruction`. */
export type PrettyApplyConfidentialPendingBalanceInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<ApplyConfidentialPendingBalanceInstruction<TProgram, TAccountToken, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `ApplyConfidentialPendingBalanceInput`. */
export type PrettyApplyConfidentialPendingBalanceInput<
    TAccountToken extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<ApplyConfidentialPendingBalanceInput<TAccountToken, TAccountAuthority>>;

/** Flattened `ParsedApplyConfidentialPendingBalanceInstruction`. */
export type PrettyParsedApplyConfidentialPendingBalanceInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedApplyConfidentialPendingBalanceInstruction<TProgram, TAccountMetas>>;

export type PrettyApplyConfidentialPendingBalanceInstructionData = Prettify<ApplyConfidentialPendingBalanceInstructionData>;
export type PrettyApplyConfidentialPendingBalanceInstructionDataArgs = Prettify<ApplyConfidentialPendingBalanceInstructionDataArgs>;

// --- Approve ---

/** Flattened `ApproveInstruction`. */
export type PrettyApproveInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
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
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedApproveInstruction<TProgram, TAccountMetas>>;

export type PrettyApproveInstructionData = Prettify<ApproveInstructionData>;
export type PrettyApproveInstructionDataArgs = Prettify<ApproveInstructionDataArgs>;

// --- ApproveChecked ---

/** Flattened `ApproveCheckedInstruction`. */
export type PrettyApproveCheckedInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
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
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedApproveCheckedInstruction<TProgram, TAccountMetas>>;

export type PrettyApproveCheckedInstructionData = Prettify<ApproveCheckedInstructionData>;
export type PrettyApproveCheckedInstructionDataArgs = Prettify<ApproveCheckedInstructionDataArgs>;

// --- ApproveConfidentialTransferAccount ---

/** Flattened `ApproveConfidentialTransferAccountInstruction`. */
export type PrettyApproveConfidentialTransferAccountInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<ApproveConfidentialTransferAccountInstruction<TProgram, TAccountToken, TAccountMint, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `ApproveConfidentialTransferAccountInput`. */
export type PrettyApproveConfidentialTransferAccountInput<
    TAccountToken extends string = string,
    TAccountMint extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<ApproveConfidentialTransferAccountInput<TAccountToken, TAccountMint, TAccountAuthority>>;

/** Flattened `ParsedApproveConfidentialTransferAccountInstruction`. */
export type PrettyParsedApproveConfidentialTransferAccountInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedApproveConfidentialTransferAccountInstruction<TProgram, TAccountMetas>>;

export type PrettyApproveConfidentialTransferAccountInstructionData = Prettify<ApproveConfidentialTransferAccountInstructionData>;
export type PrettyApproveConfidentialTransferAccountInstructionDataArgs = Prettify<ApproveConfidentialTransferAccountInstructionDataArgs>;

// --- Burn ---

/** Flattened `BurnInstruction`. */
export type PrettyBurnInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
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
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedBurnInstruction<TProgram, TAccountMetas>>;

export type PrettyBurnInstructionData = Prettify<BurnInstructionData>;
export type PrettyBurnInstructionDataArgs = Prettify<BurnInstructionDataArgs>;

// --- BurnChecked ---

/** Flattened `BurnCheckedInstruction`. */
export type PrettyBurnCheckedInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
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
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedBurnCheckedInstruction<TProgram, TAccountMetas>>;

export type PrettyBurnCheckedInstructionData = Prettify<BurnCheckedInstructionData>;
export type PrettyBurnCheckedInstructionDataArgs = Prettify<BurnCheckedInstructionDataArgs>;

// --- CloseAccount ---

/** Flattened `CloseAccountInstruction`. */
export type PrettyCloseAccountInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
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
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedCloseAccountInstruction<TProgram, TAccountMetas>>;

export type PrettyCloseAccountInstructionData = Prettify<CloseAccountInstructionData>;
export type PrettyCloseAccountInstructionDataArgs = Prettify<CloseAccountInstructionDataArgs>;

// --- ConfidentialDeposit ---

/** Flattened `ConfidentialDepositInstruction`. */
export type PrettyConfidentialDepositInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<ConfidentialDepositInstruction<TProgram, TAccountToken, TAccountMint, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `ConfidentialDepositInput`. */
export type PrettyConfidentialDepositInput<
    TAccountToken extends string = string,
    TAccountMint extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<ConfidentialDepositInput<TAccountToken, TAccountMint, TAccountAuthority>>;

/** Flattened `ParsedConfidentialDepositInstruction`. */
export type PrettyParsedConfidentialDepositInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedConfidentialDepositInstruction<TProgram, TAccountMetas>>;

export type PrettyConfidentialDepositInstructionData = Prettify<ConfidentialDepositInstructionData>;
export type PrettyConfidentialDepositInstructionDataArgs = Prettify<ConfidentialDepositInstructionDataArgs>;

// --- ConfidentialTransfer ---

/** Flattened `ConfidentialTransferInstruction`. */
export type PrettyConfidentialTransferInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountSourceToken extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountDestinationToken extends string | AccountMeta<string> = string,
    TAccountInstructionsSysvar extends string | AccountMeta<string> = string,
    TAccountEqualityRecord extends string | AccountMeta<string> = string,
    TAccountCiphertextValidityRecord extends string | AccountMeta<string> = string,
    TAccountRangeRecord extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<ConfidentialTransferInstruction<TProgram, TAccountSourceToken, TAccountMint, TAccountDestinationToken, TAccountInstructionsSysvar, TAccountEqualityRecord, TAccountCiphertextValidityRecord, TAccountRangeRecord, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `ConfidentialTransferInput`. */
export type PrettyConfidentialTransferInput<
    TAccountSourceToken extends string = string,
    TAccountMint extends string = string,
    TAccountDestinationToken extends string = string,
    TAccountInstructionsSysvar extends string = string,
    TAccountEqualityRecord extends string = string,
    TAccountCiphertextValidityRecord extends string = string,
    TAccountRangeRecord extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<ConfidentialTransferInput<TAccountSourceToken, TAccountMint, TAccountDestinationToken, TAccountInstructionsSysvar, TAccountEqualityRecord, TAccountCiphertextValidityRecord, TAccountRangeRecord, TAccountAuthority>>;

/** Flattened `ParsedConfidentialTransferInstruction`. */
export type PrettyParsedConfidentialTransferInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedConfidentialTransferInstruction<TProgram, TAccountMetas>>;

export type PrettyConfidentialTransferInstructionData = Prettify<ConfidentialTransferInstructionData>;
export type PrettyConfidentialTransferInstructionDataArgs = Prettify<ConfidentialTransferInstructionDataArgs>;

// --- ConfidentialTransferWithFee ---

/** Flattened `ConfidentialTransferWithFeeInstruction`. */
export type PrettyConfidentialTransferWithFeeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountSourceToken extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountDestinationToken extends string | AccountMeta<string> = string,
    TAccountInstructionsSysvar extends string | AccountMeta<string> = string,
    TAccountEqualityRecord extends string | AccountMeta<string> = string,
    TAccountTransferAmountCiphertextValidityRecord extends string | AccountMeta<string> = string,
    TAccountFeeSigmaRecord extends string | AccountMeta<string> = string,
    TAccountFeeCiphertextValidityRecord extends string | AccountMeta<string> = string,
    TAccountRangeRecord extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<ConfidentialTransferWithFeeInstruction<TProgram, TAccountSourceToken, TAccountMint, TAccountDestinationToken, TAccountInstructionsSysvar, TAccountEqualityRecord, TAccountTransferAmountCiphertextValidityRecord, TAccountFeeSigmaRecord, TAccountFeeCiphertextValidityRecord, TAccountRangeRecord, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `ConfidentialTransferWithFeeInput`. */
export type PrettyConfidentialTransferWithFeeInput<
    TAccountSourceToken extends string = string,
    TAccountMint extends string = string,
    TAccountDestinationToken extends string = string,
    TAccountInstructionsSysvar extends string = string,
    TAccountEqualityRecord extends string = string,
    TAccountTransferAmountCiphertextValidityRecord extends string = string,
    TAccountFeeSigmaRecord extends string = string,
    TAccountFeeCiphertextValidityRecord extends string = string,
    TAccountRangeRecord extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<ConfidentialTransferWithFeeInput<TAccountSourceToken, TAccountMint, TAccountDestinationToken, TAccountInstructionsSysvar, TAccountEqualityRecord, TAccountTransferAmountCiphertextValidityRecord, TAccountFeeSigmaRecord, TAccountFeeCiphertextValidityRecord, TAccountRangeRecord, TAccountAuthority>>;

/** Flattened `ParsedConfidentialTransferWithFeeInstruction`. */
export type PrettyParsedConfidentialTransferWithFeeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedConfidentialTransferWithFeeInstruction<TProgram, TAccountMetas>>;

export type PrettyConfidentialTransferWithFeeInstructionData = Prettify<ConfidentialTransferWithFeeInstructionData>;
export type PrettyConfidentialTransferWithFeeInstructionDataArgs = Prettify<ConfidentialTransferWithFeeInstructionDataArgs>;

// --- ConfidentialWithdraw ---

/** Flattened `ConfidentialWithdrawInstruction`. */
export type PrettyConfidentialWithdrawInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountInstructionsSysvar extends string | AccountMeta<string> = string,
    TAccountEqualityRecord extends string | AccountMeta<string> = string,
    TAccountRangeRecord extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<ConfidentialWithdrawInstruction<TProgram, TAccountToken, TAccountMint, TAccountInstructionsSysvar, TAccountEqualityRecord, TAccountRangeRecord, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `ConfidentialWithdrawInput`. */
export type PrettyConfidentialWithdrawInput<
    TAccountToken extends string = string,
    TAccountMint extends string = string,
    TAccountInstructionsSysvar extends string = string,
    TAccountEqualityRecord extends string = string,
    TAccountRangeRecord extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<ConfidentialWithdrawInput<TAccountToken, TAccountMint, TAccountInstructionsSysvar, TAccountEqualityRecord, TAccountRangeRecord, TAccountAuthority>>;

/** Flattened `ParsedConfidentialWithdrawInstruction`. */
export type PrettyParsedConfidentialWithdrawInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedConfidentialWithdrawInstruction<TProgram, TAccountMetas>>;

export type PrettyConfidentialWithdrawInstructionData = Prettify<ConfidentialWithdrawInstructionData>;
export type PrettyConfidentialWithdrawInstructionDataArgs = Prettify<ConfidentialWithdrawInstructionDataArgs>;

// --- ConfigureConfidentialTransferAccount ---

/** Flattened `ConfigureConfidentialTransferAccountInstruction`. */
export type PrettyConfigureConfidentialTransferAccountInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountInstructionsSysvarOrContextState extends string | AccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
    TAccountRecord extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<ConfigureConfidentialTransferAccountInstruction<TProgram, TAccountToken, TAccountMint, TAccountInstructionsSysvarOrContextState, TAccountRecord, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `ConfigureConfidentialTransferAccountInput`. */
export type PrettyConfigureConfidentialTransferAccountInput<
    TAccountToken extends string = string,
    TAccountMint extends string = string,
    TAccountInstructionsSysvarOrContextState extends string = string,
    TAccountRecord extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<ConfigureConfidentialTransferAccountInput<TAccountToken, TAccountMint, TAccountInstructionsSysvarOrContextState, TAccountRecord, TAccountAuthority>>;

/** Flattened `ParsedConfigureConfidentialTransferAccountInstruction`. */
export type PrettyParsedConfigureConfidentialTransferAccountInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedConfigureConfidentialTransferAccountInstruction<TProgram, TAccountMetas>>;

export type PrettyConfigureConfidentialTransferAccountInstructionData = Prettify<ConfigureConfidentialTransferAccountInstructionData>;
export type PrettyConfigureConfidentialTransferAccountInstructionDataArgs = Prettify<ConfigureConfidentialTransferAccountInstructionDataArgs>;

// --- CreateAssociatedToken ---

/** Flattened `CreateAssociatedTokenInstruction`. */
export type PrettyCreateAssociatedTokenInstruction<
    TProgram extends string = typeof ASSOCIATED_TOKEN_PROGRAM_ADDRESS,
    TAccountPayer extends string | AccountMeta<string> = string,
    TAccountAta extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountSystemProgram extends string | AccountMeta<string> = '11111111111111111111111111111111',
    TAccountTokenProgram extends string | AccountMeta<string> = 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb',
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<CreateAssociatedTokenInstruction<TProgram, TAccountPayer, TAccountAta, TAccountOwner, TAccountMint, TAccountSystemProgram, TAccountTokenProgram, TRemainingAccounts>>;

/** Flattened `CreateAssociatedTokenInput`. */
export type PrettyCreateAssociatedTokenInput<
    TAccountPayer extends string = string,
    TAccountAta extends string = string,
    TAccountOwner extends string = string,
    TAccountMint extends string = string,
    TAccountSystemProgram extends string = string,
    TAccountTokenProgram extends string = string,
> = Prettify<CreateAssociatedTokenInput<TAccountPayer, TAccountAta, TAccountOwner, TAccountMint, TAccountSystemProgram, TAccountTokenProgram>>;

/** Flattened `ParsedCreateAssociatedTokenInstruction`. */
export type PrettyParsedCreateAssociatedTokenInstruction<
    TProgram extends string = typeof ASSOCIATED_TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedCreateAssociatedTokenInstruction<TProgram, TAccountMetas>>;

export type PrettyCreateAssociatedTokenInstructionData = Prettify<CreateAssociatedTokenInstructionData>;
export type PrettyCreateAssociatedTokenInstructionDataArgs = Prettify<CreateAssociatedTokenInstructionDataArgs>;

// --- CreateAssociatedTokenIdempotent ---

/** Flattened `CreateAssociatedTokenIdempotentInstruction`. */
export type PrettyCreateAssociatedTokenIdempotentInstruction<
    TProgram extends string = typeof ASSOCIATED_TOKEN_PROGRAM_ADDRESS,
    TAccountPayer extends string | AccountMeta<string> = string,
    TAccountAta extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountSystemProgram extends string | AccountMeta<string> = '11111111111111111111111111111111',
    TAccountTokenProgram extends string | AccountMeta<string> = 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb',
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<CreateAssociatedTokenIdempotentInstruction<TProgram, TAccountPayer, TAccountAta, TAccountOwner, TAccountMint, TAccountSystemProgram, TAccountTokenProgram, TRemainingAccounts>>;

/** Flattened `CreateAssociatedTokenIdempotentInput`. */
export type PrettyCreateAssociatedTokenIdempotentInput<
    TAccountPayer extends string = string,
    TAccountAta extends string = string,
    TAccountOwner extends string = string,
    TAccountMint extends string = string,
    TAccountSystemProgram extends string = string,
    TAccountTokenProgram extends string = string,
> = Prettify<CreateAssociatedTokenIdempotentInput<TAccountPayer, TAccountAta, TAccountOwner, TAccountMint, TAccountSystemProgram, TAccountTokenProgram>>;

/** Flattened `ParsedCreateAssociatedTokenIdempotentInstruction`. */
export type PrettyParsedCreateAssociatedTokenIdempotentInstruction<
    TProgram extends string = typeof ASSOCIATED_TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedCreateAssociatedTokenIdempotentInstruction<TProgram, TAccountMetas>>;

export type PrettyCreateAssociatedTokenIdempotentInstructionData = Prettify<CreateAssociatedTokenIdempotentInstructionData>;
export type PrettyCreateAssociatedTokenIdempotentInstructionDataArgs = Prettify<CreateAssociatedTokenIdempotentInstructionDataArgs>;

// --- CreateNativeMint ---

/** Flattened `CreateNativeMintInstruction`. */
export type PrettyCreateNativeMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountPayer extends string | AccountMeta<string> = string,
    TAccountNativeMint extends string | AccountMeta<string> = string,
    TAccountSystemProgram extends string | AccountMeta<string> = '11111111111111111111111111111111',
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<CreateNativeMintInstruction<TProgram, TAccountPayer, TAccountNativeMint, TAccountSystemProgram, TRemainingAccounts>>;

/** Flattened `CreateNativeMintInput`. */
export type PrettyCreateNativeMintInput<
    TAccountPayer extends string = string,
    TAccountNativeMint extends string = string,
    TAccountSystemProgram extends string = string,
> = Prettify<CreateNativeMintInput<TAccountPayer, TAccountNativeMint, TAccountSystemProgram>>;

/** Flattened `ParsedCreateNativeMintInstruction`. */
export type PrettyParsedCreateNativeMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedCreateNativeMintInstruction<TProgram, TAccountMetas>>;

export type PrettyCreateNativeMintInstructionData = Prettify<CreateNativeMintInstructionData>;
export type PrettyCreateNativeMintInstructionDataArgs = Prettify<CreateNativeMintInstructionDataArgs>;

// --- DisableConfidentialCredits ---

/** Flattened `DisableConfidentialCreditsInstruction`. */
export type PrettyDisableConfidentialCreditsInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<DisableConfidentialCreditsInstruction<TProgram, TAccountToken, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `DisableConfidentialCreditsInput`. */
export type PrettyDisableConfidentialCreditsInput<
    TAccountToken extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<DisableConfidentialCreditsInput<TAccountToken, TAccountAuthority>>;

/** Flattened `ParsedDisableConfidentialCreditsInstruction`. */
export type PrettyParsedDisableConfidentialCreditsInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedDisableConfidentialCreditsInstruction<TProgram, TAccountMetas>>;

export type PrettyDisableConfidentialCreditsInstructionData = Prettify<DisableConfidentialCreditsInstructionData>;
export type PrettyDisableConfidentialCreditsInstructionDataArgs = Prettify<DisableConfidentialCreditsInstructionDataArgs>;

// --- DisableCpiGuard ---

/** Flattened `DisableCpiGuardInstruction`. */
export type PrettyDisableCpiGuardInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<DisableCpiGuardInstruction<TProgram, TAccountToken, TAccountOwner, TRemainingAccounts>>;

/** Flattened `DisableCpiGuardInput`. */
export type PrettyDisableCpiGuardInput<
    TAccountToken extends string = string, TAccountOwner extends string = string,
> = Prettify<DisableCpiGuardInput<TAccountToken>>;

/** Flattened `ParsedDisableCpiGuardInstruction`. */
export type PrettyParsedDisableCpiGuardInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedDisableCpiGuardInstruction<TProgram, TAccountMetas>>;

export type PrettyDisableCpiGuardInstructionData = Prettify<DisableCpiGuardInstructionData>;
export type PrettyDisableCpiGuardInstructionDataArgs = Prettify<DisableCpiGuardInstructionDataArgs>;

// --- DisableHarvestToMint ---

/** Flattened `DisableHarvestToMintInstruction`. */
export type PrettyDisableHarvestToMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<DisableHarvestToMintInstruction<TProgram, TAccountMint, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `DisableHarvestToMintInput`. */
export type PrettyDisableHarvestToMintInput<
    TAccountMint extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<DisableHarvestToMintInput<TAccountMint, TAccountAuthority>>;

/** Flattened `ParsedDisableHarvestToMintInstruction`. */
export type PrettyParsedDisableHarvestToMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedDisableHarvestToMintInstruction<TProgram, TAccountMetas>>;

export type PrettyDisableHarvestToMintInstructionData = Prettify<DisableHarvestToMintInstructionData>;
export type PrettyDisableHarvestToMintInstructionDataArgs = Prettify<DisableHarvestToMintInstructionDataArgs>;

// --- DisableMemoTransfers ---

/** Flattened `DisableMemoTransfersInstruction`. */
export type PrettyDisableMemoTransfersInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<DisableMemoTransfersInstruction<TProgram, TAccountToken, TAccountOwner, TRemainingAccounts>>;

/** Flattened `DisableMemoTransfersInput`. */
export type PrettyDisableMemoTransfersInput<
    TAccountToken extends string = string, TAccountOwner extends string = string,
> = Prettify<DisableMemoTransfersInput<TAccountToken>>;

/** Flattened `ParsedDisableMemoTransfersInstruction`. */
export type PrettyParsedDisableMemoTransfersInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedDisableMemoTransfersInstruction<TProgram, TAccountMetas>>;

export type PrettyDisableMemoTransfersInstructionData = Prettify<DisableMemoTransfersInstructionData>;
export type PrettyDisableMemoTransfersInstructionDataArgs = Prettify<DisableMemoTransfersInstructionDataArgs>;

// --- DisableNonConfidentialCredits ---

/** Flattened `DisableNonConfidentialCreditsInstruction`. */
export type PrettyDisableNonConfidentialCreditsInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<DisableNonConfidentialCreditsInstruction<TProgram, TAccountToken, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `DisableNonConfidentialCreditsInput`. */
export type PrettyDisableNonConfidentialCreditsInput<
    TAccountToken extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<DisableNonConfidentialCreditsInput<TAccountToken, TAccountAuthority>>;

/** Flattened `ParsedDisableNonConfidentialCreditsInstruction`. */
export type PrettyParsedDisableNonConfidentialCreditsInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedDisableNonConfidentialCreditsInstruction<TProgram, TAccountMetas>>;

export type PrettyDisableNonConfidentialCreditsInstructionData = Prettify<DisableNonConfidentialCreditsInstructionData>;
export type PrettyDisableNonConfidentialCreditsInstructionDataArgs = Prettify<DisableNonConfidentialCreditsInstructionDataArgs>;

// --- EmitTokenMetadata ---

/** Flattened `EmitTokenMetadataInstruction`. */
export type PrettyEmitTokenMetadataInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetadata extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<EmitTokenMetadataInstruction<TProgram, TAccountMetadata, TRemainingAccounts>>;

/** Flattened `EmitTokenMetadataInput`. */
export type PrettyEmitTokenMetadataInput<
    TAccountMetadata extends string = string,
> = Prettify<EmitTokenMetadataInput<TAccountMetadata>>;

/** Flattened `ParsedEmitTokenMetadataInstruction`. */
export type PrettyParsedEmitTokenMetadataInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedEmitTokenMetadataInstruction<TProgram, TAccountMetas>>;

export type PrettyEmitTokenMetadataInstructionData = Prettify<EmitTokenMetadataInstructionData>;
export type PrettyEmitTokenMetadataInstructionDataArgs = Prettify<EmitTokenMetadataInstructionDataArgs>;

// --- EmptyConfidentialTransferAccount ---

/** Flattened `EmptyConfidentialTransferAccountInstruction`. */
export type PrettyEmptyConfidentialTransferAccountInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountInstructionsSysvarOrContextState extends string | AccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
    TAccountRecord extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<EmptyConfidentialTransferAccountInstruction<TProgram, TAccountToken, TAccountInstructionsSysvarOrContextState, TAccountRecord, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `EmptyConfidentialTransferAccountInput`. */
export type PrettyEmptyConfidentialTransferAccountInput<
    TAccountToken extends string = string,
    TAccountInstructionsSysvarOrContextState extends string = string,
    TAccountRecord extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<EmptyConfidentialTransferAccountInput<TAccountToken, TAccountInstructionsSysvarOrContextState, TAccountRecord, TAccountAuthority>>;

/** Flattened `ParsedEmptyConfidentialTransferAccountInstruction`. */
export type PrettyParsedEmptyConfidentialTransferAccountInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedEmptyConfidentialTransferAccountInstruction<TProgram, TAccountMetas>>;

export type PrettyEmptyConfidentialTransferAccountInstructionData = Prettify<EmptyConfidentialTransferAccountInstructionData>;
export type PrettyEmptyConfidentialTransferAccountInstructionDataArgs = Prettify<EmptyConfidentialTransferAccountInstructionDataArgs>;

// --- EnableConfidentialCredits ---

/** Flattened `EnableConfidentialCreditsInstruction`. */
export type PrettyEnableConfidentialCreditsInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<EnableConfidentialCreditsInstruction<TProgram, TAccountToken, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `EnableConfidentialCreditsInput`. */
export type PrettyEnableConfidentialCreditsInput<
    TAccountToken extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<EnableConfidentialCreditsInput<TAccountToken, TAccountAuthority>>;

/** Flattened `ParsedEnableConfidentialCreditsInstruction`. */
export type PrettyParsedEnableConfidentialCreditsInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedEnableConfidentialCreditsInstruction<TProgram, TAccountMetas>>;

export type PrettyEnableConfidentialCreditsInstructionData = Prettify<EnableConfidentialCreditsInstructionData>;
export type PrettyEnableConfidentialCreditsInstructionDataArgs = Prettify<EnableConfidentialCreditsInstructionDataArgs>;

// --- EnableCpiGuard ---

/** Flattened `EnableCpiGuardInstruction`. */
export type PrettyEnableCpiGuardInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<EnableCpiGuardInstruction<TProgram, TAccountToken, TAccountOwner, TRemainingAccounts>>;

/** Flattened `EnableCpiGuardInput`. */
export type PrettyEnableCpiGuardInput<
    TAccountToken extends string = string, TAccountOwner extends string = string,
> = Prettify<EnableCpiGuardInput<TAccountToken>>;

/** Flattened `ParsedEnableCpiGuardInstruction`. */
export type PrettyParsedEnableCpiGuardInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedEnableCpiGuardInstruction<TProgram, TAccountMetas>>;

export type PrettyEnableCpiGuardInstructionData = Prettify<EnableCpiGuardInstructionData>;
export type PrettyEnableCpiGuardInstructionDataArgs = Prettify<EnableCpiGuardInstructionDataArgs>;

// --- EnableHarvestToMint ---

/** Flattened `EnableHarvestToMintInstruction`. */
export type PrettyEnableHarvestToMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<EnableHarvestToMintInstruction<TProgram, TAccountMint, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `EnableHarvestToMintInput`. */
export type PrettyEnableHarvestToMintInput<
    TAccountMint extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<EnableHarvestToMintInput<TAccountMint, TAccountAuthority>>;

/** Flattened `ParsedEnableHarvestToMintInstruction`. */
export type PrettyParsedEnableHarvestToMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedEnableHarvestToMintInstruction<TProgram, TAccountMetas>>;

export type PrettyEnableHarvestToMintInstructionData = Prettify<EnableHarvestToMintInstructionData>;
export type PrettyEnableHarvestToMintInstructionDataArgs = Prettify<EnableHarvestToMintInstructionDataArgs>;

// --- EnableMemoTransfers ---

/** Flattened `EnableMemoTransfersInstruction`. */
export type PrettyEnableMemoTransfersInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<EnableMemoTransfersInstruction<TProgram, TAccountToken, TAccountOwner, TRemainingAccounts>>;

/** Flattened `EnableMemoTransfersInput`. */
export type PrettyEnableMemoTransfersInput<
    TAccountToken extends string = string, TAccountOwner extends string = string,
> = Prettify<EnableMemoTransfersInput<TAccountToken>>;

/** Flattened `ParsedEnableMemoTransfersInstruction`. */
export type PrettyParsedEnableMemoTransfersInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedEnableMemoTransfersInstruction<TProgram, TAccountMetas>>;

export type PrettyEnableMemoTransfersInstructionData = Prettify<EnableMemoTransfersInstructionData>;
export type PrettyEnableMemoTransfersInstructionDataArgs = Prettify<EnableMemoTransfersInstructionDataArgs>;

// --- EnableNonConfidentialCredits ---

/** Flattened `EnableNonConfidentialCreditsInstruction`. */
export type PrettyEnableNonConfidentialCreditsInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<EnableNonConfidentialCreditsInstruction<TProgram, TAccountToken, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `EnableNonConfidentialCreditsInput`. */
export type PrettyEnableNonConfidentialCreditsInput<
    TAccountToken extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<EnableNonConfidentialCreditsInput<TAccountToken, TAccountAuthority>>;

/** Flattened `ParsedEnableNonConfidentialCreditsInstruction`. */
export type PrettyParsedEnableNonConfidentialCreditsInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedEnableNonConfidentialCreditsInstruction<TProgram, TAccountMetas>>;

export type PrettyEnableNonConfidentialCreditsInstructionData = Prettify<EnableNonConfidentialCreditsInstructionData>;
export type PrettyEnableNonConfidentialCreditsInstructionDataArgs = Prettify<EnableNonConfidentialCreditsInstructionDataArgs>;

// --- FreezeAccount ---

/** Flattened `FreezeAccountInstruction`. */
export type PrettyFreezeAccountInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
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
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedFreezeAccountInstruction<TProgram, TAccountMetas>>;

export type PrettyFreezeAccountInstructionData = Prettify<FreezeAccountInstructionData>;
export type PrettyFreezeAccountInstructionDataArgs = Prettify<FreezeAccountInstructionDataArgs>;

// --- GetAccountDataSize ---

/** Flattened `GetAccountDataSizeInstruction`. */
export type PrettyGetAccountDataSizeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<GetAccountDataSizeInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `GetAccountDataSizeInput`. */
export type PrettyGetAccountDataSizeInput<
    TAccountMint extends string = string,
> = Prettify<GetAccountDataSizeInput<TAccountMint>>;

/** Flattened `ParsedGetAccountDataSizeInstruction`. */
export type PrettyParsedGetAccountDataSizeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedGetAccountDataSizeInstruction<TProgram, TAccountMetas>>;

export type PrettyGetAccountDataSizeInstructionData = Prettify<GetAccountDataSizeInstructionData>;
export type PrettyGetAccountDataSizeInstructionDataArgs = Prettify<GetAccountDataSizeInstructionDataArgs>;

// --- HarvestWithheldTokensToMint ---

/** Flattened `HarvestWithheldTokensToMintInstruction`. */
export type PrettyHarvestWithheldTokensToMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<HarvestWithheldTokensToMintInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `HarvestWithheldTokensToMintInput`. */
export type PrettyHarvestWithheldTokensToMintInput<
    TAccountMint extends string = string,
> = Prettify<HarvestWithheldTokensToMintInput<TAccountMint>>;

/** Flattened `ParsedHarvestWithheldTokensToMintInstruction`. */
export type PrettyParsedHarvestWithheldTokensToMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedHarvestWithheldTokensToMintInstruction<TProgram, TAccountMetas>>;

export type PrettyHarvestWithheldTokensToMintInstructionData = Prettify<HarvestWithheldTokensToMintInstructionData>;
export type PrettyHarvestWithheldTokensToMintInstructionDataArgs = Prettify<HarvestWithheldTokensToMintInstructionDataArgs>;

// --- HarvestWithheldTokensToMintForConfidentialTransferFee ---

/** Flattened `HarvestWithheldTokensToMintForConfidentialTransferFeeInstruction`. */
export type PrettyHarvestWithheldTokensToMintForConfidentialTransferFeeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<HarvestWithheldTokensToMintForConfidentialTransferFeeInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `HarvestWithheldTokensToMintForConfidentialTransferFeeInput`. */
export type PrettyHarvestWithheldTokensToMintForConfidentialTransferFeeInput<
    TAccountMint extends string = string,
> = Prettify<HarvestWithheldTokensToMintForConfidentialTransferFeeInput<TAccountMint>>;

/** Flattened `ParsedHarvestWithheldTokensToMintForConfidentialTransferFeeInstruction`. */
export type PrettyParsedHarvestWithheldTokensToMintForConfidentialTransferFeeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedHarvestWithheldTokensToMintForConfidentialTransferFeeInstruction<TProgram, TAccountMetas>>;

export type PrettyHarvestWithheldTokensToMintForConfidentialTransferFeeInstructionData = Prettify<HarvestWithheldTokensToMintForConfidentialTransferFeeInstructionData>;
export type PrettyHarvestWithheldTokensToMintForConfidentialTransferFeeInstructionDataArgs = Prettify<HarvestWithheldTokensToMintForConfidentialTransferFeeInstructionDataArgs>;

// --- InitializeAccount ---

/** Flattened `InitializeAccountInstruction`. */
export type PrettyInitializeAccountInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
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
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeAccountInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeAccountInstructionData = Prettify<InitializeAccountInstructionData>;
export type PrettyInitializeAccountInstructionDataArgs = Prettify<InitializeAccountInstructionDataArgs>;

// --- InitializeAccount2 ---

/** Flattened `InitializeAccount2Instruction`. */
export type PrettyInitializeAccount2Instruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
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
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeAccount2Instruction<TProgram, TAccountMetas>>;

export type PrettyInitializeAccount2InstructionData = Prettify<InitializeAccount2InstructionData>;
export type PrettyInitializeAccount2InstructionDataArgs = Prettify<InitializeAccount2InstructionDataArgs>;

// --- InitializeAccount3 ---

/** Flattened `InitializeAccount3Instruction`. */
export type PrettyInitializeAccount3Instruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeAccount3Instruction<TProgram, TAccountAccount, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializeAccount3Input`. */
export type PrettyInitializeAccount3Input<
    TAccountAccount extends string = string, TAccountMint extends string = string,
> = Prettify<InitializeAccount3Input<TAccountAccount>>;

/** Flattened `ParsedInitializeAccount3Instruction`. */
export type PrettyParsedInitializeAccount3Instruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeAccount3Instruction<TProgram, TAccountMetas>>;

export type PrettyInitializeAccount3InstructionData = Prettify<InitializeAccount3InstructionData>;
export type PrettyInitializeAccount3InstructionDataArgs = Prettify<InitializeAccount3InstructionDataArgs>;

// --- InitializeConfidentialTransferFee ---

/** Flattened `InitializeConfidentialTransferFeeInstruction`. */
export type PrettyInitializeConfidentialTransferFeeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeConfidentialTransferFeeInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializeConfidentialTransferFeeInput`. */
export type PrettyInitializeConfidentialTransferFeeInput<
    TAccountMint extends string = string,
> = Prettify<InitializeConfidentialTransferFeeInput<TAccountMint>>;

/** Flattened `ParsedInitializeConfidentialTransferFeeInstruction`. */
export type PrettyParsedInitializeConfidentialTransferFeeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeConfidentialTransferFeeInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeConfidentialTransferFeeInstructionData = Prettify<InitializeConfidentialTransferFeeInstructionData>;
export type PrettyInitializeConfidentialTransferFeeInstructionDataArgs = Prettify<InitializeConfidentialTransferFeeInstructionDataArgs>;

// --- InitializeConfidentialTransferMint ---

/** Flattened `InitializeConfidentialTransferMintInstruction`. */
export type PrettyInitializeConfidentialTransferMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeConfidentialTransferMintInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializeConfidentialTransferMintInput`. */
export type PrettyInitializeConfidentialTransferMintInput<
    TAccountMint extends string = string,
> = Prettify<InitializeConfidentialTransferMintInput<TAccountMint>>;

/** Flattened `ParsedInitializeConfidentialTransferMintInstruction`. */
export type PrettyParsedInitializeConfidentialTransferMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeConfidentialTransferMintInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeConfidentialTransferMintInstructionData = Prettify<InitializeConfidentialTransferMintInstructionData>;
export type PrettyInitializeConfidentialTransferMintInstructionDataArgs = Prettify<InitializeConfidentialTransferMintInstructionDataArgs>;

// --- InitializeDefaultAccountState ---

/** Flattened `InitializeDefaultAccountStateInstruction`. */
export type PrettyInitializeDefaultAccountStateInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeDefaultAccountStateInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializeDefaultAccountStateInput`. */
export type PrettyInitializeDefaultAccountStateInput<
    TAccountMint extends string = string,
> = Prettify<InitializeDefaultAccountStateInput<TAccountMint>>;

/** Flattened `ParsedInitializeDefaultAccountStateInstruction`. */
export type PrettyParsedInitializeDefaultAccountStateInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeDefaultAccountStateInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeDefaultAccountStateInstructionData = Prettify<InitializeDefaultAccountStateInstructionData>;
export type PrettyInitializeDefaultAccountStateInstructionDataArgs = Prettify<InitializeDefaultAccountStateInstructionDataArgs>;

// --- InitializeGroupMemberPointer ---

/** Flattened `InitializeGroupMemberPointerInstruction`. */
export type PrettyInitializeGroupMemberPointerInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeGroupMemberPointerInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializeGroupMemberPointerInput`. */
export type PrettyInitializeGroupMemberPointerInput<
    TAccountMint extends string = string,
> = Prettify<InitializeGroupMemberPointerInput<TAccountMint>>;

/** Flattened `ParsedInitializeGroupMemberPointerInstruction`. */
export type PrettyParsedInitializeGroupMemberPointerInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeGroupMemberPointerInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeGroupMemberPointerInstructionData = Prettify<InitializeGroupMemberPointerInstructionData>;
export type PrettyInitializeGroupMemberPointerInstructionDataArgs = Prettify<InitializeGroupMemberPointerInstructionDataArgs>;

// --- InitializeGroupPointer ---

/** Flattened `InitializeGroupPointerInstruction`. */
export type PrettyInitializeGroupPointerInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeGroupPointerInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializeGroupPointerInput`. */
export type PrettyInitializeGroupPointerInput<
    TAccountMint extends string = string,
> = Prettify<InitializeGroupPointerInput<TAccountMint>>;

/** Flattened `ParsedInitializeGroupPointerInstruction`. */
export type PrettyParsedInitializeGroupPointerInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeGroupPointerInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeGroupPointerInstructionData = Prettify<InitializeGroupPointerInstructionData>;
export type PrettyInitializeGroupPointerInstructionDataArgs = Prettify<InitializeGroupPointerInstructionDataArgs>;

// --- InitializeImmutableOwner ---

/** Flattened `InitializeImmutableOwnerInstruction`. */
export type PrettyInitializeImmutableOwnerInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeImmutableOwnerInstruction<TProgram, TAccountAccount, TRemainingAccounts>>;

/** Flattened `InitializeImmutableOwnerInput`. */
export type PrettyInitializeImmutableOwnerInput<
    TAccountAccount extends string = string,
> = Prettify<InitializeImmutableOwnerInput<TAccountAccount>>;

/** Flattened `ParsedInitializeImmutableOwnerInstruction`. */
export type PrettyParsedInitializeImmutableOwnerInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeImmutableOwnerInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeImmutableOwnerInstructionData = Prettify<InitializeImmutableOwnerInstructionData>;
export type PrettyInitializeImmutableOwnerInstructionDataArgs = Prettify<InitializeImmutableOwnerInstructionDataArgs>;

// --- InitializeInterestBearingMint ---

/** Flattened `InitializeInterestBearingMintInstruction`. */
export type PrettyInitializeInterestBearingMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeInterestBearingMintInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializeInterestBearingMintInput`. */
export type PrettyInitializeInterestBearingMintInput<
    TAccountMint extends string = string,
> = Prettify<InitializeInterestBearingMintInput<TAccountMint>>;

/** Flattened `ParsedInitializeInterestBearingMintInstruction`. */
export type PrettyParsedInitializeInterestBearingMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeInterestBearingMintInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeInterestBearingMintInstructionData = Prettify<InitializeInterestBearingMintInstructionData>;
export type PrettyInitializeInterestBearingMintInstructionDataArgs = Prettify<InitializeInterestBearingMintInstructionDataArgs>;

// --- InitializeMetadataPointer ---

/** Flattened `InitializeMetadataPointerInstruction`. */
export type PrettyInitializeMetadataPointerInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeMetadataPointerInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializeMetadataPointerInput`. */
export type PrettyInitializeMetadataPointerInput<
    TAccountMint extends string = string,
> = Prettify<InitializeMetadataPointerInput<TAccountMint>>;

/** Flattened `ParsedInitializeMetadataPointerInstruction`. */
export type PrettyParsedInitializeMetadataPointerInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeMetadataPointerInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeMetadataPointerInstructionData = Prettify<InitializeMetadataPointerInstructionData>;
export type PrettyInitializeMetadataPointerInstructionDataArgs = Prettify<InitializeMetadataPointerInstructionDataArgs>;

// --- InitializeMint ---

/** Flattened `InitializeMintInstruction`. */
export type PrettyInitializeMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountRent extends string | AccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeMintInstruction<TProgram, TAccountMint, TAccountRent, TRemainingAccounts>>;

/** Flattened `InitializeMintInput`. */
export type PrettyInitializeMintInput<
    TAccountMint extends string = string, TAccountRent extends string = string,
> = Prettify<InitializeMintInput<TAccountMint>>;

/** Flattened `ParsedInitializeMintInstruction`. */
export type PrettyParsedInitializeMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeMintInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeMintInstructionData = Prettify<InitializeMintInstructionData>;
export type PrettyInitializeMintInstructionDataArgs = Prettify<InitializeMintInstructionDataArgs>;

// --- InitializeMint2 ---

/** Flattened `InitializeMint2Instruction`. */
export type PrettyInitializeMint2Instruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeMint2Instruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializeMint2Input`. */
export type PrettyInitializeMint2Input<
    TAccountMint extends string = string,
> = Prettify<InitializeMint2Input<TAccountMint>>;

/** Flattened `ParsedInitializeMint2Instruction`. */
export type PrettyParsedInitializeMint2Instruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeMint2Instruction<TProgram, TAccountMetas>>;

export type PrettyInitializeMint2InstructionData = Prettify<InitializeMint2InstructionData>;
export type PrettyInitializeMint2InstructionDataArgs = Prettify<InitializeMint2InstructionDataArgs>;

// --- InitializeMintCloseAuthority ---

/** Flattened `InitializeMintCloseAuthorityInstruction`. */
export type PrettyInitializeMintCloseAuthorityInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeMintCloseAuthorityInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializeMintCloseAuthorityInput`. */
export type PrettyInitializeMintCloseAuthorityInput<
    TAccountMint extends string = string,
> = Prettify<InitializeMintCloseAuthorityInput<TAccountMint>>;

/** Flattened `ParsedInitializeMintCloseAuthorityInstruction`. */
export type PrettyParsedInitializeMintCloseAuthorityInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeMintCloseAuthorityInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeMintCloseAuthorityInstructionData = Prettify<InitializeMintCloseAuthorityInstructionData>;
export type PrettyInitializeMintCloseAuthorityInstructionDataArgs = Prettify<InitializeMintCloseAuthorityInstructionDataArgs>;

// --- InitializeMultisig ---

/** Flattened `InitializeMultisigInstruction`. */
export type PrettyInitializeMultisigInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMultisig extends string | AccountMeta<string> = string,
    TAccountRent extends string | AccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeMultisigInstruction<TProgram, TAccountMultisig, TAccountRent, TRemainingAccounts>>;

/** Flattened `InitializeMultisigInput`. */
export type PrettyInitializeMultisigInput<
    TAccountMultisig extends string = string, TAccountRent extends string = string,
> = Prettify<InitializeMultisigInput<TAccountMultisig>>;

/** Flattened `ParsedInitializeMultisigInstruction`. */
export type PrettyParsedInitializeMultisigInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeMultisigInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeMultisigInstructionData = Prettify<InitializeMultisigInstructionData>;
export type PrettyInitializeMultisigInstructionDataArgs = Prettify<InitializeMultisigInstructionDataArgs>;

// --- InitializeMultisig2 ---

/** Flattened `InitializeMultisig2Instruction`. */
export type PrettyInitializeMultisig2Instruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMultisig extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeMultisig2Instruction<TProgram, TAccountMultisig, TRemainingAccounts>>;

/** Flattened `InitializeMultisig2Input`. */
export type PrettyInitializeMultisig2Input<
    TAccountMultisig extends string = string,
> = Prettify<InitializeMultisig2Input<TAccountMultisig>>;

/** Flattened `ParsedInitializeMultisig2Instruction`. */
export type PrettyParsedInitializeMultisig2Instruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeMultisig2Instruction<TProgram, TAccountMetas>>;

export type PrettyInitializeMultisig2InstructionData = Prettify<InitializeMultisig2InstructionData>;
export type PrettyInitializeMultisig2InstructionDataArgs = Prettify<InitializeMultisig2InstructionDataArgs>;

// --- InitializeNonTransferableMint ---

/** Flattened `InitializeNonTransferableMintInstruction`. */
export type PrettyInitializeNonTransferableMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeNonTransferableMintInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializeNonTransferableMintInput`. */
export type PrettyInitializeNonTransferableMintInput<
    TAccountMint extends string = string,
> = Prettify<InitializeNonTransferableMintInput<TAccountMint>>;

/** Flattened `ParsedInitializeNonTransferableMintInstruction`. */
export type PrettyParsedInitializeNonTransferableMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeNonTransferableMintInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeNonTransferableMintInstructionData = Prettify<InitializeNonTransferableMintInstructionData>;
export type PrettyInitializeNonTransferableMintInstructionDataArgs = Prettify<InitializeNonTransferableMintInstructionDataArgs>;

// --- InitializePausableConfig ---

/** Flattened `InitializePausableConfigInstruction`. */
export type PrettyInitializePausableConfigInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializePausableConfigInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializePausableConfigInput`. */
export type PrettyInitializePausableConfigInput<
    TAccountMint extends string = string,
> = Prettify<InitializePausableConfigInput<TAccountMint>>;

/** Flattened `ParsedInitializePausableConfigInstruction`. */
export type PrettyParsedInitializePausableConfigInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializePausableConfigInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializePausableConfigInstructionData = Prettify<InitializePausableConfigInstructionData>;
export type PrettyInitializePausableConfigInstructionDataArgs = Prettify<InitializePausableConfigInstructionDataArgs>;

// --- InitializePermanentDelegate ---

/** Flattened `InitializePermanentDelegateInstruction`. */
export type PrettyInitializePermanentDelegateInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializePermanentDelegateInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializePermanentDelegateInput`. */
export type PrettyInitializePermanentDelegateInput<
    TAccountMint extends string = string,
> = Prettify<InitializePermanentDelegateInput<TAccountMint>>;

/** Flattened `ParsedInitializePermanentDelegateInstruction`. */
export type PrettyParsedInitializePermanentDelegateInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializePermanentDelegateInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializePermanentDelegateInstructionData = Prettify<InitializePermanentDelegateInstructionData>;
export type PrettyInitializePermanentDelegateInstructionDataArgs = Prettify<InitializePermanentDelegateInstructionDataArgs>;

// --- InitializePermissionedBurn ---

/** Flattened `InitializePermissionedBurnInstruction`. */
export type PrettyInitializePermissionedBurnInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializePermissionedBurnInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializePermissionedBurnInput`. */
export type PrettyInitializePermissionedBurnInput<
    TAccountMint extends string = string,
> = Prettify<InitializePermissionedBurnInput<TAccountMint>>;

/** Flattened `ParsedInitializePermissionedBurnInstruction`. */
export type PrettyParsedInitializePermissionedBurnInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializePermissionedBurnInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializePermissionedBurnInstructionData = Prettify<InitializePermissionedBurnInstructionData>;
export type PrettyInitializePermissionedBurnInstructionDataArgs = Prettify<InitializePermissionedBurnInstructionDataArgs>;

// --- InitializeScaledUiAmountMint ---

/** Flattened `InitializeScaledUiAmountMintInstruction`. */
export type PrettyInitializeScaledUiAmountMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeScaledUiAmountMintInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializeScaledUiAmountMintInput`. */
export type PrettyInitializeScaledUiAmountMintInput<
    TAccountMint extends string = string,
> = Prettify<InitializeScaledUiAmountMintInput<TAccountMint>>;

/** Flattened `ParsedInitializeScaledUiAmountMintInstruction`. */
export type PrettyParsedInitializeScaledUiAmountMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeScaledUiAmountMintInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeScaledUiAmountMintInstructionData = Prettify<InitializeScaledUiAmountMintInstructionData>;
export type PrettyInitializeScaledUiAmountMintInstructionDataArgs = Prettify<InitializeScaledUiAmountMintInstructionDataArgs>;

// --- InitializeTokenGroup ---

/** Flattened `InitializeTokenGroupInstruction`. */
export type PrettyInitializeTokenGroupInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountGroup extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountMintAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeTokenGroupInstruction<TProgram, TAccountGroup, TAccountMint, TAccountMintAuthority, TRemainingAccounts>>;

/** Flattened `InitializeTokenGroupInput`. */
export type PrettyInitializeTokenGroupInput<
    TAccountGroup extends string = string,
    TAccountMint extends string = string,
    TAccountMintAuthority extends string = string,
> = Prettify<InitializeTokenGroupInput<TAccountGroup, TAccountMint, TAccountMintAuthority>>;

/** Flattened `ParsedInitializeTokenGroupInstruction`. */
export type PrettyParsedInitializeTokenGroupInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeTokenGroupInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeTokenGroupInstructionData = Prettify<InitializeTokenGroupInstructionData>;
export type PrettyInitializeTokenGroupInstructionDataArgs = Prettify<InitializeTokenGroupInstructionDataArgs>;

// --- InitializeTokenGroupMember ---

/** Flattened `InitializeTokenGroupMemberInstruction`. */
export type PrettyInitializeTokenGroupMemberInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMember extends string | AccountMeta<string> = string,
    TAccountMemberMint extends string | AccountMeta<string> = string,
    TAccountMemberMintAuthority extends string | AccountMeta<string> = string,
    TAccountGroup extends string | AccountMeta<string> = string,
    TAccountGroupUpdateAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeTokenGroupMemberInstruction<TProgram, TAccountMember, TAccountMemberMint, TAccountMemberMintAuthority, TAccountGroup, TAccountGroupUpdateAuthority, TRemainingAccounts>>;

/** Flattened `InitializeTokenGroupMemberInput`. */
export type PrettyInitializeTokenGroupMemberInput<
    TAccountMember extends string = string,
    TAccountMemberMint extends string = string,
    TAccountMemberMintAuthority extends string = string,
    TAccountGroup extends string = string,
    TAccountGroupUpdateAuthority extends string = string,
> = Prettify<InitializeTokenGroupMemberInput<TAccountMember, TAccountMemberMint, TAccountMemberMintAuthority, TAccountGroup, TAccountGroupUpdateAuthority>>;

/** Flattened `ParsedInitializeTokenGroupMemberInstruction`. */
export type PrettyParsedInitializeTokenGroupMemberInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeTokenGroupMemberInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeTokenGroupMemberInstructionData = Prettify<InitializeTokenGroupMemberInstructionData>;
export type PrettyInitializeTokenGroupMemberInstructionDataArgs = Prettify<InitializeTokenGroupMemberInstructionDataArgs>;

// --- InitializeTokenMetadata ---

/** Flattened `InitializeTokenMetadataInstruction`. */
export type PrettyInitializeTokenMetadataInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetadata extends string | AccountMeta<string> = string,
    TAccountUpdateAuthority extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountMintAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeTokenMetadataInstruction<TProgram, TAccountMetadata, TAccountUpdateAuthority, TAccountMint, TAccountMintAuthority, TRemainingAccounts>>;

/** Flattened `InitializeTokenMetadataInput`. */
export type PrettyInitializeTokenMetadataInput<
    TAccountMetadata extends string = string,
    TAccountUpdateAuthority extends string = string,
    TAccountMint extends string = string,
    TAccountMintAuthority extends string = string,
> = Prettify<InitializeTokenMetadataInput<TAccountMetadata, TAccountUpdateAuthority, TAccountMint, TAccountMintAuthority>>;

/** Flattened `ParsedInitializeTokenMetadataInstruction`. */
export type PrettyParsedInitializeTokenMetadataInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeTokenMetadataInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeTokenMetadataInstructionData = Prettify<InitializeTokenMetadataInstructionData>;
export type PrettyInitializeTokenMetadataInstructionDataArgs = Prettify<InitializeTokenMetadataInstructionDataArgs>;

// --- InitializeTransferFeeConfig ---

/** Flattened `InitializeTransferFeeConfigInstruction`. */
export type PrettyInitializeTransferFeeConfigInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeTransferFeeConfigInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializeTransferFeeConfigInput`. */
export type PrettyInitializeTransferFeeConfigInput<
    TAccountMint extends string = string,
> = Prettify<InitializeTransferFeeConfigInput<TAccountMint>>;

/** Flattened `ParsedInitializeTransferFeeConfigInstruction`. */
export type PrettyParsedInitializeTransferFeeConfigInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeTransferFeeConfigInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeTransferFeeConfigInstructionData = Prettify<InitializeTransferFeeConfigInstructionData>;
export type PrettyInitializeTransferFeeConfigInstructionDataArgs = Prettify<InitializeTransferFeeConfigInstructionDataArgs>;

// --- InitializeTransferHook ---

/** Flattened `InitializeTransferHookInstruction`. */
export type PrettyInitializeTransferHookInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<InitializeTransferHookInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `InitializeTransferHookInput`. */
export type PrettyInitializeTransferHookInput<
    TAccountMint extends string = string,
> = Prettify<InitializeTransferHookInput<TAccountMint>>;

/** Flattened `ParsedInitializeTransferHookInstruction`. */
export type PrettyParsedInitializeTransferHookInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedInitializeTransferHookInstruction<TProgram, TAccountMetas>>;

export type PrettyInitializeTransferHookInstructionData = Prettify<InitializeTransferHookInstructionData>;
export type PrettyInitializeTransferHookInstructionDataArgs = Prettify<InitializeTransferHookInstructionDataArgs>;

// --- MintTo ---

/** Flattened `MintToInstruction`. */
export type PrettyMintToInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
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
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedMintToInstruction<TProgram, TAccountMetas>>;

export type PrettyMintToInstructionData = Prettify<MintToInstructionData>;
export type PrettyMintToInstructionDataArgs = Prettify<MintToInstructionDataArgs>;

// --- MintToChecked ---

/** Flattened `MintToCheckedInstruction`. */
export type PrettyMintToCheckedInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
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
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedMintToCheckedInstruction<TProgram, TAccountMetas>>;

export type PrettyMintToCheckedInstructionData = Prettify<MintToCheckedInstructionData>;
export type PrettyMintToCheckedInstructionDataArgs = Prettify<MintToCheckedInstructionDataArgs>;

// --- Pause ---

/** Flattened `PauseInstruction`. */
export type PrettyPauseInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<PauseInstruction<TProgram, TAccountMint, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `PauseInput`. */
export type PrettyPauseInput<
    TAccountMint extends string = string, TAccountAuthority extends string = string,
> = Prettify<PauseInput<TAccountMint>>;

/** Flattened `ParsedPauseInstruction`. */
export type PrettyParsedPauseInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedPauseInstruction<TProgram, TAccountMetas>>;

export type PrettyPauseInstructionData = Prettify<PauseInstructionData>;
export type PrettyPauseInstructionDataArgs = Prettify<PauseInstructionDataArgs>;

// --- PermissionedBurn ---

/** Flattened `PermissionedBurnInstruction`. */
export type PrettyPermissionedBurnInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountPermissionedBurnAuthority extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<PermissionedBurnInstruction<TProgram, TAccountAccount, TAccountMint, TAccountPermissionedBurnAuthority, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `PermissionedBurnInput`. */
export type PrettyPermissionedBurnInput<
    TAccountAccount extends string = string,
    TAccountMint extends string = string,
    TAccountPermissionedBurnAuthority extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<PermissionedBurnInput<TAccountAccount, TAccountMint, TAccountPermissionedBurnAuthority, TAccountAuthority>>;

/** Flattened `ParsedPermissionedBurnInstruction`. */
export type PrettyParsedPermissionedBurnInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedPermissionedBurnInstruction<TProgram, TAccountMetas>>;

export type PrettyPermissionedBurnInstructionData = Prettify<PermissionedBurnInstructionData>;
export type PrettyPermissionedBurnInstructionDataArgs = Prettify<PermissionedBurnInstructionDataArgs>;

// --- PermissionedBurnChecked ---

/** Flattened `PermissionedBurnCheckedInstruction`. */
export type PrettyPermissionedBurnCheckedInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountPermissionedBurnAuthority extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<PermissionedBurnCheckedInstruction<TProgram, TAccountAccount, TAccountMint, TAccountPermissionedBurnAuthority, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `PermissionedBurnCheckedInput`. */
export type PrettyPermissionedBurnCheckedInput<
    TAccountAccount extends string = string,
    TAccountMint extends string = string,
    TAccountPermissionedBurnAuthority extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<PermissionedBurnCheckedInput<TAccountAccount, TAccountMint, TAccountPermissionedBurnAuthority, TAccountAuthority>>;

/** Flattened `ParsedPermissionedBurnCheckedInstruction`. */
export type PrettyParsedPermissionedBurnCheckedInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedPermissionedBurnCheckedInstruction<TProgram, TAccountMetas>>;

export type PrettyPermissionedBurnCheckedInstructionData = Prettify<PermissionedBurnCheckedInstructionData>;
export type PrettyPermissionedBurnCheckedInstructionDataArgs = Prettify<PermissionedBurnCheckedInstructionDataArgs>;

// --- Reallocate ---

/** Flattened `ReallocateInstruction`. */
export type PrettyReallocateInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountToken extends string | AccountMeta<string> = string,
    TAccountPayer extends string | AccountMeta<string> = string,
    TAccountSystemProgram extends string | AccountMeta<string> = '11111111111111111111111111111111',
    TAccountOwner extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<ReallocateInstruction<TProgram, TAccountToken, TAccountPayer, TAccountSystemProgram, TAccountOwner, TRemainingAccounts>>;

/** Flattened `ReallocateInput`. */
export type PrettyReallocateInput<
    TAccountToken extends string = string,
    TAccountPayer extends string = string,
    TAccountSystemProgram extends string = string,
    TAccountOwner extends string = string,
> = Prettify<ReallocateInput<TAccountToken, TAccountPayer, TAccountSystemProgram, TAccountOwner>>;

/** Flattened `ParsedReallocateInstruction`. */
export type PrettyParsedReallocateInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedReallocateInstruction<TProgram, TAccountMetas>>;

export type PrettyReallocateInstructionData = Prettify<ReallocateInstructionData>;
export type PrettyReallocateInstructionDataArgs = Prettify<ReallocateInstructionDataArgs>;

// --- RecoverNestedAssociatedToken ---

/** Flattened `RecoverNestedAssociatedTokenInstruction`. */
export type PrettyRecoverNestedAssociatedTokenInstruction<
    TProgram extends string = typeof ASSOCIATED_TOKEN_PROGRAM_ADDRESS,
    TAccountNestedAssociatedAccountAddress extends string | AccountMeta<string> = string,
    TAccountNestedTokenMintAddress extends string | AccountMeta<string> = string,
    TAccountDestinationAssociatedAccountAddress extends string | AccountMeta<string> = string,
    TAccountOwnerAssociatedAccountAddress extends string | AccountMeta<string> = string,
    TAccountOwnerTokenMintAddress extends string | AccountMeta<string> = string,
    TAccountWalletAddress extends string | AccountMeta<string> = string,
    TAccountTokenProgram extends string | AccountMeta<string> = 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb',
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<RecoverNestedAssociatedTokenInstruction<TProgram, TAccountNestedAssociatedAccountAddress, TAccountNestedTokenMintAddress, TAccountDestinationAssociatedAccountAddress, TAccountOwnerAssociatedAccountAddress, TAccountOwnerTokenMintAddress, TAccountWalletAddress, TAccountTokenProgram, TRemainingAccounts>>;

/** Flattened `RecoverNestedAssociatedTokenInput`. */
export type PrettyRecoverNestedAssociatedTokenInput<
    TAccountNestedAssociatedAccountAddress extends string = string,
    TAccountNestedTokenMintAddress extends string = string,
    TAccountDestinationAssociatedAccountAddress extends string = string,
    TAccountOwnerAssociatedAccountAddress extends string = string,
    TAccountOwnerTokenMintAddress extends string = string,
    TAccountWalletAddress extends string = string,
    TAccountTokenProgram extends string = string,
> = Prettify<RecoverNestedAssociatedTokenInput<TAccountNestedAssociatedAccountAddress, TAccountNestedTokenMintAddress, TAccountDestinationAssociatedAccountAddress, TAccountOwnerAssociatedAccountAddress, TAccountOwnerTokenMintAddress, TAccountWalletAddress, TAccountTokenProgram>>;

/** Flattened `ParsedRecoverNestedAssociatedTokenInstruction`. */
export type PrettyParsedRecoverNestedAssociatedTokenInstruction<
    TProgram extends string = typeof ASSOCIATED_TOKEN_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedRecoverNestedAssociatedTokenInstruction<TProgram, TAccountMetas>>;

export type PrettyRecoverNestedAssociatedTokenInstructionData = Prettify<RecoverNestedAssociatedTokenInstructionData>;
export type PrettyRecoverNestedAssociatedTokenInstructionDataArgs = Prettify<RecoverNestedAssociatedTokenInstructionDataArgs>;

// --- RemoveTokenMetadataKey ---

/** Flattened `RemoveTokenMetadataKeyInstruction`. */
export type PrettyRemoveTokenMetadataKeyInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetadata extends string | AccountMeta<string> = string,
    TAccountUpdateAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<RemoveTokenMetadataKeyInstruction<TProgram, TAccountMetadata, TAccountUpdateAuthority, TRemainingAccounts>>;

/** Flattened `RemoveTokenMetadataKeyInput`. */
export type PrettyRemoveTokenMetadataKeyInput<
    TAccountMetadata extends string = string,
    TAccountUpdateAuthority extends string = string,
> = Prettify<RemoveTokenMetadataKeyInput<TAccountMetadata, TAccountUpdateAuthority>>;

/** Flattened `ParsedRemoveTokenMetadataKeyInstruction`. */
export type PrettyParsedRemoveTokenMetadataKeyInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedRemoveTokenMetadataKeyInstruction<TProgram, TAccountMetas>>;

export type PrettyRemoveTokenMetadataKeyInstructionData = Prettify<RemoveTokenMetadataKeyInstructionData>;
export type PrettyRemoveTokenMetadataKeyInstructionDataArgs = Prettify<RemoveTokenMetadataKeyInstructionDataArgs>;

// --- Resume ---

/** Flattened `ResumeInstruction`. */
export type PrettyResumeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<ResumeInstruction<TProgram, TAccountMint, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `ResumeInput`. */
export type PrettyResumeInput<
    TAccountMint extends string = string, TAccountAuthority extends string = string,
> = Prettify<ResumeInput<TAccountMint>>;

/** Flattened `ParsedResumeInstruction`. */
export type PrettyParsedResumeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedResumeInstruction<TProgram, TAccountMetas>>;

export type PrettyResumeInstructionData = Prettify<ResumeInstructionData>;
export type PrettyResumeInstructionDataArgs = Prettify<ResumeInstructionDataArgs>;

// --- Revoke ---

/** Flattened `RevokeInstruction`. */
export type PrettyRevokeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountSource extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<RevokeInstruction<TProgram, TAccountSource, TAccountOwner, TRemainingAccounts>>;

/** Flattened `RevokeInput`. */
export type PrettyRevokeInput<
    TAccountSource extends string = string, TAccountOwner extends string = string,
> = Prettify<RevokeInput<TAccountSource>>;

/** Flattened `ParsedRevokeInstruction`. */
export type PrettyParsedRevokeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedRevokeInstruction<TProgram, TAccountMetas>>;

export type PrettyRevokeInstructionData = Prettify<RevokeInstructionData>;
export type PrettyRevokeInstructionDataArgs = Prettify<RevokeInstructionDataArgs>;

// --- SetAuthority ---

/** Flattened `SetAuthorityInstruction`. */
export type PrettySetAuthorityInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountOwned extends string | AccountMeta<string> = string,
    TAccountOwner extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<SetAuthorityInstruction<TProgram, TAccountOwned, TAccountOwner, TRemainingAccounts>>;

/** Flattened `SetAuthorityInput`. */
export type PrettySetAuthorityInput<
    TAccountOwned extends string = string, TAccountOwner extends string = string,
> = Prettify<SetAuthorityInput<TAccountOwned>>;

/** Flattened `ParsedSetAuthorityInstruction`. */
export type PrettyParsedSetAuthorityInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedSetAuthorityInstruction<TProgram, TAccountMetas>>;

export type PrettySetAuthorityInstructionData = Prettify<SetAuthorityInstructionData>;
export type PrettySetAuthorityInstructionDataArgs = Prettify<SetAuthorityInstructionDataArgs>;

// --- SetTransferFee ---

/** Flattened `SetTransferFeeInstruction`. */
export type PrettySetTransferFeeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountTransferFeeConfigAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<SetTransferFeeInstruction<TProgram, TAccountMint, TAccountTransferFeeConfigAuthority, TRemainingAccounts>>;

/** Flattened `SetTransferFeeInput`. */
export type PrettySetTransferFeeInput<
    TAccountMint extends string = string,
    TAccountTransferFeeConfigAuthority extends string = string,
> = Prettify<SetTransferFeeInput<TAccountMint, TAccountTransferFeeConfigAuthority>>;

/** Flattened `ParsedSetTransferFeeInstruction`. */
export type PrettyParsedSetTransferFeeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedSetTransferFeeInstruction<TProgram, TAccountMetas>>;

export type PrettySetTransferFeeInstructionData = Prettify<SetTransferFeeInstructionData>;
export type PrettySetTransferFeeInstructionDataArgs = Prettify<SetTransferFeeInstructionDataArgs>;

// --- SyncNative ---

/** Flattened `SyncNativeInstruction`. */
export type PrettySyncNativeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountAccount extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<SyncNativeInstruction<TProgram, TAccountAccount, TRemainingAccounts>>;

/** Flattened `SyncNativeInput`. */
export type PrettySyncNativeInput<
    TAccountAccount extends string = string,
> = Prettify<SyncNativeInput<TAccountAccount>>;

/** Flattened `ParsedSyncNativeInstruction`. */
export type PrettyParsedSyncNativeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedSyncNativeInstruction<TProgram, TAccountMetas>>;

export type PrettySyncNativeInstructionData = Prettify<SyncNativeInstructionData>;
export type PrettySyncNativeInstructionDataArgs = Prettify<SyncNativeInstructionDataArgs>;

// --- ThawAccount ---

/** Flattened `ThawAccountInstruction`. */
export type PrettyThawAccountInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
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
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedThawAccountInstruction<TProgram, TAccountMetas>>;

export type PrettyThawAccountInstructionData = Prettify<ThawAccountInstructionData>;
export type PrettyThawAccountInstructionDataArgs = Prettify<ThawAccountInstructionDataArgs>;

// --- Transfer ---

/** Flattened `TransferInstruction`. */
export type PrettyTransferInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
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
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedTransferInstruction<TProgram, TAccountMetas>>;

export type PrettyTransferInstructionData = Prettify<TransferInstructionData>;
export type PrettyTransferInstructionDataArgs = Prettify<TransferInstructionDataArgs>;

// --- TransferChecked ---

/** Flattened `TransferCheckedInstruction`. */
export type PrettyTransferCheckedInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
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
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedTransferCheckedInstruction<TProgram, TAccountMetas>>;

export type PrettyTransferCheckedInstructionData = Prettify<TransferCheckedInstructionData>;
export type PrettyTransferCheckedInstructionDataArgs = Prettify<TransferCheckedInstructionDataArgs>;

// --- TransferCheckedWithFee ---

/** Flattened `TransferCheckedWithFeeInstruction`. */
export type PrettyTransferCheckedWithFeeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountSource extends string | AccountMeta<string> = string,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountDestination extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<TransferCheckedWithFeeInstruction<TProgram, TAccountSource, TAccountMint, TAccountDestination, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `TransferCheckedWithFeeInput`. */
export type PrettyTransferCheckedWithFeeInput<
    TAccountSource extends string = string,
    TAccountMint extends string = string,
    TAccountDestination extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<TransferCheckedWithFeeInput<TAccountSource, TAccountMint, TAccountDestination, TAccountAuthority>>;

/** Flattened `ParsedTransferCheckedWithFeeInstruction`. */
export type PrettyParsedTransferCheckedWithFeeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedTransferCheckedWithFeeInstruction<TProgram, TAccountMetas>>;

export type PrettyTransferCheckedWithFeeInstructionData = Prettify<TransferCheckedWithFeeInstructionData>;
export type PrettyTransferCheckedWithFeeInstructionDataArgs = Prettify<TransferCheckedWithFeeInstructionDataArgs>;

// --- UiAmountToAmount ---

/** Flattened `UiAmountToAmountInstruction`. */
export type PrettyUiAmountToAmountInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<UiAmountToAmountInstruction<TProgram, TAccountMint, TRemainingAccounts>>;

/** Flattened `UiAmountToAmountInput`. */
export type PrettyUiAmountToAmountInput<
    TAccountMint extends string = string,
> = Prettify<UiAmountToAmountInput<TAccountMint>>;

/** Flattened `ParsedUiAmountToAmountInstruction`. */
export type PrettyParsedUiAmountToAmountInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedUiAmountToAmountInstruction<TProgram, TAccountMetas>>;

export type PrettyUiAmountToAmountInstructionData = Prettify<UiAmountToAmountInstructionData>;
export type PrettyUiAmountToAmountInstructionDataArgs = Prettify<UiAmountToAmountInstructionDataArgs>;

// --- UnwrapLamports ---

/** Flattened `UnwrapLamportsInstruction`. */
export type PrettyUnwrapLamportsInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountSource extends string | AccountMeta<string> = string,
    TAccountDestination extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<UnwrapLamportsInstruction<TProgram, TAccountSource, TAccountDestination, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `UnwrapLamportsInput`. */
export type PrettyUnwrapLamportsInput<
    TAccountSource extends string = string,
    TAccountDestination extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<UnwrapLamportsInput<TAccountSource, TAccountDestination, TAccountAuthority>>;

/** Flattened `ParsedUnwrapLamportsInstruction`. */
export type PrettyParsedUnwrapLamportsInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedUnwrapLamportsInstruction<TProgram, TAccountMetas>>;

export type PrettyUnwrapLamportsInstructionData = Prettify<UnwrapLamportsInstructionData>;
export type PrettyUnwrapLamportsInstructionDataArgs = Prettify<UnwrapLamportsInstructionDataArgs>;

// --- UpdateConfidentialTransferMint ---

/** Flattened `UpdateConfidentialTransferMintInstruction`. */
export type PrettyUpdateConfidentialTransferMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<UpdateConfidentialTransferMintInstruction<TProgram, TAccountMint, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `UpdateConfidentialTransferMintInput`. */
export type PrettyUpdateConfidentialTransferMintInput<
    TAccountMint extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<UpdateConfidentialTransferMintInput<TAccountMint, TAccountAuthority>>;

/** Flattened `ParsedUpdateConfidentialTransferMintInstruction`. */
export type PrettyParsedUpdateConfidentialTransferMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedUpdateConfidentialTransferMintInstruction<TProgram, TAccountMetas>>;

export type PrettyUpdateConfidentialTransferMintInstructionData = Prettify<UpdateConfidentialTransferMintInstructionData>;
export type PrettyUpdateConfidentialTransferMintInstructionDataArgs = Prettify<UpdateConfidentialTransferMintInstructionDataArgs>;

// --- UpdateDefaultAccountState ---

/** Flattened `UpdateDefaultAccountStateInstruction`. */
export type PrettyUpdateDefaultAccountStateInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountFreezeAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<UpdateDefaultAccountStateInstruction<TProgram, TAccountMint, TAccountFreezeAuthority, TRemainingAccounts>>;

/** Flattened `UpdateDefaultAccountStateInput`. */
export type PrettyUpdateDefaultAccountStateInput<
    TAccountMint extends string = string,
    TAccountFreezeAuthority extends string = string,
> = Prettify<UpdateDefaultAccountStateInput<TAccountMint, TAccountFreezeAuthority>>;

/** Flattened `ParsedUpdateDefaultAccountStateInstruction`. */
export type PrettyParsedUpdateDefaultAccountStateInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedUpdateDefaultAccountStateInstruction<TProgram, TAccountMetas>>;

export type PrettyUpdateDefaultAccountStateInstructionData = Prettify<UpdateDefaultAccountStateInstructionData>;
export type PrettyUpdateDefaultAccountStateInstructionDataArgs = Prettify<UpdateDefaultAccountStateInstructionDataArgs>;

// --- UpdateGroupMemberPointer ---

/** Flattened `UpdateGroupMemberPointerInstruction`. */
export type PrettyUpdateGroupMemberPointerInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountGroupMemberPointerAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<UpdateGroupMemberPointerInstruction<TProgram, TAccountMint, TAccountGroupMemberPointerAuthority, TRemainingAccounts>>;

/** Flattened `UpdateGroupMemberPointerInput`. */
export type PrettyUpdateGroupMemberPointerInput<
    TAccountMint extends string = string,
    TAccountGroupMemberPointerAuthority extends string = string,
> = Prettify<UpdateGroupMemberPointerInput<TAccountMint, TAccountGroupMemberPointerAuthority>>;

/** Flattened `ParsedUpdateGroupMemberPointerInstruction`. */
export type PrettyParsedUpdateGroupMemberPointerInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedUpdateGroupMemberPointerInstruction<TProgram, TAccountMetas>>;

export type PrettyUpdateGroupMemberPointerInstructionData = Prettify<UpdateGroupMemberPointerInstructionData>;
export type PrettyUpdateGroupMemberPointerInstructionDataArgs = Prettify<UpdateGroupMemberPointerInstructionDataArgs>;

// --- UpdateGroupPointer ---

/** Flattened `UpdateGroupPointerInstruction`. */
export type PrettyUpdateGroupPointerInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountGroupPointerAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<UpdateGroupPointerInstruction<TProgram, TAccountMint, TAccountGroupPointerAuthority, TRemainingAccounts>>;

/** Flattened `UpdateGroupPointerInput`. */
export type PrettyUpdateGroupPointerInput<
    TAccountMint extends string = string,
    TAccountGroupPointerAuthority extends string = string,
> = Prettify<UpdateGroupPointerInput<TAccountMint, TAccountGroupPointerAuthority>>;

/** Flattened `ParsedUpdateGroupPointerInstruction`. */
export type PrettyParsedUpdateGroupPointerInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedUpdateGroupPointerInstruction<TProgram, TAccountMetas>>;

export type PrettyUpdateGroupPointerInstructionData = Prettify<UpdateGroupPointerInstructionData>;
export type PrettyUpdateGroupPointerInstructionDataArgs = Prettify<UpdateGroupPointerInstructionDataArgs>;

// --- UpdateMetadataPointer ---

/** Flattened `UpdateMetadataPointerInstruction`. */
export type PrettyUpdateMetadataPointerInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountMetadataPointerAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<UpdateMetadataPointerInstruction<TProgram, TAccountMint, TAccountMetadataPointerAuthority, TRemainingAccounts>>;

/** Flattened `UpdateMetadataPointerInput`. */
export type PrettyUpdateMetadataPointerInput<
    TAccountMint extends string = string,
    TAccountMetadataPointerAuthority extends string = string,
> = Prettify<UpdateMetadataPointerInput<TAccountMint, TAccountMetadataPointerAuthority>>;

/** Flattened `ParsedUpdateMetadataPointerInstruction`. */
export type PrettyParsedUpdateMetadataPointerInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedUpdateMetadataPointerInstruction<TProgram, TAccountMetas>>;

export type PrettyUpdateMetadataPointerInstructionData = Prettify<UpdateMetadataPointerInstructionData>;
export type PrettyUpdateMetadataPointerInstructionDataArgs = Prettify<UpdateMetadataPointerInstructionDataArgs>;

// --- UpdateMultiplierScaledUiMint ---

/** Flattened `UpdateMultiplierScaledUiMintInstruction`. */
export type PrettyUpdateMultiplierScaledUiMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<UpdateMultiplierScaledUiMintInstruction<TProgram, TAccountMint, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `UpdateMultiplierScaledUiMintInput`. */
export type PrettyUpdateMultiplierScaledUiMintInput<
    TAccountMint extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<UpdateMultiplierScaledUiMintInput<TAccountMint, TAccountAuthority>>;

/** Flattened `ParsedUpdateMultiplierScaledUiMintInstruction`. */
export type PrettyParsedUpdateMultiplierScaledUiMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedUpdateMultiplierScaledUiMintInstruction<TProgram, TAccountMetas>>;

export type PrettyUpdateMultiplierScaledUiMintInstructionData = Prettify<UpdateMultiplierScaledUiMintInstructionData>;
export type PrettyUpdateMultiplierScaledUiMintInstructionDataArgs = Prettify<UpdateMultiplierScaledUiMintInstructionDataArgs>;

// --- UpdateRateInterestBearingMint ---

/** Flattened `UpdateRateInterestBearingMintInstruction`. */
export type PrettyUpdateRateInterestBearingMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountRateAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<UpdateRateInterestBearingMintInstruction<TProgram, TAccountMint, TAccountRateAuthority, TRemainingAccounts>>;

/** Flattened `UpdateRateInterestBearingMintInput`. */
export type PrettyUpdateRateInterestBearingMintInput<
    TAccountMint extends string = string,
    TAccountRateAuthority extends string = string,
> = Prettify<UpdateRateInterestBearingMintInput<TAccountMint, TAccountRateAuthority>>;

/** Flattened `ParsedUpdateRateInterestBearingMintInstruction`. */
export type PrettyParsedUpdateRateInterestBearingMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedUpdateRateInterestBearingMintInstruction<TProgram, TAccountMetas>>;

export type PrettyUpdateRateInterestBearingMintInstructionData = Prettify<UpdateRateInterestBearingMintInstructionData>;
export type PrettyUpdateRateInterestBearingMintInstructionDataArgs = Prettify<UpdateRateInterestBearingMintInstructionDataArgs>;

// --- UpdateTokenGroupMaxSize ---

/** Flattened `UpdateTokenGroupMaxSizeInstruction`. */
export type PrettyUpdateTokenGroupMaxSizeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountGroup extends string | AccountMeta<string> = string,
    TAccountUpdateAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<UpdateTokenGroupMaxSizeInstruction<TProgram, TAccountGroup, TAccountUpdateAuthority, TRemainingAccounts>>;

/** Flattened `UpdateTokenGroupMaxSizeInput`. */
export type PrettyUpdateTokenGroupMaxSizeInput<
    TAccountGroup extends string = string,
    TAccountUpdateAuthority extends string = string,
> = Prettify<UpdateTokenGroupMaxSizeInput<TAccountGroup, TAccountUpdateAuthority>>;

/** Flattened `ParsedUpdateTokenGroupMaxSizeInstruction`. */
export type PrettyParsedUpdateTokenGroupMaxSizeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedUpdateTokenGroupMaxSizeInstruction<TProgram, TAccountMetas>>;

export type PrettyUpdateTokenGroupMaxSizeInstructionData = Prettify<UpdateTokenGroupMaxSizeInstructionData>;
export type PrettyUpdateTokenGroupMaxSizeInstructionDataArgs = Prettify<UpdateTokenGroupMaxSizeInstructionDataArgs>;

// --- UpdateTokenGroupUpdateAuthority ---

/** Flattened `UpdateTokenGroupUpdateAuthorityInstruction`. */
export type PrettyUpdateTokenGroupUpdateAuthorityInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountGroup extends string | AccountMeta<string> = string,
    TAccountUpdateAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<UpdateTokenGroupUpdateAuthorityInstruction<TProgram, TAccountGroup, TAccountUpdateAuthority, TRemainingAccounts>>;

/** Flattened `UpdateTokenGroupUpdateAuthorityInput`. */
export type PrettyUpdateTokenGroupUpdateAuthorityInput<
    TAccountGroup extends string = string,
    TAccountUpdateAuthority extends string = string,
> = Prettify<UpdateTokenGroupUpdateAuthorityInput<TAccountGroup, TAccountUpdateAuthority>>;

/** Flattened `ParsedUpdateTokenGroupUpdateAuthorityInstruction`. */
export type PrettyParsedUpdateTokenGroupUpdateAuthorityInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedUpdateTokenGroupUpdateAuthorityInstruction<TProgram, TAccountMetas>>;

export type PrettyUpdateTokenGroupUpdateAuthorityInstructionData = Prettify<UpdateTokenGroupUpdateAuthorityInstructionData>;
export type PrettyUpdateTokenGroupUpdateAuthorityInstructionDataArgs = Prettify<UpdateTokenGroupUpdateAuthorityInstructionDataArgs>;

// --- UpdateTokenMetadataField ---

/** Flattened `UpdateTokenMetadataFieldInstruction`. */
export type PrettyUpdateTokenMetadataFieldInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetadata extends string | AccountMeta<string> = string,
    TAccountUpdateAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<UpdateTokenMetadataFieldInstruction<TProgram, TAccountMetadata, TAccountUpdateAuthority, TRemainingAccounts>>;

/** Flattened `UpdateTokenMetadataFieldInput`. */
export type PrettyUpdateTokenMetadataFieldInput<
    TAccountMetadata extends string = string,
    TAccountUpdateAuthority extends string = string,
> = Prettify<UpdateTokenMetadataFieldInput<TAccountMetadata, TAccountUpdateAuthority>>;

/** Flattened `ParsedUpdateTokenMetadataFieldInstruction`. */
export type PrettyParsedUpdateTokenMetadataFieldInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedUpdateTokenMetadataFieldInstruction<TProgram, TAccountMetas>>;

export type PrettyUpdateTokenMetadataFieldInstructionData = Prettify<UpdateTokenMetadataFieldInstructionData>;
export type PrettyUpdateTokenMetadataFieldInstructionDataArgs = Prettify<UpdateTokenMetadataFieldInstructionDataArgs>;

// --- UpdateTokenMetadataUpdateAuthority ---

/** Flattened `UpdateTokenMetadataUpdateAuthorityInstruction`. */
export type PrettyUpdateTokenMetadataUpdateAuthorityInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetadata extends string | AccountMeta<string> = string,
    TAccountUpdateAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<UpdateTokenMetadataUpdateAuthorityInstruction<TProgram, TAccountMetadata, TAccountUpdateAuthority, TRemainingAccounts>>;

/** Flattened `UpdateTokenMetadataUpdateAuthorityInput`. */
export type PrettyUpdateTokenMetadataUpdateAuthorityInput<
    TAccountMetadata extends string = string,
    TAccountUpdateAuthority extends string = string,
> = Prettify<UpdateTokenMetadataUpdateAuthorityInput<TAccountMetadata, TAccountUpdateAuthority>>;

/** Flattened `ParsedUpdateTokenMetadataUpdateAuthorityInstruction`. */
export type PrettyParsedUpdateTokenMetadataUpdateAuthorityInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedUpdateTokenMetadataUpdateAuthorityInstruction<TProgram, TAccountMetas>>;

export type PrettyUpdateTokenMetadataUpdateAuthorityInstructionData = Prettify<UpdateTokenMetadataUpdateAuthorityInstructionData>;
export type PrettyUpdateTokenMetadataUpdateAuthorityInstructionDataArgs = Prettify<UpdateTokenMetadataUpdateAuthorityInstructionDataArgs>;

// --- UpdateTransferHook ---

/** Flattened `UpdateTransferHookInstruction`. */
export type PrettyUpdateTransferHookInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<UpdateTransferHookInstruction<TProgram, TAccountMint, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `UpdateTransferHookInput`. */
export type PrettyUpdateTransferHookInput<
    TAccountMint extends string = string, TAccountAuthority extends string = string,
> = Prettify<UpdateTransferHookInput<TAccountMint>>;

/** Flattened `ParsedUpdateTransferHookInstruction`. */
export type PrettyParsedUpdateTransferHookInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedUpdateTransferHookInstruction<TProgram, TAccountMetas>>;

export type PrettyUpdateTransferHookInstructionData = Prettify<UpdateTransferHookInstructionData>;
export type PrettyUpdateTransferHookInstructionDataArgs = Prettify<UpdateTransferHookInstructionDataArgs>;

// --- WithdrawExcessLamports ---

/** Flattened `WithdrawExcessLamportsInstruction`. */
export type PrettyWithdrawExcessLamportsInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountSourceAccount extends string | AccountMeta<string> = string,
    TAccountDestinationAccount extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<WithdrawExcessLamportsInstruction<TProgram, TAccountSourceAccount, TAccountDestinationAccount, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `WithdrawExcessLamportsInput`. */
export type PrettyWithdrawExcessLamportsInput<
    TAccountSourceAccount extends string = string,
    TAccountDestinationAccount extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<WithdrawExcessLamportsInput<TAccountSourceAccount, TAccountDestinationAccount, TAccountAuthority>>;

/** Flattened `ParsedWithdrawExcessLamportsInstruction`. */
export type PrettyParsedWithdrawExcessLamportsInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedWithdrawExcessLamportsInstruction<TProgram, TAccountMetas>>;

export type PrettyWithdrawExcessLamportsInstructionData = Prettify<WithdrawExcessLamportsInstructionData>;
export type PrettyWithdrawExcessLamportsInstructionDataArgs = Prettify<WithdrawExcessLamportsInstructionDataArgs>;

// --- WithdrawWithheldTokensFromAccounts ---

/** Flattened `WithdrawWithheldTokensFromAccountsInstruction`. */
export type PrettyWithdrawWithheldTokensFromAccountsInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountFeeReceiver extends string | AccountMeta<string> = string,
    TAccountWithdrawWithheldAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<WithdrawWithheldTokensFromAccountsInstruction<TProgram, TAccountMint, TAccountFeeReceiver, TAccountWithdrawWithheldAuthority, TRemainingAccounts>>;

/** Flattened `WithdrawWithheldTokensFromAccountsInput`. */
export type PrettyWithdrawWithheldTokensFromAccountsInput<
    TAccountMint extends string = string,
    TAccountFeeReceiver extends string = string,
    TAccountWithdrawWithheldAuthority extends string = string,
> = Prettify<WithdrawWithheldTokensFromAccountsInput<TAccountMint, TAccountFeeReceiver, TAccountWithdrawWithheldAuthority>>;

/** Flattened `ParsedWithdrawWithheldTokensFromAccountsInstruction`. */
export type PrettyParsedWithdrawWithheldTokensFromAccountsInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedWithdrawWithheldTokensFromAccountsInstruction<TProgram, TAccountMetas>>;

export type PrettyWithdrawWithheldTokensFromAccountsInstructionData = Prettify<WithdrawWithheldTokensFromAccountsInstructionData>;
export type PrettyWithdrawWithheldTokensFromAccountsInstructionDataArgs = Prettify<WithdrawWithheldTokensFromAccountsInstructionDataArgs>;

// --- WithdrawWithheldTokensFromAccountsForConfidentialTransferFee ---

/** Flattened `WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction`. */
export type PrettyWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountDestination extends string | AccountMeta<string> = string,
    TAccountInstructionsSysvarOrContextState extends string | AccountMeta<string> = string,
    TAccountRecord extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction<TProgram, TAccountMint, TAccountDestination, TAccountInstructionsSysvarOrContextState, TAccountRecord, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInput`. */
export type PrettyWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInput<
    TAccountMint extends string = string,
    TAccountDestination extends string = string,
    TAccountInstructionsSysvarOrContextState extends string = string,
    TAccountRecord extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInput<TAccountMint, TAccountDestination, TAccountInstructionsSysvarOrContextState, TAccountRecord, TAccountAuthority>>;

/** Flattened `ParsedWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction`. */
export type PrettyParsedWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction<TProgram, TAccountMetas>>;

export type PrettyWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionData = Prettify<WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionData>;
export type PrettyWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionDataArgs = Prettify<WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionDataArgs>;

// --- WithdrawWithheldTokensFromMint ---

/** Flattened `WithdrawWithheldTokensFromMintInstruction`. */
export type PrettyWithdrawWithheldTokensFromMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountFeeReceiver extends string | AccountMeta<string> = string,
    TAccountWithdrawWithheldAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<WithdrawWithheldTokensFromMintInstruction<TProgram, TAccountMint, TAccountFeeReceiver, TAccountWithdrawWithheldAuthority, TRemainingAccounts>>;

/** Flattened `WithdrawWithheldTokensFromMintInput`. */
export type PrettyWithdrawWithheldTokensFromMintInput<
    TAccountMint extends string = string,
    TAccountFeeReceiver extends string = string,
    TAccountWithdrawWithheldAuthority extends string = string,
> = Prettify<WithdrawWithheldTokensFromMintInput<TAccountMint, TAccountFeeReceiver, TAccountWithdrawWithheldAuthority>>;

/** Flattened `ParsedWithdrawWithheldTokensFromMintInstruction`. */
export type PrettyParsedWithdrawWithheldTokensFromMintInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedWithdrawWithheldTokensFromMintInstruction<TProgram, TAccountMetas>>;

export type PrettyWithdrawWithheldTokensFromMintInstructionData = Prettify<WithdrawWithheldTokensFromMintInstructionData>;
export type PrettyWithdrawWithheldTokensFromMintInstructionDataArgs = Prettify<WithdrawWithheldTokensFromMintInstructionDataArgs>;

// --- WithdrawWithheldTokensFromMintForConfidentialTransferFee ---

/** Flattened `WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction`. */
export type PrettyWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint extends string | AccountMeta<string> = string,
    TAccountDestination extends string | AccountMeta<string> = string,
    TAccountInstructionsSysvarOrContextState extends string | AccountMeta<string> = string,
    TAccountRecord extends string | AccountMeta<string> = string,
    TAccountAuthority extends string | AccountMeta<string> = string,
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction<TProgram, TAccountMint, TAccountDestination, TAccountInstructionsSysvarOrContextState, TAccountRecord, TAccountAuthority, TRemainingAccounts>>;

/** Flattened `WithdrawWithheldTokensFromMintForConfidentialTransferFeeInput`. */
export type PrettyWithdrawWithheldTokensFromMintForConfidentialTransferFeeInput<
    TAccountMint extends string = string,
    TAccountDestination extends string = string,
    TAccountInstructionsSysvarOrContextState extends string = string,
    TAccountRecord extends string = string,
    TAccountAuthority extends string = string,
> = Prettify<WithdrawWithheldTokensFromMintForConfidentialTransferFeeInput<TAccountMint, TAccountDestination, TAccountInstructionsSysvarOrContextState, TAccountRecord, TAccountAuthority>>;

/** Flattened `ParsedWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction`. */
export type PrettyParsedWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction<
    TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[],
> = Prettify<ParsedWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction<TProgram, TAccountMetas>>;

export type PrettyWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionData = Prettify<WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionData>;
export type PrettyWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataArgs = Prettify<WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataArgs>;
