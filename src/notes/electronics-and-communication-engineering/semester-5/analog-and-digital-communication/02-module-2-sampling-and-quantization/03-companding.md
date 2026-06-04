---
title: "Companding"
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 2: Sampling and Quantization"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe902"
status: "completed"
scrapedAt: "2026-05-23T17:52:49.790Z"
---
# ANALOG AND DIGITAL COMMUNICATION - MODULE 2: SAMPLING AND QUANTIZATION

## TOPIC: COMPANDING

---

### **1. Introduction to Companding**

Companding is a signal processing technique used to improve the performance of communication systems, particularly in handling signals with a wide dynamic range. It involves two complementary processes: **compression** at the transmitter and **expansion** at the receiver.

**Core Idea:** To reduce the effect of quantization noise, especially for low-amplitude signals, by non-linearly altering the signal's amplitude before quantization.

**Why is Companding Necessary?**

*   **Wide Dynamic Range:** Many real-world signals (e.g., speech, audio) have a wide range of amplitudes.
*   **Quantization Noise:** In digital communication, analog signals are sampled and then quantized. Quantization error (noise) is introduced during this process.
*   **Impact of Quantization Noise:** For signals with small amplitudes, the quantization error can be relatively large compared to the signal itself, leading to poor signal-to-noise ratio (SNR). For large amplitude signals, the quantization error is usually less significant.
*   **Linear Quantization Inefficiency:** If we use a uniform quantizer (linear quantization) to accommodate the entire dynamic range, we either:
    *   Use a large number of quantization levels, leading to a very high bit rate (for a given resolution).
    *   Use a smaller number of quantization levels, resulting in significant quantization noise for low-amplitude signals.

**Companding aims to overcome this by:**

*   **Compressing** the signal at the transmitter, effectively increasing the SNR for low-amplitude signals.
*   **Expanding** the signal at the receiver to restore the original dynamic range, while ideally restoring the SNR improvements made during compression.

**Relationship to Course Outcomes:**

*   **CO1 (Illustrate the principles of analog communication systems - K2):** Companding is a fundamental technique in analog-to-digital conversion within analog communication systems (e.g., PCM). Understanding companding helps illustrate how signal fidelity is maintained.
*   **CO2 (Explain the basic concepts of digital communication - K2):** Companding is directly related to the quantization step in digital communication, affecting the quality of the digital representation of analog signals.

---

### **2. Principles of Companding**

Companding involves a non-linear transformation of the input signal.

*   **Compression (Transmitter):** The input signal $x(t)$ is passed through a compressor. The compressor applies a non-linear function $y = c(x)$ such that:
    *   For small amplitudes of $x$, the change in $y$ is larger.
    *   For large amplitudes of $x$, the change in $y$ is smaller.
    *   This effectively "stretches" the low-amplitude regions and "compresses" the high-amplitude regions.
*   **Quantization:** The compressed signal $y(t)$ is then sampled and quantized.
*   **Expansion (Receiver):** The quantized signal is passed through an expander. The expander applies the inverse non-linear function $x' = e(y)$ such that:
    *   The expansion is complementary to the compression.
    *   This restores the original dynamic range and amplifies the low-amplitude signals relative to the quantization noise that was introduced.

**Mathematical Representation:**

Let $x$ be the input signal amplitude and $y$ be the compressed signal amplitude.
The compressor function is $y = c(x)$.
The expander function is $x' = e(y)$, where $e(y) = c^{-1}(y)$.

**Overall Process:**
$x(t) \xrightarrow{\text{Compressor}} y(t) = c(x(t)) \xrightarrow{\text{Quantization}} \text{Digital Signal} \xrightarrow{\text{Expander}} x'(t) = e(\text{Quantized } y(t))$

---

### **3. Companding Laws**

Several non-linear functions are used for companding. The most common ones are:

#### **3.1. $\mu$-Law Companding**

*   **Formula:**
    $$ y = c(x) = \frac{\text{sgn}(x) A |x|}{1 + \ln(A)} \cdot \frac{\ln(1 + \mu |x|/A)}{1 + \ln(\mu)} $$
    Where:
    *   $x$ is the input signal amplitude.
    *   $y$ is the compressed signal amplitude.
    *   $A$ is the maximum amplitude of the input signal (usually set to the peak amplitude).
    *   $\mu$ is the **companding parameter** (a positive constant).

*   **Behavior:**
    *   The $\mu$-law is a logarithmic-like compression.
    *   A larger $\mu$ value results in more pronounced compression, providing better performance for low-amplitude signals but potentially clipping large signals more severely if $A$ is not chosen appropriately.
    *   Commonly used in North America and Japan.

*   **Simplified/Normalized Form (for $0 \le x \le 1$ and $A=1$):**
    $$ y = \frac{\text{sgn}(x) \ln(1 + \mu |x|)}{ \ln(1 + \mu) } $$

*   **Limiting Behavior:**
    *   As $\mu \to 0$, the $\mu$-law approaches linear quantization.
    *   As $\mu \to \infty$, the $\mu$-law approaches a continuous-time analog of a simple clipping or a "water-filling" process for amplitude.

*   **Textbook Reference:**
    *   **Haykin & Moher (5th Ed., 2020):** Discusses $\mu$-law companding in the context of Pulse Code Modulation (PCM) and its impact on quantization noise.
    *   **Lathi & Ding (5th Ed., 2018):** Provides a detailed mathematical derivation and analysis of $\mu$-law companding.

#### **3.2. A-Law Companding**

*   **Formula:**
    $$ y = c(x) = \begin{cases} \frac{A |x|}{1 + \ln(A)} \cdot \text{sgn}(x) & \text{if } 0 \le |x| < \frac{1}{A} \\ \frac{A \cdot \text{sgn}(x)}{1 + \ln(A)} \cdot \left( 1 + \ln(A |x|) \right) & \text{if } \frac{1}{A} \le |x| \le 1 \end{cases} $$
    Where:
    *   $x$ is the input signal amplitude.
    *   $y$ is the compressed signal amplitude.
    *   $A$ is a parameter, typically $A = 87.6$.

*   **Behavior:**
    *   The $A$-law is also a logarithmic-like compression but has a linear segment at low amplitudes ($|x| < 1/A$).
    *   This linear segment ensures that very small signals are not over-compressed, which can be beneficial for signals with a high proportion of low-level components.
    *   Commonly used in Europe and the rest of the world.

*   **Textbook Reference:**
    *   **Haykin & Moher (Indian Adaptation, 2nd Ed., 2022):** Likely includes details on international standards like the A-law used in telecommunications.
    *   **Proakis & Salehi (Digital Communications, 6th Ed., 2020):** May cover companding standards in the context of digital telephony.

#### **3.3. Comparison of $\mu$-Law and A-Law**

*   **$\mu$-Law:** More aggressive compression at low amplitudes. Generally performs better for speech signals with a wide dynamic range and significant low-amplitude components.
*   **A-Law:** Has a linear segment for very low amplitudes, which can be advantageous if the signal distribution has many very small values. Offers a compromise between linear quantization and aggressive non-linear compression.

**Important Note:** The specific values of $\mu$ and $A$ are chosen based on the characteristics of the signals being transmitted and the desired trade-off between dynamic range, quantization noise, and complexity. For speech, typical values for $\mu$ are around 255, and for $A$, it's around 87.6.

---

### **4. Effect of Companding on Quantization Noise**

Companding significantly alters the distribution of quantization noise.

*   **Without Companding (Linear Quantization):**
    *   The quantization error is assumed to be uniformly distributed over the quantization interval.
    *   The Signal-to-Quantization Noise Ratio (SQNR) is roughly proportional to $2^{2n}$, where $n$ is the number of bits per sample.
    *   For low-amplitude signals, the SQNR is poor because the quantization error is comparable to the signal amplitude.

*   **With Companding:**
    *   The compressor effectively "stretches" the small amplitude signal values, allowing them to occupy a larger portion of the quantization levels.
    *   This means that the quantization error, when expressed relative to the original signal amplitude, is reduced for small signals.
    *   The expander then "compresses" the large amplitude signal values, and importantly, also scales down the quantization noise that was introduced when these large signals were quantized.
    *   **Result:** Companding makes the SQNR less dependent on the signal amplitude. It improves the SQNR for low-amplitude signals at the cost of a slight degradation for high-amplitude signals.

**Gain in SQNR:**

Companding typically provides an improvement in SQNR of about **10-15 dB** for speech signals compared to linear quantization, especially for low-amplitude signals.

**Textbook Reference:**
*   **Haykin & Moher (5th Ed., 2020):** Provides detailed analysis of the SQNR improvement achievable with companding techniques.
*   **Lathi & Ding (5th Ed., 2018):** Offers mathematical derivations for the SQNR of companded systems.

---

### **5. Applications of Companding**

Companding is a crucial technique in various digital communication systems:

*   **Pulse Code Modulation (PCM):** The most common application, especially in digital telephony (telecommunications). $\mu$-law and A-law are standard companding laws used in PCM systems.
    *   **Reference:** **Kennedy (6th Ed., 2017)** often discusses PCM and its implementation details, including companding.
*   **Digitizing Analog Signals:** Used whenever analog signals with a wide dynamic range need to be converted to digital form while maintaining acceptable fidelity across all amplitude levels.
*   **Audio and Voice Transmission:** Ensures that quiet parts of a conversation or audio recording are reproduced clearly without being lost in the noise floor.

---

### **6. Implementation of Companding**

Companding can be implemented using:

*   **Analog Circuits:** Using non-linear devices (diodes, transistors) or operational amplifiers with specific feedback configurations to approximate the desired compression/expansion curves.
*   **Digital Signal Processing (DSP):** Modern systems implement companding using lookup tables or algorithmic approximations within digital signal processors. This offers greater flexibility and accuracy.

**Textbook Reference:**
*   **Proakis & Salehi (Communication Systems Engineering, 2nd Ed., 2001):** Might touch upon implementation aspects in practical systems.

---

### **7. Practice Questions & Exercises**

**Question 1:**
Explain the need for companding in digital communication systems. What problem does it address?
**(CO1: K2, CO2: K2)**

**Answer 1:**
Companding is needed to address the issue of poor Signal-to-Quantization Noise Ratio (SQNR) for low-amplitude signals when using linear quantization. Analog signals often have a wide dynamic range. If a uniform quantizer is used to cover the entire range, its resolution is spread thinly across all amplitudes. For small signals, the quantization step size becomes a significant fraction of the signal's amplitude, leading to a high relative quantization error and poor SQNR. Companding compresses the signal amplitudes before quantization, effectively allocating more quantization levels to smaller signals, thereby improving their SQNR. An expander at the receiver restores the original dynamic range.

---

**Question 2:**
Describe the fundamental operations of compression and expansion in a companding system.
**(CO1: K2, CO2: K2)**

**Answer 2:**
Companding involves two complementary operations:
1.  **Compression (at Transmitter):** The analog signal is passed through a non-linear circuit or algorithm that reduces its dynamic range. Specifically, it amplifies small-amplitude signals more than large-amplitude signals. This non-linear transformation is designed to make the signal's amplitude distribution more uniform, effectively allocating more quantization levels to the smaller signal amplitudes.
2.  **Expansion (at Receiver):** After the compressed signal is quantized, sampled, and potentially transmitted digitally, it is passed through an expander at the receiver. The expander applies the inverse non-linear transformation to the quantized signal. This restores the original dynamic range of the signal and, crucially, also scales down the quantization noise that was introduced during the quantization of the compressed signal. The net effect is an improvement in the SQNR, especially for the originally low-amplitude signal components.

---

**Question 3:**
State the mathematical formula for the $\mu$-law companding characteristic for $0 \le |x| \le A$. How does increasing $\mu$ affect the compression?
**(CO1: K2, CO2: K2)**

**Answer 3:**
The $\mu$-law companding characteristic is given by:
$$ y = \text{sgn}(x) \frac{A \ln(1 + \mu |x|/A)}{\ln(1 + \mu)} $$
where $x$ is the input signal amplitude, $y$ is the compressed signal amplitude, $A$ is the maximum input signal amplitude, and $\mu$ is the companding parameter.

Increasing the value of $\mu$ results in **more aggressive compression**. This means that for a given range of input amplitudes, the $\mu$-law curve becomes steeper at low amplitudes and flatter at high amplitudes. Consequently, smaller input signals are stretched more, and larger input signals are compressed more. This leads to better quantization noise performance for small signals but can increase distortion for large signals if not managed properly.

---

**Question 4:**
A signal with a peak amplitude of 1V is to be quantized using 8 bits. If linear quantization is used, what is the approximate SQNR? If $\mu$-law companding with $\mu=255$ is used, how would you expect the SQNR to change, particularly for a signal with an amplitude of 0.1V?
**(CO1: K3, CO2: K2)**

**Answer 4:**
For linear quantization with $n$ bits, the SQNR is approximately $6.02n + 1.76$ dB.
For 8 bits:
SQNR$_{linear} \approx 6.02 \times 8 + 1.76 = 48.16 + 1.76 = 49.92$ dB.

For companding (like $\mu$-law), the SQNR is made less dependent on the signal amplitude. The benefit is seen particularly for low-amplitude signals.
For a signal amplitude of 0.1V (which is 1/10th of the peak amplitude of 1V), companding will significantly improve the SQNR compared to what it would be with linear quantization at this low amplitude. While the average SQNR improvement is about 10-15 dB, for a signal of 0.1V with $\mu=255$, the SQNR will be substantially better than the SQNR of a signal with the same low amplitude if it were linearly quantized. The $\mu$-law effectively spreads out the quantization levels in the region of 0.1V, making the quantization noise much smaller relative to the signal itself.

---

### **8. Important Points to Remember**

*   **Purpose of Companding:** To improve the SQNR of signals with a wide dynamic range, especially for low-amplitude signals, by non-linearly processing the signal before quantization.
*   **Two Stages:** Compression at the transmitter, expansion at the receiver. These are complementary operations.
*   **Key Laws:** $\mu$-law and A-law are the most prominent companding standards.
*   **Trade-offs:** Companding improves SQNR for weak signals but can introduce some distortion in strong signals compared to linear quantization.
*   **Applications:** Primarily used in PCM systems for voice and audio transmission.
*   **Effect on Quantization Noise:** Companding makes the quantization noise power relatively constant across the dynamic range of the signal, meaning the SQNR is less sensitive to signal amplitude variations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **9. Further Reading and References**

*   **Haykin & Moher (5th Ed., 2020):** Chapters on PCM, Quantization, and Signal Processing.
*   **Lathi & Ding (5th Ed., 2018):** Sections discussing quantization and companding in digital modulation.
*   **Kennedy (6th Ed., 2017):** Details on PCM implementation and companding in practical communication systems.
*   **Proakis & Salehi (Digital Communications, 6th Ed., 2020):** Provides theoretical depth on signal processing for digital communications.

---