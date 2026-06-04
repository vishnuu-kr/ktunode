---
title: "Random variables"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 1: Random variables"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab3e"
status: "completed"
scrapedAt: "2026-05-20T16:25:49.906Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
## Module 1: Random Variables
### Topic: Random Variables

**Learning Outcomes:**

*   Understand the definition of a random variable (RV).
*   Distinguish between discrete and continuous random variables.
*   Calculate probabilities associated with random variables.
*   Determine the probability mass function (PMF) for discrete RVs.
*   Determine the probability density function (PDF) for continuous RVs.
*   Understand and calculate the cumulative distribution function (CDF) for both discrete and continuous RVs.
*   Calculate the expected value (mean) and variance of a random variable.

---

**1. Introduction to Random Variables**

*   **Definition:** A random variable (RV) is a variable whose value is a numerical outcome of a random phenomenon.  It's a function that maps outcomes of a sample space to real numbers.

*   **Why use random variables?**  They allow us to quantify the uncertainty inherent in random processes and use mathematical tools to analyze and predict outcomes.

*   **Example:** Consider flipping a coin three times. The sample space (all possible outcomes) is {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}.  Let X be the random variable representing the number of heads. Then:
    *   X(HHH) = 3
    *   X(HHT) = 2
    *   X(HTH) = 2
    *   ... and so on.

**2. Types of Random Variables**

*   **Discrete Random Variable:**
    *   A random variable is discrete if its range (the set of possible values) is finite or countably infinite.
    *   Discrete RVs typically represent counts (e.g., number of heads in a coin flip, number of defective items in a production run).

*   **Continuous Random Variable:**
    *   A random variable is continuous if its range is an interval (finite or infinite) of real numbers.
    *   Continuous RVs typically represent measurements (e.g., height, weight, temperature).

*   **Distinguishing between Discrete and Continuous:**
    *   Think about whether you can list out all the possible values (discrete) or if the values can fall anywhere within a range (continuous).

**3. Probability Mass Function (PMF) - Discrete Random Variables**

*   **Definition:** The probability mass function (PMF), denoted by P(X = x) or p(x), gives the probability that a discrete random variable X takes on a specific value x.

*   **Properties of a PMF:**
    *   0 ≤ p(x) ≤ 1 for all x
    *   ∑ p(x) = 1 (The sum of probabilities over all possible values of X must equal 1).
    *   P(X ∈ A) = ∑ p(x) for all x ∈ A, where A is a set of possible values.

*   **Example (Coin Flips):** Let X be the number of heads in two coin flips. The possible values for X are 0, 1, and 2.  Assuming a fair coin:
    *   P(X = 0) = P(TT) = 1/4
    *   P(X = 1) = P(HT or TH) = 2/4 = 1/2
    *   P(X = 2) = P(HH) = 1/4

    The PMF can be represented as:
    *   p(0) = 1/4
    *   p(1) = 1/2
    *   p(2) = 1/4

**4. Probability Density Function (PDF) - Continuous Random Variables**

*   **Definition:** The probability density function (PDF), denoted by f(x), describes the relative likelihood that a continuous random variable X will take on a specific value.

*   **Key Differences from PMF:**  Unlike the PMF, f(x) does *not* directly give the probability of X taking on a specific value. Instead, it represents a density.  The probability that X falls within a given interval is found by integrating the PDF over that interval.

*   **Properties of a PDF:**
    *   f(x) ≥ 0 for all x
    *   ∫ f(x) dx = 1 (The integral of the PDF over the entire range of X must equal 1).  The integral is usually from -infinity to +infinity.
    *   P(a ≤ X ≤ b) = ∫<sub>a</sub><sup>b</sup> f(x) dx (The probability that X falls between a and b is the area under the curve of f(x) from a to b).
    *   P(X = x) = 0 for any specific value x (for continuous RVs).  This is because the area under the PDF at a single point is zero.

*   **Example (Uniform Distribution):**  Suppose X is a continuous random variable uniformly distributed between 0 and 1. The PDF is:
    *   f(x) = 1  for 0 ≤ x ≤ 1
    *   f(x) = 0  otherwise

    Then, P(0.2 ≤ X ≤ 0.7) = ∫<sub>0.2</sub><sup>0.7</sup> 1 dx = [x]<sub>0.2</sub><sup>0.7</sup> = 0.7 - 0.2 = 0.5

**5. Cumulative Distribution Function (CDF)**

*   **Definition:** The cumulative distribution function (CDF), denoted by F(x), gives the probability that a random variable X takes on a value less than or equal to x.

*   **Formula:**
    *   For a discrete RV:  F(x) = P(X ≤ x) = ∑ p(t) for all t ≤ x
    *   For a continuous RV: F(x) = P(X ≤ x) = ∫<sub>-∞</sub><sup>x</sup> f(t) dt

*   **Properties of a CDF:**
    *   0 ≤ F(x) ≤ 1 for all x
    *   F(x) is non-decreasing (if a < b, then F(a) ≤ F(b)).
    *   lim<sub>x→-∞</sub> F(x) = 0
    *   lim<sub>x→+∞</sub> F(x) = 1
    *   P(a < X ≤ b) = F(b) - F(a)

*   **Example (Discrete - Coin Flips):**  Using the previous coin flip example where X is the number of heads in two flips, and p(0)=1/4, p(1)=1/2, p(2)=1/4:
    *   F(0) = P(X ≤ 0) = P(X = 0) = 1/4
    *   F(1) = P(X ≤ 1) = P(X = 0) + P(X = 1) = 1/4 + 1/2 = 3/4
    *   F(2) = P(X ≤ 2) = P(X = 0) + P(X = 1) + P(X = 2) = 1/4 + 1/2 + 1/4 = 1

*   **Example (Continuous - Uniform Distribution):** Using the previous uniform distribution where f(x) = 1 for 0 ≤ x ≤ 1:
    *   For x < 0, F(x) = 0
    *   For 0 ≤ x ≤ 1, F(x) = ∫<sub>-∞</sub><sup>x</sup> f(t) dt = ∫<sub>0</sub><sup>x</sup> 1 dt = [t]<sub>0</sub><sup>x</sup> = x
    *   For x > 1, F(x) = 1

    Therefore, the CDF is:
    *   F(x) = 0 for x < 0
    *   F(x) = x for 0 ≤ x ≤ 1
    *   F(x) = 1 for x > 1

**6. Expected Value (Mean) of a Random Variable**

*   **Definition:** The expected value, denoted by E[X] or μ, is a measure of the "center" of the distribution of a random variable.  It represents the average value we would expect to observe if we repeated the random experiment many times.

*   **Formula:**
    *   For a discrete RV: E[X] = ∑ x * p(x) (sum over all possible values of x)
    *   For a continuous RV: E[X] = ∫ x * f(x) dx (integral over the entire range of x)

*   **Example (Discrete - Coin Flips):**  Using the coin flip example:
    *   E[X] = (0 * 1/4) + (1 * 1/2) + (2 * 1/4) = 0 + 1/2 + 1/2 = 1

*   **Example (Continuous - Uniform Distribution):**
    *   E[X] = ∫<sub>-∞</sub><sup>∞</sup> x * f(x) dx = ∫<sub>0</sub><sup>1</sup> x * 1 dx = [x<sup>2</sup>/2]<sub>0</sub><sup>1</sup> = 1/2

**7. Variance of a Random Variable**

*   **Definition:** The variance, denoted by Var(X) or σ<sup>2</sup>, measures the spread or dispersion of a random variable's distribution around its expected value.

*   **Formula:**
    *   Var(X) = E[(X - E[X])<sup>2</sup>] = E[X<sup>2</sup>] - (E[X])<sup>2</sup>
    *   For a discrete RV: Var(X) = ∑ (x - E[X])<sup>2</sup> * p(x)
    *   For a continuous RV: Var(X) = ∫ (x - E[X])<sup>2</sup> * f(x) dx

*   **Standard Deviation:** The standard deviation, denoted by σ, is the square root of the variance.  It's a measure of spread in the same units as the random variable.

*   **Example (Discrete - Coin Flips):**  We know E[X] = 1.  First, let's calculate E[X<sup>2</sup>]:
    *   E[X<sup>2</sup>] = (0<sup>2</sup> * 1/4) + (1<sup>2</sup> * 1/2) + (2<sup>2</sup> * 1/4) = 0 + 1/2 + 1 = 3/2
    *   Var(X) = E[X<sup>2</sup>] - (E[X])<sup>2</sup> = 3/2 - (1)<sup>2</sup> = 3/2 - 1 = 1/2

*   **Example (Continuous - Uniform Distribution):**  We know E[X] = 1/2. First, calculate E[X<sup>2</sup>]:
    *   E[X<sup>2</sup>] = ∫<sub>0</sub><sup>1</sup> x<sup>2</sup> * 1 dx = [x<sup>3</sup>/3]<sub>0</sub><sup>1</sup> = 1/3
    *   Var(X) = E[X<sup>2</sup>] - (E[X])<sup>2</sup> = 1/3 - (1/2)<sup>2</sup> = 1/3 - 1/4 = 1/12

**8. Important Points to Remember**

*   Random variables are fundamental tools for analyzing random phenomena.
*   Distinguish carefully between discrete and continuous random variables, as they require different mathematical treatment.
*   The PMF and PDF are used to describe the probabilities associated with discrete and continuous random variables, respectively.
*   The CDF provides a cumulative probability, indicating the likelihood of a random variable being less than or equal to a given value.
*   Expected value represents the average value of a random variable, and variance quantifies its spread.

---

**Practice Questions & Exercises**

1.  **Discrete RV:**  A fair six-sided die is rolled. Let X be the number showing on the die.
    *   (a) What are the possible values of X?
    *   (b) What is the PMF of X?
    *   (c) What is the CDF of X?
    *   (d) What is the expected value of X?
    *   (e) What is the variance of X?

2.  **Continuous RV:**  Let X be a continuous random variable with the following PDF:
    *   f(x) = (2/9)x for 0 ≤ x ≤ 3
    *   f(x) = 0 otherwise
    *   (a) Verify that f(x) is a valid PDF.
    *   (b) Find the CDF of X.
    *   (c) Find P(1 ≤ X ≤ 2).
    *   (d) Calculate E[X].
    *   (e) Calculate Var(X).

---

**Answers to Practice Questions**

1.  **(a) Possible values of X:** {1, 2, 3, 4, 5, 6}
    **(b) PMF of X:** p(x) = 1/6 for x = 1, 2, 3, 4, 5, 6
    **(c) CDF of X:**
        *   F(x) = 0 for x < 1
        *   F(x) = 1/6 for 1 ≤ x < 2
        *   F(x) = 2/6 = 1/3 for 2 ≤ x < 3
        *   F(x) = 3/6 = 1/2 for 3 ≤ x < 4
        *   F(x) = 4/6 = 2/3 for 4 ≤ x < 5
        *   F(x) = 5/6 for 5 ≤ x < 6
        *   F(x) = 1 for x ≥ 6
    **(d) Expected value of X:** E[X] = (1 * 1/6) + (2 * 1/6) + (3 * 1/6) + (4 * 1/6) + (5 * 1/6) + (6 * 1/6) = 21/6 = 3.5
    **(e) Variance of X:**
        * E[X^2] = (1^2 * 1/6) + (2^2 * 1/6) + (3^2 * 1/6) + (4^2 * 1/6) + (5^2 * 1/6) + (6^2 * 1/6) = (1+4+9+16+25+36)/6 = 91/6
        * Var(X) = 91/6 - (3.5)^2 = 91/6 - 49/4 = (182 - 147)/12 = 35/12 ≈ 2.9167

2.  **(a) Verify PDF:**
    *   f(x) ≥ 0 for all x (true, since x is between 0 and 3, and 2/9 is positive).
    *   ∫<sub>-∞</sub><sup>∞</sup> f(x) dx = ∫<sub>0</sub><sup>3</sup> (2/9)x dx = (2/9) [x<sup>2</sup>/2]<sub>0</sub><sup>3</sup> = (2/9) * (9/2) = 1.  Therefore, it's a valid PDF.
    **(b) CDF of X:**
        *   F(x) = 0 for x < 0
        *   F(x) = ∫<sub>0</sub><sup>x</sup> (2/9)t dt = (2/9) [t<sup>2</sup>/2]<sub>0</sub><sup>x</sup> = (2/9) * (x<sup>2</sup>/2) = x<sup>2</sup>/9 for 0 ≤ x ≤ 3
        *   F(x) = 1 for x > 3

    So, F(x) =
    *   0, x<0
    *   x<sup>2</sup>/9, 0<=x<=3
    *   1, x>3
    **(c) P(1 ≤ X ≤ 2):** P(1 ≤ X ≤ 2) = F(2) - F(1) = (2<sup>2</sup>/9) - (1<sup>2</sup>/9) = 4/9 - 1/9 = 3/9 = 1/3
    **(d) E[X]:** E[X] = ∫<sub>0</sub><sup>3</sup> x * (2/9)x dx = (2/9) ∫<sub>0</sub><sup>3</sup> x<sup>2</sup> dx = (2/9) [x<sup>3</sup>/3]<sub>0</sub><sup>3</sup> = (2/9) * (27/3) = (2/9) * 9 = 2
    **(e) Var(X):**
        *   E[X<sup>2</sup>] = ∫<sub>0</sub><sup>3</sup> x<sup>2</sup> * (2/9)x dx = (2/9) ∫<sub>0</sub><sup>3</sup> x<sup>3</sup> dx = (2/9) [x<sup>4</sup>/4]<sub>0</sub><sup>3</sup> = (2/9) * (81/4) = 9/2 = 4.5
        *   Var(X) = E[X<sup>2</sup>] - (E[X])<sup>2</sup> = 9/2 - (2)<sup>2</sup> = 9/2 - 4 = 1/2 = 0.5
