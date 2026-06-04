---
title: "ALP programming for implementation code conversion- BCD to ASCII "
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 9: Demo experiment using 8051 Microcontroller programming."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f364fe"
status: "completed"
scrapedAt: "2026-05-23T16:23:13.467Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS LAB - Module 9: Demo Experiment - ALP Programming for BCD to ASCII Conversion

## Topic: ALP Programming for Implementation Code Conversion - BCD to ASCII

**Course Outcomes Addressed:**

*   **CO1: Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller (Knowledge Level: K3)** - This module directly addresses this by focusing on the development and execution of an Assembly Language Program (ALP) for a specific arithmetic/logical conversion task.
*   **CO2: Develop embedded C programming using instruction sets of 8051 (Knowledge Level: K3)** - While this topic is in ALP, understanding the underlying operations and data manipulation principles is crucial for both ALP and embedded C. The logic can be translated to C.

---

### 1. Introduction to BCD and ASCII

**Key Concepts:**

*   **Binary Coded Decimal (BCD):** A numeral system in which each decimal digit (0-9) is represented by its 4-bit binary equivalent.
    *   **Packed BCD:** Two decimal digits are packed into a single byte (8 bits). The lower nibble (4 bits) represents the units digit, and the upper nibble represents the tens digit. Example: `35` (decimal) = `0011 0101` (BCD).
    *   **Unpacked BCD:** Each decimal digit is stored in a separate byte, with the higher nibble usually set to `0000` and the lower nibble holding the decimal digit. Example: `35` (decimal) would be stored as two bytes: `0000 0011` (`3`) and `0000 0101` (`5`). This topic typically deals with **unpacked BCD**.

*   **American Standard Code for Information Interchange (ASCII):** A character encoding standard that assigns a unique numerical value to letters, numbers, punctuation marks, and control characters.
    *   ASCII digits `0` through `9` are represented by hexadecimal values `30H` through `39H`.
    *   This means to convert a BCD digit to its ASCII equivalent, we need to add `30H` to the BCD value.

**Why Convert BCD to ASCII?**

Microcontrollers often receive data in BCD format, especially from input devices like keypads or displays that operate on decimal numbers. However, to display these numbers on standard displays (like character LCDs or serial monitors), they need to be converted to their ASCII character representations.

---

### 2. The Conversion Process: BCD to ASCII

The core of the BCD to ASCII conversion involves transforming each BCD digit into its corresponding ASCII character.

**For Unpacked BCD:**

Let's consider converting an unpacked BCD number, say `5` (represented as `05H`), to its ASCII equivalent.

*   **BCD Value:** `05H` (which is `0000 0101` in binary)
*   **ASCII Value for '5':** `35H` (which is `0011 0101` in binary)

Observe the relationship: `05H + 30H = 35H`.

Therefore, the conversion involves adding the ASCII offset `30H` to each BCD digit.

**Example:**

Suppose we have a two-digit unpacked BCD number stored in memory:

*   Byte 1 (Tens Digit): `03H` (representing 3)
*   Byte 2 (Units Digit): `05H` (representing 5)

To convert this to ASCII:

1.  **Convert the Tens Digit:**
    *   BCD: `03H`
    *   Add ASCII offset: `03H + 30H = 33H` (ASCII for '3')
2.  **Convert the Units Digit:**
    *   BCD: `05H`
    *   Add ASCII offset: `05H + 30H = 35H` (ASCII for '5')

The resulting ASCII characters would be `'3'` and `'5'`, which can then be displayed or processed as a string "35".

---

### 3. ALP Program Structure and Logic for BCD to ASCII Conversion

This section will outline the general structure and logic of an Assembly Language Program (ALP) for BCD to ASCII conversion using the 8051 microcontroller.

**Assumptions:**

*   The BCD numbers are stored in memory locations.
*   We will convert a two-digit unpacked BCD number for demonstration.
*   The converted ASCII characters will be stored in consecutive memory locations.

**Key 8051 Instructions Used:**

*   `MOV`: Move data between registers and memory.
*   `ADD`: Add contents of a register with an immediate value or another register.
*   `INC`: Increment register or memory location by 1.
*   `DJNZ`: Decrement register and jump if not zero.
*   `RET`: Return from subroutine.
*   `ORG`: Set program origin.
*   `EQU`: Equate a symbolic name to an expression.

**Program Logic:**

1.  **Initialization:**
    *   Define memory locations for input BCD data and output ASCII data.
    *   Define the ASCII offset `30H`.
    *   Initialize a pointer to the input BCD data.
    *   Initialize a pointer to the output ASCII storage.
    *   Set a counter for the number of digits to convert.

2.  **Conversion Loop:**
    *   **Fetch BCD Digit:** Load the current BCD digit from the input memory location into an accumulator register (e.g., `A`).
    *   **Add ASCII Offset:** Add the ASCII offset (`30H`) to the accumulator. The result is the ASCII representation of the digit.
    *   **Store ASCII Digit:** Store the ASCII digit from the accumulator into the output memory location.
    *   **Increment Pointers:** Move the input pointer to the next BCD digit and the output pointer to the next ASCII storage location.
    *   **Decrement Counter:** Decrement the digit counter.
    *   **Loop Condition:** If the counter is not zero, repeat the conversion process.

3.  **Termination:** Once all digits are converted, the program can end or return.

---

### 4. Example ALP Program (Conceptual)

Let's illustrate with a conceptual ALP snippet.

```assembly
; Define memory locations
BCD_INPUT   EQU 30H   ; Start of BCD input data (e.g., 03H, 05H)
ASCII_OUTPUT EQU 40H  ; Start of ASCII output storage (e.g., 33H, 35H)
ASCII_OFFSET EQU 30H  ; ASCII offset for digits

; Program Segment
ORG 0000H     ; Start of program memory

START:
    MOV DPTR, #BCD_INPUT   ; Load starting address of BCD data into DPTR
    MOV R0, #2            ; Number of digits to convert (e.g., 2 digits)
    MOV R1, #ASCII_OUTPUT ; Load starting address of ASCII output into R1

CONVERT_LOOP:
    MOV A, @DPTR          ; Fetch BCD digit from input location pointed by DPTR
    ADD A, #ASCII_OFFSET  ; Add ASCII offset (30H) to convert to ASCII
    MOV @R1, A            ; Store the ASCII digit at the output location pointed by R1

    INC DPTR              ; Move to the next BCD input digit
    INC R1                ; Move to the next ASCII output location
    DJNZ R0, CONVERT_LOOP ; Decrement digit counter and jump if not zero

    SJMP $                ; Infinite loop for demonstration (or RET if it's a subroutine)

; Data Definitions (Example for input)
ORG 0030H     ; Assuming BCD input starts here
DB 03H        ; Tens digit (BCD for 3)
DB 05H        ; Units digit (BCD for 5)
```

**Explanation of the Example:**

*   `BCD_INPUT EQU 30H`: Defines a symbolic name `BCD_INPUT` for memory location `30H`.
*   `ASCII_OUTPUT EQU 40H`: Defines a symbolic name `ASCII_OUTPUT` for memory location `40H`.
*   `ASCII_OFFSET EQU 30H`: Defines the constant `30H`.
*   `ORG 0000H`: Sets the program execution to start at memory address `0000H`.
*   `MOV DPTR, #BCD_INPUT`: The `DPTR` (Data Pointer) is loaded with the address `30H`. `DPTR` is a 16-bit register used for accessing external memory or addressing data memory.
*   `MOV R0, #2`: Register `R0` is used as a counter, initialized to `2` for two digits.
*   `MOV R1, #ASCII_OUTPUT`: Register `R1` is loaded with the address `40H`, where the ASCII output will be stored.
*   `CONVERT_LOOP:`: Label for the start of the conversion loop.
*   `MOV A, @DPTR`: This instruction fetches the byte from the memory location pointed to by `DPTR` and loads it into the accumulator `A`. The `@` symbol indicates indirect addressing. So, it fetches `03H` from `30H`.
*   `ADD A, #ASCII_OFFSET`: Adds the immediate value `30H` to the accumulator. `A` now holds `03H + 30H = 33H`.
*   `MOV @R1, A`: Stores the content of the accumulator (`33H`) into the memory location pointed to by `R1` (`40H`).
*   `INC DPTR`: Increments `DPTR` to point to the next memory location (`31H`).
*   `INC R1`: Increments `R1` to point to the next memory location (`41H`).
*   `DJNZ R0, CONVERT_LOOP`: Decrements `R0`. If `R0` is not zero after decrementing, it jumps back to `CONVERT_LOOP`. After processing the first digit, `R0` becomes `1`. After the second digit, `R0` becomes `0`, and the loop terminates.
*   `SJMP $`: A short jump to the current instruction, effectively creating an infinite loop. In a real application, this might be replaced by `RET` if this code is part of a subroutine.
*   `ORG 0030H`: Sets the origin for data definitions.
*   `DB 03H`, `DB 05H`: Defines the initial BCD data bytes at memory addresses `30H` and `31H` respectively.

---

### 5. Handling Different Input Formats (Packed BCD)

While the above example focuses on unpacked BCD, the process for packed BCD is slightly different.

**Example: Converting Packed BCD `35H` to ASCII string "35"**

Packed BCD: `35H` (Tens digit is `3`, Units digit is `5`)

1.  **Extract the Tens Digit:**
    *   Move `35H` to `A`.
    *   Right shift `A` by 4 bits (`RLC A` or `RR A` might be used, but `ANL A, #0F0H` followed by `RR A` is safer for isolating the nibble). A simpler way is to use `MOV A, @DPTR` followed by `ANL A, #0F0H`. Then `MOV B, A` to save it.
    *   Let's use `MOV A, @DPTR` (where `@DPTR` has `35H`).
    *   `MOV B, A` (save `35H` in `B`).
    *   `ANL A, #0F0H` (mask lower nibble): `A` becomes `30H`.
    *   `RR A` (rotate right): `A` becomes `18H` (not what we want).
    *   **Correct way to extract:**
        *   `MOV A, @DPTR` (A = `35H`)
        *   `MOV B, A` (B = `35H`)
        *   `ANL A, #0F0H` (A = `30H`) ; Mask to get tens digit (upper nibble)
        *   `RR A` (A = `18H`) ; This is wrong. Use `SWAP A` to swap nibbles.
        *   `SWAP A` (A = `53H`) ; Swap nibbles: `35H` becomes `53H`
        *   `ANL A, #0F0H` (A = `50H`) ; Mask lower nibble: A = `50H` (This is the ASCII for '5') - WRONG
        *   **Let's rethink:**
            *   **Tens Digit:** `35H` -> Mask upper nibble: `35H AND F0H = 30H`. Then add `30H` to get ASCII `33H`.
            *   **Units Digit:** `35H` -> Mask lower nibble: `35H AND 0FH = 05H`. Then add `30H` to get ASCII `35H`.

    *   **Revised Extraction for Packed BCD `35H`:**
        *   **Tens Digit:**
            *   `MOV A, @DPTR` (Assume `@DPTR` holds `35H`)
            *   `ANL A, #0F0H` ; A = `30H` (Mask to isolate tens digit)
            *   `ADD A, #30H` ; A = `30H + 30H = 60H` - STILL WRONG!

    *   **The Fundamental Mistake:** When you have `30H`, you need to add `30H` to get `60H`. This is incorrect. ASCII for '3' is `33H`.
        *   **BCD 3 is `03H`**. `03H + 30H = 33H` (ASCII '3').
        *   **BCD 5 is `05H`**. `05H + 30H = 35H` (ASCII '5').

    *   **Correct Approach for Packed BCD `35H`:**
        1.  **Get the Tens Digit:**
            *   `MOV A, @DPTR` (A = `35H`)
            *   `MOV B, A` (Save original byte in `B` for units digit)
            *   `ANL A, #0F0H` (Mask the lower nibble: A = `30H`)
            *   `RR A` (Rotate Right 4 times, or `RR A` four times is inefficient. Use `SWAP A` first.)
            *   `SWAP A` (A = `53H`)
            *   `ANL A, #0F0H` (A = `50H`) - This is still not right.

        *   **Let's use direct manipulation and addition for BCD to ASCII:**
            *   **Tens Digit:**
                *   `MOV A, @DPTR` ; A = `35H`
                *   `MOV B, A`    ; B = `35H`
                *   `ANL A, #0F0H`; A = `30H` (Tens digit is `3` but represented as `30H` here)
                *   `ADD A, #30H` ; A = `30H + 30H = 60H`. This is the ASCII for '`'.
                *   **The problem is that the BCD value `3` is *already* part of the hex `30H`.**
                *   So, if BCD is `35H`:
                    *   Tens Digit is `3`. Its BCD is `03H`. ASCII is `33H`.
                    *   Units Digit is `5`. Its BCD is `05H`. ASCII is `35H`.

            *   **Algorithm for Packed BCD to ASCII:**
                1.  **Extract Tens Digit:**
                    *   Load packed BCD byte into `A`.
                    *   Copy `A` to `B` (for later use).
                    *   Mask `A` with `#0F0H` to get the tens digit (e.g., `30H`).
                    *   Right shift `A` by 4 bits (`RR A` four times or `SWAP A` then `RR A`) to get the BCD value `03H`.
                    *   Add `30H` to `A`. This gives ASCII `33H`. Store this ASCII.
                2.  **Extract Units Digit:**
                    *   Retrieve the packed BCD byte from `B`.
                    *   Mask `A` with `#00FH` to get the units digit (`05H`).
                    *   Add `30H` to `A`. This gives ASCII `35H`. Store this ASCII.

            *   **Revised Packed BCD to ASCII ALP Snippet:**

            ```assembly
            ; Assuming packed BCD is at address pointed by DPTR, e.g., 35H
            MOV A, @DPTR      ; Fetch packed BCD (e.g., 35H)
            MOV B, A          ; Save for units digit extraction

            ; --- Convert Tens Digit ---
            ANL A, #0F0H      ; Mask lower nibble: A = 30H
            MOV C, PSW.0      ; Save carry flag if any (unlikely here)
            RRC A             ; Rotate right through carry: A = 18H (incorrect, need to rotate 4 times for nibble)
            RRC A             ; A = 09H
            RRC A             ; A = 04H
            RRC A             ; A = 02H (This is STILL incorrect. The value is already 30H.)

            ; --- Corrected approach for Tens Digit ---
            MOV A, @DPTR      ; Fetch packed BCD (e.g., 35H)
            MOV B, A          ; Save for units digit extraction

            ; --- Convert Tens Digit ---
            ANL A, #0F0H      ; A = 30H (Tens digit is conceptually '3' represented as 30H)
            ADD A, #30H       ; A = 30H + 30H = 60H (ASCII for '`') - WRONG

            ; The BCD digit itself needs to be isolated and THEN 30H added.
            ; For 35H: Tens digit is 3. BCD of 3 is 03H. ASCII of '3' is 33H.
            ; For 35H: Units digit is 5. BCD of 5 is 05H. ASCII of '5' is 35H.

            ; --- Corrected Packed BCD to ASCII Logic ---
            MOV A, @DPTR      ; Fetch packed BCD (e.g., 35H)
            MOV B, A          ; Save for units digit extraction

            ; --- Process Tens Digit ---
            ANL A, #0F0H      ; A = 30H (This represents the tens digit)
            SWAP A            ; A = 03H (Now we have the actual BCD value of the tens digit)
            ADD A, #30H       ; A = 03H + 30H = 33H (ASCII for '3')
            MOV @R1, A        ; Store ASCII for tens digit
            INC R1

            ; --- Process Units Digit ---
            MOV A, B          ; Retrieve original packed BCD (35H)
            ANL A, #00FH      ; A = 05H (This is the BCD value of the units digit)
            ADD A, #30H       ; A = 05H + 30H = 35H (ASCII for '5')
            MOV @R1, A        ; Store ASCII for units digit
            INC R1
            ```

This revised logic correctly extracts the BCD digits from the packed byte and converts them to ASCII.

---

### 6. Implementation Details and Considerations

*   **Register Usage:** Be mindful of which registers are used for which purpose (e.g., `A` for arithmetic, `DPTR` for addresses, `R0`/`R1` as counters or pointers).
*   **Data Memory:** Understand where your input BCD data is stored and where the output ASCII data will be placed. Common locations are Internal RAM (00H-7FH) or External RAM (if used).
*   **Subroutines:** For larger programs or reusable code, the BCD to ASCII conversion can be implemented as a subroutine. This would typically involve passing the BCD data (or its address) as a parameter and returning the ASCII data (or its address).
*   **Error Handling:** For a robust system, consider how to handle invalid BCD inputs (e.g., values greater than `09H` in a nibble).
*   **Input/Output Ports:** In a real-time experiment, the BCD input might come from a keypad interfaced to input ports, and the ASCII output might be sent to a display connected to output ports or transmitted serially.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. Linking to Textbooks and Reference Books

*   **Kenneth Ayala's "The 8051 Microcontroller":** This book provides a strong foundation on 8051 architecture, instruction set, and memory organization. Chapter 4 on "Instruction Set" and Chapter 5 on "I/O Port Programming" would be highly relevant for understanding the instructions and I/O operations needed for interfacing. The concepts of memory addressing and register usage are critical.
*   **R. LylaB.Das's "Microprocessors and Microcontrollers":** This book often covers specific application examples, which may include data conversion routines. Understanding the general principles of microcontrollers and their role in embedded systems, as discussed in introductory chapters, will be beneficial.
*   **Muhammad Ali Mazidi's "The 8051 Microcontroller and Embedded Systems":** Mazidi's books are known for their detailed examples and clear explanations of programming concepts. Chapters dedicated to the 8051 instruction set and specific programming examples for data manipulation and conversion would be directly applicable. This book often provides well-structured ALP examples.
*   **I. Scott MacKenzie, Raphael C.-W. Phan's "The 8051 Microcontroller":** This reference would offer alternative perspectives and potentially more advanced examples of ALP, including data conversion tasks.

**How these resources help CO1 & CO2:**

*   **CO1 (Develop and execute ALP programs for solving arithmetic and logical problems):** Textbooks provide the instruction set, addressing modes, and fundamental programming techniques (loops, branches, data movement) necessary to build the BCD to ASCII conversion logic. Examples in these books often showcase arithmetic operations that are analogous to the addition and masking steps in this conversion.
*   **CO2 (Develop embedded C programming using instruction sets of 8051):** While this topic is ALP, understanding the underlying operations (like byte manipulation, addition, bit masking) through ALP helps in appreciating how these translate to C code. The logic of BCD to ASCII conversion is the same whether written in ALP or C. Learning ALP first provides a deeper understanding of what the C compiler does behind the scenes.

---

### 8. Practice Questions and Exercises

**Question 1:**

Write an ALP for the 8051 to convert a single unpacked BCD digit stored in memory location `20H` to its ASCII equivalent and store it in memory location `21H`. Assume the BCD digit is less than or equal to `9`.

**Answer 1:**

```assembly
ORG 0000H

START:
    MOV A, 20H          ; Fetch the unpacked BCD digit from location 20H
    ADD A, #30H         ; Add the ASCII offset (30H)
    MOV 21H, A          ; Store the ASCII result in location 21H
    SJMP $              ; Infinite loop

; Data section (optional, for simulation if needed)
ORG 0020H
DB 07H              ; Example: Unpacked BCD for 7
```

**Explanation:**
*   We load the BCD digit from `20H` into the accumulator `A`.
*   We add `30H` to `A`. If `20H` contains `07H`, then `A` becomes `07H + 30H = 37H`, which is the ASCII code for '7'.
*   The result is stored in `21H`.

**Question 2:**

Write an ALP for the 8051 to convert a two-digit packed BCD number stored at memory address `30H` into two ASCII characters. The ASCII character for the tens digit should be stored at `40H` and the ASCII character for the units digit at `41H`.

**Answer 2:**

```assembly
ORG 0000H

START:
    MOV DPTR, #30H      ; Point DPTR to the packed BCD data
    MOV R1, #40H        ; Point R1 to the ASCII output location for tens digit

    MOV A, @DPTR        ; Fetch the packed BCD byte (e.g., 35H)
    MOV B, A            ; Save the byte in B for units digit extraction

    ; --- Process Tens Digit ---
    ANL A, #0F0H        ; Mask lower nibble: A = 30H (Tens digit represented as 30H)
    SWAP A              ; Swap nibbles: A = 03H (Actual BCD value of tens digit)
    ADD A, #30H         ; Convert to ASCII: A = 03H + 30H = 33H
    MOV @R1, A          ; Store ASCII for tens digit at 40H
    INC R1              ; Move R1 to the next location (41H)

    ; --- Process Units Digit ---
    MOV A, B            ; Retrieve the original packed BCD byte from B
    ANL A, #00FH        ; Mask upper nibble: A = 05H (BCD value of units digit)
    ADD A, #30H         ; Convert to ASCII: A = 05H + 30H = 35H
    MOV @R1, A          ; Store ASCII for units digit at 41H

    SJMP $              ; Infinite loop

; Data section (example input)
ORG 0030H
DB 35H              ; Example: Packed BCD for 35
```

**Explanation:**
*   The `DPTR` is set to the address of the packed BCD.
*   The packed BCD byte is fetched and saved in `B`.
*   The tens digit is extracted by masking with `0F0H`, then swapped using `SWAP A` to bring the BCD value to the lower nibble. Finally, `30H` is added.
*   The units digit is retrieved from `B`, masked with `00FH`, and `30H` is added.
*   The results are stored sequentially in the output memory locations.

---

### 9. Important Points to Remember

*   **BCD vs. ASCII:** Understand the fundamental difference: BCD represents decimal digits, while ASCII represents characters.
*   **ASCII Offset:** The key to converting a BCD digit (0-9) to its ASCII character is to add `30H`.
*   **Unpacked vs. Packed BCD:** The extraction logic differs. Unpacked BCD typically treats each nibble as a separate BCD digit, often with leading zeros. Packed BCD combines two BCD digits into a single byte.
*   **`DPTR` and Indirect Addressing:** `DPTR` is crucial for addressing data in memory. `@DPTR` is used to access the data at the address held by `DPTR`.
*   **Register Usage:** Choose registers appropriately to avoid data corruption.
*   **`SWAP A`:** This instruction is very useful when dealing with packed BCD to move the upper nibble to the lower nibble position (and vice-versa) for further processing.

---

### 10. Alignment with Course Outcomes

*   **CO1 (Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller - K3):** This entire topic is a direct application of CO1. We develop an ALP that solves the arithmetic problem of code conversion. The operations involved (addition, masking, shifting) are fundamental arithmetic and logical operations. The knowledge level K3 (Application) is met as students apply their understanding of the 8051 instruction set to solve a practical problem.
*   **CO2 (Develop embedded C programming using instruction sets of 8051 - K3):** While the notes focus on ALP, the underlying logic for BCD to ASCII conversion is the same in C. Understanding the ALP implementation helps students appreciate how these operations are performed at a lower level, which is beneficial when writing efficient embedded C code. For instance, the `ADD A, #30H` in ALP corresponds to `ascii_char = bcd_digit + 0x30;` in C.

---

This concludes the study notes for BCD to ASCII conversion using 8051 ALP. This is a foundational concept for many embedded systems applications where numerical data needs to be displayed or transmitted.