---
title: "BCD up/down counters."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 2: ALP programming for the implementation of counters: Hex up and down counters"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f364ed"
status: "completed"
scrapedAt: "2026-05-23T16:23:05.687Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS LAB

## Module 2: ALP Programming for the Implementation of Counters: Hex Up and Down Counters

### Topic: BCD Up/Down Counters

---

### **1. Introduction to BCD Counters**

*   **Definition:** A Binary Coded Decimal (BCD) counter is a digital circuit that counts in the BCD format. BCD represents each decimal digit (0-9) with its equivalent 4-bit binary code.
*   **Why BCD?** BCD is often used in applications where the output needs to be directly displayed on seven-segment displays or interfaced with decimal input devices. It simplifies the conversion from binary to decimal representation compared to standard binary counters.
*   **Comparison with Hexadecimal Counters:**
    *   **Hexadecimal Counters:** Count from 00 to FF (0 to 255 in decimal) using 8-bit binary.
    *   **BCD Counters:** Count from 00 to 99 (in decimal) using two BCD digits, where each digit is represented by 4 bits. The binary values A-F (10-15) are not used in standard BCD counting.
*   **Up/Down Capability:** A BCD up/down counter can increment its count (up) or decrement its count (down) based on a control signal.

---

### **2. BCD Up/Down Counter Operation**

*   **Up Counting:** The counter increments by one for each pulse on the clock input, following the sequence 00, 01, ..., 09, 10, 11, ..., 98, 99, 00.
*   **Down Counting:** The counter decrements by one for each pulse on the clock input, following the sequence 00, 99, 98, ..., 10, 09, 08, ..., 01, 00.
*   **Control Signal:** A dedicated input pin (often labeled UP/DOWN or similar) determines the direction of counting.
    *   **UP:** Typically, a logic high on the UP/DOWN pin enables up counting.
    *   **DOWN:** Typically, a logic low on the UP/DOWN pin enables down counting.

---

### **3. Implementing BCD Up/Down Counters in 8051 ALP**

This section focuses on how to program the 8051 microcontroller to *simulate* or *implement* the functionality of a BCD up/down counter. The 8051 doesn't have dedicated hardware BCD up/down counter modules like some specialized ICs (e.g., 74LS190), so we will use its general-purpose registers and instructions to achieve this.

#### **3.1 Key Concepts and Registers Involved**

*   **Accumulator (A):** Used for arithmetic operations and holding the current count.
*   **General-Purpose Registers (R0-R7):** Can be used to store intermediate values, pointers, or the current count if the accumulator is needed for other tasks.
*   **Program Counter (PC):** Keeps track of the next instruction to be executed.
*   **Instructions:**
    *   `MOV`: Move data between registers and memory.
    *   `ADD`: Add two operands.
    *   `SUB`: Subtract two operands.
    *   `INC`: Increment a register or memory location.
    *   `DEC`: Decrement a register or memory location.
    *   `CJNE`: Compare and Jump if Not Equal.
    *   `DJNZ`: Decrement and Jump if Not Zero.
    *   `RL`: Rotate Left.
    *   `RR`: Rotate Right.
    *   `ANL`: Logical AND.
    *   `ORL`: Logical OR.
    *   `XCH`: Exchange bytes.
    *   `JMP`: Unconditional Jump.
    *   `JB`/`JNB`: Jump if Bit is Set/Not Set.

#### **3.2 Strategy for BCD Up/Down Counting**

The core challenge is to handle the BCD wrap-around (from 09 to 10 and from 00 to 99). Standard binary increments/decrements will not work directly because they will go through values like 0A, 0B, etc.

**Method 1: Using `DA A` (Decimal Adjust Accumulator) for Up Counting**

The `DA A` instruction is crucial for BCD arithmetic. It adjusts the accumulator's content to reflect a valid BCD representation after an `ADD` or `SUB` operation that might have resulted in a non-BCD value (e.g., sum > 9).

*   **Up Counting:**
    1.  Initialize a register (e.g., `R0`) with the starting BCD value (e.g., `00`).
    2.  To increment: `INC R0`.
    3.  Check if the incremented value is greater than `09` (e.g., `0A` to `0F` if it were binary, or `10` in decimal).
    4.  If the lower nibble (last 4 bits) becomes `10` (binary `0000 1010`) or higher after increment, we need to adjust.
    5.  A simpler way is to check if the register value exceeds `09`. If `R0 > 09`, add `06` to it. This converts the invalid BCD (like `0A`) to the correct BCD sequence (`10`).
    6.  Handle the wrap-around from `99` to `00`. If `R0` reaches `100` (which would be `00` in our two BCD digits), reset it to `00`.

**Method 2: Simulating BCD Logic for Up/Down Counting**

This method involves more explicit checks and manipulations of nibbles. Let's assume we are using two registers to hold the two BCD digits (tens and units).

*   **Data Structure:**
    *   Let `R0` hold the units digit.
    *   Let `R1` hold the tens digit.
    *   Initial value, e.g., `R1=00`, `R0=00`.

*   **Up Counting Logic:**
    1.  **Increment Units Digit (`R0`):**
        *   `INC R0`
        *   Check if `R0` is now `10` (binary `0000 1010`). If `R0` is `0A`, it means the units digit has overflowed from 9 to 10.
        *   If `R0 == 0A`:
            *   Set `R0` to `00`.
            *   Increment the tens digit (`R1`).
            *   Check if `R1` is now `10` (binary `0000 1010`). If `R1` is `0A`, it means the tens digit has overflowed from 9 to 10 (resulting in `100` in decimal).
            *   If `R1 == 0A`:
                *   Set `R1` to `00` (wrap-around from 99 to 00).

*   **Down Counting Logic:**
    1.  **Decrement Units Digit (`R0`):**
        *   Check if `R0` is `00`. If it is, we need to borrow from the tens digit.
        *   If `R0 == 00`:
            *   Set `R0` to `09`.
            *   Decrement the tens digit (`R1`).
            *   Check if `R1` is `00`. If it is, and we need to decrement further (meaning we are at 00 and want to go to 99), we need to handle the wrap-around.
            *   If `R1 == 00` after decrementing:
                *   Set `R1` to `09` (wrap-around from 00 to 99).
        *   Else (if `R0` is not `00`):
            *   `DEC R0`

#### **3.3 Example ALP Program Snippet (Conceptual)**

Let's consider a simplified example assuming we're counting from `00` to `99` using `R0` for units and `R1` for tens.

**Scenario:** Implement an UP counter.

```assembly
; Assume initial value: R1 = 00 (tens digit), R0 = 00 (units digit)
; We want to increment the counter.

; Function to increment BCD counter (tens digit in R1, units digit in R0)
; Preserves A, PSW, DPTR etc.
BCD_UP_INCREMENT:
    INC R0          ; Increment units digit

    ; Check if units digit overflowed (reached 10)
    CJNE R0, #0AH, UNITS_OK  ; If R0 is not 10, no overflow

    ; Units digit overflowed (R0 was 09, now 0A)
    MOV R0, #00H    ; Reset units digit to 00

    ; Increment tens digit
    INC R1

    ; Check if tens digit overflowed (reached 10)
    CJNE R1, #0AH, TENS_OK   ; If R1 is not 10, no overflow

    ; Tens digit overflowed (R1 was 09, now 0A)
    ; This means we are going from 99 to 100, so reset to 00
    MOV R1, #00H    ; Wrap around: 99 -> 00

TENS_OK:
UNITS_OK:
    RET             ; Return from subroutine

; To use:
; CALL BCD_UP_INCREMENT
; ... perform some action with R1 (tens) and R0 (units) ...
```

**Scenario:** Implement a DOWN counter.

```assembly
; Assume current value: R1 (tens), R0 (units)
; We want to decrement the counter.

; Function to decrement BCD counter (tens digit in R1, units digit in R0)
; Preserves A, PSW, DPTR etc.
BCD_DOWN_DECREMENT:
    ; Check if units digit is already 00
    CJNE R0, #00H, UNITS_NOT_ZERO

    ; Units digit is 00. Need to borrow from tens digit.
    MOV R0, #09H    ; Set units digit to 09

    ; Decrement tens digit
    CJNE R1, #00H, TENS_NOT_ZERO

    ; Tens digit is 00. Need to wrap around from 00 to 99.
    MOV R1, #09H    ; Set tens digit to 09 (wraps around from 00 to 99)
    JMP DECREMENT_DONE ; Exit, we handled wrap-around

TENS_NOT_ZERO:
    DEC R1          ; Decrement tens digit (it was not 00)

    JMP DECREMENT_DONE

UNITS_NOT_ZERO:
    DEC R0          ; Decrement units digit (it was not 00)

DECREMENT_DONE:
    RET             ; Return from subroutine

; To use:
; CALL BCD_DOWN_DECREMENT
; ... perform some action with R1 (tens) and R0 (units) ...
```

**Note on `DA A`:** While `DA A` is powerful for single-byte BCD addition/subtraction, implementing a two-digit BCD counter with it requires careful handling of the carry/borrow between digits, which can be more complex than direct nibble manipulation for a full counter implementation. The examples above use direct nibble manipulation which is more straightforward for a full counter simulation.

#### **3.4 Interfacing with Control Signals (Up/Down Selection)**

To make it an "up/down" counter, we would read an input pin. Let's say `P1.0` is the UP/DOWN control.

```assembly
; Assume P1.0 = 1 for UP, P1.0 = 0 for DOWN

; ... initialization ...

LOOP:
    ; Check the direction control pin
    JB P1.0, COUNT_UP       ; If P1.0 is set (high), jump to COUNT_UP

COUNT_DOWN_SECTION:
    ; Call the BCD_DOWN_DECREMENT subroutine
    CALL BCD_DOWN_DECREMENT
    JMP PROCESS_COUNT       ; Process the new count

COUNT_UP:
    ; Call the BCD_UP_INCREMENT subroutine
    CALL BCD_UP_INCREMENT

PROCESS_COUNT:
    ; Here you would typically display the count (R1 and R0) on LEDs or
    ; seven-segment displays, or perform other actions.
    ; For demonstration, let's just delay and repeat.
    CALL DELAY_MS           ; A subroutine for delay
    JMP LOOP                ; Continue the counting loop
```

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **4. Textbooks and Reference Material Integration**

*   **Kenneth Ayala's "The 8051 Microcontroller":**
    *   Chapter on Assembly Language Programming will cover instructions like `INC`, `DEC`, `CJNE`, `JB`.
    *   Examples of bit manipulation and I/O port operations are crucial for reading control signals and outputting counts.
    *   The concept of subroutines (`CALL`, `RET`) is fundamental for modular code.
    *   Ayala typically provides clear explanations of 8051 architecture and instruction set, which are the building blocks for these programs.
*   **R. Lyla B. Das's "Microprocessors and Microcontrollers":**
    *   This book likely covers counter/timer applications in detail. While it might focus on hardware timers, the underlying logic for incrementing/decrementing and handling BCD rules is transferable to software implementation.
    *   Expect sections on programming techniques and algorithms, which are directly applicable to simulating BCD counters.
*   **Muhammad Ali Mazidi's "The 8051 microcontroller and embedded systems":**
    *   Mazidi is known for his comprehensive examples. He likely has sections dedicated to implementing specific applications, which might include counters.
    *   The book's approach to I/O interfacing (e.g., controlling LEDs, seven-segment displays) will be essential for visualizing the counter's output.
    *   His emphasis on structuring programs, including error handling and conditional execution, is vital for robust counter logic.
*   **I. Scott MacKenzie, Raphael C.-W. Phan:**
    *   Reference books often provide deeper dives into specific 8051 features or advanced programming techniques. They might offer alternative algorithms for BCD arithmetic or more optimized solutions.

---

### **5. Alignment with Course Outcomes**

*   **CO1: Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller (Knowledge Level: K3)**
    *   This topic directly addresses CO1 by requiring the development of ALP programs to implement the arithmetic (increment/decrement) and logical (BCD wrap-around checks) operations of a counter.
*   **CO2: Develop embedded C programming using instruction sets of 8051 (Knowledge Level: K3)**
    *   While the focus is ALP, understanding the underlying logic of BCD counting in ALP provides a strong foundation for implementing the same logic in Embedded C. C constructs like `if-else`, `while`, `for` loops, and arithmetic operators will map to the ALP instructions used here.
*   **CO3: Examine circuits for interfacing processor with various peripheral devices (Knowledge Level: K4)**
    *   To make the BCD counter useful, it needs to be interfaced with output devices like LEDs (for individual digits) or seven-segment displays. This involves understanding how to send BCD data to these peripherals via the 8051's I/O ports.
*   **CO4: Design a microcontroller based system with the help of various interfacing devices (Knowledge Level: K6)**
    *   A BCD up/down counter can be a core component of a larger system, such as a digital stopwatch, a traffic light controller, or a frequency counter. Designing such a system involves integrating the counter logic with input (start/stop buttons) and output (display) devices.
*   **CO5: Design an Arduino based system with the help of various interfacing devices (Knowledge Level: K6)**
    *   Although this module focuses on 8051 ALP, the fundamental principles of BCD counting, up/down operation, and interfacing with displays are transferable to Arduino (which typically uses AVR microcontrollers). Understanding the logic in ALP helps in designing similar systems in other microcontroller environments.

---

### **6. Important Points to Remember**

*   **BCD vs. Binary:** Always distinguish between binary arithmetic and BCD arithmetic. BCD has specific rules for incrementing (09 -> 10) and decrementing (00 -> 99).
*   **Nibble Manipulation:** For multi-digit BCD counters, you often need to manipulate the individual BCD digits (nibbles).
*   **Wrap-around:** Carefully handle the wrap-around conditions (99 to 00 for up counting, 00 to 99 for down counting).
*   **`DA A`:** Useful for single-byte BCD arithmetic, but may require additional logic for multi-digit counters or complex sequences. Direct nibble manipulation is often clearer for simulating multi-digit counters.
*   **Control Signal:** Ensure your program correctly reads and acts upon the UP/DOWN control signal.
*   **Output:** The counter's value needs to be presented. For BCD, this typically means sending the tens and units digits to appropriate display drivers (e.g., seven-segment displays).
*   **Subroutines:** Use subroutines for incrementing and decrementing logic to keep the main loop clean and organized.

---

### **7. Practice Questions and Exercises**

**Question 1:**
Write an ALP program for the 8051 to implement a BCD **UP** counter that counts from `00` to `99`. Assume the current count is stored in registers `R0` (units digit) and `R1` (tens digit). Your program should correctly handle the wrap-around from `99` to `00`.

**Answer 1:**

```assembly
; Initialize R1 = 00, R0 = 00

; --- BCD UP Increment Subroutine ---
; Input: R1 (tens digit), R0 (units digit)
; Output: R1, R0 updated to next BCD count
; Destroys: None (if main program saves/restores registers)

BCD_UP_INC:
    INC R0              ; Increment units digit
    CJNE R0, #0AH, BCD_UP_UNITS_OK ; If R0 is not 10, skip decimal adjust

    ; Units digit overflowed (09 -> 0A)
    MOV R0, #00H        ; Reset units to 00
    INC R1              ; Increment tens digit
    CJNE R1, #0AH, BCD_UP_TENS_OK ; If R1 is not 10, skip wrap-around check

    ; Tens digit overflowed (09 -> 0A), means 99 -> 100
    MOV R1, #00H        ; Reset tens to 00 (wrap-around)

BCD_UP_TENS_OK:
BCD_UP_UNITS_OK:
    RET

; --- Main Program Loop ---
; Assume R1 and R0 are initialized elsewhere
; For demonstration, let's just call the increment subroutine

; ORG 0000H
; MOV R1, #00H
; MOV R0, #00H
;
; START_COUNTING:
;     CALL BCD_UP_INC
;     ; At this point, R1 and R0 hold the next BCD count.
;     ; You would typically send these to output ports.
;     ; e.g., MOV P1, R1 ; Send tens digit
;     ;       MOV P2, R0 ; Send units digit
;     ;       CALL DELAY ; Delay for display visibility
;     JMP START_COUNTING
```

**Question 2:**
Modify the BCD UP counter program from Question 1 to also handle **DOWN** counting. Assume an input pin `P1.0` acts as the direction control: `P1.0 = 1` for UP counting, `P1.0 = 0` for DOWN counting.

**Answer 2:**

```assembly
; Assume R1 (tens), R0 (units) are initialized elsewhere.
; P1.0 is the direction control pin.

; --- BCD UP Increment Subroutine (from Q1) ---
BCD_UP_INC:
    INC R0              ; Increment units digit
    CJNE R0, #0AH, BCD_UP_UNITS_OK

    MOV R0, #00H        ; Reset units to 00
    INC R1              ; Increment tens digit
    CJNE R1, #0AH, BCD_UP_TENS_OK

    MOV R1, #00H        ; Reset tens to 00 (wrap-around)

BCD_UP_TENS_OK:
BCD_UP_UNITS_OK:
    RET

; --- BCD DOWN Decrement Subroutine ---
; Input: R1 (tens digit), R0 (units digit)
; Output: R1, R0 updated to previous BCD count
; Destroys: None (if main program saves/restores registers)

BCD_DOWN_DEC:
    CJNE R0, #00H, BCD_DOWN_UNITS_NOT_ZERO ; If R0 is not 00, decrement directly

    ; R0 is 00. Need to borrow from R1.
    MOV R0, #09H        ; Set units to 09
    CJNE R1, #00H, BCD_DOWN_TENS_NOT_ZERO ; If R1 is not 00, decrement it

    ; R1 is 00. Need to wrap around from 00 to 99.
    MOV R1, #09H        ; Set tens to 09 (wrap-around from 00 to 99)
    JMP BCD_DOWN_DONE   ; Exit, we handled wrap-around

BCD_DOWN_TENS_NOT_ZERO:
    DEC R1              ; Decrement tens digit (it was not 00)
    JMP BCD_DOWN_DONE

BCD_DOWN_UNITS_NOT_ZERO:
    DEC R0              ; Decrement units digit (it was not 00)

BCD_DOWN_DONE:
    RET

; --- Main Program Loop ---
; ORG 0000H
; MOV R1, #00H      ; Initialize tens
; MOV R0, #00H      ; Initialize units
;
; COUNT_LOOP:
;     JNB P1.0, COUNT_DOWN ; If P1.0 is 0 (low), jump to COUNT_DOWN
;
;     ; --- UP COUNTING ---
;     CALL BCD_UP_INC
;     JMP PROCESS_AND_LOOP
;
; COUNT_DOWN:
;     ; --- DOWN COUNTING ---
;     CALL BCD_DOWN_DEC
;
; PROCESS_AND_LOOP:
;     ; Display R1 and R0 on ports, e.g., P1 and P2
;     ; MOV P1, R1
;     ; MOV P2, R0
;     ; CALL DELAY
;     JMP COUNT_LOOP

```

---
This concludes the study notes for BCD Up/Down Counters in the context of 8051 ALP programming for the Microprocessors and Embedded Systems Lab. Remember to practice writing and debugging these programs on an actual 8051 development board or simulator.