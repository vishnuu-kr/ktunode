---
title: "Expectation value of a function of two continuous variables."
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810930"
status: "completed"
scrapedAt: "2026-05-20T18:46:05.827Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Expectation Value of a Function of Two Continuous Variables

---

### 1. Introduction

In physical science, we often deal with phenomena that can be described by multiple random variables. Understanding the expected value of a function of these variables is crucial for predicting the average behavior of these systems. This topic extends the concept of expectation value from single continuous random variables to functions involving two continuous random variables.

---

### 2. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Define** the expectation value of a function of two continuous random variables.
*   **Calculate** the expectation value of a function of two continuous random variables given their joint probability density function (PDF).
*   **Apply** the concept of expectation value of a function of two continuous variables to solve problems in physical science.

---

### 3. Key Concepts and Definitions

#### 3.1. Joint Probability Density Function (PDF) for Two Continuous Random Variables

Let $X$ and $Y$ be two continuous random variables. Their joint behavior is described by a joint probability density function, denoted by $f_{XY}(x, y)$. The joint PDF satisfies the following properties:

*   $f_{XY}(x, y) \ge 0$ for all $x, y$.
*   $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XY}(x, y) \, dx \, dy = 1$.

The probability that $X$ falls within an interval $[a, b]$ and $Y$ falls within an interval $[c, d]$ is given by:
$$P(a \le X \le b, c \le Y \le d) = \int_{a}^{b} \int_{c}^{d} f_{XY}(x, y) \, dx \, dy$$

#### 3.2. Expectation Value of a Function of Two Continuous Variables

Given two continuous random variables $X$ and $Y$ with joint PDF $f_{XY}(x, y)$, and a function $g(X, Y)$, the expectation value of $g(X, Y)$, denoted by $E[g(X, Y)]$ or $E[g]$, is defined as:

$$E[g(X, Y)] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x, y) f_{XY}(x, y) \, dx \, dy$$

This formula is a direct extension of the expectation value for a single continuous random variable. We integrate the function $g(x, y)$ weighted by the joint probability density of $X$ and $Y$ over their entire domain.

**Important Note:** The integration is performed with respect to both $x$ and $y$. The limits of integration should cover the entire support of the joint PDF.

#### 3.3. Linearity of Expectation

A fundamental property of expectation values is linearity. For constants $a$ and $b$, and functions $g_1(X, Y)$ and $g_2(X, Y)$:

*   $E[a \cdot g(X, Y)] = a \cdot E[g(X, Y)]$
*   $E[g_1(X, Y) + g_2(X, Y)] = E[g_1(X, Y)] + E[g_2(X, Y)]$
*   Combining these: $E[a \cdot g_1(X, Y) + b \cdot g_2(X, Y)] = a \cdot E[g_1(X, Y)] + b \cdot E[g_2(X, Y)]$

This property is extremely useful in simplifying calculations.

#### 3.4. Expectation of Individual Variables (Marginal Expectation)

The expectation of $X$, denoted by $E[X]$, can be obtained by integrating $x$ against its marginal PDF $f_X(x)$:
$$E[X] = \int_{-\infty}^{\infty} x f_X(x) \, dx$$
Similarly, the expectation of $Y$, denoted by $E[Y]$, is:
$$E[Y] = \int_{-\infty}^{\infty} y f_Y(y) \, dy$$

Alternatively, these can be computed from the joint PDF:
$$E[X] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x f_{XY}(x, y) \, dx \, dy$$
$$E[Y] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} y f_{XY}(x, y) \, dx \, dy$$

These are special cases of $E[g(X, Y)]$ where $g(X, Y) = X$ and $g(X, Y) = Y$, respectively.

---

### 4. Examples

#### Example 1: Expectation of a Linear Combination of Two Variables

Let $X$ and $Y$ be continuous random variables with joint PDF:
$$f_{XY}(x, y) = \begin{cases} 2, & \text{if } 0 < x < 1, 0 < y < x \\ 0, & \text{otherwise} \end{cases}$$
Calculate $E[2X + 3Y]$.

**Solution:**
First, we need to verify that $f_{XY}(x, y)$ is a valid PDF.
$$\int_{0}^{1} \int_{0}^{x} 2 \, dy \, dx = \int_{0}^{1} [2y]_{0}^{x} \, dx = \int_{0}^{1} 2x \, dx = [x^2]_{0}^{1} = 1$$
The PDF is valid.

Now, let's calculate $E[2X + 3Y]$ using the linearity of expectation:
$$E[2X + 3Y] = 2E[X] + 3E[Y]$$

To find $E[X]$ and $E[Y]$, we can compute them separately:
$$E[X] = \int_{0}^{1} \int_{0}^{x} x \cdot 2 \, dy \, dx = \int_{0}^{1} [2xy]_{0}^{x} \, dx = \int_{0}^{1} 2x^2 \, dx = \left[\frac{2x^3}{3}\right]_{0}^{1} = \frac{2}{3}$$

$$E[Y] = \int_{0}^{1} \int_{0}^{x} y \cdot 2 \, dy \, dx = \int_{0}^{1} \left[\frac{2y^2}{2}\right]_{0}^{x} \, dx = \int_{0}^{1} x^2 \, dx = \left[\frac{x^3}{3}\right]_{0}^{1} = \frac{1}{3}$$

Now, substitute these values back into the expression for $E[2X + 3Y]$:
$$E[2X + 3Y] = 2 \left(\frac{2}{3}\right) + 3 \left(\frac{1}{3}\right) = \frac{4}{3} + 1 = \frac{7}{3}$$

Alternatively, we could compute $E[2X + 3Y]$ directly:
$$E[2X + 3Y] = \int_{0}^{1} \int_{0}^{x} (2x + 3y) \cdot 2 \, dy \, dx$$
$$= \int_{0}^{1} \int_{0}^{x} (4x + 6y) \, dy \, dx$$
$$= \int_{0}^{1} \left[4xy + 3y^2\right]_{0}^{x} \, dx$$
$$= \int_{0}^{1} (4x(x) + 3x^2) \, dx$$
$$= \int_{0}^{1} (4x^2 + 3x^2) \, dx$$
$$= \int_{0}^{1} 7x^2 \, dx$$
$$= \left[\frac{7x^3}{3}\right]_{0}^{1} = \frac{7}{3}$$

Both methods yield the same result.

#### Example 2: Expectation of a Product of Variables

Let $X$ and $Y$ be independent continuous random variables with PDFs:
$$f_X(x) = \begin{cases} 1, & \text{if } 0 < x < 1 \\ 0, & \text{otherwise} \end{cases}$$
$$f_Y(y) = \begin{cases} 2y, & \text{if } 0 < y < 1 \\ 0, & \text{otherwise} \end{cases}$$
Calculate $E[XY]$.

**Solution:**
Since $X$ and $Y$ are independent, their joint PDF is the product of their marginal PDFs:
$$f_{XY}(x, y) = f_X(x) f_Y(y) = \begin{cases} 1 \cdot 2y = 2y, & \text{if } 0 < x < 1, 0 < y < 1 \\ 0, & \text{otherwise} \end{cases}$$

Now, we can calculate $E[XY]$:
$$E[XY] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy f_{XY}(x, y) \, dx \, dy$$
$$= \int_{0}^{1} \int_{0}^{1} xy (2y) \, dx \, dy$$
$$= \int_{0}^{1} \int_{0}^{1} 2xy^2 \, dx \, dy$$
$$= \int_{0}^{1} \left[xy^2\right]_{0}^{1} \, dy \quad \text{(integrating with respect to x)}$$
$$= \int_{0}^{1} y^2 \, dy$$
$$= \left[\frac{y^3}{3}\right]_{0}^{1} = \frac{1}{3}$$

**Alternative Approach for Independent Variables:**
If $X$ and $Y$ are independent, then $E[XY] = E[X]E[Y]$.
First, calculate $E[X]$:
$$E[X] = \int_{0}^{1} x \cdot 1 \, dx = \left[\frac{x^2}{2}\right]_{0}^{1} = \frac{1}{2}$$
Next, calculate $E[Y]$:
$$E[Y] = \int_{0}^{1} y \cdot (2y) \, dy = \int_{0}^{1} 2y^2 \, dy = \left[\frac{2y^3}{3}\right]_{0}^{1} = \frac{2}{3}$$
Therefore, $E[XY] = E[X]E[Y] = \frac{1}{2} \cdot \frac{2}{3} = \frac{1}{3}$.

This confirms the result obtained by direct integration.

#### Example 3: Expectation of a Quadratic Function

Consider two continuous random variables $X$ and $Y$ with joint PDF:
$$f_{XY}(x, y) = \begin{cases} cxy, & \text{if } 0 < x < 1, 0 < y < 1 \\ 0, & \text{otherwise} \end{cases}$$
where $c$ is a normalization constant. Calculate $E[X^2 Y]$.

**Solution:**
First, find the normalization constant $c$.
$$\int_{0}^{1} \int_{0}^{1} cxy \, dx \, dy = 1$$
$$c \int_{0}^{1} y \, dy \int_{0}^{1} x \, dx = 1$$
$$c \left[\frac{y^2}{2}\right]_{0}^{1} \left[\frac{x^2}{2}\right]_{0}^{1} = 1$$
$$c \left(\frac{1}{2}\right) \left(\frac{1}{2}\right) = 1$$
$$c \cdot \frac{1}{4} = 1 \implies c = 4$$
So, $f_{XY}(x, y) = 4xy$ for $0 < x < 1, 0 < y < 1$.

Now, calculate $E[X^2 Y]$:
$$E[X^2 Y] = \int_{0}^{1} \int_{0}^{1} x^2 y \cdot (4xy) \, dx \, dy$$
$$= \int_{0}^{1} \int_{0}^{1} 4x^3 y^2 \, dx \, dy$$
$$= \int_{0}^{1} \left[\frac{4x^4}{4} y^2\right]_{0}^{1} \, dy \quad \text{(integrating with respect to x)}$$
$$= \int_{0}^{1} y^2 \, dy$$
$$= \left[\frac{y^3}{3}\right]_{0}^{1} = \frac{1}{3}$$

**Independence Check:**
Are $X$ and $Y$ independent in this case?
$f_X(x) = \int_{0}^{1} 4xy \, dy = 4x \left[\frac{y^2}{2}\right]_{0}^{1} = 4x \left(\frac{1}{2}\right) = 2x$ for $0 < x < 1$.
$f_Y(y) = \int_{0}^{1} 4xy \, dx = 4y \left[\frac{x^2}{2}\right]_{0}^{1} = 4y \left(\frac{1}{2}\right) = 2y$ for $0 < y < 1$.
$f_X(x)f_Y(y) = (2x)(2y) = 4xy = f_{XY}(x, y)$.
Yes, $X$ and $Y$ are independent.

Therefore, $E[X^2 Y] = E[X^2] E[Y]$:
$E[X^2] = \int_{0}^{1} x^2 (2x) \, dx = \int_{0}^{1} 2x^3 \, dx = \left[\frac{2x^4}{4}\right]_{0}^{1} = \frac{1}{2}$.
$E[Y] = \int_{0}^{1} y (2y) \, dy = \int_{0}^{1} 2y^2 \, dy = \left[\frac{2y^3}{3}\right]_{0}^{1} = \frac{2}{3}$.
$E[X^2] E[Y] = \frac{1}{2} \cdot \frac{2}{3} = \frac{1}{3}$.
The result is consistent.

---

### 5. Practice Questions and Exercises

**Question 1:**
Let $X$ and $Y$ be two continuous random variables with joint PDF:
$$f_{XY}(x, y) = \begin{cases} 6x^2y, & \text{if } 0 < x < 1, 0 < y < 1 \\ 0, & \text{otherwise} \end{cases}$$
Calculate $E[X + Y^2]$.

**Question 2:**
Suppose $X$ and $Y$ are independent continuous random variables with PDFs:
$$f_X(x) = e^{-x}, \quad x > 0$$
$$f_Y(y) = 2e^{-2y}, \quad y > 0$$
Calculate $E[XY^2]$.

**Question 3:**
Consider two continuous random variables $X$ and $Y$ whose joint PDF is given by:
$$f_{XY}(x, y) = \begin{cases} x+y, & \text{if } 0 < x < 1, 0 < y < 1 \\ 0, & \text{otherwise} \end{cases}$$
Calculate $E[X Y]$.

**Question 4:**
Let $X$ and $Y$ be continuous random variables with joint PDF:
$$f_{XY}(x, y) = \begin{cases} e^{-(x+y)}, & \text{if } x > 0, y > 0 \\ 0, & \text{otherwise} \end{cases}$$
Calculate $E[2X - Y^2]$.

---

### 6. Answers to Practice Questions

**Answer 1:**
$$E[X + Y^2] = E[X] + E[Y^2]$$
$$E[X] = \int_{0}^{1} \int_{0}^{1} x (6x^2y) \, dy \, dx = \int_{0}^{1} \int_{0}^{1} 6x^3y \, dy \, dx$$
$$= \int_{0}^{1} 6x^3 \left[\frac{y^2}{2}\right]_{0}^{1} \, dx = \int_{0}^{1} 6x^3 \left(\frac{1}{2}\right) \, dx = \int_{0}^{1} 3x^3 \, dx$$
$$= \left[\frac{3x^4}{4}\right]_{0}^{1} = \frac{3}{4}$$
$$E[Y^2] = \int_{0}^{1} \int_{0}^{1} y^2 (6x^2y) \, dy \, dx = \int_{0}^{1} \int_{0}^{1} 6x^2y^3 \, dy \, dx$$
$$= \int_{0}^{1} 6x^2 \left[\frac{y^4}{4}\right]_{0}^{1} \, dx = \int_{0}^{1} 6x^2 \left(\frac{1}{4}\right) \, dx = \int_{0}^{1} \frac{3}{2}x^2 \, dx$$
$$= \left[\frac{3}{2} \frac{x^3}{3}\right]_{0}^{1} = \left[\frac{x^3}{2}\right]_{0}^{1} = \frac{1}{2}$$
$$E[X + Y^2] = \frac{3}{4} + \frac{1}{2} = \frac{3}{4} + \frac{2}{4} = \frac{5}{4}$$

**Answer 2:**
Since $X$ and $Y$ are independent, $E[XY^2] = E[X]E[Y^2]$.
$$E[X] = \int_{0}^{\infty} x e^{-x} \, dx$$
Using integration by parts ($\int u \, dv = uv - \int v \, du$): $u=x, dv=e^{-x}dx \implies du=dx, v=-e^{-x}$
$$E[X] = [-xe^{-x}]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-x}) \, dx = (0 - 0) + \int_{0}^{\infty} e^{-x} \, dx$$
$$= [-e^{-x}]_{0}^{\infty} = (0 - (-1)) = 1$$
$$E[Y^2] = \int_{0}^{\infty} y^2 (2e^{-2y}) \, dy = 2 \int_{0}^{\infty} y^2 e^{-2y} \, dy$$
Let $u = 2y$, so $y = u/2$ and $dy = du/2$. The limits remain from 0 to $\infty$.
$$E[Y^2] = 2 \int_{0}^{\infty} \left(\frac{u}{2}\right)^2 e^{-u} \left(\frac{du}{2}\right) = 2 \int_{0}^{\infty} \frac{u^2}{4} e^{-u} \frac{du}{2} = \frac{1}{4} \int_{0}^{\infty} u^2 e^{-u} \, du$$
The integral $\int_{0}^{\infty} u^2 e^{-u} \, du$ is the Gamma function $\Gamma(3) = 2! = 2$.
$$E[Y^2] = \frac{1}{4} \cdot 2 = \frac{1}{2}$$
Alternatively, for $E[Y^2]$:
Let $u=y, dv=2e^{-2y}dy \implies du=dy, v=-e^{-2y}$
$\int y (2e^{-2y}) dy = -ye^{-2y} - \int (-e^{-2y}) dy = -ye^{-2y} + \int e^{-2y} dy = -ye^{-2y} - \frac{1}{2}e^{-2y}$
$E[Y^2] = [-ye^{-2y} - \frac{1}{2}e^{-2y}]_{0}^{\infty} = (0 - 0) - (0 - \frac{1}{2}) = \frac{1}{2}$
$$E[XY^2] = E[X]E[Y^2] = 1 \cdot \frac{1}{2} = \frac{1}{2}$$

**Answer 3:**
$$E[XY] = \int_{0}^{1} \int_{0}^{1} xy (x+y) \, dx \, dy$$
$$= \int_{0}^{1} \int_{0}^{1} (x^2y + xy^2) \, dx \, dy$$
$$= \int_{0}^{1} \left[\frac{x^3y}{3} + \frac{x^2y^2}{2}\right]_{0}^{1} \, dy$$
$$= \int_{0}^{1} \left(\frac{y}{3} + \frac{y^2}{2}\right) \, dy$$
$$= \left[\frac{y^2}{6} + \frac{y^3}{6}\right]_{0}^{1} = \frac{1}{6} + \frac{1}{6} = \frac{2}{6} = \frac{1}{3}$$

**Answer 4:**
$$E[2X - Y^2] = 2E[X] - E[Y^2]$$
The joint PDF $f_{XY}(x, y) = e^{-x}e^{-y}$ for $x>0, y>0$ indicates that $X$ and $Y$ are independent.
For $f_X(x) = e^{-x}$ ($X \sim Exp(1)$), $E[X] = 1$.
For $f_Y(y) = e^{-y}$ ($Y \sim Exp(1)$), $E[Y] = 1$.
We need $E[Y^2]$ for $Y \sim Exp(1)$.
$$E[Y^2] = \int_{0}^{\infty} y^2 e^{-y} \, dy$$
This is $\Gamma(3) = 2! = 2$.
$$E[2X - Y^2] = 2(1) - 2 = 0$$

---

### 7. Important Points to Remember

*   The expectation of a function $g(X, Y)$ of two continuous random variables $X$ and $Y$ with joint PDF $f_{XY}(x, y)$ is given by a double integral: $E[g(X, Y)] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x, y) f_{XY}(x, y) \, dx \, dy$.
*   The limits of integration must cover the entire support of the joint PDF.
*   Linearity of expectation is a powerful tool: $E[a g_1(X, Y) + b g_2(X, Y)] = a E[g_1(X, Y)] + b E[g_2(X, Y)]$.
*   If $X$ and $Y$ are independent, then $E[XY] = E[X]E[Y]$ and $E[g_1(X) g_2(Y)] = E[g_1(X)] E[g_2(Y)]$.
*   Always verify that the given function is a valid probability density function by checking if its integral over the entire domain is equal to 1.

---
