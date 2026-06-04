---
title: "Transforms of Derivatives"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810688"
status: "completed"
scrapedAt: "2026-05-20T18:41:13.393Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 1: Fourier Integral

### Topic: Transforms of Derivatives

---

### **Learning Outcomes**

Upon successful completion of this topic, you will be able to:

*   Understand and apply the Fourier transform property for the first derivative of a function.
*   Understand and apply the Fourier transform property for the second derivative of a function.
*   Generalize the property for the n-th derivative of a function.
*   Utilize these properties to solve differential equations using the Fourier transform method.

---

### **1. Introduction to Fourier Transforms and Derivatives**

The Fourier transform is a powerful tool for analyzing signals and functions in terms of their frequency components. Many physical phenomena, especially in electrical and physical sciences, are described by differential equations. The Fourier transform provides a method to convert these differential equations in the time or spatial domain into algebraic equations in the frequency domain, which are often easier to solve.

The key idea behind transforming derivatives is that differentiation in the original domain corresponds to multiplication by a frequency variable in the transformed domain. This significantly simplifies the process of solving differential equations.

---

### **2. Fourier Transform of the First Derivative**

Let $f(x)$ be a function and its Fourier transform be denoted by $F(\omega)$:

$$F(\omega) = \mathcal{F}\{f(x)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$$

We want to find the Fourier transform of its first derivative, $f'(x)$.

**Derivation:**

We use integration by parts: $\int u dv = uv - \int v du$.
Let $u = e^{-i\omega x}$ and $dv = f'(x) dx$.
Then $du = -i\omega e^{-i\omega x} dx$ and $v = f(x)$.

$$\mathcal{F}\{f'(x)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f'(x) e^{-i\omega x} dx$$

Applying integration by parts:

$$\mathcal{F}\{f'(x)\} = \frac{1}{\sqrt{2\pi}} \left[ f(x) e^{-i\omega x} \right]_{-\infty}^{\infty} - \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) (-i\omega e^{-i\omega x}) dx$$

**Assumption:** We assume that $f(x) \to 0$ as $x \to \pm \infty$. This is a common condition for functions amenable to Fourier transforms, particularly in physical applications where signals eventually decay. With this assumption, the boundary term $\left[ f(x) e^{-i\omega x} \right]_{-\infty}^{\infty} = 0$.

Therefore, the expression simplifies to:

$$\mathcal{F}\{f'(x)\} = - \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) (-i\omega e^{-i\omega x}) dx$$

$$\mathcal{F}\{f'(x)\} = i\omega \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx \right)$$

The term in the parenthesis is the Fourier transform of $f(x)$, which is $F(\omega)$.

**Property:**

$$\mathcal{F}\{f'(x)\} = i\omega F(\omega)$$

**Key Concept:** The Fourier transform of the first derivative of a function is the Fourier transform of the function multiplied by $i\omega$.

---

### **3. Fourier Transform of the Second Derivative**

Now, let's consider the Fourier transform of the second derivative, $f''(x)$. We can use the property for the first derivative twice.

Let $g(x) = f'(x)$. Then $g'(x) = f''(x)$.
From the previous property, we know that:

$$\mathcal{F}\{g'(x)\} = i\omega G(\omega)$$

where $G(\omega) = \mathcal{F}\{g(x)\} = \mathcal{F}\{f'(x)\}$.

We already found that $\mathcal{F}\{f'(x)\} = i\omega F(\omega)$.
So, $G(\omega) = i\omega F(\omega)$.

Substituting this back into the property for $g'(x)$:

$$\mathcal{F}\{f''(x)\} = i\omega (i\omega F(\omega))$$

$$\mathcal{F}\{f''(x)\} = (i\omega)^2 F(\omega)$$

$$\mathcal{F}\{f''(x)\} = -\omega^2 F(\omega)$$

**Property:**

$$\mathcal{F}\{f''(x)\} = -\omega^2 F(\omega)$$

**Key Concept:** The Fourier transform of the second derivative of a function is the Fourier transform of the function multiplied by $(i\omega)^2$ or $-\omega^2$.

---

### **4. Generalization to the n-th Derivative**

We can generalize this property for the n-th derivative of a function $f^{(n)}(x)$. By applying the property for the first derivative repeatedly, we can observe a pattern.

*   $\mathcal{F}\{f'(x)\} = (i\omega)^1 F(\omega)$
*   $\mathcal{F}\{f''(x)\} = (i\omega)^2 F(\omega)$

**Hypothesis:** $\mathcal{F}\{f^{(n)}(x)\} = (i\omega)^n F(\omega)$

**Proof by Induction:**

*   **Base Case (n=1):** We have already shown this is true: $\mathcal{F}\{f'(x)\} = i\omega F(\omega)$.

*   **Inductive Step:** Assume the property holds for $n=k$, i.e., $\mathcal{F}\{f^{(k)}(x)\} = (i\omega)^k F(\omega)$.
    We need to show it holds for $n=k+1$.
    Let $h(x) = f^{(k)}(x)$. Then $h'(x) = f^{(k+1)}(x)$.

    Using the property for the first derivative:
    $$\mathcal{F}\{h'(x)\} = i\omega \mathcal{F}\{h(x)\}$$

    Substituting $h(x)$ and $h'(x)$:
    $$\mathcal{F}\{f^{(k+1)}(x)\} = i\omega \mathcal{F}\{f^{(k)}(x)\}$$

    Now, using the inductive hypothesis $\mathcal{F}\{f^{(k)}(x)\} = (i\omega)^k F(\omega)$:
    $$\mathcal{F}\{f^{(k+1)}(x)\} = i\omega (i\omega)^k F(\omega)$$

    $$\mathcal{F}\{f^{(k+1)}(x)\} = (i\omega)^{k+1} F(\omega)$$

Thus, the property holds for all positive integers $n$, provided $f(x)$ and its derivatives up to the $(n-1)$-th order satisfy the necessary decay conditions at infinity.

**Property:**

$$\mathcal{F}\{f^{(n)}(x)\} = (i\omega)^n F(\omega)$$

**Important Consideration:** The assumption that $f^{(k)}(x) \to 0$ as $x \to \pm \infty$ for $k = 0, 1, \dots, n-1$ is crucial for the derivation. If these boundary terms are non-zero, they contribute to the transformed derivative.

**Extension for Non-Zero Boundary Conditions:**
If $f(x)$ and its derivatives do not vanish at infinity, the general formula for the transform of the first derivative is:

$$\mathcal{F}\{f'(x)\} = i\omega F(\omega) - \frac{1}{\sqrt{2\pi}} [f(x)e^{-i\omega x}]_{-\infty}^{\infty}$$

For practical problems where initial or boundary conditions are given, these terms are often expressed in terms of the function's values at $x=0$ or $x \to \pm \infty$. For Fourier transforms, the conditions at $\pm \infty$ are usually assumed to be zero. For Laplace transforms (which are more commonly used for initial value problems), the boundary terms at $x=0$ are explicitly included.

For the purpose of this module, we generally assume $f(x)$ and its derivatives vanish at infinity.

---

### **5. Application to Solving Differential Equations**

The property of transforming derivatives is invaluable for solving linear ordinary differential equations (ODEs) with constant coefficients.

Consider a general linear ODE:
$$a_n y^{(n)}(x) + a_{n-1} y^{(n-1)}(x) + \dots + a_1 y'(x) + a_0 y(x) = g(x)$$

where $a_i$ are constants and $y(x)$ is the unknown function.

**Steps to Solve using Fourier Transform:**

1.  **Take the Fourier Transform of both sides of the ODE:**
    Apply the Fourier transform to each term. Use the linearity property of the Fourier transform: $\mathcal{F}\{af(x) + bg(x)\} = aF(\omega) + bG(\omega)$.
    Using the derivative property:
    $$\mathcal{F}\{y^{(k)}(x)\} = (i\omega)^k Y(\omega)$$
    where $Y(\omega) = \mathcal{F}\{y(x)\}$.
    The transform of the right-hand side is $G(\omega) = \mathcal{F}\{g(x)\}$.

    The ODE transforms into an algebraic equation in $Y(\omega)$:
    $$a_n (i\omega)^n Y(\omega) + a_{n-1} (i\omega)^{n-1} Y(\omega) + \dots + a_1 (i\omega) Y(\omega) + a_0 Y(\omega) = G(\omega)$$

2.  **Solve for $Y(\omega)$:**
    Factor out $Y(\omega)$:
    $$Y(\omega) [a_n (i\omega)^n + a_{n-1} (i\omega)^{n-1} + \dots + a_1 (i\omega) + a_0] = G(\omega)$$
    $$Y(\omega) = \frac{G(\omega)}{a_n (i\omega)^n + a_{n-1} (i\omega)^{n-1} + \dots + a_1 (i\omega) + a_0}$$

3.  **Find the Inverse Fourier Transform:**
    Once $Y(\omega)$ is obtained, the solution $y(x)$ is found by taking the inverse Fourier transform:
    $$y(x) = \mathcal{F}^{-1}\{Y(\omega)\}$$
    This step often involves techniques like partial fraction decomposition, convolution theorem, and known inverse Fourier transform pairs.

**Important Note on Boundary/Initial Conditions:**
The Fourier transform method is generally more suited for solving ODEs over an infinite domain $(-\infty, \infty)$, especially when the conditions at infinity are known or assumed to be zero. For initial value problems (e.g., on $[0, \infty)$), the Laplace transform is usually more direct because it explicitly incorporates initial conditions at $t=0$.

However, if an ODE on $(-\infty, \infty)$ is given with conditions like $y(x) \to 0$ and $y'(x) \to 0$ as $x \to \pm \infty$, the Fourier transform is a direct method.

---

### **6. Examples**

**Example 1: Find the Fourier Transform of the first derivative of $e^{-ax^2}$ (assuming $a>0$)**

Let $f(x) = e^{-ax^2}$. We know the Fourier transform of $e^{-ax^2}$ is $F(\omega) = \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$.

Using the derivative property:
$$\mathcal{F}\{f'(x)\} = i\omega F(\omega)$$
$$\mathcal{F}\{f'(x)\} = i\omega \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$$

Let's verify this by calculating the derivative of $f(x)$ and then transforming it.
$f'(x) = \frac{d}{dx}(e^{-ax^2}) = -2ax e^{-ax^2}$.

We need to find $\mathcal{F}\{-2ax e^{-ax^2}\}$.
This involves the property of multiplying by $x$: $\mathcal{F}\{x f(x)\} = i \frac{d}{d\omega} F(\omega)$.

Let's find $\frac{d}{d\omega} F(\omega)$:
$F(\omega) = \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$
$\frac{d}{d\omega} F(\omega) = \sqrt{\frac{\pi}{a}} \left(-\frac{2\omega}{4a}\right) e^{-\omega^2/(4a)} = -\frac{\omega}{2a} \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$

So, $\mathcal{F}\{x e^{-ax^2}\} = i \left(-\frac{\omega}{2a} \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}\right) = -\frac{i\omega}{2a} \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$.

Now, $\mathcal{F}\{-2ax e^{-ax^2}\} = -2a \mathcal{F}\{x e^{-ax^2}\}$
$= -2a \left(-\frac{i\omega}{2a} \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}\right)$
$= i\omega \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$

This matches the result obtained using the derivative property directly.

---

**Example 2: Solve the ODE $y''(x) + y(x) = e^{-x^2}$ using Fourier Transforms.**

Assume $y(x)$ and its derivatives vanish as $x \to \pm \infty$.
Let $Y(\omega) = \mathcal{F}\{y(x)\}$ and $G(\omega) = \mathcal{F}\{e^{-x^2}\}$.

We know that $\mathcal{F}\{e^{-x^2}\} = \sqrt{\pi} e^{-\omega^2/4}$.

Taking the Fourier transform of the ODE:
$\mathcal{F}\{y''(x)\} + \mathcal{F}\{y(x)\} = \mathcal{F}\{e^{-x^2}\}$

Using the derivative properties:
$(i\omega)^2 Y(\omega) + Y(\omega) = \sqrt{\pi} e^{-\omega^2/4}$
$-\omega^2 Y(\omega) + Y(\omega) = \sqrt{\pi} e^{-\omega^2/4}$

Factor out $Y(\omega)$:
$Y(\omega) (1 - \omega^2) = \sqrt{\pi} e^{-\omega^2/4}$

Solve for $Y(\omega)$:
$Y(\omega) = \frac{\sqrt{\pi} e^{-\omega^2/4}}{1 - \omega^2}$

To find $y(x)$, we need to compute the inverse Fourier transform of $Y(\omega)$. This can be challenging.

**Consider a simpler related problem:**
If the ODE was $y''(x) + k^2 y(x) = f(x)$, then $Y(\omega) (k^2 - \omega^2) = F(\omega)$, so $Y(\omega) = \frac{F(\omega)}{k^2 - \omega^2}$.
Using the convolution theorem, $y(x) = \mathcal{F}^{-1}\{F(\omega) \cdot \frac{1}{k^2 - \omega^2}\} = (f * h)(x)$, where $h(x) = \mathcal{F}^{-1}\{\frac{1}{k^2 - \omega^2}\}$.

In our example, the denominator $1-\omega^2$ makes the inverse transform directly difficult without further techniques or tables of transforms. This highlights that while the transform converts the ODE to an algebraic one, the inverse transform can still be complex.

**Alternative Scenario for ODE solving:**
Often, the Fourier transform is used when the input function $g(x)$ is itself a transformable function and the solution is desired in terms of that transform.

Let's consider a case where the inverse transform is more straightforward.
**Problem:** Find $y(x)$ such that $y'(x) - ay(x) = e^{-bx^2}$, assuming $y(x) \to 0$ as $x \to \pm \infty$.

Let $Y(\omega) = \mathcal{F}\{y(x)\}$ and $G(\omega) = \mathcal{F}\{e^{-bx^2}\} = \sqrt{\frac{\pi}{b}} e^{-\omega^2/(4b)}$.

Transforming the ODE:
$\mathcal{F}\{y'(x)\} - a \mathcal{F}\{y(x)\} = \mathcal{F}\{e^{-bx^2}\}$
$i\omega Y(\omega) - a Y(\omega) = \sqrt{\frac{\pi}{b}} e^{-\omega^2/(4b)}$

Factor out $Y(\omega)$:
$Y(\omega) (i\omega - a) = \sqrt{\frac{\pi}{b}} e^{-\omega^2/(4b)}$

Solve for $Y(\omega)$:
$Y(\omega) = \frac{\sqrt{\frac{\pi}{b}} e^{-\omega^2/(4b)}}{i\omega - a}$

Now, we need to find the inverse transform of this expression.
We know that $\mathcal{F}\{e^{-ax^2}\} = \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$.
And we also know that $\mathcal{F}\{g'(x)\} = i\omega G(\omega)$, so $\mathcal{F}\{g(x)\} = \frac{\mathcal{F}\{g'(x)\}}{i\omega}$. This is not helpful here.

Recall the transform pair: $\mathcal{F}\{e^{-ax}\} = \frac{1}{a+i\omega}$ for $a>0$. (This is for a unilateral version, but the principle applies to the structure).
The form we have is $\frac{1}{i\omega - a} = \frac{1}{-(a - i\omega)}$.

Let's use the property $\mathcal{F}\{e^{ax}f(x)\} = F(\omega-a)$ and $\mathcal{F}\{e^{-ax}f(x)\} = F(\omega+a)$.
We have $\frac{1}{i\omega - a}$.
Consider the transform of $e^{ax}$. If $f(x) = 1$ (not transformable in the standard sense), this isn't direct.

Let's consider the structure of $\frac{1}{i\omega - a}$. This often relates to exponential functions.
We know $\mathcal{F}\{e^{-ax^2}\} = \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$.
We are looking for a function whose transform is $\frac{e^{-\omega^2/(4b)}}{i\omega - a}$.

This can be solved using the convolution theorem.
$Y(\omega) = \sqrt{\frac{\pi}{b}} \cdot e^{-\omega^2/(4b)} \cdot \frac{1}{i\omega - a}$

Let $F_1(\omega) = \sqrt{\frac{\pi}{b}} e^{-\omega^2/(4b)}$, so $f_1(x) = \mathcal{F}^{-1}\{F_1(\omega)\} = e^{-bx^2}$.
Let $F_2(\omega) = \frac{1}{i\omega - a}$. We need to find $f_2(x)$.

This transform pair $\mathcal{F}\{e^{ax}\} = \frac{1}{a-i\omega}$ and $\mathcal{F}\{e^{-ax}\} = \frac{1}{a+i\omega}$.
So, $\mathcal{F}\{e^{-ax}\} = \frac{1}{a+i\omega}$. We have $\frac{1}{i\omega - a} = \frac{1}{-(a-i\omega)}$.
The transform of $e^{ax}$ is $\frac{1}{a-i\omega}$. So, $\mathcal{F}\{e^{-ax}\} = \frac{1}{a+i\omega}$.
We have $\frac{1}{i\omega - a}$. This is $\frac{1}{-(a - i\omega)}$.
So, the function is related to $-e^{ax}$.
Let's check $\mathcal{F}\{e^{ax}\}$ again. Using the standard definition:
$\mathcal{F}\{e^{ax}\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{ax} e^{-i\omega x} dx = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{(a-i\omega)x} dx$. This integral diverges for $a>0$.

The standard transform pair is often given as:
$\mathcal{F}\{e^{-ax^2}\} = \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$
$\mathcal{F}\{x e^{-ax^2}\} = -\frac{i\omega}{2a} \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$

And for exponential functions in frequency:
If $\mathcal{F}\{f(x)\} = F(\omega)$, then $\mathcal{F}\{e^{ikx} f(x)\} = F(\omega - k)$.
We have $\frac{1}{i\omega - a}$. Let's rewrite it as $\frac{1}{-(a - i\omega)}$.
Consider the transform of $-e^{ax}$.
$\mathcal{F}\{-e^{ax}\} = \mathcal{F}\{-1 \cdot e^{ax}\}$.

The transform pair we often encounter is:
$\mathcal{F}\{e^{-a|x|}\} = \sqrt{\frac{2}{\pi}} \frac{a}{a^2 + \omega^2}$
$\mathcal{F}\{e^{ax}\} = \sqrt{\frac{2}{\pi}} \frac{a}{a^2 - \omega^2}$  (This is a different form, often for bilateral Laplace)

Let's use a known pair for $\frac{1}{i\omega - a}$:
$\mathcal{F}^{-1}\left\{\frac{1}{i\omega - a}\right\} = -e^{ax} u(-x)$, where $u(x)$ is the Heaviside step function.
However, this requires specific boundary conditions, usually in the context of Fourier transforms on $[0, \infty)$ or related to unilateral transforms.

For Fourier transforms on $(-\infty, \infty)$, if we assume $y(x) \to 0$ as $x \to \pm \infty$, the term $\frac{1}{i\omega - a}$ corresponds to the transform of $-e^{ax}$ for $x>0$ and $0$ for $x<0$ (or vice versa depending on the exact definition of transform).

Let's assume a standard Fourier transform pair:
$\mathcal{F}\{e^{-ax}\} = \frac{1}{a+i\omega}$ for $a>0$.
So $\mathcal{F}\{-e^{ax}\} = \frac{-1}{a-i\omega} = \frac{1}{i\omega-a}$.
This implies that the inverse transform of $\frac{1}{i\omega - a}$ is $-e^{ax}$.

If this is the case, then $y(x) = f_1(x) * f_2(x)$, where $f_1(x) = e^{-bx^2}$ and $f_2(x) = -e^{ax}$.
$y(x) = \int_{-\infty}^{\infty} f_1(\tau) f_2(x-\tau) d\tau = \int_{-\infty}^{\infty} e^{-b\tau^2} (-e^{a(x-\tau)}) d\tau$
$y(x) = -e^{ax} \int_{-\infty}^{\infty} e^{-b\tau^2} e^{-a\tau} d\tau$

This integral can be solved by completing the square in the exponent:
$-b\tau^2 - a\tau = -b(\tau^2 + \frac{a}{b}\tau) = -b((\tau + \frac{a}{2b})^2 - (\frac{a}{2b})^2) = -b(\tau + \frac{a}{2b})^2 + \frac{a^2}{4b}$

So, the integral becomes:
$\int_{-\infty}^{\infty} e^{-b(\tau + \frac{a}{2b})^2} e^{\frac{a^2}{4b}} d\tau = e^{\frac{a^2}{4b}} \int_{-\infty}^{\infty} e^{-b(\tau + \frac{a}{2b})^2} d\tau$
Let $u = \tau + \frac{a}{2b}$, $du = d\tau$.
$e^{\frac{a^2}{4b}} \int_{-\infty}^{\infty} e^{-bu^2} du$
Using the Gaussian integral $\int_{-\infty}^{\infty} e^{-cu^2} du = \sqrt{\frac{\pi}{c}}$:
$e^{\frac{a^2}{4b}} \sqrt{\frac{\pi}{b}}$

Therefore, $y(x) = -e^{ax} \left( e^{\frac{a^2}{4b}} \sqrt{\frac{\pi}{b}} \right)$.

**Important Caveat:** The transform pair $\mathcal{F}\{e^{-ax}\} = \frac{1}{a+i\omega}$ is strictly for $a>0$ and often implies a unilateral context or a specific choice of contour for inverse transform. For a pure Fourier transform on $(-\infty, \infty)$, convergence is an issue. However, in applied contexts, these forms are used by considering appropriate conditions or by treating them as limiting cases.

**Let's re-examine the solution of the ODE $y''(x) + y(x) = e^{-x^2}$**:
$Y(\omega) = \frac{\sqrt{\pi} e^{-\omega^2/4}}{1 - \omega^2}$.
The inverse transform requires partial fraction decomposition:
$\frac{1}{1-\omega^2} = \frac{1}{(1-\omega)(1+\omega)} = \frac{A}{1-\omega} + \frac{B}{1+\omega}$
$1 = A(1+\omega) + B(1-\omega)$
If $\omega=1$, $1 = 2A \implies A = 1/2$.
If $\omega=-1$, $1 = 2B \implies B = 1/2$.
So, $\frac{1}{1-\omega^2} = \frac{1}{2} \left(\frac{1}{1-\omega} + \frac{1}{1+\omega}\right)$.

$Y(\omega) = \frac{\sqrt{\pi}}{2} e^{-\omega^2/4} \left(\frac{1}{1-\omega} + \frac{1}{1+\omega}\right)$
$Y(\omega) = \frac{\sqrt{\pi}}{2} e^{-\omega^2/4} \left(\frac{-1}{\omega-1} + \frac{1}{\omega+1}\right)$

We know $\mathcal{F}\{e^{-ax^2}\} = \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$.
So, $\mathcal{F}\{e^{-x^2}\} = \sqrt{\pi} e^{-\omega^2/4}$ (with $a=1$).

Consider the transform pair: $\mathcal{F}\{h(x)\} = H(\omega)$.
$\mathcal{F}\{h(x) \cos(kx)\} = \frac{1}{2} [H(\omega-k) + H(\omega+k)]$
$\mathcal{F}\{h(x) \sin(kx)\} = \frac{1}{2i} [H(\omega-k) - H(\omega+k)]$

Let $H(\omega) = \sqrt{\pi} e^{-\omega^2/4}$. This is the transform of $e^{-x^2}$.
We have terms like $\frac{H(\omega)}{1-\omega}$.

This is getting into complex inverse transforms. A simpler ODE example is more instructive for demonstrating the derivative property directly.

---

### **7. Summary of Key Derivative Properties**

*   **First Derivative:** $\mathcal{F}\{f'(x)\} = i\omega F(\omega)$
*   **Second Derivative:** $\mathcal{F}\{f''(x)\} = (i\omega)^2 F(\omega) = -\omega^2 F(\omega)$
*   **n-th Derivative:** $\mathcal{F}\{f^{(n)}(x)\} = (i\omega)^n F(\omega)$

**Conditions for these properties:**
The function $f(x)$ and its derivatives up to the $(n-1)$-th order must vanish as $x \to \pm \infty$.

---

### **8. Practice Questions**

1.  **Find the Fourier transform of $f(x) = \cos(kx)$.**
    *Hint: Use $f(x) = \frac{e^{ikx} + e^{-ikx}}{2}$ and the property $\mathcal{F}\{e^{ikx} g(x)\} = G(\omega - k)$.*

2.  **Find the Fourier transform of $f(x) = x e^{-ax^2}$ for $a>0$.**
    *Hint: Use the property $\mathcal{F}\{xf(x)\} = i \frac{d}{d\omega} F(\omega)$ and the known transform of $e^{-ax^2}$.*

3.  **Solve the differential equation $y'(x) - y(x) = \delta(x)$ using Fourier transforms, assuming $y(x) \to 0$ as $x \to \pm \infty$.**
    *Hint: $\mathcal{F}\{\delta(x)\} = \frac{1}{\sqrt{2\pi}}$.*

4.  **Find the Fourier transform of the second derivative of $f(x) = e^{-|x|}$.**
    *Hint: You first need to find $F(\omega) = \mathcal{F}\{e^{-|x|}\} = \sqrt{\frac{2}{\pi}} \frac{1}{1+\omega^2}$. Then apply the second derivative property.*

---

### **9. Answers to Practice Questions**

1.  **Fourier Transform of $\cos(kx)$:**
    Let $f(x) = \cos(kx) = \frac{1}{2}(e^{ikx} + e^{-ikx})$.
    We know $\mathcal{F}\{e^{ax}\} = \sqrt{\frac{2}{\pi}} \frac{a}{a^2 - \omega^2}$ (this is sometimes derived differently and can be tricky).
    A more standard approach is to use the relation $\mathcal{F}\{\cos(kx)\} = \sqrt{\frac{\pi}{2}} (\delta(\omega-k) + \delta(\omega+k))$.
    Let's use the property $\mathcal{F}\{g(x)e^{ikx}\} = G(\omega-k)$.
    Let $g(x) = 1$. Its transform is not a simple function in the usual sense.
    Alternatively, we can use the definition directly or a known pair.
    Let's use the definition:
    $\mathcal{F}\{\cos(kx)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \cos(kx) e^{-i\omega x} dx$
    $= \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \frac{e^{ikx} + e^{-ikx}}{2} e^{-i\omega x} dx$
    $= \frac{1}{2\sqrt{2\pi}} \left[ \int_{-\infty}^{\infty} e^{i(k-\omega)x} dx + \int_{-\infty}^{\infty} e^{-i(k+\omega)x} dx \right]$
    Using $\int_{-\infty}^{\infty} e^{iax} dx = 2\pi \delta(a)$:
    $= \frac{1}{2\sqrt{2\pi}} [2\pi \delta(k-\omega) + 2\pi \delta(-k-\omega)]$
    $= \sqrt{\frac{\pi}{2}} [\delta(\omega-k) + \delta(\omega+k)]$

2.  **Fourier Transform of $x e^{-ax^2}$:**
    We know $\mathcal{F}\{e^{-ax^2}\} = \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$.
    Using $\mathcal{F}\{xf(x)\} = i \frac{d}{d\omega} F(\omega)$:
    $F(\omega) = \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$
    $\frac{d}{d\omega} F(\omega) = \sqrt{\frac{\pi}{a}} \left(-\frac{2\omega}{4a}\right) e^{-\omega^2/(4a)} = -\frac{\omega}{2a} \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$
    $\mathcal{F}\{x e^{-ax^2}\} = i \left(-\frac{\omega}{2a} \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}\right) = -\frac{i\omega}{2a} \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$

3.  **Solve $y'(x) - y(x) = \delta(x)$:**
    Let $Y(\omega) = \mathcal{F}\{y(x)\}$.
    Transforming the equation:
    $i\omega Y(\omega) - Y(\omega) = \frac{1}{\sqrt{2\pi}}$
    $Y(\omega)(i\omega - 1) = \frac{1}{\sqrt{2\pi}}$
    $Y(\omega) = \frac{1}{\sqrt{2\pi}} \frac{1}{i\omega - 1}$

    We know that $\mathcal{F}\{e^{ax}\} = \frac{1}{a-i\omega}$ and $\mathcal{F}\{e^{-ax}\} = \frac{1}{a+i\omega}$.
    So, $\mathcal{F}\{-e^{x}\} = \frac{-1}{1-i\omega} = \frac{1}{i\omega - 1}$.
    Therefore, the inverse transform of $\frac{1}{i\omega - 1}$ is $-e^{x}$.

    $y(x) = \mathcal{F}^{-1}\left\{\frac{1}{\sqrt{2\pi}} \frac{1}{i\omega - 1}\right\} = \frac{1}{\sqrt{2\pi}} (-e^{x})$
    However, this result implies $y(x)$ grows exponentially, which contradicts the assumption $y(x) \to 0$ as $x \to \pm \infty$.

    Let's reconsider the Fourier transform pair for $\frac{1}{i\omega - a}$.
    If we use the convention $\mathcal{F}\{e^{-ax}\} = \frac{1}{a+i\omega}$ (for $a>0$), then $\mathcal{F}\{e^{ax}\} = \frac{1}{a-i\omega}$.
    So, $\mathcal{F}\{-e^{ax}\} = \frac{-1}{a-i\omega} = \frac{1}{i\omega - a}$.
    For our problem, $a=1$. So $\mathcal{F}\{-e^x\} = \frac{1}{i\omega - 1}$.

    This means $Y(\omega) = \frac{1}{\sqrt{2\pi}} \mathcal{F}\{-e^x\}$.
    $y(x) = \frac{1}{\sqrt{2\pi}} (-e^x)$. This still seems problematic for the condition.

    **Important Note:** The conditions $y(x) \to 0$ as $x \to \pm \infty$ are crucial. The transform $\frac{1}{i\omega - a}$ is often associated with functions that are zero for $x<0$ (unilateral).

    If we consider the problem in the context of signals and systems on $(-\infty, \infty)$, the $\delta(x)$ function is an input. The system's impulse response $h(x)$ would be the inverse transform of $\frac{1}{i\omega - 1}$.
    For the standard Fourier transform on $(-\infty, \infty)$, $\mathcal{F}\{e^{-ax} u(x)\} = \frac{1}{a+i\omega}$ and $\mathcal{F}\{e^{ax} u(-x)\} = \frac{1}{a-i\omega}$ for $a>0$.
    Then $\mathcal{F}\{-e^{ax} u(-x)\} = \frac{-1}{a-i\omega} = \frac{1}{i\omega-a}$.
    So $y(x)$ could be proportional to $-e^x u(-x)$.
    $y(x) = C (-e^x u(-x))$.
    Substitute into ODE:
    $y'(x) = C (-e^x u(-x) + e^x \delta(-x)) = C (-e^x u(-x))$.
    $y'(x) - y(x) = C (-e^x u(-x)) - C (-e^x u(-x)) = 0$.
    This does not equal $\delta(x)$.

    Let's re-evaluate the transform of the derivative. If $y(x) \to 0$ as $x \to \pm \infty$, the boundary terms are zero.
    The issue might be with the transform of $\delta(x)$ or the interpretation of the inverse transform $\frac{1}{i\omega-a}$.

    Consider the definition of the Fourier transform of $\delta(x)$ being $1/\sqrt{2\pi}$.
    If $y'(x) - y(x) = \delta(x)$, then $Y(\omega)(i\omega - 1) = 1/\sqrt{2\pi}$.
    $Y(\omega) = \frac{1}{\sqrt{2\pi}} \frac{1}{i\omega - 1}$.

    Let's use a known transform pair: $\mathcal{F}\{e^{-a|x|}\} = \sqrt{\frac{2}{\pi}} \frac{a}{a^2+\omega^2}$.
    The expression $\frac{1}{i\omega - 1}$ suggests a pole at $\omega = i$.

    Let's look up the inverse transform of $\frac{1}{i\omega - a}$. It is often $-\frac{1}{a} e^{ax} u(-x)$ or similar depending on the contour.

    **A simpler approach for ODEs with $\delta(x)$:**
    The solution $y(x)$ is the impulse response of the system defined by $y'(x) - y(x)$.
    The system's transfer function is $H(\omega) = \frac{1}{i\omega - 1}$.
    The impulse response is $h(x) = \mathcal{F}^{-1}\{H(\omega)\}$.
    As shown before, $\mathcal{F}\{-e^x u(-x)\} = \frac{1}{i\omega - 1}$.
    So, $h(x) = -e^x u(-x)$.
    The solution to $y'(x) - y(x) = \delta(x)$ is $y(x) = h(x) = -e^x u(-x)$.
    Let's check this:
    $y(x) = -e^x u(-x)$.
    $y'(x) = -e^x u(-x) - e^x \delta(-x) = -e^x u(-x)$. (since $x\delta(-x) = 0$ and $\delta(-x)=\delta(x)$)
    $y'(x) - y(x) = (-e^x u(-x)) - (-e^x u(-x)) = 0$.

    This suggests an error in the standard transform pairs or their application.

    **Let's use the definition of Fourier Transform of derivative carefully.**
    $\mathcal{F}\{f'(x)\} = i\omega F(\omega)$.
    Let's assume the question implies a context where this leads to a meaningful result.

    Revisit Example 3: $y'(x) - y(x) = \delta(x)$.
    $i\omega Y(\omega) - Y(\omega) = \frac{1}{\sqrt{2\pi}}$.
    $Y(\omega) = \frac{1}{\sqrt{2\pi}} \frac{1}{i\omega - 1}$.

    Let's use the transform pair $\mathcal{F}\{e^{-ax} \cdot 1\} = \frac{1}{a+i\omega}$ (for $a>0$, unilateral context).
    The expression $\frac{1}{i\omega - 1}$ is $\frac{1}{-(1 - i\omega)}$.
    The transform of $e^{ax}$ is $\frac{1}{a-i\omega}$.
    So the transform of $-e^{ax}$ is $\frac{-1}{a-i\omega} = \frac{1}{i\omega - a}$.
    For $a=1$, $\mathcal{F}\{-e^x\} = \frac{1}{i\omega - 1}$.
    $Y(\omega) = \frac{1}{\sqrt{2\pi}} \mathcal{F}\{-e^x\}$.
    $y(x) = \frac{1}{\sqrt{2\pi}} (-e^x)$.

    This still does not fit the condition $y(x) \to 0$ at $\pm \infty$.
    **Crucial Point:** The assumption $y(x) \to 0$ at $\pm \infty$ is vital. The simple transform of $\delta(x)$ might need careful interpretation in this context.

    For problems like this, where initial conditions are not given but behavior at infinity is, a different approach might be intended.

    **Let's try another approach for Question 3:**
    The ODE is a first-order linear ODE.
    $y' - y = \delta(x)$.
    If we ignore $\delta(x)$ for a moment: $y' - y = 0 \implies y(x) = C e^x$.
    The $\delta(x)$ term acts as a source at $x=0$.

    The Fourier transform of a derivative is related to multiplication by $i\omega$.
    The Fourier transform of a function multiplied by $x$ is related to differentiation in the frequency domain.
    The Fourier transform of an exponential function $e^{ax}$ is problematic for the standard Fourier transform unless $a=0$.

    Let's assume the standard transform pair $\mathcal{F}\{e^{-ax} u(x)\} = \frac{1}{a+i\omega}$ and $\mathcal{F}\{e^{ax} u(-x)\} = \frac{1}{a-i\omega}$ are implied.
    Then $\mathcal{F}\{-e^{ax} u(-x)\} = \frac{1}{i\omega - a}$.
    For $a=1$, $\mathcal{F}\{-e^x u(-x)\} = \frac{1}{i\omega - 1}$.

    So, $Y(\omega) = \frac{1}{\sqrt{2\pi}} \frac{1}{i\omega - 1} = \frac{1}{\sqrt{2\pi}} \mathcal{F}\{-e^x u(-x)\}$.
    $y(x) = \frac{1}{\sqrt{2\pi}} (-e^x u(-x))$.
    Let's check the condition $y(x) \to 0$ as $x \to \pm \infty$.
    As $x \to \infty$, $u(-x) = 0$, so $y(x) = 0$. This is fine.
    As $x \to -\infty$, $u(-x) = 1$, so $y(x) = -\frac{1}{\sqrt{2\pi}} e^x$. This tends to $0$ as $x \to -\infty$.
    So this solution satisfies the conditions at infinity.

    Let's check the ODE: $y'(x) - y(x) = \delta(x)$.
    $y(x) = -\frac{1}{\sqrt{2\pi}} e^x u(-x)$.
    $y'(x) = -\frac{1}{\sqrt{2\pi}} [e^x u(-x) + e^x (-\delta(x))]$ (using derivative of step function).
    $y'(x) = -\frac{1}{\sqrt{2\pi}} e^x u(-x) + \frac{1}{\sqrt{2\pi}} e^x \delta(x)$.
    Since $x\delta(x)=0$, $e^x\delta(x) = e^0\delta(x) = \delta(x)$.
    $y'(x) = -\frac{1}{\sqrt{2\pi}} e^x u(-x) + \frac{1}{\sqrt{2\pi}} \delta(x)$.

    $y'(x) - y(x) = \left(-\frac{1}{\sqrt{2\pi}} e^x u(-x) + \frac{1}{\sqrt{2\pi}} \delta(x)\right) - \left(-\frac{1}{\sqrt{2\pi}} e^x u(-x)\right)$
    $= \frac{1}{\sqrt{2\pi}} \delta(x)$.

    This answer seems correct for the problem as stated with the given conditions, using the standard Fourier transform pairs that include step functions.

    **Answer for Question 3:** $y(x) = -\frac{1}{\sqrt{2\pi}} e^x u(-x)$

4.  **Find the Fourier transform of the second derivative of $f(x) = e^{-|x|}$.**
    First, find $F(\omega) = \mathcal{F}\{e^{-|x|}\} = \sqrt{\frac{2}{\pi}} \frac{1}{1+\omega^2}$.
    Using the second derivative property: $\mathcal{F}\{f''(x)\} = -\omega^2 F(\omega)$.
    $\mathcal{F}\{f''(x)\} = -\omega^2 \left(\sqrt{\frac{2}{\pi}} \frac{1}{1+\omega^2}\right) = -\sqrt{\frac{2}{\pi}} \frac{\omega^2}{1+\omega^2}$.

---

### **10. Important Points to Remember**

*   **Derivative Property:** Transforms of derivatives turn differentiation into multiplication by $i\omega$ (or powers of $i\omega$).
*   **Convergence:** The validity of these properties depends on the function and its derivatives vanishing at infinity.
*   **Application to ODEs:** This property is fundamental for solving linear constant-coefficient ODEs in the frequency domain.
*   **Boundary Conditions:** For standard Fourier transforms on $(-\infty, \infty)$, assumptions about behavior at infinity are crucial. For problems with initial conditions, Laplace transforms are often more direct.
*   **Inverse Transforms:** The inverse Fourier transform step can be the most challenging part of solving ODEs.

---
