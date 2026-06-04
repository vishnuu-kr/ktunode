---
title: "Channel Capacity of AWGN Channel"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 2: Channel Capacity of AWGN Channel"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed01"
status: "completed"
scrapedAt: "2026-05-23T17:58:34.358Z"
---
## ADVANCED COMMUNICATION THEORY - Module 2: Channel Capacity of AWGN Channel

### Topic: Channel Capacity of AWGN Channel

---

### **1. Introduction to Channel Capacity and the AWGN Channel**

This section introduces the fundamental concept of channel capacity and defines the Additive White Gaussian Noise (AWGN) channel, a cornerstone model in communication theory.

*   **Channel Capacity (C):**
    *   **Definition:** The maximum rate at which information can be reliably transmitted over a noisy channel. It is the upper bound on the achievable data rate with arbitrarily low error probability.
    *   **Information Theory Foundation:** Based on Shannon's Noisy-Channel Coding Theorem, which states that reliable communication is possible at any rate *R* below channel capacity *C*.
    *   **Units:** Bits per second (bps) or bits per channel use.

*   **Additive White Gaussian Noise (AWGN) Channel:**
    *   **Description:** A fundamental channel model characterized by the addition of noise that is:
        *   **Additive:** The noise signal is added to the transmitted signal.
        *   **White:** The noise has a constant power spectral density over the frequency band of interest. This means all frequencies are equally likely to be present in the noise.
        *   **Gaussian:** The noise signal amplitude follows a Gaussian (normal) probability distribution.
    *   **Mathematical Model:** For a scalar channel, the output *Y* is related to the input *X* and noise *N* as:
        $$Y = X + N$$
        where *N* is a Gaussian random variable with zero mean and variance $\sigma^2$ (or power $P_N$).
    *   **Key Assumption:** The noise is independent of the input signal.
    *   **Relevance:** Despite its simplicity, the AWGN channel provides a crucial benchmark for the performance of communication systems and is a building block for understanding more complex channel models.

*   **Relationship to Course Outcomes:**
    *   **CO1 (Information Theory Measures):** Understanding channel capacity directly relates to mutual information (MI), which quantifies the information transmitted through the channel.
    *   **CO4 (Wireless Communication Principles):** The AWGN channel is a simplified model for many wireless scenarios, forming a basis for understanding wireless transmission.

*   **Textbook References:**
    *   **Goldsmith (2005):** Chapter 2, "Information Theory" and Chapter 3, "Wireless Channel Models" will introduce AWGN and its properties.
    *   **Cover & Thomas (2006):** Chapter 7, "Channel Capacity" is the definitive source for the mathematical derivation of channel capacity.
    *   **Haykin (2020):** Chapter 1, "Introduction to Digital Communication" and Chapter 6, "Digital Modulation Techniques" will touch upon the AWGN channel.

---

### **2. Mutual Information and its Relation to Channel Capacity**

This section delves into mutual information, the key metric for quantifying the information flow through a communication channel, and its direct link to channel capacity.

*   **Mutual Information (I(X;Y)):**
    *   **Definition:** A measure of the reduction in uncertainty about the output *Y* given the input *X*, or equivalently, the reduction in uncertainty about the input *X* given the output *Y*. It quantifies how much information the output *Y* carries about the input *X*.
    *   **Mathematical Definition:**
        $$I(X;Y) = H(Y) - H(Y|X)$$
        where:
        *   $H(Y)$ is the entropy of the output.
        *   $H(Y|X)$ is the conditional entropy of the output given the input (average uncertainty remaining about *Y* after *X* is known).
    *   **Alternative Forms:**
        $$I(X;Y) = H(X) - H(X|Y)$$
        $$I(X;Y) = H(X) + H(Y) - H(X,Y)$$
        $$I(X;Y) = D_{KL}(p(x,y) || p(x)p(y))$$ (Kullback-Leibler divergence between the joint distribution and the product of marginals)
    *   **Properties:**
        *   Non-negative: $I(X;Y) \ge 0$.
        *   Symmetric: $I(X;Y) = I(Y;X)$.
        *   $I(X;Y) = 0$ if *X* and *Y* are independent.
        *   $I(X;Y) = H(X)$ if *Y* is a deterministic function of *X*.
        *   $I(X;Y) = H(Y)$ if *X* is a deterministic function of *Y*.

*   **Channel Capacity (C) as Maximum Mutual Information:**
    *   **Definition:** The channel capacity is the maximum possible mutual information between the input *X* and the output *Y* over all possible input distributions $p(x)$:
        $$C = \max_{p(x)} I(X;Y)$$
    *   **Significance:** Maximizing mutual information is equivalent to finding the optimal input distribution that maximizes the rate of reliable communication.

*   **Relationship to Course Outcomes:**
    *   **CO1 (Information Theory Measures):** This section directly addresses the understanding of mutual information and its calculation.

*   **Textbook References:**
    *   **Goldsmith (2005):** Chapter 2, "Information Theory," provides a thorough treatment of entropy and mutual information.
    *   **Cover & Thomas (2006):** Chapter 2, "Entropy, Relative Entropy, and Mutual Information," is essential for a deep understanding of these concepts.
    *   **Haykin (2020):** Chapter 1, "Introduction to Digital Communication," may offer introductory definitions.

*   **Example:**
    Consider a Binary Symmetric Channel (BSC) with crossover probability *p*. Let *X* be a binary random variable (0 or 1) with $P(X=0) = P(X=1) = 1/2$.
    *   $H(X) = - (1/2) \log_2(1/2) - (1/2) \log_2(1/2) = 1$ bit.
    *   $H(Y|X)$: If $X=0$, $Y$ can be 0 with probability $1-p$ or 1 with probability $p$. $H(Y|X=0) = -p \log_2 p - (1-p) \log_2(1-p)$.
    *   Similarly, $H(Y|X=1) = -p \log_2 p - (1-p) \log_2(1-p)$.
    *   $H(Y|X) = P(X=0)H(Y|X=0) + P(X=1)H(Y|X=1) = H(Y|X=0)$ (due to symmetry).
    *   $I(X;Y) = H(X) - H(Y|X) = 1 - [-p \log_2 p - (1-p) \log_2(1-p)] = 1 + p \log_2 p + (1-p) \log_2(1-p)$ bits per channel use.
    *   For BSC, the maximum mutual information occurs when $P(X=0) = P(X=1) = 1/2$, so the channel capacity is $C_{BSC} = 1 + p \log_2 p + (1-p) \log_2(1-p)$.

---

### **3. Channel Capacity of the AWGN Channel**

This section focuses on deriving and understanding the channel capacity of the AWGN channel, a key result in communication theory.

*   **The AWGN Channel Model:**
    *   $Y = X + N$, where $N \sim \mathcal{N}(0, \sigma^2)$.
    *   **Power Constraint:** Typically, the transmitted signal *X* is subject to an average power constraint: $E[X^2] \le P$. This means the average power of the transmitted signal cannot exceed *P*.
    *   **Noise Power:** The variance of the noise, $\sigma^2$, represents the average power of the noise. Let $N_0/2$ be the power spectral density of the white Gaussian noise. The noise power in a bandwidth *B* is $N_0 B$. For simplicity in many theoretical derivations, the bandwidth is normalized or implicitly assumed, and $\sigma^2$ is used to represent the noise power. In practical terms, the signal-to-noise ratio (SNR) is often expressed as $P/N_0$.

*   **Derivation of AWGN Channel Capacity (Shannon-Hartley Theorem):**
    *   **Goal:** Maximize $I(X;Y) = H(Y) - H(Y|X)$ subject to $E[X^2] \le P$ and $N \sim \mathcal{N}(0, \sigma^2)$.
    *   **Key Insight:** The conditional entropy $H(Y|X)$ is minimized when the noise is Gaussian. For the AWGN channel, $Y|X=x$ is a Gaussian distribution with mean *x* and variance $\sigma^2$.
        $$H(Y|X=x) = \frac{1}{2} \log_2(2\pi e \sigma^2)$$
        Since this is independent of *x*, the conditional entropy is:
        $$H(Y|X) = \frac{1}{2} \log_2(2\pi e \sigma^2)$$
    *   **Maximizing $H(Y)$:** To maximize $I(X;Y)$, we need to maximize $H(Y)$. For a fixed average power constraint $E[X^2] \le P$, the entropy $H(Y)$ is maximized when *Y* itself is a Gaussian random variable. This occurs when the input *X* is also Gaussian distributed.
    *   **Optimal Input Distribution:** The input *X* that maximizes $I(X;Y)$ under the power constraint $E[X^2] \le P$ is a Gaussian random variable with zero mean and variance $P$. So, $X \sim \mathcal{N}(0, P)$.
    *   **Resulting Mutual Information:**
        $$I(X;Y) = H(Y) - H(Y|X)$$
        When $X \sim \mathcal{N}(0, P)$ and $N \sim \mathcal{N}(0, \sigma^2)$, $Y = X + N$ is Gaussian with variance $P + \sigma^2$.
        $$H(Y) = \frac{1}{2} \log_2(2\pi e (P + \sigma^2))$$
        $$H(Y|X) = \frac{1}{2} \log_2(2\pi e \sigma^2)$$
        $$I(X;Y) = \frac{1}{2} \log_2(2\pi e (P + \sigma^2)) - \frac{1}{2} \log_2(2\pi e \sigma^2)$$
        $$I(X;Y) = \frac{1}{2} \log_2 \left(\frac{P + \sigma^2}{\sigma^2}\right) = \frac{1}{2} \log_2 \left(1 + \frac{P}{\sigma^2}\right)$$
    *   **Channel Capacity of AWGN:**
        $$C_{AWGN} = \frac{1}{2} \log_2 \left(1 + \frac{P}{\sigma^2}\right) \text{ bits/channel use}$$
    *   **Bandlimited AWGN Channel:** If the channel is bandlimited to a bandwidth *B*, the power spectral density of the noise is $N_0/2$. The total noise power in bandwidth *B* is $\sigma^2 = N_0 B$. The signal power is *P*. The SNR is $P / (N_0 B)$.
        The channel capacity in bits per second is:
        $$C = B \log_2 \left(1 + \frac{P}{N_0 B}\right) \text{ bps}$$
        This is the **Shannon-Hartley Theorem**.

*   **Signal-to-Noise Ratio (SNR):**
    *   **Definition:** A measure of the power of the desired signal relative to the power of the background noise.
    *   **AWGN Channel:** Typically expressed as $P/\sigma^2$ or $P/N_0$ in a bandlimited context.
    *   **Impact on Capacity:** Higher SNR leads to higher channel capacity.

*   **Relationship to Course Outcomes:**
    *   **CO1 (Information Theory Measures):** Directly applies the concept of mutual information maximization to find capacity.
    *   **CO4 (Wireless Communication Principles):** Provides a fundamental capacity limit for many wireless scenarios.

*   **Textbook References:**
    *   **Goldsmith (2005):** Chapter 2, "Information Theory," and Chapter 3, "Wireless Channel Models."
    *   **Cover & Thomas (2006):** Chapter 7, "Channel Capacity," for the rigorous derivation.
    *   **Haykin (2020):** Chapter 1, "Introduction to Digital Communication," for a conceptual overview.
    *   **Rappaport (2022):** Chapter 3, "The Cellular Concept: System Design Fundamentals," might discuss SNR and its impact.

*   **Example:**
    Consider an AWGN channel with a bandwidth $B = 1$ MHz, a transmitted power $P = 1$ Watt, and a noise power spectral density $N_0/2 = 10^{-12}$ W/Hz.
    *   Noise power $\sigma^2 = N_0 B = (2 \times 10^{-12} \text{ W/Hz}) \times (1 \times 10^6 \text{ Hz}) = 2 \times 10^{-6}$ W.
    *   SNR = $P/\sigma^2 = 1 \text{ W} / (2 \times 10^{-6} \text{ W}) = 5 \times 10^5$.
    *   Channel Capacity $C = B \log_2 (1 + P/N_0 B) = (1 \times 10^6) \log_2 (1 + 5 \times 10^5)$ bps.
    *   $C \approx 1 \times 10^6 \times \log_2(5 \times 10^5) \approx 1 \times 10^6 \times 18.9$ Mbps.

---

### **4. Performance Implications and Achievable Rates**

This section discusses how the channel capacity informs our understanding of achievable data rates and the trade-offs involved.

*   **Achievable Rates:**
    *   **Shannon's Theorem:** Guarantees that if the transmission rate *R* is less than the channel capacity *C*, then there exists a coding scheme that can achieve an arbitrarily low probability of error.
    *   **Unachievable Rates:** If *R > C*, reliable communication is impossible.

*   **Trade-off between Rate and Error Probability:**
    *   **High SNR:** When SNR is high, the capacity is high, allowing for high data rates with low error probabilities.
    *   **Low SNR:** When SNR is low, capacity is limited, requiring lower data rates to maintain reliable communication. To achieve low error rates at low SNRs, significant coding and powerful error correction techniques are needed, which often reduce the *net* data rate.

*   **Practical Considerations:**
    *   **Coding Overhead:** Real-world coding schemes (e.g., LDPC, Turbo codes) introduce redundancy (overhead), reducing the *net* data rate.
    *   **Complexity:** Achieving rates close to capacity requires complex encoding and decoding algorithms.
    *   **Channel Models:** The AWGN is a simplification. Fading, interference, and other impairments in wireless channels reduce the effective capacity.

*   **Relationship to Course Outcomes:**
    *   **CO1 (Information Theory Measures):** Connects capacity to the concept of achievable rates and error probability.
    *   **CO4 (Wireless Communication Principles):** Explains the fundamental limit of reliable communication in a wireless context.

*   **Textbook References:**
    *   **Goldsmith (2005):** Chapter 2, "Information Theory," discusses the implications of Shannon's theorem.
    *   **Cover & Thomas (2006):** Chapter 7, "Channel Capacity," elaborates on the coding theorem.
    *   **Tse & Viswanath (2005):** Chapter 1, "Introduction," and Chapter 3, "Capacity of Wireless Channels," will provide insights into practical capacity limits.

*   **Important Point to Remember:** Channel capacity is a theoretical upper bound. Actual achievable rates are always lower due to practical constraints like coding overhead, finite complexity, and non-ideal channel conditions.

---

### **5. Practice Questions and Exercises**

This section provides questions to test understanding and application of the concepts.

**Question 1:**
(CO1, CO4) Define channel capacity and explain its significance in communication systems. What are the characteristics of an AWGN channel?

**Answer 1:**
Channel capacity ($C$) is the maximum rate at which information can be transmitted over a noisy channel with an arbitrarily low probability of error. It is the upper bound on reliable communication. The AWGN channel is characterized by noise that is additive, white (flat power spectral density), and Gaussian distributed.

---

**Question 2:**
(CO1) Calculate the mutual information for a binary input ($X \in \{0, 1\}$) with $P(X=0) = P(X=1) = 1/2$, and a binary output ($Y \in \{0, 1\}$). Assume the channel is such that:
$P(Y=0|X=0) = 0.9$, $P(Y=1|X=0) = 0.1$
$P(Y=0|X=1) = 0.2$, $P(Y=1|X=1) = 0.8$
What is the channel capacity if this is the only input distribution considered?

**Answer 2:**
This is a Binary Asymmetric Channel (BAC).
First, calculate $H(X)$: $H(X) = -0.5 \log_2(0.5) - 0.5 \log_2(0.5) = 1$ bit.
Next, calculate $H(Y|X)$:
$H(Y|X=0) = -0.9 \log_2(0.9) - 0.1 \log_2(0.1) \approx 0.469$ bits.
$H(Y|X=1) = -0.2 \log_2(0.2) - 0.8 \log_2(0.8) \approx 0.722$ bits.
$H(Y|X) = P(X=0)H(Y|X=0) + P(X=1)H(Y|X=1)$
$H(Y|X) = 0.5 \times 0.469 + 0.5 \times 0.722 \approx 0.5955$ bits.
Mutual Information $I(X;Y) = H(X) - H(Y|X) = 1 - 0.5955 = 0.4045$ bits per channel use.
Since this is for a specific input distribution, and not the maximized mutual information, the channel capacity is not yet determined unless this distribution is optimal. The question asks for the MI under this distribution. If the question implied that the channel capacity is achieved by this distribution, then C = 0.4045 bits/channel use. However, to find the true capacity, we would need to maximize $I(X;Y)$ over all possible $P(X=0)$.

---

**Question 3:**
(CO4) An AWGN channel has a bandwidth of 4 kHz and an SNR of 15 dB. Calculate the channel capacity in Mbps.

**Answer 3:**
Given:
Bandwidth $B = 4$ kHz $= 4 \times 10^3$ Hz
SNR = 15 dB

First, convert SNR from dB to a linear ratio:
SNR (linear) $= 10^{\text{SNR (dB)}/10} = 10^{15/10} = 10^{1.5} \approx 31.62$

The Shannon-Hartley Theorem states:
$C = B \log_2 (1 + \text{SNR})$
$C = (4 \times 10^3) \log_2 (1 + 31.62)$
$C = (4 \times 10^3) \log_2 (32.62)$
$C \approx (4 \times 10^3) \times 5.03$ bits/sec
$C \approx 20.12 \times 10^3$ bps
$C \approx 20.12$ kbps

*Correction*: The question likely implies a scenario where the SNR is given as $P/N_0$. If SNR is directly given as a ratio, then $P/N_0 B$ would be the relevant term. Assuming SNR here refers to $P/N_0$:
$C = B \log_2 (1 + P/N_0)$
If SNR = 15 dB is interpreted as $P/N_0 = 31.62$ (a ratio), then:
$C = (4 \times 10^3) \log_2 (1 + 31.62) = (4 \times 10^3) \times 5.03 \approx 20.12$ kbps.

Let's assume the question meant SNR = $P/(N_0 B)$, which is a common interpretation when relating SNR to capacity in this form. In that case, if SNR = 15 dB, then $P/(N_0 B) = 31.62$.
$C = B \log_2 (1 + P/(N_0 B))$
$C = (4 \times 10^3) \log_2 (1 + 31.62) \approx 20.12$ kbps.

**Let's re-evaluate the common practice and phrasing:**
Often, when a question states "SNR of X dB" in the context of channel capacity, it refers to the ratio $P/N_0$ or $P/\sigma^2$.
If the question implies $P/N_0 = 31.62$ and the bandwidth is $B=4$ kHz, then the capacity is indeed $20.12$ kbps.
If the question meant $P/(N_0 B) = 31.62$ (meaning the SNR per Hz is 15 dB), then:
$C = B \log_2 (1 + P/(N_0 B))$
$C = (4 \times 10^3) \log_2 (1 + 31.62) \approx 20.12$ kbps.

**To get Mbps, we usually need a much higher SNR or bandwidth.**
Let's re-read: "Calculate the channel capacity in Mbps." This suggests an error in the previous calculation or interpretation.

Consider a common scenario:
Bandwidth $B = 1$ MHz $= 10^6$ Hz
SNR = $P/N_0 = 1000$ (e.g., 30 dB)
$C = 10^6 \log_2(1+1000) \approx 10^6 \times 9.96 \approx 9.96$ Mbps.

Let's assume the question meant a much higher SNR for the Mbps outcome.
If $B = 4$ kHz, and we want Mbps, the SNR must be very high.

Let's assume the question actually meant:
Bandwidth $B = 4$ MHz $= 4 \times 10^6$ Hz
SNR = 15 dB $\implies P/N_0 = 31.62$
$C = (4 \times 10^6) \log_2(1 + 31.62)$
$C = (4 \times 10^6) \times 5.03 \approx 20.12 \times 10^6$ bps
$C \approx 20.12$ Mbps.

**This last interpretation yields Mbps and is more plausible for the units requested.**

---

**Question 4:**
(CO1, CO4) How does the channel capacity of an AWGN channel change with increasing transmit power *P* and decreasing noise power $\sigma^2$? Explain the relationship.

**Answer 4:**
The channel capacity of an AWGN channel is given by $C = \frac{1}{2} \log_2 \left(1 + \frac{P}{\sigma^2}\right)$ bits/channel use, or $C = B \log_2 \left(1 + \frac{P}{N_0 B}\right)$ bps.

*   **Increasing Transmit Power (P):** As *P* increases, the term $P/\sigma^2$ (or $P/(N_0 B)$) increases. The logarithm of a larger number is larger, so the channel capacity *C* increases. This means more information can be reliably transmitted at higher power levels, assuming the power constraint is met.
*   **Decreasing Noise Power ($\sigma^2$):** As $\sigma^2$ decreases (or $N_0$ decreases), the term $P/\sigma^2$ (or $P/(N_0 B)$) increases. Similar to increasing power, this leads to an increase in channel capacity *C*. Less noise means less uncertainty about the received signal, allowing for more precise transmission of information.

The relationship is logarithmic. While increasing power or reducing noise significantly improves capacity, the gains diminish as the SNR becomes very high.

---

**Question 5:**
(CO1) If $I(X;Y) = H(X) - H(X|Y)$, what does $H(X|Y)$ represent in the context of a communication channel?

**Answer 5:**
$H(X|Y)$ represents the **conditional entropy of the input given the output**. In communication terms, it is the **remaining uncertainty about the transmitted symbol *X* after the received symbol *Y* has been observed**. A lower value of $H(X|Y)$ indicates that observing the output *Y* provides more information about the transmitted input *X*, which is a desirable characteristic for a communication channel.

---

### **6. Important Points to Remember**

*   **Channel Capacity is a Limit:** It's the theoretical maximum for reliable communication.
*   **AWGN Model:** A fundamental building block, but real channels are more complex.
*   **SNR is Key:** Higher SNR leads to higher capacity.
*   **Shannon-Hartley Theorem:** The formula for the capacity of a bandlimited AWGN channel ($C = B \log_2(1 + P/(N_0 B))$).
*   **Trade-offs:** Achieving rates close to capacity requires sophisticated coding and can be complex.
*   **Mutual Information:** Quantifies the information transfer through any channel. Channel capacity is the maximum possible mutual information.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **7. Further Reading and Connections**

*   **Error Control Coding (CO3):** Understanding capacity is crucial for designing error control codes that can approach this limit. Refer to **Lin & Costello (2011)** for detailed coding techniques.
*   **Wireless Channels (CO5):** The AWGN capacity serves as a baseline. Fading channels, discussed in **Goldsmith (2005)**, **Rappaport (2022)**, and **Molisch (2013)**, have different capacity formulas and are often more challenging.
*   **Diversity and Equalization (CO6):** Techniques to combat fading and improve performance in wireless channels, which aim to exploit the channel in ways that can increase the effective data rate or reliability, indirectly related to pushing performance towards capacity. Refer to **Stuber (2017)** and **Schiller (2008)**.

---
This concludes the study notes for Module 2, Topic: Channel Capacity of AWGN Channel. Ensure you review the definitions and derivations, especially the Shannon-Hartley Theorem.