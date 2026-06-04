---
title: "Mixed redundancy"
subject: "RELIABILITY ENGINEERING"
module: "Module 2: Redundancy Techniques in System design: Component and Unit redundancy"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463e4f"
status: "completed"
scrapedAt: "2026-05-20T18:17:56.472Z"
---
# Reliability Engineering: Module 2 - Redundancy Techniques in System Design: Component and Unit Redundancy

## Topic: Mixed Redundancy

This topic delves into a more sophisticated approach to enhancing system reliability by combining different types of redundancy strategies.

### 1. Introduction to Mixed Redundancy

Mixed redundancy is a system design strategy where different levels of redundancy are applied to various subsystems or components within a larger system. Instead of applying a uniform redundancy scheme (e.g., pure series or pure parallel) throughout the entire system, mixed redundancy selectively employs simpler or more complex redundancy techniques where they are most beneficial or cost-effective.

**Key Concept:** Optimization of reliability and cost by strategically allocating redundancy.

**Why Mixed Redundancy?**

*   **Cost-Effectiveness:** Applying full redundancy (e.g., triple modular redundancy) to every component can be prohibitively expensive. Mixed redundancy allows for a more targeted approach.
*   **Performance Requirements:** Different subsystems might have varying criticality and performance requirements. Mixed redundancy can address these disparities.
*   **Complexity Management:** Some subsystems might be inherently more reliable or easier to protect with simpler redundancy.

**Relationship to Course Outcomes:**

*   **CO3:** Develop ability in formulating suitable strategies to enhance reliability of a manufacturing system. (Mixed redundancy is a core strategy for this).
*   **CO2:** Identify methods for reliability prediction according to system characteristics. (Predicting the reliability of a mixed redundant system requires understanding the reliability of its individual redundant components/subsystems).

### 2. Types of Redundancy within Mixed Redundancy

Mixed redundancy leverages the foundational redundancy techniques discussed previously:

*   **Series Redundancy:** Where if one component fails, the entire system fails. In a mixed system, a subsystem with series redundancy might be part of a larger redundant block.
*   **Parallel Redundancy (k-out-of-n):** Where at least 'k' out of 'n' components must function for the system to operate. This is a crucial building block for mixed redundancy.
    *   **Simple Parallel (1-out-of-2):** Two components, at least one must work.
    *   **Triple Modular Redundancy (TMR) (2-out-of-3):** Three components, at least two must work.
*   **Standby Redundancy:** A backup component is activated only when the primary fails. This can be cold, warm, or hot standby.

**Key Concepts & Definitions:**

*   **Subsystem:** A self-contained part of a larger system that performs a specific function.
*   **System Structure Function:** A mathematical representation of how the system's components are interconnected and how their individual states (working/failed) determine the system's overall state. For mixed redundancy, the structure function becomes more complex, often a combination of simpler structure functions.

### 3. Structuring Mixed Redundancy

Mixed redundancy typically involves designing systems with subsystems that themselves employ different redundancy levels.

**Example Scenarios:**

**Scenario 1: A Computer System with Critical and Non-Critical Components**

Consider a computer system comprising:

*   **Central Processing Unit (CPU):** Highly critical, requires high availability.
*   **Memory (RAM):** Critical, but perhaps less so than the CPU.
*   **Hard Drive:** Important for data storage, but perhaps data can be lost temporarily if the system fails and restarts.
*   **Power Supply Unit (PSU):** Critical for overall operation.

**Mixed Redundancy Application:**

1.  **CPU:** Employ **Triple Modular Redundancy (TMR)** for maximum availability. If one CPU fails, the other two can continue operating, and a voting mechanism can determine the correct output. (This is a 2-out-of-3 parallel system).
2.  **Memory:** Employ **Dual Redundancy (1-out-of-2 parallel)**. If one memory module fails, the other can take over.
3.  **Hard Drive:** Employ a **RAID 1 (mirroring)** configuration, which is a 1-out-of-2 parallel system. This ensures data redundancy if one drive fails.
4.  **Power Supply Unit:** Employ **Redundant PSUs with automatic switchover (standby redundancy)**. One PSU operates, and a second one is on standby, ready to take over if the primary fails.

In this example, the overall computer system is a **series system** of these redundant subsystems. The failure of any one of these redundant subsystems (e.g., the TMR CPU block failing, or both PSUs failing) will cause the entire computer system to fail.

**Reliability of the Computer System:**

Let $R_{CPU}$, $R_{RAM}$, $R_{HDD}$, and $R_{PSU}$ be the reliabilities of the CPU subsystem, Memory subsystem, Hard Drive subsystem, and PSU subsystem, respectively.

*   **CPU Subsystem (TMR):** $R_{CPU} = P(\text{at least 2 out of 3 working})$
    If component reliability is $p$, then $R_{CPU} = \binom{3}{2}p^2(1-p)^1 + \binom{3}{3}p^3(1-p)^0 = 3p^2 - 2p^3$.
*   **Memory Subsystem (1-out-of-2 parallel):** $R_{RAM} = P(\text{at least 1 out of 2 working})$
    If component reliability is $p$, then $R_{RAM} = 1 - P(\text{both fail}) = 1 - (1-p)^2 = 2p - p^2$.
*   **Hard Drive Subsystem (RAID 1 - 1-out-of-2 parallel):** $R_{HDD} = 1 - (1-p)^2 = 2p - p^2$.
*   **PSU Subsystem (Standby):** The reliability of a standby system depends on the failure rate of the primary and the switchover time. Assuming a simple model where the standby is activated upon primary failure, and the standby itself has a reliability $p_{standby}$, the reliability can be approximated. For hot standby with failure rate $\lambda_p$ for primary and $\lambda_s$ for standby, the reliability is $R_{PSU} = e^{-\lambda_p t} + e^{-\lambda_p t}(1-e^{-\lambda_s t})$ for time t.

The overall system reliability $R_{System}$ would be the product of the reliabilities of these series subsystems:
$R_{System} = R_{CPU} \times R_{RAM} \times R_{HDD} \times R_{PSU}$

**Scenario 2: A Fighter Jet Control System**

A fighter jet's control system might have different redundancy levels for different flight control surfaces.

*   **Primary Flight Control Actuators:** Triple Modular Redundancy (TMR) for critical commands like aileron control.
*   **Secondary Control Systems (e.g., flaps):** Dual Redundancy (1-out-of-2 parallel) might be sufficient.
*   **Navigation System:** Perhaps a hot standby system.

**Key Concept:** System decomposition into subsystems, each with its own redundancy strategy.

### 4. Reliability Analysis of Mixed Redundant Systems

Analyzing mixed redundant systems requires a hierarchical approach.

**Steps:**

1.  **Decompose the System:** Break down the overall system into its major subsystems.
2.  **Identify Redundancy within Subsystems:** For each subsystem, determine the specific redundancy technique being used (series, parallel, k-out-of-n, standby).
3.  **Calculate Subsystem Reliability:** Use the appropriate reliability formulas for each subsystem's redundancy type. This often involves assuming component reliabilities ($p$) or failure rates ($\lambda$).
    *   **Balagurusamy (Chapter 6 - Redundancy Techniques):** Provides formulas for various parallel and standby configurations.
    *   **Chandrupatla & Chandrupatla (Chapter 5 - System Reliability):** Discusses system reliability modeling including redundant systems.
    *   **Srinath (Chapter 3 - Reliability of Systems):** Offers detailed analysis of series, parallel, and complex systems.
4.  **Determine Overall System Structure:** Understand how the subsystems are connected (typically in series for reliability calculations). If subsystem A must work AND subsystem B must work, they are in series.
5.  **Calculate Overall System Reliability:** Multiply the reliabilities of the subsystems if they are in series. If they are in parallel, the calculation becomes more complex, involving probabilities of each subsystem functioning.

**Example Calculation (Continuing Scenario 1 - Computer System):**

Assume:
*   Individual component reliability $p = 0.95$
*   CPU component reliability $p_{cpu} = 0.98$
*   Memory component reliability $p_{mem} = 0.97$
*   HDD component reliability $p_{hdd} = 0.96$
*   PSU reliability $R_{PSU} = 0.99$ (simplifying standby analysis for this example)

*   **CPU Reliability (TMR):**
    $R_{CPU} = 3p_{cpu}^2 - 2p_{cpu}^3 = 3(0.98)^2 - 2(0.98)^3 \approx 3(0.9604) - 2(0.9412) \approx 2.8812 - 1.8824 \approx 0.9988$

*   **Memory Reliability (1-out-of-2 parallel):**
    $R_{RAM} = 1 - (1-p_{mem})^2 = 1 - (1-0.97)^2 = 1 - (0.03)^2 = 1 - 0.0009 = 0.9991$

*   **HDD Reliability (1-out-of-2 parallel):**
    $R_{HDD} = 1 - (1-p_{hdd})^2 = 1 - (1-0.96)^2 = 1 - (0.04)^2 = 1 - 0.0016 = 0.9984$

*   **PSU Reliability:** $R_{PSU} = 0.99$ (given)

*   **Overall System Reliability:**
    $R_{System} = R_{CPU} \times R_{RAM} \times R_{HDD} \times R_{PSU}$
    $R_{System} = 0.9988 \times 0.9991 \times 0.9984 \times 0.99 \approx 0.9863$

**Important Point to Remember:** The reliability of a series system is always less than the reliability of any of its individual components.

### 5. Design Considerations for Mixed Redundancy

*   **Failure Modes Analysis:** Understanding how each component and subsystem can fail is crucial for selecting the appropriate redundancy.
*   **Voting/Switchover Mechanisms:** For parallel and standby redundancy, reliable voting (for TMR) or switchover mechanisms are essential. The reliability of these mechanisms must be factored in.
*   **Maintainability:** Highly redundant systems can be complex to maintain. Maintainability design should be integrated with reliability design.
*   **Cost-Benefit Analysis:** The added reliability gained by implementing a particular redundancy scheme must be weighed against its cost (hardware, complexity, space, power).
*   **Error Detection and Correction:** For systems with high data integrity requirements, mixed redundancy can be combined with ECC (Error Correction Code) techniques.

**Reference Books' Contributions:**

*   **Ebling (Chapter 7 - Fault Tolerant Systems):** Discusses fault tolerance architectures, which are closely related to mixed redundancy.
*   **Naikan (Chapter 7 - Reliability of Systems):** Covers advanced reliability modeling and analysis techniques applicable to complex redundant systems.
*   **Lewis (Chapter 5 - System Reliability):** Explains reliability modeling of systems with repair, which can be relevant if redundant components are repairable.
*   **Barlow (Chapter 5 - Coherent Systems):** Provides foundational mathematical models for reliability of complex systems, including those with various configurations.

### 6. Advantages and Disadvantages of Mixed Redundancy

**Advantages:**

*   **Tailored Reliability:** Can achieve specific reliability targets for different parts of the system.
*   **Cost Optimization:** Avoids over-redundancy where it's not needed.
*   **Performance Balance:** Allows for balancing reliability with other system performance metrics.
*   **Flexibility:** Can be adapted to a wide range of complex systems.

**Disadvantages:**

*   **Increased Design Complexity:** Requires more detailed analysis and design effort.
*   **Analysis Difficulty:** Reliability prediction can be more challenging than for simple systems.
*   **Integration Challenges:** Ensuring seamless operation between subsystems with different redundancy levels can be tricky.
*   **Potentially Higher Total Cost:** Even with optimization, implementing multiple redundancy levels can still be expensive.

### 7. Practice Questions

**Question 1:**

A system consists of three subsystems connected in series.
*   Subsystem A is a 2-out-of-3 parallel redundant system.
*   Subsystem B is a simple 1-out-of-2 parallel redundant system.
*   Subsystem C is a single, non-redundant component.

If the reliability of individual components in Subsystem A is 0.95, the reliability of individual components in Subsystem B is 0.98, and the reliability of the component in Subsystem C is 0.99, calculate the reliability of the overall system.

**Answer 1:**

*   **Reliability of Subsystem A (2-out-of-3):**
    $R_A = \binom{3}{2}p_A^2(1-p_A)^1 + \binom{3}{3}p_A^3(1-p_A)^0$
    $R_A = 3(0.95)^2(0.05)^1 + 1(0.95)^3(0.05)^0$
    $R_A = 3(0.9025)(0.05) + 1(0.857375)$
    $R_A = 0.135375 + 0.857375 = 0.99275$

*   **Reliability of Subsystem B (1-out-of-2):**
    $R_B = 1 - (1-p_B)^2$
    $R_B = 1 - (1-0.98)^2$
    $R_B = 1 - (0.02)^2$
    $R_B = 1 - 0.0004 = 0.9996$

*   **Reliability of Subsystem C (single component):**
    $R_C = p_C = 0.99$

*   **Overall System Reliability (Series connection):**
    $R_{System} = R_A \times R_B \times R_C$
    $R_{System} = 0.99275 \times 0.9996 \times 0.99$
    $R_{System} \approx 0.9824$

**Question 2:**

Explain with a simple example how mixed redundancy can be applied in an automotive system to improve reliability. Relate your example to CO3 (formulating strategies to enhance reliability).

**Answer 2:**

**Example: Automotive Braking System**

A modern automotive braking system has critical functions for safety. Mixed redundancy can be applied:

1.  **Primary Hydraulic Brake System:** This is the main system. Individual brake lines and calipers are typically non-redundant (series). However, the **dual-circuit braking system** itself is a form of parallel redundancy. If one circuit fails (e.g., a leak in one line), the other circuit can still provide partial braking capability. This is a 1-out-of-2 parallel configuration at the circuit level.

2.  **Anti-lock Braking System (ABS) Control Module:** This is a critical electronic component. To enhance its reliability, the ABS module could employ **hot standby redundancy**. A secondary identical module monitors the primary. If the primary module fails, the secondary module immediately takes over control of the braking distribution. This is a form of standby redundancy.

3.  **Wheel Speed Sensors:** While critical, some systems might have redundancy at a higher level. For instance, if one speed sensor fails, the ABS might disable itself but still allow the primary hydraulic braking to function. Alternatively, for extreme safety, a 2-out-of-4 configuration might be used where at least two out of the four wheel speed sensors need to function for ABS operation.

**CO3 Alignment:**

This example demonstrates formulating a strategy to enhance reliability:

*   **Identify Critical Functions:** Braking and ABS control are safety-critical.
*   **Apply Appropriate Redundancy:** Dual-circuit for hydraulics (parallel), hot standby for ABS module (standby), and potentially k-out-of-n for sensors.
*   **System Integration:** The entire system is designed as a series of these redundant subsystems. The failure of the entire hydraulic system (both circuits) or a complete failure of the ABS takeover mechanism would lead to system failure.

By combining these techniques, the automotive manufacturer enhances the overall reliability and safety of the braking system, addressing different failure possibilities and criticality levels.

### 8. Important Points to Remember

*   Mixed redundancy involves applying different redundancy levels to different parts of a system.
*   It is a strategy to optimize reliability and cost.
*   Analysis typically involves calculating subsystem reliabilities and then combining them based on the overall system structure (often series).
*   Reliability of voting/switchover mechanisms is critical and must be considered.
*   Design complexity increases with mixed redundancy.
*   It's a practical approach for complex systems where uniform redundancy is not feasible or optimal.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
