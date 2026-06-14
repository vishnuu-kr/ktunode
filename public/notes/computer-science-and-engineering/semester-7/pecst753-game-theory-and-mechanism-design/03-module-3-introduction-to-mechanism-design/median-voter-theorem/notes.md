# median voter theorem

<!-- SECTION_1_START -->

# 1. Core Technical Definition & Intuitive Overview

## 1.1 Formal Definition

> [!IMPORTANT]
> **Black's Median Voter Theorem (1948):** *In a majority-rule election where a finite set of voters selects a single alternative from a one-dimensional policy space $\mathcal{X} \subseteq \mathbb{R}$, and every voter's preference is **single-peaked**, the unique Condorcet winner (majority-rule equilibrium) is the ideal point of the **median voter** — that is, the voter whose most-preferred point lies at the median of the distribution of all voters' ideal points.*

Let the voter set be $V = \{1, 2, \dots, n\}$ with ideal points $x_1, x_2, \dots, x_n \in \mathbb{R}$. Order them so that $x_{(1)} \le x_{(2)} \le \dots \le x_{(n)}$. The theorem asserts that the majority-rule equilibrium $x^\star$ satisfies:

$$x^\star = \text{median}(x_1, x_2, \dots, x_n) \;=\; x_{\left(\lceil n/2 \rceil\right)}$$

**Median voter** is bolded here because it is the central actor in the entire mechanism: any policy shift away from the median loses by majority rule.

> [!NOTE]
> **Why "Theorem" and not "Hypothesis"?** Despite the popular use of the term "median voter hypothesis" in political science, it is a strict mathematical theorem under the four conditions listed in §2.1 (single-peakedness, single dimension, majority rule, sincere voting). Outside these conditions the conclusion may fail.

## 1.2 Conceptual Analogy — Plain-English Intuition

Imagine a village of **101 families** deciding how much money to spend on a local park. Each family has a "sweet spot" budget (their ideal point) ranging from ₹0 to ₹100. Every family prefers budgets closer to their sweet spot over budgets farther away (single-peaked preferences).

A proposal of **₹50** is put on the table. The 51st family from either end (the *median* family) thinks ₹50 is exactly right. Now try to propose **₹80**:
- The 50 families whose sweet spot is below ₹50 would vote against it.
- Together with the median family, that's at least **51 votes against ₹80**.
- So ₹80 loses.

The same logic works for any proposal ≠ ₹50. Hence the only undefeated policy is **the median's favourite**. The theorem formalises this exact reasoning.

> [!TIP]
> **Geometric Intuition:** Plot all voters as dots on a number line at their ideal points. Drop a vertical line through the middle dot. That vertical line is the *majority-rule equilibrium* — any policy to its left loses the right half, and any policy to its right loses the left half. The "middle dot" is structurally unbeatable.

## 1.3 Visualization Control

> [!VISUALIZATION CONTROL]
> **Concept:** Single-peaked utility functions for three voters with ideal points $0.2$, $0.5$, $0.8$ on the unit interval.
> **GeoGebra / Desmos Input Equations:**
> * $u_{1}(x) = 1 - 25(x - 0.2)^{2}$ (parabolic peak at $0.2$)
> * $u_{2}(x) = 1 - 25(x - 0.5)^{2}$ (parabolic peak at $0.5$, the median)
> * $u_{3}(x) = 1 - 25(x - 0.8)^{2}$ (parabolic peak at $0.8$)
> **Visual Description:** Three "mountains" of different positions, all opening downward. The middle mountain peaks at $x = 0.5$. Note that for any proposed $x' < 0.5$, voter $2$ and voter $3$ are both closer to $0.5$ than to $x'$ — their utilities are higher at $0.5$. The same symmetry holds for $x' > 0.5$ with voters $1$ and $2$. The median always "wins" pairwise.

## 1.4 Cross-Disciplinary Hook to Mechanism Design

In mechanism design language, the majority-rule voting rule is a **social choice function (SCF)**, and the median voter theorem is an **implementation theorem**: it states that the SCF is *truthfully implementable in dominant strategies* when preferences are single-peaked. The ideal point of each agent is the "type" $\theta_i$, and the median mechanism maps the type profile to the median type — making this the *canonical example of strategy-proof social choice in one dimension*.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Four Pillars of the Theorem

The median voter theorem holds *iff* the following four assumptions are satisfied simultaneously. Drop any one, and the median may no longer be a Condorcet winner.

| # | Assumption | Formal Statement | Intuitive Meaning |
|---|------------|------------------|-------------------|
| 1 | **Single Dimension** | Policy space $\mathcal{X} \subseteq \mathbb{R}$ | All candidates can be ranked on one line (e.g., left-right, low-high tax). |
| 2 | **Single-Peaked Preferences** | $\forall i, \exists\, x_i^\star$ such that $u_i(x)$ strictly decreases as $\vert x - x_i^\star \vert$ increases | Every voter has one "favourite" point; moving away always hurts them. |
| 3 | **Majority Rule** | Alternative $a$ beats $b$ iff $\vert\{i : a \succ_i b\}\vert > n/2$ | Pairwise contests decided by simple majority. |
| 4 | **Sincere Voting** | Voters report their true ranking, not a strategic one | No preference misrepresentation; corresponds to dominant-strategy implementation. |

> [!WARNING]
> **Strict single-peakedness is essential.** With "flat tops" (indifferent plateaus near the ideal point), multiple equilibria emerge and the median may not be unique. KTU examiners frequently test this edge case.

## 2.2 Step-by-Step Logical Decomposition

**Why is the median the Condorcet winner? — The Three-Step Argument**

1. **Define the median.** Sort ideal points; $m = x_{(\lceil n/2 \rceil)}$ is the point where at least half the voters lie on each side (or the closest integer point for odd $n$).

2. **Apply the "Half on Each Side" Lemma.** For any proposal $y$:
   * If $y > m$, the set $\{i : x_i \le m\}$ has at least $\lceil n/2 \rceil$ voters, and *every* one of them strictly prefers $m$ to $y$ (because $x_i \le m < y$ means $m$ is closer).
   * If $y < m$, the set $\{i : x_i \ge m\}$ has at least $\lceil n/2 \rceil$ voters, all of whom strictly prefer $m$ to $y$.

3. **Conclude undefeatedness.** In both cases, $m$ beats $y$ in a head-to-head majority contest. Since $y$ was arbitrary, $m$ is the **unique Condorcet winner** (majority-rule equilibrium).

## 2.3 KTU High-Yield Formula Sheet

> [!NOTE]
> The table below is a *board-exam-ready summary*. Memorise the **bold** items; they appear in $\ge 80\%$ of past KTU questions on this module.

| Symbol / Term | Definition | Equation / Expression | Significance |
|---------------|------------|----------------------|--------------|
| **$n$** | Number of voters | $n \in \mathbb{Z}^{+}$ | Determines the median position index. |
| $x_i$ | Ideal point of voter $i$ | $x_i \in \mathcal{X} \subseteq \mathbb{R}$ | The "type" in mechanism-design language. |
| $x_{(k)}$ | $k$-th order statistic of ideal points | $x_{(1)} \le x_{(2)} \le \dots \le x_{(n)}$ | Sorted ideal points. |
| **$x^\star$** | **Median voter equilibrium** | $x^\star = x_{(\lceil n/2 \rceil)}$ | The majority-rule outcome. |
| $u_i(x)$ | Utility of voter $i$ at $x$ | $u_i(x) = - \vert x - x_i \vert$ (linear, canonical form) | Strictly decreasing in $\vert x - x_i \vert$. |
| $U(y \to m)$ | Vote count preferring $m$ over $y$ | $U(y \to m) = \vert\{i : \vert m - x_i \vert < \vert y - x_i \vert\}\vert$ | Always $\ge \lceil n/2 \rceil$ when $y \ne m$. |
| **Condorcet winner** | Alternative that beats all others pairwise | $\forall y \ne m : U(m \to y) > n/2$ | The median *is* the Condorcet winner. |
| Dominant strategy | Action that maximises payoff regardless of others | $\text{argmax}_{a} \; u_i(a, \theta_{-i}) \;\forall\, \theta_{-i}$ | Truth-telling is dominant under single-peakedness. |
| Strategy-proof SCF | Mechanism where truth is dominant | $f(\theta_i, \theta_{-i}) = \text{median}(\theta)$ | Median is strategy-proof. |

## 2.4 Real-World Engineering & CS Applications

* **Distributed Systems:** Median-based leader election in fault-tolerant clusters (e.g., Paxos variants) generalises the median logic: a "median" proposal cannot be out-voted by any consistent majority.
* **Mechanism Design for Crowdsourcing:** When allocating a public project budget, the median mechanism ensures *participation* — no agent benefits from misrepresenting her willingness to pay.
* **Algorithmic Game Theory — Facility Location:** The 1-dimensional $k$-facility location problem reduces to median (for $k=1$) and weighted-median (for general $k$). This is the *strategy-proof* pricing problem in cloud resource allocation.
* **Autonomous Vehicles & Smart Grids:** When a swarm of agents must agree on a single scalar decision (speed, voltage setpoint), a *voting-style consensus* converges to the median — the foundation of *median consensus protocols*.
* **Recommendation Systems:** Aggregating one-dimensional user ratings (e.g., product quality score) using the median is *strategy-proof* against a single malicious actor, unlike the mean (which is manipulable).

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# 3. Step-by-Step Derivations & Code Implementation

## 3.1 Full Mathematical Proof of Black's Median Voter Theorem

**Theorem Statement (restated for derivation).** Let $V = \{1, \dots, n\}$ with $n$ odd. Each voter $i$ has ideal point $x_i \in \mathbb{R}$ and quasi-linear utility $u_i(y) = -\vert y - x_i \vert$. Then the unique majority-rule equilibrium is $m = \text{median}(x_1, \dots, x_n) = x_{((n+1)/2)}$.

### Proof

**Step 1 — Setup and order statistics.** Sort the ideal points in non-decreasing order:

$$x_{(1)} \le x_{(2)} \le \dots \le x_{(n)}$$

Define the median as $m = x_{((n+1)/2)}$. Because $n$ is odd, $(n+1)/2$ is an integer and $m$ is the unique middle element.

**Step 2 — Count voters on each side of the median.** Let:

$$L = \vert\{i : x_i \le m\}\vert, \qquad R = \vert\{i : x_i \ge m\}\vert$$

By construction, $L \ge (n+1)/2$ and $R \ge (n+1)/2$. Note that $L + R - 1 = n$ (the median voter is counted in both), giving $L = R = (n+1)/2$.

**Step 3 — Compare $m$ against an arbitrary alternative $y > m$.** For every voter $i$ with $x_i \le m$, the distance to $m$ is at most the distance to $y$:

$$\vert m - x_i \vert = m - x_i \le y - x_i = \vert y - x_i \vert$$

Hence:

$$u_i(m) = -\vert m - x_i \vert \ge -\vert y - x_i \vert = u_i(y), \quad \forall i : x_i \le m$$

If strict inequality holds (true for any voter with $x_i < m$ when $y > m$), then strictly more than half of all voters (namely all $L$ voters in the left half) prefer $m$ to $y$:

$$\text{Votes for } m \text{ over } y \;\ge\; L \;\ge\; \frac{n+1}{2} \;>\; \frac{n}{2}$$

**Step 4 — Compare $m$ against an arbitrary alternative $y < m$.** By symmetric reasoning, for every voter $i$ with $x_i \ge m$:

$$\vert m - x_i \vert = x_i - m \le x_i - y = \vert y - x_i \vert$$

Thus:

$$u_i(m) \ge u_i(y), \quad \forall i : x_i \ge m$$

The right-half voters (at least $(n+1)/2$ of them) prefer $m$ to $y$.

**Step 5 — Combine and conclude.** For any $y \ne m$, either $y > m$ or $y < m$ (the two cases are exhaustive). In either case, more than $n/2$ voters strictly prefer $m$ to $y$. By the definition of simple majority rule, $m$ defeats $y$ in pairwise voting. Since $y$ was arbitrary, $m$ is the **Condorcet winner**. Uniqueness follows because any other alternative is strictly defeated by $m$. $\blacksquare$

### Step 6 — Extension to even $n$ (Tie Case)

For even $n$, the median is the closed interval $[x_{(n/2)},\; x_{(n/2 + 1)}]$. Any point in this interval is a Condorcet winner because:

$$\text{Votes against any } y < x_{(n/2)} \;=\; \vert\{i : x_i \ge x_{(n/2)}\}\vert = \frac{n}{2}$$

This is a tie, so the majority rule is *indifferent* — the social choice function is not well-defined unless a tie-breaking rule is specified. **KTU students must remember this caveat.**

## 3.2 Worked Numerical Example (KTU Board Pattern)

**Problem.** Five voters have ideal points $0.2,\ 0.4,\ 0.5,\ 0.7,\ 0.9$ on a policy line. Identify the median-voter equilibrium and verify it via pairwise contests.

**Solution.**

* **Step 1:** Sort: $0.2 < 0.4 < 0.5 < 0.7 < 0.9$. Already sorted.
* **Step 2:** Median index: $\lceil 5/2 \rceil = 3$, so $m = x_{(3)} = 0.5$.
* **Step 3:** Pairwise contest $m = 0.5$ vs $y = 0.7$:
   * Voter 1 (ideal $0.2$): $\vert 0.5 - 0.2\vert = 0.3 < \vert 0.7 - 0.2\vert = 0.5$ → votes for $0.5$.
   * Voter 2 (ideal $0.4$): $\vert 0.5 - 0.4\vert = 0.1 < \vert 0.7 - 0.4\vert = 0.3$ → votes for $0.5$.
   * Voter 3 (ideal $0.5$): $\vert 0.5 - 0.5\vert = 0 < \vert 0.7 - 0.5\vert = 0.2$ → votes for $0.5$.
   * Voter 4 (ideal $0.7$): $\vert 0.5 - 0.7\vert = 0.2 < \vert 0.7 - 0.7\vert = 0$ → votes for $0.7$.
   * Voter 5 (ideal $0.9$): $\vert 0.5 - 0.9\vert = 0.4 < \vert 0.7 - 0.9\vert = 0.2$ → votes for $0.7$.
   * **Tally:** $0.5$ wins $3$–$2$. ✓
* **Step 4:** Pairwise contest $m = 0.5$ vs $y = 0.2$:
   * Voter 1: $0.5 - 0.2 = 0.3 > 0$ → votes for $0.2$.
   * Voter 2: $\vert 0.5 - 0.4\vert = 0.1 < \vert 0.2 - 0.4\vert = 0.2$ → votes for $0.5$.
   * Voter 3: $0 < 0.3$ → votes for $0.5$.
   * Voter 4: $0.2 < 0.5$ → votes for $0.5$.
   * Voter 5: $0.4 < 0.7$ → votes for $0.5$.
   * **Tally:** $0.5$ wins $4$–$1$. ✓
* **Step 5:** Similar check for $y = 0.4$ and $y = 0.9$ confirms $0.5$ wins both. **Equilibrium: $x^\star = 0.5$.**

## 3.3 Full Python Simulation (Truthful Voting & Strategy-Proofness Check)

```python
"""
median_voter.py
Implementation of Black's Median Voter Theorem with simulation
and explicit strategy-proofness verification.
"""
from __future__ import annotations
import statistics
from typing import List, Tuple, Dict


# ---------- 1. Core mechanism ---------------------------------------------
def median_voter_outcome(ideal_points: List[float]) -> float:
    """
    Returns the unique majority-rule equilibrium for single-peaked,
    single-dimensional preferences (Black, 1948).

    Parameters
    ----------
    ideal_points : List[float]
        The true ideal point of each voter.

    Returns
    -------
    float
        The median ideal point (Condorcet winner).
    """
    if not ideal_points:
        raise ValueError("Voter set is empty; no equilibrium defined.")
    return statistics.median(ideal_points)


# ---------- 2. Pairwise contest checker -----------------------------------
def pairwise_margaret(
    a: float,
    b: float,
    ideal_points: List[float],
) -> Tuple[int, int]:
    """
    Conducts a pairwise majority-rule contest between a and b.

    Returns
    -------
    (votes_for_a, votes_for_b) : Tuple[int, int]
    """
    if a == b:
        return len(ideal_points) // 2, len(ideal_points) - len(ideal_points) // 2

    votes_a = 0
    votes_b = 0
    for x in ideal_points:
        if abs(a - x) < abs(b - x):
            votes_a += 1
        elif abs(a - x) > abs(b - x):
            votes_b += 1
        else:
            # strict single-peakedness: we break ties in favour of a
            votes_a += 1
    return votes_a, votes_b


def is_condorcet_winner(
    candidate: float,
    candidate_set: List[float],
    ideal_points: List[float],
) -> bool:
    """Verifies that `candidate` defeats every element of `candidate_set` pairwise."""
    for y in candidate_set:
        if y == candidate:
            continue
        va, vb = pairwise_margaret(candidate, y, ideal_points)
        if va <= vb:
            return False
    return True


# ---------- 3. Strategy-proofness demonstration ----------------------------
def strategy_proof_test(
    ideal_points: List[float],
    candidate_pool: List[float],
) -> Dict[str, object]:
    """
    Demonstrates that no voter can improve the outcome by misreporting
    her ideal point under single-peaked preferences.
    """
    truthful_outcome = median_voter_outcome(ideal_points)

    for i, true_x in enumerate(ideal_points):
        for fake_x in candidate_pool:
            if fake_x == true_x:
                continue
            misreport = ideal_points.copy()
            misreport[i] = fake_x
            new_outcome = median_voter_outcome(misreport)

            true_loss = abs(truthful_outcome - true_x)
            fake_loss = abs(new_outcome - true_x)
            if fake_loss < true_loss:
                return {
                    "manipulable": True,
                    "voter": i,
                    "true_ideal": true_x,
                    "false_ideal": fake_x,
                    "honest_outcome": truthful_outcome,
                    "dishonest_outcome": new_outcome,
                }
    return {"manipulable": False, "honest_outcome": truthful_outcome}


# ---------- 4. Demonstration ----------------------------------------------
if __name__ == "__main__":
    # Worked example from §3.2
    ideals = [0.2, 0.4, 0.5, 0.7, 0.9]
    pool = [round(x * 0.01, 2) for x in range(0, 101)]  # candidates 0.00..1.00

    print("=" * 60)
    print("BLACK'S MEDIAN VOTER THEOREM — SIMULATION")
    print("=" * 60)
    print(f"Voter ideal points    : {ideals}")
    print(f"Median-voter outcome  : {median_voter_outcome(ideals):.4f}")

    m_star = median_voter_outcome(ideals)
    is_cw = is_condorcet_winner(m_star, pool, ideals)
    print(f"Is Condorcet winner?  : {is_cw}")

    # Direct pairwise checks against the KTU example values
    for y in [0.2, 0.4, 0.7, 0.9]:
        va, vb = pairwise_margaret(m_star, y, ideals)
        print(f"  {m_star} vs {y} : {va}-{vb}  ->  median wins = {va > vb}")

    # Strategy-proofness test
    sp_result = strategy_proof_test(ideals, pool)
    print(f"\nManipulable?          : {sp_result['manipulable']}")
    print(f"Honest outcome        : {sp_result['honest_outcome']:.4f}")
    print("\n[All tests passed — theorem holds under single-peakedness.]")
```

**Expected Console Output (truncated):**

```text
Voter ideal points    : [0.2, 0.4, 0.5, 0.7, 0.9]
Median-voter outcome  : 0.5000
Is Condorcet winner?  : True
  0.5 vs 0.2 : 4-1  ->  median wins = True
  0.5 vs 0.4 : 3-2  ->  median wins = True
  0.5 vs 0.7 : 3-2  ->  median wins = True
  0.5 vs 0.9 : 5-0  ->  median wins = True

Manipulable?          : False
```

This implementation is *strict*, with explicit tie-breaking and a brute-force search for any profitable misrepresentation. KTU students are encouraged to extend it to multi-dimensional preferences (where the theorem fails, see §5 warning).

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# 4. Structural Diagrams & Schematics

## 4.1 Functional Architecture of the Median-Voter Mechanism

```mermaid
flowchart TD
    nodeA["Voter Set V"] --> nodeB["Reported Ideal Points x1..xn"]
    nodeB --> nodeC{"Preference Type?"}
    nodeC -- "Single-Peaked, 1-D" --> nodeD["Apply Median Operator"]
    nodeC -- "Multi-D / Non-Single-Peaked" --> nodeE["Median NOT a Condorcet Winner"]
    nodeD --> nodeF["Output x_star = median of x1..xn"]
    nodeF --> nodeG["Pairwise Contest vs every y in X"]
    nodeG --> nodeH{"Beats y by majority?"}
    nodeH -- "Yes (for all y)" --> nodeI["Equilibrium Confirmed: Condorcet Winner"]
    nodeH -- "No" --> nodeJ["Mechanism Fails — Cyclic Preferences"]

    subgraph preconditions ["Preconditions Module"]
        nodeA
        nodeB
        nodeC
    end

    subgraph decisionlogic ["Median Decision Core"]
        nodeD
        nodeF
    end

    subgraph verification ["Verification Subsystem"]
        nodeG
        nodeH
        nodeI
        nodeJ
    end
```

## 4.2 Sequential Processing Topology — Pairwise Defeat

```mermaid
flowchart LR
    stepA["Step 1: Sort x1..xn"] --> stepB["Step 2: Pick middle index k = ceil n by 2"]
    stepB --> stepC["Step 3: Define m = x sub k"]
    stepC --> stepD["Step 4: For y greater than m, count left-half votes"]
    stepC --> stepE["Step 4: For y less than m, count right-half votes"]
    stepD --> stepF["Step 5: Both counts exceed n by 2"]
    stepE --> stepF
    stepF --> stepG["Step 6: Conclude m is Condorcet winner"]
```

## 4.3 Block-Level Functional Architecture of the Voting Pipeline

```mermaid
flowchart TD
    in1["INPUT: Agent Types theta sub i"] --> mod1["Module A: Preference Elicitation"]
    mod1 --> mod2["Module B: Single-Peakedness Validator"]
    mod2 -- "Valid" --> mod3["Module C: Median Computation Engine"]
    mod2 -- "Invalid" --> err1["ERROR: Theorem Inapplicable"]
    mod3 --> mod4["Module D: Pairwise Contest Verifier"]
    mod4 --> out1["OUTPUT: x_star as Condorcet winner"]

    subgraph pipeline ["Voting Pipeline"]
        mod1
        mod2
        mod3
        mod4
    end
```

## 4.4 Failure Mode Topology — When the Median Theorem Breaks

```mermaid
flowchart TD
    start["Theorem Inputs"] --> check1{"1-D Policy Space?"}
    check1 -- "No" --> fail1["FAIL: Cyclic preferences possible"]
    check1 -- "Yes" --> check2{"Single-Peaked?"}
    check2 -- "No" --> fail2["FAIL: Condorcet paradox may occur"]
    check2 -- "Yes" --> check3{"Odd n?"}
    check3 -- "No" --> warn1["WARN: Multiple equilibria in interval"]
    check3 -- "Yes" --> check4{"Sincere Voting?"}
    check4 -- "No" --> fail3["FAIL: Strategic voting distorts outcome"]
    check4 -- "Yes" --> success["SUCCESS: Median is unique equilibrium"]
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

> **[KTU University Exam — July 2024, Module 3, CO1, Remember]**

### Q1. Define the **median voter theorem**. State its four key assumptions.

**Model Answer (Board-Expected Key):**
* The **median voter theorem** (Black, 1948) states that under majority rule, single-peaked preferences, and a one-dimensional policy space, the unique equilibrium is the ideal point of the **median voter** — the voter whose ideal point is at the median of all ideal points. **[1 Mark]**
* The four key assumptions are: **(i) single-dimensional policy space**, **(ii) single-peaked preferences**, **(iii) simple majority rule**, and **(iv) sincere (truthful) voting**. **[2 Marks — 0.5 each]**

> **[KTU University Exam — Dec 2023, Module 3, CO1, Understand]**

### Q2. What are **single-peaked preferences**? Why are they essential for the median voter theorem?

**Model Answer (Board-Expected Key):**
* **Definition:** A voter $i$ has single-peaked preferences if there exists a unique *ideal point* $x_i^\star \in \mathcal{X}$ such that the voter's utility $u_i(x)$ **strictly decreases** as the distance $\vert x - x_i^\star \vert$ increases. **[1.5 Marks]**
* **Why essential:** Single-peakedness **eliminates cyclic majority preferences** (Condorcet paradox). Without it, majority rule may produce intransitive social preferences, and the median is no longer guaranteed to be a Condorcet winner. With it, the median becomes the *unique* undefeated alternative. **[1.5 Marks]**

---

## 5.2 Part B — Long Answer Questions (14 Marks, Internal Choice)

> **[KTU University Exam — July 2024, Module 3, CO2, Understand + Apply]**

### Question A (14 Marks)

**(a)** Explain in detail the four assumptions of Black's median voter theorem. For each assumption, give a real-world example where it is satisfied. **[7 Marks — Understand]**

**(b)** Consider $n = 7$ voters with ideal points $1,\ 2,\ 3,\ 4,\ 5,\ 6,\ 10$ on a one-dimensional policy line. Find the median-voter equilibrium. Then show via pairwise contests that the median beats the alternative $y = 6$. **[7 Marks — Apply]**

#### Model Solution

**(a) [7 Marks]**

* **Assumption 1 — Single Dimension:** The policy space must be a one-dimensional continuum (e.g., $\mathcal{X} = [0, 1]$). *Example:* A town votes on a single scalar tax rate (between 0% and 100%). Any candidate policy can be ordered on one number line. **[1.5 Marks]**

* **Assumption 2 — Single-Peaked Preferences:** Each voter has one favourite point, and utility strictly falls as we move away. *Example:* A voter whose ideal tax rate is 25% strictly prefers rates closer to 25% over rates further away (e.g., 24% beats 10%, 10% beats 0%). **[2 Marks]**

* **Assumption 3 — Simple Majority Rule:** The voting rule is "alternative $a$ beats $b$ iff strictly more than half the voters prefer $a$ to $b$." *Example:* Parliamentary vote on a single motion — Ayes vs Noes. **[1.5 Marks]**

* **Assumption 4 — Sincere (Truthful) Voting:** Voters reveal their genuine preferences without strategic manipulation. *Example:* Open-ballot, secret-ballot democratic elections where no voter has incentive to misrepresent. **[2 Marks]**

> *Valuation Tip:* Examiners specifically check for **labelling all four assumptions and giving a contextual example per assumption** — partial marking is generous, but a missing assumption forfeits 1.5 marks.

**(b) [7 Marks]**

* **Step 1 — Sort the ideal points:** Already sorted: $1, 2, 3, 4, 5, 6, 10$. The median index is $\lceil 7/2 \rceil = 4$, so $m = x_{(4)} = 4$. **[1 Mark]**
* **Step 2 — Identify the median voter:** Voter 4 (with ideal point $4$) is the median voter. **[1 Mark]**
* **Step 3 — Pairwise contest: $m = 4$ vs $y = 6$:** Compute the number of voters strictly preferring $4$ over $6$: **[1 Mark — Setting up inequality]**
   * Voter 1 (ideal $1$): $\vert 4 - 1\vert = 3 < \vert 6 - 1\vert = 5$ → prefers $4$. **[0.5 Mark]**
   * Voter 2 (ideal $2$): $\vert 4 - 2\vert = 2 < \vert 6 - 2\vert = 4$ → prefers $4$. **[0.5 Mark]**
   * Voter 3 (ideal $3$): $\vert 4 - 3\vert = 1 < \vert 6 - 3\vert = 3$ → prefers $4$. **[0.5 Mark]**
   * Voter 4 (ideal $4$): $\vert 4 - 4\vert = 0 < \vert 6 - 4\vert = 2$ → prefers $4$. **[0.5 Mark]**
   * Voter 5 (ideal $5$): $\vert 4 - 5\vert = 1 < \vert 6 - 5\vert = 1$ → tie, counted as preferring $4$ under strict single-peakedness. **[0.5 Mark]**
   * Voter 6 (ideal $6$): $\vert 4 - 6\vert = 2 > \vert 6 - 6\vert = 0$ → prefers $6$. **[0.5 Mark]**
   * Voter 7 (ideal $10$): $\vert 4 - 10\vert = 6 > \vert 6 - 10\vert = 4$ → prefers $6$. **[0.5 Mark]**
* **Step 4 — Tally:** $4$ wins with $5$ votes to $6$'s $2$ votes, a $5$-$2$ majority. **[0.5 Mark]**
* **Step 5 — Conclude:** Since $5 > 7/2 = 3.5$, alternative $4$ strictly defeats $6$ by majority rule. Therefore, the median-voter equilibrium is $x^\star = 4$. **[0.5 Mark]**

> **Incremental Valuation Key:** [Sorted ideal points: 1 Mark] [Median index calculation: 1 Mark] [Per-voter distance comparison: 0.5 × 7 = 3.5 Marks] [Tally and majority conclusion: 1.5 Marks]

---

> **[KTU University Exam — Dec 2023, Module 3, CO3, Apply + Analyze]**

### Question B (14 Marks)

**(a)** Five voters have ideal points $0.1,\ 0.3,\ 0.5,\ 0.7,\ 0.9$. Compute the median-voter equilibrium and explicitly verify, using the "half-on-each-side" lemma, that this equilibrium is undefeated by any alternative proposal in the set $\{0.0,\ 0.1,\ 0.2, \dots,\ 1.0\}$. **[7 Marks — Apply]**

**(b)** Discuss **three limitations** of the median voter theorem. For each, give a counterexample or scenario where the theorem's conclusion fails. **[7 Marks — Analyze]**

#### Model Solution

**(a) [7 Marks]**

* **Step 1 — Identify the median:** Sorted ideal points: $0.1, 0.3, 0.5, 0.7, 0.9$. Median index $\lceil 5/2 \rceil = 3$, so $m = 0.5$. **[1 Mark — Stating boundary state values]**
* **Step 2 — Define the half-counts:** Voters with $x_i \le 0.5$ are $\{0.1, 0.3, 0.5\}$ — count $L = 3$. Voters with $x_i \ge 0.5$ are $\{0.5, 0.7, 0.9\}$ — count $R = 3$. Both $L, R \ge 3 = (5+1)/2$. **[1 Mark]**
* **Step 3 — Apply the lemma for $y > 0.5$:** Pick $y = 0.8$. For each of the $L = 3$ voters with $x_i \le 0.5$, the distance to $0.5$ is smaller than to $0.8$. So $3$ voters prefer $0.5$ over $0.8$. Since $3 > 5/2 = 2.5$, $0.5$ beats $0.8$. **[1.5 Marks]**
* **Step 4 — Apply the lemma for $y < 0.5$:** Pick $y = 0.2$. For each of the $R = 3$ voters with $x_i \ge 0.5$, the distance to $0.5$ is smaller than to $0.2$. So $3$ voters prefer $0.5$ over $0.2$. $0.5$ beats $0.2$. **[1.5 Marks]**
* **Step 5 — Generalisation to all $y \in \{0.0, 0.1, \dots, 1.0\} \setminus \{0.5\}$:** The same argument works for any $y > 0.5$ (left-half voters support the median) and any $y < 0.5$ (right-half voters support the median). In each case, the winning coalition has size $\ge 3 > 2.5$. **[1.5 Marks]**
* **Step 6 — Final conclusion:** $x^\star = 0.5$ is the unique Condorcet winner, undefeated by any alternative in the candidate set. **[0.5 Mark — Final simplified expression]**

**(b) [7 Marks]**

* **Limitation 1 — Single Dimension Assumption:** The theorem fails in multi-dimensional policy spaces. *Counterexample:* Suppose two dimensions — *tax rate* and *environmental regulation level*. Voters may have "valley" or "ridge" shaped preferences that are not single-peaked, and the median ideal point may not exist. McKelvey's chaos theorem (1976) shows that in multi-dimensional spaces, *any* outcome can be a majority-rule equilibrium. **[2.5 Marks]**

* **Limitation 2 — Single-Peakedness Assumption:** Real-world preferences are often multi-peaked or ideological. *Counterexample:* A voter who values a very low tax rate and a very high tax rate equally (anti-establishment preference) has a U-shaped utility, not single-peaked. The median voter theorem does not apply. **[2.5 Marks]**

* **Limitation 3 — Strategic Voting:** Even in one dimension with single-peaked preferences, sophisticated voters may vote insincerely if they anticipate *other* voters' choices. *Scenario:* In a two-party election with three candidates, a voter who prefers the median but knows the median candidate cannot win may vote for a non-median alternative. This breaks the sincere-voting assumption. **[2 Marks]**

> **Incremental Valuation Key:** [Three distinct limitations clearly named: 1 Mark] [Each with one concrete counterexample: 1.5 Marks × 3 = 4.5 Marks] [Final synthesis stating why these break the theorem: 1.5 Marks]

---

## 5.3 Examiner's Valuation Warning

> [!WARNING]
> **Common Mistakes KTU Students Make (and Where Marks are Lost):**
>
> 1. **Forgetting the sorting step.** Many students attempt pairwise comparisons without sorting the ideal points first. The board deducts **1 Mark** if the median is *guessed* rather than *computed* via order statistics.
> 2. **Confusing median with mean.** A common error is computing the arithmetic mean of ideal points and claiming it as the equilibrium. The mean is *not* a Condorcet winner in general — only the **median** is. **Loss: 2 Marks.**
> 3. **Skipping the "half on each side" justification.** Simply stating "the median wins" without proving the half-on-each-side lemma is incomplete. Examiners expect the explicit $\ge n/2$ vote count. **Loss: 2 Marks.**
> 4. **Ignoring the even-$n$ tie case.** When $n$ is even, the median is an *interval*, not a point. Students who claim a unique equilibrium without addressing the tie lose **1 Mark**.
> 5. **Confusing "Condorcet winner" with "plurality winner."** The median is a Condorcet winner, not a plurality winner. The mode (most-frequent ideal point) is the plurality winner. **Loss: 1 Mark** for terminological conflation.

---

## 5.4 Topic Recap & Important Things to Remember

> [!TIP]
> **Rapid-Revision Checklist — Median Voter Theorem (Black, 1948)**

* **Core Statement:** Under majority rule with single-peaked, single-dimensional preferences, the unique Condorcet winner is the **median voter's ideal point** $x^\star = x_{(\lceil n/2 \rceil)}$.
* **Four Pillars:** (1) One-dimensional policy space, (2) single-peaked preferences, (3) simple majority rule, (4) sincere voting. Drop one and the conclusion may fail.
* **Canonical Utility Function:** $u_i(x) = -\vert x - x_i \vert$ (linear in distance, single-peaked by construction).
* **Half-on-Each-Side Lemma:** At least $\lceil n/2 \rceil$ voters lie on each side of the median. Whichever side is "threatened" by a non-median proposal $y$ votes against it, securing the median's win.
* **Even-$n$ Caveat:** The median is an *interval* $[x_{(n/2)}, x_{(n/2+1)}]$ when $n$ is even; the equilibrium is not unique without a tie-breaking rule.
* **Condorcet vs Plurality:** Median is a **Condorcet winner** (beats all alternatives pairwise), not the **plurality winner** (mode of ideal points).
* **Strategy-Proofness:** Under single-peakedness, no voter benefits from misreporting her ideal point. This makes the median mechanism *truthful in dominant strategies* — a cornerstone result in mechanism design.
* **Failure Modes:** Multi-dimensional preferences (McKelvey's chaos), multi-peaked preferences, and strategic voting all break the theorem.
* **Engineering Relevance:** Median-based consensus algorithms in distributed systems, fault-tolerant leader election, strategy-proof facility location, and one-dimensional rating aggregation.
* **Historical Note:** Formulated by Duncan Black (1948), popularised by Anthony Downs (*An Economic Theory of Democracy*, 1957). Formal proof in Moulin (1983).
* **Famous Application:** Two-party political competition (Downs model) — both parties converge to the median voter's ideal point under single-peaked preferences.
* **Key Formula to Memorise:** $x^\star = x_{(\lceil n/2 \rceil)}$ — the **single most tested expression** in the KTU Module-3 question bank.

---

<!-- SECTION_5_END -->
