---
title: "Sampling Theorem"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 1: Analysis of Sampled Data Systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368c3"
status: "completed"
scrapedAt: "2026-05-23T16:35:52.046Z"
---
# DISCRETE TIME CONTROL SYSTEMS

## Module 1: Analysis of Sampled Data Systems

### Topic: Sampling Theorem

**Objective:** This topic introduces the fundamental concept of the Sampling Theorem, which is crucial for understanding how continuous-time signals can be accurately represented in discrete-time systems.

**Learning Outcomes:**

*   Understand the concept of sampling and its necessity in discrete-time control systems.
*   State and explain the Nyquist-Shannon Sampling Theorem.
*   Determine the minimum sampling rate required to avoid aliasing for a given signal.
*   Understand the implications of undersampling and oversampling.
*   Analyze the effect of sampling on the frequency spectrum of a signal.
*   Identify and mitigate aliasing through appropriate sampling strategies.

**Knowledge Level Alignment:** This topic directly supports **CO1: Model and analyse discrete-time system using pulse transfer function approach.** By understanding the sampling theorem, we lay the groundwork for converting continuous-time system dynamics into their discrete-time equivalents, which is a prerequisite for deriving pulse transfer functions. The knowledge level is **K3 (Application)** as students will need to apply the theorem to determine appropriate sampling rates.

---

### 1. Introduction to Sampled Data Systems

In discrete-time control systems, continuous-time signals from the physical plant are converted into discrete-time signals before being processed by a digital controller. This conversion is performed by a **Sample-and-Hold (S/H)** circuit.

*   **Continuous-Time Signal:** A signal whose amplitude can vary continuously over time, e.g., $x(t)$.
*   **Discrete-Time Signal:** A signal whose amplitude is defined only at discrete instants of time, e.g., $x(kT)$, where $T$ is the sampling period and $k$ is an integer.
*   **Sampling:** The process of converting a continuous-time signal into a discrete-time signal by taking its values at regular intervals.
*   **Sample-and-Hold (S/H) Circuit:** A device that samples the input continuous-time signal and holds its value constant until the next sample is taken. The output of an S/H circuit is a **staircase approximation** of the original signal.

**Why sampling is necessary?**

*   **Digital Controllers:** Digital computers or microprocessors can only process discrete-time signals.
*   **Bandwidth Limitation:** Digital hardware has finite processing speed and memory, necessitating a discrete representation.
*   **Efficient Storage and Transmission:** Discrete-time signals are easier to store and transmit compared to continuous-time signals.

---

### 2. The Essence of Sampling: Time and Frequency Domains

The process of sampling can be understood by examining its effect on the signal in both the time and frequency domains.

#### 2.1 Time Domain Perspective

Consider a continuous-time signal $x(t)$. Sampling at intervals of $T$ results in a sequence of values:
$x(0), x(T), x(2T), x(3T), \dots, x(kT), \dots$

This sequence can be represented mathematically as $x^*(t)$, which is an impulse train multiplied by the original signal:
$x^*(t) = x(t) \sum_{k=-\infty}^{\infty} \delta(t - kT)$

where $\delta(t)$ is the Dirac delta function.

#### 2.2 Frequency Domain Perspective

The frequency spectrum of the sampled signal $X^*(j\omega)$ is related to the spectrum of the original continuous-time signal $X(j\omega)$. Using the Fourier Transform property for multiplication:

$X^*(j\omega) = \mathcal{F}\left\{ x(t) \sum_{k=-\infty}^{\infty} \delta(t - kT) \right\}$

The Fourier Transform of an impulse train is also an impulse train in the frequency domain:
$\mathcal{F}\left\{ \sum_{k=-\infty}^{\infty} \delta(t - kT) \right\} = \frac{2\pi}{T} \sum_{m=-\infty}^{\infty} \delta(\omega - m\omega_s)$

where $\omega_s = \frac{2\pi}{T}$ is the sampling frequency in radians per second, and $f_s = \frac{1}{T}$ is the sampling frequency in Hertz.

Therefore, the spectrum of the sampled signal is:
$X^*(j\omega) = \frac{1}{T} \sum_{m=-\infty}^{\infty} X\left(j(\omega - m\omega_s)\right)$

**(Key Concept: Replication of Spectra)**
This equation shows that the spectrum of the sampled signal consists of replicas of the original signal's spectrum $X(j\omega)$, centered at multiples of the sampling frequency $\omega_s$.

---

### 3. The Nyquist-Shannon Sampling Theorem

The Sampling Theorem is a fundamental principle that dictates the conditions under which a continuous-time signal can be perfectly reconstructed from its discrete samples.

**Statement of the Theorem:**
A band-limited continuous-time signal $x(t)$ with a maximum frequency component of $\omega_M$ (or $f_M = \omega_M / 2\pi$) can be uniquely determined from its samples $x(kT)$ if the sampling frequency $\omega_s$ is greater than twice the maximum frequency component, i.e., $\omega_s > 2\omega_M$. Equivalently, the sampling period $T$ must be less than half the period of the highest frequency component, i.e., $T < \frac{\pi}{\omega_M}$ or $T < \frac{1}{2f_M}$.

The minimum sampling frequency required for perfect reconstruction is called the **Nyquist Rate** or **Nyquist Frequency**, which is $2f_M$.

**In mathematical terms:** If $X(j\omega) = 0$ for $|\omega| > \omega_M$, then $x(t)$ is uniquely determined by $x(kT)$ for $k = 0, \pm 1, \pm 2, \dots$, provided $\omega_s > 2\omega_M$.

**Why is this condition necessary? (Avoiding Aliasing)**

Let's look at the frequency domain representation again:
$X^*(j\omega) = \frac{1}{T} \sum_{m=-\infty}^{\infty} X\left(j(\omega - m\omega_s)\right)$

*   **Case 1: $\omega_s > 2\omega_M$ (Satisfying the Theorem)**
    When the sampling frequency is sufficiently high, the replicas of the original spectrum $X(j\omega)$ centered at $m\omega_s$ do not overlap. There is a gap between the baseband spectrum (centered at $\omega=0$) and the first replica (centered at $\omega_s$). This gap is from $\omega_M$ to $\omega_s - \omega_M$.

    (Diagram: Show three non-overlapping spectral plots centered at $0$, $\omega_s$, and $-\omega_s$, with the original spectrum $X(j\omega)$ band-limited to $\pm \omega_M$.)

*   **Case 2: $\omega_s < 2\omega_M$ (Undersampling - Aliasing Occurs)**
    If the sampling frequency is too low, the replicas of the original spectrum will overlap. Specifically, the tail of the baseband spectrum (from $-\omega_M$ to $-\omega_s + \omega_M$) will overlap with the beginning of the replica centered at $-\omega_s$ (from $-\omega_s - \omega_M$ to $-\omega_s + \omega_M$). This overlap causes distortion, where high-frequency components of the original signal "fold back" into the lower frequency range, appearing as lower frequencies. This phenomenon is called **aliasing**.

    (Diagram: Show three overlapping spectral plots centered at $0$, $\omega_s$, and $-\omega_s$. Highlight the overlap region where aliasing occurs.)

*   **Case 3: $\omega_s = 2\omega_M$ (Critical Sampling - Nyquist Rate)**
    At the Nyquist rate, the replicas of the spectrum just touch each other at the frequencies $\pm \omega_M$. In theory, reconstruction is possible, but in practice, it is very difficult to achieve perfect band-limiting and perfect reconstruction due to the sharp spectral transitions. Therefore, it's generally recommended to sample slightly above the Nyquist rate.

**(Important Point to Remember):** Aliasing is irreversible. Once a signal is undersampled, the lost high-frequency information cannot be recovered.

#### 3.1 Reconstruction of the Original Signal

If the sampling theorem is satisfied, the original continuous-time signal $x(t)$ can be perfectly reconstructed from its samples $x^*(t)$ using a **low-pass filter** with an ideal cutoff frequency at $\omega_M$.

The ideal reconstruction filter $H_r(j\omega)$ has a frequency response:
$H_r(j\omega) = \begin{cases} T & \text{if } |\omega| \le \omega_M \\ 0 & \text{if } |\omega| > \omega_M \end{cases}$

The output of the reconstruction filter is:
$y(t) = x^*(t) * h_r(t)$
where $h_r(t)$ is the impulse response of the reconstruction filter.

The output signal $y(t)$ will be equal to the original signal $x(t)$.

---

### 4. Practical Considerations and Aliasing Mitigation

#### 4.1 Band-Limiting the Signal (Anti-Aliasing Filter)

In practice, most real-world signals are not perfectly band-limited. To avoid aliasing, a **low-pass filter** called an **anti-aliasing filter** is placed *before* the sampler. This filter removes or significantly attenuates frequency components above $\omega_M$, ensuring that the signal entering the sampler is effectively band-limited.

**The role of the anti-aliasing filter:**
1.  To limit the bandwidth of the continuous-time signal to $\omega_M$.
2.  To ensure that the Nyquist criterion ($\omega_s > 2\omega_M$) can be met for the filtered signal.

**(Key Concept: Anti-Aliasing Filter)**
The cutoff frequency of the anti-aliasing filter should be set to $\omega_a \le \omega_s/2$. It is common practice to choose the cutoff frequency of the anti-aliasing filter slightly below $\omega_s/2$ and then choose a sampling frequency $\omega_s$ well above $2\omega_a$.

#### 4.2 Oversampling

Oversampling occurs when the sampling frequency $\omega_s$ is much higher than the Nyquist rate ($2\omega_M$).

**Advantages of Oversampling:**
*   **Easier Anti-Aliasing Filter Design:** A higher $\omega_s$ allows for a more gradual cutoff in the anti-aliasing filter, which are easier and cheaper to implement (e.g., analog filters are less steep).
*   **Reduced Sensitivity:** The system becomes less sensitive to the exact cutoff frequency of the anti-aliasing filter and the sampling frequency.
*   **Improved Signal-to-Noise Ratio (SNR):** In some digital systems, oversampling can be combined with noise shaping techniques to improve the effective resolution or SNR.

**(Reference: Ogata, Chapter 2)** Ogata emphasizes the importance of the anti-aliasing filter and discusses the role of sampling and holding. He illustrates the spectrum replication and the concept of aliasing with detailed diagrams, reinforcing the theoretical explanation.

#### 4.3 Choice of Sampling Frequency ($T$)

The choice of the sampling period $T$ (or sampling frequency $f_s = 1/T$) is critical in designing discrete-time control systems.

*   **Too slow sampling ($T$ too large, $f_s$ too low):** Leads to aliasing and loss of information. The discrete-time system may not be able to accurately represent or control the continuous-time plant.
*   **Too fast sampling ($T$ too small, $f_s$ too high):**
    *   Increases the computational burden on the digital controller.
    *   Requires higher sampling rates for the Analog-to-Digital Converter (ADC).
    *   May lead to numerical precision issues.
    *   Often leads to poor performance in the discrete-time domain compared to the continuous-time domain.

**Rule of Thumb:** A common guideline is to choose a sampling frequency that is 5 to 10 times the dominant bandwidth of the system, or at least 3 to 5 times the Nyquist frequency of the important frequency components.

**(Reference: Phillips and Nagle, Chapter 2)** Phillips and Nagle discuss the sampling process and its effect on the frequency spectrum. They provide examples of spectra with and without aliasing and introduce the concept of impulse modulation and its frequency domain representation.

---

### 5. Examples

**Example 1: Determining the Minimum Sampling Rate**

A continuous-time signal has a maximum frequency component of 1 kHz. What is the minimum sampling frequency required to avoid aliasing?

*   Maximum frequency, $f_M = 1 \text{ kHz}$.
*   According to the Nyquist-Shannon Sampling Theorem, the minimum sampling frequency $f_s$ must be greater than $2f_M$.
*   Minimum $f_s > 2 \times 1 \text{ kHz} = 2 \text{ kHz}$.
*   Therefore, the minimum sampling frequency is slightly greater than 2 kHz.

**Example 2: Effect of Sampling Frequency**

Consider a signal $x(t) = \sin(2\pi \cdot 100 t) + \sin(2\pi \cdot 300 t)$.
The maximum frequency component is $f_M = 300 \text{ Hz}$.

*   **Scenario A: Sampling at $f_s = 1000 \text{ Hz}$**
    Here, $f_s = 1000 \text{ Hz} > 2 \times 300 \text{ Hz} = 600 \text{ Hz}$. The Nyquist criterion is satisfied.
    The sampled signal will accurately represent both frequency components.

*   **Scenario B: Sampling at $f_s = 400 \text{ Hz}$**
    Here, $f_s = 400 \text{ Hz} < 2 \times 300 \text{ Hz} = 600 \text{ Hz}$. The Nyquist criterion is *not* satisfied, and aliasing will occur.
    The frequency $300 \text{ Hz}$ will alias to $|300 - n \cdot 400|$, where $n$ is an integer such that the result is within $[0, 400/2]$.
    For $n=1$, the aliased frequency is $|300 - 1 \cdot 400| = |-100| = 100 \text{ Hz}$.
    So, the $300 \text{ Hz}$ component will appear as a $100 \text{ Hz}$ component in the sampled data. The original $100 \text{ Hz}$ component will also be present. The resulting sampled signal will incorrectly appear to have only $100 \text{ Hz}$ components.

**(Reference: Gopal, Chapter 3)** M. Gopal provides a detailed explanation of the sampling process, including spectral analysis. He uses examples to demonstrate how aliasing occurs when the sampling rate is insufficient and discusses the practical implementation aspects of sampling and reconstruction.

---

### 6. Practice Questions and Exercises

**Question 1:**
State the Nyquist-Shannon Sampling Theorem in your own words. What is the significance of the Nyquist rate?

**Question 2:**
A signal $x(t)$ contains frequency components up to $500 \text{ Hz}$.
a) What is the minimum sampling frequency $f_s$ (in Hz) required to avoid aliasing?
b) If the signal is sampled at $f_s = 800 \text{ Hz}$, what is the maximum frequency component that can be uniquely determined from the samples?

**Question 3:**
Consider a signal $x(t) = 5 \cos(200 \pi t) + 2 \sin(600 \pi t)$.
a) Determine the highest frequency component in $x(t)$.
b) If this signal is sampled at a rate of $f_s = 400 \text{ Hz}$, will aliasing occur? If yes, what is the apparent frequency of the $600\pi \text{ rad/s}$ component?
c) What is the minimum sampling rate (in Hz) required to avoid aliasing?

**Question 4:**
Explain the purpose of an anti-aliasing filter in a sampled-data system. Where is it typically placed in the signal path?

**Question 5:**
What are the potential drawbacks of oversampling in a discrete-time control system?

---

### 7. Answers to Practice Questions

**Answer 1:**
The Nyquist-Shannon Sampling Theorem states that to perfectly reconstruct a continuous-time signal from its samples, the sampling frequency must be at least twice the highest frequency component present in the signal. The Nyquist rate ($2f_{max}$) is this minimum sampling frequency. If the signal is sampled below the Nyquist rate, high-frequency components will masquerade as lower frequencies (aliasing), leading to irreversible distortion.

**Answer 2:**
a) The highest frequency component is $f_M = 500 \text{ Hz}$.
   Minimum sampling frequency $f_s > 2 \times f_M = 2 \times 500 \text{ Hz} = 1000 \text{ Hz}$.
   So, the minimum sampling frequency is slightly greater than 1000 Hz.

b) If sampled at $f_s = 800 \text{ Hz}$, the maximum frequency that can be uniquely determined is $f_s/2 = 800 \text{ Hz} / 2 = 400 \text{ Hz}$.
   Since the signal contains frequencies up to 500 Hz, aliasing will occur. The part of the spectrum above 400 Hz will fold back into the 0-400 Hz range.

**Answer 3:**
a) The frequencies are $100 \text{ Hz}$ (from $200 \pi t$) and $300 \text{ Hz}$ (from $600 \pi t$).
   The highest frequency component is $f_M = 300 \text{ Hz}$.

b) The sampling frequency is $f_s = 400 \text{ Hz}$.
   The Nyquist rate is $2 \times f_M = 2 \times 300 \text{ Hz} = 600 \text{ Hz}$.
   Since $f_s (400 \text{ Hz}) < 600 \text{ Hz}$, aliasing will occur.
   The frequency component at $300 \text{ Hz}$ will alias. The aliased frequency $f_{alias}$ is found using $f_{alias} = |f - n \cdot f_s|$ where $n$ is an integer such that $0 \le f_{alias} \le f_s/2$.
   For $f = 300 \text{ Hz}$ and $f_s = 400 \text{ Hz}$:
   $f_{alias} = |300 - 1 \cdot 400| = |-100| = 100 \text{ Hz}$.
   The apparent frequency of the $300 \text{ Hz}$ component will be $100 \text{ Hz}$.

c) The minimum sampling rate required to avoid aliasing is the Nyquist rate, which is $2 \times f_M = 2 \times 300 \text{ Hz} = 600 \text{ Hz}$.

**Answer 4:**
The purpose of an anti-aliasing filter is to remove or attenuate frequency components in the continuous-time signal that are above half the sampling frequency ($f_s/2$). This ensures that the signal entering the sampler is effectively band-limited, thus preventing aliasing when the signal is sampled. It is typically placed *before* the sampler in the signal path to filter the analog signal.

**Answer 5:**
While oversampling can offer advantages, some potential drawbacks include:
*   **Increased Computational Load:** A higher sampling rate means the digital controller must perform calculations more frequently, increasing the processing demand.
*   **Higher Data Rates:** More data points need to be processed and potentially stored, requiring faster ADCs and more memory.
*   **Faster Clocking:** Digital components need to operate at higher clock speeds, which can increase power consumption and complexity.
*   **Reduced Control Loop Performance:** In some cases, sampling too fast can lead to a discrete-time system that does not accurately reflect the continuous-time plant dynamics, potentially resulting in poorer control performance or stability issues if not designed carefully. (This relates to the zero-order hold effect, which becomes more pronounced at very high sampling rates relative to the system's natural dynamics).

---

### 8. Important Points to Remember

*   **Sampling Theorem:** $\omega_s > 2\omega_M$ or $f_s > 2f_M$.
*   **Aliasing:** Occurs when sampling below the Nyquist rate; high frequencies appear as low frequencies. It is irreversible.
*   **Anti-Aliasing Filter:** A low-pass filter placed *before* the sampler to limit the signal bandwidth to $\omega_M < \omega_s/2$.
*   **Reconstruction Filter:** A low-pass filter used to recover the continuous-time signal from its samples, with a cutoff frequency at $\omega_M$.
*   **Spectrum Replication:** Sampling creates copies of the original signal's spectrum centered at integer multiples of the sampling frequency ($\omega_s$).
*   **Choice of $T$:** A trade-off between avoiding aliasing, computational load, and controller performance.

---

This concludes Module 1, Topic 1: Sampling Theorem. The understanding of this theorem is fundamental to all subsequent topics in discrete-time control systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
