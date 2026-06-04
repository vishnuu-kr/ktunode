---
title: "Continuous random variables and their probability distributions"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab4b"
status: "completed"
scrapedAt: "2026-05-20T16:25:58.469Z"
---
# Mathematics for Computer and Information Science - 3
## Module 2: Continuous Random Variables and Their Probability Distributions
### Topic: Continuous Random Variables and Their Probability Distributions

**Learning Outcomes:**

*   Define continuous random variables and distinguish them from discrete random variables.
*   Understand and apply the concept of probability density functions (PDFs) for continuous random variables.
*   Calculate probabilities for continuous random variables using PDFs.
*   Understand and apply the concept of cumulative distribution functions (CDFs) for continuous random variables.
*   Calculate probabilities for continuous random variables using CDFs.
*   Calculate the expected value (mean) and variance of continuous random variables.
*   Understand and apply the properties of common continuous distributions: Uniform, Exponential, and Normal.
*   Solve problems involving continuous random variables and their distributions in various contexts.

---

**1. Continuous Random Variables: Definitions and Distinction from Discrete Random Variables**

*   **Definition:** A continuous random variable is a variable whose value can take on any value within a given range or interval.  Unlike discrete random variables, which can only take on specific, separate values (e.g., 0, 1, 2, 3), continuous variables can take on an infinite number of values.

*   **Examples:**
    *   Height of a student
    *   Temperature of a room
    *   Time it takes to complete a task
    *   Voltage of an electrical signal

*   **Distinction from Discrete Random Variables:**

    | Feature           | Discrete Random Variable             | Continuous Random Variable                     |
    |-------------------|------------------------------------|---------------------------------------------------|
    | Possible Values   | Separate, distinct values          | Any value within a range/interval                  |
    | Probability       | Probability Mass Function (PMF)    | Probability Density Function (PDF)                 |
    | Calculation       | Summation of probabilities        | Integration of the PDF                              |
    | Examples        | Number of coin flips, Dice roll   | Height, Weight, Temperature, Time                  |

**2. Probability Density Functions (PDFs)**

*   **Definition:**  A probability density function (PDF), denoted by *f(x)*, is a function that describes the relative likelihood for a continuous random variable to take on a given value.  It is crucial to remember that *f(x)* is *not* the probability that the variable takes the value *x*.  Instead, the probability is found by integrating the PDF over an interval.

*   **Properties of a PDF:**
    *   *f(x) ≥ 0* for all *x* (the PDF is non-negative everywhere)
    *   ∫<sub>-∞</sub><sup>∞</sup> *f(x) dx = 1* (the total area under the PDF curve is equal to 1)

*   **Important Note:**  For a continuous random variable, the probability that *X* takes a specific value *x* is always zero, i.e., *P(X = x) = 0*.  We only calculate probabilities over intervals: *P(a ≤ X ≤ b)*.

**3. Calculating Probabilities using PDFs**

*   **Probability of an Interval:**  The probability that a continuous random variable *X* falls between two values *a* and *b* is given by the integral of the PDF *f(x)* from *a* to *b*:

    *   *P(a ≤ X ≤ b) = ∫<sub>a</sub><sup>b</sup> f(x) dx*

*   **Example:** Suppose *X* has a PDF given by *f(x) = kx* for 0 ≤ *x* ≤ 2, and *f(x) = 0* otherwise.

    *   **a) Find the value of k:**
        *   Since ∫<sub>-∞</sub><sup>∞</sup> *f(x) dx = 1*, we have  ∫<sub>0</sub><sup>2</sup> *kx dx = 1*.
        *   Integrating, we get *k[x<sup>2</sup>/2]<sub>0</sub><sup>2</sup> = 1*, so *k(2 - 0) = 1*.
        *   Therefore, *k = 1/2*.

    *   **b) Find P(1 ≤ X ≤ 1.5):**
        *   *P(1 ≤ X ≤ 1.5) = ∫<sub>1</sub><sup>1.5</sup> (1/2)x dx = (1/2)[x<sup>2</sup>/2]<sub>1</sub><sup>1.5</sup> = (1/4)[(1.5)<sup>2</sup> - 1<sup>2</sup>] = (1/4)[2.25 - 1] = 0.3125*

**4. Cumulative Distribution Functions (CDFs)**

*   **Definition:** The cumulative distribution function (CDF), denoted by *F(x)*, gives the probability that a random variable *X* is less than or equal to a specific value *x*.

    *   *F(x) = P(X ≤ x)*

*   **Relationship to PDF:** The CDF is the integral of the PDF from -∞ to *x*:

    *   *F(x) = ∫<sub>-∞</sub><sup>x</sup> f(t) dt*  (where *t* is a dummy variable of integration)

*   **Properties of a CDF:**
    *   *0 ≤ F(x) ≤ 1* for all *x*
    *   *F(x)* is non-decreasing (as *x* increases, *F(x)* either increases or stays the same)
    *   *lim<sub>x→-∞</sub> F(x) = 0*
    *   *lim<sub>x→∞</sub> F(x) = 1*

**5. Calculating Probabilities using CDFs**

*   *P(X ≤ a) = F(a)*
*   *P(X > a) = 1 - F(a)*
*   *P(a < X ≤ b) = F(b) - F(a)*
*   *P(a ≤ X ≤ b) = F(b) - F(a)* (since P(X=a) = 0 for continuous random variables)

*   **Example:**  Using the same PDF as before, *f(x) = (1/2)x* for 0 ≤ *x* ≤ 2, and *f(x) = 0* otherwise, find the CDF *F(x)*.

    *   For *x < 0*, *F(x) = 0*.
    *   For *0 ≤ x ≤ 2*, *F(x) = ∫<sub>0</sub><sup>x</sup> (1/2)t dt = (1/2)[t<sup>2</sup>/2]<sub>0</sub><sup>x</sup> = (1/4)x<sup>2</sup>*.
    *   For *x > 2*, *F(x) = 1*.

    Therefore, the CDF is:

    *   *F(x) = 0*  for *x < 0*
    *   *F(x) = (1/4)x<sup>2</sup>* for *0 ≤ x ≤ 2*
    *   *F(x) = 1* for *x > 2*

    Now, find *P(1 ≤ X ≤ 1.5)* using the CDF:
    *   *P(1 ≤ X ≤ 1.5) = F(1.5) - F(1) = (1/4)(1.5)<sup>2</sup> - (1/4)(1)<sup>2</sup> = (1/4)(2.25) - (1/4)(1) = 0.5625 - 0.25 = 0.3125* (matches our previous result)

**6. Expected Value (Mean) and Variance of Continuous Random Variables**

*   **Expected Value (Mean):** The expected value (or mean), denoted by *E[X]* or *μ*, is the average value of a random variable over many trials.  For a continuous random variable, it is calculated as:

    *   *E[X] = ∫<sub>-∞</sub><sup>∞</sup> x * f(x) dx*

*   **Variance:** The variance, denoted by *Var(X)* or *σ<sup>2</sup>*, measures the spread or dispersion of the random variable around its mean. It is calculated as:

    *   *Var(X) = E[(X - μ)<sup>2</sup>] = ∫<sub>-∞</sub><sup>∞</sup> (x - μ)<sup>2</sup> * f(x) dx*
    *   An alternative formula is: *Var(X) = E[X<sup>2</sup>] - (E[X])<sup>2</sup>*  where *E[X<sup>2</sup>] = ∫<sub>-∞</sub><sup>∞</sup> x<sup>2</sup> * f(x) dx*

*   **Standard Deviation:** The standard deviation, denoted by *σ*, is the square root of the variance. It provides a more interpretable measure of spread in the same units as the random variable.

    *   *σ = √Var(X)*

*   **Example:**  For *f(x) = (1/2)x* for 0 ≤ *x* ≤ 2:

    *   *E[X] = ∫<sub>0</sub><sup>2</sup> x * (1/2)x dx = (1/2) ∫<sub>0</sub><sup>2</sup> x<sup>2</sup> dx = (1/2)[x<sup>3</sup>/3]<sub>0</sub><sup>2</sup> = (1/2)(8/3) = 4/3*

    *   *E[X<sup>2</sup>] = ∫<sub>0</sub><sup>2</sup> x<sup>2</sup> * (1/2)x dx = (1/2) ∫<sub>0</sub><sup>2</sup> x<sup>3</sup> dx = (1/2)[x<sup>4</sup>/4]<sub>0</sub><sup>2</sup> = (1/2)(16/4) = 2*

    *   *Var(X) = E[X<sup>2</sup>] - (E[X])<sup>2</sup> = 2 - (4/3)<sup>2</sup> = 2 - 16/9 = 2/9*

**7. Common Continuous Distributions**

*   **a) Uniform Distribution:**
    *   **Definition:**  A uniform distribution assigns equal probability to all values within a specified interval [a, b].
    *   **PDF:** *f(x) = 1/(b-a)* for *a ≤ x ≤ b*, and *f(x) = 0* otherwise.
    *   **CDF:** *F(x) = 0* for *x < a*; *F(x) = (x-a)/(b-a)* for *a ≤ x ≤ b*; *F(x) = 1* for *x > b*.
    *   **Expected Value:** *E[X] = (a + b)/2*
    *   **Variance:** *Var(X) = (b - a)<sup>2</sup> / 12*
    *   **Example:**  A random number generator produces numbers uniformly between 0 and 1.

*   **b) Exponential Distribution:**
    *   **Definition:**  The exponential distribution models the time until an event occurs in a Poisson process (events occurring randomly and independently at a constant average rate).  It is memoryless.
    *   **PDF:** *f(x) = λe<sup>-λx</sup>* for *x ≥ 0*, and *f(x) = 0* otherwise (where λ > 0 is the rate parameter).
    *   **CDF:** *F(x) = 1 - e<sup>-λx</sup>* for *x ≥ 0*, and *F(x) = 0* otherwise.
    *   **Expected Value:** *E[X] = 1/λ*
    *   **Variance:** *Var(X) = 1/λ<sup>2</sup>*
    *   **Example:**  The time until a hard drive fails, the time between customer arrivals at a store.

*   **c) Normal Distribution:**
    *   **Definition:** The normal (or Gaussian) distribution is a bell-shaped, symmetrical distribution that is widely used in statistics and probability.
    *   **PDF:** *f(x) = (1 / (σ√(2π))) * e<sup>-((x - μ)<sup>2</sup> / (2σ<sup>2</sup>))</sup>*  (where μ is the mean and σ is the standard deviation).
    *   **CDF:** The CDF of the normal distribution does not have a closed-form expression and is typically calculated using statistical tables or software.  We often work with the *standard normal distribution* which has mean 0 and standard deviation 1, and its CDF is denoted by Φ(z).
    *   **Expected Value:** *E[X] = μ*
    *   **Variance:** *Var(X) = σ<sup>2</sup>*
    *   **Standard Normal Distribution:** If *X* is normally distributed with mean *μ* and standard deviation *σ*, then *Z = (X - μ) / σ* has a standard normal distribution. We can use this to calculate probabilities: *P(a ≤ X ≤ b) = P((a - μ)/σ ≤ Z ≤ (b - μ)/σ) = Φ((b - μ)/σ) - Φ((a - μ)/σ)*.
    *   **Example:**  Heights of adults, errors in measurements.  The Central Limit Theorem states that the sum (or average) of a large number of independent random variables will be approximately normally distributed, regardless of the original distributions of the variables.

**8. Problem Solving Examples**

*   **Example 1:  Uniform Distribution**

    A bus arrives at a station every 15 minutes starting at 7:00 AM. If a passenger arrives at the station at a random time between 7:00 AM and 7:30 AM, what is the probability that they will have to wait less than 5 minutes for the bus?

    *   Let *X* be the time (in minutes past 7:00 AM) when the passenger arrives.  *X* is uniformly distributed between 0 and 30.
    *   The buses arrive at 0, 15, and 30 minutes past 7:00 AM.
    *   The passenger will wait less than 5 minutes if they arrive between 10 and 15 minutes, or between 25 and 30 minutes.
    *   *P(10 ≤ X ≤ 15 or 25 ≤ X ≤ 30) = P(10 ≤ X ≤ 15) + P(25 ≤ X ≤ 30)*  (since these are mutually exclusive events)
    *   The PDF is *f(x) = 1/30* for 0 ≤ x ≤ 30.
    *   *P(10 ≤ X ≤ 15) = ∫<sub>10</sub><sup>15</sup> (1/30) dx = (1/30)[x]<sub>10</sub><sup>15</sup> = (1/30)(15 - 10) = 5/30 = 1/6*
    *   *P(25 ≤ X ≤ 30) = ∫<sub>25</sub><sup>30</sup> (1/30) dx = (1/30)[x]<sub>25</sub><sup>30</sup> = (1/30)(30 - 25) = 5/30 = 1/6*
    *   *P(waiting less than 5 minutes) = 1/6 + 1/6 = 1/3*

*   **Example 2: Exponential Distribution**

    The lifetime of a light bulb is exponentially distributed with a mean of 1000 hours. What is the probability that the light bulb will last more than 1500 hours?

    *   Let *X* be the lifetime of the light bulb.  Since *E[X] = 1/λ = 1000*, then *λ = 1/1000 = 0.001*.
    *   *P(X > 1500) = 1 - P(X ≤ 1500) = 1 - F(1500) = 1 - (1 - e<sup>-λ(1500)</sup>) = e<sup>-λ(1500)</sup> = e<sup>-(0.001)(1500)</sup> = e<sup>-1.5</sup> ≈ 0.2231*

*   **Example 3: Normal Distribution**

    The scores on a test are normally distributed with a mean of 75 and a standard deviation of 8. What percentage of students scored between 70 and 85?

    *   Let *X* be the score on the test.  *X ~ N(75, 8<sup>2</sup>)*.  We want to find *P(70 ≤ X ≤ 85)*.
    *   *Z = (X - μ) / σ* so *Z = (X - 75) / 8*.
    *   *P(70 ≤ X ≤ 85) = P((70 - 75)/8 ≤ Z ≤ (85 - 75)/8) = P(-0.625 ≤ Z ≤ 1.25)*
    *   *P(-0.625 ≤ Z ≤ 1.25) = Φ(1.25) - Φ(-0.625)*
    *   Using a standard normal table, *Φ(1.25) ≈ 0.8944* and *Φ(-0.625) = 1 - Φ(0.625) ≈ 1 - 0.7340 = 0.2660*
    *   *P(70 ≤ X ≤ 85) ≈ 0.8944 - 0.2660 = 0.6284*
    *   Therefore, approximately 62.84% of the students scored between 70 and 85.

**9. Practice Questions/Exercises**

1.  **(Uniform)** The time it takes for a website to load is uniformly distributed between 2 and 8 seconds.
    *   (a) What is the probability that the website will load in less than 5 seconds?
    *   (b) What is the expected loading time?
    *   (c) What is the standard deviation of the loading time?

2.  **(Exponential)** The number of emails arriving at an inbox follows a Poisson process with a rate of 5 emails per hour.
    *   (a) What is the probability that the first email arrives in less than 15 minutes (0.25 hours)?
    *   (b) What is the probability that it takes more than 1 hour for the first email to arrive?

3.  **(Normal)** The weights of apples in an orchard are normally distributed with a mean of 150 grams and a standard deviation of 25 grams.
    *   (a) What percentage of apples weigh more than 180 grams?
    *   (b) What percentage of apples weigh between 120 and 160 grams?

**Answers to Practice Questions:**

1.  **(Uniform)**
    *   (a) 0.5
    *   (b) 5 seconds
    *   (c) 1.73 seconds

2.  **(Exponential)**
    *   (a) 0.713
    *   (b) 0.0067

3.  **(Normal)**
    *   (a) 11.51%
    *   (b) 53.28%

**10. Important Points to Remember**

*   The PDF *f(x)* is not the probability of *X = x* for continuous random variables.  Probabilities are calculated by integrating the PDF over an interval.
*   The total area under a PDF curve is always equal to 1.
*   The CDF *F(x)* represents the probability that *X ≤ x*.
*   Familiarize yourself with the properties and formulas for the Uniform, Exponential, and Normal distributions.
*   The standard normal distribution is a powerful tool for calculating probabilities associated with any normal distribution.
*   The Central Limit Theorem is a fundamental concept in statistics and probability.
