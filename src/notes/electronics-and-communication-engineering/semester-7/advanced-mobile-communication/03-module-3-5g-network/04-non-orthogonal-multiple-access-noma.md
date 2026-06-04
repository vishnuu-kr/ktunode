---
title: "non-orthogonal multiple access (NOMA)"
subject: "ADVANCED MOBILE COMMUNICATION"
module: "Module 3: 5G Network"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff0f6"
status: "completed"
scrapedAt: "2026-05-23T18:04:45.360Z"
---
# ADVANCED MOBILE COMMUNICATION

## Module 3: 5G Network

## Topic: Non-Orthogonal Multiple Access (NOMA)

---

### Introduction to NOMA

Non-Orthogonal Multiple Access (NOMA) is a key enabling technology for 5G networks that aims to improve spectral efficiency and support a massive number of devices, particularly in scenarios with varying channel conditions. Unlike traditional Orthogonal Multiple Access (OMA) schemes where users are separated in the time, frequency, or code domain, NOMA allows multiple users to share the same time and frequency resources. This sharing is achieved by exploiting the difference in users' channel gains.

**Key Concept:** NOMA allows multiple users to access the same time and frequency resources simultaneously, differentiating them based on their channel conditions (e.g., signal strength).

**Relation to 5G Goals:** NOMA directly addresses the 5G goals of enhanced Mobile Broadband (eMBB), massive Machine Type Communications (mMTC), and ultra-Reliable Low-Latency Communications (URLLC) by offering significant improvements in spectral efficiency and the ability to serve a diverse range of users with different requirements. (Ahmadi, 2019)

---

### 1. NOMA Principles and Concepts

#### 1.1 The Problem with Orthogonal Multiple Access (OMA)

*   **Limited Spectral Efficiency:** OMA schemes like OFDMA (Orthogonal Frequency Division Multiple Access) and SC-FDMA (Single Carrier Frequency Division Multiple Access) allocate orthogonal resources to each user. While ensuring no inter-user interference (IUI) within these resources, this orthogonality leads to underutilization of the available spectrum, especially when users have significantly different channel strengths.
*   **Fairness vs. Efficiency Trade-off:** In OMA, users with poor channel conditions may require more resources to achieve a certain data rate, potentially impacting the resources available for users with better channels. This creates a trade-off between ensuring minimum service quality for all and maximizing overall system throughput.

#### 1.2 NOMA: The Core Idea

*   **Superposition Coding (SC) at the Transmitter:** At the transmitter (e.g., base station), the signals of multiple users are combined using superposition coding. This means the signals are added together, typically with power allocation coefficients.
*   **Power Domain Multiplexing:** NOMA multiplexes users in the power domain. Users with better channel conditions are allocated lower transmit power, while users with poorer channel conditions are allocated higher transmit power. This is counter-intuitive to OMA where better channels typically get more resources.
*   **Successive Interference Cancellation (SIC) at the Receiver:** At the receiver, users with better channel conditions are tasked with performing successive interference cancellation (SIC) to remove the signals of users with poorer channel conditions that share the same resources. The user with the best channel condition will decode its own signal first, then cancel it from the combined signal, and then the next user with the second best channel decodes its signal, and so on.

**Example:**
Imagine two users, User A with a strong channel and User B with a weak channel, sharing the same frequency band.
*   **Transmitter:** Combines the signal for User A and User B using superposition coding, assigning higher power to User B's signal and lower power to User A's signal.
*   **Receiver (User A):** Receives a stronger signal from User B (due to higher power) and a weaker signal from itself. User A performs SIC by first decoding User B's signal, then subtracting it from the received signal, leaving its own signal.
*   **Receiver (User B):** Receives a stronger signal from itself and a weaker signal from User A. Since User B's channel is weak, it experiences less interference from User A and can directly decode its signal.

(Dahlman, Skold, & Parkvall, 2016) explains that NOMA leverages the received signal strength differences to facilitate this multiplexing.

#### 1.3 Key NOMA Schemes

There are two primary categories of NOMA:

*   **Code Domain NOMA (CD-NOMA):** This scheme utilizes different spreading codes or sequences for different users sharing the same time and frequency resources. Users are distinguished by these unique codes. An example is Sparse Code Multiple Access (SCMA).
*   **Power Domain NOMA (PD-NOMA):** This is the most widely discussed and implemented form of NOMA. It uses superposition coding at the transmitter and SIC at the receiver, differentiating users based on their allocated power levels.

**Focus of this study will be on Power Domain NOMA (PD-NOMA) as it's the dominant approach for 5G.**

#### 1.4 Channel Conditions and User Pairing

*   **Intra-cell NOMA:** NOMA is primarily applied within a single cell. Users are paired based on their channel quality.
*   **Pairing Strategy:** In PD-NOMA, users are typically paired such that one user has a significantly better channel condition than the other. This is crucial for the SIC process to be effective.
    *   **"NOMA Grouping":** A common approach is to group a "strong" user (good channel) with a "weak" user (poor channel). The weak user's signal is transmitted at a higher power.

**Important Point:** The effectiveness of PD-NOMA relies heavily on the difference in channel quality between paired users.

---

### 2. NOMA System Design and Operation

#### 2.1 Transmitter Design (Superposition Coding)

*   **Signal Construction:** The transmitted signal $x$ is a linear combination of the individual user signals $x_i$:
    $x = \sum_{i=1}^{N} \sqrt{P_i} s_i$
    where $s_i$ is the symbol for user $i$, $P_i$ is the allocated power for user $i$, and $N$ is the number of users sharing the resource.
*   **Power Allocation:** Power is allocated inversely to channel quality. Users with better channels ($h_i$ large) receive lower power, and users with worse channels ($h_i$ small) receive higher power.
    $P_1 > P_2 > ... > P_N$
    where user 1 has the weakest channel and user N has the strongest channel.

#### 2.2 Receiver Design (Successive Interference Cancellation - SIC)

*   **Decoding Order:** The receiver decodes the signals in order of their received signal strength. The user with the strongest received signal (which corresponds to the user with the weakest channel and highest transmitted power) is decoded first.
*   **SIC Process:**
    1.  **Decode Weakest User:** The user with the strongest received signal (e.g., User N, with the weakest channel) decodes its signal $s_N$.
    2.  **Reconstruct and Subtract:** The decoded signal $s_N$ is then multiplied by its allocated power $\sqrt{P_N}$ to reconstruct the interference term $\sqrt{P_N}s_N$. This reconstructed interference is subtracted from the total received signal.
    3.  **Decode Next Strongest User:** The remaining signal is then processed to decode the next user with the second strongest received signal (e.g., User N-1). This process continues until all users' signals are decoded.

**Example (Two Users, User 1 Weak Channel, User 2 Strong Channel):**
*   **Transmitter:** $x = \sqrt{P_1}s_1 + \sqrt{P_2}s_2$, where $P_1 > P_2$.
*   **User 1 (Weak Channel):** Receives $y_1 = h_1 (\sqrt{P_1}s_1 + \sqrt{P_2}s_2) + n_1$. User 1 decodes its signal $s_1$.
*   **User 2 (Strong Channel):** Receives $y_2 = h_2 (\sqrt{P_1}s_1 + \sqrt{P_2}s_2) + n_2$.
    *   User 2 first decodes the signal with the higher power, which is $s_1$ (transmitted with $P_1$).
    *   User 2 then reconstructs the interference: $\hat{I}_1 = h_2 \sqrt{P_1}s_1$.
    *   User 2 subtracts this interference from the received signal: $y_{2, \text{residual}} = y_2 - \hat{I}_1 = h_2 \sqrt{P_2}s_2 + n_2$.
    *   Finally, User 2 decodes its signal $s_2$ from $y_{2, \text{residual}}$.

(Ahmadi, 2019) elaborates on the decoding order and the impact of channel gain difference on SIC performance.

#### 2.3 Advantages of NOMA

*   **Enhanced Spectral Efficiency:** By allowing users to share the same time and frequency resources, NOMA can achieve higher overall spectral efficiency compared to OMA.
*   **Increased User Capacity:** NOMA can support a larger number of users within a given bandwidth, especially in scenarios with diverse channel conditions. This is crucial for mMTC.
*   **Improved Fairness (Potential):** While NOMA relies on channel differences, proper power allocation and SIC can offer better fairness in terms of throughput compared to OMA schemes where weak users might be starved.
*   **Reduced Latency:** By allowing users to access resources more efficiently, NOMA can contribute to reduced latency, supporting URLLC requirements.

#### 2.4 Challenges and Limitations of NOMA

*   **Complexity at the Receiver:** SIC is computationally intensive and requires accurate channel state information (CSI) at the receiver.
*   **Imperfect SIC:** In practical scenarios, SIC is never perfect. Residual interference from the canceled signal can degrade the performance of subsequent decoding stages, especially for users with good channels.
*   **Channel Estimation Accuracy:** The performance of NOMA is highly sensitive to the accuracy of channel estimation. Errors in CSI can lead to incorrect decoding order or failed interference cancellation.
*   **Mobility:** For mobile users, channel conditions can change rapidly, making it challenging to maintain accurate CSI and optimal user pairing.
*   **Inter-cell Interference:** While NOMA is primarily intra-cell, managing interference from neighboring cells that also employ NOMA can be complex.

(Cox, 2020) highlights the critical role of accurate CSI in the successful implementation of NOMA.

---

### 3. NOMA in 5G Scenarios

#### 3.1 eMBB (Enhanced Mobile Broadband)

*   **Higher Throughput:** NOMA can boost the aggregate throughput by allowing multiple users to share resources efficiently.
*   **Meeting Peak Data Rates:** By optimizing resource utilization, NOMA can help meet the high peak data rate requirements of eMBB.

#### 3.2 mMTC (massive Machine Type Communications)

*   **Serving Many Devices:** NOMA's ability to support a large number of users with potentially low data rates makes it ideal for mMTC applications, such as IoT deployments.
*   **Low Power Consumption:** Efficient resource allocation can contribute to lower power consumption for these devices.

#### 3.3 URLLC (Ultra-Reliable Low-Latency Communications)

*   **Reduced Latency:** By maximizing spectral efficiency and minimizing the need for complex scheduling, NOMA can help achieve the ultra-low latency required for applications like autonomous driving and industrial automation.
*   **Reliability:** While NOMA introduces complexity, careful design can ensure reliability for critical communication links.

#### 3.4 Hybrid NOMA/OMA Schemes

*   **Combining Strengths:** Many advanced 5G systems consider hybrid approaches that combine NOMA and OMA to leverage the benefits of both. For instance, NOMA could be used for users with significantly different channel conditions, while OMA is used for users with similar channel conditions.
*   **Flexible Resource Allocation:** This allows for flexible resource allocation based on the specific needs of different users and services.

(Prasad, 2016) discusses the evolving landscape of 5G, where techniques like NOMA are integral to achieving its diverse service requirements.

---

### 4. NOMA Evolution and Future Directions

#### 4.1 Advanced NOMA Techniques

*   **Dynamic User Pairing:** Developing algorithms for dynamically pairing users based on real-time channel conditions and traffic demands.
*   **Multi-level SIC:** Implementing more sophisticated SIC techniques to mitigate the impact of imperfect cancellation.
*   **MIMO-NOMA:** Combining NOMA with Multiple-Input Multiple-Output (MIMO) antenna techniques to further enhance spectral efficiency and user capacity.
*   **Device-to-Device (D2D) NOMA:** Extending NOMA principles to facilitate direct communication between devices, reducing reliance on the base station.

#### 4.2 NOMA in Next-Generation Networks (Beyond 5G)

*   **Further Integration:** NOMA is expected to play an even more significant role in future wireless communication systems, potentially evolving into more advanced forms of spectrum sharing.
*   **AI/ML for NOMA Optimization:** Leveraging Artificial Intelligence and Machine Learning to optimize NOMA parameters, user pairing, and SIC processes for improved performance and adaptability.

(Yuan & Yuan, 2022) delve into the latest advancements and future trends in NOMA, including its role in upcoming wireless generations.

---

### Key Points to Remember

*   NOMA multiplexes users in the **power domain**, unlike OMA which uses time, frequency, or code domains.
*   **Superposition Coding (SC)** at the transmitter and **Successive Interference Cancellation (SIC)** at the receiver are the core NOMA mechanisms.
*   NOMA requires a significant **difference in channel quality** between paired users for effective operation.
*   **Stronger users cancel interference** from weaker users.
*   NOMA aims to improve **spectral efficiency, user capacity, and can contribute to lower latency.**
*   **Receiver complexity and imperfect SIC** are key challenges.
*   NOMA is a critical technology for enabling **eMBB, mMTC, and URLLC** services in 5G.

---

### Practice Questions and Answers

**Question 1:** What is the fundamental difference between Orthogonal Multiple Access (OMA) and Non-Orthogonal Multiple Access (NOMA) in terms of resource allocation?

**Answer 1:** OMA allocates orthogonal resources (time, frequency, or code) to different users, ensuring no interference within these allocated resources. NOMA allows multiple users to share the same time and frequency resources, differentiating them by their power levels and exploiting differences in channel quality.

**Question 2:** Explain the roles of Superposition Coding and Successive Interference Cancellation in Power Domain NOMA.

**Answer 2:** Superposition Coding at the transmitter combines the signals of multiple users into a single transmitted signal, typically with different power levels allocated based on channel conditions. Successive Interference Cancellation (SIC) at the receiver allows users to sequentially decode their own signal and then remove the interference from other users' signals that share the same resources.

**Question 3:** Why is a significant difference in channel quality between paired users important for Power Domain NOMA?

**Answer 3:** A significant difference in channel quality is crucial for PD-NOMA because it enables the Successive Interference Cancellation (SIC) process. The user with the better channel (and thus higher received signal strength) can effectively decode the signal of the user with the poorer channel (and lower received signal strength) and then cancel its interference, allowing it to decode its own signal. Without this difference, SIC would be difficult or impossible to perform.

**Question 4:** What are two major advantages of NOMA for 5G networks?

**Answer 4:**
1.  **Enhanced Spectral Efficiency:** By allowing users to share resources, NOMA can achieve higher data rates within the same bandwidth.
2.  **Increased User Capacity:** NOMA can support a larger number of users, which is particularly beneficial for massive Machine Type Communications (mMTC).

**Question 5:** Briefly describe a major challenge in implementing NOMA.

**Answer 5:** A major challenge is the **receiver complexity**, particularly the computational overhead associated with performing Successive Interference Cancellation (SIC). Additionally, **imperfect SIC** can lead to residual interference, degrading performance, and accurate **channel estimation** is critical.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References

*   Dahlman, E., Skold, J., & Parkvall, S. (2016). *4G, LTE-Advanced Pro and The Road to 5G* (3rd ed.). Academic Press.
*   Ahmadi, S. (2019). *5G NR: Architecture, Technology, Implementation, and Operation of 3GPP New Radio Standards*. Academic Press.
*   Cox, C. (2020). *An Introduction to 5G: The New Radio, 5G Network and Beyond*. Wiley.
*   Yuan, Y., & Yuan, Z. (2022). *5G New Radio Non-Orthogonal Multiple Access*. CRC Press.
*   Prasad, R. (2016). *5G Outlook – Innovations and Applications*. River Publishers.

---