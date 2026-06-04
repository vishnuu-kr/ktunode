---
title: "Control structures in assembly language: instruction sequencing, conditional branch instructions, translating if-then and if-then-else statements to assembly, compound conditionals, implementing loops, speeding up array access, Implementing functions: function call and return, register usage, parameter passing, return values, temporary variables, preserving registers"
subject: "ARM ARCHITECTURE, PROGRAMMING AND INTERFACING"
module: "Module 3: Control structures in assembly language: instruction sequencing, conditional branch instructions, translating if"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec15"
status: "completed"
scrapedAt: "2026-05-23T17:53:54.867Z"
---
# ARM Architecture, Programming, and Interfacing - Module 3: Control Structures in Assembly Language

## Introduction to Control Structures in Assembly

Control structures are fundamental to programming, allowing us to dictate the flow of execution within a program. In assembly language, we achieve this by manipulating the Program Counter (PC) and utilizing conditional logic. This module explores how to translate high-level control flow constructs like `if`, `else`, and loops into ARM assembly.

**Key Concepts:**

*   **Instruction Sequencing:** The default execution of instructions in the order they appear in memory.
*   **Program Counter (PC):** A register that holds the address of the next instruction to be executed. Modifying the PC directly is how we alter instruction flow.
*   **Branching:** The act of changing the PC to a different address, effectively jumping to a different part of the code.
*   **Conditional Execution:** Executing an instruction only if a specific condition is met.

**Relevant Textbooks:**

*   **Lewis, "Fundamentals of Embedded Software with the ARM Cortex M3," 2e:** Chapters on basic assembly programming and control flow.
*   **Zhu, "Embedded systems with ARM Cortex M Microcontrollers in Assembly and C," 3e:** Provides practical examples of control structures in embedded contexts.
*   **Yiu, "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors," 3e:** Offers in-depth explanations of instruction set architecture and how it supports control flow.

**Alignment with Course Outcomes:**

*   **CO1 (K3):** Understanding how to implement control structures in assembly directly relates to using C features that are often compiled to these assembly constructs.
*   **CO2 (K2):** Learning about instruction sequencing and the PC provides a programmer's view of processor architecture.
*   **CO3 (K3):** This module directly addresses choosing between assembly and C by showing how to implement fundamental logic in assembly.

---

## 1. Instruction Sequencing and Conditional Branch Instructions

### 1.1 Instruction Sequencing

By default, instructions are executed sequentially. The processor fetches the instruction at the address pointed to by the PC, executes it, and then increments the PC to point to the next instruction in memory.

**Example:**

```assembly
    MOV R0, #5      @ Load 5 into R0
    ADD R1, R0, #2  @ Add 2 to R0 and store in R1
    BX LR           @ Return from function (or end of program)
```

In this sequence, the `MOV` instruction is executed first, then `ADD`, and finally `BX LR`. The PC automatically advances after each instruction execution.

### 1.2 Conditional Branch Instructions

Conditional branch instructions allow the program flow to deviate from sequential execution based on the state of the processor's condition flags. These flags are typically set by comparison instructions (e.g., `CMP`) or arithmetic operations.

**Key Condition Codes:**

| Code | Condition    | Description                                      |
| :--- | :----------- | :----------------------------------------------- |
| EQ   | Equal        | Z flag is set (Zero)                             |
| NE   | Not Equal    | Z flag is clear                                  |
| CS   | Carry Set    | C flag is set (Carry/Unsigned Greater Than/Equal)|
| CC   | Carry Clear  | C flag is clear (Not Carry/Unsigned Less Than)   |
| MI   | Minus/Negative| N flag is set                                    |
| PL   | Plus/Positive| N flag is clear                                  |
| VS   | Overflow Set | V flag is set                                    |
| VC   | Overflow Clear| V flag is clear                                  |
| HI   | Unsigned Higher | C flag is set and Z flag is clear              |
| LS   | Unsigned Lower/Equal | C flag is clear or Z flag is set           |
| GE   | Signed Greater Than/Equal | N flag equals V flag                  |
| LT   | Signed Less Than | N flag not equal to V flag                   |
| GT   | Signed Greater Than | Z flag is clear and N flag equals V flag   |
| LE   | Signed Less Than/Equal | Z flag is set or N flag not equal to V flag|

**Common Branch Instructions:**

*   **`B label`:** Unconditional Branch. Jumps to `label`.
*   **`BEQ label`:** Branch if Equal. Jumps to `label` if the Z flag is set.
*   **`BNE label`:** Branch if Not Equal. Jumps to `label` if the Z flag is clear.
*   **`BLT label`:** Branch if Less Than (signed). Jumps to `label` if the N flag is not equal to the V flag.
*   **`BGT label`:** Branch if Greater Than (signed). Jumps to `label` if the Z flag is clear and the N flag is equal to the V flag.
*   **`BL label`:** Branch and Link. Jumps to `label` and saves the return address in the Link Register (LR). Used for function calls.

**Example: Comparing Two Numbers**

```assembly
    MOV R0, #10
    MOV R1, #5

    CMP R0, R1      @ Compare R0 and R1. Sets flags based on R0 - R1.

    BEQ equal_labels  @ Branch if R0 is equal to R1
    BNE not_equal_labels @ Branch if R0 is not equal to R1

equal_labels:
    ; Code to execute if R0 == R1
    MOV R2, #1
    B continue_code

not_equal_labels:
    ; Code to execute if R0 != R1
    MOV R2, #0

continue_code:
    ; Execution continues here regardless of the comparison
```

**Important Points to Remember:**

*   Conditional branches are essential for implementing decision-making in assembly.
*   The `CMP` instruction is frequently used before conditional branches to set the flags.
*   The assembler calculates the displacement for the branch targets.

---

## 2. Translating `if-then` and `if-then-else` Statements to Assembly

### 2.1 Translating `if-then` Statements

An `if-then` statement executes a block of code only if a certain condition is true.

**C Code:**

```c
if (a > b) {
    // code to execute if a > b
    x = 1;
}
// code that always executes
```

**Assembly Translation:**

1.  Compare `a` and `b`.
2.  If the condition (`a > b`) is **not** met, branch **over** the `if` block.
3.  Execute the `if` block code.
4.  (Optional) Branch to a point after the `if` block to skip it if the condition was false.

**ARM Assembly:**

```assembly
    ; Assume a is in R0, b is in R1, x is in R2
    MOV R0, #10
    MOV R1, #5
    MOV R2, #0     @ Initialize x to 0

    CMP R0, R1      @ Compare a and b (R0 - R1)
    BLT skip_if     @ Branch if Less Than (a < b) - skip the 'if' block

if_block:
    MOV R2, #1      @ x = 1 (execute if a > b)

skip_if:
    ; Code that always executes after the if-then structure
    @ ...
```

**Explanation:**

*   `CMP R0, R1` compares `R0` (a) and `R1` (b). The `LT` (Less Than, signed) condition checks if `R0 < R1`.
*   If `R0 < R1` (i.e., `a < b`), the `BLT` instruction branches to `skip_if`.
*   If `R0 >= R1` (i.e., `a >= b`), the `BLT` instruction does not branch, and `MOV R2, #1` is executed, setting `x` to 1.
*   The `skip_if` label marks the point where execution continues after the conditional block.

### 2.2 Translating `if-then-else` Statements

An `if-then-else` statement executes one block of code if a condition is true and another block if it is false.

**C Code:**

```c
if (a > b) {
    // code if a > b
    x = 1;
} else {
    // code if a <= b
    x = 0;
}
// code that always executes
```

**Assembly Translation:**

1.  Compare `a` and `b`.
2.  If the condition (`a > b`) is true, branch to the `if` block.
3.  If the condition is false, branch to the `else` block.
4.  Execute the `if` block code.
5.  **Crucially, branch over the `else` block.**
6.  Execute the `else` block code.
7.  Continue execution after both blocks.

**ARM Assembly:**

```assembly
    ; Assume a is in R0, b is in R1, x is in R2
    MOV R0, #10
    MOV R1, #5
    MOV R2, #0     @ Initialize x to 0

    CMP R0, R1      @ Compare a and b (R0 - R1)
    BGT if_block    @ Branch if Greater Than (a > b) to if_block
    ; If not greater than, execute the else block by default
    MOV R2, #0      @ x = 0 (execute if a <= b)
    B skip_else     @ Branch over the else block to skip it

if_block:
    MOV R2, #1      @ x = 1 (execute if a > b)

skip_else:
    ; Code that always executes after the if-then-else structure
    ; ...
```

**Explanation:**

*   `CMP R0, R1` compares `a` and `b`.
*   `BGT if_block` branches to `if_block` if `a > b` (signed comparison).
*   If `a <= b`, the `BGT` does not branch. The code then executes `MOV R2, #0`, setting `x` to 0 (the `else` block).
*   `B skip_else` then unconditionally jumps over the `if_block` code to `skip_else`, preventing the `if` block from executing when the `else` block was chosen.
*   The `if_block` executes only when `a > b`.
*   `skip_else` is the common point for execution after the conditional logic.

**Important Points to Remember:**

*   The logic for branching must be inverted. If you want to execute a block when a condition is true, you branch *past* it if the condition is false.
*   An unconditional branch (`B`) is needed after the `if` block to skip the `else` block.

---

## 3. Compound Conditionals

Compound conditionals combine multiple conditions using logical operators (AND, OR, NOT). In assembly, these are typically implemented by a series of comparisons and conditional branches.

**C Code:**

```c
if (a > b && c < d) {
    // code if both conditions are true
}
```

**Assembly Translation for `AND`:**

Implement the first condition. If it's false, branch away. If it's true, implement the second condition. If it's also true, execute the block.

**ARM Assembly (AND):**

```assembly
    ; Assume a in R0, b in R1, c in R2, d in R3
    MOV R0, #10
    MOV R1, #5
    MOV R2, #3
    MOV R3, #8

    CMP R0, R1      @ Compare a and b
    BLT skip_and    @ If a < b, condition (a > b) is false, so skip

    CMP R2, R3      @ Compare c and d
    BLT execute_block @ If c < d, both conditions are true, execute

skip_and:
    ; Code if (a <= b) OR (c >= d)
    B end_compound

execute_block:
    ; Code if (a > b) AND (c < d)
    ; ...

end_compound:
    ; ...
```

**Explanation (AND):**

1.  Compare `a` and `b`. If `a < b` (condition `a > b` is false), branch to `skip_and`.
2.  If `a >= b`, continue. Now compare `c` and `d`.
3.  If `c < d` (condition `c < d` is true), branch to `execute_block`.
4.  If `c >= d`, the second condition is false, so the overall `AND` is false. The code continues to `skip_and`.
5.  `skip_and` represents the outcome where the combined `AND` condition is false.
6.  `execute_block` represents the outcome where the combined `AND` condition is true.
7.  An unconditional branch `B end_compound` is used after `skip_and` to skip the `execute_block` when the condition is false.

**Assembly Translation for `OR`:**

Implement the first condition. If it's true, branch to execute the block. If it's false, implement the second condition. If it's true, branch to execute the block. If both are false, branch to skip.

**ARM Assembly (OR):**

```assembly
    ; Assume a in R0, b in R1, c in R2, d in R3
    MOV R0, #10
    MOV R1, #5
    MOV R2, #3
    MOV R3, #8

    CMP R0, R1      @ Compare a and b
    BGT execute_block @ If a > b, condition (a > b) is true, so execute

    CMP R2, R3      @ Compare c and d
    BLT execute_block @ If c < d, second condition is true, so execute

    ; If we reach here, both conditions were false
skip_or:
    ; Code if (a <= b) AND (c >= d)
    B end_compound

execute_block:
    ; Code if (a > b) OR (c < d)
    ; ...

end_compound:
    ; ...
```

**Explanation (OR):**

1.  Compare `a` and `b`. If `a > b` (condition `a > b` is true), branch to `execute_block`.
2.  If `a <= b`, continue. Now compare `c` and `d`.
3.  If `c < d` (condition `c < d` is true), branch to `execute_block`.
4.  If `c >= d`, the second condition is false. Since the first was also false, the overall `OR` is false. The code continues to `skip_or`.
5.  `skip_or` represents the outcome where the combined `OR` condition is false.
6.  `execute_block` represents the outcome where the combined `OR` condition is true.
7.  An unconditional branch `B end_compound` is used after `skip_or` to skip the `execute_block` when the condition is false.

**Important Points to Remember:**

*   Compound conditionals require careful management of branches to ensure correct logic.
*   For `AND`, if the first condition fails, you skip the rest.
*   For `OR`, if the first condition succeeds, you execute and skip the rest. If the first fails, you test the second.

---

## 4. Implementing Loops

Loops are used to repeat a block of code multiple times. Common loop structures include `for`, `while`, and `do-while`.

### 4.1 `for` Loops

A `for` loop typically has an initialization, a condition for continuation, and an update expression.

**C Code:**

```c
int sum = 0;
for (int i = 0; i < 10; i++) {
    sum += i;
}
```

**Assembly Translation:**

1.  Initialize a counter variable (e.g., `i`).
2.  Start a loop label.
3.  Check the loop condition (e.g., `i < 10`). If false, branch out.
4.  Execute the loop body (e.g., `sum += i`).
5.  Update the counter (e.g., `i++`).
6.  Branch back to the loop label.

**ARM Assembly:**

```assembly
    ; Assume sum in R0, i in R1
    MOV R0, #0      @ Initialize sum = 0
    MOV R1, #0      @ Initialize i = 0

loop_start:
    CMP R1, #10     @ Compare i with 10
    BGE loop_end    @ If i >= 10, branch to loop_end

    ADD R0, R0, R1  @ sum = sum + i
    ADD R1, R1, #1  @ i = i + 1

    B loop_start    @ Branch back to the start of the loop

loop_end:
    ; Loop has finished, sum is in R0
    ; ...
```

**Explanation:**

*   `loop_start` is the label marking the beginning of the loop.
*   `CMP R1, #10` compares the counter `R1` with the loop limit `10`.
*   `BGE loop_end` branches out of the loop if `R1` is Greater Than or Equal to `10` (the condition `i < 10` is false).
*   If the condition is true, the loop body executes: `sum += i` and `i++`.
*   `B loop_start` unconditionally branches back to check the condition again.
*   `loop_end` is where execution continues after the loop terminates.

### 4.2 `while` Loops

A `while` loop executes a block of code as long as a condition remains true.

**C Code:**

```c
int count = 5;
while (count > 0) {
    // do something
    count--;
}
```

**Assembly Translation:**

1.  Start a loop label.
2.  Check the loop condition. If false, branch out.
3.  Execute the loop body.
4.  Update variables as needed.
5.  Branch back to the loop label.

**ARM Assembly:**

```assembly
    ; Assume count in R0
    MOV R0, #5      @ Initialize count = 5

loop_start:
    CMP R0, #0      @ Compare count with 0
    BLE loop_end    @ If count <= 0, branch to loop_end (condition count > 0 is false)

    ; Loop body: do something
    SUB R0, R0, #1  @ count--

    B loop_start    @ Branch back to the start of the loop

loop_end:
    ; Loop finished
    ; ...
```

**Explanation:**

*   Similar to the `for` loop, but the condition check is usually at the beginning.
*   `BLE loop_end` branches out if `count` is Less Than or Equal to `0`.

### 4.3 `do-while` Loops

A `do-while` loop is guaranteed to execute at least once. The condition is checked at the end of the loop.

**C Code:**

```c
int value = 0;
do {
    value++;
    // some operation
} while (value < 5);
```

**Assembly Translation:**

1.  Start a label for the loop body.
2.  Execute the loop body.
3.  Check the loop condition. If true, branch back.

**ARM Assembly:**

```assembly
    ; Assume value in R0
    MOV R0, #0      @ Initialize value = 0

loop_body:
    ADD R0, R0, #1  @ value++
    ; some operation

    CMP R0, #5      @ Compare value with 5
    BLT loop_body   @ If value < 5, branch back to loop_body

    ; Loop finished
    ; ...
```

**Explanation:**

*   The loop body executes first.
*   The condition `BLT loop_body` branches back if `value < 5`.

**Important Points to Remember:**

*   Loop termination is achieved by branching *out* of the loop when the condition is met (or not met, depending on the loop type).
*   Use `CMP` to set flags for the conditional branch.
*   Ensure the loop counter or condition variable is updated correctly within the loop.

---

## 5. Speeding Up Array Access

Accessing elements in arrays efficiently is crucial for performance. In assembly, this involves using indexed addressing modes and careful register allocation.

**Key Concepts:**

*   **Base Address:** The memory address of the first element of the array.
*   **Offset:** The distance from the base address to the desired element.
*   **Element Size:** The size of each element in bytes (e.g., 1 for bytes, 2 for halfwords, 4 for words).
*   **Indexed Addressing Modes:** ARM provides powerful addressing modes that can calculate the address of an array element in a single instruction.

### 5.1 Array Traversal with Indexed Addressing

**C Code:**

```c
int data[5] = {10, 20, 30, 40, 50};
int element = data[2]; // Access the element at index 2
```

**Assembly Translation:**

1.  Load the base address of the array into a register.
2.  Calculate the offset: `index * element_size`.
3.  Use an indexed addressing mode to load the element.

**ARM Assembly (Accessing `data[2]` where `data` is an array of words (4 bytes)):**

```assembly
    ; Assume data array starts at address 0x1000
    ; Assume index = 2

    LDR R0, =0x1000     @ Load base address of data into R0
    MOV R1, #2          @ Load index into R1
    MOV R2, #4          @ Load element size (word = 4 bytes) into R2

    MUL R1, R1, R2      @ Calculate offset: R1 = index * element_size (2 * 4 = 8)

    ; Accessing element using offset
    LDR R3, [R0, R1]    @ Load word from memory: R3 = [R0 + R1]
                        @ R3 will contain data[2] (which is 30)
```

**Explanation:**

*   `LDR R0, =0x1000`: Loads the starting address of the array.
*   `MUL R1, R1, R2`: Computes the byte offset: `index * sizeof(element)`.
*   `LDR R3, [R0, R1]`: This is the key instruction. It uses **offset addressing**. The address is calculated as `R0 + R1` (base address + offset), and the word at that address is loaded into `R3`.

**5.1.1 Pre-indexed and Post-indexed Addressing:**

ARM processors also support pre-indexed and post-indexed addressing, which can be used to simultaneously access an element and update the index or base pointer.

*   **Pre-indexed:** `LDR R3, [R0, R1]!`
    *   The address is calculated as `R0 + R1`.
    *   The base register `R0` is updated with the calculated address (`R0 = R0 + R1`).
    *   Used when you want to move the pointer forward after access.

*   **Post-indexed:** `LDR R3, [R0], R1`
    *   The address is calculated as `R0`.
    *   The value is loaded from `R0` into `R3`.
    *   The base register `R0` is then updated with the calculated address (`R0 = R0 + R1`).
    *   This is very useful for iterating through arrays.

**Example using Post-indexed Addressing for a Loop:**

```assembly
    ; Traverse an array and sum its elements (array of 5 words)
    LDR R0, =data_array   @ R0 = base address of data_array
    MOV R4, #5            @ R4 = array size (number of elements)
    MOV R1, #4            @ R1 = element size (word = 4 bytes)
    MOV R2, #0            @ R2 = sum = 0

    MOV R3, R1            @ R3 = R1 (element size for index calculation)
                          @ R3 will be used to scale the index (or can use R1 directly in MUL)

loop_array:
    CMP R4, #0            @ Check if all elements have been processed
    BEQ loop_array_end    @ If count is 0, exit loop

    LDR R5, [R0], #4      @ Load current element into R5, THEN increment R0 by 4 bytes (post-indexed)
    ADD R2, R2, R5        @ Add loaded element to sum

    SUB R4, R4, #1        @ Decrement element count

    B loop_array          @ Repeat

loop_array_end:
    ; Sum is in R2
    ; ...

data_array:
    .word 10, 20, 30, 40, 50
```

**Explanation:**

*   `LDR R5, [R0], #4`: This is the core of the array traversal.
    *   It loads the word at the current address in `R0` into `R5`.
    *   *After* loading, it updates `R0` by adding `#4` (the element size), effectively moving the base pointer to the next element.
*   This eliminates the need for a separate `MUL` operation inside the loop, making it more efficient.

**Important Points to Remember:**

*   Leverage ARM's addressing modes (especially post-indexed) for efficient array processing within loops.
*   Ensure correct calculation of the offset based on the element size.
*   Be mindful of the data type (byte, halfword, word) when calculating offsets and using load/store instructions.

---

## 6. Implementing Functions

Functions (or subroutines) allow for code modularity and reusability. In assembly, function calls and returns are managed using specific instructions and registers.

**Key Concepts:**

*   **Function Call:** Transferring control to a function.
*   **Function Return:** Transferring control back to the caller after the function completes.
*   **Link Register (LR):** Stores the return address (the address of the instruction *after* the call) when a function is called.
*   **Stack:** A region of memory used to store temporary data, local variables, and return addresses.
*   **Parameter Passing:** How arguments are passed from the caller to the callee function.
*   **Return Values:** How a function communicates its result back to the caller.

### 6.1 Function Call and Return

**Function Call:**

The `BL` (Branch and Link) instruction is used for function calls.

*   `BL function_label`: It branches to `function_label` and automatically stores the address of the instruction immediately following `BL` into the Link Register (LR).

**Function Return:**

The `BX LR` (Branch and Exchange to Link Register) instruction is used to return from a function.

*   `BX LR`: It branches to the address stored in LR, effectively returning to the instruction after the `BL` call.

**Example:**

```assembly
; --- Caller Function ---
caller_func:
    PUSH {R4, LR}       @ Save registers (R4 for data, LR for return address)

    MOV R4, #15         @ Some data for the function
    BL add_ten          @ Call the add_ten function

    ; R0 now contains the result from add_ten
    ADD R4, R4, R0      @ Use the result

    POP {R4, LR}        @ Restore registers
    BX LR               @ Return from caller_func

; --- Callee Function ---
add_ten:
    PUSH {LR}           @ Save the Link Register (important for nested calls)

    ADD R0, R0, #10     @ Add 10 to the value in R0 (assuming R0 holds the input)

    POP {LR}            @ Restore the Link Register
    BX LR               @ Return to the caller

```

**Explanation:**

1.  The `caller_func` saves its state (e.g., `R4` and `LR`) onto the stack before calling `add_ten`. This is crucial to preserve the caller's context.
2.  `BL add_ten` transfers control to `add_ten` and saves the return address (the `ADD R4, R4, R0` instruction) in `LR`.
3.  `add_ten` saves its own `LR` (in case it calls another function).
4.  It performs its operation: `ADD R0, R0, #10`. It assumes the input is in `R0`.
5.  It restores the `LR` it saved.
6.  `BX LR` returns to the `caller_func` at the instruction after the `BL`.
7.  `caller_func` restores its context and continues execution.

### 6.2 Register Usage

A convention for register usage helps manage shared resources between caller and callee.

*   **Caller-Saved Registers (Scratch Registers):** Registers that the caller can assume are modified by the callee. The caller must save these registers if it needs their values after the function call. Examples: `R0-R3`, `R12`.
*   **Callee-Saved Registers (Volatile Registers):** Registers that the callee must preserve if it uses them. The callee must save these registers on the stack upon entry and restore them before returning. Examples: `R4-R11`, `FP` (R11), `IP` (R12, sometimes).

**ARM Procedure Call Standard (AAPCS):**

*   **R0-R3:** Used for the first four parameters and for the return value.
*   **R4-R11:** Callee-saved.
*   **R12 (IP):** Intra-Procedure-call scratch register. Can be used by both caller and callee.
*   **R13 (SP):** Stack Pointer.
*   **R14 (LR):** Link Register.
*   **R15 (PC):** Program Counter.

### 6.3 Parameter Passing

*   **Registers (R0-R3):** The first four parameters are passed in registers `R0`, `R1`, `R2`, and `R3` in order.
*   **Stack:** If a function has more than four parameters, the subsequent parameters are pushed onto the stack by the caller before the `BL` instruction. The callee then retrieves them from the stack.

**Example: Passing Multiple Parameters**

**C Code:**

```c
int multiply_add(int a, int b, int c) {
    return a * b + c;
}

int main() {
    int result = multiply_add(5, 3, 2); // a=5, b=3, c=2
    // ...
}
```

**ARM Assembly:**

```assembly
; --- Callee: multiply_add ---
multiply_add:
    PUSH {R4, LR}       @ Save callee-saved registers and LR

    ; R0 = a, R1 = b, R2 = c
    MUL R4, R0, R1      @ R4 = a * b (using R4 as temporary)
    ADD R0, R4, R2      @ R0 = (a * b) + c (result in R0)

    POP {R4, LR}        @ Restore callee-saved registers and LR
    BX LR               @ Return

; --- Caller: main ---
main:
    PUSH {LR}           @ Save LR

    MOV R0, #5          @ Pass parameter 'a'
    MOV R1, #3          @ Pass parameter 'b'
    MOV R2, #2          @ Pass parameter 'c'
    BL multiply_add     @ Call the function

    ; R0 now contains the return value (result of a*b+c)
    MOV R3, R0          @ Store result in R3

    POP {LR}            @ Restore LR
    BX LR               @ Return from main
```

**Explanation:**

*   The caller loads `a` into `R0`, `b` into `R1`, and `c` into `R2` before calling.
*   The callee `multiply_add` uses `R0`, `R1`, `R2` for its parameters.
*   It uses `R4` as a temporary register to hold `a * b`. It saves `R4` (callee-saved) on the stack.
*   The result `(a * b) + c` is placed back into `R0` for return.

### 6.4 Return Values

*   **Registers (R0-R3):** The primary register for returning a value is `R0`. For larger return values that don't fit in a single register, `R0` and `R1` can be used, or a pointer to a memory location can be passed as a parameter.
*   **Stack:** Not typically used for simple return values.

### 6.5 Temporary Variables

Local variables within a function are often stored in registers (caller-saved if the callee might use them) or on the stack.

*   **Using Caller-Saved Registers:** If a function needs a temporary variable and can use a register that the caller expects to be volatile (e.g., R0-R3), it can use that register without saving it.
*   **Using Callee-Saved Registers:** If a function needs a temporary variable and wants to ensure it's preserved across function calls *within* the current function, or if it needs to store it temporarily to free up caller-saved registers, it should save a callee-saved register (R4-R11) on the stack.
*   **Stack Allocation:** For larger local variables or if all registers are in use, space can be allocated on the stack for local variables.

**Example: Using Stack for Local Variables**

```assembly
; Function that uses a stack frame for a local variable
process_data:
    PUSH {R4, R5, LR}   @ Save R4 (callee-saved), R5 (temp), LR

    MOV R4, R0          @ R0 is parameter, save it to R4
    MOV R5, #0          @ R5 = local_var = 0

    ; Allocate space on the stack for a local variable (e.g., 4 bytes)
    SUB SP, SP, #4      @ Decrement stack pointer

    ; Accessing the local variable on the stack
    STR R5, [SP]        @ Store R5 (local_var) onto the stack

    ; Example operation using the local variable
    ADD R5, R5, #5      @ local_var += 5
    STR R5, [SP]        @ Store updated local_var back

    ADD R0, R4, R5      @ R0 = parameter + local_var (result)

    ; Deallocate stack space
    ADD SP, SP, #4      @ Increment stack pointer

    POP {R4, R5, LR}    @ Restore registers
    BX LR               @ Return
```

**Explanation:**

*   `SUB SP, SP, #4`: Makes space on the stack for a local variable. The stack grows downwards.
*   `STR R5, [SP]`: Stores the current value of `R5` (our local variable) at the location pointed to by `SP`.
*   `ADD SP, SP, #4`: Restores the stack pointer, effectively deallocating the space.

### 6.6 Preserving Registers

*   **Caller-Saved:** The caller must save any caller-saved registers it needs before calling a function.
*   **Callee-Saved:** The callee must save any callee-saved registers it intends to use *before* modifying them. It must restore them to their original values *before* returning. This is typically done by pushing them onto the stack upon entry and popping them off before `BX LR`.

**Important Points to Remember:**

*   Follow the ARM Procedure Call Standard (AAPCS) for consistent function behavior.
*   Always save and restore the `LR` if your function calls other functions.
*   Properly manage the stack pointer (`SP`) when allocating and deallocating stack space.
*   Understand the difference between caller-saved and callee-saved registers.

---

## Practice Questions and Exercises

**Question 1:**
Translate the following C code snippet into ARM assembly. Assume `a` is in `R0`, `b` is in `R1`, and `result` is in `R2`.

```c
if (a > b) {
    result = a - b;
} else {
    result = b - a;
}
```

**Answer:**

```assembly
    ; a in R0, b in R1, result in R2
    CMP R0, R1      @ Compare a and b
    BGT a_greater   @ Branch if a > b

    ; else block (a <= b)
    SUB R2, R1, R0  @ result = b - a
    B end_if_else   @ Branch over the if block

a_greater:
    ; if block (a > b)
    SUB R2, R0, R1  @ result = a - b

end_if_else:
    ; ...
```

**Question 2:**
Write an ARM assembly function `sum_array_elements` that takes an array of 32-bit integers and its size as input parameters. The function should return the sum of the array elements.

*   Input:
    *   `R0`: Base address of the array.
    *   `R1`: Number of elements in the array.
*   Return Value:
    *   `R0`: Sum of the elements.

**Answer:**

```assembly
; Function to sum elements of an array of words
; Input: R0 = base address, R1 = number of elements
; Output: R0 = sum of elements

sum_array_elements:
    PUSH {R1, R4, R5, LR} ; Save callee-saved registers and LR
                          ; R1 is parameter for count, but we'll use R4 for it
                          ; R5 will be our sum accumulator
                          ; R4 will be the loop counter

    MOV R4, R1          ; Copy number of elements to R4 (loop counter)
    MOV R5, #0          ; Initialize sum (R5) to 0

    CMP R4, #0          ; Check if the array size is 0
    BEQ sum_done        ; If size is 0, skip loop

loop_sum:
    LDR R2, [R0], #4    ; Load current element into R2, increment R0 by 4 (post-indexed)
    ADD R5, R5, R2      ; Add loaded element to sum (R5)

    SUBS R4, R4, #1     ; Decrement loop counter and set flags
    BNE loop_sum        ; If counter is not zero, continue loop

sum_done:
    MOV R0, R5          ; Move the final sum to R0 for return

    POP {R1, R4, R5, LR}  ; Restore saved registers
    BX LR               ; Return to caller
```

**Question 3:**
Explain the purpose of the Link Register (LR) in ARM function calls and how `BL` and `BX LR` work together.

**Answer:**
The Link Register (LR) is a special register that holds the return address for function calls. When a function is called using the `BL` (Branch and Link) instruction, the processor automatically stores the address of the instruction *immediately following* the `BL` into the LR. This address is where the program should resume execution after the function completes.

To return from a function, the `BX LR` (Branch and Exchange to Link Register) instruction is used. This instruction causes the processor to branch to the address currently stored in the LR. The "Exchange" part indicates that it can also switch between ARM and Thumb execution states if necessary, though in most typical embedded scenarios it just performs a branch.

Essentially, `BL` records where to come back to, and `BX LR` uses that recorded address to go back.

---

## Important Points to Remember Summary

*   **Control Flow:** Manipulate the Program Counter (PC) using branch instructions.
*   **Conditional Branches:** Use `CMP` to set flags and then conditional branch instructions (`BEQ`, `BNE`, `BLT`, `BGT`, etc.) to alter execution flow based on these flags.
*   **`if-then` Translation:** Branch past the code block if the condition is false.
*   **`if-then-else` Translation:** Branch to the `if` block if true, otherwise execute the `else` block and then branch past the `if` block.
*   **Compound Conditionals:** Implement `AND` and `OR` logic using sequences of comparisons and conditional branches.
*   **Loops:** Use a loop label, a condition check (usually with `CMP` and a conditional branch out), loop body, counter/variable update, and an unconditional branch back to the loop label.
*   **Array Access:** Leverage ARM's indexed and pre/post-indexed addressing modes for efficient array traversal, especially `LDR Rd, [Rn], #offset` (post-indexed).
*   **Function Calls:** Use `BL` to call functions and `BX LR` to return.
*   **Register Usage:** Follow AAPCS for parameter passing (`R0-R3`) and return values (`R0`). Understand caller-saved (`R0-R3`, `R12`) and callee-saved (`R4-R11`) registers.
*   **Stack:** Use `PUSH` and `POP` to save/restore registers and manage local variables. Adjust `SP` when allocating/deallocating stack space for local variables.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
