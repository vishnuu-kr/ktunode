---
title: "Shannon-Hartley theorem (with proof)"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 2: Channel Capacity of AWGN Channel"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed04"
status: "completed"
scrapedAt: "2026-05-23T17:58:36.501Z"
---
# Advanced Communication Theory: Module 2 - Channel Capacity of AWGN Channel

## Topic: Shannon-Hartley Theorem (with Proof)

### 1. Introduction to Channel Capacity

Channel capacity is a fundamental concept in information theory, representing the maximum rate at which reliable communication can occur over a noisy channel. It quantifies the "bandwidth" of information that a channel can support.

**Key Concept:** **Channel Capacity ($C$)**

*   The maximum mutual information between the input and output of a channel, maximized over all possible input distributions.
*   Measured in bits per second (bps).

**Relevance to Course Outcomes:**

*   **CO1 (Information Theory Measures):** Understanding channel capacity directly builds upon understanding mutual information.
*   **CO4 (Wireless Communication Principles):** Channel capacity is a cornerstone for understanding the theoretical limits of wireless communication.

### 2. The Additive White Gaussian Noise (AWGN) Channel

The AWGN channel is a widely used mathematical model for communication channels that are affected by additive noise that is both "white" (meaning its power spectral density is flat across all frequencies) and "Gaussian" (meaning the noise amplitude follows a Gaussian probability distribution).

**Model:**

The output of the AWGN channel, $Y$, is related to the input, $X$, by:

$Y = X + N$

Where:
*   $X$: The transmitted signal (input).
*   $N$: The additive noise, where $N$ is a random variable with a Gaussian distribution, zero mean ($E[N] = 0$), and a variance of $\sigma^2$. In power-limited scenarios, the noise power is often represented by $N_0/2$ per Hz of bandwidth, so the total noise power over bandwidth $B$ is $N_0 B$.
*   $Y$: The received signal (output).

**Assumptions for the AWGN Channel:**

*   **Additive Noise:** The noise is simply added to the signal.
*   **White Noise:** The noise has a constant power spectral density.
*   **Gaussian Noise:** The noise follows a Gaussian probability distribution.
*   **Causality:** The output $Y(t)$ depends only on the input $X(t)$ and noise $N(t)$ at the same or earlier times.
*   **Memorylessness:** The noise at any given time instant is independent of the noise at any other time instant.

**Textbook Reference:**

*   **Goldsmith, W.C.:** Discusses AWGN channels as a fundamental model in wireless communication (Chapter 2).
*   **Haykin, S.:** Provides a detailed mathematical treatment of the AWGN channel in Digital Communication Systems.

### 3. The Shannon-Hartley Theorem

The Shannon-Hartley theorem provides the exact formula for the channel capacity of a band-limited AWGN channel. It establishes the maximum data rate that can be transmitted over such a channel with an arbitrarily small probability of error.

**Statement of the Theorem:**

The capacity $C$ of a band-limited AWGN channel with bandwidth $B$ (in Hertz) and a signal-to-noise ratio (SNR) of $S/N$ (where $S$ is the signal power and $N$ is the noise power) is given by:

$C = B \log_2 \left(1 + \frac{S}{N}\right)$

Where:
*   $C$: Channel Capacity (bits per second, bps)
*   $B$: Bandwidth of the channel (Hertz, Hz)
*   $S$: Average power of the transmitted signal (Watts)
*   $N$: Average power of the additive white Gaussian noise (Watts)
*   $\frac{S}{N}$: Signal-to-Noise Ratio (dimensionless)

**Derivation and Key Concepts Leading to the Theorem:**

The theorem arises from the concept of mutual information and its maximization over the input distribution.

**Mutual Information ($I(X;Y)$):**

Mutual information quantifies the amount of information that one random variable contains about another. For a channel, it measures how much information about the transmitted signal $X$ is gained by observing the received signal $Y$.

$I(X;Y) = H(Y) - H(Y|X)$

Where:
*   $H(Y)$: Entropy of the received signal $Y$.
*   $H(Y|X)$: Conditional entropy of $Y$ given $X$, representing the uncertainty remaining in $Y$ after $X$ is known (i.e., the uncertainty due to noise).

**Relationship to Course Outcomes:**

*   **CO1 (Information Theory Measures):** Directly uses entropy and mutual information.

**Maximizing Mutual Information:**

To find the channel capacity, we need to find the input distribution for $X$ that maximizes $I(X;Y)$. For the AWGN channel, it is known that the mutual information is maximized when the input $X$ is also a Gaussian random variable, with zero mean and variance $\sigma_X^2$.

**The Noise Variance and SNR:**

In the AWGN channel, the noise $N$ is Gaussian with zero mean and variance $\sigma_N^2$. The received signal is $Y = X + N$. If $X$ is Gaussian with variance $\sigma_X^2$, then $Y$ is also Gaussian with variance $\sigma_Y^2 = \sigma_X^2 + \sigma_N^2$.

The signal power is represented by $S = E[X^2]$ (assuming zero mean, so $E[X]=0$) and noise power by $N = E[N^2]$ (assuming zero mean, so $N = \sigma_N^2$). Thus, $S = \sigma_X^2$.

The SNR is typically defined as $\frac{S}{N} = \frac{\sigma_X^2}{\sigma_N^2}$.

**Calculating $I(X;Y)$ for Gaussian Inputs and Outputs:**

For a Gaussian $X$ and a Gaussian noise channel, the mutual information can be expressed as:

$I(X;Y) = \frac{1}{2} \log_2 \left(1 + \frac{\sigma_X^2}{\sigma_N^2}\right)$

**Important Note:** The factor of 1/2 arises from the differential entropy of Gaussian random variables.

**Connecting to Bandwidth ($B$):**

The Shannon-Hartley theorem relates this to the bandwidth $B$. When we consider a band-limited AWGN channel, the noise power $N$ in a bandwidth $B$ is given by $N = N_0 B$, where $N_0$ is the noise power spectral density (typically Watts/Hz).

So, the SNR in terms of bandwidth is $\frac{S}{N_0 B}$.

Substituting this into the mutual information formula for the capacity, we get the Shannon-Hartley theorem:

$C = B \log_2 \left(1 + \frac{S}{N_0 B}\right)$

This is the form of the Shannon-Hartley theorem for a band-limited AWGN channel.

**Textbook Reference:**

*   **Cover & Thomas, Elements of Information Theory:** Chapter 7 provides a comprehensive treatment of channel capacity, including the AWGN channel and the derivation of the Shannon-Hartley theorem.
*   **Goldsmith, W.C.:** Derives the Shannon-Hartley theorem and discusses its implications for wireless communication systems.

### 4. Proof of the Shannon-Hartley Theorem

The proof involves showing that the mutual information for a band-limited AWGN channel is maximized by a Gaussian input and then using the formula for mutual information between two Gaussian random variables. This is a somewhat involved proof, typically covered in detail in advanced information theory texts. Here's a simplified outline of the key steps, drawing from the principles presented in Cover & Thomas.

**Goal:** Prove $C = B \log_2 \left(1 + \frac{S}{N_0 B}\right)$ for a band-limited AWGN channel.

**Key Tools:**

1.  **Mutual Information Definition:** $I(X;Y) = H(Y) - H(Y|X)$
2.  **Channel Model:** $Y = X + N$, where $N$ is AWGN.
3.  **Maximizing Mutual Information:** For a continuous channel, $I(X;Y)$ is maximized when $X$ is Gaussian.
4.  **Differential Entropy of Gaussian:** For a Gaussian random variable $Z$ with variance $\sigma_Z^2$, $h(Z) = \frac{1}{2} \log_2(2\pi e \sigma_Z^2)$.
5.  **Mutual Information for Gaussian Variables:** If $X$ and $Y$ are jointly Gaussian, $I(X;Y) = \frac{1}{2} \log_2(1 + \text{SNR})$.

**Proof Outline:**

**Step 1: Consider a Band-Limited AWGN Channel and its Capacity**

The theorem applies to a channel that is band-limited to $B$ Hz and has additive white Gaussian noise with power spectral density $N_0/2$ on each side of the band (total noise power $N = N_0 B$).

**Step 2: Relate Channel Capacity to Mutual Information**

The capacity $C$ is the maximum of the mutual information $I(X;Y)$ over all valid input distributions for $X$:

$C = \max_{P_X} I(X;Y)$

**Step 3: Show that $I(X;Y)$ is Maximized by a Gaussian Input $X$**

*   **Assume an input $X$ with finite average power $S = E[X^2]$.** This is a constraint on the input.
*   **The AWGN channel has noise $N$ which is Gaussian.** The conditional distribution of $Y$ given $X$ is $p(y|x) = \mathcal{N}(x, \sigma_N^2)$, where $\sigma_N^2$ is the noise variance.
*   **The conditional entropy $H(Y|X)$ is minimized when $Y$ is Gaussian.** Specifically, $H(Y|X) = H(X+N|X) = H(N|X)$. Since $N$ is independent of $X$, $H(N|X) = H(N)$. The entropy of a Gaussian random variable $N$ with variance $\sigma_N^2$ is $H(N) = \frac{1}{2} \log_2(2\pi e \sigma_N^2)$. This value is independent of $X$.
*   **The total entropy $H(Y)$ is maximized when $Y$ is Gaussian.** For a fixed variance $\sigma_Y^2$, the differential entropy is maximized by a Gaussian distribution. Given $Y = X + N$, and assuming $X$ and $N$ are independent, $\sigma_Y^2 = \sigma_X^2 + \sigma_N^2$.
*   **Maximizing $I(X;Y) = H(Y) - H(Y|X)$:** To maximize this, we need to maximize $H(Y)$ and minimize $H(Y|X)$. $H(Y|X)$ is fixed by the noise. So, we need to maximize $H(Y)$. This occurs when $Y$ is Gaussian. For $Y$ to be Gaussian, given the additive Gaussian noise, the input $X$ must also be Gaussian.
*   **Constraint on Input Power:** The input $X$ is constrained by its average power $S = E[X^2]$. For a Gaussian distribution with zero mean, $S = \sigma_X^2$. Therefore, the input $X$ should be a Gaussian random variable with mean 0 and variance $S$.

**Step 4: Calculate Mutual Information with Gaussian Input**

With $X \sim \mathcal{N}(0, S)$ and $N \sim \mathcal{N}(0, N)$, $Y = X+N$. Then $Y \sim \mathcal{N}(0, S+N)$.
The mutual information is:

$I(X;Y) = H(Y) - H(Y|X)$

$H(Y) = \frac{1}{2} \log_2(2\pi e \sigma_Y^2) = \frac{1}{2} \log_2(2\pi e (S+N))$
$H(Y|X) = H(N|X) = H(N) = \frac{1}{2} \log_2(2\pi e \sigma_N^2) = \frac{1}{2} \log_2(2\pi e N)$

$I(X;Y) = \frac{1}{2} \log_2(2\pi e (S+N)) - \frac{1}{2} \log_2(2\pi e N)$
$I(X;Y) = \frac{1}{2} \log_2\left(\frac{2\pi e (S+N)}{2\pi e N}\right)$
$I(X;Y) = \frac{1}{2} \log_2\left(\frac{S+N}{N}\right)$
$I(X;Y) = \frac{1}{2} \log_2\left(1 + \frac{S}{N}\right)$

**Step 5: Incorporate Bandwidth $B$**

The noise power in a band-limited channel of bandwidth $B$ is $N = N_0 B$. The SNR is $\frac{S}{N_0 B}$.
Substituting this into the expression for mutual information:

$I(X;Y) = \frac{1}{2} \log_2 \left(1 + \frac{S}{N_0 B}\right)$

This mutual information is achieved by a Gaussian input with power $S$. Since capacity is the *maximum* mutual information, and we have found the input distribution that achieves the maximum for a continuous channel (Gaussian), this expression represents the capacity.

Therefore, $C = B \log_2 \left(1 + \frac{S}{N_0 B}\right)$.

**Textbook Reference:**

*   **Cover & Thomas, Elements of Information Theory (Chapter 7):** This is the primary source for a rigorous proof. It discusses the use of differential entropy for Gaussian variables and the maximization of mutual information under power constraints.
*   **Tse & Viswanath, Fundamentals of Wireless Communication:** Provides a clear explanation of the Shannon-Hartley theorem and its implications, often presenting the derivation in a more accessible way for wireless engineers.

### 5. Interpretation and Implications of the Shannon-Hartley Theorem

The Shannon-Hartley theorem has profound implications for communication system design.

**Key Interpretations:**

*   **Fundamental Limit:** It defines the absolute theoretical limit of reliable communication, regardless of the modulation or coding scheme used.
*   **Trade-off between Bandwidth and SNR:** The theorem shows that there is a fundamental trade-off between the bandwidth ($B$) and the signal-to-noise ratio ($S/N$).
    *   If SNR is high, capacity is high.
    *   If bandwidth is increased, capacity also increases.
    *   We can achieve a desired capacity by trading off bandwidth for SNR, or vice-versa.
*   **Achievability:** For any rate $R < C$, there exist coding and modulation schemes that can achieve arbitrarily low error probability.
*   **Unachievability:** For any rate $R > C$, it is impossible to achieve arbitrarily low error probability.

**Relationship to Course Outcomes:**

*   **CO1 (Information Theory Measures):** Reinforces the importance of mutual information as a measure of achievable transmission rates.
*   **CO4 (Wireless Communication Principles):** This theorem is the bedrock of understanding the ultimate performance limits of wireless links. It informs the design of systems to operate as close to this limit as possible.
*   **CO5 (Wireless Channel Models):** Highlights the performance implications of the AWGN channel model.

**Examples:**

*   **Example 1: Fixed Bandwidth and SNR**
    Consider a voice channel with $B = 3000$ Hz and an SNR of 1000.
    $C = 3000 \log_2 (1 + 1000) \approx 3000 \times 9.96 \approx 29880$ bps.
    This suggests that a reliable communication rate of approximately 30 kbps can be achieved.

*   **Example 2: Bandwidth Efficiency**
    The term $\frac{C}{B} = \log_2 \left(1 + \frac{S}{N}\right)$ is known as bandwidth efficiency (bits/sec/Hz).
    For the previous example, bandwidth efficiency is $\approx 9.96$ bits/sec/Hz.
    This means that for every Hz of bandwidth, we can reliably transmit about 10 bits per second if the SNR is 1000.

*   **Example 3: Shannon Limit for Voice**
    A typical telephone call requires about 3.4 kHz of bandwidth (e.g., 300 Hz to 3.7 kHz). If we assume a high SNR (e.g., $S/N = 1000$),
    $C = 3.4 \times 10^3 \log_2(1+1000) \approx 3.4 \times 10^3 \times 9.96 \approx 33864$ bps.
    This indicates that a voice signal can be transmitted digitally at very high quality, well above the original analog bandwidth, given sufficient SNR.

**Textbook Reference:**

*   **Rappaport, T. S., Wireless Communication: Principles and Practice:** Chapter 3 discusses channel capacity and its practical implications in wireless systems, including the trade-off between bandwidth and SNR.
*   **Haykin, S., Communication Systems:** Provides interpretations and examples related to the Shannon-Hartley theorem.

### 6. Practical Considerations and Relation to Modern Systems

While the Shannon-Hartley theorem provides a theoretical limit, achieving it in practice is challenging.

**Key Considerations:**

*   **Coding and Modulation Schemes:** Modern communication systems use advanced error-correction codes (e.g., Turbo codes, LDPC codes) and sophisticated modulation techniques (e.g., QAM, OFDM) to approach the Shannon limit.
*   **Complexity:** Achieving rates close to capacity often requires very complex encoding and decoding algorithms, which can be computationally intensive.
*   **AWGN is an Idealization:** Real-world wireless channels often experience fading, interference, and non-linearities, which deviate from the simple AWGN model. However, the AWGN channel serves as a fundamental baseline.
*   **Error Exponent:** The Shannon-Hartley theorem guarantees *arbitrarily small* error probability for rates below capacity. The rate at which the error probability decreases as the rate approaches capacity from below is described by the *error exponent*. Systems that perform well are said to have a good error exponent.

**Relationship to Course Outcomes:**

*   **CO3 (Error Control Coding):** The theorem motivates the need for powerful error control coding techniques to approach the capacity.
*   **CO4 (Wireless Communication Principles):** Understanding the Shannon limit guides the design of wireless systems to be spectrally efficient and power-efficient.
*   **CO6 (Diversity and Equalization):** While the Shannon-Hartley theorem assumes a static AWGN channel, diversity and equalization techniques are crucial for mitigating the effects of fading and interference in real wireless channels, allowing systems to operate closer to their theoretical capacity in non-ideal conditions.

**Textbook Reference:**

*   **Lin & Costello, Error Control Coding:** Discusses coding techniques designed to approach the Shannon limit.
*   **Molisch, A. F., Wireless Communications:** Covers the practical aspects of wireless system design, including how various techniques aim to approach channel capacity in the face of channel impairments.

### 7. Practice Questions and Answers

**Question 1:**
What is the channel capacity of an AWGN channel with a bandwidth of 1 MHz and a signal-to-noise ratio of 60 dB?

**Answer 1:**
First, convert SNR from dB to a linear ratio:
$SNR_{linear} = 10^{SNR_{dB}/10} = 10^{60/10} = 10^6$.
Bandwidth $B = 1$ MHz $= 1 \times 10^6$ Hz.

Using the Shannon-Hartley theorem:
$C = B \log_2 (1 + \text{SNR})$
$C = (1 \times 10^6) \log_2 (1 + 10^6)$
$C \approx (1 \times 10^6) \log_2 (10^6)$
$C \approx (1 \times 10^6) \times \frac{\log_{10}(10^6)}{\log_{10}(2)}$
$C \approx (1 \times 10^6) \times \frac{6}{0.30103}$
$C \approx 1.993 \times 10^7$ bits/sec (bps) or 19.93 Mbps.

**Question 2:**
If the capacity of a communication channel is 50 Mbps and its bandwidth is 10 MHz, what is the required SNR (in dB)?

**Answer 2:**
$C = B \log_2 (1 + \text{SNR})$
$50 \times 10^6 = 10 \times 10^6 \log_2 (1 + \text{SNR})$
$5 = \log_2 (1 + \text{SNR})$

To solve for SNR, convert to an exponential form:
$1 + \text{SNR} = 2^5$
$1 + \text{SNR} = 32$
$\text{SNR} = 31$

Now, convert SNR to dB:
$SNR_{dB} = 10 \log_{10}(\text{SNR})$
$SNR_{dB} = 10 \log_{10}(31)$
$SNR_{dB} \approx 10 \times 1.4914$
$SNR_{dB} \approx 14.91$ dB.

**Question 3:**
Explain the trade-off between bandwidth and SNR for a fixed channel capacity, as described by the Shannon-Hartley theorem.

**Answer 3:**
The Shannon-Hartley theorem states that $C = B \log_2(1 + S/N)$. If we fix the capacity $C$, we can see a direct trade-off between bandwidth $B$ and the signal-to-noise ratio $S/N$.

*   **Increasing Bandwidth ($B$):** If we increase the bandwidth $B$, the term $\log_2(1 + S/N)$ must decrease to keep $C$ constant. This means the SNR $(S/N)$ must decrease. Thus, we can achieve the same capacity with a lower SNR if we have more bandwidth.
*   **Increasing SNR ($S/N$):** Conversely, if we increase the SNR, the term $\log_2(1 + S/N)$ increases. To maintain a constant capacity $C$, the bandwidth $B$ must decrease. Thus, we can achieve the same capacity with less bandwidth if we have a higher SNR.

This trade-off is fundamental in communication system design, allowing engineers to optimize for available spectrum (bandwidth) or power (related to SNR).

**Question 4:**
What is the theoretical limit for reliable communication over an AWGN channel?
a) The bit error rate (BER).
b) The data rate in bits per second (bps).
c) The bandwidth efficiency in bits/sec/Hz.
d) The channel capacity.

**Answer 4:**
d) The channel capacity.
The channel capacity, as defined by the Shannon-Hartley theorem, is the theoretical maximum rate for reliable communication.

### 8. Important Points to Remember

*   **Shannon-Hartley Theorem Formula:** $C = B \log_2 (1 + S/N)$ for a band-limited AWGN channel.
*   **AWGN Channel:** $Y = X + N$, where $N$ is additive, white, and Gaussian.
*   **Capacity is a Limit:** It's the *maximum* achievable rate with arbitrarily small error probability.
*   **Trade-off:** Bandwidth and SNR can be traded against each other to achieve a desired capacity.
*   **Gaussian Input Maximizes Capacity:** For the AWGN channel, a Gaussian input signal distribution maximizes mutual information, thus achieving capacity.
*   **Practical Systems Aim to Approach Capacity:** Advanced coding and modulation are used to get closer to this theoretical limit.
*   **Bandwidth Efficiency:** $\frac{C}{B} = \log_2 (1 + S/N)$ quantifies how efficiently bandwidth is used.

### 9. Conclusion

The Shannon-Hartley theorem is a foundational result in communication theory. It provides the ultimate limit on the rate of reliable information transmission over a noisy channel and highlights the fundamental trade-off between bandwidth and signal-to-noise ratio. Understanding this theorem is crucial for designing efficient and high-performance communication systems, including modern wireless networks. While achieving this limit in practice requires sophisticated techniques, it serves as the guiding principle for system optimization.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
