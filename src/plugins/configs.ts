/**
 * Prettified config/option types from individual @solana/kit-plugin-* packages.
 *
 * Most plugin config types are simple inline objects, but extracting them as named types
 * improves discoverability and documentation. Where the type is an intersection or complex
 * mapped type, Prettify flattens it for better IDE tooltips.
 */
import type {
  ClusterUrl,
  DefaultRpcSubscriptionsChannelConfig,
  MicroLamports,
  TransactionSigner,
} from '@solana/kit';
import type { AirdropFunction } from '@solana/kit-plugins';
import type { RpcFromLiteSVM, LiteSVM } from '@solana/kit-plugins';
import type { Prettify } from '../prettify.js';

// --- RPC plugin config ---

/**
 * Prettified config for RPC subscriptions channel.
 * Used as the optional second parameter to the `rpc()` plugin.
 */
export type PrettyDefaultRpcSubscriptionsChannelConfig<TClusterUrl extends ClusterUrl = ClusterUrl> =
  Prettify<DefaultRpcSubscriptionsChannelConfig<TClusterUrl>>;

/**
 * Config for `createDefaultRpcClient`.
 * Extracted from the inline parameter type for discoverability.
 */
export type DefaultRpcClientConfig<TClusterUrl extends ClusterUrl = ClusterUrl> = {
  /** The transaction signer who will pay for transaction fees. */
  payer: TransactionSigner;
  /** Optional configuration for RPC subscriptions. */
  rpcSubscriptionsConfig?: DefaultRpcSubscriptionsChannelConfig<TClusterUrl>;
  /** The URL of the Solana cluster. */
  url: TClusterUrl;
};

/**
 * Config for `createDefaultLocalhostRpcClient`.
 * Extracted from the inline parameter type for discoverability.
 */
export type DefaultLocalhostRpcClientConfig = {
  /** Optional payer; if not provided, one is generated and funded via airdrop. */
  payer?: TransactionSigner;
  /** Optional RPC subscriptions config. */
  rpcSubscriptionsConfig?: { url: string };
  /** Optional RPC URL (defaults to http://127.0.0.1:8899). */
  url?: string;
};

/**
 * Config for `createDefaultLiteSVMClient`.
 * Extracted from the inline parameter type for discoverability.
 */
export type DefaultLiteSVMClientConfig = {
  /** Optional payer; if not provided, one is generated and funded via airdrop. */
  payer?: TransactionSigner;
};

// --- Instruction plan plugin configs ---

/**
 * Config for `defaultTransactionPlannerAndExecutorFromRpc`.
 * Controls payer, priority fees, and concurrency for RPC-based transaction execution.
 */
export type DefaultRpcPlannerExecutorConfig = {
  /** Maximum number of concurrent transaction executions. Defaults to 10. */
  maxConcurrency?: number;
  /** The transaction signer who will pay for transaction fees. Defaults to client's payer. */
  payer?: TransactionSigner;
  /** Priority fees in micro lamports per compute unit. Defaults to no priority fees. */
  priorityFees?: MicroLamports;
};

/**
 * Config for `defaultTransactionPlannerAndExecutorFromLitesvm`.
 * Controls payer and priority fees for LiteSVM-based transaction execution.
 */
export type DefaultLiteSVMPlannerExecutorConfig = {
  /** The transaction signer who will pay for transaction fees. Defaults to client's payer. */
  payer?: TransactionSigner;
  /** Priority fees in micro lamports per compute unit. Defaults to no priority fees. */
  priorityFees?: MicroLamports;
};

// --- Re-exports from individual plugin packages ---

/** Function type for the `airdrop` method added to clients by the airdrop plugin. */
export type { AirdropFunction } from '@solana/kit-plugins';

/** The RPC subset provided by the LiteSVM plugin. */
export type { RpcFromLiteSVM } from '@solana/kit-plugins';

/** The LiteSVM instance type. */
export type { LiteSVM } from '@solana/kit-plugins';

/** RPC subscriptions channel config from Kit. */
export type { DefaultRpcSubscriptionsChannelConfig } from '@solana/kit';
