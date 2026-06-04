---
title: "Processing of n Jobs through 2, 3 and m machines"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 2: Transportation Problem: Mathematical Formulation"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a73"
status: "completed"
scrapedAt: "2026-05-20T18:07:33.215Z"
---
## QUANTITATIVE TECHNIQUES FOR ENGINEERS

### Module 2: Transportation Problem: Mathematical Formulation

#### Topic: Processing of n Jobs through 2, 3 and m Machines

**Course Outcomes Alignment:**
*   **CO1: To formulate and solve linear programming and transportation problems (Knowledge Level: K4)** - This topic directly contributes to understanding the underlying principles of scheduling and sequencing, which can be viewed as special cases or related to network flow problems often solved using LP or specialized algorithms derived from LP. While not a direct transportation problem, the concept of minimizing flow/time through stages aligns with the efficiency objectives of transportation problems.
*   **CO3: To sequence and schedule jobs and projects (Knowledge Level: K3)** - This is the primary alignment. This topic deals directly with the sequencing of jobs through multiple machines, a core concept in job shop scheduling and production planning.

---

### 1. Introduction to Job Processing and Scheduling

This topic focuses on determining the optimal sequence in which a set of jobs should be processed on a series of machines to minimize the overall completion time (makespan). This is a fundamental problem in Operations Research and Production Management, aiming to improve efficiency and resource utilization.

**Key Concepts:**
*   **Job:** A task or operation that needs to be performed.
*   **Machine:** A resource or piece of equipment on which jobs are processed.
*   **Processing Time:** The time required to complete a specific job on a specific machine.
*   **Sequence:** The order in which jobs are processed.
*   **Schedule:** A detailed plan showing when each job is processed on each machine.
*   **Makespan:** The total time elapsed from the start of the first job on the first machine to the completion of the last job on the last machine. This is typically the objective to minimize.
*   **Flow Time:** The total time a job spends in the system, from its arrival to its completion.

**Relevance to Transportation Problems:**
While this topic isn't a direct application of the standard transportation problem formulation (which deals with allocating goods from sources to destinations to minimize cost), it shares the underlying philosophy of optimizing flow and minimizing resource utilization. In a job shop setting, "flow" refers to the movement of jobs through machines, and the objective is to minimize the "transportation time" (processing and waiting time) of all jobs. The mathematical formulation often involves minimizing a single objective function related to time, similar to minimizing cost in transportation problems.

---

### 2. Processing of n Jobs through 2 Machines

This is the simplest and most well-understood case. We have 'n' jobs, each requiring processing on two machines, Machine 1 and Machine 2, in that specific order (Machine 1 first, then Machine 2). The goal is to find a sequence of jobs that minimizes the total time required to complete all jobs on both machines.

**Assumptions:**
1.  Each job must be processed on Machine 1 before it can be processed on Machine 2.
2.  The processing times for each job on each machine are known and constant.
3.  Each machine can process only one job at a time.
4.  Each job can be processed on only one machine at a time.
5.  There are no breakdowns or interruptions.
6.  The sequence of jobs must be the same on both machines.

**Johnson's Rule (for 2 Machines):**
Johnson's Rule provides an optimal method for finding the minimum makespan sequence for 'n' jobs through two machines.

**Steps of Johnson's Rule:**
1.  **List the processing times:** Create a table showing the processing time for each job on Machine 1 ($P_{i1}$) and Machine 2 ($P_{i2}$).
2.  **Identify the minimum processing time:** Find the smallest processing time among all jobs on both machines.
3.  **Placement Rule:**
    *   If the minimum processing time is on Machine 1, schedule that job as early as possible in the sequence (among the unscheduled jobs).
    *   If the minimum processing time is on Machine 2, schedule that job as late as possible in the sequence (among the unscheduled jobs).
4.  **Remove the scheduled job:** Once a job is scheduled, remove it from further consideration.
5.  **Repeat:** Repeat steps 2-4 until all jobs are scheduled.

**Example (Johnson's Rule):**

Consider 5 jobs to be processed on two machines (M1 and M2) in the order M1 -> M2. The processing times are given below:

| Job | M1 (P<sub>i1</sub>) | M2 (P<sub>i2</sub>) |
| :-- | :--------------: | :--------------: |
| J1  |        5         |        2         |
| J2  |        1         |        6         |
| J3  |        9         |        7         |
| J4  |        3         |        8         |
| J5  |        10        |        4         |

**Applying Johnson's Rule:**

1.  **Minimum processing times:**
    *   J1: M2 (2)
    *   J2: M1 (1)
    *   J3: M2 (7)
    *   J4: M1 (3)
    *   J5: M2 (4)

2.  **First minimum is J2 on M1 (1).** Schedule J2 first: `J2 _ _ _ _`
    Remaining jobs: J1, J3, J4, J5.

3.  **Next minimum is J1 on M2 (2).** Schedule J1 last: `J2 _ _ _ J1`
    Remaining jobs: J3, J4, J5.

4.  **Next minimum is J4 on M1 (3).** Schedule J4 as early as possible in the remaining slots: `J2 J4 _ _ J1`
    Remaining jobs: J3, J5.

5.  **Next minimum is J5 on M2 (4).** Schedule J5 as late as possible in the remaining slots: `J2 J4 _ J5 J1`
    Remaining jobs: J3.

6.  **The last remaining job is J3.** It goes in the last available slot: `J2 J4 J3 J5 J1`

**Optimal Sequence:** J2 -> J4 -> J3 -> J5 -> J1

**Calculating Makespan:**
To calculate the makespan, we can use a Gantt chart or a table tracking completion times.

| Job | M1 Start | M1 Finish | M2 Start | M2 Finish |
| :-- | :-------: | :--------: | :-------: | :--------: |
| J2  |     0     |      1     |     1     |      7     |
| J4  |     1     |      4     |     7     |     15     |
| J3  |     4     |     13     |    15     |     22     |
| J5  |    13     |     23     |    23     |     27     |
| J1  |    23     |     28     |    28     |     30     |

**Makespan = 30 units**

**Important Note (from Paneerselvam, Chapter 12):** Johnson's Rule is proven to be optimal for the 2-machine sequencing problem.

---

### 3. Processing of n Jobs through 3 Machines

This case is more complex, as there is no single, universally guaranteed optimal rule like Johnson's Rule for 2 machines. However, **Johnson's Rule can be extended under specific conditions**.

**Assumptions:**
Similar to the 2-machine case, but now involving three machines: M1 -> M2 -> M3.

**Extension of Johnson's Rule (for 3 Machines):**
Johnson's Rule can be applied to the 3-machine problem *if* one of the following conditions is met:

1.  The processing time on the first machine is less than or equal to the processing time on the second machine for *all* jobs. ($\min P_{i1} \leq \min P_{i2}$ for all i)
2.  The processing time on the third machine is less than or equal to the processing time on the second machine for *all* jobs. ($\min P_{i3} \leq \min P_{i2}$ for all i)

**How to Apply the Extended Rule:**
If either condition is met, the 3-machine problem can be converted into an equivalent 2-machine problem:

*   **Create two fictitious machines:**
    *   Machine A: Processing time = $P_{i1} + P_{i2}$ (Sum of times on Machine 1 and Machine 2)
    *   Machine B: Processing time = $P_{i2} + P_{i3}$ (Sum of times on Machine 2 and Machine 3)
*   **Apply Johnson's Rule:** Solve this equivalent 2-machine problem using Johnson's Rule. The resulting sequence will be optimal for the original 3-machine problem.

**Example (Extended Johnson's Rule):**

Consider 4 jobs to be processed on three machines (M1, M2, M3) in order M1 -> M2 -> M3.

| Job | M1 (P<sub>i1</sub>) | M2 (P<sub>i2</sub>) | M3 (P<sub>i3</sub>) |
| :-- | :--------------: | :--------------: | :--------------: |
| J1  |        3         |        4         |        6         |
| J2  |        5         |        2         |        5         |
| J3  |        7         |        3         |        4         |
| J4  |        2         |        6         |        3         |

**Check the conditions:**
*   Min $P_{i1}$ = 2 (Job J4)
*   Min $P_{i2}$ = 2 (Job J2)
*   Min $P_{i3}$ = 3 (Job J4)

Condition 1: Min $P_{i1}$ (2) $\leq$ Min $P_{i2}$ (2)? **Yes**.
Condition 2: Min $P_{i3}$ (3) $\leq$ Min $P_{i2}$ (2)? **No**.

Since Condition 1 is met, we can apply the extended Johnson's Rule.

**Create Fictitious Machines A and B:**

| Job | M1 (P<sub>i1</sub>) | M2 (P<sub>i2</sub>) | M3 (P<sub>i3</sub>) | Machine A (P<sub>i1</sub>+P<sub>i2</sub>) | Machine B (P<sub>i2</sub>+P<sub>i3</sub>) |
| :-- | :--------------: | :--------------: | :--------------: | :-----------------------------------: | :-----------------------------------: |
| J1  |        3         |        4         |        6         |                   7                   |                   10                  |
| J2  |        5         |        2         |        5         |                   7                   |                    7                  |
| J3  |        7         |        3         |        4         |                   10                  |                    7                  |
| J4  |        2         |        6         |        3         |                    8                  |                    9                  |

**Apply Johnson's Rule to Machines A and B:**

1.  **Minimum processing time:** 7 (J1 on A, J2 on A, J2 on B, J3 on B).
2.  **J2 on Machine B (7) is scheduled last:** `_ _ _ J2`
    Remaining jobs: J1, J3, J4.

3.  **J1 on Machine A (7) is scheduled first:** `J1 _ _ J2`
    Remaining jobs: J3, J4.

4.  **Next minimum is J3 on Machine B (7).** Schedule J3 as late as possible: `J1 _ J3 J2`
    Remaining jobs: J4.

5.  **Last remaining job is J4.** It goes in the remaining slot: `J1 J4 J3 J2`

**Optimal Sequence:** J1 -> J4 -> J3 -> J2

**Calculating Makespan for the original 3 machines:**

| Job | M1 Start | M1 Finish | M2 Start | M2 Finish | M3 Start | M3 Finish |
| :-- | :-------: | :--------: | :-------: | :--------: | :-------: | :--------: |
| J1  |     0     |      3     |     3     |      7     |     7     |     13     |
| J4  |     3     |      5     |     7     |     13     |    13     |     16     |
| J3  |     5     |     12     |    13     |     16     |    16     |     20     |
| J2  |    12     |     17     |    17     |     19     |    20     |     25     |

**Makespan = 25 units**

**What if neither condition is met?**
If neither of the conditions for the 3-machine problem is met, then the problem cannot be directly converted into a 2-machine problem using the extended Johnson's Rule. The problem becomes much harder to solve optimally. In such cases, heuristic methods or more advanced techniques like Branch and Bound, or Mixed-Integer Programming formulations might be required. (Refer to Taha, Chapter 12 for more advanced techniques).

**Important Note (from Taha, Chapter 12):** The extension of Johnson's Rule for 3 machines is only valid if the specified conditions are met. If not, the problem is NP-hard, meaning there's no known polynomial-time algorithm to find the guaranteed optimal solution.

---

### 4. Processing of n Jobs through m Machines

This is the most general case, where jobs are processed on 'm' machines in a fixed sequence (M1 -> M2 -> ... -> Mm).

**Assumptions:**
Similar to the 2 and 3-machine cases, with the sequence of machines being fixed for all jobs.

**General Approach and Heuristics:**
There is no simple, guaranteed optimal rule like Johnson's Rule for the general 'm' machine problem, especially when 'm' is greater than 3. However, the problem can be approached using:

1.  **Generalization of Johnson's Rule (for m machines):**
    This heuristic approach extends the concept of converting the problem to a 2-machine problem. For 'm' machines, we create two fictitious machines by summing the processing times of the first $k$ machines and the last $k$ machines, where $k = \lfloor m/2 \rfloor$.
    *   **Fictitious Machine A:** Sum of processing times on machines M1, M2, ..., Mk.
    *   **Fictitious Machine B:** Sum of processing times on machines Mm, Mm-1, ..., M(m-k+1).
    *   **Apply Johnson's Rule:** Apply Johnson's Rule to these two fictitious machines.

    **Example (Generalization for 4 Machines):**
    Consider 3 jobs on 4 machines (M1 -> M2 -> M3 -> M4).
    Here, m=4, k = $\lfloor 4/2 \rfloor = 2$.

    *   Fictitious Machine A: $P_{iA} = P_{i1} + P_{i2}$
    *   Fictitious Machine B: $P_{iB} = P_{i3} + P_{i4}$

    The sequence obtained from applying Johnson's Rule to A and B is a heuristic solution for the 4-machine problem.

    **Important Note:** This generalization is a heuristic, not guaranteed to be optimal. It provides a good approximate solution.

2.  **Mixed-Integer Programming (MIP) Formulation:**
    For a guaranteed optimal solution, the problem can be formulated as a Mixed-Integer Program. This involves defining decision variables for the start time of each job on each machine and using constraints to ensure the sequential processing and machine capacity. This approach can become computationally intensive for large 'n' or 'm'.

    **Key elements of MIP formulation:**
    *   **Decision Variables:**
        *   $x_{ij}$: Start time of job 'i' on machine 'j'.
        *   $y_{ijk}$: Binary variable, 1 if job 'i' is processed immediately before job 'k' on any machine, 0 otherwise.
    *   **Objective Function:** Minimize Makespan ($C_{max}$)
    *   **Constraints:**
        *   Processing sequence on each machine.
        *   Machine capacity (only one job at a time).
        *   Job sequence consistency across machines.
        *   Non-negativity and binary constraints.

    (Refer to Hillier & Lieberman, Chapter 15 for details on formulating scheduling problems as IP/MIP).

3.  **Other Heuristics:**
    *   **Palmer's Heuristic:** Assigns a slope value to each job based on its processing times on all machines and then sequences jobs based on these slopes.
    *   **Gupta's Heuristic:** Similar to Palmer's but uses a different formula for calculating the slope.
    *   **Applegate-Cook Heuristic:** A more sophisticated heuristic that aims to improve upon simpler methods.

**Connection to CO1 and CO3:**
*   **CO1 (Linear Programming and Transportation Problems):** While not a direct transportation problem, the underlying optimization of flow and resource allocation resonates with LP. MIP formulations are a direct extension of LP, incorporating integer variables.
*   **CO3 (Sequencing and Scheduling Jobs):** This is the core of this topic. Understanding these methods directly addresses the ability to sequence and schedule jobs efficiently.

**Important Note (from Banks, Carson, Nelson, Nicol, Chapter 9 - Scheduling):** For general job shop scheduling problems (where the sequence of machines might vary for different jobs, which is more complex than the flow shop considered here), exact solutions are often computationally intractable. Heuristics are widely used in practice. The flow shop problem discussed here is a special case of job shop scheduling.

---

### 5. Practice Questions and Exercises

**Question 1 (2 Machines):**
Five jobs (J1 to J5) are to be processed on two machines, M1 and M2, in the order M1 -> M2. The processing times are given below:

| Job | M1 | M2 |
| :-- | :-: | :-: |
| J1  | 8  | 4  |
| J2  | 6  | 10 |
| J3  | 12 | 3  |
| J4  | 4  | 7  |
| J5  | 9  | 5  |

Find the optimal sequence of jobs that minimizes the total makespan. Calculate the minimum makespan.

**Answer 1:**
Applying Johnson's Rule:
1.  Minimums: J1(M2, 4), J4(M1, 4), J5(M2, 5), J2(M1, 6), J3(M2, 3)
2.  J3 on M2 (3) -> Schedule J3 last: `_ _ _ _ J3`
3.  J4 on M1 (4) -> Schedule J4 first: `J4 _ _ _ J3`
4.  J1 on M2 (4) -> Schedule J1 second to last: `J4 _ _ J1 J3`
5.  J2 on M1 (6) -> Schedule J2 second: `J4 J2 _ J1 J3`
6.  J5 on M2 (5) -> Schedule J5 third: `J4 J2 J5 J1 J3`

Optimal Sequence: **J4 -> J2 -> J5 -> J1 -> J3**

Calculating Makespan:
| Job | M1 Start | M1 Finish | M2 Start | M2 Finish |
| :-- | :-------: | :--------: | :-------: | :--------: |
| J4  |     0     |      4     |     4     |     11     |
| J2  |     4     |     10     |    11     |     21     |
| J5  |    10     |     19     |    21     |     26     |
| J1  |    19     |     27     |    27     |     31     |
| J3  |    27     |     39     |    39     |     42     |

Minimum Makespan = **42 units**

**Question 2 (3 Machines - Heuristic):**
Four jobs are to be processed on three machines M1, M2, M3 in the order M1 -> M2 -> M3. The processing times are:

| Job | M1 | M2 | M3 |
| :-- | :-: | :-: | :-: |
| J1  | 5  | 6  | 4  |
| J2  | 7  | 3  | 7  |
| J3  | 4  | 9  | 8  |
| J4  | 6  | 4  | 3  |

Determine a sequence for these jobs using the extended Johnson's rule and calculate the makespan for this sequence. Check if the conditions for optimality are met.

**Answer 2:**
Checking conditions:
*   Min $P_{i1}$: 4 (J3)
*   Min $P_{i2}$: 3 (J2)
*   Min $P_{i3}$: 3 (J4)

Condition 1: Min $P_{i1}$ (4) $\leq$ Min $P_{i2}$ (3)? **No**.
Condition 2: Min $P_{i3}$ (3) $\leq$ Min $P_{i2}$ (3)? **Yes**.

Since Condition 2 is met, we can use the extended Johnson's Rule.

Convert to a 2-machine problem:
*   Machine A: $P_{iA} = P_{i1} + P_{i2}$
*   Machine B: $P_{iB} = P_{i2} + P_{i3}$

| Job | M1 | M2 | M3 | A ($P_{i1}+P_{i2}$) | B ($P_{i2}+P_{i3}$) |
| :-- | :-: | :-: | :-: | :-----------------: | :-----------------: |
| J1  | 5  | 6  | 4  |         11          |         10          |
| J2  | 7  | 3  | 7  |         10          |         10          |
| J3  | 4  | 9  | 8  |         13          |         17          |
| J4  | 6  | 4  | 3  |         10          |          7          |

Applying Johnson's Rule to A and B:
1.  Minimums: J4(B, 7), J1(B, 10), J2(A, 10), J2(B, 10), J3(A, 13), J3(B, 17)
2.  J4 on B (7) -> Schedule J4 last: `_ _ _ J4`
3.  J1 on B (10) -> Schedule J1 third: `_ _ J1 J4`
4.  J2 on A (10) -> Schedule J2 first: `J2 _ J1 J4`
5.  J2 on B (10) -> Schedule J2 second to last (already scheduled J1, J4, so it becomes second): `J2 _ J1 J4`
    Wait, there's an issue here. J2 has the same minimum on A and B. Let's re-evaluate.

    Alternative way to handle ties:
    *   J4 on B (7) -> `_ _ _ J4`
    *   J1 on B (10) -> `_ _ J1 J4`
    *   J2 on A (10) -> `J2 _ J1 J4`
    *   J2 on B (10) -> This can't be scheduled last as J4 is there. Let's try assigning J2 on A first.
    *   J3 on A (13) -> `J2 J3 J1 J4`
    *   J3 on B (17) ->

    Let's restart the Johnson's rule application carefully.
    Jobs and their times on A and B:
    J1: A=11, B=10
    J2: A=10, B=10
    J3: A=13, B=17
    J4: A=10, B=7

    1.  Smallest is J4 on B (7). Schedule J4 last: `_ _ _ J4`
    2.  Next smallest is J1 on B (10). Schedule J1 second to last: `_ _ J1 J4`
    3.  Next smallest are J2(A, 10), J2(B, 10), J1(B, 10).
        J2 on A (10). Schedule J2 first: `J2 _ J1 J4`
    4.  Remaining job is J3. It goes in the remaining slot: `J2 J3 J1 J4`

    Sequence: **J2 -> J3 -> J1 -> J4**

    Let's check if there are other possibilities for the tied minimums.
    What if J2(A, 10) was scheduled before J1(B, 10)?
    J4(B, 7) -> `_ _ _ J4`
    J2(A, 10) -> `J2 _ _ J4`
    J1(B, 10) -> `J2 _ J1 J4`
    J3(A, 13) -> `J2 J3 J1 J4`

    What if we considered J2(B, 10)?
    J4(B, 7) -> `_ _ _ J4`
    J2(B, 10) -> Schedule J2 second to last? `_ _ J2 J4`. But J1 is also at 10.

    Let's stick with the rule:
    *   Min of (11,10,10,10,13,17) is 7 (J4 on B). Schedule J4 last. Seq: `_ _ _ J4`
    *   Min of remaining (11,10,10,10,13) is 10. We have J1(B), J2(A), J2(B).
        *   J1(B): Schedule J1 second to last. Seq: `_ _ J1 J4`
        *   J2(A): Schedule J2 first. Seq: `J2 _ J1 J4`
        *   J2(B): Cannot be scheduled last as J4 is there. This means we need to place J2 on B as late as possible among the remaining slots. Since J1 is already there, and J4 is last, J2(B) would imply it should be before J1. But J2(A) has already been placed earliest. This suggests a potential ambiguity.

    Let's re-state the placement rules for ties in Johnson's rule:
    *   If multiple jobs have the minimum time on Machine 1, schedule them in increasing order of their original job index (or any arbitrary order).
    *   If multiple jobs have the minimum time on Machine 2, schedule them in decreasing order of their original job index (or any arbitrary order).
    *   If a tie occurs between a job on Machine 1 and another job on Machine 2 for the minimum time, the job on Machine 1 should be scheduled first.

    Let's re-apply with careful tie-breaking (assuming original index order for ties on M1 and reverse index order for ties on M2):

    Jobs and their times on A and B:
    J1: A=11, B=10
    J2: A=10, B=10
    J3: A=13, B=17
    J4: A=10, B=7

    1.  Minimum overall is 7 (J4 on B). Schedule J4 last. Seq: `_ _ _ J4`
    2.  Next minimum is 10. We have J2(A), J2(B), J1(B).
        *   J2(A) is on Machine A. Schedule it as early as possible. Seq: `J2 _ _ J4`
        *   J1(B) is on Machine B. Schedule it as late as possible. Seq: `J2 _ J1 J4`
        *   J2(B) is on Machine B. Schedule it as late as possible. J4 is last, J1 is second to last. So, J2(B) would go before J1. But we have already scheduled J2(A) first. This indicates the heuristic needs careful application.

    Let's use a structured list of options for the minimum 10:
    We have J2(A, 10), J2(B, 10), J1(B, 10).
    The absolute minimum is 7 (J4 on B). Place J4 last. `_ _ _ J4`.

    Now consider the remaining jobs: J1, J2, J3.
    The smallest values are 10s: J1(B, 10), J2(A, 10), J2(B, 10).

    *   **Option 1: Place J2 on A first.** `J2 _ _ J4`. Remaining: J1, J3. Smallest times are J1(B, 10), J3(A, 13), J3(B, 17). Smallest of these is J1(B, 10). Place J1 late: `J2 _ J1 J4`. Last job is J3: `J2 J3 J1 J4`.
    *   **Option 2: Place J1 on B last.** `_ _ J1 J4`. Remaining: J2, J3. Smallest times are J2(A, 10), J2(B, 10), J3(A, 13), J3(B, 17). Smallest is J2.
        *   Place J2(A) first: `J2 _ J1 J4`. Remaining J3. Sequence: `J2 J3 J1 J4`.
        *   Place J2(B) before J1: `_ J2 J1 J4`. Remaining J3. Place J3 first: `J3 J2 J1 J4`.

    Let's try the sequence **J2 -> J3 -> J1 -> J4**.
    Calculating Makespan:
    | Job | M1 Start | M1 Finish | M2 Start | M2 Finish | M3 Start | M3 Finish |
    | :-- | :-------: | :--------: | :-------: | :--------: | :-------: | :--------: |
    | J2  |     0     |      7     |     7     |     10     |    10     |     17     |
    | J3  |     7     |     11     |    11     |     20     |    20     |     28     |
    | J1  |    11     |     16     |    20     |     26     |    28     |     32     |
    | J4  |    16     |     22     |    26     |     30     |    32     |     35     |
    Makespan = 35.

    Let's try the sequence **J3 -> J2 -> J1 -> J4**.
    | Job | M1 Start | M1 Finish | M2 Start | M2 Finish | M3 Start | M3 Finish |
    | :-- | :-------: | :--------: | :-------: | :--------: | :-------: | :--------: |
    | J3  |     0     |      4     |     4     |     13     |    13     |     21     |
    | J2  |     4     |     11     |    13     |     16     |    21     |     28     |
    | J1  |    11     |     16     |    20     |     26     |    28     |     32     |
    | J4  |    16     |     22     |    26     |     30     |    32     |     35     |
    Makespan = 35.

    It appears both sequences yield the same makespan in this case. The problem statement implies a single optimal sequence. The heuristic might be sensitive to tie-breaking rules. For a formal solution, one would implement a more robust heuristic or an MIP. For the purpose of this exercise, **J2 -> J3 -> J1 -> J4** is a valid heuristic sequence.

    Conditions for optimality ARE met. The sequence found using the extended Johnson's rule is optimal.

**Question 3 (Generalization Heuristic - 4 Machines):**
Three jobs (J1, J2, J3) are to be processed on four machines (M1, M2, M3, M4) in the order M1 -> M2 -> M3 -> M4. Processing times are:

| Job | M1 | M2 | M3 | M4 |
| :-- | :-: | :-: | :-: | :-: |
| J1  | 3  | 5  | 2  | 4  |
| J2  | 6  | 2  | 4  | 3  |
| J3  | 4  | 3  | 5  | 6  |

Use the generalized Johnson's rule heuristic to find a sequence and calculate the makespan.

**Answer 3:**
m = 4, k = $\lfloor 4/2 \rfloor = 2$.
Fictitious Machine A: $P_{iA} = P_{i1} + P_{i2}$
Fictitious Machine B: $P_{iB} = P_{i3} + P_{i4}$

| Job | M1 | M2 | M3 | M4 | A ($P_{i1}+P_{i2}$) | B ($P_{i3}+P_{i4}$) |
| :-- | :-: | :-: | :-: | :-: | :-----------------: | :-----------------: |
| J1  | 3  | 5  | 2  | 4  |          8          |          6          |
| J2  | 6  | 2  | 4  | 3  |          8          |          7          |
| J3  | 4  | 3  | 5  | 6  |          7          |         11          |

Applying Johnson's Rule to A and B:
1.  Minimum is 6 (J1 on B). Schedule J1 last: `_ _ J1`
2.  Next minimum is 7 (J3 on A). Schedule J3 first: `J3 _ J1`
3.  Remaining job is J2. Smallest times are J2(A, 8), J2(B, 7). Since J3(A) was placed first, and J1(B) last, J2(B) should be placed before J1. J2(A) should be placed after J3.
    Let's check the times again: J1(A=8, B=6), J2(A=8, B=7), J3(A=7, B=11).
    1.  Min is 6 (J1 on B) -> Last: `_ _ J1`
    2.  Min of remaining (8,6, 8,7, 7,11) is 7 (J3 on A). Place J3 first: `J3 _ J1`
    3.  Min of remaining (8,6, 8,7) is 7 (J2 on B). Place J2 second to last: `J3 _ J2 J1`
    4.  Remaining job J2 (on A). Wait, J2 is already processed.
        Let's list the options:
        *   J3 on A (7) -> first. `J3 _ _`
        *   J1 on B (6) -> last. `_ _ J1`
        *   J2 on B (7) -> second to last. `_ _ J2 J1`
        *   J2 on A (8) -> should be placed after J3.

    Let's retry:
    1.  Min is 6 (J1 on B). Schedule J1 last: `_ _ J1`
    2.  Next smallest is 7 (J2 on B or J3 on A).
        *   If J3 on A (7) is chosen, schedule J3 first: `J3 _ J1`. Remaining J2. J2(A=8, B=7). Smallest is 7 (J2 on B). Schedule J2 second to last: `J3 _ J2 J1`. This sequence is `J3 J2 J1`.

    Let's try the other option for 7:
    1.  Min is 6 (J1 on B). Schedule J1 last: `_ _ J1`
    2.  Consider J2 on B (7). Schedule J2 second to last: `_ _ J2 J1`. Remaining J3.
        Smallest time for remaining is J3 on A (7). Schedule J3 first: `J3 _ J2 J1`.

    Sequence: **J3 -> J2 -> J1**

    Calculating Makespan:
    | Job | M1 Start | M1 Finish | M2 Start | M2 Finish | M3 Start | M3 Finish | M4 Start | M4 Finish |
    | :-- | :-------: | :--------: | :-------: | :--------: | :-------: | :--------: | :-------: | :--------: |
    | J3  |     0     |      4     |     4     |      7     |     7     |     12     |    12     |     18     |
    | J2  |     4     |     10     |    10     |     12     |    12     |     16     |    18     |     21     |
    | J1  |    10     |     13     |    13     |     18     |    18     |     20     |    21     |     25     |

    Makespan = **25 units**

---

### 6. Key Points to Remember

*   **Johnson's Rule for 2 Machines:** Always yields an optimal solution for minimizing makespan in a 2-machine flow shop.
*   **Johnson's Rule for 3 Machines:** Only applicable if $\min P_{i1} \leq \min P_{i2}$ or $\min P_{i3} \leq \min P_{i2}$ for all jobs. If conditions are met, convert to a 2-machine problem and apply Johnson's rule.
*   **General 'm' Machine Problem:** No guaranteed optimal rule exists. Heuristics like the generalized Johnson's Rule are used for approximate solutions. For guaranteed optimality, MIP formulations are necessary but computationally expensive.
*   **Makespan Calculation:** Carefully track the completion times on each machine, considering both processing time and idle time (waiting for the previous machine to finish).
*   **Assumptions are Crucial:** The validity of these rules and methods depends heavily on the stated assumptions (e.g., fixed sequence, no breakdowns).
*   **CO Alignment:** This topic directly supports CO1 (by understanding optimization principles) and CO3 (by directly addressing job sequencing and scheduling).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |


### 7. References

*   **Paneerselvam R. (PHI, Third edition, 2023):** Chapter 12 - Sequencing and Scheduling. Focuses on job sequencing problems, including Johnson's rule and its extensions.
*   **Taha H. A. (Pearson, Tenth edition, 2019):** Chapter 12 - Sequencing and Scheduling. Covers sequencing problems, Johnson's rule, and discusses more complex scenarios and solution methods for m-machine problems.
*   **Hillier F. S., Lieberman G. J. (McGraw Hill, Tenth edition, 2017):** Chapter 15 - Integer Programming: Modeling and . . . (Relevant chapters on Production and Service Systems and Integer Programming would discuss scheduling models).
*   **Banks J., Carson J. S., Nelson B. L., Nicol D. M. (Pearson, Fifth edition, 2013):** Chapter 9 - Scheduling in Simulation. Discusses scheduling concepts relevant to discrete-event systems, which are foundational for understanding job processing.

---