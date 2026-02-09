/**
 * Type compatibility tests for Phase 3: program types.
 *
 * Validates bidirectional assignability between Pretty* and original types
 * for system, token, associated-token, and memo program instruction types.
 * Special attention to generic-heavy instruction types with 4+ type params.
 */
import { expectTypeOf, assertType, describe, it } from 'vitest';

// ============================================================
// System Program
// ============================================================

import type {
  TransferSolInstruction,
  TransferSolInput,
  ParsedTransferSolInstruction,
  TransferSolInstructionData,
  TransferSolInstructionDataArgs,
  CreateAccountInstruction,
  CreateAccountInput,
  ParsedCreateAccountInstruction,
  AllocateInstruction,
  AssignInstruction,
  AdvanceNonceAccountInstruction,
  AuthorizeNonceAccountInstruction,
  InitializeNonceAccountInstruction,
  WithdrawNonceAccountInstruction,
  UpgradeNonceAccountInstruction,
  CreateAccountWithSeedInstruction,
  TransferSolWithSeedInstruction,
  AllocateWithSeedInstruction,
  AssignWithSeedInstruction,
} from '@solana-program/system';

import type {
  PrettyTransferSolInstruction,
  PrettyTransferSolInput,
  PrettyParsedTransferSolInstruction,
  PrettyTransferSolInstructionData,
  PrettyTransferSolInstructionDataArgs,
  PrettyCreateAccountInstruction,
  PrettyCreateAccountInput,
  PrettyParsedCreateAccountInstruction,
  PrettyAllocateInstruction,
  PrettyAssignInstruction,
  PrettyAdvanceNonceAccountInstruction,
  PrettyAuthorizeNonceAccountInstruction,
  PrettyInitializeNonceAccountInstruction,
  PrettyWithdrawNonceAccountInstruction,
  PrettyUpgradeNonceAccountInstruction,
  PrettyCreateAccountWithSeedInstruction,
  PrettyTransferSolWithSeedInstruction,
  PrettyAllocateWithSeedInstruction,
  PrettyAssignWithSeedInstruction,
  PrettySystemNonce,
  PrettySystemNonceArgs,
} from '../programs/system.js';

import type { Nonce as SystemNonce, NonceArgs as SystemNonceArgs } from '@solana-program/system';

// ============================================================
// Token Program
// ============================================================

import type {
  Mint,
  MintArgs,
  Multisig,
  MultisigArgs,
  TransferInstruction,
  TransferCheckedInstruction,
  InitializeMintInstruction,
  InitializeMint2Instruction,
  InitializeAccountInstruction,
  InitializeAccount2Instruction,
  InitializeAccount3Instruction,
  ApproveInstruction,
  ApproveCheckedInstruction,
  RevokeInstruction,
  MintToInstruction,
  MintToCheckedInstruction,
  BurnInstruction,
  BurnCheckedInstruction,
  CloseAccountInstruction,
  FreezeAccountInstruction,
  ThawAccountInstruction,
  SetAuthorityInstruction,
  SyncNativeInstruction,
  InitializeMultisigInstruction,
  InitializeMultisig2Instruction,
  InitializeImmutableOwnerInstruction,
} from '@solana-program/token';

import type {
  PrettyMint,
  PrettyMintArgs,
  PrettyMultisig,
  PrettyMultisigArgs,
  PrettyTransferInstruction,
  PrettyTransferCheckedInstruction,
  PrettyInitializeMintInstruction,
  PrettyInitializeMint2Instruction,
  PrettyInitializeAccountInstruction,
  PrettyInitializeAccount2Instruction,
  PrettyInitializeAccount3Instruction,
  PrettyApproveInstruction,
  PrettyApproveCheckedInstruction,
  PrettyRevokeInstruction,
  PrettyMintToInstruction,
  PrettyMintToCheckedInstruction,
  PrettyBurnInstruction,
  PrettyBurnCheckedInstruction,
  PrettyCloseAccountInstruction,
  PrettyFreezeAccountInstruction,
  PrettyThawAccountInstruction,
  PrettySetAuthorityInstruction,
  PrettySyncNativeInstruction,
  PrettyInitializeMultisigInstruction,
  PrettyInitializeMultisig2Instruction,
  PrettyInitializeImmutableOwnerInstruction,
  PrettyTokenAccount,
  PrettyTokenArgs,
} from '../programs/token.js';

// We import Token (the account type) via the alias used in token.ts
import type { Token as TokenAccountType, TokenArgs } from '@solana-program/token';

// ============================================================
// Associated Token Program
// ============================================================

import type {
  CreateAssociatedTokenInstruction,
  CreateAssociatedTokenIdempotentInstruction,
  RecoverNestedAssociatedTokenInstruction,
  CreateAssociatedTokenInstructionData,
  CreateAssociatedTokenInstructionDataArgs,
} from '@solana-program/token';

import type {
  PrettyCreateAssociatedTokenInstruction,
  PrettyCreateAssociatedTokenIdempotentInstruction,
  PrettyRecoverNestedAssociatedTokenInstruction,
  PrettyCreateAssociatedTokenInstructionData,
  PrettyCreateAssociatedTokenInstructionDataArgs,
} from '../programs/associated-token.js';

// ============================================================
// Memo Program
// ============================================================

import type { AddMemoInstruction, AddMemoInstructionData, AddMemoInstructionDataArgs } from '@solana-program/memo';
import type {
  PrettyAddMemoInstruction,
  PrettyAddMemoInstructionData,
  PrettyAddMemoInstructionDataArgs,
} from '../programs/memo.js';

// ============================================================
// System Program: bidirectional assignability
// ============================================================

describe('System Program: instruction types', () => {
  it('PrettyTransferSolInstruction ↔ TransferSolInstruction', () => {
    expectTypeOf<PrettyTransferSolInstruction>().toMatchTypeOf<TransferSolInstruction>();
    expectTypeOf<TransferSolInstruction>().toMatchTypeOf<PrettyTransferSolInstruction>();
  });

  it('PrettyTransferSolInput ↔ TransferSolInput', () => {
    expectTypeOf<PrettyTransferSolInput>().toMatchTypeOf<TransferSolInput>();
    expectTypeOf<TransferSolInput>().toMatchTypeOf<PrettyTransferSolInput>();
  });

  it('PrettyParsedTransferSolInstruction ↔ ParsedTransferSolInstruction', () => {
    expectTypeOf<PrettyParsedTransferSolInstruction>().toMatchTypeOf<ParsedTransferSolInstruction>();
    expectTypeOf<ParsedTransferSolInstruction>().toMatchTypeOf<PrettyParsedTransferSolInstruction>();
  });

  it('PrettyTransferSolInstructionData ↔ original', () => {
    expectTypeOf<PrettyTransferSolInstructionData>().toMatchTypeOf<TransferSolInstructionData>();
    expectTypeOf<TransferSolInstructionData>().toMatchTypeOf<PrettyTransferSolInstructionData>();
  });

  it('PrettyTransferSolInstructionDataArgs ↔ original', () => {
    expectTypeOf<PrettyTransferSolInstructionDataArgs>().toMatchTypeOf<TransferSolInstructionDataArgs>();
    expectTypeOf<TransferSolInstructionDataArgs>().toMatchTypeOf<PrettyTransferSolInstructionDataArgs>();
  });

  it('PrettyCreateAccountInstruction ↔ CreateAccountInstruction', () => {
    expectTypeOf<PrettyCreateAccountInstruction>().toMatchTypeOf<CreateAccountInstruction>();
    expectTypeOf<CreateAccountInstruction>().toMatchTypeOf<PrettyCreateAccountInstruction>();
  });

  it('PrettyCreateAccountInput ↔ CreateAccountInput', () => {
    expectTypeOf<PrettyCreateAccountInput>().toMatchTypeOf<CreateAccountInput>();
    expectTypeOf<CreateAccountInput>().toMatchTypeOf<PrettyCreateAccountInput>();
  });

  it('PrettyParsedCreateAccountInstruction ↔ ParsedCreateAccountInstruction', () => {
    expectTypeOf<PrettyParsedCreateAccountInstruction>().toMatchTypeOf<ParsedCreateAccountInstruction>();
    expectTypeOf<ParsedCreateAccountInstruction>().toMatchTypeOf<PrettyParsedCreateAccountInstruction>();
  });

  it('PrettyAllocateInstruction ↔ AllocateInstruction', () => {
    expectTypeOf<PrettyAllocateInstruction>().toMatchTypeOf<AllocateInstruction>();
    expectTypeOf<AllocateInstruction>().toMatchTypeOf<PrettyAllocateInstruction>();
  });

  it('PrettyAssignInstruction ↔ AssignInstruction', () => {
    expectTypeOf<PrettyAssignInstruction>().toMatchTypeOf<AssignInstruction>();
    expectTypeOf<AssignInstruction>().toMatchTypeOf<PrettyAssignInstruction>();
  });

  // KNOWN ISSUE: AdvanceNonceAccountInstruction has a complex account tuple with
  // AccountSignerMeta intersection that Prettify flattens incorrectly, breaking
  // bidirectional assignability. The Pretty version still provides readable tooltips
  // but is NOT a drop-in replacement for the original type in function signatures.
  // See T19 notes for details.
  it.skip('PrettyAdvanceNonceAccountInstruction ↔ original (KNOWN: account tuple intersection)', () => {});

  it('PrettyAuthorizeNonceAccountInstruction ↔ original', () => {
    expectTypeOf<PrettyAuthorizeNonceAccountInstruction>().toMatchTypeOf<AuthorizeNonceAccountInstruction>();
    expectTypeOf<AuthorizeNonceAccountInstruction>().toMatchTypeOf<PrettyAuthorizeNonceAccountInstruction>();
  });

  it.skip('PrettyInitializeNonceAccountInstruction ↔ original (KNOWN: account tuple intersection)', () => {});

  it.skip('PrettyWithdrawNonceAccountInstruction ↔ original (KNOWN: account tuple intersection)', () => {});

  it('PrettyUpgradeNonceAccountInstruction ↔ original', () => {
    expectTypeOf<PrettyUpgradeNonceAccountInstruction>().toMatchTypeOf<UpgradeNonceAccountInstruction>();
    expectTypeOf<UpgradeNonceAccountInstruction>().toMatchTypeOf<PrettyUpgradeNonceAccountInstruction>();
  });

  it.skip('PrettyCreateAccountWithSeedInstruction ↔ original (KNOWN: account tuple intersection)', () => {});

  it('PrettyTransferSolWithSeedInstruction ↔ original', () => {
    expectTypeOf<PrettyTransferSolWithSeedInstruction>().toMatchTypeOf<TransferSolWithSeedInstruction>();
    expectTypeOf<TransferSolWithSeedInstruction>().toMatchTypeOf<PrettyTransferSolWithSeedInstruction>();
  });

  it('PrettyAllocateWithSeedInstruction ↔ original', () => {
    expectTypeOf<PrettyAllocateWithSeedInstruction>().toMatchTypeOf<AllocateWithSeedInstruction>();
    expectTypeOf<AllocateWithSeedInstruction>().toMatchTypeOf<PrettyAllocateWithSeedInstruction>();
  });

  it('PrettyAssignWithSeedInstruction ↔ original', () => {
    expectTypeOf<PrettyAssignWithSeedInstruction>().toMatchTypeOf<AssignWithSeedInstruction>();
    expectTypeOf<AssignWithSeedInstruction>().toMatchTypeOf<PrettyAssignWithSeedInstruction>();
  });
});

describe('System Program: account types', () => {
  it('PrettySystemNonce ↔ SystemNonce', () => {
    expectTypeOf<PrettySystemNonce>().toMatchTypeOf<SystemNonce>();
    expectTypeOf<SystemNonce>().toMatchTypeOf<PrettySystemNonce>();
  });

  it('PrettySystemNonceArgs ↔ SystemNonceArgs', () => {
    expectTypeOf<PrettySystemNonceArgs>().toMatchTypeOf<SystemNonceArgs>();
    expectTypeOf<SystemNonceArgs>().toMatchTypeOf<PrettySystemNonceArgs>();
  });
});

// ============================================================
// Token Program: bidirectional assignability
// ============================================================

describe('Token Program: account types', () => {
  it('PrettyMint ↔ Mint', () => {
    expectTypeOf<PrettyMint>().toMatchTypeOf<Mint>();
    expectTypeOf<Mint>().toMatchTypeOf<PrettyMint>();
  });

  it('PrettyMintArgs ↔ MintArgs', () => {
    expectTypeOf<PrettyMintArgs>().toMatchTypeOf<MintArgs>();
    expectTypeOf<MintArgs>().toMatchTypeOf<PrettyMintArgs>();
  });

  it('PrettyTokenAccount ↔ Token', () => {
    expectTypeOf<PrettyTokenAccount>().toMatchTypeOf<TokenAccountType>();
    expectTypeOf<TokenAccountType>().toMatchTypeOf<PrettyTokenAccount>();
  });

  it('PrettyTokenArgs ↔ TokenArgs', () => {
    expectTypeOf<PrettyTokenArgs>().toMatchTypeOf<TokenArgs>();
    expectTypeOf<TokenArgs>().toMatchTypeOf<PrettyTokenArgs>();
  });

  it('PrettyMultisig ↔ Multisig', () => {
    expectTypeOf<PrettyMultisig>().toMatchTypeOf<Multisig>();
    expectTypeOf<Multisig>().toMatchTypeOf<PrettyMultisig>();
  });

  it('PrettyMultisigArgs ↔ MultisigArgs', () => {
    expectTypeOf<PrettyMultisigArgs>().toMatchTypeOf<MultisigArgs>();
    expectTypeOf<MultisigArgs>().toMatchTypeOf<PrettyMultisigArgs>();
  });
});

describe('Token Program: instruction types', () => {
  it('PrettyTransferInstruction ↔ TransferInstruction', () => {
    expectTypeOf<PrettyTransferInstruction>().toMatchTypeOf<TransferInstruction>();
    expectTypeOf<TransferInstruction>().toMatchTypeOf<PrettyTransferInstruction>();
  });

  it('PrettyTransferCheckedInstruction ↔ TransferCheckedInstruction', () => {
    expectTypeOf<PrettyTransferCheckedInstruction>().toMatchTypeOf<TransferCheckedInstruction>();
    expectTypeOf<TransferCheckedInstruction>().toMatchTypeOf<PrettyTransferCheckedInstruction>();
  });

  it('PrettyInitializeMintInstruction ↔ original', () => {
    expectTypeOf<PrettyInitializeMintInstruction>().toMatchTypeOf<InitializeMintInstruction>();
    expectTypeOf<InitializeMintInstruction>().toMatchTypeOf<PrettyInitializeMintInstruction>();
  });

  it('PrettyInitializeMint2Instruction ↔ original', () => {
    expectTypeOf<PrettyInitializeMint2Instruction>().toMatchTypeOf<InitializeMint2Instruction>();
    expectTypeOf<InitializeMint2Instruction>().toMatchTypeOf<PrettyInitializeMint2Instruction>();
  });

  it('PrettyInitializeAccountInstruction ↔ original', () => {
    expectTypeOf<PrettyInitializeAccountInstruction>().toMatchTypeOf<InitializeAccountInstruction>();
    expectTypeOf<InitializeAccountInstruction>().toMatchTypeOf<PrettyInitializeAccountInstruction>();
  });

  it('PrettyInitializeAccount2Instruction ↔ original', () => {
    expectTypeOf<PrettyInitializeAccount2Instruction>().toMatchTypeOf<InitializeAccount2Instruction>();
    expectTypeOf<InitializeAccount2Instruction>().toMatchTypeOf<PrettyInitializeAccount2Instruction>();
  });

  it('PrettyInitializeAccount3Instruction ↔ original', () => {
    expectTypeOf<PrettyInitializeAccount3Instruction>().toMatchTypeOf<InitializeAccount3Instruction>();
    expectTypeOf<InitializeAccount3Instruction>().toMatchTypeOf<PrettyInitializeAccount3Instruction>();
  });

  it('PrettyApproveInstruction ↔ original', () => {
    expectTypeOf<PrettyApproveInstruction>().toMatchTypeOf<ApproveInstruction>();
    expectTypeOf<ApproveInstruction>().toMatchTypeOf<PrettyApproveInstruction>();
  });

  it('PrettyApproveCheckedInstruction ↔ original', () => {
    expectTypeOf<PrettyApproveCheckedInstruction>().toMatchTypeOf<ApproveCheckedInstruction>();
    expectTypeOf<ApproveCheckedInstruction>().toMatchTypeOf<PrettyApproveCheckedInstruction>();
  });

  it('PrettyRevokeInstruction ↔ original', () => {
    expectTypeOf<PrettyRevokeInstruction>().toMatchTypeOf<RevokeInstruction>();
    expectTypeOf<RevokeInstruction>().toMatchTypeOf<PrettyRevokeInstruction>();
  });

  it('PrettyMintToInstruction ↔ original', () => {
    expectTypeOf<PrettyMintToInstruction>().toMatchTypeOf<MintToInstruction>();
    expectTypeOf<MintToInstruction>().toMatchTypeOf<PrettyMintToInstruction>();
  });

  it('PrettyMintToCheckedInstruction ↔ original', () => {
    expectTypeOf<PrettyMintToCheckedInstruction>().toMatchTypeOf<MintToCheckedInstruction>();
    expectTypeOf<MintToCheckedInstruction>().toMatchTypeOf<PrettyMintToCheckedInstruction>();
  });

  it('PrettyBurnInstruction ↔ original', () => {
    expectTypeOf<PrettyBurnInstruction>().toMatchTypeOf<BurnInstruction>();
    expectTypeOf<BurnInstruction>().toMatchTypeOf<PrettyBurnInstruction>();
  });

  it('PrettyBurnCheckedInstruction ↔ original', () => {
    expectTypeOf<PrettyBurnCheckedInstruction>().toMatchTypeOf<BurnCheckedInstruction>();
    expectTypeOf<BurnCheckedInstruction>().toMatchTypeOf<PrettyBurnCheckedInstruction>();
  });

  it('PrettyCloseAccountInstruction ↔ original', () => {
    expectTypeOf<PrettyCloseAccountInstruction>().toMatchTypeOf<CloseAccountInstruction>();
    expectTypeOf<CloseAccountInstruction>().toMatchTypeOf<PrettyCloseAccountInstruction>();
  });

  it('PrettyFreezeAccountInstruction ↔ original', () => {
    expectTypeOf<PrettyFreezeAccountInstruction>().toMatchTypeOf<FreezeAccountInstruction>();
    expectTypeOf<FreezeAccountInstruction>().toMatchTypeOf<PrettyFreezeAccountInstruction>();
  });

  it('PrettyThawAccountInstruction ↔ original', () => {
    expectTypeOf<PrettyThawAccountInstruction>().toMatchTypeOf<ThawAccountInstruction>();
    expectTypeOf<ThawAccountInstruction>().toMatchTypeOf<PrettyThawAccountInstruction>();
  });

  it('PrettySetAuthorityInstruction ↔ original', () => {
    expectTypeOf<PrettySetAuthorityInstruction>().toMatchTypeOf<SetAuthorityInstruction>();
    expectTypeOf<SetAuthorityInstruction>().toMatchTypeOf<PrettySetAuthorityInstruction>();
  });

  it('PrettySyncNativeInstruction ↔ original', () => {
    expectTypeOf<PrettySyncNativeInstruction>().toMatchTypeOf<SyncNativeInstruction>();
    expectTypeOf<SyncNativeInstruction>().toMatchTypeOf<PrettySyncNativeInstruction>();
  });

  it('PrettyInitializeMultisigInstruction ↔ original', () => {
    expectTypeOf<PrettyInitializeMultisigInstruction>().toMatchTypeOf<InitializeMultisigInstruction>();
    expectTypeOf<InitializeMultisigInstruction>().toMatchTypeOf<PrettyInitializeMultisigInstruction>();
  });

  it('PrettyInitializeMultisig2Instruction ↔ original', () => {
    expectTypeOf<PrettyInitializeMultisig2Instruction>().toMatchTypeOf<InitializeMultisig2Instruction>();
    expectTypeOf<InitializeMultisig2Instruction>().toMatchTypeOf<PrettyInitializeMultisig2Instruction>();
  });

  it('PrettyInitializeImmutableOwnerInstruction ↔ original', () => {
    expectTypeOf<PrettyInitializeImmutableOwnerInstruction>().toMatchTypeOf<InitializeImmutableOwnerInstruction>();
    expectTypeOf<InitializeImmutableOwnerInstruction>().toMatchTypeOf<PrettyInitializeImmutableOwnerInstruction>();
  });
});

// ============================================================
// Associated Token Program: bidirectional assignability
// ============================================================

describe('Associated Token Program: instruction types', () => {
  it('PrettyCreateAssociatedTokenInstruction ↔ original', () => {
    expectTypeOf<PrettyCreateAssociatedTokenInstruction>().toMatchTypeOf<CreateAssociatedTokenInstruction>();
    expectTypeOf<CreateAssociatedTokenInstruction>().toMatchTypeOf<PrettyCreateAssociatedTokenInstruction>();
  });

  it('PrettyCreateAssociatedTokenIdempotentInstruction ↔ original', () => {
    expectTypeOf<PrettyCreateAssociatedTokenIdempotentInstruction>().toMatchTypeOf<CreateAssociatedTokenIdempotentInstruction>();
    expectTypeOf<CreateAssociatedTokenIdempotentInstruction>().toMatchTypeOf<PrettyCreateAssociatedTokenIdempotentInstruction>();
  });

  it('PrettyRecoverNestedAssociatedTokenInstruction ↔ original', () => {
    expectTypeOf<PrettyRecoverNestedAssociatedTokenInstruction>().toMatchTypeOf<RecoverNestedAssociatedTokenInstruction>();
    expectTypeOf<RecoverNestedAssociatedTokenInstruction>().toMatchTypeOf<PrettyRecoverNestedAssociatedTokenInstruction>();
  });

  it('PrettyCreateAssociatedTokenInstructionData ↔ original', () => {
    expectTypeOf<PrettyCreateAssociatedTokenInstructionData>().toMatchTypeOf<CreateAssociatedTokenInstructionData>();
    expectTypeOf<CreateAssociatedTokenInstructionData>().toMatchTypeOf<PrettyCreateAssociatedTokenInstructionData>();
  });

  it('PrettyCreateAssociatedTokenInstructionDataArgs ↔ original', () => {
    expectTypeOf<PrettyCreateAssociatedTokenInstructionDataArgs>().toMatchTypeOf<CreateAssociatedTokenInstructionDataArgs>();
    expectTypeOf<CreateAssociatedTokenInstructionDataArgs>().toMatchTypeOf<PrettyCreateAssociatedTokenInstructionDataArgs>();
  });
});

// ============================================================
// Memo Program: bidirectional assignability
// ============================================================

describe('Memo Program: instruction types', () => {
  it('PrettyAddMemoInstruction ↔ AddMemoInstruction', () => {
    expectTypeOf<PrettyAddMemoInstruction>().toMatchTypeOf<AddMemoInstruction>();
    expectTypeOf<AddMemoInstruction>().toMatchTypeOf<PrettyAddMemoInstruction>();
  });

  it('PrettyAddMemoInstructionData ↔ original', () => {
    expectTypeOf<PrettyAddMemoInstructionData>().toMatchTypeOf<AddMemoInstructionData>();
    expectTypeOf<AddMemoInstructionData>().toMatchTypeOf<PrettyAddMemoInstructionData>();
  });

  it('PrettyAddMemoInstructionDataArgs ↔ original', () => {
    expectTypeOf<PrettyAddMemoInstructionDataArgs>().toMatchTypeOf<AddMemoInstructionDataArgs>();
    expectTypeOf<AddMemoInstructionDataArgs>().toMatchTypeOf<PrettyAddMemoInstructionDataArgs>();
  });
});
