---
title: "Crash fault-tolerance (CFT) algorithms – Paxos"
subject: "BLOCK CHAIN"
module: "Module 2: Consensus Algorithms"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff6e7"
status: "completed"
scrapedAt: "2026-05-23T18:13:04.039Z"
---
## Module 2: Consensus Algorithms - Crash Fault-Tolerance (CFT) Algorithms: Paxos

This module delves into consensus algorithms, specifically focusing on Crash Fault-Tolerance (CFT) algorithms. We will explore Paxos, a foundational algorithm in achieving consensus in distributed systems.

**Relevant Course Outcomes:**

*   **CO1:** Explain the fundamental concepts of blockchain technology. (Knowledge Level: K2) - *Understanding consensus is crucial for comprehending how blockchains operate.*
*   **CO2:** Summarize the classification of consensus algorithms. (Knowledge Level: K2) - *Paxos is a key example within the broader classification of consensus algorithms.*

---

### 1. Introduction to Consensus Algorithms

In distributed systems, achieving consensus is the process by which all correct participants agree on a single value, even in the presence of failures. This is a fundamental problem in computer science, especially for systems like blockchains where multiple independent nodes need to agree on the state of the ledger.

**Key Concepts:**

*   **Distributed System:** A system whose components are located on different networked computers, which communicate and coordinate their actions by passing messages.
*   **Consensus:** The process of agreement among participants in a distributed system on a specific value or decision.
*   **Fault Tolerance:** The ability of a system to continue operating correctly even if some of its components fail.
*   **Crash Fault:** A type of fault where a participant (node) stops responding and simply crashes without sending any malicious or incorrect messages.

**Why is Consensus Necessary in Blockchains?**

Blockchains, by their nature, are distributed systems. To maintain an immutable and agreed-upon ledger, all participating nodes must agree on the order of transactions and the validity of new blocks. Consensus algorithms provide the mechanism for this agreement, preventing double-spending and ensuring data integrity.

*(Referenced from: Bashir, I. (2020). Mastering Blockchain (3rd ed.). Chapter 5: Consensus Protocols. This chapter provides a comprehensive overview of consensus mechanisms and their importance.)*

---

### 2. Crash Fault-Tolerance (CFT) Algorithms

CFT algorithms are designed to tolerate a certain number of nodes crashing (stopping unexpectedly) but assume that no nodes are malicious or act with Byzantine behavior (intentionally trying to disrupt the system).

**Key Concepts:**

*   **Crash Fault Tolerance (CFT):** The ability of a distributed system to reach consensus despite some nodes failing by crashing (stopping their execution) but not by behaving maliciously.
*   **Byzantine Fault Tolerance (BFT):** The ability of a distributed system to reach consensus even if some nodes are malicious and exhibit arbitrary behavior.

**Characteristics of CFT Algorithms:**

*   Simpler to implement and less computationally intensive than BFT algorithms.
*   Suitable for scenarios where the risk of malicious actors is low.
*   Assumes that non-faulty nodes always behave correctly.

---

### 3. Paxos: A Foundational Consensus Algorithm

Paxos is a family of protocols for solving consensus in a network of unreliable or fallible processors. It was introduced by Leslie Lamport in 1990. Paxos is a cornerstone for understanding many other consensus algorithms, including those used in blockchain technologies.

**Core Problem Paxos Solves:**

How can a set of processes agree on a single value, even if some processes fail by crashing?

**Key Participants/Roles in Paxos:**

Paxos typically involves three main roles, though these can be combined in different implementations:

1.  **Proposers:** Propose values that they want to be agreed upon.
2.  **Acceptors:** Vote on proposed values. A majority of acceptors must agree for a value to be considered chosen.
3.  **Learners:** Learn about the value that has been chosen.

**The Basic Paxos Algorithm (Two-Phase Commit Variant):**

The most common explanation of Paxos involves a two-phase process to reach consensus on a single value. This is often described with Proposers and Acceptors.

**Phase 1: Prepare**

*   **Proposer:** The proposer selects a unique *proposal number* (which must be strictly increasing). It then sends a `Prepare` request with this proposal number to a majority of acceptors.
*   **Acceptor:** Upon receiving a `Prepare` request with proposal number `n`:
    *   If the acceptor has not promised not to accept any proposals numbered less than `n`, it promises to never accept any proposal numbered less than `n`. It then responds to the proposer with a `Promise` message. This `Promise` message includes the highest-numbered proposal it has *already* accepted (if any).
    *   If the acceptor has already promised not to accept proposals numbered less than `n` (because it received a `Prepare` request for a number greater than or equal to `n`), it ignores the `Prepare` request.

**Phase 2: Accept**

*   **Proposer:** If the proposer receives `Promise` responses from a majority of acceptors:
    *   It chooses a value to propose. If any of the `Promise` responses contained a previously accepted value, the proposer *must* choose the value associated with the highest proposal number among those responses. Otherwise, it can choose its own proposed value.
    *   It sends an `Accept` request with the chosen value and its proposal number (`n`) to all acceptors.
*   **Acceptor:** Upon receiving an `Accept` request with proposal number `n` and value `v`:
    *   If the acceptor has not already promised not to accept proposals numbered less than `n` (i.e., it hasn't responded to a `Prepare` request with a number greater than `n`), it accepts the proposal `(n, v)`. It records this accepted proposal and sends an `Accepted` message to the proposer.
    *   If the acceptor has already promised not to accept proposals numbered less than `n`, it ignores the `Accept` request.

**Learning the Chosen Value:**

Once an acceptor has accepted a proposal `(n, v)`, it can then communicate this fact to the Learners. A value is considered "chosen" when a majority of acceptors have accepted the same proposal `(n, v)`. Learners can discover the chosen value by receiving `Accepted` messages from a majority of acceptors or through other mechanisms.

**Example Scenario:**

Let's imagine 3 acceptors (A1, A2, A3) and 2 proposers (P1, P2).

1.  **P1** wants to propose value `X`.
2.  **P1** sends `Prepare(proposal_number=1)` to A1, A2, A3.
3.  **A1, A2, A3** respond with `Promise(proposal_number=1)` because they haven't promised anything else.
4.  **P1** receives promises from A1, A2, A3 (a majority).
5.  **P1** chooses value `X` and sends `Accept(proposal_number=1, value=X)` to A1, A2, A3.
6.  **A1, A2, A3** accept `(1, X)` and send `Accepted(proposal_number=1, value=X)` back to P1.
7.  **P1** knows `X` is chosen.

Now, suppose **P2** wants to propose value `Y` and starts its process simultaneously.

1.  **P2** wants to propose value `Y`.
2.  **P2** selects a higher proposal number, say `proposal_number=2`.
3.  **P2** sends `Prepare(proposal_number=2)` to A1, A2, A3.
4.  **A1, A2, A3** have already accepted `(1, X)` and promised not to accept proposals less than 2. So, they respond with `Promise(proposal_number=2, accepted_proposal_number=1, accepted_value=X)`.
5.  **P2** receives promises from A1, A2, A3. Since they reported accepting `(1, X)`, **P2** *must* now propose value `X` (not `Y`).
6.  **P2** sends `Accept(proposal_number=2, value=X)` to A1, A2, A3.
7.  **A1, A2, A3** accept `(2, X)` (as their `promised_number` was 2) and send `Accepted(proposal_number=2, value=X)` back to P2.
8.  **P2** knows `X` is chosen.

**Important Considerations and Variations of Paxos:**

*   **Liveness:** Basic Paxos does not guarantee liveness (that a value will eventually be chosen). If proposers crash or are delayed, consensus might not be reached.
*   **Efficiency:** Paxos can be inefficient in practice due to the number of messages exchanged, especially when there are many proposers or contention.
*   **Multi-Paxos:** An optimization where a single proposer is elected to remain active, avoiding the overhead of repeated Phase 1 for subsequent values. This is more akin to how blockchains achieve consensus.
*   **Safety:** Paxos guarantees safety – that is, if a value is chosen, then it is chosen correctly and consistently.
*   **Proposer Failure:** If a proposer crashes after sending `Prepare` but before sending `Accept`, another proposer can take over if it picks a higher proposal number.

*(Referenced from: Bashir, I. (2020). Mastering Blockchain (3rd ed.). Chapter 5: Consensus Protocols. This chapter discusses Paxos and its variants in detail, including its strengths and weaknesses.)*
*(Also relevant: Saurabh, K., & Saxena, A. (2020). Blockchain Technology: Concepts and Applications. Wiley Publications. Concepts related to fault tolerance and consensus are generally covered in foundational chapters.)*

---

### 4. Paxos in the Context of Blockchain

While direct implementations of the basic Paxos algorithm are rare in public blockchains due to its efficiency and liveness issues, its principles are foundational. Many other consensus algorithms, especially those in private or permissioned blockchains, build upon or are inspired by Paxos.

**Key Takeaways for Blockchain:**

*   **Underlying Principles:** The idea of a proposer, acceptors, and achieving agreement through majority consensus is a core concept.
*   **CFT vs. BFT:** Paxos is a CFT algorithm. Public blockchains often require BFT due to the untrusted nature of participants. However, understanding CFT is a stepping stone.
*   **Efficiency Challenges:** Basic Paxos's message complexity and potential liveness issues make it less suitable for highly dynamic and large-scale public blockchain networks.

---

### 5. Practice Questions and Answers

**Question 1:**
What is the primary goal of a consensus algorithm in a distributed system like a blockchain?

**Answer:**
The primary goal is to ensure that all participating nodes agree on the same state of the ledger, specifically on the order and validity of transactions and blocks, even in the presence of failures.

**Question 2:**
Explain the difference between Crash Fault Tolerance (CFT) and Byzantine Fault Tolerance (BFT).

**Answer:**
CFT algorithms tolerate nodes that crash (stop working) but assume they do not act maliciously. BFT algorithms can tolerate nodes that behave maliciously and send conflicting or incorrect messages.

**Question 3:**
Describe the two main phases of the basic Paxos algorithm.

**Answer:**
The two main phases are:
1.  **Prepare Phase:** A proposer sends a `Prepare` request with a proposal number to acceptors. Acceptors promise not to accept proposals with lower numbers and return information about any previously accepted proposals.
2.  **Accept Phase:** If the proposer receives promises from a majority, it sends an `Accept` request with a chosen value (based on previous accepted values or its own) to the acceptors. Acceptors accept the proposal if they haven't promised to reject higher-numbered proposals.

**Question 4:**
Why is basic Paxos not commonly used directly in public blockchains?

**Answer:**
Basic Paxos has issues with liveness (it might not always reach consensus) and can be inefficient in terms of message complexity and performance, which are critical for public, large-scale blockchain networks. Public blockchains often require BFT algorithms.

---

### 6. Important Points to Remember

*   **Consensus is Key:** Agreement among distributed nodes is fundamental for blockchain integrity.
*   **Paxos is Foundational:** It's a classic CFT algorithm that introduced core concepts for achieving agreement.
*   **Phases of Paxos:** `Prepare` and `Accept` are the critical steps.
*   **Majority Rule:** Consensus is typically achieved when a majority of participants agree.
*   **CFT vs. BFT:** Understand the limitations of CFT (like Paxos) in adversarial environments.
*   **Liveness vs. Safety:** Paxos guarantees safety (correctness) but not always liveness (progress).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. References

*   **Bashir, I. (2020). Mastering Blockchain (3rd ed.).** (Packt Publishing) - **Primary Reference for Consensus Protocols.**
*   **Saurabh, K., & Saxena, A. (2020). Blockchain Technology: Concepts and Applications.** (Wiley Publications) - *Provides foundational understanding of distributed systems and consensus.*
*   Other reference books offer broader blockchain contexts that can complement this topic.

---
This concludes Module 2, Topic: Crash Fault-Tolerance (CFT) Algorithms – Paxos. Understanding Paxos provides a crucial foundation for appreciating the complexity and evolution of consensus mechanisms in distributed systems and blockchains.