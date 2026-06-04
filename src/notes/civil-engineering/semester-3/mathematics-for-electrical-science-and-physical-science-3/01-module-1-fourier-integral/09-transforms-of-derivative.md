---
title: "Transforms of Derivative"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba81068b"
status: "completed"
scrapedAt: "2026-05-20T18:41:15.493Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 1: Fourier Integral

### Topic: Transforms of Derivative

---

### **Learning Outcomes:**

By the end of this topic, you should be able to:

1.  **Understand and apply the Fourier transform properties for derivatives of functions.** This includes deriving the transform of the first, second, and higher-order derivatives.
2.  **Utilize the derivative property to solve differential equations using Fourier transforms.** This involves transforming differential equations into algebraic equations in the frequency domain.
3.  **Relate the Fourier transform of derivatives to the frequency response of systems.** Understanding how differentiation in the time domain corresponds to multiplication by 'iω' in the frequency domain is crucial for system analysis.

---

### **1. Introduction to Fourier Transforms and Derivatives**

The Fourier Transform is a powerful tool for analyzing signals and systems in the frequency domain. It allows us to decompose a function of time (or space) into its constituent frequencies. When dealing with differential equations, which are common in electrical circuits and physical systems, the Fourier Transform offers a systematic way to find solutions.

A key advantage of the Fourier Transform is how it handles differentiation. Differentiation in the time domain, which can be complex to work with directly, transforms into simple multiplication by the frequency variable ($\omega$) in the frequency domain. This significantly simplifies the process of solving linear ordinary differential equations (ODEs) with constant coefficients.

---

### **2. Key Concepts and Definitions**

**Fourier Transform:**

The Fourier Transform of a function $f(t)$ is denoted by $F(\omega)$ or $\mathcal{F}\{f(t)\}$ and is defined as:

$$F(\omega) = \mathcal{F}\{f(t)\} = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$

**Inverse Fourier Transform:**

The inverse Fourier Transform reconstructs the original function $f(t)$ from its frequency domain representation $F(\omega)$:

$$f(t) = \mathcal{F}^{-1}\{F(\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega$$

**The Frequency Variable ($\omega$):**
Here, $\omega$ represents angular frequency, where $\omega = 2\pi f$ and $f$ is the frequency in Hertz. The variable $i$ is the imaginary unit, $i^2 = -1$.

---

### **3. Transforms of Derivatives**

This is the core of the topic. We will derive the Fourier Transforms of the first and second derivatives of a function $f(t)$. These properties are derived using integration by parts.

**3.1. Fourier Transform of the First Derivative, $f'(t)$**

**Derivation:**

We start with the definition of the Fourier Transform of $f'(t)$:
$$ \mathcal{F}\{f'(t)\} = \int_{-\infty}^{\infty} f'(t) e^{-i\omega t} dt $$

We use integration by parts: $\int u dv = uv - \int v du$.
Let $u = e^{-i\omega t}$ and $dv = f'(t) dt$.
Then, $du = -i\omega e^{-i\omega t} dt$ and $v = f(t)$.

$$ \mathcal{F}\{f'(t)\} = \left[ f(t) e^{-i\omega t} \right]_{-\infty}^{\infty} - \int_{-\infty}^{\infty} f(t) (-i\omega e^{-i\omega t}) dt $$

**Important Assumption:** For the Fourier Transform to exist, the function $f(t)$ must satisfy certain conditions, including the requirement that $f(t) \to 0$ as $t \to \pm\infty$. This ensures that the boundary terms evaluate to zero.

$$ \left[ f(t) e^{-i\omega t} \right]_{-\infty}^{\infty} = \lim_{t \to \infty} f(t) e^{-i\omega t} - \lim_{t \to -\infty} f(t) e^{-i\omega t} $$
Since $e^{-i\omega t}$ is bounded and $|e^{-i\omega t}| = 1$, and assuming $f(t) \to 0$ as $t \to \pm\infty$, the boundary term is $0 - 0 = 0$.

Therefore,
$$ \mathcal{F}\{f'(t)\} = 0 - \int_{-\infty}^{\infty} f(t) (-i\omega e^{-i\omega t}) dt $$
$$ \mathcal{F}\{f'(t)\} = i\omega \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt $$

By definition, $\int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt = F(\omega)$.

**Property:**
$$ \mathcal{F}\{f'(t)\} = i\omega F(\omega) $$

**Interpretation:**
Taking the first derivative of a function in the time domain is equivalent to multiplying its Fourier Transform by $i\omega$ in the frequency domain.

**3.2. Fourier Transform of the Second Derivative, $f''(t)$**

We can apply the same property used in section 3.1. Let $g(t) = f'(t)$. Then $g'(t) = f''(t)$.
We know $\mathcal{F}\{g'(t)\} = i\omega G(\omega)$, where $G(\omega) = \mathcal{F}\{g(t)\}$.

$$ \mathcal{F}\{f''(t)\} = \mathcal{F}\{g'(t)\} = i\omega \mathcal{F}\{g(t)\} $$
$$ \mathcal{F}\{f''(t)\} = i\omega \mathcal{F}\{f'(t)\} $$

Now, substitute the property for the first derivative: $\mathcal{F}\{f'(t)\} = i\omega F(\omega)$.

$$ \mathcal{F}\{f''(t)\} = i\omega (i\omega F(\omega)) $$
$$ \mathcal{F}\{f''(t)\} = (i\omega)^2 F(\omega) $$
$$ \mathcal{F}\{f''(t)\} = -\omega^2 F(\omega) $$

**Property:**
$$ \mathcal{F}\{f''(t)\} = -\omega^2 F(\omega) $$

**Interpretation:**
Taking the second derivative of a function in the time domain is equivalent to multiplying its Fourier Transform by $-\omega^2$ in the frequency domain.

**3.3. Fourier Transform of Higher-Order Derivatives**

This pattern can be generalized for the $n$-th derivative of $f(t)$:

**Property:**
$$ \mathcal{F}\{f^{(n)}(t)\} = (i\omega)^n F(\omega) $$

where $f^{(n)}(t)$ denotes the $n$-th derivative of $f(t)$.

**Important Points to Remember:**

*   These properties hold assuming $f(t)$ and its derivatives satisfy the conditions for the existence of the Fourier Transform (e.g., $f(t) \to 0$ as $t \to \pm\infty$).
*   The multiplication by $(i\omega)^n$ in the frequency domain corresponds to a phase shift and amplitude scaling, dependent on the frequency.

---

### **4. Solving Differential Equations using Fourier Transforms**

The ability to transform derivatives into algebraic multiplications makes Fourier Transforms ideal for solving linear, constant-coefficient ordinary differential equations.

**General Procedure:**

1.  **Take the Fourier Transform of the entire differential equation.** This transforms the differential equation in the time domain into an algebraic equation in the frequency domain.
2.  **Apply the derivative properties.** Replace the Fourier Transforms of derivatives with their corresponding algebraic expressions (e.g., $\mathcal{F}\{f'(t)\} = i\omega F(\omega)$).
3.  **Use the Fourier Transform of known functions or constants.**
4.  **Solve the algebraic equation for the Fourier Transform of the unknown function, $F(\omega)$.**
5.  **Take the Inverse Fourier Transform of $F(\omega)$ to find the solution $f(t)$ in the time domain.**

**Example: Solving a First-Order ODE**

Consider the differential equation:
$$ f'(t) + af(t) = g(t) $$
where $a$ is a constant, and we are given $g(t)$ and initial conditions (though for Fourier Transforms, we primarily rely on the function decaying to zero at infinity, so explicit initial conditions are often handled by other methods or implied by the function's nature).

**Steps:**

1.  **Take the Fourier Transform:**
    $$ \mathcal{F}\{f'(t) + af(t)\} = \mathcal{F}\{g(t)\} $$
    Using the linearity property of Fourier Transforms: $\mathcal{F}\{af(t)\} = aF(\omega)$.
    $$ \mathcal{F}\{f'(t)\} + a\mathcal{F}\{f(t)\} = \mathcal{F}\{g(t)\} $$

2.  **Apply Derivative Property:**
    Let $F(\omega) = \mathcal{F}\{f(t)\}$ and $G(\omega) = \mathcal{F}\{g(t)\}$.
    $$ i\omega F(\omega) + aF(\omega) = G(\omega) $$

3.  **Solve for $F(\omega)$:**
    Factor out $F(\omega)$:
    $$ F(\omega)(i\omega + a) = G(\omega) $$
    $$ F(\omega) = \frac{G(\omega)}{i\omega + a} $$

4.  **Find $f(t)$ using Inverse Transform:**
    $$ f(t) = \mathcal{F}^{-1}\left\{\frac{G(\omega)}{i\omega + a}\right\} $$

To find the explicit solution, we would need to know $g(t)$ and its Fourier Transform $G(\omega)$, and then perform the inverse transform.

**Example: Solving a Second-Order ODE**

Consider the differential equation:
$$ f''(t) + b f'(t) + c f(t) = h(t) $$
where $b$ and $c$ are constants.

**Steps:**

1.  **Take the Fourier Transform:**
    $$ \mathcal{F}\{f''(t) + b f'(t) + c f(t)\} = \mathcal{F}\{h(t)\} $$
    $$ \mathcal{F}\{f''(t)\} + b\mathcal{F}\{f'(t)\} + c\mathcal{F}\{f(t)\} = \mathcal{F}\{h(t)\} $$

2.  **Apply Derivative Properties:**
    Let $F(\omega) = \mathcal{F}\{f(t)\}$ and $H(\omega) = \mathcal{F}\{h(t)\}$.
    $$ -\omega^2 F(\omega) + b(i\omega F(\omega)) + cF(\omega) = H(\omega) $$

3.  **Solve for $F(\omega)$:**
    $$ F(\omega)(-\omega^2 + ib\omega + c) = H(\omega) $$
    $$ F(\omega) = \frac{H(\omega)}{c + ib\omega - \omega^2} $$

4.  **Find $f(t)$ using Inverse Transform:**
    $$ f(t) = \mathcal{F}^{-1}\left\{\frac{H(\omega)}{c + ib\omega - \omega^2}\right\} $$

This algebraic manipulation in the frequency domain is significantly simpler than solving the ODE directly in the time domain.

---

### **5. Relation to System Analysis (Frequency Response)**

In electrical engineering and signal processing, systems are often described by linear time-invariant (LTI) differential equations. The Fourier Transform plays a crucial role in understanding the **frequency response** of these systems.

For an LTI system described by a differential equation, if the input is $x(t)$ and the output is $y(t)$, we can transform the differential equation relating them.

Consider a system with input $x(t)$ and output $y(t)$ described by:
$$ a_n y^{(n)}(t) + \dots + a_1 y'(t) + a_0 y(t) = b_m x^{(m)}(t) + \dots + b_1 x'(t) + b_0 x(t) $$

Taking the Fourier Transform of both sides:
$$ \mathcal{F}\{a_n y^{(n)}(t) + \dots + a_0 y(t)\} = \mathcal{F}\{b_m x^{(m)}(t) + \dots + b_0 x(t)\} $$

Using linearity and derivative properties:
$$ (a_n (i\omega)^n + \dots + a_1 (i\omega) + a_0) Y(\omega) = (b_m (i\omega)^m + \dots + b_1 (i\omega) + b_0) X(\omega) $$

The **transfer function** $H(\omega)$ of the system is defined as the ratio of the output's Fourier Transform to the input's Fourier Transform:
$$ H(\omega) = \frac{Y(\omega)}{X(\omega)} $$

From the transformed equation:
$$ H(\omega) = \frac{b_m (i\omega)^m + \dots + b_1 (i\omega) + b_0}{a_n (i\omega)^n + \dots + a_1 (i\omega) + a_0} $$

**Significance of $i\omega$:**
The term $i\omega$ in the transfer function directly relates to the differentiation property. It shows how the system's output changes in amplitude and phase with respect to the input's frequency.
*   Multiplying by $i\omega$ in the frequency domain corresponds to differentiation in the time domain.
*   A system with a transfer function containing $i\omega$ terms will tend to amplify higher frequencies relative to lower frequencies (e.g., a differentiator circuit).

---

### **6. Practice Questions and Exercises**

**Question 1:**
Given a function $f(t)$, find the Fourier Transform of its first derivative, $f'(t)$, in terms of $F(\omega) = \mathcal{F}\{f(t)\}$.

**Answer 1:**
$\mathcal{F}\{f'(t)\} = i\omega F(\omega)$

**Question 2:**
Given a function $f(t)$, find the Fourier Transform of its second derivative, $f''(t)$, in terms of $F(\omega) = \mathcal{F}\{f(t)\}$.

**Answer 2:**
$\mathcal{F}\{f''(t)\} = -\omega^2 F(\omega)$

**Question 3:**
Find the Fourier Transform of $f(t) = e^{-at} u(t)$, where $a > 0$ and $u(t)$ is the unit step function. Then, use the derivative property to find the Fourier Transform of $f'(t)$.

**Hint:** The Fourier Transform of $e^{-at} u(t)$ is $\frac{1}{a+i\omega}$.

**Answer 3:**
We are given $F(\omega) = \mathcal{F}\{e^{-at} u(t)\} = \frac{1}{a+i\omega}$.
Using the derivative property:
$\mathcal{F}\{f'(t)\} = i\omega F(\omega) = i\omega \left(\frac{1}{a+i\omega}\right) = \frac{i\omega}{a+i\omega}$.

Let's verify this by directly calculating the derivative and its transform:
$f'(t) = \frac{d}{dt}(e^{-at} u(t))$
Using the product rule and the derivative of the unit step function ($\delta(t)$):
$f'(t) = -ae^{-at} u(t) + e^{-at} \delta(t)$
Since $e^{-at}\delta(t) = e^{-a(0)}\delta(t) = \delta(t)$:
$f'(t) = -ae^{-at} u(t) + \delta(t)$

Now, take the Fourier Transform of $f'(t)$:
$\mathcal{F}\{f'(t)\} = \mathcal{F}\{-ae^{-at} u(t)\} + \mathcal{F}\{\delta(t)\}$
$\mathcal{F}\{f'(t)\} = -a \mathcal{F}\{e^{-at} u(t)\} + 1$
$\mathcal{F}\{f'(t)\} = -a \left(\frac{1}{a+i\omega}\right) + 1$
$\mathcal{F}\{f'(t)\} = \frac{-a + (a+i\omega)}{a+i\omega} = \frac{i\omega}{a+i\omega}$.
The results match!

**Question 4:**
Solve the following differential equation using Fourier Transforms:
$f'(t) + 2f(t) = e^{-3t} u(t)$. Assume $f(t) \to 0$ as $t \to \infty$.

**Answer 4:**
1.  **Transform the equation:**
    $\mathcal{F}\{f'(t)\} + 2\mathcal{F}\{f(t)\} = \mathcal{F}\{e^{-3t} u(t)\}$
    Let $F(\omega) = \mathcal{F}\{f(t)\}$ and $G(\omega) = \mathcal{F}\{e^{-3t} u(t)\}$.
    The Fourier Transform of $e^{-3t} u(t)$ is $\frac{1}{3+i\omega}$.
    So, the transformed equation is:
    $i\omega F(\omega) + 2F(\omega) = \frac{1}{3+i\omega}$

2.  **Solve for $F(\omega)$:**
    $F(\omega)(i\omega + 2) = \frac{1}{3+i\omega}$
    $F(\omega) = \frac{1}{(2+i\omega)(3+i\omega)}$

3.  **Perform Partial Fraction Decomposition:**
    $F(\omega) = \frac{A}{2+i\omega} + \frac{B}{3+i\omega}$
    $1 = A(3+i\omega) + B(2+i\omega)$

    Set $i\omega = -2$: $1 = A(3-2) + B(2-2) \implies 1 = A(1) \implies A = 1$.
    Set $i\omega = -3$: $1 = A(3-3) + B(2-3) \implies 1 = B(-1) \implies B = -1$.

    So, $F(\omega) = \frac{1}{2+i\omega} - \frac{1}{3+i\omega}$.

4.  **Take the Inverse Fourier Transform:**
    We know that $\mathcal{F}^{-1}\left\{\frac{1}{a+i\omega}\right\} = e^{-at} u(t)$.
    $f(t) = \mathcal{F}^{-1}\left\{\frac{1}{2+i\omega}\right\} - \mathcal{F}^{-1}\left\{\frac{1}{3+i\omega}\right\}$
    $f(t) = e^{-2t} u(t) - e^{-3t} u(t)$

**Question 5:**
Consider an LTI system with the differential equation $y''(t) + 4y(t) = x(t)$. Find the transfer function $H(\omega)$.

**Answer 5:**
1.  **Transform the equation:**
    $\mathcal{F}\{y''(t)\} + 4\mathcal{F}\{y(t)\} = \mathcal{F}\{x(t)\}$
    Let $Y(\omega) = \mathcal{F}\{y(t)\}$ and $X(\omega) = \mathcal{F}\{x(t)\}$.
    Using the second derivative property: $-\omega^2 Y(\omega) + 4Y(\omega) = X(\omega)$.

2.  **Solve for the Transfer Function $H(\omega) = Y(\omega)/X(\omega)$:**
    $Y(\omega)(-\omega^2 + 4) = X(\omega)$
    $H(\omega) = \frac{Y(\omega)}{X(\omega)} = \frac{1}{4 - \omega^2}$.

---

### **7. Important Points to Remember (Summary)**

*   **Derivative Property:** $\mathcal{F}\{f^{(n)}(t)\} = (i\omega)^n F(\omega)$.
    *   First derivative: $i\omega F(\omega)$.
    *   Second derivative: $-\omega^2 F(\omega)$.
*   **Solving ODEs:** Fourier Transforms convert linear ODEs with constant coefficients into algebraic equations in the frequency domain, simplifying the solution process.
*   **System Analysis:** The transfer function $H(\omega)$ of an LTI system directly incorporates the $(i\omega)$ factor, revealing how the system amplifies or attenuates different frequencies.
*   **Assumptions:** The validity of these properties relies on the function $f(t)$ and its derivatives satisfying the conditions for the existence of the Fourier Transform (typically, they must decay to zero as $t \to \pm\infty$).

---
