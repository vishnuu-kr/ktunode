---
title: "Availability of Series and Parallel Systems."
subject: "RELIABILITY ENGINEERING"
module: "Module 4: Availability: Definitions and Basic Concepts"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463e6a"
status: "completed"
scrapedAt: "2026-05-20T18:18:15.000Z"
---
# Reliability Engineering: Module 4 - Availability: Definitions and Basic Concepts
## Topic: Availability of Series and Parallel Systems

---

### 1. Introduction to Availability

**Definition:** Availability is the probability that a system or component is in a working or operable state at a given point in time. It's a measure of how often a system is ready to perform its intended function.

**Relationship with Reliability and Maintainability:**
*   **Reliability (R):** The probability that a system will perform its intended function without failure for a specified period under given conditions. (Focuses on preventing failures).
*   **Maintainability (M):** The probability that a system, when failed, can be restored to its operational state within a specified time. (Focuses on quick recovery from failures).
*   **Availability (A):** The probability that a system is operational at any given time. It considers both the likelihood of not failing (reliability) and the ability to recover quickly from failures (maintainability).

**Formula:**
A general formula for availability, often referred to as "inherent availability" (when considering only time-to-failure and time-to-repair), is:

$A = \frac{MTTF}{MTTF + MTTR}$

Where:
*   **MTTF (Mean Time To Failure):** The average time a system operates before failing.
*   **MTTR (Mean Time To Repair):** The average time it takes to repair a failed system.

**Importance:** Availability is crucial for systems where continuous operation is essential, such as power plants, communication networks, and critical manufacturing processes. High availability ensures minimal downtime and maximum operational efficiency.

---

### 2. Availability of Series Systems

**Definition:** A series system is one where all its components must function for the system to function. If any single component fails, the entire system fails.

**Key Concept:** The reliability of a series system is the product of the reliabilities of its individual components. Similarly, the availability of a series system is the product of the availabilities of its individual components.

**Mathematical Formulation:**
Let:
*   $A_i$ be the availability of the $i$-th component in the series system.
*   $A_{system}$ be the availability of the series system.

For a series system with $n$ components:

$A_{system} = A_1 \times A_2 \times A_3 \times \dots \times A_n = \prod_{i=1}^{n} A_i$

**Derivation/Understanding:**
This stems from the fact that for the system to be available, *all* individual components must be available simultaneously. The probability of independent events occurring together is the product of their individual probabilities.

**Example:**
Consider a critical manufacturing line with three essential machines connected in series. For the line to operate, all three machines must be functional.
*   Machine 1 Availability ($A_1$): 0.98
*   Machine 2 Availability ($A_2$): 0.95
*   Machine 3 Availability ($A_3$): 0.97

The availability of the entire manufacturing line is:
$A_{line} = A_1 \times A_2 \times A_3 = 0.98 \times 0.95 \times 0.97 = 0.90309$

This means the manufacturing line is available approximately 90.31% of the time.

**Impact of Low Availability Component:** A single component with significantly lower availability can drastically reduce the overall system availability.

**Reference:** Balagurusamy, in his work on reliability, emphasizes that for series systems, the weakest link determines the system's overall performance. This principle extends to availability as well. (Balagurusamy, 2017)

---

### 3. Availability of Parallel Systems

**Definition:** A parallel system is one where the system functions as long as at least one of its components functions. Redundancy is the key characteristic of parallel systems.

**Key Concept:** The availability of a parallel system is calculated based on the probability that *at least one* component is available. It's often easier to calculate the probability that *all* components fail and subtract that from 1.

**Mathematical Formulation:**
Let:
*   $A_i$ be the availability of the $i$-th component in the parallel system.
*   $A_{system}$ be the availability of the parallel system.

For a parallel system with $n$ components:

$A_{system} = 1 - P(\text{all components fail})$

The probability that the $i$-th component fails is $(1 - A_i)$.
The probability that all $n$ components fail (assuming independence) is:
$P(\text{all components fail}) = (1 - A_1) \times (1 - A_2) \times (1 - A_3) \times \dots \times (1 - A_n) = \prod_{i=1}^{n} (1 - A_i)$

Therefore, the availability of a parallel system is:

$A_{system} = 1 - \prod_{i=1}^{n} (1 - A_i)$

**Special Case: Identical Components in Parallel**
If all $n$ components in parallel have the same availability $A_c$, then:

$A_{system} = 1 - (1 - A_c)^n$

**Derivation/Understanding:**
The system is available if component 1 is available, OR component 2 is available, OR ... OR component n is available. Using the principle of inclusion-exclusion, the direct calculation can become complex. The complement approach (1 - probability of all failing) is more straightforward.

**Example:**
Consider a redundant power supply system for a server. The system continues to operate even if one power supply fails, as long as the other is working. Assume two power supplies (n=2).
*   Power Supply 1 Availability ($A_1$): 0.99
*   Power Supply 2 Availability ($A_2$): 0.99

The availability of the redundant power supply system is:
$A_{system} = 1 - (1 - A_1) \times (1 - A_2)$
$A_{system} = 1 - (1 - 0.99) \times (1 - 0.99)$
$A_{system} = 1 - (0.01) \times (0.01)$
$A_{system} = 1 - 0.0001 = 0.9999$

This indicates a very high availability of 99.99% for the redundant system.

**Benefit of Parallel Systems:** Parallel systems significantly improve availability by providing redundancy. The more components you have in parallel with a reasonable individual availability, the higher the system availability becomes.

**Reference:** Chandrupatla and Srinath both discuss the power of redundancy in enhancing system availability, highlighting how parallel configurations can achieve near-perfect availability with sufficient redundant components. (Chandrupatla, 2009; Srinath, 2005)

---

### 4. Mixed Systems (Series-Parallel)

Many real-world systems are combinations of series and parallel configurations. To find the availability of such systems, you break them down into simpler series and parallel blocks and solve them iteratively.

**Example:**
Consider a system with two identical components in parallel, and this parallel block is connected in series with a third component.
*   Component 1 Availability ($A_c$): 0.95
*   Component 2 Availability ($A_c$): 0.95
*   Component 3 Availability ($A_3$): 0.99

**Step 1: Calculate the availability of the parallel block (Components 1 and 2).**
Let $A_{parallel\_block} = 1 - (1 - A_c)^2 = 1 - (1 - 0.95)^2 = 1 - (0.05)^2 = 1 - 0.0025 = 0.9975$

**Step 2: Treat the parallel block as a single unit and calculate the availability of the series system (parallel block in series with Component 3).**
$A_{system} = A_{parallel\_block} \times A_3 = 0.9975 \times 0.99 = 0.987525$

The availability of this mixed system is approximately 98.75%.

**Reference:** Ebling and Lewis provide methods for analyzing complex systems by decomposing them into manageable series and parallel structures, a fundamental approach in reliability engineering. (Ebling, 2004; Lewis, 2012)

---

### 5. Key Concepts and Definitions Recap

*   **Availability (A):** Probability of a system being operational at a given time.
*   **MTTF (Mean Time To Failure):** Average operational time before failure.
*   **MTTR (Mean Time To Repair):** Average time to restore a failed system.
*   **Series System:** System fails if any component fails. Availability is the product of individual availabilities. $A_{sys} = \prod A_i$.
*   **Parallel System:** System functions if at least one component functions. Availability is $1 - \prod (1 - A_i)$.
*   **Redundancy:** The use of parallel components to improve availability.
*   **Inherent Availability:** Availability calculated considering only inherent failure and repair rates, often using MTTF and MTTR.

---

### 6. Learning Outcome Alignment

*   **CO1: Explain various modes of failure and basic concepts of reliability (Knowledge Level: K2)**
    *   This module introduces the concept of availability as a key metric in system performance, intrinsically linked to reliability (preventing failures) and maintainability (recovering from failures). Understanding series and parallel systems helps illustrate how system structure impacts overall reliability and, by extension, availability.
*   **CO2: Identify methods for reliability prediction according to system characteristics (Knowledge Level: K3)**
    *   The core of this module is exactly this: identifying and applying methods (mathematical formulas) for predicting availability based on system characteristics (series, parallel, mixed configurations).
*   **CO3: Develop ability in formulating suitable strategies to enhance reliability of a manufacturing system. (Knowledge Level: K3)**
    *   By understanding how to calculate availability for series and parallel systems, one can strategize to improve it. For example, identifying critical series components with low availability and implementing parallel redundancy for them is a direct strategy to enhance system reliability and availability.
*   **CO4: Explain relation between reliability, availability and maintainability (Knowledge Level: K2)**
    *   The introductory section explicitly defines and relates these three critical concepts, showing how reliability contributes to uptime and maintainability to reduced downtime, both of which influence availability.

---

### 7. Important Points to Remember

*   **Series systems are as reliable as their weakest link.** Adding components in series *decreases* availability.
*   **Parallel systems provide redundancy.** Adding components in parallel *increases* availability, often significantly.
*   The availability of a parallel system with $n$ identical components approaches 1 as $n$ increases.
*   Always identify the configuration (series, parallel, or mixed) before applying the correct availability formula.
*   Availability calculations assume component independence unless stated otherwise.

---

### 8. Practice Questions and Exercises

**Question 1:**
A system consists of three components connected in series. The individual availabilities of these components are $A_1 = 0.98$, $A_2 = 0.97$, and $A_3 = 0.99$. What is the availability of the system?

**Answer 1:**
For a series system, $A_{system} = A_1 \times A_2 \times A_3$.
$A_{system} = 0.98 \times 0.97 \times 0.99 = 0.941186$
The system availability is approximately 94.12%.

**Question 2:**
A critical sensor system uses two identical sensors in parallel. If each sensor has an availability of 0.96, what is the availability of the sensor system?

**Answer 2:**
For a parallel system with identical components, $A_{system} = 1 - (1 - A_c)^n$.
Here, $A_c = 0.96$ and $n = 2$.
$A_{system} = 1 - (1 - 0.96)^2$
$A_{system} = 1 - (0.04)^2$
$A_{system} = 1 - 0.0016 = 0.9984$
The system availability is 99.84%.

**Question 3:**
Consider a system where Component A (availability 0.99) is in series with a parallel combination of Component B (availability 0.95) and Component C (availability 0.97). Calculate the overall system availability.

**Answer 3:**
**Step 1: Calculate the availability of the parallel combination of B and C.**
$A_{B\_parallel\_C} = 1 - (1 - A_B) \times (1 - A_C)$
$A_{B\_parallel\_C} = 1 - (1 - 0.95) \times (1 - 0.97)$
$A_{B\_parallel\_C} = 1 - (0.05) \times (0.03)$
$A_{B\_parallel\_C} = 1 - 0.0015 = 0.9985$

**Step 2: Calculate the availability of the system where A is in series with the parallel block.**
$A_{system} = A_A \times A_{B\_parallel\_C}$
$A_{system} = 0.99 \times 0.9985 = 0.988515$
The overall system availability is approximately 98.85%.

**Question 4 (Conceptual):**
If you need to improve the availability of a critical system that currently has low availability, would you primarily consider adding components in series or in parallel? Justify your answer.

**Answer 4:**
You would primarily consider adding components in **parallel**.
*   **Justification:** Components in series multiply their availabilities, meaning a low availability component significantly reduces the overall system availability. Adding components in series further decreases availability. Components in parallel provide redundancy; the system remains operational as long as at least one component is working. By adding components in parallel, the probability of all components failing simultaneously decreases dramatically, thus increasing overall system availability.

---
This concludes Module 4, Topic: Availability of Series and Parallel Systems. Remember to practice these concepts with different scenarios.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
