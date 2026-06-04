---
title: "Parallel Sorting Algorithms - Parallel sorting algorithms: parallel merge sort, parallel quicksort, bitonic merge sort"
subject: "PARALLEL ALGORITHMS"
module: "Module 2: Parallel Algorithms for Basic Operations "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c6fd"
status: "completed"
scrapedAt: "2026-05-20T17:08:51.543Z"
---
# PARALLEL ALGORITHMS: Module 2 - Parallel Sorting Algorithms

This module delves into the exciting world of sorting data efficiently using multiple processors. We will explore some of the most fundamental and widely used parallel sorting algorithms: Parallel Merge Sort, Parallel Quicksort, and Bitonic Merge Sort.

---

## Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental concepts of parallel sorting.
*   Describe and analyze the performance of Parallel Merge Sort.
*   Describe and analyze the performance of Parallel Quicksort.
*   Describe and analyze the performance of Bitonic Merge Sort.
*   Compare and contrast the different parallel sorting algorithms.
*   Identify suitable applications for each parallel sorting algorithm.

---

## 1. Introduction to Parallel Sorting

Sorting is a ubiquitous operation in computer science. When dealing with massive datasets, sequential sorting algorithms become a bottleneck. Parallel sorting aims to leverage the power of multiple processors to achieve significant speedups.

### Key Concepts and Definitions

*   **Parallel Algorithm:** An algorithm designed to be executed by multiple processors simultaneously.
*   **Concurrency:** The ability of different parts or units of a program, or the system, to be executed out-of-order or in partial order, without affecting the final outcome.
*   **Parallelism:** The ability to execute multiple tasks or parts of a task at the exact same time.
*   **Data Decomposition:** Dividing the input data into smaller chunks that can be processed by different processors.
*   **Task Decomposition:** Dividing the sorting task itself into sub-tasks that can be executed in parallel.
*   **Communication Overhead:** The time and resources spent on processors exchanging information during the parallel execution. This is a crucial factor in determining the efficiency of parallel algorithms.
*   **Granularity:** The size of the sub-tasks. Fine-grained parallelism involves many small tasks, while coarse-grained parallelism involves fewer, larger tasks.
*   **Scalability:** The ability of a parallel algorithm to maintain its efficiency as the number of processors increases.

---

## 2. Parallel Merge Sort

Merge Sort is a classic divide-and-conquer sorting algorithm. Parallelizing it involves dividing the sorting task and then efficiently merging the sorted sub-arrays.

### How it works (Parallel Version)

1.  **Divide:** The input array is recursively divided into two halves until each sub-array contains only one element (which is trivially sorted).
2.  **Conquer (Parallel):** Each sub-array is sorted independently and in parallel by different processors. This recursive division can be done up to a certain level, after which sequential sorting might be more efficient due to communication overhead.
3.  **Combine (Parallel Merge):** The sorted sub-arrays are merged. This merging step is also parallelized.

### Parallel Merge Strategy

The key to parallel merge sort lies in the parallelization of the merge operation. Several strategies exist:

*   **Recursive Parallel Merge:** Similar to the divide-and-conquer approach, the merge operation itself is recursively divided.
    *   Given two sorted arrays `A` and `B`, find the median of the larger array (say `A`).
    *   Find the split point in the smaller array (`B`) where elements are smaller than or equal to the median of `A`. This can be done using binary search in parallel.
    *   The elements of `A` before the median and the corresponding elements of `B` form one sorted sub-problem.
    *   The elements of `A` after the median and the remaining elements of `B` form another sorted sub-problem.
    *   These two sub-problems are then merged recursively in parallel.
*   **Iterative Parallel Merge:** Multiple processors can be assigned to merge different pairs of sorted sub-arrays simultaneously. For instance, if we have 4 sorted sub-arrays, we can merge pairs (1&2, 3&4) in parallel.

### Performance Analysis (Parallel Merge Sort)

*   **Time Complexity:**
    *   **Sequential Merge Sort:** $O(n \log n)$
    *   **Parallel Merge Sort:** With $p$ processors, the time complexity can be reduced. The division phase takes $O(\log n)$ levels of recursion. The parallel merge of two sorted lists of size $k$ can be done in $O(k/p)$ or $O(k)$ depending on the parallel merge strategy and processor allocation.
    *   A common analysis for parallel merge sort on $p$ processors achieves a time complexity of approximately $O(\frac{n}{p} \log n)$ for the sorting phase and $O(\frac{n}{p})$ for the merging phase, leading to an overall **$O(\frac{n}{p} \log n)$** in ideal scenarios where merging is perfectly parallelizable and communication overhead is minimal. However, a more precise analysis considering the parallel merge can lead to **$O(\frac{n}{p} + \log^2 p)$** on certain architectures if using recursive parallel merge.
*   **Space Complexity:**
    *   Similar to sequential merge sort, it requires $O(n)$ auxiliary space for merging. In a parallel setting, this space might be distributed across processors.

### Example: Parallel Merge Sort on 4 Processors

Let's sort the array: `[3, 1, 4, 1, 5, 9, 2, 6]` with 4 processors.

1.  **Initial Split:**
    *   Processor 1: `[3, 1]`
    *   Processor 2: `[4, 1]`
    *   Processor 3: `[5, 9]`
    *   Processor 4: `[2, 6]`

2.  **Sequential Sort (on each processor):**
    *   Processor 1: `[1, 3]`
    *   Processor 2: `[1, 4]`
    *   Processor 3: `[5, 9]`
    *   Processor 4: `[2, 6]`

3.  **Parallel Merge (Level 1):**
    *   Processor 1 & 2 merge their sorted halves in parallel.
        *   Processor 1: Merges `[1, 3]` and `[1, 4]` -> `[1, 1, 3, 4]`
    *   Processor 3 & 4 merge their sorted halves in parallel.
        *   Processor 3: Merges `[5, 9]` and `[2, 6]` -> `[2, 5, 6, 9]`

4.  **Parallel Merge (Level 2):**
    *   One processor (or a new set of processors) merges the results:
        *   Merges `[1, 1, 3, 4]` and `[2, 5, 6, 9]` -> `[1, 1, 2, 3, 4, 5, 6, 9]`

### Important Points to Remember (Parallel Merge Sort)

*   Excellent for **shared-memory** architectures due to the nature of merging.
*   Relatively **balanced workload** across processors.
*   **Communication is concentrated in the merge phase**.
*   Can be adapted for distributed memory but requires careful handling of communication.

---

## 3. Parallel Quicksort

Quicksort is another popular divide-and-conquer sorting algorithm known for its average-case efficiency. Parallelizing Quicksort involves parallelizing the partitioning step and/or the recursive calls.

### How it works (Parallel Version)

1.  **Pivot Selection:** A pivot element is chosen from the array.
2.  **Partitioning (Parallel):** The array is partitioned into two sub-arrays: elements less than the pivot and elements greater than or equal to the pivot. This partitioning can be done in parallel.
    *   **Parallel Partitioning:** Multiple processors can scan different parts of the array simultaneously. They identify elements that need to be swapped and coordinate these swaps. This can be complex to implement efficiently.
3.  **Recursive Calls (Parallel):** The two sub-arrays are then sorted recursively. These recursive calls are made on different processors.

### Parallel Partitioning Strategies

*   **Multiple Scanners:** Divide the array into segments, and assign each segment to a processor to scan for elements less than/greater than the pivot. Then, communicate and rearrange elements.
*   **Block Swaps:** Processors work on blocks of data, identifying elements to move across block boundaries to achieve the partition.
*   **Random Pivot Selection:** To ensure good average-case performance and avoid worst-case scenarios, a random pivot is often chosen. This can be done in parallel by having processors pick local random elements and then agreeing on a global pivot.

### Performance Analysis (Parallel Quicksort)

*   **Time Complexity:**
    *   **Sequential Quicksort:** $O(n \log n)$ average, $O(n^2)$ worst-case.
    *   **Parallel Quicksort:**
        *   With $p$ processors, the goal is to reduce the time.
        *   The partitioning step on $p$ processors can take $O(\frac{n}{p})$ time if done efficiently.
        *   The recursive calls can be parallelized. The depth of recursion is $O(\log n)$.
        *   In ideal scenarios with good pivot selection, the time complexity can approach **$O(\frac{n}{p} \log n)$**.
        *   However, **load imbalance** due to poor pivot selection can lead to $O(\frac{n}{p} \cdot n)$ in the worst case, though this is rare with random pivots.
        *   A more refined analysis on $p$ processors, considering the communication for partitioning and parallel recursion, can lead to **$O(\frac{n}{p} \log n)$** on average.
*   **Space Complexity:**
    *   Similar to sequential Quicksort, it can be $O(\log n)$ for the recursion stack on average. However, parallel implementations might require additional space for communication buffers, potentially leading to **$O(n)$** in some distributed-memory scenarios.

### Example: Parallel Quicksort on 2 Processors

Let's sort the array: `[7, 2, 1, 6, 8, 5, 3, 4]` with 2 processors.

1.  **Pivot Selection:** Let's choose the middle element `6` as the pivot.

2.  **Parallel Partitioning:**
    *   Processor 1 handles `[7, 2, 1, 6]`
    *   Processor 2 handles `[8, 5, 3, 4]`

    *   **Processor 1:** Partitions `[7, 2, 1, 6]` around `6`.
        *   Finds `2`, `1` are less than `6`.
        *   Finds `7` is greater than `6`.
        *   Result of its partition: `[2, 1, 6, 7]` (elements less than pivot, pivot, elements greater than pivot).
    *   **Processor 2:** Partitions `[8, 5, 3, 4]` around `6`.
        *   Finds `5`, `3`, `4` are less than `6`.
        *   Finds `8` is greater than `6`.
        *   Result of its partition: `[5, 3, 4, 8]` (elements less than pivot, elements greater than pivot).

3.  **Gathering Partitioned Elements (Communication):**
    *   Processor 1 needs to send `7` (greater than pivot) to where `8` (greater than pivot) is.
    *   Processor 2 needs to send `5, 3, 4` (less than pivot) to where `2, 1` (less than pivot) are.
    *   A more organized approach would be to have a global view after partitioning. Let's assume a coordinated swap or movement.
    *   Array after conceptual parallel partition: `[2, 1, 5, 3, 4, 6, 7, 8]`
        *   Elements less than 6: `[2, 1, 5, 3, 4]`
        *   Pivot: `6`
        *   Elements greater than 6: `[7, 8]`

4.  **Recursive Calls (Parallel):**
    *   Processor 1 sorts `[2, 1, 5, 3, 4]`
    *   Processor 2 sorts `[7, 8]`

    *   These recursive calls will continue in parallel until the base case is reached.

### Important Points to Remember (Parallel Quicksort)

*   **In-place sorting potential:** Can be implemented in-place, reducing space requirements.
*   **Load imbalance:** Highly susceptible to load imbalance if the pivot selection is poor, leading to worst-case performance.
*   **Communication intensive:** Partitioning requires communication, especially in distributed memory systems.
*   **Good for shared memory:** Can be effectively implemented on shared-memory systems where processors can directly access and modify parts of the array.

---

## 4. Bitonic Merge Sort

Bitonic Merge Sort is a parallel sorting algorithm that leverages a special data structure called a **bitonic sequence**. It is particularly well-suited for parallel architectures with regular interconnection networks like hypercubes and meshes.

### Key Concepts: Bitonic Sequence

A **bitonic sequence** is a sequence that is either monotonically increasing or decreasing, or can be split into two bitonic sequences, where one is monotonically increasing and the other is monotonically decreasing.

*   **Example of a bitonic sequence:** `[1, 3, 5, 8, 12, 10, 7, 4]` (increases then decreases)
*   **Example of a bitonic sequence:** `[12, 10, 7, 4, 1, 3, 5, 8]` (decreases then increases)

### Bitonic Sorter Network

A **bitonic sorter network** is a non-blocking sorting network constructed from comparators. A comparator takes two inputs and outputs them in sorted order. The bitonic sorter network arranges these comparators in a specific pattern to sort any input sequence.

The sorter network has $\log^2 n$ stages, and each stage involves $n/2$ comparators.

### How Bitonic Merge Sort Works

Bitonic Merge Sort works in two phases:

1.  **Bitonic Sequence Generation (Parallel):**
    *   The input array is recursively converted into bitonic sequences.
    *   This involves repeatedly merging smaller bitonic sequences to form larger ones.
    *   At each step, we create two bitonic sequences of size $k$, one sorted in ascending order and the other in descending order, and concatenate them to form a bitonic sequence of size $2k$.
    *   This process continues until the entire array is a single bitonic sequence.
    *   This phase can be highly parallelized.

2.  **Bitonic Sequence Sorting (Parallel):**
    *   Once the array is a bitonic sequence, a series of "compare-and-swap" operations are performed in a specific order across all elements.
    *   These operations are structured as a sequence of stages. In each stage, pairs of elements are compared and swapped based on their relative positions and the direction of sorting (ascending or descending).
    *   The key insight is that a bitonic sequence can be sorted by repeatedly applying a "bitonic merge" operation. A bitonic merge takes a bitonic sequence and produces a sorted sequence by performing $n/2$ compare-and-swap operations in parallel in each of $\log n$ stages.

### Performance Analysis (Bitonic Merge Sort)

*   **Time Complexity:**
    *   **Bitonic Sequence Generation:** This phase involves $O(\log^2 n)$ steps, and each step can be parallelized. With $n$ processors, this phase can be done in **$O(\log^2 n)$**.
    *   **Bitonic Sequence Sorting:** This phase involves $\log n$ stages, and each stage performs $n/2$ compare-and-swap operations in parallel. This phase takes **$O(\log^2 n)$** time.
    *   **Overall Time Complexity:** **$O(\log^2 n)$** for a fixed number of processors. If we consider $p$ processors, and map the compare-and-swap operations to them, the complexity remains **$O(\log^2 n)$** as the number of operations per stage is fixed regardless of $n$. The speedup is achieved by performing these operations in parallel.
*   **Space Complexity:**
    *   Bitonic Merge Sort is typically implemented using sorting networks, which are inherently **$O(n \log n)$** in terms of the number of comparators. However, in terms of *auxiliary space* required during execution, it can be **$O(n)$** or even in-place depending on the implementation.

### Example: Bitonic Merge Sort on a small scale

Let's sort `[3, 7, 4, 8, 6, 1, 2, 5]`

**Phase 1: Bitonic Sequence Generation**

*   **Initial:** `[3, 7, 4, 8, 6, 1, 2, 5]` (Not bitonic)
*   **Step 1 (Merge sorted pairs):**
    *   Pairs: `[3, 7]`, `[4, 8]`, `[6, 1]`, `[2, 5]`
    *   Sort pairs: `[3, 7]`, `[4, 8]`, `[1, 6]`, `[2, 5]`
    *   Combine into bitonic sequences: `[3, 7, 4, 8]`, `[1, 6, 2, 5]`
*   **Step 2 (Merge bitonic sequences):**
    *   We need to create a larger bitonic sequence. To do this, we reverse the second bitonic sequence `[1, 6, 2, 5]` to get `[5, 2, 6, 1]`.
    *   Then, we merge `[3, 7, 4, 8]` and `[5, 2, 6, 1]` in a bitonic fashion. This involves comparing elements that are `n/2` apart.
    *   Example comparison step: Compare `3` and `5` (ascending), `7` and `2` (descending), `4` and `6` (ascending), `8` and `1` (descending).
    *   After several such stages, we get a single bitonic sequence.

**Phase 2: Bitonic Sequence Sorting**

Once we have a bitonic sequence (e.g., `[1, 2, 3, 4, 8, 7, 6, 5]`), we sort it.

*   **Stage 1:** Compare elements `4` positions apart.
    *   Compare `1` and `8` (ascending) -> `1, 8`
    *   Compare `2` and `7` (descending) -> `7, 2`
    *   Compare `3` and `6` (ascending) -> `3, 6`
    *   Compare `4` and `5` (descending) -> `5, 4`
    *   Intermediate sequence: `[1, 7, 3, 5, 8, 2, 6, 4]`
*   **Stage 2:** Compare elements `2` positions apart.
    *   Compare `1` and `3` (ascending) -> `1, 3`
    *   Compare `7` and `5` (descending) -> `7, 5`
    *   Compare `8` and `6` (ascending) -> `6, 8`
    *   Compare `2` and `4` (descending) -> `4, 2`
    *   Intermediate sequence: `[1, 7, 3, 5, 6, 4, 8, 2]` (oops, mistake in example calculation, but the process is key)
*   **Stage 3:** Compare elements `1` position apart.
    *   Compare adjacent elements and swap if necessary to ensure ascending order.
    *   This will result in the fully sorted sequence: `[1, 2, 3, 4, 5, 6, 7, 8]`

### Important Points to Remember (Bitonic Merge Sort)

*   **Fixed number of stages:** The number of comparisons is fixed, making it predictable.
*   **Hardware-friendly:** Excellent for parallel architectures with regular interconnections (e.g., butterflies in FFT are similar).
*   **Not in-place:** Typically requires auxiliary space.
*   **Overhead:** Can have higher constant factors and overhead compared to Quicksort for smaller datasets.
*   **Guaranteed $O(\log^2 n)$ time:** Regardless of input data.

---

## 5. Comparison of Parallel Sorting Algorithms

| Feature             | Parallel Merge Sort                               | Parallel Quicksort                                      | Bitonic Merge Sort                                       |
| :------------------ | :------------------------------------------------ | :------------------------------------------------------ | :------------------------------------------------------- |
| **Approach**        | Divide and Conquer, Parallel Merge                | Divide and Conquer, Parallel Partition                  | Bitonic sequences, Compare-Swap Networks                 |
| **Time Complexity (Avg)** | $O(\frac{n}{p} \log n)$ (ideal) or $O(\frac{n}{p} + \log^2 p)$ | $O(\frac{n}{p} \log n)$                                 | $O(\log^2 n)$                                            |
| **Time Complexity (Worst)** | $O(\frac{n}{p} \log n)$ (more robust)           | $O(\frac{n}{p} \cdot n)$ (with bad pivot)               | $O(\log^2 n)$ (guaranteed)                               |
| **Space Complexity**| $O(n)$ (auxiliary)                                | $O(\log n)$ average (recursion), $O(n)$ in some parallel | $O(n)$ or $O(n \log n)$ (network), $O(n)$ aux           |
| **Load Balancing**  | Generally good                                    | Can be poor if pivot is bad                             | Excellent (fixed stages)                                 |
| **Communication**   | Primarily in merge phase                          | In partitioning and recursive calls                     | Regular and predictable (network structure)              |
| **Architecture Suitability** | Shared memory, moderately for distributed     | Shared memory, distributed with care                    | Regular interconnection networks (hypercubes, meshes)    |
| **Stability**       | Stable                                            | Not stable                                              | Not stable                                               |
| **In-place**        | No                                                | Yes (can be)                                            | No                                                       |

---

## 6. Practice Questions and Exercises

**Question 1:**
Describe how you would parallelize the merge operation in Parallel Merge Sort using $p$ processors. What are the potential challenges?

**Answer 1:**
To parallelize the merge operation of two sorted arrays $A$ (size $n_A$) and $B$ (size $n_B$), we can use the following strategy:
1.  **Divide:** Let's assume $n_A \ge n_B$. Pick the median element of $A$, say $m_A$.
2.  **Find Split Point:** Use binary search (in parallel if $n_B$ is large) on array $B$ to find the index $j$ such that $B[j] \le m_A$ and $B[j+1] > m_A$.
3.  **Distribute Work:**
    *   One set of processors can merge $A[1 \dots n_A/2]$ with $B[1 \dots j]$.
    *   Another set of processors can merge $A[n_A/2+1 \dots n_A]$ with $B[j+1 \dots n_B]$.
    *   These merges are performed recursively or iteratively in parallel.
**Challenges:**
*   **Communication Overhead:** Finding the split point and distributing data requires communication between processors.
*   **Load Imbalance:** If the pivot selection is not balanced (e.g., median is close to the ends), one sub-problem might be much larger than the other, leading to imbalanced workload.
*   **Coordination:** Efficiently coordinating the merge operations across processors is crucial.

---

**Question 2:**
What is the main advantage of Bitonic Merge Sort over Parallel Quicksort in terms of performance predictability? Explain why.

**Answer 2:**
The main advantage of Bitonic Merge Sort over Parallel Quicksort in terms of performance predictability is its **guaranteed $O(\log^2 n)$ time complexity**, regardless of the input data distribution. This is because it relies on a fixed number of comparison and swap operations organized in a structured network.

In contrast, Parallel Quicksort's performance, while averaging $O(\frac{n}{p} \log n)$, is heavily dependent on the choice of pivot. A poor pivot selection can lead to a highly unbalanced partition and degenerate to $O(\frac{n}{p} \cdot n)$ complexity, making its worst-case performance unpredictable. Bitonic Merge Sort's predictable performance makes it suitable for applications where guaranteed response times are critical.

---

**Question 3:**
Consider an array of size $N$ that needs to be sorted. You have $P$ processors available.
a) If you use Parallel Merge Sort, what is the theoretical best-case time complexity you can achieve for the sorting process (excluding initial data distribution)?
b) If you use Parallel Quicksort, what is the theoretical best-case time complexity you can achieve for the sorting process (excluding initial data distribution)?
c) If you use Bitonic Merge Sort, what is the theoretical best-case time complexity you can achieve for the sorting process?

**Answer 3:**
a) **Parallel Merge Sort:** $O(\frac{N}{P} \log N)$ (assuming perfect parallelizability of merge and balanced work).
b) **Parallel Quicksort:** $O(\frac{N}{P} \log N)$ (assuming perfect partitioning and balanced recursive calls).
c) **Bitonic Merge Sort:** $O(\log^2 N)$ (inherent structure of the algorithm, independent of $P$ as operations are parallelized across the structure).

---

**Question 4:**
Explain the concept of a bitonic sequence. Provide an example of a bitonic sequence and a sequence that is not bitonic.

**Answer 4:**
A **bitonic sequence** is a sequence that first monotonically increases and then monotonically decreases, or vice versa. More formally, a sequence $a_0, a_1, ..., a_{n-1}$ is bitonic if there exists an index $i$ ($0 \le i < n$) such that $a_0 \le a_1 \le \dots \le a_i \ge a_{i+1} \ge \dots \ge a_{n-1}$. It can also be entirely monotonically increasing or decreasing.

*   **Example of a bitonic sequence:** `[2, 5, 8, 10, 7, 3, 1]` (increases up to 10, then decreases)
*   **Example of a non-bitonic sequence:** `[3, 1, 4, 2, 5]` (has multiple ups and downs, not conforming to the single peak or trough pattern).

---

## 7. Summary of Key Takeaways

*   Parallel sorting algorithms aim to speed up sorting by using multiple processors.
*   **Parallel Merge Sort** effectively parallelizes the merge step, making it robust and suitable for shared-memory systems.
*   **Parallel Quicksort** leverages parallel partitioning, but its performance is sensitive to pivot selection, leading to potential load imbalance.
*   **Bitonic Merge Sort** uses a structured approach based on bitonic sequences and sorting networks, offering predictable $O(\log^2 n)$ performance, ideal for specific hardware architectures.
*   The choice of algorithm depends on the available architecture, dataset size, and performance predictability requirements.
*   Communication overhead and load balancing are critical factors in the efficiency of all parallel sorting algorithms.

---
