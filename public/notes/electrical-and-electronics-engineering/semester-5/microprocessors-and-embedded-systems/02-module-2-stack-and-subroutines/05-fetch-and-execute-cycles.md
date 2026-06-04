---
title: "fetch and execute cycles"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 2: Stack and Subroutines"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36218"
status: "completed"
scrapedAt: "2026-05-23T16:22:43.895Z"
---
## MICROPROCESSORS AND EMBEDDED SYSTEMS

### Module 2: Stack and Subroutines

### Topic: Fetch and Execute Cycles

---

### **1. Introduction to the Fetch-Execute Cycle**

The fetch-execute cycle, also known as the instruction cycle, is the fundamental process by which a microprocessor retrieves and carries out instructions from memory. It is the heartbeat of any computer system, enabling the execution of programs. This cycle forms the basis of how microprocessors operate, from simple calculators to complex embedded systems.

**Key Concepts:**

*   **Instruction:** A command that the microprocessor can understand and execute. Instructions are stored in memory as binary codes.
*   **Program Counter (PC):** A special register within the microprocessor that holds the memory address of the next instruction to be fetched.
*   **Memory Address Register (MAR):** A register that holds the address of the memory location to be accessed (either for reading or writing).
*   **Memory Data Register (MDR):** A register that temporarily stores data read from or written to memory.
*   **Instruction Register (IR):** A register that holds the instruction currently being decoded and executed.
*   **Arithmetic Logic Unit (ALU):** The part of the microprocessor that performs arithmetic and logical operations.
*   **Control Unit (CU):** The part of the microprocessor that decodes instructions and generates control signals to manage the operation of other components.

**Textbook References:**

*   **Ram, B. (Fundamentals of Microprocessor and Micro controllers):** Provides a detailed explanation of the fetch-execute cycle for the 8085 microprocessor, emphasizing timing diagrams and control signals. (CO1, CO2)
*   **Gaonkar, R. (Microprocessor, Architecture, Programming and Applications):** Offers a comprehensive overview of the fetch-execute cycle, including its role in program execution and its relation to instruction sets. (CO1)
*   **Rafiquzzaman, M. (Microprocessor Theory and Application):** Explains the fetch-execute cycle from a theoretical perspective, discussing the underlying hardware components and their interactions. (CO1)

---

### **2. The Fetch Phase**

The fetch phase is the first part of the fetch-execute cycle, where the microprocessor retrieves an instruction from memory.

**Steps involved in the Fetch Phase:**

1.  **Increment Program Counter (PC):** The PC is incremented to point to the next instruction in the sequence. This typically happens *before* fetching the current instruction to prepare for the next cycle.
2.  **Transfer PC to MAR:** The address currently stored in the PC is copied to the Memory Address Register (MAR).
3.  **Send Address to Memory:** The address from the MAR is placed on the address bus, selecting the specific memory location containing the instruction.
4.  **Memory Read Operation:** The control unit issues a "read" signal to memory.
5.  **Fetch Instruction from Memory:** The memory unit retrieves the data (the instruction code) from the specified address.
6.  **Transfer Instruction to MDR:** The fetched instruction is placed into the Memory Data Register (MDR).
7.  **Transfer Instruction to IR:** The instruction from the MDR is copied into the Instruction Register (IR) for decoding.

**Visual Representation (Simplified):**

```
       +-----------------+      +-----------------+
       | Program Counter |----->| Memory Address  |
       |       (PC)      |      |   Register (MAR)|
       +-----------------+      +-----------------+
               ^                         |
               |                         | Address Bus
               |                         v
       +-----------------+      +-----------------+
       | Instruction     |<-----| Memory Data     |
       |   Register (IR) |      |  Register (MDR) |
       +-----------------+      +-----------------+
               ^                         ^
               |                         | Data Bus
               |                         |
       +-----------------------------------+
       |          Memory                   |
       +-----------------------------------+
```

**Example (8085 Microprocessor):**

Let's say the PC holds the address `2000H`. The instruction at `2000H` is an `MVI A, 05H` (Move immediate data 5 to Accumulator).

*   **Step 1:** PC is incremented to `2001H`.
*   **Step 2:** The address `2000H` (original value of PC) is transferred to MAR.
*   **Step 3:** The address `2000H` is placed on the address bus.
*   **Step 4:** A memory read control signal is activated.
*   **Step 5:** Memory at `2000H` provides the opcode for `MVI A` (e.g., `3EH`).
*   **Step 6:** The opcode `3EH` is loaded into MDR.
*   **Step 7:** The opcode `3EH` is transferred from MDR to IR.

**Important Points to Remember:**

*   The PC always points to the *next* instruction to be fetched.
*   The fetch phase involves fetching the opcode of the instruction. If the instruction requires operands (data), subsequent fetch cycles will be needed for those operands.

---

### **3. The Execute Phase**

The execute phase is the second part of the fetch-execute cycle, where the decoded instruction is carried out by the microprocessor.

**Steps involved in the Execute Phase:**

1.  **Decode Instruction:** The Control Unit (CU) decodes the instruction held in the Instruction Register (IR). It determines what operation needs to be performed and what operands are involved.
2.  **Fetch Operands (if any):** If the instruction requires data (operands) from memory or registers, these are fetched in subsequent memory read cycles (or register read operations). The PC is further incremented as needed for each operand.
3.  **Perform Operation:** The ALU performs the required operation (e.g., addition, subtraction, logical AND) on the operands.
4.  **Store Result:** The result of the operation is stored in a designated register (e.g., Accumulator) or written back to memory.
5.  **Update Flags (if applicable):** Certain instructions may affect the flag register (e.g., zero flag, carry flag) based on the result of the operation.

**Example (Continuing the `MVI A, 05H` example):**

*   **Step 1 (Decode):** The CU decodes `3EH` (opcode for `MVI A`). It recognizes this as a "move immediate" instruction to the Accumulator.
*   **Step 2 (Fetch Operand):** The instruction `MVI A, 05H` is a 2-byte instruction. The first byte (`3EH`) is the opcode. The second byte (`05H`) is the immediate data. The PC was already incremented to `2001H` after fetching the opcode. Now, the CU fetches the next byte:
    *   PC is incremented to `2002H`.
    *   `2001H` is transferred to MAR.
    *   Memory read operation at `2001H`.
    *   `05H` is fetched and placed in MDR.
    *   `05H` is transferred to a temporary register or directly to the data input of the Accumulator.
*   **Step 3 (Perform Operation):** The immediate data `05H` is moved into the Accumulator register. The ALU is not directly involved in this data transfer.
*   **Step 4 (Store Result):** The Accumulator now holds the value `05H`.
*   **Step 5 (Update Flags):** The `MVI` instruction typically does not affect the flags in the 8085.

**Important Points to Remember:**

*   The execute phase can involve one or more memory access cycles depending on the complexity of the instruction.
*   Control signals are crucial for orchestrating the data flow and operations during the execute phase.

---

### **4. Types of Instruction Cycles**

The fetch-execute cycle is a general concept. However, the actual number of machine cycles and T-states (clock cycles) involved in executing an instruction can vary. This variation depends on the **instruction set architecture (ISA)** and the complexity of the instruction.

**Common Instruction Cycles/States:**

*   **Opcode Fetch Cycle:** Always occurs to fetch the instruction's opcode.
*   **Memory Read Cycle:** Used to read data from memory (operands, memory-to-register operations).
*   **Memory Write Cycle:** Used to write data to memory (register-to-memory operations).
*   **I/O Read Cycle:** Used to read data from an I/O device.
*   **I/O Write Cycle:** Used to write data to an I/O device.
*   **Interrupt Acknowledge Cycle:** Used to acknowledge an interrupt request.

**Example of Instruction Complexity and Cycles (8085):**

| Instruction        | Description                                | Opcode Fetch | Operand Fetch | Execution | Total Machine Cycles | Total T-states (approx.) |
| :----------------- | :----------------------------------------- | :----------- | :------------ | :-------- | :------------------- | :----------------------- |
| `MOV A, B`         | Move content of B to A                     | 1            | 0             | 1         | 2                    | 4                        |
| `MVI A, data`      | Move immediate data to A                   | 1            | 1             | 1         | 3                    | 7                        |
| `ADD B`            | Add content of B to A                      | 1            | 0             | 1         | 2                    | 4                        |
| `LDA address`      | Load Accumulator from memory (16-bit addr) | 1            | 2             | 1         | 4                    | 13                       |
| `CALL address`     | Call subroutine (16-bit addr)              | 1            | 2             | 1         | 4 (for fetching) + Stack ops | 18 + Stack ops           |

**Reference Book Insights:**

*   **Arduino Cookbook (Margolis):** While not directly focusing on the 8085 fetch-execute cycle, it implicitly relies on this fundamental process when discussing how microcontrollers execute Arduino sketches. The timing of operations is crucial for real-time applications. (CO4, CO5)
*   **Arduino-Based Embedded Systems (Singh et al.):** This reference would likely explain how higher-level programming languages like C/C++ (used in Arduino) are translated into machine code that follows the fetch-execute cycle on the microcontroller's CPU. (CO3, CO4, CO5)

---

### **5. Role of Fetch-Execute Cycle in Subroutines and Stacks**

The fetch-execute cycle is intrinsically linked to subroutines and stack operations.

**Subroutines:**

*   **Fetching CALL Instruction:** The fetch-execute cycle begins with fetching the `CALL` instruction.
*   **Fetching Address:** The execute phase of `CALL` involves fetching the 16-bit address of the subroutine.
*   **Pushing PC onto Stack:** Before jumping to the subroutine, the current value of the PC (which points to the instruction *after* the `CALL`) is pushed onto the stack. This is crucial for returning from the subroutine. This involves a sequence of memory write cycles.
*   **Fetching Subroutine Instruction:** The PC is updated to the address of the subroutine, and the fetch-execute cycle continues within the subroutine.
*   **Fetching RET Instruction:** The fetch-execute cycle for the `RET` (Return) instruction involves fetching the instruction.
*   **Popping PC from Stack:** The execute phase of `RET` involves retrieving the return address from the stack (memory read cycles) and loading it back into the PC. This allows the program to resume execution after the `CALL`.

**Stacks:**

*   **Stack Pointer (SP):** A register that points to the top of the stack in memory.
*   **PUSH Operation:** When data is pushed onto the stack (e.g., saving registers before a subroutine call), the SP is decremented, and the data is written to the memory location pointed to by SP (memory write cycle).
*   **POP Operation:** When data is popped from the stack (e.g., restoring registers after a subroutine), the data is read from the memory location pointed to by SP (memory read cycle), and then SP is incremented.

**Textbook References:**

*   **Ram, B. (Fundamentals of Microprocessor and Micro controllers):** Details the machine cycles involved in `CALL`, `RET`, `PUSH`, and `POP` instructions, illustrating how the fetch-execute cycle adapts for these operations. (CO2)
*   **Gaonkar, R. (Microprocessor, Architecture, Programming and Applications):** Explains the stack mechanism and its integral role in subroutine calls and interrupt handling, tying it back to the fetch-execute sequence. (CO2)

---

### **6. Fetch-Execute Cycles in Embedded Systems (Arduino Context)**

In embedded systems like those using Arduino, the underlying fetch-execute cycle is still fundamental, even though it's abstracted by higher-level programming languages and development environments.

*   **Arduino IDE:** When you write a sketch in the Arduino IDE and upload it, the C/C++ code is compiled into machine code (object code) specific to the microcontroller on the Arduino board (e.g., ATmega328P on Arduino Uno). This machine code then resides in the microcontroller's flash memory.
*   **Microcontroller Execution:** The microcontroller's CPU continuously executes the fetch-execute cycle on this machine code.
*   **Real-time Operations:** The speed of the fetch-execute cycle (determined by the clock speed) is critical for real-time responsiveness in embedded applications. For instance, a delay of a few milliseconds in an Arduino sketch translates to many thousands or millions of fetch-execute cycles.
*   **Interrupts:** Interrupts temporarily halt the normal fetch-execute sequence, causing the processor to execute an Interrupt Service Routine (ISR). After the ISR, the fetch-execute cycle resumes from where it left off, often involving saving and restoring the state using the stack.

**Textbook/Reference Book Relevance:**

*   **Arduino Cookbook (Margolis):** Discusses the timing of Arduino operations and how code execution affects the overall behavior of an embedded system. This implicitly relates to the efficiency of the fetch-execute cycle. (CO4, CO5)
*   **Arduino for beginners: Essential Skills Every Maker Needs (Baichtal):** Introduces the basic functioning of the Arduino, where the microcontroller runs code, which is a direct consequence of the fetch-execute cycle. (CO4)
*   **Embedded C, Pont by Michael J:** Understanding Embedded C is essential for writing efficient code for microcontrollers. The compiler translates C constructs into machine instructions that are executed via the fetch-execute cycle. (CO5)
*   **Programming Arduino Next Steps: Going Further with Sketches (Monk):** Explores more advanced Arduino programming, where the underlying machine-level operations driven by the fetch-execute cycle become more relevant for performance optimization. (CO5)

---

### **7. RISC Architecture and Fetch-Execute (ARM/Arduino Due)**

The fetch-execute cycle is also fundamental to RISC architectures like ARM, used in boards like the Arduino Due. However, RISC architectures often have simpler instruction formats and a more pipelined approach to instruction execution.

*   **Pipelining:** RISC processors often use instruction pipelining, where different stages of the fetch-execute cycle (fetch, decode, execute, write-back) for different instructions overlap. This increases the overall instruction throughput.
*   **Simpler Instructions:** RISC instructions are typically fixed-length and perform a single operation, making them faster to decode and execute. This leads to a more predictable and potentially faster fetch-execute cycle for each instruction.
*   **Load/Store Architecture:** RISC architectures often adhere to a load/store architecture, meaning only explicit `LOAD` and `STORE` instructions can access memory. Other operations (like arithmetic) are performed on registers. This influences the sequence of fetch-execute cycles for memory access.

**Textbook/Reference Book Relevance:**

*   **CO6: Understand the RISC Architecture and Apply the knowledge for solving the real life problems using ARM - Arduino DUE board based embedded system.** This course outcome directly relates to understanding how the fetch-execute cycle operates on a RISC architecture like ARM, which is present in the Arduino Due. The efficiency and pipelining of the ARM fetch-execute cycle are key to its performance in embedded applications.

---

### **8. Practice Questions**

**Question 1:** Describe the sequence of events that occur during the **fetch phase** of the fetch-execute cycle.

**Question 2:** What is the role of the Program Counter (PC) in the fetch-execute cycle?

**Question 3:** Explain the steps involved in the **execute phase** of an instruction that requires fetching an immediate operand from memory.

**Question 4:** How does the fetch-execute cycle relate to the operation of a **subroutine call (`CALL`)** and a **return from subroutine (`RET`)**?

**Question 5:** In the context of Arduino, how does the concept of the fetch-execute cycle apply to running an Arduino sketch?

---

### **9. Answers to Practice Questions**

**Answer 1:**
The fetch phase involves:
1.  The PC's address is sent to the MAR.
2.  The MAR's address is placed on the address bus.
3.  A memory read signal is asserted.
4.  The instruction from memory is read and placed in the MDR.
5.  The instruction is transferred from MDR to the IR for decoding.
6.  The PC is incremented to point to the next instruction.

**Answer 2:**
The Program Counter (PC) holds the memory address of the next instruction to be fetched. During the fetch phase, the PC's content is transferred to the MAR to fetch the current instruction. After fetching, the PC is incremented to point to the subsequent instruction, ensuring sequential program execution.

**Answer 3:**
For an instruction requiring an immediate operand:
1.  **Opcode Fetch:** The opcode is fetched and placed in the IR. The PC is incremented.
2.  **Operand Fetch:** The PC (now pointing to the operand's address) is transferred to MAR, and the operand is fetched from memory into MDR. The PC is incremented again.
3.  **Decode:** The Control Unit decodes the instruction in the IR.
4.  **Execute:** The operand from MDR is used in the operation, potentially involving the ALU.
5.  **Store Result:** The result is stored in the appropriate register or memory location.

**Answer 4:**
*   **CALL Instruction:** The fetch-execute cycle fetches the `CALL` opcode. The execute phase fetches the subroutine's address. Before jumping, the PC's current value (return address) is pushed onto the stack using memory write cycles. The PC is then updated with the subroutine's address.
*   **RET Instruction:** The fetch-execute cycle fetches the `RET` opcode. The execute phase retrieves the return address from the top of the stack using memory read cycles. This retrieved address is loaded back into the PC, allowing the program to resume execution after the `CALL`.

**Answer 5:**
When an Arduino sketch is uploaded, it's compiled into machine code. The microcontroller's CPU continuously executes this machine code by repeatedly performing the fetch-execute cycle. Each instruction in the sketch, when translated to machine code, goes through this cycle of being fetched from memory and then executed, thereby controlling the Arduino board's operations and peripherals. The speed and efficiency of this cycle are crucial for the real-time responsiveness of embedded applications.

---

### **10. Important Points to Remember**

*   The fetch-execute cycle is the fundamental operation of any microprocessor.
*   It consists of two main phases: Fetch and Execute.
*   The Program Counter (PC) is vital for keeping track of the next instruction.
*   Various registers (MAR, MDR, IR) and buses (Address Bus, Data Bus) are involved.
*   The Control Unit orchestrates the entire cycle.
*   The number of machine cycles and T-states per instruction varies based on instruction complexity.
*   Subroutines and stack operations heavily rely on the fetch-execute cycle for saving and restoring program state.
*   In embedded systems, the fetch-execute cycle underpins the execution of code on microcontrollers.
*   RISC architectures often employ pipelining to improve the efficiency of the fetch-execute cycle.

---
