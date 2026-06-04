---
title: "digital radio systems in 2G, voice and messaging services, TDMA based GSM, CDMA"
subject: "ADVANCED MOBILE COMMUNICATION"
module: "Module 1: Evolution from 1G to 5G"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff0e0"
status: "completed"
scrapedAt: "2026-05-23T18:04:28.854Z"
---
# Advanced Mobile Communication: Module 1 - Evolution from 1G to 5G

## Topic: Digital Radio Systems in 2G, Voice and Messaging Services, TDMA based GSM, CDMA

This module focuses on understanding the foundational advancements that led to modern mobile communication, specifically exploring the transition to digital technologies in the second generation (2G) and the key systems that defined it.

---

### **1. The Shift to Digital: Why 2G?**

**Learning Outcome:** CO1: Illustrate the evolution from 1G to 5G

**Key Concepts:**

*   **1G Limitations:**
    *   **Analog Technology:** Primarily used analog modulation.
    *   **Voice Only:** Limited to voice calls.
    *   **Poor Voice Quality:** Susceptible to noise and interference.
    *   **Low Capacity:** Inefficient use of spectrum.
    *   **No Security:** No encryption, easily intercepted.
    *   **Large and Bulky Devices:** Early mobile phones were cumbersome.
*   **2G as a Revolution:** Marked the widespread adoption of digital technology, bringing significant improvements.
*   **Digital Advantages:**
    *   **Improved Voice Quality:** Error correction and digital signal processing lead to clearer calls.
    *   **Increased Capacity:** Digital modulation and multiple access techniques allow more users per cell.
    *   **Enhanced Security:** Encryption of voice and data.
    *   **New Services:** Introduction of data services (SMS, basic internet).
    *   **Smaller Devices:** Miniaturization of mobile phones.

**Important Points to Remember:**

*   2G was the first generation to successfully transition from analog to digital mobile communication.
*   The primary driver for 2G was the need for improved voice quality, capacity, and the introduction of new services.

---

### **2. 2G Voice and Messaging Services**

**Learning Outcome:** CO1: Illustrate the evolution from 1G to 5G

**Key Concepts:**

*   **Voice Services:**
    *   **Digital Voice Encoding:** Voice is digitized and compressed (e.g., using codecs like Regular Pulse Excitation – Linear Predictive Coding (RPE-LPC) in GSM).
    *   **Circuit Switching:** Similar to traditional telephony, a dedicated channel is established for the duration of a call.
*   **Messaging Services:**
    *   **Short Message Service (SMS):** A revolutionary feature of 2G.
        *   **Asynchronous Communication:** Messages can be sent and received independently of a live call.
        *   **Text-Based:** Limited character length (typically 160 characters per message).
        *   **Store-and-Forward:** Messages are stored by the network and delivered when the recipient's phone is available.
    *   **Enhanced Data Rates for GSM Evolution (EDGE) / General Packet Radio Service (GPRS):** While often considered a 2.5G technology, GPRS laid the groundwork for packet-switched data services, enabling basic internet access and MMS (Multimedia Messaging Service).

**Examples:**

*   **SMS:** Sending a text message to a friend to arrange a meeting.
*   **Voice Calls:** Experiencing clearer voice quality compared to 1G phones.

**Textbook Reference:** Dahlman, Skold, & Parkvall (2016) discusses the foundational principles of digital voice transmission and the emergence of data services in early cellular generations.

**Important Points to Remember:**

*   SMS was a killer application for 2G, transforming communication.
*   2G introduced the concept of packet-switched data, albeit in a limited form initially.

---

### **3. TDMA-Based GSM (Global System for Mobile Communications)**

**Learning Outcome:** CO1: Illustrate the evolution from 1G to 5G

**Key Concepts:**

*   **TDMA (Time Division Multiple Access):**
    *   **How it works:** Divides a radio channel into time slots. Each user is allocated a specific time slot to transmit or receive.
    *   **Frequency Reuse:** The same radio frequencies can be reused in different geographical areas (cells) that are sufficiently far apart, increasing overall capacity.
*   **GSM System Architecture:**
    *   **Mobile Station (MS):** The mobile phone itself.
    *   **Base Station Subsystem (BSS):**
        *   **Base Transceiver Station (BTS):** Manages the radio interface with the MS. It contains radio transceivers and antennas.
        *   **Base Station Controller (BSC):** Controls multiple BTSs, manages radio resources, and handles handover between BTSs.
    *   **Network and Switching Subsystem (NSS):**
        *   **Mobile Switching Center (MSC):** The core switching entity, responsible for call routing, mobility management, and interworking with other networks.
        *   **Home Location Register (HLR):** A central database containing subscriber information, authentication keys, and current location.
        *   **Visitor Location Register (VLR):** A temporary database for subscribers currently in the MSC's service area.
        *   **Authentication Center (AuC):** Provides authentication parameters to verify the identity of the subscriber.
        *   **Equipment Identity Register (EIR):** Stores IMEI numbers to identify and block stolen phones.
*   **GSM Channel Structure:**
    *   **Physical Channels:** A carrier frequency divided into time slots.
    *   **Logical Channels:**
        *   **Traffic Channels (TCH):** Used for carrying voice or data.
        *   **Control Channels:** Used for signaling, management, and control functions (e.g., broadcast control channel, paging channel, random access channel).
*   **GSM Modulation:** Gaussian Minimum Shift Keying (GMSK).
*   **GSM Multiple Access:** Combines Frequency Division Multiple Access (FDMA) and TDMA. A wide band is divided into frequency channels, and each frequency channel is further divided into time slots.

**Examples:**

*   A user making a voice call in a GSM network. The call is digitized, encoded, and transmitted in specific time slots on a particular frequency.

**Dahlman, Skold, & Parkvall (2016) Contribution:** This textbook provides detailed insights into TDMA and FDMA as fundamental multiple access techniques used in cellular systems, including their application in GSM.

**Important Points to Remember:**

*   GSM's success was largely due to its standardized digital nature, TDMA/FDMA combination, and the introduction of SMS.
*   The GSM architecture is modular and robust, laying the groundwork for future network evolution.

---

### **4. CDMA (Code Division Multiple Access)**

**Learning Outcome:** CO1: Illustrate the evolution from 1G to 5G

**Key Concepts:**

*   **CDMA Principle:**
    *   **Spreading Spectrum:** Instead of dividing the channel by time or frequency, CDMA uses unique digital codes to differentiate users.
    *   **All Users Share the Same Frequency and Time:** Users transmit simultaneously on the same frequency band.
    *   **Pseudo-Noise (PN) Codes:** Each user's signal is multiplied by a unique PN code (spreading code), which spreads the signal over a much wider bandwidth.
    *   **Despreading:** At the receiver, the signal is multiplied by the same PN code to recover the original signal, while other users' signals, spread by different codes, appear as low-level noise.
*   **Advantages of CDMA:**
    *   **Higher Capacity:** More efficient use of spectrum compared to TDMA in certain scenarios.
    *   **Softer Handoff:** As a phone moves between cells, it can maintain simultaneous connections with multiple base stations, leading to smoother handovers.
    *   **Privacy:** Difficult to intercept without the correct code.
    *   **Reduced Interference:** Due to the nature of spreading and despreading.
*   **Disadvantages of CDMA:**
    *   **Near-Far Problem:** A strong signal from a nearby transmitter can overpower a weaker signal from a distant transmitter if not properly managed by power control.
    *   **Complexity:** Requires sophisticated signal processing and precise power control.
*   **CDMA Systems:**
    *   **IS-95 (cdmaOne):** The first widely deployed CDMA-based digital cellular system.
    *   **Wideband Code Division Multiple Access (WCDMA):** A key air interface for 3G networks, building upon the principles of CDMA.
*   **CDMA Channel Structure:**
    *   **Forward Channel (Base Station to Mobile):** Uses a pilot channel, sync channel, paging channels, and traffic channels.
    *   **Reverse Channel (Mobile to Base Station):** Uses access channels and traffic channels.
*   **CDMA Modulation:** Typically uses Quadrature Phase-Shift Keying (QPSK) or Binary Phase-Shift Keying (BPSK) in conjunction with the spreading codes.

**Examples:**

*   Imagine a room where multiple people are talking. In TDMA, each person speaks one after another. In CDMA, everyone talks at the same time, but each person uses a different language (code). Your brain can focus on understanding the person speaking your language while other languages are just background noise.

**Dahlman, Skold, & Parkvall (2016) Contribution:** This textbook dedicates significant sections to explaining the principles of CDMA, its advantages, disadvantages, and its evolution into technologies like WCDMA for 3G.

**Important Points to Remember:**

*   CDMA allows multiple users to share the same frequency band simultaneously by using unique spreading codes.
*   Effective power control is crucial in CDMA systems to mitigate the near-far problem.

---

### **5. Evolution to 3G and Beyond (Brief Context)**

**Learning Outcome:** CO1: Illustrate the evolution from 1G to 5G

**Key Concepts:**

*   **3G (Third Generation):**
    *   **Focus:** Higher data rates for mobile internet access, video calls, and richer multimedia services.
    *   **Key Technologies:** WCDMA (based on CDMA), CDMA2000.
*   **4G (Fourth Generation) / LTE (Long-Term Evolution):**
    *   **Focus:** All-IP networks, significantly higher data speeds, lower latency.
    *   **Key Technologies:** OFDMA (Orthogonal Frequency Division Multiple Access), SC-FDMA (Single Carrier Frequency Division Multiple Access).
*   **5G (Fifth Generation):**
    *   **Focus:** Enhanced Mobile Broadband (eMBB), Ultra-Reliable Low-Latency Communications (URLLC), Massive Machine Type Communications (mMTC).
    *   **Key Technologies:** New Radio (NR), advanced MIMO, network slicing, AI/ML integration.

**Ahmadi (2019) and Cox (2020) Relevance:** While this module focuses on 2G, understanding the trajectory towards 3G, 4G, and 5G provides the necessary context for appreciating the impact of 2G advancements and the continuous drive for innovation. These books will detail the technologies and architectures of later generations.

**Important Points to Remember:**

*   Each generation builds upon the innovations of the previous ones, driven by increasing demand for speed, capacity, and new services.
*   The move from circuit-switched to packet-switched networks is a recurring theme in this evolution.

---

### **Practice Questions & Exercises**

**Question 1:**
What were the primary limitations of 1G systems that necessitated the development of 2G? (K2)

**Answer:**
The primary limitations of 1G systems were: analog technology leading to poor voice quality, limited to voice services only, low capacity, lack of security, and bulky devices.

---

**Question 2:**
Explain the core principle of TDMA as used in GSM. (K2)

**Answer:**
TDMA divides a radio channel into multiple time slots. Each user is allocated a specific time slot to transmit and receive, allowing multiple users to share the same frequency channel sequentially.

---

**Question 3:**
Describe the "near-far problem" in CDMA systems. (K2)

**Answer:**
The near-far problem occurs when a mobile unit close to a base station transmits at a much higher power level than a mobile unit farther away. If not properly managed, the strong signal from the nearby unit can overwhelm the weaker signal from the distant unit at the base station, causing interference and potentially dropping the call for the distant user. This requires sophisticated power control mechanisms.

---

**Question 4:**
List at least three key services introduced or significantly improved in 2G systems compared to 1G. (K2)

**Answer:**
1.  Digital voice calls (improved quality)
2.  Short Message Service (SMS)
3.  Basic data services (e.g., GPRS for internet access, though often considered 2.5G)

---

**Question 5:**
Compare and contrast TDMA and CDMA in terms of how they manage multiple users sharing a common communication channel. (K2)

**Answer:**
*   **TDMA:** Divides users by **time**. Users share the same frequency but transmit/receive in different, assigned time slots.
*   **CDMA:** Divides users by **code**. Users share the same frequency and transmit/receive simultaneously, but their signals are differentiated by unique spreading codes.

---

### **Summary & Key Takeaways**

*   **2G Revolution:** The transition from analog (1G) to digital (2G) was a fundamental shift, bringing significant improvements in voice quality, capacity, security, and enabling new services like SMS.
*   **GSM:** A dominant TDMA-based system that standardized digital mobile communication and became a global standard. Its architecture was robust and paved the way for future generations.
*   **CDMA:** An alternative multiple access technique that uses spreading codes to allow simultaneous transmission on the same frequency band. It offered advantages in capacity and handoff but required advanced power control.
*   **Foundation for the Future:** The technologies and concepts introduced in 2G, such as digital processing and data services, were crucial stepping stones for the development of 3G, 4G, and eventually 5G.

This module provides the historical context and technical underpinnings that are essential for understanding the more advanced mobile communication systems discussed later in the course.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
