---
title: "Transforms of Derivative"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462c9a"
status: "completed"
scrapedAt: "2026-05-20T17:50:36.542Z"
---
## Mathematics for Electrical Science and Physical Science – 3

### Module 1: Fourier Integral

#### Topic: Transforms of Derivatives

**Learning Outcomes:**

*   Understand the relationship between the Fourier transform of a function and the Fourier transform of its derivatives.
*   Apply the properties of Fourier transforms to differentiate and integrate functions.
*   Solve differential equations using Fourier transforms.

**Course Outcomes Addressed:**

*   **CO1:** Determine the Fourier transforms of functions and apply them to solve problems arising in engineering. (Knowledge Level: K3) - This topic directly contributes to applying Fourier transforms to solve problems, specifically those involving derivatives and differential equations.

---

### 1. Introduction to Fourier Transforms and Derivatives

The Fourier Integral is a generalization of the Fourier Series to functions defined over an infinite interval. It allows us to represent a function as a superposition of sinusoidal components of all frequencies. This topic focuses on a crucial property of Fourier Transforms: how the transform of a function relates to the transform of its derivatives. This property is fundamental for solving differential equations that frequently appear in electrical circuits, signal processing, and physical systems.

**Key Concept:** The differentiation in the time/spatial domain corresponds to multiplication by a factor involving the frequency variable ($\omega$) in the frequency domain.

---

### 2. Fourier Transform of the First Derivative

Let $f(t)$ be a function and its Fourier transform be denoted by $F(\omega)$ or $\mathcal{F}\{f(t)\}(\omega)$. The Fourier transform is defined as:

$$F(\omega) = \mathcal{F}\{f(t)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$

Consider the Fourier transform of the first derivative of $f(t)$, denoted by $f'(t)$:

$$ \mathcal{F}\{f'(t)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f'(t) e^{-i\omega t} dt $$

We can evaluate this integral using integration by parts. Let $u = e^{-i\omega t}$ and $dv = f'(t) dt$. Then $du = -i\omega e^{-i\omega t} dt$ and $v = f(t)$.

Applying the integration by parts formula $\int u \, dv = uv - \int v \, du$:

$$ \mathcal{F}\{f'(t)\} = \left[ f(t) e^{-i\omega t} \right]_{-\infty}^{\infty} - \int_{-\infty}^{\infty} f(t) (-i\omega e^{-i\omega t}) dt $$

**Assumption:** For the Fourier transform to exist, we assume that $f(t) \to 0$ as $|t| \to \infty$. This implies that the boundary term $\left[ f(t) e^{-i\omega t} \right]_{-\infty}^{\infty}$ is zero.

$$ \mathcal{F}\{f'(t)\} = 0 - \int_{-\infty}^{\infty} f(t) (-i\omega e^{-i\omega t}) dt $$

$$ \mathcal{F}\{f'(t)\} = i\omega \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt $$

Since $F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$, we can write the integral part as $\sqrt{2\pi} F(\omega)$.

$$ \mathcal{F}\{f'(t)\} = i\omega (\sqrt{2\pi} F(\omega)) $$

Therefore, the Fourier transform of the first derivative of a function $f(t)$ is:

$$ \mathcal{F}\{f'(t)\} = i\omega F(\omega) $$

**Important Point:** This property holds if $f(t)$ and $f'(t)$ satisfy the conditions for the existence of their Fourier transforms and the boundary term vanishes.

---

### 3. Fourier Transform of Higher-Order Derivatives

We can generalize the property for higher-order derivatives.

**Second Derivative:**
Consider the Fourier transform of the second derivative, $f''(t)$:

$$ \mathcal{F}\{f''(t)\} = \mathcal{F}\{(f'(t))'\} $$

Using the property for the first derivative on $f'(t)$:

$$ \mathcal{F}\{f''(t)\} = i\omega \mathcal{F}\{f'(t)\} $$

Substituting $\mathcal{F}\{f'(t)\} = i\omega F(\omega)$:

$$ \mathcal{F}\{f''(t)\} = i\omega (i\omega F(\omega)) = (i\omega)^2 F(\omega) = -\omega^2 F(\omega) $$

**Third Derivative:**
Similarly, for the third derivative, $f'''(t)$:

$$ \mathcal{F}\{f'''(t)\} = \mathcal{F}\{(f''(t))'\} = i\omega \mathcal{F}\{f''(t)\} $$

Substituting $\mathcal{F}\{f''(t)\} = -\omega^2 F(\omega)$:

$$ \mathcal{F}\{f'''(t)\} = i\omega (-\omega^2 F(\omega)) = (i\omega)^3 F(\omega) = -i\omega^3 F(\omega) $$

**Generalization for the n-th Derivative:**
By induction, we can show that the Fourier transform of the $n$-th derivative of $f(t)$ is:

$$ \mathcal{F}\{f^{(n)}(t)\} = (i\omega)^n F(\omega) $$

where $f^{(n)}(t)$ denotes the $n$-th derivative of $f(t)$ with respect to $t$.

**Conditions for Existence:**
The existence of the Fourier transform of $f^{(n)}(t)$ requires that $f^{(n)}(t)$ is absolutely integrable, i.e., $\int_{-\infty}^{\infty} |f^{(n)}(t)| dt < \infty$. This typically implies that $f(t)$ and its derivatives up to order $n-1$ tend to zero as $|t| \to \infty$.

---

### 4. Applications in Solving Differential Equations

One of the most significant applications of Fourier transforms is solving linear ordinary differential equations (ODEs) with constant coefficients. The property of transforming derivatives allows us to convert a differential equation in the time domain into an algebraic equation in the frequency domain.

Consider a general linear ODE with constant coefficients:

$$ a_n \frac{d^n y(t)}{dt^n} + a_{n-1} \frac{d^{n-1} y(t)}{dt^{n-1}} + \dots + a_1 \frac{dy(t)}{dt} + a_0 y(t) = g(t) $$

where $a_i$ are constants and $g(t)$ is the forcing function.

Taking the Fourier transform of both sides:

$$ \mathcal{F}\left\{ a_n \frac{d^n y(t)}{dt^n} + \dots + a_0 y(t) \right\} = \mathcal{F}\{g(t)\} $$

Using the linearity of the Fourier transform and the derivative property:

$$ a_n \mathcal{F}\left\{\frac{d^n y(t)}{dt^n}\right\} + \dots + a_0 \mathcal{F}\{y(t)\} = G(\omega) $$

$$ a_n (i\omega)^n Y(\omega) + \dots + a_0 Y(\omega) = G(\omega) $$

where $Y(\omega) = \mathcal{F}\{y(t)\}$ and $G(\omega) = \mathcal{F}\{g(t)\}$.

This can be written as:

$$ [a_n (i\omega)^n + a_{n-1} (i\omega)^{n-1} + \dots + a_1 (i\omega) + a_0] Y(\omega) = G(\omega) $$

This is an algebraic equation for $Y(\omega)$. We can solve for $Y(\omega)$:

$$ Y(\omega) = \frac{G(\omega)}{a_n (i\omega)^n + a_{n-1} (i\omega)^{n-1} + \dots + a_1 (i\omega) + a_0} $$

Let $H(\omega) = \frac{1}{a_n (i\omega)^n + a_{n-1} (i\omega)^{n-1} + \dots + a_1 (i\omega) + a_0}$. Then:

$$ Y(\omega) = H(\omega) G(\omega) $$

This means that the Fourier transform of the solution $y(t)$ is the product of the Fourier transform of the forcing function $g(t)$ and the frequency response $H(\omega)$ of the system.

To find the solution $y(t)$, we need to compute the inverse Fourier transform of $Y(\omega)$:

$$ y(t) = \mathcal{F}^{-1}\{Y(\omega)\} = \mathcal{F}^{-1}\{H(\omega) G(\omega)\} $$

The inverse Fourier transform of a product of two transforms is the convolution of the functions in the time domain.

$$ y(t) = (h * g)(t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} h(\tau) g(t-\tau) d\tau $$

where $h(t) = \mathcal{F}^{-1}\{H(\omega)\}$.

**Initial Conditions:**
The standard Fourier transform method presented above is most directly applicable to ODEs where boundary conditions at infinity are assumed (implied by the existence of the Fourier transform of the solution and forcing function). For ODEs with initial conditions (e.g., $y(0), y'(0), \dots$), the standard Fourier transform needs to be modified, or the Laplace transform is often more convenient. However, if the function and its derivatives can be extended to satisfy conditions at infinity, the Fourier transform approach can be used.

*   **Kreyszig, 10th Ed., Chapter 11 (Fourier Integrals):** Section 11.5 discusses the application of Fourier transforms to solving differential equations, particularly focusing on the conversion of ODEs into algebraic equations.

---

### 5. Examples

**Example 1: Transforming a derivative**

Let $f(t) = e^{-at} u(t)$, where $a > 0$ and $u(t)$ is the unit step function.
The Fourier transform of $f(t)$ is $F(\omega) = \frac{1}{a + i\omega}$.

Now, let's find the Fourier transform of $f'(t)$:
$$ f'(t) = \frac{d}{dt} (e^{-at} u(t)) = -a e^{-at} u(t) + e^{-at} \delta(t) $$
Using the property $\mathcal{F}\{f'(t)\} = i\omega F(\omega)$:
$$ \mathcal{F}\{f'(t)\} = i\omega \left( \frac{1}{a + i\omega} \right) = \frac{i\omega}{a + i\omega} $$

Let's verify this by transforming $f'(t)$ directly:
$$ \mathcal{F}\{f'(t)\} = \mathcal{F}\{-a e^{-at} u(t) + e^{-at} \delta(t)\} $$
$$ \mathcal{F}\{f'(t)\} = -a \mathcal{F}\{e^{-at} u(t)\} + \mathcal{F}\{e^{-at} \delta(t)\} $$
We know $\mathcal{F}\{e^{-at} u(t)\} = \frac{1}{a + i\omega}$.
For the second term, $\mathcal{F}\{e^{-at} \delta(t)\}$, since $\delta(t)$ is non-zero only at $t=0$, and $e^{-at}$ evaluated at $t=0$ is $e^0 = 1$, we have:
$$ \mathcal{F}\{e^{-at} \delta(t)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-at} \delta(t) e^{-i\omega t} dt = \frac{1}{\sqrt{2\pi}} e^{-a(0)} e^{-i\omega (0)} = \frac{1}{\sqrt{2\pi}} $$
So,
$$ \mathcal{F}\{f'(t)\} = -a \left(\frac{1}{a + i\omega}\right) + \frac{1}{\sqrt{2\pi}} $$
This doesn't match $\frac{i\omega}{a + i\omega}$. Let's re-evaluate the direct transform of $f'(t)$ assuming the distributional derivative.

A more common approach is to consider the derivative of the continuous part, assuming the jump at $t=0$ is handled appropriately.
If we consider $f(t) = e^{-at} u(t)$, its Fourier transform is $F(\omega) = \frac{1}{a+i\omega}$.
The derivative $f'(t)$ can be thought of as $-ae^{-at}u(t) + \delta(t)$ assuming the standard definition of derivative for causal signals where the jump at $t=0$ is captured by the delta function.
$$ \mathcal{F}\{f'(t)\} = \mathcal{F}\{-a e^{-at} u(t) + \delta(t)\} $$
$$ = -a \mathcal{F}\{e^{-at} u(t)\} + \mathcal{F}\{\delta(t)\} $$
$$ = -a \left(\frac{1}{a+i\omega}\right) + 1 $$
$$ = \frac{-a + a+i\omega}{a+i\omega} = \frac{i\omega}{a+i\omega} $$
This matches the property $\mathcal{F}\{f'(t)\} = i\omega F(\omega)$.

*   **Reference:** This type of example is typical in many signal processing and engineering mathematics texts. Kreyszig's book would cover such derivations.

**Example 2: Solving an ODE using Fourier Transforms**

Consider the ODE:
$$ \frac{dy}{dt} + 2y(t) = e^{-3t} u(t) $$
with the implicit assumption that $y(t) \to 0$ as $|t| \to \infty$.

Let $Y(\omega) = \mathcal{F}\{y(t)\}$ and $G(\omega) = \mathcal{F}\{e^{-3t} u(t)\}$.
We know $\mathcal{F}\{e^{-at} u(t)\} = \frac{1}{a+i\omega}$. So, $G(\omega) = \frac{1}{3+i\omega}$.

Taking the Fourier transform of the ODE:
$$ \mathcal{F}\left\{\frac{dy}{dt}\right\} + 2 \mathcal{F}\{y(t)\} = G(\omega) $$
Using the derivative property:
$$ i\omega Y(\omega) + 2Y(\omega) = G(\omega) $$
Factor out $Y(\omega)$:
$$ (i\omega + 2) Y(\omega) = G(\omega) $$
Solve for $Y(\omega)$:
$$ Y(\omega) = \frac{G(\omega)}{2 + i\omega} $$
Substitute $G(\omega)$:
$$ Y(\omega) = \frac{\frac{1}{3 + i\omega}}{2 + i\omega} = \frac{1}{(2 + i\omega)(3 + i\omega)} $$

Now, we need to find the inverse Fourier transform of $Y(\omega)$. We can use partial fraction decomposition for $Y(\omega)$:
$$ Y(\omega) = \frac{A}{2 + i\omega} + \frac{B}{3 + i\omega} $$
$$ 1 = A(3 + i\omega) + B(2 + i\omega) $$
Setting $i\omega = -2$: $1 = A(3 - 2) \implies A = 1$.
Setting $i\omega = -3$: $1 = B(2 - 3) \implies B = -1$.

So,
$$ Y(\omega) = \frac{1}{2 + i\omega} - \frac{1}{3 + i\omega} $$

Now, find the inverse Fourier transforms. We use the property $\mathcal{F}^{-1}\left\{\frac{1}{a + i\omega}\right\} = e^{-at} u(t)$.
$$ y(t) = \mathcal{F}^{-1}\{Y(\omega)\} = \mathcal{F}^{-1}\left\{\frac{1}{2 + i\omega}\right\} - \mathcal{F}^{-1}\left\{\frac{1}{3 + i\omega}\right\} $$
$$ y(t) = e^{-2t} u(t) - e^{-3t} u(t) $$

**Verification:**
Let's check if this solution satisfies the ODE.
$y'(t) = -2e^{-2t} u(t) + e^{-2t}\delta(t) - (-3e^{-3t} u(t) + e^{-3t}\delta(t))$
Since $\delta(t)$ is zero for $t>0$, we consider the continuous parts for $t>0$.
$y'(t) = -2e^{-2t} u(t) + 3e^{-3t} u(t)$

Substituting into the ODE:
$y'(t) + 2y(t) = (-2e^{-2t} u(t) + 3e^{-3t} u(t)) + 2(e^{-2t} u(t) - e^{-3t} u(t))$
$= -2e^{-2t} u(t) + 3e^{-3t} u(t) + 2e^{-2t} u(t) - 2e^{-3t} u(t)$
$= (-2+2)e^{-2t} u(t) + (3-2)e^{-3t} u(t)$
$= e^{-3t} u(t)$
This matches the right-hand side of the ODE.

---

### 6. Transforms of Integrals

The Fourier transform of an integral is related to the transform of the function and division by $i\omega$.

Let $y(t) = \int_{-\infty}^{t} f(\tau) d\tau$.
Then $y'(t) = f(t)$ (assuming continuity).

Taking the Fourier transform of $y'(t)$:
$$ \mathcal{F}\{y'(t)\} = i\omega Y(\omega) $$
Since $y'(t) = f(t)$, we have $\mathcal{F}\{f(t)\} = F(\omega)$.
So,
$$ F(\omega) = i\omega Y(\omega) $$

Solving for $Y(\omega)$:
$$ Y(\omega) = \frac{F(\omega)}{i\omega} $$

Therefore,
$$ \mathcal{F}\left\{\int_{-\infty}^{t} f(\tau) d\tau\right\} = \frac{F(\omega)}{i\omega} $$

**Important Note:** This property requires $f(t)$ to be such that the integral $\int_{-\infty}^{t} f(\tau) d\tau$ exists and its derivative $f(t)$ satisfies the conditions for its Fourier transform. Specifically, for the Fourier transform of the integral to exist, $\int_{-\infty}^{\infty} |\int_{-\infty}^{t} f(\tau) d\tau| dt < \infty$.

*   **Reference:** This property is also discussed in standard texts like Kreyszig. It's analogous to the Laplace transform property for integration.

---

### 7. Practice Questions and Exercises

**Question 1:**
Find the Fourier transform of the derivative of the function $f(t) = \text{rect}(t/T)$, where $\text{rect}(u)$ is the rectangular pulse function defined as:
$$ \text{rect}(u) = \begin{cases} 1 & \text{if } |u| \le 1/2 \\ 0 & \text{if } |u| > 1/2 \end{cases} $$
Assume $T > 0$.

**Answer 1:**
The function is $f(t) = \text{rect}(t/T)$.
$$ f(t) = \begin{cases} 1 & \text{if } |t/T| \le 1/2 \implies |t| \le T/2 \\ 0 & \text{if } |t/T| > 1/2 \implies |t| > T/2 \end{cases} $$
The Fourier transform of $\text{rect}(t/T)$ is $F(\omega) = T \text{sinc}(\omega T/2)$, where $\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$ (or sometimes defined as $\frac{\sin(x)}{x}$). Let's use the definition $\text{sinc}(x) = \frac{\sin(x)}{x}$ for consistency with Fourier transform definitions that involve $e^{-i\omega t}$. If $F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$, then $F(\omega) = T \text{sinc}(\omega T / 2)$ or $T \text{Sa}(\omega T / 2)$ where $\text{Sa}(x) = \frac{\sin(x)}{x}$.
A common Fourier transform pair is $\mathcal{F}\{\text{rect}(t/T)\} = T \frac{\sin(\omega T/2)}{\pi \omega/2}$.

Using the property $\mathcal{F}\{f'(t)\} = i\omega F(\omega)$:
$f'(t)$ is non-zero only at $t = -T/2$ and $t = T/2$, where it corresponds to Dirac delta functions.
$f'(t) = \delta(t + T/2) - \delta(t - T/2)$.
The Fourier transform of $\delta(t-a)$ is $e^{-i\omega a}$.
So, $\mathcal{F}\{f'(t)\} = \mathcal{F}\{\delta(t + T/2) - \delta(t - T/2)\} = e^{i\omega T/2} - e^{-i\omega T/2} = 2i \sin(\omega T/2)$.

Now, let's use the property:
$\mathcal{F}\{f'(t)\} = i\omega F(\omega) = i\omega \left( T \frac{\sin(\omega T/2)}{\pi \omega/2} \right)$ (using $\text{sinc}(x) = \sin(\pi x)/(\pi x)$ definition, so $F(\omega) = T \text{sinc}(\omega T/2\pi)$)
Let's use the definition from Fourier Transform tables that often relate rectangular function and sinc function.
If $f(t) = \text{rect}(t/T)$, its FT is $\frac{T \sin(\omega T/2)}{\omega/2}$.
So, $\mathcal{F}\{f'(t)\} = i\omega \left( \frac{T \sin(\omega T/2)}{\omega/2} \right) = iT \frac{\sin(\omega T/2)}{\omega/2}$.

There might be a slight difference in the constant factor $\frac{1}{\sqrt{2\pi}}$ in the FT definition. If we use $\mathcal{F}\{f(t)\} = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$:
$F(\omega) = \int_{-T/2}^{T/2} 1 \cdot e^{-i\omega t} dt = \left[ \frac{e^{-i\omega t}}{-i\omega} \right]_{-T/2}^{T/2} = \frac{e^{-i\omega T/2} - e^{i\omega T/2}}{-i\omega} = \frac{2i \sin(\omega T/2)}{-i\omega} = \frac{2 \sin(\omega T/2)}{\omega}$.
Then $\mathcal{F}\{f'(t)\} = i\omega F(\omega) = i\omega \frac{2 \sin(\omega T/2)}{\omega} = 2i \sin(\omega T/2)$.
This matches the direct transform of the derivatives.

**Question 2:**
Solve the following differential equation using Fourier transforms:
$$ \frac{d^2 y(t)}{dt^2} - 4y(t) = e^{-t} u(t) $$
Assume $y(t) \to 0$ and $y'(t) \to 0$ as $|t| \to \infty$.

**Answer 2:**
Let $Y(\omega) = \mathcal{F}\{y(t)\}$ and $G(\omega) = \mathcal{F}\{e^{-t} u(t)\}$.
We know $G(\omega) = \frac{1}{1 + i\omega}$.

Taking the Fourier transform of the ODE:
$$ \mathcal{F}\left\{\frac{d^2 y(t)}{dt^2}\right\} - 4 \mathcal{F}\{y(t)\} = G(\omega) $$
Using the derivative property $\mathcal{F}\{y''(t)\} = (i\omega)^2 Y(\omega) = -\omega^2 Y(\omega)$:
$$ -\omega^2 Y(\omega) - 4Y(\omega) = G(\omega) $$
$$ (-\omega^2 - 4) Y(\omega) = G(\omega) $$
$$ Y(\omega) = \frac{G(\omega)}{-\omega^2 - 4} = \frac{1}{(1 + i\omega)(-\omega^2 - 4)} $$
$$ Y(\omega) = \frac{-1}{(1 + i\omega)(\omega^2 + 4)} $$

For partial fraction decomposition:
$$ Y(\omega) = \frac{A}{1 + i\omega} + \frac{B\omega + C}{\omega^2 + 4} $$
$$ -1 = A(\omega^2 + 4) + (B\omega + C)(1 + i\omega) $$

Set $i\omega = -1$ (i.e., $\omega = i$):
$-1 = A(i^2 + 4) = A(-1 + 4) = 3A \implies A = -1/3$.

Now, expand and equate coefficients. Let's rewrite $1+i\omega$ as $i(\omega - i)$.
It's easier to work with $i\omega$ as a variable in the denominator for the transform.
Let $p = i\omega$. Then the equation for $Y(\omega)$ becomes:
$(p^2 - 4) Y(\omega) = G(\omega)$
$Y(\omega) = \frac{G(\omega)}{p^2 - 4}$
$Y(\omega) = \frac{1}{(1+p)(p^2-4)} = \frac{1}{(1+p)(p-2)(p+2)}$

Using partial fractions for $p$:
$$ \frac{1}{(1+p)(p-2)(p+2)} = \frac{A}{1+p} + \frac{B}{p-2} + \frac{C}{p+2} $$
$$ 1 = A(p-2)(p+2) + B(1+p)(p+2) + C(1+p)(p-2) $$

Set $p = -1$: $1 = A(-1-2)(-1+2) = A(-3)(1) = -3A \implies A = -1/3$.
Set $p = 2$: $1 = B(1+2)(2+2) = B(3)(4) = 12B \implies B = 1/12$.
Set $p = -2$: $1 = C(1-2)(-2-2) = C(-1)(-4) = 4C \implies C = 1/4$.

So,
$$ Y(\omega) = \frac{-1/3}{1+i\omega} + \frac{1/12}{i\omega - 2} + \frac{1/4}{i\omega + 2} $$
$$ Y(\omega) = \frac{-1/3}{1+i\omega} - \frac{1/12}{2-i\omega} + \frac{1/4}{2+i\omega} $$

Now, find the inverse Fourier transforms:
$\mathcal{F}^{-1}\left\{\frac{1}{a+i\omega}\right\} = e^{-at}u(t)$
$\mathcal{F}^{-1}\left\{\frac{1}{a-i\omega}\right\} = e^{at}u(t)$ (This is often derived from the definition of the inverse transform or using properties).

$y(t) = \mathcal{F}^{-1}\{Y(\omega)\}$
$y(t) = -\frac{1}{3} e^{-t} u(t) - \frac{1}{12} e^{2t} u(-t) + \frac{1}{4} e^{-2t} u(t)$

Let's recheck the signs and common FT pairs.
The Fourier transform of $e^{-at}$ is $\frac{2a}{a^2+\omega^2}$.
The Fourier transform of $e^{at}$ is $\frac{2a}{a^2-\omega^2}$.
The Fourier transform of $e^{-at}u(t)$ is $\frac{1}{a+i\omega}$.
The Fourier transform of $e^{at}u(-t)$ is $\frac{1}{a-i\omega}$.

So,
$$ y(t) = -\frac{1}{3} \mathcal{F}^{-1}\left\{\frac{1}{1+i\omega}\right\} - \frac{1}{12} \mathcal{F}^{-1}\left\{\frac{1}{i\omega - 2}\right\} + \frac{1}{4} \mathcal{F}^{-1}\left\{\frac{1}{i\omega + 2}\right\} $$
$$ y(t) = -\frac{1}{3} e^{-t} u(t) - \frac{1}{12} e^{2t} u(-t) + \frac{1}{4} e^{-2t} u(t) $$

This is a valid solution. The $u(-t)$ part arises from terms that might not satisfy the decay at infinity if we were strictly dealing with Fourier transforms without considering distributional properties or initial conditions that restrict the domain. For signals considered over all time, the decay at $+\infty$ and $-\infty$ is handled.

A common way to present solutions to ODEs using Fourier transforms implies causal solutions or solutions that decay appropriately at infinity. If we assume $y(t)$ is causal ($y(t)=0$ for $t<0$), then the $e^{2t}u(-t)$ term would be zero. However, the problem statement doesn't explicitly state causality.

Let's consider the possibility of dealing with $e^{-at}$ vs $e^{at}$.
The transform of $e^{-2t}$ is $\frac{1}{2+i\omega}$ and the transform of $e^{2t}$ is $\frac{1}{2-i\omega}$.
Our expression for $Y(\omega)$ is:
$Y(\omega) = \frac{-1}{(1 + i\omega)(4 - (-\omega^2))} = \frac{-1}{(1 + i\omega)(2 - i\omega)(2 + i\omega)}$

Let's decompose $Y(\omega) = \frac{A}{1+i\omega} + \frac{B}{2-i\omega} + \frac{C}{2+i\omega}$.
$-1 = A(2-i\omega)(2+i\omega) + B(1+i\omega)(2+i\omega) + C(1+i\omega)(2-i\omega)$

Set $i\omega = -1$: $-1 = A(2-(-1))(2+(-1)) = A(3)(1) = 3A \implies A = -1/3$.
Set $i\omega = 2$: $-1 = B(1+2)(2+2) = B(3)(4) = 12B \implies B = -1/12$.
Set $i\omega = -2$: $-1 = C(1-2)(2-(-2)) = C(-1)(4) = -4C \implies C = 1/4$.

So,
$$ Y(\omega) = -\frac{1}{3} \frac{1}{1+i\omega} - \frac{1}{12} \frac{1}{2-i\omega} + \frac{1}{4} \frac{1}{2+i\omega} $$
Taking the inverse transform:
$$ y(t) = -\frac{1}{3} e^{-t} u(t) - \frac{1}{12} e^{2t} u(-t) + \frac{1}{4} e^{-2t} u(t) $$

This is the correct form of the solution. The $u(-t)$ term accounts for the solution's behavior for $t<0$ which is necessary for the Fourier transform to be defined globally.

---

### 8. Important Points to Remember

*   **Derivative Property:** $\mathcal{F}\{f^{(n)}(t)\} = (i\omega)^n F(\omega)$. This is a cornerstone for solving ODEs.
*   **Integration Property:** $\mathcal{F}\left\{\int_{-\infty}^{t} f(\tau) d\tau\right\} = \frac{F(\omega)}{i\omega}$.
*   **ODE Transformation:** Linear ODEs with constant coefficients transform into algebraic equations in the frequency domain.
*   **Solving ODEs:** The process involves:
    1.  Taking the Fourier transform of the ODE.
    2.  Solving for $Y(\omega)$.
    3.  Finding the inverse Fourier transform of $Y(\omega)$.
*   **Conditions for Existence:** The properties hold under the assumption that the function and its derivatives satisfy conditions for the existence of their Fourier transforms, particularly decay at infinity.
*   **Limitations with Initial Conditions:** Standard Fourier transforms are better suited for problems with boundary conditions at infinity. For initial value problems (IVPs), Laplace transforms are generally more direct. However, by carefully considering the function's behavior for $t<0$ and using appropriate transform pairs (like $e^{at}u(-t)$), Fourier transforms can also be applied.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 9. References

*   **Kreyszig, Erwin. *Advanced Engineering Mathematics*. 10th ed., John Wiley & Sons, 2016.** (Sections on Fourier Integral, properties of Fourier transforms, application to differential equations).
*   **Ramana, B. V. *Higher Engineering Mathematics*. 39th ed., McGraw-Hill Education, 2023.** (Similar coverage of Fourier transforms and their applications).
*   **Grewal, B.S. *Higher Engineering Mathematics*. 44th ed., Khanna Publishers, 2018.** (Also provides comprehensive coverage of Fourier analysis and its applications).

---