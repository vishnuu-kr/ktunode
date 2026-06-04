---
title: "DRAM-Three transistor and One transistor Dynamic Memory Cell."
subject: "VLSI CIRCUIT DESIGN"
module: "Module 4: Pass transistors and Transmission gate logic:  Basic concepts"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefdf"
status: "completed"
scrapedAt: "2026-05-23T18:03:57.904Z"
---
# VLSI Circuit Design - Module 4: Pass Transistors and Transmission Gate Logic: Basic Concepts

## Topic: DRAM - Three Transistor and One Transistor Dynamic Memory Cell

**Learning Outcomes:**
*   Understand the fundamental operation of dynamic memory cells.
*   Differentiate between the three-transistor (3T) and one-transistor (1T) DRAM cell architectures.
*   Analyze the read and write operations for both 3T and 1T DRAM cells.
*   Discuss the advantages and disadvantages of each cell type in terms of density, performance, and power consumption.
*   Relate the concept of pass transistors to the operation of these memory cells.
*   Understand the impact of technology scaling on DRAM cell design.

**Course Outcomes Alignment:**
*   **CO4 (Knowledge Level: K3):** This topic directly addresses the design and analysis of dynamic logic circuits and the implementation of basic storage cells, which is a core component of memory design.

---

### 1. Introduction to Dynamic Random Access Memory (DRAM)

DRAM is a type of semiconductor memory that stores each bit of data in a separate capacitor within an integrated circuit. Since capacitors are prone to leakage, DRAM requires periodic refreshing to maintain the data. This dynamic nature is where its name originates.

*   **Core Principle:** Stores data as an electrical charge on a capacitor.
*   **Challenge:** Capacitors leak charge over time, requiring data to be refreshed periodically.
*   **Key Advantage:** High storage density and relatively low cost per bit compared to SRAM.
*   **Applications:** Main system memory (RAM) in computers, graphics cards, and various embedded systems.

---

### 2. The Three-Transistor (3T) DRAM Cell

The 3T DRAM cell was an early and influential design. It uses three transistors and one capacitor to store a single bit of data.

**2.1 Cell Structure:**

*   **Capacitor (C):** Stores the data bit. Charged (logic '1') or discharged (logic '0').
*   **Access Transistor (T1):** A pass transistor controlled by the Word Line (WL). It connects the capacitor to the Bit Line (BL).
*   **Transfer Transistor (T2):** Another pass transistor, controlled by a separate control signal (often called Sense Amp Enable or similar). It connects the capacitor to the Sense Amplifier.
*   **Isolation Transistor (T3):** Acts as a switch to disconnect the capacitor from the BL during standby and to isolate it from the sense amplifier during write operations.

**Referenced Textbooks:**
*   **Kang, Leblebici, Kim:** Discusses the historical evolution of memory cells, including early 3T structures, highlighting their basic operational principles and trade-offs (Chapter 7, Memory Circuits).
*   **Sze:** Provides detailed schematics and analysis of early semiconductor memory technologies, including the 3T DRAM cell as a foundational design (Chapter 5, Memory Devices).

**2.2 Operation:**

**2.2.1 Write Operation:**

1.  **Precharge Bit Line (BL):** The BL is precharged to VDD (for '1') or GND (for '0').
2.  **Activate Word Line (WL):** T1 turns ON.
3.  **Drive Bit Line:** The BL is driven to the desired data value (VDD or GND). This charges or discharges the capacitor C through T1.
4.  **Deactivate Word Line (WL):** T1 turns OFF, storing the charge on C.
5.  **Isolate Cell:** T3 is turned OFF to isolate the cell from the BL.

**2.2.2 Read Operation:**

1.  **Precharge Bit Line (BL):** The BL is precharged to an intermediate voltage (e.g., VDD/2) or to GND. This precharging is crucial for differential sensing.
2.  **Activate Word Line (WL):** T1 turns ON, connecting the capacitor C to the BL.
3.  **Charge Sharing:** The charge stored on capacitor C is shared with the BL capacitance.
    *   If C was charged (logic '1'), the BL voltage will rise slightly above its precharged level.
    *   If C was discharged (logic '0'), the BL voltage will drop slightly below its precharged level.
4.  **Sense Amplifier:** A sensitive sense amplifier detects this small voltage difference on the BL.
5.  **Restore/Reinforce:** After sensing, the sense amplifier can restore the data to the capacitor by driving the BL to VDD or GND, effectively amplifying the stored value back onto the capacitor. This acts as a refresh.
6.  **Deactivate Word Line (WL):** T1 turns OFF.
7.  **Isolate Cell:** T3 is turned OFF.

**2.3 Advantages of 3T DRAM:**

*   **Robustness:** The isolation transistor (T3) provides better isolation during read and write operations compared to some later designs.
*   **Simpler Sense Amplification:** The slightly larger voltage swing on the BL could be easier to detect with simpler sense amplifiers.

**2.4 Disadvantages of 3T DRAM:**

*   **Lower Density:** Three transistors and one capacitor occupy more silicon area per bit compared to more advanced designs.
*   **Higher Power Consumption:** The additional transistors can contribute to higher static and dynamic power consumption.
*   **Larger Footprint:** The larger cell size limits the maximum achievable memory density.

---

### 3. The One-Transistor (1T) DRAM Cell

The 1T DRAM cell, also known as the "1T/1C" cell, is the dominant architecture used in modern DRAM due to its superior density and cost-effectiveness. It uses a single access transistor and a single capacitor.

**3.1 Cell Structure:**

*   **Capacitor (C):** Stores the data bit. This is the sole storage element.
*   **Access Transistor (T):** A pass transistor (typically NMOS) controlled by the Word Line (WL). It connects the capacitor to the Bit Line (BL).

**Referenced Textbooks:**
*   **Kang, Leblebici, Kim:** Provides detailed analysis of the 1T/1C DRAM cell, its operation, and the role of pass transistors in accessing the stored data (Chapter 7, Memory Circuits).
*   **Weste, Eshraghian:** Explains the miniaturization of memory cells and the design considerations for high-density DRAM, focusing on the 1T/1C architecture and its scalability (Chapter 8, Memory Circuits).
*   **Wolf:** Discusses advanced memory architectures and the evolution towards the 1T/1C design, highlighting the challenges in sensing and data retention (Chapter 6, Memory Technologies).

**3.2 Operation:**

**3.2.1 Write Operation:**

1.  **Precharge Bit Line (BL):** The BL is precharged to VDD (for '1') or GND (for '0').
2.  **Activate Word Line (WL):** The NMOS access transistor T turns ON.
3.  **Drive Bit Line:** The BL is driven to the desired data value (VDD or GND). This charges or discharges the capacitor C through the ON pass transistor T.
4.  **Deactivate Word Line (WL):** T turns OFF, storing the charge on C.

**3.2.2 Read Operation:**

1.  **Precharge Bit Line (BL):** The BL is precharged to a voltage, often VDD/2 or GND.
2.  **Activate Word Line (WL):** The NMOS access transistor T turns ON, connecting the capacitor C to the BL.
3.  **Charge Sharing:** The charge stored on capacitor C is shared with the capacitance of the BL and the bit line drivers.
    *   If C was charged (logic '1'), the BL voltage rises slightly.
    *   If C was discharged (logic '0'), the BL voltage drops slightly.
    *   **Critical Issue:** Since it's a pass transistor, the voltage transferred to the BL isn't always VDD. If a '1' is stored (charge Q), and it shares with BL capacitance $C_{BL}$, the voltage on BL becomes $V_{BL} = \frac{Q}{C_C + C_{BL}}$. This is a read *disturbance* as the capacitor voltage might be slightly reduced.
4.  **Sense Amplifier:** A differential sense amplifier detects this small voltage difference between the BL and a reference bit line (or the precharged value).
5.  **Restore/Reinforce:** After sensing, the sense amplifier drives the BL to VDD (if a '1' was sensed) or GND (if a '0' was sensed). This amplified voltage is then driven back onto the capacitor through the ON access transistor T, effectively restoring the full data level and reinforcing the stored charge.
6.  **Deactivate Word Line (WL):** T turns OFF.

**3.3 Advantages of 1T DRAM:**

*   **High Density:** Only one transistor and one capacitor per bit, leading to significantly smaller cell size and higher storage capacity.
*   **Lower Cost:** Smaller cell size translates to lower manufacturing costs per bit.
*   **Lower Power Consumption (at the cell level):** Fewer transistors mean less leakage and switching power at the cell level. However, sense amplifiers and refresh circuits contribute significantly to overall power.

**3.3.1 Pass Transistor Performance in 1T Cell:**

The NMOS pass transistor in the 1T cell has a limited voltage drop across it when ON ($V_{DS} = V_{GS} - V_T$ for small $V_{DS}$). This means:
*   When writing a '1' (VDD), the capacitor might not reach full VDD due to the $V_T$ drop.
*   When reading a '1', the charge sharing mechanism relies on the capacitor's initial voltage and the BL capacitance. The voltage on the BL will be less than the original capacitor voltage if the capacitor is not fully charged.

**3.4 Disadvantages of 1T DRAM:**

*   **Sensitivity to Noise:** The small voltage swings on the BL require highly sensitive sense amplifiers.
*   **Charge Leakage:** The single capacitor is directly exposed to the BL during reads and writes (though momentarily), increasing vulnerability to charge leakage and retention issues.
*   **Read Disturbances:** The charge sharing process can slightly reduce the charge on the capacitor, potentially corrupting the data if not reinforced quickly.
*   **Refresh Requirement:** Like all DRAM, it requires periodic refreshing to prevent data loss due to capacitor leakage.

---

### 4. Key Concepts and Comparisons

| Feature          | 3T DRAM Cell                                  | 1T DRAM Cell (1T/1C)                               |
| :--------------- | :-------------------------------------------- | :------------------------------------------------- |
| **Components**   | 3 Transistors, 1 Capacitor                    | 1 Transistor, 1 Capacitor                          |
| **Density**      | Lower                                         | Higher                                             |
| **Cell Size**    | Larger                                        | Smaller                                            |
| **Complexity**   | More complex circuit                          | Simpler circuit at the cell level                  |
| **Sense Amp**    | Relatively simpler sensing                    | Requires highly sensitive differential sensing       |
| **Write/Read**   | Better isolation, less direct charge sharing  | Direct access, charge sharing, potential read disturb |
| **Cost per Bit** | Higher                                        | Lower                                              |
| **Power**        | Potentially higher due to more transistors    | Lower at cell level; higher overall due to refresh  |
| **Pass Transistor Use** | T1 is a pass transistor; T3 is an isolation switch | The single transistor is a pass transistor         |

**Important Point to Remember:** The evolution from 3T to 1T DRAM was driven by the need for higher density and lower cost per bit, which are critical for mainstream memory applications. The 1T cell relies heavily on efficient sense amplifiers and robust refresh mechanisms to overcome its inherent sensitivities.

---

### 5. Pass Transistor Role in DRAM

*   **Access:** In both 3T and 1T cells, the primary role of a pass transistor (controlled by WL) is to gate the connection between the storage capacitor and the bit line. When the WL is HIGH, the transistor is ON, allowing charge to flow between the capacitor and the BL. When the WL is LOW, the transistor is OFF, isolating the capacitor.
*   **Voltage Degradation (NMOS Pass Transistor):** A key characteristic of NMOS pass transistors is their threshold voltage ($V_T$). If a fully charged capacitor (VDD) is connected to the BL through an NMOS pass transistor, the voltage at the drain of the NMOS (connected to the BL) will be VDD, but the voltage at the source (connected to the capacitor) will be $V_{DD} - V_T$. This means a '1' stored on the capacitor might not be fully restored to VDD during write or even during the read-restore cycle, leading to a gradual degradation if not managed carefully. Techniques like charge pumps and careful precharge levels are used to mitigate this.
*   **Transmission Gate (not typically in core DRAM cells):** While transmission gates (formed by a parallel NMOS and PMOS) offer a lower resistance path and avoid the voltage drop issue of a single pass transistor, they are generally not used in the core 1T/1C DRAM cell due to increased cell area. However, they might be found in surrounding peripheral circuitry or in some specialized memory designs.

---

### 6. Practice Questions and Exercises

**Question 1:**
Describe the fundamental principle of data storage in a DRAM cell. Why is the term "dynamic" used?

**Answer:**
DRAM stores data as an electrical charge on a capacitor. The term "dynamic" refers to the fact that this charge will leak away over time due to capacitor leakage currents, necessitating periodic refreshing to maintain the stored data.

**Question 2:**
Compare and contrast the number of transistors and capacitors used in the 3T DRAM cell and the 1T DRAM cell.

**Answer:**
*   **3T DRAM Cell:** Uses three transistors and one capacitor to store a single bit.
*   **1T DRAM Cell:** Uses one transistor and one capacitor to store a single bit.

**Question 3:**
Explain the read operation of a 1T DRAM cell, highlighting the role of the sense amplifier and the challenge posed by the NMOS pass transistor.

**Answer:**
During a read operation of a 1T DRAM cell:
1.  The bit line is precharged.
2.  The word line is activated, turning ON the NMOS access transistor, connecting the storage capacitor to the bit line.
3.  Charge sharing occurs between the capacitor and the bit line capacitance, causing a small voltage change on the bit line.
4.  A sensitive sense amplifier detects this small voltage difference.
5.  The sense amplifier then drives the bit line to the full VDD or GND level, which is then fed back to the capacitor through the ON access transistor, restoring the data and reinforcing it.
**Challenge:** The NMOS pass transistor has a threshold voltage ($V_T$). When a '1' is stored and the capacitor is connected, the voltage transferred to the bit line might be less than the original capacitor voltage (e.g., $V_{DD} - V_T$ if it were the only path), and the charge sharing itself can slightly reduce the capacitor's voltage. This requires a very sensitive sense amplifier.

**Question 4:**
Which DRAM cell architecture offers higher density, and why?

**Answer:**
The 1T DRAM cell offers higher density. This is because it uses fewer components (one transistor and one capacitor) per bit compared to the 3T DRAM cell (three transistors and one capacitor), resulting in a smaller physical footprint for each memory bit.

**Question 5 (Conceptual):**
If you were designing a very low-power DRAM for embedded systems where density is less critical, but data retention is paramount, which cell architecture might you initially consider, and what are the trade-offs?

**Answer:**
While modern embedded systems often use 1T/1C due to overall cost and integration benefits, if data retention was the *absolute* paramount concern and power was less of an issue, one might reconsider older architectures. The 3T cell's additional isolation transistors could theoretically offer slightly better protection against charge loss during read/write operations, potentially leading to longer data retention between refreshes or slightly reduced refresh rates. However, the increased static power consumption from the extra transistors and larger cell size would likely negate any power savings. The 1T/1C cell, with advanced sense amplifier design and optimized refresh strategies, generally provides the best overall balance for most applications, including low-power ones. The trade-off is primarily density vs. complexity and the need for more sophisticated peripheral circuitry in the 1T/1C.

---

### 7. Important Points to Remember

*   **Capacitor Leakage:** The fundamental challenge in DRAM is capacitor leakage, necessitating refresh.
*   **Sense Amplifier Sensitivity:** 1T DRAM relies heavily on sensitive sense amplifiers to detect tiny voltage variations.
*   **Pass Transistor Limitations:** NMOS pass transistors can cause voltage drops ($V_T$), impacting write and read voltage levels.
*   **Density vs. Performance:** 1T DRAM prioritizes density, while older designs like 3T might have had minor advantages in specific performance aspects or robustness for their era.
*   **Technological Evolution:** The trend in DRAM design has been towards higher density, lower power consumption per bit, and faster operation, leading to the dominance of the 1T/1C cell.

---

This comprehensive set of notes covers the basic concepts of 3T and 1T DRAM cells, their operations, advantages, disadvantages, and the role of pass transistors, aligning with the learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
