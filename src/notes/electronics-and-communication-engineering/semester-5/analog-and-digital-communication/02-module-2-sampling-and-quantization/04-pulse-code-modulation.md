---
title: "Pulse code modulation"
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 2: Sampling and Quantization"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe903"
status: "completed"
scrapedAt: "2026-05-23T17:52:50.499Z"
---
# ANALOG AND DIGITAL COMMUNICATION

## Module 2: Sampling and Quantization

### Topic: Pulse Code Modulation (PCM)

---

**Course Outcomes Alignment:**

*   **CO1 (K2):** Understands the fundamental processes involved in converting analog signals to digital representations, a core aspect of PCM.
*   **CO2 (K2):** Explains the basic concepts of digital communication by detailing the steps and principles of PCM, which forms the bedrock of many digital communication systems.
*   **CO3 (K3):** While PCM itself is a precursor to baseband transmission, understanding its principles is crucial for analyzing how digitized data is later transmitted.
*   **CO4 (K3):** The output of PCM is the raw digital data that is then subjected to various digital modulation techniques. Understanding PCM is a prerequisite for applying these techniques.

**Learning Outcomes:**

Upon completion of this topic, you will be able to:

*   Describe the fundamental process of Pulse Code Modulation (PCM).
*   Explain the individual steps involved in PCM: sampling, quantization, and coding.
*   Define and explain sampling, including the Nyquist-Shannon sampling theorem.
*   Define and explain quantization, including quantization error and its sources.
*   Differentiate between uniform and non-uniform quantization.
*   Explain the concept of coding and its role in PCM.
*   Analyze the trade-offs between sampling rate, number of quantization levels, and the resulting bit rate and signal-to-noise ratio (SNR).
*   Understand the advantages and disadvantages of PCM.

---

### 1. Introduction to Pulse Code Modulation (PCM)

Pulse Code Modulation (PCM) is a method used to digitally represent analog signals. It is a fundamental technique in digital communication systems and forms the basis for most modern digital voice and data transmission. PCM involves converting an analog signal into a sequence of binary pulses, which can then be transmitted, stored, and processed digitally.

**Key Concept:** PCM is an *analog-to-digital conversion (ADC)* technique that involves three primary steps: **sampling**, **quantization**, and **coding**.

---

### 2. The PCM Process

The PCM process can be broken down into two main stages:

**A. Encoding (Transmitter Side):**
The analog signal is converted into a digital format.

1.  **Sampling:** The continuous-time analog signal is sampled at discrete time intervals.
2.  **Quantization:** The sampled values are approximated to the nearest allowed discrete level.
3.  **Coding:** The quantized levels are assigned binary codes.

**B. Decoding (Receiver Side):**
The digital signal is converted back into an analog signal.

1.  **Decoding:** The binary codes are converted back to their corresponding quantized levels.
2.  **Reconstruction:** The discrete-time, discrete-amplitude signal is smoothed to reconstruct an analog signal.

---

### 3. Step 1: Sampling

**Definition:** Sampling is the process of converting a continuous-time analog signal into a discrete-time signal by taking measurements (samples) of the signal at regular intervals.

**Key Concept:** The sampling frequency ($f_s$) determines the rate at which samples are taken.

**Nyquist-Shannon Sampling Theorem:**

*   **Statement:** For a band-limited signal $x(t)$ with a maximum frequency $f_{max}$, it can be perfectly reconstructed from its samples $x(nT)$ if the sampling frequency $f_s = 1/T$ is greater than twice the maximum frequency, i.e., $f_s > 2f_{max}$.
*   **Nyquist Rate:** The minimum sampling rate required for perfect reconstruction is called the Nyquist rate, which is $2f_{max}$.
*   **Nyquist Interval:** The maximum sampling period $T$ is called the Nyquist interval, $T_{max} = 1/(2f_{max})$.

**Why is this important?** If the sampling rate is less than the Nyquist rate, an effect called **aliasing** occurs, where higher frequencies in the original signal masquerade as lower frequencies in the sampled signal, leading to irreversible distortion.

**Practical Considerations:**

*   **Anti-aliasing Filter:** Before sampling, an analog low-pass filter (anti-aliasing filter) is used to remove any frequencies above $f_{max}$ (or slightly below $f_s/2$ to account for filter imperfections).
*   **Oversampling:** In practice, sampling is often done at a rate slightly higher than the Nyquist rate (oversampling) to relax the requirements on the analog filters and to simplify digital filtering in the receiver.

**Example (Haykin, 5th Ed.):** Consider a voice signal with a maximum frequency of 4 kHz. According to the Nyquist-Shannon sampling theorem, the minimum sampling rate required is $2 \times 4 \text{ kHz} = 8 \text{ kHz}$. Therefore, samples are taken every $1/8000$ seconds.

**Textbook Reference:**
*   *Communication Systems* by Simon Haykin and Michael Moher (5th Ed.): Chapter 2 discusses sampling theory in detail, including the Nyquist-Shannon sampling theorem and aliasing.
*   *Modern Digital and Analog Communication Systems* by B.P. Lathi and Zhi Ding (5th Ed.): Chapter 5 covers sampling and reconstruction, emphasizing practical aspects and the sampling theorem.

---

### 4. Step 2: Quantization

**Definition:** Quantization is the process of mapping the sampled values (which can take any value within a range) to a finite set of discrete levels. Each sample is approximated to the nearest quantization level.

**Key Concept:** Quantization introduces an error, known as **quantization error** or **quantization noise**, because the actual sampled value is rarely exactly equal to one of the discrete levels.

**Quantization Error:**
*   The difference between the actual sample value and the quantized level.
*   It is an unavoidable part of the PCM process and is inherent to converting a continuous-amplitude signal into a discrete-amplitude signal.
*   The quantization error is assumed to be uniformly distributed over the interval $[-\Delta/2, \Delta/2]$, where $\Delta$ is the step size between adjacent quantization levels.

**Uniform Quantization:**

*   In uniform quantization, the quantization levels are equally spaced.
*   The step size $\Delta$ is constant throughout the entire range of the signal.
*   **Advantages:** Simple to implement.
*   **Disadvantages:** For signals with a non-uniform amplitude distribution (like speech), uniform quantization is inefficient. Small amplitude signals are quantized with the same precision as large amplitude signals, leading to a poor signal-to-quantization-noise ratio (SQNR) at low amplitudes.

**Formula for SQNR (Uniform Quantization):**
For a uniformly distributed input signal, the SQNR is approximately given by:
$SQNR_{dB} \approx 6.02m + 1.76 \text{ dB}$
where $m$ is the number of bits per sample.

**Example (Haykin, 5th Ed.):** If a signal is quantized using 8 bits, $m=8$.
$SQNR_{dB} \approx 6.02 \times 8 + 1.76 = 48.16 + 1.76 = 49.92 \text{ dB}$.
This means that for every additional bit per sample, the SQNR improves by approximately 6 dB.

**Non-Uniform Quantization:**

*   In non-uniform quantization, the quantization levels are not equally spaced. The step sizes are smaller for smaller signal amplitudes and larger for larger signal amplitudes.
*   This is done to improve the SQNR for signals whose amplitudes are not uniformly distributed, which is common in practice (e.g., speech signals).
*   **Compression:** Non-uniform quantization involves compressing the dynamic range of the signal at the transmitter (using a non-linear function, e.g., $\mu$-law or A-law companding) and expanding it at the receiver.

**Companding:**
*   **Compression:** Applied at the transmitter to reduce the signal's dynamic range, making it more robust to noise and improving SQNR for low-amplitude signals.
*   **Expansion:** Applied at the receiver to restore the signal's original dynamic range.

**$\mu$-law (mu-law) Companding:**
*   Used primarily in North America and Japan for speech digitization.
*   The characteristic is defined by:
    $y = \text{sgn}(x) \frac{\ln(1 + \mu|x|/V_{max})}{\ln(1 + \mu)}$
    where $x$ is the input sample, $V_{max}$ is the maximum signal amplitude, $\mu$ is a parameter (typically 255 for 8-bit PCM), and $y$ is the compressed output.

**A-law Companding:**
*   Used primarily in Europe and other parts of the world for speech digitization.
*   The characteristic is defined by:
    $y = \text{sgn}(x) \begin{cases} \frac{A|x|/V_{max}}{1 + \ln(A)} & \text{if } |x|/V_{max} < 1/A \\ \frac{1 + \ln(A|x|/V_{max})}{1 + \ln(A)} & \text{if } |x|/V_{max} \ge 1/A \end{cases}$
    where $A$ is a parameter (typically 87.6 for 8-bit PCM).

**Textbook Reference:**
*   *Communication Systems* by Simon Haykin and Michael Moher (5th Ed.): Chapter 2 extensively covers quantization, quantization error, uniform and non-uniform quantization, and companding.
*   *Modern Digital and Analog Communication Systems* by B.P. Lathi and Zhi Ding (5th Ed.): Chapter 5 provides a thorough explanation of quantization techniques, including $\mu$-law and A-law companding.
*   *Introduction to Analog and Digital Communication* (Indian Adaptation) by Simon Haykin and Michael Moher (2nd Ed.): Also covers these concepts with an Indian context.

---

### 5. Step 3: Coding

**Definition:** Coding is the process of assigning a unique binary code to each quantized level.

**Key Concept:** The number of bits used per sample ($m$) determines the number of quantization levels ($L$) and thus the number of possible binary codes.
$L = 2^m$

**Example:**
*   If $m = 3$ bits per sample, there are $2^3 = 8$ quantization levels.
*   Each level is assigned a unique 3-bit binary code (e.g., 000, 001, 010, ..., 111).

**Line Coding:**
The sequence of binary codes generated by the coding process is then converted into a line code for transmission. Common line codes include:
*   **Unipolar NRZ:** Simple, but has a DC component and poor bandwidth efficiency.
*   **Polar NRZ:** Better spectral properties, but also has a DC component.
*   **Bipolar AMI (Alternate Mark Inversion):** No DC component, better bandwidth efficiency.
*   **Manchester Coding:** Self-clocking, no DC component, but requires twice the bandwidth.

*(Note: Line coding is often covered in detail in later modules related to digital transmission and baseband/passband signaling, but it's the final step in the PCM encoding chain.)*

**Textbook Reference:**
*   *Modern Digital and Analog Communication Systems* by B.P. Lathi and Zhi Ding (5th Ed.): Chapter 7 discusses line codes used for digital transmission.

---

### 6. PCM System Parameters and Trade-offs

**Bit Rate ($R_b$):**
*   The rate at which binary digits are transmitted.
*   $R_b = m \times f_s$
    where $m$ is the number of bits per sample and $f_s$ is the sampling frequency.

**Bandwidth Requirement:**
*   The bandwidth required for PCM transmission depends on the bit rate and the chosen line coding scheme.
*   For Manchester coding, the required bandwidth is approximately $R_b$.
*   For NRZ coding, the required bandwidth is approximately $R_b/2$.

**Signal-to-Quantization-Noise Ratio (SQNR):**

*   **For Uniform Quantization:** $SQNR_{dB} \approx 6.02m + 1.76 \text{ dB}$
*   **Impact of $m$:** Increasing the number of bits per sample ($m$) significantly improves SQNR. For every 1-bit increase in $m$, the SQNR improves by approximately 6 dB.
*   **Impact of $f_s$:** The sampling frequency ($f_s$) itself does not directly affect SQNR. However, a higher $f_s$ implies a higher bit rate, which often necessitates more bits per sample to maintain a certain SQNR, or results in a wider transmission bandwidth.

**Trade-offs:**

*   **Higher $m$ (more bits per sample):**
    *   **Pros:** Better SQNR (higher fidelity).
    *   **Cons:** Higher bit rate ($R_b$), requiring more transmission bandwidth and higher data processing capabilities.
*   **Higher $f_s$ (higher sampling rate):**
    *   **Pros:** More accurate reconstruction (especially if the signal has frequencies close to $f_{max}$), allows for more bits per sample for a given maximum frequency.
    *   **Cons:** Higher bit rate ($R_b$), requiring more transmission bandwidth and higher data processing capabilities.

**Example:** A voice signal requires 8 bits per sample ($m=8$) and a sampling rate of 8 kHz ($f_s=8000$ Hz).
*   Bit Rate $R_b = 8 \text{ bits/sample} \times 8000 \text{ samples/second} = 64000 \text{ bits/second} = 64 \text{ kbps}$.
*   SQNR (approx.) $\approx 6.02 \times 8 + 1.76 = 49.92 \text{ dB}$.

If we increase $m$ to 10 bits for better quality:
*   $R_b = 10 \times 8000 = 80 \text{ kbps}$.
*   SQNR (approx.) $\approx 6.02 \times 10 + 1.76 = 60.2 + 1.76 = 61.96 \text{ dB}$.
This improves quality significantly but doubles the bandwidth requirement (if using a constant line code).

**Textbook Reference:**
*   *Communication Systems* by Simon Haykin and Michael Moher (5th Ed.): Chapter 2 discusses the relationship between $m$, $f_s$, bit rate, and SQNR.

---

### 7. Advantages of PCM

*   **Robustness to Noise:** Digital signals are less susceptible to noise and distortion during transmission compared to analog signals. Regeneration is possible at repeaters.
*   **High Fidelity:** PCM can achieve very high fidelity in signal reconstruction, especially with an adequate number of bits per sample.
*   **Multiplexing Capability:** Digital signals can be easily multiplexed using Time Division Multiplexing (TDM).
*   **Digital Signal Processing:** PCM signals can be easily processed using digital hardware (e.g., filters, codecs), allowing for advanced functionalities.
*   **Error Control:** Digital data can be protected using error-correction codes.
*   **Efficient Storage and Transmission:** Digital signals can be stored and transmitted efficiently over various media.

**Textbook Reference:**
*   *Modern Digital and Analog Communication Systems* by B.P. Lathi and Zhi Ding (5th Ed.): Chapter 5 and subsequent chapters highlight the advantages of digital communication enabled by PCM.

---

### 8. Disadvantages of PCM

*   **Bandwidth Requirement:** PCM systems generally require a wider transmission bandwidth compared to analog systems for the same information-carrying capacity.
*   **Complexity:** The encoding and decoding circuitry for PCM can be complex.
*   **Quantization Error:** Despite its advantages, PCM inherently suffers from quantization error, which limits the ultimate fidelity.

---

### 9. Practice Questions and Answers

**Question 1:**
A continuous-time signal $x(t)$ has a maximum frequency of 5 kHz. What is the minimum sampling rate required for this signal to be sampled without aliasing?
*   **Answer:** According to the Nyquist-Shannon sampling theorem, the minimum sampling rate is twice the maximum frequency. So, $f_s = 2 \times 5 \text{ kHz} = 10 \text{ kHz}$.

**Question 2:**
If a PCM system uses 10 bits per sample for quantization, what is the approximate SQNR in dB?
*   **Answer:** For uniform quantization, $SQNR_{dB} \approx 6.02m + 1.76 \text{ dB}$. With $m=10$, $SQNR_{dB} \approx 6.02 \times 10 + 1.76 = 60.2 + 1.76 = 61.96 \text{ dB}$.

**Question 3:**
Describe the purpose of companding in PCM systems.
*   **Answer:** Companding is used in non-uniform quantization to improve the signal-to-quantization-noise ratio (SQNR) for signals with non-uniform amplitude distributions, such as speech. It involves compressing the dynamic range at the transmitter and expanding it at the receiver. This makes the quantization steps smaller for low-amplitude signals, thus reducing quantization noise in that region.

**Question 4:**
What is the bit rate of a PCM system that samples an analog signal at 8 kHz and uses 8 bits per sample?
*   **Answer:** Bit Rate ($R_b$) = Sampling Rate ($f_s$) $\times$ Bits per Sample ($m$).
    $R_b = 8 \text{ kHz} \times 8 \text{ bits/sample} = 8000 \text{ samples/second} \times 8 \text{ bits/sample} = 64000 \text{ bits/second} = 64 \text{ kbps}$.

**Question 5:**
Explain the phenomenon of aliasing and how it can be prevented.
*   **Answer:** Aliasing occurs when a continuous-time signal is sampled at a rate less than its Nyquist rate. In this process, higher frequency components in the original signal are misrepresented as lower frequencies in the sampled signal. This leads to distortion that cannot be removed during reconstruction.
    **Prevention:** Aliasing can be prevented by ensuring that the sampling frequency ($f_s$) is greater than twice the maximum frequency ($f_{max}$) present in the signal. This is achieved by first passing the analog signal through an anti-aliasing filter (a low-pass filter) before sampling, which removes all frequency components above $f_s/2$.

---

### 10. Important Points to Remember

*   **PCM Steps:** Sampling, Quantization, Coding.
*   **Nyquist-Shannon Theorem:** $f_s > 2f_{max}$ for perfect reconstruction.
*   **Aliasing:** Occurs when $f_s < 2f_{max}$. Prevented by anti-aliasing filters.
*   **Quantization Error:** Inevitable error due to approximating continuous amplitudes to discrete levels.
*   **Uniform Quantization:** Equal step sizes, simple but inefficient for non-uniform signals.
*   **Non-Uniform Quantization (Companding):** Unequal step sizes (smaller steps for smaller amplitudes) to improve SQNR for non-uniform signals (e.g., speech). $\mu$-law and A-law are common companding standards.
*   **SQNR:** Directly proportional to the number of bits per sample ($m$). Each extra bit adds $\approx 6$ dB.
*   **Bit Rate ($R_b$):** $R_b = m \times f_s$.
*   **Trade-off:** More bits/sample or higher sampling rate leads to better quality (SQNR) but requires higher bandwidth and data rates.
*   **Advantages:** Noise immunity, multiplexing, digital processing.
*   **Disadvantages:** Higher bandwidth requirement.

---

This concludes the study notes for Pulse Code Modulation (PCM). Ensure you review the relevant chapters in your textbooks for deeper understanding and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
