---
title: "Frequency Division Multiple Access (FDMA)"
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 3: Spread spectrum – Direct sequence"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb81"
status: "completed"
scrapedAt: "2026-05-20T16:57:58.344Z"
---
## WIRELESS & MOBILE COMPUTING - Module 3: Spread Spectrum - Direct Sequence - FDMA

**Subject:** WIRELESS & MOBILE COMPUTING
**Module:** Module 3: Spread Spectrum – Direct Sequence
**Topic:** Frequency Division Multiple Access (FDMA)
**Description:**  Frequency Division Multiple Access (FDMA)

**Learning Outcomes:**

*   Understand the fundamental principles of Frequency Division Multiple Access (FDMA).
*   Explain how FDMA divides the available bandwidth among users.
*   Identify the advantages and disadvantages of FDMA.
*   Compare FDMA with other multiple access techniques.
*   Describe applications of FDMA in wireless communication systems.
*   Calculate channel bandwidth requirements in FDMA.

---

### 1. Fundamental Principles of Frequency Division Multiple Access (FDMA)

*   **Definition:** Frequency Division Multiple Access (FDMA) is a channel access method in which the available frequency band is divided into multiple frequency channels or sub-bands.  Each user is allocated a unique frequency channel for the duration of their communication session.
*   **Basic Idea:**  The total bandwidth of the system is divided into smaller, non-overlapping frequency bands or channels.
*   **Dedicated Channel:** Each user gets a dedicated channel, meaning no other user shares that same frequency band at the same time.
*   **Continuous Transmission:** Users have continuous access to their assigned frequency channel as long as they need it (within predefined limitations of the system).
*   **Guard Bands:**  Small frequency bands called "guard bands" are inserted between adjacent channels to minimize interference (crosstalk) between users.
*   **Duplexing:** FDMA is often used in conjunction with Frequency Division Duplexing (FDD), where separate frequency bands are used for uplink (mobile to base station) and downlink (base station to mobile) transmissions. However, it *can* also be used with Time Division Duplexing (TDD).
*   **Diagram:**

    ```
    [Guard Band][Channel 1][Guard Band][Channel 2][Guard Band][Channel 3][Guard Band] ...
    ```

### 2. How FDMA Divides the Available Bandwidth Among Users

*   **Channel Allocation:** The system operator (e.g., a cellular provider) allocates frequency channels to users based on their requests or requirements.
*   **Frequency Reuse:** To improve spectrum efficiency, FDMA systems often employ frequency reuse techniques.  This means that the same frequency channels can be reused in different geographic areas (cells) far enough apart to avoid significant interference.  This requires careful cell planning and interference management.
*   **Channel Assignment Schemes:**
    *   **Fixed Channel Allocation (FCA):** Each cell has a pre-defined set of frequency channels.  When a user requests a channel, it is selected from that cell's available channels. If all channels are in use, the call is blocked.  Simple, but can be inefficient.
    *   **Dynamic Channel Allocation (DCA):**  Channels are not permanently assigned to cells. Instead, a central controller (or distributed control scheme) dynamically allocates channels to cells based on real-time traffic demands and interference levels. More complex, but generally more efficient.
*   **Channel Bandwidth:** The width of each frequency channel is determined by the bandwidth required to transmit the signal (speech, data, etc.) and the necessary guard bands.  This is a crucial design parameter.
*   **Channel Management:** Efficient channel management is essential for maximizing the capacity of an FDMA system. This involves allocating channels effectively, monitoring channel usage, and reallocating channels as needed.

### 3. Advantages and Disadvantages of FDMA

**Advantages:**

*   **Simplicity:** Relatively simple to implement, particularly compared to more advanced multiple access schemes.
*   **Continuous Transmission:** Users have a dedicated channel and can transmit continuously.  This can be beneficial for applications requiring constant data streams (e.g., voice calls).
*   **No Timing Synchronization:**  Users don't need to synchronize their transmissions with other users, as they operate on different frequencies. This simplifies the transceiver design.
*   **Well-Established Technology:**  FDMA has been used in wireless communication systems for many years, making it a mature and well-understood technology.

**Disadvantages:**

*   **Inefficient Bandwidth Utilization:** Guard bands between channels reduce overall bandwidth efficiency. Fixed channel allocation can also lead to underutilization if some cells have light traffic while others are congested.
*   **Limited Capacity:** The number of users that can be supported simultaneously is limited by the number of available frequency channels.
*   **Sensitivity to Frequency Planning:**  Proper frequency planning is crucial to avoid interference between cells using the same frequencies (frequency reuse).  This can be complex and challenging, especially in dense urban environments.
*   **Requires Filters:** Sharp filters are needed to isolate the different frequency channels, which can increase the cost and complexity of the transceiver.
*   **Susceptible to Narrowband Interference:**  FDMA systems are susceptible to interference from narrowband sources that can disrupt a single frequency channel.
*   **Not Suitable for Bursty Data:** Not well suited for bursty data applications because the channel is dedicated even when the user is not transmitting.

### 4. Comparison with Other Multiple Access Techniques

| Feature             | FDMA                                    | TDMA                                      | CDMA                                          |
|----------------------|-----------------------------------------|-------------------------------------------|------------------------------------------------|
| **Division**        | Frequency domain                         | Time domain                               | Code domain                                    |
| **Channel**         | Dedicated frequency channel            | Shared channel, time slots                | Shared channel, unique codes                   |
| **Bandwidth**        | Divided into narrow channels              | Full bandwidth used for short bursts       | Full bandwidth used simultaneously by all users |
| **Synchronization** | No timing synchronization required    | Timing synchronization required             | Code synchronization required                  |
| **Guard Bands/Times**| Guard bands between channels             | Guard times between time slots            | N/A                                               |
| **Complexity**      | Relatively simple                       | More complex than FDMA                    | Most complex                                    |
| **Efficiency**       | Less efficient than TDMA and CDMA        | More efficient than FDMA                   | Potentially most efficient                      |
| **Interference**    | Susceptible to narrowband interference | Susceptible to time slot interference     | Interference averaging                          |
| **Applications**     | Older cellular systems (AMPS), satellite  | GSM, DECT                                 | 3G (UMTS), CDMA2000                             |

### 5. Applications of FDMA in Wireless Communication Systems

*   **Advanced Mobile Phone System (AMPS):** An early analog cellular system that used FDMA for channel access.
*   **Satellite Communication:** FDMA is often used in satellite communication systems to allow multiple users to share the satellite's transponder capacity.
*   **Paging Systems:** Early paging systems often used FDMA to allocate frequency channels to different pagers.
*   **Some legacy wireless systems:** While less common now with the rise of TDMA and CDMA, FDMA principles still exist in channel allocation and frequency reuse strategies within modern systems.

### 6. Calculation of Channel Bandwidth Requirements in FDMA

**Key Parameters:**

*   **Channel Bandwidth (B<sub>c</sub>):** The total bandwidth allocated to each channel (including guard bands).
*   **Signal Bandwidth (B<sub>s</sub>):** The bandwidth required to transmit the user's signal (voice, data, etc.).
*   **Guard Band (B<sub>g</sub>):** The bandwidth of the guard band between adjacent channels.
*   **Number of Channels (N):** The total number of channels available in the system.
*   **Total Bandwidth (B<sub>t</sub>):** The total available bandwidth of the system.

**Formulas:**

*   **Channel Bandwidth Calculation:**  B<sub>c</sub> = B<sub>s</sub> + B<sub>g</sub>
*   **Total Bandwidth Calculation:** B<sub>t</sub> = N * B<sub>c</sub> = N * (B<sub>s</sub> + B<sub>g</sub>)

**Example:**

Suppose a wireless communication system has a total bandwidth of 25 MHz.  Each user's signal requires a bandwidth of 30 kHz, and a guard band of 5 kHz is used between channels.

1.  **Channel Bandwidth:** B<sub>c</sub> = 30 kHz + 5 kHz = 35 kHz
2.  **Number of Channels:** N = B<sub>t</sub> / B<sub>c</sub> = 25 MHz / 35 kHz = 25,000 kHz / 35 kHz ≈ 714 channels

Therefore, this FDMA system can support approximately 714 users simultaneously.

**Important Considerations:**

*   This calculation assumes perfect packing of the frequency bands.
*   In reality, due to hardware limitations and signal processing requirements, there may be some additional overhead that reduces the effective number of channels.
*   This is a simplified model and doesn't account for advanced techniques like channel coding or modulation schemes, which can affect the required signal bandwidth.

---

### Practice Questions & Exercises

**Question 1:**

Explain the main difference between FDMA and TDMA.

**Answer:**

FDMA divides the available bandwidth into frequency channels, assigning each user a unique frequency channel for the duration of their communication.  TDMA, on the other hand, divides the available time into time slots, assigning each user a time slot within a single frequency channel.  Users share the frequency channel but transmit at different times.

**Question 2:**

What are the advantages of using guard bands in an FDMA system?  What is the downside of using guard bands?

**Answer:**

Advantages: Guard bands reduce interference (crosstalk) between adjacent frequency channels, improving signal quality and reliability.

Disadvantage: Guard bands reduce the overall bandwidth efficiency of the system, as a portion of the available bandwidth is not used for transmitting user data.

**Question 3:**

A wireless system uses FDMA with a total bandwidth of 10 MHz.  If the signal bandwidth required for each user is 20 kHz and the guard band between channels is 2 kHz, how many channels can be supported?

**Answer:**

1.  **Channel Bandwidth (Bc):** 20 kHz + 2 kHz = 22 kHz
2.  **Number of Channels (N):** 10 MHz / 22 kHz = 10,000 kHz / 22 kHz ≈ 454.54. Since you can't have a fraction of a channel, the system can support approximately **454 channels**.

**Question 4:**

What are some applications where FDMA is still used today?

**Answer:**

While less common than in the past due to the rise of TDMA and CDMA, FDMA principles are still used in some satellite communication systems, some legacy wireless systems and in strategies for frequency reuse.

**Question 5:**

Explain the difference between Fixed Channel Allocation (FCA) and Dynamic Channel Allocation (DCA) in the context of FDMA.  What are the advantages and disadvantages of each?

**Answer:**

*   **Fixed Channel Allocation (FCA):** Each cell is assigned a fixed set of frequencies. Users within that cell can only use the frequencies assigned to that cell.

    *   **Advantages:** Simple to implement.
    *   **Disadvantages:** Can be inefficient if traffic load is unevenly distributed across cells.  Some cells might be congested while others have unused frequencies.

*   **Dynamic Channel Allocation (DCA):** Frequencies are not permanently assigned to cells. A central controller allocates frequencies dynamically based on real-time traffic demands and interference levels.

    *   **Advantages:** More efficient utilization of bandwidth, especially when traffic load varies across cells.
    *   **Disadvantages:** More complex to implement than FCA, requiring a central controller and sophisticated algorithms for channel allocation.

---

### Important Points to Remember

*   FDMA is a multiple access technique that divides the available bandwidth into frequency channels.
*   Each user gets a dedicated frequency channel for the duration of their communication.
*   Guard bands are used to minimize interference between channels.
*   FDMA is relatively simple to implement, but less efficient than TDMA and CDMA.
*   It is susceptible to narrowband interference.
*   Understanding the trade-offs between channel bandwidth, guard band size, and the number of channels is crucial for designing FDMA systems.
*   Frequency reuse strategies are essential for improving spectrum efficiency in FDMA systems.
