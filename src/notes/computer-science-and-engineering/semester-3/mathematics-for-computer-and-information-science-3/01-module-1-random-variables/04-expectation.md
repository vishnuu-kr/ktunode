---
title: "Expectation"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 1: Random variables"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab41"
status: "completed"
scrapedAt: "2026-05-20T16:25:52.047Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
## Module 1: Random Variables
### Topic: Expectation

**Learning Outcomes:**

*   Define and explain the concept of expectation (expected value) for both discrete and continuous random variables.
*   Calculate the expectation of a discrete random variable.
*   Calculate the expectation of a continuous random variable.
*   Understand and apply the properties of expectation.
*   Calculate the expectation of a function of a random variable.
*   Apply the concept of expectation to solve problems in computer science and information science.

---

**1. Definition of Expectation (Expected Value)**

*   The **expectation** (also known as the expected value or mean) of a random variable represents the average value you would expect to obtain if you were to repeat the experiment associated with the random variable many times.  It's a weighted average, with the weights being the probabilities of each possible outcome.

**2. Expectation of a Discrete Random Variable**

*   **Definition:** Let *X* be a discrete random variable that takes on the values *x<sub>1</sub>*, *x<sub>2</sub>*, ..., *x<sub>n</sub>* with corresponding probabilities *p(x<sub>1</sub>)*, *p(x<sub>2</sub>)*, ..., *p(x<sub>n</sub>)*.  Then the expected value of *X*, denoted *E[X]*, is defined as:

    *   *E[X] = x<sub>1</sub>p(x<sub>1</sub>) + x<sub>2</sub>p(x<sub>2</sub>) + ... + x<sub>n</sub>p(x<sub>n</sub>) =  ∑<sub>i=1</sub><sup>n</sup> x<sub>i</sub>p(x<sub>i</sub>)*

    *   Where ∑ indicates the sum across all possible values of the random variable.
*   **Key Concept:** The expected value might not be a value that the random variable can actually take. It's an average.

*   **Example:**

    *   Consider a fair six-sided die. The random variable *X* represents the outcome of a single roll. The possible values are 1, 2, 3, 4, 5, and 6, each with a probability of 1/6.
    *   *E[X] = (1)(1/6) + (2)(1/6) + (3)(1/6) + (4)(1/6) + (5)(1/6) + (6)(1/6) = 3.5*
    *   Therefore, the expected value of rolling a fair six-sided die is 3.5.

*   **Example: Number of heads when flipping two coins**

    Let X be the random variable representing the number of heads when flipping two fair coins.  The possible values of X are 0, 1, and 2.

    *   P(X=0) = 1/4 (TT)
    *   P(X=1) = 1/2 (HT, TH)
    *   P(X=2) = 1/4 (HH)

    E[X] = (0)*(1/4) + (1)*(1/2) + (2)*(1/4) = 0 + 1/2 + 1/2 = 1

    Therefore, the expected number of heads is 1.

**3. Expectation of a Continuous Random Variable**

*   **Definition:** Let *X* be a continuous random variable with probability density function (PDF) *f(x)*.  Then the expected value of *X*, denoted *E[X]*, is defined as:

    *   *E[X] = ∫<sub>-∞</sub><sup>∞</sup> x f(x) dx*

    *   Where ∫ indicates the integral across all possible values of the random variable.

*   **Key Concept:**  The PDF, *f(x)*, represents the probability density at a given value *x*.  The integral calculates a weighted average of all possible values of *X*, using the PDF as the weight.

*   **Example:**

    *   Consider a continuous random variable *X* with a uniform distribution between 0 and 1.  Its PDF is *f(x) = 1* for 0 ≤ *x* ≤ 1, and *f(x) = 0* otherwise.
    *   *E[X] = ∫<sub>0</sub><sup>1</sup> x (1) dx = [x<sup>2</sup>/2]<sub>0</sub><sup>1</sup> = (1/2) - (0) = 1/2*
    *   Therefore, the expected value of a uniformly distributed random variable between 0 and 1 is 0.5.

*   **Example:** Exponential Distribution

    Let X be a random variable with exponential distribution and parameter λ > 0.  The PDF is f(x) = λe<sup>-λx</sup> for x ≥ 0, and 0 otherwise.

    E[X] = ∫<sub>0</sub><sup>∞</sup> xλe<sup>-λx</sup> dx

    Using integration by parts:
    Let u = x, dv = λe<sup>-λx</sup> dx
    du = dx, v = -e<sup>-λx</sup>

    E[X] = [-xe<sup>-λx</sup>]<sub>0</sub><sup>∞</sup>  +  ∫<sub>0</sub><sup>∞</sup> e<sup>-λx</sup> dx
    E[X] = 0 + [- (1/λ)e<sup>-λx</sup>]<sub>0</sub><sup>∞</sup>
    E[X] = 0 + (1/λ) = 1/λ

    Thus, the expected value of an exponential random variable with parameter λ is 1/λ.

**4. Properties of Expectation**

*   **Linearity:**
    *   *E[aX + b] = aE[X] + b*  where *a* and *b* are constants.
    *   *E[X + Y] = E[X] + E[Y]* for any random variables *X* and *Y*.
*   **Constant:**
    *   *E[c] = c* where *c* is a constant.

*   **Independence:**

    *   If X and Y are independent random variables, then E[XY] = E[X]E[Y].
    *   **Important Note:**  The converse is not necessarily true.  E[XY] = E[X]E[Y] does *not* necessarily imply that X and Y are independent.

**5. Expectation of a Function of a Random Variable**

*   **Discrete Case:** If *X* is a discrete random variable and *g(X)* is a function of *X*, then:

    *   *E[g(X)] = ∑<sub>i=1</sub><sup>n</sup> g(x<sub>i</sub>)p(x<sub>i</sub>)*

*   **Continuous Case:** If *X* is a continuous random variable and *g(X)* is a function of *X*, then:

    *   *E[g(X)] = ∫<sub>-∞</sub><sup>∞</sup> g(x) f(x) dx*

*   **Example (Discrete):**

    *   Let *X* be the outcome of rolling a fair die. What is the expected value of *X<sup>2</sup>*?
    *   *E[X<sup>2</sup>] = (1<sup>2</sup>)(1/6) + (2<sup>2</sup>)(1/6) + (3<sup>2</sup>)(1/6) + (4<sup>2</sup>)(1/6) + (5<sup>2</sup>)(1/6) + (6<sup>2</sup>)(1/6) = (1+4+9+16+25+36)/6 = 91/6 ≈ 15.17*

*   **Example (Continuous):**

    *   Let *X* be a continuous random variable with PDF *f(x) = 2x* for 0 ≤ *x* ≤ 1, and 0 otherwise. What is the expected value of *X<sup>2</sup>*?
    *   *E[X<sup>2</sup>] = ∫<sub>0</sub><sup>1</sup> x<sup>2</sup>(2x) dx = ∫<sub>0</sub><sup>1</sup> 2x<sup>3</sup> dx = [x<sup>4</sup>/2]<sub>0</sub><sup>1</sup> = 1/2*

**6. Applications in Computer and Information Science**

*   **Algorithm Analysis:**  Expected running time of algorithms (e.g., quicksort).
*   **Performance Modeling:**  Expected response time of a server.
*   **Machine Learning:**  Expected loss in a model.
*   **Information Theory:**  Expected code length (entropy).
*   **Queuing Theory:** Expected waiting time in a queue.
*   **Data Mining:**  Expected number of errors in a classification task.
*   **Networking:** Expected delay in packet transmission.

**7. Important Points to Remember**

*   The expectation is a theoretical average, not necessarily a value the random variable can take.
*   Linearity of expectation is a powerful tool for simplifying calculations.
*   Understanding the difference between discrete and continuous random variables is crucial for applying the correct formula for expectation.
*   Independence of random variables can simplify the calculation of expectation of products of random variables.
*   Expectation is a fundamental concept in probability and statistics and has numerous applications in computer science.

---

**Practice Questions/Exercises**

1.  **Discrete Random Variable:** A lottery has the following probabilities: win \$1000 with probability 0.001, win \$100 with probability 0.01, win \$10 with probability 0.1, and win nothing with probability 0.889. What is the expected value of a lottery ticket?

    *   **Answer:**  E[X] = (1000)(0.001) + (100)(0.01) + (10)(0.1) + (0)(0.889) = 1 + 1 + 1 + 0 = $3

2.  **Continuous Random Variable:**  Let *X* be a continuous random variable with PDF *f(x) = x/8* for 0 ≤ *x* ≤ 4, and 0 otherwise. Calculate *E[X]*.

    *   **Answer:** E[X] = ∫<sub>0</sub><sup>4</sup> x(x/8) dx = ∫<sub>0</sub><sup>4</sup> x<sup>2</sup>/8 dx = [x<sup>3</sup>/24]<sub>0</sub><sup>4</sup> = 64/24 = 8/3 ≈ 2.67

3.  **Function of a Random Variable:**  Let X be a random variable representing the number of heads when flipping two fair coins (as in the example above). What is E[X<sup>3</sup>]?

    *   **Answer:**
        *   P(X=0) = 1/4
        *   P(X=1) = 1/2
        *   P(X=2) = 1/4

        E[X<sup>3</sup>] = (0<sup>3</sup>)*(1/4) + (1<sup>3</sup>)*(1/2) + (2<sup>3</sup>)*(1/4) = 0 + 1/2 + 8/4 = 1/2 + 2 = 5/2 = 2.5

4.  **Properties of Expectation:** If E[X] = 5 and E[Y] = 10, what is E[2X + 3Y - 4]?

    *   **Answer:** E[2X + 3Y - 4] = 2E[X] + 3E[Y] - 4 = 2(5) + 3(10) - 4 = 10 + 30 - 4 = 36

5.  **Queuing theory:** The number of customers arriving at a bank teller each hour is described by the Poisson distribution with λ = 10. What is the expected number of arrivals in one hour?

    * **Answer:** For a Poisson distribution, E[X] = λ. Therefore, E[X] = 10.
---
