---
title: "Shift registers - SISO, SIPO, PISO, PIPO."
subject: "DIGITAL ELECTRONICS"
module: "Module 3: Flip"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e54"
status: "completed"
scrapedAt: "2026-05-23T16:15:55.089Z"
---
# Digital Electronics - Module 3: Flip-Flops - Shift Registers

This module delves into **Shift Registers**, a fundamental type of sequential logic circuit that stores and moves binary data. We will explore the four basic configurations: SISO, SIPO, PISO, and PIPO, understanding their operation, applications, and design principles.

## 1. Introduction to Shift Registers

**Key Concept:** A shift register is a digital circuit constructed from flip-flops that can transfer (shift) data from one flip-flop to another in a specific direction. They are primarily used for data storage, serial-to-parallel conversion, and parallel-to-serial conversion.

**Definition:** A shift register is a synchronous sequential circuit composed of a chain of flip-flops, where the output of each flip-flop is connected to the input of the next flip-flop in the chain. Data is shifted through the register one position at a time with each clock pulse.

**Learning Outcome Alignment:** This section introduces the fundamental concept of shift registers, laying the groundwork for understanding their operation and applications. This aligns with **CO3 (Design sequential logic circuits)** by introducing a key sequential circuit building block.

**Reference:**
*   **Floyd T.L. - Digital Fundamentals (11/e):** Chapter 7 covers sequential logic and introduces shift registers.
*   **Malvino & Leach - Digital Principles and Applications (4/e):** Chapter 12 discusses flip-flops and their applications, including shift registers.

---

## 2. Basic Principles of Shift Register Operation

**Key Concepts:**
*   **Clock Pulse:** All flip-flops in a shift register are typically synchronized to a common clock pulse.
*   **Data Movement:** With each clock pulse, the data stored in each flip-flop is shifted to the next flip-flop.
*   **Serial Input (SI):** The data that enters the register serially.
*   **Serial Output (SO):** The data that exits the register serially.
*   **Parallel Input (PI):** The data that enters all flip-flops simultaneously.
*   **Parallel Output (PO):** The data that is available at all flip-flops simultaneously.

**Important Point to Remember:** The direction of data shift is determined by the connections between the flip-flops (e.g., Q output to D input of the next flip-flop).

---

## 3. Types of Shift Registers

We will now explore the four primary configurations of shift registers based on how data is entered and retrieved.

### 3.1. Serial-In, Serial-Out (SISO) Shift Register

**Description:** In a SISO shift register, data enters the register serially (one bit at a time) through a single input and exits serially through a single output.

**Operation:**
1.  Data is applied to the Serial Input (SI) of the first flip-flop.
2.  On each clock pulse, the data present at the SI of the first flip-flop is transferred to its Q output.
3.  The Q output of the first flip-flop is connected to the Serial Input (DI) of the second flip-flop. Thus, the data shifts to the next flip-flop.
4.  This continues for all flip-flops in the chain.
5.  The serial output is taken from the Q output of the last flip-flop.

**Diagrammatic Representation (for 4-bit SISO using D flip-flops):**

```
      +---+   +---+   +---+   +---+
SI ---| D |---| D |---| D |---| D |--- SO
      | Q |   | Q |   | Q |   | Q |
      +---+   +---+   +---+   +---+
        ^       ^       ^       ^
        |-------|-------|-------| Clock
```

**Truth Table (Example of data shifting):**
Assume initial state: Q3 Q2 Q1 Q0 = 0000

| Clock | SI | Q3 | Q2 | Q1 | Q0 | SO |
| :---- | :- | :- | :- | :- | :- | :- |
| 1     | 1  | 1  | 0  | 0  | 0  | 0  |
| 2     | 0  | 0  | 1  | 0  | 0  | 0  |
| 3     | 1  | 1  | 0  | 1  | 0  | 0  |
| 4     | 0  | 0  | 1  | 0  | 1  | 0  |

**Key Concepts:**
*   **Data transfer:** Shifted one position to the right (or left, depending on implementation) with each clock pulse.
*   **Delay:** Can be used as a serial data delay line.

**Applications:**
*   Serial data transmission.
*   Delay lines for serial data.

**Learning Outcome Alignment:** This section details a specific type of sequential circuit (SISO), demonstrating how flip-flops are interconnected to achieve a function. This directly supports **CO3 (Design sequential logic circuits)**.

**Reference:**
*   **Floyd T.L. - Digital Fundamentals (11/e):** Section 7-2 covers serial-in/serial-out shift registers.
*   **Malvino & Leach - Digital Principles and Applications (4/e):** Section 12-11 discusses serial shift registers.
*   **Mano, Ciletti - Digital Design (6/e):** Chapter 5 might have examples of basic register operations.

---

### 3.2. Serial-In, Parallel-Out (SIPO) Shift Register

**Description:** In a SIPO shift register, data enters serially through a single input, but all stored bits are available simultaneously at parallel outputs.

**Operation:**
1.  Data is applied to the Serial Input (SI) of the first flip-flop.
2.  On each clock pulse, the data shifts from one flip-flop to the next, similar to SISO.
3.  The serial input is applied sequentially until all desired bits are loaded.
4.  Once all data is loaded, the contents of all flip-flops are available simultaneously at their respective parallel outputs (Q0, Q1, Q2, Q3...).

**Diagrammatic Representation (for 4-bit SIPO using D flip-flops):**

```
      +---+   +---+   +---+   +---+
SI ---| D |---| D |---| D |---| D |--- Q0 (SO)
      | Q |-->| Q |-->| Q |-->| Q |
      +---+   +---+   +---+   +---+
        ^       ^       ^       ^
        |-------|-------|-------| Clock

      Q3      Q2      Q1      Q0 (Parallel Outputs)
```
*(Note: The arrow from Q of one FF to D of the next indicates the data path)*

**Truth Table (Example of data loading and parallel output):**
Assume initial state: Q3 Q2 Q1 Q0 = 0000

| Clock | SI | Q3 | Q2 | Q1 | Q0 | Parallel Outputs (Q3 Q2 Q1 Q0) |
| :---- | :- | :- | :- | :- | :- | :------------------------------- |
| 1     | 1  | 1  | 0  | 0  | 0  | 1000                             |
| 2     | 0  | 0  | 1  | 0  | 0  | 0100                             |
| 3     | 1  | 1  | 0  | 1  | 0  | 1010                             |
| 4     | 1  | 1  | 1  | 0  | 1  | 1101                             |

**Key Concepts:**
*   **Serial-to-Parallel Conversion:** This is the primary function of a SIPO register. It converts a serial stream of data into a parallel format.

**Applications:**
*   Converting serial data from communication interfaces (like RS-232) into parallel data for processing by a microprocessor.
*   Data acquisition systems.

**Learning Outcome Alignment:** This type of shift register demonstrates a crucial function: serial-to-parallel conversion. This aligns with **CO3 (Design sequential logic circuits)** and indirectly relates to **CO5 (Explain the basic concepts of programming using Verilog HDL)** if we consider how this operation would be implemented in hardware description languages.

**Reference:**
*   **Floyd T.L. - Digital Fundamentals (11/e):** Section 7-3 covers serial-in/parallel-out shift registers.
*   **Malvino & Leach - Digital Principles and Applications (4/e):** Section 12-12 discusses SIPO registers and their applications in data conversion.
*   **Taub & Schilling - Digital Integrated Electronics (2017):** Chapter 9 likely covers register functions and their implementation.

---

### 3.3. Parallel-In, Serial-Out (PISO) Shift Register

**Description:** In a PISO shift register, data is loaded into all flip-flops simultaneously in parallel, and then it is shifted out serially, one bit at a time.

**Operation:**
1.  Data is applied to the parallel inputs of all flip-flops.
2.  A control signal (e.g., a "Load" signal or a specific clock pulse) is used to load the parallel data into the flip-flops.
3.  Once loaded, the data is shifted out serially, usually from the output of the last flip-flop in the chain, with each clock pulse.
4.  To enable shifting, a control signal or a specific configuration of the flip-flop inputs is required.

**Diagrammatic Representation (for 4-bit PISO using D flip-flops with a shift control):**

```
      +---+   +---+   +---+   +---+
PI0---| D |---| D |---| D |---| D |--- Q0 (SO)
      | Q |-->| Q |-->| Q |-->| Q |
PI1---| D |   | D |   | D |   | D |
PI2---| D |   | D |   | D |   | D |
PI3---| D |   | D |   | D |   | D |
      +---+   +---+   +---+   +---+
        ^       ^       ^       ^
        |-------|-------|-------| Clock (for shifting)

      Q3      Q2      Q1      Q0 (Parallel Outputs - can be used too)
```
*(Note: For parallel loading, typically the PI lines would be connected to the D inputs, and a separate control signal would gate this data in. For shifting, the Q output of one FF connects to the D input of the next.)*

**Simplified Block Diagram showing control:**

```
      +---------------------+
PI0 --> D   Q ------> DI (next FF)
PI1 --> D   Q ------> DI (next FF)
PI2 --> D   Q ------> DI (next FF)
PI3 --> D   Q ------> DI (next FF)
      +---------------------+
        |         ^
        | Clock   |
        |         |
      Load Signal |
```

**Key Concepts:**
*   **Parallel-to-Serial Conversion:** This is the primary function of a PISO register. It converts parallel data into a serial stream.
*   **Control Logic:** Requires control signals for parallel loading versus serial shifting.

**Applications:**
*   Converting parallel data from a microprocessor or memory into a serial format for transmission over a serial communication channel.
*   Keyboards: Key presses are detected in parallel and then transmitted serially.

**Learning Outcome Alignment:** This section covers parallel-to-serial conversion, a key function of sequential circuits. This aligns with **CO3 (Design sequential logic circuits)** and **CO5 (Explain the basic concepts of programming using Verilog HDL)**.

**Reference:**
*   **Floyd T.L. - Digital Fundamentals (11/e):** Section 7-4 discusses parallel-in/serial-out shift registers.
*   **Malvino & Leach - Digital Principles and Applications (4/e):** Section 12-13 describes PISO registers.
*   **Brown - Fundamentals of Digital Logic with Verilog Design (2nd Edition):** This book will likely have Verilog examples of PISO registers.

---

### 3.4. Parallel-In, Parallel-Out (PIPO) Shift Register

**Description:** In a PIPO shift register, data is loaded into all flip-flops simultaneously in parallel, and all stored bits are also available simultaneously at parallel outputs. The "shift" aspect comes from the ability to move data from one flip-flop to the next with a clock pulse.

**Operation:**
1.  Data is applied to the parallel inputs of all flip-flops.
2.  A clock pulse loads the data into each flip-flop.
3.  On subsequent clock pulses, the data can be shifted to the right (or left) through the chain of flip-flops.
4.  The contents of all flip-flops are available at their respective parallel outputs at all times.

**Diagrammatic Representation (for 4-bit PIPO using D flip-flops):**

```
      +---+   +---+   +---+   +---+
PI0 --> D |---| D |---| D |---| D |--- PO0
      | Q |-->| Q |-->| Q |-->| Q |
PI1 --> D |---| D |---| D |---| D |--- PO1
PI2 --> D |---| D |---| D |---| D |--- PO2
PI3 --> D |---| D |---| D |---| D |--- PO3
      +---+   +---+   +---+   +---+
        ^       ^       ^       ^
        |-------|-------|-------| Clock

      Q3      Q2      Q1      Q0 (Parallel Outputs)
```
*(Note: For a PIPO that *only* loads and outputs in parallel, it's essentially just an array of D flip-flops. The "shift register" aspect implies the capability to shift data between these flip-flops.)*

**Key Concepts:**
*   **Data Storage:** Can store multiple bits in parallel.
*   **Data Manipulation:** The shifting capability allows for data manipulation and movement.
*   **Versatility:** Can be used for both parallel loading and serial shifting or vice-versa if designed with appropriate control.

**Applications:**
*   Temporary data storage.
*   Implementing micro-operations in a CPU.
*   Buffer registers.

**Learning Outcome Alignment:** This section covers a more general form of register that also incorporates shifting. This directly relates to **CO3 (Design sequential logic circuits)** and **CO6 (Design and realize hardware circuits. medium complexity practical digital)** as PIPO registers are building blocks.

**Reference:**
*   **Floyd T.L. - Digital Fundamentals (11/e):** Section 7-5 discusses parallel-in/parallel-out shift registers.
*   **Malvino & Leach - Digital Principles and Applications (4/e):** Section 12-10 covers PIPO registers.

---

## 4. Universal Shift Registers

**Key Concept:** A Universal Shift Register is a shift register that can perform all four operations: SISO, SIPO, PISO, and PIPO, and can also shift in either direction (left or right).

**Description:** These registers are more complex, typically using multiplexers to select the input to each flip-flop, allowing for different data paths and modes of operation.

**Applications:**
*   Data transfer between peripherals.
*   Arithmetic operations (like multiplication and division).
*   Digital signal processing.

**Learning Outcome Alignment:** Understanding universal shift registers demonstrates a deeper grasp of sequential circuit design and the ability to create more complex, versatile circuits. This aligns with **CO3 (Design sequential logic circuits)** and **CO6 (Design and realize hardware circuits. medium complexity practical digital)**.

**Reference:**
*   **Floyd T.L. - Digital Fundamentals (11/e):** Section 7-6 introduces universal shift registers.
*   **Malvino & Leach - Digital Principles and Applications (4/e):** Chapter 12 might have a section on universal shift registers.

---

## 5. Shift Register Applications

**Key Concepts:** Shift registers are versatile components with numerous applications in digital systems.

**Applications:**
*   **Serial-to-Parallel Conversion:** Converting serial data streams from communication channels (e.g., serial ports, wireless receivers) into parallel data that can be processed by microprocessors. (SIPO)
*   **Parallel-to-Serial Conversion:** Transmitting parallel data from a CPU or memory to a serial communication channel (e.g., serial printers, modems). (PISO)
*   **Data Storage:** Holding binary data for later use. (All types)
*   **Delay Lines:** Introducing a specific time delay to a serial signal by shifting it through multiple flip-flops. (SISO)
*   **Sequence Generators:** Creating specific binary sequences.
*   **Digital Signal Processing (DSP):** Implementing operations like Finite Impulse Response (FIR) filters.
*   **Displaying Data:** Driving LED displays or other output devices.

**Learning Outcome Alignment:** This section directly addresses the practical uses of shift registers, demonstrating their importance in real-world digital systems. This supports **CO3 (Design sequential logic circuits)** and **CO2 (Design combinational logic circuits)** if the application involves combinational logic alongside the sequential shift register.

**Reference:**
*   **Floyd T.L. - Digital Fundamentals (11/e):** Chapter 7 provides various application examples.
*   **Malvino & Leach - Digital Principles and Applications (4/e):** Chapter 12 emphasizes applications.
*   **Brown - Fundamentals of Digital Logic with Verilog Design (2nd Edition):** Likely includes examples of shift register applications in Verilog.

---

## 6. Design Considerations and Examples

**Key Concepts:**
*   **Flip-Flop Choice:** D flip-flops are commonly used due to their simple input-output relationship (Q(t+1) = D(t)). JK or T flip-flops can also be used, but require more complex input logic.
*   **Clocking:** Synchronous operation is crucial, meaning all flip-flops receive the same clock signal.
*   **Control Signals:** For PIPO and universal registers, control signals are necessary to select between loading and shifting, or between different shift directions.
*   **Number of Stages:** The number of flip-flops determines the number of bits the register can store or shift.

**Example Design: 4-bit SIPO Shift Register**

Let's design a 4-bit SIPO shift register using D flip-flops to convert a serial input (SI) into parallel outputs (Q3, Q2, Q1, Q0).

**Components:**
*   4 D flip-flops (e.g., 74LS174, 74HC174)
*   Clock source
*   Serial Input (SI)
*   Reset or Clear input (optional, but good practice)

**Circuit Diagram:**

```
      +---+       +---+       +---+       +---+
SI ---| D | Q ----| D | Q ----| D | Q ----| D | Q ---- Q0 (SO)
      |   |------>|   |------>|   |------>|   |
      +---+ CLK   +---+ CLK   +---+ CLK   +---+ CLK
       FF0     FF1     FF2     FF3

       Q0------>DI(FF1)
       Q1------>DI(FF2)
       Q2------>DI(FF3)

Parallel Outputs:
Q0 from FF0
Q1 from FF1
Q2 from FF2
Q3 from FF3
```

**Operation Steps:**
1.  **Initialize:** Apply a reset pulse to clear all flip-flops to 0.
2.  **Load Serial Data:**
    *   Clock pulse 1: SI = 1 -> FF0 gets 1.
    *   Clock pulse 2: SI = 0 -> FF0 gets 0, FF1 gets the previous value of FF0 (which was 1).
    *   Clock pulse 3: SI = 1 -> FF0 gets 1, FF1 gets 0, FF2 gets the previous value of FF1 (which was 0).
    *   Clock pulse 4: SI = 1 -> FF0 gets 1, FF1 gets 1, FF2 gets 0, FF3 gets the previous value of FF2 (which was 0).
3.  **Parallel Output:** After 4 clock pulses, the parallel outputs will represent the loaded serial data: Q3=1, Q2=1, Q1=0, Q0=1.

**Verilog HDL Example (Conceptual):**

```verilog
module SIPO_Register (
    input wire clk,
    input wire reset,
    input wire serial_in,
    output reg [3:0] parallel_out
);

    reg [3:0] shift_reg;

    always @(posedge clk or posedge reset) begin
        if (reset) begin
            shift_reg <= 4'b0000;
        end else begin
            // Shift data in from serial_in
            shift_reg[0] <= serial_in;
            shift_reg[1] <= shift_reg[0];
            shift_reg[2] <= shift_reg[1];
            shift_reg[3] <= shift_reg[2];
        end
    end

    assign parallel_out = shift_reg; // Assign internal register to output

endmodule
```

**Learning Outcome Alignment:** This section provides practical design examples and considerations, directly supporting **CO3 (Design sequential logic circuits)**, **CO6 (Design and realize hardware circuits. medium complexity practical digital)**, and **CO5 (Explain the basic concepts of programming using Verilog HDL)**.

**Reference:**
*   **Mano, Ciletti - Digital Design (6/e):** Chapter 5 likely has detailed design examples and state diagrams for registers.
*   **Brown - Fundamentals of Digital Logic with Verilog Design (2nd Edition):** Essential for Verilog implementation examples.

---

## 7. Practice Questions and Exercises

**Question 1:**
A shift register is to be designed to store 8 bits of data. It needs to accept data serially and output it in parallel. Which type of shift register is most suitable for this task?
(a) SISO
(b) SIPO
(c) PISO
(d) PIPO

**Answer:** (b) SIPO (Serial-In, Parallel-Out)

**Question 2:**
Explain the primary function of a PISO shift register and give one example of its application.

**Answer:**
The primary function of a PISO (Parallel-In, Serial-Out) shift register is **parallel-to-serial conversion**. This means it takes multiple bits of data that are available simultaneously at its inputs and outputs them one bit at a time in a serial fashion.
**Application Example:** Used in keyboards to convert the parallel scan code of a key press into a serial signal that can be transmitted to the computer's processor.

**Question 3:**
Draw the logic diagram for a 3-bit SISO shift register using D flip-flops. Show the serial input, serial output, and clock connections. Describe its operation when the serial input sequence is 101.

**Answer:**
**(Logic Diagram):**
*(Imagine a diagram with 3 D flip-flops connected in series: SI -> D of FF0, Q of FF0 -> D of FF1, Q of FF1 -> D of FF2. All CLK inputs are connected to a common clock. SO is taken from Q of FF2. Initial state is assumed to be 000.)*

*   **FF0:** Q0, D0
*   **FF1:** Q1, D1
*   **FF2:** Q2, D2

Connections:
*   SI -> D0
*   Q0 -> D1
*   Q1 -> D2
*   CLK (all FF) -> Common Clock
*   SO <- Q2

**(Operation for 101 input):**
Assume initial state: Q2 Q1 Q0 = 000

| Clock | SI | Q2 | Q1 | Q0 | SO |
| :---- | :- | :- | :- | :- | :- |
| 1     | 1  | 0  | 0  | 1  | 0  |  *(FF0 gets 1, Q0 becomes 1)*
| 2     | 0  | 0  | 1  | 0  | 0  |  *(FF1 gets 0, Q1 becomes 0; FF0 gets 0, Q0 becomes 0)*
| 3     | 1  | 1  | 0  | 0  | 0  |  *(FF2 gets 1, Q2 becomes 1; FF1 gets 0, Q1 becomes 0)*

After 3 clock pulses, the serial output sequence observed is 001. The final state of the register would be Q2=1, Q1=0, Q0=0.

**Question 4:**
What is the main advantage of a SIPO shift register over a SISO shift register?

**Answer:**
The main advantage of a SIPO shift register over a SISO shift register is its ability to perform **serial-to-parallel conversion**. While a SISO register delays serial data, a SIPO register makes all the serially loaded bits available simultaneously at its parallel outputs, allowing for faster processing by parallel-input devices.

**Question 5:**
Design a simple PIPO shift register that can shift data to the right. If the initial data loaded in parallel is `1101` (D3=1, D2=1, D1=0, D0=1), and the serial input for shifting is `0`, what will be the parallel output after two clock pulses?

**Answer:**
**Circuit Description:** A PIPO shift register where the output of each flip-flop is connected to the input of the next flip-flop in the direction of the shift (e.g., Q0 -> D1, Q1 -> D2, Q2 -> D3). Parallel inputs D0-D3 load data, and parallel outputs Q0-Q3 show the current state.

**Operation:**
*   **Initial Load:** Parallel data `1101` is loaded.
    *   Q3=1, Q2=1, Q1=0, Q0=1.
*   **Clock Pulse 1 (Shifting with SI=0):**
    *   The serial input (SI) is usually connected to the D input of the first flip-flop in the chain for serial input during shifting (or the data is loaded in parallel first). Assuming we first loaded parallel, and now are shifting with SI=0, and data shifts from right to left (Q0 -> Q1 -> Q2 -> Q3).
    *   Let's assume shifting right means the data enters from SI and shifts towards Q0.
    *   Initial State (after parallel load): Q3 Q2 Q1 Q0 = 1101
    *   Clock 1: The data at D3 is loaded into Q3. The serial input '0' is applied to D3, Q2 output is shifted to D3, Q1 to D2, Q0 to D1. The serial output is from Q3.
    *   Let's re-interpret: A PIPO register allows parallel load AND shifting. If we first load 1101, and then we want to shift right with SI=0, the data moves towards the rightmost flip-flop (say, Q0).
    *   Initial: Q3 Q2 Q1 Q0 = 1101
    *   After Clock 1 (SI=0, shifting right):
        *   The input to FF3 (Q3) is the previous Q2 = 1. So, Q3 becomes 1.
        *   The input to FF2 (Q2) is the previous Q1 = 0. So, Q2 becomes 0.
        *   The input to FF1 (Q1) is the previous Q0 = 1. So, Q1 becomes 1.
        *   The input to FF0 (Q0) is the serial input SI = 0. So, Q0 becomes 0.
    *   State after Clock 1: Q3 Q2 Q1 Q0 = 1010
*   **Clock Pulse 2 (Shifting with SI=0):**
    *   State before Clock 2: Q3 Q2 Q1 Q0 = 1010
    *   The input to FF3 (Q3) is the previous Q2 = 0. So, Q3 becomes 0.
    *   The input to FF2 (Q2) is the previous Q1 = 1. So, Q2 becomes 1.
    *   The input to FF1 (Q1) is the previous Q0 = 0. So, Q1 becomes 0.
    *   The input to FF0 (Q0) is the serial input SI = 0. So, Q0 becomes 0.
    *   State after Clock 2: Q3 Q2 Q1 Q0 = 0100

**Therefore, after two clock pulses, the parallel output will be 0100.**

**Learning Outcome Alignment:** These practice questions test the understanding of the definitions, operations, and applications of different shift register types, directly aligning with **CO3 (Design sequential logic circuits)** and **CO1 (Identify various number systems, binary codes and formulate digital functions using Boolean algebra)** to some extent if conversion is involved.

---

## 8. Important Points to Remember

*   **Synchronous Operation:** Shift registers are typically synchronous, meaning all flip-flops change state simultaneously on the rising or falling edge of the clock pulse.
*   **Data Direction:** The direction of data shift is determined by how the Q output of one flip-flop is connected to the input of the next.
*   **Conversion Capability:** SIPO registers perform serial-to-parallel conversion, and PISO registers perform parallel-to-serial conversion.
*   **Flexibility:** Universal shift registers offer the most flexibility, performing various operations and supporting bidirectional shifting.
*   **Applications:** Shift registers are vital for data communication, data manipulation, and timing functions within digital systems.

---

This concludes Module 3 on Shift Registers. Understanding these fundamental circuits is crucial for designing more complex sequential logic systems.
