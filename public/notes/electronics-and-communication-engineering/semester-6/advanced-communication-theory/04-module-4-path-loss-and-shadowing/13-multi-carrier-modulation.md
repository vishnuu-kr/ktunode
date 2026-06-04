---
title: "Multi-carrier Modulation"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 4: Path loss and shadowing"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed3a"
status: "completed"
scrapedAt: "2026-05-23T17:59:14.203Z"
---
# ADVANCED COMMUNICATION THEORY: Module 4: Path Loss and Shadowing

## Topic: Multi-carrier Modulation

**Introduction:**

In Module 4, we've been exploring the challenges introduced by wireless channels, particularly path loss and shadowing, which degrade signal strength. While these factors impact the overall received signal power, another significant challenge in wireless communication is the effect of frequency-selective fading. This occurs when different frequency components of a transmitted signal experience different levels of attenuation and phase shifts due to multipath propagation. When the delay spread of the channel is significant compared to the symbol duration, inter-symbol interference (ISI) becomes a major problem, corrupting the received data.

Multi-carrier modulation techniques are designed to combat the detrimental effects of frequency-selective fading by dividing the available bandwidth into a large number of narrower, orthogonal subcarriers. This approach transforms a challenging frequency-selective fading channel into a collection of many flatter, frequency-non-selective fading subchannels.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the fundamental principles of multi-carrier modulation.
*   Explain the advantages of multi-carrier modulation in combating frequency-selective fading and ISI.
*   Describe the concept of Orthogonal Frequency Division Multiplexing (OFDM) as a key multi-carrier modulation technique.
*   Analyze the relationship between OFDM and the Fast Fourier Transform (FFT).
*   Discuss the role of the Cyclic Prefix (CP) in mitigating ISI in OFDM systems.
*   Relate multi-carrier modulation to the overall performance of wireless communication systems in the presence of channel impairments like path loss and shadowing (indirectly by improving robustness to fading).
*   Appreciate how multi-carrier modulation contributes to the overall wireless communication system design.

---

### 1. The Problem: Frequency-Selective Fading and ISI

**Key Concepts:**

*   **Multipath Propagation:** In wireless environments, radio signals can reach the receiver via multiple paths due to reflections, diffractions, and scattering from objects.
*   **Delay Spread ($\tau_m$):** The difference between the arrival times of the earliest and latest significant signal components at the receiver. It's a measure of the channel's memory.
*   **Coherence Bandwidth ($B_c$):** The bandwidth over which the channel can be considered approximately frequency-non-selective. If the signal bandwidth ($B_s$) is much larger than $B_c$, different frequency components will experience different fading, leading to frequency-selective fading.
    *   *Relationship:* $B_c \approx 1 / \tau_m$
*   **Frequency-Selective Fading:** When the signal bandwidth is greater than the coherence bandwidth of the channel, different frequency components experience independent fading. This results in a channel that is not flat across the signal's spectrum.
*   **Inter-Symbol Interference (ISI):** In a baseband system, a delayed version of a transmitted symbol interferes with the current symbol. In a bandpass system, multipath components with different delays can cause this. When the delay spread is comparable to or larger than the symbol duration, ISI becomes severe.

**Problem Statement:**

Traditional single-carrier modulation schemes (like BPSK, QPSK, QAM) transmit data at a high symbol rate. If this symbol duration is shorter than the delay spread of the channel, ISI will occur. Frequency-selective fading exacerbates this problem, as certain frequency components carrying parts of the symbol are attenuated more than others.

---

### 2. Multi-Carrier Modulation: The Solution

**Key Concepts:**

*   **Dividing the Bandwidth:** The core idea is to divide the total available bandwidth ($B$) into $N$ much narrower sub-bands, each with a bandwidth of $B/N$.
*   **Subcarriers:** Each sub-band carries a low-rate data stream modulated onto a dedicated subcarrier frequency.
*   **Orthogonal Subcarriers:** A crucial aspect is that these subcarriers are orthogonal to each other. This means that the correlation between any two distinct subcarriers is zero over their symbol period. This orthogonality allows for efficient separation of the subchannels at the receiver without interference from each other, provided the subcarrier spacing is chosen correctly.
*   **Sub-symbol Duration:** By dividing the bandwidth, the symbol duration on each subcarrier is increased significantly ($T_{sub} = N \times T_{symbol}$ for a single-carrier system). This makes the symbol duration much longer than the channel's delay spread, effectively turning the frequency-selective channel into a collection of approximately frequency-non-selective (flat) fading subchannels.

**How it Solves ISI:**

In a frequency-selective fading channel, the impulse response $h(t)$ has a significant delay spread. When a single high-rate symbol is transmitted, its duration is shorter than the delay spread, causing delayed versions of the symbol to interfere with subsequent symbols.

In multi-carrier modulation, each narrow subchannel experiences relatively flat fading. This means that within the narrow bandwidth of each subchannel, all frequency components are attenuated similarly. Since the symbol duration on each subchannel is much longer, the effect of multipath delay spread within that narrow subchannel becomes negligible, and ISI is dramatically reduced or eliminated.

**Connection to Channel Models (CO5):**

Multi-carrier modulation effectively transforms a frequency-selective channel into multiple flat fading channels. This allows us to apply the analysis techniques developed for flat fading channels to each subcarrier individually.

---

### 3. Orthogonal Frequency Division Multiplexing (OFDM)

**Key Concepts:**

*   **OFDM as a practical implementation of multi-carrier modulation.**
*   **Data Serialization and Parallel Transmission:** A serial high-rate data stream is converted into $N$ parallel low-rate data streams.
*   **Subcarrier Modulation:** Each parallel data stream is modulated onto one of the $N$ orthogonal subcarriers using a simple modulation scheme like BPSK, QPSK, or QAM.
*   **Inverse Fast Fourier Transform (IFFT):** At the transmitter, the modulated data symbols for all subcarriers are combined and transformed using an Inverse Fast Fourier Transform (IFFT). The output of the IFFT is a time-domain signal that is essentially a sum of sinusoids at the subcarrier frequencies, each weighted by the corresponding data symbol.
*   **Fast Fourier Transform (FFT):** At the receiver, an FFT is used to decompose the received signal back into its constituent subcarriers, recovering the modulated data symbols.

**Advantages of OFDM:**

1.  **Robustness against Frequency-Selective Fading:** As discussed, it converts frequency-selective fading into flat fading on each subcarrier, mitigating ISI.
2.  **Efficient Spectrum Utilization:** Orthogonal subcarriers can be packed closely together without requiring guard bands between them, leading to high spectral efficiency.
3.  **Simplicity of Equalization:** Equalizing a flat fading channel is much simpler than equalizing a frequency-selective channel. For OFDM, equalization can be done on a per-subcarrier basis using a single complex multiplication, which can often be implemented in the frequency domain via the FFT.
4.  **Simplified Pulse Shaping:** Complex pulse shaping filters, often needed in single-carrier systems to combat ISI, are not required in OFDM.

**Disadvantages of OFDM:**

1.  **High Peak-to-Average Power Ratio (PAPR):** Due to the summation of multiple sinusoids, the instantaneous power of an OFDM signal can be very high, requiring linear power amplifiers.
2.  **Sensitivity to Frequency and Timing Offsets:** Imperfect synchronization can lead to loss of orthogonality between subcarriers, causing Inter-Carrier Interference (ICI).
3.  **Guard Interval/Cyclic Prefix Overhead:** The need for a guard interval introduces overhead.

**Example:**

Imagine you have a data rate of 100 Mbps and a channel with a delay spread of $1 \mu s$. If you use a traditional single-carrier system with a symbol duration of $0.5 \mu s$ (to achieve 2 Mbps per symbol rate), the delay spread is comparable to the symbol duration, leading to significant ISI.

Now, consider using OFDM with $N=100$ subcarriers. The total bandwidth is divided into 100 narrow bands. The symbol rate on each subcarrier is now $1 Mbps$ (100 Mbps / 100 subcarriers). The effective symbol duration on each subcarrier is $1 \mu s$. More importantly, the delay spread of $1 \mu s$ is now much shorter than the *effective* symbol duration across the entire OFDM symbol (when considering the guard interval, as we'll see). Within each narrow subcarrier, the fading is approximately flat, and the ISI is negligible.

---

### 4. The Role of the Cyclic Prefix (CP)

**Key Concepts:**

*   **Circular Convolution:** The IFFT operation inherently produces a signal that is cyclically extended. This means the end of one OFDM symbol wraps around and interferes with the beginning of the next symbol if there's no protection. This is a form of ISI.
*   **Guard Interval (GI):** A short period of time is inserted between consecutive OFDM symbols. This guard interval is typically filled with zeros or some other known pattern.
*   **Cyclic Prefix (CP):** A more effective approach than simply inserting zeros. A portion of the *end* of the *time-domain* OFDM symbol (generated by the IFFT) is copied and prepended to the beginning of the symbol. This appended portion is called the Cyclic Prefix.
*   **Overcoming ISI and ICI:** The CP serves as a guard interval to absorb the ISI caused by multipath delays. If the length of the CP is greater than the channel's delay spread ($\tau_m$), then the ISI from the previous symbol at each subcarrier will fall entirely within the CP and will not interfere with the useful part of the current symbol. Furthermore, the CP helps maintain the orthogonality of the subcarriers even in the presence of timing offsets within the CP's duration.

**How CP Works:**

Let the time-domain OFDM symbol be $s[n]$ for $n=0, 1, \dots, N-1$. Without a CP, the received signal $y[n]$ would be the convolution of $s[n]$ with the channel impulse response $h[n]$. This convolution, when sampled, would result in ISI.

With a CP, the transmitted symbol becomes $s_{CP}[n]$ where the last $G$ samples of $s[n]$ are copied and prepended:
$s_{CP}[n] = \begin{cases} s[n-N] & \text{for } 0 \le n < G \\ s[n] & \text{for } G \le n < N+G \end{cases}$

The receiver receives $y_{CP}[n]$, which is the convolution of $s_{CP}[n]$ with $h[n]$, followed by a cyclic shift. By removing the first $G$ samples (the CP) from the received signal, the receiver obtains a signal that is equivalent to a *circular* convolution of the original data symbols with the channel impulse response.

**Mathematical Insight (Simplified):**

Let the $N$ data symbols on the subcarriers be $X_k$ for $k=0, \dots, N-1$.
The IFFT at the transmitter produces a time-domain signal $x[n]$:
$x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X_k e^{j 2\pi kn/N}$ for $n = 0, \dots, N-1$.

The CP is formed by taking the last $G$ samples and prepending them:
$x_{CP}[n] = \begin{cases} x[n+N-G] & \text{for } 0 \le n < G \\ x[n-G] & \text{for } G \le n < N+G \end{cases}$

The total length of the OFDM symbol with CP is $N+G$.
The channel impulse response is $h[n]$, assumed to have a length $L$. For the CP to be effective, $G \ge L-1$.

When $x_{CP}[n]$ is transmitted over the channel $h[n]$, the received signal is $y_{CP}[n] = x_{CP}[n] * h[n]$ (convolution).

At the receiver, after removing the first $G$ samples, the signal corresponds to the convolution of the original $N$ samples of $x[n]$ with $h[n]$. Due to the CP, this convolution becomes *circular*.
The FFT of the received signal $y[n]$ (after removing the CP) is then:
$Y_m = H_m X_m$ for $m = 0, \dots, N-1$.
where $Y_m$ and $X_m$ are the FFTs of the received and transmitted data symbols, respectively, and $H_m$ is the frequency response of the channel at subcarrier $m$.

This means each subcarrier $m$ experiences a simple multiplicative channel distortion $H_m$. The receiver can then simply divide by $H_m$ to equalize the channel for each subcarrier.

**Important Point to Remember:** The CP is crucial for making OFDM robust to multipath. Without it, the beneficial effects of parallel transmission and narrow subchannels would be undermined by ISI. The CP converts the linear convolution with the channel into a circular convolution, which can be handled by the FFT.

---

### 5. Relation to Path Loss and Shadowing (Module 4 Context)

While multi-carrier modulation (specifically OFDM) directly combats frequency-selective fading and ISI, it also indirectly helps mitigate the effects of path loss and shadowing on the overall system performance.

*   **Path Loss and Shadowing:** These phenomena reduce the overall received signal power. If the signal power is too low, the Signal-to-Noise Ratio (SNR) on all subcarriers will be poor, leading to high error rates.
*   **OFDM's Approach:**
    *   **Spreading Power:** By dividing the power among many subcarriers, the impact of deep fades on a single wideband channel is reduced. If one subcarrier experiences a deep fade due to a specific multipath component or shadowing, other subcarriers might not be as severely affected.
    *   **Adaptive Modulation and Coding (AMC):** OFDM systems are highly amenable to AMC. Subcarriers experiencing better channel conditions (higher SNR due to less path loss or shadowing) can be allocated higher-order modulation schemes (e.g., 64-QAM), while subcarriers in poorer conditions might use lower-order schemes (e.g., BPSK) or even be turned off. This allows the system to maximize data throughput while maintaining a desired error rate across varying channel conditions.
    *   **Diversity:** While not a direct diversity technique like frequency diversity or space diversity, the parallel nature of OFDM with multiple subcarriers can be seen as a form of frequency diversity. If one subcarrier experiences a fade, others might not. This inherent diversity helps improve the robustness against fading, which is often exacerbated by shadowing.

**CO5 Alignment:** Multi-carrier modulation, by breaking down a frequency-selective channel into flat fading subchannels, simplifies the analysis of wireless channel models. We can analyze the performance of each subcarrier independently under its specific flat fading condition, which is a direct application of understanding channel models.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 6. Textbooks and Reference Material Integration

*   **Goldsmith, Wireless Communications:** Chapter 4 discusses fading and its types, including frequency-selective fading. Chapter 7 introduces OFDM as a technique to combat these effects, explaining the underlying principles and the benefits of narrow subchannels.
*   **Rappaport, Wireless Communication: Principles and Practice:** Similar to Goldsmith, Rappaport covers multipath propagation and fading in detail. He discusses OFDM in Chapters 6 and 9, focusing on its practical implementation and advantages in dealing with ISI and frequency selectivity.
*   **Cover & Thomas, Elements of Information Theory:** While not directly on modulation techniques, this book provides the foundational information theory principles that underpin efficient communication. Understanding capacity and channel limitations helps appreciate *why* modulation techniques like OFDM are designed the way they are to maximize data transmission under given constraints.
*   **Haykin, Communication Systems:** Haykin's text provides a detailed mathematical treatment of various modulation schemes, including those suitable for multi-carrier systems. He often delves into the signal processing aspects, including FFT/IFFT operations and synchronization challenges.
*   **Tse & Viswanath, Fundamentals of Wireless Communication:** This book offers a more theoretical and rigorous treatment of wireless channels and information theory. It explains the trade-offs in multi-carrier design and its relation to channel capacity.
*   **Schiller, Mobile Communications:** Schiller provides a good overview of mobile communication technologies, including their evolution. He discusses the need for techniques like OFDM to handle the dynamic wireless environment.
*   **Molisch, Wireless Communications:** Molish's book provides a comprehensive view of wireless communication systems, including detailed explanations of fading phenomena and mitigation techniques like OFDM.
*   **Stuber, Principles of Mobile Communication:** Stuber delves into the spectral efficiency and robustness aspects of various modulation schemes, explaining how OFDM achieves high performance in challenging mobile environments.
*   **Lin & Costello, Error Control Coding:** While not directly about modulation, error control coding is often used in conjunction with OFDM to further improve reliability. Understanding coding principles is essential for a complete wireless system design.
*   **Haykin, Digital Communication Systems (Indian Adaptation):** This book likely offers a modern perspective on digital communication techniques, including advanced modulation and multiplexing schemes like OFDM, with practical examples relevant to the Indian context.

---

### 7. Practice Questions and Answers

**Question 1:**
What is the primary problem that multi-carrier modulation techniques like OFDM are designed to solve in wireless communication?
(a) High power consumption
(b) Frequency-selective fading and Inter-Symbol Interference (ISI)
(c) Limited battery life
(d) Security vulnerabilities

**Answer:** (b) Frequency-selective fading and Inter-Symbol Interference (ISI)

**Explanation:** Multi-carrier modulation divides a wide bandwidth into many narrower subchannels, each experiencing flatter fading. This, combined with longer symbol durations on each subchannel, significantly reduces ISI caused by multipath propagation, which is a direct consequence of frequency-selective fading.

**Question 2:**
If a wireless channel has a delay spread of $0.5 \mu s$, what is the approximate coherence bandwidth of the channel?
(a) 200 kHz
(b) 2 MHz
(c) 20 MHz
(d) 200 MHz

**Answer:** (b) 2 MHz

**Explanation:** The coherence bandwidth ($B_c$) is approximately the reciprocal of the delay spread ($\tau_m$).
$B_c \approx 1 / \tau_m = 1 / (0.5 \times 10^{-6} \text{ s}) = 2 \times 10^6 \text{ Hz} = 2 \text{ MHz}$.

**Question 3:**
How does the Cyclic Prefix (CP) in OFDM help in mitigating ISI?
(a) It increases the data rate on each subcarrier.
(b) It makes the subcarriers non-orthogonal.
(c) It acts as a guard interval to absorb the effects of multipath delays.
(d) It reduces the required transmit power.

**Answer:** (c) It acts as a guard interval to absorb the effects of multipath delays.

**Explanation:** The CP is a copy of the end of the OFDM symbol prepended to the beginning. If its length is greater than the channel's delay spread, it effectively prevents the delayed replicas of the previous symbol from interfering with the current symbol's useful data portion after the CP is removed at the receiver.

**Question 4:**
Explain the core principle behind why OFDM is effective against frequency-selective fading. (Relates to CO5)

**Answer:** Frequency-selective fading occurs when different frequency components of a signal experience different levels of attenuation due to multipath. By dividing the total bandwidth into many narrower sub-bands, OFDM transmits data in parallel on orthogonal subcarriers. Each of these narrow sub-bands experiences relatively flat fading (i.e., all frequency components within that narrow sub-band are attenuated similarly). This transforms a challenging frequency-selective channel into multiple, more manageable, frequency-non-selective (flat) fading subchannels, thus mitigating the impact of frequency-selective fading and reducing ISI.

**Question 5:**
What is the main consequence of using a high Peak-to-Average Power Ratio (PAPR) in OFDM systems?

**Answer:** A high PAPR means that the instantaneous signal power can be much higher than its average power. This requires power amplifiers in the transmitter to have a wide linear operating range. If a non-linear amplifier is used, it can cause signal distortion, including spectral regrowth and clipping, which can lead to Inter-Carrier Interference (ICI) and degrade system performance. This necessitates the use of more complex and potentially less efficient linear power amplifiers.

---

### 8. Important Points to Remember

*   **OFDM's Foundation:** Multi-carrier modulation, with OFDM as its most prominent example, is a crucial technique for combating the detrimental effects of frequency-selective fading and the resulting ISI in wireless channels.
*   **Bandwidth Division:** The core idea is to divide a wide channel into many narrow, orthogonal subchannels.
*   **Symbol Duration:** By reducing the symbol rate on each subchannel, the symbol duration increases, making it longer than the channel's delay spread.
*   **Flat Fading per Subchannel:** Each narrow subchannel experiences approximately flat fading, simplifying channel equalization.
*   **IFFT/FFT:** These mathematical tools are fundamental to the implementation of OFDM, enabling the efficient transmission and reception of data across multiple subcarriers.
*   **Cyclic Prefix (CP):** The CP is essential for mitigating ISI and maintaining orthogonality in the presence of multipath. Its length must be greater than the channel's delay spread.
*   **Spectral Efficiency:** OFDM achieves high spectral efficiency by packing orthogonal subcarriers tightly together without guard bands between them.
*   **Trade-offs:** OFDM offers significant advantages but also comes with challenges like high PAPR and sensitivity to synchronization errors.
*   **Relation to Module 4:** While path loss and shadowing reduce overall SNR, OFDM's ability to handle frequency-selective fading makes the system more resilient. Techniques like Adaptive Modulation and Coding, often employed with OFDM, can effectively adapt to varying path loss and shadowing conditions across different subcarriers.

---

This concludes our study of Multi-carrier Modulation within Module 4. Understanding these concepts is vital for comprehending modern wireless communication systems like Wi-Fi, LTE, and 5G, which heavily rely on OFDM.