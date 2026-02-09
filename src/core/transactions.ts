/**
 * Prettified transaction types from @solana/transactions.
 *
 * Transaction is a Readonly object — Prettify flattens it nicely.
 * FullySignedTransaction is a NominalType (branded) — passes through Prettify unchanged.
 * TransactionWithBlockhashLifetime / TransactionWithDurableNonceLifetime are object types — good targets.
 * SendableTransaction is an intersection (FullySignedTransaction & TransactionWithinSizeLimit) — good target.
 */
import type {
  Transaction,
  TransactionMessageBytes,
  TransactionMessageBytesBase64,
  SignaturesMap,
  TransactionBlockhashLifetime,
  TransactionDurableNonceLifetime,
  TransactionWithLifetime,
  TransactionWithBlockhashLifetime,
  TransactionWithDurableNonceLifetime,
  FullySignedTransaction,
  SendableTransaction,
  TransactionWithinSizeLimit,
  Base64EncodedWireTransaction,
} from '@solana/transactions';
import type { Prettify } from '../prettify.js';

/** Transaction with flattened type for readable IDE tooltips. */
export type PrettyTransaction = Prettify<Transaction>;

/** TransactionBlockhashLifetime with flattened type. */
export type PrettyTransactionBlockhashLifetime = Prettify<TransactionBlockhashLifetime>;

/** TransactionDurableNonceLifetime with flattened type. */
export type PrettyTransactionDurableNonceLifetime = Prettify<TransactionDurableNonceLifetime>;

/** TransactionWithLifetime with flattened type. */
export type PrettyTransactionWithLifetime = Prettify<TransactionWithLifetime>;

/** TransactionWithBlockhashLifetime with flattened type. */
export type PrettyTransactionWithBlockhashLifetime = Prettify<TransactionWithBlockhashLifetime>;

/** TransactionWithDurableNonceLifetime with flattened type. */
export type PrettyTransactionWithDurableNonceLifetime = Prettify<TransactionWithDurableNonceLifetime>;

/**
 * A fully signed transaction with blockhash lifetime — the most common "ready to send" shape.
 * Flattens the intersection of Transaction & FullySignedTransaction & TransactionWithBlockhashLifetime.
 */
export type PrettyFullySignedTransactionWithBlockhashLifetime = Prettify<
  Transaction & FullySignedTransaction & TransactionWithBlockhashLifetime
>;

/**
 * A sendable transaction (fully signed + within size limit) with blockhash lifetime.
 * This is the terminal type before calling sendAndConfirmTransaction.
 */
export type PrettySendableTransactionWithBlockhashLifetime = Prettify<
  Transaction & SendableTransaction & TransactionWithBlockhashLifetime
>;

// Re-export originals
export type {
  Transaction,
  TransactionMessageBytes,
  TransactionMessageBytesBase64,
  SignaturesMap,
  TransactionBlockhashLifetime,
  TransactionDurableNonceLifetime,
  TransactionWithLifetime,
  TransactionWithBlockhashLifetime,
  TransactionWithDurableNonceLifetime,
  FullySignedTransaction,
  SendableTransaction,
  TransactionWithinSizeLimit,
  Base64EncodedWireTransaction,
} from '@solana/transactions';
