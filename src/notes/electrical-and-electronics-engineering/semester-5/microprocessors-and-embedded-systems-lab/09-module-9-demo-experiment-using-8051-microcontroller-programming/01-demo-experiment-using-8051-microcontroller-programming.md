---
title: "Demo experiment using 8051 Microcontroller programming."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 9: Demo experiment using 8051 Microcontroller programming."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f364fd"
status: "completed"
scrapedAt: "2026-05-23T16:23:12.716Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS LAB

## Module 9: Demo Experiment using 8051 Microcontroller Programming

This module focuses on practical demonstration of 8051 microcontroller programming, solidifying the theoretical knowledge gained in previous modules. We will explore various programming techniques and their application in embedded systems design.

### Learning Outcomes:

Upon successful completion of this module, students will be able to:

*   **Understand the fundamental concepts of 8051 microcontroller programming.**
*   **Write and debug assembly language programs (ALPs) for common 8051 tasks.**
*   **Write and debug embedded C programs for the 8051 microcontroller.**
*   **Interface the 8051 with basic peripheral devices like LEDs, switches, and timers.**
*   **Develop simple microcontroller-based systems for practical applications.**

---

### 1. Introduction to 8051 Microcontroller Programming

The 8051 is an 8-bit microcontroller renowned for its versatility and widespread use in embedded systems. Its programming involves understanding its architecture, instruction set, and memory organization.

**Key Concepts:**

*   **Architecture:**
    *   **CPU:** Executes instructions.
    *   **Memory:**
        *   **Program Memory (ROM/Flash):** Stores the program instructions.
        *   **Data Memory (RAM):** Stores temporary data and variables. The 8051 has distinct Internal RAM (IRAM) and External RAM.
    *   **I/O Ports:** For communication with external devices (P0, P1, P2, P3).
    *   **Timers/Counters:** For generating delays, measuring time, and counting events.
    *   **Serial Port:** For serial communication.
    *   **Interrupt Controller:** Manages external and internal interrupts.
*   **Instruction Set:** A set of commands the microcontroller understands. The 8051 has a rich instruction set supporting data transfer, arithmetic, logical operations, control transfer, and bit manipulation.
*   **Assembly Language Programming (ALP):** A low-level programming language that uses mnemonics to represent machine instructions. It provides direct control over the hardware.
*   **Embedded C Programming:** A higher-level programming language tailored for embedded systems, offering more abstract and portable code compared to ALP.

**Referenced Content (Ayala, "The 8051 Microcontroller"):**

*   **Chapter 2: 8051 Microcontroller Architecture:** Provides a detailed explanation of the 8051's internal components, memory organization (especially internal RAM banks, SFRs, and external memory access), and the function of each I/O port.
*   **Chapter 3: Instruction Set and Assembling:** Covers the various instruction categories, addressing modes, and the process of assembling ALP code.

---

### 2. Assembly Language Programming (ALP) for the 8051

ALP allows for fine-grained control over the microcontroller, making it ideal for time-critical operations and direct hardware manipulation.

**Key Concepts & Instructions:**

*   **Data Transfer Instructions:**
    *   `MOV`: Move data between registers, memory locations, and immediate values.
        *   **Example:** `MOV A, #55H` (Move the immediate value 55H into the Accumulator 'A').
        *   **Example:** `MOV P1, A` (Move the content of Accumulator 'A' to Port 1).
    *   `PUSH`, `POP`: Push/pop data onto/from the stack.
*   **Arithmetic Instructions:**
    *   `ADD`: Addition.
    *   `SUB`: Subtraction.
    *   `MUL`: Multiplication.
    *   `DIV`: Division.
    *   `INC`, `DEC`: Increment/decrement.
*   **Logical Instructions:**
    *   `ANL`: Logical AND.
    *   `ORL`: Logical OR.
    *   `XRL`: Logical XOR.
    *   `CPL`: Complement (invert bits).
    *   `RL`, `RLC`: Rotate Accumulator Left/with Carry.
    *   `RR`, `RRC`: Rotate Accumulator Right/with Carry.
*   **Control Transfer Instructions:**
    *   `JMP`: Unconditional jump.
    *   `JC`, `JNC`: Jump on carry set/not set.
    *   `JZ`, `JNZ`: Jump on zero/not zero.
    *   `DJNZ`: Decrement and jump if not zero (used for loops).
        *   **Example:**
            ```assembly
            MOV R0, #10  ; Initialize counter
            LOOP_LABEL:
                ; ... operations ...
                DJNZ R0, LOOP_LABEL ; Decrement R0, jump if R0 is not zero
            ```
    *   `ACALL`, `LCALL`: Absolute/Long Call to a subroutine.
    *   `RET`, `RETI`: Return from subroutine/interrupt.
*   **Bit Manipulation Instructions:**
    *   `SETB`: Set bit.
    *   `CLR`: Clear bit.
    *   `CPL`: Complement bit.
    *   `JB`, `JNB`: Jump on bit set/not set.
*   **I/O Port Operations:**
    *   Accessing I/O ports directly using `MOV` instructions.
        *   **Example:** `MOV P1, #0FFH` (Set all bits of Port 1 to HIGH).

**Referenced Content (Mazidi, "The 8051 Microcontroller and Embedded Systems"):**

*   **Chapter 4: 8051 Instruction Set:** Provides a comprehensive list and explanation of all 8051 instructions, categorized by function. Focus on data transfer, arithmetic, logical, and jump instructions for basic experiments.
*   **Chapter 5: 8051 Assembly Language Programming:** Discusses various programming techniques, subroutines, and addressing modes in detail.

---

### 3. Embedded C Programming for the 8051

Embedded C offers a more structured and readable way to program the 8051, abstracting away some of the low-level details of assembly.

**Key Concepts & Constructs:**

*   **Data Types:** `int`, `char`, `unsigned int`, `sbit` (for individual bits).
*   **SFR Declarations:** Special Function Registers (SFRs) are mapped to memory addresses and can be accessed directly in C.
    *   **Example:** `sbit P1_0 = P1^0;` (Declare P1.0 as a single bit variable).
*   **I/O Port Operations in C:**
    *   Directly assigning values to port variables.
        *   **Example:** `P1 = 0x55;` (Output 0x55 to Port 1).
        *   **Example:** `P1_0 = 1;` (Set the P1.0 pin to HIGH).
*   **Delay Functions:** Creating software delays using loops.
    *   **Example:**
        ```c
        void delay_ms(unsigned int milliseconds) {
            unsigned int i, j;
            for (i = 0; i < milliseconds; i++) {
                for (j = 0; j < 120; j++); // Adjust loop count for desired delay
            }
        }
        ```
*   **Timers in C:** Configuring and using the 8051's timers.
    *   **Example (Timer 0 in 16-bit mode):**
        ```c
        #include <reg51.h> // Or appropriate header for your compiler

        void timer0_init() {
            TMOD = 0x01; // Timer 0, Mode 1 (16-bit timer)
            TH0 = 0xFC;  // High byte for desired delay (e.g., for 1ms)
            TL0 = 0x67;  // Low byte for desired delay
            TR0 = 1;     // Start Timer 0
        }

        void main() {
            timer0_init();
            while (1) {
                if (TF0 == 1) { // Check Timer 0 overflow flag
                    TF0 = 0;    // Clear the flag
                    // Toggle an LED or perform some action
                    P1_0 = ~P1_0;
                    TH0 = 0xFC; // Reload timer for next delay
                    TL0 = 0x67;
                }
            }
        }
        ```
*   **Interrupts in C:** Enabling and handling interrupts.

**Referenced Content (Ayala, "The 8051 Microcontroller"):**

*   **Chapter 12: C Programming for the 8051:** Introduces the basics of C programming for the 8051, including data types, operators, control flow, and direct access to hardware registers.

**Referenced Content (Lyla, "Microprocessors and Microcontrollers"):**

*   **Chapter 10: Embedded C Programming:** Provides examples of using embedded C for common microcontroller tasks, including I/O operations, timers, and interrupts.

---

### 4. Interfacing Peripherals with the 8051

This section focuses on practical demonstrations of connecting and controlling external devices using the 8051's I/O ports and other peripherals.

**Key Peripherals and Interfacing Techniques:**

*   **LEDs (Light Emitting Diodes):**
    *   **Purpose:** Visual indication of program status or output.
    *   **Connection:** Connect the anode of the LED to an I/O pin of the 8051 through a current-limiting resistor (typically 220-330 Ohms). Connect the cathode to ground.
    *   **Programming:**
        *   **ALP:** `MOV P1, #0FFH` (turn all LEDs ON), `MOV P1, #00H` (turn all LEDs OFF).
        *   **C:** `P1 = 0xFF;`, `P1 = 0x00;`.
    *   **Demo Experiment Idea:** Blinking LEDs in sequence or based on switch input.
*   **Switches (Push Buttons):**
    *   **Purpose:** Input for user interaction or control.
    *   **Connection:** Connect one terminal of the switch to an I/O pin of the 8051. Connect the other terminal to either Vcc (with an external pull-up resistor) or Ground (with an internal or external pull-down resistor). The 8051 has internal pull-ups on ports P1, P2, and P3 that can be enabled.
    *   **Programming:**
        *   **ALP:** Read the state of the port: `MOV A, P1`, `JB P1.0, LABEL_PRESSED`.
        *   **C:** `if (P1_0 == 0) { ... }` (assuming active-low switch connected to P1.0).
    *   **Demo Experiment Idea:** Controlling LED blinking rate or pattern with switch presses.
*   **Timers for Delay Generation:**
    *   **Purpose:** Creating precise delays for timing-based operations.
    *   **ALP:** Using `DJNZ` loops or pre-calculated timer register values.
    *   **C:** Using timer hardware registers as shown in Section 3.
    *   **Demo Experiment Idea:** Creating a metronome or precise flashing patterns.
*   **Seven-Segment Displays:**
    *   **Purpose:** Displaying numerical or hexadecimal characters.
    *   **Connection:** Common Cathode or Common Anode configuration. Digits are controlled by common pins, and segments (a-g, dp) are controlled by individual I/O pins. Multiplexing is often used to display multiple digits.
    *   **Programming:** Requires mapping character codes to segment patterns and often using subroutines or look-up tables.
    *   **Demo Experiment Idea:** Displaying a counter or a fixed message.

**Referenced Content (Ayala, "The 8051 Microcontroller"):**

*   **Chapter 7: I/O Port Programming:** Details how to use the I/O ports for input and output, including interfacing with LEDs and switches.
*   **Chapter 8: Timer/Counters:** Explains the operation of the 8051 timers and how to program them for various applications, including delay generation.

**Referenced Content (MacKenzie & Phan, "The 8051 Microcontroller"):**

*   **Chapter 5: Input/Output Devices:** Covers interfacing with common output devices like LEDs and input devices like switches.
*   **Chapter 6: Timers and Counters:** Provides practical examples of using timers for delay and event counting.

---

### 5. Designing Microcontroller-Based Systems

This section brings together the programming and interfacing knowledge to design simple, functional embedded systems.

**Key Design Principles:**

*   **Problem Definition:** Clearly understand the requirements of the system.
*   **Hardware Selection:** Choose the appropriate microcontroller (8051 in this case) and necessary peripheral components.
*   **Software Design:**
    *   **Modular Programming:** Break down the program into smaller, manageable functions or subroutines.
    *   **Algorithm Development:** Plan the logic for controlling the system.
    *   **Choice of Language:** Decide whether ALP or Embedded C is more suitable for specific tasks. Often, a combination is used.
*   **Interfacing Strategy:** Determine how to connect the microcontroller to peripherals.
*   **Testing and Debugging:** Systematically test each component and the overall system.

**Demo Experiment Ideas (Synthesis of Concepts):**

*   **Traffic Light Controller:** Use LEDs to simulate traffic lights and switches to simulate car presence or pedestrian signals. Timers can be used for the light sequencing.
*   **Digital Dice:** Use LEDs to display the outcome of a "dice roll," triggered by a switch. A timer can introduce randomness or a delay before display.
*   **Simple Alarm System:** Use a switch as an arm/disarm button and an LED or buzzer as an alarm indicator.
*   **Stepper Motor Control:** Interface a stepper motor driver with the 8051 to control its rotation and direction.

**Referenced Content (Mazidi, "The 8051 Microcontroller and Embedded Systems"):**

*   **Chapter 10: 8051 Interrupts:** Crucial for designing responsive systems by handling external events.
*   **Chapter 11: 8051 Serial Port:** For systems requiring communication with other devices or computers.
*   **Chapter 13 onwards (Application Examples):** Provides various case studies and system designs, illustrating the practical application of 8051 programming and interfacing.

---

### 6. Practical Implementation and Tools

*   **Development Boards:** Familiarize yourself with the specific 8051 development board used in the lab. This typically includes an 8051 microcontroller, power supply, reset circuit, crystal oscillator, I/O port headers, and potentially onboard LEDs, switches, and serial interfaces.
*   **Assemblers/Compilers:** Software tools to convert your ALP or C code into machine code that the 8051 can execute. Examples include Keil uVision, SDCC (Small Device C Compiler), and various assemblers.
*   **Simulators:** Software that emulates the behavior of the 8051 microcontroller, allowing you to test and debug your programs without hardware.
*   **Programmers:** Hardware devices used to load the compiled machine code into the 8051's program memory (often flash memory).

---

### 7. Practice Questions and Exercises

**Question 1 (ALP):** Write an ALP to toggle all LEDs connected to Port 1 of the 8051 with a delay of 500ms between toggles. Assume an external crystal frequency of 11.0592 MHz.

**Answer 1:**
(This requires calculating timer values for a 500ms delay. For 11.0592 MHz, a 1ms delay using Timer 0 in Mode 1 needs TH0 = 0xFC and TL0 = 0x67. To achieve 500ms, you would loop this 500 times or adjust the timer reload value.)

```assembly
ORG 0000H
    MOV TMOD, #01H      ; Timer 0 in Mode 1 (16-bit timer)
    MOV P1, #00H        ; Initialize Port 1 to all 0s (LEDs off)

LOOP:
    CPL P1              ; Complement Port 1 (toggle LEDs)
    MOV R0, #50         ; Initialize counter for ~500ms delay (approximate)
DELAY_LOOP:
    MOV TH0, #0FCH      ; Reload TH0 for 1ms delay
    MOV TL0, #067H      ; Reload TL0 for 1ms delay
    SETB TR0            ; Start Timer 0
WAIT_TIMER:
    JNB TF0, WAIT_TIMER ; Wait for Timer 0 overflow flag
    CLR TR0             ; Stop Timer 0
    CLR TF0             ; Clear Timer 0 overflow flag
    DJNZ R0, DELAY_LOOP ; Decrement counter and repeat delay

    JMP LOOP            ; Jump back to toggle LEDs
END
```
*Note: The exact calculation for 500ms delay with a specific crystal frequency involves finding the number of machine cycles required and then calculating the timer reload values. This example uses a simpler approach of repeating a 1ms delay.*

**Question 2 (Embedded C):** Write an embedded C program for the 8051 to read the state of a switch connected to P1.0. If the switch is pressed (assume active low), turn on an LED connected to P1.1; otherwise, turn off the LED.

**Answer 2:**
```c
#include <reg51.h> // Include the register definition file

// Define individual pins for easier access
sbit SWITCH = P1^0;
sbit LED = P1^1;

void main(void) {
    // Configure Port 1 pins
    // For input (switch), it's typically left as is or configured as input.
    // For output (LED), it's also left as is as default is output.

    while (1) {
        if (SWITCH == 0) { // Check if switch is pressed (active low)
            LED = 1;       // Turn LED ON
        } else {
            LED = 0;       // Turn LED OFF
        }
    }
}
```

**Question 3 (Interfacing):** Describe the necessary hardware connections and programming logic to interface a seven-segment display (common cathode) to Port 2 of the 8051 to display the digit '5'.

**Answer 3:**
*   **Hardware Connections:**
    *   Connect the common cathode pins of the seven-segment display to GND.
    *   Connect segments 'a' through 'g' of the display to individual pins of Port 2 (e.g., P2.0 to P2.6).
    *   A current-limiting resistor (e.g., 220 Ohm) should be connected in series with each segment pin before connecting to the 8051 pin to protect both the display and the microcontroller.
*   **Programming Logic:**
    *   Determine the segment pattern for the digit '5'. For a common cathode display, a segment is turned ON by writing a '1' to its corresponding pin.
    *   The segment pattern for '5' is typically: `a=1, b=0, c=1, d=1, e=0, f=1, g=1`.
    *   In binary, this would be `10110111` (assuming segment 'g' is connected to P2.7 and segment 'a' to P2.0, or vice-versa depending on pinout). Let's assume a common pinout where P2.0 is segment 'a', P2.1 is 'b', ..., P2.6 is 'g'.
    *   The required value to be output to Port 2 would be `0110111` in binary, which is `67H` in hexadecimal.
    *   **ALP:** `MOV P2, #67H`
    *   **C:** `P2 = 0x67;`

---

### 8. Important Points to Remember

*   **Crystal Frequency:** The crystal oscillator frequency is crucial for accurate timer calculations and delays.
*   **Addressing Modes:** Understand the various addressing modes of the 8051 (immediate, direct, indirect, indexed, register) as they significantly impact instruction usage.
*   **SFRs:** Treat Special Function Registers as memory locations that control the microcontroller's peripherals and status.
*   **Stack Pointer (SP):** Be aware of the stack's location and size, especially when using subroutines and interrupts.
*   **Interrupt Vector Table:** Understand how the 8051 handles interrupts and the importance of the interrupt vector table.
*   **Port Configuration:** Some 8051 ports have special functions (e.g., P3 for interrupts and serial communication). Understand these alternate functions when interfacing.
*   **Debugging:** Use simulators and step-by-step execution to identify and fix errors in your code.

---

### 9. Alignment with Course Outcomes

*   **CO1 (ALP for arithmetic/logical problems):** This module provides the foundation for writing ALPs to perform these operations, as demonstrated in the examples and practice questions.
*   **CO2 (Embedded C for 8051):** The module covers writing embedded C programs for basic I/O, timers, and control flow, fulfilling this outcome.
*   **CO3 (Examine circuits for interfacing):** The detailed explanations of interfacing LEDs, switches, and seven-segment displays help students examine and understand these circuits.
*   **CO4 (Design a microcontroller-based system):** The demo experiment ideas and design principles equip students to design simple 8051-based systems.
*   **CO5 (Design an Arduino-based system):** While this module is focused on the 8051, the general principles of embedded system design, problem definition, hardware/software co-design, and testing are transferable to Arduino-based projects. The understanding of microcontroller programming logic is a prerequisite for Arduino.

This comprehensive set of notes should provide a strong foundation for understanding and practically applying 8051 microcontroller programming in your lab sessions. Remember to consult your lab manuals and experiment with different code variations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
