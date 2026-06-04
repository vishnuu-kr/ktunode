---
title: "Read Only Memory- 4x4 MOS ROM Cell Arrays (NOR, NAND)"
subject: "VLSI CIRCUIT DESIGN"
module: "Module 4: Pass transistors and Transmission gate logic:  Basic concepts"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefdd"
status: "completed"
scrapedAt: "2026-05-23T18:03:56.210Z"
---
## VLSI Circuit Design: Module 4 - Pass Transistors and Transmission Gate Logic: Basic Concepts

### Topic: Read Only Memory - 4x4 MOS ROM Cell Arrays (NOR, NAND)

**Course Outcomes Addressed:** CO4 (Design and analysis of dynamic logic circuits and the implementation of basic storage cells.)

**Learning Outcomes Covered:**

*   Understanding the fundamental operation of ROM cells.
*   Designing 4x4 MOS ROM cell arrays using NOR and NAND logic.
*   Analyzing the read operation in ROM arrays.
*   Comparing NOR and NAND based ROM array implementations.
*   Understanding the physical implementation of ROM cells in MOS technology.

---

### 1. Introduction to Read-Only Memory (ROM)

**Definition:**
Read-Only Memory (ROM) is a type of non-volatile memory where data is permanently stored and can only be read. The data is programmed into the memory during manufacturing or a special programming process.

**Key Characteristics:**
*   **Non-volatile:** Data is retained even when power is off.
*   **Read-only:** Data cannot be modified after manufacturing.
*   **High density:** Can store large amounts of data.
*   **Low cost:** Relatively inexpensive to manufacture in mass production.
*   **Speed:** Generally faster read access times compared to RAM.

**Applications:**
*   Firmware (e.g., BIOS in computers)
*   Look-up tables
*   Character generators
*   Microcontrollers
*   Fixed function logic implementation

---

### 2. ROM Cell Structure and Operation

The fundamental building block of a ROM is the ROM cell, which stores a single bit of information (0 or 1). The state of a ROM cell is determined by the presence or absence of a conducting path between the output node and the ground or power supply. This connection is typically established by a transistor whose gate is controlled by a word line.

**Basic ROM Cell Concept:**
A ROM cell can be implemented using a transistor controlled by a word line. The logic state of the cell (0 or 1) is determined by whether a connection is made to ground (for a '0') or left floating/connected to VDD (for a '1').

---

### 3. ROM Array Organization

A ROM array consists of a grid of ROM cells organized by **word lines** (rows) and **bit lines** (columns).

*   **Word Lines (WL):** Select a specific row of memory cells.
*   **Bit Lines (BL):** Carry the data from the selected cells to the output.

When a particular word line is activated, the cells along that row are enabled. The logic state of the bit line is then determined by the presence or absence of a conductive path in the enabled cells.

---

### 4. MOS ROM Cell Arrays: NOR and NAND Implementations

ROM arrays can be implemented using different logic gates to define the cell structure and the way data is accessed. We will focus on implementations using NOR and NAND logic, which are fundamentally based on transistor connections.

#### 4.1 NOR-based ROM Cell Array

In a NOR-based ROM array, each bit is stored using a single MOS transistor. The drain of the transistor is connected to a bit line, and the source is connected to ground. The gate of the transistor is connected to a word line.

*   **'0' Storage:** To store a '0', a transistor is **present** between the bit line and ground. When the word line is activated, this transistor turns ON, pulling the bit line down to ground (logic '0').
*   **'1' Storage:** To store a '1', a transistor is **absent** between the bit line and ground. When the word line is activated, the bit line remains in its pre-charged state (typically pulled up to VDD by a pre-charge circuit or a load device), representing a logic '1'.

**4x4 NOR-based ROM Cell Array Example:**

Consider a 4x4 array. This means there are 4 word lines (WL0 to WL3) and 4 bit lines (BL0 to BL3).

**Structure:**
*   Each intersection of a word line and a bit line can potentially have a transistor.
*   The presence or absence of a transistor at an intersection determines the stored bit.

**Read Operation:**
1.  **Pre-charging:** The bit lines are typically pre-charged to VDD (logic '1') before a read operation.
2.  **Word Line Activation:** A specific word line (e.g., WL_i) is asserted (driven to VDD).
3.  **Bit Line Evaluation:**
    *   If a transistor exists at (WL_i, BL_j) (representing a stored '0'), it turns ON and pulls BL_j to ground (logic '0').
    *   If no transistor exists at (WL_i, BL_j) (representing a stored '1'), BL_j remains at VDD (logic '1').
4.  **Sense Amplification:** A sense amplifier detects the logic level on the bit line.

**Conceptual Diagram (NOR-based):**

Imagine a grid. Each column is a bit line, and each row is a word line. At each grid point (WL, BL), you can place a pull-down transistor (NMOS) connected to ground.

*   **To store a '0':** Place an NMOS transistor.
*   **To store a '1':** Do *not* place an NMOS transistor.

**Example Memory Layout (4x4 NOR-based):**

Let's represent a stored '0' by 'X' (an NMOS transistor) and a '1' by ' ' (no transistor).

|         | BL0 | BL1 | BL2 | BL3 |
| :------ | :-- | :-- | :-- | :-- |
| **WL0** | X   |     | X   |     |  (Stores 0101)
| **WL1** |     | X   |     | X   |  (Stores 1010)
| **WL2** | X   | X   |     |     |  (Stores 0011)
| **WL3** |     |     | X   | X   |  (Stores 1100)

**Read Operation Example:**
If WL1 is activated:
*   BL0 will be pulled to ground (due to the transistor at WL1, BL0), reading '0'.
*   BL1 will remain at VDD (no transistor), reading '1'.
*   BL2 will be pulled to ground (due to the transistor at WL1, BL2), reading '0'.
*   BL3 will remain at VDD (no transistor), reading '1'.
So, the data read from WL1 is "0101".

**Advantages of NOR-based ROM:**
*   Simpler cell structure (single transistor).
*   Easier to program '0's.

**Disadvantages of NOR-based ROM:**
*   Bit lines are pulled down to ground. If multiple '0's are programmed in a row, the bit line is pulled down strongly. If only '1's are programmed, the bit line relies on pre-charging, which can lead to slower reads and higher power consumption due to static current during pre-charge if not managed carefully.

**Reference:**
*   Kang, Leblebici, Kim (4/e), Chapter 6 on Memory Circuits discusses ROM structures.
*   Rabaey (2/e), Chapter 9 on Memory Systems covers ROM implementation.

---

#### 4.2 NAND-based ROM Cell Array

In a NAND-based ROM array, multiple transistors are connected in series between the bit line and ground. The gates of these transistors are connected to different word lines. A NOR gate structure is formed in the pull-down network.

*   **'0' Storage:** To store a '0' at a specific address (combination of word lines), the corresponding transistors in the series chain are turned ON. This pulls the bit line to ground.
*   **'1' Storage:** To store a '1', at least one transistor in the series chain for that address is left OFF by keeping its corresponding word line inactive. This prevents the bit line from being pulled to ground.

**4x4 NAND-based ROM Cell Array Example:**

Consider a 4x4 array.
*   **Word Lines (WL0 to WL3):** Used to select which transistors in a series chain are turned ON.
*   **Bit Lines (BL0 to BL3):** Each bit line is connected to the output of a NAND string.

**Structure:**
*   For each bit location, there's a series string of transistors.
*   The number of transistors in a string typically corresponds to the number of word lines in the array.
*   The source of the string is connected to ground.
*   The drain of the string is connected to the bit line.
*   The gate of each transistor in the string is connected to a different word line.

**Read Operation:**
1.  **Pre-charging:** The bit lines are pre-charged to VDD (logic '1').
2.  **Word Line Activation:** To read a specific row (say, WL_i), this word line is asserted. Simultaneously, all other word lines (WL_k where k != i) are kept inactive.
3.  **Bit Line Evaluation:**
    *   If a specific bit line is connected to ground via a series of transistors that are all turned ON (meaning all word lines controlling transistors in that string were asserted), the bit line is pulled to ground (logic '0').
    *   If any transistor in the series string is OFF (meaning its corresponding word line was inactive), the bit line remains at VDD (logic '1').

**Important Note on NAND ROM:** The typical NAND ROM implementation actually uses a slightly different structure where the entire row's output is gated by a single access transistor. The series string is used to implement the NOR logic for each bit *within* that row. However, for simplicity and to directly contrast with NOR ROM, we can think of the series string itself as storing the bit based on word line activation.

Let's reconsider the common NAND ROM structure where a NAND gate structure creates the pull-down for each bit. To store a '0' at a particular row and column, you need to create a path to ground.

**Simplified View for Comparison:**

A more direct comparison to NOR ROM can be made by thinking about the fundamental pull-down.

*   **NOR ROM:** A single transistor pulls down the bit line if the word line is active.
*   **NAND ROM:** A series of transistors, each controlled by a different word line, must *all* be ON to pull down the bit line. This structure is often used for implementing **logic functions** directly, rather than simple memory bits. However, ROMs can be built using NAND structures to implement the bit storage.

Let's assume for this discussion that the NAND structure refers to how the bit line is pulled down.

**Conceptualizing NAND ROM Cell Array:**

For a 4x4 array, we have 4 word lines (WL0-WL3) and 4 bit lines (BL0-BL3).

*   Each bit location (e.g., at WL_i, BL_j) will have a NAND structure that, when activated, pulls the bit line down.
*   A common implementation involves having a NAND gate for each column. The inputs to the NAND gate are the word lines.
*   To store a '0' at a specific address (determined by the word line), the NAND gate for that bit line must be activated (i.e., the word line signal is asserted).

This interpretation might be confusing as NAND gates typically have multiple inputs that *all* need to be high for the output to be low.

Let's stick to a more common ROM implementation strategy:

**Actual NAND ROM Implementation (Conceptual):**

A common way to implement ROMs with NAND structures involves a matrix of transistors. For a 4x4 ROM:

*   There are 4 word lines (WL).
*   There are 4 bit lines (BL).

Imagine a grid where each cell represents a bit.

*   **To store a '0':** The corresponding cell is designed to pull the bit line to ground when its row is selected. This is achieved by having an NMOS transistor turned ON.
*   **To store a '1':** The corresponding cell does *not* pull the bit line to ground when its row is selected.

The distinction between NOR and NAND ROMs often refers to the *overall structure* and how the pull-down path is realized for a given bit.

**Revisiting the NOR vs. NAND Distinction in ROM:**

The most common distinction in ROM implementation comes down to the *logic function implemented by the pull-down network*.

*   **NOR-ROM:** Each bit is a single pull-down transistor connected to ground, controlled by a word line. The bit line is pulled down if *any* transistor connected to it (for that row) is ON. This inherently implements a **NOR** function for the entire row's output.
*   **NAND-ROM:** Each bit is implemented using a series of transistors, where *all* transistors in the series must be ON to pull the bit line to ground. The gates of these transistors are connected to different word lines or control signals. This structure implements a **NAND** function for the pull-down path.

Given the context of "4x4 MOS ROM Cell Arrays (NOR, NAND)", it's likely referring to these two fundamental implementations of the pull-down path for each bit.

**Revisiting the 4x4 Example with the NOR/NAND Logic Distinction:**

**NOR-based ROM:**
*   Each cell is an NMOS transistor from bit line to ground.
*   Gate connected to word line.
*   '0' = Transistor present.
*   '1' = Transistor absent.

**NAND-based ROM:**
*   This implies a structure where multiple transistors are in series. For a 4x4 array, a common interpretation is that each column (bit line) has a NAND gate structure formed by transistors controlled by the word lines.
*   To store a '0' at a specific address, the NAND structure for that bit line must be activated. This means all transistors in the series *for that bit* are ON.
*   To store a '1', at least one transistor in the series for that bit is OFF.

**Let's consider a typical NAND ROM implementation pattern:**

In a NAND ROM, the bit lines are driven by NAND chains. To read a specific row, the corresponding word line is activated.

Consider a column (bit line). The pull-down network for that bit line consists of transistors whose gates are controlled by different word lines.

*   **If a bit is '0':** The NAND chain connected to this bit line is designed to be ON when the specific row is selected.
*   **If a bit is '1':** The NAND chain connected to this bit line is designed to be OFF when the specific row is selected.

This can be complex to visualize with a simple 4x4 grid for NAND. A more intuitive way to present is by focusing on the core difference in the pull-down implementation.

**Key Difference Highlighted:**

*   **NOR ROM:** Pull-down uses a **single NMOS transistor** per bit, controlled by the word line. A '0' is programmed by the presence of this transistor.
*   **NAND ROM:** Pull-down uses a **series string of NMOS transistors** per bit. To pull down the bit line, *all* transistors in the string must be ON, each controlled by a different word line (or a combination of word lines). This structure is more typical for implementing arbitrary logic functions directly.

However, ROMs can be implemented with NAND structures. In a NAND ROM array, a row is selected, and the data for each column depends on the NAND string connected to it.

**Let's consider the structure described by some texts:**

Some texts describe NAND ROMs where each bit location is a NAND gate itself, composed of series transistors.

*   **4x4 Array:**
    *   4 word lines (WL0, WL1, WL2, WL3).
    *   4 bit lines (BL0, BL1, BL2, BL3).

    *   For each bit location (e.g., at the intersection of WL_i and BL_j), there's a transistor whose gate is WL_i.
    *   The bit line BL_j is connected to ground through a series of these transistors, one for each word line.

This is still confusing. The typical distinction in ROM structures relates to how the data bit is physically represented.

Let's simplify and use the common understanding of how ROM cells are formed:

**Alternative View: Direct Implementation of Logic**

*   **NOR ROM:** Each bit is an NMOS transistor connected to ground, gate to WL.
    *   '0': Transistor exists.
    *   '1': Transistor absent.

*   **NAND ROM:** This usually implies a different structure where the data is stored by the presence or absence of a connection within a NAND gate structure.

    Consider a column. The bit line is connected to ground via a series of NMOS transistors. The gates of these transistors are connected to different word lines.

    *   To program a '0' at (WL_i, BL_j), you would configure the NAND structure for BL_j such that when WL_i is activated (along with other necessary WLs), it pulls BL_j to ground.
    *   To program a '1', the NAND structure is configured to keep BL_j at VDD.

This type of NAND implementation is often used for **Programmable Logic Arrays (PLAs)** or **Read-Mostly Memories (RMMs)**.

**For a standard ROM cell array (4x4):**

The most straightforward interpretation for "NAND ROM" in this context might refer to a structure where the pull-down is implemented by a NAND gate. However, the fundamental ROM cell concept usually boils down to a single bit of storage.

**Let's clarify based on typical textbook examples:**

*   **NOR ROM:** Each bit is an NMOS transistor pulling down to ground. The source is connected to ground, drain to bit line, gate to word line. If a transistor is present, it's a '0'. If absent, it's a '1'. This is the most common way to represent NOR-based ROM.

*   **NAND ROM:** This is less common for basic ROM arrays in the same sense as NOR ROM. When NAND structures are mentioned in ROM contexts, it often relates to implementing the entire memory block using NAND *gates* for control, or it might be referring to a different type of ROM like Mask ROM where the layout dictates the NAND structure.

    However, if we must consider a NAND-style pull-down for each bit, it would involve a series of NMOS transistors controlled by different word lines. This is more complex to represent in a simple 4x4 grid for basic ROM.

    **A more practical interpretation of "NAND ROM Array" in this context might be:**

    Each column (bit line) has a NAND gate structure controlling the pull-down to ground. The inputs to this NAND gate are derived from the word lines. To store a '0' at row $i$, the NAND gate associated with that bit line should allow a pull-down when word line $i$ is activated.

    This would mean that for each bit location, the pull-down path is a series of transistors, where *all* must be ON for a pull-down. This is not the standard NOR ROM cell.

**Let's assume the question is asking about two ways to form a ROM array where the fundamental pull-down mechanism differs, mirroring NOR/NAND gate behavior:**

*   **NOR-ROM Cell:** A single NMOS transistor connecting BL to Ground, gate to WL.
*   **NAND-ROM Cell:** A series string of NMOS transistors. For a bit at row $i$, column $j$, this string would be ON if WL_i is asserted (and other necessary signals are also asserted).

This is still a bit abstract. The most common and clear distinction is:

*   **NOR ROM:** Uses an NMOS transistor as the pull-down device. Data is stored by the presence ('0') or absence ('1') of this transistor at the intersection of WL and BL.
*   **NAND ROM:** Often implies that the pull-down path is implemented using a NAND gate structure. This means that for a pull-down to occur, multiple conditions (represented by different word lines) must be met simultaneously for that particular bit line.

Given the learning outcome of designing 4x4 arrays using NOR and NAND, it's important to show distinct structures.

**Let's illustrate a typical NAND structure for ROM:**

For a 4x4 ROM, a NAND ROM might organize data such that:
*   Each column is a bit line.
*   Each bit line has a NAND structure connected to ground.
*   The inputs to this NAND structure are word lines.

**Example:** To store a '0' on BL0 at row WL0:
The NAND structure for BL0 must be designed such that when WL0 is asserted, BL0 is pulled to ground.

This would mean that for each bit location, there is a series of transistors. If we have 4 word lines, each bit location would have a series of 4 transistors.

*   **Bit Location (WL_i, BL_j):**
    *   For BL_j, a series of 4 NMOS transistors.
    *   The gates are connected to WL0, WL1, WL2, WL3.
    *   Source of the chain to ground.
    *   Drain to BL_j.

    *   If all 4 transistors in the chain are ON, BL_j is pulled down.
    *   If any transistor in the chain is OFF, BL_j remains high.

    **Programming a '0' at WL0, BL0:** This would mean configuring the NAND chain for BL0 such that when WL0 is asserted, and the other necessary signals are asserted, a pull-down occurs.

This is more aligned with implementing logic functions. For a simple ROM, the NOR structure is much more direct.

**Let's focus on the difference in the pull-down path for each bit:**

*   **NOR-based ROM:** Pull-down path = **Single NMOS transistor** (WL gate, Source-Ground, Drain-BL).
*   **NAND-based ROM:** Pull-down path = **Series of NMOS transistors** (multiple WL gates, Source-Ground, Drain-BL).

**How does this apply to a 4x4 array?**

**NOR-based 4x4 ROM:** (As described above)
|         | BL0 | BL1 | BL2 | BL3 |
| :------ | :-- | :-- | :-- | :-- |
| **WL0** | X   |     | X   |     |
| **WL1** |     | X   |     | X   |
| **WL2** | X   | X   |     |     |
| **WL3** |     |     | X   | X   |
*   X denotes an NMOS transistor connecting BL to Ground.

**NAND-based 4x4 ROM:** (Conceptualizing a series pull-down per bit)
This is where it gets tricky to map directly to a simple grid. A common implementation for NAND ROM uses a *pre-charge circuit and a row decoder to select a word line*. Then, for each bit line, a NAND string of transistors is used.

Let's think of it this way:

For a given row (WL), to get a '0' on a bit line (BL), the NAND string connected to BL must be activated. This means all transistors in that NAND string must be ON.

Consider a 4x4 array. If we select WL0:
*   For BL0, we want to store a '0'. This means the NAND string for BL0 must create a path to ground when WL0 is asserted.
*   For BL1, we want to store a '1'. The NAND string for BL1 must *not* create a path to ground when WL0 is asserted.

This implies that for each bit location, the transistor controlled by the *specific* word line is used, and the overall NAND logic is formed by the series connection.

**Simplified NAND ROM Cell Idea:**

*   Each bit location corresponds to a series string of transistors.
*   The number of transistors in the string is equal to the number of word lines.
*   The gate of each transistor is connected to a different word line.
*   The entire series string is connected between BL and Ground.

**Example NAND ROM Structure for a 4x4 Array:**

Imagine a grid of 16 cells. For each cell at (WL_i, BL_j):
*   We have a series of 4 transistors.
*   The gates of these 4 transistors are connected to WL0, WL1, WL2, WL3 (not necessarily in that order, depends on the specific design for the word line selection).
*   The output of this series is connected to BL_j.

**Programming Data in a NAND ROM:**

To store a '0' at (WL0, BL0): Configure the NAND string for BL0 such that when WL0 is asserted, the string pulls to ground. This might involve having the transistor controlled by WL0 ON, and the others OFF (or configured differently based on the specific decoding).

This is a more complex way of implementing ROM and is not as common as NOR ROM for simple memory arrays. It's often used when the ROM needs to implement more complex logic functions.

**Key Takeaway for Comparison:**

| Feature          | NOR-based ROM Cell Array                      | NAND-based ROM Cell Array (Conceptual)                 |
| :--------------- | :-------------------------------------------- | :----------------------------------------------------- |
| **Pull-down**    | Single NMOS transistor per bit.               | Series of NMOS transistors per bit.                    |
| **'0' Storage**  | Presence of NMOS transistor.                  | NAND string configuration allows pull-down when selected. |
| **'1' Storage**  | Absence of NMOS transistor.                   | NAND string configuration prevents pull-down when selected. |
| **Complexity**   | Simpler cell structure.                       | More complex cell structure.                           |
| **Application**  | Direct ROM implementation, look-up tables.    | Can implement more complex logic, sometimes used for ROM. |
| **References**   | Kang et al., Rabaey et al.                    | Smith (ASIC), Weste & Eshraghian                       |

---

### 5. Design Considerations and Trade-offs

*   **Density:** NOR ROMs generally offer higher density due to simpler cell structures.
*   **Speed:** NOR ROMs can have faster read access times, especially when multiple '0's are present, as the bit lines are pulled down directly. NAND ROMs might have slower access times due to the series transistors.
*   **Power Consumption:** NOR ROMs can consume more static power if bit lines are pre-charged for extended periods. NAND ROMs can offer better power efficiency in some configurations.
*   **Programming Complexity:** For mask ROMs, the programming step is during fabrication. The layout of transistors determines the data. NOR ROMs are simpler to mask.
*   **Output Logic:** The structure of the pull-down network directly impacts the logic that can be implemented.

---

### 6. Practice Questions and Answers

**Question 1:**
Describe the basic principle of operation of a NOR-based ROM cell. How is a '0' and a '1' stored?

**Answer 1:**
In a NOR-based ROM cell, a single NMOS transistor is used as the pull-down device. The drain of the transistor is connected to the bit line, and the source is connected to ground. The gate of the transistor is connected to a word line.
*   **To store a '0':** An NMOS transistor is fabricated at the intersection of the word line and bit line. When the word line is activated, this transistor turns ON, pulling the bit line to ground (logic '0').
*   **To store a '1':** No NMOS transistor is fabricated at the intersection. When the word line is activated, the bit line remains at its pre-charged state (typically VDD, logic '1').

**Question 2:**
Consider a 4x4 NOR-based ROM array. If WL2 is activated, and the data stored for this word line is "0011" (from BL0 to BL3), draw the configuration of the NMOS transistors in the ROM cell array for this row.

**Answer 2:**
For WL2 to store "0011":
*   **BL0:** Stores '0', so an NMOS transistor is present connecting WL2 (gate) to BL0 (drain), with its source connected to ground.
*   **BL1:** Stores '0', so an NMOS transistor is present connecting WL2 (gate) to BL1 (drain), with its source connected to ground.
*   **BL2:** Stores '1', so no NMOS transistor is present connecting WL2 to BL2.
*   **BL3:** Stores '1', so no NMOS transistor is present connecting WL2 to BL3.

**Visual Representation for WL2:**

```
          +-------+-------+-------+-------+
          |       |       |       |       |
     WL2 ---o-------o-------o-------o-------  (Word Line 2)
          | \     | \     |       |       |
          |  \    |  \    |       |       |
          |   \   |   \   |       |       |
          |    \  |    \  |       |       |
          |     \ |     \ |       |       |
         [NMOS] [NMOS]   [NO TX] [NO TX]   <-- Cells
          |     / |     / |       |       |
          |    /  |    /  |       |       |
          |   /   |   /   |       |       |
          |  /    |  /    |       |       |
          | /     | /     |       |       |
         GND     GND     GND     GND
          |       |       |       |
         BL0     BL1     BL2     BL3        (Bit Lines)
```
*(Note: [NMOS] represents a fabricated NMOS transistor. [NO TX] represents the absence of a transistor.)*

**Question 3:**
What is the primary difference in the pull-down mechanism between a NOR-based ROM cell and a conceptual NAND-based ROM cell in terms of transistor configuration?

**Answer 3:**
The primary difference lies in the transistor configuration forming the pull-down path to ground:
*   **NOR-based ROM:** Uses a **single NMOS transistor** per bit, controlled by a single word line.
*   **NAND-based ROM:** Uses a **series string of multiple NMOS transistors** per bit, where all transistors in the series must be turned ON (controlled by different word lines or signals) to create a pull-down path.

**Question 4:**
If a 4x4 NAND-based ROM is designed such that each bit location uses a series of 4 NMOS transistors controlled by WL0, WL1, WL2, and WL3 respectively, and the entire string is connected between the bit line and ground, how would you store a '0' at row WL1 and column BL3? What condition must be met for BL3 to be pulled to ground?

**Answer 4:**
To store a '0' at row WL1 and column BL3 in such a NAND ROM:
*   The NAND string connected to BL3 must be designed to pull to ground when WL1 is asserted, and the other necessary word lines are also asserted.
*   The condition for BL3 to be pulled to ground is that **all transistors in the series string connected to BL3 must be turned ON**. In this specific conceptual model, this means the transistors controlled by WL0, WL1, WL2, and WL3 (connected to BL3) must all be ON. The programming determines which of these series configurations are activated to create the desired '0' or '1' output for a given word line activation.

**(Note: This question probes the understanding of the series nature of NAND structures. In a typical NAND ROM, the specific transistors and their gate connections within the series string are what define the stored data for each bit.)**

---

### 7. Important Points to Remember

*   ROMs are non-volatile memory devices storing fixed data.
*   NOR ROM cells are fundamental and use a single NMOS transistor as a pull-down.
*   '0' in NOR ROM is stored by the presence of a transistor; '1' is by its absence.
*   NAND ROMs involve a series of transistors for the pull-down, offering different trade-offs.
*   The choice between NOR and NAND structures impacts density, speed, and power.
*   Understanding the pull-down mechanism is key to analyzing ROM cell behavior.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. Textbook and Reference Material Integration

*   **Kang, Leblebici, Kim (4/e):** Provides detailed analysis of MOS transistor operation and various memory cell structures, including ROMs, in chapters related to memory circuits.
*   **Sze (2/e):** Discusses semiconductor device physics and fabrication, which are crucial for understanding the physical implementation of ROM cells.
*   **Wolf (4/e):** Covers digital design methodologies and memory architectures, offering a systems-level perspective on ROM integration.
*   **Smith (ASIC):** Explains how ROMs are used in application-specific integrated circuits and discusses their design and implementation trade-offs.
*   **Weste & Eshraghian (2/e):** Offers insights into CMOS VLSI design principles, including memory cell design and array organization.
*   **Rabaey (2/e):** Provides a comprehensive overview of digital integrated circuits, including memory systems and the design of ROMs.

This module's topic directly relates to **CO4**, as it involves understanding and analyzing the implementation of basic storage cells (ROM cells) and their array structures. The design of these arrays, even conceptually, requires understanding their functional behavior.

---