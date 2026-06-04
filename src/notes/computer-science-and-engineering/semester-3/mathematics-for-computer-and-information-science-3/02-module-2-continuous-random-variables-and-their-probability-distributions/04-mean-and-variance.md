---
title: "Mean and variance"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab4e"
status: "completed"
scrapedAt: "2026-05-20T16:26:00.618Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
## Module 2: Continuous Random Variables and their Probability Distributions
### Topic: Mean and Variance

**Learning Outcomes:**

*   Understand the concept of the mean (expected value) of a continuous random variable.
*   Understand the concept of the variance and standard deviation of a continuous random variable.
*   Be able to calculate the mean of a continuous random variable given its probability density function (PDF).
*   Be able to calculate the variance and standard deviation of a continuous random variable given its PDF.
*   Interpret the meaning of the mean and variance in the context of continuous random variables.
*   Apply properties of mean and variance, such as the effect of linear transformations.

---

**1. Introduction**

Just like discrete random variables, continuous random variables also possess measures of central tendency and dispersion.  The most important of these are the *mean* (or expected value) and the *variance* (or standard deviation).  These concepts help us understand the typical value we might expect from a random variable and the spread or variability around that typical value.

---

**2. Key Concepts and Definitions**

*   **Continuous Random Variable:** A random variable that can take on any value within a given range (interval). Examples: height, temperature, time.
*   **Probability Density Function (PDF):**  A function, denoted by f(x), that describes the probability distribution of a continuous random variable.  The area under the curve of the PDF between two points represents the probability that the variable falls within that range.
    *   Properties of a PDF:
        *   f(x) ≥ 0 for all x
        *   ∫-∞ to ∞ f(x) dx = 1 (The total area under the curve is 1)
*   **Mean (Expected Value) of a Continuous Random Variable (μ or E[X]):**  The average value of the random variable, weighted by its probability density.  It represents the center of the distribution.
*   **Variance of a Continuous Random Variable (σ² or Var[X]):**  A measure of the spread or dispersion of the distribution around the mean. It represents the average squared deviation from the mean.
*   **Standard Deviation of a Continuous Random Variable (σ):**  The square root of the variance.  It provides a measure of spread in the same units as the random variable.

---

**3. Mean (Expected Value) of a Continuous Random Variable**

*   **Definition:**  The mean (or expected value) of a continuous random variable X with PDF f(x) is given by:

    **E[X] = μ = ∫-∞ to ∞ x * f(x) dx**

    This integral represents the weighted average of all possible values of X, where the weights are given by the PDF.

*   **Interpretation:** The mean represents the average value you would expect to observe if you were to take many samples of the random variable. It is the balancing point of the probability distribution.

*   **Example:**

    Suppose a continuous random variable X has a PDF given by:

    f(x) = { 2x  , 0 ≤ x ≤ 1
           { 0  , otherwise

    Calculate the mean (E[X]).

    **Solution:**

    E[X] = ∫-∞ to ∞ x * f(x) dx = ∫0 to 1 x * (2x) dx = ∫0 to 1 2x² dx
         = [2/3 * x³]0 to 1 = 2/3 * (1³ - 0³) = 2/3

    Therefore, E[X] = 2/3.

---

**4. Variance and Standard Deviation of a Continuous Random Variable**

*   **Definition:** The variance of a continuous random variable X with PDF f(x) and mean μ is given by:

    **Var[X] = σ² = E[(X - μ)²] = ∫-∞ to ∞ (x - μ)² * f(x) dx**

    An alternative and often easier to use formula is:

    **Var[X] = E[X²] - (E[X])² = ∫-∞ to ∞ x² * f(x) dx  - (∫-∞ to ∞ x * f(x) dx)²**

*   **Definition:** The standard deviation of a continuous random variable X is the square root of its variance:

    **σ = √Var[X]**

*   **Interpretation:** The variance (and standard deviation) measure how spread out the distribution is around the mean. A larger variance indicates a greater degree of variability.  The standard deviation provides a measure of the typical deviation from the mean.

*   **Example:**

    Using the same PDF from the previous example:

    f(x) = { 2x  , 0 ≤ x ≤ 1
           { 0  , otherwise

    We already found E[X] = 2/3.  Now, calculate the variance (Var[X]).

    **Solution:**

    First, calculate E[X²]:

    E[X²] = ∫-∞ to ∞ x² * f(x) dx = ∫0 to 1 x² * (2x) dx = ∫0 to 1 2x³ dx
          = [2/4 * x⁴]0 to 1 = 1/2 * (1⁴ - 0⁴) = 1/2

    Now, calculate Var[X]:

    Var[X] = E[X²] - (E[X])² = 1/2 - (2/3)² = 1/2 - 4/9 = 9/18 - 8/18 = 1/18

    Therefore, Var[X] = 1/18.

    The standard deviation is σ = √(1/18) = 1 / (3√2) ≈ 0.2357.

---

**5. Properties of Mean and Variance**

*   **Linear Transformations:**

    Let X be a continuous random variable, and let a and b be constants. Then:

    *   E[aX + b] = aE[X] + b
    *   Var[aX + b] = a²Var[X]
    *   σ(aX + b) = |a| σ(X)

*   **Example:**

    Suppose X is a continuous random variable with E[X] = 5 and Var[X] = 4.  Let Y = 2X - 3.  Find E[Y] and Var[Y].

    **Solution:**

    *   E[Y] = E[2X - 3] = 2E[X] - 3 = 2(5) - 3 = 10 - 3 = 7
    *   Var[Y] = Var[2X - 3] = 2²Var[X] = 4(4) = 16

---

**6. Practice Questions/Exercises**

1.  A continuous random variable X has a PDF given by:

    f(x) = { kx²  , 0 ≤ x ≤ 2
           { 0  , otherwise

    a) Find the value of k that makes f(x) a valid PDF.
    b) Calculate E[X].
    c) Calculate Var[X].
    d) Calculate the standard deviation.

2.  The time (in minutes) that a customer spends in a bank is a continuous random variable X with PDF:

    f(x) = { (1/4)e^(-x/4)  , x ≥ 0
           { 0             , otherwise

    a)  Verify that f(x) is a valid PDF.
    b)  Calculate the expected time a customer spends in the bank.
    c)  Calculate the variance of the time spent.

3.  Let X be a continuous random variable with E[X] = 2 and Var[X] = 9.  Let Y = -3X + 1. Find E[Y] and Var[Y].

---

**7. Answers to Practice Questions/Exercises**

1.  a) To find k, we need ∫-∞ to ∞ f(x) dx = 1. So, ∫0 to 2 kx² dx = 1.
        k [x³/3]0 to 2 = 1
        k (8/3) = 1
        k = 3/8

    b) E[X] = ∫0 to 2 x * (3/8)x² dx = ∫0 to 2 (3/8)x³ dx
           = (3/8) [x⁴/4]0 to 2 = (3/8) (16/4) = (3/8) * 4 = 3/2

    c) E[X²] = ∫0 to 2 x² * (3/8)x² dx = ∫0 to 2 (3/8)x⁴ dx
           = (3/8) [x⁵/5]0 to 2 = (3/8) (32/5) = 12/5

       Var[X] = E[X²] - (E[X])² = 12/5 - (3/2)² = 12/5 - 9/4 = 48/20 - 45/20 = 3/20

    d) σ = √Var[X] = √(3/20) = √(3)/ (2√5) = √15 / 10 ≈ 0.3873

2.  a) ∫0 to ∞ (1/4)e^(-x/4) dx = [-e^(-x/4)]0 to ∞ = - (0 - 1) = 1.  Also, (1/4)e^(-x/4) ≥ 0 for all x ≥ 0.  Therefore, it is a valid PDF.

    b) E[X] = ∫0 to ∞ x * (1/4)e^(-x/4) dx
           Using integration by parts (u = x, dv = (1/4)e^(-x/4) dx, du = dx, v = -e^(-x/4)):
           = [-xe^(-x/4)]0 to ∞ + ∫0 to ∞ e^(-x/4) dx
           = 0 + [-4e^(-x/4)]0 to ∞ = 0 - (-4) = 4

       E[X] = 4 minutes

    c) E[X²] = ∫0 to ∞ x² * (1/4)e^(-x/4) dx

       Using integration by parts (twice), we find  E[X²] = 32

       Var[X] = E[X²] - (E[X])² = 32 - (4)² = 32 - 16 = 16

       Var[X] = 16 minutes²

3. E[Y] = E[-3X + 1] = -3E[X] + 1 = -3(2) + 1 = -6 + 1 = -5
   Var[Y] = Var[-3X + 1] = (-3)²Var[X] = 9(9) = 81

---

**8. Important Points to Remember**

*   The mean represents the "average" value of the continuous random variable.
*   The variance (and standard deviation) measures the spread or dispersion of the distribution.
*   Understand the properties of mean and variance under linear transformations. This can simplify calculations.
*   Always check if the PDF is valid (i.e., non-negative and integrates to 1).
*   Be careful with the limits of integration. They depend on the range where the PDF is non-zero.
*   Integration by parts is often required to compute E[X] and E[X²].
