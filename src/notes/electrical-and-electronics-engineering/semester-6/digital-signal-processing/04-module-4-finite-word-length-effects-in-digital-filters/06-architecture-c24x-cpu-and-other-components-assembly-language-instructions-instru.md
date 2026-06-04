---
title: "Architecture, C24x CPU and other components; Assembly language Instructions, Instruction Set summary, simple programs."
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 4: Finite Word Length effects in Digital Filters:"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3666f"
status: "completed"
scrapedAt: "2026-05-23T16:26:58.725Z"
---
# Module 4: Finite Word Length Effects in Digital Filters - Architecture, C24x CPU and Assembly Language

This module delves into the practical aspects of implementing digital filters on real-time processors, specifically focusing on the Texas Instruments TMS320C24x DSP controller. We will explore its architecture, assembly language, and how finite word length effects, a critical aspect of digital signal processing, manifest in practical implementations.

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **Understand the architecture of the TMS320C24x DSP controller** and its key components relevant to DSP operations.
*   **Explain the purpose and functionality of various peripherals** integrated within the C24x family.
*   **Become familiar with the C24x assembly language instruction set**, including data movement, arithmetic, logical, and control instructions.
*   **Write simple assembly programs** for basic DSP operations on the C24x.
*   **Analyze the impact of finite word length effects** (quantization, overflow, rounding) on the performance of digital filters when implemented on the C24x.
*   **Relate the hardware architecture and assembly language capabilities** to the efficient implementation of digital filters.

## Course Outcomes Alignment

This module directly supports the following course outcomes:

*   **CO1 (K2): Analyse discrete-time systems using DFT.** While not directly about DFT, understanding the C24x architecture and its assembly language provides the foundation for efficient DFT computation on a DSP.
*   **CO2 (K3): Realise IIR and FIR filters.** This module is foundational for realising filters by providing the tools (hardware and software) to implement the filter equations.
*   **CO3 (K3): Design of IIR and FIR filters.** Knowledge of hardware limitations and implementation techniques informs filter design choices.
*   **CO4 (K3): Analyse effect of word length in digital filters.** This is the core focus of the module, examining how finite precision affects filter performance.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## Textbooks and Reference Material Integration

This module draws upon the concepts presented in the following texts:

*   **Proakis & Manolakis, "Digital Signal Processing: Principles, Algorithm & Application" (4th Ed.):** Provides the theoretical background on digital filters, finite word length effects, and general DSP principles.
*   **Oppenheim & Schafer, "Discrete-Time Signal Processing" (2nd Ed.):** Offers in-depth analysis of discrete-time systems, filter realization, and the mathematical underpinnings of finite word length effects.
*   **Ifeachor & Jervis, "Digital Signal processing-A Practical Approach" (2nd Ed.):** Focuses on practical implementation aspects, DSP architectures, and programming techniques, making it highly relevant for this module.
*   **Salivahanan, Vallavaraj, & Gnapriya, "Digital Signal Processing" (2nd Ed.):** Provides a balanced coverage of theory and application, including introductory material on DSP architectures.

---

## 1. Architecture of the TMS320C24x DSP Controller

The TMS320C24x (often referred to as C240x) family of DSP controllers from Texas Instruments is a popular choice for real-time control and signal processing applications. They are Harvard architecture devices, meaning they have separate memory spaces and buses for program instructions and data, allowing for simultaneous fetching of instructions and data. This enhances execution speed.

### 1.1 Key Architectural Features

*   **Harvard Architecture:**
    *   **Program Memory:** Stores instructions.
    *   **Data Memory:** Stores data operands and filter coefficients.
    *   Separate buses allow instruction fetch and data access to occur concurrently. This is crucial for high-throughput DSP operations.

*   **Central Processing Unit (CPU):** The core of the C24x, responsible for executing instructions.

*   **On-Chip Peripherals:** Integrated hardware blocks that provide specialized functionalities, reducing the need for external components.

*   **On-Chip Memory:**
    *   **Program ROM/Flash:** For storing the DSP program.
    *   **Data RAM:** For storing variables, filter states, and intermediate results.

### 1.2 C24x CPU Core

The C24x CPU core is designed for efficient execution of DSP algorithms.

*   **Instruction Set Architecture (ISA):** A highly optimized set of instructions tailored for DSP tasks like multiply-accumulate (MAC) operations.

*   **Arithmetic Logic Unit (ALU):** Performs arithmetic and logical operations on data.

*   **Multiplier:** A high-speed hardware multiplier that performs multiplication in a single clock cycle (or a few cycles depending on the specific C24x variant). This is fundamental for filter implementations where multiplication is a dominant operation.

*   **Accumulator (ACC):** A register that holds the result of multiplication and subsequent additions in MAC operations. The accumulator is typically wider than the data word to prevent overflow during intermediate calculations.

*   **Address Generation Unit (AGU):** Responsible for calculating memory addresses, including support for circular buffering, which is essential for FIR and IIR filter implementations (e.g., for delay lines).

*   **Register File:** A set of general-purpose registers for fast data access.

### 1.3 Key Components and Peripherals

The C24x family integrates a rich set of peripherals essential for real-time signal processing and control applications.

*   **On-Chip Memory:**
    *   **Program Memory (e.g., ROM, EPROM, Flash):** Stores the DSP code.
    *   **Data Memory (RAM):** Used for storing variables, coefficients, filter states, and temporary results. The size and organization of RAM are critical for filter implementation.

*   **Timers:** Used for generating precise time delays, sampling rates, and triggering events. Crucial for real-time signal acquisition and processing.

*   **Serial Ports (e.g., SCI, SPI):** For communication with external devices like ADCs, DACs, other processors, or sensors. Essential for inputting and outputting signal data.

*   **Analog-to-Digital Converters (ADCs):** Convert analog input signals (e.g., from microphones, sensors) into digital data that the DSP can process.

*   **Digital-to-Analog Converters (DACs):** Convert digital data from the DSP back into analog signals (e.g., for driving speakers, actuators).

*   **General Purpose Input/Output (GPIO) Pins:** Flexible pins that can be configured as inputs or outputs for interacting with external hardware.

*   **Watchdog Timer:** A safety mechanism that resets the processor if the program execution gets stuck.

*   **Event Manager (EVA/EVB):** Dedicated modules for pulse-width modulation (PWM), capture, and timing functions, making the C24x ideal for motor control applications.

**Important Point to Remember:** The C24x architecture is optimized for the repetitive, computationally intensive tasks common in DSP, such as filtering and FFTs, largely due to its Harvard architecture, fast multiplier, and MAC capabilities.

---

## 2. C24x Assembly Language Instructions

C24x assembly language provides direct control over the DSP's hardware resources. Understanding its instruction set is crucial for efficient implementation of digital filters, especially when optimizing for speed and memory usage.

### 2.1 Instruction Set Overview

The C24x instruction set is characterized by its efficiency for DSP operations. Key categories include:

*   **Data Transfer Instructions:** Moving data between registers, memory, and peripherals.
*   **Arithmetic Instructions:** Performing addition, subtraction, multiplication, and related operations.
*   **Logical Instructions:** Performing bitwise logical operations.
*   **Control Flow Instructions:** Branching, looping, and subroutoutines.
*   **Multiply-Accumulate (MAC) Instructions:** The cornerstone of DSP, performing multiplication and accumulation in a single instruction.

### 2.2 Key Instruction Categories and Examples

#### 2.2.1 Data Transfer Instructions

These instructions move data between registers, memory locations, and I/O ports.

*   **`LD` (Load):** Loads data from memory into a register.
    *   `LD R0, <address>`: Load content of memory address into register R0.
    *   `LD R1, *AR0+`: Load content of memory address pointed to by AR0 (auto-increment) into register R1.

*   **`ST` (Store):** Stores data from a register into a memory location.
    *   `ST R0, <address>`: Store content of register R0 into memory address.
    *   `ST R1, *AR1-`: Store content of register R1 into memory address pointed to by AR1 (auto-decrement).

*   **`MV` (Move):** Moves data between registers.
    *   `MV R0, R1`: Move content of register R1 to register R0.

*   **`LDP` (Load Parallel):** A special instruction that can load data into a register from memory in parallel with other operations, maximizing throughput.

#### 2.2.2 Arithmetic Instructions

These instructions perform mathematical operations.

*   **`ADD` (Add):** Adds two operands.
    *   `ADD R0, R1, R2`: R0 = R1 + R2.

*   **`SUB` (Subtract):** Subtracts one operand from another.
    *   `SUB R0, R1, R2`: R0 = R1 - R2.

*   **`MPY` (Multiply):** Multiplies two operands. The result is typically placed in the accumulator.
    *   `MPY R1, R2`: ACC = R1 * R2. (Assuming R1 and R2 hold 16-bit values, ACC will be 32-bit).

*   **`MPYU` (Multiply Unsigned):** Multiplies two unsigned operands.

*   **`ADDCT` (Add with Carry):** Adds operands with carry-in.

*   **`SUBCT` (Subtract with Carry):** Subtracts operands with borrow-in.

*   **`DEC` (Decrement):** Decrements a register by 1.
    *   `DEC R0`: R0 = R0 - 1.

*   **`INC` (Increment):** Increments a register by 1.
    *   `INC R0`: R0 = R0 + 1.

#### 2.2.3 Multiply-Accumulate (MAC) Instructions

These are critical for DSP algorithms like filtering. They perform `(A * B) + C` in a single instruction.

*   **`MAC` (Multiply-Accumulate):**
    *   `MAC R1, R2, R3`: ACC = (R1 * R2) + R3. The product of R1 and R2 is added to the current value of the accumulator (R3 in this case, though often the accumulator is implicit or a dedicated register). The C24x often has dedicated accumulator registers (e.g., ACC, ACCH, ACCM) for handling the 32-bit or wider intermediate results.

*   **`MACD` (Multiply-Accumulate Dual):** Performs two MAC operations in parallel.

*   **`SUBR` (Subtract from Register):** Subtracts the product of two registers from another register.

#### 2.2.4 Logical Instructions

These perform bitwise operations.

*   **`AND` (Bitwise AND):**
    *   `AND R0, R1, R2`: R0 = R1 & R2.

*   **`OR` (Bitwise OR):**
    *   `OR R0, R1, R2`: R0 = R1 | R2.

*   **`XOR` (Bitwise XOR):**
    *   `XOR R0, R1, R2`: R0 = R1 ^ R2.

*   **`NOT` (Bitwise NOT):**
    *   `NOT R0, R1`: R0 = ~R1.

#### 2.2.5 Control Flow Instructions

These alter the program execution path.

*   **`B` (Branch):** Unconditional branch to a label.
    *   `B label_name`

*   **`BC` (Branch on Condition):** Conditional branch based on status flags (e.g., zero, negative, carry).
    *   `BC Z, label_name`: Branch if Zero flag is set.
    *   `BNC NZ, label_name`: Branch if Not Zero flag is set.

*   **`CALL` (Call Subroutine):** Jumps to a subroutine and pushes the return address onto the call stack.
    *   `CALL subroutine_name`

*   **`RET` (Return):** Returns from a subroutine.

*   **`RETI` (Return from Interrupt):** Returns from an interrupt service routine.

*   **`LOOP` (Loop):** Decrements a counter register and branches if the counter is not zero.
    *   `LOOP counter_reg, loop_label`

#### 2.2.6 Address Register Operations

The C24x uses Address Registers (AR0-AR7) to manage memory addresses, particularly for indirect addressing and circular buffering.

*   **`AR` (Assign Address Register):** Assigns a value to an address register.
    *   `AR0, #address_value`

*   **`LC` (Load Counter):** Loads the loop counter register (LC).
    *   `LC #loop_count`

*   **`ADDB` (Add to Address Register):** Adds a value to an address register.
    *   `ADDB AR0, #offset`

*   **`SUBB` (Subtract from Address Register):** Subtracts a value from an address register.
    *   `SUBB AR0, #offset`

**Important Point to Remember:** The MAC instruction is the most critical for DSP performance. Efficiently using it, along with appropriate data transfers and address management (especially circular buffering), is key to writing optimized C24x assembly code.

---

## 3. Instruction Set Summary for C24x (Simplified)

This is a simplified summary. Refer to the specific C24x Technical Reference Manual for a complete and detailed instruction set.

| Instruction Type      | Instructions                                    | Description                                                                                                                                  |
| :-------------------- | :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| **Data Transfer**     | `LD`, `ST`, `MV`, `LDP`, `MVPD`                 | Load/Store from/to memory, Move between registers, Load Parallel data.                                                                      |
| **Arithmetic**        | `ADD`, `SUB`, `MPY`, `MPYU`, `ADDCT`, `SUBCT`, `DEC`, `INC`, `ABS`, `NEG` | Add, Subtract, Multiply (signed/unsigned), Add/Subtract with Carry, Decrement, Increment, Absolute value, Negate.                            |
| **Multiply-Accumulate** | `MAC`, `MACD`, `MACSU`, `SUBC`                  | Multiply and Accumulate (various operand types and configurations for dual MAC operations).                                                    |
| **Logical**           | `AND`, `OR`, `XOR`, `NOT`, `CLR`                | Bitwise AND, OR, XOR, NOT, Clear register.                                                                                                 |
| **Control Flow**      | `B`, `BC`, `BAN`, `CALL`, `RET`, `RETI`, `LOOP` | Branch (unconditional/conditional), Branch Always, Call Subroutine, Return, Return from Interrupt, Loop counter and branch.                  |
| **Bit Manipulation**  | `SETC`, `CLRC`, `TEST`                          | Set/Clear condition flags, Test bits.                                                                                                        |
| **Address Register**  | `AR`, `LC`, `LT`, `ADDB`, `SUBB`                | Load Address Register, Load Loop Counter, Load Table Pointer, Add/Subtract to Address Register.                                              |
| **Status Register**   | `MVC`, `MVCM`                                   | Move to/from Control Register (e.g., status register).                                                                                       |

**Key Registers:**

*   **ACC, ACCM, ACCH:** Accumulators for MAC operations.
*   **AR0-AR7:** Address registers for indirect addressing and circular buffering.
*   **BK:** Block size register for circular buffering.
*   **LC:** Loop counter register.
*   **SP:** Stack pointer.
*   **ST0, ST1:** Status registers.

---

## 4. Simple Assembly Programs for C24x

Let's look at a few basic programs to illustrate C24x assembly.

### Program 1: Data Transfer and Addition

**Objective:** Load two numbers from memory, add them, and store the result back in memory.

**Assumptions:**
*   Data segment starts at address `0x1000`.
*   Numbers to be added are at `0x1000` and `0x1001`.
*   Result to be stored at `0x1002`.

```assembly
; Program to add two numbers from memory

      .sect "prog"       ; Section for program code

      .global _start      ; Entry point of the program

_start:
      ; Initialize memory pointers if needed (assuming direct addressing for simplicity here)
      ; For general use, use address registers:
      ; AR0 = 0x1000     (This is a pseudo-instruction, actual load is AR0, #0x1000)
      ; AR1 = 0x1001     (This is a pseudo-instruction, actual load is AR1, #0x1001)

      ; Load the first number from memory address 0x1000 into register R0
      LD    R0, 0x1000

      ; Load the second number from memory address 0x1001 into register R1
      LD    R1, 0x1001

      ; Add R0 and R1, store the result in R0
      ADD   R0, R0, R1

      ; Store the result (in R0) into memory address 0x1002
      ST    R0, 0x1002

      ; Infinite loop to keep the program running (or halt)
halt:
      B     halt

      .end
```

**Explanation:**
*   `.sect "prog"`: Defines a code section.
*   `.global _start`: Declares `_start` as a global symbol (entry point).
*   `LD R0, 0x1000`: Loads the 16-bit value at memory location `0x1000` into register `R0`.
*   `LD R1, 0x1001`: Loads the 16-bit value at memory location `0x1001` into register `R1`.
*   `ADD R0, R0, R1`: Adds the contents of `R1` to `R0` and stores the result in `R0`. (Assuming 16-bit registers here for simplicity, the accumulator will handle the potential carry).
*   `ST R0, 0x1002`: Stores the result from `R0` into memory location `0x1002`.
*   `B halt`: An unconditional branch to the `halt` label, creating an infinite loop.

### Program 2: Simple FIR Filter (Single Tap)

**Objective:** Implement a single-tap FIR filter: `y(n) = h * x(n)`, where `h` is a coefficient.

**Assumptions:**
*   Coefficient `h` is at memory address `0x2000`.
*   Input sample `x(n)` is at memory address `0x3000`.
*   Output sample `y(n)` will be stored at memory address `0x3001`.

```assembly
; Program for a single-tap FIR filter

      .sect "prog"
      .global _start

_start:
      ; Load the coefficient 'h' from memory address 0x2000 into R1
      LD    R1, 0x2000

      ; Load the input sample 'x(n)' from memory address 0x3000 into R0
      LD    R0, 0x3000

      ; Multiply R0 (input sample) by R1 (coefficient)
      ; The result will be placed in the accumulator (e.g., ACC)
      MPY   R0, R1

      ; Store the result from the accumulator into memory address 0x3001
      ; Assuming ACC can be directly stored or needs a transfer to another register first.
      ; In C24x, this might be `ST ACC, 0x3001` or similar, depending on accumulator details.
      ; For demonstration, assume ACC content can be stored directly.
      ST    ACC, 0x3001

      ; Infinite loop
halt:
      B     halt

      .end
```

**Explanation:**
*   `LD R1, 0x2000`: Loads the filter coefficient into `R1`.
*   `LD R0, 0x3000`: Loads the current input sample `x(n)` into `R0`.
*   `MPY R0, R1`: Performs the multiplication `R0 * R1`. The 32-bit product is typically stored in the accumulator registers (e.g., `ACCH`, `ACCM`, `ACC` depending on specific C24x and operand width).
*   `ST ACC, 0x3001`: Stores the accumulator's content (the filtered output `y(n)`) into the output memory location.

### Program 3: Simple FIR Filter (Two Taps) with Address Registers

**Objective:** Implement a two-tap FIR filter: `y(n) = h0 * x(n) + h1 * x(n-1)`.

**Assumptions:**
*   Coefficients `h0` and `h1` are at `0x2000` and `0x2001` respectively.
*   Input samples `x(n)` and `x(n-1)` are stored in a circular buffer starting at `0x3000` of size 2.
*   Output `y(n)` to be stored at `0x3002`.

```assembly
; Program for a two-tap FIR filter with circular buffer

      .sect "prog"
      .global _start

_start:
      ; Initialize Address Registers for coefficients and input samples

      ; Load h0 into R1
      LD    R1, 0x2000

      ; Load h1 into R2
      LD    R2, 0x2001

      ; Set up AR0 for circular buffer of input samples
      ; Load the starting address of the buffer (0x3000) into AR0
      AR0, #0x3000

      ; Set the block size for circular buffering (2 elements)
      BK    #2

      ; Load the current input sample x(n) from memory pointed by AR0 (auto-increment) into R3
      ; AR0 is incremented, and if it goes past the buffer end, it wraps around due to BK setting.
      LD    R3, *AR0+

      ; Load the previous input sample x(n-1) from memory pointed by AR0 (auto-increment) into R4
      LD    R4, *AR0+

      ; Perform the MAC operations
      ; First term: h0 * x(n)
      MPY   R3, R1      ; ACC = R3 * R1  (x(n) * h0)

      ; Second term: h1 * x(n-1)
      ; The result of the first MAC needs to be in the accumulator.
      ; The next MAC operation will add its product to the current accumulator value.
      MAC   R4, R2, ACC ; ACC = (R4 * R2) + ACC (x(n-1) * h1) + previous result

      ; Store the final output y(n) from the accumulator into memory address 0x3002
      ST    ACC, 0x3002

      ; Infinite loop
halt:
      B     halt

      .end
```

**Explanation:**
*   `AR0, #0x3000`: Loads the base address `0x3000` into Address Register `AR0`.
*   `BK #2`: Sets the block size to 2. This enables circular buffering for address generation.
*   `LD R3, *AR0+`: Loads data from the address pointed to by `AR0` into `R3`. After the load, `AR0` is automatically incremented. Because `BK` is set to 2, if `AR0` increments past `0x3001`, it wraps around to `0x3000`. This is essential for accessing previous samples in a delay line.
*   `LD R4, *AR0+`: Loads the next sample into `R4`, again utilizing the auto-increment and circular buffer feature.
*   `MPY R3, R1`: Multiplies `x(n)` by `h0` and stores the 32-bit result in the accumulator.
*   `MAC R4, R2, ACC`: Multiplies `x(n-1)` by `h1` and *adds* the 32-bit product to the current accumulator content (which already holds `h0 * x(n)`). This effectively computes `h0 * x(n) + h1 * x(n-1)`.
*   `ST ACC, 0x3002`: Stores the final 32-bit result from the accumulator into the output memory location.

**Important Point to Remember:** Circular buffering is a key feature of DSP processors for implementing delay lines efficiently. It avoids explicit management of buffer wrap-around, simplifying code and improving performance.

---

## 5. Finite Word Length Effects in Digital Filters on C24x

This is a critical aspect of implementing digital filters on fixed-point DSP processors like the C24x. Digital systems have finite precision, meaning numbers are represented with a limited number of bits. This leads to several important effects:

### 5.1 Quantization Error

When analog signals are converted to digital (ADC) or when intermediate calculation results exceed the representable range, they must be rounded or truncated to fit within the available bits. This introduces quantization error.

*   **ADC Quantization:** The resolution of the ADC (e.g., 12-bit, 16-bit) directly impacts the quantization error of the input signal.
    *   *Example:* A 12-bit ADC can represent $2^{12} = 4096$ levels. If the input range is 0-5V, each step represents $5V / 4096 \approx 1.22$ mV. A signal value falling between these steps will be quantized to the nearest step.

*   **Coefficient Quantization:** Filter coefficients, often derived from floating-point calculations, must be represented with finite precision (e.g., 16-bit fixed-point). This can significantly alter the filter's frequency response.
    *   **Impact:** Changes in pole/zero locations, altered gain and phase responses, and potential instability in IIR filters.
    *   **Mitigation:** Using higher precision for coefficients, employing coefficient optimization techniques (e.g., Canonic Signed Digit - CSD), and choosing filter structures less sensitive to coefficient quantization (e.g., cascade of biquads).

*   **Internal Calculation Quantization (Rounding/Truncation):** Operations like multiplication and accumulation in DSPs can produce results that exceed the register width. The way these results are handled (rounded or truncated) introduces further quantization error.
    *   **Fixed-Point Representation:** C24x typically uses 16-bit fixed-point arithmetic. Numbers are often represented in two's complement format, with a certain number of integer and fractional bits.
        *   *Example:* A 16-bit signed integer can represent values from $-32768$ to $+32767$. For fractional representation, a common format is Q15 (1 sign bit, 15 fractional bits). A value like 0.5 would be represented as $0.5 \times 2^{15} = 16384$.
    *   **Rounding:** Typically rounds to the nearest representable value. This can be "round to nearest even" or "round towards zero" (truncation). Rounding generally introduces less bias than truncation but can still be a source of error.
    *   **Truncation:** Simply discards the least significant bits. This introduces a systematic bias.

### 5.2 Overflow

Overflow occurs when the result of an arithmetic operation (especially addition or accumulation) exceeds the maximum representable value in the target register.

*   **Impact:**
    *   **In Two's Complement:** If the result of an addition exceeds the maximum positive value, it can wrap around to a large negative value (and vice-versa). This drastically alters the signal's value and can lead to severe distortion and instability.
    *   *Example:* Adding two large positive numbers in a 16-bit signed register might result in a negative number due to overflow.

*   **Mitigation:**
    *   **Scaling:** Input signals and intermediate results must be scaled to ensure they stay within the dynamic range of the processor's registers.
    *   **Accumulator Width:** DSPs like the C24x use wider accumulators (e.g., 32-bit) for MAC operations to minimize the chance of overflow during the accumulation process. The final result is then scaled back down and possibly rounded/truncated before storing.
    *   **Saturation Arithmetic:** Some processors support saturation, where results exceeding the maximum value are clipped to the maximum value (and similarly for minimum values). This prevents wrap-around but can introduce clipping distortion.

### 5.3 Limit Cycles

Limit cycles are undesirable oscillations that can occur in digital filters, particularly IIR filters, due to quantization noise feedback. They are self-sustaining oscillations that occur even with no input signal, arising from the iterative nature of feedback and the discrete nature of arithmetic.

*   **Types of Limit Cycles:**
    *   **"Dead Band" Limit Cycle:** The filter output settles to a small, constant oscillation around zero. This happens when the quantization error is small enough not to push the state variables beyond a certain threshold, but large enough to maintain the oscillation.
    *   **"Coherent" Limit Cycle:** The output oscillates at specific frequencies, often related to the filter's poles.

*   **Factors Influencing Limit Cycles:**
    *   **Filter Structure:** Some structures are more prone to limit cycles than others.
    *   **Coefficient values:** Coefficients close to the edge of stability can exacerbate the problem.
    *   **Quantization Scheme:** Rounding versus truncation.
    *   **Word Length:** Shorter word lengths increase quantization errors, making limit cycles more likely.

*   **Mitigation:**
    *   **Coefficient Quantization and Rounding Schemes:** Carefully choosing coefficients and rounding methods.
    *   **Scaling:** Proper scaling of signals.
    *   **Modified Accumulators:** Using techniques like "slack scaling" or adding small random noise (dither) before quantization can break up dead band oscillations.
    *   **Using Floating-Point DSPs:** If limit cycles are a critical issue and cannot be managed with fixed-point, a floating-point DSP might be necessary.

### 5.4 Impact on Filter Performance

*   **Magnitude and Phase Distortion:** Quantization of coefficients and rounding/truncation of intermediate results will cause deviations from the designed frequency response.
*   **Reduced Dynamic Range:** The ability of the filter to process signals without overflow or significant quantization noise is limited by the word length.
*   **Instability:** In IIR filters, coefficient quantization can shift pole locations, potentially pushing them outside the unit circle, leading to instability.
*   **Increased Noise Floor:** Quantization noise adds to the signal, reducing the signal-to-noise ratio (SNR).

**From Proakis & Manolakis:** Chapter 7 ("Finite Word Length Effects in Digital Filters") provides a comprehensive theoretical treatment of these issues, including analysis of quantization error variance and the conditions for limit cycle oscillations.

**From Oppenheim & Schafer:** Chapter 6 ("Digital Filter Implementation") discusses the practicalities of filter realization and the impact of finite word lengths on transfer functions and system stability.

**From Ifeachor & Jervis:** Chapter 3 ("Digital Signal Processors") and Chapter 5 ("Finite Word Length Effects") offer practical insights into how these effects are managed on real DSP hardware and how they influence algorithm design and implementation.

**Important Point to Remember:** Finite word length effects are unavoidable in fixed-point DSP implementations. A thorough understanding of quantization, overflow, and limit cycles is essential for designing robust and accurate digital filters on processors like the C24x. Careful scaling, judicious choice of filter structures, and consideration of coefficient precision are key mitigation strategies.

---

## 6. Practice Questions and Answers

Here are some practice questions to test your understanding.

**Question 1:** What is the primary advantage of the Harvard architecture used in the TMS320C24x DSP controller?
    a) Simpler instruction decoding
    b) Simultaneous fetching of instructions and data
    c) Larger memory address space
    d) Reduced power consumption

**Answer 1:**
    b) Simultaneous fetching of instructions and data. This parallelism significantly speeds up instruction execution, which is crucial for real-time DSP.

**Question 2:** Which C24x instruction is most fundamental for efficient digital filter implementation and why?
    a) `ADD` - it's used in most calculations
    b) `MPY` - multiplication is key
    c) `MAC` - it combines multiplication and accumulation, the core of filter operations
    d) `LD` - data needs to be loaded

**Answer 2:**
    c) `MAC` (Multiply-Accumulate). Filter equations typically involve multiplying input samples by coefficients and summing these products. The `MAC` instruction performs this core operation in a single instruction, greatly improving performance and code density.

**Question 3:** Explain the concept of "circular buffering" in the context of the C24x and provide an example of where it would be beneficial.

**Answer 3:**
    Circular buffering is a technique where a block of memory is treated as if it were circular. When the address pointer reaches the end of the buffer, it automatically wraps around to the beginning. On the C24x, this is enabled by setting the `BK` (Block Size) register and using auto-increment/decrement addressing modes with the address registers (`ARn`).
    **Beneficial Example:** Implementing delay lines for FIR filters. To compute `y(n) = h0*x(n) + h1*x(n-1)`, you need to store the previous sample `x(n-1)`. A circular buffer of size 2 for `x(n)` and `x(n-1)` efficiently manages these samples. When a new sample `x(n)` arrives, it overwrites the oldest sample `x(n-1)`, and `x(n-1)` becomes the current `x(n)` for the next iteration, all managed by the address register and `BK` setting.

**Question 4:** A digital filter implemented on a fixed-point DSP using 16-bit arithmetic experiences a sudden large error in its output when processing a specific input value. What is the most likely cause of this error?
    a) Coefficient quantization
    b) Rounding error
    c) Overflow
    d) Limit cycle oscillation

**Answer 4:**
    c) Overflow. Sudden, large errors that drastically alter the signal value are typically indicative of overflow in fixed-point arithmetic, where a result exceeds the representable range and wraps around. Coefficient quantization and rounding errors usually cause gradual degradation of performance or biases, while limit cycles are more of a sustained oscillation issue.

**Question 5:** If a C24x DSP has 16-bit data registers and a 32-bit accumulator, and you multiply two 16-bit numbers, what is the purpose of the 32-bit accumulator in preventing finite word length effects?

**Answer 5:**
    The 32-bit accumulator is crucial for preventing **overflow** during the multiplication and accumulation process. When two 16-bit numbers are multiplied, the result can be up to 32 bits in length. The wider accumulator can hold this full product without overflow. If a 16-bit accumulator were used, the product would likely overflow, leading to a corrupted result. The accumulator then allows for subsequent additions or subtractions of other products, accumulating the final result before it's potentially scaled and stored back into a 16-bit register.

**Question 6 (Design/Analysis - K3):** You are designing a second-order IIR filter using a C24x DSP with 16-bit fixed-point arithmetic. You observe that the filter becomes unstable when using certain coefficient sets. What steps would you take to diagnose and potentially mitigate this instability?

**Answer 6:**
    1.  **Verify Coefficient Precision:** Ensure coefficients are quantized appropriately for 16-bit representation. High-precision floating-point coefficients might need careful conversion to fixed-point.
    2.  **Analyze Pole Locations:** Theoretically, determine the pole locations of the designed filter with quantized coefficients. Use software tools to plot poles and check if they remain within the unit circle.
    3.  **Test Different Filter Structures:** The direct form I or II structures are more sensitive to coefficient quantization than others like cascade or parallel forms. Experiment with different realization structures.
    4.  **Coefficient Optimization:** Explore techniques for quantizing coefficients to minimize sensitivity, such as using Canonic Signed Digit (CSD) representation or specific coefficient optimization algorithms.
    5.  **Scaling:** Ensure internal signal paths are scaled to prevent intermediate values from overflowing or accumulating excessive quantization noise that could push poles outside the unit circle.
    6.  **Increase Word Length (if possible):** If the C24x variant supports it, or if considering a different DSP, using more bits for coefficients and data can significantly improve stability.
    7.  **Test with a Range of Inputs:** Validate the filter's stability not just with ideal coefficients but with various sets of quantized coefficients and input signal levels.

---

This comprehensive study guide provides a solid foundation for understanding the C24x architecture, its assembly language, and the critical finite word length effects that influence the practical implementation of digital filters. Remember to consult the specific datasheets and technical reference manuals for the exact C24x variant you are working with for detailed information on instruction sets and peripheral configurations.