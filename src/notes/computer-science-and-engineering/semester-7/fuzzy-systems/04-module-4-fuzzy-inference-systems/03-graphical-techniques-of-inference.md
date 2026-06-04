---
title: "Graphical Techniques of Inference."
subject: "FUZZY SYSTEMS"
module: "Module 4: Fuzzy Inference Systems :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c4c7"
status: "completed"
scrapedAt: "2026-05-20T17:06:20.974Z"
---
# FUZZY SYSTEMS - Module 4: Fuzzy Inference Systems

## Topic: Graphical Techniques of Inference

This module delves into the practical application of fuzzy logic by exploring how to derive conclusions from fuzzy rules using graphical methods. These techniques provide an intuitive and visual understanding of the fuzzy inference process.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Understand the graphical representation of fuzzy sets and fuzzy rules.**
*   **Describe and apply the graphical interpretation of the implication operator.**
*   **Explain and demonstrate the graphical process of aggregation of fuzzy rules.**
*   **Illustrate and utilize the graphical defuzzification methods.**
*   **Analyze and interpret the output of a fuzzy inference system using graphical techniques.**

---

### 1. Graphical Representation of Fuzzy Sets and Fuzzy Rules

Fuzzy inference systems rely on representing fuzzy sets and the relationships between them (fuzzy rules) in a graphical manner.

#### 1.1 Graphical Representation of Fuzzy Sets

*   **Membership Functions (MFs):** Fuzzy sets are graphically represented by their membership functions. These functions assign a degree of membership (between 0 and 1) to each element in the universe of discourse.
    *   **Common Shapes:** Triangular, Trapezoidal, Gaussian, Sigmoidal.
    *   **Visualization:** The MF is plotted on a 2D graph with the universe of discourse on the x-axis and the degree of membership on the y-axis.

    **Example:** Consider a fuzzy set "Temperature is Cold".
    *   Universe of Discourse: Degrees Celsius (°C) from -20 to 30.
    *   Membership Function: A triangular MF peaking at -10°C with a membership of 1, and dropping to 0 at -20°C and 10°C.

    ```
    Degree of Membership
         ^
         |      / \
         |     /   \
       1 +----*----*----
         |   / \  / \
         |  /   \/   \
       0 +--*----+----*----> Temperature (°C)
          -20    -10    0     10    20    30
    ```

#### 1.2 Graphical Representation of Fuzzy Rules

*   **IF-THEN Structure:** Fuzzy rules are typically in the form:
    `IF (antecedent) THEN (consequent)`
*   **Antecedent:** A combination of fuzzy propositions (e.g., "Temperature is Cold AND Humidity is High").
*   **Consequent:** A fuzzy set (e.g., "Fan Speed is Low").
*   **Graphical Depiction:**
    *   **Input Variables:** Each input variable has its associated fuzzy sets represented by MFs.
    *   **Output Variable:** The output variable also has its associated fuzzy sets represented by MFs.
    *   **Rule Activation:** A rule's activation is determined by the degree of membership of the input values in the antecedent's fuzzy sets.

    **Example:** `IF Temperature is Cold THEN Fan Speed is Low`
    *   Input: Temperature (fuzzy sets: Cold, Warm, Hot)
    *   Output: Fan Speed (fuzzy sets: Low, Medium, High)
    *   The rule connects the "Cold" fuzzy set for Temperature to the "Low" fuzzy set for Fan Speed.

---

### 2. Graphical Interpretation of the Implication Operator

The implication operator defines how the truth value of the antecedent affects the truth value of the consequent. In fuzzy inference, this is visualized by "clipping" or "scaling" the consequent's membership function.

#### 2.1 Clipping (Mamdani-style Implication)

*   **Concept:** The degree of activation of the antecedent is used to "clip" the membership function of the consequent at that level.
*   **Process:**
    1.  **Determine Antecedent Activation:** For a given input, calculate the degree of membership for each fuzzy set in the antecedent. For AND, use the `min` operator; for OR, use the `max` operator.
    2.  **Clip Consequent MF:** The resulting activation value (let's call it $\alpha$) is used to truncate the consequent's membership function. The clipped MF will have a membership of $\alpha$ for all input values where the original consequent MF was greater than or equal to $\alpha$.
*   **Graphical Result:** A "clipped" version of the consequent's membership function.

    **Example:** `IF Temperature is Cold (activation = 0.7) THEN Fan Speed is Low`
    *   Assume "Fan Speed is Low" has a triangular MF.
    *   The implication operation will clip this triangle at a height of 0.7.

    ```
    Degree of Membership
         ^
         |      / \
         |     /   \
       1 +----*----*----
         |   / \  / \   <-- Original MF
       0.7 +--*----*---- <-- Clipped MF
         |  /
       0 +--*------------> Fan Speed
          Low
    ```

#### 2.2 Scaling (Larsen-style Implication)

*   **Concept:** The degree of activation of the antecedent is used to "scale" the membership function of the consequent.
*   **Process:**
    1.  **Determine Antecedent Activation:** Same as clipping.
    2.  **Scale Consequent MF:** The membership values of the consequent's MF are multiplied by the antecedent activation value ($\alpha$).
*   **Graphical Result:** A "scaled" version of the consequent's membership function, where the peak membership is $\alpha$.

    **Example:** `IF Temperature is Cold (activation = 0.7) THEN Fan Speed is Low`
    *   Assume "Fan Speed is Low" has a triangular MF peaking at 1.
    *   The implication operation will scale this triangle such that its peak is now at 0.7.

    ```
    Degree of Membership
         ^
         |      / \
         |     /   \  <-- Scaled MF
       1 +----*----*----
         |   / \  / \
       0.7 +----*----*---- <-- Original MF (scaled down)
         |  /
       0 +--*------------> Fan Speed
          Low
    ```

**Important Note:** Mamdani-style implication is more commonly used in practical fuzzy inference systems because it directly produces a fuzzy set that can be aggregated.

---

### 3. Graphical Process of Aggregation of Fuzzy Rules

When multiple fuzzy rules are fired, their consequents (represented by clipped or scaled MFs) need to be combined to form a single fuzzy set for the output variable. This combination is called aggregation.

#### 3.1 Aggregation Operator

*   **Concept:** The aggregation operator combines the activated consequent fuzzy sets from multiple rules.
*   **Common Operator:** The **Maximum (MAX)** operator is most commonly used.
*   **Process:** For each point in the output universe of discourse, the membership value of the aggregated fuzzy set is the maximum of the membership values of the individual consequents at that point.

#### 3.2 Graphical Aggregation

*   **Steps:**
    1.  **Process Each Rule:** For each active fuzzy rule, apply the implication operator (typically clipping) to the consequent's membership function using the rule's activation degree. This results in a series of clipped MFs.
    2.  **Overlay Clipped MFs:** Graphically overlay all the clipped consequent MFs on the same plot of the output variable.
    3.  **Apply MAX Operator:** For each point in the output universe of discourse, take the highest membership value among all the overlapping clipped MFs. This forms the final aggregated fuzzy set.
*   **Graphical Result:** A single combined fuzzy set that represents the union of all rule consequents.

    **Example:** Consider two rules for fan speed control:
    *   **Rule 1:** `IF Temperature is Cold (activation = 0.7) THEN Fan Speed is Low`
    *   **Rule 2:** `IF Temperature is Warm (activation = 0.4) THEN Fan Speed is Medium`

    Assume MFs for "Low" and "Medium" fan speeds.
    1.  **Implication:** Clip the "Low" MF at 0.7 and the "Medium" MF at 0.4.
    2.  **Overlay:** Plot both clipped MFs.
    3.  **Aggregation (MAX):** Trace the upper envelope of the overlapped MFs.

    ```
    Degree of Membership
         ^
         |      / \        / \
         |     /   \      /   \   <-- Clipped MF for "Medium" (height 0.4)
       1 +----*----*----  *----*----
         |   / \  / \    / \  / \
       0.7 +--*----*----*----*---- <-- Clipped MF for "Low" (height 0.7)
         |  /       \  /
       0.4 +-----------*----
         |
       0 +--*----+----*----+----*----> Fan Speed
          Low    Medium     High
    ```
    The aggregated fuzzy set will be the shape formed by the peaks and transitions of these clipped MFs, taking the maximum at each point.

---

### 4. Graphical Defuzzification Methods

Defuzzification is the process of converting the aggregated fuzzy set into a crisp (numerical) output value. Graphical techniques provide an intuitive way to visualize and understand these methods.

#### 4.1 Centroid of Area (CoA) / Center of Gravity (CoG)

*   **Concept:** The crisp output is determined by finding the center of gravity of the aggregated fuzzy set's membership function. This is the most common defuzzification method.
*   **Graphical Interpretation:**
    1.  **Identify Aggregated Fuzzy Set:** This is the output of the aggregation step.
    2.  **Calculate Moment:** Imagine the aggregated fuzzy set as a solid shape (with density proportional to membership). The centroid is the point where this shape would balance.
    3.  **Formula (Integral Form):**
        $z_{CoG} = \frac{\int_{-\infty}^{\infty} \mu_{Aggregated}(z) \cdot z \, dz}{\int_{-\infty}^{\infty} \mu_{Aggregated}(z) \, dz}$
        Where $\mu_{Aggregated}(z)$ is the membership function of the aggregated fuzzy set.
*   **Graphical Visualization:** The crisp output value is the x-coordinate of the centroid of the aggregated shape.

    **Example:** Using the aggregated fuzzy set from the previous example.
    *   The centroid calculation involves finding the geometric center of the combined shape.
    *   This would be a single numerical value for "Fan Speed" (e.g., 45 RPM).

    ```
    Degree of Membership
         ^
         |      / \        / \
         |     /   \      /   \
       1 +----*----*----  *----*----
         |   / \  / \    / \  / \
       0.7 +--*----*----*----*----
         |  /       \  /
       0.4 +-----------*----
         |     |
       0 +--*----+----*----+----*----> Fan Speed
          Low    Medium     High
                 ^
                 |
                 Centroid (Crisp Output)
    ```

#### 4.2 Mean of Maxima (MoM)

*   **Concept:** Finds the average of all the output values that have the maximum degree of membership in the aggregated fuzzy set.
*   **Graphical Interpretation:**
    1.  **Identify the "Peak(s)":** Locate the region(s) on the aggregated fuzzy set where the membership function reaches its maximum value.
    2.  **Average Peak Values:** If there's a single peak, the crisp output is that value. If there's a plateau (multiple values with maximum membership), average all the values within that plateau. If there are multiple disconnected peaks, average the values of all these peaks.
*   **Graphical Result:** A single crisp value.

    **Example:** If the aggregated fuzzy set has a flat top at a membership of 0.7 between 50 and 60 RPM.
    *   The crisp output would be $(50 + 60) / 2 = 55$ RPM.

#### 4.3 Smallest of Maxima (SoM)

*   **Concept:** Selects the smallest output value that has the maximum degree of membership.
*   **Graphical Interpretation:**
    1.  **Identify the "Peak(s)":** Locate the region(s) on the aggregated fuzzy set where the membership function reaches its maximum value.
    2.  **Select Smallest Value:** Choose the minimum value within the plateau or among multiple peaks.
*   **Graphical Result:** A single crisp value.

    **Example:** Using the same plateau example as MoM (50-60 RPM at max membership).
    *   The crisp output would be 50 RPM.

#### 4.4 Largest of Maxima (LoM)

*   **Concept:** Selects the largest output value that has the maximum degree of membership.
*   **Graphical Interpretation:**
    1.  **Identify the "Peak(s)":** Locate the region(s) on the aggregated fuzzy set where the membership function reaches its maximum value.
    2.  **Select Largest Value:** Choose the maximum value within the plateau or among multiple peaks.
*   **Graphical Result:** A single crisp value.

    **Example:** Using the same plateau example as MoM (50-60 RPM at max membership).
    *   The crisp output would be 60 RPM.

---

### 5. Analyzing and Interpreting Output using Graphical Techniques

Graphical techniques are invaluable for understanding how the fuzzy inference system reaches its conclusion.

#### 5.1 Step-by-Step Analysis

1.  **Fuzzification:** Given crisp inputs, determine their degrees of membership in the relevant input fuzzy sets. (This step is usually done numerically but can be visualized by looking at the input MFs).
2.  **Rule Evaluation (Antecedent Activation):** For each rule, calculate the degree of activation of its antecedent using fuzzy operators (e.g., `min` for AND, `max` for OR).
3.  **Implication:** Apply the implication operator (e.g., clipping) to the consequent's membership function of each fired rule using its activation degree. This yields a set of clipped MFs.
4.  **Aggregation:** Combine all the clipped MFs using the aggregation operator (e.g., `max`) to produce a single aggregated fuzzy set for the output. This is where the graphical overlay and envelope tracing are key.
5.  **Defuzzification:** Convert the aggregated fuzzy set into a crisp output value using a defuzzification method (e.g., Centroid). The graphical interpretation helps in understanding why a particular crisp value is chosen.

#### 5.2 Visualizing the "Fuzzy Reasoning"

*   By observing the activated rules and how their consequents are combined, one can understand the "fuzzy reasoning" process.
*   For example, if two rules are significantly activated, their clipped consequents will contribute to the aggregated output, showing a blend of the fuzzy concepts from those rules.
*   The choice of defuzzification method can be visualized by how it "picks" a specific crisp value from the aggregated fuzzy set.

**Example: Air Conditioner Control**

*   **Inputs:** Room Temperature ($T$), Humidity ($H$)
*   **Output:** Cooling Power ($P$)
*   **Rules:**
    *   R1: IF $T$ is HOT AND $H$ is HIGH THEN $P$ is STRONG
    *   R2: IF $T$ is WARM AND $H$ is LOW THEN $P$ is MEDIUM
*   **Scenario:** Current $T = 28^\circ C$, $H = 70\%$.
*   **Graphical Walkthrough:**
    1.  **Fuzzification:** Determine membership of $28^\circ C$ in "HOT" and "WARM", and $70\%$ in "HIGH" and "LOW". Let's say:
        *   $\mu_{HOT}(28^\circ C) = 0.8$
        *   $\mu_{WARM}(28^\circ C) = 0.3$
        *   $\mu_{HIGH}(70\%) = 0.9$
        *   $\mu_{LOW}(70\%) = 0.1$
    2.  **Rule Activation:**
        *   R1 Activation: $\min(\mu_{HOT}(28^\circ C), \mu_{HIGH}(70\%)) = \min(0.8, 0.9) = 0.8$
        *   R2 Activation: $\min(\mu_{WARM}(28^\circ C), \mu_{LOW}(70\%)) = \min(0.3, 0.1) = 0.1$
    3.  **Implication (Clipping):** Clip the MFs of "STRONG" cooling power at height 0.8 and "MEDIUM" cooling power at height 0.1.
    4.  **Aggregation:** Overlay the clipped "STRONG" and "MEDIUM" MFs and take the maximum at each point to form the aggregated fuzzy set for Cooling Power.
    5.  **Defuzzification (Centroid):** Calculate the centroid of the aggregated fuzzy set to get a crisp value for Cooling Power (e.g., 75%).

This graphical process visually shows how the high temperature and high humidity strongly activate the "STRONG" cooling rule, while the moderate temperature and low humidity weakly activate the "MEDIUM" cooling rule. The aggregation combines these effects, and the centroid selects a crisp cooling level that reflects the dominant influence of the "STRONG" rule.

---

### 6. Important Points to Remember:

*   **Membership Functions are Key:** The shape and position of membership functions define the fuzzy sets used in the inference process.
*   **Implication Determines Consequent Shape:** Clipping (Mamdani) creates truncated MFs, while scaling (Larsen) creates proportionally reduced MFs. Clipping is more common.
*   **Aggregation Combines Rules:** The MAX operator graphically creates an upper envelope of the activated consequent MFs.
*   **Defuzzification Extracts Crisp Output:** Centroid is the most popular method and represents the "balance point" of the aggregated fuzzy set.
*   **Graphical Techniques Enhance Understanding:** They provide a visual bridge between fuzzy logic concepts and practical control or decision-making.
*   **The Output is the Result of ALL Activated Rules:** Even weakly activated rules contribute to the final aggregated fuzzy set.

---

### Practice Questions:

**Question 1:** Describe the graphical difference between Mamdani and Larsen implication methods. What are their visual outcomes on a consequent's membership function?

**Question 2:** Suppose you have two fuzzy rules with the following activated consequent membership functions (after implication), represented by MFs $A$ and $B$.
*   MF $A$: a triangle from 0 to 10, peaking at 5, with height 0.7.
*   MF $B$: a triangle from 5 to 15, peaking at 10, with height 0.4.
    Sketch the aggregated fuzzy set using the MAX operator.

**Question 3:** If the aggregated fuzzy set for a system is a trapezoid with a flat top at membership 1 between values 30 and 50, and sloping down to 0 at 10 and 70, what would be the crisp output if the defuzzification method used is:
    a) Mean of Maxima (MoM)
    b) Smallest of Maxima (SoM)
    c) Largest of Maxima (LoM)

**Question 4:** Why is the Centroid of Area (CoG) method often preferred in fuzzy inference systems, and how can it be visualized graphically?

---

### Answers to Practice Questions:

**Answer 1:**
*   **Mamdani Implication:** "Clips" the consequent's membership function. The clipped MF's membership values are capped at the antecedent's activation degree. Visually, it's like taking the original MF and cutting off the top part above the activation level.
*   **Larsen Implication:** "Scales" the consequent's membership function. The membership values of the original MF are multiplied by the antecedent's activation degree. Visually, the entire MF is shrunk vertically, with its peak reaching the activation level.

**Answer 2:**
*   **Sketch:**
    *   MF $A$: Peaks at 5 with height 0.7. Let's assume it starts at 0 and ends at 10.
    *   MF $B$: Peaks at 10 with height 0.4. Let's assume it starts at 5 and ends at 15.
    *   When aggregated using MAX, the resulting shape will follow the higher membership values.
    *   From 0 to 5, it will follow MF $A$.
    *   From 5 up to where $A$ drops below $B$, it will follow the higher one.
    *   From where $B$ becomes the higher one up to its peak, it will follow $B$.
    *   After $B$'s peak, it will follow $B$ until it reaches 0.

    A rough sketch would show a combined shape that starts low, rises to the peak of A, then potentially dips slightly but rises again with B, and then descends with B. The key is that the final shape is the "outer boundary" of the overlapping clipped MFs.

    ```
    Degree of Membership
         ^
         |     .-------.     <-- MF B (height 0.4)
         |    / \     / \
       0.7 +---*---*---*---+---- <-- MF A (height 0.7)
         |  /     \ /     \
       0.4 +---------*-------*----+
         |
       0 +--*-------*-------*----> Output Value
          0       5       10      15
    ```
    The aggregated set would be the shape formed by the top edges of these two triangles.

**Answer 3:**
Given a trapezoid with a flat top at membership 1 between 30 and 50, and sloping to 0 at 10 and 70.
    a) **Mean of Maxima (MoM):** The maximum membership is 1, occurring between 30 and 50. The average of these values is $(30 + 50) / 2 = \mathbf{40}$.
    b) **Smallest of Maxima (SoM):** The smallest value with maximum membership is $\mathbf{30}$.
    c) **Largest of Maxima (LoM):** The largest value with maximum membership is $\mathbf{50}$.

**Answer 4:**
The Centroid of Area (CoG) method is often preferred because:
1.  **It uses the entire aggregated fuzzy set:** Unlike MoM, SoM, and LoM which focus only on the peak(s), CoG considers the distribution of membership across the entire output fuzzy set. This generally leads to a more representative and smoother output.
2.  **It's a well-established concept:** It's analogous to finding the center of gravity in physics, providing a robust and predictable way to get a crisp value.

**Graphical Visualization:** It can be visualized as finding the x-coordinate of the "balancing point" of the aggregated fuzzy set if it were treated as a physical object with uniform density proportional to its membership function. The calculation involves integrating the product of membership value and output value over the universe of discourse.
