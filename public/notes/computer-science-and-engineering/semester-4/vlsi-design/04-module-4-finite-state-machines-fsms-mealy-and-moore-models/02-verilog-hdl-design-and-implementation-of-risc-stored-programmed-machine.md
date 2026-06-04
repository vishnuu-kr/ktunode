---
title: "Verilog HDL Design and implementation of RISC stored programmed Machine"
subject: "VLSI DESIGN"
module: "Module 4: Finite State Machines (FSMs):  Mealy and Moore models"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b312"
status: "completed"
scrapedAt: "2026-05-20T16:17:32.838Z"
---
## VLSI Design - Module 4: Finite State Machines (FSMs) - RISC Stored Programmed Machine in Verilog HDL

**Topic:** Verilog HDL Design and Implementation of RISC Stored Programmed Machine

**Learning Outcomes:**

*   Understand the architecture of a basic RISC stored programmed machine.
*   Learn how to design and implement the control unit of the RISC machine using FSMs in Verilog HDL (both Mealy and Moore).
*   Write Verilog code for the datapath components of the RISC machine.
*   Integrate the control unit and datapath to create a fully functional RISC machine.
*   Understand the memory organization and instruction fetch process.
*   Simulate and verify the functionality of the implemented RISC machine.

### 1. Introduction to RISC Stored Programmed Machines

*   **RISC (Reduced Instruction Set Computing):**  A CPU design philosophy that emphasizes simple instructions, uniform instruction length, and load/store architecture. Key features:
    *   Smaller instruction set.
    *   Fixed-length instructions.
    *   Load/store architecture (data processing operations only occur between registers).
    *   Hardwired control (originally, but now microcoded for flexibility).
    *   Typically more registers.

*   **Stored Programmed Machine (Von Neumann Architecture):** Instructions and data are stored in the same memory space.  The CPU fetches instructions, decodes them, and executes them sequentially.

*   **Key Components of a RISC Stored Programmed Machine:**
    *   **Control Unit:**  Fetches, decodes, and executes instructions. Implemented as an FSM.
    *   **Datapath:**  Performs the actual data processing operations. Includes registers, ALU, and data buses.
    *   **Memory:**  Stores instructions and data.
    *   **Program Counter (PC):**  Holds the address of the next instruction to be fetched.
    *   **Instruction Register (IR):**  Holds the instruction currently being executed.

### 2. RISC Architecture Overview (Example)

Let's consider a simplified 8-bit RISC architecture for illustration.

*   **Instruction Set (Example):**
    *   `LOAD R1, addr`:  Load data from memory address `addr` into register R1.
    *   `STORE R1, addr`:  Store data from register R1 into memory address `addr`.
    *   `ADD R1, R2, R3`:  Add the contents of R2 and R3 and store the result in R1.
    *   `SUB R1, R2, R3`:  Subtract the contents of R3 from R2 and store the result in R1.
    *   `BEQ R1, R2, offset`: Branch to PC + offset if R1 and R2 are equal.
    *   `JMP addr`: Jump to memory address `addr`.
    *   `HLT`: Halt the machine.

*   **Register File:** A set of general-purpose registers (e.g., R0-R7).

*   **ALU:** Performs arithmetic and logical operations.

*   **Memory:**  8-bit wide data, addressable with an 8-bit address.

### 3. Control Unit Design with FSMs (Verilog)

The control unit is the brain of the RISC machine.  It sequences the operations of the datapath based on the instruction being executed.  FSMs are ideal for implementing control units.

*   **FSM Design Steps:**
    1.  **State Diagram:** Define the states of the FSM and the transitions between them. Each state represents a particular stage of instruction execution (e.g., fetch, decode, execute).
    2.  **State Transition Table:** Tabulate the state transitions and output signals based on the current state and input conditions (instruction opcode, flags from ALU).
    3.  **Verilog Implementation:** Translate the state transition table into Verilog code.

*   **Example FSM States:**
    *   `FETCH`: Fetch the instruction from memory.
    *   `DECODE`: Decode the instruction.
    *   `LOAD`: Execute the LOAD instruction.
    *   `STORE`: Execute the STORE instruction.
    *   `ADD`: Execute the ADD instruction.
    *   `SUB`: Execute the SUB instruction.
    *   `BEQ`: Execute the BEQ instruction.
    *   `JMP`: Execute the JMP instruction.
    *   `HALT`: Halt the machine.

*   **Mealy vs. Moore FSMs:**

    *   **Moore Machine:** Output depends only on the *current state*.
        *   Advantages: Simpler, more predictable. Less prone to glitches.
        *   Disadvantages: May require more states. Response is delayed by one clock cycle.

    *   **Mealy Machine:** Output depends on *both* the current state *and* the input.
        *   Advantages: Can be more compact (fewer states). Faster response time.
        *   Disadvantages: More complex, more prone to glitches, outputs can change asynchronously.

    *   **Choice:**  For RISC control units, Moore machines are often preferred for simplicity and predictability. However, Mealy machines can be used where speed is critical.

*   **Verilog Code (Moore Machine Example - Simplified Fetch State):**

    ```verilog
    module control_unit (
        input clk,
        input rst,
        input [7:0] opcode, // Instruction Opcode
        output reg [2:0] state_out, // Current State
        output reg mem_read,      // Memory Read Signal
        output reg pc_enable      // Program Counter Enable
    );

    parameter FETCH  = 3'b000;
    parameter DECODE = 3'b001;
    // ... other states ...

    reg [2:0] current_state, next_state;

    always @(posedge clk or posedge rst) begin
        if (rst) begin
            current_state <= FETCH;
        end else begin
            current_state <= next_state;
        end
    end

    always @(*) begin
        next_state = current_state; // Default: stay in the same state
        mem_read = 0;
        pc_enable = 0;
        state_out = current_state; //Output the current state.

        case (current_state)
            FETCH: begin
                mem_read  = 1;       // Read from memory
                pc_enable = 1;       // Increment PC
                next_state = DECODE;  // Go to decode state
            end
            DECODE: begin
              //Example instruction decoding - placeholder
              if(opcode == 8'b00000001)
                next_state = LOAD;
              else if (opcode == 8'b00000010)
                next_state = STORE;
            end
            default: next_state = FETCH;
        endcase
    end

    endmodule
    ```

*   **Verilog Code (Mealy Machine Example - Simplified Fetch State):**

    ```verilog
    module control_unit (
        input clk,
        input rst,
        input [7:0] opcode, // Instruction Opcode
        output reg [2:0] state_out, // Current State
        output reg mem_read,      // Memory Read Signal
        output reg pc_enable      // Program Counter Enable
    );

    parameter FETCH  = 3'b000;
    parameter DECODE = 3'b001;
    // ... other states ...

    reg [2:0] current_state, next_state;
    reg temp_mem_read, temp_pc_enable;

    always @(posedge clk or posedge rst) begin
        if (rst) begin
            current_state <= FETCH;
        end else begin
            current_state <= next_state;
        end
    end

    always @(*) begin
        next_state = current_state; // Default: stay in the same state
        state_out = current_state; //Output the current state.
        temp_mem_read = 0;
        temp_pc_enable = 0;
        //mem_read  = 0;
        //pc_enable = 0;

        case (current_state)
            FETCH: begin
              temp_mem_read  = 1;
              temp_pc_enable = 1;
              next_state = DECODE;
            end
            DECODE: begin
              //Example instruction decoding - placeholder
              if(opcode == 8'b00000001)
                next_state = LOAD;
              else if (opcode == 8'b00000010)
                next_state = STORE;
            end
            default: next_state = FETCH;
        endcase
    end

    always @ (posedge clk)
       begin
         mem_read <= temp_mem_read;
         pc_enable <= temp_pc_enable;
       end

    endmodule
    ```

    **Explanation:**

    *   `clk`, `rst`, `opcode`:  Inputs to the control unit.
    *   `mem_read`, `pc_enable`: Outputs to the datapath.
    *   `FETCH`, `DECODE`, ...:  State parameters.
    *   `current_state`, `next_state`: State registers.
    *   The `always @(posedge clk or posedge rst)` block handles state transitions.
    *   The `always @(*)` block determines the next state and output signals based on the current state and input.  This is the core of the FSM.  Note the difference between Moore and Mealy implementations for `mem_read` and `pc_enable`.  Moore sets the outputs directly in the `always@(*)` block.  Mealy uses intermediate registers and updates the outputs on the clock edge.  The intermediate registers are key for realizing the combinational relationship between input and output that is characteristic of Mealy machines.

### 4. Datapath Design (Verilog)

The datapath performs the data processing operations specified by the control unit.

*   **Key Components:**
    *   **Register File:** Stores data.  Implemented using an array of registers.
    *   **ALU:** Performs arithmetic and logical operations.
    *   **Memory Interface:**  Handles data transfer between the CPU and memory.
    *   **Buses:**  Carry data between different components.

*   **Verilog Code (Example - Register File):**

    ```verilog
    module register_file (
        input clk,
        input rst,
        input we,              // Write Enable
        input [2:0] ra1,      // Read Address 1
        input [2:0] ra2,      // Read Address 2
        input [2:0] wa,       // Write Address
        input [7:0] wd,       // Write Data
        output reg [7:0] rd1, // Read Data 1
        output reg [7:0] rd2  // Read Data 2
    );

    reg [7:0] registers [7:0];  // 8 registers, each 8-bit wide

    always @(posedge clk or posedge rst) begin
        if (rst) begin
            for (integer i = 0; i < 8; i = i + 1) begin
                registers[i] <= 8'b0;
            end
        end else if (we) begin
            registers[wa] <= wd;
        end
    end

    always @(*) begin
        rd1 = registers[ra1];
        rd2 = registers[ra2];
    end

    endmodule
    ```

*   **Verilog Code (Example - ALU):**

    ```verilog
    module alu (
        input [7:0] a,
        input [7:0] b,
        input [2:0] alu_op,  // ALU Operation Code
        output reg [7:0] result,
        output reg zero_flag  // Zero Flag
    );

    parameter ALU_ADD = 3'b000;
    parameter ALU_SUB = 3'b001;
    // ... other ALU operations ...

    always @(*) begin
        case (alu_op)
            ALU_ADD: result = a + b;
            ALU_SUB: result = a - b;
            // ... other ALU operations ...
            default: result = 8'b0;
        endcase

        zero_flag = (result == 8'b0);
    end

    endmodule
    ```

### 5. Memory Organization and Instruction Fetch

*   **Memory:** A simple array of registers in Verilog.

*   **Instruction Fetch Process:**
    1.  The control unit asserts `mem_read` to read the instruction from memory at the address pointed to by the PC.
    2.  The instruction is loaded into the IR (Instruction Register).
    3.  The control unit increments the PC to point to the next instruction (or branches to a different address based on the instruction).

*   **Verilog Code (Example - Simplified Memory):**

    ```verilog
    module memory (
        input clk,
        input we,         // Write Enable
        input [7:0] addr,  // Address
        input [7:0] wd,    // Write Data
        input mem_read,
        output reg [7:0] rd  // Read Data
    );

    reg [7:0] memory_array [255:0]; // 256 bytes of memory

    always @(posedge clk) begin
        if (we) begin
            memory_array[addr] <= wd;
        end
        if(mem_read)
           rd <= memory_array[addr];
    end


    endmodule
    ```

### 6. Integrating Control Unit and Datapath

*   Connect the outputs of the control unit to the control inputs of the datapath components (register file, ALU, memory).
*   Connect the outputs of the datapath components (ALU flags, memory data) to the inputs of the control unit.
*   The control unit orchestrates the operation of the datapath by asserting the appropriate control signals at the right time.

*   **Top-Level Module:** Instantiate the control unit, datapath components, and memory, and connect them together.

### 7. Simulation and Verification

*   Write a testbench to simulate the RISC machine.
*   Load a program into memory.
*   Verify that the machine executes the program correctly by observing the register values, memory contents, and ALU flags.
*   Use waveform viewers to analyze the signals and debug the design.

### 8. Example: Implementing the LOAD Instruction

1.  **FETCH:** The control unit is in the `FETCH` state.  `mem_read` is asserted, and the PC is incremented.
2.  **DECODE:** The instruction is decoded.  The opcode indicates a `LOAD` instruction.
3.  **LOAD:** The control unit transitions to the `LOAD` state.
    *   It asserts the appropriate control signals to:
        *   Enable the memory read operation with the address specified in the instruction.
        *   Enable the write operation to the register specified in the instruction.
        *   Connect the memory output to the register file input.
4.  **Return to FETCH:** After the data is loaded into the register, the control unit transitions back to the `FETCH` state to fetch the next instruction.

### 9. Practice Questions/Exercises

1.  **Design a Mealy FSM for the control unit that implements the `BEQ` (Branch if Equal) instruction.**  Consider the inputs (ALU zero flag, instruction opcode) and outputs (PC enable, PC load).
    *   **Answer:** You'll need states like FETCH, DECODE, BEQ. The ALU's zero flag is an input to the FSM. The output is conditional based on the zero flag - if the flags is set (values are equal) the PC is updated with an offset specified in the instruction.

2.  **Write Verilog code for a simple 4-bit ALU that implements ADD, SUB, AND, and OR operations.** Include a zero flag output.
    *   **Answer:** (Conceptual - see similar code above for 8-bit) You'll need to use a case statement in an `always @(*)` block, with ALU operation codes as inputs.  The zero flag should be set if the output is all zeros.

3.  **Explain the difference between using a Moore and Mealy FSM for the control unit, and discuss the advantages and disadvantages of each approach.**
    *   **Answer:** (See explanation in Section 3 above.)

4.  **Explain the concept of a load/store architecture and why it is used in RISC processors.**
    *   **Answer:** Load/store architecture means that data processing operations (like ADD, SUB) can only be performed on data held in registers. Memory access is restricted to LOAD (transferring data from memory to registers) and STORE (transferring data from registers to memory) instructions.  This simplifies the instruction set, allows for fixed-length instructions, and makes it easier to optimize instruction execution.

### 10. Important Points to Remember

*   **Understand the RISC principles:** Simplicity, fixed-length instructions, load/store architecture.
*   **Master FSM design:** State diagrams, state transition tables, Verilog implementation (Moore and Mealy).
*   **Know the datapath components:** Register file, ALU, memory interface.
*   **Practice Verilog coding:** Write code for the control unit, datapath, and memory.
*   **Test and verify thoroughly:** Use testbenches and waveform viewers to ensure correct functionality.
*   **Consider Tradeoffs:**  Choice of Mealy vs. Moore FSM depends on speed and complexity requirements.
*   **Instruction Format:**  Pay attention to the format of your instructions (opcode, register addresses, immediate values) and how they are decoded by the control unit.

This comprehensive guide should give you a solid foundation for understanding and designing RISC stored programmed machines using Verilog HDL.  Good luck!
