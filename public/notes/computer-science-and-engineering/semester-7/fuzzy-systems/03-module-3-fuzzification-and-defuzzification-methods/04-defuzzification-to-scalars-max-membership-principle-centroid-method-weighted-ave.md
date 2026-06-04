---
title: "Defuzzification to Scalars - Max membership principle, Centroid method, Weighted average method, Mean max membership, Center of sums, Center of largest area, First (or last) of maxima."
subject: "FUZZY SYSTEMS"
module: "Module 3: Fuzzification and Defuzzification Methods :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c4c3"
status: "completed"
scrapedAt: "2026-05-20T17:06:18.767Z"
---
# Fuzzy Systems: Module 3 - Defuzzification to Scalars

## Introduction

Defuzzification is the process of converting a fuzzy output set (which represents the aggregated result of fuzzy rules) into a crisp, single scalar value. This crisp value is then used to control a system or make a decision in the real world. Fuzzy logic controllers typically produce a fuzzy output, and this output needs to be translated into a precise action.

## Learning Outcomes

Upon completion of this module, you should be able to:

*   Understand the necessity of defuzzification in fuzzy systems.
*   Explain and apply various defuzzification methods to obtain a crisp output.
*   Compare and contrast different defuzzification techniques.
*   Identify the advantages and disadvantages of each method.

## Key Concepts and Definitions

*   **Fuzzy Output Set (or Fuzzy Measure):** The aggregated output of all activated fuzzy rules in a fuzzy inference system. This is typically represented as a union of fuzzy sets.
*   **Crisp Output:** A single, non-fuzzy numerical value.
*   **Defuzzification Method:** A specific algorithm or procedure used to map a fuzzy output set to a crisp output value.

---

## Defuzzification Methods to Scalars

The choice of defuzzification method can significantly influence the performance of a fuzzy control system. Here, we will explore several common methods:

### 1. Max-Membership Principle (also known as Height Method orrecated)

This is one of the simplest defuzzification methods.

**Concept:** The crisp output value is chosen as the element in the universe of discourse that has the highest degree of membership in the aggregated fuzzy output set.

**Procedure:**

1.  Identify the fuzzy output set that has the maximum membership value.
2.  If there are multiple elements with the same maximum membership value, any of them can be chosen (or a more sophisticated tie-breaking rule might be applied, though this method often simply picks one).

**Example:**

Consider a universe of discourse for "Temperature" from 0 to 100 degrees Celsius. Suppose the aggregated fuzzy output set for "Desired Heater Level" is represented by a membership function where the highest membership value (1.0) occurs at 75 degrees Celsius.

*   **Aggregated Fuzzy Output Set (Hypothetical):** A triangular fuzzy set centered at 75, with membership decreasing linearly to 0 at 50 and 100.
*   **Maximum Membership:** 1.0
*   **Element with Max Membership:** 75°C

**Advantages:**

*   Simple to understand and implement.
*   Computationally inexpensive.

**Disadvantages:**

*   Ignores information about the shape and spread of the fuzzy set.
*   Can be sensitive to noise or minor changes in the membership function, leading to abrupt changes in output.
*   May not always produce the most representative output.

**Important Note:** This method is less commonly used in modern, sophisticated fuzzy systems due to its limitations, but it's important for understanding the basic idea of mapping to a peak.

---

### 2. Centroid Method (also known as Center of Gravity - COG, or Center of Area - COA)

This is the most widely used and generally preferred defuzzification method.

**Concept:** The crisp output value is the "center of gravity" or "centroid" of the aggregated fuzzy output set. It considers the entire shape of the fuzzy output set.

**Procedure:**

For a continuous universe of discourse $Y = [y_{min}, y_{max}]$, the centroid $y_c$ is calculated as:

$y_c = \frac{\int_{y_{min}}^{y_{max}} \mu_{A_{out}}(y) \cdot y \, dy}{\int_{y_{min}}^{y_{max}} \mu_{A_{out}}(y) \, dy}$

where $\mu_{A_{out}}(y)$ is the membership function of the aggregated fuzzy output set.

For a discrete universe of discourse $Y = \{y_1, y_2, ..., y_n\}$, the centroid $y_c$ is calculated as:

$y_c = \frac{\sum_{i=1}^{n} \mu_{A_{out}}(y_i) \cdot y_i}{\sum_{i=1}^{n} \mu_{A_{out}}(y_i)}$

**Example:**

Consider a discrete universe of discourse for "Fan Speed" with values {10, 20, 30, 40, 50} RPM. Suppose the aggregated fuzzy output set has the following membership values:

*   $\mu(10) = 0.2$
*   $\mu(20) = 0.5$
*   $\mu(30) = 0.8$
*   $\mu(40) = 0.3$
*   $\mu(50) = 0.1$

**Calculation:**

Numerator: $(0.2 \times 10) + (0.5 \times 20) + (0.8 \times 30) + (0.3 \times 40) + (0.1 \times 50)$
$= 2 + 10 + 24 + 12 + 5 = 53$

Denominator: $0.2 + 0.5 + 0.8 + 0.3 + 0.1 = 1.9$

$y_c = \frac{53}{1.9} \approx 27.89$ RPM

**Advantages:**

*   Considers the entire shape and distribution of the fuzzy output set, making it robust.
*   Generally produces smooth and stable control actions.
*   Widely accepted and provides a good compromise between accuracy and computational complexity.

**Disadvantages:**

*   Can be computationally intensive, especially for continuous universes or large discrete universes.
*   Requires integration or summation over the entire universe of discourse.

**Important Note:** This is the most common and recommended defuzzification method.

---

### 3. Weighted Average Method

This method is similar to the Centroid method but is specifically applicable when the aggregated fuzzy output set is a union of singleton fuzzifications of individual fuzzy sets.

**Concept:** The crisp output is the weighted average of the *representative values* (typically the centroids or the singleton values) of each active output fuzzy set, where the weights are their respective *degrees of activation* (or consequents' membership values).

**Procedure:**

Assume there are $k$ active fuzzy output sets $A_1, A_2, ..., A_k$, with representative values $y_1, y_2, ..., y_k$ and corresponding membership values (degrees of activation) $\mu_1, \mu_2, ..., \mu_k$.

$y_{wa} = \frac{\sum_{i=1}^{k} \mu_i \cdot y_i}{\sum_{i=1}^{k} \mu_i}$

**Example:**

Consider a fuzzy system with two rules firing, resulting in two output fuzzy sets: "Medium Fan Speed" (representative value 30 RPM, degree of activation 0.7) and "High Fan Speed" (representative value 50 RPM, degree of activation 0.4).

*   $y_1 = 30$ RPM, $\mu_1 = 0.7$
*   $y_2 = 50$ RPM, $\mu_2 = 0.4$

**Calculation:**

$y_{wa} = \frac{(0.7 \times 30) + (0.4 \times 50)}{0.7 + 0.4}$
$y_{wa} = \frac{21 + 20}{1.1} = \frac{41}{1.1} \approx 37.27$ RPM

**Advantages:**

*   Computationally efficient when the output of each rule can be represented by a singleton.
*   Easy to understand and implement.

**Disadvantages:**

*   Assumes that the output of each rule can be represented by a single point (singleton). This might not be true for all fuzzy set shapes.
*   If the antecedent membership values are low, the resulting output might not be representative of the system's behavior.

**Important Note:** This method is particularly useful in Mamdani-type fuzzy inference systems when using singleton fuzzification for the output membership functions.

---

### 4. Mean of Maxima (or Mean Max Membership)

This method focuses on the region of the aggregated fuzzy output set where the membership values are highest.

**Concept:** The crisp output is the average of all the values in the universe of discourse that have the maximum membership value.

**Procedure:**

1.  Identify all elements in the universe of discourse that have the highest membership value. Let these be $y_{m1}, y_{m2}, ..., y_{mp}$.
2.  Calculate the average of these values.

$y_{mom} = \frac{y_{m1} + y_{m2} + ... + y_{mp}}{p}$

**Example:**

Consider a universe of discourse for "Force" from 0 to 100 Newtons. Suppose the aggregated fuzzy output set has a flat top with a membership value of 0.9 between 40N and 60N, and then it decreases linearly outside this range.

*   **Maximum Membership:** 0.9
*   **Values with Max Membership:** All values in the interval [40, 60] N.

For a continuous universe, the "mean of maxima" would be the midpoint of this interval.

$y_{mom} = \frac{40 + 60}{2} = 50$ N

If we consider discrete values with the same max membership:

*   Values with max membership: {40, 45, 50, 55, 60}
*   $y_{mom} = \frac{40 + 45 + 50 + 55 + 60}{5} = \frac{250}{5} = 50$ N

**Advantages:**

*   Simple to understand.
*   Captures the peak behavior of the fuzzy output.

**Disadvantages:**

*   Ignores information outside the region of maximum membership.
*   Highly sensitive to the shape of the peak; a small change in the peak can drastically alter the output.
*   Doesn't account for the distribution of membership values below the peak.

**Important Note:** This method is generally less preferred than the Centroid method due to its sensitivity to the peak.

---

### 5. Center of Sums

This method is an approximation of the Centroid method, especially useful when the aggregated output is formed by summing individual fuzzy sets (as in some Tsukamoto-type systems or when dealing with specific aggregation operators).

**Concept:** The crisp output is calculated by summing the products of each individual output fuzzy set's "center of gravity" and its corresponding activation level, then dividing by the sum of the activation levels.

**Procedure:**

Let $A_i$ be the output fuzzy set of the $i$-th rule with centroid $c_i$ and activation level $\alpha_i$.

$y_{cos} = \frac{\sum_{i=1}^{k} \alpha_i \cdot c_i}{\sum_{i=1}^{k} \alpha_i}$

**Note:** This formula is identical to the Weighted Average method. The distinction lies in how the output fuzzy sets are formed. In Center of Sums, the aggregated output might be literally the *sum* of individual fuzzy sets (e.g., $\mu_{agg}(y) = \sum_i \alpha_i \mu_{A_i}(y)$), and $c_i$ represents the centroid of $\mu_{A_i}(y)$. However, in practice, it often refers to the same calculation as Weighted Average when singleton consequents are used.

**Example:**

Let's use the same example as the Weighted Average method.

*   Rule 1 output: "Medium Fan Speed" (singleton at 30 RPM, activation 0.7)
*   Rule 2 output: "High Fan Speed" (singleton at 50 RPM, activation 0.4)

$y_{cos} = \frac{(0.7 \times 30) + (0.4 \times 50)}{0.7 + 0.4} = \frac{21 + 20}{1.1} \approx 37.27$ RPM

**Advantages:**

*   Computationally efficient.
*   Relatively straightforward to implement.

**Disadvantages:**

*   Similar to Weighted Average, it relies on representative points for each fuzzy set, potentially losing information if the fuzzy sets are not well-defined or if higher-order moments are important.

**Important Note:** The practical implementation and naming can overlap with the Weighted Average method, especially when dealing with singleton consequents.

---

### 6. Center of Largest Area

This method focuses on the fuzzy set region that contributes the most "area" under the membership function.

**Concept:** The crisp output is the centroid of the region in the universe of discourse that has the largest area under its membership function, considering all contributing fuzzy sets. This is a bit less common and can be interpreted in a few ways. A common interpretation is to find the fuzzy set whose centroid, when weighted by its membership value, results in the largest contribution to the overall output. However, a more direct interpretation is to find the region of the *aggregated* fuzzy set with the largest area.

Let's consider a more practical interpretation: **Identify the individual output fuzzy set that has the largest area and use its centroid as the output.** This is a simplified approach.

**A more accurate interpretation for aggregated sets:** Find the region(s) of the aggregated fuzzy set that contribute the most to the overall area calculation in the Centroid method. This is complex to isolate as a distinct method and often implicitly handled by the Centroid calculation.

Let's assume a simplified approach for clarity, focusing on individual fuzzy sets if the aggregated set is complex to parse for "largest area regions."

**Simplified Procedure (Focusing on individual sets if applicable):**

1.  Calculate the area under the membership function for each *individual* output fuzzy set.
2.  Identify the fuzzy set with the largest area.
3.  The crisp output is the centroid (or representative value) of this largest-area fuzzy set.

**Example (Simplified):**

Universe of Discourse: [0, 10]

*   **Rule 1:** Output "Low Speed" (triangular, base [0, 4], peak at 2, membership = 0.6)
*   **Rule 2:** Output "Medium Speed" (triangular, base [5, 9], peak at 7, membership = 0.8)

Area under "Low Speed": $\frac{1}{2} \times base \times height = \frac{1}{2} \times 4 \times 0.6 = 1.2$
Centroid of "Low Speed": 2

Area under "Medium Speed": $\frac{1}{2} \times base \times height = \frac{1}{2} \times 4 \times 0.8 = 1.6$
Centroid of "Medium Speed": 7

**Calculation:**

The "Medium Speed" fuzzy set has the largest area (1.6). Its centroid is 7.
So, the output would be 7.

**Advantages:**

*   Can be useful if a particular fuzzy set dominates the output due to its "size."

**Disadvantages:**

*   Highly dependent on the specific shapes and ranges of the fuzzy sets.
*   Ignores other contributing fuzzy sets and their memberships.
*   The definition of "largest area" can be ambiguous for aggregated fuzzy sets.

**Important Note:** This method is less common than Centroid or Weighted Average. Its utility is limited, and its interpretation can vary.

---

### 7. First (or Last) of Maxima

This is another simple method that focuses on the peak(s) of the aggregated fuzzy output set. It's similar to the Max-Membership Principle but addresses potential multiple peaks.

**Concept:** The crisp output is chosen as the first (or last) element in the universe of discourse that achieves the maximum membership value.

**Procedure:**

*   **First of Maxima:** Scan the universe of discourse from minimum to maximum. The first element encountered that has the maximum membership value is chosen as the crisp output.
*   **Last of Maxima:** Scan the universe of discourse from maximum to minimum. The first element encountered that has the maximum membership value is chosen as the crisp output.

**Example:**

Consider a universe of discourse for "Valve Opening" from 0% to 100%. Suppose the aggregated fuzzy output set has a membership function like this:

*   A peak of 1.0 at 30%
*   A plateau (maximum membership of 1.0) from 50% to 70%
*   A decrease to 0.5 at 80%

**Calculation:**

*   **First of Maxima:** The maximum membership is 1.0. The first value encountered with membership 1.0 (scanning from 0%) is 30%. So, the output is 30%.
*   **Last of Maxima:** The maximum membership is 1.0. Scanning from 100% downwards, the last value encountered with membership 1.0 is 70%. So, the output is 70%.

**Advantages:**

*   Simple to understand and implement.
*   Efficient computationally.

**Disadvantages:**

*   Highly sensitive to the location of the maxima and the sampling resolution.
*   Ignores the distribution of membership values below the maximum.
*   The choice between "first" and "last" is arbitrary and can lead to different outputs for the same fuzzy set.

**Important Note:** These methods are susceptible to noise and can lead to abrupt changes in control output. They are generally not preferred for robust control applications.

---

## Comparison of Defuzzification Methods

| Method                   | Key Idea                                                              | Computational Complexity | Information Used                                   | Robustness | Commonality |
| :----------------------- | :-------------------------------------------------------------------- | :----------------------- | :------------------------------------------------- | :--------- | :---------- |
| **Max-Membership**       | Selects value(s) with the highest membership.                         | Low                      | Peak membership value(s).                          | Low        | Low         |
| **Centroid (COG/COA)**   | Calculates the center of gravity of the fuzzy set.                    | High                     | Entire shape and distribution of the fuzzy set.    | High       | High        |
| **Weighted Average**     | Weighted average of representative values of individual output sets.  | Medium                   | Representative values and activation levels.       | Medium     | High        |
| **Mean of Maxima**       | Average of values with the highest membership.                        | Medium                   | Peak membership values and their distribution.     | Low        | Medium      |
| **Center of Sums**       | Weighted average of centroids of individual output sets (often similar to Weighted Average). | Medium                   | Representative values and activation levels.       | Medium     | Medium      |
| **Center of Largest Area** | Centroid of the region with the largest area (often simplified).    | Varies (can be High)     | Area under membership function (can be selective). | Low        | Low         |
| **First/Last of Maxima** | Selects the first/last value with the highest membership.             | Low                      | Peak membership value and its position.            | Low        | Low         |

---

## Practice Questions

**Question 1:**
A fuzzy controller outputs a fuzzy set for "Brake Pressure." The universe of discourse for Brake Pressure is {10, 20, 30, 40, 50} kPa. The aggregated fuzzy output set has the following membership values:
$\mu(10) = 0.1$
$\mu(20) = 0.4$
$\mu(30) = 0.7$
$\mu(40) = 0.5$
$\mu(50) = 0.2$

Calculate the crisp output using the **Centroid method**.

**Question 2:**
Consider a fuzzy system where two rules have fired:
*   Rule 1: "If temperature is hot, then fan speed is high." Output: High Fan Speed (singleton at 50 RPM, activation level 0.8).
*   Rule 2: "If temperature is very hot, then fan speed is very high." Output: Very High Fan Speed (singleton at 70 RPM, activation level 0.5).

Calculate the crisp output using the **Weighted Average method**.

**Question 3:**
For the fuzzy set described in Question 1, if the maximum membership value is 0.7 and it occurs only at 30 kPa, what would be the output using the **Max-Membership Principle**? What about using **First of Maxima** and **Last of Maxima**?

**Question 4:**
Discuss the primary advantage of the Centroid method over simpler methods like Max-Membership or First/Last of Maxima.

---

## Answers to Practice Questions

**Answer 1 (Centroid Method):**

Numerator:
$(0.1 \times 10) + (0.4 \times 20) + (0.7 \times 30) + (0.5 \times 40) + (0.2 \times 50)$
$= 1 + 8 + 21 + 20 + 10 = 60$

Denominator:
$0.1 + 0.4 + 0.7 + 0.5 + 0.2 = 1.9$

Crisp Output (Centroid): $\frac{60}{1.9} \approx 31.58$ kPa

**Answer 2 (Weighted Average Method):**

$y_{wa} = \frac{\sum \mu_i \cdot y_i}{\sum \mu_i}$
$y_{wa} = \frac{(0.8 \times 50) + (0.5 \times 70)}{0.8 + 0.5}$
$y_{wa} = \frac{40 + 35}{1.3} = \frac{75}{1.3} \approx 57.69$ RPM

**Answer 3 (Max-Membership, First/Last of Maxima):**

For Question 1's fuzzy set:
*   **Max-Membership Principle:** The highest membership is 0.7, which occurs at 30 kPa. So, the output is **30 kPa**.
*   **First of Maxima:** Scanning from 10 kPa upwards, the first value with max membership (0.7) is 30 kPa. So, the output is **30 kPa**.
*   **Last of Maxima:** Scanning from 50 kPa downwards, the last value with max membership (0.7) is 30 kPa. So, the output is **30 kPa**.

*(Note: In this specific example, all three methods give the same result because there is only a single peak. If there were multiple points with the max membership, First/Last of Maxima would differ.)*

**Answer 4 (Advantage of Centroid Method):**

The primary advantage of the Centroid method is that it is **robust** and considers the **entire shape and distribution** of the aggregated fuzzy output set. Unlike simpler methods that might only look at the peak or specific points, the Centroid method takes into account all the membership values across the universe of discourse. This leads to smoother, more stable, and often more accurate control actions that better reflect the overall fuzzy inference. It reduces sensitivity to minor fluctuations or noise in the fuzzy output.

---

## Important Points to Remember

*   Defuzzification is a critical step to bridge the gap between fuzzy logic and real-world actions.
*   The Centroid (COG/COA) method is the most widely used and generally recommended due to its robustness and ability to consider the entire fuzzy output set.
*   Simpler methods (Max-Membership, First/Last of Maxima) are easy to implement but can be sensitive to noise and may not yield optimal control performance.
*   Weighted Average is efficient and effective when dealing with singleton consequents.
*   The choice of defuzzification method can significantly impact the system's behavior, so careful consideration based on the application's requirements is necessary.
*   Always check the definitions and procedures for each method to ensure correct application.

---
This concludes Module 3 on Defuzzification to Scalars.
