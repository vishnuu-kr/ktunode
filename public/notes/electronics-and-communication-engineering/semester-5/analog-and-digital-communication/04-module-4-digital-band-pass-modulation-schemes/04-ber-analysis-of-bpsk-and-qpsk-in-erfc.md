---
title: "BER analysis of BPSK and QPSK in erfc."
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 4: Digital band pass modulation schemes"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe91b"
status: "completed"
scrapedAt: "2026-05-23T17:53:06.370Z"
---
# ANALOG AND DIGITAL COMMUNICATION - Module 4: Digital Band Pass Modulation Schemes

## Topic: BER Analysis of BPSK and QPSK in AWGN Channel using the Error Function (erfc)

This module focuses on digital band pass modulation schemes, and this topic specifically delves into the performance analysis of Binary Phase Shift Keying (BPSK) and Quadrature Phase Shift Keying (QPSK) in the presence of Additive White Gaussian Noise (AWGN) using the complementary error function (erfc). Understanding the Bit Error Rate (BER) is crucial for evaluating the reliability and efficiency of digital communication systems.

---

### 1. Introduction to Digital Band Pass Modulation and AWGN

*   **Digital Band Pass Modulation:** This technique shifts the digital baseband signal to a higher frequency band for transmission over a channel. This is necessary for efficient use of the transmission medium and for allowing multiple users to share the spectrum. Common band pass modulation schemes include ASK, FSK, PSK, and QAM. (Haykin & Moher, 5th Ed., Ch. 6)
*   **Additive White Gaussian Noise (AWGN) Channel:** This is a fundamental model for communication channels where noise is added to the transmitted signal.
    *   **Additive:** The noise is simply added to the signal.
    *   **White:** The noise has a flat power spectral density across all frequencies, meaning all frequencies are equally likely.
    *   **Gaussian:** The noise amplitude follows a Gaussian (normal) probability distribution.
*   **Performance Metric: Bit Error Rate (BER):** The BER is the ratio of the number of erroneous bits received to the total number of bits transmitted. A lower BER indicates a more reliable communication system. (Lathi & Ding, 5th Ed., Ch. 11)

---

### 2. Binary Phase Shift Keying (BPSK)

#### 2.1 BPSK Modulation Principle

*   **Concept:** In BPSK, binary data (0s and 1s) is represented by a shift in the phase of a carrier signal.
    *   A binary '0' might be represented by a carrier signal with phase $0$ or $\pi$.
    *   A binary '1' might be represented by a carrier signal with phase $\pi$ or $0$.
*   **Signal Representation:**
    *   Let the carrier signal be $s(t) = A \cos(2\pi f_c t)$, where $A$ is the amplitude and $f_c$ is the carrier frequency.
    *   If the binary digit is '0', the transmitted signal is $s_0(t) = A \cos(2\pi f_c t)$.
    *   If the binary digit is '1', the transmitted signal is $s_1(t) = -A \cos(2\pi f_c t) = A \cos(2\pi f_c t + \pi)$.
    *   This can be generalized as $s(t) = A d(t) \cos(2\pi f_c t)$, where $d(t) = +1$ for binary '1' and $d(t) = -1$ for binary '0'. (Note: The sign convention might vary, but the core idea is the phase shift).
*   **Bandwidth:** For coherent detection, the minimum bandwidth required is $B = R_b$, where $R_b$ is the bit rate. (Haykin & Moher, 5th Ed., Ch. 6.2)

#### 2.2 BPSK Demodulation and Detection

*   **Coherent Detection:** This is the most common and effective method for BPSK. It involves multiplying the received signal by a locally generated carrier that is synchronized in phase and frequency with the incoming carrier.
*   **Decision Rule:** After filtering and sampling, a decision is made based on the sign of the sampled output.
    *   If the sampled output is positive, assume binary '1'.
    *   If the sampled output is negative, assume binary '0'.

#### 2.3 BER Analysis of BPSK in AWGN using erfc

*   **Noise Model:** The AWGN channel adds noise $n(t)$ to the transmitted signal $s(t)$, resulting in the received signal $r(t) = s(t) + n(t)$. The noise $n(t)$ is Gaussian with zero mean and a power spectral density of $N_0/2$ for double-sided spectrum.
*   **Decision Variable:** In coherent detection, the output of the matched filter at the sampling instant is proportional to $y = A d(t) + N$, where $N$ is a Gaussian random variable with zero mean and variance $\sigma^2 = N_0/(2E_b)$ or $\sigma^2 = N_0 B$, depending on the normalization. More precisely, the decision variable is $Z = \int_0^{T_b} r(t) \cos(2\pi f_c t) dt$. For BPSK, $Z = A d(t) T_b + N'$, where $N'$ is a Gaussian random variable with mean 0 and variance $\sigma_N^2 = N_0 T_b / 2$.
*   **Error Probability:** An error occurs if the decision variable $Z$ has the wrong sign.
    *   If a '1' ($+A$) was transmitted, an error occurs if $Z < 0$.
    *   If a '0' ($-A$) was transmitted, an error occurs if $Z > 0$.
*   **Using the Error Function (erfc):** The probability of error for BPSK can be expressed using the complementary error function (erfc).
    *   The probability that a Gaussian random variable $X$ with mean $\mu$ and variance $\sigma^2$ exceeds a threshold $a$ is $P(X > a) = Q\left(\frac{a - \mu}{\sigma}\right)$.
    *   The Q-function is related to the erfc function by $Q(x) = \frac{1}{2} \text{erfc}\left(\frac{x}{\sqrt{2}}\right)$.
    *   For BPSK, the probability of error for a single bit is given by:
        $$P_b = Q\left(\sqrt{\frac{E_b}{N_0}}\right)$$
    *   Substituting the relation between Q and erfc:
        $$P_b = \frac{1}{2} \text{erfc}\left(\frac{\sqrt{E_b/N_0}}{\sqrt{2}}\right) = \frac{1}{2} \text{erfc}\left(\sqrt{\frac{E_b}{2N_0}}\right)$$
    *   Here, $E_b$ is the average energy per bit and $N_0$ is the power spectral density of the AWGN.
*   **Signal-to-Noise Ratio (SNR):** The term $E_b/N_0$ is a crucial parameter representing the ratio of signal energy to noise power per hertz. A higher $E_b/N_0$ leads to a lower BER. (Proakis & Salehi, 6th Ed., Ch. 4.3)

---

### 3. Quadrature Phase Shift Keying (QPSK)

#### 3.1 QPSK Modulation Principle

*   **Concept:** QPSK transmits two bits simultaneously by varying the phase of a carrier signal in four different states. These four states are typically separated by $90^\circ$ ($\pi/2$ radians).
*   **Symbol Mapping:** Two bits are grouped into a symbol. For example:
    *   '00' $\rightarrow$ Phase $0^\circ$
    *   '01' $\rightarrow$ Phase $90^\circ$
    *   '11' $\rightarrow$ Phase $180^\circ$
    *   '10' $\rightarrow$ Phase $270^\circ$
*   **Signal Representation:**
    *   The QPSK signal can be represented as:
        $$s(t) = \sqrt{\frac{2E_s}{T_s}} \cos(2\pi f_c t + \theta_k)$$
        where $E_s$ is the energy per symbol, $T_s$ is the symbol duration, and $\theta_k$ is the phase for the $k$-th symbol.
    *   Alternatively, it can be represented in in-phase (I) and quadrature (Q) components:
        $$s(t) = I(t) \cos(2\pi f_c t) - Q(t) \sin(2\pi f_c t)$$
        where $I(t)$ and $Q(t)$ are rectangular pulses of duration $T_s$, taking values $\pm \sqrt{E_s/T_s}$.
*   **Relationship to BPSK:** QPSK can be viewed as two independent BPSK modulations operating on two separate bit streams (I and Q channels), with the symbol rate being half the bit rate ($R_s = R_b/2$).
*   **Bandwidth:** The minimum bandwidth required for QPSK is $B = R_s = R_b/2$. This means QPSK achieves a higher spectral efficiency than BPSK. (Haykin & Moher, 5th Ed., Ch. 6.3)

#### 3.2 QPSK Demodulation and Detection

*   **Coherent Detection:** Similar to BPSK, coherent detection is used. The received signal is multiplied by in-phase and quadrature carriers, and the results are filtered and sampled.
*   **Decision Regions:** The decision regions are defined in the I-Q plane. If the sampled values $(I_{out}, Q_{out})$ fall into a specific region, the corresponding symbol is detected.
    *   Example decision regions:
        *   $I_{out} > 0, Q_{out} > 0 \implies$ '00'
        *   $I_{out} < 0, Q_{out} > 0 \implies$ '01'
        *   $I_{out} < 0, Q_{out} < 0 \implies$ '11'
        *   $I_{out} > 0, Q_{out} < 0 \implies$ '10'

#### 3.3 BER Analysis of QPSK in AWGN using erfc

*   **Bit Error Probability vs. Symbol Error Probability:** For QPSK, it's often easier to analyze the symbol error rate (SER) first. The bit error rate (BER) depends on the symbol mapping.
*   **Symbol Error Probability:** For coherent detection of QPSK in AWGN, the SER is given by:
    $$P_s = Q\left(\sqrt{\frac{E_s}{N_0}}\right)$$
    (This assumes a Gray coding scheme where adjacent symbols differ by only one bit, which is a common practice to minimize BER).
*   **Relationship between $E_s$ and $E_b$:** Since two bits are transmitted per symbol, the energy per symbol is twice the energy per bit: $E_s = 2E_b$.
*   **Substituting for QPSK:**
    $$P_s = Q\left(\sqrt{\frac{2E_b}{N_0}}\right)$$
*   **BER for Gray Coded QPSK:** For Gray coding, the probability of a bit error is approximately half the probability of a symbol error:
    $$P_b \approx \frac{1}{2} P_s = \frac{1}{2} Q\left(\sqrt{\frac{2E_b}{N_0}}\right)$$
*   **Using erfc:** Converting the Q-function to erfc:
    $$P_b \approx \frac{1}{2} \left(\frac{1}{2} \text{erfc}\left(\frac{\sqrt{2E_b/N_0}}{\sqrt{2}}\right)\right) = \frac{1}{4} \text{erfc}\left(\sqrt{\frac{E_b}{N_0}}\right)$$
*   **Comparison with BPSK:** For the same average energy per bit ($E_b/N_0$), QPSK has a lower BER than BPSK by approximately 3 dB of SNR. This is because QPSK spreads the same energy over two bits, effectively making each bit's decision more robust against noise. (Lathi & Ding, 5th Ed., Ch. 11.4)

---

### 4. Key Concepts and Definitions

*   **Bit Energy to Noise Power Spectral Density Ratio ($E_b/N_0$):** A fundamental parameter quantifying the SNR per bit. Higher values indicate better performance.
*   **Complementary Error Function (erfc):** A mathematical function defined as $\text{erfc}(x) = \frac{2}{\sqrt{\pi}} \int_x^\infty e^{-t^2} dt$. It is closely related to the Gaussian error function and the Q-function.
*   **Q-function:** Defined as $Q(x) = \frac{1}{\sqrt{2\pi}} \int_x^\infty e^{-t^2/2} dt$. It represents the tail probability of a standard normal distribution.
*   **Relationship:** $Q(x) = \frac{1}{2} \text{erfc}\left(\frac{x}{\sqrt{2}}\right)$.
*   **Symbol Error Rate (SER):** The probability of incorrectly detecting a transmitted symbol.
*   **Bit Error Rate (BER):** The probability of incorrectly detecting a transmitted bit.
*   **Coherent Detection:** Demodulation that requires a local oscillator at the receiver synchronized in phase and frequency with the received carrier.
*   **Spectral Efficiency:** The number of bits per second per Hertz (bps/Hz) that can be transmitted.

---

### 5. Examples and Comparisons

**Scenario:** Consider transmitting data at a rate of $R_b = 1$ Mbps. We want to achieve a BER of $10^{-5}$.

*   **BPSK:**
    *   $P_b = \frac{1}{2} \text{erfc}\left(\sqrt{\frac{E_b}{2N_0}}\right) = 10^{-5}$
    *   $\frac{1}{2} \text{erfc}\left(\sqrt{\frac{E_b}{2N_0}}\right) \approx 10^{-5}$
    *   $\text{erfc}\left(\sqrt{\frac{E_b}{2N_0}}\right) \approx 2 \times 10^{-5}$
    *   From erfc tables or calculators, if $\text{erfc}(x) \approx 2 \times 10^{-5}$, then $x \approx 3.8$.
    *   So, $\sqrt{\frac{E_b}{2N_0}} \approx 3.8$
    *   $\frac{E_b}{N_0} \approx 2 \times (3.8)^2 \approx 2 \times 14.44 = 28.88$
    *   In dB: $(E_b/N_0)_{\text{BPSK}} \approx 10 \log_{10}(28.88) \approx 14.6 \text{ dB}$.
    *   Bandwidth required: $B = R_b = 1$ MHz. Spectral efficiency = $1 \text{ Mbps} / 1 \text{ MHz} = 1 \text{ bps/Hz}$.

*   **QPSK (Gray Coded):**
    *   $P_b \approx \frac{1}{4} \text{erfc}\left(\sqrt{\frac{E_b}{N_0}}\right) = 10^{-5}$
    *   $\frac{1}{4} \text{erfc}\left(\sqrt{\frac{E_b}{N_0}}\right) \approx 10^{-5}$
    *   $\text{erfc}\left(\sqrt{\frac{E_b}{N_0}}\right) \approx 4 \times 10^{-5}$
    *   From erfc tables or calculators, if $\text{erfc}(x) \approx 4 \times 10^{-5}$, then $x \approx 3.5$.
    *   So, $\sqrt{\frac{E_b}{N_0}} \approx 3.5$
    *   $\frac{E_b}{N_0} \approx (3.5)^2 = 12.25$
    *   In dB: $(E_b/N_0)_{\text{QPSK}} \approx 10 \log_{10}(12.25) \approx 10.9 \text{ dB}$.
    *   Bandwidth required: $B = R_b/2 = 0.5$ MHz. Spectral efficiency = $1 \text{ Mbps} / 0.5 \text{ MHz} = 2 \text{ bps/Hz}$.

**Conclusion from Example:** To achieve the same BER of $10^{-5}$, QPSK requires approximately $14.6 \text{ dB} - 10.9 \text{ dB} = 3.7 \text{ dB}$ less SNR compared to BPSK. Additionally, QPSK is twice as spectrally efficient. This demonstrates the trade-off between spectral efficiency and power efficiency.

---

### 6. Practice Questions and Exercises

**Question 1:**
What is the relationship between the Q-function and the complementary error function (erfc)?
**Answer:** $Q(x) = \frac{1}{2} \text{erfc}\left(\frac{x}{\sqrt{2}}\right)$.

**Question 2:**
Derive the probability of error for BPSK in an AWGN channel using the erfc function, given the probability of error as $P_b = Q\left(\sqrt{E_b/N_0}\right)$.
**Answer:**
$P_b = Q\left(\sqrt{\frac{E_b}{N_0}}\right) = \frac{1}{2} \text{erfc}\left(\frac{\sqrt{E_b/N_0}}{\sqrt{2}}\right) = \frac{1}{2} \text{erfc}\left(\sqrt{\frac{E_b}{2N_0}}\right)$.

**Question 3:**
If the BER of BPSK is $10^{-4}$, what is the approximate value of $E_b/N_0$ required?
**Answer:**
$P_b = \frac{1}{2} \text{erfc}\left(\sqrt{\frac{E_b}{2N_0}}\right) = 10^{-4}$
$\text{erfc}\left(\sqrt{\frac{E_b}{2N_0}}\right) = 2 \times 10^{-4}$
From erfc tables, if $\text{erfc}(x) \approx 2 \times 10^{-4}$, then $x \approx 3.3$.
$\sqrt{\frac{E_b}{2N_0}} \approx 3.3$
$\frac{E_b}{N_0} \approx 2 \times (3.3)^2 \approx 2 \times 10.89 = 21.78$.
In dB: $10 \log_{10}(21.78) \approx 13.4 \text{ dB}$.

**Question 4:**
For QPSK, what is the expression for BER in terms of the erfc function, assuming Gray coding?
**Answer:** $P_b \approx \frac{1}{4} \text{erfc}\left(\sqrt{\frac{E_b}{N_0}}\right)$.

**Question 5:**
If QPSK requires an $E_b/N_0$ of 10 dB for a certain BER, what is the required $E_b/N_0$ for BPSK to achieve the same BER? (Hint: Consider the difference in dB).
**Answer:**
The difference in $E_b/N_0$ between BPSK and QPSK for the same BER is approximately 3 dB. So, if QPSK requires 10 dB, BPSK would require approximately $10 \text{ dB} + 3 \text{ dB} = 13 \text{ dB}$.

---

### 7. Important Points to Remember

*   **BPSK BER:** $P_b = \frac{1}{2} \text{erfc}\left(\sqrt{\frac{E_b}{2N_0}}\right)$.
*   **QPSK BER (Gray Coded):** $P_b \approx \frac{1}{4} \text{erfc}\left(\sqrt{\frac{E_b}{N_0}}\right)$.
*   **QPSK vs. BPSK Performance:** For the same BER, QPSK requires approximately 3 dB less SNR ($E_b/N_0$) than BPSK.
*   **Spectral Efficiency:** QPSK has twice the spectral efficiency of BPSK (2 bps/Hz vs. 1 bps/Hz) because it transmits two bits per symbol over half the bandwidth.
*   **AWGN Channel:** The noise model is critical for these derivations. The Gaussian nature of noise allows the use of the error function.
*   **Coherent Detection:** Both BPSK and QPSK analysis assume coherent detection for optimal performance.
*   **Gray Coding:** Important for QPSK to minimize the bit error rate by ensuring adjacent symbols differ by only one bit.

---

### 8. Alignment with Course Outcomes

*   **CO1 (Illustrate principles of analog communication):** While this module is digital, the concept of modulating a carrier is a shared principle with analog modulation, albeit with digital data. Understanding carrier modulation for digital signals builds upon analog concepts.
*   **CO2 (Explain basic concepts of digital communication):** This topic directly explains fundamental digital communication concepts like modulation schemes (BPSK, QPSK), the AWGN channel model, and the critical performance metric (BER).
*   **CO3 (Analyze baseband transmission in AWGN):** While this topic deals with bandpass, the underlying principles of noise addition and decision statistics in AWGN are extensions of baseband analysis. The SNR parameter ($E_b/N_0$) is central to both.
*   **CO4 (Apply various digital modulation techniques):** This topic provides the theoretical foundation for understanding how BPSK and QPSK work and their performance trade-offs, which is essential for applying them in system design. The BER analysis is a direct application of performance evaluation for these schemes.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 9. References Used and Incorporated

*   **Communication Systems by Simon Haykin and Michael Moher (5th Edition):** Concepts of digital modulation, bandpass transmission, and error probability analysis are extensively covered in their relevant chapters on PSK and Quadrature Amplitude Modulation (QAM), which includes QPSK as a fundamental case.
*   **Modern Digital and Analog Communication Systems by B.P. Lathi and Zhi Ding (5th Edition):** Provides detailed derivations for BER analysis of PSK schemes, including BPSK and QPSK, and their comparison in AWGN channels. The role of SNR ($E_b/N_0$) is clearly explained.
*   **Principles of Communication Systems by Herbert Taub and Donald L. Schilling:** Offers foundational knowledge on digital modulation and detection techniques, including PSK, and their performance in noise.
*   **Digital Communications by John G. Proakis and Masoud Salehi (6th Edition):** A comprehensive resource for digital modulation and coding, this book provides rigorous mathematical treatments of BER analysis for various schemes in AWGN channels, including the use of Q and erfc functions.

---

This concludes the study notes for the BER analysis of BPSK and QPSK in AWGN using the erfc function. Mastering these concepts is vital for understanding the practical limitations and design considerations of digital communication systems.