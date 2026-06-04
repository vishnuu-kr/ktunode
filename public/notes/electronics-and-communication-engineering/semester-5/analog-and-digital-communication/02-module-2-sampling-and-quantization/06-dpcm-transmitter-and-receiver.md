---
title: "DPCM transmitter and receiver."
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 2: Sampling and Quantization"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe905"
status: "completed"
scrapedAt: "2026-05-23T17:52:51.915Z"
---
# ANALOG AND DIGITAL COMMUNICATION: Module 2 - Sampling and Quantization

## Topic: DPCM Transmitter and Receiver

### **1. Introduction**

Differential Pulse Code Modulation (DPCM) is an extension of Pulse Code Modulation (PCM) that aims to improve the efficiency of digital representation of analog signals. Unlike standard PCM where each sample is quantized independently, DPCM leverages the correlation between adjacent samples. By transmitting the *difference* between the current sample and a predicted value, DPCM can achieve a lower bit rate for a given signal fidelity. This topic delves into the operational principles, components, and advantages of DPCM transmitters and receivers.

---

### **2. Learning Outcomes**

Upon successful completion of this topic, you will be able to:

*   **Understand the fundamental concept of DPCM:** Explain why DPCM is more efficient than standard PCM.
*   **Describe the architecture of a DPCM transmitter:** Identify and explain the function of each component.
*   **Describe the architecture of a DPCM receiver:** Identify and explain the function of each component.
*   **Explain the role of the predictor in DPCM:** Discuss different prediction schemes and their impact on performance.
*   **Analyze the advantages and disadvantages of DPCM:** Compare DPCM with other quantization techniques.
*   **Relate DPCM to signal compression techniques.**

---

### **3. Key Concepts and Definitions**

*   **Quantization:** The process of approximating a continuous range of values by a smaller, finite set of discrete values.
*   **Differential Quantization:** Quantizing the difference between two consecutive samples (or a sample and its predicted value) rather than the sample itself.
*   **Predictor:** A circuit or algorithm that estimates the value of the current sample based on past samples.
*   **Prediction Error (or Difference Signal):** The difference between the actual sample value and its predicted value.
*   **Adaptive DPCM (ADPCM):** A variation of DPCM where the predictor coefficients and/or the quantizer step size adapt based on the characteristics of the input signal.

---

### **4. DPCM Transmitter**

The DPCM transmitter's primary goal is to encode the *difference* between the current sample and a predicted value, leading to a more efficient representation.

#### **4.1 Block Diagram of DPCM Transmitter**

```
+-----------------+     +----------------+     +--------------+     +-----------------+
| Input Analog    | --> | Sample-and-Hold| --> |   Predictor  | --> |   Quantizer     |
| Signal (x(t))   |     |                |     |   (P(z))     |     |   (Q)           |
+-----------------+     +----------------+     +--------------+     +-----------------+
        |                                                                      |
        |                                                                      |
        v                                                                      v
+-----------------+     +-----------------+     +-----------------+     +-----------------+
|   Delay Element | <-- |   Feedback      | <-- |   Differentiator| <-- | Quantized Output|
|   (z^-1)        |     |   Loop          |     |   (x_q(n) - p(n))|     | (d(n))          |
+-----------------+     +-----------------+     +-----------------+     +-----------------+
```

#### **4.2 Components and Operation**

1.  **Sampler:** The input analog signal $x(t)$ is sampled at a rate $f_s$. This results in a sequence of discrete-time samples $x(n) = x(nT_s)$, where $T_s = 1/f_s$.
2.  **Predictor:**
    *   The predictor uses past quantized samples to estimate the current sample, $\hat{x}(n)$.
    *   The prediction is typically a linear combination of past quantized samples: $\hat{x}(n) = \sum_{i=1}^{N} a_i \hat{x}(n-i)$, where $\hat{x}(n-i)$ are past quantized samples and $a_i$ are predictor coefficients.
    *   The predictor's transfer function in the z-domain is $P(z) = \sum_{i=1}^{N} a_i z^{-i}$.
    *   The choice of predictor coefficients ($a_i$) is crucial and depends on the autocorrelation properties of the input signal. For highly correlated signals, a more sophisticated predictor can achieve better performance.
    *   *Example:* A simple first-order predictor might use $\hat{x}(n) = a_1 \hat{x}(n-1)$. If $a_1$ is close to 1 (as expected for a correlated signal), the predictor will estimate the current sample to be very close to the previous one.
3.  **Differentiator (Error Detector):**
    *   This block calculates the difference between the actual current sample and its predicted value: $d(n) = x(n) - \hat{x}(n)$. This is the signal that is actually quantized.
    *   The goal is that $d(n)$ will have a smaller dynamic range and a more concentrated probability distribution than $x(n)$, making it more amenable to efficient quantization.
4.  **Quantizer (Q):**
    *   The difference signal $d(n)$ is quantized to produce a digital representation, $d_q(n)$.
    *   This is typically a non-uniform quantizer, especially for speech signals, to better represent the smaller differences that occur more frequently. However, uniform quantization can also be used.
    *   The quantizer output $d_q(n)$ is a discrete value representing the quantized error.
5.  **Digital-to-Analog Converter (DAC) and Feedback Loop:**
    *   The quantized error $d_q(n)$ is converted back to an analog form (or a quantized representation of the error).
    *   This quantized error signal is fed back into a decoder (which is essentially the inverse of the predictor) to reconstruct a quantized version of the original signal, $\hat{x}(n)$.
    *   This $\hat{x}(n)$ is then used by the predictor for the next sample.
    *   The feedback loop ensures that the predictor at the transmitter and receiver remain synchronized, operating on the same reconstructed signal.

#### **4.3 Key Advantage of DPCM Transmitter:**

*   **Reduced Quantization Noise Power:** By transmitting the difference signal, which typically has a smaller amplitude and variance than the original signal, the same number of quantization levels can represent this difference with less error relative to the signal's amplitude. Alternatively, fewer bits can be used to represent the difference signal with comparable fidelity to PCM.

---

### **5. DPCM Receiver**

The DPCM receiver's function is to reconstruct the original analog signal from the received quantized difference signal.

#### **5.1 Block Diagram of DPCM Receiver**

```
+-----------------+     +--------------+     +-----------------+     +-----------------+
| Received        | --> |   Quantizer  | --> |   Decoder       | --> |   Adder         |
| Quantized       |     |   (Inverse Q)|     |   (Predictor    |     |   (Summation)   |
| Difference (d_q(n))|     |              |     |   Feedback)     |     |                 |
+-----------------+     +--------------+     +-----------------+     +-----------------+
                                |                                               |
                                |                                               |
                                v                                               v
                        +-----------------+                               +-----------------+
                        |   Delay Element | <-----------------------------| Reconstructed   |
                        |   (z^-1)        |                               | Signal (x_hat(t))|
                        +-----------------+                               +-----------------+
```

#### **5.2 Components and Operation**

1.  **Received Quantized Difference Signal ($d_q(n)$):** This is the output of the DPCM transmitter after it has been encoded and transmitted (potentially through a channel with noise).
2.  **Decoder (Inverse Predictor):**
    *   This block reconstructs the current sample $\hat{x}(n)$ by adding the received quantized difference $d_q(n)$ to the predicted value $\hat{x}(n)$.
    *   Crucially, the decoder uses the *same predictor structure* as the transmitter, operating on its own reconstructed past samples.
    *   So, the decoder essentially performs: $\hat{x}(n) = \hat{x}(n-1)_{\text{decoded}} + d_q(n)$ (for a simple first-order predictor). More generally, $\hat{x}(n) = p(n) + d_q(n)$, where $p(n)$ is the prediction based on past decoded samples.
3.  **Adder:** This block sums the predicted value $p(n)$ (which is the output of the feedback predictor) and the received quantized difference $d_q(n)$ to produce the reconstructed sample $\hat{x}(n)$.
4.  **Feedback Loop:** The reconstructed sample $\hat{x}(n)$ is fed back to the predictor within the receiver (which operates in the same way as the transmitter's predictor) to generate the prediction for the next sample. This ensures that the transmitter and receiver's predictors remain synchronized.
5.  **Low-pass Filter (Reconstruction Filter):** The reconstructed discrete-time signal $\hat{x}(n)$ is passed through a low-pass filter to reconstruct the continuous-time analog signal $\hat{x}(t)$. This is the same filtering process as used in standard PCM.

#### **5.3 Key Aspect of DPCM Receiver:**

*   **Synchronization:** The receiver's predictor must be identical to the transmitter's predictor to accurately reconstruct the signal. This is achieved by feeding the reconstructed samples back into the predictor.

---

### **6. Predictor Design**

The effectiveness of DPCM heavily relies on the predictor. The goal of the predictor is to minimize the prediction error $d(n) = x(n) - \hat{x}(n)$.

#### **6.1 First-Order Predictor**

*   $\hat{x}(n) = a_1 \hat{x}(n-1)$
*   The optimal $a_1$ that minimizes the mean-squared error $E[(x(n) - a_1 x(n-1))^2]$ is given by $a_1 = \frac{E[x(n)x(n-1)]}{E[x^2(n-1)]}$.
*   For a stationary process, $E[x(n)x(n-1)] = R_x(1)$ (lag-1 autocorrelation) and $E[x^2(n-1)] = R_x(0)$ (variance).
*   So, $a_1 = \frac{R_x(1)}{R_x(0)}$. This is essentially the correlation coefficient between adjacent samples. For highly correlated signals, $a_1$ will be close to 1.

#### **6.2 Higher-Order Predictors**

*   $\hat{x}(n) = \sum_{i=1}^{N} a_i \hat{x}(n-i)$
*   The coefficients $a_i$ are chosen to minimize the mean-squared prediction error, $E[(x(n) - \sum_{i=1}^{N} a_i x(n-i))^2]$.
*   These coefficients are determined by the Yule-Walker equations based on the autocorrelation function of the signal.
*   Higher-order predictors can provide better prediction accuracy if the signal has longer-range dependencies, but they increase complexity and the number of bits required to transmit the predictor coefficients if they are adaptive.

#### **6.3 Adaptive Predictors (ADPCM)**

*   In ADPCM, the predictor coefficients $a_i$ are not fixed but are adapted over time to match the changing characteristics of the signal.
*   This is particularly useful for signals like speech, where the vocal tract characteristics change rapidly.
*   Common adaptation algorithms include the LMS (Least Mean Squares) algorithm.
*   Adaptive quantizers are also often used in conjunction with adaptive predictors in ADPCM.

---

### **7. Advantages of DPCM**

*   **Improved Efficiency:** Achieves better signal-to-quantization noise ratio (SQNR) for a given bit rate compared to PCM, or requires a lower bit rate for the same SQNR.
*   **Reduced Bandwidth:** Lower bit rates translate to reduced bandwidth requirements for transmission.
*   **Effective for Correlated Signals:** Performs significantly better than PCM for signals where adjacent samples are highly correlated (e.g., speech, audio, slowly varying sensor data).
*   **Basis for Modern Compression:** DPCM forms the foundation for many advanced audio and speech compression standards (like ADPCM codecs).

---

### **8. Disadvantages of DPCM**

*   **Complexity:** More complex than standard PCM due to the predictor and feedback loop.
*   **Error Propagation:** Errors in the received $d_q(n)$ can propagate through the feedback loop and affect subsequent reconstructed samples. If the channel introduces errors, the receiver might reconstruct $\hat{x}(n)$ incorrectly, and this incorrect $\hat{x}(n)$ will be used by the receiver's predictor for the next sample, compounding the error.
*   **Predictor Sensitivity:** The performance is sensitive to the predictor's accuracy. A poorly designed predictor can lead to worse performance than PCM.
*   **Adaptive Complexity:** Adaptive DPCM (ADPCM) is even more complex due to the need for adaptation algorithms and potentially transmitting predictor coefficients.

---

### **9. Comparison with PCM**

| Feature             | PCM                                    | DPCM                                          |
| :------------------ | :------------------------------------- | :-------------------------------------------- |
| **Quantization**    | Quantizes each sample independently    | Quantizes the difference between sample and prediction |
| **Efficiency**      | Less efficient for correlated signals  | More efficient for correlated signals         |
| **Bandwidth**       | Higher bandwidth for same fidelity     | Lower bandwidth for same fidelity             |
| **Complexity**      | Simpler                                | More complex                                  |
| **Error Impact**    | Localized errors                       | Prone to error propagation                    |
| **Predictor**       | No predictor                           | Requires a predictor                          |
| **Bit Rate**        | Higher for equivalent performance      | Lower for equivalent performance              |

---

### **10. Relevance to Course Outcomes**

*   **CO1: Illustrate the principles of analog communication systems (Knowledge Level: K2):** DPCM is a digital technique that operates on analog signals. Understanding DPCM helps in understanding how analog signals are processed and digitized for efficient communication, a core concept in analog communication systems.
*   **CO2: Explain the basic concepts of digital communication (Knowledge Level: K2):** DPCM is a fundamental digital encoding technique. This topic directly explains the principles of digital modulation (in a broader sense of data representation) and the process of encoding and decoding information digitally.
*   **CO3: Analyse the baseband transmission of digital data through AWGN channel (Knowledge Level: K3):** While this topic focuses on the encoding, the output of a DPCM transmitter (a sequence of quantized differences) is the digital data that would then be transmitted. Understanding the properties of this data (e.g., its statistical distribution) is crucial for analyzing its performance over a channel. The error propagation aspect is also directly related to channel impairments.
*   **CO4: Apply various digital modulation techniques in the design of digital communication systems (Knowledge Level: K3):** DPCM can be considered a form of source coding or data compression. The output bitstream from a DPCM system is then further modulated using techniques like PSK, QAM, etc., for transmission. Understanding DPCM provides a more efficient data stream to these modulation techniques.

---

### **11. Important Points to Remember**

*   DPCM transmits the *difference* signal, not the original sample.
*   A predictor is used to estimate the current sample based on past samples.
*   The transmitter and receiver must use identical predictors for proper reconstruction.
*   DPCM is more efficient than PCM for signals with high sample-to-sample correlation.
*   Error propagation is a significant concern in DPCM.
*   Adaptive DPCM (ADPCM) offers improved performance for time-varying signals by adapting the predictor.

---

### **12. Practice Questions with Answers**

**Question 1:** What is the primary advantage of using DPCM over standard PCM?

**Answer:** The primary advantage of DPCM over PCM is its improved efficiency, especially for signals with high correlation between adjacent samples. It achieves a better signal-to-quantization noise ratio (SQNR) for a given bit rate, or requires a lower bit rate for the same SQNR, due to transmitting the difference signal which typically has a smaller dynamic range.

**Question 2:** Describe the function of the predictor in a DPCM transmitter.

**Answer:** The predictor in a DPCM transmitter estimates the value of the current sample based on past quantized samples. This predicted value is then subtracted from the actual current sample to generate the difference signal, which is subsequently quantized and transmitted. The goal is to make the difference signal have a smaller dynamic range and variance, leading to more efficient quantization.

**Question 3:** How does the DPCM receiver reconstruct the original signal?

**Answer:** The DPCM receiver reconstructs the original signal by adding the received quantized difference signal to the predicted value of the current sample. This prediction is generated by the receiver's own predictor, which operates on the previously reconstructed samples. This ensures the receiver's predictor is synchronized with the transmitter's predictor.

**Question 4:** What is the main disadvantage of DPCM regarding channel errors?

**Answer:** The main disadvantage of DPCM concerning channel errors is error propagation. An error in the transmitted quantized difference signal will lead to an incorrect reconstructed sample. This incorrect sample is then used by the receiver's predictor to generate the prediction for the next sample, causing the error to spread and potentially corrupting subsequent samples.

**Question 5:** For a first-order predictor $\hat{x}(n) = a_1 \hat{x}(n-1)$, what is the optimal value of $a_1$ for a stationary random process $x(n)$?

**Answer:** The optimal value of $a_1$ that minimizes the mean-squared prediction error $E[(x(n) - a_1 x(n-1))^2]$ is given by $a_1 = \frac{E[x(n)x(n-1)]}{E[x^2(n-1)]}$. For a stationary process, this is $a_1 = \frac{R_x(1)}{R_x(0)}$, where $R_x(1)$ is the lag-1 autocorrelation and $R_x(0)$ is the variance of the process.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **13. Further Reading/References**

*   **Communication Systems by Simon Haykin and Michael Moher (Wiley, 5th Edition, 2020):** Chapters discussing Pulse Code Modulation and its variants will cover DPCM. Haykin's work often provides a rigorous mathematical treatment.
*   **Modern Digital and Analog Communication Systems by B.P. Lathi and Zhi Ding (Oxford University Press, 5th Edition, 2018):** Look for sections on waveform coding or digital representation of analog signals. Lathi's book is known for its clarity and comprehensive coverage.
*   **Principles of Communication Systems by Herbert Taub and Donald L. Schilling (McGraw-Hill Education, 4th Edition, 2013):** This classic text will likely have a good treatment of predictive coding techniques.
*   **Digital Communications by John G. Proakis and Masoud Salehi (McGraw-Hill Education, 6th Edition, 2020):** Proakis's books are standard references for digital communications and will offer detailed analysis of quantization and coding schemes.

---
This concludes the study notes for DPCM transmitter and receiver. Remember to review the relevant chapters in your textbooks for deeper understanding and examples.