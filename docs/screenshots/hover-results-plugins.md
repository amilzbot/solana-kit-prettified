# Plugin Hover Test Results (Phase 2)

Generated: 2026-02-09T07:52:43.158Z

Compare Original* vs Prettified* pairs for plugin types.

---

### `OriginalRpcClientShape` (line 62)
```typescript
type OriginalRpcClientShape = {
    sendTransaction: (input: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").Instruction | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").Instruction[] | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").InstructionPlan | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionMessage, config?: {
        abortSignal?: AbortSignal;
        transactionPlanExecutor?: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionPlanExecutor;
        transactionPlanner?: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionPlanner;
    }) => Promise<SuccessfulSingleTransactionPlanResult<TransactionPlanResultContext, TransactionMessage & TransactionMessageWithFeePayer<string>>>;
    ... 5 more ...;
    sendTransactions: (input: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").Instruction | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").Instruction[] | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").InstructionPlan | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionMessage | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionMessage[], config?: {
        abortSignal?: AbortSignal;
        transactionPlanExecutor?: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionPlanExecutor;
        transactionPlanner?: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionPlanner;
    }) => Promise<import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionPlanResult>;
}
```

### `PrettifiedRpcClient` (line 63)
```typescript
type PrettifiedRpcClient = {
    sendTransaction: (input: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").Instruction | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").Instruction[] | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").InstructionPlan | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionMessage, config?: {
        abortSignal?: AbortSignal;
        transactionPlanExecutor?: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionPlanExecutor;
        transactionPlanner?: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionPlanner;
    }) => Promise<SuccessfulSingleTransactionPlanResult<TransactionPlanResultContext, TransactionMessage & TransactionMessageWithFeePayer<string>>>;
    ... 5 more ...;
    sendTransactions: (input: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").Instruction | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").Instruction[] | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").InstructionPlan | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionMessage | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionMessage[], config?: {
        abortSignal?: AbortSignal;
        transactionPlanExecutor?: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionPlanExecutor;
        transactionPlanner?: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionPlanner;
    }) => Promise<import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionPlanResult>;
}
```

### `PrettifiedLocalhostClient` (line 66)
```typescript
type PrettifiedLocalhostClient = {
    sendTransaction: (input: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").Instruction | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").Instruction[] | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").InstructionPlan | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionMessage, config?: {
        abortSignal?: AbortSignal;
        transactionPlanExecutor?: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionPlanExecutor;
        transactionPlanner?: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionPlanner;
    }) => Promise<SuccessfulSingleTransactionPlanResult<TransactionPlanResultContext, TransactionMessage & TransactionMessageWithFeePayer<string>>>;
    ... 6 more ...;
    airdrop: AirdropFunction;
}
```

### `PrettifiedLiteSVMClient` (line 69)
```typescript
type PrettifiedLiteSVMClient = {
    sendTransaction: (input: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").Instruction | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").Instruction[] | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").InstructionPlan | import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionMessage, config?: {
        abortSignal?: AbortSignal;
        transactionPlanExecutor?: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionPlanExecutor;
        transactionPlanner?: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").TransactionPlanner;
    }) => Promise<SuccessfulSingleTransactionPlanResult<TransactionPlanResultContext, TransactionMessage & TransactionMessageWithFeePayer<string>>>;
    ... 6 more ...;
    svm: import("/home/node/.openclaw/workspace/kit-typescript-documentation/solana-kit-prettified/src/index").LiteSVM;
}
```

### `OriginalSingleIxPlan` (line 76)
```typescript
type OriginalSingleIxPlan = {
    readonly instruction: Instruction<string, readonly (AccountLookupMeta<string, string> | AccountMeta<string>)[]>;
    readonly kind: "single";
    readonly planType: "instructionPlan";
}
```

### `PrettifiedSingleIxPlan` (line 77)
```typescript
type PrettifiedSingleIxPlan = {
    readonly instruction: Instruction<string, readonly (AccountLookupMeta<string, string> | AccountMeta<string>)[]>;
    readonly kind: "single";
    readonly planType: "instructionPlan";
}
```

### `OriginalSeqIxPlan` (line 80)
```typescript
type OriginalSeqIxPlan = {
    readonly divisible: boolean;
    readonly kind: "sequential";
    readonly planType: "instructionPlan";
    readonly plans: InstructionPlan[];
}
```

### `PrettifiedSeqIxPlan` (line 81)
```typescript
type PrettifiedSeqIxPlan = {
    readonly divisible: boolean;
    readonly kind: "sequential";
    readonly planType: "instructionPlan";
    readonly plans: InstructionPlan[];
}
```

### `OriginalParIxPlan` (line 83)
```typescript
type OriginalParIxPlan = {
    readonly kind: "parallel";
    readonly planType: "instructionPlan";
    readonly plans: InstructionPlan[];
}
```

### `PrettifiedParIxPlan` (line 84)
```typescript
type PrettifiedParIxPlan = {
    readonly kind: "parallel";
    readonly planType: "instructionPlan";
    readonly plans: InstructionPlan[];
}
```

### `OriginalMsgPacker` (line 86)
```typescript
type OriginalMsgPacker = {
    readonly getMessagePacker: () => MessagePacker;
    readonly kind: "messagePacker";
    readonly planType: "instructionPlan";
}
```

### `PrettifiedMsgPacker` (line 87)
```typescript
type PrettifiedMsgPacker = {
    readonly getMessagePacker: () => MessagePacker;
    readonly kind: "messagePacker";
    readonly planType: "instructionPlan";
}
```

### `OriginalSingleTxPlan` (line 93)
```typescript
type OriginalSingleTxPlan = {
    readonly kind: "single";
    readonly message: TransactionMessage & TransactionMessageWithFeePayer<string>;
    readonly planType: "transactionPlan";
}
```

### `PrettifiedSingleTxPlan` (line 94)
```typescript
type PrettifiedSingleTxPlan = {
    readonly kind: "single";
    readonly message: TransactionMessage & TransactionMessageWithFeePayer<string>;
    readonly planType: "transactionPlan";
}
```

### `OriginalSeqTxPlan` (line 97)
```typescript
type OriginalSeqTxPlan = {
    readonly divisible: boolean;
    readonly kind: "sequential";
    readonly planType: "transactionPlan";
    readonly plans: TransactionPlan[];
}
```

### `PrettifiedSeqTxPlan` (line 98)
```typescript
type PrettifiedSeqTxPlan = {
    readonly divisible: boolean;
    readonly kind: "sequential";
    readonly planType: "transactionPlan";
    readonly plans: TransactionPlan[];
}
```

### `OriginalParTxPlan` (line 100)
```typescript
type OriginalParTxPlan = {
    readonly kind: "parallel";
    readonly planType: "transactionPlan";
    readonly plans: TransactionPlan[];
}
```

### `PrettifiedParTxPlan` (line 101)
```typescript
type PrettifiedParTxPlan = {
    readonly kind: "parallel";
    readonly planType: "transactionPlan";
    readonly plans: TransactionPlan[];
}
```

### `OriginalSuccessResult` (line 107)
```typescript
type OriginalSuccessResult = {
    context: Readonly<SuccessfulBaseTransactionPlanResultContext & TransactionPlanResultContext>;
    kind: "single";
    planType: "transactionPlanResult";
    plannedMessage: TransactionMessage & TransactionMessageWithFeePayer<string>;
    status: "successful";
}
```

### `PrettifiedSuccessResult` (line 108)
```typescript
type PrettifiedSuccessResult = {
    context: Readonly<SuccessfulBaseTransactionPlanResultContext & TransactionPlanResultContext>;
    kind: "single";
    planType: "transactionPlanResult";
    plannedMessage: TransactionMessage & TransactionMessageWithFeePayer<string>;
    status: "successful";
}
```

### `OriginalFailedResult` (line 111)
```typescript
type OriginalFailedResult = {
    context: Readonly<BaseTransactionPlanResultContext & TransactionPlanResultContext>;
    error: Error;
    kind: "single";
    planType: "transactionPlanResult";
    plannedMessage: TransactionMessage & TransactionMessageWithFeePayer<string>;
    status: "failed";
}
```

### `PrettifiedFailedResult` (line 112)
```typescript
type PrettifiedFailedResult = {
    context: Readonly<BaseTransactionPlanResultContext & TransactionPlanResultContext>;
    error: Error;
    kind: "single";
    planType: "transactionPlanResult";
    plannedMessage: TransactionMessage & TransactionMessageWithFeePayer<string>;
    status: "failed";
}
```

### `OriginalCanceledResult` (line 114)
```typescript
type OriginalCanceledResult = {
    context: Readonly<BaseTransactionPlanResultContext & TransactionPlanResultContext>;
    kind: "single";
    planType: "transactionPlanResult";
    plannedMessage: TransactionMessage & TransactionMessageWithFeePayer<string>;
    status: "canceled";
}
```

### `PrettifiedCanceledResult` (line 115)
```typescript
type PrettifiedCanceledResult = {
    context: Readonly<BaseTransactionPlanResultContext & TransactionPlanResultContext>;
    kind: "single";
    planType: "transactionPlanResult";
    plannedMessage: TransactionMessage & TransactionMessageWithFeePayer<string>;
    status: "canceled";
}
```

### `OriginalSeqResult` (line 117)
```typescript
type OriginalSeqResult = {
    readonly divisible: boolean;
    readonly kind: "sequential";
    readonly planType: "transactionPlanResult";
    readonly plans: TransactionPlanResult<TransactionPlanResultContext, TransactionMessage & TransactionMessageWithFeePayer<string>, SingleTransactionPlanResult<TransactionPlanResultContext, TransactionMessage & TransactionMessageWithFeePayer<string>>>[];
}
```

### `PrettifiedSeqResult` (line 118)
```typescript
type PrettifiedSeqResult = {
    readonly divisible: boolean;
    readonly kind: "sequential";
    readonly planType: "transactionPlanResult";
    readonly plans: TransactionPlanResult<TransactionPlanResultContext, TransactionMessage & TransactionMessageWithFeePayer<string>, SingleTransactionPlanResult<TransactionPlanResultContext, TransactionMessage & TransactionMessageWithFeePayer<string>>>[];
}
```

### `OriginalParResult` (line 120)
```typescript
type OriginalParResult = {
    readonly kind: "parallel";
    readonly planType: "transactionPlanResult";
    readonly plans: TransactionPlanResult<TransactionPlanResultContext, TransactionMessage & TransactionMessageWithFeePayer<string>, SingleTransactionPlanResult<TransactionPlanResultContext, TransactionMessage & TransactionMessageWithFeePayer<string>>>[];
}
```

### `PrettifiedParResult` (line 121)
```typescript
type PrettifiedParResult = {
    readonly kind: "parallel";
    readonly planType: "transactionPlanResult";
    readonly plans: TransactionPlanResult<TransactionPlanResultContext, TransactionMessage & TransactionMessageWithFeePayer<string>, SingleTransactionPlanResult<TransactionPlanResultContext, TransactionMessage & TransactionMessageWithFeePayer<string>>>[];
}
```

### `OriginalBaseCtx` (line 127)
```typescript
type OriginalBaseCtx = BaseTransactionPlanResultContext
```

### `PrettifiedBaseCtx` (line 128)
```typescript
type PrettifiedBaseCtx = {
    message?: (TransactionMessage & TransactionMessageWithFeePayer) | undefined;
    signature?: Signature | undefined;
    transaction?: Transaction | undefined;
}
```

### `OriginalSuccessCtx` (line 130)
```typescript
type OriginalSuccessCtx = SuccessfulBaseTransactionPlanResultContext
```

### `PrettifiedSuccessCtx` (line 131)
```typescript
type PrettifiedSuccessCtx = {
    signature: Signature;
    message?: (TransactionMessage & TransactionMessageWithFeePayer) | undefined;
    transaction?: Transaction | undefined;
}
```

### `OriginalExecConfig` (line 133)
```typescript
type OriginalExecConfig = {
    executeTransactionMessage: ExecuteTransactionMessage<TransactionPlanResultContext>;
}
```

### `PrettifiedExecConfig` (line 134)
```typescript
type PrettifiedExecConfig = {
    executeTransactionMessage: ExecuteTransactionMessage<TransactionPlanResultContext>;
}
```

### `OriginalPlannerConfig` (line 136)
```typescript
type OriginalPlannerConfig = {
    createTransactionMessage: CreateTransactionMessage;
    onTransactionMessageUpdated?: OnTransactionMessageUpdated;
}
```

### `PrettifiedPlannerConfig` (line 137)
```typescript
type PrettifiedPlannerConfig = {
    createTransactionMessage: CreateTransactionMessage;
    onTransactionMessageUpdated?: OnTransactionMessageUpdated | undefined;
}
```

### `OriginalSubsConfig` (line 139)
```typescript
type OriginalSubsConfig = {
    readonly intervalMs?: number | undefined;
    readonly maxSubscriptionsPerChannel?: number | undefined;
    readonly minChannels?: number | undefined;
    readonly sendBufferHighWatermark?: number | undefined;
    readonly url: ClusterUrl;
}
```

### `PrettifiedSubsConfig` (line 140)
```typescript
type PrettifiedSubsConfig = {
    readonly intervalMs?: number | undefined;
    readonly maxSubscriptionsPerChannel?: number | undefined;
    readonly minChannels?: number | undefined;
    readonly sendBufferHighWatermark?: number | undefined;
    readonly url: ClusterUrl;
}
```
