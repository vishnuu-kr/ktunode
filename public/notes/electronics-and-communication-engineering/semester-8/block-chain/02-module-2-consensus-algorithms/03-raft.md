---
title: "Raft."
subject: "BLOCK CHAIN"
module: "Module 2: Consensus Algorithms"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff6e8"
status: "completed"
scrapedAt: "2026-05-23T18:13:04.765Z"
---
# Module 2: Consensus Algorithms - Raft

## 1. Introduction to Consensus Algorithms (CO2, K2)

Consensus algorithms are the backbone of distributed systems, including blockchain. They enable a group of distributed nodes to agree on a single value or state, even in the presence of failures or malicious actors. In blockchain, consensus ensures that all participants have the same immutable ledger of transactions.

**Key Concepts:**

*   **Distributed System:** A system whose components are located on different networked computers, which communicate and coordinate their actions by passing messages.
*   **Fault Tolerance:** The ability of a system to continue operating correctly in the event of failures of some of its components.
*   **Agreement:** All correct (non-faulty) nodes must agree on the same value.
*   **Validity:** If all correct nodes propose the same value, then all correct nodes must decide on that value.
*   **Termination:** All correct nodes must eventually decide on a value.

**Classification of Consensus Algorithms (CO2, K2):**

Consensus algorithms can be broadly categorized based on their approach to achieving agreement:

*   **Byzantine Fault Tolerance (BFT) Algorithms:** Designed to handle malicious nodes (Byzantine faults) that can behave arbitrarily. Examples include PBFT (Practical Byzantine Fault Tolerance).
*   **Crash Fault Tolerance (CFT) Algorithms:** Designed to handle nodes that simply crash or fail to send messages (crash faults). Raft falls into this category.

**Reference:** Bashir, I. (2020). *Mastering Blockchain* (3rd ed.). (Chapter 4: Consensus Mechanisms). This chapter provides a foundational understanding of consensus mechanisms, their importance, and various classifications, setting the stage for specific algorithms like Raft.

## 2. Understanding Raft (Module 2 Topic)

Raft is a **Crash Fault Tolerant (CFT)** consensus algorithm designed to be **understandable** and **easy to implement**. It was developed by Diego Ongaro and John Ousterhout. Unlike Byzantine fault-tolerant algorithms, Raft assumes that nodes will either operate correctly or crash (fail-stop), but will not exhibit malicious or arbitrary behavior.

**Goal of Raft:** To manage a replicated log in a distributed system in a way that is fault-tolerant.

**Key Principles of Raft:**

Raft achieves consensus by partitioning the problem into three sub-problems:

1.  **Leader Election:** The system has a single *leader* responsible for managing the replicated log. If the current leader fails, a new leader is elected.
2.  **Log Replication:** The leader is responsible for replicating log entries to other nodes (*followers*) and ensuring that followers have the same log as the leader.
3.  **Safety:** Raft ensures that once an entry is committed in the log, it will be present in the logs of all subsequent leaders and will be applied to the state machine of all servers.

**Raft Roles:**

At any given time, each server in a Raft cluster is in one of three states:

*   **Leader:** The single server elected to manage replicated log. Handles all client requests and replicates log entries.
*   **Follower:** Passive servers that respond to requests from leaders and candidates. They time out and become candidates if they don't hear from a leader.
*   **Candidate:** Servers that are attempting to become the new leader. They send `RequestVote` RPCs to other servers.

**Important Points to Remember:**

*   Raft uses **timers** to manage the election process and ensure progress.
*   The **leader** is central to Raft; if the leader fails, a new election occurs.
*   Raft ensures that **only committed log entries** are applied to the state machine, guaranteeing consistency.

## 3. Raft - Leader Election (Module 2 Topic)

Leader election is a crucial part of Raft. It ensures that there is always a leader to manage the system.

**Process:**

1.  **Initial State:** All servers start as Followers.
2.  **Timeout:** If a Follower does not receive a heartbeat (a special `AppendEntries` RPC) from the leader within a certain `election timeout` period, it assumes the leader has failed.
3.  **Becoming a Candidate:** The Follower transitions to the Candidate state.
4.  **Voting:**
    *   The Candidate increments its current term.
    *   The Candidate votes for itself.
    *   The Candidate sends `RequestVote` RPCs to all other servers.
5.  **Receiving `RequestVote` RPCs:**
    *   **Granting a Vote:** A server grants its vote to a candidate if:
        *   It has not already voted in the current term.
        *   The candidate's log is at least as up-to-date as its own. (This is a key safety property to prevent stale leaders).
    *   **Denying a Vote:** A server denies its vote if it has already voted in the current term or if the candidate's log is not up-to-date.
6.  **Winning the Election:**
    *   If a Candidate receives votes from a **majority** of servers (including its own vote), it becomes the Leader.
    *   The new Leader immediately sends `heartbeat` messages (`AppendEntries` RPCs with no entries) to all other servers to establish its authority and prevent new elections.
7.  **Losing the Election:**
    *   If a Candidate receives an `AppendEntries` RPC from another server that is claiming to be the leader (with an equal or higher term), the Candidate recognizes that server as the leader and reverts to the Follower state.
    *   If the election timeout elapses again without receiving a majority of votes, the Candidate starts a new election by incrementing its term and becoming a Candidate again.

**Election Timeout:**

*   Raft uses randomized election timeouts. This means each follower selects a random timeout duration within a specific range.
*   This randomization helps to avoid situations where multiple followers time out and become candidates simultaneously, leading to split votes and prolonged elections.

**Example:**

Imagine a 5-node cluster. For a candidate to win, it needs at least 3 votes (majority of 5). If server A fails, and followers B, C, D, and E don't hear from A, they might all time out. If B becomes a candidate, it votes for itself and sends `RequestVote` RPCs to C, D, and E. If C and D vote for B, B becomes the leader (3 votes). E might still be a candidate, but if it receives the `AppendEntries` from B, it will transition to a follower.

**Important Points to Remember:**

*   **Majority Vote:** A candidate needs a majority of votes to become leader.
*   **Terms:** Raft uses "terms" as a logical clock. Each term begins with an election.
*   **Randomized Election Timeout:** Crucial for preventing split votes and ensuring faster leader election.
*   **Log Up-to-dateness Check:** A critical safety feature to ensure the elected leader has the most complete log.

## 4. Raft - Log Replication (Module 2 Topic)

Once a leader is elected, its primary responsibility is to manage the replicated log. This involves accepting client commands, appending them to its log, and replicating them to followers.

**Process:**

1.  **Client Request:** A client sends a command to the leader.
2.  **Append Entry:** The leader appends the command as a new entry to its own log. Each log entry contains the command, the term in which the entry was received by the leader, and an index.
3.  **`AppendEntries` RPC:** The leader sends `AppendEntries` RPCs to all followers to replicate the log entries.
    *   Each `AppendEntries` RPC contains a small number of log entries.
    *   It also includes the index and term of the log entry *immediately preceding* the new entries. This is crucial for consistency checks.
4.  **Follower Response:**
    *   **Successful Replication:** If a follower receives an `AppendEntries` RPC and it contains valid entries (i.e., the follower's log has the preceding entry at the specified index and term), the follower appends the new entries to its log and sends a success response back to the leader.
    *   **Failed Replication (Consistency Check):** If the follower's log does not contain the entry at the specified index and term (i.e., a mismatch), it rejects the `AppendEntries` RPC.
        *   The leader, upon receiving a rejection, decrements the index it's trying to send and retries with the previous entry. This process continues until the follower has a consistent log, after which it can accept the new entries.
5.  **Commitment:**
    *   Once a log entry has been replicated to a **majority** of servers (including the leader itself), the leader marks that entry as **committed**.
    *   The leader then applies the committed entry to its state machine (e.g., executing the command).
    *   The leader also informs the followers about the committed index in subsequent `AppendEntries` RPCs (heartbeats).
6.  **Applying to State Machine:** Followers, upon learning that an entry has been committed (from the leader's `AppendEntries` RPC), apply that entry to their own state machines.

**Key Aspects of Log Replication:**

*   **Idempotency:** Raft's `AppendEntries` RPC is idempotent. If a follower receives the same RPC multiple times, it will append the entries only once.
*   **Consistency Check:** The leader relies on the follower's log being consistent up to the `prevLogIndex` and `prevLogTerm` to ensure correctness.
*   **Commitment Rule:** An entry is committed once it is replicated on a majority of servers. This is the point at which it's considered safe to apply to the state machine.

**Example:**

Suppose a leader has log entries: `[E1, E2, E3]`.
It sends an `AppendEntries` RPC to follower X containing `[E3]`.
If X's log is `[E1, E2]`, it checks that `E2` matches the preceding entry's index and term. If it does, X appends `E3`.
If X's log was `[E1, E4]`, it would reject the RPC because `E1` doesn't match. The leader would then decrement and send an RPC with `[E2, E3]`.

**Important Points to Remember:**

*   **`AppendEntries` RPC:** The core mechanism for log replication and leader heartbeats.
*   **Commitment on Majority:** An entry is committed when replicated on a majority of servers.
*   **State Machine Application:** Committed entries are applied to the state machine by both the leader and followers.
*   **Replication Log Consistency:** Raft guarantees that if an entry is committed, it will be present in the logs of all subsequent leaders.

## 5. Raft Safety Properties (Module 2 Topic)

Raft's design ensures several critical safety properties that guarantee the correctness of the distributed system.

**Key Safety Properties:**

1.  **Election Safety:** At most one leader can be elected in a given term.
    *   **How Raft Achieves This:** A candidate must receive votes from a majority of servers. Since only one server can have a majority, at most one candidate can win. Also, a candidate must have a log at least as up-to-date as any previous leader to get votes, preventing stale leaders.

2.  **Leader Completeness:** If a log entry is committed in a given term, then that entry will be present in the logs of the leaders for all subsequent terms.
    *   **How Raft Achieves This:** A candidate must have a log that is at least as up-to-date as the logs of the majority of servers to be elected. This means any committed entry from a previous term must also be present in the candidate's log. When a new leader is elected, it will have all previously committed entries.

3.  **State Machine Safety:** If a server has applied a log entry at a given index to its state machine, then no other server will ever apply a different log entry for the same index.
    *   **How Raft Achieves This:** This is directly enforced by the commitment rule and the log consistency checks. An entry is only committed when it's replicated to a majority. A follower only appends entries if they are consistent with its existing log. The "log up-to-dateness" requirement during elections ensures that a leader is elected only if it has all committed entries. Therefore, once an entry is committed and applied, it will be part of the logs of all future leaders and eventually applied by all servers.

**Reference:** Bashir, I. (2020). *Mastering Blockchain* (3rd ed.). (Chapter 4: Consensus Mechanisms). While Raft is a CFT algorithm, Bashir's book discusses general consensus properties and how algorithms ensure these properties, which is applicable to understanding Raft's safety guarantees.

**Important Points to Remember:**

*   Raft prioritizes understandability while maintaining strong safety guarantees.
*   The election process and commitment rules are designed to prevent inconsistencies.

## 6. Raft vs. Paxos (Module 2 Topic)

Raft and Paxos are both consensus algorithms, but Raft was designed specifically to be more understandable and easier to implement than Paxos.

| Feature           | Raft                                                                | Paxos                                                                            |
| :---------------- | :------------------------------------------------------------------ | :------------------------------------------------------------------------------- |
| **Understandability** | High. Designed for ease of understanding and implementation.      | Low. Known for its complexity and difficulty in implementation.                  |
| **Consensus Goal** | Replicated Log Management (Fault Tolerant)                          | Replicated State Machine (can be complex to adapt for logs)                      |
| **Leader Election** | Explicitly defined with terms and timeouts.                         | Implicit; can be complex to handle leader failures and prevent duplicate leaders. |
| **Roles**         | Leader, Follower, Candidate                                         | Proposer, Acceptor, Learner (more abstract roles)                                |
| **Message Flow**  | Clearly defined RPCs (`RequestVote`, `AppendEntries`).              | Multiple phases and message types, making it harder to follow.                   |
| **Fault Tolerance** | Crash Fault Tolerance (CFT)                                         | Can be extended for CFT, but original Paxos is also CFT.                         |
| **Implementation**| Generally simpler due to its clear structure.                       | Significantly more challenging.                                                  |

**Why Raft is Preferred for Many Applications (including some blockchain contexts):**

*   **Ease of Development:** Developers can understand and implement Raft more quickly and with fewer errors.
*   **Maintainability:** Codebases using Raft are generally easier to maintain and debug.
*   **Clearer Logic:** The separation into distinct phases (election, replication) makes the algorithm's behavior more predictable.

**Reference:** Bashir, I. (2020). *Mastering Blockchain* (3rd ed.). (Chapter 4: Consensus Mechanisms). While not directly comparing Raft and Paxos in detail, Bashir emphasizes the importance of consensus algorithms and their variations, implicitly highlighting the need for practical and understandable solutions.

## 7. Raft in Blockchain Context (CO1, CO2, K2)

While Raft is a CFT algorithm and many public blockchains are designed for Byzantine fault tolerance, Raft finds applications in specific blockchain scenarios:

*   **Private and Permissioned Blockchains:** In private or permissioned blockchain networks where the participating nodes are known and trusted to a certain degree (e.g., a consortium of companies), the assumption of crash faults rather than malicious Byzantine behavior might be acceptable. Raft's simplicity makes it a good choice for these controlled environments.
*   **Internal Coordination within Nodes:** Even in public blockchains, components within a single node or between closely related services might use Raft for internal coordination to ensure consistency and fault tolerance.
*   **Sidechains and Layer 2 Solutions:** Raft can be employed in managing the state or coordination of sidechains or layer-2 scaling solutions that have different security assumptions.

**Why not typically used in Public Blockchains (like Bitcoin/Ethereum)?**

*   **Byzantine Faults:** Public blockchains are designed to operate in adversarial environments where nodes can be malicious. Raft's inability to handle Byzantine faults makes it unsuitable for these networks. Bitcoin uses Nakamoto Consensus (Proof-of-Work), and Ethereum uses Proof-of-Stake, both of which are BFT algorithms.
*   **Trust Assumptions:** Raft requires a degree of trust that nodes will not act maliciously. Public blockchains aim to minimize such trust requirements.

**Reference:**

*   Bashir, I. (2020). *Mastering Blockchain* (3rd ed.). (Chapter 4: Consensus Mechanisms). This chapter covers various consensus mechanisms, allowing for comparison and understanding of why different algorithms are chosen for different blockchain types.
*   Saurabh, K., & Saxena, A. (2020). *Blockchain Technology: Concepts and Applications*. (Chapters on Consensus Mechanisms). This book would likely discuss the trade-offs between different consensus algorithms, including CFT vs. BFT and their applicability.
*   Subramanian, C., George, A. A., et al. (2020). *Blockchain Technology*. (Relevant chapters on consensus).

**Connection to Course Outcomes:**

*   **CO1 (Fundamental Concepts):** Understanding Raft helps grasp how distributed systems achieve agreement, a core blockchain concept.
*   **CO2 (Classification of Consensus):** Raft exemplifies a Crash Fault Tolerant (CFT) algorithm, contrasting with Byzantine Fault Tolerant (BFT) algorithms discussed elsewhere.
*   **CO3 (Bitcoin):** Raft's CFT nature highlights why it's different from Bitcoin's PoW (BFT).
*   **CO4, CO5 (Smart Contracts/Ethereum):** While Raft isn't directly used for smart contract execution in Ethereum, understanding different consensus mechanisms provides a broader context for blockchain technology.

## 8. Practice Questions and Answers

**Question 1:** What are the three states a server can be in during the Raft consensus algorithm?
    *   **Answer:** Leader, Follower, Candidate.

**Question 2:** What is the primary responsibility of the Raft leader?
    *   **Answer:** To manage the replicated log, accept client requests, and replicate log entries to followers.

**Question 3:** What mechanism does Raft use to detect leader failure?
    *   **Answer:** Election timeouts. If a follower doesn't receive a heartbeat from the leader within the election timeout, it assumes the leader has failed.

**Question 4:** How does Raft ensure that a newly elected leader has the most up-to-date log?
    *   **Answer:** A candidate must receive votes from a majority of servers, and to receive votes, its log must be at least as up-to-date as the logs of the servers it is requesting votes from.

**Question 5:** What is the condition for a log entry to be considered "committed" in Raft?
    *   **Answer:** An entry is committed once it has been successfully replicated to a majority of servers in the cluster.

**Question 6:** Is Raft a Byzantine Fault Tolerant (BFT) algorithm? Explain why or why not.
    *   **Answer:** No, Raft is a Crash Fault Tolerant (CFT) algorithm. It assumes nodes will either operate correctly or crash (fail-stop), but not exhibit malicious or arbitrary behavior (Byzantine faults).

**Question 7:** In a 7-node Raft cluster, how many nodes are required for a leader to be elected?
    *   **Answer:** A majority, which is 4 nodes ( (7/2) + 1 = 3.5 + 1, rounded up).

**Question 8:** What is the main advantage of Raft over Paxos?
    *   **Answer:** Understandability and ease of implementation.

## 9. Important Points to Remember

*   **Raft = Understandable Consensus:** Its primary design goal is to be easily understood and implemented.
*   **Crash Fault Tolerance (CFT):** Raft assumes nodes fail by crashing, not by acting maliciously.
*   **Leader-Centric:** The cluster revolves around a single, elected leader.
*   **Three Key Sub-Problems:** Leader Election, Log Replication, Safety.
*   **Terms:** Raft uses terms as a logical clock to detect outdated leaders and manage elections.
*   **Majority Rules:** Both for winning elections and for committing log entries.
*   **Randomized Election Timeout:** Essential for preventing split votes during elections.
*   **Log Consistency is Key:** `AppendEntries` RPCs include preceding log entry information to ensure followers' logs are consistent before appending new entries.
*   **Commitment = Safety:** A log entry is safe to apply once it's committed (replicated to a majority).
*   **Not for Public Blockchains:** Due to its CFT nature, Raft is not typically used in adversarial public blockchain environments like Bitcoin or Ethereum, which require Byzantine Fault Tolerance (BFT).

This concludes the notes for Module 2: Raft. Remember to cross-reference these notes with your textbooks for a deeper understanding and for specific examples of Raft's application in different distributed systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
