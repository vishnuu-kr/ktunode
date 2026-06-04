---
title: "Paxos and Raft Algorithms"
subject: "BLOCKCHAIN AND CRYPTOCURRENCIES"
module: "Module 2: Cryptography in Blockchain and Consensus Mechanisms"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c2ab"
status: "completed"
scrapedAt: "2026-05-20T17:01:48.759Z"
---
# BLOCKCHAIN AND CRYPTOCURRENCIES

## Module 2: Cryptography in Blockchain and Consensus Mechanisms

### Topic: Paxos and Raft Algorithms

---

### 1. Introduction to Distributed Systems and Consensus

Before diving into Paxos and Raft, it's crucial to understand why consensus mechanisms are vital in distributed systems, especially in the context of blockchain.

*   **Distributed System:** A collection of independent computers that appear to its users as a single coherent system.
    *   **Key Characteristics:** Concurrency, lack of global clock, independent failures of components.
*   **Fault Tolerance:** The ability of a system to continue operating correctly even if some of its components fail.
*   **Consensus Problem:** In a distributed system, all processes (nodes) must agree on a single value, even in the presence of failures (e.g., network partitions, node crashes).
    *   **Why it's Hard:** No central authority, asynchronous communication, potential for message loss or delay.
*   **Relevance to Blockchain:** Blockchains are inherently distributed systems. All nodes need to agree on the order of transactions and the state of the ledger. Consensus mechanisms ensure this agreement and prevent malicious actors from altering the blockchain.

---

### 2. Paxos Algorithm

Paxos is a family of protocols for solving consensus in a network of unreliable or fallible processors. It's known for its theoretical rigor but also for its complexity.

**Key Concepts & Definitions:**

*   **Proposer:** A node that wants to propose a value to be agreed upon.
*   **Acceptor:** A node that decides whether to accept a proposed value. A majority of acceptors must agree for a value to be chosen.
*   **Learner:** A node that learns the chosen value.
*   **Roles:** A single node can play multiple roles (proposer, acceptor, learner).
*   **Phases of Paxos (Simplified):**

    *   **Phase 1: Prepare Phase**
        *   **Proposer:** A proposer selects a proposal number (`n`) that is higher than any proposal number it has used before. It then sends a "Prepare" request to a majority of acceptors.
        *   **Acceptor:** When an acceptor receives a "Prepare" request with proposal number `n`:
            *   If `n` is higher than any proposal number it has seen before, it promises not to accept any further proposals numbered less than `n`. It then responds to the proposer with its highest accepted proposal number (if any) and its corresponding value.
            *   Otherwise, it ignores the request.
    *   **Phase 2: Accept Phase**
        *   **Proposer:** If the proposer receives "Promise" responses from a majority of acceptors for its prepare request `n`:
            *   It chooses a value to propose. If any acceptor responded with a previously accepted value, the proposer *must* choose the value associated with the highest proposal number from the responses. Otherwise, it can choose any value (e.g., its own initially proposed value).
            *   It sends an "Accept" request containing its proposal number (`n`) and the chosen value to a majority of acceptors.
        *   **Acceptor:** When an acceptor receives an "Accept" request with proposal number `n` and value `v`:
            *   If `n` is greater than or equal to any proposal number it has already responded to (i.e., it hasn't promised a higher number), it accepts proposal `n` with value `v`. It then informs learners of its acceptance.
            *   Otherwise, it ignores the request.

*   **Quorum:** A majority of nodes. In Paxos, a proposal is considered successful if it is accepted by a quorum of acceptors.
*   **Safety:** Paxos guarantees that at most one value is chosen.
*   **Liveness:** Paxos does *not* guarantee liveness in all scenarios. It can get stuck (e.g., if proposers continually choose conflicting proposal numbers and no majority can be formed).

**Examples:**

Imagine three nodes (A, B, C) as acceptors.

1.  **Proposer P1** wants to propose value `X`.
    *   P1 chooses proposal number 1.
    *   P1 sends "Prepare(1)" to A, B, C.
2.  **Acceptors:**
    *   A receives "Prepare(1)". It hasn't seen any proposals before, so it promises not to accept anything less than 1. It responds to P1 with ("Promise", 1, None) (no previously accepted value).
    *   B receives "Prepare(1)". It promises not to accept anything less than 1. It responds to P1 with ("Promise", 1, None).
    *   C receives "Prepare(1)". It promises not to accept anything less than 1. It responds to P1 with ("Promise", 1, None).
3.  **Proposer P1:** Receives promises from A, B, C (a majority).
    *   Since no acceptor responded with a previously accepted value, P1 chooses `X`.
    *   P1 sends "Accept(1, X)" to A, B, C.
4.  **Acceptors:**
    *   A receives "Accept(1, X)". Since 1 is not less than any proposal it responded to (i.e., 1), it accepts. It informs learners of ("Accepted", 1, X).
    *   B receives "Accept(1, X)". It accepts. It informs learners of ("Accepted", 1, X).
    *   C receives "Accept(1, X)". It accepts. It informs learners of ("Accepted", 1, X).
5.  **Learners:** Learn that value `X` has been accepted with proposal number 1. Consensus reached.

**Consider a Failure Scenario:**

1.  P1 sends "Prepare(1)" to A, B. A and B promise.
2.  P1 sends "Accept(1, X)" to A, B. A and B accept and inform learners.
3.  Meanwhile, **Proposer P2** wants to propose value `Y`.
    *   P2 chooses proposal number 2 (higher than 1).
    *   P2 sends "Prepare(2)" to A, C.
4.  **Acceptors:**
    *   A receives "Prepare(2)". It has already accepted proposal 1. Since 2 is higher than 1, it promises not to accept anything less than 2. It responds to P2 with ("Promise", 1, X) (the value it accepted previously).
    *   C receives "Prepare(2)". It hasn't seen anything, so it promises not to accept anything less than 2. It responds to P2 with ("Promise", 2, None).
5.  **Proposer P2:** Receives promises from A and C (a majority).
    *   P2 sees that A responded with (1, X). Therefore, P2 *must* choose value `X`.
    *   P2 sends "Accept(2, X)" to A, C.
6.  **Acceptors:**
    *   A receives "Accept(2, X)". It has already accepted proposal 1. Since 2 is not less than any proposal it has responded to (which was based on its promise for proposal 1), it accepts. It informs learners of ("Accepted", 2, X).
    *   C receives "Accept(2, X)". It accepts. It informs learners of ("Accepted", 2, X).
7.  **Learners:** Learn that value `X` has been accepted with proposal number 2. Consensus reached on `X`.

**Important Points to Remember about Paxos:**

*   **Correctness (Safety):** Guarantees that at most one value is chosen.
*   **Liveness Issues:** Can be complex to implement and might suffer from livelock (situations where progress is not made).
*   **Multi-Paxos:** Optimizations exist to improve performance.
*   **Complexity:** Original Paxos is notoriously difficult to understand and implement correctly.

---

### 3. Raft Algorithm

Raft is designed to be more understandable and easier to implement than Paxos while providing similar fault tolerance guarantees. It achieves consensus by first electing a leader and then having the leader manage a replicated log.

**Key Concepts & Definitions:**

*   **Leader:** At any given time, at most one server can be the leader. The leader is responsible for managing the replicated log and handling client requests.
*   **Follower:** Servers that are not leaders. They passively respond to requests from the leader and can vote in elections.
*   **Candidate:** A server that is trying to become the leader.
*   **States:** Servers transition between Leader, Follower, and Candidate states.
*   **Terms (Election Terms):** Raft divides time into *terms*, which are numbered sequentially. Each term begins with an election. If an election is successful, a leader manages the term for some time. If an election fails, the term ends, and a new election begins. Terms are used to detect stale leaders.
*   **Log Replication:** The core of Raft is replicating a log of commands. All servers maintain an identical log.
*   **Election Process:**
    1.  **Timeout:** If a follower does not receive communication from the leader within a certain *election timeout*, it becomes a candidate.
    2.  **Become Candidate:** The candidate increments its current term, votes for itself, and sends `RequestVote` RPCs to all other servers.
    3.  **Voting:**
        *   Followers who receive `RequestVote` will vote for at most one candidate per term.
        *   A follower will grant its vote to a candidate if:
            *   The candidate's log is at least as up-to-date as the follower's log. (Raft prioritizes up-to-date logs to ensure safety).
            *   The follower has not already voted for another candidate in the current term.
    4.  **Winning Election:** If a candidate receives votes from a majority of the servers in the cluster, it becomes the leader.
    5.  **Discovering Leader:** If a candidate receives an `AppendEntries` RPC from another server claiming to be the leader, it recognizes that server as the leader and transitions to the follower state.
    5.  **Election Timeout (Split Votes):** If a candidate does not win the election (e.g., due to split votes), it waits for another election timeout and starts a new election with an incremented term.

*   **Log Replication Process:**
    1.  **Leader's Role:** The leader accepts client commands, appends them to its log, and then sends `AppendEntries` RPCs to all followers to replicate the entries.
    2.  **Follower's Role:** Followers receive `AppendEntries` RPCs. If the RPC is valid (matches the leader's log on the previous entry), the follower appends the new entries to its log and responds to the leader.
    3.  **Committing Entries:** Once a leader knows that an entry has been replicated to a majority of servers, it *commits* the entry. The leader can then apply the entry to its state machine and respond to the client.
    4.  **Follower Commitment:** Followers replicate committed entries from the leader and also apply them to their state machines.

**Example (3-node cluster):**

*   **Initial State:** All nodes (S1, S2, S3) are Followers.

1.  **Election:**
    *   S1's election timeout expires. S1 becomes a Candidate, increments term to 1, votes for itself.
    *   S1 sends `RequestVote(term=1, candidateId=S1)` to S2 and S3.
    *   S2 is a Follower. It receives `RequestVote(1, S1)`. S2's log is empty. S1's log is also empty (no previous entries to compare). S2 votes for S1.
    *   S3 is a Follower. It receives `RequestVote(1, S1)`. S3's log is empty. S1's log is also empty. S3 votes for S1.
2.  **Leader Election:** S1 receives votes from S2 and S3 (a majority). S1 becomes the Leader.
    *   S1 starts sending `AppendEntries` heartbeats to S2 and S3 to maintain its leadership.
3.  **Client Request:** Client sends a command `Set(key=abc, value=123)` to S1.
    *   S1 appends `[Set(abc, 123)]` to its log at index 1. Its log is now `[entry0, entry1]`, where `entry0` is the dummy entry at index 0.
    *   S1 sends `AppendEntries(term=1, leaderId=S1, prevLogIndex=0, prevLogTerm=0, entries=[Set(abc, 123)], leaderCommit=0)` to S2 and S3.
4.  **Log Replication:**
    *   S2 receives the `AppendEntries` RPC. Its log is `[entry0]`. `prevLogIndex=0` and `prevLogTerm=0` match `entry0`. S2 appends `[Set(abc, 123)]` to its log. Its log is now `[entry0, entry1]`. S2 responds to S1 with success.
    *   S3 receives the `AppendEntries` RPC. Its log is `[entry0]`. `prevLogIndex=0` and `prevLogTerm=0` match `entry0`. S3 appends `[Set(abc, 123)]` to its log. Its log is now `[entry0, entry1]`. S3 responds to S1 with success.
5.  **Commitment:** S1 receives success responses from S2 and S3 (a majority). S1 knows that `entry1` is replicated on a majority.
    *   S1 updates its `commitIndex` to 1.
    *   S1 applies `Set(abc, 123)` to its state machine.
    *   S1 responds to the client with success.
    *   S1 sends new `AppendEntries` RPCs with `leaderCommit=1` to S2 and S3.
6.  **Follower Commitment:** S2 and S3 receive the `AppendEntries` with `leaderCommit=1`. They update their `commitIndex` to 1 and apply `Set(abc, 123)` to their state machines.

**Failure Scenario Example:**

*   Assume S1 is leader, S2 and S3 are followers.
*   S1 crashes.
*   S2 and S3 do not receive heartbeats from S1.
*   S2's election timeout expires. S2 becomes Candidate for term 2. S2 votes for itself and sends `RequestVote(term=2, candidateId=S2)` to S1 (crashed, won't respond) and S3.
*   S3 receives `RequestVote(2, S2)`. S3 was a follower in term 1, its log is up-to-date. S3 votes for S2.
*   S2 gets a majority (vote from itself and S3). S2 becomes the leader for term 2.

**Important Points to Remember about Raft:**

*   **Understandability:** Designed for ease of understanding and implementation.
*   **Leader-based:** Relies on a strong leader to manage the system.
*   **Safety:** Guarantees that committed entries are durable and that safety properties (like at most one leader per term, log matching property) are maintained.
*   **Liveness:** Generally provides good liveness if a majority of servers are available.
*   **Strong Consistency:** Achieves strong consistency by ensuring that the leader's log is always up-to-date.

---

### 4. Comparison of Paxos and Raft

| Feature           | Paxos                                       | Raft                                              |
| :---------------- | :------------------------------------------ | :------------------------------------------------ |
| **Goal**          | Consensus (agreement on a single value)     | Consensus (agreement on a replicated log)         |
| **Complexity**    | High, difficult to understand/implement     | Lower, designed for understandability             |
| **Mechanism**     | Multi-phase commit (Prepare/Accept)         | Leader election + Log replication                 |
| **Leader**        | No explicit leader (can have multiple proposers) | Explicitly elected leader, single point of control |
| **Liveness**      | Can be problematic (e.g., livelock)         | Generally good liveness                           |
| **Terms/Epochs**  | Implicit through proposal numbers           | Explicit terms for elections and leader detection |
| **Log Structure** | Typically single value consensus            | Replicated log of commands                        |
| **Use Case**      | Foundational, theoretical, some systems    | Widely adopted in modern distributed systems      |

---

### 5. Paxos and Raft in Blockchain

While not always used directly in public blockchains like Bitcoin or Ethereum (which often use Nakamoto consensus/Proof-of-Work), variants or principles of Paxos and Raft are fundamental in:

*   **Permissioned Blockchains (e.g., Hyperledger Fabric):** Many permissioned blockchains use consensus algorithms inspired by or directly derived from Paxos or Raft to achieve agreement among a known set of participants. For instance, PBFT (Practical Byzantine Fault Tolerance) shares some conceptual similarities in reaching consensus.
*   **Internal Operations of Blockchain Nodes:** Even in Proof-of-Work blockchains, nodes might use internal consensus mechanisms for managing their own state or coordinating tasks among their peers in a more controlled environment.
*   **Distributed Databases:** The principles are foundational to many distributed databases and key-value stores that require strong consistency and fault tolerance.

**Key Differences from Nakamoto Consensus (PoW):**

*   **Leader:** Raft/Paxos have a designated leader (or a clear proposal process), while Nakamoto consensus is leaderless and probabilistic.
*   **Speed:** Raft/Paxos can achieve faster finality of transactions once consensus is reached. PoW has probabilistic finality.
*   **Energy Consumption:** Raft/Paxos are significantly more energy-efficient than PoW.
*   **Participants:** Raft/Paxos are typically used in systems with a known, trusted set of participants (permissioned), whereas PoW is designed for open, permissionless environments.

---

### 6. Practice Questions & Exercises

**Question 1:**
What is the primary goal of consensus mechanisms in distributed systems?

**Answer:**
The primary goal is to ensure that all nodes in a distributed system agree on a single value or state, even in the presence of failures like network partitions or node crashes.

---

**Question 2:**
Describe the two main phases of the Paxos algorithm. What is the purpose of the "Prepare" phase?

**Answer:**
The two main phases of Paxos are the Prepare phase and the Accept phase.
The purpose of the "Prepare" phase is for a proposer to learn about previously accepted proposals and to ensure that no new proposals with lower numbers can be accepted by acceptors, thus preventing the proposer from proposing a value that might conflict with a previously chosen value.

---

**Question 3:**
In Raft, what happens when a Follower's election timeout expires without receiving communication from a Leader? What is the role of the "term"?

**Answer:**
When a Follower's election timeout expires, it transitions to the Candidate state, increments its current term, votes for itself, and starts an election by sending `RequestVote` RPCs to other servers.
The "term" is a monotonically increasing number used to identify periods of time in Raft. Terms help detect stale leaders and out-of-date information. A server with a lower term number is considered "behind" and cannot be elected leader over a server with a higher term number.

---

**Question 4:**
Which consensus algorithm is generally considered more complex to implement and why?

**Answer:**
Paxos is generally considered more complex to implement than Raft. This is due to its intricate multi-phase communication, the subtle handling of proposal numbers, and the potential for livelock scenarios that are harder to manage. Raft was specifically designed to address this complexity by introducing explicit roles, state transitions, and a leader-driven approach.

---

**Question 5 (Scenario):**
Consider a Raft cluster with 5 nodes (N1, N2, N3, N4, N5). N1 is the current leader. N2 and N3 are followers. N4 and N5 are also followers but are partitioned from the network.
If N1 crashes, which nodes can potentially elect a new leader? What is the minimum number of nodes required for a successful election?

**Answer:**
The nodes that can potentially elect a new leader are N2 and N3, as they are still reachable and can communicate.
The minimum number of nodes required for a successful election in a 5-node cluster is a majority, which is `floor(5/2) + 1 = 3` nodes.
If N1 crashes, N2 and N3 are the only ones who can participate in an election. If one of them becomes a candidate and receives a vote from the other, it will have 2 votes, which is not a majority of 3. However, if N2 becomes candidate, votes for itself, and N3 votes for N2, N2 would have 2 votes. If a new election begins with N3 as candidate and it gets a vote from N2, N3 would have 2 votes. A successful election requires a majority of *all* nodes in the cluster to agree, not just a majority of the available nodes.

**Correction/Refinement for Question 5 Scenario:**
The question states N4 and N5 are partitioned. This means they cannot participate in an election. The election will happen among the available nodes (N1, N2, N3).
If N1 (leader) crashes:
*   N2 and N3 are followers.
*   Assume N2's election timeout triggers first. N2 becomes a candidate, votes for itself, and sends `RequestVote` to N3 (and N1, but N1 is down).
*   N3 receives `RequestVote` from N2. N3 votes for N2.
*   N2 now has 2 votes (its own and N3's).
*   The total cluster size is 5. A majority is 3 nodes.
*   N2 only has 2 votes, which is not a majority of 5. Therefore, N2 cannot be elected leader in this scenario *with only N2 and N3 available*. This highlights a critical aspect: consensus requires a majority of the *entire* cluster membership, even if some nodes are offline or partitioned.

*Self-Correction/Clarification*: While Raft's election logic focuses on receiving votes from a majority of servers it can *contact*, the definition of a majority is based on the *total number of servers in the cluster*. So, a majority is `(N/2) + 1`. If a leader crashes and only a minority of nodes can communicate, a new leader cannot be elected until the majority becomes available again or the cluster membership changes. In the scenario above, even if N2 and N3 both agree on a new leader, that leader only has 2 votes, which is not a majority of the 5 total nodes. This is a key aspect of fault tolerance – the system must be able to tolerate `f` failures in a cluster of `2f+1` nodes to guarantee consensus. Here, if 3 nodes are down, consensus cannot be guaranteed.

---

### 7. Important Points to Remember

*   **Consensus is Key:** Understanding consensus algorithms is crucial for grasping how distributed systems, including blockchains, maintain agreement and reliability.
*   **Paxos vs. Raft:** Raft is a more practical and understandable alternative to Paxos for achieving consensus in many distributed systems.
*   **Leader Election:** Raft's reliance on a leader simplifies the consensus process but introduces a single point of coordination.
*   **Fault Tolerance:** Both algorithms are designed to be fault-tolerant, meaning they can continue to operate even if some nodes fail.
*   **Blockchain Application:** While Nakamoto consensus (PoW) is dominant in public blockchains, Paxos and Raft are foundational for permissioned blockchains and other distributed ledger technologies.
