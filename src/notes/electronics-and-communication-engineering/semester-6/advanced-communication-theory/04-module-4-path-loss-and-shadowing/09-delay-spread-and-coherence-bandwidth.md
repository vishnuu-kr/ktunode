---
title: "Delay spread and Coherence bandwidth"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 4: Path loss and shadowing"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed36"
status: "completed"
scrapedAt: "2026-05-23T17:59:11.103Z"
---
# ADVANCED COMMUNICATION THEORY - Module 4: Path Loss and Shadowing

## Topic: Delay Spread and Coherence Bandwidth

---

### **Introduction to Multipath Propagation**

Wireless communication channels are characterized by the phenomenon of **multipath propagation**. This occurs when radio signals travel from the transmitter to the receiver via multiple paths. These paths can be direct, reflected off surfaces (buildings, terrain), diffracted around obstacles, or scattered by small objects.

**Key Concepts:**

*   **Multipath Components (MPCs):** Each distinct path that a signal takes from transmitter to receiver.
*   **Arrival Times:** MPCs arrive at the receiver at different times due to differences in their path lengths.
*   **Phasor Sum:** The received signal is the vector (phasor) sum of all these MPCs.

**Impact of Multipath:**

Multipath propagation can lead to both constructive and destructive interference, affecting the received signal strength. More significantly for this topic, it introduces **time dispersion**, which is the spreading of the signal in time. This time dispersion is the root cause of **intersymbol interference (ISI)**.

---

### **1. Delay Spread**

**Definition:**

**Delay spread** is a measure of the time dispersion of a signal in a wireless channel. It quantifies how much the multipath components spread out in time. Specifically, it refers to the time difference between the arrival of the first and last significant multipath components.

**Key Concepts:**

*   **Excess Delay ($\tau_i$):** The time difference between the arrival of a particular multipath component ($i$) and the arrival of the earliest significant multipath component.
*   **Power Delay Profile (PDP):** A representation of how the received signal power is distributed over time. It plots the average power of multipath components as a function of their excess delay.
    *   The PDP is typically expressed as $P(\tau)$, where $\tau$ is the excess delay.
    *   $P(\tau)$ represents the average power of MPCs arriving in a small delay interval $d\tau$ around $\tau$.

**Measures of Delay Spread:**

Several statistical measures are used to quantify delay spread from the PDP:

*   **RMS Delay Spread ($\sigma_\tau$):** This is the root-mean-square (RMS) value of the excess delays. It is the most commonly used metric for delay spread.

    *   **Formula:**
        $$ \sigma_\tau = \sqrt{\frac{\sum_{k} P(\tau_k) \tau_k^2}{\sum_{k} P(\tau_k)} - \left(\frac{\sum_{k} P(\tau_k) \tau_k}{\sum_{k} P(\tau_k)}\right)^2} $$
        where $P(\tau_k)$ is the power of the $k$-th multipath component with excess delay $\tau_k$.

        In a continuous PDP, this becomes:
        $$ \sigma_\tau = \sqrt{\frac{\int_{0}^{\infty} P(\tau) \tau^2 d\tau}{\int_{0}^{\infty} P(\tau) d\tau} - \left(\frac{\int_{0}^{\infty} P(\tau) \tau d\tau}{\int_{0}^{\infty} P(\tau) d\tau}\right)^2} $$

*   **Maximum Excess Delay ($\tau_{max}$):** The delay of the last significant multipath component. This is often defined as the delay at which the PDP falls below a certain threshold (e.g., -10 dB or -20 dB relative to the peak).

*   **Average Excess Delay ($\bar{\tau}$):** The mean excess delay, calculated as:
    $$ \bar{\tau} = \frac{\sum_{k} P(\tau_k) \tau_k}{\sum_{k} P(\tau_k)} = \frac{\int_{0}^{\infty} P(\tau) \tau d\tau}{\int_{0}^{\infty} P(\tau) d\tau} $$

**Relationship to Intersymbol Interference (ISI):**

Delay spread is directly related to the potential for ISI. If the delay spread is large, multipath components will arrive significantly later than the main signal, potentially overlapping with the next transmitted symbol.

*   **Rule of Thumb:** If the delay spread ($\sigma_\tau$) is much smaller than the symbol duration ($T_s$), then ISI is generally negligible.
*   **Condition for significant ISI:** If the delay spread is on the order of or greater than the symbol duration ($ \sigma_\tau \gtrsim T_s $), ISI becomes a significant problem.

**Examples and Textual References:**

*   **Goldsmith (2005), Chapter 2.3.1:** Discusses multipath propagation and its effects, introducing the concept of time dispersion and PDP.
*   **Rappaport (2022), Chapter 4.3:** Explains multipath propagation, delay spread, and its impact on ISI. It often provides typical values of RMS delay spread for different environments.
*   **Schiller (2008), Chapter 3.2:** Details multipath propagation and delay spread, highlighting its role in channel impulse response.

**Environmental Dependence:**

The delay spread is highly dependent on the propagation environment:

*   **Indoor Environments:** Typically have smaller delay spreads (e.g., 50-200 ns) due to shorter path differences.
*   **Outdoor Urban Environments:** Have larger delay spreads (e.g., 1-10 $\mu$s) due to reflections from tall buildings and multiple scattering paths.
*   **Rural Environments:** Generally have the smallest delay spreads.

---

### **2. Coherence Bandwidth ($B_c$)**

**Definition:**

**Coherence bandwidth** is a measure of the bandwidth over which the wireless channel is "flat" or "fading is correlated." It is defined as the range of frequencies for which the channel's impulse response is approximately constant. Equivalently, it is the bandwidth over which two sinusoids separated in frequency will experience roughly the same amplitude and phase shift.

**Relationship to Delay Spread:**

Coherence bandwidth is inversely related to the RMS delay spread ($\sigma_\tau$). This is a fundamental relationship in wireless channel characterization.

*   **Intuition:** If a channel has significant time dispersion (large delay spread), it means that different frequency components of a signal will experience different delays and attenuation. This makes the channel's response frequency-dependent. A larger delay spread implies more rapid fluctuations in the channel's frequency response, thus a smaller coherence bandwidth.

*   **Formula:** A common approximation for coherence bandwidth is:
    $$ B_c \approx \frac{1}{50 \sigma_\tau} $$
    This formula indicates that if the delay spread is small, the coherence bandwidth is large, meaning the channel is relatively flat over a wide range of frequencies. Conversely, a large delay spread leads to a narrow coherence bandwidth.

**Channel Classification based on Coherence Bandwidth:**

The relationship between the signal's bandwidth ($B_s$) and the channel's coherence bandwidth ($B_c$) dictates how the channel affects the signal:

*   **Flat Fading Channel:** If the signal bandwidth is much smaller than the coherence bandwidth ($B_s \ll B_c$), the channel is considered flat fading. This means the channel's amplitude and phase response are nearly constant across the entire signal bandwidth. All frequency components of the signal experience the same multiplicative gain.
    *   **Effect:** The signal is attenuated or amplified by a single random gain.
    *   **Mitigation:** Simple modulation schemes can often be used. Diversity techniques are effective.

*   **Frequency-Selective Fading Channel:** If the signal bandwidth is comparable to or larger than the coherence bandwidth ($B_s \gtrsim B_c$), the channel is considered frequency-selective fading. This means different frequency components of the signal experience different attenuation and phase shifts. The channel's frequency response varies significantly across the signal bandwidth.
    *   **Effect:** Leads to **Intersymbol Interference (ISI)** because different frequency components of a symbol, transmitted over different time delays, interfere with each other.
    *   **Mitigation:** Requires advanced techniques like equalization or spread spectrum.

**Examples and Textual References:**

*   **Goldsmith (2005), Chapter 2.3.1:** Explicitly defines coherence bandwidth and its inverse relationship with delay spread.
*   **Rappaport (2022), Chapter 4.3:** Discusses coherence bandwidth in the context of frequency-selective fading and its relation to delay spread.
*   **Tse & Viswanath (2005), Chapter 6.2:** Provides a more theoretical treatment of coherence bandwidth derived from the channel's autocorrelation function.

**Important Points to Remember:**

*   **The inverse relationship between delay spread and coherence bandwidth is crucial.**
*   **Coherence Bandwidth tells us the frequency range over which the channel is "well-behaved" (flat).**
*   **If the signal bandwidth exceeds the coherence bandwidth, the channel becomes frequency-selective, and ISI is a major concern.**

---

### **3. Impact on System Design**

Understanding delay spread and coherence bandwidth is critical for designing robust wireless communication systems.

**Key Considerations:**

*   **Modulation Scheme Selection:**
    *   For **flat fading channels** ($B_s \ll B_c$), modulation schemes like BPSK, QPSK, or OFDM with adequate cyclic prefix can be used.
    *   For **frequency-selective channels** ($B_s \gtrsim B_c$), modulation schemes that are robust to ISI or employ techniques to mitigate it are necessary. **OFDM (Orthogonal Frequency Division Multiplexing)** is particularly effective here.

*   **Orthogonal Frequency Division Multiplexing (OFDM):**
    *   OFDM divides a high-rate data stream into multiple lower-rate streams, each transmitted on a separate subcarrier.
    *   The symbol duration for each subcarrier is much longer than the symbol duration of the original high-rate stream.
    *   This makes each subcarrier experience a relatively flat fade (if the coherence bandwidth is larger than the subcarrier spacing).
    *   By adding a **cyclic prefix (CP)** to each OFDM symbol, the system can effectively eliminate ISI introduced by the channel, provided the CP duration is longer than the channel's delay spread.
    *   **Goldsmith (2005), Chapter 6.3.1** provides detailed analysis of OFDM for multipath channels.
    *   **Rappaport (2022), Chapter 7.4.2** also discusses OFDM's advantages in multipath environments.

*   **Equalization:**
    *   In frequency-selective channels, equalizers are used at the receiver to reverse the distortion caused by the channel's frequency-dependent response.
    *   **Linear Equalizers** (e.g., Zero-Forcing, MMSE) and **Non-linear Equalizers** (e.g., Decision Feedback Equalizer - DFE) are common.
    *   The effectiveness of an equalizer depends on how well it can track and compensate for the channel variations.
    *   **Course Outcome CO6** is directly related to understanding and identifying the advantages of equalization techniques.
    *   **Haykin (2020), Chapter 9** in his "Digital Communication Systems" (Indian Adaptation) often covers equalization techniques in detail.
    *   **Goldsmith (2005), Chapter 5.2** also discusses equalization in detail.

*   **Spread Spectrum Techniques:**
    *   Spread spectrum techniques, like Direct Sequence Spread Spectrum (DSSS), spread the signal over a much larger bandwidth than required for the information.
    *   This makes the signal more resistant to narrow-band interference and multipath fading.
    *   The **processing gain** of spread spectrum allows the receiver to tolerate significant ISI.
    *   **Schiller (2008), Chapter 7.4** discusses spread spectrum for multipath channels.

---

### **4. Channel Impulse Response and Channel Models**

**Channel Impulse Response ($h(\tau)$):**

The wireless channel can be modeled as a linear time-varying system. Its response to an impulse input is the **channel impulse response** $h(t)$. For a slowly varying channel, it can be approximated as time-invariant over a symbol period.

*   **Mathematical Representation:**
    $$ h(t) = \sum_{k=0}^{N-1} \alpha_k(t) \delta(t - \tau_k(t)) $$
    where:
    *   $N$ is the number of multipath components.
    *   $\alpha_k(t)$ is the complex gain of the $k$-th multipath component (amplitude and phase).
    *   $\tau_k(t)$ is the excess delay of the $k$-th multipath component.
    *   $\delta(t)$ is the Dirac delta function.

*   **Frequency Domain:** The Fourier Transform of $h(t)$ is the channel frequency response $H(f)$.
    $$ H(f) = \mathcal{F}\{h(t)\} = \sum_{k=0}^{N-1} \alpha_k e^{-j2\pi f \tau_k} $$
    (Assuming $h(t)$ is time-invariant over the relevant frequency range).

**Power Delay Profile (PDP) and its relation to $h(t)$:**

The PDP, $P(\tau)$, is related to the channel impulse response. The average power of the $k$-th multipath component is $|\alpha_k|^2$.

$$ P(\tau) = E[|h(t) * \delta(t-\tau)|^2] = E\left[\sum_{i} \sum_{j} \alpha_i \alpha_j^* e^{-j2\pi f \tau_i} e^{j2\pi f \tau_j} \right] $$
For delay spread, we are primarily interested in the distribution of power over delay:
$$ P(\tau) = \sum_{k} |\alpha_k|^2 \delta(\tau - \tau_k) $$
(This is a discrete representation, often smoothed to get the continuous PDP used for $\sigma_\tau$).

**Coherence Bandwidth and Frequency Response Correlation:**

The coherence bandwidth is related to the frequency correlation function of the channel. The channel is considered flat over frequencies $f_1$ and $f_2$ if their correlation is high. The coherence bandwidth is the frequency separation over which the correlation drops to a certain level (e.g., 0.5).

*   **Textual Reference:**
    *   **Tse & Viswanath (2005), Chapter 6.2:** Derives the relationship between coherence bandwidth and the autocorrelation of the channel's frequency response. It shows that if the delay spread is small, the frequency response is highly correlated over a wider bandwidth.

---

### **5. Relating to Course Outcomes**

*   **CO4: Explain the basic Principle of wireless communication techniques (Knowledge Level: K2)**
    *   Understanding multipath propagation, delay spread, and coherence bandwidth are fundamental to grasping how wireless channels affect signal transmission and the principles behind overcoming these challenges (e.g., using OFDM, equalization).

*   **CO5: Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels (Knowledge Level: K2)**
    *   Delay spread and coherence bandwidth are key parameters used to classify fading channels as flat or frequency-selective, which directly impacts modulation performance analysis. Flat fading is a direct consequence of $B_s \ll B_c$.

*   **CO6: Identify the advantages of various diversity and equalization techniques for improving the wireless receiver performance. (Knowledge Level: K3)**
    *   **Equalization:** As discussed, frequency-selective channels (large delay spread, small $B_c$) necessitate equalization. Understanding delay spread helps in choosing the right equalizer and its complexity.
    *   **Diversity:** While diversity is primarily for combating Rayleigh fading (amplitude variations), understanding delay spread helps in choosing diversity techniques that are also effective against ISI. For instance, time diversity or frequency diversity can be used to combat frequency-selective fading by effectively changing the signal's bandwidth relative to the coherence bandwidth.

---

### **6. Practice Questions and Answers**

**Question 1:**
A wireless channel has an RMS delay spread of $\sigma_\tau = 2 \mu s$. If a system transmits symbols with a duration of $T_s = 1 \mu s$, what is the likely impact of multipath on the received signal? Will the channel be considered flat fading or frequency-selective for this signal?

**Answer 1:**
The RMS delay spread is $\sigma_\tau = 2 \mu s$, and the symbol duration is $T_s = 1 \mu s$.
Since $\sigma_\tau > T_s$, the delay spread is significant compared to the symbol duration. This indicates that multipath components will arrive at times that overlap with subsequent symbols, leading to significant **intersymbol interference (ISI)**.
The coherence bandwidth can be estimated as $B_c \approx \frac{1}{50 \sigma_\tau} = \frac{1}{50 \times 2 \times 10^{-6}} = \frac{1}{100 \times 10^{-6}} = 10 \text{ kHz}$.
The signal bandwidth ($B_s$) is approximately $1/T_s = 1/1 \mu s = 1 \text{ MHz}$.
Since $B_s (1 \text{ MHz}) \gg B_c (10 \text{ kHz})$, the channel is **frequency-selective**. The channel's response will vary significantly across the signal's bandwidth.

---

**Question 2:**
Consider two wireless systems:
System A: Transmits at 1 Mbps with a typical symbol duration of 1 $\mu s$. The channel has an RMS delay spread of 50 ns.
System B: Transmits at 1 Mbps with a typical symbol duration of 1 $\mu s$. The channel has an RMS delay spread of 5 $\mu s$.

For which system is OFDM with a cyclic prefix likely to be more advantageous, and why?

**Answer 2:**
OFDM is particularly advantageous in mitigating ISI caused by frequency-selective fading.
Let's analyze both systems:

*   **System A:**
    *   $T_s = 1 \mu s$.
    *   $\sigma_\tau = 50 \text{ ns} = 0.05 \mu s$.
    *   Here, $\sigma_\tau \ll T_s$. ISI is likely to be minimal.
    *   $B_c \approx \frac{1}{50 \times 0.05 \mu s} = \frac{1}{2.5 \mu s} \approx 400 \text{ kHz}$.
    *   $B_s \approx 1 \text{ MHz}$.
    *   $B_s > B_c$, so the channel is frequency-selective, but the delay spread is small relative to the symbol period, meaning the ISI might be manageable with simpler techniques or less aggressive equalization.

*   **System B:**
    *   $T_s = 1 \mu s$.
    *   $\sigma_\tau = 5 \mu s$.
    *   Here, $\sigma_\tau \gg T_s$. ISI is expected to be very severe.
    *   $B_c \approx \frac{1}{50 \times 5 \mu s} = \frac{1}{250 \mu s} \approx 4 \text{ kHz}$.
    *   $B_s \approx 1 \text{ MHz}$.
    *   $B_s \gg B_c$, the channel is highly frequency-selective.

**Conclusion:**
OFDM with a cyclic prefix is likely to be **more advantageous for System B**. The large delay spread in System B's channel causes severe ISI, making it difficult to recover transmitted symbols. OFDM, by dividing the bandwidth into many subcarriers, effectively makes each subcarrier experience a flatter fade. The cyclic prefix in OFDM is designed to be longer than the channel's delay spread, ensuring that ISI from previous symbols does not interfere with the current symbol on each subcarrier. System A's channel is less problematic for ISI.

---

**Question 3:**
Define Coherence Bandwidth and explain its relationship with Delay Spread. How does it impact the choice of modulation for a wireless system?

**Answer 3:**
**Definition of Coherence Bandwidth ($B_c$):**
Coherence bandwidth is a measure of the bandwidth over which the wireless channel's frequency response is approximately constant. It represents the range of frequencies over which two signals will experience roughly the same channel gain and phase shift.

**Relationship with Delay Spread ($\sigma_\tau$):**
The coherence bandwidth is inversely proportional to the RMS delay spread of the channel. The relationship is often approximated as:
$$ B_c \approx \frac{1}{50 \sigma_\tau} $$
A larger delay spread means that multipath components arrive at significantly different times, causing the channel's frequency response to vary rapidly with frequency. This results in a smaller coherence bandwidth. Conversely, a small delay spread implies that multipath components arrive close together, leading to a more constant frequency response over a wider bandwidth, hence a larger coherence bandwidth.

**Impact on Modulation Choice:**

The relationship between the signal's bandwidth ($B_s$) and the channel's coherence bandwidth ($B_c$) determines the fading characteristics and guides the choice of modulation:

1.  **Flat Fading ($B_s \ll B_c$):**
    *   If the signal bandwidth is much smaller than the coherence bandwidth, the channel is considered flat fading. All frequency components of the signal experience the same multiplicative gain.
    *   **Impact:** ISI is minimal. Modulation schemes like BPSK, QPSK, or simple spread spectrum are suitable. Diversity techniques are very effective.

2.  **Frequency-Selective Fading ($B_s \gtrsim B_c$):**
    *   If the signal bandwidth is comparable to or larger than the coherence bandwidth, the channel is considered frequency-selective. Different frequency components of the signal experience different gains and phase shifts.
    *   **Impact:** ISI is significant. This necessitates modulation techniques that can cope with ISI.
        *   **OFDM:** Divides the wide signal bandwidth into many narrower subchannels, each experiencing flatter fading. The cyclic prefix helps eliminate ISI.
        *   **Equalization:** Receivers can use equalizers (e.g., DFE, MMSE) to compensate for the channel's frequency-dependent distortion.
        *   **Spread Spectrum:** The large processing gain allows the system to tolerate significant ISI.

Therefore, a channel with a small delay spread (large $B_c$) allows for simpler modulation, while a channel with a large delay spread (small $B_c$) requires more sophisticated techniques like OFDM or equalization to combat ISI.

---

### **Important Points to Remember Summary**

*   **Delay Spread ($\sigma_\tau$) quantifies time dispersion** caused by multipath.
*   **Large delay spread implies significant ISI.**
*   **Coherence Bandwidth ($B_c$) quantifies frequency correlation** of the channel.
*   **$B_c$ is inversely related to $\sigma_\tau$.**
*   **Flat Fading:** $B_s \ll B_c$ (low ISI).
*   **Frequency-Selective Fading:** $B_s \gtrsim B_c$ (high ISI).
*   **OFDM and Equalization are key techniques for frequency-selective channels.**
*   The propagation environment (indoor, urban, rural) heavily influences delay spread values.

---

This concludes the study notes on Delay Spread and Coherence Bandwidth. Remember to review the relevant chapters in Goldsmith and Rappaport for a deeper understanding and more detailed examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
