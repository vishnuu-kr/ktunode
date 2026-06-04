---
title: "Frequency hopping."
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 3: Spread spectrum – Direct sequence"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb7f"
status: "completed"
scrapedAt: "2026-05-20T16:57:56.921Z"
---
# WIRELESS & MOBILE COMPUTING - Module 3: Spread Spectrum (Direct Sequence) - Frequency Hopping

## 1. Introduction to Frequency Hopping Spread Spectrum (FHSS)

*   **What is Frequency Hopping?** Frequency hopping is a spread spectrum technique in which the carrier frequency is periodically changed according to a pseudorandom sequence. The transmitter "hops" between different frequencies within a specific bandwidth, making it difficult for unauthorized receivers to eavesdrop or jam the signal.

*   **Why Use Frequency Hopping?**
    *   **Interference Mitigation:** Reduces the impact of narrowband interference, as the system only resides on a interfered frequency for a short duration.
    *   **Security:** Makes unauthorized interception difficult because the frequency sequence is pseudorandom and known only to the authorized transmitter and receiver.
    *   **Multipath Fading Resistance:** Averaging effects across many frequencies makes the signal more resilient to multipath fading.
    *   **CDMA Coexistence:** FHSS systems can coexist with CDMA systems due to their inherent interference averaging capabilities.

*   **Key Components:**
    *   **Pseudorandom Sequence Generator:** Generates the pseudorandom sequence that determines the hopping pattern.
    *   **Frequency Synthesizer:** Generates the carrier frequencies according to the pseudorandom sequence.
    *   **Modulator/Demodulator:** Modulates the data onto the carrier frequency and demodulates the received signal.
    *   **Hopping Rate Controller:** Determines how frequently the carrier frequency changes.

## 2. Learning Outcomes Coverage: Key Concepts and Definitions

### 2.1. Understand the principles of Frequency Hopping Spread Spectrum (FHSS)

*   **Principle:** FHSS spreads the signal power over a wide bandwidth by rapidly switching (hopping) the carrier frequency according to a pseudorandom sequence.

*   **Spread Spectrum Factor (Processing Gain):** The ratio of the spread bandwidth to the original bandwidth of the signal. It provides a measure of the signal spreading and hence its resistance to interference.

*   **Two Types of FHSS:**
    *   **Slow Frequency Hopping (SFH):** The hopping rate is slower than the symbol rate of the data signal. Several symbols are transmitted on the same frequency before hopping to the next frequency.
    *   **Fast Frequency Hopping (FFH):** The hopping rate is faster than the symbol rate. Multiple hops occur during the transmission of a single symbol.

*   **Advantages of FHSS (reiterated):**
    *   Immunity to narrowband interference
    *   Improved security
    *   Resilience to multipath fading
    *   Coexistence with other wireless systems.

### 2.2. Differentiate between Slow Frequency Hopping (SFH) and Fast Frequency Hopping (FFH)

| Feature             | Slow Frequency Hopping (SFH)             | Fast Frequency Hopping (FFH)               |
| ------------------- | ---------------------------------------- | ------------------------------------------- |
| Hopping Rate        | Slower than the symbol rate (Rs)         | Faster than the symbol rate (Rs)            |
| Relationship        | Hopping Rate (Rh) < Symbol Rate (Rs)     | Hopping Rate (Rh) > Symbol Rate (Rs)       |
| Symbols per Hop     | Multiple symbols transmitted per hop    | Multiple hops per symbol                    |
| Complexity          | Lower complexity                         | Higher complexity                         |
| Interference Resistance | More vulnerable to short-duration bursts | More robust against short-duration bursts |
| Synchronization      | Easier synchronization                   | More complex synchronization              |

*   **Example:** Imagine sending a single letter of the alphabet as a "symbol". In SFH, you might send several copies of the letter "A" on one frequency before hopping to a new frequency for the letter "B". In FFH, you might switch frequencies multiple times *while* transmitting a single letter "A".

### 2.3. Explain the advantages and disadvantages of FHSS

**Advantages:**

*   **Jamming Resistance:**  FHSS makes it difficult for an attacker to jam the signal effectively. The jammer needs to jam a wide bandwidth or follow the hopping sequence, which is often unknown.
*   **Anti-Eavesdropping:** The pseudorandom hopping sequence makes it difficult for unauthorized receivers to intercept the signal.
*   **Frequency Diversity:** FHSS uses multiple frequencies, which provides inherent frequency diversity to combat frequency-selective fading.
*   **Coexistence:**  Systems using different hopping sequences can coexist in the same frequency band with minimal interference.
*   **Simplicity:**  In some implementations (SFH), FHSS can be simpler to implement compared to other spread spectrum techniques.

**Disadvantages:**

*   **Synchronization Complexity:** Maintaining synchronization between the transmitter and receiver in terms of hopping sequence is crucial. Loss of synchronization leads to communication failure. This is particularly challenging in FFH.
*   **Bandwidth Requirement:**  Requires a wide bandwidth to accommodate the hopping frequencies.
*   **Overhead:**  The control and synchronization mechanisms introduce overhead, reducing the overall data throughput.
*   **Potential for Collisions:**  If multiple users are using the same hopping sequence (code reuse) without proper coordination, collisions can occur when they hop to the same frequency simultaneously.

### 2.4. Describe the applications of FHSS

*   **Military Communications:**  Used extensively in military communication systems due to its jamming resistance and anti-eavesdropping capabilities.
*   **Bluetooth:**  Bluetooth uses FHSS to minimize interference and ensure robust communication in crowded radio environments.
*   **Wireless Sensor Networks (WSNs):** Used in WSNs to improve reliability and reduce power consumption.
*   **Amateur Radio:** Used in amateur radio communication for improved range and interference resistance.
*   **Frequency-Hopping Radios:**  Walkie-talkies and other radios that need secure and robust communication.
*   **IoT Devices:** Some IoT devices with low bandwidth requirements use FHSS due to its lower power consumption compared to other spread spectrum techniques.

## 3. Examples

*   **Bluetooth:** Uses SFH with a hopping rate of 1600 hops/second, spreading the signal over 79 different frequencies in the 2.4 GHz ISM band. This helps to mitigate interference from other devices operating in the same band.

*   **Military Radios:**  Modern military radios often employ sophisticated FHSS techniques with dynamically changing hopping sequences and adaptive hopping rates to maximize security and resistance to jamming.

*   **Consider a scenario:** Two Bluetooth devices are communicating. Due to FHSS, if one particular frequency is experiencing interference from a microwave oven, the devices will quickly hop to a different, clearer frequency, minimizing the impact of the interference.

## 4. Practice Questions & Exercises

**Question 1:**  Explain the difference between SFH and FFH in terms of hopping rate and symbols transmitted per hop.

**Answer:** SFH has a hopping rate slower than the symbol rate, meaning multiple symbols are transmitted on one frequency before hopping. FFH has a hopping rate faster than the symbol rate, meaning multiple hops occur during the transmission of a single symbol.

**Question 2:** What are the key advantages of using FHSS in wireless communication? List at least three.

**Answer:**
*   Immunity to narrowband interference.
*   Improved security (anti-eavesdropping).
*   Resilience to multipath fading.

**Question 3:** What is the role of the pseudorandom sequence generator in FHSS?

**Answer:** The pseudorandom sequence generator produces the sequence of frequencies that the transmitter will hop to. This sequence is known to both the transmitter and receiver and is used to maintain synchronization.

**Question 4:** A system has a symbol rate of 1000 symbols per second.  If it is using SFH with a hopping rate of 100 hops per second, how many symbols are transmitted per hop?

**Answer:** 1000 symbols/second / 100 hops/second = 10 symbols per hop.

**Question 5:** Describe a situation where FHSS might be preferred over Direct Sequence Spread Spectrum (DSSS).

**Answer:** FHSS might be preferred over DSSS in situations where there is a strong narrowband interferer, because FHSS can hop away from that interferer.  DSSS, while resistant, still spreads the interferer's energy across the entire bandwidth.

## 5. Important Points to Remember

*   **Synchronization is Key:**  Maintaining synchronization between the transmitter and receiver is crucial for FHSS to work effectively.
*   **Pseudorandom Sequences:** The security of FHSS depends on the quality and unpredictability of the pseudorandom sequence.
*   **Trade-offs:**  There are trade-offs between hopping rate, bandwidth, and complexity when designing an FHSS system. FFH offers higher jam resistance but also higher complexity.
*   **FHSS & Regulatory Constraints:** FHSS systems must comply with regulatory limits on occupied bandwidth and hopping channel usage.
*   **Understand the difference between SFH and FFH** and their respective applications.
