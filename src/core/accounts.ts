import type { Account, BaseAccount, EncodedAccount } from '@solana/kit';
import type { MaybeAccount, MaybeEncodedAccount } from '@solana/kit';
import type { Prettify } from '../prettify.js';

/**
 * {@link Account} with flattened intersection for readable IDE tooltips.
 * Drop-in compatible with `Account`.
 */
export type PrettyAccount<TData extends Uint8Array | object = Uint8Array, TAddress extends string = string> =
    Prettify<Account<TData, TAddress>>;

/**
 * {@link EncodedAccount} with flattened intersection for readable IDE tooltips.
 * Drop-in compatible with `EncodedAccount`.
 */
export type PrettyEncodedAccount<TAddress extends string = string> = Prettify<EncodedAccount<TAddress>>;

/**
 * {@link MaybeAccount} with flattened variants for readable IDE tooltips.
 * Drop-in compatible with `MaybeAccount`.
 *
 * MaybeAccount is a union — Prettify distributes over each variant.
 */
export type PrettyMaybeAccount<TData extends Uint8Array | object = Uint8Array, TAddress extends string = string> =
    Prettify<MaybeAccount<TData, TAddress>>;

/**
 * {@link MaybeEncodedAccount} with flattened variants for readable IDE tooltips.
 * Drop-in compatible with `MaybeEncodedAccount`.
 */
export type PrettyMaybeEncodedAccount<TAddress extends string = string> = Prettify<MaybeEncodedAccount<TAddress>>;

/**
 * {@link BaseAccount} with flattened type for readable IDE tooltips.
 * BaseAccount is already a plain object type, so this mainly ensures consistency.
 */
export type PrettyBaseAccount = Prettify<BaseAccount>;

// Re-export originals
export type { Account, BaseAccount, EncodedAccount, MaybeAccount, MaybeEncodedAccount } from '@solana/kit';
