---
title: "Accuracy and precision"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 1: Motivation and Applications of numerical methods"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446469e"
status: "completed"
scrapedAt: "2026-05-20T18:23:00.342Z"
---
# NUMERICAL TECHNIQUES ENGINEERING

## Module 1: Motivation and Applications of Numerical Methods

### Topic: Accuracy and Precision

---

### 1. Introduction: Why Accuracy and Precision Matter in Numerical Methods

Numerical methods are used to approximate solutions to complex problems that may not have analytical (exact) solutions or where analytical solutions are too difficult to obtain. Therefore, understanding and managing the concepts of accuracy and precision is crucial for obtaining reliable and useful results.

*   **Core Idea:** Numerical methods involve approximations. We need to quantify how "good" these approximations are.
*   **Relevance to CO1-CO4:** All course outcomes involve solving problems numerically. The quality of these solutions directly depends on accuracy and precision. For instance, when solving linear equations (CO1) or integrating functions (CO3), the method's ability to get close to the true solution (accuracy) and the consistency of repeated measurements or calculations (precision) are paramount.

---

### 2. Key Concepts and Definitions

#### 2.1. Accuracy

*   **Definition:** Accuracy refers to how close a calculated value is to the true or accepted value.
*   **Concept:** It measures the **bias** in a numerical method or calculation. A high accuracy means the result is close to reality.
*   **Quantification:** Accuracy is often expressed in terms of **error**.

#### 2.2. Precision

*   **Definition:** Precision refers to how close a series of measurements or calculations are to each other.
*   **Concept:** It measures the **dispersion** or **scatter** of a set of values. A high precision means the results are consistent and reproducible, even if they are not close to the true value.
*   **Quantification:** Precision is often expressed in terms of **scatter** or **variability**.

#### 2.3. Error

*   **Definition:** Error is the difference between the true value and the approximate value.
*   **Formula:** $\text{Error} = \text{True Value} - \text{Approximate Value}$
*   **Types of Error:** Understanding the sources and types of errors is fundamental to managing accuracy.

    *   **Source Errors:** Errors that arise from the problem formulation itself or the physical measurements taken.
        *   **Physical Errors:** Errors in measurement (e.g., using a ruler to measure a length). These are often random or systematic.
        *   **Model Errors:** Errors introduced by the assumptions and simplifications made when creating a mathematical model of a real-world phenomenon. For example, assuming a process is linear when it's slightly nonlinear.
    *   **Mathematical Errors (Numerical Errors):** Errors introduced during the computation process.
        *   **Round-off Error:** Occurs due to the finite precision of computer representation of numbers. Computers store numbers with a limited number of digits (e.g., floating-point representation). When numbers are rounded, small errors are introduced.
            *   *Example:* Storing 1/3 as 0.3333. The difference between 1/3 and 0.3333 is a round-off error.
            *   *Textbook Reference:* Chapra & Canale (6th Ed., 2010) extensively discusses round-off errors in Chapter 3.
        *   **Truncation Error:** Occurs when an infinite series is approximated by a finite number of terms, or when a continuous process is approximated by a discrete one (e.g., using finite differences in differential equations).
            *   *Example:* Approximating the Taylor series expansion of $e^x$ as $1 + x + x^2/2!$. The terms omitted ($x^3/3! + x^4/4! + \dots$) contribute to the truncation error.
            *   *Textbook Reference:* Balagurusamy (2017) covers truncation error when introducing numerical differentiation and integration.
        *   **Algorithmic Error:** Errors inherent in the numerical method or algorithm itself, often a combination of round-off and truncation errors.

#### 2.4. Error Measurement

*   **Absolute Error:** The magnitude of the difference between the true value and the approximate value.
    *   **Formula:** $\text{Absolute Error} = |\text{True Value} - \text{Approximate Value}|$
*   **Relative Error:** The absolute error divided by the magnitude of the true value. It provides a measure of error relative to the size of the true value.
    *   **Formula:** $\text{Relative Error} = \frac{|\text{True Value} - \text{Approximate Value}|}{|\text{True Value}|}$
    *   **Importance:** Relative error is often more informative than absolute error, especially when comparing errors for numbers of different magnitudes. A large absolute error might be acceptable if the true value is also very large.

---

### 3. Visualizing Accuracy and Precision

Imagine shooting at a target:

*   **High Accuracy, High Precision:** All shots are clustered tightly around the bullseye. (Ideal scenario)
*   **Low Accuracy, High Precision:** All shots are clustered tightly together, but far from the bullseye. (Consistent but wrong)
*   **High Accuracy, Low Precision:** Shots are scattered widely, but their average position is close to the bullseye. (Inconsistent but statistically on target)
*   **Low Accuracy, Low Precision:** Shots are scattered widely and are also far from the bullseye. (Worst-case scenario)

---

### 4. Trade-offs and Relationships

*   **Accuracy vs. Precision:** These are distinct but related concepts. A method can be precise without being accurate, and vice-versa.
*   **Precision vs. Computational Effort:** Often, increasing precision (e.g., using more decimal places, performing more iterations) requires more computational time and resources.
*   **Accuracy vs. Simplification:** Simplifying a model or problem to make it amenable to numerical solution often introduces inaccuracies (model errors).

---

### 5. How to Improve Accuracy and Precision

*   **Choosing Appropriate Methods:** Select numerical methods known for their stability and convergence properties.
*   **Using Higher Precision Arithmetic:** Employing double-precision or extended-precision floating-point numbers can reduce round-off errors.
*   **Increasing Iterations (for iterative methods):** For methods that converge iteratively, performing more iterations generally leads to a more accurate solution, up to a point where round-off errors start dominating.
*   **Reducing Step Size (for methods based on discretization):** In methods like numerical integration or solving differential equations, decreasing the step size usually improves accuracy by reducing truncation error, but can increase round-off error due to more calculations.
*   **Careful Algorithm Design:** Developing algorithms that minimize the accumulation of errors.
*   **Error Analysis and Control:** Implementing techniques to estimate and control errors during computation.

---

### 6. Examples Illustrating Accuracy and Precision

**Example 1: Calculating Square Root**

Let's find the square root of 2, i.e., $\sqrt{2}$. The true value is approximately 1.41421356.

*   **Method A (Using a calculator with limited precision):**
    Suppose our calculator shows $\sqrt{2} \approx 1.414$.
    *   Absolute Error = $|1.41421356 - 1.414| = 0.00021356$
    *   Relative Error = $\frac{0.00021356}{1.41421356} \approx 0.000151$ (or 0.0151%)
    This is reasonably accurate and precise for this display.

*   **Method B (Using a less precise approximation):**
    Suppose we approximate $\sqrt{2}$ as 1.4.
    *   Absolute Error = $|1.41421356 - 1.4| = 0.01421356$
    *   Relative Error = $\frac{0.01421356}{1.41421356} \approx 0.01005$ (or 1.005%)
    This approximation is less accurate and less precise than Method A.

**Example 2: Summing a Series**

Consider the series $S = 1 + 0.5 + 0.25 + 0.125 + \dots$ (a geometric series with $a=1$, $r=0.5$). The true sum is $S = \frac{a}{1-r} = \frac{1}{1-0.5} = \frac{1}{0.5} = 2$.

*   **Calculation 1 (Sum first 3 terms):** $1 + 0.5 + 0.25 = 1.75$
    *   Absolute Error = $|2 - 1.75| = 0.25$
    *   Relative Error = $\frac{0.25}{2} = 0.125$

*   **Calculation 2 (Sum first 5 terms):** $1 + 0.5 + 0.25 + 0.125 + 0.0625 = 1.9375$
    *   Absolute Error = $|2 - 1.9375| = 0.0625$
    *   Relative Error = $\frac{0.0625}{2} = 0.03125$

As we add more terms (increasing precision of the sum), the result gets closer to the true value (improving accuracy). This illustrates how increased precision in calculation can lead to improved accuracy.

**Example 3: Round-off Error Impact**

Consider subtracting two nearly equal numbers: $1.23456 - 1.23450$.
*   True difference = $0.00006$

Now, suppose our calculator uses only 4 decimal places.
*   $1.23456$ rounds to $1.2346$
*   $1.23450$ rounds to $1.2345$
*   Calculated difference = $1.2346 - 1.2345 = 0.0001$

*   Absolute Error = $|0.00006 - 0.0001| = |-0.00004| = 0.00004$
*   Relative Error = $\frac{0.00004}{0.00006} \approx 0.667$ (or 66.7%)

This example shows **catastrophic cancellation**, where subtracting nearly equal numbers can amplify round-off errors, leading to a significant loss of accuracy.

---

### 7. Important Points to Remember

*   **Accuracy vs. Precision:** Know the difference. Accurate means close to the truth. Precise means consistent.
*   **Error is Inevitable:** All numerical computations involve some form of error. The goal is to manage and minimize it.
*   **Relative Error is Often More Meaningful:** Use relative error to gauge the significance of an error.
*   **Round-off vs. Truncation:** Understand their origins. Round-off comes from finite representation, truncation from approximation of infinite processes.
*   **Beware of Catastrophic Cancellation:** Be cautious when subtracting nearly equal numbers.
*   **Context Matters:** The acceptable level of accuracy and precision depends on the specific application.

---

### 8. Practice Questions and Exercises

**Question 1:**
Define accuracy and precision. Provide a real-world engineering example for each.

**Question 2:**
Calculate the absolute and relative errors for the following:
True Value = 50
Approximate Value = 48

**Question 3:**
Consider the Taylor series expansion for $\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$
If we approximate $\sin(0.5)$ using only the first two terms ($0.5 - \frac{0.5^3}{6}$), what is the truncation error? (True value $\sin(0.5) \approx 0.4794255$).

**Question 4:**
A sensor reading gives a value of 25.5 kg. The actual mass is 25.8 kg.
a) Calculate the absolute error.
b) Calculate the relative error.
c) If another sensor reading gives 100.2 kg for an actual mass of 100.5 kg, calculate its absolute and relative errors.
d) Compare the relative errors. Which sensor reading is more precise in relative terms?

**Question 5:**
Explain the difference between round-off error and truncation error, providing a brief example for each.

---

### 9. Answers to Practice Questions

**Answer 1:**
*   **Accuracy:** How close a computed value is to the true value.
    *   *Engineering Example:* The accuracy of a bridge design calculation would be how close the predicted stress and strain values are to the actual values experienced by the bridge under load.
*   **Precision:** How close a series of computed values are to each other.
    *   *Engineering Example:* The precision of repeated measurements of a component's dimension using a caliper. If the caliper consistently reads values between 9.98 mm and 10.02 mm for a nominal 10 mm shaft, it shows precision.

**Answer 2:**
*   Absolute Error = $|50 - 48| = 2$
*   Relative Error = $\frac{|50 - 48|}{|50|} = \frac{2}{50} = 0.04$ or 4%

**Answer 3:**
The Taylor series is $\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$
Approximation using first two terms: $A = x - \frac{x^3}{6}$
For $x = 0.5$: $A = 0.5 - \frac{(0.5)^3}{6} = 0.5 - \frac{0.125}{6} = 0.5 - 0.0208333 = 0.4791667$
True value $T = \sin(0.5) \approx 0.4794255$
The truncation error is the sum of the neglected terms, which starts with the $\frac{x^5}{5!}$ term.
Truncation Error $\approx \frac{(0.5)^5}{120} = \frac{0.03125}{120} \approx 0.0002604$
Alternatively, Truncation Error = True Value - Approximate Value
Truncation Error $\approx 0.4794255 - 0.4791667 = 0.0002588$ (This value is close to the estimate of the first omitted term.)

**Answer 4:**
a) Absolute error = $|25.8 - 25.5| = 0.3$ kg
b) Relative error = $\frac{|25.8 - 25.5|}{|25.8|} = \frac{0.3}{25.8} \approx 0.0116$ or 1.16%
c) Absolute error = $|100.5 - 100.2| = 0.3$ kg
   Relative error = $\frac{|100.5 - 100.2|}{|100.5|} = \frac{0.3}{100.5} \approx 0.002985$ or 0.2985%
d) The relative error for the second sensor reading (0.2985%) is much smaller than the relative error for the first sensor reading (1.16%). Therefore, the second sensor reading is more precise in relative terms.

**Answer 5:**
*   **Round-off Error:** This error arises from representing numbers with a finite number of digits in a computer. When a number has more digits than the computer can store, it must be rounded.
    *   *Example:* Storing the fraction 2/3 as a decimal in a system that can only hold 4 decimal places would result in 0.6667. The difference between 2/3 (0.6666...) and 0.6667 is the round-off error.
*   **Truncation Error:** This error occurs when an infinite process (like an infinite series or a continuous function) is approximated by a finite process.
    *   *Example:* Approximating the value of $\pi$ using the first few terms of its infinite series expansion. For example, using $3.14$ as an approximation for $\pi$ truncates all digits beyond the hundredths place.

---

This concludes Module 1, Topic: Accuracy and Precision. Understanding these concepts is foundational for all subsequent numerical techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
