---
title: "ARM (Advanced RISC Machines) based Embedded System Design : Classification of Microprocessors based on the word length, architecture and  Instruction Set-  Reduced Instruction Set Computer (RISC) and Complex Instruction Set Computer (CISC)."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 4: ARM (Advanced RISC Machines) based Embedded System Design : Classification of Microprocessors based on the word length, architecture and  Instruction Set"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36227"
status: "completed"
scrapedAt: "2026-05-23T16:22:53.636Z"
---
# Microprocessors and Embedded Systems - Module 4: ARM Based Embedded System Design

## Topic: Classification of Microprocessors based on Word Length, Architecture, and Instruction Set - RISC vs. CISC

This module delves into the design of embedded systems using ARM processors. A fundamental aspect of understanding processor design is its classification. This topic focuses on a key classification based on the **architecture** and **Instruction Set**: the distinction between **Reduced Instruction Set Computer (RISC)** and **Complex Instruction Set Computer (CISC)**. ARM processors are a prime example of RISC architecture, which is crucial for embedded systems due to its efficiency and power characteristics.

---

### Learning Outcomes Covered:

*   **Understand and gain the basic idea about the embedded system and selection of processors.** (CO3) - This topic directly addresses processor selection by explaining the fundamental architectural differences that influence suitability for embedded applications.
*   **Understand the RISC Architecture and Apply the knowledge for solving the real-life problems using ARM - Arduino DUE board based embedded system.** (CO6) - This is the primary learning outcome this topic aims to satisfy. Understanding RISC is foundational to comprehending ARM and its application in embedded systems like the Arduino DUE.

---

### 1. Classification of Microprocessors

Microprocessors can be broadly classified based on several criteria:

*   **Word Length:** The number of bits the processor can process in a single operation (e.g., 8-bit, 16-bit, 32-bit, 64-bit).
*   **Architecture:** The internal organization and design principles of the processor (e.g., RISC, CISC).
*   **Instruction Set:** The collection of commands that the processor understands and can execute.

This topic focuses on the **Architecture** and **Instruction Set** classification, specifically the RISC vs. CISC paradigm.

---

### 2. Reduced Instruction Set Computer (RISC)

**Definition:** RISC is a microprocessor design philosophy that emphasizes a small, highly optimized set of instructions. The goal is to perform simple operations very quickly, relying on software to combine these simple instructions into more complex operations.

**Key Concepts and Principles of RISC:**

*   **Simple Instructions:** Each instruction performs a single, basic operation (e.g., load, store, add, branch).
*   **Fixed Instruction Length:** All instructions are typically the same length, simplifying instruction decoding and pipelining.
*   **Load/Store Architecture:** Only `LOAD` and `STORE` instructions can access memory. All other operations (arithmetic, logic) are performed on data residing in CPU registers.
*   **Large Number of Registers:** To minimize memory access, RISC architectures usually have a plentiful supply of general-purpose registers.
*   **Pipelining:** The simple and uniform nature of RISC instructions makes them highly amenable to efficient pipelining, where multiple instructions are in different stages of execution simultaneously. This increases instruction throughput.
*   **Hardwired Control:** Instruction execution is typically controlled by hardwired logic, which is faster than microprogrammed control used in some CISC architectures.
*   **Compiler Optimization:** RISC heavily relies on sophisticated compilers to generate efficient code by optimizing the sequence of simple instructions.

**Advantages of RISC:**

*   **Speed:** Simple instructions execute faster. Pipelining leads to higher instruction throughput.
*   **Power Efficiency:** Simpler circuitry and fewer transistors generally consume less power, making RISC ideal for battery-powered embedded devices.
*   **Lower Cost:** Simpler hardware can be cheaper to manufacture.
*   **Easier to Design and Implement:** The reduced complexity simplifies the design process.
*   **Predictable Execution Time:** Fixed instruction length and simpler operations lead to more predictable execution times, which is beneficial for real-time embedded systems.

**Disadvantages of RISC:**

*   **Larger Program Size:** Complex operations require more simple instructions, potentially leading to larger code size.
*   **Compiler Dependence:** Performance is heavily dependent on the quality of the compiler.
*   **More Memory Access:** Although the goal is to use registers, some operations might still require more explicit `LOAD`/`STORE` operations compared to CISC.

**Example (Conceptual):**
To add two numbers stored in memory and store the result back in memory:

*   **RISC Approach:**
    1.  `LOAD R1, memory_address_A` (Load value from memory A into Register R1)
    2.  `LOAD R2, memory_address_B` (Load value from memory B into Register R2)
    3.  `ADD R3, R1, R2` (Add R1 and R2, store result in R3)
    4.  `STORE memory_address_C, R3` (Store the result from R3 into memory C)

This requires multiple instructions, but each instruction is simple and executes quickly.

**Reference:**
*   **Ram, B. (Fundamentals of Microprocessor and Microcontrollers):** This book would typically discuss the evolution of processors and the architectural differences, including the emergence of RISC. It would likely provide a foundational understanding of instruction sets and their impact on processor performance.
*   **Gaonkar, Ramesh (Microprocessor, Architecture, Programming and Applications):** Gaonkar's book, while often focused on x86, would likely touch upon different architectural paradigms and provide context for understanding why different approaches exist.

---

### 3. Complex Instruction Set Computer (CISC)

**Definition:** CISC is a microprocessor design philosophy that aims to provide a large and powerful set of instructions, including complex ones that can perform multiple operations in a single instruction.

**Key Concepts and Principles of CISC:**

*   **Complex Instructions:** Instructions can perform multi-step operations, such as reading from memory, performing an arithmetic operation, and writing back to memory, all in one instruction.
*   **Variable Instruction Length:** Instructions can vary significantly in length, making instruction decoding more complex.
*   **Memory-to-Memory Operations:** Many instructions can directly operate on memory operands, reducing the need for explicit `LOAD`/`STORE` operations.
*   **Fewer Registers:** CISC architectures typically have fewer general-purpose registers compared to RISC.
*   **Microprogramming:** Complex instructions are often executed by breaking them down into a sequence of simpler micro-operations, managed by a microprogram stored in a control store. This adds flexibility but can introduce overhead.
*   **Direct Hardware Support for High-Level Languages:** Some CISC instructions are designed to directly map to high-level language constructs (e.g., loop control, string manipulation).

**Advantages of CISC:**

*   **Fewer Instructions Per Program:** Complex instructions can reduce the overall number of instructions needed to perform a task, potentially leading to smaller program sizes.
*   **Easier Programming (Historically):** Simpler assembly language programming due to powerful, task-specific instructions.
*   **Less Reliance on Compilers:** The built-in complexity of instructions can reduce the burden on compilers to optimize code.

**Disadvantages of CISC:**

*   **Slower Execution:** Complex instructions take longer to execute, and the variable length makes pipelining less efficient.
*   **Higher Power Consumption:** More complex circuitry and microprogramming logic can consume more power.
*   **Higher Cost:** More complex hardware can be more expensive to design and manufacture.
*   **Design Complexity:** The instruction set complexity makes processor design and verification more challenging.
*   **Underutilization of Instructions:** Many powerful CISC instructions might not be used frequently by compilers, leading to wasted silicon and power.

**Example (Conceptual):**
To add two numbers stored in memory and store the result back in memory:

*   **CISC Approach (e.g., hypothetical instruction):**
    1.  `ADD_MEM memory_address_A, memory_address_B, memory_address_C` (Adds the value at A to the value at B, stores the result at C)

This is a single instruction that performs all the operations.

**Reference:**
*   **Rafiquzzaman, M. (Microprocessor Theory and Application):** This textbook likely covers the historical development of microprocessors, including the rise of CISC architectures and their characteristics. It would provide detailed explanations of instruction sets and how they impact processor design.

---

### 4. ARM and its RISC Philosophy

**ARM (Advanced RISC Machines)** is a family of Reduced Instruction Set Computer (RISC) architectures. ARM processors are widely used in embedded systems, including smartphones, tablets, microcontrollers, and single-board computers like the Arduino DUE.

**Why ARM is Suitable for Embedded Systems (Leveraging RISC principles):**

*   **Power Efficiency:** ARM's RISC design leads to lower power consumption, critical for battery-operated embedded devices.
*   **Performance:** Efficient pipelining and optimized instruction set allow for good performance for the tasks required in embedded applications.
*   **Cost-Effectiveness:** The simpler ARM core designs are often licensed at a lower cost, making them attractive for mass-produced embedded products.
*   **Scalability:** ARM offers a wide range of cores (Cortex-M for microcontrollers, Cortex-A for applications processors) that can be tailored to specific embedded needs.
*   **Ecosystem:** A vast ecosystem of development tools, software, and hardware support exists for ARM.

**Key Characteristics of ARM Architecture (aligning with RISC):**

*   **Load/Store Architecture:** Data manipulation is primarily done using registers.
*   **Large Register File:** Typically 16 general-purpose registers are available in the ARM architecture.
*   **Fixed-Length Instructions (mostly):** ARM instructions are generally 32-bit in length (though Thumb and Thumb-2 offer 16-bit and mixed-length instructions for code density).
*   **Pipelining:** ARM cores are designed for efficient pipelining.
*   **Conditional Execution:** Many ARM instructions can be executed conditionally, allowing for efficient branching logic.
*   **Thumb Instruction Set:** A 16-bit instruction set designed to improve code density, often used in embedded systems where memory is constrained.

**Reference:**
*   **Arduino Cookbook by Michael Margolis:** While this book is focused on Arduino, it implicitly relies on the underlying architecture of the Arduino board's microcontroller. Many Arduino boards use AVR microcontrollers (which share some RISC principles), and the Arduino DUE uses an ARM Cortex-M3, directly illustrating the application of RISC in an embedded context. The book would show how to leverage the capabilities of these processors.
*   **Arduino-Based Embedded Systems by Rajesh Singh et al.:** This reference book would likely provide in-depth discussions on the architecture of various Arduino boards, including those with ARM processors, and how their RISC nature impacts embedded system design.

---

### 5. Comparison Table: RISC vs. CISC

| Feature              | RISC (Reduced Instruction Set Computer)                               | CISC (Complex Instruction Set Computer)                                    |
| :------------------- | :-------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| **Instruction Set**  | Small, optimized set of simple instructions.                          | Large, complex set of instructions, some performing multiple operations.   |
| **Instruction Length** | Fixed length (e.g., 32-bit for ARM).                                  | Variable length.                                                           |
| **Execution Speed**  | Faster per instruction, higher throughput due to pipelining.          | Slower per instruction, less efficient pipelining.                       |
| **Registers**        | Large number of general-purpose registers.                            | Fewer general-purpose registers.                                           |
| **Memory Access**    | Load/Store architecture; only LOAD/STORE access memory.               | Memory-to-memory operations allowed for many instructions.               |
| **Control Unit**     | Hardwired control (faster).                                           | Microprogrammed control (flexible, but slower).                          |
| **Compiler Role**    | Heavy reliance on sophisticated compilers for optimization.           | Less reliance on compilers; instructions often map directly to HLL.      |
| **Code Size**        | Potentially larger code size (more simple instructions).              | Potentially smaller code size (fewer complex instructions).                |
| **Power Consumption**| Generally lower.                                                      | Generally higher.                                                          |
| **Hardware Complexity**| Simpler design, less complex hardware.                                | More complex design, more complex hardware.                                |
| **Examples**         | ARM, MIPS, SPARC, PowerPC.                                            | Intel x86, Motorola 68000 series.                                          |

---

### 6. Application in Embedded Systems (CO6 Focus)

Understanding RISC is crucial for applying knowledge to real-life problems using ARM-Arduino DUE board based embedded systems.

*   **Arduino DUE:** This board features an Atmel SAM3X8E microcontroller, which is an ARM Cortex-M3 processor. This is a 32-bit ARM Cortex-M series processor optimized for low power, real-time control, and efficient processing.
*   **Real-life Problems:**
    *   **Industrial Automation:** Controlling motors, sensors, and actuators with precise timing. The predictable execution time of RISC instructions is beneficial.
    *   **IoT Devices:** Low power consumption is paramount for battery-powered IoT sensors. ARM's efficiency is a major advantage.
    *   **Robotics:** Real-time control of robot movements and sensor data processing.
    *   **Consumer Electronics:** Power management and efficient processing for devices like smartwatches and portable media players.

**How RISC principles help:**

*   When programming an ARM-based system like the Arduino DUE, you'll naturally write code that leverages the load/store architecture and the availability of registers.
*   The compiler plays a key role in translating your C/C++ code (often written in the Arduino IDE) into the efficient, simple ARM instructions.
*   The speed and power efficiency of the ARM Cortex-M3 allow the Arduino DUE to handle more complex tasks and communicate with a wider range of peripherals compared to simpler microcontrollers.

**Reference:**
*   **Programming Arduino Next Steps: Going Further with Sketches by Simon Monk:** This book would explore more advanced applications and techniques on Arduino boards, including the Arduino DUE. It would implicitly demonstrate how the underlying ARM architecture's capabilities are utilized for more demanding embedded projects.
*   **Exploring Arduino: Tools and Techniques for Engineering Wizardry by Jeremy Blum:** Similar to Monk's book, Blum's work would showcase practical embedded system designs, highlighting how the choice of microcontroller architecture (like ARM) influences the project's success and capabilities.

---

### 7. Key Points to Remember

*   **RISC vs. CISC** is a fundamental classification of processor architectures based on their instruction sets.
*   **RISC** emphasizes simple, fixed-length instructions, a load/store architecture, and a large register file for speed and efficiency.
*   **CISC** uses complex, variable-length instructions that can perform multiple operations, often with memory-to-memory access.
*   **ARM processors are RISC-based**, making them highly suitable for embedded systems due to their **power efficiency, performance, and cost-effectiveness**.
*   The **Arduino DUE** is a prime example of an embedded system utilizing an **ARM Cortex-M3 (RISC)** processor.
*   Understanding these architectural differences helps in **selecting the right processor** for a given embedded system design and in **optimizing code** for performance and power consumption.

---

### 8. Practice Questions

**Question 1:**
What is the primary characteristic of a RISC architecture regarding its instruction set?
A) A large number of complex, multi-step instructions.
B) A small, optimized set of simple, single-step instructions.
C) Instructions that can directly access memory for arithmetic operations.
D) Variable-length instructions that are hard to decode.

**Question 2:**
Which of the following is a key advantage of RISC processors in embedded systems?
A) Higher power consumption.
B) Increased hardware complexity.
C) Lower cost and better power efficiency.
D) Larger code size for every task.

**Question 3:**
Explain the "Load/Store Architecture" principle of RISC processors.
(Answer: In a Load/Store architecture, only explicit `LOAD` and `STORE` instructions are used to move data between memory and the CPU's registers. All arithmetic and logical operations are performed *only* on data held in registers.)

**Question 4:**
The Arduino DUE board uses a microcontroller based on which processor architecture?
A) CISC (e.g., Intel x86)
B) RISC (e.g., ARM Cortex-M3)
C) A hybrid CISC/RISC architecture
D) Von Neumann architecture

**Question 5:**
Compare and contrast RISC and CISC architectures, highlighting their respective advantages and disadvantages, particularly in the context of embedded system design.
(Answer: Refer to the comparison table and advantages/disadvantages sections in the notes. Emphasize how RISC's efficiency aligns well with embedded system constraints like power and cost, while CISC's complexity might be less suited.)

---

### 9. Answers to Practice Questions

1.  **B) A small, optimized set of simple, single-step instructions.**
2.  **C) Lower cost and better power efficiency.**
3.  **In a Load/Store architecture, only explicit `LOAD` and `STORE` instructions are used to move data between memory and the CPU's registers. All arithmetic and logical operations are performed *only* on data held in registers.**
4.  **B) RISC (e.g., ARM Cortex-M3)**
5.  **Refer to the comparison table and advantages/disadvantages sections in the notes. Emphasize how RISC's efficiency aligns well with embedded system constraints like power and cost, while CISC's complexity might be less suited.**

---
This module provides a foundational understanding of the RISC architecture, which is essential for comprehending the design and capabilities of ARM processors commonly found in modern embedded systems.
