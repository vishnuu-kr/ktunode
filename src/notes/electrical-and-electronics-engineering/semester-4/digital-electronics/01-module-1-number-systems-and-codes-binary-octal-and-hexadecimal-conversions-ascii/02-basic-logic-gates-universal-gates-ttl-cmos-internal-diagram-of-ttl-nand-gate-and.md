---
title: "Basic logic gates – universal gates – TTL – CMOS – Internal diagram of TTL NAND gate and CMOS NOR gate – comparison of CMOS and TTL performance."
subject: "DIGITAL ELECTRONICS"
module: "Module 1: Number Systems and Codes – binary, octal and hexadecimal – conversions – ASCII code, Excess – 3 code, Gray code, BCD code Signed numbers – 1’s complement and 2’s complement – addition and subtraction"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e4a"
status: "completed"
scrapedAt: "2026-05-23T16:15:49.080Z"
---
Sure, here are comprehensive study notes for the topic "Basic logic gates – universal gates – TTL – CMOS – Internal diagram of TTL NAND gate and CMOS NOR gate – comparison of CMOS and TTL performance." from Module 1 of Digital Electronics.

---

# Module 1: Number Systems and Codes – Digital Logic Gates and Technologies

## Topic: Basic Logic Gates, Universal Gates, TTL and CMOS Technologies

**Learning Outcomes:**

*   Understand the fundamental building blocks of digital circuits: basic logic gates.
*   Identify and utilize universal gates for implementing any logic function.
*   Explain the principles behind Transistor-Transistor Logic (TTL) and Complementary Metal-Oxide-Semiconductor (CMOS) technologies.
*   Analyze the internal structure of a TTL NAND gate and a CMOS NOR gate.
*   Compare the performance characteristics of TTL and CMOS technologies.

**Course Outcomes Addressed:**

*   **CO1:** Identify various number systems, binary codes and formulate digital functions using Boolean algebra. (This topic directly relates to formulating digital functions through logic gates.)
*   **CO2:** Design combinational logic circuits. (Logic gates are the fundamental components for designing combinational circuits.)
*   **CO6:** Design and realize hardware circuits. medium complexity practical digital (Understanding logic gates and technologies is crucial for hardware realization.)

---

## 1. Basic Logic Gates

Logic gates are the fundamental building blocks of all digital circuits. They perform basic logical operations on one or more binary inputs to produce a single binary output. The operation of a logic gate is defined by its truth table.

### 1.1. AND Gate

*   **Symbol:**
    ![AND Gate Symbol](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Logic_AND.svg/120px-Logic_AND.svg.png)
*   **Description:** The output of an AND gate is HIGH (1) only if all of its inputs are HIGH. Otherwise, the output is LOW (0).
*   **Boolean Expression:** $Y = A \cdot B$ (or $Y = AB$)
*   **Truth Table:**
    | A | B | Y |
    |---|---|---|
    | 0 | 0 | 0 |
    | 0 | 1 | 0 |
    | 1 | 0 | 0 |
    | 1 | 1 | 1 |
*   **Analogy:** Think of two switches in series. The light bulb (output) only turns on if both switches (inputs) are closed.

### 1.2. OR Gate

*   **Symbol:**
    ![OR Gate Symbol](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Logic_OR.svg/120px-Logic_OR.svg.png)
*   **Description:** The output of an OR gate is HIGH (1) if at least one of its inputs is HIGH. The output is LOW (0) only if all inputs are LOW.
*   **Boolean Expression:** $Y = A + B$
*   **Truth Table:**
    | A | B | Y |
    |---|---|---|
    | 0 | 0 | 0 |
    | 0 | 1 | 1 |
    | 1 | 0 | 1 |
    | 1 | 1 | 1 |
*   **Analogy:** Think of two switches in parallel. The light bulb (output) turns on if either switch (or both) is closed.

### 1.3. NOT Gate (Inverter)

*   **Symbol:**
    ![NOT Gate Symbol](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Logic_NOT.svg/120px-Logic_NOT.svg.png)
*   **Description:** A NOT gate has only one input and one output. The output is the inverse of the input. If the input is HIGH, the output is LOW, and vice-versa.
*   **Boolean Expression:** $Y = \overline{A}$ (or $Y = A'$)
*   **Truth Table:**
    | A | Y |
    |---|---|
    | 0 | 1 |
    | 1 | 0 |
*   **Analogy:** A light switch that turns the light on when the switch is down and off when the switch is up.

### 1.4. NAND Gate (NOT-AND)

*   **Symbol:**
    ![NAND Gate Symbol](https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Logic_NAND.svg/120px-Logic_NAND.svg.png)
*   **Description:** A NAND gate is an AND gate followed by a NOT gate. Its output is LOW (0) only when all inputs are HIGH. Otherwise, the output is HIGH (1).
*   **Boolean Expression:** $Y = \overline{A \cdot B}$
*   **Truth Table:**
    | A | B | Y |
    |---|---|---|
    | 0 | 0 | 1 |
    | 0 | 1 | 1 |
    | 1 | 0 | 1 |
    | 1 | 1 | 0 |

### 1.5. NOR Gate (NOT-OR)

*   **Symbol:**
    ![NOR Gate Symbol](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Logic_NOR.svg/120px-Logic_NOR.svg.png)
*   **Description:** A NOR gate is an OR gate followed by a NOT gate. Its output is HIGH (1) only when all inputs are LOW. Otherwise, the output is LOW (0).
*   **Boolean Expression:** $Y = \overline{A + B}$
*   **Truth Table:**
    | A | B | Y |
    |---|---|---|
    | 0 | 0 | 1 |
    | 0 | 1 | 0 |
    | 1 | 0 | 0 |
    | 1 | 1 | 0 |

### 1.6. Exclusive OR (XOR) Gate

*   **Symbol:**
    ![XOR Gate Symbol](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Logic_XOR.svg/120px-Logic_XOR.svg.png)
*   **Description:** The output of an XOR gate is HIGH (1) if the inputs are different. The output is LOW (0) if the inputs are the same.
*   **Boolean Expression:** $Y = A \oplus B$ (or $Y = A\overline{B} + \overline{A}B$)
*   **Truth Table:**
    | A | B | Y |
    |---|---|---|
    | 0 | 0 | 0 |
    | 0 | 1 | 1 |
    | 1 | 0 | 1 |
    | 1 | 1 | 0 |
*   **Application:** Used in parity generators/checkers, arithmetic circuits (adders).

### 1.7. Exclusive NOR (XNOR) Gate

*   **Symbol:**
    ![XNOR Gate Symbol](https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Logic_XNOR.svg/120px-Logic_XNOR.svg.png)
*   **Description:** The output of an XNOR gate is HIGH (1) if the inputs are the same. The output is LOW (0) if the inputs are different. It is the inverse of the XOR gate.
*   **Boolean Expression:** $Y = \overline{A \oplus B}$ (or $Y = A\overline{B} + \overline{A}B$)
*   **Truth Table:**
    | A | B | Y |
    |---|---|---|
    | 0 | 0 | 1 |
    | 0 | 1 | 0 |
    | 1 | 0 | 0 |
    | 1 | 1 | 1 |
*   **Application:** Used in equality comparators.

---

## 2. Universal Gates

Universal gates are logic gates that can be used to construct any other basic logic gate (AND, OR, NOT) and therefore any digital circuit. The NAND and NOR gates are universal gates.

### 2.1. NAND Gate as a Universal Gate

*   **NOT Gate from NAND:** Connect both inputs of a NAND gate together.
    *   $Y = \overline{A \cdot A} = \overline{A}$
*   **AND Gate from NAND:** Use a NAND gate followed by a NOT gate (which is another NAND gate).
    *   $Y = \overline{\overline{A \cdot B}} = A \cdot B$
*   **OR Gate from NAND:** Use De Morgan's theorem: $A + B = \overline{\overline{A} + \overline{B}} = \overline{\overline{A}} \cdot \overline{\overline{B}} = \overline{(\overline{A})} \cdot \overline{(\overline{B})}$. This can be implemented using three NAND gates.
    *   Input A goes to the first input of a NAND gate.
    *   Input B goes to the first input of a second NAND gate.
    *   The second inputs of both NAND gates are connected together (acting as inverters).
    *   The outputs of these two NAND gates are fed into the inputs of a third NAND gate.
    *   $Y = \overline{\overline{A}} \cdot \overline{\overline{B}} = A \cdot B$ (Wait, this is for AND). Let's correct for OR.
    *   Using De Morgan's: $A+B = \overline{\overline{A+B}}$. We know that $\overline{A+B}$ is a NOR gate. To get OR using NANDs: $A+B = \overline{(\overline{A})(\overline{B})}$.
        1.  Invert A using a NAND gate: $\overline{A}$
        2.  Invert B using a NAND gate: $\overline{B}$
        3.  NAND the results: $\overline{(\overline{A}) \cdot (\overline{B})}$ which by De Morgan's is $A+B$.
*   **Reference:** Floyd, T.L. (2017). *Digital Fundamentals*. Chapter 5.

### 2.2. NOR Gate as a Universal Gate

*   **NOT Gate from NOR:** Connect both inputs of a NOR gate together.
    *   $Y = \overline{A + A} = \overline{A}$
*   **OR Gate from NOR:** Use a NOR gate followed by a NOT gate (which is another NOR gate).
    *   $Y = \overline{\overline{A + B}} = A + B$
*   **AND Gate from NOR:** Use De Morgan's theorem: $A \cdot B = \overline{\overline{A \cdot B}} = \overline{\overline{A} + \overline{B}}$. This can be implemented using three NOR gates.
    1.  Invert A using a NOR gate: $\overline{A}$
    2.  Invert B using a NOR gate: $\overline{B}$
    3.  NOR the results: $\overline{(\overline{A}) + (\overline{B})}$ which by De Morgan's is $A \cdot B$.
*   **Reference:** Malvino, A.P., & Leach, D.P. (2018). *Digital Principles and Applications*. Chapter 4.

---

## 3. Transistor-Transistor Logic (TTL)

TTL is a family of digital integrated circuits (ICs) that use bipolar junction transistors (BJTs) as active components.

### 3.1. Basic Principle

*   BJTs are used for both logic functions and switching.
*   **Output Stage:** Typically uses a totem-pole configuration for faster switching and lower output impedance.
*   **Input Stage:** Often uses a multi-emitter transistor to detect multiple inputs simultaneously.

### 3.2. Characteristics

*   **Speed:** Relatively fast, but slower than CMOS for most applications.
*   **Power Consumption:** Higher than CMOS, especially in static (not switching) states.
*   **Fan-out:** Generally higher than CMOS in older technologies.
*   **Noise Immunity:** Good noise immunity.
*   **Voltage Levels:**
    *   Low Input (Logic 0): 0V to 0.8V
    *   High Input (Logic 1): 2V to 5V (typically Vcc)
    *   Low Output (Logic 0): 0V to 0.4V
    *   High Output (Logic 1): 2.4V to 5V (typically Vcc)
*   **Power Supply:** Typically 5V (Vcc).

### 3.3. TTL Families

Various TTL sub-families exist, offering different speed and power characteristics (e.g., LS - Low Power Schottky, ALS - Advanced Low Power Schottky, F - Fast).

---

## 4. Complementary Metal-Oxide-Semiconductor (CMOS)

CMOS is a technology that uses MOSFETs (Metal-Oxide-Semiconductor Field-Effect Transistors) for its logic gates. It is the dominant technology for modern digital ICs due to its low power consumption and high integration density.

### 4.1. Basic Principle

*   Uses pairs of P-channel MOSFETs (PMOS) and N-channel MOSFETs (NMOS).
*   In each logic gate, one set of transistors is turned ON while the other is turned OFF, creating a high-impedance (floating) state only during switching.
*   **PMOS:** Conducts when its gate-source voltage ($V_{GS}$) is negative. Used to connect the output to the positive supply voltage ($V_{DD}$).
*   **NMOS:** Conducts when its gate-source voltage ($V_{GS}$) is positive. Used to connect the output to ground (0V).

### 4.2. Characteristics

*   **Speed:** Can be very fast, especially with advancements in fabrication.
*   **Power Consumption:** Extremely low static power consumption. Power consumption increases with switching frequency.
*   **Fan-out:** Lower than TTL in older technologies but can be optimized.
*   **Noise Immunity:** Generally good, but can be more sensitive to voltage fluctuations than TTL.
*   **Voltage Levels:**
    *   Low Input (Logic 0): 0V to VDD/2 (or less)
    *   High Input (Logic 1): VDD/2 (or more) to VDD
    *   Low Output (Logic 0): close to 0V
    *   High Output (Logic 1): close to VDD
*   **Power Supply:** Can operate over a wide range of voltages (e.g., 3.3V, 5V, 1.8V).

### 4.3. CMOS Logic Gate Structure

*   **CMOS Inverter:** One PMOS and one NMOS transistor.
    *   If Input A is LOW (0V), PMOS is ON, NMOS is OFF. Output is HIGH (VDD).
    *   If Input A is HIGH (VDD), PMOS is OFF, NMOS is ON. Output is LOW (0V).
*   **CMOS NAND Gate:** Two PMOS transistors in series and two NMOS transistors in parallel.
*   **CMOS NOR Gate:** Two PMOS transistors in parallel and two NMOS transistors in series.

---

## 5. Internal Diagram of TTL NAND Gate

A typical TTL NAND gate (e.g., 74xx00 series) uses a multi-emitter transistor as its input stage.

**Simplified Internal Structure:**

1.  **Input Stage (Multi-emitter Transistor $Q_1$):**
    *   The emitters of $Q_1$ are connected to the external inputs (A, B).
    *   The collector of $Q_1$ is connected to the base of $Q_2$.
    *   When both inputs are HIGH, $Q_1$ is saturated, and current flows from Vcc through the collector to the base of $Q_2$, turning $Q_2$ ON.
    *   When at least one input is LOW, $Q_1$ is cut off, and $Q_2$ is turned OFF.

2.  **Phase Splitter ($Q_2$):**
    *   A common-emitter amplifier that inverts the signal and drives the output stage.

3.  **Output Stage (Totem-Pole):**
    *   Consists of two transistors, $Q_3$ (PNP or PMOS in some variations) and $Q_4$ (NPN or NMOS).
    *   When $Q_2$ is ON, it drives $Q_3$ OFF and $Q_4$ ON, pulling the output LOW (to ground).
    *   When $Q_2$ is OFF, it turns $Q_3$ ON and $Q_4$ OFF, pushing the output HIGH (to Vcc).
    *   A "clamping" diode or resistor is often included to prevent "shoot-through" current when both $Q_3$ and $Q_4$ are momentarily ON during switching.

**Example of a 2-input TTL NAND Gate:**

*   **Input:** Two emitters of $Q_1$ connect to inputs A and B.
*   **$Q_1$:** Multi-emitter NPN transistor.
*   **$Q_2$:** NPN transistor (phase splitter).
*   **$Q_3$:** PNP transistor (upper pull-up).
*   **$Q_4$:** NPN transistor (lower pull-down).
*   **$Q_5$:** NPN transistor (driver for $Q_4$).
*   **$Q_6$:** PNP transistor (driver for $Q_3$). (Simpler versions may combine these.)
*   **Diode $D_1$:** Connects base of $Q_2$ to collector of $Q_1$.
*   **Resistor $R_1$:** Connected from Vcc to the collector of $Q_1$.
*   **Resistor $R_2$:** Connected from Vcc to the base of $Q_3$. (Often omitted in simplified diagrams).
*   **Resistor $R_3$:** Connected from Vcc to the base of $Q_5$.

*(A detailed schematic is complex and depends on the specific TTL family. Refer to textbooks for precise diagrams.)*

**How it works (2-input NAND):**

*   **Inputs A=0, B=0:** Emitters of $Q_1$ are at 0V. $Q_1$ is OFF. No current flows into the base of $Q_2$. $Q_2$ is OFF. $Q_3$ turns ON (through $R_2$), $Q_4$ turns OFF. Output is HIGH (1).
*   **Inputs A=0, B=1:** Emitters of $Q_1$ are at 0V and 1-2V. $Q_1$ is OFF. No current flows into the base of $Q_2$. $Q_2$ is OFF. $Q_3$ ON, $Q_4$ OFF. Output is HIGH (1).
*   **Inputs A=1, B=0:** Similar to above. $Q_1$ is OFF. Output is HIGH (1).
*   **Inputs A=1, B=1:** Both emitters of $Q_1$ are at 2V+. $Q_1$ saturates, conducting current from Vcc through $R_1$ to the collector, which forward biases the base-emitter junction of $Q_2$, turning $Q_2$ ON. $Q_2$ conducts, pulling down the base of $Q_4$ (turning it ON) and pulling up the base of $Q_3$ (turning it OFF). $Q_4$ pulls the output LOW (0).

*   **Reference:** Taub, H., & Schilling, D. (2017). *Digital Integrated Electronics*. Chapter 12. Floyd, T.L. (2017). *Digital Fundamentals*. Chapter 10.

---

## 6. Internal Diagram of CMOS NOR Gate

A CMOS NOR gate uses P-channel and N-channel MOSFETs.

**Internal Structure (2-input NOR Gate):**

*   **PMOS Transistors ($Q_1, Q_2$):** Connected in series between the output terminal and $V_{DD}$ (positive supply).
    *   Gate of $Q_1$ connected to input A.
    *   Gate of $Q_2$ connected to input B.
    *   Source of $Q_1$ connected to $V_{DD}$.
    *   Drain of $Q_1$ connected to the source of $Q_2$.
    *   The common drain/source point is the output (Y).

*   **NMOS Transistors ($Q_3, Q_4$):** Connected in parallel between the output terminal and Ground (0V).
    *   Gate of $Q_3$ connected to input A.
    *   Gate of $Q_4$ connected to input B.
    *   Source of $Q_3$ connected to Ground.
    *   Drain of $Q_3$ connected to the output (Y).
    *   Source of $Q_4$ connected to Ground.
    *   Drain of $Q_4$ connected to the output (Y).

**How it works (2-input NOR):**

*   **Inputs A=0, B=0:**
    *   $Q_1$ (PMOS) ON (gate-source voltage $V_{GS} = 0 - V_{DD}$ is negative).
    *   $Q_2$ (PMOS) ON (gate-source voltage $V_{GS} = 0 - V_{DD}$ is negative).
    *   $Q_3$ (NMOS) OFF (gate-source voltage $V_{GS} = 0 - 0$ is zero).
    *   $Q_4$ (NMOS) OFF (gate-source voltage $V_{GS} = 0 - 0$ is zero).
    *   The series PMOS transistors ($Q_1, Q_2$) form a path from $V_{DD}$ to the output. The parallel NMOS transistors ($Q_3, Q_4$) are OFF.
    *   **Output Y = HIGH (1).**

*   **Inputs A=0, B=1:**
    *   $Q_1$ (PMOS) ON.
    *   $Q_2$ (PMOS) OFF (gate-source voltage $V_{GS} = V_{DD} - V_{DD}$ is zero).
    *   $Q_3$ (NMOS) OFF.
    *   $Q_4$ (NMOS) ON (gate-source voltage $V_{GS} = V_{DD} - 0$ is positive).
    *   The path to $V_{DD}$ is broken by $Q_2$. The path to Ground is completed by $Q_4$.
    *   **Output Y = LOW (0).**

*   **Inputs A=1, B=0:**
    *   $Q_1$ (PMOS) OFF.
    *   $Q_2$ (PMOS) ON.
    *   $Q_3$ (NMOS) ON.
    *   $Q_4$ (NMOS) OFF.
    *   The path to $V_{DD}$ is broken by $Q_1$. The path to Ground is completed by $Q_3$.
    *   **Output Y = LOW (0).**

*   **Inputs A=1, B=1:**
    *   $Q_1$ (PMOS) OFF.
    *   $Q_2$ (PMOS) OFF.
    *   $Q_3$ (NMOS) ON.
    *   $Q_4$ (NMOS) ON.
    *   The path to $V_{DD}$ is broken by both $Q_1$ and $Q_2$. The path to Ground is completed by both $Q_3$ and $Q_4$.
    *   **Output Y = LOW (0).**

*   **Reference:** Mano, M.M., & Ciletti, M.D. (2018). *Digital Design: With an Introduction to the Verilog HDL, VHDL, and SystemVerilog*. Chapter 3. Malvino, A.P., & Leach, D.P. (2018). *Digital Principles and Applications*. Chapter 12.

---

## 7. Comparison of CMOS and TTL Performance

| Feature              | TTL (Transistor-Transistor Logic)                                  | CMOS (Complementary Metal-Oxide-Semiconductor)                             | Notes                                                                                              |
| :------------------- | :----------------------------------------------------------------- | :------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| **Basic Component**  | Bipolar Junction Transistors (BJTs)                                | Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFETs)             | Different underlying semiconductor physics.                                                        |
| **Power Consumption**| Relatively High (especially static power)                          | Very Low (especially static power); Power consumption increases with frequency | CMOS is preferred for battery-powered devices and high-density integrated circuits.               |
| **Speed**            | Generally fast, especially older generations.                      | Can be very fast; modern CMOS is very competitive.                         | Speed is highly dependent on specific sub-family and technology node.                              |
| **Noise Immunity**   | Good noise immunity.                                               | Generally good, but can be more sensitive to voltage variations.           | TTL's voltage swing is typically larger, contributing to better noise immunity.                    |
| **Power Supply**     | Typically 5V (Vcc).                                                | Wide range, e.g., 3.3V, 5V, 1.8V.                                          | CMOS's lower voltage operation is a key advantage for power saving and reduced device stress.    |
| **Fan-out**          | Typically higher (ability to drive more gates).                    | Lower in older technologies, but often sufficient; can be optimized.       | Fan-out refers to the number of standard logic gate inputs a single gate output can drive reliably. |
| **Switching Speed**  | Limited by transistor switching times and charge storage effects.  | Limited by parasitic capacitances and gate drive.                          | CMOS generally has sharper switching characteristics.                                              |
| **Input Impedance**  | Relatively low input impedance.                                    | Extremely high input impedance.                                            | High input impedance of CMOS reduces loading on driving gates.                                     |
| **Output Drive**     | Can provide higher output current.                                 | Generally lower output current capability.                                 | TTL is often favored for driving heavier loads or longer transmission lines directly.              |
| **Integration Density**| Lower integration density.                                         | Very high integration density.                                             | CMOS technology allows for millions or billions of transistors on a single chip (e.g., CPUs, RAM). |
| **Cost**             | Can be cost-effective for simpler circuits.                      | Cost-effective due to high integration and mass production.                | CMOS is dominant in most modern digital IC manufacturing.                                          |
| **Radiation Hardness**| Generally more resistant to radiation.                             | More susceptible to radiation effects.                                     | Important for space and nuclear applications.                                                      |

**Important Points to Remember:**

*   **CMOS is the dominant technology for modern digital ICs** due to its extremely low power consumption and high integration density.
*   **TTL is still used in specific applications** where its speed, noise immunity, or output drive capabilities are critical, or in legacy systems.
*   **Understanding the internal structure** of these gates is key to understanding their behavior, limitations, and how they are manufactured.

---

## 8. Practice Questions and Exercises

**Instructions:** Attempt all questions. Answers are provided at the end.

1.  **Logic Gate Identification:**
    *   Draw the symbol and write the Boolean expression for a 3-input OR gate.
    *   What is the output of a NAND gate if its inputs are 1 and 0?

2.  **Universal Gates:**
    *   Show how to implement a NOT gate using only NAND gates.
    *   Show how to implement an OR gate using only NOR gates.

3.  **TTL vs. CMOS:**
    *   Which logic family generally has lower static power consumption?
    *   What is the main advantage of CMOS technology for high-density integrated circuits?
    *   Which logic family typically uses bipolar junction transistors (BJTs)?

4.  **CMOS NOR Gate Analysis:**
    *   For a CMOS NOR gate with inputs A and B, what is the output voltage (in terms of $V_{DD}$ and 0V) when A=1 and B=0?
    *   Which MOSFETs are ON and which are OFF in a CMOS NOR gate when both inputs are 0?

5.  **TTL NAND Gate Analysis:**
    *   In a TTL NAND gate, what happens to the input transistor ($Q_1$) when both inputs are HIGH?
    *   What is the role of the totem-pole output stage in a TTL gate?

---

## 9. Answers to Practice Questions

1.  **Logic Gate Identification:**
    *   **3-input OR Gate:**
        *   Symbol: ![3-input OR Gate Symbol](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Logic_OR.svg/150px-Logic_OR.svg.png) (adapted for 3 inputs)
        *   Boolean Expression: $Y = A + B + C$
    *   **NAND Gate Output:** If inputs are 1 and 0, the output is **1**. (Only when all inputs are 1 is the output 0).

2.  **Universal Gates:**
    *   **NOT gate using NAND:** Connect both inputs of a NAND gate together.
        ```
          A ---| NAND |--- Y = /A
               |______|
        ```
    *   **OR gate using NOR:** Use a NOR gate followed by another NOR gate (acting as an inverter).
        ```
          A ---| NOR |-----| NOR |--- Y = A + B
               |_____|     |_____|
          B ---|     |
               |_____|
        ```
        *Correction from earlier notes:* The correct implementation for OR using NOR gates is to invert the inputs first, then NOR them: $A+B = \overline{\overline{A}+\overline{B}}$.
        ```
          A ---| NOR |-----| NOR |--- Y = A + B
               |_____|     |_____|
          B ---|     |
               |_____|
        ```
        Actually, the correct representation for OR from NORs is:
        ```
          A ---| NOR |-----| NOR |--- Y = A + B
               |_____|     |_____|
          B ---|     |
               |_____|
        ```
        Let's rethink the OR from NOR: $A+B = \overline{\overline{A+B}}$. We need to implement $\overline{A+B}$ first, then invert it.
        1. Implement $\overline{A+B}$ using a NOR gate.
        2. Invert the output of the NOR gate using another NOR gate (inputs tied together).
        This yields $Y = \overline{\overline{A+B}} = A+B$.
        ```
           A ---| NOR |-----| NOR |--- Y = A + B
                |_____|     |_____|
           B ---|     |
                |_____|
        ```
        Yes, this is correct.

3.  **TTL vs. CMOS:**
    *   **Lower Static Power Consumption:** **CMOS**.
    *   **Main Advantage for High-Density ICs:** Very low power consumption and scalability.
    *   **Uses BJTs:** **TTL**.

4.  **CMOS NOR Gate Analysis:**
    *   When A=1 and B=0, the output voltage Y is **LOW (0V)**.
    *   When both inputs are 0: $Q_1$ (PMOS, connected to A) is ON, $Q_2$ (PMOS, connected to B) is ON. $Q_3$ (NMOS, connected to A) is OFF, $Q_4$ (NMOS, connected to B) is OFF.

5.  **TTL NAND Gate Analysis:**
    *   When both inputs are HIGH, the input transistor ($Q_1$) **saturates**, and current flows from Vcc through $Q_1$ to the base of the phase splitter transistor ($Q_2$), turning $Q_2$ ON.
    *   The totem-pole output stage provides a **low-impedance path** to either $V_{CC}$ (for a HIGH output) or ground (for a LOW output), enabling faster switching and higher output current drive.

---

This comprehensive set of notes covers the fundamental logic gates, the concept of universal gates, the principles and internal structures of TTL and CMOS technologies, and a detailed comparison of their performance characteristics, aligning with the stated learning outcomes and course outcomes.
