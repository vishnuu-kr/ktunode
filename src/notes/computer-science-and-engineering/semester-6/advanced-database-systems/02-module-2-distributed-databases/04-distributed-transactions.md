---
title: "Distributed Transactions"
subject: "ADVANCED DATABASE SYSTEMS"
module: "Module 2: Distributed Databases  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bbd7"
status: "completed"
scrapedAt: "2026-05-20T16:50:15.453Z"
---
# ADVANCED DATABASE SYSTEMS - Module 2: Distributed Databases - Distributed Transactions

## 1. Introduction

This module covers distributed transactions, a critical aspect of distributed database systems. We will explore the challenges of maintaining data consistency across multiple sites and learn about various techniques used to ensure atomicity, consistency, isolation, and durability (ACID properties) in a distributed environment.

## 2. Learning Outcomes

Upon completion of this module, you should be able to:

*   **Define** distributed transactions and their importance.
*   **Explain** the challenges associated with distributed transaction management.
*   **Describe** the 2PC (Two-Phase Commit) protocol, including its variations and limitations.
*   **Explain** the 3PC (Three-Phase Commit) protocol, including its advantages and disadvantages compared to 2PC.
*   **Discuss** alternative concurrency control techniques for distributed transactions, such as optimistic concurrency control and distributed timestamp ordering.
*   **Understand** distributed deadlock detection and resolution techniques.
*   **Explain** approaches for handling failures in distributed transactions.
*   **Compare** different distributed transaction protocols and their suitability for various scenarios.

## 3. Key Concepts and Definitions

*   **Distributed Transaction:** A transaction that accesses and potentially modifies data located at multiple database sites (nodes) within a distributed database system.

*   **Transaction Manager (TM):** The component responsible for coordinating and managing transactions, including enforcing ACID properties.

*   **Resource Manager (RM):** The component responsible for managing the data and resources at each individual database site. Examples include database management systems (DBMS).

*   **Global Transaction:** A transaction initiated by a user or application that involves multiple sites.

*   **Local Transaction:** A transaction that executes entirely at a single site.

*   **Commit:** The process of making all changes performed by a transaction permanent.

*   **Rollback:** The process of undoing all changes performed by a transaction, restoring the database to its previous consistent state.

*   **Coordinator:** In protocols like 2PC, the site initiating the transaction and coordinating its execution across all participating sites.

*   **Participant:** A database site that is involved in a distributed transaction.

*   **ACID Properties:** Atomicity, Consistency, Isolation, and Durability.  These properties are crucial for ensuring the reliability of database transactions.

    *   **Atomicity:**  A transaction is treated as a single, indivisible unit of work. Either all changes within the transaction are committed, or none are.
    *   **Consistency:** A transaction must maintain the database in a consistent state. It ensures that the database transitions from one valid state to another.
    *   **Isolation:** Concurrent transactions should not interfere with each other. The effects of one transaction should be invisible to other transactions until it commits.
    *   **Durability:** Once a transaction commits, its changes are permanent and will survive even system failures.

## 4. Challenges in Distributed Transaction Management

*   **Heterogeneity:** Distributed database systems often involve different types of database systems and hardware platforms, making transaction management more complex.

*   **Network Latency:** Communication delays between sites can significantly impact transaction performance.

*   **Site Autonomy:** Each site may have its own local transaction management policies and may not be willing to fully cede control to a central coordinator.

*   **Data Consistency:** Ensuring that data remains consistent across all sites is a major challenge, especially in the presence of concurrent transactions and failures.

*   **Concurrency Control:** Managing concurrent access to data from multiple sites to maintain data integrity.

*   **Failure Handling:** Dealing with site failures and network partitions gracefully without compromising data consistency.

*   **Distributed Deadlock:** Detecting and resolving deadlocks that can occur across multiple sites.

## 5. Two-Phase Commit (2PC) Protocol

The 2PC protocol is a widely used protocol for ensuring atomicity in distributed transactions. It guarantees that either all participants commit the transaction or all participants rollback the transaction.

**Phases:**

1.  **Phase 1: Prepare Phase (Voting Phase)**
    *   The **coordinator** sends a `PREPARE` message to all **participants**.
    *   Each **participant** executes the transaction locally and prepares to commit, but does not actually commit the changes yet. It writes an "undo" log (to rollback if necessary) and a "redo" log (to commit if necessary).
    *   If the **participant** is able to prepare, it sends a `YES` vote (or `PREPARED`) back to the **coordinator**.
    *   If the **participant** cannot prepare (e.g., due to a local error, resource unavailability), it sends a `NO` vote (or `ABORT`) back to the **coordinator**.  It then immediately rolls back its portion of the transaction.
    *   If the **coordinator** doesn't receive a response from a **participant** within a timeout period, it assumes a `NO` vote.

2.  **Phase 2: Commit Phase (Completion Phase)**
    *   Based on the votes received:
        *   **If all participants voted YES (PREPARED):** The **coordinator** sends a `COMMIT` message to all **participants**.
            *   Each **participant** commits the transaction locally.
            *   Each **participant** sends an `ACK` (acknowledgment) message to the **coordinator**.
        *   **If any participant voted NO (ABORT) or the coordinator timed out waiting for a response:** The **coordinator** sends an `ABORT` message to all **participants**.
            *   Each **participant** rolls back the transaction locally.
            *   Each **participant** sends an `ACK` message to the **coordinator**.

**Advantages of 2PC:**

*   Ensures atomicity in distributed transactions.
*   Relatively simple to implement.

**Disadvantages of 2PC:**

*   **Blocking:**  If the coordinator fails after sending `PREPARE` but before sending `COMMIT` or `ABORT`, all participants remain blocked, holding resources and unable to proceed. This is known as the *blocking problem*.  Participants are unsure whether to commit or abort and cannot proceed until the coordinator recovers.
*   **Single Point of Failure:**  The coordinator is a single point of failure.  If the coordinator fails, the entire system may be blocked.
*   **Communication Overhead:** Requires significant communication overhead, especially with a large number of participants.
*   **Does not handle network partitions well:** Like the failure of the coordinator, if a participant is unreachable from the coordinator after the prepare phase, the transaction can become blocked.

**Example:**

Consider a transaction that transfers money from an account at Site A to an account at Site B.

1.  **Phase 1:**
    *   The coordinator (e.g., a banking application server) sends a `PREPARE` message to Site A and Site B.
    *   Site A debits the account locally and logs the action, then sends a `YES` vote to the coordinator.
    *   Site B prepares to credit the account and logs the action, then sends a `YES` vote to the coordinator.

2.  **Phase 2:**
    *   Since both sites voted `YES`, the coordinator sends a `COMMIT` message to Site A and Site B.
    *   Site A commits the debit and sends an `ACK` to the coordinator.
    *   Site B commits the credit and sends an `ACK` to the coordinator.

If either Site A or Site B had voted `NO`, the coordinator would have sent an `ABORT` message, and both sites would have rolled back their local changes.

## 6. Three-Phase Commit (3PC) Protocol

3PC is an attempt to address the blocking problem of 2PC. It adds an extra phase to provide a mechanism for participants to make progress even if the coordinator fails.

**Phases:**

1.  **Phase 1: Prepare Phase (Voting Phase) - Same as 2PC**
    *   The **coordinator** sends a `PREPARE` message to all **participants**.
    *   Each **participant** executes the transaction locally and prepares to commit.
    *   If the **participant** is able to prepare, it sends a `YES` vote (or `PREPARED`) back to the **coordinator**.
    *   If the **participant** cannot prepare, it sends a `NO` vote (or `ABORT`) back to the **coordinator**.

2.  **Phase 2: Pre-Commit Phase**
    *   If the **coordinator** received `YES` votes from all **participants**, it sends a `PRE-COMMIT` message to all **participants**.
    *   Upon receiving `PRE-COMMIT`, the **participants** transition to a `PRE-COMMITTED` state and acknowledge to the Coordinator. This is a critical state which helps prevent blocking in the event of coordinator failure. It indicates the participants are ready to commit upon the next directive.

3.  **Phase 3: Commit Phase (Completion Phase)**
    *   The **coordinator** sends a `COMMIT` message to all **participants**.
    *   Each **participant** commits the transaction locally.
    *   Each **participant** sends an `ACK` (acknowledgment) message to the **coordinator**.

    *   If at any point, the coordinator decides or receives an `ABORT`, it sends an `ABORT` message. Participants rollback.

**Improvements over 2PC:**

*   **Non-Blocking (Ideally):**  3PC aims to be non-blocking in the face of a single site failure. If a coordinator fails *after* all participants have entered the `PRE-COMMITTED` state, a new coordinator can be elected, and the transaction can proceed to commit. Participants can also timeout and abort if a PRE-COMMIT message is not received after a PREPARE message, under the assumption the coordinator has failed.

**Disadvantages of 3PC:**

*   **More Complex:** More complex to implement than 2PC.
*   **Still Vulnerable to Blocking (with Network Partitions):** While it aims to be non-blocking, 3PC can still block in the presence of network partitions. If a participant is disconnected from the rest of the network, it may not be able to receive the `PRE-COMMIT` or `COMMIT` message, leading to blocking.
*   **Cannot Guarantee Atomicity:** In some specific failure scenarios (involving network partitions), 3PC cannot guarantee atomicity. It's theoretically possible for some sites to commit while others abort.

**In Summary:** 3PC provides better fault tolerance than 2PC, but at the cost of increased complexity and a slight compromise on the absolute guarantee of atomicity. It is a good trade-off for applications where high availability is crucial.

## 7. Alternative Concurrency Control Techniques

Besides 2PC and 3PC, other concurrency control techniques are used in distributed databases:

*   **Distributed Locking:** Using locks across multiple sites to synchronize access to shared data.  Global lock managers can be used to manage locks across the entire distributed system.  Challenges include dealing with lock timeouts and deadlocks.
*   **Optimistic Concurrency Control (OCC):** Assumes that conflicts are rare. Transactions proceed without acquiring locks.  Before committing, the transaction validates that no conflicts have occurred. If conflicts are detected, the transaction is rolled back. OCC is suitable for environments with low contention.
*   **Distributed Timestamp Ordering (DTO):**  Assigns a unique timestamp to each transaction. Transactions are processed in timestamp order.  If a transaction attempts to access data with a timestamp later than its own, it is rolled back. DTO can provide high throughput but can also lead to cascading rollbacks.
*   **Multiversion Concurrency Control (MVCC):**  Maintains multiple versions of data items. Each transaction reads the version of the data that was committed at the time the transaction started.  This avoids read-write conflicts and improves concurrency.

## 8. Distributed Deadlock Detection and Resolution

*   **Deadlock:** A situation where two or more transactions are blocked indefinitely, waiting for each other to release resources.

*   **Local Deadlock:** A deadlock that occurs within a single site. Can be detected using traditional deadlock detection techniques.

*   **Global Deadlock:** A deadlock that spans multiple sites.  More challenging to detect because the information about resource allocation is distributed.

**Techniques for Distributed Deadlock Detection:**

*   **Centralized Approach:** A central site maintains a global wait-for graph.  Each site periodically sends its local wait-for information to the central site. The central site detects global deadlocks. Simple but can be a bottleneck and single point of failure.

*   **Hierarchical Approach:** Organizes sites into a hierarchy. Local deadlocks are detected within each site.  Information about potential global deadlocks is propagated up the hierarchy.

*   **Distributed Approach:** Each site maintains a partial wait-for graph.  Sites exchange information with each other to detect global deadlocks.  More complex but can be more scalable.  Examples include path pushing and edge chasing.

**Deadlock Resolution:**

*   **Transaction Rollback:**  One or more transactions involved in the deadlock are rolled back to break the cycle.
*   **Victim Selection:**  Choosing which transaction to rollback. Criteria include transaction age, the amount of resources held, and the estimated cost of rollback.

## 9. Handling Failures in Distributed Transactions

*   **Site Failure:** A site crashes and becomes unavailable.
*   **Network Partition:**  The network is divided into segments, and sites in different segments cannot communicate with each other.
*   **Communication Failure:** A message is lost or corrupted.

**Strategies for Handling Failures:**

*   **Logging:**  Maintaining a log of transaction activity allows the system to recover from failures.
*   **Redundancy:**  Replicating data across multiple sites ensures that data is available even if one site fails.
*   **Timeouts:**  Using timeouts to detect unresponsive sites and take appropriate action.
*   **Resilience:**  Designing the system to be tolerant of failures. For example, using fault-tolerant algorithms and protocols.
*   **Coordinator Recovery:** Implement mechanisms for recovering a coordinator node. This might involve electing a new coordinator or restoring the coordinator's state from a log.

## 10. Comparing Distributed Transaction Protocols

| Protocol | Advantages                                                                 | Disadvantages                                                                                                                                                               | Suitable Scenarios                                                                                                                                                             |
| -------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2PC      | Simple to implement, guarantees atomicity.                               | Blocking, single point of failure, communication overhead.                                                                                                                    | Situations where atomicity is paramount and blocking is tolerable.  Transactions involving a relatively small number of sites.                                                  |
| 3PC      | Attempts to address the blocking problem of 2PC, improved fault tolerance. | More complex than 2PC, still vulnerable to blocking in certain scenarios, cannot guarantee atomicity in all failure scenarios.                                           | Applications where high availability is important and a slight compromise on atomicity is acceptable. Transactions involving multiple sites where coordinator failure is a concern. |
| Optimistic Concurrency Control | High throughput in low-contention environments.                               | Requires rollback if conflicts are detected, may not be suitable for high-contention environments.                                                                 | Environments where conflicts are rare and transactions are short.                                                                                                            |
| Distributed Timestamp Ordering | High throughput, avoids locking.                                          | Can lead to cascading rollbacks, complex to implement.                                                                                                                      | Environments where transactions are independent and conflicts are relatively low.                                                                                             |

## 11. Practice Questions and Exercises

1.  **Explain the difference between a local transaction and a global transaction.**

    *   **Answer:** A local transaction executes entirely at a single database site, while a global transaction involves multiple sites.

2.  **What are the ACID properties and why are they important in distributed databases?**

    *   **Answer:** Atomicity, Consistency, Isolation, and Durability. They are crucial for ensuring the reliability and integrity of data in a distributed database system.

3.  **Describe the two phases of the Two-Phase Commit (2PC) protocol.**

    *   **Answer:** Phase 1 (Prepare Phase): The coordinator sends a PREPARE message to all participants. Each participant prepares to commit and sends a YES or NO vote back to the coordinator. Phase 2 (Commit Phase): Based on the votes, the coordinator sends a COMMIT or ABORT message to all participants.

4.  **What is the blocking problem in 2PC and how does 3PC attempt to address it?**

    *   **Answer:** The blocking problem occurs when the coordinator fails after the prepare phase but before sending the commit or abort message. Participants are blocked waiting for the coordinator to recover. 3PC introduces a pre-commit phase to allow participants to make progress even if the coordinator fails.  However, 3PC does not eliminate all blocking scenarios.

5.  **What are some techniques for detecting and resolving distributed deadlocks?**

    *   **Answer:** Centralized, hierarchical, and distributed approaches for deadlock detection. Deadlock resolution typically involves transaction rollback.

6.  **Consider a distributed transaction transferring funds between accounts located at two different sites.  Outline the steps involved in executing this transaction using the 2PC protocol. Include possible failure scenarios and how the protocol would handle them to ensure atomicity.**

    *   **Answer:**
        1.  **Coordinator initiates the transaction.**
        2.  **Prepare Phase:**
            *   Coordinator sends `PREPARE` message to both sites (A and B).
            *   Site A debits the account locally, logs the change, and sends `YES` (PREPARED) to Coordinator.
            *   Site B prepares to credit the account, logs the change, and sends `YES` (PREPARED) to Coordinator.
            *   **Failure Scenario:** If Site A fails *before* sending `YES`, the Coordinator will timeout and abort the transaction. Site B will receive an `ABORT` message and rollback any local changes.
            *   **Failure Scenario:** If Site A sends `YES`, but the message is lost, Site A will eventually timeout waiting for a response from the Coordinator.  Ideally, it would retry sending its `YES` vote.  Without this, atomicity is violated (Site A remains in a prepared state while Coordinator may abort).  Careful implementation avoids this, but failure handling is complex.

        3.  **Commit Phase (Assuming both voted YES):**
            *   Coordinator sends `COMMIT` to both sites.
            *   Site A commits the debit locally and sends `ACK` to Coordinator.
            *   Site B commits the credit locally and sends `ACK` to Coordinator.
            *   **Failure Scenario:** If Site A receives `COMMIT` but fails *before* committing, on recovery it will consult its log and complete the commit.  This is why logging is critical for Durability.
            *   **Failure Scenario:** If Coordinator fails *after* sending `COMMIT` but *before* Site B receives it, Site B may eventually timeout. However, Site B should not unilaterally rollback because Site A *has* committed. This is a critical blocking scenario in 2PC. Atomicity is preserved if the Coordinator recovers and completes the commit.

        4.  **Atomicity:** In all scenarios, the 2PC protocol (when implemented correctly) guarantees that either both sites commit the transaction, or both sites rollback.

## 12. Important Points to Remember

*   Distributed transactions are complex and require careful management to ensure data consistency.
*   2PC and 3PC are widely used protocols for ensuring atomicity, but each has its own limitations.
*   Concurrency control and deadlock management are essential for managing concurrent access to data.
*   Failure handling is crucial for ensuring the reliability of distributed database systems.
*   The choice of transaction protocol depends on the specific requirements of the application and the characteristics of the distributed environment.
