# Hover Test Results

Since programmatic hover capture (via TS Language Service QuickInfo) produces identical
output to VS Code tooltips, we use `examples/capture-hover.ts` to generate
`hover-results.md` instead of manual screenshots.

To regenerate:
```bash
npm install --include=dev
node --experimental-specifier-resolution=node --import=data:text/javascript, examples/capture-hover.ts
```

## Summary

See `hover-results.md` for full before/after comparison.

### Key Findings

| Type | Original (hover) | Pretty (hover) | Verdict |
|------|-------------------|-----------------|---------|
| Account | `BaseAccount & { address, data }` | Flat: `{ executable, lamports, programAddress, space, address, data }` | ✅ Major improvement |
| MaybeAccount | Union with `BaseAccount &` in exists:true variant | Both variants fully flat | ✅ Major improvement |
| EncodedAccount | `BaseAccount & { address, data }` | Flat single object | ✅ Major improvement |
| CompilableTransactionMessage | `TransactionMessage & FeePayer & BlockhashLifetime` | Flat: `{ instructions, version, feePayer, lifetimeConstraint }` | ✅ Biggest win |
| KeyPairSigner | 3 Readonly intersections + `{ ... }` | Flat: `{ address, signMessages, signTransactions, keyPair }` | ✅ Major improvement |
| WritableAccount | `AccountMeta & { role }` | `{ address, role }` | ✅ Clean |
| TransactionMessage | `Readonly<{ ... }>` wrapper | Direct properties | ✅ Cleaner |
| Address / Signature | Branded string (unchanged) | Identical — primitive guard works | ✅ Preserved |
| CombinedInstruction | Shows intersection noise in sub-fields | Minor: `data: ReadonlyUint8Array & Uint8Array` | ⚠️ Acceptable |
| Transaction | Already flat (`{ messageBytes, signatures }`) | Identical | ➡️ No change needed |

### Conclusion

Prettification provides meaningful improvement for:
1. **Intersection types** (Account, KeyPairSigner, CompilableTransactionMessage) — the primary targets
2. **Union types** (MaybeAccount, TransactionSigner) — each variant flattens
3. **Readonly wrappers** (TransactionMessage, TransactionMessageWithFeePayer) — removes wrapping noise

Branded primitives (Address, Signature, Lamports) correctly pass through unchanged.

Quality gate: **PASSED** ✅
