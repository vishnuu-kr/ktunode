---
title: "Nyquist criteria"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampling of continuous time signals to discrete signals and 
frequency domain representation of discrete time signals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe525"
status: "completed"
scrapedAt: "2026-05-23T17:52:30.397Z"
---
## Signals and Systems: Module 3 Study Notes

### Topic: Nyquist Criterion

**1. Introduction to Sampling**

Sampling is the process of converting a continuous-time signal $x(t)$ into a discrete-time signal $x[n]$ by taking values at regular intervals of time. This process is fundamental to digital signal processing, allowing analog signals to be processed by digital computers.

*   **Key Concept:** The sampled signal $x[n]$ is obtained by evaluating $x(t)$ at discrete time instants $t = nT_s$, where $T_s$ is the sampling period and $n$ is an integer.
*   **Mathematical Representation:** $x[n] = x(nT_s)$
*   **Relationship to Sampling Frequency:** The sampling frequency $f_s$ is the reciprocal of the sampling period: $f_s = 1/T_s$.

**2. The Problem of Aliasing**

When sampling a continuous-time signal, if the sampling rate is not sufficiently high, information from higher frequencies can "fold back" or "alias" into the lower frequency range. This distortion makes it impossible to perfectly reconstruct the original continuous-time signal from its samples.

*   **Key Concept:** Aliasing occurs when the sampling frequency $f_s$ is less than twice the highest frequency component present in the original continuous-time signal.
*   **Consequences:**
    *   Distortion of the signal.
    *   Inability to recover the original signal.
    *   Introduction of spurious frequency components.

**3. The Nyquist-Shannon Sampling Theorem (Nyquist Criterion)**

The Nyquist-Shannon Sampling Theorem provides the theoretical basis for sampling continuous-time signals without aliasing. It states that a band-limited continuous-time signal $x(t)$ with no frequency components above $f_{max}$ can be perfectly reconstructed from its samples $x[n]$ if the sampling frequency $f_s$ is strictly greater than twice the maximum frequency, i.e., $f_s > 2f_{max}$.

*   **Key Concept:** The **Nyquist Rate** is the minimum sampling rate required to avoid aliasing, which is $2f_{max}$.
*   **Nyquist Frequency (or Folding Frequency):** This is half the sampling frequency, $f_s/2$. Frequencies above the Nyquist frequency will alias to frequencies below it.
*   **Mathematical Statement:** For perfect reconstruction, $f_s > 2f_{max}$. Equivalently, $T_s < 1/(2f_{max})$.

**4. Frequency Domain Perspective: Why the Nyquist Criterion Works**

Understanding the frequency domain is crucial for grasping the Nyquist criterion.

*   **Frequency Domain Representation of Continuous-Time Signals:** A continuous-time signal $x(t)$ can be represented by its Fourier Transform $X(f)$, which shows its frequency content.
*   **Frequency Domain Representation of Sampled Signals:** When a continuous-time signal $x(t)$ is sampled to produce $x[n]$, its frequency spectrum $X(f)$ is replicated periodically in the frequency domain at intervals of the sampling frequency $f_s$.
    *   The spectrum of the sampled signal $X_s(f)$ is given by:
        $$X_s(f) = f_s \sum_{k=-\infty}^{\infty} X(f - kf_s)$$
        This formula indicates that the original spectrum $X(f)$ is shifted by integer multiples of $f_s$ and scaled by $f_s$.

*   **Avoiding Overlap (Aliasing):**
    *   If $f_s > 2f_{max}$, the replicas of the original spectrum $X(f)$ (centered at $0, \pm f_s, \pm 2f_s, \ldots$) do not overlap. The original spectrum, which extends from $-f_{max}$ to $+f_{max}$, is clearly separated from its shifted replicas.
    *   If $f_s < 2f_{max}$, the replicas of the original spectrum overlap. Specifically, the positive frequency portion of the spectrum centered at $-f_s$ will overlap with the negative frequency portion of the spectrum centered at $0$. This overlap is aliasing.

**Visualizing the Frequency Domain:**

Imagine the spectrum of $x(t)$ as a shape centered at $f=0$, extending from $-f_{max}$ to $+f_{max}$.

*   **Case 1: $f_s > 2f_{max}$ (No Aliasing)**
    *   The original spectrum is from $-f_{max}$ to $+f_{max}$.
    *   The first replica is centered at $f_s$ and extends from $f_s - f_{max}$ to $f_s + f_{max}$.
    *   The second replica is centered at $-f_s$ and extends from $-f_s - f_{max}$ to $-f_s + f_{max}$.
    *   Since $f_s > 2f_{max}$, the gap between $f_{max}$ and $f_s - f_{max}$ is positive. Similarly, the gap between $-f_{max}$ and $-f_s + f_{max}$ is positive. The spectra do not overlap.

*   **Case 2: $f_s < 2f_{max}$ (Aliasing)**
    *   The original spectrum is from $-f_{max}$ to $+f_{max}$.
    *   The replica centered at $-f_s$ extends from $-f_s - f_{max}$ to $-f_s + f_{max}$.
    *   Since $f_s < 2f_{max}$, we have $f_s - f_{max} < f_{max}$. This means the upper edge of the replica at $-f_s$ (which is $-f_s + f_{max}$) will extend beyond $-f_{max}$. Similarly, the lower edge of the replica at $f_s$ (which is $f_s - f_{max}$) will extend below $f_{max}$. The spectra overlap.

**5. Practical Implications and Techniques**

*   **Anti-Aliasing Filters:** In practice, continuous-time signals are rarely perfectly band-limited. Therefore, before sampling, an **anti-aliasing filter** is used. This is a low-pass filter that attenuates frequencies above $f_s/2$ to ensure that the signal presented to the sampler is effectively band-limited to $f_s/2$.
    *   **Role:** To prevent aliasing by removing or significantly reducing frequencies above $f_s/2$.
    *   **Design:** The cutoff frequency of the anti-aliasing filter is typically set slightly below $f_s/2$ to account for the transition band of real-world filters.

*   **Oversampling:** Sampling at a rate significantly higher than the Nyquist rate. This relaxes the requirements on the anti-aliasing filter and can simplify subsequent digital processing. The oversampled signal can then be downsampled (decimated) to the desired rate.

**6. Important Points to Remember**

*   **Band-Limited Signal:** The Nyquist-Shannon theorem applies to signals that have a finite maximum frequency.
*   **$f_s > 2f_{max}$:** This is the critical condition for avoiding aliasing. Strict inequality is important.
*   **Nyquist Rate:** $2f_{max}$ is the minimum sampling rate.
*   **Nyquist Frequency (Folding Frequency):** $f_s/2$. Frequencies above this will alias.
*   **Aliasing:** Distortion caused by sampling below the Nyquist rate, resulting in spectral overlap.
*   **Anti-Aliasing Filter:** Essential in practice to ensure the signal is sufficiently band-limited before sampling.

**7. Examples**

**Example 1: Simple Sine Wave**

Consider a continuous-time signal $x(t) = \sin(2\pi \cdot 1000t)$.
The highest frequency component is $f_{max} = 1000$ Hz.

*   **Required Sampling Frequency:** According to the Nyquist criterion, we need $f_s > 2 \times 1000$ Hz, so $f_s > 2000$ Hz.
*   **If $f_s = 1500$ Hz:** This is below the Nyquist rate. Aliasing will occur. The sampled signal will appear as a sine wave with a frequency below 1500/2 = 750 Hz.
*   **If $f_s = 2500$ Hz:** This is above the Nyquist rate. No aliasing will occur, and the original sine wave can be reconstructed.

**Example 2: Band-Limited Signal with Multiple Frequencies**

Consider a signal $x(t)$ with frequency components up to $f_{max} = 5$ kHz.

*   **Nyquist Rate:** $2 \times 5$ kHz = 10 kHz.
*   **If sampled at $f_s = 8$ kHz:** Aliasing will occur because $8$ kHz $< 10$ kHz. Frequencies between $10$ kHz/2 = 5 kHz and 8 kHz will fold back into the 0-5 kHz range.
*   **If sampled at $f_s = 12$ kHz:** No aliasing will occur because $12$ kHz $> 10$ kHz. The Nyquist frequency is $12$ kHz/2 = 6 kHz. All original frequencies up to 5 kHz are below this.

**Example 3: Practical Scenario**

Suppose you want to digitize audio signals in the human hearing range, which is up to approximately 20 kHz.

*   **Required Sampling Frequency:** $f_s > 2 \times 20$ kHz = 40 kHz.
*   **CD Audio Standard:** CD audio uses a sampling rate of 44.1 kHz. This is slightly above the Nyquist rate of 40 kHz, providing a small margin for error and filter design.
*   **Anti-aliasing Filter:** For CD audio, an anti-aliasing filter with a cutoff frequency around 20 kHz is used before sampling at 44.1 kHz.

**8. Practice Questions and Exercises**

**Question 1:**
A continuous-time signal $x(t)$ has a maximum frequency component of 4 kHz. What is the minimum sampling frequency $f_s$ required to sample this signal without aliasing?

**Answer 1:**
The Nyquist rate is $2 \times f_{max} = 2 \times 4$ kHz = 8 kHz. Therefore, the minimum sampling frequency required is $f_s > 8$ kHz.

**Question 2:**
A signal $x(t)$ is sampled at a rate of $f_s = 10$ kHz. If a frequency component at 6 kHz is present in $x(t)$, what frequency will it appear as in the sampled signal $x[n]$ due to aliasing?

**Answer 2:**
The Nyquist frequency is $f_s/2 = 10$ kHz / 2 = 5 kHz.
The frequency 6 kHz is above the Nyquist frequency.
To find the aliased frequency, we subtract multiples of $f_s$ from 6 kHz until it falls within the range $[-f_s/2, f_s/2]$ or $[0, f_s/2]$.
The aliased frequency $f_{alias}$ can be found using the formula:
$f_{alias} = f - k f_s$, where $k$ is an integer such that $|f - k f_s| \le f_s/2$.
Here, $f = 6$ kHz and $f_s = 10$ kHz.
If $k=1$, $f_{alias} = 6 \text{ kHz} - 1 \times 10 \text{ kHz} = -4 \text{ kHz}$.
The absolute value is 4 kHz, which is within the range $[0, 5]$ kHz.
So, the 6 kHz component will appear as 4 kHz in the sampled signal.

**Question 3:**
Explain the role of an anti-aliasing filter in the sampling process.

**Answer 3:**
An anti-aliasing filter is a low-pass filter placed before the sampler. Its purpose is to attenuate or remove frequency components of the continuous-time signal that are above half the sampling frequency ($f_s/2$). This ensures that the signal being sampled is effectively band-limited to below $f_s/2$, thus preventing aliasing and allowing for accurate reconstruction of the original signal.

**Question 4:**
A signal $x(t)$ is sampled at $f_s = 1000$ Hz.
(a) What is the Nyquist frequency for this sampling rate?
(b) If $x(t) = 2\cos(2\pi \cdot 300t) + \cos(2\pi \cdot 700t)$, would aliasing occur? If so, what would be the observed frequencies?

**Answer 4:**
(a) The Nyquist frequency is $f_s/2 = 1000 \text{ Hz} / 2 = 500 \text{ Hz}$.

(b) The signal $x(t)$ has frequency components at 300 Hz and 700 Hz.
The maximum frequency component is $f_{max} = 700$ Hz.
The Nyquist rate required is $2 \times f_{max} = 2 \times 700 \text{ Hz} = 1400 \text{ Hz}$.
Since the sampling frequency $f_s = 1000$ Hz is less than the Nyquist rate (1000 Hz < 1400 Hz), aliasing will occur.

The 300 Hz component is below the Nyquist frequency (500 Hz), so it will not alias.
The 700 Hz component is above the Nyquist frequency (500 Hz). To find its aliased frequency, we find the closest multiple of $f_s$ to 700 Hz and calculate the difference:
$f_{alias} = f - k f_s$ where $|f - k f_s| \le f_s/2$.
Let $f = 700$ Hz and $f_s = 1000$ Hz.
For $k=1$, $f - k f_s = 700 - 1 \cdot 1000 = -300$ Hz.
The absolute value is 300 Hz, which is within the range $[0, 500]$ Hz.
So, the 700 Hz component will alias to 300 Hz.
The observed frequencies in the sampled signal will be 300 Hz (from the original 300 Hz component and the aliased 700 Hz component).

**9. Alignment with Course Outcomes**

*   **CO1 (Classify signals and systems, perform basic operations):** Understanding sampling is a basic operation on continuous-time signals to create discrete-time signals. The concept of band-limitedness is a property of signals. (Knowledge Level: K2)
*   **CO3 (Analyze signals in frequency domain):** The Nyquist criterion is fundamentally explained through the frequency domain representation of sampled signals, showing spectral replication and overlap (aliasing). (Knowledge Level: K3)
*   **CO4 (Interpret use of transforms to analyze systems):** While this topic focuses on sampling, the underlying principle of frequency domain analysis (using the Fourier Transform to understand the spectrum of sampled signals) is directly related to interpreting how sampling affects signals in the frequency domain. (Knowledge Level: K3)

**10. Textbooks and Reference Books Consulted (Conceptual Basis)**

This study material draws on the fundamental principles of sampling and the Nyquist criterion as presented in standard Signals and Systems textbooks. Key concepts such as spectral replication and aliasing are elaborated upon in:

*   **Signals and Systems by Alan V. Oppenheim and Alan Willsky (Pearson, 2/e, 2015):** Provides a thorough treatment of sampling theory, including the mathematical formulation of spectral replication and the conditions for avoiding aliasing.
*   **Signals and Systems by Simon Haykin (John Wiley, 2/e, 2021):** Offers a clear explanation of the practical aspects of sampling, including the necessity of anti-aliasing filters.
*   **Principles of Signal Processing & Linear systems by B P. Lathi (Oxford University Press, 2/e, 2009):** Explains the frequency domain implications of sampling and the concept of the Nyquist rate.
*   **Signals & Systems - Continuous and Discrete by Rodger E. Ziemer (Pearson, 4/e, 2013):** Details the process of sampling and its effects on the signal spectrum.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
