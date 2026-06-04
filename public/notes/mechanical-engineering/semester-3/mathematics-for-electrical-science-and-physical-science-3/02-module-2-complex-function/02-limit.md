---
title: "Limit"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462c9d"
status: "completed"
scrapedAt: "2026-05-20T17:50:37.971Z"
---
## MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

**Module 2: Complex Functions**

**Topic: Limit**

---

### **Introduction**

This section delves into the concept of limits as applied to complex functions. Understanding limits is fundamental to defining continuity, differentiability, and ultimately, the behavior of complex functions. This topic is crucial for grasping later concepts like analyticity, contour integration, and series expansions, which are directly relevant to our Course Outcomes (COs).

---

### **Learning Outcomes**

Upon successful completion of this topic, you will be able to:

*   **LO 1:** Define the limit of a complex function.
*   **LO 2:** State and apply the epsilon-delta definition of a limit for complex functions.
*   **LO 3:** Evaluate limits of complex functions using algebraic manipulation and properties of complex numbers.
*   **LO 4:** Understand and apply the path independence of limits for complex functions.
*   **LO 5:** Relate the limit of a complex function to the continuity of the function.

---

### **Key Concepts and Definitions**

#### **1. The Complex Plane**

Recall that a complex number $z = x + iy$ can be represented as a point $(x, y)$ in the complex plane, where $x$ is the real part and $y$ is the imaginary part. The distance between two complex numbers $z_1 = x_1 + iy_1$ and $z_2 = x_2 + iy_2$ is given by the modulus of their difference:

$|z_1 - z_2| = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$

This is analogous to the Euclidean distance in the Cartesian plane.

#### **2. Neighborhood of a Point**

A **neighborhood** of a complex number $z_0$ is the set of all complex numbers $z$ such that $|z - z_0| < \epsilon$, where $\epsilon$ is a small positive real number. This represents an open disk centered at $z_0$ with radius $\epsilon$.

#### **3. The Limit of a Complex Function**

Let $f(z)$ be a complex function defined in a neighborhood of $z_0$, except possibly at $z_0$ itself. We say that the **limit of $f(z)$ as $z$ approaches $z_0$ is $L$**, denoted by:

$\lim_{z \to z_0} f(z) = L$

if, for every positive real number $\epsilon$, there exists a positive real number $\delta$ such that if $0 < |z - z_0| < \delta$, then $|f(z) - L| < \epsilon$.

This is the **$\epsilon-\delta$ definition of a limit**, a direct extension of the real-valued limit definition. It means that as $z$ gets arbitrarily close to $z_0$ (but not equal to $z_0$), the value of $f(z)$ gets arbitrarily close to $L$.

**Key Point:** For the limit to exist, $f(z)$ must approach the same value $L$ regardless of the path along which $z$ approaches $z_0$.

#### **4. Real and Imaginary Parts of the Limit**

If $z = x + iy$, $z_0 = x_0 + iy_0$, and $L = u_0 + iv_0$, then the limit can be expressed in terms of the real and imaginary parts of $f(z) = u(x, y) + iv(x, y)$:

$\lim_{z \to z_0} f(z) = L \iff \lim_{(x,y) \to (x_0,y_0)} u(x, y) = u_0$ and $\lim_{(x,y) \to (x_0,y_0)} v(x, y) = v_0$.

This means that the limit of a complex function exists if and only if the limits of its real and imaginary parts exist as functions of two real variables. This is a powerful tool for evaluating limits.

#### **5. Properties of Limits**

If $\lim_{z \to z_0} f(z) = L$ and $\lim_{z \to z_0} g(z) = M$, then:

*   **Sum:** $\lim_{z \to z_0} [f(z) + g(z)] = L + M$
*   **Difference:** $\lim_{z \to z_0} [f(z) - g(z)] = L - M$
*   **Product:** $\lim_{z \to z_0} [f(z) g(z)] = LM$
*   **Quotient:** $\lim_{z \to z_0} \frac{f(z)}{g(z)} = \frac{L}{M}$, provided $M \neq 0$.
*   **Scalar Multiple:** $\lim_{z \to z_0} [c f(z)] = cL$, where $c$ is a complex constant.

These properties are essential for simplifying limit calculations.

#### **6. Path Independence of Limits**

For a limit to exist at a point $z_0$, the function $f(z)$ must approach the same value $L$ regardless of the path taken by $z$ towards $z_0$. If we can find two different paths leading to $z_0$ along which $f(z)$ approaches different values, then the limit does not exist.

This is a critical distinction from limits in real calculus where there are typically only two directions of approach (left and right). In the complex plane, there are infinitely many paths.

#### **7. Limits Involving Infinity**

The concept of a limit can be extended to include the point at infinity. The **extended complex plane** (also known as the Riemann sphere) includes a single point at infinity, denoted by $\infty$.

We say $\lim_{z \to z_0} f(z) = \infty$ if, for every large positive real number $M$, there exists a positive real number $\delta$ such that if $0 < |z - z_0| < \delta$, then $|f(z)| > M$.

Similarly, we can consider limits as $z \to \infty$:

$\lim_{z \to \infty} f(z) = L$ if, for every positive real number $\epsilon$, there exists a positive real number $R$ such that if $|z| > R$, then $|f(z) - L| < \epsilon$.

To evaluate $\lim_{z \to \infty} f(z)$, we can use the substitution $z = 1/w$ and evaluate $\lim_{w \to 0} f(1/w)$.

---

### **Examples and Illustrations**

**Example 1: Evaluating a Limit using $\epsilon-\delta$ (Conceptual)**

Let's consider $f(z) = 2z$. We want to show that $\lim_{z \to 1+i} 2z = 2(1+i) = 2+2i$.
We need to show that for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $0 < |z - (1+i)| < \delta$, then $|f(z) - (2+2i)| < \epsilon$.

$|f(z) - (2+2i)| = |2z - (2+2i)| = |2(z - (1+i))| = 2|z - (1+i)|$.

We want $2|z - (1+i)| < \epsilon$. This means $|z - (1+i)| < \epsilon/2$.
So, if we choose $\delta = \epsilon/2$, then whenever $0 < |z - (1+i)| < \delta$, we have $|f(z) - (2+2i)| < \epsilon$.
Thus, $\lim_{z \to 1+i} 2z = 2+2i$.

**Example 2: Using Real and Imaginary Parts**

Evaluate $\lim_{z \to 2+i} \frac{z^2 - (2+i)^2}{z - (2+i)}$.

Let $f(z) = \frac{z^2 - (2+i)^2}{z - (2+i)}$. This is of the form $0/0$ when $z = 2+i$.
We can simplify algebraically:
$f(z) = \frac{(z - (2+i))(z + (2+i))}{z - (2+i)} = z + (2+i)$, for $z \neq 2+i$.

Now, $\lim_{z \to 2+i} (z + (2+i)) = (2+i) + (2+i) = 4+2i$.

Alternatively, let $z = x + iy$ and $z_0 = 2+i$.
$f(z) = z + (2+i) = (x+iy) + (2+i) = (x+2) + i(y+1)$.
Here $u(x,y) = x+2$ and $v(x,y) = y+1$.
As $z \to 2+i$, we have $(x,y) \to (2,1)$.
$\lim_{(x,y) \to (2,1)} (x+2) = 2+2 = 4$.
$\lim_{(x,y) \to (2,1)} (y+1) = 1+1 = 2$.
So, $L = 4 + 2i$.

**Example 3: Path Independence (Demonstrating Non-Existence of Limit)**

Consider $f(z) = \frac{z}{\bar{z}}$, and we want to find the limit as $z \to 0$.
Let $z = x + iy$. Then $\bar{z} = x - iy$.
$f(z) = \frac{x+iy}{x-iy}$.

**Path 1: Along the real axis ($y=0, x \to 0$)**
$f(z) = \frac{x}{x} = 1$ (for $x \neq 0$).
$\lim_{x \to 0} 1 = 1$.

**Path 2: Along the imaginary axis ($x=0, y \to 0$)**
$f(z) = \frac{iy}{-iy} = -1$ (for $y \neq 0$).
$\lim_{y \to 0} -1 = -1$.

Since the limits along two different paths are different ($1 \neq -1$), the limit of $f(z) = \frac{z}{\bar{z}}$ as $z \to 0$ **does not exist**.

**Example 4: Limit at Infinity**

Evaluate $\lim_{z \to \infty} \frac{2z^2 + 1}{z^2 - 3}$.
Let $z = 1/w$. As $z \to \infty$, $w \to 0$.
$\lim_{w \to 0} \frac{2(1/w)^2 + 1}{(1/w)^2 - 3} = \lim_{w \to 0} \frac{2/w^2 + 1}{1/w^2 - 3} = \lim_{w \to 0} \frac{2 + w^2}{1 - 3w^2} = \frac{2+0}{1-0} = 2$.

Alternatively, for rational functions where the degree of the numerator and denominator are the same, the limit as $z \to \infty$ is the ratio of the leading coefficients: $2/1 = 2$.

**Example 5: Limit to Infinity**

Evaluate $\lim_{z \to 1+i} \frac{1}{(z - (1+i))^2}$.
As $z \to 1+i$, $(z - (1+i))^2 \to 0$. The numerator is a constant 1.
Let $z - (1+i) = \Delta z$. Then $|\Delta z| \to 0$.
$|f(z)| = \left|\frac{1}{(\Delta z)^2}\right| = \frac{1}{|\Delta z|^2}$.
As $|\Delta z| \to 0$, $|\Delta z|^2 \to 0$ through positive values. Therefore, $\frac{1}{|\Delta z|^2} \to \infty$.
So, $\lim_{z \to 1+i} \frac{1}{(z - (1+i))^2} = \infty$.

---

### **Practice Questions and Exercises**

*(Note: Answers are provided at the end of this section.)*

1.  **Evaluate the following limits:**
    a.  $\lim_{z \to 2-i} (z^3 + 4z)$
    b.  $\lim_{z \to i} \frac{z^2 + 1}{z - i}$
    c.  $\lim_{z \to 0} \frac{\text{Re}(z)}{|z|}$
    d.  $\lim_{z \to \infty} \frac{3z^2 - z + 1}{5z^2 + 2z - 4}$
    e.  $\lim_{z \to 0} \frac{|z|^2}{z}$

2.  **Determine if the following limit exists. If it does, find its value. If not, explain why.**
    $\lim_{z \to 0} \frac{\text{Im}(z)}{|z|}$

3.  **Use the $\epsilon-\delta$ definition to prove that $\lim_{z \to 1} (2z+3) = 5$.**

4.  **Evaluate $\lim_{z \to 1+2i} \frac{z^2 + (1-3i)z - (2+7i)}{z - (1+2i)}$**

5.  **Consider the function $f(z) = \frac{z^2}{\bar{z}^2}$. Does $\lim_{z \to 0} f(z)$ exist? Justify your answer by examining at least two paths of approach.**

---

### **Answers to Practice Questions**

1.  **a.** $f(z) = z^3 + 4z$ is a polynomial, so it's continuous everywhere.
    $\lim_{z \to 2-i} (z^3 + 4z) = (2-i)^3 + 4(2-i)$
    $(2-i)^3 = 2^3 - 3(2^2)(i) + 3(2)(i^2) - i^3 = 8 - 12i - 6 + i = 2 - 11i$.
    $4(2-i) = 8 - 4i$.
    Limit = $(2 - 11i) + (8 - 4i) = \boxed{10 - 15i}$.

    **b.** $f(z) = \frac{z^2 + 1}{z - i}$. At $z=i$, the numerator is $i^2 + 1 = -1 + 1 = 0$, and the denominator is $i-i=0$. This is an indeterminate form $0/0$.
    $f(z) = \frac{(z-i)(z+i)}{z-i} = z+i$ for $z \neq i$.
    $\lim_{z \to i} (z+i) = i+i = \boxed{2i}$.

    **c.** Let $z = x+iy$. Then $\text{Re}(z) = x$ and $|z| = \sqrt{x^2+y^2}$.
    $f(z) = \frac{x}{\sqrt{x^2+y^2}}$.
    **Path 1: Along the real axis ($y=0, x \to 0$)**: $f(z) = \frac{x}{\sqrt{x^2}} = \frac{x}{|x|}$. As $x \to 0^+$, this is $1$. As $x \to 0^-$, this is $-1$. Since limits from left and right are different, the limit along the real axis does not exist. Therefore, the overall limit **does not exist**.

    **d.** For rational functions, as $z \to \infty$, the limit is the ratio of leading coefficients if the degrees are equal.
    $\lim_{z \to \infty} \frac{3z^2 - z + 1}{5z^2 + 2z - 4} = \boxed{\frac{3}{5}}$.

    **e.** $f(z) = \frac{z^2}{\bar{z}^2}$. Let $z = re^{i\theta}$. Then $\bar{z} = re^{-i\theta}$.
    $f(z) = \frac{(re^{i\theta})^2}{(re^{-i\theta})^2} = \frac{r^2 e^{i2\theta}}{r^2 e^{-i2\theta}} = e^{i4\theta}$ (for $r \neq 0$).
    As $z \to 0$, $r \to 0$. The expression $e^{i4\theta}$ depends on the angle $\theta$, which represents the path of approach. For example, along the real axis ($\theta=0$), $f(z) = e^0 = 1$. Along the imaginary axis ($\theta=\pi/2$), $f(z) = e^{i2\pi} = 1$. Along the line $y=x$ ($\theta=\pi/4$), $f(z) = e^{i\pi} = -1$.
    Since the limit depends on the path, the limit **does not exist**.

2.  Let $z = x+iy$. $f(z) = \frac{x}{\sqrt{x^2+y^2}}$.
    **Path 1: Along the real axis ($y=0, x \to 0$)**: $f(z) = \frac{x}{\sqrt{x^2}} = \frac{x}{|x|}$. As $x \to 0^+$, $f(z) \to 1$. As $x \to 0^-$, $f(z) \to -1$. The limit along the real axis itself does not exist.
    **Path 2: Along the imaginary axis ($x=0, y \to 0$)**: $f(z) = \frac{0}{\sqrt{y^2}} = 0$ (for $y \neq 0$). So, $\lim_{y \to 0} 0 = 0$.
    Since the limit along the real axis does not exist, the overall limit **does not exist**. (We only need one path to show non-existence, but examining multiple paths can be illustrative).

3.  Prove $\lim_{z \to 1} (2z+3) = 5$.
    We need to show that for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $0 < |z - 1| < \delta$, then $|(2z+3) - 5| < \epsilon$.
    $|(2z+3) - 5| = |2z - 2| = |2(z-1)| = 2|z-1|$.
    We want $2|z-1| < \epsilon$. This implies $|z-1| < \epsilon/2$.
    Choose $\delta = \epsilon/2$. Then, if $0 < |z - 1| < \delta$, we have $|(2z+3) - 5| < \epsilon$.
    Hence, the limit is proven.

4.  Let $f(z) = \frac{z^2 + (1-3i)z - (2+7i)}{z - (1+2i)}$.
    At $z = 1+2i$, the numerator is $(1+2i)^2 + (1-3i)(1+2i) - (2+7i)$.
    $(1+2i)^2 = 1 + 4i + 4i^2 = 1 + 4i - 4 = -3 + 4i$.
    $(1-3i)(1+2i) = 1 + 2i - 3i - 6i^2 = 1 - i + 6 = 7 - i$.
    Numerator = $(-3 + 4i) + (7 - i) - (2+7i) = -3 + 4i + 7 - i - 2 - 7i = 2 - 4i$.
    Since the numerator is not zero, this is not an indeterminate form. The function is continuous at $z \neq 1+2i$.
    The limit can be evaluated by direct substitution of $z = 1+2i$ into the numerator. This is incorrect reasoning.

    We must first check if $z=1+2i$ is a root of the numerator. We found the numerator evaluates to $2-4i \neq 0$. This means the function is not of the form $0/0$ at $z=1+2i$.
    Therefore, the limit can be found by direct substitution of $z=1+2i$ into the function:
    $\lim_{z \to 1+2i} \frac{z^2 + (1-3i)z - (2+7i)}{z - (1+2i)} = \frac{(1+2i)^2 + (1-3i)(1+2i) - (2+7i)}{1+2i - (1+2i)}$
    This would lead to division by zero if the numerator is non-zero.

    Let's re-evaluate the numerator for $z = 1+2i$:
    $z^2 = (1+2i)^2 = 1 + 4i - 4 = -3 + 4i$.
    $(1-3i)z = (1-3i)(1+2i) = 1 + 2i - 3i - 6i^2 = 1 - i + 6 = 7 - i$.
    Numerator = $(-3+4i) + (7-i) - (2+7i) = -3+4i+7-i-2-7i = 2-4i$.
    The denominator is $z - (1+2i)$.

    Since the numerator is $2-4i$ and the denominator approaches $0$, the limit will be $\infty$.
    Let $z - (1+2i) = \Delta z$. As $z \to 1+2i$, $\Delta z \to 0$.
    The numerator is $2-4i$, which is a constant.
    $f(z) = \frac{2-4i}{\Delta z}$.
    $|f(z)| = \frac{|2-4i|}{|\Delta z|} = \frac{\sqrt{2^2 + (-4)^2}}{|\Delta z|} = \frac{\sqrt{4+16}}{|\Delta z|} = \frac{\sqrt{20}}{|\Delta z|}$.
    As $|\Delta z| \to 0$, $|f(z)| \to \infty$.
    Therefore, the limit is $\boxed{\infty}$.

    *(Self-correction: The initial thought process of direct substitution was flawed. It's crucial to first identify if the expression is of the form $0/0$. If not, and the denominator goes to zero while the numerator is non-zero, the limit is infinity.)*

5.  Consider $f(z) = \frac{z^2}{\bar{z}^2}$. We want to find $\lim_{z \to 0} f(z)$. Let $z = re^{i\theta}$.
    $f(z) = \frac{(re^{i\theta})^2}{(re^{-i\theta})^2} = \frac{r^2 e^{i2\theta}}{r^2 e^{-i2\theta}} = e^{i4\theta}$ (for $r \neq 0$).

    **Path 1: Along the real axis ($z = x$, $y=0$, $\theta=0$ or $\theta=\pi$)**
    If $z=x$ ($x>0$, $\theta=0$), $f(z) = e^{i4(0)} = e^0 = 1$.
    If $z=x$ ($x<0$, $\theta=\pi$), $f(z) = e^{i4(\pi)} = e^{i4\pi} = 1$.
    So, along the real axis, the limit is 1.

    **Path 2: Along the imaginary axis ($z = iy$, $x=0$, $\theta=\pi/2$ or $\theta=3\pi/2$)**
    If $z=iy$ ($y>0$, $\theta=\pi/2$), $f(z) = e^{i4(\pi/2)} = e^{i2\pi} = 1$.
    If $z=iy$ ($y<0$, $\theta=3\pi/2$), $f(z) = e^{i4(3\pi/2)} = e^{i6\pi} = 1$.
    So, along the imaginary axis, the limit is 1.

    **Path 3: Along the line $y=x$ ($z = x+ix$, $\theta=\pi/4$)**
    If $z = x+ix$ ($x>0$), $z = x(1+i) = \sqrt{2}xe^{i\pi/4}$. So $r = \sqrt{2}x$ and $\theta=\pi/4$.
    $f(z) = e^{i4(\pi/4)} = e^{i\pi} = -1$.

    Since we found two paths (real axis/imaginary axis vs. line $y=x$) where the limit approaches different values (1 vs. -1), the limit **does not exist**.

---

### **Important Points to Remember**

*   **$\epsilon-\delta$ Definition:** The core of limit evaluation. For every output tolerance ($\epsilon$), there must be an input tolerance ($\delta$).
*   **Path Independence:** This is the most crucial aspect of complex limits. If you can find two paths that yield different limiting values, the limit does not exist.
*   **Real and Imaginary Parts:** Breaking down $f(z) = u(x,y) + iv(x,y)$ is an excellent strategy for evaluating limits of complex functions, especially when the paths become complicated.
*   **Algebraic Simplification:** Like in real calculus, simplify the expression first if possible (e.g., cancelling common factors).
*   **Limits at Infinity:** Use the substitution $z = 1/w$ to transform the limit to the origin.
*   **Functions involving $\bar{z}$:** These are often where limits do not exist because $\bar{z}$ does not behave nicely with respect to paths.
*   **Continuity:** If a function is continuous at a point $z_0$, then $\lim_{z \to z_0} f(z) = f(z_0)$. Understanding limits is a prerequisite for understanding continuity.

---

### **Alignment with Course Outcomes (COs)**

*   **CO1: Fourier Transforms:** While not directly computing Fourier transforms here, the understanding of function behavior as variables approach certain values (limits) is fundamental for analyzing the transformed functions.
*   **CO2: Analyticity/Conformal Mapping:** Analyticity is defined in terms of the existence of a limit (the derivative). Therefore, mastering limits is essential for understanding analyticity.
*   **CO3: Complex Integrals:** The concept of approaching a limit is the basis of defining integrals, particularly contour integrals.
*   **CO4: Series Expansion/Residue Theorem:** Understanding how functions behave near points of interest (singularities) is based on limit concepts.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### **References**

*   **Kreyszig, E. (2016). *Advanced Engineering Mathematics* (10th ed.). John Wiley & Sons.**
    *   Chapter 13: Complex Functions and Their Derivatives (Sections 13.1-13.2) covers the definition of complex functions, limits, and continuity.
*   **Zill, D. G., & Shanahan, P. D. (2015). *Complex Analysis* (3rd ed.). Jones & Bartlett Learning.**
    *   Chapter 1: Complex Numbers (Section 1.5: Limits and Continuity) provides a thorough treatment of limits with detailed examples and proofs.
*   **Ramana, B. V. (2023). *Higher Engineering Mathematics* (39th ed.). McGraw-Hill Education.**
    *   Refer to sections on limits of functions of two variables, which are applicable to the real and imaginary parts of complex functions.
*   **Grewal, B. S. (2018). *Higher Engineering Mathematics* (44th ed.). Khanna Publishers.**
    *   Similar to Ramana, relevant sections on limits of functions of two variables are applicable.

---