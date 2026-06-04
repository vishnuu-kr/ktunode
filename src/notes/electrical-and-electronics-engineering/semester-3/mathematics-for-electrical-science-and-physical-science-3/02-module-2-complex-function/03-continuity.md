---
title: "Continuity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a64"
status: "completed"
scrapedAt: "2026-05-23T16:14:30.903Z"
---
## MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

### Module 2: Complex Functions - Topic: Continuity

---

**Course Outcomes Addressed:**
This topic primarily lays the groundwork for understanding the behavior of complex functions, which is crucial for many of the later course outcomes, particularly those involving complex integration and series expansions. While not directly addressing specific outcomes like Fourier transforms or conformal mapping, a solid grasp of continuity is fundamental to their development.

*   **CO1 (Fourier Transforms):** Understanding continuity helps in analyzing the properties of functions for which Fourier transforms are applied.
*   **CO2 (Analyticity and Conformal Mapping):** Continuity is a prerequisite for analyticity, which is the foundation of conformal mapping.
*   **CO3 (Complex Integrals):** Continuity is essential for defining and evaluating complex integrals.
*   **CO4 (Series Expansion and Residue Theorem):** Continuity is a fundamental property of functions being represented by series expansions and analyzed using the residue theorem.

**Learning Outcomes for This Topic:**

*   Define continuity of a complex function.
*   Understand the relationship between the continuity of a complex function and the continuity of its real and imaginary parts.
*   Apply the definition of continuity to determine if a complex function is continuous at a given point or on a given domain.
*   Identify and classify discontinuities in complex functions.

---

### 1. Introduction to Continuity of Complex Functions

The concept of continuity is fundamental in calculus and extends to complex functions. Intuitively, a function is continuous if its graph can be drawn without lifting the pen. In the context of complex functions, this means that a small change in the input leads to a small change in the output.

**Key Concept:** The epsilon-delta definition of continuity.

---

### 2. Definition of Continuity

Let $f(z)$ be a complex function defined in a neighborhood of a point $z_0$. We say that $f(z)$ is **continuous at $z_0$** if the following conditions are met:

1.  $f(z_0)$ is defined.
2.  $\lim_{z \to z_0} f(z)$ exists.
3.  $\lim_{z \to z_0} f(z) = f(z_0)$.

If a function is continuous at every point in a domain $D$, then it is said to be **continuous on $D$**.

**Relationship to Limits:** Continuity is intimately linked to the existence and value of limits. If a function is continuous at a point, the limit as $z$ approaches that point must exist and be equal to the function's value at that point.

**Kreyszig, 10th Edition, Chapter 13 (Functions of a Complex Variable):** Kreyszig provides a thorough treatment of limits and continuity in his chapter on complex functions, emphasizing the epsilon-delta definition and its geometric interpretation.

---

### 3. Continuity and Real/Imaginary Parts

A crucial insight when dealing with complex functions is their relationship to their real and imaginary parts. Let $f(z) = u(x, y) + iv(x, y)$, where $z = x + iy$.

**Theorem:** A complex function $f(z) = u(x, y) + iv(x, y)$ is continuous at a point $z_0 = x_0 + iy_0$ if and only if its real part $u(x, y)$ and its imaginary part $v(x, y)$ are both continuous as functions of two real variables $x$ and $y$ at the point $(x_0, y_0)$.

**Explanation:**
This theorem allows us to analyze the continuity of a complex function by examining the continuity of two real-valued functions of two real variables. The limit of $f(z)$ as $z \to z_0$ exists if and only if the limits of $u(x, y)$ and $v(x, y)$ exist as $(x, y) \to (x_0, y_0)$ along any path. For continuity, these limits must also equal $u(x_0, y_0)$ and $v(x_0, y_0)$ respectively.

**Example 1:**
Consider $f(z) = z^2$.
Let $z = x + iy$. Then $f(z) = (x + iy)^2 = x^2 - y^2 + i(2xy)$.
So, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.
Both $u(x, y)$ and $v(x, y)$ are polynomial functions of $x$ and $y$, which are known to be continuous everywhere in the real plane. Therefore, $f(z) = z^2$ is continuous for all $z \in \mathbb{C}$.

**Example 2:**
Consider $f(z) = |z|^2$.
Let $z = x + iy$. Then $f(z) = |x + iy|^2 = x^2 + y^2$.
In this case, $u(x, y) = x^2 + y^2$ and $v(x, y) = 0$.
Both $u(x, y)$ and $v(x, y)$ are continuous everywhere. Thus, $f(z) = |z|^2$ is continuous for all $z \in \mathbb{C}$.

**Example 3:**
Consider $f(z) = \frac{z^2}{|z|}$.
Let $z = x + iy$. Then $|z| = \sqrt{x^2 + y^2}$.
$f(z) = \frac{(x+iy)^2}{\sqrt{x^2 + y^2}} = \frac{x^2 - y^2 + i(2xy)}{\sqrt{x^2 + y^2}} = \frac{x^2 - y^2}{\sqrt{x^2 + y^2}} + i \frac{2xy}{\sqrt{x^2 + y^2}}$.
So, $u(x, y) = \frac{x^2 - y^2}{\sqrt{x^2 + y^2}}$ and $v(x, y) = \frac{2xy}{\sqrt{x^2 + y^2}}$.
The function is not defined at $z=0$. Let's examine continuity as $z \to 0$.
We need to check if $\lim_{z \to 0} f(z) = f(0)$, but $f(0)$ is not defined. So, we check if the limit exists.

Consider approaching $z=0$ along different paths:
*   Along the real axis ($y=0$, $x \to 0$): $f(x) = \frac{x^2}{|x|} = \frac{x^2}{|x|} = |x|$. As $x \to 0$, $f(x) \to 0$.
*   Along the imaginary axis ($x=0$, $y \to 0$): $f(iy) = \frac{(iy)^2}{|iy|} = \frac{-y^2}{|y|} = -|y|$. As $y \to 0$, $f(iy) \to 0$.

It appears the limit might be 0. However, let's check along the path $y=x$:
$f(x+ix) = \frac{(x+ix)^2}{|x+ix|} = \frac{x^2(1+i)^2}{|x(1+i)|} = \frac{x^2(1+2i-1)}{|x|\sqrt{2}} = \frac{x^2(2i)}{|x|\sqrt{2}} = \frac{\sqrt{2}x i}{|x|}$.
If $x > 0$, $f(x+ix) = \sqrt{2} i$.
If $x < 0$, $f(x+ix) = -\sqrt{2} i$.
As $x \to 0$, the limit depends on the sign of $x$, and thus does not exist. Therefore, $f(z) = \frac{z^2}{|z|}$ is not continuous at $z=0$ (it's not even defined at $z=0$, so we're looking at the limit for potential continuity if $f(0)$ were defined).

**Zill & Shanahan, 3rd Edition, Chapter 2 (Functions of a Complex Variable):** This textbook also rigorously defines continuity and emphasizes the link between the continuity of $f(z)$ and its real/imaginary components, providing numerous examples.

---

### 4. Properties of Continuous Functions

If $f(z)$ and $g(z)$ are continuous at a point $z_0$, then the following functions are also continuous at $z_0$:

*   Sum: $f(z) + g(z)$
*   Difference: $f(z) - g(z)$
*   Product: $f(z) g(z)$
*   Quotient: $\frac{f(z)}{g(z)}$, provided $g(z_0) \neq 0$.
*   Composition: $f(g(z))$, if $g(z)$ is continuous at $z_0$ and $f(w)$ is continuous at $w_0 = g(z_0)$.

**Important Note:** Polynomials in $z$ are continuous everywhere. Rational functions (ratios of polynomials) are continuous everywhere except at the zeros of the denominator.

**Ramana, 39th Edition, Chapter 21 (Complex Numbers and Functions):** Ramana's book covers the fundamental properties of complex functions, including continuity and the continuity of basic operations on complex functions.

---

### 5. Types of Discontinuities

If a function $f(z)$ is not continuous at a point $z_0$, then $z_0$ is called a **point of discontinuity** or a **singularity**. We can classify discontinuities based on the behavior of the limit of the function.

**Types of Discontinuities:**

1.  **Removable Discontinuity:** A function $f(z)$ has a removable discontinuity at $z_0$ if $\lim_{z \to z_0} f(z)$ exists but is not equal to $f(z_0)$ (or $f(z_0)$ is not defined).
    *   **To remove the discontinuity**, we can define or redefine $f(z_0) = \lim_{z \to z_0} f(z)$.

    **Example:** $f(z) = \frac{\sin z}{z}$ at $z_0 = 0$.
    We know that $\lim_{z \to 0} \frac{\sin z}{z} = 1$.
    Since $f(0)$ is not defined, $f(z)$ has a removable discontinuity at $z=0$. We can define $f(0) = 1$ to make it continuous at $z=0$.

2.  **Non-Removable Discontinuity (Essential Discontinuity):** If $\lim_{z \to z_0} f(z)$ does not exist (and is not infinite), then $f(z)$ has an essential discontinuity at $z_0$. The behavior of the function near an essential discontinuity is typically very erratic.

    **Example:** $f(z) = e^{1/z}$ at $z_0 = 0$.
    Let's consider approaching $z=0$ along different paths:
    *   Along the positive real axis ($z = x$, $x \to 0^+$): $\lim_{x \to 0^+} e^{1/x} = \infty$.
    *   Along the negative real axis ($z = x$, $x \to 0^-$): $\lim_{x \to 0^-} e^{1/x} = 0$.
    Since the limits along different paths are different, the limit does not exist. Hence, $f(z) = e^{1/z}$ has an essential discontinuity at $z=0$.

3.  **Pole:** A function $f(z)$ has a pole at $z_0$ if $\lim_{z \to z_0} |f(z)| = \infty$. This means that as $z$ approaches $z_0$, the magnitude of $f(z)$ grows without bound. Poles are a type of non-removable discontinuity.

    **Example:** $f(z) = \frac{1}{z-z_0}$ has a pole of order 1 at $z_0$.
    $f(z) = \frac{1}{(z-z_0)^n}$ has a pole of order $n$ at $z_0$.

    **Example:** $f(z) = \frac{z^2 + 1}{z - 1}$ at $z_0 = 1$.
    The numerator $z^2 + 1$ is non-zero at $z=1$ (it's $1^2+1=2$).
    As $z \to 1$, the denominator $z-1 \to 0$. Therefore, $\lim_{z \to 1} |f(z)| = \infty$.
    This function has a pole of order 1 at $z=1$.

    **Grewal, 44th Edition, Chapter 22 (Complex Variables):** Grewal's book classifies singularities, including poles, and discusses their order.

---

### 6. Continuity on a Domain

A function $f(z)$ is continuous on an open disk $D = \{z : |z - z_0| < R\}$ if it is continuous at every point in $D$.

If a function is continuous on a **closed disk** $\bar{D} = \{z : |z - z_0| \leq R\}$, this implies continuity within the disk and also that the limit as $z$ approaches any point on the boundary circle exists and equals the function's value.

**Key Point:** For a function to be continuous on a closed domain, it must be continuous on the interior and the limit must exist at the boundary points.

---

### 7. Practice Questions and Exercises

**Question 1:**
Determine if the function $f(z) = \frac{z^2 - 4}{z - 2}$ is continuous at $z = 2$. If not, does it have a removable discontinuity?

**Solution 1:**
The function is not defined at $z=2$. Let's find the limit as $z \to 2$:
$\lim_{z \to 2} \frac{z^2 - 4}{z - 2} = \lim_{z \to 2} \frac{(z - 2)(z + 2)}{z - 2} = \lim_{z \to 2} (z + 2) = 2 + 2 = 4$.
Since the limit exists, $f(z)$ has a removable discontinuity at $z=2$. If we define $f(2) = 4$, the function becomes continuous at $z=2$.

**Question 2:**
Is the function $f(z) = \text{Re}(z^2)$ continuous at $z = 1 + i$?

**Solution 2:**
Let $z = x + iy$. Then $z^2 = (x + iy)^2 = x^2 - y^2 + i(2xy)$.
The real part is $\text{Re}(z^2) = u(x, y) = x^2 - y^2$.
The point $z = 1 + i$ corresponds to $(x, y) = (1, 1)$.
The function $u(x, y) = x^2 - y^2$ is a polynomial in $x$ and $y$, so it is continuous everywhere. In particular, it is continuous at $(1, 1)$.
Therefore, $f(z) = \text{Re}(z^2)$ is continuous at $z = 1 + i$.

**Question 3:**
Classify the discontinuity of $f(z) = \frac{e^z - 1}{z^2}$ at $z=0$.

**Solution 3:**
The function is not defined at $z=0$. We need to find the limit as $z \to 0$.
We know the Maclaurin series for $e^z$ is $e^z = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$
So, $e^z - 1 = z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$
Then, $f(z) = \frac{z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots}{z^2} = \frac{1}{z} + \frac{1}{2!} + \frac{z}{3!} + \dots$
As $z \to 0$, the term $\frac{1}{z}$ approaches infinity. Therefore, $f(z)$ has a pole of order 1 at $z=0$.

**Question 4:**
Determine if $f(z) = \begin{cases} \frac{\sin(\pi z)}{z} & z \neq 0 \\ \pi & z = 0 \end{cases}$ is continuous at $z=0$.

**Solution 4:**
For continuity at $z=0$, we need $\lim_{z \to 0} f(z) = f(0)$.
We are given $f(0) = \pi$.
Let's evaluate the limit:
$\lim_{z \to 0} f(z) = \lim_{z \to 0} \frac{\sin(\pi z)}{z}$
This limit is of the form $\frac{0}{0}$. We can use L'Hopital's rule or the known limit $\lim_{x \to 0} \frac{\sin(ax)}{x} = a$.
Using the known limit with $a = \pi$:
$\lim_{z \to 0} \frac{\sin(\pi z)}{z} = \pi$.
Since $\lim_{z \to 0} f(z) = \pi$ and $f(0) = \pi$, the function is continuous at $z=0$.

---

### 8. Important Points to Remember

*   **Definition of Continuity:** $\lim_{z \to z_0} f(z) = f(z_0)$.
*   **Key Theorem:** $f(z) = u(x, y) + iv(x, y)$ is continuous at $z_0$ if and only if $u(x, y)$ and $v(x, y)$ are continuous at $(x_0, y_0)$.
*   **Basic Functions:** Polynomials and rational functions are continuous on their domains.
*   **Composition:** Continuity of composite functions is preserved.
*   **Discontinuities:** Understand the classification into removable, essential, and poles.
*   **Limits:** The behavior of the limit is crucial for classifying discontinuities.

---
