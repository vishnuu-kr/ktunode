---
title: "Nyquist Sampling Theorem"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 3: Digital baseband communication:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bfc"
status: "completed"
scrapedAt: "2026-05-23T16:40:25.365Z"
---
# Electronic Communication: Module 3 - Digital Baseband Communication

## Topic: Nyquist Sampling Theorem

---

### 1. Introduction to Sampling

Sampling is a fundamental process in digital communication where a continuous-time analog signal is converted into a discrete-time sequence of samples. This conversion is crucial for processing and transmitting signals digitally. The Nyquist Sampling Theorem provides the theoretical foundation for how to sample a signal without losing information.

**Key Concepts:**

*   **Analog Signal:** A signal whose amplitude varies continuously with time.
*   **Digital Signal:** A signal whose amplitude is quantized and sampled at discrete time intervals.
*   **Sampling:** The process of taking discrete measurements (samples) of an analog signal at regular intervals of time.
*   **Sampling Interval (T<sub>s</sub>):** The time duration between consecutive samples.
*   **Sampling Frequency (f<sub>s</sub>):** The number of samples taken per second, where $f_s = 1/T_s$.

---

### 2. The Nyquist Sampling Theorem (Ideal Sampling)

The Nyquist Sampling Theorem states that a band-limited analog signal can be perfectly reconstructed from its samples if the sampling frequency ($f_s$) is greater than twice the highest frequency component ($f_m$) present in the signal. This critical sampling frequency is known as the **Nyquist Rate**.

**Theorem Statement:**

If an analog signal $x(t)$ has a spectrum that is zero for $|f| > f_m$ (i.e., it is band-limited to $f_m$), then $x(t)$ can be uniquely determined from its samples $x(nT_s)$, provided that the sampling frequency $f_s = 1/T_s$ satisfies:

$f_s > 2f_m$

**Nyquist Rate:** The minimum sampling rate required to perfectly reconstruct a band-limited signal is $2f_m$. This is also called the **Nyquist frequency** or **Nyquist limit**.

**Nyquist Interval:** The maximum sampling interval $T_s$ that allows perfect reconstruction is $T_s < 1/(2f_m)$. This is also called the **Nyquist time**.

---

### 3. Mathematical Basis and Proof (Conceptual)

**Signal in the Time Domain:**
Let $x(t)$ be the analog signal.

**Ideal Sampling:**
Ideal sampling can be represented by multiplying the analog signal with an impulse train:
$x_s(t) = x(t) \cdot p(t)$
where $p(t) = \sum_{n=-\infty}^{\infty} \delta(t - nT_s)$ is an impulse train with sampling interval $T_s$.

$x_s(t) = x(t) \sum_{n=-\infty}^{\infty} \delta(t - nT_s) = \sum_{n=-\infty}^{\infty} x(nT_s) \delta(t - nT_s)$

**Signal in the Frequency Domain:**
The Fourier Transform of $x(t)$ is $X(f)$. The Fourier Transform of the impulse train $p(t)$ is a train of impulses in the frequency domain:
$P(f) = f_s \sum_{k=-\infty}^{\infty} \delta(f - kf_s)$

The Fourier Transform of the sampled signal $x_s(t)$ is the convolution of $X(f)$ and $P(f)$:
$X_s(f) = X(f) * P(f)$
$X_s(f) = X(f) * \left(f_s \sum_{k=-\infty}^{\infty} \delta(f - kf_s)\right)$
$X_s(f) = f_s \sum_{k=-\infty}^{\infty} X(f - kf_s)$

This equation shows that the spectrum of the sampled signal $X_s(f)$ is a series of replicas of the original signal's spectrum $X(f)$, shifted by integer multiples of the sampling frequency $f_s$.

**Reconstruction:**
To perfectly reconstruct the original signal $x(t)$ from $x_s(t)$, we need to isolate one of the spectral replicas (usually the one centered at $f=0$) and remove the others. This is achieved using an **ideal low-pass filter (LPF)** with a cutoff frequency between $f_m$ and $f_s - f_m$.

**Condition for No Overlap (Aliasing):**
For the spectral replicas to not overlap, the shifted spectra must be distinct. The first replica on the positive frequency axis is $X(f - f_s)$. The original spectrum $X(f)$ extends from $-f_m$ to $f_m$. The replica $X(f - f_s)$ extends from $f_s - f_m$ to $f_s + f_m$.

For no overlap, the lower edge of the shifted spectrum must be greater than or equal to the upper edge of the original spectrum:
$f_s - f_m \ge f_m$
$f_s \ge 2f_m$

If $f_s > 2f_m$, there is a gap between the replicas, allowing for perfect reconstruction by an ideal LPF with a cutoff frequency $f_c$ such that $f_m < f_c < f_s - f_m$.

---

### 4. Aliasing

**Definition:**
Aliasing occurs when the sampling frequency $f_s$ is less than the Nyquist rate ($f_s < 2f_m$). In this case, the spectral replicas in $X_s(f)$ overlap. When these overlapping spectra are passed through a low-pass filter for reconstruction, the higher frequency components from one replica fold back into the lower frequency range of another, distorting the original signal. The higher frequencies masquerade as lower frequencies.

**Effect of Aliasing:**
Aliasing causes irreversible distortion. The reconstructed signal will not be the original signal, as information from higher frequencies has been corrupted by interference from lower frequencies.

**Example:**
Consider a signal with frequencies $f_1$ and $f_2$, where $f_2 > f_1$. If we sample at a rate $f_s < 2f_2$, the spectral replica of $f_2$ will overlap with the original spectrum of $f_1$. During reconstruction, the filtered signal will contain a component that appears to be at $f_1$, but it is actually a distorted version of $f_2$.

**Preventing Aliasing:**
*   **Increase the sampling frequency:** Ensure $f_s > 2f_m$.
*   **Low-pass filtering before sampling (Anti-aliasing Filter):** Use an analog low-pass filter to remove or significantly attenuate frequencies above $f_m$ before the sampling process. This ensures that the signal is indeed band-limited to a frequency $f_m$ that is less than $f_s/2$.

---

### 5. Practical Considerations and Reconstruction

**Ideal Reconstruction Filter:**
An ideal reconstruction filter is a perfect low-pass filter with a gain of $T_s$ for frequencies up to $f_m$ and zero gain for frequencies above $f_m$. This filter effectively recovers the original signal $x(t)$ from the sampled version.

The reconstructed signal $y(t)$ is given by:
$y(t) = T_s \cdot x(t)$ if the reconstruction filter has a gain of $T_s$ up to $f_m$.

**Practical Reconstruction Filters:**
In practice, ideal filters are not realizable. Practical reconstruction filters are **analog low-pass filters** that approximate the ideal response. They have:
*   A gradual transition band between the passband and stopband.
*   Amplitude and phase distortions within the passband.

The quality of the reconstructed signal depends on how closely the practical filter approximates the ideal low-pass filter and how well aliasing was prevented before sampling.

**Reconstruction Process:**
The sampled sequence $x(nT_s)$ is typically applied to a **Zero-Order Hold (ZOH)** circuit, which generates a staircase approximation of the original signal. This staircase signal is then passed through a practical reconstruction (interpolation) filter to smooth out the steps and recover a signal closer to the original analog signal.

---

### 6. Bandpass Sampling Theorem

While the Nyquist theorem applies to baseband signals, a modified version exists for bandpass signals. A bandpass signal is one that occupies a limited range of frequencies, not necessarily centered at zero.

**Bandpass Signal:** A signal $x(t)$ is bandpass if its spectrum $X(f)$ is non-zero only in frequency ranges:
$f_1 \le |f| \le f_2$, where $f_1 > 0$.
The bandwidth of such a signal is $B = f_2 - f_1$.

**Bandpass Sampling Theorem Statement:**
A bandpass signal with bandwidth $B$ can be uniquely determined from its samples if the sampling frequency $f_s$ satisfies:
$f_s \ge 2B$

Furthermore, for bandpass signals that are confined to a narrow band (i.e., $f_1 \gg B$), there exist sampling frequencies $f_s$ such that:
$f_s > B$
which are sufficient for perfect reconstruction. These sampling frequencies are typically of the form $f_s = \frac{k B}{M}$ for some integers $k$ and $M$, where $k$ is chosen to satisfy the bandpass sampling condition.

**Significance:**
Bandpass sampling allows for a lower sampling rate compared to baseband sampling if the signal's bandwidth is much smaller than its center frequency. This is particularly useful in radio communication systems.

---

### 7. Summary of Key Points

*   **Nyquist Sampling Theorem:** A band-limited signal with maximum frequency $f_m$ must be sampled at a rate $f_s > 2f_m$ for perfect reconstruction.
*   **Nyquist Rate:** $2f_m$.
*   **Nyquist Interval:** $1/(2f_m)$.
*   **Aliasing:** Distortion caused by sampling below the Nyquist rate, leading to spectral overlap.
*   **Preventing Aliasing:**
    *   Sample above the Nyquist rate.
    *   Use an anti-aliasing filter before sampling.
*   **Reconstruction:** Achieved using a low-pass filter to select the desired spectral replica.
*   **Bandpass Sampling Theorem:** For bandpass signals with bandwidth $B$, sampling at $f_s \ge 2B$ is sufficient.

---

### 8. Connection to Course Outcomes

*   **CO1: Explain the working of Amplitude modulator and demodulator circuits using mathematical relations.**
    While not directly about AM, the sampling theorem is a prerequisite for understanding how analog signals are digitized, which is a precursor to many digital modulation schemes that might follow. Understanding spectral analysis is common to both.
*   **CO2: Explain the characteristics of various analog modulation schemes in terms of spectra, power and efficiency.**
    Understanding the spectrum of a signal ($f_m$) is directly related to determining the required sampling rate for digital representation, which is a step towards digital modulation.
*   **CO3: Understand the various processing blocks of a digital communication system. (Knowledge Level: K2)**
    The sampling process, as dictated by the Nyquist theorem, is one of the most critical initial blocks in any digital communication system's transmitter chain (analog-to-digital conversion). This theorem defines the fundamental parameters for this block.
*   **CO4: Apply the knowledge of digital modulation in digital transmission. (Knowledge Level: K3)**
    Before digital modulation can be applied, the analog signal must be converted to a digital format. The Nyquist theorem dictates the minimum sampling rate, which influences the bit rate and the subsequent digital modulation scheme's requirements.

---

### 9. Examples and Illustrations

**Example 1: Sampling a Sine Wave**

Let $x(t) = \sin(2\pi \cdot 1000t)$.
The highest frequency component is $f_m = 1000$ Hz.
According to the Nyquist Sampling Theorem, the minimum sampling frequency required for perfect reconstruction is $f_s = 2f_m = 2 \times 1000 = 2000$ Hz.
So, we must sample at a rate greater than 2000 samples/second.

*   If we sample at $f_s = 2500$ Hz, perfect reconstruction is possible.
*   If we sample at $f_s = 1500$ Hz ($f_s < 2f_m$), aliasing will occur. The sampled frequency will appear as $1500 - 1000 = 500$ Hz (using the fold-back property of aliasing for a single sine wave).

**Example 2: Sampling Speech Signal**

A typical voice signal (speech) has a bandwidth of approximately 300 Hz to 3400 Hz.
The highest frequency component is $f_m = 3400$ Hz.
The Nyquist rate for speech is $2f_m = 2 \times 3400 = 6800$ Hz.
Therefore, to digitize a speech signal for perfect reconstruction, we must sample it at a rate greater than 6800 samples per second. Standard telephone systems often use a sampling rate of 8000 Hz, which is above the Nyquist rate and also allows for some margin and easier filter design.

**Example 3: Bandpass Sampling**

Consider a radio signal centered at 100 MHz with a bandwidth of 10 kHz.
Here, $f_1 = 100$ MHz $- 5$ kHz $= 99.995$ MHz, and $f_2 = 100$ MHz $+ 5$ kHz $= 100.005$ MHz.
The bandwidth $B = f_2 - f_1 = 10$ kHz.
According to the bandpass sampling theorem, we need $f_s \ge 2B = 2 \times 10$ kHz $= 20$ kHz.
This is significantly lower than the baseband sampling rate needed if we were to shift this signal down to baseband (which would require sampling above $2 \times 100.005$ MHz).

---

### 10. Practice Questions and Exercises

**Question 1:**
A signal $x(t)$ is band-limited to $5$ kHz. What is the minimum sampling frequency required to avoid aliasing?
*(Knowledge Level: K2)*

**Answer 1:**
The maximum frequency component is $f_m = 5$ kHz.
According to the Nyquist Sampling Theorem, the minimum sampling frequency $f_s$ must be greater than $2f_m$.
$f_s > 2 \times 5 \text{ kHz}$
$f_s > 10 \text{ kHz}$
The minimum sampling frequency is just above 10 kHz.

---

**Question 2:**
If a signal with a maximum frequency of 8 kHz is sampled at a rate of 12 kHz, will aliasing occur? If so, what will be the apparent frequency of a 9 kHz component in the sampled signal?
*(Knowledge Level: K3)*

**Answer 2:**
The maximum frequency component is $f_m = 8$ kHz.
The Nyquist rate is $2f_m = 2 \times 8 \text{ kHz} = 16$ kHz.
The sampling frequency is $f_s = 12$ kHz.
Since $f_s (12 \text{ kHz}) < 2f_m (16 \text{ kHz})$, aliasing **will occur**.

To find the apparent frequency of a 9 kHz component, we use the property that frequencies fold around $f_s/2$.
$f_s/2 = 12 \text{ kHz} / 2 = 6$ kHz.
The 9 kHz component is $9 \text{ kHz} - 6 \text{ kHz} = 3$ kHz above $f_s/2$.
Therefore, it will appear as $6 \text{ kHz} - 3 \text{ kHz} = 3$ kHz.
Alternatively, for $f > f_s/2$, the aliased frequency $f'$ is given by $|f - kf_s|$ for some integer $k$ such that $0 \le f' \le f_s/2$.
$|9 \text{ kHz} - 1 \times 12 \text{ kHz}| = |-3 \text{ kHz}| = 3 \text{ kHz}$.
The apparent frequency is 3 kHz.

---

**Question 3:**
What is the purpose of an anti-aliasing filter in the sampling process?
*(Knowledge Level: K2)*

**Answer 3:**
An anti-aliasing filter is an analog low-pass filter placed **before** the sampler. Its purpose is to remove or significantly attenuate any frequency components in the analog signal that are above half the sampling frequency ($f_s/2$). This ensures that the signal presented to the sampler is effectively band-limited to a frequency less than $f_s/2$, thereby preventing aliasing distortion during the sampling process.

---

**Question 4:**
A bandpass signal has a center frequency of 150 MHz and a bandwidth of 200 kHz. What is the minimum sampling rate required for its perfect reconstruction according to the bandpass sampling theorem?
*(Knowledge Level: K2)*

**Answer 4:**
For a bandpass signal, the minimum sampling rate required for perfect reconstruction is twice its bandwidth.
Bandwidth $B = 200$ kHz.
Minimum sampling rate $f_s \ge 2B = 2 \times 200 \text{ kHz} = 400$ kHz.
The center frequency of 150 MHz is irrelevant for determining the minimum sampling rate based on the bandpass sampling theorem; only the bandwidth matters.

---

### 11. Important Points to Remember

*   The Nyquist theorem is a **sufficient but not necessary** condition for reconstructability for all sampling schemes. However, for ideal sampling and reconstruction using an ideal LPF, it is both necessary and sufficient.
*   **Band-limitedness is crucial.** If a signal is not band-limited, it cannot be perfectly reconstructed, regardless of the sampling rate.
*   **Aliasing is irreversible.** Prevention is key.
*   Practical systems use anti-aliasing filters and practical reconstruction filters, which introduce some imperfections.
*   The sampling rate directly impacts the digital representation's **resolution** and the **bit rate** of the digital signal.
*   The bandpass sampling theorem shows that for signals with narrow bandwidth relative to their center frequency, lower sampling rates can be used compared to baseband conversion.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 12. References and Further Reading

*   **Kennedy’s Electronic Communication Systems by Kennedy, Davis and Prasanna (6th Edition):** Chapters typically cover digital signal processing fundamentals, including sampling and quantization. Look for sections on Analog-to-Digital Conversion.
*   **Electronic Communication Systems – Fundamentals through Advanced by Wayne Tomasi (5th edition):** This book often provides clear explanations of sampling theory, aliasing, and reconstruction. Check chapters on digital modulation and baseband pulse modulation.
*   **Communication Systems by Simon Haykin and Michael Mohre (5th Edition):** Haykin's books are known for their theoretical depth. Expect a thorough treatment of sampling theory, including mathematical derivations.
*   **Principles of Communication Systems by Taub & Schilling (4th edition):** A classic text that covers sampling theory and its implications for digital communication.

These textbooks will provide more detailed mathematical proofs, derivations, and practical examples related to the Nyquist Sampling Theorem and its applications. Specifically, look for chapters discussing the transition from analog to digital signals, analog-to-digital converters (ADCs), and the principles of digital communication systems.