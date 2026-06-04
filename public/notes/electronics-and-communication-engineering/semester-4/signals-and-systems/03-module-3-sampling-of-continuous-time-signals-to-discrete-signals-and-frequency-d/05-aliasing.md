---
title: "Aliasing."
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampling of continuous time signals to discrete signals and 
frequency domain representation of discrete time signals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe526"
status: "completed"
scrapedAt: "2026-05-23T17:52:31.116Z"
---
## Signals and Systems: Module 3 - Sampling and Discrete-Time Frequency Representation

### Topic: Aliasing

**Learning Outcomes:**

*   Understand the phenomenon of aliasing during the sampling of continuous-time signals.
*   Identify the conditions under which aliasing occurs.
*   Explain the consequences of aliasing in the frequency domain.
*   Apply the Nyquist-Shannon sampling theorem to prevent aliasing.
*   Demonstrate how to reconstruct a continuous-time signal from its discrete-time samples correctly.

**Course Outcomes Alignment:**

*   **CO1 (K2):** Understanding the fundamental process of converting continuous to discrete signals, including potential pitfalls like aliasing.
*   **CO3 (K3):** Analyzing signals in the frequency domain to identify and mitigate aliasing.
*   **CO4 (K3):** Interpreting the implications of aliasing when analyzing discrete-time signals and systems.

---

### 1. Introduction to Sampling

Sampling is the process of converting a continuous-time signal $x(t)$ into a discrete-time signal $x[n]$ by taking values of $x(t)$ at regular intervals. The interval between samples is called the sampling period, $T_s$. The sampling frequency, $f_s$, is the reciprocal of the sampling period: $f_s = \frac{1}{T_s}$.

The discrete-time signal $x[n]$ is related to the continuous-time signal $x(t)$ by:

$x[n] = x(nT_s)$

**Key Concept:** The goal of sampling is to capture enough information about the continuous-time signal so that it can be perfectly reconstructed from its discrete samples.

---

### 2. Frequency Domain Representation of Sampling

When we sample a continuous-time signal $x(t)$, its frequency spectrum $X(f)$ is replicated at integer multiples of the sampling frequency $f_s$.

Let $X(f)$ be the Fourier Transform of $x(t)$. The Fourier Transform of the sampled signal $x_s(t) = x(t) \sum_{n=-\infty}^{\infty} \delta(t - nT_s)$ is given by:

$X_s(f) = f_s \sum_{k=-\infty}^{\infty} X(f - kf_s)$

This equation shows that the spectrum of the sampled signal is an infinite summation of shifted replicas of the original signal's spectrum, each scaled by $f_s$.

**Visual Representation (Conceptual):**

Imagine the spectrum of $x(t)$ as a single "hump" centered at 0 Hz. When sampling, this hump is copied and shifted to $f_s$, $-f_s$, $2f_s$, $-2f_s$, and so on.

---

### 3. Aliasing: The Problem of Overlapping Spectra

**Definition:** Aliasing is a phenomenon that occurs when the sampling frequency $f_s$ is too low relative to the highest frequency component present in the continuous-time signal $x(t)$. When this happens, the replicas of the original signal's spectrum in the sampled signal's spectrum overlap.

**How it Happens:**

If the highest frequency component in $x(t)$, denoted as $f_{max}$, is greater than or equal to half the sampling frequency ($f_{max} \ge f_s/2$), then the replica of the spectrum centered at $f_s$ will overlap with the original spectrum centered at 0 Hz. Similarly, replicas centered at $\pm kf_s$ can also overlap with adjacent replicas.

**Consequences of Aliasing:**

*   **Distortion:** The overlapping spectra merge, making it impossible to distinguish between a frequency component originally at $f$ and a component originally at $|f - kf_s|$ for some integer $k$.
*   **Irreversible Loss of Information:** Once aliasing occurs, the original information about the high-frequency components is lost and cannot be recovered. The sampled signal will appear to have lower frequencies that were not present in the original signal.
*   **Incorrect Reconstruction:** When attempting to reconstruct the continuous-time signal from the aliased samples using a low-pass filter, the filter will pass the distorted spectral content, leading to a reconstructed signal that is not the original $x(t)$.

**Example:**

Consider a continuous-time signal with two frequency components: $f_1 = 100$ Hz and $f_2 = 200$ Hz.
If we sample this signal at $f_s = 150$ Hz:

*   The original spectrum has components at 100 Hz and 200 Hz.
*   The replica of the spectrum centered at $f_s = 150$ Hz will have components at $150 - 100 = 50$ Hz and $150 - 200 = -50$ Hz (or 50 Hz).
*   The replica centered at $-f_s = -150$ Hz will have components at $-150 - 100 = -250$ Hz and $-150 - 200 = -350$ Hz.

Notice that the original 200 Hz component, when sampled at 150 Hz, appears as a 50 Hz component in the sampled signal. This is because $200 - 150 = 50$. This 50 Hz component is indistinguishable from a genuine 50 Hz component that might have been present in the original signal.

**Important Point:** Aliasing is a frequency domain phenomenon where high frequencies "masquerade" as low frequencies due to undersampling.

---

### 4. The Nyquist-Shannon Sampling Theorem

The Nyquist-Shannon Sampling Theorem provides the fundamental condition to avoid aliasing and enable perfect reconstruction of a band-limited continuous-time signal from its samples.

**Theorem Statement:**

A continuous-time signal $x(t)$ with a maximum frequency component $f_{max}$ can be uniquely and perfectly reconstructed from its discrete-time samples $x[n] = x(nT_s)$ if and only if the sampling frequency $f_s$ is strictly greater than twice the maximum frequency component:

$f_s > 2f_{max}$

The value $2f_{max}$ is known as the **Nyquist Rate**.

**Implications:**

*   If $f_s > 2f_{max}$, the replicas of the spectrum of $x(t)$ are separated, and there is no overlap.
*   If $f_s = 2f_{max}$, the replicas just touch at the points $\pm f_{max}, \pm (f_s - f_{max}), \dots$, which is the boundary case.
*   If $f_s < 2f_{max}$, aliasing occurs.

**Reconstruction:**

If the sampling theorem is satisfied ($f_s > 2f_{max}$), the original continuous-time signal $x(t)$ can be perfectly reconstructed from its samples $x[n]$ by passing the sampled signal $x_s(t)$ through an ideal **low-pass filter** with a cutoff frequency $f_{cutoff}$ such that:

$f_{max} < f_{cutoff} < f_s - f_{max}$

Typically, the cutoff frequency is chosen as $f_{cutoff} = f_s/2$. This is because the spectrum of the sampled signal $X_s(f)$ consists of replicas centered at $kf_s$. The low-pass filter with cutoff $f_s/2$ will pass the original spectrum centered at 0 Hz and reject all other replicas.

**In terms of angular frequencies:**

$\omega_s > 2\omega_{max}$

where $\omega = 2\pi f$.

**Key Takeaway from Oppenheim & Willsky (2/e):** The sampling theorem establishes a direct link between the time domain (sampling) and the frequency domain (reconstruction). The key is to avoid spectral overlap.

**Key Takeaway from Haykin (2/e):** The theorem is crucial for digital signal processing, as it defines the fundamental limit on how densely we need to sample a continuous signal to capture all its essential information.

---

### 5. Preventing Aliasing: Pre-sampling Filtering

To ensure that the sampling theorem is met, especially when the original continuous-time signal might contain frequencies higher than half the desired sampling frequency, a **low-pass filter (anti-aliasing filter)** is applied to the signal *before* sampling.

**Process:**

1.  **Input Signal:** Continuous-time signal $x(t)$ which may contain frequencies up to $f_{high}$.
2.  **Anti-Aliasing Filter:** A low-pass filter with a cutoff frequency $f_c$ is applied. This filter attenuates or removes frequencies above $f_c$. The cutoff frequency $f_c$ is chosen such that $f_c \le f_s/2$.
3.  **Sampled Signal:** The filtered signal, say $y(t)$, now has a maximum frequency component $f_{max} \le f_c$.
4.  **Sampling:** $y(t)$ is sampled at $f_s$. If $f_c \le f_s/2$, then $f_{max} \le f_s/2$, satisfying the Nyquist criterion, and no aliasing occurs.

**Example:**

Suppose you want to sample an audio signal with a sampling frequency of $f_s = 8$ kHz. The human hearing range is up to approximately 20 kHz. Without pre-sampling filtering, any frequencies above $f_s/2 = 4$ kHz in the original audio would cause aliasing.

To prevent this, you would use a low-pass filter with a cutoff frequency slightly below 4 kHz (e.g., 3.8 kHz) before sampling. This filter removes or significantly reduces frequencies above 3.8 kHz. The resulting signal is then sampled at 8 kHz. The highest frequency in the filtered signal is now less than 4 kHz, so no aliasing occurs.

**Important Point:** Pre-sampling filtering is essential for practical digital signal processing systems to guarantee the conditions of the sampling theorem.

---

### 6. Aliasing in the Discrete-Time Frequency Domain

The frequency domain representation of a discrete-time signal $x[n]$ is periodic with period $2\pi$ in terms of angular frequency $\omega$ (or period 1 in terms of normalized frequency $\Omega = \omega/(2\pi)$). This is expressed using the Discrete-Time Fourier Transform (DTFT):

$X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}$

The DTFT $X(e^{j\omega})$ is periodic with period $2\pi$. This means that the frequency content repeats every $2\pi$ radians per sample.

**How Aliasing Manifests in the Discrete-Time Frequency Domain:**

When a continuous-time signal $x(t)$ is sampled at a rate $f_s$, the frequency component $f$ in the original signal appears at discrete frequencies:

$f_{discrete} = f \pm k f_s$, for integer $k$.

In terms of angular frequencies, $\omega_{discrete} = \omega \pm k \omega_s$.

Due to the periodicity of the DTFT, all these discrete frequencies are mapped into the interval $[0, 2\pi)$ or $[-\pi, \pi)$ (corresponding to $0$ to $f_s/2$ in Hertz).

*   A frequency $f$ in the continuous-time signal ($0 \le f \le f_s/2$) maps to a frequency $\omega = 2\pi f/f_s$ in the discrete-time domain.
*   A frequency $f'$ above $f_s/2$ (e.g., $f_s/2 < f' < f_s$) will map to a frequency within $[0, \pi)$ when folded back. Specifically, a frequency $f'$ will appear as $f_s - f'$. This is because $f' = f_s - (f_s - f')$, and $f_s - f'$ is now less than $f_s/2$.

**Example of Aliasing in DTFT:**

Consider a continuous-time signal with a frequency component at $f = 7$ kHz, sampled at $f_s = 10$ kHz.
The Nyquist frequency is $f_s/2 = 5$ kHz. Since $7$ kHz $> 5$ kHz, aliasing will occur.

The continuous-time frequency $f = 7$ kHz maps to:
$f \pmod{f_s} = 7 \pmod{10} = 7$ kHz. This is not within the desired range $[0, 5]$ kHz.

However, due to the folding effect, $7$ kHz is equivalent to $f_s - 7$ kHz = $10$ kHz - $7$ kHz = $3$ kHz.
So, the original 7 kHz component will appear as a 3 kHz component in the sampled signal's spectrum.

In the discrete-time frequency domain (normalized frequency $\Omega = f/f_s$, where $\Omega$ ranges from 0 to 1, or angular frequency $\omega = 2\pi \Omega$, where $\omega$ ranges from 0 to $2\pi$):

*   $f = 7$ kHz corresponds to $\Omega = 7/10 = 0.7$.
*   The aliased frequency $\Omega_{aliased} = 1 - \Omega = 1 - 0.7 = 0.3$.
*   This $\Omega_{aliased} = 0.3$ corresponds to $f_{aliased} = 0.3 \times f_s = 0.3 \times 10$ kHz $= 3$ kHz.

This means that a 7 kHz sinusoidal component in the continuous-time signal will be indistinguishable from a 3 kHz sinusoidal component after sampling at 10 kHz.

**From Anand Kumar (3/e):** The periodic nature of the discrete-time spectrum implies that the sampling process effectively "folds" the continuous-time spectrum into segments of width $f_s$. If these segments overlap, aliasing occurs.

---

### 7. Practice Questions and Exercises

**Question 1:**
A continuous-time signal $x(t)$ has a maximum frequency of 5 kHz.
a) What is the minimum sampling frequency required to avoid aliasing?
b) If the signal is sampled at $f_s = 12$ kHz, what is the frequency that a 9 kHz component of $x(t)$ will appear as in the discrete-time signal?

**Question 2:**
Explain the concept of aliasing using a simple sinusoidal signal example. What happens to the spectrum of the signal when aliasing occurs?

**Question 3:**
A signal $x(t)$ contains frequency components up to 8 kHz. You are to sample this signal at $f_s = 15$ kHz.
a) Would aliasing occur if you directly sampled $x(t)$? Justify your answer.
b) What modification would you make to the system to prevent aliasing? Describe the role of this modification.

**Question 4 (Conceptual):**
Why is it important to use a low-pass filter *before* sampling (pre-sampling filter)? What would be the consequence of using a low-pass filter *after* sampling if aliasing has already occurred?

---

### 8. Answers to Practice Questions

**Answer 1:**
a) The minimum sampling frequency required to avoid aliasing is the Nyquist Rate, which is twice the maximum frequency.
Nyquist Rate = $2 \times f_{max} = 2 \times 5$ kHz = 10 kHz.
So, the minimum sampling frequency $f_s > 10$ kHz.

b) The sampling frequency is $f_s = 12$ kHz. The Nyquist frequency is $f_s/2 = 6$ kHz.
The original frequency is $f = 9$ kHz. Since $f > f_s/2$, aliasing will occur.
The aliased frequency can be found by $f_{aliased} = |f \pmod{f_s}|$. If this is greater than $f_s/2$, then $f_{aliased} = f_s - (f \pmod{f_s})$.
$f \pmod{f_s} = 9 \pmod{12} = 9$ kHz.
Since 9 kHz $> 6$ kHz, we calculate the folded frequency:
$f_{aliased} = f_s - 9$ kHz $= 12$ kHz $- 9$ kHz $= 3$ kHz.
A 9 kHz component will appear as a 3 kHz component.

**Answer 2:**
Aliasing occurs when a continuous-time signal is sampled at a rate lower than twice its highest frequency component. Imagine a sinusoid of frequency $f_1$. If you sample it at a rate $f_s$ such that $f_1 > f_s/2$, the spectral replica of the sinusoid centered at $f_s$ will overlap with the original spectrum centered at 0 Hz. This overlap means the higher frequency $f_1$ is indistinguishable from a lower frequency component $f_2 = |f_1 - f_s|$ (or $f_2 = f_s - f_1$ if $f_1$ is above $f_s/2$).
For example, a signal $x(t) = \cos(2\pi \cdot 150t)$ sampled at $f_s = 200$ Hz. The original frequency is 150 Hz. The Nyquist frequency is $200/2 = 100$ Hz. Since $150$ Hz $> 100$ Hz, aliasing occurs. The 150 Hz component will appear as $f_s - 150$ Hz $= 200 - 150 = 50$ Hz. The spectrum of the sampled signal will incorrectly show a component at 50 Hz.

**Answer 3:**
a) The maximum frequency in $x(t)$ is 8 kHz. The sampling frequency is $f_s = 15$ kHz. The Nyquist frequency is $f_s/2 = 15/2 = 7.5$ kHz.
Since $f_{max} = 8$ kHz $> 7.5$ kHz, aliasing will occur if $x(t)$ is directly sampled at 15 kHz.

b) To prevent aliasing, a **low-pass filter (anti-aliasing filter)** must be applied to $x(t)$ *before* sampling. This filter should have a cutoff frequency $f_c$ such that $f_c \le f_s/2 = 7.5$ kHz. For example, a low-pass filter with a cutoff frequency of 7 kHz would attenuate frequencies above 7 kHz, ensuring that the filtered signal has a maximum frequency component of 7 kHz. This filtered signal can then be sampled at 15 kHz without aliasing, as $7$ kHz $\le 7.5$ kHz.

**Answer 4:**
It is important to use a low-pass filter *before* sampling (pre-sampling filter) to ensure that the condition of the Nyquist-Shannon sampling theorem ($f_s > 2f_{max}$) is met. The pre-sampling filter removes or significantly attenuates frequencies in the continuous-time signal that are higher than half the sampling frequency, thus preventing these high frequencies from "folding" back into the lower frequency band during sampling and causing aliasing.

If aliasing has already occurred, the spectral replicas have overlapped. Applying a low-pass filter *after* sampling (often called a reconstruction filter) can remove the unwanted spectral replicas centered at $\pm f_s, \pm 2f_s, \dots$. However, it cannot undo the distortion caused by the overlap itself. The overlapping components are now indistinguishable and will be passed by the reconstruction filter as if they were originally present at those lower frequencies. Thus, the reconstructed signal will be distorted and will not be the original signal.

---

### 9. Important Points to Remember

*   **Sampling Theorem is Crucial:** $f_s > 2f_{max}$ is the fundamental condition to avoid aliasing.
*   **Nyquist Rate:** The minimum sampling frequency required is $2f_{max}$.
*   **Aliasing = Spectral Overlap:** Occurs when replicas of the signal's spectrum overlap in the frequency domain.
*   **Consequences of Aliasing:** Distortion and irreversible loss of information; high frequencies masquerade as low frequencies.
*   **Pre-sampling Filter:** Essential for practical systems to limit the bandwidth of the signal before sampling.
*   **Discrete-Time Spectrum is Periodic:** The frequency content of a discrete-time signal repeats with a period of $2\pi$ (angular) or 1 (normalized). This periodicity is what causes frequencies above $f_s/2$ to fold back.
*   **Reconstruction:** Possible only if the sampling theorem is satisfied, using a low-pass filter with a cutoff between $f_{max}$ and $f_s - f_{max}$.

---

This concludes the study notes on Aliasing in Module 3. Understanding aliasing and the Nyquist-Shannon Sampling Theorem is fundamental to digital signal processing.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
