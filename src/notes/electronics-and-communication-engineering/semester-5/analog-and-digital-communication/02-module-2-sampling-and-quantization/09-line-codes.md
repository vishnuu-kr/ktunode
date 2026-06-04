---
title: "Line codes."
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 2: Sampling and Quantization"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe908"
status: "completed"
scrapedAt: "2026-05-23T17:52:54.051Z"
---
# ANALOG AND DIGITAL COMMUNICATION

## Module 2: Sampling and Quantization

## Topic: Line Codes

---

### 1. Introduction to Line Codes

**Definition:** Line codes, also known as digital baseband signaling or digital line formats, are the specific waveform patterns used to represent digital data (binary 1s and 0s) as electrical signals for transmission over a physical communication channel. These signals are typically voltage levels or current pulses.

**Purpose:**
*   **Efficient Transmission:** To represent digital data in a way that can be reliably transmitted over a physical medium (e.g., twisted pair cables, optical fibers, coaxial cables).
*   **Synchronization:** To facilitate clock recovery at the receiver for proper sampling of the received signal.
*   **DC Component:** Some line codes avoid a DC component to prevent issues in transformer-coupled systems or when transmitting over channels that block DC.
*   **Error Detection/Correction:** Some line codes inherently provide a degree of error detection.
*   **Bandwidth Efficiency:** To minimize the bandwidth required for transmission.
*   **Noise Immunity:** To be resilient to noise and interference.

**Key Concepts:**
*   **Unipolar vs. Bipolar:**
    *   **Unipolar:** Uses only one polarity of voltage (e.g., positive voltage for '1' and zero voltage for '0').
    *   **Bipolar:** Uses two polarities of voltage (e.g., positive voltage for '1', negative voltage for '0', or alternating polarities for consecutive bits).
*   **Return-to-Zero (RZ) vs. Non-Return-to-Zero (NRZ):**
    *   **RZ:** The signal returns to zero level between consecutive pulses or within a single pulse. This aids in synchronization.
    *   **NRZ:** The signal remains at its non-zero level throughout the duration of a bit.
*   **Signaling Rate (Symbol Rate):** The number of signal elements transmitted per second.
*   **Bit Rate:** The number of bits transmitted per second.
*   **Bandwidth:** The range of frequencies required to transmit the signal with acceptable fidelity.

---

### 2. Common Line Codes and Their Characteristics

This section explores various line codes, their representations, and their advantages/disadvantages.

#### 2.1. Unipolar NRZ (NRZ-L and NRZ-I)

**2.1.1. Unipolar NRZ-L (NRZ Level)**

*   **Description:** The voltage level is held constant for the entire duration of a bit.
    *   '1' is represented by a positive voltage (e.g., +A).
    *   '0' is represented by zero voltage (0V).
*   **Waveform Example:**
    ```
    Bit Sequence: 1 0 1 1 0
    Waveform:    +A------- 0--- +A---+A--- 0---
    ```
*   **Advantages:** Simple to implement.
*   **Disadvantages:**
    *   **DC Component:** Has a DC component if the number of 1s and 0s is unequal, which can be problematic for AC-coupled systems.
    *   **Synchronization:** Prone to synchronization issues during long sequences of 1s or 0s, as there are no transitions to help the receiver maintain clock timing.
    *   **Bandwidth:** Requires a bandwidth proportional to the bit rate ($B \propto R_b$). The minimum bandwidth required is $R_b/2$.

**2.1.2. Unipolar NRZ-I (NRZ Invert)**

*   **Description:** The voltage level is held constant for the entire duration of a bit.
    *   A '1' is represented by a **transition** (inversion) of the signal at the beginning of the bit interval.
    *   A '0' is represented by **no transition** at the beginning of the bit interval. The signal level continues from the previous bit.
*   **Waveform Example:**
    ```
    Bit Sequence: 1 0 1 1 0
    Waveform:    +A-|---- |-A--- +A-|---- |-A---
    (Assuming starting with +A)
    ```
    *   Bit 1: Transition from +A to -A.
    *   Bit 0: No transition, continues at -A.
    *   Bit 1: Transition from -A to +A.
    *   Bit 1: Transition from +A to -A.
    *   Bit 0: No transition, continues at -A.
*   **Advantages:** Better synchronization than NRZ-L due to transitions for every '1'.
*   **Disadvantages:**
    *   **DC Component:** Still has a DC component if the number of 1s and 0s is unequal.
    *   **Synchronization:** Still vulnerable to synchronization issues during long sequences of 0s.
    *   **Bandwidth:** Similar bandwidth requirements as NRZ-L ($B \propto R_b$). Minimum bandwidth is $R_b/2$.

---

#### 2.2. Polar NRZ (NRZ-L and NRZ-I)

**2.2.1. Polar NRZ-L (NRZ Level)**

*   **Description:** Uses two distinct voltage levels, with opposite polarities, for the two binary symbols.
    *   '1' is represented by a positive voltage (e.g., +A).
    *   '0' is represented by a negative voltage (e.g., -A).
*   **Waveform Example:**
    ```
    Bit Sequence: 1 0 1 1 0
    Waveform:    +A------- -A------- +A------- +A------- -A-------
    ```
*   **Advantages:** More robust to noise than unipolar schemes because the receiver can distinguish between +A and -A more easily than between +A and 0V. No DC component if the number of 1s and 0s is equal.
*   **Disadvantages:** Synchronization issues during long sequences of 1s or 0s.
*   **Bandwidth:** Minimum bandwidth is $R_b/2$.

**2.2.2. Polar NRZ-I (NRZ Invert)**

*   **Description:** Uses two distinct voltage levels.
    *   A '1' is represented by a **transition** at the beginning of the bit interval.
    *   A '0' is represented by **no transition** at the beginning of the bit interval.
*   **Waveform Example:**
    ```
    Bit Sequence: 1 0 1 1 0
    Waveform:    +A-|---- |-A--- +A-|---- |-A---
    (Assuming starting with +A)
    ```
*   **Advantages:** Better synchronization than Polar NRZ-L due to transitions for every '1'. No DC component if the number of 1s and 0s is equal.
*   **Disadvantages:** Synchronization issues during long sequences of 0s.
*   **Bandwidth:** Minimum bandwidth is $R_b/2$.

---

#### 2.3. Bipolar Schemes

**2.3.1. Bipolar Alternate Mark Inversion (AMI) / Manchester Encoding**

*   **Description:** A variation of bipolar signaling.
    *   A '0' is represented by a zero voltage (0V).
    *   A '1' is represented by alternating polarity pulses of equal duration. The pulse for a '1' has one polarity, and the next '1' has the opposite polarity.
*   **Waveform Example:**
    ```
    Bit Sequence: 1 0 1 1 0
    Waveform:    +A---| 0---- -A---| +A---| 0----
    (Assuming starting with +A for the first '1')
    ```
    *   Bit 1: +A for the duration of the bit.
    *   Bit 0: 0V for the duration of the bit.
    *   Bit 1: -A for the duration of the bit.
    *   Bit 1: +A for the duration of the bit.
    *   Bit 0: 0V for the duration of the bit.
*   **Advantages:**
    *   **No DC Component:** Eliminates the DC component.
    *   **Synchronization:** Provides better synchronization than NRZ schemes because each '1' causes a transition, and zeros also provide a distinct level. Long sequences of zeros are handled well.
*   **Disadvantages:** Requires more bandwidth than NRZ schemes. The bandwidth requirement is approximately $R_b$.
*   **Note:** While the name "Manchester Encoding" is often associated with a specific type of RZ bipolar signaling (transition in the middle of each bit for synchronization, with polarity changes for '1's), Bipolar AMI is distinct. The description above is for Bipolar AMI.

**2.3.2. Manchester Encoding**

*   **Description:** A self-clocking line code where each bit is represented by a transition in the middle of the bit interval.
    *   '0' is represented by a high-to-low transition in the middle of the bit interval.
    *   '1' is represented by a low-to-high transition in the middle of the bit interval.
*   **Waveform Example:**
    ```
    Bit Sequence: 1 0 1 1 0
    Waveform:    +A---|-A +A---|-A -A---|-A +A---|-A -A---|-A
    (Assuming starting with high for '1' and low for '0' and a transition in the middle)
    ```
    *   Bit 1: Starts high, transitions to low in the middle.
    *   Bit 0: Starts low, transitions to high in the middle.
    *   Bit 1: Starts high, transitions to low in the middle.
    *   Bit 1: Starts high, transitions to low in the middle.
    *   Bit 0: Starts low, transitions to high in the middle.
*   **Advantages:**
    *   **Self-Clocking:** Guarantees a transition in every bit interval, allowing for reliable clock recovery at the receiver.
    *   **No DC Component:** Does not have a DC component.
*   **Disadvantages:** Requires twice the bandwidth of NRZ schemes ($B = R_b$). Inefficient in terms of bandwidth.

---

#### 2.4. Pseudoternary Schemes

**2.4.1. Biphase Mark (or Differential Manchester)**

*   **Description:** Similar to Manchester encoding but with a slightly different convention for '0' and '1'.
    *   A '1' is represented by a transition in the middle of the bit interval, and the signal level at the start of the interval is the same as the previous bit's start.
    *   A '0' is represented by a transition in the middle of the bit interval, and the signal level at the start of the interval is opposite to the previous bit's start.
*   **Waveform Example:**
    ```
    Bit Sequence: 1 0 1 1 0
    Waveform:    +A---|-A +A---| +A---|-A +A---| +A---|-A
    (Assuming starting with high, and transitions in middle)
    ```
    *   Bit 1: Starts same as previous bit, transitions in the middle.
    *   Bit 0: Starts opposite to previous bit, transitions in the middle.
    *   Bit 1: Starts same as previous bit, transitions in the middle.
    *   Bit 1: Starts same as previous bit, transitions in the middle.
    *   Bit 0: Starts opposite to previous bit, transitions in the middle.
*   **Advantages:** Self-clocking, no DC component.
*   **Disadvantages:** Requires twice the bandwidth of NRZ schemes ($B = R_b$).

**2.4.2. Alternate Mark Inversion (AMI) - Revisited**

*   **Description:** As described earlier, '0' is represented by zero voltage, and '1's alternate between positive and negative pulses.
*   **Advantages:** No DC component. Good synchronization for '1's.
*   **Disadvantages:** Long sequences of '0's can lead to loss of synchronization. Bandwidth requirement is approximately $R_b$.

---

#### 2.5. High-Density Bipolar (HDBn) Codes

**2.5.1. Introduction to HDBn**

*   **Description:** HDBn codes are modifications of Bipolar AMI designed to overcome the synchronization problem caused by long strings of zeros. They insert artificial pulses (violations) in sequences of 'm' zeros to ensure transitions.
*   **HDB1:** Same as Bipolar AMI.
*   **HDB2:** Replaces every pair of consecutive zeros with a violation pulse (e.g., a pulse of the same polarity as the preceding '1' or a pulse of opposite polarity, instead of zero voltage). This ensures at least one transition every three bits.
*   **HDB3:** Replaces every sequence of four consecutive zeros with a code word that includes a pulse, ensuring at least one transition every four bits.

---

#### 2.6. Scrambling Codes

*   **Description:** Scrambling is a technique used to break up long sequences of identical bits (1s or 0s) that can cause synchronization problems and/or DC component issues. Scrambling is typically done by XORing the data with a pseudorandom binary sequence (PRBS).
*   **Example:** A simple scrambling scheme could be to XOR the data with a sequence like `101010...`. If a long string of 0s occurs, the output will be `000000...`. If a long string of 1s occurs, the output will be `101010...`.
*   **Advantages:** Improves synchronization and DC balance without significantly increasing bandwidth requirements.
*   **Disadvantages:** Requires a scrambler at the transmitter and a descrambler at the receiver.

---

### 3. Comparison of Line Codes

| Line Code       | DC Component | Synchronization | Bandwidth (approx.) | Complexity | Advantages                                         | Disadvantages                                                                     |
| :-------------- | :----------- | :-------------- | :------------------ | :--------- | :------------------------------------------------- | :-------------------------------------------------------------------------------- |
| Unipolar NRZ-L  | Yes          | Poor            | $R_b/2$             | Low        | Simple                                             | Sync loss, DC offset                                                              |
| Unipolar NRZ-I  | Yes          | Moderate        | $R_b/2$             | Low        | Better sync than NRZ-L                             | Sync loss on 0s, DC offset                                                        |
| Polar NRZ-L     | No (if equal 1s/0s) | Poor            | $R_b/2$             | Low        | Better noise immunity than unipolar                | Sync loss                                                                         |
| Polar NRZ-I     | No (if equal 1s/0s) | Moderate        | $R_b/2$             | Low        | Better sync than Polar NRZ-L                       | Sync loss on 0s                                                                   |
| Bipolar AMI     | No           | Good (for 1s)   | $R_b$               | Medium     | No DC, good sync for 1s                            | Sync loss on long 0s                                                              |
| Manchester      | No           | Excellent       | $2R_b$              | Medium     | Self-clocking, no DC                               | High bandwidth requirement                                                        |
| Biphase Mark    | No           | Excellent       | $2R_b$              | Medium     | Self-clocking, no DC                               | High bandwidth requirement                                                        |
| HDBn (e.g., HDB3) | No           | Very Good       | $R_b$               | High       | No DC, good sync by breaking long 0s               | More complex implementation                                                       |

---

### 4. Learning Outcome Mapping

*   **CO1 (Illustrate the principles of analog communication systems):** While this module is on digital communication, understanding line codes is crucial for how digital information is converted into signals that can be transmitted over channels, which are often influenced by analog principles. Line codes determine the spectral characteristics of the digital signal.
*   **CO2 (Explain the basic concepts of digital communication):** This module directly addresses the fundamental concept of representing digital data as signals.
*   **CO3 (Analyse the baseband transmission of digital data through AWGN channel):** The choice of line code affects the noise immunity and synchronization capabilities, both of which are critical for analyzing performance over an AWGN channel. For example, codes with more transitions generally offer better synchronization but might be more susceptible to certain types of noise.
*   **CO4 (Apply various digital modulation techniques in the design of digital communication systems):** Line codes are the first step in the digital transmission chain, preceding modulation. The characteristics of the line code influence the choice and performance of subsequent modulation schemes (e.g., PSK, FSK, QAM).

---

### 5. Important Points to Remember

*   **Trade-offs:** Line codes involve trade-offs between bandwidth efficiency, synchronization capability, and implementation complexity.
*   **Synchronization is Key:** Robust synchronization is vital for reliable data recovery. Codes that provide frequent transitions are generally preferred for synchronization.
*   **DC Component:** A DC component can cause problems in some communication systems (e.g., AC-coupled amplifiers, transformers). Codes that eliminate or minimize the DC component are often desirable.
*   **Bandwidth:** Different line codes occupy different bandwidths. This is a critical consideration in system design.
*   **No single "best" code:** The optimal line code depends on the specific requirements of the communication system and the channel characteristics.

---

### 6. Practice Questions and Exercises

**Question 1:**
Describe the waveform for the bit sequence `1101001` using Polar NRZ-L encoding, assuming a positive voltage of +V for '1' and a negative voltage of -V for '0'.

**Answer:**
Assuming the signal starts at +V:
*   Bit 1: +V
*   Bit 1: +V
*   Bit 0: -V
*   Bit 1: +V
*   Bit 0: -V
*   Bit 0: -V
*   Bit 1: +V

Waveform: `+V++++ -V +V -V -V +V`

**Question 2:**
What is the primary advantage of Manchester encoding over NRZ-L?

**Answer:**
The primary advantage of Manchester encoding over NRZ-L is its **self-clocking capability**. Manchester encoding guarantees a signal transition in every bit interval (specifically, in the middle of each bit period), which allows the receiver to reliably recover the clock signal for accurate sampling of the data. NRZ-L, on the other hand, can have long sequences of the same voltage level, leading to synchronization loss.

**Question 3:**
Explain why Bipolar AMI has better synchronization properties than Unipolar NRZ-L for sequences of '1's.

**Answer:**
In Unipolar NRZ-L, a sequence of '1's is represented by a continuous high voltage level (e.g., +V), and a sequence of '0's is represented by a zero voltage level (0V). In Bipolar AMI, '0's are represented by 0V, but '1's are represented by alternating positive (+V) and negative (-V) voltage pulses. Therefore, for sequences of '1's, Bipolar AMI has transitions between +V and -V, which helps the receiver maintain synchronization. Unipolar NRZ-L lacks these transitions for consecutive '1's, making it prone to synchronization loss.

**Question 4:**
A digital communication system uses a line code that requires twice the bandwidth of NRZ schemes but offers excellent synchronization. What is a likely line code used?

**Answer:**
Manchester encoding or Biphase Mark encoding. Both of these codes require twice the bandwidth of NRZ schemes ($B \approx 2R_b$) and are self-clocking, providing excellent synchronization.

**Question 5:**
Consider a data stream of `0000`.
a) How would this be represented using Unipolar NRZ-I? Assume the signal starts at +V.
b) How would this be represented using Bipolar AMI? Assume the first bit is '0'.

**Answer:**
a) **Unipolar NRZ-I:** A '0' is represented by no transition.
   *   Bit 1 (0): Starts at +V, no transition, stays at +V.
   *   Bit 2 (0): Starts at +V, no transition, stays at +V.
   *   Bit 3 (0): Starts at +V, no transition, stays at +V.
   *   Bit 4 (0): Starts at +V, no transition, stays at +V.
   Waveform: `+V++++ +V++++ +V++++ +V++++`

b) **Bipolar AMI:** '0' is represented by 0V.
   *   Bit 1 (0): 0V
   *   Bit 2 (0): 0V
   *   Bit 3 (0): 0V
   *   Bit 4 (0): 0V
   Waveform: `0---- 0---- 0---- 0----`

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. Textbook References and Further Reading

*   **Communication Systems by Simon Haykin and Michael Moher (5th Edition):** Chapters often dedicated to digital transmission and baseband signaling provide detailed explanations of line codes. Look for sections on digital baseband transmission, signaling formats, and synchronization.
*   **Modern Digital and Analog Communication Systems by B.P. Lathi and Zhi Ding (5th Edition):** This textbook extensively covers digital modulation and baseband signaling. Chapters on line coding, pulse amplitude modulation (PAM) in baseband, and spectral characteristics of digital signals are relevant.
*   **Introduction to Analog and Digital Communication (Indian adaptation) by Simon Haykin and Michael Moher (2nd Edition):** Similar to the first Haykin book, this will have sections on digital signal representation and line coding.
*   **Digital Communications by John G. Proakis and Masoud Salehi (6th Edition):** This advanced text offers rigorous mathematical treatment of line codes, including their spectral properties and error performance. Chapters on baseband data transmission and coding are highly relevant.
*   **Principles of Communication Systems by Herbert Taub and Donald L. Schilling (4th Edition):** This classic textbook provides foundational knowledge on digital communication, including line coding techniques.

---

This set of notes provides a comprehensive overview of line codes, their properties, and their significance in digital communication systems, aligning with the specified learning and course outcomes.