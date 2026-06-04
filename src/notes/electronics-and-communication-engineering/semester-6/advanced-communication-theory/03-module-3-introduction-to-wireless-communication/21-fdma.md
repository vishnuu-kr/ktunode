---
title: "FDMA"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 3: Introduction to Wireless Communication"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed29"
status: "completed"
scrapedAt: "2026-05-23T17:59:02.048Z"
---
# ADVANCED COMMUNICATION THEORY - Module 3: Introduction to Wireless Communication

## Topic: FDMA (Frequency Division Multiple Access)

---

### **1. Introduction to Multiple Access Techniques (CO4, K2)**

Multiple Access (MA) techniques are fundamental to wireless communication, enabling multiple users to share a common communication channel (e.g., radio spectrum) simultaneously without interfering with each other. The primary goal is efficient utilization of limited radio resources.

**Key Concepts:**

*   **Spectrum:** The range of electromagnetic frequencies available for communication.
*   **Users:** Individual devices or subscribers that require access to the communication system.
*   **Interference:** Unwanted signals that disrupt or corrupt the desired signal.

**Types of Multiple Access:**

There are several key multiple access techniques, each with its own approach to dividing the shared resources:

*   **Frequency Division Multiple Access (FDMA)**
*   **Time Division Multiple Access (TDMA)**
*   **Code Division Multiple Access (CDMA)**
*   **Orthogonal Frequency Division Multiple Access (OFDMA)** (More advanced, builds on FDMA principles)

---

### **2. Frequency Division Multiple Access (FDMA) (CO4, K2)**

FDMA is a channel access method where the total available frequency bandwidth is divided into smaller, non-overlapping frequency bands. Each user is assigned a unique frequency band (or a sub-channel) for communication.

**Key Concepts:**

*   **Frequency Bands/Sub-channels:** Dedicated portions of the total bandwidth allocated to individual users.
*   **Guard Bands:** Small frequency gaps between adjacent channels. These are crucial to prevent interference between adjacent users due to imperfections in filters and frequency drifts.
*   **Channel Spacing:** The width of each frequency band plus the guard bands.

**How it Works:**

1.  The base station or network allocates specific frequency channels to different users.
2.  When a user needs to transmit, they use the assigned frequency band.
3.  All users transmit and receive on their allocated frequencies.
4.  The receiver at the base station or other users must have filters capable of isolating the desired frequency band while rejecting others.

**Analogy:** Imagine a highway with multiple lanes. FDMA is like assigning each car to a specific lane for its entire journey. No two cars in the same lane can be at the same point at the same time if they are to avoid a collision.

**Textbook References:**

*   **Goldsmith (2005):** Discusses FDMA as a basic multiple access scheme and its limitations.
*   **Rappaport (2022):** Explains the fundamental principles of FDMA and its implementation in early cellular systems.
*   **Haykin (2020):** Covers FDMA in the context of analog and early digital communication systems.

---

### **3. FDMA System Design and Operation (CO4, K2)**

**3.1. Channelization:**

*   The total available bandwidth (e.g., $B_{total}$) is divided into $N$ channels, each with bandwidth $B_c$.
*   Each channel is typically assigned a center frequency $f_k$.
*   The bandwidth of each channel ($B_c$) must be sufficient to support the modulated signal for a single user and must also accommodate guard bands.

$$B_c = B_{channel\_data} + B_{guard\_band}$$

*   The total bandwidth used by $N$ users is approximately $N \times B_c$.

**3.2. Frequency Allocation:**

*   Users are assigned specific frequency channels.
*   **Example:** In an early cellular system, if the total available bandwidth is 25 MHz and each channel needs 30 kHz, then the number of channels available is approximately $25 \times 10^6 \text{ Hz} / 30 \times 10^3 \text{ Hz} \approx 833$ channels. These channels are then allocated to different cells and users.

**3.3. Downlink and Uplink:**

*   In cellular systems, FDMA can be used for both the downlink (base station to mobile) and uplink (mobile to base station).
*   Separate frequency bands are allocated for the downlink and uplink to prevent self-interference. This is known as **Frequency Division Duplexing (FDD)**.
    *   For example, if channel 1 is allocated $f_{1a}$ for uplink and $f_{1b}$ for downlink, then a user transmitting on channel 1 will use $f_{1a}$ to talk to the base station, and the base station will use $f_{1b}$ to talk to that user.

**3.4. Implementation Considerations:**

*   **Filters:** High-quality bandpass filters are required at both the transmitter and receiver to isolate the assigned frequency band and prevent interference.
*   **Frequency Stability:** Transmitters and receivers must have very stable local oscillators to maintain their assigned frequencies within the channel bandwidth and avoid drifting into adjacent channels.
*   **Power Amplifiers:** Linear power amplifiers are often preferred to minimize spectral regrowth, which can cause out-of-band emissions and interfere with adjacent channels.

---

### **4. Advantages of FDMA (CO4, K2; CO6, K3 - by identifying its limitations and how other techniques overcome them)**

*   **Simplicity:** Relatively simple to implement, especially for analog voice communication.
*   **Low Complexity Receivers:** Receivers can be designed with straightforward filters to select the desired channel.
*   **No Time Synchronization Required:** Unlike TDMA, users do not need strict time synchronization to avoid interfering with each other.
*   **No Complex Spreading/Despreading:** Unlike CDMA, there are no complex spreading codes to manage.

---

### **5. Disadvantages of FDMA (CO4, K2; CO6, K3)**

*   **Spectrum Inefficiency:** Significant portion of the spectrum is wasted on guard bands to overcome filtering imperfections and frequency drift.
*   **Fixed Channel Allocation:** Once a channel is allocated to a user, it is dedicated to that user for the duration of their call or session, even if they are not actively transmitting (e.g., during silence in a voice call). This leads to underutilization.
*   **Susceptibility to Adjacent Channel Interference (ACI):** If filters are not sharp enough or if transmitters/receivers have frequency drift, signals can leak into adjacent channels, causing interference.
*   **Limited Capacity:** The capacity is directly limited by the number of channels that can be created within the available bandwidth.
*   **Not Efficient for Burst Traffic:** Not ideal for data communication with intermittent transmission (bursty traffic) as channels remain occupied even when idle.
*   **Crosstalk:** Imperfect filtering can lead to crosstalk between users sharing adjacent frequency channels.

**Addressing FDMA Limitations:**

*   **TDMA** addresses the inefficiency of fixed channel allocation by allowing multiple users to share the same frequency channel sequentially in time.
*   **CDMA** addresses interference and capacity by using spread spectrum techniques, allowing multiple users to share the same frequency and time simultaneously but with different codes.
*   **OFDMA** builds upon FDMA principles by dividing a wider channel into many smaller orthogonal sub-carriers, offering greater flexibility and robustness.

---

### **6. FDMA in Historical and Modern Context (CO4, K2)**

*   **Early Analog Cellular Systems:** FDMA was a cornerstone of early cellular mobile communication systems (e.g., AMPS in North America, NMT in Europe). These systems primarily carried analog voice.
*   **Digital Systems:** While less dominant as a primary multiple access scheme in modern digital systems compared to OFDMA, FDMA principles are still utilized within larger bandwidth allocations. For example, a wideband channel might be further divided into smaller FDMA sub-channels for specific services or user groups.
*   **Fixed Wireless Access:** FDMA can be found in some fixed wireless access systems.

---

### **7. Information Theory Connection (CO1, K2; CO2, K3; CO3, K3)**

While FDMA itself is a multiplexing technique and not directly an information theory measure, its efficiency is influenced by concepts from information theory:

*   **Channel Capacity:** The theoretical maximum data rate of a channel is given by Shannon's channel capacity theorem ($C = B \log_2(1 + SNR)$). FDMA divides a large bandwidth $B$ into smaller $B_c$ channels, each with its own SNR. The total capacity is the sum of capacities of individual channels.
    *   **Consideration:** If a user is allocated a channel with poor SNR, their individual capacity will be low, even if the overall system bandwidth is large.
*   **Source Coding:** If a source (e.g., voice) has redundancy, source coding can compress the data, reducing the required bandwidth for that user's FDMA channel, thus improving overall system efficiency.
*   **Channel Coding:** To combat noise and ensure reliable communication over the allocated FDMA channel, channel coding (error detection/correction) is applied to the data before modulation. This adds redundancy but improves the probability of error.

---

### **8. Practice Questions and Exercises**

**Question 1:** (CO4, K2)
Describe the fundamental principle of FDMA and explain how multiple users can share a common communication resource using this technique.

**Question 2:** (CO4, K2; CO6, K3)
What are guard bands in FDMA, and why are they necessary? What are the implications of having wider versus narrower guard bands on system performance?

**Question 3:** (CO4, K2)
If a total bandwidth of 50 MHz is available and each user requires a 200 kHz channel bandwidth (including any necessary filtering margins), how many users can be supported simultaneously using FDMA? Assume no guard bands for simplicity in this calculation.

**Question 4:** (CO4, K2)
List two major advantages and two major disadvantages of FDMA compared to other multiple access techniques like TDMA.

**Question 5:** (CO1, K2; CO4, K2)
Consider an FDMA system with two users. User A is allocated a channel with a bandwidth of 30 kHz and experiences an SNR of 15 dB. User B is allocated a channel with a bandwidth of 30 kHz and experiences an SNR of 25 dB.
a) Calculate the theoretical channel capacity (in bps) for User A using Shannon's capacity formula ($C = B \log_2(1 + SNR)$).
b) Calculate the theoretical channel capacity (in bps) for User B.
c) If the total available bandwidth were used by a single user with the average SNR of both users, what would be the capacity? (Hint: calculate average SNR).

---

### **9. Answers to Practice Questions**

**Answer 1:**
FDMA divides the total available frequency spectrum into several non-overlapping frequency channels. Each user is assigned a unique frequency channel, allowing them to transmit and receive simultaneously without interfering with users in other channels. The shared resource is the frequency spectrum, and it's divided among users by allocating distinct frequency bands.

**Answer 2:**
Guard bands are small, unused frequency regions placed between adjacent FDMA channels. They are necessary to prevent interference between users due to:
1.  **Filter Imperfections:** Real-world filters are not perfectly sharp and allow some signal energy to "leak" into adjacent bands.
2.  **Frequency Drift:** Transmitters and receivers might not maintain their exact assigned frequencies due to oscillator instabilities, causing their signals to drift slightly.

*   **Wider Guard Bands:**
    *   **Advantage:** Reduced risk of adjacent channel interference (ACI), allowing for less stringent filter requirements and more tolerance to frequency drift.
    *   **Disadvantage:** Reduced spectral efficiency, as more of the total bandwidth is wasted on unused guard bands, leading to fewer available channels.
*   **Narrower Guard Bands:**
    *   **Advantage:** Increased spectral efficiency, allowing for more channels within the same total bandwidth.
    *   **Disadvantage:** Higher risk of ACI if filters are not ideal or frequency drift occurs, potentially requiring more complex and expensive filtering circuitry.

**Answer 3:**
Number of users = Total Bandwidth / Channel Bandwidth
Number of users = 50 MHz / 200 kHz
Number of users = (50 × 10⁶ Hz) / (200 × 10³ Hz)
Number of users = 50000 / 200
Number of users = 250 users

**Answer 4:**
**Advantages:**
1.  **Simplicity:** Relatively easy to implement, especially for analog systems.
2.  **No Time Synchronization:** Does not require precise time synchronization between users.

**Disadvantages:**
1.  **Spectrum Inefficiency:** Significant spectral waste due to guard bands.
2.  **Fixed Allocation:** Channels are dedicated, leading to underutilization with bursty traffic.

**Answer 5:**
Given: $B = 30 \text{ kHz} = 30 \times 10^3 \text{ Hz}$

**User A:**
SNR$_A$ = 15 dB. Convert to linear scale: SNR$_{A,lin} = 10^{15/10} = 10^{1.5} \approx 31.62$
a) Capacity$_A = B \log_2(1 + SNR_{A,lin})$
Capacity$_A = (30 \times 10^3) \log_2(1 + 31.62)$
Capacity$_A = (30 \times 10^3) \log_2(32.62)$
Capacity$_A \approx (30 \times 10^3) \times 5.046 \approx 151,380 \text{ bps}$ or 151.38 kbps.

**User B:**
SNR$_B$ = 25 dB. Convert to linear scale: SNR$_{B,lin} = 10^{25/10} = 10^{2.5} \approx 316.23$
b) Capacity$_B = B \log_2(1 + SNR_{B,lin})$
Capacity$_B = (30 \times 10^3) \log_2(1 + 316.23)$
Capacity$_B = (30 \times 10^3) \log_2(317.23)$
Capacity$_B \approx (30 \times 10^3) \times 8.306 \approx 249,180 \text{ bps}$ or 249.18 kbps.

c) Average SNR (in linear scale):
Average SNR$_{lin} = (SNR_{A,lin} + SNR_{B,lin}) / 2$
Average SNR$_{lin} \approx (31.62 + 316.23) / 2 \approx 347.85 / 2 \approx 173.93$

Total bandwidth = $B_A + B_B = 30 \text{ kHz} + 30 \text{ kHz} = 60 \text{ kHz}$.
Capacity with average SNR = $(60 \times 10^3) \log_2(1 + 173.93)$
Capacity with average SNR = $(60 \times 10^3) \log_2(174.93)$
Capacity with average SNR $\approx (60 \times 10^3) \times 7.452 \approx 447,120 \text{ bps}$ or 447.12 kbps.

**Observation:** The sum of individual capacities (151.38 + 249.18 = 400.56 kbps) is less than the capacity achieved by using the combined bandwidth with the average SNR (447.12 kbps). This illustrates the benefit of having higher SNR on dedicated channels in an FDMA system, as per Shannon's capacity theorem, and also highlights how the non-linear nature of the logarithm impacts capacity.

---

### **10. Important Points to Remember**

*   FDMA divides **frequency spectrum** among users.
*   Each user gets a **dedicated frequency channel**.
*   **Guard bands** are essential to prevent interference but reduce spectral efficiency.
*   Requires **stable oscillators** and good **filtering**.
*   Simple to implement but less efficient for **bursty traffic**.
*   Early cellular systems heavily relied on FDMA.
*   **FDD (Frequency Division Duplexing)** is often paired with FDMA for cellular systems.

---

This concludes the notes on FDMA. The next topic will likely cover Time Division Multiple Access (TDMA) or explore other aspects of wireless communication.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
