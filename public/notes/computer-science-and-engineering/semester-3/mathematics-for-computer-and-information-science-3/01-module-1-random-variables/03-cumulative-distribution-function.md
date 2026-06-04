---
title: "Cumulative distribution function"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 1: Random variables"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab40"
status: "completed"
scrapedAt: "2026-05-20T16:25:51.332Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
### Module 1: Random Variables
#### Topic: Cumulative Distribution Function (CDF)

**Learning Outcomes:**

*   Understand the definition of a cumulative distribution function (CDF).
*   Be able to calculate the CDF for both discrete and continuous random variables.
*   Understand the properties of a CDF.
*   Be able to use the CDF to calculate probabilities.
*   Distinguish between CDFs of discrete and continuous random variables.

**1. Key Concepts and Definitions**

*   **Random Variable:** A variable whose value is a numerical outcome of a random phenomenon.  Random variables can be discrete or continuous.

*   **Discrete Random Variable:** A random variable whose value can only take on a finite number of values or a countably infinite number of values (e.g., the number of heads in 3 coin flips).

*   **Continuous Random Variable:** A random variable whose value can take on any value within a given range (e.g., the height of a person).

*   **Cumulative Distribution Function (CDF):** The cumulative distribution function (CDF) of a real-valued random variable *X* is the function given by

    ```
    F_X(x) = P(X ≤ x)  for all x ∈ ℝ
    ```

    In other words, the CDF, *F_X(x)*, gives the probability that the random variable *X* takes on a value less than or equal to *x*.

**2. CDF for Discrete Random Variables**

*   Let *X* be a discrete random variable with probability mass function (PMF) *p_X(x)*.  The PMF, *p_X(x)*, gives the probability that *X* takes on the specific value *x*.

    ```
    p_X(x) = P(X = x)
    ```

*   The CDF for a discrete random variable *X* is given by:

    ```
    F_X(x) = P(X ≤ x) = Σ p_X(i)  where the sum is over all i such that i ≤ x
    ```

    This means that the CDF is the sum of the probabilities of all possible values of *X* that are less than or equal to *x*. The CDF of a discrete random variable is a *step function*.

*   **Example:**
    Consider a discrete random variable *X* representing the number of heads obtained when flipping a fair coin twice. The possible values of *X* are 0, 1, and 2. The PMF is as follows:

    *   P(X = 0) = 1/4 (TT)
    *   P(X = 1) = 1/2 (HT, TH)
    *   P(X = 2) = 1/4 (HH)

    Therefore, the CDF is:

    *   F_X(x) = 0 for x < 0
    *   F_X(x) = 1/4 for 0 ≤ x < 1
    *   F_X(x) = 3/4 for 1 ≤ x < 2
    *   F_X(x) = 1 for x ≥ 2

    **Graphical representation:** The CDF looks like steps. At x=0, it jumps to 1/4; at x=1, it jumps to 3/4; at x=2, it jumps to 1.

**3. CDF for Continuous Random Variables**

*   Let *X* be a continuous random variable with probability density function (PDF) *f_X(x)*. The PDF, *f_X(x)*, represents the density of the probability at a particular value *x*.

*   The CDF for a continuous random variable *X* is given by:

    ```
    F_X(x) = P(X ≤ x) = ∫ (-∞ to x) f_X(t) dt
    ```

    This means that the CDF is the integral of the PDF from negative infinity to *x*. The CDF of a continuous random variable is a *continuous* function.

*   **Example:**
    Consider a continuous random variable *X* with the following PDF:

    ```
    f_X(x) = { 2x  for 0 ≤ x ≤ 1
             { 0    otherwise
    ```

    To find the CDF, we integrate the PDF:

    *   For x < 0: F_X(x) = 0
    *   For 0 ≤ x ≤ 1: F_X(x) = ∫ (0 to x) 2t dt = [t^2] (from 0 to x) = x^2
    *   For x > 1: F_X(x) = 1

    Therefore, the CDF is:

    ```
    F_X(x) = { 0      for x < 0
             { x^2    for 0 ≤ x ≤ 1
             { 1      for x > 1
    ```

    **Graphical representation:**  The CDF is a continuous curve, starting at 0, increasing to 1, and then remaining at 1.

**4. Properties of CDFs**

*   **Non-decreasing:**  If *a < b*, then *F_X(a) ≤ F_X(b)*.  This is because the probability of *X ≤ b* includes the probability of *X ≤ a*.
*   **Right-continuous:**  lim (x -> a+) F_X(x) = F_X(a). This means the CDF is continuous from the right.
*   **Limits:**
    *   lim (x -> -∞) F_X(x) = 0
    *   lim (x -> +∞) F_X(x) = 1
*   **Probability Calculation:**  P(a < X ≤ b) = F_X(b) - F_X(a).  This is a crucial property for calculating probabilities between two values.
*   **P(X > a) = 1 - F_X(a)**.

**5. Distinguishing Between CDFs of Discrete and Continuous Random Variables**

| Feature           | Discrete RV CDF                         | Continuous RV CDF                       |
|-------------------|-------------------------------------------|------------------------------------------|
| Graph             | Step function                           | Continuous curve                        |
| Differentiability | Not differentiable at jump points         | Usually differentiable                  |
| Formula           | Sum of PMF values                       | Integral of PDF                        |
| P(X = x)          | Non-zero                                  | Always 0 (or negligibly small in practice)|

**6. Using the CDF to Calculate Probabilities**

The CDF is a powerful tool for calculating probabilities. Using the properties listed above, we can determine the probability of *X* falling within certain ranges.

*   P(X ≤ a) = F_X(a)
*   P(X > a) = 1 - F_X(a)
*   P(a < X ≤ b) = F_X(b) - F_X(a)
*   P(a ≤ X ≤ b) = F_X(b) - F_X(a) + P(X=a) [If X is discrete]
*   P(a < X < b) = F_X(b-) - F_X(a) = F_X(b) - P(X=b) - F_X(a) [If X is discrete]

**7. Practice Questions/Exercises with Answers**

**Question 1:**

A fair six-sided die is rolled. Let *X* be the number shown on the die.

(a) Find the CDF of *X*.

(b) What is P(X ≤ 3)?

(c) What is P(2 < X ≤ 5)?

**Answer 1:**

(a) The possible values of *X* are 1, 2, 3, 4, 5, and 6, each with probability 1/6. The CDF is:

*   F_X(x) = 0 for x < 1
*   F_X(x) = 1/6 for 1 ≤ x < 2
*   F_X(x) = 2/6 for 2 ≤ x < 3
*   F_X(x) = 3/6 for 3 ≤ x < 4
*   F_X(x) = 4/6 for 4 ≤ x < 5
*   F_X(x) = 5/6 for 5 ≤ x < 6
*   F_X(x) = 1 for x ≥ 6

(b) P(X ≤ 3) = F_X(3) = 3/6 = 1/2

(c) P(2 < X ≤ 5) = F_X(5) - F_X(2) = (5/6) - (2/6) = 3/6 = 1/2

**Question 2:**

A continuous random variable *X* has the following PDF:

```
f_X(x) = { kx  for 0 ≤ x ≤ 2
         { 0    otherwise
```

(a) Find the value of *k*.

(b) Find the CDF of *X*.

(c) What is P(1 ≤ X ≤ 1.5)?

**Answer 2:**

(a) To find *k*, we use the fact that the integral of the PDF over the entire range must be 1:

∫ (-∞ to ∞) f_X(x) dx = 1

∫ (0 to 2) kx dx = 1

k [x^2 / 2] (from 0 to 2) = 1

k (4/2) = 1

2k = 1

k = 1/2

(b) The CDF is:

*   For x < 0: F_X(x) = 0
*   For 0 ≤ x ≤ 2: F_X(x) = ∫ (0 to x) (1/2)t dt = (1/2) [t^2 / 2] (from 0 to x) = x^2 / 4
*   For x > 2: F_X(x) = 1

Therefore, the CDF is:

```
F_X(x) = { 0        for x < 0
         { x^2 / 4  for 0 ≤ x ≤ 2
         { 1        for x > 2
```

(c) P(1 ≤ X ≤ 1.5) = F_X(1.5) - F_X(1) = (1.5^2 / 4) - (1^2 / 4) = (2.25 / 4) - (1 / 4) = 1.25 / 4 = 0.3125

**Question 3:**

A discrete random variable Y has the following PMF: P(Y=1) = 0.2, P(Y=2) = 0.3, P(Y=3) = 0.4, P(Y=4) = 0.1.
Find F_Y(2.5).

**Answer 3:**

F_Y(2.5) = P(Y <= 2.5) = P(Y=1) + P(Y=2) = 0.2 + 0.3 = 0.5

**8. Important Points to Remember**

*   The CDF is always a non-decreasing function.
*   The CDF approaches 0 as *x* approaches negative infinity and approaches 1 as *x* approaches positive infinity.
*   The CDF can be used to calculate probabilities for both discrete and continuous random variables.
*   For discrete random variables, the CDF is a step function.
*   For continuous random variables, the CDF is a continuous function.
*   Remember the formulas: P(a < X ≤ b) = F_X(b) - F_X(a) and P(X > a) = 1 - F_X(a).

This comprehensive guide should help you understand the concept of cumulative distribution functions, how to calculate them for both discrete and continuous random variables, and how to use them to calculate probabilities. Good luck with your studies!
