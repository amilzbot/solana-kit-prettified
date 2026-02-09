/**
 * Type compatibility tests for solana-kit-prettified.
 *
 * Validates:
 * (a) Pretty* types are assignable to originals (Pretty → Original)
 * (b) Originals are assignable to Pretty* types (Original → Pretty)
 * (c) Branded type discrimination is preserved (Address ≠ Signature)
 *
 * Uses expect-type for compile-time type assertions via vitest typecheck.
 */
import { expectTypeOf, describe, it } from 'vitest';
import { assertType } from 'vitest';

// --- Core: Addresses ---
import type { Address, ProgramDerivedAddress, ProgramDerivedAddressBump } from '@solana/kit';
import type { PrettyAddress, PrettyProgramDerivedAddress, PrettyProgramDerivedAddressBump } from '../core/addresses.js';

// --- Core: Keys ---
import type { Signature, SignatureBytes } from '@solana/kit';
import type {
  KeyPairSigner,
  TransactionSigner,
  MessageSigner,
  TransactionPartialSigner,
  TransactionModifyingSigner,
  TransactionSendingSigner,
  MessagePartialSigner,
  MessageModifyingSigner,
} from '@solana/kit';
import type {
  PrettySignature,
  PrettySignatureBytes,
  PrettyKeyPairSigner,
  PrettyTransactionSigner,
  PrettyMessageSigner,
  PrettyTransactionPartialSigner,
  PrettyTransactionModifyingSigner,
  PrettyTransactionSendingSigner,
  PrettyMessagePartialSigner,
  PrettyMessageModifyingSigner,
} from '../core/keys.js';

// --- Core: Accounts ---
import type { Account, EncodedAccount, MaybeAccount, MaybeEncodedAccount, BaseAccount } from '@solana/kit';
import type {
  PrettyAccount,
  PrettyEncodedAccount,
  PrettyMaybeAccount,
  PrettyMaybeEncodedAccount,
  PrettyBaseAccount,
} from '../core/accounts.js';

// --- Core: Instructions ---
import type {
  AccountMeta,
  AccountLookupMeta,
  Instruction,
  ReadonlyAccount as ReadonlyAccountMeta,
  WritableAccount as WritableAccountMeta,
  ReadonlySignerAccount,
  WritableSignerAccount,
} from '@solana/kit';
import type {
  PrettyAccountMeta,
  PrettyAccountLookupMeta,
  PrettyInstruction,
  PrettyReadonlyAccount,
  PrettyWritableAccount,
  PrettyReadonlySignerAccount,
  PrettyWritableSignerAccount,
} from '../core/instructions.js';

// --- Core: Transaction Messages ---
import type {
  TransactionMessage,
  TransactionMessageWithFeePayer,
  TransactionMessageWithBlockhashLifetime,
  BlockhashLifetimeConstraint,
} from '@solana/kit';
import type {
  PrettyTransactionMessage,
  PrettyTransactionMessageWithFeePayer,
  PrettyTransactionMessageWithBlockhashLifetime,
  PrettyBlockhashLifetimeConstraint,
  PrettyCompilableTransactionMessage,
} from '../core/transaction-messages.js';

// --- Core: Transactions ---
import type { Transaction } from '@solana/kit';
import type { PrettyTransaction } from '../core/transactions.js';

// --- Core: RPC ---
// Lamports is a branded primitive re-exported directly (no PrettyLamports wrapper needed)

// ============================================================
// (a) + (b) Bidirectional assignability
// ============================================================

describe('Addresses: bidirectional assignability', () => {
  it('PrettyAddress ↔ Address', () => {
    expectTypeOf<PrettyAddress>().toMatchTypeOf<Address>();
    expectTypeOf<Address>().toMatchTypeOf<PrettyAddress>();
  });

  it('PrettyAddress<specific> ↔ Address<specific>', () => {
    expectTypeOf<PrettyAddress<'abc'>>().toMatchTypeOf<Address<'abc'>>();
    expectTypeOf<Address<'abc'>>().toMatchTypeOf<PrettyAddress<'abc'>>();
  });

  it('PrettyProgramDerivedAddress ↔ ProgramDerivedAddress', () => {
    expectTypeOf<PrettyProgramDerivedAddress>().toMatchTypeOf<ProgramDerivedAddress>();
    expectTypeOf<ProgramDerivedAddress>().toMatchTypeOf<PrettyProgramDerivedAddress>();
  });

  it('PrettyProgramDerivedAddressBump ↔ ProgramDerivedAddressBump', () => {
    expectTypeOf<PrettyProgramDerivedAddressBump>().toMatchTypeOf<ProgramDerivedAddressBump>();
    expectTypeOf<ProgramDerivedAddressBump>().toMatchTypeOf<PrettyProgramDerivedAddressBump>();
  });
});

describe('Keys: bidirectional assignability', () => {
  it('PrettySignature ↔ Signature', () => {
    expectTypeOf<PrettySignature>().toMatchTypeOf<Signature>();
    expectTypeOf<Signature>().toMatchTypeOf<PrettySignature>();
  });

  it('PrettyKeyPairSigner ↔ KeyPairSigner', () => {
    expectTypeOf<PrettyKeyPairSigner>().toMatchTypeOf<KeyPairSigner>();
    expectTypeOf<KeyPairSigner>().toMatchTypeOf<PrettyKeyPairSigner>();
  });

  it('PrettyTransactionSigner ↔ TransactionSigner', () => {
    expectTypeOf<PrettyTransactionSigner>().toMatchTypeOf<TransactionSigner>();
    expectTypeOf<TransactionSigner>().toMatchTypeOf<PrettyTransactionSigner>();
  });

  it('PrettyMessageSigner ↔ MessageSigner', () => {
    expectTypeOf<PrettyMessageSigner>().toMatchTypeOf<MessageSigner>();
    expectTypeOf<MessageSigner>().toMatchTypeOf<PrettyMessageSigner>();
  });

  it('PrettyTransactionPartialSigner ↔ TransactionPartialSigner', () => {
    expectTypeOf<PrettyTransactionPartialSigner>().toMatchTypeOf<TransactionPartialSigner>();
    expectTypeOf<TransactionPartialSigner>().toMatchTypeOf<PrettyTransactionPartialSigner>();
  });

  it('PrettyTransactionModifyingSigner ↔ TransactionModifyingSigner', () => {
    expectTypeOf<PrettyTransactionModifyingSigner>().toMatchTypeOf<TransactionModifyingSigner>();
    expectTypeOf<TransactionModifyingSigner>().toMatchTypeOf<PrettyTransactionModifyingSigner>();
  });

  it('PrettyTransactionSendingSigner ↔ TransactionSendingSigner', () => {
    expectTypeOf<PrettyTransactionSendingSigner>().toMatchTypeOf<TransactionSendingSigner>();
    expectTypeOf<TransactionSendingSigner>().toMatchTypeOf<PrettyTransactionSendingSigner>();
  });

  it('PrettyMessagePartialSigner ↔ MessagePartialSigner', () => {
    expectTypeOf<PrettyMessagePartialSigner>().toMatchTypeOf<MessagePartialSigner>();
    expectTypeOf<MessagePartialSigner>().toMatchTypeOf<PrettyMessagePartialSigner>();
  });

  it('PrettyMessageModifyingSigner ↔ MessageModifyingSigner', () => {
    expectTypeOf<PrettyMessageModifyingSigner>().toMatchTypeOf<MessageModifyingSigner>();
    expectTypeOf<MessageModifyingSigner>().toMatchTypeOf<PrettyMessageModifyingSigner>();
  });
});

describe('Accounts: bidirectional assignability', () => {
  it('PrettyAccount ↔ Account', () => {
    expectTypeOf<PrettyAccount<Uint8Array>>().toMatchTypeOf<Account<Uint8Array>>();
    expectTypeOf<Account<Uint8Array>>().toMatchTypeOf<PrettyAccount<Uint8Array>>();
  });

  it('PrettyAccount<custom data> ↔ Account<custom data>', () => {
    type MyData = { mint: string; amount: bigint };
    expectTypeOf<PrettyAccount<MyData>>().toMatchTypeOf<Account<MyData>>();
    expectTypeOf<Account<MyData>>().toMatchTypeOf<PrettyAccount<MyData>>();
  });

  it('PrettyEncodedAccount ↔ EncodedAccount', () => {
    expectTypeOf<PrettyEncodedAccount>().toMatchTypeOf<EncodedAccount>();
    expectTypeOf<EncodedAccount>().toMatchTypeOf<PrettyEncodedAccount>();
  });

  it('PrettyMaybeAccount ↔ MaybeAccount', () => {
    expectTypeOf<PrettyMaybeAccount<Uint8Array>>().toMatchTypeOf<MaybeAccount<Uint8Array>>();
    expectTypeOf<MaybeAccount<Uint8Array>>().toMatchTypeOf<PrettyMaybeAccount<Uint8Array>>();
  });

  it('PrettyMaybeEncodedAccount ↔ MaybeEncodedAccount', () => {
    expectTypeOf<PrettyMaybeEncodedAccount>().toMatchTypeOf<MaybeEncodedAccount>();
    expectTypeOf<MaybeEncodedAccount>().toMatchTypeOf<PrettyMaybeEncodedAccount>();
  });

  it('PrettyBaseAccount ↔ BaseAccount', () => {
    expectTypeOf<PrettyBaseAccount>().toMatchTypeOf<BaseAccount>();
    expectTypeOf<BaseAccount>().toMatchTypeOf<PrettyBaseAccount>();
  });
});

describe('Instructions: bidirectional assignability', () => {
  it('PrettyInstruction ↔ Instruction', () => {
    expectTypeOf<PrettyInstruction>().toMatchTypeOf<Instruction>();
    expectTypeOf<Instruction>().toMatchTypeOf<PrettyInstruction>();
  });

  it('PrettyAccountMeta ↔ AccountMeta', () => {
    expectTypeOf<PrettyAccountMeta>().toMatchTypeOf<AccountMeta>();
    expectTypeOf<AccountMeta>().toMatchTypeOf<PrettyAccountMeta>();
  });

  it('PrettyAccountLookupMeta ↔ AccountLookupMeta', () => {
    expectTypeOf<PrettyAccountLookupMeta>().toMatchTypeOf<AccountLookupMeta>();
    expectTypeOf<AccountLookupMeta>().toMatchTypeOf<PrettyAccountLookupMeta>();
  });
});

describe('Transaction Messages: bidirectional assignability', () => {
  it('PrettyTransactionMessage ↔ TransactionMessage', () => {
    expectTypeOf<PrettyTransactionMessage>().toMatchTypeOf<TransactionMessage>();
    expectTypeOf<TransactionMessage>().toMatchTypeOf<PrettyTransactionMessage>();
  });

  it('PrettyTransactionMessageWithFeePayer ↔ TransactionMessageWithFeePayer', () => {
    expectTypeOf<PrettyTransactionMessageWithFeePayer>().toMatchTypeOf<TransactionMessageWithFeePayer>();
    expectTypeOf<TransactionMessageWithFeePayer>().toMatchTypeOf<PrettyTransactionMessageWithFeePayer>();
  });

  it('PrettyBlockhashLifetimeConstraint ↔ BlockhashLifetimeConstraint', () => {
    expectTypeOf<PrettyBlockhashLifetimeConstraint>().toMatchTypeOf<BlockhashLifetimeConstraint>();
    expectTypeOf<BlockhashLifetimeConstraint>().toMatchTypeOf<PrettyBlockhashLifetimeConstraint>();
  });

  it('PrettyTransactionMessageWithBlockhashLifetime ↔ original', () => {
    expectTypeOf<PrettyTransactionMessageWithBlockhashLifetime>().toMatchTypeOf<TransactionMessageWithBlockhashLifetime>();
    expectTypeOf<TransactionMessageWithBlockhashLifetime>().toMatchTypeOf<PrettyTransactionMessageWithBlockhashLifetime>();
  });
});

describe('Transactions: bidirectional assignability', () => {
  it('PrettyTransaction ↔ Transaction', () => {
    expectTypeOf<PrettyTransaction>().toMatchTypeOf<Transaction>();
    expectTypeOf<Transaction>().toMatchTypeOf<PrettyTransaction>();
  });
});

// ============================================================
// (c) Branded type discrimination
// ============================================================

describe('Branded type discrimination', () => {
  it('Address is NOT assignable to Signature', () => {
    expectTypeOf<Address>().not.toMatchTypeOf<Signature>();
    expectTypeOf<Signature>().not.toMatchTypeOf<Address>();
  });

  it('PrettyAddress is NOT assignable to PrettySignature', () => {
    expectTypeOf<PrettyAddress>().not.toMatchTypeOf<PrettySignature>();
    expectTypeOf<PrettySignature>().not.toMatchTypeOf<PrettyAddress>();
  });

  it('PrettyAddress is NOT assignable to Signature (cross-pretty/original)', () => {
    expectTypeOf<PrettyAddress>().not.toMatchTypeOf<Signature>();
    expectTypeOf<PrettySignature>().not.toMatchTypeOf<Address>();
  });
});
