---
title: "array based design"
subject: "VLSI DESIGN"
module: "Module 2: Introduction to Integrated Circuits (ICs):"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b2fc"
status: "completed"
scrapedAt: "2026-05-20T16:17:18.182Z"
---
## VLSI Design: Module 2 - Array Based Design

**Module:** 2: Introduction to Integrated Circuits (ICs)
**Topic:** Array Based Design

**Learning Outcomes:**

*   Understand the concept and advantages of array-based design methodologies.
*   Differentiate between Programmable Logic Arrays (PLAs), Programmable Array Logic (PALs), and Field Programmable Gate Arrays (FPGAs).
*   Explain the architecture and functionality of PLAs, PALs, and FPGAs.
*   Describe the programming techniques used for PLAs, PALs, and FPGAs (e.g., fusing, antifuses, SRAM-based configuration).
*   Compare and contrast the advantages and disadvantages of different array-based design approaches in terms of area, performance, power consumption, and flexibility.
*   Understand the basic building blocks (e.g., LUTs, CLBs, interconnects) in modern FPGAs.

---

### 1. Introduction to Array-Based Design

*   **Definition:** Array-based design is a VLSI design methodology that utilizes pre-fabricated arrays of logic gates or programmable elements to implement custom logic functions.  The design is customized by connecting and programming these pre-existing structures.

*   **Key Idea:**  Instead of designing individual transistors and complex layouts from scratch for each custom design (as in full-custom or standard cell design), array-based design pre-defines a repeating structure (the array) and then programs it to achieve the desired functionality.

*   **Advantages:**
    *   **Faster Time-to-Market:**  Shorter design cycle due to pre-fabricated components and simpler design process.
    *   **Lower NRE (Non-Recurring Engineering) Costs:** Reduced design and manufacturing costs.
    *   **Flexibility:** Designs can be modified and re-programmed after fabrication (especially with FPGAs).
    *   **Reduced Design Complexity:**  Simplifies the design process by working with higher-level building blocks.

*   **Disadvantages:**
    *   **Lower Density compared to Full-Custom:**  Array-based designs generally have lower transistor density, leading to larger chip sizes for equivalent functionality.
    *   **Lower Performance:**  Performance is typically slower than full-custom designs due to the overhead of programmable interconnects and logic elements.
    *   **Higher Power Consumption:**  Programmable interconnects and redundant logic elements can contribute to increased power consumption.

### 2. Types of Array-Based Design

This section covers three major types of array-based design: Programmable Logic Arrays (PLAs), Programmable Array Logic (PALs), and Field-Programmable Gate Arrays (FPGAs).

#### 2.1 Programmable Logic Array (PLA)

*   **Architecture:**
    *   Consists of two programmable planes: an AND plane and an OR plane.
    *   The AND plane implements product terms (AND operations of inputs and their complements).
    *   The OR plane sums (ORs) selected product terms to form the final output.
    *   Typically used to implement combinational logic functions expressed in Sum-of-Products (SOP) form.

*   **Functionality:**
    *   The inputs and their complements are fed into the AND array.  Each row in the AND array corresponds to a product term.
    *   The outputs of the AND array (product terms) are then fed into the OR array.  Each row in the OR array corresponds to a final output.
    *   Programming involves selectively connecting/disconnecting the inputs and product terms in both the AND and OR arrays.

*   **Programming Techniques:**
    *   **Fusing:**  Metal or polysilicon links are selectively blown (fused) to disconnect unwanted connections in the AND and OR arrays. This is a one-time programmable (OTP) technology.

*   **Advantages:**
    *   **Flexibility:** Both the AND and OR planes are programmable, offering maximum flexibility in implementing logic functions.
    *   **Relatively Simple Architecture:**  Easy to understand and design with.

*   **Disadvantages:**
    *   **Lower Speed:** Signals must propagate through both the AND and OR planes, potentially slowing down performance.
    *   **Larger Area:** Requires more space compared to PALs for equivalent logic.

#### 2.2 Programmable Array Logic (PAL)

*   **Architecture:**
    *   Consists of a programmable AND plane followed by a *fixed* OR plane.
    *   The AND plane implements product terms, similar to PLAs.
    *   The OR plane is hardwired, with each output dedicated to a specific set of product terms.

*   **Functionality:**
    *   The AND plane is programmed to create the desired product terms.
    *   These product terms are then fed into the fixed OR gates to generate the outputs.

*   **Programming Techniques:**
    *   **Fusing:** Typically uses fusing to program the AND array, similar to PLAs. OTP technology.

*   **Advantages:**
    *   **Higher Speed:** Faster than PLAs because the OR plane is fixed, reducing signal propagation delay.
    *   **Smaller Area:** Generally smaller than PLAs for the same functionality due to the fixed OR plane.

*   **Disadvantages:**
    *   **Limited Flexibility:** The fixed OR plane limits the number of product terms that can be used for each output.  If a function requires more product terms than the fixed OR structure allows, it cannot be implemented in a PAL.
    *   **Less Efficient for Complex Functions:** Can be less efficient than PLAs for implementing functions with complex sharing of product terms.

#### 2.3 Field-Programmable Gate Array (FPGA)

*   **Architecture:**
    *   Consists of an array of configurable logic blocks (CLBs) interconnected by programmable routing resources.
    *   **CLBs (Configurable Logic Blocks):**  The fundamental building blocks of an FPGA, each typically containing:
        *   **Look-Up Tables (LUTs):**  Small memory units that can implement any logic function of a small number of inputs (e.g., 4-input or 6-input LUTs).
        *   **Flip-Flops (FFs):**  For storing state and implementing sequential logic.
        *   **Multiplexers (MUXs):**  For selecting between different inputs and routing signals.
    *   **Programmable Routing Resources:**  A network of wires and programmable switches that allow CLBs to be interconnected in a variety of ways. This includes:
        *   **Switch Boxes:** Allow connections between different routing channels.
        *   **Connection Boxes:**  Connect CLB input/output pins to routing channels.

*   **Functionality:**
    *   The LUTs within the CLBs are programmed to implement the desired logic functions.
    *   The programmable routing resources are configured to connect the CLBs together to create larger, more complex circuits.

*   **Programming Techniques:**
    *   **SRAM-Based Configuration:** The most common method. Configuration data is stored in on-chip SRAM cells. This allows for re-programmability.
    *   **Flash Memory-Based Configuration:** Uses non-volatile flash memory to store the configuration data. Offers higher density than SRAM-based FPGAs, but typically lower performance and less frequent re-programmability.
    *   **Antifuse:**  An antifuse is initially an open circuit, and when programmed, it becomes a permanent low-resistance connection. OTP technology, but offering high density and performance.

*   **Advantages:**
    *   **High Flexibility:**  FPGAs offer the highest degree of flexibility among array-based devices.  Can implement almost any digital logic function.
    *   **Re-programmability:**  FPGAs can be re-programmed multiple times, allowing for design changes and updates.
    *   **Rapid Prototyping:** Ideal for rapid prototyping and hardware acceleration.
    *   **Growing Performance:** Modern FPGAs are becoming increasingly powerful and can rival the performance of ASICs (Application-Specific Integrated Circuits) in some applications.

*   **Disadvantages:**
    *   **Lower Density than ASICs:**  FPGAs typically have lower transistor density than ASICs.
    *   **Lower Performance than ASICs:** Performance is generally slower than ASICs due to the overhead of the programmable interconnects and logic elements.
    *   **Higher Power Consumption than ASICs:**  Programmable interconnects and redundant logic elements can contribute to increased power consumption.
    *   **Higher Cost per Unit than ASICs (at high volumes):**  The per-unit cost of FPGAs can be higher than ASICs, especially at high volumes.

### 3. Comparison of PLAs, PALs, and FPGAs

| Feature          | PLA                      | PAL                       | FPGA                         |
|-------------------|--------------------------|---------------------------|------------------------------|
| AND Plane        | Programmable             | Programmable              | Configurable Logic Blocks (LUTs, etc.)  |
| OR Plane         | Programmable             | Fixed                     | Interconnect and Logic |
| Flexibility      | High                     | Medium                    | Very High                    |
| Speed            | Slow                     | Medium                    | Medium to Fast (depending on architecture) |
| Density          | Low                      | Medium                    | Medium                       |
| Re-programmability| No (Typically OTP)       | No (Typically OTP)        | Yes (Often SRAM-based)          |
| Complexity       | Low                      | Medium                    | High                         |
| Main Application | Simple Combinational Logic | Combinational Logic, Simple State Machines | Complex Digital Systems, Prototyping |

### 4. FPGA Building Blocks (LUTs, CLBs, Interconnects) in Detail

*   **Look-Up Tables (LUTs):**
    *   **Function:**  A memory array that stores the truth table for a logic function.  For an *n*-input LUT, there are 2<sup>*n*</sup> memory locations.
    *   **Operation:**  The *n* inputs to the LUT are used as address lines to select one of the memory locations. The value stored at that location is the output of the LUT.
    *   **Example:** A 4-input LUT can implement any logic function of four variables.

*   **Configurable Logic Blocks (CLBs):**
    *   **Composition:**  Typically contain one or more LUTs, flip-flops, and multiplexers.
    *   **Function:**  The LUTs implement the logic functions, the flip-flops store state (for sequential logic), and the multiplexers are used to route signals and select between different options.
    *   **Variations:** CLB architectures vary widely between different FPGA vendors. Some CLBs may include dedicated adders, multipliers, or other specialized logic.

*   **Interconnects:**
    *   **Function:**  Provide the programmable routing paths between CLBs and input/output (I/O) blocks.
    *   **Types:**  Horizontal and vertical routing channels, switch boxes, connection boxes.
    *   **Switch Boxes:**  Located at the intersection of horizontal and vertical routing channels, allowing signals to be routed in different directions.
    *   **Connection Boxes:**  Connect CLB input/output pins to the routing channels.
    *   **Impact on Performance:** The interconnect network is a critical factor in determining the performance of an FPGA. The delay through the interconnects can be significant, especially for long routing paths.

### 5. Programming Techniques

*   **Fusing:**  A one-time programmable (OTP) technology used in PLAs and PALs.  Metal or polysilicon links are selectively blown (fused) to disconnect unwanted connections.
    *   **Advantages:** Simple, reliable.
    *   **Disadvantages:**  Cannot be re-programmed.

*   **Antifuse:** Another one-time programmable technology. An antifuse is initially an open circuit and becomes a permanent conductive link when a programming voltage is applied.
    *   **Advantages:** Small size, high density, good performance.
    *   **Disadvantages:** Cannot be re-programmed.

*   **SRAM-Based Configuration:**  The most common programming technology for FPGAs. Configuration data is stored in on-chip SRAM cells.
    *   **Advantages:** Re-programmable, flexible.
    *   **Disadvantages:** Volatile (configuration data is lost when power is removed), requires more area than antifuse-based technologies.

*   **Flash Memory-Based Configuration:** Uses non-volatile flash memory to store the configuration data.
    *   **Advantages:** Non-volatile (configuration is retained when power is off), higher density than SRAM-based FPGAs.
    *   **Disadvantages:** Lower performance and less frequent re-programmability than SRAM-based FPGAs.

### 6. Practice Questions/Exercises

1.  **Explain the difference between a PLA and a PAL in terms of their programmable planes. Which one is faster, and why?**
    *   *Answer:* A PLA has both a programmable AND plane and a programmable OR plane, while a PAL has a programmable AND plane and a fixed OR plane. PALs are generally faster because the fixed OR plane reduces signal propagation delay.

2.  **Describe the main building blocks of an FPGA. What is the purpose of each block?**
    *   *Answer:* The main building blocks of an FPGA are Configurable Logic Blocks (CLBs) and programmable interconnects. CLBs contain Look-Up Tables (LUTs) for implementing logic functions, flip-flops for storing state, and multiplexers for routing signals. Programmable interconnects provide the routing paths between CLBs.

3.  **What are the advantages and disadvantages of using SRAM-based configuration in FPGAs?**
    *   *Answer:* Advantages: Re-programmable, flexible. Disadvantages: Volatile (configuration data is lost when power is removed), requires more area than antifuse-based technologies.

4.  **Why is the interconnect network so important to the performance of an FPGA?**
    *   *Answer:* The interconnect network provides the routing paths between CLBs. The delay through the interconnects can be significant, especially for long routing paths, which directly impacts the overall performance of the FPGA.

5.  **Given the boolean functions:  F1 = AB + C'D, F2 = A'B + CD'. Design a PLA that implements these functions. How would you program the AND and OR planes? (Hint: Draw a table representing the AND and OR planes and mark the connections appropriately).**
    *   *Answer:*  This is a design exercise that requires you to map the functions to product terms and then create the appropriate AND and OR plane connections.  The specific solution depends on the conventions used for representing the PLA (e.g., '1' for connection, '0' for no connection, or using 'X' for don't care).  The AND plane will need to generate the product terms AB, C'D, A'B, and CD'. The OR plane will need to connect AB and C'D to F1, and A'B and CD' to F2.

### 7. Important Points to Remember

*   Array-based design offers a trade-off between performance, density, and flexibility.
*   PLAs offer the most flexibility among the three types, but are typically the slowest and least dense.
*   PALs provide a good balance between speed and density, but have limited flexibility.
*   FPGAs offer the highest degree of flexibility and re-programmability, but have lower density and performance than ASICs.
*   LUTs, CLBs, and interconnects are the fundamental building blocks of FPGAs.
*   The choice of programming technology (fusing, antifuse, SRAM, Flash) depends on the application requirements. Consider the need for re-programmability and non-volatility.
