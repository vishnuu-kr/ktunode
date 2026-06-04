---
title: "Elements of digital communication system."
subject: "ELECTRONIC COMMUNICATION"
module: "Module 3: Digital baseband communication:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bf9"
status: "completed"
scrapedAt: "2026-05-23T16:40:21.323Z"
---
# Electronic Communication: Module 3 - Digital Baseband Communication
## Topic: Elements of Digital Communication System

---

### **Introduction**

Digital communication systems transmit information in digital form (sequences of binary digits, or bits). This contrasts with analog communication systems that transmit continuous waveforms. Digital communication offers significant advantages such as noise immunity, error correction capabilities, flexibility, and efficient use of bandwidth.

This module introduces the fundamental building blocks of a digital communication system, focusing on how information is converted, processed, transmitted, and recovered in a digital format.

---

### **Learning Outcomes Covered**

*   **CO3: Understand the various processing blocks of a digital communication system.** (Knowledge Level: K2)
*   **CO4: Apply the knowledge of digital modulation in digital transmission.** (Knowledge Level: K3)

---

### **Key Concepts and Definitions**

*   **Digital Communication System:** A system that transmits information in discrete binary form (bits).
*   **Baseband Signal:** A signal whose frequency spectrum extends down to zero (DC). In digital communication, the baseband signal is typically a sequence of pulses representing binary data.
*   **Bandpass Signal:** A signal whose spectrum is concentrated around a certain carrier frequency, significantly above zero.
*   **Source:** Generates the information to be transmitted.
*   **Transmitter:** Encodes, modulates, and shapes the digital information for transmission.
*   **Channel:** The medium through which the signal propagates.
*   **Receiver:** Detects, demodulates, decodes, and reconstructs the original information.
*   **Destination:** The intended recipient of the information.
*   **Quantization:** The process of mapping a continuous range of values to a smaller, finite set of values. (Relevant in analog-to-digital conversion, but the focus here is on digital signals already).
*   **Sampling:** The process of taking discrete measurements of a continuous-time signal at regular intervals. (Relevant in analog-to-digital conversion).
*   **Encoding:** The process of converting information into a desired format for transmission or storage, often to add redundancy for error detection/correction or to improve efficiency.
*   **Modulation:** The process of varying one or more properties of a periodic waveform (the carrier signal) to embed information. In digital modulation, the information is a sequence of digital symbols.
*   **Demodulation:** The reverse process of modulation, extracting the embedded information from the modulated carrier.
*   **Decoding:** The reverse process of encoding, restoring the original information from its encoded form.

---

### **Elements of a Digital Communication System**

A typical digital communication system can be broadly divided into the following functional blocks:

**1. Source:**
*   This is where the information originates. The source can be analog (e.g., voice, video) or digital (e.g., text files, computer data).
*   If the source is analog, it needs to be converted into a digital format. This usually involves:
    *   **Sampling:** Converting a continuous-time signal into a discrete-time signal. (According to the Nyquist-Shannon sampling theorem, the sampling rate must be at least twice the highest frequency component of the analog signal.)
    *   **Quantization:** Converting the sampled analog values into discrete amplitude levels.
    *   **Encoding:** Assigning binary codes to each quantized level.
*   *Textbook Reference:* Kennedy, Davis, and Prasanna (6th Ed.) discusses analog-to-digital conversion in Chapter 5, which is foundational. Tomasi (5th Ed.) also covers PCM (Pulse Code Modulation) in detail in Chapter 4.

**2. Transmitter:**
*   The transmitter takes the digital data from the source and prepares it for transmission over the communication channel. It consists of several sub-blocks:
    *   **Source Encoder:**
        *   **Purpose:** To reduce redundancy in the source data and/or to introduce redundancy for error control.
        *   **Types:**
            *   **Line Coding:** Converts the binary data into a suitable format for transmission. Examples include Non-Return-to-Zero (NRZ), Return-to-Zero (RZ), Manchester coding, Bipolar AMI. These codes ensure that the signal has properties suitable for transmission, such as having no DC component or sufficient transitions for clock recovery.
            *   **Channel Coding (Error Control Coding):** Adds redundant bits to the data to detect and/or correct errors introduced during transmission. Examples include Block Codes (e.g., Hamming codes, Reed-Solomon codes) and Convolutional Codes.
        *   *Textbook Reference:* Haykin and Mohre (5th Ed.) dedicates Chapter 3 to source coding. Tomasi (5th Ed.) covers line coding in Chapter 5.

    *   **Modulator:**
        *   **Purpose:** To shift the digital information (baseband signal) to a higher frequency band suitable for transmission over the communication channel. This is achieved by using a carrier signal.
        *   **Types of Digital Modulation:**
            *   **Amplitude Shift Keying (ASK):** The amplitude of the carrier signal is varied according to the digital data. (e.g., 0 represented by low amplitude, 1 by high amplitude).
            *   **Frequency Shift Keying (FSK):** The frequency of the carrier signal is varied according to the digital data. (e.g., 0 represented by one frequency, 1 by another).
            *   **Phase Shift Keying (PSK):** The phase of the carrier signal is varied according to the digital data. (e.g., 0 represented by a phase of 0°, 1 by a phase of 180° - Binary PSK or BPSK). More advanced versions like QPSK use multiple phase shifts.
            *   **Quadrature Amplitude Modulation (QAM):** Combines variations in both amplitude and phase of the carrier to transmit more data per symbol.
        *   *Textbook Reference:* Kennedy, Davis, and Prasanna (6th Ed.) covers digital modulation techniques extensively in Chapter 11. Tomasi (5th Ed.) also has a dedicated chapter (Chapter 6) on digital modulation. Haykin and Mohre (5th Ed.) covers these in Chapter 6.
        *   *Course Outcome Alignment:* CO4 – Apply the knowledge of digital modulation in digital transmission.

    *   **Pulse Shaping/Digital-to-Analog Conversion (for RF transmission):**
        *   **Purpose:** Before transmitting over a bandpass channel (like wireless or coaxial cable), the digital signal is typically converted to analog pulses, and these pulses are shaped to minimize intersymbol interference (ISI) and to fit within allocated bandwidth.
        *   **Key Concept: Intersymbol Interference (ISI):** Distortion of a signal caused by the delayed versions of the signal from adjacent symbols interfering with the current symbol. Pulse shaping (e.g., using raised-cosine filters) is crucial to mitigate ISI.
        *   *Textbook Reference:* Taub & Schilling (4th Ed.) discusses pulse shaping and ISI in Chapter 10. Lathi & Ding (4th Ed.) also provides in-depth coverage of pulse shaping in Chapter 9.

**3. Channel:**
*   This is the physical medium through which the signal travels from the transmitter to the receiver.
*   **Characteristics:**
    *   **Attenuation:** The signal power decreases as it travels.
    *   **Noise:** Unwanted random signals added to the transmitted signal. Common types include thermal noise, shot noise, and interference. Noise is a primary cause of errors in digital communication.
    *   **Distortion:** Changes in the signal waveform due to non-linearities or frequency-dependent characteristics of the channel.
    *   **Bandwidth Limitation:** The channel can only pass signals within a certain frequency range.
*   **Types of Channels:**
    *   **Wireline:** Twisted pair cables, coaxial cables.
    *   **Wireless:** Free space (radio waves, microwaves).
    *   **Optical Fiber:** Light pulses.
*   *Textbook Reference:* Kennedy, Davis, and Prasanna (6th Ed.) dedicates Chapter 2 to communication channels and their characteristics. Ziemer & Tranter (7th Ed.) also covers channel modeling thoroughly.

**4. Receiver:**
*   The receiver's job is to recover the original digital information from the received signal, which has been corrupted by the channel. It comprises the following sub-blocks:
    *   **Demodulator:**
        *   **Purpose:** To extract the digital information (symbols) from the modulated carrier signal. This is the reverse operation of the modulator.
        *   **Types:** Corresponds to the modulation types: ASK demodulator, FSK demodulator, PSK demodulator, QAM demodulator. The receiver needs to be synchronized in frequency and phase with the transmitted carrier for optimal performance.
        *   *Textbook Reference:* Kennedy, Davis, and Prasanna (6th Ed.) covers demodulation in Chapter 11, alongside modulation. Haykin and Mohre (5th Ed.) Chapter 6.
        *   *Course Outcome Alignment:* CO4 – Apply the knowledge of digital modulation in digital transmission.

    *   **Pulse Shaping/Matched Filtering:**
        *   **Purpose:** At the receiver, a matched filter is often used to maximize the signal-to-noise ratio (SNR) at the sampling instants and to further minimize ISI. The matched filter is designed to have an impulse response that is the time-reversed and conjugate of the transmitted pulse shape.
        *   *Textbook Reference:* Taub & Schilling (4th Ed.) Chapter 10, Lathi & Ding (4th Ed.) Chapter 9.

    *   **Synchronizer:**
        *   **Purpose:** To recover the timing of the received pulses (symbol timing) and the carrier frequency and phase. This is crucial for correct sampling of the received signal.
        *   **Types:** Clock recovery circuits, carrier recovery circuits (e.g., Costas loop).
        *   *Textbook Reference:* Kennedy, Davis, and Prasanna (6th Ed.) mentions synchronization in the context of demodulation. Proakis & Salehi (2nd Ed.) has detailed discussions on synchronization techniques.

    *   **Decision Device/Detector:**
        *   **Purpose:** Based on the sampled output of the matched filter (or other filtering), the detector decides which symbol was most likely transmitted. This involves comparing the received signal value to thresholds.
        *   **Example:** In BPSK, if the sampled output is positive, assume '1' was sent; if negative, assume '0' was sent.
        *   *Textbook Reference:* Couch (8th Ed.) provides a good overview of detection theory.

    *   **Channel Decoder:**
        *   **Purpose:** To detect and/or correct any errors that may have occurred during transmission using the redundant bits added by the channel encoder.
        *   *Textbook Reference:* Haykin and Mohre (5th Ed.) Chapter 3.

    *   **Source Decoder:**
        *   **Purpose:** To convert the recovered digital data back into the original information format. This is the reverse of the source encoder.
        *   *Textbook Reference:* Haykin and Mohre (5th Ed.) Chapter 3.

**5. Destination:**
*   This is where the recovered information is utilized. If the original source was analog, the digital data is converted back to an analog signal using a Digital-to-Analog Converter (DAC), followed by reconstruction filtering.

---

### **Diagram of a Digital Communication System**

```
+-------+       +---------------+       +----------+       +-------------+
|       |       | Source        |       |          |       |             |
|       | ----> | Encoder       | ----> |          | ----> | Transmitter |
| SOURCE|       | (Line, Channel|       | MODULATOR|       |             |
|       |       |  Coding)      |       |          |       |             |
+-------+       +---------------+       +----------+       +-------------+
                                                                   |
                                                                   |
                                                                   v
                                                               +---------+
                                                               |         |
                                                               | CHANNEL |
                                                               |         |
                                                               +---------+
                                                                   |
                                                                   |
                                                                   v
+-----------+       +---------------+       +----------+       +-------------+
|           |       |               |       |          |       |             |
| DESTINATION | <---- | Channel       | <---- |          | <---- | Receiver    |
|           |       | Decoder       |       | DEMODULATOR|       |             |
|           |       |               |       |          |       |             |
+-----------+       +---------------+       +----------+       +-------------+
```

---

### **Important Points to Remember**

*   Digital communication excels in **noise immunity** and **error correction** capabilities compared to analog systems.
*   The core process involves converting information to digital bits, preparing these bits for transmission (encoding, modulation), sending them over a channel, and then recovering the bits at the receiver (demodulation, decoding).
*   **Bandwidth efficiency** and **power efficiency** are critical performance metrics for digital modulation schemes.
*   **Intersymbol Interference (ISI)** is a major challenge in digital transmission, and pulse shaping at the transmitter and matched filtering at the receiver are key techniques to mitigate it.
*   **Synchronization** (timing and carrier) is vital for correct detection of digital signals at the receiver.
*   **Source encoding** aims to reduce redundancy, while **channel encoding** adds redundancy to combat errors.

---

### **Practice Questions**

**Q1. (CO3 - K2)** List the main functional blocks of a digital communication system and briefly describe the purpose of each.

**Q2. (CO4 - K3)** Explain why modulation is necessary for transmitting digital information over a bandpass channel.

**Q3. (CO3 - K2)** What is the role of source encoding in a digital communication system? Give an example of a type of source encoding.

**Q4. (CO4 - K3)** Discuss the concept of Intersymbol Interference (ISI) and how it can be mitigated at the receiver.

---

### **Answers**

**A1.**
The main functional blocks of a digital communication system are:
1.  **Source:** Generates the information to be transmitted.
2.  **Transmitter:** Prepares the digital data for transmission. It includes:
    *   **Source Encoder:** Reduces redundancy or adds error control.
    *   **Modulator:** Shifts the baseband signal to a carrier frequency.
3.  **Channel:** The medium through which the signal travels, introducing noise and distortion.
4.  **Receiver:** Recovers the original information from the received signal. It includes:
    *   **Demodulator:** Extracts the digital data from the modulated carrier.
    *   **Channel Decoder:** Corrects errors introduced by the channel.
5.  **Destination:** The intended recipient of the information.

**A2.**
Modulation is necessary to:
*   **Shift the baseband digital signal to a higher frequency band:** This allows transmission over channels that are not suitable for baseband signals (e.g., free space, coaxial cables).
*   **Utilize the channel efficiently:** Different frequency bands are allocated for different communication services, and modulation places the signal in its allocated band.
*   **Overcome limitations of antennas:** For efficient radiation and reception of signals, antenna size is inversely proportional to the signal frequency. Higher frequencies allow for smaller antennas.

**A3.**
Source encoding aims to represent the original information efficiently. This can involve:
*   **Data Compression (reducing redundancy):** Removing statistical redundancy from the source data to reduce the transmission rate and bandwidth requirements (e.g., Huffman coding).
*   **Error Control Coding (adding redundancy):** Adding redundant bits to the data to enable the receiver to detect and correct errors that occur during transmission (e.g., parity checks, Hamming codes).

**A4.**
**Intersymbol Interference (ISI):** ISI occurs when the pulse from a previous symbol interferes with the current symbol at the sampling instant. This happens due to channel distortions and non-ideal filtering, where the tails of pulses spread into adjacent symbol intervals. It leads to errors in symbol detection.

**Mitigation at the Receiver:**
*   **Matched Filtering:** A matched filter is used at the receiver. Its impulse response is designed to maximize the SNR at the sampling instants. It is matched to the transmitted pulse shape.
*   **Pulse Shaping (Nyquist Criterion):** At the transmitter, the transmitted pulses are shaped (e.g., using raised-cosine filters) such that the overall system (transmitter pulse shaping + channel + receiver matched filter) satisfies the Nyquist criterion. The Nyquist criterion for zero ISI states that the sum of the frequency responses of the transmitting and receiving filters, when sampled at appropriate frequencies, should result in a sinc-like function that has zeros at all symbol intervals except the center one.

---

This concludes Module 3, Topic: Elements of Digital Communication System. Further topics will delve into specific digital modulation and coding techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
