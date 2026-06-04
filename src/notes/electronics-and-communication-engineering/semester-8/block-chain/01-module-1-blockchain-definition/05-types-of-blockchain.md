---
title: "types of blockchain."
subject: "BLOCK CHAIN"
module: "Module 1: Blockchain – Definition"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff6dd"
status: "completed"
scrapedAt: "2026-05-23T18:12:57.735Z"
---
# Module 1: Blockchain – Definition

## Topic: Types of Blockchain

This module introduces the fundamental concept of blockchain technology. Understanding the different types of blockchains is crucial for comprehending their diverse applications and functionalities.

---

### 1. Introduction to Blockchain Types

Blockchains are not monolithic. They can be categorized based on their **permissions**, **access levels**, and **degree of decentralization**. This classification helps in understanding their suitability for different use cases, ranging from public, open systems to private, permissioned networks.

**Key Concept:** The core of blockchain technology is a distributed, immutable ledger. The way this ledger is accessed, managed, and verified determines its type.

---

### 2. Classification of Blockchains

Blockchains are primarily classified into three main types:

*   **Public Blockchains**
*   **Private Blockchains**
*   **Consortium (or Federated) Blockchains**

Let's delve into each type in detail.

---

### 2.1. Public Blockchains

Public blockchains, also known as **permissionless blockchains**, are fully decentralized and open to anyone. Anyone can join the network, participate in the consensus process, and access the ledger.

**Key Characteristics:**

*   **Open Access:** Anyone can read, write, and participate in the network.
*   **Decentralization:** No single entity controls the network.
*   **Immutability:** Transactions, once recorded, are virtually impossible to alter.
*   **Transparency:** All transactions are visible to all participants.
*   **Consensus Mechanism:** Typically use Proof-of-Work (PoW) or Proof-of-Stake (PoS) to validate transactions.
*   **High Security:** Achieved through cryptographic principles and widespread participation.
*   **Scalability Challenges:** Can sometimes face limitations in transaction speed and throughput due to the large number of participants.

**How they work:**

1.  **Transaction Initiation:** Any participant can initiate a transaction.
2.  **Broadcasting:** The transaction is broadcast to the entire network.
3.  **Validation:** Network participants (miners or validators) validate the transaction based on the consensus protocol.
4.  **Block Creation:** Validated transactions are bundled into a block.
5.  **Chaining:** The new block is added to the existing blockchain, cryptographically linked to the previous block.
6.  **Distribution:** The updated ledger is distributed to all participants.

**Examples:**

*   **Bitcoin:** The first and most well-known public blockchain, primarily used for digital currency. (Relevant to CO3)
*   **Ethereum:** A public blockchain that supports smart contracts and decentralized applications (DApps). (Relevant to CO1, CO4, CO5)
*   **Litecoin:** Another cryptocurrency-based public blockchain.

**Reference:**
*   **Mastering Blockchain** by Imran Bashir (Third edition) extensively discusses public blockchains, their architecture, and consensus mechanisms like PoW.
*   **Blockchain Technology** by Chandramouli Subramanian et al. also provides a good overview of public blockchain characteristics.

**Important Points to Remember:**
*   Public blockchains prioritize decentralization and censorship resistance.
*   Their openness can be a double-edged sword, offering transparency but also potential privacy concerns for some applications.

---

### 2.2. Private Blockchains

Private blockchains, also known as **permissioned blockchains**, are controlled by a single organization or a consortium of organizations. Access to the network is restricted and requires explicit permission.

**Key Characteristics:**

*   **Restricted Access:** Only authorized participants can join and interact with the network.
*   **Centralized or Semi-Decentralized Control:** Managed by a single entity or a small group.
*   **Faster Transaction Speeds:** Due to fewer participants and simpler consensus mechanisms.
*   **Higher Throughput:** Can handle a larger volume of transactions.
*   **Customizable Permissions:** Granular control over who can read, write, and validate transactions.
*   **Enhanced Privacy:** Transaction details are not publicly visible.
*   **Less Decentralized:** Can be more susceptible to collusion or control by the governing entity.

**How they work:**

1.  **Membership Management:** An administrator or governing body grants access to participants.
2.  **Transaction Initiation:** Authorized participants initiate transactions.
3.  **Validation:** Pre-selected and authorized nodes validate transactions. Consensus mechanisms are often simpler, such as Proof-of-Authority (PoA) or Byzantine Fault Tolerance (BFT) variations.
4.  **Block Creation and Chaining:** Validated transactions are added to blocks and chained.
5.  **Ledger Distribution:** The ledger is distributed among authorized participants.

**Examples:**

*   **Hyperledger Fabric:** An open-source platform for developing private blockchain solutions, widely used in enterprise settings.
*   **R3 Corda:** A permissioned blockchain platform designed for financial services, focusing on privacy and interoperability.
*   **JP Morgan's Quorum:** An enterprise-focused blockchain platform for financial transactions.

**Reference:**
*   **Mastering Blockchain** by Imran Bashir dedicates sections to private blockchains and their use in enterprise solutions.
*   **Blockchain Technology: Concepts and Applications** by Kumar Saurabh and Ashutosh Saxena offers insights into the enterprise applications of private blockchains.

**Important Points to Remember:**
*   Private blockchains offer greater control, privacy, and efficiency, making them suitable for enterprise use cases where data confidentiality and regulatory compliance are paramount.
*   The trade-off for these benefits is a reduced level of decentralization.

---

### 2.3. Consortium (or Federated) Blockchains

Consortium blockchains are a hybrid between public and private blockchains. They are semi-decentralized, with a predetermined set of organizations or nodes responsible for managing and validating transactions.

**Key Characteristics:**

*   **Semi-Decentralized:** Control is distributed among a group of trusted entities, not a single entity or the public.
*   **Permissioned Access:** Membership is controlled and requires consensus from the governing consortium.
*   **Faster and More Scalable:** Generally more efficient than public blockchains but may be less so than private ones.
*   **Enhanced Privacy:** Transactions are not visible to the public but are shared among consortium members.
*   **Shared Governance:** Decisions about network rules and upgrades are made by the consortium.
*   **Higher Trust within the Group:** Relies on the trust established between the consortium members.

**How they work:**

1.  **Consortium Formation:** A group of organizations agrees to form a consortium and establish a blockchain network.
2.  **Membership Agreement:** Rules for joining and participating in the network are defined.
3.  **Transaction Validation:** A subset of the consortium's nodes is responsible for validating transactions. Consensus mechanisms can be BFT variants or similar.
4.  **Block Creation and Chaining:** Validated transactions form blocks, which are then chained.
5.  **Ledger Distribution:** The ledger is distributed among the consortium members.

**Examples:**

*   **Energy Web Foundation:** Uses a consortium blockchain for energy industry applications.
*   **Marco Polo Network:** A trade finance network built on a consortium blockchain.
*   **IBM Food Trust:** Leverages a consortium blockchain for supply chain transparency in the food industry.

**Reference:**
*   **Mastering Blockchain** by Imran Bashir also covers consortium blockchains as a significant category for inter-organizational collaboration.
*   **Blockchain Technology** by Chandramouli Subramanian et al. provides a good overview of how consortium blockchains facilitate collaboration.

**Important Points to Remember:**
*   Consortium blockchains offer a balance between the decentralization of public blockchains and the control and privacy of private blockchains.
*   They are ideal for scenarios where multiple organizations need to collaborate and share data securely and efficiently, but public access is not desired.

---

### 3. Hybrid Blockchains (Brief Mention)

While the three primary types are Public, Private, and Consortium, some discussions might include **Hybrid Blockchains**. These are essentially a blend of public and private blockchain functionalities, where certain aspects are public (e.g., immutability of records) and others are private (e.g., access to specific data). This is often achieved through permissioned layers on top of public blockchains or by selectively sharing data.

---

### 4. Comparison of Blockchain Types

| Feature             | Public Blockchain                      | Private Blockchain                     | Consortium Blockchain                   |
| :------------------ | :------------------------------------- | :------------------------------------- | :-------------------------------------- |
| **Access Control**  | Permissionless (open to all)           | Permissioned (controlled access)       | Permissioned (controlled by consortium) |
| **Decentralization**| High                                   | Low to Medium                          | Medium                                  |
| **Participants**    | Anyone                                 | Authorized entities only               | Authorized consortium members           |
| **Transparency**    | High (all transactions visible)        | Low (visible to authorized only)       | Medium (visible to consortium members)  |
| **Speed**           | Slower                                 | Faster                                 | Faster than Public                      |
| **Scalability**     | Lower                                  | Higher                                 | Higher than Public                      |
| **Consensus**       | PoW, PoS                               | PoA, BFT-based                         | BFT-based, variations                   |
| **Use Cases**       | Cryptocurrencies, open DApps           | Enterprise solutions, internal data    | Inter-organizational collaboration      |
| **Examples**        | Bitcoin, Ethereum                      | Hyperledger Fabric, R3 Corda           | IBM Food Trust, Energy Web Foundation   |

---

### 5. Linking to Course Outcomes

*   **CO1: Explain the fundamental concepts of blockchain technology.**
    *   Understanding the different types of blockchains (public, private, consortium) is a fundamental aspect of grasping how blockchain technology is implemented and applied. This topic helps to illustrate the variations in access, control, and decentralization inherent in blockchain design.
*   **CO2: Summarize the classification of consensus algorithms.**
    *   While this topic focuses on blockchain types, it's important to note that the choice of blockchain type often dictates the suitable consensus algorithms. Public blockchains typically use PoW or PoS for broad participation, while private and consortium blockchains often opt for more efficient BFT-based algorithms or PoA due to their controlled environments.
*   **CO3: Explain the concepts of first decentralized cryptocurrency bitcoin.**
    *   Bitcoin is a prime example of a public blockchain, and understanding its public, permissionless nature is key to understanding this category.
*   **CO4: Explain the use of smart contracts and its use cases.**
    *   While smart contracts are not exclusively tied to one blockchain type, they are widely deployed on public blockchains like Ethereum. Understanding the transparency and accessibility of public blockchains provides context for how smart contracts can operate in a decentralized manner.
*   **CO5: Develop simple applications using Solidity language on Ethereum platform.**
    *   Ethereum is a public blockchain. Learning to develop applications on it requires understanding the characteristics of public blockchains, including their transaction mechanisms and the implications of immutability and transparency.

---

### 6. Practice Questions

1.  **Define** a public blockchain and list two of its key characteristics.
    *   **Answer:** A public blockchain is a permissionless and decentralized ledger accessible to anyone. Key characteristics include open access, high transparency, and strong immutability.
2.  **What is the primary difference** between a private blockchain and a consortium blockchain in terms of governance?
    *   **Answer:** A private blockchain is typically controlled by a single organization, whereas a consortium blockchain is governed by a group of pre-selected organizations.
3.  **Provide one advantage and one disadvantage** of using a private blockchain for an enterprise supply chain management system.
    *   **Answer:**
        *   **Advantage:** Increased privacy for sensitive supply chain data and faster transaction processing.
        *   **Disadvantage:** Reduced decentralization, making it potentially more susceptible to control or censorship by the managing entity.
4.  **Which type of blockchain** would be most suitable for a global cryptocurrency like Bitcoin, and why?
    *   **Answer:** A public blockchain. This is because Bitcoin aims for decentralization, censorship resistance, and open participation, which are core features of public blockchains.
5.  **Explain the term "permissioned"** in the context of private and consortium blockchains.
    *   **Answer:** "Permissioned" means that participation in the network, such as reading, writing, or validating transactions, requires explicit authorization or permission from the network administrators or governing consortium.

---

### 7. Key Takeaways

*   Blockchains can be categorized into **Public**, **Private**, and **Consortium** types, each with distinct characteristics regarding access, control, and decentralization.
*   **Public blockchains** are open, decentralized, and transparent, exemplified by Bitcoin and Ethereum.
*   **Private blockchains** are permissioned and controlled by a single entity, offering privacy and efficiency, often used in enterprise solutions.
*   **Consortium blockchains** are semi-decentralized, governed by a group of organizations, and strike a balance between public and private benefits.
*   The choice of blockchain type depends heavily on the specific use case, security requirements, privacy needs, and desired level of decentralization.

---
This concludes Module 1, Topic: Types of Blockchain. The next module will delve deeper into the foundational elements of blockchain technology.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
