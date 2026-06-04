---
title: "Expected value of a function of two discrete variables."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4be"
status: "completed"
scrapedAt: "2026-05-23T17:50:40.263Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Expected Value of a Function of Two Discrete Random Variables

---

### 1. Introduction to Joint Probability Distributions

When dealing with electrical systems, it's common to encounter situations where two or more random phenomena occur simultaneously. To analyze these, we need to understand their joint behavior. This is where the concept of joint probability distributions comes into play.

**Key Concepts:**

*   **Jointly Distributed Random Variables:** Two or more random variables whose outcomes are related.
*   **Joint Probability Mass Function (Joint PMF) for Discrete Random Variables:** For two discrete random variables $X$ and $Y$, the joint PMF is denoted by $p_{X,Y}(x, y) = P(X=x, Y=y)$. This function gives the probability that $X$ takes the value $x$ AND $Y$ takes the value $y$ simultaneously.

**Properties of a Joint PMF (Devore, 9th ed., Chapter 3.5):**

1.  $p_{X,Y}(x, y) \ge 0$ for all possible pairs $(x, y)$.
2.  $\sum_{x} \sum_{y} p_{X,Y}(x, y) = 1$, where the summation is over all possible values of $X$ and $Y$.

**Marginal Probability Mass Functions (Marginal PMFs):**

From the joint PMF, we can obtain the individual probability distributions of each random variable.

*   The marginal PMF of $X$ is $p_X(x) = P(X=x) = \sum_{y} p_{X,Y}(x, y)$.
*   The marginal PMF of $Y$ is $p_Y(y) = P(Y=y) = \sum_{x} p_{X,Y}(x, y)$.

**Covariance and Correlation (Veerarajan, 3rd ed., Chapter 6.4 & 6.5):**

These concepts are crucial for understanding the relationship between two random variables.

*   **Covariance:** $Cov(X, Y) = E[(X - E[X])(Y - E[Y])] = E[XY] - E[X]E[Y]$. It measures the linear relationship between $X$ and $Y$.
*   **Correlation Coefficient:** $\rho(X, Y) = \frac{Cov(X, Y)}{\sigma_X \sigma_Y}$, where $\sigma_X$ and $\sigma_Y$ are the standard deviations of $X$ and $Y$, respectively. It normalizes covariance to a range between -1 and 1.

**Learning Outcome Alignment:**

*   **CO1 (K3):** Understanding joint PMFs is fundamental to illustrating the concept of discrete random variables and their combined behavior, which can be applied to electrical phenomena involving multiple random sources.

---

### 2. Expected Value of a Function of Two Discrete Random Variables

We often need to analyze the behavior of a system that depends on the combined outcome of two random variables. For example, the power dissipated in a circuit might be proportional to the square of the current, and the current might be a function of two random voltage sources.

**Definition:**

Let $X$ and $Y$ be two discrete random variables with joint PMF $p_{X,Y}(x, y)$. Let $g(X, Y)$ be a function of these two random variables. The expected value of $g(X, Y)$ is given by:

$E[g(X, Y)] = \sum_{x} \sum_{y} g(x, y) p_{X,Y}(x, y)$

The summation is over all possible values of $x$ and $y$.

**Key Property (The Law of the Unconscious Statistician - LOTUS for two variables):**

This theorem states that we don't need to find the PMF of $g(X, Y)$ to compute its expected value. We can directly use the joint PMF of $X$ and $Y$.

**Learning Outcome Alignment:**

*   **CO1 (K3):** This is the core of the topic, directly addressing the calculation of expected values for functions of two discrete random variables, enabling applications in analyzing random phenomena.

---

### 3. Examples and Applications

Let's illustrate the concept with examples relevant to electrical science.

**Example 1: Power Dissipation in a Resistor**

Consider a resistor $R$ with a fixed resistance of $10 \Omega$. Let the voltage across the resistor be a random variable $V$, and the current through the resistor be a random variable $I$. By Ohm's Law, $V = IR$.

Suppose we are interested in the power dissipated, which can be expressed in several ways: $P = VI$, $P = V^2/R$, or $P = I^2R$. Let's consider the power as $P = I^2R$, where $R=10 \Omega$.

Let $I$ be a discrete random variable representing the current, with the following PMF:
$p_I(0) = 0.3$
$p_I(1) = 0.5$
$p_I(2) = 0.2$

We want to find the expected power dissipated, $E[P] = E[I^2R]$. Since $R$ is a constant, $E[I^2R] = R \cdot E[I^2]$.

Using the formula for the expected value of a function $g(I) = I^2$:
$E[I^2] = \sum_{i} i^2 p_I(i)$
$E[I^2] = (0^2 \cdot 0.3) + (1^2 \cdot 0.5) + (2^2 \cdot 0.2)$
$E[I^2] = (0 \cdot 0.3) + (1 \cdot 0.5) + (4 \cdot 0.2)$
$E[I^2] = 0 + 0.5 + 0.8 = 1.3$

So, the expected power is:
$E[P] = R \cdot E[I^2] = 10 \Omega \cdot 1.3 \frac{A^2\Omega}{1} = 13 W$.

Now, let's consider a scenario with *two* discrete random variables.

**Example 2: Combined Power from Two Sources**

Suppose a device receives power from two independent random sources, $S_1$ and $S_2$. Let the power output from source $S_1$ be represented by the random variable $P_1$ and from source $S_2$ by $P_2$. Let $P_1$ and $P_2$ be discrete and independent, with the following PMFs:

**PMF for $P_1$:**
$p_{P_1}(0) = 0.4$
$p_{P_1}(1) = 0.6$

**PMF for $P_2$:**
$p_{P_2}(0) = 0.7$
$p_{P_2}(1) = 0.3$

The total power delivered to the device is $P_{total} = P_1 + P_2$. We want to find $E[P_{total}]$.

Since $P_1$ and $P_2$ are independent, their joint PMF is $p_{P_1, P_2}(p_1, p_2) = p_{P_1}(p_1) p_{P_2}(p_2)$.

The possible values for $(P_1, P_2)$ are (0,0), (0,1), (1,0), (1,1).

The joint PMF values are:
$p_{P_1, P_2}(0,0) = p_{P_1}(0)p_{P_2}(0) = 0.4 \times 0.7 = 0.28$
$p_{P_1, P_2}(0,1) = p_{P_1}(0)p_{P_2}(1) = 0.4 \times 0.3 = 0.12$
$p_{P_1, P_2}(1,0) = p_{P_1}(1)p_{P_2}(0) = 0.6 \times 0.7 = 0.42$
$p_{P_1, P_2}(1,1) = p_{P_1}(1)p_{P_2}(1) = 0.6 \times 0.3 = 0.18$

The possible values for $P_{total} = P_1 + P_2$ are $0+0=0$, $0+1=1$, $1+0=1$, $1+1=2$.

Let $g(P_1, P_2) = P_1 + P_2$. We can calculate $E[P_{total}]$ using the definition:
$E[P_{total}] = \sum_{p_1} \sum_{p_2} (p_1 + p_2) p_{P_1, P_2}(p_1, p_2)$

$E[P_{total}] = (0+0)p_{P_1, P_2}(0,0) + (0+1)p_{P_1, P_2}(0,1) + (1+0)p_{P_1, P_2}(1,0) + (1+1)p_{P_1, P_2}(1,1)$
$E[P_{total}] = (0)(0.28) + (1)(0.12) + (1)(0.42) + (2)(0.18)$
$E[P_{total}] = 0 + 0.12 + 0.42 + 0.36$
$E[P_{total}] = 0.90$

**Alternative (using linearity of expectation):**
If $P_1$ and $P_2$ are independent or not, $E[P_1 + P_2] = E[P_1] + E[P_2]$.
$E[P_1] = (0 \times 0.4) + (1 \times 0.6) = 0.6$
$E[P_2] = (0 \times 0.7) + (1 \times 0.3) = 0.3$
$E[P_{total}] = E[P_1] + E[P_2] = 0.6 + 0.3 = 0.90$.
This confirms the result and highlights a powerful property.

**Example 3: Error in Measurement**

Suppose a sensor measures a physical quantity $Q$. The measurement error is composed of two independent components, $E_1$ and $E_2$, which are discrete random variables. The measured value is $M = Q + E_1 + E_2$. If $Q$ is a known constant, we are interested in the expected value of the measurement error, $E[E_1 + E_2]$.

Let $E_1$ have PMF: $p_{E_1}(-1) = 0.5$, $p_{E_1}(1) = 0.5$.
Let $E_2$ have PMF: $p_{E_2}(-2) = 0.3$, $p_{E_2}(0) = 0.7$.

$E[E_1] = (-1 \times 0.5) + (1 \times 0.5) = 0$
$E[E_2] = (-2 \times 0.3) + (0 \times 0.7) = -0.6$

$E[\text{Measurement Error}] = E[E_1 + E_2] = E[E_1] + E[E_2] = 0 + (-0.6) = -0.6$.

**Reference Integration:**

*   **Devore, 9th ed., Chapter 3.5:** Discusses joint probability distributions, marginal distributions, and conditional distributions for discrete random variables. The concept of $E[g(X,Y)]$ is directly presented.
*   **Veerarajan, 3rd ed., Chapter 6.3:** Introduces joint distributions and expectation of functions of random variables. It also covers covariance and correlation which are related to the relationship between random variables.
*   **Papoulis & Pillai, 4th ed., Chapter 3:** Provides a rigorous treatment of joint distributions and expectations.
*   **Ross, 6th ed., Chapter 4:** Covers joint probability distributions and expected values, including the law of the unconscious statistician.

**Learning Outcome Alignment:**

*   **CO1 (K3):** The examples directly demonstrate how to apply the concepts to electrical phenomena like power dissipation and measurement errors, fulfilling the knowledge level of application.

---

### 4. Properties of Expected Values of Functions of Two Discrete Random Variables

Many useful properties extend from single random variables to functions of two random variables.

**1. Linearity of Expectation:**
For any constants $a$ and $b$, and functions $g_1(X, Y)$ and $g_2(X, Y)$:
$E[a \cdot g_1(X, Y) + b \cdot g_2(X, Y)] = a \cdot E[g_1(X, Y)] + b \cdot E[g_2(X, Y)]$

This property is particularly powerful. For instance, if $X$ and $Y$ are random variables, $E[X+Y] = E[X] + E[Y]$ and $E[cX] = cE[X]$ for a constant $c$, regardless of whether $X$ and $Y$ are independent.

**2. Expected Value of a Product of Independent Random Variables:**
If $X$ and $Y$ are independent, and $g_1$ and $g_2$ are functions such that $g_1(X)$ and $g_2(Y)$ are well-defined, then:
$E[g_1(X) g_2(Y)] = E[g_1(X)] E[g_2(Y)]$

**Proof Sketch (Devore, 9th ed., Section 3.5):**
If $X$ and $Y$ are independent, then $p_{X,Y}(x,y) = p_X(x)p_Y(y)$.
$E[g_1(X) g_2(Y)] = \sum_{x} \sum_{y} g_1(x) g_2(y) p_{X,Y}(x,y)$
$= \sum_{x} \sum_{y} g_1(x) g_2(y) p_X(x)p_Y(y)$
$= \sum_{x} g_1(x) p_X(x) \left( \sum_{y} g_2(y) p_Y(y) \right)$
$= E[g_1(X)] E[g_2(Y)]$

**3. Covariance of Two Random Variables:**
$Cov(X, Y) = E[XY] - E[X]E[Y]$
If $X$ and $Y$ are independent, then $E[XY] = E[X]E[Y]$, which implies $Cov(X, Y) = 0$.
**Important Note:** The converse is not true. If $Cov(X,Y)=0$, it does *not* necessarily mean $X$ and $Y$ are independent. However, if $X$ and $Y$ are independent, then $Cov(X,Y)=0$.

**Learning Outcome Alignment:**

*   **CO1 (K3):** These properties streamline calculations and deepen understanding of how expectations behave with functions of discrete random variables, enabling more complex analyses in electrical science.

---

### 5. Practice Questions and Exercises

**Question 1:**
Let $X$ and $Y$ be two discrete random variables with the following joint PMF:

|       | $Y=0$ | $Y=1$ | $Y=2$ |
| :---- | :---- | :---- | :---- |
| $X=0$ | 0.1   | 0.2   | 0.3   |
| $X=1$ | 0.1   | 0.1   | 0.2   |

Calculate $E[X+2Y]$ and $E[XY]$.

**Solution 1:**
First, let's list the joint PMF values:
$p_{X,Y}(0,0) = 0.1$
$p_{X,Y}(0,1) = 0.2$
$p_{X,Y}(0,2) = 0.3$
$p_{X,Y}(1,0) = 0.1$
$p_{X,Y}(1,1) = 0.1$
$p_{X,Y}(1,2) = 0.2$

To calculate $E[X+2Y]$:
$E[X+2Y] = \sum_{x} \sum_{y} (x+2y) p_{X,Y}(x,y)$
$E[X+2Y] = (0+2 \cdot 0)(0.1) + (0+2 \cdot 1)(0.2) + (0+2 \cdot 2)(0.3) + (1+2 \cdot 0)(0.1) + (1+2 \cdot 1)(0.1) + (1+2 \cdot 2)(0.2)$
$E[X+2Y] = (0)(0.1) + (2)(0.2) + (4)(0.3) + (1)(0.1) + (3)(0.1) + (5)(0.2)$
$E[X+2Y] = 0 + 0.4 + 1.2 + 0.1 + 0.3 + 1.0$
$E[X+2Y] = 3.0$

Alternatively, using linearity of expectation:
$E[X] = (0 \times (0.1+0.2+0.3)) + (1 \times (0.1+0.1+0.2)) = 0 \times 0.6 + 1 \times 0.4 = 0.4$
$E[Y] = (0 \times (0.1+0.1)) + (1 \times (0.2+0.1)) + (2 \times (0.3+0.2)) = 0 \times 0.2 + 1 \times 0.3 + 2 \times 0.5 = 0 + 0.3 + 1.0 = 1.3$
$E[X+2Y] = E[X] + 2E[Y] = 0.4 + 2(1.3) = 0.4 + 2.6 = 3.0$

To calculate $E[XY]$:
$E[XY] = \sum_{x} \sum_{y} (xy) p_{X,Y}(x,y)$
$E[XY] = (0 \cdot 0)(0.1) + (0 \cdot 1)(0.2) + (0 \cdot 2)(0.3) + (1 \cdot 0)(0.1) + (1 \cdot 1)(0.1) + (1 \cdot 2)(0.2)$
$E[XY] = 0 + 0 + 0 + 0 + (1)(0.1) + (2)(0.2)$
$E[XY] = 0.1 + 0.4 = 0.5$

**Question 2:**
Two components in an electrical circuit fail independently. The probability of component A failing in the first hour is $P(A=1) = 0.1$, and $P(A=0) = 0.9$ (where 1 means failed, 0 means not failed). Similarly for component B, $P(B=1) = 0.2$, $P(B=0) = 0.8$. Let $C$ be the cost function, where $C = 5A + 10B$. Find the expected cost $E[C]$.

**Solution 2:**
Since components A and B fail independently, $E[C] = E[5A + 10B] = 5E[A] + 10E[B]$ by linearity of expectation.

$E[A] = (1 \times 0.1) + (0 \times 0.9) = 0.1$
$E[B] = (1 \times 0.2) + (0 \times 0.8) = 0.2$

$E[C] = 5(0.1) + 10(0.2) = 0.5 + 2.0 = 2.5$.

**Learning Outcome Alignment:**

*   **CO1 (K3):** These questions require applying the learned formula for expected value of a function of two discrete variables, directly aligning with the application objective.

---

### 6. Important Points to Remember

*   The expected value of a function $g(X, Y)$ of two discrete random variables $X$ and $Y$ is calculated by summing $g(x, y)$ weighted by their joint probability mass function $p_{X,Y}(x, y)$ over all possible values of $x$ and $y$.
*   The formula is $E[g(X, Y)] = \sum_{x} \sum_{y} g(x, y) p_{X,Y}(x, y)$.
*   **Linearity of Expectation** is a crucial property: $E[aX + bY] = aE[X] + bE[Y]$, regardless of independence.
*   If $X$ and $Y$ are **independent**, then $E[g_1(X)g_2(Y)] = E[g_1(X)]E[g_2(Y)]$.
*   Understanding joint distributions is essential for analyzing the combined behavior of multiple random variables in electrical systems.

---

### 7. Course Outcome (CO) Alignment

*   **CO1 (Knowledge Level: K3):** This entire topic directly addresses CO1 by focusing on the concept, properties, and application of discrete random variables, specifically in the context of functions of two such variables. The examples and practice questions are designed to ensure the learner can *apply* these concepts to suitable random phenomena in electrical science.

---

This concludes Module 1, Topic: Expected Value of a Function of Two Discrete Random Variables. This foundational knowledge will be crucial for understanding more complex random processes and their applications in electrical science.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
