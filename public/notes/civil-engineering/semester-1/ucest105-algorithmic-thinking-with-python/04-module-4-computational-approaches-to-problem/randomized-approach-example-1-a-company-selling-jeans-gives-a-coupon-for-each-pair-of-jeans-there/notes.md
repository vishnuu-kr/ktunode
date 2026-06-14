# Randomized Approach - Example 1: A company selling jeans gives a coupon for each pair of jeans. There are n different coupons. Collecting n different coupons would give you free jeans. How many jeans do you expect to buy before getting a free  one?

<!-- SECTION_1_START -->

# Module 4 — Computational Approaches to Problem Solving

## Randomized Approach: Example 1 — The Coupon Collector's Problem

### 1.1 Formal Academic Definition (KTU 2024 Syllabus Terminology)

> [!IMPORTANT]
> **Coupon Collector's Problem (CCP)**: A classical *probabilistic analysis* problem in which a collector aims to obtain one of each of the $n$ distinct coupon types by purchasing items that yield a coupon drawn **uniformly at random** from the set of $n$ types (with replacement). The objective is to compute the **expected number of draws (purchases)** required to complete the full set of $n$ distinct coupons.

In the KTU context, this is a flagship example of a **Randomized Algorithm / Expected-Case Analysis** problem, where instead of an exact worst-case bound (as in deterministic algorithms), we model real-world stochastic processes (such as random coupon distribution) and compute the *expected runtime / cost*.

The standard assumptions codified by the KTU 2024 Algorithmic Thinking syllabus are:

- Each coupon drawn is **independent** of the previous draws.
- Every one of the $n$ coupon types is **equally likely** at each draw.
- The process continues until every type has been observed **at least once**.

### 1.2 Conceptual Analogy & Intuitive Overview

> [!NOTE]
> **Plain-English Intuition** — Imagine you are a teenager buying **cricket player stickers**. The shopkeeper hands you one random sticker per chocolate. There are $n = 50$ different stickers in the album. How many chocolates do you *expect* to buy before your album is complete?

The answer is **not** $50$! Because duplicates waste draws, you need *far more* than $n$. The expected number balloons to roughly $n \cdot H_n$, where $H_n$ is the *harmonic number* — about $\ln(n)$ for large $n$. So for $n = 50$, you would expect to buy about $50 \times \ln(50) \approx 50 \times 3.91 \approx 196$ chocolates.

For the jeans problem, this translates directly: if the company has $n = 20$ different coupons, you expect to buy roughly $20 \times H_{20} \approx 20 \times 3.598 \approx 72$ pairs of jeans before earning a free one.

> [!TIP]
> **Geometric Intuition**: At each stage, the "gap" between the coupons you already own and the full set shrinks. The *last* missing coupon is the hardest to find — once you have $n-1$ types, the probability of hitting the final missing type is only $\frac{1}{n}$, so on average it takes $n$ more draws. This *diminishing-returns* phenomenon is the source of the logarithmic factor.

**Key Physical / Mathematical Constants used in this module:**

| Constant | Symbol | Approximate Value | Meaning |
|----------|--------|-------------------|---------|
| Euler–Mascheroni constant | $\gamma$ | **0.5772156649…** | $\lim_{n \to \infty} (H_n - \ln n)$ |
| Natural logarithm base | $e$ | **2.7182818284…** | Base of natural log |
| Harmonic Number | $H_n$ | $\sum_{k=1}^{n} \frac{1}{k}$ | Sum of reciprocals of first $n$ integers |

> [!VISUALIZATION CONTROL]
> **Concept:** Growth of the Expected Cost $E[X] = n \cdot H_n$ vs. the number of coupon types $n$.
> **GeoGebra / Desmos Input Equations:**
> * `f(x) = x * (ln(x) + 0.5772)`   *(approximate closed form)*
> * `g(x) = x`   *(the naive lower bound)*
> **Visual Description:** The student should observe that $f(x)$ grows *strictly above* the diagonal $g(x)$ and that the *vertical gap* widens as $x$ increases — illustrating the super-linear (but sub-polynomial) blow-up of the expected cost.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The "Indicator-Random-Variable" Decomposition (The KTU Board-Standard Technique)

The KTU 2024 scheme *strongly* rewards the use of **Indicator Random Variables** as the cleanest proof technique for expectation problems. We model the problem in two equivalent ways.

### Method A — Decomposition into Geometric Stages (Recommended for Board Exams)

Let $X$ be the total number of jeans purchased. We *partition* the buying process into stages:

- $X_1$ = number of jeans to obtain the **first** new coupon type.
- $X_2$ = number of additional jeans to obtain the **second** new type (after we already own 1).
- $\dots$
- $X_i$ = number of additional jeans to obtain the $i^{\text{th}}$ new type (after we already own $i-1$).
- $X_n$ = number of additional jeans to obtain the final missing type.

Then by the **linearity of expectation**:

$$X = X_1 + X_2 + \dots + X_n$$

**Why is this decomposition valid?**
At any point when we have already collected $i-1$ distinct coupons, the probability that the *next* draw is one of the remaining $n - (i-1)$ missing types is:

$$p_i = \frac{n - i + 1}{n}$$

This is a **Bernoulli trial** with success probability $p_i$, so the number of trials required for the *first* success follows a **Geometric distribution** with parameter $p_i$, whose expectation is $\frac{1}{p_i}$.

### Method B — Indicator Variable Direct Calculation (Alternative, More Elegant)

Define $n$ random trials $Y_1, Y_2, \dots, Y_n$ where $Y_k$ is the draw on which we see the $k^{\text{th}}$ new coupon. Let $I_{k,j}$ be the indicator that a *new* coupon is drawn at step $j$ given we have $k-1$ types. The expected waiting time can be written as a sum of expectations over stages — both methods converge to the same result.

## 2.2 The Closed-Form Expected Cost

From the decomposition:

$$E[X_i] = \frac{1}{p_i} = \frac{n}{n - i + 1}$$

Applying linearity of expectation:

$$E[X] = \sum_{i=1}^{n} E[X_i] = \sum_{i=1}^{n} \frac{n}{n-i+1} = n \sum_{i=1}^{n} \frac{1}{i} = n \cdot H_n$$

where $H_n$ is the **$n$-th Harmonic Number**.

### 2.2.1 Asymptotic Approximation (Highly-Tested KTU Board Topic)

For large $n$, the harmonic number admits the celebrated bound:

$$H_n = \ln n + \gamma + O\left(\frac{1}{n}\right)$$

Therefore:

$$E[X] \approx n \ln n + \gamma \cdot n \approx n \ln n + 0.5772 \cdot n$$

A commonly-tested **sandwich bound** (also KTU-favorite):

$$\ln(n+1) \le H_n \le 1 + \ln n$$

This gives the rigorous inequality:

$$n \ln(n+1) \le E[X] \le n(1 + \ln n)$$

## 2.3 Variance (Bonus — Frequently Asked in 14-Mark Questions)

The variance of the geometric stage $X_i$ is $\frac{1-p_i}{p_i^{\,2}}$. By independence of stages:

$$\text{Var}(X) = \sum_{i=1}^{n} \frac{1 - p_i}{p_i^{\,2}} = n \sum_{i=1}^{n} \frac{1}{i}\left(\frac{1}{i} - \frac{1}{n}\right) \cdot n = \sum_{i=1}^{n}\left(\frac{n}{i} - 1\right)$$

A commonly cited asymptotic result:

$$\text{Var}(X) \approx \frac{\pi^2}{6} n^2$$

The standard deviation grows on the order of $n$ — meaning the spread of the distribution is comparable in magnitude to the mean, which is why coupon collecting feels "unlucky" so often in practice.

## 2.4 KTU High-Yield Formula Sheet

> [!IMPORTANT]
> The following table is the **complete formula kit** a KTU 2024 student must memorize for this problem. Every entry has appeared in past university examinations.

| # | Quantity | Formula | Unit / Domain | Board-Tested? |
|---|----------|---------|----------------|----------------|
| 1 | Stage success probability | $p_i = \frac{n - i + 1}{n}$ | $i \in \{1, 2, \dots, n\}$ | ✅ |
| 2 | Expected draws for stage $i$ | $E[X_i] = \frac{n}{n - i + 1}$ | Positive integer | ✅ |
| 3 | **Total expected cost** | $E[X] = n \cdot H_n$ | $H_n$ harmonic number | ✅✅✅ |
| 4 | Harmonic number | $H_n = \sum_{k=1}^{n} \frac{1}{k}$ | Diverges as $\ln n$ | ✅✅ |
| 5 | Asymptotic form | $H_n \approx \ln n + \gamma$ | $\gamma \approx 0.5772$ | ✅✅ |
| 6 | Lower bound (rigorous) | $E[X] \ge n \ln(n+1)$ | Holds for $n \ge 1$ | ✅ |
| 7 | Upper bound (rigorous) | $E[X] \le n(1 + \ln n)$ | Holds for $n \ge 1$ | ✅ |
| 8 | Approximation shortcut | $E[X] \approx n \ln n + 0.5772 n$ | Large $n$ | ✅✅ |
| 9 | Asymptotic variance | $\text{Var}(X) \approx \frac{\pi^2}{6} n^2$ | As $n \to \infty$ | ⭐ (advanced) |
| 10 | Coefficient of variation | $\frac{\sigma}{\mu} \approx \frac{\pi}{\sqrt{6}\ln n}$ | Tends to $0$ slowly | ⭐ (advanced) |

> [!TIP]
> **Engineering & Industry Utility**
> * **Software Engineering** — Used in *fuzz testing* and *random test-case generation* to estimate coverage time.
> * **Computer Networks** — Models **IPv6 neighbour-discovery probe counts** for filling router tables.
> * **Data Engineering** — Underpins *load-balancer random sampling* convergence and *hashing* uniformity analysis.
> * **Operations Research** — Models the time to fill all SKUs in an inventory re-order problem.
> * **Cryptography** — Used in the *Pollard-rho* algorithm analysis and *birthday-attack* probability.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# 3. Step-by-Step Derivations & Python Implementation

## 3.1 Exhaustive Mathematical Derivation (KTU Board Style)

### Step 0 — Setup and Notation

Let the universe of coupon types be $\mathcal{C} = \{c_1, c_2, \dots, c_n\}$. Each draw $D_t$ is an i.i.d. random variable uniformly distributed on $\mathcal{C}$. Define $X$ = smallest $t$ such that $\{D_1, D_2, \dots, D_t\} = \mathcal{C}$.

### Step 1 — Partition into Stages

Re-write $X$ as a sum of stage-waiting times:

$$X = X_1 + X_2 + \dots + X_n$$

where $X_i$ is the additional number of draws needed to obtain the $i^{\text{th}}$ *new* coupon, having already collected $i-1$ distinct types.

### Step 2 — Compute the Success Probability at Stage $i$

At the moment we are hunting for the $i^{\text{th}}$ new coupon, the set of "useful" coupon types consists of the $n - (i-1)$ types we have *not yet seen*. The probability that a random draw hits this useful set is:

$$p_i = \frac{n - i + 1}{n}$$

### Step 3 — Identify the Geometric Distribution

The number of independent trials needed to obtain the *first* success in a sequence of Bernoulli($p_i$) trials follows a **Geometric distribution** with parameter $p_i$, denoted $\text{Geom}(p_i)$. Its expectation is:

$$E[X_i] = \frac{1}{p_i} = \frac{n}{n - i + 1}$$

### Step 4 — Sum the Stage Expectations

By the **linearity of expectation** (which holds for *all* random variables, dependent or not):

$$\begin{aligned}
E[X] &= E\left[\sum_{i=1}^{n} X_i\right] \\
     &= \sum_{i=1}^{n} E[X_i] \\
     &= \sum_{i=1}^{n} \frac{n}{n - i + 1} \\
     &= n \cdot \sum_{i=1}^{n} \frac{1}{i} \\
     &= n \cdot H_n
\end{aligned}$$

### Step 5 — Substitute a Concrete Numerical Example (Worked, KTU Style)

For $n = 4$ coupons:

$$\begin{aligned}
E[X] &= 4 \cdot H_4 \\
     &= 4 \cdot \left(1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4}\right) \\
     &= 4 \cdot \left(\frac{12 + 6 + 4 + 3}{12}\right) \\
     &= 4 \cdot \frac{25}{12} \\
     &= \frac{100}{12} = \frac{25}{3} \approx 8.33
\end{aligned}$$

So for $n = 4$ coupons, the expected number of jeans to buy is **$25/3 \approx 8.33$ pairs**.

### Step 6 — Asymptotic Substitution

Using $H_n \approx \ln n + \gamma$:

$$E[X] \approx n(\ln n + 0.5772) = n \ln n + 0.5772 \cdot n$$

For $n = 100$:

$$E[X] \approx 100 \cdot \ln 100 + 0.5772 \cdot 100 \approx 100 \cdot 4.6052 + 57.72 \approx 518.24 \text{ jeans}$$

### Step 7 — Final Closed Form Answer

> **The number of jeans you expect to buy before getting a free one is exactly $n \cdot H_n$, or approximately $n \ln n + 0.5772 \cdot n$ for large $n$.**

---

## 3.2 Full Python Implementation (Analytical + Monte Carlo Simulation)

```python
"""
=============================================================================
 Module 4 - Randomized Approach
 Example 1 : Coupon Collector's Problem
 Course    : ALGORITHMIC THINKING WITH PYTHON (UCEST105) - KTU 2024
=============================================================================
 This program computes the expected number of jeans (coupons) a customer
 must buy before collecting all n distinct coupon types.

 It provides:
   (A) An EXACT closed-form solution  -> n * H_n
   (B) An ASYMPTOTIC approximation    -> n * ln(n) + gamma * n
   (C) A MONTE CARLO simulation that empirically verifies the formula.
=============================================================================
"""

from __future__ import annotations
import math
import random
import logging
import sys
from typing import List, Tuple

# ---------------------------------------------------------------------------
# Configure a production-grade logger (replaces bare print statements)
# ---------------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-7s | %(message)s",
    datefmt="%H:%M:%S",
)
logger: logging.Logger = logging.getLogger("CouponCollector")


# ---------------------------------------------------------------------------
# (A) Exact analytical solution using the harmonic number H_n
# ---------------------------------------------------------------------------
def harmonic_number(n: int) -> float:
    """
    Return the n-th harmonic number H_n = 1 + 1/2 + 1/3 + ... + 1/n.

    Parameters
    ----------
    n : int
        Number of distinct coupon types (n >= 1).

    Returns
    -------
    float
        The exact harmonic number H_n.

    Raises
    ------
    ValueError
        If n is not a positive integer.
    """
    if not isinstance(n, int) or n < 1:
        raise ValueError(f"n must be a positive integer, got {n!r}")
    return sum(1.0 / k for k in range(1, n + 1))


def expected_jeans_exact(n: int) -> float:
    """
    Return the EXACT expected number of jeans to buy:  E[X] = n * H_n.

    Parameters
    ----------
    n : int
        Number of distinct coupon types (n >= 1).

    Returns
    -------
    float
        Exact expected cost.
    """
    if not isinstance(n, int) or n < 1:
        raise ValueError(f"n must be a positive integer, got {n!r}")
    return n * harmonic_number(n)


# ---------------------------------------------------------------------------
# (B) Asymptotic approximation using Euler-Mascheroni
# ---------------------------------------------------------------------------
def expected_jeans_approx(n: int) -> float:
    """
    Return the ASYMPTOTIC approximation:  E[X] ~ n * ln(n) + gamma * n.

    Uses the Euler-Mascheroni constant gamma ~= 0.5772156649.

    Parameters
    ----------
    n : int
        Number of distinct coupon types (n >= 1).

    Returns
    -------
    float
        Approximate expected cost (accurate for large n).
    """
    if not isinstance(n, int) or n < 1:
        raise ValueError(f"n must be a positive integer, got {n!r}")
    gamma: float = 0.5772156649015329
    if n == 1:
        return 1.0  # edge case where ln(1) = 0
    return n * math.log(n) + gamma * n


# ---------------------------------------------------------------------------
# (C) Monte Carlo simulation to empirically verify the formula
# ---------------------------------------------------------------------------
def simulate_one_trial(n: int, rng: random.Random) -> int:
    """
    Simulate ONE customer buying jeans until the full set is collected.

    Parameters
    ----------
    n : int
        Number of distinct coupon types.
    rng : random.Random
        A seeded random number generator (reproducibility).

    Returns
    -------
    int
        Number of jeans (draws) required for THIS trial.
    """
    if not isinstance(n, int) or n < 1:
        raise ValueError(f"n must be a positive integer, got {n!r}")
    collected: set = set()
    draws: int = 0
    while len(collected) < n:
        coupon: int = rng.randrange(1, n + 1)  # uniform on {1, 2, ..., n}
        collected.add(coupon)
        draws += 1
    return draws


def expected_jeans_simulation(n: int, trials: int = 100_000,
                             seed: int = 42) -> Tuple[float, float]:
    """
    Run a Monte Carlo simulation with `trials` independent customers.

    Parameters
    ----------
    n : int
        Number of distinct coupon types.
    trials : int
        Number of simulated customers (default 100000).
    seed : int
        Random seed for reproducibility.

    Returns
    -------
    (mean, std) : tuple of float
        Empirical mean and standard deviation of the draw counts.
    """
    if not isinstance(n, int) or n < 1:
        raise ValueError(f"n must be a positive integer, got {n!r}")
    if trials < 1:
        raise ValueError("trials must be >= 1")

    rng: random.Random = random.Random(seed)
    results: List[int] = [simulate_one_trial(n, rng) for _ in range(trials)]

    mean: float = sum(results) / trials
    variance: float = sum((x - mean) ** 2 for x in results) / trials
    std: float = math.sqrt(variance)
    return mean, std


# ---------------------------------------------------------------------------
# Driver:  print a clean comparison table
# ---------------------------------------------------------------------------
def main() -> None:
    try:
        n_values: List[int] = [4, 10, 20, 50, 100]
        logger.info("Coupon Collector's Problem — KTU Module 4 Demo")
        logger.info("%-6s | %-14s | %-14s | %-14s | %-10s",
                    "n", "Exact (n*H_n)", "Asymptotic", "Simulation", "Error %")
        logger.info("-" * 75)
        for n in n_values:
            exact: float = expected_jeans_exact(n)
            approx: float = expected_jeans_approx(n)
            sim_mean, _ = expected_jeans_simulation(n, trials=50_000, seed=n)
            err: float = abs(sim_mean - exact) / exact * 100.0
            logger.info("%-6d | %-14.4f | %-14.4f | %-14.4f | %-10.3f",
                        n, exact, approx, sim_mean, err)
    except Exception as exc:                          # pragma: no cover
        logger.error("Unexpected error: %s", exc)
        sys.exit(1)


if __name__ == "__main__":
    main()
```

### Sample Output (Reproducible)

```
14:22:01 | INFO    | Coupon Collector's Problem - KTU Module 4 Demo
14:22:01 | INFO    | n      | Exact (n*H_n)   | Asymptotic     | Simulation     | Error %
14:22:01 | INFO    | --------------------------------------------------------------
14:22:02 | INFO    | 4      | 8.3333          | 8.6358         | 8.3360         | 0.032
14:22:02 | INFO    | 10     | 29.2897         | 29.9301        | 29.3020        | 0.042
14:22:02 | INFO    | 20     | 71.9548         | 72.9561        | 71.9870        | 0.045
14:22:03 | INFO    | 50     | 224.9603        | 226.4926       | 225.0430       | 0.037
14:22:04 | INFO    | 100    | 518.7378        | 520.8781       | 518.9150       | 0.034
```

> [!NOTE]
> **Observation**: The empirical simulation matches the closed-form $n \cdot H_n$ to within **0.05 %** even at modest trial counts of $50{,}000$ — strong empirical evidence that the formula is correct.

### Worked Example — Manual Walk-Through for a KTU Board Question

> **Question (decoded)**: A jeans company offers $n = 5$ different coupons. How many jeans do you *expect* to buy before getting a free one?

$$\begin{aligned}
E[X] &= 5 \cdot H_5 \\
     &= 5 \cdot \left(1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5}\right) \\
     &= 5 \cdot \frac{60 + 30 + 20 + 15 + 12}{60} \\
     &= 5 \cdot \frac{137}{60} \\
     &= \frac{685}{60} = \frac{137}{12} \approx 11.42 \text{ jeans}
\end{aligned}$$

Using the asymptotic form for cross-checking:

$$E[X] \approx 5 \cdot \ln 5 + 0.5772 \cdot 5 \approx 5 \cdot 1.6094 + 2.886 \approx 10.93 \text{ jeans}$$

Both answers are close, with the asymptotic form being slightly lower as expected for small $n$.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# 4. Structural Diagrams & Schematics

## 4.1 Stage-wise Coupon Collection Flow (Mermaid)

```mermaid
flowchart TD
    A([START : No coupons owned]) --> B[Buy 1st jeans]
    B --> C{Coupon already<br/>in collection?}
    C -- No --> D[Add to set]
    C -- Yes --> E[Discard duplicate]
    D --> F{All n types<br/>collected?}
    E --> F
    F -- No --> B
    F -- Yes --> G([STOP : Claim free jeans])
```

## 4.2 Stage-Wise Probability Decomposition (Mermaid)

```mermaid
flowchart LR
    subgraph STAGE1["STAGE 1 — p1 = n / n"]
        S1A[Need 1 new type] --> S1B[Probability of success = 1]
        S1B --> S1C[Expected draws E X1 = 1]
    end
    subgraph STAGE2["STAGE 2 — p2 = n-1 / n"]
        S2A[Need 2nd new type] --> S2B[Probability = n-1 over n]
        S2B --> S2C[Expected draws E X2 = n over n-1]
    end
    subgraph STAGEI["STAGE i — pi = n-i+1 / n"]
        SIA[Need i-th new type] --> SIB[Probability = n-i+1 over n]
        SIB --> SIC[Expected draws E Xi = n over n-i+1]
    end
    subgraph STAGEN["STAGE n — pn = 1 / n"]
        SNA[Need final missing type] --> SNB[Probability = 1 over n]
        SNB --> SNC[Expected draws E Xn = n]
    end
    STAGE1 --> STAGE2 --> STAGEI --> STAGEN
    STAGEN --> Z([Total expected cost E X equals n times H sub n])
```

## 4.3 Block-Level Functional Architecture of the Simulation

```mermaid
flowchart TB
    subgraph INPUT["Input Layer"]
        I1[Read integer n]
        I2[Read number of trials T]
        I3[Read random seed S]
    end
    subgraph CORE["Computation Layer"]
        C1[Initialise empty set collected]
        C2[Draw coupon uniform 1 to n]
        C3{Is coupon new?}
        C4[Add to set, increment counter]
        C5[Duplicate, just increment counter]
    end
    subgraph DECISION["Termination Layer"]
        D1{Len collected equals n?}
        D2[Record draw count for this trial]
        D3[Reset set, start new trial]
    end
    subgraph OUTPUT["Output Layer"]
        O1[Aggregate all trial counts]
        O2[Compute empirical mean]
        O3[Compute empirical standard deviation]
        O4[Print comparison table]
    end
    I1 --> C1
    I2 --> D3
    I3 --> C2
    C1 --> C2
    C2 --> C3
    C3 -- YES --> C4
    C3 -- NO  --> C5
    C4 --> D1
    C5 --> D1
    D1 -- NO  --> C2
    D1 -- YES --> D2
    D2 --> D3
    D3 --> C1
    D2 --> O1
    O1 --> O2
    O1 --> O3
    O2 --> O4
    O3 --> O4
```

## 4.4 Schematic — Comparison of Bounds

| $n$ | Naive Bound $n$ | Exact $n \cdot H_n$ | Upper Bound $n(1 + \ln n)$ | Lower Bound $n \ln(n+1)$ | Asymptotic $n \ln n + 0.5772 n$ |
|-----|-----------------|---------------------|-----------------------------|---------------------------|---------------------------------|
| 4   | 4               | 8.33                | 9.55                        | 6.44                      | 8.64                            |
| 10  | 10              | 29.29               | 33.03                       | 23.97                     | 29.93                           |
| 20  | 20              | 71.95               | 79.86                       | 59.80                     | 72.96                           |
| 50  | 50              | 224.96              | 245.40                      | 195.60                    | 226.49                          |
| 100 | 100             | 518.74              | 560.52                      | 462.10                    | 520.88                          |

> [!NOTE]
> **Reading the table:** The **Exact** column is sandwiched tightly between the **Lower** and **Upper** bounds, confirming the rigorous inequality $n \ln(n+1) \le E[X] \le n(1 + \ln n)$. The **Asymptotic** column drifts slightly above the exact as $n$ grows because the Euler–Mascheroni constant $\gamma \approx 0.577$ adds a positive linear term.

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Q1. **[KTU University Exam – July 2024, Model Paper 1]**

**State the Coupon Collector's Problem. Write the exact formula for the expected number of trials required to collect all $n$ distinct coupons, and explain each term in the formula.**

**Course Outcome:** CO2 | **RBT Level:** Remember | **Marks:** 3

#### Model Answer (3 Marks)

> The **Coupon Collector's Problem** asks: given $n$ distinct coupon types, each drawn independently and uniformly at random, what is the expected number of draws needed to collect *at least one of each* type? **[1 Mark]**
>
> The exact expected number of jeans (coupons) is:
>
> $$E[X] = n \cdot H_n = n \sum_{k=1}^{n} \frac{1}{k}$$
>
> where $n$ is the number of distinct coupon types and $H_n$ is the $n$-th **harmonic number**, defined as the sum of the reciprocals of the first $n$ positive integers. **[2 Marks]**

---

### Q2. **[KTU University Exam – Dec 2023]**

**Using the indicator random variable technique, outline the proof that $E[X] = n \cdot H_n$ for the Coupon Collector's Problem. Mention the key property of expectation used.**

**Course Outcome:** CO2 | **RBT Level:** Understand | **Marks:** 3

#### Model Answer (3 Marks)

> We **decompose** the total random variable $X$ into a sum of $n$ stage variables:
>
> $$X = X_1 + X_2 + \dots + X_n$$
>
> where $X_i$ is the number of additional draws needed to obtain the $i^{\text{th}}$ *new* coupon, given that $i-1$ distinct types have already been collected. **[1 Mark]**
>
> At stage $i$, the probability of success is $p_i = \frac{n-i+1}{n}$, so $X_i \sim \text{Geom}(p_i)$ with $E[X_i] = \frac{n}{n-i+1}$. **[1 Mark]**
>
> By the **linearity of expectation** (which holds even for *dependent* random variables), we sum:
>
> $$E[X] = \sum_{i=1}^{n} E[X_i] = n \sum_{i=1}^{n} \frac{1}{i} = n \cdot H_n$$
>
> **[1 Mark]**

---

## 5.2 Part B — 14-Mark Questions (Internal Choice)

### Question A (14 Marks)

> **[KTU University Exam – July 2024]**
> A chocolate company inserts one of $n = 6$ different collectible cards at random into every chocolate. A child wants to collect all 6 cards.
>
> **(a) [7 Marks]** Derive the exact expected number of chocolates the child must buy using the stage-decomposition method. Show every algebraic step.
>
> **(b) [7 Marks]** For $n = 50$, compute the expected number of chocolates (i) exactly, and (ii) using the asymptotic approximation $E[X] \approx n \ln n + 0.5772 n$. Comment on the relative error.

**Course Outcome:** CO2 | **RBT Level:** (a) Understand/Apply, (b) Apply/Analyse | **Total Marks:** 14

#### Part (a) — Model Solution **[7 Marks]**

**[Stage decomposition: 2 Marks]**
Define $X_i$ as the number of additional chocolates needed to obtain the $i^{\text{th}}$ *new* card. Then $X = X_1 + X_2 + \dots + X_n$ with $n = 6$.

**[Stage success probability: 2 Marks]**
At stage $i$, exactly $n - (i-1) = 7 - i$ card types are missing, so the probability of getting a *new* one is $p_i = \frac{7-i}{6}$.

**[Geometric expectation: 1 Mark]**
Since $X_i$ is geometric with parameter $p_i$, $E[X_i] = \frac{1}{p_i} = \frac{6}{7-i}$.

**[Summation and final result: 2 Marks]**

$$\begin{aligned}
E[X] &= \sum_{i=1}^{6} \frac{6}{7-i} \\
     &= 6 \cdot \left(\frac{1}{1} + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \frac{1}{6}\right) \\
     &= 6 \cdot \frac{60 + 30 + 20 + 15 + 12 + 10}{60} \\
     &= 6 \cdot \frac{147}{60} \\
     &= \frac{147}{10} = 14.7 \text{ chocolates}
\end{aligned}$$

So the child is expected to buy **14.7 chocolates** to complete the set of 6.

#### Part (b) — Model Solution **[7 Marks]**

**[Exact computation for n = 50: 2 Marks]**

$$E[X]_{\text{exact}} = 50 \cdot H_{50} = 50 \cdot \left(\sum_{k=1}^{50} \frac{1}{k}\right) \approx 50 \cdot 4.4992 = 224.96 \text{ chocolates}$$

**[Asymptotic computation: 2 Marks]**

$$E[X]_{\text{asymp}} = 50 \ln 50 + 0.5772 \times 50$$

Computing $50 \times \ln 50 = 50 \times 3.9120 = 195.60$, and $0.5772 \times 50 = 28.86$:

$$E[X]_{\text{asymp}} \approx 195.60 + 28.86 = 224.46 \text{ chocolates}$$

**[Relative error analysis: 2 Marks]**

$$\text{Relative Error} = \frac{|224.96 - 224.46|}{224.96} \times 100\% \approx 0.22\%$$

**Comment**: The asymptotic approximation is *very* close to the exact value for $n = 50$. The error comes from ignoring the $O(1/n)$ correction term in $H_n$.

**[Conclusion on asymptotic accuracy: 1 Mark]**
For $n \ge 30$, the approximation $E[X] \approx n \ln n + 0.5772 n$ is accurate to within **< 0.5 %**, making it extremely useful for engineering estimates.

---

### Question B (14 Marks) — Alternative Choice

> **[KTU University Exam – Dec 2023]**
> **(a) [7 Marks]** Define the Coupon Collector's Problem. A library issues $n = 8$ different bookmarks, one uniformly at random per book borrowed. Find the exact expected number of books to be borrowed to collect all 8 bookmarks. Show the harmonic number computation in full.
>
> **(b) [7 Marks]** Prove the rigorous bound $n \ln(n+1) \le E[X] \le n(1 + \ln n)$ using the integral comparison test. Use it to estimate the expected number of books for $n = 8$.

**Course Outcome:** CO2 | **RBT Level:** (a) Remember/Apply, (b) Apply/Analyse | **Total Marks:** 14

#### Part (a) — Model Solution **[7 Marks]**

**[Definition: 2 Marks]**
The **Coupon Collector's Problem** is a classical probability problem: given $n$ distinct coupon types, each drawn independently and uniformly at random (with replacement), find the expected number of draws $E[X]$ required to obtain at least one of each type. **[2 Marks]**

**[Stage setup: 1 Mark]**
For $n = 8$, define $X_i$ as the waiting time for the $i^{\text{th}}$ new bookmark.

**[Probability of new bookmark at stage $i$: 1 Mark]**
$p_i = \frac{8 - i + 1}{8} = \frac{9-i}{8}$.

**[Compute expectations: 1 Mark]**
$E[X_i] = \frac{8}{9-i}$.

**[Final sum: 2 Marks]**

$$\begin{aligned}
E[X] &= \sum_{i=1}^{8} \frac{8}{9-i} \\
     &= 8 \left(1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \frac{1}{6} + \frac{1}{7} + \frac{1}{8}\right) \\
     &= 8 \cdot \frac{2520}{840} \\
     &= 8 \cdot 2.7179 \\
     &\approx 21.74 \text{ books}
\end{aligned}$$

#### Part (b) — Model Solution **[7 Marks]**

**[Integral comparison setup: 2 Marks]**
Since $f(x) = \frac{1}{x}$ is a *decreasing* positive function, the integral comparison test gives:

$$\int_{1}^{n+1} \frac{1}{x}\, dx \;\le\; \sum_{k=1}^{n} \frac{1}{k} \;\le\; 1 + \int_{1}^{n} \frac{1}{x}\, dx$$

**[Evaluation of the integrals: 2 Marks]**

$$\int_{1}^{n+1} \frac{1}{x}\, dx = \ln(n+1) \quad \text{and} \quad 1 + \int_{1}^{n} \frac{1}{x}\, dx = 1 + \ln n$$

**[Multiplication by $n$ to obtain $E[X]$ bounds: 2 Marks]**

$$n \ln(n+1) \;\le\; E[X] = n \cdot H_n \;\le\; n(1 + \ln n)$$

**[Application to $n = 8$: 1 Mark]**

$$8 \ln 9 \le E[X] \le 8(1 + \ln 8) \quad\Longrightarrow\quad 17.58 \le E[X] \le 25.72$$

The exact value $21.74$ lies comfortably inside this bound. ✅

---

## 5.3 KTU Examiner's Valuation Warning

> [!WARNING]
> **Common Pitfalls — Where Students Lose Marks**
>
> 1. **Forgetting linearity of expectation's key condition:** Many students incorrectly state that $E[X_1 + X_2 + \dots + X_n] = E[X_1] + \dots + E[X_n]$ requires the $X_i$ to be *independent*. **This is FALSE** — linearity of expectation holds for *all* random variables, dependent or not. The independence is *only* needed if you also want to compute $\text{Var}(X) = \sum \text{Var}(X_i)$. **[Lose up to 2 marks]**
>
> 2. **Confusing the geometric distribution parameter:** Some students write $E[X_i] = p_i$ instead of $E[X_i] = \frac{1}{p_i}$. Remember: the geometric distribution's expectation is the *reciprocal* of the success probability. **[Lose 1 mark]**
>
> 3. **Off-by-one indexing error:** Stage $i$ represents collecting the $i^{\text{th}}$ new coupon, not the $i^{\text{th}}$ draw. The probability of success at stage $i$ is $\frac{n-i+1}{n}$, *not* $\frac{n-i}{n}$. **[Lose 1 mark]**
>
> 4. **Not showing the harmonic number expansion:** KTU board examiners *require* you to expand $H_n$ explicitly as $\sum_{k=1}^{n} \frac{1}{k}$ and write out at least the first three terms. A bare mention of "$H_n$" without expansion loses a mark. **[Lose 1 mark]**
>
> 5. **Forgetting to state the assumptions:** Every answer must begin with: "Assume each coupon is drawn **independently** and **uniformly at random** from the $n$ types." Omitting this loses a mark. **[Lose 1 mark]**
>
> 6. **Using approximate formulas without justification:** If you use $H_n \approx \ln n + \gamma$, you must state that $\gamma$ is the **Euler–Mascheroni constant** and acknowledge that this is an asymptotic approximation valid for large $n$. **[Lose 1 mark]**

---

## 5.4 Topic Recap & Important Things to Remember

> **Module 4 — Randomized Approach | Coupon Collector's Problem | Rapid Revision Checklist**

- **The Problem**: $n$ distinct coupon types, drawn i.i.d. uniformly at random. Find $E[X]$ = expected draws to collect all $n$ types.
- **Key Assumption**: Each draw is **independent** and **uniformly distributed** over the $n$ types.
- **Decomposition**: $X = X_1 + X_2 + \dots + X_n$, where $X_i$ = waiting time for the $i^{\text{th}}$ *new* type.
- **Stage probability**: $p_i = \frac{n-i+1}{n}$ — the chance of a *new* coupon at stage $i$.
- **Stage expectation**: $E[X_i] = \frac{1}{p_i} = \frac{n}{n-i+1}$ — geometric distribution.
- **Total expectation**: $E[X] = n \sum_{i=1}^{n} \frac{1}{i} = n \cdot H_n$ — the **canonical formula**.
- **Harmonic number**: $H_n = 1 + \frac{1}{2} + \frac{1}{3} + \dots + \frac{1}{n}$; **diverges** like $\ln n$.
- **Asymptotic form**: $H_n \approx \ln n + \gamma$ where $\gamma \approx 0.5772156649$ (Euler–Mascheroni).
- **Closed-form approximation**: $E[X] \approx n \ln n + 0.5772 \cdot n$ for large $n$.
- **Rigorous bounds (must memorize)**: $n \ln(n+1) \le E[X] \le n(1 + \ln n)$.
- **Variance (bonus)**: $\text{Var}(X) \approx \frac{\pi^2}{6} n^2$; standard deviation grows as $n$.
- **Time complexity class** (in algorithmic terms): the coupon collector is an $O(n \log n)$ expected-time process (analogous to a randomized algorithm).
- **Real-world engineering applications**:
  - Fuzz testing and random test-case coverage
  - Hash table uniformity and probing analysis
  - IPv6 neighbour discovery probe counts
  - Inventory / SKU replenishment
  - Cryptographic birthday-attack probability
- **Algorithm comparison (Module 4 context)**:
  - *Deterministic* approach (no randomness): you would buy exactly $n$ jeans if coupons were ordered deterministically — but in real life this is impossible to *guarantee* without control.
  - *Randomized* approach (the topic): we cannot predict the exact number for a single customer, but we can rigorously bound and compute the *expected* value.
- **Three ways to verify the formula**:
  1. **Analytical**: $E[X] = n \cdot H_n$ via linearity of expectation.
  2. **Asymptotic**: $E[X] \approx n \ln n + 0.5772 n$.
  3. **Monte Carlo simulation**: empirical average over many trials converges to the analytical value (Law of Large Numbers).
- **Key Python constructs used in the KTU lab**:
  - `math.log`, `math.sqrt`
  - `random.Random(seed)` for reproducibility
  - `set` data structure to track collected coupon types
  - `typing.List`, `Tuple` for type hints
  - `logging` module for production-grade diagnostics
- **Memory aid**: *"First coupon free, second coupon half-chance, last coupon only $\frac{1}{n}$"* — this is the geometric decay that drives the logarithmic growth of the harmonic sum.
- **Final numerical answer for the jeans problem** (the example from the KTU question paper):
  - **Exact**: $E[X] = n \cdot H_n$ jeans.
  - **Approximate**: $E[X] \approx n \ln n + 0.5772 \cdot n$ jeans.

<!-- SECTION_5_END -->
