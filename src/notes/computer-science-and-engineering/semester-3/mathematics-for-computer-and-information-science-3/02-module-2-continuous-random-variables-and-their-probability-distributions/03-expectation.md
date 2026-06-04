---
title: "Expectation"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab4d"
status: "completed"
scrapedAt: "2026-05-20T16:25:59.902Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3

**Module 2: Continuous Random Variables and Their Probability Distributions**

**Topic: Expectation**

**Learning Outcomes:** Upon completion of this topic, you will be able to:

*   Define the expectation (mean) of a continuous random variable.
*   Calculate the expectation of a continuous random variable given its probability density function (PDF).
*   Understand and apply the properties of expectation.
*   Calculate the expectation of functions of continuous random variables.
*   Apply expectation to solve real-world problems involving continuous random variables.

---

### 1. Introduction to Expectation

*   **What is Expectation?**  The expectation (also called the expected value or mean) of a continuous random variable is a weighted average of all possible values that the variable can take.  The weights are given by the probability density function (PDF) of the variable. Think of it as the "average" value you'd expect to see if you observed the random variable many times.

*   **Intuitive Analogy:**  Imagine balancing a seesaw.  The seesaw represents the range of possible values for the continuous random variable. The PDF determines how much "weight" each point on the seesaw has.  The expectation is the point at which you would need to place the fulcrum (balance point) to perfectly balance the seesaw.

### 2. Definition of Expectation for a Continuous Random Variable

*   Let X be a continuous random variable with probability density function (PDF) *f(x)*.  The expectation of X, denoted by E[X] or μ, is defined as:

    **E[X] = μ = ∫<sub>-∞</sub><sup>∞</sup> x * f(x) dx**

    *   **Key components:**
        *   `x`: represents a possible value of the random variable X.
        *   `f(x)`: represents the probability density at the value `x`.  It's *not* the probability itself, but rather a measure of how likely values are to occur near `x`.
        *   `∫<sub>-∞</sub><sup>∞</sup>`:  The definite integral from negative infinity to positive infinity. This sums up the weighted values over the entire range of possible values for X.

*   **Important Note:**  The integral must converge for the expectation to exist.  If the integral diverges, the expectation is undefined. This happens if the PDF assigns too much probability to very large or very small values.

### 3. Calculating Expectation: Examples

*   **Example 1: Uniform Distribution**

    *   Consider a random variable X that is uniformly distributed on the interval [a, b].  Its PDF is given by:

        f(x) =  1/(b-a)   for a ≤ x ≤ b
        f(x) =  0          otherwise

    *   To calculate E[X]:

        E[X] = ∫<sub>-∞</sub><sup>∞</sup> x * f(x) dx = ∫<sub>a</sub><sup>b</sup> x * (1/(b-a)) dx
              = (1/(b-a)) * [x<sup>2</sup>/2]<sub>a</sub><sup>b</sup>
              = (1/(b-a)) * (b<sup>2</sup>/2 - a<sup>2</sup>/2)
              = (b<sup>2</sup> - a<sup>2</sup>) / (2(b-a))
              = (b + a) / 2

        Therefore, the expectation of a uniform distribution on [a, b] is (a + b) / 2, which is simply the midpoint of the interval.

*   **Example 2: Exponential Distribution**

    *   Consider a random variable X that follows an exponential distribution with parameter λ > 0.  Its PDF is given by:

        f(x) = λe<sup>-λx</sup>    for x ≥ 0
        f(x) = 0          otherwise

    *   To calculate E[X]:

        E[X] = ∫<sub>-∞</sub><sup>∞</sup> x * f(x) dx = ∫<sub>0</sub><sup>∞</sup> x * λe<sup>-λx</sup> dx

        Using integration by parts: Let u = x, dv = λe<sup>-λx</sup> dx. Then du = dx, v = -e<sup>-λx</sup>.

        E[X] = [-xe<sup>-λx</sup>]<sub>0</sub><sup>∞</sup> + ∫<sub>0</sub><sup>∞</sup> e<sup>-λx</sup> dx
              = 0 + [- (1/λ) e<sup>-λx</sup>]<sub>0</sub><sup>∞</sup>
              = 0 + (1/λ)
              = 1/λ

        Therefore, the expectation of an exponential distribution with parameter λ is 1/λ.

### 4. Properties of Expectation

*   Let X be a continuous random variable, and let a and b be constants.

    1.  **E[a] = a** (The expected value of a constant is the constant itself.)
    2.  **E[aX] = aE[X]** (The expected value of a constant times a random variable is the constant times the expected value of the random variable.)
    3.  **E[aX + b] = aE[X] + b** (Linearity of expectation)
    4.  **E[X + Y] = E[X] + E[Y]** (The expectation of the sum of two random variables is the sum of their expectations - holds even if X and Y are dependent.)
    5.  **E[XY] = E[X]E[Y]  if X and Y are independent.** (The expectation of the product of two independent random variables is the product of their expectations.)

*   **Important Note:**  Properties 4 and 5 are powerful tools for simplifying calculations.  Property 4 always holds, regardless of dependence. However, Property 5 *only* holds if X and Y are independent.

### 5. Expectation of Functions of Continuous Random Variables

*   Let X be a continuous random variable with PDF *f(x)*, and let *g(x)* be a function of X.  The expectation of *g(X)* is defined as:

    **E[g(X)] = ∫<sub>-∞</sub><sup>∞</sup> g(x) * f(x) dx**

*   **Examples:**

    *   **E[X<sup>2</sup>]**  This is the expected value of X squared.  It is *not* the same as (E[X])<sup>2</sup>.  It is used to calculate the variance (see Module 3).

        E[X<sup>2</sup>] = ∫<sub>-∞</sub><sup>∞</sup> x<sup>2</sup> * f(x) dx

    *   **E[|X|]** This is the expected value of the absolute value of X.

        E[|X|] = ∫<sub>-∞</sub><sup>∞</sup> |x| * f(x) dx

### 6. Applications of Expectation

*   **Average Waiting Time:** Consider a customer arriving at a service counter. The time they wait (X) before being served is a continuous random variable. E[X] gives the average waiting time.

*   **Reliability Analysis:**  Suppose the lifetime of a component in a system is an exponentially distributed random variable. The expectation of this lifetime represents the Mean Time To Failure (MTTF).

*   **Financial Modeling:**  In financial modeling, the expected return of an investment is a crucial concept.  It represents the average return you would expect to receive over a long period.

*   **Simulation and Monte Carlo Methods:** Expectation plays a central role in simulation and Monte Carlo methods, where random sampling is used to estimate complex quantities.

### 7. Practice Questions and Exercises

**Question 1:**

A continuous random variable X has the following probability density function:

f(x) = cx<sup>2</sup>  for 0 ≤ x ≤ 1
f(x) = 0      otherwise

(a) Find the value of the constant c.
(b) Calculate E[X].
(c) Calculate E[X<sup>2</sup>].

**Solution 1:**

(a) To find 'c', we need to ensure that the integral of the PDF over the entire range is equal to 1:

∫<sub>-∞</sub><sup>∞</sup> f(x) dx = 1

∫<sub>0</sub><sup>1</sup> cx<sup>2</sup> dx = 1

c [x<sup>3</sup>/3]<sub>0</sub><sup>1</sup> = 1

c(1/3) = 1

c = 3

(b) E[X] = ∫<sub>-∞</sub><sup>∞</sup> x * f(x) dx = ∫<sub>0</sub><sup>1</sup> x * (3x<sup>2</sup>) dx = ∫<sub>0</sub><sup>1</sup> 3x<sup>3</sup> dx

E[X] = 3 [x<sup>4</sup>/4]<sub>0</sub><sup>1</sup> = 3(1/4) = 3/4

(c) E[X<sup>2</sup>] = ∫<sub>-∞</sub><sup>∞</sup> x<sup>2</sup> * f(x) dx = ∫<sub>0</sub><sup>1</sup> x<sup>2</sup> * (3x<sup>2</sup>) dx = ∫<sub>0</sub><sup>1</sup> 3x<sup>4</sup> dx

E[X<sup>2</sup>] = 3 [x<sup>5</sup>/5]<sub>0</sub><sup>1</sup> = 3(1/5) = 3/5

**Question 2:**

Let X be a continuous random variable with PDF:

f(x) = x/8   for 0 ≤ x ≤ 4
f(x) = 0    otherwise

Find E[3X + 2].

**Solution 2:**

Using the linearity of expectation: E[3X + 2] = 3E[X] + 2

First, we need to calculate E[X]:

E[X] = ∫<sub>-∞</sub><sup>∞</sup> x * f(x) dx = ∫<sub>0</sub><sup>4</sup> x * (x/8) dx = ∫<sub>0</sub><sup>4</sup> x<sup>2</sup>/8 dx

E[X] = (1/8) [x<sup>3</sup>/3]<sub>0</sub><sup>4</sup> = (1/8) (64/3) = 8/3

Now, we can calculate E[3X + 2]:

E[3X + 2] = 3(8/3) + 2 = 8 + 2 = 10

**Question 3:**

The time (in minutes) that a customer spends waiting in line at a bank is a continuous random variable with probability density function:

f(x) = (1/4)e<sup>-x/4</sup> for x ≥ 0
f(x) = 0            otherwise

What is the expected waiting time for a customer?

**Solution 3:**

This is an exponential distribution with λ = 1/4.  We know that E[X] = 1/λ.

Therefore, E[X] = 1/(1/4) = 4 minutes.

### 8. Important Points to Remember

*   The expectation is a measure of the *center* of the distribution.
*   The integral in the definition of expectation *must* converge.
*   Use the properties of expectation to simplify calculations.
*   E[X<sup>2</sup>] is not the same as (E[X])<sup>2</sup>.
*   When dealing with functions of random variables, use the formula E[g(X)] = ∫<sub>-∞</sub><sup>∞</sup> g(x) * f(x) dx.
*   Carefully check the range of integration based on the PDF.

---

This comprehensive guide should give you a firm grasp of the concept of expectation for continuous random variables and allow you to tackle related problems effectively.  Remember to practice the exercises and review the examples to solidify your understanding. Good luck!
