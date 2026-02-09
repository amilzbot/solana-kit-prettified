/**
 * Prettified client return types for @solana/kit-plugins default client factories.
 *
 * The `createDefaultRpcClient`, `createDefaultLocalhostRpcClient`, and `createDefaultLiteSVMClient`
 * functions produce deeply nested intersection types from chained `.use()` calls.
 * These types are among the worst tooltip offenders in the Kit ecosystem.
 *
 * We extract the resolved client shapes using ReturnType + Awaited and apply Prettify
 * to flatten them into readable single-object types.
 */
import type {
  createDefaultRpcClient,
  createDefaultLocalhostRpcClient,
  createDefaultLiteSVMClient,
} from '@solana/kit-plugins';
import type { Client, AsyncClient } from '@solana/kit';
import type { Prettify } from '../prettify.js';

// --- Raw return types from the factory functions ---

/**
 * The raw return type of `createDefaultRpcClient`.
 * This is a `Client<...>` wrapping chained plugin intersections.
 */
type RawDefaultRpcClient = ReturnType<typeof createDefaultRpcClient>;

/**
 * The raw return type of `createDefaultLocalhostRpcClient`.
 * This is an `AsyncClient<...>` (the payer generation is async).
 */
type RawDefaultLocalhostRpcClient = ReturnType<typeof createDefaultLocalhostRpcClient>;

/**
 * The raw return type of `createDefaultLiteSVMClient`.
 * This is an `AsyncClient<...>` (the payer generation is async).
 */
type RawDefaultLiteSVMClient = ReturnType<typeof createDefaultLiteSVMClient>;

// --- Extract the inner client shape from Client<T> / AsyncClient<T> ---

/**
 * Extracts the inner shape T from `Client<T>` by stripping the `use` method.
 */
type ExtractClientShape<C> =
  C extends Client<infer T> ? Omit<T, 'use'> : never;

/**
 * Extracts the inner shape T from `AsyncClient<T>` by stripping the `use` method.
 */
type ExtractAsyncClientShape<C> =
  C extends AsyncClient<infer T> ? Omit<T, 'use'> : never;

// --- Prettified client shapes ---

/**
 * Prettified shape of the client returned by `createDefaultRpcClient`.
 *
 * Flattens the chained `.use(rpc()).use(payer()).use(defaultTransactionPlannerAndExecutorFromRpc()).use(sendTransactions())`
 * intersection into a single readable object with:
 * - `rpc` — Solana RPC client
 * - `rpcSubscriptions` — Solana RPC subscriptions client
 * - `payer` — Transaction fee payer signer
 * - `transactionPlanner` — Plans instruction sets into transaction plans
 * - `transactionPlanExecutor` — Executes transaction plans
 * - `sendTransaction` — Send a single transaction (convenience)
 * - `sendTransactions` — Send multiple transactions (convenience)
 */
export type PrettyDefaultRpcClient = Prettify<ExtractClientShape<RawDefaultRpcClient>>;

/**
 * Prettified shape of the client returned by `createDefaultLocalhostRpcClient`.
 *
 * Includes everything from `PrettyDefaultRpcClient` plus:
 * - `airdrop` — Airdrop SOL to an address (localhost validator)
 */
export type PrettyDefaultLocalhostRpcClient = Prettify<ExtractAsyncClientShape<RawDefaultLocalhostRpcClient>>;

/**
 * Prettified shape of the client returned by `createDefaultLiteSVMClient`.
 *
 * Includes:
 * - `svm` — LiteSVM instance for local blockchain simulation
 * - `rpc` — RPC subset derived from LiteSVM
 * - `airdrop` — Airdrop SOL to an address
 * - `payer` — Transaction fee payer signer
 * - `transactionPlanner` — Plans instruction sets into transaction plans
 * - `transactionPlanExecutor` — Executes transaction plans
 * - `sendTransaction` — Send a single transaction (convenience)
 * - `sendTransactions` — Send multiple transactions (convenience)
 */
export type PrettyDefaultLiteSVMClient = Prettify<ExtractAsyncClientShape<RawDefaultLiteSVMClient>>;

// --- Re-exports ---

export type {
  createDefaultRpcClient,
  createDefaultLocalhostRpcClient,
  createDefaultLiteSVMClient,
} from '@solana/kit-plugins';

export type { Client, AsyncClient } from '@solana/kit';
