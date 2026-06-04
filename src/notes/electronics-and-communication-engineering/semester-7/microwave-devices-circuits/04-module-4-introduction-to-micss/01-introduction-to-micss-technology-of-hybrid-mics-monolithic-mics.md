---
title: "Introduction to MICSs:-Technology of hybrid MICs, monolithic MICs."
subject: "MICROWAVE DEVICES & CIRCUITS"
module: "Module 4: Introduction to MICSs:"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff4a2"
status: "completed"
scrapedAt: "2026-05-23T18:07:58.687Z"
---
# Microwave Integrated Circuits (MICs) - Module 4: Introduction to MICs

## 1. Introduction to MICs

Microwave Integrated Circuits (MICs) are miniaturized electronic circuits that operate at microwave frequencies. They are designed to integrate various microwave components, such as resistors, capacitors, inductors, transistors, diodes, and transmission lines, onto a common substrate. This integration leads to significant advantages over discrete component assemblies, including smaller size, lighter weight, improved performance (due to reduced parasitic effects), increased reliability, and reduced cost for mass production.

MICs are broadly categorized into two main types based on their construction technology:

*   **Hybrid MICs (HMICs)**
*   **Monolithic MICs (MMICs)**

**Course Outcome Alignment:** This section lays the foundation for understanding the evolution and fundamental concepts of microwave circuits, directly supporting **CO1** (understanding solid-state devices which are integrated into MICs) and **CO4** (illustrating basic concepts of Monolithic Integrated Circuits).

---

## 2. Technology of Hybrid MICs (HMICs)

Hybrid MICs are constructed by depositing or attaching discrete passive and active components onto a common substrate. The passive circuit elements (transmission lines, lumped elements like resistors, capacitors, and inductors) are typically fabricated using thin-film or thick-film deposition techniques. Active components (transistors, diodes) are then attached to this substrate using chip-and-wire bonding or solder attachment.

### 2.1. Key Concepts and Definitions

*   **Substrate:** The insulating material on which the circuit elements are fabricated. Common substrates for HMICs include:
    *   **Alumina (Al₂O₃):** Widely used due to its good dielectric properties, high thermal conductivity, mechanical strength, and reasonable cost. Common dielectric constants range from 9 to 10.
    *   **Fused Quartz:** Lower dielectric constant (around 3.8) and loss tangent, making it suitable for high-frequency applications where lower substrate interaction is desired.
    *   **Sapphire:** Excellent dielectric properties (low loss, low dielectric constant ~11.6), but expensive.
    *   **Ferrite:** Used for non-reciprocal devices like isolators and circulators.
*   **Transmission Lines:** The interconnections between components and the primary means of signal propagation. Common types used in HMICs are:
    *   **Microstrip:** A planar transmission line consisting of a conductive strip deposited on the surface of a dielectric substrate, with a ground plane on the opposite side. It is widely used due to its ease of fabrication and integration.
    *   **Stripline:** A planar transmission line where the signal conductor is embedded within the dielectric substrate, sandwiched between two ground planes. Offers better shielding and lower radiation than microstrip but is more complex to fabricate.
    *   **Coplanar Waveguide (CPW):** Consists of a central conductor strip with ground planes on the same surface, separated by a dielectric. Offers advantages in grounding and mounting active devices.
*   **Passive Component Fabrication:**
    *   **Thin-film:** Deposition of very thin layers (angstroms to micrometers) of conductive, resistive, or dielectric materials using techniques like sputtering, evaporation, or chemical vapor deposition (CVD). This allows for precise control of resistance and capacitance values.
    *   **Thick-film:** Deposition of pastes or inks containing conductive, resistive, or dielectric materials. The thickness is in the range of micrometers. Common for less critical components or where lower cost is a priority.
*   **Active Component Attachment:**
    *   **Chip Attachment:** Bare semiconductor chips (e.g., transistors, diodes) are attached to the substrate using conductive epoxy or solder.
    *   **Wire Bonding:** Fine wires (gold or aluminum) are used to connect the pads on the active device to the conductive traces on the substrate. This is a crucial step requiring precision.

### 2.2. Advantages of Hybrid MICs

*   **Flexibility:** Allows for easy integration of a wide variety of discrete active and passive components from different manufacturers.
*   **Ease of Design and Prototyping:** Relatively simpler to design and prototype compared to MMICs.
*   **Power Handling:** Can often handle higher power levels due to the ability to use larger components and better thermal management options.
*   **Performance:** Generally good performance at microwave frequencies due to the use of low-loss substrates and precisely fabricated transmission lines.

### 2.3. Disadvantages of Hybrid MICs

*   **Size and Weight:** Larger and heavier than MMICs due to the presence of discrete components and interconnections.
*   **Reliability:** Wire bonds and solder joints can be potential failure points, affecting long-term reliability.
*   **Cost in High Volume:** Costly for very high-volume production compared to MMICs, as individual component assembly and testing are required.
*   **Parasitic Effects:** While reduced compared to discrete circuits, parasitic inductances and capacitances associated with bonding and chip attachment can still limit performance at very high frequencies.

### 2.4. Examples of Hybrid MICs

*   **Power Amplifiers (PAs):** Combining individual transistor chips with matching networks and filtering on a substrate.
*   **Low-Noise Amplifiers (LNAs):** Integrating low-noise transistors with matching circuits.
*   **Mixers:** Combining diodes or transistors with passive circuitry.
*   **Filters:** Fabricated using lumped elements or distributed elements on the substrate.

**Textbook/Reference Integration:**
*   **Pozar (Chapter 7: Microwave Transmission Lines):** Discusses various types of transmission lines like microstrip and stripline, crucial for understanding HMIC interconnects.
*   **Collin (Chapter 7: Microwave Transmission Lines):** Provides detailed analysis of planar transmission lines.
*   **Liao (Chapter 11: Hybrid Integrated Circuits):** Covers the fundamentals of hybrid MICs, including substrate materials, passive element fabrication, and component mounting.
*   **Konishi (Chapter 3: Hybrid MIC Circuits):** Offers insights into the design and fabrication of hybrid MICs.
*   **Bhat & Koul (Stripline-like Transmission Lines for MIC):** Dedicated to the detailed analysis of transmission lines used in MICs, with a focus on stripline.

---

## 3. Technology of Monolithic MICs (MMICs)

Monolithic Microwave Integrated Circuits (MMICs) are circuits where all components, including active devices (transistors, diodes) and passive elements (transmission lines, capacitors, inductors, resistors), are fabricated on a single semiconductor substrate using semiconductor manufacturing techniques similar to those used for digital ICs.

### 3.1. Key Concepts and Definitions

*   **Substrate:** The semiconductor material upon which the entire circuit is built. Common substrates for MMICs include:
    *   **Gallium Arsenide (GaAs):** Dominant substrate due to its high electron mobility, allowing for high-speed and low-noise performance.
    *   **Indium Phosphide (InP):** Offers even higher electron mobility than GaAs, suitable for very high-frequency applications (sub-mm wave) and high-performance optoelectronic devices.
    *   **Silicon (Si):** Used for lower-cost MMICs, especially in conjunction with advanced CMOS or BiCMOS processes. Performance is generally lower than GaAs or InP at microwave frequencies, but improving with SiGe technology.
    *   **Gallium Nitride (GaN):** Emerging substrate offering high power density and high breakdown voltage, making it ideal for high-power amplifiers.
*   **Semiconductor Fabrication Techniques:**
    *   **Epitaxial Growth:** Layers of semiconductor material are grown on the substrate with controlled doping and composition.
    *   **Photolithography:** Patterning of circuit features using light and photoresist.
    *   **Etching:** Removal of unwanted material to define circuit elements.
    *   **Deposition:** Thin-film deposition of metals, dielectrics, and semiconductors.
    *   **Ion Implantation:** Introducing dopants into the semiconductor to create active regions.
*   **MMIC Components:**
    *   **Transistors:** Field-Effect Transistors (FETs) like MESFETs, HEMTs (High Electron Mobility Transistors), and HBTs (Heterojunction Bipolar Transistors) are commonly used due to their high-frequency capabilities.
    *   **Diodes:** Schottky diodes, varactor diodes are integrated for various functions.
    *   **Passive Elements:** Thin-film resistors, capacitors (MIM - Metal-Insulator-Metal), and inductors (spiral inductors) are fabricated directly on the substrate. Transmission lines are also patterned on the substrate.
*   **Integration Level:** All active and passive components are on a single chip.
*   **Interconnects:** Metal traces on the chip form the interconnections. Often, air bridges are used to cross over other conductors and minimize parasitic effects at higher frequencies.

### 3.2. Advantages of Monolithic MICs (MMICs)

*   **Miniaturization:** Extremely small size and light weight due to complete integration.
*   **High Reliability:** Absence of discrete components, wire bonds, and solder joints leads to significantly higher reliability.
*   **Performance:** Excellent high-frequency performance due to minimal parasitic effects and precise fabrication.
*   **Cost-Effectiveness in High Volume:** Once the high initial development cost is covered, MMICs can be produced at a lower cost per unit in large volumes due to batch processing.
*   **Reproducibility:** Highly consistent performance due to precise manufacturing processes.

### 3.3. Disadvantages of Monolithic MICs (MMICs)

*   **High Development Cost:** Significant initial investment in mask design, process development, and fabrication.
*   **Limited Flexibility:** Difficult to modify or upgrade once fabricated. Components are not interchangeable.
*   **Power Handling Limitations:** Typically have lower power handling capability compared to HMICs due to substrate limitations and the need for smaller device geometries.
*   **Substrate Losses:** Semiconductor substrates can have higher dielectric losses than specialized ceramics used in HMICs, especially at very high frequencies.
*   **Difficult to Test:** Testing and characterization require specialized wafer-level probing equipment.

### 3.4. Examples of Monolithic MICs (MMICs)

*   **Integrated Amplifiers:** LNAs, PAs, and medium-power amplifiers on a single chip.
*   **Front-End Modules (FEMs):** Integrating LNAs, PAs, switches, and filters for wireless communication systems.
*   **Phase Shifters and Attenuators:** Used in phased array radar and electronic warfare systems.
*   **Mixer-Front-Ends:** Integrating mixers with local oscillator (LO) drivers and IF amplifiers.
*   **Radar Transceiver Front Ends:** Complete radar modules on a single chip.

**Course Outcome Alignment:** This section directly addresses **CO4** by detailing the concepts and technologies behind Monolithic Integrated Circuits. It also implicitly supports **CO1** as MMICs are built around integrated solid-state devices.

**Textbook/Reference Integration:**
*   **Pozar (Chapter 7: Microwave Transmission Lines):** While focusing on transmission lines, the principles are applicable to MMIC interconnects.
*   **Liao (Chapter 12: Monolithic Microwave Integrated Circuits):** Provides a comprehensive overview of MMIC technology, materials, device fabrication, and circuit design.
*   **Konishi (Chapter 4: Monolithic MIC Circuits):** Discusses the technology, design, and application of MMICs.
*   **Maloratsky (Passive RF and Microwave Integrated Circuits):** While focused on passive circuits, it offers insights into components that are integrated into both HMICs and MMICs.

---

## 4. Comparison: Hybrid MICs vs. Monolithic MICs

| Feature             | Hybrid MICs (HMICs)                               | Monolithic MICs (MMICs)                                    |
| :------------------ | :------------------------------------------------ | :--------------------------------------------------------- |
| **Fabrication**     | Discrete components on common substrate           | All components fabricated on a single semiconductor substrate |
| **Components**      | Chip-and-wire, surface-mount devices              | Integrated semiconductor devices                           |
| **Substrate**       | Ceramic (Alumina), Quartz, Ferrite                | Semiconductor (GaAs, InP, Si, GaN)                         |
| **Interconnects**   | Microstrip, Stripline, Wire bonds, solder joints  | Microstrip, CPW, Air bridges, metallization layers         |
| **Size & Weight**   | Larger, heavier                                   | Very small, light                                          |
| **Reliability**     | Moderate (wire bonds, solder joints can fail)     | High (no discrete connections)                             |
| **Performance**     | Good, but limited by parasitics of connections    | Excellent, minimal parasitics                              |
| **Development Cost**| Lower                                             | High                                                       |
| **Production Cost** | Higher in high volume                             | Lower in high volume                                       |
| **Flexibility**     | High (component interchangeability)               | Low (difficult to modify)                                  |
| **Power Handling**  | Generally higher                                  | Generally lower (but GaN is changing this)                 |
| **Applications**    | Power amplifiers, specialized filters, moderate vol. | High-speed applications, defense, satellite communications, high-volume consumer electronics |

**Course Outcome Alignment:** This comparison directly supports **CO4** by reinforcing the understanding of the differences between the two major MIC technologies.

---

## 5. Practice Questions & Exercises

**Question 1:**
Describe the key differences in fabrication technology between Hybrid MICs and Monolithic MICs.

**Answer:**
Hybrid MICs are fabricated by depositing passive components (transmission lines, resistors, capacitors) onto a substrate and then attaching discrete active devices (transistors, diodes) using techniques like chip-and-wire bonding. Monolithic MICs, on the other hand, have all active and passive components fabricated directly onto a single semiconductor substrate using semiconductor manufacturing processes like photolithography, etching, and deposition.

---

**Question 2:**
List two advantages and two disadvantages of using Gallium Arsenide (GaAs) as a substrate for MMICs.

**Answer:**
**Advantages of GaAs for MMICs:**
1.  **High Electron Mobility:** Allows for high-speed operation and low-noise performance.
2.  **Good Semi-Insulating Properties:** Minimizes substrate losses and parasitic coupling between components.

**Disadvantages of GaAs for MMICs:**
1.  **Brittleness:** Makes it more susceptible to breakage during handling and packaging compared to silicon.
2.  **Higher Cost:** Generally more expensive than silicon substrates.

---

**Question 3:**
For a microwave circuit requiring high power handling and the ability to easily replace faulty components, which technology would be more suitable, Hybrid MICs or Monolithic MICs? Justify your answer.

**Answer:**
Hybrid MICs would be more suitable.
**Justification:**
*   **Power Handling:** Hybrid MICs can often accommodate larger discrete components and have better thermal management options, allowing for higher power handling.
*   **Replaceability:** The discrete nature of components in Hybrid MICs allows for easier identification and replacement of faulty parts, a significant advantage in repairability and maintenance. MMICs, being integrated, are difficult or impossible to repair at the component level.

---

**Question 4:**
Identify two common transmission line structures used in MICs and briefly describe one of them.

**Answer:**
Two common transmission line structures used in MICs are:
1.  **Microstrip:** A conductive strip on the surface of a dielectric substrate with a ground plane on the opposite side.
2.  **Stripline:** A conductor embedded within the dielectric substrate, sandwiched between two ground planes.

**Description of Microstrip:**
A microstrip line consists of a central conductive strip of width 'w' on one side of a dielectric substrate of thickness 'h' and dielectric constant $\epsilon_r$. The other side of the substrate is covered by a continuous conductive ground plane. The electromagnetic wave propagates primarily within the dielectric and partly in the air above it, making it a quasi-TEM mode.

---

**Question 5:**
Explain the concept of "chip-and-wire" bonding in the context of Hybrid MICs.

**Answer:**
Chip-and-wire bonding is a technique used in Hybrid MIC fabrication where bare semiconductor chips (containing active devices like transistors or diodes) are directly attached to the conductive traces on the substrate. This attachment is typically done using conductive epoxy or solder. Following the chip attachment, very fine wires (usually gold or aluminum) are used to make electrical connections between the bonding pads on the semiconductor chip and the corresponding conductive patterns on the substrate. This process allows for the integration of active components into the hybrid circuit.

---

## 6. Important Points to Remember

*   **MICs vs. Discrete Circuits:** MICs integrate multiple components on a common substrate, reducing size, weight, and parasitic effects compared to discrete component assemblies.
*   **Hybrid MICs (HMICs):** Combine discrete passive elements fabricated using film techniques with discrete active components attached via bonding. Offers flexibility and ease of prototyping.
*   **Monolithic MICs (MMICs):** All components (active and passive) are fabricated on a single semiconductor substrate using integrated circuit manufacturing processes. Offers extreme miniaturization and high reliability.
*   **Substrate Choice:** The selection of substrate material is critical and depends on the frequency of operation, power requirements, dielectric properties (loss tangent, dielectric constant), thermal conductivity, and cost.
*   **Transmission Lines:** Planar transmission lines like microstrip, stripline, and coplanar waveguides are fundamental for interconnections in MICs.
*   **Trade-offs:** The choice between HMIC and MMIC depends on application requirements such as volume, cost, performance needs, power handling, and reliability.

---

## 7. Learning Outcomes Covered

This module's content directly addresses the following learning outcomes:

*   **CO1: Describe the basic principles of Microwave solid state diodes, transistors, generators and amplifiers.**
    *   While this topic doesn't delve into the detailed principles of these devices, it explains how they are integrated into MICs (both hybrid and monolithic). Understanding the context of integration is essential for appreciating their application.
*   **CO4: Illustrate the basic concepts of Monolithic Integrated Circuits.**
    *   This entire module is dedicated to introducing MICs, with a significant portion focusing on the concepts, technology, advantages, and disadvantages of Monolithic MICs.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
