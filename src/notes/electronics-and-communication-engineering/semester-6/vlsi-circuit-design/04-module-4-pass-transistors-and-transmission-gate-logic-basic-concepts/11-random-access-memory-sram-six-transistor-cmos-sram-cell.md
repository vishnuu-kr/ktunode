---
title: "Random Access Memory- SRAM-Six transistor CMOS SRAM cell"
subject: "VLSI CIRCUIT DESIGN"
module: "Module 4: Pass transistors and Transmission gate logic:  Basic concepts"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefde"
status: "completed"
scrapedAt: "2026-05-23T18:03:57.030Z"
---
# VLSI Circuit Design: Module 4 - Pass Transistors and Transmission Gate Logic: Basic Concepts

## Topic: Random Access Memory (SRAM) - Six Transistor CMOS SRAM Cell

This module delves into the fundamental building blocks of memory in VLSI design, specifically focusing on Random Access Memory (RAM) and the ubiquitous six-transistor CMOS SRAM cell. Understanding these concepts is crucial for designing efficient and high-density memory systems.

---

### 1. Introduction to Random Access Memory (RAM)

**Key Concept:** RAM is a type of computer memory that can be read from and written to in any order, typically a helpful factor in organized computer programs. It is volatile memory, meaning that it is emptied when the power is turned off.

*   **Volatile Memory:** Data is lost when power is removed.
*   **Random Access:** Any memory location can be accessed directly and in the same amount of time, regardless of its physical location.
*   **Types of RAM:**
    *   **Static RAM (SRAM):** Uses latches (typically made of flip-flops) to store each bit. It is generally faster than DRAM but requires more power and is more expensive to produce.
    *   **Dynamic RAM (DRAM):** Stores each bit of data in a separate capacitor within an integrated circuit. It is cheaper to produce and more power-efficient but slower than SRAM.

**Relevance to Course Outcomes:**
*   **CO4 (Knowledge Level: K3):** Understanding RAM cells is fundamental to the "implementation of basic storage cells."

---

### 2. The Six Transistor CMOS SRAM Cell

**Key Concept:** The six-transistor (6T) SRAM cell is the most common and widely used cell structure for static RAM in CMOS technology. It employs a pair of cross-coupled inverters to store a bit and two access transistors to control read and write operations.

**Structure and Operation:**

The 6T SRAM cell consists of:

1.  **Two Cross-Coupled Inverters:** These form the core of the memory cell, creating a stable bistable latch that stores a logic '0' or '1'.
    *   **Components:** Each inverter is typically implemented using a PMOS pull-up transistor and an NMOS pull-down transistor.
    *   **Cross-Coupling:** The output of one inverter is connected to the input of the other, and vice versa. This positive feedback ensures that the latch maintains its state.
    *   **Storage:** The state of the latch (high or low voltage at the internal nodes) represents the stored bit.

2.  **Two Access Transistors (Pass Transistors):** These are NMOS transistors that act as switches, controlled by the Word Line (WL). They connect the internal nodes of the latch to the Bit Lines (BL and $\overline{\text{BL}}$) for read and write operations.
    *   **Purpose:** To isolate the latch from the bit lines when idle, preventing disturbance of the stored data.
    *   **Control:** The gate of both access transistors is connected to the Word Line (WL). When WL is high, the access transistors are turned on, enabling communication between the cell and the bit lines.

**Circuit Diagram:**

```
        VDD
         |
        PMOS1 ---\
         |        |
  Node Q --o-- NMOS1  -- BL
         |      |
        PMOS2 --/
         |        |
  Node QB --o-- NMOS2  -- BL_bar
         |      |
        NMOS3 --/
         |
        GND

        WL (connected to gates of NMOS1 and NMOS2)
```

*   **Q and $\overline{\text{Q}}$ (or QB):** The internal nodes storing the complementary data.
*   **BL and $\overline{\text{BL}}$:** The Bit Lines, which carry the data to and from the cell.
*   **WL:** The Word Line, which enables access to the cell.
*   **PMOS1, NMOS1:** Form the first inverter (storing Q).
*   **PMOS2, NMOS2:** Form the second inverter (storing $\overline{\text{Q}}$).
*   **NMOS3:** Connects node Q to GND (part of the first inverter).
*   **NMOS4 (implicit):** Connects node $\overline{\text{Q}}$ to GND (part of the second inverter). (Often the diagram shows 4 NMOS and 2 PMOS for the inverters, and 2 NMOS for access).

**Detailed View of the Inverters:**

*   **Inverter 1:** PMOS1 connected between VDD and Q, NMOS3 connected between Q and GND. The gates of PMOS1 and NMOS3 are connected to $\overline{\text{Q}}$.
*   **Inverter 2:** PMOS2 connected between VDD and $\overline{\text{Q}}$, NMOS4 connected between $\overline{\text{Q}}$ and GND. The gates of PMOS2 and NMOS4 are connected to Q.

**Important Note:** The diagram above is a simplified representation. A typical 6T cell has 4 NMOS transistors (two for the inverters and two access transistors) and 2 PMOS transistors for the inverters. The inverters' gates are cross-coupled to their outputs.

**Detailed explanation of the 6 transistors:**

*   **M1 (PMOS) & M3 (NMOS):** Form the first inverter. M1 connects node Q to VDD. M3 connects node Q to GND. Their gates are connected to node $\overline{\text{Q}}$.
*   **M2 (PMOS) & M4 (NMOS):** Form the second inverter. M2 connects node $\overline{\text{Q}}$ to VDD. M4 connects node $\overline{\text{Q}}$ to GND. Their gates are connected to node Q.
*   **M5 (NMOS) & M6 (NMOS):** The access transistors. Their sources are connected to nodes Q and $\overline{\text{Q}}$ respectively. Their drains are connected to BL and $\overline{\text{BL}}$ respectively. Their gates are connected to the Word Line (WL).

**Corrected Diagram Representation:**

```
        VDD
         |
        PMOS1 --\
         |       |
  Node Q --o-- NMOS1 --- BL
         |     |     |
        PMOS2 --\   NMOS5 (WL)
         |       |
  Node QB --o-- NMOS2 --- BL_bar
         |     |     |
        NMOS3 --\   NMOS6 (WL)
         |       |
        GND     GND
```

*   **M1, M3:** Inverter 1 (Output Q, Input $\overline{\text{Q}}$). Gates of M1, M3 are tied to $\overline{\text{Q}}$.
*   **M2, M4:** Inverter 2 (Output $\overline{\text{Q}}$, Input Q). Gates of M2, M4 are tied to Q.
*   **M5:** Access Transistor 1 (Connects Q to BL). Gate to WL.
*   **M6:** Access Transistor 2 (Connects $\overline{\text{Q}}$ to $\overline{\text{BL}}$). Gate to WL.

**Operations:**

*   **Standby Mode (WL = 0):**
    *   The access transistors (M5, M6) are turned OFF.
    *   The cross-coupled inverters maintain their stable state, holding the data (Q and $\overline{\text{Q}}$).
    *   The bit lines (BL, $\overline{\text{BL}}$) are precharged to VDD or are floating.
    *   **Power Consumption:** Minimal, primarily due to leakage currents.

*   **Read Operation (WL = 1):**
    1.  **Precharge Bit Lines:** Before activating the WL, BL and $\overline{\text{BL}}$ are precharged to VDD.
    2.  **Assert WL:** WL is driven to logic high (VDD).
    3.  **Discharge Bit Line:** The access transistors (M5, M6) turn ON.
        *   If the cell stores a '1' (Q=VDD, $\overline{\text{Q}}$=GND): The access transistor M5 connects Q (high) to BL. The access transistor M6 connects $\overline{\text{Q}}$ (low) to $\overline{\text{BL}}$. The $\overline{\text{BL}}$ will be discharged through NMOS2 and M6 to GND. BL will remain high or discharge very slowly through M1.
        *   If the cell stores a '0' (Q=GND, $\overline{\text{Q}}$=VDD): The access transistor M5 connects Q (low) to BL. The access transistor M6 connects $\overline{\text{Q}}$ (high) to $\overline{\text{BL}}$. The BL will be discharged through NMOS1 and M5 to GND. $\overline{\text{BL}}$ will remain high or discharge very slowly through M2.
    4.  **Sense Amplification:** A sense amplifier detects the small voltage difference between BL and $\overline{\text{BL}}$ to determine the stored data. The cell is designed such that the pull-down transistor in the inverter (NMOS1 or NMOS2) is stronger than the access transistor (M5 or M6) to ensure proper discharge of the bit line.

*   **Write Operation (WL = 1):**
    1.  **Drive Bit Lines:** The desired data is driven onto BL and $\overline{\text{BL}}$.
        *   To write '1': Drive BL to VDD and $\overline{\text{BL}}$ to GND.
        *   To write '0': Drive BL to GND and $\overline{\text{BL}}$ to VDD.
    2.  **Assert WL:** WL is driven to logic high (VDD).
    3.  **Flip the Latch:** The access transistors turn ON. The strong signals on the bit lines force the internal nodes (Q, $\overline{\text{Q}}$) of the latch to the desired state, overriding the previous state. For example, to write '0' (BL=GND, $\overline{\text{BL}}$=VDD):
        *   M5 connects BL (GND) to Q. This forces Q to GND.
        *   M6 connects $\overline{\text{BL}}$ (VDD) to $\overline{\text{Q}}$. This forces $\overline{\text{Q}}$ to VDD.
        *   The inverter with input $\overline{\text{Q}}$=VDD will now have its output Q=GND, and the inverter with input Q=GND will have its output $\overline{\text{Q}}$=VDD. The latch flips.

**Design Considerations for the 6T Cell:**

*   **Read Stability:** The cell must maintain its stored data when accessed for reading. This means the pull-down transistor of the inverter must be stronger than the access transistor to ensure the bit line is discharged correctly without disturbing the cell's state.
    *   **Condition:** $I_{pull-down} > I_{access}$ when the access transistor is ON. This implies the transistor sizing (W/L ratios) needs to be carefully chosen. The NMOS pull-down transistors (M3, M4) are typically made wider than the NMOS access transistors (M5, M6).
*   **Writeability:** The cell must be able to flip its state when written to. This requires the bit line drivers to be strong enough to override the latch's current state.
    *   **Condition:** The driver strength on the bit line must be greater than the effective pull-up strength of the inverter connected to the bit line.
*   **Standby Power:** The cell should consume minimal power when not being accessed. This is achieved by using CMOS inverters, where one transistor is always OFF in a DC state.
*   **Cell Size:** Minimizing the area of the SRAM cell is crucial for high-density memory. The 6T cell offers a good balance between performance, power, and density.
*   **Latch-up Immunity:** Proper design practices are necessary to prevent latch-up, which can occur in CMOS structures under certain voltage/current conditions.

**Transistor Sizing:**

*   **Inverters:** The pull-down NMOS transistors are generally sized larger than the pull-up PMOS transistors (e.g., $\frac{W_p}{L_p} \approx \frac{1}{2} \frac{W_n}{L_n}$) to ensure that the logic '0' is driven strongly to GND. This is important for read stability.
*   **Access Transistors:** The NMOS access transistors are typically sized smaller than the pull-down NMOS transistors of the inverters to ensure read stability. A common ratio might be $\frac{W_{access}}{L_{access}} \approx \frac{1}{2} \frac{W_{pull-down}}{L_{pull-down}}$.
*   **Writeability vs. Read Stability Trade-off:** A stronger access transistor improves writeability but can degrade read stability. Conversely, a weaker access transistor enhances read stability but makes writing more difficult. The transistor sizing is a critical design choice that balances these competing requirements.

**Example Scenario (Read Operation - Cell stores '1'):**

1.  **Cell State:** Q = VDD, $\overline{\text{Q}}$ = GND.
2.  **Precharge:** BL = VDD, $\overline{\text{BL}}$ = VDD.
3.  **WL = 1:** M5 and M6 turn ON.
4.  **Path to GND:**
    *   $\overline{\text{BL}}$ is connected to $\overline{\text{Q}}$ (GND) through M6 and NMOS2 (pull-down for inverter 2). NMOS2 is strongly ON because its gate is connected to Q (VDD). M6 is also ON. Thus, $\overline{\text{BL}}$ is discharged rapidly to GND.
    *   BL is connected to Q (VDD) through M5 and PMOS1 (pull-up for inverter 1). PMOS1 is OFF because its gate is connected to $\overline{\text{Q}}$ (GND). M5 is ON. BL remains at VDD or discharges very slowly through the PMOS1 if there's a slight leakage or short-circuit current.
5.  **Sense Amp:** Detects $\overline{\text{BL}}$ is low and BL is high, indicating the cell stored '1'.

**Example Scenario (Write Operation - Write '0'):**

1.  **Cell State:** Let's assume cell stores '1' (Q=VDD, $\overline{\text{Q}}$=GND).
2.  **Bit Line Drive:** BL = GND, $\overline{\text{BL}}$ = VDD.
3.  **WL = 1:** M5 and M6 turn ON.
4.  **Forcing the Latch:**
    *   M5 connects BL (GND) to node Q. Since M5 is ON and BL is driven to GND, node Q is forced to GND, overriding its previous VDD state.
    *   M6 connects $\overline{\text{BL}}$ (VDD) to node $\overline{\text{Q}}$. Since M6 is ON and $\overline{\text{BL}}$ is driven to VDD, node $\overline{\text{Q}}$ is forced to VDD, overriding its previous GND state.
5.  **New State:** Q = GND, $\overline{\text{Q}}$ = VDD. The latch has flipped, and the cell now stores '0'.

---

### 3. Advantages and Disadvantages of the 6T SRAM Cell

**Advantages:**

*   **Speed:** Relatively fast compared to DRAM due to the absence of capacitive charge/discharge cycles and the use of latches.
*   **Low Power Consumption in Standby:** The CMOS latch consumes very little power when the word line is inactive.
*   **No Refresh Required:** Unlike DRAM, SRAM does not need periodic refreshing to maintain its data.
*   **Simplicity:** Conceptually and in terms of basic operation, it's relatively straightforward.
*   **Robustness:** The latch structure makes it less susceptible to noise and disturbances during read operations compared to simpler cell designs.

**Disadvantages:**

*   **Lower Density:** Each bit requires six transistors, leading to a larger cell area compared to DRAM cells (which typically use one transistor and one capacitor).
*   **Higher Static Power Consumption During Read/Write:** When the word line is active, there can be significant current flow through the transistors, leading to higher power consumption than in standby.
*   **Cost:** Due to the larger cell size and more complex fabrication process per bit, SRAM is generally more expensive than DRAM.

**Relevance to Course Outcomes:**
*   **CO4 (Knowledge Level: K3):** Understanding the trade-offs of the 6T cell directly relates to analyzing the implementation of basic storage cells.

---

### 4. Comparison with Other SRAM Cell Structures (Brief Mention)

While the 6T cell is dominant, other SRAM cell structures exist, each with its own trade-offs:

*   **8T SRAM Cell:** Includes additional transistors for dedicated read and write paths, improving performance and reducing read/write conflict but increasing cell size and complexity.
*   **7T SRAM Cell:** A variation of the 6T cell that aims to improve read stability or reduce cell area by modifying the inverter structure or access transistors.

**Textbook References:**

*   **Sung-Mo Kang, Yusuf Leblebici, Chulwoo Kim (CMOS Digital Integrated Circuits):** Provides detailed analysis of the 6T SRAM cell operation, transistor sizing, read/write operations, and design considerations. Chapter on Memory Circuits.
*   **Wayne Wolf (Modern VLSI Design):** Discusses the architectural aspects of SRAM and the trade-offs associated with different cell designs, including the 6T cell. Chapter on Memory.
*   **Jan M. Rabaey (Digital Integrated Circuits):** Offers a comprehensive explanation of the 6T SRAM cell, its timing parameters, and performance analysis. Chapter on Memory Circuits.

---

### 5. Practice Questions and Exercises

**Question 1:**
Describe the function of each of the six transistors in a standard 6T CMOS SRAM cell during standby, read, and write operations.

**Answer:**
*   **PMOS1 & NMOS1 (Inverter 1):** Form an inverter. PMOS1 connects Q to VDD, NMOS1 connects Q to GND. Gates connected to $\overline{\text{Q}}$. They maintain the stored state.
*   **PMOS2 & NMOS2 (Inverter 2):** Form the second inverter. PMOS2 connects $\overline{\text{Q}}$ to VDD, NMOS2 connects $\overline{\text{Q}}$ to GND. Gates connected to Q. They maintain the stored state.
*   **NMOS5 (Access Transistor 1):** Connects node Q to BL when WL is high. Used for reading and writing.
*   **NMOS6 (Access Transistor 2):** Connects node $\overline{\text{Q}}$ to $\overline{\text{BL}}$ when WL is high. Used for reading and writing.

**Standby (WL=0):** Access transistors are OFF, isolating the latch from BL/$\overline{\text{BL}}$. Inverters hold the state.
**Read (WL=1):** Access transistors ON. The cell's state causes differential discharge on BL/$\overline{\text{BL}}$.
**Write (WL=1):** Access transistors ON. Strong signals on BL/$\overline{\text{BL}}$ force the latch state.

---

**Question 2:**
Explain the critical design consideration that ensures the 6T SRAM cell can be read without disturbing its stored data. What transistor sizing strategy helps achieve this?

**Answer:**
The critical design consideration is **read stability**. The cell must retain its state even when the bit lines are activated for a read operation. This is achieved by ensuring that the pull-down transistor of the inverter that is ON is stronger than the access transistor connected to the same node.

**Transistor Sizing Strategy:** The NMOS pull-down transistors within the inverters (NMOS1 and NMOS2) should be sized larger (higher W/L ratio) than the NMOS access transistors (NMOS5 and NMOS6). This ensures that the pull-down transistor can effectively keep its node at GND while the access transistor is ON, preventing the bit line from being pulled up and thus not disturbing the cell's state.

---

**Question 3:**
A student is designing a 6T SRAM cell and notices that during read operations, the bit line is not being discharged properly, leading to incorrect data sensing. Which transistors' sizing might be incorrect, and why?

**Answer:**
If the bit line is not being discharged properly during a read operation, it suggests that the pull-down path from the cell to the bit line is too weak. This typically points to the **NMOS pull-down transistor within the inverter** being too small relative to the **NMOS access transistor**.

*   **NMOS Pull-down (e.g., NMOS1 connected to Q):** If NMOS1 is too small, it cannot strongly pull node Q to GND when $\overline{\text{Q}}$ is high.
*   **NMOS Access Transistor (e.g., NMOS5 connected to Q):** If NMOS5 is too large relative to NMOS1, it can effectively pull the BL towards the state of Q, but if NMOS1 is weak, it might not be able to pull the node Q low enough, and the BL will not discharge significantly.

To fix this, the NMOS pull-down transistors (NMOS1 and NMOS2) should be sized up (increased W/L), and/or the NMOS access transistors (NMOS5 and NMOS6) should be sized down (decreased W/L). The goal is to ensure $I_{pull-down} > I_{access}$ for the node that needs to be pulled low.

---

### 6. Important Points to Remember

*   The 6T SRAM cell uses a cross-coupled latch (two inverters) for data storage and two pass transistors for access.
*   **Standby:** WL=0, cell is isolated, low power.
*   **Read:** WL=1, precharged BL/$\overline{\text{BL}}$, cell state causes differential discharge. Sense amplifier detects the difference.
*   **Write:** WL=1, BL/$\overline{\text{BL}}$ driven with data, forces cell state.
*   **Read Stability** is achieved by making pull-down NMOS in the inverter stronger than the access NMOS.
*   **Writeability** is achieved by making bit line drivers strong enough to override the latch.
*   The trade-off between read stability and writeability is managed through transistor sizing.
*   SRAM is faster and doesn't need refresh but is less dense and more expensive than DRAM.

---

### 7. Alignment with Course Outcomes

*   **CO1 (Knowledge Level: K2):** Understanding SRAM cells is a foundational element of digital memory systems, which are key components in VLSI design. While this topic doesn't directly cover ASIC types or SoC, it builds the knowledge necessary to understand memory subsystems within these architectures.
*   **CO2 (Knowledge Level: K2):** While this topic doesn't cover fabrication techniques directly, the performance and density considerations of the 6T cell are heavily influenced by the underlying fabrication processes and material properties of transistors (e.g., mobility, voltage thresholds).
*   **CO3 (Knowledge Level: K3):** The analysis of read/write operations, stability, and transistor sizing directly involves the application of circuit analysis principles to a fundamental logic storage element. Understanding the internal workings of the SRAM cell is a prerequisite for designing and analyzing larger memory arrays.
*   **CO4 (Knowledge Level: K3):** This is the most directly addressed CO. The entire topic is dedicated to the "implementation of basic storage cells," specifically the 6T SRAM cell, and involves its design, analysis of its operations, and the factors influencing its performance.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
