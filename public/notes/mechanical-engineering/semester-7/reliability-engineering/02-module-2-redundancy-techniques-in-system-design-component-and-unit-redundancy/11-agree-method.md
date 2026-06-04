---
title: "AGREE method."
subject: "RELIABILITY ENGINEERING"
module: "Module 2: Redundancy Techniques in System design: Component and Unit redundancy"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463e57"
status: "completed"
scrapedAt: "2026-05-20T18:18:02.576Z"
---
# Reliability Engineering: Module 2 - Redundancy Techniques in System Design

## Topic: AGREE Method

### 1. Introduction and Overview

The AGREE (Advisory Group on the Reliability of Electronic Equipment) method is a systematic approach to **allocating reliability requirements** to lower-level components within a complex system. Developed in the mid-20th century by the US Department of Defense, it's particularly useful for **electronic systems** but its principles can be adapted. AGREE is a **top-down approach** that aims to ensure the overall system reliability goal is met by distributing the burden of reliability across its subsystems and components.

**Key Concept:** **Reliability Allocation/Budgeting** - The process of breaking down an overall system reliability requirement into specific reliability targets for its individual components or subsystems.

**Relevance to Module 2:** AGREE directly addresses **component and unit redundancy** by providing a framework to determine how much reliability each redundant unit needs to contribute to achieve the desired system-level reliability. It helps in deciding *how much* redundancy is needed at each level.

**Textbook/Reference Linkages:**

*   **Balagurusamy (2017):** Likely discusses reliability allocation as a foundational concept before delving into specific techniques like AGREE.
*   **Chandrupatla (2009) & Srinath (2005):** Expected to cover reliability allocation and methods for breaking down reliability goals.
*   **Ebling (2004) & Naikan (2008):** These might offer more detailed explanations of AGREE's methodology and its application in electronic systems.
*   **Barlow (1998) & Lewis (2012):** Could provide the theoretical underpinnings and mathematical formulations used in AGREE.

### 2. Objectives of the AGREE Method

The primary objectives of using the AGREE method are:

*   **Define System Reliability Goals:** Establish a clear, quantifiable reliability target for the overall system.
*   **Allocate Reliability to Subsystems:** Break down the system reliability goal into individual reliability targets for each subsystem.
*   **Allocate Reliability to Components:** Further decompose subsystem reliability targets into reliability requirements for individual components within each subsystem.
*   **Identify Critical Components:** Highlight components that have a significant impact on overall system reliability, guiding design and testing efforts.
*   **Facilitate Design Trade-offs:** Provide a basis for making informed decisions about design choices, component selection, and the extent of redundancy required.
*   **Support Testing and Verification:** Guide the development of test plans to verify that individual components and subsystems meet their allocated reliability goals.

**Alignment with Course Outcomes:**

*   **CO3 (Enhance reliability of a manufacturing system):** AGREE provides a structured way to identify where reliability improvements are most needed.

### 3. The AGREE Method: Step-by-Step Procedure

The AGREE method typically involves the following steps:

**Step 1: Define System Structure and Identify Subsystems/Components**

*   Decompose the complex system into its major subsystems and then further into individual components.
*   Represent this decomposition using a **reliability block diagram (RBD)** or a **system hierarchy**.

**Example:** A communication satellite system can be broken down into:
    *   **Subsystems:** Power, Communication, Control, Payload.
    *   **Components within Power Subsystem:** Solar Panels, Batteries, Power Converters, Power Distribution Units.

**Step 2: Determine System-Level Reliability Requirement (R_s)**

*   Specify the desired reliability for the system to perform its intended function for a given mission duration or operating time. This is often expressed as a probability of success.

**Example:** The satellite system must have a reliability of 0.95 for a 5-year mission.

**Step 3: Estimate Component Failure Rates (λ_i)**

*   For each component, estimate its intrinsic failure rate (λ_i). This is the rate at which failures occur assuming the component operates independently and under normal conditions.
*   Failure rates are typically expressed in **Failures Per Hour (FPH)** or **Failures Per Million Hours (FPMH)**.
*   These estimates can be derived from:
    *   Historical data from similar components.
    *   Manufacturer specifications.
    *   Reliability prediction models (e.g., MIL-HDBK-217F for electronic components).
    *   Expert judgment.

**Example:** Solar Panel (λ_SP) = 10 x 10^-6 FPH, Battery (λ_B) = 5 x 10^-6 FPH.

**Step 4: Determine System Structure Function**

*   Understand how the components and subsystems are connected. The most common structures are:
    *   **Series System:** The system fails if any component fails. System reliability R_s = R_1 * R_2 * ... * R_n.
    *   **Parallel System:** The system fails only if all components fail. System reliability R_s = 1 - (1 - R_1) * (1 - R_2) * ... * (1 - R_n).
    *   **Complex Systems:** Combinations of series and parallel configurations.

**Step 5: Calculate Component Importance Factors (w_i)**

*   This is the core of the AGREE method. The importance factor for a component reflects its contribution to the system's overall reliability.
*   **AGREE Formula for Importance Factor (w_i):**
    $w_i = \frac{1 - R_i}{R_i}$
    where $R_i$ is the reliability of the i-th component.
*   However, AGREE uses a different approach based on failure rates and structure. The AGREE method typically relates the importance factor to the **failure rate of the component relative to the system's overall failure rate**.
*   A more direct AGREE formulation involves the concept of **"criticality"**. For a series system, the reliability of component *i* ($R_i$) is related to the system reliability ($R_s$) and the reliabilities of other components ($R_j$ for $j \neq i$) by:
    $R_s = R_i \times \prod_{j \neq i} R_j$
    The AGREE method aims to find $R_i$ values that satisfy this equation.

*   **Key AGREE Calculation:** The AGREE method uses a formula to determine the **"required failure rate"** for each component to meet the system's reliability goal. For a **series system**, the total system failure rate is the sum of individual component failure rates:
    $\Lambda_s = \sum_{i=1}^n \lambda_i$
    The AGREE method aims to allocate the system failure rate ($\Lambda_s$) among components.

    The AGREE method calculates an **"allocation factor"** or **"weight"** ($w_i$) for each component, which is proportional to its intrinsic failure rate.
    $w_i = \lambda_i$ (for components in a series configuration)

    Then, the **allocated failure rate** for component *i* ($\lambda_{alloc, i}$) is calculated as:
    $\lambda_{alloc, i} = \frac{\lambda_i}{\sum_{j=1}^n \lambda_j} \times \Lambda_s$
    where $\Lambda_s$ is the desired total system failure rate (e.g., $1 - R_s$ for small failure probabilities, or calculated more rigorously).

**Step 6: Calculate Allocated Reliability for Each Component (R_alloc, i)**

*   Once the allocated failure rate ($\lambda_{alloc, i}$) is determined for each component, its required reliability ($R_{alloc, i}$) can be calculated. Assuming an exponential reliability distribution (common for electronic components), the reliability is given by:
    $R(t) = e^{-\lambda t}$
    where $t$ is the mission duration.
*   Therefore, the allocated reliability for component *i* for a mission duration $T$ is:
    $R_{alloc, i} = e^{-\lambda_{alloc, i} T}$

**Step 7: Design and Component Selection**

*   Based on the calculated $R_{alloc, i}$, engineers select components or design redundancy to meet these targets.
*   If a component's intrinsic reliability ($e^{-\lambda_{intrinsic, i} T}$) is already higher than $R_{alloc, i}$, no special action is needed for that component.
*   If $e^{-\lambda_{intrinsic, i} T} < R_{alloc, i}$, the component needs to be improved or made redundant.

    *   **Improvement:** Using higher-quality components, better manufacturing processes.
    *   **Redundancy:** Using parallel redundant units. If *k* units are placed in parallel, and each unit has reliability $R_{unit}$, the reliability of the parallel block is $R_{parallel} = 1 - (1 - R_{unit})^k$. Engineers would choose *k* and $R_{unit}$ to meet $R_{alloc, i}$.

**Step 8: Iteration and Refinement**

*   The process may involve iterations as design constraints or new information emerges.
*   The allocated reliabilities are reviewed, and adjustments are made if necessary.

**Important Note on AGREE's Original Formulation:** The original AGREE method was more detailed and specific to electronic systems. It often involved tabulating parameters and using specialized forms. Modern interpretations focus on the core principle of allocating reliability based on component failure rates and system structure.

**Alignment with Course Outcomes:**

*   **CO1 (Explain modes of failure and basic concepts of reliability):** AGREE relies on understanding failure rates and reliability functions.
*   **CO2 (Identify methods for reliability prediction):** AGREE is a method that *uses* predictions (component failure rates) to *allocate* reliability.
*   **CO3 (Develop ability in formulating suitable strategies to enhance reliability):** AGREE directly informs strategies by identifying which components need attention and how much reliability they need.

### 4. AGREE Method for Different System Configurations

The calculation of allocated failure rates is influenced by the system configuration.

#### 4.1 Series Systems

*   **System Reliability:** $R_s = \prod_{i=1}^n R_i$
*   **System Failure Rate (for small probabilities):** $\Lambda_s \approx 1 - R_s = \sum_{i=1}^n (1 - R_i) = \sum_{i=1}^n \lambda_i T$ (if using rate $\lambda_i$)
    More accurately, for exponential distribution, $\Lambda_s = -\frac{\ln R_s}{T}$.
*   **Allocation:** The AGREE method allocates the system failure rate $\Lambda_s$ proportionally to the *intrinsic failure rates* ($\lambda_i$) of the components.
    $\lambda_{alloc, i} = \frac{\lambda_i}{\sum_{j=1}^n \lambda_j} \times \Lambda_s$
    Where $\lambda_i$ are the intrinsic failure rates of the components.
*   **Allocated Reliability:** $R_{alloc, i} = e^{-\lambda_{alloc, i} T}$

#### 4.2 Parallel Systems

*   **System Reliability (k identical units in parallel):** $R_s = 1 - (1 - R_i)^k$
*   For a system with *n* components in parallel, where component *i* has reliability $R_i$:
    $R_s = 1 - \prod_{i=1}^n (1 - R_i)$
*   **Challenge:** The AGREE method's direct proportionality to failure rate becomes less straightforward for parallel systems because adding a parallel unit *reduces* the failure rate contribution of that branch, not necessarily increases it based on its individual failure rate.
*   **Adaptation:** For parallel systems, AGREE's application might involve:
    *   **Allocating a reliability target for the *parallel block*** first.
    *   Then, determining the required reliability ($R_{unit}$) for each individual redundant unit within that block to meet the block's target, considering the number of units ($k$).
    *   $R_{block\_target} = 1 - (1 - R_{unit})^k$
*   **Alternative View:** If the system is a complex one where a parallel block is a subsystem, the AGREE method would first allocate a reliability target to that parallel subsystem, and then the internal design of the subsystem (with its parallel components) would be handled.

#### 4.3 Complex Systems

*   For complex systems (combinations of series and parallel), the process involves:
    1.  **Decomposition:** Break the system down into simpler series-parallel structures.
    2.  **Level-by-Level Allocation:** Start allocating reliability from the top-level system down to subsystems, and then to components.
    3.  **Importance Weights:** The weights used for allocation might become more complex, potentially considering the contribution of a component to the overall system failure rate through different paths.

**Textbook/Reference Linkages:**

*   **Srinath (2005) & Ebling (2004):** Likely to have examples and detailed calculations for series systems, which form the basis of AGREE.
*   **Chandrupatla (2009):** May discuss how redundancy affects reliability calculations, which is crucial for parallel systems in AGREE.

### 5. Examples and Applications

#### Example 1: Series System Reliability Allocation

**Problem:** A system consists of three components in series. The system must have a reliability of 0.99 for a mission duration of 100 hours. The estimated intrinsic failure rates are:
*   Component 1 ($\lambda_1$): $5 \times 10^{-6}$ FPH
*   Component 2 ($\lambda_2$): $3 \times 10^{-6}$ FPH
*   Component 3 ($\lambda_3$): $2 \times 10^{-6}$ FPH

**Solution using AGREE:**

1.  **System Reliability Goal ($R_s$):** 0.99
2.  **Mission Duration ($T$):** 100 hours
3.  **Calculate System Failure Rate ($\Lambda_s$):**
    Assuming exponential distribution, $R_s = e^{-\Lambda_s T}$
    $0.99 = e^{-\Lambda_s \times 100}$
    $\ln(0.99) = -\Lambda_s \times 100$
    $-0.01005 = -\Lambda_s \times 100$
    $\Lambda_s = \frac{0.01005}{100} = 0.0001005$ FPH (This is the target total system failure rate).

4.  **Calculate Total Intrinsic Failure Rate ($\sum \lambda_j$):**
    $\sum \lambda_j = \lambda_1 + \lambda_2 + \lambda_3 = (5 \times 10^{-6}) + (3 \times 10^{-6}) + (2 \times 10^{-6}) = 10 \times 10^{-6}$ FPH.

5.  **Calculate Allocated Failure Rates ($\lambda_{alloc, i}$):**
    *   $\lambda_{alloc, 1} = \frac{\lambda_1}{\sum \lambda_j} \times \Lambda_s = \frac{5 \times 10^{-6}}{10 \times 10^{-6}} \times 0.0001005 = 0.5 \times 0.0001005 = 0.00005025$ FPH
    *   $\lambda_{alloc, 2} = \frac{\lambda_2}{\sum \lambda_j} \times \Lambda_s = \frac{3 \times 10^{-6}}{10 \times 10^{-6}} \times 0.0001005 = 0.3 \times 0.0001005 = 0.00003015$ FPH
    *   $\lambda_{alloc, 3} = \frac{\lambda_3}{\sum \lambda_j} \times \Lambda_s = \frac{2 \times 10^{-6}}{10 \times 10^{-6}} \times 0.0001005 = 0.2 \times 0.0001005 = 0.00002010$ FPH

6.  **Verify Allocated Failure Rates:**
    $\sum \lambda_{alloc, i} = 0.00005025 + 0.00003015 + 0.00002010 = 0.0001005$ FPH (Matches $\Lambda_s$).

7.  **Calculate Allocated Reliabilities ($R_{alloc, i}$):**
    *   $R_{alloc, 1} = e^{-\lambda_{alloc, 1} T} = e^{-(0.00005025) \times 100} = e^{-0.005025} \approx 0.994975$
    *   $R_{alloc, 2} = e^{-\lambda_{alloc, 2} T} = e^{-(0.00003015) \times 100} = e^{-0.003015} \approx 0.996985$
    *   $R_{alloc, 3} = e^{-\lambda_{alloc, 3} T} = e^{-(0.00002010) \times 100} = e^{-0.002010} \approx 0.998000$

8.  **Check System Reliability with Allocated Reliabilities:**
    $R_{s\_check} = R_{alloc, 1} \times R_{alloc, 2} \times R_{alloc, 3} \approx 0.994975 \times 0.996985 \times 0.998000 \approx 0.989985 \approx 0.99$

**Interpretation:** Component 1, having the highest intrinsic failure rate, is allocated the highest required reliability target (0.994975). Component 3, with the lowest failure rate, has the least stringent reliability target (0.998000).

**Alignment with Course Outcomes:**

*   **CO2 (Identify methods for reliability prediction):** This example demonstrates how predicted failure rates are used.
*   **CO3 (Develop ability in formulating suitable strategies to enhance reliability):** The allocated reliabilities guide the selection of components or the need for redundancy. If Component 1's intrinsic reliability is less than 0.994975, it might need a parallel redundant unit.

#### Example 2: Redundancy Decision for a Component

**Problem:** In the previous example, suppose Component 1 has an intrinsic reliability of $R_{1\_intrinsic} = 0.99$ for 100 hours. The AGREE method allocated a reliability of $R_{alloc, 1} = 0.994975$.

**Decision:** Since $R_{1\_intrinsic} (0.99) < R_{alloc, 1} (0.994975)$, Component 1 needs improvement or redundancy. Let's consider adding a parallel redundant unit.

*   Let the redundant unit also have the same intrinsic reliability $R_{unit\_intrinsic} = 0.99$.
*   The reliability of the parallel block with two units ($k=2$) is:
    $R_{parallel\_2} = 1 - (1 - R_{unit\_intrinsic})^2 = 1 - (1 - 0.99)^2 = 1 - (0.01)^2 = 1 - 0.0001 = 0.9999$.
*   This $R_{parallel\_2} (0.9999)$ is greater than the required $R_{alloc, 1} (0.994975)$. So, a single redundant unit for Component 1 is sufficient.

**Alignment with Course Outcomes:**

*   **CO3 (Develop ability in formulating suitable strategies to enhance reliability):** This example shows a direct application of AGREE in deciding the extent of redundancy.

**Textbook/Reference Linkages:**

*   **Balagurusamy (2017) & Chandrupatla (2009):** Will cover methods for calculating reliability of parallel systems.
*   **Ebling (2004) & Naikan (2008):** May provide case studies or specific examples of AGREE application in electronic systems.

### 6. Advantages and Limitations of the AGREE Method

#### 6.1 Advantages

*   **Systematic Allocation:** Provides a structured, quantitative approach to allocating reliability goals.
*   **Focus on Criticality:** Directs attention to components that have a greater impact on system reliability (those with higher intrinsic failure rates).
*   **Basis for Design Decisions:** Helps engineers make informed choices about component selection, design complexity, and the need for redundancy.
*   **Traceability:** Allocations can be traced back to the system-level reliability requirement.
*   **Widely Accepted:** Historically significant and still relevant for many applications, especially in electronics.

#### 6.2 Limitations

*   **Assumes Series Configuration:** The direct proportionality to failure rates is most accurate for series systems. Adapting for complex or parallel systems requires careful consideration.
*   **Relies on Accurate Failure Rate Data:** The effectiveness of AGREE heavily depends on the accuracy of the initial component failure rate estimations.
*   **Ignores Common Cause Failures:** The basic AGREE method typically assumes independent failures of components. Common cause failures (where a single event can cause multiple components to fail) are not explicitly handled.
*   **Ignores Maintainability:** AGREE primarily focuses on reliability and does not directly incorporate maintainability aspects, although they are related in overall system effectiveness.
*   **Component-Centric:** While it's a system-level method, the allocation is fundamentally at the component level. Interactions between components beyond simple series/parallel structures are not deeply modeled.
*   **Less Suitable for Non-Electronic Systems:** While principles can be adapted, its original formulation and typical application are for electronic systems where failure rate prediction models are well-developed.

**Alignment with Course Outcomes:**

*   **CO1 (Explain modes of failure and basic concepts of reliability):** Understanding limitations like common cause failures links back to modes of failure.
*   **CO2 (Identify methods for reliability prediction):** Discussing limitations highlights the reliance on prediction methods.

### 7. Key Points to Remember

*   **Purpose:** AGREE is a method for **reliability allocation**.
*   **Top-Down Approach:** Starts with system reliability and breaks it down to components.
*   **Core Principle:** Allocates reliability proportionally to the *intrinsic failure rates* of components, especially in series systems.
*   **Formula:** $\lambda_{alloc, i} = \frac{\lambda_i}{\sum \lambda_j} \times \Lambda_s$ for series systems.
*   **Outcome:** Leads to allocated reliability targets ($R_{alloc, i}$) for each component.
*   **Application:** Guides component selection and the implementation of redundancy.
*   **Assumptions:** Primarily assumes exponential reliability and independent failures.
*   **Limitations:** Accuracy depends on failure rate data; needs adaptation for complex/parallel systems and common cause failures.

### 8. Practice Questions and Answers

**Question 1:** A system has three components in series, with intrinsic failure rates $\lambda_1 = 2 \times 10^{-6}$, $\lambda_2 = 4 \times 10^{-6}$, and $\lambda_3 = 6 \times 10^{-6}$ FPH. The system is intended for a mission duration of 500 hours and must have a reliability of 0.98. Using the AGREE method, what are the allocated failure rates for each component?

**Answer 1:**
1.  **System Failure Rate ($\Lambda_s$):**
    $R_s = e^{-\Lambda_s T}$
    $0.98 = e^{-\Lambda_s \times 500}$
    $\ln(0.98) = -\Lambda_s \times 500$
    $-0.020202 = -\Lambda_s \times 500$
    $\Lambda_s = \frac{0.020202}{500} = 0.000040404$ FPH.

2.  **Total Intrinsic Failure Rate ($\sum \lambda_j$):**
    $\sum \lambda_j = (2 \times 10^{-6}) + (4 \times 10^{-6}) + (6 \times 10^{-6}) = 12 \times 10^{-6}$ FPH.

3.  **Allocated Failure Rates ($\lambda_{alloc, i}$):**
    *   $\lambda_{alloc, 1} = \frac{2 \times 10^{-6}}{12 \times 10^{-6}} \times 0.000040404 = \frac{1}{6} \times 0.000040404 \approx 0.000006734$ FPH
    *   $\lambda_{alloc, 2} = \frac{4 \times 10^{-6}}{12 \times 10^{-6}} \times 0.000040404 = \frac{1}{3} \times 0.000040404 \approx 0.000013468$ FPH
    *   $\lambda_{alloc, 3} = \frac{6 \times 10^{-6}}{12 \times 10^{-6}} \times 0.000040404 = \frac{1}{2} \times 0.000040404 \approx 0.000020202$ FPH

**Question 2:** If Component 1 in Question 1 has an intrinsic reliability of $R_{1\_intrinsic} = 0.995$ for 500 hours, and the AGREE allocation required $R_{alloc, 1} = e^{-0.000006734 \times 500} \approx 0.9966$. What action should be taken for Component 1? Would adding a single identical parallel redundant unit suffice?

**Answer 2:**
*   **Action:** Since $R_{1\_intrinsic} (0.995) < R_{alloc, 1} (0.9966)$, Component 1's current reliability is insufficient.
*   **Redundancy Check:** Let's assume the parallel unit also has $R_{unit\_intrinsic} = 0.995$.
    The reliability of a parallel system with two identical units is $R_{parallel\_2} = 1 - (1 - R_{unit\_intrinsic})^2$.
    $R_{parallel\_2} = 1 - (1 - 0.995)^2 = 1 - (0.005)^2 = 1 - 0.000025 = 0.999975$.
*   **Conclusion:** The reliability of the parallel block (0.999975) is greater than the allocated reliability requirement for Component 1 (0.9966). Therefore, adding a single identical parallel redundant unit would suffice.

**Question 3:** Briefly explain why the AGREE method might need to be adapted for systems with parallel components.

**Answer 3:** The AGREE method's core idea of allocating reliability proportionally to intrinsic failure rates works well for series systems where higher failure rates directly translate to lower reliability contributions. In parallel systems, adding redundant units *improves* reliability. The failure rate of an individual parallel unit, if high, might still be acceptable if there are many parallel units, or if the requirement is for the *block* to be highly reliable. Thus, a simple proportionality to individual failure rates might not directly apply to allocating requirements *within* a parallel subsystem without modification. The focus shifts to the reliability of the parallel block as a whole and then determining the required reliability for each parallel unit.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
