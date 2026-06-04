---
title: "Decentralised Applications in Ethereum"
subject: "BLOCKCHAIN AND CRYPTOCURRENCIES"
module: "Module 3: Cryptocurrencies "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c2ba"
status: "completed"
scrapedAt: "2026-05-20T17:01:58.636Z"
---
# Blockchain and Cryptocurrencies: Module 3 - Cryptocurrencies

## Topic: Decentralised Applications (dApps) in Ethereum

### Introduction to dApps in Ethereum

Ethereum is a blockchain platform that allows developers to build and deploy decentralized applications (dApps). Unlike traditional applications that run on centralized servers, dApps are distributed across a network of computers, making them more secure, transparent, and resistant to censorship.

### Key Concepts and Definitions

*   **Decentralised Application (dApp):** An application whose backend code runs on a decentralized peer-to-peer network, such as a blockchain. This means the application is not controlled by a single entity and is resistant to censorship and downtime.
*   **Smart Contracts:** Self-executing contracts with the terms of the agreement directly written into code. They automatically execute actions when predefined conditions are met. Smart contracts are the backbone of dApps on Ethereum.
*   **Ethereum Virtual Machine (EVM):** A Turing-complete virtual machine that executes smart contracts on the Ethereum network. It's essentially the runtime environment for dApps.
*   **Gas:** The fee required to execute a transaction or a smart contract on the Ethereum network. It's paid in Ether (ETH) and compensates miners for their computational work.
*   **Frontend:** The user interface of a dApp, typically built with web technologies like HTML, CSS, and JavaScript.
*   **Backend:** The smart contracts and logic that run on the Ethereum blockchain.
*   **Web3.js / Ethers.js:** JavaScript libraries that allow frontend applications to interact with the Ethereum blockchain and smart contracts.
*   **Oracles:** Services that provide external data to smart contracts, enabling them to react to real-world events.

### How dApps Work on Ethereum

1.  **Smart Contract Deployment:** Developers write smart contracts using programming languages like Solidity. These contracts are then compiled and deployed to the Ethereum blockchain.
2.  **Backend Logic:** The deployed smart contract acts as the backend of the dApp, holding data and executing logic based on user interactions and predefined rules.
3.  **Frontend Interaction:** Users interact with the dApp through a web interface (frontend). This frontend uses libraries like Web3.js or Ethers.js to communicate with the Ethereum network.
4.  **Transaction Execution:** When a user wants to perform an action (e.g., send Ether, interact with a smart contract), the frontend initiates a transaction. This transaction is sent to the Ethereum network, requiring a gas fee.
5.  **Network Consensus:** Miners (or validators in Ethereum's Proof-of-Stake) process the transaction, verify its validity, and include it in a block.
6.  **Smart Contract Execution:** Once the transaction is confirmed, the associated smart contract logic is executed by the EVM.
7.  **State Update:** The results of the smart contract execution are reflected in the blockchain's state, making the changes permanent and verifiable.

### Components of an Ethereum dApp

*   **Frontend (Client-side):**
    *   **User Interface (UI):** Built with standard web technologies (HTML, CSS, JavaScript).
    *   **Web3/Ethers Library:** Connects the frontend to the Ethereum blockchain (e.g., MetaMask browser extension).
    *   **API Calls:** To interact with smart contracts and retrieve data.
*   **Backend (Smart Contracts):**
    *   **Written in Solidity (or other EVM-compatible languages).**
    *   **Deployed on the Ethereum Blockchain.**
    *   **Contain the core logic and data storage for the dApp.**
    *   **Interact with other smart contracts or external data sources (via oracles).**

### Benefits of dApps

*   **Decentralization:** No single point of control, making them resistant to censorship and single points of failure.
*   **Transparency:** All transactions and smart contract code are publicly visible on the blockchain.
*   **Security:** Cryptographic principles and distributed consensus mechanisms enhance security.
*   **Immutability:** Once deployed, smart contracts and their execution records cannot be altered.
*   **Trustlessness:** Users don't need to trust intermediaries; they trust the code and the blockchain protocol.

### Challenges of dApps

*   **Scalability:** Ethereum currently faces scalability challenges, leading to higher gas fees and slower transaction times during periods of high network congestion.
*   **User Experience (UX):** Interacting with dApps can be complex for non-technical users, requiring knowledge of wallets, gas fees, and private keys.
*   **Smart Contract Bugs:** Errors in smart contract code can lead to significant financial losses, as they are immutable once deployed.
*   **Gas Costs:** High gas fees can make certain dApp interactions prohibitively expensive.
*   **Regulation:** The regulatory landscape for dApps and cryptocurrencies is still evolving.

### Examples of Ethereum dApps

*   **Decentralised Finance (DeFi):**
    *   **Uniswap:** A decentralized exchange (DEX) that allows users to swap cryptocurrencies without a central authority.
    *   **Aave:** A lending protocol where users can earn interest on deposits and borrow assets.
    *   **MakerDAO:** A decentralized credit platform that allows users to create stablecoins (DAI) by collateralizing ETH.
*   **Gaming:**
    *   **Axie Infinity:** A popular play-to-earn game where players own and breed digital pets (Axies) as NFTs.
    *   **CryptoKitties:** One of the earliest NFT-based games, allowing users to collect, breed, and sell unique digital cats.
*   **Marketplaces:**
    *   **OpenSea:** A leading NFT marketplace for buying, selling, and discovering unique digital assets.
*   **Social Media:**
    *   **Steemit/Hive:** Early examples of decentralized blogging and social media platforms.
*   **Identity Management:**
    *   **Decentraland:** A virtual world where users can buy, sell, and build on virtual land, with ownership represented by NFTs.

### Interacting with dApps: The Role of Wallets

*   **Web3 Wallets (e.g., MetaMask, Coinbase Wallet):**
    *   Act as a bridge between the user's browser and the Ethereum network.
    *   Store private keys securely.
    *   Allow users to sign transactions and manage their Ether and other tokens.
    *   Enable dApps to read account information and send transactions to the blockchain.

### Important Points to Remember

*   **dApps are powered by smart contracts on the blockchain.**
*   **Gas fees are essential for executing transactions on Ethereum.**
*   **Frontend connects users to the blockchain through wallets and Web3 libraries.**
*   **Transparency and immutability are key features of dApps.**
*   **DeFi is a major use case for Ethereum dApps.**
*   **Security of smart contracts is paramount due to their immutable nature.**
*   **Scalability and user experience are ongoing challenges for dApps.**

---

### Practice Questions and Exercises

**Question 1:** What is the primary function of smart contracts in Ethereum dApps?
    a) Storing user personal data
    b) Executing predefined agreements automatically when conditions are met
    c) Managing centralized servers for the application
    d) Creating new cryptocurrencies

**Question 2:** Which of the following is a critical component for a frontend application to interact with the Ethereum blockchain?
    a) A centralized database
    b) A web hosting service
    c) A Web3 JavaScript library (e.g., Web3.js)
    d) A physical server

**Question 3:** What is "gas" in the context of Ethereum dApps?
    a) The energy consumed by miners
    b) A fee paid in Ether for executing transactions and smart contracts
    c) The storage space used on the blockchain
    d) The speed of transaction processing

**Question 4:** Name two major categories of dApps built on Ethereum and provide one example for each.

**Question 5:** Explain the concept of decentralization in relation to dApps and how it differs from traditional applications.

---

### Answers to Practice Questions

**Answer 1:**
    b) Executing predefined agreements automatically when conditions are met.
    *   **Explanation:** Smart contracts are the core logic of dApps, automating agreements and actions based on code.

**Answer 2:**
    c) A Web3 JavaScript library (e.g., Web3.js).
    *   **Explanation:** These libraries enable communication between the user's browser (frontend) and the Ethereum network.

**Answer 3:**
    b) A fee paid in Ether for executing transactions and smart contracts.
    *   **Explanation:** Gas is the cost of computation on the Ethereum network.

**Answer 4:**
    *   **Decentralised Finance (DeFi):** Example: Uniswap, Aave, MakerDAO
    *   **Gaming:** Example: Axie Infinity, CryptoKitties
    *   *(Other valid categories and examples include Marketplaces (OpenSea), Social Media, Identity Management, etc.)*

**Answer 5:**
    *   **Decentralization in dApps:** dApps run on a distributed network (the Ethereum blockchain), meaning their backend logic is executed by many nodes rather than a single server. This makes them resistant to censorship, downtime, and single points of failure.
    *   **Difference from Traditional Applications:** Traditional applications rely on centralized servers controlled by a single entity. If that server goes down or is attacked, the application becomes unavailable. Furthermore, the controlling entity can censor content or alter data without user consent. dApps, by contrast, are inherently more resilient and transparent due to their decentralized nature.
