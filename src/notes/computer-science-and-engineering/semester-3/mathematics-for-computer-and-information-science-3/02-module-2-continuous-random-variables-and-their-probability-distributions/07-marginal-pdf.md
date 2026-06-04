---
title: "Marginal pdf"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab51"
status: "completed"
scrapedAt: "2026-05-20T16:26:02.826Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Marginal PDF

**Learning Outcomes:**

*   Understand the concept of a joint probability density function (PDF) for continuous random variables.
*   Define and calculate the marginal PDF for a continuous random variable from a joint PDF.
*   Apply the concept of marginal PDF to solve problems involving probabilities related to individual random variables within a joint distribution.

---

**1. Joint Probability Density Function (PDF)**

*   **Definition:**  A joint probability density function (PDF), denoted as  `f(x, y)` for two continuous random variables X and Y, describes the probability density of the combined outcome of X and Y.  It's a function that, when integrated over a region in the XY-plane, gives the probability that the random variables X and Y fall within that region.

*   **Key Properties:**

    *   `f(x, y) >= 0` for all x and y (non-negativity).
    *   `∫∫ f(x, y) dx dy = 1`  (The double integral over the entire domain must equal 1).  This is because the probability of the random variable taking *some* value must be 1.

*   **Probability Calculation:** The probability that X lies between `a` and `b` and Y lies between `c` and `d` is given by the double integral:

    `P(a <= X <= b, c <= Y <= d) = ∫(c to d) ∫(a to b) f(x, y) dx dy`

*   **Example:** Suppose  `f(x, y) = cxy` for `0 < x < 1` and `0 < y < 1` and 0 elsewhere.  First, we need to find the constant `c` to ensure the function is a valid PDF.

    `∫(0 to 1) ∫(0 to 1) cxy dx dy = 1`
    `c ∫(0 to 1) y [x^2/2](0 to 1) dy = 1`
    `c ∫(0 to 1) (y/2) dy = 1`
    `c [y^2/4](0 to 1) = 1`
    `c/4 = 1`
    `c = 4`

    Therefore, `f(x, y) = 4xy` for `0 < x < 1` and `0 < y < 1`.

**2. Marginal PDF**

*   **Definition:** The marginal PDF of a single random variable from a joint PDF represents the probability distribution of that variable *regardless* of the values of the other variables. In essence, it gives the probability density of just that variable.

*   **Calculation (Two Variables):**

    *   The marginal PDF of X, denoted as `f_X(x)`, is found by integrating the joint PDF `f(x, y)` with respect to Y over its entire range:

        `f_X(x) = ∫ f(x, y) dy`  (Integral taken over the entire range of Y)

    *   The marginal PDF of Y, denoted as `f_Y(y)`, is found by integrating the joint PDF `f(x, y)` with respect to X over its entire range:

        `f_Y(y) = ∫ f(x, y) dx`  (Integral taken over the entire range of X)

*   **Calculation (Multiple Variables):** If you have a joint PDF with more than two variables, like `f(x, y, z)`, the marginal PDF of one variable is found by integrating the joint PDF over *all* the other variables. For instance:

    `f_X(x) = ∫∫ f(x, y, z) dy dz` (Integrals taken over the entire range of Y and Z)

*   **Key Idea:**  The marginal PDF represents the probability distribution of *just one* of the random variables, eliminating the influence of the others through integration.

*   **Example (Continuing from previous example):** We found that `f(x, y) = 4xy` for `0 < x < 1` and `0 < y < 1`.  Let's find the marginal PDFs of X and Y.

    *   Marginal PDF of X:

        `f_X(x) = ∫(0 to 1) 4xy dy = 4x [y^2/2](0 to 1) = 4x(1/2) = 2x` for `0 < x < 1` and 0 elsewhere.

    *   Marginal PDF of Y:

        `f_Y(y) = ∫(0 to 1) 4xy dx = 4y [x^2/2](0 to 1) = 4y(1/2) = 2y` for `0 < y < 1` and 0 elsewhere.

**3. Applying Marginal PDF to Probability Problems**

*   **Calculating Probabilities:** Once you have the marginal PDF of a variable, you can calculate probabilities for that variable just like with any single random variable.

    *   `P(a <= X <= b) = ∫(a to b) f_X(x) dx`
    *   `P(c <= Y <= d) = ∫(c to d) f_Y(y) dy`

*   **Example (Continuing from previous example):**  We have `f_X(x) = 2x` for `0 < x < 1`.  Let's find the probability that X is between 0.25 and 0.75.

    `P(0.25 <= X <= 0.75) = ∫(0.25 to 0.75) 2x dx = [x^2](0.25 to 0.75) = (0.75)^2 - (0.25)^2 = 0.5625 - 0.0625 = 0.5`

**Important Points to Remember:**

*   Marginal PDFs are crucial for analyzing the behavior of individual random variables within a joint distribution.
*   Integrating the joint PDF over all other variables *eliminates* their influence, resulting in the distribution of just the variable of interest.
*   Make sure the joint PDF is valid (non-negative and integrates to 1) before calculating marginal PDFs.
*   Always define the support (the range of values where the PDF is non-zero) for both the joint PDF and the marginal PDFs.

---

**Practice Questions/Exercises:**

1.  **Joint PDF:** `f(x, y) = k(x + y)` for `0 < x < 1` and `0 < y < 1`, and 0 elsewhere.

    a)  Find the value of `k` that makes this a valid joint PDF.
    b)  Find the marginal PDF of X, `f_X(x)`.
    c)  Find the marginal PDF of Y, `f_Y(y)`.
    d)  Calculate `P(0 < X < 0.5)`.
    e)  Calculate `P(0.25 < Y < 0.75)`.

2.  **Joint PDF:** `f(x, y) = 2` for `0 < x < y < 1`, and 0 elsewhere.

    a) Verify that this is a valid PDF.
    b) Find the marginal pdf of X.
    c) Find the marginal pdf of Y.
    d) Find P(X > 0.25).
    e) Find P(Y < 0.75).

---

**Answers to Practice Questions:**

1.  **Solution:**

    a)  `∫(0 to 1) ∫(0 to 1) k(x + y) dx dy = 1`
        `k ∫(0 to 1) [x^2/2 + xy](0 to 1) dy = 1`
        `k ∫(0 to 1) (1/2 + y) dy = 1`
        `k [y/2 + y^2/2](0 to 1) = 1`
        `k (1/2 + 1/2) = 1`
        `k = 1`

    b)  `f_X(x) = ∫(0 to 1) (x + y) dy = [xy + y^2/2](0 to 1) = x + 1/2` for `0 < x < 1` and 0 elsewhere.

    c)  `f_Y(y) = ∫(0 to 1) (x + y) dx = [x^2/2 + xy](0 to 1) = 1/2 + y` for `0 < y < 1` and 0 elsewhere.

    d) `P(0 < X < 0.5) = ∫(0 to 0.5) (x + 1/2) dx = [x^2/2 + x/2](0 to 0.5) = (0.5)^2/2 + 0.5/2 = 0.0625 + 0.25 = 0.3125`

    e) `P(0.25 < Y < 0.75) = ∫(0.25 to 0.75) (1/2 + y) dy = [y/2 + y^2/2](0.25 to 0.75) = (0.75/2 + (0.75)^2/2) - (0.25/2 + (0.25)^2/2) = 0.46875 - 0.15625 = 0.3125`

2. **Solution:**

    a) `∫∫f(x,y) dx dy = ∫(0 to 1)∫(0 to y) 2 dx dy = ∫(0 to 1) 2x | from 0 to y dy = ∫(0 to 1) 2y dy = y^2 | from 0 to 1 = 1` which verifies it as a valid PDF.
    b) `f_X(x) = ∫f(x,y) dy = ∫(x to 1) 2 dy = 2y | from x to 1 = 2(1 - x)` for 0 < x < 1 and 0 elsewhere.
    c) `f_Y(y) = ∫f(x,y) dx = ∫(0 to y) 2 dx = 2x | from 0 to y = 2y` for 0 < y < 1 and 0 elsewhere.
    d) `P(X > 0.25) = ∫(0.25 to 1) 2(1 - x) dx = ∫(0.25 to 1) (2 - 2x) dx = 2x - x^2 | from 0.25 to 1 = (2 - 1) - (0.5 - 0.0625) = 1 - 0.4375 = 0.5625`
    e) `P(Y < 0.75) = ∫(0 to 0.75) 2y dy = y^2 | from 0 to 0.75 = 0.75^2 = 0.5625`
