/**
 * Prettified wrappers for instruction plan, transaction plan, and transaction plan result types
 * from @solana/instruction-plans.
 *
 * These types are `Readonly<{...}>` objects — Prettify removes the Readonly wrapper noise
 * in IDE tooltips, showing clean flat shapes. The recursive union types (TransactionPlan,
 * InstructionPlan, TransactionPlanResult) distribute Prettify over each variant.
 */
import type { Instruction } from '@solana/instructions';
import type {
  // Instruction Plans
  InstructionPlan,
  SingleInstructionPlan,
  SequentialInstructionPlan,
  ParallelInstructionPlan,
  MessagePackerInstructionPlan,
  MessagePacker,

  // Transaction Plans
  TransactionPlan,
  SingleTransactionPlan,
  SequentialTransactionPlan,
  ParallelTransactionPlan,

  // Transaction Plan Results
  TransactionPlanResult,
  TransactionPlanResultContext,
  BaseTransactionPlanResultContext,
  SuccessfulBaseTransactionPlanResultContext,
  SingleTransactionPlanResult,
  SuccessfulSingleTransactionPlanResult,
  FailedSingleTransactionPlanResult,
  CanceledSingleTransactionPlanResult,
  SuccessfulTransactionPlanResult,
  SequentialTransactionPlanResult,
  ParallelTransactionPlanResult,

  // Executor + Planner
  TransactionPlanExecutor,
  TransactionPlanExecutorConfig,
  TransactionPlanner,
  TransactionPlannerConfig,
} from '@solana/instruction-plans';
import type { TransactionMessage, TransactionMessageWithFeePayer } from '@solana/transaction-messages';
import type { Prettify } from '../prettify.js';

// ——— Instruction Plans ———

/** Prettified {@link SingleInstructionPlan}. Flattens Readonly wrapper for clean tooltips. */
export type PrettySingleInstructionPlan<TInstruction extends Instruction = Instruction> = Prettify<
  SingleInstructionPlan<TInstruction>
>;

/** Prettified {@link SequentialInstructionPlan}. */
export type PrettySequentialInstructionPlan = Prettify<SequentialInstructionPlan>;

/** Prettified {@link ParallelInstructionPlan}. */
export type PrettyParallelInstructionPlan = Prettify<ParallelInstructionPlan>;

/** Prettified {@link MessagePackerInstructionPlan}. */
export type PrettyMessagePackerInstructionPlan = Prettify<MessagePackerInstructionPlan>;

/** Prettified {@link MessagePacker}. */
export type PrettyMessagePacker = Prettify<MessagePacker>;

// ——— Transaction Plans ———

/** Prettified {@link SingleTransactionPlan}. */
export type PrettySingleTransactionPlan<
  TTransactionMessage extends TransactionMessage & TransactionMessageWithFeePayer =
    TransactionMessage & TransactionMessageWithFeePayer,
> = Prettify<SingleTransactionPlan<TTransactionMessage>>;

/** Prettified {@link SequentialTransactionPlan}. */
export type PrettySequentialTransactionPlan = Prettify<SequentialTransactionPlan>;

/** Prettified {@link ParallelTransactionPlan}. */
export type PrettyParallelTransactionPlan = Prettify<ParallelTransactionPlan>;

// ——— Transaction Plan Results ———

/** Prettified {@link BaseTransactionPlanResultContext}. */
export type PrettyBaseTransactionPlanResultContext = Prettify<BaseTransactionPlanResultContext>;

/** Prettified {@link SuccessfulBaseTransactionPlanResultContext}. */
export type PrettySuccessfulBaseTransactionPlanResultContext = Prettify<SuccessfulBaseTransactionPlanResultContext>;

/** Prettified {@link SuccessfulSingleTransactionPlanResult}. */
export type PrettySuccessfulSingleTransactionPlanResult<
  TContext extends TransactionPlanResultContext = TransactionPlanResultContext,
  TTransactionMessage extends TransactionMessage & TransactionMessageWithFeePayer =
    TransactionMessage & TransactionMessageWithFeePayer,
> = Prettify<SuccessfulSingleTransactionPlanResult<TContext, TTransactionMessage>>;

/** Prettified {@link FailedSingleTransactionPlanResult}. */
export type PrettyFailedSingleTransactionPlanResult<
  TContext extends TransactionPlanResultContext = TransactionPlanResultContext,
  TTransactionMessage extends TransactionMessage & TransactionMessageWithFeePayer =
    TransactionMessage & TransactionMessageWithFeePayer,
> = Prettify<FailedSingleTransactionPlanResult<TContext, TTransactionMessage>>;

/** Prettified {@link CanceledSingleTransactionPlanResult}. */
export type PrettyCanceledSingleTransactionPlanResult<
  TContext extends TransactionPlanResultContext = TransactionPlanResultContext,
  TTransactionMessage extends TransactionMessage & TransactionMessageWithFeePayer =
    TransactionMessage & TransactionMessageWithFeePayer,
> = Prettify<CanceledSingleTransactionPlanResult<TContext, TTransactionMessage>>;

/** Prettified {@link SequentialTransactionPlanResult}. */
export type PrettySequentialTransactionPlanResult<
  TContext extends TransactionPlanResultContext = TransactionPlanResultContext,
  TTransactionMessage extends TransactionMessage & TransactionMessageWithFeePayer =
    TransactionMessage & TransactionMessageWithFeePayer,
  TSingle extends SingleTransactionPlanResult<TContext, TTransactionMessage> =
    SingleTransactionPlanResult<TContext, TTransactionMessage>,
> = Prettify<SequentialTransactionPlanResult<TContext, TTransactionMessage, TSingle>>;

/** Prettified {@link ParallelTransactionPlanResult}. */
export type PrettyParallelTransactionPlanResult<
  TContext extends TransactionPlanResultContext = TransactionPlanResultContext,
  TTransactionMessage extends TransactionMessage & TransactionMessageWithFeePayer =
    TransactionMessage & TransactionMessageWithFeePayer,
  TSingle extends SingleTransactionPlanResult<TContext, TTransactionMessage> =
    SingleTransactionPlanResult<TContext, TTransactionMessage>,
> = Prettify<ParallelTransactionPlanResult<TContext, TTransactionMessage, TSingle>>;

// ——— Executor + Planner Config ———

/** Prettified {@link TransactionPlanExecutorConfig}. */
export type PrettyTransactionPlanExecutorConfig<
  TContext extends TransactionPlanResultContext = TransactionPlanResultContext,
> = Prettify<TransactionPlanExecutorConfig<TContext>>;

/** Prettified {@link TransactionPlannerConfig}. */
export type PrettyTransactionPlannerConfig = Prettify<TransactionPlannerConfig>;

// ——— Re-exports ———
// Re-export all originals so consumers can use both Pretty* and original types.
// Also re-export runtime functions (type guards, helpers, factories).

export type {
  // Instruction Plans
  InstructionPlan,
  SingleInstructionPlan,
  SequentialInstructionPlan,
  ParallelInstructionPlan,
  MessagePackerInstructionPlan,
  MessagePacker,

  // Transaction Plans
  TransactionPlan,
  SingleTransactionPlan,
  SequentialTransactionPlan,
  ParallelTransactionPlan,

  // Transaction Plan Results
  TransactionPlanResult,
  TransactionPlanResultContext,
  BaseTransactionPlanResultContext,
  SuccessfulBaseTransactionPlanResultContext,
  SingleTransactionPlanResult,
  SuccessfulSingleTransactionPlanResult,
  FailedSingleTransactionPlanResult,
  CanceledSingleTransactionPlanResult,
  SuccessfulTransactionPlanResult,
  SequentialTransactionPlanResult,
  ParallelTransactionPlanResult,

  // Executor + Planner
  TransactionPlanExecutor,
  TransactionPlanExecutorConfig,
  TransactionPlanner,
  TransactionPlannerConfig,
} from '@solana/instruction-plans';
