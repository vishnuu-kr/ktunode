---
title: "DAC Architecture - Resistor String, R-2R Ladder Networks, Current Steering,  Charge Scaling, cyclic and Pipeline types."
subject: "MIXED SIGNAL CIRCUITS"
module: "Module 4: Data Converters: DAC specifications, ADC specifications"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff42d"
status: "completed"
scrapedAt: "2026-05-23T18:08:15.551Z"
---
# Mixed Signal Circuits: Module 4 - Data Converters (DAC Architectures)

This module delves into the fundamental architectures of Digital-to-Analog Converters (DACs), a crucial component in mixed-signal systems. We will explore various DAC types, their operational principles, specifications, and trade-offs, aligning with our Course Outcome 5 (CO5) which aims to describe the specifications and architectures of data converter circuits (Knowledge Level: K2).

## Table of Contents

1.  Introduction to DACs
2.  DAC Specifications (Brief Overview)
3.  DAC Architectures
    *   3.1 Resistor String DAC
    *   3.2 R-2R Ladder Network DAC
    *   3.3 Current Steering DAC
    *   3.4 Charge Scaling DAC
    *   3.5 Cyclic DAC
    *   3.6 Pipeline DAC
4.  Comparison of DAC Architectures
5.  Practice Questions and Answers

---

## 1. Introduction to DACs

A Digital-to-Analog Converter (DAC) is a circuit that converts a digital input signal (a sequence of binary bits) into an analog output signal, typically a voltage or current. DACs are fundamental building blocks in many electronic systems, including audio and video playback, digital control systems, communication systems, and measurement instruments. They serve as the interface between the digital processing domain and the analog physical world.

**Key Concept:** DACs are responsible for translating discrete digital values into continuous analog representations.

## 2. DAC Specifications (Brief Overview)

While this module focuses on architectures, understanding key specifications provides context for why different architectures are chosen.

*   **Resolution:** The number of bits the DAC can represent. A higher resolution means finer analog output steps.
*   **Monotonicity:** The property that the analog output increases or stays the same as the digital input increases.
*   **Differential Nonlinearity (DNL):** The deviation of the analog step size from the ideal step size.
*   **Integral Nonlinearity (INL):** The deviation of the actual analog output from the ideal linear output.
*   **Settling Time:** The time it takes for the DAC output to settle within a specified error band after a digital input change.
*   **Output Range:** The minimum and maximum analog values the DAC can produce.
*   **Speed/Conversion Rate:** The maximum rate at which the DAC can convert digital inputs to analog outputs.

**Reference:** Behzad Razavi's "Design of Analog CMOS Integrated Circuits" provides comprehensive coverage of data converter specifications.

---

## 3. DAC Architectures

DACs can be broadly categorized based on how they generate the analog output from the digital input. Here, we explore several common architectures.

### 3.1 Resistor String DAC

The resistor string DAC is one of the simplest DAC architectures, particularly suitable for lower resolution applications where linearity is paramount.

*   **Principle of Operation:**
    *   A string of identical resistors is connected in series between a reference voltage ($V_{ref}$) and ground (or $0V$).
    *   The digital input code determines which tap point on the resistor string is selected via a switch network.
    *   The selected tap point's voltage, which is an analog representation of the digital input, is then outputted.

*   **Structure:**
    *   A ladder of $2^N$ resistors, where $N$ is the resolution.
    *   A decoder network to select one of the $2^N$ tap points.
    *   A multiplexer to connect the selected tap to the output.

*   **Example (4-bit Resistor String DAC):**
    *   Requires $2^4 = 16$ resistors.
    *   Digital input (e.g., 1011) selects the 11th tap point.
    *   The voltage at the $k$-th tap (counting from the ground side, starting at 0) is approximately $V_{ref} \times \frac{k}{2^N-1}$.

*   **Advantages:**
    *   Excellent linearity (ideally perfectly linear if resistors are perfectly matched).
    *   Relatively simple to design and implement.

*   **Disadvantages:**
    *   Requires a large number of resistors ($2^N$) for higher resolutions, leading to significant area and power consumption.
    *   Switch resistance and parasitic capacitances can degrade performance.
    *   Limited speed due to the need to charge/discharge the output capacitance.

*   **Textbook Reference:** Sedra & Smith's "Microelectronic Circuits" discusses resistor ladder networks, which are conceptually similar.

---

### 3.2 R-2R Ladder Network DAC

The R-2R ladder DAC is a widely used architecture that offers a good compromise between performance and complexity.

*   **Principle of Operation:**
    *   It utilizes only two resistor values: $R$ and $2R$.
    *   The digital input bits control analog switches that connect either to $V_{ref}$ or ground.
    *   The ladder network is designed such that each bit contributes a specific, weighted portion to the total output current or voltage.

*   **Structure:**
    *   A series of parallel branches, each consisting of a resistor $R$.
    *   Between these parallel branches, vertical resistors of value $2R$ connect to the next "rung" of the ladder.
    *   The most significant bit (MSB) is connected to the first rung, and subsequent bits are connected to subsequent rungs.
    *   Switches are used to connect each bit's corresponding node to either $V_{ref}$ or ground.
    *   The output is taken from the end of the ladder, usually with an op-amp to buffer and provide current/voltage gain.

*   **Example (3-bit R-2R Ladder DAC):**
    *   Let the digital input be $B_2 B_1 B_0$, where $B_i$ is 1 or 0.
    *   The output voltage is given by: $V_{out} = V_{ref} \times (B_2 \frac{1}{2} + B_1 \frac{1}{4} + B_0 \frac{1}{8})$.
    *   The MSB ($B_2$) determines the largest current/voltage contribution, while the LSB ($B_0$) contributes the smallest.

*   **Advantages:**
    *   Requires only two resistor values, reducing fabrication complexity compared to the resistor string DAC.
    *   More compact for higher resolutions than resistor string DACs.
    *   Good linearity if resistors are well-matched.

*   **Disadvantages:**
    *   Resistor matching is still critical for linearity.
    *   Output impedance can vary with the input code, requiring a buffering op-amp.
    *   Settling time can be affected by switch resistance and parasitic capacitances.

*   **Textbook Reference:** Both Razavi and Sedra & Smith provide detailed analyses of R-2R ladder networks and their application in DACs.

---

### 3.3 Current Steering DAC

Current steering DACs are known for their high speed and are often used in applications where fast conversion is critical.

*   **Principle of Operation:**
    *   The digital input code controls current steering switches.
    *   These switches direct pre-defined current cells either to the output or to a dummy load.
    *   The sum of the currents steered to the output generates the analog output current.

*   **Structure:**
    *   A set of current cells, each designed to produce a specific current value (e.g., $I_0, 2I_0, 4I_0, \ldots$).
    *   Current steering switches (typically CMOS switches) controlled by the digital input bits.
    *   The output is usually a differential current, which can be converted to a voltage using a current-to-voltage converter (e.g., a resistor or an op-amp with a feedback resistor).

*   **Example (Conceptual):**
    *   For a 3-bit DAC, you might have current cells producing $I_0, 2I_0, 4I_0$.
    *   If the input is 101 ($4I_0 + 0(2I_0) + 1(I_0)$), the cells corresponding to $4I_0$ and $I_0$ would steer their currents to the output. The total output current would be $5I_0$.

*   **Advantages:**
    *   Very high speed capability, as current steering is generally faster than voltage switching.
    *   Can achieve good linearity if current cells are well-matched.
    *   Can be implemented as a current output DAC directly.

*   **Disadvantages:**
    *   Requires precise matching of current cells.
    *   Power consumption can be high due to continuous current flow.
    *   Output swing is limited by the current-to-voltage conversion stage.
    *   Requires complementary differential outputs for best performance.

*   **Textbook Reference:** Allen & Holberg's "CMOS Analog Circuit Design" is a good source for understanding current steering techniques.

---

### 3.4 Charge Scaling DAC

Charge scaling DACs leverage the principle of transferring and accumulating charge packets to create analog output values.

*   **Principle of Operation:**
    *   Charge is accumulated on a capacitor based on the digital input bits.
    *   The amount of charge transferred is proportional to the digital value.
    *   The accumulated charge is then converted to a voltage or current.

*   **Structure:**
    *   Typically uses a switched-capacitor network.
    *   A series of capacitors with different sizes, proportional to the bit weights ($C_0, 2C_0, 4C_0, \ldots$).
    *   Switches to connect these capacitors to $V_{ref}$ or ground for charging and to an output node for discharging.

*   **Example (Conceptual):**
    *   For a 2-bit DAC with input $B_1 B_0$:
        *   $B_1$ might control a capacitor $C_1$ proportional to $2^1$.
        *   $B_0$ might control a capacitor $C_0$ proportional to $2^0$.
    *   During a sampling phase, $C_1$ is connected to $V_{ref}$ and $C_0$ is connected to $V_{ref}$.
    *   During a conversion phase, both capacitors are connected to an output capacitor $C_{out}$. The output voltage is proportional to $(Q_1 + Q_0) / C_{out} = (C_1 V_{ref} + C_0 V_{ref}) / C_{out}$.

*   **Advantages:**
    *   Good linearity if capacitors are well-matched.
    *   Can be implemented with relatively few components for moderate resolutions.
    *   Can be integrated with digital logic effectively.

*   **Disadvantages:**
    *   Requires accurate capacitor matching.
    *   Limited by the accuracy of the charge transfer and accumulation process.
    *   Speed is limited by the clock frequency and settling times of the switched-capacitor network.

*   **Reference:** Razavi's "Fundamentals of Microelectronics" often covers switched-capacitor circuits, which are the basis for charge scaling.

---

### 3.5 Cyclic DAC

A cyclic DAC, also known as a successive approximation DAC or algorithmic DAC, converts bits one at a time.

*   **Principle of Operation:**
    *   It processes the digital input bits sequentially, typically starting from the MSB.
    *   In each cycle, it performs an operation (e.g., multiply by 2 and subtract a reference if the bit is 1) to generate the next analog output approximation.
    *   This involves amplification and potentially subtraction.

*   **Structure:**
    *   Typically consists of a switched-capacitor circuit that can multiply the input voltage by 2 and then add or subtract a weighted voltage related to the current bit.
    *   A decision circuit (comparator) is often implied if it's part of a SAR ADC, but for a DAC, the digital input directly controls the operations.

*   **Example (Conceptual):**
    *   To convert a 3-bit number $B_2 B_1 B_0$:
        *   **Cycle 1 (MSB $B_2$):** The input is $V_{in} = B_2 \times V_{ref}$. The circuit multiplies this by 2. The intermediate output is $2B_2 V_{ref}$.
        *   **Cycle 2 (Bit $B_1$):** The output from Cycle 1 is multiplied by 2. If $B_1 = 1$, $V_{ref}$ is added; if $B_1 = 0$, nothing is added. The output becomes $2 \times (2B_2 V_{ref}) + B_1 V_{ref} = 4B_2 V_{ref} + B_1 V_{ref}$.
        *   **Cycle 3 (LSB $B_0$):** The output from Cycle 2 is multiplied by 2. If $B_0 = 1$, $V_{ref}/2$ is added; if $B_0 = 0$, nothing is added. The output becomes $2 \times (4B_2 V_{ref} + B_1 V_{ref}) + B_0 V_{ref}/2 = 8B_2 V_{ref} + 2B_1 V_{ref} + B_0 V_{ref}/2$. (This example assumes a specific implementation where the LSB gets scaled differently in the last step).
    *   A more common cyclic DAC implementation directly outputs $V_{ref} \sum_{i=N-1}^{0} B_i 2^{i-N}$.

*   **Advantages:**
    *   Requires fewer components compared to R-2R or resistor string DACs for the same resolution.
    *   Can be implemented with high resolution.

*   **Disadvantages:**
    *   Requires a high-precision clock signal.
    *   Performance is sensitive to switch imperfections and capacitor matching.
    *   The conversion process is sequential, limiting the overall speed compared to parallel architectures.

*   **Textbook Reference:** Analog IC design books like Meyer Gray, Hurst, Lewis's "Analysis and Design of Analog Integrated Circuits" might touch upon algorithmic operations relevant to cyclic converters.

---

### 3.6 Pipeline DAC

Pipeline DACs combine elements of charge scaling and successive approximation principles to achieve high speed and good linearity.

*   **Principle of Operation:**
    *   The digital input is broken down into segments (e.g., most significant bits and least significant bits).
    *   The most significant bits are converted by a coarse DAC (e.g., a thermometer code DAC or a few R-2R stages).
    *   The analog output of the coarse DAC is subtracted from the desired analog value.
    *   The remainder (residual error) is amplified and then converted by a fine DAC (e.g., another R-2R stage or a charge scaling stage).
    *   The outputs of the coarse and fine DACs are summed to produce the final analog output.

*   **Structure:**
    *   A multi-stage architecture.
    *   Each stage typically performs a portion of the conversion and then amplifies the residue for the next stage.
    *   Typically uses switched-capacitor circuits.
    *   The number of stages and the resolution of each stage are key design parameters.

*   **Example (Conceptual 2-stage Pipeline DAC):**
    *   **Stage 1 (MSBs):** Converts the MSBs (e.g., 3 bits) to an analog voltage $V_{stage1}$.
    *   **Residue Calculation:** The analog output $V_{stage1}$ is subtracted from the ideal analog value corresponding to the MSBs (e.g., $V_{ref} \times \text{digital\_value}_{MSB}$). The difference is the residue.
    *   **Amplification:** The residue is amplified by a factor (e.g., 2 or 4).
    *   **Stage 2 (LSBs):** The amplified residue is fed to a second DAC that converts the remaining LSBs.
    *   **Summation:** The output of the first stage ($V_{stage1}$) and the output of the second stage are summed to produce the final analog output.

*   **Advantages:**
    *   Achieves high conversion speeds by processing bits in parallel across stages.
    *   Can achieve high resolution and good linearity.
    *   Residue processing allows for relaxation of matching requirements in later stages.

*   **Disadvantages:**
    *   More complex architecture with higher component count.
    *   Requires careful design of inter-stage amplifiers and switched-capacitor circuits.
    *   Power consumption can be significant.

*   **Textbook Reference:** Pipeline architectures are a common topic in advanced analog IC design, often covered in texts like Meyer Gray, Hurst, Lewis. Razavi's "Design of Analog CMOS Integrated Circuits" may also discuss such architectures.

---

## 4. Comparison of DAC Architectures

| Feature          | Resistor String DAC                                | R-2R Ladder DAC                                    | Current Steering DAC                              | Charge Scaling DAC                                 | Cyclic DAC                                         | Pipeline DAC                                     |
| :--------------- | :------------------------------------------------- | :------------------------------------------------- | :------------------------------------------------ | :------------------------------------------------- | :------------------------------------------------- | :----------------------------------------------- |
| **Complexity**   | High (many resistors)                              | Moderate (only 2 resistor values)                  | Moderate (current cells, switches)                | Moderate (switched-caps, capacitors)               | Moderate (switched-caps, amps)                     | High (multi-stage, amps, switched-caps)          |
| **Resolution**   | Good for low resolution, poor for high resolution  | Good for moderate to high resolution               | Good for moderate to high resolution              | Good for moderate to high resolution               | Good for high resolution                           | Excellent for high resolution                      |
| **Linearity**    | Excellent (if resistors matched)                   | Good (if resistors matched)                        | Good (if current cells matched)                   | Good (if capacitors matched)                       | Moderate (sensitive to imperfections)              | Good to Excellent                                |
| **Speed**        | Slow                                               | Moderate                                           | Very High                                         | Moderate                                           | Moderate                                           | Very High                                        |
| **Power**        | Moderate (but area can be high)                    | Moderate                                           | High (continuous current)                         | Moderate                                           | Moderate                                           | High                                             |
| **Area**         | Very High for high resolution                      | Moderate                                           | Moderate                                          | Moderate                                           | Moderate                                           | High                                             |
| **Key Challenge** | Resistor count, parasitic capacitance              | Resistor matching                                  | Current cell matching                             | Capacitor matching, charge transfer accuracy       | Clock jitter, switch/capacitor matching            | Inter-stage gain/offset, amplifier performance   |
| **Typical Use**  | Low-speed, high-linearity applications (e.g., audio) | General-purpose DACs, audio, video                 | High-speed communication, signal generation       | Moderate speed, good linearity                     | High-resolution, moderate speed applications       | High-speed data acquisition, arbitrary waveform generators |

**Important Point to Remember:** The choice of DAC architecture depends heavily on the specific application requirements, such as desired resolution, speed, linearity, power budget, and area constraints.

---

## 5. Practice Questions and Answers

**Question 1:** What is the primary advantage of a resistor string DAC?
    a) High speed
    b) Low power consumption
    c) Excellent linearity
    d) Small silicon area

**Answer:** (c) Excellent linearity. While they can be power-hungry and large, their main strength is inherent linearity if the resistors are matched.

**Question 2:** An R-2R ladder DAC uses which two resistor values?
    a) R and 2R
    b) R and R
    c) 2R and 4R
    d) R and C

**Answer:** (a) R and 2R. This is the defining characteristic of the R-2R ladder.

**Question 3:** Which DAC architecture is generally known for its very high speed capabilities?
    a) Resistor String DAC
    b) R-2R Ladder DAC
    c) Current Steering DAC
    d) Charge Scaling DAC

**Answer:** (c) Current Steering DAC. The direct steering of current is fundamentally a faster operation than voltage switching in other architectures.

**Question 4:** Describe the main trade-off when choosing between a resistor string DAC and an R-2R ladder DAC for a high-resolution application.

**Answer:** The trade-off is primarily between linearity and complexity/area. The resistor string offers ideal linearity but requires $2^N$ resistors, making it extremely large and impractical for high resolutions. The R-2R ladder uses only two resistor values, is more area-efficient for high resolutions, but its linearity depends critically on the precise matching of these resistors.

**Question 5:** How does a cyclic DAC convert a digital number to an analog signal?

**Answer:** A cyclic DAC converts a digital number by processing the bits sequentially, typically starting from the most significant bit (MSB). In each cycle, it performs operations like multiplying the intermediate analog value by 2 and then adding or subtracting a scaled version of the current digital bit. This iterative process gradually builds up the final analog output.

---

This concludes Module 4's exploration of DAC Architectures. Understanding these fundamental designs is crucial for designing and analyzing mixed-signal systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
