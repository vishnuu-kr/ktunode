---
title: "Data Hold – ZOH, FOH, Pulse Transfer Function"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 1: Analysis of Sampled Data Systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368c6"
status: "completed"
scrapedAt: "2026-05-23T16:35:57.321Z"
---
# DISCRETE TIME CONTROL SYSTEMS

## Module 1: Analysis of Sampled Data Systems

### Topic: Data Hold – ZOH, FOH, Pulse Transfer Function

---

### 1. Introduction to Sampled Data Systems

**Key Concept:** Sampled data systems are control systems where the input signal is sampled at discrete instants of time, converted into a digital form, processed by a digital controller, and then converted back to an analog signal for actuation.

**Why Sample?**
*   **Digital Processing:** Enables the use of digital computers and microprocessors for control.
*   **Noise Immunity:** Digital signals are less susceptible to noise.
*   **Flexibility and Adaptability:** Digital controllers can be easily reprogrammed for different functionalities.
*   **Advanced Control Algorithms:** Enables implementation of complex control strategies not possible with analog circuits.

**Components of a Sampled Data System:**
*   **Digital Controller (Impulse Modulator & Digital Processor):** Takes sampled input and generates a digital output.
*   **Data Hold (Zero-Order Hold, First-Order Hold, etc.):** Converts the discrete-time digital output back into a continuous-time analog signal.
*   **Plant (Continuous-Time System):** The process being controlled.
*   **Sampler:** Converts the continuous-time input signal into a sequence of discrete-time samples.

**Reference:** This introduction is fundamental and is covered in the initial chapters of all mentioned textbooks, particularly in Ogata's "Discrete Time Control Systems" and Philips and Nagle's "Digital control system analysis and design."

---

### 2. Data Hold Devices

**Key Concept:** A data hold device is essential in a sampled data system to reconstruct a continuous-time signal from a sequence of discrete samples. It "holds" the sampled value for a duration until the next sample arrives.

**2.1. Zero-Order Hold (ZOH)**

**Description:** The ZOH holds the last sampled value of the input signal constant until the next sample arrives. It essentially reconstructs a staircase-like approximation of the continuous-time signal.

**Mathematical Representation:**
Let $x^*(t)$ be the sampled signal: $x^*(t) = \sum_{n=-\infty}^{\infty} x(nT) \delta(t - nT)$, where $x(nT)$ is the sampled value and $T$ is the sampling period.

The output of a ZOH, denoted by $x_{ZOH}(t)$, is given by:
$x_{ZOH}(t) = \sum_{n=-\infty}^{\infty} x(nT) u(t - nT) - u(t - (n+1)T)$
where $u(t)$ is the unit step function.

This can also be expressed as:
$x_{ZOH}(t) = x(nT)$ for $nT \leq t < (n+1)T$

**Impulse Response of ZOH:**
The impulse response of a ZOH, $h_{ZOH}(t)$, is a rectangular pulse of amplitude 1 and duration $T$:
$h_{ZOH}(t) = u(t) - u(t - T)$

**Transfer Function of ZOH:**
The transfer function of the ZOH is the Laplace transform of its impulse response:
$H_{ZOH}(s) = \mathcal{L}\{h_{ZOH}(t)\} = \mathcal{L}\{u(t) - u(t - T)\}$
$H_{ZOH}(s) = \frac{1}{s} - \frac{e^{-sT}}{s} = \frac{1 - e^{-sT}}{s}$

**Frequency Response of ZOH:**
To find the frequency response, substitute $s = j\omega$:
$H_{ZOH}(j\omega) = \frac{1 - e^{-j\omega T}}{j\omega}$
$H_{ZOH}(j\omega) = \frac{1 - \cos(\omega T) + j\sin(\omega T)}{j\omega}$
$H_{ZOH}(j\omega) = \frac{\sin(\omega T/2)}{\omega/2} e^{-j\omega T/2}$
$H_{ZOH}(j\omega) = T \frac{\sin(\omega T/2)}{\omega T/2} e^{-j\omega T/2}$

**Magnitude and Phase:**
$|H_{ZOH}(j\omega)| = T \left|\frac{\sin(\omega T/2)}{\omega T/2}\right|$
$\angle H_{ZOH}(j\omega) = -\frac{\omega T}{2}$

**Effect of ZOH:**
*   Introduces a delay of $T/2$.
*   Acts as a low-pass filter, attenuating high frequencies.
*   Causes "aperture error" or "phasing error" due to its finite duration, especially significant at higher frequencies.

**Reference:** Ogata, Chapter 4; Philips and Nagle, Chapter 2.

**Example:**
Consider a sampled signal $x(nT)$ where $x(0T)=5$ and $x(1T)=3$.
The output of a ZOH will be:
*   $x_{ZOH}(t) = 5$ for $0 \leq t < T$
*   $x_{ZOH}(t) = 3$ for $T \leq t < 2T$

---

**2.2. First-Order Hold (FOH)**

**Description:** The FOH holds the sampled value and extrapolates linearly between successive samples. This results in a smoother output than the ZOH.

**Mathematical Representation:**
For $nT \leq t < (n+1)T$, the output of the FOH, $x_{FOH}(t)$, is given by the linear interpolation between $x(nT)$ and $x((n+1)T)$:
$x_{FOH}(t) = x(nT) + \frac{x((n+1)T) - x(nT)}{T}(t - nT)$

**Impulse Response of FOH:**
The impulse response of the FOH, $h_{FOH}(t)$, is a triangular pulse:
$h_{FOH}(t) = \frac{1}{T} u(t) - \frac{2}{T} u(t-T) + \frac{1}{T} u(t-2T)$

**Transfer Function of FOH:**
$H_{FOH}(s) = \mathcal{L}\{h_{FOH}(t)\} = \frac{1}{T} \left( \frac{1}{s} - \frac{2e^{-sT}}{s} + \frac{e^{-2sT}}{s} \right)$
$H_{FOH}(s) = \frac{1}{sT} (1 - 2e^{-sT} + e^{-2sT})$
$H_{FOH}(s) = \frac{1}{sT} (1 - e^{-sT})^2$

**Frequency Response of FOH:**
$H_{FOH}(j\omega) = \frac{1}{j\omega T} (1 - e^{-j\omega T})^2$
$H_{FOH}(j\omega) = \frac{1}{j\omega T} (1 - \cos(\omega T) + j\sin(\omega T))^2$
$H_{FOH}(j\omega) = \frac{1}{j\omega T} (2\sin^2(\omega T/2) + j 2\sin(\omega T/2)\cos(\omega T/2))^2$
$H_{FOH}(j\omega) = \frac{1}{j\omega T} (1 - e^{-j\omega T})^2 = \frac{(1 - e^{-j\omega T})^2}{j\omega T}$
$H_{FOH}(j\omega) = \frac{1}{j\omega T} (1 - 2e^{-j\omega T} + e^{-j2\omega T})$
$H_{FOH}(j\omega) = \frac{1}{j\omega T} [ (1 - 2\cos(\omega T) + \cos(2\omega T)) + j(-2\sin(\omega T) + \sin(2\omega T)) ]$

Using $1-\cos \theta = 2\sin^2(\theta/2)$ and $\sin 2\theta = 2\sin\theta\cos\theta$:
$H_{FOH}(j\omega) = \frac{1}{j\omega T} [ 2\sin^2(\omega T/2) + j(-4\sin(\omega T/2)\cos(\omega T/2) + 2\sin(\omega T/2)\cos(\omega T/2)) ]$
$H_{FOH}(j\omega) = \frac{1}{j\omega T} [ 2\sin^2(\omega T/2) - j2\sin(\omega T/2)\cos(\omega T/2) ]$
$H_{FOH}(j\omega) = \frac{2\sin(\omega T/2)}{j\omega T} [\sin(\omega T/2) - j\cos(\omega T/2)]$
$H_{FOH}(j\omega) = \frac{2\sin(\omega T/2)}{j\omega T} [-j(\cos(\omega T/2) + j\sin(\omega T/2))]$
$H_{FOH}(j\omega) = \frac{2\sin(\omega T/2)}{\omega T} e^{-j\omega T/2}$

**Magnitude and Phase:**
$|H_{FOH}(j\omega)| = \frac{2}{\omega T} \left|\sin(\frac{\omega T}{2})\right|$
$\angle H_{FOH}(j\omega) = -\frac{\omega T}{2}$

**Note:** The FOH transfer function can be seen as the square of the ZOH transfer function, scaled by $1/T$.
$H_{FOH}(s) = \frac{1}{T} \left( \frac{1 - e^{-sT}}{s} \right)^2 = \frac{1}{T} [H_{ZOH}(s)]^2$

**Comparison with ZOH:**
*   FOH generally provides a better approximation of the original continuous-time signal than ZOH.
*   FOH has a wider bandwidth and less attenuation at higher frequencies compared to ZOH.
*   However, FOH is more complex to implement.

**Reference:** Ogata, Chapter 4; Philips and Nagle, Chapter 2.

---

### 3. Pulse Transfer Function

**Key Concept:** The pulse transfer function represents the input-output relationship of a discrete-time system or a sampled continuous-time system, expressed in the z-domain. It is analogous to the transfer function in the s-domain for continuous-time systems.

**3.1. Derivation of Pulse Transfer Function for a Digital Controller**

Consider a digital controller with input $r(nT)$ and output $c(nT)$. In the z-transform domain, this relationship is given by:
$C(z) = G_D(z) R(z)$
where $G_D(z)$ is the pulse transfer function of the digital controller.

**Example:** A proportional controller $c(nT) = K r(nT)$ has a pulse transfer function $G_D(z) = K$.
A proportional-plus-integral (PI) controller: $c(nT) = K_P r(nT) + K_I \sum_{k=0}^n r(kT)T$.
The z-transform of the summation is $\frac{Tz}{z-1} R(z)$.
So, $C(z) = K_P R(z) + K_I \frac{Tz}{z-1} R(z)$.
$G_D(z) = K_P + \frac{K_I T z}{z-1} = \frac{K_P(z-1) + K_I T z}{z-1} = \frac{(K_P + K_I T)z - K_P}{z-1}$.

**Reference:** Ogata, Chapter 5; Philips and Nagle, Chapter 3.

**3.2. Pulse Transfer Function of a Sampled Continuous-Time System**

Consider a continuous-time system with transfer function $G(s)$ subjected to a sampler and a hold device. The output of the hold device is a continuous-time signal $x(t)$. The sampled version of this signal is $x^*(t)$.

The overall system from the input $r^*(t)$ to the output $y(t)$ can be represented by the block diagram:

$R(s) \rightarrow \text{Sampler} \rightarrow R^*(s) \rightarrow \text{Hold Device} \rightarrow X(s) \rightarrow G(s) \rightarrow Y(s)$

The input to the hold device is $r^*(t)$, and its Laplace transform is $R^*(s)$.
The output of the hold device is $X(s) = H(s) R^*(s)$, where $H(s)$ is the transfer function of the hold device (e.g., $H_{ZOH}(s)$ or $H_{FOH}(s)$).
The output of the plant is $Y(s) = G(s) X(s) = G(s) H(s) R^*(s)$.

To obtain the pulse transfer function, we need to sample the output $y(t)$ to get $y^*(t)$.
$y^*(t) = \mathcal{L}^{-1}\{Y(s)\}^*$
$y^*(t) = \mathcal{L}^{-1}\{G(s)H(s) R^*(s)\}^*$

Using the sampled-data theorem, the z-transform of $y^*(t)$ is related to the z-transform of the input $R^*(s)$:
$Y(z) = G(z) R(z)$ if the input to the sampler is a discrete-time signal $r(nT)$.
When the input is $R^*(s)$, we have:
$Y(z) = G_{H}(z) R(z)$, where $G_H(z)$ is the pulse transfer function of the system with the hold device and the plant.

The pulse transfer function $G_H(z)$ is obtained by finding the z-transform of the product of the hold device transfer function and the plant transfer function:
$G_H(z) = Z\{H(s) G(s)\}$

This is calculated as:
$Z\{H(s) G(s)\} = \sum_{n=-\infty}^{\infty} h_{HG}(nT) z^{-n}$
where $h_{HG}(t) = \mathcal{L}^{-1}\{H(s)G(s)\}$ is the impulse response of the combined hold-plant system.

**3.3. Calculating Pulse Transfer Function for ZOH and Plant**

If we use a ZOH, then $H(s) = H_{ZOH}(s) = \frac{1 - e^{-sT}}{s}$.
The pulse transfer function of the ZOH-plant combination is:
$G_{ZOH}(z) = Z\left\{\frac{1 - e^{-sT}}{s} G(s)\right\}$

Using the properties of z-transforms:
$Z\{f(t-T)\} = z^{-1} F(z)$, where $F(z) = Z\{f(t)\}$.
Let $g(t) = \mathcal{L}^{-1}\{G(s)\}$ and $h_{ZOH}(t)$ be the impulse response of the ZOH.
The impulse response of the ZOH-plant system is $h_{HG}(t) = h_{ZOH}(t) * g(t)$.
$h_{HG}(t) = \int_0^t h_{ZOH}(\tau) g(t-\tau) d\tau$
Since $h_{ZOH}(t) = 1$ for $0 \leq t < T$ and $0$ otherwise:
$h_{HG}(t) = \int_0^{\min(t,T)} g(t-\tau) d\tau$

If $0 \leq t < T$, then $\min(t,T) = t$:
$h_{HG}(t) = \int_0^t g(t-\tau) d\tau$. Let $\lambda = t-\tau$, then $d\lambda = -d\tau$. When $\tau=0$, $\lambda=t$. When $\tau=t$, $\lambda=0$.
$h_{HG}(t) = \int_t^0 g(\lambda) (-d\lambda) = \int_0^t g(\lambda) d\lambda$.
This is the integral of the plant's impulse response.

If $t \geq T$, then $\min(t,T) = T$:
$h_{HG}(t) = \int_0^T g(t-\tau) d\tau$. Let $\lambda = t-\tau$, then $d\lambda = -d\tau$. When $\tau=0$, $\lambda=t$. When $\tau=T$, $\lambda=t-T$.
$h_{HG}(t) = \int_t^{t-T} g(\lambda) (-d\lambda) = \int_{t-T}^t g(\lambda) d\lambda$.

The z-transform is:
$G_{ZOH}(z) = Z\left\{\frac{1 - e^{-sT}}{s} G(s)\right\}$
$G_{ZOH}(z) = Z\left\{(1 - e^{-sT}) \frac{G(s)}{s}\right\}$
Using the property $Z\{(1 - e^{-sT}) F(s)\} = (1 - z^{-1}) Z\{F(s)\}$ if $F(s)$ is a proper transfer function.
Let $F(s) = G(s)/s$. Then $Z\{F(s)\} = Z\{G(s)/s\} = G_1(z)$.
$G_{ZOH}(z) = (1 - z^{-1}) G_1(z) = \frac{z-1}{z} G_1(z)$.

Alternatively, $Z\left\{\frac{1 - e^{-sT}}{s} G(s)\right\} = Z\left\{\frac{1}{s}G(s)\right\} - Z\left\{\frac{e^{-sT}}{s}G(s)\right\}$.
Let $G(s)/s = G'(s)$. The impulse response is $g'(t) = \int_0^t g(\tau) d\tau$.
$Z\{G'(s)\} = G'_1(z)$.
$Z\left\{\frac{e^{-sT}}{s}G(s)\right\} = Z\{e^{-sT} G'(s)\}$.
If $g'(t)$ is a causal signal, then $Z\{e^{-sT} g'(t)\} = z^{-1} Z\{g'(t)\} = z^{-1} G'_1(z)$.
So, $G_{ZOH}(z) = G'_1(z) - z^{-1} G'_1(z) = (1 - z^{-1}) G'_1(z)$.

**General Procedure to Find $G(z)$ for a Sampled System $G(s)$ with ZOH:**
1.  **Identify $G(s)$:** The transfer function of the continuous-time plant.
2.  **Form the product $H(s)G(s)$:** For ZOH, $H(s) = \frac{1-e^{-sT}}{s}$. So, form $\frac{1-e^{-sT}}{s} G(s)$.
3.  **Decompose $\frac{1-e^{-sT}}{s} G(s)$:** Express it in a form where z-transforms are known. A common method is partial fraction expansion of $G(s)/s$, or by observing the structure of $G(s)$.
    *   **Method 1: Partial Fraction Expansion of $G(s)/s$.**
        Let $\frac{G(s)}{s} = \sum_i \frac{A_i}{s+p_i} + \dots$ (for simple poles).
        Then $Z\left\{\frac{G(s)}{s}\right\} = Z\left\{\sum_i \frac{A_i}{s+p_i}\right\} = \sum_i \frac{A_i}{1 - e^{-p_i T} z^{-1}}$. Let this be $G'_1(z)$.
        The pulse transfer function is $G_{ZOH}(z) = (1 - z^{-1}) G'_1(z)$.
    *   **Method 2: Direct Calculation of $Z\{G(s)\}$.**
        This method is more direct. The impulse response of the ZOH-plant combination is obtained by integrating $g(t)$ over intervals of length $T$.
        $h_{HG}(t) = \int_0^t g(\tau) d\tau$ for $0 \leq t < T$
        $h_{HG}(t) = \int_{t-T}^t g(\tau) d\tau$ for $t \geq T$
        The z-transform is then computed from these sampled impulse responses.
        $G_{ZOH}(z) = \sum_{n=0}^{\infty} h_{HG}(nT) z^{-n}$.
        $h_{HG}(nT) = \int_{nT-T}^{nT} g(\tau) d\tau$ for $n \geq 1$. (For $n=0$, the integral is 0).
        The sampled impulse response $h_{HG}(nT)$ can be written as:
        $h_{HG}(nT) = \int_0^{nT} g(\tau) d\tau - \int_0^{(n-1)T} g(\tau) d\tau$.
        Let $g_1(t) = \int_0^t g(\tau) d\tau$. Then $h_{HG}(nT) = g_1(nT) - g_1((n-1)T)$.
        $Z\{h_{HG}(t)\} = Z\{g_1(t) - g_1(t-T)\}$
        $G_{ZOH}(z) = Z\{g_1(t)\} - z^{-1} Z\{g_1(t)\}$
        $G_{ZOH}(z) = (1 - z^{-1}) Z\left\{\int_0^t g(\tau) d\tau\right\}$
        This confirms the earlier result.

**Example Calculation:**
Let $G(s) = \frac{a}{s+a}$.
We need to find $G_{ZOH}(z) = Z\left\{\frac{1 - e^{-sT}}{s} \frac{a}{s+a}\right\}$.

**Method 1:**
$G(s)/s = \frac{a}{s(s+a)}$.
Partial fractions: $\frac{a}{s(s+a)} = \frac{A}{s} + \frac{B}{s+a}$.
$a = A(s+a) + Bs$.
Set $s=0 \implies a = Aa \implies A=1$.
Set $s=-a \implies a = B(-a) \implies B=-1$.
So, $\frac{G(s)}{s} = \frac{1}{s} - \frac{1}{s+a}$.

Now

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
