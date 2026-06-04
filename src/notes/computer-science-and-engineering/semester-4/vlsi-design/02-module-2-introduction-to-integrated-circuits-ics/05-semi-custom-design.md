---
title: "Semi-custom design"
subject: "VLSI DESIGN"
module: "Module 2: Introduction to Integrated Circuits (ICs):"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b2fb"
status: "completed"
scrapedAt: "2026-05-20T16:17:17.459Z"
---
## VLSI Design - Module 2: Introduction to Integrated Circuits (ICs) - Semi-Custom Design

**Learning Outcomes:**

*   Understand the concept of semi-custom design and its place in IC design methodologies.
*   Describe the different types of semi-custom design approaches (Standard Cell, Gate Array).
*   Compare and contrast the advantages and disadvantages of semi-custom design.
*   Explain the design flow for semi-custom design methodologies.
*   Identify the key characteristics of standard cells and gate arrays.
*   Recognize the trade-offs involved in choosing between different semi-custom approaches.

---

**1. Introduction to Semi-Custom Design**

*   **Definition:** Semi-custom design is a methodology in VLSI design where pre-designed and pre-characterized circuit elements (cells or gates) are used to implement a specific digital circuit.  The designer connects these pre-designed elements using automated placement and routing tools, rather than designing transistors and circuits from scratch as in full-custom design.

*   **Place in IC Design Methodologies:**  Semi-custom design falls between full-custom design and programmable logic devices (PLDs) like FPGAs.
    *   **Full-Custom:**  Highest performance, highest density, but requires the most design effort and time.  Used for high-volume or performance-critical applications.
    *   **Semi-Custom:** A compromise between performance/density and design effort.  Suitable for medium to high volume applications. Offers better performance and density than FPGAs, but requires less design expertise than full-custom.
    *   **Programmable Logic Devices (PLDs/FPGAs):** Fastest time-to-market, highly flexible, but lowest performance and density. Suitable for prototyping and low-volume applications.

*   **Key Idea:** Leveraging pre-designed and pre-characterized building blocks to reduce design complexity and time.

**2. Types of Semi-Custom Design Approaches**

*   **2.1 Standard Cell Design**
    *   **Description:**  Standard cells are pre-designed and pre-characterized logic gates (e.g., AND, OR, NAND, NOR, flip-flops, adders) of varying complexity and functionality.  They are designed with a *fixed height* (allowing them to be placed in rows) but *variable width*. The cells are stored in a library.
    *   **Library:** A comprehensive collection of standard cells, each with detailed information about its timing, power consumption, area, and layout.
    *   **Design Flow:**
        1.  **Logic Synthesis:**  Translating the functional specification (e.g., Verilog or VHDL code) into a gate-level netlist using standard cells.
        2.  **Placement:**  Determining the optimal location of each standard cell on the chip.
        3.  **Routing:**  Connecting the standard cells according to the netlist using metal interconnect layers.  Automated routing tools are crucial.
        4.  **Verification:**  Ensuring the design meets all specifications (timing, power, functionality) after placement and routing.
    *   **Advantages:**
        *   High density compared to gate arrays.
        *   Good performance due to optimized cell layouts.
        *   Relatively short design cycles compared to full-custom.
        *   High degree of flexibility – can implement complex logic.
    *   **Disadvantages:**
        *   Requires a dedicated mask set for fabrication (longer turnaround time and higher NRE (Non-Recurring Engineering) costs compared to Gate Arrays).
        *   Complexity of the design flow requires specialized EDA tools.

*   **2.2 Gate Array Design (Masked Gate Arrays - MGA)**
    *   **Description:** A pre-fabricated wafer containing a regular array of transistors (gates).  The connections between these transistors are customized using metal layers during the *metallization* stages of fabrication to implement the desired logic function. All transistors are already placed; only the interconnects are specific to the design.
    *   **Two-Layer Metal Customization:** Most gate arrays use two or more metal layers to route the connections between the gates.
    *   **Design Flow:**
        1.  **Mapping:** Mapping the desired logic function onto the available gates in the array.
        2.  **Placement (Implied):** The placement of gates is fixed by the pre-fabricated array.
        3.  **Routing:** Routing the connections between the gates using the metal layers. Automated routing is essential.
        4.  **Verification:** Ensuring the design meets all specifications.
    *   **Advantages:**
        *   Faster turnaround time compared to standard cell and full-custom (only metallization layers are customized).
        *   Lower NRE costs compared to standard cell (fewer masks required).
        *   Easier design flow compared to standard cell (placement is predetermined).
    *   **Disadvantages:**
        *   Lower density compared to standard cell (transistors are pre-placed, leading to wasted area).
        *   Lower performance compared to standard cell (routing constraints can lead to longer interconnects).
        *   Less flexible than standard cell – limited to the pre-defined gate structure.
        *   Gate arrays are becoming less common due to the rise of FPGAs and advancements in standard cell methodologies.

**3. Comparison of Standard Cell and Gate Array Design**

| Feature             | Standard Cell                                    | Gate Array                                       |
| -------------------- | ------------------------------------------------ | ------------------------------------------------- |
| Density              | Higher                                           | Lower                                            |
| Performance          | Higher                                           | Lower                                            |
| Flexibility          | More Flexible                                      | Less Flexible                                       |
| Turnaround Time      | Longer                                           | Shorter                                           |
| NRE Costs            | Higher                                           | Lower                                            |
| Mask Customization  | All masks                                         | Metal layers only                                 |
| Design Flow          | More Complex                                     | Simpler                                          |
| Common Application   | High-volume, medium-performance applications  | Early prototyping, low-volume applications        |

**4. Design Flow for Semi-Custom Design (General Overview)**

1.  **Specification:** Define the functionality, performance, power consumption, and area requirements of the circuit.
2.  **Logic Design:** Create a behavioral description of the circuit using a hardware description language (HDL) like Verilog or VHDL.
3.  **Logic Synthesis:**  Translate the HDL code into a gate-level netlist, choosing the appropriate standard cells or mapping to the gate array structure.
4.  **Floorplanning (Standard Cell):** Define the overall chip layout, including the placement of I/O pads, memory blocks, and other major circuit blocks.  Less relevant for gate arrays.
5.  **Placement:** Determine the physical location of each standard cell (or the implied location within a Gate Array).
6.  **Routing:** Connect the standard cells/gates according to the netlist using metal interconnects.
7.  **Extraction:** Extract the parasitic capacitances and resistances of the interconnects.
8.  **Timing Analysis:** Verify that the circuit meets its timing specifications, taking into account the parasitic effects.
9.  **Simulation:** Simulate the circuit to verify its functionality and performance.
10. **Physical Verification:**  Check the layout for design rule violations and electrical connectivity errors.
11. **Tape-Out:**  Generate the manufacturing data (GDSII file) for fabrication.
12. **Fabrication:**  Manufacture the integrated circuit.
13. **Testing:** Test the fabricated chips to verify their functionality and performance.

**5. Key Characteristics of Standard Cells and Gate Arrays**

*   **Standard Cells:**
    *   Fixed Height, Variable Width.
    *   Optimized Layout for Performance and Density.
    *   Comprehensive Characterization (timing, power).
    *   Stored in a Library.
    *   Designed for Automated Placement and Routing.
*   **Gate Arrays:**
    *   Pre-fabricated Array of Transistors.
    *   Fixed Placement of Transistors.
    *   Customized Through Metal Interconnect Layers.
    *   Lower Density Compared to Standard Cells.

**6. Trade-offs in Choosing Between Semi-Custom Approaches**

*   **Density vs. Turnaround Time:** Standard cell offers higher density but requires a longer turnaround time.  Gate array offers faster turnaround but at the expense of lower density.
*   **Performance vs. Cost:** Standard cell design generally achieves better performance, but also incurs higher NRE costs.
*   **Flexibility vs. Ease of Design:** Standard cell provides more flexibility in implementing complex logic, while gate array is simpler to design due to its predefined structure.

**7. Important Points to Remember**

*   Semi-custom design is a compromise between full-custom design and programmable logic devices (FPGAs).
*   Standard cell and gate array are the two main types of semi-custom design.
*   Standard cell offers higher density and performance, but requires a longer turnaround time and higher NRE costs.
*   Gate array offers faster turnaround time and lower NRE costs, but at the expense of lower density and performance.
*   Automated placement and routing tools are essential for semi-custom design.
*   The choice between standard cell and gate array depends on the specific application requirements.

**8. Practice Questions/Exercises**

1.  **Question:** What are the main advantages of semi-custom design compared to full-custom design?
    *   **Answer:** Reduced design time and complexity, lower development costs, and leveraging pre-designed and characterized cells.

2.  **Question:**  Explain the difference between standard cell and gate array design.
    *   **Answer:** Standard cell uses pre-designed logic gates with fixed height and variable width that are placed and routed according to the design specifications. Gate array uses a pre-fabricated array of transistors, which are connected through metal layers to implement the desired logic.

3.  **Question:** Which semi-custom design approach is more suitable for high-volume production: standard cell or gate array?  Why?
    *   **Answer:** Standard cell is generally more suitable for high-volume production because it offers higher density, leading to smaller die size and lower unit cost, even though the initial NRE cost is higher.

4.  **Question:** List three advantages of gate array design.
    *   **Answer:** Faster turnaround time, lower NRE costs, and simpler design flow.

5.  **Question:**  What is a standard cell library? What kind of information does it typically contain?
    *   **Answer:** A standard cell library is a collection of pre-designed and characterized logic gates. It contains information about the cell's layout, timing characteristics, power consumption, and functional description.

6.  **Question:** Why are automated placement and routing tools so important in semi-custom design?
    *   **Answer:** They are essential for handling the large number of components and interconnections in a complex digital circuit, optimizing placement for performance and minimizing wiring congestion during routing.  Manual placement and routing would be impractical for designs of any significant size.
