---
title: "Physical layer"
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 1: Wireless LAN "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb72"
status: "completed"
scrapedAt: "2026-05-20T16:57:48.915Z"
---
# Wireless & Mobile Computing: Module 1 - Wireless LAN: Physical Layer

## Introduction

This module focuses on the Physical Layer (PHY) of Wireless LANs (WLANs), specifically within the context of IEEE 802.11 standards. Understanding the PHY layer is crucial for comprehending how wireless signals are transmitted and received, impacting performance factors such as data rate, range, and reliability.

## Learning Outcomes

Upon completion of this module, you should be able to:

*   **LO1: Explain the fundamental concepts of the physical layer in wireless communication.**
*   **LO2: Describe different frequency bands and their regulatory constraints in WLANs.**
*   **LO3: Analyze various modulation techniques used in WLANs (e.g., DSSS, OFDM).**
*   **LO4: Explain channel access mechanisms and their impact on performance.**
*   **LO5: Identify and explain factors affecting signal propagation in wireless environments (e.g., path loss, fading, interference).**
*   **LO6: Outline the different IEEE 802.11 physical layer standards (e.g., 802.11a, 802.11b, 802.11g, 802.11n, 802.11ac, 802.11ax).**

## 1. Fundamental Concepts of the Physical Layer (LO1)

*   **Definition:** The physical layer is the *lowest* layer in the OSI model. It defines the physical characteristics of the network, including:
    *   **Data encoding:** Converting digital data into signals suitable for transmission.
    *   **Signal transmission:** Transmitting and receiving signals over a communication channel (in this case, radio waves).
    *   **Modulation techniques:** Encoding data onto a carrier signal.
    *   **Frequency bands:** Operating frequencies used for communication.
    *   **Power levels:** Transmission power levels.
    *   **Channel access methods:** How devices share the wireless medium.

*   **Key Functions:**
    *   **Encoding/Decoding:** Converting digital data into analog signals (modulation) and vice-versa (demodulation).
    *   **Synchronization:** Ensuring the transmitter and receiver are synchronized for proper data recovery.
    *   **Carrier Sensing:** Detecting the presence of other transmissions before initiating a transmission to avoid collisions.
    *   **Error Detection:** Implementing mechanisms to detect errors introduced during transmission (e.g., using Cyclic Redundancy Checks - CRC).

*   **Example:** Imagine you want to send the letter "A" wirelessly.
    1.  The PHY layer *encodes* "A" (represented in binary as, say, 01000001) into a specific electrical signal (e.g., modulating a sine wave).
    2.  This modulated signal is *transmitted* over the air at a specific frequency and power.
    3.  The receiver *detects* the signal, *demodulates* it back into the binary representation of "A", and verifies its integrity.

## 2. Frequency Bands and Regulatory Constraints (LO2)

*   **Common WLAN Frequency Bands:**
    *   **2.4 GHz:**  Widely used, but crowded due to other devices (e.g., Bluetooth, microwaves).
        *   Channels: 1-13 (in many regions), each with a width of 22 MHz, but often overlapping.
    *   **5 GHz:** Less congested, provides more channels and potentially higher data rates.
        *   Channels: More diverse and often non-overlapping, offering better performance.
    *   **6 GHz (Wi-Fi 6E):** Newest band, even less congested and allows for wider channels.

*   **Regulatory Bodies:**
    *   **FCC (Federal Communications Commission - USA):** Regulates radio spectrum usage in the United States.
    *   **ETSI (European Telecommunications Standards Institute - Europe):** Regulates in Europe.
    *   **Other regional bodies:** Each country or region has its own regulations.

*   **Regulatory Constraints:**
    *   **Maximum Transmit Power:** Limits the signal strength to prevent interference with other devices and ensure safety.
    *   **Channel Allocation:** Specifies which channels can be used in a particular region.
    *   **Out-of-Band Emissions:** Limits the amount of power that can be emitted outside of the allocated frequency band.
    *   **Dynamic Frequency Selection (DFS):**  Required in the 5 GHz band to avoid interfering with radar systems.  WLAN devices must detect radar signals and vacate the channel.

*   **Example:** In the USA, the 2.4 GHz band is commonly used.  The FCC regulates the maximum transmit power for 802.11 devices in this band to 1 Watt (30 dBm).  Exceeding this limit can result in fines or other penalties.  Furthermore, certain channels might be restricted based on the location.

## 3. Modulation Techniques in WLANs (LO3)

*   **Modulation:** The process of encoding data onto a carrier signal by varying its amplitude, frequency, or phase.

*   **Key Modulation Techniques:**

    *   **DSSS (Direct Sequence Spread Spectrum):**
        *   Used in 802.11 and 802.11b.
        *   Spreads the signal over a wider bandwidth, making it more resistant to interference.
        *   **Advantages:** Robust against interference and multipath fading.
        *   **Disadvantages:** Lower data rates compared to other techniques.

    *   **OFDM (Orthogonal Frequency Division Multiplexing):**
        *   Used in 802.11a, 802.11g, 802.11n, 802.11ac, 802.11ax.
        *   Divides the signal into multiple sub-carriers, each modulated at a lower data rate.
        *   **Advantages:** High data rates, robust against multipath fading.
        *   **Disadvantages:** More complex to implement.

    *   **CCK (Complementary Code Keying):**
        *   Used in 802.11b (for higher data rates).
        *   A type of modulation that provides higher data rates than DSSS while maintaining some robustness.

    *   **QAM (Quadrature Amplitude Modulation):**
        *   Used in conjunction with OFDM in 802.11a/g/n/ac/ax.
        *   Combines amplitude and phase modulation to transmit more bits per symbol, leading to higher data rates. Examples: 16-QAM, 64-QAM, 256-QAM, 1024-QAM.  Higher-order QAM schemes offer higher throughput but are more susceptible to noise.

*   **Example:** 802.11g uses OFDM.  It divides the 20MHz channel into multiple sub-carriers (typically 52 data subcarriers and 4 pilot subcarriers).  Each sub-carrier uses a type of QAM modulation (e.g., 64-QAM) to transmit data.

## 4. Channel Access Mechanisms (LO4)

*   **Channel Access Mechanisms:** Protocols used to regulate how devices share the wireless medium, preventing collisions and ensuring fair access.

*   **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance):**
    *   The primary channel access method used in 802.11.
    *   **Carrier Sense:**  A device *listens* to the channel before transmitting.  If the channel is busy (another device is transmitting), it *defers* its transmission.
    *   **Collision Avoidance:**  Uses techniques to avoid collisions:
        *   **Distributed Coordination Function (DCF):** The basic access method. Devices use a random backoff timer to avoid transmitting at the same time.
        *   **Point Coordination Function (PCF):**  An optional method that uses a central access point to coordinate access. (Rarely used)
        *   **RTS/CTS (Request to Send/Clear to Send):**  An optional mechanism to reduce collisions, especially in hidden node scenarios.  A device sends an RTS frame to the access point. The access point replies with a CTS frame, reserving the channel for the sender.

*   **Impact on Performance:**
    *   **Overhead:** CSMA/CA introduces overhead due to the carrier sensing and backoff procedures.
    *   **Fairness:** Aims to provide fair access to the channel, but performance can vary depending on network congestion.
    *   **Hidden Node Problem:** Can be mitigated using RTS/CTS, but at the cost of increased overhead.

*   **Example:** Imagine two devices, A and B, want to transmit. Both listen to the channel and find it idle. Both start a random backoff timer. If A's timer expires before B's, A transmits. If B's timer expires at almost the same time as A, a collision *might* occur.  However, the backoff timers help reduce the likelihood of this happening compared to a pure "transmit whenever idle" approach. RTS/CTS would further reduce collisions in this scenario.

## 5. Factors Affecting Signal Propagation (LO5)

*   **Signal Propagation:** How radio waves travel from the transmitter to the receiver.  Wireless signals are affected by various factors that can degrade signal quality and reduce range.

*   **Key Factors:**

    *   **Path Loss:** The signal strength decreases with distance.  Path loss is usually expressed in decibels (dB) and increases logarithmically with distance. Models like the Free-Space Path Loss model and more complex empirical models are used to estimate path loss in different environments.

    *   **Fading:** Variations in signal strength due to constructive and destructive interference of multiple signal paths.
        *   **Multipath Fading:** Occurs when signals travel along different paths (reflecting off objects) and arrive at the receiver at different times, causing interference.
        *   **Fast Fading:** Rapid variations in signal strength due to movement or changes in the environment.
        *   **Slow Fading (Shadowing):** Gradual variations in signal strength due to obstructions (e.g., walls, buildings).

    *   **Reflection:** Signals bounce off surfaces like walls and buildings.

    *   **Refraction:** Signals bend as they pass through different mediums.

    *   **Diffraction:** Signals bend around obstacles.

    *   **Interference:**  Signals from other sources (e.g., other WLANs, Bluetooth devices, microwaves) can interfere with the desired signal.
        *   **Co-channel Interference:** Interference from devices using the same channel.
        *   **Adjacent-channel Interference:** Interference from devices using nearby channels.

    *   **Absorption:** Signals are absorbed by materials like water, concrete, and metal.

*   **Example:**  A WLAN signal in an office building experiences significant path loss as it travels through walls and floors.  Multipath fading can cause "dead spots" where the signal is weak due to destructive interference. Interference from a nearby microwave oven can further degrade the signal quality.

## 6. IEEE 802.11 Physical Layer Standards (LO6)

*   **Evolution of IEEE 802.11 Standards:**  A brief overview of the key standards and their features.

*   **Key Standards:**

    *   **802.11 (Legacy):** The original standard (1997).
        *   Data Rate: Up to 2 Mbps.
        *   Frequency: 2.4 GHz.
        *   Modulation: DSSS.

    *   **802.11a:**
        *   Data Rate: Up to 54 Mbps.
        *   Frequency: 5 GHz.
        *   Modulation: OFDM.

    *   **802.11b:**
        *   Data Rate: Up to 11 Mbps.
        *   Frequency: 2.4 GHz.
        *   Modulation: DSSS, CCK.

    *   **802.11g:**
        *   Data Rate: Up to 54 Mbps.
        *   Frequency: 2.4 GHz.
        *   Modulation: OFDM, DSSS (for backwards compatibility).

    *   **802.11n:**
        *   Data Rate: Up to 600 Mbps (with multiple streams using MIMO).
        *   Frequency: 2.4 GHz and 5 GHz.
        *   Modulation: OFDM.
        *   **Key Features:** MIMO (Multiple-Input Multiple-Output), Channel Bonding (40 MHz channels).

    *   **802.11ac (Wi-Fi 5):**
        *   Data Rate: Up to 6.9 Gbps.
        *   Frequency: 5 GHz.
        *   Modulation: OFDM.
        *   **Key Features:** Wider channels (80 MHz, 160 MHz), Multi-User MIMO (MU-MIMO).

    *   **802.11ax (Wi-Fi 6):**
        *   Data Rate: Up to 9.6 Gbps.
        *   Frequency: 2.4 GHz, 5 GHz.
        *   Modulation: OFDM.
        *   **Key Features:** OFDMA (Orthogonal Frequency Division Multiple Access), Target Wake Time (TWT), MU-MIMO improvements.

    *   **802.11be (Wi-Fi 7) - (Emerging Standard):**
        *   Data Rate: Potentially up to 46 Gbps.
        *   Frequency: 2.4 GHz, 5 GHz, 6 GHz
        *   Modulation: OFDM.
        *   **Key Features:** 320 MHz channel bandwidths, Multi-Link Operation (MLO), Multi-Resource Unit (MRU).

*   **Example:** An 802.11n router can operate in both the 2.4 GHz and 5 GHz bands.  It uses MIMO technology, meaning it has multiple antennas to transmit and receive signals, improving data rates and range.

## Practice Questions and Exercises

**1. What is the primary function of the physical layer in the OSI model?**

   *Answer:* To transmit and receive raw bit streams over a physical medium.  It deals with encoding, modulation, and signal transmission.

**2. Explain the difference between DSSS and OFDM modulation techniques.**

   *Answer:* DSSS spreads the signal over a wider bandwidth, while OFDM divides the signal into multiple sub-carriers. DSSS is more robust to interference, while OFDM provides higher data rates.

**3. What are the regulatory constraints that apply to WLANs operating in the 2.4 GHz band in your country/region?  Research this!**

   *Answer:* (This will vary depending on your location.  You need to look up the regulations for your country from the relevant regulatory body (e.g. FCC in the US, ETSI in Europe, etc.) Focus on maximum transmit power and channel allocation.)

**4.  Explain the CSMA/CA channel access mechanism and why it's important in WLANs.**

   *Answer:* CSMA/CA is Carrier Sense Multiple Access with Collision Avoidance.  Devices listen to the channel before transmitting and defer if it is busy. It is important to avoid collisions in the wireless medium, which is inherently a shared resource.

**5. List three factors that affect signal propagation in a wireless environment.**

   *Answer:* Path loss, fading, interference.

**6. Which IEEE 802.11 standard offers the highest theoretical data rate?**

   *Answer:* 802.11be (Wi-Fi 7), but it is an emerging standard.  Among commonly used standards, 802.11ax (Wi-Fi 6) is currently the highest.

**7.  Why is Dynamic Frequency Selection (DFS) important in the 5 GHz band?**

   *Answer:* DFS is required to prevent WLANs from interfering with radar systems.

**8. What are the advantages of using the 5 GHz band over the 2.4 GHz band for WLANs?**

   *Answer:* Less congestion, more channels, potentially higher data rates, and less interference from other devices.

## Important Points to Remember

*   The physical layer is the foundation of wireless communication.
*   Understanding frequency bands and regulations is crucial for compliance.
*   Modulation techniques impact data rates and robustness.
*   Channel access mechanisms ensure fair access to the wireless medium.
*   Signal propagation is affected by various factors that can degrade performance.
*   The IEEE 802.11 standards are constantly evolving to provide higher data rates and improved performance.
*   MIMO and MU-MIMO techniques improve throughput via multiple antenna usage.
*   OFDMA improves efficiency by allowing multiple users to transmit simultaneously on different sub-carriers.
