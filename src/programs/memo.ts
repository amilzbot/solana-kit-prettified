/**
 * Prettified types for the Memo program (MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr).
 *
 * Only one instruction: AddMemo. The instruction type is still a multi-intersection
 * (Instruction & InstructionWithData & InstructionWithAccounts) worth flattening.
 */
import type { Prettify } from '../prettify.js';

import type {
    AddMemoInstruction,
    AddMemoInput,
    AddMemoInstructionData,
    AddMemoInstructionDataArgs,
    ParsedAddMemoInstruction,
    ParsedMemoInstruction,
    MemoInstruction,
} from '@solana-program/memo';

import type { AccountMeta } from '@solana/kit';

// ─── AddMemo ─────────────────────────────────────────────────────────────────

/** Prettified AddMemo instruction (flattens Instruction & InstructionWithData & InstructionWithAccounts). */
export type PrettyAddMemoInstruction<
    TProgram extends string = 'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr',
    TRemainingAccounts extends readonly AccountMeta<string>[] = [],
> = Prettify<AddMemoInstruction<TProgram, TRemainingAccounts>>;

/** Prettified AddMemo input. */
export type PrettyAddMemoInput = Prettify<AddMemoInput>;

/** Prettified AddMemo instruction data. */
export type PrettyAddMemoInstructionData = Prettify<AddMemoInstructionData>;

/** Prettified AddMemo instruction data args. */
export type PrettyAddMemoInstructionDataArgs = Prettify<AddMemoInstructionDataArgs>;

/** Prettified parsed AddMemo instruction. */
export type PrettyParsedAddMemoInstruction<
    TProgram extends string = 'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr',
> = Prettify<ParsedAddMemoInstruction<TProgram>>;

/** Prettified parsed Memo program instruction (discriminated union — currently just AddMemo). */
export type PrettyParsedMemoInstruction<
    TProgram extends string = 'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr',
> = Prettify<ParsedMemoInstruction<TProgram>>;

// ─── Re-exports ──────────────────────────────────────────────────────────────

export type {
    AddMemoInstruction,
    AddMemoInput,
    AddMemoInstructionData,
    AddMemoInstructionDataArgs,
    ParsedAddMemoInstruction,
    ParsedMemoInstruction,
    MemoInstruction,
} from '@solana-program/memo';

export {
    MEMO_PROGRAM_ADDRESS,
    getAddMemoInstruction,
    getAddMemoInstructionDataEncoder,
    getAddMemoInstructionDataDecoder,
    getAddMemoInstructionDataCodec,
    parseAddMemoInstruction,
} from '@solana-program/memo';
