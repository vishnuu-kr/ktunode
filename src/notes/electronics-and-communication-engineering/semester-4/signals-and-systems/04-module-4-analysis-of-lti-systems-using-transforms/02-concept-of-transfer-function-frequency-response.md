---
title: "Concept of transfer function-Frequency response"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Analysis of LTI systems using Transforms"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe532"
status: "completed"
scrapedAt: "2026-05-23T17:52:38.968Z"
---
## Signals and Systems: Module 4 - Analysis of LTI Systems using Transforms

### Topic: Concept of Transfer Function and Frequency Response

---

### 1. Introduction to Analysis of LTI Systems

Linear Time-Invariant (LTI) systems are fundamental in signal processing and control systems. While convolution provides a direct method for analyzing their behavior, it can be computationally intensive, especially for complex systems. Transform methods, such as the Laplace transform and the Fourier transform, offer powerful tools for simplifying this analysis by converting the time-domain operations (convolution) into algebraic operations in the transform domain.

**Key Concepts:**

*   **LTI System:** A system that is both linear and time-invariant.
    *   **Linearity:** Satisfies superposition and homogeneity.
    *   **Time-Invariance:** The system's behavior does not change over time.
*   **Impulse Response:** The output of an LTI system when the input is a unit impulse function, denoted by $h(t)$ for continuous-time systems and $h[n]$ for discrete-time systems.
*   **Convolution:** The mathematical operation that relates the input signal $x(t)$ and the impulse response $h(t)$ to the output signal $y(t)$ of an LTI system:
    *   Continuous-time: $y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau) h(t-\tau) d\tau$
    *   Discrete-time: $y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]$

**Learning Outcomes Covered:** CO2, CO4

**References:**
*   Oppenheim & Willsky, Chapter 3 (Convolution and LTI Systems)
*   Haykin, Chapter 2 (Linear Time-Invariant Systems)
*   Lathi, Chapter 5 (The Convolution Integral and its Properties)

---

### 2. The Laplace Transform and the Transfer Function

The Laplace transform is a powerful tool for analyzing continuous-time LTI systems. It transforms differential equations describing system behavior into algebraic equations.

#### 2.1 The Laplace Transform

**Definition:** The unilateral Laplace transform of a signal $x(t)$ is defined as:
$X(s) = \mathcal{L}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-st} dt$
where $s = \sigma + j\omega$ is a complex variable.

**Key Property for LTI Systems:** The Laplace transform converts the convolution operation in the time domain into multiplication in the $s$-domain.
$\mathcal{L}\{x(t) * h(t)\} = X(s) H(s)$

**System Representation in the s-domain:**
If $x(t)$ is the input and $y(t)$ is the output of an LTI system with impulse response $h(t)$, then:
$Y(s) = X(s) H(s)$

#### 2.2 The Transfer Function, $H(s)$

**Definition:** The transfer function $H(s)$ of a continuous-time LTI system is defined as the ratio of the Laplace transform of the output signal $Y(s)$ to the Laplace transform of the input signal $X(s)$, assuming zero initial conditions.
$H(s) = \frac{Y(s)}{X(s)}$

**Significance:**
*   **Characterizes the System:** The transfer function fully characterizes the input-output relationship of an LTI system, independent of the input signal itself.
*   **Algebraic Representation:** It transforms the differential equation describing the system into an algebraic equation.
*   **System Properties:** The poles and zeros of $H(s)$ reveal crucial information about the system's behavior, such as stability and causality.

**How to find $H(s)$ from the system's differential equation:**
Consider a linear constant-coefficient differential equation:
$a_n \frac{d^n y(t)}{dt^n} + a_{n-1} \frac{d^{n-1} y(t)}{dt^{n-1}} + \dots + a_0 y(t) = b_m \frac{d^m x(t)}{dt^m} + b_{m-1} \frac{d^{m-1} x(t)}{dt^{m-1}} + \dots + b_0 x(t)$

Taking the Laplace transform of both sides (assuming zero initial conditions):
$(a_n s^n + a_{n-1} s^{n-1} + \dots + a_0) Y(s) = (b_m s^m + b_{m-1} s^{m-1} + \dots + b_0) X(s)$

Therefore, the transfer function is:
$H(s) = \frac{Y(s)}{X(s)} = \frac{b_m s^m + b_{m-1} s^{m-1} + \dots + b_0}{a_n s^n + a_{n-1} s^{n-1} + \dots + a_0}$

**Region of Convergence (ROC):** The ROC of $H(s)$ is crucial for uniquely determining the impulse response and assessing system properties. For a causal LTI system, the ROC is typically to the right of the rightmost pole.

**Example:**
Consider an RC low-pass filter described by the differential equation:
$\tau \frac{dy(t)}{dt} + y(t) = x(t)$

Taking the Laplace transform:
$\tau s Y(s) + Y(s) = X(s)$
$Y(s)(\tau s + 1) = X(s)$

The transfer function is:
$H(s) = \frac{Y(s)}{X(s)} = \frac{1}{\tau s + 1}$

**Learning Outcomes Covered:** CO1, CO3, CO4

**References:**
*   Oppenheim & Willsky, Chapter 9 (The Laplace Transform)
*   Haykin, Chapter 8 (The Laplace Transform)
*   Anand Kumar, Chapter 6 (Laplace Transforms)
*   Lathi, Chapter 9 (The Laplace Transform)

---

### 3. The Z-Transform and the Transfer Function

For discrete-time LTI systems, the Z-transform plays a similar role to the Laplace transform. It converts difference equations into algebraic equations.

#### 3.1 The Z-Transform

**Definition:** The unilateral Z-transform of a discrete-time signal $x[n]$ is defined as:
$X(z) = \mathcal{Z}\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n] z^{-n}$
where $z$ is a complex variable.

**Key Property for LTI Systems:** The Z-transform converts the convolution operation in the time domain into multiplication in the $z$-domain.
$\mathcal{Z}\{x[n] * h[n]\} = X(z) H(z)$

**System Representation in the z-domain:**
If $x[n]$ is the input and $y[n]$ is the output of a discrete-time LTI system with impulse response $h[n]$, then:
$Y(z) = X(z) H(z)$

#### 3.2 The Transfer Function, $H(z)$

**Definition:** The transfer function $H(z)$ of a discrete-time LTI system is defined as the ratio of the Z-transform of the output signal $Y(z)$ to the Z-transform of the input signal $X(z)$, assuming zero initial conditions.
$H(z) = \frac{Y(z)}{X(z)}$

**Significance:**
*   **Characterizes the System:** Similar to $H(s)$, $H(z)$ completely describes the input-output relationship of a discrete-time LTI system.
*   **Algebraic Representation:** It transforms difference equations into algebraic equations.
*   **System Properties:** The poles and zeros of $H(z)$ are crucial for determining stability and causality.

**How to find $H(z)$ from the system's difference equation:**
Consider a linear constant-coefficient difference equation:
$a_0 y[n] + a_1 y[n-1] + \dots + a_N y[n-N] = b_0 x[n] + b_1 x[n-1] + \dots + b_M x[n-M]$

Taking the Z-transform of both sides (assuming zero initial conditions):
$(a_0 + a_1 z^{-1} + \dots + a_N z^{-N}) Y(z) = (b_0 + b_1 z^{-1} + \dots + b_M z^{-M}) X(z)$

Therefore, the transfer function is:
$H(z) = \frac{Y(z)}{X(z)} = \frac{b_0 + b_1 z^{-1} + \dots + b_M z^{-M}}{a_0 + a_1 z^{-1} + \dots + a_N z^{-N}}$

Alternatively, multiplying numerator and denominator by $z^N$ (assuming $N \ge M$):
$H(z) = \frac{b_0 z^N + b_1 z^{N-1} + \dots + b_M z^{N-M}}{a_0 z^N + a_1 z^{N-1} + \dots + a_N}$

**Region of Convergence (ROC):** The ROC of $H(z)$ is important for unique reconstruction of the impulse response and for stability analysis. For a causal LTI system, the ROC is the region outside the circle passing through the outermost pole.

**Example:**
Consider a simple discrete-time system defined by the difference equation:
$y[n] = a y[n-1] + b x[n]$

Taking the Z-transform:
$Y(z) = a z^{-1} Y(z) + b X(z)$
$Y(z) (1 - a z^{-1}) = b X(z)$

The transfer function is:
$H(z) = \frac{Y(z)}{X(z)} = \frac{b}{1 - a z^{-1}}$

**Learning Outcomes Covered:** CO1, CO3, CO4

**References:**
*   Oppenheim & Willsky, Chapter 10 (The Z-Transform)
*   Haykin, Chapter 8 (The Z-Transform)
*   Anand Kumar, Chapter 7 (Z-Transforms)
*   Ziemer, Chapter 7 (The Z-Transform)

---

### 4. The Fourier Transform and Frequency Response

The Fourier Transform is crucial for analyzing the frequency-domain behavior of LTI systems. When the input to an LTI system is a complex exponential or sinusoid, the output is also a complex exponential or sinusoid of the same frequency, scaled by a complex factor that depends on the frequency. This factor is the frequency response.

#### 4.1 Frequency Response $H(j\omega)$

**Definition:** For a continuous-time LTI system, the frequency response $H(j\omega)$ is obtained by evaluating the Laplace transform $H(s)$ along the imaginary axis, i.e., by substituting $s = j\omega$, provided that the ROC of $H(s)$ includes the imaginary axis (which is true for stable systems).
$H(j\omega) = H(s)|_{s=j\omega}$

**Significance:**
*   **Frequency-Domain Analysis:** $H(j\omega)$ describes how the system modifies sinusoidal inputs at different frequencies.
*   **Magnitude Response:** $|H(j\omega)|$ represents the gain or attenuation of the system at frequency $\omega$.
*   **Phase Response:** $\angle H(j\omega)$ represents the phase shift introduced by the system at frequency $\omega$.

**Relationship with Impulse Response:** The Fourier Transform of the impulse response $h(t)$ is the frequency response $H(j\omega)$.
$H(j\omega) = \mathcal{F}\{h(t)\} = \int_{-\infty}^{\infty} h(t) e^{-j\omega t} dt$

**System Behavior with Sinusoidal Input:**
If $x(t) = A \cos(\omega_0 t + \phi)$, then the output $y(t)$ for a stable LTI system is:
$y(t) = A |H(j\omega_0)| \cos(\omega_0 t + \phi + \angle H(j\omega_0))$

**Example:**
Consider the RC low-pass filter with transfer function $H(s) = \frac{1}{\tau s + 1}$.
To find the frequency response, substitute $s = j\omega$:
$H(j\omega) = \frac{1}{\tau (j\omega) + 1} = \frac{1}{1 + j\omega\tau}$

Magnitude Response:
$|H(j\omega)| = \left| \frac{1}{1 + j\omega\tau} \right| = \frac{1}{|1 + j\omega\tau|} = \frac{1}{\sqrt{1^2 + (\omega\tau)^2}} = \frac{1}{\sqrt{1 + (\omega\tau)^2}}$

Phase Response:
$\angle H(j\omega) = \angle \left( \frac{1}{1 + j\omega\tau} \right) = -\angle (1 + j\omega\tau) = -\arctan(\omega\tau)$

This indicates that the RC filter attenuates high frequencies (magnitude decreases as $\omega$ increases) and introduces a phase lag.

**Learning Outcomes Covered:** CO3, CO4

**References:**
*   Oppenheim & Willsky, Chapter 5 (Fourier Series and Fourier Transform) and Chapter 8 (Frequency Response)
*   Haykin, Chapter 6 (The Fourier Transform)
*   Lathi, Chapter 10 (The Fourier Transform)
*   Apte, Chapter 7 (Frequency Response of LTI Systems)

#### 4.2 Frequency Response for Discrete-Time Systems

For discrete-time LTI systems, the concept of frequency response is similar but is derived from the Z-transform by substituting $z = e^{j\omega}$.

**Definition:** The frequency response $H(e^{j\omega})$ of a discrete-time LTI system is obtained by evaluating the Z-transform $H(z)$ on the unit circle in the $z$-plane, i.e., by substituting $z = e^{j\omega}$, provided that the ROC of $H(z)$ includes the unit circle (which is true for stable systems).
$H(e^{j\omega}) = H(z)|_{z=e^{j\omega}}$

**Significance:**
*   **Frequency-Domain Analysis:** $H(e^{j\omega})$ describes how the system modifies discrete-time sinusoids at different frequencies.
*   **Magnitude Response:** $|H(e^{j\omega})|$ is the gain at frequency $\omega$.
*   **Phase Response:** $\angle H(e^{j\omega})$ is the phase shift at frequency $\omega$.

**Relationship with Impulse Response:** The Discrete-Time Fourier Transform (DTFT) of the impulse response $h[n]$ is the frequency response $H(e^{j\omega})$.
$H(e^{j\omega}) = \mathcal{DTFT}\{h[n]\} = \sum_{n=-\infty}^{\infty} h[n] e^{-j\omega n}$

**System Behavior with Sinusoidal Input:**
If $x[n] = A \cos(\omega_0 n + \phi)$, then the output $y[n]$ for a stable LTI system is:
$y[n] = A |H(e^{j\omega_0})| \cos(\omega_0 n + \phi + \angle H(e^{j\omega_0}))$

**Example:**
Consider a discrete-time system with transfer function $H(z) = \frac{b}{1 - a z^{-1}}$, where $|a| < 1$ for stability.
To find the frequency response, substitute $z = e^{j\omega}$:
$H(e^{j\omega}) = \frac{b}{1 - a e^{-j\omega}} = \frac{b}{1 - a (\cos\omega - j\sin\omega)} = \frac{b}{(1 - a\cos\omega) + j(a\sin\omega)}$

Magnitude Response:
$|H(e^{j\omega})| = \left| \frac{b}{1 - a e^{-j\omega}} \right| = \frac{|b|}{|1 - a e^{-j\omega}|} = \frac{|b|}{\sqrt{(1 - a\cos\omega)^2 + (a\sin\omega)^2}}$
$|H(e^{j\omega})| = \frac{|b|}{\sqrt{1 - 2a\cos\omega + a^2\cos^2\omega + a^2\sin^2\omega}} = \frac{|b|}{\sqrt{1 + a^2 - 2a\cos\omega}}$

Phase Response:
$\angle H(e^{j\omega}) = \angle \left( \frac{b}{1 - a e^{-j\omega}} \right) = -\angle (1 - a e^{-j\omega}) = -\arctan\left(\frac{a\sin\omega}{1 - a\cos\omega}\right)$

**Learning Outcomes Covered:** CO3, CO4

**References:**
*   Oppenheim & Willsky, Chapter 10 (The Z-Transform) and Chapter 13 (The Discrete-Time Fourier Transform)
*   Haykin, Chapter 8 (The Z-Transform) and Chapter 9 (The Discrete-Time Fourier Transform)
*   Ziemer, Chapter 7 (The Z-Transform) and Chapter 10 (Frequency Response)

---

### 5. System Properties and Transform Domain Analysis

The transform domain (s-domain for continuous-time, z-domain for discrete-time) provides powerful insights into system properties such as stability and causality.

#### 5.1 Stability

**Continuous-Time LTI Systems:**
*   **Bounded-Input, Bounded-Output (BIBO) Stability:** An LTI system is BIBO stable if every bounded input produces a bounded output.
*   **Condition for BIBO Stability:** For a causal LTI system, BIBO stability is guaranteed if and only if all the poles of its transfer function $H(s)$ lie strictly in the left-half of the $s$-plane (i.e., $\text{Re}(s) < 0$).
*   **ROC Implication:** For a causal system, the ROC of $H(s)$ must include the imaginary axis ($j\omega$-axis).

**Discrete-Time LTI Systems:**
*   **BIBO Stability:** An LTI system is BIBO stable if every bounded input produces a bounded output.
*   **Condition for BIBO Stability:** For a causal LTI system, BIBO stability is guaranteed if and only if all the poles of its transfer function $H(z)$ lie strictly inside the unit circle in the $z$-plane (i.e., $|z| < 1$).
*   **ROC Implication:** For a causal system, the ROC of $H(z)$ must include the unit circle ($|z|=1$).

**Learning Outcomes Covered:** CO2, CO3, CO4

**References:**
*   Oppenheim & Willsky, Chapter 9 (Laplace Transform and System Properties) and Chapter 10 (Z-Transform and System Properties)
*   Haykin, Chapter 8 (Laplace and Z-Transforms)
*   Lathi, Chapter 9 (Laplace Transform) and Chapter 10 (Fourier Transform)
*   Ambardar, Chapter 5 (Laplace Transforms) and Chapter 6 (Z-Transforms)
*   Apte, Chapter 5 (Laplace Transform) and Chapter 6 (Z-Transform)

#### 5.2 Causality

**Continuous-Time LTI Systems:**
*   **Causality:** A system is causal if its output at any time $t$ depends only on the input at the present and past times ($t' \le t$).
*   **Condition for Causality:** For an LTI system, causality is equivalent to its impulse response $h(t)$ being zero for all $t < 0$.
*   **ROC Implication:** For a causal LTI system, the ROC of $H(s)$ is the region to the right of the rightmost pole.

**Discrete-Time LTI Systems:**
*   **Causality:** A system is causal if its output at any time $n$ depends only on the input at the present and past times ($n' \le n$).
*   **Condition for Causality:** For an LTI system, causality is equivalent to its impulse response $h[n]$ being zero for all $n < 0$.
*   **ROC Implication:** For a causal LTI system, the ROC of $H(z)$ is the region outside the circle passing through the outermost pole.

**Learning Outcomes Covered:** CO2, CO3, CO4

**References:**
*   Oppenheim & Willsky, Chapter 3 (Impulse Response and Convolution) and Chapter 9/10 (Transform Properties)
*   Haykin, Chapter 2 (LTI Systems) and Chapter 8 (Transforms)

---

### 6. Important Points to Remember

*   **Transfer Function $H(s)$ (Continuous-Time):**
    *   $H(s) = Y(s)/X(s)$
    *   Transforms differential equations into algebraic equations.
    *   $H(j\omega) = H(s)|_{s=j\omega}$ is the frequency response.
    *   Poles of $H(s)$ determine stability (must be in LHP for causal systems).
    *   ROC must include $j\omega$-axis for causal stable systems.
*   **Transfer Function $H(z)$ (Discrete-Time):**
    *   $H(z) = Y(z)/X(z)$
    *   Transforms difference equations into algebraic equations.
    *   $H(e^{j\omega}) = H(z)|_{z=e^{j\omega}}$ is the frequency response.
    *   Poles of $H(z)$ determine stability (must be inside the unit circle for causal systems).
    *   ROC must include the unit circle for causal stable systems.
*   **Frequency Response $H(j\omega)$ and $H(e^{j\omega})$:**
    *   Describes how LTI systems modify sinusoidal inputs.
    *   $|H(j\omega)|$ and $|H(e^{j\omega})|$ are magnitude responses (gain).
    *   $\angle H(j\omega)$ and $\angle H(e^{j\omega})$ are phase responses (phase shift).
*   **System Properties:** Stability and causality can be directly inferred from the location of poles and the ROC of the transfer function.

---

### 7. Practice Questions and Exercises

**Question 1 (Continuous-Time):**
A continuous-time LTI system is described by the differential equation:
$\frac{d^2 y(t)}{dt^2} + 3\frac{dy(t)}{dt} + 2y(t) = \frac{dx(t)}{dt} + x(t)$
Find the transfer function $H(s)$ of the system. Determine if the system is stable and causal.

**Solution:**
Taking the Laplace transform of both sides (assuming zero initial conditions):
$s^2 Y(s) + 3s Y(s) + 2 Y(s) = s X(s) + X(s)$
$(s^2 + 3s + 2) Y(s) = (s+1) X(s)$
$H(s) = \frac{Y(s)}{X(s)} = \frac{s+1}{s^2 + 3s + 2}$

Factor the denominator: $s^2 + 3s + 2 = (s+1)(s+2)$.
So, $H(s) = \frac{s+1}{(s+1)(s+2)}$.
For $s \ne -1$, $H(s) = \frac{1}{s+2}$.

The poles of $H(s)$ are at $s = -2$ and $s = -1$. Since both poles are in the left-half plane ($\text{Re}(s) < 0$), the system is stable. For a causal system, the impulse response $h(t)$ must be zero for $t<0$. The Laplace transform $H(s) = \frac{1}{s+2}$ has a ROC of $\text{Re}(s) > -2$. This ROC includes the imaginary axis, and the pole is at $s=-2$ (in LHP), implying a causal system with $h(t) = e^{-2t}u(t)$. Therefore, the system is causal and stable.

**Answer:** $H(s) = \frac{1}{s+2}$. The system is causal and stable.

---

**Question 2 (Discrete-Time):**
A discrete-time LTI system has the impulse response $h[n] = a^n u[n]$ with $|a| < 1$.
Find the transfer function $H(z)$ and its ROC. Determine if the system is stable and causal.

**Solution:**
The Z-transform of $h[n] = a^n u[n]$ is $H(z) = \sum_{n=0}^{\infty} a^n z^{-n}$.
This is a geometric series with $r = az^{-1}$. The sum converges if $|az^{-1}| < 1$, which means $|z| > |a|$.
$H(z) = \frac{1}{1 - az^{-1}}$, with ROC $|z| > |a|$.

*   **Causality:** The impulse response $h[n] = a^n u[n]$ is zero for $n < 0$, so the system is causal.
*   **Stability:** For a causal system, stability requires all poles to be inside the unit circle. The pole of $H(z)$ is at $z = a$. Since $|a| < 1$, the pole is inside the unit circle, so the system is stable. Also, the ROC $|z| > |a|$ includes the unit circle $|z|=1$.

**Answer:** $H(z) = \frac{1}{1 - az^{-1}}$, ROC: $|z| > |a|$. The system is causal and stable.

---

**Question 3 (Frequency Response):**
For a continuous-time LTI system with transfer function $H(s) = \frac{1}{s+a}$ where $a>0$.
a) Find the frequency response $H(j\omega)$.
b) Determine the magnitude and phase response.
c) If the input is $x(t) = 5 \cos(2t)$, find the output $y(t)$.

**Solution:**
a) Substitute $s=j\omega$:
$H(j\omega) = \frac{1}{j\omega+a}$

b) Magnitude Response:
$|H(j\omega)| = \left| \frac{1}{a+j\omega} \right| = \frac{1}{|a+j\omega|} = \frac{1}{\sqrt{a^2 + \omega^2}}$

Phase Response:
$\angle H(j\omega) = \angle \left( \frac{1}{a+j\omega} \right) = -\angle (a+j\omega) = -\arctan\left(\frac{\omega}{a}\right)$

c) Given $x(t) = 5 \cos(2t)$, the input frequency is $\omega_0 = 2$.
We need to evaluate $H(j\omega)$ at $\omega = 2$:
$|H(j2)| = \frac{1}{\sqrt{a^2 + 2^2}} = \frac{1}{\sqrt{a^2 + 4}}$
$\angle H(j2) = -\arctan\left(\frac{2}{a}\right)$

The output $y(t)$ is given by:
$y(t) = (\text{Amplitude of } x(t)) \times |H(j\omega_0)| \cos(\omega_0 t + \phi + \angle H(j\omega_0))$
Here, Amplitude of $x(t)$ is 5, $\omega_0 = 2$, $\phi = 0$.
$y(t) = 5 \times \frac{1}{\sqrt{a^2 + 4}} \cos\left(2t + 0 - \arctan\left(\frac{2}{a}\right)\right)$
$y(t) = \frac{5}{\sqrt{a^2 + 4}} \cos\left(2t - \arctan\left(\frac{2}{a}\right)\right)$

**Answer:**
a) $H(j\omega) = \frac{1}{a+j\omega}$
b) $|H(j\omega)| = \frac{1}{\sqrt{a^2 + \omega^2}}$, $\angle H(j\omega) = -\arctan\left(\frac{\omega}{a}\right)$
c) $y(t) = \frac{5}{\sqrt{a^2 + 4}} \cos\left(2t - \arctan\left(\frac{2}{a}\right)\right)$

---

**Question 4 (Discrete-Time Frequency Response):**
For a discrete-time LTI system with transfer function $H(z) = \frac{z}{z - 0.5}$.
a) Find the frequency response $H(e^{j\omega})$.
b) Determine the magnitude and phase response.

**Solution:**
Substitute $z = e^{j\omega}$:
$H(e^{j\omega}) = \frac{e^{j\omega}}{e^{j\omega} - 0.5}$

a) To simplify, we can write $e^{j\omega} = \cos\omega + j\sin\omega$.
$H(e^{j\omega}) = \frac{\cos\omega + j\sin\omega}{(\cos\omega - 0.5) + j\sin\omega}$

b) Magnitude Response:
$|H(e^{j\omega})| = \left| \frac{e^{j\omega}}{e^{j\omega} - 0.5} \right| = \frac{|e^{j\omega}|}{|e^{j\omega} - 0.5|} = \frac{1}{|(\cos\omega - 0.5) + j\sin\omega|}$
$|H(e^{j\omega})| = \frac{1}{\sqrt{(\cos\omega - 0.5)^2 + (\sin\omega)^2}}$
$|H(e^{j\omega})| = \frac{1}{\sqrt{\cos^2\omega - \cos\omega + 0.25 + \sin^2\omega}} = \frac{1}{\sqrt{1 - \cos\omega + 0.25}} = \frac{1}{\sqrt{1.25 - \cos\omega}}$

Phase Response:
$\angle H(e^{j\omega}) = \angle (e^{j\omega}) - \angle (e^{j\omega} - 0.5)$
$\angle H(e^{j\omega}) = \omega - \arctan\left(\frac{\sin\omega}{\cos\omega - 0.5}\right)$

**Answer:**
a) $H(e^{j\omega}) = \frac{e^{j\omega}}{e^{j\omega} - 0.5}$
b) $|H(e^{j\omega})| = \frac{1}{\sqrt{1.25 - \cos\omega}}$, $\angle H(e^{j\omega}) = \omega - \arctan\left(\frac{\sin\omega}{\cos\omega - 0.5}\right)$

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
