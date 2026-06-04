---
title: "Comparison of both MICs."
subject: "MICROWAVE DEVICES & CIRCUITS"
module: "Module 4: Introduction to MICSs:"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff4a3"
status: "completed"
scrapedAt: "2026-05-23T18:07:59.459Z"
---
# MICROWAVE DEVICES & CIRCUITS - Module 4: Introduction to MICs

## Topic: Comparison of MICs (Microwave Integrated Circuits)

---

### **1. Introduction to Microwave Integrated Circuits (MICs)**

Microwave Integrated Circuits (MICs) are miniaturized electronic circuits designed for microwave frequencies (typically 1 GHz to 300 GHz). They integrate various microwave components like transmission lines, passive components (resistors, capacitors, inductors), active components (transistors, diodes), and sometimes even filters and antennas onto a single substrate. This integration leads to smaller size, lighter weight, improved performance, increased reliability, and reduced cost compared to discrete component implementations.

**Key Concepts:**

*   **Miniaturization:** Reducing the physical size and weight of microwave circuits.
*   **Integration:** Combining multiple components onto a single substrate.
*   **Substrate:** The dielectric material on which the circuit is fabricated.
*   **Transmission Lines:** Guiding electromagnetic waves at microwave frequencies.
*   **Passive Components:** Resistors, capacitors, inductors implemented using specific metallization patterns or lumped elements.
*   **Active Components:** Transistors, diodes used for amplification, oscillation, switching, etc.

**Reference:**

*   **Pozar, Microwave Engineering:** Discusses transmission line theory and the fundamentals of microwave circuit design. (Chapter 2 & 3)
*   **Collin, Foundations of Microwave Engineering:** Provides a strong theoretical basis for understanding microwave transmission structures. (Chapter 3 & 4)
*   **Liao, Microwave Devices & Circuits:** Introduces various microwave components and their applications. (Chapter 1 & 2)
*   **Konishi, Microwave Integrated Circuits:** Focuses specifically on the design and fabrication of MICs. (Chapter 1 & 2)

---

### **2. Types of Microwave Integrated Circuits (MICs)**

MICs can be broadly categorized based on their construction and the types of transmission lines and substrates used. The primary distinction is between **Hybrid MICs (HMICs)** and **Monolithic MICs (MMICs)**.

---

#### **2.1. Hybrid Microwave Integrated Circuits (HMICs)**

**Description:**

HMICs are constructed by integrating discrete active and passive components onto a substrate using patterned metallization for transmission lines and interconnections. The components are often mounted on the substrate using bonding techniques.

**Key Features & Characteristics:**

*   **Construction:** Uses a dielectric substrate (e.g., alumina, quartz, porcelain) with patterned metallization (e.g., copper, gold).
*   **Component Integration:** Discrete active and passive components (chips, transistors, diodes, chip capacitors, chip resistors) are mounted and interconnected on the substrate.
*   **Transmission Lines:** Primarily uses microstrip lines and striplines.
    *   **Microstrip Line:** A planar transmission line consisting of a strip conductor on one side of a dielectric substrate and a ground plane on the other.
    *   **Stripline:** A transmission line where the conductor is embedded within the dielectric, with ground planes on both sides.
*   **Assembly:** Components are often "flip-chip" bonded or wire-bonded.
*   **Performance:** Generally offers good performance for high-power applications and a wider range of substrate materials can be used.
*   **Flexibility:** Easier to design and prototype due to the use of discrete components.
*   **Cost:** Can be more expensive for very high volumes due to the manual assembly and discrete component costs.
*   **Frequency Range:** Typically operated from hundreds of MHz up to tens of GHz.

**Advantages of HMICs:**

*   Can incorporate a wider variety of semiconductor technologies and components (e.g., GaN for high power, GaAs for high frequency).
*   Good for low-volume production and prototyping.
*   Generally better for high-power applications.
*   Easier to achieve very high Q-factor passive components.
*   Repairable to some extent.

**Disadvantages of HMICs:**

*   Larger size compared to MMICs due to discrete components.
*   Lower reliability due to interconnections (wire bonds, solder joints).
*   Manufacturing process is often more manual, leading to higher labor costs.
*   Performance can be limited by parasitic effects at interconnections.

**Examples:**

*   Power amplifiers using discrete GaN or GaAs transistors.
*   Mixers and oscillators using discrete diodes or transistors.
*   Directional couplers and filters implemented on microstrip or stripline.

**Reference:**

*   **Konishi, Microwave Integrated Circuits:** Extensive coverage of microstrip and stripline structures and their application in HMICs. (Chapter 3 & 4)
*   **Bhat & Koul, Stripline-like Transmission Lines for MIC:** Detailed analysis of stripline and related structures used in HMICs.
*   **Liao, Microwave Devices & Circuits:** Discusses component realization in hybrid circuits. (Chapter 5)

---

#### **2.2. Monolithic Microwave Integrated Circuits (MMICs)**

**Description:**

MMICs are circuits where all components (active and passive) and transmission lines are fabricated directly onto a single semiconductor substrate (usually a semiconductor wafer like GaAs, InP, or SiGe) using batch fabrication techniques similar to those used for integrated circuits (ICs).

**Key Features & Characteristics:**

*   **Construction:** All components and transmission lines are fabricated directly on a semiconductor substrate (e.g., GaAs, InP, Si).
*   **Component Integration:** Active and passive components are formed by semiconductor processing steps (epitaxy, diffusion, ion implantation, metallization).
*   **Transmission Lines:** Primarily uses microstrip lines and coplanar waveguide (CPW).
    *   **Coplanar Waveguide (CPW):** A planar transmission line with a central conductor strip and two ground plane strips on the same side of the dielectric substrate, separated by gaps.
*   **Assembly:** Components are integrated on-chip; external connections are made through bond pads.
*   **Performance:** Offers excellent performance at very high frequencies (up to hundreds of GHz) due to minimal parasitics and high-quality passive components.
*   **Size & Weight:** Extremely compact and lightweight.
*   **Cost:** High initial development cost, but very low cost per unit in high-volume production.
*   **Reliability:** High reliability due to the absence of discrete interconnections.
*   **Frequency Range:** Typically operated from a few GHz up to several hundred GHz.

**Advantages of MMICs:**

*   Extremely small size and light weight.
*   Very high reliability due to monolithic integration and absence of wire bonds.
*   Excellent high-frequency performance due to minimal parasitics.
*   Low cost per unit in high-volume production.
*   Reproducible performance from wafer to wafer.
*   Can integrate complex functions on a single chip.

**Disadvantages of MMICs:**

*   High initial design and fabrication costs (mask sets, wafer processing).
*   Limited range of substrate materials (typically semiconductor wafers).
*   Lower power handling capability compared to HMICs, especially with silicon-based technologies.
*   Passive component quality (Q-factor) can be lower than in HMICs.
*   Difficult or impossible to repair.
*   Less flexibility in component selection compared to HMICs.

**Examples:**

*   Low-noise amplifiers (LNAs) for satellite communication.
*   High-frequency mixers and oscillators for radar systems.
*   Power amplifiers (though often GaN is used in HMICs for higher power).
*   System-on-Chip (SoC) solutions for radar, communication, and electronic warfare.

**Reference:**

*   **Liao, Microwave Devices & Circuits:** Dedicated chapters on monolithic circuits and their fabrication. (Chapter 13)
*   **Pozar, Microwave Engineering:** Briefly discusses MMIC technology as an evolution of MICs. (Chapter 1)
*   **Collin, Foundations of Microwave Engineering:** While focusing on fundamental principles, it lays the groundwork for understanding planar transmission structures used in MMICs.

---

### **3. Comparison Table: HMIC vs. MMIC**

| Feature             | Hybrid MIC (HMIC)                                 | Monolithic MIC (MMIC)                                      |
| :------------------ | :------------------------------------------------ | :--------------------------------------------------------- |
| **Integration**     | Discrete components on a substrate                | All components fabricated on a single semiconductor substrate |
| **Substrate**       | Dielectric (Alumina, Quartz, Porcelain)           | Semiconductor (GaAs, InP, Si, SiGe)                        |
| **Transmission Lines** | Microstrip, Stripline                             | Microstrip, Coplanar Waveguide (CPW)                       |
| **Components**      | Discrete chips, wire-bonded elements              | Integrated semiconductor devices, sputtered/deposited passive elements |
| **Size & Weight**   | Larger, heavier                                   | Extremely small, lightweight                               |
| **Performance**     | Good, can be optimized for specific functions   | Excellent, especially at very high frequencies             |
| **Power Handling**  | Generally higher (esp. with GaN)                  | Generally lower (esp. with Si)                             |
| **Frequency Range** | Up to ~30-50 GHz                                  | Up to several hundred GHz                                  |
| **Flexibility**     | High (easy component substitution)                | Low (design changes require new fabrication run)           |
| **Reliability**     | Moderate (depends on interconnection quality)     | Very High (no discrete interconnections)                   |
| **Cost**            | High unit cost for low volume, moderate for high  | High NRE (Non-Recurring Engineering) cost, low unit cost for high volume |
| **Repairability**   | Possible to some extent                           | Not possible                                               |
| **Applications**    | High-power amplifiers, specific filters, modules | RF front-ends, radar systems, high-speed communication, sensors |

---

### **4. Learning Outcomes Covered:**

*   **CO1: Describe the basic principles of Microwave solid state diodes, transistors, generators and amplifiers. (Knowledge Level: K2)**
    *   This topic builds upon the understanding of basic microwave components by discussing how they are integrated into circuits (HMICs and MMICs). The choice between HMIC and MMIC for specific applications will depend on the performance requirements of these devices.
*   **CO2: Analyse Microwave Networks using signal flow graphs (Knowledge Level: K3)**
    *   While not directly involving signal flow graphs, understanding the structure and limitations of HMICs and MMICs is crucial for developing and analyzing their network parameters. The parasitic effects present in each type of MIC will influence the network analysis.
*   **CO3: Design microwave filters by different methods (Knowledge Level: K3)**
    *   Filters are key components in microwave circuits. This comparison helps in deciding whether a filter should be implemented using discrete filter components (HMIC) or fabricated monolithically (MMIC), considering factors like frequency, power, and cost.
*   **CO4: Illustrate the basic concepts of Monolithic Integrated Circuits (Knowledge Level: K2)**
    *   This topic directly addresses the basic concepts of MMICs by contrasting them with HMICs, covering their construction, advantages, disadvantages, and typical applications.

---

### **5. Important Points to Remember:**

*   **HMICs are built using discrete components:** Think of them as "plug-and-play" components mounted on a board.
*   **MMICs are built "from scratch" on a chip:** All elements are fabricated using semiconductor processes.
*   **The main trade-off is cost vs. performance/size/reliability:** MMICs excel in size, reliability, and high-frequency performance but have high initial costs. HMICs offer flexibility and higher power capability at a potentially lower initial cost for smaller runs.
*   **Substrate material is a key differentiator:** Dielectrics for HMICs vs. semiconductors for MMICs.
*   **Transmission line choice is influenced by the MIC type:** Microstrip/stripline for HMICs, microstrip/CPW for MMICs.
*   **High-volume production favors MMICs.**
*   **High-power applications often lean towards HMICs (especially with GaN).**

---

### **6. Practice Questions and Exercises:**

**Question 1:** Differentiate between Hybrid MICs (HMICs) and Monolithic MICs (MMICs) based on their construction, key advantages, and typical applications.

**Answer:**

| Feature             | Hybrid MIC (HMIC)                                 | Monolithic MIC (MMIC)                                      |
| :------------------ | :------------------------------------------------ | :--------------------------------------------------------- |
| **Construction**    | Discrete components on a substrate                | All components fabricated on a single semiconductor substrate |
| **Key Advantages**  | Flexibility, higher power handling, easier prototyping | Small size, high reliability, excellent high-frequency performance, low unit cost in high volume |
| **Typical Apps**    | High-power amplifiers, modules, low-volume systems | RF front-ends, radar, high-speed communication, sensors       |

**Question 2:** A radar system requires a low-noise amplifier (LNA) to operate at 60 GHz with very low noise figure and minimal size. Which type of MIC would be more suitable, and why?

**Answer:**

A **Monolithic MIC (MMIC)** would be more suitable.

**Reasoning:**

1.  **High Frequency (60 GHz):** MMICs are designed for operation at very high frequencies, and their monolithic nature minimizes parasitic effects that degrade performance at these frequencies.
2.  **Low Noise Figure:** Semiconductor materials like GaAs and InP used for MMICs offer excellent intrinsic properties for achieving low noise figures.
3.  **Minimal Size:** The requirement for minimal size strongly favors MMICs, where all components are integrated onto a single chip.
4.  **Reliability:** For a radar system, high reliability is often critical, which MMICs provide due to their monolithic construction.

While HMICs *could* be designed for 60 GHz, achieving the same level of noise performance and miniaturization would be significantly more challenging and likely more expensive in the long run for mass production compared to an MMIC solution.

**Question 3:** You are designing a high-power amplifier for a base station operating at 2 GHz. The production volume is moderate, and cost per unit is a significant consideration, but power output is paramount. Which type of MIC would you choose? Justify your answer.

**Answer:**

A **Hybrid MIC (HMIC)** would be the more suitable choice.

**Justification:**

1.  **High Power Output:** HMICs, especially those utilizing semiconductor technologies like Gallium Nitride (GaN), are known for their superior power handling capabilities compared to most silicon-based MMICs. This is crucial for a high-power amplifier.
2.  **Moderate Production Volume & Cost:** For moderate production volumes, the high Non-Recurring Engineering (NRE) costs associated with MMICs can make them less economical than HMICs, where discrete components and less complex fabrication processes are involved.
3.  **Frequency (2 GHz):** While MMICs are capable at 2 GHz, the benefits of integration are less pronounced compared to much higher frequencies. HMICs are well-suited for this frequency range.
4.  **Flexibility:** HMICs offer greater flexibility in component selection and optimization, which can be beneficial when fine-tuning for specific power and performance characteristics.

**Question 4:** List three key differences between the transmission lines typically used in HMICs and MMICs.

**Answer:**

1.  **Substrate Material:** HMICs often use low-loss dielectric substrates like alumina or porcelain, whereas MMICs use semiconductor substrates like GaAs or Si.
2.  **Component Mounting:** In HMICs, transmission lines are etched on a substrate where discrete components are then mounted. In MMICs, transmission lines are fabricated directly on the semiconductor wafer alongside the active and passive devices.
3.  **Common Structures:** HMICs predominantly use microstrip and stripline. MMICs commonly use microstrip but also extensively employ Coplanar Waveguide (CPW) due to its advantages in integration with active devices and easier grounding.

---

This concludes the study notes for the comparison of MICs. Ensure to revisit the referenced textbook chapters for deeper understanding and more detailed examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
