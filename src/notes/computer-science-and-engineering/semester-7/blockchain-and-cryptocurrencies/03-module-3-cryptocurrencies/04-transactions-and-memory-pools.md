---
title: "Transactions and memory pools"
subject: "BLOCKCHAIN AND CRYPTOCURRENCIES"
module: "Module 3: Cryptocurrencies "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c2b0"
status: "completed"
scrapedAt: "2026-05-20T17:01:51.602Z"
---
# Blockchain and Cryptocurrencies: Module 3 - Cryptocurrencies

## Topic: Transactions and Memory Pools

This module delves into the fundamental mechanics of how cryptocurrencies operate, focusing on the lifecycle of a transaction and the role of the memory pool in facilitating these transfers.

---

### Learning Outcomes Covered:

*   **Understanding the basic structure of a cryptocurrency transaction:** How a transaction is formed, what components it contains, and how it is broadcast.
*   **Explaining the role of UTXOs (Unspent Transaction Outputs) in Bitcoin-like systems:** How UTXO management ensures preventing double-spending.
*   **Describing the function of the memory pool (mempool):** Its purpose, how transactions enter it, and how they are selected for inclusion in a block.
*   **Differentiating between unconfirmed and confirmed transactions:** The implications of each state for the sender and receiver.
*   **Analyzing transaction fees:** Why they exist, how they are calculated, and their impact on transaction confirmation times.

---

### 1. The Anatomy of a Cryptocurrency Transaction

A cryptocurrency transaction is a digital record of value transfer between participants on a blockchain network. It's essentially a cryptographically signed instruction to move assets.

#### 1.1. Key Components of a Transaction:

*   **Inputs:**
    *   **Reference to Previous Transaction:** Each input points to a specific previous transaction and an output from that transaction that the sender wants to spend.
    *   **Digital Signature:** The sender uses their private key to digitally sign the input, proving ownership of the funds being spent and authorizing the transaction. This signature is unique to the transaction and the specific input.
    *   **Public Key (or ScriptSig/Unlock Script):** This is the public key corresponding to the private key used for signing. In many systems (like Bitcoin), it's part of a script that verifies the signature.
*   **Outputs:**
    *   **Amount:** The value of cryptocurrency being sent to the recipient.
    *   **Recipient's Public Key (or ScriptPubKey/Lock Script):** This specifies the address (derived from the recipient's public key) that the funds can be spent from. It's a script that needs to be "unlocked" by the recipient's private key in a future transaction.
    *   **Change Output (Optional but Common):** If the total value of inputs exceeds the amount sent to the recipient, a change output is created, sending the remaining funds back to the sender's own address.

#### 1.2. Transaction Lifecycle:

1.  **Creation:** A user initiates a transaction using their wallet software. The wallet specifies the recipient, the amount, and selects the inputs (UTXOs) to spend.
2.  **Signing:** The user's private key is used to sign the transaction, authorizing the spending of the selected inputs.
3.  **Broadcasting:** The signed transaction is broadcast to the network of nodes.
4.  **Propagation:** Nodes on the network relay the transaction to other connected nodes until it reaches a significant portion of the network.
5.  **Validation:** Nodes validate the transaction based on network rules (e.g., correct signature, sufficient funds).
6.  **Memory Pool (Mempool):** Valid, but unconfirmed, transactions are stored in the memory pool of each node.
7.  **Block Inclusion:** Miners select transactions from their mempool to include in the next block they are trying to mine.
8.  **Confirmation:** Once a block containing the transaction is added to the blockchain, the transaction is considered confirmed. The number of subsequent blocks added increases the confirmation strength.

#### 1.3. Example Transaction (Simplified Bitcoin):

Imagine Alice wants to send 0.5 BTC to Bob.

*   **Alice's Wallet:**
    *   Needs to select inputs that total at least 0.5 BTC (plus a transaction fee). Let's say Alice has two previous UTXOs:
        *   UTXO 1: Received from Charlie, worth 0.3 BTC.
        *   UTXO 2: Received from David, worth 0.4 BTC.
    *   Total available: 0.7 BTC.
*   **Transaction Structure:**
    *   **Input 1:** Points to UTXO 1 (0.3 BTC). Signed by Alice's private key.
    *   **Input 2:** Points to UTXO 2 (0.4 BTC). Signed by Alice's private key.
    *   **Output 1:** To Bob's address, amount: 0.5 BTC.
    *   **Output 2 (Change):** To Alice's address, amount: 0.7 BTC (inputs) - 0.5 BTC (to Bob) - 0.01 BTC (fee) = 0.19 BTC.

Alice's wallet constructs this transaction, signs it with her private keys for UTXO 1 and UTXO 2, and broadcasts it to the network.

---

### 2. Unspent Transaction Outputs (UTXOs)

UTXOs are a core concept in many blockchain systems, most notably Bitcoin. They represent unspent funds that can be used as inputs in new transactions.

#### 2.1. Definition:

A UTXO is a specific output from a previous transaction that has not yet been spent. It's like a digital "coin" or "note" that you possess and can use.

#### 2.2. How UTXOs Prevent Double-Spending:

*   **Uniqueness:** Each UTXO is unique and tied to a specific transaction output.
*   **Spending Mechanism:** To spend a UTXO, a new transaction must include that specific UTXO as an input and provide a valid digital signature from the private key associated with the address that received that UTXO.
*   **Consumption:** When a UTXO is spent, it is "consumed" and becomes an "input" in the new transaction. It can only be spent once.
*   **New UTXOs:** The new transaction creates new UTXOs (for the recipient and for change) that can be spent in the future.

#### 2.3. UTXO Set:

The UTXO set is the collection of all UTXOs that are currently available to be spent on the network. When a new block is mined, the UTXO set is updated by removing spent UTXOs and adding new ones.

#### 2.4. Example of UTXO Management:

1.  **Transaction A:** Alice receives 1 BTC from Bob. This creates a UTXO of 1 BTC in Alice's address.
2.  **Transaction B:** Alice wants to send 0.3 BTC to Carol.
    *   Alice uses her 1 BTC UTXO as an input.
    *   Transaction B specifies an output of 0.3 BTC to Carol's address.
    *   Transaction B also specifies an output of 0.7 BTC (minus fee) back to Alice's address as change.
3.  **Result:** The 1 BTC UTXO from Transaction A is consumed as an input in Transaction B. Two new UTXOs are created:
    *   A 0.3 BTC UTXO for Carol.
    *   A 0.7 BTC UTXO for Alice.

If Alice tried to spend the same 1 BTC UTXO in a second, independent transaction (Transaction C) before Transaction B is confirmed and consumes it, the network would reject Transaction C because the UTXO is already referenced as an input in Transaction B.

---

### 3. The Memory Pool (Mempool)

The memory pool is a crucial waiting area for transactions that have been broadcast but not yet included in a block.

#### 3.1. Definition:

The memory pool (or mempool) is a data structure within each node of a blockchain network that stores unconfirmed, valid transactions. It's essentially a holding pen for transactions awaiting confirmation.

#### 3.2. Purpose of the Mempool:

*   **Transaction Staging:** It acts as a staging area for transactions before they are picked up by miners.
*   **Network Broadcast:** Nodes receive broadcasted transactions and, after basic validation, add them to their mempool.
*   **Transaction Selection by Miners:** Miners query their mempools to choose which transactions to include in the next block they are mining.

#### 3.3. How Transactions Enter the Mempool:

1.  A user creates and signs a transaction.
2.  The transaction is broadcast to the network.
3.  Each node that receives the broadcasted transaction performs validation checks (e.g., signature validity, ensuring inputs are not already spent based on their current view of the blockchain).
4.  If the transaction passes validation, it is added to the node's local mempool.

#### 3.4. How Miners Select Transactions from the Mempool:

Miners have the incentive (through block rewards and transaction fees) to build profitable blocks. They typically select transactions from their mempool based on a combination of factors, with **transaction fees** being a primary driver:

*   **Transaction Fee Rate (Fee per byte/satoshi):** Miners prioritize transactions with higher fee rates. This is because the fee is paid to the miner for including the transaction in their block.
*   **Transaction Size:** Smaller transactions consume less space in the block, making them more efficient for miners.
*   **Miner's Strategy:** Some miners might have specific strategies, like prioritizing transactions from certain clients or those that fulfill certain criteria.

Miners attempt to fill a block (up to its block size limit) with the highest-fee-rate transactions available in their mempool.

#### 3.5. Mempool Dynamics:

*   **Full Mempool:** During periods of high network activity, the mempool can become very large, as more transactions are broadcast than miners can include in blocks.
*   **Transaction Prioritization:** In a full mempool, transactions with lower fees may sit unconfirmed for longer periods.
*   **Transaction Eviction:** Some nodes might have limits on mempool size. If a node's mempool is full and new, valid transactions arrive, older or lower-fee transactions might be evicted to make space.

---

### 4. Unconfirmed vs. Confirmed Transactions

Understanding the difference between these states is crucial for managing expectations and security.

#### 4.1. Unconfirmed Transactions:

*   **Definition:** Transactions that have been broadcast to the network and are in a node's mempool but have not yet been included in a block that has been added to the blockchain.
*   **State:** They are "pending."
*   **Recipient's Perspective:** The recipient cannot yet be certain they will receive the funds, as the transaction could potentially be invalidated or replaced (e.g., if the sender broadcasts a "double-spend" attempt with a higher fee).
*   **Sender's Perspective:** The sender has effectively spent the funds from their perspective, but they cannot initiate another transaction with the same UTXOs until the current transaction is confirmed.
*   **Confirmation Count:** 0 confirmations.

#### 4.2. Confirmed Transactions:

*   **Definition:** Transactions that have been included in a block that has been added to the blockchain.
*   **State:** They are "finalized" to a certain degree.
*   **Recipient's Perspective:** The recipient can be confident they have received the funds.
*   **Sender's Perspective:** The funds spent in the transaction are now considered irreversibly moved. The UTXOs created by this transaction can be used by the recipient.
*   **Confirmation Count:** Starts at 1 (for the block the transaction is in) and increases as more blocks are added on top of that block.

#### 4.3. Importance of Confirmations:

*   **Security:** Each additional confirmation makes it exponentially harder (and more expensive) to reverse a transaction. Reversing a transaction would require rewriting a significant portion of the blockchain, which is computationally infeasible for a truly decentralized network.
*   **Trust:** Most services that accept cryptocurrency require a certain number of confirmations before considering a payment final (e.g., 3-6 confirmations for exchanges). This provides a robust guarantee against double-spending.

---

### 5. Transaction Fees

Transaction fees are a vital incentive mechanism and a way to manage network congestion.

#### 5.1. Why Transaction Fees Exist:

*   **Miner Incentive:** Fees compensate miners for their computational effort in verifying transactions and securing the network. Without fees, there would be less incentive for miners to operate.
*   **Preventing Spam:** Fees make it economically unviable for attackers to flood the network with a large number of trivial transactions, which would otherwise overwhelm the system.
*   **Resource Allocation:** Fees act as a market mechanism to allocate limited block space. Users willing to pay more get their transactions processed faster.

#### 5.2. How Transaction Fees are Calculated:

*   **Fee Rate:** Fees are typically calculated as a **fee rate**, expressed in satoshis per byte (sats/byte) for Bitcoin, or a similar unit for other cryptocurrencies.
*   **Transaction Size:** The total fee is the fee rate multiplied by the transaction's size in bytes.
    *   `Total Fee = Fee Rate (sats/byte) * Transaction Size (bytes)`
*   **Wallet Calculation:** Wallet software often suggests a fee rate based on current network congestion and desired confirmation time. Users can manually adjust this.

#### 5.3. Impact of Transaction Fees:

*   **Confirmation Speed:** Transactions with higher fee rates are more likely to be picked up by miners first, leading to faster confirmations.
*   **Network Congestion:** During periods of high demand, fee rates can increase significantly as users compete for limited block space.
*   **Economic Viability:** For small transactions, the transaction fee can represent a significant percentage of the value, making them less practical.

#### 5.4. Example of Fee Calculation:

*   **Transaction:** Alice's transaction to Bob (0.5 BTC) requires 2 inputs and 2 outputs.
*   **Transaction Size:** Let's say this transaction is 250 bytes.
*   **Desired Fee Rate:** Alice wants a fast confirmation and chooses a fee rate of 50 satoshis/byte.
*   **Total Fee:** 50 sats/byte * 250 bytes = 1250 satoshis (or 0.00001250 BTC).
*   **Amount Sent to Bob:** 0.5 BTC.
*   **Change Back to Alice:** 0.7 BTC (inputs) - 0.5 BTC (to Bob) - 0.00001250 BTC (fee) = 0.19998750 BTC.

If Alice had chosen a lower fee rate, say 10 sats/byte, the fee would only be 2500 satoshis (0.00000250 BTC). This transaction might take longer to confirm if the network is busy.

---

### Practice Questions and Exercises:

**Question 1:**
What are the two main components of a cryptocurrency transaction, and what is the purpose of each?

**Question 2:**
Explain the concept of a UTXO and how it helps prevent double-spending.

**Question 3:**
Imagine you send a transaction with 1 BTC worth of UTXOs. You send 0.6 BTC to a friend and the transaction fee is 0.0001 BTC. What will be the amount of your change UTXO, and how many outputs will your transaction have?

**Question 4:**
What is the primary role of the memory pool (mempool) in a blockchain network?

**Question 5:**
If a transaction is in the mempool, is it considered confirmed? Why or why not?

**Question 6:**
How does a higher transaction fee rate generally affect the confirmation time of a transaction?

---

### Answers to Practice Questions:

**Answer 1:**
The two main components of a cryptocurrency transaction are:
*   **Inputs:** These specify which previous UTXOs are being spent and include the digital signature proving ownership. Their purpose is to authorize the spending of funds by referencing existing, unspent outputs.
*   **Outputs:** These specify the amount of cryptocurrency being sent to a recipient address and, often, a change address. Their purpose is to create new, spendable UTXOs for the future.

**Answer 2:**
A UTXO (Unspent Transaction Output) is a specific record of cryptocurrency that has been received but not yet spent. It's like a unique unit of value. UTXOs prevent double-spending because each UTXO can only be referenced as an input in *one* transaction. Once a UTXO is spent, it's consumed and can no longer be used. The blockchain ledger tracks all UTXOs and their statuses, ensuring that a particular unit of cryptocurrency cannot be spent twice.

**Answer 3:**
Your change UTXO will be:
1 BTC (inputs) - 0.6 BTC (sent to friend) - 0.0001 BTC (fee) = **0.3999 BTC**.

Your transaction will have **two outputs**:
1.  One output of 0.6 BTC to your friend's address.
2.  One output of 0.3999 BTC back to your own address (the change).

**Answer 4:**
The primary role of the memory pool (mempool) is to store valid, unconfirmed transactions that have been broadcast to the network. It acts as a waiting area where these transactions are held until miners select them to be included in a new block.

**Answer 5:**
No, a transaction in the mempool is **not** considered confirmed. It is an unconfirmed or pending transaction. Confirmation only occurs when the transaction is included in a block that has been successfully added to the blockchain. The mempool is a temporary holding state before confirmation.

**Answer 6:**
A higher transaction fee rate generally leads to a **faster** confirmation time. Miners are incentivized to include transactions with higher fee rates in their blocks because they earn these fees as rewards. Therefore, during periods of network congestion, transactions with higher fees are prioritized by miners.

---

### Important Points to Remember:

*   **Transactions are atomic:** They either succeed completely or fail completely. They cannot be partially completed.
*   **UTXOs are spent by reference:** You don't spend an address; you spend specific outputs (UTXOs) that were previously sent to an address.
*   **The mempool is dynamic:** Its contents change constantly as new transactions arrive and confirmed transactions are removed.
*   **Fees are crucial for confirmations:** In congested networks, fees dictate priority.
*   **Confirmations increase security:** More confirmations mean a transaction is more difficult (and expensive) to reverse.
*   **Wallets manage UTXOs:** Your wallet software keeps track of your UTXOs and helps you construct transactions by selecting them.

---
