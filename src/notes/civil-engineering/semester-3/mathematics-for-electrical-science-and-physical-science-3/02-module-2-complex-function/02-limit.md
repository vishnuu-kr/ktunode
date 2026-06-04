---
title: "Limit"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba81068e"
status: "completed"
scrapedAt: "2026-05-20T18:41:16.888Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 2: Complex Function

### Topic: Limit

This module introduces the concept of limits in the context of complex functions, building upon the foundation of real-valued limits. Understanding limits is crucial for defining continuity, differentiability, and ultimately, the behavior of complex functions in various scientific and engineering applications.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Define the limit of a complex function as the variable approaches a point.**
*   **Understand and apply the epsilon-delta definition of a limit for complex functions.**
*   **Evaluate limits of complex functions using algebraic manipulation and properties of limits.**
*   **Determine if a limit exists for a given complex function.**
*   **Relate the limit of a complex function to the limits of its real and imaginary parts.**

---

### 1. Introduction to Limits of Complex Functions

Just like with real functions, the concept of a limit describes the behavior of a complex function as its input *approaches* a particular point in the complex plane.

**Definition 1.1: Limit of a Complex Function**

Let $f(z)$ be a complex-valued function defined in a neighborhood of a complex number $z_0$, but not necessarily at $z_0$ itself. We say that the limit of $f(z)$ as $z$ approaches $z_0$ is $L$, written as:

$$ \lim_{z \to z_0} f(z) = L $$

if for every positive number $\epsilon$ (no matter how small), there exists a positive number $\delta$ such that if $0 < |z - z_0| < \delta$, then $|f(z) - L| < \epsilon$.

---

### 2. The Epsilon-Delta ($\epsilon-\delta$) Definition

The $\epsilon-\delta$ definition is the rigorous mathematical definition of a limit. It quantifies what it means for $f(z)$ to "get arbitrarily close" to $L$ as $z$ "gets arbitrarily close" to $z_0$.

*   **$\epsilon$ (epsilon):** Represents an arbitrarily small positive tolerance for the output of the function ($f(z)$).
*   **$\delta$ (delta):** Represents a positive tolerance for the input of the function ($z$).
*   **$0 < |z - z_0| < \delta$:** This condition means that $z$ is within a distance $\delta$ from $z_0$, but $z$ is not equal to $z_0$. This defines an open disk centered at $z_0$ with radius $\delta$, excluding the center itself.
*   **$|f(z) - L| < \epsilon$:** This condition means that the output of the function, $f(z)$, is within a distance $\epsilon$ from the limit $L$.

**Key Idea:** For any desired closeness ($\epsilon$) in the output, we can find a region ($\delta$) around the input point such that all values of $f(z)$ within that region (except possibly at $z_0$) are within the desired closeness to $L$.

---

### 3. Existence of Limits in the Complex Plane

In the complex plane, for a limit to exist, the function must approach the same value $L$ regardless of the path $z$ takes to approach $z_0$. This is a crucial difference from real analysis where we only consider approaching from the left or right.

**Theorem 3.1: Limit Exists if and Only if Real and Imaginary Parts' Limits Exist**

Let $f(z) = u(x, y) + iv(x, y)$, where $z = x + iy$, and $z_0 = x_0 + iy_0$. The limit $\lim_{z \to z_0} f(z) = L$ exists if and only if the limits of the real and imaginary parts exist, i.e.:

$$ \lim_{(x, y) \to (x_0, y_0)} u(x, y) = u_0 \quad \text{and} \quad \lim_{(x, y) \to (x_0, y_0)} v(x, y) = v_0 $$

In this case, the limit $L$ is given by $L = u_0 + iv_0$.

**This theorem is extremely useful for evaluating limits because it allows us to break down a complex limit problem into two real limit problems.**

**Example 3.1: Evaluating a Limit using Real and Imaginary Parts**

Evaluate $\lim_{z \to 1+i} z^2$.

**Solution:**
Let $f(z) = z^2$. We need to express $f(z)$ in terms of its real and imaginary parts.
Let $z = x + iy$. Then $z^2 = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 - y^2 + i(2xy)$.
So, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.
The point $z_0 = 1 + i$ corresponds to $(x_0, y_0) = (1, 1)$.

Now, we evaluate the limits of the real and imaginary parts as $(x, y) \to (1, 1)$:

*   **Real Part:**
    $$ \lim_{(x, y) \to (1, 1)} u(x, y) = \lim_{(x, y) \to (1, 1)} (x^2 - y^2) = 1^2 - 1^2 = 1 - 1 = 0 $$

*   **Imaginary Part:**
    $$ \lim_{(x, y) \to (1, 1)} v(x, y) = \lim_{(x, y) \to (1, 1)} (2xy) = 2(1)(1) = 2 $$

Since both limits exist, the limit of $f(z)$ exists and is:
$$ \lim_{z \to 1+i} z^2 = 0 + i(2) = 2i $$

---

### 4. Properties of Limits

The properties of limits for real functions extend to complex functions, provided the individual limits exist.

**Theorem 4.1: Basic Limit Properties**

Let $\lim_{z \to z_0} f(z) = L$ and $\lim_{z \to z_0} g(z) = M$. Then:

1.  **Sum Rule:** $\lim_{z \to z_0} [f(z) + g(z)] = L + M$
2.  **Difference Rule:** $\lim_{z \to z_0} [f(z) - g(z)] = L - M$
3.  **Product Rule:** $\lim_{z \to z_0} [f(z) \cdot g(z)] = L \cdot M$
4.  **Constant Multiple Rule:** $\lim_{z \to z_0} [c \cdot f(z)] = c \cdot L$, where $c$ is a complex constant.
5.  **Quotient Rule:** $\lim_{z \to z_0} \frac{f(z)}{g(z)} = \frac{L}{M}$, provided $M \neq 0$.
6.  **Limit of a Power:** $\lim_{z \to z_0} [f(z)]^n = L^n$, where $n$ is a positive integer.

**Example 4.1: Applying Limit Properties**

Evaluate $\lim_{z \to i} \frac{z^2 + 1}{z - i}$.

**Solution:**
We can try to substitute $z = i$ directly. We get $\frac{i^2 + 1}{i - i} = \frac{-1 + 1}{0} = \frac{0}{0}$, which is an indeterminate form. This suggests we can simplify the expression.

We can factor the numerator: $z^2 + 1 = (z - i)(z + i)$.

So, for $z \neq i$:
$$ \frac{z^2 + 1}{z - i} = \frac{(z - i)(z + i)}{z - i} = z + i $$

Now, we can evaluate the limit of the simplified expression:
$$ \lim_{z \to i} \frac{z^2 + 1}{z - i} = \lim_{z \to i} (z + i) $$

Using the sum rule and the fact that $\lim_{z \to i} z = i$:
$$ \lim_{z \to i} (z + i) = \lim_{z \to i} z + \lim_{z \to i} i = i + i = 2i $$

**Alternative Solution using real/imaginary parts:**
Let $f(z) = \frac{z^2 + 1}{z - i}$. Let $z = x + iy$.
$z^2 + 1 = (x+iy)^2 + 1 = x^2 - y^2 + 2ixy + 1 = (x^2 - y^2 + 1) + i(2xy)$.
$z - i = x + i(y-1)$.

$$ f(z) = \frac{(x^2 - y^2 + 1) + i(2xy)}{x + i(y-1)} $$
To separate real and imaginary parts, multiply numerator and denominator by the conjugate of the denominator:
$$ f(z) = \frac{[(x^2 - y^2 + 1) + i(2xy)] [x - i(y-1)]}{[x + i(y-1)] [x - i(y-1)]} $$
$$ f(z) = \frac{x(x^2 - y^2 + 1) - i(y-1)(x^2 - y^2 + 1) + ix(2xy) - i^2(y-1)(2xy)}{x^2 + (y-1)^2} $$
$$ f(z) = \frac{x(x^2 - y^2 + 1) + 2xy(y-1) + i[x(2xy) - (y-1)(x^2 - y^2 + 1)]}{x^2 + (y-1)^2} $$

This approach becomes very algebraically intensive. The simplification method is much more efficient.

**Important Note:** The ability to simplify rational functions by canceling common factors is a powerful technique for evaluating limits.

---

### 5. Limits along Different Paths

To demonstrate that a limit *does not* exist, we can show that the function approaches different values along different paths.

**Example 5.1: Demonstrating Non-existence of a Limit**

Evaluate $\lim_{z \to 0} \frac{\bar{z}}{z}$.

**Solution:**
Let $f(z) = \frac{\bar{z}}{z}$. The point is $z_0 = 0$.

**Path 1: Along the real axis ($y=0$, $z = x$)**
As $z \to 0$ along the real axis, $z = x$ where $x \to 0$.
Then $\bar{z} = x$.
$$ \lim_{x \to 0} \frac{x}{x} = \lim_{x \to 0} 1 = 1 $$

**Path 2: Along the imaginary axis ($x=0$, $z = iy$)**
As $z \to 0$ along the imaginary axis, $z = iy$ where $y \to 0$.
Then $\bar{z} = -iy$.
$$ \lim_{y \to 0} \frac{-iy}{iy} = \lim_{y \to 0} -1 = -1 $$

Since the function approaches different values (1 and -1) along different paths as $z \to 0$, the limit $\lim_{z \to 0} \frac{\bar{z}}{z}$ **does not exist**.

---

### 6. Important Points to Remember

*   **Definition of Limit:** The $\epsilon-\delta$ definition is the rigorous foundation for limits.
*   **Existence:** For a limit to exist in the complex plane, the function must approach the same value regardless of the path taken towards the limit point.
*   **Real and Imaginary Parts:** The limit of a complex function exists if and only if the limits of its real and imaginary parts exist. This is a crucial tool for evaluation.
*   **Limit Properties:** The standard limit properties (sum, difference, product, quotient, constant multiple) apply to complex functions.
*   **Indeterminate Forms:** Like in real calculus, $\frac{0}{0}$ and $\frac{\infty}{\infty}$ are indeterminate forms requiring further analysis (e.g., simplification, L'Hôpital's Rule - though L'Hôpital's is more complex in the complex domain and requires careful application).
*   **Non-existence:** To prove a limit does not exist, show that it approaches different values along different paths.

---

### Practice Questions

**Question 1:**
Evaluate the following limit:
$$ \lim_{z \to 2+i} (3z^2 - 5z + 1) $$

**Question 2:**
Evaluate the following limit:
$$ \lim_{z \to 0} \frac{z \bar{z}}{|z|} $$

**Question 3:**
Does the following limit exist? If so, evaluate it.
$$ \lim_{z \to 1} \frac{z^2 - 1}{z - 1} $$

**Question 4:**
Evaluate the following limit:
$$ \lim_{z \to i} \frac{\sin(z)}{z} $$
(Hint: You can use the property that if $\lim_{z \to z_0} f(z) = L$ and $g$ is continuous at $L$, then $\lim_{z \to z_0} g(f(z)) = g(L)$).

**Question 5:**
Show that the limit $\lim_{z \to 0} \frac{\text{Re}(z)}{|z|}$ does not exist.

---

### Answers to Practice Questions

**Answer 1:**
Let $f(z) = 3z^2 - 5z + 1$. We can use the limit properties.
$$ \lim_{z \to 2+i} (3z^2 - 5z + 1) = 3 \left(\lim_{z \to 2+i} z\right)^2 - 5 \left(\lim_{z \to 2+i} z\right) + \lim_{z \to 2+i} 1 $$
$$ = 3(2+i)^2 - 5(2+i) + 1 $$
$$ = 3(4 + 4i + i^2) - 10 - 5i + 1 $$
$$ = 3(4 + 4i - 1) - 10 - 5i + 1 $$
$$ = 3(3 + 4i) - 10 - 5i + 1 $$
$$ = 9 + 12i - 10 - 5i + 1 $$
$$ = (9 - 10 + 1) + i(12 - 5) $$
$$ = 0 + 7i = 7i $$
**Answer:** $7i$

**Answer 2:**
Let $f(z) = \frac{z \bar{z}}{|z|}$. Note that $z \bar{z} = |z|^2$.
So, for $z \neq 0$:
$$ f(z) = \frac{|z|^2}{|z|} = |z| $$
Now, we evaluate the limit:
$$ \lim_{z \to 0} |z| $$
Let $z = x + iy$. Then $|z| = \sqrt{x^2 + y^2}$.
$$ \lim_{(x, y) \to (0, 0)} \sqrt{x^2 + y^2} $$
This is a standard limit for a function of two variables, which is 0.
Alternatively, using the $\epsilon-\delta$ definition: For any $\epsilon > 0$, choose $\delta = \epsilon$. If $0 < |z - 0| < \delta$, then $|f(z) - 0| = ||z| - 0| = |z| < \delta = \epsilon$.
**Answer:** $0$

**Answer 3:**
We have an indeterminate form $\frac{0}{0}$. We can factor the numerator:
$$ \frac{z^2 - 1}{z - 1} = \frac{(z - 1)(z + 1)}{z - 1} $$
For $z \neq 1$, this simplifies to $z + 1$.
$$ \lim_{z \to 1} \frac{z^2 - 1}{z - 1} = \lim_{z \to 1} (z + 1) = 1 + 1 = 2 $$
**Answer:** $2$

**Answer 4:**
We know that $\lim_{z \to 0} \frac{\sin(z)}{z} = 1$ from real calculus.
Let $g(w) = \frac{\sin(w)}{w}$. We are evaluating $\lim_{z \to i} g(z)$.
Here, $z$ approaches $i$, so we are not directly using the known limit form.
Let's evaluate $\lim_{z \to i} \frac{\sin(z)}{z}$ using real and imaginary parts.
$f(z) = \frac{\sin(z)}{z}$. Let $z = x + iy$.
$\sin(z) = \sin(x+iy) = \sin(x)\cos(iy) + \cos(x)\sin(iy)$
Using $\cos(iy) = \cosh(y)$ and $\sin(iy) = i\sinh(y)$:
$\sin(z) = \sin(x)\cosh(y) + i\cos(x)\sinh(y)$.
So, $f(z) = \frac{\sin(x)\cosh(y) + i\cos(x)\sinh(y)}{x + iy}$.
Multiplying by the conjugate of the denominator:
$$ f(z) = \frac{[\sin(x)\cosh(y) + i\cos(x)\sinh(y)][x - iy]}{(x + iy)(x - iy)} $$
$$ f(z) = \frac{x\sin(x)\cosh(y) + y\cos(x)\sinh(y) + i[x\cos(x)\sinh(y) - y\sin(x)\cosh(y)]}{x^2 + y^2} $$
We need to evaluate the limit as $(x, y) \to (0, 1)$.
This is becoming very complicated. Let's re-evaluate the problem statement. The problem is asking for $\lim_{z \to i} \frac{\sin(z)}{z}$.

Let's evaluate the limit by checking the real and imaginary parts.
Let $z = x + iy$. We want to evaluate the limit as $(x, y) \to (0, 1)$.
$$ \lim_{(x, y) \to (0, 1)} \frac{\sin(x)\cosh(y)}{x^2+y^2} \quad \text{(Real Part)} $$
$$ \lim_{(x, y) \to (0, 1)} \frac{\cos(x)\sinh(y)}{x^2+y^2} \quad \text{(Imaginary Part)} $$

As $(x, y) \to (0, 1)$:
Real Part numerator $\to \sin(0)\cosh(1) = 0 \cdot \cosh(1) = 0$.
Real Part denominator $\to 0^2 + 1^2 = 1$.
So, Real Part limit $\to \frac{0}{1} = 0$.

Imaginary Part numerator $\to \cos(0)\sinh(1) = 1 \cdot \sinh(1) = \sinh(1)$.
Imaginary Part denominator $\to 0^2 + 1^2 = 1$.
So, Imaginary Part limit $\to \frac{\sinh(1)}{1} = \sinh(1)$.

Therefore, the limit is $0 + i\sinh(1) = i\sinh(1)$.

**Answer:** $i\sinh(1)$

**Question 5:**
Let $f(z) = \frac{\text{Re}(z)}{|z|}$. We want to evaluate the limit as $z \to 0$.
Let $z = x + iy$. Then $\text{Re}(z) = x$ and $|z| = \sqrt{x^2 + y^2}$.
$$ f(z) = \frac{x}{\sqrt{x^2 + y^2}} $$

Consider approaching 0 along the real axis ($y=0$, $z=x$):
$$ \lim_{x \to 0} \frac{x}{\sqrt{x^2 + 0^2}} = \lim_{x \to 0} \frac{x}{\sqrt{x^2}} = \lim_{x \to 0} \frac{x}{|x|} $$
If $x \to 0^+$, this is $\lim_{x \to 0^+} \frac{x}{x} = 1$.
If $x \to 0^-$, this is $\lim_{x \to 0^-} \frac{x}{-x} = -1$.
Since the limit along the real axis does not exist, the overall limit does not exist.

Alternatively, consider approaching 0 along the imaginary axis ($x=0$, $z=iy$):
$$ \lim_{y \to 0} \frac{0}{\sqrt{0^2 + y^2}} = \lim_{y \to 0} \frac{0}{\sqrt{y^2}} = \lim_{y \to 0} \frac{0}{|y|} = 0 $$
Since the limit along the real axis is not 0 (it doesn't exist in fact), and the limit along the imaginary axis is 0, the limit does not exist.

**Answer:** The limit does not exist.
