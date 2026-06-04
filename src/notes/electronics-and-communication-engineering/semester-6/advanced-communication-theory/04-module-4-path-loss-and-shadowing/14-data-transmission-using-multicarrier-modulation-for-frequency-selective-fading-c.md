---
title: "Data transmission using multicarrier modulation for frequency-selective fading channels"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 4: Path loss and shadowing"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed3b"
status: "completed"
scrapedAt: "2026-05-23T17:59:14.942Z"
---
# ADVANCED COMMUNICATION THEORY
## Module 4: Path Loss and Shadowing

## Topic: Data Transmission Using Multicarrier Modulation for Frequency-Selective Fading Channels

This module delves into the challenges of wireless communication, specifically addressing how signals degrade over distance (path loss) and due to obstacles (shadowing). We will then explore how multicarrier modulation techniques are employed to combat the detrimental effects of frequency-selective fading channels, a common phenomenon in wireless environments.

---

### 1. Introduction to Wireless Channel Impairments

Wireless channels are inherently unreliable due to various impairments that affect the transmitted signal. Understanding these impairments is crucial for designing robust communication systems.

#### 1.1 Path Loss
*   **Definition:** Path loss refers to the reduction in signal strength as the signal propagates from the transmitter to the receiver. It's primarily caused by the spreading of the signal energy over a larger area.
*   **Factors influencing Path Loss:**
    *   **Distance:** Signal strength decreases with increasing distance.
    *   **Frequency:** Higher frequencies generally experience higher path loss.
    *   **Environment:** Obstacles like buildings, terrain, and foliage contribute to path loss.
*   **Models for Path Loss:**
    *   **Free Space Path Loss (FSPL):** The most basic model, assuming propagation in a vacuum. It's proportional to the square of the distance and the square of the frequency.
        *   **Formula:** $PL_{dB} = 20 \log_{10}(d) + 20 \log_{10}(f) + 20 \log_{10}(4\pi/c)$ (where $d$ is distance, $f$ is frequency, $c$ is speed of light)
        *   **Key Insight:** Signal power decreases by $6$ dB for every doubling of distance.
    *   **Empirical Models:** Models that incorporate measured data and are tailored to specific environments (e.g., urban, suburban, rural). Examples include:
        *   **Okumura-Hata Model:** Widely used for urban and suburban environments.
        *   **COST 231 Hata Model:** An extension of the Hata model for higher frequencies and urban areas.
    *   **(Goldsmith, Chapter 2)**
    *   **(Rappaport, Chapter 4)**

#### 1.2 Shadowing (or Shadow Fading)
*   **Definition:** Shadowing is caused by large-scale variations in signal strength due to the presence of obstacles like buildings, hills, and trees. These obstacles block or attenuate the signal, creating "shadows" where the signal is weaker.
*   **Characteristics:**
    *   Slow variations in signal strength over relatively large distances (compared to multipath fading).
    *   Often modeled as a log-normal distribution, meaning the received signal power in dB follows a Gaussian distribution.
*   **Impact:** Shadowing can lead to significant signal attenuation, potentially causing complete loss of communication.
*   **(Goldsmith, Chapter 2)**
*   **(Rappaport, Chapter 4)**

#### 1.3 Fading
*   **Definition:** Fading refers to rapid fluctuations in signal amplitude and phase caused by the constructive and destructive interference of multiple signal paths arriving at the receiver. These paths are created by reflections, diffractions, and scattering from objects in the environment.
*   **Types of Fading:**
    *   **Flat Fading (or Non-Frequency Selective Fading):** The channel affects all frequency components of the signal equally. The coherence bandwidth of the channel is much larger than the signal bandwidth.
    *   **Frequency-Selective Fading:** The channel affects different frequency components of the signal differently. The coherence bandwidth of the channel is smaller than the signal bandwidth. This occurs when the delay spread of the channel is greater than the reciprocal of the signal bandwidth.
        *   **Key Characteristic:** Different frequency components experience different attenuation and phase shifts.
        *   **Consequence:** Inter-Symbol Interference (ISI) can occur if the delay spread is significant.
*   **Coherence Bandwidth:** The range of frequencies over which the channel response is approximately constant. If the signal bandwidth is much larger than the coherence bandwidth, the channel is frequency-selective.
*   **Delay Spread:** The difference between the arrival times of the earliest and latest significant multipath components. A larger delay spread implies a more frequency-selective channel.
*   **(Goldsmith, Chapter 5)**
*   **(Rappaport, Chapter 5)**
*   **(Haykin, Chapter 6)**

---

### 2. Multicarrier Modulation (MCM)

Multicarrier modulation techniques divide the available bandwidth into a large number of closely spaced, narrowband subcarriers. Each subcarrier is modulated independently with a portion of the data.

#### 2.1 Orthogonal Frequency-Division Multiplexing (OFDM)

OFDM is the most prominent multicarrier modulation technique. It overcomes the limitations of frequency-selective fading by breaking down a high data rate stream into many low data rate streams, each transmitted on a separate, narrowband subcarrier.

*   **Principle:**
    1.  **Serial-to-Parallel Conversion:** The incoming serial data stream is converted into multiple parallel low-rate data streams.
    2.  **Subcarrier Modulation:** Each parallel data stream is modulated onto a separate subcarrier.
    3.  **Orthogonality:** The subcarriers are designed to be orthogonal to each other. This means that the energy of one subcarrier does not interfere with the energy of another at their respective sampling instants, despite their close spacing.
    4.  **Inverse Fast Fourier Transform (IFFT):** The modulated subcarriers are combined by performing an Inverse Fast Fourier Transform (IFFT) on the data symbols. This effectively creates a single, complex waveform that carries all the subcarrier information.
    5.  **Cyclic Prefix (CP) Insertion:** A cyclic prefix (a copy of the end of the OFDM symbol) is added to the beginning of each OFDM symbol. This is crucial for mitigating the effects of frequency-selective fading and ISI.
    6.  **Parallel-to-Serial Conversion:** The parallel IFFT output is converted back to a serial stream for transmission.

*   **Advantages of OFDM in Frequency-Selective Fading Channels:**
    *   **Combating ISI:** By dividing the channel into many narrowband subcarriers, each subcarrier experiences (approximately) flat fading. The use of a cyclic prefix ensures that the ISI from one OFDM symbol does not spill over into the next. The delay spread of the channel becomes less problematic as long as it is shorter than the CP duration.
    *   **Simplicity of Equalization:** In a flat fading channel, equalization is simple – it involves multiplying the received signal by the inverse of the channel gain for that subcarrier. Since each subcarrier experiences flat fading, equalization becomes a set of simple scalar multiplications at the receiver, performed on each subcarrier independently.
    *   **Efficient Spectrum Utilization:** The subcarriers are closely spaced, with minimal guard bands between them, leading to efficient use of the available bandwidth.
    *   **Robustness to Narrowband Interference:** If interference affects a specific frequency band, only the subcarriers within that band will be affected, while others remain largely intact.
    *   **Flexibility:** Can be easily adapted to different channel conditions and data rates.

*   **OFDM Receiver:**
    1.  **Serial-to-Parallel Conversion:** The received serial stream is converted into parallel.
    2.  **Cyclic Prefix Removal:** The CP is removed from the beginning of each received symbol.
    3.  **Fast Fourier Transform (FFT):** An FFT is applied to the CP-removed symbol. This transforms the time-domain signal back into the frequency-domain, separating the individual subcarriers.
    4.  **Equalization:** Each subcarrier is equalized by dividing the received subcarrier by the estimated channel gain for that subcarrier.
    5.  **Demodulation:** Each equalized subcarrier is demodulated to recover the data bits.
    6.  **Parallel-to-Serial Conversion:** The recovered bits from all subcarriers are combined and converted back to a serial stream.

*   **Key Concepts Related to OFDM:**
    *   **Subcarrier Spacing ($\Delta f$):** The distance between adjacent subcarriers. For orthogonality, $\Delta f = 1/T_s$, where $T_s$ is the symbol duration of the entire OFDM symbol (including CP).
    *   **Number of Subcarriers (N):** A larger number of subcarriers means each subcarrier is narrower, making it more likely to experience flat fading.
    *   **Symbol Duration ($T_s$):** The total duration of an OFDM symbol.
    *   **Cyclic Prefix Duration ($T_{cp}$):** The duration of the added cyclic prefix.
    *   **Condition for ISI Mitigation:** $T_{cp} > \text{Delay Spread}$.
    *   **(Goldsmith, Chapter 7)**
    *   **(Rappaport, Chapter 12)**
    *   **(Molisch, Chapter 6)**

#### 2.2 Discrete Multi-Tone (DMT)

DMT is a variation of OFDM that is widely used in DSL (Digital Subscriber Line) technologies. It combines OFDM with adaptive bit loading.

*   **Principle:**
    *   DMT also divides the available bandwidth into many subcarriers.
    *   However, DMT adaptively allocates different modulation schemes (e.g., QPSK, 16-QAM, 64-QAM) and different numbers of bits per symbol to each subcarrier based on the channel's Signal-to-Noise Ratio (SNR) on that subcarrier.
    *   Subcarriers with better channel conditions (higher SNR) can carry more bits, while those with poorer conditions carry fewer bits or are turned off entirely.
*   **Advantages of DMT:**
    *   **Optimized Data Rate:** Maximizes the data rate for a given channel by exploiting variations in the channel's frequency response.
    *   **Robustness:** Can adapt to different channel conditions and noise levels.
*   **(Rappaport, Chapter 12)**

#### 2.3 Implementation using FFT/IFFT

The efficient implementation of OFDM relies on the Fast Fourier Transform (FFT) and Inverse Fast Fourier Transform (IFFT) algorithms.

*   **IFFT for Modulation:** The IFFT takes a block of $N$ data symbols (each corresponding to a subcarrier) and transforms them into a time-domain signal that can be transmitted.
*   **FFT for Demodulation:** The FFT at the receiver takes the received time-domain signal and transforms it back into the frequency domain, separating the $N$ subcarriers for demodulation and equalization.
*   **Why this works:** The mathematical properties of the Discrete Fourier Transform (DFT) allow for the creation of orthogonal subcarriers when they are spaced at integer multiples of $1/T_{symb}$, where $T_{symb}$ is the duration of the data symbols for each subcarrier. The IFFT/FFT effectively performs this process efficiently.
*   **(Goldsmith, Chapter 7)**
*   **(Haykin, Chapter 7 - Digital Modulation Techniques, provides background on FFT)**

---

### 3. Channel Estimation and Equalization in Multicarrier Systems

For OFDM to work effectively, the receiver needs to know the channel's characteristics for each subcarrier.

#### 3.1 Channel Estimation
*   **Purpose:** To determine the gain and phase shift of each subcarrier introduced by the wireless channel.
*   **Methods:**
    *   **Pilot Tones:** Known sequences of symbols (pilots) are inserted into the transmitted data at specific subcarriers and/or time instants. By comparing the received pilot with the known transmitted pilot, the receiver can estimate the channel response at those specific subcarriers.
    *   **Interpolation:** Once channel estimates are obtained at pilot subcarriers, interpolation techniques (e.g., linear, polynomial, spline interpolation) are used to estimate the channel response for the data-carrying subcarriers.
*   **Key Considerations:**
    *   **Pilot Density:** The number and spacing of pilot subcarriers affect the accuracy of channel estimation and the overhead incurred.
    *   **Channel Variation:** The rate at which the channel changes (coherence time) influences how often pilots need to be transmitted.
*   **(Goldsmith, Chapter 7)**
*   **(Rappaport, Chapter 12)**

#### 3.2 Equalization
*   **Purpose:** To invert the channel's effect on each subcarrier, thereby compensating for the attenuation and phase shifts introduced by the channel.
*   **Type of Equalization:**
    *   **Zero-Forcing (ZF) Equalizer:** A simple approach that aims to completely eliminate ISI and inter-carrier interference (ICI) by multiplying the received signal on each subcarrier by the inverse of the estimated channel gain for that subcarrier.
        *   **Limitation:** Can amplify noise significantly on subcarriers with poor channel conditions.
    *   **Minimum Mean Square Error (MMSE) Equalizer:** A more optimal approach that minimizes the mean squared error between the equalized signal and the transmitted signal. It balances the reduction of ISI/ICI with the amplification of noise.
        *   **Advantage:** Provides better performance than ZF equalization, especially in the presence of noise.
*   **How it works in OFDM:** For each subcarrier $k$, the received symbol $Y_k$ is given by $Y_k = H_k X_k + N_k$, where $H_k$ is the channel gain for subcarrier $k$, $X_k$ is the transmitted symbol, and $N_k$ is the noise. The equalizer aims to recover $X_k$ by multiplying $Y_k$ by an equalizer coefficient $W_k$.
    *   For ZF: $W_k = 1/H_k$
    *   The equalized symbol is $\hat{X}_k = Y_k W_k = (H_k X_k + N_k) (1/H_k) = X_k + N_k/H_k$.
*   **(Goldsmith, Chapter 7)**
*   **(Rappaport, Chapter 12)**
*   **(Haykin, Chapter 6 - Equalization)**

---

### 4. Data Transmission Performance and Analysis

#### 4.1 Bandwidth Efficiency
*   **Definition:** The rate at which data is transmitted per unit of bandwidth.
*   **OFDM's Efficiency:** OFDM achieves high bandwidth efficiency because the subcarriers are spectrally shaped and closely spaced, with orthogonality preventing significant Inter-Carrier Interference (ICI). While guard bands are needed between OFDM symbols (due to CP), the overall spectral efficiency is high.
*   **(Goldsmith, Chapter 7)**

#### 4.2 Spectral Efficiency
*   **Definition:** A measure of how effectively spectrum is used, usually expressed in bits per second per Hertz (bps/Hz).
*   **Factors affecting Spectral Efficiency in OFDM:**
    *   Number of subcarriers ($N$)
    *   Modulation scheme on each subcarrier (e.g., BPSK, QPSK, M-QAM)
    *   Number of bits per symbol (k) for M-QAM (M = $2^k$)
    *   Guard interval (CP) overhead
    *   Pilot overhead for channel estimation
*   **Formula (Simplified):** Spectral Efficiency $\approx \frac{\text{Data Rate}}{\text{Total Bandwidth}} \approx \frac{N \times \text{bits/symbol}}{\text{N} \times \Delta f} \times \frac{T_{symb}}{T_{symb} + T_{cp}} = \frac{k}{1/\text{symbol duration}} \times \frac{T_{symb}}{T_{symb} + T_{cp}}$
*   **(Goldsmith, Chapter 7)**

#### 4.3 Bit Error Rate (BER) Performance

*   **Impact of Frequency-Selective Fading:** In a frequency-selective fading channel, the BER performance of traditional single-carrier systems degrades significantly due to ISI.
*   **OFDM's Advantage:** By converting the frequency-selective channel into multiple flat-fading subchannels, OFDM significantly improves BER performance. Each subcarrier experiences a relatively flat fade, and with proper equalization, the impact of fading is mitigated.
*   **Role of Equalization:** Effective equalization is critical for achieving good BER performance. MMSE equalization generally offers better BER performance than ZF equalization, especially at low SNR.
*   **Impact of CP:** The cyclic prefix is essential for maintaining orthogonality and preventing ISI, thus directly contributing to better BER performance.
*   **Diversity Techniques:** OFDM can be combined with other diversity techniques (e.g., spatial diversity, frequency diversity across different OFDM blocks) to further improve BER performance.
*   **(Goldsmith, Chapter 7)**
*   **(Rappaport, Chapter 12)**

---

### 5. Learning Outcomes Alignment

*   **CO1: Explain information theory measures such as entropy, conditional entropy, mutual information.**
    *   While not directly calculating these, understanding channel capacity (which relates to mutual information) helps appreciate why techniques like OFDM are used to maximize data rates under noisy conditions. The breakdown of a frequency-selective channel into multiple flat fading channels allows for a more accurate assessment of the overall channel capacity.
*   **CO2: Apply source coding theorem for data compression.**
    *   This outcome is more about the source side. However, the efficiency gained by OFDM in the physical layer can allow for higher data rates, potentially making source coding more relevant for managing the information at the source.
*   **CO3: Apply channel coding for error detection and correction.**
    *   OFDM systems are almost always paired with channel coding (e.g., convolutional codes, turbo codes, LDPC codes). Channel coding is essential to correct the residual errors that might remain after equalization and to further improve the BER performance, especially in fading channels.
*   **CO4: Explain the basic Principle of wireless communication techniques.**
    *   This entire topic is a fundamental principle of modern wireless communication, explaining how multicarrier modulation is used to overcome specific channel impairments.
*   **CO5: Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels.**
    *   This topic extends the analysis to frequency-selective fading channels by showing how OFDM effectively transforms them into multiple flat fading channels, allowing for analysis on a per-subcarrier basis.
*   **CO6: Identify the advantages of various diversity and equalization techniques for improving the wireless receiver performance.**
    *   This topic directly addresses the advantages of OFDM (a form of frequency diversity by splitting data across subcarriers) and the critical role of equalization in mitigating the effects of frequency-selective fading for improved receiver performance.

---

### 6. Important Points to Remember

*   **Frequency-Selective Fading:** Occurs when the delay spread of the channel is greater than the reciprocal of the signal bandwidth, leading to Inter-Symbol Interference (ISI).
*   **OFDM's Core Idea:** Divide a wideband signal into many narrowband subcarriers, each experiencing (approximately) flat fading.
*   **Cyclic Prefix (CP):** Crucial for preventing ISI between OFDM symbols by maintaining the cyclicity of the modulated symbols and ensuring orthogonality. The CP duration must be longer than the channel's delay spread.
*   **FFT/IFFT:** The computational engine that enables efficient implementation of OFDM modulation and demodulation.
*   **Equalization in OFDM:** Becomes a simpler, per-subcarrier operation (scalar division), making it computationally efficient. MMSE equalization is generally preferred over ZF for better noise performance.
*   **Channel Estimation:** Necessary to obtain the channel gains for each subcarrier, typically done using pilot tones.
*   **DMT:** An adaptive version of OFDM that optimizes data rate by allocating bits based on subcarrier SNR.
*   **Benefits of OFDM:** Robustness against frequency-selective fading, efficient spectrum use, simplified equalization, and resilience to narrowband interference.
*   **Limitations of OFDM:** High Peak-to-Average Power Ratio (PAPR), sensitivity to frequency offset and timing errors, and overhead due to CP and pilots.

---

### 7. Practice Questions and Exercises

**Question 1:** Explain why frequency-selective fading is problematic for single-carrier modulation schemes and how OFDM addresses this issue.
*   **Answer:** Frequency-selective fading causes different frequency components of a signal to experience different attenuations and delays. For single-carrier systems with a large bandwidth, this leads to Inter-Symbol Interference (ISI) because the delayed and attenuated versions of previous symbols interfere with the current symbol. OFDM divides the wideband signal into many narrowband subcarriers. Each subcarrier experiences a relatively flat fade, meaning all frequency components within that narrow subcarrier are affected similarly. By using a cyclic prefix (CP) and per-subcarrier equalization, OFDM effectively converts the frequency-selective channel into multiple independent flat-fading channels, mitigating ISI and simplifying equalization.

**Question 2:** What is the role of the cyclic prefix in OFDM, and what condition must it satisfy to prevent Inter-Symbol Interference (ISI)?
*   **Answer:** The cyclic prefix is a copy of the end portion of an OFDM symbol that is appended to the beginning of the symbol. Its primary roles are:
    1.  **Preventing ISI:** It ensures that the ISI caused by the channel's delay spread within an OFDM symbol does not spill over into the next symbol. It also ensures that the ISI from previous symbols remains entirely within the cyclic prefix of the current symbol.
    2.  **Maintaining Orthogonality:** By making the transmitted signal cyclically extended, the CP helps maintain the orthogonality between subcarriers at the receiver, even in the presence of channel delay.
    *   **Condition for preventing ISI:** The duration of the cyclic prefix ($T_{cp}$) must be greater than the maximum delay spread of the wireless channel. $T_{cp} > \tau_{max}$, where $\tau_{max}$ is the delay spread.

**Question 3:** A wireless channel has a coherence bandwidth of 100 kHz. If an OFDM system uses a total bandwidth of 5 MHz, and each subcarrier has a bandwidth of 31.25 kHz, would you expect the channel to be frequency-selective or flat for individual subcarriers? Justify your answer.
*   **Answer:**
    *   OFDM subcarrier bandwidth = 31.25 kHz
    *   Channel coherence bandwidth = 100 kHz
    *   A channel is considered flat fading if the signal bandwidth is much smaller than the coherence bandwidth. Conversely, it is frequency-selective if the signal bandwidth is much larger than the coherence bandwidth.
    *   For individual subcarriers, the signal bandwidth (31.25 kHz) is much smaller than the coherence bandwidth (100 kHz). Therefore, each individual subcarrier can be treated as experiencing approximately **flat fading**. This is the fundamental reason why OFDM is effective in frequency-selective environments: it breaks down the frequency-selective channel into many flat-fading subchannels.

**Question 4:** Briefly describe the process of channel estimation in an OFDM system and how it's used for equalization.
*   **Answer:**
    1.  **Transmission of Pilots:** Known pilot symbols are inserted at specific subcarriers and/or time instants in the transmitted OFDM signal.
    2.  **Reception and Comparison:** At the receiver, the received pilot symbols are compared with the known transmitted pilot symbols.
    3.  **Channel Estimation at Pilots:** The difference between the received and transmitted pilots allows the receiver to estimate the channel's gain and phase shift at the pilot subcarriers.
    4.  **Interpolation:** The channel estimates at the pilot subcarriers are then used to interpolate and estimate the channel characteristics for the data-carrying subcarriers that do not contain pilots.
    5.  **Equalization:** Once the channel gain ($H_k$) for each subcarrier $k$ is estimated, equalization is performed by multiplying the received data symbol on that subcarrier ($Y_k$) by the inverse of the estimated channel gain ($1/H_k$ for Zero-Forcing, or a more complex coefficient for MMSE). This compensates for the channel's distortion, recovering the original data symbol ($X_k$).

**Question 5:** Discuss the trade-offs involved in choosing the duration of the cyclic prefix in an OFDM system.
*   **Answer:**
    *   **Adequate ISI Mitigation:** The primary consideration is that $T_{cp}$ must be longer than the channel's delay spread ($\tau_{max}$) to prevent ISI. A longer $T_{cp}$ provides robustness against longer delay spreads.
    *   **Overhead:** A longer $T_{cp}$ means a larger portion of the transmitted symbol is overhead, reducing the overall data rate and spectral efficiency. The ratio of $T_{cp}$ to the symbol duration $T_{symb}$ determines this overhead.
    *   **System Design:** The choice of $T_{cp}$ is a system design parameter that depends on the expected delay spread of the target wireless environment. For example, urban environments typically have larger delay spreads than rural environments, requiring longer $T_{cp}$.
    *   **Trade-off:** There is a direct trade-off between robustness to delay spread (requiring longer $T_{cp}$) and spectral efficiency (penalized by longer $T_{cp}$).

---

This concludes the study notes for Data Transmission Using Multicarrier Modulation for Frequency-Selective Fading Channels. Refer to the provided textbooks for deeper theoretical understanding and mathematical derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
