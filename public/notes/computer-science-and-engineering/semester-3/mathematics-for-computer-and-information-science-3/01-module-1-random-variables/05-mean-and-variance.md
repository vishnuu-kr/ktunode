---
title: "Mean and variance"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 1: Random variables"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab42"
status: "completed"
scrapedAt: "2026-05-20T16:25:52.757Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
### Module 1: Random Variables
#### Topic: Mean and Variance

**Learning Outcomes:**

*   Understand the concept of a random variable.
*   Define and calculate the mean (expected value) of a discrete and continuous random variable.
*   Define and calculate the variance and standard deviation of a discrete and continuous random variable.
*   Apply mean and variance to solve problems involving random variables.
*   Understand and apply properties of mean and variance.

---

**1. Introduction to Random Variables (Review)**

*   **Definition:** A random variable is a variable whose value is a numerical outcome of a random phenomenon.

*   **Types:**
    *   **Discrete Random Variable:**  A variable whose value can only take on a finite number of values or a countably infinite number of values. (e.g., number of heads when flipping a coin 3 times: 0, 1, 2, 3)
    *   **Continuous Random Variable:** A variable that can take on any value within a given range. (e.g., height of a person, temperature)

*   **Probability Distribution:** A description of how probabilities are distributed over the values of the random variable.
    *   **Discrete:**  Probability Mass Function (PMF) - denoted as P(X = x), where X is the random variable and x is a specific value.  The sum of PMF values over all possible values of X equals 1.
    *   **Continuous:** Probability Density Function (PDF) - denoted as f(x). The area under the PDF curve over a given interval represents the probability of the random variable falling within that interval. The integral of the PDF over its entire range equals 1.

---

**2. Mean (Expected Value)**

*   **Definition:** The mean (or expected value) of a random variable is a measure of its central tendency. It represents the average value we would expect to observe if we repeated the random experiment many times.

*   **Discrete Random Variable:**
    *   **Formula:**  E[X] = μ = Σ [x * P(X = x)]
        *   Where:
            *   E[X] represents the expected value of X.
            *   μ represents the population mean.
            *   x represents each possible value of the random variable.
            *   P(X = x) represents the probability of the random variable X taking on the value x.
            *   The summation (Σ) is taken over all possible values of x.

    *   **Example:**  Consider a discrete random variable X representing the number of heads when flipping a coin twice. The possible values of X are 0, 1, and 2. Suppose P(X=0) = 0.25, P(X=1) = 0.5, and P(X=2) = 0.25.  Then, E[X] = (0 * 0.25) + (1 * 0.5) + (2 * 0.25) = 0 + 0.5 + 0.5 = 1.

*   **Continuous Random Variable:**
    *   **Formula:** E[X] = μ = ∫ [x * f(x) dx]
        *   Where:
            *   E[X] represents the expected value of X.
            *   μ represents the population mean.
            *   x represents a value of the continuous random variable.
            *   f(x) represents the probability density function at the value x.
            *   The integral (∫) is taken over the entire range of possible values of x.

    *   **Example:** Let's say X is uniformly distributed between 0 and 1.  Then the PDF f(x) = 1 for 0 ≤ x ≤ 1 and f(x) = 0 otherwise.
        E[X] = ∫[x * 1 dx] from 0 to 1 = [x²/2] from 0 to 1 = (1²/2) - (0²/2) = 1/2 = 0.5

**3. Variance and Standard Deviation**

*   **Definition:** Variance measures the spread or dispersion of a random variable around its mean.  Standard deviation is the square root of the variance and provides a more interpretable measure of spread in the same units as the random variable.

*   **Discrete Random Variable:**
    *   **Variance (Var[X] or σ²):**  Var[X] = σ² = Σ [(x - μ)² * P(X = x)]
        *   Where:
            *   Var[X] represents the variance of X.
            *   σ² represents the population variance.
            *   x represents each possible value of the random variable.
            *   μ represents the mean (expected value) of the random variable.
            *   P(X = x) represents the probability of the random variable X taking on the value x.
            *   The summation (Σ) is taken over all possible values of x.

    *   **Standard Deviation (SD[X] or σ):** SD[X] = σ = √Var[X]

    *   **Alternative Formula for Variance (Often easier to compute):** Var[X] = E[X²] - (E[X])²  where E[X²] = Σ [x² * P(X = x)]

    *   **Example (using the coin flip example from above):**  We know E[X] = 1.  Now, let's calculate the variance.  Using the first variance formula:
        *   Var[X] = ((0-1)² * 0.25) + ((1-1)² * 0.5) + ((2-1)² * 0.25) = (1 * 0.25) + (0 * 0.5) + (1 * 0.25) = 0.25 + 0 + 0.25 = 0.5
        *   Standard Deviation: SD[X] = √0.5 ≈ 0.707

    *   **Example (using the alternative variance formula):**
        * E[X²] = (0² * 0.25) + (1² * 0.5) + (2² * 0.25) = 0 + 0.5 + 1 = 1.5
        * Var[X] = E[X²] - (E[X])² = 1.5 - (1)² = 1.5 - 1 = 0.5  (Same result as before!)

*   **Continuous Random Variable:**
    *   **Variance (Var[X] or σ²):** Var[X] = σ² = ∫ [(x - μ)² * f(x) dx]
        *   Where:
            *   Var[X] represents the variance of X.
            *   σ² represents the population variance.
            *   x represents a value of the continuous random variable.
            *   μ represents the mean (expected value) of the random variable.
            *   f(x) represents the probability density function at the value x.
            *   The integral (∫) is taken over the entire range of possible values of x.

    *   **Standard Deviation (SD[X] or σ):** SD[X] = σ = √Var[X]

    *   **Alternative Formula for Variance:** Var[X] = E[X²] - (E[X])²  where E[X²] = ∫ [x² * f(x) dx]

    *   **Example (Uniform distribution example, X is uniformly distributed between 0 and 1):** We know E[X] = 0.5 and f(x) = 1 for 0 ≤ x ≤ 1.
        *   First, find E[X²] = ∫[x² * 1 dx] from 0 to 1 = [x³/3] from 0 to 1 = (1³/3) - (0³/3) = 1/3
        *   Var[X] = E[X²] - (E[X])² = (1/3) - (0.5)² = (1/3) - (1/4) = (4-3)/12 = 1/12
        *   Standard Deviation: SD[X] = √(1/12) ≈ 0.289

**4. Properties of Mean and Variance**

*   **Let X be a random variable and a, b be constants.**

    *   **Mean:**
        *   E[a] = a  (The expected value of a constant is the constant itself.)
        *   E[aX] = aE[X]  (Multiplying a random variable by a constant multiplies the expected value by that constant.)
        *   E[aX + b] = aE[X] + b  (Linearity of Expectation)
        *   E[X + Y] = E[X] + E[Y]  (Expected value of the sum of two random variables is the sum of their expected values.)

    *   **Variance:**
        *   Var[a] = 0  (The variance of a constant is zero.)
        *   Var[aX] = a²Var[X]  (Multiplying a random variable by a constant multiplies the variance by the square of that constant.)
        *   Var[aX + b] = a²Var[X] (Adding a constant doesn't change the variance.)
        *   If X and Y are *independent* random variables: Var[X + Y] = Var[X] + Var[Y]
        *   If X and Y are *not independent*: Var[X + Y] = Var[X] + Var[Y] + 2Cov(X, Y)  where Cov(X,Y) is the covariance of X and Y.  (Covariance is beyond the scope of this topic, but it's important to be aware of its role in dependent variables).

**5. Applications of Mean and Variance**

*   **Decision Making:**  Expected value can be used to make decisions in situations involving uncertainty. For example, in investment decisions, you can calculate the expected return of different investments and choose the one with the highest expected return (after considering risk, measured by standard deviation).

*   **Risk Assessment:** Variance (or standard deviation) is a measure of risk. A higher variance indicates greater variability and therefore higher risk.

*   **Quality Control:** Mean and variance are used to monitor the quality of products or processes. By tracking the mean and variance of certain characteristics, deviations from expected values can be detected and corrected.

*   **Machine Learning:** Mean and variance are used extensively in machine learning algorithms for data normalization, feature scaling, and model evaluation.  For example, StandardScaler in scikit-learn uses mean and standard deviation to standardize data.

**6. Practice Questions and Exercises**

**Question 1 (Discrete):**

A fair six-sided die is rolled. Let X be the random variable representing the number rolled.

a) Find the probability mass function (PMF) of X.
b) Calculate the mean (expected value) of X.
c) Calculate the variance of X.
d) Calculate the standard deviation of X.

**Answer:**

a) PMF: P(X = 1) = P(X = 2) = P(X = 3) = P(X = 4) = P(X = 5) = P(X = 6) = 1/6

b) E[X] = (1 * 1/6) + (2 * 1/6) + (3 * 1/6) + (4 * 1/6) + (5 * 1/6) + (6 * 1/6) = (1+2+3+4+5+6)/6 = 21/6 = 3.5

c) Var[X] = Σ [(x - μ)² * P(X = x)] =
  ((1-3.5)² * 1/6) + ((2-3.5)² * 1/6) + ((3-3.5)² * 1/6) + ((4-3.5)² * 1/6) + ((5-3.5)² * 1/6) + ((6-3.5)² * 1/6)
  = (6.25 + 2.25 + 0.25 + 0.25 + 2.25 + 6.25) / 6 = 17.5 / 6 ≈ 2.917

d) SD[X] = √Var[X] = √2.917 ≈ 1.708

**Question 2 (Continuous):**

Let X be a continuous random variable with the following probability density function (PDF):

f(x) =  x/8   for 0 ≤ x ≤ 4
f(x) =  0       otherwise

a) Verify that f(x) is a valid PDF.
b) Calculate the mean (expected value) of X.
c) Calculate the variance of X.
d) Calculate the standard deviation of X.

**Answer:**

a) To verify f(x) is a valid PDF, we need to show that it is non-negative and integrates to 1 over its entire range:

*   f(x) ≥ 0 for all x in [0, 4]. This is true since x/8 is non-negative for x in this interval.
*   ∫[f(x) dx] from -∞ to ∞ = ∫[x/8 dx] from 0 to 4 = [x²/16] from 0 to 4 = (4²/16) - (0²/16) = 16/16 = 1.  So, it's a valid PDF.

b) E[X] = ∫ [x * f(x) dx] from -∞ to ∞ = ∫ [x * (x/8) dx] from 0 to 4 = ∫ [x²/8 dx] from 0 to 4 = [x³/24] from 0 to 4 = (4³/24) - (0³/24) = 64/24 = 8/3 ≈ 2.667

c) First, find E[X²] = ∫ [x² * f(x) dx] from -∞ to ∞ = ∫ [x² * (x/8) dx] from 0 to 4 = ∫ [x³/8 dx] from 0 to 4 = [x⁴/32] from 0 to 4 = (4⁴/32) - (0⁴/32) = 256/32 = 8

Var[X] = E[X²] - (E[X])² = 8 - (8/3)² = 8 - 64/9 = (72 - 64)/9 = 8/9 ≈ 0.889

d) SD[X] = √Var[X] = √(8/9) ≈ 0.943

**Question 3 (Properties of Mean and Variance):**

Let X be a random variable with E[X] = 5 and Var[X] = 2. Let Y = 3X + 2.

a) Find E[Y].
b) Find Var[Y].
c) Find SD[Y].

**Answer:**

a) E[Y] = E[3X + 2] = 3E[X] + 2 = 3 * 5 + 2 = 15 + 2 = 17

b) Var[Y] = Var[3X + 2] = 3² * Var[X] = 9 * 2 = 18

c) SD[Y] = √Var[Y] = √18 = 3√2 ≈ 4.243

---

**7. Important Points to Remember:**

*   Understand the difference between discrete and continuous random variables.
*   Know the formulas for calculating mean and variance for both discrete and continuous random variables.
*   Remember the alternative formula for variance (E[X²] - (E[X])²) as it can often simplify calculations.
*   Understand and apply the properties of mean and variance. Pay close attention to how constants affect these measures.
*   When dealing with the sum of random variables, remember that Var[X + Y] = Var[X] + Var[Y] *only* if X and Y are independent.
*   Standard deviation is the square root of the variance and is in the same units as the original random variable, making it easier to interpret.
*   Mean represents the average value, while variance (or standard deviation) measures the spread or dispersion of the data.
