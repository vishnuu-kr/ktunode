---
title: "Marginal pmf"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 1: Random variables"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810924"
status: "completed"
scrapedAt: "2026-05-20T18:45:58.173Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4
## Module 1: Random Variables
### Topic: Marginal Probability Mass Function (pmf)

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the concept of a joint probability distribution for discrete random variables.
*   Define and calculate the marginal probability mass function (pmf) for individual discrete random variables from a joint pmf.
*   Verify that a marginal pmf satisfies the properties of a probability mass function.
*   Apply the concept of marginal pmf to solve problems involving multiple discrete random variables.

---

### 1. Introduction to Joint Probability Distributions

When we deal with situations involving multiple random phenomena, we often need to consider the probabilities of different outcomes occurring *simultaneously*. This is where the concept of **joint probability distributions** comes into play.

*   **Definition:** A **joint probability mass function (pmf)**, denoted as $P(X=x, Y=y)$ or $p_{XY}(x, y)$, describes the probability that two or more discrete random variables simultaneously take on specific values.

*   **For Two Discrete Random Variables (X and Y):**
    *   The joint pmf $p_{XY}(x, y)$ is defined for all possible pairs of values $(x, y)$ that the random variables $X$ and $Y$ can take.
    *   **Properties of a Joint pmf:**
        1.  $p_{XY}(x, y) \ge 0$ for all $x, y$.
        2.  $\sum_{x} \sum_{y} p_{XY}(x, y) = 1$, where the sums are over all possible values of $x$ and $y$.

*   **Example:** Consider flipping two fair coins. Let $X$ be the number of heads on the first coin (0 or 1) and $Y$ be the number of heads on the second coin (0 or 1).
    The possible outcomes are (Tail, Tail), (Tail, Head), (Head, Tail), (Head, Head).
    The joint pmf can be represented in a table:

    | $P(X=x, Y=y)$ | $Y=0$ (Tail) | $Y=1$ (Head) | **Total $P(X=x)$** |
    | :------------ | :----------- | :----------- | :------------------- |
    | **$X=0$ (Tail)** | $P(X=0, Y=0) = 0.25$ | $P(X=0, Y=1) = 0.25$ | $0.50$               |
    | **$X=1$ (Head)** | $P(X=1, Y=0) = 0.25$ | $P(X=1, Y=1) = 0.25$ | $0.50$               |
    | **Total $P(Y=y)$** | $0.50$       | $0.50$       | **Sum = 1.00**       |

---

### 2. The Concept of Marginal Probability Mass Function (pmf)

Often, we are interested in the probability distribution of *one* of the random variables, regardless of the values of the other random variables. This is where the **marginal pmf** is useful.

*   **Definition:** The **marginal probability mass function (pmf)** of a single discrete random variable $X$, denoted as $P(X=x)$ or $p_X(x)$, is obtained by summing the joint pmf over all possible values of the other random variable(s).

*   **For Two Discrete Random Variables (X and Y):**
    *   The marginal pmf of $X$ is:
        $p_X(x) = P(X=x) = \sum_{y} p_{XY}(x, y)$
        (Sum over all possible values of $Y$ for a fixed value of $X$).

    *   The marginal pmf of $Y$ is:
        $p_Y(y) = P(Y=y) = \sum_{x} p_{XY}(x, y)$
        (Sum over all possible values of $X$ for a fixed value of $Y$).

*   **Key Idea:** The marginal pmf "marginalizes out" the other random variable(s). It represents the unconditional probability of a particular outcome for one variable.

---

### 3. Calculating Marginal pmfs

To calculate the marginal pmf, we simply sum the joint pmf across the rows or columns of the joint probability table (or over the relevant dimension in a formula).

*   **Using the Example Above (Two Coins):**
    *   **Marginal pmf of X:**
        *   $p_X(0) = P(X=0) = P(X=0, Y=0) + P(X=0, Y=1) = 0.25 + 0.25 = 0.50$
        *   $p_X(1) = P(X=1) = P(X=1, Y=0) + P(X=1, Y=1) = 0.25 + 0.25 = 0.50$
        This is the same as the probability of getting heads on a single coin flip, as expected.

    *   **Marginal pmf of Y:**
        *   $p_Y(0) = P(Y=0) = P(X=0, Y=0) + P(X=1, Y=0) = 0.25 + 0.25 = 0.50$
        *   $p_Y(1) = P(Y=1) = P(X=0, Y=1) + P(X=1, Y=1) = 0.25 + 0.25 = 0.50$
        Again, this matches the probability of getting heads on a single coin flip.

*   **Example with Different Probabilities:**
    Suppose we have two discrete random variables $X$ and $Y$ with the following joint pmf:

    $p_{XY}(x, y) = \frac{x+y}{36}$ for $x \in \{1, 2, 3\}$ and $y \in \{1, 2, 3\}$.

    Let's construct the joint probability table:

    | $P(X=x, Y=y)$ | $Y=1$ | $Y=2$ | $Y=3$ | **Total $P(X=x)$** |
    | :------------ | :---- | :---- | :---- | :------------------- |
    | **$X=1$**     | $\frac{1+1}{36} = \frac{2}{36}$ | $\frac{1+2}{36} = \frac{3}{36}$ | $\frac{1+3}{36} = \frac{4}{36}$ | $\frac{2+3+4}{36} = \frac{9}{36}$ |
    | **$X=2$**     | $\frac{2+1}{36} = \frac{3}{36}$ | $\frac{2+2}{36} = \frac{4}{36}$ | $\frac{2+3}{36} = \frac{5}{36}$ | $\frac{3+4+5}{36} = \frac{12}{36}$ |
    | **$X=3$**     | $\frac{3+1}{36} = \frac{4}{36}$ | $\frac{3+2}{36} = \frac{5}{36}$ | $\frac{3+3}{36} = \frac{6}{36}$ | $\frac{4+5+6}{36} = \frac{15}{36}$ |
    | **Total $P(Y=y)$** | $\frac{2+3+4}{36} = \frac{9}{36}$ | $\frac{3+4+5}{36} = \frac{12}{36}$ | $\frac{4+5+6}{36} = \frac{15}{36}$ | **Sum = $\frac{36}{36} = 1$** |

    *   **Marginal pmf of X:**
        *   $p_X(1) = \frac{9}{36} = \frac{1}{4}$
        *   $p_X(2) = \frac{12}{36} = \frac{1}{3}$
        *   $p_X(3) = \frac{15}{36} = \frac{5}{12}$

    *   **Marginal pmf of Y:**
        *   $p_Y(1) = \frac{9}{36} = \frac{1}{4}$
        *   $p_Y(2) = \frac{12}{36} = \frac{1}{3}$
        *   $p_Y(3) = \frac{15}{36} = \frac{5}{12}$

---

### 4. Verifying Marginal pmfs

A valid marginal pmf must satisfy the properties of any probability mass function.

*   **Properties of a Marginal pmf ($p_X(x)$ or $p_Y(y)$):**
    1.  **Non-negativity:** $p_X(x) \ge 0$ for all $x$.
    2.  **Summation to One:** $\sum_{x} p_X(x) = 1$.

*   **Verification using the Example Above:**
    *   **For $p_X(x)$:**
        1.  $p_X(1) = \frac{1}{4} \ge 0$, $p_X(2) = \frac{1}{3} \ge 0$, $p_X(3) = \frac{5}{12} \ge 0$. (Non-negativity holds).
        2.  $\sum_{x=1}^{3} p_X(x) = p_X(1) + p_X(2) + p_X(3) = \frac{1}{4} + \frac{1}{3} + \frac{5}{12} = \frac{3}{12} + \frac{4}{12} + \frac{5}{12} = \frac{12}{12} = 1$. (Summation to one holds).

    *   **For $p_Y(y)$:** (Similar verification, as the marginal distributions are identical in this case).

---

### 5. Applications in Physical Science

Marginal pmfs are crucial for analyzing systems with multiple interacting random variables, especially when one aspect of the system is of primary interest.

*   **Example Scenario (Particle Physics):** Imagine measuring two properties of a subatomic particle, say its energy ($E$) and momentum ($P$). These might be correlated, and their joint probability distribution $p_{E,P}(e, p)$ could be known. If you are only interested in the probability of observing a certain energy level, you would calculate the marginal pmf for energy, $p_E(e) = \sum_{p} p_{E,P}(e, p)$. This allows you to analyze the energy spectrum without needing to know the specific momentum values.

*   **Example Scenario (Statistical Mechanics):** In a system of many particles, the joint distribution of the positions and momenta of all particles is incredibly complex. However, one might be interested in the probability distribution of the position of a *single* particle, or the distribution of its velocity. This would involve calculating marginal distributions from the overall joint distribution.

---

### 6. Important Points to Remember

*   **Joint pmf** describes the probability of multiple events happening *together*.
*   **Marginal pmf** describes the probability of a *single* event happening, regardless of others.
*   To find a marginal pmf, **sum the joint pmf** over all possible values of the other random variable(s).
*   A marginal pmf is still a **probability mass function** and must satisfy its properties (non-negative and sums to 1).
*   The calculations of marginal pmfs can be visualized as summing rows or columns in a joint probability table.

---

### Practice Questions

**Question 1:**
Two fair dice are rolled. Let $X$ be the number shown on the first die and $Y$ be the number shown on the second die. Their joint pmf is $p_{XY}(x, y) = \frac{1}{36}$ for $x, y \in \{1, 2, 3, 4, 5, 6\}$.
a) Calculate the marginal pmf of $X$, $p_X(x)$.
b) Calculate the marginal pmf of $Y$, $p_Y(y)$.
c) Verify that $p_X(x)$ is a valid pmf.

**Question 2:**
Consider two discrete random variables $X$ and $Y$ with the following joint pmf:

| $P(X=x, Y=y)$ | $Y=0$ | $Y=1$ | $Y=2$ |
| :------------ | :---- | :---- | :---- |
| **$X=0$**     | $0.1$ | $0.2$ | $0.3$ |
| **$X=1$**     | $0.1$ | $0.1$ | $0.2$ |

a) Find the marginal pmf of $X$, $p_X(x)$.
b) Find the marginal pmf of $Y$, $p_Y(y)$.
c) What is the probability that $X=0$?

**Question 3:**
Let $X$ and $Y$ be discrete random variables with the joint pmf $p_{XY}(x, y) = c \cdot x \cdot y$ for $x \in \{1, 2\}$ and $y \in \{1, 2, 3\}$. The sum of all probabilities is 1.
a) Find the value of the constant $c$.
b) Construct the joint probability table.
c) Calculate the marginal pmf of $X$, $p_X(x)$.
d) Calculate the marginal pmf of $Y$, $p_Y(y)$.

---

### Answers to Practice Questions

**Answer 1:**
a) The marginal pmf of $X$ is $p_X(x) = \sum_{y=1}^{6} \frac{1}{36} = 6 \times \frac{1}{36} = \frac{1}{6}$ for $x \in \{1, 2, 3, 4, 5, 6\}$.
b) The marginal pmf of $Y$ is $p_Y(y) = \sum_{x=1}^{6} \frac{1}{36} = 6 \times \frac{1}{36} = \frac{1}{6}$ for $y \in \{1, 2, 3, 4, 5, 6\}$.
c) For $p_X(x)$:
    *   $p_X(x) = \frac{1}{6} \ge 0$ for all $x \in \{1, 2, 3, 4, 5, 6\}$.
    *   $\sum_{x=1}^{6} p_X(x) = \sum_{x=1}^{6} \frac{1}{6} = 6 \times \frac{1}{6} = 1$.
    Thus, $p_X(x)$ is a valid pmf.

**Answer 2:**
a) Marginal pmf of $X$:
    *   $p_X(0) = P(X=0, Y=0) + P(X=0, Y=1) + P(X=0, Y=2) = 0.1 + 0.2 + 0.3 = 0.6$
    *   $p_X(1) = P(X=1, Y=0) + P(X=1, Y=1) + P(X=1, Y=2) = 0.1 + 0.1 + 0.2 = 0.4$
    So, $p_X(0) = 0.6$ and $p_X(1) = 0.4$.

b) Marginal pmf of $Y$:
    *   $p_Y(0) = P(X=0, Y=0) + P(X=1, Y=0) = 0.1 + 0.1 = 0.2$
    *   $p_Y(1) = P(X=0, Y=1) + P(X=1, Y=1) = 0.2 + 0.1 = 0.3$
    *   $p_Y(2) = P(X=0, Y=2) + P(X=1, Y=2) = 0.3 + 0.2 = 0.5$
    So, $p_Y(0) = 0.2$, $p_Y(1) = 0.3$, and $p_Y(2) = 0.5$.

c) The probability that $X=0$ is $p_X(0) = 0.6$.

**Answer 3:**
a) First, let's find the sum of probabilities in terms of $c$:
    $p_{XY}(1,1) = c(1)(1) = c$
    $p_{XY}(1,2) = c(1)(2) = 2c$
    $p_{XY}(1,3) = c(1)(3) = 3c$
    $p_{XY}(2,1) = c(2)(1) = 2c$
    $p_{XY}(2,2) = c(2)(2) = 4c$
    $p_{XY}(2,3) = c(2)(3) = 6c$
    Sum = $c + 2c + 3c + 2c + 4c + 6c = 18c$.
    Since the sum of all probabilities must be 1, $18c = 1$, so $c = \frac{1}{18}$.

b) Joint Probability Table:

    | $P(X=x, Y=y)$ | $Y=1$ | $Y=2$ | $Y=3$ | **Total $P(X=x)$** |
    | :------------ | :---- | :---- | :---- | :------------------- |
    | **$X=1$**     | $\frac{1}{18}$ | $\frac{2}{18}$ | $\frac{3}{18}$ | $\frac{6}{18} = \frac{1}{3}$ |
    | **$X=2$**     | $\frac{2}{18}$ | $\frac{4}{18}$ | $\frac{6}{18}$ | $\frac{12}{18} = \frac{2}{3}$ |
    | **Total $P(Y=y)$** | $\frac{3}{18} = \frac{1}{6}$ | $\frac{6}{18} = \frac{1}{3}$ | $\frac{9}{18} = \frac{1}{2}$ | **Sum = 1** |

c) Marginal pmf of $X$:
    *   $p_X(1) = P(X=1) = \frac{1}{18} + \frac{2}{18} + \frac{3}{18} = \frac{6}{18} = \frac{1}{3}$
    *   $p_X(2) = P(X=2) = \frac{2}{18} + \frac{4}{18} + \frac{6}{18} = \frac{12}{18} = \frac{2}{3}$

d) Marginal pmf of $Y$:
    *   $p_Y(1) = P(Y=1) = \frac{1}{18} + \frac{2}{18} = \frac{3}{18} = \frac{1}{6}$
    *   $p_Y(2) = P(Y=2) = \frac{2}{18} + \frac{4}{18} = \frac{6}{18} = \frac{1}{3}$
    *   $p_Y(3) = P(Y=3) = \frac{3}{18} + \frac{6}{18} = \frac{9}{18} = \frac{1}{2}$
