---
title: "Expected value of a function of two discrete variables."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 1: Random variables"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35d9b"
status: "completed"
scrapedAt: "2026-05-23T16:16:52.105Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Expected Value of a Function of Two Discrete Variables

---

### **Learning Outcomes Addressed:**

*   Understand the concept of expected value for functions of multiple discrete random variables.
*   Apply the linearity of expectation to functions involving two discrete random variables.
*   Calculate the expected value of a function of two discrete random variables using their joint probability distribution.

---

### **Course Outcomes Alignment:**

*   **CO1: Understand the concept, properties and important models of discrete random variables and to apply in suitable random phenomena.**
    *   This topic directly addresses the understanding and application of concepts related to discrete random variables, specifically when they are combined in a function. (Knowledge Level: K3)

---

### **1. Introduction to Functions of Two Discrete Random Variables**

In electrical science, we often encounter situations where two or more random phenomena are occurring simultaneously and their outcomes influence each other. For instance, the output voltage of an amplifier might depend on both the input signal level and the ambient temperature. In such cases, we are dealing with multiple random variables.

When we have two discrete random variables, say $X$ and $Y$, we can define a new random variable $Z$ that is a function of $X$ and $Y$. This function can be a simple sum, product, difference, or a more complex expression. Mathematically, we can represent this as:

$Z = g(X, Y)$

where $g$ is a function that maps the possible values of $(X, Y)$ to a single value of $Z$.

**Key Concept:** The joint probability distribution of $X$ and $Y$, denoted as $P(X=x, Y=y)$, is crucial for understanding the behavior of any function involving both $X$ and $Y$.

---

### **2. Defining the Expected Value of a Function of Two Discrete Variables**

The expected value of a random variable represents its average value over many trials. For a function of two discrete random variables, $Z = g(X, Y)$, its expected value, $E[Z]$ or $E[g(X, Y)]$, is calculated by summing the product of each possible value of $Z$ and its corresponding probability.

To compute $E[g(X, Y)]$, we first need to determine the possible values of $g(X, Y)$ and their probabilities. However, a more direct approach exists using the joint probability mass function (PMF) of $X$ and $Y$, denoted by $p_{X,Y}(x, y) = P(X=x, Y=y)$.

The expected value of $g(X, Y)$ is given by the following formula:

$$E[g(X, Y)] = \sum_{x} \sum_{y} g(x, y) p_{X,Y}(x, y)$$

where the summation is taken over all possible pairs of values $(x, y)$ for which $p_{X,Y}(x, y) > 0$.

**Explanation of the Formula:**

*   **$g(x, y)$:** Represents the value of the function $g$ when $X$ takes the value $x$ and $Y$ takes the value $y$.
*   **$p_{X,Y}(x, y)$:** Represents the probability that $X$ takes the value $x$ AND $Y$ takes the value $y$ simultaneously.
*   **$\sum_{x} \sum_{y}$:** Indicates that we sum over all possible combinations of $x$ and $y$ that $X$ and $Y$ can take.

**Intuition:** This formula essentially calculates a weighted average of the function's values, where the weights are the probabilities of the corresponding $(X, Y)$ pairs. It's an extension of the single-variable expected value formula $E[X] = \sum x p_X(x)$.

**Textbook Reference:** This concept is a fundamental extension of expected values and is covered in standard probability texts. For instance, Devore (2016) and Veerarajan (2008) would discuss this in their chapters on joint distributions and expectations. Specifically, Devore's Section 4.4 (Expectation of a Function of a Random Variable) can be extended to multiple variables.

---

### **3. Properties and Applications**

The most significant property when dealing with expectations of functions of random variables is the **Linearity of Expectation**. This property holds regardless of whether the random variables are independent.

**Linearity of Expectation:**

For any constants $a$ and $b$, and any two discrete random variables $X$ and $Y$, and any function $g(X,Y)$:

*   $E[aX + bY] = aE[X] + bE[Y]$
*   $E[g(X) + h(Y)] = E[g(X)] + E[h(Y)]$ (even if $X$ and $Y$ are dependent)

**Derivation for Linearity of Expectation (Sum):**

Let $Z = X + Y$. Then $g(X, Y) = X + Y$.
$E[X+Y] = \sum_{x} \sum_{y} (x+y) p_{X,Y}(x, y)$
$E[X+Y] = \sum_{x} \sum_{y} x p_{X,Y}(x, y) + \sum_{x} \sum_{y} y p_{X,Y}(x, y)$

We know that $E[X] = \sum_{x} \sum_{y} x p_{X,Y}(x, y)$ and $E[Y] = \sum_{x} \sum_{y} y p_{X,Y}(x, y)$.
Therefore, $E[X+Y] = E[X] + E[Y]$.

This property is immensely useful in simplifying calculations, especially in electrical engineering where we often sum up contributions from multiple sources or components.

**Example Applications in Electrical Science:**

1.  **Signal Processing:** If $S(t)$ is a random signal and $N(t)$ is additive noise, both random processes, then the total signal is $X(t) = S(t) + N(t)$. The expected value of the total signal's power could involve $E[X(t)^2] = E[(S(t) + N(t))^2] = E[S(t)^2 + 2S(t)N(t) + N(t)^2] = E[S(t)^2] + 2E[S(t)N(t)] + E[N(t)^2]$. If $S(t)$ and $N(t)$ are uncorrelated, $E[S(t)N(t)] = E[S(t)]E[N(t)]$.
2.  **System Reliability:** Consider a system composed of two independent components with failure probabilities $P(C_1 \text{ fails})$ and $P(C_2 \text{ fails})$. If we are interested in the expected number of failed components, and define $X_1$ as an indicator variable for component 1 failure ($1$ if failed, $0$ otherwise) and $X_2$ for component 2, then $E[X_1] = P(C_1 \text{ fails})$ and $E[X_2] = P(C_2 \text{ fails})$. The total number of failures is $N = X_1 + X_2$. By linearity of expectation, $E[N] = E[X_1] + E[X_2]$, regardless of independence.
3.  **Circuit Analysis:** In a simple series circuit with random resistances $R_1$ and $R_2$, the total resistance is $R_{total} = R_1 + R_2$. The expected total resistance is $E[R_{total}] = E[R_1 + R_2] = E[R_1] + E[R_2]$.

**Textbook Reference:** Linearity of expectation is a cornerstone of probability theory. Devore (2016) emphasizes this in Chapter 4, and Veerarajan (2008) also dedicates sections to its properties. Papoulis & Pillai (2002) also extensively use this property in the context of random processes.

---

### **4. Examples and Calculations**

Let's consider an example to illustrate the calculation.

**Example 1:**
Suppose the joint PMF of two discrete random variables $X$ and $Y$ is given by the following table:

| $p_{X,Y}(x, y)$ | $Y=0$ | $Y=1$ | $Y=2$ |
| :-------------- | :---- | :---- | :---- |
| $X=0$           | 0.1   | 0.2   | 0.1   |
| $X=1$           | 0.15  | 0.25  | 0.2   |

Let's calculate the expected value of $Z = X + 2Y$.

**Solution:**
Here, $g(X, Y) = X + 2Y$. We need to calculate $E[X + 2Y]$.

Using the linearity of expectation:
$E[X + 2Y] = E[X] + 2E[Y]$

First, let's find the marginal PMFs to calculate $E[X]$ and $E[Y]$.

**Marginal PMF of X:**
$p_X(0) = P(X=0) = p_{X,Y}(0,0) + p_{X,Y}(0,1) + p_{X,Y}(0,2) = 0.1 + 0.2 + 0.1 = 0.4$
$p_X(1) = P(X=1) = p_{X,Y}(1,0) + p_{X,Y}(1,1) + p_{X,Y}(1,2) = 0.15 + 0.25 + 0.2 = 0.6$
(Check: $0.4 + 0.6 = 1$)

**Marginal PMF of Y:**
$p_Y(0) = P(Y=0) = p_{X,Y}(0,0) + p_{X,Y}(1,0) = 0.1 + 0.15 = 0.25$
$p_Y(1) = P(Y=1) = p_{X,Y}(0,1) + p_{X,Y}(1,1) = 0.2 + 0.25 = 0.45$
$p_Y(2) = P(Y=2) = p_{X,Y}(0,2) + p_{X,Y}(1,2) = 0.1 + 0.2 = 0.3$
(Check: $0.25 + 0.45 + 0.3 = 1$)

**Calculate E[X]:**
$E[X] = \sum x p_X(x) = (0 \times 0.4) + (1 \times 0.6) = 0 + 0.6 = 0.6$

**Calculate E[Y]:**
$E[Y] = \sum y p_Y(y) = (0 \times 0.25) + (1 \times 0.45) + (2 \times 0.3) = 0 + 0.45 + 0.6 = 1.05$

**Now, calculate E[X + 2Y]:**
$E[X + 2Y] = E[X] + 2E[Y] = 0.6 + 2(1.05) = 0.6 + 2.1 = 2.7$

**Alternative Method (Direct Calculation using joint PMF):**
We can also calculate this directly using the definition: $E[g(X, Y)] = \sum_{x} \sum_{y} g(x, y) p_{X,Y}(x, y)$.

Possible values of $g(X, Y) = X + 2Y$:
*   $X=0, Y=0: g(0,0) = 0 + 2(0) = 0$. Probability = 0.1
*   $X=0, Y=1: g(0,1) = 0 + 2(1) = 2$. Probability = 0.2
*   $X=0, Y=2: g(0,2) = 0 + 2(2) = 4$. Probability = 0.1
*   $X=1, Y=0: g(1,0) = 1 + 2(0) = 1$. Probability = 0.15
*   $X=1, Y=1: g(1,1) = 1 + 2(1) = 3$. Probability = 0.25
*   $X=1, Y=2: g(1,2) = 1 + 2(2) = 5$. Probability = 0.2

$E[X + 2Y] = (0 \times 0.1) + (2 \times 0.2) + (4 \times 0.1) + (1 \times 0.15) + (3 \times 0.25) + (5 \times 0.2)$
$E[X + 2Y] = 0 + 0.4 + 0.4 + 0.15 + 0.75 + 1.0$
$E[X + 2Y] = 2.7$

Both methods yield the same result, demonstrating the power of linearity of expectation in simplifying calculations.

---

### **5. Example with Independent Variables**

**Example 2:**
Let $X$ and $Y$ be independent discrete random variables with the following PMFs:

$p_X(x) = \begin{cases} 0.5 & \text{if } x=0 \\ 0.5 & \text{if } x=1 \end{cases}$

$p_Y(y) = \begin{cases} 0.3 & \text{if } y=1 \\ 0.7 & \text{if } y=2 \end{cases}$

Calculate $E[XY]$.

**Solution:**
Since $X$ and $Y$ are independent, $p_{X,Y}(x, y) = p_X(x) p_Y(y)$.
We can use the property that for independent random variables, $E[XY] = E[X]E[Y]$.

**Calculate E[X]:**
$E[X] = (0 \times 0.5) + (1 \times 0.5) = 0.5$

**Calculate E[Y]:**
$E[Y] = (1 \times 0.3) + (2 \times 0.7) = 0.3 + 1.4 = 1.7$

**Calculate E[XY]:**
$E[XY] = E[X]E[Y] = 0.5 \times 1.7 = 0.85$

**Direct Calculation (as a check):**
Possible values of $XY$:
*   $X=0, Y=1: XY = 0 \times 1 = 0$. $p_{X,Y}(0,1) = p_X(0)p_Y(1) = 0.5 \times 0.3 = 0.15$. Contribution: $0 \times 0.15 = 0$.
*   $X=0, Y=2: XY = 0 \times 2 = 0$. $p_{X,Y}(0,2) = p_X(0)p_Y(2) = 0.5 \times 0.7 = 0.35$. Contribution: $0 \times 0.35 = 0$.
*   $X=1, Y=1: XY = 1 \times 1 = 1$. $p_{X,Y}(1,1) = p_X(1)p_Y(1) = 0.5 \times 0.3 = 0.15$. Contribution: $1 \times 0.15 = 0.15$.
*   $X=1, Y=2: XY = 1 \times 2 = 2$. $p_{X,Y}(1,2) = p_X(1)p_Y(2) = 0.5 \times 0.7 = 0.35$. Contribution: $2 \times 0.35 = 0.70$.

$E[XY] = 0 + 0 + 0.15 + 0.70 = 0.85$.

Again, the results match. The independence property for products of expectations is very powerful.

**Textbook Reference:** The property $E[XY] = E[X]E[Y]$ for independent random variables is a key result often presented alongside the general formula for expectation. Devore (2016) and Veerarajan (2008) would detail this. Ross (2020) in his introductory chapters also highlights this property.

---

### **6. Important Points to Remember**

*   **Joint PMF is Key:** The expected value of any function of two discrete random variables $X$ and $Y$ relies on their joint probability mass function $p_{X,Y}(x, y)$.
*   **General Formula:** $E[g(X, Y)] = \sum_{x} \sum_{y} g(x, y) p_{X,Y}(x, y)$.
*   **Linearity of Expectation:** $E[aX + bY] = aE[X] + bE[Y]$ for constants $a, b$. This holds true **regardless of independence**. This is crucial for simplifying calculations involving sums or linear combinations.
*   **Independence for Products:** If $X$ and $Y$ are independent, then $E[XY] = E[X]E[Y]$. This property is specifically for independent variables.
*   **Application in Electrical Science:** Linearity of expectation is fundamental for analyzing systems composed of multiple random elements, like signal-plus-noise scenarios or systems with multiple random components.

---

### **7. Practice Questions and Exercises**

**Question 1:**
Let $X$ and $Y$ be two discrete random variables with the following joint PMF:

| $p_{X,Y}(x, y)$ | $Y=-1$ | $Y=0$ | $Y=1$ |
| :-------------- | :----- | :---- | :---- |
| $X=0$           | 0.1    | 0.2   | 0.05  |
| $X=1$           | 0.15   | 0.2   | 0.3   |

Calculate the expected value of $Z = X^2 - Y$.

**Answer 1:**
We need to calculate $E[X^2 - Y] = E[X^2] - E[Y]$ using linearity of expectation.

**Marginal PMF of X:**
$p_X(0) = 0.1 + 0.2 + 0.05 = 0.35$
$p_X(1) = 0.15 + 0.2 + 0.3 = 0.65$

**E[X]:**
$E[X] = (0 \times 0.35) + (1 \times 0.65) = 0.65$

**E[X²]:**
$E[X^2] = (0^2 \times 0.35) + (1^2 \times 0.65) = (0 \times 0.35) + (1 \times 0.65) = 0.65$

**Marginal PMF of Y:**
$p_Y(-1) = 0.1 + 0.15 = 0.25$
$p_Y(0) = 0.2 + 0.2 = 0.4$
$p_Y(1) = 0.05 + 0.3 = 0.35$

**E[Y]:**
$E[Y] = (-1 \times 0.25) + (0 \times 0.4) + (1 \times 0.35) = -0.25 + 0 + 0.35 = 0.1$

**E[X² - Y]:**
$E[X^2 - Y] = E[X^2] - E[Y] = 0.65 - 0.1 = 0.55$

---

**Question 2:**
Consider a system where a signal $S$ and noise $N$ are observed. Let $S$ be a random variable with $E[S] = 5$ and $N$ be a random variable with $E[N] = -1$. If the observed value is $O = S + N$, and $S$ and $N$ are independent, what is the expected observed value $E[O]$?

**Answer 2:**
We are given $O = S + N$. Using linearity of expectation,
$E[O] = E[S + N] = E[S] + E[N]$.
We are given $E[S] = 5$ and $E[N] = -1$.
Therefore, $E[O] = 5 + (-1) = 4$.
The independence of $S$ and $N$ is not required for calculating the expectation of their sum, only for the expectation of their product.

---

**Question 3:**
Two independent discrete random variables $X$ and $Y$ have the following PMFs:
$P(X=1) = 0.4, P(X=2) = 0.6$
$P(Y=0) = 0.3, P(Y=1) = 0.7$

Calculate $E[XY^2]$.

**Answer 3:**
Since $X$ and $Y$ are independent, $E[XY^2] = E[X]E[Y^2]$.

**Calculate E[X]:**
$E[X] = (1 \times 0.4) + (2 \times 0.6) = 0.4 + 1.2 = 1.6$

**Calculate E[Y²]:**
First, find the possible values of $Y^2$:
If $Y=0$, $Y^2=0$.
If $Y=1$, $Y^2=1$.

$E[Y^2] = (0^2 \times P(Y=0)) + (1^2 \times P(Y=1))$
$E[Y^2] = (0 \times 0.3) + (1 \times 0.7) = 0 + 0.7 = 0.7$

**Calculate E[XY²]:**
$E[XY^2] = E[X]E[Y^2] = 1.6 \times 0.7 = 1.12$

---

This concludes the notes on the expected value of a function of two discrete variables. Understanding this concept is vital for analyzing the behavior of systems with multiple random inputs or components in electrical science.
