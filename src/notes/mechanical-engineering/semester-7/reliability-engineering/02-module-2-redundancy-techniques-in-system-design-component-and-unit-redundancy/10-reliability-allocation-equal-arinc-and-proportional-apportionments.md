---
title: "Reliability Allocation: Equal, ARINC, and Proportional apportionments"
subject: "RELIABILITY ENGINEERING"
module: "Module 2: Redundancy Techniques in System design: Component and Unit redundancy"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463e56"
status: "completed"
scrapedAt: "2026-05-20T18:18:01.515Z"
---
# Reliability Engineering: Module 2 - Redundancy Techniques in System Design

## Topic: Reliability Allocation: Equal, ARINC, and Proportional Apportionments

### 1. Introduction to Reliability Allocation

**Key Concept:** Reliability allocation (also known as reliability apportionment or reliability budgeting) is the process of assigning reliability targets to individual components or subsystems within a larger system. This is a crucial step in system design to ensure that the overall system reliability meets the specified requirements.

**Why is Reliability Allocation Important?**

*   **Achieving System Reliability Goals:** Directly translates a high-level system reliability requirement into actionable targets for lower-level elements.
*   **Resource Management:** Helps in allocating resources (e.g., cost, development time, testing effort) to achieve the desired reliability for each part.
*   **Design Trade-offs:** Facilitates informed decisions about component selection, complexity, and the use of redundancy.
*   **Early Identification of Weaknesses:** Highlights subsystems or components that are inherently less reliable and require special attention.

**Course Outcomes Addressed:**

*   **CO2:** Identify methods for reliability prediction according to system characteristics (Knowledge Level: K3) - Reliability allocation is a prerequisite for predicting system reliability.
*   **CO3:** Develop ability in formulating suitable strategies to enhance reliability of a manufacturing system. (Knowledge Level: K3) - Allocation is a foundational strategy for reliability enhancement.

**Textbook References:**

*   **Balagurusamy, Reliability Engineering:** Discusses reliability allocation as a key aspect of system design and planning.
*   **Chandrupatla, Quality and Reliability in Engineering:** Covers apportionment techniques as part of reliability engineering methodology.
*   **Srinath, Concepts of Reliability Engineering:** Provides fundamental principles and methods for allocating reliability.

---

### 2. Reliability Allocation Methods

Reliability allocation aims to distribute the overall system reliability requirement among its constituent components or subsystems. Various methods exist, each with its own assumptions and applicability. We will focus on three common approaches: Equal Apportionment, ARINC Apportionment, and Proportional Apportionment.

---

#### 2.1. Equal Reliability Apportionment (or Equal Allocation)

**Key Concept:** In this method, the overall system reliability is divided equally among all components or subsystems. Each component is assigned the same reliability target.

**Formula:**

If a system has 'n' components and the desired system reliability is $R_{sys}$, then the reliability allocated to each component ($R_i$) is:

$R_i = (R_{sys})^{1/n}$

**Assumptions:**

*   All components contribute equally to system failure.
*   Components are in series (failure of any component leads to system failure).
*   Components have similar failure characteristics or are assumed to have them for allocation purposes.
*   This method is often used in the early stages of design when detailed component data is limited.

**Example:**

A system consists of 5 components connected in series. The desired system reliability is 0.95.

Using Equal Apportionment:

$R_{comp} = (0.95)^{1/5} \approx 0.9897$

Each of the 5 components should have a reliability of approximately 0.9897 to achieve an overall system reliability of 0.95.

**Advantages:**

*   Simple and easy to understand and implement.
*   Useful as a starting point for reliability planning.

**Disadvantages:**

*   **Unrealistic:** Often ignores the differences in complexity, stress levels, and failure rates of individual components.
*   May lead to over-allocation for complex or critical components and under-allocation for simpler ones, making it inefficient.
*   May not be feasible if some components inherently have lower reliability.

**Course Outcomes Addressed:**

*   **CO2:** Identify methods for reliability prediction according to system characteristics (Knowledge Level: K3) - Understanding this method helps in identifying prediction approaches.

**Textbook References:**

*   **Srinath, Concepts of Reliability Engineering:** Introduces equal allocation as a basic apportionment technique.

---

#### 2.2. ARINC Reliability Apportionment (or ARINC Method)

**Key Concept:** This method is commonly used in the aerospace and aviation industry. It allocates reliability based on the complexity and criticality of each component, often using a factor derived from the number of parts or complexity measures. The underlying principle is to allocate more reliability to simpler, less critical components and less to more complex or critical ones.

**Formula (General Form):**

The ARINC method often uses the following relationship for components in series:

$\ln(R_{sys}) = \sum_{i=1}^{n} \ln(R_i)$

where $R_{sys}$ is the system reliability and $R_i$ is the reliability of component $i$.

The ARINC allocation often uses a factor, typically derived from the number of parts ($N_i$) or complexity of subsystem $i$, to determine the allocation. A common approach relates the allocated reliability to a base reliability ($R_0$) and a complexity factor.

$R_i = R_0^{\alpha_i}$

where $\alpha_i$ is a weighting factor related to component $i$'s complexity. For ARINC, this is often related to the number of parts. A simplified approach can be:

$R_i = (R_{sys})^{1/n}$ (if all $\alpha_i$ are equal, reducing to equal allocation)

More specifically, ARINC often uses a formula that relates the required component reliability to the system reliability and a complexity factor, often related to the mean time between failures (MTBF).

Let $MTBF_{sys}$ be the system MTBF and $MTBF_i$ be the MTBF of component $i$. For a series system:

$1/MTBF_{sys} = \sum_{i=1}^{n} 1/MTBF_i$

The ARINC method might allocate MTBF such that:

$MTBF_i = K \cdot \sqrt[n]{MTBF_{sys} \cdot (\text{some complexity factor})}$

A more direct formulation often seen is based on allocating the "failure rate budget" or $\ln(R)$.

$\ln(R_{sys}) = \sum_{i=1}^{n} \ln(R_i)$

The ARINC allocation essentially says that the "effort" to achieve reliability is proportional to the number of parts or some complexity metric.

Let's consider the allocation based on failure rates ($\lambda_i$) where $R_i = e^{-\lambda_i t}$.
For a series system with mission time $t$:
$R_{sys} = \prod_{i=1}^{n} R_i = \prod_{i=1}^{n} e^{-\lambda_i t} = e^{-\sum_{i=1}^{n} \lambda_i t}$
So, $\lambda_{sys} = \sum_{i=1}^{n} \lambda_i$.

The ARINC approach allocates the total system failure rate ($\lambda_{sys}$) to components based on their complexity (often approximated by the number of parts or a complexity index).

$\lambda_i = \lambda_{sys} \cdot \frac{C_i}{\sum_{j=1}^{n} C_j}$

where $C_i$ is the complexity factor for component $i$. This complexity factor is often derived from the number of parts, transistor count, or other complexity metrics.

**Example:**

Consider a system with two subsystems, A and B, in series.
System reliability required, $R_{sys} = 0.99$.
Subsystem A has 50 parts ($C_A = 50$).
Subsystem B has 100 parts ($C_B = 100$).

Total complexity $C_{total} = C_A + C_B = 50 + 100 = 150$.

Using the ARINC approach (allocating failure rate budget proportional to complexity):

Assume a mission time $t=1$ hour.
$\ln(R_{sys}) = \ln(0.99) \approx -0.01005$
$\lambda_{sys} = -\ln(R_{sys}) / t = 0.01005$ failures per hour.

Allocation of failure rate:
$\lambda_A = \lambda_{sys} \cdot \frac{C_A}{C_{total}} = 0.01005 \cdot \frac{50}{150} = 0.00335$ failures/hour.
$\lambda_B = \lambda_{sys} \cdot \frac{C_B}{C_{total}} = 0.01005 \cdot \frac{100}{150} = 0.00670$ failures/hour.

Now, calculate the reliability for each subsystem:
$R_A = e^{-\lambda_A \cdot t} = e^{-0.00335 \cdot 1} \approx 0.99667$
$R_B = e^{-\lambda_B \cdot t} = e^{-0.00670 \cdot 1} \approx 0.99332$

Check system reliability:
$R_{sys} = R_A \cdot R_B \approx 0.99667 \cdot 0.99332 \approx 0.99000$ (close to the target due to rounding).

**Advantages:**

*   More realistic than equal allocation as it considers component complexity.
*   Widely used and proven in certain industries.
*   Helps in focusing design efforts on more complex subsystems.

**Disadvantages:**

*   Requires a measure of complexity (e.g., number of parts), which might not always be a perfect indicator of reliability.
*   The exact formulation of the complexity factor can vary.
*   Still assumes a series system structure for the basic allocation.

**Course Outcomes Addressed:**

*   **CO2:** Identify methods for reliability prediction according to system characteristics (Knowledge Level: K3) - ARINC is a specific method for prediction based on system structure and component characteristics.
*   **CO3:** Develop ability in formulating suitable strategies to enhance reliability of a manufacturing system. (Knowledge Level: K3) - Allocating based on complexity is a strategy for enhancement.

**Textbook References:**

*   **Balagurusamy, Reliability Engineering:** May discuss specific industry-standard allocation methods like ARINC.
*   **Chandrupatla, Quality and Reliability in Engineering:** Often covers apportionment techniques with practical examples from different industries.

---

#### 2.3. Proportional Reliability Apportionment (or Weighted Apportionment)

**Key Concept:** This is a general approach where reliability is allocated proportionally to some characteristic of the component, such as its complexity, criticality, failure rate, or development cost. It generalizes the ARINC method and is more flexible.

**Formula:**

The general idea is to allocate reliability such that:

$R_i = (R_{sys})^{\frac{w_i}{\sum w_j}}$

where $w_i$ is a weight or weighting factor assigned to component $i$, reflecting its importance or complexity.

Alternatively, allocation can be based on failure rates:

$\lambda_i = \lambda_{sys} \cdot \frac{w_i}{\sum w_j}$

**Common Weighting Factors ($w_i$):**

*   **Number of Parts:** Similar to ARINC, where $w_i$ is the number of parts in component $i$.
*   **Complexity Index:** A more elaborate measure of complexity.
*   **Stress Level:** Components operating under higher stress might be allocated a proportionally higher failure rate (meaning lower reliability).
*   **Cost:** Allocating more reliability budget to more expensive components.
*   **MTBF:** Allocating reliability inversely proportional to the inherent failure rate of a component.

**Example:**

Consider a system with three components in series. $R_{sys} = 0.98$.
Let's allocate based on their inherent estimated MTBFs before allocation.
Component 1: $MTBF_1 = 1000$ hours
Component 2: $MTBF_2 = 2000$ hours
Component 3: $MTBF_3 = 500$ hours

We want to allocate reliability such that components with higher inherent MTBFs are allocated higher reliability. This means the "reliability effort" or allocated failure rate should be inversely proportional to the inherent MTBF.
So, let $w_i = 1/MTBF_i$.

$w_1 = 1/1000 = 0.001$
$w_2 = 1/2000 = 0.0005$
$w_3 = 1/500 = 0.002$

Total weight $W_{total} = w_1 + w_2 + w_3 = 0.001 + 0.0005 + 0.002 = 0.0035$.

Let's use the failure rate allocation approach for a mission time $t=100$ hours.
$\lambda_{sys} = -\ln(R_{sys}) / t = -\ln(0.98) / 100 \approx -(-0.0202) / 100 = 0.000202$ failures/hour.

Allocated failure rates:
$\lambda_1 = \lambda_{sys} \cdot \frac{w_1}{W_{total}} = 0.000202 \cdot \frac{0.001}{0.0035} \approx 0.0000577$ failures/hour.
$\lambda_2 = \lambda_{sys} \cdot \frac{w_2}{W_{total}} = 0.000202 \cdot \frac{0.0005}{0.0035} \approx 0.0000289$ failures/hour.
$\lambda_3 = \lambda_{sys} \cdot \frac{w_3}{W_{total}} = 0.000202 \cdot \frac{0.002}{0.0035} \approx 0.0001154$ failures/hour.

Check: $\lambda_1 + \lambda_2 + \lambda_3 \approx 0.0000577 + 0.0000289 + 0.0001154 = 0.000202$ (matches $\lambda_{sys}$).

Allocated reliabilities:
$R_1 = e^{-\lambda_1 \cdot t} = e^{-0.0000577 \cdot 100} \approx e^{-0.00577} \approx 0.99424$
$R_2 = e^{-\lambda_2 \cdot t} = e^{-0.0000289 \cdot 100} \approx e^{-0.00289} \approx 0.99712$
$R_3 = e^{-\lambda_3 \cdot t} = e^{-0.0001154 \cdot 100} \approx e^{-0.01154} \approx 0.98850$

Check system reliability: $R_{sys} = R_1 \cdot R_2 \cdot R_3 \approx 0.99424 \cdot 0.99712 \cdot 0.98850 \approx 0.98001$ (close to target).

**Advantages:**

*   Highly flexible and adaptable to various design considerations.
*   Allows for nuanced allocation based on specific engineering judgment.
*   Can be tailored to optimize for cost, performance, or other factors alongside reliability.

**Disadvantages:**

*   Requires careful selection and justification of the weighting factors.
*   Can be more complex to implement and explain than simpler methods.
*   The choice of weighting factor significantly impacts the outcome.

**Course Outcomes Addressed:**

*   **CO2:** Identify methods for reliability prediction according to system characteristics (Knowledge Level: K3) - Proportional methods are key for prediction based on varied characteristics.
*   **CO3:** Develop ability in formulating suitable strategies to enhance reliability of a manufacturing system. (Knowledge Level: K3) - This is a core strategy for enhancing reliability.

**Textbook References:**

*   **Srinath, Concepts of Reliability Engineering:** Often presents proportional methods as extensions of basic techniques.
*   **Naikan V. N. A., Reliability Engineering and Life Testing:** Discusses various apportionment strategies, including proportional methods.

---

### 3. Reliability Allocation for Parallel Systems and Redundancy

**Key Concept:** The above methods primarily deal with components in series. For systems with parallel redundancy or components in parallel, the reliability allocation needs to consider the redundancy structure.

*   **Parallel Components:** If components are in parallel to provide redundancy, the reliability of the parallel unit is $R_{parallel} = 1 - (1 - R_1)(1 - R_2)...(1 - R_n)$. If all parallel components have the same reliability $R_{comp}$, then $R_{parallel} = 1 - (1 - R_{comp})^n$.
*   **System Reliability:** The overall system reliability is then the product of the reliabilities of all series elements, where each element might be a single component or a parallel redundant unit.

**Allocation in Redundant Systems:**

When allocating reliability to a redundant subsystem (e.g., a 1-out-of-2 system), the allocated reliability target is for the *redundant unit itself*, not just a single component within it.

**Example:**

Consider a system with two stages in series. Stage 1 is a single component, and Stage 2 is a 1-out-of-2 parallel redundant system.
$R_{sys} = R_{stage1} \cdot R_{stage2}$
$R_{stage2} = 1 - (1 - R_{comp2})^2$, where $R_{comp2}$ is the reliability of each identical component in Stage 2.

If we use equal apportionment for a system where Stage 1 requires $R_{stage1}$ and Stage 2 requires $R_{stage2}$:
$R_{stage1} \cdot R_{stage2} = R_{sys}$

We would first allocate $R_{stage1}$ and $R_{stage2}$. For instance, if $R_{sys} = 0.95$ and there are two main "blocks" (Stage 1 and Stage 2), we might allocate $R_{stage1} = \sqrt{0.95}$ and $R_{stage2} = \sqrt{0.95}$.

Then, for Stage 2:
$\sqrt{0.95} = 1 - (1 - R_{comp2})^2$
$(1 - R_{comp2})^2 = 1 - \sqrt{0.95} \approx 1 - 0.9747 = 0.0253$
$1 - R_{comp2} = \sqrt{0.0253} \approx 0.1591$
$R_{comp2} \approx 1 - 0.1591 = 0.8409$

**Important Point:** The allocation methods are applied to the "minimal cut sets" or functional blocks of the system. For a simple series system, these are the individual components. For a more complex system, they could be subsystems or redundant groups.

**Course Outcomes Addressed:**

*   **CO1:** Explain various modes of failure and basic concepts of reliability (Knowledge Level: K2) - Understanding how redundancy affects overall reliability is key.
*   **CO2:** Identify methods for reliability prediction according to system characteristics (Knowledge Level: K3) - Allocation must consider the system's structure (series, parallel, mixed).

**Textbook References:**

*   **Lewis E. E., Introduction to Reliability Engineering:** Provides comprehensive coverage of series-parallel system reliability and how to apply allocation concepts.
*   **Barlow, Richard E., Engineering Reliability:** Discusses system reliability modeling, which is essential for allocation.

---

### 4. Practice Questions and Exercises

**Question 1:**

A system consists of 4 identical components in series. The desired system reliability for a mission of 100 hours is 0.99.
a) Calculate the reliability required for each component using the Equal Reliability Apportionment method.
b) If Component 1 has 100 parts and Component 2 has 200 parts, and the other two are identical with 150 parts each, calculate the reliability allocation for each component using the ARINC method (assume number of parts is the complexity measure).

**Solution 1:**

**a) Equal Reliability Apportionment:**
$n = 4$, $R_{sys} = 0.99$.
$R_{comp} = (R_{sys})^{1/n} = (0.99)^{1/4} \approx 0.9975$

Each component needs a reliability of approximately 0.9975.

**b) ARINC Method (based on number of parts):**
Let $N_1=100, N_2=200, N_3=150, N_4=150$. Total parts $N_{total} = 100+200+150+150 = 600$.
Mission time $t = 100$ hours.
$\lambda_{sys} = -\ln(R_{sys})/t = -\ln(0.99)/100 \approx 0.000202$ failures/hour.

Failure rate allocation proportional to the number of parts:
$\lambda_i = \lambda_{sys} \cdot (N_i / N_{total})$

$\lambda_1 = 0.000202 \cdot (100 / 600) \approx 0.0000337$
$\lambda_2 = 0.000202 \cdot (200 / 600) \approx 0.0000673$
$\lambda_3 = 0.000202 \cdot (150 / 600) \approx 0.0000505$
$\lambda_4 = 0.000202 \cdot (150 / 600) \approx 0.0000505$

Allocated reliabilities:
$R_1 = e^{-\lambda_1 t} = e^{-0.0000337 \cdot 100} \approx e^{-0.00337} \approx 0.99664$
$R_2 = e^{-\lambda_2 t} = e^{-0.0000673 \cdot 100} \approx e^{-0.00673} \approx 0.99329$
$R_3 = e^{-\lambda_3 t} = e^{-0.0000505 \cdot 100} \approx e^{-0.00505} \approx 0.99496$
$R_4 = e^{-\lambda_4 t} = e^{-0.0000505 \cdot 100} \approx e^{-0.00505} \approx 0.99496$

Check: $R_1 \cdot R_2 \cdot R_3 \cdot R_4 \approx 0.99664 \cdot 0.99329 \cdot 0.99496 \cdot 0.99496 \approx 0.9800$ (Should be close to 0.99, some discrepancy due to rounding of $\lambda_{sys}$). Let's re-calculate $\lambda_{sys}$ more precisely.
$\lambda_{sys} = -\ln(0.99)/100 \approx -(-0.0100503358)/100 \approx 0.000100503358$

Recalculating with more precision:
$\lambda_1 = 0.000100503358 \cdot (100 / 600) \approx 0.000016750559$
$\lambda_2 = 0.000100503358 \cdot (200 / 600) \approx 0.000033501119$
$\lambda_3 = 0.000100503358 \cdot (150 / 600) \approx 0.000025125839$
$\lambda_4 = 0.000100503358 \cdot (150 / 600) \approx 0.000025125839$

$R_1 = e^{-0.000016750559 \cdot 100} \approx 0.998325$
$R_2 = e^{-0.000033501119 \cdot 100} \approx 0.996657$
$R_3 = e^{-0.000025125839 \cdot 100} \approx 0.997490$
$R_4 = e^{-0.000025125839 \cdot 100} \approx 0.997490$

$R_{sys} = 0.998325 \cdot 0.996657 \cdot 0.997490 \cdot 0.997490 \approx 0.99000$ (This is much better)

**Question 2:**

A system has two independent subsystems in series. Subsystem A is a single component. Subsystem B is a 1-out-of-2 redundant system with identical components. The total system reliability requirement is 0.98. Using the Equal Reliability Apportionment method, allocate reliability to Subsystem A and Subsystem B. Then, determine the reliability required for each component in Subsystem B.

**Solution 2:**

Let $R_{sys} = 0.98$. Subsystem A and Subsystem B are in series.
Using Equal Apportionment for the two main subsystems:
$R_{subA} = \sqrt{R_{sys}} = \sqrt{0.98} \approx 0.98995$
$R_{subB} = \sqrt{R_{sys}} = \sqrt{0.98} \approx 0.98995$

Now, for Subsystem B, which is a 1-out-of-2 redundant system with identical components of reliability $R_{compB}$:
$R_{subB} = 1 - (1 - R_{compB})^2$
$0.98995 = 1 - (1 - R_{compB})^2$
$(1 - R_{compB})^2 = 1 - 0.98995 = 0.01005$
$1 - R_{compB} = \sqrt{0.01005} \approx 0.10025$
$R_{compB} \approx 1 - 0.10025 = 0.89975$

So, Subsystem A needs a reliability of 0.98995, and each component in Subsystem B needs a reliability of 0.89975.

---

### 5. Important Points to Remember

*   **Reliability Allocation is a Prerequisite:** It translates system-level requirements into component-level targets, guiding design and development.
*   **Series Systems:** The simplest case, where component reliabilities multiply. Allocation often focuses on distributing the system's failure rate or reliability budget.
*   **Parallel/Redundant Systems:** Requires calculating the reliability of the redundant group first, then allocating to the components within that group.
*   **Method Choice:** The choice of allocation method (Equal, ARINC, Proportional) depends on the system's complexity, available data, and the desired level of accuracy. Equal is simple but often unrealistic; ARINC and Proportional methods offer more realism.
*   **Weighting Factors:** For Proportional and ARINC methods, the selection of the weighting factor (e.g., number of parts, complexity index) is critical and can significantly influence the outcome.
*   **Iterative Process:** Reliability allocation is often an iterative process. Initial allocations may need refinement as design progresses and more detailed information becomes available.
*   **Not a Guarantee:** Allocation sets targets. Achieving these targets depends on the actual design, manufacturing quality, testing, and operational conditions.

---

### 6. Alignment with Course Outcomes

*   **CO1 (Knowledge Level: K2):** Understanding the different allocation methods helps explain how overall reliability is achieved through component design. Concepts of series and parallel systems are fundamental here.
*   **CO2 (Knowledge Level: K3):** This entire topic is about identifying and applying methods for reliability prediction based on system characteristics. The methods discussed (Equal, ARINC, Proportional) are direct answers to this outcome.
*   **CO3 (Knowledge Level: K3):** Reliability allocation is a core strategy for enhancing system reliability. By understanding how to allocate, one can identify critical components and focus efforts on improving their reliability, thereby enhancing the overall system's reliability.

---

This concludes Module 2, Topic: Reliability Allocation. This foundational knowledge is critical for designing reliable systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
