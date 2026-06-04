---
title: "Realisation of logic gates using pass transistors and complementary pass transistors"
subject: "VLSI CIRCUIT DESIGN"
module: "Module 4: Pass transistors and Transmission gate logic:  Basic concepts"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefd5"
status: "completed"
scrapedAt: "2026-05-23T18:03:49.578Z"
---
# VLSI CIRCUIT DESIGN - Module 4: Pass Transistors and Transmission Gate Logic: Basic Concepts

---

## Topic: Realization of Logic Gates using Pass Transistors and Complementary Pass Transistors

---

### Learning Outcomes Covered:

*   **Understanding the Fundamental Operation of Pass Transistors:** How a transistor acts as a switch.
*   **Designing Logic Gates using Pass Transistors:** Implementing basic Boolean functions.
*   **Understanding the Limitations of NMOS/PMOS Pass Transistors:** Voltage drop issues.
*   **Introduction to Transmission Gates:** Combining NMOS and PMOS for improved performance.
*   **Designing Logic Gates using Transmission Gates:** Implementing Boolean functions with better characteristics.
*   **Comparing Pass Transistor and Transmission Gate Logic:** Advantages and disadvantages of each.

---

### Course Outcomes Alignment:

This topic directly contributes to:

*   **CO3: Design, analyse and create the layout of static CMOS logic circuits adhering to design rules and specifications.** While this topic focuses on pass-transistor logic, understanding its principles is crucial for appreciating the design choices made in static CMOS and for analyzing potential trade-offs in complex circuit design. Pass transistors are building blocks that can be used in various logic styles.
*   **CO4: Design and analysis of dynamic logic circuits and the implementation of basic storage cells.** Pass transistors are fundamental to many dynamic logic circuits and are used in the implementation of latches and flip-flops (basic storage cells).

---

### 1. Introduction to Pass Transistors

#### 1.1. What is a Pass Transistor?

*   A pass transistor is a MOSFET (usually NMOS) that acts as a **switch** to pass a signal from one node to another.
*   When the gate of the transistor is at a logic high (V_DD), it turns ON, allowing current to flow and passing the signal.
*   When the gate is at a logic low (GND), it turns OFF, blocking the signal.

#### 1.2. Basic Pass Transistor Operation (NMOS)

*   **ON State:** When the gate-source voltage ($V_{GS}$) is greater than the threshold voltage ($V_{th}$), the NMOS transistor conducts, allowing the input signal ($V_{in}$) to pass to the output ($V_{out}$).
*   **OFF State:** When $V_{GS}$ is less than $V_{th}$, the NMOS transistor is OFF, and the output node is effectively disconnected from the input.

#### 1.3. Limitation of NMOS Pass Transistors

*   **Voltage Drop:** When an NMOS transistor is ON, it behaves like a resistor. The output voltage ($V_{out}$) will not be exactly equal to the input voltage ($V_{in}$), especially when passing a logic '1'.
    *   If the input is $V_{DD}$ (logic '1'), the output will be $V_{DD} - V_{DS(sat)}$, where $V_{DS(sat)}$ is the saturation voltage drop. This means the passed logic '1' is attenuated, which can lead to **logic level degradation**.
*   **Cannot Pass a Strong Logic '0':** While an NMOS can pass a good logic '0' (close to $0V$), its inability to pass a strong logic '1' limits its direct use in many circuits where reliable signal integrity is paramount.

**Reference:** Kang, Leblebici, Kim (4/e) - Chapter 4 discusses MOSFETs as switches and their characteristics.

---

### 2. Realization of Logic Gates using Pass Transistors

#### 2.1. NOT Gate (Inverter)

*   **Circuit:** An NMOS transistor with its gate connected to the input signal. The drain is the output, and the source is connected to ground. The input signal is applied to the gate.
*   **Operation:**
    *   When input is HIGH ($V_{DD}$), NMOS turns ON, connecting the output to GND. This is **incorrect** for a NOT gate as the output should be LOW.
    *   When input is LOW (GND), NMOS turns OFF, disconnecting the output. The output will be floating.
*   **Conclusion:** A single NMOS pass transistor **cannot** implement a NOT gate effectively because it cannot provide a HIGH output. A pull-up device (like a PMOS) is needed to pull the output HIGH.

#### 2.2. Basic AND Gate

*   **Circuit:** Two NMOS transistors in series.
    *   Input A controls the gate of the first NMOS.
    *   Input B controls the gate of the second NMOS.
    *   The output is taken from the drain of the second NMOS, connected to ground via the series transistors.
*   **Operation:**
    *   Output is LOW (0) if A=0 OR B=0 (one or both transistors are OFF).
    *   Output is HIGH (1) only if A=1 AND B=1 (both transistors are ON, passing the HIGH signal).
*   **Limitation:** The output HIGH level will be $V_{DD} - V_{DS(sat)}$, exhibiting voltage drop.

#### 2.3. Basic OR Gate

*   **Circuit:** Two NMOS transistors in parallel.
    *   Input A controls the gate of the first NMOS.
    *   Input B controls the gate of the second NMOS.
    *   The output is taken from the common drain, connected to ground via the parallel transistors.
*   **Operation:**
    *   Output is LOW (0) if A=0 AND B=0 (both transistors are OFF).
    *   Output is HIGH (1) if A=1 OR B=1 (at least one transistor is ON, passing the HIGH signal).
*   **Limitation:** Similar to the AND gate, the output HIGH level will be $V_{DD} - V_{DS(sat)}$.

#### 2.4. CMOS Pass Transistor Logic (CPL) - Example: 2-input AND Gate

*   **Concept:** To overcome the limitations of single NMOS/PMOS pass transistors, complementary pass transistors (using both NMOS and PMOS) are used.
*   **Circuit:**
    *   Input A controls a PMOS and an NMOS pair.
    *   Input B controls another PMOS and an NMOS pair.
    *   These pairs are connected in series.
    *   The output is pulled up by a complementary PMOS and pulled down by a complementary NMOS.
*   **Detailed Example (2-input AND):**
    *   Let $A$ and $B$ be inputs.
    *   **Pull-down Network:** NMOS$_A$ (gate A, source to ground) connected in series with NMOS$_B$ (gate B, source to output).
    *   **Pull-up Network:** PMOS$_A$ (gate $\overline{A}$, source to $V_{DD}$) connected in series with PMOS$_B$ (gate $\overline{B}$, source to output).
    *   **Output:** Connected to the common drain of the series NMOS and PMOS pairs.
    *   **Important Note:** This basic structure is a **series** of pass transistors. For a true AND gate, we'd need to ensure the output is HIGH only when A=1 AND B=1.
*   **Correct CPL AND Gate Implementation:**
    *   Input A to gate of NMOS1, drain to Output. Source of NMOS1 to ground.
    *   Input B to gate of NMOS2, drain to Output. Source of NMOS2 to ground.
    *   (This is for OR logic, series NMOS for AND).
    *   **Revised CPL AND Gate:**
        *   NMOS1: Gate=A, Drain=Output, Source=Intermediate Node 1
        *   NMOS2: Gate=B, Drain=Intermediate Node 1, Source=Ground
        *   This passes the signal if A=1 AND B=1.
        *   The problem is still the voltage drop for the HIGH signal.

**Reference:** Weste, Eshraghian (2/e) - Chapter 6 provides an overview of pass-transistor logic families.

---

### 3. Transmission Gate Logic

#### 3.1. What is a Transmission Gate (TG)?

*   A transmission gate is a fundamental building block in pass-transistor logic that provides a **bidirectional switch** with significantly improved switching characteristics compared to single NMOS or PMOS.
*   It consists of an NMOS and a PMOS transistor connected in **parallel**, with their gates controlled by **complementary signals** (i.e., one gate is $C$ and the other is $\overline{C}$).

#### 3.2. Operation of a Transmission Gate

*   **ON State:** When the control signal $C$ is HIGH ($V_{DD}$) and $\overline{C}$ is LOW (GND):
    *   The NMOS transistor turns ON (since $V_{GS} = V_{DD}$).
    *   The PMOS transistor turns ON (since $V_{GS} = \overline{C} - V_{DD} = GND - V_{DD} = -V_{DD}$).
    *   Both transistors conduct, and the switch is ON, allowing the signal to pass from input to output with **minimal voltage drop**. The output voltage closely tracks the input voltage.
*   **OFF State:** When the control signal $C$ is LOW (GND) and $\overline{C}$ is HIGH ($V_{DD}$):
    *   The NMOS transistor turns OFF (since $V_{GS} = GND$).
    *   The PMOS transistor turns OFF (since $V_{GS} = V_{DD} - V_{DD} = 0V$, which is less than $|V_{th,p}|$).
    *   Both transistors are OFF, and the switch is open, effectively blocking the signal.

#### 3.3. Advantages of Transmission Gates over Single Pass Transistors

*   **Reduced Voltage Drop:** By using both NMOS and PMOS in parallel with complementary control signals, the transmission gate can pass both logic '0' and logic '1' with very little attenuation.
    *   When passing a '1', the NMOS conducts strongly. The PMOS also conducts, and its threshold voltage is negative, which helps in pulling the output up closer to $V_{DD}$.
    *   When passing a '0', the PMOS conducts strongly. The NMOS also conducts, and its threshold voltage is positive, which helps in pulling the output down closer to $0V$.
*   **Bidirectional:** A transmission gate can pass signals in either direction.
*   **Lower ON-Resistance:** Effectively, the ON-resistance of the TG is lower than that of a single NMOS or PMOS transistor, leading to faster switching.

#### 3.4. Disadvantages of Transmission Gates

*   **Larger Area:** Requires two transistors (NMOS and PMOS) and complementary control signals, leading to a larger silicon area compared to a single pass transistor.
*   **Increased Power Consumption:** During switching or when ON, both transistors conduct, potentially leading to a direct path from $V_{DD}$ to GND through the TG, causing static power consumption if the control signals are not carefully managed.

**Reference:** Rabaey (2/e) - Chapter 5 covers Pass-Transistor Logic and Transmission Gates. Wolf (4/e) - Chapter 4 also delves into CMOS Logic Styles, including transmission gates.

---

### 4. Realization of Logic Gates using Transmission Gates

#### 4.1. NOT Gate (Inverter) using Transmission Gates

*   **Circuit:** A transmission gate controlled by input $A$. The output is connected to $V_{DD}$ when $A$ is LOW and to GND when $A$ is HIGH. This is achieved using complementary pass transistors.
    *   NMOS: Gate = $A$, Source = Input Signal, Drain = Output
    *   PMOS: Gate = $\overline{A}$, Source = Input Signal, Drain = Output
    *   This forms a transmission gate.
    *   To make it an inverter, the input signal is fed to the TG. The output is then connected to the input of another TG.
*   **Correct Implementation (using TGs for switching):**
    *   Control signals $C$ and $\overline{C}$.
    *   Input signal $A$.
    *   Output node $Y$.
    *   TG1: Controlled by $A$ and $\overline{A}$. Connects input $A$ to $Y$.
    *   TG2: Controlled by $\overline{A}$ and $A$. Connects $V_{DD}$ to $Y$ when $A$ is LOW, and GND to $Y$ when $A$ is HIGH.
*   **Simpler NOT Gate:** The direct implementation of a NOT gate using pass transistors involves a series NMOS and PMOS.
    *   NMOS: Gate = Input A, Source = Output, Drain = GND
    *   PMOS: Gate = $\overline{\text{Input A}}$, Source = Output, Drain = $V_{DD}$
    *   This forms a standard CMOS inverter. The "pass transistor" aspect here is that the signal is "passed" through these devices to either $V_{DD}$ or GND.

#### 4.2. AND Gate using Transmission Gates

*   **Circuit:**
    *   Inputs: A, B. Control signals: $C_A, \overline{C_A}, C_B, \overline{C_B}$.
    *   A transmission gate (TG1) is controlled by $A$ and $\overline{A}$. Its input is $B$, and its output is connected to the input of another TG (TG2).
    *   TG2 is controlled by $B$ and $\overline{B}$. Its input is $V_{DD}$ (or a logic HIGH source).
    *   The output of TG2 is the final output $Y$.
*   **Operation (Incorrect/Difficult to implement directly for AND):** Let's consider a more standard approach using pass gates for multiplexing which leads to AND/OR realization.
*   **Using TGs for Multiplexer (which can implement AND/OR):**
    *   A 2-to-1 multiplexer can be built using two TGs and an inverter.
    *   Select line S: Controls TG1 (ON when S=1) and TG2 (ON when S=0).
    *   TG1: Controlled by S and $\overline{S}$. Input = I1. Output = Y.
    *   TG2: Controlled by $\overline{S}$ and S. Input = I0. Output = Y.
    *   Output $Y = S \cdot I_1 + \overline{S} \cdot I_0$.
*   **Implementing AND using Multiplexer:** To get $A \cdot B$:
    *   Set S = A, I1 = B, I0 = 0 (GND).
    *   Then $Y = A \cdot B + \overline{A} \cdot 0 = A \cdot B$.
*   **Implementing OR using Multiplexer:** To get $A + B$:
    *   Set S = A, I1 = 1 ($V_{DD}$), I0 = B.
    *   Then $Y = A \cdot 1 + \overline{A} \cdot B = A + \overline{A} \cdot B = A + B$.

#### 4.3. XOR Gate using Transmission Gates

*   **Circuit:** A common implementation uses four transmission gates.
    *   Inputs: A, B.
    *   Output: Y.
    *   TG1: Controlled by A, Input=B, Output=Node X.
    *   TG2: Controlled by $\overline{A}$, Input=$\overline{B}$, Output=Node X.
    *   TG3: Controlled by A, Input=$\overline{B}$, Output=Node Y.
    *   TG4: Controlled by $\overline{A}$, Input=B, Output=Node Y.
    *   The output Y is directly from TG3/TG4.
*   **Operation:**
    *   If A=0, $\overline{A}=1$: TG1 OFF, TG2 ON (X= $\overline{B}$). TG3 OFF, TG4 ON (Y= B). Output is B.
    *   If A=1, $\overline{A}=0$: TG1 ON (X= B). TG2 OFF. TG3 ON (Y=$\overline{B}$). TG4 OFF. Output is $\overline{B}$.
    *   This logic is $Y = A \oplus B$.

**Reference:** Smith (2002) - Chapter 4 discusses logic gate implementation using various techniques, including pass-transistor logic.

---

### 5. Complementary Pass Transistors and CPL Logic

#### 5.1. Complementary Pass Transistors

*   This term generally refers to using both NMOS and PMOS transistors in a pass-transistor configuration.
*   The most well-known example is the **Transmission Gate (TG)**, where an NMOS and PMOS are in parallel with complementary control signals.

#### 5.2. Complementary Pass Transistor Logic (CPL)

*   **CPL** is a logic style that utilizes pass transistors (specifically NMOS in series for pull-down and complementary PMOS in series for pull-up) to implement logic functions.
*   A common CPL implementation for a function $F$ involves:
    *   A **pull-down network** of series NMOS transistors controlled by input signals to pull the output low.
    *   A **pull-up network** of series PMOS transistors controlled by inverted input signals to pull the output high.
    *   The output node is common to both networks.
*   **Example: CPL AND gate (A.B)**
    *   NMOS series: Gate A, Drain to intermediate node; Gate B, Drain to output, Source to GND. (Requires A=1 AND B=1 to pull to GND).
    *   PMOS series: Gate $\overline{A}$, Drain to intermediate node; Gate $\overline{B}$, Drain to output, Source to $V_{DD}$. (Requires $\overline{A}=0$ AND $\overline{B}=0$ to pull to $V_{DD}$).
    *   **Problem:** This structure, if implemented naively, has voltage drop issues for the HIGH signal.

#### 5.3. CPL with Level Restoration

*   To address the voltage drop issue in CPL, **level restoration** techniques are often employed. This usually involves adding a standard CMOS inverter at the output of the pass-transistor network. The inverter receives the attenuated signal and restores it to proper logic levels.

#### 5.4. Advantages and Disadvantages of CPL

*   **Advantages:**
    *   **Reduced Transistor Count:** Compared to static CMOS for some complex functions, CPL can be more compact.
    *   **Fast:** The pull-down or pull-up networks can be very fast.
*   **Disadvantages:**
    *   **Voltage Drop:** Without level restoration, logic levels can degrade.
    *   **Floating Outputs:** When the pass-transistor network is OFF, the output is floating, which can lead to issues.
    *   **Requires Inverters:** For proper logic levels, inverters are often needed at the output, increasing area and delay.
    *   **Power Consumption:** Similar to TGs, can have static power if not designed carefully.

**Reference:** Kang, Leblebici, Kim (4/e) - Chapter 4 on MOSFETs in digital circuits. Wolf (4/e) - Chapter 4 discusses various logic styles.

---

### 6. Comparison of Pass Transistor and Transmission Gate Logic

| Feature             | Single Pass Transistor (NMOS/PMOS) | Transmission Gate (NMOS + PMOS)                                 |
| :------------------ | :--------------------------------- | :-------------------------------------------------------------- |
| **Switching Action** | Acts as a switch; can pass signal | Acts as a bidirectional switch; can pass signal               |
| **Signal Integrity** | Suffers voltage drop for logic '1' (NMOS) / logic '0' (PMOS) | Excellent; passes both logic '0' and '1' with minimal drop |
| **Logic Capability** | Limited for certain functions; needs complementary devices for full swing | Can implement complex logic; forms basis of multiplexers       |
| **Area**            | Small (1 transistor)               | Larger (2 transistors + control logic)                          |
| **Power Consumption** | Lower static, higher dynamic       | Higher static power consumption (if not carefully controlled), potentially lower dynamic |
| **Complexity**      | Simpler to implement basic gates   | More complex control logic needed                               |
| **Common Use**      | Multiplexers, basic routing        | Multiplexers, XOR gates, adders, arithmetic circuits            |

---

### 7. Important Points to Remember

*   **Pass transistors act as switches.** Their conductivity depends on the gate-source voltage ($V_{GS}$) relative to the threshold voltage ($V_{th}$).
*   **NMOS pass transistors are good for passing logic '0' but suffer from a voltage drop when passing logic '1'.** This leads to logic level degradation.
*   **PMOS pass transistors are good for passing logic '1' but suffer from a voltage drop when passing logic '0'.**
*   **Transmission Gates (TGs) overcome the limitations of single pass transistors** by combining NMOS and PMOS in parallel with complementary control signals. They offer **full voltage swing** and are bidirectional.
*   **CPL logic** often uses pass transistors but may require output inverters for level restoration.
*   **Logic functions can be implemented using TGs**, often by building multiplexers and then using them to realize AND, OR, etc.
*   **XOR gates are a classic example of efficient implementation using TGs.**
*   **Trade-offs:** While TGs offer better performance, they consume more area and can have higher static power consumption than simpler pass-transistor implementations.

---

### 8. Practice Questions and Exercises

**Question 1:**
Draw the circuit diagram for a 2-input AND gate implemented using only NMOS pass transistors. Explain its operation and identify its primary limitation.

**Answer:**
*   **Circuit:** Two NMOS transistors connected in series.
    *   Input A to the gate of NMOS1.
    *   Input B to the gate of NMOS2.
    *   Source of NMOS1 to the drain of NMOS2.
    *   Drain of NMOS2 to the output $Y$.
    *   Source of NMOS2 to Ground.
*   **Operation:** The output $Y$ is pulled to ground only if both A and B are HIGH. If either A or B is LOW, the corresponding NMOS will be OFF, and the path to ground is broken. Thus, $Y=A \cdot B$.
*   **Limitation:** When A=1 and B=1, the output $Y$ is connected to ground through two conducting NMOS transistors. The voltage passed from $V_{DD}$ (if it were connected to the drain of NMOS1) would be attenuated due to the voltage drop across the series NMOS transistors. The output '1' would be $V_{DD} - V_{DS(sat1)} - V_{DS(sat2)}$.

**Question 2:**
Explain the operation of a Transmission Gate (TG). Why is it preferred over a single NMOS pass transistor for passing logic '1'?

**Answer:**
*   **Operation:** A TG consists of an NMOS and a PMOS transistor in parallel, controlled by complementary signals $C$ and $\overline{C}$.
    *   When $C=1, \overline{C}=0$: Both NMOS and PMOS are ON, creating a low-resistance path for signal transmission.
    *   When $C=0, \overline{C}=1$: Both NMOS and PMOS are OFF, creating a high-resistance path (open circuit).
*   **Preference over NMOS for passing logic '1':** When passing a logic '1' (input is $V_{DD}$), an NMOS transistor experiences a voltage drop ($V_{DS(sat)}$), making the output $V_{DD} - V_{DS(sat)}$. In a TG, when passing $V_{DD}$, the NMOS conducts strongly. The PMOS is also ON and its negative threshold voltage helps pull the output voltage closer to $V_{DD}$. This significantly reduces the voltage drop, providing a much stronger logic '1' at the output.

**Question 3:**
Design a 2-to-1 multiplexer using transmission gates. Show the circuit and write its truth table or functional expression.

**Answer:**
*   **Circuit:**
    *   Inputs: $I_0$, $I_1$.
    *   Select: $S$.
    *   Output: $Y$.
    *   TG1: Controlled by $S$ (gate of NMOS) and $\overline{S}$ (gate of PMOS). Input = $I_1$. Output = $Y$.
    *   TG2: Controlled by $\overline{S}$ (gate of NMOS) and $S$ (gate of PMOS). Input = $I_0$. Output = $Y$.
    *   Need to generate $\overline{S}$ for the control signals.
*   **Functional Expression:** $Y = S \cdot I_1 + \overline{S} \cdot I_0$.
*   **Truth Table:**
    | S   | $I_0$ | $I_1$ | Y   |
    | :-- | :---- | :---- | :-- |
    | 0   | 0     | 0     | 0   |
    | 0   | 0     | 1     | 0   |
    | 0   | 1     | 0     | 1   |
    | 0   | 1     | 1     | 1   |
    | 1   | 0     | 0     | 0   |
    | 1   | 0     | 1     | 1   |
    | 1   | 1     | 0     | 0   |
    | 1   | 1     | 1     | 1   |

**Question 4:**
Briefly discuss the concept of "level restoration" in the context of CPL logic.

**Answer:**
Level restoration is a technique used in CPL logic (and other pass-transistor logic styles) to compensate for the voltage drop that occurs when passing logic '1' through NMOS pass transistors. Typically, it involves adding a standard CMOS inverter at the output of the pass-transistor network. This inverter takes the attenuated logic signal and amplifies it to the proper full voltage swing levels (0V for logic '0' and $V_{DD}$ for logic '1'), ensuring reliable operation of subsequent logic stages.

---

This concludes the study notes for the Realization of Logic Gates using Pass Transistors and Complementary Pass Transistors. Remember to consult the provided textbooks for more in-depth analysis and specific circuit examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
