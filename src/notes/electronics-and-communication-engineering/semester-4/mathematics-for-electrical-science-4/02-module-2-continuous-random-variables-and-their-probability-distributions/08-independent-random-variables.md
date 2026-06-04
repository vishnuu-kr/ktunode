---
title: "Independent random variables"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4c7"
status: "completed"
scrapedAt: "2026-05-23T17:50:45.803Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 2: Continuous Random Variables and their Probability Distributions

### Topic: Independent Random Variables

This topic explores the crucial concept of independence between random variables, which is fundamental for simplifying probabilistic calculations and modeling real-world phenomena in electrical science. Understanding independence allows us to treat the behavior of one variable separately from another, making complex systems more manageable.

---

### 1. Learning Outcomes Covered

This section will equip you with the ability to:

*   **Define and explain the concept of independence for both discrete and continuous random variables.** (Aligns with CO1, CO2)
*   **State and apply the conditions for independence based on joint probability distributions.** (Aligns with CO1, CO2)
*   **Calculate the expected value and variance of sums and products of independent random variables.** (Aligns with CO1, CO2)
*   **Understand the implications of independence for joint probability density functions (PDFs) and cumulative distribution functions (CDFs).** (Aligns with CO2)
*   **Recognize how independence simplifies calculations in various electrical science applications.** (Aligns with CO2, CO4)

---

### 2. Key Concepts and Definitions

#### 2.1. Independence of Random Variables

**Definition:** Two random variables, $X$ and $Y$, are said to be **statistically independent** if the occurrence of a specific value for $X$ has no influence on the probability of occurrence of any specific value for $Y$, and vice versa.

**Intuitive Understanding:** Imagine two independent electrical components. The failure of one component does not affect the probability of the other component failing.

#### 2.2. Independence for Discrete Random Variables

Let $X$ and $Y$ be discrete random variables with joint probability mass function (PMF) $p_{XY}(x, y)$. $X$ and $Y$ are independent if and only if:

$$p_{XY}(x, y) = p_X(x) \cdot p_Y(y)$$

for all possible values of $x$ and $y$.

Here, $p_X(x)$ is the marginal PMF of $X$, and $p_Y(y)$ is the marginal PMF of $Y$.

**To check for independence:**
1.  Calculate the marginal PMFs $p_X(x) = \sum_{y} p_{XY}(x, y)$ and $p_Y(y) = \sum_{x} p_{XY}(x, y)$.
2.  Check if $p_{XY}(x, y) = p_X(x) \cdot p_Y(y)$ for all $x$ and $y$.

#### 2.3. Independence for Continuous Random Variables

Let $X$ and $Y$ be continuous random variables with joint probability density function (PDF) $f_{XY}(x, y)$. $X$ and $Y$ are independent if and only if:

$$f_{XY}(x, y) = f_X(x) \cdot f_Y(y)$$

for all possible values of $x$ and $y$.

Here, $f_X(x)$ is the marginal PDF of $X$, and $f_Y(y)$ is the marginal PDF of $Y$.

**To check for independence:**
1.  Calculate the marginal PDFs $f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) dy$ and $f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y) dx$.
2.  Check if $f_{XY}(x, y) = f_X(x) \cdot f_Y(y)$ for all $x$ and $y$.

**Important Note:** The condition $f_{XY}(x, y) = f_X(x) \cdot f_Y(y)$ implies that the joint PDF can be factored into the product of the marginal PDFs.

#### 2.4. Independence and Cumulative Distribution Functions (CDFs)

Let $F_{XY}(x, y)$ be the joint CDF of $X$ and $Y$. If $X$ and $Y$ are independent, then:

$$F_{XY}(x, y) = F_X(x) \cdot F_Y(y)$$

for all $x$ and $y$. This means the joint CDF is the product of the marginal CDFs.

#### 2.5. Properties of Independent Random Variables

If $X$ and $Y$ are independent random variables:

*   **Expected Value of a Product:**
    $$E[XY] = E[X] \cdot E[Y]$$
    This is a crucial property that simplifies calculations significantly.

*   **Variance of a Sum:**
    $$Var(X + Y) = Var(X) + Var(Y)$$
    This property is also very important and is a direct consequence of independence (and linearity of expectation). If $X$ and $Y$ are *not* independent, $Var(X+Y) = Var(X) + Var(Y) + 2Cov(X,Y)$, where Cov(X,Y) is the covariance.

*   **Variance of a Difference:**
    $$Var(X - Y) = Var(X) + Var(Y)$$

*   **Covariance:**
    $$Cov(X, Y) = E[XY] - E[X]E[Y]$$
    If $X$ and $Y$ are independent, then $E[XY] = E[X]E[Y]$, which means $Cov(X, Y) = 0$.
    **However, $Cov(X, Y) = 0$ does not necessarily imply independence.** Zero covariance only means there is no *linear* relationship.

*   **Independence of Functions of Random Variables:** If $X$ and $Y$ are independent, then any function of $X$, say $g(X)$, is independent of any function of $Y$, say $h(Y)$. For example, $X^2$ is independent of $\sqrt{Y}$.

#### 2.6. Extension to Multiple Random Variables

The concept of independence extends to more than two random variables. A set of random variables $X_1, X_2, \ldots, X_n$ are said to be **mutually independent** if for every subset of $k$ distinct random variables $\{X_{i_1}, X_{i_2}, \ldots, X_{i_k}\}$ from the set, their joint PMF/PDF is the product of their marginal PMFs/PDFs.

For $n$ discrete random variables:
$$p_{X_1, \ldots, X_n}(x_1, \ldots, x_n) = p_{X_1}(x_1) \cdot p_{X_2}(x_2) \cdots p_{X_n}(x_n)$$

For $n$ continuous random variables:
$$f_{X_1, \ldots, X_n}(x_1, \ldots, x_n) = f_{X_1}(x_1) \cdot f_{X_2}(x_2) \cdots f_{X_n}(x_n)$$

**Important Distinction:**
*   **Pairwise Independence:** Every pair of random variables in a set is independent.
*   **Mutual Independence:** The entire set of random variables is independent as a group. Mutual independence implies pairwise independence, but the converse is not always true.

#### 2.7. Independence in Electrical Science Applications

*   **Signal Processing:** Independent noise sources affecting different parts of a system can be modeled as independent random variables.
*   **Reliability Engineering:** The failure times of independent components in a system are often modeled as independent random variables.
*   **Communication Systems:** The errors introduced by independent channel impairments can be treated as independent random variables.
*   **Circuit Analysis:** Voltages or currents in different, uncoupled branches of a circuit can often be considered independent.

---

### 3. Examples

#### Example 2.1: Discrete Independence (PMF Factorization)

Let $X$ and $Y$ be discrete random variables with the following joint PMF:
$p_{XY}(x, y) = \frac{1}{10}$ for $(x, y) \in \{(1,1), (1,2), (2,1), (2,2), (3,1), (3,2), (1,3), (2,3), (3,3), (4,1)\}$. All other values are 0.

**Solution:**
1.  **Marginal PMF of X:**
    $p_X(1) = p_{XY}(1,1) + p_{XY}(1,2) + p_{XY}(1,3) = \frac{1}{10} + \frac{1}{10} + \frac{1}{10} = \frac{3}{10}$
    $p_X(2) = p_{XY}(2,1) + p_{XY}(2,2) + p_{XY}(2,3) = \frac{1}{10} + \frac{1}{10} + \frac{1}{10} = \frac{3}{10}$
    $p_X(3) = p_{XY}(3,1) + p_{XY}(3,2) + p_{XY}(3,3) = \frac{1}{10} + \frac{1}{10} + \frac{1}{10} = \frac{3}{10}$
    $p_X(4) = p_{XY}(4,1) = \frac{1}{10}$
    (Check: $\frac{3}{10} + \frac{3}{10} + \frac{3}{10} + \frac{1}{10} = 1$)

2.  **Marginal PMF of Y:**
    $p_Y(1) = p_{XY}(1,1) + p_{XY}(2,1) + p_{XY}(3,1) + p_{XY}(4,1) = \frac{1}{10} + \frac{1}{10} + \frac{1}{10} + \frac{1}{10} = \frac{4}{10}$
    $p_Y(2) = p_{XY}(1,2) + p_{XY}(2,2) + p_{XY}(3,2) = \frac{1}{10} + \frac{1}{10} + \frac{1}{10} = \frac{3}{10}$
    $p_Y(3) = p_{XY}(1,3) + p_{XY}(2,3) + p_{XY}(3,3) = \frac{1}{10} + \frac{1}{10} + \frac{1}{10} = \frac{3}{10}$
    (Check: $\frac{4}{10} + \frac{3}{10} + \frac{3}{10} = 1$)

3.  **Check for Independence:**
    Let's check for $(x, y) = (1,1)$:
    $p_{XY}(1,1) = \frac{1}{10}$
    $p_X(1) \cdot p_Y(1) = \frac{3}{10} \cdot \frac{4}{10} = \frac{12}{100} \neq \frac{1}{10}$
    Therefore, $X$ and $Y$ are **not independent**.

#### Example 2.2: Continuous Independence (PDF Factorization)

Let $X$ and $Y$ be continuous random variables with joint PDF:
$f_{XY}(x, y) = \begin{cases} e^{-x} e^{-y} & \text{if } x > 0, y > 0 \\ 0 & \text{otherwise} \end{cases}$

**Solution:**
1.  **Marginal PDF of X:**
    $f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) dy = \int_{0}^{\infty} e^{-x} e^{-y} dy$
    For $x > 0$, $e^{-x}$ is a constant with respect to $y$.
    $f_X(x) = e^{-x} \int_{0}^{\infty} e^{-y} dy = e^{-x} [-e^{-y}]_{0}^{\infty} = e^{-x} (0 - (-1)) = e^{-x}$ for $x > 0$.
    So, $f_X(x) = e^{-x}$ for $x > 0$, and 0 otherwise. This is an exponential distribution with parameter $\lambda=1$.

2.  **Marginal PDF of Y:**
    Similarly, $f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y) dx = \int_{0}^{\infty} e^{-x} e^{-y} dx$
    For $y > 0$, $e^{-y}$ is a constant with respect to $x$.
    $f_Y(y) = e^{-y} \int_{0}^{\infty} e^{-x} dx = e^{-y} [-e^{-x}]_{0}^{\infty} = e^{-y} (0 - (-1)) = e^{-y}$ for $y > 0$.
    So, $f_Y(y) = e^{-y}$ for $y > 0$, and 0 otherwise. This is also an exponential distribution with parameter $\lambda=1$.

3.  **Check for Independence:**
    We need to check if $f_{XY}(x, y) = f_X(x) \cdot f_Y(y)$.
    For $x > 0$ and $y > 0$:
    $f_X(x) \cdot f_Y(y) = e^{-x} \cdot e^{-y} = e^{-(x+y)}$
    The given joint PDF is $f_{XY}(x, y) = e^{-x} e^{-y} = e^{-(x+y)}$ for $x > 0, y > 0$.
    Since $f_{XY}(x, y) = f_X(x) \cdot f_Y(y)$ for all $x, y$, $X$ and $Y$ are **independent**.

#### Example 2.3: Expected Value of a Product of Independent Variables

Let $X \sim N(0, 1)$ and $Y \sim N(0, 1)$ be independent standard normal random variables. Calculate $E[XY]$.

**Solution:**
Since $X$ and $Y$ are independent, we can use the property $E[XY] = E[X] \cdot E[Y]$.
For a standard normal distribution, $E[X] = 0$ and $E[Y] = 0$.
Therefore, $E[XY] = 0 \cdot 0 = 0$.

#### Example 2.4: Variance of a Sum of Independent Variables

Let $X$ and $Y$ be independent continuous random variables with $Var(X) = 4$ and $Var(Y) = 9$. Calculate $Var(X + Y)$.

**Solution:**
Since $X$ and $Y$ are independent, we can use the property $Var(X + Y) = Var(X) + Var(Y)$.
$Var(X + Y) = 4 + 9 = 13$.

#### Example 2.5: Functions of Independent Variables

Let $X$ and $Y$ be independent, with $X \sim \text{Uniform}(0, 1)$ and $Y \sim \text{Exponential}(1)$. Calculate $E[X^2 Y]$.

**Solution:**
Since $X$ and $Y$ are independent, $X^2$ and $Y$ are also independent.
$E[X^2 Y] = E[X^2] \cdot E[Y]$.

*   For $X \sim \text{Uniform}(0, 1)$: $E[X] = \frac{0+1}{2} = \frac{1}{2}$. $Var(X) = \frac{(1-0)^2}{12} = \frac{1}{12}$.
    $Var(X) = E[X^2] - (E[X])^2 \implies E[X^2] = Var(X) + (E[X])^2 = \frac{1}{12} + (\frac{1}{2})^2 = \frac{1}{12} + \frac{1}{4} = \frac{1}{12} + \frac{3}{12} = \frac{4}{12} = \frac{1}{3}$.

*   For $Y \sim \text{Exponential}(1)$, the PDF is $f_Y(y) = e^{-y}$ for $y > 0$. The mean is $E[Y] = \frac{1}{\lambda} = \frac{1}{1} = 1$.

Therefore, $E[X^2 Y] = E[X^2] \cdot E[Y] = \frac{1}{3} \cdot 1 = \frac{1}{3}$.

---

### 4. Practice Questions and Exercises

**Question 2.1 (Discrete):**
Two discrete random variables $X$ and $Y$ have the joint PMF given by:
$p_{XY}(x,y) = cxy$ for $x \in \{1,2\}$ and $y \in \{1,2,3\}$.
(a) Find the value of the constant $c$.
(b) Determine the marginal PMFs of $X$ and $Y$.
(c) Are $X$ and $Y$ independent? Justify your answer.

**Answer 2.1:**
(a) The sum of all probabilities must be 1:
$\sum_{x=1}^2 \sum_{y=1}^3 cxy = c \left( (1 \cdot 1 + 1 \cdot 2 + 1 \cdot 3) + (2 \cdot 1 + 2 \cdot 2 + 2 \cdot 3) \right) = c ( (1+2+3) + (2+4+6) ) = c (6 + 12) = 18c$.
So, $18c = 1 \implies c = \frac{1}{18}$.
$p_{XY}(x,y) = \frac{xy}{18}$ for $x \in \{1,2\}, y \in \{1,2,3\}$.

(b) Marginal PMF of X:
$p_X(1) = \sum_{y=1}^3 p_{XY}(1,y) = \frac{1 \cdot 1}{18} + \frac{1 \cdot 2}{18} + \frac{1 \cdot 3}{18} = \frac{1+2+3}{18} = \frac{6}{18} = \frac{1}{3}$.
$p_X(2) = \sum_{y=1}^3 p_{XY}(2,y) = \frac{2 \cdot 1}{18} + \frac{2 \cdot 2}{18} + \frac{2 \cdot 3}{18} = \frac{2+4+6}{18} = \frac{12}{18} = \frac{2}{3}$.
(Check: $\frac{1}{3} + \frac{2}{3} = 1$)

Marginal PMF of Y:
$p_Y(1) = \sum_{x=1}^2 p_{XY}(x,1) = \frac{1 \cdot 1}{18} + \frac{2 \cdot 1}{18} = \frac{1+2}{18} = \frac{3}{18} = \frac{1}{6}$.
$p_Y(2) = \sum_{x=1}^2 p_{XY}(x,2) = \frac{1 \cdot 2}{18} + \frac{2 \cdot 2}{18} = \frac{2+4}{18} = \frac{6}{18} = \frac{1}{3}$.
$p_Y(3) = \sum_{x=1}^2 p_{XY}(x,3) = \frac{1 \cdot 3}{18} + \frac{2 \cdot 3}{18} = \frac{3+6}{18} = \frac{9}{18} = \frac{1}{2}$.
(Check: $\frac{1}{6} + \frac{1}{3} + \frac{1}{2} = \frac{1+2+3}{6} = 1$)

(c) To check for independence, we see if $p_{XY}(x,y) = p_X(x)p_Y(y)$.
Let's check for $(x,y) = (1,1)$:
$p_{XY}(1,1) = \frac{1 \cdot 1}{18} = \frac{1}{18}$.
$p_X(1)p_Y(1) = \frac{1}{3} \cdot \frac{1}{6} = \frac{1}{18}$.
This holds. Let's check for $(x,y) = (2,3)$:
$p_{XY}(2,3) = \frac{2 \cdot 3}{18} = \frac{6}{18} = \frac{1}{3}$.
$p_X(2)p_Y(3) = \frac{2}{3} \cdot \frac{1}{2} = \frac{1}{3}$.
This also holds. In fact, $p_X(x)p_Y(y) = (\frac{x}{6}) (\frac{y}{3}) = \frac{xy}{18}$, which is equal to $p_{XY}(x,y)$.
Therefore, $X$ and $Y$ are **independent**.

**Question 2.2 (Continuous):**
Let $X$ and $Y$ be continuous random variables with joint PDF:
$f_{XY}(x,y) = \begin{cases} kxy & \text{if } 0 < x < 1, 0 < y < 2 \\ 0 & \text{otherwise} \end{cases}$
(a) Find the value of the constant $k$.
(b) Determine the marginal PDFs of $X$ and $Y$.
(c) Are $X$ and $Y$ independent? Justify your answer.

**Answer 2.2:**
(a) The integral of the joint PDF over its support must be 1:
$\int_0^2 \int_0^1 kxy \, dx \, dy = k \int_0^2 \left[ \frac{x^2y}{2} \right]_0^1 \, dy = k \int_0^2 \frac{y}{2} \, dy = k \left[ \frac{y^2}{4} \right]_0^2 = k \left( \frac{2^2}{4} - 0 \right) = k \left( \frac{4}{4} \right) = k$.
So, $k = 1$.
$f_{XY}(x,y) = xy$ for $0 < x < 1, 0 < y < 2$.

(b) Marginal PDF of X:
$f_X(x) = \int_0^2 xy \, dy = x \left[ \frac{y^2}{2} \right]_0^2 = x \left( \frac{2^2}{2} - 0 \right) = x \left( \frac{4}{2} \right) = 2x$ for $0 < x < 1$.
So, $f_X(x) = 2x$ for $0 < x < 1$, and 0 otherwise.

Marginal PDF of Y:
$f_Y(y) = \int_0^1 xy \, dx = y \left[ \frac{x^2}{2} \right]_0^1 = y \left( \frac{1^2}{2} - 0 \right) = \frac{y}{2}$ for $0 < y < 2$.
So, $f_Y(y) = \frac{y}{2}$ for $0 < y < 2$, and 0 otherwise.

(c) To check for independence, we see if $f_{XY}(x,y) = f_X(x)f_Y(y)$.
For $0 < x < 1$ and $0 < y < 2$:
$f_X(x)f_Y(y) = (2x) \left( \frac{y}{2} \right) = xy$.
This is equal to $f_{XY}(x,y)$.
Therefore, $X$ and $Y$ are **independent**.

**Question 2.3 (Properties):**
Let $X_1, X_2, X_3$ be independent random variables with $E[X_1] = 2, Var(X_1) = 3$, $E[X_2] = -1, Var(X_2) = 2$, and $E[X_3] = 5, Var(X_3) = 4$.
Calculate:
(a) $E[X_1 X_2]$
(b) $Var(X_1 + X_2)$
(c) $Var(X_1 - X_2 + X_3)$
(d) $E[X_1^2]$

**Answer 2.3:**
(a) Since $X_1$ and $X_2$ are independent, $E[X_1 X_2] = E[X_1] E[X_2] = 2 \cdot (-1) = -2$.

(b) Since $X_1$ and $X_2$ are independent, $Var(X_1 + X_2) = Var(X_1) + Var(X_2) = 3 + 2 = 5$.

(c) Since $X_1, X_2, X_3$ are independent, they are also pairwise independent. Thus, their variances add up.
$Var(X_1 - X_2 + X_3) = Var(X_1) + Var(-X_2) + Var(X_3)$
Using $Var(aX) = a^2 Var(X)$, we have $Var(-X_2) = (-1)^2 Var(X_2) = Var(X_2)$.
So, $Var(X_1 - X_2 + X_3) = Var(X_1) + Var(X_2) + Var(X_3) = 3 + 2 + 4 = 9$.

(d) We know that $Var(X_1) = E[X_1^2] - (E[X_1])^2$.
Rearranging, $E[X_1^2] = Var(X_1) + (E[X_1])^2$.
$E[X_1^2] = 3 + (2)^2 = 3 + 4 = 7$.

---

### 5. Important Points to Remember

*   **Definition of Independence:** The occurrence of one event does not affect the probability of another. For random variables, this translates to the joint PMF/PDF being the product of marginal PMFs/PDFs.
*   **Factorization is Key:** For discrete variables, $p_{XY}(x, y) = p_X(x) p_Y(y)$. For continuous variables, $f_{XY}(x, y) = f_X(x) f_Y(y)$.
*   **Consequences of Independence:**
    *   $E[XY] = E[X]E[Y]$
    *   $Var(X+Y) = Var(X) + Var(Y)$
    *   $Var(X-Y) = Var(X) + Var(Y)$
*   **Covariance vs. Independence:** Zero covariance ($Cov(X,Y)=0$) does *not* imply independence, only that there is no *linear* relationship. However, independence *does* imply zero covariance.
*   **Functions of Independent Variables:** If $X$ and $Y$ are independent, then $g(X)$ and $h(Y)$ are also independent for any suitable functions $g$ and $h$.
*   **Mutual Independence:** For more than two random variables, ensure you understand the difference between pairwise and mutual independence. Calculations involving sums and products of multiple independent variables rely on mutual independence.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 6. Textbook and Reference Material Integration

This topic is thoroughly covered in the provided textbooks:

*   **Devore J. L., Probability and Statistics for Engineering and the Sciences (9th ed., 2016):** Chapter 4 covers joint probability distributions, including the definition and properties of independent random variables for both discrete and continuous cases. It provides numerous examples and exercises relevant to engineering.
*   **Veerarajan T., Probability, Statistics and Random Processes (3rd ed., 2008):** Chapter 3 on "Random Variables and Probability Distributions" and Chapter 5 on "Joint Probability Distributions" will contain the core concepts of independence.
*   **Papoulis, A. & Pillai, S.U., Probability, Random Variables and Stochastic Processes (4th ed., 2002):** Chapters 4 and 5 will deal with joint distributions and independence, offering a more rigorous and comprehensive treatment, particularly useful for understanding the theoretical underpinnings.
*   **Ross, S. M., Introduction to Probability and Statistics for Engineers and Scientists (6th ed., 2020):** Chapter 4 discusses joint distributions and independence, with an emphasis on applications in engineering.
*   **Anderson, D. F., Timo, B., Introduction to Probability (1st ed., 2017):** Chapter 4 will likely focus on multivariate distributions and independence, providing clear explanations and examples.
*   **Palaniammal, S., Probability and Random Processes (3rd ed., 2015):** Chapters 3 and 4 will cover random variables, joint distributions, and the crucial concept of independence with relevant examples.

The examples and practice problems presented here are designed to reflect the types of questions found in these resources and to solidify understanding of the core principles.

---

### 7. Alignment with Course Outcomes

*   **CO1 & CO2:** The definitions, properties, and calculation methods for independence in both discrete and continuous random variables are directly addressed, enabling students to apply these concepts to model random phenomena in electrical science.
*   **CO4:** Understanding independent random variables is a prerequisite for analyzing complex random processes. For instance, modeling noise in communication systems often assumes independence between different noise sources or between the signal and noise. The properties of sums of independent random variables are foundational for understanding signal-to-noise ratios and system behavior.

---