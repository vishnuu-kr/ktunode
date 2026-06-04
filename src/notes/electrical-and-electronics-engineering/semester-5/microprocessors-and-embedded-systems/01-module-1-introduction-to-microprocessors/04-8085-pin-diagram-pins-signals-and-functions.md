---
title: "8085 Pin diagram- Pins, Signals and functions"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 1: Introduction to microprocessors "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3620e"
status: "completed"
scrapedAt: "2026-05-23T16:22:37.244Z"
---
# Microprocessors and Embedded Systems

## Module 1: Introduction to Microprocessors

### Topic: 8085 Pin Diagram - Pins, Signals, and Functions

---

### 1. Introduction to Microprocessors (CO1, K2)

*   **What is a Microprocessor?**
    *   A microprocessor is a central processing unit (CPU) of a computer fabricated on a single integrated circuit (IC).
    *   It contains the arithmetic logic unit (ALU), control unit, and registers.
    *   It fetches instructions from memory, decodes them, and executes them.
*   **Evolution of Microprocessors:**
    *   Early microprocessors were 4-bit, followed by 8-bit, 16-bit, 32-bit, and 64-bit processors.
    *   The Intel 8085 is an 8-bit microprocessor, widely used in early personal computers and embedded systems. It served as a fundamental learning tool for understanding microprocessor architecture and operation.

---

### 2. The Intel 8085 Microprocessor (CO1, K2)

*   **Architecture:**
    *   The 8085 has a 16-bit address bus, allowing it to access up to $2^{16}$ = 65,536 memory locations (64 KB).
    *   It has an 8-bit data bus, meaning it can transfer 8 bits of data at a time.
    *   Key components include:
        *   **Accumulator (A):** An 8-bit register used for arithmetic and logic operations.
        *   **General-Purpose Registers:** B, C, D, E, H, L (each 8-bit) that can be paired to form 16-bit registers (BC, DE, HL).
        *   **Program Counter (PC):** A 16-bit register that holds the address of the next instruction to be fetched.
        *   **Stack Pointer (SP):** A 16-bit register that points to the top of the stack in memory.
        *   **Instruction Register (IR):** Holds the currently fetched instruction.
        *   **Arithmetic Logic Unit (ALU):** Performs arithmetic and logical operations.
        *   **Timing and Control Unit:** Generates control signals for internal and external operations.
        *   **Interrupt Control:** Manages interrupt requests.
*   **Clock:**
    *   The 8085 requires an external clock signal for its operation. The clock frequency determines the speed of execution. (Refer to Gaonkar, Chapter 2 for detailed clock generation circuitry).

---

### 3. 8085 Pin Diagram: An Overview (CO1, K2)

*   The 8085 is a 40-pin IC package.
*   The pins are categorized based on their functions:
    *   Address Bus
    *   Data Bus
    *   Control and Status Signals
    *   Interrupts
    *   Serial Input/Output
    *   Clock and Reset

---

### 4. Detailed Analysis of 8085 Pins, Signals, and Functions

#### 4.1. Address Bus Pins (A0-A15)

*   **Pins:** A0 to A15
*   **Number of Pins:** 16
*   **Function:** These pins carry the 16-bit address to specify the memory location or I/O device to be accessed. A0 is the least significant bit (LSB) and A15 is the most significant bit (MSB).
*   **Important Point:** The address bus is unidirectional, emanating from the microprocessor.
*   **Referenced in:** Gaonkar, Chapter 2. "The 8085 microprocessor uses 16 address lines to address up to $2^{16}$ or 65,536 memory locations."

#### 4.2. Multiplexed Address/Data Bus Pins (AD0-AD7)

*   **Pins:** AD0 to AD7
*   **Number of Pins:** 8
*   **Function:** These pins serve a dual purpose. During the initial part of a machine cycle (T1 state), they carry the lower 8 bits of the address (A0-A7). In subsequent states (T2, T3), they are used as a bidirectional data bus (D0-D7) for transferring data between the microprocessor and memory or I/O devices.
*   **Demultiplexing:** An external latch (like 74LS373) is required to capture the lower byte of the address when it is available on AD0-AD7. The Address Latch Enable (ALE) signal indicates when these pins carry address information.
*   **Important Point:** The multiplexing of address and data lines reduces the number of pins required for the IC, a common design strategy.
*   **Referenced in:** Ram, Chapter 3. "The dual-role AD0-AD7 lines are multiplexed... A latch is used to store the lower byte of the address..."

#### 4.3. Control and Status Signals

These signals provide information about the current operation of the microprocessor and control the interaction with external devices.

*   **ALE (Address Latch Enable)**
    *   **Pin:** 10
    *   **Type:** Output
    *   **Function:** This signal is a pulse that goes high during the T1 state of an instruction fetch cycle. It signals that the AD0-AD7 pins are carrying the lower 8 bits of the address. This pulse is used to latch the lower byte of the address into an external latch.
    *   **Important Point:** ALE is a key signal for demultiplexing the address/data bus.

*   **PC0 (Program Counter Output)**
    *   **Pin:** 10 (Shared with ALE, but it's a specific output during certain states)
    *   **Type:** Output
    *   **Function:** This signal carries the program counter output, which is often used to indicate the address being accessed. It is asserted when the PC content is latched. (Note: This is often misunderstood and is more of a manifestation of the PC content on the AD lines when they are acting as address lines, rather than a dedicated PC output pin). The primary intent is that the PC's content is available on the address bus.

*   **IO/$\overline{\text{M}}$ (I/O or Memory Select)**
    *   **Pin:** 34
    *   **Type:** Output
    *   **Function:** This signal distinguishes between memory operations and I/O operations.
        *   If $\overline{\text{IO/M}}$ = 0, it indicates a memory operation (accessing memory).
        *   If $\overline{\text{IO/M}}$ = 1, it indicates an I/O operation (accessing I/O devices).
    *   **Important Point:** Crucial for differentiating memory-mapped I/O from peripheral-mapped I/O.

*   **$\overline{\text{RD}}$ (Read)**
    *   **Pin:** 32
    *   **Type:** Output
    *   **Function:** This signal is active low. When $\overline{\text{RD}}$ is asserted (goes low), it indicates that the microprocessor wants to read data from memory or an I/O device. The addressed device must then place its data on the data bus.
    *   **Important Point:** Essential for input operations.

*   **$\overline{\text{WR}}$ (Write)**
    *   **Pin:** 33
    *   **Type:** Output
    *   **Function:** This signal is active low. When $\overline{\text{WR}}$ is asserted (goes low), it indicates that the microprocessor wants to write data to memory or an I/O device. The data on the data bus will be written to the addressed location.
    *   **Important Point:** Essential for output operations.

*   **$\overline{\text{ACK}}$ (Acknowledge)**
    *   **Pin:** 36
    *   **Type:** Input
    *   **Function:** This signal is used by the addressed memory or I/O device to acknowledge that it has received the read/write command and data. For example, in a read operation, the device places data on the data bus and asserts $\overline{\text{ACK}}$. In a write operation, the device accepts data from the bus and asserts $\overline{\text{ACK}}$.
    *   **Important Point:** Used for handshake operations between the CPU and peripherals.

#### 4.4. Interrupt Signals (CO2, K2)

The 8085 supports hardware and software interrupts, allowing external devices to request the microprocessor's attention.

*   **INTR (Interrupt Request)**
    *   **Pin:** 11
    *   **Type:** Input
    *   **Function:** This is a general-purpose interrupt request line. It is a maskable interrupt, meaning it can be enabled or disabled by software instructions (like `EI` and `DI`). When INTR is activated, the microprocessor completes its current instruction and then requests an interrupt acknowledge from the external device. The device must then place an instruction (usually a restart instruction) on the data bus to be fetched by the CPU.
    *   **Referenced in:** Gaonkar, Chapter 7. "INTR is a maskable interrupt."

*   **$\overline{\text{INTA}}$ (Interrupt Acknowledge)**
    *   **Pin:** 13
    *   **Type:** Output
    *   **Function:** This signal is asserted by the microprocessor in response to an INTR request. It signals to the interrupting device that its request has been recognized. The interrupting device uses this signal to send an instruction (like a CALL or RST instruction) on the data bus.

*   **RST 5.5, RST 6.5, RST 7.5 (Restart Interrupts)**
    *   **Pins:** 37, 38, 39 respectively.
    *   **Type:** Input
    *   **Function:** These are internally masked restart interrupts. They are automatically enabled after reset and can be masked or unmasked using specific instructions. Each RST line corresponds to a specific restart instruction, which jumps to a predefined memory location.
        *   RST 7.5: Vector address $0024H$
        *   RST 6.5: Vector address $0034H$
        *   RST 5.5: Vector address $002CH$
    *   **Important Point:** These are edge-triggered (RST 7.5) or level-triggered (RST 6.5, RST 5.5) interrupts, providing different interrupt handling mechanisms.

*   **$\overline{\text{TRAP}}$ (Highest Priority Interrupt)**
    *   **Pin:** 6
    *   **Type:** Input
    *   **Function:** This is a non-maskable interrupt (NMI) with the highest priority. It is edge-triggered. When $\overline{\text{TRAP}}$ is activated, the microprocessor immediately stops its current operation and jumps to a fixed memory location ($0024H$) without any acknowledgment. It cannot be masked by software.
    *   **Important Point:** Used for critical events like power failure.

*   **$\overline{\text{RESET}}$**
    *   **Pin:** 35
    *   **Type:** Input
    *   **Function:** This is an external reset input. When this pin is held low for at least two clock cycles, the microprocessor is reset. Upon reset, the program counter is cleared to 0, and the CPU starts executing instructions from memory location $0000H$. All interrupt enable flags are reset.
    *   **Important Point:** Resets the microprocessor to a known initial state.

*   **READY**
    *   **Pin:** 37
    *   **Type:** Input
    *   **Function:** This is an asynchronous input signal used for slow memory or I/O devices. If the READY pin is low, the microprocessor enters a WAIT state and waits for the READY signal to become high before proceeding. This allows slow devices to be interfaced with the faster microprocessor.
    *   **Important Point:** Enables the CPU to synchronize with slower peripherals.

#### 4.5. Clock Signals (CO2, K2)

*   **X1, X2**
    *   **Pins:** 1, 2
    *   **Type:** Input
    *   **Function:** These pins are used to connect an external crystal oscillator or an external clock source to generate the clock frequency for the 8085 microprocessor. The frequency determines the speed of operation.
    *   **Referenced in:** Gaonkar, Chapter 2. "The frequency of the crystal connected to X1 and X2 determines the clock frequency of the 8085."

*   **CLK**
    *   **Pin:** 3
    *   **Type:** Output
    *   **Function:** This is the clock output signal derived from the external crystal. It is a single-phase clock signal with a frequency equal to half of the crystal frequency. It can be used to synchronize external circuitry.

#### 4.6. Serial Input/Output Pins

*   **SID (Serial Input Data)**
    *   **Pin:** 12
    *   **Type:** Input
    *   **Function:** This pin is used for serial communication. The 8085 can read a bit from this line when the `RIM` (Read Interrupt Mask) instruction is executed.

*   **SOD (Serial Output Data)**
    *   **Pin:** 13
    *   **Type:** Output
    *   **Function:** This pin is used for serial communication. The 8085 can output a bit to this line when the `SIM` (Serial Output Mask) instruction is executed.
    *   **Important Point:** SID and SOD are dedicated pins for serial data transfer, supporting asynchronous serial communication.

#### 4.7. Power Supply Pins

*   **VCC**
    *   **Pin:** 40
    *   **Type:** Power Supply
    *   **Function:** Connect to +5V DC power supply.

*   **VSS**
    *   **Pin:** 20
    *   **Type:** Ground
    *   **Function:** Connect to ground (0V).

---

### 5. Summary Table of 8085 Pins and Signals

| Pin No. | Pin Name     | Type     | Function                                                                                                                             | Category          |
| :------ | :----------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------- | :---------------- |
| 1       | X1           | Input    | Clock Input (Crystal Oscillator)                                                                                                     | Clock             |
| 2       | X2           | Input    | Clock Input (Crystal Oscillator)                                                                                                     | Clock             |
| 3       | CLK          | Output   | Clock Output                                                                                                                         | Clock             |
| 4       | VCC          | Power    | +5V DC Power Supply                                                                                                                  | Power Supply      |
| 5       | HOLD         | Input    | Hold Request (Bus Request)                                                                                                           | Bus Control       |
| 6       | $\overline{\text{HOLD A}}$ | Output   | Hold Acknowledge (Bus Grant)                                                                                                         | Bus Control       |
| 7       | AD0          | I/O      | Multiplexed Address/Data Bus (Lower 8 bits)                                                                                          | Address/Data      |
| 8       | AD1          | I/O      | Multiplexed Address/Data Bus (Lower 8 bits)                                                                                          | Address/Data      |
| 9       | AD2          | I/O      | Multiplexed Address/Data Bus (Lower 8 bits)                                                                                          | Address/Data      |
| 10      | AD3          | I/O      | Multiplexed Address/Data Bus (Lower 8 bits)                                                                                          | Address/Data      |
| 11      | AD4          | I/O      | Multiplexed Address/Data Bus (Lower 8 bits)                                                                                          | Address/Data      |
| 12      | AD5          | I/O      | Multiplexed Address/Data Bus (Lower 8 bits)                                                                                          | Address/Data      |
| 13      | AD6          | I/O      | Multiplexed Address/Data Bus (Lower 8 bits)                                                                                          | Address/Data      |
| 14      | AD7          | I/O      | Multiplexed Address/Data Bus (Lower 8 bits)                                                                                          | Address/Data      |
| 15      | $\overline{\text{WR}}$ | Output   | Write Operation (Active Low)                                                                                                         | Control           |
| 16      | $\overline{\text{RD}}$  | Output   | Read Operation (Active Low)                                                                                                          | Control           |
| 17      | ALE          | Output   | Address Latch Enable                                                                                                                 | Control           |
| 18      | S0, S1       | Output   | Status Signals (Memory Read, I/O Read, etc.)                                                                                         | Status            |
| 19      | $\overline{\text{INTA}}$ | Output   | Interrupt Acknowledge                                                                                                                | Interrupt         |
| 20      | VSS          | Ground   | Ground                                                                                                                               | Power Supply      |
| 21      | CLK          | Output   | Clock Output (Same as Pin 3, for clarity on some diagrams)                                                                           | Clock             |
| 22      | READY        | Input    | Ready Input (for synchronization with slow peripherals)                                                                              | Control           |
| 23      | INTR         | Input    | Interrupt Request (Maskable)                                                                                                         | Interrupt         |
| 24      | RST 7.5      | Input    | Restart Interrupt 7.5 (Maskable, Edge-triggered)                                                                                     | Interrupt         |
| 25      | RST 6.5      | Input    | Restart Interrupt 6.5 (Maskable, Level-triggered)                                                                                    | Interrupt         |
| 26      | RST 5.5      | Input    | Restart Interrupt 5.5 (Maskable, Level-triggered)                                                                                    | Interrupt         |
| 27      | $\overline{\text{TRAP}}$ | Input    | Trap Interrupt (Non-maskable, Highest Priority, Edge-triggered)                                                                      | Interrupt         |
| 28      | SID          | Input    | Serial Input Data                                                                                                                    | Serial I/O        |
| 29      | SOD          | Output   | Serial Output Data                                                                                                                   | Serial I/O        |
| 30      | $\overline{\text{RESET}}$ | Input    | Reset Input (Active Low)                                                                                                             | Control           |
| 31      | IO/$\overline{\text{M}}$ | Output   | I/O or Memory Operation Select                                                                                                       | Control           |
| 32      | $\overline{\text{WR}}$ | Output   | Write Operation (Active Low) - Often confused with pin 15, but the diagram shows separate control signals. This is a dedicated output. | Control           |
| 33      | $\overline{\text{RD}}$  | Output   | Read Operation (Active Low) - Often confused with pin 16, but the diagram shows separate control signals. This is a dedicated output.   | Control           |
| 34      | $\overline{\text{ACK}}$ | Input    | Acknowledge (for Interrupts or Bus Grant)                                                                                            | Control/Interrupt |
| 35      | A8           | Output   | Address Bus (High 8 bits)                                                                                                            | Address           |
| 36      | A9           | Output   | Address Bus (High 8 bits)                                                                                                            | Address           |
| 37      | A10          | Output   | Address Bus (High 8 bits)                                                                                                            | Address           |
| 38      | A11          | Output   | Address Bus (High 8 bits)                                                                                                            | Address           |
| 39      | A12          | Output   | Address Bus (High 8 bits)                                                                                                            | Address           |
| 40      | A13          | Output   | Address Bus (High 8 bits)                                                                                                            | Address           |
| 41      | A14          | Output   | Address Bus (High 8 bits)                                                                                                            | Address           |
| 42      | A15          | Output   | Address Bus (High 8 bits)                                                                                                            | Address           |

*(Note: Pin numbering can vary slightly in different diagrams. The most common numbering scheme is used here. The table above reflects a standard 40-pin DIP package.)*

---

### 6. Important Points to Remember (CO1, K2)

*   **Multiplexing:** The AD0-AD7 pins are multiplexed, requiring an external latch and the ALE signal for address demultiplexing.
*   **Status Signals (S0, S1):** These signals indicate the type of bus cycle in progress (e.g., opcode fetch, memory read, memory write, interrupt acknowledge). They are often decoded by external logic to control peripherals.
*   **Interrupts:** Understand the priority order and maskable/non-maskable nature of the interrupt signals. TRAP has the highest priority and is non-maskable. INTR is maskable. RST 5.5, 6.5, 7.5 are maskable with fixed vector addresses.
*   **Bus Control:** $\overline{\text{RD}}$, $\overline{\text{WR}}$, $\overline{\text{ACK}}$, IO/$\overline{\text{M}}$ are critical for controlling data flow and identifying the type of transaction.
*   **Clock:** The 8085 requires an external clock source, typically a crystal, to operate.
*   **READY Signal:** Crucial for interfacing with slower devices, allowing the CPU to insert wait states.
*   **HOLD and $\overline{\text{HOLD A}}$:** Used for bus sharing in systems with multiple masters (e.g., DMA controllers).

---

### 7. Practice Questions

**Question 1:** Explain the function of the ALE signal in the 8085 microprocessor. Why is it necessary? (CO1, K2)

**Question 2:** Differentiate between the INTR and TRAP interrupt signals in the 8085. (CO1, CO2, K2)

**Question 3:** What is the purpose of the READY signal? Give an example of a scenario where it would be used. (CO1, K2)

**Question 4:** How does the 8085 distinguish between memory access and I/O access? (CO1, K2)

**Question 5:** What are the address bus and data bus lines in the 8085? Explain the concept of multiplexing as used in the 8085. (CO1, K2)

---

### 8. Answers to Practice Questions

**Answer 1:**
The ALE (Address Latch Enable) signal is a pulse that goes high for one machine cycle (T1 state) when the 8085 outputs the lower 8 bits of an address on the AD0-AD7 lines. Its primary function is to enable an external latch (like the 74LS373) to capture this address information. This is necessary because the AD0-AD7 lines are multiplexed between address and data. Without ALE, the microprocessor would not be able to separate the address information from the data during the operation, making it impossible to correctly access memory or I/O devices.

**Answer 2:**
*   **INTR (Interrupt Request):**
    *   It is a maskable interrupt, meaning it can be enabled or disabled by software instructions (`EI`, `DI`).
    *   It is level-sensitive.
    *   It requires an interrupt acknowledge cycle ($\overline{\text{INTA}}$) from the CPU, during which the interrupting device must supply an instruction (like a Restart instruction) on the data bus.
    *   It is a general-purpose interrupt.
*   **TRAP:**
    *   It is a non-maskable interrupt (NMI), meaning it cannot be disabled by software.
    *   It is edge-sensitive (it triggers on the rising edge of the signal).
    *   It has the highest priority among all interrupts.
    *   It is automatically vectored to a fixed memory address ($0024H$) without requiring any acknowledge signal or supplying an instruction by the external device.
    *   It is typically used for critical events like power failure or emergency shutdowns.

**Answer 3:**
The READY signal is an input to the 8085 microprocessor that allows synchronization with slower memory or I/O devices. When a device is not ready to provide or accept data, it can assert the READY signal low. If the READY signal is low, the 8085 enters a "WAIT state" and holds its current bus activity until the READY signal becomes high again. This allows the microprocessor to interface with devices that operate at speeds slower than its own clock cycle. For example, a slow memory chip that needs more time to fetch data would de-assert the READY signal, causing the CPU to wait.

**Answer 4:**
The 8085 distinguishes between memory access and I/O access using the **IO/$\overline{\text{M}}$** (I/O or Memory Select) control signal.
*   When the 8085 is performing a memory operation (reading from or writing to memory), the IO/$\overline{\text{M}}$ signal is asserted low (IO/$\overline{\text{M}}$ = 0).
*   When the 8085 is performing an I/O operation (reading from or writing to an I/O device), the IO/$\overline{\text{M}}$ signal is asserted high (IO/$\overline{\text{M}}$ = 1).
This signal, along with $\overline{\text{RD}}$ and $\overline{\text{WR}}$, helps external logic determine whether to enable memory devices or I/O devices.

**Answer 5:**
*   **Address Bus:** The 8085 has a 16-bit address bus, comprising pins A0-A7 (multiplexed with data) and A8-A15 (dedicated address lines). This bus is used to specify the memory location or I/O device that the microprocessor intends to access. The address bus is unidirectional, originating from the CPU. It can address up to $2^{16}$ = 65,536 memory locations.
*   **Data Bus:** The 8085 has an 8-bit data bus, on pins AD0-AD7. This bus is bidirectional and is used to transfer data between the microprocessor and memory or I/O devices.
*   **Multiplexing:** The 8085 multiplexes the lower 8 bits of the address (A0-A7) with the 8-bit data bus (D0-D7) on the same set of pins (AD0-AD7). In the first clock cycle (T1) of a machine cycle, these pins carry the address. In subsequent cycles (T2, T3), they carry the data. This multiplexing reduces the total number of pins required by the IC package. An external latch, controlled by the ALE signal, is used to demultiplex these lines by capturing the address during T1.

---

### 9. Alignment with Course Outcomes

*   **CO1 (Describe the architecture of 8085 microprocessor and 8085 Assembly language programming):** This topic directly addresses the architecture of the 8085 by detailing its pin functions and the role of each signal, which is foundational to understanding its operation and assembly language programming. (Knowledge Level: K2)
*   **CO2 (Understand the need for interrupts, Subroutines, timing diagram of 8085 microprocessor and interfacing):** The discussion on interrupt pins (INTR, RSTs, TRAP) and control signals (READY, HOLD, $\overline{\text{ACK}}$) directly relates to understanding interrupts and the fundamental interfacing requirements of the 8085. Timing diagrams are implicitly understood by knowing the function of signals like ALE, $\overline{\text{RD}}$, $\overline{\text{WR}}$, and READY in different bus cycles. (Knowledge Level: K2)
*   **CO3 (Understand and gain the basic idea about the embedded system and selection of processors):** While this topic focuses on the 8085, it provides a concrete example of a foundational processor used in early embedded systems. Understanding its pin functions helps appreciate the hardware requirements and interfaces necessary for embedded system design. (Knowledge Level: K2)
*   **CO4 (Able to gain working level knowledge about a Arduino Uno based system architecture and Arduino IDE):** Although this topic is about the 8085, it establishes the fundamental concepts of microprocessors (address bus, data bus, control signals, interrupts) that are also present in modern microcontrollers like those on Arduino boards. This knowledge serves as a stepping stone for understanding more complex architectures. (Knowledge Level: K2)
*   **CO5 (Write Programs using Embedded C and implement an application using Arduino UNO board):** Understanding the 8085 pin functions provides a basis for comprehending how microprocessors/microcontrollers interact with the external world, which is essential for writing Embedded C programs for applications. (Knowledge Level: K3 - indirectly, by building foundational knowledge)
*   **CO6 (Understand the RISC Architecture and Apply the knowledge for solving the real life problems using ARM - Arduino DUE board based embedded system):** Similar to CO4 and CO5, this topic builds the foundational knowledge of microprocessor operation and interfacing. Understanding how signals like address, data, and control lines work in the 8085 is transferable to understanding the principles behind RISC architectures and ARM processors, albeit with different implementations and instruction sets. (Knowledge Level: K3 - indirectly, by building foundational knowledge)

---
**Textbook References Used:**

*   **Fundamentals of Microprocessor and Micro controllers by Ram, B:** Referenced for general architecture, multiplexing, and control signals.
*   **Microprocessor, Architecture, Programming and Applications by Ramesh Gaonkar:** Heavily referenced for clock signals, interrupt handling, and general pin functions.
*   **Microprocessor Theory and Application by Rafiquzzaman:** Referenced for the overall understanding of microprocessor functionality and interfacing principles.
