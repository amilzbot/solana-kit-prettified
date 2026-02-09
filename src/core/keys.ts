/**
 * Prettified key and signer types from @solana/keys and @solana/signers.
 *
 * - Signature: branded primitive (string & brands) — passes through Prettify unchanged.
 * - SignatureBytes: branded Uint8Array — passes through unchanged (object but no intersection to flatten).
 * - KeyPairSigner: intersection of MessagePartialSigner & TransactionPartialSigner & { keyPair } — 
 *   highest-value Prettify target, flattens into one readable object.
 * - TransactionSigner: union type — Prettify distributes over the union.
 * - MessageSigner: union type — same distribution behavior.
 */
import type { Signature, SignatureBytes } from '@solana/keys';
import type {
  KeyPairSigner,
  TransactionSigner,
  MessageSigner,
  TransactionPartialSigner,
  TransactionModifyingSigner,
  TransactionSendingSigner,
  MessagePartialSigner,
  MessageModifyingSigner,
} from '@solana/signers';
import type { Prettify } from '../prettify.js';

/**
 * A 64-byte Ed25519 signature as a base58-encoded branded string.
 * Passes through Prettify unchanged (branded primitive).
 */
export type PrettySignature = Prettify<Signature>;

/**
 * A 64-byte Ed25519 signature as bytes. Branded Uint8Array.
 */
export type PrettySignatureBytes = Prettify<SignatureBytes>;

/**
 * A signer backed by a CryptoKeyPair. Intersection of MessagePartialSigner &
 * TransactionPartialSigner & { keyPair: CryptoKeyPair } — flattened into one object shape.
 */
export type PrettyKeyPairSigner<TAddress extends string = string> = Prettify<KeyPairSigner<TAddress>>;

/**
 * A signer capable of signing transactions (union of Partial | Modifying | Sending signers).
 * Prettify distributes over the union, flattening each variant.
 */
export type PrettyTransactionSigner<TAddress extends string = string> = Prettify<TransactionSigner<TAddress>>;

/**
 * A signer capable of signing messages (union of Partial | Modifying signers).
 */
export type PrettyMessageSigner<TAddress extends string = string> = Prettify<MessageSigner<TAddress>>;

/**
 * A partial transaction signer — signs without modifying.
 */
export type PrettyTransactionPartialSigner<TAddress extends string = string> = Prettify<TransactionPartialSigner<TAddress>>;

/**
 * A modifying transaction signer — may alter the transaction before signing.
 */
export type PrettyTransactionModifyingSigner<TAddress extends string = string> = Prettify<TransactionModifyingSigner<TAddress>>;

/**
 * A sending transaction signer — signs and sends.
 */
export type PrettyTransactionSendingSigner<TAddress extends string = string> = Prettify<TransactionSendingSigner<TAddress>>;

/**
 * A partial message signer — signs messages without modification.
 */
export type PrettyMessagePartialSigner<TAddress extends string = string> = Prettify<MessagePartialSigner<TAddress>>;

/**
 * A modifying message signer — may alter messages before signing.
 */
export type PrettyMessageModifyingSigner<TAddress extends string = string> = Prettify<MessageModifyingSigner<TAddress>>;

// Re-export originals
export type {
  Signature,
  SignatureBytes,
} from '@solana/keys';
export type {
  KeyPairSigner,
  TransactionSigner,
  MessageSigner,
  TransactionPartialSigner,
  TransactionModifyingSigner,
  TransactionSendingSigner,
  MessagePartialSigner,
  MessageModifyingSigner,
} from '@solana/signers';
