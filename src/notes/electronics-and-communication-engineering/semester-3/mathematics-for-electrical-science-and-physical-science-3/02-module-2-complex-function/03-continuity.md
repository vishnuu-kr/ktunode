---
title: "Continuity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe25b"
status: "completed"
scrapedAt: "2026-05-23T17:47:01.381Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Functions

### Topic: Continuity

---

### 1. Learning Outcomes

Upon successful completion of this topic, students will be able to:

*   Understand the definition of continuity of a complex function.
*   Determine the conditions for continuity of a complex function at a point and on a domain.
*   Relate continuity to the continuity of the real and imaginary parts of a complex function.
*   Identify and analyze points of discontinuity for complex functions.

---

### 2. Key Concepts and Definitions

#### 2.1. Introduction to Continuity

In calculus, we learned about the continuity of real-valued functions of a real variable. Similarly, for complex functions, continuity is a fundamental property that determines the behavior of the function. A complex function $f(z)$ is considered continuous if it does not exhibit any abrupt changes or breaks in its graph.

#### 2.2. Definition of Continuity at a Point

A complex function $f(z)$ is **continuous at a point** $z_0$ if the following three conditions are met:

1.  **$f(z_0)$ is defined:** The function must have a value at the point $z_0$.
2.  **$\lim_{z \to z_0} f(z)$ exists:** The limit of the function as $z$ approaches $z_0$ must exist.
3.  **$\lim_{z \to z_0} f(z) = f(z_0)$:** The limit of the function as $z$ approaches $z_0$ must be equal to the value of the function at $z_0$.

**Important Note:** The third condition implies the first two. If the third condition is met, then $f(z_0)$ must be defined and the limit must exist.

#### 2.3. Continuity on a Domain

A complex function $f(z)$ is **continuous on a domain** $D$ if it is continuous at every point $z_0$ in $D$.

#### 2.4. Continuity and Real/Imaginary Parts

Let $f(z) = u(x, y) + iv(x, y)$, where $z = x + iy$, and $u(x, y)$ and $v(x, y)$ are real-valued functions of two real variables $x$ and $y$.

A complex function $f(z)$ is **continuous at a point** $z_0 = x_0 + iy_0$ if and only if its real part $u(x, y)$ and its imaginary part $v(x, y)$ are **continuous as functions of two real variables** at the point $(x_0, y_0)$.

This means:
1.  $u(x, y)$ must be continuous at $(x_0, y_0)$.
2.  $v(x, y)$ must be continuous at $(x_0, y_0)$.

**Recall from Calculus:** A real-valued function of two real variables $g(x, y)$ is continuous at $(x_0, y_0)$ if:
$\lim_{(x, y) \to (x_0, y_0)} g(x, y) = g(x_0, y_0)$.

---

### 3. Properties of Continuous Functions

If $f(z)$ and $g(z)$ are continuous at a point $z_0$, then the following functions are also continuous at $z_0$:

*   **Sum:** $f(z) + g(z)$
*   **Difference:** $f(z) - g(z)$
*   **Product:** $f(z) \cdot g(z)$
*   **Quotient:** $\frac{f(z)}{g(z)}$, provided $g(z_0) \neq 0$.
*   **Composition:** If $g(z)$ is continuous at $z_0$ and $f(w)$ is continuous at $w_0 = g(z_0)$, then the composite function $f(g(z))$ is continuous at $z_0$.

**Reference:** These properties are standard in complex analysis and are discussed in detail in Kreyszig's "Advanced Engineering Mathematics" (Chapter 13, Section 13.4) and Zill & Shanahan's "Complex Analysis" (Chapter 2, Section 2.2).

---

### 4. Continuity of Common Complex Functions

Many elementary complex functions are continuous on their respective domains. These include:

*   **Polynomials:** $P(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0$, where $a_i$ are complex constants. Polynomials are continuous everywhere in the complex plane $\mathbb{C}$.
*   **Rational Functions:** $R(z) = \frac{P(z)}{Q(z)}$, where $P(z)$ and $Q(z)$ are polynomials. Rational functions are continuous everywhere except at the zeros of the denominator polynomial $Q(z)$.
*   **Exponential Function:** $e^z$ is continuous everywhere in $\mathbb{C}$.
*   **Trigonometric Functions:** $\sin z$, $\cos z$ are continuous everywhere in $\mathbb{C}$.
*   **Hyperbolic Functions:** $\sinh z$, $\cosh z$ are continuous everywhere in $\mathbb{C}$.
*   **Logarithmic Function:** $\text{Log } z$ (principal branch) is continuous in the complex plane excluding the non-positive real axis (i.e., $z \neq x + iy$ where $x \le 0$ and $y=0$).

**Reference:** Kreyszig (Chapter 13, Section 13.4) provides thorough coverage of the continuity of these functions.

---

### 5. Points of Discontinuity

A point $z_0$ at which a function $f(z)$ is not continuous is called a **point of discontinuity**.

**Types of Discontinuities (briefly mentioned for context, detailed in later topics):**

*   **Removable Discontinuity:** If $\lim_{z \to z_0} f(z)$ exists but is not equal to $f(z_0)$ (or $f(z_0)$ is undefined), then $z_0$ is a removable discontinuity.
*   **Pole:** A singularity where the function "blows up" in magnitude.
*   **Essential Singularity:** A more complex type of discontinuity.

---

### 6. Examples

**Example 1: Continuity of a Polynomial**

Let $f(z) = z^2 + 3z - 5$.
$f(z)$ is a polynomial. Polynomials are continuous everywhere in the complex plane. Therefore, $f(z)$ is continuous at every point $z_0 \in \mathbb{C}$.

Let's verify for $z_0 = 1+2i$:
$f(1+2i) = (1+2i)^2 + 3(1+2i) - 5$
$f(1+2i) = (1 + 4i + 4i^2) + (3 + 6i) - 5$
$f(1+2i) = (1 + 4i - 4) + 3 + 6i - 5$
$f(1+2i) = (-3 + 4i) + 3 + 6i - 5$
$f(1+2i) = -5 + 10i$

The limit $\lim_{z \to 1+2i} (z^2 + 3z - 5)$ can be evaluated by direct substitution because it's a polynomial:
$\lim_{z \to 1+2i} (z^2 + 3z - 5) = (1+2i)^2 + 3(1+2i) - 5 = -5 + 10i$.
Since the limit exists and equals $f(1+2i)$, the function is continuous at $z_0 = 1+2i$.

**Example 2: Continuity of a Rational Function**

Let $f(z) = \frac{z^2 + 1}{z - i}$.
This is a rational function. It is continuous everywhere except where the denominator is zero.
$z - i = 0 \implies z = i$.
So, $f(z)$ is continuous for all $z \in \mathbb{C}$ except at $z = i$.

Let's check continuity at $z_0 = 1$:
$f(1) = \frac{1^2 + 1}{1 - i} = \frac{2}{1 - i} = \frac{2(1+i)}{(1-i)(1+i)} = \frac{2(1+i)}{1 - i^2} = \frac{2(1+i)}{1+1} = \frac{2(1+i)}{2} = 1+i$.
The limit $\lim_{z \to 1} \frac{z^2 + 1}{z - i}$ can be evaluated by direct substitution:
$\lim_{z \to 1} \frac{z^2 + 1}{z - i} = \frac{1^2 + 1}{1 - i} = 1+i$.
Since the limit exists and equals $f(1)$, $f(z)$ is continuous at $z_0 = 1$.

Now consider $z_0 = i$:
$f(i)$ is undefined because the denominator becomes $i - i = 0$.
Thus, $f(z)$ is discontinuous at $z = i$.

**Example 3: Continuity using Real and Imaginary Parts**

Let $f(z) = z^2 = (x+iy)^2 = (x^2 - y^2) + i(2xy)$.
So, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.
We know that $x^2 - y^2$ and $2xy$ are continuous polynomials in $x$ and $y$ everywhere in $\mathbb{R}^2$.
Therefore, $f(z) = z^2$ is continuous everywhere in $\mathbb{C}$.

Let $f(z) = \bar{z} = x - iy$.
So, $u(x, y) = x$ and $v(x, y) = -y$.
$u(x, y) = x$ is continuous everywhere in $\mathbb{R}^2$.
$v(x, y) = -y$ is continuous everywhere in $\mathbb{R}^2$.
Therefore, $f(z) = \bar{z}$ is continuous everywhere in $\mathbb{C}$.

Let $f(z) = \text{Re}(z) = x$.
$u(x, y) = x$ is continuous everywhere in $\mathbb{R}^2$.
$v(x, y) = 0$ is continuous everywhere in $\mathbb{R}^2$.
Therefore, $f(z) = \text{Re}(z)$ is continuous everywhere in $\mathbb{C}$.

**Example 4: Discontinuity of Logarithmic Function**

Let $f(z) = \text{Log } z$ (principal branch of the logarithm).
$f(z) = \ln|z| + i \text{Arg}(z)$, where $\text{Arg}(z)$ is the principal argument, $-\pi < \text{Arg}(z) \le \pi$.
$u(x, y) = \ln \sqrt{x^2+y^2} = \frac{1}{2} \ln(x^2+y^2)$
$v(x, y) = \text{Arg}(z)$

The real part $u(x, y)$ is continuous everywhere except at $(0, 0)$ (where $|z|=0$).
The imaginary part $v(x, y)$ is discontinuous along the non-positive real axis ($x \le 0, y=0$) because of the jump in the argument as $z$ crosses the branch cut.
For instance, as $z$ approaches a point on the negative real axis from above, $\text{Arg}(z) \to \pi$. As $z$ approaches from below, $\text{Arg}(z) \to -\pi$. This causes a discontinuity.
Therefore, $f(z) = \text{Log } z$ is discontinuous for $z \le 0$.

**Reference:** Zill & Shanahan (Chapter 2, Section 2.2) discusses the continuity of the complex logarithm and its branches.

---

### 7. Practice Questions and Exercises

**Question 1:**
Determine if the function $f(z) = |z|^2$ is continuous at $z_0 = 1 + 2i$.

**Solution 1:**
$f(z) = |z|^2 = x^2 + y^2$.
$u(x, y) = x^2 + y^2$ and $v(x, y) = 0$.
At $z_0 = 1 + 2i$, we have $(x_0, y_0) = (1, 2)$.
$f(1+2i) = |1+2i|^2 = 1^2 + 2^2 = 1 + 4 = 5$.
The limit as $z \to 1+2i$ is $\lim_{z \to 1+2i} |z|^2$.
Let $z = x+iy$. As $z \to 1+2i$, $x \to 1$ and $y \to 2$.
$\lim_{(x, y) \to (1, 2)} (x^2 + y^2) = 1^2 + 2^2 = 5$.
Since the limit exists and equals $f(1+2i)$, $f(z) = |z|^2$ is continuous at $z_0 = 1 + 2i$.

**Question 2:**
Is the function $f(z) = \frac{\text{Re}(z)}{|z|}$ continuous at $z_0 = 1$?

**Solution 2:**
$f(z) = \frac{x}{\sqrt{x^2+y^2}}$.
At $z_0 = 1$, $(x_0, y_0) = (1, 0)$.
$f(1) = \frac{1}{\sqrt{1^2+0^2}} = \frac{1}{1} = 1$.
Let's consider the limit as $z \to 1$.
$\lim_{z \to 1} \frac{\text{Re}(z)}{|z|} = \lim_{(x, y) \to (1, 0)} \frac{x}{\sqrt{x^2+y^2}}$.
We can evaluate this by direct substitution: $\frac{1}{\sqrt{1^2+0^2}} = 1$.
Since the limit exists and equals $f(1)$, $f(z)$ is continuous at $z_0 = 1$.

**Question 3:**
Find the points of discontinuity for the function $f(z) = \frac{z^3 + 2z - 1}{z^2 - 3z + 2}$.

**Solution 3:**
The function $f(z)$ is a rational function. It is discontinuous where the denominator is zero.
We need to find the roots of $z^2 - 3z + 2 = 0$.
Factoring the quadratic: $(z - 1)(z - 2) = 0$.
The roots are $z = 1$ and $z = 2$.
Therefore, the points of discontinuity are $z = 1$ and $z = 2$.

**Question 4:**
Is the function $f(z) = \begin{cases} \frac{\sin z}{z} & \text{if } z \neq 0 \\ 1 & \text{if } z = 0 \end{cases}$ continuous at $z_0 = 0$?

**Solution 4:**
For continuity at $z_0 = 0$, we need to check if $\lim_{z \to 0} f(z) = f(0)$.
We are given $f(0) = 1$.
Now we need to evaluate $\lim_{z \to 0} \frac{\sin z}{z}$.
This is a standard limit in complex analysis (similar to the real case).
Recall that $\lim_{z \to 0} \frac{\sin z}{z} = 1$.
Since $\lim_{z \to 0} f(z) = 1$ and $f(0) = 1$, the function is continuous at $z_0 = 0$.

**Question 5:**
Let $f(z) = \begin{cases} z^2 & \text{if } |z| < 1 \\ z+1 & \text{if } |z| \ge 1 \end{cases}$. Is $f(z)$ continuous on the unit circle $|z|=1$?

**Solution 5:**
We need to check continuity at points where the definition of the function changes, i.e., on the boundary $|z|=1$.
Let $z_0$ be a point on the unit circle, so $|z_0|=1$.
For $f(z)$ to be continuous at $z_0$, we need $\lim_{z \to z_0} f(z) = f(z_0)$.
According to the definition, $f(z_0) = z_0 + 1$ since $|z_0| \ge 1$.
Now consider the limit $\lim_{z \to z_0} f(z)$.
For points $z$ close to $z_0$ and satisfying $|z|<1$, $f(z) = z^2$.
For points $z$ close to $z_0$ and satisfying $|z| \ge 1$, $f(z) = z+1$.
For continuity, the limit from both regions must exist and be equal.
Consider approaching $z_0$ from the interior of the unit circle (where $f(z)=z^2$):
$\lim_{z \to z_0, |z|<1} f(z) = \lim_{z \to z_0} z^2 = z_0^2$.
Consider approaching $z_0$ from the exterior or boundary of the unit circle (where $f(z)=z+1$):
$\lim_{z \to z_0, |z|\ge 1} f(z) = \lim_{z \to z_0} (z+1) = z_0+1$.
For continuity, we need $z_0^2 = z_0+1$.
This equation $z_0^2 - z_0 - 1 = 0$ does not hold for all points on the unit circle. For example, if $z_0=1$, $1^2 = 1 \neq 1+1$. If $z_0=-1$, $(-1)^2 = 1 \neq -1+1$.
Therefore, $f(z)$ is not continuous on the unit circle $|z|=1$.

---

### 8. Important Points to Remember

*   **Definition:** A function $f(z)$ is continuous at $z_0$ if $f(z_0)$ is defined, $\lim_{z \to z_0} f(z)$ exists, and $\lim_{z \to z_0} f(z) = f(z_0)$.
*   **Real and Imaginary Parts:** A complex function is continuous if and only if its real and imaginary parts are continuous as functions of two real variables.
*   **Elementary Functions:** Polynomials and rational functions (except at zeros of the denominator) are continuous. Exponential, sine, and cosine functions are continuous everywhere. The principal logarithm is discontinuous on the non-positive real axis.
*   **Properties:** Sums, differences, products, quotients (non-zero denominator), and compositions of continuous functions are continuous.
*   **Domain:** Continuity on a domain means continuity at every point within that domain.

---

### 9. Alignment with Course Outcomes

*   **CO1 (Fourier Transforms):** While continuity itself isn't directly about Fourier transforms, understanding function properties like continuity is foundational for analyzing functions that will be transformed. For instance, the convergence of Fourier Transforms often depends on the continuity and boundedness of the function.
*   **CO2 (Analyticity and Conformal Mapping):** Continuity is a prerequisite for analyticity. A function must be continuous to be differentiable (a condition for analyticity). Analyticity is crucial for conformal mapping.
*   **CO3 (Complex Integrals):** Continuity of the integrand is a fundamental assumption for many theorems related to complex integration, such as Cauchy's Integral Theorem and Cauchy's Integral Formula. The domain of integration for these theorems often requires the function to be continuous on the path and within the enclosed region.
*   **CO4 (Series Expansion and Residue Theorem):** Understanding continuity helps in identifying regions where functions behave nicely, which is important when discussing series expansions around points. Singularities (points of discontinuity) are key to the residue theorem.

This topic lays the groundwork for understanding more advanced concepts in complex analysis that are directly applicable to electrical science and physical science, such as analyticity, integration, and series expansions, which are core to the course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
