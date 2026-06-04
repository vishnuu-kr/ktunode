---
title: "Processing of n Jobs through 2machines"
subject: "OPERATIONS RESEARCH"
module: "Module 2: Sequencing Problem: Basic terminologies"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463621"
status: "completed"
scrapedAt: "2026-05-20T18:01:53.753Z"
---
# Operations Research: Module 2 - Sequencing Problem: Basic Terminologies
## Topic: Processing of n Jobs through 2 Machines

This module focuses on sequencing problems, a critical area in Operations Research dealing with the optimal ordering of operations to minimize or maximize certain objectives, such as total time, cost, or throughput. This specific topic addresses the scenario of processing 'n' jobs through two machines.

---

### Learning Outcomes Covered:

*   **LO1:** Understand the fundamental concepts and terminology associated with sequencing problems.
*   **LO2:** Identify and define different types of sequencing problems.
*   **LO3:** Grasp the objective functions typically used in sequencing problems.
*   **LO4:** Understand the assumptions made in sequencing problems.
*   **LO5:** Apply Johnson's algorithm for solving the 2-machine sequencing problem.
*   **LO6:** Analyze and interpret the results of a 2-machine sequencing problem.

---

### Course Outcomes Alignment:

*   **CO2: To apply basic sequencing techniques for processing jobs through machines (Knowledge Level: K2, K3)**
    *   This topic directly addresses CO2 by teaching the application of a fundamental sequencing technique (Johnson's Algorithm) for a common scenario. The knowledge gained will enable students to analyze and solve such problems.

---

### 1. Basic Terminologies in Sequencing Problems

Sequencing problems are concerned with determining the optimal order in which a set of jobs should be processed on a given set of machines to achieve a specific objective.

*   **Job:** A task or operation that needs to be performed.
*   **Machine:** A facility or resource where jobs are processed.
*   **Processing Time ($P_{ij}$):** The time required by machine 'j' to process job 'i'.
*   **Sequence:** The order in which jobs are processed.
*   **Schedule:** A plan that specifies when each job starts and finishes on each machine.
*   **Flow Time:** The total time a job spends in the system, from its arrival to its completion.
*   **Makespan (or Total Elapsed Time):** The total time from the start of the first job on the first machine to the completion of the last job on the last machine. This is often the primary objective function.
*   **Idle Time:** The time a machine remains unproductive between processing two consecutive jobs.
*   **Turnaround Time:** The time elapsed from the arrival of a job to its completion.

---

### 2. Types of Sequencing Problems

Sequencing problems can be classified based on several criteria:

*   **Number of Machines:**
    *   **Single Machine:** All jobs are processed on a single machine.
    *   **Two Machines:** Jobs are processed through two machines in a specific order (e.g., Machine 1 then Machine 2).
    *   **m Machines:** Jobs are processed through 'm' machines.
*   **Order of Machines:**
    *   **Same Order:** All jobs follow the same sequence of machines (e.g., M1 -> M2).
    *   **Different Order:** Jobs may follow different machine sequences.
*   **Job Characteristics:**
    *   **Identical Jobs:** Jobs are indistinguishable.
    *   **Distinct Jobs:** Jobs have unique characteristics.
*   **Availability of Machines:**
    *   **Fully Available:** Machines are available from the start.
    *   **Availability Constraints:** Machines may have specific availability periods.

---

### 3. Processing of n Jobs through 2 Machines (Specific Case)

This is a fundamental sequencing problem where 'n' jobs are to be processed on two machines, say Machine 1 ($M_1$) and Machine 2 ($M_2$), in a fixed order: $M_1 \rightarrow M_2$. This means each job must first be processed on $M_1$ and then on $M_2$.

**Objective:** To find an optimal sequence of jobs that minimizes the total elapsed time (Makespan) required to process all jobs.

**Assumptions:**

*   **Fixed Order of Machines:** All jobs are processed on $M_1$ first and then on $M_2$.
*   **No Preemption:** Once a job starts on a machine, it must be completed without interruption.
*   **Processing Times are Known:** The processing time for each job on each machine is known and constant.
*   **Unlimited Capacity:** Each machine can handle only one job at a time.
*   **Zero Transfer Time:** The time taken to transfer a job from $M_1$ to $M_2$ is negligible.
*   **Jobs are Available:** All jobs are available for processing at the beginning (time zero).

**Key Concept: Johnson's Algorithm**

Johnson's algorithm provides an optimal solution for the 2-machine sequencing problem with the objective of minimizing makespan. It is based on the principle of prioritizing jobs that have shorter processing times on the earlier machine ($M_1$) and longer processing times on the later machine ($M_2$).

---

### 4. Johnson's Algorithm for n Jobs and 2 Machines

**Steps:**

1.  **List the Jobs and Their Processing Times:** Create a table listing all 'n' jobs and their respective processing times on Machine 1 ($P_{1j}$) and Machine 2 ($P_{2j}$).

    | Job | $P_{1j}$ (Machine 1) | $P_{2j}$ (Machine 2) |
    | :-- | :------------------- | :------------------- |
    | 1   | $P_{11}$             | $P_{21}$             |
    | 2   | $P_{12}$             | $P_{22}$             |
    | ... | ...                  | ...                  |
    | n   | $P_{1n}$             | $P_{2n}$             |

2.  **Create a Working Table:** Make a new table with two columns, one for Machine 1 and one for Machine 2.

3.  **Identify the Minimum Processing Time:** Find the smallest processing time among all the jobs in the current table.

4.  **Decision Rule:**
    *   **If the minimum processing time occurs on Machine 1 ($P_{1k}$ is minimum):** Schedule job 'k' as early as possible in the sequence (from the left). Remove job 'k' from further consideration.
    *   **If the minimum processing time occurs on Machine 2 ($P_{2k}$ is minimum):** Schedule job 'k' as late as possible in the sequence (from the right). Remove job 'k' from further consideration.
    *   **If there's a tie:**
        *   If the tied minimum times are on Machine 1, schedule the job as early as possible.
        *   If the tied minimum times are on Machine 2, schedule the job as late as possible.
        *   If a tie occurs with one job on $M_1$ and another on $M_2$, the job on $M_1$ should be scheduled earlier and the job on $M_2$ later. (This is a common convention, though some sources might vary slightly; the core idea is to prioritize early placement for $M_1$ and late placement for $M_2$).

5.  **Repeat:** Repeat steps 3 and 4 until all jobs are scheduled.

6.  **Construct the Optimal Sequence:** The resulting arrangement of jobs from left to right is the optimal sequence.

7.  **Calculate Makespan and Idle Times:**
    *   Prepare a Gantt chart or a table to track the completion times of each job on each machine.
    *   **Completion Time on $M_1$ for job 'i' ($C_{1i}$):** $C_{1i} = C_{1(i-1)} + P_{1i}$ (where $C_{10} = 0$)
    *   **Completion Time on $M_2$ for job 'i' ($C_{2i}$):** $C_{2i} = \max(C_{1i}, C_{2(i-1)}) + P_{2i}$ (where $C_{20} = 0$)
    *   The **Makespan** is the completion time of the last job on $M_2$.
    *   **Idle Time on $M_1$:** Occurs between job completions on $M_1$.
    *   **Idle Time on $M_2$:** $I_{2i} = \max(0, C_{2(i-1)} - C_{1i})$. Total idle time on $M_2$ is the sum of $I_{2i}$ for all jobs.

**Reference:** Gupta & Hira (2008) emphasizes the systematic application of Johnson's rule for optimal sequencing. Srinivasan (2017) also provides a clear exposition of this algorithm.

---

### 5. Example: Johnson's Algorithm

**Problem:** Find the optimal sequence for processing the following five jobs on two machines ($M_1$ and $M_2$) to minimize the total elapsed time.

| Job | $P_{1j}$ ($M_1$) | $P_{2j}$ ($M_2$) |
| :-- | :--------------- | :--------------- |
| A   | 5                | 2                |
| B   | 1                | 6                |
| C   | 9                | 7                |
| D   | 3                | 8                |
| E   | 10               | 4                |

**Solution:**

**Step 1 & 2: Listing and Working Table**

| Job | $P_{1j}$ | $P_{2j}$ |
| :-- | :------- | :------- |
| A   | 5        | 2        |
| B   | 1        | 6        |
| C   | 9        | 7        |
| D   | 3        | 8        |
| E   | 10       | 4        |

**Step 3 & 4: Applying Johnson's Rule**

*   **Iteration 1:**
    *   Minimum processing time is 1 (Job B on $M_1$).
    *   Since it's on $M_1$, schedule B as early as possible.
    *   Sequence: `B _ _ _ _`
    *   Remove Job B.

*   **Iteration 2:**
    *   Remaining jobs: A (5, 2), C (9, 7), D (3, 8), E (10, 4).
    *   Minimum processing time is 2 (Job A on $M_2$).
    *   Since it's on $M_2$, schedule A as late as possible.
    *   Sequence: `B _ _ _ A`
    *   Remove Job A.

*   **Iteration 3:**
    *   Remaining jobs: C (9, 7), D (3, 8), E (10, 4).
    *   Minimum processing time is 3 (Job D on $M_1$).
    *   Since it's on $M_1$, schedule D as early as possible in the remaining slots.
    *   Sequence: `B D _ _ A`
    *   Remove Job D.

*   **Iteration 4:**
    *   Remaining jobs: C (9, 7), E (10, 4).
    *   Minimum processing time is 4 (Job E on $M_2$).
    *   Since it's on $M_2$, schedule E as late as possible in the remaining slots.
    *   Sequence: `B D _ E A`
    *   Remove Job E.

*   **Iteration 5:**
    *   Remaining job: C (9, 7).
    *   Only one job left, place it in the remaining slot.
    *   Sequence: `B D C E A`

**Optimal Sequence:** **B - D - C - E - A**

**Step 7: Calculate Makespan and Idle Times**

Let's construct a schedule table:

| Job | Start $M_1$ | End $M_1$ ($C_{1j}$) | Start $M_2$ | End $M_2$ ($C_{2j}$) | Idle $M_1$ | Idle $M_2$ |
| :-- | :---------- | :------------------- | :---------- | :------------------- | :--------- | :--------- |
| B   | 0           | 1                    | 1           | 7                    | 0          | 0          |
| D   | 1           | 4                    | 7           | 15                   | 0          | 0          |
| C   | 4           | 13                   | 15          | 22                   | 0          | 0          |
| E   | 13          | 23                   | 23          | 27                   | 0          | 0          |
| A   | 23          | 28                   | 28          | 30                   | 0          | 1          |

**Calculations:**

*   **Job B:**
    *   $C_{1B} = 0 + 5 = 5$ (Oops, mistake in table above, should be 1 for Job B's P1 value. Let's correct from here)
    *   $C_{1B} = 0 + 1 = 1$
    *   $C_{2B} = \max(C_{1B}, C_{2\text{prev}}) + P_{2B} = \max(1, 0) + 6 = 1 + 6 = 7$

*   **Job D:**
    *   $C_{1D} = C_{1B} + P_{1D} = 1 + 3 = 4$
    *   $C_{2D} = \max(C_{1D}, C_{2B}) + P_{2D} = \max(4, 7) + 8 = 7 + 8 = 15$

*   **Job C:**
    *   $C_{1C} = C_{1D} + P_{1C} = 4 + 9 = 13$
    *   $C_{2C} = \max(C_{1C}, C_{2D}) + P_{2C} = \max(13, 15) + 7 = 15 + 7 = 22$

*   **Job E:**
    *   $C_{1E} = C_{1C} + P_{1E} = 13 + 10 = 23$
    *   $C_{2E} = \max(C_{1E}, C_{2C}) + P_{2E} = \max(23, 22) + 4 = 23 + 4 = 27$

*   **Job A:**
    *   $C_{1A} = C_{1E} + P_{1A} = 23 + 5 = 28$
    *   $C_{2A} = \max(C_{1A}, C_{2E}) + P_{2A} = \max(28, 27) + 2 = 28 + 2 = 30$

**Corrected Schedule Table:**

| Job | Start $M_1$ | End $M_1$ ($C_{1j}$) | Start $M_2$ | End $M_2$ ($C_{2j}$) | Idle $M_1$ | Idle $M_2$ (Calculated) |
| :-- | :---------- | :------------------- | :---------- | :------------------- | :--------- | :---------------------- |
| B   | 0           | 1                    | 1           | 7                    | 0          | 0                       |
| D   | 1           | 4                    | 7           | 15                   | 0          | 0                       |
| C   | 4           | 13                   | 15          | 22                   | 0          | 0                       |
| E   | 13          | 23                   | 23          | 27                   | 0          | 0                       |
| A   | 23          | 28                   | 28          | 30                   | 0          | $max(0, 27-28)=0$       |

**Final Summary:**

*   **Optimal Sequence:** B - D - C - E - A
*   **Makespan (Total Elapsed Time):** 30 units.
*   **Idle Time on $M_1$:** 0
*   **Idle Time on $M_2$:** Let's calculate this properly.
    *   Idle $M_2$ for B: $max(0, C_{2(\text{prev})} - C_{1B}) = max(0, 0 - 1) = 0$
    *   Idle $M_2$ for D: $max(0, C_{1D} - C_{2\text{prev}}) = max(0, 7 - 4) = 3$? No, this is not how it's calculated. It's the gap between $M_1$ completion and $M_2$ start for the *current* job, or $M_2$ completion of previous job.
    *   Let's use the formula: $I_{2i} = \max(0, C_{2(i-1)} - C_{1i})$
        *   $I_{2B} = \max(0, 0 - 1) = 0$
        *   $I_{2D} = \max(0, 7 - 4) = 3$ (Machine 2 is idle from time 4 to 7)
        *   $I_{2C} = \max(0, 15 - 13) = 2$ (Machine 2 is idle from time 13 to 15)
        *   $I_{2E} = \max(0, 22 - 23) = 0$ (Machine 2 starts immediately after job C finishes on M1) - wait, it has to wait for job E on M1 to finish. $C_{1E} = 23$, $C_{2C}=22$. So $M_2$ is available at 22. Job E finishes on $M_1$ at 23. So $M_2$ starts at 23. No idle time.
        *   $I_{2A} = \max(0, 27 - 28) = 0$ (Machine 2 is available at 27. Job A finishes on $M_1$ at 28. So $M_2$ starts at 28. No idle time.)

    *   Rechecking idle time calculation: Idle time on machine $M_2$ occurs when $M_2$ is free but the job has not yet completed its processing on $M_1$.
        *   Job B on $M_1$ ends at 1. $M_2$ is free. Job B on $M_2$ starts at 1, ends at 7. $M_2$ idle time = 0.
        *   Job D on $M_1$ ends at 4. $M_2$ finished job B at 7. $M_2$ is free from 7 onwards. Job D on $M_1$ ends at 4. So $M_2$ is idle from 4 to 7. **Idle $M_2$ for job D = 3**.
        *   Job C on $M_1$ ends at 13. $M_2$ finished job D at 15. $M_2$ is free from 15 onwards. Job C on $M_1$ ends at 13. So $M_2$ is idle from 13 to 15. **Idle $M_2$ for job C = 2**.
        *   Job E on $M_1$ ends at 23. $M_2$ finished job C at 22. $M_2$ is free at 22. Job E on $M_1$ ends at 23. So $M_2$ starts job E at 23. **Idle $M_2$ for job E = 0**.
        *   Job A on $M_1$ ends at 28. $M_2$ finished job E at 27. $M_2$ is free at 27. Job A on $M_1$ ends at 28. So $M_2$ starts job A at 28. **Idle $M_2$ for job A = 0**.

    *   **Total Idle Time on $M_2$ = 3 + 2 + 0 + 0 = 5 units.**

---

### 6. Important Points to Remember

*   **Johnson's algorithm is optimal ONLY for the 2-machine sequencing problem where jobs are processed in the same order ($M_1 \rightarrow M_2$) and the objective is to minimize makespan.**
*   The core idea of Johnson's algorithm is to get jobs with short processing times on $M_1$ done first and jobs with short processing times on $M_2$ done last. This minimizes the time $M_2$ might be waiting for jobs to complete on $M_1$, and also minimizes the idle time at the end.
*   **Tie-breaking rules are important:** If minimum times are on $M_1$, schedule earlier. If on $M_2$, schedule later. If a tie involves both machines, the $M_1$ job goes earlier, the $M_2$ job goes later.
*   Be careful when calculating completion times and idle times, especially on the second machine. The start time on $M_2$ is the maximum of the completion time on $M_1$ for that job and the completion time on $M_2$ for the previous job.

---

### 7. Practice Questions/Exercises

**Question 1:**
Five jobs A, B, C, D, and E are to be processed on two machines M1 and M2 in that order ($M_1 \rightarrow M_2$). The processing times are given below. Find the optimal sequence of jobs that minimizes the total elapsed time and calculate the makespan.

| Job | Machine M1 (Time) | Machine M2 (Time) |
| :-- | :---------------- | :---------------- |
| A   | 7                 | 2                 |
| B   | 1                 | 6                 |
| C   | 2                 | 7                 |
| D   | 6                 | 5                 |
| E   | 5                 | 1                 |

**Answer 1:**

*   **Working Table:**
    | Job | $P_{1j}$ | $P_{2j}$ |
    | :-- | :------- | :------- |
    | A   | 7        | 2        |
    | B   | 1        | 6        |
    | C   | 2        | 7        |
    | D   | 6        | 5        |
    | E   | 5        | 1        |

*   **Applying Johnson's Rule:**
    1.  Min is 1 (B on $M_1$). Sequence: `B _ _ _ _`
    2.  Min is 1 (E on $M_2$). Sequence: `B _ _ _ E`
    3.  Min is 2 (C on $M_1$). Sequence: `B C _ _ E`
    4.  Min is 2 (A on $M_2$). Sequence: `B C _ A E`
    5.  Min is 5 (D on $M_2$). Sequence: `B C D A E` (Tie between D on $M_2$ and C on $M_2$. C on $M_1$ was chosen first. The remaining mins are 5 (D on $M_2$) and 7 (C on $M_2$). Ah, mistake in step 3. Min is 2 (C on $M_1$) AND 2 (A on $M_2$). Let's redo.)

*   **Revised Application of Johnson's Rule:**
    1.  Min is 1 (Job B on $M_1$). Schedule B first. Sequence: `B _ _ _ _`
    2.  Remaining: A(7,2), C(2,7), D(6,5), E(5,1). Min is 1 (Job E on $M_2$). Schedule E last. Sequence: `B _ _ _ E`
    3.  Remaining: A(7,2), C(2,7), D(6,5). Min is 2 (Job C on $M_1$ and Job A on $M_2$).
        *   Job C on $M_1$: Schedule C as early as possible in the remaining slots. Sequence: `B C _ _ E`
        *   Job A on $M_2$: Schedule A as late as possible in the remaining slots. Sequence: `B C _ A E`
    4.  Remaining: D(6,5). Only one slot left. Sequence: `B C D A E`

*   **Optimal Sequence:** **B - C - D - A - E**

*   **Calculating Makespan:**
    | Job | $P_{1j}$ | $P_{2j}$ | $C_{1j}$ | $C_{2j}$ | Idle $M_2$ |
    | :-- | :------- | :------- | :------- | :------- | :--------- |
    | B   | 1        | 6        | 1        | 7        | 0          |
    | C   | 2        | 7        | 3        | 14       | 0          |
    | D   | 6        | 5        | 9        | 19       | 0          |
    | A   | 7        | 2        | 16       | 21       | 0          |
    | E   | 5        | 1        | 21       | 22       | 0          |

    *   Job B: $C_{1B}=1$, $C_{2B}=1+6=7$.
    *   Job C: $C_{1C}=1+2=3$, $C_{2C}=\max(3, 7)+7 = 7+7=14$. Idle $M_2$ for C = $max(0, 7-3)=4$? No, $max(0, C_{2B} - C_{1C}) = max(0, 7-3) = 4$. Let's recheck the formula and logic.
    *   Ah, the idle time for $M_2$ for job 'i' is the time gap between when $M_2$ becomes free from the previous job ($C_{2(i-1)}$) and when the current job 'i' finishes on $M_1$ ($C_{1i}$). So, $M_2$ starts job 'i' at $\max(C_{1i}, C_{2(i-1)})$.
    *   Idle $M_2$ for job 'i' is $max(0, C_{2(i-1)} - C_{1i})$.
    *   Job B: $C_{1B}=1$, $C_{2B}=7$. Idle $M_2$ = $max(0, 0-1)=0$.
    *   Job C: $C_{1C}=3$, $C_{2C}=\max(3,7)+7=14$. Idle $M_2$ = $max(0, 7-3)=4$.
    *   Job D: $C_{1D}=3+6=9$, $C_{2D}=\max(9,14)+5=14+5=19$. Idle $M_2$ = $max(0, 14-9)=5$.
    *   Job A: $C_{1A}=9+7=16$, $C_{2A}=\max(16,19)+2=19+2=21$. Idle $M_2$ = $max(0, 19-16)=3$.
    *   Job E: $C_{1E}=16+5=21$, $C_{2E}=\max(21,21)+1=21+1=22$. Idle $M_2$ = $max(0, 21-21)=0$.

    *   **Corrected Schedule Table:**
        | Job | $P_{1j}$ | $P_{2j}$ | $C_{1j}$ | $C_{2j}$ | Idle $M_2$ |
        | :-- | :------- | :------- | :------- | :------- | :--------- |
        | B   | 1        | 6        | 1        | 7        | 0          |
        | C   | 2        | 7        | 3        | 14       | 4          |
        | D   | 6        | 5        | 9        | 19       | 5          |
        | A   | 7        | 2        | 16       | 21       | 3          |
        | E   | 5        | 1        | 21       | 22       | 0          |

    *   **Makespan:** 22 units.
    *   **Total Idle Time on $M_2$:** 4 + 5 + 3 + 0 = 12 units.

**Question 2:**
Consider the following jobs with their processing times on two machines. Determine the optimal sequence and the minimum makespan.

| Job | Machine M1 (Time) | Machine M2 (Time) |
| :-- | :---------------- | :---------------- |
| 1   | 3                 | 6                 |
| 2   | 5                 | 2                 |
| 3   | 7                 | 3                 |
| 4   | 4                 | 5                 |
| 5   | 6                 | 7                 |

**Answer 2:**

*   **Working Table:**
    | Job | $P_{1j}$ | $P_{2j}$ |
    | :-- | :------- | :------- |
    | 1   | 3        | 6        |
    | 2   | 5        | 2        |
    | 3   | 7        | 3        |
    | 4   | 4        | 5        |
    | 5   | 6        | 7        |

*   **Applying Johnson's Rule:**
    1.  Min is 2 (Job 2 on $M_2$). Schedule Job 2 last. Sequence: `_ _ _ _ 2`
    2.  Remaining: 1(3,6), 3(7,3), 4(4,5), 5(6,7). Min is 3 (Job 1 on $M_1$ and Job 3 on $M_2$).
        *   Job 1 on $M_1$: Schedule 1 as early as possible. Sequence: `1 _ _ _ 2`
        *   Job 3 on $M_2$: Schedule 3 as late as possible. Sequence: `1 _ _ 3 2`
    3.  Remaining: 4(4,5), 5(6,7). Min is 4 (Job 4 on $M_1$). Schedule 4 as early as possible. Sequence: `1 4 _ 3 2`
    4.  Remaining: 5(6,7). Only one slot left. Sequence: `1 4 5 3 2`

*   **Optimal Sequence:** **1 - 4 - 5 - 3 - 2**

*   **Calculating Makespan:**
    | Job | $P_{1j}$ | $P_{2j}$ | $C_{1j}$ | $C_{2j}$ | Idle $M_2$ |
    | :-- | :------- | :------- | :------- | :------- | :--------- |
    | 1   | 3        | 6        | 3        | 9        | 0          |
    | 4   | 4        | 5        | 7        | 14       | 5          |
    | 5   | 6        | 7        | 13       | 21       | 7          |
    | 3   | 7        | 3        | 20       | 24       | 3          |
    | 2   | 5        | 2        | 25       | 27       | 4          |

    *   Job 1: $C_{11}=3$, $C_{21}=3+6=9$. Idle $M_2 = max(0, 0-3)=0$.
    *   Job 4: $C_{14}=3+4=7$, $C_{24}=\max(7,9)+5=9+5=14$. Idle $M_2 = max(0, 9-7)=2$.
    *   Job 5: $C_{15}=7+6=13$, $C_{25}=\max(13,14)+7=14+7=21$. Idle $M_2 = max(0, 14-13)=1$.
    *   Job 3: $C_{13}=13+7=20$, $C_{23}=\max(20,21)+3=21+3=24$. Idle $M_2 = max(0, 21-20)=1$.
    *   Job 2: $C_{12}=20+5=25$, $C_{22}=\max(25,24)+2=25+2=27$. Idle $M_2 = max(0, 24-25)=0$.

    *   **Corrected Schedule Table:**
        | Job | $P_{1j}$ | $P_{2j}$ | $C_{1j}$ | $C_{2j}$ | Idle $M_2$ |
        | :-- | :------- | :------- | :------- | :------- | :--------- |
        | 1   | 3        | 6        | 3        | 9        | 0          |
        | 4   | 4        | 5        | 7        | 14       | 2          |
        | 5   | 6        | 7        | 13       | 21       | 1          |
        | 3   | 7        | 3        | 20       | 24       | 1          |
        | 2   | 5        | 2        | 25       | 27       | 0          |

    *   **Makespan:** 27 units.
    *   **Total Idle Time on $M_2$:** 0 + 2 + 1 + 1 + 0 = 4 units.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. References and Further Reading

*   **Operations Research-Principles and Applications by Srinivasan, G. (PHI Pvt. Ltd., Third Edition, 2017):** Provides a solid foundation in sequencing problems and Johnson's algorithm.
*   **Operations Research by Prem Kumar Gupta & D. S. Hira (S Chand publication, Third Edition, 2008):** Excellent for practical examples and step-by-step explanations of sequencing algorithms.
*   **Quantitative Techniques in Management by N. D Vohra. Hitesh Arora (McGraw Hill., Sixth Edition, 2021):** Offers a management-oriented perspective and covers sequencing as part of broader operational efficiency.
*   **Introduction to Operations Research, by F. S. Hillier& G. J. Leiberman: (McGraw Hill, Eleventh Edition):** A classic text with comprehensive coverage of optimization techniques, including sequencing.

---