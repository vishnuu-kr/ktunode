---
title: "Introduction to numerical methods - Errors in numerical computation"
subject: "NUMERICAL METHODS FOR ENGINEERS"
module: "Module 1: Introduction to numerical methods "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810b3a"
status: "completed"
scrapedAt: "2026-05-20T18:46:44.776Z"
---
# NUMERICAL METHODS FOR ENGINEERS

## Module 1: Introduction to Numerical Methods

### Topic: Introduction to Numerical Methods - Errors in Numerical Computation

---

### Learning Outcomes:

*   Understand the necessity of numerical methods for solving engineering problems.
*   Identify and classify different types of errors that arise in numerical computations.
*   Quantify and estimate errors.
*   Understand how errors propagate through a computation.
*   Develop strategies for minimizing and controlling errors.

---

### 1. Why Numerical Methods?

In engineering, many problems cannot be solved analytically (using exact mathematical formulas). Numerical methods provide powerful tools to approximate solutions to these complex problems.

**Key Concepts:**

*   **Analytical Solution:** An exact, closed-form mathematical expression for the solution of a problem.
*   **Numerical Solution:** An approximate solution obtained through a sequence of arithmetic operations.

**Examples:**

*   Solving complex differential equations that describe fluid flow or heat transfer.
*   Finding the roots of polynomials that arise in structural analysis.
*   Performing integration for calculating volumes or work done.
*   Optimization problems with no analytical solutions.

---

### 2. Types of Errors in Numerical Computation

Errors are inherent in numerical computations due to approximations and the finite precision of computers. Understanding these errors is crucial for assessing the reliability of our results.

#### 2.1. Error Definition

**Absolute Error (E<sub>a</sub>):** The magnitude of the difference between the true value and the approximate value.

$E_a = |True Value - Approximate Value|$

**Relative Error (E<sub>r</sub>):** The ratio of the absolute error to the true value. It provides a measure of the error relative to the magnitude of the true value.

$E_r = \frac{|True Value - Approximate Value|}{|True Value|}$

**Percentage Error:** Relative error multiplied by 100%.

$Percentage Error = E_r \times 100\%$

**Important Note:** Relative error is often more informative than absolute error, especially when dealing with numbers of vastly different magnitudes. A small absolute error can be significant if the true value is small, and vice-versa.

**Example:**

Suppose the true value of a quantity is 10.5 and its approximate value is 10.2.

*   **Absolute Error:** $E_a = |10.5 - 10.2| = 0.3$
*   **Relative Error:** $E_r = \frac{0.3}{10.5} \approx 0.02857$
*   **Percentage Error:** $0.02857 \times 100\% \approx 2.86\%$

Now, suppose the true value is 1050 and the approximate value is 1049.7.

*   **Absolute Error:** $E_a = |1050 - 1049.7| = 0.3$
*   **Relative Error:** $E_r = \frac{0.3}{1050} \approx 0.0002857$
*   **Percentage Error:** $0.0002857 \times 100\% \approx 0.0286\%$

Even though the absolute error is the same, the relative error is much smaller in the second case, indicating a more accurate approximation in the context of the magnitude of the true value.

#### 2.2. Sources of Errors

There are two primary categories of errors:

##### 2.2.1. Rounding Errors (or Round-off Errors)

These errors arise from the fact that computers have finite memory and can only store numbers with a limited number of digits. When a number requires more digits than available, it must be rounded.

**Key Concepts:**

*   **Truncation:** Simply cutting off the extra digits.
*   **Rounding:** Approximating to the nearest representable number.

**Example:**

Consider a computer that stores numbers with 4 significant digits.

*   The number $\pi \approx 3.14159265...$
    *   **Truncation:** 3.141
    *   **Rounding:** 3.142
*   The number $1/3 \approx 0.333333...$
    *   **Truncation:** 0.3333
    *   **Rounding:** 0.3333

**How it arises:**

*   **Representation of Real Numbers:** Many real numbers (like $\pi$ or $1/3$) cannot be represented exactly in finite binary or decimal precision.
*   **Intermediate Calculations:** During a sequence of calculations, rounding can occur at each step, and these errors can accumulate.

##### 2.2.2. Truncation Errors

These errors arise from approximating a mathematical procedure (like an infinite series or an integral) by a finite number of terms or steps.

**Key Concepts:**

*   **Approximation of Functions:** Many complex functions are approximated by simpler ones (e.g., Taylor series).
*   **Discretization of Continuous Processes:** Differential equations are often solved by replacing derivatives with finite differences, discretizing time or space.

**Example:**

**Taylor Series Expansion:** The Taylor series expansion of $e^x$ around $x=0$ is:

$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + ...$

If we approximate $e^x$ using the first three terms: $e^x \approx 1 + x + \frac{x^2}{2!}$, the difference between the true value of $e^x$ and this approximation is the **truncation error**. The omitted terms ($\frac{x^3}{3!} + \frac{x^4}{4!} + ...$) contribute to this error.

**Example:**

If we want to approximate $e^{0.1}$ using the first three terms:

*   Approximate value: $1 + 0.1 + \frac{(0.1)^2}{2} = 1 + 0.1 + 0.005 = 1.105$
*   True value of $e^{0.1} \approx 1.1051709...$
*   Truncation Error: $|1.1051709 - 1.105| = 0.0001709$

**Relationship between Rounding and Truncation Errors:**

*   **Truncation error** is introduced by the approximation of a mathematical process itself. It's about the model.
*   **Rounding error** is introduced by the finite representation of numbers. It's about the computation hardware.

##### 2.2.3. Algorithmic Errors

These are errors introduced by the numerical algorithm itself, often due to its inherent instability or poor design. While often grouped with truncation errors (as they relate to the approximation method), they can be distinct. For instance, an algorithm might be numerically unstable, meaning small errors grow exponentially.

##### 2.2.4. Blunders (or Mistakes)

These are human errors, such as typing mistakes, incorrect logic in programming, or misinterpretation of problem statements. These are to be avoided through careful programming, verification, and testing.

---

### 3. Error Propagation

When we perform a sequence of calculations, errors from one step can be carried forward and magnified in subsequent steps.

**Key Concepts:**

*   **Forward Error:** The error introduced in a calculation step.
*   **Backward Error:** The error that would have to be made to the input data to obtain the computed solution exactly.
*   **Condition Number:** A measure of how sensitive the output of an algorithm is to changes in the input. A high condition number indicates an ill-conditioned problem, where small input errors can lead to large output errors.

**General Rules for Error Propagation (for addition, subtraction, multiplication, and division):**

Let $x^*$ and $y^*$ be approximate values for $x$ and $y$, and $E_x = x^* - x$ and $E_y = y^* - y$ be their absolute errors.

*   **Addition:** Let $z = x + y$. Then $z^* = x^* + y^*$.
    $E_z = z^* - z = (x^* + y^*) - (x + y) = (x^* - x) + (y^* - y) = E_x + E_y$
    *The absolute errors add.*

*   **Subtraction:** Let $z = x - y$. Then $z^* = x^* - y^*$.
    $E_z = z^* - z = (x^* - y^*) - (x - y) = (x^* - x) - (y^* - y) = E_x - E_y$
    *The absolute errors subtract.*

*   **Multiplication:** Let $z = xy$. Then $z^* = x^*y^*$.
    $z^* - z = x^*y^* - xy$
    If errors are small, $x^* \approx x$ and $y^* \approx y$:
    $z^* - z \approx xy^* - xy + x^*y - xy = x(y^* - y) + y(x^* - x) = x E_y + y E_x$
    To find relative error:
    $\frac{E_z}{z} \approx \frac{x E_y + y E_x}{xy} = \frac{E_y}{y} + \frac{E_x}{x}$
    *The relative errors add (approximately).*

*   **Division:** Let $z = x/y$. Then $z^* = x^*/y^*$.
    $z^* - z = \frac{x^*}{y^*} - \frac{x}{y} = \frac{x^*y - xy^*}{y^*y}$
    If errors are small:
    $z^* - z \approx \frac{x E_y - y E_x}{y^2}$
    To find relative error:
    $\frac{E_z}{z} \approx \frac{1}{z} \frac{x E_y - y E_x}{y^2} = \frac{y}{x} \frac{x E_y - y E_x}{y^2} = \frac{E_y}{y} - \frac{E_x}{x}$
    *The relative error of the numerator minus the relative error of the denominator.*

**Important Generalization:** For a function $f(x_1, x_2, ..., x_n)$, the absolute error in $f$ ($E_f$) can be approximated using partial derivatives:

$E_f \approx \sum_{i=1}^n \left| \frac{\partial f}{\partial x_i} \right| |E_{x_i}|$

where $E_{x_i}$ is the absolute error in $x_i$.

**Example:**

Let $x=2.0 \pm 0.1$ and $y=3.0 \pm 0.2$.
Calculate $z = x \times y$ and estimate the error.

*   Approximate value of $z$: $z^* = 2.0 \times 3.0 = 6.0$
*   Absolute error in $x$: $E_x = \pm 0.1$
*   Absolute error in $y$: $E_y = \pm 0.2$

Using the multiplication rule for relative errors:
$E_r(z) \approx E_r(x) + E_r(y)$
$E_r(x) = \frac{0.1}{2.0} = 0.05$
$E_r(y) = \frac{0.2}{3.0} \approx 0.0667$
$E_r(z) \approx 0.05 + 0.0667 = 0.1167$

Absolute error in $z$: $E_z = E_r(z) \times z^* \approx 0.1167 \times 6.0 \approx 0.7002$

So, $z = 6.0 \pm 0.7$.

Using the partial derivative rule:
$f(x, y) = xy$
$\frac{\partial f}{\partial x} = y$, $\frac{\partial f}{\partial y} = x$
$E_z \approx \left| \frac{\partial f}{\partial x} \right| |E_x| + \left| \frac{\partial f}{\partial y} \right| |E_y|$
$E_z \approx |y| |E_x| + |x| |E_y|$
Using approximate values $x=2.0$, $y=3.0$:
$E_z \approx |3.0| |0.1| + |2.0| |0.2| = 0.3 + 0.4 = 0.7$
This confirms our previous estimate.

**Important Point:** For subtraction, the absolute errors add. This means subtracting two nearly equal numbers can lead to a large relative error if the numbers themselves are small.

---

### 4. Controlling and Minimizing Errors

While errors cannot be entirely eliminated, their impact can be managed.

**Strategies:**

*   **Use higher precision arithmetic:** Employ double-precision floating-point numbers instead of single-precision when necessary.
*   **Choose appropriate algorithms:** Some algorithms are more numerically stable than others.
*   **Rearrange formulas:** Mathematically equivalent formulas can have different error propagation characteristics. For example, to calculate $1 - \cos(x)$ for small $x$, it's better to use the identity $1 - \cos(x) = 2 \sin^2(x/2)$ to avoid subtracting nearly equal numbers.
*   **Control the number of significant digits:** Understand the number of digits required for the problem and avoid unnecessary computations that might introduce or amplify errors.
*   **Iterative refinement:** For some problems, solutions can be refined iteratively to reduce error.
*   **Error analysis:** Perform a theoretical analysis of how errors propagate through a specific algorithm.
*   **Verification and Validation:** Compare numerical solutions with analytical solutions (if available), experimental data, or solutions from different numerical methods.

**Example:**

**Catastrophic Cancellation:** Consider computing $f(x) = \sqrt{x+1} - \sqrt{x}$ for large values of $x$.
If we directly compute $\sqrt{x+1} - \sqrt{x}$, and $x$ is very large, $\sqrt{x+1}$ and $\sqrt{x}$ will be very close, leading to a large relative error in their difference due to rounding.

A better approach is to multiply by the conjugate:
$f(x) = (\sqrt{x+1} - \sqrt{x}) \times \frac{\sqrt{x+1} + \sqrt{x}}{\sqrt{x+1} + \sqrt{x}}$
$f(x) = \frac{(x+1) - x}{\sqrt{x+1} + \sqrt{x}}$
$f(x) = \frac{1}{\sqrt{x+1} + \sqrt{x}}$
This rearranged form avoids the subtraction of nearly equal numbers and is more numerically stable for large $x$.

---

### 5. Practice Questions and Exercises

**Question 1:**
The true value of a measurement is 50.5 units. An approximate value is 50.3 units.
a) Calculate the absolute error.
b) Calculate the relative error.
c) Calculate the percentage error.

**Question 2:**
Consider the approximation of $e^x$ using the Taylor series $e^x \approx 1 + x + \frac{x^2}{2}$. Calculate the truncation error for $x = 0.2$.

**Question 3:**
Let $x = 5.0 \pm 0.1$ and $y = 2.0 \pm 0.05$. Calculate $z = x/y$ and estimate the absolute error in $z$.

**Question 4:**
Explain the difference between rounding error and truncation error, providing an example for each.

**Question 5:**
What is catastrophic cancellation, and how can it be avoided?

---

### Answers to Practice Questions

**Answer 1:**
a) Absolute Error ($E_a$) = $|50.5 - 50.3| = 0.2$ units.
b) Relative Error ($E_r$) = $\frac{0.2}{50.5} \approx 0.00396$
c) Percentage Error = $0.00396 \times 100\% \approx 0.396\%$

**Answer 2:**
The Taylor series is $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + ...$
The approximation is $e^x \approx 1 + x + \frac{x^2}{2!}$.
The truncation error is the sum of the omitted terms: $\frac{x^3}{3!} + \frac{x^4}{4!} + ...$
For $x = 0.2$:
Approximate value: $1 + 0.2 + \frac{(0.2)^2}{2} = 1 + 0.2 + \frac{0.04}{2} = 1 + 0.2 + 0.02 = 1.22$
True value of $e^{0.2} \approx 1.221402758...$
Truncation Error = $|1.221402758 - 1.22| = 0.001402758$

**Answer 3:**
$z = x/y$
Approximate value of $z^* = 5.0 / 2.0 = 2.5$
Absolute error in $x$: $E_x = 0.1$
Absolute error in $y$: $E_y = 0.05$

Using relative errors:
$E_r(x) = \frac{0.1}{5.0} = 0.02$
$E_r(y) = \frac{0.05}{2.0} = 0.025$
$E_r(z) \approx E_r(x) + E_r(y)$ (for division, it's $E_r(x) - E_r(y)$, but we are interested in the magnitude of the error, so we often sum magnitudes in simplified error propagation when direction is unknown or can compound)
Let's use the partial derivative rule for a more accurate estimate of the absolute error.
$f(x, y) = x/y$
$\frac{\partial f}{\partial x} = 1/y$, $\frac{\partial f}{\partial y} = -x/y^2$
$E_z \approx \left| \frac{\partial f}{\partial x} \right| |E_x| + \left| \frac{\partial f}{\partial y} \right| |E_y|$
$E_z \approx \left| \frac{1}{y} \right| |E_x| + \left| \frac{-x}{y^2} \right| |E_y|$
Using approximate values $x=5.0$, $y=2.0$:
$E_z \approx \left| \frac{1}{2.0} \right| |0.1| + \left| \frac{-5.0}{(2.0)^2} \right| |0.05|$
$E_z \approx (0.5)(0.1) + \left| \frac{-5.0}{4.0} \right| (0.05)$
$E_z \approx 0.05 + (1.25)(0.05)$
$E_z \approx 0.05 + 0.0625 = 0.1125$
So, $z = 2.5 \pm 0.1125$.

**Answer 4:**
*   **Rounding Error:** Occurs because computers have finite precision and must round numbers that cannot be represented exactly. For example, representing $1/3$ as $0.3333$ in a system with 4 decimal places.
*   **Truncation Error:** Occurs when an infinite process (like an infinite series) or a continuous process is approximated by a finite one. For example, approximating $e^x$ using only the first few terms of its Taylor series.

**Answer 5:**
**Catastrophic cancellation** is the subtraction of two nearly equal numbers, which results in a significant loss of significant digits and a large relative error in the result.
It can be avoided by using alternative mathematical formulations that do not involve subtracting nearly equal numbers. For instance, using trigonometric identities or multiplying by the conjugate as shown in the example $f(x) = \sqrt{x+1} - \sqrt{x}$.

---

### Important Points to Remember:

*   Numerical methods are essential for solving engineering problems that lack analytical solutions.
*   **Absolute error** measures the magnitude of the difference, while **relative error** provides context relative to the true value.
*   Errors in numerical computation primarily stem from **rounding errors** (due to finite precision) and **truncation errors** (due to approximations of mathematical processes).
*   Errors can propagate and amplify through calculations. Understanding propagation rules (especially for addition, subtraction, multiplication, and division) is vital.
*   **Catastrophic cancellation** is a critical issue where subtracting nearly equal numbers leads to large relative errors.
*   Strategies like using higher precision, choosing stable algorithms, and rearranging formulas are crucial for minimizing and controlling errors.
*   Always be aware of the potential for errors and their impact on the reliability of your numerical results.
