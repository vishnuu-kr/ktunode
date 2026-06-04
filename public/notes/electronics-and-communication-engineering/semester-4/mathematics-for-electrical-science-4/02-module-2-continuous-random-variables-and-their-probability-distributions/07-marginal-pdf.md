---
title: "Marginal pdf"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4c6"
status: "completed"
scrapedAt: "2026-05-23T17:50:45.110Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Marginal Probability Density Function (Marginal PDF)

---

### 1. Introduction and Motivation

In electrical science, we often encounter situations where multiple random variables are involved and we need to understand the behavior of each individual variable, irrespective of the values of other variables. For example, in a communication system, the signal strength and noise level might be modeled as two random variables. We might be interested in the probability distribution of the signal strength alone, without considering the noise. This is where the concept of marginal probability density function (marginal PDF) becomes crucial.

This topic builds upon the understanding of joint probability distributions for continuous random variables, a key aspect of CO2.

---

### 2. Key Concepts and Definitions

#### 2.1. Joint Probability Density Function (Joint PDF)

Before defining marginal PDF, let's recall the concept of a joint PDF for two continuous random variables, $X$ and $Y$.

*   **Definition:** A function $f_{XY}(x, y)$ is the joint PDF of continuous random variables $X$ and $Y$ if:
    1.  $f_{XY}(x, y) \ge 0$ for all $x, y \in \mathbb{R}$.
    2.  $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx \, dy = 1$.

*   **Interpretation:** The probability that $(X, Y)$ falls within a region $A$ in the $xy$-plane is given by the double integral of the joint PDF over that region: $P((X, Y) \in A) = \iint_A f_{XY}(x, y) \, dx \, dy$.

*   **Textbook Reference:** Devore (9th ed.) Chapter 5.2, Veerarajan (3rd ed.) Chapter 6.1.

#### 2.2. Marginal Probability Density Function (Marginal PDF)

The marginal PDF of a single random variable, say $X$, from a joint distribution of multiple random variables ($X, Y, ...$) is obtained by "summing out" or "integrating out" the probabilities associated with the other random variables.

*   **Definition (for two continuous random variables X and Y):**
    The marginal PDF of $X$, denoted by $f_X(x)$, is obtained by integrating the joint PDF $f_{XY}(x, y)$ with respect to $Y$ over its entire range:

    $$f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dy$$

    Similarly, the marginal PDF of $Y$, denoted by $f_Y(y)$, is obtained by integrating the joint PDF $f_{XY}(x, y)$ with respect to $X$ over its entire range:

    $$f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx$$

*   **Interpretation:** The marginal PDF $f_X(x)$ describes the probability distribution of $X$ alone, without any regard to the value of $Y$. It's as if we are considering the "projection" of the joint probability distribution onto the axis of $X$.

*   **Textbook Reference:** Devore (9th ed.) Chapter 5.2, Veerarajan (3rd ed.) Chapter 6.1.

#### 2.3. Properties of Marginal PDFs

The marginal PDFs of a joint distribution must satisfy the fundamental properties of any probability density function:

1.  **Non-negativity:** $f_X(x) \ge 0$ for all $x$.
2.  **Normalization:** $\int_{-\infty}^{\infty} f_X(x) \, dx = 1$.

These properties are derived from the properties of the joint PDF.

*   **Proof of Normalization (for $f_X(x)$):**
    Since $f_{XY}(x, y)$ is a valid joint PDF, we know that $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx \, dy = 1$.
    Now, let's consider the integral of $f_X(x)$:
    $\int_{-\infty}^{\infty} f_X(x) \, dx = \int_{-\infty}^{\infty} \left( \int_{-\infty}^{\infty} f_{XY}(x, y) \, dy \right) \, dx$
    By changing the order of integration (which is permissible for valid joint PDFs), we get:
    $\int_{-\infty}^{\infty} f_X(x) \, dx = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx \, dy = 1$.

*   **Textbook Reference:** Devore (9th ed.) Chapter 5.2, Veerarajan (3rd ed.) Chapter 6.1.

---

### 3. Calculating Marginal PDFs from Joint PDFs

The process involves setting up the correct integral based on the given joint PDF and its domain.

#### 3.1. Examples

**Example 1: Rectangular Region**

Suppose the joint PDF of $X$ and $Y$ is given by:
$f_{XY}(x, y) = c$ for $0 < x < 1$ and $0 < y < 2$, and $f_{XY}(x, y) = 0$ otherwise.

*   **Step 1: Find the constant $c$.**
    Since the total probability must be 1:
    $\int_{0}^{1} \int_{0}^{2} c \, dy \, dx = 1$
    $\int_{0}^{1} [cy]_{0}^{2} \, dx = 1$
    $\int_{0}^{1} 2c \, dx = 1$
    $[2cx]_{0}^{1} = 1$
    $2c = 1 \implies c = \frac{1}{2}$.
    So, $f_{XY}(x, y) = \frac{1}{2}$ for $0 < x < 1$ and $0 < y < 2$.

*   **Step 2: Calculate the marginal PDF of X ($f_X(x)$).**
    We integrate $f_{XY}(x, y)$ with respect to $y$ over its range (0 to 2):
    $f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dy = \int_{0}^{2} \frac{1}{2} \, dy$ (for $0 < x < 1$)
    $f_X(x) = \left[ \frac{1}{2} y \right]_{0}^{2} = \frac{1}{2}(2) - \frac{1}{2}(0) = 1$.
    So, $f_X(x) = 1$ for $0 < x < 1$, and $f_X(x) = 0$ otherwise. (This is a Uniform distribution on (0,1)).

*   **Step 3: Calculate the marginal PDF of Y ($f_Y(y)$).**
    We integrate $f_{XY}(x, y)$ with respect to $x$ over its range (0 to 1):
    $f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx = \int_{0}^{1} \frac{1}{2} \, dx$ (for $0 < y < 2$)
    $f_Y(y) = \left[ \frac{1}{2} x \right]_{0}^{1} = \frac{1}{2}(1) - \frac{1}{2}(0) = \frac{1}{2}$.
    So, $f_Y(y) = \frac{1}{2}$ for $0 < y < 2$, and $f_Y(y) = 0$ otherwise. (This is a Uniform distribution on (0,2)).

*   **Check:**
    $\int_{-\infty}^{\infty} f_X(x) \, dx = \int_{0}^{1} 1 \, dx = [x]_{0}^{1} = 1$.
    $\int_{-\infty}^{\infty} f_Y(y) \, dy = \int_{0}^{2} \frac{1}{2} \, dy = \left[ \frac{1}{2} y \right]_{0}^{2} = 1$.

**Example 2: Triangular Region**

Suppose the joint PDF of $X$ and $Y$ is given by:
$f_{XY}(x, y) = 2$ for $0 < x < 1$ and $0 < y < x$, and $f_{XY}(x, y) = 0$ otherwise.

*   **Step 1: Verify the joint PDF is valid (constant is already given as 2).**
    The region is a triangle with vertices (0,0), (1,0), and (1,1). The area of this region is $\frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 1 \times 1 = \frac{1}{2}$.
    The integral of the PDF over the region is $\int_{0}^{1} \int_{0}^{x} 2 \, dy \, dx = \int_{0}^{1} [2y]_{0}^{x} \, dx = \int_{0}^{1} 2x \, dx = [x^2]_{0}^{1} = 1$. The joint PDF is valid.

*   **Step 2: Calculate the marginal PDF of X ($f_X(x)$).**
    The range of $x$ is $0 < x < 1$. For a given $x$, the range of $y$ is $0 < y < x$.
    $f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dy = \int_{0}^{x} 2 \, dy$ (for $0 < x < 1$)
    $f_X(x) = [2y]_{0}^{x} = 2x$.
    So, $f_X(x) = 2x$ for $0 < x < 1$, and $f_X(x) = 0$ otherwise. (This is a triangular distribution).

*   **Step 3: Calculate the marginal PDF of Y ($f_Y(y)$).**
    The range of $y$ is $0 < y < 1$. For a given $y$, the range of $x$ is from $y$ to 1 (because $y < x$ and $x < 1$).
    $f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx = \int_{y}^{1} 2 \, dx$ (for $0 < y < 1$)
    $f_Y(y) = [2x]_{y}^{1} = 2(1) - 2(y) = 2 - 2y$.
    So, $f_Y(y) = 2 - 2y$ for $0 < y < 1$, and $f_Y(y) = 0$ otherwise. (This is also a triangular distribution, but oriented differently).

*   **Check:**
    $\int_{-\infty}^{\infty} f_X(x) \, dx = \int_{0}^{1} 2x \, dx = [x^2]_{0}^{1} = 1$.
    $\int_{-\infty}^{\infty} f_Y(y) \, dy = \int_{0}^{1} (2 - 2y) \, dy = [2y - y^2]_{0}^{1} = (2 - 1) - 0 = 1$.

**Example 3: Exponentially Distributed Joint PDF**

Suppose the joint PDF of $X$ and $Y$ is given by:
$f_{XY}(x, y) = e^{-(x+y)}$ for $x > 0$ and $y > 0$, and $f_{XY}(x, y) = 0$ otherwise.
This represents the case where $X$ and $Y$ are independent and exponentially distributed with parameter $\lambda=1$.

*   **Step 1: Verify the joint PDF is valid.**
    $\int_{0}^{\infty} \int_{0}^{\infty} e^{-(x+y)} \, dy \, dx = \int_{0}^{\infty} e^{-x} \left( \int_{0}^{\infty} e^{-y} \, dy \right) \, dx$
    The inner integral: $\int_{0}^{\infty} e^{-y} \, dy = [-e^{-y}]_{0}^{\infty} = 0 - (-1) = 1$.
    So, the total integral is $\int_{0}^{\infty} e^{-x} (1) \, dx = [-e^{-x}]_{0}^{\infty} = 0 - (-1) = 1$. The joint PDF is valid.

*   **Step 2: Calculate the marginal PDF of X ($f_X(x)$).**
    For $x > 0$, the range of $y$ is $y > 0$.
    $f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dy = \int_{0}^{\infty} e^{-(x+y)} \, dy$ (for $x > 0$)
    $f_X(x) = \int_{0}^{\infty} e^{-x} e^{-y} \, dy = e^{-x} \int_{0}^{\infty} e^{-y} \, dy$
    Since $\int_{0}^{\infty} e^{-y} \, dy = 1$, we have $f_X(x) = e^{-x}$.
    So, $f_X(x) = e^{-x}$ for $x > 0$, and $f_X(x) = 0$ otherwise. (This is an Exponential distribution with $\lambda=1$).

*   **Step 3: Calculate the marginal PDF of Y ($f_Y(y)$).**
    Similarly, for $y > 0$, the range of $x$ is $x > 0$.
    $f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx = \int_{0}^{\infty} e^{-(x+y)} \, dx$ (for $y > 0$)
    $f_Y(y) = \int_{0}^{\infty} e^{-y} e^{-x} \, dx = e^{-y} \int_{0}^{\infty} e^{-x} \, dx$
    Since $\int_{0}^{\infty} e^{-x} \, dx = 1$, we have $f_Y(y) = e^{-y}$.
    So, $f_Y(y) = e^{-y}$ for $y > 0$, and $f_Y(y) = 0$ otherwise. (This is also an Exponential distribution with $\lambda=1$).

*   **Observation:** Since $f_{XY}(x, y) = f_X(x) f_Y(y)$, $X$ and $Y$ are independent in this case.

*   **Textbook Reference:** Devore (9th ed.) Chapter 5.2, Veerarajan (3rd ed.) Chapter 6.1.

---

### 4. Relationship with Independence

If two continuous random variables $X$ and $Y$ are independent, then their joint PDF can be factored into the product of their marginal PDFs:

$f_{XY}(x, y) = f_X(x) f_Y(y)$ for all $x, y$.

In such cases, finding the marginal PDFs is straightforward if the joint PDF is given. Conversely, if a joint PDF can be factored into two functions, one depending only on $x$ and the other only on $y$, and if these functions are valid PDFs (i.e., non-negative and integrate to 1), then the variables are independent.

*   **Theorem:** If $X$ and $Y$ are independent, then $f_{XY}(x, y) = f_X(x) f_Y(y)$.
*   **Converse:** If $f_{XY}(x, y)$ can be factored into $g(x)h(y)$ such that $g(x) \ge 0$, $h(y) \ge 0$, $\int_{-\infty}^{\infty} g(x) \, dx = 1$, and $\int_{-\infty}^{\infty} h(y) \, dy = 1$, then $X$ and $Y$ are independent, and $f_X(x) = g(x)$, $f_Y(y) = h(y)$.

*   **Textbook Reference:** Devore (9th ed.) Chapter 5.2, Veerarajan (3rd ed.) Chapter 6.1.

---

### 5. Extension to More Than Two Random Variables

The concept of marginal PDF extends to cases with more than two continuous random variables. For a joint PDF $f_{XYZ}(x, y, z)$ of three random variables $X, Y, Z$:

*   **Marginal PDF of X:** $f_X(x) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XYZ}(x, y, z) \, dy \, dz$
*   **Marginal PDF of Y:** $f_Y(y) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XYZ}(x, y, z) \, dx \, dz$
*   **Marginal PDF of Z:** $f_Z(z) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XYZ}(x, y, z) \, dx \, dy$

And so on for any number of variables. The principle remains the same: integrate out the variables you are not interested in.

*   **Textbook Reference:** Papoulis & Pillai (4th ed.) Chapter 3, Ross (6th ed.) Chapter 4.

---

### 6. Relevance to Electrical Science (CO2, CO4)

Understanding marginal PDFs is crucial in various electrical engineering applications:

*   **Signal Processing:** If the input signal and noise are modeled as joint random processes, the marginal PDF of the signal allows us to analyze its characteristics independent of the noise. For example, understanding the amplitude distribution of a signal.
*   **Communication Systems:** Analyzing the reliability of a communication channel might involve the joint distribution of signal-to-noise ratio (SNR) and error probability. The marginal distribution of SNR can inform us about the typical SNR performance.
*   **Control Systems:** In systems with multiple uncertain parameters, the marginal distribution of each parameter helps in sensitivity analysis and robust design.
*   **Reliability Engineering:** If the lifetimes of different components in an electrical system are jointly distributed, the marginal lifetime distribution of a single component is essential for assessing its reliability.

This topic directly supports **CO2** by enabling the description and application of continuous random variables, specifically by deriving their individual distributions from joint ones. It also contributes to **CO4** by providing tools to analyze the behavior of individual components within a larger random process.

---

### 7. Practice Questions/Exercises

**Question 1:**
The joint PDF of two continuous random variables $X$ and $Y$ is given by:
$f_{XY}(x, y) = 6xy^2$ for $0 < x < 1$ and $0 < y < 1$, and $f_{XY}(x, y) = 0$ otherwise.

(a) Find the marginal PDF of $X$, $f_X(x)$.
(b) Find the marginal PDF of $Y$, $f_Y(y)$.
(c) Are $X$ and $Y$ independent? Justify your answer.

**Answer 1:**
(a) To find $f_X(x)$, we integrate $f_{XY}(x, y)$ with respect to $y$ over its range (0 to 1):
$f_X(x) = \int_{0}^{1} 6xy^2 \, dy$ for $0 < x < 1$.
$f_X(x) = 6x \int_{0}^{1} y^2 \, dy = 6x \left[ \frac{y^3}{3} \right]_{0}^{1} = 6x \left( \frac{1}{3} - 0 \right) = 2x$.
So, $f_X(x) = 2x$ for $0 < x < 1$, and $f_X(x) = 0$ otherwise.

(b) To find $f_Y(y)$, we integrate $f_{XY}(x, y)$ with respect to $x$ over its range (0 to 1):
$f_Y(y) = \int_{0}^{1} 6xy^2 \, dx$ for $0 < y < 1$.
$f_Y(y) = 6y^2 \int_{0}^{1} x \, dx = 6y^2 \left[ \frac{x^2}{2} \right]_{0}^{1} = 6y^2 \left( \frac{1}{2} - 0 \right) = 3y^2$.
So, $f_Y(y) = 3y^2$ for $0 < y < 1$, and $f_Y(y) = 0$ otherwise.

(c) To check for independence, we see if $f_{XY}(x, y) = f_X(x) f_Y(y)$.
$f_X(x) f_Y(y) = (2x)(3y^2) = 6xy^2$.
This is equal to $f_{XY}(x, y)$ for $0 < x < 1$ and $0 < y < 1$.
Therefore, $X$ and $Y$ are independent.

**Question 2:**
Let $X$ and $Y$ be continuous random variables with the joint PDF:
$f_{XY}(x, y) = \frac{1}{2\pi} e^{-\frac{1}{2}(x^2+y^2)}$ for $-\infty < x < \infty$ and $-\infty < y < \infty$.

(a) Find the marginal PDF of $X$, $f_X(x)$.
(b) Find the marginal PDF of $Y$, $f_Y(y)$.
(c) What distributions do $X$ and $Y$ follow?

**Answer 2:**
This joint PDF is from a bivariate normal distribution with mean vector (0,0) and covariance matrix $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$. In this case, the variables are independent.

(a) To find $f_X(x)$, we integrate $f_{XY}(x, y)$ with respect to $y$ over its entire range $(-\infty, \infty)$:
$f_X(x) = \int_{-\infty}^{\infty} \frac{1}{2\pi} e^{-\frac{1}{2}(x^2+y^2)} \, dy$
$f_X(x) = \frac{1}{2\pi} e^{-\frac{1}{2}x^2} \int_{-\infty}^{\infty} e^{-\frac{1}{2}y^2} \, dy$

We know that the integral $\int_{-\infty}^{\infty} e^{-\frac{1}{2}z^2} \, dz = \sqrt{2\pi}$ (this is related to the Gaussian integral and the normalization constant for a standard normal distribution).
So, $f_X(x) = \frac{1}{2\pi} e^{-\frac{1}{2}x^2} (\sqrt{2\pi}) = \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}x^2}$.

(b) Similarly, to find $f_Y(y)$, we integrate $f_{XY}(x, y)$ with respect to $x$ over its entire range $(-\infty, \infty)$:
$f_Y(y) = \int_{-\infty}^{\infty} \frac{1}{2\pi} e^{-\frac{1}{2}(x^2+y^2)} \, dx$
$f_Y(y) = \frac{1}{2\pi} e^{-\frac{1}{2}y^2} \int_{-\infty}^{\infty} e^{-\frac{1}{2}x^2} \, dx$
$f_Y(y) = \frac{1}{2\pi} e^{-\frac{1}{2}y^2} (\sqrt{2\pi}) = \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}y^2}$.

(c) Both $f_X(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}x^2}$ and $f_Y(y) = \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}y^2}$ are the probability density functions of the **Standard Normal Distribution** (mean 0, variance 1).

---

### 8. Important Points to Remember

*   The marginal PDF of a continuous random variable is obtained by integrating the joint PDF of all variables with respect to all other variables.
*   The marginal PDF of $X$, $f_X(x)$, describes the probability distribution of $X$ alone.
*   If $X$ and $Y$ are independent, their joint PDF $f_{XY}(x, y)$ can be factored into $f_X(x) f_Y(y)$.
*   The marginal PDFs must always satisfy the properties of a valid PDF (non-negative and integrate to 1).
*   The process of finding marginal PDFs is a fundamental step in analyzing the behavior of individual variables within a multivariate system.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 9. References and Further Reading

*   **Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning.** (Chapter 5.2: Independence, Joint and Marginal Probability Distributions)
*   **Veerarajan, T. (2008). *Probability, Statistics and Random Processes* (3rd ed.). The McGraw-Hill.** (Chapter 6.1: Joint Probability Distributions of Continuous Random Variables, Marginal Probability Distributions)
*   **Papoulis, A., & Pillai, S. U. (2002). *Probability, Random Variables and Stochastic Processes* (4th ed.). McGraw Hill.** (Provides a more rigorous and advanced treatment).
*   **Ross, S. M. (2020). *Introduction to Probability and Statistics for Engineers and Scientists* (6th ed.). Academic Press.** (Similar coverage to Devore, with practical examples).

---