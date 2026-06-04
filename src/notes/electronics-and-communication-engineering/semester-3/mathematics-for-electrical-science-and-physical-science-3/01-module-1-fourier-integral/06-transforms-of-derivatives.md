---
title: "Transforms of Derivatives"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe254"
status: "completed"
scrapedAt: "2026-05-23T17:46:56.449Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 1: Fourier Integral

### Topic: Transforms of Derivatives

**Learning Outcomes:**

*   Understand the relationship between the Fourier transform of a function and the Fourier transforms of its derivatives.
*   Derive and apply formulas for the Fourier transforms of derivatives.
*   Utilize these formulas to solve differential equations using Fourier transforms.

**Course Outcomes Alignment:**

*   **CO1:** Determine the Fourier transforms of functions and apply them to solve problems arising in engineering. (Knowledge Level: K3) - This topic directly addresses this outcome by providing tools to transform differential equations into algebraic ones, simplifying their solution.

---

### 1. Introduction to Fourier Transforms

Before diving into the transforms of derivatives, let's recap the definition of the Fourier Transform. For a function $f(t)$, its Fourier Transform $\mathcal{F}\{f(t)\}$ is denoted by $F(\omega)$ or $\hat{f}(\omega)$ and is defined as:

$$
\mathcal{F}\{f(t)\} = F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt
$$

The inverse Fourier Transform allows us to recover the original function from its transform:

$$
\mathcal{F}^{-1}\{F(\omega)\} = f(t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega
$$

*(Refer to Kreyszig, Chapter 10: Fourier Integrals, for a comprehensive review of Fourier transforms and their properties.)*

**Important Point to Remember:** The factor $1/\sqrt{2\pi}$ can vary depending on the convention used. The definition above is a common one. Other conventions might use $1$ or $1/2\pi$ in the forward transform and adjust the inverse transform accordingly.

---

### 2. Fourier Transform of the First Derivative

Let's consider the Fourier transform of the first derivative of a function $f(t)$, denoted by $f'(t)$. We can derive this by applying integration by parts to the Fourier transform definition.

Assume $f(t)$ and $f'(t)$ are such that the Fourier transform exists (e.g., they are absolutely integrable and $f(t) \to 0$ as $|t| \to \infty$).

$$
\mathcal{F}\{f'(t)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f'(t) e^{-i\omega t} dt
$$

Using integration by parts with $u = e^{-i\omega t}$ and $dv = f'(t) dt$, we have $du = -i\omega e^{-i\omega t} dt$ and $v = f(t)$:

$$
\mathcal{F}\{f'(t)\} = \frac{1}{\sqrt{2\pi}} \left[ f(t) e^{-i\omega t} \right]_{-\infty}^{\infty} - \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) (-i\omega e^{-i\omega t}) dt
$$

Since we assume $f(t) \to 0$ as $|t| \to \infty$, the boundary term $\left[ f(t) e^{-i\omega t} \right]_{-\infty}^{\infty}$ becomes zero.

$$
\mathcal{F}\{f'(t)\} = - \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) (-i\omega e^{-i\omega t}) dt
$$

$$
\mathcal{F}\{f'(t)\} = i\omega \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt \right)
$$

The expression in the parenthesis is the Fourier transform of $f(t)$, i.e., $F(\omega)$. Therefore:

$$
\mathcal{F}\{f'(t)\} = i\omega F(\omega)
$$

This is a fundamental property. It states that the Fourier transform of the derivative of a function is the Fourier transform of the function multiplied by $i\omega$.

**Generalization for higher-order derivatives:**

By repeatedly applying this property, we can find the Fourier transform of the $n$-th derivative:

$$
\mathcal{F}\{f^{(n)}(t)\} = (i\omega)^n F(\omega)
$$

*(This property is crucial and widely discussed in engineering mathematics texts. Refer to B.S. Grewal, Chapter 40: Fourier Transforms, or B.V. Ramana, Chapter 34: Fourier Transforms, for derivations and examples.)*

**Example 2.1:** Find the Fourier transform of $f(t) = e^{-at} u(t)$, where $a > 0$ and $u(t)$ is the unit step function.

We know that $f'(t) = -ae^{-at} u(t) + e^{-at} \delta(t)$. However, using the property is simpler if we already know the transform of $f(t)$.

Let's find the Fourier transform of $f(t) = e^{-at} u(t)$ first.
$$
F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-at} u(t) e^{-i\omega t} dt = \frac{1}{\sqrt{2\pi}} \int_{0}^{\infty} e^{-(a+i\omega)t} dt
$$
$$
F(\omega) = \frac{1}{\sqrt{2\pi}} \left[ \frac{e^{-(a+i\omega)t}}{-(a+i\omega)} \right]_{0}^{\infty} = \frac{1}{\sqrt{2\pi}} \left( 0 - \frac{1}{-(a+i\omega)} \right) = \frac{1}{\sqrt{2\pi}} \frac{1}{a+i\omega}
$$

Now, let's find the Fourier transform of $f'(t)$ using the property.
$f'(t)$ would be a derivative of an exponentially decaying function, which is also exponentially decaying.
$f'(t) = \frac{d}{dt}(e^{-at} u(t)) = -ae^{-at}u(t) + e^{-at}\delta(t)$.

The transform of $f'(t)$ is $(i\omega)F(\omega)$:
$$
\mathcal{F}\{f'(t)\} = i\omega \left( \frac{1}{\sqrt{2\pi}} \frac{1}{a+i\omega} \right) = \frac{i\omega}{\sqrt{2\pi}(a+i\omega)}
$$

*(Note: The Fourier transform of the delta function $\delta(t)$ is $1/\sqrt{2\pi}$. So, $\mathcal{F}\{-ae^{-at}u(t) + e^{-at}\delta(t)\} = -a F(\omega) + \frac{1}{\sqrt{2\pi}}$. This demonstrates that handling the delta function term carefully is important when directly transforming the derivative.)*

---

### 3. Fourier Transform of the First Derivative (with initial conditions)

In practical applications, especially in solving differential equations, we often deal with the derivative of a function that might not vanish at the boundaries, or we need to incorporate initial conditions.

Consider the Fourier transform of $f'(t)$ assuming $f(t)$ might not be zero at $t \to \pm \infty$. The integration by parts yields:

$$
\mathcal{F}\{f'(t)\} = \frac{1}{\sqrt{2\pi}} \left[ f(t) e^{-i\omega t} \right]_{-\infty}^{\infty} + i\omega F(\omega)
$$

If we consider the Fourier transform over a finite interval $[-T, T]$ and then let $T \to \infty$, the boundary terms would involve $f(T)$ and $f(-T)$. However, the standard Fourier transform assumes the function decays sufficiently.

**When dealing with differential equations, especially causal systems, the transform of derivatives is applied directly, and the assumption of $f(t) \to 0$ as $t \to -\infty$ for causal functions is implicitly made.**

---

### 4. Fourier Transform of Integrals

While the topic is "Transforms of Derivatives," it's also relevant to mention the transform of integrals as it's a complementary property.

If $f(t)$ is such that its Fourier Transform $F(\omega)$ exists, and $F(\omega)$ is absolutely integrable (which is often the case for well-behaved functions), then the Fourier transform of the integral of $f(t)$ is given by:

$$
\mathcal{F}\left\{\int_{-\infty}^{t} f(\tau) d\tau\right\} = \frac{F(\omega)}{i\omega} + \frac{1}{i\omega} \frac{1}{\sqrt{2\pi}} f(-\infty)
$$

For causal functions where $f(-\infty) = 0$, this simplifies to:

$$
\mathcal{F}\left\{\int_{-\infty}^{t} f(\tau) d\tau\right\} = \frac{F(\omega)}{i\omega}
$$

*(This property is particularly useful when dealing with differential equations involving integrals or when using the convolution theorem.)*

---

### 5. Application to Differential Equations

The primary application of the transforms of derivatives is to convert linear ordinary differential equations (ODEs) with constant coefficients into algebraic equations in the frequency domain. This significantly simplifies the process of finding solutions, especially for non-homogeneous ODEs.

Consider a general linear ODE:

$$
a_n f^{(n)}(t) + a_{n-1} f^{(n-1)}(t) + \dots + a_1 f'(t) + a_0 f(t) = g(t)
$$

Taking the Fourier transform of both sides:

$$
\mathcal{F}\{a_n f^{(n)}(t) + \dots + a_0 f(t)\} = \mathcal{F}\{g(t)\}
$$

Using the linearity of the Fourier transform and the property of derivatives:

$$
a_n \mathcal{F}\{f^{(n)}(t)\} + \dots + a_0 \mathcal{F}\{f(t)\} = G(\omega)
$$

$$
a_n (i\omega)^n F(\omega) + a_{n-1} (i\omega)^{n-1} F(\omega) + \dots + a_1 (i\omega) F(\omega) + a_0 F(\omega) = G(\omega)
$$

Factoring out $F(\omega)$:

$$
F(\omega) [a_n (i\omega)^n + a_{n-1} (i\omega)^{n-1} + \dots + a_1 (i\omega) + a_0] = G(\omega)
$$

The term in the square brackets is the characteristic polynomial of the ODE, but with $s = i\omega$. Let's call this $P(i\omega)$.

$$
F(\omega) P(i\omega) = G(\omega)
$$

Therefore, the Fourier transform of the solution $f(t)$ is:

$$
F(\omega) = \frac{G(\omega)}{P(i\omega)}
$$

Once $F(\omega)$ is found, the solution $f(t)$ can be obtained by taking the inverse Fourier transform.

**Important Note:** This method is most effective for ODEs with constant coefficients and for problems where the input signal $g(t)$ has a Fourier transform and the system is stable. It typically yields the particular solution or the steady-state response. To incorporate initial conditions, other transform methods like the Laplace transform are often more direct. However, for finding the steady-state response to a sinusoidal input, the Fourier transform is ideal.

*(This application is a core concept in signal processing and control systems. Refer to Kreyszig, Chapter 11: Laplace Transforms, and its relation to Fourier Transforms, for deeper insights into solving ODEs.)*

**Example 5.1:** Solve the differential equation $f'(t) + 2f(t) = e^{-3t} u(t)$ using Fourier transforms, assuming $f(t) \to 0$ as $t \to \infty$.

Let $g(t) = e^{-3t} u(t)$. Its Fourier transform is $G(\omega)$:
$$
G(\omega) = \mathcal{F}\{e^{-3t} u(t)\} = \frac{1}{\sqrt{2\pi}} \frac{1}{3+i\omega}
$$

The differential equation is $f'(t) + 2f(t) = g(t)$.
Taking the Fourier transform of both sides:
$$
\mathcal{F}\{f'(t)\} + 2\mathcal{F}\{f(t)\} = \mathcal{F}\{g(t)\}
$$
$$
i\omega F(\omega) + 2 F(\omega) = G(\omega)
$$
$$
F(\omega) (i\omega + 2) = G(\omega)
$$
$$
F(\omega) = \frac{G(\omega)}{i\omega + 2}
$$
Substitute $G(\omega)$:
$$
F(\omega) = \frac{\frac{1}{\sqrt{2\pi}} \frac{1}{3+i\omega}}{i\omega + 2} = \frac{1}{\sqrt{2\pi}} \frac{1}{(i\omega+2)(i\omega+3)}
$$

To find $f(t)$, we need to perform partial fraction decomposition on the term in the denominator:
$$
\frac{1}{(i\omega+2)(i\omega+3)} = \frac{A}{i\omega+2} + \frac{B}{i\omega+3}
$$
$1 = A(i\omega+3) + B(i\omega+2)$

Set $i\omega = -2$: $1 = A(-2+3) = A \implies A = 1$.
Set $i\omega = -3$: $1 = B(-3+2) = -B \implies B = -1$.

So,
$$
F(\omega) = \frac{1}{\sqrt{2\pi}} \left( \frac{1}{i\omega+2} - \frac{1}{i\omega+3} \right)
$$

Now, we use the inverse Fourier transform property $\mathcal{F}^{-1}\left\{\frac{1}{a+i\omega}\right\} = \sqrt{2\pi} e^{-at} u(t)$.
$$
f(t) = \mathcal{F}^{-1}\{F(\omega)\} = \mathcal{F}^{-1}\left\{\frac{1}{\sqrt{2\pi}} \frac{1}{i\omega+2}\right\} - \mathcal{F}^{-1}\left\{\frac{1}{\sqrt{2\pi}} \frac{1}{i\omega+3}\right\}
$$
$$
f(t) = \frac{1}{\sqrt{2\pi}} \left(\sqrt{2\pi} e^{-2t} u(t)\right) - \frac{1}{\sqrt{2\pi}} \left(\sqrt{2\pi} e^{-3t} u(t)\right)
$$
$$
f(t) = e^{-2t} u(t) - e^{-3t} u(t)
$$
$$
f(t) = (e^{-2t} - e^{-3t}) u(t)
$$

This $f(t)$ is the steady-state solution.

---

### 6. Important Points to Remember

*   **Property of Derivatives:** $\mathcal{F}\{f'(t)\} = i\omega F(\omega)$ and $\mathcal{F}\{f^{(n)}(t)\} = (i\omega)^n F(\omega)$. This is the cornerstone of using Fourier transforms for ODEs.
*   **Conditions for Existence:** For these properties to hold, the function and its derivatives must satisfy certain conditions, typically absolute integrability and vanishing at infinity.
*   **Conversion of ODEs to Algebraic Equations:** The primary benefit of these properties is transforming calculus operations (differentiation, integration) into algebraic operations in the frequency domain.
*   **Constant Coefficients:** The method is most straightforward for linear ODEs with constant coefficients. Time-varying coefficients make this approach much more complex.
*   **Steady-State Analysis:** Fourier transforms are excellent for analyzing the steady-state response of systems to sinusoidal or other periodic/aperiodic inputs.
*   **Initial Conditions:** While Fourier transforms can solve ODEs, incorporating initial conditions directly is often easier with Laplace transforms. However, understanding the underlying transformation of derivatives is fundamental to both.

---

### 7. Practice Questions

**Question 1:** Find the Fourier transform of $f''(t)$ given that $\mathcal{F}\{f(t)\} = F(\omega)$.

**Answer 1:**
Using the property $\mathcal{F}\{f^{(n)}(t)\} = (i\omega)^n F(\omega)$ with $n=2$, we get:
$\mathcal{F}\{f''(t)\} = (i\omega)^2 F(\omega) = -\omega^2 F(\omega)$.

**Question 2:** A system's response $y(t)$ to an input $x(t)$ is described by the ODE: $y''(t) + 4y'(t) + 3y(t) = x(t)$. If $x(t) = e^{-2t} u(t)$, find the Fourier transform of the steady-state response $Y(\omega)$.

**Answer 2:**
Let $X(\omega) = \mathcal{F}\{x(t)\} = \mathcal{F}\{e^{-2t} u(t)\} = \frac{1}{\sqrt{2\pi}(2+i\omega)}$.
Taking the Fourier transform of the ODE:
$\mathcal{F}\{y''(t)\} + 4\mathcal{F}\{y'(t)\} + 3\mathcal{F}\{y(t)\} = \mathcal{F}\{x(t)\}$
$(i\omega)^2 Y(\omega) + 4(i\omega) Y(\omega) + 3 Y(\omega) = X(\omega)$
$Y(\omega) [-\omega^2 + 4i\omega + 3] = X(\omega)$
$Y(\omega) = \frac{X(\omega)}{3 + 4i\omega - \omega^2}$
$Y(\omega) = \frac{\frac{1}{\sqrt{2\pi}(2+i\omega)}}{3 + 4i\omega - \omega^2}$
$Y(\omega) = \frac{1}{\sqrt{2\pi}(2+i\omega)(3 + 4i\omega - \omega^2)}$

**Question 3:** If $f(t) = t e^{-at} u(t)$ for $a>0$, find $\mathcal{F}\{f'(t)\}$.

**Answer 3:**
First, find $F(\omega) = \mathcal{F}\{t e^{-at} u(t)\}$. We know $\mathcal{F}\{t f(t)\} = i \frac{d}{d\omega} F(\omega)$.
Let $h(t) = e^{-at} u(t)$. Then $\mathcal{F}\{h(t)\} = H(\omega) = \frac{1}{\sqrt{2\pi}(a+i\omega)}$.
So, $F(\omega) = \mathcal{F}\{t h(t)\} = i \frac{d}{d\omega} \left(\frac{1}{\sqrt{2\pi}(a+i\omega)}\right)$
$F(\omega) = \frac{i}{\sqrt{2\pi}} \frac{-1}{(a+i\omega)^2} (-i) = \frac{-i}{\sqrt{2\pi}(a+i\omega)^2}$.

Now, $\mathcal{F}\{f'(t)\} = i\omega F(\omega)$:
$\mathcal{F}\{f'(t)\} = i\omega \left(\frac{-i}{\sqrt{2\pi}(a+i\omega)^2}\right) = \frac{\omega}{\sqrt{2\pi}(a+i\omega)^2}$.

Alternatively, we can compute $f'(t)$ directly:
$f'(t) = \frac{d}{dt} (t e^{-at} u(t)) = (e^{-at} - at e^{-at}) u(t) + t e^{-at} \delta(t)$
Since $t \delta(t) = 0$, the $\delta(t)$ term is zero.
$f'(t) = (1-at) e^{-at} u(t)$.
Now, find $\mathcal{F}\{f'(t)\}$:
$\mathcal{F}\{f'(t)\} = \frac{1}{\sqrt{2\pi}} \int_{0}^{\infty} (1-at) e^{-at} e^{-i\omega t} dt$
$\mathcal{F}\{f'(t)\} = \frac{1}{\sqrt{2\pi}} \int_{0}^{\infty} (e^{-at} - at e^{-(a+i\omega)t}) dt$
$\mathcal{F}\{f'(t)\} = \frac{1}{\sqrt{2\pi}} \left[ \frac{e^{-at}}{-a} \right]_0^\infty - \frac{a}{\sqrt{2\pi}} \int_{0}^{\infty} t e^{-(a+i\omega)t} dt$
The first term is $0 - \frac{1}{-a} = \frac{1}{a}$.
The integral $\int_{0}^{\infty} t e^{-st} dt = \frac{1}{s^2}$ for $\text{Re}(s)>0$. Here $s = a+i\omega$.
So, $\int_{0}^{\infty} t e^{-(a+i\omega)t} dt = \frac{1}{(a+i\omega)^2}$.
$\mathcal{F}\{f'(t)\} = \frac{1}{\sqrt{2\pi}} \left( \frac{1}{a} - a \frac{1}{(a+i\omega)^2} \right)$
This doesn't seem to match directly. Let's re-evaluate the original approach.

Revisit $F(\omega) = \frac{-i}{\sqrt{2\pi}(a+i\omega)^2}$.
Then $i\omega F(\omega) = i\omega \frac{-i}{\sqrt{2\pi}(a+i\omega)^2} = \frac{\omega}{\sqrt{2\pi}(a+i\omega)^2}$. This is correct.

Let's check the transform of $(1-at) e^{-at} u(t)$ directly:
$\mathcal{F}\{(1-at)e^{-at}u(t)\} = \mathcal{F}\{e^{-at}u(t)\} - a\mathcal{F}\{t e^{-at}u(t)\}$
$= \frac{1}{\sqrt{2\pi}(a+i\omega)} - a \left(\frac{-i}{\sqrt{2\pi}(a+i\omega)^2}\right)$
$= \frac{1}{\sqrt{2\pi}} \left( \frac{a+i\omega}{(a+i\omega)^2} + \frac{ai}{(a+i\omega)^2} \right)$
$= \frac{1}{\sqrt{2\pi}} \frac{a+i\omega+ai}{(a+i\omega)^2}$. This also doesn't match.

Let's carefully redo the derivative of $F(\omega)$:
$F(\omega) = \mathcal{F}\{t e^{-at} u(t)\} = \frac{1}{\sqrt{2\pi}} \int_0^\infty t e^{-(a+i\omega)t} dt$.
Using $\int_0^\infty t e^{-st} dt = \frac{1}{s^2}$:
$F(\omega) = \frac{1}{\sqrt{2\pi}} \frac{1}{(a+i\omega)^2}$.

Then $\mathcal{F}\{f'(t)\} = i\omega F(\omega) = i\omega \frac{1}{\sqrt{2\pi}(a+i\omega)^2} = \frac{i\omega}{\sqrt{2\pi}(a+i\omega)^2}$.

Let's verify the transform of $(1-at) e^{-at} u(t)$:
$\mathcal{F}\{(1-at)e^{-at}u(t)\} = \mathcal{F}\{e^{-at}u(t)\} - a\mathcal{F}\{t e^{-at}u(t)\}$
$= \frac{1}{\sqrt{2\pi}(a+i\omega)} - a \left(\frac{1}{\sqrt{2\pi}(a+i\omega)^2}\right)$
$= \frac{1}{\sqrt{2\pi}} \left( \frac{a+i\omega}{(a+i\omega)^2} - \frac{a}{(a+i\omega)^2} \right)$
$= \frac{1}{\sqrt{2\pi}} \frac{a+i\omega-a}{(a+i\omega)^2} = \frac{i\omega}{\sqrt{2\pi}(a+i\omega)^2}$. This matches!

So, the Fourier transform of $f'(t) = (1-at) e^{-at} u(t)$ is $\frac{i\omega}{\sqrt{2\pi}(a+i\omega)^2}$.

---

This concludes the notes on Transforms of Derivatives. This topic is fundamental for applying Fourier analysis to systems described by differential equations. Ensure you are comfortable with the derivation and the application in solving ODEs.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
