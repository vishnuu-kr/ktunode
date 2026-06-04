---
title: "Smart Contracts in Ethereum"
subject: "BLOCKCHAIN AND CRYPTOCURRENCIES"
module: "Module 3: Cryptocurrencies "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c2b9"
status: "completed"
scrapedAt: "2026-05-20T17:01:57.931Z"
---
# BLOCKCHAIN AND CRYPTOCURRENCIES

## Module 3: Cryptocurrencies

### Topic: Smart Contracts in Ethereum

---

## 1. Introduction to Smart Contracts

### 1.1 What are Smart Contracts?

*   **Definition:** A smart contract is a self-executing contract with the terms of the agreement directly written into code.
*   **Analogy:** Think of them as "if-then" statements stored on the blockchain. If a certain condition is met, a pre-programmed action automatically executes.
*   **Key Characteristics:**
    *   **Self-executing:** No need for intermediaries.
    *   **Immutable:** Once deployed, they cannot be altered.
    *   **Transparent:** The code is publicly visible on the blockchain.
    *   **Distributed:** Their execution is spread across the network.
    *   **Trustless:** They remove the need to trust a third party, as the code enforces the agreement.

### 1.2 Why Ethereum?

*   **Pioneering Platform:** Ethereum was the first blockchain specifically designed to support smart contracts.
*   **Turing Completeness:** The Ethereum Virtual Machine (EVM) is Turing-complete, meaning it can compute anything that any other computer can compute, allowing for complex logic in smart contracts.
*   **Gas System:** Ethereum uses a "gas" system to measure and limit the computational resources used by smart contracts, preventing infinite loops and ensuring fair resource allocation.
*   **Developer Ecosystem:** Ethereum has a large and active developer community, fostering innovation and tooling for smart contract development.

---

## 2. How Smart Contracts Work on Ethereum

### 2.1 The Ethereum Virtual Machine (EVM)

*   **Definition:** The EVM is a decentralized, virtual computer that executes smart contract code.
*   **Sandbox Environment:** It's a sandboxed environment that isolates smart contract execution from the underlying blockchain's main functions.
*   **Bytecode:** Smart contracts are written in high-level languages (like Solidity) and then compiled into bytecode, which the EVM can understand and execute.
*   **State:** The EVM maintains the state of all accounts and smart contracts on the Ethereum network, including balances and contract storage.

### 2.2 Gas and Transaction Fees

*   **Purpose of Gas:**
    *   **Resource Allocation:** To measure the computational effort required for an operation (e.g., executing a line of code, storing data).
    *   **Preventing Abuse:** To deter malicious actors from creating infinite loops or consuming excessive network resources.
    *   **Incentivizing Miners/Validators:** To compensate those who run the network and process transactions.
*   **Gas Price:** The amount of Ether you are willing to pay per unit of gas.
*   **Gas Limit:** The maximum amount of gas you are willing to use for a transaction.
*   **Transaction Cost:** `Gas Used * Gas Price`
*   **Example:** Sending Ether might cost 21,000 gas. If the gas price is 50 Gwei (1 Gwei = 0.000000001 ETH), the transaction fee would be 21,000 * 0.000000001 ETH = 0.000021 ETH.

### 2.3 Deployment and Execution

*   **Deployment:**
    *   A smart contract is deployed to the Ethereum network by sending a special transaction to an empty address.
    *   This transaction contains the compiled bytecode of the smart contract.
    *   Once deployed, the contract gets its own unique address on the blockchain.
*   **Execution:**
    *   Users interact with deployed smart contracts by sending transactions to the contract's address.
    *   These transactions can trigger specific functions within the smart contract.
    *   The EVM then executes the requested function, consuming gas and potentially modifying the contract's state or sending Ether.

---

## 3. Solidity: The Smart Contract Programming Language

### 3.1 Introduction to Solidity

*   **Definition:** Solidity is a statically-typed, contract-oriented programming language commonly used for writing smart contracts on Ethereum and other EVM-compatible blockchains.
*   **Syntax:** It shares similarities with JavaScript, Python, and C++.

### 3.2 Key Solidity Concepts

*   **`pragma` directive:** Specifies the compiler version to be used.
    ```solidity
    pragma solidity ^0.8.0;
    ```
*   **`contract` keyword:** Defines a smart contract.
    ```solidity
    contract MyContract {
        // ... contract body ...
    }
    ```
*   **State Variables:** Variables that store data on the blockchain.
    ```solidity
    contract SimpleStorage {
        uint256 storedData; // State variable to store an unsigned integer

        function set(uint256 x) public {
            storedData = x;
        }

        function get() public view returns (uint256) {
            return storedData;
        }
    }
    ```
*   **Functions:** Blocks of code that perform specific actions.
    *   **`public`:** Accessible externally and internally.
    *   **`private`:** Accessible only within the current contract.
    *   **`internal`:** Accessible within the current contract and derived contracts.
    *   **`external`:** Accessible only externally.
    *   **`view`:** Functions that only read data from the blockchain, don't modify state. (Free to call off-chain, cost gas if called within another transaction).
    *   **`pure`:** Functions that don't read or modify state. (Free to call off-chain, cost gas if called within another transaction).
*   **Data Types:**
    *   **Value Types:** `uint256`, `int256`, `bool`, `address`, `bytes`.
    *   **Reference Types:** `struct`, `array`, `mapping`.
*   **`mapping`:** A key-value store, similar to hash tables or dictionaries.
    ```solidity
    contract MappingExample {
        mapping(address => uint256) public balances; // Maps addresses to balances

        function updateBalance(address user, uint256 amount) public {
            balances[user] = amount;
        }
    }
    ```
*   **Events:** Used to log actions that have occurred on the blockchain, allowing external applications to listen for them.
    ```solidity
    contract EventExample {
        event Transfer(address indexed from, address indexed to, uint256 value);

        function performTransfer(address to, uint256 value) public {
            // ... transfer logic ...
            emit Transfer(msg.sender, to, value); // Emit the event
        }
    }
    ```
*   **`msg` global variables:** Provide information about the transaction sender and value.
    *   `msg.sender`: The address that sent the current transaction.
    *   `msg.value`: The amount of Ether (in Wei) sent with the transaction.

### 3.3 Modifiers

*   **Definition:** A way to change the behavior of functions, often used for access control or pre-conditions.
    ```solidity
    contract ModifierExample {
        address public owner;

        modifier onlyOwner() {
            require(msg.sender == owner, "Only the owner can call this function");
            _; // Placeholder for the function body to be executed
        }

        constructor() {
            owner = msg.sender;
        }

        function withdraw() public onlyOwner {
            // ... withdrawal logic ...
        }
    }
    ```

---

## 4. Common Use Cases and Examples

### 4.1 Decentralized Applications (DApps)

*   **Definition:** DApps are applications that run on a decentralized network, typically powered by smart contracts.
*   **Examples:**
    *   **Decentralized Finance (DeFi):** Lending platforms, decentralized exchanges (DEXs), stablecoins.
    *   **Supply Chain Management:** Tracking goods and verifying authenticity.
    *   **Gaming:** In-game assets as NFTs, decentralized game logic.
    *   **Voting Systems:** Secure and transparent elections.
    *   **Digital Identity:** Verifying and managing digital identities.

### 4.2 Token Creation (ERC-20)

*   **ERC-20 Standard:** A technical specification for fungible tokens on Ethereum.
*   **Fungible:** Each unit of the token is interchangeable with another unit (like dollars).
*   **Key Functions:** `totalSupply`, `balanceOf`, `transfer`, `transferFrom`, `approve`, `allowance`.
*   **Example:** Creating a custom cryptocurrency for a project or community.

### 4.3 Non-Fungible Tokens (NFTs) (ERC-721)

*   **ERC-721 Standard:** A technical specification for non-fungible tokens on Ethereum.
*   **Non-Fungible:** Each token is unique and cannot be exchanged one-to-one with another (like a unique piece of art).
*   **Key Functions:** `ownerOf`, `transferFrom`, `safeTransferFrom`, `balanceOf`, `tokenURI`.
*   **Example:** Digital art, collectibles, virtual real estate.

### 4.4 Escrow Services

*   **Scenario:** Buyer wants to purchase an item from a seller.
*   **Smart Contract Logic:**
    1.  Buyer sends payment to the smart contract.
    2.  Seller ships the item.
    3.  Buyer confirms receipt and satisfaction.
    4.  Contract automatically releases payment to the seller.
    5.  If there's a dispute, a pre-defined resolution mechanism is triggered (e.g., an arbitrator).

---

## 5. Security Considerations and Best Practices

### 5.1 Common Vulnerabilities

*   **Reentrancy Attacks:** A contract can call another contract, which then calls back into the first contract before the first has finished its execution, potentially draining funds.
    *   **Example:** The DAO Hack.
*   **Integer Overflow/Underflow:** Performing arithmetic operations that result in a number exceeding the maximum or going below the minimum value for a data type, causing unexpected behavior.
*   **Unchecked External Calls:** Not properly checking the return value of external calls can lead to errors.
*   **Timestamp Dependence:** Relying on block timestamps for critical logic can be manipulated by miners.
*   **Gas Limit Issues:** Unexpectedly high gas costs for certain operations.

### 5.2 Best Practices for Secure Smart Contracts

*   **Use Checked Arithmetic:** Employ libraries like OpenZeppelin's SafeMath (though newer Solidity versions have built-in overflow checks for `uint` and `int` types from `^0.8.0`).
*   **Follow the Checks-Effects-Interactions Pattern:**
    1.  **Checks:** Validate all conditions and inputs.
    2.  **Effects:** Modify the contract's state variables.
    3.  **Interactions:** Call external contracts or send Ether.
*   **Avoid Reentrancy:**
    *   Use the `nonReentrant` modifier (available in libraries like OpenZeppelin).
    *   Ensure state changes happen *before* external calls.
*   **Use `require()`, `assert()`, and `revert()` correctly:**
    *   `require()`: For validating inputs and conditions before execution.
    *   `assert()`: For checking internal invariants and detecting critical errors.
    *   `revert()`: To stop execution and revert all state changes.
*   **Minimize State Changes:** Only modify state when necessary.
*   **Write Comprehensive Tests:** Thoroughly test all functions and edge cases.
*   **Code Audits:** Get your smart contract code reviewed by security experts.
*   **Keep Contracts Simple:** Complexity increases the attack surface.
*   **Use Established Libraries:** Leverage well-audited libraries like OpenZeppelin.

---

## 6. Practice Questions and Exercises

### Question 1:
What is the primary purpose of the "gas" system in Ethereum?
a) To store transaction history
b) To measure computational effort and prevent network abuse
c) To define the syntax of smart contracts
d) To facilitate direct peer-to-peer transactions without smart contracts

### Question 2:
Which of the following is a characteristic of a smart contract deployed on Ethereum?
a) It can be easily modified after deployment.
b) It requires a trusted third party for execution.
c) Its code is typically immutable once deployed.
d) Its execution is limited to a single node.

### Question 3:
Explain the difference between a `view` function and a `pure` function in Solidity. Provide a brief example for each.

### Question 4:
Describe a potential vulnerability in smart contracts and explain how it could be exploited.

### Question 5:
What does the ERC-20 standard define on Ethereum?

---

## 7. Answers to Practice Questions

### Answer 1:
The primary purpose of the "gas" system in Ethereum is **b) To measure computational effort and prevent network abuse**. It also incentivizes miners/validators for processing transactions.

### Answer 2:
The correct answer is **c) Its code is typically immutable once deployed**. Smart contracts, once deployed on Ethereum, cannot be easily modified, making them secure and predictable.

### Answer 3:
*   **`view` function:** Reads data from the blockchain but does not modify its state.
    *   **Example:**
        ```solidity
        function getBalance(address _user) public view returns (uint256) {
            return balance[_user];
        }
        ```
*   **`pure` function:** Neither reads from nor modifies the blockchain's state. It only operates on its inputs and local variables.
    *   **Example:**
        ```solidity
        function add(uint256 a, uint256 b) public pure returns (uint256) {
            return a + b;
        }
        ```

### Answer 4:
A potential vulnerability is **Reentrancy**.
*   **Exploitation:** A malicious contract can repeatedly call a vulnerable function in another contract before the first contract has completed its execution and updated its state. For example, if a `withdraw` function sends Ether before updating the user's balance, the attacker's contract can keep calling `withdraw` in a loop, draining the contract's funds, as the balance check is bypassed on subsequent calls. The DAO hack is a famous example of reentrancy.

### Answer 5:
The ERC-20 standard defines a technical specification for **fungible tokens** on the Ethereum blockchain. It outlines a common set of functions and events that token contracts must implement, enabling interoperability between different tokens and applications.

---

## 8. Important Points to Remember

*   **Smart contracts are code:** They automate agreements and are executed on the blockchain.
*   **Ethereum is a smart contract platform:** Its EVM is designed for executing this code.
*   **Gas is essential:** It's the fuel for smart contract execution and prevents abuse.
*   **Solidity is the primary language:** Learn its syntax and key concepts.
*   **Security is paramount:** Smart contracts handle value, so vulnerabilities can lead to significant financial losses. Always follow best practices and consider audits.
*   **DApps are built on smart contracts:** They represent the decentralized applications of blockchain technology.
*   **Standards (ERC-20, ERC-721) promote interoperability:** Understand these to create and interact with tokens.
*   **Immutability is a double-edged sword:** It ensures trust but also means bugs are permanent.
