---
title: "addresses."
subject: "BLOCK CHAIN"
module: "Module 2: Consensus Algorithms"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff6f0"
status: "completed"
scrapedAt: "2026-05-23T18:13:10.699Z"
---
# Blockchain: Module 2 - Consensus Algorithms: Addresses

## Introduction

This module delves into the critical aspect of **consensus algorithms** in blockchain technology. Consensus is the process by which a distributed network of nodes agrees on the validity of transactions and the current state of the ledger, ensuring its integrity and immutability. While this specific topic focuses on "addresses," it's crucial to understand that addresses are fundamental to how transactions are initiated and how participants are identified within the blockchain ecosystem, which is directly tied to the consensus process.

**Key Concept:** **Consensus** is the cornerstone of decentralized systems. Without a mechanism for agreement, a distributed ledger would be prone to inconsistencies and malicious manipulation.

## Course Outcomes Alignment

This module contributes to the following course outcomes:

*   **CO1: Explain the fundamental concepts of blockchain technology.** (Addresses the underlying principles of how distributed ledgers maintain trust and agreement, where addresses play a role in transaction initiation.)
*   **CO2: Summarize the classification of consensus algorithms.** (While this topic is narrowly focused on addresses, understanding addresses is a prerequisite for comprehending how various consensus mechanisms handle transaction validation and state updates.)
*   **CO3: Explain the concepts of first decentralized cryptocurrency bitcoin.** (Bitcoin's Proof-of-Work consensus relies heavily on the concept of transaction addresses for sending and receiving value.)

---

## Topic: Addresses in Blockchain

### 1. What are Blockchain Addresses?

A blockchain address is a unique identifier used to send and receive cryptocurrencies or other digital assets on a blockchain network. It's analogous to a bank account number or an email address but with cryptographic underpinnings.

**Key Definitions:**

*   **Public Key:** A cryptographic key that can be shared freely and is used to verify digital signatures. It's also used to derive the blockchain address.
*   **Private Key:** A secret cryptographic key that is known only to the owner. It's used to digitally sign transactions, proving ownership of assets associated with a particular address. **Crucially, whoever possesses the private key controls the associated assets.**
*   **Address:** A shorter, user-friendly representation derived from the public key. It's what users share to receive funds.

**How Addresses are Generated (Simplified):**

1.  **Generate a Private Key:** A random, secure private key is generated.
2.  **Derive the Public Key:** Using a specific cryptographic algorithm (e.g., Elliptic Curve Digital Signature Algorithm - ECDSA for Bitcoin and Ethereum), a public key is derived from the private key. This derivation is a one-way function; it's computationally infeasible to derive the private key from the public key.
3.  **Generate the Address:** The public key is then processed through various hashing and encoding functions to produce the final, shorter, and more manageable blockchain address. The exact hashing and encoding process varies across different blockchains.

**Example (Conceptual):**

Imagine your private key is a very long, secret password. Your public key is like a unique mathematical fingerprint derived from that password. Your address is a shorter, more convenient way to refer to that fingerprint so others can send you something.

---

### 2. Types of Blockchain Addresses

The format and generation of addresses can differ between blockchain networks. Here are some common types:

#### 2.1. Bitcoin Addresses

Bitcoin has evolved through several address formats:

*   **Pay-to-Public-Key-Hash (P2PKH) Addresses (Legacy):**
    *   **Format:** Starts with `1` (e.g., `1A1zP1eP5QG2oJzVbC6mC7P7N9J7L8W0`).
    *   **Generation:** Derived from a public key.
    *   **Security:** Secure, but longer and can incur slightly higher transaction fees due to their size.
    *   **Reference:** Bashir, *Mastering Blockchain* (Third Edition), Chapter 3, "Blockchain Use Cases and Applications," often discusses transaction structures which implicitly involve addresses.

*   **Pay-to-Script-Hash (P2SH) Addresses:**
    *   **Format:** Starts with `3` (e.g., `3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy`).
    *   **Functionality:** Allows for more complex transaction conditions, such as multi-signature wallets (requiring multiple private keys to authorize a transaction).
    *   **Reference:** Bashir, *Mastering Blockchain* (Third Edition) might touch upon these advanced transaction types.

*   **Bech32 Addresses (SegWit Native):**
    *   **Format:** Starts with `bc1` (e.g., `bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq`).
    *   **Features:** Longer, case-insensitive (easier to read and type), and more error-resistant due to built-in error detection. They are also associated with Segregated Witness (SegWit), an upgrade that aims to improve transaction scalability and security.
    *   **Reference:** Bashir, *Mastering Blockchain* (Third Edition) likely discusses network upgrades like SegWit, which directly impacts address formats.

#### 2.2. Ethereum Addresses

Ethereum addresses are also derived from public keys but have a different format and underlying mechanism.

*   **Format:** 40 hexadecimal characters, prefixed with `0x` (e.g., `0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed`).
*   **Derivation:** Generated from the Keccak-256 hash of the public key, taking the last 20 bytes.
*   **Types of Ethereum Accounts:**
    *   **Externally Owned Accounts (EOAs):** Controlled by a private key. These are standard user accounts used to send transactions and interact with smart contracts. Addresses starting with `0x` typically represent EOAs.
    *   **Contract Accounts:** Associated with smart contracts deployed on the blockchain. These accounts have their own associated code and state. Their addresses are generated deterministically during contract deployment.
*   **Reference:**
    *   Bashir, *Mastering Blockchain* (Third Edition), Chapter 5, "Ethereum," will extensively cover Ethereum addresses, EOAs, and contract accounts.
    *   Antonopoulos & Wood, *Mastering Ethereum*, Chapter 4, "Accounts," is the definitive source for Ethereum addresses and account types.
    *   Modi, *Solidity Programming Essentials*, Chapter 2, "Understanding the Ethereum Ecosystem," will also explain the foundational concepts of Ethereum addresses.

---

### 3. Importance of Addresses in Consensus Algorithms

While this topic is about addresses, their role in consensus is indirect but vital. Consensus algorithms rely on the network agreeing on the validity of transactions. Addresses are the mechanism through which these transactions are initiated.

*   **Transaction Origin and Destination:** Addresses define who is sending funds and who is receiving them. A consensus algorithm must ensure that only the rightful owner (holder of the private key) can initiate a transaction from their address.
*   **State Updates:** When a transaction is validated, the balances associated with the sender's and receiver's addresses are updated. The consensus algorithm ensures that all nodes agree on these balance changes.
*   **Preventing Double-Spending:** By validating transactions against the history of the blockchain, consensus algorithms prevent a user from spending the same digital assets from their address multiple times.
*   **Smart Contract Interaction:** For blockchains like Ethereum, addresses are also used to interact with smart contracts. Consensus ensures that smart contract execution is deterministic and agreed upon by all nodes.

**Example:** In Bitcoin's Proof-of-Work, miners compete to create new blocks. When validating transactions to include in a block, they verify that the sender's signature (created with their private key) is valid for the input UTXO (Unspent Transaction Output) associated with the sender's address. If valid, the transaction is included, and the receiver's address balance is updated.

**Important Point to Remember:** **You don't send crypto *to* an address; you send it to a public key that *derives* an address.** The address is the human-readable interface to the cryptographic public key.

---

### 4. Security of Addresses

The security of a blockchain address is paramount. The security relies entirely on the protection of the **private key**.

*   **Private Key Security:**
    *   **Never Share Your Private Key:** If someone has your private key, they have complete control over your funds.
    *   **Secure Storage:** Private keys should be stored securely using methods like hardware wallets, paper wallets, or secure password managers.
    *   **Seed Phrases/Mnemonic Phrases:** These are often used to back up private keys and should also be stored securely offline.

*   **Public Key/Address Security:**
    *   **Publicly Known:** Addresses are meant to be shared. It's safe to share your address for receiving funds.
    *   **Privacy Concerns:** While the address itself doesn't directly reveal your identity, transaction history associated with an address can be analyzed on a public blockchain, potentially linking addresses to real-world identities through exchanges or other means.
    *   **Address Re-use:** It's generally recommended to use a new address for each transaction to enhance privacy, especially on networks like Bitcoin.

**Reference:** Bashir, *Mastering Blockchain* (Third Edition), Chapter 3, discusses the importance of private key management for secure transactions. Antonopoulos & Wood, *Mastering Ethereum*, also dedicates sections to wallet security and private key management.

---

### 5. Practice Questions and Answers

**Question 1:** What is the primary function of a blockchain address?
    *   A. To verify a transaction
    *   B. To identify a user on the network and serve as a destination for sending assets
    *   C. To store the private key
    *   D. To mine new blocks

**Answer:** B. To identify a user on the network and serve as a destination for sending assets.

**Question 2:** If you lose your private key, what happens to the assets associated with your blockchain address?
    *   A. They are automatically transferred to a recovery address.
    *   B. They are permanently inaccessible.
    *   C. They can be recovered using your public key.
    *   D. They are frozen until the private key is found.

**Answer:** B. They are permanently inaccessible. This highlights the "not your keys, not your crypto" principle.

**Question 3:** Which of the following is a common format for Bitcoin addresses?
    *   A. `0x...`
    *   B. `bc1...`
    *   C. `ETH...`
    *   D. `PKH...`

**Answer:** B. `bc1...` (Bech32 addresses). `0x...` is typical for Ethereum.

**Question 4:** What is the fundamental security principle that protects assets associated with a blockchain address?
    *   A. The secrecy of the public key.
    *   B. The security of the network's consensus algorithm.
    *   C. The secrecy and secure management of the private key.
    *   D. The length of the address string.

**Answer:** C. The secrecy and secure management of the private key.

**Question 5 (Conceptual Exercise):** Imagine you are sending Bitcoin to a friend.
    1.  What information do you need from your friend to send them Bitcoin?
    2.  What cryptographic element is crucial for you to prove you own the Bitcoin you are sending?

**Answer:**
    1.  You need your friend's Bitcoin address (e.g., a `1...`, `3...`, or `bc1...` address).
    2.  Your private key is crucial to digitally sign the transaction, proving you authorize the spending of Bitcoin from your address.

---

## Important Points to Remember

*   **Private Key is King:** Your private key grants you control over your blockchain assets. Protect it above all else.
*   **Address is the Public Face:** Share your address freely to receive funds.
*   **Addresses are Derived from Public Keys:** The process is one-way and cryptographically secure.
*   **Address Formats Vary:** Different blockchains (Bitcoin, Ethereum) use different formats and generation methods.
*   **Addresses are Crucial for Consensus:** They are the identifiers used in transactions, which are the data points that consensus algorithms validate.
*   **Security of Assets = Security of Private Key.**

---

This module provides a foundational understanding of blockchain addresses, which are essential for interacting with blockchain networks and understanding how transactions are initiated and validated within the broader context of consensus algorithms.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
