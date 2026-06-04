---
title: "Joint pdf of two Continuous random variables"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81092d"
status: "completed"
scrapedAt: "2026-05-20T18:46:03.744Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Joint Probability Density Function (pdf) of Two Continuous Random Variables

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Define and interpret the joint probability density function (pdf) for two continuous random variables.
*   Calculate probabilities of events involving two continuous random variables using the joint pdf.
*   Determine marginal probability density functions from a joint pdf.
*   Understand the concept of conditional probability density functions and their relationship to the joint pdf.
*   Define and check for independence of two continuous random variables.
*   Calculate expected values and variances for functions of two continuous random variables.

---

### 1. Introduction to Joint Distributions for Continuous Random Variables

When we are interested in the behavior of two or more random variables simultaneously, we use joint distributions. For continuous random variables, the concept analogous to the joint probability mass function (pmf) for discrete variables is the **joint probability density function (pdf)**.

**Key Concept:** The joint pdf describes the relative likelihood of two continuous random variables taking on specific values simultaneously.

---

### 2. Joint Probability Density Function (pdf)

Let $X$ and $Y$ be two continuous random variables. Their **joint probability density function**, denoted by $f_{XY}(x, y)$, is a function that satisfies the following properties:

1.  **Non-negativity:** $f_{XY}(x, y) \ge 0$ for all $x, y$ in the support of $(X, Y)$.
2.  **Normalization:** The integral of the joint pdf over its entire support must be equal to 1:
    $$ \iint_{\mathbb{R}^2} f_{XY}(x, y) \,dx \,dy = 1 $$
    The "support" of $(X, Y)$ is the region in the $xy$-plane where $f_{XY}(x, y) > 0$.

**Interpretation:**
The value of $f_{XY}(x, y)$ itself does not represent a probability. Instead, the probability that $(X, Y)$ falls within a specific region $A$ in the $xy$-plane is given by the integral of the joint pdf over that region:

$$ P((X, Y) \in A) = \iint_{A} f_{XY}(x, y) \,dx \,dy $$

For probabilities of specific values, like $P(X=a, Y=b)$, the probability is zero for continuous random variables. We are interested in probabilities over intervals or regions.

---

### 3. Calculating Probabilities Using the Joint pdf

To calculate probabilities for events involving $X$ and $Y$, we need to integrate the joint pdf over the region defined by the event.

**Examples:**

*   **Probability of $X$ being in an interval $[a, b]$ and $Y$ being in an interval $[c, d]$:**
    $$ P(a \le X \le b, c \le Y \le d) = \int_{a}^{b} \int_{c}^{d} f_{XY}(x, y) \,dy \,dx $$

*   **Probability of $X$ being less than or equal to a value $x_0$ and $Y$ being less than or equal to a value $y_0$ (Cumulative Distribution Function - CDF):**
    The joint cumulative distribution function (CDF) is defined as $F_{XY}(x, y) = P(X \le x, Y \le y)$.
    $$ F_{XY}(x, y) = \int_{-\infty}^{x} \int_{-\infty}^{y} f_{XY}(u, v) \,dv \,du $$

---

### 4. Marginal Probability Density Functions

The marginal pdfs describe the probability distribution of each individual random variable, ignoring the other.

*   **Marginal pdf of $X$:**
    To find $f_X(x)$, we integrate the joint pdf with respect to $y$ over its entire range:
    $$ f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) \,dy $$

*   **Marginal pdf of $Y$:**
    To find $f_Y(y)$, we integrate the joint pdf with respect to $x$ over its entire range:
    $$ f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y) \,dx $$

**Important Point:** If $f_{XY}(x, y)$ is defined over a bounded region, the integration limits for the marginal pdfs will correspond to the bounds of that region for the variable being integrated out.

---

### 5. Conditional Probability Density Functions

The conditional pdf describes the probability distribution of one random variable given that the other random variable has taken a specific value.

*   **Conditional pdf of $Y$ given $X=x$:**
    $$ f_{Y|X}(y|x) = \frac{f_{XY}(x, y)}{f_X(x)} $$
    This is defined for values of $x$ where $f_X(x) > 0$.

*   **Conditional pdf of $X$ given $Y=y$:**
    $$ f_{X|Y}(x|y) = \frac{f_{XY}(x, y)}{f_Y(y)} $$
    This is defined for values of $y$ where $f_Y(y) > 0$.

**Interpretation:** The conditional pdf $f_{Y|X}(y|x)$ behaves like a regular pdf for the variable $Y$, given that $X$ is fixed at $x$. Its integral over $y$ must be 1:
$$ \int_{-\infty}^{\infty} f_{Y|X}(y|x) \,dy = 1 $$

**Relationship to joint pdf:** The joint pdf can be expressed using conditional and marginal pdfs:
$$ f_{XY}(x, y) = f_{Y|X}(y|x) f_X(x) = f_{X|Y}(x|y) f_Y(y) $$

---

### 6. Independence of Continuous Random Variables

Two continuous random variables $X$ and $Y$ are said to be **independent** if and only if their joint pdf is the product of their marginal pdfs for all $x$ and $y$:

$$ f_{XY}(x, y) = f_X(x) f_Y(y) \quad \forall x, y $$

**Consequences of Independence:**

*   **Conditional pdf equals marginal pdf:** If $X$ and $Y$ are independent, then:
    $$ f_{Y|X}(y|x) = f_Y(y) \quad \text{and} \quad f_{X|Y}(x|y) = f_X(x) $$
*   **Expectation of products:** The expected value of a product of functions of $X$ and $Y$ is the product of their individual expected values:
    $$ E[g(X)h(Y)] = E[g(X)]E[h(Y)] $$
    In particular, $E[XY] = E[X]E[Y]$.

**Checking for Independence:**
To check for independence, you need to:
1.  Calculate the marginal pdfs $f_X(x)$ and $f_Y(y)$.
2.  Check if $f_X(x) f_Y(y)$ is equal to $f_{XY}(x, y)$ for all $x, y$ within the support of $(X, Y)$.
    *   **Important Note:** Be careful about the support. If the support is a region where $x$ and $y$ are not independent (e.g., a triangle where $y \le x$), then the variables are not independent, even if the functional form appears to be separable.

---

### 7. Expected Values and Variances of Functions of Two Random Variables

Let $Z = g(X, Y)$ be a function of two continuous random variables $X$ and $Y$ with joint pdf $f_{XY}(x, y)$.

*   **Expected Value of $Z = g(X, Y)$:**
    The expected value of $g(X, Y)$ is given by:
    $$ E[Z] = E[g(X, Y)] = \iint_{\mathbb{R}^2} g(x, y) f_{XY}(x, y) \,dx \,dy $$

**Specific Cases:**

*   **Expected Value of $X$:**
    $$ E[X] = \iint_{\mathbb{R}^2} x f_{XY}(x, y) \,dx \,dy = \int_{-\infty}^{\infty} x f_X(x) \,dx $$
*   **Expected Value of $Y$:**
    $$ E[Y] = \iint_{\mathbb{R}^2} y f_{XY}(x, y) \,dx \,dy = \int_{-\infty}^{\infty} y f_Y(y) \,dy $$

*   **Covariance of $X$ and $Y$:**
    The covariance measures the linear relationship between $X$ and $Y$.
    $$ Cov(X, Y) = E[(X - E[X])(Y - E[Y])] = E[XY] - E[X]E[Y] $$
    where $E[XY] = \iint_{\mathbb{R}^2} xy f_{XY}(x, y) \,dx \,dy$.

*   **Variance of $X+Y$:**
    $$ Var(X+Y) = Var(X) + Var(Y) + 2 Cov(X, Y) $$
    Note that $Var(X) = E[(X - E[X])^2]$ and $Var(Y) = E[(Y - E[Y])^2]$.

**If $X$ and $Y$ are independent:**
*   $Cov(X, Y) = 0$
*   $Var(X+Y) = Var(X) + Var(Y)$
*   $E[XY] = E[X]E[Y]$

---

### Example Walkthrough

**Problem:**
Let $X$ and $Y$ be two continuous random variables with the joint pdf:
$$ f_{XY}(x, y) = \begin{cases} 6xy^2 & \text{if } 0 \le x \le 1, 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases} $$

**(a) Verify that $f_{XY}(x, y)$ is a valid pdf.**
**(b) Calculate $P(0 \le X \le 0.5, 0.5 \le Y \le 1)$.**
**(c) Find the marginal pdfs $f_X(x)$ and $f_Y(y)$.**
**(d) Find the conditional pdf $f_{Y|X}(y|x)$.**
**(e) Are $X$ and $Y$ independent?**
**(f) Calculate $E[X]$ and $E[Y]$.**
**(g) Calculate $E[XY]$ and $Cov(X, Y)$.**

**Solution:**

**(a) Verification of pdf:**
1.  **Non-negativity:** For $0 \le x \le 1$ and $0 \le y \le 1$, $x \ge 0$ and $y^2 \ge 0$, so $6xy^2 \ge 0$. Thus, $f_{XY}(x, y) \ge 0$.
2.  **Normalization:**
    $$ \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XY}(x, y) \,dx \,dy = \int_{0}^{1} \int_{0}^{1} 6xy^2 \,dx \,dy $$
    $$ = \int_{0}^{1} \left[ 3x^2y^2 \right]_{x=0}^{x=1} \,dy = \int_{0}^{1} 3(1)^2y^2 - 3(0)^2y^2 \,dy $$
    $$ = \int_{0}^{1} 3y^2 \,dy = \left[ y^3 \right]_{y=0}^{y=1} = 1^3 - 0^3 = 1 $$
    Since the integral is 1 and the function is non-negative, it is a valid pdf.

**(b) Calculate $P(0 \le X \le 0.5, 0.5 \le Y \le 1)$:**
$$ P(0 \le X \le 0.5, 0.5 \le Y \le 1) = \int_{0.5}^{1} \int_{0}^{0.5} 6xy^2 \,dx \,dy $$
$$ = \int_{0.5}^{1} \left[ 3x^2y^2 \right]_{x=0}^{x=0.5} \,dy = \int_{0.5}^{1} 3(0.5)^2y^2 - 3(0)^2y^2 \,dy $$
$$ = \int_{0.5}^{1} 3(0.25)y^2 \,dy = \int_{0.5}^{1} 0.75y^2 \,dy $$
$$ = \left[ 0.75 \frac{y^3}{3} \right]_{y=0.5}^{y=1} = \left[ 0.25y^3 \right]_{y=0.5}^{y=1} $$
$$ = 0.25(1)^3 - 0.25(0.5)^3 = 0.25 - 0.25(0.125) = 0.25 - 0.03125 = 0.21875 $$

**(c) Find the marginal pdfs $f_X(x)$ and $f_Y(y)$:**
For $0 \le x \le 1$:
$$ f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) \,dy = \int_{0}^{1} 6xy^2 \,dy $$
$$ = \left[ 6x \frac{y^3}{3} \right]_{y=0}^{y=1} = \left[ 2xy^3 \right]_{y=0}^{y=1} = 2x(1)^3 - 2x(0)^3 = 2x $$
So, $f_X(x) = \begin{cases} 2x & \text{if } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$

For $0 \le y \le 1$:
$$ f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y) \,dx = \int_{0}^{1} 6xy^2 \,dx $$
$$ = \left[ 6 \frac{x^2}{2} y^2 \right]_{x=0}^{x=1} = \left[ 3x^2y^2 \right]_{x=0}^{x=1} = 3(1)^2y^2 - 3(0)^2y^2 = 3y^2 $$
So, $f_Y(y) = \begin{cases} 3y^2 & \text{if } 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$

**(d) Find the conditional pdf $f_{Y|X}(y|x)$:**
$$ f_{Y|X}(y|x) = \frac{f_{XY}(x, y)}{f_X(x)} = \frac{6xy^2}{2x} = 3y^2 $$
For $0 \le y \le 1$, given $0 \le x \le 1$.
So, $f_{Y|X}(y|x) = \begin{cases} 3y^2 & \text{if } 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$
Note that $f_{Y|X}(y|x)$ is independent of $x$.

**(e) Are $X$ and $Y$ independent?**
Check if $f_{XY}(x, y) = f_X(x) f_Y(y)$.
$f_X(x) f_Y(y) = (2x)(3y^2) = 6xy^2$.
This is equal to $f_{XY}(x, y)$ for all $x, y$ in the support $[0, 1] \times [0, 1]$.
Therefore, $X$ and $Y$ are independent.

**(f) Calculate $E[X]$ and $E[Y]$:**
Using marginal pdfs:
$$ E[X] = \int_{-\infty}^{\infty} x f_X(x) \,dx = \int_{0}^{1} x (2x) \,dx = \int_{0}^{1} 2x^2 \,dx $$
$$ = \left[ \frac{2x^3}{3} \right]_{0}^{1} = \frac{2(1)^3}{3} - \frac{2(0)^3}{3} = \frac{2}{3} $$
$$ E[Y] = \int_{-\infty}^{\infty} y f_Y(y) \,dy = \int_{0}^{1} y (3y^2) \,dy = \int_{0}^{1} 3y^3 \,dy $$
$$ = \left[ \frac{3y^4}{4} \right]_{0}^{1} = \frac{3(1)^4}{4} - \frac{3(0)^4}{4} = \frac{3}{4} $$

**(g) Calculate $E[XY]$ and $Cov(X, Y)$:**
Since $X$ and $Y$ are independent, $E[XY] = E[X]E[Y]$.
$E[XY] = \left(\frac{2}{3}\right) \left(\frac{3}{4}\right) = \frac{6}{12} = \frac{1}{2}$.

Alternatively, using the joint pdf:
$$ E[XY] = \int_{0}^{1} \int_{0}^{1} xy (6xy^2) \,dx \,dy = \int_{0}^{1} \int_{0}^{1} 6x^2y^3 \,dx \,dy $$
$$ = \int_{0}^{1} \left[ 6 \frac{x^3}{3} y^3 \right]_{x=0}^{x=1} \,dy = \int_{0}^{1} \left[ 2x^3y^3 \right]_{x=0}^{x=1} \,dy $$
$$ = \int_{0}^{1} 2(1)^3y^3 - 2(0)^3y^3 \,dy = \int_{0}^{1} 2y^3 \,dy $$
$$ = \left[ \frac{2y^4}{4} \right]_{0}^{1} = \left[ \frac{y^4}{2} \right]_{0}^{1} = \frac{1^4}{2} - \frac{0^4}{2} = \frac{1}{2} $$
This matches the result from independence.

Now, calculate Covariance:
$Cov(X, Y) = E[XY] - E[X]E[Y] = \frac{1}{2} - \left(\frac{2}{3}\right)\left(\frac{3}{4}\right) = \frac{1}{2} - \frac{1}{2} = 0$.
This confirms our finding of independence.

---

### Practice Questions

1.  Let $X$ and $Y$ be two continuous random variables with the joint pdf:
    $$ f_{XY}(x, y) = \begin{cases} x+y & \text{if } 0 \le x \le 1, 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases} $$
    **(a)** Verify that $f_{XY}(x, y)$ is a valid pdf.
    **(b)** Calculate $P(X \le 0.5, Y \le 0.5)$.
    **(c)** Find the marginal pdfs $f_X(x)$ and $f_Y(y)$.
    **(d)** Are $X$ and $Y$ independent? Justify your answer.
    **(e)** Calculate $E[X^2]$.

2.  Let $X$ and $Y$ be two continuous random variables with the joint pdf:
    $$ f_{XY}(x, y) = \begin{cases} 2 & \text{if } x > 0, y > 0, x+y < 1 \\ 0 & \text{otherwise} \end{cases} $$
    This support region is a triangle with vertices (0,0), (1,0), and (0,1).
    **(a)** Verify that $f_{XY}(x, y)$ is a valid pdf.
    **(b)** Calculate $P(X \le 0.5)$.
    **(c)** Find $f_Y(y)$ and $f_{Y|X}(y|x)$.
    **(d)** Calculate $E[X+Y]$.

---

### Answers to Practice Questions

**Question 1:**
**(a)**
1.  Non-negativity: For $0 \le x \le 1, 0 \le y \le 1$, $x+y \ge 0$.
2.  Normalization:
    $$ \int_{0}^{1} \int_{0}^{1} (x+y) \,dx \,dy = \int_{0}^{1} \left[ \frac{x^2}{2} + xy \right]_{x=0}^{x=1} \,dy = \int_{0}^{1} \left( \frac{1}{2} + y \right) \,dy $$
    $$ = \left[ \frac{y}{2} + \frac{y^2}{2} \right]_{0}^{1} = \frac{1}{2} + \frac{1}{2} = 1 $$
    Valid pdf.

**(b)**
    $$ P(X \le 0.5, Y \le 0.5) = \int_{0}^{0.5} \int_{0}^{0.5} (x+y) \,dx \,dy = \int_{0}^{0.5} \left[ \frac{x^2}{2} + xy \right]_{x=0}^{x=0.5} \,dy $$
    $$ = \int_{0}^{0.5} \left( \frac{0.25}{2} + 0.5y \right) \,dy = \int_{0}^{0.5} (0.125 + 0.5y) \,dy $$
    $$ = \left[ 0.125y + 0.5\frac{y^2}{2} \right]_{0}^{0.5} = 0.125(0.5) + 0.25(0.5)^2 = 0.0625 + 0.25(0.25) = 0.0625 + 0.0625 = 0.125 $$

**(c)**
    For $0 \le x \le 1$:
    $$ f_X(x) = \int_{0}^{1} (x+y) \,dy = \left[ xy + \frac{y^2}{2} \right]_{0}^{1} = x + \frac{1}{2} $$
    $$ f_X(x) = \begin{cases} x + \frac{1}{2} & \text{if } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases} $$
    For $0 \le y \le 1$:
    $$ f_Y(y) = \int_{0}^{1} (x+y) \,dx = \left[ \frac{x^2}{2} + xy \right]_{0}^{1} = \frac{1}{2} + y $$
    $$ f_Y(y) = \begin{cases} \frac{1}{2} + y & \text{if } 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases} $$

**(d)**
    $f_X(x) f_Y(y) = \left( x + \frac{1}{2} \right) \left( \frac{1}{2} + y \right) = \frac{1}{2}x + xy + \frac{1}{4} + \frac{1}{2}y$.
    This is not equal to $f_{XY}(x, y) = x+y$.
    Therefore, $X$ and $Y$ are **not independent**.

**(e)**
    $$ E[X^2] = \int_{-\infty}^{\infty} x^2 f_X(x) \,dx = \int_{0}^{1} x^2 \left( x + \frac{1}{2} \right) \,dx = \int_{0}^{1} \left( x^3 + \frac{1}{2}x^2 \right) \,dx $$
    $$ = \left[ \frac{x^4}{4} + \frac{1}{2}\frac{x^3}{3} \right]_{0}^{1} = \frac{1}{4} + \frac{1}{6} = \frac{3+2}{12} = \frac{5}{12} $$

---

**Question 2:**
**(a)**
1.  Non-negativity: The pdf is 2 in the specified triangular region, and 0 elsewhere, so it's non-negative.
2.  Normalization: The area of the triangle is $\frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 1 \times 1 = \frac{1}{2}$.
    $$ \iint_{\text{Triangle}} 2 \,dx \,dy = 2 \times \text{Area} = 2 \times \frac{1}{2} = 1 $$
    Valid pdf.

**(b)**
    To find $P(X \le 0.5)$, we need to integrate $f_{XY}(x, y)$ over the region where $0 \le x \le 0.5$ and $0 \le y \le 1-x$.
    $$ P(X \le 0.5) = \int_{0}^{0.5} \int_{0}^{1-x} 2 \,dy \,dx = \int_{0}^{0.5} [2y]_{0}^{1-x} \,dx = \int_{0}^{0.5} 2(1-x) \,dx $$
    $$ = \int_{0}^{0.5} (2-2x) \,dx = [2x - x^2]_{0}^{0.5} = 2(0.5) - (0.5)^2 = 1 - 0.25 = 0.75 $$

**(c)**
    For the marginal pdf $f_X(x)$, the support is $0 \le x \le 1$. For a given $x$, $y$ ranges from $0$ to $1-x$.
    $$ f_X(x) = \int_{0}^{1-x} 2 \,dy = [2y]_{0}^{1-x} = 2(1-x) $$
    $$ f_X(x) = \begin{cases} 2(1-x) & \text{if } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases} $$
    For the marginal pdf $f_Y(y)$, the support is $0 \le y \le 1$. For a given $y$, $x$ ranges from $0$ to $1-y$.
    $$ f_Y(y) = \int_{0}^{1-y} 2 \,dx = [2x]_{0}^{1-y} = 2(1-y) $$
    $$ f_Y(y) = \begin{cases} 2(1-y) & \text{if } 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases} $$
    Conditional pdf $f_{Y|X}(y|x)$:
    $$ f_{Y|X}(y|x) = \frac{f_{XY}(x, y)}{f_X(x)} = \frac{2}{2(1-x)} = \frac{1}{1-x} $$
    For $0 \le y \le 1-x$, given $0 \le x \le 1$.
    $$ f_{Y|X}(y|x) = \begin{cases} \frac{1}{1-x} & \text{if } 0 \le y \le 1-x \\ 0 & \text{otherwise} \end{cases} $$

**(d)**
    $E[X] = \int_{0}^{1} x \cdot 2(1-x) \,dx = \int_{0}^{1} (2x - 2x^2) \,dx = [x^2 - \frac{2x^3}{3}]_{0}^{1} = 1 - \frac{2}{3} = \frac{1}{3}$.
    By symmetry, $E[Y] = E[X] = \frac{1}{3}$.
    $E[X+Y] = E[X] + E[Y] = \frac{1}{3} + \frac{1}{3} = \frac{2}{3}$.

---

### Important Points to Remember

*   The joint pdf $f_{XY}(x, y)$ describes the probability density over a two-dimensional space.
*   Probabilities are calculated by integrating the joint pdf over the region of interest.
*   Marginal pdfs are obtained by integrating the joint pdf with respect to the other variable.
*   Conditional pdfs are obtained by dividing the joint pdf by the marginal pdf of the conditioning variable.
*   Independence is a strong condition: $f_{XY}(x, y) = f_X(x)f_Y(y)$. Be careful about the support of the variables when checking for independence.
*   Expected values of functions of two random variables are calculated by integrating the function multiplied by the joint pdf.
*   Covariance is crucial for understanding the linear relationship between two variables. If independent, covariance is zero.
