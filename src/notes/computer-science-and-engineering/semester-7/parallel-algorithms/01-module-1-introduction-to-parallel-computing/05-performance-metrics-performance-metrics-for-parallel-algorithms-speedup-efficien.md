---
title: "Performance Metrics - Performance metrics for parallel algorithms: speedup, efficiency, scalability, Amdahl's Law and Gustafson's Law."
subject: "PARALLEL ALGORITHMS"
module: "Module 1: Introduction to Parallel Computing "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c6f8"
status: "completed"
scrapedAt: "2026-05-20T17:08:48.700Z"
---
# Parallel Algorithms: Module 1 - Introduction to Parallel Computing

## Topic: Performance Metrics for Parallel Algorithms

---

### 1. Introduction to Performance Metrics

In parallel computing, simply making an algorithm run faster isn't always the whole story. We need ways to quantify *how much* faster it is and how well it utilizes the available parallel resources. Performance metrics allow us to:

*   **Quantify improvement:** Measure the benefit of parallelization.
*   **Compare algorithms:** Determine which parallel algorithm is better for a given problem.
*   **Identify bottlenecks:** Understand limitations in the parallelization strategy.
*   **Guide algorithm design:** Inform decisions about how to parallelize effectively.

---

### 2. Key Performance Metrics

This section will cover the fundamental metrics used to evaluate the performance of parallel algorithms.

#### 2.1. Speedup

**Definition:** Speedup measures how much faster a parallel algorithm runs compared to its sequential counterpart for the same problem size.

**Formula:**

$S(p) = \frac{T_s}{T_p}$

Where:
*   $S(p)$: Speedup with $p$ processors.
*   $T_s$: Time taken by the sequential algorithm.
*   $T_p$: Time taken by the parallel algorithm using $p$ processors.

**Ideal Speedup:** The ideal speedup is equal to the number of processors, $p$. This means the parallel algorithm runs $p$ times faster than the sequential one.

**Types of Speedup:**

*   **Perfect Speedup:** $S(p) = p$. Achieved when work is perfectly distributed and there's no overhead.
*   **Linear Speedup:** As $p$ increases, $S(p)$ increases proportionally.
*   **Sub-linear Speedup:** $S(p) < p$. This is the most common scenario in practice due to communication overhead, synchronization, and workload imbalance.
*   **Super-linear Speedup:** $S(p) > p$. This is rare and often occurs due to:
    *   **Cache effects:** Parallel processors might access data in a way that avoids cache misses more effectively than a sequential processor.
    *   **Resource contention:** In some cases, distributing the work can reduce contention for shared resources, leading to faster execution.
    *   **Problem decomposition:** Breaking down a problem might reveal more efficient computational paths.

**Example:**
Suppose a sequential algorithm takes 100 seconds ($T_s = 100$s).
A parallel algorithm using 4 processors takes 30 seconds ($T_p = 30$s).
Speedup, $S(4) = \frac{100}{30} \approx 3.33$.

**Important Point to Remember:**
*   Speedup is always relative to a specific sequential algorithm for a given problem size.
*   Super-linear speedup should be investigated carefully as it can sometimes indicate issues with the benchmark or the sequential baseline.

#### 2.2. Efficiency

**Definition:** Efficiency measures how well the processors are utilized in the parallel algorithm. It's the speedup divided by the number of processors.

**Formula:**

$E(p) = \frac{S(p)}{p} = \frac{T_s}{p \cdot T_p}$

**Interpretation:**
*   $E(p) = 1$ (or 100%): Perfect efficiency. The parallel algorithm achieves linear speedup.
*   $0 < E(p) < 1$: The parallel algorithm is not perfectly efficient, meaning there's some overhead or underutilization.
*   $E(p) \le 0$: This indicates a serious problem, possibly where the parallel version is slower than the sequential one.

**Relationship with Speedup:** Efficiency is essentially speedup normalized by the number of processors. If speedup is less than $p$, efficiency will be less than 1.

**Example:**
Using the previous example where $S(4) \approx 3.33$ and $p = 4$.
Efficiency, $E(4) = \frac{3.33}{4} \approx 0.83$ (or 83%).
This means the 4 processors are utilized about 83% of the time effectively.

**Important Point to Remember:**
*   Efficiency is a crucial metric because it shows how effectively the parallel system is being used. High speedup on many processors doesn't automatically mean good efficiency if those processors are mostly idle or waiting.
*   As the number of processors ($p$) increases, efficiency typically tends to decrease due to increasing communication and synchronization overhead.

#### 2.3. Scalability

**Definition:** Scalability refers to the ability of a parallel system (hardware and software) to maintain or improve performance as the number of processors and/or the problem size are increased.

**Types of Scalability:**

*   **Strong Scalability:** The ability to maintain performance (or keep execution time constant) as the number of processors increases, while keeping the *problem size fixed*.
    *   **Goal:** Reduce execution time by adding more processors.
    *   **Ideal:** Speedup increases proportionally to the number of processors ($S(p) = p$). In reality, strong scalability is hard to achieve for large $p$ due to overhead.
    *   **Example:** If a problem takes 100s on 1 processor, strong scalability means it should take ~50s on 2 processors, ~25s on 4, and ~12.5s on 8.

*   **Weak Scalability:** The ability to maintain efficiency (or keep execution time constant) as both the number of processors and the *problem size* increase proportionally.
    *   **Goal:** Handle larger problems by adding more processors while keeping the time per processor (or total time) constant.
    *   **Ideal:** $T_p$ remains constant as $p$ and problem size increase together. This means $S(p)$ grows linearly with $p$.
    *   **Example:** If a problem of size N takes 100s on 1 processor, a problem of size 2N should take ~100s on 2 processors, a problem of size 4N should take ~100s on 4 processors, and a problem of size 8N should take ~100s on 8 processors.

**Factors Affecting Scalability:**

*   **Communication overhead:** As $p$ increases, the amount of data that needs to be exchanged between processors often grows, leading to increased communication costs.
*   **Synchronization overhead:** More processors often mean more points where processors need to wait for each other, increasing idle time.
*   **Workload distribution:** Uneven distribution of work can lead to some processors being idle while others are busy.
*   **Memory bandwidth and latency:** As $p$ increases, the demand on memory can outstrip available bandwidth.

**Important Point to Remember:**
*   Scalability is crucial for solving larger and more complex problems efficiently.
*   Weak scalability is generally easier to achieve than strong scalability, especially for computationally intensive tasks.

---

### 3. Laws of Parallelism

These laws provide theoretical frameworks for understanding the limits of speedup achievable through parallelization.

#### 3.1. Amdahl's Law

**Definition:** Amdahl's Law is a formula used to find the maximum possible improvement in a system when only a part of the system is improved. In parallel computing, it focuses on the limitation imposed by the sequential portion of a program.

**Formula:**

$S(p) = \frac{1}{(1-f) + \frac{f}{p}}$

Where:
*   $S(p)$: The theoretical speedup with $p$ processors.
*   $f$: The fraction of the original sequential program that can be parallelized.
*   $(1-f)$: The fraction of the original sequential program that is inherently sequential (cannot be parallelized).
*   $p$: The number of processors.

**Key Insight:**
Amdahl's Law highlights that even with an infinite number of processors ($p \rightarrow \infty$), the maximum speedup is limited by the sequential portion of the program.

**Implications:**
*   If a program is entirely sequential ($f=0$), the speedup is 1, regardless of the number of processors.
*   To achieve high speedups, the parallelizable fraction ($f$) must be very close to 1.
*   The law suggests diminishing returns: adding more processors beyond a certain point yields less and less additional speedup if the sequential part remains significant.

**Example:**
Consider a program where 80% of the execution time can be parallelized ($f=0.8$). The sequential part is 20% ($1-f=0.2$).

*   With 2 processors ($p=2$):
    $S(2) = \frac{1}{(1-0.8) + \frac{0.8}{2}} = \frac{1}{0.2 + 0.4} = \frac{1}{0.6} \approx 1.67$

*   With 10 processors ($p=10$):
    $S(10) = \frac{1}{(1-0.8) + \frac{0.8}{10}} = \frac{1}{0.2 + 0.08} = \frac{1}{0.28} \approx 3.57$

*   With infinite processors ($p \rightarrow \infty$):
    $S(\infty) = \frac{1}{(1-0.8) + \frac{0.8}{\infty}} = \frac{1}{0.2 + 0} = \frac{1}{0.2} = 5$

Even with infinite processors, the maximum speedup is only 5x, limited by the 20% sequential portion.

**Important Point to Remember:**
*   Amdahl's Law is about improving the performance of a *fixed* workload.
*   It assumes the sequential part's execution time remains constant regardless of the number of processors.

#### 3.2. Gustafson's Law (Gustafson's Law of Parallel Computing)

**Definition:** Gustafson's Law is an observation that contradicts the limitations implied by Amdahl's Law by considering that as more processors are added, the size of the problem that can be effectively solved also increases. It focuses on weak scalability.

**Formula (often expressed in terms of speedup):**

$S(p) = p - (p-1) \cdot \alpha$

Where:
*   $S(p)$: The theoretical speedup with $p$ processors.
*   $p$: The number of processors.
*   $\alpha$: The fraction of the *parallel algorithm's* execution time that is *sequential*. This means $\alpha = (1-f_{parallel})$, where $f_{parallel}$ is the parallelizable fraction of the *scaled* problem.

**Key Insight:**
Gustafson's Law suggests that if the problem size scales with the number of processors, the parallel fraction can effectively increase, leading to better speedups than predicted by Amdahl's Law. It states that the speedup from parallelization is more proportional to the number of processors than to the problem size.

**Implications:**
*   The law implies that for problems that can be scaled, the performance improvement is indeed closer to linear as the number of processors increases.
*   It's more representative of how parallel systems are actually used for large-scale problems.

**Example:**
Consider a problem where 80% of the *scaled* execution time can be parallelized. This means the sequential fraction $\alpha = 0.2$.

*   With 2 processors ($p=2$):
    $S(2) = 2 - (2-1) \cdot 0.2 = 2 - 1 \cdot 0.2 = 2 - 0.2 = 1.8$ (Speedup of 1.8x)

*   With 10 processors ($p=10$):
    $S(10) = 10 - (10-1) \cdot 0.2 = 10 - 9 \cdot 0.2 = 10 - 1.8 = 8.2$ (Speedup of 8.2x)

*   With 100 processors ($p=100$):
    $S(100) = 100 - (100-1) \cdot 0.2 = 100 - 99 \cdot 0.2 = 100 - 19.8 = 80.2$ (Speedup of 80.2x)

This shows that if the problem can be scaled to utilize the additional processors, the speedup can be much closer to linear than Amdahl's Law predicts for a fixed problem size.

**Important Point to Remember:**
*   Gustafson's Law is about scaling the problem size along with the number of processors.
*   It's more optimistic than Amdahl's Law regarding the achievable speedup in real-world scenarios where larger problems are tackled with more compute resources.

**Comparing Amdahl's and Gustafson's Laws:**

| Feature           | Amdahl's Law                                         | Gustafson's Law                                       |
| :---------------- | :--------------------------------------------------- | :---------------------------------------------------- |
| **Focus**         | Fixed problem size, limits of speedup.               | Scaled problem size, achievable speedup.              |
| **Key Variable**  | Fraction of sequential code ($1-f$) for a fixed problem. | Fraction of sequential code ($\alpha$) for a scaled problem. |
| **Prediction**    | Speedup is limited by the sequential fraction.       | Speedup can be nearly linear with more processors if the problem scales. |
| **Application**   | Optimizing existing fixed-size applications.         | Designing parallel systems for larger, complex problems. |
| **Optimism**      | Pessimistic regarding speedup with many processors. | Optimistic regarding speedup with many processors.      |

---

### 4. Practice Questions

**Question 1:**
A sequential algorithm takes 200 seconds to complete. A parallel version using 8 processors takes 30 seconds. Calculate the speedup and efficiency.

**Question 2:**
An algorithm has a parallelizable fraction of 95%.
a) What is the theoretical maximum speedup according to Amdahl's Law if you use 16 processors?
b) What is the theoretical maximum speedup if you use 100 processors?
c) What is the limit of speedup as the number of processors approaches infinity?

**Question 3:**
You are designing a parallel application. You observe that as you double the number of processors, you can effectively double the problem size you process, and the overall execution time remains roughly the same. Does this observation support Amdahl's Law or Gustafson's Law better? Explain why.

**Question 4:**
Define strong scalability and weak scalability. Provide a scenario where strong scalability might be difficult to achieve.

---

### 5. Answers to Practice Questions

**Answer 1:**
*   **Speedup:**
    $S(p) = \frac{T_s}{T_p}$
    $S(8) = \frac{200 \text{ s}}{30 \text{ s}} \approx 6.67$
    The speedup is approximately 6.67.

*   **Efficiency:**
    $E(p) = \frac{S(p)}{p}$
    $E(8) = \frac{6.67}{8} \approx 0.833$
    The efficiency is approximately 83.3%.

**Answer 2:**
The parallelizable fraction ($f$) is 0.95. The sequential fraction ($1-f$) is 0.05.

a) Using 16 processors ($p=16$):
    $S(16) = \frac{1}{(1-f) + \frac{f}{p}} = \frac{1}{(1-0.95) + \frac{0.95}{16}} = \frac{1}{0.05 + 0.059375} = \frac{1}{0.109375} \approx 9.14$
    The theoretical maximum speedup is approximately 9.14.

b) Using 100 processors ($p=100$):
    $S(100) = \frac{1}{(1-0.95) + \frac{0.95}{100}} = \frac{1}{0.05 + 0.0095} = \frac{1}{0.0595} \approx 16.81$
    The theoretical maximum speedup is approximately 16.81.

c) As the number of processors approaches infinity ($p \rightarrow \infty$):
    $S(\infty) = \frac{1}{(1-f) + \frac{f}{\infty}} = \frac{1}{(1-0.95) + 0} = \frac{1}{0.05} = 20$
    The limit of speedup is 20.

**Answer 3:**
This observation supports **Gustafson's Law** better.
Gustafson's Law specifically addresses the scenario where the problem size scales with the number of processors. The fact that doubling the processors allows doubling the problem size while keeping execution time constant indicates weak scalability. This implies that the parallelizable fraction of the *scaled* problem is high enough to offset the overhead, allowing for near-linear speedup, which is the core insight of Gustafson's Law. Amdahl's Law, in contrast, predicts performance for a fixed problem size, where speedup is fundamentally limited by the sequential portion.

**Answer 4:**
*   **Strong Scalability:** The ability of a parallel system to maintain or improve performance as the number of processors increases, while keeping the *problem size fixed*. The goal is to reduce the execution time by adding more processors.
*   **Weak Scalability:** The ability of a parallel system to maintain efficiency (or keep execution time constant) as both the number of processors and the *problem size* increase proportionally. The goal is to be able to solve larger problems with more processors without a significant degradation in performance per processor.

**Scenario where strong scalability might be difficult:**
Strong scalability can be difficult to achieve for problems with a significant *fixed* overhead or a substantial sequential component that does not decrease with more processors. For example, consider a parallel algorithm that involves a large amount of global synchronization at the end of each step, or a complex pre-processing step that must be performed sequentially. As more processors are added to solve the same-sized problem, the time spent in communication and synchronization can increase disproportionately, limiting the speedup and making it difficult to achieve linear gains. A typical example is an algorithm that requires a global reduction (e.g., summing all elements across all processors) at frequent intervals. With a very large number of processors, this reduction step can become a significant bottleneck.

---

### 6. Important Points to Remember (Summary)

*   **Speedup** measures how much faster a parallel algorithm is than its sequential counterpart.
*   **Efficiency** measures how well the processors are utilized; it's speedup divided by the number of processors.
*   **Scalability** is the ability to maintain or improve performance as processors and/or problem size increase.
    *   **Strong Scalability:** Fixed problem size, aim for reduced time.
    *   **Weak Scalability:** Proportional increase in problem size and processors, aim for constant time per processor.
*   **Amdahl's Law:** Limits speedup for a *fixed problem size* by the inherently sequential fraction.
*   **Gustafson's Law:** Suggests that for *scaled problem sizes*, speedup can be closer to linear due to the ability to utilize more processors effectively.
*   The trade-off between computation, communication, and synchronization is central to achieving good performance and scalability.
*   Understanding these metrics is crucial for designing, analyzing, and optimizing parallel algorithms and systems.
