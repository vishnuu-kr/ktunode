---
title: "Magnitude response 
and phase response."
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Analysis of LTI systems using Transforms"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe533"
status: "completed"
scrapedAt: "2026-05-23T17:52:39.674Z"
---
# Signals and Systems: Module 4 - Analysis of LTI Systems using Transforms

## Topic: Magnitude Response and Phase Response

This module delves into the frequency-domain analysis of Linear Time-Invariant (LTI) systems, a powerful approach that complements time-domain analysis. We will focus on understanding how an LTI system affects the magnitude and phase of the sinusoidal components present in an input signal.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **LO1: Understand the concept of frequency response and its relationship to the impulse response of an LTI system.** (Relates to CO3, CO4)
*   **LO2: Define and interpret the magnitude response of an LTI system.** (Relates to CO3, CO4)
*   **LO3: Define and interpret the phase response of an LTI system.** (Relates to CO3, CO4)
*   **LO4: Analyze the behavior of LTI systems in the frequency domain using the magnitude and phase response.** (Relates to CO3, CO4)
*   **LO5: Relate the magnitude and phase response to the impulse response and system transfer function.** (Relates to CO3, CO4)
*   **LO6: Understand the impact of magnitude and phase response on signal characteristics.** (Relates to CO3)

---

### Key Concepts and Definitions

#### 1. Frequency Response (H(jω) or H(e<sup>jω</sup>))

The **frequency response** of an LTI system is a complex-valued function that describes how the system affects sinusoidal inputs of different frequencies. It is obtained by taking the Fourier Transform of the system's impulse response.

*   **For Continuous-Time LTI Systems:**
    *   Let $h(t)$ be the impulse response.
    *   The frequency response is given by the Fourier Transform of $h(t)$:
        $$H(j\omega) = \mathcal{F}\{h(t)\} = \int_{-\infty}^{\infty} h(t) e^{-j\omega t} dt$$
    *   $H(j\omega)$ is a complex function of the angular frequency $\omega$.

*   **For Discrete-Time LTI Systems:**
    *   Let $h[n]$ be the impulse response.
    *   The frequency response is given by the Discrete-Time Fourier Transform (DTFT) of $h[n]$:
        $$H(e^{j\omega}) = \mathcal{F}\{h[n]\} = \sum_{n=-\infty}^{\infty} h[n] e^{-j\omega n}$$
    *   $H(e^{j\omega})$ is a complex function of the normalized angular frequency $\omega$.

**Significance:** The frequency response $H(j\omega)$ (or $H(e^{j\omega})$) provides a complete characterization of how an LTI system modifies signals in the frequency domain.

**Textbook Reference:** Oppenheim & Willsky, Chapter 6 (Fourier Series and Fourier Transform) discusses the relationship between the impulse response and the frequency response. Haykin, Chapter 7 (Frequency Domain Analysis) also provides a comprehensive overview.

#### 2. Magnitude Response ($|H(j\omega)|$ or $|H(e^{j\omega})|$)

The **magnitude response** of an LTI system, denoted by $|H(j\omega)|$ (or $|H(e^{j\omega})|$), represents the **gain** or **attenuation** applied by the system to sinusoidal components at each frequency.

*   **Definition:** It is the magnitude of the complex frequency response $H(j\omega)$ (or $H(e^{j\omega})$).
    *   Continuous-Time: $|H(j\omega)| = |\mathcal{F}\{h(t)\}|$
    *   Discrete-Time: $|H(e^{j\omega})| = |\mathcal{F}\{h[n]\}|$

*   **Interpretation:**
    *   If $|H(j\omega_0)| > 1$, the system amplifies sinusoidal components at frequency $\omega_0$.
    *   If $|H(j\omega_0)| = 1$, the system passes sinusoidal components at frequency $\omega_0$ without changing their amplitude.
    *   If $|H(j\omega_0)| < 1$, the system attenuates sinusoidal components at frequency $\omega_0$.
    *   If $|H(j\omega_0)| = 0$, the system completely blocks sinusoidal components at frequency $\omega_0$.

**Impact on Input Signal:** If the input signal $x(t)$ can be represented as a sum of sinusoids, $x(t) = \sum_k A_k \cos(\omega_k t + \phi_k)$, then the output signal $y(t)$ will have its sinusoidal components modified in amplitude:
$$y(t) = \sum_k A_k |H(j\omega_k)| \cos(\omega_k t + \phi_k + \angle H(j\omega_k))$$
The magnitude response directly scales the amplitude of each frequency component.

**Textbook Reference:** Oppenheim & Willsky, Chapter 6. Lathi, Chapter 8 (Frequency Response and Fourier Transform) and Chapter 10 (Z-Transform and its Applications) for discrete-time.

#### 3. Phase Response ($\angle H(j\omega)$ or $\angle H(e^{j\omega})$)

The **phase response** of an LTI system, denoted by $\angle H(j\omega)$ (or $\angle H(e^{j\omega})$), represents the **phase shift** introduced by the system to sinusoidal components at each frequency.

*   **Definition:** It is the angle (argument) of the complex frequency response $H(j\omega)$ (or $H(e^{j\omega})$).
    *   Continuous-Time: $\angle H(j\omega) = \text{arg}(H(j\omega))$
    *   Discrete-Time: $\angle H(e^{j\omega}) = \text{arg}(H(e^{j\omega}))$

*   **Interpretation:**
    *   A positive phase shift $\angle H(j\omega_0) > 0$ means the output sinusoid at frequency $\omega_0$ leads the input sinusoid.
    *   A negative phase shift $\angle H(j\omega_0) < 0$ means the output sinusoid at frequency $\omega_0$ lags the input sinusoid.
    *   A phase shift of 0 means the output sinusoid is in phase with the input sinusoid.

**Impact on Input Signal:** The phase response directly affects the timing of each frequency component in the output signal. If multiple frequency components are present, significant phase distortion can occur, leading to changes in the shape of the output signal even if the magnitude response is flat.

**Textbook Reference:** Oppenheim & Willsky, Chapter 6. Haykin, Chapter 7.

#### 4. Frequency Response in Polar Form

The complex frequency response $H(j\omega)$ can be expressed in polar form:
$$H(j\omega) = |H(j\omega)| e^{j \angle H(j\omega)}$$
Similarly for discrete-time:
$$H(e^{j\omega}) = |H(e^{j\omega})| e^{j \angle H(e^{j\omega})}$$

This representation explicitly shows the magnitude gain and the phase shift associated with each frequency.

---

### Analysis of LTI Systems using Magnitude and Phase Response

The magnitude and phase responses provide a powerful way to understand how an LTI system processes signals in the frequency domain.

#### 1. Effect of System on Sinusoidal Input

If the input to an LTI system is a complex exponential $x(t) = e^{j\omega_0 t}$ (or $x[n] = e^{j\omega_0 n}$), the output is given by:
$$y(t) = H(j\omega_0) e^{j\omega_0 t} = |H(j\omega_0)| e^{j \angle H(j\omega_0)} e^{j\omega_0 t}$$
$$y[n] = H(e^{j\omega_0}) e^{j\omega_0 n} = |H(e^{j\omega_0})| e^{j \angle H(e^{j\omega_0})} e^{j\omega_0 n}$$

This shows that the output is the same frequency sinusoid, but its amplitude is scaled by $|H(j\omega_0)|$ and its phase is shifted by $\angle H(j\omega_0)$.

#### 2. System Behavior and Classification

The shape of the magnitude and phase response curves as a function of frequency reveals the system's behavior:

*   **Low-Pass Filter (LPF):** Passes low frequencies, attenuates high frequencies.
    *   Magnitude response: $|H(j\omega)|$ is significant for low $\omega$ and decreases as $\omega$ increases.
    *   Phase response: Often varies smoothly with frequency.

*   **High-Pass Filter (HPF):** Passes high frequencies, attenuates low frequencies.
    *   Magnitude response: $|H(j\omega)|$ is small for low $\omega$ and increases as $\omega$ increases.
    *   Phase response: Often varies smoothly with frequency.

*   **Band-Pass Filter (BPF):** Passes frequencies within a certain band, attenuates frequencies outside this band.
    *   Magnitude response: $|H(j\omega)|$ has a peak within a specific frequency range.
    *   Phase response: Often varies smoothly within the passband.

*   **Band-Stop Filter (BSF):** Attenuates frequencies within a certain band, passes frequencies outside this band.
    *   Magnitude response: $|H(j\omega)|$ has a dip within a specific frequency range.
    *   Phase response: Often varies smoothly outside the stopband.

*   **All-Pass Filter:** Passes all frequencies with unity gain ($|H(j\omega)| = 1$ for all $\omega$). The primary effect is a phase shift, which can be frequency-dependent.
    *   Magnitude response: $|H(j\omega)| = 1$ for all $\omega$.
    *   Phase response: $\angle H(j\omega)$ varies with frequency.

#### 3. Magnitude and Phase Response from Transfer Function

If the system is described by a rational transfer function (using Laplace Transform for continuous-time or Z-Transform for discrete-time):

*   **Continuous-Time (Laplace Transform):** $H(s)$. The frequency response is obtained by evaluating $H(s)$ on the jω-axis: $H(j\omega) = H(s)|_{s=j\omega}$.
    *   If $H(s) = \frac{N(s)}{D(s)}$, then $H(j\omega) = \frac{N(j\omega)}{D(j\omega)}$.
    *   $|H(j\omega)| = \frac{|N(j\omega)|}{|D(j\omega)|}$
    *   $\angle H(j\omega) = \angle N(j\omega) - \angle D(j\omega)$
    The magnitude and phase response can be found by evaluating the magnitude and phase of the numerator and denominator polynomials at $s=j\omega$.

*   **Discrete-Time (Z-Transform):** $H(z)$. The frequency response is obtained by evaluating $H(z)$ on the unit circle: $H(e^{j\omega}) = H(z)|_{z=e^{j\omega}}$.
    *   If $H(z) = \frac{N(z)}{D(z)}$, then $H(e^{j\omega}) = \frac{N(e^{j\omega})}{D(e^{j\omega})}$.
    *   $|H(e^{j\omega})| = \frac{|N(e^{j\omega})|}{|D(e^{j\omega})|}$
    *   $\angle H(e^{j\omega}) = \angle N(e^{j\omega}) - \angle D(e^{j\omega})$
    The magnitude and phase response can be found by evaluating the magnitude and phase of the numerator and denominator polynomials at $z=e^{j\omega}$.

**Textbook Reference:** Oppenheim & Willsky, Chapter 7 (Laplace Transform) and Chapter 9 (Discrete-Time Fourier Transform). Haykin, Chapter 9 (Laplace Transform) and Chapter 10 (Z-Transform). Lathi, Chapter 8 and 10.

#### 4. Magnitude and Phase Response from Pole-Zero Plots

The magnitude and phase response can be graphically determined from the pole-zero plot of the system's transfer function.

*   **Magnitude Response:**
    *   For a zero at $p_0$, the magnitude response at frequency $\omega$ is proportional to the distance from $j\omega$ to $p_0$. $|H(j\omega)| \propto \prod_{\text{zeros } z_k} |j\omega - z_k|$.
    *   For a pole at $p_0$, the magnitude response at frequency $\omega$ is inversely proportional to the distance from $j\omega$ to $p_0$. $|H(j\omega)| \propto \frac{1}{\prod_{\text{poles } p_k} |j\omega - p_k|}$.

*   **Phase Response:**
    *   For a zero at $p_0$, the phase contribution at frequency $\omega$ is the angle of the vector from $p_0$ to $j\omega$. $\angle H(j\omega) = \sum_{\text{zeros } z_k} \angle (j\omega - z_k) - \sum_{\text{poles } p_k} \angle (j\omega - p_k)$.
    *   For a pole at $p_0$, the phase contribution at frequency $\omega$ is the negative of the angle of the vector from $p_0$ to $j\omega$.

**Textbook Reference:** Lathi, Chapter 8 and 10. Ambardar, Chapter 7 and 9.

---

### Examples

#### Example 1: First-Order RC Low-Pass Filter (Continuous-Time)

Consider an RC low-pass filter with impulse response $h(t) = \frac{1}{\tau} e^{-t/\tau} u(t)$.

1.  **Find the transfer function H(s):**
    $$H(s) = \mathcal{L}\{h(t)\} = \frac{1}{s + 1/\tau}$$

2.  **Find the frequency response H(jω):**
    Replace $s$ with $j\omega$:
    $$H(j\omega) = \frac{1}{j\omega + 1/\tau}$$

3.  **Calculate the Magnitude Response |H(jω)|:**
    $$|H(j\omega)| = \left| \frac{1}{j\omega + 1/\tau} \right| = \frac{|1|}{|j\omega + 1/\tau|} = \frac{1}{\sqrt{(1/\tau)^2 + \omega^2}}$$
    $$|H(j\omega)| = \frac{\tau}{\sqrt{1 + (\omega\tau)^2}}$$
    The **cutoff frequency** $\omega_c$ is defined as the frequency where the magnitude drops to $1/\sqrt{2}$ of its maximum value. The maximum value is $\tau$ (at $\omega=0$).
    $$\frac{\tau}{\sqrt{1 + (\omega_c\tau)^2}} = \frac{\tau}{\sqrt{2}} \implies \sqrt{1 + (\omega_c\tau)^2} = \sqrt{2} \implies 1 + (\omega_c\tau)^2 = 2 \implies (\omega_c\tau)^2 = 1 \implies \omega_c = \frac{1}{\tau}$$
    So, $|H(j\omega)| = \frac{\tau}{\sqrt{1 + (\omega/\omega_c)^2}}$

4.  **Calculate the Phase Response ∠H(jω):**
    $$H(j\omega) = \frac{1}{1/\tau + j\omega} = \frac{1/\tau}{1 + j\omega\tau}$$
    $$|H(j\omega)| = \frac{1/\tau}{\sqrt{1 + (\omega\tau)^2}}$$
    $$\angle H(j\omega) = \angle \left( \frac{1/\tau}{1 + j\omega\tau} \right) = \angle(1/\tau) - \angle(1 + j\omega\tau)$$
    Since $1/\tau$ is real and positive, $\angle(1/\tau) = 0$.
    $$\angle H(j\omega) = 0 - \arctan\left(\frac{\omega\tau}{1}\right) = -\arctan(\omega\tau)$$
    So, $\angle H(j\omega) = -\arctan(\omega/\omega_c)$.

**Interpretation:**
*   **Magnitude Response:** At $\omega=0$, $|H(j0)| = \tau$ (maximum gain). As $\omega \to \infty$, $|H(j\omega)| \to 0$ (attenuation). It acts as a low-pass filter.
*   **Phase Response:** At $\omega=0$, $\angle H(j0) = 0^\circ$. As $\omega \to \infty$, $\angle H(j\omega) \to -90^\circ$. The phase lag increases with frequency.

#### Example 2: First-Order FIR Filter (Discrete-Time)

Consider an FIR system with impulse response $h[n] = a^n u[n]$ where $|a| < 1$. This is technically not FIR, but let's consider $h[n] = \delta[n] - a\delta[n-1]$ (an FIR system).

1.  **Find the transfer function H(z):**
    $$H(z) = \mathcal{Z}\{h[n]\} = \mathcal{Z}\{\delta[n] - a\delta[n-1]\} = 1 - az^{-1}$$

2.  **Find the frequency response H(e<sup>jω</sup>):**
    Replace $z$ with $e^{j\omega}$:
    $$H(e^{j\omega}) = 1 - ae^{-j\omega} = 1 - a(\cos(\omega) - j\sin(\omega))$$
    $$H(e^{j\omega}) = (1 - a\cos(\omega)) + j(a\sin(\omega))$$

3.  **Calculate the Magnitude Response |H(e<sup>jω</sup>)|:**
    $$|H(e^{j\omega})| = \sqrt{(1 - a\cos(\omega))^2 + (a\sin(\omega))^2}$$
    $$|H(e^{j\omega})|^2 = (1 - 2a\cos(\omega) + a^2\cos^2(\omega)) + a^2\sin^2(\omega)$$
    $$|H(e^{j\omega})|^2 = 1 - 2a\cos(\omega) + a^2(\cos^2(\omega) + \sin^2(\omega))$$
    $$|H(e^{j\omega})|^2 = 1 - 2a\cos(\omega) + a^2$$
    $$|H(e^{j\omega})| = \sqrt{1 + a^2 - 2a\cos(\omega)}$$

4.  **Calculate the Phase Response ∠H(e<sup>jω</sup>):**
    $$\angle H(e^{j\omega}) = \arctan\left(\frac{a\sin(\omega)}{1 - a\cos(\omega)}\right)$$

**Interpretation (for $h[n] = \delta[n] - a\delta[n-1]$ with $0 < a < 1$):**
*   **Magnitude Response:**
    *   At $\omega=0$: $|H(e^{j0})| = \sqrt{1+a^2-2a} = \sqrt{(1-a)^2} = |1-a| = 1-a$ (since $a<1$).
    *   At $\omega=\pi$: $|H(e^{j\pi})| = \sqrt{1+a^2-2a(-1)} = \sqrt{1+a^2+2a} = \sqrt{(1+a)^2} = |1+a| = 1+a$ (since $a>0$).
    This system amplifies higher frequencies more than lower frequencies, acting like a high-pass filter.

*   **Phase Response:** The phase shift depends on $\omega$ and the value of $a$.

---

### Practice Questions/Exercises

**Q1. Continuous-Time LTI System:**
An LTI system has a frequency response $H(j\omega) = \frac{1}{2+j\omega}$.
a) Find the impulse response $h(t)$.
b) Determine the magnitude response $|H(j\omega)|$.
c) Determine the phase response $\angle H(j\omega)$.
d) Sketch the magnitude and phase responses as a function of $\omega$.
e) What type of filter does this system represent?

**Q2. Discrete-Time LTI System:**
A discrete-time LTI system has a frequency response $H(e^{j\omega}) = 1 + e^{-j\omega}$.
a) Find the impulse response $h[n]$.
b) Determine the magnitude response $|H(e^{j\omega})|$.
c) Determine the phase response $\angle H(e^{j\omega})$.
d) Sketch the magnitude and phase responses as a function of $\omega$ for $\omega \in [-\pi, \pi]$.
e) What type of filter does this system represent?

**Q3. Magnitude and Phase from Transfer Function:**
For a continuous-time LTI system with transfer function $H(s) = \frac{s+1}{s+2}$.
a) Find the frequency response $H(j\omega)$.
b) Determine the magnitude response $|H(j\omega)|$.
c) Determine the phase response $\angle H(j\omega)$.
d) Evaluate the magnitude and phase at $\omega = 1$ rad/s.

**Q4. Magnitude and Phase from Pole-Zero Plot:**
Consider a discrete-time LTI system with the following pole-zero plot:
*   Zero at $z=1$.
*   Pole at $z=0.5$.
Assume the system is stable and causal. The transfer function is of the form $H(z) = K \frac{z-1}{z-0.5}$. The DC gain is $|H(e^{j0})| = 2$.
a) Determine the value of $K$.
b) Find the frequency response $H(e^{j\omega})$.
c) Determine the magnitude response $|H(e^{j\omega})|$.
d) Determine the phase response $\angle H(e^{j\omega})$.

---

### Answers to Practice Questions

**A1. Continuous-Time LTI System:**
$H(j\omega) = \frac{1}{2+j\omega}$
a) This is the Fourier Transform of $h(t) = e^{-2t}u(t)$.
b) $|H(j\omega)| = \left| \frac{1}{2+j\omega} \right| = \frac{1}{\sqrt{2^2 + \omega^2}} = \frac{1}{\sqrt{4 + \omega^2}}$.
c) $\angle H(j\omega) = \text{arg}\left(\frac{1}{2+j\omega}\right) = 0 - \arctan\left(\frac{\omega}{2}\right) = -\arctan\left(\frac{\omega}{2}\right)$.
d) **Magnitude Response Sketch:** Starts at $1/2$ at $\omega=0$ and decays towards 0 as $\omega \to \infty$. It's a decaying curve.
   **Phase Response Sketch:** Starts at $0^\circ$ at $\omega=0$ and decreases towards $-90^\circ$ as $\omega \to \infty$. It's a decreasing curve.
e) This system represents a **low-pass filter**.

**A2. Discrete-Time LTI System:**
$H(e^{j\omega}) = 1 + e^{-j\omega}$
a) $H(e^{j\omega}) = 1 + e^{-j\omega} = 1 + \cos(-\omega) + j\sin(-\omega) = 1 + \cos(\omega) - j\sin(\omega)$.
   Wait, this is incorrect. $H(e^{j\omega}) = 1 + (\cos(\omega) - j\sin(\omega)) = (1+\cos\omega) - j\sin\omega$.
   To find $h[n]$, let's rewrite $H(e^{j\omega}) = e^{-j\omega/2}(e^{j\omega/2} + e^{-j\omega/2}) = e^{-j\omega/2} (2\cos(\omega/2))$.
   This is a modified form. Let's use the direct form:
   $H(e^{j\omega}) = 1 \cdot e^{-j\omega \cdot 0} + 1 \cdot e^{-j\omega \cdot 1}$.
   This form corresponds to the impulse response $h[n] = \delta[n] + \delta[n-1]$.
b) $|H(e^{j\omega})| = |1 + e^{-j\omega}| = |1 + \cos\omega - j\sin\omega| = \sqrt{(1+\cos\omega)^2 + (-\sin\omega)^2}$
   $|H(e^{j\omega})|^2 = (1 + 2\cos\omega + \cos^2\omega) + \sin^2\omega = 1 + 2\cos\omega + 1 = 2 + 2\cos\omega = 2(1+\cos\omega) = 2(2\cos^2(\omega/2)) = 4\cos^2(\omega/2)$.
   $|H(e^{j\omega})| = \sqrt{4\cos^2(\omega/2)} = |2\cos(\omega/2)|$.
   For $\omega \in [-\pi, \pi]$, $\omega/2 \in [-\pi/2, \pi/2]$, so $\cos(\omega/2) \ge 0$. Thus, $|H(e^{j\omega})| = 2\cos(\omega/2)$.
c) $\angle H(e^{j\omega}) = \text{arg}(1 + e^{-j\omega}) = \text{arg}(e^{-j\omega/2}(e^{j\omega/2} + e^{-j\omega/2})) = \text{arg}(e^{-j\omega/2} 2\cos(\omega/2))$.
   Since $2\cos(\omega/2) \ge 0$ for $\omega \in [-\pi, \pi]$, the phase is $-\omega/2$.
   $\angle H(e^{j\omega}) = -\omega/2$.
d) **Magnitude Response Sketch:** Peaks at $2$ at $\omega=0$ (DC) and $\omega=\pm \pi$ (Nyquist), and is $0$ at $\omega=\pm \pi$. It's a cosine shape, symmetric around $\omega=0$.
   **Phase Response Sketch:** Linear decrease from $0$ at $\omega=0$ to $-\pi/2$ at $\omega=\pi$, and from $0$ to $\pi/2$ at $\omega=-\pi$.
e) This system acts like a **band-pass filter**, peaking at DC and Nyquist, and is zero in between. More accurately, it has peaks at both ends of the frequency spectrum.

**A3. Magnitude and Phase from Transfer Function:**
$H(s) = \frac{s+1}{s+2}$
a) $H(j\omega) = \frac{j\omega+1}{j\omega+2}$.
b) $|H(j\omega)| = \left|\frac{j\omega+1}{j\omega+2}\right| = \frac{|j\omega+1|}{|j\omega+2|} = \frac{\sqrt{1^2 + \omega^2}}{\sqrt{2^2 + \omega^2}} = \sqrt{\frac{1 + \omega^2}{4 + \omega^2}}$.
c) $\angle H(j\omega) = \text{arg}(j\omega+1) - \text{arg}(j\omega+2) = \arctan(\omega) - \arctan(\omega/2)$.
d) At $\omega = 1$:
   $|H(j1)| = \sqrt{\frac{1 + 1^2}{4 + 1^2}} = \sqrt{\frac{2}{5}} \approx 0.632$.
   $\angle H(j1) = \arctan(1) - \arctan(1/2) = 45^\circ - 26.57^\circ = 18.43^\circ$.

**A4. Magnitude and Phase from Pole-Zero Plot:**
$H(z) = K \frac{z-1}{z-0.5}$.
DC gain $|H(e^{j0})| = K \frac{|e^{j0}-1|}{|e^{j0}-0.5|} = K \frac{|1-1|}{|1-0.5|} = K \frac{0}{0.5} = 0$.
The problem statement might have intended to give a non-zero DC gain for a zero at $z=1$, which means it's a high-pass filter with zero at DC. Let's assume the system description implies the zero is at $z=-1$ for non-zero DC gain, or the question meant $|H(e^{j\pi})|=2$ for zero at $z=1$.
If we strictly follow the problem: zero at $z=1$, pole at $z=0.5$, and DC gain is 2. This is contradictory as a zero at $z=1$ implies zero gain at DC.

Let's re-interpret Q4 to have a non-zero DC gain. A common setup for a high-pass filter would have a zero at $z=-1$ and a pole close to $z=1$. Or, if a zero is at $z=1$, it is likely a high-pass filter where the DC component is blocked.

Let's assume there was a typo and the problem meant the **gain at Nyquist frequency** $|H(e^{j\pi})|$ is 2.
$H(e^{j\pi}) = K \frac{e^{j\pi}-1}{e^{j\pi}-0.5} = K \frac{-1-1}{-1-0.5} = K \frac{-2}{-1.5} = K \frac{4}{3}$.
If $|H(e^{j\pi})| = 2$, then $K \frac{4}{3} = 2 \implies K = \frac{6}{4} = \frac{3}{2}$.
So, $H(z) = \frac{3}{2} \frac{z-1}{z-0.5}$.

a) Assuming the corrected Nyquist gain: $K = 3/2$.
b) $H(e^{j\omega}) = \frac{3}{2} \frac{e^{j\omega}-1}{e^{j\omega}-0.5}$.
c) $|H(e^{j\omega})| = \frac{3}{2} \frac{|e^{j\omega}-1|}{|e^{j\omega}-0.5|} = \frac{3}{2} \frac{|\cos\omega+j\sin\omega-1|}{|\cos\omega+j\sin\omega-0.5|}$
   $|H(e^{j\omega})| = \frac{3}{2} \frac{\sqrt{(\cos\omega-1)^2+\sin^2\omega}}{\sqrt{(\cos\omega-0.5)^2+\sin^2\omega}}$
   $|H(e^{j\omega})| = \frac{3}{2} \frac{\sqrt{\cos^2\omega-2\cos\omega+1+\sin^2\omega}}{\sqrt{\cos^2\omega-\cos\omega+0.25+\sin^2\omega}}$
   $|H(e^{j\omega})| = \frac{3}{2} \frac{\sqrt{2-2\cos\omega}}{\sqrt{1.25-\cos\omega}} = \frac{3}{2} \frac{\sqrt{2(1-\cos\omega)}}{\sqrt{1.25-\cos\omega}} = \frac{3}{2} \frac{\sqrt{2(2\sin^2(\omega/2))}}{\sqrt{1.25-\cos\omega}}$
   $|H(e^{j\omega})| = \frac{3}{2} \frac{2|\sin(\omega/2)|}{\sqrt{1.25-\cos\omega}} = 3 \frac{|\sin(\omega/2)|}{\sqrt{1.25-\cos\omega}}$.
d) $\angle H(e^{j\omega}) = \text{arg}(e^{j\omega}-1) - \text{arg}(e^{j\omega}-0.5)$
   $\angle H(e^{j\omega}) = \arctan\left(\frac{\sin\omega}{\cos\omega-1}\right) - \arctan\left(\frac{\sin\omega}{\cos\omega-0.5}\right)$.
   Note: $\arctan\left(\frac{\sin\omega}{\cos\omega-1}\right) = \arctan\left(\frac{2\sin(\omega/2)\cos(\omega/2)}{-2\sin^2(\omega/2)}\right) = \arctan\left(-\cot(\omega/2)\right) = \arctan\left(\tan(\omega/2-\pi/2)\right) = \omega/2 - \pi/2$ (for $\omega \in (0, 2\pi)$).
   So, $\angle H(e^{j\omega}) = (\omega/2 - \pi/2) - \arctan\left(\frac{\sin\omega}{\cos\omega-0.5}\right)$.

---

### Important Points to Remember

*   **Frequency Response is Key:** $H(j\omega)$ (continuous-time) and $H(e^{j\omega})$ (discrete-time) fully characterize the behavior of an LTI system in the frequency domain.
*   **Magnitude Response:** Governs the **gain/attenuation** of each frequency component.
*   **Phase Response:** Governs the **phase shift** of each frequency component.
*   **Sinusoidal Input:** A sinusoidal input to an LTI system results in an output sinusoid of the same frequency, but with modified amplitude and phase.
*   **Filters:** The shape of the magnitude response defines the type of filter (LPF, HPF, BPF, BSF).
*   **Transfer Function:** For rational transfer functions, magnitude and phase can be derived by substituting $s=j\omega$ or $z=e^{j\omega}$ respectively.
*   **Pole-Zero Plots:** Provide a graphical method to visualize and analyze magnitude and phase responses. Zeros cause attenuation (in magnitude) and phase shifts; poles cause amplification (in magnitude) and phase shifts.
*   **Phase Distortion:** Non-linear phase response can distort the shape of signals, especially those composed of multiple frequency components. A **linear phase response** ($\angle H(j\omega) = k\omega$) is desirable for preserving signal shape, as it implies a constant time delay ($-\frac{d(\angle H(j\omega))}{d\omega} = -k$).

---

This concludes the study notes for Magnitude Response and Phase Response. Remember to consult the provided textbooks for further details and derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
