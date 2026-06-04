---
title: "Nyquist criterion for zero ISI"
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 3: Baseband data transmission of digital data through AWGN channel"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe90c"
status: "completed"
scrapedAt: "2026-05-23T17:52:56.187Z"
---
# Module 3: Baseband Data Transmission of Digital Data through AWGN Channel

## Topic: Nyquist Criterion for Zero ISI

### Learning Outcomes:

*   Understand the concept of Intersymbol Interference (ISI).
*   Identify the sources and consequences of ISI in digital communication systems.
*   Explain the conditions required to achieve zero ISI at the sampling instants.
*   Derive and understand the Nyquist criterion for zero ISI.
*   Analyze the role of the channel and the transmitter/receiver filters in mitigating ISI.
*   Apply the Nyquist criterion to design practical communication systems.

### Course Outcomes Alignment:

*   **CO3: Analyze the baseband transmission of digital data through AWGN channel (Knowledge Level: K3)**
    *   This topic directly addresses the analysis of baseband transmission by focusing on a critical factor (ISI) that degrades the performance in such systems. Understanding ISI and its mitigation is essential for analyzing the overall system performance.

### 1. Introduction to Intersymbol Interference (ISI)

#### 1.1 What is ISI?

Intersymbol Interference (ISI) occurs when the pulse from one symbol corrupts the signal of subsequent symbols at the sampling instants. This phenomenon is a major source of error in digital communication systems, particularly when transmitting digital data at high rates over bandlimited channels.

#### 1.2 Sources of ISI

*   **Bandlimited Channels:** Real-world communication channels have a limited bandwidth. When a digital signal, which is inherently non-bandlimited, is transmitted through such a channel, it gets filtered. This filtering process spreads the signal energy of a symbol beyond its intended time slot.
*   **Non-ideal Pulse Shaping:** Ideal rectangular pulses are not practical to generate and transmit. Practical pulse shaping filters used at the transmitter introduce spectral spreading, contributing to ISI.
*   **Timing Jitter:** Imperfect synchronization between the transmitter and receiver can lead to sampling at instants that are not the optimal decision points, thus increasing ISI.
*   **Multipath Propagation:** In wireless communication, signals can travel through multiple paths, arriving at the receiver at different times, causing delayed copies of symbols to interfere with subsequent symbols.

#### 1.3 Consequences of ISI

*   **Increased Bit Error Rate (BER):** ISI distorts the received signal, making it difficult for the receiver to correctly distinguish between different symbols. This leads to an increase in the probability of making a wrong decision, thus degrading the BER performance.
*   **Reduced Data Rate:** To combat ISI, designers often have to limit the symbol rate (or increase the pulse duration), which in turn limits the achievable data rate.

### 2. Baseband Pulse Shaping and Channel Response

Consider a baseband digital communication system where binary data symbols $a_k$ are transmitted. Each symbol $a_k$ (either +1 or -1 for binary signaling) is represented by a pulse $p(t)$. The transmitted signal $s(t)$ is the superposition of these pulses, typically expressed as:

$s(t) = \sum_{k=-\infty}^{\infty} a_k p(t - kT)$

where:
*   $a_k$ is the data symbol at time $k$.
*   $p(t)$ is the pulse shaping function.
*   $T$ is the symbol duration.

The transmitted signal $s(t)$ passes through a linear time-invariant (LTI) channel with impulse response $c(t)$. The signal received at the output of the channel is $r_c(t)$:

$r_c(t) = s(t) * c(t) = \sum_{k=-\infty}^{\infty} a_k p(t - kT) * c(t)$

Let the combined impulse response of the transmitter filter and the channel be $h(t)$:

$h(t) = p(t) * c(t)$

Then, the received signal becomes:

$r_c(t) = \sum_{k=-\infty}^{\infty} a_k h(t - kT)$

At the receiver, before sampling, the signal $r_c(t)$ is passed through a matched filter (or a suitable receiver filter) with impulse response $f(t)$. For optimal noise reduction in an AWGN channel, the receiver filter is typically matched to the transmitted pulse shape, i.e., $f(t) = p(-t)$. However, for ISI analysis, it's more convenient to consider the overall impulse response of the combined transmitter filter, channel, and receiver filter.

Let the overall impulse response of the system (transmitter filter, channel, and receiver filter) be $q(t)$:

$q(t) = p(t) * c(t) * f(t)$

The signal at the output of the receiver filter is:

$y(t) = r_c(t) * f(t) = \sum_{k=-\infty}^{\infty} a_k h(t - kT) * f(t)$
$y(t) = \sum_{k=-\infty}^{\infty} a_k q(t - kT)$

At the receiver, we sample $y(t)$ at specific time instants, ideally at the symbol rate. Let these sampling instants be $nT$, where $n$ is an integer.

The sampled signal is:

$y(nT) = \sum_{k=-\infty}^{\infty} a_k q(nT - kT) = \sum_{k=-\infty}^{\infty} a_k q((n-k)T)$

Let $t_n = nT$. The sampled value is $y(t_n) = \sum_{k=-\infty}^{\infty} a_k q(t_n - kT)$.

Let's re-index this summation by setting $m = n-k$. Then $k = n-m$.

$y(nT) = \sum_{m=-\infty}^{\infty} a_{n-m} q(mT)$

The term $a_n q(0)$ represents the desired signal component corresponding to the symbol $a_n$. The other terms, $a_{n-m} q(mT)$ for $m \neq 0$, represent the interference from other symbols.

The term $a_k q(nT - kT)$ is the contribution to the sample at time $nT$ from the symbol transmitted at time $kT$.

The sample at time $nT$, denoted as $y_n$, is:

$y_n = y(nT) = \sum_{k=-\infty}^{\infty} a_k q(nT - kT)$

The first term in this summation ($k=n$) represents the desired signal component: $a_n q(0)$.

The interference component, ISI, is the sum of all other terms:

$ISI_n = \sum_{k=-\infty, k \neq n}^{\infty} a_k q(nT - kT)$

$y_n = a_n q(0) + \sum_{k=-\infty, k \neq n}^{\infty} a_k q(nT - kT)$

For zero ISI at the sampling instants $nT$, the interference term must be zero for all $n$. This means that the sampled value $y_n$ should only depend on the desired symbol $a_n$.

$\sum_{k=-\infty, k \neq n}^{\infty} a_k q(nT - kT) = 0$ for all $n$.

This condition is satisfied if and only if $q(mT) = 0$ for all integers $m \neq 0$.

This is the **Nyquist Criterion for Zero ISI**.

### 3. The Nyquist Criterion for Zero ISI

The Nyquist criterion states that for zero ISI at the sampling instants $t=nT$, the overall system response $q(t)$ (formed by the transmitter filter, channel, and receiver filter) must satisfy the condition:

$q(nT) = \begin{cases} A & \text{for } n = 0 \\ 0 & \text{for } n = \pm 1, \pm 2, \dots \end{cases}$

where $A$ is a non-zero constant representing the amplitude of the desired signal component. Conventionally, $A$ is often chosen to be 1.

**In simpler terms:** The overall impulse response of the system, sampled at the symbol rate, must be zero at all sampling instants except for the one corresponding to the symbol being decoded.

#### 3.1 Implications of the Nyquist Criterion

*   **At the sampling instants ($t=nT$):**
    *   $q(0) = A$: This ensures that at the sampling instant for symbol $a_n$, the signal component due to $a_n$ is present and scaled by $A$.
    *   $q(T) = 0$, $q(-T) = 0$, $q(2T) = 0$, $q(-2T) = 0$, etc.: This means that at the sampling instant for symbol $a_n$, the contributions from all other symbols $a_{n-1}, a_{n+1}, a_{n-2}, a_{n+2}, \dots$ are zero.

*   **Why is this sufficient?**
    If $q(mT) = 0$ for $m \neq 0$, then the sampled output becomes:
    $y(nT) = \sum_{k=-\infty}^{\infty} a_k q(nT - kT)$
    Let $m = n-k$, so $k = n-m$.
    $y(nT) = \sum_{m=-\infty}^{\infty} a_{n-m} q(mT)$
    If $q(mT) = 0$ for $m \neq 0$, this sum reduces to:
    $y(nT) = a_{n-0} q(0T) = a_n q(0)$
    If we set $q(0) = A$, then $y(nT) = A a_n$.
    The receiver can then simply decide that the transmitted symbol was $a_n$ if $y(nT)$ is positive (assuming $A>0$ and $a_n=+1$) and $-a_n$ if $y(nT)$ is negative (assuming $A>0$ and $a_n=-1$). This decision process is free from ISI.

#### 3.2 Frequency Domain Interpretation (Parseval's Theorem / Convolution Theorem)

The Nyquist criterion can also be understood in the frequency domain. Let $Q(f)$ be the Fourier Transform of $q(t)$. The criterion states that the samples of $q(t)$ at $t=nT$ are related to the spectrum $Q(f)$ by the Poisson Summation Formula.

However, a more intuitive approach is to consider the condition for zero ISI in terms of the spectrum of the overall system. If the system's overall impulse response $q(t)$ has zeros at $nT$ for $n \neq 0$, this implies certain properties for its Fourier Transform $Q(f)$.

Consider the sampled version of $q(t)$, denoted by $\tilde{q}(t) = \sum_{n=-\infty}^{\infty} q(nT) \delta(t - nT)$.
The Fourier Transform of $\tilde{q}(t)$ is $\tilde{Q}(f) = \frac{1}{T} \sum_{k=-\infty}^{\infty} Q(f - \frac{k}{T})$. This represents a periodically replicated spectrum of $Q(f)$, spaced by the symbol rate $1/T$.

For zero ISI, we require $q(nT) = 0$ for $n \neq 0$. This condition is directly related to the shape of the overall system's frequency response $Q(f)$.

A more practical way to state the Nyquist criterion in the frequency domain is through the **Nyquist Condition for Zero ISI**:

The Fourier Transform $Q(f)$ of the overall system's impulse response $q(t)$ must satisfy:

$\sum_{k=-\infty}^{\infty} Q(f - \frac{k}{T}) = \text{constant}$ for all $f$.

This means that when the replicas of the spectrum $Q(f)$, spaced by $1/T$, are added up, they should form a constant spectrum. This ensures that the sampling process at $t=nT$ yields a value proportional to the desired symbol and no interference from other symbols.

**Intuitive explanation:** Imagine the spectrum $Q(f)$ is shaped such that when it's shifted by multiples of $1/T$ and added together, the resulting spectrum is flat. This flat spectrum, when inverse Fourier transformed, will give a time-domain signal $q(t)$ that has zeros at all $nT$ except $n=0$.

#### 3.3 The Raised Cosine Filter

While the Nyquist criterion can be satisfied by many different pulse shapes, the **raised cosine filter** is a popular and practical choice because it provides a trade-off between the symbol rate and the bandwidth required.

A raised cosine filter is characterized by its **roll-off factor**, denoted by $\alpha$, where $0 \le \alpha \le 1$. The roll-off factor determines how quickly the filter's frequency response rolls off from the baseband to the Nyquist frequency.

The frequency response of a Nyquist filter (which is often implemented as a raised cosine filter) is given by:

$Q(f) = \begin{cases}
1 & \text{for } |f| \le \frac{1-\alpha}{2T} \\
\frac{1}{2} \left[ 1 + \cos\left(\frac{\pi T}{\alpha} |f| - \frac{\pi}{2}\right) \right] & \text{for } \frac{1-\alpha}{2T} < |f| \le \frac{1+\alpha}{2T} \\
0 & \text{for } |f| > \frac{1+\alpha}{2T}
\end{cases}$

**Properties of the Raised Cosine Filter:**

*   **Bandwidth:** The $3$-dB bandwidth of the raised cosine filter is approximately $\frac{1+\alpha}{2T}$. The null-to-null bandwidth is $\frac{1+\alpha}{T}$. The minimum bandwidth required to achieve zero ISI at the symbol rate $1/T$ is $B = \frac{1}{2T}$ (when $\alpha = 0$, which is the ideal Nyquist filter or sinc pulse). The raised cosine filter achieves zero ISI at a symbol rate of $1/T$ within a bandwidth of $\frac{1+\alpha}{2T}$.

*   **Roll-off factor ($\alpha$):**
    *   $\alpha = 0$: This corresponds to an ideal rectangular filter in the frequency domain, which results in a sinc pulse ($p(t) = \frac{\sin(\pi t/T)}{\pi t/T}$) in the time domain. The sinc pulse satisfies the Nyquist criterion. However, the sinc pulse has a slow decay in the time domain, leading to significant ISI if the sampling instants are not perfectly accurate or if the channel is not perfectly matched. Also, the rectangular frequency response is not physically realizable.
    *   $\alpha = 1$: This corresponds to a cosine-squared roll-off. The bandwidth is maximized, and the time-domain response decays faster, making it more robust to timing errors.
    *   Intermediate values of $\alpha$: Provide a trade-off. Higher $\alpha$ means more bandwidth but better tolerance to timing jitter and less sensitivity to non-ideal channel characteristics.

**Example:**
If $T = 1$ ms (symbol rate $1/T = 1000$ symbols/sec), and we use a raised cosine filter with $\alpha = 0.5$:
*   The zero ISI bandwidth is $\frac{1+\alpha}{2T} = \frac{1+0.5}{2 \times 10^{-3}} = \frac{1.5}{2 \times 10^{-3}} = 750$ Hz.
*   The null-to-null bandwidth is $\frac{1+\alpha}{T} = \frac{1.5}{10^{-3}} = 1500$ Hz.

**Textbook References:**
*   **Haykin & Moher:** Discusses ISI extensively and introduces the Nyquist criterion, often using spectral flatness conditions. They also cover the raised cosine filter as a practical solution for achieving zero ISI.
*   **Lathi & Ding:** Provides a thorough mathematical derivation of the Nyquist criterion and its implications for pulse shaping. They often illustrate the frequency domain condition with graphical examples of the raised cosine spectrum.
*   **Proakis & Salehi:** Offers a rigorous treatment of ISI and its mitigation, with a focus on digital communication systems. They cover various pulse shaping techniques and their performance.

### 4. Achieving Zero ISI in Practice

The Nyquist criterion is a theoretical ideal. In practice, achieving perfect zero ISI is challenging due to several factors:

*   **Non-ideal Channel:** The channel characteristics $c(t)$ are often unknown or vary over time.
*   **Non-ideal Filters:** Both transmitter and receiver filters are physically realizable and cannot be perfect Nyquist filters (like sinc).
*   **Timing Jitter:** Imperfect synchronization can cause sampling at instants other than $nT$.
*   **Noise:** The AWGN channel adds noise, which can also cause errors.

#### 4.1 Partial Response Signaling (Non-Zero ISI)

When achieving zero ISI is not feasible, systems are designed to introduce a controlled amount of ISI. This is known as **partial response signaling**. The aim is to design the overall system response $q(t)$ such that $q(nT)$ are not all zero except at $n=0$, but the resulting error probability is still acceptable.

**Example:** Duobinary signaling is a form of partial response signaling where the overall system response has zeros at $n = \pm 2, \pm 3, \dots$ but not at $n = \pm 1$. This allows for a narrower bandwidth but requires a more complex receiver to decode the symbols due to the introduced ISI.

**Textbook Reference:**
*   **Lathi & Ding:** Often dedicates sections to partial response signaling as an extension of the zero ISI concepts.

#### 4.2 Equalization

When the channel itself introduces significant ISI, **equalizers** are used at the receiver to counteract the channel's distortion. Equalizers are filters designed to "undo" the channel's effect.

*   **Linear Equalizers:** Attempt to make the overall system response conform to the Nyquist criterion. Examples include:
    *   **Zero-Forcing (ZF) Equalizer:** Aims to completely eliminate ISI by forcing the overall response to have zeros at the sampling instants.
    *   **Minimum Mean-Square Error (MMSE) Equalizer:** Balances ISI reduction with noise enhancement, minimizing the mean-square error.
*   **Decision-Feedback Equalizers (DFE):** Use past decisions to cancel the ISI caused by previous symbols.

**Textbook References:**
*   **Haykin & Moher:** Provides a good introduction to equalization techniques.
*   **Proakis & Salehi:** Offers detailed mathematical analysis and design of various equalizers.

### 5. Practice Questions and Exercises

**Question 1:**
Define Intersymbol Interference (ISI) and explain its primary cause in digital communication systems.

**Question 2:**
State the Nyquist criterion for zero ISI in both time and frequency domains.

**Question 3:**
Consider an overall system impulse response $q(t)$ such that its samples at the symbol rate $1/T$ are:
$q(0) = 0.5$, $q(T) = 0.2$, $q(2T) = -0.1$, $q(-T) = 0.3$, $q(-2T) = -0.05$, and $q(nT) = 0$ for $|n| \ge 3$.
If the transmitted symbols are $a_0=1, a_1=-1, a_2=1, a_{-1}=1, a_{-2}=-1$, what is the sampled output $y(0)$ at time $t=0$? Is there zero ISI at $t=0$?

**Answer to Question 3:**
The sampled output at $t=0$ is given by $y(0) = \sum_{k=-\infty}^{\infty} a_k q(-kT)$.
$y(0) = a_0 q(0) + a_1 q(-T) + a_{-1} q(T) + a_2 q(-2T) + a_{-2} q(2T)$
$y(0) = (1)(0.5) + (-1)(0.3) + (1)(0.2) + (1)(-0.05) + (-1)(-0.1)$
$y(0) = 0.5 - 0.3 + 0.2 - 0.05 + 0.1$
$y(0) = 0.45$

Since the sampled output $y(0)$ is not solely proportional to $a_0$ (i.e., the sum of interference terms is not zero), there is **non-zero ISI** at $t=0$. The desired term is $a_0 q(0) = 1 \times 0.5 = 0.5$. The interference is $y(0) - a_0 q(0) = 0.45 - 0.5 = -0.05$.

**Question 4:**
What is the roll-off factor of a raised cosine filter? How does it affect the bandwidth and robustness to timing jitter?

**Answer to Question 4:**
The roll-off factor ($\alpha$) of a raised cosine filter determines the excess bandwidth beyond the Nyquist frequency ($1/2T$).
*   **Bandwidth:** A higher roll-off factor ($\alpha$) increases the bandwidth of the filter. The null-to-null bandwidth is $\frac{1+\alpha}{T}$.
*   **Robustness to Timing Jitter:** A higher roll-off factor makes the system more robust to timing jitter. This is because the samples of the overall impulse response $q(nT)$ are closer to zero for $n \neq 0$ and change more rapidly, meaning that small deviations in sampling time have a smaller relative impact on the ISI.

**Question 5:**
(Conceptual) Why is it generally impractical to use an ideal Nyquist filter ($\alpha=0$) in a real communication system?

**Answer to Question 5:**
An ideal Nyquist filter has a rectangular frequency response, which corresponds to a sinc pulse in the time domain. The sinc pulse decays very slowly (as $1/t$). This slow decay means that even small deviations in sampling time (timing jitter) can cause significant ISI. Furthermore, perfectly realizing a rectangular frequency response is not physically possible for a realizable filter. The raised cosine filter with $\alpha > 0$ offers a practical compromise.

### 6. Important Points to Remember

*   **ISI is a primary cause of errors** in high-speed digital transmission.
*   **Zero ISI** is achieved when the overall system response $q(t)$ has zeros at all sampling instants except the origin ($q(nT) = 0$ for $n \neq 0$).
*   The **Nyquist criterion** provides the necessary and sufficient conditions for zero ISI.
*   The **raised cosine filter** is a practical pulse shaping filter that allows for zero ISI with a controlled excess bandwidth, determined by the roll-off factor $\alpha$.
*   **Trade-off:** A higher roll-off factor ($\alpha$) leads to increased bandwidth but better tolerance to timing jitter and channel variations.
*   **Practical systems** often employ equalization to combat ISI introduced by non-ideal filters and channels.
*   **Partial response signaling** is used when zero ISI cannot be achieved, by introducing controlled ISI.

This comprehensive set of notes covers the fundamental concepts of the Nyquist criterion for zero ISI, its practical implications, and its relation to commonly used pulse shaping techniques like the raised cosine filter. The references provided by the textbooks will offer deeper theoretical insights and mathematical rigor.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
