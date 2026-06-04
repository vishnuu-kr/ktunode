---
title: "Block diagram of a communication system."
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 1: Block diagram of a communication system."
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe8f8"
status: "completed"
scrapedAt: "2026-05-23T17:52:43.288Z"
---
# ANALOG AND DIGITAL COMMUNICATION - Module 1: Block Diagram of a Communication System

## Topic: Block Diagram of a Communication System

---

### **Introduction to Communication Systems**

Communication is the process of transferring information from one point to another. A communication system is designed to achieve this transfer efficiently and reliably. This module introduces the fundamental building blocks of any communication system.

---

### **Learning Outcomes Covered:**

*   **LO1: Understand the basic structure of a communication system.**
*   **LO2: Identify and explain the function of each block in a communication system's block diagram.**
*   **LO3: Differentiate between the roles of the transmitter and receiver.**
*   **LO4: Understand the concept of a channel and its impact on communication.**
*   **LO5: Recognize the importance of the information source and destination.**

---

### **Course Outcomes Alignment:**

*   **CO1: Illustrate the principles of analog communication systems (Knowledge Level: K2)** - Understanding the block diagram is foundational to illustrating analog communication principles.
*   **CO2: Explain the basic concepts of digital communication (Knowledge Level: K2)** - The block diagram applies equally to digital communication systems, providing a framework for understanding its basic concepts.

---

### **Key Concepts and Definitions**

*   **Information Source:** The origin of the message to be transmitted. This could be voice, data, image, or any other form of information.
*   **Transmitter:** A set of devices that processes the information from the source and converts it into a form suitable for transmission over the channel.
*   **Channel:** The medium through which the processed information is transmitted from the transmitter to the receiver. This can be wired (e.g., coaxial cable, twisted pair) or wireless (e.g., atmosphere, space).
*   **Receiver:** A set of devices that accepts the transmitted signal from the channel and converts it back into a form understandable by the destination.
*   **Destination:** The entity for whom the information is intended. It receives the processed signal from the receiver.
*   **Noise:** Unwanted disturbances that corrupt the transmitted signal during its journey through the channel, affecting the quality of the received information.

---

### **1. Block Diagram of a General Communication System**

A typical communication system can be represented by a block diagram, illustrating the flow of information from source to destination.

```
+-----------------+      +-------------+      +---------+      +-----------+      +-------------+      +-------------+
|  Information    |----->| Transmitter |----->| Channel |----->| Receiver  |----->| Destination |----->| Information |
|      Source     |      |             |      |         |      |           |      |             |      |  Received   |
+-----------------+      +-------------+      +---------+      +-----------+      +-------------+      +-------------+
                                                                     ^
                                                                     |
                                                                 +---------+
                                                                 |  Noise  |
                                                                 +---------+
```

Let's break down each block:

---

### **2. Detailed Explanation of Each Block**

#### **2.1 Information Source**

*   **Function:** Generates the message or information to be communicated.
*   **Examples:**
    *   **Analog Source:** A microphone producing an audio signal, a camera capturing an image.
    *   **Digital Source:** A computer keyboard generating text data, a sensor producing digital readings.
*   **Characteristics:** The nature of the source (analog vs. digital, bandwidth, data rate) significantly influences the design of the communication system.
*   **Reference:** Haykin & Moher (2020) and Lathi & Ding (2018) emphasize the importance of characterizing the source for efficient communication.

#### **2.2 Transmitter**

*   **Function:** Prepares the source signal for transmission over the channel. This typically involves several stages:
    *   **Preprocessing/Source Encoding (Optional but common):**
        *   **Purpose:** To reduce redundancy in the source signal, making the transmission more efficient (e.g., data compression). Also, to convert the source into a format suitable for the next stage (e.g., analog-to-digital conversion for digital communication).
        *   **Example:** Huffman coding for text data, Pulse Code Modulation (PCM) for analog voice.
    *   **Channel Encoding (Optional but common):**
        *   **Purpose:** To add redundancy in a controlled manner to protect the information against errors introduced by the channel (e.g., using error-detecting or error-correcting codes).
        *   **Example:** Parity checks, Hamming codes, Convolutional codes.
    *   **Modulation:**
        *   **Purpose:** To adapt the baseband signal (original signal) to the characteristics of the transmission channel. This often involves impressing the information onto a carrier wave.
        *   **Analog Modulation:** Amplitude Modulation (AM), Frequency Modulation (FM), Phase Modulation (PM).
        *   **Digital Modulation:** Amplitude Shift Keying (ASK), Frequency Shift Keying (FSK), Phase Shift Keying (PSK), Quadrature Amplitude Modulation (QAM).
        *   **Reference:** Lathi & Ding (2018) extensively cover various modulation techniques.
    *   **Multiplexing (Optional):**
        *   **Purpose:** To allow multiple signals to share a single communication channel simultaneously.
        *   **Examples:** Time Division Multiplexing (TDM), Frequency Division Multiplexing (FDM), Code Division Multiplexing (CDM).

#### **2.3 Channel**

*   **Function:** The physical medium through which the transmitted signal propagates.
*   **Characteristics:**
    *   **Impairments:** Channels are not perfect. They introduce distortions and noise.
        *   **Noise:** Random, unwanted signals that interfere with the desired signal. Types include thermal noise, atmospheric noise, man-made noise.
        *   **Distortion:** Alteration of the signal's waveform. This can be linear (e.g., frequency-selective fading) or non-linear.
        *   **Attenuation:** Loss of signal power as it travels.
        *   **Bandwidth Limitation:** Channels have a finite range of frequencies they can pass effectively.
    *   **Examples:**
        *   **Wired:** Twisted pair cables, coaxial cables, optical fibers.
        *   **Wireless:** Atmosphere (radio waves), space (satellite communication).
*   **Reference:** Proakis & Salehi (2020) and Kennedy (2017) discuss various channel models and their impact on signal transmission.

#### **2.4 Noise**

*   **Function:** Represents all unwanted disturbances that corrupt the transmitted signal. Noise is an inherent part of any communication system and is a primary concern in system design.
*   **Impact:** Reduces the quality of the received signal and can lead to errors in decoding the information.
*   **Important Point:** The goal of a communication system is to overcome the effects of noise as much as possible.

#### **2.5 Receiver**

*   **Function:** Recovers the original information from the received signal, which has been affected by the channel and noise. This involves stages typically in reverse order to the transmitter:
    *   **Demodulation:**
        *   **Purpose:** To extract the baseband information signal from the modulated carrier wave.
        *   **Example:** Envelope detection for AM, frequency discriminators for FM, matched filtering for digital modulation.
    *   **Channel Decoding (Optional):**
        *   **Purpose:** To correct or detect errors introduced by the channel using the redundancy added during channel encoding.
        *   **Example:** Viterbi algorithm for convolutional codes.
    *   **Source Decoding (Optional):**
        *   **Purpose:** To reconstruct the original source signal from the processed signal, reversing any source encoding performed at the transmitter (e.g., decompression).
        *   **Example:** Huffman decoding.
    *   **Postprocessing:** Converting the recovered signal into a usable format for the destination.

#### **2.6 Destination**

*   **Function:** The intended recipient of the information.
*   **Examples:** A human listener (for audio), a display screen (for video or text), a computer (for data).
*   **Role:** Interprets the output of the receiver.

---

### **3. Analog vs. Digital Communication Systems: A Block Diagram Perspective**

While the general block diagram remains the same, the specific functions within the transmitter and receiver blocks differ significantly:

*   **Analog Communication:**
    *   Information Source is analog.
    *   Transmitter modulates an analog carrier with the analog source signal (e.g., AM, FM).
    *   Channel carries the analog modulated signal.
    *   Receiver demodulates the analog signal.
    *   Destination receives an analog representation of the information.
    *   **Reference:** Haykin & Moher (2020, 2022) and Kennedy (2017) provide in-depth coverage of analog techniques.

*   **Digital Communication:**
    *   Information Source can be analog or digital. If analog, it's first converted to digital (e.g., via ADC).
    *   Transmitter performs source coding, channel coding, and digital modulation (e.g., ASK, PSK, QAM).
    *   Channel carries the digital modulated signal (often represented as pulses or symbols).
    *   Receiver performs digital demodulation and decoding.
    *   Destination receives a digital representation of the information, which may then be converted back to analog if needed.
    *   **Reference:** Proakis & Salehi (2020) and Stark (2023) are excellent resources for digital communication systems.

---

### **4. Importance of Understanding the Block Diagram**

*   **System Design:** Provides a systematic approach to designing communication systems by considering the function of each component.
*   **Problem Analysis:** Helps in troubleshooting and identifying the source of communication issues (e.g., is it the channel, the transmitter, or the receiver?).
*   **Performance Evaluation:** Allows for analysis of system performance in terms of signal-to-noise ratio (SNR), bit error rate (BER), and data throughput.
*   **Foundation for Advanced Topics:** This fundamental block diagram serves as the basis for understanding more complex communication techniques like spread spectrum, error control coding, and multiple access techniques.

---

### **5. Example Scenario: Voice Communication via Radio**

1.  **Information Source:** Your voice (analog signal).
2.  **Transmitter:**
    *   **Microphone:** Converts voice into an electrical analog signal.
    *   **Amplifier/Pre-emphasis (optional):** Boosts the signal.
    *   **Modulator (e.g., FM):** Imprints the audio signal onto a high-frequency carrier wave.
    *   **Power Amplifier:** Increases the power of the modulated signal for transmission.
    *   **Antenna:** Radiates the signal into the atmosphere (channel).
3.  **Channel:** The atmosphere, carrying radio waves. Noise and fading can affect the signal.
4.  **Receiver:**
    *   **Antenna:** Captures the radio waves.
    *   **Tuner/Filter:** Selects the desired frequency and rejects others.
    *   **Amplifier/Low Noise Amplifier (LNA):** Amplifies the weak received signal.
    *   **Demodulator (e.g., FM Discriminator):** Extracts the audio signal from the carrier.
    *   **De-emphasis (optional):** Reverses pre-emphasis.
    *   **Amplifier:** Amplifies the recovered audio signal.
5.  **Destination:** Speaker, converting the electrical audio signal back into sound waves.

---

### **6. Important Points to Remember**

*   The block diagram is a **generalized model** and can be adapted for specific communication systems.
*   **Noise** is a fundamental enemy of communication systems.
*   **Modulation** is crucial for adapting signals to the channel.
*   **Encoding** (source and channel) enhances efficiency and reliability.
*   The **transmitter and receiver perform complementary functions.**
*   Understanding each block's role is essential for analyzing and improving communication system performance.

---

### **Practice Questions and Exercises**

**Question 1:**
List the fundamental blocks of a general communication system in the order of information flow.

**Answer 1:**
Information Source → Transmitter → Channel → Receiver → Destination

**Question 2:**
What is the primary function of the transmitter?

**Answer 2:**
The primary function of the transmitter is to process the source signal and convert it into a form suitable for transmission over the channel. This typically involves modulation, amplification, and preparing the signal for transmission.

**Question 3:**
Name two common impairments introduced by the communication channel.

**Answer 3:**
Two common impairments are noise and distortion. Other valid answers include attenuation and bandwidth limitation.

**Question 4:**
Differentiate between the roles of a source encoder and a channel encoder in the transmitter.

**Answer 4:**
*   **Source Encoder:** Reduces redundancy in the source signal to improve transmission efficiency (e.g., data compression).
*   **Channel Encoder:** Adds controlled redundancy to the signal to protect it against errors introduced by the channel (e.g., error correction codes).

**Question 5:**
In a digital communication system block diagram, what is the role of the Analog-to-Digital Converter (ADC)?

**Answer 5:**
The ADC is used when the information source is analog. It converts the analog source signal into a digital format before it undergoes further processing (like source coding, channel coding, and digital modulation) in the transmitter. This aligns with **CO2**.

**Question 6 (Conceptual - aligns with CO1):**
Consider a simple AM radio system. Sketch its block diagram and briefly describe the function of each block.

**Answer 6:**
(Refer to the example scenario in Section 5, adapted for AM. The blocks would be: Microphone -> Modulator (AM) -> Power Amplifier -> Antenna -> Channel -> Antenna -> Tuner/Demodulator (AM Envelope Detector) -> Audio Amplifier -> Speaker). This illustrates the application of the general block diagram to an analog system, supporting **CO1**.

---

This concludes Module 1, Topic 1. Understanding this fundamental block diagram is crucial for progressing through the course.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
