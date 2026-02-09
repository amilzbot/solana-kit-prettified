/**
 * IDE Hover Test for Phase 3: Program Types
 *
 * Import types and hover over them in VS Code to verify tooltips show
 * flattened shapes instead of multi-intersection gibberish.
 *
 * Key comparison: Original types show `Instruction<...> & InstructionWithData<...> & InstructionWithAccounts<[...]>`
 * Pretty types should show a single flat `{ programAddress: ...; data: ...; accounts: [...] }` object.
 */

// --- System Program ---
import type {
  PrettyTransferSolInstruction,
  PrettyTransferSolInput,
  PrettyCreateAccountInstruction,
  PrettyCreateAccountInput,
  PrettySystemNonce,
  PrettySystemNonceArgs,
  PrettyAllocateInstruction,
  PrettyAssignInstruction,
  PrettyAdvanceNonceAccountInstruction,
  PrettyTransferSolInstructionData,
} from '../src/programs/system.js';

import type {
  TransferSolInstruction,
  TransferSolInput,
  CreateAccountInstruction,
  Nonce,
} from '@solana-program/system';

// Hover over these to compare:
type _OriginalTransferSol = TransferSolInstruction;
type _PrettyTransferSol = PrettyTransferSolInstruction;

type _OriginalCreateAccount = CreateAccountInstruction;
type _PrettyCreateAccount = PrettyCreateAccountInstruction;

type _OriginalTransferSolInput = TransferSolInput;
type _PrettyTransferSolInput = PrettyTransferSolInput;

type _OriginalNonce = Nonce;
type _PrettyNonce = PrettySystemNonce;

type _PrettyAllocate = PrettyAllocateInstruction;
type _PrettyAssign = PrettyAssignInstruction;
type _PrettyAdvanceNonce = PrettyAdvanceNonceAccountInstruction;
type _PrettyTransferSolData = PrettyTransferSolInstructionData;
type _PrettyNonceArgs = PrettySystemNonceArgs;

// --- Token Program ---
import type {
  PrettyMint,
  PrettyTokenAccount,
  PrettyTransferInstruction,
  PrettyTransferCheckedInstruction,
  PrettyInitializeMintInstruction,
  PrettyApproveInstruction,
  PrettyBurnInstruction,
  PrettyCloseAccountInstruction,
  PrettyMintToInstruction,
} from '../src/programs/token.js';

import type {
  Mint,
  TransferInstruction,
  TransferCheckedInstruction,
} from '@solana-program/token';

type _OriginalMint = Mint;
type _PrettyMint = PrettyMint;

type _OriginalTransfer = TransferInstruction;
type _PrettyTransfer = PrettyTransferInstruction;

type _OriginalTransferChecked = TransferCheckedInstruction;
type _PrettyTransferChecked = PrettyTransferCheckedInstruction;

type _PrettyTokenAccount = PrettyTokenAccount;
type _PrettyInitMint = PrettyInitializeMintInstruction;
type _PrettyApprove = PrettyApproveInstruction;
type _PrettyBurn = PrettyBurnInstruction;
type _PrettyClose = PrettyCloseAccountInstruction;
type _PrettyMintTo = PrettyMintToInstruction;

// --- Associated Token ---
import type {
  PrettyCreateAssociatedTokenInstruction,
  PrettyCreateAssociatedTokenIdempotentInstruction,
  PrettyRecoverNestedAssociatedTokenInstruction,
} from '../src/programs/associated-token.js';

type _PrettyCreateATA = PrettyCreateAssociatedTokenInstruction;
type _PrettyCreateATAIdempotent = PrettyCreateAssociatedTokenIdempotentInstruction;
type _PrettyRecoverNested = PrettyRecoverNestedAssociatedTokenInstruction;

// --- Memo ---
import type { PrettyAddMemoInstruction } from '../src/programs/memo.js';

type _PrettyAddMemo = PrettyAddMemoInstruction;

// Suppress unused warnings
export type {
  _OriginalTransferSol, _PrettyTransferSol,
  _OriginalCreateAccount, _PrettyCreateAccount,
  _OriginalTransferSolInput, _PrettyTransferSolInput,
  _OriginalNonce, _PrettyNonce,
  _PrettyAllocate, _PrettyAssign, _PrettyAdvanceNonce,
  _PrettyTransferSolData, _PrettyNonceArgs,
  _OriginalMint, _PrettyMint,
  _OriginalTransfer, _PrettyTransfer,
  _OriginalTransferChecked, _PrettyTransferChecked,
  _PrettyTokenAccount, _PrettyInitMint, _PrettyApprove,
  _PrettyBurn, _PrettyClose, _PrettyMintTo,
  _PrettyCreateATA, _PrettyCreateATAIdempotent, _PrettyRecoverNested,
  _PrettyAddMemo,
};
