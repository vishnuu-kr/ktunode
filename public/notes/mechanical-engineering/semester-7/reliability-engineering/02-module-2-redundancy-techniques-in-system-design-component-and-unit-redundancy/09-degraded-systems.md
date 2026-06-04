---
title: "Degraded systems."
subject: "RELIABILITY ENGINEERING"
module: "Module 2: Redundancy Techniques in System design: Component and Unit redundancy"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463e55"
status: "completed"
scrapedAt: "2026-05-20T18:18:00.726Z"
---
# Reliability Engineering: Module 2 - Redundancy Techniques in System Design: Component and Unit Redundancy

## Topic: Degraded Systems

### Learning Outcomes:

*   Understand the concept of degraded states in a system.
*   Analyze the reliability implications of systems operating in degraded modes.
*   Differentiate between complete system failure and partial system functionality.
*   Explore techniques for modeling and analyzing degraded systems.

### 1. Introduction to Degraded Systems

**Key Concept:** A degraded system is a system that is still functioning, but not at its full intended performance level or capability. This is a consequence of one or more components or subsystems experiencing partial failure or operating outside their normal parameters, but not to the extent of causing a complete system shutdown.

**1.1 Definition:**
A system is said to be in a **degraded state** when it continues to operate, but with reduced performance, capacity, functionality, or efficiency. This contrasts with a **failed state**, where the system is completely inoperable.

**1.2 Importance in Reliability Engineering:**
Understanding degraded systems is crucial because:
*   **Availability:** Degraded states often represent periods where a system is available, but its output or utility is diminished. This impacts overall system availability and usefulness.
*   **Maintenance and Repair:** Identifying and managing degraded states can inform proactive maintenance strategies, preventing catastrophic failures.
*   **Safety:** In critical systems (e.g., aerospace, medical), even partial degradation can have severe safety implications.
*   **Economic Impact:** Reduced performance can lead to lower productivity, increased operational costs, or customer dissatisfaction.

**1.3 Distinction from Complete Failure:**
*   **Complete Failure:** The system ceases to perform its intended function entirely. This is often represented by a binary state (operational or failed).
*   **Degraded State:** The system continues to perform some functions, albeit at a reduced level. This introduces a spectrum of operational states beyond just "working" or "failed."

**Example:**
*   **A Multi-engine Aircraft:** If one engine fails, the aircraft can still fly (degraded state) but with reduced speed, altitude, and range compared to normal operation with all engines. If all engines fail, it's a complete failure.
*   **A Computer Server:** If a RAM module fails, the server might still operate but with slower performance and limited capacity (degraded state). If the CPU fails, it might be completely inoperable (complete failure).

**(Referenced from Balagurusamy, 17th Reprint, 2017 - While Balagurusamy might focus more on binary states, understanding degraded modes is a natural extension when discussing system reliability beyond simple failure events.)**

### 2. Modes of Operation in Degraded Systems

**Key Concept:** Degraded systems can exhibit various operational modes depending on which components are affected and the extent of their degradation.

**2.1 Types of Degradation:**
*   **Performance Degradation:** Reduced speed, throughput, efficiency, accuracy, or output quality.
    *   *Example:* A pump operating at lower pressure.
*   **Functional Degradation:** Loss of specific, non-critical functions.
    *   *Example:* A car with a non-functional air conditioning system but still drivable.
*   **Capacity Degradation:** Reduced ability to handle load or process data.
    *   *Example:* A bridge with weight restrictions due to structural damage.

**2.2 States of a System:**
Instead of a simple binary (Operational/Failed), a system can be modeled with multiple states:
*   **State 1: Fully Operational:** All components functioning perfectly.
*   **State 2: Degraded State 1:** Minor component degradation, slight performance loss.
*   **State 3: Degraded State 2:** More significant component degradation, noticeable performance loss.
*   ...
*   **State N: Failed State:** Complete system inoperability.

**(Referenced from Chandrupatla, 2009 - Chandrupatla's focus on quality and reliability often touches upon performance metrics which are directly impacted by degradation.)**

### 3. Analyzing Degraded Systems

**Key Concept:** Mathematical models and techniques are used to quantify the reliability and availability of systems operating in degraded states.

**3.1 State Transition Models:**
*   **Markov Models:** Particularly useful for systems with time-dependent failure and repair rates. States can represent different levels of system functionality. Transitions occur between these states.
    *   **Concept:** The probability of transitioning to a future state depends only on the current state, not on how it reached that state.
    *   **Application:** Modeling the movement of a system between fully operational, various degraded states, and a failed state.
*   **Reliability Block Diagrams (RBDs) with Weighted Blocks:** While standard RBDs assume binary states, extensions can represent blocks with probabilities of operating at different performance levels.

**(Referenced from Srinath, 4th Edition, 2005 - Srinath's foundational text would cover Markov models extensively for system reliability analysis.)**

**3.2 Reliability Metrics for Degraded Systems:**
*   **Availability (Degraded):** The probability that the system is in *any* operational state (fully or partially functional) at a given time.
*   **Reliability (Degraded):** The probability that the system will not reach the *failed* state within a specified time, considering it can pass through degraded states.
*   **Mean Time Between Failures (MTBF) to Complete Failure:** Time from operational start until complete failure, passing through any states.
*   **Mean Time Between Transitions to Degraded States:** Average time spent in a particular operational state before transitioning to a worse state (degraded or failed).

**3.3 Modeling Approaches:**
*   **Fault Tree Analysis (FTA):** Can be adapted to include "degraded" gate logic or sub-trees representing partial failures.
*   **System Structure Functions:** Can be extended to non-binary outcomes representing different performance levels.
*   **Monte Carlo Simulation:** A powerful technique to simulate system behavior over time, including component degradations and transitions to various states. This is especially useful for complex systems where analytical solutions are difficult.

**(Referenced from Ebling, 12th Edition, 2004 - Ebling's practical approach often involves simulation for complex reliability scenarios.)**

### 4. Redundancy Techniques and Degraded Systems

**Key Concept:** Redundancy plays a significant role in managing degraded states.

**4.1 How Redundancy Affects Degraded States:**
*   **Standby Redundancy:** When a primary component fails, a standby component takes over. This can prevent a complete system failure but might initially lead to a degraded state if the switchover is not instantaneous or if the standby component is not identical.
*   **Parallel Redundancy:** In a parallel system, if one component fails, the system might continue to operate at a reduced capacity (degraded state) until all parallel components fail.
    *   *Example:* A series of lights where one burns out – the system (all lights) still functions but with reduced illumination.

**4.2 Types of Redundancy in Degraded Systems:**
*   **Active Redundancy:** All redundant components are active simultaneously. If one component degrades, others can often compensate, thus masking the degradation or allowing the system to continue at a lower performance level.
    *   *Example:* Multiple processors in a parallel computing system. If one processor slows down, the overall computation might slow, but it doesn't stop.
*   **Standby Redundancy (with monitoring):** A standby unit monitors the primary. If the primary degrades beyond a threshold, the standby activates. This can transition the system from a degraded state to a normal state if the standby is fully functional, or maintain a degraded state if the standby also has limitations.

**(Referenced from Lewis, 2nd Edition, 2012 - Lewis's work often bridges the gap between basic reliability and practical system design, including how redundancy influences operational states.)**

### 5. Case Studies and Examples

**5.1 Aerospace Systems:**
*   **Aircraft Hydraulic Systems:** Often have redundant pumps and multiple hydraulic lines. If one pump fails, a backup can maintain some level of hydraulic pressure, allowing for degraded flight control. Complete failure of all hydraulic systems would be catastrophic.
*   **Spacecraft Power Systems:** Multiple solar arrays and battery banks. Degradation of one array (e.g., due to micrometeoroid impact) reduces total power, but other arrays and batteries can maintain essential functions.

**5.2 Industrial Control Systems:**
*   **Distributed Control Systems (DCS):** Redundant controllers and communication networks. If one controller fails, a hot-standby controller takes over. If the network experiences packet loss, the system might operate with reduced polling rates or fewer control loops active.

**5.3 Power Generation:**
*   **Turbine Generators:** Often have multiple units in a power plant. If one turbine's efficiency drops (degraded state), the plant can still generate power, but at a lower total output.

**(Referenced from Naikan, 1st Edition, 2008 - Naikan's focus on reliability engineering in practice would include numerous examples of systems where degradation is a key concern.)**

### 6. Key Points to Remember

*   **Degraded systems are not failed systems.** They operate with reduced capability.
*   Understanding degraded states is crucial for accurate availability and reliability assessment.
*   **Markov models** are powerful tools for analyzing systems with multiple operational states.
*   Redundancy techniques (active and standby) can mitigate the impact of component degradation and prevent complete system failure.
*   Different types of degradation (performance, functional, capacity) have varying impacts on system utility and safety.

### 7. Practice Questions and Exercises

**Question 1:**
Define a degraded system. Provide an example of a system that can operate in multiple degraded states.

**Answer 1:**
A degraded system is one that continues to operate but with reduced performance, capacity, or functionality, rather than being completely inoperable.
*   **Example:** A car with a faulty catalytic converter might still be drivable (degraded state) but with reduced engine power, poorer fuel efficiency, and increased emissions. A complete failure would be if the engine seizes entirely.

**Question 2:**
How does the concept of **availability** differ when considering systems that can enter degraded states compared to systems that are only either fully operational or completely failed?

**Answer 2:**
For a simple binary system (operational/failed), availability is the probability of being in the operational state. For a system with degraded states, availability is the probability of being in *any* operational state (fully functional or any of the degraded states). This means a system in a degraded state still contributes to availability, even if its utility is lower.

**Question 3:**
Consider a system with two identical components in parallel, each with a reliability function $R(t) = e^{-\lambda t}$. If one component degrades such that its failure rate doubles ($\lambda' = 2\lambda$), while the other remains at $\lambda$, what is the reliability of the system to perform at *least one* component's original capability? (Assume the system is degraded if only one component is functioning at its original rate).

**Answer 3:**
Let $C_1$ be the component with failure rate $\lambda$, and $C_2$ be the component with failure rate $\lambda' = 2\lambda$.
The system is considered to have degraded performance if $C_1$ fails but $C_2$ is still functioning. The system is completely failed if both $C_1$ and $C_2$ fail.
The system performs at *at least one* component's original capability if at least one component is functioning.
Reliability of $C_1$ functioning: $R_1(t) = e^{-\lambda t}$
Reliability of $C_2$ functioning: $R_2(t) = e^{-2\lambda t}$
The system fails completely when both fail. The probability of both failing is $1 - R_1(t)$ and $1 - R_2(t)$ respectively.
The probability that the system is *not* completely failed is the probability that $C_1$ is working OR $C_2$ is working (or both).
$R_{system}(t) = P(C_1 \text{ working or } C_2 \text{ working})$
Using the principle of inclusion-exclusion:
$R_{system}(t) = P(C_1 \text{ working}) + P(C_2 \text{ working}) - P(C_1 \text{ working AND } C_2 \text{ working})$
Since component failures are assumed independent:
$R_{system}(t) = R_1(t) + R_2(t) - R_1(t) R_2(t)$
$R_{system}(t) = e^{-\lambda t} + e^{-2\lambda t} - (e^{-\lambda t} \times e^{-2\lambda t})$
$R_{system}(t) = e^{-\lambda t} + e^{-2\lambda t} - e^{-3\lambda t}$

This $R_{system}(t)$ represents the probability that at least one component is functioning, which means the system is either fully functional (both working) or partially functional (one working).

**Question 4 (Conceptual):**
Explain how standby redundancy with a "hot spare" could lead to a temporary degraded state during a switchover.

**Answer 4:**
In a hot-standby redundancy system, the spare component is active and ready. However, during a failure of the primary component, there is usually a non-zero time required for:
1.  **Detection:** Sensing that the primary component has failed or degraded beyond acceptable limits.
2.  **Switchover:** The mechanism that disconnects the failed component and connects the standby component.
During this detection and switchover period, the system might be operating without the primary component and before the standby is fully integrated, leading to a brief period of degraded performance or even momentary interruption before the standby takes over.

### 8. Alignment with Course Outcomes

*   **CO1 (Modes of Failure):** Understanding degraded systems directly relates to understanding modes of failure beyond simple catastrophic failure, acknowledging partial operational states.
*   **CO2 (Reliability Prediction):** Analyzing degraded systems requires predicting reliability not just for binary states but for a continuum or discrete set of operational states, often using methods like Markov chains.
*   **CO3 (Enhancing Reliability):** Strategies to enhance reliability often involve designing systems to gracefully degrade rather than fail outright, and redundancy is a key technique for this.
*   **CO4 (Reliability, Availability, Maintainability):** Degraded states significantly impact system availability and the strategies for maintaining availability. How a system degrades and how it can be repaired or brought back to full functionality are core to maintainability.

This detailed note covers the concept of degraded systems, their analysis, and their relationship with redundancy techniques, drawing upon the principles and methodologies discussed in the provided textbooks and reference materials.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
