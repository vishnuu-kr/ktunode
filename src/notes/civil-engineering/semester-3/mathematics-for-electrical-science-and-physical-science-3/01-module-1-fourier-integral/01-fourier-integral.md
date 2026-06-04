---
title: "Fourier Integral"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810683"
status: "completed"
scrapedAt: "2026-05-20T18:41:09.965Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 1: Fourier Integral

### Topic: Fourier Integral

---

This module introduces the Fourier Integral, a generalization of the Fourier Series that allows us to represent functions that are not necessarily periodic over an infinite interval. This is crucial in analyzing signals and systems in electrical and physical sciences where infinite duration signals are common.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the concept of the Fourier Integral:** Grasp the theoretical foundation and purpose of representing non-periodic functions using integrals of sinusoids.
*   **Derive the Fourier Integral formulas:** Be able to systematically derive the Fourier Cosine and Sine Integrals, and the general Fourier Integral.
*   **Apply the Fourier Integral to find the representation of given functions:** Compute the Fourier Integral for various functions defined over infinite intervals.
*   **Analyze the properties of the Fourier Integral:** Understand how the integral relates to the frequency spectrum of a function.
*   **Recognize the conditions under which a Fourier Integral exists:** Be aware of the Dirichlet conditions for the convergence of the Fourier Integral.

---

### 1. Introduction to the Fourier Integral

*   **Motivation:** Fourier Series represents periodic functions as a sum of sines and cosines. However, many real-world signals are not periodic. The Fourier Integral extends this concept to represent non-periodic functions over an infinite interval $(-\infty, \infty)$.
*   **Analogy to Fourier Series:** Imagine a periodic function with a very large period $T$. As $T \to \infty$, the function effectively becomes non-periodic. In Fourier Series, the frequencies are discrete ($n\omega_0$, where $\omega_0 = 2\pi/T$). As $T \to \infty$, $\omega_0 \to 0$, and the discrete frequencies become a continuous spectrum. The summation in Fourier Series transforms into an integral in the Fourier Integral.

---

### 2. Derivation of the Fourier Integral

Let $f(x)$ be a non-periodic function defined on $(-\infty, \infty)$.
Consider $f(x)$ over the interval $[-L, L]$. We can represent it using its Fourier Series:

$f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos(n\omega_0 x) + b_n \sin(n\omega_0 x) \right)$

where $\omega_0 = \frac{2\pi}{T} = \frac{\pi}{L}$ (assuming $T=2L$ and $x$ is defined on $[-L, L]$).

The coefficients are given by:
$a_n = \frac{1}{L} \int_{-L}^{L} f(t) \cos(n\omega_0 t) dt$
$b_n = \frac{1}{L} \int_{-L}^{L} f(t) \sin(n\omega_0 t) dt$

Substitute $a_n$ and $b_n$ back into the Fourier Series:

$f(x) = \frac{1}{2L} \int_{-L}^{L} f(t) dt + \sum_{n=1}^{\infty} \left[ \frac{1}{L} \int_{-L}^{L} f(t) \cos(n\omega_0 (x-t)) dt \right]$
(Using the identity $\cos(A-B) = \cos A \cos B + \sin A \sin B$ and combining terms)

$f(x) = \frac{1}{2L} \int_{-L}^{L} f(t) dt + \sum_{n=1}^{\infty} \frac{1}{L} \int_{-L}^{L} f(t) \cos(n\omega_0 x) \cos(n\omega_0 t) dt + \sum_{n=1}^{\infty} \frac{1}{L} \int_{-L}^{L} f(t) \sin(n\omega_0 x) \sin(n\omega_0 t) dt$

Let $\Delta\omega = \omega_0 = \frac{\pi}{L}$. Then $\frac{1}{L} = \frac{\Delta\omega}{\pi}$.
Let $\omega_n = n\omega_0$.

$f(x) = \frac{\Delta\omega}{2\pi} \int_{-L}^{L} f(t) dt + \sum_{n=1}^{\infty} \frac{\Delta\omega}{\pi} \int_{-L}^{L} f(t) \cos(\omega_n x) \cos(\omega_n t) dt + \sum_{n=1}^{\infty} \frac{\Delta\omega}{\pi} \int_{-L}^{L} f(t) \sin(\omega_n x) \sin(\omega_n t) dt$

Now, let $L \to \infty$. This means $\Delta\omega = \frac{\pi}{L} \to 0$.
The summation $\sum_{n=1}^{\infty} \frac{\Delta\omega}{\pi} g(\omega_n)$ becomes an integral $\int_{0}^{\infty} \frac{1}{\pi} g(\omega) d\omega$.
The constant term $\frac{\Delta\omega}{2\pi} \int_{-L}^{L} f(t) dt$ becomes 0 as $\Delta\omega \to 0$ for well-behaved functions.

The Fourier Integral is often written in terms of cosine and sine components.

---

### 3. Fourier Integral Formulas

#### 3.1 Fourier Cosine and Sine Integrals

These are used for even and odd functions, respectively, over $(0, \infty)$.

**For an even function $f(x)$ on $(-\infty, \infty)$:**
Since $f(x)$ is even, $f(-x) = f(x)$. The Fourier series reduces to a cosine series.
The Fourier Cosine Integral is given by:

$f(x) = \frac{2}{\pi} \int_{0}^{\infty} \cos(\omega x) \left( \int_{0}^{\infty} f(t) \cos(\omega t) dt \right) d\omega$

where the Fourier Cosine Transform of $f(x)$ is $A_c(\omega) = \int_{0}^{\infty} f(t) \cos(\omega t) dt$.
So, $f(x) = \frac{2}{\pi} \int_{0}^{\infty} A_c(\omega) \cos(\omega x) d\omega$.

**For an odd function $f(x)$ on $(-\infty, \infty)$:**
Since $f(x)$ is odd, $f(-x) = -f(x)$. The Fourier series reduces to a sine series.
The Fourier Sine Integral is given by:

$f(x) = \frac{2}{\pi} \int_{0}^{\infty} \sin(\omega x) \left( \int_{0}^{\infty} f(t) \sin(\omega t) dt \right) d\omega$

where the Fourier Sine Transform of $f(x)$ is $B_s(\omega) = \int_{0}^{\infty} f(t) \sin(\omega t) dt$.
So, $f(x) = \frac{2}{\pi} \int_{0}^{\infty} B_s(\omega) \sin(\omega x) d\omega$.

#### 3.2 The General Fourier Integral

For any function $f(x)$ on $(-\infty, \infty)$, the Fourier Integral is given by:

$f(x) = \frac{1}{\pi} \int_{0}^{\infty} \left[ \int_{-\infty}^{\infty} f(t) \cos(\omega(t-x)) dt \right] d\omega$

This can be expanded using $\cos(A-B) = \cos A \cos B + \sin A \sin B$:

$f(x) = \frac{1}{\pi} \int_{0}^{\infty} \left[ \int_{-\infty}^{\infty} f(t) \cos(\omega t) \cos(\omega x) dt + \int_{-\infty}^{\infty} f(t) \sin(\omega t) \sin(\omega x) dt \right] d\omega$

Rearranging, we get:

$f(x) = \int_{0}^{\infty} [A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)] d\omega$

where:
*   **Fourier Cosine Transform $A(\omega)$:** $A(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \cos(\omega t) dt$
*   **Fourier Sine Transform $B(\omega)$:** $B(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \sin(\omega t) dt$

**Important Note:** For even functions, $B(\omega) = 0$, and $A(\omega) = \frac{2}{\pi} \int_{0}^{\infty} f(t) \cos(\omega t) dt$, recovering the Fourier Cosine Integral.
For odd functions, $A(\omega) = 0$, and $B(\omega) = \frac{2}{\pi} \int_{0}^{\infty} f(t) \sin(\omega t) dt$, recovering the Fourier Sine Integral.

---

### 4. Conditions for Existence (Dirichlet Conditions)

For the Fourier Integral of $f(x)$ to converge to $f(x)$, the function must satisfy the following conditions over any finite interval:

1.  **Finite number of discontinuities:** $f(x)$ has only a finite number of discontinuities.
2.  **Finite number of extrema:** $f(x)$ has only a finite number of maxima and minima.
3.  **Absolutely integrable:** $\int_{-\infty}^{\infty} |f(x)| dx < \infty$. This is the most crucial condition for the existence of the Fourier Integral.

If these conditions are met, the Fourier Integral converges to $f(x)$ at points of continuity and to the average of the left and right limits $[f(x^+) + f(x^-)]/2$ at points of discontinuity.

---

### 5. Examples

#### Example 1: Even Function - Exponential Decay

Find the Fourier Integral of the function:
$f(x) = \begin{cases} e^{-ax} & \text{if } x > 0 \\ e^{ax} & \text{if } x < 0 \end{cases}$, where $a > 0$.
This is an even function, so we can use the Fourier Cosine Integral.

**Step 1: Verify it's an even function.**
$f(-x) = e^{-a(-x)} = e^{ax}$ for $-x < 0 \implies x > 0$.
$f(-x) = e^{a(-x)} = e^{-ax}$ for $-x > 0 \implies x < 0$.
So, $f(-x) = f(x)$. It is indeed an even function.

**Step 2: Calculate the Fourier Cosine Transform $A_c(\omega)$.**
$A_c(\omega) = \int_{0}^{\infty} f(t) \cos(\omega t) dt$
For $t > 0$, $f(t) = e^{-at}$.
$A_c(\omega) = \int_{0}^{\infty} e^{-at} \cos(\omega t) dt$

We can use the standard integral result: $\int e^{ax} \cos(bx) dx = \frac{e^{ax}}{a^2+b^2} (a\cos(bx) + b\sin(bx))$.
Here, $a \to -a$ and $b \to \omega$.
$A_c(\omega) = \left[ \frac{e^{-at}}{(-a)^2+\omega^2} (-a\cos(\omega t) + \omega\sin(\omega t)) \right]_{0}^{\infty}$

As $t \to \infty$, $e^{-at} \to 0$ (since $a > 0$).
At $t=0$: $\frac{e^0}{a^2+\omega^2} (-a\cos(0) + \omega\sin(0)) = \frac{1}{a^2+\omega^2} (-a \cdot 1 + \omega \cdot 0) = \frac{-a}{a^2+\omega^2}$.

So, $A_c(\omega) = 0 - \left( \frac{-a}{a^2+\omega^2} \right) = \frac{a}{a^2+\omega^2}$.

**Step 3: Substitute into the Fourier Cosine Integral formula.**
$f(x) = \frac{2}{\pi} \int_{0}^{\infty} A_c(\omega) \cos(\omega x) d\omega$
$f(x) = \frac{2}{\pi} \int_{0}^{\infty} \frac{a}{a^2+\omega^2} \cos(\omega x) d\omega$

**Result:** The Fourier Integral representation of $f(x) = e^{-a|x|}$ is $\frac{2}{\pi} \int_{0}^{\infty} \frac{a}{a^2+\omega^2} \cos(\omega x) d\omega$.

#### Example 2: Odd Function - Step Function

Find the Fourier Integral of the function:
$f(x) = \begin{cases} 1 & \text{if } 0 < x < \pi \\ 0 & \text{if } x > \pi \end{cases}$ and $f(x)$ is odd.

**Step 1: Verify it's an odd function.**
Since $f(x)$ is defined only for $x>0$ and stated to be odd, we have:
For $x < 0$, $f(x) = -f(-x)$. Since $-x > 0$, $f(-x) = 1$ if $0 < -x < \pi$ (i.e., $-\pi < x < 0$), and $f(-x) = 0$ if $-x > \pi$ (i.e., $x < -\pi$).
So, $f(x) = \begin{cases} 1 & \text{if } -\pi < x < 0 \\ 0 & \text{if } x \ge 0 \text{ or } x \le -\pi \end{cases}$.
This function is odd.

**Step 2: Calculate the Fourier Sine Transform $B_s(\omega)$.**
$B_s(\omega) = \int_{0}^{\infty} f(t) \sin(\omega t) dt$
For $t > 0$, $f(t) = 1$ if $0 < t < \pi$, and $f(t) = 0$ if $t > \pi$.
$B_s(\omega) = \int_{0}^{\pi} 1 \cdot \sin(\omega t) dt + \int_{\pi}^{\infty} 0 \cdot \sin(\omega t) dt$
$B_s(\omega) = \int_{0}^{\pi} \sin(\omega t) dt$

Assuming $\omega \neq 0$:
$B_s(\omega) = \left[ -\frac{\cos(\omega t)}{\omega} \right]_{0}^{\pi} = -\frac{\cos(\omega \pi)}{\omega} - \left( -\frac{\cos(0)}{\omega} \right)$
$B_s(\omega) = \frac{1 - \cos(\omega \pi)}{\omega}$

**Step 3: Substitute into the Fourier Sine Integral formula.**
$f(x) = \frac{2}{\pi} \int_{0}^{\infty} B_s(\omega) \sin(\omega x) d\omega$
$f(x) = \frac{2}{\pi} \int_{0}^{\infty} \frac{1 - \cos(\omega \pi)}{\omega} \sin(\omega x) d\omega$

**Result:** The Fourier Integral representation of this odd step function is $\frac{2}{\pi} \int_{0}^{\infty} \frac{1 - \cos(\omega \pi)}{\omega} \sin(\omega x) d\omega$.

#### Example 3: General Function - Rectangular Pulse

Find the Fourier Integral of the function:
$f(x) = \begin{cases} 1 & \text{if } -1 < x < 1 \\ 0 & \text{otherwise} \end{cases}$

This is an even function. We can use the Fourier Cosine Integral.

**Step 1: Calculate the Fourier Cosine Transform $A_c(\omega)$.**
$A_c(\omega) = \int_{0}^{\infty} f(t) \cos(\omega t) dt$
For $t > 0$, $f(t) = 1$ if $0 < t < 1$, and $f(t) = 0$ if $t > 1$.
$A_c(\omega) = \int_{0}^{1} 1 \cdot \cos(\omega t) dt + \int_{1}^{\infty} 0 \cdot \cos(\omega t) dt$
$A_c(\omega) = \int_{0}^{1} \cos(\omega t) dt$

Assuming $\omega \neq 0$:
$A_c(\omega) = \left[ \frac{\sin(\omega t)}{\omega} \right]_{0}^{1} = \frac{\sin(\omega \cdot 1)}{\omega} - \frac{\sin(0)}{\omega} = \frac{\sin(\omega)}{\omega}$.

If $\omega = 0$, $A_c(0) = \int_{0}^{1} \cos(0) dt = \int_{0}^{1} 1 dt = 1$.
Note that $\lim_{\omega \to 0} \frac{\sin(\omega)}{\omega} = 1$. So, the formula $\frac{\sin(\omega)}{\omega}$ is valid for $\omega=0$ as well by taking the limit.

**Step 2: Substitute into the Fourier Cosine Integral formula.**
$f(x) = \frac{2}{\pi} \int_{0}^{\infty} A_c(\omega) \cos(\omega x) d\omega$
$f(x) = \frac{2}{\pi} \int_{0}^{\infty} \frac{\sin(\omega)}{\omega} \cos(\omega x) d\omega$

**Result:** The Fourier Integral representation of the rectangular pulse is $\frac{2}{\pi} \int_{0}^{\infty} \frac{\sin(\omega)}{\omega} \cos(\omega x) d\omega$.

*Self-check:* For $x=0$, the integral becomes $\frac{2}{\pi} \int_{0}^{\infty} \frac{\sin(\omega)}{\omega} d\omega$. This is related to the Dirichlet integral, which equals $\pi/2$.
So, $\frac{2}{\pi} \cdot \frac{\pi}{2} = 1$. This matches $f(0)=1$.

---

### 6. Practice Questions/Exercises

**Instructions:** For each question, determine the appropriate Fourier Integral formula (Cosine, Sine, or general) and calculate the necessary transform.

1.  Find the Fourier Cosine Integral for the function $f(x) = \begin{cases} \cos(x) & \text{if } |x| \le \pi/2 \\ 0 & \text{if } |x| > \pi/2 \end{cases}$.
2.  Find the Fourier Sine Integral for the function $f(x) = \begin{cases} x & \text{if } 0 < x \le 1 \\ 2-x & \text{if } 1 < x \le 2 \\ 0 & \text{if } x > 2 \end{cases}$, assuming $f(x)$ is odd.
3.  Find the Fourier Integral for the function $f(x) = e^{-|x|}$.
4.  Find the Fourier Integral for the function $f(x) = \begin{cases} x & \text{if } -a < x < a \\ 0 & \text{otherwise} \end{cases}$.
5.  Find the Fourier Cosine Integral for the function $f(x) = \begin{cases} x & \text{if } 0 < x < \pi \\ 0 & \text{if } x > \pi \end{cases}$.

---

### Answers to Practice Questions

1.  **Function:** $f(x) = \begin{cases} \cos(x) & \text{if } |x| \le \pi/2 \\ 0 & \text{if } |x| > \pi/2 \end{cases}$. This is an even function.
    **Fourier Cosine Transform $A_c(\omega)$:**
    $A_c(\omega) = \int_{0}^{\infty} f(t) \cos(\omega t) dt = \int_{0}^{\pi/2} \cos(t) \cos(\omega t) dt$.
    Using the product-to-sum formula $2\cos A \cos B = \cos(A-B) + \cos(A+B)$:
    $A_c(\omega) = \frac{1}{2} \int_{0}^{\pi/2} [\cos((\omega-1)t) + \cos((\omega+1)t)] dt$.

    *   **Case 1: $\omega \neq 1$ and $\omega \neq -1$.**
        $A_c(\omega) = \frac{1}{2} \left[ \frac{\sin((\omega-1)t)}{\omega-1} + \frac{\sin((\omega+1)t)}{\omega+1} \right]_{0}^{\pi/2}$
        $A_c(\omega) = \frac{1}{2} \left[ \frac{\sin((\omega-1)\pi/2)}{\omega-1} + \frac{\sin((\omega+1)\pi/2)}{\omega+1} \right]$.
        Note: $\sin((\omega+1)\pi/2) = \sin(\omega\pi/2 + \pi/2) = \cos(\omega\pi/2)$.
        $\sin((\omega-1)\pi/2) = \sin(\omega\pi/2 - \pi/2) = -\cos(\omega\pi/2)$.
        $A_c(\omega) = \frac{1}{2} \left[ \frac{-\cos(\omega\pi/2)}{\omega-1} + \frac{\cos(\omega\pi/2)}{\omega+1} \right] = \frac{\cos(\omega\pi/2)}{2} \left( \frac{-1}{\omega-1} + \frac{1}{\omega+1} \right)$
        $A_c(\omega) = \frac{\cos(\omega\pi/2)}{2} \left( \frac{-(\omega+1) + (\omega-1)}{(\omega-1)(\omega+1)} \right) = \frac{\cos(\omega\pi/2)}{2} \left( \frac{-2}{\omega^2-1} \right) = \frac{-\cos(\omega\pi/2)}{\omega^2-1} = \frac{\cos(\omega\pi/2)}{1-\omega^2}$.

    *   **Case 2: $\omega = 1$.**
        $A_c(1) = \frac{1}{2} \int_{0}^{\pi/2} [\cos(0) + \cos(2t)] dt = \frac{1}{2} \int_{0}^{\pi/2} [1 + \cos(2t)] dt$
        $A_c(1) = \frac{1}{2} \left[ t + \frac{\sin(2t)}{2} \right]_{0}^{\pi/2} = \frac{1}{2} \left[ (\pi/2 + \frac{\sin(\pi)}{2}) - (0 + 0) \right] = \frac{\pi}{4}$.
        (Check with formula: $\lim_{\omega \to 1} \frac{\cos(\omega\pi/2)}{1-\omega^2}$. This is indeterminate. Using L'Hopital's rule on numerator: $-\frac{\pi}{2}\sin(\omega\pi/2)$. On denominator: $-2\omega$. Limit is $\frac{-\frac{\pi}{2}\sin(\pi/2)}{-2} = \frac{-\pi/2}{-2} = \pi/4$).

    *   **Case 3: $\omega = -1$.** (Not relevant for integral from $0$ to $\infty$, but for completeness).

    **Fourier Cosine Integral:**
    $f(x) = \frac{2}{\pi} \int_{0}^{\infty} A_c(\omega) \cos(\omega x) d\omega = \frac{2}{\pi} \int_{0}^{\infty} \frac{\cos(\omega\pi/2)}{1-\omega^2} \cos(\omega x) d\omega$ (for $\omega \neq 1$).
    The integral $\int_{0}^{\infty} \frac{\cos(\omega\pi/2)}{1-\omega^2} \cos(\omega x) d\omega$ is known to be $\frac{\pi}{2} \cos(x)$ for $|x| \le \pi/2$.
    So, $f(x) = \cos(x)$ for $|x| \le \pi/2$.

2.  **Function:** $f(x) = \begin{cases} x & \text{if } 0 < x \le 1 \\ 2-x & \text{if } 1 < x \le 2 \\ 0 & \text{if } x > 2 \end{cases}$, and $f(x)$ is odd.
    **Fourier Sine Transform $B_s(\omega)$:**
    $B_s(\omega) = \int_{0}^{\infty} f(t) \sin(\omega t) dt = \int_{0}^{1} t \sin(\omega t) dt + \int_{1}^{2} (2-t) \sin(\omega t) dt$.

    Using integration by parts: $\int u dv = uv - \int v du$.
    For $\int t \sin(\omega t) dt$: $u=t, dv=\sin(\omega t)dt \implies du=dt, v = -\frac{\cos(\omega t)}{\omega}$.
    $\int t \sin(\omega t) dt = -\frac{t \cos(\omega t)}{\omega} + \int \frac{\cos(\omega t)}{\omega} dt = -\frac{t \cos(\omega t)}{\omega} + \frac{\sin(\omega t)}{\omega^2}$.

    For $\int (2-t) \sin(\omega t) dt$: $u=2-t, dv=\sin(\omega t)dt \implies du=-dt, v = -\frac{\cos(\omega t)}{\omega}$.
    $\int (2-t) \sin(\omega t) dt = -\frac{(2-t) \cos(\omega t)}{\omega} - \int \frac{\cos(\omega t)}{\omega} (-dt) = -\frac{(2-t) \cos(\omega t)}{\omega} + \frac{\sin(\omega t)}{\omega^2}$.

    $B_s(\omega) = \left[ -\frac{t \cos(\omega t)}{\omega} + \frac{\sin(\omega t)}{\omega^2} \right]_{0}^{1} + \left[ -\frac{(2-t) \cos(\omega t)}{\omega} + \frac{\sin(\omega t)}{\omega^2} \right]_{1}^{2}$

    Evaluate at limits:
    At $t=1$: $-\frac{\cos(\omega)}{\omega} + \frac{\sin(\omega)}{\omega^2}$
    At $t=0$: $0$
    At $t=2$: $-\frac{0 \cdot \cos(2\omega)}{\omega} + \frac{\sin(2\omega)}{\omega^2} = \frac{\sin(2\omega)}{\omega^2}$
    At $t=1$: $-\frac{(2-1) \cos(\omega)}{\omega} + \frac{\sin(\omega)}{\omega^2} = -\frac{\cos(\omega)}{\omega} + \frac{\sin(\omega)}{\omega^2}$

    $B_s(\omega) = \left( -\frac{\cos(\omega)}{\omega} + \frac{\sin(\omega)}{\omega^2} \right) - 0 + \left( \frac{\sin(2\omega)}{\omega^2} - (-\frac{\cos(\omega)}{\omega} + \frac{\sin(\omega)}{\omega^2}) \right)$
    $B_s(\omega) = -\frac{\cos(\omega)}{\omega} + \frac{\sin(\omega)}{\omega^2} + \frac{\sin(2\omega)}{\omega^2} + \frac{\cos(\omega)}{\omega} - \frac{\sin(\omega)}{\omega^2} = \frac{\sin(2\omega)}{\omega^2}$.

    **Fourier Sine Integral:**
    $f(x) = \frac{2}{\pi} \int_{0}^{\infty} \frac{\sin(2\omega)}{\omega^2} \sin(\omega x) d\omega$.

3.  **Function:** $f(x) = e^{-|x|}$. This is an even function.
    **Fourier Cosine Transform $A_c(\omega)$:**
    $A_c(\omega) = \int_{0}^{\infty} f(t) \cos(\omega t) dt = \int_{0}^{\infty} e^{-t} \cos(\omega t) dt$.
    Using the standard integral: $\int e^{ax} \cos(bx) dx = \frac{e^{ax}}{a^2+b^2} (a\cos(bx) + b\sin(bx))$.
    Here, $a=-1, b=\omega$.
    $A_c(\omega) = \left[ \frac{e^{-t}}{(-1)^2+\omega^2} (-1\cos(\omega t) + \omega\sin(\omega t)) \right]_{0}^{\infty}$
    As $t \to \infty$, $e^{-t} \to 0$.
    At $t=0$: $\frac{e^0}{1+\omega^2} (-1\cos(0) + \omega\sin(0)) = \frac{1}{1+\omega^2}(-1) = -\frac{1}{1+\omega^2}$.
    $A_c(\omega) = 0 - (-\frac{1}{1+\omega^2}) = \frac{1}{1+\omega^2}$.

    **Fourier Integral:**
    $f(x) = \frac{2}{\pi} \int_{0}^{\infty} A_c(\omega) \cos(\omega x) d\omega = \frac{2}{\pi} \int_{0}^{\infty} \frac{1}{1+\omega^2} \cos(\omega x) d\omega$.

4.  **Function:** $f(x) = \begin{cases} x & \text{if } -a < x < a \\ 0 & \text{otherwise} \end{cases}$. This is an even function.
    **Fourier Cosine Transform $A_c(\omega)$:**
    $A_c(\omega) = \int_{0}^{\infty} f(t) \cos(\omega t) dt = \int_{0}^{a} t \cos(\omega t) dt$.

    Using integration by parts: $\int t \cos(\omega t) dt = \frac{t \sin(\omega t)}{\omega} + \frac{\cos(\omega t)}{\omega^2}$.
    $A_c(\omega) = \left[ \frac{t \sin(\omega t)}{\omega} + \frac{\cos(\omega t)}{\omega^2} \right]_{0}^{a}$
    $A_c(\omega) = \left( \frac{a \sin(\omega a)}{\omega} + \frac{\cos(\omega a)}{\omega^2} \right) - (0 + \frac{\cos(0)}{\omega^2}) = \frac{a \sin(\omega a)}{\omega} + \frac{\cos(\omega a) - 1}{\omega^2}$.

    **Fourier Integral:**
    $f(x) = \frac{2}{\pi} \int_{0}^{\infty} \left( \frac{a \sin(\omega a)}{\omega} + \frac{\cos(\omega a) - 1}{\omega^2} \right) \cos(\omega x) d\omega$.

5.  **Function:** $f(x) = \begin{cases} x & \text{if } 0 < x < \pi \\ 0 & \text{if } x > \pi \end{cases}$. (This definition is for $x>0$, and we assume this is the part for which the Fourier Cosine Integral is applicable as a representation of a potentially larger function).
    **Fourier Cosine Transform $A_c(\omega)$:**
    $A_c(\omega) = \int_{0}^{\infty} f(t) \cos(\omega t) dt = \int_{0}^{\pi} t \cos(\omega t) dt$.

    Using integration by parts (as in Q2, but with limit $\pi$):
    $\int t \cos(\omega t) dt = \frac{t \sin(\omega t)}{\omega} + \frac{\cos(\omega t)}{\omega^2}$.
    $A_c(\omega) = \left[ \frac{t \sin(\omega t)}{\omega} + \frac{\cos(\omega t)}{\omega^2} \right]_{0}^{\pi}$
    $A_c(\omega) = \left( \frac{\pi \sin(\omega \pi)}{\omega} + \frac{\cos(\omega \pi)}{\omega^2} \right) - (0 + \frac{\cos(0)}{\omega^2}) = \frac{\pi \sin(\omega \pi)}{\omega} + \frac{\cos(\omega \pi) - 1}{\omega^2}$.

    **Fourier Cosine Integral:**
    $f(x) = \frac{2}{\pi} \int_{0}^{\infty} \left( \frac{\pi \sin(\omega \pi)}{\omega} + \frac{\cos(\omega \pi) - 1}{\omega^2} \right) \cos(\omega x) d\omega$.

---

### 7. Important Points to Remember

*   **Generalization:** The Fourier Integral is a generalization of the Fourier Series for non-periodic functions over infinite intervals.
*   **Continuous Spectrum:** It represents a function as an integral over a continuous range of frequencies, unlike the discrete frequencies in Fourier Series.
*   **Even/Odd Functions:** For even functions, use the Fourier Cosine Integral. For odd functions, use the Fourier Sine Integral. These simplify calculations.
*   **Existence Condition:** The function must be absolutely integrable ($\int_{-\infty}^{\infty} |f(x)| dx < \infty$) for the Fourier Integral to exist.
*   **Integral Formulas:**
    *   $f(x) = \frac{2}{\pi} \int_{0}^{\infty} A_c(\omega) \cos(\omega x) d\omega$, where $A_c(\omega) = \int_{0}^{\infty} f(t) \cos(\omega t) dt$ (for even $f(x)$ on $(-\infty, \infty)$ or $f(x)$ on $(0, \infty)$).
    *   $f(x) = \frac{2}{\pi} \int_{0}^{\infty} B_s(\omega) \sin(\omega x) d\omega$, where $B_s(\omega) = \int_{0}^{\infty} f(t) \sin(\omega t) dt$ (for odd $f(x)$ on $(-\infty, \infty)$ or $f(x)$ on $(0, \infty)$).
    *   $f(x) = \int_{0}^{\infty} [A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)] d\omega$, where $A(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \cos(\omega t) dt$ and $B(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \sin(\omega t) dt$.
*   **Transforms:** The integrals $A_c(\omega)$, $B_s(\omega)$, $A(\omega)$, and $B(\omega)$ are known as Fourier Transforms (or components of them).
*   **Convergence:** At discontinuities, the Fourier Integral converges to the average of the left and right limits.

---
This concludes the notes on the Fourier Integral. Remember to practice the integral calculations, as they are the core of applying this topic.
