---
title: "Expectation value of a function of two continuous variables."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4c8"
status: "completed"
scrapedAt: "2026-05-23T17:50:46.442Z"
---
# Mathematics for Electrical Science – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Expectation Value of a Function of Two Continuous Variables

---

### 1. Introduction and Learning Outcomes

This topic delves into the concept of the expected value of a function involving two continuous random variables. This is a fundamental concept in probability and statistics with wide applications in electrical science, particularly in analyzing systems with multiple random inputs or parameters.

**Learning Outcomes:**

*   Understand the definition and calculation of the expectation of a function of two continuous random variables.
*   Apply the concept to practical scenarios in electrical engineering.
*   Relate this topic to the broader understanding of continuous random variables and their probability distributions.

---

### 2. Key Concepts and Definitions

#### 2.1 Joint Probability Density Function (JPDF) for Two Continuous Random Variables

Before discussing functions of two variables, we need to understand their joint behavior. If $X$ and $Y$ are two continuous random variables, their **joint probability density function (JPDF)**, denoted by $f_{XY}(x, y)$, describes the probability distribution of the pair $(X, Y)$.

*   **Properties of JPDF:**
    *   $f_{XY}(x, y) \ge 0$ for all $x, y$.
    *   $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx \, dy = 1$.

**(Reference: Devore, Chapter 4; Veerarajan, Chapter 6)**

#### 2.2 Expectation of a Function of Two Continuous Random Variables

Let $g(X, Y)$ be a function of two continuous random variables $X$ and $Y$. The **expectation (or expected value)** of $g(X, Y)$, denoted by $E[g(X, Y)]$ or $\mu_{g(X,Y)}$, is given by the double integral of $g(x, y)$ multiplied by their joint probability density function $f_{XY}(x, y)$ over all possible values of $X$ and $Y$:

$$
E[g(X, Y)] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x, y) \, f_{XY}(x, y) \, dx \, dy
$$

This formula is a direct extension of the expectation of a function of a single continuous random variable. The expectation is essentially a weighted average of the possible values of $g(X, Y)$, where the weights are given by the joint probability density.

**(Reference: Devore, Chapter 4; Veerarajan, Chapter 6; Ross, Chapter 5)**

#### 2.3 Important Properties of Expectation for Two Variables

*   **Linearity of Expectation:** For constants $a$ and $b$, and functions $g_1(X, Y)$ and $g_2(X, Y)$:
    $E[a \cdot g_1(X, Y) + b \cdot g_2(X, Y)] = a \cdot E[g_1(X, Y)] + b \cdot E[g_2(X, Y)]$

*   **Expectation of a Constant:** For a constant $c$:
    $E[c] = c$

*   **Expectation of X and Y:**
    $E[X] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x \, f_{XY}(x, y) \, dx \, dy$
    $E[Y] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} y \, f_{XY}(x, y) \, dx \, dy$

    These are also known as the means of $X$ and $Y$, respectively. They can also be obtained from the marginal density functions:
    $f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dy$
    $f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx$
    $E[X] = \int_{-\infty}^{\infty} x \, f_X(x) \, dx$
    $E[Y] = \int_{-\infty}^{\infty} y \, f_Y(y) \, dy$

**(Reference: Devore, Chapter 4; Veerarajan, Chapter 6; Papoulis & Pillai, Chapter 5)**

#### 2.4 Covariance and Correlation

While not directly calculating $E[g(X,Y)]$, understanding covariance is crucial as it's a specific function of $X$ and $Y$.

*   **Covariance:** The covariance between $X$ and $Y$ measures the degree of linear relationship between them.
    $Cov(X, Y) = E[(X - E[X])(Y - E[Y])]$
    An alternative and often more useful formula is:
    $Cov(X, Y) = E[XY] - E[X]E[Y]$

    To calculate $Cov(X, Y)$, we need to compute $E[XY]$, which is a specific case of $E[g(X, Y)]$ where $g(X, Y) = XY$.
    $E[XY] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x y \, f_{XY}(x, y) \, dx \, dy$

*   **Correlation Coefficient:** The correlation coefficient $\rho(X, Y)$ is a standardized measure of covariance:
    $\rho(X, Y) = \frac{Cov(X, Y)}{\sigma_X \sigma_Y}$, where $\sigma_X$ and $\sigma_Y$ are the standard deviations of $X$ and $Y$.

**(Reference: Devore, Chapter 4; Veerarajan, Chapter 6; Ross, Chapter 5)**

#### 2.5 Independence of Random Variables

If $X$ and $Y$ are independent continuous random variables, then their joint PDF is the product of their marginal PDFs: $f_{XY}(x, y) = f_X(x) f_Y(y)$.

*   **Crucial Implication for Expectation:** If $X$ and $Y$ are independent, then the expectation of their product is the product of their expectations:
    $E[XY] = E[X]E[Y]$

    This significantly simplifies calculations for independent variables.

**(Reference: Devore, Chapter 4; Veerarajan, Chapter 6; Anderson, Timo, Benedek, Chapter 7)**

---

### 3. Examples in Electrical Science

The concept of $E[g(X, Y)]$ is vital for analyzing electrical systems where multiple parameters are subject to random fluctuations.

**Example 1: Power Dissipation in a Resistor**

Consider a resistor with resistance $R$ and a voltage across it $V$. The power dissipated is $P = \frac{V^2}{R}$. If both $V$ and $R$ are random variables, we might want to find the expected power.

Let $V$ and $R$ be continuous random variables with joint PDF $f_{VR}(v, r)$. We want to find $E[P] = E[\frac{V^2}{R}]$.

$$
E\left[\frac{V^2}{R}\right] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \frac{v^2}{r} \, f_{VR}(v, r) \, dv \, dr
$$

**Example 2: Signal-to-Noise Ratio (SNR)**

In communication systems, the signal power ($S$) and noise power ($N$) are often modeled as random variables. The SNR is defined as $SNR = \frac{S}{N}$. We might be interested in the expected SNR.

Let $S$ and $N$ be continuous random variables with joint PDF $f_{SN}(s, n)$.

$$
E\left[\frac{S}{N}\right] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \frac{s}{n} \, f_{SN}(s, n) \, ds \, dn
$$

**Example 3: Error Analysis**

Suppose we have a system whose output $O$ depends on two random inputs $X$ and $Y$ according to $O = g(X, Y)$. For instance, in a circuit, the output voltage might depend on component tolerances. If $g(X, Y) = 2X + 3Y - 5$, we can find the expected output:

$E[O] = E[2X + 3Y - 5]$
Using linearity:
$E[O] = 2E[X] + 3E[Y] - E[5]$
$E[O] = 2E[X] + 3E[Y] - 5$

Here, $E[X]$ and $E[Y]$ would be the expected values of the input components.

**(Reference: Palaniammal, Chapter 5; Ross, Chapter 5)**

---

### 4. Practice Questions and Exercises

**Question 1:**
Let $X$ and $Y$ be two continuous random variables with the joint probability density function:
$f_{XY}(x, y) = \begin{cases} 6xy^2 & \text{for } 0 < x < 1, 0 < y < 1 \\ 0 & \text{otherwise} \end{cases}$
Find $E[XY]$.

**Answer:**
We need to calculate $E[XY] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy \, f_{XY}(x, y) \, dx \, dy$.
Given the support of the JPDF:
$E[XY] = \int_{0}^{1} \int_{0}^{1} xy (6xy^2) \, dx \, dy$
$E[XY] = \int_{0}^{1} \int_{0}^{1} 6x^2y^3 \, dx \, dy$

First, integrate with respect to $x$:
$\int_{0}^{1} 6x^2y^3 \, dx = \left[ 2x^3y^3 \right]_{0}^{1} = 2(1)^3y^3 - 2(0)^3y^3 = 2y^3$

Now, integrate the result with respect to $y$:
$\int_{0}^{1} 2y^3 \, dy = \left[ \frac{2y^4}{4} \right]_{0}^{1} = \left[ \frac{y^4}{2} \right]_{0}^{1} = \frac{1^4}{2} - \frac{0^4}{2} = \frac{1}{2}$

So, $E[XY] = \frac{1}{2}$.

**Question 2:**
Let $X$ and $Y$ be independent continuous random variables with $E[X] = 2$ and $E[Y] = 3$. Find $E[X+Y]$ and $E[XY]$.

**Answer:**
Using the linearity of expectation:
$E[X+Y] = E[X] + E[Y] = 2 + 3 = 5$.

Since $X$ and $Y$ are independent, the expectation of their product is the product of their expectations:
$E[XY] = E[X]E[Y] = 2 \times 3 = 6$.

**Question 3:**
Consider a system where the output voltage $V_{out}$ is given by $V_{out} = aX + bY + c$, where $X$ and $Y$ are continuous random variables, and $a$, $b$, and $c$ are constants. If $E[X] = \mu_X$, $E[Y] = \mu_Y$, and $E[c] = c$, find $E[V_{out}]$.

**Answer:**
Using the linearity of expectation:
$E[V_{out}] = E[aX + bY + c]$
$E[V_{out}] = E[aX] + E[bY] + E[c]$
$E[V_{out}] = aE[X] + bE[Y] + c$
$E[V_{out}] = a\mu_X + b\mu_Y + c$.

**Question 4:**
Let $X$ and $Y$ be continuous random variables with joint PDF $f_{XY}(x, y) = \frac{1}{2\pi}e^{-\frac{1}{2}(x^2+y^2)}$. This is the standard bivariate normal distribution. Find $E[X^2+Y^2]$.

**Answer:**
This JPDF represents two independent standard normal random variables $X$ and $Y$ ($X \sim N(0,1), Y \sim N(0,1)$).
We need $E[X^2+Y^2]$. By linearity of expectation:
$E[X^2+Y^2] = E[X^2] + E[Y^2]$.

For a standard normal random variable $Z$, $E[Z^2] = Var(Z) + (E[Z])^2$.
Since $Z \sim N(0,1)$, $E[Z] = 0$ and $Var(Z) = 1$.
Therefore, $E[Z^2] = 1 + 0^2 = 1$.

Since both $X$ and $Y$ are standard normal random variables, $E[X^2] = 1$ and $E[Y^2] = 1$.
$E[X^2+Y^2] = 1 + 1 = 2$.

Alternatively, we can compute directly:
$E[X^2+Y^2] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} (x^2+y^2) \frac{1}{2\pi}e^{-\frac{1}{2}(x^2+y^2)} \, dx \, dy$
This integral can be evaluated using polar coordinates, or by recognizing the components. For example, for $E[X^2]$:
$E[X^2] = \int_{-\infty}^{\infty} x^2 \left(\int_{-\infty}^{\infty} \frac{1}{2\pi}e^{-\frac{1}{2}(x^2+y^2)} \, dy\right) \, dx$
The inner integral is $\int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}y^2} \frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}x^2} \, dy = \frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}x^2} \int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}y^2} \, dy$.
The integral $\int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}y^2} \, dy$ is the integral of a standard normal PDF, which equals 1.
So, the inner integral is $\frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}x^2}$, which is the PDF of $X$.
Thus, $E[X^2] = \int_{-\infty}^{\infty} x^2 \frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}x^2} \, dx$, which is known to be 1 for a standard normal. Similarly for $E[Y^2]$.

---

### 5. Important Points to Remember

*   The expectation of a function $g(X, Y)$ is found by integrating $g(x, y) f_{XY}(x, y)$ over the entire domain of $X$ and $Y$.
*   The linearity of expectation ($E[aX + bY + c] = aE[X] + bE[Y] + c$) is a powerful tool for simplifying calculations.
*   If $X$ and $Y$ are independent, then $E[XY] = E[X]E[Y]$. This is a special case and does *not* hold if $X$ and $Y$ are dependent.
*   Covariance and correlation are specific functions of $X$ and $Y$ ($g(X,Y) = (X-E[X])(Y-E[Y])$ and its normalized version) whose calculation relies on understanding $E[XY]$.
*   In electrical science, this concept is crucial for analyzing the average behavior or performance of systems with multiple random inputs or parameters, such as power dissipation, signal-to-noise ratio, or system output with component variations.

---

### 6. Alignment with Course Outcomes

*   **CO1 (Discrete Random Variables):** While this topic focuses on continuous variables, the underlying principle of expectation as a weighted average is shared with discrete random variables. The structure of the calculation ($E[g(X)] = \sum g(x) P(x)$ for discrete) mirrors the continuous case ($E[g(X)] = \int g(x) f(x) dx$).
*   **CO2 (Continuous Random Variables):** This topic is a direct extension of the concepts learned about continuous random variables. It builds upon understanding JPDFs and how to calculate expected values of functions of these variables, applying them to practical scenarios. (Knowledge Level: K3 - Applying the concept).
*   **CO3 (Parameter Estimation & Hypothesis Testing):** Understanding expectations is fundamental for parameter estimation (e.g., sample mean as an estimator for population mean, which is an expectation) and forming the basis for hypothesis testing. While not directly covered here, the foundational knowledge of $E[X]$ and $E[Y]$ is crucial.
*   **CO4 (Random Processes):** Random processes are collections of random variables indexed by time or space. Understanding the expectation of functions of multiple random variables is a stepping stone to understanding the statistical properties of random processes, such as their mean function $E[X(t)]$ and autocovariance function $Cov(X(t_1), X(t_2))$. (Knowledge Level: K3 - Understanding applications in signal processing implies this).

---

This concludes the study notes for the expectation value of a function of two continuous variables. Remember to practice the integration techniques and understand the conditions under which simplifications (like independence) can be applied.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
