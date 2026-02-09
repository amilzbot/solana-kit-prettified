/**
 * Prettified wrappers for codec types from @solana/codecs-core.
 *
 * Codec types (Encoder, Decoder, Codec and their Fixed/Variable variants) are union types
 * of interfaces with readonly method properties. They're not intersection types, so Prettify
 * adds minimal tooltip value. The individual variants (FixedSizeEncoder, VariableSizeEncoder)
 * are already clean interfaces.
 *
 * Decision: Re-export all codec types for convenience without prettification.
 * The codec types are already well-structured and readable in IDE tooltips.
 * If a user needs prettified codec types for specific composed codecs, they
 * can apply Prettify themselves.
 */

// === Core codec types ===
export type {
  Encoder,
  FixedSizeEncoder,
  VariableSizeEncoder,
  Decoder,
  FixedSizeDecoder,
  VariableSizeDecoder,
  Codec,
  FixedSizeCodec,
  VariableSizeCodec,
  Offset,
} from '@solana/codecs-core';

// === Codec utility functions ===
export {
  createEncoder,
  createDecoder,
  createCodec,
  getEncodedSize,
  isFixedSize,
  isVariableSize,
  assertIsFixedSize,
  assertIsVariableSize,
} from '@solana/codecs-core';

// === ReadonlyUint8Array (commonly needed with codecs) ===
export type { ReadonlyUint8Array } from '@solana/codecs-core';
