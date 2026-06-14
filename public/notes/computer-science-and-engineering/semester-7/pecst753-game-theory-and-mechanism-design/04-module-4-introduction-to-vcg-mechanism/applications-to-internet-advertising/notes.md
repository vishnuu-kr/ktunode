# applications to Internet advertising

<!-- SECTION_1_START -->

# VCG Mechanism & Its Application to Internet Advertising

> [!IMPORTANT]
> **KTU 2024 Scheme | PECST753 | Module 4** — This module bridges classical auction theory (Module 3) with modern real-world **Internet Advertising Auctions** (Sponsored Search), forming the foundation of multi-billion dollar digital ad markets (Google Ads, Bing Ads, Meta Ads).

## 1.1 Formal Academic Definition

A **Vickrey–Clarke–Groves (VCG) Mechanism** is a truthful, dominant-strategy incentive-compatible (DSIC) direct revelation mechanism used to efficiently allocate heterogeneous items among self-interested agents. Formally introduced by William Vickrey (1961), Edward H. Clarke (1971), and Theodore Groves (1973), it is the canonical solution in **mechanism design** for achieving **social welfare maximization** when agents hold private valuations for the goods being allocated.

In the context of **Internet Advertising**, the VCG mechanism forms the theoretical backbone of **Sponsored Search Auctions (SSAs)**, where search engines (e.g., Google, Bing) sell $k$ ad "slots" on a search engine results page (SERP) to advertisers who have private valuations per click.

**Definition (VCG Mechanism, KTU Standard Formulation):**
Given $n$ agents with private valuation profiles $v = (v_1, v_2, \dots, v_n)$ for a set of alternatives $A$, the VCG mechanism consists of:
1. An **allocation rule** $x^*(v) \in \arg\max_{x \in A} \sum_{i=1}^{n} v_i(x_i)$.
2. A **payment rule** $p_i(v) = h_i(v_{-i}) - \sum_{j \neq i} v_j(x^*_j(v))$.

> [!NOTE]
> **Key Insight (Truthfulness):** Each agent's dominant strategy is to bid their **true private valuation**. Truth-telling is a **dominant strategy equilibrium** (not just Nash), making VCG remarkably robust.

## 1.2 Conceptual Analogy & Intuition

**The "Honest Taxi Meter" Analogy:** Imagine a city where every taxi uses a metered fare system where the *meter* doesn't care whether the passenger is rich or poor—it charges exactly the cost the passenger imposes on others. In a VCG auction for ad slots, an advertiser pays not what their ad is worth to *them*, but the **harm (opportunity cost)** their presence causes to all the *other* advertisers. This eliminates the incentive to **overbid or underbid**, just like a perfectly fair taxi meter would eliminate bargaining tricks.

**Geometric Intuition:** Think of $n$ advertisers' bids as points on a number line. The VCG mechanism picks the **highest sum** (welfare) and then charges each winner the **negative externality** they impose—essentially, the difference between what the other advertisers would have earned *without* this winner, and what they earn *with* this winner.

> [!VISUALIZATION CONTROL]
> **Concept:** Visualizing VCG Allocation & Pivot Payment
> **GeoGebra / Desmos Input Equations:**
> - `f(x) = 10 - x`  (Agent 1's marginal value curve)
> - `g(x) = 8 - 0.5*x` (Agent 2's marginal value curve)
> - `h(x) = 6 - 0.25*x` (Agent 3's marginal value curve)
> - Plot intersection points: `(2, 8)`, `(5, 5.5)`, `(8, 4)`
> **Visual Description:** Observe the descending marginal valuation curves; the optimal allocation point is where the **social welfare (sum of areas under curves)** is maximized. The Clarke pivot payment for an agent equals the area of the rectangle representing the welfare *lost* by other agents due to this agent's inclusion.

## 1.3 Physical & Economic Constants in Internet Advertising

| Parameter | Standard Industry Value | KTU Context |
|---|---|---|
| **Click-Through Rate (CTR)** | Top slot: 30–50%, Bottom slot: 2–5% | Quality Score weight |
| **Cost-Per-Click (CPC)** | \$0.10 – \$50+ (varies by keyword) | Bid valuation |
| **Slots per SERP** | Typically $k \in [1, 8]$ | Allocation vector length |
| **Revenue Elasticity** | Sponsored search: 30% of Google's \$200B+ revenue | Engineering scale metric |

> [!IMPORTANT]
> **Syllabus Highlight (PECST753 Module 4):** KTU 2024 explicitly tests the connection between the **VCG payment identity** $p_i = h_i(v_{-i}) - \sum_{j \neq i} v_j(x^*_j)$ and the **Generalized Second-Price (GSP) auction** used in practice. GSP is *not* truthful, but VCG serves as its theoretical benchmark.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Theoretical Foundation: From Welfare to Truthfulness

The VCG mechanism rests on three pillars (often called the **"VCG Trinity"** in KTU board exams):

### Pillar 1: Social Welfare Maximization (Efficiency)
The mechanism allocates items to maximize the **sum of all agents' valuations**:
$$\max_{x \in A} \sum_{i=1}^{n} v_i(x_i)$$

### Pillar 2: The Clarke Pivot Rule (Payment)
Each agent $i$ pays an amount equal to the **welfare loss they impose on others**:
$$p_i(v) = \max_{x \in A} \sum_{j \neq i} v_j(x_j) - \sum_{j \neq i} v_j(x^*_j(v))$$

This is the **"pivot payment"** because agent $i$ becomes the *pivotal* agent whose inclusion changes the optimal allocation for others.

### Pillar 3: Dominant Strategy Incentive Compatibility (Truthfulness)
Under VCG, reporting $b_i = v_i$ is a **dominant strategy**—no matter what others bid, agent $i$ cannot gain by misreporting.

**Proof Sketch of Truthfulness (Critical for KTU 14-mark questions):**
Agent $i$'s utility is:
$$u_i = v_i(x^*_i) - p_i(v) = v_i(x^*_i) - \max_{x \in A} \sum_{j \neq i} v_j(x_j) + \sum_{j \neq i} v_j(x^*_j)$$

For a fixed $v_{-i}$, the only term depending on $b_i$ is $v_i(x^*_i) + \sum_{j \neq i} v_j(x^*_j) = \sum_{j=1}^{n} v_j(x^*_j)$, which the mechanism **maximizes** by allocation. Thus, agent $i$ maximizes utility by truthfully reporting $b_i = v_i$ to ensure the allocation includes their *true* value.

## 2.2 Mapping to Internet Advertising (Sponsored Search Auctions)

A **Sponsored Search Auction (SSA)** is a positional auction with:
- $n$ **advertisers** (agents) bidding for $k$ **ad slots** on a SERP.
- Each slot $s$ has a known **click-through rate** $\alpha_s$ (with $\alpha_1 > \alpha_2 > \dots > \alpha_k$).
- Each advertiser $i$ has a private **value-per-click** $v_i$.

**Advertiser $i$'s expected value for slot $s$** is:
$$V_i(s) = \alpha_s \cdot v_i$$

**Welfare Maximization Rule:** Assign slot $s$ to the advertiser with the **$s$-th highest score** $\alpha_s \cdot v_i$. Equivalently, rank advertisers by $v_i$ and assign them in descending order of slot CTR.

> [!IMPORTANT]
> **KTU Critical Fact:** The "quality score" used by Google (combining CTR, ad relevance, and landing page quality) is a **multi-dimensional extension of VCG**—it modifies the scoring rule to $\alpha_s \cdot \text{quality}_i \cdot v_i$.

## 2.3 KTU Formula Sheet / Cheat Sheet

| **Symbol** | **Meaning** | **Formula / Identity** | **Units** |
|---|---|---|---|
| $v_i$ | Agent $i$'s private true value per click | $v_i \in \mathbb{R}_{+}$ | \$/click |
| $b_i$ | Agent $i$'s reported bid | $b_i \in \mathbb{R}_{+}$ | \$/click |
| $\alpha_s$ | Click-through rate of slot $s$ | $\alpha_1 > \alpha_2 > \dots > \alpha_k$ | dimensionless (probability) |
| $x^*_{i,s}$ | Allocation: agent $i$ to slot $s$ | $x^* \in \{0,1\}^{n \times k}$ | binary |
| $V_i(s)$ | Advertiser $i$'s expected value for slot $s$ | $V_i(s) = \alpha_s \cdot v_i$ | \$/impression |
| $\text{SW}$ | Social Welfare | $\text{SW}(x) = \sum_{i,s} \alpha_s \cdot v_i \cdot x_{i,s}$ | \$/impression |
| $p_i^{\text{VCG}}$ | VCG payment (Clarke pivot) | $p_i = \sum_{j \neq i} V_j(s^{\prime}_j) - \sum_{j \neq i} V_j(s^*_j)$ | \$/impression |
| $p_i^{\text{GSP}}$ | Generalized Second-Price payment | $p_i = \alpha_{s+1} \cdot b_{s+1} / \alpha_s$ | \$/click |
| $u_i$ | Advertiser $i$'s utility | $u_i = V_i(s^*) - p_i$ | \$/impression |
| $\text{IR}$ | Individual Rationality | $u_i \geq 0$ for all $i$ | condition |

> [!WARNING]
> **Table Syntax Note:** All vertical separators use `\vert` or `\mid` equivalents—no raw `\vert` pipes that would break Markdown rendering. Units are listed explicitly as required by KTU 2024.

## 2.4 Real-World Engineering & CS Utility

| **Application Domain** | **Why VCG is Used** |
|---|---|
| **Google Search Ads** | Theoretical benchmark for truthful bidding in sponsored search |
| **Microsoft Bing Ads** | Uses VCG-inspired multi-slot allocation with quality scores |
| **Facebook/Meta Ads** | VCG-based ad allocation across newsfeed positions |
| **Cloud Spot Markets (AWS)** | Allocates spare compute capacity via VCG-style auctions |
| **Spectrum Auctions (FCC)** | US government uses VCG variants for radio spectrum allocation |
| **Blockchain MEV Auctions** | Flashbots and similar protocols use VCG-style ordering |

> [!NOTE]
> **Why Not Pure VCG in Practice?** Real ad platforms (Google, Meta) use **Generalized Second-Price (GSP)** auctions because VCG requires complex pivot-rule computations and yields lower revenue. GSP is **not truthful** but is **stable in Nash equilibrium** and easier to implement at scale.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations, Numerical Examples & Code Implementation

## 3.1 Canonical Numerical Example: 3 Advertisers, 2 Slots

> [!IMPORTANT]
> **Worked Example (KTU Board Standard):** 3 advertisers bid for 2 ad slots. Slot CTRs are $\alpha_1 = 0.5$ (top), $\alpha_2 = 0.2$ (bottom). Bids: $v_1 = \$4$, $v_2 = \$3$, $v_3 = \$2$ per click.

### Step 1: Compute Expected Values $V_i(s)$ for Each Slot

$$
\begin{aligned}
V_1(\text{slot 1}) &= 0.5 \times 4 = \$2.00 \\
V_1(\text{slot 2}) &= 0.2 \times 4 = \$0.80 \\
V_2(\text{slot 1}) &= 0.5 \times 3 = \$1.50 \\
V_2(\text{slot 2}) &= 0.2 \times 3 = \$0.60 \\
V_3(\text{slot 1}) &= 0.5 \times 2 = \$1.00 \\
V_3(\text{slot 2}) &= 0.2 \times 2 = \$0.40
\end{aligned}
$$

### Step 2: Find Welfare-Maximizing Allocation
Assign slot 1 to the highest $V_i$, slot 2 to the second highest:
- Slot 1 → Advertiser 1: $\$2.00$ (highest)
- Slot 2 → Advertiser 2: $\$0.60$ (second highest)
- Advertiser 3 gets no slot: $\$0.00$

**Total Social Welfare:**
$$\text{SW}^* = 2.00 + 0.60 + 0.00 = \$2.60$$

### Step 3: Compute VCG Payment for Advertiser 1 (Pivotal)
Find the optimal allocation **without** Advertiser 1:
- Slot 1 → Advertiser 2: $\$1.50$
- Slot 2 → Advertiser 3: $\$0.40$
- Welfare without 1: $1.50 + 0.40 = \$1.90$

Clarke pivot payment for Advertiser 1:
$$p_1^{\text{VCG}} = \text{SW}_{-1} - \text{SW}^*_{-1} = 1.90 - (0.60 + 0.00) = \$1.30$$

### Step 4: Compute VCG Payment for Advertiser 2 (Pivotal)
Find the optimal allocation **without** Advertiser 2:
- Slot 1 → Advertiser 1: $\$2.00$
- Slot 2 → Advertiser 3: $\$0.40$
- Welfare without 2: $2.00 + 0.40 = \$2.40$

Clarke pivot payment for Advertiser 2:
$$p_2^{\text{VCG}} = 2.40 - (2.00 + 0.00) = \$0.40$$

### Step 5: Verify Individual Rationality (IR)
$$
\begin{aligned}
u_1 &= V_1(\text{slot 1}) - p_1^{\text{VCG}} = 2.00 - 1.30 = \$0.70 \geq 0 \quad \checkmark \\
u_2 &= V_2(\text{slot 2}) - p_2^{\text{VCG}} = 0.60 - 0.40 = \$0.20 \geq 0 \quad \checkmark \\
u_3 &= 0 - 0 = \$0.00 \geq 0 \quad \checkmark
\end{aligned}
$$

## 3.2 Comparison with GSP (Generalized Second-Price) Payment

**GSP Rule:** Winner of slot $s$ pays the bid of the next-ranked advertiser, scaled by the CTR ratio:
$$p_i^{\text{GSP}} = \frac{\alpha_{s+1}}{\alpha_s} \cdot b_{s+1}$$

For our example:
- Advertiser 1 (slot 1): $p_1^{\text{GSP}} = (0.2/0.5) \times 3 = \$1.20$
- Advertiser 2 (slot 2): $p_2^{\text{GSP}} = (0/0.2) \times 0 = \$0.00$ (no slot below)

**Comparison Table:**

| **Mechanism** | $p_1$ | $p_2$ | $p_3$ | Truthful? | Total Revenue |
|---|---|---|---|---|---|
| VCG | \$1.30 | \$0.40 | \$0.00 | ✅ Yes (DSIC) | \$1.70 |
| GSP | \$1.20 | \$0.00 | \$0.00 | ❌ No | \$1.20 |

## 3.3 Python Implementation: VCG Sponsored Search Auction

```python
"""
VCG Mechanism for Sponsored Search Auctions.
Production-grade implementation with type hints, input validation, and truthful bidding.
"""

from dataclasses import dataclass
from typing import List, Tuple, Dict
import logging

logging.basicConfig(level=logging.INFO, format="%(asctime)s | %(levelname)s | %(message)s")


@dataclass(frozen=True)
class Advertiser:
    """Represents an advertiser with private value-per-click."""
    agent_id: int
    value_per_click: float  # v_i in dollars

    def __post_init__(self) -> None:
        if self.value_per_click < 0:
            raise ValueError(f"Advertiser {self.agent_id}: value must be non-negative.")


@dataclass(frozen=True)
class AdSlot:
    """Represents an ad slot with a known click-through rate."""
    slot_id: int
    ctr: float  # alpha_s in [0, 1]

    def __post_init__(self) -> None:
        if not (0.0 <= self.ctr <= 1.0):
            raise ValueError(f"Slot {self.slot_id}: CTR must lie in [0, 1].")


def compute_expected_value(advertiser: Advertiser, slot: AdSlot) -> float:
    """V_i(s) = alpha_s * v_i."""
    return slot.ctr * advertiser.value_per_click


def vcg_auction(
    advertisers: List[Advertiser],
    slots: List[AdSlot],
) -> Tuple[Dict[int, int], Dict[int, float], Dict[int, float]]:
    """
    Run a VCG sponsored search auction.

    Returns:
        allocation:  dict mapping advertiser_id -> slot_id (or -1 if unassigned)
        payments:    dict mapping advertiser_id -> VCG payment
        utilities:   dict mapping advertiser_id -> utility (value - payment)
    """
    if not advertisers:
        raise ValueError("At least one advertiser required.")
    if not slots:
        raise ValueError("At least one slot required.")

    n = len(advertisers)
    k = len(slots)

    # Step 1: Rank (advertiser, slot) pairs by expected value descending.
    score_pairs: List[Tuple[float, int, int]] = []
    for adv in advertisers:
        for slot in slots:
            ev = compute_expected_value(adv, slot)
            score_pairs.append((ev, adv.agent_id, slot.slot_id))

    # Sort by EV descending; ties broken by lower agent_id.
    score_pairs.sort(key=lambda x: (-x[0], x[1]))

    # Step 2: Greedy welfare-maximizing allocation (top-k pairs).
    allocation: Dict[int, int] = {adv.agent_id: -1 for adv in advertisers}
    used_agents: set = set()
    used_slots: set = set()
    for ev, agent_id, slot_id in score_pairs:
        if len(used_agents) >= k or agent_id in used_agents or slot_id in used_slots:
            continue
        allocation[agent_id] = slot_id
        used_agents.add(agent_id)
        used_slots.add(slot_id)

    # Step 3: Compute VCG payments via Clarke pivot rule.
    payments: Dict[int, float] = {adv.agent_id: 0.0 for adv in advertisers}
    slot_by_id = {s.slot_id: s for s in slots}
    adv_by_id = {a.agent_id: a for a in advertisers}

    for adv in advertisers:
        i = adv.agent_id
        # Welfare of others WITH agent i in allocation.
        welfare_others_with = 0.0
        for other in advertisers:
            if other.agent_id == i:
                continue
            if allocation[other.agent_id] != -1:
                s = slot_by_id[allocation[other.agent_id]]
                welfare_others_with += compute_expected_value(other, s)

        # Welfare-max of others WITHOUT agent i (re-run greedy).
        other_advertisers = [a for a in advertisers if a.agent_id != i]
        welfare_others_without = 0.0
        local_pairs: List[Tuple[float, int, int]] = []
        for o in other_advertisers:
            for s in slots:
                local_pairs.append((compute_expected_value(o, s), o.agent_id, s.slot_id))
        local_pairs.sort(key=lambda x: (-x[0], x[1]))

        used_agents_local: set = set()
        used_slots_local: set = set()
        for ev, agent_id, slot_id in local_pairs:
            if len(used_agents_local) >= k or agent_id in used_agents_local or slot_id in used_slots_local:
                continue
            s = slot_by_id[slot_id]
            welfare_others_without += ev
            used_agents_local.add(agent_id)
            used_slots_local.add(slot_id)

        # Clarke pivot payment: harm imposed on others.
        payments[i] = max(0.0, welfare_others_without - welfare_others_with)

    # Step 4: Compute utilities and verify IR.
    utilities: Dict[int, float] = {}
    for adv in advertisers:
        i = adv.agent_id
        slot_id = allocation[i]
        if slot_id == -1:
            utilities[i] = 0.0 - payments[i]
        else:
            s = slot_by_id[slot_id]
            utilities[i] = compute_expected_value(adv, s) - payments[i]
        if utilities[i] < -1e-9:
            logging.warning(f"IR violation for agent {i}: utility = {utilities[i]:.4f}")

    return allocation, payments, utilities


# ----------------------------- DEMO -----------------------------
if __name__ == "__main__":
    advertisers = [
        Advertiser(agent_id=1, value_per_click=4.0),
        Advertiser(agent_id=2, value_per_click=3.0),
        Advertiser(agent_id=3, value_per_click=2.0),
    ]
    slots = [
        AdSlot(slot_id=1, ctr=0.5),
        AdSlot(slot_id=2, ctr=0.2),
    ]

    allocation, payments, utilities = vcg_auction(advertisers, slots)

    print("\n=== VCG Sponsored Search Auction Result ===")
    for adv in advertisers:
        i = adv.agent_id
        slot = allocation[i] if allocation[i] != -1 else "NONE"
        print(f"Advertiser {i}: Slot {slot} | Payment ${payments[i]:.2f} | Utility ${utilities[i]:.2f}")
```

**Expected Output:**
```
Advertiser 1: Slot 1 | Payment $1.30 | Utility $0.70
Advertiser 2: Slot 2 | Payment $0.40 | Utility $0.20
Advertiser 3: Slot NONE | Payment $0.00 | Utility $0.00
```

## 3.4 Truthfulness Verification Test

```python
def verify_truthfulness(
    true_value: float,
    other_values: List[float],
    ctrs: List[float],
    lying_value: float,
) -> Tuple[float, float]:
    """
    Compare utility when bidding truthfully vs. lying.
    Returns (utility_truthful, utility_lying).
    """
    # Truthful bid
    advs_true = [Advertiser(0, true_value)] + [Advertiser(i+1, v) for i, v in enumerate(other_values)]
    _, _, utils_true = vcg_auction(advs_true, [AdSlot(s, c) for s, c in enumerate(ctrs, 1)])
    u_truth = utils_true[0]

    # Lying bid
    advs_lie = [Advertiser(0, lying_value)] + [Advertiser(i+1, v) for i, v in enumerate(other_values)]
    _, _, utils_lie = vcg_auction(advs_lie, [AdSlot(s, c) for s, c in enumerate(ctrs, 1)])
    u_lie = utils_lie[0]

    return u_truth, u_lie


# Test: Overbidding cannot improve utility
u_t, u_l = verify_truthfulness(
    true_value=4.0, other_values=[3.0, 2.0], ctrs=[0.5, 0.2], lying_value=10.0
)
assert u_t >= u_l - 1e-9, f"Truthfulness violated! u_t={u_t}, u_l={u_l}"
print(f"Truthful utility: ${u_t:.2f} >= Lying utility: ${u_l:.2f}  ✓")
```

> [!NOTE]
> **Engineering Note (Production Insight):** In real systems, VCG's pivot rule requires $O(n \cdot k)$ recomputation per winner. For $n = 10^6$ advertisers and $k = 8$ slots, GSP's $O(n \log n)$ per-query cost is why **Google's production system uses GSP, not VCG**, but the VCG prices are used as a *theoretical benchmark* in A/B testing.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 VCG Mechanism Workflow in Sponsored Search

```mermaid
flowchart TD
    A[Advertiser Query Received] --> B[Retrieve All Active Bids b_i]
    B --> C[Apply Quality Score Multiplier]
    C --> D[Compute Expected Value V_i s = alpha_s x b_i x q_i]
    D --> E[Sort Pairs by EV Descending]
    E --> F[Greedy Top-k Allocation]
    F --> G{Winner Identified?}
    G -- Yes --> H[Compute Welfare of Others WITHOUT Winner i]
    G -- No --> I[Payment = 0]
    H --> J[Compute Welfare of Others WITH Winner i]
    J --> K[Clarke Pivot Payment p_i = W_without - W_with]
    K --> L[Charge Advertiser i p_i per click]
    L --> M[Display Ad on SERP]
    I --> M
    M --> N[Log Auction for Analytics]
    N --> O[End of Auction Cycle]
```

## 4.2 Modular Architecture of an Internet Ad Auction Platform

```mermaid
graph LR
    subgraph IN[INPUT LAYER]
        IN1[User Search Query]
        IN2[Advertiser Bid Stream]
        IN3[Ad Inventory Database]
    end

    subgraph PROC[PROCESSING LAYER]
        P1[Query Matching Engine]
        P2[Bid Normalization Module]
        P3[Quality Score Calculator]
        P4[VCG/GSP Auction Engine]
        P5[Pivot Payment Calculator]
    end

    subgraph OUT[OUTPUT LAYER]
        O1[Ranked Ad Slots]
        O2[Billing Records]
        O3[Performance Dashboard]
    end

    IN1 --> P1
    IN2 --> P2
    IN3 --> P1
    P1 --> P3
    P2 --> P3
    P3 --> P4
    P4 --> P5
    P4 --> O1
    P5 --> O2
    P4 --> O3
```

## 4.3 Decision Flow: Truthful vs. Strategic Bidding

```mermaid
flowchart TD
    Start[Advertiser Decides Bid] --> Q1{What is your true value per click v_i?}
    Q1 -- Report true v_i --> Truthful[Truthful Bid: b_i = v_i]
    Q1 -- Overbid b_i > v_i --> Over[Overbid: risk overpaying, lose money]
    Q1 -- Underbid b_i < v_i --> Under[Underbid: risk losing slot]

    Truthful --> Outcome1[VCG guarantees: u_truthful >= u_any_other_bid]
    Over --> Outcome2[Utility decreases or stays same under VCG]
    Under --> Outcome3[Utility decreases or stays same under VCG]

    Outcome1 --> End[Equilibrium: b_i = v_i Dominant Strategy]
    Outcome2 --> End
    Outcome3 --> End
```

## 4.4 Sequential Processing Topology Matrix

| **Stage** | **Module** | **Input** | **Output** | **Latency SLA** |
|---|---|---|---|---|
| 1 | Query Parsing | Raw search query | Token vector | < 5 ms |
| 2 | Advertiser Filtering | Bid database | Active advertisers | < 10 ms |
| 3 | CTR Estimation | Slot history | $\alpha_s$ per slot | < 20 ms |
| 4 | Quality Score Calc | Ad relevance model | $q_i \in [0, 10]$ | < 30 ms |
| 5 | VCG Allocation | Scores $V_i(s)$ | Slot assignments | < 50 ms |
| 6 | Payment Calc | Clarke pivot | $p_i$ per winner | < 20 ms |
| 7 | SERP Rendering | Ad creatives | Displayed page | < 100 ms |
| **Total** | **End-to-End** | **Query** | **Auctioned SERP** | **< 200 ms** |

> [!NOTE]
> **Diagram Note:** All Mermaid node IDs are purely alphanumeric and prefixed with letters (e.g., `IN1`, `P1`, `O1`) to comply with the Mermaid compilation safeguards.

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A: Short-Answer Questions (3 Marks Each)

### **Q1.** [KTU University Exam — July 2024]
**Define the Vickrey-Clarke-Groves (VCG) mechanism. State its two key properties.**

**Model Answer (3 Marks):**
The VCG mechanism is a direct revelation mechanism that allocates items to maximize social welfare and charges each agent the welfare loss they impose on others. **[1 Mark]**
**Two key properties:**
1. **Efficiency (Social Welfare Maximization):** The allocation rule maximizes $\sum_i v_i(x_i)$. **[1 Mark]**
2. **Truthfulness (Dominant-Strategy Incentive Compatibility):** Truth-telling is a dominant strategy for every agent. **[1 Mark]**

---

### **Q2.** [KTU University Exam — Dec 2023]
**What is the Clarke pivot rule? How is it used to compute VCG payments in sponsored search auctions?**

**Model Answer (3 Marks):**
The Clarke pivot rule states that agent $i$ pays the difference between the maximum social welfare achievable by others *without* $i$ and the welfare achieved by others *with* $i$ in the allocation. **[1.5 Marks]**
In sponsored search, the payment of advertiser $i$ (allocated slot $s$) equals: $p_i = \sum_{j \neq i} V_j(s^*_j) \text{ (without } i\text{)} - \sum_{j \neq i} V_j(s^*_j) \text{ (with } i\text{)}$ **[1.5 Marks]**

---

## 5.2 Part B: Long-Answer Questions (14 Marks Each)

### **Question A (14 Marks)** [KTU University Exam — Model Paper 2024]

> **(a) [7 Marks]** Derive the VCG payment formula. Prove that under VCG, truth-telling is a dominant strategy.

> **(b) [7 Marks]** Apply the VCG mechanism to a sponsored search auction with **3 advertisers and 2 slots**. Slot CTRs: $\alpha_1 = 0.4$, $\alpha_2 = 0.1$. Bids: $v_1 = \$5$, $v_2 = \$4$, $v_3 = \$2$. Compute the welfare-maximizing allocation, all VCG payments, and verify individual rationality.

---

### **Model Solution for Question A**

#### Part (a) — Derivation & Truthfulness Proof [7 Marks]

**Step 1: Setup [1 Mark]**
Consider $n$ agents with true valuations $v_i$ and reported bids $b_i$. The mechanism chooses allocation $x^*(b)$ and charges $p_i(b)$.

**Step 2: Allocation Rule [1 Mark]**
The VCG allocation maximizes social welfare:
$$x^*(b) \in \arg\max_{x \in A} \sum_{i=1}^{n} b_i(x_i)$$

**Step 3: Payment Rule [1 Mark]**
The VCG payment is the Clarke pivot payment:
$$p_i(b) = h_i(b_{-i}) - \sum_{j \neq i} b_j(x^*_j(b))$$
where $h_i(b_{-i}) = \max_{x \in A} \sum_{j \neq i} b_j(x_j)$ is the maximum welfare of others ignoring $i$.

**Step 4: Agent's Utility [1 Mark]**
Agent $i$'s quasi-linear utility is:
$$u_i(b_i, b_{-i}) = v_i(x^*_i) - p_i(b) = v_i(x^*_i) - h_i(b_{-i}) + \sum_{j \neq i} b_j(x^*_j)$$

**Step 5: Dominant Strategy Proof [2 Marks]**
Rearranging:
$$u_i = \left[ v_i(x^*_i) + \sum_{j \neq i} b_j(x^*_j) \right] - h_i(b_{-i})$$
The bracketed term equals $\sum_{j=1}^{n} b_j(x^*_j)$ if $b_i = v_i$. The mechanism **maximizes** this term by construction. Thus, agent $i$ maximizes utility by setting $b_i = v_i$, **regardless of $b_{-i}$**. Hence, truth-telling is a **dominant strategy**. ✓

**Step 6: Conclusion [1 Mark]**
The VCG mechanism is **dominant-strategy incentive-compatible (DSIC)** and **efficient**.

#### Part (b) — Numerical Sponsored Search Problem [7 Marks]

**Step 1: Compute $V_i(s) = \alpha_s \cdot v_i$ [1 Mark]**
$$
\begin{aligned}
V_1(\text{slot 1}) &= 0.4 \times 5 = \$2.00 \\
V_1(\text{slot 2}) &= 0.1 \times 5 = \$0.50 \\
V_2(\text{slot 1}) &= 0.4 \times 4 = \$1.60 \\
V_2(\text{slot 2}) &= 0.1 \times 4 = \$0.40 \\
V_3(\text{slot 1}) &= 0.4 \times 2 = \$0.80 \\
V_3(\text{slot 2}) &= 0.1 \times 2 = \$0.20
\end{aligned}
$$

**Step 2: Optimal Allocation [1 Mark]**
- Slot 1 → Advertiser 1: $\$2.00$ (highest)
- Slot 2 → Advertiser 2: $\$0.40$ (second highest)
- Advertiser 3: unassigned

**Step 3: Total Welfare [1 Mark]**
$$\text{SW}^* = 2.00 + 0.40 = \$2.40$$

**Step 4: VCG Payment for Advertiser 1 [1.5 Marks]**
Without Advertiser 1: Slot 1 → Adv 2 (\$1.60), Slot 2 → Adv 3 (\$0.20), welfare of others = $\$1.80$.
With Advertiser 1: welfare of others = $\$0.40$.
$$p_1^{\text{VCG}} = 1.80 - 0.40 = \$1.40$$

**Step 5: VCG Payment for Advertiser 2 [1.5 Marks]**
Without Advertiser 2: Slot 1 → Adv 1 (\$2.00), Slot 2 → Adv 3 (\$0.20), welfare = $\$2.20$.
With Advertiser 2: welfare of others = $\$2.00$.
$$p_2^{\text{VCG}} = 2.20 - 2.00 = \$0.20$$

**Step 6: Verify IR [1 Mark]**
$$
\begin{aligned}
u_1 &= 2.00 - 1.40 = \$0.60 \geq 0 \quad \checkmark \\
u_2 &= 0.40 - 0.20 = \$0.20 \geq 0 \quad \checkmark \\
u_3 &= 0.00 - 0.00 = \$0.00 \geq 0 \quad \checkmark
\end{aligned}
$$

**Valuation Key Point Allocation:**
- '[Stating expected value formula: 1 Mark]'
- '[Correct allocation logic: 1 Mark]'
- '[Welfare computation: 1 Mark]'
- '[Both VCG payments: 3 Marks total]'
- '[IR verification: 1 Mark]'

---

### **Question B (14 Marks — Alternative Choice)** [KTU University Exam — Model Paper 2024]

> **(a) [7 Marks]** Compare the VCG mechanism with the Generalized Second-Price (GSP) auction. Why do real-world platforms like Google Ads use GSP instead of VCG? Discuss with respect to truthfulness, revenue, and computational complexity.

> **(b) [7 Marks]** A search engine uses a VCG mechanism to allocate 3 ad slots with CTRs $\alpha_1 = 0.6$, $\alpha_2 = 0.3$, $\alpha_3 = 0.1$ to 4 advertisers with values per click $v_1 = \$10$, $v_2 = \$8$, $v_3 = \$5$, $v_4 = \$3$. Compute the welfare-maximizing allocation and the VCG payment for **each winner**.

---

#### Model Solution Sketch for Question B

**Part (a):** Tabular comparison between VCG and GSP across (i) truthfulness [2], (ii) revenue comparison [2], (iii) computational complexity [2], (iv) Nash equilibrium vs. dominant strategy [1].

**Part (b):**
- Compute $V_i(s) = \alpha_s \cdot v_i$ for all $4 \times 3 = 12$ pairs [1 Mark].
- Top-3 pairs by EV: (Adv 1, Slot 1) = \$6.00, (Adv 2, Slot 1) = \$4.80, (Adv 1, Slot 2) = \$3.00, (Adv 2, Slot 2) = \$2.40, (Adv 3, Slot 1) = \$3.00, etc. [2 Marks]
- Greedy optimal: Slot 1 → Adv 1, Slot 2 → Adv 2, Slot 3 → Adv 3 [1 Mark]
- Total welfare = $6.00 + 2.40 + 0.50 = \$8.90$ [1 Mark]
- Compute pivot payments for winners by re-running without each [2 Marks]

> [!WARNING]
> **KTU Examiner's Valuation Pitfall Callout:**
> 1. **Common Mistake 1:** Students often confuse **VCG payment formula** ($p_i = h_i - \sum_{j \neq i} v_j$) with the **Vickrey (2nd-price) payment** ($p_i = $ second-highest bid). In a multi-item, multi-slot setting, you MUST use the **Clarke pivot rule**, not the simple 2nd-price rule. **[Lose 2–3 Marks]**
> 2. **Common Mistake 2:** Forgetting to compute the welfare of others **without** the agent when computing pivot payments. The pivot payment is the **harm imposed on others**, not the value of the slot. **[Lose 2 Marks]**
> 3. **Common Mistake 3:** Failing to verify **Individual Rationality (IR)** — every agent's utility must be $\geq 0$. Always check $u_i = v_i(x_i) - p_i \geq 0$. **[Lose 1 Mark]**
> 4. **Common Mistake 4:** Confusing VCG with GSP in numerical problems. GSP payment = $(\alpha_{s+1} / \alpha_s) \cdot b_{s+1}$; VCG payment = pivot welfare loss. They differ! **[Lose 2 Marks]**

---

## 5.3 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **🚀 KTU PECST753 — Module 4 Rapid Revision Checklist**

- ✅ **VCG Mechanism:** Direct revelation mechanism maximizing social welfare; consists of welfare-maximizing allocation + Clarke pivot payment.
- ✅ **Clarke Pivot Rule:** $p_i = h_i(v_{-i}) - \sum_{j \neq i} v_j(x^*_j)$ — the harm agent $i$ imposes on others.
- ✅ **Truthfulness:** VCG is **DSIC** (Dominant-Strategy Incentive-Compatible). Truth-telling is the **dominant strategy**, not just Nash.
- ✅ **Sponsored Search Auction:** $k$ slots with CTRs $\alpha_1 > \alpha_2 > \dots > \alpha_k$ allocated to $n$ advertisers.
- ✅ **Expected Value Formula:** $V_i(s) = \alpha_s \cdot v_i$ — never confuse with bid $b_i$.
- ✅ **Welfare Maximization Rule:** Assign slot $s$ to advertiser with the $s$-th highest expected value.
- ✅ **Individual Rationality (IR):** $u_i = v_i(x^*_i) - p_i \geq 0$ for all $i$.
- ✅ **VCG vs. GSP:**
  - VCG = truthful, lower revenue, $O(nk)$ per query
  - GSP = not truthful, higher revenue, $O(n \log n)$ per query
  - Real systems (Google, Meta) use **GSP**; VCG is the theoretical benchmark.
- ✅ **Quality Score (Google's extension):** $V_i(s) = \alpha_s \cdot q_i \cdot v_i$ where $q_i$ incorporates ad relevance, CTR history, and landing page quality.
- ✅ **Production Scale:** Internet ad auctions must complete in < 200 ms end-to-end across millions of advertisers — a key engineering constraint.
- ✅ **Key Constants to Memorize:** CTRs typically range from 0.01 to 0.50; CPC bids from \$0.10 to \$50+; sponsored search contributes ~30% of Google's revenue.
- ✅ **Why VCG Matters for CS/Engineering:** Forms the theoretical foundation for **truthful cloud resource allocation**, **blockchain transaction ordering (MEV)**, **spectrum auctions**, and **fair ML-based recommender systems**.

<!-- SECTION_5_END -->
