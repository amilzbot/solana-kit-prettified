/**
 * Prettified types from `@solana-program/token-2022`.
 *
 * Covers all 91 token-2022 program instructions (excluding ATA instructions),
 * plus Mint, Token, and Multisig account types with extension support.
 *
 * Instructions that overlap with base token program are aliased with a
 * `Token2022` prefix (e.g. `Token2022TransferInstruction`) to avoid collision.
 * Extension-specific instructions keep their original names.
 */
import type { Prettify } from '../prettify.js';

import type {
    // Account types
    Mint as Token2022Mint,
    MintArgs as Token2022MintArgs,
    Token as Token2022TokenAccount,
    TokenArgs as Token2022TokenAccountArgs,
    Multisig as Token2022Multisig,
    MultisigArgs as Token2022MultisigArgs,

    // Extension types
    Extension,
    ExtensionArgs,
    TransferFee,
    TransferFeeArgs,
    DecryptableBalance,
    DecryptableBalanceArgs,
    EncryptedBalance,
    EncryptedBalanceArgs,
    TokenMetadataField,

    // Instructions
    AmountToUiAmountInstruction as Token2022AmountToUiAmountInstruction,
    AmountToUiAmountInput as Token2022AmountToUiAmountInput,
    AmountToUiAmountInstructionData as Token2022AmountToUiAmountInstructionData,
    AmountToUiAmountInstructionDataArgs as Token2022AmountToUiAmountInstructionDataArgs,
    ParsedAmountToUiAmountInstruction as ParsedToken2022AmountToUiAmountInstruction,
    ApplyConfidentialPendingBalanceInstruction,
    ApplyConfidentialPendingBalanceInput,
    ApplyConfidentialPendingBalanceInstructionData,
    ApplyConfidentialPendingBalanceInstructionDataArgs,
    ParsedApplyConfidentialPendingBalanceInstruction,
    ApproveInstruction as Token2022ApproveInstruction,
    ApproveInput as Token2022ApproveInput,
    ApproveInstructionData as Token2022ApproveInstructionData,
    ApproveInstructionDataArgs as Token2022ApproveInstructionDataArgs,
    ParsedApproveInstruction as ParsedToken2022ApproveInstruction,
    ApproveCheckedInstruction as Token2022ApproveCheckedInstruction,
    ApproveCheckedInput as Token2022ApproveCheckedInput,
    ApproveCheckedInstructionData as Token2022ApproveCheckedInstructionData,
    ApproveCheckedInstructionDataArgs as Token2022ApproveCheckedInstructionDataArgs,
    ParsedApproveCheckedInstruction as ParsedToken2022ApproveCheckedInstruction,
    ApproveConfidentialTransferAccountInstruction,
    ApproveConfidentialTransferAccountInput,
    ApproveConfidentialTransferAccountInstructionData,
    ApproveConfidentialTransferAccountInstructionDataArgs,
    ParsedApproveConfidentialTransferAccountInstruction,
    BurnInstruction as Token2022BurnInstruction,
    BurnInput as Token2022BurnInput,
    BurnInstructionData as Token2022BurnInstructionData,
    BurnInstructionDataArgs as Token2022BurnInstructionDataArgs,
    ParsedBurnInstruction as ParsedToken2022BurnInstruction,
    BurnCheckedInstruction as Token2022BurnCheckedInstruction,
    BurnCheckedInput as Token2022BurnCheckedInput,
    BurnCheckedInstructionData as Token2022BurnCheckedInstructionData,
    BurnCheckedInstructionDataArgs as Token2022BurnCheckedInstructionDataArgs,
    ParsedBurnCheckedInstruction as ParsedToken2022BurnCheckedInstruction,
    CloseAccountInstruction as Token2022CloseAccountInstruction,
    CloseAccountInput as Token2022CloseAccountInput,
    CloseAccountInstructionData as Token2022CloseAccountInstructionData,
    CloseAccountInstructionDataArgs as Token2022CloseAccountInstructionDataArgs,
    ParsedCloseAccountInstruction as ParsedToken2022CloseAccountInstruction,
    ConfidentialDepositInstruction,
    ConfidentialDepositInput,
    ConfidentialDepositInstructionData,
    ConfidentialDepositInstructionDataArgs,
    ParsedConfidentialDepositInstruction,
    ConfidentialTransferInstruction,
    ConfidentialTransferInput,
    ConfidentialTransferInstructionData,
    ConfidentialTransferInstructionDataArgs,
    ParsedConfidentialTransferInstruction,
    ConfidentialTransferWithFeeInstruction,
    ConfidentialTransferWithFeeInput,
    ConfidentialTransferWithFeeInstructionData,
    ConfidentialTransferWithFeeInstructionDataArgs,
    ParsedConfidentialTransferWithFeeInstruction,
    ConfidentialWithdrawInstruction,
    ConfidentialWithdrawInput,
    ConfidentialWithdrawInstructionData,
    ConfidentialWithdrawInstructionDataArgs,
    ParsedConfidentialWithdrawInstruction,
    ConfigureConfidentialTransferAccountInstruction,
    ConfigureConfidentialTransferAccountInput,
    ConfigureConfidentialTransferAccountInstructionData,
    ConfigureConfidentialTransferAccountInstructionDataArgs,
    ParsedConfigureConfidentialTransferAccountInstruction,
    CreateNativeMintInstruction,
    CreateNativeMintInput,
    CreateNativeMintInstructionData,
    CreateNativeMintInstructionDataArgs,
    ParsedCreateNativeMintInstruction,
    DisableConfidentialCreditsInstruction,
    DisableConfidentialCreditsInput,
    DisableConfidentialCreditsInstructionData,
    DisableConfidentialCreditsInstructionDataArgs,
    ParsedDisableConfidentialCreditsInstruction,
    DisableCpiGuardInstruction,
    DisableCpiGuardInput,
    DisableCpiGuardInstructionData,
    DisableCpiGuardInstructionDataArgs,
    ParsedDisableCpiGuardInstruction,
    DisableHarvestToMintInstruction,
    DisableHarvestToMintInput,
    DisableHarvestToMintInstructionData,
    DisableHarvestToMintInstructionDataArgs,
    ParsedDisableHarvestToMintInstruction,
    DisableMemoTransfersInstruction,
    DisableMemoTransfersInput,
    DisableMemoTransfersInstructionData,
    DisableMemoTransfersInstructionDataArgs,
    ParsedDisableMemoTransfersInstruction,
    DisableNonConfidentialCreditsInstruction,
    DisableNonConfidentialCreditsInput,
    DisableNonConfidentialCreditsInstructionData,
    DisableNonConfidentialCreditsInstructionDataArgs,
    ParsedDisableNonConfidentialCreditsInstruction,
    EmitTokenMetadataInstruction,
    EmitTokenMetadataInput,
    EmitTokenMetadataInstructionData,
    EmitTokenMetadataInstructionDataArgs,
    ParsedEmitTokenMetadataInstruction,
    EmptyConfidentialTransferAccountInstruction,
    EmptyConfidentialTransferAccountInput,
    EmptyConfidentialTransferAccountInstructionData,
    EmptyConfidentialTransferAccountInstructionDataArgs,
    ParsedEmptyConfidentialTransferAccountInstruction,
    EnableConfidentialCreditsInstruction,
    EnableConfidentialCreditsInput,
    EnableConfidentialCreditsInstructionData,
    EnableConfidentialCreditsInstructionDataArgs,
    ParsedEnableConfidentialCreditsInstruction,
    EnableCpiGuardInstruction,
    EnableCpiGuardInput,
    EnableCpiGuardInstructionData,
    EnableCpiGuardInstructionDataArgs,
    ParsedEnableCpiGuardInstruction,
    EnableHarvestToMintInstruction,
    EnableHarvestToMintInput,
    EnableHarvestToMintInstructionData,
    EnableHarvestToMintInstructionDataArgs,
    ParsedEnableHarvestToMintInstruction,
    EnableMemoTransfersInstruction,
    EnableMemoTransfersInput,
    EnableMemoTransfersInstructionData,
    EnableMemoTransfersInstructionDataArgs,
    ParsedEnableMemoTransfersInstruction,
    EnableNonConfidentialCreditsInstruction,
    EnableNonConfidentialCreditsInput,
    EnableNonConfidentialCreditsInstructionData,
    EnableNonConfidentialCreditsInstructionDataArgs,
    ParsedEnableNonConfidentialCreditsInstruction,
    FreezeAccountInstruction as Token2022FreezeAccountInstruction,
    FreezeAccountInput as Token2022FreezeAccountInput,
    FreezeAccountInstructionData as Token2022FreezeAccountInstructionData,
    FreezeAccountInstructionDataArgs as Token2022FreezeAccountInstructionDataArgs,
    ParsedFreezeAccountInstruction as ParsedToken2022FreezeAccountInstruction,
    GetAccountDataSizeInstruction as Token2022GetAccountDataSizeInstruction,
    GetAccountDataSizeInput as Token2022GetAccountDataSizeInput,
    GetAccountDataSizeInstructionData as Token2022GetAccountDataSizeInstructionData,
    GetAccountDataSizeInstructionDataArgs as Token2022GetAccountDataSizeInstructionDataArgs,
    ParsedGetAccountDataSizeInstruction as ParsedToken2022GetAccountDataSizeInstruction,
    HarvestWithheldTokensToMintInstruction,
    HarvestWithheldTokensToMintInput,
    HarvestWithheldTokensToMintInstructionData,
    HarvestWithheldTokensToMintInstructionDataArgs,
    ParsedHarvestWithheldTokensToMintInstruction,
    HarvestWithheldTokensToMintForConfidentialTransferFeeInstruction,
    HarvestWithheldTokensToMintForConfidentialTransferFeeInput,
    HarvestWithheldTokensToMintForConfidentialTransferFeeInstructionData,
    HarvestWithheldTokensToMintForConfidentialTransferFeeInstructionDataArgs,
    ParsedHarvestWithheldTokensToMintForConfidentialTransferFeeInstruction,
    InitializeAccountInstruction as Token2022InitializeAccountInstruction,
    InitializeAccountInput as Token2022InitializeAccountInput,
    InitializeAccountInstructionData as Token2022InitializeAccountInstructionData,
    InitializeAccountInstructionDataArgs as Token2022InitializeAccountInstructionDataArgs,
    ParsedInitializeAccountInstruction as ParsedToken2022InitializeAccountInstruction,
    InitializeAccount2Instruction as Token2022InitializeAccount2Instruction,
    InitializeAccount2Input as Token2022InitializeAccount2Input,
    InitializeAccount2InstructionData as Token2022InitializeAccount2InstructionData,
    InitializeAccount2InstructionDataArgs as Token2022InitializeAccount2InstructionDataArgs,
    ParsedInitializeAccount2Instruction as ParsedToken2022InitializeAccount2Instruction,
    InitializeAccount3Instruction as Token2022InitializeAccount3Instruction,
    InitializeAccount3Input as Token2022InitializeAccount3Input,
    InitializeAccount3InstructionData as Token2022InitializeAccount3InstructionData,
    InitializeAccount3InstructionDataArgs as Token2022InitializeAccount3InstructionDataArgs,
    ParsedInitializeAccount3Instruction as ParsedToken2022InitializeAccount3Instruction,
    InitializeConfidentialTransferFeeInstruction,
    InitializeConfidentialTransferFeeInput,
    InitializeConfidentialTransferFeeInstructionData,
    InitializeConfidentialTransferFeeInstructionDataArgs,
    ParsedInitializeConfidentialTransferFeeInstruction,
    InitializeConfidentialTransferMintInstruction,
    InitializeConfidentialTransferMintInput,
    InitializeConfidentialTransferMintInstructionData,
    InitializeConfidentialTransferMintInstructionDataArgs,
    ParsedInitializeConfidentialTransferMintInstruction,
    InitializeDefaultAccountStateInstruction,
    InitializeDefaultAccountStateInput,
    InitializeDefaultAccountStateInstructionData,
    InitializeDefaultAccountStateInstructionDataArgs,
    ParsedInitializeDefaultAccountStateInstruction,
    InitializeGroupMemberPointerInstruction,
    InitializeGroupMemberPointerInput,
    InitializeGroupMemberPointerInstructionData,
    InitializeGroupMemberPointerInstructionDataArgs,
    ParsedInitializeGroupMemberPointerInstruction,
    InitializeGroupPointerInstruction,
    InitializeGroupPointerInput,
    InitializeGroupPointerInstructionData,
    InitializeGroupPointerInstructionDataArgs,
    ParsedInitializeGroupPointerInstruction,
    InitializeImmutableOwnerInstruction as Token2022InitializeImmutableOwnerInstruction,
    InitializeImmutableOwnerInput as Token2022InitializeImmutableOwnerInput,
    InitializeImmutableOwnerInstructionData as Token2022InitializeImmutableOwnerInstructionData,
    InitializeImmutableOwnerInstructionDataArgs as Token2022InitializeImmutableOwnerInstructionDataArgs,
    ParsedInitializeImmutableOwnerInstruction as ParsedToken2022InitializeImmutableOwnerInstruction,
    InitializeInterestBearingMintInstruction,
    InitializeInterestBearingMintInput,
    InitializeInterestBearingMintInstructionData,
    InitializeInterestBearingMintInstructionDataArgs,
    ParsedInitializeInterestBearingMintInstruction,
    InitializeMetadataPointerInstruction,
    InitializeMetadataPointerInput,
    InitializeMetadataPointerInstructionData,
    InitializeMetadataPointerInstructionDataArgs,
    ParsedInitializeMetadataPointerInstruction,
    InitializeMintInstruction as Token2022InitializeMintInstruction,
    InitializeMintInput as Token2022InitializeMintInput,
    InitializeMintInstructionData as Token2022InitializeMintInstructionData,
    InitializeMintInstructionDataArgs as Token2022InitializeMintInstructionDataArgs,
    ParsedInitializeMintInstruction as ParsedToken2022InitializeMintInstruction,
    InitializeMint2Instruction as Token2022InitializeMint2Instruction,
    InitializeMint2Input as Token2022InitializeMint2Input,
    InitializeMint2InstructionData as Token2022InitializeMint2InstructionData,
    InitializeMint2InstructionDataArgs as Token2022InitializeMint2InstructionDataArgs,
    ParsedInitializeMint2Instruction as ParsedToken2022InitializeMint2Instruction,
    InitializeMintCloseAuthorityInstruction,
    InitializeMintCloseAuthorityInput,
    InitializeMintCloseAuthorityInstructionData,
    InitializeMintCloseAuthorityInstructionDataArgs,
    ParsedInitializeMintCloseAuthorityInstruction,
    InitializeMultisigInstruction as Token2022InitializeMultisigInstruction,
    InitializeMultisigInput as Token2022InitializeMultisigInput,
    InitializeMultisigInstructionData as Token2022InitializeMultisigInstructionData,
    InitializeMultisigInstructionDataArgs as Token2022InitializeMultisigInstructionDataArgs,
    ParsedInitializeMultisigInstruction as ParsedToken2022InitializeMultisigInstruction,
    InitializeMultisig2Instruction as Token2022InitializeMultisig2Instruction,
    InitializeMultisig2Input as Token2022InitializeMultisig2Input,
    InitializeMultisig2InstructionData as Token2022InitializeMultisig2InstructionData,
    InitializeMultisig2InstructionDataArgs as Token2022InitializeMultisig2InstructionDataArgs,
    ParsedInitializeMultisig2Instruction as ParsedToken2022InitializeMultisig2Instruction,
    InitializeNonTransferableMintInstruction,
    InitializeNonTransferableMintInput,
    InitializeNonTransferableMintInstructionData,
    InitializeNonTransferableMintInstructionDataArgs,
    ParsedInitializeNonTransferableMintInstruction,
    InitializePausableConfigInstruction,
    InitializePausableConfigInput,
    InitializePausableConfigInstructionData,
    InitializePausableConfigInstructionDataArgs,
    ParsedInitializePausableConfigInstruction,
    InitializePermanentDelegateInstruction,
    InitializePermanentDelegateInput,
    InitializePermanentDelegateInstructionData,
    InitializePermanentDelegateInstructionDataArgs,
    ParsedInitializePermanentDelegateInstruction,
    InitializePermissionedBurnInstruction,
    InitializePermissionedBurnInput,
    InitializePermissionedBurnInstructionData,
    InitializePermissionedBurnInstructionDataArgs,
    ParsedInitializePermissionedBurnInstruction,
    InitializeScaledUiAmountMintInstruction,
    InitializeScaledUiAmountMintInput,
    InitializeScaledUiAmountMintInstructionData,
    InitializeScaledUiAmountMintInstructionDataArgs,
    ParsedInitializeScaledUiAmountMintInstruction,
    InitializeTokenGroupInstruction,
    InitializeTokenGroupInput,
    InitializeTokenGroupInstructionData,
    InitializeTokenGroupInstructionDataArgs,
    ParsedInitializeTokenGroupInstruction,
    InitializeTokenGroupMemberInstruction,
    InitializeTokenGroupMemberInput,
    InitializeTokenGroupMemberInstructionData,
    InitializeTokenGroupMemberInstructionDataArgs,
    ParsedInitializeTokenGroupMemberInstruction,
    InitializeTokenMetadataInstruction,
    InitializeTokenMetadataInput,
    InitializeTokenMetadataInstructionData,
    InitializeTokenMetadataInstructionDataArgs,
    ParsedInitializeTokenMetadataInstruction,
    InitializeTransferFeeConfigInstruction,
    InitializeTransferFeeConfigInput,
    InitializeTransferFeeConfigInstructionData,
    InitializeTransferFeeConfigInstructionDataArgs,
    ParsedInitializeTransferFeeConfigInstruction,
    InitializeTransferHookInstruction,
    InitializeTransferHookInput,
    InitializeTransferHookInstructionData,
    InitializeTransferHookInstructionDataArgs,
    ParsedInitializeTransferHookInstruction,
    MintToInstruction as Token2022MintToInstruction,
    MintToInput as Token2022MintToInput,
    MintToInstructionData as Token2022MintToInstructionData,
    MintToInstructionDataArgs as Token2022MintToInstructionDataArgs,
    ParsedMintToInstruction as ParsedToken2022MintToInstruction,
    MintToCheckedInstruction as Token2022MintToCheckedInstruction,
    MintToCheckedInput as Token2022MintToCheckedInput,
    MintToCheckedInstructionData as Token2022MintToCheckedInstructionData,
    MintToCheckedInstructionDataArgs as Token2022MintToCheckedInstructionDataArgs,
    ParsedMintToCheckedInstruction as ParsedToken2022MintToCheckedInstruction,
    PauseInstruction,
    PauseInput,
    PauseInstructionData,
    PauseInstructionDataArgs,
    ParsedPauseInstruction,
    PermissionedBurnInstruction,
    PermissionedBurnInput,
    PermissionedBurnInstructionData,
    PermissionedBurnInstructionDataArgs,
    ParsedPermissionedBurnInstruction,
    PermissionedBurnCheckedInstruction,
    PermissionedBurnCheckedInput,
    PermissionedBurnCheckedInstructionData,
    PermissionedBurnCheckedInstructionDataArgs,
    ParsedPermissionedBurnCheckedInstruction,
    ReallocateInstruction,
    ReallocateInput,
    ReallocateInstructionData,
    ReallocateInstructionDataArgs,
    ParsedReallocateInstruction,
    RemoveTokenMetadataKeyInstruction,
    RemoveTokenMetadataKeyInput,
    RemoveTokenMetadataKeyInstructionData,
    RemoveTokenMetadataKeyInstructionDataArgs,
    ParsedRemoveTokenMetadataKeyInstruction,
    ResumeInstruction,
    ResumeInput,
    ResumeInstructionData,
    ResumeInstructionDataArgs,
    ParsedResumeInstruction,
    RevokeInstruction as Token2022RevokeInstruction,
    RevokeInput as Token2022RevokeInput,
    RevokeInstructionData as Token2022RevokeInstructionData,
    RevokeInstructionDataArgs as Token2022RevokeInstructionDataArgs,
    ParsedRevokeInstruction as ParsedToken2022RevokeInstruction,
    SetAuthorityInstruction as Token2022SetAuthorityInstruction,
    SetAuthorityInput as Token2022SetAuthorityInput,
    SetAuthorityInstructionData as Token2022SetAuthorityInstructionData,
    SetAuthorityInstructionDataArgs as Token2022SetAuthorityInstructionDataArgs,
    ParsedSetAuthorityInstruction as ParsedToken2022SetAuthorityInstruction,
    SetTransferFeeInstruction,
    SetTransferFeeInput,
    SetTransferFeeInstructionData,
    SetTransferFeeInstructionDataArgs,
    ParsedSetTransferFeeInstruction,
    SyncNativeInstruction as Token2022SyncNativeInstruction,
    SyncNativeInput as Token2022SyncNativeInput,
    SyncNativeInstructionData as Token2022SyncNativeInstructionData,
    SyncNativeInstructionDataArgs as Token2022SyncNativeInstructionDataArgs,
    ParsedSyncNativeInstruction as ParsedToken2022SyncNativeInstruction,
    ThawAccountInstruction as Token2022ThawAccountInstruction,
    ThawAccountInput as Token2022ThawAccountInput,
    ThawAccountInstructionData as Token2022ThawAccountInstructionData,
    ThawAccountInstructionDataArgs as Token2022ThawAccountInstructionDataArgs,
    ParsedThawAccountInstruction as ParsedToken2022ThawAccountInstruction,
    TransferInstruction as Token2022TransferInstruction,
    TransferInput as Token2022TransferInput,
    TransferInstructionData as Token2022TransferInstructionData,
    TransferInstructionDataArgs as Token2022TransferInstructionDataArgs,
    ParsedTransferInstruction as ParsedToken2022TransferInstruction,
    TransferCheckedInstruction as Token2022TransferCheckedInstruction,
    TransferCheckedInput as Token2022TransferCheckedInput,
    TransferCheckedInstructionData as Token2022TransferCheckedInstructionData,
    TransferCheckedInstructionDataArgs as Token2022TransferCheckedInstructionDataArgs,
    ParsedTransferCheckedInstruction as ParsedToken2022TransferCheckedInstruction,
    TransferCheckedWithFeeInstruction,
    TransferCheckedWithFeeInput,
    TransferCheckedWithFeeInstructionData,
    TransferCheckedWithFeeInstructionDataArgs,
    ParsedTransferCheckedWithFeeInstruction,
    UiAmountToAmountInstruction as Token2022UiAmountToAmountInstruction,
    UiAmountToAmountInput as Token2022UiAmountToAmountInput,
    UiAmountToAmountInstructionData as Token2022UiAmountToAmountInstructionData,
    UiAmountToAmountInstructionDataArgs as Token2022UiAmountToAmountInstructionDataArgs,
    ParsedUiAmountToAmountInstruction as ParsedToken2022UiAmountToAmountInstruction,
    UnwrapLamportsInstruction,
    UnwrapLamportsInput,
    UnwrapLamportsInstructionData,
    UnwrapLamportsInstructionDataArgs,
    ParsedUnwrapLamportsInstruction,
    UpdateConfidentialTransferMintInstruction,
    UpdateConfidentialTransferMintInput,
    UpdateConfidentialTransferMintInstructionData,
    UpdateConfidentialTransferMintInstructionDataArgs,
    ParsedUpdateConfidentialTransferMintInstruction,
    UpdateDefaultAccountStateInstruction,
    UpdateDefaultAccountStateInput,
    UpdateDefaultAccountStateInstructionData,
    UpdateDefaultAccountStateInstructionDataArgs,
    ParsedUpdateDefaultAccountStateInstruction,
    UpdateGroupMemberPointerInstruction,
    UpdateGroupMemberPointerInput,
    UpdateGroupMemberPointerInstructionData,
    UpdateGroupMemberPointerInstructionDataArgs,
    ParsedUpdateGroupMemberPointerInstruction,
    UpdateGroupPointerInstruction,
    UpdateGroupPointerInput,
    UpdateGroupPointerInstructionData,
    UpdateGroupPointerInstructionDataArgs,
    ParsedUpdateGroupPointerInstruction,
    UpdateMetadataPointerInstruction,
    UpdateMetadataPointerInput,
    UpdateMetadataPointerInstructionData,
    UpdateMetadataPointerInstructionDataArgs,
    ParsedUpdateMetadataPointerInstruction,
    UpdateMultiplierScaledUiMintInstruction,
    UpdateMultiplierScaledUiMintInput,
    UpdateMultiplierScaledUiMintInstructionData,
    UpdateMultiplierScaledUiMintInstructionDataArgs,
    ParsedUpdateMultiplierScaledUiMintInstruction,
    UpdateRateInterestBearingMintInstruction,
    UpdateRateInterestBearingMintInput,
    UpdateRateInterestBearingMintInstructionData,
    UpdateRateInterestBearingMintInstructionDataArgs,
    ParsedUpdateRateInterestBearingMintInstruction,
    UpdateTokenGroupMaxSizeInstruction,
    UpdateTokenGroupMaxSizeInput,
    UpdateTokenGroupMaxSizeInstructionData,
    UpdateTokenGroupMaxSizeInstructionDataArgs,
    ParsedUpdateTokenGroupMaxSizeInstruction,
    UpdateTokenGroupUpdateAuthorityInstruction,
    UpdateTokenGroupUpdateAuthorityInput,
    UpdateTokenGroupUpdateAuthorityInstructionData,
    UpdateTokenGroupUpdateAuthorityInstructionDataArgs,
    ParsedUpdateTokenGroupUpdateAuthorityInstruction,
    UpdateTokenMetadataFieldInstruction,
    UpdateTokenMetadataFieldInput,
    UpdateTokenMetadataFieldInstructionData,
    UpdateTokenMetadataFieldInstructionDataArgs,
    ParsedUpdateTokenMetadataFieldInstruction,
    UpdateTokenMetadataUpdateAuthorityInstruction,
    UpdateTokenMetadataUpdateAuthorityInput,
    UpdateTokenMetadataUpdateAuthorityInstructionData,
    UpdateTokenMetadataUpdateAuthorityInstructionDataArgs,
    ParsedUpdateTokenMetadataUpdateAuthorityInstruction,
    UpdateTransferHookInstruction,
    UpdateTransferHookInput,
    UpdateTransferHookInstructionData,
    UpdateTransferHookInstructionDataArgs,
    ParsedUpdateTransferHookInstruction,
    WithdrawExcessLamportsInstruction,
    WithdrawExcessLamportsInput,
    WithdrawExcessLamportsInstructionData,
    WithdrawExcessLamportsInstructionDataArgs,
    ParsedWithdrawExcessLamportsInstruction,
    WithdrawWithheldTokensFromAccountsInstruction,
    WithdrawWithheldTokensFromAccountsInput,
    WithdrawWithheldTokensFromAccountsInstructionData,
    WithdrawWithheldTokensFromAccountsInstructionDataArgs,
    ParsedWithdrawWithheldTokensFromAccountsInstruction,
    WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction,
    WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInput,
    WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionData,
    WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionDataArgs,
    ParsedWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction,
    WithdrawWithheldTokensFromMintInstruction,
    WithdrawWithheldTokensFromMintInput,
    WithdrawWithheldTokensFromMintInstructionData,
    WithdrawWithheldTokensFromMintInstructionDataArgs,
    ParsedWithdrawWithheldTokensFromMintInstruction,
    WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction,
    WithdrawWithheldTokensFromMintForConfidentialTransferFeeInput,
    WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionData,
    WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataArgs,
    ParsedWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction,

    // Program address
    TOKEN_2022_PROGRAM_ADDRESS,
} from '@solana-program/token-2022';

import type { AccountMeta } from '@solana/kit';

// ============================================================================
// Re-exports
// ============================================================================

export type {
    Token2022Mint,
    Token2022MintArgs,
    Token2022TokenAccount,
    Token2022TokenAccountArgs,
    Token2022Multisig,
    Token2022MultisigArgs,
    Extension,
    ExtensionArgs,
    TransferFee,
    TransferFeeArgs,
    DecryptableBalance,
    DecryptableBalanceArgs,
    EncryptedBalance,
    EncryptedBalanceArgs,
    TokenMetadataField,

    Token2022AmountToUiAmountInstruction,
    Token2022AmountToUiAmountInput,
    Token2022AmountToUiAmountInstructionData,
    Token2022AmountToUiAmountInstructionDataArgs,
    ParsedToken2022AmountToUiAmountInstruction,
    ApplyConfidentialPendingBalanceInstruction,
    ApplyConfidentialPendingBalanceInput,
    ApplyConfidentialPendingBalanceInstructionData,
    ApplyConfidentialPendingBalanceInstructionDataArgs,
    ParsedApplyConfidentialPendingBalanceInstruction,
    Token2022ApproveInstruction,
    Token2022ApproveInput,
    Token2022ApproveInstructionData,
    Token2022ApproveInstructionDataArgs,
    ParsedToken2022ApproveInstruction,
    Token2022ApproveCheckedInstruction,
    Token2022ApproveCheckedInput,
    Token2022ApproveCheckedInstructionData,
    Token2022ApproveCheckedInstructionDataArgs,
    ParsedToken2022ApproveCheckedInstruction,
    ApproveConfidentialTransferAccountInstruction,
    ApproveConfidentialTransferAccountInput,
    ApproveConfidentialTransferAccountInstructionData,
    ApproveConfidentialTransferAccountInstructionDataArgs,
    ParsedApproveConfidentialTransferAccountInstruction,
    Token2022BurnInstruction,
    Token2022BurnInput,
    Token2022BurnInstructionData,
    Token2022BurnInstructionDataArgs,
    ParsedToken2022BurnInstruction,
    Token2022BurnCheckedInstruction,
    Token2022BurnCheckedInput,
    Token2022BurnCheckedInstructionData,
    Token2022BurnCheckedInstructionDataArgs,
    ParsedToken2022BurnCheckedInstruction,
    Token2022CloseAccountInstruction,
    Token2022CloseAccountInput,
    Token2022CloseAccountInstructionData,
    Token2022CloseAccountInstructionDataArgs,
    ParsedToken2022CloseAccountInstruction,
    ConfidentialDepositInstruction,
    ConfidentialDepositInput,
    ConfidentialDepositInstructionData,
    ConfidentialDepositInstructionDataArgs,
    ParsedConfidentialDepositInstruction,
    ConfidentialTransferInstruction,
    ConfidentialTransferInput,
    ConfidentialTransferInstructionData,
    ConfidentialTransferInstructionDataArgs,
    ParsedConfidentialTransferInstruction,
    ConfidentialTransferWithFeeInstruction,
    ConfidentialTransferWithFeeInput,
    ConfidentialTransferWithFeeInstructionData,
    ConfidentialTransferWithFeeInstructionDataArgs,
    ParsedConfidentialTransferWithFeeInstruction,
    ConfidentialWithdrawInstruction,
    ConfidentialWithdrawInput,
    ConfidentialWithdrawInstructionData,
    ConfidentialWithdrawInstructionDataArgs,
    ParsedConfidentialWithdrawInstruction,
    ConfigureConfidentialTransferAccountInstruction,
    ConfigureConfidentialTransferAccountInput,
    ConfigureConfidentialTransferAccountInstructionData,
    ConfigureConfidentialTransferAccountInstructionDataArgs,
    ParsedConfigureConfidentialTransferAccountInstruction,
    CreateNativeMintInstruction,
    CreateNativeMintInput,
    CreateNativeMintInstructionData,
    CreateNativeMintInstructionDataArgs,
    ParsedCreateNativeMintInstruction,
    DisableConfidentialCreditsInstruction,
    DisableConfidentialCreditsInput,
    DisableConfidentialCreditsInstructionData,
    DisableConfidentialCreditsInstructionDataArgs,
    ParsedDisableConfidentialCreditsInstruction,
    DisableCpiGuardInstruction,
    DisableCpiGuardInput,
    DisableCpiGuardInstructionData,
    DisableCpiGuardInstructionDataArgs,
    ParsedDisableCpiGuardInstruction,
    DisableHarvestToMintInstruction,
    DisableHarvestToMintInput,
    DisableHarvestToMintInstructionData,
    DisableHarvestToMintInstructionDataArgs,
    ParsedDisableHarvestToMintInstruction,
    DisableMemoTransfersInstruction,
    DisableMemoTransfersInput,
    DisableMemoTransfersInstructionData,
    DisableMemoTransfersInstructionDataArgs,
    ParsedDisableMemoTransfersInstruction,
    DisableNonConfidentialCreditsInstruction,
    DisableNonConfidentialCreditsInput,
    DisableNonConfidentialCreditsInstructionData,
    DisableNonConfidentialCreditsInstructionDataArgs,
    ParsedDisableNonConfidentialCreditsInstruction,
    EmitTokenMetadataInstruction,
    EmitTokenMetadataInput,
    EmitTokenMetadataInstructionData,
    EmitTokenMetadataInstructionDataArgs,
    ParsedEmitTokenMetadataInstruction,
    EmptyConfidentialTransferAccountInstruction,
    EmptyConfidentialTransferAccountInput,
    EmptyConfidentialTransferAccountInstructionData,
    EmptyConfidentialTransferAccountInstructionDataArgs,
    ParsedEmptyConfidentialTransferAccountInstruction,
    EnableConfidentialCreditsInstruction,
    EnableConfidentialCreditsInput,
    EnableConfidentialCreditsInstructionData,
    EnableConfidentialCreditsInstructionDataArgs,
    ParsedEnableConfidentialCreditsInstruction,
    EnableCpiGuardInstruction,
    EnableCpiGuardInput,
    EnableCpiGuardInstructionData,
    EnableCpiGuardInstructionDataArgs,
    ParsedEnableCpiGuardInstruction,
    EnableHarvestToMintInstruction,
    EnableHarvestToMintInput,
    EnableHarvestToMintInstructionData,
    EnableHarvestToMintInstructionDataArgs,
    ParsedEnableHarvestToMintInstruction,
    EnableMemoTransfersInstruction,
    EnableMemoTransfersInput,
    EnableMemoTransfersInstructionData,
    EnableMemoTransfersInstructionDataArgs,
    ParsedEnableMemoTransfersInstruction,
    EnableNonConfidentialCreditsInstruction,
    EnableNonConfidentialCreditsInput,
    EnableNonConfidentialCreditsInstructionData,
    EnableNonConfidentialCreditsInstructionDataArgs,
    ParsedEnableNonConfidentialCreditsInstruction,
    Token2022FreezeAccountInstruction,
    Token2022FreezeAccountInput,
    Token2022FreezeAccountInstructionData,
    Token2022FreezeAccountInstructionDataArgs,
    ParsedToken2022FreezeAccountInstruction,
    Token2022GetAccountDataSizeInstruction,
    Token2022GetAccountDataSizeInput,
    Token2022GetAccountDataSizeInstructionData,
    Token2022GetAccountDataSizeInstructionDataArgs,
    ParsedToken2022GetAccountDataSizeInstruction,
    HarvestWithheldTokensToMintInstruction,
    HarvestWithheldTokensToMintInput,
    HarvestWithheldTokensToMintInstructionData,
    HarvestWithheldTokensToMintInstructionDataArgs,
    ParsedHarvestWithheldTokensToMintInstruction,
    HarvestWithheldTokensToMintForConfidentialTransferFeeInstruction,
    HarvestWithheldTokensToMintForConfidentialTransferFeeInput,
    HarvestWithheldTokensToMintForConfidentialTransferFeeInstructionData,
    HarvestWithheldTokensToMintForConfidentialTransferFeeInstructionDataArgs,
    ParsedHarvestWithheldTokensToMintForConfidentialTransferFeeInstruction,
    Token2022InitializeAccountInstruction,
    Token2022InitializeAccountInput,
    Token2022InitializeAccountInstructionData,
    Token2022InitializeAccountInstructionDataArgs,
    ParsedToken2022InitializeAccountInstruction,
    Token2022InitializeAccount2Instruction,
    Token2022InitializeAccount2Input,
    Token2022InitializeAccount2InstructionData,
    Token2022InitializeAccount2InstructionDataArgs,
    ParsedToken2022InitializeAccount2Instruction,
    Token2022InitializeAccount3Instruction,
    Token2022InitializeAccount3Input,
    Token2022InitializeAccount3InstructionData,
    Token2022InitializeAccount3InstructionDataArgs,
    ParsedToken2022InitializeAccount3Instruction,
    InitializeConfidentialTransferFeeInstruction,
    InitializeConfidentialTransferFeeInput,
    InitializeConfidentialTransferFeeInstructionData,
    InitializeConfidentialTransferFeeInstructionDataArgs,
    ParsedInitializeConfidentialTransferFeeInstruction,
    InitializeConfidentialTransferMintInstruction,
    InitializeConfidentialTransferMintInput,
    InitializeConfidentialTransferMintInstructionData,
    InitializeConfidentialTransferMintInstructionDataArgs,
    ParsedInitializeConfidentialTransferMintInstruction,
    InitializeDefaultAccountStateInstruction,
    InitializeDefaultAccountStateInput,
    InitializeDefaultAccountStateInstructionData,
    InitializeDefaultAccountStateInstructionDataArgs,
    ParsedInitializeDefaultAccountStateInstruction,
    InitializeGroupMemberPointerInstruction,
    InitializeGroupMemberPointerInput,
    InitializeGroupMemberPointerInstructionData,
    InitializeGroupMemberPointerInstructionDataArgs,
    ParsedInitializeGroupMemberPointerInstruction,
    InitializeGroupPointerInstruction,
    InitializeGroupPointerInput,
    InitializeGroupPointerInstructionData,
    InitializeGroupPointerInstructionDataArgs,
    ParsedInitializeGroupPointerInstruction,
    Token2022InitializeImmutableOwnerInstruction,
    Token2022InitializeImmutableOwnerInput,
    Token2022InitializeImmutableOwnerInstructionData,
    Token2022InitializeImmutableOwnerInstructionDataArgs,
    ParsedToken2022InitializeImmutableOwnerInstruction,
    InitializeInterestBearingMintInstruction,
    InitializeInterestBearingMintInput,
    InitializeInterestBearingMintInstructionData,
    InitializeInterestBearingMintInstructionDataArgs,
    ParsedInitializeInterestBearingMintInstruction,
    InitializeMetadataPointerInstruction,
    InitializeMetadataPointerInput,
    InitializeMetadataPointerInstructionData,
    InitializeMetadataPointerInstructionDataArgs,
    ParsedInitializeMetadataPointerInstruction,
    Token2022InitializeMintInstruction,
    Token2022InitializeMintInput,
    Token2022InitializeMintInstructionData,
    Token2022InitializeMintInstructionDataArgs,
    ParsedToken2022InitializeMintInstruction,
    Token2022InitializeMint2Instruction,
    Token2022InitializeMint2Input,
    Token2022InitializeMint2InstructionData,
    Token2022InitializeMint2InstructionDataArgs,
    ParsedToken2022InitializeMint2Instruction,
    InitializeMintCloseAuthorityInstruction,
    InitializeMintCloseAuthorityInput,
    InitializeMintCloseAuthorityInstructionData,
    InitializeMintCloseAuthorityInstructionDataArgs,
    ParsedInitializeMintCloseAuthorityInstruction,
    Token2022InitializeMultisigInstruction,
    Token2022InitializeMultisigInput,
    Token2022InitializeMultisigInstructionData,
    Token2022InitializeMultisigInstructionDataArgs,
    ParsedToken2022InitializeMultisigInstruction,
    Token2022InitializeMultisig2Instruction,
    Token2022InitializeMultisig2Input,
    Token2022InitializeMultisig2InstructionData,
    Token2022InitializeMultisig2InstructionDataArgs,
    ParsedToken2022InitializeMultisig2Instruction,
    InitializeNonTransferableMintInstruction,
    InitializeNonTransferableMintInput,
    InitializeNonTransferableMintInstructionData,
    InitializeNonTransferableMintInstructionDataArgs,
    ParsedInitializeNonTransferableMintInstruction,
    InitializePausableConfigInstruction,
    InitializePausableConfigInput,
    InitializePausableConfigInstructionData,
    InitializePausableConfigInstructionDataArgs,
    ParsedInitializePausableConfigInstruction,
    InitializePermanentDelegateInstruction,
    InitializePermanentDelegateInput,
    InitializePermanentDelegateInstructionData,
    InitializePermanentDelegateInstructionDataArgs,
    ParsedInitializePermanentDelegateInstruction,
    InitializePermissionedBurnInstruction,
    InitializePermissionedBurnInput,
    InitializePermissionedBurnInstructionData,
    InitializePermissionedBurnInstructionDataArgs,
    ParsedInitializePermissionedBurnInstruction,
    InitializeScaledUiAmountMintInstruction,
    InitializeScaledUiAmountMintInput,
    InitializeScaledUiAmountMintInstructionData,
    InitializeScaledUiAmountMintInstructionDataArgs,
    ParsedInitializeScaledUiAmountMintInstruction,
    InitializeTokenGroupInstruction,
    InitializeTokenGroupInput,
    InitializeTokenGroupInstructionData,
    InitializeTokenGroupInstructionDataArgs,
    ParsedInitializeTokenGroupInstruction,
    InitializeTokenGroupMemberInstruction,
    InitializeTokenGroupMemberInput,
    InitializeTokenGroupMemberInstructionData,
    InitializeTokenGroupMemberInstructionDataArgs,
    ParsedInitializeTokenGroupMemberInstruction,
    InitializeTokenMetadataInstruction,
    InitializeTokenMetadataInput,
    InitializeTokenMetadataInstructionData,
    InitializeTokenMetadataInstructionDataArgs,
    ParsedInitializeTokenMetadataInstruction,
    InitializeTransferFeeConfigInstruction,
    InitializeTransferFeeConfigInput,
    InitializeTransferFeeConfigInstructionData,
    InitializeTransferFeeConfigInstructionDataArgs,
    ParsedInitializeTransferFeeConfigInstruction,
    InitializeTransferHookInstruction,
    InitializeTransferHookInput,
    InitializeTransferHookInstructionData,
    InitializeTransferHookInstructionDataArgs,
    ParsedInitializeTransferHookInstruction,
    Token2022MintToInstruction,
    Token2022MintToInput,
    Token2022MintToInstructionData,
    Token2022MintToInstructionDataArgs,
    ParsedToken2022MintToInstruction,
    Token2022MintToCheckedInstruction,
    Token2022MintToCheckedInput,
    Token2022MintToCheckedInstructionData,
    Token2022MintToCheckedInstructionDataArgs,
    ParsedToken2022MintToCheckedInstruction,
    PauseInstruction,
    PauseInput,
    PauseInstructionData,
    PauseInstructionDataArgs,
    ParsedPauseInstruction,
    PermissionedBurnInstruction,
    PermissionedBurnInput,
    PermissionedBurnInstructionData,
    PermissionedBurnInstructionDataArgs,
    ParsedPermissionedBurnInstruction,
    PermissionedBurnCheckedInstruction,
    PermissionedBurnCheckedInput,
    PermissionedBurnCheckedInstructionData,
    PermissionedBurnCheckedInstructionDataArgs,
    ParsedPermissionedBurnCheckedInstruction,
    ReallocateInstruction,
    ReallocateInput,
    ReallocateInstructionData,
    ReallocateInstructionDataArgs,
    ParsedReallocateInstruction,
    RemoveTokenMetadataKeyInstruction,
    RemoveTokenMetadataKeyInput,
    RemoveTokenMetadataKeyInstructionData,
    RemoveTokenMetadataKeyInstructionDataArgs,
    ParsedRemoveTokenMetadataKeyInstruction,
    ResumeInstruction,
    ResumeInput,
    ResumeInstructionData,
    ResumeInstructionDataArgs,
    ParsedResumeInstruction,
    Token2022RevokeInstruction,
    Token2022RevokeInput,
    Token2022RevokeInstructionData,
    Token2022RevokeInstructionDataArgs,
    ParsedToken2022RevokeInstruction,
    Token2022SetAuthorityInstruction,
    Token2022SetAuthorityInput,
    Token2022SetAuthorityInstructionData,
    Token2022SetAuthorityInstructionDataArgs,
    ParsedToken2022SetAuthorityInstruction,
    SetTransferFeeInstruction,
    SetTransferFeeInput,
    SetTransferFeeInstructionData,
    SetTransferFeeInstructionDataArgs,
    ParsedSetTransferFeeInstruction,
    Token2022SyncNativeInstruction,
    Token2022SyncNativeInput,
    Token2022SyncNativeInstructionData,
    Token2022SyncNativeInstructionDataArgs,
    ParsedToken2022SyncNativeInstruction,
    Token2022ThawAccountInstruction,
    Token2022ThawAccountInput,
    Token2022ThawAccountInstructionData,
    Token2022ThawAccountInstructionDataArgs,
    ParsedToken2022ThawAccountInstruction,
    Token2022TransferInstruction,
    Token2022TransferInput,
    Token2022TransferInstructionData,
    Token2022TransferInstructionDataArgs,
    ParsedToken2022TransferInstruction,
    Token2022TransferCheckedInstruction,
    Token2022TransferCheckedInput,
    Token2022TransferCheckedInstructionData,
    Token2022TransferCheckedInstructionDataArgs,
    ParsedToken2022TransferCheckedInstruction,
    TransferCheckedWithFeeInstruction,
    TransferCheckedWithFeeInput,
    TransferCheckedWithFeeInstructionData,
    TransferCheckedWithFeeInstructionDataArgs,
    ParsedTransferCheckedWithFeeInstruction,
    Token2022UiAmountToAmountInstruction,
    Token2022UiAmountToAmountInput,
    Token2022UiAmountToAmountInstructionData,
    Token2022UiAmountToAmountInstructionDataArgs,
    ParsedToken2022UiAmountToAmountInstruction,
    UnwrapLamportsInstruction,
    UnwrapLamportsInput,
    UnwrapLamportsInstructionData,
    UnwrapLamportsInstructionDataArgs,
    ParsedUnwrapLamportsInstruction,
    UpdateConfidentialTransferMintInstruction,
    UpdateConfidentialTransferMintInput,
    UpdateConfidentialTransferMintInstructionData,
    UpdateConfidentialTransferMintInstructionDataArgs,
    ParsedUpdateConfidentialTransferMintInstruction,
    UpdateDefaultAccountStateInstruction,
    UpdateDefaultAccountStateInput,
    UpdateDefaultAccountStateInstructionData,
    UpdateDefaultAccountStateInstructionDataArgs,
    ParsedUpdateDefaultAccountStateInstruction,
    UpdateGroupMemberPointerInstruction,
    UpdateGroupMemberPointerInput,
    UpdateGroupMemberPointerInstructionData,
    UpdateGroupMemberPointerInstructionDataArgs,
    ParsedUpdateGroupMemberPointerInstruction,
    UpdateGroupPointerInstruction,
    UpdateGroupPointerInput,
    UpdateGroupPointerInstructionData,
    UpdateGroupPointerInstructionDataArgs,
    ParsedUpdateGroupPointerInstruction,
    UpdateMetadataPointerInstruction,
    UpdateMetadataPointerInput,
    UpdateMetadataPointerInstructionData,
    UpdateMetadataPointerInstructionDataArgs,
    ParsedUpdateMetadataPointerInstruction,
    UpdateMultiplierScaledUiMintInstruction,
    UpdateMultiplierScaledUiMintInput,
    UpdateMultiplierScaledUiMintInstructionData,
    UpdateMultiplierScaledUiMintInstructionDataArgs,
    ParsedUpdateMultiplierScaledUiMintInstruction,
    UpdateRateInterestBearingMintInstruction,
    UpdateRateInterestBearingMintInput,
    UpdateRateInterestBearingMintInstructionData,
    UpdateRateInterestBearingMintInstructionDataArgs,
    ParsedUpdateRateInterestBearingMintInstruction,
    UpdateTokenGroupMaxSizeInstruction,
    UpdateTokenGroupMaxSizeInput,
    UpdateTokenGroupMaxSizeInstructionData,
    UpdateTokenGroupMaxSizeInstructionDataArgs,
    ParsedUpdateTokenGroupMaxSizeInstruction,
    UpdateTokenGroupUpdateAuthorityInstruction,
    UpdateTokenGroupUpdateAuthorityInput,
    UpdateTokenGroupUpdateAuthorityInstructionData,
    UpdateTokenGroupUpdateAuthorityInstructionDataArgs,
    ParsedUpdateTokenGroupUpdateAuthorityInstruction,
    UpdateTokenMetadataFieldInstruction,
    UpdateTokenMetadataFieldInput,
    UpdateTokenMetadataFieldInstructionData,
    UpdateTokenMetadataFieldInstructionDataArgs,
    ParsedUpdateTokenMetadataFieldInstruction,
    UpdateTokenMetadataUpdateAuthorityInstruction,
    UpdateTokenMetadataUpdateAuthorityInput,
    UpdateTokenMetadataUpdateAuthorityInstructionData,
    UpdateTokenMetadataUpdateAuthorityInstructionDataArgs,
    ParsedUpdateTokenMetadataUpdateAuthorityInstruction,
    UpdateTransferHookInstruction,
    UpdateTransferHookInput,
    UpdateTransferHookInstructionData,
    UpdateTransferHookInstructionDataArgs,
    ParsedUpdateTransferHookInstruction,
    WithdrawExcessLamportsInstruction,
    WithdrawExcessLamportsInput,
    WithdrawExcessLamportsInstructionData,
    WithdrawExcessLamportsInstructionDataArgs,
    ParsedWithdrawExcessLamportsInstruction,
    WithdrawWithheldTokensFromAccountsInstruction,
    WithdrawWithheldTokensFromAccountsInput,
    WithdrawWithheldTokensFromAccountsInstructionData,
    WithdrawWithheldTokensFromAccountsInstructionDataArgs,
    ParsedWithdrawWithheldTokensFromAccountsInstruction,
    WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction,
    WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInput,
    WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionData,
    WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionDataArgs,
    ParsedWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction,
    WithdrawWithheldTokensFromMintInstruction,
    WithdrawWithheldTokensFromMintInput,
    WithdrawWithheldTokensFromMintInstructionData,
    WithdrawWithheldTokensFromMintInstructionDataArgs,
    ParsedWithdrawWithheldTokensFromMintInstruction,
    WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction,
    WithdrawWithheldTokensFromMintForConfidentialTransferFeeInput,
    WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionData,
    WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataArgs,
    ParsedWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction,
};

export {
    TOKEN_2022_PROGRAM_ADDRESS,

    // Account codecs
    getMintEncoder as getToken2022MintEncoder,
    getMintDecoder as getToken2022MintDecoder,
    getMintCodec as getToken2022MintCodec,
    decodeMint as decodeToken2022Mint,
    fetchMint as fetchToken2022Mint,
    fetchMaybeMint as fetchMaybeToken2022Mint,
    fetchAllMint as fetchAllToken2022Mint,
    fetchAllMaybeMint as fetchAllMaybeToken2022Mint,
    getTokenEncoder as getToken2022TokenEncoder,
    getTokenDecoder as getToken2022TokenDecoder,
    getTokenCodec as getToken2022TokenCodec,
    decodeToken as decodeToken2022Token,
    fetchToken as fetchToken2022Token,
    fetchMaybeToken as fetchMaybeToken2022Token,
    fetchAllToken as fetchAllToken2022Token,
    fetchAllMaybeToken as fetchAllMaybeToken2022Token,
    getMultisigEncoder as getToken2022MultisigEncoder,
    getMultisigDecoder as getToken2022MultisigDecoder,
    getMultisigCodec as getToken2022MultisigCodec,
    decodeMultisig as decodeToken2022Multisig,
    fetchMultisig as fetchToken2022Multisig,
    fetchMaybeMultisig as fetchMaybeToken2022Multisig,
    fetchAllMultisig as fetchAllToken2022Multisig,
    fetchAllMaybeMultisig as fetchAllMaybeToken2022Multisig,

    // Extension codecs
    getExtensionEncoder,
    getExtensionDecoder,
    getExtensionCodec,
    extension,
    isExtension,
    getTransferFeeEncoder,
    getTransferFeeDecoder,
    getTransferFeeCodec,
    getExtensionTypeEncoder,
    getExtensionTypeDecoder,
    getExtensionTypeCodec,

    // Enum value exports
    AccountState as Token2022AccountState,
    AuthorityType as Token2022AuthorityType,
    ExtensionType,

    // Instruction builders
    getAmountToUiAmountInstruction as getToken2022AmountToUiAmountInstruction,
    getApplyConfidentialPendingBalanceInstruction,
    getApproveInstruction as getToken2022ApproveInstruction,
    getApproveCheckedInstruction as getToken2022ApproveCheckedInstruction,
    getApproveConfidentialTransferAccountInstruction,
    getBurnInstruction as getToken2022BurnInstruction,
    getBurnCheckedInstruction as getToken2022BurnCheckedInstruction,
    getCloseAccountInstruction as getToken2022CloseAccountInstruction,
    getConfidentialDepositInstruction,
    getConfidentialTransferInstruction,
    getConfidentialTransferWithFeeInstruction,
    getConfidentialWithdrawInstruction,
    getConfigureConfidentialTransferAccountInstruction,
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
    getFreezeAccountInstruction as getToken2022FreezeAccountInstruction,
    getGetAccountDataSizeInstruction as getToken2022GetAccountDataSizeInstruction,
    getHarvestWithheldTokensToMintInstruction,
    getHarvestWithheldTokensToMintForConfidentialTransferFeeInstruction,
    getInitializeAccountInstruction as getToken2022InitializeAccountInstruction,
    getInitializeAccount2Instruction as getToken2022InitializeAccount2Instruction,
    getInitializeAccount3Instruction as getToken2022InitializeAccount3Instruction,
    getInitializeConfidentialTransferFeeInstruction,
    getInitializeConfidentialTransferMintInstruction,
    getInitializeDefaultAccountStateInstruction,
    getInitializeGroupMemberPointerInstruction,
    getInitializeGroupPointerInstruction,
    getInitializeImmutableOwnerInstruction as getToken2022InitializeImmutableOwnerInstruction,
    getInitializeInterestBearingMintInstruction,
    getInitializeMetadataPointerInstruction,
    getInitializeMintInstruction as getToken2022InitializeMintInstruction,
    getInitializeMint2Instruction as getToken2022InitializeMint2Instruction,
    getInitializeMintCloseAuthorityInstruction,
    getInitializeMultisigInstruction as getToken2022InitializeMultisigInstruction,
    getInitializeMultisig2Instruction as getToken2022InitializeMultisig2Instruction,
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
    getMintToInstruction as getToken2022MintToInstruction,
    getMintToCheckedInstruction as getToken2022MintToCheckedInstruction,
    getPauseInstruction,
    getPermissionedBurnInstruction,
    getPermissionedBurnCheckedInstruction,
    getReallocateInstruction,
    getRemoveTokenMetadataKeyInstruction,
    getResumeInstruction,
    getRevokeInstruction as getToken2022RevokeInstruction,
    getSetAuthorityInstruction as getToken2022SetAuthorityInstruction,
    getSetTransferFeeInstruction,
    getSyncNativeInstruction as getToken2022SyncNativeInstruction,
    getThawAccountInstruction as getToken2022ThawAccountInstruction,
    getTransferInstruction as getToken2022TransferInstruction,
    getTransferCheckedInstruction as getToken2022TransferCheckedInstruction,
    getTransferCheckedWithFeeInstruction,
    getUiAmountToAmountInstruction as getToken2022UiAmountToAmountInstruction,
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

    // Instruction parsers
    parseAmountToUiAmountInstruction as parseToken2022AmountToUiAmountInstruction,
    parseApplyConfidentialPendingBalanceInstruction,
    parseApproveInstruction as parseToken2022ApproveInstruction,
    parseApproveCheckedInstruction as parseToken2022ApproveCheckedInstruction,
    parseApproveConfidentialTransferAccountInstruction,
    parseBurnInstruction as parseToken2022BurnInstruction,
    parseBurnCheckedInstruction as parseToken2022BurnCheckedInstruction,
    parseCloseAccountInstruction as parseToken2022CloseAccountInstruction,
    parseConfidentialDepositInstruction,
    parseConfidentialTransferInstruction,
    parseConfidentialTransferWithFeeInstruction,
    parseConfidentialWithdrawInstruction,
    parseConfigureConfidentialTransferAccountInstruction,
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
    parseFreezeAccountInstruction as parseToken2022FreezeAccountInstruction,
    parseGetAccountDataSizeInstruction as parseToken2022GetAccountDataSizeInstruction,
    parseHarvestWithheldTokensToMintInstruction,
    parseHarvestWithheldTokensToMintForConfidentialTransferFeeInstruction,
    parseInitializeAccountInstruction as parseToken2022InitializeAccountInstruction,
    parseInitializeAccount2Instruction as parseToken2022InitializeAccount2Instruction,
    parseInitializeAccount3Instruction as parseToken2022InitializeAccount3Instruction,
    parseInitializeConfidentialTransferFeeInstruction,
    parseInitializeConfidentialTransferMintInstruction,
    parseInitializeDefaultAccountStateInstruction,
    parseInitializeGroupMemberPointerInstruction,
    parseInitializeGroupPointerInstruction,
    parseInitializeImmutableOwnerInstruction as parseToken2022InitializeImmutableOwnerInstruction,
    parseInitializeInterestBearingMintInstruction,
    parseInitializeMetadataPointerInstruction,
    parseInitializeMintInstruction as parseToken2022InitializeMintInstruction,
    parseInitializeMint2Instruction as parseToken2022InitializeMint2Instruction,
    parseInitializeMintCloseAuthorityInstruction,
    parseInitializeMultisigInstruction as parseToken2022InitializeMultisigInstruction,
    parseInitializeMultisig2Instruction as parseToken2022InitializeMultisig2Instruction,
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
    parseMintToInstruction as parseToken2022MintToInstruction,
    parseMintToCheckedInstruction as parseToken2022MintToCheckedInstruction,
    parsePauseInstruction,
    parsePermissionedBurnInstruction,
    parsePermissionedBurnCheckedInstruction,
    parseReallocateInstruction,
    parseRemoveTokenMetadataKeyInstruction,
    parseResumeInstruction,
    parseRevokeInstruction as parseToken2022RevokeInstruction,
    parseSetAuthorityInstruction as parseToken2022SetAuthorityInstruction,
    parseSetTransferFeeInstruction,
    parseSyncNativeInstruction as parseToken2022SyncNativeInstruction,
    parseThawAccountInstruction as parseToken2022ThawAccountInstruction,
    parseTransferInstruction as parseToken2022TransferInstruction,
    parseTransferCheckedInstruction as parseToken2022TransferCheckedInstruction,
    parseTransferCheckedWithFeeInstruction,
    parseUiAmountToAmountInstruction as parseToken2022UiAmountToAmountInstruction,
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
    getAmountToUiAmountInstructionDataEncoder as getToken2022AmountToUiAmountInstructionDataEncoder,
    getAmountToUiAmountInstructionDataDecoder as getToken2022AmountToUiAmountInstructionDataDecoder,
    getAmountToUiAmountInstructionDataCodec as getToken2022AmountToUiAmountInstructionDataCodec,
    getApplyConfidentialPendingBalanceInstructionDataEncoder,
    getApplyConfidentialPendingBalanceInstructionDataDecoder,
    getApplyConfidentialPendingBalanceInstructionDataCodec,
    getApproveInstructionDataEncoder as getToken2022ApproveInstructionDataEncoder,
    getApproveInstructionDataDecoder as getToken2022ApproveInstructionDataDecoder,
    getApproveInstructionDataCodec as getToken2022ApproveInstructionDataCodec,
    getApproveCheckedInstructionDataEncoder as getToken2022ApproveCheckedInstructionDataEncoder,
    getApproveCheckedInstructionDataDecoder as getToken2022ApproveCheckedInstructionDataDecoder,
    getApproveCheckedInstructionDataCodec as getToken2022ApproveCheckedInstructionDataCodec,
    getApproveConfidentialTransferAccountInstructionDataEncoder,
    getApproveConfidentialTransferAccountInstructionDataDecoder,
    getApproveConfidentialTransferAccountInstructionDataCodec,
    getBurnInstructionDataEncoder as getToken2022BurnInstructionDataEncoder,
    getBurnInstructionDataDecoder as getToken2022BurnInstructionDataDecoder,
    getBurnInstructionDataCodec as getToken2022BurnInstructionDataCodec,
    getBurnCheckedInstructionDataEncoder as getToken2022BurnCheckedInstructionDataEncoder,
    getBurnCheckedInstructionDataDecoder as getToken2022BurnCheckedInstructionDataDecoder,
    getBurnCheckedInstructionDataCodec as getToken2022BurnCheckedInstructionDataCodec,
    getCloseAccountInstructionDataEncoder as getToken2022CloseAccountInstructionDataEncoder,
    getCloseAccountInstructionDataDecoder as getToken2022CloseAccountInstructionDataDecoder,
    getCloseAccountInstructionDataCodec as getToken2022CloseAccountInstructionDataCodec,
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
    getFreezeAccountInstructionDataEncoder as getToken2022FreezeAccountInstructionDataEncoder,
    getFreezeAccountInstructionDataDecoder as getToken2022FreezeAccountInstructionDataDecoder,
    getFreezeAccountInstructionDataCodec as getToken2022FreezeAccountInstructionDataCodec,
    getGetAccountDataSizeInstructionDataEncoder as getToken2022GetAccountDataSizeInstructionDataEncoder,
    getGetAccountDataSizeInstructionDataDecoder as getToken2022GetAccountDataSizeInstructionDataDecoder,
    getGetAccountDataSizeInstructionDataCodec as getToken2022GetAccountDataSizeInstructionDataCodec,
    getHarvestWithheldTokensToMintInstructionDataEncoder,
    getHarvestWithheldTokensToMintInstructionDataDecoder,
    getHarvestWithheldTokensToMintInstructionDataCodec,
    getHarvestWithheldTokensToMintForConfidentialTransferFeeInstructionDataEncoder,
    getHarvestWithheldTokensToMintForConfidentialTransferFeeInstructionDataDecoder,
    getHarvestWithheldTokensToMintForConfidentialTransferFeeInstructionDataCodec,
    getInitializeAccountInstructionDataEncoder as getToken2022InitializeAccountInstructionDataEncoder,
    getInitializeAccountInstructionDataDecoder as getToken2022InitializeAccountInstructionDataDecoder,
    getInitializeAccountInstructionDataCodec as getToken2022InitializeAccountInstructionDataCodec,
    getInitializeAccount2InstructionDataEncoder as getToken2022InitializeAccount2InstructionDataEncoder,
    getInitializeAccount2InstructionDataDecoder as getToken2022InitializeAccount2InstructionDataDecoder,
    getInitializeAccount2InstructionDataCodec as getToken2022InitializeAccount2InstructionDataCodec,
    getInitializeAccount3InstructionDataEncoder as getToken2022InitializeAccount3InstructionDataEncoder,
    getInitializeAccount3InstructionDataDecoder as getToken2022InitializeAccount3InstructionDataDecoder,
    getInitializeAccount3InstructionDataCodec as getToken2022InitializeAccount3InstructionDataCodec,
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
    getInitializeImmutableOwnerInstructionDataEncoder as getToken2022InitializeImmutableOwnerInstructionDataEncoder,
    getInitializeImmutableOwnerInstructionDataDecoder as getToken2022InitializeImmutableOwnerInstructionDataDecoder,
    getInitializeImmutableOwnerInstructionDataCodec as getToken2022InitializeImmutableOwnerInstructionDataCodec,
    getInitializeInterestBearingMintInstructionDataEncoder,
    getInitializeInterestBearingMintInstructionDataDecoder,
    getInitializeInterestBearingMintInstructionDataCodec,
    getInitializeMetadataPointerInstructionDataEncoder,
    getInitializeMetadataPointerInstructionDataDecoder,
    getInitializeMetadataPointerInstructionDataCodec,
    getInitializeMintInstructionDataEncoder as getToken2022InitializeMintInstructionDataEncoder,
    getInitializeMintInstructionDataDecoder as getToken2022InitializeMintInstructionDataDecoder,
    getInitializeMintInstructionDataCodec as getToken2022InitializeMintInstructionDataCodec,
    getInitializeMint2InstructionDataEncoder as getToken2022InitializeMint2InstructionDataEncoder,
    getInitializeMint2InstructionDataDecoder as getToken2022InitializeMint2InstructionDataDecoder,
    getInitializeMint2InstructionDataCodec as getToken2022InitializeMint2InstructionDataCodec,
    getInitializeMintCloseAuthorityInstructionDataEncoder,
    getInitializeMintCloseAuthorityInstructionDataDecoder,
    getInitializeMintCloseAuthorityInstructionDataCodec,
    getInitializeMultisigInstructionDataEncoder as getToken2022InitializeMultisigInstructionDataEncoder,
    getInitializeMultisigInstructionDataDecoder as getToken2022InitializeMultisigInstructionDataDecoder,
    getInitializeMultisigInstructionDataCodec as getToken2022InitializeMultisigInstructionDataCodec,
    getInitializeMultisig2InstructionDataEncoder as getToken2022InitializeMultisig2InstructionDataEncoder,
    getInitializeMultisig2InstructionDataDecoder as getToken2022InitializeMultisig2InstructionDataDecoder,
    getInitializeMultisig2InstructionDataCodec as getToken2022InitializeMultisig2InstructionDataCodec,
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
    getMintToInstructionDataEncoder as getToken2022MintToInstructionDataEncoder,
    getMintToInstructionDataDecoder as getToken2022MintToInstructionDataDecoder,
    getMintToInstructionDataCodec as getToken2022MintToInstructionDataCodec,
    getMintToCheckedInstructionDataEncoder as getToken2022MintToCheckedInstructionDataEncoder,
    getMintToCheckedInstructionDataDecoder as getToken2022MintToCheckedInstructionDataDecoder,
    getMintToCheckedInstructionDataCodec as getToken2022MintToCheckedInstructionDataCodec,
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
    getRemoveTokenMetadataKeyInstructionDataEncoder,
    getRemoveTokenMetadataKeyInstructionDataDecoder,
    getRemoveTokenMetadataKeyInstructionDataCodec,
    getResumeInstructionDataEncoder,
    getResumeInstructionDataDecoder,
    getResumeInstructionDataCodec,
    getRevokeInstructionDataEncoder as getToken2022RevokeInstructionDataEncoder,
    getRevokeInstructionDataDecoder as getToken2022RevokeInstructionDataDecoder,
    getRevokeInstructionDataCodec as getToken2022RevokeInstructionDataCodec,
    getSetAuthorityInstructionDataEncoder as getToken2022SetAuthorityInstructionDataEncoder,
    getSetAuthorityInstructionDataDecoder as getToken2022SetAuthorityInstructionDataDecoder,
    getSetAuthorityInstructionDataCodec as getToken2022SetAuthorityInstructionDataCodec,
    getSetTransferFeeInstructionDataEncoder,
    getSetTransferFeeInstructionDataDecoder,
    getSetTransferFeeInstructionDataCodec,
    getSyncNativeInstructionDataEncoder as getToken2022SyncNativeInstructionDataEncoder,
    getSyncNativeInstructionDataDecoder as getToken2022SyncNativeInstructionDataDecoder,
    getSyncNativeInstructionDataCodec as getToken2022SyncNativeInstructionDataCodec,
    getThawAccountInstructionDataEncoder as getToken2022ThawAccountInstructionDataEncoder,
    getThawAccountInstructionDataDecoder as getToken2022ThawAccountInstructionDataDecoder,
    getThawAccountInstructionDataCodec as getToken2022ThawAccountInstructionDataCodec,
    getTransferInstructionDataEncoder as getToken2022TransferInstructionDataEncoder,
    getTransferInstructionDataDecoder as getToken2022TransferInstructionDataDecoder,
    getTransferInstructionDataCodec as getToken2022TransferInstructionDataCodec,
    getTransferCheckedInstructionDataEncoder as getToken2022TransferCheckedInstructionDataEncoder,
    getTransferCheckedInstructionDataDecoder as getToken2022TransferCheckedInstructionDataDecoder,
    getTransferCheckedInstructionDataCodec as getToken2022TransferCheckedInstructionDataCodec,
    getTransferCheckedWithFeeInstructionDataEncoder,
    getTransferCheckedWithFeeInstructionDataDecoder,
    getTransferCheckedWithFeeInstructionDataCodec,
    getUiAmountToAmountInstructionDataEncoder as getToken2022UiAmountToAmountInstructionDataEncoder,
    getUiAmountToAmountInstructionDataDecoder as getToken2022UiAmountToAmountInstructionDataDecoder,
    getUiAmountToAmountInstructionDataCodec as getToken2022UiAmountToAmountInstructionDataCodec,
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
} from '@solana-program/token-2022';

// ============================================================================
// Prettified Account Types
// ============================================================================

/** Flattened Token-2022 Mint account data (includes extensions). */
export type PrettyToken2022Mint = Prettify<Token2022Mint>;
export type PrettyToken2022MintArgs = Prettify<Token2022MintArgs>;
export type PrettyToken2022TokenAccount = Prettify<Token2022TokenAccount>;
export type PrettyToken2022TokenAccountArgs = Prettify<Token2022TokenAccountArgs>;
export type PrettyToken2022Multisig = Prettify<Token2022Multisig>;
export type PrettyToken2022MultisigArgs = Prettify<Token2022MultisigArgs>;

/** Flattened extension sub-types. */
export type PrettyTransferFee = Prettify<TransferFee>;
export type PrettyTransferFeeArgs = Prettify<TransferFeeArgs>;
export type PrettyDecryptableBalance = Prettify<DecryptableBalance>;
export type PrettyDecryptableBalanceArgs = Prettify<DecryptableBalanceArgs>;
export type PrettyEncryptedBalance = Prettify<EncryptedBalance>;
export type PrettyEncryptedBalanceArgs = Prettify<EncryptedBalanceArgs>;

// ============================================================================
// Prettified Instruction Types
// ============================================================================

// --- Token2022AmountToUiAmount ---

export type PrettyToken2022AmountToUiAmountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022AmountToUiAmountInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyToken2022AmountToUiAmountInput<TAccountMint extends string = string> = Prettify<Token2022AmountToUiAmountInput<TAccountMint>>;
export type PrettyToken2022AmountToUiAmountInstructionData = Prettify<Token2022AmountToUiAmountInstructionData>;
export type PrettyToken2022AmountToUiAmountInstructionDataArgs = Prettify<Token2022AmountToUiAmountInstructionDataArgs>;
export type PrettyParsedToken2022AmountToUiAmountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022AmountToUiAmountInstruction<TProgram, TAccountMetas>>;

// --- ApplyConfidentialPendingBalance ---

export type PrettyApplyConfidentialPendingBalanceInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountToken extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<ApplyConfidentialPendingBalanceInstruction<TProgram, TAccountToken, TAccountAuthority, TRemainingAccounts>>;
export type PrettyApplyConfidentialPendingBalanceInput<TAccountToken extends string = string, TAccountAuthority extends string = string> = Prettify<ApplyConfidentialPendingBalanceInput<TAccountToken, TAccountAuthority>>;
export type PrettyApplyConfidentialPendingBalanceInstructionData = Prettify<ApplyConfidentialPendingBalanceInstructionData>;
export type PrettyApplyConfidentialPendingBalanceInstructionDataArgs = Prettify<ApplyConfidentialPendingBalanceInstructionDataArgs>;
export type PrettyParsedApplyConfidentialPendingBalanceInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedApplyConfidentialPendingBalanceInstruction<TProgram, TAccountMetas>>;

// --- Token2022Approve ---

export type PrettyToken2022ApproveInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountSource extends string | AccountMeta<string> = string, TAccountDelegate extends string | AccountMeta<string> = string, TAccountOwner extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022ApproveInstruction<TProgram, TAccountSource, TAccountDelegate, TAccountOwner, TRemainingAccounts>>;
export type PrettyToken2022ApproveInput<TAccountSource extends string = string, TAccountDelegate extends string = string, TAccountOwner extends string = string> = Prettify<Token2022ApproveInput<TAccountSource, TAccountDelegate, TAccountOwner>>;
export type PrettyToken2022ApproveInstructionData = Prettify<Token2022ApproveInstructionData>;
export type PrettyToken2022ApproveInstructionDataArgs = Prettify<Token2022ApproveInstructionDataArgs>;
export type PrettyParsedToken2022ApproveInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022ApproveInstruction<TProgram, TAccountMetas>>;

// --- Token2022ApproveChecked ---

export type PrettyToken2022ApproveCheckedInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountSource extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountDelegate extends string | AccountMeta<string> = string, TAccountOwner extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022ApproveCheckedInstruction<TProgram, TAccountSource, TAccountMint, TAccountDelegate, TAccountOwner, TRemainingAccounts>>;
export type PrettyToken2022ApproveCheckedInput<TAccountSource extends string = string, TAccountMint extends string = string, TAccountDelegate extends string = string, TAccountOwner extends string = string> = Prettify<Token2022ApproveCheckedInput<TAccountSource, TAccountMint, TAccountDelegate, TAccountOwner>>;
export type PrettyToken2022ApproveCheckedInstructionData = Prettify<Token2022ApproveCheckedInstructionData>;
export type PrettyToken2022ApproveCheckedInstructionDataArgs = Prettify<Token2022ApproveCheckedInstructionDataArgs>;
export type PrettyParsedToken2022ApproveCheckedInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022ApproveCheckedInstruction<TProgram, TAccountMetas>>;

// --- ApproveConfidentialTransferAccount ---

export type PrettyApproveConfidentialTransferAccountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountToken extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<ApproveConfidentialTransferAccountInstruction<TProgram, TAccountToken, TAccountMint, TAccountAuthority, TRemainingAccounts>>;
export type PrettyApproveConfidentialTransferAccountInput<TAccountToken extends string = string, TAccountMint extends string = string, TAccountAuthority extends string = string> = Prettify<ApproveConfidentialTransferAccountInput<TAccountToken, TAccountMint, TAccountAuthority>>;
export type PrettyApproveConfidentialTransferAccountInstructionData = Prettify<ApproveConfidentialTransferAccountInstructionData>;
export type PrettyApproveConfidentialTransferAccountInstructionDataArgs = Prettify<ApproveConfidentialTransferAccountInstructionDataArgs>;
export type PrettyParsedApproveConfidentialTransferAccountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedApproveConfidentialTransferAccountInstruction<TProgram, TAccountMetas>>;

// --- Token2022Burn ---

export type PrettyToken2022BurnInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountAccount extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022BurnInstruction<TProgram, TAccountAccount, TAccountMint, TAccountAuthority, TRemainingAccounts>>;
export type PrettyToken2022BurnInput<TAccountAccount extends string = string, TAccountMint extends string = string, TAccountAuthority extends string = string> = Prettify<Token2022BurnInput<TAccountAccount, TAccountMint, TAccountAuthority>>;
export type PrettyToken2022BurnInstructionData = Prettify<Token2022BurnInstructionData>;
export type PrettyToken2022BurnInstructionDataArgs = Prettify<Token2022BurnInstructionDataArgs>;
export type PrettyParsedToken2022BurnInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022BurnInstruction<TProgram, TAccountMetas>>;

// --- Token2022BurnChecked ---

export type PrettyToken2022BurnCheckedInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountAccount extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022BurnCheckedInstruction<TProgram, TAccountAccount, TAccountMint, TAccountAuthority, TRemainingAccounts>>;
export type PrettyToken2022BurnCheckedInput<TAccountAccount extends string = string, TAccountMint extends string = string, TAccountAuthority extends string = string> = Prettify<Token2022BurnCheckedInput<TAccountAccount, TAccountMint, TAccountAuthority>>;
export type PrettyToken2022BurnCheckedInstructionData = Prettify<Token2022BurnCheckedInstructionData>;
export type PrettyToken2022BurnCheckedInstructionDataArgs = Prettify<Token2022BurnCheckedInstructionDataArgs>;
export type PrettyParsedToken2022BurnCheckedInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022BurnCheckedInstruction<TProgram, TAccountMetas>>;

// --- Token2022CloseAccount ---

export type PrettyToken2022CloseAccountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountAccount extends string | AccountMeta<string> = string, TAccountDestination extends string | AccountMeta<string> = string, TAccountOwner extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022CloseAccountInstruction<TProgram, TAccountAccount, TAccountDestination, TAccountOwner, TRemainingAccounts>>;
export type PrettyToken2022CloseAccountInput<TAccountAccount extends string = string, TAccountDestination extends string = string, TAccountOwner extends string = string> = Prettify<Token2022CloseAccountInput<TAccountAccount, TAccountDestination, TAccountOwner>>;
export type PrettyToken2022CloseAccountInstructionData = Prettify<Token2022CloseAccountInstructionData>;
export type PrettyToken2022CloseAccountInstructionDataArgs = Prettify<Token2022CloseAccountInstructionDataArgs>;
export type PrettyParsedToken2022CloseAccountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022CloseAccountInstruction<TProgram, TAccountMetas>>;

// --- ConfidentialDeposit ---

export type PrettyConfidentialDepositInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountToken extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<ConfidentialDepositInstruction<TProgram, TAccountToken, TAccountMint, TAccountAuthority, TRemainingAccounts>>;
export type PrettyConfidentialDepositInput<TAccountToken extends string = string, TAccountMint extends string = string, TAccountAuthority extends string = string> = Prettify<ConfidentialDepositInput<TAccountToken, TAccountMint, TAccountAuthority>>;
export type PrettyConfidentialDepositInstructionData = Prettify<ConfidentialDepositInstructionData>;
export type PrettyConfidentialDepositInstructionDataArgs = Prettify<ConfidentialDepositInstructionDataArgs>;
export type PrettyParsedConfidentialDepositInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedConfidentialDepositInstruction<TProgram, TAccountMetas>>;

// --- ConfidentialTransfer ---

export type PrettyConfidentialTransferInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountSourceToken extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountDestinationToken extends string | AccountMeta<string> = string, TAccountInstructionsSysvar extends string | AccountMeta<string> = string, TAccountEqualityRecord extends string | AccountMeta<string> = string, TAccountCiphertextValidityRecord extends string | AccountMeta<string> = string, TAccountRangeRecord extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<ConfidentialTransferInstruction<TProgram, TAccountSourceToken, TAccountMint, TAccountDestinationToken, TAccountInstructionsSysvar, TAccountEqualityRecord, TAccountCiphertextValidityRecord, TAccountRangeRecord, TAccountAuthority, TRemainingAccounts>>;
export type PrettyConfidentialTransferInput<TAccountSourceToken extends string = string, TAccountMint extends string = string, TAccountDestinationToken extends string = string, TAccountInstructionsSysvar extends string = string, TAccountEqualityRecord extends string = string, TAccountCiphertextValidityRecord extends string = string, TAccountRangeRecord extends string = string, TAccountAuthority extends string = string> = Prettify<ConfidentialTransferInput<TAccountSourceToken, TAccountMint, TAccountDestinationToken, TAccountInstructionsSysvar, TAccountEqualityRecord, TAccountCiphertextValidityRecord, TAccountRangeRecord, TAccountAuthority>>;
export type PrettyConfidentialTransferInstructionData = Prettify<ConfidentialTransferInstructionData>;
export type PrettyConfidentialTransferInstructionDataArgs = Prettify<ConfidentialTransferInstructionDataArgs>;
export type PrettyParsedConfidentialTransferInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedConfidentialTransferInstruction<TProgram, TAccountMetas>>;

// --- ConfidentialTransferWithFee ---

export type PrettyConfidentialTransferWithFeeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountSourceToken extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountDestinationToken extends string | AccountMeta<string> = string, TAccountInstructionsSysvar extends string | AccountMeta<string> = string, TAccountEqualityRecord extends string | AccountMeta<string> = string, TAccountTransferAmountCiphertextValidityRecord extends string | AccountMeta<string> = string, TAccountFeeSigmaRecord extends string | AccountMeta<string> = string, TAccountFeeCiphertextValidityRecord extends string | AccountMeta<string> = string, TAccountRangeRecord extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<ConfidentialTransferWithFeeInstruction<TProgram, TAccountSourceToken, TAccountMint, TAccountDestinationToken, TAccountInstructionsSysvar, TAccountEqualityRecord, TAccountTransferAmountCiphertextValidityRecord, TAccountFeeSigmaRecord, TAccountFeeCiphertextValidityRecord, TAccountRangeRecord, TAccountAuthority, TRemainingAccounts>>;
export type PrettyConfidentialTransferWithFeeInput<TAccountSourceToken extends string = string, TAccountMint extends string = string, TAccountDestinationToken extends string = string, TAccountInstructionsSysvar extends string = string, TAccountEqualityRecord extends string = string, TAccountTransferAmountCiphertextValidityRecord extends string = string, TAccountFeeSigmaRecord extends string = string, TAccountFeeCiphertextValidityRecord extends string = string, TAccountRangeRecord extends string = string, TAccountAuthority extends string = string> = Prettify<ConfidentialTransferWithFeeInput<TAccountSourceToken, TAccountMint, TAccountDestinationToken, TAccountInstructionsSysvar, TAccountEqualityRecord, TAccountTransferAmountCiphertextValidityRecord, TAccountFeeSigmaRecord, TAccountFeeCiphertextValidityRecord, TAccountRangeRecord, TAccountAuthority>>;
export type PrettyConfidentialTransferWithFeeInstructionData = Prettify<ConfidentialTransferWithFeeInstructionData>;
export type PrettyConfidentialTransferWithFeeInstructionDataArgs = Prettify<ConfidentialTransferWithFeeInstructionDataArgs>;
export type PrettyParsedConfidentialTransferWithFeeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedConfidentialTransferWithFeeInstruction<TProgram, TAccountMetas>>;

// --- ConfidentialWithdraw ---

export type PrettyConfidentialWithdrawInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountToken extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountInstructionsSysvar extends string | AccountMeta<string> = string, TAccountEqualityRecord extends string | AccountMeta<string> = string, TAccountRangeRecord extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<ConfidentialWithdrawInstruction<TProgram, TAccountToken, TAccountMint, TAccountInstructionsSysvar, TAccountEqualityRecord, TAccountRangeRecord, TAccountAuthority, TRemainingAccounts>>;
export type PrettyConfidentialWithdrawInput<TAccountToken extends string = string, TAccountMint extends string = string, TAccountInstructionsSysvar extends string = string, TAccountEqualityRecord extends string = string, TAccountRangeRecord extends string = string, TAccountAuthority extends string = string> = Prettify<ConfidentialWithdrawInput<TAccountToken, TAccountMint, TAccountInstructionsSysvar, TAccountEqualityRecord, TAccountRangeRecord, TAccountAuthority>>;
export type PrettyConfidentialWithdrawInstructionData = Prettify<ConfidentialWithdrawInstructionData>;
export type PrettyConfidentialWithdrawInstructionDataArgs = Prettify<ConfidentialWithdrawInstructionDataArgs>;
export type PrettyParsedConfidentialWithdrawInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedConfidentialWithdrawInstruction<TProgram, TAccountMetas>>;

// --- ConfigureConfidentialTransferAccount ---

export type PrettyConfigureConfidentialTransferAccountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountToken extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountInstructionsSysvarOrContextState extends string | AccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111', TAccountRecord extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<ConfigureConfidentialTransferAccountInstruction<TProgram, TAccountToken, TAccountMint, TAccountInstructionsSysvarOrContextState, TAccountRecord, TAccountAuthority, TRemainingAccounts>>;
export type PrettyConfigureConfidentialTransferAccountInput<TAccountToken extends string = string, TAccountMint extends string = string, TAccountInstructionsSysvarOrContextState extends string = string, TAccountRecord extends string = string, TAccountAuthority extends string = string> = Prettify<ConfigureConfidentialTransferAccountInput<TAccountToken, TAccountMint, TAccountInstructionsSysvarOrContextState, TAccountRecord, TAccountAuthority>>;
export type PrettyConfigureConfidentialTransferAccountInstructionData = Prettify<ConfigureConfidentialTransferAccountInstructionData>;
export type PrettyConfigureConfidentialTransferAccountInstructionDataArgs = Prettify<ConfigureConfidentialTransferAccountInstructionDataArgs>;
export type PrettyParsedConfigureConfidentialTransferAccountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedConfigureConfidentialTransferAccountInstruction<TProgram, TAccountMetas>>;

// --- CreateNativeMint ---

export type PrettyCreateNativeMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountPayer extends string | AccountMeta<string> = string, TAccountNativeMint extends string | AccountMeta<string> = string, TAccountSystemProgram extends string | AccountMeta<string> = '11111111111111111111111111111111', TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<CreateNativeMintInstruction<TProgram, TAccountPayer, TAccountNativeMint, TAccountSystemProgram, TRemainingAccounts>>;
export type PrettyCreateNativeMintInput<TAccountPayer extends string = string, TAccountNativeMint extends string = string, TAccountSystemProgram extends string = string> = Prettify<CreateNativeMintInput<TAccountPayer, TAccountNativeMint, TAccountSystemProgram>>;
export type PrettyCreateNativeMintInstructionData = Prettify<CreateNativeMintInstructionData>;
export type PrettyCreateNativeMintInstructionDataArgs = Prettify<CreateNativeMintInstructionDataArgs>;
export type PrettyParsedCreateNativeMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedCreateNativeMintInstruction<TProgram, TAccountMetas>>;

// --- DisableConfidentialCredits ---

export type PrettyDisableConfidentialCreditsInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountToken extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<DisableConfidentialCreditsInstruction<TProgram, TAccountToken, TAccountAuthority, TRemainingAccounts>>;
export type PrettyDisableConfidentialCreditsInput<TAccountToken extends string = string, TAccountAuthority extends string = string> = Prettify<DisableConfidentialCreditsInput<TAccountToken, TAccountAuthority>>;
export type PrettyDisableConfidentialCreditsInstructionData = Prettify<DisableConfidentialCreditsInstructionData>;
export type PrettyDisableConfidentialCreditsInstructionDataArgs = Prettify<DisableConfidentialCreditsInstructionDataArgs>;
export type PrettyParsedDisableConfidentialCreditsInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedDisableConfidentialCreditsInstruction<TProgram, TAccountMetas>>;

// --- DisableCpiGuard ---

export type PrettyDisableCpiGuardInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountToken extends string | AccountMeta<string> = string, TAccountOwner extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<DisableCpiGuardInstruction<TProgram, TAccountToken, TAccountOwner, TRemainingAccounts>>;
export type PrettyDisableCpiGuardInput<TAccountToken extends string = string, TAccountOwner extends string = string> = Prettify<DisableCpiGuardInput<TAccountToken, TAccountOwner>>;
export type PrettyDisableCpiGuardInstructionData = Prettify<DisableCpiGuardInstructionData>;
export type PrettyDisableCpiGuardInstructionDataArgs = Prettify<DisableCpiGuardInstructionDataArgs>;
export type PrettyParsedDisableCpiGuardInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedDisableCpiGuardInstruction<TProgram, TAccountMetas>>;

// --- DisableHarvestToMint ---

export type PrettyDisableHarvestToMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<DisableHarvestToMintInstruction<TProgram, TAccountMint, TAccountAuthority, TRemainingAccounts>>;
export type PrettyDisableHarvestToMintInput<TAccountMint extends string = string, TAccountAuthority extends string = string> = Prettify<DisableHarvestToMintInput<TAccountMint, TAccountAuthority>>;
export type PrettyDisableHarvestToMintInstructionData = Prettify<DisableHarvestToMintInstructionData>;
export type PrettyDisableHarvestToMintInstructionDataArgs = Prettify<DisableHarvestToMintInstructionDataArgs>;
export type PrettyParsedDisableHarvestToMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedDisableHarvestToMintInstruction<TProgram, TAccountMetas>>;

// --- DisableMemoTransfers ---

export type PrettyDisableMemoTransfersInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountToken extends string | AccountMeta<string> = string, TAccountOwner extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<DisableMemoTransfersInstruction<TProgram, TAccountToken, TAccountOwner, TRemainingAccounts>>;
export type PrettyDisableMemoTransfersInput<TAccountToken extends string = string, TAccountOwner extends string = string> = Prettify<DisableMemoTransfersInput<TAccountToken, TAccountOwner>>;
export type PrettyDisableMemoTransfersInstructionData = Prettify<DisableMemoTransfersInstructionData>;
export type PrettyDisableMemoTransfersInstructionDataArgs = Prettify<DisableMemoTransfersInstructionDataArgs>;
export type PrettyParsedDisableMemoTransfersInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedDisableMemoTransfersInstruction<TProgram, TAccountMetas>>;

// --- DisableNonConfidentialCredits ---

export type PrettyDisableNonConfidentialCreditsInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountToken extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<DisableNonConfidentialCreditsInstruction<TProgram, TAccountToken, TAccountAuthority, TRemainingAccounts>>;
export type PrettyDisableNonConfidentialCreditsInput<TAccountToken extends string = string, TAccountAuthority extends string = string> = Prettify<DisableNonConfidentialCreditsInput<TAccountToken, TAccountAuthority>>;
export type PrettyDisableNonConfidentialCreditsInstructionData = Prettify<DisableNonConfidentialCreditsInstructionData>;
export type PrettyDisableNonConfidentialCreditsInstructionDataArgs = Prettify<DisableNonConfidentialCreditsInstructionDataArgs>;
export type PrettyParsedDisableNonConfidentialCreditsInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedDisableNonConfidentialCreditsInstruction<TProgram, TAccountMetas>>;

// --- EmitTokenMetadata ---

export type PrettyEmitTokenMetadataInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetadata extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<EmitTokenMetadataInstruction<TProgram, TAccountMetadata, TRemainingAccounts>>;
export type PrettyEmitTokenMetadataInput<TAccountMetadata extends string = string> = Prettify<EmitTokenMetadataInput<TAccountMetadata>>;
export type PrettyEmitTokenMetadataInstructionData = Prettify<EmitTokenMetadataInstructionData>;
export type PrettyEmitTokenMetadataInstructionDataArgs = Prettify<EmitTokenMetadataInstructionDataArgs>;
export type PrettyParsedEmitTokenMetadataInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedEmitTokenMetadataInstruction<TProgram, TAccountMetas>>;

// --- EmptyConfidentialTransferAccount ---

export type PrettyEmptyConfidentialTransferAccountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountToken extends string | AccountMeta<string> = string, TAccountInstructionsSysvarOrContextState extends string | AccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111', TAccountRecord extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<EmptyConfidentialTransferAccountInstruction<TProgram, TAccountToken, TAccountInstructionsSysvarOrContextState, TAccountRecord, TAccountAuthority, TRemainingAccounts>>;
export type PrettyEmptyConfidentialTransferAccountInput<TAccountToken extends string = string, TAccountInstructionsSysvarOrContextState extends string = string, TAccountRecord extends string = string, TAccountAuthority extends string = string> = Prettify<EmptyConfidentialTransferAccountInput<TAccountToken, TAccountInstructionsSysvarOrContextState, TAccountRecord, TAccountAuthority>>;
export type PrettyEmptyConfidentialTransferAccountInstructionData = Prettify<EmptyConfidentialTransferAccountInstructionData>;
export type PrettyEmptyConfidentialTransferAccountInstructionDataArgs = Prettify<EmptyConfidentialTransferAccountInstructionDataArgs>;
export type PrettyParsedEmptyConfidentialTransferAccountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedEmptyConfidentialTransferAccountInstruction<TProgram, TAccountMetas>>;

// --- EnableConfidentialCredits ---

export type PrettyEnableConfidentialCreditsInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountToken extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<EnableConfidentialCreditsInstruction<TProgram, TAccountToken, TAccountAuthority, TRemainingAccounts>>;
export type PrettyEnableConfidentialCreditsInput<TAccountToken extends string = string, TAccountAuthority extends string = string> = Prettify<EnableConfidentialCreditsInput<TAccountToken, TAccountAuthority>>;
export type PrettyEnableConfidentialCreditsInstructionData = Prettify<EnableConfidentialCreditsInstructionData>;
export type PrettyEnableConfidentialCreditsInstructionDataArgs = Prettify<EnableConfidentialCreditsInstructionDataArgs>;
export type PrettyParsedEnableConfidentialCreditsInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedEnableConfidentialCreditsInstruction<TProgram, TAccountMetas>>;

// --- EnableCpiGuard ---

export type PrettyEnableCpiGuardInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountToken extends string | AccountMeta<string> = string, TAccountOwner extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<EnableCpiGuardInstruction<TProgram, TAccountToken, TAccountOwner, TRemainingAccounts>>;
export type PrettyEnableCpiGuardInput<TAccountToken extends string = string, TAccountOwner extends string = string> = Prettify<EnableCpiGuardInput<TAccountToken, TAccountOwner>>;
export type PrettyEnableCpiGuardInstructionData = Prettify<EnableCpiGuardInstructionData>;
export type PrettyEnableCpiGuardInstructionDataArgs = Prettify<EnableCpiGuardInstructionDataArgs>;
export type PrettyParsedEnableCpiGuardInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedEnableCpiGuardInstruction<TProgram, TAccountMetas>>;

// --- EnableHarvestToMint ---

export type PrettyEnableHarvestToMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<EnableHarvestToMintInstruction<TProgram, TAccountMint, TAccountAuthority, TRemainingAccounts>>;
export type PrettyEnableHarvestToMintInput<TAccountMint extends string = string, TAccountAuthority extends string = string> = Prettify<EnableHarvestToMintInput<TAccountMint, TAccountAuthority>>;
export type PrettyEnableHarvestToMintInstructionData = Prettify<EnableHarvestToMintInstructionData>;
export type PrettyEnableHarvestToMintInstructionDataArgs = Prettify<EnableHarvestToMintInstructionDataArgs>;
export type PrettyParsedEnableHarvestToMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedEnableHarvestToMintInstruction<TProgram, TAccountMetas>>;

// --- EnableMemoTransfers ---

export type PrettyEnableMemoTransfersInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountToken extends string | AccountMeta<string> = string, TAccountOwner extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<EnableMemoTransfersInstruction<TProgram, TAccountToken, TAccountOwner, TRemainingAccounts>>;
export type PrettyEnableMemoTransfersInput<TAccountToken extends string = string, TAccountOwner extends string = string> = Prettify<EnableMemoTransfersInput<TAccountToken, TAccountOwner>>;
export type PrettyEnableMemoTransfersInstructionData = Prettify<EnableMemoTransfersInstructionData>;
export type PrettyEnableMemoTransfersInstructionDataArgs = Prettify<EnableMemoTransfersInstructionDataArgs>;
export type PrettyParsedEnableMemoTransfersInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedEnableMemoTransfersInstruction<TProgram, TAccountMetas>>;

// --- EnableNonConfidentialCredits ---

export type PrettyEnableNonConfidentialCreditsInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountToken extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<EnableNonConfidentialCreditsInstruction<TProgram, TAccountToken, TAccountAuthority, TRemainingAccounts>>;
export type PrettyEnableNonConfidentialCreditsInput<TAccountToken extends string = string, TAccountAuthority extends string = string> = Prettify<EnableNonConfidentialCreditsInput<TAccountToken, TAccountAuthority>>;
export type PrettyEnableNonConfidentialCreditsInstructionData = Prettify<EnableNonConfidentialCreditsInstructionData>;
export type PrettyEnableNonConfidentialCreditsInstructionDataArgs = Prettify<EnableNonConfidentialCreditsInstructionDataArgs>;
export type PrettyParsedEnableNonConfidentialCreditsInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedEnableNonConfidentialCreditsInstruction<TProgram, TAccountMetas>>;

// --- Token2022FreezeAccount ---

export type PrettyToken2022FreezeAccountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountAccount extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountOwner extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022FreezeAccountInstruction<TProgram, TAccountAccount, TAccountMint, TAccountOwner, TRemainingAccounts>>;
export type PrettyToken2022FreezeAccountInput<TAccountAccount extends string = string, TAccountMint extends string = string, TAccountOwner extends string = string> = Prettify<Token2022FreezeAccountInput<TAccountAccount, TAccountMint, TAccountOwner>>;
export type PrettyToken2022FreezeAccountInstructionData = Prettify<Token2022FreezeAccountInstructionData>;
export type PrettyToken2022FreezeAccountInstructionDataArgs = Prettify<Token2022FreezeAccountInstructionDataArgs>;
export type PrettyParsedToken2022FreezeAccountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022FreezeAccountInstruction<TProgram, TAccountMetas>>;

// --- Token2022GetAccountDataSize ---

export type PrettyToken2022GetAccountDataSizeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022GetAccountDataSizeInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyToken2022GetAccountDataSizeInput<TAccountMint extends string = string> = Prettify<Token2022GetAccountDataSizeInput<TAccountMint>>;
export type PrettyToken2022GetAccountDataSizeInstructionData = Prettify<Token2022GetAccountDataSizeInstructionData>;
export type PrettyToken2022GetAccountDataSizeInstructionDataArgs = Prettify<Token2022GetAccountDataSizeInstructionDataArgs>;
export type PrettyParsedToken2022GetAccountDataSizeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022GetAccountDataSizeInstruction<TProgram, TAccountMetas>>;

// --- HarvestWithheldTokensToMint ---

export type PrettyHarvestWithheldTokensToMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<HarvestWithheldTokensToMintInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyHarvestWithheldTokensToMintInput<TAccountMint extends string = string> = Prettify<HarvestWithheldTokensToMintInput<TAccountMint>>;
export type PrettyHarvestWithheldTokensToMintInstructionData = Prettify<HarvestWithheldTokensToMintInstructionData>;
export type PrettyHarvestWithheldTokensToMintInstructionDataArgs = Prettify<HarvestWithheldTokensToMintInstructionDataArgs>;
export type PrettyParsedHarvestWithheldTokensToMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedHarvestWithheldTokensToMintInstruction<TProgram, TAccountMetas>>;

// --- HarvestWithheldTokensToMintForConfidentialTransferFee ---

export type PrettyHarvestWithheldTokensToMintForConfidentialTransferFeeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<HarvestWithheldTokensToMintForConfidentialTransferFeeInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyHarvestWithheldTokensToMintForConfidentialTransferFeeInput<TAccountMint extends string = string> = Prettify<HarvestWithheldTokensToMintForConfidentialTransferFeeInput<TAccountMint>>;
export type PrettyHarvestWithheldTokensToMintForConfidentialTransferFeeInstructionData = Prettify<HarvestWithheldTokensToMintForConfidentialTransferFeeInstructionData>;
export type PrettyHarvestWithheldTokensToMintForConfidentialTransferFeeInstructionDataArgs = Prettify<HarvestWithheldTokensToMintForConfidentialTransferFeeInstructionDataArgs>;
export type PrettyParsedHarvestWithheldTokensToMintForConfidentialTransferFeeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedHarvestWithheldTokensToMintForConfidentialTransferFeeInstruction<TProgram, TAccountMetas>>;

// --- Token2022InitializeAccount ---

export type PrettyToken2022InitializeAccountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountAccount extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountOwner extends string | AccountMeta<string> = string, TAccountRent extends string | AccountMeta<string> = 'SysvarRent111111111111111111111111111111111', TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022InitializeAccountInstruction<TProgram, TAccountAccount, TAccountMint, TAccountOwner, TAccountRent, TRemainingAccounts>>;
export type PrettyToken2022InitializeAccountInput<TAccountAccount extends string = string, TAccountMint extends string = string, TAccountOwner extends string = string, TAccountRent extends string = string> = Prettify<Token2022InitializeAccountInput<TAccountAccount, TAccountMint, TAccountOwner, TAccountRent>>;
export type PrettyToken2022InitializeAccountInstructionData = Prettify<Token2022InitializeAccountInstructionData>;
export type PrettyToken2022InitializeAccountInstructionDataArgs = Prettify<Token2022InitializeAccountInstructionDataArgs>;
export type PrettyParsedToken2022InitializeAccountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022InitializeAccountInstruction<TProgram, TAccountMetas>>;

// --- Token2022InitializeAccount2 ---

export type PrettyToken2022InitializeAccount2Instruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountAccount extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountRent extends string | AccountMeta<string> = 'SysvarRent111111111111111111111111111111111', TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022InitializeAccount2Instruction<TProgram, TAccountAccount, TAccountMint, TAccountRent, TRemainingAccounts>>;
export type PrettyToken2022InitializeAccount2Input<TAccountAccount extends string = string, TAccountMint extends string = string, TAccountRent extends string = string> = Prettify<Token2022InitializeAccount2Input<TAccountAccount, TAccountMint, TAccountRent>>;
export type PrettyToken2022InitializeAccount2InstructionData = Prettify<Token2022InitializeAccount2InstructionData>;
export type PrettyToken2022InitializeAccount2InstructionDataArgs = Prettify<Token2022InitializeAccount2InstructionDataArgs>;
export type PrettyParsedToken2022InitializeAccount2Instruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022InitializeAccount2Instruction<TProgram, TAccountMetas>>;

// --- Token2022InitializeAccount3 ---

export type PrettyToken2022InitializeAccount3Instruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountAccount extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022InitializeAccount3Instruction<TProgram, TAccountAccount, TAccountMint, TRemainingAccounts>>;
export type PrettyToken2022InitializeAccount3Input<TAccountAccount extends string = string, TAccountMint extends string = string> = Prettify<Token2022InitializeAccount3Input<TAccountAccount, TAccountMint>>;
export type PrettyToken2022InitializeAccount3InstructionData = Prettify<Token2022InitializeAccount3InstructionData>;
export type PrettyToken2022InitializeAccount3InstructionDataArgs = Prettify<Token2022InitializeAccount3InstructionDataArgs>;
export type PrettyParsedToken2022InitializeAccount3Instruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022InitializeAccount3Instruction<TProgram, TAccountMetas>>;

// --- InitializeConfidentialTransferFee ---

export type PrettyInitializeConfidentialTransferFeeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializeConfidentialTransferFeeInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyInitializeConfidentialTransferFeeInput<TAccountMint extends string = string> = Prettify<InitializeConfidentialTransferFeeInput<TAccountMint>>;
export type PrettyInitializeConfidentialTransferFeeInstructionData = Prettify<InitializeConfidentialTransferFeeInstructionData>;
export type PrettyInitializeConfidentialTransferFeeInstructionDataArgs = Prettify<InitializeConfidentialTransferFeeInstructionDataArgs>;
export type PrettyParsedInitializeConfidentialTransferFeeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializeConfidentialTransferFeeInstruction<TProgram, TAccountMetas>>;

// --- InitializeConfidentialTransferMint ---

export type PrettyInitializeConfidentialTransferMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializeConfidentialTransferMintInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyInitializeConfidentialTransferMintInput<TAccountMint extends string = string> = Prettify<InitializeConfidentialTransferMintInput<TAccountMint>>;
export type PrettyInitializeConfidentialTransferMintInstructionData = Prettify<InitializeConfidentialTransferMintInstructionData>;
export type PrettyInitializeConfidentialTransferMintInstructionDataArgs = Prettify<InitializeConfidentialTransferMintInstructionDataArgs>;
export type PrettyParsedInitializeConfidentialTransferMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializeConfidentialTransferMintInstruction<TProgram, TAccountMetas>>;

// --- InitializeDefaultAccountState ---

export type PrettyInitializeDefaultAccountStateInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializeDefaultAccountStateInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyInitializeDefaultAccountStateInput<TAccountMint extends string = string> = Prettify<InitializeDefaultAccountStateInput<TAccountMint>>;
export type PrettyInitializeDefaultAccountStateInstructionData = Prettify<InitializeDefaultAccountStateInstructionData>;
export type PrettyInitializeDefaultAccountStateInstructionDataArgs = Prettify<InitializeDefaultAccountStateInstructionDataArgs>;
export type PrettyParsedInitializeDefaultAccountStateInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializeDefaultAccountStateInstruction<TProgram, TAccountMetas>>;

// --- InitializeGroupMemberPointer ---

export type PrettyInitializeGroupMemberPointerInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializeGroupMemberPointerInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyInitializeGroupMemberPointerInput<TAccountMint extends string = string> = Prettify<InitializeGroupMemberPointerInput<TAccountMint>>;
export type PrettyInitializeGroupMemberPointerInstructionData = Prettify<InitializeGroupMemberPointerInstructionData>;
export type PrettyInitializeGroupMemberPointerInstructionDataArgs = Prettify<InitializeGroupMemberPointerInstructionDataArgs>;
export type PrettyParsedInitializeGroupMemberPointerInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializeGroupMemberPointerInstruction<TProgram, TAccountMetas>>;

// --- InitializeGroupPointer ---

export type PrettyInitializeGroupPointerInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializeGroupPointerInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyInitializeGroupPointerInput<TAccountMint extends string = string> = Prettify<InitializeGroupPointerInput<TAccountMint>>;
export type PrettyInitializeGroupPointerInstructionData = Prettify<InitializeGroupPointerInstructionData>;
export type PrettyInitializeGroupPointerInstructionDataArgs = Prettify<InitializeGroupPointerInstructionDataArgs>;
export type PrettyParsedInitializeGroupPointerInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializeGroupPointerInstruction<TProgram, TAccountMetas>>;

// --- Token2022InitializeImmutableOwner ---

export type PrettyToken2022InitializeImmutableOwnerInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountAccount extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022InitializeImmutableOwnerInstruction<TProgram, TAccountAccount, TRemainingAccounts>>;
export type PrettyToken2022InitializeImmutableOwnerInput<TAccountAccount extends string = string> = Prettify<Token2022InitializeImmutableOwnerInput<TAccountAccount>>;
export type PrettyToken2022InitializeImmutableOwnerInstructionData = Prettify<Token2022InitializeImmutableOwnerInstructionData>;
export type PrettyToken2022InitializeImmutableOwnerInstructionDataArgs = Prettify<Token2022InitializeImmutableOwnerInstructionDataArgs>;
export type PrettyParsedToken2022InitializeImmutableOwnerInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022InitializeImmutableOwnerInstruction<TProgram, TAccountMetas>>;

// --- InitializeInterestBearingMint ---

export type PrettyInitializeInterestBearingMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializeInterestBearingMintInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyInitializeInterestBearingMintInput<TAccountMint extends string = string> = Prettify<InitializeInterestBearingMintInput<TAccountMint>>;
export type PrettyInitializeInterestBearingMintInstructionData = Prettify<InitializeInterestBearingMintInstructionData>;
export type PrettyInitializeInterestBearingMintInstructionDataArgs = Prettify<InitializeInterestBearingMintInstructionDataArgs>;
export type PrettyParsedInitializeInterestBearingMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializeInterestBearingMintInstruction<TProgram, TAccountMetas>>;

// --- InitializeMetadataPointer ---

export type PrettyInitializeMetadataPointerInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializeMetadataPointerInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyInitializeMetadataPointerInput<TAccountMint extends string = string> = Prettify<InitializeMetadataPointerInput<TAccountMint>>;
export type PrettyInitializeMetadataPointerInstructionData = Prettify<InitializeMetadataPointerInstructionData>;
export type PrettyInitializeMetadataPointerInstructionDataArgs = Prettify<InitializeMetadataPointerInstructionDataArgs>;
export type PrettyParsedInitializeMetadataPointerInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializeMetadataPointerInstruction<TProgram, TAccountMetas>>;

// --- Token2022InitializeMint ---

export type PrettyToken2022InitializeMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountRent extends string | AccountMeta<string> = 'SysvarRent111111111111111111111111111111111', TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022InitializeMintInstruction<TProgram, TAccountMint, TAccountRent, TRemainingAccounts>>;
export type PrettyToken2022InitializeMintInput<TAccountMint extends string = string, TAccountRent extends string = string> = Prettify<Token2022InitializeMintInput<TAccountMint, TAccountRent>>;
export type PrettyToken2022InitializeMintInstructionData = Prettify<Token2022InitializeMintInstructionData>;
export type PrettyToken2022InitializeMintInstructionDataArgs = Prettify<Token2022InitializeMintInstructionDataArgs>;
export type PrettyParsedToken2022InitializeMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022InitializeMintInstruction<TProgram, TAccountMetas>>;

// --- Token2022InitializeMint2 ---

export type PrettyToken2022InitializeMint2Instruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022InitializeMint2Instruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyToken2022InitializeMint2Input<TAccountMint extends string = string> = Prettify<Token2022InitializeMint2Input<TAccountMint>>;
export type PrettyToken2022InitializeMint2InstructionData = Prettify<Token2022InitializeMint2InstructionData>;
export type PrettyToken2022InitializeMint2InstructionDataArgs = Prettify<Token2022InitializeMint2InstructionDataArgs>;
export type PrettyParsedToken2022InitializeMint2Instruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022InitializeMint2Instruction<TProgram, TAccountMetas>>;

// --- InitializeMintCloseAuthority ---

export type PrettyInitializeMintCloseAuthorityInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializeMintCloseAuthorityInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyInitializeMintCloseAuthorityInput<TAccountMint extends string = string> = Prettify<InitializeMintCloseAuthorityInput<TAccountMint>>;
export type PrettyInitializeMintCloseAuthorityInstructionData = Prettify<InitializeMintCloseAuthorityInstructionData>;
export type PrettyInitializeMintCloseAuthorityInstructionDataArgs = Prettify<InitializeMintCloseAuthorityInstructionDataArgs>;
export type PrettyParsedInitializeMintCloseAuthorityInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializeMintCloseAuthorityInstruction<TProgram, TAccountMetas>>;

// --- Token2022InitializeMultisig ---

export type PrettyToken2022InitializeMultisigInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMultisig extends string | AccountMeta<string> = string, TAccountRent extends string | AccountMeta<string> = 'SysvarRent111111111111111111111111111111111', TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022InitializeMultisigInstruction<TProgram, TAccountMultisig, TAccountRent, TRemainingAccounts>>;
export type PrettyToken2022InitializeMultisigInput<TAccountMultisig extends string = string, TAccountRent extends string = string> = Prettify<Token2022InitializeMultisigInput<TAccountMultisig, TAccountRent>>;
export type PrettyToken2022InitializeMultisigInstructionData = Prettify<Token2022InitializeMultisigInstructionData>;
export type PrettyToken2022InitializeMultisigInstructionDataArgs = Prettify<Token2022InitializeMultisigInstructionDataArgs>;
export type PrettyParsedToken2022InitializeMultisigInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022InitializeMultisigInstruction<TProgram, TAccountMetas>>;

// --- Token2022InitializeMultisig2 ---

export type PrettyToken2022InitializeMultisig2Instruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMultisig extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022InitializeMultisig2Instruction<TProgram, TAccountMultisig, TRemainingAccounts>>;
export type PrettyToken2022InitializeMultisig2Input<TAccountMultisig extends string = string> = Prettify<Token2022InitializeMultisig2Input<TAccountMultisig>>;
export type PrettyToken2022InitializeMultisig2InstructionData = Prettify<Token2022InitializeMultisig2InstructionData>;
export type PrettyToken2022InitializeMultisig2InstructionDataArgs = Prettify<Token2022InitializeMultisig2InstructionDataArgs>;
export type PrettyParsedToken2022InitializeMultisig2Instruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022InitializeMultisig2Instruction<TProgram, TAccountMetas>>;

// --- InitializeNonTransferableMint ---

export type PrettyInitializeNonTransferableMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializeNonTransferableMintInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyInitializeNonTransferableMintInput<TAccountMint extends string = string> = Prettify<InitializeNonTransferableMintInput<TAccountMint>>;
export type PrettyInitializeNonTransferableMintInstructionData = Prettify<InitializeNonTransferableMintInstructionData>;
export type PrettyInitializeNonTransferableMintInstructionDataArgs = Prettify<InitializeNonTransferableMintInstructionDataArgs>;
export type PrettyParsedInitializeNonTransferableMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializeNonTransferableMintInstruction<TProgram, TAccountMetas>>;

// --- InitializePausableConfig ---

export type PrettyInitializePausableConfigInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializePausableConfigInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyInitializePausableConfigInput<TAccountMint extends string = string> = Prettify<InitializePausableConfigInput<TAccountMint>>;
export type PrettyInitializePausableConfigInstructionData = Prettify<InitializePausableConfigInstructionData>;
export type PrettyInitializePausableConfigInstructionDataArgs = Prettify<InitializePausableConfigInstructionDataArgs>;
export type PrettyParsedInitializePausableConfigInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializePausableConfigInstruction<TProgram, TAccountMetas>>;

// --- InitializePermanentDelegate ---

export type PrettyInitializePermanentDelegateInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializePermanentDelegateInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyInitializePermanentDelegateInput<TAccountMint extends string = string> = Prettify<InitializePermanentDelegateInput<TAccountMint>>;
export type PrettyInitializePermanentDelegateInstructionData = Prettify<InitializePermanentDelegateInstructionData>;
export type PrettyInitializePermanentDelegateInstructionDataArgs = Prettify<InitializePermanentDelegateInstructionDataArgs>;
export type PrettyParsedInitializePermanentDelegateInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializePermanentDelegateInstruction<TProgram, TAccountMetas>>;

// --- InitializePermissionedBurn ---

export type PrettyInitializePermissionedBurnInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializePermissionedBurnInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyInitializePermissionedBurnInput<TAccountMint extends string = string> = Prettify<InitializePermissionedBurnInput<TAccountMint>>;
export type PrettyInitializePermissionedBurnInstructionData = Prettify<InitializePermissionedBurnInstructionData>;
export type PrettyInitializePermissionedBurnInstructionDataArgs = Prettify<InitializePermissionedBurnInstructionDataArgs>;
export type PrettyParsedInitializePermissionedBurnInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializePermissionedBurnInstruction<TProgram, TAccountMetas>>;

// --- InitializeScaledUiAmountMint ---

export type PrettyInitializeScaledUiAmountMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializeScaledUiAmountMintInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyInitializeScaledUiAmountMintInput<TAccountMint extends string = string> = Prettify<InitializeScaledUiAmountMintInput<TAccountMint>>;
export type PrettyInitializeScaledUiAmountMintInstructionData = Prettify<InitializeScaledUiAmountMintInstructionData>;
export type PrettyInitializeScaledUiAmountMintInstructionDataArgs = Prettify<InitializeScaledUiAmountMintInstructionDataArgs>;
export type PrettyParsedInitializeScaledUiAmountMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializeScaledUiAmountMintInstruction<TProgram, TAccountMetas>>;

// --- InitializeTokenGroup ---

export type PrettyInitializeTokenGroupInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountGroup extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountMintAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializeTokenGroupInstruction<TProgram, TAccountGroup, TAccountMint, TAccountMintAuthority, TRemainingAccounts>>;
export type PrettyInitializeTokenGroupInput<TAccountGroup extends string = string, TAccountMint extends string = string, TAccountMintAuthority extends string = string> = Prettify<InitializeTokenGroupInput<TAccountGroup, TAccountMint, TAccountMintAuthority>>;
export type PrettyInitializeTokenGroupInstructionData = Prettify<InitializeTokenGroupInstructionData>;
export type PrettyInitializeTokenGroupInstructionDataArgs = Prettify<InitializeTokenGroupInstructionDataArgs>;
export type PrettyParsedInitializeTokenGroupInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializeTokenGroupInstruction<TProgram, TAccountMetas>>;

// --- InitializeTokenGroupMember ---

export type PrettyInitializeTokenGroupMemberInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMember extends string | AccountMeta<string> = string, TAccountMemberMint extends string | AccountMeta<string> = string, TAccountMemberMintAuthority extends string | AccountMeta<string> = string, TAccountGroup extends string | AccountMeta<string> = string, TAccountGroupUpdateAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializeTokenGroupMemberInstruction<TProgram, TAccountMember, TAccountMemberMint, TAccountMemberMintAuthority, TAccountGroup, TAccountGroupUpdateAuthority, TRemainingAccounts>>;
export type PrettyInitializeTokenGroupMemberInput<TAccountMember extends string = string, TAccountMemberMint extends string = string, TAccountMemberMintAuthority extends string = string, TAccountGroup extends string = string, TAccountGroupUpdateAuthority extends string = string> = Prettify<InitializeTokenGroupMemberInput<TAccountMember, TAccountMemberMint, TAccountMemberMintAuthority, TAccountGroup, TAccountGroupUpdateAuthority>>;
export type PrettyInitializeTokenGroupMemberInstructionData = Prettify<InitializeTokenGroupMemberInstructionData>;
export type PrettyInitializeTokenGroupMemberInstructionDataArgs = Prettify<InitializeTokenGroupMemberInstructionDataArgs>;
export type PrettyParsedInitializeTokenGroupMemberInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializeTokenGroupMemberInstruction<TProgram, TAccountMetas>>;

// --- InitializeTokenMetadata ---

export type PrettyInitializeTokenMetadataInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetadata extends string | AccountMeta<string> = string, TAccountUpdateAuthority extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountMintAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializeTokenMetadataInstruction<TProgram, TAccountMetadata, TAccountUpdateAuthority, TAccountMint, TAccountMintAuthority, TRemainingAccounts>>;
export type PrettyInitializeTokenMetadataInput<TAccountMetadata extends string = string, TAccountUpdateAuthority extends string = string, TAccountMint extends string = string, TAccountMintAuthority extends string = string> = Prettify<InitializeTokenMetadataInput<TAccountMetadata, TAccountUpdateAuthority, TAccountMint, TAccountMintAuthority>>;
export type PrettyInitializeTokenMetadataInstructionData = Prettify<InitializeTokenMetadataInstructionData>;
export type PrettyInitializeTokenMetadataInstructionDataArgs = Prettify<InitializeTokenMetadataInstructionDataArgs>;
export type PrettyParsedInitializeTokenMetadataInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializeTokenMetadataInstruction<TProgram, TAccountMetas>>;

// --- InitializeTransferFeeConfig ---

export type PrettyInitializeTransferFeeConfigInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializeTransferFeeConfigInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyInitializeTransferFeeConfigInput<TAccountMint extends string = string> = Prettify<InitializeTransferFeeConfigInput<TAccountMint>>;
export type PrettyInitializeTransferFeeConfigInstructionData = Prettify<InitializeTransferFeeConfigInstructionData>;
export type PrettyInitializeTransferFeeConfigInstructionDataArgs = Prettify<InitializeTransferFeeConfigInstructionDataArgs>;
export type PrettyParsedInitializeTransferFeeConfigInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializeTransferFeeConfigInstruction<TProgram, TAccountMetas>>;

// --- InitializeTransferHook ---

export type PrettyInitializeTransferHookInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<InitializeTransferHookInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyInitializeTransferHookInput<TAccountMint extends string = string> = Prettify<InitializeTransferHookInput<TAccountMint>>;
export type PrettyInitializeTransferHookInstructionData = Prettify<InitializeTransferHookInstructionData>;
export type PrettyInitializeTransferHookInstructionDataArgs = Prettify<InitializeTransferHookInstructionDataArgs>;
export type PrettyParsedInitializeTransferHookInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedInitializeTransferHookInstruction<TProgram, TAccountMetas>>;

// --- Token2022MintTo ---

export type PrettyToken2022MintToInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountToken extends string | AccountMeta<string> = string, TAccountMintAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022MintToInstruction<TProgram, TAccountMint, TAccountToken, TAccountMintAuthority, TRemainingAccounts>>;
export type PrettyToken2022MintToInput<TAccountMint extends string = string, TAccountToken extends string = string, TAccountMintAuthority extends string = string> = Prettify<Token2022MintToInput<TAccountMint, TAccountToken, TAccountMintAuthority>>;
export type PrettyToken2022MintToInstructionData = Prettify<Token2022MintToInstructionData>;
export type PrettyToken2022MintToInstructionDataArgs = Prettify<Token2022MintToInstructionDataArgs>;
export type PrettyParsedToken2022MintToInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022MintToInstruction<TProgram, TAccountMetas>>;

// --- Token2022MintToChecked ---

export type PrettyToken2022MintToCheckedInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountToken extends string | AccountMeta<string> = string, TAccountMintAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022MintToCheckedInstruction<TProgram, TAccountMint, TAccountToken, TAccountMintAuthority, TRemainingAccounts>>;
export type PrettyToken2022MintToCheckedInput<TAccountMint extends string = string, TAccountToken extends string = string, TAccountMintAuthority extends string = string> = Prettify<Token2022MintToCheckedInput<TAccountMint, TAccountToken, TAccountMintAuthority>>;
export type PrettyToken2022MintToCheckedInstructionData = Prettify<Token2022MintToCheckedInstructionData>;
export type PrettyToken2022MintToCheckedInstructionDataArgs = Prettify<Token2022MintToCheckedInstructionDataArgs>;
export type PrettyParsedToken2022MintToCheckedInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022MintToCheckedInstruction<TProgram, TAccountMetas>>;

// --- Pause ---

export type PrettyPauseInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<PauseInstruction<TProgram, TAccountMint, TAccountAuthority, TRemainingAccounts>>;
export type PrettyPauseInput<TAccountMint extends string = string, TAccountAuthority extends string = string> = Prettify<PauseInput<TAccountMint, TAccountAuthority>>;
export type PrettyPauseInstructionData = Prettify<PauseInstructionData>;
export type PrettyPauseInstructionDataArgs = Prettify<PauseInstructionDataArgs>;
export type PrettyParsedPauseInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedPauseInstruction<TProgram, TAccountMetas>>;

// --- PermissionedBurn ---

export type PrettyPermissionedBurnInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountAccount extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountPermissionedBurnAuthority extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<PermissionedBurnInstruction<TProgram, TAccountAccount, TAccountMint, TAccountPermissionedBurnAuthority, TAccountAuthority, TRemainingAccounts>>;
export type PrettyPermissionedBurnInput<TAccountAccount extends string = string, TAccountMint extends string = string, TAccountPermissionedBurnAuthority extends string = string, TAccountAuthority extends string = string> = Prettify<PermissionedBurnInput<TAccountAccount, TAccountMint, TAccountPermissionedBurnAuthority, TAccountAuthority>>;
export type PrettyPermissionedBurnInstructionData = Prettify<PermissionedBurnInstructionData>;
export type PrettyPermissionedBurnInstructionDataArgs = Prettify<PermissionedBurnInstructionDataArgs>;
export type PrettyParsedPermissionedBurnInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedPermissionedBurnInstruction<TProgram, TAccountMetas>>;

// --- PermissionedBurnChecked ---

export type PrettyPermissionedBurnCheckedInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountAccount extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountPermissionedBurnAuthority extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<PermissionedBurnCheckedInstruction<TProgram, TAccountAccount, TAccountMint, TAccountPermissionedBurnAuthority, TAccountAuthority, TRemainingAccounts>>;
export type PrettyPermissionedBurnCheckedInput<TAccountAccount extends string = string, TAccountMint extends string = string, TAccountPermissionedBurnAuthority extends string = string, TAccountAuthority extends string = string> = Prettify<PermissionedBurnCheckedInput<TAccountAccount, TAccountMint, TAccountPermissionedBurnAuthority, TAccountAuthority>>;
export type PrettyPermissionedBurnCheckedInstructionData = Prettify<PermissionedBurnCheckedInstructionData>;
export type PrettyPermissionedBurnCheckedInstructionDataArgs = Prettify<PermissionedBurnCheckedInstructionDataArgs>;
export type PrettyParsedPermissionedBurnCheckedInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedPermissionedBurnCheckedInstruction<TProgram, TAccountMetas>>;

// --- Reallocate ---

export type PrettyReallocateInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountToken extends string | AccountMeta<string> = string, TAccountPayer extends string | AccountMeta<string> = string, TAccountSystemProgram extends string | AccountMeta<string> = '11111111111111111111111111111111', TAccountOwner extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<ReallocateInstruction<TProgram, TAccountToken, TAccountPayer, TAccountSystemProgram, TAccountOwner, TRemainingAccounts>>;
export type PrettyReallocateInput<TAccountToken extends string = string, TAccountPayer extends string = string, TAccountSystemProgram extends string = string, TAccountOwner extends string = string> = Prettify<ReallocateInput<TAccountToken, TAccountPayer, TAccountSystemProgram, TAccountOwner>>;
export type PrettyReallocateInstructionData = Prettify<ReallocateInstructionData>;
export type PrettyReallocateInstructionDataArgs = Prettify<ReallocateInstructionDataArgs>;
export type PrettyParsedReallocateInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedReallocateInstruction<TProgram, TAccountMetas>>;

// --- RemoveTokenMetadataKey ---

export type PrettyRemoveTokenMetadataKeyInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetadata extends string | AccountMeta<string> = string, TAccountUpdateAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<RemoveTokenMetadataKeyInstruction<TProgram, TAccountMetadata, TAccountUpdateAuthority, TRemainingAccounts>>;
export type PrettyRemoveTokenMetadataKeyInput<TAccountMetadata extends string = string, TAccountUpdateAuthority extends string = string> = Prettify<RemoveTokenMetadataKeyInput<TAccountMetadata, TAccountUpdateAuthority>>;
export type PrettyRemoveTokenMetadataKeyInstructionData = Prettify<RemoveTokenMetadataKeyInstructionData>;
export type PrettyRemoveTokenMetadataKeyInstructionDataArgs = Prettify<RemoveTokenMetadataKeyInstructionDataArgs>;
export type PrettyParsedRemoveTokenMetadataKeyInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedRemoveTokenMetadataKeyInstruction<TProgram, TAccountMetas>>;

// --- Resume ---

export type PrettyResumeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<ResumeInstruction<TProgram, TAccountMint, TAccountAuthority, TRemainingAccounts>>;
export type PrettyResumeInput<TAccountMint extends string = string, TAccountAuthority extends string = string> = Prettify<ResumeInput<TAccountMint, TAccountAuthority>>;
export type PrettyResumeInstructionData = Prettify<ResumeInstructionData>;
export type PrettyResumeInstructionDataArgs = Prettify<ResumeInstructionDataArgs>;
export type PrettyParsedResumeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedResumeInstruction<TProgram, TAccountMetas>>;

// --- Token2022Revoke ---

export type PrettyToken2022RevokeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountSource extends string | AccountMeta<string> = string, TAccountOwner extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022RevokeInstruction<TProgram, TAccountSource, TAccountOwner, TRemainingAccounts>>;
export type PrettyToken2022RevokeInput<TAccountSource extends string = string, TAccountOwner extends string = string> = Prettify<Token2022RevokeInput<TAccountSource, TAccountOwner>>;
export type PrettyToken2022RevokeInstructionData = Prettify<Token2022RevokeInstructionData>;
export type PrettyToken2022RevokeInstructionDataArgs = Prettify<Token2022RevokeInstructionDataArgs>;
export type PrettyParsedToken2022RevokeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022RevokeInstruction<TProgram, TAccountMetas>>;

// --- Token2022SetAuthority ---

export type PrettyToken2022SetAuthorityInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountOwned extends string | AccountMeta<string> = string, TAccountOwner extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022SetAuthorityInstruction<TProgram, TAccountOwned, TAccountOwner, TRemainingAccounts>>;
export type PrettyToken2022SetAuthorityInput<TAccountOwned extends string = string, TAccountOwner extends string = string> = Prettify<Token2022SetAuthorityInput<TAccountOwned, TAccountOwner>>;
export type PrettyToken2022SetAuthorityInstructionData = Prettify<Token2022SetAuthorityInstructionData>;
export type PrettyToken2022SetAuthorityInstructionDataArgs = Prettify<Token2022SetAuthorityInstructionDataArgs>;
export type PrettyParsedToken2022SetAuthorityInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022SetAuthorityInstruction<TProgram, TAccountMetas>>;

// --- SetTransferFee ---

export type PrettySetTransferFeeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountTransferFeeConfigAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<SetTransferFeeInstruction<TProgram, TAccountMint, TAccountTransferFeeConfigAuthority, TRemainingAccounts>>;
export type PrettySetTransferFeeInput<TAccountMint extends string = string, TAccountTransferFeeConfigAuthority extends string = string> = Prettify<SetTransferFeeInput<TAccountMint, TAccountTransferFeeConfigAuthority>>;
export type PrettySetTransferFeeInstructionData = Prettify<SetTransferFeeInstructionData>;
export type PrettySetTransferFeeInstructionDataArgs = Prettify<SetTransferFeeInstructionDataArgs>;
export type PrettyParsedSetTransferFeeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedSetTransferFeeInstruction<TProgram, TAccountMetas>>;

// --- Token2022SyncNative ---

export type PrettyToken2022SyncNativeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountAccount extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022SyncNativeInstruction<TProgram, TAccountAccount, TRemainingAccounts>>;
export type PrettyToken2022SyncNativeInput<TAccountAccount extends string = string> = Prettify<Token2022SyncNativeInput<TAccountAccount>>;
export type PrettyToken2022SyncNativeInstructionData = Prettify<Token2022SyncNativeInstructionData>;
export type PrettyToken2022SyncNativeInstructionDataArgs = Prettify<Token2022SyncNativeInstructionDataArgs>;
export type PrettyParsedToken2022SyncNativeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022SyncNativeInstruction<TProgram, TAccountMetas>>;

// --- Token2022ThawAccount ---

export type PrettyToken2022ThawAccountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountAccount extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountOwner extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022ThawAccountInstruction<TProgram, TAccountAccount, TAccountMint, TAccountOwner, TRemainingAccounts>>;
export type PrettyToken2022ThawAccountInput<TAccountAccount extends string = string, TAccountMint extends string = string, TAccountOwner extends string = string> = Prettify<Token2022ThawAccountInput<TAccountAccount, TAccountMint, TAccountOwner>>;
export type PrettyToken2022ThawAccountInstructionData = Prettify<Token2022ThawAccountInstructionData>;
export type PrettyToken2022ThawAccountInstructionDataArgs = Prettify<Token2022ThawAccountInstructionDataArgs>;
export type PrettyParsedToken2022ThawAccountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022ThawAccountInstruction<TProgram, TAccountMetas>>;

// --- Token2022Transfer ---

export type PrettyToken2022TransferInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountSource extends string | AccountMeta<string> = string, TAccountDestination extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022TransferInstruction<TProgram, TAccountSource, TAccountDestination, TAccountAuthority, TRemainingAccounts>>;
export type PrettyToken2022TransferInput<TAccountSource extends string = string, TAccountDestination extends string = string, TAccountAuthority extends string = string> = Prettify<Token2022TransferInput<TAccountSource, TAccountDestination, TAccountAuthority>>;
export type PrettyToken2022TransferInstructionData = Prettify<Token2022TransferInstructionData>;
export type PrettyToken2022TransferInstructionDataArgs = Prettify<Token2022TransferInstructionDataArgs>;
export type PrettyParsedToken2022TransferInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022TransferInstruction<TProgram, TAccountMetas>>;

// --- Token2022TransferChecked ---

export type PrettyToken2022TransferCheckedInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountSource extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountDestination extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022TransferCheckedInstruction<TProgram, TAccountSource, TAccountMint, TAccountDestination, TAccountAuthority, TRemainingAccounts>>;
export type PrettyToken2022TransferCheckedInput<TAccountSource extends string = string, TAccountMint extends string = string, TAccountDestination extends string = string, TAccountAuthority extends string = string> = Prettify<Token2022TransferCheckedInput<TAccountSource, TAccountMint, TAccountDestination, TAccountAuthority>>;
export type PrettyToken2022TransferCheckedInstructionData = Prettify<Token2022TransferCheckedInstructionData>;
export type PrettyToken2022TransferCheckedInstructionDataArgs = Prettify<Token2022TransferCheckedInstructionDataArgs>;
export type PrettyParsedToken2022TransferCheckedInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022TransferCheckedInstruction<TProgram, TAccountMetas>>;

// --- TransferCheckedWithFee ---

export type PrettyTransferCheckedWithFeeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountSource extends string | AccountMeta<string> = string, TAccountMint extends string | AccountMeta<string> = string, TAccountDestination extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<TransferCheckedWithFeeInstruction<TProgram, TAccountSource, TAccountMint, TAccountDestination, TAccountAuthority, TRemainingAccounts>>;
export type PrettyTransferCheckedWithFeeInput<TAccountSource extends string = string, TAccountMint extends string = string, TAccountDestination extends string = string, TAccountAuthority extends string = string> = Prettify<TransferCheckedWithFeeInput<TAccountSource, TAccountMint, TAccountDestination, TAccountAuthority>>;
export type PrettyTransferCheckedWithFeeInstructionData = Prettify<TransferCheckedWithFeeInstructionData>;
export type PrettyTransferCheckedWithFeeInstructionDataArgs = Prettify<TransferCheckedWithFeeInstructionDataArgs>;
export type PrettyParsedTransferCheckedWithFeeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedTransferCheckedWithFeeInstruction<TProgram, TAccountMetas>>;

// --- Token2022UiAmountToAmount ---

export type PrettyToken2022UiAmountToAmountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<Token2022UiAmountToAmountInstruction<TProgram, TAccountMint, TRemainingAccounts>>;
export type PrettyToken2022UiAmountToAmountInput<TAccountMint extends string = string> = Prettify<Token2022UiAmountToAmountInput<TAccountMint>>;
export type PrettyToken2022UiAmountToAmountInstructionData = Prettify<Token2022UiAmountToAmountInstructionData>;
export type PrettyToken2022UiAmountToAmountInstructionDataArgs = Prettify<Token2022UiAmountToAmountInstructionDataArgs>;
export type PrettyParsedToken2022UiAmountToAmountInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedToken2022UiAmountToAmountInstruction<TProgram, TAccountMetas>>;

// --- UnwrapLamports ---

export type PrettyUnwrapLamportsInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountSource extends string | AccountMeta<string> = string, TAccountDestination extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<UnwrapLamportsInstruction<TProgram, TAccountSource, TAccountDestination, TAccountAuthority, TRemainingAccounts>>;
export type PrettyUnwrapLamportsInput<TAccountSource extends string = string, TAccountDestination extends string = string, TAccountAuthority extends string = string> = Prettify<UnwrapLamportsInput<TAccountSource, TAccountDestination, TAccountAuthority>>;
export type PrettyUnwrapLamportsInstructionData = Prettify<UnwrapLamportsInstructionData>;
export type PrettyUnwrapLamportsInstructionDataArgs = Prettify<UnwrapLamportsInstructionDataArgs>;
export type PrettyParsedUnwrapLamportsInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedUnwrapLamportsInstruction<TProgram, TAccountMetas>>;

// --- UpdateConfidentialTransferMint ---

export type PrettyUpdateConfidentialTransferMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<UpdateConfidentialTransferMintInstruction<TProgram, TAccountMint, TAccountAuthority, TRemainingAccounts>>;
export type PrettyUpdateConfidentialTransferMintInput<TAccountMint extends string = string, TAccountAuthority extends string = string> = Prettify<UpdateConfidentialTransferMintInput<TAccountMint, TAccountAuthority>>;
export type PrettyUpdateConfidentialTransferMintInstructionData = Prettify<UpdateConfidentialTransferMintInstructionData>;
export type PrettyUpdateConfidentialTransferMintInstructionDataArgs = Prettify<UpdateConfidentialTransferMintInstructionDataArgs>;
export type PrettyParsedUpdateConfidentialTransferMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedUpdateConfidentialTransferMintInstruction<TProgram, TAccountMetas>>;

// --- UpdateDefaultAccountState ---

export type PrettyUpdateDefaultAccountStateInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountFreezeAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<UpdateDefaultAccountStateInstruction<TProgram, TAccountMint, TAccountFreezeAuthority, TRemainingAccounts>>;
export type PrettyUpdateDefaultAccountStateInput<TAccountMint extends string = string, TAccountFreezeAuthority extends string = string> = Prettify<UpdateDefaultAccountStateInput<TAccountMint, TAccountFreezeAuthority>>;
export type PrettyUpdateDefaultAccountStateInstructionData = Prettify<UpdateDefaultAccountStateInstructionData>;
export type PrettyUpdateDefaultAccountStateInstructionDataArgs = Prettify<UpdateDefaultAccountStateInstructionDataArgs>;
export type PrettyParsedUpdateDefaultAccountStateInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedUpdateDefaultAccountStateInstruction<TProgram, TAccountMetas>>;

// --- UpdateGroupMemberPointer ---

export type PrettyUpdateGroupMemberPointerInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountGroupMemberPointerAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<UpdateGroupMemberPointerInstruction<TProgram, TAccountMint, TAccountGroupMemberPointerAuthority, TRemainingAccounts>>;
export type PrettyUpdateGroupMemberPointerInput<TAccountMint extends string = string, TAccountGroupMemberPointerAuthority extends string = string> = Prettify<UpdateGroupMemberPointerInput<TAccountMint, TAccountGroupMemberPointerAuthority>>;
export type PrettyUpdateGroupMemberPointerInstructionData = Prettify<UpdateGroupMemberPointerInstructionData>;
export type PrettyUpdateGroupMemberPointerInstructionDataArgs = Prettify<UpdateGroupMemberPointerInstructionDataArgs>;
export type PrettyParsedUpdateGroupMemberPointerInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedUpdateGroupMemberPointerInstruction<TProgram, TAccountMetas>>;

// --- UpdateGroupPointer ---

export type PrettyUpdateGroupPointerInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountGroupPointerAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<UpdateGroupPointerInstruction<TProgram, TAccountMint, TAccountGroupPointerAuthority, TRemainingAccounts>>;
export type PrettyUpdateGroupPointerInput<TAccountMint extends string = string, TAccountGroupPointerAuthority extends string = string> = Prettify<UpdateGroupPointerInput<TAccountMint, TAccountGroupPointerAuthority>>;
export type PrettyUpdateGroupPointerInstructionData = Prettify<UpdateGroupPointerInstructionData>;
export type PrettyUpdateGroupPointerInstructionDataArgs = Prettify<UpdateGroupPointerInstructionDataArgs>;
export type PrettyParsedUpdateGroupPointerInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedUpdateGroupPointerInstruction<TProgram, TAccountMetas>>;

// --- UpdateMetadataPointer ---

export type PrettyUpdateMetadataPointerInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountMetadataPointerAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<UpdateMetadataPointerInstruction<TProgram, TAccountMint, TAccountMetadataPointerAuthority, TRemainingAccounts>>;
export type PrettyUpdateMetadataPointerInput<TAccountMint extends string = string, TAccountMetadataPointerAuthority extends string = string> = Prettify<UpdateMetadataPointerInput<TAccountMint, TAccountMetadataPointerAuthority>>;
export type PrettyUpdateMetadataPointerInstructionData = Prettify<UpdateMetadataPointerInstructionData>;
export type PrettyUpdateMetadataPointerInstructionDataArgs = Prettify<UpdateMetadataPointerInstructionDataArgs>;
export type PrettyParsedUpdateMetadataPointerInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedUpdateMetadataPointerInstruction<TProgram, TAccountMetas>>;

// --- UpdateMultiplierScaledUiMint ---

export type PrettyUpdateMultiplierScaledUiMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<UpdateMultiplierScaledUiMintInstruction<TProgram, TAccountMint, TAccountAuthority, TRemainingAccounts>>;
export type PrettyUpdateMultiplierScaledUiMintInput<TAccountMint extends string = string, TAccountAuthority extends string = string> = Prettify<UpdateMultiplierScaledUiMintInput<TAccountMint, TAccountAuthority>>;
export type PrettyUpdateMultiplierScaledUiMintInstructionData = Prettify<UpdateMultiplierScaledUiMintInstructionData>;
export type PrettyUpdateMultiplierScaledUiMintInstructionDataArgs = Prettify<UpdateMultiplierScaledUiMintInstructionDataArgs>;
export type PrettyParsedUpdateMultiplierScaledUiMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedUpdateMultiplierScaledUiMintInstruction<TProgram, TAccountMetas>>;

// --- UpdateRateInterestBearingMint ---

export type PrettyUpdateRateInterestBearingMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountRateAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<UpdateRateInterestBearingMintInstruction<TProgram, TAccountMint, TAccountRateAuthority, TRemainingAccounts>>;
export type PrettyUpdateRateInterestBearingMintInput<TAccountMint extends string = string, TAccountRateAuthority extends string = string> = Prettify<UpdateRateInterestBearingMintInput<TAccountMint, TAccountRateAuthority>>;
export type PrettyUpdateRateInterestBearingMintInstructionData = Prettify<UpdateRateInterestBearingMintInstructionData>;
export type PrettyUpdateRateInterestBearingMintInstructionDataArgs = Prettify<UpdateRateInterestBearingMintInstructionDataArgs>;
export type PrettyParsedUpdateRateInterestBearingMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedUpdateRateInterestBearingMintInstruction<TProgram, TAccountMetas>>;

// --- UpdateTokenGroupMaxSize ---

export type PrettyUpdateTokenGroupMaxSizeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountGroup extends string | AccountMeta<string> = string, TAccountUpdateAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<UpdateTokenGroupMaxSizeInstruction<TProgram, TAccountGroup, TAccountUpdateAuthority, TRemainingAccounts>>;
export type PrettyUpdateTokenGroupMaxSizeInput<TAccountGroup extends string = string, TAccountUpdateAuthority extends string = string> = Prettify<UpdateTokenGroupMaxSizeInput<TAccountGroup, TAccountUpdateAuthority>>;
export type PrettyUpdateTokenGroupMaxSizeInstructionData = Prettify<UpdateTokenGroupMaxSizeInstructionData>;
export type PrettyUpdateTokenGroupMaxSizeInstructionDataArgs = Prettify<UpdateTokenGroupMaxSizeInstructionDataArgs>;
export type PrettyParsedUpdateTokenGroupMaxSizeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedUpdateTokenGroupMaxSizeInstruction<TProgram, TAccountMetas>>;

// --- UpdateTokenGroupUpdateAuthority ---

export type PrettyUpdateTokenGroupUpdateAuthorityInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountGroup extends string | AccountMeta<string> = string, TAccountUpdateAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<UpdateTokenGroupUpdateAuthorityInstruction<TProgram, TAccountGroup, TAccountUpdateAuthority, TRemainingAccounts>>;
export type PrettyUpdateTokenGroupUpdateAuthorityInput<TAccountGroup extends string = string, TAccountUpdateAuthority extends string = string> = Prettify<UpdateTokenGroupUpdateAuthorityInput<TAccountGroup, TAccountUpdateAuthority>>;
export type PrettyUpdateTokenGroupUpdateAuthorityInstructionData = Prettify<UpdateTokenGroupUpdateAuthorityInstructionData>;
export type PrettyUpdateTokenGroupUpdateAuthorityInstructionDataArgs = Prettify<UpdateTokenGroupUpdateAuthorityInstructionDataArgs>;
export type PrettyParsedUpdateTokenGroupUpdateAuthorityInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedUpdateTokenGroupUpdateAuthorityInstruction<TProgram, TAccountMetas>>;

// --- UpdateTokenMetadataField ---

export type PrettyUpdateTokenMetadataFieldInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetadata extends string | AccountMeta<string> = string, TAccountUpdateAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<UpdateTokenMetadataFieldInstruction<TProgram, TAccountMetadata, TAccountUpdateAuthority, TRemainingAccounts>>;
export type PrettyUpdateTokenMetadataFieldInput<TAccountMetadata extends string = string, TAccountUpdateAuthority extends string = string> = Prettify<UpdateTokenMetadataFieldInput<TAccountMetadata, TAccountUpdateAuthority>>;
export type PrettyUpdateTokenMetadataFieldInstructionData = Prettify<UpdateTokenMetadataFieldInstructionData>;
export type PrettyUpdateTokenMetadataFieldInstructionDataArgs = Prettify<UpdateTokenMetadataFieldInstructionDataArgs>;
export type PrettyParsedUpdateTokenMetadataFieldInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedUpdateTokenMetadataFieldInstruction<TProgram, TAccountMetas>>;

// --- UpdateTokenMetadataUpdateAuthority ---

export type PrettyUpdateTokenMetadataUpdateAuthorityInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetadata extends string | AccountMeta<string> = string, TAccountUpdateAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<UpdateTokenMetadataUpdateAuthorityInstruction<TProgram, TAccountMetadata, TAccountUpdateAuthority, TRemainingAccounts>>;
export type PrettyUpdateTokenMetadataUpdateAuthorityInput<TAccountMetadata extends string = string, TAccountUpdateAuthority extends string = string> = Prettify<UpdateTokenMetadataUpdateAuthorityInput<TAccountMetadata, TAccountUpdateAuthority>>;
export type PrettyUpdateTokenMetadataUpdateAuthorityInstructionData = Prettify<UpdateTokenMetadataUpdateAuthorityInstructionData>;
export type PrettyUpdateTokenMetadataUpdateAuthorityInstructionDataArgs = Prettify<UpdateTokenMetadataUpdateAuthorityInstructionDataArgs>;
export type PrettyParsedUpdateTokenMetadataUpdateAuthorityInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedUpdateTokenMetadataUpdateAuthorityInstruction<TProgram, TAccountMetas>>;

// --- UpdateTransferHook ---

export type PrettyUpdateTransferHookInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<UpdateTransferHookInstruction<TProgram, TAccountMint, TAccountAuthority, TRemainingAccounts>>;
export type PrettyUpdateTransferHookInput<TAccountMint extends string = string, TAccountAuthority extends string = string> = Prettify<UpdateTransferHookInput<TAccountMint, TAccountAuthority>>;
export type PrettyUpdateTransferHookInstructionData = Prettify<UpdateTransferHookInstructionData>;
export type PrettyUpdateTransferHookInstructionDataArgs = Prettify<UpdateTransferHookInstructionDataArgs>;
export type PrettyParsedUpdateTransferHookInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedUpdateTransferHookInstruction<TProgram, TAccountMetas>>;

// --- WithdrawExcessLamports ---

export type PrettyWithdrawExcessLamportsInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountSourceAccount extends string | AccountMeta<string> = string, TAccountDestinationAccount extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<WithdrawExcessLamportsInstruction<TProgram, TAccountSourceAccount, TAccountDestinationAccount, TAccountAuthority, TRemainingAccounts>>;
export type PrettyWithdrawExcessLamportsInput<TAccountSourceAccount extends string = string, TAccountDestinationAccount extends string = string, TAccountAuthority extends string = string> = Prettify<WithdrawExcessLamportsInput<TAccountSourceAccount, TAccountDestinationAccount, TAccountAuthority>>;
export type PrettyWithdrawExcessLamportsInstructionData = Prettify<WithdrawExcessLamportsInstructionData>;
export type PrettyWithdrawExcessLamportsInstructionDataArgs = Prettify<WithdrawExcessLamportsInstructionDataArgs>;
export type PrettyParsedWithdrawExcessLamportsInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedWithdrawExcessLamportsInstruction<TProgram, TAccountMetas>>;

// --- WithdrawWithheldTokensFromAccounts ---

export type PrettyWithdrawWithheldTokensFromAccountsInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountFeeReceiver extends string | AccountMeta<string> = string, TAccountWithdrawWithheldAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<WithdrawWithheldTokensFromAccountsInstruction<TProgram, TAccountMint, TAccountFeeReceiver, TAccountWithdrawWithheldAuthority, TRemainingAccounts>>;
export type PrettyWithdrawWithheldTokensFromAccountsInput<TAccountMint extends string = string, TAccountFeeReceiver extends string = string, TAccountWithdrawWithheldAuthority extends string = string> = Prettify<WithdrawWithheldTokensFromAccountsInput<TAccountMint, TAccountFeeReceiver, TAccountWithdrawWithheldAuthority>>;
export type PrettyWithdrawWithheldTokensFromAccountsInstructionData = Prettify<WithdrawWithheldTokensFromAccountsInstructionData>;
export type PrettyWithdrawWithheldTokensFromAccountsInstructionDataArgs = Prettify<WithdrawWithheldTokensFromAccountsInstructionDataArgs>;
export type PrettyParsedWithdrawWithheldTokensFromAccountsInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedWithdrawWithheldTokensFromAccountsInstruction<TProgram, TAccountMetas>>;

// --- WithdrawWithheldTokensFromAccountsForConfidentialTransferFee ---

export type PrettyWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountDestination extends string | AccountMeta<string> = string, TAccountInstructionsSysvarOrContextState extends string | AccountMeta<string> = string, TAccountRecord extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction<TProgram, TAccountMint, TAccountDestination, TAccountInstructionsSysvarOrContextState, TAccountRecord, TAccountAuthority, TRemainingAccounts>>;
export type PrettyWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInput<TAccountMint extends string = string, TAccountDestination extends string = string, TAccountInstructionsSysvarOrContextState extends string = string, TAccountRecord extends string = string, TAccountAuthority extends string = string> = Prettify<WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInput<TAccountMint, TAccountDestination, TAccountInstructionsSysvarOrContextState, TAccountRecord, TAccountAuthority>>;
export type PrettyWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionData = Prettify<WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionData>;
export type PrettyWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionDataArgs = Prettify<WithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstructionDataArgs>;
export type PrettyParsedWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedWithdrawWithheldTokensFromAccountsForConfidentialTransferFeeInstruction<TProgram, TAccountMetas>>;

// --- WithdrawWithheldTokensFromMint ---

export type PrettyWithdrawWithheldTokensFromMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountFeeReceiver extends string | AccountMeta<string> = string, TAccountWithdrawWithheldAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<WithdrawWithheldTokensFromMintInstruction<TProgram, TAccountMint, TAccountFeeReceiver, TAccountWithdrawWithheldAuthority, TRemainingAccounts>>;
export type PrettyWithdrawWithheldTokensFromMintInput<TAccountMint extends string = string, TAccountFeeReceiver extends string = string, TAccountWithdrawWithheldAuthority extends string = string> = Prettify<WithdrawWithheldTokensFromMintInput<TAccountMint, TAccountFeeReceiver, TAccountWithdrawWithheldAuthority>>;
export type PrettyWithdrawWithheldTokensFromMintInstructionData = Prettify<WithdrawWithheldTokensFromMintInstructionData>;
export type PrettyWithdrawWithheldTokensFromMintInstructionDataArgs = Prettify<WithdrawWithheldTokensFromMintInstructionDataArgs>;
export type PrettyParsedWithdrawWithheldTokensFromMintInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedWithdrawWithheldTokensFromMintInstruction<TProgram, TAccountMetas>>;

// --- WithdrawWithheldTokensFromMintForConfidentialTransferFee ---

export type PrettyWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMint extends string | AccountMeta<string> = string, TAccountDestination extends string | AccountMeta<string> = string, TAccountInstructionsSysvarOrContextState extends string | AccountMeta<string> = string, TAccountRecord extends string | AccountMeta<string> = string, TAccountAuthority extends string | AccountMeta<string> = string, TRemainingAccounts extends readonly AccountMeta<string>[] = []> = Prettify<WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction<TProgram, TAccountMint, TAccountDestination, TAccountInstructionsSysvarOrContextState, TAccountRecord, TAccountAuthority, TRemainingAccounts>>;
export type PrettyWithdrawWithheldTokensFromMintForConfidentialTransferFeeInput<TAccountMint extends string = string, TAccountDestination extends string = string, TAccountInstructionsSysvarOrContextState extends string = string, TAccountRecord extends string = string, TAccountAuthority extends string = string> = Prettify<WithdrawWithheldTokensFromMintForConfidentialTransferFeeInput<TAccountMint, TAccountDestination, TAccountInstructionsSysvarOrContextState, TAccountRecord, TAccountAuthority>>;
export type PrettyWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionData = Prettify<WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionData>;
export type PrettyWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataArgs = Prettify<WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataArgs>;
export type PrettyParsedWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction<TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS, TAccountMetas extends readonly AccountMeta[] = readonly AccountMeta[]> = Prettify<ParsedWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction<TProgram, TAccountMetas>>;
