---
title: "Concept of Frequency response"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Frequency domain characterization of Signals and Systems: Fourier transform: Existence "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361d3"
status: "completed"
scrapedAt: "2026-05-23T16:23:44.173Z"
---
# Signals and Systems: Module 2 - Frequency Domain Characterization: Fourier Transform: Existence

## Topic: Concept of Frequency Response

**Learning Outcomes:**

*   Understand the meaning and significance of frequency response.
*   Relate frequency response to the system's behavior for different frequency inputs.
*   Analyze how the frequency response characterizes a Linear Time-Invariant (LTI) system.
*   Determine the frequency response of a system from its impulse response or transfer function.
*   Understand the concepts of magnitude response and phase response.

**Course Outcomes Alignment:**

*   **CO2: To represent continuous time signals and systems in frequency domain (Knowledge Level: K3)** - This topic is central to understanding how LTI systems behave when subjected to inputs at different frequencies, a core concept in frequency domain representation.
*   **CO1: To represent continuous and discrete time signals in time domain and perform various mathematical operations (Knowledge Level: K2)** - While this topic focuses on the frequency domain, understanding time-domain representations (like the impulse response) is crucial for deriving the frequency response.

---

### 1. Introduction to Frequency Response

The **frequency response** of a Linear Time-Invariant (LTI) system is a fundamental concept that describes how the system affects sinusoidal inputs of different frequencies. It tells us how the system *modulates* the amplitude and phase of each frequency component present in the input signal.

**Key Idea:** Any signal can be decomposed into a sum of sinusoids (thanks to the Fourier Series for periodic signals and the Fourier Transform for aperiodic signals). By understanding how an LTI system responds to a single sinusoid, we can predict its response to any signal.

**Formal Definition:** For an LTI system with impulse response $h(t)$, the frequency response $H(\omega)$ is the Fourier Transform of the impulse response:

$$H(\omega) = \mathcal{F}\{h(t)\} = \int_{-\infty}^{\infty} h(t) e^{-j\omega t} dt$$

Here, $\omega$ represents the angular frequency in radians per second.

**Why is it called "frequency response"?**
Because it tells us how the system *responds* to different *frequencies*.

---

### 2. Response of an LTI System to a Sinusoidal Input

Consider an LTI system with impulse response $h(t)$ and frequency response $H(\omega)$. Let the input signal be a complex exponential:

$$x(t) = A e^{j\omega_0 t}$$

The output of the system $y(t)$ is given by the convolution of the input with the impulse response:

$$y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} h(\tau) x(t - \tau) d\tau$$

Substitute $x(t) = A e^{j\omega_0 t}$:

$$y(t) = \int_{-\infty}^{\infty} h(\tau) A e^{j\omega_0 (t - \tau)} d\tau$$
$$y(t) = A \int_{-\infty}^{\infty} h(\tau) e^{j\omega_0 t} e^{-j\omega_0 \tau} d\tau$$
$$y(t) = A e^{j\omega_0 t} \int_{-\infty}^{\infty} h(\tau) e^{-j\omega_0 \tau} d\tau$$

The integral term is precisely the Fourier Transform of $h(t)$ evaluated at $\omega = \omega_0$, which is the frequency response $H(\omega_0)$:

$$y(t) = A e^{j\omega_0 t} H(\omega_0)$$

**Important Implication:** When an LTI system is driven by a complex exponential $A e^{j\omega_0 t}$, the output is also a complex exponential of the same frequency $\omega_0$, scaled in amplitude by $H(\omega_0)$ and with its phase shifted by the phase of $H(\omega_0)$.

---

### 3. Magnitude Response and Phase Response

The frequency response $H(\omega)$ is generally a complex-valued function of frequency. It can be expressed in polar form:

$$H(\omega) = |H(\omega)| e^{j \angle H(\omega)}$$

*   **Magnitude Response:** $|H(\omega)|$
    *   This term represents the *gain* or *attenuation* factor applied by the system to the amplitude of the input sinusoid at frequency $\omega$.
    *   If $|H(\omega)| > 1$, the system amplifies the input sinusoid at that frequency.
    *   If $|H(\omega)| < 1$, the system attenuates (reduces) the amplitude of the input sinusoid.
    *   If $|H(\omega)| = 1$, the system preserves the amplitude.

*   **Phase Response:** $\angle H(\omega)$ (or $\phi_H(\omega)$)
    *   This term represents the *phase shift* introduced by the system to the input sinusoid at frequency $\omega$.
    *   A positive phase shift means the output sinusoid leads the input sinusoid.
    *   A negative phase shift means the output sinusoid lags the input sinusoid.

**Response to a Real Sinusoidal Input:**

If the input is a real sinusoid: $x(t) = A \cos(\omega_0 t + \theta)$.
We can write this using Euler's formula: $x(t) = A \frac{e^{j\omega_0 t}e^{j\theta} + e^{-j\omega_0 t}e^{-j\theta}}{2}$.

The output $y(t)$ will be:

$$y(t) = \frac{A}{2} e^{j\omega_0 t} H(\omega_0) e^{j\theta} + \frac{A}{2} e^{-j\omega_0 t} H(-\omega_0) e^{-j\theta}$$

Since $h(t)$ is usually real for physical systems, $H(-\omega) = H^*(\omega)$, where $H^*(\omega)$ is the complex conjugate of $H(\omega)$.
Therefore, $H(-\omega_0) = |H(\omega_0)| e^{-j\angle H(\omega_0)}$.

Substituting this back:

$$y(t) = \frac{A}{2} e^{j\omega_0 t} |H(\omega_0)| e^{j\angle H(\omega_0)} e^{j\theta} + \frac{A}{2} e^{-j\omega_0 t} |H(\omega_0)| e^{-j\angle H(\omega_0)} e^{-j\theta}$$
$$y(t) = A |H(\omega_0)| \left( \frac{e^{j(\omega_0 t + \theta + \angle H(\omega_0))} + e^{-j(\omega_0 t + \theta + \angle H(\omega_0))}}{2} \right)$$
$$y(t) = A |H(\omega_0)| \cos(\omega_0 t + \theta + \angle H(\omega_0))$$

This confirms that the output is a sinusoid of the same frequency $\omega_0$, with its amplitude scaled by $|H(\omega_0)|$ and its phase shifted by $\angle H(\omega_0)$.

---

### 4. Examples of Frequency Response

**Example 1: RC Low-Pass Filter**

Consider a simple RC low-pass filter with a resistor $R$ and a capacitor $C$.
The differential equation is: $RC \frac{dy(t)}{dt} + y(t) = x(t)$.

Taking the Fourier Transform of both sides:
$RC (j\omega) Y(\omega) + Y(\omega) = X(\omega)$
$Y(\omega) (RC j\omega + 1) = X(\omega)$

The transfer function $H(s) = \frac{Y(s)}{X(s)}$ is given by $H(s) = \frac{1}{RCs + 1}$.
To find the frequency response, we substitute $s = j\omega$:

$$H(j\omega) = \frac{1}{RCj\omega + 1}$$

Now, let's find the magnitude and phase response:

*   **Magnitude Response:**
    $$|H(j\omega)| = \left|\frac{1}{1 + j\omega RC}\right| = \frac{|1|}{|1 + j\omega RC|} = \frac{1}{\sqrt{1^2 + (\omega RC)^2}} = \frac{1}{\sqrt{1 + (\omega RC)^2}}$$

*   **Phase Response:**
    $$\angle H(j\omega) = \angle \left(\frac{1}{1 + j\omega RC}\right) = \angle 1 - \angle (1 + j\omega RC) = 0 - \arctan\left(\frac{\omega RC}{1}\right)$$
    $$\angle H(j\omega) = -\arctan(\omega RC)$$

**Analysis:**
*   At low frequencies ($\omega \to 0$): $|H(j\omega)| \approx 1$ (gain is 1), $\angle H(j\omega) \approx 0$ (no phase shift). The filter passes low frequencies with little modification.
*   At high frequencies ($\omega \to \infty$): $|H(j\omega)| \to 0$ (gain approaches 0), $\angle H(j\omega) \to -\frac{\pi}{2}$ (phase shift of -90 degrees). The filter attenuates high frequencies.
*   The **cutoff frequency** is defined as the frequency where the magnitude drops to $\frac{1}{\sqrt{2}}$ of its maximum value.
    $$\frac{1}{\sqrt{1 + (\omega_c RC)^2}} = \frac{1}{\sqrt{2}} \implies 1 + (\omega_c RC)^2 = 2 \implies (\omega_c RC)^2 = 1 \implies \omega_c = \frac{1}{RC}$$
    This confirms it's a low-pass filter.

**Textbook Reference:** This concept is extensively covered in **Simon Haykin, Barry Van Veen** Chapter 4 (Fourier Transform) and Chapter 5 (Linear Time-Invariant Systems). The relationship between impulse response and frequency response ($H(\omega) = \mathcal{F}\{h(t)\}$) is fundamental.

---

**Example 2: RC High-Pass Filter**

Consider a series RC circuit where the output is taken across the resistor.
The differential equation is: $RC \frac{dy(t)}{dt} + y(t) = RC \frac{dx(t)}{dt}$.

Taking the Fourier Transform:
$RC (j\omega) Y(\omega) + Y(\omega) = RC (j\omega) X(\omega)$
$Y(\omega) (RC j\omega + 1) = RC j\omega X(\omega)$

The transfer function is $H(s) = \frac{RCs}{RCs + 1}$.
The frequency response is:

$$H(j\omega) = \frac{RCj\omega}{1 + RCj\omega}$$

*   **Magnitude Response:**
    $$|H(j\omega)| = \left|\frac{j\omega RC}{1 + j\omega RC}\right| = \frac{|\omega RC|}{|1 + j\omega RC|} = \frac{\omega RC}{\sqrt{1 + (\omega RC)^2}}$$

*   **Phase Response:**
    $$\angle H(j\omega) = \angle (j\omega RC) - \angle (1 + j\omega RC) = \frac{\pi}{2} - \arctan(\omega RC)$$

**Analysis:**
*   At low frequencies ($\omega \to 0$): $|H(j\omega)| \to 0$, $\angle H(j\omega) \to \frac{\pi}{2}$ (90 degrees). The filter attenuates low frequencies and introduces a leading phase shift.
*   At high frequencies ($\omega \to \infty$): $|H(j\omega)| \to 1$, $\angle H(j\omega) \to 0$. The filter passes high frequencies with little modification.
*   The cutoff frequency is still $\omega_c = \frac{1}{RC}$.

---

### 5. Frequency Response of Systems from Transfer Function

For many LTI systems, especially in control systems and electrical engineering, the system is described by its **transfer function** $H(s)$ in the Laplace domain, where $s = \sigma + j\omega$.

The frequency response $H(j\omega)$ is obtained by substituting $s = j\omega$ into the transfer function. This process is valid for systems that are stable or marginally stable and for which the Fourier Transform of the impulse response exists.

$$H(j\omega) = H(s)|_{s=j\omega}$$

**Example: RLC Series Circuit**

Consider an RLC series circuit with voltage source $x(t)$ and voltage across the capacitor $y(t)$.
The equation of motion is $L \frac{d^2 y(t)}{dt^2} + R \frac{dy(t)}{dt} + \frac{1}{C} y(t) = \frac{1}{C} x(t)$ (assuming the output is capacitor voltage).

The transfer function is:
$$H(s) = \frac{Y(s)}{X(s)} = \frac{1/C}{Ls^2 + Rs + 1/C} = \frac{1}{LCs^2 + RCs + 1}$$

To find the frequency response, substitute $s = j\omega$:

$$H(j\omega) = \frac{1}{LC(j\omega)^2 + RC(j\omega) + 1} = \frac{1}{1 - LC\omega^2 + j\omega RC}$$

**Magnitude Response:**
$$|H(j\omega)| = \frac{1}{|1 - LC\omega^2 + j\omega RC|} = \frac{1}{\sqrt{(1 - LC\omega^2)^2 + (\omega RC)^2}}$$

**Phase Response:**
$$\angle H(j\omega) = -\arctan\left(\frac{\omega RC}{1 - LC\omega^2}\right)$$

This RLC circuit can exhibit different frequency responses (low-pass, band-pass, or band-reject) depending on the values of $R$, $L$, and $C$. For instance, when $1 - LC\omega^2 = 0$, i.e., $\omega = \frac{1}{\sqrt{LC}}$ (the resonant frequency), the denominator becomes purely imaginary, and if the resistance is small, the magnitude can be large, indicating a band-pass characteristic.

**Textbook Reference:** **Norman S. Nise** in "Control Systems Engineering" extensively uses transfer functions and their relation to frequency response via the Nyquist criterion and Bode plots (Chapter 10). **Katsuhiko Ogata**'s "Discrete Time Control Systems" (though for discrete systems, the concepts for continuous systems are analogous and covered in introductory chapters) and **Dorf & Bishop**'s "Modern Control Systems" also provide detailed explanations.

---

### 6. Graphical Representation of Frequency Response

The frequency response $H(j\omega)$ is often visualized using Bode plots:

*   **Magnitude Plot:** Plots $|H(j\omega)|$ (usually in decibels, $20 \log_{10} |H(j\omega)|$) versus $\log_{10} \omega$.
*   **Phase Plot:** Plots $\angle H(j\omega)$ (in degrees or radians) versus $\log_{10} \omega$.

Bode plots are powerful tools for understanding the system's behavior across a wide range of frequencies and for designing controllers.

---

### 7. Importance of Frequency Response

*   **System Characterization:** Provides a complete picture of how an LTI system behaves with respect to sinusoidal inputs.
*   **Filter Design:** Essential for designing filters that selectively pass or block certain frequency ranges.
*   **Stability Analysis:** Used in conjunction with methods like Nyquist plots and Bode plots to assess system stability (especially in control systems).
*   **System Identification:** The frequency response can be measured experimentally to infer system properties.
*   **Signal Processing:** Crucial for understanding how signals are modified by filters, amplifiers, and other signal processing components.
*   **Understanding Bandwidth:** The frequency range over which the magnitude response is significant indicates the system's bandwidth.

---

### 8. Important Points to Remember

*   **LTI Systems:** The concept of frequency response is strictly applicable to Linear Time-Invariant (LTI) systems.
*   **Sinusoidal Input:** For an LTI system, if the input is $A e^{j\omega_0 t}$, the output is $A H(\omega_0) e^{j\omega_0 t}$.
*   **Complex Exponential vs. Real Sinusoid:** The frequency response $H(\omega)$ directly gives the scaling and phase shift for complex exponentials. For real sinusoids, the magnitude response $|H(\omega)|$ and phase response $\angle H(\omega)$ dictate the output.
*   **$H(j\omega) = \mathcal{F}\{h(t)\}$:** The frequency response is the Fourier Transform of the impulse response.
*   **$H(j\omega) = H(s)|_{s=j\omega}$:** For systems described by transfer functions, the frequency response is obtained by setting $s = j\omega$. This is valid for systems where the Fourier Transform of $h(t)$ exists.
*   **Magnitude and Phase:** $H(j\omega)$ can be decomposed into magnitude $|H(j\omega)|$ and phase $\angle H(j\omega)$.
*   **Causality and Stability:** The existence of the Fourier Transform (and thus a well-defined frequency response) is related to the absolute integrability of the impulse response, which in turn is related to system properties like causality and stability. (Further explored in the "Existence" topic).

---

### Practice Questions/Exercises

**Question 1:**
An LTI system has an impulse response $h(t) = e^{-2t} u(t)$.
(a) Find the frequency response $H(j\omega)$.
(b) Determine the magnitude response $|H(j\omega)|$.
(c) Determine the phase response $\angle H(j\omega)$.
(d) What is the magnitude and phase of the system's response to the input $x(t) = 5 \cos(3t + \pi/4)$?

**Answer 1:**
(a) $H(j\omega) = \mathcal{F}\{e^{-2t} u(t)\} = \frac{1}{2 + j\omega}$
(b) $|H(j\omega)| = \frac{1}{|2 + j\omega|} = \frac{1}{\sqrt{2^2 + \omega^2}} = \frac{1}{\sqrt{4 + \omega^2}}$
(c) $\angle H(j\omega) = \angle \left(\frac{1}{2 + j\omega}\right) = -\arctan\left(\frac{\omega}{2}\right)$
(d) For $x(t) = 5 \cos(3t + \pi/4)$, the amplitude is $A=5$, angular frequency is $\omega_0=3$, and initial phase is $\theta=\pi/4$.
The magnitude response at $\omega=3$ is $|H(j3)| = \frac{1}{\sqrt{4 + 3^2}} = \frac{1}{\sqrt{4+9}} = \frac{1}{\sqrt{13}}$.
The phase response at $\omega=3$ is $\angle H(j3) = -\arctan\left(\frac{3}{2}\right)$.
The output will be $y(t) = A |H(\omega_0)| \cos(\omega_0 t + \theta + \angle H(\omega_0))$
$y(t) = 5 \times \frac{1}{\sqrt{13}} \cos\left(3t + \frac{\pi}{4} - \arctan\left(\frac{3}{2}\right)\right)$.
So, the magnitude of the response is $\frac{5}{\sqrt{13}}$ and the phase of the response is $\frac{\pi}{4} - \arctan\left(\frac{3}{2}\right)$.

---

**Question 2:**
A system is described by the transfer function $H(s) = \frac{s}{s+1}$.
(a) Find the frequency response $H(j\omega)$.
(b) Sketch the magnitude response $|H(j\omega)|$ and the phase response $\angle H(j\omega)$ as a function of $\omega$.
(c) What type of filter is this system?

**Answer 2:**
(a) Substitute $s=j\omega$: $H(j\omega) = \frac{j\omega}{j\omega+1}$.
(b) Magnitude Response: $|H(j\omega)| = \left|\frac{j\omega}{1+j\omega}\right| = \frac{|\omega|}{\sqrt{1+\omega^2}}$.
Phase Response: $\angle H(j\omega) = \angle(j\omega) - \angle(1+j\omega) = \frac{\pi}{2} - \arctan(\omega)$.
Sketches:
*   Magnitude: At $\omega=0$, $|H(j\omega)|=0$. As $\omega \to \infty$, $|H(j\omega)| \to 1$. The magnitude increases from 0 to 1.
*   Phase: At $\omega=0$, $\angle H(j\omega) = \frac{\pi}{2}$. As $\omega \to \infty$, $\arctan(\omega) \to \frac{\pi}{2}$, so $\angle H(j\omega) \to 0$. The phase decreases from $\pi/2$ to 0.
(c) This is a high-pass filter because it passes high frequencies (magnitude approaches 1) and attenuates low frequencies (magnitude approaches 0).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References

*   **Haykin, S. S., & Van Veen, B. (2007). *Signals and Systems* (2nd ed.). Wiley.** (Chapters 4 & 5 are particularly relevant for Fourier Transform and LTI system analysis.)
*   **Nise, N. S. (2009). *Control Systems Engineering* (5th ed.). Wiley.** (Chapter 10 on Frequency Response Analysis is excellent for understanding the practical applications and graphical representations like Bode plots.)
*   **Oppenheim, A. V., Willsky, A. S., & Nawab, S. H. (2015). *Signals and Systems* (2nd ed.). Prentice Hall.** (Provides a rigorous treatment of Fourier analysis and LTI systems.)
*   **Proakis, J. G., & Manolakis, D. G. (2007). *Digital Signal Processing Principles* (4th ed.). Prentice Hall.** (While focused on digital systems, the foundational concepts of frequency response are often introduced in analogous ways for continuous-time systems.)

---