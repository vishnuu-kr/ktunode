---
title: "Numerical differentiation-Difference formula"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 2: Curve fitting: Interpolation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646af"
status: "completed"
scrapedAt: "2026-05-20T18:23:11.911Z"
---
# NUMERICAL TECHNIQUES ENGINEERING

## Module 2: Curve Fitting: Interpolation

### Topic: Numerical Differentiation - Difference Formula

---

### **Introduction**

Numerical differentiation is the process of approximating the derivative of a function using its values at discrete points. This is crucial when the analytical derivative of a function is difficult or impossible to obtain, or when dealing with experimentally obtained data that is only available at specific points. This topic focuses on using **difference formulas**, which are derived from interpolation polynomials, to approximate derivatives.

**Relevance to Course Outcomes:**

*   **CO3: Solve differentiation and integration numerically (Knowledge Level: K3)**
    *   This topic directly addresses the numerical solution of differentiation problems. By understanding difference formulas, students will be able to compute approximate derivatives of functions represented by discrete data points.

---

### **Key Concepts and Definitions**

*   **Derivative:** The instantaneous rate of change of a function. Mathematically, $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$.
*   **Numerical Differentiation:** Approximating the derivative of a function at a point using its values at discrete intervals.
*   **Interpolation Polynomial:** A polynomial that passes through a given set of data points. Common examples include Newton's forward and backward difference formulas, and Stirling's formula.
*   **Finite Differences:** Differences between successive values of a function.
    *   **Forward Difference:** $\Delta f(x_i) = f(x_{i+1}) - f(x_i)$
    *   **Backward Difference:** $\nabla f(x_i) = f(x_i) - f(x_{i-1})$
    *   **Central Difference:** $\delta f(x_i) = f(x_{i+h/2}) - f(x_{i-h/2})$
*   **Difference Operators:**
    *   **Forward Difference Operator ($\Delta$):** $\Delta f(x_i) = f(x_{i+1}) - f(x_i)$
    *   **Backward Difference Operator ($\nabla$):** $\nabla f(x_i) = f(x_i) - f(x_{i-1})$
    *   **Shift Operator ($E$):** $E f(x_i) = f(x_i + h)$. It is related to the forward difference by $E = I + \Delta$, where $I$ is the identity operator.
    *   **Central Difference Operator ($\delta$):** $\delta f(x_{i+1/2}) = f(x_{i+1}) - f(x_i)$ (Note: often defined with respect to midpoints). A more common definition is $\delta f(x_i) = f(x_{i+h/2}) - f(x_{i-h/2})$.
*   **Relation between Operators:**
    *   $\Delta = E - I$
    *   $\nabla = I - E^{-1}$
    *   $\delta = E^{1/2} - E^{-1/2}$

**Reference:** Chapra & Canale, Chapter 21 (Numerical Differentiation and Integration) and Chapter 24 (Finite Difference Methods). Gupta & Balagurusamy also provide comprehensive coverage of finite differences in their respective numerical methods books.

---

### **Approximating Derivatives using Interpolation Polynomials**

The core idea is to use an interpolation polynomial that fits the given data points and then differentiate this polynomial to approximate the derivative of the original function.

**General Approach:**

1.  **Choose an Interpolation Method:** Select an appropriate interpolation formula (e.g., Newton's forward, backward, Stirling's).
2.  **Construct the Interpolation Polynomial:** Fit the polynomial to the discrete data points.
3.  **Differentiate the Polynomial:** Compute the derivative of the polynomial with respect to the independent variable.
4.  **Evaluate the Derivative:** Substitute the desired x-value into the differentiated polynomial to get the approximate derivative.

---

### **Newton's Forward Difference Formula for Differentiation**

Newton's forward difference formula for interpolation is given by:

$P_n(x) = f(x_0) + s \Delta f(x_0) + \frac{s(s-1)}{2!} \Delta^2 f(x_0) + \frac{s(s-1)(s-2)}{3!} \Delta^3 f(x_0) + \dots + \frac{s(s-1)\dots(s-n+1)}{n!} \Delta^n f(x_0)$

where $x = x_0 + sh$ and $h$ is the uniform spacing between data points.

To find the derivative, we differentiate $P_n(x)$ with respect to $x$. Since $s = \frac{x - x_0}{h}$, we have $\frac{ds}{dx} = \frac{1}{h}$. Using the chain rule:

$\frac{dP_n(x)}{dx} = \frac{dP_n(x)}{ds} \cdot \frac{ds}{dx} = \frac{1}{h} \frac{dP_n(x)}{ds}$

Differentiating the polynomial with respect to $s$:

$\frac{dP_n(x)}{ds} = \Delta f(x_0) + \frac{(2s-1)}{2!} \Delta^2 f(x_0) + \frac{(3s^2 - 6s + 2)}{3!} \Delta^3 f(x_0) + \dots$

So, the first derivative approximation is:

$\boxed{f'(x_0 + sh) \approx \frac{1}{h} \left[ \Delta f(x_0) + \frac{(2s-1)}{2!} \Delta^2 f(x_0) + \frac{(3s^2 - 6s + 2)}{3!} \Delta^3 f(x_0) + \dots \right]}$

**Special Cases:**

1.  **Derivative at the first point ($x=x_0$):**
    Here, $s=0$. Substituting $s=0$ into the derivative formula:

    $\boxed{f'(x_0) \approx \frac{1}{h} \left[ \Delta f(x_0) - \frac{1}{2!} \Delta^2 f(x_0) + \frac{2}{3!} \Delta^3 f(x_0) - \dots \right]}$

    This is the **Newton's forward difference formula for the first derivative at $x_0$**.

2.  **Higher Order Derivatives:**
    We can find the second derivative by differentiating $\frac{dP_n(x)}{ds}$ with respect to $s$ again and multiplying by $\frac{1}{h}$:

    $\frac{d^2P_n(x)}{dx^2} = \frac{1}{h^2} \frac{d^2P_n(x)}{ds^2}$

    $\frac{d^2P_n(x)}{ds^2} = \frac{2}{2!} \Delta^2 f(x_0) + \frac{(6s - 6)}{3!} \Delta^3 f(x_0) + \dots$

    For the second derivative at $x_0$ ($s=0$):

    $\boxed{f''(x_0) \approx \frac{1}{h^2} \left[ \Delta^2 f(x_0) - \frac{1}{2} \Delta^3 f(x_0) + \dots \right]}$

**Reference:** Chapra & Canale, Section 21.2 (Derivatives from data), Gerald & Wheatly, Chapter 3 (Finite Differences).

---

### **Newton's Backward Difference Formula for Differentiation**

Newton's backward difference formula for interpolation is given by:

$P_n(x) = f(x_n) + s \nabla f(x_n) + \frac{s(s+1)}{2!} \nabla^2 f(x_n) + \frac{s(s+1)(s+2)}{3!} \nabla^3 f(x_n) + \dots + \frac{s(s+1)\dots(s+n-1)}{n!} \nabla^n f(x_n)$

where $x = x_n + sh$ and $h$ is the uniform spacing between data points. Note that $s$ here can be negative if $x < x_n$.

Differentiating with respect to $x$:

$\frac{dP_n(x)}{dx} = \frac{1}{h} \frac{dP_n(x)}{ds}$

$\frac{dP_n(x)}{ds} = \nabla f(x_n) + \frac{(2s+1)}{2!} \nabla^2 f(x_n) + \frac{(3s^2 + 6s + 2)}{3!} \nabla^3 f(x_n) + \dots$

So, the first derivative approximation is:

$\boxed{f'(x_n + sh) \approx \frac{1}{h} \left[ \nabla f(x_n) + \frac{(2s+1)}{2!} \nabla^2 f(x_n) + \frac{(3s^2 + 6s + 2)}{3!} \nabla^3 f(x_n) + \dots \right]}$

**Special Cases:**

1.  **Derivative at the last point ($x=x_n$):**
    Here, $s=0$. Substituting $s=0$ into the derivative formula:

    $\boxed{f'(x_n) \approx \frac{1}{h} \left[ \nabla f(x_n) + \frac{1}{2!} \nabla^2 f(x_n) + \frac{2}{3!} \nabla^3 f(x_n) + \dots \right]}$

    This is the **Newton's backward difference formula for the first derivative at $x_n$**.

2.  **Higher Order Derivatives:**
    For the second derivative at $x_n$ ($s=0$):

    $\frac{d^2P_n(x)}{ds^2} = \frac{2}{2!} \nabla^2 f(x_n) + \frac{(6s + 6)}{3!} \nabla^3 f(x_n) + \dots$

    $\boxed{f''(x_n) \approx \frac{1}{h^2} \left[ \nabla^2 f(x_n) + \nabla^3 f(x_n) + \dots \right]}$

**Reference:** Jain, Iyengar, & Jain, Chapter 4 (Finite Difference Method).

---

### **Comparison of Newton's Forward and Backward Formulas for Derivatives**

*   **Newton's Forward:** Best suited for approximating derivatives near the beginning of the data set ($x_0$).
*   **Newton's Backward:** Best suited for approximating derivatives near the end of the data set ($x_n$).
*   **General Point:** Both can be used to approximate derivatives at any point $x$ by choosing $x_0$ or $x_n$ appropriately and computing the corresponding $s$.

---

### **Central Difference Formulas for Differentiation**

Central difference formulas generally provide better accuracy for approximating derivatives at interior points of the data set. This is because they use data points symmetrically around the point of interest.

**Stirling's Formula (for interpolation):**

$P_n(x) = f(x_0) + s \frac{\Delta f(x_{-1}) + \Delta f(x_0)}{2} + \frac{s^2}{2!} \Delta^2 f(x_{-1}) + \frac{s(s^2-1)}{3!} \frac{\Delta^3 f(x_{-2}) + \Delta^3 f(x_{-1})}{2} + \dots$

where $x = x_0 + sh$, and the data points are centered around $x_0$, i.e., $x_{-k}, \dots, x_{-1}, x_0, x_1, \dots, x_k$.

**First Derivative using Stirling's Formula:**

Differentiating with respect to $x$ ($\frac{dx}{ds} = h$):

$\frac{dP_n(x)}{dx} = \frac{1}{h} \frac{dP_n(x)}{ds}$

$\frac{dP_n(x)}{ds} = \frac{\Delta f(x_{-1}) + \Delta f(x_0)}{2} + \frac{2s}{2!} \Delta^2 f(x_{-1}) + \frac{3s^2-1}{3!} \frac{\Delta^3 f(x_{-2}) + \Delta^3 f(x_{-1})}{2} + \dots$

**Derivative at the central point ($x=x_0$, so $s=0$):**

$\boxed{f'(x_0) \approx \frac{1}{h} \left[ \frac{\Delta f(x_{-1}) + \Delta f(x_0)}{2} + \frac{-1}{3!} \frac{\Delta^3 f(x_{-2}) + \Delta^3 f(x_{-1})}{2} + \dots \right]}$

This can be written using the central difference notation:

$\boxed{f'(x_0) \approx \frac{1}{h} \left[ \frac{\delta f(x_0)}{2} + \frac{\delta^3 f(x_0)}{24} + \dots \right]}$

where $\delta f(x_0) = f(x_0 + h/2) - f(x_0 - h/2)$ and $\delta^2 f(x_0) = \delta f(x_0+h/2) - \delta f(x_0-h/2) = f(x_0+h) - 2f(x_0) + f(x_0-h)$.

**Second Derivative using Stirling's Formula:**

$\frac{d^2P_n(x)}{ds^2} = \frac{2}{2!} \Delta^2 f(x_{-1}) + \frac{6s}{3!} \frac{\Delta^3 f(x_{-2}) + \Delta^3 f(x_{-1})}{2} + \dots$

**Second Derivative at the central point ($x=x_0$, so $s=0$):**

$\boxed{f''(x_0) \approx \frac{1}{h^2} \left[ \Delta^2 f(x_{-1}) - \frac{1}{12} \frac{\Delta^3 f(x_{-2}) + \Delta^3 f(x_{-1})}{2} + \dots \right]}$

Using central difference notation:

$\boxed{f''(x_0) \approx \frac{1}{h^2} \left[ \delta^2 f(x_0) - \frac{1}{12} \delta^4 f(x_0) + \dots \right]}$

**Reference:** Chapra & Canale, Section 21.2 (Derivatives from data), Gerald & Wheatly, Chapter 3 (Finite Differences).

---

### **Other Central Difference Formulas (More Direct Derivation)**

We can also derive central difference formulas more directly by considering Taylor series expansions.

**First Derivative:**

Consider $f(x_0+h)$ and $f(x_0-h)$:
$f(x_0+h) = f(x_0) + hf'(x_0) + \frac{h^2}{2!}f''(x_0) + \frac{h^3}{3!}f'''(x_0) + \dots$
$f(x_0-h) = f(x_0) - hf'(x_0) + \frac{h^2}{2!}f''(x_0) - \frac{h^3}{3!}f'''(x_0) + \dots$

Subtracting the second from the first:
$f(x_0+h) - f(x_0-h) = 2hf'(x_0) + 2\frac{h^3}{3!}f'''(x_0) + \dots$

Rearranging for $f'(x_0)$:
$f'(x_0) = \frac{f(x_0+h) - f(x_0-h)}{2h} - \frac{h^2}{6}f'''(x_0) - \dots$

This gives the **Central Difference Formula for the First Derivative**:

$\boxed{f'(x_0) \approx \frac{f(x_0+h) - f(x_0-h)}{2h}}$

This formula is second-order accurate ($O(h^2)$). It can be expressed using the central difference operator as:

$\boxed{f'(x_0) \approx \frac{\delta f(x_0)}{h}}$

**Second Derivative:**

Adding the two Taylor series expansions:
$f(x_0+h) + f(x_0-h) = 2f(x_0) + 2\frac{h^2}{2!}f''(x_0) + 2\frac{h^4}{4!}f^{(4)}(x_0) + \dots$

Rearranging for $f''(x_0)$:
$f''(x_0) = \frac{f(x_0+h) - 2f(x_0) + f(x_0-h)}{h^2} - \frac{h^2}{12}f^{(4)}(x_0) - \dots$

This gives the **Central Difference Formula for the Second Derivative**:

$\boxed{f''(x_0) \approx \frac{f(x_0+h) - 2f(x_0) + f(x_0-h)}{h^2}}$

This formula is also second-order accurate ($O(h^2)$). It can be expressed using the central difference operator as:

$\boxed{f''(x_0) \approx \frac{\delta^2 f(x_0)}{h^2}}$

**Higher Order Derivatives:**
Higher-order central difference formulas can be derived similarly by considering more terms in the Taylor series and appropriate combinations of function values.

**Reference:** Chapra & Canale, Section 21.2 (Derivatives from data), Balagurusamy, Chapter 6 (Numerical Differentiation and Integration).

---

### **Backward and Forward Difference Formulas (Two-Point Formulas)**

For completeness, let's state the basic two-point formulas derived from Taylor series.

**First Derivative at $x_0$ (Forward Difference):**
Using $f(x_0+h) = f(x_0) + hf'(x_0) + \frac{h^2}{2!}f''(x_0) + \dots$
$f'(x_0) \approx \frac{f(x_0+h) - f(x_0)}{h}$
This is the **Forward Difference Formula for the First Derivative** and is first-order accurate ($O(h)$).

**First Derivative at $x_0$ (Backward Difference):**
Using $f(x_0) = f(x_0-h) + hf'(x_0) + \frac{h^2}{2!}f''(x_0) + \dots$
$f'(x_0) \approx \frac{f(x_0) - f(x_0-h)}{h}$
This is the **Backward Difference Formula for the First Derivative** and is also first-order accurate ($O(h)$).

**Reference:** Chapra & Canale, Section 21.2 (Derivatives from data).

---

### **Choosing the Right Formula**

*   **Near the beginning of data:** Use Newton's Forward Difference Formula.
*   **Near the end of data:** Use Newton's Backward Difference Formula.
*   **Interior points of data:** Use Central Difference Formulas (e.g., derived from Stirling's or direct Taylor series). These are generally more accurate.
*   **When only two points are available:** Use forward or backward difference formulas.

**Important Consideration:** The accuracy of these formulas depends on the step size ($h$) and the higher-order derivatives of the function. Smaller $h$ generally leads to better accuracy, but also can introduce round-off errors for very small $h$. The truncation error is typically proportional to $h$ (for one-sided formulas) or $h^2$ (for central formulas) multiplied by the lowest-order derivative not included in the formula.

---

### **Example**

Let's find the derivative of a function at a specific point using the provided data.

**Problem:** Given the following data, find the value of $f'(1.5)$.

| x     | f(x) |
| :---- | :--- |
| 1.0   | 2.718 |
| 1.2   | 3.320 |
| 1.4   | 4.055 |
| 1.6   | 4.953 |
| 1.8   | 6.050 |
| 2.0   | 7.389 |

**Solution using Central Difference Formula:**

The point $x=1.5$ is an interior point. The step size $h = 1.2 - 1.0 = 0.2$.
We need $f(1.4)$ and $f(1.6)$ for the central difference formula.

$f'(1.5) \approx \frac{f(1.6) - f(1.4)}{2h}$

$f'(1.5) \approx \frac{4.953 - 4.055}{2 \times 0.2}$
$f'(1.5) \approx \frac{0.898}{0.4}$
$f'(1.5) \approx 2.245$

**Solution using Newton's Forward Difference Formula (approximating around $x_0=1.0$):**

We need to construct a difference table.

| x     | f(x)   | $\Delta f$ | $\Delta^2 f$ | $\Delta^3 f$ | $\Delta^4 f$ | $\Delta^5 f$ |
| :---- | :----- | :--------- | :----------- | :----------- | :----------- | :----------- |
| 1.0   | 2.718  |            |              |              |              |              |
|       |        | 0.602      |              |              |              |              |
| 1.2   | 3.320  |            | 0.133        |              |              |              |
|       |        | 0.735      |              | 0.047        |              |              |
| 1.4   | 4.055  |            | 0.180        |              | -0.031       |              |
|       |        | 0.898      |              | 0.016        |              | 0.050        |
| 1.6   | 4.953  |            | 0.196        |              | 0.019        |              |
|       |        | 1.097      |              | 0.035        |              |              |
| 1.8   | 6.050  |            | 0.231        |              |              |              |
|       |        | 1.339      |              |              |              |              |
| 2.0   | 7.389  |            |              |              |              |              |

We want to find $f'(1.5)$. This point is between $x_0=1.4$ and $x_1=1.6$.
Let's choose $x_0 = 1.4$. Then $x = 1.5$.
$s = \frac{x - x_0}{h} = \frac{1.5 - 1.4}{0.2} = \frac{0.1}{0.2} = 0.5$.

Using the formula:
$f'(x_0 + sh) \approx \frac{1}{h} \left[ \Delta f(x_0) + \frac{(2s-1)}{2!} \Delta^2 f(x_0) + \frac{(3s^2 - 6s + 2)}{3!} \Delta^3 f(x_0) + \dots \right]$

$f'(1.5) \approx \frac{1}{0.2} \left[ 0.898 + \frac{(2(0.5)-1)}{2} (0.180) + \frac{(3(0.5)^2 - 6(0.5) + 2)}{6} (0.016) + \dots \right]$
$f'(1.5) \approx 5 \left[ 0.898 + \frac{(1-1)}{2} (0.180) + \frac{(0.75 - 3 + 2)}{6} (0.016) + \dots \right]$
$f'(1.5) \approx 5 \left[ 0.898 + 0 + \frac{(-0.25)}{6} (0.016) + \dots \right]$
$f'(1.5) \approx 5 \left[ 0.898 - 0.00067 \right]$ (approx)
$f'(1.5) \approx 5 \times 0.89733$
$f'(1.5) \approx 4.48665$

**Wait, there's a discrepancy!** This highlights the importance of choosing the right interpolation method and point. The problem asks for $f'(1.5)$, which is exactly halfway between 1.4 and 1.6. This is a perfect scenario for central differences.

Let's re-evaluate using the central difference approach with the difference table.

We need to use data points symmetrically around $x=1.5$.
Let's set $x_0=1.5$. We can conceptualize this by shifting our data.
Alternatively, we can use the formula derived from Stirling's for $s=0$ when data is centered.

Let's consider $x_0=1.4$. Then $x=1.5$, $s=0.5$.
We need values $\Delta f(x_0)$ and $\Delta f(x_{-1})$ etc.
If we choose $x_0 = 1.4$ as our center for the Newton's formula derivation, $s=0.5$.
For Stirling's formula applied to $x=1.5$, we'd ideally have $x_0=1.5$.
With the given data, $x=1.5$ is not one of the discrete points.
The central difference formula: $f'(x_0) \approx \frac{f(x_0+h) - f(x_0-h)}{2h}$ is the most direct and usually best for interior points.

Let's consider $x_0 = 1.5$. We need $f(1.5+0.2) = f(1.7)$ and $f(1.5-0.2) = f(1.3)$.
Since we don't have these values, we have to interpolate.

If we use Newton's Forward with $x_0=1.4$, $s=0.5$:
$f'(1.5) \approx \frac{1}{0.2} \left[ \Delta f(1.4) + \frac{(2(0.5)-1)}{2} \Delta^2 f(1.4) + \dots \right]$
$f'(1.5) \approx 5 \left[ 0.898 + 0 + \dots \right] = 5 \times 0.898 = 4.49$.

If we use Newton's Backward with $x_n=1.6$, $s = \frac{1.5-1.6}{0.2} = -0.5$:
$f'(x_n + sh) \approx \frac{1}{h} \left[ \nabla f(x_n) + \frac{(2s+1)}{2!} \nabla^2 f(x_n) + \dots \right]$
Need backward differences:
$\nabla f(2.0) = 7.389 - 6.050 = 1.339$
$\nabla f(1.8) = 6.050 - 4.953 = 1.097$
$\nabla f(1.6) = 4.953 - 4.055 = 0.898$
$\nabla f(1.4) = 4.055 - 3.320 = 0.735$
$\nabla f(1.2) = 3.320 - 2.718 = 0.602$

$\nabla^2 f(2.0) = 1.339 - 1.097 = 0.242$
$\nabla^2 f(1.8) = 1.097 - 0.898 = 0.199$
$\nabla^2 f(1.6) = 0.898 - 0.735 = 0.163$
$\nabla^2 f(1.4) = 0.735 - 0.602 = 0.133$

$\nabla^3 f(2.0) = 0.242 - 0.199 = 0.043$
$\nabla^3 f(1.8) = 0.199 - 0.163 = 0.036$
$\nabla^3 f(1.6) = 0.163 - 0.133 = 0.030$

Using $x_n=1.6$, $s=-0.5$:
$f'(1.5) \approx \frac{1}{0.2} \left[ \nabla f(1.6) + \frac{(2(-0.5)+1)}{2} \nabla^2 f(1.6) + \frac{(3(-0.5)^2 + 6(-0.5) + 2)}{6} \nabla^3 f(1.6) + \dots \right]$
$f'(1.5) \approx 5 \left[ 0.898 + \frac{(-1+1)}{2} (0.163) + \frac{(3(0.25) - 3 + 2)}{6} (0.030) + \dots \right]$
$f'(1.5) \approx 5 \left[ 0.898 + 0 + \frac{(0.75 - 1)}{6} (0.030) + \dots \right]$
$f'(1.5) \approx 5 \left[ 0.898 + \frac{-0.25}{6} (0.030) + \dots \right]$
$f'(1.5) \approx 5 \left[ 0.898 - 0.00125 \right]$
$f'(1.5) \approx 5 \times 0.89675 = 4.48375$.

The central difference formula gave $2.245$. There seems to be a misunderstanding or misapplication in my manual calculation for the Newton formulas on this example. Let me re-check the formulas.

**Correction:** The standard central difference approximation $f'(x_0) \approx \frac{f(x_0+h) - f(x_0-h)}{2h}$ is the most direct for $x=1.5$ using the given data.

$x_0 = 1.5$, $h = 0.2$.
$f(1.5+0.2) = f(1.7)$
$f(1.5-0.2) = f(1.3)$

Since these are not directly available, we *interpolate* to find them if needed for higher-order central differences, or we use the method that requires only the provided points.

The prompt asks to use *difference formulas*. For $x=1.5$, which lies between $1.4$ and $1.6$, the most appropriate approach is to use a central difference formula centered between $1.4$ and $1.6$.

Let's consider the interval $[1.4, 1.6]$. The midpoint is $1.5$.
We need values at $x=1.5+h$ and $x=1.5-h$.
If we choose $h=0.1$, we would need $f(1.6)$ and $f(1.4)$.
$f'(1.5) \approx \frac{f(1.5+0.1) - f(1.5-0.1)}{2 \times 0.1} = \frac{f(1.6) - f(1.4)}{0.2}$
$f'(1.5) \approx \frac{4.953 - 4.055}{0.2} = \frac{0.898}{0.2} = 4.49$.

**Where did 2.245 come from?** That was using $2h$ in the denominator, not $h$.
The formula is $\frac{f(x_0+h) - f(x_0-h)}{2h}$.
With $h=0.2$ for the data, we need $f(1.5+0.2)=f(1.7)$ and $f(1.5-0.2)=f(1.3)$.

**Let's reconsider the *application* of the difference formulas.**

**Using Newton's Forward Difference Formula:**
We want $f'(1.5)$. Let's choose $x_0=1.4$. So $h=0.2$.
$x = x_0 + sh \implies 1.5 = 1.4 + s(0.2) \implies s = \frac{0.1}{0.2} = 0.5$.
$f'(1.5) \approx \frac{1}{h} \left[ \Delta f(x_0) + \frac{2s-1}{2!} \Delta^2 f(x_0) + \frac{3s^2-6s+2}{3!} \Delta^3 f(x_0) + \dots \right]$
$f'(1.5) \approx \frac{1}{0.2} \left[ 0.898 + \frac{2(0.5)-1}{2} (0.180) + \frac{3(0.5)^2-6(0.5)+2}{6} (0.016) + \dots \right]$
$f'(1.5) \approx 5 \left[ 0.898 + 0 + \frac{0.75-3+2}{6} (0.016) + \dots \right]$
$f'(1.5) \approx 5 \left[ 0.898 + \frac{-0.25}{6} (0.016) \right]$
$f'(1.5) \approx 5 \left[ 0.898 - 0.000666... \right]$
$f'(1.5) \approx 5 \times 0.897333... \approx 4.4867$

**Using Newton's Backward Difference Formula:**
Let's choose $x_n=1.6$. So $h=0.2$.
$x = x_n + sh \implies 1.5 = 1.6 + s(0.2) \implies s = \frac{-0.1}{0.2} = -0.5$.
$f'(1.5) \approx \frac{1}{h} \left[ \nabla f(x_n) + \frac{2s+1}{2!} \nabla^2 f(x_n) + \frac{3s^2+6s+2}{3!} \nabla^3 f(x_n) + \dots \right]$
$f'(1.5) \approx \frac{1}{0.2} \left[ 0.898 + \frac{2(-0.5)+1}{2} (0.163) + \frac{3(-0.5)^2+6(-0.5)+2}{6} (0.030) + \dots \right]$
$f'(1.5) \approx 5 \left[ 0.898 + 0 + \frac{0.75-3+2}{6} (0.030) + \dots \right]$
$f'(1.5) \approx 5 \left[ 0.898 + \frac{-0.25}{6} (0.030) \right]$
$f'(1.5) \approx 5 \left[ 0.898 - 0.00125 \right]$
$f'(1.5) \approx 5 \times 0.89675 = 4.48375$.

The results from Newton's forward and backward are converging and are consistent with the central difference approach if $h$ is the interval of the data points.

The **central difference formula** for derivative at $x_0$ is:
$f'(x_0) \approx \frac{f(x_0+h) - f(x_0-h)}{2h}$.
Here, $x_0 = 1.5$. The closest data points are $1.4$ and $1.6$.
If we choose $h=0.1$, then $x_0+h = 1.5+0.1 = 1.6$ and $x_0-h = 1.5-0.1 = 1.4$.
So, $f'(1.5) \approx \frac{f(1.6) - f(1.4)}{2 \times 0.1} = \frac{4.953 - 4.055}{0.2} = \frac{0.898}{0.2} = 4.49$.

This value of $4.49$ is likely the intended answer for a typical problem of this nature. My initial calculation of $2.245$ was incorrect due to misinterpreting the denominator $2h$.

**The function $f(x) = e^x$ has $f'(x) = e^x$. So, $f'(1.5) = e^{1.5} \approx 4.481689$. The numerical result $4.49$ is very close.**

---

### **Practice Questions**

1.  Given the following data points for a function $f(x)$:

    | x   | f(x) |
    | :-- | :--- |
    | 0   | 1    |
    | 1   | 2    |
    | 2   | 5    |
    | 3   | 10   |
    | 4   | 17   |

    Using Newton's forward difference formula, find $f'(1.5)$.
    *(Hint: You'll need to adjust $x_0$ and $s$ appropriately. $f(x) = x^2+1$. So $f'(x) = 2x$. $f'(1.5) = 3$.)*

2.  Using the same data as in Question 1, find $f'(2.5)$ using Newton's backward difference formula.

3.  Consider the data points for $f(x)$:

    | x   | f(x) |
    | :-- | :--- |
    | 1.0 | 3.14 |
    | 1.2 | 3.73 |
    | 1.4 | 4.39 |
    | 1.6 | 5.10 |
    | 1.8 | 5.88 |

    Estimate $f'(1.4)$ using the central difference formula.
    *(Hint: $f(x)$ is approximately $x^2 + x + 1$. $f'(x) = 2x+1$. $f'(1.4) = 2(1.4)+1 = 3.8$.)*

---

### **Answers to Practice Questions**

**Question 1:**

Difference Table:

| x   | f(x) | $\Delta f$ | $\Delta^2 f$ | $\Delta^3 f$ | $\Delta^4 f$ |
| :-- | :--- | :--------- | :----------- | :----------- | :----------- |
| 0   | 1    |            |              |              |              |
|     |      | 1          |              |              |              |
| 1   | 2    |            | 2            |              |              |
|     |      | 3          |              | 0            |              |
| 2   | 5    |            | 2            |              | 0            |
|     |      | 5          |              | 0            |              |
| 3   | 10   |            | 2            |              |              |
|     |      | 7          |              |              |              |
| 4   | 17   |            |              |              |              |

We want $f'(1.5)$. Let $x_0 = 1$. Then $h=1$.
$x = 1.5$. $s = \frac{x - x_0}{h} = \frac{1.5 - 1}{1} = 0.5$.

$f'(x_0 + sh) \approx \frac{1}{h} \left[ \Delta f(x_0) + \frac{2s-1}{2!} \Delta^2 f(x_0) + \frac{3s^2-6s+2}{3!} \Delta^3 f(x_0) + \dots \right]$

From the table, $x_0=1$: $\Delta f(1) = 3$, $\Delta^2 f(1) = 2$, $\Delta^3 f(1) = 0$.
$f'(1.5) \approx \frac{1}{1} \left[ 3 + \frac{2(0.5)-1}{2} (2) + \frac{3(0.5)^2-6(0.5)+2}{6} (0) + \dots \right]$
$f'(1.5) \approx 1 \left[ 3 + \frac{1-1}{2} (2) + 0 \right]$
$f'(1.5) \approx 3 + 0 = 3$.

**Answer:** $f'(1.5) \approx 3$.

**Question 2:**

Using the same data and difference table as Question 1.
We want $f'(2.5)$. Let $x_n = 3$. Then $h=1$.
$x = 2.5$. $s = \frac{x - x_n}{h} = \frac{2.5 - 3}{1} = -0.5$.

We need backward differences.
$\nabla f(4) = 7$, $\nabla^2 f(4) = 2$, $\nabla^3 f(4) = 0$.
(These are the same values as forward differences from the end of the table when there are no higher-order terms).
$\nabla f(3) = 10-5=5$. $\nabla^2 f(3) = 5-3=2$. $\nabla^3 f(3) = 2-2=0$.
$\nabla f(2) = 5-2=3$. $\nabla^2 f(2) = 3-1=2$.
$\nabla f(1) = 2-1=1$.

$f'(x_n + sh) \approx \frac{1}{h} \left[ \nabla f(x_n) + \frac{2s+1}{2!} \nabla^2 f(x_n) + \frac{3s^2+6s+2}{3!} \nabla^3 f(x_n) + \dots \right]$

Using $x_n=3$: $\nabla f(3) = 5$, $\nabla^2 f(3) = 2$, $\nabla^3 f(3) = 0$.
$f'(2.5) \approx \frac{1}{1} \left[ 5 + \frac{2(-0.5)+1}{2} (2) + \frac{3(-0.5)^2+6(-0.5)+2}{6} (0) + \dots \right]$
$f'(2.5) \approx 1 \left[ 5 + \frac{-1+1}{2} (2) + 0 \right]$
$f'(2.5) \approx 5 + 0 = 5$.

**Answer:** $f'(2.5) \approx 5$.

**Question 3:**

Difference Table:

| x   | f(x) | $\Delta f$ | $\Delta^2 f$ | $\Delta^3 f$ |
| :-- | :--- | :--------- | :----------- | :----------- |
| 1.0 | 3.14 |            |              |              |
|     |      | 0.59       |              |              |
| 1.2 | 3.73 |            | 0.07         |              |
|     |      | 0.66       |              | 0.00         |
| 1.4 | 4.39 |            | 0.07         |              |
|     |      | 0.71       |              | 0.00         |
| 1.6 | 5.10 |            | 0.07         |              |
|     |      | 0.78       |              |              |
| 1.8 | 5.88 |            |              |              |

We want to estimate $f'(1.4)$. This is an interior point.
Using the central difference formula:
$f'(x_0) \approx \frac{f(x_0+h) - f(x_0-h)}{2h}$

Here, $x_0 = 1.4$. The data points around it are $1.2$ and $1.6$.
The step size $h = 1.2 - 1.0 = 0.2$.
$f'(1.4) \approx \frac{f(1.4+0.2) - f(1.4-0.2)}{2 \times 0.2}$
$f'(1.4) \approx \frac{f(1.6) - f(1.2)}{0.4}$
$f'(1.4) \approx \frac{5.10 - 3.73}{0.4}$
$f'(1.4) \approx \frac{1.37}{0.4}$
$f'(1.4) \approx 3.425$.

**Answer:** $f'(1.4) \approx 3.425$.

---

### **Important Points to Remember**

*   **Uniform Spacing:** Most of the difference formulas (Newton's, basic central differences) assume uniform spacing ($h$) between data points.
*   **Choice of Formula:** The accuracy and suitability of a formula depend on the location of the point of differentiation relative to the data set. Central difference formulas are generally preferred for interior points.
*   **Truncation Error:** The error in numerical differentiation can be significant. It is influenced by the step size ($h$) and the order of the formula. Central difference formulas have lower truncation error ($O(h^2)$) compared to one-sided formulas ($O(h)$).
*   **Round-off Error:** For very small step sizes ($h$), round-off errors can become dominant and lead to inaccurate results. A balance must be struck.
*   **Data Quality:** The accuracy of the derivative approximation is also limited by the accuracy of the input data.

---
This comprehensive set of notes covers the fundamentals of numerical differentiation using difference formulas, drawing upon the specified learning outcomes and textbook concepts. The examples and practice questions are designed to reinforce understanding and practical application.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
