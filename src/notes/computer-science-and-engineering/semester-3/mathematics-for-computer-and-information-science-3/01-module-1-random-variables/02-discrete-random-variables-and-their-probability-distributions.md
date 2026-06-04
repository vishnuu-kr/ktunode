---
title: "Discrete random variables and their probability distributions"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 1: Random variables"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab3f"
status: "completed"
scrapedAt: "2026-05-20T16:25:50.619Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3

**Module 1: Random Variables**

**Topic: Discrete Random Variables and their Probability Distributions**

**Learning Outcomes:**

*   Define a random variable and differentiate between discrete and continuous random variables.
*   Define and compute the probability mass function (PMF) of a discrete random variable.
*   Define and compute the cumulative distribution function (CDF) of a discrete random variable.
*   Calculate the expected value (mean) and variance of a discrete random variable.
*   Recognize and apply common discrete probability distributions: Bernoulli, Binomial, Poisson.
*   Solve practical problems involving discrete random variables and their distributions.

---

### 1. Random Variables: Introduction

*   **Definition:** A random variable is a variable whose value is a numerical outcome of a random phenomenon. In simpler terms, it's a variable that represents the possible outcomes of a random experiment.

*   **Types of Random Variables:**

    *   **Discrete Random Variable:** A random variable that can only take on a finite number of values or a countably infinite number of values. These values are typically integers (whole numbers). Think of counting things.

        *   **Example:** The number of heads when flipping a coin 3 times (0, 1, 2, or 3).
        *   **Example:** The number of packets arriving at a router per second.
    *   **Continuous Random Variable:** A random variable that can take on any value within a given range.  Think of measuring things.

        *   **Example:** The height of a student.
        *   **Example:** The temperature of a room.

*   **Key Difference:** Discrete variables can be listed or counted, while continuous variables cannot.

### 2. Probability Mass Function (PMF)

*   **Definition:** The probability mass function (PMF) of a discrete random variable *X* is a function, often denoted as *p(x)* or *P(X = x)*, that gives the probability that *X* will be exactly equal to a particular value *x*.

*   **Requirements for a PMF:**

    *   0 ≤ *p(x)* ≤ 1 for all *x*  (Probabilities must be between 0 and 1, inclusive).
    *   Σ *p(x)* = 1  (The sum of the probabilities for all possible values of *x* must equal 1).

*   **Example:**  Consider flipping a fair coin twice. Let *X* be the number of heads. The possible values for *X* are 0, 1, and 2.

    *   *P(X = 0)* = 1/4 (TT)
    *   *P(X = 1)* = 2/4 = 1/2 (HT, TH)
    *   *P(X = 2)* = 1/4 (HH)

    *   The PMF can be written as:
        *   *p(0) = 1/4*
        *   *p(1) = 1/2*
        *   *p(2) = 1/4*
        *   *p(x) = 0* otherwise

### 3. Cumulative Distribution Function (CDF)

*   **Definition:** The cumulative distribution function (CDF) of a random variable *X* is a function, often denoted as *F(x)* or *P(X ≤ x)*, that gives the probability that *X* will take a value less than or equal to *x*.

*   **For Discrete Random Variables:**  *F(x) = P(X ≤ x) = Σ p(t)*, where the sum is taken over all values *t* of *X* such that *t ≤ x*.

*   **Properties of CDF:**

    *   0 ≤ *F(x)* ≤ 1 for all *x*.
    *   *F(x)* is non-decreasing (as *x* increases, *F(x)* either stays the same or increases).
    *   *F(-∞) = 0*
    *   *F(∞) = 1*

*   **Example (Continuing from the coin flip example):**

    *   *F(0) = P(X ≤ 0) = P(X = 0) = 1/4*
    *   *F(1) = P(X ≤ 1) = P(X = 0) + P(X = 1) = 1/4 + 1/2 = 3/4*
    *   *F(2) = P(X ≤ 2) = P(X = 0) + P(X = 1) + P(X = 2) = 1/4 + 1/2 + 1/4 = 1*

### 4. Expected Value (Mean) and Variance

*   **Expected Value (Mean), E[X] or μ:** The expected value of a discrete random variable *X* is the weighted average of its possible values, where the weights are the probabilities of those values.

    *   **Formula:** *E[X] = μ = Σ x * p(x)*

*   **Variance, Var(X) or σ<sup>2</sup>:** The variance of a discrete random variable *X* measures the spread or dispersion of its values around the mean.

    *   **Formula:** *Var(X) = σ<sup>2</sup> = E[(X - μ)<sup>2</sup>] = Σ (x - μ)<sup>2</sup> * p(x)*
    *   **Computational Formula:** *Var(X) = E[X<sup>2</sup>] - (E[X])<sup>2</sup>  = Σ x<sup>2</sup> * p(x) - μ<sup>2</sup>*

*   **Standard Deviation, σ:** The standard deviation is the square root of the variance and provides a measure of spread in the same units as the random variable.

    *   **Formula:** *σ = √Var(X)*

*   **Example (Coin Flip):**

    *   *E[X] = (0 * 1/4) + (1 * 1/2) + (2 * 1/4) = 0 + 1/2 + 1/2 = 1*
    *   *E[X<sup>2</sup>] = (0<sup>2</sup> * 1/4) + (1<sup>2</sup> * 1/2) + (2<sup>2</sup> * 1/4) = 0 + 1/2 + 1 = 3/2*
    *   *Var(X) = E[X<sup>2</sup>] - (E[X])<sup>2</sup> = 3/2 - 1<sup>2</sup> = 3/2 - 1 = 1/2*
    *   *σ = √(1/2) ≈ 0.707*

### 5. Common Discrete Probability Distributions

*   **Bernoulli Distribution:**

    *   Represents the probability of success or failure of a single trial.
    *   **Parameters:** *p* (probability of success)
    *   **PMF:** *p(x) = p<sup>x</sup> (1 - p)<sup>(1 - x)</sup>, where x ∈ {0, 1}*
    *   *E[X] = p*
    *   *Var(X) = p(1 - p)*
    *   **Example:** Flipping a coin once (success = heads, failure = tails).

*   **Binomial Distribution:**

    *   Represents the number of successes in a fixed number *n* of independent Bernoulli trials.
    *   **Parameters:** *n* (number of trials), *p* (probability of success on each trial)
    *   **PMF:** *p(x) = (n choose x) * p<sup>x</sup> * (1 - p)<sup>(n - x)</sup>, where x ∈ {0, 1, 2, ..., n}*
        *   Where (n choose x) = n! / (x! * (n-x)!)
    *   *E[X] = np*
    *   *Var(X) = np(1 - p)*
    *   **Example:** Flipping a coin 10 times and counting the number of heads.

*   **Poisson Distribution:**

    *   Represents the number of events occurring in a fixed interval of time or space.
    *   **Parameters:** *λ* (average rate of events)
    *   **PMF:** *p(x) = (e<sup>-λ</sup> * λ<sup>x</sup>) / x!, where x ∈ {0, 1, 2, ...}*
    *   *E[X] = λ*
    *   *Var(X) = λ*
    *   **Example:** The number of cars passing a certain point on a highway in one hour, where the average is 20 cars per hour.

### 6. Practical Problem Solving

*   **Example 1: Binomial Distribution**

    *   A computer program has a bug with probability 0.05.  If you run the program 20 times, what is the probability that it has a bug exactly 2 times?

        *   *n = 20*, *p = 0.05*, *x = 2*
        *   *P(X = 2) = (20 choose 2) * (0.05)<sup>2</sup> * (0.95)<sup>18</sup>*
        *   *P(X = 2) = (20! / (2! * 18!)) * (0.0025) * (0.3972) ≈ 0.1887*
        *   Therefore, the probability of the program having a bug exactly 2 times is approximately 18.87%.

*   **Example 2: Poisson Distribution**

    *   On average, 8 customers arrive at a store per hour. What is the probability that exactly 10 customers arrive in an hour?

        *   *λ = 8*, *x = 10*
        *   *P(X = 10) = (e<sup>-8</sup> * 8<sup>10</sup>) / 10!*
        *   *P(X = 10) ≈ (0.000335 * 1073741824) / 3628800 ≈ 0.0993*
        *   Therefore, the probability of exactly 10 customers arriving is approximately 9.93%.

---

### Practice Questions

1.  A fair six-sided die is rolled. Let *X* be the number that shows up.

    *   a) Find the PMF of *X*.
    *   b) Find the CDF of *X*.
    *   c) Calculate E[X].
    *   d) Calculate Var(X).

2.  A basketball player makes free throws with a probability of 0.7. She attempts 5 free throws.

    *   a) What is the probability that she makes exactly 3 free throws?
    *   b) What is the probability that she makes at least 4 free throws?
    *   c) What is the expected number of free throws she makes?

3.  A telephone switchboard receives an average of 3 calls per minute.

    *   a) What is the probability that it receives exactly 5 calls in a minute?
    *   b) What is the probability that it receives no calls in a minute?

### Answers to Practice Questions

1.  *a) p(x) = 1/6 for x = 1, 2, 3, 4, 5, 6; 0 otherwise.*

    *   *b) F(x) = 0 for x < 1, 1/6 for 1 ≤ x < 2, 2/6 for 2 ≤ x < 3, 3/6 for 3 ≤ x < 4, 4/6 for 4 ≤ x < 5, 5/6 for 5 ≤ x < 6, 1 for x ≥ 6.*

    *   *c) E[X] = 3.5*

    *   *d) Var(X) = 2.917*

2.  *a) P(X = 3) = (5 choose 3) * (0.7)<sup>3</sup> * (0.3)<sup>2</sup> = 0.3087*

    *   *b) P(X ≥ 4) = P(X = 4) + P(X = 5) = (5 choose 4) * (0.7)<sup>4</sup> * (0.3)<sup>1</sup> + (5 choose 5) * (0.7)<sup>5</sup> * (0.3)<sup>0</sup> = 0.36015 + 0.16807 = 0.52822*

    *   *c) E[X] = 5 * 0.7 = 3.5*

3.  *a) P(X = 5) = (e<sup>-3</sup> * 3<sup>5</sup>) / 5! = 0.1008*

    *   *b) P(X = 0) = (e<sup>-3</sup> * 3<sup>0</sup>) / 0! = e<sup>-3</sup> ≈ 0.0498*

---

### Important Points to Remember

*   A discrete random variable can only take on a finite or countably infinite number of values.
*   The PMF gives the probability of a discrete random variable taking on a specific value.
*   The CDF gives the probability of a discrete random variable taking on a value less than or equal to a specific value.
*   The expected value is the average value of a random variable.
*   The variance measures the spread of a random variable.
*   Bernoulli, Binomial, and Poisson distributions are common and useful models for various phenomena.  Understand their assumptions and parameters.
*   Always check that your PMF sums to 1 and your CDF is between 0 and 1.

This comprehensive guide covers the key concepts of discrete random variables and their probability distributions. By understanding these concepts and practicing the examples and exercises, you will be well-prepared to tackle problems in computer and information science that involve random variables. Remember to always consider the context of the problem when choosing the appropriate distribution and interpreting the results.
