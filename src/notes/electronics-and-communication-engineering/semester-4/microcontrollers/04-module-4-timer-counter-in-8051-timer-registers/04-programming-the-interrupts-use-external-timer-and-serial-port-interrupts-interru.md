---
title: "Programming the interrupts: Use external, timer and serial port 
interrupts. Interrupt priority settings."
subject: "MICROCONTROLLERS"
module: "Module 4: Timer / Counter in 8051: Timer registers "
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5a4"
status: "completed"
scrapedAt: "2026-05-23T17:51:09.747Z"
---
# MICROCONTROLLERS: Module 4 - Timer/Counter in 8051: Timer Registers & Interrupt Programming

---

## Module 4 Overview: Timer/Counter in 8051: Timer Registers & Interrupt Programming

This module delves into the crucial functionality of timers and counters within the 8051 microcontroller. We will explore how these hardware components can be programmed to perform various timing-related tasks and how to leverage their interrupt capabilities for efficient event handling. This builds upon the foundational knowledge of the 8051 architecture (CO1) and is essential for developing microcontroller programs (CO2) and designing embedded systems (CO4).

---

## 1. Introduction to Timers/Counters in the 8051

The 8051 microcontroller features two versatile 16-bit timer/counters, Timer 0 and Timer 1. These can be configured to operate as either:

*   **Timers:** Generating time delays or measuring time intervals by counting internal machine cycles.
*   **Counters:** Counting external events that occur on dedicated input pins.

**Key Concepts:**

*   **Machine Cycle:** The smallest unit of time in the 8051, consisting of six oscillator periods. For a standard 11.0592 MHz crystal, one machine cycle is approximately 1.085 microseconds.
*   **Timer/Counter Registers:** Special Function Registers (SFRs) that control the operation and store the count value of the timers.

**Textbook Reference:**

*   **Mazidi, Mazidi, McKinlay:** Chapter 6 extensively covers the 8051 timers and counters, explaining their modes of operation and control registers.
*   **Ayala, Gadre:** Chapter 5 provides a detailed account of timer modes and their applications.

---

## 2. Timer Registers

The operation of the 8051 timers is managed by several key registers. Understanding these registers is fundamental to programming the timers effectively.

### 2.1 Timer Mode Control Register (TMOD)

The TMOD register (SFR address `89H`) is an 8-bit register used to configure the operating modes of Timer 0 and Timer 1. Each timer has its own 4 bits within TMOD.

| Bit | Timer 1 | Timer 0 | Description                                           |
| :-- | :------ | :------ | :---------------------------------------------------- |
| 7   | **GATE** | **GATE** | Gating control: 0=Timer controlled by TL/TR bits; 1=Timer controlled by TL/TR bits AND INTx pin. |
| 6   | **C/T** | **C/T** | Counter/Timer select: 0=Timer mode; 1=Counter mode.  |
| 5   | **M1** | **M1** | Mode selection bit 1.                                 |
| 4   | **M0** | **M0** | Mode selection bit 0.                                 |
| 3   | **GATE** | (Unused) | -                                                     |
| 2   | **C/T** | (Unused) | -                                                     |
| 1   | **M1** | (Unused) | -                                                     |
| 0   | **M0** | (Unused) | -                                                     |

**Timer Modes (determined by M1 and M0 bits):**

*   **Mode 0 (00):** 13-bit Timer/Counter. TLx acts as a 5-bit prescaler, and THx/TLx (lower 8 bits) form a 8-bit timer/counter. Total count is 2^13 = 8192.
*   **Mode 1 (01):** 16-bit Timer/Counter. THx and TLx are concatenated to form a 16-bit timer/counter. Total count is 2^16 = 65536.
*   **Mode 2 (10):** 8-bit Auto-Reload. TLx is an 8-bit timer/counter. When TLx overflows, THx is automatically loaded into TLx. THx holds the reload value.
*   **Mode 3 (11):** Split Timer Mode (Timer 0 only). Timer 0 is split into two independent 8-bit timers. Timer 1 is effectively stopped in this mode.

**Example:** To configure Timer 0 in 16-bit timer mode with GATE=0 and Timer 1 in 8-bit auto-reload mode with GATE=0:

```assembly
MOV TMOD, #01000001B  ; Timer 0 Mode 1 (01), Timer 1 Mode 2 (10)
                      ; GATE bits are 0 for both
```

**Important Point:** The TMOD register must be configured *before* starting the timer.

**Textbook Reference:**

*   **Mazidi, Mazidi, McKinlay:** Section 6.1.1 details the TMOD register and its bit functions.
*   **Ayala, Gadre:** Section 5.1 discusses the TMOD register and its role in mode selection.

### 2.2 Timer Control Registers (TRx and TFx Flags)

*   **TRx (Timer Run Control Bits):**
    *   **TR0:** Bit 4 of the TCON register (SFR address `88H`). Setting TR0=1 starts Timer 0.
    *   **TR1:** Bit 6 of the TCON register. Setting TR1=1 starts Timer 1.
    *   **Clearing TRx=0 stops the respective timer.**

*   **TFx (Timer Overflow Flags):**
    *   **TF0:** Bit 5 of the TCON register. This flag is set to 1 by hardware when Timer 0 overflows (e.g., from `FFFFH` to `0000H` in Mode 1). It is cleared by hardware when the corresponding interrupt is serviced or by software.
    *   **TF1:** Bit 7 of the TCON register. This flag is set to 1 by hardware when Timer 1 overflows.

**Textbook Reference:**

*   **Mazidi, Mazidi, McKinlay:** Section 6.1.2 explains the TCON register, including TRx and TFx bits.
*   **Ayala, Gadre:** Section 5.1 describes the TCON register and the function of TRx and TFx bits.

### 2.3 Timer Data Registers (TLx and THx)

These are the actual registers that hold the count value for the timers.

*   **TL0 (Timer 0 Low Byte):** SFR address `8AH`
*   **TH0 (Timer 0 High Byte):** SFR address `8CH`
*   **TL1 (Timer 1 Low Byte):** SFR address `8BH`
*   **TH1 (Timer 1 High Byte):** SFR address `8DH`

In 16-bit timer/counter modes, TLx and THx are accessed together as a 16-bit value. For example, to load Timer 0 with a value:

```assembly
MOV TH0, #HIGH_VALUE
MOV TL0, #LOW_VALUE
```

**Textbook Reference:**

*   **Mazidi, Mazidi, McKinlay:** Section 6.1.3 details the TLx and THx registers and how they are used in different modes.
*   **Ayala, Gadre:** Section 5.2 discusses the use of TLx and THx registers for loading and reading timer values.

---

## 3. Programming the Timer Interrupts

Timers can be configured to generate interrupts when an overflow occurs. This allows the microcontroller to perform a specific task without continuous polling of the timer flags.

### 3.1 Interrupt Enable Register (IE)

The IE register (SFR address `0A8H`) controls the enabling and disabling of various interrupts in the 8051.

| Bit | Symbol | Description                                          |
| :-- | :----- | :--------------------------------------------------- |
| 7   | **EA** | Global Interrupt Enable: 1=Enable all interrupts; 0=Disable all interrupts. |
| 6   | **-**  | Reserved                                             |
| 5   | **ET2** | Timer 2 Interrupt Enable (not in standard 8051).     |
| 4   | **ES** | Serial Port Interrupt Enable.                        |
| 3   | **ET1** | Timer 1 Interrupt Enable.                            |
| 2   | **EX1** | External Interrupt 1 Enable.                         |
| 1   | **ET0** | Timer 0 Interrupt Enable.                            |
| 0   | **EX0** | External Interrupt 0 Enable.                         |

**To enable a timer interrupt:**

1.  Set the corresponding timer interrupt enable bit (ET0 or ET1) in the IE register.
2.  Enable the global interrupt enable bit (EA).

**Example:** To enable Timer 0 interrupts:

```assembly
SETB ET0    ; Enable Timer 0 interrupt
SETB EA     ; Enable Global Interrupts
```

**Important Point:** The EA bit must be set for any interrupt to be recognized.

**Textbook Reference:**

*   **Mazidi, Mazidi, McKinlay:** Section 7.1.2 explains the IE register and interrupt enabling.
*   **Ayala, Gadre:** Section 6.1 describes the IE register and the process of enabling interrupts.

### 3.2 Timer Interrupt Service Routines (ISRs)

When a timer overflow occurs and its interrupt is enabled, the 8051 automatically performs the following:

1.  **Clears the TFx flag (hardware).**
2.  **Sets the PC to the vector address of the interrupt.**
3.  **Pushes the current PC onto the stack.**

The vector addresses for timer interrupts are:

*   **Timer 0 Interrupt:** `000BH`
*   **Timer 1 Interrupt:** `001BH`

**ISR Structure:**

An Interrupt Service Routine (ISR) is a block of code that is executed when a specific interrupt occurs. It must:

1.  **Save the current context:** Preserve the values of registers used by the ISR.
2.  **Perform the required task:** Respond to the interrupt event.
3.  **Restore the context:** Reload the saved register values.
4.  **Return from interrupt:** Use the `RETI` instruction to return control to the main program and pop the PC from the stack.

**Example: Timer 0 ISR for blinking an LED every 100ms (assuming 11.0592 MHz crystal)**

*   **Goal:** Blink an LED connected to P1.0 every 100ms.
*   **Timer Mode:** Mode 1 (16-bit timer) for Timer 0.
*   **Timer Frequency:** Machine cycles = 1.085 $\mu$s.
*   **Desired Delay:** 100ms = 100,000 $\mu$s.
*   **Number of machine cycles:** 100,000 $\mu$s / 1.085 $\mu$s/cycle $\approx$ 92160 cycles.
*   **Timer Count:** Max count is 65536. We need to divide the delay by the timer's maximum count to find how many overflows are needed.
*   **For a 100ms delay, one overflow is not enough. We need to compute the initial timer value to achieve a specific delay per overflow.**
    *   Let's calculate the timer value for a specific delay. Suppose we want a delay of roughly 10ms per timer overflow.
    *   10ms = 10,000 $\mu$s.
    *   Number of machine cycles for 10ms = 10,000 $\mu$s / 1.085 $\mu$s/cycle $\approx$ 9216 cycles.
    *   Timer initial value = 65536 - 9216 = 56320.
    *   In hex: 56320 = 0xDAF0.
    *   TH0 = 0xDA, TL0 = 0xF0.
    *   With a 10ms delay per overflow, we need 10 overflows for 100ms. This means the ISR needs to count overflows.

```assembly
; --- Main Program ---
ORG 0000H
    MOV SP, #60H       ; Initialize stack pointer
    MOV TMOD, #01H     ; Timer 0 in Mode 1 (16-bit timer)
    MOV TH0, #0DAH     ; Load initial value for ~10ms delay (0xDAF0)
    MOV TL0, #0F0H
    SETB ET0           ; Enable Timer 0 interrupt
    SETB EA            ; Enable Global Interrupts
    SETB P1.0          ; Initialize LED to OFF

LOOP:
    CPL P1.0           ; Toggle LED
    ACALL DELAY_100MS  ; Call delay routine (or wait for interrupt)
    SJMP LOOP

; --- Delay Subroutine (if not using ISR for delay) ---
;DELAY_100MS:
;    ; Code to wait for 10 timer overflows to achieve 100ms
;    ; This would involve a counter variable in the ISR or main loop.
;    RET

; --- Timer 0 Interrupt Service Routine ---
ORG 000BH           ; Vector address for Timer 0 interrupt
ISR_TIMER0:
    PUSH ACC        ; Save ACC
    PUSH PSW        ; Save PSW

    ; Reload timer for next interrupt
    MOV TH0, #0DAH
    MOV TL0, #0F0H

    ; LED blinking logic handled in main loop or here
    ; For simpler interrupt-driven blinking, toggling can happen here
    ; CPL P1.0

    POP PSW         ; Restore PSW
    POP ACC         ; Restore ACC
    RETI            ; Return from interrupt

END
```

**Refined Example (ISR directly controls LED):**

```assembly
; --- Main Program ---
ORG 0000H
    MOV SP, #60H       ; Initialize stack pointer
    MOV TMOD, #01H     ; Timer 0 in Mode 1 (16-bit timer)
    MOV TH0, #0DAH     ; Load initial value for ~10ms delay (0xDAF0)
    MOV TL0, #0F0H
    SETB ET0           ; Enable Timer 0 interrupt
    SETB EA            ; Enable Global Interrupts
    SETB P1.0          ; Initialize LED to OFF

    ; Main program does other tasks or waits indefinitely
WAIT:
    SJMP WAIT

; --- Timer 0 Interrupt Service Routine ---
ORG 000BH           ; Vector address for Timer 0 interrupt
ISR_TIMER0:
    PUSH ACC        ; Save ACC
    PUSH PSW        ; Save PSW

    ; Reload timer for next interrupt
    MOV TH0, #0DAH
    MOV TL0, #0F0H

    ; Toggle LED every 10ms (total 100ms blink cycle)
    ; This will blink the LED at 100Hz (10ms ON, 10ms OFF = 20ms period)
    CPL P1.0

    POP PSW         ; Restore PSW
    POP ACC         ; Restore ACC
    RETI            ; Return from interrupt

END
```

**Textbook Reference:**

*   **Mazidi, Mazidi, McKinlay:** Chapter 7 on Interrupts, and specifically Sections 6.2.1-6.2.3 for Timer 0 and Timer 1 interrupts.
*   **Ayala, Gadre:** Chapter 6 on Interrupts, and Section 5.3 on timer interrupts.

---

## 4. Programming External Interrupts

The 8051 microcontroller has two external interrupt pins:

*   **INT0:** P3.2 (Pin 24)
*   **INT1:** P3.3 (Pin 25)

These interrupts can be configured to be triggered by a **level** or an **edge**.

### 4.1 External Interrupt Control Bits (ITx)

These bits are part of the TCON register (SFR address `88H`).

| Bit | Symbol | Description                                                    |
| :-- | :----- | :------------------------------------------------------------- |
| 3   | **IT0** | Interrupt 0 Type: 0=Low-level triggered; 1=High-level triggered. (This is incorrect for 8051. IT0/IT1 control edge/level trigger. 0 = edge, 1 = level) |
| 1   | **IT1** | Interrupt 1 Type: 0=Low-level triggered; 1=High-level triggered. (This is incorrect for 8051. IT0/IT1 control edge/level trigger. 0 = edge, 1 = level) |

**Correction based on standard 8051 behavior:**

*   **IT0 (Bit 3 of TCON):**
    *   `IT0 = 0`: External Interrupt 0 (INT0) is **edge-triggered**. The interrupt is generated when INT0 goes from high to low.
    *   `IT0 = 1`: External Interrupt 0 (INT0) is **level-triggered**. The interrupt is generated when INT0 is held low.

*   **IT1 (Bit 1 of TCON):**
    *   `IT1 = 0`: External Interrupt 1 (INT1) is **edge-triggered**. The interrupt is generated when INT1 goes from high to low.
    *   `IT1 = 1`: External Interrupt 1 (INT1) is **level-triggered**. The interrupt is generated when INT1 is held low.

**Vector Addresses for External Interrupts:**

*   **External Interrupt 0 (INT0):** `0003H`
*   **External Interrupt 1 (INT1):** `0013H`

**Enabling External Interrupts:**

1.  Configure the `ITx` bit in TCON for the desired trigger type.
2.  Set the corresponding `EXx` bit in the IE register.
3.  Set the global interrupt enable bit (EA).

**Example: Handling a button press on INT0 (edge-triggered)**

```assembly
; --- Main Program ---
ORG 0000H
    MOV SP, #60H       ; Initialize stack pointer
    MOV TMOD, #00H     ; Not using timers in this example

    ; Configure INT0 as edge-triggered
    CLR IT0            ; INT0 is edge-triggered (falling edge)

    ; Enable INT0 interrupt
    SETB EX0           ; Enable External Interrupt 0
    SETB EA            ; Enable Global Interrupts

    ; Initialize port P1.0 (e.g., for an LED)
    SETB P1.0

WAIT_FOR_INTERRUPT:
    SJMP WAIT_FOR_INTERRUPT ; Wait indefinitely for interrupts

; --- External Interrupt 0 Service Routine ---
ORG 0003H           ; Vector address for INT0
ISR_INT0:
    PUSH ACC
    PUSH PSW

    ; Toggle the LED when INT0 is triggered (button pressed)
    CPL P1.0

    POP PSW
    POP ACC
    RETI

END
```

**Textbook Reference:**

*   **Mazidi, Mazidi, McKinlay:** Chapter 7.2 discusses external interrupts and the ITx bits.
*   **Ayala, Gadre:** Chapter 6.2 covers external interrupts and their configuration.

---

## 5. Programming the Serial Port Interrupts

The 8051 has a built-in UART (Universal Asynchronous Receiver/Transmitter) for serial communication. It can generate interrupts for two main events:

*   **RI (Receive Interrupt):** Set when a byte is received completely.
*   **TI (Transmit Interrupt):** Set when a byte has been transmitted completely.

### 5.1 Serial Port Control Registers (SCON and SBUF)

*   **SCON (Serial Control Register):** SFR address `98H`

| Bit | Symbol | Description                                                                                                                                                              |
| :-- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7   | **SM0** | Serial Port Mode bits. Defines baud rate and data format.                                                                                                                |
| 6   | **SM1** | (SM0, SM1 together define mode: 00=Mode 0, 01=Mode 1, 10=Mode 2, 11=Mode 3)                                                                                             |
| 5   | **SM2** | Enables the 9-bit serial mode (Mode 2) or multiprocessor communication.                                                                                                  |
| 4   | **REN** | Receive Enable: 1=Enable Serial Port Reception.                                                                                                                          |
| 3   | **TB8** | Transmit Bit 8 (for Mode 2 and 3).                                                                                                                                       |
| 2   | **RB8** | Receive Bit 8 (for Mode 2 and 3). Indicates if the 9th bit was received.                                                                                                 |
| 1   | **TI**  | Transmit Interrupt Flag: Set by hardware upon completion of transmission. Cleared by software.                                                                           |
| 0   | **RI**  | Receive Interrupt Flag: Set by hardware upon completion of reception. Cleared by software.                                                                               |

*   **SBUF (Serial Buffer Register):** SFR address `99H`
    *   This is a dual-purpose register. Writing to SBUF transmits data, and reading from SBUF receives data. The hardware automatically transfers data between SBUF and the serial shifter.

### 5.2 Enabling Serial Port Interrupts

1.  Configure the serial port mode in SCON (SM0, SM1, SM2, REN).
2.  Set the **TI** and/or **RI** flags in SCON when the respective event occurs.
3.  Set the **ES** bit in the IE register to enable serial port interrupts.
4.  Set the global interrupt enable bit (EA).

**Example: Receiving a byte using serial interrupt**

```assembly
; --- Main Program ---
ORG 0000H
    MOV SP, #60H       ; Initialize stack pointer

    ; Configure Serial Port for Mode 1 (10-bit, 8-bit data, variable baud rate)
    MOV SCON, #50H     ; SM0=0, SM1=1 (Mode 1), REN=1 (Receive Enable), TI=0, RI=0

    ; Enable Serial Port Interrupt
    SETB ES            ; Enable Serial Port Interrupt
    SETB EA            ; Enable Global Interrupts

    ; Initialize a buffer for received data
    MOV DPH, #00H      ; Using DPH/DPL as a simple buffer pointer (not ideal)
    MOV DPL, #00H

    ; Initialize Port P1.0 for feedback
    SETB P1.0

WAIT_FOR_RX:
    SJMP WAIT_FOR_RX   ; Wait for serial data

; --- Serial Port Receive Interrupt Service Routine ---
ORG 0023H           ; Vector address for Serial Port interrupt (RI/TI)
ISR_SERIAL:
    PUSH ACC
    PUSH PSW

    ; Check if the interrupt is due to reception (RI flag)
    JNB RI, SKIP_RX ; If RI is not set, skip to SKIP_RX

    ; Received a byte
    MOV P1.0, #0       ; Turn off LED (e.g., indicate reception)

    MOV A, SBUF        ; Read the received byte from SBUF
    ; Store received byte (e.g., to a buffer)
    ; MOV @DPTR, A
    ; INC DPTR

    ; Process the received byte if needed

    CLR RI             ; Clear the Receive Interrupt flag

SKIP_RX:
    ; Check if the interrupt is due to transmission completion (TI flag)
    JNB TI, END_ISR  ; If TI is not set, skip to END_ISR

    ; Transmission completed
    ; Could be used to send the next byte

    CLR TI             ; Clear the Transmit Interrupt flag

END_ISR:
    POP PSW
    POP ACC
    RETI

END
```

**Important Notes on Serial Interrupts:**

*   The serial port interrupt vector (`0023H`) serves both RI and TI flags. The ISR must check which flag caused the interrupt.
*   The `RETI` instruction is crucial for serial port interrupts.

**Textbook Reference:**

*   **Mazidi, Mazidi, McKinlay:** Chapter 8 covers serial port operations and interrupts.
*   **Ayala, Gadre:** Chapter 7 discusses serial communication and its interrupt handling.

---

## 6. Interrupt Priority Settings

The 8051 supports two levels of interrupt priority: **high** and **low**. This allows for more sophisticated interrupt handling when multiple interrupts can occur simultaneously.

### 6.1 Interrupt Priority Control Bits (PX0 and PX1)

These bits are part of the IP (Interrupt Priority) register (SFR address `B8H`).

| Bit | Symbol | Description                                           |
| :-- | :----- | :---------------------------------------------------- |
| 7   | **-**  | Reserved                                              |
| 6   | **PT2**| Timer 2 Priority (not in standard 8051).              |
| 5   | **PS** | Serial Port Interrupt Priority: 1=High; 0=Low.        |
| 4   | **PT1**| Timer 1 Interrupt Priority: 1=High; 0=Low.          |
| 3   | **PX1**| External Interrupt 1 Priority: 1=High; 0=Low.       |
| 2   | **PT0**| Timer 0 Interrupt Priority: 1=High; 0=Low.          |
| 1   | **PX0**| External Interrupt 0 Priority: 1=High; 0=Low.       |
| 0   | **-**  | Reserved                                              |

**Priority Rules:**

*   **High priority interrupts can interrupt low priority interrupts.**
*   **Low priority interrupts cannot interrupt other low priority interrupts** that are already being serviced.
*   **High priority interrupts can interrupt other high priority interrupts** if they are enabled.
*   An interrupt service routine should not enable lower priority interrupts while it is running, unless explicit priority handling is desired.

**Setting Priority:**

To set an interrupt to high priority, set its corresponding `PX` or `PT` bit in the IP register to 1. Otherwise, it remains low priority (default).

**Example: Setting Timer 0 to high priority and Serial Port to low priority.**

```assembly
MOV IP, #04H      ; Set PT0 to 1 (high priority for Timer 0)
                  ; PS is 0 (low priority for Serial Port)
                  ; Other priority bits are 0 (low priority)
```

**Textbook Reference:**

*   **Mazidi, Mazidi, McKinlay:** Chapter 7.3 covers interrupt priority and the IP register.
*   **Ayala, Gadre:** Chapter 6.3 explains interrupt priority levels and their control.

---

## 7. Practice Questions & Exercises

**Question 1:**
Configure Timer 1 of the 8051 to operate in 16-bit timer mode. If the timer is loaded with `0x1234`, what will be the value of the timer after 100 machine cycles? Write the assembly code to load the timer.

**Answer 1:**
*   **Mode:** 16-bit timer mode is Mode 1.
*   **TMOD Configuration:** For Timer 1 in Mode 1, with GATE=0, C/T=0, M1=0, M0=1. This corresponds to binary `00010000` or hexadecimal `10H`.
*   **Loading the timer:**
    ```assembly
    MOV TMOD, #010H    ; Configure Timer 1 in Mode 1
    MOV TH1, #012H     ; Load high byte
    MOV TL1, #034H     ; Load low byte
    ```
*   **Value after 100 machine cycles:** The timer will increment by 100.
    *   Initial value: `0x1234` = 4660 (decimal)
    *   New value: 4660 + 100 = 4760 (decimal)
    *   In hexadecimal: 4760 = `0x1298`
    *   So, TH1 will be `0x12` and TL1 will be `0x98`.

**Question 2:**
Write an 8051 assembly program to generate a delay of approximately 50ms using Timer 0. Assume an 11.0592 MHz crystal oscillator. The program should toggle an LED connected to P1.5 at a rate of 1Hz (once every second).

**Answer 2:**
*   **Crystal Frequency:** 11.0592 MHz
*   **Machine Cycle Frequency:** 11.0592 MHz / 12 = 921.6 KHz
*   **Machine Cycle Period:** 1 / 921.6 KHz $\approx$ 1.085 $\mu$s
*   **Desired Delay:** 50ms = 50,000 $\mu$s
*   **Number of machine cycles for 50ms:** 50,000 $\mu$s / 1.085 $\mu$s/cycle $\approx$ 46080 cycles.
*   **Timer Mode:** Mode 1 (16-bit timer). Max count = 65536.
*   **Timer initial value:** 65536 - 46080 = 19456.
*   **Initial value in Hex:** 19456 = `0x4C00`. So, TH0 = `0x4C`, TL0 = `0x00`.
*   **LED Toggle Rate:** 1Hz means toggling every 500ms (ON for 500ms, OFF for 500ms).
*   **Required Timer Interrupts:** Since each timer interrupt provides a 50ms delay, we need 500ms / 50ms = 10 interrupts. We will use a counter within the ISR.

```assembly
; --- Main Program ---
ORG 0000H
    MOV SP, #60H       ; Initialize stack pointer
    MOV TMOD, #01H     ; Timer 0 in Mode 1 (16-bit timer)

    ; Initialize LED
    SETB P1.5

    ; Enable Timer 0 Interrupt
    SETB ET0           ; Enable Timer 0 interrupt
    SETB EA            ; Enable Global Interrupts

    ; Load initial timer value for 50ms delay
    MOV TH0, #04CH
    MOV TL0, #00H

    ; Start Timer 0
    SETB TR0

WAIT:
    SJMP WAIT          ; Main program waits

; --- Timer 0 Interrupt Service Routine ---
ORG 000BH           ; Vector address for Timer 0 interrupt
ISR_TIMER0:
    PUSH ACC
    PUSH PSW

    ; Counter for 10 interrupts (500ms)
    MOV A, 00H         ; Use a specific memory location for the counter
    MOV R0, 08H        ; Assuming R0 is used as a counter for 10 interrupts
                       ; A better approach is to use a dedicated memory location
                       ; Let's use 30H as the counter for this example.
    INC 30H
    CJNE 30H, #10, RELOAD_TIMER ; If counter not 10, just reload timer

    ; Reached 10 interrupts (500ms delay elapsed)
    CLR 30H            ; Reset the counter

    ; Toggle the LED
    CPL P1.5

RELOAD_TIMER:
    ; Reload timer for next 50ms delay
    MOV TH0, #04CH
    MOV TL0, #00H

    POP PSW
    POP ACC
    RETI

END
```

**Question 3:**
Describe the functionality of the GATE bit in the TMOD register. How can it be used to control a timer's operation using an external pin?

**Answer 3:**
The GATE bit in the TMOD register controls whether the timer's operation is exclusively managed by the TRx (timer run) bits or if it's also influenced by an external interrupt pin.

*   **GATE = 0:** The timer is controlled solely by the TRx bits. When TRx is set to 1, the timer starts counting. When TRx is cleared to 0, the timer stops.
*   **GATE = 1:** The timer is controlled by both the TRx bits and the corresponding external interrupt pin (INT0 for Timer 0, INT1 for Timer 1). For the timer to count, **both** the TRx bit must be 1 **and** the external interrupt pin (INT0 or INT1) must be HIGH. The timer stops counting when either TRx is cleared to 0 or the external interrupt pin goes LOW.

This allows for "gated" timer operation, where the timer only runs when a specific external condition is met. For example, to measure the duration of a pulse, you could set GATE=1, configure the external interrupt pin to detect the start of the pulse (e.g., rising edge), start the timer, and then use another interrupt to detect the end of the pulse and stop the timer.

**Question 4:**
What is the purpose of the `RETI` instruction in an interrupt service routine?

**Answer 4:**
The `RETI` (Return from Interrupt) instruction is essential for concluding an interrupt service routine (ISR). Its primary functions are:

1.  **Restoring the Program Counter (PC):** It pops the saved Program Counter value from the stack, which points to the instruction in the main program that was interrupted. This allows the main program to resume execution from where it left off.
2.  **Re-enabling Higher Priority Interrupts (if applicable):** In systems with interrupt priorities, `RETI` signals the microcontroller that the current interrupt service is complete. If a higher priority interrupt was pending and masked due to the current interrupt, `RETI` allows that higher priority interrupt to be serviced.

**Question 5:**
Explain the difference between edge-triggered and level-triggered external interrupts in the 8051. Which bits in TCON control this?

**Answer 5:**
The difference lies in how the interrupt signal is detected:

*   **Edge-Triggered:** The interrupt is generated only when a specific transition (edge) occurs on the external interrupt pin.
    *   For 8051's INT0/INT1 when `IT0`/`IT1` is **0**, it's a **falling edge** (high-to-low transition) that triggers the interrupt.
*   **Level-Triggered:** The interrupt is generated as long as the external interrupt pin is held at a specific logic level.
    *   For 8051's INT0/INT1 when `IT0`/`IT1` is **1**, it's a **low level** that keeps the interrupt request active. The 8051 will service the interrupt if the pin is low, and it will continue to service it until the pin goes high.

The bits in the TCON register that control this are:
*   **IT0 (Bit 3 of TCON):** Controls the trigger type for External Interrupt 0 (INT0).
*   **IT1 (Bit 1 of TCON):** Controls the trigger type for External Interrupt 1 (INT1).

---

## 8. Important Points to Remember

*   **Timer Modes:** Understand the four modes of the 8051 timers (13-bit, 16-bit, 8-bit auto-reload, split timer) and how to configure them using TMOD.
*   **Timer Operation:** The TRx bits in TCON start/stop the timers. TFx flags indicate overflows.
*   **Interrupt Enabling:** Always enable the global interrupt (EA) and the specific interrupt (ETx, EXx, ES) in the IE register.
*   **Vector Addresses:** Know the specific memory addresses for each interrupt type to place the ISRs correctly.
*   **ISR Structure:** Always save and restore registers used within an ISR. Use `RETI` to return.
*   **Baud Rate:** For serial communication, the baud rate is often determined by Timer 1 in Mode 2 (8-bit auto-reload). The reload value in TH1 determines the baud rate based on the system clock.
*   **Interrupt Priority:** Use the IP register to set high or low priority for interrupts, enabling nested interrupt handling. A higher priority interrupt can interrupt a lower priority one.
*   **Polling vs. Interrupts:** Interrupts are more efficient than polling as they allow the CPU to perform other tasks while waiting for an event.

---

## Alignment with Course Outcomes

*   **CO1: Outline Architecture of Microcontroller (Knowledge Level: K2)**
    *   This module's content directly relates to the internal peripherals (timers, serial port) and interrupt structure of the 8051, which are key architectural features.
*   **CO2: Develop Microcontroller programs (Knowledge Level: K5)**
    *   All programming examples and exercises in this module focus on writing assembly code to control timers, handle interrupts, and implement timing-based functionalities.
*   **CO3: Design various interfaces to Microcontroller (Knowledge Level: K5)**
    *   While not explicitly focusing on external hardware interfaces, the understanding of external interrupts (INT0, INT1) and timer-based signal generation is foundational for designing systems that interact with external devices.
*   **CO4: Design and implement an Embedded System (Knowledge Level: K6)**
    *   Timers and interrupts are core components of most embedded systems, enabling precise control, event-driven behavior, and efficient multitasking. This module provides the necessary knowledge to integrate these features into an embedded system design.

---
This comprehensive study guide covers the essential aspects of timer/counter registers and interrupt programming in the 8051 microcontroller, drawing from the specified textbooks and referencing their content. The practice questions and key takeaways are designed to reinforce learning and prepare for practical application.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
