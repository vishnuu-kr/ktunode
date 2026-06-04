---
title: "Single and two independent components"
subject: "RELIABILITY ENGINEERING"
module: "Module 2: Redundancy Techniques in System design: Component and Unit redundancy"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463e52"
status: "completed"
scrapedAt: "2026-05-20T18:17:58.558Z"
---
# Reliability Engineering - Module 2: Redundancy Techniques in System Design

## Topic: Single and Two Independent Components

### 1. Introduction to Reliability and Failure

*   **Reliability:** The probability that a system or component will perform its intended function without failure for a specified period of time under given conditions. (Balagurusamy, Chandrupatla, Srinath)
*   **Failure:** The event where a system or component ceases to perform its intended function.
*   **Failure Mode:** The specific way in which a component or system fails. (CO1)
    *   *Example:* A light bulb failing by filament burnout. A hard drive failing due to a head crash.
*   **Failure Rate ($\lambda$):** The number of failures per unit time, often assumed constant for electronic components in their useful life period. (Srinath)
    *   Units: Failures per hour, failures per million hours (FPMH).
*   **Mean Time Between Failures (MTBF):** The average time between successive failures of a repairable system or component. For a constant failure rate, MTBF = 1/$\lambda$. (Balagurusamy)

### 2. Single Component Reliability

*   **Concept:** This section deals with the reliability of a single, non-redundant component.
*   **Probability of Survival (Reliability function R(t)):** The probability that a component survives beyond time *t*.
    *   $R(t) = P(\text{component survives beyond time } t)$
    *   For a constant failure rate $\lambda$, the reliability function is exponentially distributed:
        $R(t) = e^{-\lambda t}$ (Chandrupatla, Srinath)
*   **Probability of Failure (Failure function F(t)):** The probability that a component fails by time *t*.
    *   $F(t) = 1 - R(t) = 1 - e^{-\lambda t}$
*   **Relationship with MTBF:**
    *   If $\lambda$ is constant, MTBF = $1/\lambda$.
    *   Therefore, $R(t) = e^{-t/\text{MTBF}}$
*   **Example:**
    A certain electronic component has a constant failure rate of $10 \times 10^{-6}$ failures per hour. What is the probability that this component will survive for 1000 hours?
    *   $\lambda = 10 \times 10^{-6}$ failures/hour
    *   $t = 1000$ hours
    *   $R(1000) = e^{-(10 \times 10^{-6}) \times 1000} = e^{-0.01} \approx 0.99005$
    *   The probability of survival is approximately 99.005%.

### 3. Two Independent Components

*   **Independence:** Two components are independent if the failure of one does not affect the failure probability of the other. (Ebling, Lewis)
*   **System Configurations:**
    *   **Series Configuration:** The system fails if *any* of its components fail. All components must function for the system to function.
        *   *Example:* A chain is only as strong as its weakest link. Two light bulbs in series – if one burns out, the circuit is broken.
        *   **System Reliability ($R_s$):** The product of the reliabilities of individual components.
            $R_s = R_1 \times R_2$
        *   For two components with constant failure rates $\lambda_1$ and $\lambda_2$:
            $R_s = e^{-\lambda_1 t} \times e^{-\lambda_2 t} = e^{-(\lambda_1 + \lambda_2)t}$
        *   This implies the system has an equivalent failure rate of $\lambda_s = \lambda_1 + \lambda_2$. (Balagurusamy, Srinath)
    *   **Parallel Configuration (Redundancy):** The system fails only if *all* of its components fail. The system continues to function as long as at least one component is working.
        *   *Example:* Two identical engines in an aircraft; if one fails, the other can continue to power the aircraft.
        *   **System Reliability ($R_s$):** The probability that at least one component survives. It's easier to calculate the probability that *all* components fail and subtract from 1.
            $R_s = 1 - P(\text{both components fail})$
            $R_s = 1 - [F_1(t) \times F_2(t)]$ (due to independence)
            $R_s = 1 - [(1 - R_1(t)) \times (1 - R_2(t))]$ (Chandrupatla)
        *   For two components with constant failure rates $\lambda_1$ and $\lambda_2$:
            $R_s = 1 - [(1 - e^{-\lambda_1 t}) \times (1 - e^{-\lambda_2 t})]$
            $R_s = 1 - [1 - e^{-\lambda_2 t} - e^{-\lambda_1 t} + e^{-(\lambda_1 + \lambda_2)t}]$
            $R_s = e^{-\lambda_1 t} + e^{-\lambda_2 t} - e^{-(\lambda_1 + \lambda_2)t}$
        *   **Special Case: Identical Components:** If $R_1 = R_2 = R$ and $\lambda_1 = \lambda_2 = \lambda$, then:
            $R_s = 1 - (1-R)^2 = 1 - (1 - 2R + R^2) = 2R - R^2$
            $R_s = 1 - (1 - e^{-\lambda t})^2 = 1 - (1 - 2e^{-\lambda t} + e^{-2\lambda t}) = 2e^{-\lambda t} - e^{-2\lambda t}$ (Balagurusamy)

### 4. Practical Implications and Strategies for Reliability Enhancement (CO3)

*   **Component Redundancy:** Using backup components to ensure system operation even if primary components fail. This is a key strategy for enhancing reliability. (Balagurusamy, Chandrupatla)
    *   **Series systems are inherently less reliable than their individual components.** To improve reliability, we often convert series elements into parallel ones.
    *   **Parallel systems significantly improve reliability**, especially when components have low individual reliabilities.
*   **Understanding System Architecture:** The arrangement of components (series vs. parallel) dramatically impacts overall system reliability. (CO2)
*   **Failure Modes and Effects Analysis (FMEA):** A systematic approach to identifying potential failure modes in a system and their effects on system operation. This helps in designing effective redundancy strategies. (Srinath, Naikan)
    *   *Example:* Identifying that a pump failure in a cooling system could lead to overheating. Implementing a parallel pump backup.
*   **Trade-offs:** Redundancy often comes with increased cost, weight, complexity, and maintenance requirements. Engineers must balance these trade-offs. (Lewis)

### 5. Relation to Course Outcomes

*   **CO1 (Explain various modes of failure and basic concepts of reliability):** Covered in Section 1. Definitions of reliability, failure, failure mode, failure rate, and MTBF are foundational.
*   **CO2 (Identify methods for reliability prediction according to system characteristics):** Covered in Section 3. We predict reliability based on whether components are in series or parallel. The choice of configuration is a method for prediction.
*   **CO3 (Develop ability in formulating suitable strategies to enhance reliability of a manufacturing system):** Covered in Section 4. Component redundancy, particularly parallel configurations, is a primary strategy. Understanding series vs. parallel helps in formulating these strategies.
*   **CO4 (Explain relation between reliability, availability and maintainability):** While this topic primarily focuses on reliability and redundancy, understanding that redundancy is implemented to improve reliability, which directly impacts availability (the probability a system is operational when needed), is crucial. A system with higher reliability (less prone to failure) will naturally have higher availability, assuming maintainability is constant. (Balagurusamy, Chandrupatla)

### 6. Important Points to Remember

*   **Independence** is a crucial assumption for simple reliability calculations of redundant systems.
*   **Series systems multiply reliabilities**, thus decreasing overall reliability.
*   **Parallel systems use the '1 - (failures)' logic**, thus increasing overall reliability.
*   The reliability of a parallel system is always greater than or equal to the reliability of its most reliable component.
*   The reliability of a series system is always less than or equal to the reliability of its least reliable component.
*   The exponential distribution is commonly used to model the lifetime of components with a constant failure rate ($\lambda$).

---

### 7. Practice Questions and Exercises

**Question 1:**
A system consists of two components connected in series. Component A has a reliability of 0.95 for a given mission time, and Component B has a reliability of 0.90 for the same mission time. Assuming the components are independent, what is the reliability of the system?

**Answer 1:**
For a series system, $R_s = R_A \times R_B$.
$R_s = 0.95 \times 0.90 = 0.855$
The system reliability is 0.855.

**Question 2:**
Two identical components are connected in parallel. Each component has a reliability of 0.80 for a given mission time. Assuming the components are independent, what is the reliability of the parallel system?

**Answer 2:**
For a parallel system with two identical components, $R_s = 1 - (1 - R)^2$.
$R_s = 1 - (1 - 0.80)^2 = 1 - (0.20)^2 = 1 - 0.04 = 0.96$
The system reliability is 0.96.

**Question 3:**
A sensor has a constant failure rate ($\lambda$) of $5 \times 10^{-5}$ failures per hour.
a) What is the reliability of the sensor after 1000 hours of operation?
b) What is the Mean Time Between Failures (MTBF) for this sensor?
c) If two such sensors are used in parallel, what is the reliability of this redundant system after 1000 hours?

**Answer 3:**
a) $R(t) = e^{-\lambda t}$
   $\lambda = 5 \times 10^{-5}$ failures/hour
   $t = 1000$ hours
   $R(1000) = e^{-(5 \times 10^{-5}) \times 1000} = e^{-0.05} \approx 0.9512$
   The reliability is approximately 0.9512.

b) MTBF = $1/\lambda = 1 / (5 \times 10^{-5})$ hours $= 20000$ hours.

c) For two identical components in parallel: $R_s = 1 - (1 - R)^2$
   We know $R \approx 0.9512$ from part (a).
   $R_s = 1 - (1 - 0.9512)^2 = 1 - (0.0488)^2 = 1 - 0.00238144 \approx 0.9976$
   Alternatively, using $R_s = 2R - R^2$:
   $R_s = 2(0.9512) - (0.9512)^2 = 1.9024 - 0.90479344 \approx 0.9976$
   The reliability of the parallel system is approximately 0.9976.

**Question 4:**
Explain why connecting two identical components in parallel is a strategy to enhance reliability, contrasting it with a series connection of the same components.

**Answer 4:**
Connecting two identical components in parallel enhances reliability because the system functions as long as at least one component is operational. The system only fails if both components fail simultaneously. This is a form of redundancy.
The reliability of a parallel system with two components of reliability R is $R_s = 1 - (1-R)^2 = 2R - R^2$. Since $R \le 1$, $2R - R^2 \ge R$. This shows the parallel system reliability is at least as good as, and usually better than, the individual component reliability.

In contrast, connecting two identical components in series means the system fails if either component fails. The system reliability is $R_s = R \times R = R^2$. Since $R \le 1$, $R^2 \le R$. This shows the series system reliability is always less than or equal to the individual component reliability, thus reducing overall reliability.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 8. References and Further Reading

*   **Balagurusamy, Reliability Engineering:** Provides fundamental concepts and applications of reliability, including redundancy.
*   **Chandrupatla, Quality and Reliability in Engineering:** Offers a comprehensive view of quality and reliability with detailed examples and mathematical formulations.
*   **Srinath, Concepts of Reliability Engineering:** A foundational text covering probability, statistical methods, and various reliability models.
*   **Ebling, An introduction to Reliability and Maintainability Engineering:** Discusses system reliability, redundancy techniques, and fault-tolerant design.
*   **Lewis, Introduction to Reliability Engineering:** Explores reliability concepts, prediction methods, and the impact of redundancy on system performance.

This module serves as a crucial foundation for understanding how to build more robust and dependable systems by incorporating redundancy, a key aspect of reliability engineering.