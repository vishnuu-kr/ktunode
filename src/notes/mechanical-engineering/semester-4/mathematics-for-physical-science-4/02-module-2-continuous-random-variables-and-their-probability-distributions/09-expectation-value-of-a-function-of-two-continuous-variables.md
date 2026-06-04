---
title: "Expectation value of a function of two continuous variables."
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ec6"
status: "completed"
scrapedAt: "2026-05-20T17:54:44.638Z"
---
# Mathematics for Physical Science – 4: Continuous Random Variables and Their Probability Distributions

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Expectation Value of a Function of Two Continuous Random Variables

**Learning Outcomes:**

*   Understand the concept of the expectation value of a function of two continuous random variables.
*   Be able to calculate the expectation value of a function of two continuous random variables given their joint probability density function.
*   Apply this concept to solve problems relevant to physical science disciplines.

**Course Outcomes Addressed:**

*   **CO2:** Understand the concept, properties and important models of continuous random variables and to apply in suitable random phenomena. (Knowledge Level: K3) - This topic directly contributes to understanding and applying continuous random variables.

---

### 1. Introduction: From Single to Multiple Random Variables

In Module 2, we've explored single continuous random variables and their properties like expectation (mean) and variance. Now, we extend these concepts to situations involving **two continuous random variables**, say $X$ and $Y$. This is crucial in physical science as many phenomena are influenced by multiple random factors simultaneously.

**Key Concept:** When we have two random variables, their behavior is often described by a **joint probability density function (joint PDF)**, denoted as $f_{XY}(x, y)$. This function describes the probability that $X$ falls in a small interval around $x$ and $Y$ falls in a small interval around $y$.

**Reference:** Devore (9th ed., 2016), Chapter 4, "Joint Probability Distributions". This chapter provides a thorough foundation for understanding joint PDFs of continuous random variables.

---

### 2. Expectation Value of a Function of Two Continuous Random Variables

Suppose we have a function $g(X, Y)$ that depends on two continuous random variables $X$ and $Y$. We are interested in finding the **expected value (or expectation)** of this function, which represents the average value of $g(X, Y)$ over all possible outcomes.

**Definition:** The expectation value of a function $g(X, Y)$ of two continuous random variables $X$ and $Y$ with joint PDF $f_{XY}(x, y)$ is given by:

$$ E[g(X, Y)] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x, y) f_{XY}(x, y) \, dx \, dy $$

This formula is a direct extension of the expectation of a function of a single random variable. Instead of integrating over a single variable, we perform a double integral over the entire domain where $f_{XY}(x, y)$ is non-zero.

**Important Note:** The region of integration is determined by the support of the joint PDF, meaning the domain where $f_{XY}(x, y) > 0$. Often, this region is a finite rectangle, a circular area, or some other bounded region in the $xy$-plane.

---

### 3. Properties of Expectation Values

The expectation operator $E[\cdot]$ is linear, meaning:

*   $E[c \cdot g(X, Y)] = c \cdot E[g(X, Y)]$ for any constant $c$.
*   $E[g_1(X, Y) + g_2(X, Y)] = E[g_1(X, Y)] + E[g_2(X, Y)]$ for any two functions $g_1$ and $g_2$.

These properties simplify calculations, especially when $g(X, Y)$ is a sum of simpler functions.

---

### 4. Examples in Physical Science

Let's illustrate with examples relevant to physical science.

**Example 1: Expected Value of the Sum of Two Variables**

Consider two independent random variables $X$ and $Y$ representing, for instance, the position and momentum of a particle in a simplified model. Suppose their joint PDF is $f_{XY}(x, y)$. We want to find the expectation of their sum, $E[X+Y]$.

Using the linearity of expectation:
$E[X+Y] = E[X] + E[Y]$

Where $E[X]$ and $E[Y]$ can be calculated by marginalizing the joint PDF:
$E[X] = \int_{-\infty}^{\infty} x f_X(x) \, dx$, where $f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dy$.
$E[Y] = \int_{-\infty}^{\infty} y f_Y(y) \, dy$, where $f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx$.

**Example 2: Expected Value of a Product of Two Variables**

Consider two random variables $X$ and $Y$ representing the measurements of two different physical quantities. We are interested in the expectation of their product, $E[XY]$.

$$ E[XY] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy f_{XY}(x, y) \, dx \, dy $$

If $X$ and $Y$ are **independent**, then $f_{XY}(x, y) = f_X(x)f_Y(y)$. In this case, the calculation simplifies significantly:

$$ E[XY] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy f_X(x)f_Y(y) \, dx \, dy $$
$$ E[XY] = \left( \int_{-\infty}^{\infty} x f_X(x) \, dx \right) \left( \int_{-\infty}^{\infty} y f_Y(y) \, dy \right) $$
$$ E[XY] = E[X] E[Y] $$

**Important Point:** The property $E[XY] = E[X]E[Y]$ *only holds if X and Y are independent*. If they are not independent, we must use the double integral formula directly.

**Reference:** Papoulis & Pillai (4th ed., 2002), Chapter 5, "Expectation, Moments, and Characteristic Functions". This chapter provides extensive coverage of expectation, including for functions of multiple random variables.

---

### 5. Covariance and Correlation

A particularly important function of two random variables is $(X - E[X])(Y - E[Y])$. Its expectation is known as the **covariance** between $X$ and $Y$.

**Definition: Covariance**

The covariance of $X$ and $Y$ is defined as:

$$ \text{Cov}(X, Y) = E[(X - E[X])(Y - E[Y])] $$

An alternative and often more convenient formula is:

$$ \text{Cov}(X, Y) = E[XY] - E[X]E[Y] $$

**Interpretation of Covariance:**

*   $\text{Cov}(X, Y) > 0$: $X$ and $Y$ tend to increase or decrease together (positive correlation).
*   $\text{Cov}(X, Y) < 0$: As $X$ increases, $Y$ tends to decrease, and vice versa (negative correlation).
*   $\text{Cov}(X, Y) = 0$: $X$ and $Y$ are uncorrelated. If $X$ and $Y$ are independent, then $\text{Cov}(X, Y) = 0$. However, the converse is not always true: uncorrelated does not necessarily imply independence.

**Definition: Correlation Coefficient**

The correlation coefficient, denoted by $\rho(X, Y)$, is a standardized measure of the linear relationship between $X$ and $Y$:

$$ \rho(X, Y) = \frac{\text{Cov}(X, Y)}{\sqrt{\text{Var}(X) \text{Var}(Y)}} $$

Where $\text{Var}(X) = E[(X - E[X])^2]$ and $\text{Var}(Y) = E[(Y - E[Y])^2]$ are the variances of $X$ and $Y$.

**Reference:** Devore (9th ed., 2016), Chapter 4.6, "Covariance and Correlation". This section dedicates itself to these important measures.

---

### 6. Numerical Integration for Calculation

In many physical science applications, the joint PDF $f_{XY}(x, y)$ might be complex, or the function $g(x, y)$ might be such that direct analytical integration is difficult or impossible. In such cases, **numerical integration techniques** are employed.

**Methods:**

*   **Double Trapezoidal Rule:** Approximates the integral by dividing the region of integration into small rectangles and summing the function values weighted by the area of each rectangle.
*   **Simpson's Rule (for 2D):** Can be extended to two dimensions for more accurate approximations.
*   **Monte Carlo Methods:** Randomly sample points $(x, y)$ according to the joint PDF $f_{XY}(x, y)$ and then average the values of $g(x, y)$ for these sampled points. This is particularly useful for high-dimensional problems or complex integration regions.

**Reference:** Sastry (5th ed., 2012), Chapter 6, "Numerical Integration". This chapter covers various numerical integration techniques that can be adapted for double integrals. Chapra & Canale (8th ed., 2021) also offers extensive coverage of numerical methods for engineers, including integration.

**Example 3: Numerical Calculation of Expectation**

Suppose we have a joint PDF $f_{XY}(x, y) = ke^{-x^2 - y^2}$ for $x, y \in (-\infty, \infty)$, where $k$ is a normalization constant. Let $g(X, Y) = X^2 Y$. We want to calculate $E[X^2 Y]$.

First, we find $k$. Since $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} k e^{-x^2 - y^2} \, dx \, dy = 1$, and $\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}$, we get $k (\sqrt{\pi})(\sqrt{\pi}) = 1$, so $k = 1/\pi$.
Thus, $f_{XY}(x, y) = \frac{1}{\pi} e^{-x^2} e^{-y^2}$.

Now, $E[X^2 Y] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x^2 y \frac{1}{\pi} e^{-x^2} e^{-y^2} \, dx \, dy$.
This integral can be separated due to independence:
$E[X^2 Y] = \frac{1}{\pi} \left( \int_{-\infty}^{\infty} x^2 e^{-x^2} \, dx \right) \left( \int_{-\infty}^{\infty} y e^{-y^2} \, dy \right)$.

The second integral $\int_{-\infty}^{\infty} y e^{-y^2} \, dy = 0$ because the integrand is an odd function. Therefore, $E[X^2 Y] = 0$.

If we had a more complex function, say $g(X, Y) = \sin(XY)$, we would likely need numerical integration.

---

### 7. Practice Questions and Exercises

**Question 1:**
Let $X$ and $Y$ be two continuous random variables with the joint PDF:
$f_{XY}(x, y) = \begin{cases} x+y & \text{for } 0 \le x \le 1, 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$

Calculate $E[XY]$.

**Answer 1:**
$E[XY] = \int_{0}^{1} \int_{0}^{1} xy (x+y) \, dx \, dy$
$E[XY] = \int_{0}^{1} \int_{0}^{1} (x^2y + xy^2) \, dx \, dy$
$E[XY] = \int_{0}^{1} \left[ \frac{x^3y}{3} + \frac{x^2y^2}{2} \right]_{x=0}^{x=1} \, dy$
$E[XY] = \int_{0}^{1} \left( \frac{y}{3} + \frac{y^2}{2} \right) \, dy$
$E[XY] = \left[ \frac{y^2}{6} + \frac{y^3}{6} \right]_{y=0}^{y=1}$
$E[XY] = \frac{1}{6} + \frac{1}{6} = \frac{2}{6} = \frac{1}{3}$

**Question 2:**
Consider two independent random variables $X$ and $Y$ with $f_X(x) = 2e^{-2x}$ for $x \ge 0$ and $f_Y(y) = e^{-y}$ for $y \ge 0$. Calculate $\text{Cov}(X, Y)$.

**Answer 2:**
Since $X$ and $Y$ are independent, $\text{Cov}(X, Y) = E[XY] - E[X]E[Y]$.
Also, due to independence, $E[XY] = E[X]E[Y]$.
Therefore, $\text{Cov}(X, Y) = E[X]E[Y] - E[X]E[Y] = 0$.

*(Self-check: Let's calculate $E[X]$ and $E[Y]$ to be sure.
$E[X] = \int_{0}^{\infty} x (2e^{-2x}) \, dx$. Using integration by parts, $u=x, dv=2e^{-2x}dx$, $du=dx, v=-e^{-2x}$.
$E[X] = [-xe^{-2x}]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-2x}) \, dx = 0 + \int_{0}^{\infty} e^{-2x} \, dx = [-\frac{1}{2}e^{-2x}]_{0}^{\infty} = 0 - (-\frac{1}{2}) = \frac{1}{2}$.
$E[Y] = \int_{0}^{\infty} y e^{-y} \, dy$. Using integration by parts, $u=y, dv=e^{-y}dy$, $du=dy, v=-e^{-y}$.
$E[Y] = [-ye^{-y}]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-y}) \, dy = 0 + \int_{0}^{\infty} e^{-y} \, dy = [-e^{-y}]_{0}^{\infty} = 0 - (-1) = 1$.
Indeed, $E[XY] = E[X]E[Y] = (\frac{1}{2})(1) = \frac{1}{2}$.
And $\text{Cov}(X, Y) = E[XY] - E[X]E[Y] = \frac{1}{2} - (\frac{1}{2})(1) = 0$. )*

**Question 3:**
Suppose the joint PDF of $X$ and $Y$ is $f_{XY}(x, y) = \frac{1}{2\pi} e^{-(x^2+y^2)/2}$ (this is a bivariate standard normal distribution). Calculate $E[X^2+Y^2]$.

**Answer 3:**
$E[X^2+Y^2] = E[X^2] + E[Y^2]$ (by linearity of expectation).
For a standard normal distribution $Z \sim N(0, 1)$, $E[Z] = 0$ and $\text{Var}(Z) = E[Z^2] - (E[Z])^2 = 1$.
So, $E[Z^2] = \text{Var}(Z) + (E[Z])^2 = 1 + 0^2 = 1$.

Since the marginal distributions of $X$ and $Y$ in a bivariate standard normal distribution are standard normal distributions, $E[X^2] = 1$ and $E[Y^2] = 1$.
Therefore, $E[X^2+Y^2] = 1 + 1 = 2$.

*(Alternatively, using the definition directly for $g(X,Y) = X^2+Y^2$:
$E[X^2+Y^2] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} (x^2+y^2) \frac{1}{2\pi} e^{-(x^2+y^2)/2} \, dx \, dy$.
This integral can be split:
$\frac{1}{2\pi} \int_{-\infty}^{\infty} x^2 e^{-x^2/2} \, dx \int_{-\infty}^{\infty} e^{-y^2/2} \, dy + \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-x^2/2} \, dx \int_{-\infty}^{\infty} y^2 e^{-y^2/2} \, dy$.
The integrals of the form $\int_{-\infty}^{\infty} z^2 e^{-z^2/2} \, dz$ are related to the variance of the normal distribution, and $\int_{-\infty}^{\infty} e^{-z^2/2} \, dz = \sqrt{2\pi}$.
The first term: $\frac{1}{2\pi} (\sqrt{2\pi} \cdot 1) (\sqrt{2\pi}) = 1$.
The second term: $\frac{1}{2\pi} (\sqrt{2\pi}) (\sqrt{2\pi} \cdot 1) = 1$.
Total = 1 + 1 = 2.)*

---

### 8. Key Points to Remember

*   The expectation of a function $g(X, Y)$ of two continuous random variables $X$ and $Y$ is calculated using a double integral: $E[g(X, Y)] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x, y) f_{XY}(x, y) \, dx \, dy$.
*   The linearity of expectation applies: $E[ag(X, Y) + bh(X, Y)] = aE[g(X, Y)] + bE[h(X, Y)]$.
*   For independent random variables $X$ and $Y$, $E[XY] = E[X]E[Y]$. This is a powerful simplification.
*   Covariance measures the linear relationship between two random variables: $\text{Cov}(X, Y) = E[XY] - E[X]E[Y]$.
*   If $X$ and $Y$ are independent, $\text{Cov}(X, Y) = 0$. The converse is not necessarily true.
*   Numerical integration methods are essential when analytical integration is not feasible.
*   Understanding the joint PDF $f_{XY}(x, y)$ is fundamental to calculating expectations for functions of two random variables.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 9. Further Reading and Connections to Course Outcomes

This topic directly supports **CO2** by extending the concepts of continuous random variables to a multivariate setting. Understanding the expectation of functions of these variables is a core application.

*   **Devore (9th ed., 2016):** Chapters 4 (Joint Probability Distributions) and 4.6 (Covariance and Correlation) are primary resources.
*   **Sastry (5th ed., 2012):** Chapter 6 (Numerical Integration) is vital for computational aspects.
*   **Papoulis & Pillai (4th ed., 2002):** Chapter 5 provides a rigorous theoretical treatment of expectations.
*   **Ross (6th ed., 2020):** Chapters on joint distributions and their properties will reinforce these concepts.

By mastering the expectation of functions of two continuous random variables, you gain a powerful tool for modeling and analyzing complex systems in physical science where multiple random factors interact.