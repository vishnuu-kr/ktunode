---
title: "Digital data to digital signal – Non-Return-to-Zero (NRZ), Return-to-Zero (RZ), Multilevel binary, Biphase."
subject: "DATA COMMUNICATION"
module: "Module 2: Digital data to digital signal – Non"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bee3"
status: "completed"
scrapedAt: "2026-05-20T16:51:40.318Z"
---
# Data Communication: Module 2 - Digital Data to Digital Signal

## Introduction

This module focuses on how digital data, represented as a sequence of binary digits (0s and 1s), is transformed into digital signals that can be transmitted over a communication channel. Digital signals are characterized by discrete voltage levels. We will explore several encoding schemes that achieve this conversion, each with its own advantages and disadvantages.

---

## Learning Outcomes

Upon completion of this module, you should be able to:

*   Understand the fundamental concept of converting digital data to digital signals.
*   Explain and differentiate between Non-Return-to-Zero (NRZ) encoding schemes.
*   Explain and differentiate between Return-to-Zero (RZ) encoding schemes.
*   Describe and provide examples of Multilevel Binary encoding schemes.
*   Explain and provide examples of Biphase encoding schemes.
*   Analyze the advantages and disadvantages of each encoding technique in terms of bandwidth, error detection, clocking, and power consumption.

---

## 1. Digital Data to Digital Signal: The Basics

Digital data is inherently a sequence of discrete values (0s and 1s). To transmit this data, these binary digits need to be represented by physical signals that vary over time. In the context of digital signaling, these signals are typically voltage levels.

*   **Digital Signal:** A signal that represents binary data by discrete voltage levels. For example, a high voltage might represent a '1', and a low voltage might represent a '0'.
*   **Encoding:** The process of converting binary data into a digital signal. Different encoding schemes use different patterns of voltage levels to represent the bits.

**Key considerations for digital encoding schemes:**

*   **Bandwidth Efficiency:** How effectively the scheme utilizes the available bandwidth.
*   **Synchronization:** The ability of the receiver to maintain clock synchronization with the sender to correctly interpret the received signal. This is crucial for identifying the boundaries between bits.
*   **Error Detection:** The inherent ability of the scheme to detect errors in transmission.
*   **Power Consumption:** The average power required by the signal.
*   **Simplicity of Implementation:** How easy it is to build the encoding and decoding circuitry.

---

## 2. Non-Return-to-Zero (NRZ) Encoding

NRZ schemes are characterized by the fact that the signal does not return to zero between consecutive bits. The voltage level remains constant throughout the duration of each bit.

### 2.1. NRZ-Level (NRZ-L)

*   **Concept:** The level of the signal represents the bit.
    *   **1:** High voltage level.
    *   **0:** Low voltage level.

*   **Example:**
    *   Data: `1011001`
    *   Signal: `High Low High High Low Low High`

*   **Diagram:**

    ```
    Data:   1   0   1   1   0   0   1
    NRZ-L:  --- ----- ----- ----- ----- ----- -----
           |   | |   | |   | |   | |   | |   | |
           ----- ----- ----- ----- ----- ----- -----
    ```

*   **Advantages:**
    *   Simple to implement.
    *   Bandwidth efficient: Each bit occupies one bit duration.

*   **Disadvantages:**
    *   **Lack of Synchronization:** If there is a long string of 0s or 1s, the receiver can lose synchronization because there are no transitions to guide the clock. For example, if the sender sends a long sequence of 1s, the voltage will remain high for an extended period, and the receiver's clock might drift, making it difficult to determine the exact bit boundaries.
    *   **DC Component:** A long string of 0s or 1s creates a DC component in the signal, which can be problematic for transformer coupling and some communication systems.

### 2.2. NRZ-Invert (NRZI)

*   **Concept:** The **change** or **transition** in the signal represents the bit.
    *   **1:** A transition occurs at the beginning of the bit interval (from low to high, or high to low). The level stays the same for the rest of the bit duration.
    *   **0:** No transition occurs at the beginning of the bit interval. The level remains the same as the previous bit.

*   **Example:**
    *   Data: `1011001`
    *   Assume starting level is Low.
    *   Signal: `Low (transition to High) High (no transition) Low (transition to High) High (transition to Low) Low (no transition) Low (transition to High) High`

*   **Diagram:**

    ```
    Data:   1   0   1   1   0   0   1
    NRZI:   ----- ----- ----- ----- ----- ----- -----
           |   | |   | |   | |   | |   | |   | |
           ----- ----- ----- ----- ----- ----- -----
    Initial:Low
    Signal: Low ->H High High ->L Low Low ->H High
    ```

*   **Advantages:**
    *   **Improved Synchronization:** A transition occurs for every '1', which helps maintain clock synchronization.
    *   **Reduced DC Component:** The presence of transitions for '1's helps reduce the long strings of constant voltage, thus reducing the DC component compared to NRZ-L.

*   **Disadvantages:**
    *   **Synchronization for 0s:** If there is a long string of 0s, there are no transitions, and synchronization can still be lost.
    *   **Requires Transition Detector:** Needs a circuit to detect transitions.

---

## 3. Return-to-Zero (RZ) Encoding

RZ schemes are characterized by the signal returning to zero voltage level in the middle of each bit interval. This transition back to zero helps with synchronization.

### 3.1. Standard RZ

*   **Concept:**
    *   **1:** A positive pulse in the first half of the bit interval, followed by a return to zero.
    *   **0:** A negative pulse in the first half of the bit interval, followed by a return to zero.

*   **Example:**
    *   Data: `1011001`
    *   Signal: `High(half)-Zero-Zero(half)-Zero High(half)-Zero High(half)-Zero Low(half)-Zero Low(half)-Zero Low(half)-Zero High(half)-Zero`

*   **Diagram:**

    ```
    Data:   1   0   1   1   0   0   1
    RZ:     --- --- --- --- --- --- --- --- --- --- --- --- --- ---
           |   |   |   |   |   |   |   |   |   |   |   |   |   |
           --- --- --- --- --- --- --- --- --- --- --- --- --- ---
           ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^
           |   |   |   |   |   |   |   |   |   |   |   |   |   |
           --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    Bit:    1   2   3   4   5   6   7   8   9   10  11  12  13  14
    (Each bit is split into two halves)

    Simplified Diagram (assuming positive for 1, negative for 0, zero in middle):
    Data:   1     0     1     1     0     0     1
    RZ:     +     -     +     +     -     -     +
            --0-- --0-- --0-- --0-- --0-- --0-- --0--
             / \   \ /   / \   / \   \ /   \ /   / \
            /   \ / \ /   \ /   \ /   \ /   \ /   \ /
           ---- ---- ---- ---- ---- ---- ---- ----
    ```

*   **Advantages:**
    *   **Excellent Synchronization:** The transition to zero in the middle of each bit interval provides a guaranteed synchronization point, making it robust against clock drift.

*   **Disadvantages:**
    *   **Bandwidth Inefficient:** Requires twice the bandwidth of NRZ because of the extra transitions within each bit duration.
    *   **More Complex:** Requires more complex circuitry for encoding and decoding.
    *   **Power Consumption:** Can consume more power due to more frequent signal transitions.

### 3.2. Manchester Encoding (A form of RZ)

While not strictly "Return-to-Zero" in the same way as standard RZ, Manchester encoding shares the characteristic of having a transition in the middle of each bit, which aids synchronization.

*   **Concept:** Each bit is encoded with a transition in the middle of the bit interval.
    *   **1:** A transition from low to high in the middle of the bit interval.
    *   **0:** A transition from high to low in the middle of the bit interval.
    *   *(Note: The exact convention can be inverted depending on the implementation, but the presence of a mid-bit transition is key.)*

*   **Example:**
    *   Data: `1011001`
    *   Signal: `Low->High (mid) High->Low (mid) Low->High (mid) Low->High (mid) High->Low (mid) High->Low (mid) Low->High (mid)`

*   **Diagram:**

    ```
    Data:   1     0     1     1     0     0     1
    Manch:  --- --- --- --- --- --- --- --- --- --- --- --- --- ---
           |   | |   | |   | |   | |   | |   | |   |
           ----- ----- ----- ----- ----- ----- -----
    Bit:    1   2   3   4   5   6   7   8   9   10  11  12  13  14
    (Each bit is split into two halves)

    Simplified Diagram (assuming Low->High for 1, High->Low for 0):
    Data:   1     0     1     1     0     0     1
    Manch:  _/\_  \_/   _/\_  _/\_  \_/   \_/   _/\_
           ---- ---- ---- ---- ---- ---- ---- ----
    ```

*   **Advantages:**
    *   **Self-Clocking:** The guaranteed transition in the middle of each bit interval ensures reliable synchronization.
    *   **No DC Component:** Balanced transitions (equal number of positive and negative pulses over time) ensure no DC component.
    *   **Simple Error Detection:** An error can be detected if a transition is missing.

*   **Disadvantages:**
    *   **Bandwidth Inefficient:** Requires twice the bandwidth of NRZ because each bit is represented by two signal changes (one at the start of the bit, and one in the middle).
    *   **More Complex:** More complex circuitry compared to NRZ.

---

## 4. Multilevel Binary Encoding

Multilevel binary schemes use three or more levels of voltage to represent the binary data. This allows for more bits to be encoded per signal change, potentially improving bandwidth efficiency.

### 4.1. Bipolar AMI (Alternate Mark Inversion)

*   **Concept:**
    *   **0:** Represented by a zero voltage level.
    *   **1:** Represented by alternating positive and negative pulses. The first '1' is a positive pulse, the second '1' is a negative pulse, the third '1' is a positive pulse, and so on.

*   **Example:**
    *   Data: `101100101`
    *   Signal: `+Pulse 0 0 -Pulse 0 0 +Pulse 0 -Pulse 0`

*   **Diagram:**

    ```
    Data:   1   0   1   1   0   0   1   0   1
    AMI:    --- ----- ----- ----- ----- ----- ----- ----- -----
           |   | |   | |   | |   | |   | |   | |   | |   | |
           ----- ----- ----- ----- ----- ----- ----- ----- -----
    (Assume 1 is first positive pulse)
    Signal: +   0   -   +   0   0   -   0   +
            ---- ---- ---- ---- ---- ---- ---- ---- ----
    ```

*   **Advantages:**
    *   **Reduces DC Component:** By alternating the polarity of pulses for '1's, the DC component is significantly reduced.
    *   **Basic Error Detection:** If a pulse for a '1' is missed or if an extra pulse appears where there should be a zero, it can be detected (e.g., two consecutive positive pulses for '1's is an error).

*   **Disadvantages:**
    *   **Synchronization for 0s:** A long string of 0s leads to no transitions and potential loss of synchronization.
    *   **Requires More Levels:** Uses two voltage levels for '1's and a zero level for '0's, so it's a 3-level scheme in terms of signal states.

### 4.2. Pseudoternary

*   **Concept:** Similar to Bipolar AMI, but the encoding is for the '0' bit.
    *   **1:** Represented by a zero voltage level.
    *   **0:** Represented by alternating positive and negative pulses. The first '0' is a positive pulse, the second '0' is a negative pulse, etc.

*   **Example:**
    *   Data: `101100101`
    *   Signal: `0 +Pulse 0 0 -Pulse 0 +Pulse 0 -Pulse`

*   **Diagram:**

    ```
    Data:   1   0   1   1   0   0   1   0   1
    Pseudo: ----- ----- ----- ----- ----- ----- ----- ----- -----
           |   | |   | |   | |   | |   | |   | |   | |   | |
           ----- ----- ----- ----- ----- ----- ----- ----- -----
    (Assume 0 is first positive pulse)
    Signal: 0   +   0   0   -   0   +   0   -
            ---- ---- ---- ---- ---- ---- ---- ---- ----
    ```

*   **Advantages:**
    *   **Reduces DC Component:** Alternating polarity for '0's helps reduce the DC component.
    *   **Basic Error Detection:** Similar error detection capabilities as Bipolar AMI.

*   **Disadvantages:**
    *   **Synchronization for 1s:** A long string of '1's leads to no transitions and potential loss of synchronization.

### 4.3. **Other Multilevel Schemes (Mentioned for completeness, but detailed analysis may be beyond the scope of a basic introduction):**

*   **2B1Q (2 Binary, 1 Quarternary):** Groups two bits into one signal element, which is represented by one of four voltage levels. This doubles the data rate for a given signaling rate.
    *   Example: `00` could be level 1, `01` level 2, `10` level 3, `11` level 4.
    *   Bandwidth efficiency is better than NRZ.
    *   Requires more complex circuitry.

*   **8B/10B Encoding:** Groups 8 bits of data into a 10-bit code word. The 10-bit code words are chosen to have good DC balancing and sufficient transitions for clocking. This adds overhead (20%) but improves reliability.

---

## 5. Biphase Encoding

Biphase encoding schemes use two parts to represent each bit, typically involving a transition in the middle of the bit period, often combined with a transition at the beginning. They are known for their self-clocking properties.

### 5.1. Manchester Encoding (Revisited)

As discussed earlier, Manchester encoding is a prominent biphase scheme.

*   **Concept:** Transition in the middle of each bit interval.
    *   **1:** Transition from low to high in the middle.
    *   **0:** Transition from high to low in the middle.

*   **Advantages:** Self-clocking, no DC component, simple error detection.
*   **Disadvantages:** Bandwidth inefficient (twice NRZ).

### 5.2. Differential Manchester Encoding

*   **Concept:** Uses a transition at the beginning of the bit interval to denote the bit value, and a transition in the middle for clocking.
    *   **1:** A transition at the beginning of the bit interval, *no* transition in the middle.
    *   **0:** *No* transition at the beginning of the bit interval, but a transition in the middle.
    *   *(Note: The convention can be reversed: transition at the start means '0', no transition at the start means '1'.)*

*   **Example:**
    *   Data: `1011001`
    *   Assume starting level is Low.
    *   Signal: `Low->High (start) High (mid) Low (start) High (start) Low (mid) High (mid) Low (start) High (mid)`

*   **Diagram:**

    ```
    Data:   1     0     1     1     0     0     1
    DiffManch:--- --- --- --- --- --- --- --- --- --- --- --- --- ---
             |   | |   | |   | |   | |   | |   | |   |
             ----- ----- ----- ----- ----- ----- -----
    Bit:    1   2   3   4   5   6   7   8   9   10  11  12  13  14
    (Each bit is split into two halves)

    Simplified Diagram (assuming transition at start for 1, transition in middle for 0):
    Data:   1     0     1     1     0     0     1
    DiffManch:_/\_  _/\_  _/\_  _/\_  _/\_  _/\_  _/\_
            \  /  \  /  \  /  \  /  \  /  \  /  \  /
             ---- ---- ---- ---- ---- ---- ---- ----
    ```

*   **Advantages:**
    *   **Self-Clocking:** Guaranteed transition in the middle of the bit interval.
    *   **Error Detection:** The absence of a transition at the start (for '1') or the absence of a transition in the middle (for '0') indicates an error.
    *   **No DC Component:** Due to balanced transitions.

*   **Disadvantages:**
    *   **Bandwidth Inefficient:** Requires two transitions per bit (one at the start, one in the middle), hence twice the bandwidth of NRZ.
    *   **More Complex:** More complex circuitry.

---

## 6. Comparison of Encoding Schemes

| Scheme                 | Synchronization | Bandwidth | DC Component | Error Detection | Complexity |
| :--------------------- | :-------------- | :-------- | :----------- | :-------------- | :--------- |
| **NRZ-L**              | Poor            | Good      | High         | None            | Low        |
| **NRZI**               | Moderate (for 1s) | Good      | Reduced      | None            | Low        |
| **RZ**                 | Excellent       | Poor      | Low          | None            | Medium     |
| **Manchester**         | Excellent       | Poor      | None         | Simple          | Medium     |
| **Differential Manch.**| Excellent       | Poor      | None         | Simple          | Medium     |
| **Bipolar AMI**        | Moderate (for 1s) | Good      | Reduced      | Basic           | Medium     |
| **Pseudoternary**      | Moderate (for 0s) | Good      | Reduced      | Basic           | Medium     |

---

## 7. Important Points to Remember

*   **Synchronization is Key:** The primary challenge in digital-to-digital encoding is ensuring the receiver can correctly identify the boundaries of each bit. Schemes with guaranteed transitions (like RZ and Biphase) excel at this but at the cost of bandwidth.
*   **Bandwidth vs. Synchronization:** There's a trade-off between bandwidth efficiency and synchronization capability. NRZ is bandwidth-efficient but struggles with synchronization. RZ and Biphase are good at synchronization but require more bandwidth.
*   **DC Component:** A signal with a significant DC component can be problematic for transmission systems, especially those using transformers for coupling. Schemes that maintain a balance of positive and negative voltage levels (like Biphase and schemes with alternating polarities) are preferred.
*   **Error Detection:** Some encoding schemes have inherent error detection capabilities, such as detecting missing transitions or incorrect transition patterns.

---

## Practice Questions

1.  **Differentiate between NRZ-L and NRZI. Which one is generally preferred for data communication and why?**

2.  **Explain the concept of "self-clocking" in the context of digital signaling. Which encoding schemes are considered self-clocking?**

3.  **A sender transmits the binary sequence `1101001` using Manchester encoding. Draw the resulting signal. Assume the initial voltage is low and '1' is represented by a low-to-high transition in the middle of the bit period.**

4.  **What is the main disadvantage of standard RZ encoding? How does Manchester encoding improve upon this disadvantage?**

5.  **Describe Bipolar AMI encoding. What is its primary advantage over NRZI?**

6.  **If you need to transmit data over a link that is prone to clock drift, which encoding scheme would you likely choose and why?**

7.  **Consider the binary sequence `011010`. Draw the signal for:**
    *   a) NRZ-L
    *   b) NRZI (assume initial level is high)
    *   c) Differential Manchester (assume initial level is low and '1' is no transition at start)

---

## Answers to Practice Questions

1.  **Differentiate between NRZ-L and NRZI. Which one is generally preferred for data communication and why?**
    *   **NRZ-L (Non-Return-to-Zero Level):** The level of the signal represents the bit (e.g., high for '1', low for '0').
    *   **NRZI (Non-Return-to-Zero Invert):** A transition occurs at the beginning of the bit interval for a '1', while a '0' results in no transition. The level stays the same for the duration of the bit.
    *   **Preference:** NRZI is generally preferred. While both have similar bandwidth efficiency, NRZI offers better synchronization capabilities because the presence of transitions for '1's helps the receiver maintain clock synchronization, especially compared to NRZ-L which can lose sync during long strings of identical bits.

2.  **Explain the concept of "self-clocking" in the context of digital signaling. Which encoding schemes are considered self-clocking?**
    *   **Self-clocking:** A self-clocking code ensures that there are enough transitions in the signal to allow the receiver to recover the clock timing from the received data stream. This prevents the receiver's clock from drifting away from the sender's clock, ensuring accurate detection of bit boundaries.
    *   **Self-clocking Schemes:** RZ (especially standard RZ with mid-bit transition), Manchester encoding, and Differential Manchester encoding are considered self-clocking.

3.  **A sender transmits the binary sequence `1101001` using Manchester encoding. Draw the resulting signal. Assume the initial voltage is low and '1' is represented by a low-to-high transition in the middle of the bit period.**

    ```
    Data:   1     1     0     1     0     0     1
    Manch:  _/\_  _/\_  \_/   _/\_  \_/   \_/   _/\_
            \  /  \  /  \  /  \  /  \  /  \  /  \  /
             ---- ---- ---- ---- ---- ---- ---- ----
    Initial: Low
    Bit 1: Low -> High (mid)
    Bit 2: Low -> High (mid)
    Bit 3: High -> Low (mid)
    Bit 4: Low -> High (mid)
    Bit 5: High -> Low (mid)
    Bit 6: High -> Low (mid)
    Bit 7: Low -> High (mid)
    ```

    **(Diagram visualization similar to the one in Section 3.2)**

4.  **What is the main disadvantage of standard RZ encoding? How does Manchester encoding improve upon this disadvantage?**
    *   **Main Disadvantage of RZ:** Bandwidth inefficiency. Standard RZ requires a transition in the middle of each bit interval, effectively doubling the signaling rate required compared to NRZ for the same data rate, thus requiring twice the bandwidth.
    *   **Manchester Improvement:** Manchester encoding also requires a transition in the middle of each bit interval for synchronization, so it shares the bandwidth inefficiency. However, Manchester encoding is often preferred because it also guarantees a transition at the beginning of each bit interval (or no transition at the beginning, depending on the bit), which makes it inherently more robust against clock drift and also self-clocking. Furthermore, it has no DC component.

5.  **Describe Bipolar AMI encoding. What is its primary advantage over NRZI?**
    *   **Bipolar AMI:** In Bipolar AMI, a binary '0' is represented by no voltage change (zero voltage). A binary '1' is represented by alternating positive and negative pulses. The first '1' might be a positive pulse, the second '1' a negative pulse, the third '1' a positive pulse, and so on.
    *   **Primary Advantage over NRZI:** The primary advantage is the **reduction of the DC component**. By alternating the polarity of the pulses for '1's, Bipolar AMI ensures that over time, the signal has a better balance between positive and negative voltage excursions, reducing the net DC voltage. NRZI can still suffer from a DC component if there are long strings of '0's.

6.  **If you need to transmit data over a link that is prone to clock drift, which encoding scheme would you likely choose and why?**
    *   You would likely choose an encoding scheme that is **self-clocking**, meaning it has frequent transitions that allow the receiver to synchronize its clock with the sender's. Examples include **Manchester encoding** or **Differential Manchester encoding**.
    *   **Reasoning:** These schemes have a guaranteed transition in the middle of every bit interval. This constant mid-bit transition acts as a reliable timing signal for the receiver, allowing it to accurately determine the start and end of each bit, even if there are minor clock speed differences or interference causing drift. NRZ schemes, without this guaranteed mid-bit transition, are more susceptible to losing synchronization during long strings of identical bits.

7.  **Consider the binary sequence `011010`. Draw the signal for:**
    *   a) **NRZ-L:**
        ```
        Data:   0   1   1   0   1   0
        NRZ-L:  --- ----- ----- ----- ----- -----
               |   | |   | |   | |   | |   | |
               ----- ----- ----- ----- ----- -----
        (Low for 0, High for 1)
        ```
    *   b) **NRZI (assume initial level is high):**
        ```
        Data:   0   1   1   0   1   0
        NRZI:   ----- ----- ----- ----- ----- -----
               |   | |   | |   | |   | |   | |
               ----- ----- ----- ----- ----- -----
        Initial: High
        Signal: High (no transition) -> High (transition) High -> High (no transition) Low (transition) Low -> Low (no transition) High
        ```
        Simplified: High -> High -> Low -> Low -> High -> High
    *   c) **Differential Manchester (assume initial level is low and '1' is no transition at start):**
        ```
        Data:   0     1     1     0     1     0
        DiffManch:_/\_  _/\_  _/\_  _/\_  _/\_  _/\_
                \  /  \  /  \  /  \  /  \  /  \  /
                 ---- ---- ---- ---- ---- ---- ----
        Initial: Low
        Bit 0: No transition at start, transition in middle (Low->High)
        Bit 1: Transition at start (Low->High), no transition in middle
        Bit 2: Transition at start (High->Low), no transition in middle
        Bit 3: No transition at start, transition in middle (Low->High)
        Bit 4: Transition at start (High->Low), no transition in middle
        Bit 5: No transition at start, transition in middle (Low->High)
        ```
        The above text description accurately depicts the signal based on the rules. The key is the transition at the start for '0' and transition in the middle for '1' (or vice-versa, but the rule consistency matters). Let's assume the rule is: Transition at start for '0', transition in middle for '1'.
        Data:   0     1     1     0     1     0
        DiffManch:_/\_  _/\_  \_/   _/\_  \_/   _/\_
                \  /  \  /  \  /  \  /  \  /  \  /
                 ---- ---- ---- ---- ---- ---- ----

        *Correction based on standard definition: Typically, Manchester has transition in middle. Differential Manchester has transition at start for one bit and transition in middle for the other.*
        Let's re-evaluate with the typical definition:
        *   **Manchester:** Transition in the middle. 1=Low-to-High, 0=High-to-Low.
            ```
            Data:   0     1     1     0     1     0
            Manch:  \_/   _/\_  _/\_  \_/   _/\_  \_/
                    \  /  \  /  \  /  \  /  \  /  \  /
                     ---- ---- ---- ---- ---- ---- ----
            ```
        *   **Differential Manchester:** Transition at the beginning for one bit, transition in the middle for the other. Let's say transition at beginning for '1', transition in middle for '0'. Initial level is low.
            ```
            Data:   0     1     1     0     1     0
            DiffManch:_/\_  _/\_  \_/   _/\_  \_/   _/\_
                    \  /  \  /  \  /  \  /  \  /  \  /
                     ---- ---- ---- ---- ---- ---- ----
            Initial: Low
            Bit 0: No transition at start, transition in middle (Low->High)
            Bit 1: Transition at start (Low->High), no transition in middle
            Bit 2: Transition at start (High->Low), no transition in middle
            Bit 3: No transition at start, transition in middle (Low->High)
            Bit 4: Transition at start (High->Low), no transition in middle
            Bit 5: No transition at start, transition in middle (Low->High)
            ```
            This interpretation aligns with the previous analysis.

---
