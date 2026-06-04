---
title: "Code Division Multiple Access (CDMA)."
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 3: Spread spectrum – Direct sequence"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb83"
status: "completed"
scrapedAt: "2026-05-20T16:57:59.841Z"
---
# WIRELESS & MOBILE COMPUTING - Module 3: Spread Spectrum - Direct Sequence - CDMA

## Topic: Code Division Multiple Access (CDMA)

### Learning Outcomes:

*   Understand the principles of Code Division Multiple Access (CDMA).
*   Explain the advantages and disadvantages of CDMA.
*   Describe the Walsh codes and their properties.
*   Analyze the near-far problem in CDMA and its solutions.
*   Compare CDMA with other multiple access techniques like FDMA and TDMA.
*   Understand the concept of soft handoff in CDMA.

### 1. Introduction to Code Division Multiple Access (CDMA)

*   **Definition:** CDMA is a channel access method used by various radio communication technologies. It allows multiple users to share the same frequency band simultaneously by assigning each user a unique code.
*   **Key Principle:** Instead of dividing the channel by time (TDMA) or frequency (FDMA), CDMA allows all users to transmit simultaneously over the entire bandwidth.
*   **Spread Spectrum:** CDMA is a form of spread spectrum technology. Data is multiplied by a unique spreading code (much wider bandwidth than the original signal).
*   **Receiver Operation:** The receiver uses the same unique code to despread the desired signal, while signals from other users appear as noise.
*   **Example:** Think of a crowded room where everyone is speaking at the same time.  CDMA is like each person speaking in a unique language.  A listener can understand a speaker only if they know the speaker's language.  Other languages are simply noise.

### 2. Principles of CDMA

*   **Spreading:** Each user's signal is multiplied by a unique pseudo-random noise (PN) sequence or code. This spreading code has a much higher chip rate than the data rate, resulting in a wider bandwidth.
*   **Channel Sharing:** All users transmit their spread signals simultaneously over the same frequency band.
*   **Correlation:** The receiver correlates the received signal with the desired user's spreading code.  If the codes are orthogonal (uncorrelated), the receiver can isolate the desired signal and reject interference from other users.
*   **Orthogonality:**  The spreading codes are designed to be orthogonal. This means the cross-correlation between different codes is close to zero.  Perfect orthogonality is often difficult to achieve due to multipath fading and other channel impairments.
*   **Capacity:** The capacity of a CDMA system is interference-limited. As more users are added, the interference level increases, which can degrade performance and reduce the data rate.

### 3. Advantages of CDMA

*   **Increased Capacity:** CDMA can support more users than FDMA or TDMA for the same bandwidth because users transmit simultaneously.
*   **Frequency Reuse:** CDMA allows for a frequency reuse factor of 1 (all cells use the same frequencies), simplifying network planning and increasing spectrum efficiency.
*   **Soft Handoff:** CDMA supports soft handoff, where a mobile station can communicate with multiple base stations simultaneously during a handoff. This reduces the probability of dropped calls and improves signal quality.
*   **Resistance to Interference:** Spread spectrum techniques are inherently resistant to narrowband interference and jamming.
*   **Security:** The use of spreading codes provides a level of security, making it difficult for unauthorized users to eavesdrop on communications.
*   **No Hard Limit on Users:** Unlike FDMA or TDMA, CDMA does not have a hard limit on the number of users. The system's performance degrades gracefully as more users are added.

### 4. Disadvantages of CDMA

*   **Near-Far Problem:** Mobile stations closer to the base station can overpower signals from distant mobile stations, making it difficult for the base station to decode the weaker signals. This requires accurate power control.
*   **Complexity:** CDMA systems are more complex to design and implement than FDMA or TDMA systems.
*   **Power Control Requirements:** Accurate and fast power control is crucial for CDMA to mitigate the near-far problem and ensure fair resource allocation.
*   **Chip Synchronization:** Accurate chip synchronization between the transmitter and receiver is essential for proper despreading.
*   **Interference Management:** While CDMA is designed to tolerate interference, managing interference levels is still critical for achieving high capacity and good performance.

### 5. Walsh Codes

*   **Definition:** Walsh codes are a set of orthogonal binary sequences used as spreading codes in CDMA systems, particularly in IS-95.
*   **Construction:** Walsh codes are generated from a Hadamard matrix.
*   **Properties:**
    *   **Orthogonality:** Walsh codes are mutually orthogonal. The cross-correlation between any two distinct Walsh codes is zero.
    *   **Ease of Generation:** Walsh codes are easy to generate using simple algorithms.
    *   **Length:** Walsh codes come in lengths that are powers of 2 (e.g., 2, 4, 8, 16, 32, 64, 128).
    *   **Perfect Cross-Correlation:** Ideal for synchronous CDMA systems (downlink).
*   **Usage:** Each user in the CDMA system is assigned a unique Walsh code.
*   **Example:**
    *   W1 = [1 1]
    *   W2 = [1 -1]
    *   W4 = [1 1 1 1; 1 -1 1 -1; 1 1 -1 -1; 1 -1 -1 1]
    *   Each row in W4 is a Walsh code of length 4.

### 6. Near-Far Problem

*   **Definition:** The near-far problem occurs in CDMA when a strong signal from a nearby mobile station overwhelms a weaker signal from a distant mobile station at the receiver.
*   **Cause:** The received power of signals from different mobile stations varies significantly due to differences in distance from the base station and path loss.
*   **Impact:** The strong signal can mask the weaker signal, making it difficult for the receiver to decode the weaker signal correctly. This degrades the system's performance and reduces its capacity.
*   **Solutions:**
    *   **Power Control:** Accurate and fast power control mechanisms are essential to ensure that all mobile stations' signals arrive at the base station with approximately the same power level.  This can be open-loop (based on path loss estimates) or closed-loop (feedback from the base station).
    *   **Closed-Loop Power Control:** The base station continuously monitors the received power from each mobile station and sends power control commands (increase or decrease power) to adjust the transmit power.
    *   **Open-Loop Power Control:** The mobile station estimates the path loss based on the received signal strength from the base station and adjusts its transmit power accordingly.
    *   **Sectorization:** Dividing the cell into sectors using directional antennas can help reduce interference from nearby mobile stations.

### 7. CDMA vs. FDMA and TDMA

| Feature          | CDMA                                    | FDMA                                     | TDMA                                    |
|------------------|------------------------------------------|------------------------------------------|-----------------------------------------|
| Channel Access    | Code Division                            | Frequency Division                         | Time Division                           |
| Bandwidth Usage  | All users share the same bandwidth       | Each user gets a separate frequency band   | Each user gets a time slot on the same frequency |
| Interference     | Interference-limited                     | Minimal interference if channels are well-separated | Potential for interference if timing is not precise |
| Capacity         | Higher capacity than FDMA and TDMA       | Lower capacity compared to CDMA          | Lower capacity compared to CDMA          |
| Complexity       | More complex than FDMA and TDMA         | Simpler compared to CDMA                 | Medium complexity                       |
| Frequency Reuse   | Frequency reuse factor of 1              | Frequency reuse factor typically > 1     | Frequency reuse factor typically > 1     |
| Soft Handoff      | Supported                                | Not supported                              | Not supported                             |

### 8. Soft Handoff

*   **Definition:** Soft handoff is a technique used in CDMA where a mobile station maintains simultaneous connections with multiple base stations during a handoff.
*   **Process:**
    1.  As the mobile station moves from one cell to another, it starts communicating with the new base station *before* disconnecting from the old base station.
    2.  The mobile station is simultaneously connected to both base stations for a brief period.
    3.  The network selects the best signal from either base station and routes it to the mobile station.
    4.  Once the mobile station has completely moved into the new cell, it disconnects from the old base station.
*   **Advantages:**
    *   **Reduced Dropped Call Rate:**  Since the connection is maintained during the handoff, the probability of dropped calls is significantly reduced.
    *   **Improved Signal Quality:** The mobile station can select the best signal from multiple base stations, improving the overall signal quality.
    *   **Smoother Transition:** The transition between cells is seamless and less noticeable to the user.
*   **Comparison with Hard Handoff:** In hard handoff (used in FDMA and TDMA), the mobile station breaks the connection with the old base station *before* establishing a connection with the new base station. This can result in a brief interruption of service.

### 9. Important Points to Remember

*   CDMA is a spread spectrum multiple access technique.
*   Spreading codes (e.g., Walsh codes) are used to differentiate users.
*   Orthogonality of codes is crucial for interference mitigation.
*   The near-far problem requires accurate power control.
*   Soft handoff provides a smoother and more reliable handoff process.
*   CDMA is interference-limited, meaning capacity depends on interference levels.

### 10. Practice Questions/Exercises

**Question 1:** Explain the difference between FDMA, TDMA, and CDMA.

**Answer:**

*   **FDMA (Frequency Division Multiple Access):** Divides the available bandwidth into separate frequency channels, and each user is assigned a dedicated channel.
*   **TDMA (Time Division Multiple Access):** Divides the available time into time slots, and each user is assigned a specific time slot to transmit data on the same frequency.
*   **CDMA (Code Division Multiple Access):** Allows all users to transmit simultaneously over the entire bandwidth using unique spreading codes to differentiate their signals.

**Question 2:** What is the near-far problem in CDMA, and how can it be mitigated?

**Answer:** The near-far problem occurs when a strong signal from a nearby mobile station overpowers a weaker signal from a distant mobile station. It can be mitigated through power control mechanisms, including open-loop and closed-loop power control.

**Question 3:** What are Walsh codes, and what properties make them suitable for CDMA?

**Answer:** Walsh codes are orthogonal binary sequences used as spreading codes in CDMA. Their key properties are orthogonality (zero cross-correlation), ease of generation, and lengths that are powers of 2. Orthogonality allows receivers to distinguish between different users' signals.

**Question 4:** Explain the concept of soft handoff in CDMA. What are its advantages?

**Answer:** Soft handoff is a technique where a mobile station maintains simultaneous connections with multiple base stations during a handoff. This reduces dropped calls, improves signal quality, and provides a smoother transition between cells.

**Question 5:**  What are the advantages of using CDMA over other multiple access methods like FDMA or TDMA?

**Answer:** Advantages of CDMA include: Increased capacity, frequency reuse of 1, soft handoff capability, resistance to interference, and a graceful degradation of performance as the number of users increases (no hard limit).

**Question 6:** Why is power control so critical in a CDMA system?

**Answer:** Power control is critical to mitigate the near-far problem. Without it, strong signals from nearby users could drown out the weaker signals from more distant users, significantly degrading system performance and capacity.

**Question 7:** Assume you are designing a CDMA system. What factors would you consider when selecting the spreading codes?

**Answer:** Key factors to consider include:

*   **Orthogonality:** The codes should be as orthogonal as possible to minimize interference between users.
*   **Autocorrelation Properties:** Good autocorrelation properties (sharp peak when aligned with itself) allow for accurate synchronization.
*   **Code Length:** The code length affects the spreading factor and thus the resistance to interference. Longer codes provide better resistance but also require more complex processing.
*   **Availability/Ease of Generation:** Practicality of generating and implementing the codes in hardware.
