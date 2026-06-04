---
title: "Ethereum Virtual Machine"
subject: "BLOCKCHAIN AND CRYPTOCURRENCIES"
module: "Module 3: Cryptocurrencies "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c2b6"
status: "completed"
scrapedAt: "2026-05-20T17:01:55.814Z"
---
# BLOCKCHAIN AND CRYPTOCURRENCIES

## Module 3: Cryptocurrencies

### Topic: Ethereum Virtual Machine (EVM)

---

### 1. Introduction to the Ethereum Virtual Machine (EVM)

*   **What is the EVM?**
    *   The Ethereum Virtual Machine (EVM) is the **runtime environment for smart contracts on the Ethereum blockchain**.
    *   It's a **Turing-complete, decentralized, and stateful virtual machine**.
    *   Think of it as the **"world computer"** that executes the code of smart contracts.
    *   It's where all computations on the Ethereum network happen.

*   **Purpose of the EVM:**
    *   To provide a **secure, deterministic, and isolated environment** for smart contract execution.
    *   To ensure that **every node on the Ethereum network can execute a smart contract in the same way**, leading to consensus on the outcome.
    *   To abstract away the underlying hardware and operating systems, making smart contracts **platform-independent**.

*   **Key Characteristics:**
    *   **Turing-Complete:** Capable of performing any computation that a Turing machine can. This means it can execute any algorithm, given enough resources.
    *   **Stateful:** The EVM maintains a persistent state (the blockchain state) that is updated by contract executions. This state includes account balances, storage of smart contracts, and other relevant data.
    *   **Deterministic:** Given the same input and starting state, the EVM will always produce the same output. This is crucial for blockchain consensus.
    *   **Isolated:** Each smart contract execution runs in its own isolated environment, preventing malicious code from affecting other contracts or the network itself.
    *   **Gas-based:** All computational operations on the EVM consume "gas," a unit of computational effort. This mechanism prevents infinite loops and denial-of-service attacks by requiring users to pay for computation.

---

### 2. EVM Architecture and Components

The EVM can be thought of as a stack-based machine with several key components:

*   **World State:**
    *   Represents the **global state of the Ethereum network**.
    *   Includes all accounts, their balances, nonces, contract code, and contract storage.
    *   This state is stored using a **Merkle Patricia Trie**, allowing for efficient verification and updates.

*   **Account State:**
    *   Each account on Ethereum has its own state, which includes:
        *   **Nonce:** A counter incremented for each transaction sent from the account. Prevents replay attacks.
        *   **Balance:** The amount of Ether held by the account.
        *   **Storage Root:** A pointer to the Merkle Patricia Trie containing the contract's storage.
        *   **Code Hash:** The hash of the smart contract's code (for contract accounts).

*   **Storage:**
    *   A **persistent key-value store** associated with each smart contract.
    *   Allows contracts to store data on the blockchain.
    *   This storage is **immutable** after being set, but can be updated by the contract's functions.
    *   Each storage slot is 256 bits.

*   **Stack:**
    *   A **Last-In, First-Out (LIFO)** data structure used for temporary storage during computation.
    *   Used to hold function arguments, return values, and intermediate results.
    *   Has a limited size (e.g., 1024 elements).

*   **Memory:**
    *   A **temporary, byte-addressable data region** that is cleared after each message call (transaction or internal message).
    *   Used for passing data between functions and for temporary data manipulation.
    *   Similar to RAM in a traditional computer.

*   **Program Counter (PC):**
    *   Keeps track of the **current instruction being executed** within the smart contract's bytecode.

*   **Gas:**
    *   A **unit of computational effort**.
    *   Every operation (opcode) in the EVM has an associated gas cost.
    *   Users pay gas fees (in Ether) for executing transactions and smart contracts to prevent abuse and reward miners/validators.
    *   The `GASLIMIT` of a transaction prevents excessive gas consumption.
    *   The `GASPRICE` is the amount of Ether paid per unit of gas.
    *   `Transaction Fee = Gas Used * Gas Price`

*   **Bytecode:**
    *   Smart contracts are written in high-level languages like Solidity, then **compiled into EVM bytecode**.
    *   This bytecode is a series of opcodes that the EVM understands and executes.
    *   Opcodes are low-level instructions like `ADD`, `MUL`, `STORE`, `LOAD`, `CALL`, etc.

---

### 3. Smart Contract Execution Flow

1.  **Transaction Initiation:** A user or another contract sends a transaction to the Ethereum network. This transaction can be a simple Ether transfer or a call to a smart contract function.
2.  **Transaction Validation:** The transaction is validated by nodes on the network (e.g., checking signatures, sufficient gas).
3.  **EVM Initialization:** When a transaction targeting a smart contract is processed, the EVM for that transaction is initialized. This involves loading the contract's code and state.
4.  **Bytecode Execution:** The EVM begins executing the contract's bytecode instruction by instruction, using the stack, memory, and gas.
5.  **State Changes:** As the bytecode executes, it can:
    *   Read from or write to the contract's storage.
    *   Transfer Ether.
    *   Call other smart contracts.
    *   Emit events.
6.  **Gas Consumption:** Each opcode executed consumes a certain amount of gas. If the gas limit of the transaction is reached before execution is complete, the transaction fails, but the gas spent is still consumed.
7.  **Transaction Completion:**
    *   **Successful:** If execution completes without errors and within the gas limit, the state changes are committed to the blockchain.
    *   **Failed:** If an error occurs (e.g., out of gas, invalid operation, revert), the state changes are reverted, but the gas used is still consumed.
8.  **Block Inclusion:** The transaction, along with its resulting state changes (or failure), is included in a block and added to the blockchain, achieving consensus.

---

### 4. EVM Opcodes and Their Functions

Opcodes are the fundamental instructions that the EVM executes. They are organized into categories:

*   **Arithmetic Operations:**
    *   `ADD`, `MUL`, `SUB`, `DIV`, `MOD`, `EXP`, `LT`, `GT`, `EQ`, `AND`, `OR`, `XOR`, `NOT`, `SHL`, `SHR`
    *   *Example:* `ADD` opcode adds the top two elements on the stack.

*   **Memory Operations:**
    *   `MLOAD`: Loads a 32-byte word from memory.
    *   `MSTORE`: Stores a 32-byte word to memory.
    *   `MSIZE`: Returns the size of the current memory in bytes.
    *   *Example:* To store a variable `x` in memory at index 0: `PUSH1 0x00 PUSH1 x MSTORE`

*   **Storage Operations:**
    *   `SLOAD`: Loads a 32-byte word from storage.
    *   `SSTORE`: Stores a 32-byte word to storage.
    *   *Example:* To store the value 10 at storage slot 0: `PUSH1 0x00 PUSH1 0x0a SSTORE`

*   **Stack Operations:**
    *   `PUSH<n>`: Pushes `n` bytes onto the stack.
    *   `POP`: Removes the top element from the stack.
    *   `DUP<n>`: Duplicates the `n`-th element from the top of the stack.
    *   `SWAP<n>`: Swaps the top element with the `n`-th element from the top of the stack.
    *   *Example:* `PUSH1 5 PUSH1 10 ADD` - This sequence pushes 5, then 10, then adds them, leaving 15 on the stack.

*   **Environment Information:**
    *   `ADDRESS`: Returns the address of the current contract.
    *   `BALANCE`: Returns the balance of an address.
    *   `CALLER`: Returns the address of the caller.
    *   `GAS`: Returns the remaining gas.
    *   `ORIGIN`: Returns the address of the transaction originator.
    *   *Example:* `CALLER` opcode can be used to check who initiated a transaction.

*   **Control Flow:**
    *   `JUMP`: Unconditional jump to a specific location in the bytecode.
    *   `JUMPI`: Conditional jump based on a stack value.
    *   `STOP`: Terminates execution.
    *   `REVERT`: Terminates execution and reverts all state changes, returning an error message.
    *   `RETURN`: Terminates execution and returns data from memory.
    *   *Example:* `JUMPI` is used to implement `if` statements.

*   **Contract Creation and Interaction:**
    *   `CREATE`: Creates a new contract.
    *   `CALL`: Calls another contract.
    *   `DELEGATECALL`: Calls another contract with the context of the current contract.
    *   `CREATE2`: Creates a new contract with a predictable address.
    *   *Example:* `CALL` is used to invoke functions of other deployed smart contracts.

---

### 5. Gas Mechanism and Fees

*   **Purpose of Gas:**
    *   **Prevent infinite loops and denial-of-service attacks:** By requiring payment for computation, malicious code designed to run forever will quickly exhaust its gas.
    *   **Incentivize miners/validators:** Gas fees are paid to the network participants who process and validate transactions.
    *   **Resource allocation:** Gas acts as a unit to measure and limit resource consumption.

*   **Gas Calculation:**
    *   `Gas Used`: The total amount of gas consumed by a transaction's execution. This depends on the opcodes executed and their gas costs.
    *   `Gas Price`: The amount of Ether the sender is willing to pay for each unit of gas (measured in Gwei).
    *   `Transaction Fee = Gas Used * Gas Price`

*   **Gas Limit:**
    *   The **maximum amount of gas a transaction is allowed to consume**.
    *   Set by the sender. If the execution exceeds the gas limit, the transaction fails (reverts state changes), but the gas spent up to that point is still consumed.

*   **Gas Cost of Opcodes:**
    *   Each opcode has a predefined gas cost.
    *   Simple operations like `ADD` have low gas costs (e.g., 3 gas).
    *   More complex operations like `SSTORE` have higher gas costs (e.g., 20,000 gas for a new storage write, 5,000 gas for an update, 5,000 gas for deletion).
    *   These costs are subject to change with network upgrades.

*   **EIP-1559:**
    *   A significant upgrade to Ethereum's fee market.
    *   Introduced a `base_fee_per_gas` that is burned (destroyed) with each block.
    *   Introduced `priority_fee_per_gas` (tip) paid to validators.
    *   The total fee is `(base_fee_per_gas + priority_fee_per_gas) * Gas Used`.
    *   This aims to make gas fees more predictable and efficient.

---

### 6. EVM Compatibility and Layer 2 Solutions

*   **EVM Compatibility:**
    *   Many other blockchains have adopted or are compatible with the EVM.
    *   This means smart contracts written for Ethereum can often be deployed and run on these other networks with minimal or no modifications.
    *   *Examples:* Binance Smart Chain (BNB Chain), Polygon, Avalanche, Fantom, Arbitrum, Optimism.
    *   **Benefits of EVM compatibility:**
        *   **Developer tooling reuse:** Developers can use familiar tools (Solidity, Truffle, Hardhat).
        *   **Easier migration:** Projects can easily move between EVM-compatible chains.
        *   **Network effects:** Encourages a unified ecosystem.

*   **Layer 2 Scaling Solutions:**
    *   **Problem:** The Ethereum mainnet (Layer 1) has limited transaction throughput, leading to high gas fees during periods of high demand.
    *   **Solution:** Layer 2 solutions are built *on top of* Ethereum to handle transactions off-chain, thereby increasing scalability and reducing costs, while still leveraging Ethereum's security.
    *   Many Layer 2 solutions are EVM-compatible.

    *   **Types of EVM-compatible Layer 2 Solutions:**
        *   **Rollups:** Bundle many transactions together off-chain, generate a proof, and submit a compressed version of the data and the proof to the Ethereum mainnet.
            *   **Optimistic Rollups (e.g., Optimism, Arbitrum):** Assume transactions are valid by default and use a "fraud proof" system where anyone can challenge invalid transactions during a dispute period.
            *   **Zero-Knowledge (ZK) Rollups (e.g., zkSync, StarkNet):** Use cryptographic proofs (like SNARKs or STARKs) to mathematically prove the validity of off-chain transactions without revealing the transaction data itself.
        *   **Sidechains (e.g., Polygon PoS Chain):** Independent blockchains that run parallel to Ethereum and have their own consensus mechanisms. They are EVM-compatible but have different security assumptions than Layer 1.
        *   **Plasma:** A framework for creating child chains that periodically commit Merkle roots to the main chain. Less common now with the rise of rollups.

---

### 7. Important Points to Remember

*   The EVM is the **heart of Ethereum's smart contract functionality**.
*   It's a **Turing-complete, deterministic, and isolated execution environment**.
*   **Gas** is essential for managing computation and preventing abuse.
*   Smart contracts are written in high-level languages and compiled into **EVM bytecode**.
*   The EVM's architecture includes **state, memory, stack, and program counter**.
*   **EVM compatibility** has led to a vast ecosystem of other blockchains and Layer 2 solutions.
*   Layer 2 solutions are crucial for **scaling Ethereum** and reducing gas fees.

---

### 8. Practice Questions and Exercises

**Question 1:** What is the primary role of the Ethereum Virtual Machine (EVM)?
    *   a) Storing Ether balances
    *   b) Executing smart contract code
    *   c) Validating block producers
    *   d) Providing consensus mechanisms

**Question 2:** Which of the following characteristics is NOT a defining feature of the EVM?
    *   a) Turing-complete
    *   b) Non-deterministic
    *   c) Stateful
    *   d) Isolated

**Question 3:** What is "gas" in the context of the EVM, and why is it important?
    *   *Provide a brief explanation.*

**Question 4:** Explain the difference between EVM's memory and storage.

**Question 5:** Briefly describe the purpose of EVM-compatible blockchains and Layer 2 solutions.

---

### 9. Answers to Practice Questions

**Answer 1:**
    *   b) Executing smart contract code
    *   *Explanation:* The EVM is the decentralized, Turing-complete virtual machine that executes the bytecode of smart contracts on the Ethereum blockchain.

**Answer 2:**
    *   b) Non-deterministic
    *   *Explanation:* The EVM is **deterministic**. This means that given the same inputs and state, every EVM instance will produce the exact same output, which is crucial for blockchain consensus.

**Answer 3:**
    *   "Gas" is a unit of computational effort required to execute operations on the EVM. It's important because it:
        *   **Prevents denial-of-service attacks:** By requiring payment for computation, it makes it expensive for malicious actors to execute infinite loops or computationally intensive tasks that could overload the network.
        *   **Incentivizes miners/validators:** Gas fees are paid to the network participants who process and validate transactions.
        *   **Manages resource consumption:** It puts a limit on how much computation a transaction can perform.

**Answer 4:**
    *   **Memory:** Is a temporary, byte-addressable data region that is cleared after each message call (transaction or internal call). It's used for passing data between functions and for temporary manipulation of data during execution.
    *   **Storage:** Is a persistent key-value store associated with each smart contract. Data stored here persists on the blockchain between contract calls and is used to maintain the contract's state. It is significantly more expensive (in terms of gas) to write to than memory.

**Answer 5:**
    *   **EVM-compatible blockchains** are other blockchain networks that can execute Ethereum's smart contracts and bytecode. This allows developers to reuse existing tools and migrate projects easily, fostering interoperability and a broader ecosystem.
    *   **Layer 2 solutions** are protocols built on top of the Ethereum mainnet (Layer 1) to improve its scalability and reduce transaction fees. They process transactions off-chain and then post summarized data or proofs back to Layer 1, inheriting Ethereum's security while offering faster and cheaper transactions. Examples include Optimistic Rollups and ZK-Rollups.

---
