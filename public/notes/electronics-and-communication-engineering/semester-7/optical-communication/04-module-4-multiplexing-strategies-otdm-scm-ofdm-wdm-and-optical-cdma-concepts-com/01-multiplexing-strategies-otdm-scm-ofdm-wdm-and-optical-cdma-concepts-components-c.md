---
title: "Multiplexing Strategies: OTDM, SCM, OFDM, WDM and Optical CDMA: concepts, components - couplers, splitters, Add/ Drop multiplexers, Fiber grating filters, tunable filters."
subject: "OPTICAL COMMUNICATION"
module: "Module 4: Multiplexing Strategies: OTDM, SCM, OFDM, WDM and Optical CDMA: concepts, components "
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff4d7"
status: "completed"
scrapedAt: "2026-05-23T18:08:28.374Z"
---
# OPTICAL COMMUNICATION: Module 4 - Multiplexing Strategies

## Introduction to Multiplexing in Optical Communication

Multiplexing is a crucial technique in optical communication that allows multiple optical signals to share a single optical fiber. This significantly enhances the capacity and efficiency of fiber optic communication systems. This module will delve into various multiplexing strategies, including Optical Time Division Multiplexing (OTDM), Subcarrier Multiplexing (SCM), Orthogonal Frequency Division Multiplexing (OFDM), Wavelength Division Multiplexing (WDM), and Optical Code Division Multiple Access (OCDMA). We will also explore essential optical components used in these systems.

---

## 1. Wavelength Division Multiplexing (WDM)

WDM is a technique that transmits multiple optical signals simultaneously over a single optical fiber, each on a different wavelength (color) of light.

### 1.1. Concepts

*   **Principle:** WDM leverages the fact that optical fibers can support multiple wavelengths of light with minimal crosstalk. By assigning a unique wavelength to each data stream, many independent communication channels can be carried on a single fiber.
*   **Types of WDM:**
    *   **Dense WDM (DWDM):** Channels are closely spaced, typically 0.8 nm or less (around 100 GHz frequency spacing). This allows for a very large number of channels on a single fiber.
    *   **Coarse WDM (CWDM):** Channels are more widely spaced, typically 20 nm or more (around 10-20 THz frequency spacing). This is generally less expensive to implement than DWDM.
*   **Advantages:**
    *   **Increased Capacity:** Significantly boosts the data-carrying capacity of existing fiber infrastructure.
    *   **Flexibility:** New channels can be added without laying new fiber.
    *   **Service Independence:** Different wavelengths can carry different types of services (e.g., IP data, video, voice).
*   **Disadvantages:**
    *   **Cost:** Initial implementation can be expensive due to the need for specialized components like lasers and filters.
    *   **Crosstalk:** Close channel spacing in DWDM can lead to inter-channel interference.
    *   **Chromatic Dispersion:** Different wavelengths travel at slightly different speeds, which can cause signal distortion over long distances.
*   **Key Components:**
    *   **Wavelength Selective Switch (WSS):** A component that can route different wavelengths to different output ports, essential for dynamic WDM network management. (Refer to Keiser, Chapter 7).
    *   **Optical Add/Drop Multiplexer (OADM):** Allows specific wavelengths to be dropped from or added to an optical fiber without disrupting other wavelengths. (Discussed in Section 5).
    *   **Fiber Grating Filters:** Used to separate or combine different wavelengths. (Discussed in Section 6).
    *   **Tunable Filters:** Used to select specific wavelengths. (Discussed in Section 7).
    *   **Multiplexers (Mux) and Demultiplexers (Demux):** Optical devices that combine multiple wavelengths into a single fiber (Mux) and separate them at the receiver end (Demux). These are typically based on beam splitters, prisms, or gratings.

### 1.2. Examples

Imagine sending 40 different TV channels, each on a slightly different color of light, through a single fiber. At the receiving end, a demultiplexer separates these colors, and a receiver tunes into the desired channel by selecting the appropriate color.

---

## 2. Optical Time Division Multiplexing (OTDM)

OTDM multiplexes multiple low-speed data streams into a single high-speed data stream by assigning each stream a specific time slot within a repeating time frame.

### 2.1. Concepts

*   **Principle:** Data from different channels is transmitted in very short, distinct time slots. These time slots are interleaved to form a high-speed aggregate data stream. At the receiver, the data is demultiplexed based on the timing of these slots.
*   **Key Features:**
    *   **High Speed:** Allows for extremely high aggregate bit rates (e.g., 100 Gbps, 400 Gbps, 1 Tbps).
    *   **Synchronization:** Requires precise timing synchronization between the transmitter and receiver to ensure correct time slot allocation and retrieval.
    *   **Electro-Optic Conversion:** Typically involves converting optical data to electrical signals for manipulation (time slotting) and then back to optical signals.
*   **Advantages:**
    *   **High Spectral Efficiency:** Utilizes the entire bandwidth of the fiber efficiently.
    *   **Simpler Components (in principle):** Can be implemented with fewer optical components compared to some WDM schemes, as it doesn't inherently require multiple lasers.
*   **Disadvantages:**
    *   **Complexity of Synchronization:** Achieving and maintaining precise timing synchronization for high-speed data streams is challenging.
    *   **Data Format Dependence:** Requires data to be synchronized and formatted into fixed-length packets or time slots.
    *   **High-Speed Electronics:** Demands high-speed electronic components for switching and processing.
*   **Key Components:**
    *   **Synchronizers:** Ensure that data from different channels is aligned for proper time slotting.
    *   **Time Slot Interleavers/Deinterleavers:** Electronic circuits that rearrange the data bits into their respective time slots.
    *   **Fast Optical Switches:** Used to steer the optical data pulses into their assigned time slots. (Refer to Keiser, Chapter 7).

### 2.2. Examples

Imagine a digital clock where each second is divided into 10 milliseconds. Four people are talking, and each person gets 1 millisecond to speak every 10 milliseconds. The listener hears a continuous stream of speech, and by knowing the timing, can distinguish who is speaking when. In OTDM, data bits are the "words" and time slots are the "speaking times."

---

## 3. Subcarrier Multiplexing (SCM)

SCM multiplexes multiple data streams onto different electrical subcarrier frequencies, which are then modulated onto an optical carrier.

### 3.1. Concepts

*   **Principle:** Each electrical data signal is modulated onto a different electrical radio frequency (RF) subcarrier. These modulated subcarriers are then combined and used to modulate an optical carrier, which is transmitted over the fiber. At the receiver, the optical signal is converted back to electrical, and the individual subcarriers are separated using RF filters and demodulated.
*   **Advantages:**
    *   **Compatibility with Existing RF Technologies:** Can leverage existing RF modulation and demodulation techniques.
    *   **Simpler Electronic Components:** Can use less complex and potentially cheaper electronics compared to high-speed OTDM.
    *   **Mixed Services:** Can carry both analog and digital signals simultaneously.
*   **Disadvantages:**
    *   **Limited Bandwidth:** The total bandwidth is limited by the optical transmitter's modulation bandwidth and the fiber's attenuation characteristics at higher frequencies.
    *   **Intermodulation Distortion:** Non-linearities in the optical modulator and laser can cause unwanted signals (intermodulation products) that interfere with adjacent channels.
    *   **RF Noise:** RF noise can impact signal quality.
*   **Key Components:**
    *   **RF Modulators:** For modulating data onto subcarrier frequencies.
    *   **Electrical Mixers:** To combine modulated subcarriers.
    *   **Optical Modulator:** To modulate the combined electrical signal onto the optical carrier.
    *   **RF Filters:** At the receiver to separate individual subcarriers.
    *   **Demodulators:** To extract data from each subcarrier.

### 3.2. Examples

Think of a cable TV system. Each TV channel is assigned a different RF frequency. All these RF signals are combined and transmitted over a single coaxial cable. In SCM for optical communication, instead of a coaxial cable, an optical fiber is used, and the "channels" are data streams modulated onto RF subcarriers.

---

## 4. Orthogonal Frequency Division Multiplexing (OFDM)

OFDM is a digital modulation scheme that divides a high-speed data stream into multiple low-speed data streams, which are then transmitted simultaneously on closely spaced orthogonal subcarriers.

### 4.1. Concepts

*   **Principle:** OFDM converts a serial high-speed data stream into multiple parallel low-speed data streams. Each low-speed stream is then modulated onto a separate subcarrier frequency. The key is that these subcarriers are *orthogonal*, meaning their spectral characteristics do not interfere with each other. This orthogonality is achieved by making the subcarrier spacing the reciprocal of the symbol duration.
*   **Key Features:**
    *   **Orthogonality:** Ensures that subcarriers are uncorrelated, minimizing inter-channel interference. This is often achieved using the Fast Fourier Transform (FFT) algorithm.
    *   **Robustness to Multipath Fading:** By using many narrow subcarriers, OFDM is less susceptible to frequency-selective fading compared to single-carrier systems.
    *   **Cyclic Prefix (CP):** A portion of the end of each OFDM symbol is appended to the beginning. This helps to eliminate inter-symbol interference (ISI) caused by multipath propagation.
*   **Advantages:**
    *   **High Spectral Efficiency:** Achieves high data rates within a given bandwidth.
    *   **Robustness:** Highly resistant to multipath interference and dispersion.
    *   **Simplified Equalization:** The use of orthogonal subcarriers simplifies the equalization process.
*   **Disadvantages:**
    *   **High Peak-to-Average Power Ratio (PAPR):** Requires linear amplifiers to avoid distortion.
    *   **Sensitivity to Frequency Offset:** Requires precise frequency synchronization.
    *   **High Computational Complexity:** FFT and IFFT operations require significant processing power.
*   **Key Components:**
    *   **Serial-to-Parallel Converter:** To split the data stream.
    *   **Modulators (e.g., QAM, PSK):** To modulate data onto subcarriers.
    *   **Inverse Fast Fourier Transform (IFFT):** To create the time-domain OFDM signal.
    *   **Cyclic Prefix Insertion:** To add the CP.
    *   **Digital-to-Analog Converter (DAC) and Optical Modulator:** To convert the digital signal to an optical signal.
    *   **Optical Demodulator, Analog-to-Digital Converter (ADC), FFT, and Demodulators:** At the receiver.

### 4.2. Examples

Imagine a large lecture hall. Instead of one person speaking very loudly, you have many people speaking at the same time, each on a slightly different "pitch" (subcarrier frequency). If their pitches are carefully chosen (orthogonal), the listener can still understand each person individually. In OFDM, the "pitches" are the subcarrier frequencies, and the "people speaking" are the data bits.

---

## 5. Optical Code Division Multiple Access (OCDMA)

OCDMA allows multiple users to share the same optical fiber simultaneously by assigning each user a unique spreading code.

### 5.1. Concepts

*   **Principle:** Data is spread across a wider frequency or time band using a unique spreading code (e.g., a pseudo-random sequence or a prime sequence). Users' signals are orthogonalized by their codes. At the receiver, a decoder matched to a specific user's code can retrieve that user's data while suppressing other users' signals.
*   **Types of OCDMA:**
    *   **Direct Sequence OCDMA (DS-OCDMA):** Data bits are multiplied by a spreading code.
    *   **Time Hopping OCDMA (TH-OCDMA):** Data is transmitted in short pulses at times determined by a hopping sequence.
    *   **Hybrid OCDMA:** Combines aspects of DS and TH OCDMA.
*   **Advantages:**
    *   **Simultaneous Access:** Multiple users can access the network at the same time and on the same wavelength.
    *   **Security:** The unique codes provide a degree of inherent security.
    *   **Flexible Bandwidth Allocation:** Bandwidth can be allocated dynamically.
*   **Disadvantages:**
    *   **Processing Gain Limitation:** The processing gain (ratio of spreading bandwidth to data bandwidth) limits the number of users and can lead to performance degradation due to code cross-correlation.
    *   **Complex Receivers:** Requires sophisticated correlators and matched filters.
    *   **Power Control:** Strict power control is needed to manage interference.
*   **Key Components:**
    *   **Code Generators:** To generate the unique spreading codes.
    *   **Spreaders/Despreaders (Correlators):** To encode and decode the data. These are often implemented using optical techniques like Fiber Bragg Gratings or Acousto-Optic Tunable Filters (AOTFs).
    *   **Optical Delay Lines:** Used in some OCDMA implementations to create delays for code spreading.

### 5.2. Examples

Imagine a busy party where everyone is talking. If everyone spoke in English, it would be chaotic. However, if some people spoke English, some spoke Spanish, and others spoke French, and you only understood English, you could tune out the other languages and still hear the English conversation. In OCDMA, the "languages" are the unique spreading codes.

---

## 6. Essential Optical Components for Multiplexing Strategies

These components are vital for implementing and managing the multiplexing strategies discussed above.

### 6.1. Couplers and Splitters

*   **Concept:**
    *   **Coupler:** A passive optical device that splits an incoming optical signal into two or more output signals or combines multiple input signals into a single output signal. The power is divided between the outputs.
    *   **Splitter:** A type of coupler that divides the input power in a specific ratio (e.g., 1x2, 1x4, 1x8). A 50/50 splitter divides the power equally.
*   **Principle of Operation:** Often fabricated by fusing or grinding fibers together and tapering them. The evanescent field of the light in one fiber couples to the adjacent fiber.
*   **Applications:**
    *   **WDM:** Combining multiple wavelengths at the transmitter and separating them at the receiver (as demultiplexers).
    *   **Monitoring:** Splitting a small portion of the signal for monitoring power levels.
    *   **Signal Distribution:** Distributing a signal to multiple receivers.
*   **Textbook Reference:** Keiser, Chapter 6; Senior, Chapter 4.
*   **Example:** A 1x2 fused fiber coupler can take one input fiber and split the light into two output fibers, with each output receiving half the power (a 3dB coupler).

### 6.2. Add/Drop Multiplexers (OADMs)

*   **Concept:** An optical device that allows specific wavelengths (channels) to be selectively added to or dropped from an optical fiber carrying multiple WDM channels, without affecting the other channels.
*   **Principle of Operation:** Typically uses a combination of wavelength filters and optical switches or gratings. A dropped channel is diverted from the main fiber, and an added channel is inserted into the main fiber.
*   **Applications:**
    *   **WDM Network Management:** Crucial for flexibility in WDM networks, allowing traffic to be inserted or extracted at intermediate nodes.
    *   **Ring Networks:** Essential for adding or dropping traffic in optical ring topologies.
*   **Textbook Reference:** Keiser, Chapter 7; Agrawal, Chapter 9.
*   **Example:** In a DWDM network, an OADM at a particular city can drop the wavelength carrying traffic for that city and add the wavelengths for traffic originating from that city.

### 6.3. Fiber Grating Filters (Fiber Bragg Gratings - FBGs)

*   **Concept:** A section of optical fiber where the refractive index has been periodically modulated. This causes light at a specific wavelength (the Bragg wavelength) to be reflected, while other wavelengths are transmitted.
*   **Principle of Operation:** Based on Bragg reflection. The periodic change in refractive index acts like a mirror for a specific wavelength, determined by the grating period and the refractive index modulation.
*   **Applications:**
    *   **WDM Multiplexing/Demultiplexing:** Can be cascaded to create filters for separating or combining many wavelengths.
    *   **Optical CDMA:** Used in optical code generation and filtering.
    *   **Optical Equalization:** Compensating for dispersion.
    *   **Laser Stabilization:** Defining the operating wavelength of lasers.
*   **Textbook Reference:** Keiser, Chapter 7; Senior, Chapter 10; Palais, Chapter 7.
*   **Example:** A Fiber Bragg Grating designed to reflect 1550 nm light while transmitting all other wavelengths. By creating gratings with slightly different Bragg wavelengths, a series of channels can be separated.

### 6.4. Tunable Filters

*   **Concept:** An optical filter whose transmission wavelength can be adjusted electronically or mechanically.
*   **Principle of Operation:** Various physical mechanisms can be used, including:
    *   **Acousto-Optic Tunable Filters (AOTFs):** Use an acoustic wave propagating through a crystal to change the refractive index, thereby shifting the filtered wavelength.
    *   **Electro-Optic Tunable Filters:** Utilize the electro-optic effect in materials to change the refractive index.
    *   **Fabry-Perot Filters:** Mechanical or electro-mechanical tuning of the cavity length.
    *   **Tunable Fiber Bragg Gratings:** Mechanically stretching or heating FBGs to shift the Bragg wavelength.
*   **Applications:**
    *   **WDM System Monitoring:** Selecting and measuring the power of individual channels.
    *   **Dynamic WDM Networks:** Reconfiguring network paths by tuning filters.
    *   **OCDMA:** Tuning correlators to specific wavelengths or codes.
    *   **Spectrum Analysis:** Scanning across a range of wavelengths.
*   **Textbook Reference:** Keiser, Chapter 7; Senior, Chapter 10.
*   **Example:** A tunable Fabry-Perot filter can be used to select one specific wavelength from a DWDM stream by precisely adjusting the distance between its mirrors.

---

## 7. Course Outcomes Alignment

This module directly addresses **CO4: Describe the concepts of Multiplexing, Optical Networks and Free Space Communication**. Specifically:

*   **Concepts of Multiplexing:** This module provides in-depth coverage of WDM, OTDM, SCM, OFDM, and OCDMA, detailing their concepts and underlying principles. (Knowledge Level: K2)
*   **Optical Networks:** Understanding multiplexing strategies is fundamental to designing and operating efficient optical networks. Concepts like OADMs are directly related to network topology and management. (Knowledge Level: K2)

While not explicitly covering Free Space Communication, the understanding of optical signals and components developed here is transferable.

---

## 8. Key Points to Remember

*   Multiplexing is essential for increasing the capacity of optical fibers.
*   WDM uses different wavelengths to carry signals simultaneously. DWDM has closely spaced channels, while CWDM has wider spacing.
*   OTDM interleaves data from different sources in time slots. It requires precise synchronization.
*   SCM modulates data onto RF subcarriers before optical modulation.
*   OFDM uses orthogonal subcarriers for robust and efficient data transmission, often employing FFT.
*   OCDMA uses unique codes to allow multiple users to share the same fiber.
*   Couplers/splitters are fundamental passive devices for signal division/combination.
*   OADMs are crucial for selective addition/dropping of WDM channels in networks.
*   Fiber Bragg Gratings (FBGs) are key wavelength-selective components.
*   Tunable filters allow for dynamic selection and monitoring of wavelengths.

---

## 9. Practice Questions

**Question 1 (Multiple Choice):**
Which multiplexing technique divides a high-speed data stream into multiple low-speed streams transmitted on orthogonal subcarriers?
A) OTDM
B) WDM
C) SCM
D) OFDM

**Question 2 (Short Answer):**
Explain the primary difference between DWDM and CWDM.

**Question 3 (Conceptual):**
Describe how a Fiber Bragg Grating (FBG) works and its role in WDM systems.

**Question 4 (Application):**
Imagine you need to add a new data service into an existing DWDM fiber link carrying 40 channels. Which optical component would be essential for this task without disrupting the existing channels? Explain why.

**Question 5 (Comparison):**
Compare and contrast OTDM and WDM in terms of their fundamental principles and the primary challenges in their implementation.

---

## 10. Answers to Practice Questions

**Answer 1:**
D) OFDM

**Answer 2:**
The primary difference between DWDM (Dense Wavelength Division Multiplexing) and CWDM (Coarse Wavelength Division Multiplexing) lies in the spacing between their optical channels. DWDM uses very closely spaced channels (typically 0.8 nm or less, ~100 GHz spacing), allowing for a very large number of channels on a single fiber. CWDM uses more widely spaced channels (typically 20 nm or more, ~10-20 THz spacing), which makes it less expensive to implement but supports fewer channels.

**Answer 3:**
A Fiber Bragg Grating (FBG) is a section of optical fiber with a periodic variation in its refractive index. This periodic structure acts as a wavelength-selective mirror. When broadband light enters the FBG, light at a specific wavelength, known as the Bragg wavelength (determined by the grating period and refractive index modulation), is strongly reflected back. All other wavelengths pass through largely unaffected. In WDM systems, FBGs are used to either combine multiple wavelengths into a single fiber (as multiplexers) or separate them (as demultiplexers) by selecting or reflecting specific wavelengths.

**Answer 4:**
An **Optical Add/Drop Multiplexer (OADM)** would be essential.
**Explanation:** An OADM is specifically designed to allow individual wavelengths (channels) to be selectively dropped from and/or added to a WDM signal without affecting the other wavelengths present in the fiber. In this scenario, the OADM would be configured to "drop" a specific wavelength where no traffic exists and "add" the new data service onto that same wavelength, seamlessly integrating it into the existing DWDM link.

**Answer 5:**
*   **Fundamental Principles:**
    *   **WDM:** Carries multiple signals simultaneously over a single fiber by assigning each signal to a different wavelength (color) of light.
    *   **OTDM:** Interleaves time-slotted data from multiple low-speed channels into a single high-speed data stream, transmitted over the fiber using pulses.

*   **Primary Challenges:**
    *   **WDM:**
        *   Requires multiple lasers, each tuned to a specific wavelength.
        *   Managing closely spaced channels in DWDM to avoid crosstalk.
        *   Chromatic Dispersion can be a significant issue, especially in DWDM over long distances.
        *   Requires precise filters for demultiplexing.
    *   **OTDM:**
        *   Achieving and maintaining very precise timing synchronization between transmitters and receivers for the short time slots.
        *   Requires high-speed electronic components for switching and processing data into time slots.
        *   Data format and clock recovery at high bit rates.

---

This concludes the study notes for Module 4 on Multiplexing Strategies. Remember to refer to the listed textbooks and reference books for more detailed explanations and diagrams.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
