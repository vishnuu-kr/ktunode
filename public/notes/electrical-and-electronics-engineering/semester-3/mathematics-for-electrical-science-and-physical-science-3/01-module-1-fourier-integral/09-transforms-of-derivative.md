---
title: "Transforms of Derivative."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a60"
status: "completed"
scrapedAt: "2026-05-23T16:14:28.615Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 1: Fourier Integral

### Topic: Transforms of Derivatives

---

### Learning Outcomes:

Upon successful completion of this topic, students will be able to:

*   Understand the relationship between the Fourier transform of a function and the Fourier transform of its derivatives.
*   Apply the derivative properties of Fourier transforms to simplify the solution of differential equations.
*   Derive and utilize the Fourier transform of the first and second derivatives of a function.
*   Recognize the significance of these properties in signal processing and system analysis.

---

### Key Concepts and Definitions:

#### 1. Fourier Transform Definition

The Fourier Transform of a function $f(x)$, denoted as $F(\omega)$ or $\mathcal{F}\{f(x)\}$, is defined as:

$F(\omega) = \mathcal{F}\{f(x)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$

The inverse Fourier Transform allows us to recover the original function from its transform:

$f(x) = \mathcal{F}^{-1}\{F(\omega)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} F(\omega) e^{i\omega x} d\omega$

*(Refer to Kreyszig, 10th ed., Chapter 11, Section 11.1 for a detailed introduction to Fourier Integrals and Transforms.)*

#### 2. Transforms of Derivatives

This is a crucial property of Fourier Transforms that relates the transform of a derivative of a function to the transform of the function itself. These properties are instrumental in converting differential equations into algebraic equations in the frequency domain, making them easier to solve.

**Property 1: Transform of the First Derivative**

If $f(x)$ is a continuous function and $f'(x)$ is piecewise continuous for all $x$, and if $f(x) \to 0$ as $|x| \to \infty$, then the Fourier transform of the first derivative of $f(x)$ is:

$\mathcal{F}\{f'(x)\} = i\omega F(\omega)$

**Derivation:**

We start with the definition of the Fourier Transform of $f'(x)$:

$\mathcal{F}\{f'(x)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f'(x) e^{-i\omega x} dx$

We can use integration by parts. Let $u = e^{-i\omega x}$ and $dv = f'(x) dx$.
Then $du = -i\omega e^{-i\omega x} dx$ and $v = f(x)$.

Applying the integration by parts formula $\int u \, dv = uv - \int v \, du$:

$\mathcal{F}\{f'(x)\} = \frac{1}{\sqrt{2\pi}} \left[ f(x) e^{-i\omega x} \right]_{-\infty}^{\infty} - \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) (-i\omega e^{-i\omega x}) dx$

Since $f(x) \to 0$ as $|x| \to \infty$, the boundary term $[f(x) e^{-i\omega x}]_{-\infty}^{\infty} = 0$.

$\mathcal{F}\{f'(x)\} = - \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) (-i\omega e^{-i\omega x}) dx$
$\mathcal{F}\{f'(x)\} = i\omega \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$

By the definition of the Fourier Transform, the integral term is $F(\omega)$.
Therefore, $\mathcal{F}\{f'(x)\} = i\omega F(\omega)$.

*(This property is a direct consequence of the Fourier Transform's linearity and its behavior with differentiation, as discussed in general transform properties. Refer to Ramana, 39th ed., Chapter 34, for similar properties of Laplace Transforms which can be analogous.)*

**Property 2: Transform of the Second Derivative**

If $f(x)$, $f'(x)$ are continuous functions and $f''(x)$ is piecewise continuous for all $x$, and if $f(x) \to 0$ and $f'(x) \to 0$ as $|x| \to \infty$, then the Fourier transform of the second derivative of $f(x)$ is:

$\mathcal{F}\{f''(x)\} = (i\omega)^2 F(\omega) = -\omega^2 F(\omega)$

**Derivation:**

We can derive this by applying the first derivative property to $f'(x)$:

$\mathcal{F}\{f''(x)\} = \mathcal{F}\{(f'(x))'\}$

Let $g(x) = f'(x)$. Then $g'(x) = f''(x)$.
Using Property 1: $\mathcal{F}\{g'(x)\} = i\omega \mathcal{F}\{g(x)\}$
Substituting back: $\mathcal{F}\{f''(x)\} = i\omega \mathcal{F}\{f'(x)\}$

Now, using Property 1 again for $\mathcal{F}\{f'(x)\}$:

$\mathcal{F}\{f''(x)\} = i\omega (i\omega F(\omega))$
$\mathcal{F}\{f''(x)\} = (i\omega)^2 F(\omega)$
$\mathcal{F}\{f''(x)\} = -\omega^2 F(\omega)$

*(This property is fundamental for solving second-order linear ordinary differential equations with constant coefficients using Fourier Transforms. Refer to Kreyszig, 10th ed., Chapter 11, Section 11.5, for applications in solving differential equations.)*

---

### Examples:

**Example 1: Find the Fourier Transform of $f(x) = e^{-ax^2}$, where $a > 0$.**

This is a classic example from signal processing. While the direct calculation can be involved, it's useful to know the result for this Gaussian function.

**Result (for reference, derived using other properties or known transforms):**
$\mathcal{F}\{e^{-ax^2}\} = \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$

**Now, let's use the derivative property to find the transform of the derivative of this function.**

Let $f(x) = e^{-ax^2}$. Then $f'(x) = -2ax e^{-ax^2}$.
We know $\mathcal{F}\{f(x)\} = \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$.

Using the first derivative property:
$\mathcal{F}\{f'(x)\} = i\omega \mathcal{F}\{f(x)\}$
$\mathcal{F}\{-2ax e^{-ax^2}\} = i\omega \left(\sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}\right)$
$\mathcal{F}\{-2ax e^{-ax^2}\} = i\omega \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$

This shows how the transform of a derivative can be obtained from the transform of the original function.

**Example 2: Solve the differential equation $y'' + y = \delta(x-a)$ using Fourier Transforms.**

*(This example is illustrative of the application but might go beyond a strict understanding of only derivative transforms. It requires knowledge of the delta function's transform.)*

**Steps:**
1.  **Take the Fourier Transform of both sides:**
    $\mathcal{F}\{y''\} + \mathcal{F}\{y\} = \mathcal{F}\{\delta(x-a)\}$

2.  **Apply the derivative property and known transforms:**
    We know $\mathcal{F}\{y''\} = -\omega^2 Y(\omega)$ (where $Y(\omega) = \mathcal{F}\{y(x)\}$).
    We know $\mathcal{F}\{y\} = Y(\omega)$.
    The Fourier transform of a shifted delta function $\delta(x-a)$ is $e^{-ia\omega}$.

    So, the equation becomes:
    $-\omega^2 Y(\omega) + Y(\omega) = e^{-ia\omega}$

3.  **Solve for $Y(\omega)$:**
    $Y(\omega) (1 - \omega^2) = e^{-ia\omega}$
    $Y(\omega) = \frac{e^{-ia\omega}}{1 - \omega^2}$

4.  **Find the inverse Fourier Transform to get $y(x)$:**
    This step requires partial fraction decomposition and knowledge of transforms of basic functions (like sines and cosines).

    $Y(\omega) = e^{-ia\omega} \frac{1}{(1-\omega)(1+\omega)}$

    Using partial fractions for $\frac{1}{1-\omega^2}$:
    $\frac{1}{1-\omega^2} = \frac{A}{1-\omega} + \frac{B}{1+\omega}$
    $1 = A(1+\omega) + B(1-\omega)$
    If $\omega=1$, $1 = 2A \implies A = 1/2$.
    If $\omega=-1$, $1 = 2B \implies B = 1/2$.
    So, $\frac{1}{1-\omega^2} = \frac{1}{2} \left(\frac{1}{1-\omega} + \frac{1}{1+\omega}\right)$

    $Y(\omega) = e^{-ia\omega} \frac{1}{2} \left(\frac{1}{1-\omega} + \frac{1}{1+\omega}\right)$

    We know that $\mathcal{F}^{-1}\{\frac{1}{1-\omega}\} = i e^{\omega x}$ (This is not standard and depends on conventions. A more direct approach might use $\mathcal{F}^{-1}\{1/(j\omega - b)\} = -e^{bx} u(-x)$ or similar forms. Let's use a known transform pair directly from tables or derived earlier).

    A more standard approach for inverse transform:
    We know $\mathcal{F}\{\cos(\omega_0 x)\} = \sqrt{\frac{\pi}{2}} (\delta(\omega - \omega_0) + \delta(\omega + \omega_0))$.
    And $\mathcal{F}\{f(x-a)\} = e^{-ia\omega} F(\omega)$.

    Let's rewrite $Y(\omega)$ using forms that have known inverse transforms.
    The term $\frac{1}{1-\omega^2}$ doesn't directly map to a simple sinusoidal function's transform in the standard $\frac{1}{\sqrt{2\pi}}$ convention.

    **Alternative approach for Example 2 using a common Fourier transform pair:**
    Consider the transform pair: $\mathcal{F}\{e^{-b|x|}\} = \sqrt{\frac{2}{\pi}} \frac{b}{b^2+\omega^2}$.

    Let's consider a simpler case: $y'' + y = \delta(x)$.
    $Y(\omega) = \frac{1}{1-\omega^2}$. This doesn't have a standard inverse transform readily available for this $\omega$ formulation.

    **Let's revise Example 2 to be more directly solvable with the stated learning outcomes, focusing on the derivative property's application.**

**Revised Example 2: Find the Fourier Transform of the second derivative of $f(x) = \sin(kx)$.**

**Solution:**
1.  **Find the Fourier Transform of $f(x) = \sin(kx)$.**
    We know that $\sin(kx) = \frac{e^{ikx} - e^{-ikx}}{2i}$.
    Using the linearity property and the transform of $e^{ax}$: $\mathcal{F}\{e^{ax}\} = \sqrt{2\pi} \delta(\omega - a)$.
    $\mathcal{F}\{\sin(kx)\} = \frac{1}{2i} (\mathcal{F}\{e^{ikx}\} - \mathcal{F}\{e^{-ikx}\})$
    $\mathcal{F}\{\sin(kx)\} = \frac{1}{2i} (\sqrt{2\pi} \delta(\omega - k) - \sqrt{2\pi} \delta(\omega + k))$
    $\mathcal{F}\{\sin(kx)\} = \sqrt{\frac{\pi}{2}} \frac{1}{i} (\delta(\omega - k) - \delta(\omega + k))$
    $\mathcal{F}\{\sin(kx)\} = -i \sqrt{\frac{\pi}{2}} (\delta(\omega - k) - \delta(\omega + k))$

    Let $F(\omega) = \mathcal{F}\{\sin(kx)\}$.

2.  **Find the second derivative of $f(x) = \sin(kx)$.**
    $f'(x) = k \cos(kx)$
    $f''(x) = -k^2 \sin(kx)$

3.  **Use the transform of the second derivative property:**
    $\mathcal{F}\{f''(x)\} = -\omega^2 F(\omega)$
    $\mathcal{F}\{-k^2 \sin(kx)\} = -\omega^2 \left( -i \sqrt{\frac{\pi}{2}} (\delta(\omega - k) - \delta(\omega + k)) \right)$
    $-k^2 \mathcal{F}\{\sin(kx)\} = i\omega^2 \sqrt{\frac{\pi}{2}} (\delta(\omega - k) - \delta(\omega + k))$

    Let's check consistency:
    If we transform $f''(x) = -k^2 \sin(kx)$ directly:
    $\mathcal{F}\{-k^2 \sin(kx)\} = -k^2 \mathcal{F}\{\sin(kx)\}$
    $= -k^2 \left( -i \sqrt{\frac{\pi}{2}} (\delta(\omega - k) - \delta(\omega + k)) \right)$
    $= ik^2 \sqrt{\frac{\pi}{2}} (\delta(\omega - k) - \delta(\omega + k))$

    Now, let's use the property:
    $\mathcal{F}\{f''(x)\} = -\omega^2 F(\omega)$
    $= -\omega^2 \left( -i \sqrt{\frac{\pi}{2}} (\delta(\omega - k) - \delta(\omega + k)) \right)$
    $= i\omega^2 \sqrt{\frac{\pi}{2}} (\delta(\omega - k) - \delta(\omega + k))$

    These two results match. This confirms the application of the derivative property.

---

### Practice Questions/Exercises:

1.  **Find the Fourier transform of the first derivative of $f(x) = e^{-|x|}$.**
    *(Hint: You'll need the Fourier transform of $e^{-|x|}$ first.)*

2.  **Given $f(x) = x e^{-x^2}$, find its Fourier transform using the derivative property.**
    *(Hint: Relate $f(x)$ to the derivative of $e^{-x^2}$. You might need to adjust constants.)*

3.  **Verify the Fourier transform of $\cos(kx)$ using the first derivative property, knowing that $\frac{d}{dx}\sin(kx) = k\cos(kx)$ and the transform of $\sin(kx)$.**

4.  **Consider the function $f(x) = \begin{cases} 1 & \text{if } |x| \le a \\ 0 & \text{if } |x| > a \end{cases}$ (Rectangular pulse).**
    **Find the Fourier transform of $f'(x)$.**
    *(Hint: $f'(x)$ will involve Dirac delta functions at $x=a$ and $x=-a$, and a function that is zero everywhere else. You'll need the transform of the derivative of a rectangular pulse, which involves impulses.)*

---

### Answers to Practice Questions:

1.  **Fourier Transform of $f(x) = e^{-|x|}$:**
    Using the standard transform pair $\mathcal{F}\{e^{-b|x|}\} = \sqrt{\frac{2}{\pi}} \frac{b}{b^2+\omega^2}$.
    For $b=1$, $F(\omega) = \mathcal{F}\{e^{-|x|}\} = \sqrt{\frac{2}{\pi}} \frac{1}{1+\omega^2}$.

    **Fourier Transform of $f'(x) = \frac{d}{dx}(e^{-|x|})$:**
    If $x>0$, $f(x) = e^{-x}$, $f'(x) = -e^{-x}$.
    If $x<0$, $f(x) = e^{x}$, $f'(x) = e^{x}$.
    So, $f'(x) = \begin{cases} -e^{-x} & x>0 \\ e^{x} & x<0 \end{cases} = -sgn(x) e^{-|x|}$.

    Using the derivative property:
    $\mathcal{F}\{f'(x)\} = i\omega F(\omega)$
    $\mathcal{F}\{f'(x)\} = i\omega \left(\sqrt{\frac{2}{\pi}} \frac{1}{1+\omega^2}\right)$
    $\mathcal{F}\{f'(x)\} = i\omega \sqrt{\frac{2}{\pi}} \frac{1}{1+\omega^2}$.

2.  **Fourier Transform of $f(x) = x e^{-x^2}$:**
    We know $\mathcal{F}\{e^{-ax^2}\} = \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$.
    Let $g(x) = e^{-x^2}$ (here $a=1$). So, $\mathcal{F}\{g(x)\} = \sqrt{\pi} e^{-\omega^2/4}$.
    The derivative of $g(x)$ is $g'(x) = -2x e^{-x^2}$.
    So, $\mathcal{F}\{-2x e^{-x^2}\} = i\omega \mathcal{F}\{e^{-x^2}\} = i\omega \sqrt{\pi} e^{-\omega^2/4}$.
    $\mathcal{F}\{x e^{-x^2}\} = \frac{1}{-2} \mathcal{F}\{-2x e^{-x^2}\} = \frac{1}{-2} \left( i\omega \sqrt{\pi} e^{-\omega^2/4} \right)$
    $\mathcal{F}\{x e^{-x^2}\} = -\frac{i\omega}{2} \sqrt{\pi} e^{-\omega^2/4}$.

3.  **Verify the Fourier transform of $\cos(kx)$:**
    We know $\mathcal{F}\{\sin(kx)\} = -i \sqrt{\frac{\pi}{2}} (\delta(\omega - k) - \delta(\omega + k))$.
    The derivative of $\sin(kx)$ is $k\cos(kx)$.
    Using the derivative property:
    $\mathcal{F}\{k\cos(kx)\} = i\omega \mathcal{F}\{\sin(kx)\}$
    $k \mathcal{F}\{\cos(kx)\} = i\omega \left( -i \sqrt{\frac{\pi}{2}} (\delta(\omega - k) - \delta(\omega + k)) \right)$
    $k \mathcal{F}\{\cos(kx)\} = \omega \sqrt{\frac{\pi}{2}} (\delta(\omega - k) - \delta(\omega + k))$
    $\mathcal{F}\{\cos(kx)\} = \frac{1}{k} \omega \sqrt{\frac{\pi}{2}} (\delta(\omega - k) - \delta(\omega + k))$

    Now, use the property $\omega \delta(\omega - k) = k \delta(\omega - k)$ and $\omega \delta(\omega + k) = -k \delta(\omega + k)$:
    $\mathcal{F}\{\cos(kx)\} = \frac{1}{k} \sqrt{\frac{\pi}{2}} (k \delta(\omega - k) - (-k) \delta(\omega + k))$
    $\mathcal{F}\{\cos(kx)\} = \sqrt{\frac{\pi}{2}} (\delta(\omega - k) + \delta(\omega + k))$.
    This matches the known Fourier transform of $\cos(kx)$.

4.  **Fourier Transform of $f'(x)$ for $f(x) = \begin{cases} 1 & \text{if } |x| \le a \\ 0 & \text{if } |x| > a \end{cases}$:**
    $f(x)$ is the rectangular pulse.
    $f'(x) = \delta(x-a) - \delta(x+a)$.

    Using the linearity of the Fourier Transform:
    $\mathcal{F}\{f'(x)\} = \mathcal{F}\{\delta(x-a) - \delta(x+a)\}$
    $\mathcal{F}\{f'(x)\} = \mathcal{F}\{\delta(x-a)\} - \mathcal{F}\{\delta(x+a)\}$

    We know that $\mathcal{F}\{\delta(x-c)\} = e^{-ic\omega}$.
    Therefore,
    $\mathcal{F}\{f'(x)\} = e^{-ia\omega} - e^{ia\omega}$
    $\mathcal{F}\{f'(x)\} = -2i \sin(a\omega)$.

    **Verification using the derivative property:**
    First, find $F(\omega) = \mathcal{F}\{f(x)\}$:
    $F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-a}^{a} 1 \cdot e^{-i\omega x} dx$
    $F(\omega) = \frac{1}{\sqrt{2\pi}} \left[ \frac{e^{-i\omega x}}{-i\omega} \right]_{-a}^{a}$
    $F(\omega) = \frac{1}{\sqrt{2\pi}} \left( \frac{e^{-i\omega a}}{-i\omega} - \frac{e^{i\omega a}}{-i\omega} \right)$
    $F(\omega) = \frac{1}{\sqrt{2\pi}} \frac{e^{i\omega a} - e^{-i\omega a}}{i\omega}$
    $F(\omega) = \frac{1}{\sqrt{2\pi}} \frac{2i \sin(a\omega)}{i\omega} = \sqrt{\frac{2}{\pi}} \frac{\sin(a\omega)}{\omega}$.

    Now, using the derivative property:
    $\mathcal{F}\{f'(x)\} = i\omega F(\omega)$
    $\mathcal{F}\{f'(x)\} = i\omega \left(\sqrt{\frac{2}{\pi}} \frac{\sin(a\omega)}{\omega}\right)$
    $\mathcal{F}\{f'(x)\} = i\omega \sqrt{\frac{2}{\pi}} \frac{\sin(a\omega)}{\omega}$
    $\mathcal{F}\{f'(x)\} = i \sqrt{\frac{2}{\pi}} \sin(a\omega)$.

    **Wait, there's a discrepancy! Let's re-examine the definition and constants.**
    The convention $\frac{1}{\sqrt{2\pi}}$ for both FT and IFT is used here.
    Kreyszig uses $\mathcal{F}\{f(x)\} = \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$. With this definition:
    $\mathcal{F}\{f'(x)\} = i\omega F(\omega)$ (still holds)
    $\mathcal{F}\{e^{-ax^2}\} = \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)}$.
    The difference in the $\frac{1}{\sqrt{2\pi}}$ factor changes the constant. Let's stick to the initial definition used for consistency.

    Revisiting Example 4:
    $f(x) = \begin{cases} 1 & \text{if } |x| \le a \\ 0 & \text{if } |x| > a \end{cases}$
    $f'(x) = \delta(x-a) - \delta(x+a)$ (This is correct for the derivative of the continuous version of the pulse, considering the jump).

    The FT of $\delta(x-c)$ with the definition $F(\omega) = \frac{1}{\sqrt{2\pi}} \int f(x) e^{-i\omega x} dx$:
    $\mathcal{F}\{\delta(x-c)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \delta(x-c) e^{-i\omega x} dx$
    Using the sifting property: $\int g(x) \delta(x-c) dx = g(c)$.
    $\mathcal{F}\{\delta(x-c)\} = \frac{1}{\sqrt{2\pi}} e^{-i\omega c}$.

    So, $\mathcal{F}\{f'(x)\} = \mathcal{F}\{\delta(x-a) - \delta(x+a)\} = \mathcal{F}\{\delta(x-a)\} - \mathcal{F}\{\delta(x+a)\}$
    $= \frac{1}{\sqrt{2\pi}} e^{-i\omega a} - \frac{1}{\sqrt{2\pi}} e^{-i\omega (-a)}$
    $= \frac{1}{\sqrt{2\pi}} (e^{-ia\omega} - e^{ia\omega})$
    $= \frac{1}{\sqrt{2\pi}} (-2i \sin(a\omega))$
    $= -i \sqrt{\frac{2}{\pi}} \sin(a\omega)$.

    Now, let's compare this with $i\omega F(\omega)$ where $F(\omega) = \sqrt{\frac{2}{\pi}} \frac{\sin(a\omega)}{\omega}$.
    $i\omega F(\omega) = i\omega \left(\sqrt{\frac{2}{\pi}} \frac{\sin(a\omega)}{\omega}\right) = i \sqrt{\frac{2}{\pi}} \sin(a\omega)$.

    **The sign is still off. Let's carefully check the derivative of the rectangular pulse.**
    The derivative of a step function $u(x)$ is $\delta(x)$.
    The function $f(x)$ can be written as $u(x+a) - u(x-a)$.
    $f'(x) = \frac{d}{dx}(u(x+a)) - \frac{d}{dx}(u(x-a))$
    $f'(x) = \delta(x+a) - \delta(x-a)$.

    So the FT of $f'(x)$ is:
    $\mathcal{F}\{\delta(x+a)\} - \mathcal{F}\{\delta(x-a)\}$
    $= \frac{1}{\sqrt{2\pi}} e^{ia\omega} - \frac{1}{\sqrt{2\pi}} e^{-ia\omega}$
    $= \frac{1}{\sqrt{2\pi}} (e^{ia\omega} - e^{-ia\omega})$
    $= \frac{1}{\sqrt{2\pi}} (2i \sin(a\omega))$
    $= i \sqrt{\frac{2}{\pi}} \sin(a\omega)$.

    This matches the result from $i\omega F(\omega)$. The initial mistake was in the sign of the derivative of the rectangular pulse.

---

### Important Points to Remember:

*   The derivative properties of Fourier Transforms are powerful tools for simplifying differential equations by converting them into algebraic equations in the frequency domain.
*   $\mathcal{F}\{f'(x)\} = i\omega F(\omega)$
*   $\mathcal{F}\{f''(x)\} = (i\omega)^2 F(\omega) = -\omega^2 F(\omega)$
*   The conditions for these properties to hold are crucial: the function and its derivatives must satisfy certain continuity and decay conditions as $|x| \to \infty$.
*   These properties are directly analogous to similar properties for Laplace Transforms and Z-Transforms, highlighting a common mathematical framework across different transform methods used in engineering.
*   When using these properties, ensure consistency with the definition of the Fourier Transform (particularly the $\frac{1}{\sqrt{2\pi}}$ factor and the sign in the exponent).

---

### Alignment with Course Outcomes:

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering. (Knowledge Level: K3)**
    This topic directly supports CO1 by providing the fundamental derivative properties, which are key to applying Fourier Transforms for solving engineering problems, especially differential equations encountered in circuits, systems, and signal analysis. The examples illustrate this application.

*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping. (Knowledge Level: K3)**
    While this specific topic focuses on real-valued functions and their transforms, the underlying mathematics of the Fourier Transform, particularly the use of $e^{-i\omega x}$, involves complex exponentials. A deeper understanding of complex analysis (CO2) can aid in understanding the behavior of these transforms in the complex frequency domain, although it's not the primary focus of this particular topic on derivative transforms.

*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula. (Knowledge Level: K3)**
    The derivation of the derivative properties of Fourier Transforms relies on integration by parts, which is a fundamental calculus technique. While not directly using Cauchy's theorems, the rigorous derivation of these properties builds on integral calculus, which is a prerequisite for complex integration.

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals. (Knowledge Level: K3)**
    Similar to CO2 and CO3, this topic doesn't directly involve residue calculus. However, the ability to manipulate functions in the frequency domain (e.g., $F(\omega)$) and understand their behavior (e.g., poles and zeros) can be informed by complex analysis. The inverse Fourier transform often involves integrating $F(\omega) e^{i\omega x}$, which can sometimes be evaluated using contour integration and residue theory, especially when dealing with rational functions of $\omega$.

---
