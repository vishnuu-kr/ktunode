---
title: "Sequencing Problem: Basic terminologies"
subject: "OPERATIONS RESEARCH"
module: "Module 2: Sequencing Problem: Basic terminologies"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463620"
status: "completed"
scrapedAt: "2026-05-20T18:01:53.053Z"
---
# Operations Research: Module 2 - Sequencing Problem: Basic Terminologies

## 1. Introduction to Sequencing Problems

Sequencing problems are a class of optimization problems in Operations Research that deal with determining the optimal order (sequence) in which a set of jobs should be performed on one or more machines to optimize a certain objective function. The primary goal is usually to minimize the total time taken to complete all jobs, minimize costs, or maximize resource utilization.

**Key Concept:** The essence of a sequencing problem lies in finding the best arrangement of tasks to achieve a specific operational goal.

### 1.1. What is a Sequence?

A sequence is a specific order in which jobs are processed. For example, if we have jobs J1, J2, and J3, possible sequences include:
*   J1 -> J2 -> J3
*   J1 -> J3 -> J2
*   J2 -> J1 -> J3
*   J2 -> J3 -> J1
*   J3 -> J1 -> J2
*   J3 -> J2 -> J1

### 1.2. Objectives of Sequencing

The most common objectives in sequencing problems are:

*   **Minimizing Total Completion Time (Flow Time):** The sum of the times at which each job is completed.
*   **Minimizing Makespan:** The total time elapsed from the start of the first job to the completion of the last job.
*   **Minimizing Average Completion Time:** Total completion time divided by the number of jobs.
*   **Minimizing Average Waiting Time:** The sum of waiting times for all jobs divided by the number of jobs.
*   **Minimizing Average Tardiness:** The sum of the excess time beyond a due date for all jobs, divided by the number of jobs.
*   **Minimizing Number of Tardy Jobs:** The count of jobs that are completed after their specified due dates.

**Example:** Consider two jobs, J1 and J2, to be processed on a single machine.
*   **Sequence J1 -> J2:**
    *   J1 starts at 0, finishes at its processing time.
    *   J2 starts after J1 finishes, finishes at its processing time plus J1's processing time.
*   **Sequence J2 -> J1:**
    *   J2 starts at 0, finishes at its processing time.
    *   J1 starts after J2 finishes, finishes at its processing time plus J2's processing time.

The objective would be to choose the sequence that leads to the minimum makespan or minimum total completion time.

### 1.3. Importance of Sequencing

Sequencing is crucial in various operational settings:

*   **Production Planning:** Deciding the order of manufacturing different products on machines.
*   **Project Management:** Scheduling tasks within a project.
*   **Service Operations:** Determining the order of serving customers (e.g., in a bank, hospital).
*   **Resource Allocation:** Efficiently utilizing limited resources.

**Relevance to Course Outcomes:** This introduction directly supports **CO2: To apply basic sequencing techniques for processing jobs through machines (Knowledge Level: K2, K3)** by laying the foundational understanding of what sequencing problems are and why they are important.

**Textbook References:**
*   **Gupta & Hira (2008), Chapter 14:** Often introduces sequencing problems and their basic concepts.
*   **Vohra & Arora (2021), Chapter 12:** Likely covers the fundamentals of sequencing and their applications.
*   **Srinivasan (2017), Chapter on Sequencing:** Will provide a theoretical underpinning and possibly initial examples.

## 2. Basic Terminology in Sequencing Problems

To effectively analyze and solve sequencing problems, it's essential to understand the associated terminology.

### 2.1. Job

A job is a task or an operation that needs to be performed. Each job typically has a specific processing time and may have other attributes like a due date.

**Example:** In a manufacturing plant, producing a batch of chairs is a job. In a hospital, treating a patient is a job.

### 2.2. Machine

A machine is a resource that performs a job or a part of a job. Machines can be identical, interchangeable, or distinct.

**Example:** A lathe machine, a drilling machine in a factory, or a doctor in a clinic.

### 2.3. Processing Time ($p_{ij}$)

The time required to complete job $j$ on machine $i$. This is a critical parameter for all sequencing problems.

*   $p_{ij}$: Processing time of job $j$ on machine $i$.

**Important Point:** Processing times are usually assumed to be constant and independent of the sequence.

### 2.4. Sequence

The order in which jobs are processed on machines.

### 2.5. Makespan ($C_{max}$)

The total time elapsed from the commencement of the first job to the completion of the last job in a given sequence. It is the completion time of the last job.

**Example:** If a sequence of jobs J1, J2, J3 takes 10, 15, and 12 units of time respectively, and they are processed one after another without any idle time, the makespan would be 10 + 15 + 12 = 37 units.

### 2.6. Flow Time ($F_j$)

The total time a job spends in the system, from its arrival (or start of processing) until its completion.

*   $F_j = C_j$ (completion time of job $j$), assuming jobs arrive at time 0.

### 2.7. Total Flow Time ($\sum F_j$)

The sum of the flow times of all jobs. This is a common objective function to minimize.

### 2.8. Average Flow Time ($\bar{F}$)

The total flow time divided by the number of jobs: $\bar{F} = \frac{\sum F_j}{n}$, where $n$ is the number of jobs.

### 2.9. Waiting Time ($W_j$)

The time a job spends waiting in the queue before its processing begins.

*   $W_j = F_j - p_j$ (assuming arrival at time 0)

### 2.10. Total Waiting Time ($\sum W_j$)

The sum of the waiting times of all jobs.

### 2.11. Average Waiting Time ($\bar{W}$)

The total waiting time divided by the number of jobs: $\bar{W} = \frac{\sum W_j}{n}$.

### 2.12. Tardiness ($T_j$)

The extent to which a job is completed after its due date.

*   $T_j = \max(0, C_j - d_j)$, where $d_j$ is the due date of job $j$.

### 2.13. Total Tardiness ($\sum T_j$)

The sum of the tardiness of all jobs.

### 2.14. Number of Tardy Jobs ($N_T$)

The count of jobs whose completion time exceeds their due date.

**Example Scenario to Illustrate Terms:**
Consider three jobs (J1, J2, J3) to be processed on a single machine.
Processing times: $p_{11}=3$, $p_{12}=5$, $p_{13}=2$.
Due dates: $d_1=6$, $d_2=8$, $d_3=4$.

**Sequence: J1 -> J2 -> J3**

*   **J1:**
    *   Starts at 0.
    *   Processing Time: 3.
    *   Completion Time ($C_1$): 0 + 3 = 3.
    *   Flow Time ($F_1$): 3.
    *   Waiting Time ($W_1$): 3 - 3 = 0.
    *   Tardiness ($T_1$): max(0, 3 - 6) = 0.
*   **J2:**
    *   Starts at $C_1 = 3$.
    *   Processing Time: 5.
    *   Completion Time ($C_2$): 3 + 5 = 8.
    *   Flow Time ($F_2$): 8.
    *   Waiting Time ($W_2$): 8 - 5 = 3.
    *   Tardiness ($T_2$): max(0, 8 - 8) = 0.
*   **J3:**
    *   Starts at $C_2 = 8$.
    *   Processing Time: 2.
    *   Completion Time ($C_3$): 8 + 2 = 10.
    *   Flow Time ($F_3$): 10.
    *   Waiting Time ($W_3$): 10 - 2 = 8.
    *   Tardiness ($T_3$): max(0, 10 - 4) = 6.

**Summary for Sequence J1 -> J2 -> J3:**
*   Makespan ($C_{max}$): $C_3 = 10$.
*   Total Flow Time ($\sum F_j$): 3 + 8 + 10 = 21.
*   Average Flow Time ($\bar{F}$): 21 / 3 = 7.
*   Total Waiting Time ($\sum W_j$): 0 + 3 + 8 = 11.
*   Average Waiting Time ($\bar{W}$): 11 / 3 ≈ 3.67.
*   Total Tardiness ($\sum T_j$): 0 + 0 + 6 = 6.
*   Number of Tardy Jobs ($N_T$): 1 (Job J3).

**Relevance to Course Outcomes:** Understanding these terms is fundamental for applying sequencing techniques (**CO2**). These terms form the basis of the objective functions that we aim to optimize.

**Textbook References:**
*   **Srinivasan (2017), Chapter:** Defines various performance measures.
*   **Gupta & Hira (2008), Chapter 14:** Explains terms like makespan, flow time, and their significance.
*   **Rao (Wiley eastern, Second edition):** Often provides detailed definitions and mathematical formulations of these terms in optimization contexts.
*   **Hillier & Lieberman (Eleventh Edition):** Covers these basic terms comprehensively in their chapters on sequencing and scheduling.

## 3. Types of Sequencing Problems (Overview)

While this module focuses on basic terminologies, it's helpful to know the common classifications of sequencing problems.

### 3.1. Based on the Number of Machines

*   **Single Machine Problems:** All jobs are processed on a single machine.
*   **Parallel Machine Problems:** Jobs are processed on multiple identical or non-identical machines.
*   **Flow Shop Problems:** Jobs are processed on a series of machines in a fixed order.
    *   **Pure Flow Shop:** Each job follows the same sequence of machines.
    *   **Mixed Flow Shop:** The sequence of machines may differ for different jobs.
*   **Job Shop Problems:** Each job has its own unique sequence of machines to visit.

### 3.2. Based on the Nature of Jobs

*   **Identical Jobs:** All jobs are the same.
*   **Similar Jobs:** Jobs are similar but may have slightly different processing times.
*   **Dissimilar Jobs:** Jobs are distinct and may require different machines or processing sequences.

### 3.3. Based on Constraints and Objectives

*   **Problems with Due Dates:** Minimizing tardiness, number of tardy jobs.
*   **Problems with Precedence Relations:** Some jobs must be completed before others can start.

**Relevance to Course Outcomes:** This overview contextualizes the importance of the terminology, as it forms the basis for understanding and classifying different types of sequencing problems that **CO2** aims to address.

**Textbook References:**
*   **Ravindran, Phillips, Solberg (1987):** Likely provides a structured overview of different sequencing problem types.
*   **Goel & Mittal (1999):** May categorize sequencing problems and briefly introduce their characteristics.

## 4. Practice Questions and Exercises

Let's test your understanding of the terminology.

**Question 1:**
A company has three jobs (J1, J2, J3) to be processed on a single machine. The processing times are 4, 2, and 6 hours respectively. The jobs are to be processed in the order J1 -> J2 -> J3. Calculate:
a) The completion time of each job.
b) The makespan.
c) The total flow time.
d) The average flow time.
e) The waiting time for each job.
f) The total waiting time.

**Answer 1:**
Sequence: J1 -> J2 -> J3
Processing Times: $p_{11}=4$, $p_{12}=2$, $p_{13}=6$.

a) **Completion Times:**
   *   J1: $C_1 = p_{11} = 4$ hours.
   *   J2: $C_2 = C_1 + p_{12} = 4 + 2 = 6$ hours.
   *   J3: $C_3 = C_2 + p_{13} = 6 + 6 = 12$ hours.

b) **Makespan ($C_{max}$):**
   *   $C_{max} = C_3 = 12$ hours.

c) **Total Flow Time ($\sum F_j$):**
   *   Assuming arrival at time 0, $F_j = C_j$.
   *   $\sum F_j = C_1 + C_2 + C_3 = 4 + 6 + 12 = 22$ hours.

d) **Average Flow Time ($\bar{F}$):**
   *   $\bar{F} = \frac{\sum F_j}{3} = \frac{22}{3} \approx 7.33$ hours.

e) **Waiting Times ($W_j$):**
   *   J1: $W_1 = C_1 - p_{11} = 4 - 4 = 0$ hours.
   *   J2: $W_2 = C_2 - p_{12} = 6 - 2 = 4$ hours.
   *   J3: $W_3 = C_3 - p_{13} = 12 - 6 = 6$ hours.

f) **Total Waiting Time ($\sum W_j$):**
   *   $\sum W_j = W_1 + W_2 + W_3 = 0 + 4 + 6 = 10$ hours.

**Question 2:**
Consider the same jobs (J1, J2, J3) with processing times 4, 2, and 6 hours respectively. If the due dates are $d_1=5$, $d_2=4$, and $d_3=10$. Consider the sequence J2 -> J1 -> J3. Calculate:
a) The completion time of each job.
b) The makespan.
c) The tardiness of each job.
d) The total tardiness.
e) The number of tardy jobs.

**Answer 2:**
Sequence: J2 -> J1 -> J3
Processing Times: $p_{12}=2$, $p_{11}=4$, $p_{13}=6$.
Due Dates: $d_2=4$, $d_1=5$, $d_3=10$.

a) **Completion Times:**
   *   J2: $C_2 = p_{12} = 2$ hours.
   *   J1: $C_1 = C_2 + p_{11} = 2 + 4 = 6$ hours.
   *   J3: $C_3 = C_1 + p_{13} = 6 + 6 = 12$ hours.

b) **Makespan ($C_{max}$):**
   *   $C_{max} = C_3 = 12$ hours.

c) **Tardiness ($T_j$):**
   *   J2: $T_2 = \max(0, C_2 - d_2) = \max(0, 2 - 4) = 0$ hours.
   *   J1: $T_1 = \max(0, C_1 - d_1) = \max(0, 6 - 5) = 1$ hour.
   *   J3: $T_3 = \max(0, C_3 - d_3) = \max(0, 12 - 10) = 2$ hours.

d) **Total Tardiness ($\sum T_j$):**
   *   $\sum T_j = T_2 + T_1 + T_3 = 0 + 1 + 2 = 3$ hours.

e) **Number of Tardy Jobs ($N_T$):**
   *   Jobs J1 and J3 are tardy.
   *   $N_T = 2$.

**Important Points to Remember:**

*   Sequencing problems aim to find the optimal order of jobs to optimize a specific objective.
*   Common objectives include minimizing makespan, total flow time, average flow time, waiting time, tardiness, and the number of tardy jobs.
*   Key terms like "processing time," "makespan," "flow time," and "tardiness" are crucial for understanding and solving these problems.
*   The order of jobs significantly impacts these performance measures.
*   The choice of objective function depends on the specific needs of the operational scenario.

This foundational understanding of basic terminologies is essential for progressing to learning and applying various sequencing algorithms and techniques in subsequent modules. The concepts covered directly support the knowledge level requirements of **CO2**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
