---
title: "Marginal pmf"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 1: Random variables"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35d99"
status: "completed"
scrapedAt: "2026-05-23T16:16:50.608Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Marginal Probability Mass Function (pmf)

---

### 1. Introduction to Joint and Marginal Distributions

In electrical science, we often encounter situations where the behavior of a system depends on multiple random factors. For instance, the output voltage of a circuit might depend on both the input voltage fluctuations and the noise from a sensor. To analyze such scenarios, we need to understand **joint probability distributions**, which describe the probabilities of multiple random variables occurring simultaneously. The **marginal probability mass function (pmf)** is a fundamental concept derived from these joint distributions, allowing us to focus on the behavior of a single random variable independently.

This topic builds upon the foundational understanding of discrete random variables covered in earlier stages. It directly relates to **CO1: Understand the concept, properties and important models of discrete random variables and to apply in suitable random phenomena.** Specifically, it extends the concept of a single variable's pmf to the context of multiple variables.

---

### 2. Joint Probability Mass Function (pmf)

Before defining marginal pmf, it's crucial to understand the joint pmf for discrete random variables.

**Definition:**
For two discrete random variables, $X$ and $Y$, their **joint probability mass function (pmf)**, denoted by $p_{X,Y}(x, y)$, is defined as:
$p_{X,Y}(x, y) = P(X = x \text{ and } Y = y)$

This function gives the probability that random variable $X$ takes on the value $x$ AND random variable $Y$ takes on the value $y$ simultaneously.

**Properties of Joint pmf:**
*   $p_{X,Y}(x, y) \ge 0$ for all possible values of $x$ and $y$.
*   $\sum_{x} \sum_{y} p_{X,Y}(x, y) = 1$, where the summation is over all possible values of $X$ and $Y$.

**Reference:**
*   **Devore J. L. (9th ed.):** Chapter 4 introduces joint probability distributions for discrete and continuous random variables. Section 4.1 specifically covers joint probability mass functions.
*   **Veerarajan T. (3rd ed.):** Chapter 3 discusses joint probability distributions and their properties, including the joint pmf.

**Example:**
Consider a scenario where we flip two fair coins. Let $X$ be the number of heads in the first coin flip (0 or 1) and $Y$ be the number of heads in the second coin flip (0 or 1). The possible outcomes are (0,0), (0,1), (1,0), (1,1).

The joint pmf can be represented in a table:

| $X \setminus Y$ | 0   | 1   | $p_X(x)$ |
| :------------- | :-- | :-- | :------- |
| 0              | 0.25 | 0.25 | 0.50     |
| 1              | 0.25 | 0.25 | 0.50     |
| $p_Y(y)$       | 0.50 | 0.50 | 1.00     |

Here, $p_{X,Y}(0, 0) = P(X=0, Y=0) = 0.25$ (Tail, Tail).
$p_{X,Y}(1, 0) = P(X=1, Y=0) = 0.25$ (Head, Tail).
$p_{X,Y}(0, 1) = P(X=0, Y=1) = 0.25$ (Tail, Head).
$p_{X,Y}(1, 1) = P(X=1, Y=1) = 0.25$ (Head, Head).

The sum of all joint probabilities is $0.25 + 0.25 + 0.25 + 0.25 = 1$.

---

### 3. Marginal Probability Mass Function (pmf)

The marginal pmf of a single random variable, say $X$, from a joint distribution describes the probability distribution of $X$ without considering the values of other random variables.

**Definition:**
Given the joint pmf $p_{X,Y}(x, y)$ of two discrete random variables $X$ and $Y$, the **marginal probability mass function** of $X$, denoted by $p_X(x)$, is obtained by summing the joint pmf over all possible values of $Y$:
$p_X(x) = \sum_{y} p_{X,Y}(x, y)$

Similarly, the **marginal probability mass function** of $Y$, denoted by $p_Y(y)$, is obtained by summing the joint pmf over all possible values of $X$:
$p_Y(y) = \sum_{x} p_{X,Y}(x, y)$

**Key Concept:** To find the marginal pmf of one variable, we "marginalize out" the other variable(s) by summing over all their possible values.

**Reference:**
*   **Devore J. L. (9th ed.):** Section 4.1.2 is dedicated to marginal probability distributions.
*   **Veerarajan T. (3rd ed.):** Section 3.3 discusses marginal probability distributions.
*   **Papoulis & Pillai (4th ed.):** Chapter 4 covers joint distributions and marginal distributions for multiple random variables.
*   **Ross S. M. (6th ed.):** Chapter 4 on joint distributions includes sections on marginal distributions.

**Example (Continuing from the coin flip example):**

| $X \setminus Y$ | 0   | 1   | $p_X(x)$ |
| :------------- | :-- | :-- | :------- |
| 0              | 0.25 | 0.25 | 0.50     |
| 1              | 0.25 | 0.25 | 0.50     |
| $p_Y(y)$       | 0.50 | 0.50 | 1.00     |

**Marginal pmf of X:**
*   For $x=0$: $p_X(0) = \sum_{y} p_{X,Y}(0, y) = p_{X,Y}(0, 0) + p_{X,Y}(0, 1) = 0.25 + 0.25 = 0.50$.
*   For $x=1$: $p_X(1) = \sum_{y} p_{X,Y}(1, y) = p_{X,Y}(1, 0) + p_{X,Y}(1, 1) = 0.25 + 0.25 = 0.50$.

This matches the values in the last column of the table. The marginal pmf of $X$ is $p_X(0) = 0.5$ and $p_X(1) = 0.5$, which is expected for a single fair coin flip.

**Marginal pmf of Y:**
*   For $y=0$: $p_Y(0) = \sum_{x} p_{X,Y}(x, 0) = p_{X,Y}(0, 0) + p_{X,Y}(1, 0) = 0.25 + 0.25 = 0.50$.
*   For $y=1$: $p_Y(1) = \sum_{x} p_{X,Y}(x, 1) = p_{X,Y}(0, 1) + p_{X,Y}(1, 1) = 0.25 + 0.25 = 0.50$.

This matches the values in the last row of the table. The marginal pmf of $Y$ is $p_Y(0) = 0.5$ and $p_Y(1) = 0.5$, again as expected.

---

### 4. Applications in Electrical Science

Understanding marginal pmf is crucial for analyzing systems with multiple sources of randomness.

*   **Signal Processing:** If $X$ represents the amplitude of a signal and $Y$ represents the noise level, the marginal pmf of $X$ tells us about the probability distribution of the signal amplitude alone, irrespective of the noise.
*   **Reliability Engineering:** If $X$ is the lifespan of component A and $Y$ is the lifespan of component B in a system, the marginal pmf of $X$ gives the reliability characteristics of component A independently.
*   **Communication Systems:** If $X$ is the number of packets transmitted and $Y$ is the number of packets received successfully, the marginal pmf of $X$ helps in understanding the transmission load, while the marginal pmf of $Y$ indicates the reception performance.

This topic directly supports **CO1** by providing a tool to analyze individual random phenomena within a multivariate context.

---

### 5. Generalization to More Than Two Random Variables

The concept of marginal pmf extends to scenarios with three or more discrete random variables.

**Definition:**
Given the joint pmf $p_{X,Y,Z}(x, y, z)$ of three discrete random variables $X$, $Y$, and $Z$, the marginal pmf of $X$ is:
$p_X(x) = \sum_{y} \sum_{z} p_{X,Y,Z}(x, y, z)$

This involves summing over all possible values of the other variables ($Y$ and $Z$).

**Reference:**
*   **Papoulis & Pillai (4th ed.):** Chapter 4 provides a more general treatment of multivariate distributions.
*   **Ross S. M. (6th ed.):** Chapter 4 also extends to more than two random variables.

**Example:**
Suppose we have three independent Bernoulli trials, and $X$, $Y$, $Z$ are indicator variables for success in each trial (1 for success, 0 for failure). If the probability of success for each trial is $p$, then $p_{X,Y,Z}(x, y, z) = p^x (1-p)^{1-x} p^y (1-p)^{1-y} p^z (1-p)^{1-z}$ for $x, y, z \in \{0, 1\}$.

To find the marginal pmf of $X$:
$p_X(x) = \sum_{y \in \{0,1\}} \sum_{z \in \{0,1\}} p_{X,Y,Z}(x, y, z)$
$p_X(x) = \sum_{y=0}^1 \sum_{z=0}^1 p^x (1-p)^{1-x} p^y (1-p)^{1-y} p^z (1-p)^{1-z}$
$p_X(x) = p^x (1-p)^{1-x} \left( \sum_{y=0}^1 p^y (1-p)^{1-y} \right) \left( \sum_{z=0}^1 p^z (1-p)^{1-z} \right)$

Since each sum $\sum_{v=0}^1 p^v (1-p)^{1-v}$ is the marginal pmf of a single Bernoulli variable (which is $p$ for $v=1$ and $1-p$ for $v=0$, summing to 1), we have:
$p_X(x) = p^x (1-p)^{1-x} \times 1 \times 1 = p^x (1-p)^{1-x}$

This shows that the marginal pmf of $X$ is indeed the Bernoulli distribution with parameter $p$, as expected due to independence.

---

### 6. Important Points to Remember

*   **Marginal pmf focuses on a single variable:** It's derived from a joint distribution but isolates the behavior of one random variable.
*   **Summation is key:** To get the marginal pmf of $X$, you sum the joint pmf over all possible values of $Y$.
*   **Independence simplifies:** If $X$ and $Y$ are independent, then $p_{X,Y}(x, y) = p_X(x) p_Y(y)$, and the marginal pmfs are simply the individual pmfs.
*   **Properties of pmf must hold:** The marginal pmf must also be non-negative and sum to 1.
*   **Generalization:** The concept extends to any number of discrete random variables.

---

### 7. Practice Questions

1.  **Question:** Two dice are rolled, and their outcomes are recorded. Let $X$ be the number on the first die and $Y$ be the number on the second die. The joint pmf is given by $p_{X,Y}(x, y) = \frac{1}{36}$ for $x, y \in \{1, 2, 3, 4, 5, 6\}$.
    *   a) Find the marginal pmf of $X$.
    *   b) Find the marginal pmf of $Y$.
    *   c) Are $X$ and $Y$ independent? Justify your answer.

2.  **Question:** Consider a system with two components. Let $X$ be the number of failures in the first component in a day (0, 1, or 2) and $Y$ be the number of failures in the second component in a day (0 or 1). Their joint pmf is given by the following table:

    | $X \setminus Y$ | 0    | 1    | $p_X(x)$ |
    | :------------- | :--- | :--- | :------- |
    | 0              | 0.30 | 0.10 | 0.40     |
    | 1              | 0.20 | 0.15 | 0.35     |
    | 2              | 0.15 | 0.10 | 0.25     |
    | $p_Y(y)$       | 0.65 | 0.35 | 1.00     |

    *   a) Calculate the marginal pmf of $X$.
    *   b) Calculate the marginal pmf of $Y$.
    *   c) Are $X$ and $Y$ independent? Explain.

3.  **Question:** Let $X$ and $Y$ be discrete random variables with joint pmf $p_{X,Y}(x, y) = c \cdot (x+y)$ for $x, y \in \{1, 2\}$. Find the value of $c$ and then determine the marginal pmfs of $X$ and $Y$.

---

### 8. Answers to Practice Questions

1.  **Answer:**
    *   a) The marginal pmf of $X$: $p_X(x) = \sum_{y=1}^6 p_{X,Y}(x, y) = \sum_{y=1}^6 \frac{1}{36} = 6 \times \frac{1}{36} = \frac{1}{6}$ for $x \in \{1, 2, 3, 4, 5, 6\}$. This is a discrete uniform distribution.
    *   b) The marginal pmf of $Y$: $p_Y(y) = \sum_{x=1}^6 p_{X,Y}(x, y) = \sum_{x=1}^6 \frac{1}{36} = 6 \times \frac{1}{36} = \frac{1}{6}$ for $y \in \{1, 2, 3, 4, 5, 6\}$. This is also a discrete uniform distribution.
    *   c) Yes, $X$ and $Y$ are independent. We can verify this by checking if $p_{X,Y}(x, y) = p_X(x) p_Y(y)$ for all $x, y$. Indeed, $\frac{1}{36} = \frac{1}{6} \times \frac{1}{6}$.

2.  **Answer:**
    *   a) The marginal pmf of $X$ is given in the last column of the table:
        $p_X(0) = 0.40$
        $p_X(1) = 0.35$
        $p_X(2) = 0.25$
    *   b) The marginal pmf of $Y$ is given in the last row of the table:
        $p_Y(0) = 0.65$
        $p_Y(1) = 0.35$
    *   c) To check for independence, we need to see if $p_{X,Y}(x, y) = p_X(x) p_Y(y)$ for all pairs $(x, y)$. Let's check one pair, e.g., $(x=0, y=0)$:
        $p_{X,Y}(0, 0) = 0.30$
        $p_X(0) \times p_Y(0) = 0.40 \times 0.65 = 0.26$
        Since $0.30 \neq 0.26$, $X$ and $Y$ are **not independent**.

3.  **Answer:**
    The possible values for $(X, Y)$ are (1,1), (1,2), (2,1), (2,2).
    The joint pmf is $p_{X,Y}(x, y) = c(x+y)$.
    *   $p_{X,Y}(1,1) = c(1+1) = 2c$
    *   $p_{X,Y}(1,2) = c(1+2) = 3c$
    *   $p_{X,Y}(2,1) = c(2+1) = 3c$
    *   $p_{X,Y}(2,2) = c(2+2) = 4c$

    The sum of all probabilities must be 1:
    $2c + 3c + 3c + 4c = 1$
    $12c = 1 \implies c = \frac{1}{12}$

    So, the joint pmf is:
    *   $p_{X,Y}(1,1) = 2/12$
    *   $p_{X,Y}(1,2) = 3/12$
    *   $p_{X,Y}(2,1) = 3/12$
    *   $p_{X,Y}(2,2) = 4/12$

    **Marginal pmf of X:**
    *   $p_X(1) = p_{X,Y}(1,1) + p_{X,Y}(1,2) = \frac{2}{12} + \frac{3}{12} = \frac{5}{12}$
    *   $p_X(2) = p_{X,Y}(2,1) + p_{X,Y}(2,2) = \frac{3}{12} + \frac{4}{12} = \frac{7}{12}$
    (Check: $5/12 + 7/12 = 12/12 = 1$)

    **Marginal pmf of Y:**
    *   $p_Y(1) = p_{X,Y}(1,1) + p_{X,Y}(2,1) = \frac{2}{12} + \frac{3}{12} = \frac{5}{12}$
    *   $p_Y(2) = p_{X,Y}(1,2) + p_{X,Y}(2,2) = \frac{3}{12} + \frac{4}{12} = \frac{7}{12}$
    (Check: $5/12 + 7/12 = 12/12 = 1$)

---
