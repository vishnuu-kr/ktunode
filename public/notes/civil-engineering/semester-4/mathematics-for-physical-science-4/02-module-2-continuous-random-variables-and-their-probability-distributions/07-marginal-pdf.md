---
title: "Marginal pdf"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81092e"
status: "completed"
scrapedAt: "2026-05-20T18:46:04.438Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Marginal PDF

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the concept of a joint probability density function (pdf) for continuous random variables.
*   Define and calculate the marginal probability density function (pdf) for individual continuous random variables from a joint pdf.
*   Interpret the meaning of a marginal pdf in the context of a joint distribution.
*   Recognize and apply the properties of marginal pdfs.
*   Use marginal pdfs to calculate probabilities related to individual random variables.

---

### 1. Introduction to Joint Probability Density Functions (PDFs)

When we have two or more continuous random variables that are related, we often describe their combined behavior using a **joint probability density function (joint pdf)**. This function, denoted as $f(x, y)$ for two continuous random variables $X$ and $Y$, provides the probability density for observing specific pairs of values $(x, y)$.

#### Key Concepts and Definitions:

*   **Joint PDF, $f(x, y)$:** For two continuous random variables $X$ and $Y$, the function $f(x, y)$ is a joint pdf if it satisfies the following conditions:
    1.  $f(x, y) \ge 0$ for all $x, y$.
    2.  $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x, y) \, dx \, dy = 1$.

*   **Interpretation:** The value of $f(x, y)$ itself is not a probability. Instead, the probability that the pair $(X, Y)$ falls within a region $A$ in the $xy$-plane is given by the double integral of the joint pdf over that region:
    $P((X, Y) \in A) = \iint_A f(x, y) \, dx \, dy$.

*   **Probability of a Small Rectangle:** For a very small rectangle defined by $x \le X \le x + dx$ and $y \le Y \le y + dy$, the approximate probability is:
    $P(x \le X \le x + dx, y \le Y \le y + dy) \approx f(x, y) \, dx \, dy$.

#### Example:

Consider two continuous random variables $X$ and $Y$ representing, for instance, the time to failure of two components in a system. Their joint pdf could be given by:

$f(x, y) = \begin{cases} 6e^{-(2x+3y)} & \text{if } x > 0, y > 0 \\ 0 & \text{otherwise} \end{cases}$

To verify this is a valid joint pdf, we would integrate it over its support:

$\int_0^\infty \int_0^\infty 6e^{-(2x+3y)} \, dx \, dy = \int_0^\infty 6e^{-3y} \left[ \int_0^\infty e^{-2x} \, dx \right] \, dy$
$= \int_0^\infty 6e^{-3y} \left[ -\frac{1}{2}e^{-2x} \right]_0^\infty \, dy = \int_0^\infty 6e^{-3y} \left( 0 - (-\frac{1}{2}) \right) \, dy$
$= \int_0^\infty 3e^{-3y} \, dy = 3 \left[ -\frac{1}{3}e^{-3y} \right]_0^\infty = 3 (0 - (-\frac{1}{3})) = 1$.

This confirms that $f(x, y)$ is a valid joint pdf.

---

### 2. Marginal Probability Density Functions (PDFs)

The **marginal pdf** of a single random variable from a joint distribution describes the probability distribution of that individual variable, ignoring the behavior of the other variables.

#### Key Concepts and Definitions:

*   **Marginal PDF of X, $f_X(x)$:** The marginal pdf of $X$ is obtained by integrating the joint pdf $f(x, y)$ with respect to $Y$ over its entire range:
    $f_X(x) = \int_{-\infty}^{\infty} f(x, y) \, dy$.

*   **Marginal PDF of Y, $f_Y(y)$:** The marginal pdf of $Y$ is obtained by integrating the joint pdf $f(x, y)$ with respect to $X$ over its entire range:
    $f_Y(y) = \int_{-\infty}^{\infty} f(x, y) \, dx$.

*   **Interpretation:** The marginal pdf $f_X(x)$ tells us the probability density of observing a value $x$ for the random variable $X$, irrespective of the value $Y$ takes. Similarly for $f_Y(y)$.

#### Example (Continuing from the previous example):

Given $f(x, y) = \begin{cases} 6e^{-(2x+3y)} & \text{if } x > 0, y > 0 \\ 0 & \text{otherwise} \end{cases}$

To find the marginal pdf of $X$, $f_X(x)$:
$f_X(x) = \int_{-\infty}^{\infty} f(x, y) \, dy$
For $x > 0$, the integral is over the range where $y > 0$:
$f_X(x) = \int_0^{\infty} 6e^{-(2x+3y)} \, dy = \int_0^{\infty} 6e^{-2x}e^{-3y} \, dy$
$f_X(x) = 6e^{-2x} \int_0^{\infty} e^{-3y} \, dy$
$f_X(x) = 6e^{-2x} \left[ -\frac{1}{3}e^{-3y} \right]_0^{\infty}$
$f_X(x) = 6e^{-2x} \left( 0 - (-\frac{1}{3}) \right)$
$f_X(x) = 6e^{-2x} \left( \frac{1}{3} \right) = 2e^{-2x}$, for $x > 0$.
And $f_X(x) = 0$ otherwise.

So, the marginal pdf of $X$ is $f_X(x) = \begin{cases} 2e^{-2x} & \text{if } x > 0 \\ 0 & \text{otherwise} \end{cases}$.
This is an exponential distribution with parameter $\lambda = 2$.

To find the marginal pdf of $Y$, $f_Y(y)$:
$f_Y(y) = \int_{-\infty}^{\infty} f(x, y) \, dx$
For $y > 0$, the integral is over the range where $x > 0$:
$f_Y(y) = \int_0^{\infty} 6e^{-(2x+3y)} \, dx = \int_0^{\infty} 6e^{-3y}e^{-2x} \, dx$
$f_Y(y) = 6e^{-3y} \int_0^{\infty} e^{-2x} \, dx$
$f_Y(y) = 6e^{-3y} \left[ -\frac{1}{2}e^{-2x} \right]_0^{\infty}$
$f_Y(y) = 6e^{-3y} \left( 0 - (-\frac{1}{2}) \right)$
$f_Y(y) = 6e^{-3y} \left( \frac{1}{2} \right) = 3e^{-3y}$, for $y > 0$.
And $f_Y(y) = 0$ otherwise.

So, the marginal pdf of $Y$ is $f_Y(y) = \begin{cases} 3e^{-3y} & \text{if } y > 0 \\ 0 & \text{otherwise} \end{cases}$.
This is an exponential distribution with parameter $\lambda = 3$.

---

### 3. Properties of Marginal PDFs

Marginal pdfs inherit the properties of regular pdfs for individual random variables.

#### Key Properties:

*   **Non-negativity:** $f_X(x) \ge 0$ for all $x$, and $f_Y(y) \ge 0$ for all $y$.
*   **Normalization:** The integral of a marginal pdf over its entire range must equal 1:
    *   $\int_{-\infty}^{\infty} f_X(x) \, dx = 1$
    *   $\int_{-\infty}^{\infty} f_Y(y) \, dy = 1$
*   **Probability Calculation:** The probability that $X$ falls within a certain range $[a, b]$ can be calculated using its marginal pdf:
    $P(a \le X \le b) = \int_a^b f_X(x) \, dx$.

#### Example (Checking Properties):

Using the marginal pdfs derived earlier:
$f_X(x) = 2e^{-2x}$ for $x > 0$.
We already verified its normalization: $\int_0^{\infty} 2e^{-2x} \, dx = 1$.

$f_Y(y) = 3e^{-3y}$ for $y > 0$.
We can verify its normalization: $\int_0^{\infty} 3e^{-3y} \, dy = 3 \left[ -\frac{1}{3}e^{-3y} \right]_0^{\infty} = 3(0 - (-\frac{1}{3})) = 1$.

Let's calculate $P(X \le 1)$ using the marginal pdf of $X$:
$P(X \le 1) = \int_0^1 2e^{-2x} \, dx = 2 \left[ -\frac{1}{2}e^{-2x} \right]_0^1$
$P(X \le 1) = [-e^{-2x}]_0^1 = -e^{-2} - (-e^0) = 1 - e^{-2}$.

---

### 4. Relationship with Independence

The concept of marginal pdfs is closely related to the independence of random variables.

#### Key Concepts:

*   **Independent Random Variables:** Two continuous random variables $X$ and $Y$ are independent if and only if their joint pdf can be factored into the product of their marginal pdfs:
    $f(x, y) = f_X(x) f_Y(y)$ for all $x, y$.

*   **Converse:** If $f(x, y) = f_X(x) f_Y(y)$, then $X$ and $Y$ are independent.

#### Example (Checking Independence):

In our earlier example, we had:
$f(x, y) = 6e^{-(2x+3y)} = 6e^{-2x}e^{-3y}$ for $x > 0, y > 0$.
And we found:
$f_X(x) = 2e^{-2x}$ for $x > 0$.
$f_Y(y) = 3e^{-3y}$ for $y > 0$.

Notice that $f_X(x) f_Y(y) = (2e^{-2x})(3e^{-3y}) = 6e^{-2x}e^{-3y}$.
This is equal to the joint pdf $f(x, y)$ for $x > 0$ and $y > 0$.
Therefore, $X$ and $Y$ are **independent** in this example.

**Important Note:** The condition $f(x, y) = f_X(x) f_Y(y)$ must hold for all values in the support of the joint distribution.

---

### 5. Calculating Probabilities using Marginal PDFs

Marginal pdfs are fundamental for calculating probabilities concerning individual random variables when dealing with joint distributions.

#### How to Use:

1.  **Identify the Joint PDF:** Ensure you have the correct $f(x, y)$.
2.  **Derive the Marginal PDFs:** Calculate $f_X(x)$ and $f_Y(y)$ by integrating the joint pdf.
3.  **Calculate Individual Probabilities:** Use the derived marginal pdfs to compute probabilities for individual variables, just as you would for a single random variable distribution.

#### Example:

Let $X$ and $Y$ be continuous random variables with the joint pdf:
$f(x, y) = \begin{cases} \frac{1}{2} & \text{if } 0 < x < 1, 0 < y < 2 \\ 0 & \text{otherwise} \end{cases}$

This is a uniform distribution over a rectangle.

**Step 1: Find the marginal pdf of X, $f_X(x)$.**
For $0 < x < 1$:
$f_X(x) = \int_{-\infty}^{\infty} f(x, y) \, dy = \int_0^2 \frac{1}{2} \, dy$
$f_X(x) = \frac{1}{2} [y]_0^2 = \frac{1}{2} (2 - 0) = 1$.
So, $f_X(x) = \begin{cases} 1 & \text{if } 0 < x < 1 \\ 0 & \text{otherwise} \end{cases}$.
This is a Uniform(0, 1) distribution.

**Step 2: Find the marginal pdf of Y, $f_Y(y)$.**
For $0 < y < 2$:
$f_Y(y) = \int_{-\infty}^{\infty} f(x, y) \, dx = \int_0^1 \frac{1}{2} \, dx$
$f_Y(y) = \frac{1}{2} [x]_0^1 = \frac{1}{2} (1 - 0) = \frac{1}{2}$.
So, $f_Y(y) = \begin{cases} \frac{1}{2} & \text{if } 0 < y < 2 \\ 0 & \text{otherwise} \end{cases}$.
This is a Uniform(0, 2) distribution.

**Step 3: Calculate $P(0.2 < X < 0.5)$.**
Using the marginal pdf of $X$:
$P(0.2 < X < 0.5) = \int_{0.2}^{0.5} f_X(x) \, dx = \int_{0.2}^{0.5} 1 \, dx$
$P(0.2 < X < 0.5) = [x]_{0.2}^{0.5} = 0.5 - 0.2 = 0.3$.

**Step 4: Calculate $P(Y > 1.5)$.**
Using the marginal pdf of $Y$:
$P(Y > 1.5) = \int_{1.5}^{2} f_Y(y) \, dy = \int_{1.5}^{2} \frac{1}{2} \, dy$
$P(Y > 1.5) = \frac{1}{2} [y]_{1.5}^{2} = \frac{1}{2} (2 - 1.5) = \frac{1}{2} (0.5) = 0.25$.

**Step 5: Check for Independence.**
$f_X(x) f_Y(y) = (1) \left(\frac{1}{2}\right) = \frac{1}{2}$ for $0 < x < 1, 0 < y < 2$.
This is equal to $f(x, y)$ in its support. Therefore, $X$ and $Y$ are independent.

---

### 6. Practice Questions

**Question 1:**
Let $X$ and $Y$ be continuous random variables with the joint pdf:
$f(x, y) = \begin{cases} cxy & \text{if } 0 < x < 1, 0 < y < 2 \\ 0 & \text{otherwise} \end{cases}$
a) Find the value of the constant $c$.
b) Find the marginal pdf of $X$, $f_X(x)$.
c) Find the marginal pdf of $Y$, $f_Y(y)$.
d) Calculate $P(X < 0.5)$.
e) Calculate $P(Y > 1)$.

**Question 2:**
Suppose the joint pdf of two continuous random variables $X$ and $Y$ is given by:
$f(x, y) = \begin{cases} e^{-(x+y)} & \text{if } x > 0, y > 0 \\ 0 & \text{otherwise} \end{cases}$
a) Verify that this is a valid joint pdf.
b) Find the marginal pdf of $X$, $f_X(x)$.
c) Find the marginal pdf of $Y$, $f_Y(y)$.
d) Are $X$ and $Y$ independent? Justify your answer.
e) Calculate $P(X > 1 | Y < 1)$. (Hint: You'll need the conditional probability concept, which relies on marginals).

**Question 3:**
Consider the joint pdf:
$f(x, y) = \begin{cases} 12xy^2 & \text{if } 0 < x < y < 1 \\ 0 & \text{otherwise} \end{cases}$
a) Find the marginal pdf of $X$, $f_X(x)$.
b) Find the marginal pdf of $Y$, $f_Y(y)$.
c) Calculate $P(X < 0.5)$.

---

### Answers to Practice Questions

**Answer 1:**
a) To find $c$, integrate the joint pdf over its support and set it to 1:
$\int_0^2 \int_0^1 cxy \, dx \, dy = 1$
$\int_0^2 cy \left[ \frac{x^2}{2} \right]_0^1 \, dy = 1$
$\int_0^2 cy \left( \frac{1}{2} \right) \, dy = 1$
$\int_0^2 \frac{c}{2} y \, dy = 1$
$\frac{c}{2} \left[ \frac{y^2}{2} \right]_0^2 = 1$
$\frac{c}{2} \left( \frac{4}{2} \right) = 1$
$\frac{c}{2} (2) = 1 \implies c = 1$.
So, $f(x, y) = xy$ for $0 < x < 1, 0 < y < 2$.

b) Marginal pdf of $X$, $f_X(x)$ for $0 < x < 1$:
$f_X(x) = \int_0^2 xy \, dy = x \left[ \frac{y^2}{2} \right]_0^2 = x \left( \frac{4}{2} \right) = 2x$.
$f_X(x) = \begin{cases} 2x & \text{if } 0 < x < 1 \\ 0 & \text{otherwise} \end{cases}$.

c) Marginal pdf of $Y$, $f_Y(y)$ for $0 < y < 2$:
$f_Y(y) = \int_0^1 xy \, dx = y \left[ \frac{x^2}{2} \right]_0^1 = y \left( \frac{1}{2} \right) = \frac{y}{2}$.
$f_Y(y) = \begin{cases} \frac{y}{2} & \text{if } 0 < y < 2 \\ 0 & \text{otherwise} \end{cases}$.

d) $P(X < 0.5) = \int_0^{0.5} f_X(x) \, dx = \int_0^{0.5} 2x \, dx = \left[ x^2 \right]_0^{0.5} = (0.5)^2 - 0^2 = 0.25$.

e) $P(Y > 1) = \int_1^2 f_Y(y) \, dy = \int_1^2 \frac{y}{2} \, dy = \frac{1}{2} \left[ \frac{y^2}{2} \right]_1^2 = \frac{1}{4} [y^2]_1^2 = \frac{1}{4} (4 - 1) = \frac{3}{4} = 0.75$.

**Answer 2:**
a) $\int_0^\infty \int_0^\infty e^{-(x+y)} \, dx \, dy = \int_0^\infty e^{-y} \left( \int_0^\infty e^{-x} \, dx \right) \, dy$
$= \int_0^\infty e^{-y} [-e^{-x}]_0^\infty \, dy = \int_0^\infty e^{-y} (0 - (-1)) \, dy = \int_0^\infty e^{-y} \, dy$
$= [-e^{-y}]_0^\infty = 0 - (-1) = 1$. Yes, it's a valid joint pdf.

b) Marginal pdf of $X$, $f_X(x)$ for $x > 0$:
$f_X(x) = \int_0^\infty e^{-(x+y)} \, dy = e^{-x} \int_0^\infty e^{-y} \, dy = e^{-x} [-e^{-y}]_0^\infty = e^{-x}(1) = e^{-x}$.
$f_X(x) = \begin{cases} e^{-x} & \text{if } x > 0 \\ 0 & \text{otherwise} \end{cases}$. (Exponential with $\lambda = 1$).

c) Marginal pdf of $Y$, $f_Y(y)$ for $y > 0$:
$f_Y(y) = \int_0^\infty e^{-(x+y)} \, dx = e^{-y} \int_0^\infty e^{-x} \, dx = e^{-y} [-e^{-x}]_0^\infty = e^{-y}(1) = e^{-y}$.
$f_Y(y) = \begin{cases} e^{-y} & \text{if } y > 0 \\ 0 & \text{otherwise} \end{cases}$. (Exponential with $\lambda = 1$).

d) $f_X(x)f_Y(y) = (e^{-x})(e^{-y}) = e^{-(x+y)}$, which is equal to $f(x, y)$ for $x > 0, y > 0$.
Therefore, $X$ and $Y$ are independent.

e) $P(X > 1 | Y < 1) = \frac{P(X > 1 \text{ and } Y < 1)}{P(Y < 1)}$.
Since $X$ and $Y$ are independent, $P(X > 1 \text{ and } Y < 1) = P(X > 1)P(Y < 1)$.
$P(X > 1) = \int_1^\infty e^{-x} \, dx = [-e^{-x}]_1^\infty = 0 - (-e^{-1}) = e^{-1}$.
$P(Y < 1) = \int_0^1 e^{-y} \, dy = [-e^{-y}]_0^1 = -e^{-1} - (-e^0) = 1 - e^{-1}$.
So, $P(X > 1 | Y < 1) = \frac{P(X > 1)P(Y < 1)}{P(Y < 1)} = P(X > 1) = e^{-1}$.

**Answer 3:**
a) Marginal pdf of $X$, $f_X(x)$ for $0 < x < 1$:
The support for $y$ given $x$ is $x < y < 1$.
$f_X(x) = \int_x^1 12xy^2 \, dy = 12x \left[ \frac{y^3}{3} \right]_x^1 = 12x \left( \frac{1}{3} - \frac{x^3}{3} \right) = 4x(1 - x^3)$.
$f_X(x) = \begin{cases} 4x - 4x^4 & \text{if } 0 < x < 1 \\ 0 & \text{otherwise} \end{cases}$.

b) Marginal pdf of $Y$, $f_Y(y)$ for $0 < y < 1$:
The support for $x$ given $y$ is $0 < x < y$.
$f_Y(y) = \int_0^y 12xy^2 \, dx = 12y^2 \left[ \frac{x^2}{2} \right]_0^y = 12y^2 \left( \frac{y^2}{2} \right) = 6y^4$.
$f_Y(y) = \begin{cases} 6y^4 & \text{if } 0 < y < 1 \\ 0 & \text{otherwise} \end{cases}$.

c) $P(X < 0.5) = \int_0^{0.5} f_X(x) \, dx = \int_0^{0.5} (4x - 4x^4) \, dx$
$= \left[ 2x^2 - \frac{4x^5}{5} \right]_0^{0.5} = \left( 2(0.5)^2 - \frac{4(0.5)^5}{5} \right) - 0$
$= \left( 2(0.25) - \frac{4(0.03125)}{5} \right) = 0.5 - \frac{0.125}{5} = 0.5 - 0.025 = 0.475$.

---

### Important Points to Remember:

*   **Integration is Key:** Marginal pdfs are obtained by integrating the joint pdf.
*   **Integrate Out the "Other" Variable:** To get $f_X(x)$, integrate the joint pdf with respect to $y$. To get $f_Y(y)$, integrate with respect to $x$.
*   **Support Matters:** Pay close attention to the ranges (support) of the random variables when setting up and performing the integrations. The limits of integration for the marginals depend on the joint support.
*   **Independence is Factorability:** Remember that $f(x, y) = f_X(x)f_Y(y)$ is the condition for independence.
*   **Marginals are PDFs:** The resulting marginal functions must also satisfy the properties of probability density functions (non-negativity and normalization).
*   **Applications:** Marginal pdfs are crucial for understanding the behavior of individual components or variables within a system described by a joint distribution.

---
