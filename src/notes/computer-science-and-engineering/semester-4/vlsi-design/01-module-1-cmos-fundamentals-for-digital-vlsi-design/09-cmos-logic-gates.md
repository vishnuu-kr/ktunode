---
title: "CMOS logic gates"
subject: "VLSI DESIGN"
module: "Module 1: CMOS Fundamentals for Digital VLSI Design :"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b2e8"
status: "completed"
scrapedAt: "2026-05-20T16:17:04.132Z"
---
## VLSI Design: Module 1 - CMOS Fundamentals for Digital VLSI Design

### Topic: CMOS Logic Gates

**Learning Outcomes:**

*   Understand the basic structure and operation of CMOS inverters.
*   Design and analyze different CMOS logic gate implementations (NAND, NOR, AND, OR, XOR, XNOR).
*   Understand the transistor sizing implications for different CMOS logic gate configurations.
*   Calculate the switching threshold and noise margins of CMOS logic gates.
*   Understand the advantages and disadvantages of CMOS logic compared to other logic families.

---

**1. Introduction to CMOS Logic Gates**

*   **Definition:** CMOS (Complementary Metal-Oxide-Semiconductor) logic gates are digital circuits built using both NMOS (N-channel MOS) and PMOS (P-channel MOS) transistors.
*   **Key Feature:** CMOS gates consume very little static power, making them highly efficient for digital integrated circuits.
*   **Basic Structure:** A CMOS gate consists of two networks:
    *   **Pull-Up Network (PUN):** Constructed using PMOS transistors and connects the output to VDD (supply voltage). The PUN activates when the input is logic low (0).
    *   **Pull-Down Network (PDN):** Constructed using NMOS transistors and connects the output to GND (ground). The PDN activates when the input is logic high (1).
*   **Complementary Operation:** The PUN and PDN are complementary, meaning that for any input combination, one network is ON (conducting) and the other is OFF (non-conducting). This ensures a clear logic level at the output (either a strong logic 0 or a strong logic 1).

**2. CMOS Inverter (NOT Gate)**

*   **Circuit:** The simplest CMOS gate, consisting of one NMOS transistor and one PMOS transistor connected in series. The input (A) is connected to the gates of both transistors. The output (Y) is taken from the drain connection.
*   **Operation:**
    *   **A = 0:** PMOS is ON, NMOS is OFF. The output (Y) is pulled up to VDD (logic 1).
    *   **A = 1:** PMOS is OFF, NMOS is ON. The output (Y) is pulled down to GND (logic 0).
*   **Truth Table:**

    | A | Y |
    |---|---|
    | 0 | 1 |
    | 1 | 0 |
*   **Switching Threshold (V<sub>th</sub>):** The input voltage at which the output transitions from high to low (or vice versa). Ideally, V<sub>th</sub> = VDD/2.
*   **Noise Margin:**  A measure of the gate's ability to tolerate noise on its input without causing an incorrect output.
    *   **NM<sub>H</sub> (Noise Margin High):** V<sub>OH</sub> - V<sub>IH</sub>
    *   **NM<sub>L</sub> (Noise Margin Low):** V<sub>IL</sub> - V<sub>OL</sub>
    *   Where:
        *   V<sub>OH</sub>: Output High Voltage
        *   V<sub>OL</sub>: Output Low Voltage
        *   V<sub>IH</sub>: Input High Voltage
        *   V<sub>IL</sub>: Input Low Voltage

**3. CMOS NAND Gate**

*   **Circuit:**  Two NMOS transistors in series in the PDN and two PMOS transistors in parallel in the PUN.
*   **Operation:**
    *   Output is LOW (0) only when BOTH inputs (A and B) are HIGH (1).
    *   If either A or B is LOW (0), the output is HIGH (1).
*   **Truth Table:**

    | A | B | Y |
    |---|---|---|
    | 0 | 0 | 1 |
    | 0 | 1 | 1 |
    | 1 | 0 | 1 |
    | 1 | 1 | 0 |
*   **Transistor Sizing:**  For equal current driving capability as an inverter, the NMOS transistors in the NAND gate need to be sized larger since they are in series.  Typically, they are sized 2x the size of the NMOS in the inverter. PMOS are sized based on the drive strength required.

**4. CMOS NOR Gate**

*   **Circuit:** Two NMOS transistors in parallel in the PDN and two PMOS transistors in series in the PUN.
*   **Operation:**
    *   Output is LOW (0) if EITHER input (A or B) is HIGH (1).
    *   Output is HIGH (1) only when BOTH inputs are LOW (0).
*   **Truth Table:**

    | A | B | Y |
    |---|---|---|
    | 0 | 0 | 1 |
    | 0 | 1 | 0 |
    | 1 | 0 | 0 |
    | 1 | 1 | 0 |
*   **Transistor Sizing:**  For equal current driving capability as an inverter, the PMOS transistors in the NOR gate need to be sized larger since they are in series.  Typically, they are sized 2x the size of the PMOS in the inverter.  NMOS are sized based on drive strength required.

**5. Complex CMOS Logic Gates (AND, OR, XOR, XNOR)**

*   **AND Gate:** Can be implemented by cascading a NAND gate with an inverter.
*   **OR Gate:** Can be implemented by cascading a NOR gate with an inverter.
*   **XOR Gate:**  More complex implementation. One common method uses transmission gates or pass transistors. Another way is to synthesize using basic NAND and NOR gates based on the logic equation  Y = A'B + AB'.
*   **XNOR Gate:** Also complex. It is the complement of the XOR gate.  Can be implemented by inverting the output of an XOR gate, or by synthesizing using basic NAND and NOR gates based on the logic equation Y = A'B' + AB.

**6. Transistor Sizing in CMOS Logic Gates**

*   **Purpose:** To ensure equal rise and fall times and symmetric switching characteristics.
*   **Considerations:**
    *   **Mobility Difference:**  Electrons (in NMOS) have higher mobility than holes (in PMOS).  Therefore, PMOS transistors are often sized larger than NMOS transistors to compensate for this difference and achieve similar current drive strength.
    *   **Series vs. Parallel Transistors:** As explained earlier, transistors in series effectively reduce the overall drive strength. Sizing compensates for this. Transistors in parallel increase drive strength.
*   **General Rule:**  Increase the width of the transistors in series to achieve comparable drive strength to a single transistor.

**7. Advantages and Disadvantages of CMOS Logic**

*   **Advantages:**
    *   **Low Static Power Dissipation:** Almost no current flows when the gate is in a stable logic state.
    *   **High Noise Margin:**  Provides good immunity to noise.
    *   **Good Switching Speed:** Can achieve high-speed operation.
    *   **Scalability:**  CMOS technology scales well with process advancements.
    *   **High Input Impedance:**  Gate oxide provides extremely high input impedance.
*   **Disadvantages:**
    *   **More Complex Fabrication:**  Requires more processing steps than simpler logic families like NMOS.
    *   **Larger Area:**  Compared to some other logic families.

**8. Important Points to Remember**

*   The PUN and PDN are *always* complementary.
*   CMOS gates provide a rail-to-rail output swing (from GND to VDD).
*   Transistor sizing is crucial for performance optimization.
*   CMOS is the dominant technology for modern digital VLSI design.

**Practice Questions/Exercises:**

1.  **Draw the transistor-level schematic of a 3-input NAND gate.**
    *   **Answer:** Three NMOS transistors in series in the PDN, and three PMOS transistors in parallel in the PUN.  The output is low only when all three inputs are high.

2.  **Explain why PMOS transistors are often sized larger than NMOS transistors in CMOS logic gates.**
    *   **Answer:**  Electrons have higher mobility than holes.  Therefore, PMOS transistors (which conduct holes) are sized larger to compensate for the lower mobility and achieve similar current drive strength compared to NMOS transistors (which conduct electrons).

3.  **Design a CMOS logic gate that implements the function Y = (A + B)C'.**
    *   **Answer:**
        *   **PDN:** Two NMOS transistors (A and B) in parallel, all of that in series with NMOS C.
        *   **PUN:** Two PMOS transistors (A and B) in series, all of that in parallel with PMOS C. (Remember the duality - series PMOS corresponds to parallel NMOS and vice versa.)

4.  **Calculate the Noise Margin High (NMH) and Noise Margin Low (NML) for a CMOS inverter with the following parameters: VOH = 3.3V, VOL = 0.2V, VIH = 2.0V, VIL = 0.8V.**
    *   **Answer:**
        *   NMH = VOH - VIH = 3.3V - 2.0V = 1.3V
        *   NML = VIL - VOL = 0.8V - 0.2V = 0.6V

5.  **Explain the significance of the switching threshold (Vth) in a CMOS inverter.**
    *   **Answer:** The switching threshold (Vth) represents the input voltage at which the inverter switches from a high output to a low output (or vice-versa).  Ideally, Vth should be VDD/2 to ensure equal high and low noise margins and symmetric switching characteristics. An improperly adjusted Vth can lead to degraded performance or even malfunctioning of the circuit.
---
