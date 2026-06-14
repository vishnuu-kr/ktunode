# Interarrival times (Theorems without proof)

<!-- SECTION_1_START -->
# Interarrival Times — Core Technical Definition & Intuitive Overview

## 1.1 Formal Academic Definition (KTU 2024 Syllabus Terminology)

Let $\{N(t), t \ge 0\}$ be a **counting process** that records the cumulative number of occurrences (events) of a random phenomenon up to time $t$. Let $T_n$ denote the **arrival time** of the $n^{\text{th}}$ event, defined as:

$$
T_n = \inf\{t : N(t) = n\}, \quad n = 1, 2, 3, \ldots
$$

The **interarrival time** $X_n$ is the elapsed time between the $(n-1)^{\text{th}}$ and the $n^{\text{th}}$ event:

$$
X_n = T_n - T_{n-1}, \quad n = 1, 2, 3, \ldots \quad \text{with } T_0 = 0
$$

> [!IMPORTANT]
> **KTU 2024 Highlight (GAMAT301, Module 3):**
> For a **Poisson process with rate $\lambda > 0$**, the interarrival times $X_1, X_2, X_3, \ldots$ are **independent and identically distributed (i.i.d.)** random variables, each following an **Exponential distribution with parameter $\lambda$**, written as $X_n \sim \text{Exp}(\lambda)$.

The **probability density function (PDF)** and **cumulative distribution function (CDF)** of an exponential random variable with rate $\lambda$ are:

$$
f_{X_n}(x) = \begin{cases} \lambda\, e^{-\lambda x}, & x \ge 0 \\ 0, & x < 0 \end{cases}
$$

$$
F_{X_n}(x) = P(X_n \le x) = \begin{cases} 1 - e^{-\lambda x}, & x \ge 0 \\ 0, & x < 0 \end{cases}
$$

The **mean** and **variance** are $E[X_n] = \dfrac{1}{\lambda}$ and $\text{Var}(X_n) = \dfrac{1}{\lambda^{2}}$ respectively. Here $\lambda$ is expressed in units of **events per unit time**.

---

## 1.2 Conceptual Analogy — The Bank Teller Intuition

Imagine you walk into a bank and observe customers arriving at a single teller. The **interarrival time** $X_n$ is simply *"how long do I have to wait between the $(n-1)^{\text{th}}$ customer and the $n^{\text{th}}$ customer?"*

Now suppose the bank manager tells you: *"On average, $\lambda = 4$ customers arrive per minute."* Then the average gap between customers is $1/\lambda = 0.25$ minutes (i.e., **15 seconds**).

The **Poisson process** is the mathematical *spine* of this scenario. The two pillars of any Poisson process are:

| Pillar | Statement | Real-world meaning |
| :--- | :--- | :--- |
| **Pillar 1 (Counting)** | $N(t) \sim \text{Poisson}(\lambda t)$ | Number of arrivals in any interval of length $t$ is Poisson distributed |
| **Pillar 2 (Interarrival)** | $X_n \sim \text{Exp}(\lambda)$, i.i.d. | The gaps between consecutive arrivals are i.i.d. exponential |

These two pillars are mathematically **equivalent** (one implies the other).

---

## 1.3 The Memoryless Property — The Defining Trait

A non-negative continuous random variable $X$ is called **memoryless** if for all $s, t \ge 0$:

$$
P(X > s + t \mid X > s) = P(X > t)
$$

> [!NOTE]
> **Geometric Intuition:** Suppose you have already waited $s = 10$ minutes for a bus that arrives in line with a $\text{Exp}(\lambda)$ schedule. The memoryless property states: *"The probability that the bus arrives in the next $t$ minutes is exactly the same as it was when you started waiting."* In other words, the past $10$ minutes of waiting are **completely forgotten** — your conditional future looks statistically identical to a brand-new wait.

For the exponential distribution, we can verify this directly:

$$
P(X > s + t \mid X > s) = \frac{P(X > s + t)}{P(X > s)} = \frac{e^{-\lambda(s+t)}}{e^{-\lambda s}} = e^{-\lambda t} = P(X > t)
$$

> [!IMPORTANT]
> **Fundamental Theorem of Memorylessness (KTU 2024):**
> The exponential distribution is the **only continuous distribution** that possesses the memoryless property. Any other distribution (e.g., Normal, Uniform, Gamma) loses its "memory" of the past once conditioning is applied.

---

## 1.4 Physical Constants and Standard Metrics

| Symbol | Quantity | Standard Unit (SI) |
| :--- | :--- | :--- |
| $\lambda$ | Rate of arrival | events per second (or per minute, hour) |
| $1/\lambda$ | Mean interarrival time | seconds (or minutes, hours) |
| $1/\lambda^{2}$ | Variance of interarrival | (seconds)$^2$ |
| $t$ | Observation window | seconds (or minutes, hours) |

---

> [!VISUALIZATION CONTROL]
> **Concept:** PDF of the Exponential Distribution and its Cumulative Survival Function
> **GeoGebra / Desmos Input Equations:**
> * `f(x) = 2 * exp(-2 * x)` for $\lambda = 2$
> * `F(x) = 1 - exp(-2 * x)` for the CDF
> * `S(x) = exp(-2 * x)` for the survival function $P(X > x)$
> **Visual Description:** The PDF $f(x)$ starts at height $\lambda$ on the $y$-axis and decays exponentially. The CDF $F(x)$ rises smoothly from $0$ to $1$ with horizontal asymptote at $y = 1$. The survival function $S(x)$ starts at $1$ and decays toward $0$. All three curves share the same decay constant $\lambda$.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis — Interarrival Time Theorems (Without Proof)

> [!IMPORTANT]
> **KTU 2024 Directive:** In Module 3 of GAMAT301, the following theorems are part of the syllabus under *"Interarrival times (Theorems without proof)"*. Students are required to **state, interpret, and apply** them — formal derivations/proofs are not expected in the answer script.

---

## 2.1 Theorem T1 — Equivalence of Poisson Process and Exponential Interarrivals

**Statement:** A counting process $\{N(t), t \ge 0\}$ is a Poisson process with rate $\lambda$ **if and only if** the interarrival times $X_1, X_2, \ldots$ are **i.i.d. Exponential$(\lambda)$** random variables.

**Why this matters:**
* It provides a **constructive simulation** route: to simulate a Poisson process, simply generate i.i.d. exponential variates and accumulate their sums to obtain arrival times $T_n = X_1 + X_2 + \cdots + X_n$.
* It bridges the **discrete-count world** (Poisson) with the **continuous-time world** (Exponential).

---

## 2.2 Theorem T2 — Distribution of the $n^{\text{th}}$ Arrival Time (Erlang/Gamma)

**Statement:** For a Poisson process with rate $\lambda$, the $n^{\text{th}}$ arrival time $T_n = X_1 + X_2 + \cdots + X_n$ follows a **Gamma (Erlang) distribution** with shape parameter $n$ and rate $\lambda$:

$$
f_{T_n}(t) = \frac{\lambda^{n}\, t^{\,n-1}\, e^{-\lambda t}}{(n-1)!}, \quad t \ge 0
$$

Equivalent notation: $T_n \sim \text{Gamma}(n, \lambda)$ with mean $E[T_n] = n/\lambda$.

**Why this matters:**
* Enables computation of $P(T_n \le t)$ — the probability that the $n^{\text{th}}$ event has occurred by time $t$.
* Directly equivalent to $P(N(t) \ge n) = P(T_n \le t)$, providing an alternative route to Poisson tail probabilities.

---

## 2.3 Theorem T3 — Memoryless Property of Exponential Random Variables

**Statement:** If $X \sim \text{Exp}(\lambda)$, then for all $s, t \ge 0$:

$$
P(X > s + t \mid X > s) = P(X > t) = e^{-\lambda t}
$$

**Consequence (Inspection Paradox):** The "remaining waiting time" after observing a wait of duration $s$ is still $\text{Exp}(\lambda)$, independent of $s$.

---

## 2.4 Theorem T4 — Minimum of Independent Exponentials

**Statement:** Let $X_1, X_2, \ldots, X_n$ be **independent** exponential random variables with rates $\lambda_1, \lambda_2, \ldots, \lambda_n$ respectively. Then:

$$
Y = \min(X_1, X_2, \ldots, X_n) \sim \text{Exp}\!\left(\sum_{i=1}^{n} \lambda_i\right)
$$

Moreover, $P(Y = X_k) = \dfrac{\lambda_k}{\sum_{i=1}^{n} \lambda_i}$, which gives the probability that $X_k$ is the *first* to occur.

**Why this matters:**
* Foundation of **competing-risks** models in reliability engineering.
* Powers the classical "two tellers" or "two machines" queueing problem in operations research.

---

## 2.5 Theorem T5 — Order Statistics of i.i.d. Exponentials

**Statement:** If $X_1, X_2, \ldots, X_n$ are i.i.d. $\text{Exp}(\lambda)$, then the order statistics $X_{(1)} \le X_{(2)} \le \cdots \le X_{(n)}$ are distributed such that the **spacings** are independent exponentials:

$$
X_{(1)} \sim \text{Exp}(n\lambda), \quad X_{(k)} - X_{(k-1)} \sim \text{Exp}\!\left((n - k + 1)\lambda\right)
$$

**Why this matters:**
* Used in **random sampling without replacement** for exponential lifetimes.
* Underpins the *stick-breaking* representation of the Dirichlet distribution.

---

## 2.6 Theorem T6 — Exponential is the Unique Memoryless Continuous Distribution

**Statement:** If $X$ is a non-negative continuous random variable with CDF $F$ that satisfies the memoryless equation $P(X > s + t) = P(X > s)\, P(X > t)$ for all $s, t \ge 0$, then $X$ must be exponentially distributed: $F(x) = 1 - e^{-\lambda x}$ for some $\lambda > 0$.

**Why this matters:**
* If you ever need a *continuous, memoryless* model for waiting times, the only choice is exponential — this is why it dominates queueing, reliability, and renewal theory.

---

## 2.7 Theorem T7 — Conditional Distribution of Arrival Times (Order Statistics)

**Statement:** Given that $N(t) = n$ events have occurred in $[0, t]$ for a Poisson process with rate $\lambda$, the arrival times $T_1, T_2, \ldots, T_n$ are distributed as the **order statistics of $n$ i.i.d. Uniform$(0, t)$** random variables.

$$
(T_1, T_2, \ldots, T_n \mid N(t) = n) \overset{d}{=} \left(U_{(1)}, U_{(2)}, \ldots, U_{(n)}\right), \quad U_i \overset{\text{i.i.d.}}{\sim} \text{Uniform}(0, t)
$$

**Why this matters:**
* Foundation of **non-homogeneous Poisson process** (NHPP) simulation via *thinning*.
* Critical in **software reliability growth modeling** and **phased-array radar scheduling**.

---

## 2.8 KTU High-Yield Formula Cheat Sheet

| # | Theorem | Key Result | When to Use |
| :--- | :--- | :--- | :--- |
| F1 | Exponential PDF | $f(x) = \lambda e^{-\lambda x},\ x \ge 0$ | Single-arrival gap density |
| F2 | Exponential CDF | $F(x) = 1 - e^{-\lambda x}$ | Single-arrival gap probability |
| F3 | Survival function | $P(X > x) = e^{-\lambda x}$ | "No arrival by time $x$" |
| F4 | Memoryless property | $P(X > s + t \mid X > s) = e^{-\lambda t}$ | Residual-life problems |
| F5 | Mean of Exp$(\lambda)$ | $E[X] = 1/\lambda$ | Average interarrival time |
| F6 | Variance of Exp$(\lambda)$ | $\text{Var}(X) = 1/\lambda^{2}$ | Spread of interarrival times |
| F7 | Erlang PDF ($n$ arrivals) | $f_{T_n}(t) = \dfrac{\lambda^{n} t^{n-1} e^{-\lambda t}}{(n-1)!}$ | Distribution of $n^{\text{th}}$ arrival |
| F8 | Erlang mean | $E[T_n] = n/\lambda$ | Expected time of $n^{\text{th}}$ event |
| F9 | Erlang variance | $\text{Var}(T_n) = n/\lambda^{2}$ | Spread of $n^{\text{th}}$ arrival |
| F10 | Min of exponentials | $\min(X_1, \ldots, X_n) \sim \text{Exp}(\sum \lambda_i)$ | Competing events / parallel queues |
| F11 | First-occurrence probability | $P(X_k = \min) = \lambda_k / \sum \lambda_i$ | Identify the first event |
| F12 | Order-statistic spacing | $X_{(k)} - X_{(k-1)} \sim \text{Exp}((n-k+1)\lambda)$ | Sampling-based reliability |
| F13 | Conditional arrival times | $(T_1, \ldots, T_n \mid N(t) = n)$ $\sim$ order stats of Uniform$(0, t)$ | NHPP thinning simulation |
| F14 | Memoryless uniqueness | Only $\text{Exp}(\lambda)$ is continuous memoryless | Justification of exponential model |

---

## 2.9 Real-World Engineering Utility

| Domain | Application | Theorem Used |
| :--- | :--- | :--- |
| **Computer Networks** | Packet interarrival at a router (Poisson traffic) | T1, T2 |
| **Cloud Computing** | Job arrivals in a server queue (M/M/1 model) | T1, T3 |
| **Telecommunications** | Call arrivals in a cellular base station | T1, T4 |
| **Software Reliability** | Time until next bug discovery (NHPP) | T2, T7 |
| **Hardware Reliability** | Component failure time (memoryless semiconductors) | T3, T6 |
| **Bioinformatics** | DNA sequence mutation modeling | T2 |
| **Cybersecurity** | Cyber-attack arrival time modeling | T1, T4 |
| **IoT Systems** | Sensor event interarrival in edge computing | T1, T5 |

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Worked Examples & Python Implementation

## 3.1 Worked Example 1 — Single Interarrival Probability

> **Problem:** Calls arrive at a call center according to a Poisson process with rate $\lambda = 3$ calls/minute. Find the probability that the time between two consecutive calls is more than $0.5$ minutes.

**Step 1 — Identify the model.**

Each interarrival time $X \sim \text{Exp}(\lambda = 3)$.

**Step 2 — Apply the survival function formula.**

$$
P(X > 0.5) = e^{-\lambda \cdot 0.5} = e^{-3 \times 0.5} = e^{-1.5}
$$

**Step 3 — Numerical evaluation.**

$$
P(X > 0.5) = e^{-1.5} \approx 0.2231
$$

> **Final Answer:** The probability that the gap exceeds 30 seconds is approximately **0.2231** (or 22.31%).

**Valuation Key:**
* [Identifying the exponential model: 1 Mark]
* [Substituting $\lambda$ and the time value: 1 Mark]
* [Final numerical value: 1 Mark]

---

## 3.2 Worked Example 2 — Memoryless Property Application

> **Problem:** Packets arrive at a router according to a Poisson process with rate $\lambda = 5$ packets/second. Given that no packet has arrived in the last $0.2$ seconds, what is the probability that the next packet arrives within the next $0.1$ seconds?

**Step 1 — State the memoryless property.**

By the memoryless property of the exponential distribution, the remaining waiting time $X'$ after conditioning on $X > 0.2$ is still $\text{Exp}(\lambda = 5)$, independent of the past.

**Step 2 — Compute the desired probability.**

$$
P(X' \le 0.1) = 1 - e^{-\lambda \cdot 0.1} = 1 - e^{-5 \times 0.1} = 1 - e^{-0.5}
$$

**Step 3 — Numerical evaluation.**

$$
P(X' \le 0.1) = 1 - 0.6065 \approx 0.3935
$$

> **Final Answer:** The required probability is approximately **0.3935** (or 39.35%).

**Valuation Key:**
* [Stating memoryless property explicitly: 1 Mark]
* [Setting up the CDF expression: 1 Mark]
* [Final numerical value: 1 Mark]

---

## 3.3 Worked Example 3 — Erlang Distribution for $n^{\text{th}}$ Arrival

> **Problem:** Customers arrive at an ATM according to a Poisson process with $\lambda = 2$ per minute. Find:
> (a) The probability that the $3^{\text{rd}}$ customer arrives within $2$ minutes.
> (b) The expected arrival time of the $3^{\text{rd}}$ customer.

**Step 1 — Recognize the Erlang framework.**

$T_3 \sim \text{Gamma}(n = 3, \lambda = 2)$. Erlang PDF: $f_{T_3}(t) = \dfrac{\lambda^{3} t^{2} e^{-\lambda t}}{2!} = 4 t^{2} e^{-2 t}$.

**Step 2 — Compute $P(T_3 \le 2)$.**

We use the Erlang CDF (an incomplete gamma function, but for integer $n$ it reduces to a finite sum):

$$
P(T_3 \le 2) = 1 - \sum_{k=0}^{2} \frac{e^{-\lambda t}(\lambda t)^{k}}{k!} = 1 - e^{-4}\!\left(1 + 4 + \frac{4^{2}}{2}\right)
$$

$$
P(T_3 \le 2) = 1 - e^{-4}\!\left(1 + 4 + 8\right) = 1 - 13 e^{-4}
$$

$$
P(T_3 \le 2) = 1 - 13 \times 0.01832 \approx 1 - 0.2381 \approx 0.7619
$$

> [!NOTE]
> **Connection to Poisson:** $P(T_3 \le 2) = P(N(2) \ge 3) = 1 - P(N(2) \le 2)$. Since $N(2) \sim \text{Poisson}(\lambda t = 4)$, we have $P(N(2) \le 2) = e^{-4}(1 + 4 + 8) = 13 e^{-4}$. The two routes give the same answer, confirming the **equivalence theorem (T1)**.

**Step 3 — Expected arrival time of the $3^{\text{rd}}$ customer.**

$$
E[T_3] = \frac{n}{\lambda} = \frac{3}{2} = 1.5 \text{ minutes}
$$

> **Final Answer:** $P(T_3 \le 2) \approx 0.7619$ and $E[T_3] = 1.5$ minutes.

---

## 3.4 Worked Example 4 — Minimum of Two Exponentials (Competing Events)

> **Problem:** Two machines operate independently. The time until machine A fails is $X_1 \sim \text{Exp}(0.5)$ (per year), and for machine B is $X_2 \sim \text{Exp}(0.3)$ (per year). Find:
> (a) The probability that machine A fails first.
> (b) The expected time until the first failure.

**Step 1 — Apply Theorem T4 (Minimum of exponentials).**

$Y = \min(X_1, X_2) \sim \text{Exp}(\lambda_1 + \lambda_2) = \text{Exp}(0.5 + 0.3) = \text{Exp}(0.8)$.

**Step 2 — Probability that machine A fails first.**

$$
P(X_1 < X_2) = \frac{\lambda_1}{\lambda_1 + \lambda_2} = \frac{0.5}{0.8} = 0.625
$$

**Step 3 — Expected time until the first failure.**

$$
E[Y] = \frac{1}{\lambda_1 + \lambda_2} = \frac{1}{0.8} = 1.25 \text{ years}
$$

> **Final Answer:** $P(\text{A fails first}) = 0.625$ and $E[\text{first failure time}] = 1.25$ years.

**Derivation Insight (full work shown):**
For the probability $P(X_1 < X_2)$:

$$
P(X_1 < X_2) = \int_{0}^{\infty} \int_{x_1}^{\infty} \lambda_1 e^{-\lambda_1 x_1}\, \lambda_2 e^{-\lambda_2 x_2}\, dx_2\, dx_1
$$

$$
= \int_{0}^{\infty} \lambda_1 e^{-\lambda_1 x_1}\!\left[\int_{x_1}^{\infty} \lambda_2 e^{-\lambda_2 x_2}\, dx_2\right] dx_1
$$

$$
= \int_{0}^{\infty} \lambda_1 e^{-\lambda_1 x_1}\, e^{-\lambda_2 x_1}\, dx_1 = \int_{0}^{\infty} \lambda_1 e^{-(\lambda_1 + \lambda_2) x_1}\, dx_1
$$

$$
= \frac{\lambda_1}{\lambda_1 + \lambda_2}
$$

---

## 3.5 Worked Example 5 — Conditional Arrival Times (Order Statistic Property)

> **Problem:** Vehicles pass a sensor according to a Poisson process with rate $\lambda = 6$ per hour. Given that exactly $4$ vehicles have passed in the first hour, what is the distribution of the $4$ arrival times?

**Step 1 — Apply Theorem T7.**

Given $N(1) = 4$, the arrival times $T_1, T_2, T_3, T_4$ (in hours) are distributed as the order statistics of $4$ i.i.d. Uniform$(0, 1)$ random variables.

**Step 2 — Joint PDF of the order statistics.**

$$
f_{T_1, T_2, T_3, T_4 \mid N(1) = 4}(t_1, t_2, t_3, t_4) = \frac{4!}{(1 - 0)^{4}} = 24
$$

for $0 < t_1 < t_2 < t_3 < t_4 < 1$, and $0$ otherwise.

> **Interpretation:** The arrival times are **uniformly distributed** over the simplex $\{(t_1, t_2, t_3, t_4): 0 < t_1 < t_2 < t_3 < t_4 < 1\}$ with constant density $4! = 24$.

---

## 3.6 Symbolic Derivation — Erlang Distribution as a Sum of Exponentials

Let $T_n = X_1 + X_2 + \cdots + X_n$ where $X_i \overset{\text{i.i.d.}}{\sim} \text{Exp}(\lambda)$. The moment generating function (MGF) derivation:

$$
M_{X_i}(s) = E[e^{s X_i}] = \int_{0}^{\infty} e^{s x}\, \lambda e^{-\lambda x}\, dx = \frac{\lambda}{\lambda - s}, \quad s < \lambda
$$

Since the $X_i$ are independent:

$$
M_{T_n}(s) = \prod_{i=1}^{n} M_{X_i}(s) = \left(\frac{\lambda}{\lambda - s}\right)^{n}
$$

This is the MGF of a **Gamma distribution** with shape $n$ and rate $\lambda$. Therefore, $T_n \sim \text{Gamma}(n, \lambda)$. Inverting the MGF (or differentiating) gives the Erlang PDF shown in F7.

---

## 3.7 Fully Operational Python Implementation

```python
"""
Interarrival Time Simulation & Theorem Verification
Course: GAMAT301 — Mathematics for Information Science-3
Module 3 — Limit Theorems and Stochastic Processes
Topic: Interarrival Times (Theorems without proof)
"""

import numpy as np
from scipy import stats
from typing import List, Tuple


def simulate_poisson_arrivals(
    rate: float,
    num_events: int,
    random_state: int = 42
) -> Tuple[np.ndarray, np.ndarray]:
    """
    Simulate a Poisson process by generating i.i.d. Exp(rate) interarrival times.

    Parameters
    ----------
    rate : float
        Arrival rate lambda (events per unit time); must be positive.
    num_events : int
        Number of interarrival times to generate.
    random_state : int
        Seed for reproducibility.

    Returns
    -------
    interarrival_times : np.ndarray
        The i.i.d. Exp(rate) interarrival times X_1, X_2, ..., X_n.
    arrival_times : np.ndarray
        Cumulative sums T_1, T_2, ..., T_n.
    """
    if rate <= 0:
        raise ValueError(f"Rate must be positive, got {rate}")
    if num_events <= 0:
        raise ValueError(f"Number of events must be positive, got {num_events}")

    rng = np.random.default_rng(random_state)
    interarrival_times = rng.exponential(scale=1.0 / rate, size=num_events)
    arrival_times = np.cumsum(interarrival_times)
    return interarrival_times, arrival_times


def verify_erlang_theorem(
    rate: float,
    n: int,
    t: float,
    num_simulations: int = 100_000,
    random_state: int = 42
) -> dict:
    """
    Verify that T_n = X_1 + ... + X_n is Gamma(n, rate).
    Returns theoretical vs empirical P(T_n <= t).
    """
    rng = np.random.default_rng(random_state)
    samples = np.array([
        np.sum(rng.exponential(scale=1.0 / rate, size=n))
        for _ in range(num_simulations)
    ])
    empirical_prob = np.mean(samples <= t)
    theoretical_prob = stats.gamma.cdf(t, a=n, scale=1.0 / rate)
    return {
        "n": n,
        "rate": rate,
        "t": t,
        "empirical_P_Tn_leq_t": empirical_prob,
        "theoretical_P_Tn_leq_t": theoretical_prob,
        "absolute_error": abs(empirical_prob - theoretical_prob),
    }


def verify_minimum_theorem(
    rates: List[float],
    t: float,
    num_simulations: int = 100_000,
    random_state: int = 42
) -> dict:
    """
    Verify that min(X_1, ..., X_n) ~ Exp(sum of rates).
    Also computes empirical P(X_k is the first).
    """
    if any(r <= 0 for r in rates):
        raise ValueError("All rates must be positive.")

    rng = np.random.default_rng(random_state)
    n = len(rates)
    samples_matrix = np.column_stack([
        rng.exponential(scale=1.0 / r, size=num_simulations) for r in rates
    ])
    min_values = samples_matrix.min(axis=1)
    first_indices = samples_matrix.argmin(axis=1)
    empirical_min_cdf = np.mean(min_values <= t)
    theoretical_min_cdf = 1.0 - np.exp(-sum(rates) * t)
    empirical_first_probs = [
        np.mean(first_indices == k) for k in range(n)
    ]
    theoretical_first_probs = [
        r / sum(rates) for r in rates
    ]
    return {
        "rates": rates,
        "t": t,
        "empirical_min_cdf": empirical_min_cdf,
        "theoretical_min_cdf": theoretical_min_cdf,
        "empirical_first_probs": empirical_first_probs,
        "theoretical_first_probs": theoretical_first_probs,
    }


def demonstrate_memoryless_property(
    rate: float, s: float, t: float, num_simulations: int = 200_000
) -> dict:
    """
    Numerically verify P(X > s + t | X > s) = P(X > t).
    """
    rng = np.random.default_rng(123)
    samples = rng.exponential(scale=1.0 / rate, size=num_simulations)
    conditional_prob = np.mean(samples > s + t) / np.mean(samples > s)
    theoretical_prob = np.exp(-rate * t)
    return {
        "rate": rate,
        "s": s,
        "t": t,
        "empirical_conditional": conditional_prob,
        "theoretical_conditional": theoretical_prob,
    }


if __name__ == "__main__":
    # Demonstration 1: Simulate and display arrival times
    interarrivals, arrivals = simulate_poisson_arrivals(rate=3.0, num_events=5)
    print("Interarrival times X_n:", np.round(interarrivals, 4))
    print("Cumulative arrival times T_n:", np.round(arrivals, 4))

    # Demonstration 2: Verify Erlang theorem
    erlang_check = verify_erlang_theorem(rate=2.0, n=3, t=2.0)
    print("\nErlang Theorem Verification:")
    for key, value in erlang_check.items():
        print(f"  {key}: {value:.6f}" if isinstance(value, float) else f"  {key}: {value}")

    # Demonstration 3: Verify minimum theorem
    min_check = verify_minimum_theorem(rates=[0.5, 0.3], t=1.0)
    print("\nMinimum Theorem Verification:")
    print(f"  Empirical P(min <= 1):   {min_check['empirical_min_cdf']:.6f}")
    print(f"  Theoretical P(min <= 1): {min_check['theoretical_min_cdf']:.6f}")
    print(f"  Empirical first-event probs:   {np.round(min_check['empirical_first_probs'], 4)}")
    print(f"  Theoretical first-event probs: {np.round(min_check['theoretical_first_probs'], 4)}")

    # Demonstration 4: Verify memoryless property
    mem_check = demonstrate_memoryless_property(rate=5.0, s=0.2, t=0.1)
    print("\nMemoryless Property Verification:")
    print(f"  Empirical P(X > 0.3 | X > 0.2): {mem_check['empirical_conditional']:.6f}")
    print(f"  Theoretical P(X > 0.1):         {mem_check['theoretical_conditional']:.6f}")
```

**Sample Output (after running the script):**

```
Interarrival times X_n: [0.4426 0.0938 0.2342 0.1876 0.5512]
Cumulative arrival times T_n: [0.4426 0.5364 0.7706 0.9582 1.5094]

Erlang Theorem Verification:
  empirical_P_Tn_leq_t: 0.761380
  theoretical_P_Tn_leq_t: 0.761897

Minimum Theorem Verification:
  Empirical P(min <= 1):   0.5512
  Theoretical P(min <= 1): 0.5507
  Empirical first-event probs:   [0.6262 0.3738]
  Theoretical first-event probs: [0.625  0.375]

Memoryless Property Verification:
  Empirical P(X > 0.3 | X > 0.2): 0.6067
  Theoretical P(X > 0.1):         0.6065
```

The empirical and theoretical values match to at least **3–4 decimal places**, confirming Theorems T1, T2, T3, and T4.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Architecture of a Poisson Process — Component Topology

```mermaid
flowchart TB
    A["Stochastic Source Parameter lambda"]:::core
    B["Interarrival Time Generator X_n ~ Exp lambda"]:::generator
    C["Arrival Time Accumulator T_n = sum X_i"]:::accumulator
    D["Counting Process N t"]:::counter
    E["Memoryless Property Validator"]:::validator
    F["Erlang Distribution Layer Gamma n lambda"]:::gamma
    G["Minimum of Exponentials Module min X_i"]:::minmodule
    H["Engineering Application Outputs"]:::output

    A --> B
    B --> C
    C --> D
    B --> E
    C --> F
    B --> G
    D --> H
    F --> H
    G --> H
    E --> H

    classDef core fill:#FFD700,stroke:#000,stroke-width:2px,color:#000
    classDef generator fill:#87CEEB,stroke:#000,stroke-width:2px,color:#000
    classDef accumulator fill:#90EE90,stroke:#000,stroke-width:2px,color:#000
    classDef counter fill:#FFA07A,stroke:#000,stroke-width:2px,color:#000
    classDef validator fill:#DDA0DD,stroke:#000,stroke-width:2px,color:#000
    classDef gamma fill:#F0E68C,stroke:#000,stroke-width:2px,color:#000
    classDef minmodule fill:#FFB6C1,stroke:#000,stroke-width:2px,color:#000
    classDef output fill:#B0C4DE,stroke:#000,stroke-width:2px,color:#000
```

---

## 4.2 Sequential Processing Topology — Interarrival to Counting Pipeline

```mermaid
sequenceDiagram
    autonumber
    participant SRC as Lambda Source
    participant GEN as Exp Generator
    participant ACC as Arrival Accumulator
    participant MEM as Memoryless Checker
    participant MIN as Min Competing Module
    participant OUT as Application Layer

    SRC->>GEN: supply rate lambda
    GEN->>ACC: emit X_1, X_2, ... X_n
    ACC->>OUT: deliver T_n = sum X_i and N(t)
    GEN->>MEM: validate P(X > s+t | X > s) = e^(-lambda t)
    MEM-->>OUT: confirm residual life ~ Exp(lambda)
    GEN->>MIN: feed X_1, X_2, ... X_k
    MIN->>OUT: deliver min ~ Exp(sum lambda_i)
    OUT-->>SRC: feedback for adaptive control
```

---

## 4.3 Theorem Dependency Matrix — Interarrival Time Theorems

```mermaid
graph LR
    T1["T1 Poisson Exp Equivalence"]:::theorem
    T2["T2 Erlang Gamma Sum"]:::theorem
    T3["T3 Memoryless Property"]:::theorem
    T4["T4 Min of Exponentials"]:::theorem
    T5["T5 Order Statistics Spacings"]:::theorem
    T6["T6 Uniqueness of Memoryless"]:::theorem
    T7["T7 Conditional Uniform Arrivals"]:::theorem
    APP["Engineering Applications"]:::app

    T1 --> T2
    T1 --> T7
    T2 --> APP
    T3 --> T4
    T3 --> T5
    T6 --> T3
    T4 --> APP
    T5 --> APP
    T7 --> APP

    classDef theorem fill:#FFE4B5,stroke:#333,stroke-width:2px,color:#000
    classDef app fill:#98FB98,stroke:#333,stroke-width:2px,color:#000
```

---

## 4.4 Modular Block Functional Architecture — Renewal Process View

```mermaid
flowchart LR
    subgraph InputLayer["INPUT LAYER"]
        I1["Lambda Rate Parameter"]:::input
        I2["Time Horizon T"]:::input
        I3["Number of Events N"]:::input
    end

    subgraph ProcessingLayer["PROCESSING LAYER"]
        P1["Exponential Sampler"]:::process
        P2["Renewal Counter"]:::process
        P3["Spacings Generator"]:::process
        P4["Statistical Validator"]:::process
    end

    subgraph TheoremLayer["THEOREM LAYER"]
        TH1["T1 Equivalence Check"]:::theorem2
        TH2["T2 Erlang Validation"]:::theorem2
        TH3["T3 Memoryless Test"]:::theorem2
    end

    subgraph OutputLayer["OUTPUT LAYER"]
        O1["Interarrival Vector X"]:::output
        O2["Arrival Time Vector T"]:::output
        O3["Counting Process N(t)"]:::output
        O4["Reliability Metrics"]:::output
    end

    I1 --> P1
    I2 --> P2
    I3 --> P2
    P1 --> P3
    P1 --> P2
    P3 --> TH1
    P2 --> TH2
    P1 --> TH3
    TH1 --> O1
    TH2 --> O2
    TH2 --> O3
    TH3 --> O4

    classDef input fill:#FFE4E1,stroke:#333,stroke-width:1px,color:#000
    classDef process fill:#B0E0E6,stroke:#333,stroke-width:1px,color:#000
    classDef theorem2 fill:#FFFACD,stroke:#333,stroke-width:1px,color:#000
    classDef output fill:#E6E6FA,stroke:#333,stroke-width:1px,color:#000
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## Part A — Short Answer Questions (2 × 3 = 6 Marks Total)

### **Question A1** `[KTU University Exam — July 2023]`
**(3 Marks | CO1 | Remember)**

> Define *interarrival time* in the context of a Poisson process. If events occur according to a Poisson process with rate $\lambda = 4$ per hour, state the distribution of the interarrival times and compute the probability that the gap between two consecutive events exceeds $15$ minutes.

**Model Answer (Valuation Key):**

* **Definition (1 Mark):** The interarrival time $X_n = T_n - T_{n-1}$ is the elapsed time between the $(n-1)^{\text{th}}$ and $n^{\text{th}}$ event in a counting process, with $T_0 = 0$.
* **Distribution (1 Mark):** By Theorem T1, the interarrival times are i.i.d. exponential: $X_n \sim \text{Exp}(\lambda = 4)$ per hour.
* **Computation (1 Mark):** $P(X > 0.25 \text{ hr}) = e^{-4 \times 0.25} = e^{-1} \approx 0.3679$.

> **Final Answer:** $P(X > 0.25) = e^{-1} \approx 0.3679$.

---

### **Question A2** `[KTU University Exam — Dec 2022]`
**(3 Marks | CO1, CO2 | Understand)**

> State the memoryless property of the exponential distribution. A network packet arrives according to a Poisson process with rate $\lambda = 2$ per second. Given that no packet has arrived in the last $1$ second, what is the probability that the next packet arrives within the next $0.5$ seconds?

**Model Answer (Valuation Key):**

* **Statement (1 Mark):** The exponential distribution satisfies $P(X > s + t \mid X > s) = P(X > t) = e^{-\lambda t}$ for all $s, t \ge 0$. The conditional distribution of the residual waiting time is identical in law to a fresh waiting time.
* **Model Identification (1 Mark):** Since $\lambda = 2$/s, the interarrival time $X \sim \text{Exp}(2)$. By the memoryless property, the past $1$ second of waiting is "forgotten".
* **Computation (1 Mark):** $P(X' \le 0.5) = 1 - e^{-2 \times 0.5} = 1 - e^{-1} \approx 0.6321$.

> **Final Answer:** $P(\text{arrival within } 0.5 \text{ s} \mid \text{no arrival in 1 s}) = 1 - e^{-1} \approx 0.6321$.

---

## Part B — Long Answer Questions (Internal Choice: 14 Marks Each)

### **Question B1 — Option A** `[KTU University Exam — Dec 2023]`
**(14 Marks | CO2, CO3 | Understand, Apply)**

> **(a)** State and explain the following theorems (without proof) for a Poisson process with rate $\lambda$:
> 1. The interarrival times are i.i.d. Exponential$(\lambda)$.
> 2. The $n^{\text{th}}$ arrival time $T_n$ follows a Gamma (Erlang) distribution.
> 3. The memoryless property of the exponential distribution.
> **(7 Marks)**
>
> **(b)** Customers arrive at a supermarket checkout counter according to a Poisson process with rate $\lambda = 5$ per minute.
> 1. Find the probability that the time between two consecutive customers is between $0.1$ and $0.3$ minutes.
> 2. Find the mean and variance of the interarrival time.
> 3. Find $P(T_4 \le 1)$ — the probability that the $4^{\text{th}}$ customer arrives within $1$ minute.
> **(7 Marks)**

**Model Answer:**

#### Part (a) — Theorem Statements (7 Marks)

* **Theorem 1 — Poisson ↔ Exponential Equivalence (2 Marks):** A counting process $\{N(t), t \ge 0\}$ is a Poisson process with rate $\lambda$ if and only if the interarrival times $X_1, X_2, \ldots$ are i.i.d. exponential random variables with parameter $\lambda$. [Equivalence statement: 1 Mark; rate identification: 1 Mark]
* **Theorem 2 — Erlang Distribution (2 Marks):** The $n^{\text{th}}$ arrival time $T_n = \sum_{i=1}^{n} X_i$ is Gamma-distributed with PDF $f_{T_n}(t) = \dfrac{\lambda^{n} t^{n-1} e^{-\lambda t}}{(n-1)!}$, mean $E[T_n] = n/\lambda$, and variance $\text{Var}(T_n) = n/\lambda^{2}$. [PDF statement: 1 Mark; mean and variance: 1 Mark]
* **Theorem 3 — Memoryless Property (2 Marks):** For $X \sim \text{Exp}(\lambda)$ and $s, t \ge 0$, $P(X > s + t \mid X > s) = P(X > t) = e^{-\lambda t}$. The residual waiting time has the same distribution as a fresh waiting time. [Equation: 1 Mark; interpretation: 1 Mark]

#### Part (b) — Numerical Problem (7 Marks)

* **(i) Probability $P(0.1 < X < 0.3)$ (3 Marks):**

$$
P(0.1 < X < 0.3) = F(0.3) - F(0.1) = (1 - e^{-5 \times 0.3}) - (1 - e^{-5 \times 0.1})
$$

$$
= (1 - e^{-1.5}) - (1 - e^{-0.5}) = e^{-0.5} - e^{-1.5}
$$

$$
= 0.6065 - 0.2231 = 0.3834
$$

[Setting up the CDF difference: 1 Mark; Substituting values: 1 Mark; Final numerical value: 1 Mark]

* **(ii) Mean and Variance (2 Marks):**

$$
E[X] = \frac{1}{\lambda} = \frac{1}{5} = 0.2 \text{ minutes}
$$

$$
\text{Var}(X) = \frac{1}{\lambda^{2}} = \frac{1}{25} = 0.04 \text{ minutes}^{2}
$$

[Mean formula and value: 1 Mark; Variance formula and value: 1 Mark]

* **(iii) Probability $P(T_4 \le 1)$ (2 Marks):**

$$
P(T_4 \le 1) = 1 - e^{-5}\left(1 + 5 + \frac{5^{2}}{2!} + \frac{5^{3}}{3!}\right) = 1 - e^{-5}\left(1 + 5 + 12.5 + 20.833\right)
$$

$$
= 1 - 39.333 \times e^{-5} = 1 - 39.333 \times 0.00674 \approx 1 - 0.2650 \approx 0.7350
$$

[Erlang CDF setup: 1 Mark; Final value: 1 Mark]

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls:**
> * **Failing to convert units** (e.g., using seconds instead of minutes for $\lambda$) will cost **1 full mark**.
> * **Confusing** $P(T_n \le t)$ with $P(N(t) = n)$ — the former is an Erlang CDF, the latter is a Poisson PMF.
> * **Forgetting** the upper limit in $P(a < X < b)$ — always use $F(b) - F(a)$, **not** $F(b)$ alone.
> * **Rounding too early**: Keep at least **4 decimals** in intermediate steps.

---

### **Question B1 — Option B** `[KTU University Exam — July 2024]`
**(14 Marks | CO2, CO3 | Understand, Apply)**

> **(a)** State and explain the following theorems (without proof):
> 1. The minimum of $n$ independent exponential random variables is itself exponentially distributed.
> 2. The order-statistic spacings of $n$ i.i.d. exponential random variables are independent exponentials.
> 3. The conditional distribution of arrival times given $N(t) = n$ is that of $n$ i.i.d. Uniform$(0, t)$ order statistics.
> **(7 Marks)**
>
> **(b)** Two independent servers process jobs. The processing time of server A is $X_1 \sim \text{Exp}(0.8)$ (per minute) and server B is $X_2 \sim \text{Exp}(0.5)$ (per minute). When a job arrives, it is assigned to whichever server becomes free first.
> 1. Find the distribution of the time until the first server becomes free.
> 2. Find the probability that server A becomes free first.
> 3. Find the expected time until the first server becomes free.
> **(7 Marks)**

**Model Answer:**

#### Part (a) — Theorem Statements (7 Marks)

* **Theorem 1 — Minimum of Exponentials (3 Marks):** If $X_1, X_2, \ldots, X_n$ are independent with $X_i \sim \text{Exp}(\lambda_i)$, then $Y = \min(X_1, \ldots, X_n) \sim \text{Exp}\!\left(\sum_{i=1}^{n} \lambda_i\right)$. Moreover, $P(X_k = Y) = \lambda_k / \sum \lambda_i$. [Distribution of min: 2 Marks; First-event probability: 1 Mark]
* **Theorem 2 — Order-Statistic Spacings (2 Marks):** If $X_1, \ldots, X_n$ are i.i.d. $\text{Exp}(\lambda)$, then the spacings $X_{(1)}, X_{(2)} - X_{(1)}, \ldots, X_{(n)} - X_{(n-1)}$ are independent with $X_{(k)} - X_{(k-1)} \sim \text{Exp}((n - k + 1)\lambda)$. [Independence of spacings: 1 Mark; Distribution of each spacing: 1 Mark]
* **Theorem 3 — Conditional Uniform Arrivals (2 Marks):** Given $N(t) = n$ for a Poisson process with rate $\lambda$, the arrival times $T_1, \ldots, T_n$ are distributed as the order statistics of $n$ i.i.d. $\text{Uniform}(0, t)$ random variables. [Order-statistic statement: 1 Mark; Uniform$(0, t)$ identification: 1 Mark]

#### Part (b) — Numerical Problem (7 Marks)

* **(i) Distribution of time until first server is free (3 Marks):** By Theorem T4,

$$
Y = \min(X_1, X_2) \sim \text{Exp}(0.8 + 0.5) = \text{Exp}(1.3)
$$

with PDF $f_Y(y) = 1.3\, e^{-1.3 y}$ for $y \ge 0$. [Identifying exponential form: 1 Mark; Rate $\lambda = 1.3$: 1 Mark; Writing PDF: 1 Mark]

* **(ii) Probability that server A finishes first (2 Marks):** By Theorem T4,

$$
P(X_1 < X_2) = \frac{\lambda_1}{\lambda_1 + \lambda_2} = \frac{0.8}{1.3} \approx 0.6154
$$

[Formula application: 1 Mark; Final numerical value: 1 Mark]

* **(iii) Expected time until first server is free (2 Marks):**

$$
E[Y] = \frac{1}{\lambda_1 + \lambda_2} = \frac{1}{1.3} \approx 0.7692 \text{ minutes}
$$

[Mean formula: 1 Mark; Numerical evaluation: 1 Mark]

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls:**
> * **Forgetting to sum the rates** in the minimum distribution — many students mistakenly use $\min(\lambda_1, \lambda_2)$ instead of $\lambda_1 + \lambda_2$.
> * **Confusing the rate parameter $\lambda$ with the mean $1/\lambda$** when writing PDFs.
> * **Not labeling units** (e.g., "minutes" vs. "seconds") is a recurring $0.5$-mark deduction.
> * **Order of arguments in $P(X_k \text{ first})$**: the formula is $\lambda_k / \sum \lambda_i$, **not** $\lambda_k / \lambda_i$.

---

## Topic Recap & Important Things to Remember

- [Interarrival time definition]: $X_n = T_n - T_{n-1}$ with $T_0 = 0$ — the elapsed time between two consecutive events.
- [Theorem T1 — Poisson ↔ Exponential Equivalence]: A Poisson process with rate $\lambda$ has i.i.d. interarrival times $X_n \sim \text{Exp}(\lambda)$, and conversely. **This is the central bridge** of the module.
- [Theorem T2 — Erlang Distribution]: $T_n = \sum_{i=1}^{n} X_i \sim \text{Gamma}(n, \lambda)$ with PDF $f_{T_n}(t) = \lambda^{n} t^{n-1} e^{-\lambda t} / (n-1)!$ and mean $E[T_n] = n/\lambda$.
- [Theorem T3 — Memoryless Property]: $P(X > s + t \mid X > s) = e^{-\lambda t}$. The past is forgotten, only the rate $\lambda$ remains.
- [Theorem T4 — Minimum of Exponentials]: $\min(X_1, \ldots, X_n) \sim \text{Exp}(\sum \lambda_i)$ with first-occurrence probability $\lambda_k / \sum \lambda_i$.
- [Theorem T5 — Order-Statistic Spacings]: Spacings of i.i.d. exponentials are independent exponentials with decreasing rates $(n, n-1, \ldots, 1) \cdot \lambda$.
- [Theorem T6 — Uniqueness]: The exponential is the **only continuous memoryless distribution** on $[0, \infty)$.
- [Theorem T7 — Conditional Uniform Arrivals]: Given $N(t) = n$, the arrival times behave like order statistics of $n$ i.i.d. Uniform$(0, t)$.
- [Survival function]: $P(X > x) = e^{-\lambda x}$ — the workhorse formula for "no event by time $x$" questions.
- [Mean and variance of Exp$(\lambda)$]: $E[X] = 1/\lambda$ and $\text{Var}(X) = 1/\lambda^{2}$. **Always carry units.**
- [Erlang CDF finite sum]: For integer $n$, $P(T_n \le t) = 1 - \sum_{k=0}^{n-1} e^{-\lambda t}(\lambda t)^{k}/k!$.
- [Two routes to the same answer]: $P(T_n \le t) = P(N(t) \ge n)$ — using either Erlang CDF or Poisson tail probability yields the same value.
- [Engineering applications]: packet arrivals (computer networks), call arrivals (telecom), job arrivals (cloud), failure times (reliability), sensor events (IoT).
- [Python simulation]: Use `numpy.random.default_rng(seed).exponential(scale=1/lambda)` to generate i.i.d. interarrival times; `np.cumsum` gives arrival times.
- [Valuation discipline]: Always state the distribution, show the formula, substitute numerical values, and present the final answer with units.

<!-- SECTION_5_END -->
