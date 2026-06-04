---
title: "Expectation"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81092a"
status: "completed"
scrapedAt: "2026-05-20T18:46:01.648Z"
---
# Mathematics for Physical Science – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Expectation

This module introduces you to the concept of expectation, a fundamental tool for understanding the average behavior of continuous random variables. We'll explore how to calculate and interpret expected values, and their significance in various physical science contexts.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Define the expected value (or expectation) of a continuous random variable.**
*   **Calculate the expected value of a continuous random variable given its probability density function (PDF).**
*   **Understand and apply the linearity of expectation.**
*   **Calculate the expected value of a function of a continuous random variable.**
*   **Understand the interpretation of expected value as a long-run average.**

---

### 1. Key Concepts and Definitions

#### 1.1 What is Expectation?

The **expected value** (or **expectation**) of a continuous random variable is a weighted average of all possible values that the random variable can take. The weights are determined by the probability density function (PDF) of the random variable. It represents the "average" outcome we would expect if we were to repeat the random experiment many times.

*   **Notation:** The expected value of a random variable $X$ is denoted by $E[X]$ or $\mu_X$.

#### 1.2 Calculating the Expected Value of a Continuous Random Variable

For a continuous random variable $X$ with a probability density function (PDF) $f(x)$, the expected value is calculated by integrating the product of $x$ and its PDF over the entire range of possible values for $X$.

**Formula:**

$$E[X] = \int_{-\infty}^{\infty} x f(x) \, dx$$

**Important Considerations for the Integral:**

*   The integral is taken over the entire support of the random variable (where $f(x) > 0$).
*   For many practical applications, the support of $X$ might be a specific interval $[a, b]$, in which case the integral becomes:
    $$E[X] = \int_{a}^{b} x f(x) \, dx$$

#### 1.3 Interpretation of Expected Value

*   **Long-Run Average:** If you were to perform an experiment many times and observe the values of the random variable $X$, the average of these observed values would tend to be close to $E[X]$.
*   **Center of Mass Analogy:** You can think of the PDF as a mass distribution along the x-axis. The expected value $E[X]$ is the "center of mass" of this distribution.
*   **Not Necessarily a Possible Value:** The expected value $E[X]$ does not have to be one of the values that the random variable $X$ can actually take.

#### 1.4 Linearity of Expectation

One of the most powerful properties of expectation is its linearity. This means that the expectation of a sum of random variables is the sum of their expectations, and the expectation of a constant multiplied by a random variable is the constant multiplied by the expectation of the random variable.

**Properties:**

1.  **Expectation of a Constant:** For any constant $c$, $E[c] = c$.
2.  **Expectation of a Constant times a Random Variable:** For any constant $c$ and random variable $X$, $E[cX] = cE[X]$.
3.  **Expectation of a Sum of Random Variables:** For any two random variables $X$ and $Y$ (regardless of whether they are independent), $E[X + Y] = E[X] + E[Y]$.
4.  **Generalization:** For random variables $X_1, X_2, \dots, X_n$ and constants $c_1, c_2, \dots, c_n$,
    $$E[c_1 X_1 + c_2 X_2 + \dots + c_n X_n] = c_1 E[X_1] + c_2 E[X_2] + \dots + c_n E[X_n]$$

**Why is Linearity Important?**
This property simplifies calculations significantly, especially when dealing with sums or linear combinations of random variables. It holds even if the random variables are not independent, which is a crucial advantage.

#### 1.5 Expected Value of a Function of a Random Variable

If $X$ is a continuous random variable with PDF $f(x)$, and $g(X)$ is a function of $X$, then the expected value of $g(X)$ is given by:

**Formula:**

$$E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x) \, dx$$

**Explanation:**
This formula essentially treats $g(X)$ as a new random variable. We integrate the possible values of $g(x)$ multiplied by their corresponding probabilities, which are derived from $f(x)$.

**Important Point:**
You **cannot** generally say that $E[g(X)] = g(E[X])$. This is only true for linear functions (where $g(x) = ax + b$). For non-linear functions, $E[g(X)]$ will usually be different from $g(E[X])$.

---

### 2. Examples

#### Example 2.1: Uniform Distribution

Let $X$ be a continuous random variable uniformly distributed over the interval $[0, 1]$. Its PDF is:
$$f(x) = \begin{cases} 1 & \text{if } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$$

**Calculate $E[X]$:**

$$E[X] = \int_{-\infty}^{\infty} x f(x) \, dx = \int_{0}^{1} x \cdot 1 \, dx$$
$$E[X] = \left[ \frac{x^2}{2} \right]_{0}^{1} = \frac{1^2}{2} - \frac{0^2}{2} = \frac{1}{2}$$

**Interpretation:** The average value of a random number drawn uniformly from the interval [0, 1] is 0.5.

#### Example 2.2: Exponential Distribution

Let $X$ be an exponentially distributed random variable with rate parameter $\lambda > 0$. Its PDF is:
$$f(x) = \begin{cases} \lambda e^{-\lambda x} & \text{if } x \ge 0 \\ 0 & \text{otherwise} \end{cases}$$

**Calculate $E[X]$:**

$$E[X] = \int_{-\infty}^{\infty} x f(x) \, dx = \int_{0}^{\infty} x (\lambda e^{-\lambda x}) \, dx$$
To solve this integral, we use integration by parts ($\int u \, dv = uv - \int v \, du$).
Let $u = x$ and $dv = \lambda e^{-\lambda x} \, dx$.
Then $du = dx$ and $v = \int \lambda e^{-\lambda x} \, dx = -e^{-\lambda x}$.

$$E[X] = \left[ x (-e^{-\lambda x}) \right]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-\lambda x}) \, dx$$
$$E[X] = \left[ -x e^{-\lambda x} \right]_{0}^{\infty} + \int_{0}^{\infty} e^{-\lambda x} \, dx$$

The term $\left[ -x e^{-\lambda x} \right]_{0}^{\infty}$:
As $x \to \infty$, $-x e^{-\lambda x} \to 0$ (since the exponential term decays faster).
At $x = 0$, $-0 \cdot e^0 = 0$.
So, $\left[ -x e^{-\lambda x} \right]_{0}^{\infty} = 0 - 0 = 0$.

Now, evaluate the remaining integral:
$$\int_{0}^{\infty} e^{-\lambda x} \, dx = \left[ \frac{e^{-\lambda x}}{-\lambda} \right]_{0}^{\infty} = \left( \lim_{x \to \infty} \frac{e^{-\lambda x}}{-\lambda} \right) - \left( \frac{e^0}{-\lambda} \right)$$
$$= 0 - \left( \frac{1}{-\lambda} \right) = \frac{1}{\lambda}$$

Therefore, $E[X] = 0 + \frac{1}{\lambda} = \frac{1}{\lambda}$.

**Interpretation:** For an exponential distribution, the average value is the reciprocal of the rate parameter. This is often interpreted as the average time until an event occurs in processes like radioactive decay or customer arrivals.

#### Example 2.3: Expected Value of a Function of a Random Variable

Let $X$ be a continuous random variable with PDF $f(x) = \begin{cases} 2x & \text{if } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$.
Calculate $E[X^2]$.

**Method 1: Using the formula $E[g(X)] = \int g(x) f(x) \, dx$**
Here, $g(x) = x^2$.

$$E[X^2] = \int_{0}^{1} x^2 (2x) \, dx = \int_{0}^{1} 2x^3 \, dx$$
$$E[X^2] = \left[ \frac{2x^4}{4} \right]_{0}^{1} = \left[ \frac{x^4}{2} \right]_{0}^{1} = \frac{1^4}{2} - \frac{0^4}{2} = \frac{1}{2}$$

**Method 2: First finding $E[X]$ and then using linearity (if $g(x)$ is linear, but here it's not!)**
Let's first find $E[X]$ for this distribution:
$$E[X] = \int_{0}^{1} x (2x) \, dx = \int_{0}^{1} 2x^2 \, dx = \left[ \frac{2x^3}{3} \right]_{0}^{1} = \frac{2}{3}$$

Now, if we naively calculated $g(E[X])$:
$g(E[X]) = (E[X])^2 = \left(\frac{2}{3}\right)^2 = \frac{4}{9}$.

As you can see, $E[X^2] = \frac{1}{2}$ which is not equal to $(E[X])^2 = \frac{4}{9}$. This demonstrates why $E[g(X)] \neq g(E[X])$ for non-linear functions.

#### Example 2.4: Linearity of Expectation

Let $X$ and $Y$ be two continuous random variables with $E[X] = 5$ and $E[Y] = -2$.

**Calculate $E[3X - 2Y + 7]$:**

Using the linearity property:
$$E[3X - 2Y + 7] = E[3X] - E[2Y] + E[7]$$
$$E[3X - 2Y + 7] = 3E[X] - 2E[Y] + 7$$
$$E[3X - 2Y + 7] = 3(5) - 2(-2) + 7$$
$$E[3X - 2Y + 7] = 15 + 4 + 7$$
$$E[3X - 2Y + 7] = 26$$

---

### 3. Practice Questions

**Question 3.1:**
A continuous random variable $X$ has the probability density function:
$$f(x) = \begin{cases} \frac{x}{2} & \text{if } 0 \le x \le 2 \\ 0 & \text{otherwise} \end{cases}$$
Calculate the expected value of $X$, $E[X]$.

**Question 3.2:**
The time (in hours) it takes for a component to fail is given by a continuous random variable $T$ with the PDF:
$$f(t) = \begin{cases} 0.1 e^{-0.1 t} & \text{if } t \ge 0 \\ 0 & \text{otherwise} \end{cases}$$
What is the expected time to failure of this component?

**Question 3.3:**
Let $X$ be a continuous random variable with $E[X] = 10$. What is $E[2X + 5]$?

**Question 3.4:**
Consider a continuous random variable $Y$ with PDF $f(y) = \begin{cases} 3y^2 & \text{if } 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$.
Calculate $E[Y^3]$.

**Question 3.5:**
Suppose $X$ and $Y$ are continuous random variables with $E[X] = 2$ and $E[Y] = 4$. Also, let $Z = 5X + 3Y - 1$. Calculate $E[Z]$.

---

### 4. Answers to Practice Questions

**Answer 3.1:**
$$E[X] = \int_{0}^{2} x \cdot \frac{x}{2} \, dx = \int_{0}^{2} \frac{x^2}{2} \, dx$$
$$E[X] = \left[ \frac{x^3}{6} \right]_{0}^{2} = \frac{2^3}{6} - \frac{0^3}{6} = \frac{8}{6} = \frac{4}{3}$$

**Answer 3.2:**
This is an exponential distribution with $\lambda = 0.1$. The expected value of an exponential distribution is $1/\lambda$.
$$E[T] = \frac{1}{0.1} = 10 \text{ hours}$$
Alternatively, using the integral:
$$E[T] = \int_{0}^{\infty} t (0.1 e^{-0.1 t}) \, dt$$
Using integration by parts with $u=t$ and $dv = 0.1 e^{-0.1 t} dt$:
$du = dt$, $v = -e^{-0.1 t}$
$$E[T] = \left[ -t e^{-0.1 t} \right]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-0.1 t}) \, dt$$
$$E[T] = 0 + \int_{0}^{\infty} e^{-0.1 t} \, dt = \left[ \frac{e^{-0.1 t}}{-0.1} \right]_{0}^{\infty}$$
$$E[T] = 0 - \left( \frac{e^0}{-0.1} \right) = - \left( \frac{1}{-0.1} \right) = 10 \text{ hours}$$

**Answer 3.3:**
Using linearity of expectation:
$$E[2X + 5] = 2E[X] + E[5]$$
$$E[2X + 5] = 2(10) + 5$$
$$E[2X + 5] = 20 + 5 = 25$$

**Answer 3.4:**
We need to calculate $E[Y^3]$. Here $g(y) = y^3$.
$$E[Y^3] = \int_{0}^{1} y^3 \cdot (3y^2) \, dy = \int_{0}^{1} 3y^5 \, dy$$
$$E[Y^3] = \left[ \frac{3y^6}{6} \right]_{0}^{1} = \left[ \frac{y^6}{2} \right]_{0}^{1} = \frac{1^6}{2} - \frac{0^6}{2} = \frac{1}{2}$$

**Answer 3.5:**
Using linearity of expectation:
$$E[Z] = E[5X + 3Y - 1]$$
$$E[Z] = E[5X] + E[3Y] - E[1]$$
$$E[Z] = 5E[X] + 3E[Y] - 1$$
$$E[Z] = 5(2) + 3(4) - 1$$
$$E[Z] = 10 + 12 - 1$$
$$E[Z] = 21$$

---

### 5. Important Points to Remember

*   **Definition:** The expected value $E[X]$ is the weighted average of all possible values of $X$, weighted by their probabilities (or probability densities for continuous variables).
*   **Formula:** For a continuous random variable $X$ with PDF $f(x)$, $E[X] = \int_{-\infty}^{\infty} x f(x) \, dx$.
*   **Interpretation:** It represents the long-run average or the "center of mass" of the probability distribution.
*   **Linearity of Expectation:** $E[aX + bY + c] = aE[X] + bE[Y] + c$. This is a crucial property that simplifies calculations.
*   **Expectation of a Function:** $E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x) \, dx$.
*   **Crucial Distinction:** $E[g(X)]$ is generally NOT equal to $g(E[X])$ unless $g(X)$ is a linear function.

---

These notes provide a comprehensive overview of the expectation of continuous random variables. Understanding this concept is vital for further statistical analysis and for applying probability theory to physical phenomena.
