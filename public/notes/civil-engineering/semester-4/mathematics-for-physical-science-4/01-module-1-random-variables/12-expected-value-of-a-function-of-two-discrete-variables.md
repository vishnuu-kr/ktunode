---
title: "Expected value of a function of two discrete variables."
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 1: Random variables"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810926"
status: "completed"
scrapedAt: "2026-05-20T18:45:59.510Z"
---
# Mathematics for Physical Science - 4: Module 1: Random Variables

## Topic: Expected Value of a Function of Two Discrete Variables

This topic builds upon the understanding of single discrete random variables and introduces how to calculate the expected value when dealing with functions of two such variables. This is crucial for analyzing systems where multiple random phenomena interact.

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   **Define** the expected value of a function of two discrete random variables.
*   **Calculate** the expected value of a function of two discrete random variables using the joint probability mass function.
*   **Apply** the concept of expected value of a function of two discrete variables to solve problems in physical science.
*   **Understand** the relationship between the expected value of a function and the properties of the random variables involved.

---

### Key Concepts and Definitions

#### 1. Joint Probability Mass Function (PMF) of Two Discrete Random Variables

Let $X$ and $Y$ be two discrete random variables. Their joint probability mass function, denoted by $P(X=x, Y=y)$ or $p_{X,Y}(x,y)$, gives the probability that $X$ takes the value $x$ AND $Y$ takes the value $y$ simultaneously.

**Properties of a Joint PMF:**

*   $P(X=x, Y=y) \ge 0$ for all possible values of $x$ and $y$.
*   $\sum_{x} \sum_{y} P(X=x, Y=y) = 1$, where the summation is over all possible values of $X$ and $Y$.

#### 2. Function of Two Discrete Random Variables

A function of two discrete random variables, say $g(X,Y)$, is a new random variable whose value is determined by the values of $X$ and $Y$. For example, $g(X,Y) = X+Y$, $g(X,Y) = X^2Y$, or $g(X,Y) = e^{X-Y}$.

#### 3. Expected Value of a Function of Two Discrete Random Variables

Let $Z = g(X,Y)$ be a new random variable defined as a function of two discrete random variables $X$ and $Y$. The expected value of $Z$, denoted by $E[Z]$ or $E[g(X,Y)]$, is calculated as the sum of each possible value of $g(X,Y)$ multiplied by the probability of that value occurring.

The formula for the expected value of a function of two discrete random variables is:

$E[g(X,Y)] = \sum_{x} \sum_{y} g(x,y) P(X=x, Y=y)$

where the summations are over all possible values of $x$ and $y$ for the random variables $X$ and $Y$, respectively.

**Important Note:** This formula is a direct extension of the expected value for a single discrete random variable. It states that to find the expected value of a function of random variables, you average the function's values weighted by their joint probabilities.

---

### Examples

**Example 1: Sum of Two Dice Rolls**

Let $X$ be the outcome of the first die roll and $Y$ be the outcome of the second die roll. Both $X$ and $Y$ are discrete random variables with possible values $\{1, 2, 3, 4, 5, 6\}$. Assume the dice are fair and independent. The joint PMF is $P(X=x, Y=y) = P(X=x)P(Y=y) = \frac{1}{6} \times \frac{1}{6} = \frac{1}{36}$ for all $x, y \in \{1, 2, 3, 4, 5, 6\}$.

Let's find the expected value of the sum of the two dice rolls, i.e., $g(X,Y) = X+Y$.

Using the formula:
$E[X+Y] = \sum_{x=1}^{6} \sum_{y=1}^{6} (x+y) P(X=x, Y=y)$
$E[X+Y] = \sum_{x=1}^{6} \sum_{y=1}^{6} (x+y) \frac{1}{36}$

We can separate the summations:
$E[X+Y] = \frac{1}{36} \sum_{x=1}^{6} \sum_{y=1}^{6} (x+y)$
$E[X+Y] = \frac{1}{36} \left( \sum_{x=1}^{6} \sum_{y=1}^{6} x + \sum_{x=1}^{6} \sum_{y=1}^{6} y \right)$

For the first part: $\sum_{x=1}^{6} \sum_{y=1}^{6} x = \sum_{x=1}^{6} (x \times 6) = 6 \sum_{x=1}^{6} x = 6 \times \frac{6(7)}{2} = 6 \times 21 = 126$.
For the second part: $\sum_{x=1}^{6} \sum_{y=1}^{6} y = \sum_{y=1}^{6} (y \times 6) = 6 \sum_{y=1}^{6} y = 6 \times \frac{6(7)}{2} = 6 \times 21 = 126$.

So, $E[X+Y] = \frac{1}{36} (126 + 126) = \frac{252}{36} = 7$.

**Alternatively, using linearity of expectation (if independence is assumed):**
$E[X+Y] = E[X] + E[Y]$
For a single die roll, $E[X] = \sum_{x=1}^{6} x \frac{1}{6} = \frac{1+2+3+4+5+6}{6} = \frac{21}{6} = 3.5$.
Similarly, $E[Y] = 3.5$.
Therefore, $E[X+Y] = 3.5 + 3.5 = 7$.

**Example 2: Product of Two Random Variables**

Let $X$ and $Y$ be two discrete random variables with the following joint PMF:

| $x$ | $y$ | $P(X=x, Y=y)$ |
| :-- | :-- | :------------ |
| 0   | 0   | 0.1           |
| 0   | 1   | 0.2           |
| 1   | 0   | 0.3           |
| 1   | 1   | 0.4           |

Let's find the expected value of the product $g(X,Y) = XY$.

Using the formula:
$E[XY] = \sum_{x} \sum_{y} xy P(X=x, Y=y)$
$E[XY] = (0 \times 0 \times 0.1) + (0 \times 1 \times 0.2) + (1 \times 0 \times 0.3) + (1 \times 1 \times 0.4)$
$E[XY] = 0 + 0 + 0 + 0.4$
$E[XY] = 0.4$

**If $X$ and $Y$ were independent:**
The joint PMF would be $P(X=x, Y=y) = P(X=x)P(Y=y)$.
Marginal PMF for X:
$P(X=0) = P(X=0, Y=0) + P(X=0, Y=1) = 0.1 + 0.2 = 0.3$
$P(X=1) = P(X=1, Y=0) + P(X=1, Y=1) = 0.3 + 0.4 = 0.7$
Marginal PMF for Y:
$P(Y=0) = P(X=0, Y=0) + P(X=1, Y=0) = 0.1 + 0.3 = 0.4$
$P(Y=1) = P(X=0, Y=1) + P(X=1, Y=1) = 0.2 + 0.4 = 0.6$

Check for independence:
$P(X=0, Y=0) = 0.1$
$P(X=0)P(Y=0) = 0.3 \times 0.4 = 0.12$
Since $0.1 \ne 0.12$, $X$ and $Y$ are not independent in this example.

**Example 3: Function involving powers and constants**

Let $X$ and $Y$ be as in Example 2. Calculate $E[X^2 + 2Y]$.
Here $g(X,Y) = X^2 + 2Y$.

$E[X^2 + 2Y] = \sum_{x} \sum_{y} (x^2 + 2y) P(X=x, Y=y)$
$E[X^2 + 2Y] = (0^2 + 2 \times 0) \times 0.1 + (0^2 + 2 \times 1) \times 0.2 + (1^2 + 2 \times 0) \times 0.3 + (1^2 + 2 \times 1) \times 0.4$
$E[X^2 + 2Y] = (0) \times 0.1 + (2) \times 0.2 + (1) \times 0.3 + (3) \times 0.4$
$E[X^2 + 2Y] = 0 + 0.4 + 0.3 + 1.2$
$E[X^2 + 2Y] = 1.9$

**Using Linearity of Expectation (if applicable to components)**
$E[X^2 + 2Y] = E[X^2] + E[2Y] = E[X^2] + 2E[Y]$

First, calculate $E[X^2]$:
$E[X^2] = \sum_{x} x^2 P(X=x)$
$E[X^2] = (0^2 \times P(X=0)) + (1^2 \times P(X=1))$
$E[X^2] = (0 \times 0.3) + (1 \times 0.7) = 0.7$

Next, calculate $E[Y]$:
$E[Y] = \sum_{y} y P(Y=y)$
$E[Y] = (0 \times P(Y=0)) + (1 \times P(Y=1))$
$E[Y] = (0 \times 0.4) + (1 \times 0.6) = 0.6$

So, $E[X^2 + 2Y] = E[X^2] + 2E[Y] = 0.7 + 2(0.6) = 0.7 + 1.2 = 1.9$.

---

### Applications in Physical Science

*   **Statistical Mechanics:** Calculating average energy of a system composed of multiple particles, where the energy depends on the states of individual particles (e.g., $E = \sum E_i$, where $E_i$ might be related to random variables representing particle states).
*   **Signal Processing:** Analyzing the variance or mean of a signal that is a combination of multiple noisy sources. For example, if $S$ is the desired signal and $N_1, N_2$ are independent noise sources, the received signal might be $R = S + N_1 + N_2$. Calculating $E[R^2]$ involves $E[(S+N_1+N_2)^2]$, which expands to terms involving $E[S^2]$, $E[N_1^2]$, $E[N_2^2]$, $E[SN_1]$, etc.
*   **Quantum Mechanics:** Calculating expectation values of operators that depend on multiple quantum states or observables.
*   **Error Analysis:** If measurements $M_1$ and $M_2$ have errors represented by random variables $E_1$ and $E_2$, and a derived quantity is $Q = f(M_1, M_2)$, then the expected value of $Q$ and its variance can be calculated using the expected value of $f(M_1+E_1, M_2+E_2)$.

---

### Practice Questions

1.  Let $X$ and $Y$ be two discrete random variables with the following joint probability mass function:

    | $x$ | $y$ | $P(X=x, Y=y)$ |
    | :-- | :-- | :------------ |
    | 0   | 0   | 0.1           |
    | 0   | 1   | 0.3           |
    | 1   | 0   | 0.2           |
    | 1   | 1   | 0.4           |

    Calculate $E[X+Y^2]$.

2.  Two independent random variables $X$ and $Y$ have the following probability distributions:
    *   $P(X=0) = 0.4$, $P(X=1) = 0.6$
    *   $P(Y=0) = 0.7$, $P(Y=1) = 0.3$

    Calculate $E[XY]$.

3.  Consider a system where the state is described by two random variables $A$ and $B$. The joint probability distribution is given by $P(A=a, B=b) = c \cdot a \cdot b$ for $a \in \{1, 2\}$ and $b \in \{1, 2\}$, and $P(A=a, B=b) = 0$ otherwise.
    (a) Find the value of the constant $c$.
    (b) Calculate $E[A+B]$.

---

### Answers to Practice Questions

1.  **Calculating $E[X+Y^2]$:**
    $E[X+Y^2] = \sum_{x} \sum_{y} (x+y^2) P(X=x, Y=y)$
    $E[X+Y^2] = (0+0^2)(0.1) + (0+1^2)(0.3) + (1+0^2)(0.2) + (1+1^2)(0.4)$
    $E[X+Y^2] = (0)(0.1) + (1)(0.3) + (1)(0.2) + (2)(0.4)$
    $E[X+Y^2] = 0 + 0.3 + 0.2 + 0.8 = 1.3$

    **Using linearity:** $E[X+Y^2] = E[X] + E[Y^2]$
    Marginal for X: $P(X=0) = 0.1+0.3 = 0.4$, $P(X=1) = 0.2+0.4 = 0.6$
    $E[X] = (0 \times 0.4) + (1 \times 0.6) = 0.6$
    Marginal for Y: $P(Y=0) = 0.1+0.2 = 0.3$, $P(Y=1) = 0.3+0.4 = 0.7$
    $E[Y] = (0 \times 0.3) + (1 \times 0.7) = 0.7$
    $E[Y^2] = (0^2 \times 0.3) + (1^2 \times 0.7) = 0 + 0.7 = 0.7$
    $E[X+Y^2] = E[X] + E[Y^2] = 0.6 + 0.7 = 1.3$

2.  **Calculating $E[XY]$ for independent variables:**
    Since $X$ and $Y$ are independent, $P(X=x, Y=y) = P(X=x)P(Y=y)$.
    $E[XY] = E[X]E[Y]$ (for independent variables)
    $E[X] = (0 \times 0.4) + (1 \times 0.6) = 0.6$
    $E[Y] = (0 \times 0.7) + (1 \times 0.3) = 0.3$
    $E[XY] = 0.6 \times 0.3 = 0.18$

3.  **(a) Finding the constant $c$:**
    The sum of all probabilities must be 1:
    $\sum_{a} \sum_{b} P(A=a, B=b) = 1$
    $P(A=1, B=1) = c \cdot 1 \cdot 1 = c$
    $P(A=1, B=2) = c \cdot 1 \cdot 2 = 2c$
    $P(A=2, B=1) = c \cdot 2 \cdot 1 = 2c$
    $P(A=2, B=2) = c \cdot 2 \cdot 2 = 4c$
    Sum of probabilities = $c + 2c + 2c + 4c = 9c$
    $9c = 1 \implies c = \frac{1}{9}$

    **(b) Calculating $E[A+B]$:**
    $E[A+B] = E[A] + E[B]$ (by linearity of expectation)
    Marginal for A:
    $P(A=1) = P(A=1, B=1) + P(A=1, B=2) = \frac{1}{9} + \frac{2}{9} = \frac{3}{9}$
    $P(A=2) = P(A=2, B=1) + P(A=2, B=2) = \frac{2}{9} + \frac{4}{9} = \frac{6}{9}$
    $E[A] = (1 \times \frac{3}{9}) + (2 \times \frac{6}{9}) = \frac{3}{9} + \frac{12}{9} = \frac{15}{9} = \frac{5}{3}$

    Marginal for B:
    $P(B=1) = P(A=1, B=1) + P(A=2, B=1) = \frac{1}{9} + \frac{2}{9} = \frac{3}{9}$
    $P(B=2) = P(A=1, B=2) + P(A=2, B=2) = \frac{2}{9} + \frac{4}{9} = \frac{6}{9}$
    $E[B] = (1 \times \frac{3}{9}) + (2 \times \frac{6}{9}) = \frac{3}{9} + \frac{12}{9} = \frac{15}{9} = \frac{5}{3}$

    $E[A+B] = E[A] + E[B] = \frac{5}{3} + \frac{5}{3} = \frac{10}{3}$

---

### Important Points to Remember

*   The expected value of a function $g(X,Y)$ is found by summing $g(x,y)$ multiplied by its **joint probability** $P(X=x, Y=y)$ over all possible values of $x$ and $y$.
*   **Linearity of Expectation** ($E[aX + bY + c] = aE[X] + bE[Y] + c$) holds regardless of whether $X$ and $Y$ are independent.
*   For **independent** random variables, the expected value of a product is the product of their expected values: $E[XY] = E[X]E[Y]$.
*   If $X$ and $Y$ are **not independent**, $E[XY]$ is **not necessarily** equal to $E[X]E[Y]$. You must use the joint PMF for calculation.
*   The formula for $E[g(X,Y)]$ directly applies the definition of expectation to the new random variable $Z = g(X,Y)$.

---
