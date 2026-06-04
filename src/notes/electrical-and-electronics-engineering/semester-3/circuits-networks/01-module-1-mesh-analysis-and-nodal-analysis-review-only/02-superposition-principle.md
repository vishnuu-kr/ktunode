---
title: "Superposition principle"
subject: "CIRCUITS & NETWORKS"
module: "Module 1: Mesh analysis and nodal analysis ( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ab5"
status: "completed"
scrapedAt: "2026-05-23T16:11:16.840Z"
---
# CIRCUITS & NETWORKS: Module 1 Review - Superposition Principle

This module review focuses on the Superposition Principle, a fundamental circuit analysis technique. While this is a review topic, understanding it deeply is crucial for applying various circuit theorems and solving complex networks.

## 1. Introduction to the Superposition Principle

The Superposition Principle is a linear circuit analysis technique used to determine the response (voltage or current) of a circuit with multiple independent sources. It is applicable to circuits containing only linear elements (resistors, capacitors, inductors) and independent sources.

**Key Concept:** The Superposition Principle states that in a linear circuit containing multiple independent sources, the total response (voltage or current) at any point in the circuit is the algebraic sum of the responses caused by each independent source acting alone.

**Relevance to Course Outcomes:**
*   **CO1 (Apply circuit theorems to solve complex DC and AC electric networks):** Superposition is a direct application of circuit theorems and a powerful tool for simplifying the analysis of complex circuits.

**Textbook References:**
*   **Van Valkenburg, Network Analysis:** Likely covers this principle in its early chapters on circuit analysis methods.
*   **Ravish R Singh, Network Analysis and Synthesis:** Will definitely have a dedicated section on Superposition.
*   **Suresh Kumar, Electric Circuits & Networks:** Another foundational text that will introduce this theorem.
*   **Sudhakar & Palli, Circuits and Networks, Analysis and Synthesis:** A comprehensive text that will explain and illustrate Superposition.

## 2. Conditions for Applying Superposition

It is crucial to understand when the Superposition Principle can and cannot be applied.

**Applicability:**
*   **Linear Circuits:** The circuit must contain only linear elements. This means the relationship between voltage and current for these elements is linear (e.g., $V = IR$ for a resistor).
*   **Independent Sources:** The circuit must contain multiple *independent* sources (voltage or current).

**Non-Applicability:**
*   **Non-linear Elements:** Circuits containing non-linear elements like diodes, transistors, or saturable inductors cannot be analyzed using Superposition. The response in such circuits is not directly proportional to the sources.
*   **Dependent Sources (with caution):** While Superposition can be used in circuits with dependent sources, the approach needs careful consideration. The dependent source's value is often a function of a voltage or current elsewhere in the circuit. When analyzing the effect of a single independent source, the dependent source must be kept active, and its controlling variable (voltage or current) should be determined by the active independent source. This can sometimes make the analysis more complex than nodal or mesh analysis.
*   **Power Calculation:** Superposition cannot be used to directly calculate power. Power is proportional to the *square* of voltage or current ($P = V^2/R = I^2R$), and the sum of powers from individual sources is generally not equal to the total power. You must find the total voltage or current first and then calculate the power.

**Important Point to Remember:** Always ensure the circuit elements are linear before applying Superposition.

## 3. Steps for Applying the Superposition Principle

The process involves systematically deactivating sources and calculating contributions.

**Steps:**

1.  **Select One Independent Source:** Choose one independent source to be active.
2.  **Deactivate Other Independent Sources:**
    *   **Deactivate Independent Voltage Sources:** Replace them with a short circuit (zero voltage).
    *   **Deactivate Independent Current Sources:** Replace them with an open circuit (zero current).
    *   **Dependent Sources:** **Leave them active.** Their values depend on other circuit variables, which will be determined by the currently active independent source.
3.  **Calculate the Response:** Determine the voltage or current of interest due to the single active source using any standard circuit analysis technique (Ohm's Law, Kirchhoff's Laws, Mesh Analysis, Nodal Analysis, simplification of series/parallel elements).
4.  **Repeat for All Independent Sources:** Repeat steps 1-3 for each independent source in the circuit, one at a time.
5.  **Sum the Contributions:** Algebraically add the individual responses calculated in step 3 to find the total response. Be mindful of polarities for voltages and directions for currents.

**Example 1: DC Circuit**

Consider a circuit with two voltage sources. We want to find the current through resistor R3.

*Circuit Diagram (Illustrative - requires actual component values and connections to draw):*
Imagine a circuit with:
*   Voltage source V1
*   Resistor R1
*   Node A
*   Resistor R2 connecting Node A to ground
*   Resistor R3 connecting Node A to another point
*   Voltage source V2 connected in series with R3

*Steps to find current through R3:*

**Case 1: V1 active, V2 deactivated**
*   Replace V2 with a short circuit.
*   Analyze the circuit with only V1 active. Calculate the current through R3. Let's call this $I_{R3, V1}$.

**Case 2: V2 active, V1 deactivated**
*   Replace V1 with a short circuit.
*   Analyze the circuit with only V2 active. Calculate the current through R3. Let's call this $I_{R3, V2}$.

**Total Current:**
The total current through R3 is $I_{R3, Total} = I_{R3, V1} + I_{R3, V2}$.

**Textbook References:**
*   Examples similar to this will be found in all the listed textbooks, often presented with specific resistor values and source voltages. Sudhakar & Palli is known for its clear examples.

## 4. Superposition with Dependent Sources

As mentioned, dependent sources remain active when their controlling variables are influenced by the currently active independent source.

**Example 2: Circuit with a Dependent Source**

Consider a circuit with an independent voltage source V1 and a dependent voltage source whose voltage is $2 \times I_x$, where $I_x$ is the current through a specific resistor.

*Steps to find a voltage or current:*

**Case 1: V1 active**
*   Deactivate any other independent sources (if present).
*   The dependent source $2I_x$ remains active. $I_x$ is the current through the resistor it depends on.
*   Analyze the circuit to find the desired response. The value of $2I_x$ will be determined as part of the analysis.

**Case 2: Other independent sources active (if any)**
*   Deactivate V1 (short circuit).
*   Keep the dependent source active. Its controlling variable $I_x$ will be determined by the remaining active sources.
*   Analyze the circuit.

**Summation:** Algebraically sum the responses from each case.

**Important Consideration:** The controlling variable for the dependent source is crucial. If it's a voltage across an element, keep that element in place (don't replace it with a short/open unless it's part of deactivating another source). If it's a current through an element, the dependency remains.

**Textbook References:**
*   These examples are key to understanding the nuances. Look for examples in Ravish R Singh or Sudhakar & Palli that explicitly deal with dependent sources in conjunction with Superposition.

## 5. Advantages and Disadvantages of Superposition

Like any analysis technique, Superposition has its pros and cons.

**Advantages:**
*   **Simplifies Complex Circuits:** Breaks down a complex problem with multiple sources into simpler problems with single sources.
*   **Intuitive:** The concept of "adding up effects" is easy to grasp.
*   **Useful for Testing:** Can be used to isolate the effect of a specific source.

**Disadvantages:**
*   **Time-Consuming:** Requires multiple analyses if there are many independent sources.
*   **Not Applicable to Power:** Cannot be directly used for power calculations.
*   **Complex with Dependent Sources:** Can become more complicated to manage when dependent sources are present, especially if the controlling variables are not easily determined in each sub-analysis.
*   **Linearity Requirement:** Strictly limited to linear circuits.

**Textbook References:**
*   Discussions on the merits and limitations of various circuit theorems, including Superposition, are typically found in the introductory or summary sections of chapters dealing with these theorems in all the mentioned textbooks.

## 6. Comparison with Other Analysis Techniques (Mesh and Nodal)

Superposition is often taught alongside Mesh and Nodal analysis. It's important to know when to use which.

| Feature           | Superposition Principle                                | Mesh Analysis                                     | Nodal Analysis                                 |
| :---------------- | :----------------------------------------------------- | :------------------------------------------------ | :--------------------------------------------- |
| **Core Idea**     | Sum of responses from individual sources.              | Analysis based on loop currents.                  | Analysis based on node voltages.               |
| **Source Handling** | Deactivates sources one by one.                        | All sources remain active.                        | All sources remain active.                     |
| **Applicability** | Linear circuits with independent sources.              | Planar circuits. Works well with many series components. | Works well with many parallel components.      |
| **Dependent Sources** | Can be used, but managing dependencies requires care. | Can be used, but equations need to be formed carefully. | Can be used, forming equations requires care. |
| **Power Calculation** | Not directly applicable.                             | Can directly lead to voltage/current for power.   | Can directly lead to voltage/current for power. |
| **Complexity**    | Can be lengthy with many sources.                      | Can be complex for non-planar circuits or many nodes. | Can be complex for circuits with few nodes but many meshes. |
| **CO Alignment**  | CO1                                                    | CO1                                               | CO1                                            |

**When to use which:**

*   Use **Superposition** when you need to find the contribution of each source to a particular voltage or current, or when the circuit has multiple sources that are difficult to combine directly.
*   Use **Mesh Analysis** for planar circuits with many series components and fewer nodes.
*   Use **Nodal Analysis** for circuits with fewer nodes and many parallel components.

**Textbook References:**
*   The comparative discussions on analysis techniques are a hallmark of good circuit theory books like Van Valkenburg and Sudhakar & Palli. They often provide guidance on choosing the most efficient method.

## 7. Practice Questions

**Question 1:**
For the circuit shown below, use the Superposition Theorem to find the current $I$ flowing through the 5 $\Omega$ resistor. (Assume appropriate component values and a circuit diagram).

*(Example circuit structure: A circuit with a 10V independent voltage source, a 2A independent current source, and resistors including a 5 $\Omega$ resistor. All elements are linear.)*

**Solution Strategy:**
1.  **Case 1:** Activate the 10V source, deactivate the 2A source (replace with open circuit). Calculate $I$ (let's call it $I_1$).
2.  **Case 2:** Activate the 2A source, deactivate the 10V source (replace with short circuit). Calculate $I$ (let's call it $I_2$).
3.  **Total:** $I = I_1 + I_2$.

---

**Question 2:**
In the circuit below, find the voltage $V_{ab}$ across the 2 $\Omega$ resistor using the Superposition Theorem. The circuit contains a 12V independent voltage source and a dependent voltage source with a value of $3V_x$, where $V_x$ is the voltage across the 4 $\Omega$ resistor.

*(Example circuit structure: A circuit with a 12V source, a dependent source $3V_x$, and resistors. $V_x$ is the voltage across a 4 $\Omega$ resistor. We need to find $V_{ab}$ across a 2 $\Omega$ resistor.)*

**Solution Strategy:**
1.  **Case 1:** Activate the 12V source. The dependent source $3V_x$ remains active. Calculate $V_x$ and then $V_{ab}$ due to the 12V source. Let this be $V_{ab1}$.
2.  **Case 2:** Deactivate the 12V source (replace with short circuit). The dependent source $3V_x$ remains active. Calculate $V_x$ and then $V_{ab}$ due to the dependent source. Let this be $V_{ab2}$.
3.  **Total:** $V_{ab} = V_{ab1} + V_{ab2}$.

---

**Question 3:**
State the conditions under which the Superposition Theorem can be applied. Can it be used to calculate the power dissipated in a resistor when there are multiple sources? Explain why or why not.

**Answer:**
The Superposition Theorem can be applied to linear circuits containing multiple independent sources. It cannot be used to directly calculate power because power is a non-linear function of voltage and current ($P \propto V^2$ or $P \propto I^2$). The sum of individual powers (calculated from individual source contributions) is not equal to the total power. To find the total power, one must first find the total voltage or current using Superposition and then calculate the power.

---

**Answers to Practice Questions (Conceptual Outline):**
*   **Q1:** You would perform two circuit analyses. In the first, only the voltage source is active. In the second, only the current source is active. Then, sum the results.
*   **Q2:** Similar to Q1, but the dependent source's value changes in each case based on the controlling voltage $V_x$. The dependent source is *never* deactivated.
*   **Q3:** Answer provided above.

## 8. Important Points to Remember

*   **Linearity is Key:** Superposition only works for linear circuits.
*   **Independent Sources:** Only deactivates *independent* sources.
*   **Dependent Sources Stay:** Dependent sources remain active and their controlling variables are determined by the currently active independent source.
*   **Short/Open Circuit:** Voltage sources become short circuits; current sources become open circuits when deactivated.
*   **Algebraic Sum:** Remember to sum contributions algebraically, considering polarities and directions.
*   **Power is Non-Linear:** Superposition cannot be used for direct power calculation.
