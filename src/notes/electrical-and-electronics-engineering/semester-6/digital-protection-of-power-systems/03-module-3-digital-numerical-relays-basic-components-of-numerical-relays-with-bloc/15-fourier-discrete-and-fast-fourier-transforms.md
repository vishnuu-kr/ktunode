---
title: "Fourier, Discrete and fast Fourier transforms"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 3: Digital (Numerical) Relays :  Basic Components of numerical Relays with block diagram"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36597"
status: "completed"
scrapedAt: "2026-05-23T16:26:11.245Z"
---
# Digital Protection of Power Systems - Module 3: Digital (Numerical) Relays: Basic Components of Numerical Relays

## Topic: Fourier, Discrete and Fast Fourier Transforms

This topic explores the fundamental signal processing techniques used in numerical relays to analyze the power system waveform. Understanding these transforms is crucial for comprehending how numerical relays extract meaningful information from the sampled current and voltage signals.

---

### 1. Learning Outcomes Addressed:

*   **CO4: Explain signal processing methods and algorithms in digital protection (Knowledge Level: K2)**
    *   This section directly addresses how Fourier Transforms (FT), Discrete Fourier Transforms (DFT), and Fast Fourier Transforms (FFT) are applied in digital protection to process signals.
*   **CO3: Illustrate the operation of a numerical relay (Knowledge Level: K2)**
    *   While this topic focuses on a specific aspect, understanding frequency domain analysis is a building block for illustrating the overall operation of a numerical relay by explaining how it interprets the system's electrical characteristics.

---

### 2. Introduction to Signal Processing in Numerical Relays

Numerical relays operate by digitizing analog power system signals (current and voltage) and then processing these digital samples to detect abnormal conditions. A key aspect of this processing involves analyzing the frequency content of the signals. This allows relays to identify characteristics of fault conditions, such as the presence of harmonics or the fundamental frequency component.

**Key Concept:** Numerical relays transform time-domain signals into the frequency domain to extract relevant information.

---

### 3. The Fourier Transform (FT)

The Fourier Transform is a mathematical tool that decomposes a function (in this case, a time-varying signal) into its constituent frequencies. It represents the signal as a sum of sine and cosine waves of different frequencies and amplitudes.

**Definition:** The Fourier Transform of a continuous-time signal $x(t)$ is given by:

$X(j\omega) = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt$

where:
*   $X(j\omega)$ is the frequency-domain representation of the signal $x(t)$.
*   $\omega$ is the angular frequency ($\omega = 2\pi f$, where $f$ is the frequency in Hz).
*   $j$ is the imaginary unit ($\sqrt{-1}$).

**Purpose in Digital Protection:**
*   **Frequency Analysis:** FT allows us to determine the amplitude and phase of different frequency components present in the power system signal.
*   **Harmonic Detection:** Faults in power systems often generate harmonics (multiples of the fundamental frequency). FT can identify and quantify these harmonics.
*   **Fundamental Frequency Component:** The magnitude and phase of the fundamental frequency component (50 Hz or 60 Hz) are crucial for determining the power system's operating state.

**Textbook Reference:**
*   **Digital Signal Processing in Power System Protection and Control by Waldemar Rebizant (Springer Publication, 2008):** This book extensively covers the theoretical basis of Fourier analysis and its application in power system protection, explaining how different frequency components relate to system behavior.

---

### 4. The Discrete Fourier Transform (DFT)

In digital relays, we deal with sampled data, not continuous-time signals. The Discrete Fourier Transform (DFT) is the adaptation of the Fourier Transform for discrete-time signals.

**Definition:** For a finite sequence of $N$ samples $x[n]$ (where $n = 0, 1, 2, \dots, N-1$), the DFT is given by:

$X[k] = \sum_{n=0}^{N-1} x[n] e^{-j2\pi kn/N}$ for $k = 0, 1, 2, \dots, N-1$

where:
*   $X[k]$ represents the frequency component at discrete frequency index $k$.
*   $N$ is the total number of samples in the block.
*   $e^{-j2\pi kn/N}$ is the complex exponential term, representing the sinusoidal basis functions.

**Key Concepts and Properties of DFT:**
*   **Sampling:** The original continuous-time signal is sampled at a specific sampling frequency ($f_s$).
*   **Frequency Resolution:** The DFT provides frequency information at discrete points. The frequency resolution is determined by the sampling frequency and the number of samples ($N$).
    *   Frequency resolution $\Delta f = f_s / N$.
*   **Nyquist Frequency:** The maximum frequency that can be represented without aliasing is $f_s/2$.
*   **Computational Complexity:** Calculating the DFT directly requires $N^2$ complex multiplications and additions. For large $N$, this can be computationally intensive.

**Application in Digital Relays:**
*   The sampled current and voltage waveforms are processed using the DFT to obtain their frequency spectrum.
*   The magnitude of the fundamental frequency component ($k=1$ for a 50Hz system if $f_s$ is chosen appropriately) is used to calculate RMS values for relaying functions (e.g., overcurrent, differential).
*   The magnitudes of harmonic components ($k=2, 3, \dots$) can be used for fault classification or to identify specific fault types.

**Example:**
Suppose we have a block of $N=100$ samples of a current signal sampled at $f_s = 1200$ Hz.
*   The fundamental frequency of the power system is 50 Hz.
*   The frequency resolution would be $\Delta f = 1200 \text{ Hz} / 100 = 12$ Hz.
*   The frequency corresponding to index $k=1$ would be $1 \times 12 = 12$ Hz. This isn't directly 50 Hz because the DFT indices correspond to multiples of $f_s/N$. To directly get the 50 Hz component, we need to choose $N$ such that $k \times (f_s/N) = 50$ Hz. For instance, if $f_s = 2400$ Hz and $N=48$, then $f_s/N = 2400/48 = 50$ Hz. Then $k=1$ would correspond to 50 Hz.

**Textbook Reference:**
*   **Computer Relaying for Power Systems by A. G. Phadke and James S. Thorpe (Research study press Ltd, John Wiley & Sons, Taunton, UK, 1988):** This foundational text details the application of DFT in early digital relays, explaining how to extract fundamental and harmonic components from sampled data for protection purposes.

---

### 5. The Fast Fourier Transform (FFT)

While DFT provides the necessary frequency information, its direct computation is inefficient for real-time applications like digital relays, which often require processing many samples. The Fast Fourier Transform (FFT) is an *algorithm* that computes the DFT much more efficiently.

**Key Concept:** FFT is an algorithm, not a different transform. It computes the same result as the DFT but with significantly fewer computations.

**Algorithm Basis:** FFT algorithms exploit the symmetries and periodicities of the complex exponential term ($e^{-j2\pi kn/N}$) to reduce the number of calculations. The most common FFT algorithms are the Cooley-Tukey algorithms.

**Computational Efficiency:** FFT algorithms reduce the computational complexity from $O(N^2)$ to $O(N \log N)$.

**Example:**
*   If $N = 1024$ (a power of 2, which is ideal for many FFT algorithms):
    *   DFT computation: $1024^2 \approx 1$ million operations.
    *   FFT computation: $1024 \log_2(1024) = 1024 \times 10 \approx 10$ thousand operations.
    *   This is a massive reduction in computational effort, making real-time processing feasible.

**Application in Digital Relays:**
*   **Real-time Performance:** FFT is the workhorse for frequency analysis in modern numerical relays due to its speed.
*   **Algorithm Implementation:** Relays use FFT to quickly calculate the magnitude and phase of the fundamental frequency and harmonic components from sampled data.
*   **Windowing:** To handle finite data blocks and minimize spectral leakage (where energy from one frequency "leaks" into adjacent frequency bins), various windowing functions (e.g., Hamming, Hanning, Blackman) are applied before the FFT. These window functions smooth the edges of the data block, improving frequency resolution and reducing leakage.

**Textbook Reference:**
*   **Digital Protection of Power System by A. T. Johns and S. K. Salman (Peter Peregrinus Ltd, UK, 1995):** This book discusses the practical implementation of FFT in digital relays, including aspects of windowing techniques to mitigate spectral leakage and improve accuracy.

---

### 6. Block Diagram Illustration (Conceptual)

While a detailed block diagram of a numerical relay is presented in other parts of Module 3, let's conceptually place the FFT/DFT processing within that context:

```
+-----------------+     +-----------------+     +-----------------+     +-----------------+
| CT / VT Signal  | --> | Analog Anti-    | --> | Sample & Hold   | --> | Analog-to-      |
| (Continuous)    |     | Aliasing Filter |     | Circuit         |     | Digital         |
+-----------------+     +-----------------+     +-----------------+     | Converter (ADC) |
                                                                          +--------+--------+
                                                                                   | (Digital Samples)
                                                                                   v
                                                                          +--------+--------+
                                                                          | Signal Processing |
                                                                          | Unit (DSP)      |
                                                                          | - DFT / FFT     |
                                                                          | - Windowing     |
                                                                          | - RMS Calc.     |
                                                                          | - Harmonic Calc.|
                                                                          +--------+--------+
                                                                                   | (Feature/Magnitude/Phase Data)
                                                                                   v
                                                                          +--------+--------+
                                                                          | Logic / Decision|
                                                                          | Unit            |
                                                                          +--------+--------+
                                                                                   | (Trip Command)
                                                                                   v
                                                                          +--------+--------+
                                                                          | Output Relay /  |
                                                                          | Tripping Coil |
                                                                          +-----------------+
```

**Explanation of the placement:**
1.  **Analog Signal Acquisition:** Current and voltage signals from CTs and VTs are the inputs.
2.  **Anti-Aliasing Filter:** Prevents frequencies above half the sampling rate from being misrepresented.
3.  **Sampling & Hold:** Captures the analog signal at discrete time instances.
4.  **ADC:** Converts the sampled analog values into digital numbers.
5.  **Signal Processing Unit (DSP):** This is where the DFT or, more practically, the FFT algorithm is applied to the block of digital samples. It extracts magnitudes and phases of different frequency components.
6.  **Logic/Decision Unit:** Uses the processed frequency information (e.g., RMS value of the fundamental, harmonic magnitudes) to make protection decisions.

---

### 7. Key Points to Remember

*   **FT, DFT, FFT Relationship:** FT is the general concept, DFT is for discrete signals, and FFT is an efficient algorithm to compute the DFT.
*   **Purpose:** Frequency analysis, harmonic detection, and extracting fundamental component magnitude/phase.
*   **Sampling Rate:** Crucial for determining frequency resolution and avoiding aliasing.
*   **Number of Samples (N):** Affects frequency resolution ($\Delta f = f_s / N$). Larger $N$ gives better frequency resolution but requires more processing time per block.
*   **FFT Efficiency:** $O(N \log N)$ is vital for real-time relaying.
*   **Windowing:** Essential for practical FFT implementation to reduce spectral leakage and improve accuracy.
*   **Harmonics:** Presence and magnitude of harmonics are important indicators of fault conditions and power quality issues.

---

### 8. Practice Questions and Exercises

**Question 1 (K2):**
What is the fundamental difference between the Fourier Transform (FT) and the Discrete Fourier Transform (DFT)?

**Answer 1:**
The Fourier Transform (FT) is used for continuous-time signals, transforming them into a continuous frequency spectrum. The Discrete Fourier Transform (DFT) is specifically designed for discrete-time (sampled) signals and produces a discrete frequency spectrum.

**Question 2 (K2):**
Explain why the Fast Fourier Transform (FFT) is preferred over the direct computation of the Discrete Fourier Transform (DFT) in numerical relays.

**Answer 2:**
The FFT is preferred because it is a highly efficient algorithm that significantly reduces the computational burden required to calculate the DFT. Its complexity is $O(N \log N)$ compared to the DFT's $O(N^2)$, making real-time analysis of power system waveforms feasible for numerical relays.

**Question 3 (K2):**
If a numerical relay samples current at $f_s = 2400$ Hz and processes a block of $N = 48$ samples, what is the frequency resolution of its spectral analysis? What frequency corresponds to the DFT index $k=1$?

**Answer 3:**
*   **Frequency Resolution:** $\Delta f = f_s / N = 2400 \text{ Hz} / 48 = 50$ Hz.
*   **Frequency at $k=1$:** The frequency corresponding to index $k=1$ is $1 \times \Delta f = 1 \times 50 \text{ Hz} = 50$ Hz. This choice of sampling rate and block size is often used to directly isolate the fundamental frequency component.

**Question 4 (K2):**
What is "spectral leakage" in the context of FFT, and how can it be mitigated?

**Answer 4:**
Spectral leakage occurs when the energy of a signal component at a particular frequency "spreads" into adjacent frequency bins in the DFT/FFT output. This happens when the signal frequencies do not perfectly align with the discrete frequency bins defined by the sampling rate and block size. It can be mitigated by applying windowing functions (e.g., Hamming, Hanning, Blackman) to the sampled data before performing the FFT. These functions taper the edges of the data block, reducing discontinuities and minimizing leakage.

**Question 5 (K2):**
How can the FFT output be used by a numerical relay to detect a fault?

**Answer 5:**
The FFT output provides the magnitudes and phases of different frequency components.
*   **Fundamental Frequency Magnitude:** A significant drop in the fundamental frequency (50/60 Hz) component's magnitude can indicate an overload or fault.
*   **Harmonic Magnitudes:** The presence and magnitude of harmonics (e.g., 2nd, 3rd, 5th harmonics) can be characteristic of certain fault types (e.g., DC offset, saturation of CTs, specific types of faults). A numerical relay can analyze these harmonic magnitudes to classify the fault or confirm its presence.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 9. References and Further Reading:

*   **Digital Protection of Power System by A. T. Johns and S. K. Salman (Peter Peregrinus Ltd, UK, 1995):** Chapters related to signal processing and digital algorithms.
*   **Computer Relaying for Power Systems by A. G. Phadke and James S. Thorpe (Research study press Ltd, John Wiley & Sons, Taunton, UK, 1988):** Early and foundational work on applying DFT to power system relaying.
*   **Power System Protection and Switchgear by Badri Ram and D. N. Viswakarma (Tata McGraw Hill Education, Pvt Edition, 2011):** Provides context on why signal processing is needed in protection.
*   **Digital Signal Processing in Power System Protection and Control by Waldemar Rebizant (Springer Publication, 2008):** A more contemporary and detailed reference for DSP techniques, including FFT, in power system applications.

This detailed overview of Fourier, Discrete, and Fast Fourier Transforms provides a strong foundation for understanding how numerical relays process signals to achieve reliable and fast protection.