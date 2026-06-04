---
title: "Ethereum Network"
subject: "BLOCKCHAIN AND CRYPTOCURRENCIES"
module: "Module 3: Cryptocurrencies "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c2b7"
status: "completed"
scrapedAt: "2026-05-20T17:01:56.507Z"
---
# BLOCKCHAIN AND CRYPTOCURRENCIES

## Module 3: Cryptocurrencies

## Topic: Ethereum Network

---

### **Introduction to the Ethereum Network**

The Ethereum network is a decentralized, open-source blockchain system that features **smart contract functionality**. Unlike Bitcoin, which primarily functions as a digital currency, Ethereum was designed to be a platform for building and deploying decentralized applications (dApps).

---

### **Learning Outcome 1: Explain the core concepts of the Ethereum network, including its history, purpose, and evolution.**

*   **History:**
    *   **Whitepaper:** Published in late 2013 by Vitalik Buterin.
    *   **Development:** Initiated in 2014, with development team including Gavin Wood, Charles Hoskinson, Anthony Di Iorio, Joseph Lubin, and Mihai Alisie.
    *   **Launch:** The network went live with its genesis block on **July 30, 2015**.
    *   **Early Funding:** Initial Coin Offering (ICO) raised over $18 million in Bitcoin.

*   **Purpose:**
    *   To create a **global, decentralized computer** that anyone can use to build and run applications without censorship, downtime, or third-party interference.
    *   To enable the execution of **programmable money** and **decentralized applications (dApps)**.
    *   To facilitate the creation of **tokens** on its blockchain, leading to the boom of Initial Coin Offerings (ICOs) and the ERC-20 standard.

*   **Evolution:**
    *   **The DAO Hack (2016):** A controversial event where a decentralized autonomous organization (DAO) built on Ethereum was hacked. This led to a hard fork, splitting Ethereum into Ethereum (ETH) and Ethereum Classic (ETC).
    *   **Ethereum 2.0 (Eth2 / Serenity):** A major upgrade designed to improve scalability, security, and sustainability. Key phases include:
        *   **Phase 0 (Beacon Chain):** Launched in December 2020, introducing Proof-of-Stake (PoS) consensus.
        *   **Phase 1 (Sharding):** Introduced shard chains to improve transaction throughput.
        *   **Phase 1.5 (Merging):** The Beacon Chain took over the consensus of the original Proof-of-Work (PoW) chain, marking the full transition to PoS.
        *   **Phase 2 (Execution Layer Shards):** Further refinements to shard functionality.
    *   **The Merge (September 15, 2022):** This historic event officially transitioned Ethereum from Proof-of-Work (PoW) to Proof-of-Stake (PoS) consensus.

---

### **Learning Outcome 2: Differentiate between Ethereum and Bitcoin, highlighting their unique features and functionalities.**

| Feature         | Bitcoin (BTC)                                     | Ethereum (ETH)                                          |
| :-------------- | :------------------------------------------------ | :------------------------------------------------------ |
| **Primary Purpose** | Digital Store of Value / Peer-to-Peer Electronic Cash | Decentralized Application Platform / Programmable Blockchain |
| **Programming Language** | Bitcoin Script (limited functionality)             | Solidity, Vyper, etc. (Turing-complete)                |
| **Smart Contracts** | Limited scripting capabilities                    | Robust smart contract support                           |
| **Transaction Speed** | Slower (approx. 10 minutes per block)            | Faster (approx. 12 seconds per block pre-PoS, variable post-Merge) |
| **Block Size**  | Fixed                                             | Variable (gas limit)                                    |
| **Consensus Mechanism** | Proof-of-Work (PoW)                             | **Transitioned to Proof-of-Stake (PoS)** (previously PoW) |
| **Native Token** | Bitcoin (BTC)                                     | Ether (ETH)                                             |
| **Use Cases**   | Digital currency, store of value                  | dApps, DeFi, NFTs, DAOs, ICOs, token creation           |
| **Supply Limit** | Capped at 21 million BTC                          | No hard cap, but issuance is reduced with PoS           |

---

### **Learning Outcome 3: Define and explain the concept of smart contracts and their role in the Ethereum network.**

*   **Smart Contract:**
    *   A **self-executing contract** with the terms of the agreement directly written into code.
    *   The code and the agreements contained therein exist across a **distributed, decentralized network**.
    *   They automatically execute and control or document legally relevant events and actions.
    *   **"Code is law"** is a common mantra associated with smart contracts.

*   **Key Characteristics of Smart Contracts:**
    *   **Self-executing:** Automatically triggered when predefined conditions are met.
    *   **Immutable:** Once deployed on the blockchain, they cannot be altered.
    *   **Transparent:** The code is visible to all participants on the network.
    *   **Deterministic:** Given the same inputs, they will always produce the same output.
    *   **Decentralized:** Executed by the network of nodes, not by a single authority.

*   **Role in Ethereum:**
    *   **Foundation of dApps:** Smart contracts are the building blocks of decentralized applications on Ethereum.
    *   **Automation:** They automate complex processes, reducing the need for intermediaries.
    *   **Trustless Interactions:** Enable trustless interactions between parties without needing to know or trust each other.
    *   **Token Creation:** Facilitate the creation of fungible (e.g., ERC-20) and non-fungible (e.g., ERC-721) tokens.

*   **Example:**
    *   **Automated Escrow:** A smart contract can hold funds until both parties in a transaction confirm completion. Once confirmed, the funds are automatically released to the seller, and the digital asset to the buyer.

---

### **Learning Outcome 4: Understand the Ethereum Virtual Machine (EVM) and its function.**

*   **Ethereum Virtual Machine (EVM):**
    *   The **runtime environment** for smart contracts on the Ethereum network.
    *   It's a **virtualized computer** that executes code in a deterministic way.
    *   It's part of every Ethereum node, ensuring that every node executes smart contracts in the same way.
    *   The EVM is often described as the **"heart"** of the Ethereum network.

*   **Function:**
    *   **Execution Engine:** It takes compiled smart contract code (bytecode) and executes it.
    *   **State Management:** It manages the state of the Ethereum network, including account balances and contract storage.
    *   **Gas Accounting:** It accounts for the computational resources used by smart contracts, preventing infinite loops and spam. Each operation on the EVM costs a certain amount of "gas."
    *   **Sandboxing:** It operates in a sandboxed environment, meaning contracts cannot access the underlying network, file systems, or other processes.

*   **Bytecode:**
    *   The low-level, machine-readable code that the EVM executes.
    *   High-level programming languages like Solidity are compiled into EVM bytecode.

*   **Key EVM Components:**
    *   **Account State:** Each account has a state, including nonce, balance, code, and storage.
    *   **Storage:** A key-value store associated with each contract, used for persistent data.
    *   **Memory:** Temporary storage used during contract execution.
    *   **Stack:** Used for storing temporary data during operations.
    *   **Gas:** The unit of measurement for computational effort required to execute operations on the EVM.

---

### **Learning Outcome 5: Explain the concept of Ether (ETH) and its role as the native cryptocurrency of the Ethereum network.**

*   **Ether (ETH):**
    *   The **native cryptocurrency** of the Ethereum network.
    *   It is the **fuel** that powers the network.

*   **Role:**
    *   **Transaction Fees (Gas):** Users pay ETH to execute transactions and run smart contracts. This fee is called "gas."
    *   **Incentive for Validators (Post-Merge):** In the Proof-of-Stake system, validators stake ETH to secure the network and earn rewards in ETH.
    *   **Medium of Exchange:** Can be used as a digital currency for payments and remittances.
    *   **Store of Value:** Like Bitcoin, ETH is seen by many as a digital store of value.
    *   **Collateral:** ETH is widely used as collateral in Decentralized Finance (DeFi) applications.

*   **Gas Mechanics:**
    *   Each operation on the EVM has a gas cost.
    *   The total gas used by a transaction is multiplied by the gas price to determine the transaction fee.
    *   `Transaction Fee = Gas Used * Gas Price`
    *   The gas price is determined by network demand; higher demand leads to higher gas prices.
    *   **Gas Limit:** The maximum amount of gas a user is willing to spend on a transaction. This prevents runaway code from consuming all available ETH.

*   **Example:**
    *   Sending ETH from one address to another costs a certain amount of gas.
    *   Deploying a complex smart contract or executing a DeFi trade will cost significantly more gas due to the computational complexity.

---

### **Learning Outcome 6: Discuss the significance of tokens on the Ethereum network (e.g., ERC-20, ERC-721).**

*   **Tokens on Ethereum:**
    *   Ethereum's smart contract capabilities allow for the creation of **digital tokens** that can represent various assets or utilities.
    *   These tokens are built on top of the Ethereum blockchain, leveraging its security and infrastructure.

*   **ERC-20 Standard (Fungible Tokens):**
    *   **Definition:** A technical standard for creating fungible tokens on the Ethereum blockchain.
    *   **Fungible:** Means that each token is identical and interchangeable with any other token of the same type (e.g., one USD is the same as another USD).
    *   **Functionality:** Defines a common interface for tokens, allowing them to be easily transferred, listed on exchanges, and integrated into wallets and dApps.
    *   **Key Functions:** `name()`, `symbol()`, `decimals()`, `totalSupply()`, `balanceOf()`, `transfer()`, `transferFrom()`, `approve()`, `allowance()`.
    *   **Examples:**
        *   **Stablecoins:** DAI, USDC, USDT (pegged to fiat currencies).
        *   **Utility Tokens:** Tokens used to access services within a specific dApp.
        *   **Governance Tokens:** Tokens that give holders voting rights in a decentralized protocol.
        *   **ICO Tokens:** Tokens issued during Initial Coin Offerings.

*   **ERC-721 Standard (Non-Fungible Tokens - NFTs):**
    *   **Definition:** A technical standard for creating unique, non-fungible tokens on the Ethereum blockchain.
    *   **Non-Fungible:** Means that each token is unique and cannot be directly exchanged for another on a one-to-one basis (e.g., a unique piece of art, a collectible card).
    *   **Functionality:** Allows for the unique identification and tracking of digital or physical assets. Each token has a unique ID.
    *   **Key Functions:** `ownerOf()`, `safeTransferFrom()`, `tokenURI()`.
    *   **Examples:**
        *   **Digital Art:** CryptoKitties, Bored Ape Yacht Club.
        *   **Collectibles:** Virtual trading cards, in-game items.
        *   **Digital Certificates:** Proof of ownership for real-world assets.
        *   **Event Tickets:** Verifiable and transferable tickets.

*   **Significance:**
    *   **Tokenization of Assets:** Enables the representation of virtually any asset on the blockchain, from digital collectibles to real estate.
    *   **New Economic Models:** Facilitates new fundraising methods (ICOs), decentralized economies, and incentive mechanisms within dApps.
    *   **Interoperability:** Standardized tokens can interact seamlessly with other applications and platforms on the Ethereum network.

---

### **Learning Outcome 7: Describe the transition to Proof-of-Stake (PoS) and its implications for Ethereum.**

*   **Proof-of-Stake (PoS):**
    *   A consensus mechanism where **validators are chosen to create new blocks** based on the amount of cryptocurrency they **stake** (lock up) as collateral.
    *   The more ETH a validator stakes, the higher their chance of being selected to validate a block.

*   **The Merge (Transition from PoW to PoS):**
    *   **Date:** Completed on September 15, 2022.
    *   **Mechanism:** The existing Proof-of-Work execution layer of Ethereum was merged with a new Proof-of-Stake consensus layer (the Beacon Chain).

*   **Implications of PoS:**
    *   **Energy Efficiency:**
        *   **Major Benefit:** Drastically reduces Ethereum's energy consumption by an estimated **99.95%**. PoS is significantly more energy-efficient than PoW, which relies on computationally intensive mining.
    *   **Scalability (Foundation for Future Upgrades):**
        *   PoS lays the groundwork for future scaling solutions like **sharding**, which will increase transaction throughput and reduce fees.
    *   **Security:**
        *   PoS introduces economic security. Attacking the network would require acquiring and staking a significant portion of the total ETH supply, making it prohibitively expensive.
        *   Staked ETH can be "slashed" (confiscated) if validators act maliciously, creating a strong economic disincentive against attacks.
    *   **Decentralization:**
        *   **Potential for Increased Decentralization:** Lower barrier to entry for participation compared to PoW mining rigs, allowing more individuals to stake ETH and validate.
        *   **Risk of Centralization:** Concerns remain about the concentration of staked ETH among large entities or exchanges.
    *   **Staking Rewards:**
        *   Validators who stake ETH earn rewards in ETH, providing an incentive to secure the network.
    *   **Reduced ETH Issuance:**
        *   PoS significantly reduces the net issuance of new ETH compared to PoW, potentially making ETH more deflationary or disinflationary over time.

---

### **Important Points to Remember**

*   Ethereum is more than just a cryptocurrency; it's a **platform for decentralized applications**.
*   **Smart contracts** are the core innovation that enables dApps and programmable money.
*   The **EVM** is the execution environment for smart contracts.
*   **Ether (ETH)** is the native currency and the fuel for the network (pays for gas).
*   **ERC-20 and ERC-721** are crucial token standards that have enabled vast ecosystems.
*   The transition to **Proof-of-Stake (PoS)** was a monumental upgrade, primarily aimed at improving **energy efficiency and scalability**.
*   Understand the difference between **fungible (ERC-20)** and **non-fungible (ERC-721)** tokens.
*   **Gas** is essential for understanding transaction costs and network usage.

---

### **Practice Questions**

1.  **What was the primary motivation behind the creation of Ethereum, distinguishing it from Bitcoin?**
    *   *Answer: To create a platform for decentralized applications (dApps) and programmable money, beyond just a digital currency.*
2.  **Explain the concept of a "smart contract" and provide one real-world analogy.**
    *   *Answer: A self-executing contract with the terms directly written into code. Analogy: A vending machine – insert money (input), select item (condition met), machine dispenses item (output executed).*
3.  **What is the role of the Ethereum Virtual Machine (EVM)?**
    *   *Answer: The EVM is the runtime environment that executes smart contract code on the Ethereum network, ensuring deterministic execution and managing state.*
4.  **What is "gas" in the context of the Ethereum network, and why is it important?**
    *   *Answer: Gas is a unit of measurement for the computational effort required to execute transactions and smart contracts on Ethereum. It's important because it prevents network spam, incentivizes validators, and determines transaction fees.*
5.  **How does the ERC-20 standard differ from the ERC-721 standard?**
    *   *Answer: ERC-20 is for fungible tokens (interchangeable units), while ERC-721 is for non-fungible tokens (unique, indivisible units).*
6.  **List at least two major implications of Ethereum's transition to Proof-of-Stake (PoS).**
    *   *Answer: Significant reduction in energy consumption (e.g., ~99.95%), foundation for future scalability upgrades (like sharding), and increased security through economic staking.*
7.  **If you wanted to create a digital collectible, like a unique piece of art on the Ethereum blockchain, which token standard would you likely use and why?**
    *   *Answer: ERC-721, because it's designed for unique, non-fungible assets.*

---
