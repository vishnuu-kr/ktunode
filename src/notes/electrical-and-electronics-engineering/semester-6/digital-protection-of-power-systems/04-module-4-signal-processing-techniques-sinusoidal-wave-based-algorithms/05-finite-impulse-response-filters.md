---
title: "Finite Impulse Response filters"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 4: Signal processing techniques:  Sinusoidal wave based algorithms"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3659d"
status: "completed"
scrapedAt: "2026-05-23T16:26:14.959Z"
---
# Digital Protection of Power Systems: Module 4 - Signal Processing Techniques: Sinusoidal Wave Based Algorithms

## Topic: Finite Impulse Response (FIR) Filters

This module focuses on the application of signal processing techniques in digital protection of power systems. Specifically, we will delve into Finite Impulse Response (FIR) filters, which are crucial for extracting and analyzing sinusoidal signals (like voltage and current) in the presence of noise and harmonics.

---

### 1. Introduction to Digital Filters and FIR Filters

**1.1 What is Digital Filtering?**
Digital filtering involves processing discrete-time signals using digital algorithms. In power system protection, this means manipulating sampled voltage and current waveforms to extract meaningful information about the power system's state.

**1.2 Why Digital Filtering in Power Systems?**
*   **Noise Reduction:** Power system signals are often corrupted by noise from various sources (switching transients, measurement noise, electromagnetic interference). Filters help to remove this noise.
*   **Harmonic Elimination:** Power systems contain harmonics, which can distort fundamental frequency waveforms. Filters are essential for isolating the fundamental frequency component.
*   **Feature Extraction:** Digital filters are used to extract specific features of the signal, such as the magnitude, phase, and frequency of the fundamental component, which are crucial for relaying decisions.
*   **Algorithm Implementation:** Many digital protection algorithms rely on filtered signals as inputs.

**1.3 Types of Digital Filters:**
*   **Finite Impulse Response (FIR) Filters:** The output depends only on present and past input samples. The impulse response is of finite duration.
*   **Infinite Impulse Response (IIR) Filters:** The output depends on present and past input samples, as well as past output samples. The impulse response is of infinite duration.

**1.4 Focus on FIR Filters:**
FIR filters are preferred in many digital protection applications due to their inherent stability, linear phase response (which preserves waveform shape), and ease of implementation using transversal filters.

---

### 2. Fundamentals of FIR Filters

**2.1 Definition and Characteristics:**
An FIR filter is characterized by its impulse response, which is a finite sequence of coefficients. The output $y[n]$ of an FIR filter is a weighted sum of the current and past input samples $x[n]$:

$$y[n] = b_0x[n] + b_1x[n-1] + b_2x[n-2] + \dots + b_Mx[n-M]$$

where:
*   $y[n]$ is the output sample at time $n$.
*   $x[n]$ is the input sample at time $n$.
*   $b_i$ are the filter coefficients.
*   $M$ is the order of the filter.

The impulse response of an FIR filter is the sequence $\{b_0, b_1, b_2, \dots, b_M\}$, which has a finite length of $M+1$.

**2.2 Difference Equation:**
The above equation is the difference equation representation of an FIR filter.

**2.3 Transfer Function:**
The transfer function of an FIR filter in the z-domain is given by:

$$H(z) = \frac{Y(z)}{X(z)} = b_0 + b_1z^{-1} + b_2z^{-2} + \dots + b_Mz^{-M}$$

**2.4 Block Diagram Representation (Transversal Filter):**
An FIR filter can be implemented using a transversal filter structure, which consists of:
*   **Delay elements:** To delay the input signal by one sample at a time.
*   **Multipliers:** To multiply the delayed input samples by the filter coefficients.
*   **Adders:** To sum the weighted delayed samples to produce the output.

```
      x[n] ---->(*)----->(+)-----> y[n]
               b0      |
                       |
      x[n-1]-->[z^-1]-->(*)----->(+)
               b1      |
                       |
      x[n-2]-->[z^-1]-->[z^-1]-->(*)----->(+)
               b2      |
                       ...
```
*(Diagram shows a basic transversal FIR filter structure)*

**2.5 Advantages of FIR Filters:**
*   **Guaranteed Stability:** The output is always bounded if the input is bounded, as there are no feedback loops.
*   **Linear Phase Response:** FIR filters can be designed to have a linear phase response, meaning all frequency components are delayed by the same amount. This preserves the waveform shape, which is critical in power system protection for accurate phase angle measurements.
*   **Ease of Design:** Many systematic design methods are available (e.g., windowing method, frequency sampling method).
*   **Can achieve exact linear phase:** This is a significant advantage over IIR filters, which can only approximate linear phase. (Refer to Johns & Salman, Chapter 4).

**2.6 Disadvantages of FIR Filters:**
*   **Higher order for sharp transitions:** To achieve sharp frequency cutoffs (like those needed for precise fundamental frequency extraction), FIR filters typically require a higher order (more coefficients and delay elements) compared to IIR filters, leading to increased computational complexity and latency.
*   **More memory required:** Due to the higher order, FIR filters generally require more memory to store coefficients and intermediate results.

---

### 3. Design of FIR Filters for Power System Protection

**3.1 Design Objectives:**
*   **Bandpass Filtering:** To extract the fundamental frequency component (e.g., 50 Hz or 60 Hz) while attenuating harmonics and noise.
*   **Linear Phase:** To maintain the phase relationship between voltage and current for accurate impedance or power calculations.
*   **Sufficient Bandwidth:** To allow for variations in fundamental frequency due to system loading or oscillations.
*   **Low Sidelobes:** To minimize leakage of energy from unwanted frequencies into the passband.

**3.2 Design Methods:**

**3.2.1 Windowing Method:**
This is the most common method for designing FIR filters. It involves:
1.  **Specifying the desired frequency response:** Define the passband and stopband characteristics.
2.  **Designing an ideal filter:** An ideal filter has a perfect brick-wall frequency response (e.g., zero attenuation in the passband and infinite attenuation in the stopband). The impulse response of an ideal filter is often infinitely long.
3.  **Truncating the impulse response:** The infinite impulse response of the ideal filter is truncated to obtain a finite impulse response. This truncation introduces ripples in the frequency response (Gibbs phenomenon).
4.  **Applying a window function:** A window function is multiplied with the truncated impulse response to smooth the transition and reduce the Gibbs phenomenon. Different window functions offer trade-offs between transition bandwidth and sidelobe attenuation.

*   **Common Window Functions:**
    *   **Rectangular Window:** Simplest, but has poor sidelobe attenuation.
    *   **Hanning Window:** Better sidelobe attenuation than rectangular, but wider transition band.
    *   **Hamming Window:** Similar to Hanning, slightly better sidelobe attenuation.
    *   **Blackman Window:** Even better sidelobe attenuation, but wider transition band.
    *   **Kaiser Window:** Offers flexibility in adjusting the trade-off between transition bandwidth and sidelobe attenuation.

*   **Example: Designing a Low-Pass FIR Filter using the Windowing Method:**
    Let's say we want to design a low-pass filter to isolate the fundamental frequency.
    *   Define the cutoff frequency ($f_c$).
    *   Design an ideal low-pass filter with this cutoff frequency. The impulse response $h_d[n]$ would be a sinc function.
    *   Choose a window function, say Hanning.
    *   The FIR filter coefficients are $b_n = h_d[n] \cdot w[n]$, where $w[n]$ is the Hanning window.

**3.2.2 Frequency Sampling Method:**
This method directly designs the filter by specifying the desired frequency response at a number of frequency points. It's useful when specific frequency response points are critical.

**3.3 Symmetric and Antisymmetric FIR Filters:**
FIR filters can have symmetric or antisymmetric coefficients, which leads to specific phase responses:
*   **Type I (Linear Phase):** Symmetric coefficients ($b_k = b_{M-k}$ for even $M$) result in linear phase. This is the most common type for signal processing.
*   **Type II:** Symmetric coefficients ($b_k = b_{M-k}$ for odd $M$) also result in linear phase.
*   **Type III:** Antisymmetric coefficients ($b_k = -b_{M-k}$) result in approximately linear phase and can be used for differentiators.
*   **Type IV:** Antisymmetric coefficients with an even number of coefficients.

**3.4 Design for Power System Protection Applications:**

*   **Bandpass Filters:** In power system protection, we often need bandpass filters to isolate the fundamental frequency. These can be constructed by cascading a low-pass and a high-pass filter, or by directly designing a bandpass filter.
    *   **Example:** A bandpass filter centered at 50 Hz with a passband width to accommodate system frequency variations. (Refer to Phadke & Thorpe, Chapter 3).
*   **Notch Filters:** Used to reject specific frequencies, such as switching frequencies from power electronic devices.
*   **Decimation/Interpolation:** FIR filters are crucial in decimation (reducing the sampling rate) and interpolation (increasing the sampling rate) processes, which are common in digital protection for efficient data handling.

---

### 4. Application of FIR Filters in Digital Protection

**4.1 Fundamental Frequency Extraction:**
*   **Purpose:** To obtain the magnitude and phase of the fundamental component of voltage and current, which are essential for calculating impedance, power, and detecting faults.
*   **Method:** A bandpass FIR filter centered at the fundamental frequency (50 Hz or 60 Hz) is used. The output of the filter provides a smoothed and noise-free fundamental component.
*   **Algorithm Example:**
    1.  Sample the voltage ($v[n]$) and current ($i[n]$) waveforms at a high sampling rate.
    2.  Pass the sampled signals through a bandpass FIR filter designed to pass the fundamental frequency and attenuate harmonics and noise.
    3.  From the filtered fundamental components, calculate the RMS magnitude and phase angle.
    4.  These values are then used by the protection algorithm (e.g., distance relaying).

**(CO4: Explain signal processing methods and algorithms in digital protection)**
**(CO1: Identify the relay protection scheme suitable for overcurrent, differential and distance protection)** - Magnitude and phase are used in all these schemes.

**4.2 RMS Value Calculation:**
*   FIR filters can be used to compute a smoothed RMS value of a signal. A simple FIR filter can average the square of the signal samples over a specific window.

**4.3 Waveform Recognition and Fault Detection:**
*   While not their primary use, FIR filters can contribute to waveform analysis by providing filtered signals that are more amenable to pattern recognition algorithms.

**4.4 Algorithms Mentioned in Textbooks:**

*   **Phadke & Thorpe (Chapter 3):** Discusses the use of digital filters, particularly FIR filters, for extracting fundamental frequency components and the importance of linear phase. They often refer to cascading simple filters or using specific design techniques to achieve the desired frequency response.
*   **Johns & Salman (Chapter 4):** Provides a detailed treatment of digital filter design, including FIR filters. They discuss the windowing method, phase characteristics, and design considerations for power system applications like harmonic rejection and fundamental component extraction. They emphasize the benefits of linear phase for maintaining accurate phase measurements.
*   **Badri Ram & Viswakarma (Chapter 10):** Covers digital signal processing techniques, including FIR and IIR filters, and their application in numerical relays. They discuss filter design for harmonic suppression and fundamental frequency extraction.
*   **Rebizant (Chapter 5):** Focuses on signal processing for digital protection, including FIR filter design for obtaining fundamental frequency components of voltage and current. He highlights the role of FIR filters in achieving precise phase angle measurements and their stability.

**(CO3: Illustrate the operation of a numerical relay)** - FIR filters are core components in the signal processing chain of numerical relays.

**4.5 Example: A Simple FIR Bandpass Filter for Fundamental Frequency Extraction**

Consider a power system operating at 50 Hz. Let the sampling frequency ($f_s$) be 1 kHz (10 samples per cycle).
We need a bandpass filter centered at 50 Hz.

*   **Design Concept:** A bandpass filter can be realized by appropriately choosing the coefficients of an FIR filter. One common approach is to use a low-pass filter followed by a high-pass filter, or by directly designing a bandpass filter using the windowing method.
*   **Coefficients:** The design of these coefficients is complex and typically done using software tools (like MATLAB's `firpm` or `fir1` functions). For a filter of order $N$, we would have $N+1$ coefficients $b_0, b_1, \dots, b_N$.
*   **Example Coefficients (Conceptual):** Suppose we design a 10th-order FIR bandpass filter with a passband from 48 Hz to 52 Hz. The coefficients $b_0, b_1, \dots, b_{10}$ would be calculated to achieve this.
*   **Operation:**
    *   Input samples: $x[n]$ (e.g., current waveform).
    *   Output samples: $y[n] = \sum_{k=0}^{10} b_k x[n-k]$.
    *   The output $y[n]$ will represent the fundamental frequency component of the input $x[n]$, with harmonics and noise significantly attenuated.

**(CO4: Explain signal processing methods and algorithms in digital protection)**

---

### 5. Practice Questions and Answers

**Question 1:** What are the primary advantages of using FIR filters over IIR filters in digital power system protection applications?
**Answer:** The primary advantages are guaranteed stability and the ability to achieve exact linear phase response, which is crucial for preserving waveform shape and ensuring accurate phase angle measurements.

**Question 2:** Explain the windowing method for designing FIR filters. What is the purpose of the window function?
**Answer:** The windowing method involves truncating the impulse response of an ideal filter and then multiplying it by a window function. The window function smooths the transition between the passband and stopband, reducing the Gibbs phenomenon (ripples) that arise from truncation, and improves the overall frequency response.

**Question 3:** Why is linear phase response important in digital power system protection?
**Answer:** Linear phase response ensures that all frequency components of the signal are delayed by the same amount. This is vital for accurate calculation of phase angles between voltage and current, which are used in impedance calculations (distance relaying), power calculations, and fault impedance estimation. Deviation from linear phase can lead to significant errors in these measurements.

**Question 4:** A digital relay samples current at 1 kHz. If it needs to extract the 50 Hz fundamental component, what type of FIR filter would be most suitable, and what are the key design considerations?
**Answer:** A bandpass FIR filter centered at 50 Hz would be most suitable. Key design considerations include:
*   **Passband:** Centered at 50 Hz with a sufficient bandwidth to accommodate system frequency variations.
*   **Stopband:** To attenuate harmonics (100 Hz, 150 Hz, etc.) and other out-of-band noise.
*   **Phase Response:** Linear phase is highly desirable.
*   **Order of the filter:** A higher order provides sharper frequency selectivity but increases computational burden and latency. The sampling rate also influences the filter design.

**Question 5:** Briefly describe the structure of a transversal FIR filter.
**Answer:** A transversal FIR filter consists of a series of delay elements, multipliers, and adders. Input samples are passed through delays, multiplied by filter coefficients, and then summed to produce the output.

---

### 6. Important Points to Remember

*   **FIR filters are stable and can achieve linear phase.** This is their main advantage for power system protection.
*   **The windowing method is the most common FIR filter design technique.** Key windows include Hanning, Hamming, Blackman, and Kaiser.
*   **Linear phase is critical for accurate phase angle measurements.**
*   **FIR filters are widely used for fundamental frequency extraction** in digital relays.
*   **Higher order FIR filters offer better frequency selectivity but increase computation and delay.**
*   **FIR filters are implemented as transversal filters.**
*   **The coefficients of an FIR filter define its impulse response.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. Further Reading and References

*   **Johns, A. T., & Salman, S. K. (1995). Digital Protection of Power System.** (Chapter 4 on Digital Filtering)
*   **Phadke, A. G., & Thorpe, J. S. (1988). Computer Relaying for Power Systems.** (Chapter 3 on Digital Signal Processing)
*   **Ram, B., & Viswakarma, D. N. (2011). Power System Protection and Switchgear.** (Chapter 10 on Digital Protection)
*   **Rebizant, W. (2008). Digital Signal Processing in Power System Protection and Control.** (Chapter 5 on FIR Filters)

---

### 8. Alignment with Course Outcomes

*   **CO1 (Identify protection schemes):** Understanding FIR filters helps in realizing how fundamental frequency components (magnitude, phase) are extracted, which are inputs for overcurrent, differential, and distance relays.
*   **CO2 (Develop protection schemes):** Knowledge of FIR filters is essential for designing the signal processing front-end of protection schemes for various power system assets.
*   **CO3 (Illustrate numerical relay operation):** FIR filters are fundamental building blocks within numerical relays for signal conditioning and feature extraction.
*   **CO4 (Explain signal processing methods):** This entire topic directly addresses CO4 by explaining the design and application of FIR filters.
*   **CO5 (Infer emerging schemes):** While FIR filters are traditional, understanding their principles is foundational for appreciating more advanced adaptive filtering techniques used in emerging protection schemes.

---
This concludes the study notes for Finite Impulse Response (FIR) filters within the context of digital protection of power systems.