---
title: "Frequency domain characterization of Signals and Systems: Fourier transform: Existence - Properties of Continuous time Fourier transform"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Frequency domain characterization of Signals and Systems: Fourier transform: Existence "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361d2"
status: "completed"
scrapedAt: "2026-05-23T16:23:43.468Z"
---
## Module 2: Frequency Domain Characterization of Signals and Systems

### Topic: Fourier Transform: Existence and Properties of Continuous-Time Fourier Transform (CTFT)

**Course Outcomes Alignment:**
*   **CO2 (K3):** To represent continuous time signals and systems in frequency domain. This topic is foundational for understanding the frequency content of signals and the frequency response of systems, which is the core of frequency domain representation.

**Learning Outcomes for this Topic:**
*   Understand the conditions for the existence of the Continuous-Time Fourier Transform (CTFT).
*   Derive and understand the properties of the CTFT.
*   Apply these properties to analyze and manipulate signals and systems in the frequency domain.

---

### 1. Introduction to the Fourier Transform

The Fourier Transform is a mathematical tool that decomposes a signal into its constituent frequencies. It allows us to analyze signals in the **frequency domain**, providing insights into their spectral content that might not be apparent in the **time domain**.

**Key Concept:** A signal can be represented as a sum (or integral) of complex exponentials of different frequencies.

---

### 2. Existence of the Continuous-Time Fourier Transform (CTFT)

For a continuous-time signal $x(t)$ to have a Fourier Transform $X(\omega)$, certain conditions must be met. These conditions ensure that the integral defining the Fourier Transform converges.

**Definition of the CTFT:**
The Continuous-Time Fourier Transform (CTFT) of a signal $x(t)$ is defined as:
$$X(\omega) = \mathcal{F}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt$$

where:
*   $X(\omega)$ is the Fourier Transform of $x(t)$.
*   $\omega$ is the angular frequency (radians per second).
*   $j$ is the imaginary unit ($j^2 = -1$).

**Conditions for Existence (Dirichlet Conditions):**

For the integral to converge absolutely, the signal $x(t)$ must satisfy the following conditions:

1.  **Absolute Integrability:** The signal $x(t)$ must be absolutely integrable, meaning:
    $$ \int_{-\infty}^{\infty} |x(t)| dt < \infty $$
    *   **Intuition:** This condition implies that the total "energy" of the signal in the time domain must be finite. Signals that grow indefinitely or have infinite energy over infinite time intervals will not have a convergent Fourier Transform in the traditional sense.

2.  **Finite Number of Discontinuities:** In any finite time interval, the signal $x(t)$ must have a finite number of discontinuities.
    *   **Intuition:** Jumps or sharp transitions in a signal contribute to high-frequency components. A finite number of these ensures that the high-frequency content isn't infinite, allowing for convergence.

3.  **Finite Number of Maxima and Minima:** In any finite time interval, the signal $x(t)$ must have a finite number of maxima and minima.
    *   **Intuition:** Similar to discontinuities, rapid oscillations (many peaks and valleys) can lead to infinite frequency content. This condition limits such behavior.

**Important Note:** These are sufficient conditions, not always necessary. Some signals that don't strictly meet these conditions can still have a Fourier Transform in a generalized sense (e.g., using Dirac delta functions). However, for practical analysis and most common signals, these conditions are crucial.

**Example:**
*   **Signal $x(t) = e^{-at} u(t)$ with $a>0$**:
    $$ \int_{-\infty}^{\infty} |e^{-at} u(t)| dt = \int_{0}^{\infty} e^{-at} dt = \left[ \frac{e^{-at}}{-a} \right]_{0}^{\infty} = 0 - \frac{1}{-a} = \frac{1}{a} $$
    Since $a>0$, the integral is finite. The signal is continuous and has no discontinuities or extrema. Thus, its CTFT exists.

*   **Signal $x(t) = \sin(\omega_0 t)$**:
    $$ \int_{-\infty}^{\infty} |\sin(\omega_0 t)| dt $$
    This integral diverges because $|\sin(\omega_0 t)|$ is periodic and always greater than or equal to 0, meaning the sum over infinite time will grow infinitely large. Therefore, $\sin(\omega_0 t)$ in its pure form does not satisfy the absolute integrability condition. However, its Fourier Transform exists in a generalized sense (as impulses at $\pm \omega_0$).

**Textbook Reference:**
*   **Haykin & Van Veen, 2nd Ed., Chapter 4:** Discusses the Fourier Transform and its existence conditions.

---

### 3. Properties of the Continuous-Time Fourier Transform (CTFT)

These properties are fundamental for manipulating signals and systems in the frequency domain. They are often derived using the definition of the CTFT and basic calculus.

**Let $x(t) \leftrightarrow X(\omega)$ denote that $X(\omega)$ is the CTFT of $x(t)$.**

**1. Linearity:**
If $x(t) = ax_1(t) + bx_2(t)$, then $X(\omega) = aX_1(\omega) + bX_2(\omega)$.

*   **Derivation:**
    $$ \mathcal{F}\{ax_1(t) + bx_2(t)\} = \int_{-\infty}^{\infty} (ax_1(t) + bx_2(t)) e^{-j\omega t} dt $$
    $$ = a \int_{-\infty}^{\infty} x_1(t) e^{-j\omega t} dt + b \int_{-\infty}^{\infty} x_2(t) e^{-j\omega t} dt $$
    $$ = aX_1(\omega) + bX_2(\omega) $$
*   **Significance:** The Fourier Transform of a sum of signals is the sum of their Fourier Transforms (scaled by the same constants). This is crucial for analyzing composite signals.

**2. Time Shifting:**
If $y(t) = x(t - t_0)$, then $Y(\omega) = e^{-j\omega t_0} X(\omega)$.

*   **Derivation:**
    $$ \mathcal{F}\{x(t - t_0)\} = \int_{-\infty}^{\infty} x(t - t_0) e^{-j\omega t} dt $$
    Let $\tau = t - t_0$, so $t = \tau + t_0$, and $dt = d\tau$.
    $$ = \int_{-\infty}^{\infty} x(\tau) e^{-j\omega (\tau + t_0)} d\tau $$
    $$ = \int_{-\infty}^{\infty} x(\tau) e^{-j\omega \tau} e^{-j\omega t_0} d\tau $$
    $$ = e^{-j\omega t_0} \int_{-\infty}^{\infty} x(\tau) e^{-j\omega \tau} d\tau $$
    $$ = e^{-j\omega t_0} X(\omega) $$
*   **Significance:** Shifting a signal in time introduces a linear phase shift in its frequency domain representation. The magnitude spectrum remains unchanged.

**3. Frequency Shifting (Modulation Property):**
If $y(t) = e^{j\omega_0 t} x(t)$, then $Y(\omega) = X(\omega - \omega_0)$.

*   **Derivation:**
    $$ \mathcal{F}\{e^{j\omega_0 t} x(t)\} = \int_{-\infty}^{\infty} (e^{j\omega_0 t} x(t)) e^{-j\omega t} dt $$
    $$ = \int_{-\infty}^{\infty} x(t) e^{-j(\omega - \omega_0) t} dt $$
    $$ = X(\omega - \omega_0) $$
*   **Significance:** Multiplying a signal by a complex exponential in the time domain shifts its spectrum in the frequency domain. This is the basis of modulation techniques in communication systems.

**4. Time Scaling:**
If $y(t) = x(at)$, then $Y(\omega) = \frac{1}{|a|} X\left(\frac{\omega}{a}\right)$.

*   **Derivation:**
    $$ \mathcal{F}\{x(at)\} = \int_{-\infty}^{\infty} x(at) e^{-j\omega t} dt $$
    Let $\tau = at$, so $t = \frac{\tau}{a}$, and $dt = \frac{1}{a} d\tau$.
    $$ = \int_{-\infty}^{\infty} x(\tau) e^{-j\omega (\tau/a)} \frac{1}{a} d\tau $$
    $$ = \frac{1}{a} \int_{-\infty}^{\infty} x(\tau) e^{-j(\omega/a) \tau} d\tau $$
    $$ = \frac{1}{a} X\left(\frac{\omega}{a}\right) $$
    If $a < 0$, we need to be careful with the integral limits and the factor $1/a$. The general form is $\frac{1}{|a|} X\left(\frac{\omega}{a}\right)$.
*   **Significance:**
    *   If $|a| > 1$, the signal is compressed in time, and its spectrum is stretched in frequency.
    *   If $|a| < 1$, the signal is expanded in time, and its spectrum is compressed in frequency.
    *   The amplitude of the spectrum is scaled inversely by $|a|$.

**5. Time Reversal:**
If $y(t) = x(-t)$, then $Y(\omega) = X(-\omega)$.

*   **Derivation:**
    $$ \mathcal{F}\{x(-t)\} = \int_{-\infty}^{\infty} x(-t) e^{-j\omega t} dt $$
    Let $\tau = -t$, so $t = -\tau$, and $dt = -d\tau$.
    $$ = \int_{\infty}^{-\infty} x(\tau) e^{-j\omega (-\tau)} (-d\tau) $$
    $$ = \int_{-\infty}^{\infty} x(\tau) e^{j\omega \tau} d\tau $$
    $$ = \int_{-\infty}^{\infty} x(\tau) e^{-j(-\omega) \tau} d\tau $$
    $$ = X(-\omega) $$
*   **Significance:** Time reversal in the time domain corresponds to frequency reversal in the frequency domain.

**6. Convolution Property:**
If $y(t) = x_1(t) * x_2(t) = \int_{-\infty}^{\infty} x_1(\tau) x_2(t - \tau) d\tau$, then $Y(\omega) = X_1(\omega) X_2(\omega)$.

*   **Derivation:** (Sketch - full derivation is more involved and relies on swapping integral order)
    $$ Y(\omega) = \int_{-\infty}^{\infty} \left( \int_{-\infty}^{\infty} x_1(\tau) x_2(t - \tau) d\tau \right) e^{-j\omega t} dt $$
    $$ = \int_{-\infty}^{\infty} x_1(\tau) \left( \int_{-\infty}^{\infty} x_2(t - \tau) e^{-j\omega t} dt \right) d\tau $$
    The inner integral is $\mathcal{F}\{x_2(t - \tau)\}$ which, by time shifting property, is $e^{-j\omega \tau} X_2(\omega)$.
    $$ = \int_{-\infty}^{\infty} x_1(\tau) e^{-j\omega \tau} X_2(\omega) d\tau $$
    $$ = X_2(\omega) \int_{-\infty}^{\infty} x_1(\tau) e^{-j\omega \tau} d\tau $$
    $$ = X_2(\omega) X_1(\omega) $$
*   **Significance:** Convolution in the time domain is equivalent to multiplication in the frequency domain. This is a cornerstone of LTI system analysis, as the output of an LTI system is the convolution of the input with the system's impulse response. This property simplifies system analysis significantly.

**7. Multiplication Property:**
If $y(t) = x_1(t) x_2(t)$, then $Y(\omega) = \frac{1}{2\pi} (X_1(\omega) * X_2(\omega))$.

*   **Derivation:** (Sketch - relies on the inverse Fourier Transform and swapping integral order)
    The inverse Fourier Transform is $x(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\omega) e^{j\omega t} d\omega$.
    $$ Y(\omega) = \int_{-\infty}^{\infty} x_1(t) x_2(t) e^{-j\omega t} dt $$
    Substitute $x_1(t)$:
    $$ = \int_{-\infty}^{\infty} \left( \frac{1}{2\pi} \int_{-\infty}^{\infty} X_1(\nu) e^{j\nu t} d\nu \right) x_2(t) e^{-j\omega t} dt $$
    Swap integrals and rearrange:
    $$ = \frac{1}{2\pi} \int_{-\infty}^{\infty} X_1(\nu) \left( \int_{-\infty}^{\infty} x_2(t) e^{-j(\omega - \nu) t} dt \right) d\nu $$
    The inner integral is $X_2(\omega - \nu)$.
    $$ = \frac{1}{2\pi} \int_{-\infty}^{\infty} X_1(\nu) X_2(\omega - \nu) d\nu $$
    $$ = \frac{1}{2\pi} (X_1(\omega) * X_2(\omega)) $$
*   **Significance:** Multiplication in the time domain corresponds to convolution in the frequency domain (scaled by $1/(2\pi)$). This is the dual of the convolution property.

**8. Differentiation in the Time Domain:**
If $y(t) = \frac{dx(t)}{dt}$, then $Y(\omega) = j\omega X(\omega)$.

*   **Derivation:**
    $$ \mathcal{F}\left\{\frac{dx(t)}{dt}\right\} = \int_{-\infty}^{\infty} \frac{dx(t)}{dt} e^{-j\omega t} dt $$
    Using integration by parts: $\int u dv = uv - \int v du$. Let $u = e^{-j\omega t}$ and $dv = \frac{dx(t)}{dt} dt$. Then $du = -j\omega e^{-j\omega t} dt$ and $v = x(t)$.
    $$ = \left[ x(t) e^{-j\omega t} \right]_{-\infty}^{\infty} - \int_{-\infty}^{\infty} x(t) (-j\omega e^{-j\omega t}) dt $$
    For the Fourier Transform to exist, $x(t)$ must be absolutely integrable. If $x(t)$ is also bounded, the first term is zero. Assuming this is the case:
    $$ = 0 + j\omega \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt $$
    $$ = j\omega X(\omega) $$
*   **Significance:** Differentiation in the time domain corresponds to multiplication by $j\omega$ in the frequency domain. This transforms calculus operations into algebraic ones.

**9. Differentiation in the Frequency Domain:**
If $y(t) = t x(t)$, then $Y(\omega) = j \frac{dX(\omega)}{d\omega}$.

*   **Derivation:**
    $$ X(\omega) = \int_{-\infty}^{\infty} x(\tau) e^{-j\omega \tau} d\tau $$
    Differentiate with respect to $\omega$:
    $$ \frac{dX(\omega)}{d\omega} = \frac{d}{d\omega} \int_{-\infty}^{\infty} x(\tau) e^{-j\omega \tau} d\tau $$
    Assuming we can interchange differentiation and integration:
    $$ = \int_{-\infty}^{\infty} x(\tau) \frac{\partial}{\partial\omega} (e^{-j\omega \tau}) d\tau $$
    $$ = \int_{-\infty}^{\infty} x(\tau) (-j\tau) e^{-j\omega \tau} d\tau $$
    $$ = -j \int_{-\infty}^{\infty} \tau x(\tau) e^{-j\omega \tau} d\tau $$
    Recognizing the integral as the Fourier Transform of $\tau x(\tau)$:
    $$ \frac{dX(\omega)}{d\omega} = -j \mathcal{F}\{t x(t)\} $$
    Therefore,
    $$ \mathcal{F}\{t x(t)\} = j \frac{dX(\omega)}{d\omega} $$
*   **Significance:** Multiplication by $t$ in the time domain corresponds to differentiation with respect to $\omega$ in the frequency domain.

**10. Integration in the Time Domain:**
If $y(t) = \int_{-\infty}^{t} x(\tau) d\tau$, then $Y(\omega) = \frac{1}{j\omega} X(\omega) + \pi X(0) \delta(\omega)$.

*   **Derivation:** (Sketch - involves the convolution of $x(t)$ with the unit step function $u(t)$)
    The integral can be viewed as $y(t) = x(t) * u(t)$.
    We know that $u(t) \leftrightarrow \pi \delta(\omega) + \frac{1}{j\omega}$.
    Using the convolution property:
    $$ Y(\omega) = X(\omega) \left( \pi \delta(\omega) + \frac{1}{j\omega} \right) $$
    $$ Y(\omega) = \pi X(\omega) \delta(\omega) + \frac{1}{j\omega} X(\omega) $$
    Since $X(\omega) \delta(\omega) = X(0) \delta(\omega)$ (property of convolution with delta function):
    $$ Y(\omega) = \frac{1}{j\omega} X(\omega) + \pi X(0) \delta(\omega) $$
*   **Significance:** Integration in the time domain corresponds to division by $j\omega$ in the frequency domain, plus a term related to the DC component ($X(0)$) of the original signal.

**11. Parseval's Theorem (or Rayleigh's Theorem):**
For real or complex signals, the total energy of the signal is conserved between the time and frequency domains.
$$ \int_{-\infty}^{\infty} |x(t)|^2 dt = \frac{1}{2\pi} \int_{-\infty}^{\infty} |X(\omega)|^2 d\omega $$

*   **Derivation:** (Sketch - involves the definition of the inverse Fourier Transform and correlation)
    Consider $\int_{-\infty}^{\infty} x(t) x^*(t) dt$. Substitute the inverse FT for $x^*(t)$:
    $$ \int_{-\infty}^{\infty} x(t) \left( \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\nu) e^{j\nu t} d\nu \right)^* dt $$
    $$ = \int_{-\infty}^{\infty} x(t) \left( \frac{1}{2\pi} \int_{-\infty}^{\infty} X^*(\nu) e^{-j\nu t} d\nu \right) dt $$
    $$ = \frac{1}{2\pi} \int_{-\infty}^{\infty} X^*(\nu) \left( \int_{-\infty}^{\infty} x(t) e^{-j\nu t} dt \right) d\nu $$
    The inner integral is $X(\nu)$.
    $$ = \frac{1}{2\pi} \int_{-\infty}^{\infty} X^*(\nu) X(\nu) d\nu = \frac{1}{2\pi} \int_{-\infty}^{\infty} |X(\nu)|^2 d\nu $$
*   **Significance:** This theorem relates the energy of a signal in the time domain to the energy of its spectrum in the frequency domain. $|X(\omega)|^2$ is the power spectral density. It states that the total energy is the same regardless of whether it's calculated from the time-domain signal or its frequency-domain representation.

**12. Duality Property:**
If $x(t) \leftrightarrow X(\omega)$, then $X(t) \leftrightarrow 2\pi x(-\omega)$.

*   **Derivation:**
    Start with the definition of the FT: $X(\omega) = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt$.
    To get the FT of $X(t)$, we need to replace $t$ with $\omega$ and $\omega$ with $t$:
    Let $Y(t) = \mathcal{F}\{X(\omega)\}$.
    $$ Y(t) = \int_{-\infty}^{\infty} X(\omega) e^{-j t \omega} d\omega $$
    Now substitute the expression for $X(\omega)$:
    $$ Y(t) = \int_{-\infty}^{\infty} \left( \int_{-\infty}^{\infty} x(\tau) e^{-j\omega \tau} d\tau \right) e^{-j t \omega} d\omega $$
    Swap integrals and rearrange:
    $$ Y(t) = \int_{-\infty}^{\infty} x(\tau) \left( \int_{-\infty}^{\infty} e^{-j(\tau+t) \omega} d\omega \right) d\tau $$
    The inner integral $\int_{-\infty}^{\infty} e^{-j A \omega} d\omega$ is $2\pi \delta(A)$. Here $A = \tau + t$.
    $$ Y(t) = \int_{-\infty}^{\infty} x(\tau) (2\pi \delta(\tau+t)) d\tau $$
    Using the sifting property of the delta function: $\int_{-\infty}^{\infty} x(\tau) \delta(\tau - a) d\tau = x(a)$. Here we have $\delta(\tau+t) = \delta(-(\tau+t)) = \delta(-(\tau - (-t)))$. Let $u = -\omega$.
    We need to be careful here. The integral $\int_{-\infty}^{\infty} e^{-j\omega t} d\omega$ is $2\pi \delta(t)$.
    Let's restart with the FT definition and the duality idea:
    If $x(t) \leftrightarrow X(\omega)$, then let's consider a signal $g(t) = X(t)$. We want to find its FT.
    Using the definition:
    $$ \mathcal{F}\{X(t)\} = \int_{-\infty}^{\infty} X(t) e^{-j\omega t} dt $$
    Now substitute the definition of $X(t)$ (which is the FT of $x(\tau)$ evaluated at $t$):
    $$ X(t) = \int_{-\infty}^{\infty} x(\tau) e^{-j t \tau} d\tau $$
    $$ \mathcal{F}\{X(t)\} = \int_{-\infty}^{\infty} \left( \int_{-\infty}^{\infty} x(\tau) e^{-j t \tau} d\tau \right) e^{-j \omega t} dt $$
    Swap integrals:
    $$ = \int_{-\infty}^{\infty} x(\tau) \left( \int_{-\infty}^{\infty} e^{-j(t\tau + \omega t)} dt \right) d\tau $$
    $$ = \int_{-\infty}^{\infty} x(\tau) \left( \int_{-\infty}^{\infty} e^{-j t (\tau + \omega)} dt \right) d\tau $$
    The inner integral is $2\pi \delta(\tau + \omega)$.
    $$ = \int_{-\infty}^{\infty} x(\tau) (2\pi \delta(\tau + \omega)) d\tau $$
    Using the sifting property: $\int_{-\infty}^{\infty} x(\tau) \delta(\tau - a) d\tau = x(a)$. Here we have $\delta(\tau + \omega) = \delta(\tau - (-\omega))$.
    $$ = 2\pi x(-\omega) $$
    So, $X(t) \leftrightarrow 2\pi x(-\omega)$.
*   **Significance:** This property establishes a symmetry between the time and frequency domains. If a signal in one domain has a certain form, its transform in the other domain has a related form, with a scaling factor and a time/frequency reversal. For example, a rectangular pulse in the time domain transforms to a sinc function in the frequency domain. By duality, a sinc function in the time domain transforms to a rectangular pulse in the frequency domain.

**Textbook References:**
*   **Haykin & Van Veen, 2nd Ed., Chapter 4:** Covers all these properties in detail with derivations and examples.
*   **Oppenheim, Willsky & Nawab, 2nd Ed., Chapter 4:** Also provides thorough coverage of CTFT properties.

---

### 4. Common Fourier Transform Pairs

Knowing common pairs can significantly speed up analysis.

| Signal $x(t)$                       | Fourier Transform $X(\omega)$                                     |
| :---------------------------------- | :---------------------------------------------------------------- |
| $\delta(t)$ (Unit Impulse)          | $1$                                                               |
| $1$ (DC Signal)                     | $2\pi \delta(\omega)$                                             |
| $e^{j\omega_0 t}$                   | $2\pi \delta(\omega - \omega_0)$                                  |
| $\cos(\omega_0 t)$                  | $\pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$   |
| $\sin(\omega_0 t)$                  | $j\pi [\delta(\omega + \omega_0) - \delta(\omega - \omega_0)]$   |
| $u(t)$ (Unit Step)                  | $\pi \delta(\omega) + \frac{1}{j\omega}$                          |
| $e^{-at} u(t)$, $a > 0$ (Decaying Exp.) | $\frac{1}{a + j\omega}$                                           |
| $e^{-a|t|}$, $a > 0$ (Double Exp.)   | $\frac{2a}{a^2 + \omega^2}$                                       |
| $\text{rect}\left(\frac{t}{T}\right)$ (Rectangular Pulse) | $T \text{sinc}\left(\frac{\omega T}{2}\right) = T \frac{\sin(\frac{\omega T}{2})}{\frac{\omega T}{2}}$ |
| $\text{sinc}(t) = \frac{\sin(\pi t)}{\pi t}$ | $2\pi \text{rect}\left(\frac{\omega}{2\pi}\right)$                 |
| $\text{tri}\left(\frac{t}{T}\right)$ (Triangular Pulse) | $T \text{sinc}^2\left(\frac{\omega T}{2}\right) = T \frac{\sin^2(\frac{\omega T}{2})}{(\frac{\omega T}{2})^2}$ |

**Note on $\text{sinc}(t)$:** There are two common definitions: $\frac{\sin(\pi t)}{\pi t}$ and $\frac{\sin(t)}{t}$. The transformation pair depends on which definition is used. The table uses $\text{sinc}(t) = \frac{\sin(\pi t)}{\pi t}$, which is common in signal processing. If $\text{rect}(t/T)$ is used, its FT is $T \text{sinc}(\omega T/2)$. If the definition $\text{sinc}(t) = \frac{\sin t}{t}$ is used, the FT of $\text{rect}(t/T)$ is $T \text{sinc}(\omega T/2)$. Always check the definition used in your textbook. The formula $T \frac{\sin(\omega T/2)}{\omega T/2}$ is consistent.

**Textbook Reference:**
*   **Haykin & Van Veen, 2nd Ed., Chapter 4, Table 4.1:** Lists many common FT pairs.

---

### 5. Example Applications of Properties

**Example 1: Find the Fourier Transform of $x(t) = e^{-2t}u(t-1)$**

**Approach:**
1.  Recognize the base signal $e^{-at}u(t)$.
2.  Use time shifting property.

Let $g(t) = e^{-2t}u(t)$. We know $\mathcal{F}\{g(t)\} = G(\omega) = \frac{1}{2+j\omega}$.
The given signal is $x(t) = e^{-2(t-1)}u(t-1)$. Let's rewrite it as:
$x(t) = e^2 \cdot e^{-2(t-1)}u(t-1)$
This is not directly $g(t-1)$. Let's analyze $g(t-1) = e^{-2(t-1)}u(t-1)$.
Using the time-shifting property: $\mathcal{F}\{g(t-t_0)\} = e^{-j\omega t_0} G(\omega)$.
Here $t_0 = 1$.
So, $\mathcal{F}\{e^{-2(t-1)}u(t-1)\} = e^{-j\omega(1)} \frac{1}{2+j\omega} = \frac{e^{-j\omega}}{2+j\omega}$.

Now consider our $x(t) = e^{-2t}u(t-1)$.
We can write $x(t) = e^{-2(t-1+1)}u(t-1) = e^{-2}e^{-2(t-1)}u(t-1)$.
Using linearity:
$\mathcal{F}\{x(t)\} = e^{-2} \mathcal{F}\{e^{-2(t-1)}u(t-1)\}$
$\mathcal{F}\{x(t)\} = e^{-2} \left(\frac{e^{-j\omega}}{2+j\omega}\right) = \frac{e^{-2}e^{-j\omega}}{2+j\omega}$.

**Alternatively, using frequency shifting:**
Let $h(t) = e^{-2t}u(t)$. $H(\omega) = \frac{1}{2+j\omega}$.
We can write $x(t) = e^{-2t}u(t-1)$ as $x(t) = e^{-2t} \cdot \frac{u(t)}{u(t)} u(t-1)$ (This is not helpful).
Let's try to express $x(t)$ as a function of $e^{-2t}$.
$x(t) = e^{-2t}u(t-1) = e^{-2t}u(t)u(t-1)$. The $u(t)$ is redundant since $u(t-1)$ is 0 for $t<1$ and $u(t)$ is 1 for $t \ge 0$.
This signal is zero for $t < 1$ and $e^{-2t}$ for $t \ge 1$.
So, $x(t) = e^{-2t}u(t-1)$.
We know $e^{-at}u(t) \leftrightarrow \frac{1}{a+j\omega}$.
We want to transform $e^{-2t}u(t-1)$.
Let $y(t) = e^{-2t}u(t-1)$.
We can write $y(t) = e^{-2(t-1+1)} u(t-1) = e^{-2} e^{-2(t-1)} u(t-1)$.
Let $z(t) = e^{-2(t-1)} u(t-1)$. Using time shifting on $e^{-2t}u(t)$:
$Z(\omega) = e^{-j\omega(1)} \frac{1}{2+j\omega}$.
Then $y(t) = e^{-2} z(t)$. Using linearity:
$Y(\omega) = e^{-2} Z(\omega) = e^{-2} \frac{e^{-j\omega}}{2+j\omega}$.

**Example 2: Find the Fourier Transform of $x(t) = t e^{-3t} u(t)$**

**Approach:**
1.  Recognize the base signal $e^{-at}u(t)$.
2.  Use differentiation in time property.

Let $g(t) = e^{-3t}u(t)$. We know $\mathcal{F}\{g(t)\} = G(\omega) = \frac{1}{3+j\omega}$.
The given signal is $x(t) = t g(t)$.
Using the differentiation in time property: $\mathcal{F}\{t x(t)\} = j \frac{dX(\omega)}{d\omega}$.
So, $\mathcal{F}\{t e^{-3t} u(t)\} = j \frac{d}{d\omega} \left( \frac{1}{3+j\omega} \right)$.
$$ \frac{d}{d\omega} \left( (3+j\omega)^{-1} \right) = -1 (3+j\omega)^{-2} (j) = \frac{-j}{(3+j\omega)^2} $$
Therefore,
$$ \mathcal{F}\{t e^{-3t} u(t)\} = j \left( \frac{-j}{(3+j\omega)^2} \right) = \frac{-j^2}{(3+j\omega)^2} = \frac{1}{(3+j\omega)^2} $$

**Example 3: Find the Fourier Transform of $x(t) = \cos(\omega_0 t) u(t)$**

**Approach:**
1.  Express $\cos(\omega_0 t)$ using Euler's formula.
2.  Use linearity and frequency shifting properties.

$$ x(t) = \frac{e^{j\omega_0 t} + e^{-j\omega_0 t}}{2} u(t) $$
$$ x(t) = \frac{1}{2} e^{j\omega_0 t} u(t) + \frac{1}{2} e^{-j\omega_0 t} u(t) $$
Using linearity:
$$ X(\omega) = \mathcal{F}\left\{\frac{1}{2} e^{j\omega_0 t} u(t)\right\} + \mathcal{F}\left\{\frac{1}{2} e^{-j\omega_0 t} u(t)\right\} $$
Let $g(t) = u(t)$. We know $G(\omega) = \pi \delta(\omega) + \frac{1}{j\omega}$.
Using the frequency shifting property $\mathcal{F}\{e^{j\omega_0 t} g(t)\} = G(\omega - \omega_0)$:
$$ \mathcal{F}\{e^{j\omega_0 t} u(t)\} = \pi \delta(\omega - \omega_0) + \frac{1}{j(\omega - \omega_0)} $$
$$ \mathcal{F}\{e^{-j\omega_0 t} u(t)\} = \pi \delta(\omega + \omega_0) + \frac{1}{j(\omega + \omega_0)} $$
So,
$$ X(\omega) = \frac{1}{2} \left( \pi \delta(\omega - \omega_0) + \frac{1}{j(\omega - \omega_0)} \right) + \frac{1}{2} \left( \pi \delta(\omega + \omega_0) + \frac{1}{j(\omega + \omega_0)} \right) $$
$$ X(\omega) = \frac{\pi}{2} [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] + \frac{1}{2} \left( \frac{1}{j(\omega - \omega_0)} + \frac{1}{j(\omega + \omega_0)} \right) $$
Combine the fractions:
$$ \frac{1}{j} \left( \frac{\omega + \omega_0 + \omega - \omega_0}{(\omega - \omega_0)(\omega + \omega_0)} \right) = \frac{1}{j} \left( \frac{2\omega}{\omega^2 - \omega_0^2} \right) = \frac{2\omega}{j(\omega^2 - \omega_0^2)} = \frac{-2j\omega}{\omega^2 - \omega_0^2} $$
$$ X(\omega) = \frac{\pi}{2} [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] + \frac{-2j\omega}{2(\omega^2 - \omega_0^2)} $$
$$ X(\omega) = \frac{\pi}{2} [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] + \frac{-j\omega}{\omega^2 - \omega_0^2} $$
Wait, the FT of $\cos(\omega_0 t)$ is $\pi[\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$. The $u(t)$ term introduces the additional part.

**Revisit Example 3 using the table:**
The FT of $\cos(\omega_0 t)$ is $\pi[\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$.
What happens to this when multiplied by $u(t)$?
Let's check the FT of $u(t)$ again: $\pi \delta(\omega) + \frac{1}{j\omega}$.
The multiplication property states $\mathcal{F}\{x_1(t)x_2(t)\} = \frac{1}{2\pi} (X_1(\omega) * X_2(\omega))$.
Here $x_1(t) = \cos(\omega_0 t)$ and $X_1(\omega) = \pi[\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$.
$x_2(t) = u(t)$ and $X_2(\omega) = \pi \delta(\omega) + \frac{1}{j\omega}$.
$X(\omega) = \frac{1}{2\pi} \left( \pi[\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] * (\pi \delta(\omega) + \frac{1}{j\omega}) \right)$
Using linearity of convolution:
$X(\omega) = \frac{1}{2\pi} \left( \pi[\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] * \pi \delta(\omega) + \pi[\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] * \frac{1}{j\omega} \right)$
Convolution with $\delta(\omega)$ shifts the spectrum:
$\pi[\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] * \pi \delta(\omega) = \pi^2 [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$
Convolution with $1/(j\omega)$:
$\pi[\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] * \frac{1}{j\omega} = \pi \left( \delta(\omega - \omega_0) * \frac{1}{j\omega} + \delta(\omega + \omega_0) * \frac{1}{j\omega} \right)$
$= \pi \left( \frac{1}{j(\omega - \omega_0)} + \frac{1}{j(\omega + \omega_0)} \right)$
$= \frac{\pi}{j} \left( \frac{\omega + \omega_0 + \omega - \omega_0}{(\omega - \omega_0)(\omega + \omega_0)} \right) = \frac{\pi}{j} \frac{2\omega}{\omega^2 - \omega_0^2} = \frac{2\pi \omega}{j(\omega^2 - \omega_0^2)}$
So,
$X(\omega) = \frac{1}{2\pi} \left( \pi^2 [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] + \frac{2\pi \omega}{j(\omega^2 - \omega_0^2)} \right)$
$X(\omega) = \frac{\pi}{2} [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] + \frac{\omega}{j(\omega^2 - \omega_0^2)}$
This matches the result from the first method. The first method (using Euler's formula and then frequency shifting) is generally simpler for trigonometric functions.

---

### 6. Practice Questions and Exercises

**Question 1 (Existence):**
Does the Fourier Transform exist for the signal $x(t) = e^{2t} u(t)$? Justify your answer.

**Question 2 (Properties - Linearity):**
Given $x_1(t) \leftrightarrow X_1(\omega)$ and $x_2(t) \leftrightarrow X_2(\omega)$. Find the Fourier Transform of $y(t) = 3x_1(t) - 2x_2(t)$.

**Question 3 (Properties - Time Shifting):**
If $X(\omega)$ is the Fourier Transform of $x(t)$, what is the Fourier Transform of $x(t+2)$?

**Question 4 (Properties - Frequency Shifting):**
If $X(\omega)$ is the Fourier Transform of $x(t)$, find the Fourier Transform of $y(t) = e^{-j3t} x(t)$.

**Question 5 (Properties - Convolution):**
If $x_1(t) = e^{-t}u(t)$ and $x_2(t) = e^{-2t}u(t)$, find the Fourier Transform of $y(t) = x_1(t) * x_2(t)$.

**Question 6 (Properties - Differentiation):**
If $X(\omega)$ is the Fourier Transform of $x(t)$, find the Fourier Transform of $\frac{dx(t)}{dt}$.

**Question 7 (FT Pair Application):**
Find the Fourier Transform of $x(t) = \text{rect}\left(\frac{t-2}{4}\right)$.

**Question 8 (Duality):**
Given that $e^{-at}u(t) \leftrightarrow \frac{1}{a+j\omega}$ for $a>0$. Using the duality property, find the Fourier Transform of $\frac{1}{a+j\omega}$.

---

### 7. Answers to Practice Questions

**Answer 1:**
No, the Fourier Transform of $x(t) = e^{2t} u(t)$ does not exist in the ordinary sense.
Justification: The signal $x(t)$ is $e^{2t}$ for $t \ge 0$ and $0$ for $t < 0$.
The integral for the Fourier Transform is $\int_{-\infty}^{\infty} |x(t)| dt = \int_{0}^{\infty} |e^{2t}| dt = \int_{0}^{\infty} e^{2t} dt$.
This integral diverges to infinity: $\left[\frac{e^{2t}}{2}\right]_0^\infty = \infty - \frac{1}{2} = \infty$.
Since the signal is not absolutely integrable, its CTFT does not exist.

**Answer 2:**
By the linearity property, $Y(\omega) = 3X_1(\omega) - 2X_2(\omega)$.

**Answer 3:**
Using the time shifting property with $t_0 = -2$, the Fourier Transform of $x(t+2)$ is $e^{j\omega(-2)}X(\omega) = e^{-j2\omega}X(\omega)$.

**Answer 4:**
Using the frequency shifting property with $\omega_0 = 3$, the Fourier Transform of $y(t) = e^{-j3t} x(t)$ is $X(\omega - (-3)) = X(\omega + 3)$.

**Answer 5:**
First, find the Fourier Transforms of $x_1(t)$ and $x_2(t)$:
$X_1(\omega) = \mathcal{F}\{e^{-t}u(t)\} = \frac{1}{1+j\omega}$
$X_2(\omega) = \mathcal{F}\{e^{-2t}u(t)\} = \frac{1}{2+j\omega}$
Using the convolution property, $Y(\omega) = X_1(\omega) X_2(\omega)$:
$Y(\omega) = \frac{1}{1+j\omega} \cdot \frac{1}{2+j\omega} = \frac{1}{(1+j\omega)(2+j\omega)}$

**Answer 6:**
By the differentiation in the time domain property, the Fourier Transform of $\frac{dx(t)}{dt}$ is $j\omega X(\omega)$.

**Answer 7:**
The signal is $x(t) = \text{rect}\left(\frac{t-2}{4}\right)$.
This is a rectangular pulse centered at $t=2$ with a width $T=4$.
We use the property $\mathcal{F}\{\text{rect}(t/T)\} = T \text{sinc}(\omega T/2)$.
And the time shifting property: $\mathcal{F}\{x(t-t_0)\} = e^{-j\omega t_0} X(\omega)$.
Here, $t_0 = 2$ and $T = 4$.
The FT of $\text{rect}(t/4)$ is $4 \text{sinc}(\omega(4)/2) = 4 \text{sinc}(2\omega)$.
The FT of $x(t) = \text{rect}\left(\frac{t-2}{4}\right)$ is $e^{-j\omega(2)} (4 \text{sinc}(2\omega)) = 4 e^{-j2\omega} \text{sinc}(2\omega)$.
$X(\omega) = 4 e^{-j2\omega} \frac{\sin(2\omega)}{2\omega}$.

**Answer 8:**
Given: $e^{-at}u(t) \leftrightarrow \frac{1}{a+j\omega}$ for $a>0$.
By the duality property: If $x(t) \leftrightarrow X(\omega)$, then $X(t) \leftrightarrow 2\pi x(-\omega)$.
Let $x(t) = e^{-at}u(t)$ and $X(\omega) = \frac{1}{a+j\omega}$.
We want to find the FT of $X(t) = \frac{1}{a+jt}$.
According to the duality property, $\mathcal{F}\{X(t)\} = 2\pi x(-\omega)$.
$x(-\omega) = e^{-a(-\omega)}u(-\omega) = e^{a\omega}u(-\omega)$.
So, $\mathcal{F}\left\{\frac{1}{a+jt}\right\} = 2\pi e^{a\omega}u(-\omega)$.
(Note: The question asks for the FT of $1/(a+j\omega)$. If we treat $\omega$ as the variable, we want to find the FT of $F(\omega) = \frac{1}{a+j\omega}$.)
Let $g(\omega) = \frac{1}{a+j\omega}$. We want to find its FT, which is $\int_{-\infty}^{\infty} g(\omega) e^{-j\omega t} d\omega$.
Let's use duality on the pair: $e^{-at}u(t) \leftrightarrow \frac{1}{a+j\omega}$.
We want the FT of $Y(\omega) = \frac{1}{a+j\omega}$.
Let's use the definition of FT of $Y(\omega)$ where $\omega$ is the variable.
$y(t) = \mathcal{F}\{Y(\omega)\}$ is not what we want. We want the FT of $Y(\omega)$ where $\omega$ is the domain variable.
Let's check the common FT pair: $\text{rect}(t/T) \leftrightarrow T \text{sinc}(\omega T/2)$.
Using duality, $T \text{sinc}(\omega T/2) \leftrightarrow 2\pi \text{rect}(-\omega T/2)$.
Let's set $T=2$. $2 \text{sinc}(\omega) \leftrightarrow 2\pi \text{rect}(-\omega)$.
$\text{sinc}(\omega) \leftrightarrow \pi \text{rect}(-\omega) = \pi \text{rect}(\omega)$.
So, $\frac{\sin(\omega)}{\omega} \leftrightarrow \pi \text{rect}(-\omega)$. (This definition of sinc is $\sin(t)/t$)
If $\text{sinc}(t) = \frac{\sin(\pi t)}{\pi t}$, then $\text{sinc}(t) \leftrightarrow 2\pi \text{rect}(\omega/(2\pi))$.
So, $\frac{\sin(\pi t)}{\pi t} \leftrightarrow 2\pi \text{rect}(\omega/(2\pi))$.
This is the standard pair for signal processing.

Back to the duality question: $e^{-at}u(t) \leftrightarrow \frac{1}{a+j\omega}$ for $a>0$.
Let $x(t) = e^{-at}u(t)$ and $X(\omega) = \frac{1}{a+j\omega}$.
We want the FT of $X(\omega)$ as a function of $\omega$.
The duality property states that if $x(t) \leftrightarrow X(\omega)$, then $X(t) \leftrightarrow 2\pi x(-\omega)$.
So, let's swap the variables: $X(t) = \frac{1}{a+jt}$ and $2\pi x(-\omega) = 2\pi e^{-a(-\omega)} u(-\omega) = 2\pi e^{a\omega} u(-\omega)$.
This means $\frac{1}{a+jt} \leftrightarrow 2\pi e^{a\omega} u(-\omega)$.
The question is asking for the FT of $\frac{1}{a+j\omega}$. This means we treat $\omega$ as the time variable.
So, we are looking for the FT of the function $F(\omega) = \frac{1}{a+j\omega}$.
Let $t$ be the new frequency variable. We want $\int_{-\infty}^{\infty} \frac{1}{a+j\omega} e^{-j\omega t} d\omega$.
This is precisely the inverse Fourier transform of $\frac{1}{a+j\omega}$.
Let's use duality:
From the pair $e^{-at}u(t) \leftrightarrow \frac{1}{a+j\omega}$, we swap the roles of $t$ and $\omega$ and apply the duality rule.
Let $g(t) = e^{-at}u(t)$, so $G(\omega) = \frac{1}{a+j\omega}$.
We want the FT of $G(\omega)$, which is $\mathcal{F}\{G(\omega)\}$.
By duality, $\mathcal{F}\{G(\omega)\} = \mathcal{F}\left\{\frac{1}{a+j\omega}\right\}$.
We know that $g(t) \leftrightarrow G(\omega)$.
Then $G(t) \leftrightarrow 2\pi g(-\omega)$.
So, $\mathcal{F}\left\{\frac{1}{a+j\omega}\right\} = 2\pi e^{-a(-\omega)}u(-\omega) = 2\pi e^{a\omega}u(-\omega)$.
This is the FT of the function $\frac{1}{a+j\omega}$ with respect to $\omega$.

---

### 8. Important Points to Remember

*   **Existence Conditions:** Absolute integrability is key. Without it, the standard FT doesn't exist, though generalized FTs might.
*   **Properties as Tools:** The properties are your toolbox for analyzing signals and systems. Memorize them!
*   **Convolution vs. Multiplication:** Remember that convolution in time is multiplication in frequency, and vice-versa. This is a fundamental duality.
*   **Time Shift = Phase Shift:** Shifting in time adds a linear phase term.
*   **Frequency Shift = Spectrum Shift:** Multiplying by $e^{j\omega_0 t}$ shifts the spectrum.
*   **Time Scaling:** Compressing time stretches frequency, and vice-versa.
*   **Duality:** A powerful tool that relates different signal forms in time and frequency.
*   **Parseval's Theorem:** Energy is conserved across domains.

---

This concludes the study notes for Module 2, Topic: Fourier Transform: Existence and Properties of Continuous-Time Fourier Transform. Practice applying these properties to various signals and systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
