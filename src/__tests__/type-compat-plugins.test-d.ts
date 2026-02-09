/**
 * Type compatibility tests for Phase 2: plugin types.
 *
 * Validates bidirectional assignability between Pretty* and original types
 * for clients, plans, results, and configs.
 */
import { expectTypeOf, describe, it } from 'vitest';

// --- Clients ---
import type {
  PrettyDefaultRpcClient,
  PrettyDefaultLocalhostRpcClient,
  PrettyDefaultLiteSVMClient,
} from '../plugins/clients.js';

// --- Plans ---
import type {
  SingleInstructionPlan,
  SequentialInstructionPlan,
  ParallelInstructionPlan,
  MessagePackerInstructionPlan,
  SingleTransactionPlan,
  SequentialTransactionPlan,
  ParallelTransactionPlan,
  SuccessfulSingleTransactionPlanResult,
  FailedSingleTransactionPlanResult,
  CanceledSingleTransactionPlanResult,
  SequentialTransactionPlanResult,
  ParallelTransactionPlanResult,
  BaseTransactionPlanResultContext,
  SuccessfulBaseTransactionPlanResultContext,
  TransactionPlanExecutorConfig,
  TransactionPlannerConfig,
} from '@solana/kit';
import type {
  PrettySingleInstructionPlan,
  PrettySequentialInstructionPlan,
  PrettyParallelInstructionPlan,
  PrettyMessagePackerInstructionPlan,
  PrettySingleTransactionPlan,
  PrettySequentialTransactionPlan,
  PrettyParallelTransactionPlan,
  PrettySuccessfulSingleTransactionPlanResult,
  PrettyFailedSingleTransactionPlanResult,
  PrettyCanceledSingleTransactionPlanResult,
  PrettySequentialTransactionPlanResult,
  PrettyParallelTransactionPlanResult,
  PrettyBaseTransactionPlanResultContext,
  PrettySuccessfulBaseTransactionPlanResultContext,
  PrettyTransactionPlanExecutorConfig,
  PrettyTransactionPlannerConfig,
} from '../plugins/plans.js';

// --- Configs ---
import type { ClusterUrl, DefaultRpcSubscriptionsChannelConfig } from '@solana/kit';
import type { PrettyDefaultRpcSubscriptionsChannelConfig } from '../plugins/configs.js';

// ============================================================
// Clients — structural checks (no raw equivalent to compare directly)
// ============================================================

describe('Clients: structural verification', () => {
  it('PrettyDefaultRpcClient has expected properties', () => {
    expectTypeOf<PrettyDefaultRpcClient>().toHaveProperty('rpc');
    expectTypeOf<PrettyDefaultRpcClient>().toHaveProperty('payer');
    expectTypeOf<PrettyDefaultRpcClient>().toHaveProperty('sendTransaction');
    expectTypeOf<PrettyDefaultRpcClient>().toHaveProperty('sendTransactions');
    expectTypeOf<PrettyDefaultRpcClient>().toHaveProperty('transactionPlanner');
    expectTypeOf<PrettyDefaultRpcClient>().toHaveProperty('transactionPlanExecutor');
  });

  it('PrettyDefaultLocalhostRpcClient has expected properties', () => {
    expectTypeOf<PrettyDefaultLocalhostRpcClient>().toHaveProperty('rpc');
    expectTypeOf<PrettyDefaultLocalhostRpcClient>().toHaveProperty('payer');
    expectTypeOf<PrettyDefaultLocalhostRpcClient>().toHaveProperty('airdrop');
    expectTypeOf<PrettyDefaultLocalhostRpcClient>().toHaveProperty('sendTransaction');
  });

  it('PrettyDefaultLiteSVMClient has expected properties', () => {
    expectTypeOf<PrettyDefaultLiteSVMClient>().toHaveProperty('rpc');
    expectTypeOf<PrettyDefaultLiteSVMClient>().toHaveProperty('payer');
    expectTypeOf<PrettyDefaultLiteSVMClient>().toHaveProperty('airdrop');
    expectTypeOf<PrettyDefaultLiteSVMClient>().toHaveProperty('svm');
    expectTypeOf<PrettyDefaultLiteSVMClient>().toHaveProperty('sendTransaction');
  });

  it('PrettyDefaultRpcClient does NOT have use method (stripped)', () => {
    expectTypeOf<PrettyDefaultRpcClient>().not.toHaveProperty('use');
  });
});

// ============================================================
// Instruction Plans: bidirectional assignability
// ============================================================

describe('Instruction Plans: bidirectional assignability', () => {
  it('PrettySingleInstructionPlan ↔ SingleInstructionPlan', () => {
    expectTypeOf<PrettySingleInstructionPlan>().toMatchTypeOf<SingleInstructionPlan>();
    expectTypeOf<SingleInstructionPlan>().toMatchTypeOf<PrettySingleInstructionPlan>();
  });

  it('PrettySequentialInstructionPlan ↔ SequentialInstructionPlan', () => {
    expectTypeOf<PrettySequentialInstructionPlan>().toMatchTypeOf<SequentialInstructionPlan>();
    expectTypeOf<SequentialInstructionPlan>().toMatchTypeOf<PrettySequentialInstructionPlan>();
  });

  it('PrettyParallelInstructionPlan ↔ ParallelInstructionPlan', () => {
    expectTypeOf<PrettyParallelInstructionPlan>().toMatchTypeOf<ParallelInstructionPlan>();
    expectTypeOf<ParallelInstructionPlan>().toMatchTypeOf<PrettyParallelInstructionPlan>();
  });

  it('PrettyMessagePackerInstructionPlan ↔ MessagePackerInstructionPlan', () => {
    expectTypeOf<PrettyMessagePackerInstructionPlan>().toMatchTypeOf<MessagePackerInstructionPlan>();
    expectTypeOf<MessagePackerInstructionPlan>().toMatchTypeOf<PrettyMessagePackerInstructionPlan>();
  });
});

// ============================================================
// Transaction Plans: bidirectional assignability
// ============================================================

describe('Transaction Plans: bidirectional assignability', () => {
  it('PrettySingleTransactionPlan ↔ SingleTransactionPlan', () => {
    expectTypeOf<PrettySingleTransactionPlan>().toMatchTypeOf<SingleTransactionPlan>();
    expectTypeOf<SingleTransactionPlan>().toMatchTypeOf<PrettySingleTransactionPlan>();
  });

  it('PrettySequentialTransactionPlan ↔ SequentialTransactionPlan', () => {
    expectTypeOf<PrettySequentialTransactionPlan>().toMatchTypeOf<SequentialTransactionPlan>();
    expectTypeOf<SequentialTransactionPlan>().toMatchTypeOf<PrettySequentialTransactionPlan>();
  });

  it('PrettyParallelTransactionPlan ↔ ParallelTransactionPlan', () => {
    expectTypeOf<PrettyParallelTransactionPlan>().toMatchTypeOf<ParallelTransactionPlan>();
    expectTypeOf<ParallelTransactionPlan>().toMatchTypeOf<PrettyParallelTransactionPlan>();
  });
});

// ============================================================
// Transaction Plan Results: bidirectional assignability
// ============================================================

describe('Transaction Plan Results: bidirectional assignability', () => {
  it('PrettySuccessfulSingleTransactionPlanResult ↔ original', () => {
    expectTypeOf<PrettySuccessfulSingleTransactionPlanResult>().toMatchTypeOf<SuccessfulSingleTransactionPlanResult>();
    expectTypeOf<SuccessfulSingleTransactionPlanResult>().toMatchTypeOf<PrettySuccessfulSingleTransactionPlanResult>();
  });

  it('PrettyFailedSingleTransactionPlanResult ↔ original', () => {
    expectTypeOf<PrettyFailedSingleTransactionPlanResult>().toMatchTypeOf<FailedSingleTransactionPlanResult>();
    expectTypeOf<FailedSingleTransactionPlanResult>().toMatchTypeOf<PrettyFailedSingleTransactionPlanResult>();
  });

  it('PrettyCanceledSingleTransactionPlanResult ↔ original', () => {
    expectTypeOf<PrettyCanceledSingleTransactionPlanResult>().toMatchTypeOf<CanceledSingleTransactionPlanResult>();
    expectTypeOf<CanceledSingleTransactionPlanResult>().toMatchTypeOf<PrettyCanceledSingleTransactionPlanResult>();
  });

  it('PrettySequentialTransactionPlanResult ↔ original', () => {
    expectTypeOf<PrettySequentialTransactionPlanResult>().toMatchTypeOf<SequentialTransactionPlanResult>();
    expectTypeOf<SequentialTransactionPlanResult>().toMatchTypeOf<PrettySequentialTransactionPlanResult>();
  });

  it('PrettyParallelTransactionPlanResult ↔ original', () => {
    expectTypeOf<PrettyParallelTransactionPlanResult>().toMatchTypeOf<ParallelTransactionPlanResult>();
    expectTypeOf<ParallelTransactionPlanResult>().toMatchTypeOf<PrettyParallelTransactionPlanResult>();
  });
});

// ============================================================
// Context & Config: bidirectional assignability
// ============================================================

describe('Context & Config: bidirectional assignability', () => {
  it('PrettyBaseTransactionPlanResultContext ↔ original', () => {
    expectTypeOf<PrettyBaseTransactionPlanResultContext>().toMatchTypeOf<BaseTransactionPlanResultContext>();
    expectTypeOf<BaseTransactionPlanResultContext>().toMatchTypeOf<PrettyBaseTransactionPlanResultContext>();
  });

  it('PrettySuccessfulBaseTransactionPlanResultContext ↔ original', () => {
    expectTypeOf<PrettySuccessfulBaseTransactionPlanResultContext>().toMatchTypeOf<SuccessfulBaseTransactionPlanResultContext>();
    expectTypeOf<SuccessfulBaseTransactionPlanResultContext>().toMatchTypeOf<PrettySuccessfulBaseTransactionPlanResultContext>();
  });

  it('PrettyTransactionPlanExecutorConfig ↔ original', () => {
    expectTypeOf<PrettyTransactionPlanExecutorConfig>().toMatchTypeOf<TransactionPlanExecutorConfig>();
    expectTypeOf<TransactionPlanExecutorConfig>().toMatchTypeOf<PrettyTransactionPlanExecutorConfig>();
  });

  it('PrettyTransactionPlannerConfig ↔ original', () => {
    expectTypeOf<PrettyTransactionPlannerConfig>().toMatchTypeOf<TransactionPlannerConfig>();
    expectTypeOf<TransactionPlannerConfig>().toMatchTypeOf<PrettyTransactionPlannerConfig>();
  });

  it('PrettyDefaultRpcSubscriptionsChannelConfig ↔ original', () => {
    expectTypeOf<PrettyDefaultRpcSubscriptionsChannelConfig<ClusterUrl>>().toMatchTypeOf<DefaultRpcSubscriptionsChannelConfig<ClusterUrl>>();
    expectTypeOf<DefaultRpcSubscriptionsChannelConfig<ClusterUrl>>().toMatchTypeOf<PrettyDefaultRpcSubscriptionsChannelConfig<ClusterUrl>>();
  });
});
