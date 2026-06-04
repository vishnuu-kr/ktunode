---
title: "Sampled Data Systems and Z-Transform: Sampling process - Impulse train sampling-sampling theorem- Aliasing effect."
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampled Data Systems and Z"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361db"
status: "completed"
scrapedAt: "2026-05-23T16:23:49.102Z"
---
# Module 3: Sampled Data Systems and Z-Transform

## Topic: Sampling Process - Impulse Train Sampling, Sampling Theorem, Aliasing Effect

This module introduces the fundamental concepts of converting continuous-time signals into discrete-time signals through the sampling process. We will explore the impulse train sampling method, the theoretical basis for effective sampling (the Nyquist-Shannon Sampling Theorem), and the detrimental phenomenon of aliasing that arises from improper sampling.

---

### Learning Outcomes:

*   Understand the process of sampling continuous-time signals.
*   Explain impulse train sampling and its mathematical representation.
*   State and interpret the Nyquist-Shannon Sampling Theorem.
*   Describe the phenomenon of aliasing and its causes.
*   Identify methods to avoid or mitigate aliasing.

---

### Key Concepts and Definitions:

*   **Continuous-Time (CT) Signal:** A signal whose independent variable is continuous, typically denoted as $x(t)$.
*   **Discrete-Time (DT) Signal:** A signal whose independent variable is discrete, typically denoted as $x[n]$ or $x(nT)$.
*   **Sampling:** The process of converting a continuous-time signal into a discrete-time signal by taking samples of the signal at regular intervals.
*   **Sampling Period ($T_s$):** The time interval between consecutive samples of a continuous-time signal.
*   **Sampling Frequency ($f_s$ or $\omega_s$):** The number of samples taken per unit of time. It is the reciprocal of the sampling period: $f_s = 1/T_s$. The angular sampling frequency is $\omega_s = 2\pi f_s = 2\pi/T_s$.
*   **Sampled Signal:** The sequence of discrete-time values obtained from the sampling process.
*   **Impulse Train:** An infinite sequence of Dirac delta functions separated by a constant interval.
*   **Impulse Train Sampling:** A theoretical model of sampling where the continuous-time signal is multiplied by an impulse train.
*   **Nyquist-Shannon Sampling Theorem:** A fundamental theorem stating the minimum sampling rate required to perfectly reconstruct a band-limited continuous-time signal from its samples.
*   **Band-limited Signal:** A signal whose Fourier transform is zero for frequencies outside a certain finite range.
*   **Aliasing:** The distortion or misrepresentation of a signal's frequency content that occurs when the sampling frequency is too low relative to the highest frequency component in the signal. This causes higher frequencies to appear as lower frequencies in the sampled signal.
*   **Nyquist Frequency (or Folding Frequency):** Half the sampling frequency, $f_s/2$ or $\omega_N = \omega_s/2$. Frequencies above the Nyquist frequency will alias to frequencies below it.
*   **Anti-Aliasing Filter:** A low-pass filter used *before* sampling to remove or attenuate frequency components above the Nyquist frequency, thereby preventing aliasing.
*   **Reconstruction Filter:** A low-pass filter used *after* sampling to recover the original continuous-time signal, assuming the sampling theorem was satisfied.

---

### 1. The Sampling Process

Sampling is the crucial step in bridging the gap between continuous-time and discrete-time systems. It involves taking measurements of a continuous-time signal at discrete points in time. This process allows us to represent an analog signal in a digital format, enabling processing by digital computers and microprocessors.

*   **Motivation:**
    *   Digital processing offers advantages like noise immunity, flexibility, and accuracy.
    *   Many physical systems are inherently continuous-time, requiring a method to convert them for digital analysis and control.

*   **Mathematical Representation of a Sampled Signal:**
    If $x(t)$ is a continuous-time signal, the sampled signal $x_s(t)$ can be represented as:
    $x_s(t) = x(t) \cdot p(t)$
    where $p(t)$ is the impulse train modulator.

---

### 2. Impulse Train Sampling

Impulse train sampling is a fundamental theoretical model for understanding the sampling process. It assumes that the continuous-time signal is multiplied by an infinite train of Dirac delta functions, spaced at the sampling period $T_s$.

*   **Impulse Train $p(t)$:**
    The impulse train $p(t)$ can be represented as:
    $p(t) = \sum_{n=-\infty}^{\infty} \delta(t - nT_s)$

    *   **Definition of Dirac Delta Function $\delta(t)$:** A generalized function that is zero everywhere except at $t=0$, where it is infinite, and its integral over all time is 1.
    *   **Property of Dirac Delta Function:** $\int_{-\infty}^{\infty} x(t)\delta(t - t_0) dt = x(t_0)$

*   **Sampled Signal $x_s(t)$:**
    The impulse train sampled signal is given by:
    $x_s(t) = x(t) \cdot p(t) = x(t) \sum_{n=-\infty}^{\infty} \delta(t - nT_s)$
    $x_s(t) = \sum_{n=-\infty}^{\infty} x(t) \delta(t - nT_s)$

    Using the property of the Dirac delta function, we can show that:
    $x_s(t) = \sum_{n=-\infty}^{\infty} x(nT_s) \delta(t - nT_s)$

    This shows that the sampled signal $x_s(t)$ is a sequence of weighted impulses, where the weights are the sample values $x(nT_s)$ and the impulses are located at times $nT_s$.

*   **Frequency Domain Representation of Impulse Train Sampling:**
    Let $X(\omega)$ be the Fourier Transform of $x(t)$, and $X_s(\omega)$ be the Fourier Transform of $x_s(t)$.
    The Fourier Transform of the impulse train $p(t)$ is another impulse train in the frequency domain:
    $P(\omega) = \frac{2\pi}{T_s} \sum_{k=-\infty}^{\infty} \delta(\omega - k\omega_s)$, where $\omega_s = 2\pi/T_s$.

    The Fourier Transform of the sampled signal $x_s(t)$ is the convolution of the Fourier Transform of $x(t)$ with the Fourier Transform of $p(t)$:
    $X_s(\omega) = \frac{1}{2\pi} [X(\omega) * P(\omega)]$
    $X_s(\omega) = \frac{1}{2\pi} [X(\omega) * \left(\frac{2\pi}{T_s} \sum_{k=-\infty}^{\infty} \delta(\omega - k\omega_s)\right)]$
    $X_s(\omega) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} [X(\omega) * \delta(\omega - k\omega_s)]$

    Using the convolution property $f(\omega) * \delta(\omega - \omega_0) = f(\omega - \omega_0)$:
    $X_s(\omega) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} X(\omega - k\omega_s)$

    **Key Insight:** The frequency spectrum of the sampled signal $X_s(\omega)$ is an infinite sum of shifted and scaled copies of the original signal's spectrum $X(\omega)$. Each copy is shifted by integer multiples of the sampling frequency $\omega_s$.

    *(Reference: Haykin & Van Veen, Chapter 10 - Discrete-Time Signals and Systems, Section 10.1 - Sampling of Continuous-Time Signals)*
    *(Reference: Oppenheim, Willsky & Nawab, Chapter 7 - Sampling, Section 7.1 - Representation of a Discrete-Time Signal from its Samples)*

---

### 3. The Nyquist-Shannon Sampling Theorem

The Nyquist-Shannon Sampling Theorem provides the crucial condition for being able to perfectly reconstruct a continuous-time signal from its samples.

*   **Statement of the Theorem:**
    A band-limited continuous-time signal $x(t)$ with a Fourier transform $X(\omega)$ that is zero for $|\omega| > \omega_M$ can be perfectly reconstructed from its samples $x(nT_s)$ if the sampling frequency $f_s = 1/T_s$ is greater than twice the maximum frequency component $\omega_M$.
    Mathematically:
    $\omega_s > 2\omega_M$
    or
    $f_s > 2f_M$, where $f_M = \omega_M / (2\pi)$.

    The minimum sampling rate, $2f_M$, is called the **Nyquist rate**. The minimum angular sampling frequency, $2\omega_M$, is called the **Nyquist angular frequency**.

*   **Implications of the Theorem:**
    *   If the sampling condition is met, the shifted copies of the original spectrum $X(\omega - k\omega_s)$ in $X_s(\omega)$ do not overlap.
    *   Perfect reconstruction is possible using an ideal low-pass filter (reconstruction filter) with a cutoff frequency at $\omega_M$. This filter selects the baseband copy ($k=0$) of the spectrum from $X_s(\omega)$.

*   **Reconstruction Process:**
    If $\omega_s > 2\omega_M$, the original signal $x(t)$ can be reconstructed from $x_s(t)$ as:
    $x(t) = \sum_{n=-\infty}^{\infty} x(nT_s) \text{sinc}\left(\frac{t - nT_s}{T_s}\right)$
    where $\text{sinc}(u) = \sin(\pi u) / (\pi u)$. This is known as **interpolation**.

    Alternatively, in the frequency domain, reconstruction is achieved by passing $X_s(\omega)$ through an ideal low-pass filter $H(\omega)$:
    $H(\omega) = \begin{cases} T_s & |\omega| \le \omega_M \\ 0 & |\omega| > \omega_M \end{cases}$
    Then, $X(\omega) = X_s(\omega) H(\omega)$.

    *(Reference: Haykin & Van Veen, Chapter 10 - Discrete-Time Signals and Systems, Section 10.1.2 - The Sampling Theorem)*
    *(Reference: Ogata, Chapter 12 - Sampled-Data Systems, Section 12-1 - Introduction, and Section 12-2 - The Sampling Theorem)*
    *(Reference: Oppenheim, Willsky & Nawab, Chapter 7 - Sampling, Section 7.2 - The Nyquist-Shannon Sampling Theorem)*

---

### 4. Aliasing Effect

Aliasing is the most significant problem that arises when the sampling theorem is violated, i.e., when the sampling frequency $f_s$ is less than the Nyquist rate ($2f_M$).

*   **Cause of Aliasing:**
    When $\omega_s < 2\omega_M$, the shifted copies of the original spectrum $X(\omega - k\omega_s)$ overlap in the frequency domain of the sampled signal $X_s(\omega)$.
    Specifically, the copy shifted by $\omega_s$ (i.e., $X(\omega - \omega_s)$) overlaps with the baseband copy ($X(\omega)$) in the region between $\omega_s - \omega_M$ and $\omega_M$.

*   **Consequences of Aliasing:**
    *   **Frequency Distortion:** Higher frequency components in the original signal are incorrectly interpreted as lower frequency components in the sampled signal.
    *   **Irrecoverable Loss of Information:** Once aliasing occurs, it is impossible to recover the original signal's frequency content correctly, even with ideal reconstruction filters. The overlapped spectral components are indistinguishable.

*   **Visualizing Aliasing (Frequency Domain):**
    Imagine the spectrum of the original signal $X(\omega)$ which is non-zero only for $|\omega| \le \omega_M$.
    When we form $X_s(\omega) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} X(\omega - k\omega_s)$:

    *   **Case 1: $\omega_s > 2\omega_M$ (Nyquist Rate Satisfied)**
        The copies $X(\omega - k\omega_s)$ are separated, with gaps between them. The highest frequency in $X(\omega)$ is $\omega_M$. The next copy starts at $\omega_s - \omega_M$. Since $\omega_s > 2\omega_M$, then $\omega_s - \omega_M > \omega_M$. There is no overlap.

    *   **Case 2: $\omega_s < 2\omega_M$ (Nyquist Rate Violated)**
        The copies $X(\omega - k\omega_s)$ overlap. For instance, the copy $X(\omega - \omega_s)$ starts at $\omega_s - \omega_M$. If $\omega_s < 2\omega_M$, then $\omega_s - \omega_M < \omega_M$. This means the tail end of $X(\omega)$ (frequencies between $\omega_s - \omega_M$ and $\omega_M$) overlaps with the beginning of the shifted copy $X(\omega - \omega_s)$.

*   **Example of Aliasing (Time Domain):**
    Consider a signal $x(t) = \cos(2\pi f_0 t)$. Its spectrum $X(\omega)$ has a single impulse at $\omega = 2\pi f_0$.
    If we sample this signal at frequency $f_s$:
    $x_s(t) = \sum_{n=-\infty}^{\infty} \cos(2\pi f_0 nT_s) \delta(t - nT_s)$
    The discrete-time signal is $x[n] = \cos(2\pi f_0 nT_s) = \cos(\omega_0 n)$, where $\omega_0 = 2\pi f_0 T_s = 2\pi f_0 / f_s$.

    If $f_0 > f_s/2$, then $\omega_0 > \pi$. Due to the periodicity of the cosine function in the discrete-time domain, $\cos(\omega_0 n) = \cos(\omega_0 n - 2\pi n) = \cos((\omega_0 - 2\pi) n)$. This means a frequency $\omega_0$ greater than $\pi$ appears as a frequency $\omega_0 - 2\pi$, which is less than $\pi$ (and greater than $-\pi$).
    This is aliasing: a high frequency ($f_0$) appears as a lower frequency ($f_{alias} = |f_0 - kf_s|$ for some integer $k$, such that $|f_{alias}| \le f_s/2$).

*   **Avoiding Aliasing:**
    1.  **Increase Sampling Rate:** Ensure $f_s > 2f_M$. This is the most direct solution if possible.
    2.  **Anti-Aliasing Filter:** Use a **low-pass filter** before sampling. This filter removes or significantly attenuates frequency components of $x(t)$ that are above $f_s/2$. The filtered signal, now band-limited to $f_s/2$, can then be sampled at $f_s$ without aliasing. The cutoff frequency of the anti-aliasing filter should be set at or below $f_s/2$.

    *(Reference: Haykin & Van Veen, Chapter 10 - Discrete-Time Signals and Systems, Section 10.1.3 - Aliasing)*
    *(Reference: Ogata, Chapter 12 - Sampled-Data Systems, Section 12-2 - The Sampling Theorem, and Section 12-3 - Signal Reconstruction)*
    *(Reference: Oppenheim, Willsky & Nawab, Chapter 7 - Sampling, Section 7.3 - Aliasing)*
    *(Reference: Proakis & Manolakis, Chapter 1 - Digital Signal Processing Fundamentals, Section 1.3.1 - Sampling of a Continuous-Time Signal)*

---

### Alignment with Course Outcomes:

*   **CO1 (K2):** This topic directly addresses the representation of continuous-time signals ($x(t)$) and their transformation into discrete-time representations ($x[n]$ or $x_s(t)$) through the sampling process. Understanding the impulse train sampling provides a mathematical basis for this conversion.
*   **CO2 (K3):** The frequency domain analysis of the sampling process, leading to the understanding of the sampled signal's spectrum $X_s(\omega)$, is central to this topic. This directly relates to representing CT signals in the frequency domain.
*   **CO3 (K3):** While the Z-transform is introduced later, the foundation laid here – the conversion from CT to DT – is the prerequisite for applying the Z-transform to discrete-time signals and systems. Understanding the sampled signal is the first step towards its Z-domain representation.
*   **CO4 (K3):** While not directly about stability of CT systems, understanding the impact of sampling frequency on the frequency content of a signal is crucial for designing digital controllers for continuous-time systems. Improper sampling can lead to incorrect representation of system dynamics, affecting stability analysis and controller design in sampled-data systems.

---

### Important Points to Remember:

*   **Sampling converts CT to DT:** This is the bridge to digital processing.
*   **Impulse Train Sampling:** $x_s(t) = \sum x(nT_s) \delta(t - nT_s)$.
*   **Spectrum of Sampled Signal:** $X_s(\omega) = \frac{1}{T_s} \sum X(\omega - k\omega_s)$. It's a periodic replication of the original spectrum.
*   **Nyquist-Shannon Sampling Theorem:** For perfect reconstruction, $f_s > 2f_M$ (or $\omega_s > 2\omega_M$), where $f_M$ is the highest frequency in $x(t)$.
*   **Aliasing:** Occurs when $f_s < 2f_M$. High frequencies masquerade as low frequencies. It's irreversible.
*   **Prevention of Aliasing:**
    1.  Increase $f_s$.
    2.  Use an **anti-aliasing filter** (low-pass filter) before sampling, with a cutoff frequency $\le f_s/2$.

---

### Practice Questions:

1.  **(CO1, CO2)** A continuous-time signal is given by $x(t) = 5\cos(200\pi t) + 2\sin(500\pi t)$.
    a) What is the maximum frequency component ($f_M$) in $x(t)$?
    b) If this signal is impulse train sampled with a sampling period $T_s = 1/400$ seconds, what is the sampling frequency $f_s$?
    c) Would aliasing occur if this signal is sampled at $f_s = 200$ Hz? Explain why or why not.
    d) What is the minimum sampling frequency required to avoid aliasing?

2.  **(CO1, CO2)** Consider the signal $x(t) = e^{-at}u(t)$ for $a>0$.
    a) Find the Fourier Transform $X(\omega)$.
    b) Is this signal band-limited? Explain.
    c) If we were to sample this signal, what would be the theoretical problem with reconstruction if the sampling rate is too low?

3.  **(CO1, CO2, CO3)** A signal $x(t)$ has a Fourier Transform $X(\omega)$ that is non-zero only between $\omega = -500$ rad/s and $\omega = 500$ rad/s.
    a) What is the maximum frequency $f_M$ in Hz?
    b) What is the Nyquist rate in Hz and rad/s?
    c) If the signal is sampled at $f_s = 200$ Hz, what frequencies will alias into the baseband (0 to 100 Hz)?
    d) What is the sampled-time signal $x[n]$ if the original signal was $x(t) = \cos(600\pi t)$ and sampled at $f_s = 400$ Hz? What is the apparent frequency of the sampled signal?

---

### Answers to Practice Questions:

1.  **Solution:**
    $x(t) = 5\cos(200\pi t) + 2\sin(500\pi t)$
    The angular frequencies are $200\pi$ rad/s and $500\pi$ rad/s.
    The corresponding frequencies in Hz are:
    For $200\pi$ rad/s: $f_1 = (200\pi)/(2\pi) = 100$ Hz
    For $500\pi$ rad/s: $f_2 = (500\pi)/(2\pi) = 250$ Hz

    a) The maximum frequency component ($f_M$) is the highest frequency present in the signal, which is **250 Hz**.

    b) The sampling period is $T_s = 1/400$ seconds.
    The sampling frequency $f_s = 1/T_s = 1 / (1/400) = **400 Hz**.

    c) The Nyquist rate is $2 \times f_M = 2 \times 250$ Hz $= 500$ Hz.
    Since the sampling frequency $f_s = 400$ Hz is less than the Nyquist rate of 500 Hz, **aliasing will occur**. The frequency component at 250 Hz will be folded back into the baseband.

    d) The minimum sampling frequency required to avoid aliasing is the Nyquist rate, which is **500 Hz**.

2.  **Solution:**
    $x(t) = e^{-at}u(t)$ for $a>0$.
    a) The Fourier Transform is $X(\omega) = \mathcal{F}\{e^{-at}u(t)\} = \frac{1}{a + j\omega}$.

    b) This signal is **not band-limited**. The Fourier Transform $X(\omega) = \frac{1}{a + j\omega}$ is non-zero for all frequencies $\omega$. As $|\omega| \to \infty$, $|X(\omega)| \to 0$, but it never reaches exactly zero. This is characteristic of causal exponential signals.

    c) If the signal is sampled, the theoretical problem with reconstruction is that **aliasing will always occur** because the signal is not band-limited. No matter how high the sampling rate is, there will always be spectral components that can alias. In practice, for non-band-limited signals, an anti-aliasing filter is used to limit the bandwidth to a practical range before sampling.

3.  **Solution:**
    a) The Fourier Transform $X(\omega)$ is non-zero between $\omega = -500$ rad/s and $\omega = 500$ rad/s. The maximum angular frequency is $\omega_M = 500$ rad/s.
    The maximum frequency $f_M$ in Hz is $\omega_M / (2\pi) = 500 / (2\pi) \approx \mathbf{159.15}$ Hz.

    b) The Nyquist rate in Hz is $2 \times f_M = 2 \times (500 / (2\pi)) = 500 / \pi \approx \mathbf{318.3}$ Hz.
    The Nyquist rate in rad/s is $2 \times \omega_M = 2 \times 500 = \mathbf{1000}$ rad/s.

    c) The sampling frequency is $f_s = 200$ Hz. The Nyquist frequency is $f_s/2 = 100$ Hz.
    The original signal's spectrum extends up to $159.15$ Hz. Since $159.15 > 100$, aliasing will occur.
    Frequencies in $x(t)$ above $f_s/2 = 100$ Hz will alias.
    The frequency component at 150 Hz (which is $159.15$ in this case) will alias.
    The aliased frequency $f_{alias}$ for a frequency $f > f_s/2$ is given by $|f - kf_s|$, where $k$ is an integer chosen such that $|f - kf_s| \le f_s/2$.
    For $f = 150$ Hz and $f_s = 200$ Hz:
    If $k=1$, $f_{alias} = |150 - 1 \times 200| = |-50| = 50$ Hz.
    So, the frequency component around 150 Hz will alias to **50 Hz**.

    d) The original signal is $x(t) = \cos(600\pi t)$. The frequency is $f_0 = (600\pi)/(2\pi) = 300$ Hz.
    The sampling frequency is $f_s = 400$ Hz.
    The sampled-time signal is $x[n] = x(nT_s) = \cos(2\pi f_0 nT_s) = \cos(2\pi \times 300 \times n \times (1/400))$.
    $x[n] = \cos(600\pi n / 400) = \cos(3\pi n / 2)$.
    The apparent frequency in the discrete-time signal is given by $\omega = 2\pi f_{discrete}$. Here, the discrete-time frequency is $3\pi/2$ radians per sample.
    The apparent frequency in Hz is $f_{discrete} = (3\pi/2) / (2\pi) = 3/4$ Hz.
    However, frequencies in DT are usually represented in the range $[-\pi, \pi]$.
    The sampled signal is $x[n] = \cos(3\pi n/2)$.
    The angle $3\pi/2$ is equivalent to $3\pi/2 - 2\pi = -\pi/2$ radians per sample.
    So, $x[n] = \cos(-\pi n/2) = \cos(\pi n/2)$.
    The apparent frequency is $\omega = \pi/2$ rad/sample.
    In Hz, this corresponds to $f = (\pi/2) / (2\pi) = 1/4$ Hz.
    Alternatively, the original frequency $f_0=300$ Hz and sampling frequency $f_s=400$ Hz. The Nyquist frequency is $f_s/2 = 200$ Hz. Since $300 > 200$, aliasing occurs.
    The aliased frequency is $|f_0 - kf_s|$ for some integer $k$ such that $|f_0 - kf_s| \le f_s/2$.
    Let $k=1$. $|300 - 1 \times 400| = |-100| = 100$ Hz. This is $\le 200$ Hz.
    So the aliased frequency is **100 Hz**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
