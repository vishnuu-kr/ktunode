---
title: "Introduction to Multiple Access techniques"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 3: Introduction to Wireless Communication"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed28"
status: "completed"
scrapedAt: "2026-05-23T17:59:01.308Z"
---
## ADVANCED COMMUNICATION THEORY
### Module 3: Introduction to Wireless Communication
### Topic: Introduction to Multiple Access Techniques

---

### 1. Learning Outcomes

This module aims to equip students with the fundamental understanding of how multiple users can share a limited wireless resource. Upon successful completion of this topic, students will be able to:

*   **Understand the fundamental need for multiple access techniques in wireless communication.**
*   **Explain the basic principles of the major multiple access techniques: FDMA, TDMA, CDMA, and OFDMA.**
*   **Compare and contrast the advantages and disadvantages of different multiple access techniques.**
*   **Relate the choice of multiple access technique to factors like spectral efficiency, complexity, and robustness to channel conditions.**
*   **Appreciate the role of multiple access in enabling efficient wireless system design.**

---

### 2. Course Outcomes Alignment

This topic directly contributes to the following Course Outcomes:

*   **CO4: Explain the basic Principle of wireless communication techniques (Knowledge Level: K2)** - This topic forms a cornerstone of wireless communication principles by explaining how multiple users share the wireless medium.
*   **CO1: Explain information theory measures such as entropy, conditional entropy, mutual information (Knowledge Level: K2)** - While not directly calculating these, understanding the need for efficient resource sharing implicitly relates to maximizing information transmission within constraints, a core information theory concept.

---

### 3. Introduction to Multiple Access Techniques

The wireless spectrum is a finite and valuable resource. In any wireless communication system, there will likely be multiple users who wish to communicate simultaneously. **Multiple Access (MA)** techniques are designed to allow these users to share the available wireless resources (e.g., bandwidth, time, power, or codes) efficiently and without interfering with each other, or at least with manageable interference.

**Why do we need Multiple Access?**

*   **Resource Sharing:** To allow many users to access a single wireless infrastructure.
*   **Spectral Efficiency:** To maximize the number of users or the data rate that can be supported within a given bandwidth.
*   **Economic Viability:** To make wireless services affordable and accessible.
*   **Interference Management:** To control and minimize interference between users.

**(Rappaport, 2022)** emphasizes that MA techniques are fundamental to cellular system design, enabling the partitioning of the available spectrum among many users.

---

### 4. Key Multiple Access Techniques

Historically, and in modern systems, several MA techniques have evolved. The most prominent ones are:

#### 4.1. Frequency Division Multiple Access (FDMA)

*   **Concept:** In FDMA, the total available bandwidth is divided into several narrower, non-overlapping frequency channels. Each user is allocated a dedicated frequency channel for their communication.
*   **Principle:** Different users transmit on different frequencies.
*   **Analogy:** Imagine a radio station lineup. Each station broadcasts on a specific frequency, and your radio tunes into one to listen.
*   **Key Features:**
    *   **Simplicity:** Relatively easy to implement.
    *   **Guard Bands:** Small gaps (guard bands) are needed between adjacent channels to prevent adjacent channel interference (ACI).
    *   **Fixed Allocation:** Each user gets a fixed frequency slot, regardless of their immediate need. This can be inefficient if a user is inactive.
    *   **Bandwidth Inefficiency:** The guard bands consume valuable bandwidth.
*   **Example:** Early analog cellular systems like AMPS (Advanced Mobile Phone System) used FDMA. FM radio channels are also a prime example of FDMA.
*   **Textbook Reference:** **Goldsmith (2005)** discusses FDMA as a fundamental multiplexing technique in wireless systems, highlighting its simplicity and the trade-offs involving guard bands.

#### 4.2. Time Division Multiple Access (TDMA)

*   **Concept:** In TDMA, the total available time is divided into time slots. Users are allocated specific time slots within a recurring frame to transmit or receive.
*   **Principle:** Different users transmit at different times on the same frequency.
*   **Analogy:** A group of people taking turns to speak at a meeting. Each person gets a specific time slot to talk.
*   **Key Features:**
    *   **Time Slots:** Users transmit in allocated time slots.
    *   **Guard Times:** Small gaps (guard times) are needed between time slots to account for timing synchronization and pulse shaping.
    *   **Dynamic Allocation (Potential):** Can be more efficient than FDMA if time slots can be dynamically allocated based on user demand.
    *   **Synchronization:** Requires precise timing synchronization among users.
    *   **Interference:** Adjacent users in time can still interfere if guard times are insufficient or if signals are too strong.
*   **Example:** GSM (Global System for Mobile Communications) is a classic example of a TDMA system, where each carrier frequency is divided into 8 time slots.
*   **Textbook Reference:** **Rappaport (2022)** details the principles of TDMA, including the concept of time slots, frames, and the challenges of synchronization.

#### 4.3. Code Division Multiple Access (CDMA)

*   **Concept:** In CDMA, users are distinguished by unique spreading codes. All users transmit simultaneously on the same frequency band. The spreading codes allow the receiver to selectively extract a specific user's signal from the composite signal.
*   **Principle:** Different users transmit on the same frequency and at the same time, but use unique "codes" to separate their signals.
*   **Analogy:** Imagine a room where multiple conversations are happening simultaneously, but each conversation is in a different language. If you only understand one language, you can focus on that conversation and ignore the others.
*   **Key Features:**
    *   **Spreading Codes:** Each user is assigned a unique pseudo-random noise (PN) code.
    *   **Simultaneous Transmission:** All users can transmit at the same time on the same frequency band.
    *   **Interference as Noise:** Signals from other users appear as background noise to a specific user's receiver.
    *   **Processing Gain:** The spreading process spreads the user's signal over a wider bandwidth, which provides a "processing gain" that helps in rejecting other users' signals.
    *   **Soft Capacity:** CDMA systems have a "soft capacity" – as more users are added, the overall performance degrades gracefully rather than abruptly failing.
    *   **Complexity:** Requires more complex signal processing at the receiver.
*   **Example:** IS-95 (cdmaOne) and later W-CDMA (used in 3G) are well-known CDMA systems.
*   **Textbook Reference:** **Goldsmith (2005)** provides a thorough explanation of CDMA, including the concept of spreading, despreading, processing gain, and the performance implications in multipath fading channels. **Tse and Viswanath (2005)** also delve deeply into the information-theoretic aspects of CDMA.

#### 4.4. Orthogonal Frequency Division Multiple Access (OFDMA)

*   **Concept:** OFDMA is a multi-user version of Orthogonal Frequency Division Multiplexing (OFDM). It divides the total available bandwidth into a large number of closely spaced orthogonal subcarriers. Users are then allocated subsets of these subcarriers for their transmissions.
*   **Principle:** Users transmit on different subsets of orthogonal subcarriers.
*   **Analogy:** Think of a large orchestra where different sections (strings, brass, percussion) play different parts of the music simultaneously. The conductor ensures they play in harmony.
*   **Key Features:**
    *   **Orthogonal Subcarriers:** The subcarriers are orthogonal to each other, meaning they do not interfere with each other even though they are closely spaced. This eliminates the need for guard bands between subcarriers.
    *   **Flexibility:** Allows for flexible resource allocation by assigning different numbers of subcarriers to different users based on their needs and channel conditions.
    *   **Robustness to Multipath:** OFDM (and thus OFDMA) is inherently robust to multipath fading because each subcarrier experiences a relatively flat fading channel.
    *   **Complexity:** Requires complex signal processing for modulation/demodulation and synchronization.
    *   **Peak-to-Average Power Ratio (PAPR):** Can suffer from high PAPR, requiring linear power amplifiers.
*   **Example:** Wi-Fi standards (like 802.11a/g/n/ac/ax) and 4G LTE and 5G mobile communication systems widely use OFDMA.
*   **Textbook Reference:** **Goldsmith (2005)** and **Rappaport (2022)** discuss OFDM as a modulation technique and its extension to OFDMA for multiple access, highlighting its advantages in frequency-selective fading environments.

---

### 5. Comparison of Multiple Access Techniques

| Feature           | FDMA                                | TDMA                                  | CDMA                                       | OFDMA                                      |
| :---------------- | :---------------------------------- | :------------------------------------ | :----------------------------------------- | :----------------------------------------- |
| **Resource Used** | Frequency                           | Time                                  | Code                                       | Frequency (subcarriers) and Time           |
| **User Separation** | Separate frequency channels         | Separate time slots                   | Unique spreading codes                     | Orthogonal subcarrier subsets              |
| **Simultaneity**  | Users transmit on different Freq. | Users transmit in different Times     | All users transmit simultaneously on same Freq. | Users transmit simultaneously on different subcarriers |
| **Interference**  | Adjacent Channel Interference (ACI) | Co-channel Interference (CCI), adjacent slot interference | Other users' signals (as noise)        | Inter-carrier interference (if not orthogonal), inter-user interference |
| **Spectral Efficiency** | Moderate                            | Moderate                              | High                                       | Very High                                  |
| **Complexity**    | Low                                 | Moderate (synchronization)            | High (spreading/despreading)               | High (FFT/IFFT, synchronization)           |
| **Robustness to Multipath** | Poor (unless equalization)          | Poor (unless equalization)            | Good (due to processing gain)              | Very Good (inherent in OFDM)               |
| **Capacity**      | Fixed (by spectrum division)        | Fixed (by time slot division)         | Soft (graceful degradation)                | Flexible, high                             |
| **Guard Resources** | Guard Bands                         | Guard Times                           | N/A (code separation)                      | N/A (subcarrier orthogonality), potential cyclic prefix |
| **Examples**      | AMPS, FM radio                      | GSM                                   | IS-95, W-CDMA                              | 4G LTE, 5G, Wi-Fi (802.11a/g/n/ac/ax)        |

**Important Point to Remember:** The choice of MA technique depends on the specific requirements of the wireless system, including desired spectral efficiency, power constraints, complexity tolerance, and the nature of the wireless channel.

---

### 6. Practice Questions and Exercises

**Question 1:**
Which multiple access technique divides the available spectrum into a large number of closely spaced orthogonal subcarriers?
a) FDMA
b) TDMA
c) CDMA
d) OFDMA

**Answer:** d) OFDMA

**Question 2:**
Explain the primary mechanism by which users are separated in CDMA. What is the benefit of this mechanism?

**Answer:**
In CDMA, users are separated by unique spreading codes (pseudo-random noise codes). The benefit of this is that all users can transmit simultaneously on the same frequency band. The spreading codes allow the receiver to selectively extract the desired user's signal by correlating it with the correct code, effectively treating other users' signals as background noise. This also provides a "processing gain" which aids in interference rejection.

**Question 3:**
Consider a simple wireless system that needs to support multiple users. If the primary concern is simplicity of implementation, which multiple access technique might be a suitable initial choice? Explain why.

**Answer:**
FDMA might be a suitable initial choice due to its simplicity of implementation. It involves dividing the bandwidth into separate channels, which is conceptually straightforward. However, it has drawbacks like inefficient use of bandwidth due to guard bands and fixed allocation, which can limit the number of users or overall system capacity compared to more advanced techniques.

**Question 4:**
Discuss the main challenge associated with TDMA and how it is addressed.

**Answer:**
The main challenge associated with TDMA is **timing synchronization**. Users need to transmit their data in precisely allocated time slots. To address this, guard times are introduced between consecutive time slots. These guard times provide a buffer to account for variations in transmission timing and allow for the settling of transmitted signals, preventing interference between users whose time slots are adjacent.

**Question 5:**
How does OFDMA achieve high spectral efficiency and robustness to multipath fading?

**Answer:**
OFDMA achieves high spectral efficiency by using a large number of closely spaced **orthogonal subcarriers**. This orthogonality means that even though the subcarriers are close, they do not interfere with each other, eliminating the need for guard bands between them, thus maximizing bandwidth utilization.

OFDMA is robust to multipath fading because the total bandwidth is divided into many narrow subcarriers. Each subcarrier experiences a relatively **flat fading channel** compared to a single wideband channel. This means that fading on one subcarrier does not necessarily affect all subcarriers, making the system less susceptible to the deep fades that can occur in frequency-selective channels.

---

### 7. Key Points to Remember

*   **The fundamental purpose of multiple access techniques is to enable efficient sharing of limited wireless resources among multiple users.**
*   **FDMA:** Divides spectrum into separate frequency channels. Simple but less spectrally efficient.
*   **TDMA:** Divides time into slots, with users transmitting sequentially on the same frequency. Requires synchronization.
*   **CDMA:** Users share the same frequency and time but are separated by unique codes. Offers good interference rejection and soft capacity.
*   **OFDMA:** Divides spectrum into orthogonal subcarriers, allocating subsets to users. Highly spectrally efficient and robust to multipath.
*   **Trade-offs exist:** No single MA technique is optimal for all scenarios. The choice involves balancing spectral efficiency, complexity, power consumption, and performance in various channel conditions.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 8. Further Reading and References

*   **Goldsmith, A. (2005).** *Wireless Communications.* Cambridge University Press. (Chapters on multiple access, particularly FDMA, TDMA, CDMA).
*   **Rappaport, T. S. (2022).** *Wireless communication: Principles and Practice.* Pearson Education. (Chapters on multiple access techniques, including FDMA, TDMA, CDMA, and OFDMA).
*   **Schiller, J. (2008).** *Mobile Communications.* Pearson. (Provides a good overview of MA techniques in the context of mobile systems).
*   **Molisch, A. F. (2013).** *Wireless Communications.* Wiley India Publications. (Likely covers MA techniques from a system-level perspective).

---