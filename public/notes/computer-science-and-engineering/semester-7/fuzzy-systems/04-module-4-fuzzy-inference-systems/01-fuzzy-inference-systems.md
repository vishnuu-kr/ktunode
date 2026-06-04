---
title: "Fuzzy Inference Systems :-"
subject: "FUZZY SYSTEMS"
module: "Module 4: Fuzzy Inference Systems :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c4c5"
status: "completed"
scrapedAt: "2026-05-20T17:06:19.516Z"
---
# Fuzzy Systems - Module 4: Fuzzy Inference Systems

---

## Introduction to Fuzzy Inference Systems (FIS)

Fuzzy Inference Systems (FIS) are the core of fuzzy logic applications. They are computational systems that use fuzzy logic to make decisions based on imprecise or vague information. FIS mimics human reasoning by using linguistic rules and fuzzy sets to transform inputs into outputs.

---

### 1. Understanding the Role and Components of a Fuzzy Inference System

**Learning Outcome:** Understand the role and components of a fuzzy inference system.

**Key Concepts:**

*   **Role of FIS:** To model complex, nonlinear systems where precise mathematical models are difficult or impossible to derive. They are particularly useful for systems involving human expertise, subjective judgments, and imprecise measurements.
*   **Components of a FIS:** A typical fuzzy inference system consists of the following core components:
    1.  **Fuzzification Module:** Converts crisp (numerical) input values into fuzzy sets (linguistic terms) using membership functions.
    2.  **Rule Base (Knowledge Base):** Contains a collection of IF-THEN fuzzy rules that represent the expert knowledge or desired system behavior.
    3.  **Inference Engine (Decision-Making Unit):** Applies the fuzzy rules to the fuzzified inputs to derive fuzzy outputs.
    4.  **Defuzzification Module:** Converts the fuzzy output sets back into a crisp (numerical) output value.

**Diagrammatic Representation (Conceptual):**

```
Crisp Input 1 ---> Fuzzification ---> Fuzzy Input 1
                                        |
Crisp Input 2 ---> Fuzzification ---> Fuzzy Input 2
                                        |
                                  +--------------+
                                  | Rule Base    |
                                  | (IF-THEN Rules)|
                                  +--------------+
                                        |
                                  +--------------+
                                  | Inference    |
                                  | Engine       |
                                  +--------------+
                                        |
                                  Fuzzy Output
                                        |
                                  +--------------+
                                  | Defuzzification|
                                  +--------------+
                                        |
                                    Crisp Output
```

---

### 2. Fuzzyfication and Defuzzification Processes

**Learning Outcome:** Explain the fuzzification and defuzzification processes, including the different methods used.

#### 2.1 Fuzzification Process

**Key Concepts:**

*   **Purpose:** To map crisp input values to linguistic variables, representing them as degrees of membership in fuzzy sets.
*   **Steps:**
    1.  **Input Crisp Value:** A precise numerical input (e.g., temperature = 25°C).
    2.  **Membership Functions (MFs):** Defined for each linguistic term of a linguistic variable (e.g., "Cold," "Warm," "Hot" for temperature). MFs assign a degree of membership (between 0 and 1) to each crisp input value for each fuzzy set.
    3.  **Fuzzy Input Representation:** The crisp input is represented as a set of membership degrees for each relevant fuzzy set.

**Example:**

*   **Linguistic Variable:** Temperature
*   **Fuzzy Sets:** Cold, Warm, Hot
*   **Membership Functions:**
    *   Cold: $\mu_{Cold}(x)$
    *   Warm: $\mu_{Warm}(x)$
    *   Hot: $\mu_{Hot}(x)$
*   **Crisp Input:** Temperature = 25°C
*   **Fuzzification Result:** Let's assume:
    *   $\mu_{Cold}(25) = 0.1$
    *   $\mu_{Warm}(25) = 0.7$
    *   $\mu_{Hot}(25) = 0.0$
    *   So, 25°C is 10% Cold and 70% Warm.

**Common Membership Functions:**

*   **Triangular:** Defined by three points (left base, peak, right base).
*   **Trapezoidal:** Defined by four points (left base, left top, right top, right base).
*   **Gaussian:** Defined by mean and standard deviation, providing a smooth bell curve.
*   **Sigmoidal:** S-shaped curve, often used for unbounded variables.

#### 2.2 Defuzzification Process

**Key Concepts:**

*   **Purpose:** To convert the aggregated fuzzy output sets (derived from the inference engine) into a single, crisp output value.
*   **Need for Defuzzification:** Fuzzy outputs are typically fuzzy sets representing a range of possibilities. A crisp output is usually required for controlling a physical system.
*   **Common Methods:**
    1.  **Centroid of Area (CoA) / Center of Gravity (CoG):**
        *   **Description:** Calculates the "center of mass" of the aggregated fuzzy output set. This is the most common and generally preferred method.
        *   **Formula:**
            $$ \text{Crisp Output} = \frac{\sum_{i} \mu_{output\_i} \cdot x_i}{\sum_{i} \mu_{output\_i}} $$
            Where $\mu_{output\_i}$ is the membership degree of the output fuzzy set at value $x_i$. For continuous functions, it involves integration:
            $$ \text{Crisp Output} = \frac{\int_{-\infty}^{\infty} \mu_{out}(x) \cdot x \, dx}{\int_{-\infty}^{\infty} \mu_{out}(x) \, dx} $$
    2.  **Bisector of Area (BoA) / Center of Largest Area (CoLA):**
        *   **Description:** Finds the point where the area under the aggregated fuzzy output set is divided into two equal halves.
    3.  **Mean of Maxima (MoM):**
        *   **Description:** Calculates the average of all output values that have the maximum membership degree.
        *   **Formula:**
            $$ \text{Crisp Output} = \frac{\sum_{i} x_i \text{ such that } \mu_{out}(x_i) = \max(\mu_{out}(x))}{\text{Number of } x_i \text{ with max membership}} $$
    4.  **Smallest of Maxima (SoM):**
        *   **Description:** Takes the smallest output value that has the maximum membership degree.
    5.  **Largest of Maxima (LoM):**
        *   **Description:** Takes the largest output value that has the maximum membership degree.

**Example (CoA):**

Suppose the aggregated fuzzy output for "Fan Speed" is a combination of "Medium" and "Fast" fuzzy sets. Let's say the output membership function is:
*   $\mu_{Medium}(x)$: Triangular, peak at 50, bases at 30 and 70.
*   $\mu_{Fast}(x)$: Triangular, peak at 80, bases at 60 and 100.

The inference engine might yield an aggregated fuzzy set that is the union of these. For simplicity, let's consider a simplified aggregated fuzzy output shape, perhaps a single fuzzy set.
Assume the aggregated output is a fuzzy set with a shape where we can pick representative points and their membership degrees:

| Output Value (Fan Speed %) | Membership Degree |
| :------------------------- | :---------------- |
| 30                         | 0.2               |
| 50                         | 0.8               |
| 70                         | 0.4               |
| 80                         | 0.6               |
| 90                         | 0.3               |

Using CoA (approximated with discrete points):
$$ \text{Crisp Output} = \frac{(0.2 \times 30) + (0.8 \times 50) + (0.4 \times 70) + (0.6 \times 80) + (0.3 \times 90)}{0.2 + 0.8 + 0.4 + 0.6 + 0.3} $$
$$ \text{Crisp Output} = \frac{6 + 40 + 28 + 48 + 27}{2.3} = \frac{149}{2.3} \approx 64.78\% $$

---

### 3. Fuzzy Rule Base and Inference Engine

**Learning Outcome:** Describe the fuzzy rule base and the working of the inference engine.

#### 3.1 Fuzzy Rule Base

**Key Concepts:**

*   **Structure:** A collection of IF-THEN rules that define the fuzzy logic system's behavior.
*   **Linguistic Variables:** Rules operate on linguistic variables (e.g., Temperature, Humidity, Speed).
*   **Linguistic Terms:** Fuzzy sets associated with linguistic variables (e.g., Cold, Warm, Fast, Slow).
*   **Antecedent (IF part):** Consists of one or more fuzzy propositions connected by fuzzy logical operators (AND, OR).
*   **Consequent (THEN part):** Specifies the output linguistic term(s) or a control action.
*   **Fuzzy Logical Operators:**
    *   **AND:** Typically implemented using `min` (t-norm: $\mu_{A \cap B}(x) = \min(\mu_A(x), \mu_B(x))$) or `product` (t-norm: $\mu_{A \cap B}(x) = \mu_A(x) \cdot \mu_B(x)$).
    *   **OR:** Typically implemented using `max` (t-conorm: $\mu_{A \cup B}(x) = \max(\mu_A(x), \mu_B(x))$) or `probabilistic OR` (t-conorm: $\mu_{A \cup B}(x) = \mu_A(x) + \mu_B(x) - \mu_A(x) \cdot \mu_B(x)$).
    *   **NOT:** Typically implemented as complement (e.g., $\mu_{\neg A}(x) = 1 - \mu_A(x)$).

**Example Rule Base:**

**System:** Fan Speed Control based on Room Temperature.

*   **Input Linguistic Variable:** Temperature (with fuzzy sets: Cold, Warm, Hot)
*   **Output Linguistic Variable:** Fan Speed (with fuzzy sets: Slow, Medium, Fast)

**Rules:**

1.  **IF** Temperature **IS** Cold **THEN** Fan Speed **IS** Slow.
2.  **IF** Temperature **IS** Warm **THEN** Fan Speed **IS** Medium.
3.  **IF** Temperature **IS** Hot **THEN** Fan Speed **IS** Fast.

#### 3.2 Inference Engine

**Key Concepts:**

*   **Purpose:** To evaluate the fuzzy rules based on the fuzzified inputs and produce fuzzy outputs for each rule.
*   **Process:**
    1.  **Rule Evaluation (Antecedent Firing):**
        *   For each rule, the membership degrees of the fuzzified inputs are combined using the AND operator (usually `min` or `product`) to determine the "firing strength" or "truth value" of the antecedent.
        *   **Example Rule 1:** `IF Temperature IS Warm THEN Fan Speed IS Medium`. If Temperature = 25°C, and $\mu_{Warm}(25) = 0.7$, then the firing strength of this rule is 0.7.
    2.  **Consequent Modification (Implication):**
        *   The firing strength of the antecedent is used to modify the membership function of the consequent fuzzy set. This is often done by **clipping** or **scaling** the consequent's membership function.
        *   **Clipping (Mamdani-style Implication):** The membership function of the consequent is clipped at the level of the firing strength.
            *   $\mu'_{consequent}(x) = \min(\text{firing strength}, \mu_{consequent}(x))$
        *   **Scaling (Sugeno-style Implication):** The consequent is a linear function of the inputs, or a constant.
            *   $y = a + bx$ or $y = c$
    3.  **Aggregation (Output fuzzy set combination):**
        *   The modified consequent fuzzy sets from all fired rules are combined into a single fuzzy output set.
        *   **Aggregation Operators:** Typically `max` (union) or probabilistic OR. This creates the overall fuzzy output set.

**Example (Mamdani-style Inference):**

Using the rules and example from Section 3.1 and 2.1:

*   **Crisp Input:** Temperature = 25°C
*   **Fuzzified Inputs:** $\mu_{Cold}(25) = 0.1$, $\mu_{Warm}(25) = 0.7$, $\mu_{Hot}(25) = 0.0$

**Rule 1:** IF Temp IS Cold THEN Fan Speed IS Slow.
*   Firing Strength = $\mu_{Cold}(25) = 0.1$.
*   Modified Consequent (Slow): Clipped at 0.1.

**Rule 2:** IF Temp IS Warm THEN Fan Speed IS Medium.
*   Firing Strength = $\mu_{Warm}(25) = 0.7$.
*   Modified Consequent (Medium): Clipped at 0.7.

**Rule 3:** IF Temp IS Hot THEN Fan Speed IS Fast.
*   Firing Strength = $\mu_{Hot}(25) = 0.0$.
*   Modified Consequent (Fast): Clipped at 0.0 (effectively no output for Fast).

**Aggregation:** The modified membership functions for "Slow" and "Medium" are aggregated (e.g., using `max`) to form the final fuzzy output set for Fan Speed. This aggregated set will then be defuzzified.

---

### 4. Types of Fuzzy Inference Systems

**Learning Outcome:** Differentiate between Mamdani and Sugeno type fuzzy inference systems.

**Key Differences:**

| Feature         | Mamdani FIS                                     | Sugeno FIS                                        |
| :-------------- | :---------------------------------------------- | :------------------------------------------------ |
| **Consequent**  | Fuzzy Sets (linguistic terms)                   | Linear functions of input variables or constants  |
| **Implication** | Clipping of consequent MFs                      | Scaling of consequent MFs/functions             |
| **Aggregation** | Aggregation of modified consequent MFs          | Aggregation of consequent functions/outputs       |
| **Defuzzification** | Typically requires defuzzification (e.g., CoA) | Can sometimes skip defuzzification if output is crisp. |
| **Interpretability** | High, due to linguistic consequents           | Lower, due to mathematical consequents          |
| **Computational Cost** | Higher, due to fuzzy set manipulations        | Lower, especially with constant consequents       |
| **Applications** | Human-friendly control systems, decision support | Control systems, system identification, regression |

#### 4.1 Mamdani Fuzzy Inference System

*   **Description:** The most common type. Fuzzy rules have fuzzy sets in their consequents. The inference process involves clipping the consequent fuzzy sets by the firing strength of the antecedent and then aggregating these clipped fuzzy sets.
*   **Example Rule:** IF Temperature IS Hot AND Humidity IS High THEN Fan Speed IS Fast.
*   **Output:** A fuzzy set representing "Fast."

#### 4.2 Sugeno Fuzzy Inference System

*   **Description:** Rules have crisp functions (usually linear) of the input variables or crisp constants in their consequents. This simplifies the output of the inference process.
*   **Types of Sugeno:**
    *   **Zero-order Sugeno:** Consequent is a constant.
        *   **Example Rule:** IF Temperature IS Hot THEN Fan Speed IS 90.
    *   **First-order Sugeno:** Consequent is a linear function of inputs.
        *   **Example Rule:** IF Temperature IS Hot THEN Fan Speed IS $a \cdot \text{Temperature} + b$.
*   **Inference Process:**
    1.  Antecedent is evaluated as usual.
    2.  The firing strength of the antecedent is used to weight the consequent function's output.
    3.  The final output is a weighted average of the consequent function outputs.
*   **Defuzzification:** Often implicit. If all consequents are constants (Zero-order Sugeno), the output is already crisp. If consequents are linear functions, the final output is a weighted sum of these functions, which can be computed directly.

**Example of Sugeno Inference (Zero-order):**

*   **Rules:**
    1.  IF Temp IS Warm THEN Fan Speed IS 50.
    2.  IF Temp IS Hot THEN Fan Speed IS 80.
*   **Input:** Temp = 25°C. Assume $\mu_{Warm}(25) = 0.7$ and $\mu_{Hot}(25) = 0.3$.
*   **Inference:**
    *   Rule 1 output = 50.
    *   Rule 2 output = 80.
*   **Defuzzification (Weighted Average):**
    $$ \text{Crisp Output} = \frac{(0.7 \times 50) + (0.3 \times 80)}{0.7 + 0.3} = \frac{35 + 24}{1} = 59 $$

---

### 5. Fuzzy Logic Control Systems

**Learning Outcome:** Understand the application of fuzzy inference systems in fuzzy logic control.

**Key Concepts:**

*   **Purpose:** To design controllers that can handle nonlinearities, uncertainties, and human-like decision-making.
*   **Structure of a Fuzzy Logic Controller (FLC):**
    *   Similar to a general FIS, but inputs are typically system states (e.g., error, change in error) and outputs are control signals (e.g., motor speed, valve opening).
*   **Design Steps for an FLC:**
    1.  **Define Input and Output Variables:** Identify the system variables to be controlled and the control signals.
    2.  **Fuzzification:** Define the linguistic terms and membership functions for each variable.
    3.  **Rule Base Design:** Create the IF-THEN rules based on expert knowledge or desired behavior. This is the most crucial step.
    4.  **Inference Engine Selection:** Choose between Mamdani or Sugeno, and select appropriate operators.
    5.  **Defuzzification:** Choose a defuzzification method if using Mamdani.
    6.  **Tuning:** Adjust membership functions and rules to achieve desired performance (stability, speed, accuracy).

**Example: Automatic Washing Machine Controller**

*   **Inputs:**
    *   Dirt Level (e.g., Low, Medium, High)
    *   Fabric Type (e.g., Cotton, Synthetics, Delicates)
*   **Output:**
    *   Washing Time (e.g., Short, Medium, Long)
    *   Washing Intensity (e.g., Gentle, Normal, Strong)

**Sample Rules:**

1.  **IF** Dirt Level **IS** High **AND** Fabric Type **IS** Cotton **THEN** Washing Time **IS** Long **AND** Washing Intensity **IS** Strong.
2.  **IF** Dirt Level **IS** Low **AND** Fabric Type **IS** Synthetics **THEN** Washing Time **IS** Short **AND** Washing Intensity **IS** Gentle.
3.  **IF** Dirt Level **IS** Medium **AND** Fabric Type **IS** Delicates **THEN** Washing Time **IS** Medium **AND** Washing Intensity **IS** Gentle.

---

## Practice Questions and Exercises

**Instructions:** Attempt the following questions to test your understanding.

**Question 1 (Multiple Choice):**
Which component of a fuzzy inference system converts crisp input values into fuzzy sets?
a) Inference Engine
b) Rule Base
c) Fuzzification Module
d) Defuzzification Module

**Question 2 (Fill in the Blanks):**
The most common method for defuzzification is _______________, which calculates the __________ of the aggregated fuzzy output set.

**Question 3 (Short Answer):**
List the main components of a fuzzy inference system.

**Question 4 (Conceptual):**
Explain the fundamental difference between Mamdani and Sugeno fuzzy inference systems regarding their rule consequents.

**Question 5 (Problem Solving - Mamdani Style):**
Consider a fuzzy system with one input, "Error," which can be "Negative," "Zero," or "Positive." The output is "Control Signal," which can be "Decrease," "Maintain," or "Increase."

*   **Input Error Values:**
    *   Negative: Triangular MF, peak at -2, bases at -4 and 0.
    *   Zero: Triangular MF, peak at 0, bases at -2 and 2.
    *   Positive: Triangular MF, peak at 2, bases at 0 and 4.
*   **Output Control Signal Values:**
    *   Decrease: Triangular MF, peak at -1, bases at -2 and 0.
    *   Maintain: Triangular MF, peak at 0, bases at -1 and 1.
    *   Increase: Triangular MF, peak at 1, bases at 0 and 2.

*   **Rules:**
    1.  IF Error IS Negative THEN Control Signal IS Decrease.
    2.  IF Error IS Zero THEN Control Signal IS Maintain.
    3.  IF Error IS Positive THEN Control Signal IS Increase.

Let the crisp input Error be **-1.5**. Assume the `min` operator for AND and `max` for aggregation.

**(a)** Fuzzify the input Error = -1.5. Calculate the membership degrees for "Negative," "Zero," and "Positive."
**(b)** Determine the firing strength for each rule.
**(c)** Describe how the output fuzzy sets for "Decrease" and "Maintain" would be modified (implication). (No need to draw the MFs, just describe the process).
**(d)** How would the final fuzzy output set be formed?

**Question 6 (Problem Solving - Sugeno Style):**
Consider a Sugeno-type fuzzy controller with one input, "Speed," and one output, "Power."

*   **Input Speed Values:**
    *   Low: Trapezoidal MF, bases at 0, 5, 10, 15.
    *   High: Trapezoidal MF, bases at 10, 15, 20, 25.
*   **Rules:**
    1.  IF Speed IS Low THEN Power = 20. (Zero-order Sugeno)
    2.  IF Speed IS High THEN Power = 80. (Zero-order Sugeno)

Let the crisp input Speed be **12**.

**(a)** Fuzzify the input Speed = 12. Calculate the membership degrees for "Low" and "High."
**(b)** Calculate the crisp output Power using the Sugeno inference method (weighted average).

---

## Answers to Practice Questions

**Answer 1:**
c) Fuzzification Module

**Answer 2:**
Centroid of Area (CoA) / Center of Gravity (CoG), center

**Answer 3:**
The main components are:
1.  Fuzzification Module
2.  Rule Base (Knowledge Base)
3.  Inference Engine (Decision-Making Unit)
4.  Defuzzification Module

**Answer 4:**
*   **Mamdani FIS:** The consequents of the fuzzy rules are fuzzy sets (linguistic terms). The implication process clips or scales these fuzzy sets.
*   **Sugeno FIS:** The consequents of the fuzzy rules are linear functions of the input variables or constants. This makes the output of the inference process more direct and often avoids explicit defuzzification.

**Answer 5:**

**(a) Fuzzify Error = -1.5:**
Let's assume the triangular MFs are defined by their peaks and bases.
*   **Negative:** Peak at -2, bases at -4 and 0.
    *   The point -1.5 is between the peak (-2) and the right base (0).
    *   The slope of the right side of the "Negative" MF (from peak to right base) is $(0 - 1) / (0 - (-2)) = -1/2$.
    *   $\mu_{Negative}(-1.5) = 1 + (-1/2) \times (-1.5 - (-2)) = 1 + (-1/2) \times 0.5 = 1 - 0.25 = 0.75$.
*   **Zero:** Peak at 0, bases at -2 and 2.
    *   The point -1.5 is between the left base (-2) and the peak (0).
    *   The slope of the left side of the "Zero" MF (from left base to peak) is $(1 - 0) / (0 - (-2)) = 1/2$.
    *   $\mu_{Zero}(-1.5) = 0 + (1/2) \times (-1.5 - (-2)) = 0 + (1/2) \times 0.5 = 0.25$.
*   **Positive:** Peak at 2, bases at 0 and 4.
    *   The point -1.5 is outside the support of this MF (left of the left base 0).
    *   $\mu_{Positive}(-1.5) = 0$.

    **Fuzzified Error = -1.5:** $\mu_{Negative} = 0.75$, $\mu_{Zero} = 0.25$, $\mu_{Positive} = 0$.

**(b) Firing Strength for each rule:**
*   **Rule 1 (IF Error IS Negative THEN Control Signal IS Decrease):**
    *   Antecedent: Error IS Negative.
    *   Firing Strength = $\mu_{Negative}(-1.5) = 0.75$.
*   **Rule 2 (IF Error IS Zero THEN Control Signal IS Maintain):**
    *   Antecedent: Error IS Zero.
    *   Firing Strength = $\mu_{Zero}(-1.5) = 0.25$.
*   **Rule 3 (IF Error IS Positive THEN Control Signal IS Increase):**
    *   Antecedent: Error IS Positive.
    *   Firing Strength = $\mu_{Positive}(-1.5) = 0$.

**(c) Modified Output Fuzzy Sets:**
*   **Rule 1 Output:** The "Decrease" fuzzy set's membership function will be **clipped** at the firing strength of 0.75. This means the new membership function for "Decrease" will be $\mu'_{Decrease}(x) = \min(0.75, \mu_{Decrease}(x))$.
*   **Rule 2 Output:** The "Maintain" fuzzy set's membership function will be **clipped** at the firing strength of 0.25. This means the new membership function for "Maintain" will be $\mu'_{Maintain}(x) = \min(0.25, \mu_{Maintain}(x))$.
*   **Rule 3 Output:** Since the firing strength is 0, the "Increase" fuzzy set will not contribute to the output.

**(d) Formation of Final Fuzzy Output Set:**
The final fuzzy output set is formed by the **aggregation** (union) of the modified output fuzzy sets from all the rules. In this case, it would be the union of the clipped "Decrease" set and the clipped "Maintain" set. This is typically done using the `max` operator: $\mu_{Final\_Output}(x) = \max(\mu'_{Decrease}(x), \mu'_{Maintain}(x))$.

**Answer 6:**

**(a) Fuzzify Speed = 12:**
*   **Low:** Trapezoidal MF, bases at 0, 5, 10, 15.
    *   The point 12 is on the right descending slope between 10 and 15.
    *   The slope is $(0 - 1) / (15 - 10) = -1/5$.
    *   $\mu_{Low}(12) = 1 + (-1/5) \times (12 - 10) = 1 + (-1/5) \times 2 = 1 - 0.4 = 0.6$.
*   **High:** Trapezoidal MF, bases at 10, 15, 20, 25.
    *   The point 12 is on the left ascending slope between 10 and 15.
    *   The slope is $(1 - 0) / (15 - 10) = 1/5$.
    *   $\mu_{High}(12) = 0 + (1/5) \times (12 - 10) = 0 + (1/5) \times 2 = 0.4$.

    **Fuzzified Speed = 12:** $\mu_{Low} = 0.6$, $\mu_{High} = 0.4$.

**(b) Calculate Crisp Output Power (Sugeno):**
*   **Rule 1:** IF Speed IS Low THEN Power = 20.
    *   Firing Strength = $\mu_{Low}(12) = 0.6$.
    *   Output from rule 1 = 20.
*   **Rule 2:** IF Speed IS High THEN Power = 80.
    *   Firing Strength = $\mu_{High}(12) = 0.4$.
    *   Output from rule 2 = 80.

*   **Sugeno Weighted Average:**
    $$ \text{Crisp Output Power} = \frac{(\text{Firing Strength}_1 \times \text{Output}_1) + (\text{Firing Strength}_2 \times \text{Output}_2)}{\text{Firing Strength}_1 + \text{Firing Strength}_2} $$
    $$ \text{Crisp Output Power} = \frac{(0.6 \times 20) + (0.4 \times 80)}{0.6 + 0.4} $$
    $$ \text{Crisp Output Power} = \frac{12 + 32}{1.0} = \frac{44}{1.0} = 44 $$

---

## Important Points to Remember

*   Fuzzy Inference Systems are powerful tools for modeling complex systems using linguistic rules.
*   The **Fuzzification** module translates crisp inputs into linguistic terms with degrees of membership.
*   The **Rule Base** holds the expert knowledge in the form of IF-THEN rules.
*   The **Inference Engine** applies the rules to the fuzzified inputs to derive fuzzy outputs.
*   **Mamdani** FIS use fuzzy sets in consequents and involve clipping/scaling.
*   **Sugeno** FIS use mathematical functions (or constants) in consequents, simplifying computation.
*   **Defuzzification** converts the aggregated fuzzy output back into a single, crisp value, with **Centroid of Area (CoA)** being the most common method.
*   Fuzzy Logic Controllers (FLCs) are a direct application of FIS for control purposes, where inputs are system states and outputs are control signals.
*   The quality of an FLC heavily depends on the design of its membership functions and the rule base.
*   Tuning of membership functions and rules is often an iterative process to achieve desired performance.

---
