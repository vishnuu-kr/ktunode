---
title: "Continuity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462c9e"
status: "completed"
scrapedAt: "2026-05-20T17:50:38.683Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Functions

### Topic: Continuity

---

### **Introduction to Continuity in Complex Analysis**

Continuity is a fundamental concept in calculus, and its extension to complex functions is crucial for understanding more advanced topics like analyticity and integration. A complex function is considered continuous at a point if its value approaches a specific limit as the input approaches that point, and that limit is equal to the function's value at the point.

---

### **1. Definition of Continuity of a Complex Function**

A complex function $f(z)$ is said to be **continuous at a point $z_0$** if the following three conditions are met:

1.  **$f(z_0)$ is defined:** The function must have a value at the point $z_0$.
2.  **$\lim_{z \to z_0} f(z)$ exists:** The limit of the function as $z$ approaches $z_0$ must exist. This means that as $z$ gets arbitrarily close to $z_0$ (from any direction in the complex plane), $f(z)$ gets arbitrarily close to a specific complex number.
3.  **$\lim_{z \to z_0} f(z) = f(z_0)$:** The limit of the function as $z$ approaches $z_0$ must be equal to the value of the function at $z_0$.

**Key Concept:** The limit in condition 2 exists if and only if the limit is the same regardless of the path along which $z$ approaches $z_0$. This is a key difference from limits in real-variable calculus where $z$ can only approach $z_0$ from the left or right.

---

### **2. Continuity in Terms of $\epsilon-\delta$ Definition**

The definition of continuity for a complex function can be rigorously stated using the $\epsilon-\delta$ definition, analogous to real analysis:

A complex function $f(z)$ is **continuous at $z_0$** if for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $0 < |z - z_0| < \delta$, then $|f(z) - f(z_0)| < \epsilon$.

**Explanation:**
*   $\epsilon$: Represents an arbitrary small positive number for the output of the function.
*   $\delta$: Represents an arbitrary small positive number for the input of the function.
*   $|z - z_0| < \delta$: Means that $z$ is within a distance $\delta$ of $z_0$ in the complex plane (excluding $z_0$ itself in the limit definition, but for continuity, we consider $z=z_0$ as well).
*   $|f(z) - f(z_0)| < \epsilon$: Means that the function's value $f(z)$ is within a distance $\epsilon$ of $f(z_0)$.

This definition essentially states that as we bring $z$ arbitrarily close to $z_0$, the function value $f(z)$ becomes arbitrarily close to $f(z_0)$.

---

### **3. Continuity of a Function $f(z) = u(x, y) + iv(x, y)$**

Let $z = x + iy$ and $z_0 = x_0 + iy_0$. A complex function $f(z)$ can be expressed in terms of its real and imaginary parts as $f(z) = u(x, y) + iv(x, y)$.

The function $f(z)$ is **continuous at $z_0 = x_0 + iy_0$** if and only if **both its real part $u(x, y)$ and its imaginary part $v(x, y)$ are continuous as functions of two real variables $x$ and $y$ at the point $(x_0, y_0)$**.

**Why this is true:**
The limit $\lim_{z \to z_0} f(z)$ exists and equals $L = L_u + iL_v$ if and only if $\lim_{(x,y) \to (x_0,y_0)} u(x, y) = L_u$ and $\lim_{(x,y) \to (x_0,y_0)} v(x, y) = L_v$.
For continuity, we require $\lim_{z \to z_0} f(z) = f(z_0)$.
$f(z_0) = u(x_0, y_0) + iv(x_0, y_0)$.
Therefore, $f(z)$ is continuous at $z_0$ if and only if:
$\lim_{(x,y) \to (x_0,y_0)} u(x, y) = u(x_0, y_0)$ (i.e., $u$ is continuous at $(x_0, y_0)$)
AND
$\lim_{(x,y) \to (x_0,y_0)} v(x, y) = v(x_0, y_0)$ (i.e., $v$ is continuous at $(x_0, y_0)$)

**References:**
*   **Kreyszig:** Chapter 13, Section 13.1 (Complex Functions), specifically the concept of limits and continuity. The approach is to express complex functions in terms of real and imaginary parts.
*   **Zill & Shanahan:** Chapter 2, Section 2.1 (Functions of a Complex Variable), where continuity is defined. They also emphasize the relationship with the continuity of real and imaginary parts.
*   **Ramana:** Chapter 31, Section 31.1 (Complex Variables) and 31.3 (Limit and Continuity).
*   **Grewal:** Chapter 11, Section 11.1 (Complex Variables), discussing limits and continuity.

---

### **4. Continuity on a Domain**

A function $f(z)$ is **continuous on an open domain $D$** if it is continuous at every point $z_0$ in $D$.

**Important Note:** If $f(z)$ is continuous on a closed and bounded region $R$, then it is also uniformly continuous on $R$ and attains its maximum and minimum magnitudes on $R$.

---

### **5. Properties of Continuous Complex Functions**

If $f(z)$ and $g(z)$ are continuous at $z_0$:

*   **Sum:** $f(z) + g(z)$ is continuous at $z_0$.
*   **Difference:** $f(z) - g(z)$ is continuous at $z_0$.
*   **Product:** $f(z)g(z)$ is continuous at $z_0$.
*   **Quotient:** $\frac{f(z)}{g(z)}$ is continuous at $z_0$, provided $g(z_0) \neq 0$.
*   **Composition:** If $g(z)$ is continuous at $z_0$ and $f(w)$ is continuous at $w_0 = g(z_0)$, then the composite function $f(g(z))$ is continuous at $z_0$.

**These properties are inherited from the continuity properties of real-valued functions of two variables.**

---

### **6. Continuity of Elementary Complex Functions**

The continuity of elementary complex functions is crucial for constructing more complex continuous functions.

*   **Polynomials:** Any polynomial $P(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0$, where $a_i$ are complex coefficients, is continuous everywhere in the complex plane ($\mathbb{C}$).
    *   **Reasoning:** Polynomials are sums and products of continuous functions ($z$ and constants). The constant function $f(z) = c$ is continuous. The function $f(z) = z$ is continuous. Therefore, sums and products of these are continuous.
*   **Rational Functions:** A rational function $R(z) = \frac{P(z)}{Q(z)}$, where $P(z)$ and $Q(z)$ are polynomials, is continuous everywhere in $\mathbb{C}$ except at the points where the denominator $Q(z) = 0$.
    *   **Reasoning:** This follows from the quotient property of continuous functions.
*   **Exponential Function:** $e^z$ is continuous everywhere in $\mathbb{C}$.
    *   **Proof:** $e^z = e^{x+iy} = e^x (\cos y + i \sin y)$. The real part is $u(x, y) = e^x \cos y$ and the imaginary part is $v(x, y) = e^x \sin y$. Both $e^x$, $\cos y$, and $\sin y$ are continuous functions of their respective real variables. Products of continuous functions are continuous, so $u(x, y)$ and $v(x, y)$ are continuous. Thus, $e^z$ is continuous.
*   **Trigonometric Functions:** $\sin z$, $\cos z$, $\tan z$, etc., are continuous where they are defined.
    *   **Reasoning:** These can be expressed in terms of $e^z$. For example, $\sin z = \frac{e^{iz} - e^{-iz}}{2i}$ and $\cos z = \frac{e^{iz} + e^{-iz}}{2}$. Since $e^z$ is continuous, and sums, differences, and scalar multiples of continuous functions are continuous, $\sin z$ and $\cos z$ are continuous everywhere. $\tan z = \frac{\sin z}{\cos z}$ is continuous everywhere except where $\cos z = 0$.
*   **Logarithmic Function:** The principal branch of the logarithm, $\text{Log } z$, is continuous everywhere except for the non-positive real axis ($z=x+iy$ with $x \le 0$ and $y=0$). Other branches will have branch cuts and be continuous on their respective domains.
    *   **Reasoning:** $\text{Log } z = \ln |z| + i \text{Arg } z$. For the principal branch, $\text{Arg } z \in (-\pi, \pi)$. $\ln |z|$ is continuous for $z \neq 0$. $\text{Arg } z$ is continuous for $z$ not on the non-positive real axis. Thus, their sum is continuous on $\mathbb{C} \setminus (-\infty, 0]$.

---

### **7. Continuity and Limits**

The concept of continuity is intrinsically linked to the existence of a limit. If a function is continuous at a point $z_0$, then the limit as $z \to z_0$ must exist and be equal to $f(z_0)$.

**Consider $f(z) = \frac{z^2 - 1}{z - 1}$:**
This function is not defined at $z=1$. Let's investigate the limit as $z \to 1$.
For $z \neq 1$, $f(z) = \frac{(z-1)(z+1)}{z-1} = z+1$.
So, $\lim_{z \to 1} f(z) = \lim_{z \to 1} (z+1) = 1+1 = 2$.
The limit exists. However, $f(1)$ is undefined, so the function is not continuous at $z=1$.

We can define a new function $F(z)$ that "removes the discontinuity":
$F(z) = \begin{cases} \frac{z^2 - 1}{z - 1} & \text{if } z \neq 1 \\ 2 & \text{if } z = 1 \end{cases}$
This function $F(z)$ is continuous at $z=1$ because:
1. $F(1) = 2$ is defined.
2. $\lim_{z \to 1} F(z) = 2$ exists.
3. $\lim_{z \to 1} F(z) = F(1)$.

This is an example of a **removable discontinuity**.

---

### **8. Discontinuities**

A function $f(z)$ is discontinuous at $z_0$ if any of the three conditions for continuity are not met. Common types of discontinuities include:

*   **Removable Discontinuity:** If $\lim_{z \to z_0} f(z)$ exists but is not equal to $f(z_0)$ (either $f(z_0)$ is undefined or has a different value). This was illustrated above with $\frac{z^2-1}{z-1}$.
*   **Jump Discontinuity:** If the limit from different directions yields different values. For complex functions, this is less common as limits must be path-independent. However, if we consider the function's definition across different branches or domains, it could manifest.
*   **Essential Singularity/Pole:** If the limit does not exist (e.g., goes to infinity). These are covered in later topics on singularities.

---

### **9. Learning Outcome Alignment**

This topic directly supports understanding the behavior of complex functions, which is foundational for the other learning outcomes:

*   **CO1 (Fourier Transforms):** Many functions used in Fourier transforms are continuous or have well-defined discontinuities. Understanding continuity helps in determining the domain of validity for transform operations.
*   **CO2 (Analyticity/Conformal Mapping):** Analyticity is a much stronger condition than continuity. A function must be continuous at a point to be differentiable there, and differentiable to be analytic. Continuity is the first step. Conformal mappings preserve angles and are a consequence of analyticity.
*   **CO3 (Complex Integrals):** Cauchy's theorems and formulas are applied to analytic functions. For a function to be analytic, it must be continuous. The continuity of the integrand is often assumed or checked when applying these theorems.
*   **CO4 (Series Expansion/Residue Theorem):** While dealing with singularities where functions might not be continuous, the behavior *around* these points (e.g., Taylor or Laurent series) relies on the function's properties in neighborhoods, which starts with continuity.

---

### **Practice Questions/Exercises**

**Question 1:**
Determine if the function $f(z) = |z|^2$ is continuous at $z_0 = 1 + i$.

**Solution:**
Let $f(z) = |z|^2$. We can write $z = x + iy$, so $|z|^2 = x^2 + y^2$.
Thus, $f(z) = u(x, y) + iv(x, y)$, where $u(x, y) = x^2 + y^2$ and $v(x, y) = 0$.
The point $z_0 = 1 + i$ corresponds to $(x_0, y_0) = (1, 1)$.

1.  **Is $f(z_0)$ defined?**
    $f(1+i) = |1+i|^2 = (\sqrt{1^2 + 1^2})^2 = (\sqrt{2})^2 = 2$. Yes, it is defined.

2.  **Does $\lim_{z \to z_0} f(z)$ exist?**
    We need to check the continuity of $u(x, y) = x^2 + y^2$ and $v(x, y) = 0$ at $(1, 1)$.
    For $u(x, y) = x^2 + y^2$, this is a polynomial in $x$ and $y$, which is continuous everywhere.
    $\lim_{(x,y) \to (1,1)} (x^2 + y^2) = 1^2 + 1^2 = 2$.
    For $v(x, y) = 0$, this is a constant function, which is continuous everywhere.
    $\lim_{(x,y) \to (1,1)} 0 = 0$.
    Since both $u$ and $v$ are continuous at $(1, 1)$, the limit of $f(z)$ exists:
    $\lim_{z \to 1+i} f(z) = \lim_{(x,y) \to (1,1)} (x^2 + y^2) + i \lim_{(x,y) \to (1,1)} 0 = 2 + i \cdot 0 = 2$.

3.  **Is $\lim_{z \to z_0} f(z) = f(z_0)$?**
    We found $\lim_{z \to 1+i} f(z) = 2$ and $f(1+i) = 2$.
    Since $2 = 2$, the condition is met.

**Conclusion:** The function $f(z) = |z|^2$ is continuous at $z_0 = 1 + i$.

---

**Question 2:**
Determine if the function $f(z) = \frac{1}{z}$ is continuous at $z_0 = 0$.

**Solution:**
For $f(z) = \frac{1}{z}$, we have $z_0 = 0$.

1.  **Is $f(z_0)$ defined?**
    $f(0) = \frac{1}{0}$, which is undefined.

Since the first condition for continuity is not met, the function $f(z) = \frac{1}{z}$ is not continuous at $z_0 = 0$. This is an example of an essential singularity (specifically, a pole of order 1).

---

**Question 3:**
Consider the function:
$f(z) = \begin{cases} \frac{z^2}{|z|^2} & \text{if } z \neq 0 \\ 1 & \text{if } z = 0 \end{cases}$
Is $f(z)$ continuous at $z_0 = 0$?

**Solution:**
We need to check the three conditions for continuity at $z_0 = 0$.

1.  **Is $f(z_0)$ defined?**
    $f(0) = 1$, as given by the definition. Yes, it is defined.

2.  **Does $\lim_{z \to 0} f(z)$ exist?**
    We need to evaluate the limit of $\frac{z^2}{|z|^2}$ as $z \to 0$.
    Let $z = x + iy$. Then $z^2 = (x+iy)^2 = x^2 - y^2 + 2ixy$ and $|z|^2 = x^2 + y^2$.
    So, $f(z) = \frac{x^2 - y^2 + 2ixy}{x^2 + y^2}$ for $z \neq 0$.

    Let's approach $z_0 = 0$ along different paths:

    *   **Path 1: Along the real axis (y=0, $z=x$)**
        $\lim_{x \to 0} f(x) = \lim_{x \to 0} \frac{x^2}{x^2} = 1$.

    *   **Path 2: Along the imaginary axis (x=0, $z=iy$)**
        $\lim_{y \to 0} f(iy) = \lim_{y \to 0} \frac{(iy)^2}{|iy|^2} = \lim_{y \to 0} \frac{-y^2}{y^2} = -1$.

    Since the limit along the real axis (1) is different from the limit along the imaginary axis (-1), the limit $\lim_{z \to 0} f(z)$ does not exist.

**Conclusion:** Because the limit does not exist, the function $f(z)$ is not continuous at $z_0 = 0$.

---

### **Important Points to Remember**

*   **Path Independence is Key:** The limit $\lim_{z \to z_0} f(z)$ must be the same regardless of the path taken by $z$ to approach $z_0$ in the complex plane.
*   **Real and Imaginary Parts:** A complex function $f(z) = u(x, y) + iv(x, y)$ is continuous at $z_0 = x_0 + iy_0$ if and only if its real part $u(x, y)$ and imaginary part $v(x, y)$ are continuous as functions of two real variables at $(x_0, y_0)$.
*   **Elementary Functions:** Polynomials and rational functions are continuous where defined. The exponential and trigonometric functions are continuous everywhere. The logarithm's continuity depends on the branch chosen.
*   **Continuity is a Prerequisite:** Continuity is a basic requirement for many more advanced concepts in complex analysis, such as differentiability and analyticity.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
