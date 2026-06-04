---
title: "Accounts"
subject: "BLOCK CHAIN"
module: "Module 4: Ethereum – The Ethereum network."
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff70b"
status: "completed"
scrapedAt: "2026-05-23T18:13:28.891Z"
---
# BLOCKCHAIN: Module 4: Ethereum – The Ethereum Network

## Topic: Accounts

### 1. Introduction to Ethereum Accounts

Ethereum is a decentralized, open-source blockchain system that features smart contract functionality. A core concept in Ethereum is the **account**, which represents an entity that can hold Ether (the native cryptocurrency), send transactions, and deploy or interact with smart contracts.

**Key Concept:** Accounts are the fundamental building blocks of all activity on the Ethereum network.

**Learning Outcome Alignment:** This section contributes to understanding the basic structure of the Ethereum network, essential for explaining blockchain concepts (CO1).

**Textbook Reference:** *Mastering Blockchain* by Imran Bashir emphasizes the role of accounts as the interface for users and smart contracts to interact with the Ethereum blockchain.

### 2. Types of Ethereum Accounts

Ethereum has two primary types of accounts:

#### 2.1. Externally Owned Accounts (EOAs)

*   **Definition:** These are accounts controlled by private keys. They are typically associated with individuals or entities that can initiate transactions.
*   **Characteristics:**
    *   **Private Key:** Each EOA has a unique private key that is kept secret by the owner. This key is used to cryptographically sign transactions, proving ownership and authorization.
    *   **Public Key:** Derived from the private key, the public key is used to generate the account's Ethereum address.
    *   **Ethereum Address:** A 40-character hexadecimal string (preceded by "0x") derived from the public key. This is the address that others use to send Ether or interact with the account.
    *   **Transaction Initiation:** EOAs can initiate transactions, including sending Ether, deploying smart contracts, or calling functions within existing smart contracts.
    *   **No Code:** EOAs do not store any code. Their state is limited to their balance of Ether and any associated Nonce.
*   **Examples:**
    *   A user's personal wallet (e.g., MetaMask, MyEtherWallet).
    *   An exchange account where you hold your Ether.
    *   A hardware wallet.

#### 2.2. Contract Accounts

*   **Definition:** These are accounts associated with smart contracts. They are controlled by the code deployed on the blockchain.
*   **Characteristics:**
    *   **Code:** Contract accounts contain executable code (smart contracts) that defines their behavior and functionality.
    *   **Bytecode:** The smart contract code is compiled into bytecode, which is what is stored on the blockchain and executed by the Ethereum Virtual Machine (EVM).
    *   **State:** Contract accounts can store data (state variables) that can be read and modified by the contract's code.
    *   **Transaction Triggering:** Contract accounts can initiate transactions only when triggered by a message call from another account (EOA or another contract account). They cannot initiate transactions on their own.
    *   **No Private Key:** Contract accounts do not have a private key. Their control is entirely governed by the logic within their deployed code.
*   **Examples:**
    *   An ERC-20 token contract (e.g., DAI, USDC).
    *   A decentralized exchange (DEX) smart contract.
    *   A gaming smart contract on Ethereum.

**Key Concepts:** Private Key, Public Key, Ethereum Address, Bytecode, State Variables, Message Call.

**Learning Outcome Alignment:** Understanding these account types is crucial for grasping how transactions occur and how smart contracts operate, contributing to CO1 and CO4.

**Textbook Reference:**
*   *Mastering Ethereum* by Antonopoulos and Wood provides an in-depth explanation of the distinction between EOAs and Contract Accounts, highlighting their distinct control mechanisms and functionalities.
*   *Mastering Blockchain* by Imran Bashir also details these account types as foundational elements of the Ethereum ecosystem.

**Practice Question 1:**
What is the primary difference in control between an Externally Owned Account (EOA) and a Contract Account?

**Answer:** An EOA is controlled by a private key held by its owner, allowing them to initiate transactions. A Contract Account is controlled by the code deployed on the blockchain and can only execute actions when triggered by a message call from another account.

### 3. Account Structure and Key Components

Both EOAs and Contract Accounts share some common underlying principles and components:

#### 3.1. Ethereum Address

*   **Definition:** A unique identifier for an account on the Ethereum network.
*   **Format:** A 40-character hexadecimal string (e.g., `0xabc123...`).
*   **Derivation (EOA):** Derived from the public key through a Keccak-256 hash.
*   **Purpose:** Used to send Ether or interact with accounts.
*   **Key Point:** Addresses are public and can be shared freely.

#### 3.2. Balance

*   **Definition:** The amount of Ether (ETH) held by an account.
*   **Unit:** Stored in Wei (the smallest denomination of Ether, where 1 ETH = 10^18 Wei).
*   **Tracking:** Recorded on the Ethereum blockchain.

#### 3.3. Nonce

*   **Definition:** A sequential counter for each transaction sent from an EOA.
*   **Purpose:**
    *   **Prevent Replay Attacks:** Ensures that a transaction can only be processed once. If a transaction with a specific nonce is mined, another transaction from the same account with the same nonce will be rejected.
    *   **Transaction Ordering:** Helps maintain the correct order of transactions from a single account.
*   **Increment:** The nonce for an EOA increases by one with each transaction sent from that account.
*   **Contract Accounts:** Contract accounts also have a nonce, but it increments for each message call received by the contract, rather than for transactions sent.

#### 3.4. Storage (Contract Accounts Only)

*   **Definition:** A key-value store associated with a contract account, used to persist data.
*   **Characteristics:**
    *   Each storage slot is 256 bits.
    *   Data is stored in a Merkle Patricia Trie, allowing for efficient verification of storage contents.
    *   Accessing and modifying storage is more expensive (in terms of gas) than accessing memory.

#### 3.5. Code (Contract Accounts Only)

*   **Definition:** The executable bytecode of the smart contract.
*   **Execution:** Executed by the Ethereum Virtual Machine (EVM) when a transaction or message call targets the contract account.

#### 3.6. Gas Limit and Gas Price

While not strictly part of an account's static structure, these are critical parameters for transactions originating from accounts.

*   **Gas Limit:** The maximum amount of gas a transaction is willing to consume.
*   **Gas Price:** The amount of Ether (in Wei) the sender is willing to pay per unit of gas.

**Key Concepts:** Wei, Nonce, Replay Attack, Merkle Patricia Trie, Gas Limit, Gas Price.

**Learning Outcome Alignment:** Understanding the nonce is crucial for transaction security and order, relating to CO1. Gas concepts are fundamental to Ethereum operations.

**Textbook Reference:**
*   *Mastering Blockchain* (Bashir) explains the nonce's role in transaction integrity and preventing replay attacks.
*   *Mastering Ethereum* (Antonopoulos, Wood) provides a detailed look at the account state, including nonce and storage.

**Practice Question 2:**
Why is the nonce important for Externally Owned Accounts (EOAs) on Ethereum?

**Answer:** The nonce is crucial for EOAs to prevent replay attacks and ensure the correct ordering of transactions originating from that specific account. Each transaction from an EOA must have a unique and sequentially incrementing nonce.

### 4. Creating and Managing Accounts

#### 4.1. Generating Accounts

*   **Private Key Generation:** A private key is a large random number. Cryptographic algorithms (like elliptic curve cryptography) are used to generate this securely.
*   **Public Key Derivation:** The public key is mathematically derived from the private key.
*   **Address Generation:** The Ethereum address is derived from the public key.
*   **Seed Phrase (Mnemonic):** Most user-friendly wallets generate a 12 or 24-word seed phrase (BIP-39 standard) which can be used to deterministically derive all private keys within a wallet. This makes backups easier.

#### 4.2. Wallet Software

*   **Role:** Wallet software (e.g., MetaMask, Trust Wallet, Ledger Live) manages your private keys and allows you to interact with the Ethereum network.
*   **Functions:**
    *   Generate new accounts.
    *   Import existing accounts (using private keys or seed phrases).
    *   Display balances.
    *   Create and sign transactions.
    *   Interact with DApps.

#### 4.3. Account Security

*   **Private Key Secrecy:** The absolute most important rule is to **never share your private key or seed phrase with anyone.** If someone has your private key, they have full control over your account and funds.
*   **Secure Backups:** Keep your seed phrase in a safe, offline location.
*   **Hardware Wallets:** For significant amounts of Ether, consider using a hardware wallet, which stores private keys offline and requires physical confirmation for transactions.
*   **Phishing Awareness:** Be wary of fake websites or requests for your private information.

**Key Concepts:** Seed Phrase, BIP-39, Wallet Software, Hardware Wallet, Phishing.

**Learning Outcome Alignment:** This section touches upon practical aspects of interacting with Ethereum, relevant to CO1 and potentially CO5 if one were to build a DApp requiring account management.

**Reference Book Insight:**
*   *Solidity Programming Essentials* by Ritesh Modi, while focused on smart contracts, implicitly assumes the existence and management of accounts for DApp interaction.
*   *Blockchain Technology: Concepts and Applications* (Saurabh, Saxena) provides broader context on how users manage their digital assets, including cryptographic keys.

**Practice Question 3:**
What is a seed phrase, and why is it considered a critical security element for Ethereum users?

**Answer:** A seed phrase (or mnemonic phrase) is a list of words that can be used to recover your Ethereum wallet and all its associated accounts. It's critical because it's a human-readable representation of your private keys, allowing you to restore access to your funds if you lose your device or wallet software. Losing your seed phrase means losing access to your cryptocurrency.

### 5. Transactions and Account Interaction

*   **Transaction Structure:** A transaction is a data structure signed by the sender's private key and broadcast to the Ethereum network.
    *   `from`: Sender's address.
    *   `to`: Recipient's address (can be another EOA or a contract account).
    *   `value`: Amount of Ether to send.
    *   `data`: Optional field for smart contract interaction (function calls, parameters, or contract deployment bytecode).
    *   `nonce`: The sender's account nonce.
    *   `gasLimit`: Maximum gas to spend.
    *   `gasPrice`: Price per unit of gas.
    *   `v, r, s`: Signature components used to verify the transaction's authenticity.
*   **Transaction Execution Flow:**
    1.  An EOA creates and signs a transaction.
    2.  The transaction is broadcast to the Ethereum network.
    3.  Miners (or validators in Proof-of-Stake) pick up the transaction from the mempool.
    4.  The transaction is executed by the EVM.
    5.  If the transaction targets a contract, the contract's code is executed.
    6.  Gas is consumed, and the sender's balance and nonce are updated.
    7.  If a contract is involved, its state might be updated, or it might send messages to other contracts.
    8.  The transaction is included in a block, and the blockchain state is updated.

**Key Concepts:** Transaction, Mempool, EVM Execution, Gas Consumption.

**Learning Outcome Alignment:** This section directly relates to how transactions, the lifeblood of any blockchain, function in Ethereum, contributing to CO1 and CO4.

**Reference Book Insight:**
*   *Mastering Blockchain* (Bashir) dedicates significant attention to transaction formats and lifecycle on different blockchains, including Ethereum.
*   *Mastering Ethereum* (Antonopoulos, Wood) provides detailed explanations of transaction parameters and their implications for contract interactions.

**Practice Question 4:**
What information is typically found within an Ethereum transaction that is sent from an EOA to a Contract Account?

**Answer:** An Ethereum transaction sent from an EOA to a Contract Account typically includes:
*   `from`: The sender's EOA address.
*   `to`: The recipient contract account address.
*   `value`: The amount of Ether being sent to the contract (if any).
*   `data`: This field will contain the encoded function call and any arguments for the smart contract.
*   `nonce`: The sender's EOA nonce.
*   `gasLimit` and `gasPrice`: For gas estimation.

### 6. Smart Contracts and Account Interaction

*   **Contract Deployment:** An EOA sends a transaction with `to` set to `null` (or the zero address) and the `data` field containing the contract's compiled bytecode. This creates a new contract account.
*   **Contract Interaction (Message Calls):** An EOA (or another contract) can interact with an existing contract account by sending a transaction.
    *   The `to` field specifies the contract address.
    *   The `data` field contains the encoded function signature and arguments.
    *   When the transaction is executed by the EVM, the specified function within the contract is called.
    *   The contract's logic is executed, potentially modifying its state, sending Ether, or calling other contracts.

**Key Concepts:** Contract Deployment, Message Call, Function Signature, Contract Interaction.

**Learning Outcome Alignment:** This directly supports CO4 (Explain the use of smart contracts and its use cases) and CO5 (Develop simple applications using Solidity language on Ethereum platform), as understanding account interaction is foundational for writing and deploying smart contracts.

**Textbook Reference:**
*   *Mastering Ethereum* (Antonopoulos, Wood) is an excellent resource for understanding the detailed mechanics of contract deployment and interaction, including the role of the `data` field.
*   *Solidity Programming Essentials* (Modi) teaches how to write smart contracts, inherently requiring knowledge of how these contracts are deployed and interacted with via accounts.

**Practice Question 5:**
How is a smart contract deployed on the Ethereum network, and what type of Ethereum account is involved in initiating this process?

**Answer:** A smart contract is deployed by sending a transaction from an Externally Owned Account (EOA) to the Ethereum network. This transaction has its `to` field set to `null` (or the zero address), and the `data` field contains the compiled bytecode of the smart contract. The EOA initiates this deployment process.

### 7. High-Level Concepts Related to Accounts

*   **Account Abstraction (ERC-4337):** An ongoing development in Ethereum aimed at making accounts more flexible and programmable, potentially allowing for features like multi-signature wallets, social recovery, and gas sponsorship without requiring changes to the core protocol. This moves beyond EOAs and standard contract accounts.
*   **Gas Fees:** Every operation on the Ethereum network, including sending Ether or interacting with smart contracts, requires "gas," which is paid in ETH. This mechanism prevents network abuse and incentivizes nodes to process transactions. The gas cost depends on the complexity of the operation and the amount of computational resources used.

**Key Concepts:** Account Abstraction, ERC-4337, Gas Fees.

**Learning Outcome Alignment:** Discussing gas fees is vital for CO1. Account Abstraction hints at future developments in how accounts can be managed and interact.

**Reference Book Insight:**
*   While not explicitly detailed in the provided textbook summaries, advanced concepts like Account Abstraction are covered in more recent literature and developer documentation, reflecting the evolving nature of Ethereum. *Mastering Ethereum* (Antonopoulos, Wood) is a good starting point for understanding the current landscape, from which such advancements evolve.

### 8. Summary and Key Takeaways

*   Ethereum accounts are the primary entities on the network for holding assets and executing actions.
*   There are two main types: **Externally Owned Accounts (EOAs)** controlled by private keys, and **Contract Accounts** controlled by code.
*   Key components of an account include its address, balance, and nonce. Contract accounts also have storage and code.
*   The nonce is critical for transaction security and ordering, preventing replay attacks.
*   Accounts are managed using wallet software, and their security relies heavily on the protection of private keys and seed phrases.
*   Transactions are signed by EOAs and can be used to send Ether or interact with smart contracts.
*   Smart contracts are deployed and interacted with via transactions initiated by EOAs.
*   Gas fees are paid in ETH for all network operations.

**Important Points to Remember:**

*   **NEVER SHARE YOUR PRIVATE KEY OR SEED PHRASE.**
*   Understand the difference between EOAs and Contract Accounts.
*   The nonce is crucial for transaction integrity.
*   Gas is required for all operations.

**Course Outcome Recap:**
*   **CO1 (Explain fundamental concepts):** Covered by understanding account types, components, transactions, and gas.
*   **CO2 (Summarize consensus algorithms):** While not the direct focus, accounts are the entities that participate in and are affected by consensus.
*   **CO3 (Explain Bitcoin):** Module 4 is specifically about Ethereum, but comparing account models to Bitcoin (which uses UTXOs) could be a useful contrast.
*   **CO4 (Explain smart contracts and use cases):** Directly addressed by how contract accounts function and interact with EOAs.
*   **CO5 (Develop simple applications):** Understanding accounts is a prerequisite for developing DApps and writing Solidity smart contracts.

This concludes the study notes for Accounts on the Ethereum Network. Review these concepts thoroughly to build a strong foundation for understanding Ethereum and its applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
