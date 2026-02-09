/**
 * Hover Test — Plugin types (Phase 2).
 *
 * Open in IDE and hover over type aliases to verify Pretty* types
 * show flattened shapes vs the raw originals.
 */
import type {
  // Clients
  PrettyDefaultRpcClient,
  PrettyDefaultLocalhostRpcClient,
  PrettyDefaultLiteSVMClient,

  // Plans
  PrettySingleInstructionPlan,
  PrettySequentialInstructionPlan,
  PrettyParallelInstructionPlan,
  PrettyMessagePackerInstructionPlan,
  PrettySingleTransactionPlan,
  PrettySequentialTransactionPlan,
  PrettyParallelTransactionPlan,

  // Results
  PrettySuccessfulSingleTransactionPlanResult,
  PrettyFailedSingleTransactionPlanResult,
  PrettyCanceledSingleTransactionPlanResult,
  PrettySequentialTransactionPlanResult,
  PrettyParallelTransactionPlanResult,
  PrettyBaseTransactionPlanResultContext,
  PrettySuccessfulBaseTransactionPlanResultContext,

  // Configs
  PrettyTransactionPlanExecutorConfig,
  PrettyTransactionPlannerConfig,
  PrettyDefaultRpcSubscriptionsChannelConfig,
} from '../src/index.js';

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
} from '@solana/instruction-plans';

import type { ClusterUrl, DefaultRpcSubscriptionsChannelConfig } from '@solana/kit';

// ============================================================
// SCENARIO 1: Client return types (highest value — chained .use() intersections)
// ============================================================

type OriginalRpcClientShape = PrettyDefaultRpcClient; // no raw equivalent easily expressible
type PrettifiedRpcClient = PrettyDefaultRpcClient;
//   ^ HOVER: Should show flat { rpc, rpcSubscriptions, payer, transactionPlanner, transactionPlanExecutor, sendTransaction, sendTransactions }

type PrettifiedLocalhostClient = PrettyDefaultLocalhostRpcClient;
//   ^ HOVER: Same as above plus { airdrop }

type PrettifiedLiteSVMClient = PrettyDefaultLiteSVMClient;
//   ^ HOVER: Should show flat { svm, rpc, airdrop, payer, ... }

// ============================================================
// SCENARIO 2: Instruction Plans (Readonly wrappers)
// ============================================================

type OriginalSingleIxPlan = SingleInstructionPlan;
type PrettifiedSingleIxPlan = PrettySingleInstructionPlan;
//   ^ HOVER: Should show { kind: 'single', instruction: Instruction } without Readonly<>

type OriginalSeqIxPlan = SequentialInstructionPlan;
type PrettifiedSeqIxPlan = PrettySequentialInstructionPlan;

type OriginalParIxPlan = ParallelInstructionPlan;
type PrettifiedParIxPlan = PrettyParallelInstructionPlan;

type OriginalMsgPacker = MessagePackerInstructionPlan;
type PrettifiedMsgPacker = PrettyMessagePackerInstructionPlan;

// ============================================================
// SCENARIO 3: Transaction Plans
// ============================================================

type OriginalSingleTxPlan = SingleTransactionPlan;
type PrettifiedSingleTxPlan = PrettySingleTransactionPlan;
//   ^ HOVER: Should show { kind: 'single', message: ... } flat

type OriginalSeqTxPlan = SequentialTransactionPlan;
type PrettifiedSeqTxPlan = PrettySequentialTransactionPlan;

type OriginalParTxPlan = ParallelTransactionPlan;
type PrettifiedParTxPlan = PrettyParallelTransactionPlan;

// ============================================================
// SCENARIO 4: Transaction Plan Results
// ============================================================

type OriginalSuccessResult = SuccessfulSingleTransactionPlanResult;
type PrettifiedSuccessResult = PrettySuccessfulSingleTransactionPlanResult;
//   ^ HOVER: Should show flat { status: 'successful', plan, context, signature, ... }

type OriginalFailedResult = FailedSingleTransactionPlanResult;
type PrettifiedFailedResult = PrettyFailedSingleTransactionPlanResult;

type OriginalCanceledResult = CanceledSingleTransactionPlanResult;
type PrettifiedCanceledResult = PrettyCanceledSingleTransactionPlanResult;

type OriginalSeqResult = SequentialTransactionPlanResult;
type PrettifiedSeqResult = PrettySequentialTransactionPlanResult;

type OriginalParResult = ParallelTransactionPlanResult;
type PrettifiedParResult = PrettyParallelTransactionPlanResult;

// ============================================================
// SCENARIO 5: Context and Config types
// ============================================================

type OriginalBaseCtx = BaseTransactionPlanResultContext;
type PrettifiedBaseCtx = PrettyBaseTransactionPlanResultContext;

type OriginalSuccessCtx = SuccessfulBaseTransactionPlanResultContext;
type PrettifiedSuccessCtx = PrettySuccessfulBaseTransactionPlanResultContext;

type OriginalExecConfig = TransactionPlanExecutorConfig;
type PrettifiedExecConfig = PrettyTransactionPlanExecutorConfig;

type OriginalPlannerConfig = TransactionPlannerConfig;
type PrettifiedPlannerConfig = PrettyTransactionPlannerConfig;

type OriginalSubsConfig = DefaultRpcSubscriptionsChannelConfig<ClusterUrl>;
type PrettifiedSubsConfig = PrettyDefaultRpcSubscriptionsChannelConfig;

// ============================================================
// SCENARIO 6: Realistic function signatures with plugin types
// ============================================================

// A function that builds and executes a plan
declare function executeTransferPlan(
  client: PrettyDefaultRpcClient,
): Promise<PrettySuccessfulSingleTransactionPlanResult>;
//   ^ HOVER over params and return: should all be flat

// A function that configures a localhost client
declare function setupTestClient(): Promise<PrettyDefaultLocalhostRpcClient>;
//   ^ HOVER: flat client shape with airdrop

// Accept either pretty or original plan types
declare function processPlan(plan: PrettySingleTransactionPlan): void;
declare const rawPlan: SingleTransactionPlan;
declare const prettyPlan: PrettySingleTransactionPlan;
processPlan(rawPlan);
processPlan(prettyPlan);
