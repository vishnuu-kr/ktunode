---
title: "Channel capacity"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 1: Entropy"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fecfa"
status: "completed"
scrapedAt: "2026-05-23T17:58:30.097Z"
---
# ADVANCED COMMUNICATION THEORY - Module 1: Entropy

## Topic: Channel Capacity

### 1. Introduction to Channel Capacity

Channel capacity is a fundamental concept in information theory that quantifies the maximum rate at which information can be reliably transmitted over a communication channel. It is a measure of the channel's ability to transmit data without errors, subject to the limitations imposed by noise and bandwidth.

**Key Concept:** The **Noisy-Channel Coding Theorem** (also known as Shannon's Channel Coding Theorem) states that for any given communication channel, there exists a coding scheme that allows reliable communication at any rate below the channel capacity. Conversely, reliable communication is impossible at rates above the channel capacity.

**Reference:**
*   **Elements of Information Theory by Cover & Thomas:** Chapter 7 deals extensively with channel capacity and the noisy-channel coding theorem.

### 2. Understanding the Communication Channel

A communication channel can be modeled as a probabilistic relationship between the transmitted signal and the received signal. This relationship is affected by:

*   **Noise:** Unwanted random disturbances that corrupt the signal.
*   **Bandwidth:** The range of frequencies the channel can support.
*   **Signal Power:** The strength of the transmitted signal.

**Reference:**
*   **Wireless Communications by Goldsmith:** Chapter 2 provides a detailed overview of wireless channel models, including additive white Gaussian noise (AWGN).
*   **Communication Systems by Haykin:** Chapter 1 introduces the fundamental building blocks of communication systems, including the channel.

### 3. Defining Channel Capacity

Channel capacity ($C$) is formally defined as the **maximum mutual information** between the input ($X$) and output ($Y$) of a channel, maximized over all possible input distributions $P(X)$.

$$C = \max_{P(X)} I(X;Y)$$

Where:
*   $I(X;Y)$ is the **mutual information** between the input $X$ and output $Y$.
*   $P(X)$ is the probability distribution of the input symbols.

**Recall from CO1 (Knowledge Level K2):**
*   **Entropy $H(X)$:** The uncertainty of a random variable $X$.
*   **Conditional Entropy $H(X|Y)$:** The uncertainty of $X$ given that $Y$ is known.
*   **Mutual Information $I(X;Y)$:** The reduction in uncertainty about $X$ due to knowing $Y$. It measures the information that $Y$ contains about $X$.

$$I(X;Y) = H(X) - H(X|Y)$$
$$I(X;Y) = H(Y) - H(Y|X)$$

**Important Point to Remember:** Mutual information is always non-negative ($I(X;Y) \ge 0$). It is zero if $X$ and $Y$ are independent, and maximum when $Y$ perfectly determines $X$.

### 4. Types of Channel Capacity

The definition of channel capacity depends on the type of channel and the constraints imposed.

#### 4.1. Discrete Memoryless Channels (DMCs)

A DMC is characterized by a transition probability matrix $P(y|x)$, where the output at any time depends only on the input at the current time and is independent of previous inputs and outputs.

**Capacity of a DMC:**
$$C = \max_{P(X)} \sum_{x \in \mathcal{X}} \sum_{y \in \mathcal{Y}} P(x) P(y|x) \log_2 \frac{P(y|x)}{P(y)}$$
Where:
*   $\mathcal{X}$ is the input alphabet.
*   $\mathcal{Y}$ is the output alphabet.
*   $P(y) = \sum_{x \in \mathcal{X}} P(x) P(y|x)$ is the marginal probability of the output $y$.

**Example: Binary Symmetric Channel (BSC)**
*   Input alphabet $\mathcal{X} = \{0, 1\}$.
*   Output alphabet $\mathcal{Y} = \{0, 1\}$.
*   Transition probabilities:
    *   $P(0|0) = 1-p$ (correct transmission)
    *   $P(1|0) = p$ (error)
    *   $P(1|1) = 1-p$ (correct transmission)
    *   $P(0|1) = p$ (error)
    Here, $p$ is the probability of error in a single transmission.

    Let the input distribution be $P(0) = \pi$ and $P(1) = 1-\pi$.
    The capacity of a BSC is given by:
    $$C_{BSC} = 1 - H_2(p)$$
    where $H_2(p) = -p \log_2 p - (1-p) \log_2 (1-p)$ is the binary entropy function.
    This capacity is achieved when $p=0$ (noiseless channel, $C=1$ bit/symbol) or $p=1/2$ (completely noisy channel, $C=0$ bits/symbol).

**Reference:**
*   **Elements of Information Theory by Cover & Thomas:** Chapter 7.2, for the definition of capacity for DMCs and examples like the BSC.

#### 4.2. Gaussian Channels

Gaussian channels are ubiquitous in wireless communication due to the presence of Additive White Gaussian Noise (AWGN).

**Band-limited White Gaussian Noise Channel:**
This channel is characterized by its bandwidth ($B$) and signal-to-noise ratio (SNR).

**Shannon-Hartley Theorem:**
For a band-limited Gaussian channel with bandwidth $B$ and a noise power spectral density $N_0/2$, the channel capacity $C$ is given by:

$$C = B \log_2 \left(1 + \frac{S}{N}\right)$$

Where:
*   $C$ is the channel capacity in bits per second (bps).
*   $B$ is the bandwidth of the channel in Hertz (Hz).
*   $S$ is the average signal power.
*   $N$ is the average noise power over the bandwidth $B$.
*   $\frac{S}{N}$ is the Signal-to-Noise Ratio (SNR).

**Interpretation of the Shannon-Hartley Theorem:**
*   **Bandwidth ($B$)**: Doubling the bandwidth approximately doubles the capacity, assuming SNR is constant.
*   **SNR ($\frac{S}{N}$)**: Increasing the SNR logarithmically increases the capacity. To double the capacity, the SNR must increase significantly (by a factor of 4 for a doubling of capacity if the log base is 2, but the relationship is logarithmic).
*   **Data Rate vs. Bandwidth Trade-off:** The theorem highlights that we can trade bandwidth for SNR (or vice versa) to achieve a desired data rate. For example, we can use a wider bandwidth with a lower SNR, or a narrower bandwidth with a higher SNR, to achieve the same capacity.

**Example:**
Consider a voice-frequency channel with $B=3000$ Hz and an SNR of 30 dB.
First, convert SNR from dB to linear scale:
$\text{SNR (linear)} = 10^{30/10} = 10^3 = 1000$.
$$C = 3000 \log_2 (1 + 1000)$$
$$C \approx 3000 \log_2 (1001)$$
Using $\log_2(1001) \approx \log_2(1024) = 10$:
$$C \approx 3000 \times 10 = 30,000 \text{ bps}$$
Using a calculator: $\log_2(1001) \approx 9.967$
$$C \approx 3000 \times 9.967 \approx 29,901 \text{ bps}$$

**Reference:**
*   **Wireless Communications by Goldsmith:** Chapter 2.3.1 covers the AWGN channel and the Shannon-Hartley theorem.
*   **Communication Systems by Haykin:** Chapter 3 discusses noise and the capacity of the AWGN channel.
*   **Elements of Information Theory by Cover & Thomas:** Chapter 7.3 for capacity of Gaussian channels.

#### 4.3. Capacity of Fading Channels

Fading channels, common in wireless environments, introduce time-varying fluctuations in signal strength. This makes capacity analysis more complex. The capacity of a fading channel depends on:

*   **Average SNR:** The typical signal strength.
*   **Channel State Information (CSI):** Knowledge of the fading process at the transmitter or receiver.
*   **Fading distribution:** e.g., Rayleigh, Rician.
*   **Bandwidth:** Similar to AWGN channels.

**Capacity with perfect CSI at the receiver only:**
For a flat fading channel with known fading coefficients $h$ at the receiver but not the transmitter, the capacity for a given realization of the channel is:
$$C(h) = B \log_2 \left(1 + \frac{|h|^2 S}{N}\right)$$
The average capacity is the expectation over the fading distribution:
$$C_{avg} = E_h \left[ B \log_2 \left(1 + \frac{|h|^2 S}{N}\right) \right]$$

**Capacity with perfect CSI at both transmitter and receiver:**
If the transmitter also knows the channel state $h$, it can adapt its transmission power $S(h)$ to optimize capacity, often by allocating more power to better channel states. A common strategy is to use a water-filling algorithm, which distributes the total power $S$ across different "sub-bands" (if the channel is frequency selective) or over time (if the channel varies over time) to maximize the sum of capacities.

For a single channel realization $h$, the capacity with water-filling is:
$$C_{water-filling} = B \log_2 \left(1 + \frac{S_{total}}{N B}\right) = B \log_2 (1 + \text{SNR}_{total})$$
This form seems similar to Shannon-Hartley, but the interpretation changes. Water-filling effectively "smooths out" the fading by allocating power optimally. It exploits the fact that if the channel is good, we can use high power and get high rate; if it's bad, we might reduce power or even turn off transmission to save energy, resulting in zero rate for that particular channel state.

**Important Point to Remember:** Fading generally reduces the average capacity compared to an AWGN channel with the same average SNR. However, with perfect CSI at the transmitter, power adaptation (like water-filling) can significantly improve the achievable rate and reliability.

**Reference:**
*   **Wireless Communications by Goldsmith:** Chapter 2.4 discusses fading channels and their capacity.
*   **Fundamentals of Wireless Communication by Tse & Viswanath:** Chapter 10 covers fading channels and capacity.

### 5. Channel Coding and Capacity

Channel capacity represents an *achievable* rate using an optimal coding strategy. In practice, channel coding schemes are designed to approach this capacity.

*   **Source Coding (CO2):** Compresses data to remove redundancy.
*   **Channel Coding (CO3):** Adds controlled redundancy to detect and correct errors introduced by the channel.

**How Channel Coding relates to Capacity:**
*   **Error Probability:** Channel coding aims to make the probability of error ($P_e$) arbitrarily small for rates below capacity.
*   **Coding Gain:** Good channel codes provide a "coding gain," meaning they allow reliable communication at a lower SNR than uncoded systems, effectively pushing the operating point closer to the theoretical capacity limit.

**Reference:**
*   **Error Control Coding by Lin & Costello:** Provides comprehensive details on coding techniques.
*   **Elements of Information Theory by Cover & Thomas:** Chapter 9 discusses the relationship between coding and channel capacity.

### 6. Key Takeaways and Important Points

*   **Channel Capacity ($C$)**: The theoretical upper bound on the rate of reliable communication over a noisy channel.
*   **Noisy-Channel Coding Theorem**: Guarantees that rates below $C$ are achievable, and rates above $C$ are not.
*   **Mutual Information**: The fundamental measure used to define capacity. $C = \max_{P(X)} I(X;Y)$.
*   **DMC Capacity**: Depends on the transition probabilities $P(y|x)$ and the input distribution $P(x)$.
*   **AWGN Channel Capacity (Shannon-Hartley Theorem)**: $C = B \log_2(1 + \frac{S}{N})$. This is a critical formula in wireless communications.
*   **Bandwidth and SNR Trade-off**: Capacity can be maintained by trading off bandwidth and SNR.
*   **Fading Channels**: Capacity is reduced by fading. Perfect CSI at the transmitter allows for power adaptation (water-filling) to maximize capacity by exploiting channel variations.
*   **Channel Coding**: Essential for achieving rates close to capacity by mitigating errors.

### 7. Practice Questions and Answers

**Question 1 (CO1, K2):**
What is the relationship between mutual information and channel capacity?

**Answer 1:**
Channel capacity is the maximum possible mutual information between the channel input and output, maximized over all possible input distributions. $C = \max_{P(X)} I(X;Y)$.

**Question 2 (CO4, K2):**
State the Shannon-Hartley Theorem and define each term in the equation.

**Answer 2:**
The Shannon-Hartley Theorem states the capacity of a band-limited AWGN channel:
$$C = B \log_2 \left(1 + \frac{S}{N}\right)$$
*   $C$: Channel capacity in bits per second (bps).
*   $B$: Bandwidth of the channel in Hertz (Hz).
*   $S$: Average signal power.
*   $N$: Average noise power over the bandwidth $B$.

**Question 3 (CO4, K2):**
A communication channel has a bandwidth of 4 kHz and an SNR of 20 dB. Calculate its channel capacity.

**Answer 3:**
Given:
*   $B = 4$ kHz $= 4000$ Hz
*   SNR = 20 dB

Convert SNR from dB to linear scale:
$\text{SNR (linear)} = 10^{20/10} = 10^2 = 100$.

Using the Shannon-Hartley Theorem:
$$C = B \log_2 \left(1 + \frac{S}{N}\right)$$
$$C = 4000 \log_2 (1 + 100)$$
$$C = 4000 \log_2 (101)$$

Using $\log_2(101) \approx 6.658$:
$$C \approx 4000 \times 6.658$$
$$C \approx 26,632 \text{ bps}$$

**Question 4 (CO4, K2):**
Explain the trade-off between bandwidth and SNR in the Shannon-Hartley Theorem.

**Answer 4:**
The Shannon-Hartley Theorem shows that the capacity of a channel can be achieved by either a wide bandwidth with a low SNR, or a narrow bandwidth with a high SNR. For instance, if you want to double the capacity, you could either:
1.  Double the bandwidth while keeping the SNR the same.
2.  Keep the bandwidth the same and increase the SNR such that $\log_2(1 + \text{SNR}_2) = 2 \log_2(1 + \text{SNR}_1)$. This requires a significant increase in SNR (specifically, $(1+\text{SNR}_2) = (1+\text{SNR}_1)^2$).

This trade-off is crucial in designing communication systems, balancing available spectrum (bandwidth) against transmitter power (which affects SNR).

**Question 5 (CO4, K2):**
How does fading affect the capacity of a wireless channel compared to an AWGN channel with the same average SNR?

**Answer 5:**
Fading generally reduces the average capacity of a wireless channel compared to an AWGN channel with the same average SNR. This is because fading introduces deep fades where the signal strength drops significantly, leading to periods of very low or zero instantaneous capacity. While power adaptation at the transmitter (using CSI) can help mitigate this reduction by allocating power to good channel states, the overall average capacity is still typically lower than that of a stable AWGN channel.

---
This concludes the study notes for Channel Capacity. Remember to review the definitions, formulas, and interpretations thoroughly. The concepts of mutual information and the Shannon-Hartley theorem are foundational for understanding the limits of wireless communication.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
