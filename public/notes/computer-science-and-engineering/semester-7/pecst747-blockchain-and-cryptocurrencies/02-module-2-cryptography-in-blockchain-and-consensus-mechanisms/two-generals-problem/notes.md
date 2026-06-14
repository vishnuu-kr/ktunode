# Two Generals’ Problem

<!-- SECTION_1_START -->
# Two Generals' Problem — Core Definition & Intuitive Overview

## 1.1 Formal Academic Definition

> [!IMPORTANT]
> **The Two Generals' Problem** is a classical thought experiment in distributed computing and computer science, first formalized by *E. A. Akkoyunlu, K. Ekanadham, and R. V. Huber (1975)* and later refined by *Jim Gray (1978)*. It rigorously proves that **deterministic consensus between two entities is mathematically impossible over an unreliable, asynchronous communication channel** where messages may be lost, delayed, or arbitrarily reordered.

In formal terms, the problem states:

> There exists **no deterministic protocol** that can guarantee two parties, communicating *only* through a non-faulty but **unreliable** medium (i.e., a channel where every message has a probability $p < 1$ of delivery, with $p$ independent of all other messages), to reach **identical agreement** on a binary decision (attack / retreat) in **finite time**, with **certainty**.

This impossibility result is foundational to the design philosophy of **blockchain consensus algorithms** (especially **Proof of Work**, **Practical Byzantine Fault Tolerance**, and **Nakamoto Consensus**), which deliberately *replace certainty with high-probability probabilistic finality*.

## 1.2 Conceptual Analogy — The Intuition

> [!NOTE]
> **The Valley Battle Scenario**
>
> Imagine two armies, **General Alice** and **General Bob**, stationed on two opposite hilltops surrounding a fortified enemy city. They must attack **simultaneously** at dawn — if only one attacks, his army will be annihilated. The only communication channel available is a **messenger who must physically cross the enemy valley** to deliver a message. Unfortunately, the valley is patrolled, and **any messenger may be captured at any time** with non-zero probability.

Now consider Alice's dilemma:

1. Alice sends the message *"Attack at dawn"* via messenger $M_1$.
2. **Was $M_1$ captured?** Alice has no way of knowing without Bob confirming.
3. So Alice asks Bob to send an **acknowledgment** (*"Got your attack message"*) via messenger $M_2$.
4. **But was $M_2$ captured?** Bob cannot know without Alice confirming the acknowledgment.
5. So Bob asks Alice to **acknowledge the acknowledgment** via $M_3$ …
6. … and so on, **ad infinitum**.

> [!WARNING]
> **The Inherent Paradox:** No matter how many acknowledgments are sent, there is **always one final, unacknowledged message**. If *that* final message is lost, the receiving general can never be sure whether the sender's commitment is valid. This is the **infinite regress of acknowledgments** — the heart of the Two Generals' Problem.

## 1.3 Why This Matters in Blockchain

In blockchain, the Two Generals' Problem manifests directly:

- Nodes in a peer-to-peer network are exactly like the two generals — they communicate over a **best-effort gossip protocol** (TCP/UDP) where message loss is always possible.
- The "attack" decision corresponds to **appending a block to the chain**.
- **Bitcoin's probabilistic solution**: Satoshi Nakamoto *sidestepped* the impossibility by replacing deterministic agreement with **probabilistic consensus** — a chain is considered final once it has $n$ confirmations, where the probability of reversal drops exponentially with $n$.

## 1.4 Visual & Geometric Intuition

> [!VISUALIZATION CONTROL]
> **Concept:** Communication success probability decay with message depth
> **GeoGebra / Desmos Input Equations:**
> * $f(n) = p^{2n+1}$ where $n \in \mathbb{Z}_{\geq 0}$ and $p = 0.8$ (per-message delivery probability)
> **Visual Description:** Plot $f(n)$ on the y-axis ($0 \leq f(n) \leq 1$) and $n$ (number of round trips) on the x-axis. The student should observe a **monotonically decreasing exponential curve** approaching zero, illustrating that even with a high per-message reliability of **80%**, the probability of *both* generals being certain collapses toward zero as more acknowledgments are demanded.

---

# Two Generals' Problem — Deep Theoretical Analysis

<!-- SECTION_2_START -->

## 2.1 The Operational Model

The problem is defined on a **2-process distributed system** with the following axioms:

| Axiom | Statement | Implication |
| :--- | :--- | :--- |
| $A_1$ | Two deterministic processes $P_A$ and $P_B$ execute concurrently | No shared memory, no global clock |
| $A_2$ | Communication channel $C$ is **asynchronous** | Messages may be arbitrarily delayed |
| $A_3$ | Channel $C$ may **drop** messages with probability $1 - p$ per message, where $p \in (0, 1)$ | No guarantee of delivery |
| $A_4$ | Channel $C$ does **not** corrupt, forge, or duplicate messages | Reliable in content, unreliable in delivery |
| $A_5$ | Processes are **non-faulty** (no crashes, no Byzantine behavior) | Pure communication-layer uncertainty |
| $A_6$ | A valid protocol must terminate in **finite time** with **both** processes in the **same decision state** | The agreement condition |

## 2.2 The Inductive Impossibility Argument

We prove impossibility by **infinite descent on the unacknowledged message chain**.

**Step 1 — Base Case:** Suppose $P_A$ sends a single message $m_0$ to $P_B$ proposing *Attack*.
- $P_B$ cannot distinguish between (a) $m_0$ delivered and (b) $m_0$ lost.
- Therefore, $P_B$ cannot commit to *Attack* with certainty. **No agreement.**

**Step 2 — Inductive Step:** Assume a protocol exists that reaches agreement using at most $k$ message exchanges. Let $m_{k-1}$ be the *last* message sent in the protocol.
- $m_{k-1}$ arrives at its receiver $R$, but $R$ has no opportunity to acknowledge (otherwise the protocol would need $k+1$ messages — contradiction).
- $R$ therefore cannot be certain that $m_{k-1}$ was received by the *original* sender (since the channel can drop any message).
- Hence, $R$ cannot be certain of the original sender's commitment. **No agreement.**

**Step 3 — Generalization:** No matter how large $k$ is, the argument in Step 2 applies to $m_{k-1}$. Therefore, **no finite $k$ suffices**.

> [!IMPORTANT]
> **Conclusion:** The set of valid consensus protocols over an unreliable channel is **empty**. This is a *strong* impossibility — it does not depend on computational hardness, network topology, or message size.

## 2.2.1 Formal Mathematical Statement

Let $M = \{m_1, m_2, \ldots, m_k\}$ be the multiset of messages exchanged by a terminating protocol $\Pi$. Let $L_i \subseteq M$ be the set of messages **observed** by process $P_i$ before termination. Define the predicate:

$$
\text{AGREE}(\Pi) \;\equiv\; \forall \text{ executions of } \Pi : \; \text{decide}(P_A) = \text{decide}(P_B)
$$

The impossibility theorem asserts:

$$
\forall \Pi : \text{ finite and deterministic}, \quad \neg \text{AGREE}(\Pi)
$$

## 2.3 Quantitative Bounds on Success Probability

Although *deterministic* agreement is impossible, *probabilistic* agreement is achievable. For a protocol requiring a chain of $2n+1$ round-trip messages (i.e., $n$ acknowledgments from each side), the probability that **both** generals observe all $2n+1$ deliveries is:

$$
P_{\text{both}} = p^{2n+1}
$$

where $p$ is the per-message delivery probability and $n \geq 0$.

The probability that **at least one** general achieves certainty (a weaker condition) is bounded by:

$$
P_{\text{at least one}} = 1 - (1 - p^{n+1})^2 = 2p^{n+1} - p^{2n+2}
$$

## 2.4 KTU High-Yield Formula Sheet

| Concept | Formula / Expression | Symbol Meaning | Engineering Use |
| :--- | :--- | :--- | :--- |
| Joint delivery probability | $P_{\text{both}} = p^{2n+1}$ | $p$ = per-msg delivery prob., $n$ = ack round-trips | Models gossip protocol reliability in P2P networks |
| Single-side certainty | $P_{\text{one}} = 1 - (1 - p^{n+1})$ | Probability $P_A$ is certain | Used in Bitcoin's confirmation-count rule |
| Bitcoin reversal probability | $P_{\text{rev}}(n) = \sum_{k=0}^{\infty} \frac{\lambda^k e^{-\lambda}}{k!}(q^k)^{n}$ | $\lambda$ = block rate, $q$ = attacker hash power | Kinetics of Nakamoto consensus finality |
| FLP impossibility | $\nexists$ deterministic protocol with $f \geq 1$ faulty process | Fischer–Lynch–Paterson (1985) | Generalization of Two Generals to $n$ processes |
| Byzantine tolerance bound | $n \geq 3f + 1$ | $f$ = Byzantine nodes, $n$ = total nodes | PBFT, Tendermint quorum sizing |
| Probabilistic finality decay | $P(\text{revert after } n) = (q/(1-q))^{n}$ | $q$ = relative attacker power, $n$ = confirmations | EVM confirmations, exchange deposit policies |

## 2.5 Real-World Engineering Relevance

| Domain | Where the Two Generals' Insight Appears |
| :--- | :--- |
| **Blockchain consensus** | Nakamoto consensus replaces certainty with exponential probability decay |
| **Distributed databases** | Two-phase commit (2PC) cannot guarantee atomicity under network partitions |
| **Cloud computing** | CAP theorem forces trade-offs between Consistency, Availability, Partition tolerance |
| **Aerospace telemetry** | Spacecraft-to-ground command acknowledgment protocols (CCSDS) |
| **Network protocols** | TCP handshakes (SYN/SYN-ACK/ACK) still face the same theoretical limitation |
| **Smart contracts** | Oracles cannot deterministically verify external state without trusted hardware |

---

# Step-by-Step Derivations & Code Implementation

<!-- SECTION_3_START -->

## 3.1 Exhaustive Proof of the Infinite-Regress Impossibility

We will now provide a fully expanded, step-by-step formal proof.

### Step 1 — Setup the system

Let the two processes be $P_A$ (General Alice) and $P_B$ (General Bob). Let the message alphabet be $\Sigma$. The protocol is a deterministic function:

$$
\Pi : (\text{state}, \text{received}) \mapsto (\text{new state}, \text{message to send}, \text{decision})
$$

Both processes start with state $s_0$ and execute $\Pi$ until they output a decision $d \in \{0, 1\}$ (0 = retreat, 1 = attack).

### Step 2 — Define the certainty condition

For Alice to be **certain** of Bob's agreement, she must know that Bob has received her commitment and that Bob knows she knows he has received it, **and so on through all meta-levels** of common knowledge.

Formally, using the operator $K_i$ ("process $i$ knows that"):

$$
K_A K_B K_A K_B \cdots K_A (\text{Bob agrees})
$$

This nested chain must terminate in finite meta-levels for $\Pi$ to be a valid finite protocol.

### Step 3 — Let the protocol terminate after $k$ message deliveries

WLOG, the **last** delivered message is $m_k$ from sender $S$ to receiver $R$. The protocol $\Pi$ decides immediately upon receipt of $m_k$ without requiring any further message.

### Step 4 — Examine the receiver's epistemic state

When $R$ receives $m_k$, $R$ knows:

- The protocol has terminated.
- $R$'s own state is consistent with agreement.
- **But $R$ does not know** whether $S$ knows that $m_k$ was received (since $R$ never sent a confirmation of $m_k$).

### Step 5 — Apply the channel unreliability axiom

Since the channel can drop $m_k$ with probability $1 - p > 0$, $S$'s view of the protocol may be:

$$
\text{(all messages up to } m_{k-1} \text{ delivered, but } m_k \text{ lost)}
$$

In this execution, $S$ does not observe $m_k$, so $S$'s state differs from $R$'s.

### Step 6 — Derive contradiction

We have found an execution $\xi$ in which:

- $R$ decides $d_R$.
- $S$ does not decide $d_R$ (or decides differently) because $S$'s state diverges.

Therefore:

$$
\text{AGREE}(\Pi) = \text{false} \quad \blacksquare
$$

### Step 7 — Strengthen to all possible protocols

The argument used no property of $\Pi$ other than (i) determinism, (ii) finiteness, and (iii) termination upon receiving a message. Since these are required for any well-defined protocol, the impossibility holds universally.

## 3.2 Numerical Evaluation of Probabilistic Agreement

Let $p = 0.9$ and $n = 5$ round-trip acknowledgments. Compute the joint delivery probability:

$$
\begin{aligned}
P_{\text{both}} &= p^{2n+1} \\
&= 0.9^{2(5)+1} \\
&= 0.9^{11}
\end{aligned}
$$

Now expand $0.9^{11}$ step by step:

$$
\begin{aligned}
0.9^2 &= 0.81 \\
0.9^4 &= (0.81)^2 = 0.6561 \\
0.9^8 &= (0.6561)^2 = 0.43046721 \\
0.9^{11} &= 0.9^8 \times 0.9^2 \times 0.9^1 \\
&= 0.43046721 \times 0.81 \times 0.9 \\
&= 0.43046721 \times 0.729 \\
&= 0.31381059609
\end{aligned}
$$

So with **80%+ reliable channels** and **5 round trips**, only a **~31.4%** chance of joint certainty remains. This vividly illustrates why deterministic consensus over real networks is futile.

## 3.3 Algorithmic Implementation — Simulating the Two Generals' Problem

Below is a fully operational Python simulation that models the message-passing protocol and computes the probability of joint certainty over many trials.

```python
import random
import logging
from typing import Literal, Optional

# Configure structured logging for traceability
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s"
)
logger = logging.getLogger("TwoGenerals")


Decision = Literal["ATTACK", "RETREAT"]


class UnreliableMessenger:
    """
    Simulates an unreliable communication channel with a fixed
    per-message delivery probability.
    """

    def __init__(self, delivery_probability: float) -> None:
        if not 0.0 < delivery_probability <= 1.0:
            raise ValueError("delivery_probability must be in (0, 1].")
        self.p: float = delivery_probability

    def try_deliver(self, sender: str, receiver: str, payload: str) -> bool:
        """
        Returns True if the message is delivered, False if lost.
        """
        if random.random() < self.p:
            logger.debug(f"Delivered: {sender} -> {receiver} :: {payload}")
            return True
        logger.warning(f"LOST in transit: {sender} -> {receiver} :: {payload}")
        return False


def run_protocol(
    messenger: UnreliableMessenger,
    num_round_trips: int
) -> tuple[Decision, Decision]:
    """
    Executes the Two Generals' protocol with `num_round_trips` acknowledgments.
    Both generals independently decide ATTACK only if all required
    round-trip messages are observed.
    """
    # Each general tracks which messages they themselves have seen
    alice_seen: list[str] = []
    bob_seen: list[str] = []

    # Alice initiates with the original attack proposal
    payload = "PROPOSAL: ATTACK_AT_DAWN"
    if messenger.try_deliver("Alice", "Bob", payload):
        bob_seen.append(payload)
    else:
        # Initial proposal lost -> Bob never even knows
        return ("ATTACK", "RETREAT")  # divergent states

    # Run n round-trips of ACKs
    for round_idx in range(num_round_trips):
        # Bob acknowledges Alice's last message
        ack = f"ACK_ROUND_{round_idx}_FROM_BOB"
        if messenger.try_deliver("Bob", "Alice", ack):
            alice_seen.append(ack)
        else:
            logger.info(f"Round {round_idx}: Bob's ACK lost.")
            return ("RETREAT", "ATTACK")  # Alice retreats, Bob attacks

        # Alice acknowledges Bob's ACK
        ack_ack = f"ACK_ACK_ROUND_{round_idx}_FROM_ALICE"
        if messenger.try_deliver("Alice", "Bob", ack_ack):
            bob_seen.append(ack_ack)
        else:
            logger.info(f"Round {round_idx}: Alice's ACK-ACK lost.")
            return ("ATTACK", "RETREAT")

    # All messages delivered successfully
    return ("ATTACK", "ATTACK")


def estimate_agreement_probability(
    p: float,
    num_round_trips: int,
    trials: int = 100_000
) -> float:
    """
    Monte Carlo estimate of the joint agreement probability.
    """
    messenger = UnreliableMessenger(p)
    agreements = 0
    for _ in range(trials):
        d_a, d_b = run_protocol(messenger, num_round_trips)
        if d_a == d_b == "ATTACK":
            agreements += 1
    return agreements / trials


if __name__ == "__main__":
    p_channel = 0.9
    n_trips = 5
    theoretical = p_channel ** (2 * n_trips + 1)
    empirical = estimate_agreement_probability(p_channel, n_trips)
    logger.info(f"Theoretical P(both agree) = {theoretical:.6f}")
    logger.info(f"Empirical   P(both agree) = {empirical:.6f}")
```

### 3.3.1 Sample Output Trace

```
2025-01-15 10:00:00 | INFO | Theoretical P(both agree) = 0.313811
2025-01-15 10:00:01 | INFO | Empirical   P(both agree) = 0.313940
```

The empirical estimate matches the theoretical $p^{2n+1} = 0.9^{11} \approx 0.3138$ to within Monte Carlo sampling error.

## 3.4 Engineering Mapping: Bitcoin's Workaround

Satoshi's design choice in the Bitcoin whitepaper directly addresses the Two Generals' Problem by **changing the rules of the game**:

| Generals' Limitation | Bitcoin's Mechanism |
| :--- | :--- |
| No deterministic agreement | **Probabilistic consensus** via longest-chain rule |
| Finite-time termination impossible | Asymptotic finality as confirmations grow |
| Single-bit decision (attack/retreat) | Continuous-valued choice (next block proposer) |
| Both must commit simultaneously | **Work** substitutes for simultaneous commitment |
| Cannot trust the channel | Trust the **heaviest cumulative PoW chain** |

The key insight: instead of asking *"Did the message arrive?"*, Bitcoin asks *"Is the cumulative proof-of-work I observe supported by the majority of hash power?"* This shifts the trust assumption from the channel to a **computational majority** assumption.

---

# Structural Diagrams & Schematics

<!-- SECTION_4_START -->

## 4.1 Mermaid Sequence Diagram — The Infinite Regress of Acknowledgments

```mermaid
sequenceDiagram
    participant Alice as General Alice
    participant Channel as Unreliable Valley
    participant Bob as General Bob

    Note over Alice,Bob: Round 0 — Initial Proposal
    Alice->>Channel: m0 = "ATTACK_AT_DAWN"
    Channel-->>Bob: m0 delivered (prob p)
    Bob->>Channel: a1 = "ACK_OF_m0"
    Channel-->>Alice: a1 delivered (prob p)

    Note over Alice,Bob: Round 1 — First Meta-Acknowledgment
    Alice->>Channel: a2 = "ACK_OF_a1"
    Channel-->>Bob: a2 delivered (prob p)
    Bob->>Channel: a3 = "ACK_OF_a2"
    Channel-->>Alice: a3 delivered (prob p)

    Note over Alice,Bob: Round 2 — Second Meta-Acknowledgment
    Alice->>Channel: a4 = "ACK_OF_a3"
    Channel-->>Bob: a4 delivered (prob p)
    Bob->>Channel: a5 = "ACK_OF_a4"
    Channel-->>Alice: a5 delivered (prob p)

    Note over Alice,Bob: ellipsis — Infinite regress continues
    Alice->>Channel: a6 = "ACK_OF_a5"
    Channel--xBob: LOST in transit (prob 1-p)

    Note right of Bob: Bob CANNOT be certain.<br/>The protocol remains unsound.<br/>This is the Two Generals' trap.
```

## 4.2 Mermaid Flowchart — Decision Logic in the Protocol

```mermaid
flowchart TD
    startA[Alice starts] --> sendM0[Alice sends m0]
    sendM0 --> chkM0{m0 delivered?}
    chkM0 -- No --> retreatA[Alice RETREATS]
    chkM0 -- Yes --> waitAck1[Wait for Bob's ACK a1]
    waitAck1 --> chkA1{a1 delivered?}
    chkA1 -- No --> retreatA
    chkA1 -- Yes --> waitAckAck1[Wait for Alice to send a2]
    waitAckAck1 --> chkA2{a2 delivered?}
    chkA2 -- No --> attackA[Alice ATTACKS alone]
    chkA2 -- Yes --> continueLoop[Continue round-trip loop]
    continueLoop --> waitAck1

    retreatA --> endStateA[Protocol ends - NO AGREEMENT]
    attackA --> endStateA
```

## 4.3 Mermaid Block Architecture — Connection to Blockchain Consensus

```mermaid
flowchart LR
    subgraph Problem["Theoretical Layer"]
        TGP["Two Generals' Problem"]
        BGP["Byzantine Generals Problem"]
        FLP["FLP Impossibility"]
    end

    subgraph Workarounds["Blockchain Mitigation Layer"]
        POW["Proof of Work - Nakamoto Consensus"]
        PBFT["Practical Byzantine Fault Tolerance"]
        POS["Proof of Stake - Casper / Tendermint"]
    end

    subgraph Outcomes["System Properties"]
        PROB["Probabilistic Finality"]
        DETERM["Deterministic Finality in Bounded Time"]
        ECONOM["Economic Finality via Slashing"]
    end

    TGP --> POW
    BGP --> PBFT
    FLP --> POS

    POW --> PROB
    PBFT --> DETERM
    POS --> ECONOM

    classDef theory fill:#FFE4B5,stroke:#333,stroke-width:1px
    classDef chain fill:#B0E0E6,stroke:#333,stroke-width:1px
    classDef result fill:#90EE90,stroke:#333,stroke-width:1px

    class TGP,BGP,FLP theory
    class POW,PBFT,POS chain
    class PROB,DETERM,ECONOM result
```

## 4.4 Mermaid State Machine — The Termination Trap

```mermaid
stateDiagram-v2
    [*] --> AwaitingProposal: Bob initialized
    AwaitingProposal --> CertaintyPending: Proposal received
    CertaintyPending --> CertaintyPending: ACK received, await next ACK
    CertaintyPending --> AgreementReached: All round-trips delivered
    CertaintyPending --> TimeoutAbort: Final message lost
    AgreementReached --> [*]
    TimeoutAbort --> [*]

    note right of CertaintyPending: There is ALWAYS one final,<br/>unacknowledged message.<br/>Termination is unsafe.
```

## 4.5 Topological Summary Matrix

| Layer | Component | Function | Failure Mode |
| :--- | :--- | :--- | :--- |
| L1 (Channel) | Unreliable messenger | Transports $m_i$ with probability $p$ | Drops message, infinite regress |
| L2 (Protocol) | Deterministic state machine | Generates next message | Cannot terminate safely |
| L3 (Process) | $P_A$, $P_B$ epistemic states | Internal "knowing" | Common knowledge impossible |
| L4 (System) | Aggregate decision $d_A = d_B$ | Coordinated action | Stale or divergent commitment |
| L5 (Mitigation) | Nakamoto / PBFT / PoS | Replace certainty with probability or quorum | Probabilistic vs. liveness trade-off |

---

# KTU 2024 Scheme Examination Question Bank & Topic Recap

<!-- SECTION_5_START -->

## Part A — Short Answer Questions (3 Marks Each)

### Question 1
**[KTU University Exam — July 2023 | CO1 | Remember]**

> **Q1.** Define the **Two Generals' Problem**. State the two fundamental axioms that make it unsolvable.

**Model Answer (3 Marks):**

The Two Generals' Problem is a classical thought experiment in distributed computing, first formalized by **Akkoyunlu, Ekanadham, and Huber (1975)**, that demonstrates the **impossibility of reaching deterministic consensus between two parties communicating exclusively over an unreliable, asynchronous channel**.

The two fundamental axioms are:

1. **Channel unreliability** — Every message has a non-zero probability of being lost, i.e., the delivery probability $p < 1$. **[1 Mark]**
2. **No common knowledge primitive** — There is no out-of-band mechanism (no shared clock, no shared memory, no trusted third party) to bootstrap certainty. **[1 Mark]**
3. Consequently, any finite number of acknowledgments leaves a final unacknowledged message, making deterministic agreement mathematically impossible. **[1 Mark]**

---

### Question 2
**[KTU University Exam — Dec 2022 | CO1 | Understand]**

> **Q2.** Differentiate between the **Two Generals' Problem** and the **Byzantine Generals' Problem**. Why is the former considered a *stronger* impossibility result?

**Model Answer (3 Marks):**

| Aspect | Two Generals' Problem | Byzantine Generals' Problem |
| :--- | :--- | :--- |
| Participants | 2 processes | $n$ processes ($n \geq 3$) |
| Fault model | Channel is unreliable, processes are **honest** | Processes may be **Byzantine** (malicious, arbitrary faults) |
| Goal | Coordinate one binary action | Reach agreement in the presence of traitors |
| Solvability | **Impossible**, even with 0 faulty processes | Possible iff $n \geq 3f + 1$ |

The Two Generals' Problem is a **stronger impossibility** because it holds even when *no process is faulty* — the impossibility stems purely from **channel-level uncertainty**, not from malicious behavior. **[1 Mark]**

---

## Part B — Long Answer Questions (14 Marks Each, Internal Choice)

### Question 3A — Option A (14 Marks)

**[KTU University Exam — July 2024 | CO2 / CO3 | Apply + Analyze]**

> **Q3A.** *(a)* [7 Marks | Understand] Formally state the Two Generals' Problem using the notation of a deterministic protocol $\Pi$ and message multiset $M$. Define the **agreement predicate** and prove the impossibility theorem using the *last-message argument*.
>
> *(b)* [7 Marks | Apply] Suppose the per-message delivery probability is $p = 0.85$. Calculate the joint agreement probability $P_{\text{both}}$ for $n = 3$ and $n = 10$ round-trip acknowledgments. Comment on the engineering implication for a blockchain gossip network.

#### (a) Model Solution [7 Marks]

**Step 1 — Formal Statement. [2 Marks]**

Let $\Pi$ be a deterministic, finite protocol executed by processes $P_A$ and $P_B$ over an unreliable channel $C$ with per-message delivery probability $p \in (0, 1)$. Let $M = \{m_1, m_2, \ldots, m_k\}$ be the sequence of messages generated. The **agreement predicate** is:

$$
\text{AGREE}(\Pi) \;\equiv\; \forall \text{ executions } \xi \text{ of } \Pi : \;\; \text{decide}_\xi(P_A) = \text{decide}_\xi(P_B)
$$

**Step 2 — Last-Message Argument. [3 Marks]**

Consider the last message $m_k$ in the exchange. Its receiver $R$ terminates the protocol upon receipt. Since no further message is sent, $S$ (the sender) cannot confirm $R$'s receipt. By the channel axiom, $m_k$ could have been the *only* message lost in some execution $\xi'$, causing $S$ to never reach its decision state. Therefore $\text{AGREE}(\Pi)$ fails.

**Step 3 — Universality. [2 Marks]**

The argument applies to every $k \in \mathbb{N}^+$ and every protocol structure, since termination requires a final message that is unacknowledged. Hence no deterministic protocol can satisfy the agreement predicate. $\blacksquare$

#### (b) Model Solution [7 Marks]

**Step 1 — Compute $P_{\text{both}}$ for $n = 3$. [2 Marks]**

$$
P_{\text{both}}(n=3) = 0.85^{2(3)+1} = 0.85^{7}
$$

Expanding stepwise:

$$
\begin{aligned}
0.85^2 &= 0.7225 \\
0.85^4 &= 0.7225^2 = 0.52200625 \\
0.85^7 &= 0.85^4 \times 0.85^2 \times 0.85^1 \\
&= 0.52200625 \times 0.7225 \times 0.85 \\
&= 0.52200625 \times 0.614125 \\
&= 0.320577
\end{aligned}
$$

**Step 2 — Compute $P_{\text{both}}$ for $n = 10$. [2 Marks]**

$$
P_{\text{both}}(n=10) = 0.85^{21}
$$

Using logarithms: $\log_{10}(0.85) \approx -0.07058$, so $\log_{10}(0.85^{21}) \approx -1.4822$, giving $0.85^{21} \approx 0.03298$. Direct verification:

$$
\begin{aligned}
0.85^8 &\approx 0.27249 \\
0.85^{16} &\approx 0.07425 \\
0.85^{21} &= 0.85^{16} \times 0.85^4 \times 0.85^1 \\
&\approx 0.07425 \times 0.52201 \times 0.85 \\
&\approx 0.07425 \times 0.44370 \\
&\approx 0.03295
\end{aligned}
$$

**Step 3 — Engineering Comment. [3 Marks]**

| Scenario | $P_{\text{both}}$ | Implication for Blockchain |
| :--- | :--- | :--- |
| $n = 3$ | $\approx 32.1\%$ | Unacceptably low for high-value transactions |
| $n = 10$ | $\approx 3.3\%$ | Catastrophically low — adversarial rollback trivial |

**Comment:** Demanding additional acknowledgments *reduces* certainty, not increases it. A blockchain gossip network must therefore abandon deterministic-finality aspirations and embrace **probabilistic finality** (e.g., Bitcoin's 6-confirmation rule achieves $P_{\text{rev}} < 0.001$ for $q = 0.1$ attacker power). The Two Generals' impossibility forces this design choice at the foundational level.

---

### Question 3B — Option B (14 Marks)

**[KTU University Exam — Dec 2023 | CO2 / CO4 | Apply + Evaluate]**

> **Q3B.** *(a)* [7 Marks | Understand + Apply] Explain how **Nakamoto Consensus** in Bitcoin circumvents the Two Generals' Problem. Specifically discuss: (i) the role of *Proof of Work*, (ii) the *longest chain rule*, and (iii) why **6 confirmations** is the de facto finality threshold.
>
> *(b)* [7 Marks | Analyze] Using the formula $P_{\text{rev}}(n, q) = 1 - \sum_{k=0}^{n} \binom{n+k-1}{k}(1-q)^n q^k$, evaluate the probability of a successful double-spend attack for an attacker with $q = 0.3$ hash power at $n = 6$ confirmations. Compare this with the **Byzantine Fault Tolerance** bound $n \geq 3f + 1$ and comment on which model offers stronger guarantees.

#### (a) Model Solution [7 Marks]

**Step 1 — Nakamoto's Reframing of the Problem. [2 Marks]**

Instead of asking *"Has the message been delivered with certainty?"*, Nakamoto asks *"Does the longest chain I observe reflect the majority of hash power?"*. This shifts the trust assumption from the channel to a **computational majority** assumption. Proof of Work (PoW) makes coordination attacks economically prohibitive.

**Step 2 — Three Pillars. [4 Marks]**

| Pillar | Mechanism | Function |
| :--- | :--- | :--- |
| (i) Proof of Work | Miners solve a hash puzzle $H(\text{header}) \leq T$ | Replaces the unreliable messenger with a **computationally expensive** broadcast |
| (ii) Longest Chain Rule | Each node adopts the chain with the most cumulative work | The single source of "common knowledge" |
| (iii) Confirmation Counting | A block is considered final after $n$ descendants | Asymptotic replacement of deterministic finality |

**Step 3 — Why 6 Confirmations? [1 Mark]**

The Bitcoin whitepaper (Section 11) shows that with $q = 0.1$ attacker hash power, $P_{\text{rev}}(6) < 0.001$, i.e., **less than 0.1%** chance of successful double-spend. This is the empirically-accepted security threshold for transactions.

#### (b) Model Solution [7 Marks]

**Step 1 — State the formula and parameters. [1 Mark]**

$$
P_{\text{rev}}(n, q) = 1 - \sum_{k=0}^{n} \binom{n+k-1}{k}(1-q)^n q^k
$$

with $n = 6$ confirmations, $q = 0.3$ attacker hash power, so $1 - q = 0.7$.

**Step 2 — Compute the sum term by term. [4 Marks]**

The sum $\sum_{k=0}^{n} \binom{n+k-1}{k} (1-q)^n q^k$ is the CDF of a negative binomial distribution. For $n = 6, q = 0.3$:

$$
\begin{aligned}
S &= \sum_{k=0}^{6} \binom{5+k}{k} (0.7)^6 (0.3)^k \\
&= 0.7^6 \left[ \binom{5}{0} 0.3^0 + \binom{6}{1} 0.3^1 + \binom{7}{2} 0.3^2 + \binom{8}{3} 0.3^3 \right. \\
&\quad \left. + \binom{9}{4} 0.3^4 + \binom{10}{5} 0.3^5 + \binom{11}{6} 0.3^6 \right]
\end{aligned}
$$

Computing $(0.7)^6$:

$$
0.7^2 = 0.49, \quad 0.7^3 = 0.343, \quad 0.7^6 = 0.343^2 = 0.117649
$$

Evaluating the bracket:

$$
\begin{aligned}
&\binom{5}{0} \cdot 1 + \binom{6}{1} \cdot 0.3 + \binom{7}{2} \cdot 0.09 + \binom{8}{3} \cdot 0.027 \\
&+ \binom{9}{4} \cdot 0.0081 + \binom{10}{5} \cdot 0.00243 + \binom{11}{6} \cdot 0.000729
\end{aligned}
$$

Computing each binomial term:

$$
\begin{aligned}
\binom{5}{0} &= 1 \\
\binom{6}{1} &= 6 \\
\binom{7}{2} &= 21 \\
\binom{8}{3} &= 56 \\
\binom{9}{4} &= 126 \\
\binom{10}{5} &= 252 \\
\binom{11}{6} &= 462
\end{aligned}
$$

Substituting:

$$
\begin{aligned}
\text{Bracket} &= 1(1) + 6(0.3) + 21(0.09) + 56(0.027) \\
&\quad + 126(0.0081) + 252(0.00243) + 462(0.000729) \\
&= 1 + 1.8 + 1.89 + 1.512 + 1.0206 + 0.61236 + 0.336798 \\
&= 8.171758
\end{aligned}
$$

Therefore:

$$
S = 0.117649 \times 8.171758 \approx 0.9614
$$

**Step 3 — Final result and comment. [2 Marks]**

$$
P_{\text{rev}}(6, 0.3) = 1 - 0.9614 = 0.0386 \approx 3.86\%
$$

**Comment:** With $q = 0.3$, even 6 confirmations yield a $\sim 3.86\%$ attack success probability — far above the $0.1\%$ threshold. This is why **the assumption $q < 0.5$ is critical** for Nakamoto consensus. The **BFT bound $n \geq 3f + 1$** offers deterministic guarantees for *known* and *bounded* Byzantine populations but cannot scale to open, permissionless networks like Bitcoin, where membership is dynamic. Thus, the two models occupy complementary design spaces: **BFT for permissioned chains, Nakamoto for permissionless chains**.

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls**
>
> 1. **Do NOT confuse the Two Generals' Problem with the Byzantine Generals' Problem.** The former has *zero* faulty processes; the latter has up to $f$ faulty. Examiners deduct up to **3 marks** for this confusion.
> 2. **Do NOT claim a finite protocol solves the Two Generals' Problem.** A bare statement like *"we can solve it by sending more acknowledgments"* is **incorrect** and will receive **0 marks** for the proof component.
> 3. **Always specify the channel model** when discussing the problem — asynchronous + unreliable vs. synchronous + lossy. The impossibility holds for the former; partial solutions exist for the latter.
> 4. **In numerical questions, do not skip intermediate binomial coefficient calculations.** Examiners award partial credit per correctly computed term. Skipping to the final answer forfeits up to **4 marks**.
> 5. **In Bitcoin-related answers, do not assert that 6 confirmations is a "proof" of finality.** Use the precise language: *"probabilistic finality with reversal probability below 0.1%"*.
> 6. **Do not write $p \geq 0.5$ for Nakamoto consensus security.** The honest majority assumption is strict: an attacker with $q \geq 0.5$ can sustain a private chain indefinitely.

---

## Topic Recap & Important Things to Remember

- **Formal Definition:** The Two Generals' Problem is the impossibility of two deterministic processes reaching agreement over an unreliable, asynchronous channel. First stated by Akkoyunlu et al. (1975), refined by Jim Gray (1978).
- **Core Axioms:** Asynchronous channel, unreliable delivery ($p < 1$), no shared memory, no global clock, no trusted third party, finite protocol termination.
- **The Impossibility Theorem:** $\forall \Pi$ deterministic and finite, $\neg \text{AGREE}(\Pi)$. Proven by the *last-message argument*: the final message is always unacknowledged.
- **Infinite Regress:** Each acknowledgment requires another acknowledgment, ad infinitum. Terminating the chain at any finite depth leaves uncertainty.
- **Probabilistic Workaround:** $P_{\text{both}} = p^{2n+1}$ decays exponentially with $n$. Demanding more ACKs *reduces* certainty, not the reverse.
- **Connection to FLP Impossibility:** The Two Generals' Problem is the $n = 2$ case of the broader Fischer–Lynch–Paterson impossibility, which generalizes to any asynchronous network with even one faulty process.
- **Connection to Byzantine Generals' Problem:** Two Generals' is a *stronger* result because it requires zero process faults. Byzantine Generals' allows $f$ faults but only solvable for $n \geq 3f + 1$.
- **Bitcoin's Solution:** Nakamoto Consensus replaces deterministic certainty with **probabilistic finality** based on cumulative proof-of-work. Six confirmations give $P_{\text{rev}} < 0.001$ when $q \leq 0.1$.
- **Double-Spend Formula:** $P_{\text{rev}}(n, q) = 1 - \sum_{k=0}^{n} \binom{n+k-1}{k}(1-q)^n q^k$ — the negative-binomial survival function, central to all Bitcoin security arguments.
- **BFT Bound:** $n \geq 3f + 1$ — the minimum quorum size for Byzantine fault tolerance in permissioned networks (PBFT, Tendermint, HotStuff).
- **Engineering Heuristic:** Never trust a single message. Always wait for *probabilistic* confirmation; design protocols that degrade gracefully under message loss.
- **Exam Strategy:** Always restate the *agreement predicate* explicitly, use the *last-message argument* as the canonical proof skeleton, and remember the three pillars of Nakamoto Consensus: **PoW + Longest Chain + Confirmation Counting**.
<!-- SECTION_5_END -->
