---
title: "Fourier Analysis based algorithms (half cycle and full cycle)"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 4: Signal processing techniques:  Sinusoidal wave based algorithms"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3659a"
status: "completed"
scrapedAt: "2026-05-23T16:26:12.722Z"
---
# Module 4: Signal Processing Techniques: Sinusoidal Wave Based Algorithms
## Topic: Fourier Analysis Based Algorithms (Half Cycle and Full Cycle)

This module delves into the application of Fourier analysis techniques for digital power system protection. Specifically, we will explore how Fourier analysis, particularly the Discrete Fourier Transform (DFT), can be used to extract fundamental frequency components from sampled voltage and current waveforms, enabling accurate fault detection and classification.

---

### **1. Introduction to Signal Processing in Digital Relaying (K2)**

Digital relays process sampled voltage and current signals from power systems to detect abnormal conditions like faults. Unlike traditional electromechanical or analog relays, digital relays rely on sophisticated algorithms to analyze these signals. Signal processing techniques are crucial for:

*   **Accurate Measurement:** Extracting fundamental frequency magnitudes and phase angles of voltage and current.
*   **Fault Detection:** Identifying deviations from normal operating conditions.
*   **Fault Classification:** Determining the type and location of a fault.
*   **Filtering:** Removing unwanted noise and harmonics.

**Key Concept:** Digital relays sample analog waveforms at a specific sampling rate and convert them into digital data. This digital data is then processed by algorithms.

**Reference:**
*   "Digital Protection of Power System" by Johns and Salman (Chapter 3: "Signal Processing for Digital Relays") provides a foundational understanding of sampling, quantization, and basic signal processing requirements for digital relays.
*   "Power System Protection and Switchgear" by Badri Ram and Viswakarma (Chapter 7: "Microprocessor-based Relays") discusses the digital signal processing aspects and the need for efficient algorithms.

---

### **2. The Need for Fundamental Frequency Components (K2)**

In power system protection, especially during faults, the sampled waveforms are often distorted by harmonics and transients. However, the primary concern for many protection functions (e.g., overcurrent, distance, differential) is the behavior of the fundamental frequency (50 Hz or 60 Hz) component of the current and voltage.

*   **Fault Currents:** Primarily composed of the fundamental frequency component, though transients and sub-transients can exist initially.
*   **Voltage Sag:** The fundamental frequency voltage component reduces significantly during faults, indicating a problem.
*   **Harmonics:** While present, they are often secondary indicators for basic protection functions and can be a source of error if not properly handled.

**Objective:** To accurately extract the fundamental frequency phasor (magnitude and phase angle) of voltage and current signals, even in the presence of harmonics and noise.

---

### **3. Fourier Analysis Based Algorithms (K2, K3)**

Fourier analysis provides a mathematical framework to decompose a complex signal into its constituent sinusoidal components (sine and cosine waves of different frequencies). For digital relays, the **Discrete Fourier Transform (DFT)** is the most commonly used method.

**3.1. Discrete Fourier Transform (DFT)**

The DFT converts a finite sequence of discrete-time samples into a finite sequence of discrete frequency components. For a signal $x[n]$ of $N$ samples, the DFT is given by:

$X[k] = \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi k n}{N}}$

where:
*   $X[k]$ is the $k$-th frequency component.
*   $k$ represents the harmonic number (0 for DC, 1 for fundamental, 2 for second harmonic, etc.).
*   $N$ is the number of samples in the window.
*   $x[n]$ is the $n$-th sample of the input signal.
*   $j$ is the imaginary unit.

**Key Insight:** For power system frequencies (50 Hz or 60 Hz), we are primarily interested in the $k=1$ component of the DFT, which represents the fundamental frequency.

**3.2. Extracting Fundamental Frequency Components using DFT**

To extract the fundamental frequency component (magnitude and phase), we typically consider a specific window of samples. The selection of this window size is critical and leads to the concepts of half-cycle and full-cycle algorithms.

**The goal is to calculate:**

*   Fundamental frequency current magnitude ($I_1$) and phase ($\phi_I$).
*   Fundamental frequency voltage magnitude ($V_1$) and phase ($\phi_V$).

These values are then used in protection algorithms like distance or differential relays.

---

### **4. Half-Cycle Fourier Algorithms (K2, K3)**

**Concept:** Half-cycle algorithms process a window of samples corresponding to approximately half of a fundamental frequency cycle. This allows for faster detection of faults.

**Window Size:** For a sampling frequency $f_s$, a half-cycle window will have $N_{half} = f_s / (2 \times f_0)$ samples, where $f_0$ is the fundamental frequency (e.g., 50 Hz). For $f_s = 4.8$ kHz and $f_0 = 50$ Hz, $N_{half} = 4800 / (2 \times 50) = 48$ samples.

**Algorithm Steps (Simplified for Fundamental Frequency):**

Consider a sampled current signal $i[n]$. The fundamental frequency current can be approximated by:

$i(t) \approx I_1 \cos(\omega_0 t + \phi_I)$

In discrete-time, over a window of $N$ samples:

$i[n] = I_1 \cos(\frac{2\pi n}{N} + \phi_I)$

The DFT at $k=1$ gives:

$I[1] = \sum_{n=0}^{N-1} i[n] e^{-j \frac{2\pi (1) n}{N}} = \sum_{n=0}^{N-1} i[n] (\cos(\frac{2\pi n}{N}) - j \sin(\frac{2\pi n}{N}))$

$I[1] = (\sum_{n=0}^{N-1} i[n] \cos(\frac{2\pi n}{N})) - j (\sum_{n=0}^{N-1} i[n] \sin(\frac{2\pi n}{N}))$

Let:
*   $A = \sum_{n=0}^{N-1} i[n] \cos(\frac{2\pi n}{N})$
*   $B = \sum_{n=0}^{N-1} i[n] \sin(\frac{2\pi n}{N})$

Then, $I[1] = A - jB$.
The fundamental frequency magnitude is $|I_1| = \sqrt{A^2 + B^2} / (N/2)$.
The fundamental frequency phase is $\phi_I = \arctan2(-B, A)$.

**Important Considerations for Half-Cycle:**

*   **Pros:**
    *   **Fast Response:** Can detect faults within half a cycle, leading to quick relay operation.
    *   **Suitable for Overcurrent:** Effective for detecting high fault currents.
*   **Cons:**
    *   **Sensitivity to Harmonics:** Less effective at filtering out harmonics compared to full-cycle methods. High levels of harmonics can lead to inaccurate magnitude and phase estimations.
    *   **Transient Sensitivity:** Can be sensitive to initial transients, potentially causing misoperation.
    *   **DC Offset:** The presence of a DC offset can significantly distort the half-cycle results.

**Reference:**
*   Phadke and Thorpe (Chapter 4: "Digital Algorithms for Protective Relaying") discusses the Fourier method and its variations, including the half-cycle approach and its limitations.
*   Johns and Salman also cover waveform estimation techniques, including the practical implementation of DFT-based methods for faster response.

---

### **5. Full-Cycle Fourier Algorithms (K2, K3)**

**Concept:** Full-cycle algorithms process a window of samples corresponding to one full fundamental frequency cycle. This provides better noise and harmonic immunity.

**Window Size:** For a sampling frequency $f_s$ and fundamental frequency $f_0$, a full-cycle window will have $N_{full} = f_s / f_0$ samples. For $f_s = 4.8$ kHz and $f_0 = 50$ Hz, $N_{full} = 4800 / 50 = 96$ samples.

**Algorithm Steps (Simplified for Fundamental Frequency):**

The DFT calculation is the same as for the half-cycle, but the window size $N$ is different ($N_{full}$).

$I[1] = \sum_{n=0}^{N_{full}-1} i[n] e^{-j \frac{2\pi (1) n}{N_{full}}}$

Let:
*   $A = \sum_{n=0}^{N_{full}-1} i[n] \cos(\frac{2\pi n}{N_{full}})$
*   $B = \sum_{n=0}^{N_{full}-1} i[n] \sin(\frac{2\pi n}{N_{full}})$

Then, $I[1] = A - jB$.
The fundamental frequency magnitude is $|I_1| = \sqrt{A^2 + B^2} / (N_{full}/2)$.
The fundamental frequency phase is $\phi_I = \arctan2(-B, A)$.

**Important Considerations for Full-Cycle:**

*   **Pros:**
    *   **Excellent Harmonic Immunity:** The DFT inherently cancels out harmonics that are integer multiples of the fundamental frequency and are present in the full cycle window.
    *   **Noise Reduction:** Averaging over a full cycle reduces the impact of random noise.
    *   **Accurate Magnitude/Phase:** Provides highly accurate estimations of fundamental frequency magnitude and phase.
*   **Cons:**
    *   **Slower Response:** Requires a full cycle of data, leading to a delay in fault detection and relay operation. This might be unacceptable for rapid fault clearing in some applications.
    *   **DC Offset Impact:** While better than half-cycle, a significant DC offset can still affect the accuracy if not managed.

**Reference:**
*   Badri Ram and Viswakarma (Chapter 7) discusses the advantages of full-cycle algorithms for improved accuracy and harmonic rejection.
*   Rebizant (Chapter 2: "Digital Signal Processing Techniques") provides detailed explanations of DFT-based algorithms, comparing half-cycle and full-cycle methods and their trade-offs.

---

### **6. Variations and Improvements (K2, K3)**

While basic DFT is fundamental, several variations are used to improve performance:

*   **Sliding Window DFT:** Processes overlapping windows of data, providing a continuous stream of measurements and reducing the delay associated with waiting for a full cycle.
*   **Weighted DFT (e.g., Hann Window):** Applying a windowing function (like Hann, Hamming) before the DFT can reduce spectral leakage, which occurs when the signal frequencies do not perfectly align with the DFT bin frequencies.
*   **FFT (Fast Fourier Transform):** A computationally efficient algorithm for calculating the DFT, making real-time implementation feasible. The terms "Fourier Analysis" in digital relaying often imply FFT-based calculations.
*   **Addressing DC Offset:** Techniques like subtracting the DC component before applying DFT or using specific windowing functions can mitigate the impact of DC offset.

**Example:** If a signal contains a DC offset $D$, $i[n] = D + \text{fundamental}$. The DFT calculation for $k=0$ (DC component) will directly give $D$. For $k=1$, the calculation will be less affected if $D$ is accurately estimated and removed.

**Reference:**
*   Johns and Salman (Chapter 3) often discuss spectral leakage and windowing techniques.
*   Phadke and Thorpe provide insights into practical implementation challenges and optimizations.

---

### **7. Application in Protection Relays (CO1, CO2, CO4)**

Fourier analysis-based algorithms are the backbone of many numerical relays for various protection schemes:

*   **Overcurrent Relays:** Measure fundamental frequency current magnitude to detect overloads and faults. The response time is determined by whether half-cycle or full-cycle (or sliding window) methods are used.
*   **Distance Relays:** Calculate impedance ($Z = V/I$) using fundamental frequency voltage and current phasors. The accuracy of these phasors, derived from Fourier analysis, directly impacts the accuracy of distance measurement.
    *   **Example:** A distance relay uses the formula $Z = \frac{V_1 \angle \phi_V}{I_1 \angle \phi_I}$. Accurate $V_1, \phi_V, I_1, \phi_I$ are crucial.
*   **Differential Relays:** Compare fundamental frequency current phasors at the two terminals of a protected zone (e.g., transformer, busbar). Accurate phasor estimation is vital for proper differential current calculation and to distinguish internal faults from external ones or inrush currents.
*   **Directional Relays:** Use the phase difference between voltage and current phasors ($\phi_V - \phi_I$) to determine the direction of power flow or fault current.

**Relating to Course Outcomes:**
*   **CO1 (Identify relay protection scheme):** Understanding Fourier analysis is fundamental to knowing *how* overcurrent, differential, and distance relays work in numerical implementations.
*   **CO4 (Explain signal processing methods):** This entire topic directly addresses CO4.

---

### **8. Practice Questions and Answers**

**Question 1:** What is the primary advantage of using a full-cycle Fourier algorithm compared to a half-cycle algorithm in digital relaying?
**Answer:** The primary advantage of a full-cycle Fourier algorithm is its superior immunity to harmonics and noise due to processing a complete cycle of the waveform.

**Question 2:** If a digital relay samples at 3.6 kHz and the power system frequency is 60 Hz, how many samples constitute one full cycle?
**Answer:** Number of samples per cycle = Sampling frequency / Power system frequency = 3600 Hz / 60 Hz = 60 samples.

**Question 3:** Spectral leakage in DFT can be reduced by:
    a) Increasing the number of samples
    b) Using a windowing function
    c) Decreasing the sampling frequency
    d) Implementing a half-cycle algorithm
**Answer:** b) Using a windowing function.

**Question 4:** How does a half-cycle Fourier algorithm contribute to faster fault detection?
**Answer:** A half-cycle algorithm allows the relay to gather enough data for analysis (half a cycle) and make a decision much quicker than waiting for a full cycle, thus enabling faster fault clearing.

**Question 5:** For a distance relay, what are the key parameters extracted from voltage and current signals using Fourier analysis that are essential for impedance calculation?
**Answer:** The key parameters are the fundamental frequency magnitude and phase angle of both the voltage and current signals ($V_1, \phi_V, I_1, \phi_I$).

---

### **9. Important Points to Remember**

*   **DFT is Key:** The Discrete Fourier Transform (DFT) is the mathematical tool used to extract fundamental frequency components.
*   **Half-Cycle vs. Full-Cycle:**
    *   **Half-Cycle:** Faster response, less harmonic immunity.
    *   **Full-Cycle:** Slower response, excellent harmonic immunity.
*   **Sampling Rate:** Higher sampling rates provide more data points per cycle, allowing for more accurate DFT calculations and better resolution of higher harmonics.
*   **Window Size:** Directly impacts response time and harmonic rejection capabilities.
*   **Harmonics & Transients:** While fundamental frequency is the focus, understanding how algorithms handle these distortions is crucial.
*   **Computational Load:** FFT is a computationally efficient way to implement DFT.
*   **Applications:** Fundamental to overcurrent, distance, and differential protection.

---

### **10. Connecting to Course Outcomes and Knowledge Levels**

*   **CO1 (Identify protection scheme):** Understanding Fourier analysis (K2) explains the operational principles of distance and differential relays (K3), enabling their identification for specific fault types.
*   **CO2 (Develop protection scheme):** Knowledge of how fundamental frequency components are extracted (K2) is a prerequisite for understanding how these components are used in algorithms for transformer differential protection or busbar protection (K3).
*   **CO3 (Illustrate operation of a numerical relay):** Fourier analysis is a core signal processing technique *within* a numerical relay, so understanding it helps illustrate its internal workings (K2).
*   **CO4 (Explain signal processing methods):** This entire topic directly addresses and fulfills CO4 with K2 understanding of the Fourier analysis methods themselves.
*   **CO5 (Infer emerging protection schemes):** While this topic focuses on established methods, the principles of accurate signal analysis learned here are foundational for understanding more advanced algorithms in emerging schemes like adaptive protection or those utilizing higher-order frequency components.

---
This comprehensive set of notes covers the Fourier analysis-based algorithms (half cycle and full cycle) within the context of digital protection of power systems. It aims to provide a thorough understanding for students by explaining concepts, providing context from textbooks, and linking the material to the course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
