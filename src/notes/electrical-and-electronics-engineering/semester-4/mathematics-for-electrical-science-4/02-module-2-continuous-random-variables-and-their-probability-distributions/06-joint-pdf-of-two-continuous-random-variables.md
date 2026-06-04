---
title: "Joint pdf of two Continuous random variables"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35da2"
status: "completed"
scrapedAt: "2026-05-23T16:16:56.333Z"
---
# Mathematics for Electrical Science – 4: Module 2: Continuous Random Variables and Their Probability Distributions

## Topic: Joint Probability Density Function (PDF) of Two Continuous Random Variables

**Course Outcomes Addressed:**

*   **CO2:** Understand the concept, properties and important models of continuous random variables and to apply in suitable random phenomena. (Knowledge Level: K3)
*   **CO3:** Estimate population parameters, assess their certainty with confidence intervals, and test hypotheses about population means and proportions using z-tests and the one-sample t-test. (Knowledge Level: K3) - *While CO3 focuses on parameter estimation and hypothesis testing, understanding joint distributions is foundational for multivariate statistical methods often used in these areas.*
*   **CO4:** Analyze random processes by classifying them, describing their properties, utilizing autocorrelation functions, and understanding their applications in areas like signal processing and communication systems. (Knowledge Level: K3) - *Joint distributions are crucial for understanding the relationships and dependencies between different components of a random process.*

---

### 1. Introduction to Joint Distributions for Continuous Random Variables

When dealing with phenomena that depend on multiple random factors, we need to consider the **joint behavior** of these factors. In the context of continuous random variables, this involves understanding their **joint probability density function (PDF)**. This function describes the relative likelihood for two or more continuous random variables to take on a given combination of values.

**Key Concept:** Unlike discrete random variables where we have a joint probability mass function (PMF), for continuous random variables, we use a joint probability density function.

**Textbook Reference:**
*   **Devore J. L. (9th ed., 2016), Chapter 4: Bivariate Random Variables:** This chapter extensively covers joint distributions for continuous random variables, including the definition of the joint PDF, marginal PDFs, conditional PDFs, and concepts like independence and covariance.
*   **Veerarajan T. (3rd ed., 2008), Chapter 7: Joint Probability Distributions:** This chapter provides a solid foundation on joint distributions, including the joint PDF, marginal PDFs, and conditional PDFs.

---

### 2. Definition of Joint Probability Density Function (PDF)

Let $X$ and $Y$ be two continuous random variables. Their **joint probability density function**, denoted by $f_{XY}(x, y)$, is a function of two variables $x$ and $y$ such that:

1.  $f_{XY}(x, y) \ge 0$ for all $x, y$.
2.  $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx \, dy = 1$.
3.  The probability that the random vector $(X, Y)$ falls into a region $A$ in the $xy$-plane is given by:
    $P((X, Y) \in A) = \iint_A f_{XY}(x, y) \, dx \, dy$.

**Important Point:** For continuous random variables, the probability of $(X, Y)$ taking any specific single point $(x, y)$ is zero. Probabilities are associated with regions.

**Example 1.1 (Based on Devore, Example 4.1):**
Suppose the joint PDF of two random variables $X$ and $Y$ is given by:
$f_{XY}(x, y) = \begin{cases} 6xy & \text{if } 0 \le x \le 1, 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$

Let's verify if this is a valid joint PDF:
1.  For $0 \le x \le 1$ and $0 \le y \le 1$, $6xy \ge 0$. Otherwise, it's 0. So, $f_{XY}(x, y) \ge 0$.
2.  $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx \, dy = \int_{0}^{1} \int_{0}^{1} 6xy \, dx \, dy$
    $= \int_{0}^{1} \left[ 3x^2y \right]_{x=0}^{x=1} \, dy = \int_{0}^{1} 3y \, dy$
    $= \left[ \frac{3}{2}y^2 \right]_{y=0}^{y=1} = \frac{3}{2} \ne 1$.
    **Correction:** The example from Devore has a different constant. Let's adjust to make it a valid PDF.
    Let $f_{XY}(x, y) = \begin{cases} cxy & \text{if } 0 \le x \le 1, 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$
    Then $\int_{0}^{1} \int_{0}^{1} cxy \, dx \, dy = c \left[ \frac{x^2}{2} \right]_0^1 \left[ \frac{y^2}{2} \right]_0^1 = c \cdot \frac{1}{2} \cdot \frac{1}{2} = \frac{c}{4}$.
    For this to be 1, $c=4$. So, a valid joint PDF is $f_{XY}(x, y) = \begin{cases} 4xy & \text{if } 0 \le x \le 1, 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$.

Now, let's calculate a probability with this corrected PDF:
What is the probability that $X \le 0.5$ and $Y \le 0.5$?
$P(X \le 0.5, Y \le 0.5) = \int_{0}^{0.5} \int_{0}^{0.5} 4xy \, dx \, dy$
$= \int_{0}^{0.5} \left[ 2x^2y \right]_{x=0}^{x=0.5} \, dy = \int_{0}^{0.5} 2(0.5)^2y \, dy$
$= \int_{0}^{0.5} 0.5y \, dy = \left[ 0.25y^2 \right]_{y=0}^{y=0.5} = 0.25(0.5)^2 = 0.25 \times 0.25 = 0.0625$.

---

### 3. Marginal Probability Density Functions

Given the joint PDF $f_{XY}(x, y)$, we can find the **marginal PDF** of $X$, denoted by $f_X(x)$, and the **marginal PDF** of $Y$, denoted by $f_Y(y)$.

*   **Marginal PDF of X:**
    $f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dy$
    This is obtained by integrating the joint PDF with respect to $y$ over all possible values of $y$.

*   **Marginal PDF of Y:**
    $f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx$
    This is obtained by integrating the joint PDF with respect to $x$ over all possible values of $x$.

**Important Point:** The marginal PDFs must also satisfy the properties of a valid PDF (non-negative and integrate to 1).

**Example 1.2 (Continuing with $f_{XY}(x, y) = 4xy$ for $0 \le x \le 1, 0 \le y \le 1$):**

*   **Marginal PDF of X:**
    $f_X(x) = \int_{0}^{1} 4xy \, dy = \left[ 2xy^2 \right]_{y=0}^{y=1} = 2x(1)^2 - 0 = 2x$, for $0 \le x \le 1$.
    So, $f_X(x) = \begin{cases} 2x & \text{if } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$.
    *(Check: $\int_0^1 2x \, dx = [x^2]_0^1 = 1$)*

*   **Marginal PDF of Y:**
    $f_Y(y) = \int_{0}^{1} 4xy \, dx = \left[ 2x^2y \right]_{x=0}^{x=1} = 2(1)^2y - 0 = 2y$, for $0 \le y \le 1$.
    So, $f_Y(y) = \begin{cases} 2y & \text{if } 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$.
    *(Check: $\int_0^1 2y \, dy = [y^2]_0^1 = 1$)*

**Reference:**
*   **Papoulis & Pillai (4th ed., 2002), Chapter 4: Random Variables and Vectors:** Discusses the relationship between joint and marginal distributions.

---

### 4. Probabilities of Events Using Joint PDF

We can calculate the probability that $(X, Y)$ falls into specific regions using double integrals.

**General Approach:**
To find the probability $P(a \le X \le b, c \le Y \le d)$, we compute:
$P(a \le X \le b, c \le Y \le d) = \int_{a}^{b} \int_{c}^{d} f_{XY}(x, y) \, dy \, dx$

**Example 1.3 (Continuing with $f_{XY}(x, y) = 4xy$ for $0 \le x \le 1, 0 \le y \le 1$):**

What is the probability that $0 \le X \le 0.5$ and $0.5 \le Y \le 1$?
$P(0 \le X \le 0.5, 0.5 \le Y \le 1) = \int_{0}^{0.5} \int_{0.5}^{1} 4xy \, dy \, dx$
$= \int_{0}^{0.5} \left[ 2xy^2 \right]_{y=0.5}^{y=1} \, dx = \int_{0}^{0.5} 2x(1^2 - 0.5^2) \, dx$
$= \int_{0}^{0.5} 2x(1 - 0.25) \, dx = \int_{0}^{0.5} 2x(0.75) \, dx = \int_{0}^{0.5} 1.5x \, dx$
$= \left[ 0.75x^2 \right]_{x=0}^{x=0.5} = 0.75(0.5)^2 = 0.75 \times 0.25 = 0.1875$.

**Using Marginal PDFs for Unconditional Probabilities:**
We can also compute probabilities related to a single variable using its marginal PDF:
$P(a \le X \le b) = \int_{a}^{b} f_X(x) \, dx$. This should yield the same result as integrating the joint PDF over the relevant region for $Y$.

For example, $P(0 \le X \le 0.5)$ using the marginal PDF $f_X(x) = 2x$:
$P(0 \le X \le 0.5) = \int_{0}^{0.5} 2x \, dx = \left[ x^2 \right]_{x=0}^{x=0.5} = (0.5)^2 - 0 = 0.25$.

---

### 5. Independence of Random Variables

Two continuous random variables $X$ and $Y$ are said to be **independent** if and only if their joint PDF can be expressed as the product of their marginal PDFs for all $x$ and $y$.

$f_{XY}(x, y) = f_X(x) f_Y(y) \quad \text{for all } x, y$

**Important Property of Independence:** If $X$ and $Y$ are independent, then the probability of $(X, Y)$ falling into a rectangular region $A \times B$ (where $A$ is a range of $X$ and $B$ is a range of $Y$) is the product of the individual probabilities:
$P(X \in A, Y \in B) = P(X \in A) P(Y \in B)$

**Check for Independence in Example 1.2:**
We found $f_{XY}(x, y) = 4xy$, $f_X(x) = 2x$ (for $0 \le x \le 1$), and $f_Y(y) = 2y$ (for $0 \le y \le 1$).
Is $f_{XY}(x, y) = f_X(x) f_Y(y)$?
$f_X(x) f_Y(y) = (2x)(2y) = 4xy$.
Yes, for $0 \le x \le 1$ and $0 \le y \le 1$.
Therefore, $X$ and $Y$ are independent in this example.

**Reference:**
*   **Ross S. M. (6th ed., 2020), Chapter 4: Joint Distributions:** Discusses the concept of independence and its implications.

---

### 6. Conditional Probability Density Function (Conditional PDF)

If $f_{XY}(x, y)$ is the joint PDF of $X$ and $Y$, and $f_X(x)$ is the marginal PDF of $X$, then for any value of $x$ such that $f_X(x) > 0$, the **conditional PDF of Y given X=x** is defined as:

$f_{Y|X}(y|x) = \frac{f_{XY}(x, y)}{f_X(x)}$

Similarly, if $f_Y(y) > 0$:
$f_{X|Y}(x|y) = \frac{f_{XY}(x, y)}{f_Y(y)}$

**Important Properties of Conditional PDF:**
1.  $f_{Y|X}(y|x) \ge 0$ for all $y$.
2.  $\int_{-\infty}^{\infty} f_{Y|X}(y|x) \, dy = 1$ for each $x$ where $f_X(x) > 0$.

**Calculating Conditional Probabilities:**
$P(Y \in B | X = x) = \int_B f_{Y|X}(y|x) \, dy$

**Example 1.4 (Continuing with $f_{XY}(x, y) = 4xy$ for $0 \le x \le 1, 0 \le y \le 1$):**

Let's find the conditional PDF of $Y$ given $X=x$.
We have $f_{XY}(x, y) = 4xy$ and $f_X(x) = 2x$ for $0 \le x \le 1$.
$f_{Y|X}(y|x) = \frac{4xy}{2x} = 2y$, for $0 \le y \le 1$.
So, $f_{Y|X}(y|x) = \begin{cases} 2y & \text{if } 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$

**Observation:** Since $f_{Y|X}(y|x) = 2y = f_Y(y)$, this confirms the independence of $X$ and $Y$. The condition $X=x$ does not affect the distribution of $Y$.

Now, let's calculate a conditional probability. What is the probability that $Y \le 0.5$ given $X = 0.7$?
$P(Y \le 0.5 | X = 0.7) = \int_{0}^{0.5} f_{Y|X}(y|0.7) \, dy = \int_{0}^{0.5} 2y \, dy$
$= \left[ y^2 \right]_{y=0}^{y=0.5} = (0.5)^2 = 0.25$.

**Reference:**
*   **Veerarajan T. (3rd ed., 2008), Chapter 7:** Covers conditional probability distributions extensively.
*   **Anderson, D.F., Timo, B. (1st ed., 2017), Chapter 5: Joint Distributions:** Provides a clear explanation of conditional densities.

---

### 7. Expected Values and Variances for Joint Distributions

The expected value of a function $g(X, Y)$ of two jointly distributed continuous random variables is given by:

$E[g(X, Y)] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x, y) f_{XY}(x, y) \, dx \, dy$

*   **Expected Value of X:** $E[X] = \int_{-\infty}^{\infty} x f_X(x) \, dx = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x f_{XY}(x, y) \, dx \, dy$
*   **Expected Value of Y:** $E[Y] = \int_{-\infty}^{\infty} y f_Y(y) \, dy = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} y f_{XY}(x, y) \, dx \, dy$

**Covariance:** A measure of how much two random variables vary together.
$Cov(X, Y) = E[(X - E[X])(Y - E[Y])] = E[XY] - E[X]E[Y]$
where $E[XY] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy f_{XY}(x, y) \, dx \, dy$.

**Correlation Coefficient:** A standardized measure of covariance.
$\rho(X, Y) = \frac{Cov(X, Y)}{\sqrt{Var(X) Var(Y)}}$

**Important Point for Independent Variables:** If $X$ and $Y$ are independent, then $Cov(X, Y) = 0$ and $\rho(X, Y) = 0$. However, the converse is not always true (i.e., $Cov(X, Y) = 0$ does not necessarily imply independence).

**Example 1.5 (Continuing with $f_{XY}(x, y) = 4xy$ for $0 \le x \le 1, 0 \le y \le 1$):**

*   **Expected Value of X:**
    $E[X] = \int_{0}^{1} x f_X(x) \, dx = \int_{0}^{1} x(2x) \, dx = \int_{0}^{1} 2x^2 \, dx = \left[ \frac{2}{3}x^3 \right]_{0}^{1} = \frac{2}{3}$.

*   **Expected Value of Y:**
    $E[Y] = \int_{0}^{1} y f_Y(y) \, dy = \int_{0}^{1} y(2y) \, dy = \int_{0}^{1} 2y^2 \, dy = \left[ \frac{2}{3}y^3 \right]_{0}^{1} = \frac{2}{3}$.

*   **Expected Value of XY:**
    $E[XY] = \int_{0}^{1} \int_{0}^{1} xy (4xy) \, dx \, dy = \int_{0}^{1} \int_{0}^{1} 4x^2y^2 \, dx \, dy$
    $= \int_{0}^{1} \left[ \frac{4}{3}x^3y^2 \right]_{x=0}^{x=1} \, dy = \int_{0}^{1} \frac{4}{3}y^2 \, dy$
    $= \left[ \frac{4}{9}y^3 \right]_{y=0}^{y=1} = \frac{4}{9}$.

*   **Covariance of X and Y:**
    $Cov(X, Y) = E[XY] - E[X]E[Y] = \frac{4}{9} - \left(\frac{2}{3}\right)\left(\frac{2}{3}\right) = \frac{4}{9} - \frac{4}{9} = 0$.

Since the covariance is 0, and we already established independence, this is consistent.

**Reference:**
*   **Devore J. L. (9th ed., 2016), Chapter 4:** Details on calculating expected values, variances, and covariances for bivariate distributions.
*   **Palaniammal S. (3rd ed., 2015), Chapter 5: Correlation and Regression:** Explains covariance and correlation in the context of random variables.

---

### 8. Applications in Electrical Science

Understanding joint PDFs is fundamental in electrical engineering for:

*   **Signal Processing:** Analyzing the joint behavior of noise sources, signal components, or multiple sensor readings. For example, the joint distribution of voltage and current in a circuit, or the joint distribution of two different spectral components of a signal.
*   **Communication Systems:** Characterizing the joint error probabilities of multiple channels or the joint distribution of transmitted and received signals in the presence of noise.
*   **Control Systems:** Analyzing the combined effect of multiple input disturbances on a system's output.
*   **Reliability Engineering:** Modeling the joint failure probabilities of components in a system.

**Example Application Idea:**
Consider two independent noisy sensors measuring the same physical quantity. The output of sensor 1 is $X = S + N_1$, and the output of sensor 2 is $Y = S + N_2$, where $S$ is the true physical quantity, and $N_1, N_2$ are independent noise components. Their joint PDF would describe the probability of observing specific readings $x$ and $y$ from the sensors. If $S$ is also a random variable, this would be a case of $X$ and $Y$ being dependent, but the noise components might still be independent.

**Reference:**
*   **Ross S. M. (6th ed., 2020), Chapter 4:** Provides examples that can be adapted to electrical engineering contexts.

---

### 9. Practice Questions and Exercises

**Question 1:**
The joint PDF of two continuous random variables $X$ and $Y$ is given by:
$f_{XY}(x, y) = \begin{cases} kx & \text{if } 0 \le x \le 1, 0 \le y \le x \\ 0 & \text{otherwise} \end{cases}$

a) Find the value of the constant $k$.
b) Calculate $P(X \le 0.5, Y \le 0.2)$.
c) Find the marginal PDF of $X$, $f_X(x)$.
d) Find the marginal PDF of $Y$, $f_Y(y)$.
e) Are $X$ and $Y$ independent? Justify your answer.

**Solution 1:**

a) To find $k$, we use the property $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx \, dy = 1$.
The region of integration is where $0 \le x \le 1$ and $0 \le y \le x$.
$\int_{0}^{1} \int_{0}^{x} kx \, dy \, dx = \int_{0}^{1} \left[ kxy \right]_{y=0}^{y=x} \, dx = \int_{0}^{1} kx(x) \, dx = \int_{0}^{1} kx^2 \, dx$
$= \left[ \frac{k}{3}x^3 \right]_{x=0}^{x=1} = \frac{k}{3}$.
For this to be 1, $k = 3$.
So, $f_{XY}(x, y) = \begin{cases} 3x & \text{if } 0 \le x \le 1, 0 \le y \le x \\ 0 & \text{otherwise} \end{cases}$.

b) $P(X \le 0.5, Y \le 0.2)$: The region is $0 \le x \le 0.5$ and $0 \le y \le 0.2$. Since the condition $y \le x$ is also imposed by the PDF, we integrate over the intersection of these regions: $0 \le x \le 0.5$ and $0 \le y \le \min(0.2, x)$.
$P(X \le 0.5, Y \le 0.2) = \int_{0}^{0.5} \int_{0}^{0.2} 3x \, dy \, dx$ (assuming $0.2 \le x$ for all $x$ in $0$ to $0.5$, which is not entirely correct. We need to be careful with integration limits).

Let's re-evaluate the region for $P(X \le 0.5, Y \le 0.2)$.
The joint PDF is $3x$ for $0 \le x \le 1$ and $0 \le y \le x$.
We are interested in the region where $X \le 0.5$ AND $Y \le 0.2$.
The bounds from the PDF are $0 \le x \le 1$ and $0 \le y \le x$.
We need to integrate over the region defined by:
$0 \le x \le 0.5$
$0 \le y \le 0.2$
AND $y \le x$.

The limits will be:
$x$ goes from $0$ to $0.5$.
For a fixed $x$, $y$ goes from $0$ to $0.2$.
BUT, we also need $y \le x$.
So, for $x$ between $0$ and $0.2$, $y$ goes from $0$ to $x$.
For $x$ between $0.2$ and $0.5$, $y$ goes from $0$ to $0.2$.

This requires splitting the integral:
$\int_{0}^{0.2} \int_{0}^{x} 3x \, dy \, dx + \int_{0.2}^{0.5} \int_{0}^{0.2} 3x \, dy \, dx$

First integral: $\int_{0}^{0.2} [3xy]_{y=0}^{y=x} \, dx = \int_{0}^{0.2} 3x^2 \, dx = [x^3]_{0}^{0.2} = (0.2)^3 = 0.008$.

Second integral: $\int_{0.2}^{0.5} [3xy]_{y=0}^{y=0.2} \, dx = \int_{0.2}^{0.5} 3x(0.2) \, dx = \int_{0.2}^{0.5} 0.6x \, dx$
$= [0.3x^2]_{0.2}^{0.5} = 0.3((0.5)^2 - (0.2)^2) = 0.3(0.25 - 0.04) = 0.3(0.21) = 0.063$.

Total probability = $0.008 + 0.063 = 0.071$.

c) Marginal PDF of $X$:
$f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dy = \int_{0}^{x} 3x \, dy$ (for $0 \le x \le 1$)
$= [3xy]_{y=0}^{y=x} = 3x(x) = 3x^2$, for $0 \le x \le 1$.
$f_X(x) = \begin{cases} 3x^2 & \text{if } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$.
*(Check: $\int_0^1 3x^2 \, dx = [x^3]_0^1 = 1$)*

d) Marginal PDF of $Y$:
$f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx$.
The region is $0 \le x \le 1$ and $0 \le y \le x$. This means $x$ must be greater than or equal to $y$. So the integration for $x$ is from $y$ to $1$.
$f_Y(y) = \int_{y}^{1} 3x \, dx$ (for $0 \le y \le 1$).
$= \left[ \frac{3}{2}x^2 \right]_{x=y}^{x=1} = \frac{3}{2}(1^2 - y^2) = \frac{3}{2}(1 - y^2)$, for $0 \le y \le 1$.
$f_Y(y) = \begin{cases} \frac{3}{2}(1 - y^2) & \text{if } 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$.
*(Check: $\int_0^1 \frac{3}{2}(1 - y^2) \, dy = \frac{3}{2} \left[ y - \frac{y^3}{3} \right]_0^1 = \frac{3}{2} (1 - \frac{1}{3}) = \frac{3}{2} \cdot \frac{2}{3} = 1$)*

e) To check for independence, we see if $f_{XY}(x, y) = f_X(x) f_Y(y)$.
$f_X(x) f_Y(y) = (3x^2) \left( \frac{3}{2}(1 - y^2) \right) = \frac{9}{2}x^2(1 - y^2)$.
This is not equal to $f_{XY}(x, y) = 3x$ (within the specified region).
Therefore, $X$ and $Y$ are **not independent**.

---

**Question 2:**
Let $X$ and $Y$ be independent continuous random variables with $f_X(x) = e^{-x}$ for $x \ge 0$ and $f_Y(y) = 2e^{-2y}$ for $y \ge 0$.
a) Find the joint PDF $f_{XY}(x, y)$.
b) Calculate $P(X > Y)$.
c) Find the conditional PDF $f_{Y|X}(y|x)$.

**Solution 2:**

a) Since $X$ and $Y$ are independent, $f_{XY}(x, y) = f_X(x) f_Y(y)$.
$f_{XY}(x, y) = (e^{-x})(2e^{-2y}) = 2e^{-x-2y}$, for $x \ge 0, y \ge 0$.
$f_{XY}(x, y) = \begin{cases} 2e^{-x-2y} & \text{if } x \ge 0, y \ge 0 \\ 0 & \text{otherwise} \end{cases}$.

b) $P(X > Y) = \iint_{x>y} f_{XY}(x, y) \, dx \, dy$.
The region is $x \ge 0, y \ge 0$ and $x > y$.
We can integrate with respect to $y$ first, then $x$:
$P(X > Y) = \int_{0}^{\infty} \int_{0}^{x} 2e^{-x-2y} \, dy \, dx$
$= \int_{0}^{\infty} 2e^{-x} \left( \int_{0}^{x} e^{-2y} \, dy \right) \, dx$
Inner integral: $\int_{0}^{x} e^{-2y} \, dy = \left[ -\frac{1}{2}e^{-2y} \right]_{0}^{x} = -\frac{1}{2}e^{-2x} - (-\frac{1}{2}e^{0}) = \frac{1}{2}(1 - e^{-2x})$.

Outer integral: $\int_{0}^{\infty} 2e^{-x} \cdot \frac{1}{2}(1 - e^{-2x}) \, dx = \int_{0}^{\infty} e^{-x}(1 - e^{-2x}) \, dx$
$= \int_{0}^{\infty} (e^{-x} - e^{-3x}) \, dx = \left[ -e^{-x} + \frac{1}{3}e^{-3x} \right]_{0}^{\infty}$
As $x \to \infty$, $e^{-x} \to 0$ and $e^{-3x} \to 0$.
So, the limit is $0 - 0 - (-e^0 + \frac{1}{3}e^0) = -(1 - \frac{1}{3}) = -\frac{2}{3}$.
This result should be positive. Let's recheck the integration.

The evaluation at infinity is $(0+0)$.
The evaluation at 0 is $(-e^0 + \frac{1}{3}e^0) = (-1 + \frac{1}{3}) = -\frac{2}{3}$.
So, the definite integral is $[-\text{upper limit}] - [-\text{lower limit}] = (0) - (-\frac{2}{3}) = \frac{2}{3}$.
So, $P(X > Y) = \frac{2}{3}$.

c) Find the conditional PDF $f_{Y|X}(y|x)$.
$f_{Y|X}(y|x) = \frac{f_{XY}(x, y)}{f_X(x)} = \frac{2e^{-x-2y}}{e^{-x}} = 2e^{-2y}$, for $x \ge 0, y \ge 0$.
$f_{Y|X}(y|x) = \begin{cases} 2e^{-2y} & \text{if } y \ge 0 \\ 0 & \text{otherwise} \end{cases}$ (for any $x \ge 0$).
Since $f_{Y|X}(y|x) = f_Y(y)$, this confirms independence.

---

### 10. Important Points to Remember

*   **Joint PDF $f_{XY}(x, y)$:** Non-negative and integrates to 1 over the entire $xy$-plane. Probabilities are found by integrating the joint PDF over specific regions.
*   **Marginal PDFs $f_X(x)$ and $f_Y(y)$:** Obtained by integrating the joint PDF with respect to the other variable. They represent the individual probability distributions of $X$ and $Y$.
*   **Independence:** $X$ and $Y$ are independent if $f_{XY}(x, y) = f_X(x) f_Y(y)$ for all $x, y$. This simplifies many calculations and implies $Cov(X, Y) = 0$.
*   **Conditional PDF $f_{Y|X}(y|x)$:** Describes the distribution of $Y$ given that $X$ has taken a specific value $x$. It's calculated as $f_{XY}(x, y) / f_X(x)$.
*   **Expected Values:** $E[g(X, Y)]$ is calculated by integrating $g(x, y)f_{XY}(x, y)$ over the entire $xy$-plane.
*   **Applications:** Joint distributions are crucial for understanding multivariate phenomena in electrical science, such as noise, system inputs, and multiple measurements.

---

This concludes the notes on the Joint PDF of Two Continuous Random Variables. Remember to practice integrating over different regions and to clearly identify the bounds of your integration based on the defined PDF.
