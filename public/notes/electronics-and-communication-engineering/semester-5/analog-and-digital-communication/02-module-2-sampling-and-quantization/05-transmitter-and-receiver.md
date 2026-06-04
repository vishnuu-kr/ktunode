---
title: "Transmitter and receiver."
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 2: Sampling and Quantization"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe904"
status: "completed"
scrapedAt: "2026-05-23T17:52:51.205Z"
---
# Module 2: Sampling and Quantization - Transmitter and Receiver

This module delves into the fundamental building blocks of any communication system: the transmitter and the receiver. We will explore their roles, internal workings, and how they facilitate the transfer of information from source to destination, specifically within the context of sampling and quantization.

**Course Outcomes Alignment:**

*   **CO1: Illustrate the principles of analog communication systems (Knowledge Level: K2)** - Understanding the general function of transmitters and receivers is foundational to understanding analog communication.
*   **CO2: Explain the basic concepts of digital communication (Knowledge Level: K2)** - This topic directly addresses the initial stages of digital communication, where analog signals are processed.
*   **CO3: Analyse the baseband transmission of digital data through AWGN channel (Knowledge Level: K3)** - While this topic focuses on the hardware, the output of the transmitter and the input to the receiver are the signals that will be analyzed in a channel.

---

## 1. Introduction to Communication Systems: The Transmitter and Receiver

At its core, a communication system aims to transfer information from a source to a destination. This process is typically facilitated by a transmitter and a receiver.

*   **Transmitter:** The part of a communication system that converts the original information source signal into a form suitable for transmission over the communication channel and then transmits it.
*   **Receiver:** The part of a communication system that accepts the transmitted signal from the channel, converts it back into a form suitable for the destination, and delivers it.

**Key Concept:** The transmitter and receiver work in tandem. The receiver must be designed to "undo" the operations performed by the transmitter.

---

## 2. The Transmitter: From Source to Channel

The transmitter's primary role is to prepare the information signal for transmission. This involves several crucial steps, especially when dealing with analog signals that are to be converted into digital form.

### 2.1. Transmitter Architecture

A typical transmitter can be broadly categorized into the following functional blocks:

*   **Source:** The original information signal (e.g., voice, data).
*   **Transducer:** Converts the physical phenomenon into an electrical signal (e.g., microphone for voice, keyboard for data).
*   **Pre-processing/Conditioning:** Operations like amplification, filtering, or equalization to prepare the signal.
*   **Modulator:** Imprints the information onto a carrier signal.
*   **Power Amplifier:** Increases the signal power to overcome channel losses.
*   **Transmitting Antenna:** Radiates the modulated signal into the communication channel.

### 2.2. Role of Sampling and Quantization in the Transmitter (Digital Communication Context)

While Module 2 focuses on sampling and quantization, it's important to understand how these processes fit into the transmitter's overall function when transitioning from analog to digital communication.

*   **Sampling:** The process of converting a continuous-time analog signal into a discrete-time signal by taking samples at regular intervals. This is the first step in making an analog signal digital.
    *   **Nyquist-Shannon Sampling Theorem:** States that a band-limited signal, $x(t)$, with bandwidth $B$ Hz, can be perfectly reconstructed from its samples if the sampling rate, $f_s$, is greater than or equal to twice the maximum frequency ($2B$ Hz). This minimum sampling rate is called the Nyquist rate.
        *   **Formula:** $f_s \ge 2B$
        *   **Impact:** If $f_s < 2B$, **aliasing** occurs, where higher frequencies in the original signal masquerade as lower frequencies, leading to distortion and loss of information.
    *   **Textbook Reference:** Haykin & Moher (5th Ed.) and Lathi & Ding (5th Ed.) provide extensive coverage of the sampling theorem and its implications, including the concept of aliasing.

*   **Quantization:** The process of approximating the sampled values (which can have a continuous range of amplitudes) to a finite number of discrete amplitude levels. This is the second step in analog-to-digital conversion.
    *   **Quantization Error:** The difference between the original sampled value and its quantized value. This is an inherent source of distortion in digital communication.
    *   **Types of Quantization:**
        *   **Uniform Quantization:** The quantization levels are equally spaced.
        *   **Non-uniform Quantization:** The quantization levels are not equally spaced, often denser in regions where the signal has more amplitude variation (e.g., mu-law or A-law companding used in voice communication).
    *   **Number of Quantization Levels (L):** Directly impacts the **resolution** of the digital representation. A higher number of levels leads to lower quantization error but requires more bits per sample.
    *   **Textbook Reference:** Lathi & Ding (5th Ed.) and Proakis & Salehi (6th Ed.) offer detailed explanations of quantization techniques and their impact on signal-to-quantization-noise ratio (SQNR).

*   **Encoding:** Assigning binary codes to the quantized levels. This converts the discrete amplitude values into a binary stream.

**Example:** Imagine converting a continuous audio signal (analog) into a digital format for storage or transmission.

1.  **Microphone:** Converts sound waves into an analog electrical signal.
2.  **Anti-aliasing Filter:** A low-pass filter applied before sampling to remove frequencies above $B$ Hz to prevent aliasing.
3.  **Sampler:** Takes discrete voltage measurements of the analog signal at a rate $f_s \ge 2B$.
4.  **Quantizer:** Rounds each sampled voltage to the nearest predefined discrete level.
5.  **Encoder:** Assigns a binary code (e.g., 8-bit or 16-bit) to each quantized level.

The output of the transmitter, after these stages (and subsequent modulation and amplification), is a digital signal ready for transmission.

---

## 3. The Receiver: From Channel to Destination

The receiver's objective is to recover the original information signal from the received signal, which has been corrupted by noise and distortions during transmission.

### 3.1. Receiver Architecture

A typical receiver generally mirrors the transmitter's structure, but with inverse operations.

*   **Receiving Antenna:** Captures the transmitted signal from the channel.
*   **Low-Noise Amplifier (LNA):** Amplifies the weak received signal with minimal added noise.
*   **Demodulator:** Extracts the information from the carrier signal.
*   **Signal Conditioning/Processing:** Operations like filtering, equalization, and decoding to clean up and interpret the signal.
*   **Detector/Decoder:** Converts the processed signal back into the original form.
*   **Transducer:** Converts the electrical signal back into a physical form (e.g., speaker for voice, display for data).

### 3.2. Role of Reconstruction in the Receiver (Digital Communication Context)

In digital communication, the receiver's task involves undoing the digital conversion process performed at the transmitter.

*   **Decoding:** Converts the received binary stream back into quantized amplitude levels.
*   **Reconstruction/Interpolation:** The process of estimating the original continuous-time signal from the discrete-time samples. This is the inverse of sampling.
    *   **Ideal Low-Pass Filter:** Theoretically, an ideal low-pass filter with a cutoff frequency of $f_s/2$ can perfectly reconstruct the original signal from its samples, provided the sampling theorem was satisfied.
    *   **Practical Reconstruction:** In practice, practical filters are used, and the reconstruction process aims to minimize errors.
*   **D/A Conversion:** Converts the reconstructed discrete-time signal with discrete amplitude levels back into a continuous-time analog signal.

**Example (Continuing the audio example):**

1.  **Received Signal:** A digital audio stream arrives at the receiver.
2.  **Decoder:** Converts the binary codes back into quantized amplitude levels.
3.  **Reconstruction Filter (Low-Pass Filter):** Smooths out the discrete amplitude levels to approximate the original continuous-time analog signal. The cutoff frequency of this filter is typically set to half the sampling rate ($f_s/2$).
4.  **Digital-to-Analog Converter (DAC):** Converts the reconstructed analog signal into a continuous electrical signal.
5.  **Amplifier:** Amplifies the signal for the speaker.
6.  **Speaker:** Converts the electrical signal back into sound waves.

**Important Point:** The quality of reconstruction at the receiver is heavily dependent on the fidelity of the sampling and quantization processes at the transmitter and the effectiveness of the reconstruction filter at the receiver.

---

## 4. Relationship between Transmitter and Receiver Operations

The operations performed by the transmitter and receiver must be complementary for successful communication.

*   **Modulation/Demodulation:** If the transmitter modulates a signal onto a carrier frequency, the receiver must demodulate it to recover the original baseband information.
*   **Encoding/Decoding:** If the transmitter encodes information in a specific format (e.g., pulse-code modulation), the receiver must decode it using the same scheme.
*   **Sampling/Reconstruction:** The sampling rate used at the transmitter dictates the bandwidth of the reconstruction filter required at the receiver.

**Textbook Reference:** Taub & Schilling (4th Ed.) and Kennedy (6th Ed.) provide comprehensive overviews of various modulation and demodulation schemes, highlighting the transmitter-receiver pair concept.

---

## 5. Practice Questions and Answers

**Question 1:**
A band-limited signal has a maximum frequency of 5 kHz. What is the minimum sampling rate required to avoid aliasing?
(a) 2.5 kHz
(b) 5 kHz
(c) 10 kHz
(d) 20 kHz

**Answer 1:**
According to the Nyquist-Shannon Sampling Theorem, the minimum sampling rate $f_s$ must be at least twice the maximum frequency ($2B$).
Here, $B = 5$ kHz.
So, $f_s \ge 2 \times 5$ kHz = 10 kHz.
The minimum sampling rate is 10 kHz.
**Correct Option: (c)**

**Question 2:**
What is the primary source of error introduced by the quantization process?
(a) Aliasing
(b) Quantization error
(c) Thermal noise
(d) Interference

**Answer 2:**
Quantization error is the difference between the actual sampled value and the quantized value. Aliasing is caused by undersampling. Thermal noise and interference are channel-induced errors.
**Correct Option: (b)**

**Question 3:**
Describe the function of an anti-aliasing filter in the transmitter's analog-to-digital conversion process.

**Answer 3:**
An anti-aliasing filter is a low-pass filter placed before the sampler. Its purpose is to remove or significantly attenuate any frequency components in the analog signal that are above half the sampling frequency ($f_s/2$). This prevents aliasing, where these higher frequencies would be falsely represented as lower frequencies after sampling, leading to irreversible distortion of the signal.

**Question 4:**
If a transmitter samples an analog signal at 20 kHz, what is the maximum frequency component that can be accurately reconstructed at the receiver using an ideal low-pass filter?

**Answer 4:**
The maximum frequency that can be accurately reconstructed is half the sampling rate.
Maximum reconstructible frequency = $f_s / 2 = 20$ kHz / 2 = 10 kHz.

---

## 6. Important Points to Remember

*   **Transmitter's Goal:** Prepare the signal for channel transmission.
*   **Receiver's Goal:** Recover the original signal from the received corrupted signal.
*   **Nyquist-Shannon Sampling Theorem:** Crucial for preventing aliasing in digital communication. $f_s \ge 2B$.
*   **Aliasing:** Occurs when $f_s < 2B$, leading to irreversible distortion.
*   **Quantization:** Introduces quantization error, which is an inherent limitation of analog-to-digital conversion.
*   **Number of Quantization Levels (L):** Affects resolution and quantization error. Higher L means better resolution but more bits needed.
*   **Transmitter and Receiver Operations are Complementary:** Demodulation must match modulation, decoding must match encoding, etc.
*   **Reconstruction Filter:** The receiver uses a low-pass filter (ideally with cutoff $f_s/2$) to reconstruct the analog signal from samples.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## 7. Textbook and Reference Book Content Integration

This module's content is primarily drawn from foundational concepts covered in all listed textbooks.

*   **Haykin & Moher (5th Ed. & Indian Adaptation 2nd Ed.):** Provides a thorough introduction to the fundamental principles of both analog and digital communication, including detailed explanations of sampling and its theoretical underpinnings, as well as the basic structure of transmitters and receivers. Their coverage of sampling is particularly strong in establishing the basis for digital signal processing.
*   **Lathi & Ding (5th Ed.):** Offers in-depth analysis of sampling, quantization, and their effects on signal quality. Their treatment of quantization error and the metrics to evaluate it (like SQNR) is highly relevant. The book's focus on modern digital communication systems naturally includes the detailed breakdown of transmitter and receiver functions in this context.
*   **Proakis & Salehi (Digital Communications 6th Ed.):** While more advanced, their foundational chapters on signal processing for digital communications would cover the necessity of sampling and quantization, and the design considerations for the initial stages of a digital communication system.
*   **Taub & Schilling (4th Ed.):** Essential for understanding the complete communication system, including the crucial interplay between modulation/demodulation and the overall transmitter/receiver design. They provide a classic perspective on the building blocks.
*   **Kennedy (6th Ed.):** A comprehensive resource for electronic communication systems, offering a practical view of the hardware and signal processing involved in both analog and digital transmitters and receivers.

---

This detailed study note provides a comprehensive understanding of the transmitter and receiver's roles in analog and digital communication, with a specific focus on the crucial steps of sampling and quantization. By understanding these fundamental components, you can better grasp the subsequent topics in digital communication systems.