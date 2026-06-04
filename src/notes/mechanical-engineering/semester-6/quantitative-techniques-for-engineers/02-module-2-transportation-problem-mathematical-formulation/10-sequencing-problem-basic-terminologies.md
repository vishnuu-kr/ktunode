---
title: "Sequencing Problem: Basic terminologies"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 2: Transportation Problem: Mathematical Formulation"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a72"
status: "completed"
scrapedAt: "2026-05-20T18:07:32.505Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS - Module 2: Transportation Problem: Mathematical Formulation

## Topic: Sequencing Problem: Basic Terminologies

**Learning Outcomes:**

*   Understand the fundamental concepts and definitions related to sequencing problems.
*   Identify the key elements and objectives of sequencing problems.
*   Recognize different types of sequencing problems.
*   Appreciate the importance of sequencing in various engineering applications.

**Course Outcomes Alignment:**

*   **CO3: To sequence and schedule jobs and projects (Knowledge Level: K3)** - This topic directly contributes to understanding the core concepts and terminology necessary for sequencing and scheduling.

---

### 1. Introduction to Sequencing Problems

Sequencing problems, also known as **Job Sequencing Problems**, deal with the determination of the optimal order or sequence in which a set of jobs should be performed on a given set of machines to optimize a specific objective. In essence, it's about finding the best "to-do list" to minimize time, cost, or maximize resource utilization.

**Key Idea:** The order in which jobs are processed can significantly impact overall efficiency and effectiveness.

**Origin and Relevance:** Sequencing problems are a crucial part of **Operations Research** and have widespread applications in various fields, including manufacturing, project management, computer scheduling, and service operations.

---

### 2. Basic Terminologies

Let's define the fundamental terms used in sequencing problems:

#### 2.1. Jobs

*   **Definition:** A job is an activity or task that needs to be performed. These can be production orders, customer requests, maintenance activities, computational tasks, etc.
*   **Characteristics:** Jobs typically have associated processing times and may have dependencies or specific requirements.
*   **Example:** In a manufacturing plant, a "job" could be producing 100 units of a specific product. In a hospital, a job might be performing a surgery.

#### 2.2. Machines (or Processing Facilities/Resources)

*   **Definition:** A machine is a resource or facility on which jobs are processed. This can be a physical machine, a workstation, a server, a surgeon, or any resource capable of performing an operation.
*   **Characteristics:** Machines can have varying capacities, availability, and processing speeds.
*   **Example:** In a factory, machines could be lathes, milling machines, or assembly lines. In a computer system, a machine could be a CPU.

#### 2.3. Processing Time ($p_{ij}$)

*   **Definition:** The time required to process job $j$ on machine $i$.
*   **Notation:** $p_{ij}$ represents the processing time of job $j$ on machine $i$.
*   **Importance:** This is a core parameter that directly influences the total time and cost of a sequence.
*   **Example:** If job J1 requires 5 hours on Machine M1, then $p_{11} = 5$.

#### 2.4. Sequence

*   **Definition:** An ordered list of jobs to be performed on a specific machine or a series of machines.
*   **Example:** For three jobs (J1, J2, J3) on a single machine, a possible sequence is (J1, J2, J3), meaning J1 is processed first, then J2, then J3.

#### 2.5. Order of Jobs

*   **Definition:** The specific arrangement of jobs in a sequence. The term "order" is often used interchangeably with "sequence."

#### 2.6. Performance Measures/Objective Functions

These are criteria used to evaluate the effectiveness of a particular sequence. Common objectives include:

*   **Makespan ($C_{max}$):**
    *   **Definition:** The total time elapsed from the start of the first job to the completion of the last job in the entire schedule. This is a crucial measure for minimizing overall production time.
    *   **Goal:** Minimize Makespan.
    *   **Example:** If the last job finishes at 5:00 PM, the makespan is 5:00 PM (assuming the schedule starts at 0:00 AM).

*   **Total Completion Time ($\sum C_j$):**
    *   **Definition:** The sum of the completion times of all jobs. This measures the average time jobs spend in the system.
    *   **Goal:** Minimize Total Completion Time.
    *   **Example:** If J1 finishes at 2 PM, J2 at 5 PM, and J3 at 7 PM, then $\sum C_j = 2 + 5 + 7 = 14$ (units of time).

*   **Average Completion Time ($\bar{C}$):**
    *   **Definition:** The total completion time divided by the number of jobs. $\bar{C} = \frac{\sum C_j}{n}$.
    *   **Goal:** Minimize Average Completion Time.

*   **Total Tardiness ($\sum T_j$):**
    *   **Definition:** The sum of the amount by which each job's completion time exceeds its due date. A job is tardy if its completion time ($C_j$) is greater than its due date ($d_j$). Tardiness $T_j = \max(0, C_j - d_j)$.
    *   **Goal:** Minimize Total Tardiness.
    *   **Example:** If J1 has a due date of 3 PM and finishes at 5 PM, its tardiness is 2 hours.

*   **Maximum Tardiness ($T_{max}$):**
    *   **Definition:** The largest tardiness among all jobs.
    *   **Goal:** Minimize Maximum Tardiness.

*   **Total Flow Time ($\sum F_j$):**
    *   **Definition:** Often used interchangeably with Total Completion Time, representing the total time a job spends in the system.

*   **Number of Tardy Jobs ($\sum U_j$):**
    *   **Definition:** The count of jobs that are completed after their respective due dates. $U_j = 1$ if $C_j > d_j$, and $U_j = 0$ otherwise.
    *   **Goal:** Minimize the Number of Tardy Jobs.

#### 2.7. Single Machine Sequencing

*   **Definition:** A scenario where all jobs are processed on a single machine. This is the simplest form of sequencing problem.
*   **Objective:** Typically to minimize makespan, total completion time, or total tardiness.
*   **Example:** A barber shop where customers arrive and are served one at a time by a single barber.

#### 2.8. Parallel Machine Sequencing

*   **Definition:** A scenario where there are multiple identical machines, and jobs can be processed on any of them.
*   **Objective:** Often to minimize makespan by distributing jobs efficiently across machines.
*   **Example:** Multiple identical printers in an office, each capable of printing documents.

#### 2.9. Flow Shop Sequencing

*   **Definition:** A scenario where jobs must be processed on a series of machines in a fixed order. For example, Job $j$ must be processed on Machine M1, then M2, then M3, etc.
*   **Objective:** Typically to minimize makespan.
*   **Example:** An automobile assembly line where cars move through various stations (engine installation, painting, interior fitting).

#### 2.10. Job Shop Sequencing

*   **Definition:** A more complex scenario where each job may have a different sequence of machines to visit. The order of machines can vary from job to job.
*   **Objective:** Typically to minimize makespan.
*   **Example:** A machine shop that produces a variety of custom parts, each requiring a different set of operations on different machines.

#### 2.11. Due Date ($d_j$)

*   **Definition:** The specific time by which a job is expected or required to be completed.
*   **Importance:** Crucial for calculating tardiness-related performance measures.

---

### 3. Importance and Applications

Understanding sequencing is vital for:

*   **Manufacturing:** Optimizing production schedules to reduce lead times, minimize work-in-progress, and meet delivery deadlines.
*   **Project Management:** Scheduling tasks within a project to ensure timely completion and efficient resource allocation.
*   **Computer Science:** Scheduling processes on a CPU, managing tasks in an operating system, and optimizing network traffic.
*   **Healthcare:** Scheduling surgeries, appointments, and patient flow to maximize efficiency and minimize waiting times.
*   **Service Industries:** Scheduling staff, customer appointments, and deliveries.

---

### 4. Important Points to Remember

*   **Objective is Key:** The optimal sequence heavily depends on the performance measure you want to optimize.
*   **Problem Type Matters:** The nature of the machines and job processing paths (single machine, parallel, flow shop, job shop) dictates the solution approach.
*   **Processing Times:** Accurate estimation of processing times is crucial for effective sequencing.
*   **Constraints:** Real-world problems often have additional constraints (e.g., machine availability, job priorities, setup times) that must be considered.

---

### 5. Practice Questions

**Question 1:** Define "Makespan" in the context of sequencing problems. What is the typical objective related to makespan?

**Question 2:** Differentiate between a "Flow Shop" and a "Job Shop" sequencing problem.

**Question 3:** If Job A finishes at 10 AM, Job B at 1 PM, and Job C at 2 PM, and their due dates are 9 AM, 12 PM, and 3 PM respectively, calculate:
    a) The Total Completion Time.
    b) The tardiness for each job.
    c) The Total Tardiness.

**Question 4:** Briefly explain why the order of jobs can significantly impact the efficiency of a system.

---

### 6. Answers to Practice Questions

**Answer 1:**
Makespan ($C_{max}$) is the total time elapsed from the start of the first job to the completion of the last job in the entire schedule. The typical objective related to makespan is to **minimize** it, aiming to complete all jobs as quickly as possible.

**Answer 2:**
*   **Flow Shop:** In a flow shop, jobs must be processed on a series of machines in a **fixed, predetermined order**. All jobs follow the same sequence of machines.
*   **Job Shop:** In a job shop, jobs can have **different and unique sequences of machines** to visit. The routing of jobs through machines is job-dependent.

**Answer 3:**
Let's assume the schedule starts at 0:00 AM for simplicity in calculation.
*   Completion Times:
    *   Job A ($C_A$): 10 AM (10 hours from start)
    *   Job B ($C_B$): 1 PM (13 hours from start)
    *   Job C ($C_C$): 2 PM (14 hours from start)

*   Due Dates:
    *   Job A ($d_A$): 9 AM (9 hours from start)
    *   Job B ($d_B$): 12 PM (12 hours from start)
    *   Job C ($d_C$): 3 PM (15 hours from start)

    a) **Total Completion Time:**
       $\sum C_j = C_A + C_B + C_C = 10 + 13 + 14 = 37$ (hours)

    b) **Tardiness for each job:**
       *   Job A Tardiness ($T_A$): $\max(0, C_A - d_A) = \max(0, 10 - 9) = 1$ hour
       *   Job B Tardiness ($T_B$): $\max(0, C_B - d_B) = \max(0, 13 - 12) = 1$ hour
       *   Job C Tardiness ($T_C$): $\max(0, C_C - d_C) = \max(0, 14 - 15) = 0$ hours

    c) **Total Tardiness:**
       $\sum T_j = T_A + T_B + T_C = 1 + 1 + 0 = 2$ hours

**Answer 4:**
The order of jobs impacts efficiency because it determines:
1.  **Machine Utilization:** How long machines are kept busy versus idle.
2.  **Waiting Times:** How long jobs wait before being processed.
3.  **Completion Times:** When individual jobs and the entire batch are finished.
4.  **Resource Dependencies:** In multi-machine systems, the completion of one job on a machine affects its availability for the next machine.
By choosing an optimal sequence, we can minimize delays, reduce work-in-progress, and ensure timely delivery, thus improving overall operational efficiency and cost-effectiveness.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### References

*   **Paneerselvam, R. (2023).** *Operations Research* (Third edition). PHI. (Chapter on Sequencing and Scheduling)
*   **Taha, H. A. (2019).** *Operations Research: An Introduction* (Tenth edition). Pearson. (Chapters related to Network Flows and Scheduling)
*   **Hillier, F. S., & Lieberman, G. J. (2017).** *Introduction to Operations Research* (Tenth edition). McGraw Hill. (Sections on Sequencing and Scheduling)
*   **Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2013).** *Discrete Event System Simulation* (Fifth edition). Pearson. (While not directly on sequencing formulation, provides context for simulation of systems where sequencing is critical).

---
This concludes the basic terminologies for sequencing problems. The next steps would involve exploring different types of sequencing problems and the algorithms used to solve them.