---
title: "The Microcontroller 8051: Features of 8051 microcontroller, Block 
diagram of 8051- program status word (PSW), accumulator, program 
counter. Memory organization – RAM & ROM, register banks and stack, 
Special Function Registers (SFRs), I/O port organization, Interrupts."
subject: "MICROCONTROLLERS"
module: "Module 1: Microcontroller Architecture – General internal architecture, Address 
bus, Data bus, control bus."
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe599"
status: "completed"
scrapedAt: "2026-05-23T17:51:04.109Z"
---
# MICROCONTROLLERS - Module 1: Microcontroller Architecture

## Topic: The Microcontroller 8051

This module delves into the fundamental architecture of microcontrollers, focusing on the ubiquitous 8051 microcontroller. We will explore its general internal architecture, the crucial buses (address, data, control), its key features, internal components, memory organization, special function registers, I/O ports, and interrupt handling capabilities.

---

### 1. General Internal Architecture of Microcontrollers

Microcontrollers are essentially self-contained computer systems on a single chip. They integrate a CPU, memory (RAM and ROM/Flash), I/O peripherals, timers, and serial communication interfaces.

**Key Concepts:**

*   **CPU (Central Processing Unit):** The "brain" of the microcontroller, responsible for fetching, decoding, and executing instructions.
*   **Memory:**
    *   **RAM (Random Access Memory):** Volatile memory used for temporary data storage during program execution.
    *   **ROM/Flash Memory:** Non-volatile memory used to store the program instructions.
*   **I/O (Input/Output) Ports:** Pins on the microcontroller that allow it to communicate with external devices.
*   **Peripherals:** Built-in hardware modules that provide specialized functionalities like timers, counters, analog-to-digital converters (ADCs), digital-to-analog converters (DACs), serial communication interfaces (UART, SPI, I2C), etc.

---

### 2. Buses: The Communication Highways

Buses are pathways that connect different components within the microcontroller and allow them to exchange data and control signals.

**Key Concepts:**

*   **Address Bus:**
    *   **Function:** Carries memory addresses from the CPU to the memory or I/O devices. It determines *where* data is to be read from or written to.
    *   **Direction:** Unidirectional (CPU to memory/I/O).
    *   **Width:** Determines the maximum addressable memory space. An N-bit address bus can address 2^N memory locations.
    *   **Example:** If the CPU wants to read data from memory location `0x1000`, it places `0x1000` on the address bus.

*   **Data Bus:**
    *   **Function:** Carries data between the CPU and memory or I/O devices. It transmits the actual information being processed.
    *   **Direction:** Bidirectional (CPU <-> memory/I/O).
    *   **Width:** Determines the amount of data that can be transferred in a single operation. Wider data buses allow for faster data transfer.
    *   **Example:** If the CPU reads data from `0x1000` and the data at that location is `0x55`, `0x55` will be placed on the data bus and read by the CPU.

*   **Control Bus:**
    *   **Function:** Carries control signals that manage the operation of the system. These signals dictate the type of operation (read/write), timing, and synchronization.
    *   **Examples of Control Signals:**
        *   **Read/Write (R/W):** Indicates whether a read or write operation is being performed.
        *   **Memory Enable/Disable (MEM EN):** Enables or disables memory access.
        *   **Input/Output Enable (IO EN):** Enables or disables I/O device access.
        *   **Clock Signals:** Synchronize operations.
        *   **Interrupt Request (INT):** Signals an event that requires CPU attention.
        *   **Reset:** Initializes the microcontroller to a known state.
    *   **Direction:** Varies depending on the specific signal.

**Highlight:** The interplay between these three buses is crucial for the microcontroller's operation. The address bus specifies the location, the data bus carries the information, and the control bus manages the entire process.

---

### 3. The Microcontroller 8051: Features

The Intel 8051 is a popular 8-bit microcontroller known for its robust architecture and widespread use in embedded systems.

**Key Features (Referencing Mazidi & Mazidi, Ayala & Gadre):**

*   **8-bit Architecture:** Processes data in 8-bit chunks.
*   **128 bytes of RAM:** On-chip RAM for temporary data storage.
*   **4 KB of On-Chip Program Memory (ROM/EPROM/Flash):** On-chip memory for storing program code. Later variants (like the 8052) offered more.
*   **Four 8-bit I/O Ports (P0, P1, P2, P3):** These ports can be individually configured as input or output, providing 32 I/O pins.
*   **Two 16-bit Timer/Counters:** Can be used for timing events or counting external pulses.
*   **One Full-Duplex UART (Universal Asynchronous Receiver/Transmitter):** For serial communication with other devices.
*   **Six Interrupt Sources:** Allowing the microcontroller to respond to internal and external events.
*   **Bit-Addressable RAM:** Certain memory locations in the RAM can be individually manipulated as bits.
*   **Dual Data Pointers (DPTR):** Two 16-bit pointers used for accessing external memory or lookup tables.
*   **Boolean Processor:** Allows for bit-level operations on data.
*   **Low Power Consumption:** Designed for efficiency in embedded applications.

**Learning Outcome Alignment:** This section directly contributes to **CO1: Outline Architecture of Microcontroller (Knowledge Level: K2)** by listing and explaining the core features of a representative microcontroller.

---

### 4. Block Diagram of 8051 Microcontroller

Understanding the block diagram helps visualize the internal components and their interconnections.

**(Imagine a block diagram here with the following components connected by buses):**

*   **CPU Core:** Contains the Arithmetic Logic Unit (ALU), Accumulator, Program Status Word (PSW), Instruction Register, Instruction Decoder, and Control Unit.
*   **Memory:**
    *   **Internal RAM:** Contains Register Banks, Bit-Addressable RAM, and General-Purpose RAM.
    *   **Internal ROM/Flash:** Stores program code.
    *   **External Memory Interface:** Allows connection to external RAM and ROM.
*   **I/O Ports (P0, P1, P2, P3):** Interface with the outside world.
*   **Timers/Counters (Timer 0, Timer 1):** For timing and counting functions.
*   **Serial Port:** For UART communication.
*   **Interrupt Controller:** Manages interrupt requests.
*   **Oscillator Circuit:** Generates the clock signal for the microcontroller.
*   **Bus Control Logic:** Manages the address, data, and control buses.

**Key Components within the CPU Core:**

*   **Accumulator (ACC or A):**
    *   **Function:** An 8-bit register that is central to most arithmetic and logic operations. Results of ALU operations are typically stored in the accumulator.
    *   **Importance:** Acts as a primary operand and destination for many instructions.
    *   **Example:** In an `ADD A, R0` instruction, the content of register R0 is added to the content of the accumulator, and the result is stored back in the accumulator.

*   **Program Counter (PC):**
    *   **Function:** A 16-bit register that holds the address of the *next* instruction to be fetched from program memory.
    *   **Operation:** After fetching an instruction, the PC is automatically incremented to point to the next instruction.
    *   **Branching:** When a jump or call instruction is executed, the PC is loaded with a new address, altering the program flow.
    *   **Address Space:** Being 16-bit, it can address up to 64KB of program memory (2^16 = 65,536 bytes).

*   **Program Status Word (PSW):**
    *   **Function:** An 8-bit register containing status flags that reflect the outcome of arithmetic and logical operations, as well as control bits for register bank selection and interrupt enable.
    *   **Bits (from MSB to LSB):**
        *   **CY (Carry Flag):** Set if there is a carry out of bit 7 in an arithmetic operation, or a borrow into bit 7. Used in multi-byte arithmetic.
        *   **AC (Auxiliary Carry Flag):** Set if there is a carry out of bit 3 into bit 4. Used in BCD (Binary Coded Decimal) arithmetic.
        *   **F0 (User Flag 0):** A general-purpose flag for user-defined purposes.
        *   **RS1, RS0 (Register Bank Select Bits):** These two bits select one of the four register banks (00, 01, 10, 11).
        *   **OV (Overflow Flag):** Set if the result of a signed arithmetic operation is too large to fit in the destination register.
        *   **- (Reserved):** Not used.
        *   **P (Parity Flag):** Set if the accumulator contains an odd number of '1' bits, and cleared if it contains an even number of '1' bits.
    *   **Example:** After an `ADD A, R5` operation, the CY, AC, OV, and P flags in the PSW will be updated based on the result. The RS1 and RS0 bits can be changed to switch to a different set of registers.

**Learning Outcome Alignment:** This section helps with **CO1: Outline Architecture of Microcontroller (Knowledge Level: K2)** by detailing the internal structure and the function of key components like the accumulator, PC, and PSW.

---

### 5. Memory Organization of 8051

The 8051 has a unified address space for both program memory (ROM/Flash) and data memory (RAM).

**Key Concepts:**

*   **Program Memory (Code Memory):**
    *   **Type:** Typically ROM, EPROM, or Flash memory.
    *   **Size:** 4KB on-chip for the original 8051. Can be extended externally up to 64KB.
    *   **Purpose:** Stores the program instructions.
    *   **Access:** Fetched by the CPU for execution.

*   **Data Memory (Internal RAM):**
    *   **Size:** 128 bytes on-chip for the original 8051. (8052 has 256 bytes).
    *   **Organization:** Divided into three sections:
        1.  **Register Banks (0-3):** 32 bytes total, organized as 4 banks of 8 registers each (R0 to R7). Each bank provides a set of general-purpose registers.
        2.  **Bit-Addressable Area:** The upper 16 bytes of the first 32-byte block (addresses `20H` to `2FH`) can be individually addressed at the bit level. This provides 128 bit-addressable locations.
        3.  **General-Purpose RAM (Scratchpad RAM):** The remaining 80 bytes (addresses `30H` to `7FH`) are used for general-purpose data storage.

    *   **External Data Memory:** The 8051 can also access up to 64KB of external data memory using the `MOVX` instruction.

*   **Special Function Registers (SFRs):**
    *   **Location:** Occupy the address space from `80H` to `FFH` in the *internal* data memory address space.
    *   **Purpose:** Control and monitor the various hardware peripherals of the microcontroller (timers, serial port, I/O ports, interrupt controller, etc.).
    *   **Key SFRs (Examples):**
        *   `P0`, `P1`, `P2`, `P3`: Port registers for I/O operations.
        *   `SP`: Stack Pointer.
        *   `DPL`, `DPH`: Data Pointer Low and High bytes (forming DPTR).
        *   `B`: Accumulator B (used in some multiplication/division).
        *   `PSW`: Program Status Word.
        *   `ACC`: Accumulator.
        *   `TCON`: Timer Control register.
        *   `TMOD`: Timer Mode register.
        *   `SCON`: Serial Control register.
        *   `IE`: Interrupt Enable register.
        *   `IP`: Interrupt Priority register.
    *   **Bit-Addressability:** Some SFRs and their individual bits are also bit-addressable.

**Register Banks:**

*   **Selection:** Determined by the RS1 and RS0 bits in the PSW.
    *   `RS1=0`, `RS0=0`: Bank 0 (addresses `00H` to `07H`)
    *   `RS1=0`, `RS0=1`: Bank 1 (addresses `08H` to `0FH`)
    *   `RS1=1`, `RS0=0`: Bank 2 (addresses `10H` to `17H`)
    *   `RS1=1`, `RS0=1`: Bank 3 (addresses `18H` to `1FH`)
*   **Default:** Upon reset, the 8051 selects Register Bank 0.
*   **Context Switching:** Efficiently switching between tasks can be done by changing the register bank pointers.

**Stack:**

*   **Location:** Located within the internal RAM, starting from the address pointed to by the Stack Pointer (SP).
*   **Stack Pointer (SP):** An 8-bit register that points to the top of the stack. It is initialized to `07H` upon reset, so the stack starts from address `08H`.
*   **Operations:**
    *   **PUSH:** When data is pushed onto the stack, the SP is incremented first, and then the data is written to the memory location pointed to by SP.
    *   **POP:** When data is popped from the stack, it is read from the memory location pointed to by SP, and then the SP is decremented.
*   **Purpose:** Used for storing return addresses during subroutine calls, storing temporary data, and managing interrupt service routine execution.

**Example of Memory Access:**

*   `MOV A, 30H` : Moves the byte from internal RAM address `30H` to the Accumulator.
*   `MOV R0, 05H` : Moves the byte from internal RAM address `05H` (which is register R5 in the currently selected bank) to Register R0.
*   `MOVX A, @DPTR` : Moves a byte from *external* data memory (address specified by DPTR) to the Accumulator.
*   `MOV P1, A` : Moves the content of the Accumulator to Port 1 (an SFR).

**Learning Outcome Alignment:** This section is vital for **CO1: Outline Architecture of Microcontroller (Knowledge Level: K2)** as it explains the memory map and organization. It also provides foundational knowledge for **CO2: Develop Microcontroller programs (Knowledge Level: K5)**, as understanding memory is critical for efficient programming.

---

### 6. I/O Port Organization of 8051

The 8051 features four 8-bit I/O ports, providing a total of 32 I/O pins. These ports are versatile and can be configured for various functions.

**Key Concepts:**

*   **Port Structure:** Each port pin is connected to an internal latch and an output driver.
    *   **Latch:** Holds the data written to the port by the CPU.
    *   **Output Driver:** Drives the external pin.
    *   **Input Buffer:** Allows the CPU to read the state of the external pin.
*   **Bidirectional Nature:** Ports can be configured as either input or output.
    *   **Output Operation:** The CPU writes a value to the port's internal latch. This value is then driven onto the pin.
    *   **Input Operation:** The CPU writes `1`s to the port's latch. This effectively turns off the output driver for that pin, allowing the external signal to be read through the input buffer.
*   **Port Pins and Functions:**
    *   **Port 0 (P0):**
        *   **Function:** 8-bit I/O port.
        *   **Additional Function:** Multiplexed lower address bus (A0-A7) and data bus (D0-D7) when accessing external memory. It requires external pull-up resistors for general I/O operations.
    *   **Port 1 (P1):**
        *   **Function:** 8-bit I/O port.
        *   **Additional Function:** Dedicated I/O pins. Has internal pull-up resistors.
    *   **Port 2 (P2):**
        *   **Function:** 8-bit I/O port.
        *   **Additional Function:** Multiplexed higher address bus (A8-A15) when accessing external memory. Has internal pull-up resistors.
    *   **Port 3 (P3):**
        *   **Function:** 8-bit I/O port.
        *   **Additional Function:** Each pin is multiplexed with specific peripheral functions:
            *   `P3.0`: RXD (Serial Receive)
            *   `P3.1`: TXD (Serial Transmit)
            *   `P3.2`: INT0 (External Interrupt 0)
            *   `P3.3`: INT1 (External Interrupt 1)
            *   `P3.4`: T0 (Timer 0 external input)
            *   `P3.5`: T1 (Timer 1 external input)
            *   `P3.6`: WR (External Memory Write Strobe)
            *   `P3.7`: RD (External Memory Read Strobe)
*   **Important Note on Input:** To use a port pin as an input, you must write `1` to the corresponding bit in the port latch. This is because the output driver is a quasi-bidirectional structure; writing `1` effectively turns off the output driver, allowing an external signal to be read. Writing `0` forces the pin low.

**Example:**

*   **Configuring P1.0 as output and P2.1 as input:**
    *   `MOV P1, #00H` ; Sets P1.0 to low (assuming it's the only bit we're concerned with driving).
    *   `MOV P2, #02H` ; Writes 1 to P2.1 to configure it as input. Other bits of P2 are also set to 1.
*   **Reading from P2.1:**
    *   `MOV A, P2` ; Reads the state of Port 2 into the Accumulator.
    *   `ANL A, #02H` ; Isolates the bit at P2.1. If it's high, the result is 02H; if low, it's 00H.

**Learning Outcome Alignment:** This section is crucial for **CO1: Outline Architecture of Microcontroller (Knowledge Level: K2)** and directly supports **CO3: Design various interfaces to Microcontroller (Knowledge Level: K5)** by explaining how to utilize the I/O ports for connecting external devices.

---

### 7. Interrupts in 8051

Interrupts are mechanisms that allow the microcontroller to temporarily suspend its current task to handle a higher-priority event.

**Key Concepts:**

*   **Interrupt Sources:** The 8051 has multiple interrupt sources:
    *   **External Interrupts (INT0, INT1):** Triggered by external hardware signals on pins P3.2 and P3.3.
    *   **Timer Interrupts (TF0, TF1):** Triggered when Timer 0 or Timer 1 overflows.
    *   **Serial Interrupts (RI, TI):** Triggered by the serial port (RI: Receive Interrupt, TI: Transmit Interrupt).
*   **Interrupt Vector Table:** Each interrupt source has a dedicated starting address in program memory where the CPU jumps to execute the Interrupt Service Routine (ISR).
    *   `0003H`: External Interrupt 0 (INT0)
    *   `000BH`: Timer 0 Interrupt (TF0)
    *   `0013H`: External Interrupt 1 (INT1)
    *   `001BH`: Timer 1 Interrupt (TF1)
    *   `0023H`: Serial Port Interrupt (RI/TI)
*   **Interrupt Handling Process:**
    1.  **Interrupt Request:** An event occurs, generating an interrupt request signal.
    2.  **Interrupt Enable:** The interrupt must be enabled by setting the corresponding bit in the Interrupt Enable (IE) register.
    3.  **CPU Checks:** After executing each instruction, the CPU checks for any pending interrupt requests.
    4.  **Context Switching:** If an enabled interrupt request is detected and the interrupt priority scheme allows, the CPU:
        *   Completes the current instruction.
        *   Saves the current Program Counter (PC) onto the stack.
        *   Disables further interrupts (unless re-enabled within the ISR).
        *   Jumps to the ISR address associated with the interrupt source.
    5.  **ISR Execution:** The Interrupt Service Routine is executed. This routine typically handles the event and clears the interrupt flag.
    6.  **Return:** Upon completion of the ISR, a `RETI` (Return from Interrupt) instruction is executed. This instruction pops the saved PC from the stack back into the PC, and re-enables interrupts (if they were globally enabled).
*   **Interrupt Control Registers:**
    *   **IE (Interrupt Enable) Register:**
        *   `EA`: Global Interrupt Enable (when set, allows any enabled interrupt to be serviced).
        *   `ET2`, `ES`, `ET1`, `EX1`, `ET0`, `EX0`: Individual interrupt enable bits for timers, serial port, and external interrupts.
    *   **IP (Interrupt Priority) Register:**
        *   Allows setting priorities for different interrupt sources (High or Low priority). If multiple interrupts are pending, the one with the higher priority is serviced first.

**Example:**

*   **Enabling Timer 0 Interrupt:**
    *   `MOV TMOD, #01H` ; Configure Timer 0 in Mode 1 (16-bit timer).
    *   `SETB TR0` ; Start Timer 0.
    *   `MOV IE, #82H` ; Enable Timer 0 interrupt (ET0=1) and Global Interrupt Enable (EA=1).
    *   The ISR for Timer 0 would be located at address `000BH`.

**Learning Outcome Alignment:** This section is crucial for **CO1: Outline Architecture of Microcontroller (Knowledge Level: K2)** and is fundamental for **CO2: Develop Microcontroller programs (Knowledge Level: K5)** and **CO4: Design and implement an Embedded System (Knowledge Level: K6)**, as interrupt-driven systems are common in embedded applications.

---

### Practice Questions and Exercises

**Part A: Multiple Choice Questions (MCQ)**

1.  Which register in the 8051 holds the address of the next instruction to be fetched?
    a) Accumulator (ACC)
    b) Program Status Word (PSW)
    c) Stack Pointer (SP)
    d) Program Counter (PC)

2.  The 8051 microcontroller has how many general-purpose I/O ports?
    a) 2
    b) 3
    c) 4
    d) 8

3.  Which SFR is used to select the register bank in the 8051?
    a) ACC
    b) SP
    c) PSW
    d) IE

4.  To configure a port pin as an input in the 8051, you must write:
    a) 0 to the corresponding bit in the port latch.
    b) 1 to the corresponding bit in the port latch.
    c) 0 to the corresponding bit in the IE register.
    d) 1 to the corresponding bit in the IP register.

5.  The address for the External Interrupt 0 ISR in the 8051 is:
    a) 0000H
    b) 0003H
    c) 000BH
    d) 0013H

**Part B: Short Answer Questions**

1.  Briefly explain the function of the Address Bus, Data Bus, and Control Bus.
2.  What is the main purpose of the Accumulator in the 8051?
3.  Describe the three main sections of the 8051's internal RAM.
4.  List at least three special function registers (SFRs) in the 8051 and their general purpose.
5.  Explain the role of the `RETI` instruction.

**Part C: Programming Exercises**

1.  Write an assembly code snippet to toggle the state of Port 1 pin P1.0 continuously. (Hint: Use a loop and `MOV P1, #0FFH` to make it an output).
2.  Write an assembly code snippet to read the state of Port 2 pin P2.3 and if it is HIGH, set Port 1 pin P1.7 to HIGH, otherwise set P1.7 to LOW.
3.  Describe how you would enable the Timer 1 interrupt in the 8051. Which registers would you use and what bits would you set?

---

### Answers to Practice Questions

**Part A: Multiple Choice Questions (MCQ)**

1.  **d) Program Counter (PC)**
2.  **c) 4**
3.  **c) PSW** (Specifically, the RS1 and RS0 bits within the PSW)
4.  **b) 1 to the corresponding bit in the port latch.**
5.  **b) 0003H**

**Part B: Short Answer Questions**

1.  **Address Bus:** Carries memory addresses to select locations. **Data Bus:** Carries data between CPU and memory/I/O. **Control Bus:** Carries control signals (read/write, clock, etc.) to manage operations.
2.  The Accumulator (ACC) is the primary register for most arithmetic and logical operations. It serves as an operand and a destination for the results of these operations.
3.  The 8051's internal RAM consists of:
    *   **Register Banks (0-3):** Four banks, each with 8 registers (R0-R7).
    *   **Bit-Addressable Area:** 16 bytes (addresses `20H` to `2FH`) that can be accessed bit by bit.
    *   **General-Purpose RAM:** 80 bytes (addresses `30H` to `7FH`) for general data storage.
4.  Examples of SFRs and their purposes:
    *   `P0`, `P1`, `P2`, `P3`: I/O Port control.
    *   `SP`: Stack Pointer for stack management.
    *   `PSW`: Stores status flags and register bank selection.
    *   `IE`: Enables or disables individual interrupts and the global interrupt.
    *   `TMOD`: Configures Timer/Counter modes.
5.  The `RETI` (Return from Interrupt) instruction is executed at the end of an Interrupt Service Routine (ISR). It pops the saved Program Counter value from the stack back into the PC, allowing the CPU to resume execution from the point where it was interrupted. It also typically re-enables interrupts if they were globally disabled upon entry to the ISR.

**Part C: Programming Exercises**

1.  **Assembly Code Snippet to toggle P1.0:**

    ```assembly
    ORG 0000H      ; Start of program memory
    MOV P1, #0FFH  ; Configure Port 1 as output by writing 1s to the latch

    LOOP:
        CPL P1.0     ; Complement (toggle) P1.0
        ACALL DELAY  ; Call a delay subroutine
        SJMP LOOP    ; Jump back to LOOP

    DELAY:
        ; A simple delay loop (you can adjust the counts for different delays)
        MOV R5, #100
    D1: MOV R6, #250
    D2: DJNZ R6, D2
        DJNZ R5, D1
        RET

    END            ; End of assembly code
    ```

2.  **Assembly Code Snippet to read P2.3 and control P1.7:**

    ```assembly
    ORG 0000H      ; Start of program memory

    ; Configure P1 as output (all pins to output)
    MOV P1, #00H

    ; Configure P2 as input (all pins to input by writing 1s)
    MOV P2, #0FFH

    CHECK_PORT:
        MOV A, P2      ; Read the state of Port 2 into the Accumulator
        ANL A, #08H    ; Isolate the bit at P2.3 (00001000 in binary)
                       ; If P2.3 is HIGH, A will be 08H. If LOW, A will be 00H.

        JZ ELSE_BLOCK  ; If A is zero (P2.3 is LOW), jump to ELSE_BLOCK

    ; P2.3 is HIGH
    THEN_BLOCK:
        ORL P1, #80H   ; Set P1.7 HIGH (00000000 OR 10000000 = 10000000)
        SJMP CONTINUE

    ; P2.3 is LOW
    ELSE_BLOCK:
        CLR P1.7       ; Set P1.7 LOW
        ; OR: MOV A, P1 ; Read Port 1
        ;     ANL A, #7FH ; Clear P1.7 (AND with 01111111)
        ;     MOV P1, A

    CONTINUE:
        SJMP CHECK_PORT ; Loop to continuously check

    END            ; End of assembly code
    ```

3.  **Enabling Timer 1 Interrupt:**

    To enable the Timer 1 interrupt, you need to:
    *   Configure Timer 1 using the `TMOD` register. For example, to set Timer 1 to Mode 2 (8-bit auto-reload): `MOV TMOD, #02H`.
    *   Start Timer 1 by setting the `TR1` bit in the `TCON` register: `SETB TR1`.
    *   Enable the Timer 1 interrupt by setting the `ET1` bit in the `IE` register: `MOV IE, #10H` (sets ET1=1) or `ORL IE, #10H`.
    *   Enable all interrupts by setting the `EA` bit in the `IE` register: `ORL IE, #80H`. The combined instruction would be `MOV IE, #90H` (for EA=1, ET1=1, others=0).
    *   The Interrupt Service Routine (ISR) for Timer 1 must be placed at program memory address `000BH`.

---

### Important Points to Remember

*   The 8051 has a Harvard architecture for program and data memory, but a unified address space.
*   Port 0 needs external pull-ups for general I/O.
*   To use any port pin as an input, write `1` to its corresponding latch bit.
*   The PC always points to the *next* instruction to be fetched.
*   The SP points to the *top* of the stack, and is incremented *before* a push and decremented *after* a pop.
*   `RETI` is crucial for returning from interrupts.
*   `MOV` is used for internal RAM and SFR access, while `MOVX` is used for external memory access.
*   Understanding SFRs is key to controlling the 8051's peripherals.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### Textbooks and References Utilized

*   **The 8051 Microcontroller and Embedded Systems Using Assembly and C** by Muhammad Ali Mazidi, Janice Gillispie Mazidi, Rolin D. McKinlay (Prentice Hall -Inc, Second, 2007) - *Core concepts of architecture, features, SFRs, memory organization, and interrupts are drawn from this text.*
*   **The 8051 Microcontroller Architecture, Programming and Applications** by Kenneth J Ayala, Dhananjay V Gadre (Cengage Learning, 2010) - *Complements Mazidi's text, providing detailed explanations of I/O ports, interrupts, and memory access.*
*   **8051 Hardware Description Datasheet by Intel Corporation (1992)** - *Provides definitive information on pinouts, electrical characteristics, and specific hardware details, including port behavior.*
*   **Microprocessors and Microcontrollers** by Lyla B. Das (Pearson Education, 2011) - *Offers broader context and explanations of microcontroller principles, which are applied to the 8051.*

---

This comprehensive study guide covers the foundational aspects of the 8051 microcontroller's architecture, equipping you with the knowledge required for Module 1 and setting the stage for further programming and design tasks.