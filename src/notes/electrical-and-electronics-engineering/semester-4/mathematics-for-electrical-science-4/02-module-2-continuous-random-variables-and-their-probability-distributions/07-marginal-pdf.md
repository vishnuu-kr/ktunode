---
title: "Marginal pdf"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35da3"
status: "completed"
scrapedAt: "2026-05-23T16:16:56.971Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4
## Module 2: Continuous Random Variables and their Probability Distributions
### Topic: Marginal Probability Density Function (pdf)

---

### 1. Learning Outcomes Covered

*   **Understanding Joint Distributions:** Grasp the concept of joint probability distributions for continuous random variables.
*   **Deriving Marginal Distributions:** Learn how to derive the marginal probability density functions (pdfs) for individual random variables from a joint pdf.
*   **Applying Marginal Distributions:** Understand the significance of marginal pdfs in analyzing the behavior of individual random variables within a multivariate context.
*   **Checking for Independence:** Learn to use marginal pdfs to determine if multiple continuous random variables are independent.

---

### 2. Key Concepts and Definitions

#### 2.1. Joint Probability Density Function (pdf) for Continuous Random Variables

When we consider two or more continuous random variables simultaneously, we often describe their behavior using a **joint probability density function**.

*   **Definition:** For two continuous random variables $X$ and $Y$, their joint pdf, denoted by $f_{XY}(x, y)$, is a function such that:
    *   $f_{XY}(x, y) \ge 0$ for all $x, y$.
    *   $\iint_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx \, dy = 1$.

*   **Interpretation:** The probability that $(X, Y)$ falls within a region $A$ in the $xy$-plane is given by the double integral of the joint pdf over that region:
    $P((X, Y) \in A) = \iint_{A} f_{XY}(x, y) \, dx \, dy$.

*   **Reference:** This concept is fundamental and can be found in **Devore (9th ed.) Chapter 3.5** and **Veerarajan (3rd ed.) Chapter 4.3**.

#### 2.2. Marginal Probability Density Function (pdf)

The **marginal pdf** of a single continuous random variable in a joint distribution describes the probability distribution of that variable *without regard to the values of the other variables*.

*   **Derivation for Two Variables:** Given a joint pdf $f_{XY}(x, y)$ for continuous random variables $X$ and $Y$, the marginal pdf of $X$, denoted by $f_X(x)$, is obtained by integrating the joint pdf with respect to $y$ over all possible values of $y$:
    $$f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dy$$

    Similarly, the marginal pdf of $Y$, denoted by $f_Y(y)$, is obtained by integrating the joint pdf with respect to $x$ over all possible values of $x$:
    $$f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx$$

*   **Interpretation:** The marginal pdf $f_X(x)$ represents the probability distribution of $X$ alone. The total probability must sum to 1:
    $\int_{-\infty}^{\infty} f_X(x) \, dx = 1$ and $\int_{-\infty}^{\infty} f_Y(y) \, dy = 1$.

*   **Extension to More Than Two Variables:** For a joint pdf $f_{XYZ}(x, y, z)$, the marginal pdf of $X$ is $f_X(x) = \iint_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XYZ}(x, y, z) \, dy \, dz$. The process involves integrating out all variables except the one for which the marginal pdf is desired.

*   **Reference:** Detailed explanations and derivations are available in **Devore (9th ed.) Chapter 3.5** and **Veerarajan (3rd ed.) Chapter 4.4**.

#### 2.3. Independence of Continuous Random Variables

Two continuous random variables $X$ and $Y$ are **independent** if and only if their joint pdf can be expressed as the product of their marginal pdfs for all values of $x$ and $y$.

*   **Condition for Independence:** $X$ and $Y$ are independent if $f_{XY}(x, y) = f_X(x) f_Y(y)$ for all $x, y$.

*   **Consequence:** If $X$ and $Y$ are independent, then their joint distribution can be completely determined from their individual (marginal) distributions. This is a powerful concept in probability and statistics.

*   **Reference:** This is a crucial concept in **Devore (9th ed.) Chapter 3.5** and **Veerarajan (3rd ed.) Chapter 4.4**.

---

### 3. Examples

#### Example 1: Deriving Marginal pdfs

Let the joint pdf of two continuous random variables $X$ and $Y$ be:
$$f_{XY}(x, y) = \begin{cases} 6xy^2 & \text{if } 0 \le x \le 1, 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$$

**Find the marginal pdfs of X and Y.**

**Solution:**

*   **Marginal pdf of X ($f_X(x)$):**
    We need to integrate $f_{XY}(x, y)$ with respect to $y$ from $0$ to $1$.
    $$f_X(x) = \int_{0}^{1} 6xy^2 \, dy$$
    $$f_X(x) = 6x \left[ \frac{y^3}{3} \right]_{0}^{1}$$
    $$f_X(x) = 6x \left( \frac{1^3}{3} - \frac{0^3}{3} \right)$$
    $$f_X(x) = 6x \left( \frac{1}{3} \right)$$
    $$f_X(x) = 2x$$
    So, $f_X(x) = 2x$ for $0 \le x \le 1$, and $0$ otherwise.

*   **Marginal pdf of Y ($f_Y(y)$):**
    We need to integrate $f_{XY}(x, y)$ with respect to $x$ from $0$ to $1$.
    $$f_Y(y) = \int_{0}^{1} 6xy^2 \, dx$$
    $$f_Y(y) = 6y^2 \left[ \frac{x^2}{2} \right]_{0}^{1}$$
    $$f_Y(y) = 6y^2 \left( \frac{1^2}{2} - \frac{0^2}{2} \right)$$
    $$f_Y(y) = 6y^2 \left( \frac{1}{2} \right)$$
    $$f_Y(y) = 3y^2$$
    So, $f_Y(y) = 3y^2$ for $0 \le y \le 1$, and $0$ otherwise.

**Check:**
Let's verify if these marginal pdfs integrate to 1.
$\int_{0}^{1} f_X(x) \, dx = \int_{0}^{1} 2x \, dx = [x^2]_0^1 = 1^2 - 0^2 = 1$. (Correct)
$\int_{0}^{1} f_Y(y) \, dy = \int_{0}^{1} 3y^2 \, dy = [y^3]_0^1 = 1^3 - 0^3 = 1$. (Correct)

#### Example 2: Checking for Independence

Consider the joint pdf from Example 1:
$$f_{XY}(x, y) = \begin{cases} 6xy^2 & \text{if } 0 \le x \le 1, 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$$

We found the marginal pdfs:
$f_X(x) = 2x$ for $0 \le x \le 1$
$f_Y(y) = 3y^2$ for $0 \le y \le 1$

**Are X and Y independent?**

**Solution:**
We need to check if $f_{XY}(x, y) = f_X(x) f_Y(y)$ for all $x, y$ in the support of the distribution.
$f_X(x) f_Y(y) = (2x)(3y^2) = 6xy^2$.

Comparing this with the given joint pdf $f_{XY}(x, y) = 6xy^2$ for $0 \le x \le 1$ and $0 \le y \le 1$.
Since $f_{XY}(x, y) = f_X(x) f_Y(y)$ for all $(x, y)$ in the domain where the joint pdf is non-zero, $X$ and $Y$ are independent.

#### Example 3: Joint pdf over a non-rectangular region

Let the joint pdf be:
$$f_{XY}(x, y) = \begin{cases} 2 & \text{if } 0 \le y \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$$

**Find the marginal pdfs of X and Y.**

**Solution:**

*   **Marginal pdf of X ($f_X(x)$):**
    The region of support is a triangle with vertices (0,0), (1,0), and (1,1). For a fixed $x$, $y$ ranges from $0$ to $x$.
    $$f_X(x) = \int_{0}^{x} 2 \, dy$$
    $$f_X(x) = [2y]_{0}^{x}$$
    $$f_X(x) = 2x$$
    The range for $x$ in this region is $0 \le x \le 1$. So, $f_X(x) = 2x$ for $0 \le x \le 1$, and $0$ otherwise.

*   **Marginal pdf of Y ($f_Y(y)$):**
    For a fixed $y$, $x$ ranges from $y$ to $1$. The range for $y$ in this region is $0 \le y \le 1$.
    $$f_Y(y) = \int_{y}^{1} 2 \, dx$$
    $$f_Y(y) = [2x]_{y}^{1}$$
    $$f_Y(y) = 2(1) - 2(y)$$
    $$f_Y(y) = 2(1 - y)$$
    So, $f_Y(y) = 2(1-y)$ for $0 \le y \le 1$, and $0$ otherwise.

**Check:**
$\int_{0}^{1} f_X(x) \, dx = \int_{0}^{1} 2x \, dx = [x^2]_0^1 = 1$. (Correct)
$\int_{0}^{1} f_Y(y) \, dy = \int_{0}^{1} 2(1-y) \, dy = 2[y - \frac{y^2}{2}]_0^1 = 2(1 - \frac{1}{2}) = 2(\frac{1}{2}) = 1$. (Correct)

**Independence Check:**
$f_X(x) f_Y(y) = (2x)(2(1-y)) = 4x(1-y)$.
This is not equal to $f_{XY}(x, y) = 2$ for $0 \le y \le x \le 1$. Therefore, $X$ and $Y$ are **not independent**.

---

### 4. Practice Questions / Exercises

**Question 1:**
The joint probability density function of two continuous random variables $X$ and $Y$ is given by:
$$f_{XY}(x, y) = \begin{cases} cx & \text{if } 0 \le x \le 1, 0 \le y \le x \\ 0 & \text{otherwise} \end{cases}$$
a) Find the value of the constant $c$.
b) Find the marginal pdf of $X$, $f_X(x)$.
c) Find the marginal pdf of $Y$, $f_Y(y)$.
d) Are $X$ and $Y$ independent? Justify your answer.

**Answer 1:**
a) To find $c$, we integrate the joint pdf over its support and set it to 1:
$\int_{0}^{1} \int_{0}^{x} cx \, dy \, dx = 1$
$\int_{0}^{1} cx [y]_{0}^{x} \, dx = 1$
$\int_{0}^{1} cx (x - 0) \, dx = 1$
$\int_{0}^{1} cx^2 \, dx = 1$
$c [\frac{x^3}{3}]_{0}^{1} = 1$
$c (\frac{1}{3}) = 1 \implies c = 3$.
So, $f_{XY}(x, y) = 3x$ for $0 \le y \le x \le 1$.

b) Marginal pdf of $X$:
$f_X(x) = \int_{0}^{x} 3x \, dy = 3x [y]_{0}^{x} = 3x(x) = 3x^2$ for $0 \le x \le 1$.

c) Marginal pdf of $Y$:
For a fixed $y$, $x$ ranges from $y$ to $1$.
$f_Y(y) = \int_{y}^{1} 3x \, dx = 3 [\frac{x^2}{2}]_{y}^{1} = 3 (\frac{1}{2} - \frac{y^2}{2}) = \frac{3}{2}(1 - y^2)$ for $0 \le y \le 1$.

d) Independence:
$f_X(x) f_Y(y) = (3x^2) (\frac{3}{2}(1 - y^2)) = \frac{9}{2}x^2(1 - y^2)$.
This is not equal to $f_{XY}(x, y) = 3x$ for $0 \le y \le x \le 1$.
Therefore, $X$ and $Y$ are **not independent**.

**Question 2:**
Let $X$ and $Y$ be independent continuous random variables with pdfs:
$f_X(x) = e^{-x}$ for $x \ge 0$, and $f_Y(y) = 2e^{-2y}$ for $y \ge 0$.
a) Find the joint pdf, $f_{XY}(x, y)$.
b) Find the marginal pdf of $X$, $f_X(x)$, from the joint pdf.
c) Find the marginal pdf of $Y$, $f_Y(y)$, from the joint pdf.

**Answer 2:**
a) Since $X$ and $Y$ are independent, their joint pdf is the product of their marginal pdfs:
$f_{XY}(x, y) = f_X(x) f_Y(y) = (e^{-x})(2e^{-2y}) = 2e^{-x-2y}$ for $x \ge 0, y \ge 0$.

b) Marginal pdf of $X$:
Integrate the joint pdf with respect to $y$ from $0$ to $\infty$:
$f_X(x) = \int_{0}^{\infty} 2e^{-x-2y} \, dy = 2e^{-x} \int_{0}^{\infty} e^{-2y} \, dy$
$f_X(x) = 2e^{-x} \left[ -\frac{1}{2}e^{-2y} \right]_{0}^{\infty}$
$f_X(x) = 2e^{-x} (0 - (-\frac{1}{2}e^0)) = 2e^{-x} (\frac{1}{2}) = e^{-x}$ for $x \ge 0$.
This matches the given $f_X(x)$.

c) Marginal pdf of $Y$:
Integrate the joint pdf with respect to $x$ from $0$ to $\infty$:
$f_Y(y) = \int_{0}^{\infty} 2e^{-x-2y} \, dx = 2e^{-2y} \int_{0}^{\infty} e^{-x} \, dx$
$f_Y(y) = 2e^{-2y} [-e^{-x}]_{0}^{\infty}$
$f_Y(y) = 2e^{-2y} (0 - (-e^0)) = 2e^{-2y} (1) = 2e^{-2y}$ for $y \ge 0$.
This matches the given $f_Y(y)$.

---

### 5. Important Points to Remember

*   **Marginal pdf is obtained by integration:** To find the marginal pdf of one variable from a joint pdf, you must integrate the joint pdf with respect to the *other* variable(s) over their entire range.
*   **Support of the region matters:** When performing integration, pay close attention to the domain (region of support) where the joint pdf is non-zero. This defines the limits of integration.
*   **Independence is a product:** Two continuous random variables are independent if and only if their joint pdf is equal to the product of their marginal pdfs across their entire domain.
*   **Marginal pdfs must integrate to 1:** Always check that the derived marginal pdfs are valid by ensuring they integrate to 1 over their respective ranges.
*   **Extension to Higher Dimensions:** The concept extends to distributions involving more than two random variables; you integrate out all but one variable to get its marginal pdf.

---

### 6. Alignment with Course Outcomes

*   **CO1 (Discrete Random Variables):** While this module focuses on continuous variables, the concept of marginal distributions is analogous to deriving marginal probability mass functions (pmfs) from joint pmfs in discrete cases. The underlying principle of summing/integrating out unwanted variables remains the same. (Knowledge Level: K3 - Application of similar concepts).
*   **CO2 (Continuous Random Variables):** This entire module directly addresses CO2. The topic of marginal pdfs is a core component of understanding the properties and applications of continuous random variables, particularly within multivariate contexts. (Knowledge Level: K3 - Application of understanding of continuous random variables).
*   **CO3 (Parameter Estimation, Confidence Intervals, Hypothesis Testing):** Understanding marginal distributions is foundational for later statistical inference. For example, when dealing with multivariate data, you might analyze the marginal distributions of individual variables to make inferences about population parameters. (Knowledge Level: K3 - Application of understanding to prerequisite concepts).
*   **CO4 (Random Processes):** Many random processes are described by joint probability distributions of their values at different time points. The concept of marginal distributions is crucial for analyzing the behavior of a random process at a single point in time, or for understanding the joint behavior of processes at different times. (Knowledge Level: K3 - Application of concepts to broader areas).

---

This comprehensive set of notes covers the essential aspects of marginal probability density functions for continuous random variables, their derivation, and their significance in determining independence, aligning with the learning and course outcomes.
