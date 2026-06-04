---
title: "Designing with 8051 : -"
subject: "EMBEDDED SYSTEMS"
module: "Module 2: Designing with 8051 : "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c242"
status: "completed"
scrapedAt: "2026-05-20T17:05:27.573Z"
---
# Embedded Systems: Designing with 8051 Microcontroller

---

## Module 2: Designing with 8051

### Topic: Designing with 8051

---

### 1. Introduction to the 8051 Microcontroller

**Learning Outcomes Covered:**
*   Understand the architecture and features of the 8051 microcontroller.
*   Explain the functionality of each major component of the 8051.

**Key Concepts & Definitions:**

*   **Microcontroller:** A complete computer on a single chip, integrating a CPU, memory (RAM and ROM), and I/O peripherals.
*   **8051 Microcontroller:** A popular 8-bit microcontroller developed by Intel. It is a CISC (Complex Instruction Set Computing) architecture.
*   **Key Features of 8051:**
    *   8-bit CPU
    *   4KB On-chip ROM (Program Memory)
    *   128 Bytes On-chip RAM (Data Memory)
    *   32 I/O Pins (grouped into 4 ports: P0, P1, P2, P3)
    *   Two 16-bit Timer/Counters
    *   One Full Duplex Serial Port
    *   Two External Interrupt Sources
    *   Four External Interrupt Sources (indirectly through I/O ports)
    *   16-bit Program Counter (PC)
    *   8-bit Accumulator (A)
    *   8-bit B register
    *   Special Function Registers (SFRs)
    *   Boolean processor

**Architecture of 8051:**

*(Diagram of 8051 Architecture - a textual representation can be challenging, but the key components and their interconnections should be described)*

```
+-----------------------------------------------------+
|                      8051 Core                      |
| +--------------+   +-------------+   +------------+  |
| |    CPU       |-->|   Program   |-->| Instruction|  |
| | (ALU, Regs)  |   |   Memory    |   |   Decoder  |  |
| +--------------+   |    (ROM)    |   +------------+  |
|         ^          +-------------+          |        |
|         |                  ^                v        |
|         |    +-------------+-------------+   |        |
|         |    |             Data Memory   |   |        |
|         +-->|              (RAM, SFRs)    |<--+--------+
|              +-----------------------------+            |
|                       ^       ^                         |
|                       |       |                         |
|  +--------------------+-------+-----------------------+  |
|  |      Interrupt Controller |    Timers/Counters    |  |
|  +--------------------+-------+-----------------------+  |
|                       ^                                 |
|                       |                                 |
|  +--------------------+--------------------------------+  |
|  |          Serial Port Interface          |            |
|  +--------------------+--------------------------------+  |
|                       ^                                 |
|                       |                                 |
|  +--------------------+--------------------------------+  |
|  |       I/O Ports (P0, P1, P2, P3)        |            |
|  +--------------------+--------------------------------+  |
+-----------------------------------------------------+
                  |
                  | (External Bus Interface for RAM, ROM, I/O)
                  V
           External Components
```

**Explanation of Major Components:**

*   **CPU (Central Processing Unit):** Executes instructions, performs arithmetic and logic operations.
    *   **ALU (Arithmetic Logic Unit):** Performs calculations.
    *   **Accumulator (A):** A primary register for arithmetic and data manipulation.
    *   **B Register:** Used in multiplication and division operations.
    *   **Program Status Word (PSW):** Contains status flags (Carry, Auxiliary Carry, Overflow, Parity, Register Bank Select).
    *   **Data Pointer (DPTR):** A 16-bit register used for accessing external memory.
*   **Memory:**
    *   **Program Memory (ROM):** Stores the program code. 8051 typically has 4KB on-chip. Can be expanded externally.
    *   **Data Memory (RAM):** Stores variables and temporary data. 128 bytes on-chip. Can be expanded externally.
        *   **Internal RAM:**
            *   **Register Banks (0-3):** 8 registers per bank (R0-R7).
            *   **Bit-Addressable Area:** 16 bytes where individual bits can be accessed.
            *   **General Purpose RAM:** Remaining bytes for general use.
        *   **External RAM:** Can be accessed using the `MOVX` instruction.
*   **I/O Ports (P0, P1, P2, P3):**
    *   **Port 0 (P0):** Dual-purpose. When not used for address/data bus, it acts as a general-purpose I/O port. Requires external pull-up resistors for output.
    *   **Port 1 (P1):** Dedicated general-purpose I/O port. Has internal pull-up resistors.
    *   **Port 2 (P2):** Dual-purpose. When not used for high-order address bus, it acts as a general-purpose I/O port. Has internal pull-up resistors.
    *   **Port 3 (P3):** Dual-purpose. Each pin has an alternate function (e.g., RXD, TXD, INT0, INT1, T0, T1, WR, RD). Has internal pull-up resistors.
*   **Timers/Counters:**
    *   Two 16-bit timers/counters (Timer 0 and Timer 1).
    *   Can be configured as timers (counting internal machine cycles) or counters (counting external events).
    *   Various modes of operation (Mode 0, 1, 2, 3).
*   **Serial Port:**
    *   Full-duplex UART for serial communication.
    *   Supports various baud rates.
    *   Modes of operation (Mode 0, 1, 2, 3).
*   **Interrupt Controller:**
    *   Manages interrupt requests from internal and external sources.
    *   Prioritization of interrupts.
    *   Sources: Timer interrupts, Serial port interrupts, External interrupts (INT0, INT1).
*   **Oscillator Circuit:**
    *   Requires an external crystal or resonator to set the operating frequency.
    *   The oscillator frequency is divided by 12 to get the machine cycle frequency.

---

### 2. 8051 Instruction Set and Addressing Modes

**Learning Outcomes Covered:**
*   Understand the 8051 instruction set and its various categories.
*   Identify and utilize different addressing modes supported by the 8051.

**Key Concepts & Definitions:**

*   **Instruction Set:** The collection of commands that the 8051 can understand and execute.
*   **Addressing Modes:** The ways in which an operand is specified in an instruction.

**Categories of 8051 Instructions:**

1.  **Data Transfer Instructions:** Move data between registers, memory, and I/O ports.
    *   `MOV` (Move): `MOV A, #50H` (Load immediate data into Accumulator)
        `MOV P1, A` (Move content of Accumulator to Port 1)
        `MOV R0, P1` (Move content of Port 1 to Register R0)
        `MOVX A, @DPTR` (Move data from external memory to Accumulator)
    *   `PUSH`, `POP` (Stack operations)
    *   `XCH` (Exchange)

2.  **Arithmetic Instructions:** Perform mathematical operations.
    *   `ADD` (Addition): `ADD A, #10H`
    *   `SUB` (Subtraction): `SUBB A, R0` (Subtract with borrow)
    *   `MUL` (Multiplication): `MUL AB` (Multiplies A by B, result in A and B)
    *   `DIV` (Division): `DIV AB` (Divides A by B, result in A and B)
    *   `INC` (Increment)
    *   `DEC` (Decrement)

3.  **Logical Instructions:** Perform bitwise logical operations.
    *   `ANL` (AND): `ANL A, #0FH`
    *   `ORL` (OR): `ORL P1, #80H`
    *   `XRL` (XOR): `XRL A, R7`
    *   `CPL` (Complement): `CPL A`
    *   `RL` (Rotate Left), `RR` (Rotate Right), `RLC` (Rotate Left through Carry), `RRC` (Rotate Right through Carry)

4.  **Branching (Control Transfer) Instructions:** Alter the flow of program execution.
    *   `SJMP` (Short Jump): `SJMP LABEL` (Unconditional jump within 2KB range)
    *   `JMP` (Jump): `JMP @A+DPTR` (Indirect jump)
    *   `JZ` (Jump if Zero): `JZ LABEL`
    *   `JNZ` (Jump if Not Zero): `JNZ LABEL`
    *   `JC` (Jump if Carry), `JNC` (Jump if No Carry)
    *   `DJNZ` (Decrement and Jump if Not Zero): `DJNZ R1, LABEL`
    *   `ACALL`, `LCALL` (Absolute and Long Calls to subroutines)
    *   `RET`, `RETI` (Return from subroutine, Return from interrupt)

5.  **Bit Manipulation Instructions:** Operate on individual bits.
    *   `SETB` (Set Bit): `SETB P1.0`
    *   `CLR` (Clear Bit): `CLR P1.1`
    *   `CPL` (Complement Bit): `CPL P1.2`
    *   `JB` (Jump if Bit Set): `JB P1.3, LABEL`
    *   `JNB` (Jump if Bit Not Set): `JNB P1.4, LABEL`
    *   `JC` (Jump if Carry), `JNC` (Jump if No Carry) - Carry flag is bit-addressable.

**Addressing Modes of 8051:**

1.  **Immediate Addressing:** The operand is part of the instruction.
    *   `MOV A, #50H` (Value 50H is the operand)
    *   `MOV DPTR, #1234H`

2.  **Register Addressing:** The operand is in one of the CPU registers (A, B, R0-R7).
    *   `MOV A, R0` (Content of R0 is the operand)
    *   `ADD A, B`

3.  **Direct Addressing:** The operand is in an internal RAM location or an SFR. The address is specified in the instruction.
    *   `MOV A, 30H` (Content of RAM location 30H is the operand)
    *   `MOV P1, 90H` (Content of SFR Port 1 is the operand)

4.  **Indirect Addressing:** The address of the operand is stored in a register (R0, R1, or DPTR).
    *   `MOV A, @R0` (Content of the RAM location whose address is in R0 is the operand)
    *   `MOVX A, @DPTR` (Content of external memory location pointed to by DPTR is the operand)

5.  **Indexed Addressing:** Used for accessing lookup tables in program memory. The address is calculated by adding the content of the Accumulator to the content of DPTR or PC.
    *   `MOVC A, @A+DPTR` (Move code byte from program memory to Accumulator)

6.  **Bit Addressing:** The operand is a single bit located in the bit-addressable RAM area or an SFR.
    *   `SETB P1.7`
    *   `CLR ACC.1` (Clears bit 1 of the Accumulator)

**Important Points to Remember:**
*   The `MOVX` instruction is used for accessing external data memory.
*   The `MOVC` instruction is used for accessing code memory (lookup tables).
*   DPTR is a 16-bit register, allowing access to 64KB of external memory.
*   PC is also 16-bit, allowing access to 64KB of program memory.

---

### 3. Designing Basic Circuits with 8051

**Learning Outcomes Covered:**
*   Interface LEDs and switches with the 8051.
*   Design simple circuits for input and output operations.

**Key Concepts & Definitions:**

*   **Input/Output (I/O) Ports:** The primary means for the microcontroller to interact with the external world.
*   **LED (Light Emitting Diode):** An output device that lights up when current flows through it. Requires a current-limiting resistor.
*   **Switch:** An input device that provides a HIGH or LOW signal to the microcontroller. Requires pull-up or pull-down resistors.

**Interfacing LEDs:**

*   **Connection:** Connect an LED's anode to an 8051 output pin (via a current-limiting resistor) and its cathode to GND.
*   **Operation:** When the output pin is HIGH (5V), current flows through the resistor and LED, causing it to light up. When the pin is LOW (0V), no current flows, and the LED is off.

**Circuit Diagram (LED Interfacing):**

```
   +5V
    |
    R (Resistor, e.g., 330 Ohm)
    |
   _|_
  |   | LED
  |_ _|
    |
+-------+
| 8051  |
|       |
|  Px.y |-------> (Output Pin)
|       |
+-------+
```

**Assembly Code Example (Blink LED):**

```assembly
ORG 0000H      ; Start at address 0000H
MOV P1, #0FFH  ; Initialize Port 1 to all HIGH (optional, good practice)

LOOP:
  MOV P1, #00H   ; Turn OFF all LEDs connected to Port 1
  ACALL DELAY    ; Call delay subroutine
  MOV P1, #0FFH  ; Turn ON all LEDs connected to Port 1
  ACALL DELAY    ; Call delay subroutine
  SJMP LOOP      ; Repeat indefinitely

DELAY:         ; Simple delay subroutine (adjust for desired delay)
  MOV R7, #20   ; Outer loop counter
DELAY_OUTER:
  MOV R6, #255  ; Inner loop counter
DELAY_INNER:
  DJNZ R6, DELAY_INNER
  DJNZ R7, DELAY_OUTER
  RET            ; Return from subroutine

END            ; End of assembly program
```

**Interfacing Switches:**

*   **Connection (Pull-up Resistor):** Connect one terminal of the switch to the 8051 input pin and the other terminal to GND. Connect a pull-up resistor between the input pin and +5V.
*   **Operation:**
    *   When the switch is open, the pull-up resistor pulls the input pin HIGH (+5V).
    *   When the switch is closed, it connects the input pin directly to GND, making the input LOW (0V).
*   **Connection (Internal Pull-up):** Port 1, Port 2, and Port 3 have internal pull-up resistors. For Port 0, external pull-ups are generally required. You can enable internal pull-ups on P1, P2, P3 by writing '1' to the corresponding port pins.

**Circuit Diagram (Switch Interfacing with Pull-up):**

```
   +5V
    |
    R (Pull-up Resistor, e.g., 10K Ohm)
    |
+-------+
| 8051  |
|       |
|  Px.y |-------> (Input Pin)
|       |   |
+-------+   |
            |
           _|_
          |   | Switch
          |_ _|
            |
           GND
```

**Assembly Code Example (Read Switch, Control LED):**

```assembly
ORG 0000H
MOV P1, #0FFH  ; Initialize Port 1 to all HIGH (LEDs OFF)

LOOP_READ:
  MOV A, P1      ; Read the state of Port 1 (assuming switches are on P1)
  JB P1.0, LED_OFF ; If P1.0 is HIGH (switch open), go to LED_OFF
  ; If P1.0 is LOW (switch closed)
  SETB P1.1      ; Turn ON LED connected to P1.1
  SJMP LOOP_READ ; Continue reading

LED_OFF:
  CLR P1.1       ; Turn OFF LED connected to P1.1
  SJMP LOOP_READ ; Continue reading

END
```

**Interfacing Port 0:**

*   **Requirement:** Port 0 requires external pull-up resistors for output operations (e.g., driving LEDs).
*   **Dual-Purpose:** When not used for address/data bus, it can be used as general-purpose I/O.

**Example: Driving LEDs with Port 0:**

```assembly
ORG 0000H
MOV P0, #00H      ; Turn OFF LEDs connected to Port 0
; ... (add delay or logic)
MOV P0, #0FFH     ; Turn ON LEDs connected to Port 0
```
*(Note: The output from Port 0 is open-drain. When a pin is set to '0', it pulls the line LOW. When set to '1', it effectively disconnects the pin, relying on external pull-ups to make the line HIGH.)*

---

### 4. Using Timers and Counters

**Learning Outcomes Covered:**
*   Configure and use the 8051 timers in different modes.
*   Generate time delays using timers.
*   Count external events using counters.

**Key Concepts & Definitions:**

*   **Timer:** A counter that increments based on the internal machine cycle clock.
*   **Counter:** A counter that increments based on external pulses applied to specific pins (T0, T1).
*   **Machine Cycle:** The basic time unit for 8051 execution. Typically, 1 machine cycle = 12 oscillator periods.
*   **Timer Registers:**
    *   `TMOD` (Timer Mode Control Register): Configures the operating mode and function (timer/counter) of Timer 0 and Timer 1.
    *   `TL0`, `TH0` (Timer 0 Low and High Bytes)
    *   `TL1`, `TH1` (Timer 1 Low and High Bytes)
    *   `TCON` (Timer Control Register): Contains control bits for timers and interrupts (TRx for start/stop, TFx for overflow flag, etc.).

**Timer Modes:**

| Mode | TLx  | THx  | Timer/Counter | Description                                                                                                                                     |
| :--- | :--- | :--- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **0**| 8-bit| 13-bit| Timer/Counter | TLx is 8-bit, THx is 13-bit (lower 5 bits used). Total 13-bit count.                                                                               |
| **1**| 8-bit| 16-bit| Timer/Counter | TLx is 8-bit, THx is 16-bit. Total 16-bit count. This is the most common mode for generating delays.                                                  |
| **2**| 8-bit| 8-bit | Timer (auto-reload) | TLx is 8-bit, THx is 8-bit. When TLx overflows, it is automatically reloaded with the value from THx. THx acts as a reload register.       |
| **3**| Various| Various| Timer/Counter | Splits Timer 0 into two independent 8-bit timers (TL0, TH0) and Timer 1 is stopped. Splits Timer 1 into two independent 8-bit timers (TL1, TH1) and Timer 0 is stopped. |

**Configuring Timers using TMOD:**

The `TMOD` register is divided into two nibbles, one for Timer 0 and one for Timer 1.

```
TMOD Register:
Bit Position: 7 6 5 4 | 3 2 1 0
Group:        Timer 1 | Timer 0
Field:       GATE C/T M1 M0 | GATE C/T M1 M0
```

*   **GATE:**
    *   `0`: Timer is enabled/disabled by the `TRx` bit in `TCON`.
    *   `1`: Timer is enabled/disabled by the `TRx` bit AND the INTx pin (external interrupt pin).
*   **C/T:** (Counter/Timer Select)
    *   `0`: Timer mode (increments on machine cycle).
    *   `1`: Counter mode (increments on negative edge of external pulse at Tx pin).
*   **M1, M0:** (Mode Select)
    *   `00`: Mode 0 (13-bit timer/counter)
    *   `01`: Mode 1 (16-bit timer/counter)
    *   `10`: Mode 2 (8-bit auto-reload timer)
    *   `11`: Mode 3 (split timer modes)

**Example: Generating a Delay using Timer 1 in Mode 1:**

*   **Goal:** Generate a delay of approximately 100 ms.
*   **Oscillator Frequency:** Assume 11.0592 MHz (common for baud rate generation).
*   **Machine Cycle Frequency:** 11.0592 MHz / 12 = 921.6 KHz.
*   **Machine Cycle Period:** 1 / 921.6 KHz = 1.085 µs.
*   **Timer Increment Rate:** 1.085 µs.
*   **Delay Calculation:** We need to find a count `N` such that `N * 1.085 µs ≈ 100 ms`.
    *   `N ≈ 100 ms / 1.085 µs = 100,000 µs / 1.085 µs ≈ 92,165`.
*   **16-bit Timer Maximum Count:** 2^16 = 65,536.
*   **Initial Value Calculation:** Since 92,165 is greater than 65,536, we will need to use multiple timer overflows or a nested loop for the delay. A simpler approach for a single delay is to aim for a count less than 65,536. Let's aim for a delay slightly less than 100ms, then use a loop.

Let's aim for a delay of about 50ms:
*   `N ≈ 50 ms / 1.085 µs = 50,000 µs / 1.085 µs ≈ 46,080`.
*   **Initial Value:** `65536 - 46080 = 19456`.
*   In Hexadecimal: `19456 = 4BF0H`.
    *   `TH1` = `4BH`
    *   `TL1` = `F0H`

**Assembly Code for Delay:**

```assembly
ORG 0000H

; Configure Timer 1, Mode 1
MOV TMOD, #00010000B ; Timer 1, Mode 1

LOOP_MAIN:
  ; Load initial values for a delay of approx 50ms
  MOV TH1, #04BH    ; High byte of initial value
  MOV TL1, #0F0H    ; Low byte of initial value

  SETB TR1          ; Start Timer 1

WAIT_T1:
  JNB TF1, WAIT_T1  ; Wait until Timer 1 overflows (TF1 becomes 1)
  CLR TF1           ; Clear Timer 1 overflow flag
  CLR TR1           ; Stop Timer 1

  ; Now we have a delay. To achieve approx 100ms, we repeat this twice
  ; For a more precise delay, we'd fine-tune the initial value and/or use a loop.
  ; For simplicity, let's make an LED blink with this 50ms delay.
  MOV P1, #00H      ; Turn OFF LEDs
  ; We already waited 50ms, so this is fine
  MOV P1, #0FFH     ; Turn ON LEDs
  ; Need another 50ms delay
  MOV TH1, #04BH
  MOV TL1, #0F0H
  SETB TR1
WAIT_T1_2:
  JNB TF1, WAIT_T1_2
  CLR TF1
  CLR TR1

  SJMP LOOP_MAIN    ; Repeat

END
```

**Using Timers as Counters:**

*   **Configuration:** Set the `C/T` bit in `TMOD` to `1` for the desired timer.
*   **Input Pins:**
    *   Timer 0: Counts pulses on `P3.4` (T0 pin).
    *   Timer 1: Counts pulses on `P3.5` (T1 pin).
*   **Operation:** When an external pulse arrives on the Tx pin, the corresponding timer register increments.

**Example: Counting pulses on T0:**

```assembly
ORG 0000H

; Configure Timer 0, Mode 1, as a counter
MOV TMOD, #00000101B ; Timer 0, Mode 1, Counter mode

; Initialize Timer 0 to 0
MOV TH0, #00H
MOV TL0, #00H

SETB TR0          ; Start Timer 0 (as a counter)

LOOP_COUNT:
  ; We are now counting pulses on P3.4
  ; To display the count on LEDs connected to Port 1:
  MOV A, TH0        ; Get the high byte of the count
  MOV P1, A         ; Display high byte on LEDs

  JNB P1.0, LOOP_COUNT ; If P1.0 (connected to a switch) is LOW, stay here

  CLR TR0           ; Stop the counter
  ; The count is now in TH0:TL0
  ; You would typically read TH0 and TL0 here to display the final count.
  ; For demonstration, we just stop when a switch is pressed.

END
```

**Important Points to Remember:**
*   The `TFx` flag in `TCON` is automatically set when the timer overflows. It must be cleared by software.
*   The `TRx` bit in `TCON` starts/stops the timer.
*   For Mode 2 (auto-reload), `THx` holds the reload value.
*   When using timers for delays, remember to clear the overflow flag (`TFx`) and stop the timer (`TRx`) after it overflows.

---

### 5. Serial Communication with 8051

**Learning Outcomes Covered:**
*   Understand the serial communication capabilities of the 8051.
*   Configure and use the 8051 serial port for data transmission and reception.

**Key Concepts & Definitions:**

*   **Serial Communication:** Transmitting data one bit at a time over a single channel.
*   **UART (Universal Asynchronous Receiver/Transmitter):** The hardware module within the 8051 responsible for serial communication.
*   **Baud Rate:** The number of bits transmitted per second.
*   **Data Format:** Typically includes a start bit, data bits (usually 8), and one or two stop bits.
*   **Pins:**
    *   `TXD` (Pin P1.1): Transmit Data output.
    *   `RXD` (Pin P1.0): Receive Data input.
*   **Serial Port Registers:**
    *   `SCON` (Serial Control Register): Configures serial port operation, including mode, baud rate, and enables/disables reception.
    *   `SBUF` (Serial Buffer Register): A buffer for both transmitting and receiving serial data. Writing to `SBUF` transmits data; reading from `SBUF` receives data.
    *   `PCON` (Power Control Register): Contains the `SMOD` bit which affects baud rate in certain modes.

**Serial Port Modes:**

| Mode | Description                                                                                                                                                                        | Baud Rate                                                                                                                                                                                                                                   | TXD, RXD Behavior                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :--- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **0**| Shift Register Mode: 8-bit data, serially transmitted/received through RXD. TXD outputs shift pulses.                                                                               | Fixed at 1/12 of oscillator frequency.                                                                                                                                                                                                      | RXD: Receives serial data. TXD: Outputs serial clock pulses.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **1**| 8-bit UART Mode: 8-bit data serially transmitted/received. Start and stop bits are transmitted/received.                                                                           | Variable: Baud rate determined by Timer 1 (Mode 2 auto-reload) or fixed (Mode 0, 3). `SMOD` bit in `PCON` doubles the baud rate if `SMOD=1`.                                                                                                       | RXD: Receives start bit, 8 data bits, and stop bit. TXD: Transmits start bit, 8 data bits, and stop bit. The `SM0`, `SM1` bits in `SCON` are `01` for Mode 1. `RI` (Receive Interrupt) flag is set when a byte is received. `TI` (Transmit Interrupt) flag is set after a byte is transmitted.                                                                                                                                                                                                   |
| **2**| 9-bit UART Mode: 8 data bits, 1 start bit, 1 stop bit. The 9th bit can be programmed to be transmitted/received. Can be used for multi-processor communication.                         | Fixed at either 1/32 or 1/64 of oscillator frequency, controlled by `SMOD` bit in `PCON`. If `SMOD=0`, baud rate is 1/32. If `SMOD=1`, baud rate is 1/64.                                                                                       | RXD: Receives start bit, 8 data bits, and the 9th bit (e.g., address bit for multi-processor comms) and stop bit. TXD: Transmits start bit, 8 data bits, and the 9th bit, and stop bit. `SM0=0`, `SM1=1`.                                                                                                                                                                                                                                                                                                 |
| **3**| 9-bit UART Mode: Similar to Mode 2 but also utilizes Timer 1 for baud rate generation. Baud rate varies as in Mode 2.                                                                 | Same as Mode 2. Variable baud rate controlled by Timer 1 in Mode 2 auto-reload, affected by `SMOD`.                                                                                                                                              | Similar to Mode 2. `SM0=1`, `SM1=1`. This mode is less common.                                                                                                                                                                                                                                                                                                                                                                                                                         |

**Configuring Serial Port using SCON:**

```
SCON Register:
Bit Position: 7 6 5 4 | 3 2 1 0
Field:        SM0 SM1 SM2 SM3 | REN TB8 RB8 TI RI
```

*   **SM0, SM1:** Mode select bits (as described in the table above).
*   **SM2:** Enables/disables the `RI` flag for Mode 2 and 3 (used for multi-processor communication). `SM2=1` means `RI` will only be set if the 9th bit received matches the value of `RB8`.
*   **REN:** Receive Enable. `REN=1` enables serial reception.
*   **TB8:** Transmit Bit 8. Used in Mode 2/3 to transmit the 9th bit.
*   **RB8:** Receive Bit 8. Used in Mode 2/3 to indicate the value of the 9th bit received.
*   **TI:** Transmit Interrupt Flag. Set by hardware when transmission is complete. Must be cleared by software.
*   **RI:** Receive Interrupt Flag. Set by hardware when a byte is received. Must be cleared by software.

**Baud Rate Generation (Mode 1):**

*   The most common way to set the baud rate in Mode 1 is to use Timer 1 in Mode 2 (auto-reload).
*   Formula: `Baud Rate = (Oscillator Frequency / 12) / (32 * (256 - TL1_initial_value))` if `SMOD=0` in `PCON`.
*   If `SMOD=1` in `PCON`, the divisor becomes `16`.
*   To calculate `TL1_initial_value` for a desired baud rate:
    *   `256 - TL1_initial_value = (Oscillator Frequency / 12) / (32 * Baud Rate)` (for `SMOD=0`)
    *   `TL1_initial_value = 256 - [(Oscillator Frequency / 12) / (32 * Baud Rate)]`

**Example: Setting Baud Rate to 9600 bps with 11.0592 MHz Oscillator and SMOD=0:**

*   `TL1_initial_value = 256 - [(11059200 / 12) / (32 * 9600)]`
*   `TL1_initial_value = 256 - [921600 / 307200]`
*   `TL1_initial_value = 256 - 3 = 253`
*   In Hex: `253 = FDH`.
*   So, `TH1` should be set to `FDH` for auto-reload.

**Assembly Code Example (Transmit a character):**

```assembly
ORG 0000H

; Configure Serial Port for Mode 1, baud rate 9600 (assuming 11.0592MHz & SMOD=0)
MOV PCON, #00000000B  ; SMOD = 0
MOV TMOD, #00100000B  ; Timer 1, Mode 2 (auto-reload)
MOV TH1, #0FDH       ; Load initial value for 9600 baud
MOV SCON, #50H       ; Mode 1, REN=1 (Enable Receive), SM2=0, TI=0, RI=0

; Program to transmit a character 'A'
MOV A, #'A'         ; Load 'A' into Accumulator
MOV SBUF, A         ; Move 'A' to SBUF to transmit

WAIT_TX:
  JNB TI, WAIT_TX   ; Wait until transmission is complete (TI becomes 1)
  CLR TI            ; Clear the Transmit Interrupt flag

; Program to transmit another character 'B'
MOV A, #'B'
MOV SBUF, A

WAIT_TX2:
  JNB TI, WAIT_TX2
  CLR TI

END
```

**Assembly Code Example (Receive a character):**

```assembly
ORG 0000H

; Configure Serial Port for Mode 1, baud rate 9600 (assuming 11.0592MHz & SMOD=0)
MOV PCON, #00000000B  ; SMOD = 0
MOV TMOD, #00100000B  ; Timer 1, Mode 2 (auto-reload)
MOV TH1, #0FDH       ; Load initial value for 9600 baud
MOV SCON, #50H       ; Mode 1, REN=1 (Enable Receive), SM2=0, TI=0, RI=0

LOOP_RX:
  JNB RI, LOOP_RX   ; Wait until a character is received (RI becomes 1)
  MOV A, SBUF       ; Move the received character from SBUF to Accumulator
  MOV P1, A         ; Display the received character on Port 1 LEDs
  CLR RI            ; Clear the Receive Interrupt flag
  SJMP LOOP_RX      ; Wait for the next character

END
```

**Important Points to Remember:**
*   `SBUF` is a dual-purpose register; writing to it transmits, reading from it receives.
*   The `TI` and `RI` flags are crucial for managing serial communication.
*   Ensure the baud rates of the transmitting and receiving devices match.
*   For asynchronous serial communication, the clock is embedded in the data stream (start/stop bits).

---

### 6. Interrupts in 8051

**Learning Outcomes Covered:**
*   Understand the interrupt mechanism in the 8051.
*   Configure and handle interrupts from various sources.

**Key Concepts & Definitions:**

*   **Interrupt:** An event that causes the CPU to suspend its current task and execute a specific routine (Interrupt Service Routine - ISR) to handle the event.
*   **Interrupt Service Routine (ISR):** A special piece of code that is executed when a particular interrupt occurs.
*   **Interrupt Vector Table:** A table in program memory that stores the starting addresses of the ISRs.
*   **Interrupt Sources:**
    *   **External Interrupts:**
        *   `INT0` (Pin P3.2): External interrupt 0.
        *   `INT1` (Pin P3.3): External interrupt 1.
    *   **Timer Interrupts:**
        *   `TF0`: Timer 0 overflow flag.
        *   `TF1`: Timer 1 overflow flag.
    *   **Serial Interrupts:**
        *   `RI`: Receive interrupt flag.
        *   `TI`: Transmit interrupt flag.
*   **Interrupt Control Registers:**
    *   `IE` (Interrupt Enable Register): Enables/disables individual interrupts and the global interrupt enable bit (`EA`).
    *   `IP` (Interrupt Priority Register): Sets the priority for different interrupt sources.

**Interrupt Vector Table:**

| Interrupt Source        | Vector Address |
| :---------------------- | :------------- |
| External Interrupt 0    | 0003H          |
| Timer 0 Overflow        | 000BH          |
| External Interrupt 1    | 0013H          |
| Timer 1 Overflow        | 001BH          |
| Serial Port             | 0023H          |

*(Note: The 8051 has two priority levels for interrupts. By default, all interrupts are at the same priority. The `IP` register can be used to assign higher priority to specific interrupts.)*

**IE Register:**

```
IE Register:
Bit Position: 7 6 5 4 | 3 2 1 0
Field:        EA -- | ET2 ES ET1 EX1 ET0
```

*   **EA:** Global Enable/Disable All Interrupts. `EA=1` enables interrupts; `EA=0` disables all interrupts.
*   **ET2:** Enable Timer 2 Interrupt (for variants with Timer 2).
*   **ES:** Enable Serial Port Interrupt.
*   **ET1:** Enable Timer 1 Interrupt.
*   **EX1:** Enable External Interrupt 1.
*   **ET0:** Enable Timer 0 Interrupt.
*   **EX0:** Enable External Interrupt 0.

**IP Register:**

```
IP Register:
Bit Position: 7 6 5 4 | 3 2 1 0
Field:        -- -- | PT2 PS PT1 PX1 PT0 PX0
```

*   Sets the priority of the corresponding interrupt.
*   `1` = High Priority, `0` = Low Priority.
*   If two low-priority interrupts occur simultaneously, the one with the higher vector address is serviced first. If two high-priority interrupts occur, the one with the higher vector address is serviced first.
*   If a high-priority interrupt occurs while a low-priority ISR is executing, the high-priority interrupt will preempt the low-priority one.

**How Interrupts Work:**

1.  An interrupt event occurs (e.g., timer overflows, external pin changes).
2.  The corresponding interrupt flag in `TCON` or `SCON` is set.
3.  If interrupts are globally enabled (`EA=1`) and the specific interrupt is enabled (`ETx`, `EXx`, `ES` bits in `IE`), the CPU finishes its current instruction.
4.  The CPU automatically jumps to the ISR's starting address (interrupt vector address).
5.  The CPU implicitly pushes the Program Counter (PC) onto the stack.
6.  The ISR executes. It typically involves:
    *   Saving the context of the interrupted program (registers used by the ISR).
    *   Handling the interrupt event (e.g., reading data from `SBUF`, clearing timer flags).
    *   Restoring the saved context.
7.  The ISR executes a `RETI` (Return from Interrupt) instruction.
8.  `RETI` pops the PC from the stack, and the CPU resumes execution from where it was interrupted.

**Example: Handling External Interrupt 0 (INT0)**

*   **Configuration:**
    *   Enable `EX0` in the `IE` register.
    *   Enable global interrupts (`EA`).
    *   Set `INT0` to trigger on a falling edge (default).

**Assembly Code:**

```assembly
ORG 0000H
MOV IE, #81H        ; Enable External Interrupt 0 (EX0=1) and Global Interrupt (EA=1)
MOV TMOD, #00000000B ; Configure timers if needed, but not for this example
MOV P1, #0FFH       ; Initialize Port 1 to HIGH

LOOP_MAIN:
  ; Main program loop, perhaps blinking an LED
  SETB P1.7
  ACALL DELAY_SHORT
  CLR P1.7
  ACALL DELAY_SHORT
  SJMP LOOP_MAIN

; External Interrupt 0 Service Routine
ORG 0003H           ; Vector address for INT0
ISR_INT0:
  PUSH ACC          ; Save Accumulator
  PUSH PSW          ; Save Program Status Word (contains flags and register bank select)

  ; Interrupt handling: Toggle an LED on Port 1 bit 0
  CPL P1.0          ; Complement the state of LED connected to P1.0

  POP PSW           ; Restore PSW
  POP ACC           ; Restore Accumulator
  RETI              ; Return from Interrupt

DELAY_SHORT:        ; A simple delay
  MOV R6, #100
DELAY_OUTER:
  MOV R5, #200
DELAY_INNER:
  DJNZ R5, DELAY_INNER
  DJNZ R6, DELAY_OUTER
  RET

END
```

**Important Points to Remember:**
*   Always enable the specific interrupt and the global interrupt enable bit (`EA`).
*   The ISR should be as short as possible.
*   Save the context of registers used by the ISR before performing any operations and restore them before `RETI`.
*   The `RETI` instruction is crucial for returning from an interrupt correctly.

---

### 7. Designing with External Memory and Peripherals

**Learning Outcomes Covered:**
*   Interface external memory (RAM and ROM) with the 8051.
*   Understand the basic principles of interfacing common peripherals like Keyboards and Displays.

**Key Concepts & Definitions:**

*   **Memory Interfacing:** Connecting external RAM and ROM to the 8051 to extend its memory capacity.
*   **Address Bus:** Carries memory addresses from the CPU to memory devices.
*   **Data Bus:** Carries data between the CPU and memory devices.
*   **Control Signals:** Signals like `ALE` (Address Latch Enable), `PSEN` (Program Store Enable), `RD` (Read), `WR` (Write) used to control memory access.
*   **Keyboard Interfacing:** Reading input from a matrix of switches.
*   **Display Interfacing:** Driving character LCDs or seven-segment displays.

**External Memory Interfacing:**

*   **Address Lines:** The 8051 has a 16-bit address bus (AD0-AD7 and A8-A15).
    *   Port 0 (P0.0-P0.7) carries the lower 8 bits of the address (AD0-AD7) during the first clock cycle and then multiplexes with the data bus (D0-D7).
    *   Port 2 (P2.0-P2.7) carries the higher 8 bits of the address (A8-A15).
*   **Control Signals:**
    *   `ALE`: When `ALE` is HIGH, the pins on Port 0 carry address bits (AD0-AD7). An external latch (e.g., 74LS373) is used to demultiplex the address from the data bus.
    *   `PSEN`: When HIGH, enables external program memory for reading instructions.
    *   `RD`: When HIGH, enables external data memory for reading.
    *   `WR`: When HIGH, enables external data memory for writing.
*   **Memory Organization:**
    *   The 8051 can access up to 64KB of program memory and 64KB of data memory.
    *   `ROM` is typically connected to the program memory space (accessed by `MOV` to `PC`, `ACALL`, `LCALL`).
    *   `RAM` is typically connected to the data memory space (accessed by `MOVX`).

**Circuit Diagram (External ROM Interfacing - Simplified):**

*(A full diagram would be complex. Key connections should be described.)*

*   **Address Lines:**
    *   `P2` connected to A8-A15 of ROM.
    *   `P0` connected to AD0-AD7 of ROM (via a latch).
*   **Data Lines:**
    *   `P0` connected to D0-D7 of ROM (after the latch).
*   **Control Lines:**
    *   `ALE` connected to the latch enable input.
    *   `PSEN` connected to the Output Enable (OE) of the ROM.
    *   `P0` also needs to be configured to output during the address phase.

**Assembly Code (Reading from External ROM):**

```assembly
ORG 0000H
MOV P2, #00H       ; Initialize P2 to 0 (for address A8-A15 if ROM is small)
MOV DPTR, #1000H   ; Address in external ROM to read from

; Load the instruction to read from external ROM into the PC
; This is typically done by the system bootloader or initial reset sequence.
; For demonstration, assume we are executing from internal ROM and want to read data.

  MOV A, #00H        ; Initialize P0 for output (addressing)
  MOV P0, A

  MOV A, #00H        ; Load high byte of address into P2 (adjust for actual ROM size)
  MOV P2, A

  MOV A, #00H        ; Load low byte of address into P0
  MOV P0, A

  SETB ALE           ; Latch the address

  CLR ALE            ; De-latch the address

  MOV A, #00H        ; Set P0 to input mode for reading data
  MOV P0, A

  SETB P3.0          ; Enable external read signal (connect to RD pin of ROM)

  MOV A, P0          ; Read data from P0

  CLR P3.0           ; Disable external read signal

  MOV P1, A          ; Display the read data on Port 1

END
```
*(Note: The actual process of booting from external ROM involves more complex hardware and initialization. This example demonstrates reading data from a specific external memory location.)*

**Interfacing Keyboards (Matrix Keyboard):**

*   **Concept:** Rows are connected to output pins, and columns are connected to input pins.
*   **Scanning Process:**
    1.  Set all row pins to HIGH.
    2.  Set one row pin to LOW.
    3.  Scan the column pins. If a column pin is LOW, it means the key in that row and column is pressed.
    4.  Repeat for all rows.

**Assembly Code Snippet (Keyboard Scan - Conceptual):**

```assembly
; Assume Rows on P1.0-P1.3, Columns on P2.0-P2.3

SCAN_ROWS:
  MOV P1, #0FH     ; Set all row pins to HIGH
  MOV P2, #0FFH    ; Set column pins to input (pull-ups active)

  MOV R0, #0       ; Row counter

SCAN_LOOP:
  MOV P1, #0FH     ; Set all rows HIGH
  CLR P1.0         ; Set Row 0 LOW

  MOV A, P2        ; Read columns
  MOV R1, A        ; Store column status

  ; Check if any column is LOW (key pressed in Row 0)
  JNB P2.0, KEY_PRESSED_00 ; If P2.0 is LOW, key at (Row 0, Col 0) pressed

  INC R0
  CJNE R0, #4, SCAN_LOOP ; Scan next row

  SJMP SCAN_ROWS   ; Repeat if no key pressed

KEY_PRESSED_00:
  ; Handle key press at Row 0, Col 0
  ; For example, set P1.1 to HIGH
  SETB P1.1
  ACALL DELAY_DEBOUNCE ; Debounce the key press

  ; Clear the interrupt or flag
  ; ...

  SJMP SCAN_ROWS   ; Continue scanning

```

**Interfacing Seven-Segment Displays:**

*   **Common Anode vs. Common Cathode:**
    *   **Common Cathode:** Cathode connected to GND. Segment pins connected to output pins (HIGH to turn ON).
    *   **Common Anode:** Anode connected to +5V. Segment pins connected to output pins (LOW to turn ON).
*   **BCD to Seven-Segment Decoder:** Often used to simplify driving. Alternatively, a lookup table can be used in software.

**Assembly Code Snippet (Displaying '1' on a Common Cathode Seven-Segment Display):**

```assembly
ORG 0000H

; Define segment patterns for digits (example for Common Cathode)
; Segments: a, b, c, d, e, f, g
SEG_PATTERNS:
  DB 0C0H ; 0
  DB 0F9H ; 1
  DB 0A4H ; 2
  ; ... other digits ...

MOV P1, #0FFH ; Initialize Port 1 to HIGH

LOOP_DISPLAY:
  MOV A, #1     ; Display digit '1'
  MOV P0, A     ; Assume digit select pin is P0.0

  MOV A, #0F9H  ; Pattern for '1' (common cathode)
  MOV P1, A     ; Send segment data to Port 1

  ; ... add delay or further logic ...

END
```

**Important Points to Remember:**
*   Understanding the datasheet for external memory and peripherals is crucial.
*   Multiplexing (like address/data bus on P0) is a common technique to save pins.
*   Careful timing is required when interfacing with external devices.
*   Debouncing is important for switch inputs.

---

### 8. Advanced Topics (Briefly Mentioned)

**Learning Outcomes Covered:**
*   (Implicitly) Gain awareness of other capabilities of the 8051.

*   **Watchdog Timers:** Used for system reset in case of software hang-ups.
*   **Analog to Digital Converters (ADCs):** For interfacing with analog sensors (requires external ADC chip).
*   **Pulse Width Modulation (PWM):** For controlling motor speed, LED brightness, etc.
*   **Different 8051 Variants:** Many derivatives exist with more memory, peripherals (e.g., Timers 2, ADC, DAC, SPI, I2C, USB), and features.

---

### Practice Questions and Exercises

**Section 1: Architecture and Instructions**

1.  Describe the function of the Accumulator (A) and the DPTR in the 8051.
2.  List the main components of the 8051 architecture.
3.  What is the difference between direct and indirect addressing modes? Provide an example for each.
4.  Write an 8051 assembly code snippet to move the content of Port 1 to Register R5.
5.  Explain the purpose of the `MOVX` instruction.

**Section 2: Timers and Counters**

6.  How do you configure Timer 0 to operate as a 16-bit counter? Which register and bits are used?
7.  If the oscillator frequency is 12 MHz, what is the duration of one machine cycle?
8.  Calculate the initial value for `TL1` and `TH1` to generate a delay of approximately 1ms using Timer 1 in Mode 1, assuming a 12 MHz oscillator.
9.  What is the role of the `TF1` flag? How is it cleared?

**Section 3: Serial Communication**

10. What are the pins used for serial communication in the 8051?
11. Explain the function of the `SCON` register, particularly the `REN` and `TI` bits.
12. How is the baud rate determined in Mode 1 of the serial port?
13. Write an 8051 assembly code snippet to continuously transmit the character 'Z' through the serial port.

**Section 4: Interrupts**

14. List at least three sources of interrupts in the 8051.
15. What is the significance of the `EA` bit in the `IE` register?
16. Write an 8051 assembly code snippet for the ISR of External Interrupt 1. Assume it simply toggles an LED connected to P1.2.
17. What is the purpose of the `RETI` instruction?

**Section 5: Designing Circuits**

18. Draw a simple circuit diagram showing how to connect an LED to an 8051 output pin to glow when the pin is HIGH. Include the necessary components.
19. Explain why Port 0 requires external pull-up resistors for output operations.
20. Describe the basic principle of scanning a 2x2 matrix keypad connected to the 8051.

---

### Answers to Practice Questions

**Section 1: Architecture and Instructions**

1.  **Accumulator (A):** Used for arithmetic and logical operations, data transfers, and as a general-purpose register.
    **DPTR:** A 16-bit register used as a data pointer for accessing external memory (ROM and RAM).
2.  CPU, ROM, RAM, I/O Ports, Timers/Counters, Serial Port, Interrupt Controller, Oscillator.
3.  **Direct Addressing:** The operand's address is directly specified in the instruction. Example: `MOV A, 30H` (moves content of RAM location 30H to A).
    **Indirect Addressing:** The address of the operand is stored in a register (R0, R1, or DPTR). Example: `MOV A, @R0` (moves content of memory location pointed to by R0 to A).
4.  ```assembly
    MOV A, P1
    MOV R5, A
    ```
5.  `MOVX` is used to move data between the 8051 and *external* data memory.

**Section 2: Timers and Counters**

6.  Set `TMOD` register. For Timer 0 as a 16-bit counter, `TMOD` should have bits `GATE0=0`, `C/T0=1`, `M1_0=0`, `M0_0=1`. So, `TMOD` would be `0000 0101B`.
7.  Machine Cycle = Oscillator Frequency / 12 = 12 MHz / 12 = 1 MHz.
    Machine Cycle Duration = 1 / 1 MHz = 1 µs.
8.  For 1ms delay with 12 MHz oscillator:
    Machine Cycle Duration = 1 µs.
    Number of machine cycles needed = 1 ms / 1 µs = 1000.
    Initial Value = 65536 - 1000 = 64536.
    In Hex: 64536 = F000H.
    So, `TH1 = F0H`, `TL1 = 00H`.
9.  The `TF1` flag in the `TCON` register is set by hardware when Timer 1 overflows (i.e., rolls over from its maximum count to zero). It must be cleared by software using `CLR TF1` or `MOV TF1, #0`.

**Section 3: Serial Communication**

10. `TXD` (Pin P1.1) for transmitting data and `RXD` (Pin P1.0) for receiving data.
11. `SCON` register configures the serial port.
    *   `REN` (Receive Enable): When set to `1`, enables serial reception.
    *   `TI` (Transmit Interrupt Flag): Set by hardware when the transmission of a byte is complete. Must be cleared by software.
12. In Mode 1, the baud rate is variable and is typically controlled by Timer 1 operating in Mode 2 (8-bit auto-reload). The `SMOD` bit in `PCON` can double this baud rate.
13. ```assembly
    ORG 0000H
    MOV PCON, #00000000B ; SMOD = 0
    MOV TMOD, #00100000B ; Timer 1, Mode 2
    MOV TH1, #0FDH       ; Load initial value for 9600 baud (assuming 11.0592MHz)
    MOV SCON, #50H       ; Mode 1, REN=0, TI=0, RI=0

    TRANSMIT_Z:
      MOV A, #'Z'
      MOV SBUF, A

    WAIT_TX:
      JNB TI, WAIT_TX
      CLR TI
      SJMP TRANSMIT_Z

    END
    ```

**Section 4: Interrupts**

14. External Interrupt 0 (`INT0`), Timer 0 Overflow (`TF0`), Timer 1 Overflow (`TF1`), Serial Port Interrupt (`RI`/`TI`).
15. The `EA` bit in the `IE` register is the Global Interrupt Enable/Disable bit. If `EA=0`, all interrupts are disabled. If `EA=1`, individual interrupts can be enabled/disabled by their respective bits in the `IE` register.
16. ```assembly
    ORG 0003H       ; Vector address for INT1
    ISR_INT1:
      PUSH ACC
      PUSH PSW
      CPL P1.2      ; Toggle LED on P1.2
      POP PSW
      POP ACC
      RETI
    ```
17. The `RETI` (Return from Interrupt) instruction is used to exit an Interrupt Service Routine. It pops the Program Counter from the stack, allowing the CPU to resume execution from the point of interruption.

**Section 5: Designing Circuits**

18. ```
    +5V
     |
     R (e.g., 330 Ohm)
     |
    LED (Anode to R, Cathode to P1.x)
     |
    +-------+
    | 8051  |
    |  P1.x |-----> (Output Pin)
    +-------+
    ```
19. Port 0 pins have an open-drain output structure. They can actively pull a pin LOW, but they cannot actively drive a pin HIGH. To make a pin HIGH, an external pull-up resistor is required to connect the pin to the positive supply voltage.
20. To scan a 2x2 matrix keypad:
    *   Connect rows to output pins (e.g., P1.0, P1.1).
    *   Connect columns to input pins (e.g., P2.0, P2.1) with pull-up resistors.
    *   **Scan Process:**
        1.  Set all row pins to HIGH.
        2.  Ground one row pin (e.g., P1.0 = 0).
        3.  Read the column pins (P2.0, P2.1). If P2.0 is LOW, the key at (Row 0, Col 0) is pressed. If P2.1 is LOW, the key at (Row 0, Col 1) is pressed.
        4.  Repeat this process by grounding each row pin sequentially.

---

### Important Points to Remember Summary

*   **8051 Core Architecture:** 8-bit CPU, 4KB ROM, 128 Bytes RAM, 4 I/O Ports (32 pins), 2 Timers, 1 Serial Port, Interrupt Controller.
*   **Memory Access:** `MOV` for internal data memory, `MOVX` for external data memory, `MOVC` for code memory.
*   **Port 0:** Open-drain; requires external pull-ups for output. Dual-purpose for address/data bus.
*   **Timers:** `TMOD` for mode selection, `TCON` for control (`TRx`, `TFx`), `TLx`/`THx` for counting. Mode 1 (16-bit) and Mode 2 (auto-reload) are commonly used.
*   **Serial Port:** `SCON` for configuration (`Mode`, `REN`), `SBUF` for data, `PCON` for `SMOD`. Baud rate generation often uses Timer 1 in Mode 2. `TI`/`RI` flags are essential.
*   **Interrupts:** `IE` register for enabling/disabling (`EA`), `TCON`/`SCON` for interrupt flags, `RETI` to exit ISRs. Context saving is crucial in ISRs.
*   **External Memory:** Uses Port 0 (multiplexed with data) and Port 2 for addressing, along with control signals like `ALE`, `PSEN`, `RD`, `WR`.
*   **Peripherals:** Matrix keypad scanning requires sequential row activation and column reading. Seven-segment display driving involves sending segment patterns.
*   **Instruction Set:** Understand the categories (Data Transfer, Arithmetic, Logical, Branching, Bit Manipulation) and addressing modes (Immediate, Register, Direct, Indirect, Indexed, Bit).

---
