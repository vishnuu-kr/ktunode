---
title: "Continuous time Fourier series - E xponential Fourier series  
representation of periodic signals."
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Frequency domain representation of continuous time signals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe519"
status: "completed"
scrapedAt: "2026-05-23T17:52:22.748Z"
---
# Signals and Systems: Module 2 - Frequency Domain Representation of Continuous-Time Signals

## Topic: Continuous-Time Fourier Series - Exponential Fourier Series Representation of Periodic Signals

This module explores how to represent continuous-time periodic signals in the frequency domain using the Fourier Series. We will focus on the exponential form of the Fourier Series, which is particularly powerful for analysis and computation.

---

### 1. Introduction to Periodic Signals and Frequency Domain Representation

**What is a periodic signal?**
A continuous-time signal $x(t)$ is periodic if there exists a positive constant $T_0$ such that $x(t + T_0) = x(t)$ for all $t$. The smallest such positive $T_0$ is called the fundamental period. The fundamental frequency is given by $\omega_0 = \frac{2\pi}{T_0}$ rad/sec or $f_0 = \frac{1}{T_0}$ Hz.

**Why frequency domain representation?**
Analyzing signals in the frequency domain reveals their constituent frequencies and their amplitudes and phases. This is crucial for understanding:
*   **System Response:** How systems (like filters) affect different frequencies.
*   **Signal Characteristics:** Identifying dominant frequencies, bandwidth, etc.
*   **Signal Processing:** Designing filters, modulation schemes, etc.

**Course Outcomes Alignment:**
*   **CO1 (K2):** Understanding the definition of periodic signals and their fundamental properties is a foundational concept.
*   **CO3 (K3):** This topic directly addresses analyzing signals in the frequency domain.

**Textbook References:**
*   **Oppenheim & Willsky:** Chapters on Fourier Series (likely Chapter 4 or 5 in many editions).
*   **Haykin:** Similar coverage of Fourier Series.

---

### 2. The Trigonometric Fourier Series (Brief Recap)

Before diving into the exponential form, it's helpful to recall the trigonometric Fourier Series representation of a periodic signal $x(t)$ with fundamental period $T_0$:

$x(t) = A_0 + \sum_{k=1}^{\infty} (A_k \cos(k\omega_0 t) + B_k \sin(k\omega_0 t))$

where:
*   $A_0 = \frac{1}{T_0} \int_{T_0} x(t) dt$ (DC component or average value)
*   $A_k = \frac{2}{T_0} \int_{T_0} x(t) \cos(k\omega_0 t) dt$ for $k \ge 1$
*   $B_k = \frac{2}{T_0} \int_{T_0} x(t) \sin(k\omega_0 t) dt$ for $k \ge 1$
*   $\omega_0 = \frac{2\pi}{T_0}$ is the fundamental angular frequency.

**Important Point:** The trigonometric Fourier Series represents a periodic signal as a sum of sinusoids at the fundamental frequency and its harmonics.

---

### 3. The Exponential Fourier Series Representation

The exponential Fourier Series leverages Euler's formula to represent the trigonometric terms in a more compact and computationally convenient form.

**Euler's Formula:**
*   $\cos(\theta) = \frac{e^{j\theta} + e^{-j\theta}}{2}$
*   $\sin(\theta) = \frac{e^{j\theta} - e^{-j\theta}}{2j}$

Substituting these into the trigonometric Fourier Series:

$x(t) = A_0 + \sum_{k=1}^{\infty} \left( A_k \frac{e^{jk\omega_0 t} + e^{-jk\omega_0 t}}{2} + B_k \frac{e^{jk\omega_0 t} - e^{-jk\omega_0 t}}{2j} \right)$

Rearranging and grouping terms with $e^{jk\omega_0 t}$ and $e^{-jk\omega_0 t}$:

$x(t) = A_0 + \sum_{k=1}^{\infty} \left( \frac{A_k - jB_k}{2} \right) e^{jk\omega_0 t} + \sum_{k=1}^{\infty} \left( \frac{A_k + jB_k}{2} \right) e^{-jk\omega_0 t}$

Let's redefine the coefficients. We introduce the complex exponential Fourier series coefficients, denoted by $c_k$:

$x(t) = \sum_{k=-\infty}^{\infty} c_k e^{jk\omega_0 t}$

By comparing the two forms, we can derive the relationship between the $c_k$ coefficients and the trigonometric Fourier Series coefficients:

*   For $k=0$: $c_0 = A_0$ (the DC component)
*   For $k > 0$: $c_k = \frac{A_k - jB_k}{2}$
*   For $k < 0$: Let $m = -k$. Then $e^{-jk\omega_0 t} = e^{jm\omega_0 t}$. The terms in the trigonometric series with $e^{-jk\omega_0 t}$ (where $k > 0$) correspond to the terms with $e^{jm\omega_0 t}$ (where $m > 0$). We have:
    $c_{-k} = \frac{A_k + jB_k}{2}$

**Key Observation:** The coefficients $c_k$ and $c_{-k}$ are complex conjugates if the signal $x(t)$ is real. This means $c_{-k} = c_k^*$.

**Derivation of the Exponential Fourier Series Coefficients ($c_k$)**

The coefficients $c_k$ for the exponential Fourier series can be directly computed using the following formula, without first finding the trigonometric coefficients:

$c_k = \frac{1}{T_0} \int_{T_0} x(t) e^{-jk\omega_0 t} dt$, for all integer values of $k$ ($k = 0, \pm 1, \pm 2, \dots$)

where:
*   $T_0$ is the fundamental period.
*   $\omega_0 = \frac{2\pi}{T_0}$ is the fundamental angular frequency.
*   The integration is performed over any interval of length $T_0$.

**Key Concepts:**
*   **Fourier Series Coefficients ($c_k$):** These complex numbers represent the amplitude and phase of each harmonic component ($e^{jk\omega_0 t}$) in the signal.
*   **Frequency Spectrum:** The set of all $c_k$ values for $k = 0, \pm 1, \pm 2, \dots$ constitutes the frequency spectrum of the periodic signal.
*   **Complex Conjugate Symmetry:** For a real-valued signal $x(t)$, the Fourier series coefficients exhibit conjugate symmetry: $c_{-k} = c_k^*$. This implies that if $c_k = |c_k|e^{j\phi_k}$, then $c_{-k} = |c_k|e^{-j\phi_k}$. The magnitude spectrum is even ($|c_{-k}| = |c_k|$), and the phase spectrum is odd ($\angle c_{-k} = -\angle c_k$).

**Learning Outcomes Alignment:**
*   **CO3 (K3):** This is the core of representing signals in the frequency domain.
*   **CO4 (K3):** Understanding these coefficients is essential for analyzing system behavior with frequency domain methods.

**Textbook References:**
*   **Oppenheim & Willsky:** Chapter 4/5 on Fourier Series, specifically the exponential form.
*   **Haykin:** Similar coverage.
*   **Anand Kumar:** Chapter on Fourier Series.
*   **Lathi:** Chapter on Fourier Series.
*   **Ziemer:** Chapter on Fourier Series.
*   **Ambardar:** Chapter on Fourier Series.
*   **Apte:** Chapter on Fourier Series.

---

### 4. Properties of the Exponential Fourier Series Coefficients

Understanding the properties of $c_k$ helps in predicting the spectrum of a signal and simplifying analysis.

1.  **Linearity:** If $x_1(t)$ has Fourier Series coefficients $c_{1k}$ and $x_2(t)$ has coefficients $c_{2k}$, then $a x_1(t) + b x_2(t)$ has coefficients $a c_{1k} + b c_{2k}$.
    *   *Significance:* Allows us to analyze composite signals by analyzing their components.

2.  **Time Shifting:** If $x(t)$ has coefficients $c_k$, then $x(t - t_0)$ has coefficients $c_k e^{-jk\omega_0 t_0}$.
    *   *Significance:* Time shifting introduces a linear phase shift in the frequency domain, proportional to the shift and the harmonic number. $\angle c_k$ changes by $-k\omega_0 t_0$.

3.  **Time Scaling:** If $x(t)$ has coefficients $c_k$ with fundamental frequency $\omega_0$, and we scale $x(t)$ by $a$ to get $x(at)$, the new fundamental period will change. If $a$ is not a rational number such that the periodicity is maintained, the signal might become aperiodic. If $a$ maintains periodicity with $T_0'$, then $\omega_0' = a\omega_0$. The new coefficients are:
    $c_k' = \frac{1}{T_0'} \int_{T_0'} x(at) e^{-jk\omega_0' t} dt$
    Let $\tau = at$, $d\tau = a dt$. $T_0' = aT_0$.
    $c_k' = \frac{1}{aT_0} \int_{aT_0} x(\tau) e^{-jk(a\omega_0) ( \tau/a)} \frac{d\tau}{a} = \frac{1}{a^2 T_0} \int_{aT_0} x(\tau) e^{-jk\omega_0 \tau} d\tau$
    This shows that time scaling is more complex and often leads to changes in the coefficients and fundamental frequency. (Note: This property is less commonly emphasized for Fourier Series due to periodicity changes, but the principle is important for Fourier Transforms).

4.  **Conjugation:** If $x(t)$ has coefficients $c_k$, then $x^*(t)$ has coefficients $c_k^*$.
    *   *Significance:* If $x(t)$ is real, then $x^*(t) = x(t)$, and this implies $c_k^* = c_k$, which means $c_k$ must be real. This is only true for the DC component ($c_0 = A_0$). For $k \ne 0$, if $x(t)$ is real, we must have $c_{-k} = c_k^*$.

5.  **Conjugate Symmetry (for Real Signals):** If $x(t)$ is real, then $c_{-k} = c_k^*$.
    *   *Proof:*
        $c_{-k} = \frac{1}{T_0} \int_{T_0} x(t) e^{-j(-k)\omega_0 t} dt = \frac{1}{T_0} \int_{T_0} x(t) e^{jk\omega_0 t} dt$
        $c_k^* = \left(\frac{1}{T_0} \int_{T_0} x(t) e^{-jk\omega_0 t} dt\right)^* = \frac{1}{T_0} \int_{T_0} x^*(t) e^{jk\omega_0 t} dt$
        Since $x(t)$ is real, $x^*(t) = x(t)$. So, $c_k^* = \frac{1}{T_0} \int_{T_0} x(t) e^{jk\omega_0 t} dt$.
        Thus, $c_{-k} = c_k^*$ for real $x(t)$.

6.  **Time Reversal:** If $x(t)$ has coefficients $c_k$, then $x(-t)$ has coefficients $c_{-k}$.
    *   *Significance:* Time reversal in the time domain corresponds to reversing the order of harmonic coefficients in the frequency domain. If $x(t)$ is real, this means the magnitude spectrum remains the same ($|c_{-k}| = |c_k^*| = |c_k|$), and the phase spectrum is negated ($\angle c_{-k} = \angle c_k^* = -\angle c_k$).

7.  **Even Symmetry:** If $x(t)$ is an even function ($x(-t) = x(t)$), then $c_{-k} = c_k$.
    *   *Proof:* From time reversal property, $x(-t)$ has coefficients $c_{-k}$. Since $x(-t)=x(t)$, the coefficients must be the same: $c_{-k} = c_k$. Combined with conjugate symmetry ($c_{-k}=c_k^*$) for real signals, this implies $c_k = c_k^*$, so $c_k$ must be real.
    *   *Significance:* For even real signals, the Fourier series coefficients are purely real and symmetric ($c_k = c_{-k}$). The series will only contain cosine terms (in the trigonometric form) or $e^{jk\omega_0 t} + e^{-jk\omega_0 t}$ terms.

8.  **Odd Symmetry:** If $x(t)$ is an odd function ($x(-t) = -x(t)$), then $c_{-k} = -c_k$.
    *   *Proof:* From time reversal property, $x(-t)$ has coefficients $c_{-k}$. Since $x(-t)=-x(t)$, we have $c_{-k} = -c_k$. Combined with conjugate symmetry ($c_{-k}=c_k^*$) for real signals, this implies $-c_k = c_k^*$. If $c_k = a + jb$, then $-(a+jb) = (a-jb) \Rightarrow -a-jb = a-jb \Rightarrow -a = a \Rightarrow a=0$. Thus, $c_k$ must be purely imaginary.
    *   *Significance:* For odd real signals, the Fourier series coefficients are purely imaginary and anti-symmetric ($c_{-k} = -c_k$). The series will only contain sine terms (in the trigonometric form) or $e^{jk\omega_0 t} - e^{-jk\omega_0 t}$ terms.

9.  **Parseval's Relation (for Fourier Series):** For a periodic signal $x(t)$ with Fourier Series coefficients $c_k$:
    $\frac{1}{T_0} \int_{T_0} |x(t)|^2 dt = \sum_{k=-\infty}^{\infty} |c_k|^2$
    *   *Significance:* This fundamental relation states that the average power of the signal over one period is equal to the sum of the squared magnitudes of its Fourier Series coefficients. It connects the energy/power in the time domain to the energy/power in the frequency domain.

**Course Outcomes Alignment:**
*   **CO3 (K3):** These properties help understand the frequency content and its behavior under transformations.
*   **CO1 (K2):** Properties like even/odd symmetry relate to signal classification.

**Textbook References:**
*   **Oppenheim & Willsky:** Often detailed derivations of these properties.
*   **Haykin:** Similar coverage.
*   **Lathi:** Detailed explanation of properties.
*   **Anand Kumar:** Properties of Fourier Series.
*   **Ziemer:** Properties of Fourier Series.
*   **Ambardar:** Properties.
*   **Apte:** Properties.

---

### 5. Examples of Exponential Fourier Series Calculation

Let's work through some common examples.

**Example 1: Square Wave**
Consider a square wave $x(t)$ with amplitude $A$, period $T_0$, and is ON for $T_0/2$ and OFF for $T_0/2$. Assume it's centered around $t=0$ and positive for $|t| < T_0/4$.

$x(t) = \begin{cases} A & -\frac{T_0}{4} < t < \frac{T_0}{4} \\ 0 & \frac{T_0}{4} < |t| < \frac{T_0}{2} \end{cases}$

Fundamental frequency: $\omega_0 = \frac{2\pi}{T_0}$

Calculate $c_k$:
$c_k = \frac{1}{T_0} \int_{-T_0/2}^{T_0/2} x(t) e^{-jk\omega_0 t} dt$

Due to symmetry, we can integrate from $-T_0/4$ to $T_0/4$ where $x(t)=A$.
$c_k = \frac{1}{T_0} \int_{-T_0/4}^{T_0/4} A e^{-jk\omega_0 t} dt$

For $k=0$ (DC component):
$c_0 = \frac{1}{T_0} \int_{-T_0/4}^{T_0/4} A dt = \frac{A}{T_0} [t]_{-T_0/4}^{T_0/4} = \frac{A}{T_0} (\frac{T_0}{4} - (-\frac{T_0}{4})) = \frac{A}{T_0} \frac{T_0}{2} = \frac{A}{2}$

For $k \ne 0$:
$c_k = \frac{A}{T_0} \left[ \frac{e^{-jk\omega_0 t}}{-jk\omega_0} \right]_{-T_0/4}^{T_0/4} = \frac{A}{T_0} \left( \frac{e^{-jk\omega_0 (T_0/4)} - e^{-jk\omega_0 (-T_0/4)}}{-jk\omega_0} \right)$
Substitute $\omega_0 = \frac{2\pi}{T_0}$:
$c_k = \frac{A}{T_0} \left( \frac{e^{-jk(2\pi/T_0)(T_0/4)} - e^{jk(2\pi/T_0)(T_0/4)}}{-jk(2\pi/T_0)} \right) = \frac{A}{T_0} \left( \frac{e^{-jk\pi/2} - e^{jk\pi/2}}{-jk(2\pi/T_0)} \right)$
$c_k = \frac{A}{T_0} \left( \frac{-2j \sin(k\pi/2)}{-jk(2\pi/T_0)} \right) = \frac{A}{T_0} \left( \frac{2 \sin(k\pi/2)}{k(2\pi/T_0)} \right) = \frac{A}{T_0} \frac{T_0}{2\pi} \frac{2 \sin(k\pi/2)}{k}$
$c_k = \frac{A}{2\pi k} 2 \sin(k\pi/2) = \frac{A}{\pi k} \sin(k\pi/2)$

Let's look at values of $\sin(k\pi/2)$ for different $k$:
*   $k=1: \sin(\pi/2) = 1 \implies c_1 = \frac{A}{\pi}$
*   $k=2: \sin(\pi) = 0 \implies c_2 = 0$
*   $k=3: \sin(3\pi/2) = -1 \implies c_3 = -\frac{A}{3\pi}$
*   $k=4: \sin(2\pi) = 0 \implies c_4 = 0$
*   $k=5: \sin(5\pi/2) = 1 \implies c_5 = \frac{A}{5\pi}$

So, $c_k = \begin{cases} \frac{A}{2} & k=0 \\ \frac{A}{\pi k} \sin(k\pi/2) & k \ne 0 \end{cases}$
This can also be written as:
$c_k = \begin{cases} \frac{A}{2} & k=0 \\ 0 & k \text{ is even, } k \ne 0 \\ \frac{A}{\pi k} & k \text{ is odd, } k= \pm 1, \pm 5, \pm 9, \dots \\ -\frac{A}{\pi k} & k \text{ is odd, } k= \pm 3, \pm 7, \pm 11, \dots \end{cases}$

Since $x(t)$ is real and even, we expect $c_{-k} = c_k^* = c_k$ (real coefficients). Let's check for $k=1$:
$c_1 = \frac{A}{\pi}$.
$c_{-1} = \frac{A}{\pi (-1)} \sin(-\pi/2) = \frac{A}{-\pi} (-1) = \frac{A}{\pi}$. This matches $c_1$.

**Example 2: Full-Wave Rectified Sine Wave**
Consider $x(t) = |\sin(\omega_0 t)|$, with $\omega_0 = \frac{2\pi}{T_0}$ where $T_0$ is the period of $\sin(\omega_0 t)$. However, $|\sin(\omega_0 t)|$ has a period of $T = T_0/\pi$? No, it has a period of $\pi/\omega_0$. Let's redefine $T_0$ as the period of $x(t)$.
Let $x(t) = |\sin(t)|$. The period of $\sin(t)$ is $2\pi$. The period of $|\sin(t)|$ is $\pi$. So, $T_0 = \pi$.
$\omega_0 = \frac{2\pi}{T_0} = \frac{2\pi}{\pi} = 2$.

$x(t) = \begin{cases} \sin(t) & 0 \le t \le \pi \\ -\sin(t) & \pi < t < 2\pi \end{cases}$
This is an even function around $t=0$.
$x(t) = \sin(t)$ for $0 \le t \le \pi$. $T_0 = \pi$. $\omega_0 = 2$.

$c_k = \frac{1}{\pi} \int_{0}^{\pi} \sin(t) e^{-jk(2) t} dt$
$c_k = \frac{1}{\pi} \int_{0}^{\pi} \frac{e^{jt} - e^{-jt}}{2j} e^{-j2kt} dt$
$c_k = \frac{1}{2j\pi} \int_{0}^{\pi} (e^{j(1-2k)t} - e^{-j(1+2k)t}) dt$

Case $k=0$:
$c_0 = \frac{1}{\pi} \int_{0}^{\pi} \sin(t) dt = \frac{1}{\pi} [-\cos(t)]_{0}^{\pi} = \frac{1}{\pi} (-\cos(\pi) - (-\cos(0))) = \frac{1}{\pi} (-(-1) - (-1)) = \frac{1}{\pi} (1+1) = \frac{2}{\pi}$ (DC component)

Case $k \ne 0$:
$c_k = \frac{1}{2j\pi} \left[ \frac{e^{j(1-2k)t}}{j(1-2k)} - \frac{e^{-j(1+2k)t}}{-j(1+2k)} \right]_{0}^{\pi}$
$c_k = \frac{1}{2j\pi} \left[ \frac{e^{j(1-2k)\pi}}{j(1-2k)} + \frac{e^{-j(1+2k)\pi}}{j(1+2k)} \right] - \frac{1}{2j\pi} \left[ \frac{1}{j(1-2k)} + \frac{1}{j(1+2k)} \right]$
Use $e^{j n \pi} = (-1)^n$:
$e^{j(1-2k)\pi} = e^{j\pi} e^{-j2k\pi} = (-1) \cdot 1 = -1$
$e^{-j(1+2k)\pi} = e^{-j\pi} e^{-j2k\pi} = (-1) \cdot 1 = -1$

$c_k = \frac{1}{2j\pi} \left[ \frac{-1}{j(1-2k)} + \frac{-1}{j(1+2k)} \right] - \frac{1}{2j\pi} \left[ \frac{1}{j(1-2k)} + \frac{1}{j(1+2k)} \right]$
$c_k = \frac{1}{2j\pi} \left[ \frac{-1 - (1)}{j(1-2k)} + \frac{-1 - (1)}{j(1+2k)} \right]$
$c_k = \frac{1}{2j\pi} \left[ \frac{-2}{j(1-2k)} + \frac{-2}{j(1+2k)} \right] = \frac{1}{2j\pi} \left[ \frac{2}{j(2k-1)} + \frac{2}{j(1+2k)} \right]$
$c_k = \frac{1}{j^2\pi} \left[ \frac{1}{2k-1} + \frac{1}{2k+1} \right] = -\frac{1}{\pi} \left[ \frac{(2k+1) + (2k-1)}{(2k-1)(2k+1)} \right]$
$c_k = -\frac{1}{\pi} \left[ \frac{4k}{4k^2-1} \right] = -\frac{4k}{\pi(4k^2-1)}$

Let's check for $k=1$:
$c_1 = -\frac{4(1)}{\pi(4(1)^2-1)} = -\frac{4}{3\pi}$
Let's check for $k=2$:
$c_2 = -\frac{4(2)}{\pi(4(2)^2-1)} = -\frac{8}{\pi(15)} = -\frac{8}{15\pi}$

The Fourier series is: $x(t) = \frac{2}{\pi} - \sum_{k=-\infty, k\ne0}^{\infty} \frac{4k}{\pi(4k^2-1)} e^{j2kt}$

**Example 3: Sawtooth Wave**
$x(t) = \frac{A}{T_0} t$, for $-\frac{T_0}{2} < t < \frac{T_0}{2}$. This is an odd function.
$T_0$, $\omega_0 = \frac{2\pi}{T_0}$.

For an odd function, $c_0=0$ and $c_k$ should be purely imaginary, with $c_{-k} = -c_k$.
$c_k = \frac{1}{T_0} \int_{-T_0/2}^{T_0/2} \frac{A}{T_0} t e^{-jk\omega_0 t} dt = \frac{A}{T_0^2} \int_{-T_0/2}^{T_0/2} t e^{-jk\omega_0 t} dt$

We can use integration by parts: $\int u dv = uv - \int v du$
Let $u = t$, $dv = e^{-jk\omega_0 t} dt$.
Then $du = dt$, $v = \frac{e^{-jk\omega_0 t}}{-jk\omega_0}$.

$c_k = \frac{A}{T_0^2} \left[ t \frac{e^{-jk\omega_0 t}}{-jk\omega_0} \right]_{-T_0/2}^{T_0/2} - \int_{-T_0/2}^{T_0/2} \frac{e^{-jk\omega_0 t}}{-jk\omega_0} dt$

The first term:
$\left[ t \frac{e^{-jk\omega_0 t}}{-jk\omega_0} \right]_{-T_0/2}^{T_0/2} = \frac{T_0}{2} \frac{e^{-jk\omega_0 T_0/2}}{-jk\omega_0} - (-\frac{T_0}{2}) \frac{e^{jk\omega_0 T_0/2}}{-jk\omega_0}$
Substitute $\omega_0 = \frac{2\pi}{T_0}$:
$e^{-jk\omega_0 T_0/2} = e^{-jk(2\pi/T_0)T_0/2} = e^{-jk\pi} = (-1)^k$
$e^{jk\omega_0 T_0/2} = e^{jk\pi} = (-1)^k$
So, $\frac{T_0}{2} \frac{(-1)^k}{-jk\omega_0} - (-\frac{T_0}{2}) \frac{(-1)^k}{-jk\omega_0} = \frac{T_0}{2} \frac{(-1)^k}{-jk\omega_0} - \frac{T_0}{2} \frac{(-1)^k}{jk\omega_0} = 0$ (as expected for an odd function, the evaluation at limits should cancel if correctly handled, or the integral of $t \cos(...)$ terms would be zero).

The second term:
$- \int_{-T_0/2}^{T_0/2} \frac{e^{-jk\omega_0 t}}{-jk\omega_0} dt = \frac{1}{jk\omega_0} \int_{-T_0/2}^{T_0/2} e^{-jk\omega_0 t} dt$
$= \frac{1}{jk\omega_0} \left[ \frac{e^{-jk\omega_0 t}}{-jk\omega_0} \right]_{-T_0/2}^{T_0/2} = \frac{1}{-j^2 k^2 \omega_0^2} [e^{-jk\omega_0 T_0/2} - e^{jk\omega_0 T_0/2}]$
$= \frac{1}{k^2 \omega_0^2} [(-1)^k - (-1)^k] = 0$ for $k \ne 0$.

This indicates there might be a mistake in the setup or calculation for the sawtooth. Let's reconsider the integration limits and the definition of the sawtooth.
A common sawtooth wave is $x(t) = \frac{At}{T_0}$ for $-\frac{T_0}{2} < t < \frac{T_0}{2}$ and periodic.

Let's use a simpler integral for $c_k$:
$c_k = \frac{1}{T_0} \int_{-T_0/2}^{T_0/2} \frac{A}{T_0} t e^{-jk\omega_0 t} dt$
$\int t e^{-j\alpha t} dt = t \frac{e^{-j\alpha t}}{-j\alpha} - \int \frac{e^{-j\alpha t}}{-j\alpha} dt = -\frac{t}{j\alpha} e^{-j\alpha t} - \frac{1}{j^2\alpha^2} e^{-j\alpha t} = \frac{jt}{\alpha} e^{-j\alpha t} + \frac{1}{\alpha^2} e^{-j\alpha t}$
where $\alpha = k\omega_0$.

$c_k = \frac{A}{T_0^2} \left[ \frac{jt}{k\omega_0} e^{-jk\omega_0 t} + \frac{1}{(k\omega_0)^2} e^{-jk\omega_0 t} \right]_{-T_0/2}^{T_0/2}$
$c_k = \frac{A}{T_0^2} \left[ \left(\frac{j(T_0/2)}{k\omega_0} e^{-jk\pi} + \frac{1}{k^2\omega_0^2} e^{-jk\pi}\right) - \left(\frac{j(-T_0/2)}{k\omega_0} e^{jk\pi} + \frac{1}{k^2\omega_0^2} e^{jk\pi}\right) \right]$
$c_k = \frac{A}{T_0^2} \left[ \left(\frac{jT_0}{2k\omega_0} (-1)^k + \frac{1}{k^2\omega_0^2} (-1)^k\right) - \left(\frac{-jT_0}{2k\omega_0} (-1)^k + \frac{1}{k^2\omega_0^2} (-1)^k\right) \right]$
Substitute $\omega_0 = \frac{2\pi}{T_0}$: $\frac{T_0}{k\omega_0} = \frac{T_0}{k(2\pi/T_0)} = \frac{T_0^2}{2k\pi}$. $\frac{1}{k^2\omega_0^2} = \frac{T_0^2}{4k^2\pi^2}$.
$c_k = \frac{A}{T_0^2} \left[ \left(\frac{j T_0^2}{4k\pi} (-1)^k + \frac{T_0^2}{4k^2\pi^2} (-1)^k\right) - \left(\frac{-j T_0^2}{4k\pi} (-1)^k + \frac{T_0^2}{4k^2\pi^2} (-1)^k\right) \right]$
$c_k = \frac{A}{T_0^2} \left[ \frac{j T_0^2}{4k\pi} (-1)^k - \frac{-j T_0^2}{4k\pi} (-1)^k \right]$
$c_k = \frac{A}{T_0^2} \frac{j T_0^2}{2k\pi} (-1)^k = \frac{Aj}{2k\pi} (-1)^k$
$c_k = \frac{A j (-1)^k}{2k\pi}$

For $k=0$, $c_0 = \frac{1}{T_0} \int_{-T_0/2}^{T_0/2} \frac{A}{T_0} t dt = \frac{A}{T_0^2} [\frac{t^2}{2}]_{-T_0/2}^{T_0/2} = \frac{A}{T_0^2} (\frac{T_0^2}{8} - \frac{T_0^2}{8}) = 0$. This is correct as it's an odd function.

So, $c_k = \frac{Aj(-1)^k}{2k\pi}$ for $k \ne 0$.
Let's check properties:
$c_{-k} = \frac{Aj(-1)^{-k}}{2(-k)\pi} = \frac{Aj(-1)^k}{-2k\pi} = - \frac{Aj(-1)^k}{2k\pi} = -c_k$. This holds for odd functions.
The coefficients are purely imaginary, as expected.

**Important Point:** Careful evaluation of integrals and correct application of Euler's formula are key to accurate Fourier Series calculations.

---

### 6. Interpretation of the Frequency Spectrum

The set of coefficients $\{c_k\}$ defines the frequency spectrum of the periodic signal $x(t)$.

*   **Amplitude Spectrum:** $|c_k|$ vs. $k\omega_0$. For real signals, $|c_k|$ is an even function of $k$.
*   **Phase Spectrum:** $\angle c_k$ vs. $k\omega_0$. For real signals, $\angle c_k$ is an odd function of $k$.

**Example: Square Wave Spectrum**
$c_0 = A/2$
$c_k = \frac{A}{\pi k} \sin(k\pi/2)$ for $k \ne 0$.

*   $k=0$: $c_0 = A/2$ (DC component)
*   $k=1$: $c_1 = A/\pi$. Magnitude $A/\pi$, phase $0^\circ$.
*   $k=2$: $c_2 = 0$. No component.
*   $k=3$: $c_3 = -A/(3\pi)$. Magnitude $A/(3\pi)$, phase $180^\circ$ or $\pi$ rad.
*   $k=4$: $c_4 = 0$.
*   $k=5$: $c_5 = A/(5\pi)$. Magnitude $A/(5\pi)$, phase $0^\circ$.

The amplitude spectrum shows that the square wave is composed of a DC component, a fundamental frequency component, and odd harmonics at decreasing amplitudes ($\frac{1}{k}$ dependence for odd $k$). The even harmonics are absent. The phase spectrum is $0$ for odd $k$ where $\sin(k\pi/2) > 0$ and $\pi$ for odd $k$ where $\sin(k\pi/2) < 0$.

**Course Outcomes Alignment:**
*   **CO3 (K3):** This is about interpreting the results of the Fourier Series analysis.

---

### 7. Convergence of the Fourier Series

A periodic signal can be represented by its Fourier series if it satisfies certain conditions, known as Dirichlet conditions:

1.  **Number of discontinuities:** The signal must have a finite number of discontinuities in one period.
2.  **Number of maxima/minima:** The signal must have a finite number of maxima and minima in one period.
3.  **Absolute integrability:** The integral of $|x(t)|$ over one period must be finite. $\int_{T_0} |x(t)| dt < \infty$.

If these conditions are met:
*   At points of continuity, the Fourier series converges to $x(t)$.
*   At points of discontinuity, the Fourier series converges to the average of the left-hand and right-hand limits: $\frac{x(t^+) + x(t^-)}{2}$. This is known as Gibbs' phenomenon (overshoot near discontinuities).

**Course Outcomes Alignment:**
*   **CO3 (K3):** Understanding the conditions under which the representation is valid.

**Textbook References:**
*   **Oppenheim & Willsky:** Discusses convergence.
*   **Haykin:** Discusses convergence.

---

### 8. Practice Questions and Exercises

**Question 1:**
Find the exponential Fourier series coefficients for the periodic signal $x(t)$ with period $T_0 = 2$ and defined as $x(t) = \sin(\pi t)$ for $0 \le t \le 1$, and $x(t) = 0$ for $1 < t < 2$.

**Answer 1:**
The signal is $x(t) = \sin(\pi t)$ for $0 \le t \le 1$, and $0$ for $1 < t < 2$.
The period is $T_0 = 2$. The fundamental frequency is $\omega_0 = \frac{2\pi}{T_0} = \frac{2\pi}{2} = \pi$.
The Fourier series is $x(t) = \sum_{k=-\infty}^{\infty} c_k e^{jk\omega_0 t} = \sum_{k=-\infty}^{\infty} c_k e^{jk\pi t}$.

$c_k = \frac{1}{T_0} \int_{T_0} x(t) e^{-jk\omega_0 t} dt = \frac{1}{2} \int_{0}^{2} x(t) e^{-jk\pi t} dt$
$c_k = \frac{1}{2} \int_{0}^{1} \sin(\pi t) e^{-jk\pi t} dt + \frac{1}{2} \int_{1}^{2} 0 \cdot e^{-jk\pi t} dt$
$c_k = \frac{1}{2} \int_{0}^{1} \frac{e^{j\pi t} - e^{-j\pi t}}{2j} e^{-jk\pi t} dt$
$c_k = \frac{1}{4j} \int_{0}^{1} (e^{j\pi(1-k)t} - e^{-j\pi(1+k)t}) dt$

For $k=0$:
$c_0 = \frac{1}{2} \int_{0}^{1} \sin(\pi t) dt = \frac{1}{2} [-\frac{\cos(\pi t)}{\pi}]_{0}^{1} = \frac{1}{2} (-\frac{\cos(\pi)}{\pi} - (-\frac{\cos(0)}{\pi})) = \frac{1}{2} (-\frac{-1}{\pi} + \frac{1}{\pi}) = \frac{1}{2} (\frac{2}{\pi}) = \frac{1}{\pi}$

For $k \ne 0$:
$c_k = \frac{1}{4j} \left[ \frac{e^{j\pi(1-k)t}}{j\pi(1-k)} - \frac{e^{-j\pi(1+k)t}}{-j\pi(1+k)} \right]_{0}^{1}$
$c_k = \frac{1}{4j\pi} \left[ \frac{e^{j\pi(1-k)}}{1-k} + \frac{e^{-j\pi(1+k)}}{1+k} \right]_{0}^{1}$
$c_k = \frac{1}{4j\pi} \left[ \left(\frac{e^{j\pi(1-k)}}{1-k} + \frac{e^{-j\pi(1+k)}}{1+k}\right) - \left(\frac{1}{1-k} + \frac{1}{1+k}\right) \right]$

We know $e^{j\pi(1-k)} = e^{j\pi}e^{-jk\pi} = (-1)(-1)^k = (-1)^{k+1}$.
And $e^{-j\pi(1+k)} = e^{-j\pi}e^{-jk\pi} = (-1)(-1)^k = (-1)^{k+1}$.

$c_k = \frac{1}{4j\pi} \left[ \frac{(-1)^{k+1}}{1-k} + \frac{(-1)^{k+1}}{1+k} - \left(\frac{1+k + 1-k}{(1-k)(1+k)}\right) \right]$
$c_k = \frac{1}{4j\pi} \left[ (-1)^{k+1} \left(\frac{1}{1-k} + \frac{1}{1+k}\right) - \frac{2}{1-k^2} \right]$
$c_k = \frac{1}{4j\pi} \left[ (-1)^{k+1} \left(\frac{1+k + 1-k}{1-k^2}\right) - \frac{2}{1-k^2} \right]$
$c_k = \frac{1}{4j\pi} \left[ \frac{2(-1)^{k+1}}{1-k^2} - \frac{2}{1-k^2} \right] = \frac{2}{4j\pi(1-k^2)} [(-1)^{k+1} - 1]$
$c_k = \frac{1}{2j\pi(1-k^2)} [(-1)^{k+1} - 1]$

If $k$ is even, $k+1$ is odd. $(-1)^{k+1} = -1$.
$c_k = \frac{1}{2j\pi(1-k^2)} [-1 - 1] = \frac{-2}{2j\pi(1-k^2)} = \frac{-1}{j\pi(1-k^2)} = \frac{j}{\pi(1-k^2)}$

If $k$ is odd, $k+1$ is even. $(-1)^{k+1} = 1$.
$c_k = \frac{1}{2j\pi(1-k^2)} [1 - 1] = 0$

So, for $k \ne 0$:
$c_k = \begin{cases} \frac{j}{\pi(1-k^2)} & k \text{ is even} \\ 0 & k \text{ is odd} \end{cases}$

Final coefficients:
$c_0 = \frac{1}{\pi}$
$c_k = \begin{cases} \frac{j}{\pi(1-k^2)} & k \text{ is even, } k \ne 0 \\ 0 & k \text{ is odd} \end{cases}$

**Question 2:**
What property of a real periodic signal $x(t)$ leads to its Fourier Series coefficients satisfying $c_k = c_{-k}$?
**(a)** Odd symmetry
**(b)** Even symmetry
**(c)** Both even and odd symmetry
**(d)** Neither even nor odd symmetry

**Answer 2:**
**(b)** Even symmetry.
For a real signal, $c_{-k} = c_k^*$. For $c_k = c_{-k}$, we need $c_k = c_k^*$, which means $c_k$ must be real. An even function's Fourier series coefficients are real and symmetric ($c_k = c_{-k}$).

**Question 3:**
Calculate the average power of the square wave described in Example 1 (amplitude $A$, period $T_0$, ON for $T_0/2$) using Parseval's relation.

**Answer 3:**
From Example 1, $c_0 = A/2$ and $c_k = \frac{A}{\pi k} \sin(k\pi/2)$ for $k \ne 0$.
The average power is $\frac{1}{T_0} \int_{T_0} |x(t)|^2 dt = \sum_{k=-\infty}^{\infty} |c_k|^2$.
The square wave is $A$ for half the period and $0$ for the other half.
Average power = $\frac{1}{T_0} \int_{-T_0/4}^{T_0/4} A^2 dt = \frac{1}{T_0} [A^2 t]_{-T_0/4}^{T_0/4} = \frac{1}{T_0} (A^2 \frac{T_0}{4} - A^2 (-\frac{T_0}{4})) = \frac{1}{T_0} A^2 \frac{T_0}{2} = \frac{A^2}{2}$.

Now, using Parseval's relation:
$\sum_{k=-\infty}^{\infty} |c_k|^2 = |c_0|^2 + \sum_{k \ne 0} |c_k|^2$
$|c_0|^2 = (A/2)^2 = A^2/4$.
For $k \ne 0$, $c_k = \frac{A}{\pi k} \sin(k\pi/2)$.
$c_k$ is zero for even $k$. For odd $k$:
$c_k = \frac{A}{\pi k}$ if $k = \pm 1, \pm 5, \dots$
$c_k = -\frac{A}{\pi k}$ if $k = \pm 3, \pm 7, \dots$
So, $|c_k| = \frac{A}{|\pi k|}$ for odd $k$.

$\sum_{k=-\infty}^{\infty} |c_k|^2 = |c_0|^2 + \sum_{k \text{ odd}, k \ne 0} |c_k|^2$
$= \frac{A^2}{4} + \sum_{m=-\infty, m \ne 0}^{\infty} |\frac{A}{\pi (2m-1)} \sin((2m-1)\pi/2)|^2$
$= \frac{A^2}{4} + \sum_{m=-\infty, m \ne 0}^{\infty} (\frac{A}{\pi(2m-1)})^2 |\sin((2m-1)\pi/2)|^2$
$\sin((2m-1)\pi/2)$ is $\pm 1$. So $|\sin((2m-1)\pi/2)|^2 = 1$.
$= \frac{A^2}{4} + \sum_{m=-\infty, m \ne 0}^{\infty} \frac{A^2}{\pi^2 (2m-1)^2}$
We can write this as:
$= \frac{A^2}{4} + 2 \sum_{m=1}^{\infty} \frac{A^2}{\pi^2 (2m-1)^2}$ (considering positive and negative odd $k$)
We know that $\sum_{m=1}^{\infty} \frac{1}{(2m-1)^2} = \frac{\pi^2}{8}$.
$= \frac{A^2}{4} + 2 \frac{A^2}{\pi^2} \sum_{m=1}^{\infty} \frac{1}{(2m-1)^2}$
$= \frac{A^2}{4} + 2 \frac{A^2}{\pi^2} (\frac{\pi^2}{8}) = \frac{A^2}{4} + \frac{A^2}{4} = \frac{A^2}{2}$.
This matches the direct calculation.

---

### 9. Important Points to Remember

*   The exponential Fourier series provides a compact representation of periodic signals as a sum of complex exponentials.
*   The coefficients $c_k$ are calculated using $c_k = \frac{1}{T_0} \int_{T_0} x(t) e^{-jk\omega_0 t} dt$.
*   For real signals, $c_{-k} = c_k^*$, meaning the magnitude spectrum is even and the phase spectrum is odd.
*   Even signals have real coefficients ($c_k = c_{-k}$), and odd signals have purely imaginary coefficients ($c_{-k} = -c_k$).
*   Parseval's relation ($\frac{1}{T_0} \int_{T_0} |x(t)|^2 dt = \sum_{k=-\infty}^{\infty} |c_k|^2$) is crucial for relating time-domain power to frequency-domain power.
*   Dirichlet conditions ensure the convergence of the Fourier series.

---

### 10. Linking to Course Outcomes

*   **CO3 (K3):** This entire topic directly addresses analyzing signals in the frequency domain using the Fourier Series, identifying its components and their magnitudes/phases.
*   **CO1 (K2):** Understanding periodic signals and their fundamental properties is a prerequisite for this analysis. Properties like symmetry also tie into signal classification.
*   **CO4 (K3):** The ability to calculate and interpret Fourier Series coefficients is foundational for understanding how LTI systems process signals in the frequency domain (e.g., system frequency response).

This comprehensive coverage of the exponential Fourier series for continuous-time periodic signals provides a strong basis for further topics in signals and systems, particularly frequency domain analysis and system characterization.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
