---
title: "Hyperledger Fabric"
subject: "BLOCKCHAIN AND CRYPTOCURRENCIES"
module: "Module 4: Blockchain Ethereum Platform using Solidity and Use Cases in Blockchain :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c2c9"
status: "completed"
scrapedAt: "2026-05-20T17:02:08.218Z"
---
# BLOCKCHAIN AND CRYPTOCURRENCIES

## Module 4: Blockchain Ethereum Platform using Solidity and Use Cases in Blockchain

### Topic: Hyperledger Fabric

---

### 1. Introduction to Hyperledger Fabric

Hyperledger Fabric is a permissioned, modular, and extensible blockchain platform designed for enterprise-grade applications. It's a project hosted by the Linux Foundation and is a prominent member of the Hyperledger family of open-source blockchain technologies.

**Key Concepts:**

*   **Permissioned Blockchain:** Unlike public blockchains (like Bitcoin or Ethereum), Hyperledger Fabric requires participants to be identified and authorized to join the network. This offers greater control over who can participate, enhancing privacy and compliance.
*   **Modular Architecture:** Fabric is designed with a modular approach, allowing developers to plug and play various components, such as consensus mechanisms, membership services, and ledger storage, to suit specific business needs.
*   **Smart Contracts (Chaincode):** In Fabric, smart contracts are called "chaincode." They are the business logic that runs on the blockchain, defining the rules and operations for transactions. Chaincode can be written in Go, Node.js, or Java.
*   **Distributed Ledger Technology (DLT):** Fabric utilizes DLT to maintain a shared, immutable record of transactions across the network.

**Why is Hyperledger Fabric important in the context of Module 4?**

While Module 4 primarily focuses on Ethereum and Solidity, understanding Hyperledger Fabric provides a crucial contrast and demonstrates the diversity of blockchain platforms available for enterprise use. It highlights that not all blockchains are public and require native cryptocurrencies for operation.

---

### 2. Key Components of Hyperledger Fabric

Hyperledger Fabric has a distinct architecture with several key components that work together to facilitate secure and efficient transactions.

**2.1. Participants and Roles:**

*   **Clients:** Users or applications that initiate transactions on the network.
*   **Peers:** Nodes in the network that host ledgers and chaincode. They are responsible for validating, endorsing, and committing transactions.
    *   **Endorsing Peers:** Peers that execute chaincode and endorse (sign) transaction proposals based on endorsement policies.
    *   **Committing Peers:** Peers that receive validated transactions from the ordering service and add them to their ledger.
*   **Orderers (Ordering Service):** Nodes responsible for establishing the order of transactions and creating blocks. This component is crucial for achieving consensus.
*   **Certificate Authorities (CAs):** Responsible for issuing digital certificates to authenticate and identify participants in the network. This is central to the permissioned nature of Fabric.

**2.2. Transaction Flow:**

The transaction flow in Hyperledger Fabric is a multi-step process designed for security and efficiency:

1.  **Client Invokes Chaincode:** A client application sends a transaction proposal to an endorsing peer.
2.  **Endorsement:** Endorsing peers,
