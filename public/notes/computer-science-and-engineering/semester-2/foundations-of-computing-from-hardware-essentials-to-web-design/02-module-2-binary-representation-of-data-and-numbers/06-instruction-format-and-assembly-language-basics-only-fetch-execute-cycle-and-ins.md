---
title: "Instruction format and assembly language (basics only) Fetch-execute cycle and instruction execution."
subject: "FOUNDATIONS OF COMPUTING: FROM HARDWARE ESSENTIALS TO WEB DESIGN"
module: "Module 2: Binary representation of data and numbers"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5dfd"
status: "completed"
scrapedAt: "2026-05-20T16:34:17.873Z"
---
Here are your comprehensive study notes for "Instruction Format and Assembly Language (Basics Only) Fetch-Execute Cycle and Instruction Execution" from Module 2 of "Foundations of Computing: From Hardware Essentials to Web Design."

***

## Module 2: Binary Representation of Data and Numbers

### Topic: Instruction Format and Assembly Language (Basics Only) – The Language of the CPU

Welcome back, everyone! In our journey through the foundations of computing, we've already touched upon how data is represented in binary. Today, we're going to dive deeper into how the computer's brain, the Central Processing Unit (CPU), actually *understands* and *executes* those binary instructions. Think of it like this: if binary is the alphabet, then assembly language is the basic grammar that allows us to build simple sentences for the CPU.

This topic directly connects to **CO2: Explain the data representations, CPU architectures, and the basic functioning of a computer.** Understanding how instructions are formatted and executed is fundamental to grasping the CPU's architecture and its role in making a computer function. It's all about bridging the gap between the raw data we've been talking about and the actual operations the computer performs.

### What is an Instruction? The CPU's To-Do List

At its core, a computer program is simply a sequence of instructions. These instructions tell the CPU what to do, step by step. But what does an instruction *look* like to the CPU? It's not a friendly English phrase like "add these two numbers." It's a binary code.

#### Instruction Format: The Blueprint for Action

Every instruction that the CPU can understand has a specific structure, or *format*. This format is like a blueprint that tells the CPU how to interpret the binary code it receives. A typical instruction format will usually consist of two main parts:

1.  **The Opcode (Operation Code):** This is the most crucial part! The opcode tells the CPU *what operation* to perform. Think of it as the verb in our computer language. It could be an instruction to add, subtract, move data, compare values, or jump to a different part of the program. The number of possible operations the CPU can perform determines the size of the opcode.

2.  **Operands:** These are the "who" or "what" of the instruction. They specify the data or memory locations that the operation needs to work with. An instruction might need one operand (e.g., "load this value"), two operands (e.g., "add this value to that value"), or sometimes even more. Operands can be:
    *   **Immediate values:** The actual data itself (e.g., the number 5).
    *   **Register addresses:** The CPU has small, super-fast storage locations called registers. An operand can tell the CPU to use the data stored in a specific register.
    *   **Memory addresses:** Instructions can also tell the CPU to fetch or store data from or to the main memory (RAM).

The way these parts are arranged within the binary instruction is the **instruction format**. Different CPU architectures (like x86 used in most PCs, or ARM used in smartphones) have different instruction formats. For our basic understanding, imagine a simple format: a fixed number of bits for the opcode, followed by a fixed number of bits for each operand.

**Example Analogy:** Think about giving instructions to a robot.
*   **Opcode:** "Move"
*   **Operands:** "Forward 10 steps," "Turn left 90 degrees."

The instruction format is like the rule that says the command word *always* comes first, followed by the distance and direction.

#### Assembly Language: The Human-Readable Bridge

Directly writing in binary machine code is incredibly tedious and error-prone. That's where **assembly language** comes in. Assembly language is a low-level programming language that uses mnemonics (short, easy-to-remember codes) to represent the machine code instructions. It's a symbolic representation, making it much more readable for humans.

Each assembly language instruction usually corresponds directly to one machine code instruction. This is a key characteristic – it's a one-to-one or one-to-few mapping.

**Common Assembly Language Mnemonics:**

*   `MOV`: Move data from one location to another.
*   `ADD`: Add two values.
*   `SUB`: Subtract two values.
*   `JMP`: Jump to a different instruction.
*   `LOAD`: Load data from memory into a register.
*   `STORE`: Store data from a register into memory.

**Example:**
Instead of a long string of binary for "add the contents of register R1 and register R2 and store the result in register R3," in assembly language, it might look something like this:

```assembly
ADD R3, R1, R2
```

Here, `ADD` is the opcode mnemonic, and `R3`, `R1`, `R2` are operands referring to registers. This is much easier for us to read and write than the raw binary!

**Connecting to Textbooks:** Schneider and Gersting (2/e) in "Invitation to Computer Science" emphasize how assembly language provides a crucial step in bridging the gap between high-level languages (like Python or Java) and the machine's native binary. Englander's "The Architecture of Computer Hardware, Systems Software, & Networking" (5/e) delves into how instruction sets (the collection of all possible machine instructions a CPU can execute) are defined, and assembly language is the direct way to interact with them.

**Important for Exams:** Understanding the *purpose* of assembly language – to make machine instructions more human-readable – is vital. Know that it's a low-level language, and each assembly instruction typically maps to one machine instruction.

### The Heartbeat of the Computer: The Fetch-Execute Cycle

Now that we know what an instruction looks like (in both binary and assembly), how does the CPU actually *process* them? It does this through a fundamental, continuous process known as the **Fetch-Execute Cycle**, also sometimes called the Instruction Cycle. This is the lifeblood of the CPU, and it's happening billions of times per second in modern processors!

This cycle is the "basic functioning of a computer" that **CO2** is all about. It’s how the CPU *works*.

The Fetch-Execute Cycle can be broken down into a few key stages. Let's think of the CPU as a very efficient chef preparing a meal based on a recipe book (your program).

**The Chef Analogy:**

Imagine a chef who has a recipe book (the program stored in memory) and a small workbench with a few mixing bowls (registers).

**Stage 1: Fetch**

*   **What happens:** The CPU needs to get the next instruction to execute. It retrieves (fetches) the instruction from the computer's memory (RAM).
*   **How it works:** The CPU has a special register called the **Program Counter (PC)**. The PC holds the memory address of the *next* instruction to be executed. The CPU uses this address to fetch the instruction from RAM. Once fetched, the instruction is brought into the CPU, typically into an **Instruction Register (IR)**.
*   **Chef's equivalent:** The chef looks at their recipe book to see what the next step is and brings that part of the recipe to their immediate workspace. The PC is like a bookmark showing the next instruction, and the IR is like the written instruction on the chef's counter.
*   **Crucial point:** After fetching an instruction, the CPU *always* increments the Program Counter (PC) so it points to the *next* instruction in sequence. This ensures the program runs from start to finish in the correct order, unless told otherwise (which we'll see later!).

**Stage 2: Decode**

*   **What happens:** The CPU now has the raw binary instruction in its Instruction Register. It needs to figure out *what* this instruction is asking it to do.
*   **How it works:** The CPU's **Control Unit** analyzes the opcode part of the instruction. It determines the operation (e.g., add, move) and identifies the operands (e.g., which registers or memory locations are involved).
*   **Chef's equivalent:** The chef reads the instruction they just brought over: "Add 2 cups of flour to the bowl." They understand they need to find flour and a bowl.
*   **Connecting to Format:** This is where the **instruction format** is essential. The CPU knows, based on the format, where to find the opcode and where to find the operand information.

**Stage 3: Execute**

*   **What happens:** This is where the actual work is done! The CPU performs the operation specified by the opcode, using the operands it identified.
*   **How it works:** The **Arithmetic Logic Unit (ALU)** is the component responsible for carrying out arithmetic (add, subtract) and logic (AND, OR, NOT) operations. Based on the decoded instruction, the Control Unit directs the ALU to perform the necessary calculations or data movements. Operands might be fetched from registers or memory at this stage.
*   **Chef's equivalent:** The chef measures out 2 cups of flour and pours it into the mixing bowl.
*   **Examples:**
    *   If the instruction was `ADD R3, R1, R2`, the CPU would fetch the values from R1 and R2, send them to the ALU, perform the addition, and the result would be stored back into R3.
    *   If the instruction was `MOV R5, 10`, the CPU would place the immediate value 10 into register R5.

**Stage 4: Store (Write-back) - Sometimes considered part of Execute or a separate step**

*   **What happens:** The result of the execution needs to be placed somewhere useful.
*   **How it works:** The result from the ALU is written back to a specified register or to a memory location.
*   **Chef's equivalent:** The chef now has the flour in the bowl, ready for the next step.

This cycle – **Fetch, Decode, Execute, Store** – repeats continuously for every instruction in the program, making the computer run.

**Important for Exams:** You *must* know the stages of the Fetch-Execute cycle. Often, exam questions will ask you to describe these stages, or to explain what happens in a specific stage. Understanding the role of the Program Counter (PC), Instruction Register (IR), Control Unit, and ALU is key here.

### Instruction Execution: Putting it all Together

Let's take a slightly more complex example to see how the Fetch-Execute cycle works in practice, using a tiny snippet of hypothetical assembly language that might correspond to a simple addition program.

Imagine we want to add the number 5 to the number 10, and store the result (15) in a register called `RESULT`.

Let's say the program is stored in memory starting at address 1000.

**Program in Memory:**

*   Address 1000: `LOAD R1, 5` (Load the value 5 into Register R1)
*   Address 1001: `LOAD R2, 10` (Load the value 10 into Register R2)
*   Address 1002: `ADD RESULT, R1, R2` (Add the contents of R1 and R2, store in RESULT)

**Execution Steps:**

1.  **Initial State:** `PC` is set to `1000`. Registers `R1`, `R2`, `RESULT` are empty or contain unknown values.

2.  **Cycle 1 (Instruction at Address 1000):**
    *   **Fetch:** CPU reads the instruction at address `1000` (which is `LOAD R1, 5`) from memory. The instruction is placed in the IR. `PC` is incremented to `1001`.
    *   **Decode:** Control Unit decodes `LOAD R1, 5`. It understands: "Load an immediate value into Register R1."
    *   **Execute:** The value `5` (the operand) is fetched. The ALU (or a dedicated data path) sends `5` to `R1`.
    *   **Store:** `R1` now holds the value `5`.

3.  **Cycle 2 (Instruction at Address 1001):**
    *   **Fetch:** CPU reads the instruction at address `1001` (`LOAD R2, 10`) from memory. The instruction is placed in the IR. `PC` is incremented to `1002`.
    *   **Decode:** Control Unit decodes `LOAD R2, 10`. It understands: "Load an immediate value into Register R2."
    *   **Execute:** The value `10` is fetched. The ALU sends `10` to `R2`.
    *   **Store:** `R2` now holds the value `10`.

4.  **Cycle 3 (Instruction at Address 1002):**
    *   **Fetch:** CPU reads the instruction at address `1002` (`ADD RESULT, R1, R2`) from memory. The instruction is placed in the IR. `PC` is incremented to `1003`.
    *   **Decode:** Control Unit decodes `ADD RESULT, R1, R2`. It understands: "Add contents of R1 and R2, store result in RESULT."
    *   **Execute:**
        *   The values from `R1` (which is 5) and `R2` (which is 10) are sent to the ALU.
        *   The ALU performs the addition: 5 + 10 = 15.
    *   **Store:** The result `15` is written into the `RESULT` register.

**Final State:** `R1` holds 5, `R2` holds 10, and `RESULT` holds 15. The `PC` is pointing to `1003`, ready for the next instruction in the program.

**Connecting to Learning Outcomes:** This entire process, from understanding what an instruction looks like (format and assembly) to how it's processed step-by-step (fetch-execute cycle), directly contributes to **CO2**. It demystifies the "basic functioning of a computer" by showing the fundamental operational loop.

**Think about this:** What happens if the instruction is a "jump" instruction? A jump instruction changes the value of the Program Counter (PC) to a different memory address. This is how programs can loop or branch. For instance, if an instruction said `JMP 2000`, the CPU would fetch it, decode it, and instead of just incrementing the PC to the next sequential address, it would *load the address `2000` into the PC*. The next fetch cycle would then start from address `2000`. This is crucial for program flow control.

**Summary and Key Takeaways:**

*   **Instruction Format:** Defines the structure of a machine instruction (opcode + operands).
*   **Assembly Language:** A human-readable, symbolic representation of machine code instructions. It makes programming at the CPU level manageable.
*   **Fetch-Execute Cycle:** The fundamental process by which a CPU executes instructions: Fetch instruction from memory, Decode it, Execute it, and Store the result.
*   **Key Components:** Program Counter (PC), Instruction Register (IR), Control Unit, ALU, Registers, Memory.
*   Understanding these basics is crucial for grasping how software interacts with hardware, a core concept in **CO2**.

Remember these concepts! They are the bedrock upon which more complex computing operations are built.

***

## Sample Questions and Answers

Here are a few questions to test your understanding, designed to be exam-oriented as well as concept-oriented:

**1. Conceptual Question:**
Explain the primary purpose of assembly language in relation to machine code.

**Answer:**
The primary purpose of assembly language is to provide a more human-readable and manageable way for programmers to write instructions for the CPU. Machine code, which is binary, is difficult for humans to read, write, and debug. Assembly language uses mnemonics (short codes like `ADD`, `MOV`, `JMP`) to represent these binary operations and symbolic names for memory locations and registers. This makes it easier to understand the logic of the program, even though each assembly instruction typically corresponds directly to one or a few machine code instructions. It acts as a symbolic representation, bridging the gap between human intent and the CPU's binary language.

**2. Exam-Oriented Question:**
Describe the four main stages of the Fetch-Execute cycle and briefly explain what happens in each stage.

**Answer:**
The Fetch-Execute cycle is the fundamental process by which a CPU executes instructions. The four main stages are:

*   **Fetch:** The CPU retrieves the next instruction to be executed from memory. The Program Counter (PC) holds the address of this instruction, which is then fetched and loaded into the Instruction Register (IR). After fetching, the PC is typically incremented to point to the next instruction.
*   **Decode:** The Control Unit within the CPU interprets the instruction in the IR. It determines the operation to be performed (based on the opcode) and identifies any operands (data or memory addresses) required by the instruction. This stage relies on the predefined instruction format.
*   **Execute:** The CPU performs the actual operation. The Arithmetic Logic Unit (ALU) carries out calculations or logical operations as specified by the instruction. Operands are fetched from registers or memory, processed by the ALU, and the result is generated.
*   **Store (or Write-back):** The result of the execution is written back to a designated location, usually a CPU register or a specific memory address. This makes the outcome of the operation available for subsequent instructions.

**3. Application/Scenario Question:**
Suppose a CPU's instruction format dedicates 4 bits to the opcode and 6 bits to an operand. If an instruction is to load the number 25 into register R1, how might this be represented in a simplified binary instruction format (assuming a hypothetical instruction for loading immediate values into R1 uses opcode `0110`)?

**Answer:**
Let's break this down:
*   **Opcode:** The instruction is to "load immediate value." We are given a hypothetical opcode of `0110` (4 bits).
*   **Operand:** The value to be loaded is 25. We are told operands have 6 bits.
*   **Binary representation of 25:** To represent 25 in 6 bits, we find its binary equivalent.
    *   25 in decimal = 16 + 8 + 1
    *   So, 25 in binary is `11001`.
    *   To fit this into 6 bits, we pad with leading zeros: `011001`.

Therefore, a simplified binary instruction might look like:
`0110` (opcode for LOAD IMMEDIATE to R1) followed by `011001` (the value 25).

The full binary instruction would be: `0110011001`.

This question tests your understanding of instruction format, binary representation, and how an assembly instruction (implied as "LOAD R1, 25") translates into a binary instruction for the CPU.
