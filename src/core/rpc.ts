/**
 * Prettified wrappers for RPC-related types from @solana/rpc-types and @solana/rpc-spec.
 *
 * Branded primitive types (Lamports, MicroLamports, UnixTimestamp) pass through Prettify
 * unchanged — the primitive guard preserves their `& bigint` base.
 *
 * Simple type aliases (Slot, Epoch, Commitment) are re-exported only — no prettification needed.
 *
 * Rpc<TRpcMethods> is a mapped type over methods, not an intersection — Prettify adds no
 * tooltip value. Same for RpcApi, PendingRpcRequest, RpcPlan. Re-exported for convenience.
 *
 * The highest-value targets here are SolanaRpcResponse (Readonly intersection) and the
 * cluster URL branded string types (MainnetUrl, DevnetUrl, TestnetUrl).
 */
import type { Prettify } from '../prettify';

// === Re-exports from @solana/rpc-types (no prettification needed) ===

// Simple aliases — already plain types
export type { Commitment, Slot, Epoch, F64UnsafeSeeDocumentation, SignedLamports } from '@solana/kit';

// Branded primitives — pass through Prettify unchanged (bigint base)
// Re-export directly since Prettify<Lamports> === Lamports
export type { Lamports, MicroLamports, UnixTimestamp } from '@solana/kit';

// Cluster URL types — branded string intersections
export type { ClusterUrl, MainnetUrl, DevnetUrl, TestnetUrl } from '@solana/kit';

// Coercion/guard functions
export {
  lamports,
  isLamports,
  assertIsLamports,
  unixTimestamp,
  isUnixTimestamp,
  assertIsUnixTimestamp,
  mainnet,
  devnet,
  testnet,
} from '@solana/kit';

// === Prettified types ===

/**
 * Prettified SolanaRpcResponse — flattens the Readonly<{ context, value }> wrapper
 * into a readable flat shape in IDE tooltips.
 */
export type PrettySolanaRpcResponse<TValue> = Prettify<
  Readonly<{
    context: Readonly<{ slot: bigint }>;
    value: TValue;
  }>
>;

// Re-export original for reference
export type { SolanaRpcResponse } from '@solana/kit';

// === Re-exports from @solana/rpc-spec (no prettification needed) ===

// These are mapped/generic types where Prettify adds no tooltip value
export type { Rpc, PendingRpcRequest, RpcSendOptions, RpcConfig } from '@solana/kit';
export type { RpcApi, RpcPlan, RpcApiConfig } from '@solana/kit';
export { createRpc, createJsonRpcApi } from '@solana/kit';

// === Re-exports from @solana/rpc (convenience) ===

export { createSolanaRpc, createSolanaRpcFromTransport } from '@solana/kit';
