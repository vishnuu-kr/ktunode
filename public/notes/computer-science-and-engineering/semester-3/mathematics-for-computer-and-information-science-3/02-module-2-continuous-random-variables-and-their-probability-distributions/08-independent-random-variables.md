---
title: "Independent random variables"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab52"
status: "completed"
scrapedAt: "2026-05-20T16:26:03.541Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
## Module 2: Continuous Random Variables and their Probability Distributions
### Topic: Independent Random Variables

**Learning Outcomes:**

*   Define independent random variables.
*   Determine if two or more continuous random variables are independent.
*   Calculate the joint probability density function (PDF) of independent random variables.
*   Calculate probabilities involving independent random variables.
*   Understand and apply the concept of covariance and correlation to independent random variables.

**1. Key Concepts and Definitions**

*   **Random Variable:** A variable whose value is a numerical outcome of a random phenomenon. We're focusing on *continuous* random variables here, meaning they can take on any value within a given range. Examples: height, temperature, time.

*   **Joint Probability Density Function (PDF):**  For continuous random variables *X* and *Y*, the joint PDF, denoted as *f(x, y)*, satisfies the following:
    *   *f(x, y) ≥ 0* for all *x* and *y*
    *   The total probability over the entire space is 1:  ∫∫ *f(x, y) dx dy* = 1 (integrated over the entire domain of *x* and *y*)
    *   The probability that *X* lies in the interval *[a, b]* and *Y* lies in the interval *[c, d]* is given by:  ∫<sub>c</sub><sup>d</sup>∫<sub>a</sub><sup>b</sup> *f(x, y) dx dy*

*   **Marginal PDF:** The marginal PDF of a single random variable is obtained by integrating the joint PDF over all possible values of the other random variable(s).
    *   *f<sub>X</sub>(x) = ∫ f(x, y) dy* (integrated over the entire domain of *y*)
    *   *f<sub>Y</sub>(y) = ∫ f(x, y) dx* (integrated over the entire domain of *x*)

*   **Independent Random Variables:** Two random variables *X* and *Y* are said to be independent if knowing the value of one does not affect the probability distribution of the other.  Mathematically, this is expressed as:

    *   *f(x, y) = f<sub>X</sub>(x) * f<sub>Y</sub>(y)*  for all *x* and *y*, where *f(x, y)* is the joint PDF, *f<sub>X</sub>(x)* is the marginal PDF of X, and *f<sub>Y</sub>(y)* is the marginal PDF of Y.

**2. Determining Independence**

To determine if two continuous random variables *X* and *Y* are independent:

1.  **Check the support:** If the region where *f(x, y) > 0* cannot be written as a product of intervals (i.e., *a < x < b* and *c < y < d*), then *X* and *Y* are **dependent**.  This is often the quickest way to check for dependence.

2.  **Calculate marginal PDFs:** Calculate *f<sub>X</sub>(x)* and *f<sub>Y</sub>(y)* using the formulas mentioned earlier.

3.  **Verify the product rule:** Check if *f(x, y) = f<sub>X</sub>(x) * f<sub>Y</sub>(y)* for all *x* and *y*.  If this holds true, then *X* and *Y* are independent.  If it fails to hold true for even one pair of (x,y) then X and Y are dependent.

**3. Joint PDF of Independent Random Variables**

If *X* and *Y* are independent continuous random variables, then their joint PDF is simply the product of their marginal PDFs:

*   *f(x, y) = f<sub>X</sub>(x) * f<sub>Y</sub>(y)*

**Example:**

Suppose *X* is uniformly distributed on [0, 1] and *Y* is exponentially distributed with parameter λ = 1. Assume *X* and *Y* are independent.  Find the joint PDF *f(x, y)*.

*   *f<sub>X</sub>(x) = 1*  for 0 ≤ x ≤ 1, 0 otherwise.
*   *f<sub>Y</sub>(y) = e<sup>-y</sup>* for y ≥ 0, 0 otherwise.

Since *X* and *Y* are independent,

*   *f(x, y) = f<sub>X</sub>(x) * f<sub>Y</sub>(y) = 1 * e<sup>-y</sup> = e<sup>-y</sup>* for 0 ≤ x ≤ 1 and y ≥ 0.  Otherwise, *f(x, y) = 0*.

**4. Calculating Probabilities with Independent Random Variables**

If *X* and *Y* are independent, calculating probabilities involving both variables becomes simpler:

*   *P(a < X < b, c < Y < d) = P(a < X < b) * P(c < Y < d)*

This is because:

*   *P(a < X < b, c < Y < d) = ∫<sub>c</sub><sup>d</sup>∫<sub>a</sub><sup>b</sup> f(x, y) dx dy = ∫<sub>c</sub><sup>d</sup>∫<sub>a</sub><sup>b</sup> f<sub>X</sub>(x) * f<sub>Y</sub>(y) dx dy = (∫<sub>a</sub><sup>b</sup> f<sub>X</sub>(x) dx) * (∫<sub>c</sub><sup>d</sup> f<sub>Y</sub>(y) dy) = P(a < X < b) * P(c < Y < d)*

**Example:**

Using the previous example (X ~ Uniform[0, 1], Y ~ Exponential(1), independent), find *P(0.2 < X < 0.5, 1 < Y < 2)*.

*   *P(0.2 < X < 0.5) = ∫<sub>0.2</sub><sup>0.5</sup> 1 dx = 0.5 - 0.2 = 0.3*
*   *P(1 < Y < 2) = ∫<sub>1</sub><sup>2</sup> e<sup>-y</sup> dy = [-e<sup>-y</sup>]<sub>1</sub><sup>2</sup> = -e<sup>-2</sup> - (-e<sup>-1</sup>) = e<sup>-1</sup> - e<sup>-2</sup> ≈ 0.2325*

Therefore, *P(0.2 < X < 0.5, 1 < Y < 2) = 0.3 * 0.2325 ≈ 0.06975*

**5. Covariance and Correlation of Independent Random Variables**

*   **Covariance:** The covariance between two random variables *X* and *Y* is a measure of how much they change together. It's defined as:

    *   *Cov(X, Y) = E[(X - E[X])(Y - E[Y])] = E[XY] - E[X]E[Y]*

*   **Correlation:** The correlation coefficient between two random variables *X* and *Y* is a normalized version of the covariance and is defined as:

    *   *ρ(X, Y) = Cov(X, Y) / (σ<sub>X</sub> * σ<sub>Y</sub>)*  where σ<sub>X</sub> and σ<sub>Y</sub> are the standard deviations of X and Y, respectively.

**Important Result:**  If *X* and *Y* are independent random variables, then their covariance is zero, and their correlation coefficient is also zero.

*   *Cov(X, Y) = 0*
*   *ρ(X, Y) = 0*

**Proof:**

If X and Y are independent,  *E[XY] = E[X]E[Y]*.  Therefore, *Cov(X, Y) = E[XY] - E[X]E[Y] = E[X]E[Y] - E[X]E[Y] = 0*.

**Important Note:**  *Cov(X, Y) = 0*  does *not* necessarily imply that *X* and *Y* are independent. It only implies that they are *uncorrelated*. Independence is a stronger condition.  However, *if X and Y are jointly normally distributed, then zero covariance implies independence*.

**6. Examples**

**Example 1: Determining Independence**

Let the joint PDF of *X* and *Y* be given by:

*   *f(x, y) = 2* for 0 < x < y < 1
*   *f(x, y) = 0* otherwise

Are *X* and *Y* independent?

**Solution:**

The region where *f(x, y) > 0* is defined by 0 < x < y < 1, or equivalently 0 < x < 1 and x < y < 1. This region is NOT a rectangular region of the form *a < x < b* and *c < y < d*. The constraint y > x links the possible values of Y to the value of X. Therefore, *X* and *Y* are **dependent**.  No need to calculate marginal PDFs!

**Example 2: Calculating Probability with Independent Variables**

Let *X* and *Y* be independent random variables, where *X* follows a standard normal distribution (mean 0, variance 1) and *Y* follows an exponential distribution with parameter λ = 2. Find the probability that *X* is greater than 0 and *Y* is less than 1.

**Solution:**

*   *P(X > 0) = 0.5* (Since the standard normal distribution is symmetric around 0)
*   *P(Y < 1) = ∫<sub>0</sub><sup>1</sup> 2e<sup>-2y</sup> dy = [-e<sup>-2y</sup>]<sub>0</sub><sup>1</sup> = -e<sup>-2</sup> - (-e<sup>0</sup>) = 1 - e<sup>-2</sup> ≈ 0.8647*

Since *X* and *Y* are independent:

*   *P(X > 0, Y < 1) = P(X > 0) * P(Y < 1) = 0.5 * (1 - e<sup>-2</sup>) ≈ 0.4324*

**7. Practice Questions/Exercises**

1.  Let *f(x, y) = cxy* for 0 < x < 1 and 0 < y < 1, and *f(x, y) = 0* otherwise.

    a. Find the value of *c* that makes *f(x, y)* a valid joint PDF.
    b. Are *X* and *Y* independent?
    c. Find *P(X < 0.5, Y > 0.5)*.

2.  *X* and *Y* are independent. *X* is uniformly distributed on [0, 2] and *Y* is uniformly distributed on [1, 3]. Find the joint PDF *f(x, y)* and calculate *P(X + Y < 3)*.

3.  Determine if the following joint PDF represents independent random variables: *f(x, y) = e<sup>-(x+y)</sup>* for x > 0 and y > 0, and *f(x, y) = 0* otherwise. If they are independent, calculate E[XY].

**Answers:**

1.  a. *c = 4*
    b. Yes, *X* and *Y* are independent. *f<sub>X</sub>(x) = 2x* and *f<sub>Y</sub>(y) = 2y*. Therefore, *f(x, y) = f<sub>X</sub>(x) * f<sub>Y</sub>(y)*.
    c. *P(X < 0.5, Y > 0.5) = P(X < 0.5) * P(Y > 0.5) = (0.5<sup>2</sup>) * (1 - 0.5<sup>2</sup>) = 0.25 * 0.75 = 0.1875*

2.  *f(x, y) = 1/4* for 0 < x < 2 and 1 < y < 3, and *f(x, y) = 0* otherwise.  *P(X + Y < 3) = 0.25* (Area of the region where X+Y<3 divided by total area. Graphing the region helps).

3.  Yes, X and Y are independent.
     *  *f<sub>X</sub>(x) = ∫<sub>0</sub><sup>∞</sup> e<sup>-(x+y)</sup> dy = e<sup>-x</sup>∫<sub>0</sub><sup>∞</sup> e<sup>-y</sup> dy = e<sup>-x</sup>* for x > 0 and 0 otherwise.
     *  *f<sub>Y</sub>(y) = ∫<sub>0</sub><sup>∞</sup> e<sup>-(x+y)</sup> dx = e<sup>-y</sup>∫<sub>0</sub><sup>∞</sup> e<sup>-x</sup> dx = e<sup>-y</sup>* for y > 0 and 0 otherwise.
     * Thus, *f(x,y) = f<sub>X</sub>(x) f<sub>Y</sub>(y)*.
     *  *E[XY] = E[X]E[Y] = (1)(1) = 1* (Since the exponential distribution with lambda=1 has a mean of 1).

**8. Important Points to Remember**

*   Independence is a crucial assumption that simplifies probability calculations.
*   Check for independence first. This can save time and effort.  Looking at the support is often a quick initial step.
*   If random variables are independent, their covariance and correlation are zero, but the converse is not always true.  Zero covariance does not imply independence (unless, for example, they are jointly normally distributed).
*   The joint PDF of independent random variables is the product of their marginal PDFs.
*   Probabilities involving independent random variables can be easily calculated by multiplying the individual probabilities.
