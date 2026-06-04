---
title: "Independent random variables"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ebb"
status: "completed"
scrapedAt: "2026-05-20T17:54:37.602Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Independent Random Variables

**Learning Outcomes:**

*   Understand the concept of independence for random variables.
*   Define and interpret independence for discrete and continuous random variables.
*   Apply the properties of independent random variables to calculate probabilities and expectations.
*   Analyze the implications of independence on joint distributions, marginal distributions, and conditional distributions.

---

### 1. Introduction to Independence

In probability theory, the concept of independence is crucial for understanding how multiple random events or variables relate to each other. When random variables are independent, the outcome of one variable does not influence the outcome of another. This simplifies many calculations and allows for powerful analytical tools.

**Key Concept:** Independence means that knowing the value of one random variable provides no information about the value of another.

---

### 2. Independence of Discrete Random Variables

Two discrete random variables, $X$ and $Y$, are **independent** if and only if their joint probability mass function (PMF), $p(x, y)$, can be factored into the product of their marginal PMFs, $p_X(x)$ and $p_Y(y)$, for all possible pairs of values $(x, y)$:

$$p(x, y) = p_X(x) \cdot p_Y(y) \quad \text{for all } x, y$$

**Equivalently:**

$P(X = x \text{ and } Y = y) = P(X = x) \cdot P(Y = y)$ for all $x, y$.

**How to check for independence:**

1.  Calculate the marginal PMFs: $p_X(x) = \sum_y p(x, y)$ and $p_Y(y) = \sum_x p(x, y)$.
2.  Check if $p(x, y) = p_X(x) \cdot p_Y(y)$ holds for all $(x, y)$ in the joint sample space.

**Example 1 (Devore, 9th Ed., Chapter 3):**

Let $X$ be the number of defects on a component, and $Y$ be the number of components in a batch. Suppose the joint PMF is given by:

| $x$ | $y$ | $p(x, y)$ |
| :-- | :-- | :-------- |
| 0   | 1   | 0.2       |
| 0   | 2   | 0.3       |
| 1   | 1   | 0.1       |
| 1   | 2   | 0.4       |

**Step 1: Calculate marginal PMFs:**

*   **Marginal PMF of X ($p_X(x)$):**
    *   $p_X(0) = p(0, 1) + p(0, 2) = 0.2 + 0.3 = 0.5$
    *   $p_X(1) = p(1, 1) + p(1, 2) = 0.1 + 0.4 = 0.5$

*   **Marginal PMF of Y ($p_Y(y)$):**
    *   $p_Y(1) = p(0, 1) + p(1, 1) = 0.2 + 0.1 = 0.3$
    *   $p_Y(2) = p(0, 2) + p(1, 2) = 0.3 + 0.4 = 0.7$

**Step 2: Check for independence:**

Let's check the condition $p(x, y) = p_X(x) \cdot p_Y(y)$:

*   For $(x=0, y=1)$: $p(0, 1) = 0.2$. $p_X(0) \cdot p_Y(1) = 0.5 \cdot 0.3 = 0.15$.
    Since $0.2 \neq 0.15$, $X$ and $Y$ are **not independent**.

**Important Point:** If the joint PMF is given as a product of functions of $x$ and $y$ (e.g., $p(x, y) = f(x)g(y)$), and these functions can be normalized to form the marginal PMFs, then the variables are independent.

---

### 3. Independence of Continuous Random Variables

Two continuous random variables, $X$ and $Y$, are **independent** if and only if their joint probability density function (PDF), $f(x, y)$, can be factored into the product of their marginal PDFs, $f_X(x)$ and $f_Y(y)$, for all possible pairs of values $(x, y)$:

$$f(x, y) = f_X(x) \cdot f_Y(y) \quad \text{for all } x, y$$

**How to check for independence:**

1.  Calculate the marginal PDFs: $f_X(x) = \int_{-\infty}^{\infty} f(x, y) dy$ and $f_Y(y) = \int_{-\infty}^{\infty} f(x, y) dx$.
2.  Check if $f(x, y) = f_X(x) \cdot f_Y(y)$ holds for all $(x, y)$ in the joint sample space.

**Example 2 (Devore, 9th Ed., Chapter 4):**

Let the joint PDF of $X$ and $Y$ be $f(x, y) = cxy$ for $0 \le x \le 1$ and $0 \le y \le 1$, and $f(x, y) = 0$ otherwise.

**Step 1: Find the constant $c$ and calculate marginal PDFs:**

*   **Find $c$:**
    $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x, y) dx dy = 1$
    $\int_{0}^{1} \int_{0}^{1} cxy dx dy = 1$
    $c \int_{0}^{1} y \left[ \frac{x^2}{2} \right]_0^1 dy = 1$
    $c \int_{0}^{1} y \left( \frac{1}{2} \right) dy = 1$
    $\frac{c}{2} \left[ \frac{y^2}{2} \right]_0^1 = 1$
    $\frac{c}{2} \left( \frac{1}{2} \right) = 1 \implies \frac{c}{4} = 1 \implies c = 4$.
    So, $f(x, y) = 4xy$ for $0 \le x \le 1$ and $0 \le y \le 1$.

*   **Marginal PDF of X ($f_X(x)$):**
    For $0 \le x \le 1$:
    $f_X(x) = \int_{0}^{1} 4xy dy = 4x \left[ \frac{y^2}{2} \right]_0^1 = 4x \left( \frac{1}{2} \right) = 2x$.

*   **Marginal PDF of Y ($f_Y(y)$):**
    For $0 \le y \le 1$:
    $f_Y(y) = \int_{0}^{1} 4xy dx = 4y \left[ \frac{x^2}{2} \right]_0^1 = 4y \left( \frac{1}{2} \right) = 2y$.

**Step 2: Check for independence:**

Check if $f(x, y) = f_X(x) \cdot f_Y(y)$:
$f_X(x) \cdot f_Y(y) = (2x) \cdot (2y) = 4xy$.
Since $f(x, y) = 4xy$, the condition holds for $0 \le x \le 1$ and $0 \le y \le 1$.
Therefore, $X$ and $Y$ are **independent**.

**Important Point:** When dealing with continuous random variables and their joint PDFs, ensure that the domain of the joint PDF can be factored into the domains of the marginal PDFs. If the domain is complex (e.g., triangular regions), independence might not hold even if the functional form appears separable.

---

### 4. Properties of Independent Random Variables

If $X$ and $Y$ are independent random variables:

#### 4.1. Independence and Joint Probabilities/Integrals

*   **Discrete:** $P(X \in A \text{ and } Y \in B) = P(X \in A) \cdot P(Y \in B)$ for any sets $A$ and $B$.
*   **Continuous:** $\int_A \int_B f(x, y) dx dy = \left(\int_A f_X(x) dx\right) \cdot \left(\int_B f_Y(y) dy\right)$ for any sets $A$ and $B$.

#### 4.2. Independence and Expectations

*   **Expectation of a Product:** If $X$ and $Y$ are independent, then $E[XY] = E[X] \cdot E[Y]$.

    *   **Proof (Discrete):**
        $E[XY] = \sum_x \sum_y (xy) p(x, y)$
        Since $p(x, y) = p_X(x) p_Y(y)$ for independent $X, Y$:
        $E[XY] = \sum_x \sum_y xy p_X(x) p_Y(y)$
        $E[XY] = \sum_x x p_X(x) \sum_y y p_Y(y)$
        $E[XY] = E[X] \cdot E[Y]$

    *   **Proof (Continuous):**
        $E[XY] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy f(x, y) dx dy$
        Since $f(x, y) = f_X(x) f_Y(y)$ for independent $X, Y$:
        $E[XY] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy f_X(x) f_Y(y) dx dy$
        $E[XY] = \left(\int_{-\infty}^{\infty} x f_X(x) dx\right) \cdot \left(\int_{-\infty}^{\infty} y f_Y(y) dy\right)$
        $E[XY] = E[X] \cdot E[Y]$

    **Important:** The converse is not always true. $E[XY] = E[X]E[Y]$ does not necessarily imply independence. However, if $X$ and $Y$ are uncorrelated (meaning $Cov(X, Y) = E[XY] - E[X]E[Y] = 0$), and they are independent, then $E[XY] = E[X]E[Y]$ holds.

*   **Covariance:** If $X$ and $Y$ are independent, then their covariance is zero: $Cov(X, Y) = 0$.

    *   **Proof:** $Cov(X, Y) = E[XY] - E[X]E[Y]$. If $X$ and $Y$ are independent, $E[XY] = E[X]E[Y]$, so $Cov(X, Y) = E[X]E[Y] - E[X]E[Y] = 0$.

*   **Variance of a Sum:** If $X$ and $Y$ are independent, then $Var(X+Y) = Var(X) + Var(Y)$.

    *   **Proof:** $Var(X+Y) = Var(X) + Var(Y) + 2 Cov(X, Y)$. Since $X$ and $Y$ are independent, $Cov(X, Y) = 0$, so $Var(X+Y) = Var(X) + Var(Y)$.

#### 4.3. Independence and Functions of Random Variables

If $X$ and $Y$ are independent, and $U = g(X)$ and $V = h(Y)$ are functions of $X$ and $Y$ respectively, then $U$ and $V$ are also independent.

**Example (Devore, 9th Ed., Chapter 3):**

Let $X$ and $Y$ be independent discrete random variables.
Let $U = X^2$ and $V = Y+1$. Then $U$ and $V$ are independent.

#### 4.4. Independence and Sums of Independent Random Variables

If $X_1, X_2, \ldots, X_n$ are independent random variables, then:

*   $E\left[\sum_{i=1}^n X_i\right] = \sum_{i=1}^n E[X_i]$ (This holds even if they are not independent)
*   $Var\left(\sum_{i=1}^n X_i\right) = \sum_{i=1}^n Var(X_i)$ (This holds *only* if they are independent)

---

### 5. Independence of Multiple Random Variables ($X_1, X_2, \ldots, X_n$)

A set of random variables $\{X_1, X_2, \ldots, X_n\}$ is **mutually independent** if, for every subset of indices $\{i_1, i_2, \ldots, i_k\}$ where $k \ge 2$ and the indices are distinct, the following holds:

*   **Discrete:** $P(X_{i_1} = x_{i_1}, X_{i_2} = x_{i_2}, \ldots, X_{i_k} = x_{i_k}) = P(X_{i_1} = x_{i_1}) P(X_{i_2} = x_{i_2}) \cdots P(X_{i_k} = x_{i_k})$ for all possible values $x_{i_1}, \ldots, x_{i_k}$.
    This implies that the joint PMF factors into the product of marginal PMFs for any combination of variables.

*   **Continuous:** $f(x_1, x_2, \ldots, x_n) = f_1(x_1) f_2(x_2) \cdots f_n(x_n)$ for all $(x_1, x_2, \ldots, x_n)$, where $f_i(x_i)$ is the marginal PDF of $X_i$.

**Important Distinction: Mutual Independence vs. Pairwise Independence**

*   **Pairwise Independence:** For every pair $(X_i, X_j)$ with $i \neq j$, $X_i$ and $X_j$ are independent.
*   **Mutual Independence:** The definition above, which requires the joint distribution of *any* subset of variables to factor.

**Mutual independence implies pairwise independence, but the converse is not true.**

**Example of Pairwise but Not Mutually Independent (Devore, 9th Ed., Chapter 3):**

Consider three events $A, B, C$ which are pairwise independent but not mutually independent. We can construct random variables based on these events.
Let $X_1$ be an indicator variable for event $A$, $X_2$ for $B$, and $X_3$ for $C$.
Suppose $P(A) = P(B) = P(C) = 1/2$.
Let $A, B, C$ be such that $P(A \cap B) = 1/4$, $P(A \cap C) = 1/4$, $P(B \cap C) = 1/4$.
If $A, B, C$ are mutually independent, then $P(A \cap B \cap C) = P(A)P(B)P(C) = (1/2)^3 = 1/8$.
However, consider a scenario where $A, B, C$ are defined as follows:
Let $U, V$ be independent Bernoulli(1/2) random variables.
Let $X_1 = U$, $X_2 = V$, $X_3 = U \oplus V$ (XOR operation).
$P(X_1=0) = P(U=0) = 1/2$, $P(X_1=1) = P(U=1) = 1/2$.
$P(X_2=0) = P(V=0) = 1/2$, $P(X_2=1) = P(V=1) = 1/2$.
$P(X_3=0) = P(U=0, V=0) + P(U=1, V=1) = (1/2)(1/2) + (1/2)(1/2) = 1/4 + 1/4 = 1/2$.
$P(X_3=1) = P(U=0, V=1) + P(U=1, V=0) = (1/2)(1/2) + (1/2)(1/2) = 1/4 + 1/4 = 1/2$.

*   **Pairwise Independence:**
    *   $X_1, X_2$: $P(X_1=x_1, X_2=x_2) = P(U=x_1, V=x_2) = P(U=x_1)P(V=x_2) = P(X_1=x_1)P(X_2=x_2)$. Independent.
    *   $X_1, X_3$: $P(X_1=x_1, X_3=x_3) = P(U=x_1, U \oplus V = x_3)$.
        If $x_1=0$: $P(U=0, V=x_3)$. $P(X_1=0)P(X_3=x_3) = (1/2) P(X_3=x_3)$.
        $P(U=0, V=0) = 1/4$. $P(X_1=0)P(X_3=0) = (1/2)(1/2) = 1/4$. Matches.
        $P(U=0, V=1) = 1/4$. $P(X_1=0)P(X_3=1) = (1/2)(1/2) = 1/4$. Matches.
        If $x_1=1$: $P(U=1, 1 \oplus V = x_3)$. $P(X_1=1)P(X_3=x_3) = (1/2) P(X_3=x_3)$.
        $P(U=1, V=1) = 1/4$. $1 \oplus 1 = 0$. $P(X_1=1)P(X_3=0) = (1/2)(1/2) = 1/4$. Matches.
        $P(U=1, V=0) = 1/4$. $1 \oplus 0 = 1$. $P(X_1=1)P(X_3=1) = (1/2)(1/2) = 1/4$. Matches.
        So, $X_1$ and $X_3$ are independent. Similarly, $X_2$ and $X_3$ are independent.

*   **Mutual Independence:**
    Consider $P(X_1=0, X_2=0, X_3=0)$.
    $P(X_1=0, X_2=0, X_3=0) = P(U=0, V=0, U \oplus V = 0)$.
    Since $U=0, V=0 \implies U \oplus V = 0$, this probability is $P(U=0, V=0) = 1/4$.
    Now check the product of marginals:
    $P(X_1=0) P(X_2=0) P(X_3=0) = (1/2)(1/2)(1/2) = 1/8$.
    Since $1/4 \neq 1/8$, the variables are **not mutually independent**.

This example highlights that pairwise independence is not sufficient for many desirable properties that rely on the joint behavior of multiple variables.

#### 5.1. Properties for Multiple Independent Random Variables

If $X_1, \ldots, X_n$ are mutually independent:

*   $E\left[\prod_{i=1}^n X_i\right] = \prod_{i=1}^n E[X_i]$ (provided expectations exist)
*   $Var\left(\sum_{i=1}^n X_i\right) = \sum_{i=1}^n Var(X_i)$

**Theorem (Ross, 6th Ed., Chapter 4):** If $X_1, \ldots, X_n$ are independent random variables, then for any set of functions $g_1, \ldots, g_n$, the random variables $Y_i = g_i(X_i)$ for $i=1, \ldots, n$ are also independent.

---

### 6. Applications in Physical Sciences

The concept of independent random variables is fundamental in modeling physical phenomena where different sources of randomness are assumed to operate independently.

*   **Measurement Errors:** If multiple independent measurements are taken of different physical quantities, or even the same quantity using independent instruments, their errors can often be modeled as independent random variables. The combined error or the sum/average of these measurements can then be analyzed using properties of independent variables.
*   **Particle Physics:** The detection of independent particles, or the decay of radioactive nuclei, can be modeled using independent random processes.
*   **Signal Processing:** Noise from different sources in a communication channel can often be treated as independent random processes.
*   **Statistical Mechanics:** The states of individual particles in a gas can be considered independent under certain assumptions (e.g., ideal gas).

**Example (Devore, 9th Ed., Chapter 3, Application Example):**

Consider a manufacturing process where a machine produces bolts, and each bolt has a certain length error $X$ and a weight error $Y$. If the length and weight variations are independent, then $X$ and $Y$ are independent random variables. The mean length error $E[X]$ and mean weight error $E[Y]$ contribute to the overall error. If we are interested in the product of errors $XY$, its expected value would be $E[X]E[Y]$, simplifying analysis.

---

### 7. Practice Questions and Exercises

**Question 1 (Discrete):**
Two dice are rolled. Let $X$ be the number shown on the first die, and $Y$ be the number shown on the second die. Are $X$ and $Y$ independent? Justify your answer.

**Solution 1:**
Yes, $X$ and $Y$ are independent.
The outcome of the first die does not affect the outcome of the second die.
The marginal PMF of $X$ is $P(X=x) = 1/6$ for $x \in \{1, 2, 3, 4, 5, 6\}$.
The marginal PMF of $Y$ is $P(Y=y) = 1/6$ for $y \in \{1, 2, 3, 4, 5, 6\}$.
The joint PMF is $P(X=x, Y=y) = 1/36$ for any pair $(x, y)$ where $x, y \in \{1, 2, 3, 4, 5, 6\}$.
We check: $P(X=x) P(Y=y) = (1/6) \cdot (1/6) = 1/36$.
Since $P(X=x, Y=y) = P(X=x)P(Y=y)$, they are independent.

**Question 2 (Continuous):**
Let $X$ and $Y$ be continuous random variables with joint PDF $f(x, y) = \frac{1}{2\pi}e^{-(x^2+y^2)/2}$ for $-\infty < x < \infty$ and $-\infty < y < \infty$. Are $X$ and $Y$ independent?

**Solution 2:**
Yes, $X$ and $Y$ are independent.
The joint PDF can be rewritten as:
$f(x, y) = \left(\frac{1}{\sqrt{2\pi}}e^{-x^2/2}\right) \cdot \left(\frac{1}{\sqrt{2\pi}}e^{-y^2/2}\right)$
This is the product of two functions, one depending only on $x$ and the other only on $y$.
The marginal PDF of $X$ is $f_X(x) = \frac{1}{\sqrt{2\pi}}e^{-x^2/2}$, which is the PDF of a standard normal distribution $N(0, 1)$.
The marginal PDF of $Y$ is $f_Y(y) = \frac{1}{\sqrt{2\pi}}e^{-y^2/2}$, also the PDF of a standard normal distribution $N(0, 1)$.
Since $f(x, y) = f_X(x) f_Y(y)$, $X$ and $Y$ are independent. This joint distribution represents two independent standard normal random variables.

**Question 3 (Properties):**
Let $X$ and $Y$ be independent random variables with $E[X] = 2$, $Var(X) = 1$, $E[Y] = 3$, and $Var(Y) = 4$.
Calculate:
a) $E[XY]$
b) $Var(X+Y)$
c) $Var(2X-Y)$

**Solution 3:**
Given $X$ and $Y$ are independent.
a) $E[XY] = E[X] \cdot E[Y] = 2 \cdot 3 = 6$.
b) $Var(X+Y) = Var(X) + Var(Y)$ (since $X, Y$ are independent)
   $Var(X+Y) = 1 + 4 = 5$.
c) $Var(2X-Y) = Var(2X) + Var(-Y)$ (since $2X$ and $-Y$ are independent if $X, Y$ are)
   $Var(2X) = 2^2 Var(X) = 4 \cdot 1 = 4$.
   $Var(-Y) = (-1)^2 Var(Y) = 1 \cdot 4 = 4$.
   $Var(2X-Y) = 4 + 4 = 8$.

**Question 4 (Multiple Independence):**
Consider three independent Bernoulli random variables $X_1, X_2, X_3$, each with $p=0.5$. Let $Y = X_1 + X_2$ and $Z = X_1 + X_3$. Are $Y$ and $Z$ independent?

**Solution 4:**
No, $Y$ and $Z$ are not independent.
While $X_1, X_2, X_3$ are independent, $Y$ and $Z$ share a common variable $X_1$, which couples their behavior.
Let's look at $P(Y=1, Z=1)$:
$P(Y=1) = P(X_1=1, X_2=0) + P(X_1=0, X_2=1) = (0.5)(0.5) + (0.5)(0.5) = 0.5$.
$P(Z=1) = P(X_1=1, X_3=0) + P(X_1=0, X_3=1) = (0.5)(0.5) + (0.5)(0.5) = 0.5$.
$P(Y=1, Z=1) = P(X_1+X_2=1 \text{ and } X_1+X_3=1)$.
This can happen in two ways:
1. $X_1=1, X_2=0, X_3=0$. Probability = $(0.5)(0.5)(0.5) = 0.125$.
2. $X_1=0, X_2=1, X_3=1$. Probability = $(0.5)(0.5)(0.5) = 0.125$.
So, $P(Y=1, Z=1) = 0.125 + 0.125 = 0.25$.
Now, let's check $P(Y=1)P(Z=1) = (0.5)(0.5) = 0.25$.
This specific calculation seems to suggest independence. Let's check another pair.

Consider $P(Y=0, Z=0)$:
$P(Y=0) = P(X_1=0, X_2=0) = (0.5)(0.5) = 0.25$.
$P(Z=0) = P(X_1=0, X_3=0) = (0.5)(0.5) = 0.25$.
$P(Y=0, Z=0) = P(X_1=0, X_2=0, X_1=0, X_3=0) = P(X_1=0, X_2=0, X_3=0) = (0.5)(0.5)(0.5) = 0.125$.
$P(Y=0)P(Z=0) = (0.25)(0.25) = 0.0625$.
Since $0.125 \neq 0.0625$, $Y$ and $Z$ are **not independent**.

*(Self-correction during Q4: It's crucial to test multiple joint probabilities to confirm or deny independence. The first check passing was a coincidence of this particular parameterization.)*

---

### 8. Important Points to Remember

*   **Definition of Independence:** The core idea is that the outcome of one variable provides no information about the outcome of another.
*   **Factorization:** For discrete variables, $p(x, y) = p_X(x)p_Y(y)$. For continuous variables, $f(x, y) = f_X(x)f_Y(y)$.
*   **Expectation of Product:** If $X, Y$ are independent, $E[XY] = E[X]E[Y]$. This is a powerful tool.
*   **Variance of Sum:** If $X, Y$ are independent, $Var(X+Y) = Var(X) + Var(Y)$. This is crucial for analyzing the variance of sums of independent processes.
*   **Mutual Independence:** Distinguish between pairwise independence and mutual independence. Mutual independence is a stronger condition required for properties involving more than two variables.
*   **Shared Variables:** If random variables are derived from a common source of randomness (e.g., share a common underlying variable), they are generally not independent.

---

### 9. Alignment with Course Outcomes

*   **CO1 & CO2 (Discrete & Continuous Random Variables):** This topic directly builds upon understanding the PMFs and PDFs of discrete and continuous random variables by exploring their joint behavior. The concept of independence is a key property that influences how these variables are used in applications.
*   **CO3 (Parameter Estimation & Hypothesis Testing):** While not directly about estimation or testing, independence is a critical assumption in many statistical tests (e.g., independent samples t-test). Understanding independence is a prerequisite for correctly applying these inferential techniques.
*   **CO4 (Numerical Methods):** Numerical methods are not directly applied in this specific topic. However, the ability to work with joint and marginal distributions (which might require integration for continuous variables) underpins the numerical computations often used in more complex probabilistic models.

---

**References:**

*   Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Chapters 3 & 4)
*   Ross, S. M. (2020). *Introduction to Probability and Statistics for Engineers and Scientists* (6th ed.). Academic Press. (Chapter 4)

This concludes the study notes on Independent Random Variables. Remember to practice applying the definitions and properties to various problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
