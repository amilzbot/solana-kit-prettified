/**
 * Hover Test — Import every Pretty* type in realistic scenarios.
 *
 * Open this file in VS Code / your IDE and hover over each variable/type
 * to verify that Pretty* types show flattened, readable shapes compared
 * to the raw Kit originals.
 *
 * This file is NOT meant to run — it's a type-level test for IDE tooltips.
 */

// ============================================================
// IMPORTS — Pretty types and originals for comparison
// ============================================================
import type {
  // Addresses
  PrettyAddress,
  Address,
  PrettyProgramDerivedAddress,
  ProgramDerivedAddress,

  // Keys & Signers
  PrettySignature,
  Signature,
  PrettyKeyPairSigner,
  KeyPairSigner,
  PrettyTransactionSigner,
  TransactionSigner,
  PrettyTransactionPartialSigner,
  TransactionPartialSigner,

  // Accounts — highest-value targets
  PrettyAccount,
  Account,
  PrettyEncodedAccount,
  EncodedAccount,
  PrettyMaybeAccount,
  MaybeAccount,
  PrettyBaseAccount,
  BaseAccount,

  // Instructions
  PrettyInstruction,
  Instruction,
  PrettyWritableAccount as PrettyWritableMeta,
  WritableAccount as WritableMeta,
  PrettyReadonlySignerAccount as PrettyReadonlySignerMeta,
  ReadonlySignerAccount as ReadonlySignerMeta,
  PrettyCombinedInstruction,

  // Transaction Messages
  PrettyTransactionMessage,
  TransactionMessage,
  PrettyTransactionMessageWithFeePayer,
  TransactionMessageWithFeePayer,
  PrettyCompilableTransactionMessage,
  PrettyTransactionMessageWithBlockhashLifetime,
  TransactionMessageWithBlockhashLifetime,

  // Transactions
  PrettyTransaction,
  Transaction,
  PrettyTransactionWithBlockhashLifetime,
  TransactionWithBlockhashLifetime,
  PrettyFullySignedTransactionWithBlockhashLifetime,

  // RPC
  PrettySolanaRpcResponse,
  SolanaRpcResponse,
  Lamports,
} from '../src/index.js';

// ============================================================
// SCENARIO 1: Fetch and decode an account
// ============================================================

// Hover over these to compare tooltip shapes:
type OriginalAccount = Account<{ mint: Address; owner: Address; amount: bigint }, string>;
type PrettifiedAccount = PrettyAccount<{ mint: Address; owner: Address; amount: bigint }, string>;
//   ^ HOVER: Should show flat { executable, lamports, programAddress, space, address, data: {...} }
//   vs original which shows BaseAccount & { address: Address<string>, data: {...} }

type OriginalMaybeAccount = MaybeAccount<Uint8Array, string>;
type PrettifiedMaybeAccount = PrettyMaybeAccount<Uint8Array, string>;
//   ^ HOVER: Union variants should each be flat

type OriginalEncoded = EncodedAccount<string>;
type PrettifiedEncoded = PrettyEncodedAccount<string>;

// ============================================================
// SCENARIO 2: Build an instruction
// ============================================================

// A combined instruction type — the Codama pattern
type OriginalCombinedIx = Instruction<'11111111111111111111111111111111'> & {
  accounts: readonly [WritableMeta, ReadonlySignerMeta];
  data: Uint8Array;
};
type PrettifiedCombinedIx = PrettyCombinedInstruction<
  '11111111111111111111111111111111',
  readonly [WritableMeta, ReadonlySignerMeta],
  Uint8Array
>;
//   ^ HOVER: Should show { programAddress, accounts, data } flat

// Account meta subtypes — intersection of AccountMeta & { role }
type OriginalWritable = WritableMeta<string>;
type PrettifiedWritable = PrettyWritableMeta<string>;
//   ^ HOVER: Should show { address, role: AccountRole.WRITABLE } flat

// ============================================================
// SCENARIO 3: Build a transaction message
// ============================================================

type OriginalTxMsg = TransactionMessage;
type PrettifiedTxMsg = PrettyTransactionMessage;

type OriginalWithFee = TransactionMessageWithFeePayer<string>;
type PrettifiedWithFee = PrettyTransactionMessageWithFeePayer<string>;

// The big one: compilable transaction message (triple intersection)
type OriginalCompilable = TransactionMessage &
  TransactionMessageWithFeePayer &
  TransactionMessageWithBlockhashLifetime;
type PrettifiedCompilable = PrettyCompilableTransactionMessage;
//   ^ HOVER: Should show { version, instructions, feePayer, lifetimeConstraint } flat
//   vs original which shows TransactionMessage & TransactionMessageWithFeePayer & ...

// ============================================================
// SCENARIO 4: Sign and send a transaction
// ============================================================

type OriginalTx = Transaction;
type PrettifiedTx = PrettyTransaction;

type OriginalTxWithLifetime = TransactionWithBlockhashLifetime;
type PrettifiedTxWithLifetime = PrettyTransactionWithBlockhashLifetime;

type OriginalReady = PrettyFullySignedTransactionWithBlockhashLifetime;
//   ^ HOVER: The "ready to send" type — should be completely flat

// ============================================================
// SCENARIO 5: Signers
// ============================================================

type OriginalKP = KeyPairSigner<string>;
type PrettifiedKP = PrettyKeyPairSigner<string>;
//   ^ HOVER: Should show { address, keyPair, signMessages, signTransactions } flat
//   vs original: MessagePartialSigner & TransactionPartialSigner & { keyPair }

type OriginalTxSigner = TransactionSigner<string>;
type PrettifiedTxSigner = PrettyTransactionSigner<string>;
//   ^ HOVER: Union — each variant should be flat

// ============================================================
// SCENARIO 6: Branded primitives (should pass through unchanged)
// ============================================================

type OriginalAddr = Address<string>;
type PrettifiedAddr = PrettyAddress;
//   ^ HOVER: Both should show the same branded string type

type OriginalSig = Signature;
type PrettifiedSig = PrettySignature;
//   ^ HOVER: Both should be identical

// ============================================================
// SCENARIO 7: RPC response wrapper
// ============================================================

type OriginalRpcResp = SolanaRpcResponse<{ lamports: Lamports }>;
type PrettifiedRpcResp = PrettySolanaRpcResponse<{ lamports: Lamports }>;
//   ^ HOVER: Should show { context: { slot: bigint }, value: { lamports: Lamports } }

// ============================================================
// SCENARIO 8: Realistic function signatures
// ============================================================

// A function that accepts Pretty types (should also accept originals)
declare function processAccount(account: PrettyAccount<Uint8Array>): void;
declare const rawAccount: Account<Uint8Array>;
declare const prettyAccount: PrettyAccount<Uint8Array>;

// Both should work — bidirectional assignability
processAccount(rawAccount);
processAccount(prettyAccount);

// A function returning Pretty types (callers get nice tooltips)
declare function fetchAccount<TAddr extends string>(
  address: Address<TAddr>,
): Promise<PrettyAccount<Uint8Array, TAddr>>;
//   ^ HOVER over return type: flat account shape

declare function buildTransferIx(
  from: PrettyKeyPairSigner,
  to: Address,
  lamports: Lamports,
): PrettyCombinedInstruction<'11111111111111111111111111111111'>;
//   ^ HOVER over return: flat instruction shape

declare function buildAndSign(): Promise<PrettyFullySignedTransactionWithBlockhashLifetime>;
//   ^ HOVER: The complete ready-to-send transaction, fully flat

// ============================================================
// VERIFICATION NOTES
// ============================================================
//
// For each Pretty* type, verify in your IDE:
//
// 1. FLATTENING: Hover shows a single { ... } object, NOT chained intersections
//    - Best examples: PrettyAccount, PrettyKeyPairSigner, PrettyCompilableTransactionMessage
//
// 2. BRANDED PRIMITIVES: Address, Signature, Lamports show identical to originals
//    - These should NOT be expanded into mapped key mess
//
// 3. ASSIGNABILITY: No red squiggles on the processAccount() calls above
//    - Pretty types and originals should be interchangeable
//
// 4. UNIONS: PrettyMaybeAccount, PrettyTransactionSigner show each variant flat
//
// Before/after comparison:
// - Type `OriginalAccount` hover → shows BaseAccount & { address, data }
// - Type `PrettifiedAccount` hover → shows { executable, lamports, programAddress, space, address, data }
//
