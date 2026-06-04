---
title: "concept of synchronized sampling"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 4: Signal processing techniques:  Sinusoidal wave based algorithms"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f365a0"
status: "completed"
scrapedAt: "2026-05-23T16:26:18.845Z"
---
# Digital Protection of Power Systems: Module 4 - Signal Processing Techniques: Sinusoidal Wave Based Algorithms

## Topic: Concept of Synchronized Sampling

### 1. Introduction

Digital relays rely on sampling the analog signals (voltage and current) from the power system to perform their protective functions. For accurate analysis and efficient algorithm development, it is crucial that these samples are taken in a synchronized manner across different locations and at different times. Synchronized sampling forms the bedrock for many advanced digital protection algorithms, particularly those dealing with sinusoidal waveforms.

**Key Concept:** Synchronized sampling is the process of acquiring analog signals at precise, predetermined time instants that are aligned with a common reference, typically the power system frequency.

### 2. Why is Synchronized Sampling Necessary?

In digital protection, we often need to:

*   **Calculate fundamental frequency phasors:** Accurate representation of voltage and current waveforms in terms of magnitude and phase is essential for directional and differential protection schemes. Synchronized sampling ensures that the phase angles are consistent and meaningful.
*   **Perform differential calculations:** For protecting transformers, busbars, and generators, the currents at the terminals need to be compared. If these currents are sampled at different times, the comparison will be erroneous, leading to misoperation or failure to operate.
*   **Implement Fourier-based algorithms:** Many sinusoidal wave-based algorithms, like the Discrete Fourier Transform (DFT), require samples taken over a specific, integer number of cycles. Synchronized sampling ensures that the sampling window aligns with the fundamental frequency cycle.
*   **Achieve interoperability:** When protection schemes involve multiple relays or communicate with phasor measurement units (PMUs), synchronized sampling is vital for data exchange and coordinated operation.

**Analogy:** Imagine trying to compare the heights of several people by measuring them at random times. The measurements might not reflect their true heights at a specific point in time. However, if you measure everyone simultaneously, you get a consistent and comparable snapshot. Similarly, synchronized sampling provides a consistent snapshot of the power system waveforms.

### 3. Principles of Synchronized Sampling

The core idea is to establish a common time reference for all sampling instances. This is typically achieved by:

*   **Using a common clock signal:** The most direct method is to distribute a high-precision clock signal to all digital relays. However, this can be challenging and expensive in large power systems.
*   **Deriving the sampling instant from the power system frequency itself:** This is the more common and practical approach in digital protection. The sampling process is synchronized with the zero crossings or peaks of the fundamental frequency voltage or current waveform.

**Key Concept:** The sampling frequency ($f_s$) is usually a multiple of the power system frequency ($f_p$), such that $f_s = N \times f_p$, where $N$ is an integer. This ensures that a whole number of cycles are captured within a given sampling window.

#### 3.1. Synchronization Techniques

Several techniques are employed to achieve synchronized sampling:

*   **Zero-crossing detection:** The sampling process is triggered by the zero crossings of the fundamental frequency voltage (or current) waveform. This is a widely used method.
    *   **How it works:** A comparator circuit detects when the voltage waveform crosses zero. This zero-crossing event is then used to initiate the sampling of the analog signals.
    *   **Advantages:** Relatively simple to implement.
    *   **Disadvantages:** Sensitive to harmonics and noise, which can cause spurious zero crossings and affect synchronization. The phase of the samples relative to the fundamental frequency can vary slightly due to these disturbances.

*   **PLL (Phase-Locked Loop) based synchronization:** A PLL is a feedback control system that generates an output signal whose phase is related to the phase of an input reference signal. In digital protection, a PLL can be used to track the fundamental frequency component of the voltage or current signal and generate a synchronous sampling clock.
    *   **How it works:** The PLL's voltage-controlled oscillator (VCO) output is phase-locked to the fundamental frequency component of the input waveform. The output of the VCO then serves as the clock signal for the analog-to-digital converters (ADCs).
    *   **Advantages:** More robust to harmonics and noise compared to simple zero-crossing detection. Can provide a stable sampling clock even during minor frequency deviations.
    *   **Disadvantages:** More complex to implement than zero-crossing detection.

*   **GPS/IRIG-B Time Synchronization:** For applications requiring extremely high accuracy and synchronization across widely dispersed locations (e.g., PMUs), Global Positioning System (GPS) or Inter-Range Instrumentation Group (IRIG-B) time signals are used.
    *   **How it works:** A GPS receiver or an IRIG-B decoder receives precise time signals. This timing information is then used to trigger the sampling process at very specific, globally synchronized time instants.
    *   **Advantages:** Provides the highest level of synchronization accuracy, crucial for wide-area monitoring and control.
    *   **Disadvantages:** High cost and complexity. Typically used for specialized applications, not as the primary synchronization method for all digital relays.

#### 3.2. Sampling Frequency and Window Size

To analyze the power system waveforms accurately, the sampling frequency and the duration of the sampling window are critical.

*   **Sampling Frequency ($f_s$):** According to Nyquist's theorem, the sampling frequency must be at least twice the highest frequency component present in the signal to avoid aliasing. In power systems, besides the fundamental frequency ($f_p$), there are also harmonics. However, for sinusoidal wave-based algorithms, we are primarily interested in the fundamental frequency component. A common practice is to choose $f_s$ as a multiple of $f_p$, e.g., $f_s = 12 \times f_p$, $f_s = 16 \times f_p$, or even higher.
*   **Sampling Window:** The number of samples taken over a specific period is the sampling window. For sinusoidal wave-based algorithms, it is common to acquire samples over one or two full cycles of the fundamental frequency.
    *   If $f_s = 12 \times f_p$, then over one cycle of $f_p$, we get 12 samples.
    *   If the sampling window is one cycle, and $f_p = 50$ Hz, then $f_s$ must be at least $2 \times 50 = 100$ Hz. If we choose $f_s = 12 \times 50 = 600$ Hz, then over one cycle (20 ms), we get 12 samples.

**Example:** If the power system frequency is 50 Hz and the relay uses synchronized sampling with a sampling frequency of 600 Hz (12 samples per cycle), then over one cycle (20 ms), 12 samples will be acquired. If the sampling is synchronized to the zero crossing, the first sample might be taken at 1/12th of a cycle after the zero crossing, the second at 2/12th, and so on, up to the 12th sample at the next zero crossing.

### 4. Impact on Algorithm Performance

Synchronized sampling has a profound impact on the performance of sinusoidal wave-based algorithms:

*   **Fourier Analysis (DFT):** Algorithms like the DFT or FFT (Fast Fourier Transform) require samples to be taken over an integer number of cycles. Synchronized sampling ensures this condition is met, allowing for accurate extraction of the fundamental frequency component and harmonics.
    *   **Formula for DFT:**
        $X_k = \sum_{n=0}^{N-1} x[n] e^{-j2\pi kn/N}$
        where:
        *   $X_k$ is the k-th frequency component
        *   $x[n]$ are the sampled values
        *   $N$ is the number of samples (window size)
        *   $k$ is the frequency index (0 for DC, 1 for fundamental, etc.)
    *   If samples are not synchronized, the phase shift between cycles can lead to spectral leakage, where the energy of a frequency component spreads to adjacent frequencies.

*   **Phasor Estimation:** Accurate phasor estimation (magnitude and phase angle) of voltage and current is crucial for distance relays, differential relays, and overcurrent relays with directional elements. Synchronized sampling ensures that the phase angles derived from the samples are consistent and reflect the true phase relationship between different signals.
    *   **Example:** For a cosine-based phasor estimation:
        $I_{rms} = \frac{2}{N} \sum_{n=0}^{N-1} i[n] \cos(\omega_0 n T_s)$
        $I_{angle} = \arctan\left(\frac{\sum_{n=0}^{N-1} i[n] \sin(\omega_0 n T_s)}{\sum_{n=0}^{N-1} i[n] \cos(\omega_0 n T_s)}\right)$
        where $T_s$ is the sampling period and $\omega_0$ is the fundamental angular frequency. For these to be accurate, $nT_s$ must be precisely synchronized with the waveform's phase.

*   **Differential Protection:** The accurate comparison of currents at the terminals of protected equipment (transformers, busbars, generators) is paramount for differential protection. Any phase shift introduced by non-synchronized sampling will lead to false differential currents, potentially causing misoperation during normal conditions or failure to detect faults.

*   **Distance Protection:** Distance relays calculate impedance by dividing voltage phasors by current phasors. The accuracy of these phasors, and thus the calculated impedance, directly depends on synchronized sampling. Incorrect phase angles will lead to erroneous impedance calculations and incorrect zone targeting.

### 5. Textbooks' Perspectives on Synchronized Sampling

*   **Johns and Salman (1995):** Emphasize the importance of synchronized sampling for implementing Fourier series analysis in digital relays. They discuss how a fixed number of samples over an integer number of cycles is required for accurate harmonic analysis and phasor estimation. They might highlight zero-crossing detection as a primary synchronization method.
*   **Phadke and Thorpe (1988):** Discuss the "digital sampling process" and the need for precise timing. They would likely cover the concept of sampling frequency and its relationship to the fundamental frequency, and the benefits of synchronized sampling for accurate waveform reconstruction and digital filtering. They might also introduce the concept of using a fixed sampling window aligned with the system frequency.
*   **Badri Ram and D. N. Viswakarma (2011):** Likely cover synchronized sampling as a prerequisite for various digital relaying algorithms, including fundamental frequency estimation and phasor calculation. They would explain the trade-offs between sampling frequency, resolution, and computational burden.
*   **Rebizant (2008):** Being a more modern text, Rebizant would likely delve deeper into PLL-based synchronization and discuss its advantages in handling system disturbances. The text might also touch upon the role of synchronized sampling in wide-area monitoring systems and the concept of synchronized measurements.

### 6. Learning Outcome Alignment

*   **CO4: Explain signal processing methods and algorithms in digital protection (Knowledge Level: K2):** This topic directly addresses this CO by explaining the fundamental signal processing technique of synchronized sampling, which is a prerequisite for many sinusoidal wave-based algorithms like DFT, phasor estimation, etc.

### 7. Important Points to Remember

*   Synchronized sampling ensures that samples are taken at precise, time-aligned instants.
*   This is crucial for accurate phasor estimation, differential comparisons, and Fourier analysis.
*   Common synchronization methods include zero-crossing detection, PLL, and GPS/IRIG-B.
*   The sampling frequency ($f_s$) is typically a multiple of the power system frequency ($f_p$), and samples are taken over integer cycles of the fundamental frequency.
*   Non-synchronized sampling can lead to spectral leakage and inaccurate protection decisions.
*   The choice of synchronization method depends on the required accuracy, complexity, and cost.

### 8. Practice Questions and Exercises

**Question 1:**
What is the primary reason for employing synchronized sampling in digital protection relays?
**(a)** To reduce the number of samples required.
**(b)** To ensure accurate comparison of voltage and current waveforms at different locations.
**(c)** To increase the sampling frequency.
**(d)** To simplify the design of analog-to-digital converters.

**Answer:** (b) To ensure accurate comparison of voltage and current waveforms at different locations.

**Question 2:**
If a digital relay samples at a frequency of 960 Hz and the power system frequency is 60 Hz, how many samples are taken per cycle of the fundamental frequency?
**(a)** 10
**(b)** 12
**(c)** 16
**(d)** 20

**Answer:** (c) 16 (960 Hz / 60 Hz = 16 samples per cycle)

**Question 3:**
Discuss the advantages and disadvantages of using zero-crossing detection for synchronized sampling.

**Answer:**
*   **Advantages:** Relatively simple to implement.
*   **Disadvantages:** Sensitive to harmonics and noise, which can cause spurious zero crossings and affect synchronization accuracy.

**Question 4:**
How does synchronized sampling contribute to the accuracy of phasor estimation in digital relays?

**Answer:** Synchronized sampling ensures that the phase angles of the sampled voltage and current waveforms are accurately represented relative to the fundamental frequency. This allows for precise calculation of the magnitude and phase angle of the fundamental components, which are essential for phasor estimation. Without synchronization, phase shifts between samples from different cycles or different locations can lead to erroneous phasor values.

**Question 5:**
Explain the concept of spectral leakage and how synchronized sampling helps to mitigate it in Fourier-based algorithms.

**Answer:** Spectral leakage occurs in Fourier analysis when the sampled signal does not contain an integer number of cycles within the sampling window. This causes the energy of a particular frequency component to spread to adjacent frequency bins. Synchronized sampling, by ensuring that samples are taken over an integer number of fundamental frequency cycles, effectively "truncates" the signal at the same phase point in each cycle. This alignment prevents the introduction of discontinuities that cause spectral leakage, leading to a cleaner and more accurate representation of the frequency spectrum.

This concludes the notes on the concept of synchronized sampling. Understanding this fundamental principle is crucial for grasping how various sinusoidal wave-based algorithms operate effectively in digital power system protection.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
