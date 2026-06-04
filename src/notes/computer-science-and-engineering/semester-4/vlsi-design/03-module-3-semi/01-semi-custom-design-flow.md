---
title: "Semi-custom Design flow"
subject: "VLSI DESIGN"
module: "Module 3: Semi"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b303"
status: "completed"
scrapedAt: "2026-05-20T16:17:22.585Z"
---
# VLSI Design: Module 3 - Semi-Custom Design Flow

## Introduction

This module delves into the semi-custom design flow, a popular methodology in VLSI design that balances design flexibility with reduced design time and cost compared to full-custom design. We'll explore the key stages, tools, and considerations involved in creating integrated circuits using this approach.

## Learning Outcomes

Upon completion of this topic, you will be able to:

*   **Understand the principles and advantages of semi-custom design.**
*   **Describe the different stages of the semi-custom design flow.**
*   **Explain the role of standard cells, gate arrays, and programmable logic devices (PLDs) in semi-custom design.**
*   **Discuss the considerations for physical design, including placement, routing, and clock distribution.**
*   **Identify the various CAD tools used at each stage of the semi-custom design flow.**
*   **Compare and contrast different semi-custom design styles.**

## 1.  Principles and Advantages of Semi-Custom Design

*   **Definition:** Semi-custom design uses pre-designed and pre-characterized logic gates (standard cells) or gate arrays provided by a foundry or vendor.  Designers connect these pre-existing components to implement their desired functionality.

*   **Advantages:**
    *   **Reduced Design Time:**  Pre-designed cells eliminate the need for transistor-level design for each logic gate.
    *   **Lower Non-Recurring Engineering (NRE) Costs:**  Reduced design effort translates to lower NRE costs, particularly for smaller volume production.
    *   **Lower Risk:**  Using pre-characterized cells reduces the risk of functional errors and timing problems.  These cells have been thoroughly tested and validated.
    *   **Faster Time-to-Market:** Faster design time accelerates the overall time-to-market for the product.
    *   **Good Performance:** Performance is generally good, although potentially not as optimized as full-custom designs.
    *   **Ease of Design:** CAD tools significantly automate the design process.

*   **Disadvantages:**
    *   **Lower Density:** Semi-custom designs often have lower density than full-custom designs as they use pre-determined layout arrangements.
    *   **Less Flexibility:** The design is constrained by the available standard cells or gate arrays.
    *   **Performance Limitation:** Performance might be lower than what could be achieved with full-custom designs.

## 2.  Stages of the Semi-Custom Design Flow

The semi-custom design flow can be broken down into the following stages:

1.  **Specification:**
    *   Defines the functionality, performance, power, size, and cost requirements of the circuit.
    *   Includes defining input/output (I/O) constraints, timing budgets, and testability requirements.

2.  **Hardware Description Language (HDL) Design and Verification:**
    *   The circuit's behavior is described using an HDL like Verilog or VHDL.
    *   Functional simulation verifies the correctness of the HDL code.  This involves creating testbenches and simulating the design to ensure it meets the specified requirements.

3.  **Logic Synthesis:**
    *   The HDL code is translated into a gate-level netlist using a synthesis tool.
    *   The tool uses a standard cell library to map the HDL description to a collection of interconnected logic gates.
    *   Synthesis considers timing constraints, power constraints, and area constraints provided by the designer.
    *   **Example:**  A synthesis tool might translate the Verilog statement `assign out = a & b;` into an AND gate from the standard cell library.

4.  **Placement:**
    *   The synthesized gates (standard cells) are placed on the chip layout.
    *   Placement algorithms aim to minimize wire length, congestion, and area.
    *   Considers timing constraints and power dissipation.
    *   Placement tools consider cell size, pin locations, and connectivity information.

5.  **Routing:**
    *   Connects the placed gates according to the netlist.
    *   Routing algorithms aim to minimize wire length, signal delay, and cross-talk.
    *   Routing tools take into account routing resources (routing tracks, vias), design rules, and timing constraints.

6.  **Timing Analysis:**
    *   Static timing analysis (STA) verifies that the circuit meets its timing specifications.
    *   STA tools analyze the timing paths in the circuit to ensure that signals arrive within the required time windows.
    *   Any timing violations are identified and corrected by modifying the placement and routing or by re-synthesizing the design.

7.  **Physical Verification:**
    *   Checks the layout for design rule violations (DRC), layout vs. schematic (LVS) errors, and antenna rule violations.
    *   DRC ensures that the layout meets the manufacturing requirements.
    *   LVS verifies that the layout matches the schematic.
    *   Antenna rule checks prevent damage to transistors during the manufacturing process.

8.  **Post-Layout Simulation:**
    *   Simulates the circuit with extracted parasitic capacitances and resistances from the layout.
    *   Provides a more accurate estimate of the circuit's performance.
    *   Ensures that the circuit still meets its specifications after layout.

9.  **Tapeout:**
    *   The final layout is submitted to the foundry for fabrication.

## 3. Standard Cells, Gate Arrays, and Programmable Logic Devices (PLDs)

*   **Standard Cells:**
    *   Pre-designed and pre-characterized logic gates (AND, OR, XOR, Flip-Flops, etc.) with a standardized height and varying widths.
    *   Stored in a standard cell library.
    *   Placed in rows with power and ground rails running along the rows.
    *   Offer good density and performance.
    *   The entire layout is customized for the design.

*   **Gate Arrays:**
    *   Pre-fabricated wafers with a regular array of transistors.
    *   Customization is done by metal layers to connect the transistors and form logic gates.
    *   Faster turnaround time compared to standard cell designs.
    *   Lower density and performance compared to standard cells.
    *   Less design flexibility.
    *   Types:  Masked Gate Arrays (MGAs), Field Programmable Gate Arrays (FPGAs) are evolutions of this architecture, but are generally considered a separate design style.

*   **Programmable Logic Devices (PLDs):**
    *   Configurable logic blocks and interconnects that can be programmed to implement a variety of functions.
    *   Field-Programmable Gate Arrays (FPGAs) are the most common type of PLD.
    *   Very fast turnaround time.
    *   Lower density and performance compared to standard cells and gate arrays.
    *   Suitable for prototyping and low-volume production.
    *   Examples:  Xilinx Virtex FPGAs, Intel (Altera) Stratix FPGAs.
    *   Programming is typically done using a Hardware Description Language (HDL) and dedicated software tools provided by the FPGA vendor. The HDL is synthesized and then mapped, placed, and routed onto the FPGA's configurable resources.

**Comparison Table:**

| Feature          | Standard Cell      | Gate Array         | PLD (FPGA)       |
|-----------------|--------------------|--------------------|-------------------|
| Density          | High               | Medium             | Low                |
| Performance      | High               | Medium             | Low                |
| Design Time      | Medium             | Fast               | Very Fast          |
| Cost (NRE)       | Medium             | Low                | Very Low           |
| Flexibility      | High               | Medium             | High (Reprogrammable)|
| Customization    | All Layers         | Metal Layers Only  | Configuration Memory|
| Volume Suitability| Medium to High      | Low to Medium      | Low                |

## 4. Physical Design Considerations: Placement, Routing, and Clock Distribution

*   **Placement:**
    *   **Goal:**  Minimize wire length, congestion, and chip area while meeting timing constraints.
    *   **Techniques:**
        *   **Simulated Annealing:**  A probabilistic optimization technique.
        *   **Force-Directed Placement:**  Considers forces acting on cells based on their connectivity.
        *   **Analytical Placement:**  Solves a mathematical optimization problem.
    *   **Considerations:**
        *   Cell size and shape
        *   Pin locations
        *   Connectivity information
        *   Power dissipation
        *   Timing constraints

*   **Routing:**
    *   **Goal:**  Connect all nets according to the netlist while minimizing wire length, signal delay, and cross-talk.
    *   **Techniques:**
        *   **Channel Routing:**  Routes nets within defined channels between rows of cells.
        *   **Global Routing:**  Determines the overall routing paths for each net.
        *   **Detailed Routing:**  Assigns specific routing tracks and vias to each net.
        *   **Area Routing:** Routers that aren't restricted to channels.
    *   **Considerations:**
        *   Routing resources (routing tracks, vias)
        *   Design rules
        *   Timing constraints
        *   Signal integrity (cross-talk)

*   **Clock Distribution:**
    *   **Goal:**  Distribute the clock signal to all sequential elements with minimal skew and jitter.
    *   **Techniques:**
        *   **Clock Tree Synthesis (CTS):**  Creates a balanced clock tree to minimize skew.
        *   **Clock Mesh:**  Provides a low-impedance path for the clock signal.
    *   **Considerations:**
        *   Clock frequency
        *   Clock jitter
        *   Clock skew
        *   Power consumption

## 5. CAD Tools in Semi-Custom Design Flow

*   **HDL Editors:**  Text editors for writing Verilog or VHDL code (e.g., VS Code with appropriate extensions).
*   **Simulators:**  For functional verification of HDL code (e.g., ModelSim, QuestaSim).
*   **Synthesis Tools:**  Translate HDL code into a gate-level netlist (e.g., Synopsys Design Compiler, Cadence Genus Synthesis Solution).
*   **Placement and Routing Tools:**  Place and route the gates on the chip layout (e.g., Cadence Innovus, Synopsys IC Compiler II).
*   **Static Timing Analysis (STA) Tools:**  Verify that the circuit meets its timing specifications (e.g., Synopsys PrimeTime, Cadence Tempus).
*   **Physical Verification Tools:**  Check the layout for design rule violations (DRC), layout vs. schematic (LVS) errors, and antenna rule violations (e.g., Mentor Graphics Calibre, Cadence PVS).
*   **Power Analysis Tools:**  Estimate and optimize power consumption (e.g., Synopsys Power Compiler, Cadence Joules).

## 6. Comparison of Different Semi-Custom Design Styles

We've already touched upon the different semi-custom styles. This section provides a brief review:

*   **Standard Cell:** Highest density, generally best performance, requires full mask set, longer turnaround time.
*   **Gate Array:** Medium density, medium performance, uses pre-fabricated wafers, faster turnaround time, requires customization only of the metal layers.
*   **FPGA (PLD):** Lowest density, lowest performance, very fast turnaround time, programmable logic blocks, suitable for prototyping and low-volume production.

## Practice Questions and Exercises

1.  **What are the key advantages and disadvantages of using a semi-custom design flow compared to a full-custom design flow?**

    *   **Answer:** Advantages: Reduced design time, lower NRE costs, faster time-to-market. Disadvantages: Lower density, less flexibility, potentially lower performance.

2.  **Describe the main stages of the semi-custom design flow.**

    *   **Answer:** Specification, HDL design and verification, logic synthesis, placement, routing, timing analysis, physical verification, post-layout simulation, tapeout.

3.  **Explain the difference between standard cell design, gate array design, and FPGA design.**

    *   **Answer:** See the comparison table in Section 3.

4.  **What is the purpose of static timing analysis (STA)?**

    *   **Answer:** To verify that the circuit meets its timing specifications by analyzing the timing paths in the circuit.

5.  **Why is clock distribution a critical aspect of physical design?**

    *   **Answer:** Because clock skew and jitter can significantly impact the performance and reliability of the circuit.  Proper clock distribution ensures all sequential elements receive the clock signal at the correct time.

6.  **List three commonly used CAD tools in the semi-custom design flow and their functions.**

    *   **Answer:**
        *   **Synthesis Tool (e.g., Synopsys Design Compiler):** Translates HDL code into a gate-level netlist.
        *   **Placement and Routing Tool (e.g., Cadence Innovus):** Places and routes the gates on the chip layout.
        *   **Static Timing Analysis Tool (e.g., Synopsys PrimeTime):** Verifies that the circuit meets its timing specifications.

7.  **Consider a design that requires frequent modifications and has a low production volume. Which semi-custom design style would be most appropriate? Why?**

    *   **Answer:** FPGA (Field-Programmable Gate Array) would be the most appropriate choice.  FPGAs offer the fastest turnaround time and are reprogrammable, making them ideal for designs that require frequent modifications.  They are also a cost-effective solution for low-volume production.

## Important Points to Remember

*   Semi-custom design strikes a balance between design effort and performance.
*   Understanding the different stages of the design flow is crucial for successful implementation.
*   CAD tools play a vital role in automating and optimizing the design process.
*   Physical design considerations, especially placement, routing, and clock distribution, are essential for achieving desired performance and reliability.
*   The choice of semi-custom design style (standard cell, gate array, FPGA) depends on the specific requirements of the application.
