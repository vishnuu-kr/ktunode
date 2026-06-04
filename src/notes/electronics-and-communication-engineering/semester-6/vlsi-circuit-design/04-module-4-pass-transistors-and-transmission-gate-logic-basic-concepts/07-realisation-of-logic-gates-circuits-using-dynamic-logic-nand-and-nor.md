---
title: "Realisation of logic gates circuits using dynamic logic (NAND and NOR)"
subject: "VLSI CIRCUIT DESIGN"
module: "Module 4: Pass transistors and Transmission gate logic:  Basic concepts"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefda"
status: "completed"
scrapedAt: "2026-05-23T18:03:53.703Z"
---
# VLSI CIRCUIT DESIGN - Module 4: Pass Transistors and Transmission Gate Logic: Basic Concepts

## Topic: Realisation of Logic Gates Circuits using Dynamic Logic (NAND and NOR)

**Course Outcomes Alignment:**

*   **CO4:** Design and analysis of dynamic logic circuits and the implementation of basic storage cells. (Knowledge Level: K3) - This topic directly addresses the design and analysis of dynamic logic circuits.

**Learning Outcomes Covered:**

*   Understanding the fundamental principles of dynamic logic.
*   Realizing basic logic gates (NAND, NOR) using dynamic logic configurations.
*   Analyzing the operation and characteristics of these dynamic logic gates.
*   Identifying the advantages and disadvantages of dynamic logic compared to static logic.

---

### 1. Introduction to Dynamic Logic

**Key Concept:** Dynamic logic circuits operate in two distinct phases: a **precharge phase** and an **evaluation phase**. Unlike static CMOS logic, which has a direct, continuous path from output to power or ground in all logic states, dynamic logic relies on temporary charge storage on a capacitance (typically the gate capacitance of subsequent transistors or parasitic capacitances) to represent the logic state.

**Why Dynamic Logic?**

*   **Reduced Transistor Count:** Dynamic logic can often achieve a lower transistor count for complex gates compared to their static CMOS counterparts, leading to smaller area and potentially lower power consumption.
*   **Improved Performance:** For certain complex functions, dynamic logic can achieve faster switching speeds.

**Basic Structure of a Dynamic Logic Gate:**

A typical dynamic logic gate consists of:

1.  **Precharge Transistor (usually PMOS):** Used to charge the internal node to the precharge voltage (VDD) during the precharge phase.
2.  **Evaluation Network (usually NMOS transistors):** This network implements the logic function. It connects the internal node to ground (or VDD, depending on the logic family) during the evaluation phase based on the input signals.
3.  **Clock Signal:** A clock signal controls the precharge and evaluation phases.

**Important Point:** The output of a dynamic logic gate is only valid during the evaluation phase. During the precharge phase, the output is undefined or precharged to a specific value. Therefore, dynamic logic requires a clock signal for proper operation and usually needs to be followed by a latch or a static buffer to hold the valid output.

---

### 2. Precharge and Evaluation Phases

*   **Precharge Phase:**
    *   The clock signal is typically at a low level (0).
    *   The precharge transistor (PMOS) is turned ON.
    *   The internal node (often called the "dynamic node") is charged to VDD.
    *   The evaluation network transistors are turned OFF, disconnecting the dynamic node from ground.
    *   The output of the gate is effectively precharged to VDD (or the precharged value).

*   **Evaluation Phase:**
    *   The clock signal transitions to a high level (1).
    *   The precharge transistor (PMOS) is turned OFF.
    *   The evaluation network transistors are turned ON or OFF based on the input signals.
    *   If the logic function dictates a path from the dynamic node to ground, the dynamic node will discharge to ground, resulting in a logic '0' output (after a buffer).
    *   If no such path exists, the dynamic node retains its precharged value (VDD), resulting in a logic '1' output (after a buffer).

---

### 3. Realization of Logic Gates using Dynamic Logic

#### 3.1. Dynamic NAND Gate

**Logic Function:** $Y = \overline{A \cdot B}$

**Circuit Implementation:**

*   **Precharge:** A PMOS transistor connects the dynamic node to VDD, controlled by the inverted clock ($\overline{\text{CLK}}$).
*   **Evaluation:** Two NMOS transistors, one controlled by input A and the other by input B, are connected in series between the dynamic node and ground.

**Operation:**

*   **Precharge Phase ($\overline{\text{CLK}}=1$, CLK=0):** The PMOS precharge transistor is ON, charging the dynamic node to VDD.
*   **Evaluation Phase (CLK=1):** The PMOS precharge transistor turns OFF.
    *   If either A or B (or both) is LOW (0), at least one of the series NMOS transistors will be OFF. The dynamic node will *not* discharge to ground and will remain at VDD. After buffering, the output will be a HIGH (1).
    *   If both A and B are HIGH (1), both series NMOS transistors will be ON. The dynamic node will discharge to ground through these transistors. After buffering, the output will be a LOW (0).

**Circuit Diagram:**

```
       VDD
        |
       ---
      |   | (PMOS precharge, controlled by CLK')
       ---
        |
    (Dynamic Node) ----> [Buffer] ----> Output Y
        |
       ---
      |   | (NMOS A)
       ---
        |
       ---
      |   | (NMOS B)
       ---
        |
       GND
```

**Truth Table for Dynamic NAND:**

| CLK | A | B | Dynamic Node | Y (after buffer) |
|---|---|---|---|---|
| 0 (Precharge) | X | X | VDD | 1 |
| 1 (Evaluate) | 0 | 0 | VDD | 1 |
| 1 (Evaluate) | 0 | 1 | VDD | 1 |
| 1 (Evaluate) | 1 | 0 | VDD | 1 |
| 1 (Evaluate) | 1 | 1 | Discharge to GND | 0 |

**Textbook Reference:**
*   **Kang, Leblebici, Kim:** Chapter on Dynamic Logic Circuits, section on NMOS-based dynamic logic.
*   **Wolf:** Chapter on Advanced CMOS Circuit Techniques, discussing dynamic logic families.

---

#### 3.2. Dynamic NOR Gate

**Logic Function:** $Y = \overline{A + B}$

**Circuit Implementation:**

*   **Precharge:** A PMOS transistor connects the dynamic node to VDD, controlled by the inverted clock ($\overline{\text{CLK}}$).
*   **Evaluation:** Two NMOS transistors, one controlled by input A and the other by input B, are connected in parallel between the dynamic node and ground.

**Operation:**

*   **Precharge Phase ($\overline{\text{CLK}}=1$, CLK=0):** The PMOS precharge transistor is ON, charging the dynamic node to VDD.
*   **Evaluation Phase (CLK=1):** The PMOS precharge transistor turns OFF.
    *   If either A or B (or both) is HIGH (1), at least one of the parallel NMOS transistors will be ON. The dynamic node will discharge to ground through these transistors. After buffering, the output will be a LOW (0).
    *   If both A and B are LOW (0), both parallel NMOS transistors will be OFF. The dynamic node will *not* discharge to ground and will remain at VDD. After buffering, the output will be a HIGH (1).

**Circuit Diagram:**

```
       VDD
        |
       ---
      |   | (PMOS precharge, controlled by CLK')
       ---
        |
    (Dynamic Node) ----> [Buffer] ----> Output Y
        |   \
       ---   \
      |   |   \ (NMOS A)
       ---   /
        |   /
       --- /
      |   | (NMOS B)
       ---
        |
       GND
```

**Truth Table for Dynamic NOR:**

| CLK | A | B | Dynamic Node | Y (after buffer) |
|---|---|---|---|---|
| 0 (Precharge) | X | X | VDD | 1 |
| 1 (Evaluate) | 0 | 0 | VDD | 1 |
| 1 (Evaluate) | 0 | 1 | Discharge to GND | 0 |
| 1 (Evaluate) | 1 | 0 | Discharge to GND | 0 |
| 1 (Evaluate) | 1 | 1 | Discharge to GND | 0 |

**Textbook Reference:**
*   **Rabaey:** Chapter on Sequential Logic, section on dynamic MOS logic.
*   **Weste & Eshraghian:** Chapter on Dynamic Logic, detailing NMOS-based dynamic gates.

---

### 4. Key Concepts and Definitions

*   **Dynamic Logic:** A logic family that uses clocked transistors and charge storage on capacitance to represent logic states, operating in distinct precharge and evaluation phases.
*   **Precharge Phase:** The phase where an internal node (dynamic node) is charged to a known voltage (typically VDD) by an enabling transistor (usually a PMOS).
*   **Evaluation Phase:** The phase where the logic function is evaluated. Transistors forming the logic function become active, potentially discharging the dynamic node.
*   **Dynamic Node:** The internal node whose voltage state represents the output of the logic function. It's usually a capacitive node that stores the charge.
*   **Clock Signal:** Essential for controlling the precharge and evaluation phases.
*   **Buffer:** Typically required after the dynamic gate's output to hold the valid logic level and prevent charge sharing issues.
*   **Charge Sharing:** A phenomenon in dynamic logic where the charge stored on the dynamic node can be partially lost to other capacitances when the node is switched between configurations, potentially leading to incorrect logic evaluation.

---

### 5. Advantages and Disadvantages of Dynamic Logic

**Advantages:**

*   **Reduced Transistor Count:** Can implement complex gates with fewer transistors than static CMOS.
*   **Improved Speed:** For complex gates, dynamic logic can offer higher performance due to reduced fan-in and simpler pull-down/pull-up networks.
*   **Lower Power (in some cases):** Can achieve lower dynamic power due to reduced switching activity for certain designs.

**Disadvantages:**

*   **Requires Clock Signal:** Adds complexity to the clocking scheme.
*   **Charge Sharing:** Susceptible to charge sharing, which can lead to logic errors if not managed properly.
*   **High Input Capacitance:** The evaluation network can present a relatively high input capacitance to the preceding stage.
*   **Limited Fan-in:** Very large fan-in gates can be problematic due to the long series chains of NMOS transistors, leading to significant voltage drops and slow evaluation.
*   **Race Conditions:** Improper clocking can lead to race conditions where the evaluation phase starts before the inputs are stable.
*   **Output Hazard:** The output is not valid throughout the entire clock cycle.

---

### 6. Important Points to Remember

*   Dynamic logic is *clocked*. Without a clock, it's not functional.
*   The output is only valid during the **evaluation phase**.
*   A **buffer** is almost always needed after a dynamic gate.
*   **Charge sharing** is a critical design concern. Techniques like "dummy precharge" or "charge sharing reduction" circuits are used to mitigate this.
*   The PMOS precharge transistor should be designed to ensure the dynamic node reaches VDD quickly during precharge.
*   NMOS transistors in the evaluation network should be sized appropriately to provide sufficient current for discharge.
*   For complex functions, dynamic logic can be more efficient than static CMOS.

---

### 7. Practice Questions and Exercises

**Question 1:**

Draw the dynamic logic circuit for a 2-input NAND gate and explain its operation during both precharge and evaluation phases. What is the logic function implemented?

**Answer 1:**

The circuit and operation are described in Section 3.1. The logic function is $Y = \overline{A \cdot B}$.

---

**Question 2:**

Draw the dynamic logic circuit for a 2-input NOR gate and explain its operation. What is the key difference in the pull-down network structure compared to the dynamic NAND gate?

**Answer 2:**

The circuit and operation are described in Section 3.2. The key difference is that the NMOS transistors for the NOR gate are connected in **parallel** between the dynamic node and ground, whereas for the NAND gate, they are in **series**.

---

**Question 3:**

What is charge sharing in dynamic logic, and why is it a concern?

**Answer 3:**

Charge sharing occurs when a dynamic node, which has been precharged to VDD, is connected to another node with a different voltage through a conducting transistor. The charge stored on the dynamic node's capacitance gets distributed between the two capacitances, potentially reducing the voltage on the dynamic node below the threshold voltage of the subsequent gate, leading to a logic error. It is a concern because it can cause incorrect output values.

---

**Question 4:**

If you were to implement a 3-input NAND gate using dynamic logic, how would you configure the evaluation network?

**Answer 4:**

For a 3-input NAND gate ($Y = \overline{A \cdot B \cdot C}$), the evaluation network would consist of three NMOS transistors connected in **series** between the dynamic node and ground, each controlled by one of the inputs (A, B, and C). The precharge transistor would remain the same (PMOS controlled by $\overline{\text{CLK}}$).

---

**Question 5:**

What is the primary advantage of dynamic logic over static CMOS for implementing complex gates?

**Answer 5:**

The primary advantage is the potential for **reduced transistor count** and **improved speed** due to simpler pull-down/pull-up networks for complex functions.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 8. References

*   **Kang, S. M., Leblebici, Y., & Kim, C. (2016).** *CMOS Digital Integrated Circuits - Analysis & Design*. McGraw Hill.
*   **Wolf, W. (2008).** *Modern VLSI Design*. Prentice Hall.
*   **Rabaey, J. M. (2016).** *Digital Integrated Circuits*. Pearson.
*   **Weste, N. H. E., & Eshraghian, K. (2007).** *Principles of CMOS VLSI Design - A Systems Perspective*. Pearson.

---