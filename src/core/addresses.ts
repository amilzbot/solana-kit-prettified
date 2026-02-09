/**
 * Prettified address types from @solana/addresses.
 *
 * Address is a branded primitive (string & { __brand, __encoding }) — Prettify preserves it
 * unchanged via the primitive guard. ProgramDerivedAddress is a Readonly tuple, so Prettify
 * flattens it into a readable shape.
 *
 * ProgramDerivedAddressBump is a branded number — also preserved unchanged.
 */
import type { Address, ProgramDerivedAddress, ProgramDerivedAddressBump } from '@solana/kit';
import type { Prettify } from '../prettify.js';

/**
 * A Solana address (base58-encoded, branded string).
 * Branded primitives pass through Prettify unchanged — tooltip already shows a clean shape.
 * Re-exported for convenience and consistency with other Pretty* types.
 */
export type PrettyAddress<TAddress extends string = string> = Prettify<Address<TAddress>>;

/**
 * A program-derived address: `readonly [Address, ProgramDerivedAddressBump]`.
 * Prettify flattens the Readonly wrapper for a cleaner tooltip.
 */
export type PrettyProgramDerivedAddress<TAddress extends string = string> = Prettify<ProgramDerivedAddress<TAddress>>;

/**
 * The bump seed (0–255) used in PDA derivation. Branded number — passes through unchanged.
 */
export type PrettyProgramDerivedAddressBump = Prettify<ProgramDerivedAddressBump>;

// Re-export originals for convenience
export type { Address, ProgramDerivedAddress, ProgramDerivedAddressBump } from '@solana/kit';
