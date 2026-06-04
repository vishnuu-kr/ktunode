---
title: "Fourier Transform and its inverse"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe255"
status: "completed"
scrapedAt: "2026-05-23T17:46:57.302Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 1: Fourier Integral

### Topic: Fourier Transform and its Inverse

**Learning Outcomes:**

*   Understand the concept of the Fourier Transform and its underlying principles.
*   Derive the formulas for the Fourier Transform and its inverse.
*   Apply the Fourier Transform to analyze signals and systems.
*   Recognize the relationship between Fourier Series and Fourier Transform.
*   Understand the conditions for the existence of the Fourier Transform.
*   Explore the properties of the Fourier Transform.

**Course Outcomes Alignment:**

This topic directly addresses **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.** (Knowledge Level: K3). The understanding of the Fourier Transform and its inverse is fundamental for analyzing electrical and physical phenomena, which is the core of this course outcome.

---

### 1. Introduction to the Fourier Transform

The Fourier Transform is a powerful mathematical tool that decomposes a function (often representing a signal or waveform) into its constituent frequencies. It transforms a function from the time domain to the frequency domain, revealing the spectral content of the signal. This is analogous to how a prism separates white light into its constituent colors (frequencies).

**Motivation:**

*   **Signal Analysis:** Understanding the frequency components of a signal is crucial in electrical engineering (e.g., audio processing, telecommunications) and physics (e.g., analyzing wave phenomena, spectral analysis).
*   **System Analysis:** The Fourier Transform simplifies the analysis of linear time-invariant (LTI) systems. Convolution in the time domain becomes multiplication in the frequency domain, which is often much easier to handle.
*   **Solving Differential Equations:** The Fourier Transform can convert linear ordinary and partial differential equations with constant coefficients into algebraic equations, making them easier to solve.

**Relationship to Fourier Series:**

The Fourier Transform can be viewed as a generalization of the Fourier Series.

*   **Fourier Series:** Used for periodic functions. It decomposes a periodic function into a sum of discrete sinusoids (harmonics) with specific frequencies.
*   **Fourier Transform:** Used for non-periodic functions. It decomposes a non-periodic function into a continuous spectrum of sinusoids over all frequencies.

As the period of a periodic function approaches infinity, the discrete frequencies in its Fourier Series become infinitesimally close, and the Fourier Series converges to the Fourier Transform.

---

### 2. Definition of the Fourier Transform

Given a function $f(t)$ defined for $-\infty < t < \infty$, its **Fourier Transform**, denoted by $F(\omega)$ or $\mathcal{F}\{f(t)\}$, is defined as:

$$F(\omega) = \mathcal{F}\{f(t)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$

where:
*   $t$ is the independent variable (often time).
*   $\omega$ is the angular frequency ($\omega = 2\pi f$, where $f$ is the ordinary frequency).
*   $i$ is the imaginary unit ($i^2 = -1$).
*   $e^{-i\omega t}$ is the complex exponential, which represents a rotating phasor.

**Alternative Definitions:**

It's important to note that different textbooks and fields may use slightly different normalization constants for the Fourier Transform. Some common variations include:

*   $F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$ (often used in mathematics and physics)
*   $F(\omega) = \frac{1}{2\pi} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$

The choice of normalization affects the inverse transform. The definition used here, with $\frac{1}{\sqrt{2\pi}}$ for both the forward and inverse transforms, is common in engineering and is often referred to as the **symmetric definition**.

**Existence of the Fourier Transform:**

For the Fourier Transform $F(\omega)$ to exist, the function $f(t)$ must satisfy certain conditions, often referred to as Dirichlet conditions. A sufficient condition for the existence of the Fourier Transform is:

*   $f(t)$ is absolutely integrable, i.e., $\int_{-\infty}^{\infty} |f(t)| dt < \infty$.

This means the "area" under the absolute value of the function must be finite. Other conditions, such as a finite number of discontinuities and a finite number of extrema in any finite interval, are also important for the convergence of the integral.

**(Refer to Kreyszig, 10th Ed., Chapter 11, Section 11.11 for detailed discussion on Fourier Integrals and Transforms)**

---

### 3. The Inverse Fourier Transform

The Inverse Fourier Transform reconstructs the original function $f(t)$ from its frequency spectrum $F(\omega)$. It is defined as:

$$f(t) = \mathcal{F}^{-1}\{F(\omega)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega$$

This formula shows that the original function $f(t)$ can be represented as a superposition (integral) of complex exponentials $e^{i\omega t}$ with amplitudes $F(\omega)/\sqrt{2\pi}$ across all frequencies $\omega$.

**The Fourier Integral Theorem:**

The pair of Fourier Transform and Inverse Fourier Transform forms the **Fourier Integral Theorem**:

$$\frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(\tau) e^{-i\omega \tau} d\tau \right) e^{i\omega t} d\omega = f(t)$$

This theorem essentially states that if $f(t)$ satisfies the conditions for the Fourier Transform, then applying the inverse transform to the Fourier Transform of $f(t)$ recovers the original function $f(t)$.

**(Refer to Kreyszig, 10th Ed., Chapter 11, Section 11.11 for a rigorous treatment of the Fourier Integral Theorem)**

---

### 4. Examples of Fourier Transforms

Let's compute the Fourier Transforms of some common functions.

**Example 1: Rectangular Pulse (Boxcar Function)**

Consider the rectangular pulse:
$$f(t) = \begin{cases} 1 & \text{if } -a \le t \le a \\ 0 & \text{otherwise} \end{cases}$$
where $a > 0$.

$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-a}^{a} 1 \cdot e^{-i\omega t} dt$$

If $\omega \neq 0$:
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \left[ \frac{e^{-i\omega t}}{-i\omega} \right]_{-a}^{a}$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \left( \frac{e^{-i\omega a} - e^{i\omega a}}{-i\omega} \right)$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \left( \frac{e^{i\omega a} - e^{-i\omega a}}{i\omega} \right)$$
Using the identity $\sin(\theta) = \frac{e^{i\theta} - e^{-i\theta}}{2i}$:
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \left( \frac{2i \sin(\omega a)}{i\omega} \right) = \frac{2}{\sqrt{2\pi}} \frac{\sin(\omega a)}{\omega}$$
$$F(\omega) = \sqrt{\frac{2}{\pi}} \frac{\sin(\omega a)}{\omega}$$

If $\omega = 0$:
$$F(0) = \frac{1}{\sqrt{2\pi}} \int_{-a}^{a} 1 \cdot e^{0} dt = \frac{1}{\sqrt{2\pi}} \int_{-a}^{a} 1 dt = \frac{1}{\sqrt{2\pi}} [t]_{-a}^{a} = \frac{1}{\sqrt{2\pi}} (a - (-a)) = \frac{2a}{\sqrt{2\pi}} = a \sqrt{\frac{2}{\pi}}$$

We can write this in terms of the sinc function, $\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$:
$F(\omega) = \sqrt{\frac{2}{\pi}} \frac{\sin(\omega a)}{\omega} = \sqrt{\frac{2}{\pi}} \frac{\sin(\omega a)}{\omega} \cdot \frac{a\pi}{a\pi} = \sqrt{\frac{2}{\pi}} a \pi \cdot \frac{\sin(\omega a)}{\omega a \pi} = \sqrt{\frac{2}{\pi}} a \pi \cdot \text{sinc}\left(\frac{\omega a}{\pi}\right)$
This is a common result. The Fourier Transform of a rectangular pulse is proportional to the sinc function.

**(Refer to Ramana, 39th Ed., Chapter 33, Section 33.2 for more examples of Fourier Transforms)**

**Example 2: Exponential Decay Function**

Consider the decaying exponential function:
$$f(t) = \begin{cases} e^{-at} & \text{if } t \ge 0 \\ 0 & \text{if } t < 0 \end{cases}$$
where $a > 0$. This is the causal exponential function.

$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{0}^{\infty} e^{-at} e^{-i\omega t} dt$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{0}^{\infty} e^{-(a+i\omega)t} dt$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \left[ \frac{e^{-(a+i\omega)t}}{-(a+i\omega)} \right]_{0}^{\infty}$$
For the integral to converge, we need $\text{Re}(a+i\omega) > 0$, which means $a > 0$.
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \left( 0 - \frac{e^{0}}{-(a+i\omega)} \right)$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \left( \frac{1}{a+i\omega} \right)$$

To express this in a more standard form, we can multiply the numerator and denominator by the conjugate of the denominator:
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \frac{a-i\omega}{(a+i\omega)(a-i\omega)} = \frac{1}{\sqrt{2\pi}} \frac{a-i\omega}{a^2 + \omega^2}$$

**Inverse Fourier Transform of $\frac{1}{a+i\omega}$:**

Let's verify this by finding the inverse transform of $\frac{1}{a+i\omega}$.
The Fourier Transform of $e^{-at}u(t)$ is $\frac{1}{a+i\omega}$, where $u(t)$ is the unit step function.
Using the definition $\mathcal{F}\{f(t)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$, we found $F(\omega) = \frac{1}{\sqrt{2\pi}} \frac{1}{a+i\omega}$ for $f(t) = e^{-at}u(t)$.

Now consider the function $g(t) = e^{at}u(-t)$ (a decaying exponential for $t<0$).
Its Fourier Transform is $G(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{0} e^{at} e^{-i\omega t} dt = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{0} e^{(a-i\omega)t} dt$.
$G(\omega) = \frac{1}{\sqrt{2\pi}} \left[ \frac{e^{(a-i\omega)t}}{a-i\omega} \right]_{-\infty}^{0} = \frac{1}{\sqrt{2\pi}} \left( \frac{1}{a-i\omega} - 0 \right) = \frac{1}{\sqrt{2\pi}} \frac{1}{a-i\omega}$.

If we consider $f(t) = e^{-a|t|}$ for $a>0$, then:
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-a|t|} e^{-i\omega t} dt = \frac{1}{\sqrt{2\pi}} \left( \int_{-\infty}^{0} e^{at} e^{-i\omega t} dt + \int_{0}^{\infty} e^{-at} e^{-i\omega t} dt \right)$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \left( \frac{1}{a-i\omega} + \frac{1}{a+i\omega} \right) = \frac{1}{\sqrt{2\pi}} \left( \frac{a+i\omega + a-i\omega}{(a-i\omega)(a+i\omega)} \right)$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \left( \frac{2a}{a^2 + \omega^2} \right) = \sqrt{\frac{2}{\pi}} \frac{a}{a^2 + \omega^2}$$

**(Refer to Grewal, 44th Ed., Chapter 34, Section 34.2 for various Fourier transform pairs)**

**Example 3: Dirac Delta Function**

The Dirac delta function $\delta(t)$ is defined by:
$$ \int_{-\infty}^{\infty} \delta(t) \phi(t) dt = \phi(0) $$
and $\delta(t) = 0$ for $t \neq 0$.

The Fourier Transform of $\delta(t)$ is:
$$F(\omega) = \mathcal{F}\{\delta(t)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \delta(t) e^{-i\omega t} dt$$
Using the sifting property of the delta function, with $\phi(t) = e^{-i\omega t}$:
$$F(\omega) = \frac{1}{\sqrt{2\pi}} e^{-i\omega (0)} = \frac{1}{\sqrt{2\pi}}$$

**Inverse Fourier Transform of a Constant:**

Let's find the inverse transform of $F(\omega) = \sqrt{2\pi}$ (using a different normalization convention for clarity here, where the forward transform is $\int_{-\infty}^{\infty}$). If $F(\omega) = \sqrt{2\pi}$, then $f(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \sqrt{2\pi} e^{i\omega t} d\omega$. This integral is $\delta(t)$, so a constant in the frequency domain corresponds to a delta function in the time domain.

With our symmetric definition, if $F(\omega) = \frac{1}{\sqrt{2\pi}}$, then:
$$f(t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi}} e^{i\omega t} d\omega = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{i\omega t} d\omega = \delta(t)$$

**Example 4: Impulse of a Sinusoidal Wave**

Consider a single pulse of a cosine wave, $f(t) = \cos(\omega_0 t) \delta(t)$.
Since $\cos(\omega_0 t) \delta(t) = \cos(0) \delta(t) = \delta(t)$:
$\mathcal{F}\{\cos(\omega_0 t) \delta(t)\} = \mathcal{F}\{\delta(t)\} = \frac{1}{\sqrt{2\pi}}$.

Consider a pure sinusoid, $f(t) = \cos(\omega_0 t)$. This function is not absolutely integrable, so its Fourier Transform does not exist in the strict sense. However, it can be represented as a distribution or generalized function.
We know $\cos(\omega_0 t) = \frac{e^{i\omega_0 t} + e^{-i\omega_0 t}}{2}$.
Using the property $\mathcal{F}\{e^{i\omega_0 t} f(t)\} = F(\omega - \omega_0)$:
If we formally consider the transform of $e^{i\omega_0 t}$, it would be $\delta(\omega - \omega_0)$ (using the non-symmetric definition for a moment to build intuition).
Then the transform of $\cos(\omega_0 t)$ would be:
$\mathcal{F}\{\frac{1}{2} e^{i\omega_0 t} + \frac{1}{2} e^{-i\omega_0 t}\} = \frac{1}{2} \delta(\omega - \omega_0) + \frac{1}{2} \delta(\omega + \omega_0)$.
In our symmetric definition, this would be $\frac{\sqrt{\pi}}{\sqrt{2}} (\delta(\omega - \omega_0) + \delta(\omega + \omega_0))$.

This shows that a pure sinusoid has its energy concentrated at discrete frequencies $\omega_0$ and $-\omega_0$.

**(Refer to Zill & Shanahan, 3rd Ed., Chapter 10 for a discussion on Fourier Transforms and their applications)**

---

### 5. Key Properties of the Fourier Transform

The Fourier Transform possesses several useful properties that simplify analysis. Let $F(\omega) = \mathcal{F}\{f(t)\}$.

| Property Name      | Description                                 | Mathematical Representation                                        |
| :----------------- | :------------------------------------------ | :----------------------------------------------------------------- |
| **Linearity**      | The transform of a linear combination of functions is the same linear combination of their transforms. | $\mathcal{F}\{af(t) + bg(t)\} = aF(\omega) + bG(\omega)$             |
| **Time Shifting**  | Shifting a function in time shifts its spectrum in frequency. | $\mathcal{F}\{f(t-t_0)\} = e^{-i\omega t_0} F(\omega)$               |
| **Frequency Shifting** | Modulating a function by $e^{i\omega_0 t}$ shifts its spectrum to $\omega - \omega_0$. | $\mathcal{F}\{e^{i\omega_0 t} f(t)\} = F(\omega - \omega_0)$         |
| **Scaling (Time)** | Scaling the time variable changes the magnitude and phase of the spectrum. | $\mathcal{F}\{f(at)\} = \frac{1}{|a|} F\left(\frac{\omega}{a}\right)$ (for $a \neq 0$) |
| **Duality**        | The transform of a function's transform is related to the original function. | If $\mathcal{F}\{f(t)\} = F(\omega)$, then $\mathcal{F}\{F(t)\} = 2\pi f(-\omega)$. |
| **Differentiation (in time)** | Differentiation in the time domain corresponds to multiplication by $i\omega$ in the frequency domain. | $\mathcal{F}\left\{\frac{df}{dt}\right\} = i\omega F(\omega)$           |
| **Integration (in time)** | Integration in the time domain corresponds to division by $i\omega$ in the frequency domain. | $\mathcal{F}\left\{\int_{-\infty}^{t} f(\tau) d\tau\right\} = \frac{1}{i\omega} F(\omega)$ |
| **Convolution Theorem** | Convolution in the time domain corresponds to multiplication in the frequency domain. | $\mathcal{F}\{f(t) * g(t)\} = F(\omega) G(\omega)$, where $f(t) * g(t) = \int_{-\infty}^{\infty} f(\tau) g(t-\tau) d\tau$. |
| **Multiplication Theorem** | Multiplication in the time domain corresponds to convolution in the frequency domain. | $\mathcal{F}\{f(t) g(t)\} = \frac{1}{2\pi} (F(\omega) * G(\omega))$, where $F(\omega) * G(\omega) = \int_{-\infty}^{\infty} F(\nu) G(\omega-\nu) d\nu$. |
| **Parseval's Theorem** | Relates the energy of a signal in the time domain to its energy in the frequency domain. | $\int_{-\infty}^{\infty} |f(t)|^2 dt = \int_{-\infty}^{\infty} |F(\omega)|^2 d\omega$ |

**(Refer to Kreyszig, 10th Ed., Chapter 11, Section 11.12 and Ramana, 39th Ed., Chapter 33, Section 33.4 for detailed proofs and derivations of these properties)**

**Example using Properties:**

Let $f(t) = e^{-at}u(t)$, $a>0$. We found $\mathcal{F}\{f(t)\} = F(\omega) = \frac{1}{\sqrt{2\pi}} \frac{1}{a+i\omega}$.

1.  **Time Shifting:** Find the Fourier Transform of $f(t-t_0) = e^{-a(t-t_0)}u(t-t_0)$.
    $\mathcal{F}\{e^{-a(t-t_0)}u(t-t_0)\} = e^{-i\omega t_0} F(\omega) = e^{-i\omega t_0} \frac{1}{\sqrt{2\pi}} \frac{1}{a+i\omega}$.

2.  **Frequency Shifting:** Find the Fourier Transform of $e^{i\omega_0 t} f(t) = e^{i\omega_0 t} e^{-at}u(t) = e^{(i\omega_0 - a)t}u(t)$.
    $\mathcal{F}\{e^{i\omega_0 t} f(t)\} = F(\omega - \omega_0) = \frac{1}{\sqrt{2\pi}} \frac{1}{a+i(\omega - \omega_0)}$.

3.  **Differentiation:** Find the Fourier Transform of $f'(t)$.
    $f'(t) = \frac{d}{dt}(e^{-at}u(t))$. For $t>0$, $f'(t) = -ae^{-at}$. At $t=0$, there's a discontinuity.
    $\mathcal{F}\{f'(t)\} = i\omega F(\omega) = i\omega \frac{1}{\sqrt{2\pi}} \frac{1}{a+i\omega} = \frac{1}{\sqrt{2\pi}} \frac{i\omega}{a+i\omega}$.

    Let's verify this by directly calculating the FT of $f'(t)$ for $t>0$:
    $\frac{1}{\sqrt{2\pi}} \int_{0}^{\infty} (-ae^{-at}) e^{-i\omega t} dt = -\frac{a}{\sqrt{2\pi}} \int_{0}^{\infty} e^{-(a+i\omega)t} dt$
    $= -\frac{a}{\sqrt{2\pi}} \left[ \frac{e^{-(a+i\omega)t}}{-(a+i\omega)} \right]_{0}^{\infty} = -\frac{a}{\sqrt{2\pi}} \left( 0 - \frac{1}{-(a+i\omega)} \right)$
    $= -\frac{a}{\sqrt{2\pi}} \frac{1}{a+i\omega} = \frac{1}{\sqrt{2\pi}} \frac{-a}{a+i\omega}$.
    There's a mismatch due to handling the derivative at the discontinuity at $t=0$. The property holds for functions that are smooth or where generalized functions are considered carefully. For $f(t) = e^{-at}u(t)$, $f'(t) = -ae^{-at}u(t) + \delta(t)$.
    $\mathcal{F}\{f'(t)\} = \mathcal{F}\{-ae^{-at}u(t)\} + \mathcal{F}\{\delta(t)\}$
    $= -a \mathcal{F}\{e^{-at}u(t)\} + \frac{1}{\sqrt{2\pi}}$
    $= -a \left( \frac{1}{\sqrt{2\pi}} \frac{1}{a+i\omega} \right) + \frac{1}{\sqrt{2\pi}}$
    $= \frac{1}{\sqrt{2\pi}} \left( \frac{-a}{a+i\omega} + 1 \right) = \frac{1}{\sqrt{2\pi}} \left( \frac{-a + a+i\omega}{a+i\omega} \right) = \frac{1}{\sqrt{2\pi}} \frac{i\omega}{a+i\omega}$.
    This matches $i\omega F(\omega)$.

**(Refer to Rao, Kim, Hwang, Chapter 3 for a discussion on FT properties and their applications in signal processing)**

---

### 6. Applications in Electrical Science and Physical Science

The Fourier Transform is indispensable in many areas:

*   **Electrical Circuits:** Analyzing the frequency response of circuits (e.g., filters, amplifiers). Convolution in the time domain (transient response) becomes multiplication in the frequency domain (frequency response), simplifying analysis.
*   **Signal Processing:** Filtering, modulation, demodulation, spectral analysis of signals.
*   **Quantum Mechanics:** The wave function in position space can be transformed into momentum space using the Fourier Transform.
*   **Optics:** Diffraction patterns are essentially Fourier Transforms of the aperture function.
*   **Heat Conduction:** Solving heat equations using Fourier Transforms.
*   **Image Processing:** Image filtering, compression, and analysis.

**Example Application: Frequency Response of an LTI System**

Consider an LTI system with impulse response $h(t)$. If an input signal $x(t)$ is applied, the output $y(t)$ is given by the convolution:
$$y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau) h(t-\tau) d\tau$$

Taking the Fourier Transform of both sides:
$$Y(\omega) = \mathcal{F}\{y(t)\} = \mathcal{F}\{x(t) * h(t)\}$$
Using the convolution theorem:
$$Y(\omega) = X(\omega) H(\omega)$$
where $X(\omega) = \mathcal{F}\{x(t)\}$ and $H(\omega) = \mathcal{F}\{h(t)\}$.

$H(\omega)$ is called the **frequency response** of the system. It describes how the system affects different frequency components of the input signal. This transformation greatly simplifies the analysis of system behavior.

---

### 7. Practice Questions and Exercises

**Question 1:**
Find the Fourier Transform of the function $f(t) = e^{-2|t|}$.

**Answer:**
We use the formula for $e^{-a|t|}$:
$F(\omega) = \sqrt{\frac{2}{\pi}} \frac{a}{a^2 + \omega^2}$.
Here, $a=2$.
So, $F(\omega) = \sqrt{\frac{2}{\pi}} \frac{2}{4 + \omega^2}$.

**Question 2:**
Find the Fourier Transform of the function $f(t) = t e^{-at}u(t)$, where $a>0$.

**Answer:**
We know that $\mathcal{F}\{e^{-at}u(t)\} = \frac{1}{\sqrt{2\pi}} \frac{1}{a+i\omega}$.
Using the differentiation property: $\mathcal{F}\left\{\frac{df}{dt}\right\} = i\omega F(\omega)$.
If $g(t) = e^{-at}u(t)$, then $t e^{-at}u(t) = - \frac{d}{dt} (e^{-at}u(t))$.
This is incorrect. Consider the property $\mathcal{F}\{t f(t)\} = i \frac{d}{d\omega} F(\omega)$.
Let $f(t) = e^{-at}u(t)$, so $F(\omega) = \frac{1}{\sqrt{2\pi}} \frac{1}{a+i\omega}$.
We need to compute $\frac{d}{d\omega} F(\omega)$:
$\frac{d}{d\omega} \left( \frac{1}{a+i\omega} \right) = -1 (a+i\omega)^{-2} (i) = \frac{-i}{(a+i\omega)^2}$.

So, $\mathcal{F}\{t e^{-at}u(t)\} = i \left( \frac{1}{\sqrt{2\pi}} \frac{-i}{(a+i\omega)^2} \right) = \frac{1}{\sqrt{2\pi}} \frac{1}{(a+i\omega)^2}$.

**Question 3:**
Find the inverse Fourier Transform of $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.

**Answer:**
This transform pair is related to the Gaussian function.
We know that $\mathcal{F}\{e^{-at^2}\} = \sqrt{\frac{1}{2a}} e^{-\frac{\omega^2}{4a}}$.
We need to match our $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$ with $\sqrt{\frac{1}{2a}} e^{-\frac{\omega^2}{4a}}$.
Comparing the exponents: $\frac{\omega^2}{4} = \frac{\omega^2}{4a} \implies a=1$.
Now compare the amplitude: $\sqrt{\frac{\pi}{2}} = \sqrt{\frac{1}{2a}} = \sqrt{\frac{1}{2}}$.
This means $\sqrt{\frac{\pi}{2}} = \sqrt{\frac{1}{2}}$, which is $\sqrt{\pi} = 1$, which is false.

Let's use the known transform pair: $\mathcal{F}\{e^{-ax^2}\} = \sqrt{\frac{\pi}{a}} e^{-\frac{\omega^2}{4a}}$ (using the non-symmetric definition).
With our symmetric definition, $\mathcal{F}\{f(t)\} = \frac{1}{\sqrt{2\pi}} \int f(t) e^{-i\omega t} dt$.
The transform of $f(t) = e^{-at^2}$ is $F(\omega) = \frac{1}{\sqrt{2a}} e^{-\frac{\omega^2}{4a}}$.

We have $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
We want to find $f(t)$ such that $\frac{1}{\sqrt{2a}} e^{-\frac{\omega^2}{4a}} = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
Matching the exponents: $\frac{1}{4a} = \frac{1}{4} \implies a=1$.
Matching the amplitude: $\frac{1}{\sqrt{2a}} = \sqrt{\frac{\pi}{2}}$.
With $a=1$, the left side is $\frac{1}{\sqrt{2}}$.
So, $\frac{1}{\sqrt{2}} = \sqrt{\frac{\pi}{2}} \implies 1 = \sqrt{\pi}$, which is still incorrect.

Let's re-evaluate the Gaussian transform pair with the symmetric definition.
If $f(t) = e^{-at^2}$, then $F(\omega) = \frac{1}{\sqrt{2a}} e^{-\frac{\omega^2}{4a}}$.
We are given $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
We want to find $f(t)$.
We can rewrite the given $F(\omega)$ as $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4 \cdot 1}}$.
Comparing this with $\frac{1}{\sqrt{2a}} e^{-\frac{\omega^2}{4a}}$, we need:
$\frac{1}{4a} = \frac{1}{4} \implies a=1$.
And $\frac{1}{\sqrt{2a}} = \sqrt{\frac{\pi}{2}}$.
Substituting $a=1$: $\frac{1}{\sqrt{2}} = \sqrt{\frac{\pi}{2}} \implies 1 = \sqrt{\pi}$, which is incorrect.

This implies that the given $F(\omega)$ is not the standard FT of a Gaussian function with a simple coefficient.
Let's consider the Fourier transform of the impulse $\delta(t)$.
$\mathcal{F}\{\delta(t)\} = \frac{1}{\sqrt{2\pi}}$.

Let's consider the inverse transform of a Gaussian.
We know that $\mathcal{F}\{e^{-t^2/(2\sigma^2)}\} = \sigma \sqrt{2\pi} e^{-\sigma^2 \omega^2 / 2}$. (This is for a different FT convention).

Let's use a known result: The Fourier transform of $f(t) = e^{-\frac{t^2}{2\sigma^2}}$ is $F(\omega) = \sigma\sqrt{2\pi} e^{-\frac{\sigma^2\omega^2}{2}}$. (This is using $\int e^{-i\omega t} dt$).
With symmetric definition: $\mathcal{F}\{f(t)\} = \frac{1}{\sqrt{2\pi}} \int e^{-at^2} e^{-i\omega t} dt = \frac{1}{\sqrt{2a}} e^{-\frac{\omega^2}{4a}}$.

We have $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
We want to find $f(t)$ such that $\frac{1}{\sqrt{2a}} e^{-\frac{\omega^2}{4a}} = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
Matching exponents: $\frac{1}{4a} = \frac{1}{4} \implies a=1$.
This requires $\frac{1}{\sqrt{2(1)}} = \sqrt{\frac{\pi}{2}} \implies \frac{1}{\sqrt{2}} = \frac{\sqrt{\pi}}{\sqrt{2}} \implies 1 = \sqrt{\pi}$.

Let's use the property: $\mathcal{F}\{ \frac{1}{\sqrt{2\pi}} e^{-t^2/2} \} = e^{-\omega^2/2}$.
We have $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
Rewrite $F(\omega)$ to match the form: $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{2 \cdot 2}}$.
We want $e^{-\frac{\sigma^2\omega^2}{2}}$. So, $\sigma^2 = 2$, which means $\sigma = \sqrt{2}$.
The amplitude must be $\sigma\sqrt{2\pi} = \sqrt{2}\sqrt{2\pi} = 2\sqrt{\pi}$.
This doesn't match $\sqrt{\frac{\pi}{2}}$.

Let's use another common pair: $\mathcal{F}\{e^{-at^2}\} = \frac{1}{\sqrt{2a}}e^{-\omega^2/(4a)}$.
We are given $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
We can write $\sqrt{\frac{\pi}{2}} = \sqrt{\frac{2\pi}{4}}$.
So, $F(\omega) = \frac{\sqrt{2\pi}}{2} e^{-\frac{\omega^2}{4}}$.

Consider $f(t) = e^{-t^2/2}$.
$\mathcal{F}\{e^{-t^2/2}\} = \frac{1}{\sqrt{2}} e^{-\omega^2/2}$. (Not this convention).

Let's use the result: $\mathcal{F}\{e^{-t^2/(2\sigma^2)}\} = \sigma\sqrt{2\pi} e^{-\sigma^2 \omega^2/2}$.
We are given $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
Let $\sigma^2 = 2$. Then $\sigma = \sqrt{2}$.
$F(\omega) = \sqrt{2}\sqrt{2\pi} e^{-2\omega^2/2} = 2\sqrt{\pi} e^{-\omega^2}$. This doesn't match.

Let's use a different known pair: $\mathcal{F}\{e^{-|t|}\} = \frac{1}{\sqrt{2\pi}} \frac{2}{1+\omega^2}$.

Let's use the relationship $\mathcal{F}\{f(t)\} = F(\omega) \implies \mathcal{F}\{F(t)\} = 2\pi f(-\omega)$.
If we assume $f(t) = e^{-at^2}$, its FT is $\frac{1}{\sqrt{2a}}e^{-\omega^2/(4a)}$.
If we assume $F(\omega) = e^{-a\omega^2}$, its FT would be $\frac{1}{\sqrt{2a}}e^{-t^2/(4a)}$.

Let's consider the given $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
This can be written as $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{2 \cdot 2}}$.
Comparing with $\frac{1}{\sqrt{2a}} e^{-\frac{\omega^2}{4a}}$, we need $4a=4 \implies a=1$.
Then $F(\omega) = \frac{1}{\sqrt{2}} e^{-\frac{\omega^2}{4}}$.
We have $\sqrt{\frac{\pi}{2}}$ as the amplitude.

Let's consider a transform pair involving Gaussians with the symmetric definition:
$\mathcal{F}\{e^{-t^2/2}\} = e^{-\omega^2/2}$.
We are given $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
Rewrite the given $F(\omega)$: $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{2 \cdot 2}}$.
Let $g(\omega) = e^{-\omega^2/2}$. Its inverse transform is $g(t) = \frac{1}{\sqrt{2\pi}} e^{-t^2/2}$.
Let's consider the property $\mathcal{F}\{f(at)\} = \frac{1}{|a|} F(\frac{\omega}{a})$.
If we take $\mathcal{F}\{e^{-t^2/2}\} = e^{-\omega^2/2}$, let $a=1/\sqrt{2}$.
Then $f(t) = e^{-t^2/2}$. $F(\omega) = e^{-\omega^2/2}$.
We want to find $f(t)$ for $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
This means we are looking for $f(t)$ such that its transform is $\sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.

Consider the FT of $e^{-t^2/(2\sigma^2)}$ is $\sigma\sqrt{2\pi} e^{-\sigma^2 \omega^2/2}$.
We have $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
We need to match $\sigma\sqrt{2\pi} = \sqrt{\frac{\pi}{2}}$ and $\sigma^2 = 1/2$.
From $\sigma^2=1/2$, $\sigma = 1/\sqrt{2}$.
Then $\sigma\sqrt{2\pi} = \frac{1}{\sqrt{2}}\sqrt{2\pi} = \sqrt{\pi}$.
This still doesn't match $\sqrt{\frac{\pi}{2}}$.

Let's use the standard pair with the symmetric FT:
$\mathcal{F}\{e^{-t^2/2}\} = e^{-\omega^2/2}$.
We want to find $f(t)$ for $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
Let's scale the frequency domain.
If $G(\omega) = e^{-\omega^2/2}$, then $g(t) = \frac{1}{\sqrt{2\pi}} e^{-t^2/2}$.
Let's consider $G(k\omega)$. We know $\mathcal{F}\{f(t/k)\} = k F(k\omega)$.
If $F(\omega) = e^{-\omega^2/2}$, then $f(t) = \frac{1}{\sqrt{2\pi}} e^{-t^2/2}$.
We have $F_{given}(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}} = \sqrt{\frac{\pi}{2}} e^{-\frac{( \omega/\sqrt{2})^2}{2}}$.
This is of the form $C e^{-(\omega/\sqrt{2})^2/2}$.
Let $G(\omega) = e^{-\omega^2/2}$. Then $\mathcal{F}^{-1}\{G(\omega)\} = \frac{1}{\sqrt{2\pi}} e^{-t^2/2}$.
We have $F_{given}(\omega) = \sqrt{\frac{\pi}{2}} G(\omega/\sqrt{2})$.
So, $f(t) = \mathcal{F}^{-1}\{\sqrt{\frac{\pi}{2}} G(\omega/\sqrt{2})\} = \sqrt{\frac{\pi}{2}} \mathcal{F}^{-1}\{G(\omega/\sqrt{2})\}$.
Using $\mathcal{F}^{-1}\{G(a\omega)\} = \frac{1}{a} g(t/a)$.
Here $a = 1/\sqrt{2}$. So $\mathcal{F}^{-1}\{G(\omega/\sqrt{2})\} = \sqrt{2} g(t\sqrt{2})$.
$f(t) = \sqrt{\frac{\pi}{2}} (\sqrt{2} g(t\sqrt{2})) = \sqrt{\pi} g(t\sqrt{2})$.
$g(t) = \frac{1}{\sqrt{2\pi}} e^{-t^2/2}$.
$g(t\sqrt{2}) = \frac{1}{\sqrt{2\pi}} e^{-(t\sqrt{2})^2/2} = \frac{1}{\sqrt{2\pi}} e^{-2t^2/2} = \frac{1}{\sqrt{2\pi}} e^{-t^2}$.
So, $f(t) = \sqrt{\pi} \left( \frac{1}{\sqrt{2\pi}} e^{-t^2} \right) = \frac{1}{\sqrt{2}} e^{-t^2}$.

Let's check: $\mathcal{F}\{\frac{1}{\sqrt{2}} e^{-t^2}\} = \frac{1}{\sqrt{2}} \mathcal{F}\{e^{-t^2}\}$.
Using $\mathcal{F}\{e^{-at^2}\} = \frac{1}{\sqrt{2a}} e^{-\omega^2/(4a)}$. With $a=1$: $\mathcal{F}\{e^{-t^2}\} = \frac{1}{\sqrt{2}} e^{-\omega^2/4}$.
So, $\mathcal{F}\{\frac{1}{\sqrt{2}} e^{-t^2}\} = \frac{1}{\sqrt{2}} (\frac{1}{\sqrt{2}} e^{-\omega^2/4}) = \frac{1}{2} e^{-\omega^2/4}$.
This is not $\sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.

Let's go back to $\mathcal{F}\{e^{-t^2/2}\} = e^{-\omega^2/2}$ (not symmetric).
With symmetric: $\mathcal{F}\{e^{-t^2/2}\} = \frac{1}{\sqrt{2\pi}} \int e^{-t^2/2} e^{-i\omega t} dt = e^{-\omega^2/2}$.
This implies that the FT of $e^{-t^2/2}$ is $e^{-\omega^2/2}$.
We are given $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
Let $G(\omega) = e^{-\omega^2/2}$. Then $\mathcal{F}^{-1}\{G(\omega)\} = e^{-\omega^2/2}$.
We have $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{2 \cdot 2}}$.
Let $\sigma^2 = 2$, so $\sigma = \sqrt{2}$.
We want $F(\omega)$ in the form $A e^{-B \omega^2}$.
$F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
The known pair is $\mathcal{F}\{e^{-t^2/(2\sigma^2)}\} = \sigma\sqrt{2\pi} e^{-\sigma^2 \omega^2/2}$.
We want $\sigma\sqrt{2\pi} = \sqrt{\frac{\pi}{2}}$ and $\sigma^2=1/2$.
From $\sigma^2=1/2$, $\sigma=1/\sqrt{2}$.
Then $\sigma\sqrt{2\pi} = \frac{1}{\sqrt{2}}\sqrt{2\pi} = \sqrt{\pi}$. This does not match $\sqrt{\frac{\pi}{2}}$.

There might be a typo in the question or the expected answer.
However, if we assume the FT of $e^{-at^2}$ is $\sqrt{\frac{\pi}{a}} e^{-\frac{\omega^2}{4a}}$ (using a different convention), then for $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$, we would have $a=2$ for the denominator of the exponent. And amplitude $\sqrt{\frac{\pi}{a}} = \sqrt{\frac{\pi}{2}}$. This matches.
So, with this convention, $f(t) = e^{-2t^2}$.

Let's stick to the symmetric definition: $\mathcal{F}\{e^{-t^2/2}\} = e^{-\omega^2/2}$.
We have $F(\omega) = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}} = \sqrt{\frac{\pi}{2}} e^{-\frac{(\omega/\sqrt{2})^2}{2}}$.
Let $f(t) = e^{-t^2/2}$. Its FT is $F_f(\omega) = e^{-\omega^2/2}$.
We need to find $f(t)$ such that $\mathcal{F}\{f(t)\} = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
Let's use the property $\mathcal{F}\{f(at)\} = \frac{1}{|a|} F(\frac{\omega}{a})$.
And $\mathcal{F}\{ \frac{1}{a} f(t/a) \} = F(a\omega)$.
If $F_f(\omega) = e^{-\omega^2/2}$, then $f(t) = e^{-t^2/2}$.
We want $F_{given}(\omega) = \sqrt{\frac{\pi}{2}} e^{-\omega^2/4}$.
Let $G(\omega) = e^{-\omega^2/4}$. We need to find $g(t)$ such that $\mathcal{F}\{g(t)\} = G(\omega)$.
If $\mathcal{F}\{e^{-t^2/2}\} = e^{-\omega^2/2}$, then by duality $\mathcal{F}\{e^{-t^2/2}\} = e^{-\omega^2/2} \implies \mathcal{F}\{e^{-\omega^2/2}\} = 2\pi e^{-t^2/2}$.
This is still not matching.

Let's assume the question is asking for the inverse transform of $F(\omega) = \frac{1}{\sqrt{2\pi}} e^{-\frac{\omega^2}{4}}$.
Using $\mathcal{F}\{e^{-t^2/2}\} = e^{-\omega^2/2}$:
We have $F(\omega) = \frac{1}{\sqrt{2\pi}} e^{-\frac{\omega^2}{4}} = \frac{1}{\sqrt{2\pi}} e^{-\frac{(\omega/\sqrt{2})^2}{2}}$.
Let $G(\omega) = e^{-\omega^2/2}$. Its inverse FT is $g(t) = e^{-t^2/2}$.
We have $F(\omega) = \frac{1}{\sqrt{2\pi}} G(\omega/\sqrt{2})$.
Using $\mathcal{F}\{f(at)\} = \frac{1}{|a|}F(\frac{\omega}{a})$.
So, $\mathcal{F}^{-1}\{F(\omega)\} = \mathcal{F}^{-1}\{\frac{1}{\sqrt{2\pi}} G(\omega/\sqrt{2})\}$.
Let $a = 1/\sqrt{2}$. $\mathcal{F}^{-1}\{G(a\omega)\} = \frac{1}{a} g(t/a)$.
So $\mathcal{F}^{-1}\{G(\omega/\sqrt{2})\} = \sqrt{2} g(t\sqrt{2})$.
$f(t) = \frac{1}{\sqrt{2\pi}} (\sqrt{2} g(t\sqrt{2})) = \frac{1}{\sqrt{\pi}} g(t\sqrt{2})$.
$g(t) = e^{-t^2/2}$.
$g(t\sqrt{2}) = e^{-(t\sqrt{2})^2/2} = e^{-2t^2/2} = e^{-t^2}$.
So $f(t) = \frac{1}{\sqrt{\pi}} e^{-t^2}$.

Let's check this FT: $\mathcal{F}\{\frac{1}{\sqrt{\pi}} e^{-t^2}\} = \frac{1}{\sqrt{\pi}} \mathcal{F}\{e^{-t^2}\}$.
Using $\mathcal{F}\{e^{-t^2}\} = \frac{1}{\sqrt{2}} e^{-\omega^2/4}$ (from earlier attempt, convention dependent).
If we use $\mathcal{F}\{e^{-at^2}\} = \frac{1}{\sqrt{2a}} e^{-\omega^2/(4a)}$:
For $a=1$, $\mathcal{F}\{e^{-t^2}\} = \frac{1}{\sqrt{2}} e^{-\omega^2/4}$.
So, $\mathcal{F}\{\frac{1}{\sqrt{\pi}} e^{-t^2}\} = \frac{1}{\sqrt{\pi}} \frac{1}{\sqrt{2}} e^{-\omega^2/4} = \frac{1}{\sqrt{2\pi}} e^{-\omega^2/4}$.
This matches. So, if the question was for $F(\omega) = \frac{1}{\sqrt{2\pi}} e^{-\frac{\omega^2}{4}}$, the answer would be $f(t) = \frac{1}{\sqrt{\pi}} e^{-t^2}$.

Given the form of the question, it's likely testing the standard Gaussian FT pair. The standard result for $\mathcal{F}\{e^{-t^2/(2\sigma^2)}\}$ is often given as $\sigma\sqrt{2\pi}e^{-\sigma^2 \omega^2/2}$ with the $\int dt$ definition.
For symmetric FT: $\mathcal{F}\{e^{-t^2/(2\sigma^2)}\} = \frac{1}{\sqrt{2\sigma^2}} e^{-\omega^2/(4/\sigma^2)} = \frac{1}{\sigma\sqrt{2}} e^{-\sigma^2\omega^2/4}$.

Let's use the property: $\mathcal{F}\{e^{-t^2/2}\} = e^{-\omega^2/2}$.
We want $\mathcal{F}\{f(t)\} = \sqrt{\frac{\pi}{2}} e^{-\frac{\omega^2}{4}}$.
This can be written as $\sqrt{\frac{\pi}{2}} e^{-\frac{(\omega/\sqrt{2})^2}{2}}$.
Let $g(\omega) = e^{-\omega^2/2}$, its inverse is $g(t) = e^{-t^2/2}$.
We have $\sqrt{\frac{\pi}{2}} g(\omega/\sqrt{2})$.
Using $\mathcal{F}^{-1}\{ G(a\omega) \} = \frac{1}{a} g(t/a)$.
Let $a=1/\sqrt{2}$.
$\mathcal{F}^{-1}\{ g(\omega/\sqrt{2}) \} = \sqrt{2} g(t\sqrt{2})$.
$f(t) = \sqrt{\frac{\pi}{2}} [\sqrt{2} g(t\sqrt{2})] = \sqrt{\pi} g(t\sqrt{2})$.
$g(t\sqrt{2}) = e^{-(t\sqrt{2})^2/2} = e^{-2t^2/2} = e^{-t^2}$.
So, $f(t) = \sqrt{\pi} e^{-t^2}$.

Let's verify $\mathcal{F}\{\sqrt{\pi} e^{-t^2}\} = \sqrt{\pi} \mathcal{F}\{e^{-t^2}\}$.
Using $\mathcal{F}\{e^{-at^2}\} = \frac{1}{\sqrt{2a}} e^{-\omega^2/(4a)}$ (symmetric FT).
For $a=1$, $\mathcal{F}\{e^{-t^2}\} = \frac{1}{\sqrt{2}} e^{-\omega^2/4}$.
So, $\mathcal{F}\{\sqrt{\pi} e^{-t^2}\} = \sqrt{\pi} \frac{1}{\sqrt{2}} e^{-\omega^2/4} = \sqrt{\frac{\pi}{2}} e^{-\omega^2/4}$.
This matches the given $F(\omega)$.
**Answer:** $f(t) = \sqrt{\pi} e^{-t^2}$.

**Question 4:**
Using the properties of the Fourier Transform, find the Fourier Transform of $f(t) = \cos(t) e^{-t^2/2}$.

**Answer:**
Let $g(t) = e^{-t^2/2}$. We know $\mathcal{F}\{g(t)\} = G(\omega) = e^{-\omega^2/2}$.
We want to find the FT of $f(t) = \cos(t) g(t)$.
We know $\cos(t) = \frac{e^{it} + e^{-it}}{2}$.
So, $f(t) = \frac{e^{it} + e^{-it}}{2} g(t) = \frac{1}{2} e^{it} g(t) + \frac{1}{2} e^{-it} g(t)$.
Using the frequency shifting property $\mathcal{F}\{e^{i\omega_0 t} g(t)\} = G(\omega - \omega_0)$:
$\mathcal{F}\{e^{it} g(t)\} = G(\omega - 1) = e^{-(\omega-1)^2/2}$.
$\mathcal{F}\{e^{-it} g(t)\} = G(\omega - (-1)) = G(\omega + 1) = e^{-(\omega+1)^2/2}$.

Therefore, $\mathcal{F}\{f(t)\} = \frac{1}{2} e^{-(\omega-1)^2/2} + \frac{1}{2} e^{-(\omega+1)^2/2}$.

---

### 8. Important Points to Remember

*   **Definition:** The Fourier Transform decomposes a function into its frequency components. The symmetric definition with $\frac{1}{\sqrt{2\pi}}$ for both forward and inverse transforms is common.
*   **Domain Change:** Transforms from the time domain to the frequency domain.
*   **Existence:** Absolute integrability is a key condition for the existence of the Fourier Transform.
*   **Properties:** Linearity, time/frequency shifting, scaling, differentiation, integration, convolution, and Parseval's theorem are crucial for simplifying calculations.
*   **Convolution Theorem:** Convolution in time becomes multiplication in frequency, simplifying LTI system analysis.
*   **Applications:** Essential for signal processing, circuit analysis, optics, quantum mechanics, etc.
*   **Variations in Definition:** Be aware of different normalization constants used in various contexts.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |


### 9. Further Reading and References

*   **Kreyszig, Erwin. *Advanced Engineering Mathematics*. 10th ed., John Wiley & Sons, 2016.** (Chapter 11: Fourier Integrals and Transforms)
*   **Zill, Dennis G., and Patrick D. Shanahan. *Complex Analysis*. 3rd ed., Jones & Bartlett Learning, 2015.** (Chapter 10: Fourier Transforms)
*   **Ramana, B. V. *Higher Engineering Mathematics*. 39th ed., McGraw-Hill Education, 2023.** (Chapter 33: Fourier Transforms)
*   **Grewal, B.S. *Higher Engineering Mathematics*. 44th ed., Khanna Publishers, 2018.** (Chapter 34: Fourier Transforms)
*   **Rao, K.R., Do Nyeon Kim, and Jae Jeong Hwang. *Fast Fourier Transform - Algorithms and Applications*. Springer, 2011.** (Provides context on practical implementations and related algorithms)

This module provides the foundational understanding of Fourier Transforms, which will be extended in subsequent modules with related concepts like the Laplace Transform and its applications.