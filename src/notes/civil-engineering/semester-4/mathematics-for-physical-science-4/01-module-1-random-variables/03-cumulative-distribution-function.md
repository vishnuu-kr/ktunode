---
title: "Cumulative distribution function"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 1: Random variables"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81091d"
status: "completed"
scrapedAt: "2026-05-20T18:45:53.585Z"
---
# Mathematics for Physical Science – 4

## Module 1: Random Variables

### Topic: Cumulative Distribution Function (CDF)

---

### 1. Introduction to Cumulative Distribution Function (CDF)

The Cumulative Distribution Function (CDF) is a fundamental concept in probability and statistics, providing a comprehensive description of the probability distribution of a random variable. It tells us the probability that a random variable will take on a value less than or equal to a specific value.

---

### 2. Definition of the Cumulative Distribution Function (CDF)

**Definition:** For a random variable $X$, the cumulative distribution function (CDF), denoted by $F_X(x)$, is defined as the probability that $X$ takes on a value less than or equal to $x$.

Mathematically, this is expressed as:

$$F_X(x) = P(X \le x)$$

where:
*   $X$ is the random variable.
*   $x$ is any real number.

---

### 3. Properties of the Cumulative Distribution Function (CDF)

The CDF possesses several crucial properties that are essential for understanding and working with probability distributions:

*   **Non-decreasing:** For any $x_1 < x_2$, $F_X(x_1) \le F_X(x_2)$. This means the probability can only increase or stay the same as the value of $x$ increases.
*   **Limits:**
    *   As $x \to -\infty$, $F_X(x) \to 0$. This reflects that the probability of $X$ being less than or equal to a very small negative number is essentially zero.
    *   As $x \to \infty$, $F_X(x) \to 1$. This signifies that the probability of $X$ taking on any value less than or equal to a very large positive number is 1 (i.e., it's a certainty).
*   **Right-continuity:** For any real number $x$, $F_X(x) = \lim_{y \to x^+} F_X(y)$. This means the function is continuous from the right.
*   **Probability of a specific value (for discrete RVs):** For a discrete random variable $X$ with probability mass function (PMF) $p_X(k)$, the probability of $X$ taking on the specific value $k$ is given by:
    $$P(X = k) = F_X(k) - F_X(k^-)$$
    where $F_X(k^-) = \lim_{y \to k^-} F_X(y)$ is the limit from the left. For practical purposes, if $k$ is a possible value, this is often calculated as $F_X(k) - F_X(k-1)$ if the values are integers. More generally, it's the jump in the CDF at $k$.

---

### 4. CDF for Discrete Random Variables

For a discrete random variable $X$ that can take on values $x_1, x_2, \ldots$, with corresponding probabilities $P(X=x_1), P(X=x_2), \ldots$, the CDF is a step function.

$$F_X(x) = \sum_{k \le x} P(X = k)$$

This means we sum the probabilities of all possible values of $X$ that are less than or equal to $x$.

**Example:**
Let $X$ be the number of heads in two flips of a fair coin. $X$ can take values 0, 1, or 2.
*   $P(X=0) = P(TT) = 1/4$
*   $P(X=1) = P(HT \text{ or } TH) = 1/4 + 1/4 = 1/2$
*   $P(X=2) = P(HH) = 1/4$

Let's calculate the CDF $F_X(x)$:
*   For $x < 0$: $F_X(x) = P(X \le x) = 0$
*   For $0 \le x < 1$: $F_X(x) = P(X \le x) = P(X=0) = 1/4$
*   For $1 \le x < 2$: $F_X(x) = P(X \le x) = P(X=0) + P(X=1) = 1/4 + 1/2 = 3/4$
*   For $x \ge 2$: $F_X(x) = P(X \le x) = P(X=0) + P(X=1) + P(X=2) = 1/4 + 1/2 + 1/4 = 1$

The CDF is a step function with jumps at $x=0, 1, 2$.

---

### 5. CDF for Continuous Random Variables

For a continuous random variable $X$ with a probability density function (PDF) $f_X(t)$, the CDF is obtained by integrating the PDF.

$$F_X(x) = P(X \le x) = \int_{-\infty}^{x} f_X(t) dt$$

The PDF $f_X(t)$ must satisfy the following conditions:
*   $f_X(t) \ge 0$ for all $t$.
*   $\int_{-\infty}^{\infty} f_X(t) dt = 1$.

**Example:**
Let $X$ be a continuous random variable with PDF:
$$f_X(x) = \begin{cases} 2x & \text{if } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$$

Let's calculate the CDF $F_X(x)$:
*   For $x < 0$: $F_X(x) = \int_{-\infty}^{x} 0 dt = 0$
*   For $0 \le x \le 1$: $F_X(x) = \int_{-\infty}^{x} f_X(t) dt = \int_{-\infty}^{0} 0 dt + \int_{0}^{x} 2t dt = 0 + [t^2]_0^x = x^2$
*   For $x > 1$: $F_X(x) = \int_{-\infty}^{x} f_X(t) dt = \int_{-\infty}^{0} 0 dt + \int_{0}^{1} 2t dt + \int_{1}^{x} 0 dt = 0 + [t^2]_0^1 + 0 = 1^2 - 0^2 = 1$

So, the CDF is:
$$F_X(x) = \begin{cases} 0 & \text{if } x < 0 \\ x^2 & \text{if } 0 \le x \le 1 \\ 1 & \text{if } x > 1 \end{cases}$$

This CDF is continuous and non-decreasing.

---

### 6. Relationship between CDF and PDF (for Continuous RVs)

The CDF and PDF are intimately related for continuous random variables:

*   **CDF from PDF:** $F_X(x) = \int_{-\infty}^{x} f_X(t) dt$
*   **PDF from CDF:** $f_X(x) = \frac{d}{dx} F_X(x)$ (where the derivative exists).

This means the PDF is the derivative of the CDF.

---

### 7. Using the CDF to Calculate Probabilities

The CDF is incredibly useful for calculating various probabilities related to a random variable:

*   **Probability of $X$ being less than or equal to $x$:** $P(X \le x) = F_X(x)$ (by definition).
*   **Probability of $X$ being greater than $x$:** $P(X > x) = 1 - P(X \le x) = 1 - F_X(x)$.
*   **Probability of $X$ being in an interval $[a, b]$:**
    $$P(a \le X \le b) = P(X \le b) - P(X < a)$$
    For continuous random variables, $P(X < a) = P(X \le a)$, so:
    $$P(a \le X \le b) = F_X(b) - F_X(a)$$
    For discrete random variables, one must be careful with the endpoints. If $a$ and $b$ are possible values:
    $$P(a \le X \le b) = F_X(b) - F_X(a^-) = F_X(b) - \sum_{k < a} P(X=k)$$
    A more general approach for discrete variables is:
    $$P(a \le X \le b) = \sum_{k=a}^{b} P(X=k)$$
    However, using the CDF, it's often more convenient to write:
    $$P(a \le X \le b) = P(X \le b) - P(X < a)$$
    For discrete random variables, $P(X < a) = P(X \le a-1)$ if values are integers, or generally, the sum of probabilities for values strictly less than $a$.
    A very common and practical way for discrete variables is:
    $$P(a \le X \le b) = F_X(b) - F_X(a^-)$$
    where $F_X(a^-)$ is the limit of the CDF as $x$ approaches $a$ from below. If $a$ is a possible value, $F_X(a^-)$ is $F_X(a)$ minus the jump at $a$. For integer values, $F_X(a^-) = F_X(a-1)$ if $a-1$ is the previous possible value.
    A simpler expression often used for discrete variables, assuming $a$ and $b$ are actual possible values and $a \le b$:
    $$P(a \le X \le b) = F_X(b) - F_X(a - \epsilon)$$ where $\epsilon$ is a small positive number, or more precisely, the sum of probabilities up to the value just before $a$.

    **Important Note:** For continuous random variables, $P(X=a) = 0$, so $P(a \le X \le b) = P(a < X \le b) = P(a \le X < b) = P(a < X < b) = F_X(b) - F_X(a)$.

---

### 8. Quantiles and Percentiles (Introduction)

The CDF is also used to define quantiles and percentiles.

*   **Quantile:** A value $q$ such that $F_X(q) = p$, where $0 < p < 1$. This means $p$ proportion of the probability mass lies at or below $q$.
*   **Median:** The 50th percentile, i.e., the value $m$ such that $F_X(m) = 0.5$.
*   **Percentile:** The $p$-th percentile is the value $x_p$ such that $F_X(x_p) = p/100$.

---

### 9. Practice Questions and Exercises

**Question 1:**
Let $X$ be a discrete random variable with the following probability mass function (PMF):
$P(X=1) = 0.2$, $P(X=2) = 0.5$, $P(X=3) = 0.3$.
Calculate the CDF of $X$, $F_X(x)$, for all possible values of $x$.

**Solution 1:**
*   For $x < 1$: $F_X(x) = P(X \le x) = 0$
*   For $1 \le x < 2$: $F_X(x) = P(X \le x) = P(X=1) = 0.2$
*   For $2 \le x < 3$: $F_X(x) = P(X \le x) = P(X=1) + P(X=2) = 0.2 + 0.5 = 0.7$
*   For $x \ge 3$: $F_X(x) = P(X \le x) = P(X=1) + P(X=2) + P(X=3) = 0.2 + 0.5 + 0.3 = 1.0$

**Question 2:**
Let $Y$ be a continuous random variable with the probability density function (PDF):
$$f_Y(y) = \begin{cases} \frac{1}{4} & \text{if } 0 \le y \le 4 \\ 0 & \text{otherwise} \end{cases}$$
a) Calculate the CDF of $Y$, $F_Y(y)$.
b) Use the CDF to find the probability $P(1 \le Y \le 3)$.

**Solution 2:**
a)
*   For $y < 0$: $F_Y(y) = \int_{-\infty}^{y} 0 dt = 0$
*   For $0 \le y \le 4$: $F_Y(y) = \int_{-\infty}^{y} f_Y(t) dt = \int_{-\infty}^{0} 0 dt + \int_{0}^{y} \frac{1}{4} dt = 0 + [\frac{t}{4}]_0^y = \frac{y}{4}$
*   For $y > 4$: $F_Y(y) = \int_{-\infty}^{y} f_Y(t) dt = \int_{-\infty}^{0} 0 dt + \int_{0}^{4} \frac{1}{4} dt + \int_{4}^{y} 0 dt = 0 + [\frac{t}{4}]_0^4 + 0 = \frac{4}{4} - \frac{0}{4} = 1$

So, the CDF is:
$$F_Y(y) = \begin{cases} 0 & \text{if } y < 0 \\ \frac{y}{4} & \text{if } 0 \le y \le 4 \\ 1 & \text{if } y > 4 \end{cases}$$

b)
$P(1 \le Y \le 3) = F_Y(3) - F_Y(1)$
Using the CDF calculated in part (a):
$F_Y(3) = 3/4$
$F_Y(1) = 1/4$
Therefore, $P(1 \le Y \le 3) = \frac{3}{4} - \frac{1}{4} = \frac{2}{4} = \frac{1}{2}$.

**Question 3:**
Consider the CDF $F_X(x)$ for a random variable $X$:
$$F_X(x) = \begin{cases} 0 & \text{if } x < 0 \\ 0.2 & \text{if } 0 \le x < 1 \\ 0.6 & \text{if } 1 \le x < 2 \\ 1 & \text{if } x \ge 2 \end{cases}$$
a) Is $X$ a discrete or continuous random variable? Explain.
b) What is $P(X \le 1)$?
c) What is $P(X > 1)$?
d) What is $P(X = 1)$?

**Solution 3:**
a) $X$ is a discrete random variable because its CDF is a step function (it has jumps at specific values). For a continuous random variable, the CDF would be a continuous function.

b) $P(X \le 1) = F_X(1)$. From the definition of the CDF, when $x=1$, $F_X(1) = 0.6$. So, $P(X \le 1) = 0.6$.

c) $P(X > 1) = 1 - P(X \le 1) = 1 - F_X(1) = 1 - 0.6 = 0.4$.

d) $P(X=1) = F_X(1) - F_X(1^-)$. $F_X(1^-)$ is the limit as $x$ approaches 1 from below. For values just below 1 (e.g., $0.9, 0.99$), the CDF is $0.2$. So, $F_X(1^-) = 0.2$.
$P(X=1) = F_X(1) - F_X(1^-) = 0.6 - 0.2 = 0.4$.
Alternatively, for discrete variables, $P(X=k)$ is the size of the jump at $k$. The jump at $x=1$ is $0.6 - 0.2 = 0.4$.

---

### 10. Important Points to Remember

*   The CDF $F_X(x) = P(X \le x)$ is always non-decreasing.
*   The CDF ranges from 0 to 1, with $\lim_{x \to -\infty} F_X(x) = 0$ and $\lim_{x \to \infty} F_X(x) = 1$.
*   For discrete random variables, the CDF is a step function, and the height of each step corresponds to the probability of that specific value.
*   For continuous random variables, the CDF is a continuous function, and the PDF is its derivative.
*   The CDF is essential for calculating probabilities of the form $P(a \le X \le b)$, which is $F_X(b) - F_X(a)$ for continuous variables and $F_X(b) - F_X(a^-)$ for discrete variables.
*   The CDF is used to define and calculate quantiles and percentiles.

---
