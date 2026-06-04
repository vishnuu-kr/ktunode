---
title: "Programmable logical blocks"
subject: "VLSI DESIGN"
module: "Module 4: Finite State Machines (FSMs):  Mealy and Moore models"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b315"
status: "completed"
scrapedAt: "2026-05-20T16:17:35.073Z"
---
# VLSI Design - Module 4: Finite State Machines (FSMs) - Programmable Logical Blocks

## Introduction

This module focuses on Programmable Logical Blocks (PLBs) within the context of Finite State Machines (FSMs), specifically Mealy and Moore models. Understanding PLBs is crucial for implementing FSMs efficiently in VLSI designs.

## Learning Outcomes

Upon completion of this topic, you will be able to:

*   Understand the structure and functionality of Programmable Logical Blocks (PLBs).
*   Describe how PLBs can be used to implement Finite State Machines (FSMs).
*   Distinguish between different types of PLBs (e.g., LUT-based, PLA-based).
*   Explain how PLBs contribute to the flexibility and programmability of VLSI designs.
*   Analyze the trade-offs associated with using PLBs for FSM implementation (e.g., speed, area, power).

## 1. Key Concepts and Definitions

*   **Finite State Machine (FSM):** A sequential circuit that transitions between different states based on input and current state. It has two main types:
    *   **Mealy Machine:** The output depends on both the current state and the input.
    *   **Moore Machine:** The output depends only on the current state.
*   **Programmable Logical Block (PLB):** A versatile, reconfigurable building block used in digital circuits to implement logic functions. Its core consists of programmable elements, usually arranged in a structured array.
*   **Look-Up Table (LUT):** A memory-based PLB that stores the truth table of a logic function.  The inputs to the LUT serve as addresses into the memory, and the value stored at that address represents the output for that input combination.
*   **Programmable Logic Array (PLA):** A PLB comprised of a programmable AND plane followed by a programmable OR plane.  It can implement sum-of-products (SOP) expressions.
*   **Programmable Array Logic (PAL):** Similar to PLA, but with a programmable AND plane and a fixed OR plane.
*   **Field-Programmable Gate Array (FPGA):** A type of integrated circuit that can be configured by the user after manufacturing. FPGAs typically contain a large array of configurable logic blocks (CLBs), which often consist of LUTs and flip-flops, connected by a programmable interconnect network.
*   **Configurable Logic Block (CLB):** The basic building block within an FPGA.  It typically contains one or more LUTs, flip-flops, and multiplexers.
*   **Interconnect Network:** The programmable routing resources within an FPGA that connect CLBs and I/O blocks.
*   **Configuration Memory:** The memory used to store the configuration data that determines the functionality of the PLBs and the interconnect network within an FPGA.

## 2. Structure and Functionality of Programmable Logical Blocks (PLBs)

PLBs offer a flexible and adaptable way to implement logic functions.  Their structure is designed to be easily configurable to implement a variety of different logic functions.

### 2.1. Look-Up Table (LUT)-based PLBs

*   **Structure:** A k-input LUT can implement any Boolean function of k variables. It consists of:
    *   Address inputs (k inputs)
    *   Memory array (2<sup>k</sup> memory cells)
    *   Output
*   **Functionality:** The inputs act as the address to the memory array.  The value stored at the address corresponding to the input combination is the output of the LUT.
*   **Example:** A 4-input LUT can implement any logic function with four input variables. The LUT has 2<sup>4</sup> = 16 memory locations, each storing a 1 or 0, representing the output of the function for each input combination.
*   **Advantages:** Highly flexible and can implement any combinational logic function.
*   **Disadvantages:**  Memory intensive for larger number of inputs.
*   **Implementation in FSMs:** LUTs can be used to implement both the next-state logic and the output logic of an FSM.  The current state and the inputs serve as inputs to the LUTs.

### 2.2. PLA-based PLBs

*   **Structure:** Consists of:
    *   AND plane: A programmable array of AND gates.
    *   OR plane: A programmable array of OR gates.
    *   Inputs: Input variables and their complements.
    *   Outputs: Sum-of-products terms.
*   **Functionality:** The AND plane generates product terms. The OR plane sums the product terms to generate the output functions. Each AND gate's inputs are determined by the programmable connections, allowing any combination of input variables (or their complements) to be used in a product term. Similarly, the OR gate inputs are also programmable, allowing any combination of product terms to be summed to form an output.
*   **Example:** A PLA can implement equations like:
    *   Output1 = (A AND B) OR (C AND D)
    *   Output2 = (A AND NOT(B)) OR (NOT(C) AND D)
*   **Advantages:**  Good for implementing complex Boolean functions expressed in sum-of-products form.
*   **Disadvantages:** Less flexible than LUTs, and can be area-intensive if the number of product terms is large.
*   **Implementation in FSMs:** PLAs can implement the next-state logic and output logic of FSMs if the state transition equations and output equations are expressed in SOP form.

### 2.3. PAL-based PLBs

*   **Structure:** Similar to PLA, but with a fixed OR plane.  This means that once the device is programmed, the OR gates are permanently connected to specific AND gate outputs.
*   **Functionality:** Less flexible than PLAs because the OR plane is fixed, but simpler to manufacture and program.
*   **Advantages:** Simpler to manufacture and program than PLAs.
*   **Disadvantages:** Less flexible than PLAs.
*   **Implementation in FSMs:** Suitable for FSMs where the next-state and output functions can be expressed with limited sharing of product terms across different output signals.

## 3. Using PLBs to Implement Finite State Machines (FSMs)

PLBs are well-suited for implementing FSMs due to their flexibility and programmability. The following steps are generally involved:

1.  **FSM Design:** Define the states, inputs, outputs, and state transitions of the FSM. Create a state diagram or state table.
2.  **State Encoding:** Assign a binary code to each state.  This is crucial because it determines the number of flip-flops needed and can impact the complexity of the next-state logic.
3.  **Logic Minimization:** Minimize the Boolean expressions for the next-state logic and output logic (either using Karnaugh maps or automated tools). This is particularly important for PLA and PAL based implementations.
4.  **PLB Configuration:** Configure the PLBs to implement the minimized Boolean expressions. This involves programming the LUTs, or the AND and OR planes of the PLA/PAL.
5.  **Interconnection:** Connect the PLBs together to form the FSM circuit. This includes connecting the outputs of the next-state logic to the inputs of the flip-flops that store the current state, and connecting the outputs of the output logic to the output pins.
6.  **Testing and Verification:**  Thoroughly test the implemented FSM to ensure it functions correctly.

**Example:** Implementing a simple Mealy machine using a 4-input LUT.

Assume a Mealy machine with 2 states (S0, S1), 1 input (X), and 1 output (Y).  The state transition table is as follows:

| Current State | Input (X) | Next State | Output (Y) |
|----------------|-----------|------------|------------|
| S0             | 0         | S0         | 0          |
| S0             | 1         | S1         | 0          |
| S1             | 0         | S0         | 1          |
| S1             | 1         | S1         | 1          |

*   **State Encoding:** S0 = 0, S1 = 1
*   **Inputs to LUT:**  `Current State (Q)`, `Input (X)`
*   **Outputs from LUT:** `Next State (Q_next)`, `Output (Y)`

The LUT would be configured as follows (where `Q` is the current state and `X` is the input):

| Q | X | Address | Q_next | Y |
|---|---|---------|--------|---|
| 0 | 0 | 00      | 0      | 0 |
| 0 | 1 | 01      | 1      | 0 |
| 1 | 0 | 10      | 0      | 1 |
| 1 | 1 | 11      | 1      | 1 |

This demonstrates how a single LUT can implement both the next-state logic and the output logic for this simple Mealy machine.

## 4. Trade-offs Associated with Using PLBs for FSM Implementation

Using PLBs offers flexibility but also presents certain trade-offs:

*   **Speed:** LUT-based designs can be faster than PLA-based designs for complex functions because the delay is independent of the logic complexity, only dependent on the LUT access time.  However, very large LUTs can become slower. The propagation delay of the FSM is determined by the propagation delay of the CLB logic (LUT) combined with the routing delay of the interconnect. PLA/PAL based implementations' speed depends greatly on the number of product terms.
*   **Area:** LUTs can be more area-efficient for complex or random logic. PLA/PALs might be more area-efficient for functions that can be well-represented in sum-of-products form with few terms. The overall area also depends on the complexity of the interconnect.
*   **Power:** Power consumption depends on the utilization of the PLBs and the switching activity. More complex interconnects and LUTs contribute to higher power consumption.  PLA/PAL power consumption is related to the number of transistors and the switching activity of the product terms.
*   **Flexibility:** LUTs offer the highest flexibility, as they can implement any function of their inputs. PLA/PALs are limited to implementing functions in sum-of-products form.
*   **Design Complexity:** Using pre-designed PLBs simplifies the design process compared to custom gate-level design, but requires understanding the architecture and constraints of the chosen PLB.
*   **Programmability:** PLBs allow for easy modification and reconfiguration of the FSM, which is a significant advantage for prototyping and adaptive systems.

## 5. Programmability and Flexibility of VLSI Designs

PLBs significantly enhance the programmability and flexibility of VLSI designs. This allows designers to:

*   **Implement complex logic functions:**  PLBs can be configured to implement a wide range of logic functions, from simple gates to complex arithmetic operations.
*   **Realize custom architectures:** Designers can create custom architectures tailored to specific applications.
*   **Adapt to changing requirements:** PLBs can be reconfigured to meet changing requirements or to correct errors.
*   **Reduce time-to-market:**  Using pre-designed PLBs simplifies the design process and reduces the time required to develop a new VLSI design.
*   **Facilitate prototyping:** PLBs are ideal for prototyping new VLSI designs. Designers can quickly implement and test their designs before committing to a full custom implementation.
*   **Implement reconfigurable computing systems:** PLBs enable the development of reconfigurable computing systems that can adapt their hardware architecture to match the needs of the application.

## 6. Practice Questions and Exercises

**Question 1:**

Explain the difference between a Moore and Mealy FSM and how this difference impacts the implementation in a PLB-based system.

**Answer:**

*   **Moore FSM:** Output depends only on the current state. In a PLB implementation, the output logic only needs to consider the flip-flop outputs representing the current state.
*   **Mealy FSM:** Output depends on both the current state and the input. In a PLB implementation, the output logic must consider both the flip-flop outputs representing the current state and the input signals. This might require a larger LUT or more complex PLA/PAL configuration.  This can also lead to faster output response times in some cases, as the output can change directly in response to an input without waiting for a state change.  However, Mealy machines can also be more susceptible to glitches.

**Question 2:**

Compare and contrast LUT-based and PLA-based PLBs in terms of their suitability for implementing different types of FSMs. Consider factors like complexity, speed, and area.

**Answer:**

*   **LUT-based:** Best suited for complex or random logic FSMs. Highly flexible and generally faster (delay independent of logic complexity). Might consume more area for very simple functions.

*   **PLA-based:** Best suited for FSMs where the next-state and output logic can be expressed efficiently in sum-of-products form. Can be area-efficient for these types of FSMs. Might be slower than LUTs for complex functions, and less flexible.

**Question 3:**

Describe the steps involved in implementing an FSM using an FPGA.

**Answer:**

1.  **Design and Specification:** Define the FSM's behavior using a state diagram or state table.
2.  **State Encoding:** Assign binary codes to each state.
3.  **Logic Minimization:** Simplify the Boolean expressions for the next-state and output logic.
4.  **FPGA Selection:** Choose an appropriate FPGA device based on the FSM's complexity and performance requirements.
5.  **Design Entry:** Create a design description using a hardware description language (HDL) such as VHDL or Verilog.
6.  **Synthesis:** Use a synthesis tool to translate the HDL code into a netlist of logic gates and flip-flops. The synthesizer will also perform optimizations such as logic simplification and technology mapping to match the available resources in the FPGA.
7.  **Implementation (Place and Route):** Use an implementation tool to place the logic gates and flip-flops onto the FPGA's configurable logic blocks (CLBs) and route the connections between them using the FPGA's programmable interconnect network. This step aims to optimize performance metrics such as speed and area.
8.  **Bitstream Generation:** Generate a configuration bitstream that contains the programming information for the FPGA.
9.  **Configuration:** Load the configuration bitstream into the FPGA's configuration memory to configure the device.
10. **Testing and Verification:** Test the implemented FSM thoroughly to ensure it functions correctly.

**Question 4:**

A certain FSM has 3 states, 2 inputs, and 1 output.  Estimate the size (number of memory locations) of the LUT needed to implement this FSM if you want to implement both next state and output logic with a single LUT.

**Answer:**

*   Number of states = 3, which requires 2 flip-flops (state bits) for encoding (2<sup>2</sup> >= 3).
*   Number of inputs = 2.
*   Total inputs to LUT = 2 (state bits) + 2 (external inputs) = 4.
*   Therefore, the LUT needs 2<sup>4</sup> = 16 memory locations.  However, you will have two output bits: one for the next state and one for the FSM's output. In this case, you might either need to use two LUTs or a single LUT and decompose the functionality.

**Question 5:**

What are the advantages of using FPGAs based PLBs for FSM designs compared to custom ASIC designs?

**Answer:**

* **Faster Time-to-Market:** FPGAs allow for rapid prototyping and development, significantly reducing the time it takes to get a product to market compared to custom ASICs, which require extensive design, fabrication, and testing processes.
* **Lower Initial Cost:** FPGAs eliminate the high upfront costs associated with custom ASIC design, such as mask fabrication and specialized design tools.
* **Flexibility and Reconfigurability:** FPGAs can be reprogrammed and reconfigured on the fly, allowing for design changes and updates without requiring a new chip. This is particularly useful in applications where requirements may evolve over time.
* **Lower Risk:** Using an FPGA allows for design verification and testing in a real-world environment before committing to a costly custom ASIC implementation, reducing the risk of design flaws and errors.

## 7. Important Points to Remember

*   PLBs are versatile building blocks that can be used to implement various logic functions, including FSMs.
*   LUTs offer the highest flexibility but might be less area-efficient for very simple functions.
*   PLAs and PALs are suitable for functions that can be expressed efficiently in sum-of-products form.
*   FPGAs are a popular choice for implementing FSMs due to their flexibility, reconfigurability, and ease of use.
*   The choice of PLB and the implementation approach involves trade-offs between speed, area, power, and design complexity.
*   Understand the limitations and advantages of each type of PLB when designing FSMs.
*   State encoding significantly affects the complexity and performance of the FSM implementation.

This comprehensive guide covers the core aspects of Programmable Logical Blocks (PLBs) in the context of Finite State Machines (FSMs) and VLSI design. Reviewing these notes and practicing the exercises will help you master the concepts and apply them effectively. Good luck!
