---
title: "Types of Design flow - Custom design"
subject: "VLSI DESIGN"
module: "Module 2: Introduction to Integrated Circuits (ICs):"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b2fa"
status: "completed"
scrapedAt: "2026-05-20T16:17:16.744Z"
---
## VLSI Design - Module 2: Introduction to Integrated Circuits (ICs) - Custom Design Flow

**Module Goal:** Understand the different IC design flows, with a focus on the custom design approach.

**Learning Outcomes:**

*   Define custom design and its characteristics.
*   Understand the steps involved in the custom design flow.
*   Identify the advantages and disadvantages of custom design.
*   Compare custom design with other design flows (e.g., standard cell-based design).
*   Explain the tools and techniques used in custom design.
*   Understand the applications where custom design is preferred.

---

### 1. Defining Custom Design

*   **Definition:** Custom design in VLSI refers to a design approach where the designer manually creates and optimizes each individual transistor, gate, and functional block layout. It offers maximum flexibility and control over performance characteristics like speed, power consumption, and area.

*   **Key Characteristics:**

    *   **Manual Layout:** Transistors, interconnects, and other components are physically placed and routed by the designer.
    *   **Optimization for Performance:**  Highly optimized for specific performance goals (e.g., achieving maximum speed, minimizing power consumption, or maximizing density).
    *   **High Design Effort:** Requires significant time, expertise, and resources.
    *   **Lower Design Reuse:** Less suitable for designs that require significant reuse of pre-designed blocks.
    *   **Full Control:** Designers have full control over every aspect of the circuit's physical implementation.
    *   **High Density:** Can achieve the highest possible density for performance-critical blocks.

### 2. Custom Design Flow Steps

The custom design flow typically involves the following steps:

1.  **Specification:**
    *   Define the requirements of the circuit or system.  This includes functional specifications, performance targets (speed, power, area), and technology constraints.
    *   Example: A high-speed comparator needs to have a specified delay time, input offset voltage, and power consumption limits.

2.  **Architecture Design:**
    *   Determine the overall architecture of the circuit. Divide the system into functional blocks and define the interconnections between them.
    *   Example:  For an adder, choose between a ripple carry adder, a carry-lookahead adder, or a carry-select adder based on the speed requirements.

3.  **Circuit Design (Schematic Design):**
    *   Design the circuit schematic using transistors, resistors, and other components.
    *   Choose appropriate transistor sizes and biasing conditions to meet the performance targets.
    *   Simulate the circuit extensively to verify its functionality and performance.
    *   Tools Used: Circuit simulators like SPICE (e.g., Cadence Spectre, Synopsys HSPICE).
    *   Example: Designing a CMOS inverter circuit, selecting NMOS and PMOS transistor sizes to achieve desired switching thresholds and drive strength.

4.  **Layout Design:**
    *   Convert the schematic into a physical layout. This involves placing and routing transistors, interconnects, and other components within the silicon area.
    *   Consider design rules (DRC – Design Rule Checking) to ensure manufacturability.
    *   Aim to minimize area, parasitic capacitances, and interconnect delays.
    *   Tools Used: Layout editors like Cadence Virtuoso, Mentor Graphics Calibre.
    *   Example: Laying out the transistors and interconnects for a CMOS inverter, minimizing the diffusion capacitance and resistance.

5.  **Physical Verification:**
    *   Verify the layout for design rule violations (DRC), layout vs. schematic (LVS), and parasitic extraction.
    *   **DRC (Design Rule Check):**  Ensures that the layout adheres to the manufacturing process rules.
    *   **LVS (Layout vs. Schematic):**  Verifies that the layout is electrically equivalent to the original schematic.
    *   **Parasitic Extraction:** Extracts parasitic capacitances and resistances from the layout to accurately simulate the circuit's performance.
    *   Tools Used:  Cadence Assura, Mentor Graphics Calibre.

6.  **Post-Layout Simulation:**
    *   Simulate the circuit with the extracted parasitic capacitances and resistances to verify its performance after layout.
    *   Identify and correct any performance issues that arise due to layout effects.
    *   Example: Simulating a high-speed amplifier with extracted parasitics and adjusting transistor sizes or layout to meet the speed requirements.

7.  **Tape-Out:**
    *   Prepare the layout data for fabrication. This involves generating a GDSII file, which is a standard format for describing the layout.
    *   Submit the GDSII file to a foundry for manufacturing.

### 3. Advantages and Disadvantages of Custom Design

*   **Advantages:**

    *   **Optimal Performance:**  Achieves the best possible performance in terms of speed, power consumption, and area.
    *   **High Density:** Allows for the most compact layout, which is crucial for high-performance circuits.
    *   **Flexibility:** Provides maximum flexibility in designing circuits with unique requirements.
    *   **Analog and Mixed-Signal Designs:** Essential for designing analog circuits and mixed-signal systems where precise control over component characteristics is required.

*   **Disadvantages:**

    *   **High Design Effort:** Requires significant time and expertise, leading to longer design cycles.
    *   **High Cost:**  The extensive manual effort and expertise required can result in high design costs.
    *   **Low Design Reuse:**  Custom layouts are typically not reusable in other designs, which reduces productivity.
    *   **Susceptible to Errors:** Manual layout is prone to errors, which can be difficult to detect and correct.
    *   **Difficult to Scale:**  Custom designs can be difficult to scale to larger, more complex systems.

### 4. Comparison with Other Design Flows (Standard Cell-Based Design)

| Feature           | Custom Design                                  | Standard Cell-Based Design                         |
|-------------------|------------------------------------------------|---------------------------------------------------|
| Design Effort     | High                                            | Low                                              |
| Performance       | Optimal                                         | Suboptimal (but good enough for many applications) |
| Area              | Smallest                                        | Larger                                             |
| Flexibility       | Highest                                         | Limited to available standard cells               |
| Design Reuse       | Low                                             | High                                              |
| Time-to-Market    | Long                                            | Short                                             |
| Expertise Required | High                                            | Moderate                                          |

**Standard Cell-Based Design:**

*   Uses pre-designed and characterized standard cells (e.g., AND gates, OR gates, flip-flops) from a library.
*   The design process involves selecting and placing these cells and connecting them using automated routing tools.
*   Faster design cycle, but sacrifices performance and area optimization.
*   Well-suited for digital designs where performance requirements are not extremely stringent.

### 5. Tools and Techniques Used in Custom Design

*   **Schematic Capture Tools:** Used to create and edit circuit schematics (e.g., Cadence Virtuoso Schematic Editor).
*   **Layout Editors:** Used to create and edit the physical layout of the circuit (e.g., Cadence Virtuoso Layout Suite).
*   **Circuit Simulators:** Used to simulate the circuit's behavior and verify its performance (e.g., Cadence Spectre, Synopsys HSPICE).
*   **Physical Verification Tools:** Used to check the layout for design rule violations, layout vs. schematic errors, and parasitic extraction (e.g., Cadence Assura, Mentor Graphics Calibre).
*   **DRC (Design Rule Checking):** Automatic verification that the layout satisfies the manufacturing rules.
*   **LVS (Layout vs. Schematic):** Verification that the layout matches the intended schematic.
*   **Parasitic Extraction:** Extraction of parasitic capacitances and resistances from the layout for more accurate simulation.
*   **Floorplanning:** Initial planning of the placement of major functional blocks on the chip.
*   **Compaction:** Minimizing the area of the layout by optimizing the placement of components.
*   **Manual Routing:**  Careful routing of interconnects to minimize resistance and capacitance, especially for critical signal paths.

### 6. Applications Where Custom Design is Preferred

*   **Analog and Mixed-Signal Circuits:**
    *   Operational amplifiers (op-amps), comparators, data converters (ADCs/DACs), phase-locked loops (PLLs).
*   **High-Performance Digital Circuits:**
    *   Microprocessor cores, memory controllers, high-speed interfaces.
*   **Low-Power Circuits:**
    *   Circuits for battery-powered devices, energy harvesting systems.
*   **High-Frequency Circuits:**
    *   RF circuits, millimeter-wave circuits.
*   **Memory Design:**
    *   SRAM, DRAM, Flash memory cells, sense amplifiers.
*   **IP blocks for specific applications where performance is paramount.**

### Important Points to Remember:

*   Custom design offers the highest level of control but demands significant time, effort, and expertise.
*   Physical verification is critical in custom design to ensure manufacturability and correct functionality.
*   Post-layout simulation is essential to account for the impact of parasitic effects on performance.
*   Careful layout techniques can significantly impact performance characteristics like speed, power consumption, and area.
*   Custom design is often used in conjunction with other design flows, such as standard cell-based design, to create complex systems. (Example: A large chip might use standard cells for the bulk of the logic, and custom design for critical high-speed datapaths).

---

### Practice Questions/Exercises:

1.  **What are the primary advantages of custom design compared to standard cell-based design?**
    *   **Answer:** Optimal performance (speed, power, area), high density, flexibility.

2.  **Explain the purpose of DRC and LVS in the custom design flow.**
    *   **Answer:** DRC ensures the layout meets manufacturing rules, while LVS verifies that the layout matches the schematic.

3.  **Why is post-layout simulation essential in custom design?**
    *   **Answer:** To account for the impact of parasitic capacitances and resistances on circuit performance, which are introduced during the layout process.

4.  **In which application areas is custom design commonly used? Provide 3 examples.**
    *   **Answer:** Analog circuits (e.g., op-amps), high-performance digital circuits (e.g., microprocessor cores), and low-power circuits.

5.  **Describe the role of a layout editor in the custom design flow.**
     * **Answer:** The layout editor allows the designer to create and manipulate the physical layout of the circuit, including placing transistors, creating interconnects, and defining shapes for the different layers of the integrated circuit.

6. **Exercise:** Imagine you are designing a high-speed comparator.  Outline the key considerations during each stage of the custom design flow for this comparator. (specification, architecture, circuit design, layout).
    * **Answer:**
        *   **Specification:** Define target delay time, input offset voltage, power consumption, and supply voltage.
        *   **Architecture:** Choose a suitable comparator architecture (e.g., regenerative comparator, dynamic comparator) based on speed and power requirements.
        *   **Circuit Design:** Design the schematic using transistors, choosing transistor sizes to optimize speed and minimize offset voltage.  Simulate extensively.
        *   **Layout:** Minimize parasitic capacitances at the input and output nodes.  Match transistor layouts to reduce offset.  Route critical signals with short, wide interconnects to minimize resistance.

---
