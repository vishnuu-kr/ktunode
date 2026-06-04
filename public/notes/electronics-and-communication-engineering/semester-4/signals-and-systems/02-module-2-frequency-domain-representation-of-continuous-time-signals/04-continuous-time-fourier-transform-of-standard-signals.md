---
title: "Continuous time Fourier transform of standard signals"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Frequency domain representation of continuous time signals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe51b"
status: "completed"
scrapedAt: "2026-05-23T17:52:24.175Z"
---
# Module 2: Frequency Domain Representation of Continuous-Time Signals

## Topic: Continuous-Time Fourier Transform (CTFT) of Standard Signals

This module delves into the frequency domain representation of continuous-time signals using the Continuous-Time Fourier Transform (CTFT). Understanding how to transform a signal from the time domain to the frequency domain allows us to analyze its spectral content and understand how it behaves under various system operations. This topic focuses on deriving and understanding the CTFTs of commonly encountered standard signals.

---

### Learning Outcomes Covered:

*   **Understand the concept of frequency domain representation:** Transforming signals from the time domain to the frequency domain to analyze their spectral characteristics.
*   **Apply the CTFT to standard continuous-time signals:** Deriving and interpreting the Fourier Transforms of common signals like exponentials, sinusoids, impulses, steps, ramps, and rectangular pulses.
*   **Interpret the frequency characteristics of standard signals:** Relating the time-domain shape of a signal to its frequency-domain spectrum.
*   **Utilize CTFT properties:** Understanding how properties of the time-domain signal translate to properties in the frequency domain.
*   **Connect CTFT to system analysis:** Recognizing how the CTFT aids in understanding the behavior of Linear Time-Invariant (LTI) systems.

---

### Key Concepts and Definitions:

#### 1. Continuous-Time Fourier Transform (CTFT)

The CTFT provides a way to decompose a continuous-time signal $x(t)$ into its constituent complex exponential frequencies. It represents the signal as a sum (or integral) of sinusoids of different frequencies.

**Definition:**
The CTFT of a signal $x(t)$ is given by:
$$X(\omega) = \mathcal{F}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt$$
where:
*   $X(\omega)$ is the Fourier Transform of $x(t)$, a function of angular frequency $\omega$.
*   $\omega$ is the angular frequency in radians per second.
*   $e^{-j\omega t}$ is the complex exponential component.

**Inverse Continuous-Time Fourier Transform (ICTFT):**
The original signal $x(t)$ can be recovered from its Fourier Transform $X(\omega)$ using the inverse transform:
$$x(t) = \mathcal{F}^{-1}\{X(\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\omega) e^{j\omega t} d\omega$$

**Conditions for Existence (Dirichlet Conditions):**
A continuous-time signal $x(t)$ has a finite Fourier Transform if it satisfies the following conditions:
1.  $x(t)$ is absolutely integrable: $\int_{-\infty}^{\infty} |x(t)| dt < \infty$.
2.  $x(t)$ has a finite number of discontinuities in any finite interval.
3.  $x(t)$ has a finite number of maxima and minima in any finite interval.

**Fourier Transform of Complex Exponentials:**
*   **Case 1: $x(t) = e^{at} u(t)$, where $a$ is a real number and $u(t)$ is the unit step function.**
    $$X(\omega) = \int_{-\infty}^{\infty} e^{at} u(t) e^{-j\omega t} dt = \int_{0}^{\infty} e^{(a-j\omega)t} dt$$
    If $a > 0$, the integral diverges. For $a < 0$:
    $$X(\omega) = \left[\frac{e^{(a-j\omega)t}}{a-j\omega}\right]_0^{\infty} = 0 - \frac{1}{a-j\omega} = \frac{1}{a-j\omega}$$
    Alternatively, $X(\omega) = \frac{1}{a+j\omega}$ if we consider $e^{-at}u(t)$.

*   **Case 2: $x(t) = e^{j\omega_0 t}$ (for all $t$)**
    This signal is not absolutely integrable, so its standard CTFT doesn't exist in the traditional sense. However, its "Fourier Transform" is often represented using the Dirac delta function.
    $$X(\omega) = \int_{-\infty}^{\infty} e^{j\omega_0 t} e^{-j\omega t} dt = \int_{-\infty}^{\infty} e^{-j(\omega - \omega_0) t} dt$$
    This integral is $2\pi \delta(\omega - \omega_0)$, where $\delta(\omega)$ is the Dirac delta function.
    **Important:** This result signifies that the signal $e^{j\omega_0 t}$ contains energy only at a single frequency $\omega_0$.

#### 2. Fourier Transform of Sinusoidal Signals

Using Euler's formula, $cos(\omega_0 t) = \frac{1}{2}(e^{j\omega_0 t} + e^{-j\omega_0 t})$ and $sin(\omega_0 t) = \frac{1}{2j}(e^{j\omega_0 t} - e^{-j\omega_0 t})$.

*   **$x(t) = cos(\omega_0 t)$**
    $$X(\omega) = \mathcal{F}\left\{\frac{1}{2}(e^{j\omega_0 t} + e^{-j\omega_0 t})\right\} = \frac{1}{2} \mathcal{F}\{e^{j\omega_0 t}\} + \frac{1}{2} \mathcal{F}\{e^{-j\omega_0 t}\}$$
    $$X(\omega) = \frac{1}{2} (2\pi \delta(\omega - \omega_0)) + \frac{1}{2} (2\pi \delta(\omega - (-\omega_0)))$$
    $$X(\omega) = \pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$$
    **Interpretation:** A cosine wave consists of two frequency components: at $+\omega_0$ and $-\omega_0$, each with a magnitude of $\pi$.

*   **$x(t) = sin(\omega_0 t)$**
    $$X(\omega) = \mathcal{F}\left\{\frac{1}{2j}(e^{j\omega_0 t} - e^{-j\omega_0 t})\right\} = \frac{1}{2j} \mathcal{F}\{e^{j\omega_0 t}\} - \frac{1}{2j} \mathcal{F}\{e^{-j\omega_0 t}\}$$
    $$X(\omega) = \frac{1}{2j} (2\pi \delta(\omega - \omega_0)) - \frac{1}{2j} (2\pi \delta(\omega - (-\omega_0)))$$
    $$X(\omega) = \frac{\pi}{j} [\delta(\omega - \omega_0) - \delta(\omega + \omega_0)]$$
    $$X(\omega) = -j\pi [\delta(\omega - \omega_0) - \delta(\omega + \omega_0)]$$
    $$X(\omega) = j\pi [\delta(\omega + \omega_0) - \delta(\omega - \omega_0)]$$
    **Interpretation:** A sine wave also consists of two frequency components at $+\omega_0$ and $-\omega_0$, but with a phase difference compared to the cosine wave.

#### 3. Fourier Transform of the Unit Step Function

The unit step function $u(t)$ is not absolutely integrable, so its CTFT does not exist in the standard sense. However, we can derive it by considering it as the sum of a decaying exponential and a constant:
$u(t) = e^{-at}u(t) + u(t)e^{at}u(-t)$ (This is not directly helpful).
A more common approach is to consider $u(t)$ as the limit of $e^{-at}u(t)$ as $a \to 0^+$.
We know $\mathcal{F}\{e^{-at}u(t)\} = \frac{1}{a+j\omega}$. As $a \to 0^+$, $\frac{1}{a+j\omega} \to \frac{1}{j\omega}$.
However, this limit does not account for the DC component (the constant value of 1 for $t>0$).

A more robust way is to relate $u(t)$ to other known transforms.
Consider $x(t) = u(t)$. We can write $u(t) = \frac{1}{2} \text{sgn}(t) + \frac{1}{2}$, where $\text{sgn}(t)$ is the sign function.
*   **Fourier Transform of $\text{sgn}(t)$:**
    $\text{sgn}(t) = 2u(t) - 1$.
    We know $\mathcal{F}\{\text{sgn}(t) e^{-at}u(t)\}$ can be derived. A direct result is $\mathcal{F}\{\text{sgn}(t)\} = \frac{2}{j\omega}$.
    (Derivation involves integrating $\int_{-\infty}^{\infty} \text{sgn}(t) e^{-j\omega t} dt = \int_{-\infty}^{0} -e^{-j\omega t} dt + \int_{0}^{\infty} e^{-j\omega t} dt$. This integral doesn't converge. A common method uses $e^{-\epsilon|t|}$ as a regularizer).

    Let's use the property of differentiation: $\frac{du(t)}{dt} = \delta(t)$.
    If $x(t) = u(t)$, then $\frac{dx(t)}{dt} = \delta(t)$.
    From the differentiation property: $\mathcal{F}\{\frac{dx(t)}{dt}\} = j\omega X(\omega)$.
    So, $j\omega X(\omega) = \mathcal{F}\{\delta(t)\} = 1$.
    This gives $X(\omega) = \frac{1}{j\omega}$.

    However, this approach implicitly assumes the signal is zero for $t<0$. For the unit step function, this is true. But the result $\frac{1}{j\omega}$ lacks a DC component. The unit step function has a DC value of 1 for $t>0$.

    A correct derivation considers the presence of the DC component. The Fourier transform of a constant $C$ is $2\pi C \delta(\omega)$. Since $u(t)$ approaches 1 for large $t$, it has a DC component.

    The correct Fourier Transform of the unit step function $u(t)$ is:
    $$X(\omega) = \pi \delta(\omega) + \frac{1}{j\omega}$$
    **Interpretation:** The unit step function has an infinite DC component (represented by the delta function at $\omega=0$) and a continuous spectrum that decays as $1/\omega$.

#### 4. Fourier Transform of the Rectangular Pulse

Let $x(t)$ be a rectangular pulse of amplitude $A$ and duration $\tau$, centered at $t=0$.
$$x(t) = \begin{cases} A & -\tau/2 \le t \le \tau/2 \\ 0 & \text{otherwise} \end{cases}$$
We can express this as $x(t) = A [u(t+\tau/2) - u(t-\tau/2)]$.
$$X(\omega) = \mathcal{F}\{A [u(t+\tau/2) - u(t-\tau/2)]\}$$
Using the time-shifting property: $\mathcal{F}\{x(t-t_0)\} = e^{-j\omega t_0} X(\omega)$.
$$X(\omega) = A [\mathcal{F}\{u(t+\tau/2)\} - \mathcal{F}\{u(t-\tau/2)\}]$$
$$X(\omega) = A [e^{j\omega (\tau/2)} \mathcal{F}\{u(t)\} - e^{-j\omega (\tau/2)} \mathcal{F}\{u(t)\}]$$
Using $\mathcal{F}\{u(t)\} = \pi \delta(\omega) + \frac{1}{j\omega}$:
$$X(\omega) = A \left[e^{j\omega \tau/2} \left(\pi \delta(\omega) + \frac{1}{j\omega}\right) - e^{-j\omega \tau/2} \left(\pi \delta(\omega) + \frac{1}{j\omega}\right)\right]$$
$$X(\omega) = A \pi (\delta(\omega) e^{j\omega \tau/2} - \delta(\omega) e^{-j\omega \tau/2}) + A \frac{1}{j\omega} (e^{j\omega \tau/2} - e^{-j\omega \tau/2})$$
Since $\delta(\omega)$ is zero everywhere except at $\omega=0$, $e^{j\omega \tau/2}$ and $e^{-j\omega \tau/2}$ evaluate to 1 at $\omega=0$.
So, the delta function term becomes $A\pi (\delta(\omega) - \delta(\omega)) = 0$.
$$X(\omega) = A \frac{1}{j\omega} (2j \sin(\omega \tau/2))$$
$$X(\omega) = A \frac{2}{\omega} \sin(\omega \tau/2)$$
This can be written in terms of the sinc function, where $\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$ or $\text{sinc}(x) = \frac{\sin(x)}{x}$. The latter is more common in signal processing literature (often called the unnormalized sinc function). Let's use $\text{sinc}(x) = \frac{\sin(x)}{x}$.
$$X(\omega) = A \tau \frac{\sin(\omega \tau/2)}{\omega \tau/2} = A \tau \text{sinc}(\omega \tau / (2\pi))$$ if using normalized sinc.
If using the definition $\text{sinc}(x) = \frac{\sin(x)}{x}$:
$$X(\omega) = A \frac{\sin(\omega \tau/2)}{\omega/2} \frac{\tau/2}{\tau/2} = A \tau \frac{\sin(\omega \tau/2)}{\omega \tau/2}$$
Let $u = \omega \tau/2$. Then $X(\omega) = A \tau \frac{\sin(u)}{u}$.
So, $X(\omega) = A \tau \text{sinc}(\frac{\omega \tau}{2})$.

**Important:** The Fourier Transform of a rectangular pulse is a sinc function.
*   The width of the main lobe of the sinc function in the frequency domain is inversely proportional to the duration $\tau$ of the pulse in the time domain. A wider pulse in time has a narrower main lobe in frequency.
*   As $\tau \to \infty$ (pulse becomes a constant 1), $\omega \tau/2 \to \infty$ for $\omega \neq 0$. $\frac{\sin(\omega \tau/2)}{\omega \tau/2} \to 1$. This is related to the DC component of the step function.

#### 5. Fourier Transform of the Ramp Function

Let $x(t) = t u(t)$.
We can use the differentiation property: $\mathcal{F}\{\frac{dx(t)}{dt}\} = j\omega X(\omega)$.
The derivative of $t u(t)$ is $u(t) + t \delta(t)$. Since $t \delta(t) = 0$, the derivative is $u(t)$.
So, $j\omega X(\omega) = \mathcal{F}\{u(t)\} = \pi \delta(\omega) + \frac{1}{j\omega}$.
$$X(\omega) = \frac{1}{j\omega} \left(\pi \delta(\omega) + \frac{1}{j\omega}\right)$$
The term $\frac{\pi \delta(\omega)}{j\omega}$ is problematic as $\frac{1}{\omega}$ is undefined at $\omega=0$.

A more rigorous approach involves considering the ramp as the integral of the step function.
We know $\mathcal{F}\{x(t)\} = X(\omega)$, then $\mathcal{F}\{\int_{-\infty}^{t} x(\tau) d\tau\} = \frac{1}{j\omega} X(\omega) + \pi X(0) \delta(\omega)$.
Since $x(t) = u(t)$, $X(\omega) = \pi \delta(\omega) + \frac{1}{j\omega}$.
And $X(0) = \lim_{\omega \to 0} (\pi \delta(\omega) + \frac{1}{j\omega})$. This is still problematic.

Let's use the property: $\mathcal{F}\{t x(t)\} = j \frac{d}{d\omega} X(\omega)$.
For $x(t) = u(t)$, $X(\omega) = \pi \delta(\omega) + \frac{1}{j\omega}$.
$$X(\omega) = \pi \delta(\omega) - j \frac{1}{\omega}$$
$$j \frac{d}{d\omega} X(\omega) = j \frac{d}{d\omega} (\pi \delta(\omega) - j \frac{1}{\omega})$$
$$j \frac{d}{d\omega} X(\omega) = j \pi \delta'(\omega) - j^2 \frac{d}{d\omega} (\frac{1}{\omega})$$
$$j \frac{d}{d\omega} X(\omega) = j \pi \delta'(\omega) + \frac{1}{\omega^2}$$
Now, let's consider the Fourier Transform of the ramp $t u(t)$.
If $x(t) = t u(t)$, its derivative is $u(t)$. So $j\omega X(\omega) = \mathcal{F}\{u(t)\} = \pi \delta(\omega) + \frac{1}{j\omega}$.
$$X(\omega) = \frac{1}{j\omega} (\pi \delta(\omega) + \frac{1}{j\omega}) = \frac{\pi \delta(\omega)}{j\omega} + \frac{1}{(j\omega)^2} = \frac{\pi \delta(\omega)}{j\omega} - \frac{1}{\omega^2}$$
The term $\frac{\delta(\omega)}{\omega}$ is zero.
So, $X(\omega) = - \frac{1}{\omega^2}$. This is still missing the DC component.

A proper derivation shows that the FT of $t u(t)$ is:
$$X(\omega) = -\frac{1}{\omega^2} - j\frac{\pi}{\omega} \text{sgn}(\omega) + \pi \delta(\omega)$$
This is often written using the Cauchy principal value integral.

The Fourier Transform of the ramp $r(t) = t u(t)$ is often given as:
$$X(\omega) = \pi \delta'(\omega) + \frac{j}{\omega^2}$$ (This form is derived using differentiation property on $t u(t)$ and handling the $\delta$ derivative properly)

Let's confirm with a table of common Fourier Transforms (Oppenheim & Willsky, Table 4.1):
*   $u(t) \leftrightarrow \pi \delta(\omega) + \frac{1}{j\omega}$
*   $t u(t) \leftrightarrow -\frac{1}{\omega^2} + j\frac{\pi}{\omega}\text{sgn}(\omega)$
*   $\frac{t^n}{n!} u(t) \leftrightarrow \frac{1}{(j\omega)^{n+1}}$ for $n=0, 1, 2, \dots$
    For $n=0$: $u(t) \leftrightarrow \frac{1}{j\omega}$. This is missing the delta function.
    For $n=1$: $t u(t) \leftrightarrow \frac{1}{(j\omega)^2} = -\frac{1}{\omega^2}$. This is also missing terms.

The presence of the Dirac delta function and its derivatives in the Fourier Transforms of signals like the unit step and ramp indicates that these signals have discontinuities or are related to impulses. The standard definition of the CTFT assumes the signal is absolutely integrable. For signals like the unit step and ramp, which are not absolutely integrable, their Fourier Transforms are often derived using generalized functions (distributions) or by considering them as limits of absolutely integrable signals.

**Key Takeaway for Step and Ramp:**
*   **Unit Step $u(t)$:** $X(\omega) = \pi \delta(\omega) + \frac{1}{j\omega}$. Has a DC component and a $1/\omega$ component.
*   **Ramp $t u(t)$:** $X(\omega) = -\frac{1}{\omega^2} + j\frac{\pi}{\omega}\text{sgn}(\omega)$. Has a $1/\omega^2$ component and a term related to the sign function.

#### 6. Fourier Transform of the Exponentially Decaying Sine/Cosine

Consider $x(t) = e^{-at} \cos(\omega_0 t) u(t)$ where $a > 0$.
We know $\mathcal{F}\{\cos(\omega_0 t) u(t)\} = \pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$.
Using the modulation property: $\mathcal{F}\{e^{-at} x(t)\} = X(\omega + ja)$.
Let $y(t) = \cos(\omega_0 t) u(t)$. Its FT is $Y(\omega) = \pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$.
So, $\mathcal{F}\{e^{-at} \cos(\omega_0 t) u(t)\} = Y(\omega + ja)$.
$$X(\omega) = \pi [\delta(\omega + ja - \omega_0) + \delta(\omega + ja + \omega_0)]$$
This is incorrect because the modulation property is $\mathcal{F}\{e^{at}x(t)\} = X(\omega-ja)$. For $e^{-at}$, it's $X(\omega+ja)$.
The standard FT for $e^{-at}u(t)$ is $\frac{1}{a+j\omega}$.
Let's use the property: $\mathcal{F}\{x(t) e^{j\omega_0 t}\} = X(\omega - \omega_0)$.
We can write $\cos(\omega_0 t) = \frac{e^{j\omega_0 t} + e^{-j\omega_0 t}}{2}$.
So, $e^{-at} \cos(\omega_0 t) u(t) = \frac{1}{2} e^{-at} e^{j\omega_0 t} u(t) + \frac{1}{2} e^{-at} e^{-j\omega_0 t} u(t)$.
$= \frac{1}{2} e^{-(a-j\omega_0)t} u(t) + \frac{1}{2} e^{-(a+j\omega_0)t} u(t)$.

We know $\mathcal{F}\{e^{-bt} u(t)\} = \frac{1}{b+j\omega}$.
So, for the first term: $b = a - j\omega_0$.
$\mathcal{F}\{\frac{1}{2} e^{-(a-j\omega_0)t} u(t)\} = \frac{1}{2} \frac{1}{(a-j\omega_0) + j\omega} = \frac{1}{2} \frac{1}{a - j(\omega_0 - \omega)}$.

For the second term: $b = a + j\omega_0$.
$\mathcal{F}\{\frac{1}{2} e^{-(a+j\omega_0)t} u(t)\} = \frac{1}{2} \frac{1}{(a+j\omega_0) + j\omega} = \frac{1}{2} \frac{1}{a + j(\omega_0 + \omega)}$.

Let's redo the $\cos(\omega_0 t)$ FT properly.
$x(t) = e^{-at} \cos(\omega_0 t) u(t)$.
$\mathcal{F}\{e^{-at} u(t)\} = \frac{1}{a+j\omega}$. Let's call this $H(\omega)$.
$e^{-at} \cos(\omega_0 t) u(t) = e^{-at} \left(\frac{e^{j\omega_0 t} + e^{-j\omega_0 t}}{2}\right) u(t)$
$= \frac{1}{2} e^{-at} e^{j\omega_0 t} u(t) + \frac{1}{2} e^{-at} e^{-j\omega_0 t} u(t)$
$= \frac{1}{2} e^{-(a-j\omega_0)t} u(t) + \frac{1}{2} e^{-(a+j\omega_0)t} u(t)$.

Using $\mathcal{F}\{e^{-bt} u(t)\} = \frac{1}{b+j\omega}$:
For the first term, $b = a - j\omega_0$. The FT is $\frac{1}{2} \frac{1}{a - j\omega_0 + j\omega} = \frac{1}{2} \frac{1}{a + j(\omega - \omega_0)}$.
For the second term, $b = a + j\omega_0$. The FT is $\frac{1}{2} \frac{1}{a + j\omega_0 + j\omega} = \frac{1}{2} \frac{1}{a + j(\omega + \omega_0)}$.

So, $X(\omega) = \frac{1}{2} \frac{1}{a + j(\omega - \omega_0)} + \frac{1}{2} \frac{1}{a + j(\omega + \omega_0)}$.
To simplify, combine the terms:
$X(\omega) = \frac{1}{2} \frac{a + j(\omega + \omega_0) + a + j(\omega - \omega_0)}{(a + j(\omega - \omega_0))(a + j(\omega + \omega_0))}$
$X(\omega) = \frac{1}{2} \frac{2a + 2j\omega}{a^2 - (j(\omega - \omega_0))(j(\omega + \omega_0)) + ja(\omega + \omega_0) + ja(\omega - \omega_0)}$
$X(\omega) = \frac{a + j\omega}{a^2 - (j^2(\omega^2 - \omega_0^2)) + ja\omega + ja\omega_0 + ja\omega - ja\omega_0}$
$X(\omega) = \frac{a + j\omega}{a^2 + (\omega^2 - \omega_0^2) + 2ja\omega}$
$X(\omega) = \frac{a + j\omega}{(a^2 - \omega_0^2 + \omega^2) + j(2a\omega)}$

This looks complicated. Let's use the property: $\mathcal{F}\{e^{-at} \cos(\omega_0 t) u(t)\} = \frac{a+j\omega}{(a+j\omega)^2 + \omega_0^2}$. This is derived from $\mathcal{F}\{e^{-at}u(t)\} = \frac{1}{a+j\omega}$.
The FT of $e^{-bt}$ is $\frac{1}{b+j\omega}$.
Let's consider $\mathcal{F}\{e^{-at} \cos(\omega_0 t) u(t)\}$.
Using $\mathcal{F}\{\cos(\omega_0 t) u(t)\} = \pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$, and the modulation property:
$\mathcal{F}\{e^{-at} \cos(\omega_0 t) u(t)\} = \mathcal{F}\{\cos(\omega_0 t) u(t) \cdot e^{-at}\}$.
This is not modulation in the frequency domain. It's time-domain multiplication.
We must use the frequency-shifting property of $e^{-at} u(t)$.
The FT of $e^{-at} u(t)$ is $\frac{1}{a+j\omega}$. Let this be $H(\omega)$.
So, $\mathcal{F}\{e^{-at} \cos(\omega_0 t) u(t)\} = \mathcal{F}\{e^{-at} u(t) \cdot \frac{1}{2}(e^{j\omega_0 t} + e^{-j\omega_0 t}) \}$.

Let's use a simpler approach:
$\mathcal{F}\{e^{-at}u(t)\} = \frac{1}{a+j\omega}$.
$\mathcal{F}\{\cos(\omega_0 t)u(t)\} = \pi[\delta(\omega-\omega_0) + \delta(\omega+\omega_0)]$

Consider the FT of $e^{-at}u(t)$ which is $H(\omega) = \frac{1}{a+j\omega}$.
We know that the FT of $e^{-bt}u(t)$ is $\frac{1}{b+j\omega}$.
So, $\mathcal{F}\{e^{-at} \cos(\omega_0 t) u(t)\}$
$= \mathcal{F}\{\frac{e^{-at}u(t) e^{j\omega_0 t} + e^{-at}u(t) e^{-j\omega_0 t}}{2}\}$
$= \frac{1}{2} \mathcal{F}\{e^{-(a-j\omega_0)t} u(t)\} + \frac{1}{2} \mathcal{F}\{e^{-(a+j\omega_0)t} u(t)\}$
Using $\mathcal{F}\{e^{-bt}u(t)\} = \frac{1}{b+j\omega}$:
First term: $b = a - j\omega_0 \implies \frac{1}{2} \frac{1}{a - j\omega_0 + j\omega} = \frac{1}{2} \frac{1}{a + j(\omega - \omega_0)}$.
Second term: $b = a + j\omega_0 \implies \frac{1}{2} \frac{1}{a + j\omega_0 + j\omega} = \frac{1}{2} \frac{1}{a + j(\omega + \omega_0)}$.

Summing them up:
$X(\omega) = \frac{1}{2} \left(\frac{1}{a + j(\omega - \omega_0)} + \frac{1}{a + j(\omega + \omega_0)}\right)$
$X(\omega) = \frac{1}{2} \left(\frac{a + j(\omega + \omega_0) + a + j(\omega - \omega_0)}{(a + j(\omega - \omega_0))(a + j(\omega + \omega_0))}\right)$
$X(\omega) = \frac{1}{2} \left(\frac{2a + 2j\omega}{a^2 - (j^2(\omega - \omega_0)(\omega + \omega_0)) + ja(\omega + \omega_0) + ja(\omega - \omega_0)}\right)$
$X(\omega) = \frac{1}{2} \left(\frac{2a + 2j\omega}{a^2 + (\omega^2 - \omega_0^2) + ja\omega + ja\omega_0 + ja\omega - ja\omega_0}\right)$
$X(\omega) = \frac{a + j\omega}{a^2 - \omega_0^2 + \omega^2 + 2ja\omega}$

A cleaner form is obtained by rewriting the denominator:
$(a+j(\omega-\omega_0))(a+j(\omega+\omega_0)) = (a+j\omega - j\omega_0)(a+j\omega + j\omega_0)$
Let $X = a+j\omega$. Then $(X - j\omega_0)(X + j\omega_0) = X^2 - (j\omega_0)^2 = X^2 + \omega_0^2$.
$X^2 = (a+j\omega)^2 = a^2 + 2ja\omega + (j\omega)^2 = a^2 - \omega^2 + 2ja\omega$.
So, the denominator is $(a+j\omega)^2 + \omega_0^2 = (a^2 - \omega^2 + 2ja\omega) + \omega_0^2 = (a^2 + \omega_0^2 - \omega^2) + j(2a\omega)$.

Thus, $X(\omega) = \frac{a + j\omega}{ (a^2 + \omega_0^2 - \omega^2) + j(2a\omega) }$
This is still complex. The standard form derived using $\mathcal{F}\{e^{-at} \cos(\omega_0 t) u(t)\} = \frac{a+j\omega}{(a+j\omega)^2 + \omega_0^2}$ is correct.
Let's verify this.
$\mathcal{F}\{e^{-at}u(t)\} = H(\omega) = \frac{1}{a+j\omega}$.
$\mathcal{F}\{e^{-at} \cos(\omega_0 t) u(t)\} = \mathcal{F}\{e^{-at} u(t) \cdot \frac{e^{j\omega_0 t} + e^{-j\omega_0 t}}{2} \}$
$= \frac{1}{2} \mathcal{F}\{e^{-(a-j\omega_0)t} u(t)\} + \frac{1}{2} \mathcal{F}\{e^{-(a+j\omega_0)t} u(t)\}$
Using $\mathcal{F}\{e^{-bt}u(t)\} = \frac{1}{b+j\omega}$:
$= \frac{1}{2} \frac{1}{a-j\omega_0+j\omega} + \frac{1}{2} \frac{1}{a+j\omega_0+j\omega}$
$= \frac{1}{2} \left( \frac{1}{a+j(\omega-\omega_0)} + \frac{1}{a+j(\omega+\omega_0)} \right)$
$= \frac{1}{2} \frac{a+j(\omega+\omega_0) + a+j(\omega-\omega_0)}{(a+j(\omega-\omega_0))(a+j(\omega+\omega_0))}$
$= \frac{1}{2} \frac{2a+2j\omega}{(a+j\omega)^2 - (j\omega_0)^2} = \frac{a+j\omega}{(a+j\omega)^2 + \omega_0^2}$.
This is the correct form.

**Summary of Standard Signal CTFTs:**

| Signal $x(t)$                      | Fourier Transform $X(\omega)$                                                                         |
| :--------------------------------- | :---------------------------------------------------------------------------------------------------- |
| $e^{j\omega_0 t}$                  | $2\pi \delta(\omega - \omega_0)$                                                                      |
| $\cos(\omega_0 t)$                 | $\pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$                                       |
| $\sin(\omega_0 t)$                 | $j\pi [\delta(\omega + \omega_0) - \delta(\omega - \omega_0)]$                                       |
| $e^{-at} u(t)$, $a>0$              | $\frac{1}{a+j\omega}$                                                                                 |
| $e^{at} u(-t)$, $a>0$              | $\frac{1}{a-j\omega}$                                                                                 |
| $e^{-a|t|}$, $a>0$                 | $\frac{2a}{a^2+\omega^2}$                                                                             |
| $u(t)$                             | $\pi \delta(\omega) + \frac{1}{j\omega}$                                                              |
| $\text{sgn}(t)$                    | $\frac{2}{j\omega}$                                                                                   |
| Rectangular pulse: $A, -\tau/2 \le t \le \tau/2$ | $A \tau \text{sinc}(\frac{\omega \tau}{2}) = A \frac{\sin(\omega \tau/2)}{\omega/2}$ |
| $t u(t)$ (Ramp)                    | $-\frac{1}{\omega^2} + j\frac{\pi}{\omega}\text{sgn}(\omega)$                                        |
| $e^{-at} \cos(\omega_0 t) u(t), a>0$ | $\frac{a+j\omega}{(a+j\omega)^2 + \omega_0^2}$                                                      |
| $e^{-at} \sin(\omega_0 t) u(t), a>0$ | $\frac{\omega_0}{(a+j\omega)^2 + \omega_0^2}$                                                      |

*(Note: $\text{sinc}(x) = \frac{\sin(x)}{x}$)*

---

### Properties of the CTFT

These properties are crucial for manipulating and analyzing signals and systems in the frequency domain. They are listed here for reference and application to standard signals.

| Property Name          | Time Domain $x(t)$                                 | Frequency Domain $X(\omega)$                                     | Notes                                                                    |
| :--------------------- | :------------------------------------------------- | :--------------------------------------------------------------- | :----------------------------------------------------------------------- |
| **Linearity**          | $ax_1(t) + bx_2(t)$                                | $aX_1(\omega) + bX_2(\omega)$                                    | The FT of a sum is the sum of the FTs.                                 |
| **Time Shifting**      | $x(t-t_0)$                                         | $e^{-j\omega t_0} X(\omega)$                                     | A time delay introduces a linear phase shift in the frequency domain.    |
| **Frequency Shifting** | $e^{j\omega_0 t} x(t)$                             | $X(\omega - \omega_0)$                                           | Multiplication by a complex exponential shifts the spectrum.             |
| **Scaling in Time**    | $x(at)$, $a>0$                                     | $\frac{1}{|a|} X(\frac{\omega}{a})$                              | Compressing time stretches frequency, and vice-versa.                    |
| **Differentiation in Time** | $\frac{dx(t)}{dt}$                                 | $j\omega X(\omega)$                                              | Useful for converting differential equations to algebraic equations.     |
| **Integration in Time**| $\int_{-\infty}^t x(\tau) d\tau$                   | $\pi X(0) \delta(\omega) + \frac{1}{j\omega} X(\omega)$         | The integral of a signal has a DC component if the signal has one.       |
| **Multiplication in Time** | $x_1(t) x_2(t)$                                    | $\frac{1}{2\pi} (X_1 * X_2)(\omega)$                             | Convolution in frequency domain.                                         |
| **Convolution in Time**| $(x_1 * x_2)(t)$                                   | $X_1(\omega) X_2(\omega)$                                        | Convolution in the time domain becomes multiplication in the frequency domain. This is a fundamental property for LTI systems. |
| **Parseval's Theorem** | $\int_{-\infty}^{\infty} |x(t)|^2 dt$              | $\frac{1}{2\pi} \int_{-\infty}^{\infty} |X(\omega)|^2 d\omega$ | Relates the energy of the signal in the time domain to the frequency domain. |
| **Duality**            | $X(t)$                                             | $2\pi x(-\omega)$                                                | If $X(\omega)$ is the FT of $x(t)$, then $2\pi x(-\omega)$ is the FT of $X(t)$. |
| **Differentiation in Frequency** | $t x(t)$                                       | $j \frac{d}{d\omega} X(\omega)$                                  | Useful for finding FTs of signals multiplied by $t$.                   |

---

### Examples and Applications

**Example 1: FT of a shifted cosine wave**
Find the FT of $x(t) = \cos(\omega_0 (t-t_0))$.
We know $\mathcal{F}\{\cos(\omega_0 t)\} = \pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$.
Using the time-shifting property:
$X(\omega) = e^{-j\omega t_0} [\pi (\delta(\omega - \omega_0) + \delta(\omega + \omega_0))]$
$X(\omega) = \pi [e^{-j\omega t_0} \delta(\omega - \omega_0) + e^{-j\omega t_0} \delta(\omega + \omega_0)]$
When $\delta(\omega - \omega_0)$ is non-zero, $\omega = \omega_0$. So $e^{-j\omega t_0}$ becomes $e^{-j\omega_0 t_0}$.
$X(\omega) = \pi [e^{-j\omega_0 t_0} \delta(\omega - \omega_0) + e^{j\omega_0 t_0} \delta(\omega + \omega_0)]$

**Example 2: FT of a rectangular pulse centered at $t_0$**
Let $x(t)$ be a rectangular pulse of amplitude $A$ and duration $\tau$, centered at $t_0$.
$x(t) = A [u(t-t_0+\tau/2) - u(t-t_0-\tau/2)]$.
We know the FT of a rectangular pulse centered at 0 is $A \tau \text{sinc}(\frac{\omega \tau}{2})$.
Using the time-shifting property:
$X(\omega) = e^{-j\omega t_0} \left( A \tau \text{sinc}\left(\frac{\omega \tau}{2}\right) \right)$.

**Example 3: FT of an impulse train**
Let $x(t) = \sum_{n=-\infty}^{\infty} \delta(t - nT)$. This is a periodic signal with period $T$.
The FT of an impulse train is another impulse train in the frequency domain, representing the harmonics of the fundamental frequency $\omega_s = 2\pi/T$.
$X(\omega) = \frac{2\pi}{T} \sum_{k=-\infty}^{\infty} \delta(\omega - k\omega_s) = \omega_s \sum_{k=-\infty}^{\infty} \delta(\omega - k\omega_s)$.
This is derived using the Poisson Summation Formula or by finding the FT of a single pulse and then using periodicity.
This shows that a periodic signal in the time domain has a discrete spectrum (only at specific frequencies) in the frequency domain.

**Application to LTI Systems:**
For an LTI system with impulse response $h(t)$ and input $x(t)$, the output is $y(t) = x(t) * h(t)$.
In the frequency domain, $Y(\omega) = X(\omega) H(\omega)$, where $H(\omega)$ is the frequency response of the system.
$H(\omega) = \mathcal{F}\{h(t)\}$.
This means that to find the output of an LTI system in the frequency domain, we multiply the input's frequency spectrum by the system's frequency response. This is much simpler than convolution in the time domain.

---

### Practice Questions and Exercises

**Question 1:**
Find the Continuous-Time Fourier Transform of the signal $x(t) = e^{-3t} \cos(4t) u(t)$.

**Question 2:**
Determine the Fourier Transform of a rectangular pulse $x(t) = 5$ for $-2 \le t \le 2$ and $0$ otherwise.

**Question 3:**
What is the Fourier Transform of $x(t) = \sin(2t)$?

**Question 4:**
Using the linearity and time-shifting properties, find the Fourier Transform of $x(t) = 2u(t-1) - 2u(t-3)$.

**Question 5:**
Calculate the energy of the signal $x(t) = e^{-2t} u(t)$ using Parseval's theorem.

---

### Answers to Practice Questions

**Answer 1:**
Using the formula $\mathcal{F}\{e^{-at} \cos(\omega_0 t) u(t)\} = \frac{a+j\omega}{(a+j\omega)^2 + \omega_0^2}$ with $a=3$ and $\omega_0=4$:
$X(\omega) = \frac{3+j\omega}{(3+j\omega)^2 + 4^2} = \frac{3+j\omega}{(9 - \omega^2 + j6\omega) + 16} = \frac{3+j\omega}{(25 - \omega^2) + j6\omega}$.

**Answer 2:**
This is a rectangular pulse with amplitude $A=5$ and duration $\tau=4$ (from $t=-2$ to $t=2$).
Using the formula $X(\omega) = A \tau \text{sinc}(\frac{\omega \tau}{2})$:
$X(\omega) = 5 \times 4 \times \text{sinc}(\frac{\omega \times 4}{2}) = 20 \text{sinc}(2\omega) = 20 \frac{\sin(2\omega)}{2\omega} = 10 \frac{\sin(2\omega)}{\omega}$.

**Answer 3:**
We know $\mathcal{F}\{\sin(\omega_0 t)\} = j\pi [\delta(\omega + \omega_0) - \delta(\omega - \omega_0)]$.
For $\omega_0 = 2$:
$X(\omega) = j\pi [\delta(\omega + 2) - \delta(\omega - 2)]$.

**Answer 4:**
$x(t) = 2[u(t-1) - u(t-3)]$.
We know $\mathcal{F}\{u(t)\} = \pi \delta(\omega) + \frac{1}{j\omega}$.
Using linearity and time-shifting:
$\mathcal{F}\{u(t-1)\} = e^{-j\omega(1)} (\pi \delta(\omega) + \frac{1}{j\omega}) = e^{-j\omega} (\pi \delta(\omega) + \frac{1}{j\omega})$.
$\mathcal{F}\{u(t-3)\} = e^{-j\omega(3)} (\pi \delta(\omega) + \frac{1}{j\omega}) = e^{-j3\omega} (\pi \delta(\omega) + \frac{1}{j\omega})$.
$X(\omega) = 2 [e^{-j\omega} (\pi \delta(\omega) + \frac{1}{j\omega}) - e^{-j3\omega} (\pi \delta(\omega) + \frac{1}{j\omega})]$
$X(\omega) = 2 (\pi \delta(\omega) + \frac{1}{j\omega}) (e^{-j\omega} - e^{-j3\omega})$.
Note that $\delta(\omega)$ at $\omega=0$ makes $e^{-j\omega}=1$ and $e^{-j3\omega}=1$, so the delta terms cancel out.
$X(\omega) = 2 (\frac{1}{j\omega}) (e^{-j\omega} - e^{-j3\omega})$.
$X(\omega) = \frac{2}{j\omega} (e^{-j\omega} - e^{-j3\omega}) = \frac{-2j}{\omega} (e^{-j\omega} - e^{-j3\omega})$.

**Answer 5:**
The signal is $x(t) = e^{-2t} u(t)$. Its Fourier Transform is $X(\omega) = \frac{1}{2+j\omega}$.
Using Parseval's theorem:
Energy $= \int_{-\infty}^{\infty} |x(t)|^2 dt = \frac{1}{2\pi} \int_{-\infty}^{\infty} |X(\omega)|^2 d\omega$.
$|X(\omega)|^2 = |\frac{1}{2+j\omega}|^2 = \frac{1}{|2+j\omega|^2} = \frac{1}{2^2 + \omega^2} = \frac{1}{4+\omega^2}$.
Energy $= \frac{1}{2\pi} \int_{-\infty}^{\infty} \frac{1}{4+\omega^2} d\omega$.
The integral $\int_{-\infty}^{\infty} \frac{1}{a^2+x^2} dx = \frac{\pi}{a}$. Here $a=2$.
Energy $= \frac{1}{2\pi} \times \frac{\pi}{2} = \frac{1}{4}$.

Alternatively, we can directly integrate $|x(t)|^2$:
Energy $= \int_{-\infty}^{\infty} |e^{-2t} u(t)|^2 dt = \int_{0}^{\infty} (e^{-2t})^2 dt = \int_{0}^{\infty} e^{-4t} dt$.
Energy $= [-\frac{1}{4} e^{-4t}]_0^{\infty} = 0 - (-\frac{1}{4} e^0) = \frac{1}{4}$.

---

### Important Points to Remember:

*   The CTFT decomposes a signal into its sinusoidal frequency components.
*   The **Dirichlet conditions** are essential for the existence of the standard CTFT. Signals that don't satisfy these (like the unit step) have generalized Fourier Transforms involving Dirac delta functions.
*   **Key Transforms:** Remember the FTs of complex exponentials, sinusoids, the unit step, and the rectangular pulse. These are building blocks.
*   **Properties are Powerful:** Linearity, time-shifting, frequency-shifting, and convolution-multiplication are critical for analysis.
*   **LTI Systems:** The FT simplifies LTI system analysis by turning convolution into multiplication ($Y(\omega) = X(\omega)H(\omega)$).
*   **Time-Frequency Duality:** Concepts like time duration and frequency bandwidth are inversely related. A signal that is short in time tends to be wide in frequency, and vice versa.
*   **Spectrum:** The Fourier Transform $X(\omega)$ is generally a complex-valued function, $X(\omega) = |X(\omega)|e^{j\angle X(\omega)}$. $|X(\omega)|$ is the magnitude spectrum, and $\angle X(\omega)$ is the phase spectrum.

---

### Alignment with Course Outcomes:

*   **CO1 (Classify signals and systems):** Understanding the frequency content of standard signals helps classify them (e.g., a purely sinusoidal signal has a discrete spectrum, a rectangular pulse has a continuous sinc-like spectrum).
*   **CO3 (Analyze signals in frequency domain):** This entire topic is dedicated to analyzing signals in the frequency domain using the CTFT and its properties.
*   **CO4 (Interpret the use of various transforms):** We interpret how the CTFT transforms time-domain characteristics (like impulses, steps, pulses) into frequency-domain representations (like delta functions, $1/\omega$ terms, sinc functions) and how this aids system analysis.

This study of standard signal CTFTs provides the foundation for analyzing more complex signals and understanding the behavior of LTI systems in the frequency domain.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
