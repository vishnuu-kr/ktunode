---
title: "Fourier Transform and its inverse"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462c98"
status: "completed"
scrapedAt: "2026-05-20T17:50:35.119Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 1: Fourier Integral

### Topic: Fourier Transform and its Inverse

**Learning Outcomes:**

*   Define the Fourier Transform and its inverse for different types of functions.
*   Derive the Fourier Transforms of common functions.
*   State and prove the linearity property of Fourier Transforms.
*   State and prove the shifting properties (frequency and time) of Fourier Transforms.
*   State and prove the scaling property of Fourier Transforms.
*   State and prove the differentiation properties (in time and frequency domains) of Fourier Transforms.
*   State and prove the integration property of Fourier Transforms.
*   State and prove the convolution property of Fourier Transforms.
*   Apply Fourier Transforms to solve ordinary differential equations with constant coefficients.
*   Apply Fourier Transforms to solve partial differential equations with constant coefficients.
*   Determine the Fourier Transforms of generalized functions (Dirac delta function).
*   Apply Fourier Transforms to solve problems in signal processing, control systems, and communication systems.

**Course Outcomes Alignment:**

This topic directly addresses **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.** (Knowledge Level: K3). The learning outcomes provided are specific skills and knowledge required to achieve CO1.

---

### 1. Introduction to Fourier Transforms

The Fourier Transform is a mathematical tool that decomposes a function into its constituent frequencies. It transforms a function from the time domain to the frequency domain, revealing information about the amplitude and phase of each frequency component present in the original signal. This is particularly useful in electrical engineering for analyzing signals, circuits, and systems, and in physical science for studying wave phenomena, heat diffusion, and quantum mechanics.

The Fourier Integral is the continuous analogue of the Fourier Series. While Fourier Series represent periodic functions as a sum of sines and cosines, Fourier Integrals represent non-periodic functions as an integral of sines and cosines.

---

### 2. Definition of Fourier Transform and its Inverse

#### 2.1 Fourier Transform

For a function $f(t)$, its Fourier Transform, denoted by $F(\omega)$ or $\mathcal{F}\{f(t)\}$, is defined as:

$$F(\omega) = \mathcal{F}\{f(t)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$

**Note on Normalization Constant:**

Different conventions exist for the normalization constant ($1/\sqrt{2\pi}$). Some sources use $1$, some use $1/(2\pi)$, and some use $1/\sqrt{2\pi}$. Kreyszig (10th ed.) primarily uses $1/\sqrt{2\pi}$ for both the forward and inverse transforms. This choice ensures symmetry and simplifies many properties.

*   **Kreyszig (10th ed., Chapter 11.2):** Uses the definition $F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$. The inverse transform is then $f(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega$. This means the normalization is split between the forward and inverse transforms. We will adopt the symmetric definition for consistency in this module.

Let's use the symmetric definition as it's common in many signal processing contexts and ensures symmetry in the properties:

**Symmetric Definition:**

$$F(\omega) = \mathcal{F}\{f(t)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$

This transform converts the function $f(t)$ from the time domain ($t$) to the frequency domain ($\omega$). The variable $\omega$ represents angular frequency.

**Conditions for Existence:**

The Fourier Transform of $f(t)$ exists if:

1.  $f(t)$ is absolutely integrable: $\int_{-\infty}^{\infty} |f(t)| dt < \infty$.
2.  $f(t)$ has a finite number of discontinuities in any finite interval.
3.  $f(t)$ has a finite number of maxima and minima in any finite interval.

These are Dirichlet conditions.

#### 2.2 Inverse Fourier Transform

The Inverse Fourier Transform converts the function back from the frequency domain to the time domain. If $F(\omega)$ is the Fourier Transform of $f(t)$, then $f(t)$ can be recovered using the inverse transform:

$$f(t) = \mathcal{F}^{-1}\{F(\omega)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega$$

This formula allows us to reconstruct the original time-domain signal from its frequency-domain representation.

---

### 3. Fourier Transforms of Common Functions

Let's derive the Fourier Transforms of some fundamental functions.

#### 3.1 Fourier Transform of a Rectangular Pulse (Unit Step-like Function)

Consider the function:
$$f(t) = \begin{cases} 1 & \text{if } |t| < a \\ 0 & \text{if } |t| > a \end{cases}$$
This is often called the rectangular pulse or window function.

$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-a}^{a} 1 \cdot e^{-i\omega t} dt$$

If $\omega = 0$:
$$F(0) = \frac{1}{\sqrt{2\pi}} \int_{-a}^{a} 1 dt = \frac{1}{\sqrt{2\pi}} [t]_{-a}^{a} = \frac{1}{\sqrt{2\pi}} (a - (-a)) = \frac{2a}{\sqrt{2\pi}} = a\sqrt{\frac{2}{\pi}}$$

If $\omega \neq 0$:
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \left[ \frac{e^{-i\omega t}}{-i\omega} \right]_{-a}^{a}$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \left( \frac{e^{-i\omega a}}{-i\omega} - \frac{e^{i\omega a}}{-i\omega} \right)$$
$$F(\omega) = \frac{1}{-i\omega\sqrt{2\pi}} (e^{-i\omega a} - e^{i\omega a})$$
$$F(\omega) = \frac{1}{-i\omega\sqrt{2\pi}} (-2i \sin(\omega a))$$
$$F(\omega) = \frac{2 \sin(\omega a)}{\omega\sqrt{2\pi}}$$
$$F(\omega) = \sqrt{\frac{2}{\pi}} \frac{\sin(\omega a)}{\omega}$$

**Result:**
$$ \mathcal{F}\left\{ \begin{cases} 1 & |t| < a \\ 0 & |t| > a \end{cases} \right\} = \sqrt{\frac{2}{\pi}} \frac{\sin(\omega a)}{\omega} $$

#### 3.2 Fourier Transform of the Dirac Delta Function

The Dirac delta function $\delta(t)$ is a generalized function defined by:
$$ \int_{-\infty}^{\infty} \delta(t) g(t) dt = g(0) $$
for any continuous function $g(t)$.

$$F(\omega) = \mathcal{F}\{\delta(t)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \delta(t) e^{-i\omega t} dt$$
Using the sifting property of the delta function, with $g(t) = e^{-i\omega t}$:
$$F(\omega) = \frac{1}{\sqrt{2\pi}} e^{-i\omega (0)} = \frac{1}{\sqrt{2\pi}}$$

**Result:**
$$ \mathcal{F}\{\delta(t)\} = \frac{1}{\sqrt{2\pi}} $$

**Important:** This is a crucial result. The Fourier Transform of an impulse is a constant, implying it contains all frequencies with equal amplitude (and zero phase if we consider it an instantaneous event).

#### 3.3 Fourier Transform of a Constant Function

Let $f(t) = c$ (a constant).
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} c e^{-i\omega t} dt$$
This integral does not converge in the usual sense. However, using the Dirac delta function:
We know that $\mathcal{F}\{\delta(t)\} = \frac{1}{\sqrt{2\pi}}$.
Consider a generalized function approach. A constant $c$ can be represented as $c \cdot \delta(t) \cdot \sqrt{2\pi}$ in the frequency domain if we use the non-symmetric transform.
With the symmetric transform $\mathcal{F}\{\delta(t)\} = \frac{1}{\sqrt{2\pi}}$, then $\mathcal{F}\{ \sqrt{2\pi} \delta(t) \} = 1$.
Therefore, $\mathcal{F}\{c \sqrt{2\pi} \delta(t) \} = c$.
This implies that the Fourier Transform of a constant $c$ is $c \sqrt{2\pi} \delta(\omega)$.

**Result:**
$$ \mathcal{F}\{c\} = c\sqrt{2\pi} \delta(\omega) $$
The Fourier Transform of a constant is an impulse at zero frequency, which makes sense as a constant has no frequency content other than DC.

#### 3.4 Fourier Transform of an Exponential Function

Consider $f(t) = e^{-at} u(t)$, where $a > 0$ and $u(t)$ is the unit step function ($u(t) = 1$ for $t \ge 0$, $0$ for $t < 0$).

$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-at} u(t) e^{-i\omega t} dt$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{0}^{\infty} e^{-at} e^{-i\omega t} dt$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{0}^{\infty} e^{-(a+i\omega)t} dt$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \left[ \frac{e^{-(a+i\omega)t}}{-(a+i\omega)} \right]_{0}^{\infty}$$
As $t \to \infty$, $e^{-(a+i\omega)t} = e^{-at} e^{-i\omega t}$. Since $a > 0$, $e^{-at} \to 0$. So the upper limit is 0.
As $t \to 0$, $e^{-(a+i\omega)t} = 1$.
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \left( 0 - \frac{1}{-(a+i\omega)} \right)$$
$$F(\omega) = \frac{1}{\sqrt{2\pi}} \frac{1}{a+i\omega}$$

**Result:**
$$ \mathcal{F}\{e^{-at} u(t)\} = \frac{1}{\sqrt{2\pi}} \frac{1}{a+i\omega}, \quad (a > 0) $$

#### 3.5 Fourier Transform of a Cosine Wave

Consider $f(t) = \cos(\omega_0 t)$. We use Euler's formula: $\cos(\omega_0 t) = \frac{e^{i\omega_0 t} + e^{-i\omega_0 t}}{2}$.

$$ \mathcal{F}\{\cos(\omega_0 t)\} = \mathcal{F}\left\{\frac{e^{i\omega_0 t} + e^{-i\omega_0 t}}{2}\right\} $$
$$ = \frac{1}{2} \left( \mathcal{F}\{e^{i\omega_0 t}\} + \mathcal{F}\{e^{-i\omega_0 t}\} \right) $$

We need $\mathcal{F}\{e^{i\omega_0 t}\}$. This can be derived using the frequency shifting property (covered later), but for now, let's derive it directly if we define $e^{bt}$ for real $b$.
The standard result for $\mathcal{F}\{e^{i\omega_0 t}\}$ is $\sqrt{2\pi} \delta(\omega - \omega_0)$.
Let's prove this:
$$ \mathcal{F}\{e^{i\omega_0 t}\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{i\omega_0 t} e^{-i\omega t} dt = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-i(\omega - \omega_0)t} dt $$
This integral is $\sqrt{2\pi} \delta(\omega - \omega_0)$.
So, $\mathcal{F}\{e^{i\omega_0 t}\} = \frac{1}{\sqrt{2\pi}} (\sqrt{2\pi} \delta(\omega - \omega_0)) = \delta(\omega - \omega_0)$.

Similarly, $\mathcal{F}\{e^{-i\omega_0 t}\} = \delta(\omega + \omega_0)$.

Therefore,
$$ \mathcal{F}\{\cos(\omega_0 t)\} = \frac{1}{2} (\delta(\omega - \omega_0) + \delta(\omega + \omega_0)) $$

**Result:**
$$ \mathcal{F}\{\cos(\omega_0 t)\} = \pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] \quad (\text{using the common convention } \mathcal{F}\{e^{i\omega_0 t}\} = 2\pi \delta(\omega - \omega_0)) $$
If we stick to our symmetric definition:
$$ \mathcal{F}\{e^{i\omega_0 t}\} = \sqrt{2\pi} \delta(\omega - \omega_0) $$
$$ \mathcal{F}\{e^{-i\omega_0 t}\} = \sqrt{2\pi} \delta(\omega + \omega_0) $$
$$ \mathcal{F}\{\cos(\omega_0 t)\} = \frac{1}{2} [\sqrt{2\pi} \delta(\omega - \omega_0) + \sqrt{2\pi} \delta(\omega + \omega_0)] = \sqrt{\frac{\pi}{2}} [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] $$

Let's re-check the common results and conventions.
A very common convention is:
$F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$
$f(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega$

With this convention:
$\mathcal{F}\{\delta(t)\} = 1$
$\mathcal{F}\{1\} = 2\pi \delta(\omega)$
$\mathcal{F}\{e^{-at}u(t)\} = \frac{1}{a+i\omega}$
$\mathcal{F}\{e^{i\omega_0 t}\} = 2\pi \delta(\omega - \omega_0)$
$\mathcal{F}\{e^{-i\omega_0 t}\} = 2\pi \delta(\omega + \omega_0)$
$\mathcal{F}\{\cos(\omega_0 t)\} = \pi (\delta(\omega - \omega_0) + \delta(\omega + \omega_0))$

**Sticking to the symmetric definition $F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$ and $f(t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega$:**

*   $\mathcal{F}\{\delta(t)\} = \frac{1}{\sqrt{2\pi}}$
*   $\mathcal{F}\{1\} = \sqrt{2\pi} \delta(\omega)$
*   $\mathcal{F}\{e^{-at}u(t)\} = \frac{1}{\sqrt{2\pi}(a+i\omega)}$
*   $\mathcal{F}\{e^{i\omega_0 t}\} = \sqrt{2\pi} \delta(\omega - \omega_0)$
*   $\mathcal{F}\{e^{-i\omega_0 t}\} = \sqrt{2\pi} \delta(\omega + \omega_0)$
*   $\mathcal{F}\{\cos(\omega_0 t)\} = \sqrt{\frac{\pi}{2}} (\delta(\omega - \omega_0) + \delta(\omega + \omega_0))$
*   $\mathcal{F}\{\sin(\omega_0 t)\} = -i\sqrt{\frac{\pi}{2}} (\delta(\omega - \omega_0) - \delta(\omega + \omega_0))$

**Recommendation:** It's vital to be consistent with the definition used in your course/textbook. For this module, we are using the symmetric definition.

#### 3.6 Fourier Transform of a Sine Wave

Using $\sin(\omega_0 t) = \frac{e^{i\omega_0 t} - e^{-i\omega_0 t}}{2i}$:

$$ \mathcal{F}\{\sin(\omega_0 t)\} = \mathcal{F}\left\{\frac{e^{i\omega_0 t} - e^{-i\omega_0 t}}{2i}\right\} $$
$$ = \frac{1}{2i} \left( \mathcal{F}\{e^{i\omega_0 t}\} - \mathcal{F}\{e^{-i\omega_0 t}\} \right) $$
$$ = \frac{1}{2i} [\sqrt{2\pi} \delta(\omega - \omega_0) - \sqrt{2\pi} \delta(\omega + \omega_0)] $$
$$ = \frac{\sqrt{2\pi}}{2i} [\delta(\omega - \omega_0) - \delta(\omega + \omega_0)] $$
$$ = \sqrt{\frac{2\pi}{4}} \frac{1}{i} [\delta(\omega - \omega_0) - \delta(\omega + \omega_0)] $$
$$ = \sqrt{\frac{\pi}{2}} (-i) [\delta(\omega - \omega_0) - \delta(\omega + \omega_0)] $$
$$ = -i\sqrt{\frac{\pi}{2}} [\delta(\omega - \omega_0) - \delta(\omega + \omega_0)] $$

**Result:**
$$ \mathcal{F}\{\sin(\omega_0 t)\} = -i\sqrt{\frac{\pi}{2}} (\delta(\omega - \omega_0) - \delta(\omega + \omega_0)) $$

---

### 4. Properties of Fourier Transforms

Let $F(\omega) = \mathcal{F}\{f(t)\}$ and $G(\omega) = \mathcal{F}\{g(t)\}$.

#### 4.1 Linearity Property

**Statement:** If $a$ and $b$ are constants, then $\mathcal{F}\{af(t) + bg(t)\} = aF(\omega) + bG(\omega)$.

**Proof:**
$$ \mathcal{F}\{af(t) + bg(t)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} (af(t) + bg(t)) e^{-i\omega t} dt $$
$$ = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} af(t) e^{-i\omega t} dt + \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} bg(t) e^{-i\omega t} dt $$
$$ = a \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt \right) + b \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} g(t) e^{-i\omega t} dt \right) $$
$$ = aF(\omega) + bG(\omega) $$
This property is essential for solving linear differential equations using Fourier Transforms.

#### 4.2 Time Shifting Property

**Statement:** If $F(\omega) = \mathcal{F}\{f(t)\}$, then $\mathcal{F}\{f(t-t_0)\} = e^{-i\omega t_0} F(\omega)$.

**Proof:**
$$ \mathcal{F}\{f(t-t_0)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t-t_0) e^{-i\omega t} dt $$
Let $\tau = t - t_0$, so $t = \tau + t_0$ and $dt = d\tau$.
$$ = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(\tau) e^{-i\omega (\tau + t_0)} d\tau $$
$$ = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(\tau) e^{-i\omega \tau} e^{-i\omega t_0} d\tau $$
$$ = e^{-i\omega t_0} \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(\tau) e^{-i\omega \tau} d\tau \right) $$
$$ = e^{-i\omega t_0} F(\omega) $$
This property shows that a time delay in the time domain corresponds to a phase shift in the frequency domain.

#### 4.3 Frequency Shifting Property (Modulation Property)

**Statement:** If $F(\omega) = \mathcal{F}\{f(t)\}$, then $\mathcal{F}\{e^{i\omega_0 t} f(t)\} = F(\omega - \omega_0)$.

**Proof:**
$$ \mathcal{F}\{e^{i\omega_0 t} f(t)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{i\omega_0 t} f(t) e^{-i\omega t} dt $$
$$ = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i(\omega - \omega_0)t} dt $$
By the definition of the Fourier Transform, this integral is $F(\omega - \omega_0)$.
$$ = F(\omega - \omega_0) $$
This property is crucial for understanding modulation in communication systems. Multiplying a signal by a complex exponential shifts its spectrum in the frequency domain.

#### 4.4 Scaling Property

**Statement:** If $F(\omega) = \mathcal{F}\{f(t)\}$, then $\mathcal{F}\{f(at)\} = \frac{1}{|a|} F\left(\frac{\omega}{a}\right)$, where $a \neq 0$.

**Proof:**
$$ \mathcal{F}\{f(at)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(at) e^{-i\omega t} dt $$
Let $\tau = at$, so $t = \tau/a$ and $dt = d\tau/a$.
$$ = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(\tau) e^{-i\omega (\tau/a)} \frac{d\tau}{a} $$
$$ = \frac{1}{a} \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(\tau) e^{-i(\omega/a) \tau} d\tau \right) $$
The integral is $F(\omega/a)$.
$$ = \frac{1}{a} F\left(\frac{\omega}{a}\right) $$
If $a < 0$, let $a = -b$ where $b > 0$. Then $|a| = b$.
$\int_{-\infty}^{\infty} f(at) e^{-i\omega t} dt = \int_{-\infty}^{\infty} f(-bt) e^{-i\omega t} dt$.
Let $\tau = -bt$, so $t = -\tau/b$. $dt = -d\tau/b$.
$\int_{\infty}^{-\infty} f(\tau) e^{-i\omega (-\tau/b)} (-d\tau/b) = \int_{-\infty}^{\infty} f(\tau) e^{i\omega \tau/b} (d\tau/b) = \frac{1}{b} \int_{-\infty}^{\infty} f(\tau) e^{-i(-\omega/b) \tau} d\tau = \frac{1}{b} F(-\omega/b)$.
This is $\frac{1}{|a|} F(\omega/a)$.

This property indicates that stretching the time signal (small $|a|$) compresses the frequency spectrum, and compressing the time signal (large $|a|$) stretches the frequency spectrum.

#### 4.5 Differentiation in the Time Domain

**Statement 1:** $\mathcal{F}\left\{\frac{df}{dt}\right\} = i\omega F(\omega)$.

**Proof:**
$$ \mathcal{F}\left\{\frac{df}{dt}\right\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \frac{df}{dt} e^{-i\omega t} dt $$
Using integration by parts: $u = e^{-i\omega t}$, $dv = \frac{df}{dt} dt$. Then $du = -i\omega e^{-i\omega t} dt$, $v = f(t)$.
$$ = \frac{1}{\sqrt{2\pi}} \left[ f(t) e^{-i\omega t} \right]_{-\infty}^{\infty} - \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) (-i\omega e^{-i\omega t}) dt $$
Assuming $f(t) \to 0$ as $t \to \pm\infty$ (for non-periodic functions), the boundary term is zero.
$$ = - \frac{1}{\sqrt{2\pi}} (-i\omega) \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt $$
$$ = i\omega \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt \right) $$
$$ = i\omega F(\omega) $$

**Statement 2:** $\mathcal{F}\left\{\frac{d^n f}{dt^n}\right\} = (i\omega)^n F(\omega)$.

This can be proved by repeatedly applying the above result.

#### 4.6 Differentiation in the Frequency Domain

**Statement:** $\mathcal{F}\{t f(t)\} = i \frac{d}{d\omega} F(\omega)$.

**Proof:**
$$ \frac{d}{d\omega} F(\omega) = \frac{d}{d\omega} \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt \right) $$
Assuming we can differentiate under the integral sign:
$$ = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) \frac{\partial}{\partial\omega} (e^{-i\omega t}) dt $$
$$ = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) (-it e^{-i\omega t}) dt $$
$$ = -i \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} t f(t) e^{-i\omega t} dt \right) $$
$$ = -i \mathcal{F}\{t f(t)\} $$
Rearranging gives: $\mathcal{F}\{t f(t)\} = i \frac{d}{d\omega} F(\omega)$.

**Statement:** $\mathcal{F}\{t^n f(t)\} = (i)^n \frac{d^n}{d\omega^n} F(\omega)$.

#### 4.7 Integration Property

**Statement:** If $G(\omega) = \int_{-\infty}^{\omega} F(x) dx$, then $\mathcal{F}^{-1}\{G(\omega)\} = \frac{1}{i t} f(t)$ (with certain conditions).
A more useful form is related to integration of $f(t)$.
Let $h(t) = \int_{-\infty}^t f(\tau) d\tau$. Then $\mathcal{F}\{h(t)\} = \frac{F(\omega)}{i\omega}$.

**Proof:**
We know $\mathcal{F}\{f(t)\} = F(\omega)$.
Consider $f(t) = \frac{dh}{dt}$.
Then $\mathcal{F}\left\{\frac{dh}{dt}\right\} = i\omega \mathcal{F}\{h(t)\}$.
So, $F(\omega) = i\omega \mathcal{F}\{h(t)\}$.
Therefore, $\mathcal{F}\{h(t)\} = \frac{F(\omega)}{i\omega}$.

**Note:** If the integral starts from $t_0$ or is indefinite, we need to be careful about constants. For example, $\mathcal{F}\{\int_{-\infty}^t f(\tau) d\tau\} = \frac{F(\omega)}{i\omega}$.

#### 4.8 Convolution Property

**Statement:** If $h(t) = (f * g)(t) = \int_{-\infty}^{\infty} f(\tau) g(t-\tau) d\tau$, then $\mathcal{F}\{h(t)\} = \sqrt{2\pi} F(\omega) G(\omega)$.

**Proof:**
$$ \mathcal{F}\{h(t)\} = \mathcal{F}\{(f * g)(t)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \left( \int_{-\infty}^{\infty} f(\tau) g(t-\tau) d\tau \right) e^{-i\omega t} dt $$
Change the order of integration (Fubini's theorem):
$$ = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(\tau) \left( \int_{-\infty}^{\infty} g(t-\tau) e^{-i\omega t} dt \right) d\tau $$
In the inner integral, let $u = t-\tau$, so $t = u+\tau$ and $dt = du$.
$$ \int_{-\infty}^{\infty} g(u) e^{-i\omega (u+\tau)} du = \int_{-\infty}^{\infty} g(u) e^{-i\omega u} e^{-i\omega \tau} du $$
$$ = e^{-i\omega \tau} \int_{-\infty}^{\infty} g(u) e^{-i\omega u} du $$
The integral $\int_{-\infty}^{\infty} g(u) e^{-i\omega u} du = \sqrt{2\pi} G(\omega)$.
So the inner integral is $e^{-i\omega \tau} \sqrt{2\pi} G(\omega)$.

Substituting this back:
$$ = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(\tau) (e^{-i\omega \tau} \sqrt{2\pi} G(\omega)) d\tau $$
$$ = \int_{-\infty}^{\infty} f(\tau) e^{-i\omega \tau} G(\omega) d\tau $$
Since $G(\omega)$ is independent of $\tau$, we can pull it out:
$$ = G(\omega) \int_{-\infty}^{\infty} f(\tau) e^{-i\omega \tau} d\tau $$
$$ = G(\omega) [\sqrt{2\pi} F(\omega)] $$
$$ = \sqrt{2\pi} F(\omega) G(\omega) $$

**Consequence for Inverse Transform:**
If $H(\omega) = F(\omega) G(\omega)$, then $h(t) = \frac{1}{\sqrt{2\pi}} (f * g)(t)$.
This is often stated as $\mathcal{F}^{-1}\{F(\omega) G(\omega)\} = \frac{1}{\sqrt{2\pi}}(f * g)(t)$.

**Important Note:** With the non-symmetric definition of Fourier Transform ($F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$), the convolution property is $\mathcal{F}\{f * g\} = F(\omega) G(\omega)$. This is a significant reason for using the non-symmetric definition in some contexts.

---

### 5. Solving Differential Equations using Fourier Transforms

Fourier transforms are powerful tools for solving linear ordinary and partial differential equations with constant coefficients, especially when the domain is $(-\infty, \infty)$.

#### 5.1 Ordinary Differential Equations (ODEs)

Consider an ODE: $a_n y^{(n)} + a_{n-1} y^{(n-1)} + \dots + a_1 y' + a_0 y = r(t)$, with $y(t)$ assumed to satisfy conditions for Fourier transform existence and decay.

Taking the Fourier transform of both sides:
$$ \mathcal{F}\{a_n y^{(n)} + \dots + a_0 y\} = \mathcal{F}\{r(t)\} $$
Using linearity and the differentiation property:
$$ a_n (i\omega)^n Y(\omega) + a_{n-1} (i\omega)^{n-1} Y(\omega) + \dots + a_1 (i\omega) Y(\omega) + a_0 Y(\omega) = R(\omega) $$
where $Y(\omega) = \mathcal{F}\{y(t)\}$ and $R(\omega) = \mathcal{F}\{r(t)\}$.
$$ Y(\omega) [a_n (i\omega)^n + a_{n-1} (i\omega)^{n-1} + \dots + a_1 (i\omega) + a_0] = R(\omega) $$
Let $P(i\omega) = a_n (i\omega)^n + \dots + a_0$.
$$ Y(\omega) P(i\omega) = R(\omega) $$
$$ Y(\omega) = \frac{R(\omega)}{P(i\omega)} $$

To find $y(t)$, we take the inverse Fourier transform:
$$ y(t) = \mathcal{F}^{-1}\left\{\frac{R(\omega)}{P(i\omega)}\right\} $$
This often involves partial fraction decomposition and using known inverse Fourier transforms.

**Example:** Solve $y'' - y = e^{-t} u(t)$.

1.  Take Fourier Transform:
    $\mathcal{F}\{y''\} - \mathcal{F}\{y\} = \mathcal{F}\{e^{-t}u(t)\}$
    $(i\omega)^2 Y(\omega) - Y(\omega) = \frac{1}{\sqrt{2\pi}(1+i\omega)}$
    $(-\omega^2 - 1) Y(\omega) = \frac{1}{\sqrt{2\pi}(1+i\omega)}$
    $Y(\omega) = \frac{-1}{\sqrt{2\pi}(1+\omega^2)(1+i\omega)}$

2.  Simplify and find inverse transform:
    $Y(\omega) = \frac{-1}{\sqrt{2\pi}(1+i\omega)(1-i\omega)(1+i\omega)} = \frac{-1}{\sqrt{2\pi}(1-i\omega)(1+i\omega)^2}$
    This requires partial fraction decomposition of $\frac{1}{(1-i\omega)(1+i\omega)^2}$ in terms of $i\omega$.
    Let $s = i\omega$. $\frac{-1}{\sqrt{2\pi}(1-s)(1+s)^2}$.
    $\frac{A}{1-s} + \frac{B}{1+s} + \frac{C}{(1+s)^2}$
    This can be complicated. Often, it's easier to work with the Laplace transform for ODEs with initial conditions. However, if the question specifies Fourier transform, this is the path.

    Let's try a simpler example where the FT is cleaner.
    Solve $y' + y = \delta(t)$.
    $\mathcal{F}\{y'\} + \mathcal{F}\{y\} = \mathcal{F}\{\delta(t)\}$
    $i\omega Y(\omega) + Y(\omega) = \frac{1}{\sqrt{2\pi}}$
    $(1+i\omega) Y(\omega) = \frac{1}{\sqrt{2\pi}}$
    $Y(\omega) = \frac{1}{\sqrt{2\pi}(1+i\omega)}$
    We know $\mathcal{F}\{e^{-at}u(t)\} = \frac{1}{\sqrt{2\pi}(a+i\omega)}$.
    So, $a=1$.
    $y(t) = e^{-t}u(t)$.

#### 5.2 Partial Differential Equations (PDEs)

Fourier transforms can be applied to PDEs, often after converting to ODEs by transforming one of the variables. For example, consider the heat equation in one dimension: $\frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2}$ for $-\infty < x < \infty$.

We can transform with respect to $x$: Let $U(\omega, t) = \mathcal{F}\{u(x, t)\}$ where the transform is over $x$.
$\mathcal{F}\left\{\frac{\partial u}{\partial t}\right\} = \frac{\partial}{\partial t} \mathcal{F}\{u(x, t)\} = \frac{\partial U}{\partial t}(\omega, t)$.
$\mathcal{F}\left\{\frac{\partial^2 u}{\partial x^2}\right\} = (i\omega)^2 \mathcal{F}\{u(x, t)\} = -\omega^2 U(\omega, t)$.

The PDE becomes an ODE in $t$ for each $\omega$:
$$ \frac{\partial U}{\partial t} = -k\omega^2 U(\omega, t) $$
This is a first-order linear ODE: $\frac{dU}{dt} = -k\omega^2 U$.
The solution is $U(\omega, t) = C(\omega) e^{-k\omega^2 t}$.
The constant $C(\omega)$ is determined by the initial condition $u(x, 0) = f(x)$.
$\mathcal{F}\{u(x, 0)\} = \mathcal{F}\{f(x)\}$.
So, $U(\omega, 0) = F(\omega)$.
$C(\omega) e^0 = F(\omega) \implies C(\omega) = F(\omega)$.

Therefore, $U(\omega, t) = F(\omega) e^{-k\omega^2 t}$.
To find $u(x, t)$, we take the inverse Fourier transform with respect to $\omega$:
$$ u(x, t) = \mathcal{F}^{-1}\{F(\omega) e^{-k\omega^2 t}\} $$
We need the Fourier transform of $e^{-k\omega^2 t}$.
We know $\mathcal{F}\{e^{-ax^2}\} = \sqrt{\frac{\pi}{2a}} e^{-\omega^2/(4a)}$.
Let's use the FT of Gaussian: $\mathcal{F}\{e^{-ax^2}\} = \frac{1}{\sqrt{2a}} e^{-\omega^2/(4a)}$ if the definition is $\int f(x)e^{-i\omega x}dx$.
With our symmetric definition: $\mathcal{F}\{e^{-ax^2}\} = \sqrt{\frac{1}{2a}}e^{-\omega^2/(4a)}$. (Check this again)

Let's verify the FT of a Gaussian:
$f(x) = e^{-ax^2}$.
$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-ax^2} e^{-i\omega x} dx$.
This integral is a standard result: $\frac{1}{\sqrt{2\pi}} \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)} = \sqrt{\frac{1}{2a}} e^{-\omega^2/(4a)}$.

So, we have $F(\omega)$ and $G(\omega) = e^{-k\omega^2 t}$.
The FT of $g(x) = e^{-bx^2}$ is $G(\omega) = \sqrt{\frac{1}{2b}} e^{-\omega^2/(4b)}$.
We need the FT of $e^{-k\omega^2 t}$. This means we need the inverse FT of a Gaussian in $\omega$.
$\mathcal{F}^{-1}\{e^{-c\omega^2}\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-c\omega^2} e^{i\omega x} d\omega$.
This is a Gaussian in $\omega$. The result is $\frac{1}{\sqrt{2c}} e^{-x^2/(4c)}$.

Here, $c = kt$.
So $\mathcal{F}^{-1}\{e^{-k\omega^2 t}\} = \frac{1}{\sqrt{2kt}} e^{-x^2/(4kt)}$.

Using the convolution property: $\mathcal{F}\{u(x, t)\} = \mathcal{F}\{f(x)\} \mathcal{F}\{e^{-k\omega^2 t} \cdot \sqrt{2\pi}\}$. (Incorrect application)

We have $U(\omega, t) = F(\omega) G(\omega)$, where $G(\omega) = e^{-k\omega^2 t}$.
Let's find the FT of $g(x) = e^{-ax^2}$. $G(\omega) = \sqrt{\frac{1}{2a}} e^{-\omega^2/(4a)}$.
We need the FT of $g(x)$ such that its FT is $e^{-k\omega^2 t}$.
Let's use the fact that if $\mathcal{F}\{f(x)\} = F(\omega)$, then $\mathcal{F}\{f(x) e^{i\omega_0 x}\} = F(\omega - \omega_0)$.
And $\mathcal{F}\{e^{-ax^2}\} = \sqrt{\frac{1}{2a}} e^{-\omega^2/(4a)}$.
Let $a' = 1/(4k t)$. So, $\mathcal{F}\{e^{-x^2/(4kt)}\} = \sqrt{\frac{1}{2(1/4kt)}} e^{-\omega^2/(4(1/4kt))} = \sqrt{2kt} e^{-kt\omega^2}$.

We have $U(\omega, t) = F(\omega) e^{-k\omega^2 t}$.
We want $u(x, t) = \mathcal{F}^{-1}\{U(\omega, t)\}$.
We need the inverse FT of $e^{-k\omega^2 t}$.
This means we need a function $g(x)$ such that its FT is $e^{-k\omega^2 t}$.
Using the formula $\mathcal{F}\{e^{-ax^2}\} = \sqrt{\frac{1}{2a}} e^{-\omega^2/(4a)}$
Let $e^{-k\omega^2 t} = \sqrt{\frac{1}{2a}} e^{-\omega^2/(4a)}$.
This implies $k t = 1/(4a)$, so $a = 1/(4kt)$.
And $\sqrt{\frac{1}{2a}} = \sqrt{2kt}$.

So, the function whose FT is $e^{-k\omega^2 t}$ is $\sqrt{2kt} e^{-(1/(4kt))x^2}$.
Thus, $\mathcal{F}^{-1}\{e^{-k\omega^2 t}\} = \sqrt{2kt} e^{-x^2/(4kt)}$.

Now, using the convolution theorem: $\mathcal{F}^{-1}\{F(\omega) G(\omega)\} = \frac{1}{\sqrt{2\pi}} (f * g)(x)$.
Here $G(\omega) = e^{-k\omega^2 t}$. We need the FT of $g(x)$ to be $G(\omega)$.
So, $g(x) = \mathcal{F}^{-1}\{e^{-k\omega^2 t}\} = \sqrt{2kt} e^{-x^2/(4kt)}$.

$$ u(x, t) = \mathcal{F}^{-1}\{F(\omega) e^{-k\omega^2 t}\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(\tau) g(x-\tau) d\tau $$
$$ u(x, t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(\tau) \sqrt{2kt} e^{-(x-\tau)^2/(4kt)} d\tau $$
$$ u(x, t) = \frac{1}{\sqrt{2\pi}} \sqrt{2kt} \int_{-\infty}^{\infty} f(\tau) e^{-(x-\tau)^2/(4kt)} d\tau $$
$$ u(x, t) = \sqrt{kt} \int_{-\infty}^{\infty} f(\tau) e^{-(x-\tau)^2/(4kt)} d\tau $$
This is the solution to the heat equation.

---

### 6. Important Points to Remember

*   **Symmetric vs. Asymmetric Definitions:** Be aware of which definition of the Fourier Transform is being used, as it affects the normalization constants and the convolution property. The symmetric definition $\frac{1}{\sqrt{2\pi}}$ for both forward and inverse transforms is often preferred for symmetry in properties.
*   **Existence Conditions:** Ensure the function satisfies the Dirichlet conditions (absolute integrability is key) for the Fourier Transform to exist in the standard sense. Generalized functions handle cases that don't strictly meet these.
*   **Properties are Key:** Mastering the properties (linearity, shifting, scaling, differentiation, convolution) is crucial for applying Fourier Transforms effectively.
*   **FT of Delta Function:** $\mathcal{F}\{\delta(t)\} = \frac{1}{\sqrt{2\pi}}$. This signifies a constant magnitude response in the frequency domain.
*   **FT of Constant:** $\mathcal{F}\{c\} = c\sqrt{2\pi}\delta(\omega)$. This signifies a DC component.
*   **FT of Exponential:** $\mathcal{F}\{e^{-at}u(t)\} = \frac{1}{\sqrt{2\pi}(a+i\omega)}$ for $a>0$.
*   **FT of Cosine/Sine:** These involve Dirac delta functions at $\pm \omega_0$, indicating spectral lines.
*   **Convolution Theorem:** Convolution in the time domain is multiplication in the frequency domain (scaled by $\sqrt{2\pi}$ with the symmetric definition). This is fundamental for analyzing systems and solving PDEs.
*   **Differentiation Property:** Differentiation in time corresponds to multiplication by $i\omega$ in the frequency domain, making ODEs algebraic.
*   **Applications:** Fourier Transforms are vital in signal processing (spectrum analysis), circuit analysis, image processing, quantum mechanics, and solving PDEs.

---

### 7. Practice Questions and Answers

**Question 1:** Find the Fourier Transform of the function $f(t) = e^{-|t|}$.
(This function is $e^t$ for $t<0$ and $e^{-t}$ for $t>0$)

**Solution 1:**
$f(t) = e^{-|t|} = e^t u(-t) + e^{-t} u(t)$.
We know $\mathcal{F}\{e^{-at}u(t)\} = \frac{1}{\sqrt{2\pi}(a+i\omega)}$ for $a>0$.
For $e^t u(-t)$, let $t' = -t$, so $u(-t) = u(t')$. $e^t u(-t) = e^{-t'} u(t')$.
$\mathcal{F}\{e^t u(-t)\} = \mathcal{F}\{e^{-(-1)t} u(t)\}$. This is not correct.

Let's use the definition directly:
$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-|t|} e^{-i\omega t} dt$
$F(\omega) = \frac{1}{\sqrt{2\pi}} \left( \int_{-\infty}^{0} e^{t} e^{-i\omega t} dt + \int_{0}^{\infty} e^{-t} e^{-i\omega t} dt \right)$
$F(\omega) = \frac{1}{\sqrt{2\pi}} \left( \int_{-\infty}^{0} e^{(1-i\omega)t} dt + \int_{0}^{\infty} e^{-(1+i\omega)t} dt \right)$

For the first integral:
$\left[ \frac{e^{(1-i\omega)t}}{1-i\omega} \right]_{-\infty}^{0} = \frac{e^0}{1-i\omega} - \lim_{t\to-\infty} \frac{e^{(1-i\omega)t}}{1-i\omega} = \frac{1}{1-i\omega} - 0 = \frac{1}{1-i\omega}$.

For the second integral:
$\left[ \frac{e^{-(1+i\omega)t}}{-(1+i\omega)} \right]_{0}^{\infty} = 0 - \frac{e^0}{-(1+i\omega)} = \frac{1}{1+i\omega}$.

So, $F(\omega) = \frac{1}{\sqrt{2\pi}} \left( \frac{1}{1-i\omega} + \frac{1}{1+i\omega} \right)$
$F(\omega) = \frac{1}{\sqrt{2\pi}} \left( \frac{1+i\omega + 1-i\omega}{(1-i\omega)(1+i\omega)} \right)$
$F(\omega) = \frac{1}{\sqrt{2\pi}} \left( \frac{2}{1+\omega^2} \right) = \sqrt{\frac{2}{\pi}} \frac{1}{1+\omega^2}$.

**Answer 1:** $\mathcal{F}\{e^{-|t|}\} = \sqrt{\frac{2}{\pi}} \frac{1}{1+\omega^2}$.

**Question 2:** Find the Fourier Transform of $f(t) = \cos(\omega_0 t) u(t)$.

**Solution 2:**
$\cos(\omega_0 t) u(t) = \frac{e^{i\omega_0 t} + e^{-i\omega_0 t}}{2} u(t)$
Using linearity:
$\mathcal{F}\{\cos(\omega_0 t) u(t)\} = \frac{1}{2} \left( \mathcal{F}\{e^{i\omega_0 t} u(t)\} + \mathcal{F}\{e^{-i\omega_0 t} u(t)\} \right)$.

We know $\mathcal{F}\{e^{-at}u(t)\} = \frac{1}{\sqrt{2\pi}(a+i\omega)}$.
Let's consider $\mathcal{F}\{e^{i\omega_0 t} u(t)\}$. This is $\mathcal{F}\{e^{-(-i\omega_0)t} u(t)\}$.
So, $a = -i\omega_0$. This is not valid as $a$ must be real and positive for the condition $a>0$.

We need to derive $\mathcal{F}\{e^{i\omega_0 t} u(t)\}$ directly.
$\mathcal{F}\{e^{i\omega_0 t} u(t)\} = \frac{1}{\sqrt{2\pi}} \int_{0}^{\infty} e^{i\omega_0 t} e^{-i\omega t} dt = \frac{1}{\sqrt{2\pi}} \int_{0}^{\infty} e^{-i(\omega-\omega_0)t} dt$.
This integral $\int_{0}^{\infty} e^{-i\alpha t} dt = [\frac{e^{-i\alpha t}}{-i\alpha}]_{0}^{\infty} = 0 - \frac{1}{-i\alpha} = \frac{1}{i\alpha}$ if $\alpha \neq 0$.
For $\alpha = \omega - \omega_0$.
So, $\mathcal{F}\{e^{i\omega_0 t} u(t)\} = \frac{1}{\sqrt{2\pi}} \frac{1}{i(\omega-\omega_0)}$ for $\omega \neq \omega_0$.
And $\mathcal{F}\{e^{-i\omega_0 t} u(t)\} = \frac{1}{\sqrt{2\pi}} \frac{1}{-i(\omega+\omega_0)}$ for $\omega \neq -\omega_0$.

This seems incorrect as it's yielding functions, not delta functions. The FT of $e^{i\omega_0 t}$ itself contains delta functions. When multiplied by $u(t)$, it should yield a modified spectrum.

Let's re-evaluate the FT of $e^{i\omega_0 t}u(t)$.
Consider $\mathcal{F}\{e^{i\omega_0 t}\} = \sqrt{2\pi}\delta(\omega-\omega_0)$ and $\mathcal{F}\{e^{-i\omega_0 t}\} = \sqrt{2\pi}\delta(\omega+\omega_0)$.
The multiplication by $u(t)$ is a time-domain operation.
It's often easier to find the FT of $\cos(\omega_0 t)$ and then consider the effect of $u(t)$.

Let's go back to the correct derivation of $\mathcal{F}\{e^{i\omega_0 t}u(t)\}$:
$\frac{1}{\sqrt{2\pi}} \int_{0}^{\infty} e^{-i(\omega-\omega_0)t} dt$.
This is related to the Hilbert transform. The FT of $u(t)$ is $\pi\delta(\omega) + \frac{1}{i\omega}$.

Using properties:
$\mathcal{F}\{f(t)u(t)\}$ does not have a simple closed-form property like $\mathcal{F}\{f(t-t_0)\}$ or $\mathcal{F}\{e^{i\omega_0 t}f(t)\}$.
We have to compute it directly.
$\mathcal{F}\{ \cos(\omega_0 t) u(t) \} = \frac{1}{\sqrt{2\pi}} \int_{0}^{\infty} \cos(\omega_0 t) e^{-i\omega t} dt$
$= \frac{1}{\sqrt{2\pi}} \int_{0}^{\infty} \frac{e^{i\omega_0 t} + e^{-i\omega_0 t}}{2} e^{-i\omega t} dt$
$= \frac{1}{2\sqrt{2\pi}} \left( \int_{0}^{\infty} e^{i(\omega_0-\omega)t} dt + \int_{0}^{\infty} e^{-i(\omega_0+\omega)t} dt \right)$

$\int_{0}^{\infty} e^{i\alpha t} dt = [\frac{e^{i\alpha t}}{i\alpha}]_{0}^{\infty}$. If $\alpha \neq 0$, this is $\frac{1}{i\alpha} (\lim_{t\to\infty} e^{i\alpha t} - 1)$. The limit does not exist.
This indicates that $\cos(\omega_0 t)u(t)$ is not absolutely integrable.

**Important Correction:** The Fourier Transform of $\cos(\omega_0 t) u(t)$ does not exist in the strict sense (as it's not absolutely integrable). However, one can consider generalized Fourier Transforms or work with Laplace Transforms.
If the question intends to ask for the Fourier Transform of $\cos(\omega_0 t)$ which we derived earlier as $\sqrt{\frac{\pi}{2}} (\delta(\omega - \omega_0) + \delta(\omega + \omega_0))$, this is the correct calculation for the infinitely extended cosine wave.

The context of the question might imply that the function is of a form that converges. If the function were $e^{-at}\cos(\omega_0 t)u(t)$, then its Fourier Transform would exist.

Let's stick to the common Fourier Transform pairs for functions that *are* absolutely integrable or are generalized functions. The prompt focuses on LOs and COs that seem to imply standard FTs.

**Question 3:** State the relationship between the time-domain differentiation and frequency-domain representation of a function $f(t)$ with Fourier Transform $F(\omega)$.

**Solution 3:**
The Fourier Transform of the derivative of a function $f(t)$ is given by:
$\mathcal{F}\left\{\frac{df}{dt}\right\} = i\omega F(\omega)$.
For the second derivative:
$\mathcal{F}\left\{\frac{d^2f}{dt^2}\right\} = (i\omega)^2 F(\omega) = -\omega^2 F(\omega)$.
In general, for the $n$-th derivative:
$\mathcal{F}\left\{\frac{d^n f}{dt^n}\right\} = (i\omega)^n F(\omega)$.

**Answer 3:** Differentiation in the time domain corresponds to multiplication by $i\omega$ in the frequency domain.

**Question 4:** State the convolution property of Fourier Transforms.

**Solution 4:**
If $h(t) = (f * g)(t) = \int_{-\infty}^{\infty} f(\tau) g(t-\tau) d\tau$, then the Fourier Transform of $h(t)$ is related to the Fourier Transforms of $f(t)$ and $g(t)$, denoted as $F(\omega)$ and $G(\omega)$ respectively, by:
$\mathcal{F}\{f(t) * g(t)\} = \sqrt{2\pi} F(\omega) G(\omega)$.

**Answer 4:** Convolution in time domain becomes multiplication in frequency domain (scaled by $\sqrt{2\pi}$ for the symmetric definition).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |


### 8. References and Further Reading

*   **Kreyszig, E. (2016). *Advanced Engineering Mathematics* (10th ed.). John Wiley & Sons.** (Chapter 11: Fourier Integrals and Generalized Fourier Transforms). This is the primary textbook and provides a thorough treatment of Fourier Integrals, Fourier Transforms, and their properties with examples and applications in engineering.
*   **Zill, D. G., & Shanahan, P. D. (2015). *Complex Analysis* (3rd ed.). Jones & Bartlett Learning.** (While this book focuses on Complex Analysis, understanding complex functions is implicitly helpful for the $e^{-i\omega t}$ component and some advanced FT derivations, though not directly for basic FT properties).
*   **Ramana, B. V. (2023). *Higher Engineering Mathematics* (39th ed.). McGraw-Hill Education.** (Likely covers Fourier Transforms in detail within its Fourier Series and Integrals chapter).
*   **Grewal, B. S. (2018). *Higher Engineering Mathematics* (44th ed.). Khanna Publishers.** (Similar to Ramana, expect comprehensive coverage of Fourier Transforms and their applications).
*   **Rao, K. R., Kim, D. N., & Hwang, J. J. (2011). *Fast Fourier Transform - Algorithms and Applications*. Springer.** (This book is focused on the computational aspects of the FFT, which is an efficient algorithm for computing discrete Fourier Transforms. While not directly about the continuous Fourier Integral, understanding the FFT's foundation is beneficial for practical applications).

---