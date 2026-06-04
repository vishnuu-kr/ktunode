---
title: "types"
subject: "BLOCK CHAIN"
module: "Module 1: Blockchain – Definition"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff6df"
status: "completed"
scrapedAt: "2026-05-23T18:12:59.080Z"
---
# Blockchain Study Notes - Module 1: Blockchain - Definition & Types

## Module Overview

This module introduces the fundamental concept of blockchain technology, laying the groundwork for understanding its various applications and mechanisms. We will explore the definition of blockchain and delve into its different types.

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the core definition and principles of blockchain technology.
*   Differentiate between various types of blockchains.

## Course Outcomes Addressed

This module primarily contributes to:

*   **CO1: Explain the fundamental concepts of blockchain technology. (Knowledge Level: K2)**

## 1.1 Blockchain: Definition

### Key Concepts & Definitions

*   **Blockchain:** A distributed, immutable ledger that records transactions across many computers. Each block in the chain contains a number of transactions, and once a block is added to the chain, it cannot be altered.
    *   **Distributed Ledger:** A database that is shared and synchronized across multiple sites, countries, or institutions. There is no central administrator.
    *   **Immutability:** Once data is recorded on the blockchain, it cannot be changed or deleted. This ensures data integrity and prevents tampering.
    *   **Blocks:** Collections of validated transactions. Each block contains:
        *   **Transactions:** The actual data being recorded.
        *   **Timestamp:** The time the block was created.
        *   **Nonce:** A random number used in the mining process.
        *   **Hash of the previous block:** This links blocks together, forming the "chain."
        *   **Merkle Root:** A hash that summarizes all transactions within the block.
    *   **Chaining:** Blocks are linked together cryptographically using hashes. The hash of the previous block is included in the current block, creating a secure chain. Any alteration in a block would invalidate the subsequent blocks due to the broken hash linkage.
    *   **Cryptography:** The use of encryption techniques to secure transactions and the blockchain itself. This includes hashing algorithms (like SHA-256) and digital signatures.
    *   **Decentralization:** The absence of a central authority or single point of control. This makes the network resistant to censorship and failure.
    *   **Consensus Mechanism:** A process by which participants in the network agree on the validity of transactions and the state of the ledger. (While this module focuses on the definition, understanding consensus is crucial for appreciating blockchain's functionality and will be covered in detail in later modules).

### How Blockchain Works (Simplified Analogy)

Imagine a shared Google Doc that everyone in a group can see and contribute to.

*   Every time someone makes a change (a transaction), it's recorded in a new entry.
*   Before a new entry is added, everyone in the group must agree that the change is valid.
*   Once an entry is added, it's very difficult to go back and change previous entries without everyone noticing.
*   This shared, verifiable history makes the document trustworthy for everyone involved.

### Important Points to Remember (Definition)

*   Blockchain is fundamentally a **distributed ledger**.
*   **Immutability** is a core characteristic, ensuring data integrity.
*   **Cryptography** provides security and links the blocks.
*   **Decentralization** removes single points of failure and control.

---

## 1.2 Types of Blockchains

Blockchains can be classified based on their access control and permissions. This classification helps us understand their intended use cases and the level of decentralization they offer.

### Key Concepts & Definitions

*   **Permissioned vs. Permissionless:** This refers to who can participate in the network and validate transactions.
*   **Public vs. Private vs. Consortium:** These are common categories within permissioned and permissionless classifications.

### Types of Blockchains: Detailed Breakdown

#### 1. Public Blockchains (Permissionless)

*   **Definition:** Anyone can join the network, read the ledger, submit transactions, and participate in the consensus process (e.g., mining or staking). They are fully decentralized and transparent.
*   **Characteristics:**
    *   **Open Access:** No permission needed to join.
    *   **High Decentralization:** Large number of participants.
    *   **Transparency:** All transactions are visible to everyone.
    *   **Immutability:** Strongest due to widespread distribution.
    *   **Security:** Relies on robust consensus mechanisms (like Proof-of-Work or Proof-of-Stake) and the sheer number of participants to prevent malicious attacks.
*   **Examples:**
    *   **Bitcoin:** The first and most famous public blockchain, used for peer-to-peer electronic cash. (Addresses CO3).
    *   **Ethereum:** A public blockchain known for its smart contract capabilities, enabling decentralized applications (DApps). (Addresses CO4).
*   **Reference:** Imran Bashir's "Mastering Blockchain" highlights public blockchains as the foundation of cryptocurrencies and emphasizes their trustless nature due to the consensus mechanisms.

#### 2. Private Blockchains (Permissioned)

*   **Definition:** Access to the network is restricted and requires permission from a central authority or a governing body. Only authorized participants can read the ledger, submit transactions, and validate blocks.
*   **Characteristics:**
    *   **Restricted Access:** Requires permission to join.
    *   **Centralized Control:** A single entity or a small group controls who participates and validates.
    *   **Privacy:** Transactions can be kept private among participants.
    *   **Higher Transaction Speed:** Often faster due to fewer participants and simpler consensus mechanisms.
    *   **Scalability:** Generally more scalable than public blockchains.
*   **Use Cases:**
    *   Enterprise solutions within a single organization for supply chain management, internal record-keeping, or auditing.
    *   Improving efficiency and security in business processes where trust is already established internally.
*   **Example:** A bank using a private blockchain to manage inter-branch transactions.
*   **Reference:** Kumar Saurabh and Ashutosh Saxena's "Blockchain Technology: Concepts and Applications" discusses private blockchains as suitable for enterprise environments where control and privacy are paramount.

#### 3. Consortium Blockchains (Semi-Private/Federated)

*   **Definition:** A hybrid model where a group of pre-selected organizations or entities govern the blockchain. Permissions are managed by this consortium, and participants are known and authorized.
*   **Characteristics:**
    *   **Shared Governance:** Multiple organizations control the network.
    *   **Permissioned Access:** Participants are vetted and authorized by the consortium.
    *   **Selective Transparency:** Data visibility can be controlled among consortium members.
    *   **Balanced Decentralization:** More decentralized than private blockchains but less than public ones.
    *   **Efficiency:** Can achieve good transaction speeds and scalability.
*   **Use Cases:**
    *   Industry consortia for supply chain tracking, financial services, healthcare data sharing, etc.
    *   Collaboration between multiple companies where shared trust needs to be built and maintained.
*   **Example:** A group of banks forming a consortium to manage interbank settlements.
*   **Reference:** Chandramouli Subramanian et al.'s "Blockchain Technology" often categorizes consortium blockchains as a middle ground, offering the benefits of permissioned access with distributed governance.

### Visualizing the Types

| Feature          | Public Blockchain (Permissionless) | Private Blockchain (Permissioned) | Consortium Blockchain (Permissioned) |
| :--------------- | :--------------------------------- | :-------------------------------- | :----------------------------------- |
| **Access**       | Open to all                        | Restricted (by one entity)        | Restricted (by a consortium)         |
| **Participants** | Anonymous/Pseudonymous             | Known                             | Known                                |
| **Decentralization** | High                               | Low (Centralized)                 | Medium (Federated)                   |
| **Transparency** | High (All transactions visible)    | Low (Controlled)                  | Medium (Controlled among members)    |
| **Consensus**    | Often computationally intensive    | Simpler                           | Simpler                              |
| **Speed**        | Slower                             | Faster                            | Faster                               |
| **Scalability**  | Lower                              | Higher                            | Higher                               |
| **Use Cases**    | Cryptocurrencies, DApps            | Enterprise internal use           | Industry collaborations, B2B         |

### Important Points to Remember (Types)

*   The primary differentiator between blockchain types is **access control and permission management**.
*   **Public blockchains** prioritize decentralization and transparency.
*   **Private blockchains** prioritize control and privacy for a single entity.
*   **Consortium blockchains** offer a balance, with shared governance among a group of organizations.

---

## Practice Questions

**Question 1:**
Which of the following is a key characteristic of a blockchain that ensures data cannot be altered or deleted once recorded?
a) Decentralization
b) Cryptography
c) Immutability
d) Consensus Mechanism

**Question 2:**
In which type of blockchain is participation open to anyone, allowing them to read the ledger and submit transactions without any specific permission?
a) Private Blockchain
b) Consortium Blockchain
c) Public Blockchain
d) Federated Blockchain

**Question 3:**
A large enterprise wants to implement a blockchain solution for its internal supply chain management. They want tight control over who can access and validate transactions. Which type of blockchain would be most suitable?
a) Public Blockchain
b) Private Blockchain
c) Consortium Blockchain
d) Open Blockchain

**Question 4:**
Which of the following best describes a Consortium Blockchain?
a) A blockchain controlled by a single organization.
b) A blockchain where all transactions are publicly visible and verifiable by anyone.
c) A blockchain governed by a group of pre-selected organizations.
d) A blockchain that uses Proof-of-Work for consensus.

**Question 5:**
Explain the fundamental difference between a public and a private blockchain in terms of access and control.

---

## Answers to Practice Questions

**Answer 1:**
c) Immutability

**Answer 2:**
c) Public Blockchain

**Answer 3:**
b) Private Blockchain

**Answer 4:**
c) A blockchain governed by a group of pre-selected organizations.

**Answer 5:**
The fundamental difference lies in **access and control**:
*   **Public Blockchains** are **permissionless**, meaning anyone can join the network, read the ledger, and participate in the consensus process without needing specific authorization. They are highly decentralized.
*   **Private Blockchains** are **permissioned**, meaning access to the network, reading the ledger, and participating in consensus is restricted and controlled by a single entity or a central authority. They are more centralized and offer greater privacy.

---

## Key Takeaways for Module 1

*   **Blockchain is a distributed, immutable ledger** secured by cryptography.
*   **Immutability and decentralization** are core principles that build trust.
*   Blockchains are primarily classified into **Public, Private, and Consortium** types based on their access control and permission models.
*   Each type of blockchain has distinct characteristics and is suited for different use cases, ranging from cryptocurrencies to enterprise solutions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
