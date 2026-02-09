/**
 * Prettified transaction message types from @solana/transaction-messages.
 *
 * TransactionMessage is a union (Legacy | V0) — Prettify distributes over each variant.
 * TransactionMessageWithFeePayer is an interface — Prettify flattens it.
 * Blockhash/Nonce lifetime types are interfaces and Readonly objects — good Prettify targets.
 * CompilableTransactionMessage is an intersection of TransactionMessage & feePayer & lifetime — highest value.
 */
import type {
  TransactionMessage,
  TransactionVersion,
  TransactionMessageWithFeePayer,
  TransactionMessageWithBlockhashLifetime,
  BlockhashLifetimeConstraint,
  TransactionMessageWithDurableNonceLifetime,
  NonceLifetimeConstraint,
  Nonce,
  TransactionMessageWithLifetime,
  TransactionMessageWithinSizeLimit,
} from '@solana/transaction-messages';
import type { Prettify } from '../prettify.js';

/** TransactionMessage with flattened type for readable IDE tooltips. */
export type PrettyTransactionMessage = Prettify<TransactionMessage>;

/** TransactionMessageWithFeePayer with flattened type. */
export type PrettyTransactionMessageWithFeePayer<TAddress extends string = string> = Prettify<
  TransactionMessageWithFeePayer<TAddress>
>;

/** BlockhashLifetimeConstraint with flattened type. */
export type PrettyBlockhashLifetimeConstraint = Prettify<BlockhashLifetimeConstraint>;

/** TransactionMessageWithBlockhashLifetime with flattened type. */
export type PrettyTransactionMessageWithBlockhashLifetime = Prettify<TransactionMessageWithBlockhashLifetime>;

/** NonceLifetimeConstraint with flattened type. */
export type PrettyNonceLifetimeConstraint<TNonceValue extends string = string> = Prettify<
  NonceLifetimeConstraint<TNonceValue>
>;

/** TransactionMessageWithDurableNonceLifetime with flattened type. */
export type PrettyTransactionMessageWithDurableNonceLifetime<
  TNonceAccountAddress extends string = string,
  TNonceAuthorityAddress extends string = string,
  TNonceValue extends string = string,
> = Prettify<TransactionMessageWithDurableNonceLifetime<TNonceAccountAddress, TNonceAuthorityAddress, TNonceValue>>;

/** TransactionMessageWithLifetime with flattened type. Union of blockhash | nonce lifetimes. */
export type PrettyTransactionMessageWithLifetime = Prettify<TransactionMessageWithLifetime>;

/**
 * A "compilable" transaction message — the intersection of TransactionMessage, fee payer, and lifetime.
 * This is the most common intersection developers encounter and the highest-value Prettify target here.
 */
export type PrettyCompilableTransactionMessage<TFeePayerAddress extends string = string> = Prettify<
  TransactionMessage & TransactionMessageWithFeePayer<TFeePayerAddress> & TransactionMessageWithBlockhashLifetime
>;

/**
 * A compilable transaction message using durable nonce lifetime.
 */
export type PrettyCompilableTransactionMessageWithDurableNonce<
  TFeePayerAddress extends string = string,
  TNonceAccountAddress extends string = string,
  TNonceAuthorityAddress extends string = string,
  TNonceValue extends string = string,
> = Prettify<
  TransactionMessage &
    TransactionMessageWithFeePayer<TFeePayerAddress> &
    TransactionMessageWithDurableNonceLifetime<TNonceAccountAddress, TNonceAuthorityAddress, TNonceValue>
>;

// Re-export originals
export type {
  TransactionMessage,
  TransactionVersion,
  TransactionMessageWithFeePayer,
  TransactionMessageWithBlockhashLifetime,
  BlockhashLifetimeConstraint,
  TransactionMessageWithDurableNonceLifetime,
  NonceLifetimeConstraint,
  Nonce,
  TransactionMessageWithLifetime,
  TransactionMessageWithinSizeLimit,
} from '@solana/transaction-messages';
