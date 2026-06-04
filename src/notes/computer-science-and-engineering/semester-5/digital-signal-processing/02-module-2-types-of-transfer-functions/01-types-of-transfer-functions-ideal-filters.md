---
title: "Types of transfer functions- Ideal filters"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 2: Types of transfer functions"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b7e0"
status: "completed"
scrapedAt: "2026-05-20T16:46:07.095Z"
---
## DIGITAL SIGNAL PROCESSING - Module 2: Types of Transfer Functions - Ideal Filters

These notes cover the topic of Ideal Filters, a sub-topic within the module "Types of Transfer Functions" in Digital Signal Processing.

**Learning Outcomes:**

*   Understand the concept of a transfer function and its relation to filters.
*   Define and describe the characteristics of ideal filters (Lowpass, Highpass, Bandpass, Bandstop).
*   Analyze the frequency response of ideal filters (magnitude and phase).
*   Recognize the limitations of ideal filters in practical applications.
*   Understand the time-domain response of ideal filters and the implications for signal processing.

**1. Introduction to Transfer Functions**

*   **Definition:** A transfer function, denoted as H(ω) or H(z) (depending on whether you're in continuous-time (Fourier) or discrete-time (Z-transform) domain), represents the relationship between the output and input of a linear time-invariant (LTI) system. It describes how a system modifies the frequency components of a signal.
*   **Mathematical Representation:** H(ω) = Y(ω) / X(ω)  or H(z) = Y(z) / X(z), where X(ω) or X(z) is the input spectrum, and Y(ω) or Y(z) is the output spectrum.
*   **Filters as LTI Systems:** Filters are a specific type of LTI system designed to selectively modify the frequency content of a signal. They attenuate or amplify certain frequency ranges.
*   **Key Characteristics of a Transfer Function:**
    *   **Magnitude Response |H(ω)| or |H(z)|:**  Indicates how the amplitude of different frequency components is affected.  Often plotted on a log scale (dB).
    *   **Phase Response ∠H(ω) or ∠H(z):** Indicates how the phase of different frequency components is shifted.
*   **Importance:** The transfer function completely characterizes the behavior of an LTI system/filter.

**2. Ideal Filters: A Definition**

*   **Definition:** Ideal filters are theoretical filters that perfectly pass signals within a specific frequency range (passband) and completely block signals outside that range (stopband).  The transition between passband and stopband is instantaneous (ideally a brick-wall transition).
*   **Practicality:** Ideal filters are unrealizable in practice due to their abrupt transitions and the requirement of infinite impulse response (discussed later). However, they serve as a valuable benchmark for evaluating real-world filter designs.

**3. Types of Ideal Filters and their Characteristics**

*   **3.1 Ideal Lowpass Filter**
    *   **Definition:** Passes frequencies below a cutoff frequency (ω<sub>c</sub>) and blocks frequencies above ω<sub>c</sub>.
    *   **Magnitude Response:**
        *   |H(ω)| = 1, for |ω| ≤ ω<sub>c</sub> (Passband)
        *   |H(ω)| = 0, for |ω| > ω<sub>c</sub> (Stopband)
    *   **Phase Response:**  Ideally linear phase within the passband (∠H(ω) = -ωτ, where τ is a constant delay). This ensures that signals within the passband are delayed by the same amount without distortion. Often assumed to be 0 for simplicity in theoretical analysis.
    *   **Frequency Response Plot (idealized):** Imagine a perfect rectangle with a height of 1 going from -ω<sub>c</sub> to ω<sub>c</sub> on the frequency axis.
    *   **Application:** Used to remove high-frequency noise or unwanted signals while preserving the lower frequencies.

*   **3.2 Ideal Highpass Filter**
    *   **Definition:** Passes frequencies above a cutoff frequency (ω<sub>c</sub>) and blocks frequencies below ω<sub>c</sub>.
    *   **Magnitude Response:**
        *   |H(ω)| = 0, for |ω| < ω<sub>c</sub> (Stopband)
        *   |H(ω)| = 1, for |ω| ≥ ω<sub>c</sub> (Passband)
    *   **Phase Response:** Ideally linear phase in the passband, often assumed to be zero for simplicity.
    *   **Frequency Response Plot (idealized):** Imagine a perfect rectangle with a height of 1 going from -∞ to -ω<sub>c</sub> and from ω<sub>c</sub> to ∞ on the frequency axis.
    *   **Application:** Used to remove low-frequency noise or DC components while preserving the higher frequencies.

*   **3.3 Ideal Bandpass Filter**
    *   **Definition:** Passes frequencies within a specific band (ω<sub>1</sub> to ω<sub>2</sub>) and blocks frequencies outside that band.
    *   **Magnitude Response:**
        *   |H(ω)| = 1, for ω<sub>1</sub> ≤ |ω| ≤ ω<sub>2</sub> (Passband)
        *   |H(ω)| = 0, otherwise (Stopband)
    *   **Phase Response:** Ideally linear phase in the passband, often assumed to be zero for simplicity.
    *   **Frequency Response Plot (idealized):** Imagine a rectangle with a height of 1 going from -ω<sub>2</sub> to -ω<sub>1</sub> and from ω<sub>1</sub> to ω<sub>2</sub> on the frequency axis.
    *   **Application:** Used to isolate a specific frequency range, such as in radio receivers.

*   **3.4 Ideal Bandstop Filter (Notch Filter)**
    *   **Definition:** Blocks frequencies within a specific band (ω<sub>1</sub> to ω<sub>2</sub>) and passes frequencies outside that band.
    *   **Magnitude Response:**
        *   |H(ω)| = 0, for ω<sub>1</sub> ≤ |ω| ≤ ω<sub>2</sub> (Stopband)
        *   |H(ω)| = 1, otherwise (Passband)
    *   **Phase Response:** Ideally linear phase in the passband(s), often assumed to be zero for simplicity.
    *   **Frequency Response Plot (idealized):** Imagine a horizontal line at a magnitude of 1, with a "notch" going down to 0 between -ω<sub>2</sub> and -ω<sub>1</sub>, and between ω<sub>1</sub> and ω<sub>2</sub> on the frequency axis.
    *   **Application:** Used to remove a specific interfering frequency, such as 60 Hz power line hum.

**4. Time-Domain Response and Limitations**

*   **Impulse Response:** The impulse response, h(t) (or h[n] for discrete-time), is the inverse Fourier transform (or inverse Z-transform) of the transfer function H(ω) (or H(z)).
*   **Ideal Lowpass Filter Impulse Response:** The impulse response of an ideal lowpass filter is a sinc function (sin(ω<sub>c</sub>t) / t in continuous time, or sin(ω<sub>c</sub>n) / n in discrete time).
*   **Causality:** The sinc function extends to ±∞, meaning the ideal lowpass filter is *non-causal*. A causal system's output depends only on present and past inputs, not future inputs. Non-causal systems cannot be realized in real-time.
*   **Gibbs Phenomenon:** The sharp transition of an ideal filter in the frequency domain causes ringing (oscillations) in its impulse response, known as the Gibbs phenomenon. This ringing introduces ripples in the passband and stopband of practical filters and leads to overshoot and undershoot in the time-domain response to step signals.
*   **Infinite Impulse Response (IIR):** Ideal filters generally have infinite impulse responses, meaning the output continues indefinitely even after the input has stopped. This makes them difficult to implement practically.

**5. Why Ideal Filters are Unrealizable**

*   **Non-Causality:** The impulse response of an ideal filter is non-causal, requiring access to future input values, which is impossible in real-time systems.
*   **Infinite Impulse Response:**  Ideal filters require an infinite amount of memory to store the impulse response, making them computationally impractical.
*   **Gibbs Phenomenon:**  The abrupt transition in the frequency domain causes undesirable ringing in the time domain.

**6. Practical Filters and Trade-offs**

*   Real-world filters approximate ideal filters but are always causal and have finite impulse responses (FIR filters) or can be implemented using recursive structures (IIR filters).
*   Practical filter design involves trade-offs between:
    *   **Transition Bandwidth:** The width of the frequency range between the passband and stopband.  A narrower transition band makes the filter closer to ideal but typically increases filter order (complexity).
    *   **Passband Ripple:** The variation in magnitude response within the passband.
    *   **Stopband Attenuation:** The amount of attenuation in the stopband.
    *   **Filter Order:** Related to the complexity and computational cost of the filter.
    *   **Linearity of Phase:**  How linear the phase response is in the passband.
*   Common practical filter types: Butterworth, Chebyshev (Type I and Type II), Elliptic.

**Important Points to Remember:**

*   Ideal filters are theoretical concepts used as benchmarks.
*   They are unrealizable due to non-causality, infinite impulse response, and the Gibbs phenomenon.
*   Practical filter design involves trade-offs between various filter characteristics.
*   The type of filter you choose (Lowpass, Highpass, Bandpass, Bandstop) depends on the specific application and the desired frequency selectivity.

**Practice Questions/Exercises:**

1.  **Conceptual Question:** Explain why an ideal lowpass filter cannot be implemented in a real-time system.  Include the terms "causality" and "impulse response" in your explanation.

    *   **Answer:** An ideal lowpass filter cannot be implemented in a real-time system because its impulse response is non-causal. This means the filter's output at any given time depends on both past *and future* input values. Real-time systems can only process information that is currently available or has occurred in the past; they cannot access future data.

2.  **Analysis Question:** Describe the magnitude response of an ideal bandstop filter with a stopband between 1 kHz and 2 kHz.

    *   **Answer:** The magnitude response of the ideal bandstop filter would be 0 (completely blocked) for frequencies between 1 kHz and 2 kHz (|f|). Outside this range, the magnitude response would be 1 (completely passed) for all other frequencies (|f| < 1 kHz and |f| > 2 kHz).  The transition from 0 to 1 and vice versa is instantaneous.

3.  **Application Question:** You want to remove 60 Hz hum from an audio recording. What type of ideal filter would you use, and why?

    *   **Answer:** You would use an ideal bandstop filter (also called a notch filter) centered at 60 Hz. This filter would attenuate or completely block the 60 Hz frequency, while allowing the other audio frequencies to pass through relatively unchanged.

4.  **True or False:** An ideal highpass filter has an infinite impulse response.

    *   **Answer:** True

5.  **What is the Gibb's Phenomenon and how does it relate to ideal filters?**

    *   **Answer:** The Gibbs Phenomenon is a phenomenon that arises when approximating a discontinuous function (such as the sharp cutoff of an ideal filter's frequency response) with a Fourier series or inverse Fourier transform (to obtain the filter's impulse response). It results in overshoot and undershoot (ringing) near the discontinuity, both in the frequency domain (ripples in the passband and stopband of a practical filter) and in the time domain (oscillations in the response to a step function).

These notes provide a comprehensive overview of ideal filters within the context of digital signal processing. Remember to practice and apply these concepts to solidify your understanding. Good luck!
