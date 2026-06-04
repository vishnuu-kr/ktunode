---
title: "Mathematical model of ISI"
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 3: Baseband data transmission of digital data through AWGN channel"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe90b"
status: "completed"
scrapedAt: "2026-05-23T17:52:55.478Z"
---
# Module 3: Baseband Data Transmission through AWGN Channel

## Topic: Mathematical Model of Intersymbol Interference (ISI)

**Course Outcomes Addressed:**

*   **CO3:** Analyze the baseband transmission of digital data through AWGN channel (Knowledge Level: K3)

**Learning Outcomes Covered:**

This section will focus on understanding the mathematical origins and effects of ISI in baseband digital communication systems.

---

### 1. Introduction to ISI

**Definition:** Intersymbol Interference (ISI) is a phenomenon in digital communication where the pulse from one symbol interferes with the adjacent symbols. This occurs when the transmitted pulse does not decay to zero before the next pulse is transmitted, especially at higher data rates or in the presence of channel distortions.

**Impact:** ISI corrupts the received signal, making it difficult for the receiver to correctly detect the intended symbols. It is a major limiting factor in achieving high data rates and reliable communication.

**Why it happens in Baseband Transmission:**
In baseband transmission, digital data is represented by a sequence of pulses. The characteristics of these pulses and the channel's frequency response can cause the tail of a pulse to extend into the time interval allocated for subsequent pulses.

---

### 2. Mathematical Modeling of ISI

To understand ISI mathematically, we need to consider the pulse shape, the channel's impulse response, and the sampling process at the receiver.

#### 2.1 The Transmitted Signal

Let the digital data be represented by a sequence of binary symbols $a_k$, where $a_k \in \{+1, -1\}$ (for polar signaling) or $a_k \in \{0, 1\}$ (for unipolar signaling).

The transmitted baseband signal $s(t)$ can be expressed as a superposition of these pulses, shaped by a pulse-shaping filter $p(t)$:

$s(t) = \sum_{k=-\infty}^{\infty} a_k p(t - kT)$

where:
*   $a_k$ is the amplitude of the $k$-th symbol.
*   $p(t)$ is the pulse-shaping waveform.
*   $T$ is the symbol duration (reciprocal of the symbol rate).

**Example:** For a simple rectangular pulse shape, $p(t) = 1$ for $0 \le t < T$ and $0$ otherwise.

---

#### 2.2 The Channel Model

In this module, we are considering an **Additive White Gaussian Noise (AWGN) channel**. The channel is characterized by its impulse response $c(t)$.

The signal at the output of the channel, before noise is added, is the convolution of the transmitted signal $s(t)$ with the channel's impulse response $c(t)$:

$x(t) = s(t) * c(t)$

Substituting the expression for $s(t)$:

$x(t) = \sum_{k=-\infty}^{\infty} a_k p(t - kT) * c(t)$

Using the associative property of convolution:

$x(t) = \sum_{k=-\infty}^{\infty} a_k [p(t) * c(t)] (t - kT)$

Let $g(t) = p(t) * c(t)$ be the **overall channel impulse response**, which includes the pulse-shaping filter and the channel itself.

So, the signal at the channel output is:

$x(t) = \sum_{k=-\infty}^{\infty} a_k g(t - kT)$

---

#### 2.3 The Received Signal and ISI

The received signal $y(t)$ at the input of the receiver is the channel output corrupted by AWGN noise $n(t)$:

$y(t) = x(t) + n(t)$

$y(t) = \sum_{k=-\infty}^{\infty} a_k g(t - kT) + n(t)$

At the receiver, sampling is typically performed at the symbol rate, usually at the symbol intervals $t = nT$. The sampled value $y(nT)$ is:

$y(nT) = \sum_{k=-\infty}^{\infty} a_k g(nT - kT) + n(nT)$

$y(nT) = \sum_{k=-\infty}^{\infty} a_k g((n-k)T) + n(nT)$

Let $g_m = g(mT)$ be the sampled values of the overall channel impulse response. Then, the sampled received signal is:

$y(nT) = \sum_{k=-\infty}^{\infty} a_k g_{(n-k)} + n(nT)$

Expanding this sum for a particular sampling instant $t = nT$:

$y(nT) = a_n g_0 + \sum_{k \ne n} a_k g_{(n-k)} + n(nT)$

The term $a_n g_0$ represents the desired signal component from the $n$-th symbol.
The term $\sum_{k \ne n} a_k g_{(n-k)}$ represents the **Intersymbol Interference (ISI)**.

**Key Insight:** ISI arises from the contributions of past and future symbols ($a_k$ where $k \ne n$) to the current sampling instant $nT$, mediated by the sampled impulse response of the combined transmit filter and channel ($g_{(n-k)}$).

---

### 3. Conditions for Zero ISI

**Nyquist Criterion for Zero ISI:**
The Nyquist criterion provides conditions under which ISI can be eliminated at the sampling instants. For zero ISI at $t = nT$, the overall channel impulse response $g(t)$ must satisfy:

$g(nT) = \begin{cases} A & \text{for } n = 0 \\ 0 & \text{for } n = \pm 1, \pm 2, \dots \end{cases}$

where $A$ is a non-zero constant representing the desired signal amplitude at the sampling instant.

**In the frequency domain:** This condition translates to the Fourier Transform of $g(t)$, denoted by $G(f)$, having a specific shape. If $g(t)$ is represented by its sampled values $g(nT)$, the condition for zero ISI at $t=nT$ is that the sum of the sampled impulse response values at all other integer multiples of $T$ must be zero.

A more practical approach uses the **Nyquist criterion in the frequency domain**:
For zero ISI, the magnitude response of the overall system $G(f)$ must satisfy:

$\sum_{k=-\infty}^{\infty} G(f + k/T) = G(0)$ for all $f$

This condition implies that the shifted versions of $G(f)$ (shifted by multiples of the symbol rate $1/T$) add up to a constant value $G(0)$ across the entire frequency spectrum. This is equivalent to saying that $G(f)$ has a "flat top" when sampled at intervals of $1/T$.

**Ideal Nyquist Channel:** An ideal Nyquist channel has a frequency response $G(f)$ that satisfies the condition. A common example is the **raised-cosine filter** frequency response.

---

### 4. Types of ISI and Their Effects

*   **Positive ISI:** When the interfering signal adds to the desired signal, increasing its amplitude.
*   **Negative ISI:** When the interfering signal subtracts from the desired signal, decreasing its amplitude.

The presence of ISI leads to:
*   **Increased Bit Error Rate (BER):** The decision circuit at the receiver might make incorrect decisions due to the corrupted sample values.
*   **Degradation of Signal Quality:** Even in the absence of noise, ISI can cause errors.

---

### 5. Mathematical Measure of ISI

While zero ISI is ideal, it is often difficult to achieve perfectly in practice. We can quantify the amount of ISI.

Let $y(nT)$ be the sampled received signal at time $nT$.
$y(nT) = a_n g_0 + \text{ISI}_n + n(nT)$

where $\text{ISI}_n = \sum_{k \ne n} a_k g_{(n-k)}$.

The ISI term $\text{ISI}_n$ is a random variable because it depends on the previous and future symbols $a_k$, which are random.

**Mean Squared ISI:** A common measure is the mean squared ISI, averaged over all possible sequences of transmitted symbols.
For binary antipodal signaling ($a_k \in \{-1, +1\}$ with equal probability $P(a_k=+1) = P(a_k=-1) = 1/2$), the mean squared ISI at the $n$-th sampling instant is:

$E[\text{ISI}_n^2] = E\left[\left(\sum_{k \ne n} a_k g_{(n-k)}\right)^2\right]$

Assuming $a_k$ are independent and $E[a_k^2] = 1$ for antipodal signaling:

$E[\text{ISI}_n^2] = \sum_{k \ne n} E[a_k^2] g_{(n-k)}^2$
$E[\text{ISI}_n^2] = \sum_{k \ne n} g_{(n-k)}^2$

This sum represents the total power of the interference at the $n$-th sampling instant.

---

### 6. Effect of Channel Noise and ISI

In a real AWGN channel, the received signal at the sampling instant $nT$ is:

$y(nT) = a_n g_0 + \sum_{k \ne n} a_k g_{(n-k)} + n(nT)$

The decision variable for the $n$-th symbol is $y(nT)$. The receiver compares $y(nT)$ with a threshold (usually 0 for bipolar signaling) to decide if $a_n$ was +1 or -1.

Errors occur when the total interference (ISI + noise) causes the sampled value to cross the decision threshold.

**Eye Diagram:** The eye diagram is a visual tool to assess the performance of a digital communication system in the presence of ISI and noise. It is created by superimposing all possible received pulses on the same graph, aligned at the symbol timing.
*   **Open eye:** Indicates low ISI and noise, leading to good performance.
*   **Closed eye:** Indicates significant ISI and/or noise, leading to poor performance.
*   **Eye opening:** The vertical opening of the eye represents the noise margin.
*   **Eye width:** The horizontal opening represents the timing margin.

---

### 7. Practical Considerations and Mitigation

*   **Pulse Shaping:** Using filters like the raised-cosine filter at the transmitter and/or receiver to shape the pulses and satisfy the Nyquist criterion (or a modified version for controlled ISI).
*   **Equalization:** Employing equalizers at the receiver to counteract the distortion introduced by the channel and reduce ISI. Linear equalizers (e.g., zero-forcing equalizer, minimum mean-square error equalizer) and decision-feedback equalizers (DFE) are common.
*   **Bandwidth:** Higher data rates and narrower channel bandwidths exacerbate ISI.

---

### Examples

**Example 1: Rectangular Pulses and a Channel with Limited Bandwidth**

Consider transmitting binary data with unit amplitude rectangular pulses of duration $T$.
$p(t) = 1$ for $0 \le t < T$, and $0$ otherwise.
$a_k \in \{+1, -1\}$.
$s(t) = \sum_{k=-\infty}^{\infty} a_k p(t - kT)$.

Suppose the channel is a simple low-pass filter. Even if the transmit pulse is ideal, the channel's limited bandwidth will distort it, potentially causing ISI.

Let's examine the received signal at $t = nT$:
$y(nT) = \sum_{k=-\infty}^{\infty} a_k g((n-k)T)$

If $g(t)$ is not zero at $t = \pm T, \pm 2T, \dots$, then ISI will be present. For instance, if $g(T) \ne 0$, the pulse from the previous symbol ($a_{n-1}$) will contribute to the received signal at time $nT$ through the term $a_{n-1} g(T)$.

**Example 2: Raised Cosine Pulse Shaping**

A raised-cosine filter is often used to achieve zero ISI. Its frequency response is given by:

$G(f) = \begin{cases} T & |f| \le \frac{1-\beta}{2T} \\ T \cos\left(\frac{\pi T}{2\beta}\left(|f| - \frac{1-\beta}{2T}\right)\right) & \frac{1-\beta}{2T} < |f| < \frac{1+\beta}{2T} \\ 0 & |f| \ge \frac{1+\beta}{2T} \end{cases}$

where $\beta$ is the roll-off factor ($0 \le \beta \le 1$).
A roll-off factor of $\beta = 0$ corresponds to a sinc pulse shape (ideal Nyquist), which has infinite duration.
A roll-off factor of $\beta = 1$ results in a Butterworth-like spectrum, which is more practical but causes more ISI.
For $\beta = 0.5$, the raised-cosine filter offers a good trade-off between bandwidth efficiency and ISI.

The condition $\sum_{k=-\infty}^{\infty} G(f + k/T) = T$ is satisfied for any raised-cosine filter, ensuring zero ISI at the sampling instants.

---

### Important Points to Remember

*   **ISI is caused by pulse overlap.** This happens when the channel or pulse shape causes the tails of transmitted pulses to extend into adjacent symbol intervals.
*   **Mathematical model:** The received signal at sampling instants $y(nT) = \sum a_k g_{(n-k)} + n(nT)$ clearly shows the desired signal component ($a_n g_0$) and the ISI component ($\sum_{k \ne n} a_k g_{(n-k)}$).
*   **Zero ISI Condition:** The Nyquist criterion (both time and frequency domain versions) specifies conditions for eliminating ISI.
*   **Raised Cosine Filters:** Commonly used to shape pulses for controlled ISI, offering a practical way to meet the Nyquist criterion.
*   **Eye Diagrams:** Essential for visualizing and assessing the impact of ISI and noise on system performance.
*   **Mitigation:** Equalization and careful pulse shaping are key techniques to combat ISI.

---

### Practice Questions

1.  Define Intersymbol Interference (ISI) and explain why it is a critical issue in digital communication systems.
2.  Derive the mathematical expression for the received signal at a sampling instant $t=nT$ in a baseband system with a general channel impulse response $g(t)$ and pulse shape $p(t)$.
3.  State the Nyquist criterion for zero ISI in both the time domain and the frequency domain.
4.  Describe the raised-cosine filter characteristic and how it helps in achieving zero ISI. What is the role of the roll-off factor $\beta$?
5.  What is an eye diagram? How does the presence of ISI affect the eye diagram, and what do the vertical and horizontal openings represent?

---

### Answers

1.  **Definition of ISI:** Intersymbol Interference (ISI) is the distortion of a digital signal in which one symbol interferes with subsequent symbols. This occurs when the transmitted pulse does not decay to zero sufficiently quickly before the arrival of the next pulse, especially at high data rates or in band-limited channels. **Importance:** ISI corrupts the received signal, making it difficult for the receiver to correctly identify the transmitted symbols, leading to increased bit errors and reduced system performance.

2.  The transmitted signal is $s(t) = \sum_{k=-\infty}^{\infty} a_k p(t - kT)$.
    The signal at the channel output is $x(t) = s(t) * c(t) = \sum_{k=-\infty}^{\infty} a_k [p(t) * c(t)] (t - kT)$.
    Let $g(t) = p(t) * c(t)$ be the overall channel impulse response.
    So, $x(t) = \sum_{k=-\infty}^{\infty} a_k g(t - kT)$.
    The received signal $y(t) = x(t) + n(t) = \sum_{k=-\infty}^{\infty} a_k g(t - kT) + n(t)$.
    At the sampling instant $t = nT$, the received signal is:
    $y(nT) = \sum_{k=-\infty}^{\infty} a_k g(nT - kT) + n(nT)$
    $y(nT) = \sum_{k=-\infty}^{\infty} a_k g((n-k)T) + n(nT)$
    Letting $g_m = g(mT)$, we get:
    $y(nT) = \sum_{k=-\infty}^{\infty} a_k g_{(n-k)} + n(nT)$
    $y(nT) = a_n g_0 + \sum_{k \ne n} a_k g_{(n-k)} + n(nT)$
    Here, $a_n g_0$ is the desired signal component, $\sum_{k \ne n} a_k g_{(n-k)}$ is the ISI component, and $n(nT)$ is the AWGN noise.

3.  **Time Domain Nyquist Criterion:** For zero ISI at the sampling instants $t = nT$, the overall channel impulse response $g(t)$ must satisfy $g(nT) = 0$ for all integers $n \ne 0$, and $g(0) \ne 0$.
    **Frequency Domain Nyquist Criterion:** The magnitude response $G(f)$ of the overall system must satisfy $\sum_{k=-\infty}^{\infty} G(f + k/T) = G(0)$ for all $f$. This implies that the sum of the shifted versions of $G(f)$ by multiples of the symbol rate $1/T$ must be a constant equal to $G(0)$.

4.  The raised-cosine filter is a widely used pulse-shaping filter that approximates the ideal Nyquist criterion. Its frequency response $G(f)$ has a characteristic shape that is flat in the main lobe and smoothly rolls off.
    The roll-off factor $\beta$ controls the trade-off between bandwidth efficiency and ISI.
    *   A smaller $\beta$ (closer to 0) results in a narrower transition band in the frequency domain, leading to higher bandwidth efficiency but a pulse that decays slower in the time domain, potentially causing more ISI if not perfectly implemented.
    *   A larger $\beta$ (closer to 1) results in a wider transition band, requiring more bandwidth but a pulse that decays faster, thus reducing ISI.
    The raised-cosine filter's frequency response satisfies the condition $\sum_{k=-\infty}^{\infty} G(f + k/T) = T$, ensuring zero ISI at the sampling instants for any $0 \le \beta \le 1$.

5.  **Eye Diagram:** An eye diagram is an oscilloscope display where different segments of the received digital signal are superimposed, aligned by the symbol clock. It is formed by displaying the received signal $y(t)$ over a time interval of $N \times T$, where $N$ is the number of symbols displayed.
    *   **Effect of ISI:** ISI causes the "eyes" to close. The tails of the pulses from preceding and succeeding symbols smear into the sampling interval of the current symbol.
    *   **Vertical Opening:** Represents the margin against noise. A larger vertical opening indicates better noise immunity. It is related to the amplitude difference between the desired signal and the interfering signal levels.
    *   **Horizontal Opening:** Represents the margin against timing jitter. A larger horizontal opening indicates better tolerance to clock recovery errors. It is related to the time interval over which the signal is relatively constant and above the decision threshold.

---
---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
