---
title: "Fuzzy Controllers -Mamdani FIS, Larsen Model."
subject: "FUZZY SYSTEMS"
module: "Module 4: Fuzzy Inference Systems :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c4c8"
status: "completed"
scrapedAt: "2026-05-20T17:06:21.672Z"
---
# Fuzzy Systems: Module 4 - Fuzzy Inference Systems

## Topic: Fuzzy Controllers - Mamdani FIS, Larsen Model

This module delves into the practical application of fuzzy logic in building controllers. We will explore two prominent types of fuzzy inference systems: Mamdani FIS and the Larsen Model, understanding their structure, operation, and how they translate fuzzy rules into control actions.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

1.  **Describe the fundamental architecture of a fuzzy controller.**
2.  **Explain the Mamdani Fuzzy Inference System (FIS) and its components.**
3.  **Illustrate the steps involved in designing and operating a Mamdani FIS.**
4.  **Discuss the advantages and disadvantages of Mamdani FIS.**
5.  **Describe the Larsen Fuzzy Inference System (FIS) and its properties.**
6.  **Compare and contrast Mamdani and Larsen FIS.**
7.  **Apply fuzzy controller concepts to solve simple control problems.**

---

### 1. Fundamental Architecture of a Fuzzy Controller

A fuzzy controller is a system that uses fuzzy logic to make decisions and control a process or system. Its core structure typically consists of four main components:

*   **Fuzzification:** This process converts crisp (precise) input values from the environment into fuzzy sets using membership functions.
*   **Rule Base:** This contains a collection of fuzzy IF-THEN rules that capture the expertise of a human operator or domain expert. These rules relate fuzzy input sets to fuzzy output sets.
*   **Inference Engine:** This component applies the fuzzy rules to the fuzzified inputs to derive fuzzy output sets. It determines the degree to which each rule is activated.
*   **Defuzzification:** This process converts the aggregated fuzzy output set back into a crisp, actionable control signal that can be applied to the system being controlled.

**Diagrammatic Representation:**

```
+--------------+     +------------+     +------------------+     +----------------+
| Crisp Input  | --> | Fuzzifier  | --> | Inference Engine | --> | Defuzzifier    | --> Crisp Output
+--------------+     +------------+     +------------------+     +----------------+
                               ^
                               |
                         +-----------+
                         | Rule Base |
                         +-----------+
```

---

### 2. Mamdani Fuzzy Inference System (FIS)

The Mamdani FIS is the most widely used and understood type of fuzzy inference system. It was developed by Ebrahim Mamdani in the early 1970s.

**Key Characteristics:**

*   **Output Membership Functions:** The consequent (THEN part) of the fuzzy rules have associated membership functions.
*   **Defuzzification:** It typically employs methods like Centroid (Center of Gravity), Mean of Maxima, or Bisector to obtain a crisp output.
*   **Output is a Fuzzy Set:** The result of the inference process for each rule is a fuzzy set. These fuzzy sets are then aggregated and defuzzified.

#### Components of a Mamdani FIS:

*   **Fuzzifier:**
    *   **Input Variables:** The measurable quantities from the system (e.g., temperature, speed, error).
    *   **Membership Functions (MFs):** Define the degree to which an input value belongs to a linguistic term (e.g., "Cold," "Warm," "Hot" for temperature). Common shapes include triangular, trapezoidal, and Gaussian.
*   **Rule Base:**
    *   **Linguistic Variables:** Variables that represent fuzzy concepts (e.g., "Temperature").
    *   **Linguistic Terms:** Fuzzy sets associated with linguistic variables (e.g., "Cold," "Medium," "Hot").
    *   **Fuzzy IF-THEN Rules:** Connect input linguistic terms to output linguistic terms.
        *   **Structure:** IF (antecedent) THEN (consequent)
        *   **Example:**
            *   IF Temperature is **Cold** AND Pressure is **Low** THEN Fan_Speed is **Slow**
            *   IF Temperature is **Hot** THEN Fan_Speed is **Fast**
*   **Inference Engine:**
    *   **Implication:** Determines the fuzzy output set for each rule based on the antecedent's truth value and the rule's consequent MF. Common implication methods are Min (Mamdani) and Product.
        *   **Min (Mamdani):** The output MF is truncated at the level of the antecedent's activation.
        *   **Product:** The output MF is scaled by the antecedent's activation.
    *   **Aggregation:** Combines the fuzzy outputs from all activated rules into a single fuzzy set. Common aggregation operators are Max (Union) and Sum.
*   **Defuzzifier:**
    *   **Defuzzification Methods:**
        *   **Centroid (Center of Gravity - COG):** Calculates the "center" of the aggregated fuzzy output set. This is the most common method.
        *   **Mean of Maxima (MOM):** Calculates the average of the values that have the highest membership degree.
        *   **Bisector:** Finds the value that divides the area of the aggregated fuzzy set into two equal halves.

---

### 3. Illustrating the Steps Involved in Designing and Operating a Mamdani FIS

Let's consider a simple example: **controlling the speed of a fan based on temperature.**

**System:** Fan speed control.
**Input:** Temperature (Crisp value, e.g., 25°C).
**Output:** Fan Speed (Crisp value to control the motor).

**Step 1: Define Linguistic Variables and Membership Functions:**

*   **Input Variable: Temperature**
    *   **Linguistic Terms:** Cold, Medium, Hot
    *   **Membership Functions:**
        *   `Cold`: Triangular, peaking at 0°C, width from 0°C to 20°C.
        *   `Medium`: Trapezoidal, covering 10°C to 30°C, plateau between 15°C and 25°C.
        *   `Hot`: Triangular, peaking at 40°C, width from 20°C to 40°C.
    *(Assume a relevant range for temperature, e.g., 0°C to 40°C)*

*   **Output Variable: Fan Speed**
    *   **Linguistic Terms:** Slow, Medium, Fast
    *   **Membership Functions:**
        *   `Slow`: Triangular, peaking at 0 RPM, width from 0 RPM to 50 RPM.
        *   `Medium`: Trapezoidal, covering 25 RPM to 75 RPM, plateau between 35 RPM and 65 RPM.
        *   `Fast`: Triangular, peaking at 100 RPM, width from 50 RPM to 100 RPM.
    *(Assume a relevant range for fan speed, e.g., 0 RPM to 100 RPM)*

**Step 2: Define the Rule Base:**

*   **Rule 1:** IF Temperature is **Cold** THEN Fan_Speed is **Slow**.
*   **Rule 2:** IF Temperature is **Medium** THEN Fan_Speed is **Medium**.
*   **Rule 3:** IF Temperature is **Hot** THEN Fan_Speed is **Fast**.

**Step 3: Fuzzification (Example: Input Temperature = 25°C):**

*   Determine the degree of membership of 25°C in each input linguistic term.
    *   `μ_Cold(25)`: Let's say this is 0 (or very small, depending on MF shape).
    *   `μ_Medium(25)`: Based on the trapezoidal MF, this would be 1.
    *   `μ_Hot(25)`: Let's say this is 0.5 (if the Hot MF has a non-zero value at 25°C).

**Step 4: Inference Engine:**

*   **Implication (using Min for Mamdani):**
    *   **Rule 1:** `min(μ_Cold(25), ...)` (antecedent is only `μ_Cold(25)`). Output for Rule 1 is `min(0, ...)` = 0. The `Slow` MF is truncated at 0, meaning its contribution is nil.
    *   **Rule 2:** `min(μ_Medium(25), ...)` = `min(1, ...)` = 1. The `Medium` output MF is truncated at 1 (effectively, it remains as is).
    *   **Rule 3:** `min(μ_Hot(25), ...)` = `min(0.5, ...)` = 0.5. The `Fast` output MF is truncated at 0.5.

*   **Aggregation (using Max):** Combine the resulting output fuzzy sets from each rule.
    *   The aggregated output fuzzy set is the union of the truncated `Slow` (at level 0), `Medium` (at level 1), and `Fast` (at level 0.5) MFs.

**Step 5: Defuzzification (using Centroid):**

*   Calculate the centroid (COG) of the aggregated fuzzy output set. This involves integrating the membership function of the aggregated output over its domain and dividing by the total area. The result will be a crisp value for Fan Speed (e.g., 60 RPM).

---

### 4. Advantages and Disadvantages of Mamdani FIS

**Advantages:**

*   **Intuitive and Human-Readable:** The IF-THEN rules are easily understood by humans, making it easier to design and validate.
*   **Well-Established and Widely Studied:** Extensive research and practical applications exist for Mamdani FIS.
*   **Good for Control Applications:** The gradual nature of MFs and the defuzzification process provide smooth control actions.
*   **Flexible:** Can handle non-linear systems and complex relationships.
*   **Output Membership Functions:** The explicit output MFs provide a visual representation of the fuzzy output, aiding in understanding and debugging.

**Disadvantages:**

*   **Computationally More Intensive:** Defuzzification, especially using the centroid method, can be computationally demanding for complex systems with many rules or MFs.
*   **Tuning Can Be Challenging:** Determining the appropriate membership functions and rules can require significant trial and error and expert knowledge.
*   **Output is Not Always a Single Value:** The intermediate output is a fuzzy set, requiring defuzzification.

---

### 5. Larsen Fuzzy Inference System (FIS)

The Larsen FIS is a less common but also a valid approach to fuzzy inference. It was proposed by N.R. Larsen.

**Key Characteristics:**

*   **Output is a Crisp Value:** Unlike Mamdani, the output of each rule in a Larsen FIS is a single, crisp value. This crisp value is determined by the antecedent's activation degree and a parameter associated with the consequent.
*   **No Explicit Output Membership Functions:** The consequent of a Larsen rule doesn't have a defined fuzzy set with a membership function in the same way as Mamdani. Instead, it's often represented by a single representative value.
*   **Defuzzification (Implicit):** The aggregation of these crisp output values (weighted by their antecedents' activation) directly yields the final crisp output.

#### Structure of a Larsen FIS:

*   **Fuzzifier:** Same as Mamdani.
*   **Rule Base:**
    *   **Linguistic Variables and Terms:** Same as Mamdani.
    *   **Fuzzy IF-THEN Rules:**
        *   **Structure:** IF (antecedent) THEN output is **Value X**.
        *   **Example:**
            *   IF Temperature is **Cold** THEN Fan_Speed is **20 RPM**.
            *   IF Temperature is **Medium** THEN Fan_Speed is **60 RPM**.
            *   IF Temperature is **Hot** THEN Fan_Speed is **100 RPM**.
*   **Inference Engine:**
    *   **Implication:** The degree of activation of the antecedent is directly applied to the crisp consequent value.
        *   **Method:** Typically, the activation degree of the antecedent is used as a weight.
    *   **Aggregation:** The weighted crisp outputs from all rules are aggregated, typically using a weighted average.
*   **Defuzzifier:** Not explicitly needed as the output is already crisp. The aggregation step produces the final crisp output.

**Example of Larsen FIS Operation:**

Let's use the same fan control example with Larsen FIS.

**Input:** Temperature = 25°C
**Membership Degrees:** `μ_Cold(25) = 0`, `μ_Medium(25) = 1`, `μ_Hot(25) = 0.5`

**Rules:**
*   Rule 1: IF Temperature is **Cold** THEN Fan_Speed is **20 RPM**. (Activation = 0)
*   Rule 2: IF Temperature is **Medium** THEN Fan_Speed is **60 RPM**. (Activation = 1)
*   Rule 3: IF Temperature is **Hot** THEN Fan_Speed is **100 RPM**. (Activation = 0.5)

**Inference (Weighted Average):**

Crisp Output = `(Activation_Rule1 * Output_Rule1 + Activation_Rule2 * Output_Rule2 + Activation_Rule3 * Output_Rule3) / (Activation_Rule1 + Activation_Rule2 + Activation_Rule3)`

Crisp Output = `(0 * 20 + 1 * 60 + 0.5 * 100) / (0 + 1 + 0.5)`
Crisp Output = `(0 + 60 + 50) / 1.5`
Crisp Output = `110 / 1.5`
Crisp Output ≈ `73.33 RPM`

---

### 6. Comparing and Contrasting Mamdani and Larsen FIS

| Feature                 | Mamdani FIS                                     | Larsen FIS                                          |
| :---------------------- | :---------------------------------------------- | :-------------------------------------------------- |
| **Output of Rules**     | Fuzzy sets (with MFs)                           | Crisp values                                        |
| **Defuzzification**     | Explicit step required (e.g., Centroid)         | Implicitly handled by weighted average/aggregation |
| **Rule Consequent**     | Defined by a linguistic term with an MF         | Defined by a single crisp value                     |
| **Intuition/Readability** | High (human-like reasoning)                     | Moderate (more direct mapping)                      |
| **Computational Cost**  | Generally higher due to defuzzification       | Generally lower                                     |
| **Smoothness of Output**| Can be very smooth due to continuous MFs        | Can be less smooth if consequent values are sparse  |
| **Interpretability**    | Good, output MFs show fuzzy reasoning         | Less direct interpretation of fuzzy output          |
| **Implementation**      | More complex but widely available               | Simpler to implement                                |
| **Application Domain**  | Most common in control, expert systems          | Less common, can be used where direct mapping is acceptable |

**Key Differences Summarized:**

The fundamental difference lies in how the output of the rules is represented. Mamdani uses fuzzy sets for the output, requiring defuzzification to get a crisp control signal. Larsen directly assigns crisp values to the output of rules, and the aggregation of these weighted values yields the final crisp output. This makes Larsen FIS computationally simpler but potentially less expressive and smooth than Mamdani FIS.

---

### 7. Applying Fuzzy Controller Concepts to Solve Simple Control Problems

**Practice Question 1:**

Consider a simple fuzzy controller for an air conditioner to adjust the fan speed based on room temperature.

*   **Input:** Room Temperature (°C)
*   **Output:** Fan Speed (Low, Medium, High)

**Membership Functions:**

*   **Temperature:**
    *   `Cold`: Triangular, [-10, 10, 20] (peaks at 10, ranges from -10 to 20)
    *   `Comfortable`: Trapezoidal [15, 20, 25, 30] (plateau between 20 and 25)
    *   `Hot`: Triangular [25, 35, 45] (peaks at 35, ranges from 25 to 45)
*   **Fan Speed:**
    *   `Low`: Triangular [0, 0, 50] (peaks at 0, width 0 to 50)
    *   `Medium`: Trapezoidal [25, 50, 75, 100] (plateau between 50 and 75)
    *   `High`: Triangular [50, 100, 100] (peaks at 100, width 50 to 100)

**Rules:**

1.  IF Temperature is **Cold** THEN Fan_Speed is **Low**.
2.  IF Temperature is **Comfortable** THEN Fan_Speed is **Medium**.
3.  IF Temperature is **Hot** THEN Fan_Speed is **High**.

**Task:**

If the current room temperature is **28°C**, and we are using a **Mamdani FIS** with the **Min** operator for implication and **Max** for aggregation, and **Centroid** for defuzzification:

a)  Calculate the degree of membership for 28°C in each temperature linguistic term.
b)  Determine the fuzzy output set for each rule after implication.
c)  Describe how aggregation would combine these fuzzy sets.
d)  Explain what the Centroid defuzzification method would aim to calculate.

**Answer 1:**

a)  **Membership Degrees for 28°C:**
    *   `μ_Cold(28)`: 0 (28 is outside the range of the Cold MF)
    *   `μ_Comfortable(28)`: For a trapezoidal MF [15, 20, 25, 30], the value at 28 is on the descending side. The slope from 25 to 30 is -1 (from 1 to 0). So, at 28, the value is 1 - (28-25)/5 = 1 - 3/5 = 0.4.
    *   `μ_Hot(28)`: For a triangular MF [25, 35, 45], the value at 28 is on the ascending side. The slope from 25 to 35 is 1 (from 0 to 1). So, at 28, the value is (28-25)/10 = 3/10 = 0.3.

b)  **Fuzzy Output Sets after Implication (Min Operator):**
    *   **Rule 1:** `min(μ_Cold(28), ...)` = `min(0, ...)` = 0. The `Low` MF is truncated at level 0.
    *   **Rule 2:** `min(μ_Comfortable(28), ...)` = `min(0.4, ...)` = 0.4. The `Medium` MF is truncated at level 0.4.
    *   **Rule 3:** `min(μ_Hot(28), ...)` = `min(0.3, ...)` = 0.3. The `High` MF is truncated at level 0.3.

c)  **Aggregation:** The aggregation step (using Max) combines the truncated `Low` MF (at level 0), the truncated `Medium` MF (at level 0.4), and the truncated `High` MF (at level 0.3) into a single fuzzy set. The membership value for any given fan speed will be the maximum of the membership values from these three truncated MFs.

d)  **Centroid Defuzzification:** The Centroid method would calculate the "center of gravity" of this aggregated fuzzy output set. It involves finding the area under the aggregated fuzzy set and then calculating the weighted average of the membership values over the domain of the Fan Speed output variable. This will result in a single crisp value for the fan speed.

---

**Practice Question 2:**

Using the same air conditioner scenario as above, but this time assuming a **Larsen FIS**:

a)  Redefine the rules with crisp output values for Fan Speed (e.g., Low = 30, Medium = 60, High = 90).
b)  Calculate the final crisp fan speed if the temperature is **28°C**.

**Answer 2:**

a)  **Larsen FIS Rules with Crisp Outputs:**
    1.  IF Temperature is **Cold** THEN Fan_Speed is **30**.
    2.  IF Temperature is **Comfortable** THEN Fan_Speed is **60**.
    3.  IF Temperature is **Hot** THEN Fan_Speed is **90**.

b)  **Crisp Fan Speed Calculation (Larsen FIS):**
    From Practice Question 1, we have the membership degrees for 28°C:
    *   `μ_Cold(28) = 0`
    *   `μ_Comfortable(28) = 0.4`
    *   `μ_Hot(28) = 0.3`

    Using the weighted average method for aggregation:

    Crisp Output = `(μ_Cold * Output_Cold + μ_Comfortable * Output_Comfortable + μ_Hot * Output_Hot) / (μ_Cold + μ_Comfortable + μ_Hot)`

    Crisp Output = `(0 * 30 + 0.4 * 60 + 0.3 * 90) / (0 + 0.4 + 0.3)`
    Crisp Output = `(0 + 24 + 27) / 0.7`
    Crisp Output = `51 / 0.7`
    Crisp Output ≈ `72.86`

    So, the crisp fan speed would be approximately 72.86.

---

### Important Points to Remember:

*   **Fuzzy controllers map linguistic rules to crisp control actions.**
*   **Mamdani FIS uses fuzzy sets for rule consequents and requires explicit defuzzification.**
*   **Larsen FIS uses crisp values for rule consequents and implicitly handles defuzzification through weighted aggregation.**
*   **The choice between Mamdani and Larsen often depends on desired interpretability, computational resources, and the smoothness of control required.**
*   **Membership functions and rule base design are critical for the performance of any fuzzy controller.**
*   **Defuzzification methods (Centroid, MOM, Bisector) in Mamdani FIS significantly impact the final crisp output.**
*   **The inference engine (implication and aggregation operators) determines how fuzzy rules are combined.**
