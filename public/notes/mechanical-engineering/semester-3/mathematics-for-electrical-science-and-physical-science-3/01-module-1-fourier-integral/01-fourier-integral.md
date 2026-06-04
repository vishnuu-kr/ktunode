---
title: "Fourier Integral"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462c92"
status: "completed"
scrapedAt: "2026-05-20T17:50:30.843Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 1: Fourier Integral

### Topic: Fourier Integral

**Description:** This topic introduces the concept of the Fourier Integral, an extension of the Fourier series to represent arbitrary functions that are not necessarily periodic. It plays a crucial role in signal processing, solving differential equations, and various areas of physics and engineering.

**Learning Outcomes (LO):**

*   **LO1:** Understand the derivation and structure of the Fourier Integral for representing functions over an infinite interval.
*   **LO2:** Define and calculate the Fourier Sine and Cosine Integrals for odd and even functions, respectively.
*   **LO3:** Apply the Fourier Integral to solve partial differential equations (PDEs) in physical science and electrical science contexts.
*   **LO4:** Understand the relationship between the Fourier Integral and the Fourier Transform.

**Course Outcomes (CO) Alignment:**

*   **CO1:** Determine the Fourier transforms of functions and apply them to solve problems arising in engineering. (K3)
    *   The Fourier Integral is the foundation for understanding Fourier Transforms. By learning to derive and manipulate the Fourier Integral, students will be better equipped to handle Fourier Transforms, which are directly used to solve engineering problems.

---

### 1. Introduction: From Fourier Series to Fourier Integral

*   **Recall Fourier Series:** For a **periodic function** $f(x)$ with period $T = 2L$, the Fourier series representation is given by:
    $f(x) = a_0 + \sum_{n=1}^{\infty} (a_n \cos(n\omega_0 x) + b_n \sin(n\omega_0 x))$
    where $\omega_0 = 2\pi/T = \pi/L$ is the fundamental frequency. The coefficients are:
    $a_0 = \frac{1}{2L} \int_{-L}^{L} f(x) dx$
    $a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos(n\omega_0 x) dx$
    $b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin(n\omega_0 x) dx$

*   **The Need for Fourier Integral:** What if the function $f(x)$ is **not periodic** and defined over an infinite interval $(-\infty, \infty)$? The Fourier series concept, which relies on a finite period, cannot be directly applied. The Fourier Integral is the natural extension of the Fourier series to handle non-periodic functions.

*   **Derivation Idea:** Consider a function $f(x)$ defined on $(-L, L)$ and zero elsewhere. We can represent this function using its Fourier series. Now, imagine letting the interval length $2L$ go to infinity ($L \to \infty$).

    *   Let $\Delta\omega = \omega_0 = \pi/L$. As $L \to \infty$, $\Delta\omega \to 0$.
    *   The frequency $\omega = n\omega_0 = n\pi/L$ becomes a continuous variable.
    *   The coefficients $a_n$ and $b_n$ can be rewritten in terms of $\Delta\omega$:
        $a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos(n\omega_0 x) dx = \frac{1}{L} \int_{-L}^{L} f(x) \cos(\omega x) dx = \frac{\Delta\omega}{\pi} \int_{-L}^{L} f(x) \cos(\omega x) dx$
        $b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin(n\omega_0 x) dx = \frac{1}{L} \int_{-L}^{L} f(x) \sin(\omega x) dx = \frac{\Delta\omega}{\pi} \int_{-L}^{L} f(x) \sin(\omega x) dx$
    *   The Fourier series becomes:
        $f(x) \approx \sum_{n=0}^{\infty} (a_n \cos(n\omega_0 x) + b_n \sin(n\omega_0 x))$
        $f(x) \approx \sum_{n=0}^{\infty} \left( \frac{\Delta\omega}{\pi} \int_{-L}^{L} f(t) \cos(\omega_n t) dt \cos(\omega_n x) + \frac{\Delta\omega}{\pi} \int_{-L}^{L} f(t) \sin(\omega_n t) dt \sin(\omega_n x) \right)$
        (Using $t$ as the integration variable to avoid confusion with $x$).

*   **The Limit $L \to \infty$:** As $L \to \infty$, $\Delta\omega \to 0$, and the summation becomes an integral. The term $\frac{\Delta\omega}{\pi}$ is a factor of $d\omega$. The integral over $(-L, L)$ becomes an integral over $(-\infty, \infty)$.

    *   Define:
        $A(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \cos(\omega t) dt$
        $B(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \sin(\omega t) dt$

    *   The Fourier series transforms into the **Fourier Integral**:
        $f(x) = \int_{0}^{\infty} [A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)] d\omega$

    *   This is the fundamental representation of a non-periodic function using continuous frequencies.

---

### 2. The Fourier Integral Representation

**Definition:** For a function $f(x)$ satisfying the Dirichlet conditions on $(-\infty, \infty)$, the Fourier Integral of $f(x)$ is given by:

$f(x) = \frac{1}{\pi} \int_{0}^{\infty} \int_{-\infty}^{\infty} f(t) \cos(\omega(x-t)) dt d\omega$

**Derivation (Alternative Approach using Complex Exponential):**

Let's start with the complex form of the Fourier series:
$f(x) = \sum_{n=-\infty}^{\infty} c_n e^{in\omega_0 x}$
where $c_n = \frac{1}{2L} \int_{-L}^{L} f(t) e^{-in\omega_0 t} dt$.

Let $\omega_n = n\omega_0 = n\pi/L$. Then $\Delta\omega = \omega_0 = \pi/L$, so $1/L = \Delta\omega/\pi$.
$c_n = \frac{1}{2L} \int_{-L}^{L} f(t) e^{-i\omega_n t} dt = \frac{\Delta\omega}{2\pi} \int_{-L}^{L} f(t) e^{-i\omega_n t} dt$.

$f(x) = \sum_{n=-\infty}^{\infty} c_n e^{i\omega_n x} = \sum_{n=-\infty}^{\infty} \left(\frac{\Delta\omega}{2\pi} \int_{-L}^{L} f(t) e^{-i\omega_n t} dt\right) e^{i\omega_n x}$

As $L \to \infty$, $\Delta\omega \to 0$, and the summation becomes an integral. Let $\omega = \omega_n$. The integral becomes an integral over $\omega$.

Define the **Fourier Transform** $\hat{f}(\omega)$ as:
$\hat{f}(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$

The inverse Fourier Transform then represents $f(x)$:
$f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \hat{f}(\omega) e^{i\omega x} d\omega$

This form is more general and directly leads to the Fourier Transform pair. The previous form derived from the real sine and cosine can be obtained by splitting the exponential.

**Key Components of the Fourier Integral:**

*   **Fourier Cosine Coefficient $A(\omega)$:**
    $A(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \cos(\omega t) dt$
    This term captures the contribution of the cosine components in the frequency domain.

*   **Fourier Sine Coefficient $B(\omega)$:**
    $B(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \sin(\omega t) dt$
    This term captures the contribution of the sine components in the frequency domain.

*   **Fourier Integral:**
    $f(x) = \int_{0}^{\infty} [A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)] d\omega$

**Conditions for Validity (Dirichlet Conditions for Fourier Integral):**

A function $f(x)$ defined on $(-\infty, \infty)$ can be represented by its Fourier Integral if it satisfies:

1.  $f(x)$ is **absolutely integrable**, meaning $\int_{-\infty}^{\infty} |f(x)| dx < \infty$. This ensures that the integrals for $A(\omega)$ and $B(\omega)$ converge.
2.  $f(x)$ has a **finite number of discontinuities** in any finite interval.
3.  $f(x)$ has a **finite number of maxima and minima** in any finite interval.

At a point of discontinuity $x_0$, the Fourier Integral converges to the average of the left and right limits:
$f(x_0) = \frac{f(x_0^-) + f(x_0^+)}{2}$

**Example 1: Gate Function (Rectangular Pulse)**

Let $f(x) = \begin{cases} 1 & \text{if } |x| < a \\ 0 & \text{if } |x| > a \end{cases}$
where $a > 0$. This function is even.

*   **Calculate $A(\omega)$:**
    $A(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \cos(\omega t) dt = \frac{1}{\pi} \int_{-a}^{a} 1 \cdot \cos(\omega t) dt$
    $A(\omega) = \frac{1}{\pi} \left[ \frac{\sin(\omega t)}{\omega} \right]_{-a}^{a} = \frac{1}{\pi} \left( \frac{\sin(\omega a)}{\omega} - \frac{\sin(-\omega a)}{-\omega} \right)$
    $A(\omega) = \frac{1}{\pi} \left( \frac{\sin(\omega a)}{\omega} - \frac{-\sin(\omega a)}{\omega} \right) = \frac{2 \sin(\omega a)}{\pi \omega}$

*   **Calculate $B(\omega)$:** Since $f(x)$ is even and $\sin(\omega t)$ is odd, $f(t) \sin(\omega t)$ is odd. The integral of an odd function over a symmetric interval is zero.
    $B(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \sin(\omega t) dt = 0$

*   **Fourier Integral:**
    $f(x) = \int_{0}^{\infty} [A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)] d\omega$
    $f(x) = \int_{0}^{\infty} \frac{2 \sin(\omega a)}{\pi \omega} \cos(\omega x) d\omega$

    This is the Fourier integral representation of the gate function. This integral is related to the sine integral function.

**Kreyszig (10th ed.), Section 10.8 (Fourier Integrals):** Discusses the derivation and application of the Fourier integral. It highlights the relationship to Fourier series by considering periodic functions and then extending to the non-periodic case by letting the period approach infinity. The section also provides examples like the gate function and the exponential function.

---

### 3. Fourier Sine and Cosine Integrals

These are special cases of the Fourier Integral for **odd** and **even** functions, respectively. This simplifies the calculation of coefficients and the representation.

**3.1. Fourier Cosine Integral (for Even Functions)**

If $f(x)$ is an **even function** ($f(-x) = f(x)$) defined for $x \ge 0$, we can represent it for $x \ge 0$ using the Fourier Cosine Integral. The domain is effectively extended to $(-\infty, \infty)$ by considering the even extension.

*   **Coefficients:**
    *   $A(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \cos(\omega t) dt$
        Since $f(t)$ is even and $\cos(\omega t)$ is even, their product $f(t)\cos(\omega t)$ is even.
        $A(\omega) = \frac{2}{\pi} \int_{0}^{\infty} f(t) \cos(\omega t) dt$
    *   $B(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \sin(\omega t) dt$
        Since $f(t)$ is even and $\sin(\omega t)$ is odd, their product $f(t)\sin(\omega t)$ is odd. The integral over $(-\infty, \infty)$ is zero.
        $B(\omega) = 0$

*   **Fourier Cosine Integral:**
    For $x > 0$,
    $f(x) = \int_{0}^{\infty} A(\omega) \cos(\omega x) d\omega$
    $f(x) = \frac{2}{\pi} \int_{0}^{\infty} \left( \int_{0}^{\infty} f(t) \cos(\omega t) dt \right) \cos(\omega x) d\omega$

**Example 2: Exponential Decay (Even Function)**

Let $f(x) = e^{-ax}$ for $x \ge 0$, where $a > 0$. This is an even function if we consider it on $(-\infty, \infty)$ by defining $f(x) = e^{-a|x|}$. For the Fourier Cosine Integral, we use $f(x) = e^{-ax}$ for $x \ge 0$.

*   **Calculate $A(\omega)$:**
    $A(\omega) = \frac{2}{\pi} \int_{0}^{\infty} e^{-at} \cos(\omega t) dt$
    This integral can be solved using integration by parts twice or by using complex exponentials.
    Recall $\int e^{\alpha x} \cos(\beta x) dx = \frac{e^{\alpha x}}{\alpha^2 + \beta^2} (\alpha \cos(\beta x) + \beta \sin(\beta x))$.
    Here, $\alpha = -a$, $\beta = \omega$.
    $\int_{0}^{\infty} e^{-at} \cos(\omega t) dt = \left[ \frac{e^{-at}}{(-a)^2 + \omega^2} (-a \cos(\omega t) + \omega \sin(\omega t)) \right]_0^{\infty}$
    $= 0 - \left( \frac{e^0}{a^2 + \omega^2} (-a \cos(0) + \omega \sin(0)) \right)$
    $= - \frac{1}{a^2 + \omega^2} (-a \cdot 1 + 0) = \frac{a}{a^2 + \omega^2}$
    So, $A(\omega) = \frac{2}{\pi} \frac{a}{a^2 + \omega^2}$.

*   **Fourier Cosine Integral:**
    $f(x) = \frac{2}{\pi} \int_{0}^{\infty} \frac{a}{a^2 + \omega^2} \cos(\omega x) d\omega$
    This implies that $e^{-ax} = \frac{2a}{\pi} \int_{0}^{\infty} \frac{\cos(\omega x)}{a^2 + \omega^2} d\omega$ for $x \ge 0$.

**3.2. Fourier Sine Integral (for Odd Functions)**

If $f(x)$ is an **odd function** ($f(-x) = -f(x)$) defined for $x \ge 0$, we can represent it for $x \ge 0$ using the Fourier Sine Integral. The domain is effectively extended to $(-\infty, \infty)$ by considering the odd extension.

*   **Coefficients:**
    *   $A(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \cos(\omega t) dt$
        Since $f(t)$ is odd and $\cos(\omega t)$ is even, their product $f(t)\cos(\omega t)$ is odd. The integral over $(-\infty, \infty)$ is zero.
        $A(\omega) = 0$
    *   $B(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \sin(\omega t) dt$
        Since $f(t)$ is odd and $\sin(\omega t)$ is odd, their product $f(t)\sin(\omega t)$ is even.
        $B(\omega) = \frac{2}{\pi} \int_{0}^{\infty} f(t) \sin(\omega t) dt$

*   **Fourier Sine Integral:**
    For $x > 0$,
    $f(x) = \int_{0}^{\infty} B(\omega) \sin(\omega x) d\omega$
    $f(x) = \frac{2}{\pi} \int_{0}^{\infty} \left( \int_{0}^{\infty} f(t) \sin(\omega t) dt \right) \sin(\omega x) d\omega$

**Example 3: Exponential Decay (Odd Function)**

Let $f(x) = e^{-ax}$ for $x \ge 0$, where $a > 0$. For the Fourier Sine Integral, we consider the odd extension, which would be $f(x) = xe^{-ax}$ for $x \ge 0$ if we were extending the concept of "sine" based on derivative. However, the standard application is when the original function itself is odd. Let's use a different example for odd functions.

Consider the function $f(x) = \begin{cases} 1 & \text{if } 0 < x < a \\ 0 & \text{if } x > a \end{cases}$ for $x \ge 0$. This is the first half of the gate function.

*   **Calculate $B(\omega)$:**
    $B(\omega) = \frac{2}{\pi} \int_{0}^{\infty} f(t) \sin(\omega t) dt = \frac{2}{\pi} \int_{0}^{a} 1 \cdot \sin(\omega t) dt$
    $B(\omega) = \frac{2}{\pi} \left[ -\frac{\cos(\omega t)}{\omega} \right]_0^a = \frac{2}{\pi} \left( -\frac{\cos(\omega a)}{\omega} - (-\frac{\cos(0)}{\omega}) \right)$
    $B(\omega) = \frac{2}{\pi} \frac{1 - \cos(\omega a)}{\omega}$

*   **Fourier Sine Integral:**
    $f(x) = \frac{2}{\pi} \int_{0}^{\infty} \frac{1 - \cos(\omega a)}{\omega} \sin(\omega x) d\omega$

**Reference Books:**

*   **B.V. Ramana (39th ed.), Chapter 33 (Fourier Integrals):** Provides a detailed explanation of Fourier Integrals, Sine Integrals, and Cosine Integrals, including their derivations and properties. It covers numerous examples and applications.
*   **B.S. Grewal (44th ed.), Chapter 38 (Fourier Transforms and Integrals):** Similar to Ramana, this book offers a thorough treatment of Fourier Integrals, emphasizing their role in solving differential equations.

**Important Points to Remember:**

*   Fourier Integral is for non-periodic functions over $(-\infty, \infty)$.
*   Fourier Cosine Integral is for even functions (represented for $x \ge 0$).
*   Fourier Sine Integral is for odd functions (represented for $x \ge 0$).
*   The condition $\int_{-\infty}^{\infty} |f(x)| dx < \infty$ is crucial for convergence.

---

### 4. Applications in Solving Differential Equations

The Fourier Integral is a powerful tool for solving linear partial differential equations (PDEs) with constant coefficients, particularly those defined on infinite domains or semi-infinite domains.

**General Approach:**

1.  **Problem Formulation:** Identify the PDE, boundary conditions, and initial conditions.
2.  **Apply Fourier Integral:** Transform the PDE from the spatial domain (e.g., $x$) to the frequency domain (e.g., $\omega$) using the Fourier Integral (or Sine/Cosine variants). This typically turns differentiation with respect to $x$ into multiplication by $i\omega$ (or related terms).
3.  **Solve in Frequency Domain:** Solve the transformed algebraic equation or simpler differential equation for the transformed dependent variable (e.g., $\hat{u}(\omega, t)$).
4.  **Inverse Fourier Transform:** Apply the inverse Fourier Transform to obtain the solution $u(x, t)$ in the original spatial domain.

**Example 4: Heat Conduction on an Infinite Rod**

Consider the heat equation on an infinite rod:
$\frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2}$, for $-\infty < x < \infty$, $t > 0$.
Initial condition: $u(x, 0) = f(x)$, where $f(x)$ is a non-periodic function.

*   **Transform the PDE:** We assume $f(x)$ is absolutely integrable. Let's use the complex Fourier Transform form as it's more direct here.
    Let $\hat{u}(\omega, t) = \int_{-\infty}^{\infty} u(x, t) e^{-i\omega x} dx$.
    The transform of $\frac{\partial u}{\partial t}$ is $\frac{\partial \hat{u}}{\partial t}$.
    The transform of $\frac{\partial^2 u}{\partial x^2}$ is $(i\omega)^2 \hat{u}(\omega, t) = -\omega^2 \hat{u}(\omega, t)$.

    The PDE becomes:
    $\frac{\partial \hat{u}}{\partial t} = -k \omega^2 \hat{u}(\omega, t)$

*   **Solve in Frequency Domain:** This is a first-order ordinary differential equation in $t$ for a fixed $\omega$.
    The solution is $\hat{u}(\omega, t) = C e^{-k\omega^2 t}$.
    Using the initial condition: $\hat{u}(\omega, 0) = \int_{-\infty}^{\infty} u(x, 0) e^{-i\omega x} dx = \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx = \hat{f}(\omega)$.
    So, $C = \hat{f}(\omega)$.
    $\hat{u}(\omega, t) = \hat{f}(\omega) e^{-k\omega^2 t}$.

*   **Inverse Transform:**
    $u(x, t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \hat{u}(\omega, t) e^{i\omega x} d\omega$
    $u(x, t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \hat{f}(\omega) e^{-k\omega^2 t} e^{i\omega x} d\omega$

    Substituting $\hat{f}(\omega) = \int_{-\infty}^{\infty} f(\xi) e^{-i\omega \xi} d\xi$:
    $u(x, t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \left( \int_{-\infty}^{\infty} f(\xi) e^{-i\omega \xi} d\xi \right) e^{-k\omega^2 t} e^{i\omega x} d\omega$
    $u(x, t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} f(\xi) \left( \int_{-\infty}^{\infty} e^{i\omega (x - \xi)} e^{-k\omega^2 t} d\omega \right) d\xi$

    The inner integral is the Fourier transform of the Gaussian function $e^{-k\omega^2 t}$. It evaluates to $\sqrt{\frac{\pi}{kt}} e^{-\frac{(x-\xi)^2}{4kt}}$.

    $u(x, t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} f(\xi) \sqrt{\frac{\pi}{kt}} e^{-\frac{(x-\xi)^2}{4kt}} d\xi$
    $u(x, t) = \frac{1}{2\sqrt{\pi kt}} \int_{-\infty}^{\infty} f(\xi) e^{-\frac{(x-\xi)^2}{4kt}} d\xi$

    This is the fundamental solution for the heat equation on an infinite rod, often called the heat kernel.

**LO3 Alignment:** This section directly addresses LO3 by demonstrating how the Fourier Integral (or Transform) is used to solve PDEs in physical science contexts (heat conduction). The technique is also applicable in electrical science, for example, in analyzing circuits with non-periodic inputs or wave propagation problems.

**Kreyszig (10th ed.), Section 10.9 (Further Applications):** Kreyszig provides examples of using Fourier Integrals to solve PDE's like the heat equation and wave equation on infinite domains.

---

### 5. Relationship to Fourier Transform

The Fourier Integral is essentially the **inverse Fourier Transform** expressed in terms of the real sine and cosine components, or more commonly, it leads directly to the concept of the Fourier Transform pair.

*   **Fourier Transform Pair:**
    Given a function $f(x)$, its Fourier Transform is:
    $\hat{f}(\omega) = \mathcal{F}\{f(x)\}(\omega) = \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$

    The Inverse Fourier Transform is:
    $f(x) = \mathcal{F}^{-1}\{\hat{f}(\omega)\}(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \hat{f}(\omega) e^{i\omega x} d\omega$

*   **Connection:**
    The Fourier Integral representation:
    $f(x) = \int_{0}^{\infty} [A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)] d\omega$
    can be rewritten using complex exponentials:
    $A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x) = \frac{A(\omega) - iB(\omega)}{2} e^{i\omega x} + \frac{A(\omega) + iB(\omega)}{2} e^{-i\omega x}$

    It can be shown that:
    $\hat{f}(\omega) = \pi(A(\omega) - iB(\omega))$
    $\hat{f}(-\omega) = \pi(A(\omega) + iB(\omega))$

    Substituting these into the inverse transform formula:
    $f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \hat{f}(\omega) e^{i\omega x} d\omega$
    $f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \pi(A(\omega) - iB(\omega)) e^{i\omega x} d\omega$ (for $\omega > 0$ with modification for negative frequencies)
    This connection is more naturally understood by directly deriving the Fourier Transform pair from the complex Fourier series.

**LO4 Alignment:** This section directly addresses LO4 by establishing the fundamental link between the Fourier Integral and the Fourier Transform. Understanding the Fourier Integral is the stepping stone to mastering Fourier Transforms, which are widely used in electrical and physical sciences for tasks like spectral analysis, filter design, and solving linear systems.

**Reference Books:**

*   **Fast Fourier Transform - Algorithms and Applications by K.R. Rao, Do Nyeon Kim, Jae Jeong Hwang (Springer, 1st edition, 2011):** While this book focuses on the FFT, it builds upon the foundational concepts of Fourier Transforms, which are extensions of the Fourier Integral.
*   **Dennis G. Zill, Patrick D. Shanahan (Complex Analysis, 3rd edition, 2015):** While not directly on Fourier Integrals, complex analysis provides the mathematical machinery (like contour integration) that can be used to evaluate certain Fourier integrals and understand their properties.

---

### 6. Practice Questions and Exercises

**Instructions:** Attempt the following problems. The answers are provided for self-assessment.

**Question 1:**
Find the Fourier Integral representation of the function:
$f(x) = \begin{cases} x & \text{if } |x| < 1 \\ 0 & \text{if } |x| > 1 \end{cases}$

**Solution 1:**
This function is even. We need to calculate $A(\omega)$.
$A(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \cos(\omega t) dt = \frac{1}{\pi} \int_{-1}^{1} t \cos(\omega t) dt$
Using integration by parts: $\int u dv = uv - \int v du$. Let $u=t$, $dv=\cos(\omega t) dt$. Then $du=dt$, $v=\frac{\sin(\omega t)}{\omega}$.
$\int t \cos(\omega t) dt = t \frac{\sin(\omega t)}{\omega} - \int \frac{\sin(\omega t)}{\omega} dt = t \frac{\sin(\omega t)}{\omega} + \frac{\cos(\omega t)}{\omega^2}$.
$A(\omega) = \frac{1}{\pi} \left[ \frac{t \sin(\omega t)}{\omega} + \frac{\cos(\omega t)}{\omega^2} \right]_{-1}^{1}$
$A(\omega) = \frac{1}{\pi} \left[ \left(\frac{1 \sin(\omega)}{\omega} + \frac{\cos(\omega)}{\omega^2}\right) - \left(\frac{-1 \sin(-\omega)}{\omega} + \frac{\cos(-\omega)}{\omega^2}\right) \right]$
$A(\omega) = \frac{1}{\pi} \left[ \frac{\sin(\omega)}{\omega} + \frac{\cos(\omega)}{\omega^2} - \frac{\sin(\omega)}{\omega} + \frac{\cos(\omega)}{\omega^2} \right]$
$A(\omega) = \frac{1}{\pi} \left[ \frac{2 \cos(\omega)}{\omega^2} \right] = \frac{2 \cos(\omega)}{\pi \omega^2}$
$B(\omega) = 0$ since $f(t)$ is odd times $\sin(\omega t)$ which is odd, so $f(t)\sin(\omega t)$ is even. Oh wait, $f(t)=t$ is odd, $\sin(\omega t)$ is odd. So $f(t)\sin(\omega t)$ is even. The integral of an odd function $f(t)$ with an odd function $\sin(\omega t)$ results in an even function. So $B(\omega)$ is NOT zero.
Re-evaluating $B(\omega)$:
$B(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \sin(\omega t) dt = \frac{1}{\pi} \int_{-1}^{1} t \sin(\omega t) dt$
Using integration by parts: Let $u=t$, $dv=\sin(\omega t) dt$. Then $du=dt$, $v=-\frac{\cos(\omega t)}{\omega}$.
$\int t \sin(\omega t) dt = -t \frac{\cos(\omega t)}{\omega} - \int (-\frac{\cos(\omega t)}{\omega}) dt = -t \frac{\cos(\omega t)}{\omega} + \frac{\sin(\omega t)}{\omega^2}$.
$B(\omega) = \frac{1}{\pi} \left[ -\frac{t \cos(\omega t)}{\omega} + \frac{\sin(\omega t)}{\omega^2} \right]_{-1}^{1}$
$B(\omega) = \frac{1}{\pi} \left[ \left(-\frac{1 \cos(\omega)}{\omega} + \frac{\sin(\omega)}{\omega^2}\right) - \left(-\frac{-1 \cos(-\omega)}{\omega} + \frac{\sin(-\omega)}{\omega^2}\right) \right]$
$B(\omega) = \frac{1}{\pi} \left[ -\frac{\cos(\omega)}{\omega} + \frac{\sin(\omega)}{\omega^2} - \frac{\cos(\omega)}{\omega} + \frac{\sin(\omega)}{\omega^2} \right]$
$B(\omega) = \frac{1}{\pi} \left[ -\frac{2 \cos(\omega)}{\omega} + \frac{2 \sin(\omega)}{\omega^2} \right] = \frac{2}{\pi \omega^2} (\sin(\omega) - \omega \cos(\omega))$

So, $f(x) = \int_{0}^{\infty} \left( \frac{2 \cos(\omega)}{\pi \omega^2} \cos(\omega x) + \frac{2 (\sin(\omega) - \omega \cos(\omega))}{\pi \omega^2} \sin(\omega x) \right) d\omega$.
**(Correction:** The original question stated $f(x) = x$ for $|x|<1$. This is an odd function. For odd functions, the Fourier integral is $f(x) = \int_0^\infty B(\omega) \sin(\omega x) d\omega$. So $A(\omega)$ should be 0. Let's re-check the calculation of $A(\omega)$ for an odd function $f(x) = x$.)

If $f(x)=x$ for $|x|<1$, then $f(x)$ is odd.
$A(\omega) = \frac{1}{\pi} \int_{-1}^{1} t \cos(\omega t) dt$. The integrand $t \cos(\omega t)$ is odd (odd * even = odd). So $A(\omega)=0$. This matches LO2.
$B(\omega) = \frac{1}{\pi} \int_{-1}^{1} t \sin(\omega t) dt$. The integrand $t \sin(\omega t)$ is even (odd * odd = even).
$B(\omega) = \frac{2}{\pi} \int_{0}^{1} t \sin(\omega t) dt$.
From the previous calculation, $\int t \sin(\omega t) dt = -t \frac{\cos(\omega t)}{\omega} + \frac{\sin(\omega t)}{\omega^2}$.
$B(\omega) = \frac{2}{\pi} \left[ -\frac{t \cos(\omega t)}{\omega} + \frac{\sin(\omega t)}{\omega^2} \right]_0^1$
$B(\omega) = \frac{2}{\pi} \left[ \left(-\frac{1 \cos(\omega)}{\omega} + \frac{\sin(\omega)}{\omega^2}\right) - (0 + 0) \right]$
$B(\omega) = \frac{2}{\pi \omega^2} (\sin(\omega) - \omega \cos(\omega))$

Fourier Integral: $f(x) = \int_{0}^{\infty} B(\omega) \sin(\omega x) d\omega = \int_{0}^{\infty} \frac{2 (\sin(\omega) - \omega \cos(\omega))}{\pi \omega^2} \sin(\omega x) d\omega$.

**Question 2:**
Find the Fourier Cosine Integral of $f(x) = e^{-2x}$ for $x \ge 0$.

**Solution 2:**
This is an even function on $(-\infty, \infty)$ if we consider $f(x) = e^{-2|x|}$. We use the Fourier Cosine Integral for $x \ge 0$.
$A(\omega) = \frac{2}{\pi} \int_{0}^{\infty} f(t) \cos(\omega t) dt = \frac{2}{\pi} \int_{0}^{\infty} e^{-2t} \cos(\omega t) dt$
Using the integral $\int e^{\alpha x} \cos(\beta x) dx = \frac{e^{\alpha x}}{\alpha^2 + \beta^2} (\alpha \cos(\beta x) + \beta \sin(\beta x))$ with $\alpha=-2$, $\beta=\omega$.
$\int_{0}^{\infty} e^{-2t} \cos(\omega t) dt = \left[ \frac{e^{-2t}}{(-2)^2 + \omega^2} (-2 \cos(\omega t) + \omega \sin(\omega t)) \right]_0^{\infty}$
$= 0 - \frac{e^0}{4 + \omega^2} (-2 \cos(0) + \omega \sin(0)) = - \frac{1}{4 + \omega^2} (-2) = \frac{2}{4 + \omega^2}$.
$A(\omega) = \frac{2}{\pi} \left( \frac{2}{4 + \omega^2} \right) = \frac{4}{\pi (4 + \omega^2)}$.
$B(\omega) = 0$.
Fourier Cosine Integral: $f(x) = \int_{0}^{\infty} A(\omega) \cos(\omega x) d\omega = \int_{0}^{\infty} \frac{4}{\pi (4 + \omega^2)} \cos(\omega x) d\omega$.

**Question 3:**
Find the Fourier Sine Integral of $f(x) = \begin{cases} \sin(x) & \text{if } 0 < x < \pi \\ 0 & \text{if } x > \pi \end{cases}$ for $x \ge 0$.

**Solution 3:**
This is an odd function on $(-\infty, \infty)$ if we consider its odd extension. We use the Fourier Sine Integral.
$A(\omega) = 0$.
$B(\omega) = \frac{2}{\pi} \int_{0}^{\infty} f(t) \sin(\omega t) dt = \frac{2}{\pi} \int_{0}^{\pi} \sin(t) \sin(\omega t) dt$
Using the product-to-sum formula: $\sin A \sin B = \frac{1}{2} [\cos(A-B) - \cos(A+B)]$.
$B(\omega) = \frac{2}{\pi} \int_{0}^{\pi} \frac{1}{2} [\cos(t-\omega t) - \cos(t+\omega t)] dt$
$B(\omega) = \frac{1}{\pi} \int_{0}^{\pi} [\cos((1-\omega)t) - \cos((1+\omega)t)] dt$

Case 1: $\omega \neq 1$.
$B(\omega) = \frac{1}{\pi} \left[ \frac{\sin((1-\omega)t)}{1-\omega} - \frac{\sin((1+\omega)t)}{1+\omega} \right]_0^{\pi}$
$B(\omega) = \frac{1}{\pi} \left[ \left(\frac{\sin((1-\omega)\pi)}{1-\omega} - \frac{\sin((1+\omega)\pi)}{1+\omega}\right) - (0 - 0) \right]$
$B(\omega) = \frac{1}{\pi} \left[ \frac{\sin(\pi - \omega\pi)}{1-\omega} - \frac{\sin(\pi + \omega\pi)}{1+\omega} \right]$
$B(\omega) = \frac{1}{\pi} \left[ \frac{\sin(\omega\pi)}{1-\omega} - \frac{-\sin(\omega\pi)}{1+\omega} \right]$
$B(\omega) = \frac{\sin(\omega\pi)}{\pi} \left[ \frac{1}{1-\omega} + \frac{1}{1+\omega} \right] = \frac{\sin(\omega\pi)}{\pi} \left[ \frac{1+\omega + 1-\omega}{(1-\omega)(1+\omega)} \right]$
$B(\omega) = \frac{\sin(\omega\pi)}{\pi} \frac{2}{1-\omega^2}$

Case 2: $\omega = 1$.
$B(1) = \frac{1}{\pi} \int_{0}^{\pi} [\cos(0) - \cos(2t)] dt = \frac{1}{\pi} \int_{0}^{\pi} [1 - \cos(2t)] dt$
$B(1) = \frac{1}{\pi} \left[ t - \frac{\sin(2t)}{2} \right]_0^{\pi} = \frac{1}{\pi} \left[ (\pi - 0) - (0 - 0) \right] = 1$.

So, $f(x) = \int_{0}^{\infty} B(\omega) \sin(\omega x) d\omega$.
If $\omega \neq 1$, $f(x) = \int_{0}^{\infty} \frac{2 \sin(\omega\pi) \sin(\omega x)}{\pi (1-\omega^2)} d\omega$.
If $\omega = 1$, the integrand term is $1 \cdot \sin(x)$.

**Question 4:**
Briefly explain the role of the Dirichlet conditions in the context of Fourier Integrals.

**Solution 4:**
The Dirichlet conditions (absolute integrability, finite number of discontinuities and extrema in any finite interval) are the necessary and sufficient conditions for a function to have a convergent Fourier Integral representation. They ensure that the integrals defining the Fourier coefficients $A(\omega)$ and $B(\omega)$ exist and that the resulting series converges to the function (or its average at discontinuities). Without these conditions, the Fourier Integral might not converge or might not represent the original function.

---

### 7. Important Points to Remember

*   **Fourier Integral vs. Fourier Series:** Fourier Series for periodic functions, Fourier Integral for non-periodic functions over $(-\infty, \infty)$.
*   **Convergence:** The condition $\int_{-\infty}^{\infty} |f(x)| dx < \infty$ is paramount for the Fourier Integral to exist.
*   **Odd/Even Symmetry:** Exploiting symmetry simplifies the problem significantly, leading to Fourier Sine and Cosine Integrals.
    *   Even function $\implies$ Fourier Cosine Integral ($B(\omega)=0$).
    *   Odd function $\implies$ Fourier Sine Integral ($A(\omega)=0$).
*   **Applications:** Solving PDEs on infinite domains (heat, wave equations), signal processing, spectral analysis.
*   **Relation to Fourier Transform:** The Fourier Integral is a form of the inverse Fourier Transform, and the Fourier Transform itself is a generalization that is widely used in science and engineering.

---

This concludes Module 1: Fourier Integral. The next modules will likely build upon these concepts by introducing the Fourier Transform in detail and its applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
