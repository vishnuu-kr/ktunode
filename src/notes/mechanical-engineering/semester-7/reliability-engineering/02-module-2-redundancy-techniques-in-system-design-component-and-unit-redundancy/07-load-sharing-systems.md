---
title: "Load sharing systems"
subject: "RELIABILITY ENGINEERING"
module: "Module 2: Redundancy Techniques in System design: Component and Unit redundancy"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463e53"
status: "completed"
scrapedAt: "2026-05-20T18:17:59.275Z"
---
# RELIABILITY ENGINEERING - Module 2: Redundancy Techniques in System Design: Component and Unit Redundancy

## Topic: Load Sharing Systems

### Learning Outcomes:

*   Understand the concept of load sharing in redundant systems.
*   Analyze the reliability of load sharing systems.
*   Differentiate between different types of load sharing configurations.
*   Evaluate the advantages and disadvantages of load sharing systems.
*   Apply reliability concepts to design and analyze load sharing systems.

### Introduction:

Load sharing systems are a crucial aspect of redundancy in reliability engineering. They aim to improve system reliability by distributing the workload among multiple identical components. When one component fails, the remaining components share the total load, preventing immediate system failure. This approach differs from standby redundancy where the backup component only takes over when the primary component fails.

### Key Concepts and Definitions:

*   **Redundancy:** The duplication of critical components or functions within a system with the intention of increasing system reliability.
*   **Load Sharing:** A configuration where multiple components operate simultaneously and share the total system load. If one component fails, its load is redistributed among the remaining operational components.
*   **System Reliability:** The probability that a system will perform its intended function for a specified period of time under given conditions.
*   **Component Reliability:** The probability that an individual component will perform its intended function for a specified period of time under given conditions.
*   **Failure Rate ($\lambda$):** The rate at which failures occur in a population of components. For a constant failure rate (exponential distribution), $R(t) = e^{-\lambda t}$, where $R(t)$ is the reliability at time $t$.
*   **Mean Time Between Failures (MTBF):** The average time between successive failures of a repairable system or component. For a constant failure rate, $MTBF = 1/\lambda$.
*   **Load:** The demand placed on a component or system. This can be in terms of power, data, processing capacity, etc.
*   **Derating:** Operating a component at a level below its maximum rating to increase its reliability and lifespan. In load sharing, derating is inherent as each component operates at a fraction of the total load.

### Types of Load Sharing Systems:

Load sharing can be implemented in various ways, primarily categorized by how the load is distributed and how the system behaves upon component failure.

#### 1. Simple Load Sharing (Equal Load Distribution):

In this configuration, the total system load is equally distributed among all operational components. When a component fails, the remaining components share the failed component's load.

**Assumptions:**

*   All components are identical and have the same failure rate ($\lambda$).
*   The load is equally distributed among the operating components.
*   When a component fails, its share of the load is instantaneously and equally redistributed among the remaining operational components.
*   Components are subjected to stress (e.g., load) and failure occurs when this stress exceeds a certain threshold.

**Reliability Analysis (Balagurusamy, Chapter on Redundancy):**

Let $N$ be the total number of components in the system.
Let $L$ be the total system load.
Initially, each component shares a load of $L/N$.

Consider a scenario where components fail if their individual load exceeds a certain limit, say $S$. If the system is designed such that $L/N < S$, then initially, no component will fail due to overload.

When a component fails, the remaining $N-1$ components share the load. The new load per component becomes $L/(N-1)$. If this new load $L/(N-1)$ is still less than the stress limit $S$, the system continues to operate.

The failure of the *system* occurs when the load on any remaining component exceeds its capacity $S$. This means the system fails if $L/(N-k) > S$ where $k$ is the number of failed components.

**Example:** A power supply system with four identical power modules $(N=4)$. The total required power is $L=100$ Watts. Initially, each module supplies $100/4 = 25$ Watts. Assume each module can handle up to 40 Watts.

*   **Scenario 1: One module fails.**
    *   Remaining modules: 3
    *   Load per module: $100/3 \approx 33.33$ Watts.
    *   Since $33.33 < 40$, the system continues to operate.
*   **Scenario 2: Two modules fail.**
    *   Remaining modules: 2
    *   Load per module: $100/2 = 50$ Watts.
    *   Since $50 > 40$, the remaining modules are overloaded, and the system fails.

Therefore, this system can tolerate at most one failure.

**Reliability of Simple Load Sharing Systems:**

The reliability analysis for load sharing systems can be complex as the failure rate of a component might increase with the applied load. If we assume components have a constant failure rate $\lambda_0$ when operating at a standard load, and the failure rate increases with load, then we need to consider the impact of load redistribution.

A common approach is to model the system using binomial distribution, assuming components fail independently. The system fails if the number of failed components exceeds the tolerable limit.

Let $R_c(t)$ be the reliability of a single component at time $t$.
Let $f_c(t)$ be the probability of a single component failing by time $t$ (i.e., $1 - R_c(t)$).

If a system has $N$ components and can tolerate $k$ failures (meaning it fails when $k+1$ components fail), the system reliability $R_s(t)$ can be approximated by the probability of having at least $N-k$ working components.

$R_s(t) = \sum_{i=N-k}^{N} \binom{N}{i} [R_c(t)]^i [1-R_c(t)]^{N-i}$

*However, this formula assumes that component reliability $R_c(t)$ is independent of the load sharing. In true load sharing, $R_c(t)$ is affected by the load.*

**More accurate analysis for load sharing often involves:**

*   **Stress-Strength Models:** Where component strength is a random variable, and failure occurs when stress exceeds strength. Load sharing directly impacts the stress experienced by each component.
*   **Accelerated Life Testing:** To understand how failure rates change with increased load.

**Reference:** Balagurusamy's text might discuss simpler cases or provide a framework for more detailed analysis. Chandrupatla and Srinath's books would likely delve deeper into the statistical modeling of load-dependent failure rates.

#### 2. Load Sharing with Increased Failure Rate due to Load:

In reality, as the load on a component increases, its failure rate often increases. This is known as **stress-induced failure** or **accelerated life**.

Let $\lambda(S)$ be the failure rate of a component when subjected to stress $S$.
If the initial load per component is $L/N$, the failure rate is $\lambda(L/N)$.
When one component fails, the load becomes $L/(N-1)$, and the failure rate of the remaining components increases to $\lambda(L/(N-1))$.

This makes the system reliability analysis more intricate as the failure probability of each component is no longer independent of the failure history of other components. The system's overall failure rate evolves over time.

**Example:** Consider a system with two identical components $(N=2)$ sharing a load $L$. Each component has a failure rate $\lambda(S)$ that is proportional to the stress $S$, i.e., $\lambda(S) = kS$, where $k$ is a constant.

*   Initial load per component: $S_0 = L/2$. Failure rate: $\lambda_0 = k(L/2)$.
*   Assume component 1 fails. The load on component 2 becomes $S_1 = L$. The new failure rate is $\lambda_1 = kL = 2\lambda_0$.

This implies that the system's reliability degrades faster once a failure occurs due to the increased stress on the remaining components.

#### 3. Load Sharing with Load Rebalancing or Derating:

To mitigate the increased failure rate due to load sharing, systems can be designed with intelligent load management:

*   **Load Rebalancing:** When a component fails, its load can be redistributed among the remaining components in a way that minimizes the maximum load on any single component.
*   **Derating:** The system might automatically derate all components (reduce their operating load) when a failure occurs to keep them within safe operating limits and prevent cascading failures.

**Example:** In the previous example ($N=2$, $L=100W$, $S=40W$ limit).
If a module fails, the load becomes $50W$ per module, exceeding the $40W$ limit.
A derating strategy might reduce the total system output to $80W$. Then, with two modules operating, the load becomes $40W$ each, which is within the limit. The system continues to operate at reduced capacity.

### Reliability Analysis of Load Sharing Systems (General Approach):

A general framework for analyzing load sharing systems, especially those with load-dependent failure rates, often involves:

1.  **Modeling Component Behavior:**
    *   Identify the failure mechanism (e.g., wear-out, overload).
    *   Determine the relationship between applied stress (load) and failure rate ($\lambda(S)$). This often requires experimental data or physics-of-failure models.
    *   Choose an appropriate lifetime distribution (e.g., exponential, Weibull) for components.

2.  **System Configuration and Load Distribution:**
    *   Define the number of components ($N$).
    *   Specify the total load ($L$).
    *   Describe the load sharing mechanism (e.g., equal sharing, proportional sharing).

3.  **Failure Criteria:**
    *   Define when a single component fails (e.g., stress exceeding strength).
    *   Define when the entire system fails (e.g., when the load on any component exceeds its capacity, or when a certain number of components fail).

4.  **Reliability Calculation:**
    *   **State-Space Models:** Represent the system by its states (number of working components). Transitions between states occur due to component failures. The rate of transition depends on the load on the working components.
    *   **Monte Carlo Simulation:** Simulate the lifetimes of individual components based on their load-dependent failure rates and observe the system's behavior over time. This is often used for complex systems where analytical solutions are difficult.

**Formula for Reliability of a Simple Load Sharing System (N components, can tolerate k failures):**

Let $p(t)$ be the probability that a single component fails by time $t$ under the *initial* load.
Let $R(t) = 1 - p(t)$ be the reliability of a single component under initial load.

If we assume that failure *causes* an increase in load on others but the component's intrinsic failure rate *at the time of its failure* is what matters for counting failures (this is a simplification), then the system reliability can be approximated by the probability of having at least $N-k$ working components.

System Reliability $R_s(t) = \sum_{i=N-k}^{N} \binom{N}{i} [R(t)]^i [1-R(t)]^{N-i}$

*This is the same formula as for $k+1$ parallel systems, but the interpretation of $R(t)$ is critical. In load sharing, $R(t)$ is the reliability of a component operating at a *reduced* load ($L/N$), and the overall system reliability might degrade faster than this formula suggests if the load-dependent failure rate is significant.*

**Important Note on Load-Dependent Failure:** The term $[R(t)]^i [1-R(t)]^{N-i}$ assumes that the probability of failure $1-R(t)$ for each component is the same and independent. However, in load sharing, if one component fails, the stress on others increases, potentially changing their probability of failure. Therefore, this formula is an approximation.

### Advantages of Load Sharing Systems:

*   **Improved Reliability:** By distributing the load, the stress on each component is reduced, leading to longer component life and higher system reliability compared to a single component.
*   **Graceful Degradation:** The system can often continue to operate, albeit at reduced capacity, even after component failures. This "graceful degradation" is a significant advantage over systems that fail completely upon the first component failure.
*   **Increased Efficiency/Performance:** Components operate at lower stress levels, which can sometimes lead to better operational efficiency.
*   **Reduced Cost (Potentially):** Using multiple lower-rated, less expensive components might be more cost-effective than using a single high-capacity, highly reliable component.

### Disadvantages of Load Sharing Systems:

*   **Complexity:** Designing and managing load balancing and redistribution mechanisms can add complexity to the system.
*   **Increased Failure Rate with Load:** If the system cannot effectively manage the increased load on remaining components after a failure, the failure rate of these components will increase, leading to faster system degradation.
*   **Potential for Cascading Failures:** If the load redistribution is not managed properly, overloading can lead to a chain reaction of failures.
*   **Reduced Overall Capacity:** In a degraded state (after failures), the system's total capacity is reduced.

### Application Examples:

*   **Computer Server Farms:** Multiple servers work together to handle user requests. If one server fails, others take over its load.
*   **Power Supplies:** Multiple power modules in parallel, sharing the total power demand.
*   **Robotic Arms:** Multiple actuators or motors working in concert to move a heavy object, sharing the load.
*   **Data Storage Systems (RAID):** Redundant Array of Independent Disks (RAID) configurations often involve distributing data and parity information across multiple drives. While not purely load sharing in the operational sense, the principle of distributed load and fault tolerance is similar.

### Relation to Course Outcomes:

*   **CO1: Explain various modes of failure and basic concepts of reliability (Knowledge Level: K2)**
    *   Load sharing directly relates to failure modes induced by overload and stress. Understanding how increased load affects component failure rates (e.g., derating, stress-strength models) is key. Concepts like MTBF, failure rate, and system reliability are applied directly.
*   **CO2: Identify methods for reliability prediction according to system characteristics (Knowledge Level: K3)**
    *   Analyzing load sharing systems requires predicting reliability based on the system's architecture, component failure characteristics (especially load-dependent ones), and the load distribution strategy. This involves using statistical models and potentially simulation.
*   **CO3: Develop ability in formulating suitable strategies to enhance reliability of a manufacturing system. (Knowledge Level: K3)**
    *   Designing a manufacturing system using load sharing principles (e.g., redundant machinery that shares the production load) is a direct application of enhancing reliability. Strategies might include choosing the number of redundant units, defining load sharing rules, and implementing derating mechanisms.
*   **CO4: Explain relation between reliability, availability and maintainability (Knowledge Level: K2)**
    *   Load sharing systems, especially those with graceful degradation, impact availability. If failed components can be repaired and reintroduced, the system's Mean Time To Repair (MTTR) and Mean Time Between Failures (MTBF) are affected by the load sharing strategy and the load-dependent failure rates.

### Important Points to Remember:

*   Load sharing is about simultaneous operation and shared workload, unlike standby redundancy.
*   The primary benefit of load sharing is reduced stress on individual components, leading to improved reliability.
*   The major challenge in load sharing is managing the increased load on remaining components after a failure, which can accelerate their failure.
*   Derating and intelligent load rebalancing are crucial for the effective implementation of load sharing systems.
*   Reliability analysis becomes more complex when component failure rates are load-dependent.

### Practice Questions:

1.  **Question:** Consider a system with 3 identical components in a load sharing configuration. The total system load is 150 units. Each component can withstand a maximum load of 70 units. If the failure rate of a component is $\lambda_0$ when operating at 50 units of load, and it increases linearly with load such that the failure rate at 70 units is $2\lambda_0$.
    a.  What is the initial load on each component?
    b.  What is the load on each component if one component fails? Will the system continue to operate?
    c.  What is the load on each component if two components fail? Will the system continue to operate?
    d.  What is the maximum number of failures the system can tolerate before failing?
    e.  How does the failure rate of the remaining components change after a failure?

    **Answer:**
    a.  Initial load per component = $150 / 3 = 50$ units.
    b.  If one component fails, remaining 2 components share the load: $150 / 2 = 75$ units. Since $75 > 70$, the system will fail due to overload.
    c.  If two components fail, remaining 1 component shares the load: $150 / 1 = 150$ units. This far exceeds the 70-unit limit, and the system would have already failed in step b.
    d.  The system can tolerate **zero** failures in this specific scenario because the first failure leads to an overload condition on the remaining components. (This highlights the importance of designing for sufficient capacity).

    Let's re-evaluate with a slightly different capacity to illustrate tolerance:
    Assume each component can withstand a maximum load of 80 units.
    a.  Initial load: 50 units. (OK, $50 < 80$)
    b.  One failure: Load = 75 units. (OK, $75 < 80$) The failure rate of remaining components increases to the failure rate corresponding to 75 units.
    c.  Two failures: Load = 150 units. (FAIL, $150 > 80$).
    d.  The system can tolerate **one** failure before failing.

2.  **Question:** Compare and contrast load sharing redundancy with standby redundancy in terms of their operational principles and reliability benefits.

    **Answer:**
    *   **Operational Principle:**
        *   **Load Sharing:** All redundant components operate simultaneously, sharing the system load.
        *   **Standby:** Only one component (primary) operates at a time. Backup components are inactive until the primary fails.
    *   **Reliability Benefits:**
        *   **Load Sharing:** Reduces stress on individual components, improving their individual reliability and lifespan. Can offer graceful degradation.
        *   **Standby:** Prevents failure as long as at least one component is operational. Simpler to manage load.
    *   **Key Differences:** Load sharing inherently operates components at reduced stress, potentially increasing their inherent reliability. Standby provides a "hot" or "cold" spare that takes over, offering potentially higher system uptime if the switchover is instantaneous and reliable. However, standby systems can fail during the switchover process. Load sharing can lead to faster degradation if not managed well due to increased stress post-failure.

3.  **Question:** Explain the concept of "graceful degradation" in the context of load sharing systems and why it is an important reliability characteristic.

    **Answer:** Graceful degradation refers to the ability of a system to continue functioning, albeit at a reduced performance level, even after some of its components have failed. In load sharing systems, when a component fails, its load is redistributed. If the remaining components can still handle the redistributed load (even if it means operating at a higher stress than initially), the system continues to operate. This is important because it allows for continued partial operation, providing essential services or allowing for controlled shutdown, rather than an abrupt and total system failure. This enhances system availability and allows for maintenance to be scheduled rather than being an emergency response.

---
This comprehensive set of notes covers the fundamental aspects of load sharing systems as per the provided learning outcomes and references. Remember to refer to the specified textbooks for more in-depth mathematical derivations and specific modeling techniques relevant to different types of load-dependent failure rates.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
