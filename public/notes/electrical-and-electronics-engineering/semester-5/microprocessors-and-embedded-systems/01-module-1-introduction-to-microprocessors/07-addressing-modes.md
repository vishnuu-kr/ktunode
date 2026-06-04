---
title: "Addressing modes"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 1: Introduction to microprocessors "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36211"
status: "completed"
scrapedAt: "2026-05-23T16:22:39.403Z"
---
# Module 1: Introduction to Microprocessors - Addressing Modes

## 1. Introduction to Addressing Modes

Addressing modes are the different ways a microprocessor can access data from memory or I/O ports. They determine how the operand (the data to be operated on) is specified in an instruction. Understanding addressing modes is crucial for efficient programming and for understanding how the microprocessor interacts with memory.

**Key Concepts:**
*   **Instruction:** A command that the microprocessor executes.
*   **Operand:** The data that the instruction acts upon.
*   **Effective Address:** The actual memory address where the operand is located.

## 2. Importance of Addressing Modes

*   **Efficient Data Access:** Different addressing modes allow the microprocessor to access data in various ways, leading to more compact and efficient code.
*   **Flexibility in Programming:** Programmers can choose the most suitable addressing mode for a given task, simplifying complex operations.
*   **Hardware Design:** Addressing modes are a fundamental aspect of microprocessor architecture and influence the design of the CPU and memory management units.

## 3. Types of Addressing Modes (Focusing on 8085 Microprocessor as per CO1)

The 8085 microprocessor supports several addressing modes. We will explore them based on the textbooks:

### 3.1. Immediate Addressing Mode

*   **Description:** The operand is directly specified as part of the instruction itself. The data is immediately available to the microprocessor.
*   **How it works:** The instruction contains the data value.
*   **Example (8085):**
    ```assembly
    MVI A, 50H  ; Move immediate data 50H into the Accumulator (Register A)
    ```
    *   Here, `50H` is the operand, and it's directly part of the `MVI` instruction.
*   **Textbook Reference:** Gaonkar (2014) discusses this in Chapter 4: Instruction Set of 8085, illustrating how data is embedded within instructions. Ram (n.d.) also covers this as a fundamental mode.
*   **CO1 Alignment:** This mode directly relates to how data is handled in 8085 assembly language programming.

### 3.2. Register Addressing Mode

*   **Description:** The operand is located in one of the microprocessor's internal registers.
*   **How it works:** The instruction specifies the register that holds the operand.
*   **Example (8085):**
    ```assembly
    MOV A, B   ; Move the content of Register B to Register A
    ```
    *   Here, `B` is the operand, and it's a register.
*   **Textbook Reference:** Gaonkar (2014) details this extensively when explaining data transfer instructions. Ram (n.d.) also covers register operations.
*   **CO1 Alignment:** Crucial for understanding 8085 assembly language programming, as register operations are fundamental.

### 3.3. Register Indirect Addressing Mode

*   **Description:** The operand is located in memory, and the address of the operand is stored in a register pair.
*   **How it works:** The instruction specifies a register pair (like `HL`, `BC`, `DE`) which holds the 16-bit address of the memory location containing the operand.
*   **Example (8085):**
    ```assembly
    MOV A, M   ; Move the content of the memory location pointed to by HL register pair into Accumulator A
    ```
    *   Here, `M` represents the memory location whose address is stored in the `HL` register pair.
*   **Textbook Reference:** Gaonkar (2014) and Ram (n.d.) dedicate sections to this, explaining how to load and store data using register pairs. Rafiquzzaman (First Edition) also provides detailed examples.
*   **CO1 Alignment:** Essential for understanding how to access memory in 8085 programming.

### 3.4. Direct Addressing Mode (Implied Addressing)

*   **Description:** The operand is located in memory, and its 16-bit address is directly specified within the instruction.
*   **How it works:** The instruction contains the actual memory address of the operand.
*   **Example (8085):**
    ```assembly
    LDA 2050H  ; Load the content of memory address 2050H into the Accumulator A
    ```
    *   Here, `2050H` is the direct memory address of the operand.
*   **Textbook Reference:** Gaonkar (2014) covers instructions like LDA, STA, etc., which utilize direct addressing. Ram (n.d.) also explains this.
*   **CO1 Alignment:** Important for direct memory access in 8085 assembly.

### 3.5. Indexed Addressing Mode (Not directly prominent in 8085, but conceptually important for microprocessors)

*   **Description:** The operand's address is calculated by adding an index register's content to a base address specified in the instruction.
*   **How it works:** `Effective Address = Base Address + Index Register Content`.
*   **Example (General Concept):** Imagine accessing elements of an array. The base address is the start of the array, and the index register holds the offset to the desired element.
*   **Note:** The 8085 does not have dedicated index registers like some other microprocessors. However, the `HL` register pair can be used in a similar fashion for some operations. Gaonkar (2014) might touch upon this concept when discussing more advanced architectures or memory access patterns.
*   **CO1 Alignment:** While not a primary 8085 mode, understanding this concept helps appreciate how other microprocessors manage data, which is relevant to the broader understanding of microprocessors.

### 3.6. Relative Addressing Mode (Branching instructions)

*   **Description:** The operand (or rather, the next instruction's address) is specified as an offset relative to the current instruction pointer. This is primarily used for conditional and unconditional jumps and calls.
*   **How it works:** The instruction contains a displacement value. The program counter (PC) is updated by adding this displacement to the PC's current value (often pointing to the instruction *after* the branch instruction).
*   **Example (8085):**
    ```assembly
    JZ LABEL  ; Jump if Zero flag is set. LABEL is a memory address.
    ```
    *   The actual instruction encoded will contain a displacement to `LABEL`.
*   **Textbook Reference:** Gaonkar (2014) thoroughly explains branch instructions like JZ, JNZ, JC, JNC, etc., which utilize relative addressing. Ram (n.d.) also covers jump and call instructions.
*   **CO1 Alignment:** Essential for understanding program flow control in 8085 assembly language.

### 3.7. Implicit Addressing Mode (Implied Addressing)

*   **Description:** The operand is implied by the instruction itself. There is no explicit mention of an operand in the instruction.
*   **How it works:** The instruction operates on a specific register or set of registers that are understood by the instruction's operation code.
*   **Example (8085):**
    ```assembly
    RLC  ; Rotate Accumulator Left through Carry. The Accumulator is implicitly the operand.
    ```
    *   The `RLC` instruction inherently knows it operates on the Accumulator (Register A).
*   **Textbook Reference:** Gaonkar (2014) and Ram (n.d.) mention instructions where the operand is implicitly understood.
*   **CO1 Alignment:** Helps in understanding the conciseness of certain 8085 instructions.

## 4. Addressing Modes in the Context of Embedded Systems and Arduino (CO3, CO4, CO5, CO6)

While the focus for Module 1 is often on the 8085, the understanding of addressing modes is foundational for embedded systems.

*   **Arduino Uno (AVR Microcontroller):** Arduino Uno uses an AVR microcontroller. AVR microcontrollers also have various addressing modes, including immediate, register, direct, indirect, and relative addressing, similar to the 8085 but with their specific instruction sets.
    *   **Arduino Cookbook (Margolis, 2008):** While not delving deep into microprocessor architecture specifics, this book implicitly uses addressing modes through its C/C++ code examples for Arduino. For instance, when you write `int x = 10;`, the compiler decides how to store and access `x` using appropriate addressing modes. When you write `digitalWrite(pin, HIGH);`, the `pin` variable's address is used to access the I/O port.
    *   **Microprocessor Theory and Application (Rafiquzzaman, First Edition):** This book provides a broader overview of microprocessor concepts, including addressing modes that are applicable to various architectures, including those found in embedded systems.
*   **Embedded C Programming:** When writing programs in Embedded C (as per CO5) for microcontrollers like those on Arduino, the compiler translates high-level language constructs into machine code that utilizes these addressing modes.
    *   **Embedded C (Pont, n.d.):** Pont's book would explain how C constructs map to assembly language and thus to addressing modes. For example, array access like `myArray[i]` translates to register indirect addressing or indexed addressing.
*   **ARM Architecture (CO6):** ARM processors, common in more advanced embedded systems and microcontrollers like the Arduino Due, have a more sophisticated set of addressing modes. They often include:
    *   **Load/Store Architecture:** ARM's Load/Store architecture relies heavily on register indirect addressing to move data between registers and memory.
    *   **Pre-indexed and Post-indexed addressing:** These are variations of indexed addressing where the base register is automatically updated after the access.
    *   **Address Offset:** Instructions often allow specifying an offset (immediate value) directly or through another register to be added to the base address.

## 5. Practice Questions

**Question 1:**
Which addressing mode directly embeds the operand within the instruction itself?
A) Register Addressing
B) Direct Addressing
C) Immediate Addressing
D) Register Indirect Addressing

**Question 2:**
In the 8085 instruction `MOV A, M`, what addressing mode is being used for the source operand?
A) Immediate Addressing
B) Direct Addressing
C) Register Addressing
D) Register Indirect Addressing

**Question 3:**
Consider the instruction `LDA 4000H`. What addressing mode is used here?
A) Register Indirect Addressing
B) Immediate Addressing
C) Direct Addressing
D) Register Addressing

**Question 4:**
The `HL` register pair in the 8085 is commonly used in which addressing mode to access memory?
A) Immediate Addressing
B) Register Addressing
C) Direct Addressing
D) Register Indirect Addressing

**Question 5:**
When programming an embedded system using Arduino, how are addressing modes typically handled at the high-level language (C/C++) level?

---

## 6. Answers to Practice Questions

**Answer 1:**
C) Immediate Addressing
*   **Explanation:** In immediate addressing, the data itself is part of the instruction.

**Answer 2:**
D) Register Indirect Addressing
*   **Explanation:** The instruction `MOV A, M` implies that the data is in the memory location whose address is stored in the `HL` register pair. `M` represents the memory content accessed via the address in `HL`.

**Answer 3:**
C) Direct Addressing
*   **Explanation:** The instruction `LDA 4000H` directly specifies the memory address `4000H` where the data is to be loaded from.

**Answer 4:**
D) Register Indirect Addressing
*   **Explanation:** The `HL` register pair is a 16-bit register that holds memory addresses. When used with instructions like `MOV A, M`, it points to a memory location, making it register indirect addressing.

**Answer 5:**
Addressing modes are handled implicitly by the compiler. When you write C/C++ code, the compiler translates your high-level instructions (like variable assignments, array accesses, function calls) into the appropriate machine code instructions for the target microcontroller, using the relevant addressing modes. For example, accessing an array element `myArray[i]` will likely be compiled into register indirect or indexed addressing.

---

## 7. Important Points to Remember

*   **Operand:** The data on which an instruction operates.
*   **Effective Address:** The actual memory location of the operand.
*   **Immediate Addressing:** Data is part of the instruction.
*   **Register Addressing:** Operand is in a CPU register.
*   **Register Indirect Addressing:** Address of the operand is in a register (or register pair).
*   **Direct Addressing:** Address of the operand is in the instruction.
*   **Relative Addressing:** Used for branching; address is an offset from the current PC.
*   **Implicit Addressing:** Operand is understood from the instruction itself.
*   Understanding addressing modes is key to writing efficient assembly language programs and comprehending how microprocessors access data.

---
This set of notes covers the fundamental addressing modes relevant to Module 1, with a strong emphasis on the 8085 as per CO1. It also bridges the concepts to embedded systems and Arduino, touching upon CO3, CO4, CO5, and CO6, by explaining how these modes are utilized in higher-level programming and different architectures. The provided textbook references indicate where further details can be found.
