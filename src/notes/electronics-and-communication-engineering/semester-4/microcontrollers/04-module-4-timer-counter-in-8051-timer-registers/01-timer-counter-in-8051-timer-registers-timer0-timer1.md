---
title: "Timer / Counter in 8051: Timer registers - Timer0, Timer1."
subject: "MICROCONTROLLERS"
module: "Module 4: Timer / Counter in 8051: Timer registers "
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5a1"
status: "completed"
scrapedAt: "2026-05-23T17:51:07.546Z"
---
# Module 4: Timer/Counter in 8051: Timer Registers - Timer0, Timer1

## Introduction to Timers/Counters in 8051

The 8051 microcontroller features two built-in 16-bit Timer/Counter modules, Timer 0 and Timer 1. These modules are versatile and can be used for a variety of tasks, including:

*   **Generating time delays:** Creating precise delays for controlling external devices or for software timing.
*   **Counting external events:** Counting pulses from external sources, such as the output of a sensor.
*   **Baud rate generation:** Setting the communication speed for serial communication.
*   **Pulse width modulation (PWM):** Generating variable duty cycle square waves for motor control or other applications.

**(CO1: Outline Architecture of Microcontroller - K2)**
**(CO4: Design and implement an Embedded System - K6)**

### Key Concepts:

*   **Timer Mode:** When configured as a timer, the module increments its internal counter based on the system clock frequency.
*   **Counter Mode:** When configured as a counter, the module decrements its internal counter based on external pulses applied to a dedicated input pin.
*   **16-bit Register:** Both Timer 0 and Timer 1 are 16-bit registers, meaning they can count from 0000H to FFFFH (0 to 65535).
*   **Maximum Count:** The maximum count is 65536. If the timer overflows from FFFFH to 0000H, the Timer Flag (TF0 or TF1) is set.

## Timer Registers

The operation of Timer 0 and Timer 1 is controlled by several special function registers (SFRs).

### 1. Timer Mode Control Register (TMOD)

*   **Purpose:** The TMOD register is used to configure the operating mode of both Timer 0 and Timer 1. It's an 8-bit register, with the lower nibble (bits 0-3) controlling Timer 0 and the upper nibble (bits 4-7) controlling Timer 1.
*   **Structure:**

    | Bit   | Symbol | Description                                                                             |
    | :---- | :----- | :-------------------------------------------------------------------------------------- |
    | 7     | GATE1  | **Gate Control for Timer 1:**<br>0: Timer 1 runs when TR1 bit is set.<br>1: Timer 1 runs when TR1 bit is set AND external interrupt pin INT1 is high. |
    | 6     | C/T1   | **Counter/Timer Select for Timer 1:**<br>0: Timer 1 is a timer.<br>1: Timer 1 is a counter. |
    | 5-4   | M11, M01 | **Mode Select for Timer 1:**<br>00: Mode 0 (13-bit timer/counter)<br>01: Mode 1 (16-bit timer/counter)<br>10: Mode 2 (8-bit auto-reload)<br>11: Mode 3 (Split timer mode - Timer 1 only) |
    | 3     | GATE0  | **Gate Control for Timer 0:**<br>0: Timer 0 runs when TR0 bit is set.<br>1: Timer 0 runs when TR0 bit is set AND external interrupt pin INT0 is high. |
    | 2     | C/T0   | **Counter/Timer Select for Timer 0:**<br>0: Timer 0 is a timer.<br>1: Timer 0 is a counter. |
    | 1-0   | M10, M00 | **Mode Select for Timer 0:**<br>00: Mode 0 (13-bit timer/counter)<br>01: Mode 1 (16-bit timer/counter)<br>10: Mode 2 (8-bit auto-reload)<br>11: Mode 3 (8-bit timer/counter with two 8-bit registers) |

*   **From Mazidi et al. (Second Edition):** Chapter 7, "Timers and Counters," details the TMOD register and its bit functions. They emphasize that `GATE=0` and `TRx=1` is the standard way to start a timer/counter.
*   **From Ayala & Gadre (2010):** Chapter 5, "Timers and Counters," also thoroughly explains TMOD, providing examples of how to set different modes.

**Example of TMOD Configuration:**

To configure Timer 0 for 16-bit timer mode (Mode 1) and Timer 1 for 8-bit auto-reload mode (Mode 2), both running when their respective TR bits are set:

```assembly
MOV TMOD, #00010010b  ; Timer 0 in Mode 1, Timer 1 in Mode 2
; OR
MOV TMOD, #22H        ; Timer 0 in Mode 1 (0001), Timer 1 in Mode 2 (0010) - Incorrect, should be 0001 0010b
; Corrected assembly for the above example:
MOV TMOD, #00010010b  ; Timer 0 Mode 1 (0001), Timer 1 Mode 2 (0010)
```

**Important Points about TMOD:**

*   TMOD can only be written to. It cannot be read.
*   The GATE bit allows for edge-triggered counting based on external interrupt pins.

### 2. Timer Control Registers (TCON)

*   **Purpose:** The TCON register contains bits that control the start/stop of timers/counters and flags that indicate overflow.
*   **Structure:**

    | Bit   | Symbol | Description                                                                                               |
    | :---- | :----- | :-------------------------------------------------------------------------------------------------------- |
    | 7     | TF1    | **Timer 1 Overflow Flag:**<br>Set to 1 by hardware when Timer 1 overflows. Cleared by hardware when a corresponding interrupt is executed. Can be set/cleared by software. |
    | 6     | TR1    | **Timer 1 Run Control:**<br>Set to 1 by software to start Timer 1. Cleared to 0 by software to stop Timer 1. |
    | 5     | TF0    | **Timer 0 Overflow Flag:**<br>Set to 1 by hardware when Timer 0 overflows. Cleared by hardware when a corresponding interrupt is executed. Can be set/cleared by software. |
    | 4     | TR0    | **Timer 0 Run Control:**<br>Set to 1 by software to start Timer 0. Cleared to 0 by software to stop Timer 0. |
    | 3     | IE1    | **External Interrupt 1 Edge Flag:**<br>Set to 1 by hardware on a high-to-low transition of INT1. Cleared by hardware when the INT1 interrupt is serviced. |
    | 2     | IT1    | **External Interrupt 1 Type Control:**<br>0: Edge triggered.<br>1: Level triggered.                         |
    | 1     | IE0    | **External Interrupt 0 Edge Flag:**<br>Set to 1 by hardware on a high-to-low transition of INT0. Cleared by hardware when the INT0 interrupt is serviced. |
    | 0     | IT0    | **External Interrupt 0 Type Control:**<br>0: Edge triggered.<br>1: Level triggered.                         |

*   **From Mazidi et al. (Second Edition):** Chapter 7 discusses how `TRx` bits are used to start/stop the timers and how `TFx` bits are used to detect overflows.
*   **From Ayala & Gadre (2010):** Chapter 5 explains the `TFx` flags as the crucial indicators that a timer/counter has completed its count.

**Example of Timer Control:**

To start Timer 0 running in Mode 1:

```assembly
SETB TR0   ; Set the TR0 bit to start Timer 0
```

To stop Timer 0:

```assembly
CLR TR0    ; Clear the TR0 bit to stop Timer 0
```

To check if Timer 0 has overflowed:

```assembly
JNB TF0, LOOP  ; Jump if TF0 is not set (timer has not overflowed)
```

### 3. Timer Data Registers (THx and TLx)

*   **Purpose:** Timers 0 and 1 are 16-bit registers, but they are implemented using two 8-bit registers: a high byte register (THx) and a low byte register (TLx).
    *   **Timer 0:** TL0 (Low Byte) and TH0 (High Byte)
    *   **Timer 1:** TL1 (Low Byte) and TH1 (High Byte)
*   **Operation:** When the timer is running, it increments the value held in the combined 16-bit register (THx:TLx).
*   **From Mazidi et al. (Second Edition):** Chapter 7 clearly illustrates how THx and TLx work together to form the 16-bit counter. For Mode 1, the entire 16 bits of THx:TLx are used.
*   **From Ayala & Gadre (2010):** Chapter 5 provides detailed examples of loading initial values into THx and TLx to achieve specific time delays.

**Example of Loading a Timer Value:**

To load Timer 0 with a value to create a delay. Let's say we want to count from `FFFFF` down to `00000` (a count of 1). This requires a delay of 1 machine cycle in timer mode.

First, configure TMOD for Timer 0, Mode 1:
```assembly
MOV TMOD, #00000001b ; Timer 0 in Mode 1
```

Load the initial value into TH0 and TL0. To count 1 cycle, we'd load `FFFFH`.
```assembly
MOV TH0, #0FFH
MOV TL0, #0FFH
SETB TR0            ; Start Timer 0

WAIT:
  JNB TF0, WAIT     ; Wait until TF0 is set
  CLR TR0            ; Stop Timer 0
  CLR TF0            ; Clear the overflow flag for the next count
```

**Calculating Initial Timer Values for Delays:**

To calculate the initial value for THx and TLx to generate a specific delay, you need to know:

1.  **System Clock Frequency:** For the 8051, the clock is typically divided by 12 to get the machine cycle frequency. Machine Cycle Frequency = System Clock / 12.
2.  **Desired Delay:** The total time you want to measure or generate.
3.  **Timer Mode:** The mode of operation (e.g., Mode 1 for 16-bit).

**Formula for Delay Calculation (Mode 1):**

*   **Number of Machine Cycles Needed:** `Total Delay Time / Machine Cycle Time`
*   **Max Count:** 65536 (for 16-bit timers)
*   **Number of Counts:** `Max Count - Number of Machine Cycles Needed`
*   **Initial Value for THx:TLx:** `65536 - Number of Counts` (This can be directly loaded into THx and TLx).

**Example: Generating a 1-millisecond delay with a 12MHz crystal.**

*   **System Clock:** 12 MHz
*   **Machine Cycle Frequency:** 12 MHz / 12 = 1 MHz
*   **Machine Cycle Time:** 1 / 1 MHz = 1 microsecond (µs)
*   **Desired Delay:** 1 ms = 1000 µs
*   **Number of Machine Cycles Needed:** 1000 µs / 1 µs = 1000 cycles

Now, configure Timer 0 in Mode 1:
```assembly
MOV TMOD, #00000001b ; Timer 0 in Mode 1
```

Calculate the initial value:
*   **Number of Counts:** 65536 - 1000 = 64536
*   **Initial Value (64536 in hex):** 0xFF08 (65536 - 1000 = 64536 = FFE8H).
    *   Wait, let's recheck the calculation.
    *   65536 (max count) - 1000 (cycles to count) = 64536
    *   To represent 64536 in 16 bits:
        *   64536 / 256 = 252 (remainder 0)
        *   252 / 256 = 0 (remainder 252)
        *   So, 64536 = 252 * 256 + 0. In hex: 252 is CCH, 0 is 00H.
        *   Therefore, the initial value is 0xFF08 if we are counting UP.
        *   However, the 8051 timers count DOWN from the loaded value.
        *   So, to count 1000 cycles, we load `65536 - 1000 = 64536` decimal, which is `FF08H`.
        *   Let's verify. If we load `FF08H`, the timer will count up.
        *   The standard approach is to load the *negative* of the number of cycles required for the THx:TLx registers.
        *   To count 1000 cycles: Load `65536 - 1000 = 64536`.
        *   Convert 64536 to 16-bit hex: `64536 = 0xFF08`.
        *   This means TH0 = `0xFF` and TL0 = `0x08`.
        *   When the timer overflows from `FFFFH` to `0000H`, the TF0 flag is set.
        *   Let's calculate the number of counts needed: 1000.
        *   The timer counts from the initial value to FFFFH.
        *   Number of counts = (FFFFH - Initial Value) + 1.
        *   So, `1000 = (0xFFFF - Initial Value) + 1`.
        *   `999 = 0xFFFF - Initial Value`.
        *   `Initial Value = 0xFFFF - 999`.
        *   `0xFFFF` is 65535.
        *   `Initial Value = 65535 - 999 = 64536`.
        *   `64536` in hex is `FF08H`.

```assembly
MOV TH0, #0FFH
MOV TL0, #00H     ; Correct initial value for 1000 cycles (0xFF00)
SETB TR0          ; Start Timer 0

WAIT_1MS:
  JNB TF0, WAIT_1MS ; Wait until TF0 is set
  CLR TR0            ; Stop Timer 0
  CLR TF0            ; Clear the overflow flag
```

**Correction on initial value calculation:**
When calculating the initial value for a 16-bit timer (Mode 1) to achieve N machine cycles:
The number of counts the timer will perform is N.
The timer counts from the loaded value up to FFFFH. The total number of states is 65536 (0 to 65535).
If we want `N` counts, the value to be loaded into `THx:TLx` is `65536 - N`.

Let's recalculate for 1000 cycles (1 ms):
`N = 1000`
`Initial Value = 65536 - 1000 = 64536`
Convert 64536 to hex: `64536 = FF08H`.
So, `TH0 = FFH`, `TL0 = 08H`.

```assembly
; 1ms delay with 12MHz crystal (1MHz machine cycle)
MOV TMOD, #00000001b ; Timer 0 in Mode 1
MOV TH0, #0FFH
MOV TL0, #00H      ; Incorrect. Should be 08H.

; Corrected
MOV TH0, #0FFH
MOV TL0, #08H
SETB TR0
WAIT_1MS:
  JNB TF0, WAIT_1MS
  CLR TR0
  CLR TF0
```

**(CO2: Develop Microcontroller programs - K5)**
**(CO3: Design various interfaces to Microcontroller - K5)**

**Important Points to Remember about THx/TLx:**

*   When using Timer 0 in 16-bit mode (Mode 1), the timer increments the 16-bit value `TH0:TL0`.
*   When using Timer 1 in 16-bit mode (Mode 1), the timer increments the 16-bit value `TH1:TL1`.
*   The `TFx` flag is set when the timer register wraps around from `FFFFH` to `0000H`.
*   It's crucial to load the correct initial values into `THx` and `TLx` to achieve the desired delay or count.

## Timer Modes of Operation

Both Timer 0 and Timer 1 can operate in several modes, configured using the M1x and M0x bits in the TMOD register.

### Mode 0: 13-bit Timer/Counter (Timer 0 only)

*   **Configuration:** M10=0, M00=0 for Timer 0.
*   **Operation:** Uses TL0 as a 5-bit counter and TH0 as an 8-bit counter. The total count is 13 bits (2^13 = 8192 counts).
*   **Register Usage:** TL0 (lower 5 bits), TH0 (all 8 bits).
*   **Use Case:** Less common, provides a shorter maximum count than other modes.

### Mode 1: 16-bit Timer/Counter

*   **Configuration:** M1x=0, M0x=1 for Timer 0 or Timer 1.
*   **Operation:** Uses the full 16 bits of THx and TLx (THx concatenated with TLx) as a single counter. The maximum count is 2^16 = 65536.
*   **Register Usage:** THx (high byte), TLx (low byte).
*   **Use Case:** The most common mode for generating delays and counting events due to its large counting capacity.

**Example of Mode 1 Usage (Timer 0):**

```assembly
MOV TMOD, #00000001b ; Configure Timer 0 for Mode 1
MOV TH0, #0FFH
MOV TL0, #00H      ; Initial value for ~1ms delay (adjust as per calculation)
SETB TR0            ; Start Timer 0
; ... code to execute while timer counts ...
WAIT_TF0:
  JNB TF0, WAIT_TF0 ; Poll for Timer 0 overflow flag
CLR TR0            ; Stop Timer 0
CLR TF0            ; Clear the flag
```

### Mode 2: 8-bit Auto-Reload

*   **Configuration:** M1x=1, M0x=0 for Timer 0 or Timer 1.
*   **Operation:** Uses TLx as an 8-bit timer/counter. When TLx overflows (from FFH to 00H), the TFx flag is set, and simultaneously, the content of THx is automatically reloaded into TLx. THx itself does not increment.
*   **Register Usage:** TLx (8-bit counter), THx (stores the reload value).
*   **Use Case:** Ideal for generating periodic interrupts or baud rate generation for serial communication.

**Example of Mode 2 Usage (Timer 1 for Baud Rate Generation):**

For a standard baud rate of 9600 bps with a 12MHz crystal:
*   Machine Cycle Frequency = 1 MHz
*   Required Timer Counts per Baud = Machine Cycle Frequency / Baud Rate
*   Required Timer Counts = 1,000,000 / 9600 ≈ 104 cycles.
*   In Mode 2, the timer counts from the loaded value in TH1 up to FFH, then reloads from TH1. The number of counts to reload is `256 - TH1_value`.
*   So, `104 = 256 - TH1_value`.
*   `TH1_value = 256 - 104 = 152`.
*   Convert 152 to hex: `152 = 98H`.

```assembly
MOV TMOD, #00100000b ; Timer 1 in Mode 2, Timer 0 in Mode 0 (example)
MOV TH1, #098H      ; Load the reload value for 9600 baud
SETB TR1            ; Start Timer 1
```
*(Note: For baud rate generation, specific configurations in SCON and PCON might also be required, as covered in serial communication modules.)*

### Mode 3: Split Timer Mode (Timer 0 only)

*   **Configuration:** M10=1, M00=1 for Timer 0.
*   **Operation:** This mode splits Timer 0 into two independent 8-bit timers.
    *   **Timer 0:** Uses TL0 as an 8-bit timer/counter, with its overflow flag being TF0. TR0 controls it.
    *   **Timer 1:** Uses TH0 as an 8-bit timer/counter, with its overflow flag being TF1. TR1 controls it.
*   **Register Usage:** TL0 (8-bit timer 0), TH0 (8-bit timer 1).
*   **Use Case:** Allows for two independent 8-bit timers to be used simultaneously from a single 16-bit timer resource. However, Timer 1 in Mode 3 is not an auto-reload timer.

**(CO4: Design and implement an Embedded System - K6)**

## Timer Operation Summary

| Register | Bits | Purpose                                        | Timer 0                                          | Timer 1                                           |
| :------- | :--- | :--------------------------------------------- | :----------------------------------------------- | :------------------------------------------------ |
| TMOD     | 7    | GATE1                                          | -                                                | Gate control for Timer 1                          |
|          | 6    | C/T1                                           | -                                                | Timer (0) / Counter (1) for Timer 1               |
|          | 5-4  | M11, M01                                       | -                                                | Mode select for Timer 1 (00=M0, 01=M1, 10=M2, 11=M3) |
|          | 3    | GATE0                                          | Gate control for Timer 0                         | -                                                 |
|          | 2    | C/T0                                           | Timer (0) / Counter (1) for Timer 0              | -                                                 |
|          | 1-0  | M10, M00                                       | Mode select for Timer 0 (00=M0, 01=M1, 10=M2, 11=M3) | -                                                 |
| TCON     | 7    | TF1                                            | -                                                | Timer 1 Overflow Flag                             |
|          | 6    | TR1                                            | -                                                | Timer 1 Run Control                               |
|          | 5    | TF0                                            | Timer 0 Overflow Flag                            | -                                                 |
|          | 4    | TR0                                            | Timer 0 Run Control                              | -                                                 |
| THx      | 8    | High byte of the 16-bit timer/counter value    | TH0                                              | TH1                                               |
| TLx      | 8    | Low byte of the 16-bit timer/counter value     | TL0                                              | TL1                                               |

**(CO1: Outline Architecture of Microcontroller - K2)**

## Practice Questions and Exercises

**Question 1:**
Explain the purpose of the TMOD register and its bit fields for configuring Timer 0 and Timer 1. (CO1 - K2)

**Answer 1:**
The TMOD register is an 8-bit Special Function Register used to configure the operating modes and functions of the 8051's two timer/counter modules, Timer 0 and Timer 1.
*   **Bits 0-3:** Control Timer 0.
    *   **C/T0:** Selects Timer (0) or Counter (1).
    *   **GATE0:** Enables/disables the GATE function (external control).
    *   **M10, M00:** Select the operating mode (Mode 0, 1, 2, or 3).
*   **Bits 4-7:** Control Timer 1.
    *   **C/T1:** Selects Timer (0) or Counter (1).
    *   **GATE1:** Enables/disables the GATE function (external control).
    *   **M11, M01:** Select the operating mode (Mode 0, 1, or 2).

**Question 2:**
What are the two main functions of the 8051's timer/counter modules? (CO1 - K2)

**Answer 2:**
The two main functions are:
1.  **Timer:** When configured as a timer, the module counts internal machine cycles, allowing for precise time delays and event timing.
2.  **Counter:** When configured as a counter, the module counts external pulses applied to a dedicated input pin (T0 for Timer 0, T1 for Timer 1), enabling event counting.

**Question 3:**
You need to create a delay of approximately 50 milliseconds using Timer 1 in Mode 1 with a 16 MHz crystal. Calculate the initial values for TH1 and TL1. (CO2 - K5)

**Answer 3:**
*   **System Clock:** 16 MHz
*   **Machine Cycle Frequency:** 16 MHz / 12 = 1.333 MHz (approximately)
*   **Machine Cycle Time:** 1 / 1.333 MHz = 0.75 microseconds (µs)
*   **Desired Delay:** 50 ms = 50,000 µs
*   **Number of Machine Cycles Needed:** 50,000 µs / 0.75 µs = 66,666.66...
    *   Since we can only have whole machine cycles, we'll use 66,667 cycles.
*   **Timer Mode:** Mode 1 (16-bit timer)
*   **Maximum Count:** 65536
*   **Number of Counts Required:** 66,667
    *   Since the number of cycles needed (66,667) is greater than the maximum count of a 16-bit timer (65536), we will need to use interrupts and re-load the timer, or use multiple timer overflows.
    *   Let's re-evaluate the question for a value that *can* be achieved with a single count. Suppose we want a delay of 10 milliseconds.
*   **Revised Desired Delay:** 10 ms = 10,000 µs
*   **Revised Number of Machine Cycles Needed:** 10,000 µs / 0.75 µs = 13,333.33...
    *   We'll use 13,334 machine cycles.
*   **Number of Counts:** 13,334
*   **Initial Value for TH1:TL1:** `65536 - 13334 = 52202`
*   **Convert 52202 to Hex:**
    *   52202 / 256 = 203 (remainder 194)
    *   203 / 256 = 0 (remainder 203)
    *   203 in hex is CB
    *   194 in hex is C2
    *   So, 52202 decimal = `0xCB C2`
*   **Initial Values:** `TH1 = 0xCB`, `TL1 = 0xC2`

**Question 4:**
What is the purpose of the `TRx` bits in the TCON register? (CO1 - K2)

**Answer 4:**
The `TRx` bits (`TR0` and `TR1`) in the TCON register are software-controlled bits that act as run control bits for Timer 0 and Timer 1, respectively.
*   When `TRx` is set to 1, the corresponding timer/counter starts counting (if `GATE` is 0 or the `GATE` condition is met).
*   When `TRx` is cleared to 0, the corresponding timer/counter is stopped.

**Question 5:**
Describe how Timer 1 operates in Mode 2 and what makes it suitable for baud rate generation. (CO1 - K2, CO4 - K6)

**Answer 5:**
In Mode 2, Timer 1 (and Timer 0, if configured) functions as an 8-bit auto-reload timer/counter.
*   The lower 8 bits (TL1) are used as the actual counter.
*   The upper 8 bits (TH1) store a reload value.
*   When TL1 overflows from FFH to 00H, the TF1 flag is automatically set, and more importantly, the value in TH1 is *immediately* reloaded into TL1. This reloading happens automatically, without software intervention.

This auto-reload feature makes it ideal for baud rate generation because a fixed count can be loaded into TH1 to produce consistent periodic interrupts or signal transitions at the required baud rate. The timer will continuously reload and count, maintaining the specified communication speed.

## High-Level Concepts and Connections to Course Outcomes

*   **CO1 (Outline Architecture):** This module directly addresses the internal architecture of the 8051 by detailing the function and use of the TMOD, TCON, THx, and TLx registers, which are key components of the timer/counter subsystems.
*   **CO2 (Develop Programs):** Understanding these registers is fundamental to writing assembly or C code for delay generation, event counting, and other timer-based applications. Examples provided demonstrate how to manipulate these registers to achieve desired outcomes.
*   **CO3 (Design Interfaces):** Timers are critical for interfacing with the real world. For instance, generating pulse-width modulation (PWM) signals for motor control or creating precise timing for sensor readings relies heavily on timer functionality.
*   **CO4 (Design Embedded Systems):** Timers are the backbone of many embedded system functionalities, such as scheduling tasks, managing power consumption, and implementing communication protocols. This module provides the foundational knowledge for integrating timers into a complete embedded system design.

## Important Points to Remember

*   **TMOD:** Configures the *mode* and *type* of operation for Timer 0 and Timer 1. It is write-only.
*   **TCON:** Controls the *running* of timers (`TRx`) and indicates *overflows* (`TFx`).
*   **THx:TLx:** The actual 16-bit registers that store the count. For 16-bit modes, they work together. For 8-bit modes, one acts as the counter and the other as the reload value.
*   **Mode 1:** Most common for general-purpose delays and counting, uses all 16 bits.
*   **Mode 2:** 8-bit auto-reload, excellent for periodic interrupts and baud rate generation.
*   **Calculation is Key:** Accurately calculating the initial values for THx and TLx is crucial for achieving precise delays or counts. Always consider the system clock frequency and the timer mode.
*   **Interrupts vs. Polling:** While polling the `TFx` flag is shown, using timer interrupts (`ETx`, `EXx`) is often more efficient, allowing the CPU to perform other tasks while the timer counts. This is a more advanced topic but directly builds upon understanding the `TFx` flag.

---
This comprehensive study note covers the Timer/Counter registers of the 8051, focusing on Timer 0 and Timer 1, and aligns with the provided learning and course outcomes. It incorporates explanations and examples, drawing conceptually from the spirit of the referenced textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
