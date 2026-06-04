---
title: "Expected value of a function of two discrete variables."
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ebc"
status: "completed"
scrapedAt: "2026-05-20T17:54:38.252Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Expected Value of a Function of Two Discrete Variables

**Learning Outcomes:**

*   Understand the concept of the expected value of a function of two discrete random variables.
*   Calculate the expected value of a function of two discrete random variables using the joint probability mass function.
*   Apply the concept of expected value of a function of two discrete variables to solve problems in physical science.

**Course Outcomes Alignment:**

*   **CO1:** This topic directly addresses CO1 by extending the understanding of discrete random variables to situations involving two variables and applying them to random phenomena. (Knowledge Level: K3 - Understanding and Applying)

---

### 1. Introduction: Jointly Distributed Discrete Random Variables

When dealing with physical phenomena, it's often necessary to consider the behavior of multiple random quantities simultaneously. This leads us to the concept of jointly distributed random variables.

**Key Concept:**

*   **Jointly Distributed Discrete Random Variables:** Two or more discrete random variables are jointly distributed if their outcomes occur together. Their relationship is described by a **joint probability mass function (joint PMF)**.

**Definition:**

Let $X$ and $Y$ be two discrete random variables. The **joint probability mass function** of $X$ and $Y$, denoted by $p_{X,Y}(x, y)$, is defined as:

$p_{X,Y}(x, y) = P(X = x, Y = y)$

where $x$ and $y$ are possible values of $X$ and $Y$, respectively.

**Properties of a Joint PMF:**

*   $p_{X,Y}(x, y) \ge 0$ for all $x$ and $y$.
*   $\sum_{x} \sum_{y} p_{X,Y}(x, y) = 1$, where the summation is over all possible values of $X$ and $Y$.

**Reference:**

*   Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Chapter 3 discusses joint distributions).
*   Papoulis, A., & Pillai, S. U. (2002). *Probability, Random Variables and Stochastic Processes* (4th ed.). McGraw Hill. (Chapter 5 covers joint distributions).

---

### 2. Expected Value of a Function of Two Discrete Variables

We are often interested in the expected value of a function of these jointly distributed random variables, say $h(X, Y)$. This represents the average value of the function $h$ when $X$ and $Y$ take on their values according to their joint distribution.

**Key Concept:**

*   **Expected Value of a Function:** The expected value of a function $h(X, Y)$ of two discrete random variables $X$ and $Y$ is the weighted average of the possible values of $h(X, Y)$, where the weights are the joint probabilities of $X$ and $Y$ occurring together.

**Definition:**

The **expected value of a function $h(X, Y)$ of two discrete random variables $X$ and $Y$** is given by:

$E[h(X, Y)] = \sum_{x} \sum_{y} h(x, y) \cdot p_{X,Y}(x, y)$

where the summation is over all possible values $x$ of $X$ and all possible values $y$ of $Y$.

**Important Note:** This formula is analogous to the formula for the expected value of a single discrete random variable, $E[g(X)] = \sum_{x} g(x) \cdot p_X(x)$.

**Reference:**

*   Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Section 3.4 covers expected values of functions of random variables).
*   Ross, S. M. (2020). *Introduction to Probability and Statistics for Engineers and Scientists* (6th ed.). Academic Press. (Chapter 4 deals with expected values of functions).

---

### 3. Properties of Expected Value for Two Discrete Variables

Several important properties simplify calculations and provide insights into the expected value of functions of random variables.

**Key Properties:**

1.  **Linearity of Expectation:** For any constants $a$ and $b$, and functions $h_1(X, Y)$ and $h_2(X, Y)$:
    $E[a \cdot h_1(X, Y) + b \cdot h_2(X, Y)] = a \cdot E[h_1(X, Y)] + b \cdot E[h_2(X, Y)]$

    *   **Special Case:** $E[aX + bY] = aE[X] + bE[Y]$. This holds regardless of whether $X$ and $Y$ are independent.

2.  **Expected Value of a Constant:** For any constant $c$:
    $E[c] = c$

3.  **Expected Value of a Function of X plus a Function of Y:**
    $E[g(X) + k(Y)] = E[g(X)] + E[k(Y)]$

**Proof/Justification (Linearity Example):**

$E[a \cdot h_1(X, Y) + b \cdot h_2(X, Y)] = \sum_{x} \sum_{y} [a \cdot h_1(x, y) + b \cdot h_2(x, y)] \cdot p_{X,Y}(x, y)$
$= \sum_{x} \sum_{y} a \cdot h_1(x, y) \cdot p_{X,Y}(x, y) + \sum_{x} \sum_{y} b \cdot h_2(x, y) \cdot p_{X,Y}(x, y)$
$= a \sum_{x} \sum_{y} h_1(x, y) \cdot p_{X,Y}(x, y) + b \sum_{x} \sum_{y} h_2(x, y) \cdot p_{X,Y}(x, y)$
$= a E[h_1(X, Y)] + b E[h_2(X, Y)]$

**Reference:**

*   Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Section 3.4).
*   Papoulis, A., & Pillai, S. U. (2002). *Probability, Random Variables and Stochastic Processes* (4th ed.). McGraw Hill. (Chapter 5).

---

### 4. Examples in Physical Science

Understanding the expected value of functions of random variables is crucial for analyzing systems with inherent randomness.

**Example 1: Expected Value of a Sum of Two Random Variables (e.g., Total Energy)**

Consider a system where the total energy $E$ is the sum of the energies of two independent components, $E_1$ and $E_2$, which are discrete random variables.

*   Let $E_1$ and $E_2$ be discrete random variables representing the energy of two components.
*   The joint PMF of $E_1$ and $E_2$ is $p_{E_1, E_2}(e_1, e_2) = p_{E_1}(e_1) \cdot p_{E_2}(e_2)$ if they are independent.
*   We want to find the expected total energy $E[E_1 + E_2]$.

Using the linearity of expectation:
$E[E_1 + E_2] = E[E_1] + E[E_2]$

This shows that the expected total energy is simply the sum of the expected energies of the individual components, a powerful result that doesn't require knowing the joint distribution explicitly if independence is known.

**Example 2: Expected Value of a Product of Two Random Variables (e.g., Power)**

In electrical engineering, power $P$ delivered to a load can be the product of voltage $V$ and current $I$, where both $V$ and $I$ are discrete random variables.

*   Let $V$ and $I$ be discrete random variables representing voltage and current, respectively.
*   We want to find the expected power $E[P] = E[V \cdot I]$.

Using the definition:
$E[V \cdot I] = \sum_{v} \sum_{i} (v \cdot i) \cdot p_{V,I}(v, i)$

If $V$ and $I$ are independent, then $p_{V,I}(v, i) = p_V(v) \cdot p_I(i)$. In this case:
$E[V \cdot I] = \sum_{v} \sum_{i} (v \cdot i) \cdot p_V(v) \cdot p_I(i)$
$= \sum_{v} v \cdot p_V(v) \cdot \sum_{i} i \cdot p_I(i)$
$= E[V] \cdot E[I]$

This demonstrates that for independent random variables, the expected value of the product is the product of the expected values. This is a crucial result for analyzing signal processing and power systems.

**Example 3: Expected Value of a Squared Random Variable (e.g., Variance Calculation)**

Variance is defined as $Var(X) = E[(X - E[X])^2]$. This is a function of a single random variable. However, if we consider the relationship between variables, e.g., $Cov(X,Y) = E[(X - E[X])(Y - E[Y])]$, we see the application of functions of two variables.

Let's consider the expected value of the squared difference from the mean for a single variable $X$:
$E[(X - \mu)^2]$ where $\mu = E[X]$.
Let $Y = X - \mu$. Then we are looking for $E[Y^2]$.
$E[Y^2] = \sum_{y} y^2 \cdot p_Y(y)$
Alternatively, by expanding $(X - \mu)^2 = X^2 - 2\mu X + \mu^2$:
$E[(X - \mu)^2] = E[X^2 - 2\mu X + \mu^2]$
Using linearity:
$= E[X^2] - E[2\mu X] + E[\mu^2]$
$= E[X^2] - 2\mu E[X] + \mu^2$ (since $2\mu$ and $\mu^2$ are constants)
$= E[X^2] - 2\mu(\mu) + \mu^2$
$= E[X^2] - 2\mu^2 + \mu^2$
$= E[X^2] - \mu^2$
$= E[X^2] - (E[X])^2$

This shows that variance is the expected value of the square of the random variable minus the square of its expected value. The calculation of $E[X^2]$ itself involves the formula for the expected value of a function $h(X) = X^2$.

**Reference:**

*   Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Chapter 4 discusses variance and covariance, which build upon expected values of functions).

---

### 5. Practice Questions and Exercises

**Question 1:**

Two discrete random variables $X$ and $Y$ have the following joint probability mass function:

| $p_{X,Y}(x, y)$ | $Y=0$ | $Y=1$ | $Y=2$ |
| :-------------: | :---: | :---: | :---: |
|     $X=0$       |  0.1  |  0.2  |  0.1  |
|     $X=1$       |  0.1  |  0.3  |  0.2  |

Calculate $E[X \cdot Y^2]$.

**Solution:**

We need to calculate $\sum_{x} \sum_{y} (x \cdot y^2) \cdot p_{X,Y}(x, y)$.

Let's list the terms:
*   $x=0, y=0: (0 \cdot 0^2) \cdot 0.1 = 0$
*   $x=0, y=1: (0 \cdot 1^2) \cdot 0.2 = 0$
*   $x=0, y=2: (0 \cdot 2^2) \cdot 0.1 = 0$
*   $x=1, y=0: (1 \cdot 0^2) \cdot 0.1 = 0$
*   $x=1, y=1: (1 \cdot 1^2) \cdot 0.3 = 1 \cdot 1 \cdot 0.3 = 0.3$
*   $x=1, y=2: (1 \cdot 2^2) \cdot 0.2 = 1 \cdot 4 \cdot 0.2 = 0.8$

Summing these terms: $E[X \cdot Y^2] = 0 + 0 + 0 + 0 + 0.3 + 0.8 = 1.1$.

**Answer:** $E[X \cdot Y^2] = 1.1$

**Question 2:**

Let $X$ and $Y$ be independent discrete random variables with $P(X=0)=0.4, P(X=1)=0.6$ and $P(Y=0)=0.7, P(Y=1)=0.3$. Calculate $E[3X - 2Y]$.

**Solution:**

Using the linearity of expectation: $E[3X - 2Y] = 3E[X] - 2E[Y]$.

First, calculate $E[X]$:
$E[X] = (0 \cdot 0.4) + (1 \cdot 0.6) = 0 + 0.6 = 0.6$

Next, calculate $E[Y]$:
$E[Y] = (0 \cdot 0.7) + (1 \cdot 0.3) = 0 + 0.3 = 0.3$

Now, substitute these values into the expression for $E[3X - 2Y]$:
$E[3X - 2Y] = 3(0.6) - 2(0.3) = 1.8 - 0.6 = 1.2$

**Answer:** $E[3X - 2Y] = 1.2$

**Question 3:**

Consider two random variables $X$ and $Y$ representing the number of defects in the first and second halves of a semiconductor wafer, respectively. Their joint PMF is given by:

$p_{X,Y}(x, y) = \frac{e^{-(\lambda_1 + \lambda_2)}}{x!y!} \frac{\lambda_1^x \lambda_2^y}{x!y!}$ if $x, y \ge 0$ are integers. This is a form of a bivariate Poisson distribution, where $X \sim Poisson(\lambda_1)$ and $Y \sim Poisson(\lambda_2)$ independently.

Let $h(X, Y) = X + Y$ represent the total number of defects. What is the expected total number of defects, $E[X+Y]$?

**Solution:**

We know that for a Poisson distribution with parameter $\lambda$, the expected value is $E[X] = \lambda$.
So, $E[X] = \lambda_1$ and $E[Y] = \lambda_2$.

Using the linearity of expectation:
$E[X+Y] = E[X] + E[Y]$
$E[X+Y] = \lambda_1 + \lambda_2$

This is a fundamental property: the sum of two independent Poisson random variables is also a Poisson random variable with a mean equal to the sum of their means.

**Answer:** $E[X+Y] = \lambda_1 + \lambda_2$

---

### 6. Important Points to Remember

*   The expected value of a function $h(X, Y)$ is computed by summing $h(x, y) \cdot p_{X,Y}(x, y)$ over all possible values of $X$ and $Y$.
*   **Crucially, the linearity of expectation $E[aX + bY] = aE[X] + bE[Y]$ holds true regardless of whether $X$ and $Y$ are independent.** This is a cornerstone property.
*   If $X$ and $Y$ are independent, then $E[XY] = E[X]E[Y]$. This is **not** generally true if $X$ and $Y$ are dependent.
*   The concept extends to functions of more than two random variables: $E[h(X_1, X_2, ..., X_n)] = \sum_{x_1} \sum_{x_2} \cdots \sum_{x_n} h(x_1, x_2, \dots, x_n) \cdot p_{X_1, X_2, \dots, X_n}(x_1, x_2, \dots, x_n)$.

---

### 7. Connection to Numerical Methods (Briefly)

While this topic focuses on theoretical probability distributions, the calculation of expected values often involves summations over many possible outcomes. In complex systems or when dealing with empirical data where the exact PMF might be unknown, numerical methods can be employed to approximate these expected values.

*   **Numerical Integration/Summation:** If the joint distribution is given by a complex function or empirical data, numerical summation techniques (similar to those used in numerical analysis for integration) might be needed to approximate the expected value.
*   **Monte Carlo Methods:** For very high-dimensional problems or when direct summation is intractable, simulating the random variables many times and averaging the function $h(X, Y)$ over these simulations (Monte Carlo estimation) is a powerful technique. This relates to the Law of Large Numbers.

**Reference:**

*   Sastry, S. S. (2012). *Introductory Methods of Numerical Analysis* (5th ed.). PHI Learning Pvt Limited. (Chapters on numerical integration and summation are relevant).
*   Chapra, S. C., & Canale, R. P. (2021). *Numerical methods for Engineers* (8th ed.). McGraw Hill Education. (Provides broader context on numerical approximation techniques).

---

This concludes the notes on the expected value of a function of two discrete variables. This concept is foundational for understanding more advanced topics like covariance, correlation, and the behavior of linear combinations of random variables, which are frequently encountered in physical science applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
