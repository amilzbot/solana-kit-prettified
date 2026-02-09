# Hover Test Results (Language Service QuickInfo)

Generated: 2026-02-09T07:07:33.270Z

Shows what VS Code tooltips display for each type alias.
Compare Original* vs Prettified* pairs — Prettified should show flat object shapes.

---

### `OriginalAccount` (line 77)
```typescript
type OriginalAccount = BaseAccount & {
    readonly address: Address<string>;
    readonly data: {
        mint: Address;
        owner: Address;
        amount: bigint;
    };
}
```

### `PrettifiedAccount` (line 78)
```typescript
type PrettifiedAccount = {
    readonly executable: boolean;
    readonly lamports: Lamports;
    readonly programAddress: Address;
    readonly space: bigint;
    readonly address: Address<string>;
    readonly data: {
        mint: Address;
        owner: Address;
        amount: bigint;
    };
}
```

### `OriginalMaybeAccount` (line 82)
```typescript
type OriginalMaybeAccount = {
    readonly address: Address<string>;
    readonly exists: false;
} | (BaseAccount & {
    readonly address: Address<string>;
    readonly data: Uint8Array<ArrayBufferLike>;
} & {
    readonly exists: true;
})
```

### `PrettifiedMaybeAccount` (line 83)
```typescript
type PrettifiedMaybeAccount = {
    readonly address: Address<string>;
    readonly exists: false;
} | {
    readonly executable: boolean;
    readonly lamports: Lamports;
    readonly programAddress: Address;
    readonly space: bigint;
    readonly address: Address<string>;
    readonly data: Uint8Array<ArrayBufferLike>;
    readonly exists: true;
}
```

### `OriginalEncoded` (line 86)
```typescript
type OriginalEncoded = BaseAccount & {
    readonly address: Address<string>;
    readonly data: ReadonlyUint8Array<ArrayBufferLike>;
}
```

### `PrettifiedEncoded` (line 87)
```typescript
type PrettifiedEncoded = {
    readonly executable: boolean;
    readonly lamports: Lamports;
    readonly programAddress: Address;
    readonly space: bigint;
    readonly address: Address<string>;
    readonly data: ReadonlyUint8Array<ArrayBufferLike>;
}
```

### `OriginalCombinedIx` (line 94)
```typescript
type OriginalCombinedIx = Instruction<"11111111111111111111111111111111", readonly (AccountLookupMeta<string, string> | AccountMeta<string>)[]> & {
    accounts: readonly [WritableMeta, ReadonlySignerMeta];
    data: Uint8Array;
}
```

### `PrettifiedCombinedIx` (line 98)
```typescript
type PrettifiedCombinedIx = {
    readonly accounts: readonly [WritableMeta, ReadonlySignerMeta] & readonly (AccountLookupMeta<string, string> | AccountMeta<string>)[];
    readonly data: ReadonlyUint8Array<ArrayBufferLike> & Uint8Array<ArrayBufferLike>;
    readonly programAddress: NominalType<"brand", "Address"> & NominalType<"stringEncoding", "base58"> & "11111111111111111111111111111111";
}
```

### `OriginalWritable` (line 106)
```typescript
type OriginalWritable = AccountMeta<string> & {
    role: AccountRole.WRITABLE;
}
```

### `PrettifiedWritable` (line 107)
```typescript
type PrettifiedWritable = {
    readonly address: Address<string>;
    role: AccountRole.WRITABLE;
}
```

### `OriginalTxMsg` (line 114)
```typescript
type OriginalTxMsg = Readonly<{
    instructions: readonly LegacyInstruction<string>[];
    version: "legacy";
}> | Readonly<{
    instructions: readonly Instruction<string, readonly (AccountLookupMeta<string, string> | AccountMeta<string>)[]>[];
    version: 0;
}>
```

### `PrettifiedTxMsg` (line 115)
```typescript
type PrettifiedTxMsg = {
    readonly instructions: readonly LegacyInstruction<string>[];
    readonly version: "legacy";
} | {
    readonly instructions: readonly Instruction<string, readonly (AccountLookupMeta<string, string> | AccountMeta<string>)[]>[];
    readonly version: 0;
}
```

### `OriginalWithFee` (line 117)
```typescript
type OriginalWithFee = TransactionMessageWithFeePayer<string>
```

### `PrettifiedWithFee` (line 118)
```typescript
type PrettifiedWithFee = {
    readonly feePayer: Readonly<{
        address: Address<string>;
    }>;
}
```

### `OriginalCompilable` (line 121)
```typescript
type OriginalCompilable = TransactionMessage & TransactionMessageWithFeePayer<string> & TransactionMessageWithBlockhashLifetime
```

### `PrettifiedCompilable` (line 124)
```typescript
type PrettifiedCompilable = {
    readonly instructions: readonly LegacyInstruction<string>[];
    readonly version: "legacy";
    readonly feePayer: Readonly<{
        address: Address<string>;
    }>;
    readonly lifetimeConstraint: BlockhashLifetimeConstraint;
} | {
    readonly instructions: readonly Instruction<string, readonly (AccountLookupMeta<string, string> | AccountMeta<string>)[]>[];
    readonly version: 0;
    readonly feePayer: Readonly<{
        address: Address<string>;
    }>;
    readonly lifetimeConstraint: BlockhashLifetimeConstraint;
}
```

### `OriginalTx` (line 132)
```typescript
type OriginalTx = {
    readonly messageBytes: TransactionMessageBytes;
    readonly signatures: SignaturesMap;
}
```

### `PrettifiedTx` (line 133)
```typescript
type PrettifiedTx = {
    readonly messageBytes: TransactionMessageBytes;
    readonly signatures: SignaturesMap;
}
```

### `OriginalTxWithLifetime` (line 135)
```typescript
type OriginalTxWithLifetime = {
    readonly lifetimeConstraint: TransactionBlockhashLifetime;
}
```

### `PrettifiedTxWithLifetime` (line 136)
```typescript
type PrettifiedTxWithLifetime = {
    readonly lifetimeConstraint: TransactionBlockhashLifetime;
}
```

### `OriginalReady` (line 138)
```typescript
type OriginalReady = {
    readonly messageBytes: TransactionMessageBytes;
    readonly signatures: SignaturesMap;
    readonly "__transactionSignedness:@solana/kit": "fullySigned";
    readonly lifetimeConstraint: TransactionBlockhashLifetime;
}
```

### `OriginalKP` (line 145)
```typescript
type OriginalKP = Readonly<{
    address: Address<string>;
    signMessages(messages: readonly SignableMessage[], config?: MessagePartialSignerConfig): Promise<readonly SignatureDictionary[]>;
}> & Readonly<{
    address: Address<string>;
    signTransactions(transactions: readonly (Transaction & TransactionWithinSizeLimit & TransactionWithLifetime)[], config?: TransactionPartialSignerConfig): Promise<readonly SignatureDictionary[]>;
}> & {
    ...;
}
```

### `PrettifiedKP` (line 146)
```typescript
type PrettifiedKP = {
    readonly address: NominalType<"brand", "Address"> & NominalType<"stringEncoding", "base58"> & string;
    readonly signMessages: (messages: readonly SignableMessage[], config?: MessagePartialSignerConfig) => Promise<readonly SignatureDictionary[]>;
    readonly signTransactions: (transactions: readonly (Transaction & TransactionWithinSizeLimit & TransactionWithLifetime)[], config?: TransactionPartialSignerConfig) => Promise<readonly SignatureDictionary[]>;
    keyPair: CryptoKeyPair;
}
```

### `OriginalTxSigner` (line 150)
```typescript
type OriginalTxSigner = Readonly<{
    address: Address<string>;
    signTransactions(transactions: readonly (Transaction & TransactionWithinSizeLimit & TransactionWithLifetime)[], config?: TransactionPartialSignerConfig): Promise<readonly SignatureDictionary[]>;
}> | Readonly<{
    address: Address<string>;
    modifyAndSignTransactions(transactions: readonly (Transaction | (Transaction & TransactionWithLifetime))[], config?: TransactionModifyingSignerConfig): Promise<readonly (Transaction & TransactionWithinSizeLimit & TransactionWithLifetime)[]>;
}> | Readonly<...>
```

### `PrettifiedTxSigner` (line 151)
```typescript
type PrettifiedTxSigner = {
    readonly address: Address<string>;
    readonly modifyAndSignTransactions: (transactions: readonly (Transaction | (Transaction & TransactionWithLifetime))[], config?: TransactionModifyingSignerConfig) => Promise<readonly (Transaction & TransactionWithinSizeLimit & TransactionWithLifetime)[]>;
} | {
    ...;
} | {
    ...;
}
```

### `OriginalAddr` (line 158)
```typescript
type OriginalAddr = NominalType<"brand", "Address"> & NominalType<"stringEncoding", "base58"> & string
```

### `PrettifiedAddr` (line 159)
```typescript
type PrettifiedAddr = NominalType<"brand", "Address"> & NominalType<"stringEncoding", "base58"> & string
```

### `OriginalSig` (line 162)
```typescript
type OriginalSig = NominalType<"brand", "Signature"> & NominalType<"stringEncoding", "base58"> & string
```

### `PrettifiedSig` (line 163)
```typescript
type PrettifiedSig = NominalType<"brand", "Signature"> & NominalType<"stringEncoding", "base58"> & string
```

### `OriginalRpcResp` (line 170)
```typescript
type OriginalRpcResp = {
    readonly context: Readonly<{
        slot: Slot;
    }>;
    readonly value: {
        lamports: Lamports;
    };
}
```

### `PrettifiedRpcResp` (line 171)
```typescript
type PrettifiedRpcResp = {
    readonly context: Readonly<{
        slot: bigint;
    }>;
    readonly value: {
        lamports: Lamports;
    };
}
```
