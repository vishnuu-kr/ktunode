---
title: "Smart contracts Case study: Voting"
subject: "BLOCK CHAIN"
module: "Module 4: Ethereum – The Ethereum network."
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff719"
status: "completed"
scrapedAt: "2026-05-23T18:13:39.256Z"
---
# Blockchain: Module 4 - Ethereum: The Ethereum Network

## Topic: Smart Contracts Case Study: Voting

This module delves into the Ethereum network and its powerful feature: smart contracts. We will explore a practical application of smart contracts through a case study of a voting system.

---

### **1. Ethereum: The Next Generation Blockchain**

*   **What is Ethereum?**
    *   Ethereum is an open-source, public, blockchain-based distributed ledger system that features **smart contract** functionality.
    *   Unlike Bitcoin, which is primarily designed as a peer-to-peer electronic cash system, Ethereum is a platform for decentralized applications (DApps).
    *   **Key Concept:** Ethereum Virtual Machine (EVM) – The runtime environment for smart contracts on Ethereum. It's a Turing-complete virtual machine, allowing for complex computations.
*   **Key Components of Ethereum:**
    *   **Ether (ETH):** The native cryptocurrency of the Ethereum network, used to pay for transaction fees (gas) and computational services.
    *   **Smart Contracts:** Self-executing contracts with the terms of the agreement directly written into code. They run on the blockchain and automatically enforce the contract's rules. (Relates to CO4)
    *   **Decentralized Applications (DApps):** Applications that run on a peer-to-peer network (like Ethereum) rather than a single, centralized server.
*   **Ethereum's Evolution:**
    *   Ethereum's roadmap has involved various stages of development, often referred to as "eras" (e.g., Frontier, Homestead, Metropolis, Serenity).
    *   **Important Point to Remember:** Ethereum's transition from Proof-of-Work (PoW) to Proof-of-Stake (PoS) (The Merge) significantly impacts its energy consumption and scalability.

---

### **2. Smart Contracts: Enabling Trustless Agreements**

*   **Definition:** As per Bashir (2020), "Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They run on the blockchain, and are thus immutable, transparent, and automated."
*   **How they work:**
    *   Code is written in a programming language (like Solidity).
    *   The code is deployed to the blockchain.
    *   Once deployed, smart contracts are immutable (cannot be altered).
    *   Transactions trigger the execution of smart contract functions.
    *   The EVM executes the code, and the resulting state changes are recorded on the blockchain.
*   **Benefits of Smart Contracts:**
    *   **Automation:** Execute automatically when predefined conditions are met.
    *   **Trustlessness:** Eliminate the need for intermediaries, reducing counterparty risk.
    *   **Transparency:** All transactions and contract logic are visible on the blockchain.
    *   **Security:** Cryptographically secured and immutable.
    *   **Efficiency:** Streamline processes and reduce costs.
*   **Use Cases:** (Relates to CO4)
    *   **Supply Chain Management:** Tracking goods and payments.
    *   **Real Estate:** Automating property transfers.
    *   **Insurance:** Automated claims processing.
    *   **Voting Systems:** Ensuring secure and transparent elections.

---

### **3. Case Study: A Smart Contract for Voting**

*   **Problem:** Traditional voting systems are often susceptible to fraud, manipulation, and lack transparency. Centralized systems can be points of failure and distrust.
*   **Solution:** A blockchain-based voting system using smart contracts can address these issues.
*   **Key Features of a Smart Contract Voting System:**
    *   **Voter Registration:** A mechanism to register eligible voters.
    *   **Candidate Registration:** A way to add candidates to the ballot.
    *   **Voting Period:** Defining the start and end times for voting.
    *   **Vote Casting:** Securely casting votes, ensuring one vote per eligible voter.
    *   **Vote Counting:** Automated and transparent counting of votes.
    *   **Result Declaration:** Publishing the final results on the blockchain.

*   **Solidity Implementation (Conceptual Example):**

    ```solidity
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;

    contract Voting {
        // State variables
        struct Candidate {
            uint id;
            string name;
            uint voteCount;
        }

        address public owner; // Address that deploys the contract
        mapping(uint => Candidate) public candidates; // Stores candidate information
        uint public candidatesCount; // Number of candidates

        mapping(address => bool) public voters; // Tracks registered voters
        uint public voterCount; // Number of registered voters

        enum State { Created, Voting, Ended }
        State public currentState; // Current state of the election

        // Events for logging
        event CandidateAdded(uint indexed candidateId, string name);
        event Voted(uint indexed candidateId, address indexed voter);
        event ElectionEnded(uint winnerId);

        // Modifier to restrict functions to the owner
        modifier onlyOwner() {
            require(msg.sender == owner, "Only the owner can call this function.");
            _;
        }

        // Modifier to allow voting only during the voting period
        modifier onlyDuringVoting() {
            require(currentState == State.Voting, "Voting is not open yet or has ended.");
            _;
        }

        // Modifier to ensure a voter hasn't already voted
        modifier notVoted(address _voter) {
            require(!voters[_voter], "This voter has already voted.");
            _;
        }

        // Constructor: Sets the owner and initial state
        constructor() {
            owner = msg.sender;
            currentState = State.Created;
            candidatesCount = 0;
            voterCount = 0;
        }

        // Function to add a candidate (owner only)
        function addCandidate(string memory _name) public onlyOwner {
            candidatesCount++;
            candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
            emit CandidateAdded(candidatesCount, _name);
        }

        // Function to register a voter (owner only, can be modified for decentralized registration)
        function registerVoter(address _voter) public onlyOwner {
            require(!voters[_voter], "Voter already registered.");
            voters[_voter] = true;
            voterCount++;
            emit Voted(_voter, _voter); // Event for voter registration, can be changed
        }

        // Function to start the voting period (owner only)
        function startVoting() public onlyOwner {
            require(currentState == State.Created, "Election has already started or ended.");
            require(candidatesCount > 0, "No candidates have been added.");
            require(voterCount > 0, "No voters have been registered.");
            currentState = State.Voting;
        }

        // Function to cast a vote
        function vote(uint _candidateId) public onlyDuringVoting notVoted(msg.sender) {
            require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate ID.");
            
            candidates[_candidateId].voteCount++;
            voters[msg.sender] = true; // Mark sender as voted
            voterCount++; // Increment actual voter count if not already registered
            
            emit Voted(_candidateId, msg.sender);
        }

        // Function to end the voting period and declare the winner (owner only)
        function endVoting() public onlyOwner {
            require(currentState == State.Voting, "Voting is not currently active.");
            currentState = State.Ended;

            uint maxVotes = 0;
            uint winnerId = 0;

            for (uint i = 1; i <= candidatesCount; i++) {
                if (candidates[i].voteCount > maxVotes) {
                    maxVotes = candidates[i].voteCount;
                    winnerId = i;
                }
            }
            emit ElectionEnded(winnerId);
        }

        // Function to get the winner (view function, doesn't cost gas)
        function getWinner() public view returns (uint, string memory, uint) {
            require(currentState == State.Ended, "Election has not ended yet.");
            uint maxVotes = 0;
            uint winnerId = 0;

            for (uint i = 1; i <= candidatesCount; i++) {
                if (candidates[i].voteCount > maxVotes) {
                    maxVotes = candidates[i].voteCount;
                    winnerId = i;
                }
            }
            return (candidates[winnerId].id, candidates[winnerId].name, candidates[winnerId].voteCount);
        }
    }
    ```

*   **Explanation of the Solidity Code:**
    *   **`struct Candidate`:** Defines the properties of a candidate (ID, name, vote count).
    *   **`mapping(uint => Candidate) public candidates`:** A data structure that maps a candidate ID to its `Candidate` struct.
    *   **`mapping(address => bool) public voters`:** Tracks which addresses have already voted.
    *   **`enum State`:** Defines the different phases of the election (Created, Voting, Ended).
    *   **`modifier`:** Used to enforce conditions before executing a function (e.g., `onlyOwner`, `onlyDuringVoting`, `notVoted`).
    *   **`constructor()`:** Executed only once when the contract is deployed, setting the owner.
    *   **`addCandidate()`:** Allows the owner to add candidates.
    *   **`registerVoter()`:** Allows the owner to register eligible voters. In a real-world scenario, this might be more decentralized.
    *   **`startVoting()`:** Transitions the election state to `Voting`.
    *   **`vote(uint _candidateId)`:** Allows a registered voter to cast their vote for a specific candidate.
    *   **`endVoting()`:** Transitions the election state to `Ended` and determines the winner by iterating through candidate vote counts.
    *   **`getWinner()`:** A `view` function that returns the winner's details without modifying the blockchain state (free to call).

---

### **4. Learning Outcomes Covered**

*   **CO1: Explain the fundamental concepts of blockchain technology.**
    *   This module builds upon fundamental blockchain concepts by demonstrating their application within the Ethereum ecosystem. The immutability, transparency, and distributed nature of the blockchain are crucial for the voting system's integrity.
*   **CO2: Summarize the classification of consensus algorithms.**
    *   While not explicitly detailed in the voting case study, Ethereum itself uses consensus mechanisms (like PoW initially, now PoS) to validate transactions and maintain the integrity of the blockchain. Understanding these is crucial for the network on which the smart contract operates.
*   **CO3: Explain the concepts of first decentralized cryptocurrency bitcoin.**
    *   Ethereum's evolution from Bitcoin is a key concept. Bitcoin's limitations in programmability led to the development of platforms like Ethereum, which enable smart contracts for broader applications beyond just digital currency.
*   **CO4: Explain the use of smart contracts and its use cases.**
    *   The entire case study is dedicated to explaining the use of smart contracts and demonstrating a practical use case (voting). The Solidity code example showcases how smart contracts automate processes, enforce rules, and provide transparency in a voting scenario.
*   **CO5: Develop simple applications using Solidity language on Ethereum platform.**
    *   The provided Solidity code serves as a blueprint for a simple voting application. Understanding this code is the first step towards developing more complex DApps on Ethereum.

---

### **5. Important Points to Remember**

*   **Immutability:** Once a smart contract is deployed on Ethereum, its code cannot be changed. This is a critical security feature but also means any bugs in the code are permanent.
*   **Gas:** Every operation on the Ethereum network, including executing smart contract functions, requires "gas," which is paid for in Ether (ETH). This prevents denial-of-service attacks.
*   **EVM:** The Ethereum Virtual Machine is the runtime environment where smart contracts are executed. It's what makes Ethereum a programmable blockchain.
*   **Solidity:** The primary programming language for writing smart contracts on Ethereum. (Refer to Modi, 2018 for deeper dives).
*   **Decentralization:** The goal is to remove single points of failure and control, making the voting system more robust and trustworthy.

---

### **6. Practice Questions and Exercises**

**Short Answer Questions:**

1.  What is the primary difference between Bitcoin and Ethereum in terms of functionality?
    *   **Answer:** Bitcoin is primarily a decentralized digital currency, while Ethereum is a platform for decentralized applications (DApps) with smart contract capabilities.
2.  Define "smart contract" in your own words, referencing its role on the Ethereum network.
    *   **Answer:** A smart contract is a self-executing program stored on the blockchain that automatically enforces the terms of an agreement when predefined conditions are met. On Ethereum, it runs on the EVM.
3.  What is "gas" in the context of Ethereum, and why is it important for smart contracts?
    *   **Answer:** Gas is the fee paid in ETH for executing transactions and smart contract operations on the Ethereum network. It's crucial for incentivizing network validators and preventing network abuse.
4.  List three potential advantages of using a smart contract for a voting system.
    *   **Answer:** Increased transparency, enhanced security, automated vote counting, immutability of votes, reduced fraud.

**Coding Exercise (Conceptual):**

Imagine you want to extend the voting smart contract.

1.  How would you modify the `Voting` contract to allow voters to change their vote *before* the voting period ends? (Consider the implications for immutability and the `voters` mapping).
    *   **Hint:** You would need to track who voted for whom and provide a mechanism to "unvote" and then re-vote. This might involve changing the `voters` mapping to store more information or introducing a new mapping.
2.  How would you add a feature to disqualify a candidate based on certain criteria before the election starts?
    *   **Hint:** You would need a way to mark a candidate as disqualified, perhaps with a boolean flag within the `Candidate` struct, and then add checks in the `vote` function to prevent voting for disqualified candidates.

**Conceptual Answer for Exercise 1 (Changing Votes):**

To allow voters to change their vote, you would need to:

1.  **Modify the `voters` mapping:** Instead of `mapping(address => bool)`, you could use `mapping(address => uint) public hasVotedFor;` where the `uint` stores the `candidateId` the voter voted for. A value of `0` could indicate they haven't voted.
2.  **Update the `vote` function:**
    *   Before casting a new vote, check if `hasVotedFor[msg.sender]` is not `0`.
    *   If they have voted, decrement the `voteCount` of their previously voted candidate.
    *   Then, update `hasVotedFor[msg.sender]` to the new `candidateId` and increment the `voteCount` of the new candidate.
3.  **Modify `registerVoter` or add a `hasVoted` check:** Ensure a voter can only vote once (or re-vote).

**Conceptual Answer for Exercise 2 (Disqualifying Candidates):**

To disqualify a candidate, you would:

1.  **Add a `bool isDisqualified` field to the `Candidate` struct.**
2.  **Add a `disqualifyCandidate(uint _candidateId)` function** callable only by the `owner`. This function would set `candidates[_candidateId].isDisqualified = true;`.
3.  **Modify the `vote` function:** Add a check `require(!candidates[_candidateId].isDisqualified, "This candidate is disqualified.");` before incrementing the vote count.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **7. References and Further Reading**

*   **Mastering Blockchain:** Bashir, I. (2020). *Mastering Blockchain: A deep dive into distributed ledgers, consensus protocols, smart contracts, DApps, cryptocurrencies, Ethereum, and more.* Packt Publishing. (Third edition) - **Core reference for fundamental blockchain and Ethereum concepts.**
*   **Solidity Programming Essentials:** Modi, R. (2018). *Solidity Programming Essentials: A beginner's guide to build smart contracts for Ethereum and blockchain.* Packt Publishing. (First edition) - **Essential for understanding Solidity and smart contract development.**
*   **Blockchain Technology:** Saurabh, K., & Saxena, A. (2020). *Blockchain Technology: Concepts and Applications.* Wiley Publications. (First Edition) - **Provides broader context on blockchain applications.**
*   **Mastering Blockchain:** Lantz, L., & Cawrey, D. (2020). *Mastering Blockchain: Unlocking the Power of Cryptocurrencies, Smart Contracts, and Decentralized Applications.* O'Reilly Media. (First edition) - **Offers insights into smart contracts and DApps.**
*   **Mastering Ethereum:** Antonopoulos, A. M., & Wood, G. (2018). *Mastering Ethereum: Building Smart Contracts and DApps.* O'Reilly Media. (First edition) - **A definitive guide to Ethereum development and smart contracts.**