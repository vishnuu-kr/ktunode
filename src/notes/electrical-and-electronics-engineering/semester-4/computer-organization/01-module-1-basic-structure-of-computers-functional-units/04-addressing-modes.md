---
title: "addressing modes."
subject: "COMPUTER ORGANIZATION"
module: "Module 1: Basic Structure of computers –functional units "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f53"
status: "completed"
scrapedAt: "2026-05-23T16:14:57.010Z"
---
## Computer Organization: Module 1 - Basic Structure of Computers – Functional Units

### Topic: Addressing Modes

**Learning Outcomes:**

*   Identify the relevance of functional units, memory locations, and addressing modes in a digital computer. (CO1 - K2)
*   (Implicitly related to instruction fetching and execution, which involves addressing modes)

**Course Outcomes Alignment:**

*   **CO1: Identify the relevance of functional units, memory locations and addressing modes in a digital computer. (Knowledge Level: K2)** This topic directly addresses the relevance of addressing modes in how a computer accesses data and instructions within its memory and registers.

---

### 1. Introduction to Addressing Modes

**What are Addressing Modes?**

Addressing modes define **how the operand for an instruction is specified**. In simpler terms, it's the method used by the processor to locate the data or memory address that an instruction needs to operate on. Different addressing modes offer flexibility in accessing data, leading to more efficient and compact instruction sets.

**Why are they important?**

*   **Efficient Data Access:** Allow for flexible and optimized ways to access operands in memory and registers.
*   **Instruction Set Design:** Directly influence the complexity and efficiency of the instruction set architecture (ISA).
*   **Programmer's Perspective:** Provide programmers (or compilers) with tools to manage data effectively.
*   **CO1 Relevance:** Understanding addressing modes is crucial for comprehending how functional units (like the ALU and memory) interact to fetch and process data, and how memory locations are referenced.

---

### 2. Classification of Addressing Modes

Addressing modes can be broadly categorized based on how the operand's address is determined. We'll explore the most common ones, drawing from concepts presented in **Hamacher et al.** and **Mano (Digital Logic & Computer Design)**.

#### 2.1 Immediate Addressing

*   **Definition:** The operand is a **constant value** directly embedded within the instruction itself. The operand is part of the instruction code.
*   **Format:** `Opcode Operand` (where Operand is the actual data)
*   **Example:** `LOAD R1, #5` (Load the value 5 into register R1)
    *   The number `5` is the immediate operand.
*   **Pros:** Simple and fast as no memory access is required to fetch the operand.
*   **Cons:** Limited to small constant values that can fit within the instruction's available bits.
*   **Textbook Reference:** Hamacher et al. (5/e), Chapter 4.1, discusses immediate operands.

#### 2.2 Register Addressing

*   **Definition:** The operand is stored in a **CPU register**. The instruction specifies the register number.
*   **Format:** `Opcode Register`
*   **Example:** `ADD R1, R2` (Add the contents of register R2 to register R1)
    *   R1 and R2 are the registers containing the operands.
*   **Pros:** Very fast as data is accessed directly from high-speed registers.
*   **Cons:** Limited by the number of available registers.
*   **Textbook Reference:** Mano (Digital Logic & Computer Design), Chapter 10.2, covers register operands.

#### 2.3 Register Indirect Addressing

*   **Definition:** The instruction specifies a **register**, but this register contains the **memory address** of the operand.
*   **Format:** `Opcode (Register)`
*   **Example:** `LOAD R1, (R2)` (Load the data from the memory address stored in R2 into R1)
    *   R2 holds the address of the data in memory.
*   **Pros:** Allows access to larger amounts of memory than register addressing alone. Useful for accessing arrays or data structures.
*   **Cons:** Requires an extra memory access to fetch the operand.
*   **Textbook Reference:** Hamacher et al. (5/e), Chapter 4.1, describes indirect addressing via registers.

#### 2.4 Direct Addressing (or Absolute Addressing)

*   **Definition:** The instruction contains the **direct memory address** of the operand.
*   **Format:** `Opcode MemoryAddress`
*   **Example:** `LOAD R1, 1000H` (Load the data from memory address 1000H into R1)
    *   `1000H` is the absolute memory address.
*   **Pros:** Simple to implement.
*   **Cons:** The address space is limited by the number of bits available in the instruction for the address. This often requires a larger instruction format.
*   **Textbook Reference:** Mano (Digital Logic & Computer Design), Chapter 10.2, discusses direct addressing.

#### 2.5 Indirect Addressing (or Memory Indirect Addressing)

*   **Definition:** The instruction specifies a memory address, but this memory location contains the **address of the operand**. This is a two-step memory access.
*   **Format:** `Opcode (MemoryAddress)`
*   **Example:** `LOAD R1, (1000H)` (Load the data from the memory address stored at memory location 1000H into R1)
    *   First, fetch the address from 1000H. Let's say it's 2000H.
    *   Then, fetch the data from memory address 2000H into R1.
*   **Pros:** Allows access to a much larger address space compared to direct addressing, as only a part of the instruction needs to hold the initial address.
*   **Cons:** Requires two memory accesses, making it slower.
*   **Textbook Reference:** Hamacher et al. (5/e), Chapter 4.1, covers memory indirect addressing.

#### 2.6 Indexed Addressing

*   **Definition:** The effective address of the operand is calculated by adding an **index register's content** to the **address specified in the instruction**.
*   **Format:** `Opcode BaseAddress (IndexRegister)` or `Opcode Displacement(IndexRegister)`
*   **Example:** `LOAD R1, 1000H(R3)` (Load data from memory address `1000H + contents of R3` into R1)
    *   If R3 contains `50H`, the effective address is `1000H + 50H = 1050H`.
*   **Pros:** Very useful for accessing elements of arrays and tables. By changing the index register's value, you can easily traverse data structures.
*   **Sub-modes (often considered variations):**
    *   **Auto-increment/Auto-decrement:** After accessing the operand, the index register is automatically incremented or decremented. This is very useful for sequential access (like in loops).
*   **Textbook Reference:** Hamacher et al. (5/e), Chapter 4.1, details indexed addressing. Patterson & Hennessy (5/e) also extensively covers this in their discussions of ISAs.

#### 2.7 Base Register Addressing (or Displacement Addressing)

*   **Definition:** The effective address is calculated by adding the **content of a base register** to the **address/displacement specified in the instruction**.
*   **Format:** `Opcode Displacement(BaseRegister)`
*   **Example:** `LOAD R1, 1000H(R4)` (Load data from memory address `1000H + contents of R4` into R1)
    *   If R4 contains `200H`, the effective address is `1000H + 200H = 1200H`.
*   **Relationship to Indexed Addressing:** Very similar to indexed addressing. The distinction is often semantic: "Base Register" is often used for the starting address of a data structure or program segment, while "Index Register" is used for offsets within that structure.
*   **Pros:** Useful for accessing data relative to a base address, such as global variables or structures within a program.
*   **Textbook Reference:** Hamacher et al. (5/e), Chapter 4.1, covers base register addressing.

#### 2.8 Stack Addressing

*   **Definition:** Operands are found on a **stack**, a data structure that operates on a Last-In, First-Out (LIFO) principle. Operations typically involve `PUSH` (add to top) and `POP` (remove from top).
*   **Format:** Instructions often implicitly operate on the top elements of the stack.
    *   `PUSH Operand`
    *   `POP Register`
    *   `ADD` (implicitly operates on top two stack elements)
*   **Example:**
    *   `PUSH A` (Push contents of A onto the stack)
    *   `PUSH B` (Push contents of B onto the stack)
    *   `ADD` (Pops B and A, adds them, pushes result back onto stack)
*   **Pros:** Useful for expression evaluation (e.g., postfix notation) and procedure calls (saving return addresses and parameters).
*   **Cons:** Requires managing the stack pointer.
*   **Textbook Reference:** Hamacher et al. (5/e), Chapter 4.1, explains stack addressing.

---

### 3. Addressing Modes in Practice

The choice of addressing modes significantly impacts the design of the Instruction Set Architecture (ISA). Processors don't necessarily implement all these modes; they select a subset that provides a good balance of flexibility, efficiency, and hardware complexity.

**Example Scenario: Accessing Array Elements**

Let's consider an array `A` starting at memory address `2000H`. We want to load the element `A[i]` into register R1, where `i` is stored in register R5.

*   **Indexed Addressing:** `LOAD R1, 2000H(R5)`
    *   This is the most natural way if `R5` holds the index `i`.
*   **Base Register Addressing (if R5 holds the base address and instruction has offset):** This might not be the direct case if R5 is the index itself, but if we had a register holding the base address and another holding the offset, it would apply.
*   **Register Indirect with Offset (if supported):** If a processor supports indirect addressing where an offset can be added to the register's content: `LOAD R1, (R5) + 2000H` (syntax varies)

**Impact on Instruction Format:**

Different addressing modes require different instruction formats.
*   **Immediate:** Needs space for the immediate data.
*   **Direct:** Needs space for the full memory address.
*   **Register:** Needs space for the register specifier.
*   **Indirect:** Needs space for the initial address.
*   **Indexed/Base:** Needs space for the displacement and the register specifier.

**CO1 Relevance Reinforced:** Addressing modes are the bridge between the CPU's functional units and the memory locations. They dictate how the Program Counter (PC) or other control units interact with the Memory Address Register (MAR) and Memory Data Register (MDR) to fetch the correct operand.

---

### 4. Summary of Key Addressing Modes

| Addressing Mode      | Operand Location                       | Effective Address Calculation                                    | Example Instruction (Conceptual) | Use Case                                         |
| :------------------- | :------------------------------------- | :--------------------------------------------------------------- | :------------------------------- | :----------------------------------------------- |
| **Immediate**        | Within the instruction                 | Operand = Value in Instruction                                   | `LOAD R1, #10`                   | Loading constants                                |
| **Register**         | CPU Register                           | Effective Address = Register                                     | `ADD R1, R2`                     | Fast data manipulation                           |
| **Register Indirect**| Memory Location pointed to by Register | Effective Address = Content of Register                          | `LOAD R1, (R3)`                  | Accessing data via pointers                      |
| **Direct**           | Memory Location                        | Effective Address = Address in Instruction                       | `LOAD R1, 2000H`                 | Accessing fixed memory locations                 |
| **Indirect**         | Memory Location pointed to by Memory   | Effective Address = Content of Memory Location specified by Inst. | `LOAD R1, (2000H)`               | Accessing large address spaces                   |
| **Indexed**          | Memory Location                        | Effective Address = Address in Inst. + Content of Index Register | `LOAD R1, 1000H(R4)`             | Array traversal, table lookups                   |
| **Base Register**    | Memory Location                        | Effective Address = Content of Base Register + Displacement      | `LOAD R1, 200H(R5)`              | Accessing data relative to a base address        |
| **Stack**            | Stack                                  | Operands from top of stack (implicit)                            | `PUSH A`, `ADD`                  | Expression evaluation, procedure calls           |

---

### 5. Important Points to Remember

*   **Flexibility vs. Complexity:** More addressing modes offer greater flexibility but increase the complexity of the CPU's control unit and instruction decoding.
*   **Operand Fetch Cycle:** Understanding addressing modes is key to understanding the fetch-decode-execute cycle, specifically the "fetch operand" part.
*   **Compiler's Role:** Compilers translate high-level language constructs into machine instructions using appropriate addressing modes.
*   **Performance:** The efficiency of an addressing mode directly impacts program execution speed. Immediate and Register addressing are generally the fastest.

---

### 6. Practice Questions and Exercises

**Question 1:**
Which addressing mode is most suitable for accessing elements of a large array where the array base address is in one register and the index is in another?
**(a) Direct Addressing**
**(b) Immediate Addressing**
**(c) Indexed Addressing**
**(d) Register Indirect Addressing**

**Question 2:**
If an instruction is `SUB R1, #5`, what addressing mode is used for the operand `5`?
**(a) Register Addressing**
**(b) Immediate Addressing**
**(c) Direct Addressing**
**(d) Indirect Addressing**

**Question 3:**
Consider a program where you need to load data from memory address `3000H` into register `R2`. The instruction format for direct addressing allows for a 16-bit address.
*   **Instruction:** `LOAD R2, 3000H`
*   **Memory Content at 3000H:** `0040H`
*   **Memory Content at 40H:** `AB CD` (This is the actual data)

What will be the value in R2 after the execution of this instruction?
**(a) 3000H**
**(b) 0040H**
**(c) ABCD H**
**(d) Depends on the processor architecture**

**Question 4:**
Explain the difference between Register Indirect Addressing and Direct Addressing.

**Question 5:**
How does Stack Addressing support procedure calls?

---

### 7. Answers to Practice Questions

**Answer 1:**
**(c) Indexed Addressing**
*   **Explanation:** Indexed addressing allows combining a base address (potentially in a register) with an index (in another register) to efficiently access array elements.

**Answer 2:**
**(b) Immediate Addressing**
*   **Explanation:** The value `5` is directly part of the instruction, making it an immediate operand.

**Answer 3:**
**(b) 0040H**
*   **Explanation:**
    *   The instruction `LOAD R2, 3000H` specifies that the operand is at memory address `3000H`.
    *   Looking at the memory content at `3000H`, we find `0040H`.
    *   This means the operand itself is the address `0040H`. The actual data `ABCD H` is located at `0040H`.
    *   Therefore, the instruction would fetch the value `0040H` and load it into R2, assuming this is a typical indirect addressing scenario where the instruction specifies the *address of the address*.
    *   **Correction/Clarification:** The question implies the instruction `LOAD R2, 3000H` *is* direct addressing. In direct addressing, the address given is the *actual* location of the data. So, if `3000H` contains `ABCD H`, then R2 would be `ABCD H`. However, the provided memory content `Memory Content at 3000H: 0040H` suggests that `3000H` holds an address, making it *indirect* addressing. If the instruction was `LOAD R2, (3000H)`, then R2 would be `ABCD H`. If the instruction is truly direct addressing and the content at `3000H` is `0040H`, then R2 would be `0040H`. Given the context of typical addressing modes, and the provided memory content, option (b) is the most likely intended answer for direct addressing where the content at the given address is loaded. *However, if the question implicitly meant indirect addressing for the purpose of illustrating memory contents, the answer would be (c). We'll stick to the literal interpretation of "Direct Addressing".*

**Answer 4:**
*   **Direct Addressing:** The instruction itself contains the full memory address of the operand. The CPU accesses memory at this address once to retrieve the operand.
*   **Register Indirect Addressing:** The instruction specifies a register, and the content of that register is the memory address of the operand. The CPU first reads the address from the register, and then accesses memory at that address to retrieve the operand. This involves an extra step of reading the register before accessing memory.

**Answer 5:**
Stack addressing is crucial for procedure calls because:
*   **Saving Return Address:** When a procedure (function or subroutine) is called, the address of the instruction immediately following the call (the return address) is pushed onto the stack. This ensures that after the procedure finishes, the program can resume execution from the correct location.
*   **Passing Parameters:** Parameters can be pushed onto the stack before calling a procedure. The procedure can then access these parameters from the stack.
*   **Local Variables:** Procedures often use the stack to store their local variables. The stack grows downwards, and a stack pointer (SP) register is used to manage the top of the stack.

---

This concludes the study notes for Addressing Modes in Module 1. Understanding these concepts is fundamental for grasping how computer instructions interact with data and memory.
