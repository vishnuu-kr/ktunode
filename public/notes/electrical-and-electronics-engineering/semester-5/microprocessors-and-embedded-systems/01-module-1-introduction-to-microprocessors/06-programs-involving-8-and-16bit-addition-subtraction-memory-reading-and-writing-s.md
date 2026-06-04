---
title: "Programs involving 8 and 16bit Addition, Subtraction, Memory Reading and writing, Sorting"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 1: Introduction to microprocessors "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36210"
status: "completed"
scrapedAt: "2026-05-23T16:22:38.741Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS

## Module 1: Introduction to Microprocessors

### Topic: Programs involving 8 and 16-bit Addition, Subtraction, Memory Reading and Writing, Sorting

---

### 1. Introduction to Microprocessor Programming

This section introduces the fundamental concepts of writing programs for microprocessors, focusing on basic arithmetic operations, memory interaction, and data manipulation. We will primarily use the 8085 microprocessor as our reference point, as it's a foundational architecture often covered in introductory courses.

**Key Concepts:**

*   **Instruction Set:** A collection of commands that a microprocessor understands and can execute.
*   **Assembly Language:** A low-level programming language that uses mnemonics to represent machine code instructions. It's specific to a particular microprocessor architecture.
*   **Mnemonics:** Short, memorable abbreviations for machine code instructions (e.g., `MOV` for move, `ADD` for add).
*   **Registers:** Small, high-speed storage locations within the microprocessor used to hold data and instructions during processing.
*   **Memory:** External storage where programs and data are stored. Microprocessors interact with memory to read instructions and data, and to write results.
*   **Data Bus:** The path used to transfer data between the microprocessor and memory or I/O devices.
*   **Address Bus:** The path used to specify the location in memory or the I/O device to be accessed.
*   **Control Bus:** Carries control signals (e.g., read/write signals) to manage data flow.

**Reference:**

*   **Ram, B. (Fundamentals of Microprocessor and Micro controllers):** Provides a solid foundation on microprocessor architecture and basic instruction sets.
*   **Ramesh Gaonkar (Microprocessor, Architecture, Programming and Applications):** A widely used textbook that details the 8085 instruction set and programming techniques with numerous examples.

---

### 2. 8-bit and 16-bit Addition

Microprocessors can perform addition on both 8-bit and 16-bit data.

**Key Concepts:**

*   **8-bit Addition:** Adding two 8-bit numbers. The result can be an 8-bit number with a potential carry.
*   **16-bit Addition:** Adding two 16-bit numbers. This typically involves adding the lower 8 bits and then the higher 8 bits, considering any carry generated from the lower byte addition.
*   **Carry Flag:** A status flag in the processor's status register that indicates if an arithmetic operation resulted in a carry-out from the most significant bit.

**8085 Instructions for Addition:**

*   `ADD r`: Add the content of register `r` to the accumulator.
*   `ADC r`: Add the content of register `r` and the carry flag to the accumulator.
*   `DAD rp`: Add the content of register pair `rp` to the HL register pair. (16-bit addition)
*   `ADI data`: Add immediate 8-bit data to the accumulator.
*   `ACI data`: Add immediate 8-bit data and the carry flag to the accumulator.
*   `LXI rp, data16`: Load immediate 16-bit data into register pair `rp`. (Used to set up 16-bit values)

**Example: 8-bit Addition of two numbers**

Let's add two numbers, `25H` and `30H`, stored in memory locations `2000H` and `2001H` respectively. The result should be stored in memory location `2002H`.

```assembly
    MVI A, 00H      ; Initialize Accumulator to 00H
    LDA 2000H       ; Load the first number from 2000H into Accumulator
    ADD M           ; Add the content of memory location pointed by HL to Accumulator
    STA 2002H       ; Store the result in 2002H
    HLT             ; Halt the processor
```

**Explanation:**

1.  `MVI A, 00H`: Clears the accumulator, ensuring we start with a clean slate.
2.  `LDA 2000H`: Loads the first number (e.g., `25H`) from memory address `2000H` into the accumulator (register A).
3.  `ADD M`: This instruction assumes HL register pair points to the second number's memory location (`2001H`). It adds the content of the memory location pointed to by HL to the accumulator. **Correction:** A more direct way to add two numbers from specific locations is to load the second number into a different register or memory location and then add. For adding `25H` (at `2000H`) and `30H` (at `2001H`):

    ```assembly
    LDA 2000H       ; Load 25H into Accumulator
    LDA 2001H       ; Load 30H into Accumulator (overwrites previous value)
    ADD A           ; THIS IS INCORRECT - ADD needs another operand.
                    ; A better approach:

    LDA 2000H       ; Load first number (25H) into Accumulator
    MOV B, A        ; Move the first number to register B
    LDA 2001H       ; Load second number (30H) into Accumulator
    ADD B           ; Add the content of register B to Accumulator
    STA 2002H       ; Store the result (55H) in 2002H
    HLT             ; Halt
    ```

**Example: 16-bit Addition**

Add two 16-bit numbers stored at `3000H` (LSB) and `3001H` (MSB), and `3002H` (LSB) and `3001H` (MSB). Store the 16-bit result at `3004H` (LSB) and `3005H` (MSB).

```assembly
    LXI H, 3000H    ; Load HL with the address of the first number's LSB
    MOV A, M        ; Load the LSB of the first number into Accumulator
    MOV C, A        ; Store the LSB in register C

    INX H           ; Increment HL to point to the MSB of the first number
    MOV A, M        ; Load the MSB of the first number into Accumulator
    MOV B, A        ; Store the MSB in register B

    LXI H, 3002H    ; Load HL with the address of the second number's LSB
    MOV A, M        ; Load the LSB of the second number into Accumulator
    ADD C           ; Add the LSBs (content of C)
    MOV C, A        ; Store the LSB result in C (might have a carry)

    INX H           ; Increment HL to point to the MSB of the second number
    MOV A, M        ; Load the MSB of the second number into Accumulator
    ADC B           ; Add MSBs and the carry from LSB addition
    MOV B, A        ; Store the MSB result in B

    LXI H, 3004H    ; Load HL with the address to store the result's LSB
    MOV M, C        ; Store the LSB result from C

    INX H           ; Increment HL to point to the MSB storage location
    MOV M, B        ; Store the MSB result from B
    HLT             ; Halt
```

**Important Points:**

*   For 16-bit addition, always add the lower bytes first and use the `ADC` instruction for the higher bytes to incorporate the carry.
*   The `DAD rp` instruction is a convenient way to perform 16-bit addition directly with the HL register pair.

---

### 3. 8-bit and 16-bit Subtraction

Similar to addition, subtraction can be performed on 8-bit and 16-bit data.

**Key Concepts:**

*   **8-bit Subtraction:** Subtracting one 8-bit number from another. This can result in a borrow.
*   **Borrow Flag:** A status flag that indicates if a borrow occurred during a subtraction operation. In the 8085, the Carry flag is used to represent both borrow and carry. A borrow is indicated by the Carry flag being set (1).
*   **16-bit Subtraction:** Subtracting two 16-bit numbers, handling borrows between bytes.

**8085 Instructions for Subtraction:**

*   `SUB r`: Subtract the content of register `r` from the accumulator.
*   `SBB r`: Subtract the content of register `r` and the borrow flag from the accumulator.
*   `DCX rp`: Decrement the content of register pair `rp` by 1. (Used for 16-bit subtraction in some contexts, but not direct subtraction of two 16-bit numbers).
*   `SBI data`: Subtract immediate 8-bit data from the accumulator.
*   `SUI data`: Subtract immediate 8-bit data and the borrow flag from the accumulator.

**Example: 8-bit Subtraction**

Subtract `20H` from `55H`. Assume `55H` is in memory location `2000H` and `20H` is in `2001H`. Store the result in `2002H`.

```assembly
    LDA 2000H       ; Load 55H into Accumulator
    MOV B, A        ; Store 55H in register B
    LDA 2001H       ; Load 20H into Accumulator
    SUB B           ; Subtract content of B from Accumulator (55H - 20H)
    STA 2002H       ; Store the result (35H) in 2002H
    HLT             ; Halt
```

**Example: 16-bit Subtraction**

Subtract `3000H` from `5000H`. Store the result at `5002H` and `5003H`.
First number (minuend): LSB at `5000H`, MSB at `5001H`.
Second number (subtrahend): LSB at `5002H`, MSB at `5003H`.

```assembly
    LXI H, 5000H    ; HL points to LSB of the first number
    MOV A, M        ; Load LSB of first number into Accumulator
    MOV E, A        ; Store LSB in E

    INX H           ; HL points to MSB of the first number
    MOV A, M        ; Load MSB of first number into Accumulator
    MOV D, A        ; Store MSB in D

    LXI H, 5002H    ; HL points to LSB of the second number
    MOV A, M        ; Load LSB of second number into Accumulator
    SUB E           ; Subtract LSB of second number from LSB of first number (stored in E)
    MOV E, A        ; Store the result's LSB in E (borrow might be set)

    INX H           ; HL points to MSB of the second number
    MOV A, M        ; Load MSB of second number into Accumulator
    SBB D           ; Subtract MSB of second number and borrow from MSB of first number (stored in D)
    MOV D, A        ; Store the result's MSB in D

    LXI H, 5004H    ; HL points to storage for result's LSB
    MOV M, E        ; Store the LSB result

    INX H           ; HL points to storage for result's MSB
    MOV M, D        ; Store the MSB result
    HLT             ; Halt
```

**Important Points:**

*   The `SBB` instruction is crucial for 16-bit subtraction to handle the borrow.
*   Remember that the Carry flag acts as a borrow flag in subtraction. If a borrow occurs, the Carry flag is set to 1.

---

### 4. Memory Reading and Writing

Microprocessors constantly interact with memory to fetch instructions and data, and to store results.

**Key Concepts:**

*   **Memory Address:** A unique identifier for each byte of memory.
*   **Memory Read Operation:** The process of fetching data from a specific memory location. This involves placing the address on the address bus and asserting the memory read control signal.
*   **Memory Write Operation:** The process of storing data into a specific memory location. This involves placing the address on the address bus, placing the data on the data bus, and asserting the memory write control signal.
*   **HLT (Halt):** Stops the microprocessor execution.
*   **LDA (Load Accumulator):** Loads data from a specific memory address into the accumulator.
*   **STA (Store Accumulator):** Stores the content of the accumulator into a specific memory address.
*   **LXI rp, data16 (Load Extended Immediate):** Loads a 16-bit immediate value into a register pair. This is often used to set up addresses for memory operations.
*   **MOV r1, M:** Moves data from memory location pointed by HL to register `r1`.
*   **MOV M, r1:** Moves data from register `r1` to memory location pointed by HL.

**Example: Reading from and Writing to Memory**

**Task:** Copy a byte of data from memory location `2050H` to `2051H`.

```assembly
    LXI H, 2050H    ; Load HL register pair with the source address 2050H
    MOV A, M        ; Move the byte from memory location pointed by HL (2050H) to Accumulator
    MOV M, A        ; Move the byte from Accumulator to memory location pointed by HL (overwrites 2050H)
                    ; This is not what we want. We need to change HL.

    ; Corrected logic:
    LXI H, 2050H    ; Load HL with source address 2050H
    MOV A, M        ; Read data from 2050H into Accumulator

    INX H           ; Increment HL to point to destination address 2051H
    MOV M, A        ; Write the data from Accumulator to 2051H

    HLT             ; Halt
```

**Explanation:**

1.  `LXI H, 2050H`: Initializes the HL register pair with the address `2050H`. This register pair is commonly used as a memory pointer.
2.  `MOV A, M`: Reads the byte of data from the memory location pointed to by HL (`2050H`) and stores it in the accumulator (register A).
3.  `INX H`: Increments the HL register pair to point to the next memory location, `2051H`.
4.  `MOV M, A`: Writes the content of the accumulator (which is the data read from `2050H`) to the memory location pointed to by HL (`2051H`).

**Reference:**

*   **Ram, B. (Fundamentals of Microprocessor and Micro controllers):** Covers memory interfacing and basic I/O operations.
*   **Rafiquzzaman (Microprocessor Theory and Application):** Provides detailed explanations of memory read/write cycles.

---

### 5. Sorting Algorithms (Bubble Sort Example)

Sorting is the process of arranging data in a specific order (e.g., ascending or descending). Bubble sort is a simple comparison-based sorting algorithm.

**Key Concepts:**

*   **Array:** A collection of elements of the same data type stored in contiguous memory locations.
*   **Comparison:** Comparing two elements to determine their relative order.
*   **Swapping:** Exchanging the positions of two elements.
*   **Bubble Sort:** An algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

**Example: Bubble Sort (Ascending Order) for 8-bit numbers**

Let's sort an array of 5 numbers stored in memory from `2010H` to `2014H`.

```assembly
; --- Data Section ---
; Assume data is loaded at 2010H. For example:
; 2010H: 05H (Number of elements)
; 2011H: 03H
; 2012H: 01H
; 2013H: 04H
; 2014H: 02H

ARRAY_START EQU 2011H   ; Starting address of the array elements
NUM_ELEMENTS EQU 5      ; Number of elements to sort

; --- Program Section ---
    ORG 0000H       ; Start of program memory

    ; Initialize
    LXI H, ARRAY_START  ; HL points to the start of the array
    MOV C, A            ; C will hold the number of elements (need to load it first)
    LDA 2010H           ; Load the count of elements (5) into Accumulator
    MOV C, A            ; C = number of elements

    ; Outer loop (for passes)
    MOV B, C            ; B = number of elements (for outer loop counter)

OUTER_LOOP:
    PUSH B              ; Save B (outer loop counter)
    LXI H, ARRAY_START  ; Reset HL to the start of the array for each pass
    MOV A, C            ; A = number of elements (for inner loop counter)
    DEC A               ; Decrement A, as the last element will be in place after n-1 passes
    MOV B, A            ; B = n-1 (inner loop counter)

    ; Inner loop (for comparisons and swaps)
INNER_LOOP:
    MOV A, M            ; Load element at current HL position into Accumulator
    MOV D, M            ; Copy to D for comparison
    MOV E, A            ; Store current element in E

    INX H               ; Move HL to the next element
    MOV A, M            ; Load the next element into Accumulator

    CMP E               ; Compare the next element with the current element
    JC NO_SWAP          ; If next element < current element (Carry is set), no swap needed

    ; Swap elements
    MOV M, E            ; Move the current element (stored in E) to the next position
    MOV A, D            ; Load the current element (stored in D) back into Accumulator
    MOV M, A            ; Move the current element to the original HL position

NO_SWAP:
    DCR B               ; Decrement inner loop counter
    JNZ INNER_LOOP      ; If B is not zero, repeat inner loop

    POP B               ; Restore B (outer loop counter)
    DCR C               ; Decrement outer loop counter
    JNZ OUTER_LOOP      ; If C is not zero, repeat outer loop

    HLT                 ; Halt the processor
```

**Explanation of Bubble Sort Logic:**

1.  **Initialization:**
    *   Load the number of elements into register C.
    *   Use register B as the counter for the outer loop (passes).
    *   HL is initialized to the start of the array.

2.  **Outer Loop (`OUTER_LOOP`):**
    *   This loop controls the number of passes. For an array of `n` elements, `n-1` passes are generally sufficient.
    *   We save the outer loop counter (B) on the stack because it will be reused in the inner loop.
    *   HL is reset to the array start for each pass.
    *   The inner loop counter is set to `n-1` (as the largest element "bubbles up" to the last position in each pass).

3.  **Inner Loop (`INNER_LOOP`):**
    *   This loop compares adjacent elements.
    *   `MOV A, M`: Loads the first element into the accumulator.
    *   `MOV D, M` and `MOV E, A`: Copies the first element to registers D and E. D holds it for potential re-insertion, E holds it for comparison.
    *   `INX H`: Moves HL to the next element.
    *   `MOV A, M`: Loads the second (adjacent) element into the accumulator.
    *   `CMP E`: Compares the second element with the first element (which is in E).
    *   `JC NO_SWAP`: If the second element is less than the first (Carry is set), it means they are already in ascending order, so we jump to `NO_SWAP`.
    *   **Swap:** If `JC` condition is false (second element is greater than or equal to the first), we swap them.
        *   `MOV M, E`: The first element (from E) is written to the second element's position.
        *   `MOV A, D`: The original first element (saved in D) is loaded back into the accumulator.
        *   `MOV M, A`: The original first element is written back to its original position.
    *   `DCR B`: Decrements the inner loop counter.
    *   `JNZ INNER_LOOP`: Repeats the comparison/swap process until the end of the unsorted portion of the array.

4.  **End of Pass:**
    *   `POP B`: Restores the outer loop counter.
    *   `DCR C`: Decrements the outer loop counter.
    *   `JNZ OUTER_LOOP`: If there are more passes to be made, repeat the outer loop.

**Reference:**

*   **Ramesh Gaonkar (Microprocessor, Architecture, Programming and Applications):** Excellent examples of array manipulation and sorting algorithms in 8085 assembly.
*   **Arduino Cookbook by Michael Margolis:** While focused on Arduino, it provides fundamental programming logic that can be translated to assembly.

---

### 6. Practical Considerations and Arduino Context

While the examples above use 8085 assembly, the principles of addition, subtraction, memory access, and sorting are fundamental to all microprocessors and embedded systems.

**Arduino Uno:**

*   **Microcontroller:** Arduino Uno uses an ATmega328P microcontroller, which is an 8-bit AVR microcontroller.
*   **Programming Language:** Primarily programmed using C/C++ with the Arduino IDE. The C/C++ code is compiled into machine code that the ATmega328P understands.
*   **Memory:** Has RAM for variables and SRAM for program execution, and Flash memory for storing the program.
*   **Data Types:** C/C++ provides `int` (often 16-bit), `long` (often 32-bit), `char` (8-bit), etc., which simplify arithmetic operations compared to assembly.

**Example (Arduino C/C++): 16-bit Addition**

```cpp
void setup() {
  Serial.begin(9600); // Initialize serial communication

  // Declare 16-bit variables
  unsigned int num1 = 0x1234; // 4660 in decimal
  unsigned int num2 = 0x5678; // 22136 in decimal
  unsigned int sum;

  // Perform 16-bit addition
  sum = num1 + num2; // The compiler handles the 16-bit addition

  Serial.print("Number 1: ");
  Serial.println(num1, HEX); // Print in hexadecimal
  Serial.print("Number 2: ");
  Serial.println(num2, HEX);
  Serial.print("Sum: ");
  Serial.println(sum, HEX); // Should be 0x68AE (26804)
}

void loop() {
  // Nothing to do here for this example
}
```

**Example (Arduino C/C++): Bubble Sort**

```cpp
void setup() {
  Serial.begin(9600);

  // Array of 8-bit unsigned integers
  byte data[] = {5, 1, 4, 2, 8};
  int n = sizeof(data) / sizeof(data[0]); // Number of elements

  Serial.print("Unsorted array: ");
  for (int i = 0; i < n; i++) {
    Serial.print(data[i], HEX);
    Serial.print(" ");
  }
  Serial.println();

  // Perform Bubble Sort
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - 1 - i; j++) {
      // Compare adjacent elements
      if (data[j] > data[j + 1]) {
        // Swap elements if they are in the wrong order
        byte temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }

  Serial.print("Sorted array (ascending): ");
  for (int i = 0; i < n; i++) {
    Serial.print(data[i], HEX);
    Serial.print(" ");
  }
  Serial.println();
}

void loop() {
  // Nothing to do here
}
```

**Reference:**

*   **Arduino Cookbook by Michael Margolis:** Excellent practical examples for Arduino programming.
*   **Arduino for beginners: Essential Skills Every Maker Needs by John Baichtal:** Introduces basic Arduino programming concepts.
*   **Programming Arduino Next Steps: Going Further with Sketches by Simon Monk:** Advanced Arduino programming techniques.

---

### 7. Course Outcome Alignment

This module directly supports the following Course Outcomes:

*   **CO1: Describe the architecture of 8085 microprocessor and 8085 Assembly language programming.** (Knowledge Level: K2) - This topic provides hands-on experience with 8085 assembly programming for basic operations, reinforcing the understanding of the architecture's capabilities.
*   **CO5: Write Programs using Embedded C and implement an application using Arduino UNO board.** (Knowledge Level: K3) - The Arduino examples demonstrate how these fundamental operations are performed in Embedded C, a key skill for embedded systems development.

---

### 8. Practice Questions and Answers

**Question 1:** Write an 8085 assembly language program to add two 16-bit numbers stored at memory locations `2000H` (LSB) and `2001H` (MSB), and `2002H` (LSB) and `2003H` (MSB). Store the result at `2004H` (LSB) and `2005H` (MSB).

**Answer:**
```assembly
    LXI H, 2000H    ; HL points to the first number's LSB
    MOV A, M        ; Load LSB of first number into Accumulator
    MOV E, A        ; Store it in E

    INX H           ; HL points to MSB of first number
    MOV A, M        ; Load MSB of first number into Accumulator
    MOV D, A        ; Store it in D

    LXI H, 2002H    ; HL points to the second number's LSB
    MOV A, M        ; Load LSB of second number into Accumulator
    ADD E           ; Add LSBs
    MOV E, A        ; Store LSB result in E (carry might be generated)

    INX H           ; HL points to MSB of second number
    MOV A, M        ; Load MSB of second number into Accumulator
    ADC D           ; Add MSBs and the carry
    MOV D, A        ; Store MSB result in D

    LXI H, 2004H    ; HL points to the result's LSB storage
    MOV M, E        ; Store the LSB result

    INX H           ; HL points to the result's MSB storage
    MOV M, D        ; Store the MSB result

    HLT             ; Halt
```

**Question 2:** Explain the role of the Carry flag during subtraction in the 8085 microprocessor.

**Answer:**
In the 8085 microprocessor, the Carry flag acts as a **Borrow flag** during subtraction operations.
*   If a borrow is generated from the most significant bit during a subtraction, the Carry flag is set to 1.
*   If no borrow is generated, the Carry flag is cleared to 0.
*   The `SBB` (Subtract with Borrow) instruction uses the state of the Carry flag to perform the subtraction correctly, especially for multi-byte subtractions.

**Question 3:** What is the purpose of the `DAD rp` instruction?

**Answer:**
The `DAD rp` instruction in the 8085 microprocessor is used for **16-bit addition**. It adds the contents of the specified register pair `rp` (which can be BC, DE, HL, or SP) to the HL register pair. The result is stored in the HL register pair. This instruction is particularly useful for adding 16-bit numbers without using the accumulator for intermediate results.

**Question 4:** If you have an array of bytes in memory starting at address `3000H` and want to sort it in descending order using Bubble Sort, what would be the main change in the comparison step compared to ascending order?

**Answer:**
For descending order, the comparison condition in the bubble sort inner loop would be reversed. Instead of swapping if `data[j] > data[j + 1]` (for ascending), you would swap if `data[j] < data[j + 1]`. In terms of the 8085 `CMP` instruction, if `CMP R` is used (where R holds `data[j+1]` and Accumulator holds `data[j]`), you would swap if the **Carry flag is set** (indicating A < R).

---

### 9. Key Points to Remember

*   **8-bit vs. 16-bit:** Be mindful of the data size when performing arithmetic operations. 16-bit operations require handling carries/borrows between bytes.
*   **Carry/Borrow Flag:** The Carry flag is critical for multi-byte arithmetic. It acts as a carry in addition and a borrow in subtraction.
*   **Register Pairs:** Utilize register pairs (BC, DE, HL, SP) effectively for handling 16-bit data and addresses. HL is particularly important for memory addressing.
*   **Addressing Modes:** Understand how instructions like `LDA`, `STA`, `MOV M, r`, `MOV r, M` use direct addressing or implied addressing via HL.
*   **Sorting Logic:** Bubble sort involves nested loops and conditional swapping of adjacent elements.
*   **Assembly vs. C:** While assembly gives fine-grained control, higher-level languages like C (used with Arduino) abstract away much of the complexity, making programming faster and easier for complex tasks.

---
This comprehensive set of notes covers the requested topics, providing foundational knowledge and practical examples relevant to microprocessors and embedded systems. Remember to consult the mentioned textbooks for more in-depth explanations and a wider range of examples.
