---
title: "Commit Protocols"
subject: "ADVANCED DATABASE SYSTEMS"
module: "Module 2: Distributed Databases  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bbd8"
status: "completed"
scrapedAt: "2026-05-20T16:50:16.215Z"
---
# ADVANCED DATABASE SYSTEMS: Distributed Databases - Commit Protocols

## Module 2: Distributed Databases

### Topic: Commit Protocols

**Description:** This topic explores commit protocols used in distributed databases to ensure data consistency and atomicity across multiple sites during transactions.

**Learning Outcomes:**

Upon completion of this topic, you will be able to:

*   **Explain the need for commit protocols in distributed databases.**
*   **Describe the Two-Phase Commit (2PC) protocol, including its states, messages, and recovery procedures.**
*   **Identify the advantages and disadvantages of 2PC.**
*   **Describe the Three-Phase Commit (3PC) protocol, including its states, messages, and recovery procedures.**
*   **Identify the advantages and disadvantages of 3PC.**
*   **Compare and contrast 2PC and 3PC protocols.**
*   **Discuss alternative commit protocols and their trade-offs.**
*   **Apply your knowledge to select an appropriate commit protocol for a given distributed database scenario.**

---

## 1. The Need for Commit Protocols in Distributed Databases

*   **Distributed Transactions:** Transactions involving multiple database sites. These transactions require coordination to ensure data consistency.
*   **Atomicity Requirement:**  A fundamental ACID property stating that a transaction must be treated as a single, indivisible unit of work.  Either all changes are committed (made permanent), or none are.  In a distributed environment, this means all participating sites must either commit or abort.
*   **Consistency Requirement:** Ensuring that a transaction transforms the database from one consistent state to another. Commit protocols maintain consistency by coordinating the commit/abort decision across all sites.
*   **The Problem:** Without a commit protocol, one site might commit while another aborts, leading to data inconsistencies and violating atomicity.
*   **Commit Protocols as Coordinators:** Commit protocols act as coordinators to ensure that all participating sites agree on the outcome of a distributed transaction (either commit or abort).

**Example:**  Consider an online bookstore where a customer orders a book. The transaction involves:

*   **Site 1 (Inventory):** Decreasing the book quantity in the inventory database.
*   **Site 2 (Payment):** Processing the customer's payment.
*   **Site 3 (Shipping):** Creating a shipping order.

If the payment fails (Site 2 aborts), the inventory should not be decreased (Site 1 must abort), and the shipping order should not be created (Site 3 must abort) to maintain consistency. A commit protocol ensures all sites agree on the transaction's outcome.

**Key Concept:** *Data inconsistency in distributed databases can arise if transactions are not atomic. Commit protocols ensure all participating sites either commit or abort, preserving atomicity and consistency.*

## 2. Two-Phase Commit (2PC) Protocol

*   **Overview:** A widely used distributed transaction commit protocol.  It consists of two phases: *Prepare Phase* and *Commit Phase*.
*   **Participants:**
    *   **Coordinator:**  One site acts as the coordinator, initiating and controlling the commit process.  Often the site where the transaction originated.
    *   **Participants (Cohorts):** The other sites involved in the transaction.
*   **States of a Participant:**
    *   **ACTIVE:** Participant is executing its part of the transaction.
    *   **READY:** Participant has finished its part and is ready to commit or abort based on the coordinator's decision.  The participant has written its updates to stable storage.
    *   **COMMIT:** Participant has committed the transaction.
    *   **ABORT:** Participant has aborted the transaction.

### 2.1 Phase 1: Prepare Phase

1.  **Coordinator asks all participants to prepare:** The coordinator sends a `PREPARE` message to all participants.
2.  **Participants prepare or abort:**
    *   Upon receiving the `PREPARE` message, each participant:
        *   Forces all log records pertaining to the transaction to stable storage (disk). This is crucial for recovery.
        *   Executes the transaction locally.
        *   If successful, it sends a `READY` message to the coordinator, indicating its willingness to commit.
        *   If unsuccessful (e.g., resource contention, deadlock), it sends an `ABORT` message to the coordinator.
3.  **Timeout:** If a participant doesn't respond within a timeout period, the coordinator assumes an `ABORT`.

### 2.2 Phase 2: Commit Phase

**Scenario 1: All participants are ready**

1.  **Coordinator decides to commit:**  If the coordinator receives `READY` messages from all participants, it decides to commit the transaction.
2.  **Coordinator sends COMMIT message:** The coordinator sends a `COMMIT` message to all participants.
3.  **Participants commit:** Upon receiving the `COMMIT` message, each participant commits the transaction locally and acknowledges the commit.
4.  **Coordinator ends:** The coordinator records the commit decision and ends the transaction.

**Scenario 2: At least one participant aborts**

1.  **Coordinator decides to abort:** If the coordinator receives an `ABORT` message from any participant or times out waiting for a response, it decides to abort the transaction.
2.  **Coordinator sends ABORT message:** The coordinator sends an `ABORT` message to all participants.
3.  **Participants abort:** Upon receiving the `ABORT` message, each participant aborts the transaction locally.
4.  **Coordinator ends:** The coordinator records the abort decision and ends the transaction.

### 2.3 Recovery Procedures

*   **Coordinator Failure:**  If the coordinator fails during the protocol, the participants must determine the transaction's status. This is done by examining the log records on the stable storage of the coordinator.
    *   **If the coordinator's log shows a COMMIT record:**  The transaction must be committed.
    *   **If the coordinator's log shows an ABORT record:** The transaction must be aborted.
    *   **If the coordinator's log shows no COMMIT or ABORT record:**  The participants must determine the transaction's status based on their own log records. If any participant voted to abort, the transaction must be aborted. If all voted ready but the coordinator crashed before issuing a decision, all sites must block and wait for the coordinator to recover.  This is a key blocking characteristic of 2PC.

*   **Participant Failure:** If a participant fails, it checks its log upon recovery.
    *   **If the log shows a COMMIT record:** The participant redoes (applies) the transaction's updates.
    *   **If the log shows an ABORT record:** The participant undoes (rolls back) the transaction's updates.
    *   **If the log shows a READY record but no COMMIT or ABORT:** The participant remains blocked, waiting for the coordinator to recover and provide the decision.  This is a key blocking characteristic of 2PC.
    *   **If the log shows no READY, COMMIT, or ABORT record:** The participant can safely abort the transaction.

**Important Points:**

*   Forcing log records to stable storage is critical for recovery.
*   2PC is a *blocking* protocol.  If the coordinator fails after some participants have voted READY, those participants are blocked until the coordinator recovers. This can significantly impact system availability.

**Example:** Imagine a banking transaction transferring funds between two accounts located at different bank branches (sites). The 2PC ensures that either the funds are deducted from the source account AND credited to the destination account, or neither operation occurs.

## 3. Advantages and Disadvantages of 2PC

**Advantages:**

*   **Simplicity:** Relatively easy to implement and understand.
*   **Guaranteed Atomicity and Consistency:** Ensures all participating sites agree on the transaction's outcome.
*   **Widely Used:**  A standard protocol supported by many database systems.

**Disadvantages:**

*   **Blocking:** A major drawback. If the coordinator fails, participants may remain blocked indefinitely, waiting for the coordinator to recover.  This impacts availability.
*   **Single Point of Failure:** The coordinator is a single point of failure. Coordinator failure can halt transaction processing.
*   **Vulnerability to Site Failures:** Participants can also cause blocking if they fail in the READY state.
*   **Complexity in Failure Handling:**  Recovery procedures can be complex and time-consuming.

**Key Concept:** *The blocking nature of 2PC is its most significant disadvantage, especially in environments requiring high availability.*

## 4. Three-Phase Commit (3PC) Protocol

*   **Overview:** An attempt to address the blocking problem of 2PC. It introduces an intermediate state to reduce the window of vulnerability.
*   **Phases:**
    *   **Phase 1: Prepare to Commit:** Similar to the Prepare Phase in 2PC.
    *   **Phase 2: Pre-Commit:**  A new phase added to avoid indefinite blocking. The coordinator requests participants to enter a "pre-commit" state.
    *   **Phase 3: Commit or Abort:** The final decision is made and propagated.

### 4.1 Phase 1: Prepare to Commit

1.  **Coordinator sends `PREPARE` message:**  The coordinator sends a `PREPARE` message to all participants.
2.  **Participants prepare:**  Each participant:
    *   Writes undo/redo information to stable storage.
    *   If successful, sends a `READY` message to the coordinator.
    *   If unsuccessful, sends an `ABORT` message to the coordinator.
3.  **Timeout:** If the coordinator doesn't receive a response within a timeout period, it aborts the transaction.

### 4.2 Phase 2: Pre-Commit

1.  **Coordinator sends `PRE-COMMIT` message:** If the coordinator receives `READY` messages from all participants, it sends a `PRE-COMMIT` message to all participants.
2.  **Participants enter the pre-commit state:**  Upon receiving the `PRE-COMMIT` message, each participant:
    *   Acknowledges the `PRE-COMMIT` message.
    *   Enters the `PRE-COMMITTED` state.
    *   Writes information about entering this state to stable storage.

### 4.3 Phase 3: Commit or Abort

**Scenario 1: Coordinator decides to commit**

1.  **Coordinator sends `COMMIT` message:** The coordinator sends a `COMMIT` message to all participants.
2.  **Participants commit:** Upon receiving the `COMMIT` message, participants commit the transaction locally.

**Scenario 2: Coordinator decides to abort**

1.  **Coordinator sends `ABORT` message:** The coordinator sends an `ABORT` message to all participants.
2.  **Participants abort:** Upon receiving the `ABORT` message, participants abort the transaction locally.

### 4.4 Recovery Procedures

3PC aims to reduce blocking but does *not* eliminate it entirely. The recovery is more complex than 2PC.

*   **Coordinator Failure:** More complex than 2PC. Election mechanisms and consensus algorithms may be needed among participants to determine the outcome of the transaction.
*   **Participant Failure:** Upon recovery, the participant examines its log.
    *   **If the log shows COMMIT:** Redo the transaction.
    *   **If the log shows ABORT:** Undo the transaction.
    *   **If the log shows PRE-COMMIT:**  The participant can *safely abort* if it can determine that the coordinator failed *before* sending the COMMIT. This requires additional communication and election mechanisms among the participants.  This is where 3PC attempts to reduce blocking.
    *   **If the log shows READY:** In this state, the participant must wait for a decision from the coordinator or another participant that has information on the status (after an election). This is where blocking can still occur, though the window for it is smaller compared to 2PC.

**Key Idea:** *The PRE-COMMIT state reduces the window during which participants are blocked in case of coordinator failure.  However, 3PC still requires assumptions about network reliability and introduces significant complexity.*

## 5. Advantages and Disadvantages of 3PC

**Advantages:**

*   **Reduced Blocking (Theoretically):** Aims to reduce the blocking problem compared to 2PC, particularly in scenarios where network partitions are less likely.
*   **Potentially Higher Availability:**  By reducing the blocking window, the system *might* experience higher availability.

**Disadvantages:**

*   **Increased Complexity:** More complex to implement and understand than 2PC.
*   **Higher Overhead:**  Requires more messages and states, leading to increased overhead.
*   **Still Prone to Blocking:**  While it reduces blocking, it *does not eliminate it completely*.  3PC relies on assumptions about network reliability; if a network partition occurs, blocking can still result.  A badly timed network partition can lead to incorrect commit outcomes (violation of atomicity), so 3PC requires accurate timeout values and the ability to detect network partitions.
*   **Rarely Implemented:** Due to its complexity and assumptions, 3PC is rarely implemented in real-world distributed database systems.

**Key Concept:** *While 3PC aims to improve availability by reducing blocking, its increased complexity and reliance on assumptions about network reliability often outweigh its benefits.*

## 6. Comparing and Contrasting 2PC and 3PC

| Feature          | 2PC                               | 3PC                                     |
| ---------------- | ---------------------------------- | ----------------------------------------- |
| Complexity       | Simpler                             | More complex                              |
| Blocking         | More prone to blocking               | Attempts to reduce blocking               |
| Overhead         | Lower                               | Higher                                    |
| Implementation    | Widely implemented                  | Rarely implemented                       |
| Fault Tolerance    | Vulnerable to coordinator failure | Attempts to improve fault tolerance         |
| Network Assumptions | None                                | Requires assumptions about network reliability |

**Key Differences:**

*   **Intermediate State:** 3PC introduces the `PRE-COMMIT` state, which is absent in 2PC.
*   **Blocking Behavior:** 3PC aims to reduce blocking, but it doesn't eliminate it.
*   **Complexity Trade-off:** 3PC trades increased complexity for a potential reduction in blocking, but the benefits are often questionable.

## 7. Alternative Commit Protocols and their Trade-offs

*   **Paxos and Raft (Consensus Algorithms):**  These are not strictly commit protocols but can be used as the foundation for building highly available and fault-tolerant distributed systems, including databases. They achieve consensus among a set of nodes, ensuring that all nodes agree on a single value (e.g., the decision to commit or abort).
    *   **Trade-offs:** Complex to implement, but offer high availability and fault tolerance.
*   **Optimistic Commit Protocols:** These protocols assume that conflicts are rare and proceed with committing the transaction optimistically.  If a conflict is detected later, compensating transactions are used to undo the effects of the committed transaction.
    *   **Trade-offs:** Higher performance in low-conflict scenarios, but requires complex conflict detection and resolution mechanisms.
*   **Gossip Protocols:**  Nodes randomly exchange information with each other. This can be used to disseminate commit/abort decisions in a distributed manner.
    *   **Trade-offs:**  Scalable and fault-tolerant, but may not provide strict atomicity guarantees.  Offers eventual consistency.
*   **Chained Commit Protocol:** This involves a linear chain of participants, where each participant commits only after receiving confirmation from the previous participant in the chain.
    *   **Trade-offs:** Simple to implement, but can be slow and vulnerable to failures in the chain.
*   **Atomic Commit using Message Queues:**  Using transactional message queues to coordinate the commit process. The messages containing updates are reliably delivered to the participants, ensuring atomicity.
    *   **Trade-offs:** Reliant on the reliability and availability of the message queue system.

**Key Concept:** *Alternative commit protocols offer different trade-offs between consistency, availability, complexity, and performance. The choice of protocol depends on the specific requirements of the distributed database system.*

## 8. Selecting an Appropriate Commit Protocol

Consider the following factors when choosing a commit protocol:

*   **Availability Requirements:** How critical is it that the system remains available during failures? If high availability is paramount, consider consensus-based protocols or optimistic approaches.
*   **Consistency Requirements:** How strict are the consistency requirements? If strict atomicity is essential, 2PC or 3PC (with careful considerations of its limitations) might be considered. If eventual consistency is acceptable, gossip protocols or optimistic approaches might be suitable.
*   **Network Reliability:** How reliable is the network? If network partitions are common, protocols like Paxos/Raft might be preferable.
*   **Performance Requirements:** What are the performance requirements? Some protocols introduce more overhead than others.
*   **Complexity:** How complex is the protocol to implement and maintain?
*   **Scale:**  How large is the distributed database system?  Some protocols scale better than others.

**Example Scenarios:**

*   **High-Availability E-commerce System:** Prioritize availability. Consider consensus-based protocols or optimistic approaches with compensating transactions.
*   **Financial Transaction Processing System:** Prioritize strict atomicity and consistency.  If coordinator downtime is an issue, 3PC (with careful consideration of its limitations) *might* be considered.  Consensus protocols such as Paxos/Raft can also be used as a foundation for a highly available atomic commit protocol.
*   **Large-Scale Content Distribution Network:** Prioritize scalability and fault tolerance. Consider gossip protocols with eventual consistency.

**Important Point:** There is no "one-size-fits-all" commit protocol. The best choice depends on the specific characteristics of the distributed database system and its requirements.

---

## Practice Questions and Exercises

**1. Explain the difference between the READY state in 2PC and the PRE-COMMIT state in 3PC. How does the PRE-COMMIT state attempt to improve availability?**

*   **Answer:** In 2PC, the READY state indicates that the participant has written all necessary log records to stable storage and is prepared to either commit or abort. In 3PC, the PRE-COMMIT state is an intermediate state between READY and COMMIT.  The participant enters PRE-COMMIT after receiving a PRE-COMMIT message from the coordinator.  The PRE-COMMIT state attempts to improve availability by reducing the window during which participants are blocked waiting for the coordinator's decision. If the coordinator fails after sending PRE-COMMIT, the participants can (under certain failure scenarios) safely abort without waiting indefinitely, whereas in 2PC, they would remain blocked until the coordinator recovers. Note that 3PC's "safe abort" assumes accurate fault detection and a certain level of network reliability.

**2. What is the major disadvantage of the 2PC protocol, and how does this disadvantage affect system availability?**

*   **Answer:** The major disadvantage of 2PC is its blocking nature. If the coordinator fails after some participants have entered the READY state, those participants are blocked until the coordinator recovers. This significantly reduces system availability because those resources remain locked, preventing other transactions from accessing them.

**3. Describe a scenario where 3PC might still lead to blocking, even with the PRE-COMMIT state.**

*   **Answer:** 3PC can still lead to blocking in scenarios involving network partitions. For example, if the coordinator sends PRE-COMMIT to some participants but then fails before sending it to others, and a network partition isolates the pre-committed participants from the coordinator and the other participants, the pre-committed participants may not be able to determine whether to commit or abort, and therefore will remain blocked. Also, inaccurate fault detection (e.g., inaccurate timeout values) can cause participants to abort prematurely or to remain blocked unnecessarily.

**4. Compare and contrast the advantages and disadvantages of 2PC and 3PC. Which protocol would you choose for a system requiring high availability, and why?**

*   **Answer:** See the comparison table above. For a system requiring *very* high availability, neither 2PC nor 3PC would be the best choice due to their blocking nature. Consensus algorithms like Paxos or Raft, or optimistic approaches with compensating transactions, are generally preferred. While 3PC *attempts* to improve availability over 2PC, its increased complexity and assumptions often outweigh its benefits.

**5. Consider a distributed database system where transactions often involve updates to data at multiple sites. You have the following requirements:**

*   **Data consistency is critical.**
*   **High availability is important, but occasional short periods of downtime are acceptable.**
*   **The network is generally reliable, but temporary partitions can occur.**

**Which commit protocol would you recommend and why?**

*   **Answer:** In this scenario, Paxos or Raft-based commit protocols are likely the best choice. Although temporary partitions are possible, data consistency is critical, which rules out protocols based on eventual consistency. Paxos or Raft are designed for high availability, data consistency, and handling of network partitions through consensus among the replicas. While their implementation is complex, the benefits outweigh the complexity in this scenario. If implementing Paxos/Raft is not feasible, 2PC *might* be considered, but only if the system can tolerate the potential for blocking during coordinator failures.

---

**Important Points to Remember:**

*   Commit protocols ensure atomicity and consistency in distributed transactions.
*   2PC is a widely used but blocking protocol.
*   3PC attempts to reduce blocking but increases complexity. It is rarely implemented in practice.
*   Alternative commit protocols offer different trade-offs.
*   The choice of commit protocol depends on the specific requirements of the distributed database system.
*   Paxos and Raft (consensus algorithms) are increasingly being used as the foundation for fault-tolerant distributed commit.
*   Understand the trade-offs between complexity, overhead, latency, consistency, and availability when designing your distributed commit protocols.
