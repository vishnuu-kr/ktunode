---
title: "Inherent availability"
subject: "RELIABILITY ENGINEERING"
module: "Module 4: Availability: Definitions and Basic Concepts"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463e67"
status: "completed"
scrapedAt: "2026-05-20T18:18:12.915Z"
---
# Reliability Engineering: Module 4 - Availability: Definitions and Basic Concepts

## Topic: Inherent Availability

This module delves into the fundamental concepts of availability, focusing on **Inherent Availability**. Understanding inherent availability is crucial for assessing the true potential of a system to be available for use, independent of external support factors.

### 1. Learning Outcomes Covered

This topic will help you achieve the following learning outcomes:

*   **CO1 (K2): Explain various modes of failure and basic concepts of reliability.** (Inherent availability is a core concept in reliability and directly relates to failure and repair processes.)
*   **CO4 (K2): Explain relation between reliability, availability and maintainability.** (Inherent availability is a specific measure that bridges reliability and maintainability.)

### 2. Key Concepts and Definitions

#### 2.1 What is Availability?

Availability is a measure of the degree to which a system or component is operational and accessible when required for use. It's essentially the probability that a system will be in an operable state at any given time.

**Definition (Balagurusamy, 2017):** Availability is the probability that a system is in an operable state at a specified point in time or over a specified period of time.

#### 2.2 Types of Availability

While availability can be viewed from different perspectives, for our discussion, we will focus on the distinction that leads to inherent availability:

*   **Inherent Availability ($A_I$):** This is the availability of a system when it is *not* subject to external support. It depends solely on the reliability of the system's components and the time required to repair them.
*   **Achieved Availability ($A_A$):** This considers the impact of planned maintenance and logistics support.
*   **Operational Availability ($A_O$):** This is the most realistic measure, accounting for inherent availability, achieved availability, and operational factors like operator availability and supply chain support.

#### 2.3 Inherent Availability ($A_I$)

**Definition:** Inherent Availability is the probability that a system is in an operable state when only internal factors (i.e., component reliability and repair times) are considered. It represents the system's potential to be available, assuming perfect external support.

**Key Assumption:** Inherent availability assumes that all necessary parts and personnel are immediately available for repair and that maintenance actions are performed perfectly and without delay.

**Formula for Inherent Availability:**

Inherent Availability is typically expressed as the ratio of the Mean Time Between Failures (MTBF) to the sum of the Mean Time Between Failures (MTBF) and the Mean Time To Repair (MTTR).

$$A_I = \frac{MTBF}{MTBF + MTTR}$$

Where:
*   **MTBF (Mean Time Between Failures):** The average time a system or component operates successfully between failures. It's a measure of reliability.
*   **MTTR (Mean Time To Repair):** The average time required to repair a failed system or component and return it to an operable state. It's a measure of maintainability.

**Relationship with Reliability and Maintainability (CO4):**

Inherent availability is a direct consequence of both reliability (represented by MTBF) and maintainability (represented by MTTR).

*   **High Reliability (high MTBF):** Leads to higher inherent availability, as the system fails less often.
*   **High Maintainability (low MTTR):** Leads to higher inherent availability, as the system can be repaired and returned to service more quickly.

**Example (Balagurusamy, 2017):**

Consider a pump with the following characteristics:
*   MTBF = 1000 hours
*   MTTR = 20 hours

Calculate its inherent availability:

$$A_I = \frac{1000 \text{ hours}}{1000 \text{ hours} + 20 \text{ hours}} = \frac{1000}{1020} \approx 0.9804$$

This means the pump is inherently available for approximately 98.04% of the time, assuming ideal repair conditions.

**Example (Chandrupatla, 2009):**

A computer system has a mean time between failures of 5000 hours and a mean time to repair of 5 hours. What is its inherent availability?

$$A_I = \frac{5000 \text{ hours}}{5000 \text{ hours} + 5 \text{ hours}} = \frac{5000}{5005} \approx 0.9990$$

This indicates a very high inherent availability, suggesting the system is highly reliable and quick to repair.

#### 2.4 Inherent Availability for Systems with Multiple Components

For a system composed of multiple components, the inherent availability calculation depends on how these components are configured (e.g., series, parallel).

*   **Series System:** If components are in series, the system fails if *any* component fails. The system's reliability is the product of individual component reliabilities. For inherent availability, this translates to:

    If $A_{I,i}$ is the inherent availability of component $i$, and the components are in series, the system's inherent availability is:

    $$A_{I, system} = \prod_{i=1}^{n} A_{I,i}$$

    *However, it's more common to work with failure rates ($\lambda$) and repair rates ($\mu$). For a component, $A_I = \frac{\lambda}{\lambda + \mu}$. For a series system, the total failure rate is $\Lambda = \sum \lambda_i$, and the total repair rate is $\mu_{system} = \frac{1}{\sum (1/\mu_i)}$. Thus, $A_{I, system} = \frac{\Lambda}{\Lambda + \mu_{system}}$. A simpler approach if we assume MTTR for each component is the same is $A_{I, system} = A_{I, component}$. More accurately, for series systems, it is often calculated using failure rates and repair rates.*

    Let's consider a more direct application using MTBF and MTTR for components. If a system has two components in series, and $A_{I1} = 0.98$ and $A_{I2} = 0.99$:

    $$A_{I, system} = A_{I1} \times A_{I2} = 0.98 \times 0.99 = 0.9702$$

*   **Parallel System:** If components are in parallel, the system fails only if *all* components fail. The system's reliability is higher than individual components. For inherent availability of a simple parallel system (assuming two identical components):

    $$A_{I, system} = 1 - (1 - A_{I, component})^n$$

    Where 'n' is the number of parallel components.

    Consider a system with two identical pumps in parallel, each with an inherent availability of $A_I = 0.98$:

    $$A_{I, system} = 1 - (1 - 0.98)^2 = 1 - (0.02)^2 = 1 - 0.0004 = 0.9996$$

    This shows that redundancy significantly increases inherent availability.

#### 2.5 Importance of Inherent Availability

*   **Benchmarking:** It provides an ideal performance target for a system, independent of operational inefficiencies.
*   **Design Evaluation:** It helps compare different design alternatives based on their intrinsic reliability and maintainability characteristics.
*   **Foundation for Other Availability Measures:** Inherent availability is the starting point for calculating achieved and operational availability.
*   **Cost-Benefit Analysis:** Understanding inherent availability can inform decisions about investing in more reliable components or improving repair processes.

#### 2.6 Relationship to Reliability and Maintainability (CO1 & CO4)

*   **Reliability (Failure Modes):** The inherent availability is directly influenced by the failure modes of the system and its components. If components have many failure modes that lead to downtime, MTBF will be lower, decreasing inherent availability. Understanding these failure modes (CO1) is critical.
*   **Maintainability (Repair Processes):** The time taken to repair (MTTR) is a direct measure of maintainability. If a system is difficult to repair, has complex procedures, or requires specialized tools/parts, MTTR will be high, lowering inherent availability.
*   **The Interplay:** Inherent availability quantifies how well reliability and maintainability work together when external support is not a factor. A system can be highly reliable (high MTBF) but have low inherent availability if it's very difficult and time-consuming to repair (high MTTR). Conversely, a system that fails moderately often but is extremely quick to fix can have high inherent availability.

### 3. Examples

#### Example 1: A Single Machine Tool (Srinath, 2005)

A CNC machine tool is characterized by:
*   MTBF = 800 hours
*   MTTR = 16 hours

Calculate the inherent availability.

**Solution:**
$$A_I = \frac{MTBF}{MTBF + MTTR} = \frac{800}{800 + 16} = \frac{800}{816} \approx 0.9804$$

This implies the CNC machine tool is inherently available 98.04% of the time.

#### Example 2: Power Supply Unit in a Server

A server's power supply unit has an MTBF of 50,000 hours and an MTTR of 4 hours.

**Solution:**
$$A_I = \frac{50000}{50000 + 4} = \frac{50000}{50004} \approx 0.99992$$

This very high inherent availability is expected for critical components in servers, where downtime is costly.

#### Example 3: Redundant System

Consider a critical control system for a manufacturing plant. It uses two identical processing units in parallel. Each unit has:
*   MTBF = 2000 hours
*   MTTR = 10 hours

Calculate the inherent availability of a single unit and then the inherent availability of the parallel system.

**Solution:**

*   **Inherent Availability of a Single Unit:**
    $$A_{I, unit} = \frac{2000}{2000 + 10} = \frac{2000}{2010} \approx 0.9950$$

*   **Inherent Availability of the Parallel System:**
    $$A_{I, system} = 1 - (1 - A_{I, unit})^2$$
    $$A_{I, system} = 1 - (1 - 0.9950)^2 = 1 - (0.0050)^2 = 1 - 0.000025 = 0.999975$$

The parallel system offers a significantly higher inherent availability, demonstrating the benefit of redundancy for critical systems.

### 4. Practice Questions and Exercises

**Question 1:**
Define inherent availability and state the formula used to calculate it. What are the two key parameters it depends on?

**Answer:**
Inherent availability is the probability that a system is in an operable state when only internal factors (reliability and repair times) are considered. The formula is $A_I = \frac{MTBF}{MTBF + MTTR}$. It depends on Mean Time Between Failures (MTBF) and Mean Time To Repair (MTTR).

**Question 2:**
A component has an MTBF of 500 hours and an MTTR of 25 hours. Calculate its inherent availability. If a second identical component is added in series, what is the new inherent availability?

**Answer:**
*   **Inherent Availability of a single component:**
    $$A_I = \frac{500}{500 + 25} = \frac{500}{525} \approx 0.9524$$

*   **Inherent Availability of two components in series:**
    $$A_{I, system} = A_{I, component1} \times A_{I, component2} = 0.9524 \times 0.9524 \approx 0.9071$$
    (Assuming identical components)

**Question 3:**
A system consists of three identical components connected in parallel. Each component has an inherent availability of 0.99. Calculate the inherent availability of the system.

**Answer:**
$$A_{I, system} = 1 - (1 - A_{I, component})^n$$
$$A_{I, system} = 1 - (1 - 0.99)^3 = 1 - (0.01)^3 = 1 - 0.000001 = 0.999999$$

**Question 4:**
Explain the relationship between reliability, maintainability, and inherent availability, referencing CO1 and CO4.

**Answer:**
Reliability, measured by MTBF, indicates how often a system fails. Maintainability, measured by MTTR, indicates how quickly a failed system can be repaired. Inherent availability combines these two factors, showing the system's potential to be available based solely on its internal characteristics. A system with high reliability (long MTBF) and high maintainability (short MTTR) will have high inherent availability. Conversely, poor reliability or poor maintainability will reduce inherent availability. (Relates to CO1 by discussing failure modes affecting MTBF, and CO4 by explaining the direct relationship.)

### 5. Important Points to Remember

*   **Idealized Measure:** Inherent availability is an *idealized* measure, assuming perfect external support and immediate repair capabilities.
*   **Focus on Internal Factors:** It isolates the impact of component reliability and repair time on system availability.
*   **MTBF is Key to Reliability:** A higher MTBF signifies better reliability.
*   **MTTR is Key to Maintainability:** A lower MTTR signifies better maintainability.
*   **Redundancy Boosts Availability:** Parallel systems significantly increase inherent availability compared to series systems or single units.
*   **Foundation for More Complex Availability:** It serves as a baseline for understanding achieved and operational availability.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 6. Referencing Textbooks and Reference Books

This topic draws fundamental definitions and formulas from:

*   **Balagurusamy, Reliability Engineering:** Provides core definitions and examples for availability and its measures like inherent availability.
*   **Chandrupatla, Quality and Reliability in Engineering:** Offers similar foundational concepts and practical applications, reinforcing the MTBF/MTTR relationship.
*   **Srinath, Concepts of Reliability Engineering:** Contributes to the understanding of basic availability metrics and their calculation.
*   **Ebling, An introduction to Reliability and Maintainability Engineering:** Offers broader context on how inherent availability fits within the larger picture of R&M.
*   **Lewis, Introduction to Reliability Engineering:** Provides theoretical underpinnings and calculation methods.

By understanding inherent availability, you gain a crucial insight into the intrinsic performance potential of a system, setting the stage for analyzing more complex availability scenarios.