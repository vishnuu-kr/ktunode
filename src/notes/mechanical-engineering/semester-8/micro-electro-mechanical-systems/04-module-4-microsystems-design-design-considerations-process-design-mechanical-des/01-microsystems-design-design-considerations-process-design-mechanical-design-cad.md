---
title: "Microsystems Design – Design considerations – Process design – Mechanical Design – CAD"
subject: "MICRO ELECTRO MECHANICAL SYSTEMS"
module: "Module 4: Microsystems Design – Design considerations – Process design – Mechanical Design – CAD"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1a51d0cf480446478b"
status: "completed"
scrapedAt: "2026-05-20T18:22:28.287Z"
---
# MICRO ELECTRO MECHANICAL SYSTEMS (MEMS) - Module 4: Microsystems Design

## Module Overview

This module delves into the crucial aspects of designing MEMS devices, focusing on the intricate interplay between design considerations, process design, mechanical design, and the indispensable role of Computer-Aided Design (CAD). Understanding these elements is fundamental to successfully translating theoretical concepts into functional micro-devices.

---

## 1. Microsystems Design - Design Considerations

Designing MEMS devices is a multi-faceted process that requires a holistic approach, considering various factors from the initial concept to the final fabrication. This section outlines the critical design considerations.

### 1.1. Functional Requirements and Performance Specifications

*   **Definition:** The foundation of any design is a clear understanding of what the MEMS device needs to *do* and how well it needs to perform.
*   **Key Aspects:**
    *   **Purpose:** What problem is the MEMS device solving? (e.g., sensing pressure, actuating a mirror, filtering signals).
    *   **Operating Environment:** Where will the device operate? (e.g., temperature, humidity, vacuum, presence of chemicals).
    *   **Performance Metrics:** Specific quantitative targets for operation (e.g., sensitivity, bandwidth, response time, power consumption, accuracy, linearity, range).
    *   **Reliability and Lifespan:** How long should the device function without failure, and under what conditions?
*   **Example:** A pressure sensor for automotive airbags must respond within milliseconds to a sudden pressure change (high sensitivity and fast response time) and operate reliably across a wide temperature range.

### 1.2. Material Selection

*   **Definition:** Choosing the appropriate materials is paramount as they dictate the physical properties, fabrication methods, and ultimately, the performance and reliability of the MEMS device.
*   **Key Properties to Consider:**
    *   **Mechanical Properties:** Young's Modulus, tensile strength, fracture toughness, Poisson's ratio, fatigue strength. (Hsu, 2nd Ed., Chapter 3)
    *   **Electrical Properties:** Conductivity, resistivity, dielectric strength, piezoelectric coefficient, piezoresistive coefficient.
    *   **Thermal Properties:** Thermal conductivity, thermal expansion coefficient.
    *   **Chemical Properties:** Reactivity, corrosion resistance.
    *   **Biocompatibility:** For medical applications.
*   **Common MEMS Materials:**
    *   **Silicon (Si):** Dominant material due to its excellent mechanical, electrical, and thermal properties, and mature processing techniques. Highly anisotropic etching properties.
    *   **Polysilicon:** Deposited silicon, often used for mechanical structures.
    *   **Silicon Nitride (SiN):** Dielectric and passivation layer, also used as a membrane material.
    *   **Silicon Dioxide (SiO2):** Electrical insulator, sacrificial material.
    *   **Polymers (e.g., SU-8, PDMS):** Offer flexibility, low cost, and ease of processing for certain applications. (Madou, 2nd Ed., Chapter 5)
    *   **Metals (Au, Pt, Al):** For electrodes, interconnects, and reflective surfaces.
    *   **Ceramics:** For high-temperature applications or specific electrical properties.
*   **Example:** For a micro-resonator where high Q-factor is critical, single-crystal silicon is preferred over polysilicon due to its lower internal damping. For a micro-actuator requiring large displacement, a compliant polymer might be a better choice.

### 1.3. Fabrication Process Compatibility

*   **Definition:** The chosen design must be realizable using existing or feasible microfabrication techniques. This is a crucial feedback loop in the design process.
*   **Key Considerations:**
    *   **Process Capability:** What features can be reliably created with chosen fabrication processes (e.g., minimum feature size, aspect ratio, layer thickness)?
    *   **Process Sequence:** How do different fabrication steps interact? Are there conflicts?
    *   **Sacrificial Layers:** Materials used temporarily and then removed to free moving parts. Their removal must not damage the device.
    *   **Stress Management:** Residual stresses in deposited films can cause deformation or fracture. Design can mitigate this.
    *   **Surface Tension Effects:** During wet etching and rinsing, surface tension can cause stiction, adhering micro-structures to surfaces. (Gad-el-Hak, 2002, Chapter 3)
*   **Example:** Designs requiring very fine features might necessitate advanced lithography techniques like e-beam lithography, which are more expensive and time-consuming than standard photolithography. A complex 3D structure might require deep reactive-ion etching (DRIE).

### 1.4. Packaging and Interfacing

*   **Definition:** How the MEMS chip will be connected to the outside world (electrical signals, fluidic interfaces, mechanical connections) and protected from the environment.
*   **Key Aspects:**
    *   **Electrical Interconnects:** Wire bonding, flip-chip bonding, through-wafer vias.
    *   **Hermeticity:** Sealing the device to protect it from moisture or contamination, especially for vacuum-sealed devices or sensors.
    *   **Fluidic Ports:** For microfluidic devices.
    *   **Mechanical Mounting:** How the device is attached to a substrate or housing.
    *   **Cost of Packaging:** Can significantly impact the overall cost of the final product.
*   **Example:** A MEMS accelerometer in a consumer electronic device might use simple wire bonding and a plastic package, while a high-reliability sensor for aerospace might require a ceramic package with hermetic sealing.

### 1.5. Cost and Manufacturability

*   **Definition:** The economic viability of producing the MEMS device in volume.
*   **Key Factors:**
    *   **Wafer Cost:** Price of the raw material.
    *   **Process Complexity:** Number of steps, types of equipment required.
    *   **Yield:** Percentage of functional devices produced per wafer.
    *   **Throughput:** How many devices can be produced in a given time.
    *   **Material Costs:** Cost of consumables.
*   **Example:** Using standard silicon processing with photolithography and wet etching is generally cheaper than using advanced e-beam lithography and dry etching.

---

## 2. Microsystems Design – Process Design

Process design in MEMS focuses on defining the sequence of fabrication steps to create the desired device geometry and functionality. It's closely intertwined with material selection and design considerations.

### 2.1. Microfabrication Techniques Overview

*   **Definition:** The set of processes used to create micro-scale structures. (Hsu, 2nd Ed., Chapters 4-9)
*   **Key Techniques:**
    *   **Lithography:** Pattern transfer from a mask to a substrate.
        *   **Photolithography:** Using light to expose photoresist.
        *   **Electron Beam Lithography (EBL):** Higher resolution, but slower and more expensive.
    *   **Etching:** Material removal.
        *   **Wet Etching:** Using chemical solutions (isotropic or anisotropic).
            *   *Isotropic:* Etches in all directions at the same rate (e.g., KOH on Si in <100> direction).
            *   *Anisotropic:* Etches preferentially along certain crystallographic planes (e.g., KOH on Si in <111> direction, creating V-grooves).
        *   **Dry Etching:** Using plasma or reactive gases (anisotropic).
            *   **Reactive Ion Etching (RIE):** Plasma-based etching with directional ion bombardment.
            *   **Deep Reactive Ion Etching (DRIE):** For high-aspect-ratio structures (e.g., Bosch process for silicon). (Madou, 2nd Ed., Chapter 3)
    *   **Deposition:** Adding thin films.
        *   **Physical Vapor Deposition (PVD):** Evaporation, Sputtering.
        *   **Chemical Vapor Deposition (CVD):** Plasma-enhanced CVD (PECVD), Low-pressure CVD (LPCVD).
    *   **Doping:** Introducing impurities to alter electrical properties (e.g., diffusion, ion implantation).
    *   **Surface Micromachining:** Building structures layer by layer on top of a substrate, often using sacrificial layers.
    *   **Bulk Micromachining:** Fabricating structures by selectively removing material from the bulk of the substrate.
    *   **LIGA (Lithographie, Galvanoformung, Abformung):** X-ray lithography, electroplating, and molding for high-aspect-ratio structures, often in polymers.
    *   **3D Printing/Additive Manufacturing:** Emerging techniques for complex geometries.

### 2.2. Process Flow Development

*   **Definition:** Establishing the precise sequence of operations required to build the device.
*   **Key Steps in Developing a Process Flow:**
    1.  **Define Device Structure:** Visualize the final 3D geometry of the MEMS device.
    2.  **Select Materials:** Based on functional requirements and process compatibility.
    3.  **Determine Layering Strategy:** Which materials are deposited when? Which are patterned?
    4.  **Choose Etching Techniques:** For creating features and removing sacrificial layers.
    5.  **Specify Deposition Methods:** For adding new layers.
    6.  **Plan Doping and Metallization:** As needed.
    7.  **Consider Sacrificial Layer Removal:** Ensure it's effective and non-damaging.
    8.  **Iterate and Refine:** The process flow is often optimized through simulation and experimental fabrication.
*   **Example:** To create a simple polysilicon cantilever beam suspended over a silicon substrate (surface micromachining):
    1.  Deposit sacrificial oxide layer on silicon.
    2.  Deposit polysilicon layer for the beam.
    3.  Pattern polysilicon layer using photolithography and etching to define the beam shape.
    4.  Etch away sacrificial oxide layer using wet etching (e.g., HF) to release the beam.
    5.  (Optional) Deposit metal for electrical contact.

### 2.3. Critical Process Parameters

*   **Definition:** Identifying and controlling the variables within each fabrication step that significantly influence the outcome.
*   **Examples:**
    *   **Lithography:** Exposure dose, development time, resist thickness, mask alignment.
    *   **Etching:** Etch rate, selectivity (etch rate of target material vs. mask/undercut), anisotropy, gas flow rates, pressure, temperature.
    *   **Deposition:** Deposition rate, film stress, uniformity, stoichiometry.
*   **Importance:** Precise control of these parameters is crucial for achieving high yield and consistent device performance.

### 2.4. Design Rule Check (DRC)

*   **Definition:** A verification step to ensure the designed layout adheres to the manufacturing process's limitations and capabilities.
*   **Key Checks:**
    *   Minimum feature size.
    *   Minimum spacing between features.
    *   Line width variations.
    *   Aspect ratios.
    *   Layer-to-layer alignment tolerance.
*   **Example:** A DRC might flag a design if it attempts to create a feature smaller than the lithography system can resolve or if two critical metal layers are misaligned beyond acceptable limits.

---

## 3. Microsystems Design – Mechanical Design

Mechanical design for MEMS involves the analysis and design of the movable components, ensuring they can withstand operational stresses and perform their intended mechanical function.

### 3.1. Micro-Mechanical Principles and Behavior

*   **Definition:** How mechanical principles apply at the micro-scale, where surface forces and material properties can become more dominant than body forces.
*   **Key Concepts:**
    *   **Scaling Laws:** How physical quantities change with size. While geometry scales linearly, surface area scales quadratically, and volume scales cubically. This means surface-to-volume ratios increase, making surface effects (like adhesion, friction) more significant.
    *   **Material Properties at Micro-scale:** Material properties can sometimes differ slightly at the micro-scale due to grain structure and surface effects.
    *   **Stiffness and Compliance:** MEMS structures are often compliant, allowing for large displacements relative to their size. Stiffness is usually characterized by the spring constant ($k$).
    *   **Stress and Strain:** Understanding how applied forces induce stress and strain within the material to predict deformation and potential failure.
    *   **Resonance:** MEMS structures often have natural frequencies of vibration. Understanding these is crucial for dynamic operation and avoiding unwanted vibrations.
    *   **Damping:** Energy dissipation mechanisms (viscous damping, material damping, air damping) that affect the amplitude and duration of oscillations. (Gad-el-Hak, 2002, Chapter 2)
    *   **Stiction:** Unwanted adhesion of micro-structures, often caused by surface forces (van der Waals, electrostatic) or capillary forces during processing. This is a major failure mechanism. (Madou, 2nd Ed., Chapter 6)

### 3.2. Static and Dynamic Analysis

*   **Definition:** Analyzing the behavior of MEMS structures under static loads and time-varying (dynamic) loads.
*   **Methods:**
    *   **Analytical Methods:** Using simplified models and equations (e.g., beam theory for cantilevers, plate theory for membranes) for quick estimations.
        *   *Example:* For a clamped-clamped beam with uniform load, deflection can be calculated using Euler-Bernoulli beam theory.
    *   **Numerical Methods:**
        *   **Finite Element Analysis (FEA):** Discretizing the structure into smaller elements to solve complex mechanical problems. This is the workhorse for detailed mechanical analysis.
        *   **Boundary Element Method (BEM):** Useful for certain problems, especially those involving external fields.
*   **Key Analyses:**
    *   **Deflection Analysis:** How much the structure bends under load.
    *   **Stress Analysis:** Where are the highest stress concentrations? Will the material yield or fracture?
    *   **Buckling Analysis:** Will the structure collapse under compressive loads?
    *   **Vibration Analysis (Modal Analysis):** Determining natural frequencies and mode shapes.
    *   **Frequency Response:** How the structure responds to time-varying forces at different frequencies.

### 3.3. Micro-Actuators and Micro-Sensors Design Principles

*   **Actuators:** Devices that convert energy into mechanical motion.
    *   **Electrostatic Actuators:** Utilize electric fields to generate force.
        *   *Parallel Plate Capacitors:* Force proportional to $V^2/d^2$.
        *   *Interdigitated Combs:* Force generated by overlapping fingers.
        *   *Design Considerations:* Gap distance, electrode overlap area, voltage levels.
    *   **Piezoelectric Actuators:** Utilize the piezoelectric effect (material generates charge when deformed or vice versa).
        *   *Design Considerations:* Material choice (e.g., PZT), electrode placement, applied voltage.
    *   **Thermal Actuators:** Utilize thermal expansion and contraction.
        *   *Design Considerations:* Material choice with high thermal expansion coefficient, resistive heating elements, thermal isolation.
    *   **Magnetic Actuators:** Utilize magnetic fields.
*   **Sensors:** Devices that detect and respond to a physical stimulus.
    *   **Piezoresistive Sensors:** Resistance changes with strain.
        *   *Design Considerations:* Placement of piezoresistors in high-strain regions, bridge configurations for signal amplification.
    *   **Capacitive Sensors:** Capacitance changes with displacement.
        *   *Design Considerations:* Gap distance, overlapping area, sense electrodes.
    *   **Piezoelectric Sensors:** Generate charge when deformed.
        *   *Design Considerations:* Electrode placement, material choice.
    *   **Optical Sensors:** Detect changes in light.
        *   *Design Considerations:* Reflective surfaces, light paths, detection mechanisms.

### 3.4. Micro-Mechanisms Design

*   **Definition:** The design of linkages, gears, and other mechanical components operating at the micro-scale.
*   **Challenges:** Friction, wear, lubrication, manufacturing tolerances become critical.
*   **Example:** Micro-gears for micro-robots, compliant mechanisms that rely on material flexure rather than distinct joints.

---

## 4. Microsystems Design – CAD

Computer-Aided Design (CAD) is an indispensable tool throughout the entire MEMS design and fabrication process, enabling complex geometry creation, simulation, and verification.

### 4.1. MEMS CAD Tools and Capabilities

*   **Definition:** Software used for creating, modifying, analyzing, and optimizing MEMS designs.
*   **Key Capabilities:**
    *   **Geometric Modeling:** Creating 2D layouts and 3D solid models of MEMS structures.
    *   **Layout Editing:** Defining patterns for lithography and etching.
    *   **Parameterization:** Creating designs that can be easily modified by changing parameters.
    *   **Design Rule Checking (DRC):** Verifying compliance with fabrication constraints.
    *   **Electrical Rule Checking (ERC):** For integrated circuits.
    *   **Process Simulation:** Simulating fabrication steps to predict results.
    *   **Device Simulation:** Analyzing the physical behavior (mechanical, electrical, thermal, fluidic) of the designed device.
    *   **Layout Versus Schematic (LVS):** For integrated circuits, ensuring the layout matches the circuit diagram.
    *   **3D Modeling:** Essential for complex MEMS structures.

### 4.2. Layout Generation and Mask Design

*   **Definition:** Creating the 2D geometric patterns (layouts) that will be used to create photomasks for lithography.
*   **Process:**
    1.  **Define Layers:** Each layer in the MEMS device (e.g., silicon, polysilicon, metal) is represented by a separate layer in the CAD tool.
    2.  **Draw Geometry:** Create the shapes for each layer according to the process flow.
    3.  **Mask Creation:** The final layouts are converted into mask data (e.g., GDSII or OASIS format) that drives mask-writing equipment.
    4.  **Mask Alignment:** Ensuring correct positioning of patterns from different masks.
*   **Example:** A mask for etching a cantilever beam would contain a pattern defining the beam's outline on the polysilicon layer. Another mask would define the openings in a sacrificial layer.

### 4.3. Simulation and Modeling for MEMS

*   **Definition:** Using computational tools to predict the behavior of MEMS devices before fabrication, saving time and resources.
*   **Types of Simulation:**
    *   **Process Simulation:**
        *   *Example:* Simulating DRIE to predict etch profile, sidewall roughness, and scalloping. Tools like Synopsis Sentaurus Process or COMSOL Process Analysis modules.
    *   **Device Simulation (Physics-Based):**
        *   **Mechanical Simulation (FEA):** Predicting stress, strain, deflection, vibration modes. Tools like ANSYS, COMSOL Multiphysics, Abaqus.
        *   **Electrical Simulation:** Analyzing electrostatics, current flow, etc. Tools like ANSYS HFSS, COMSOL AC/DC Module.
        *   **Thermal Simulation:** Analyzing heat distribution and transfer.
        *   **Fluidic Simulation:** Analyzing microfluidic flow.
        *   **Multi-physics Simulation:** Coupling different physics domains (e.g., electro-mechanical, thermo-mechanical).
    *   **Behavioral/System-Level Simulation:** Modeling the device's input-output relationship at a higher abstraction level for system integration.
*   **Importance:** Allows for design optimization, identification of potential failure modes, and validation of design choices. (Hsu, 2nd Ed., Chapter 11)

### 4.4. MEMS-Specific CAD Considerations

*   **3D Design:** Many MEMS devices have complex 3D structures, requiring robust 3D CAD capabilities.
*   **Anisotropy:** Accounting for anisotropic etching behavior (e.g., crystallographic etching in silicon) requires specialized CAD features or simulation capabilities.
*   **Sacrificial Layer Removal:** Simulating the release process and potential for stiction.
*   **Multi-physics Coupling:** MEMS often exhibit coupled physics (e.g., electrostatic force causes mechanical displacement, which changes capacitance). CAD tools need to handle these multi-physics interactions.
*   **Design for Manufacturability (DFM):** Integrating fabrication constraints directly into the CAD workflow.

---

## 5. Learning Outcome Alignment and Key Points

This module directly addresses the following learning outcomes:

*   **CO1: Understand micro electromechanical systems, MEMS components, MEMS design concepts and working principles.**
    *   Covered in Section 1 (Design Considerations), Section 3 (Mechanical Design).
*   **CO2: Understand the engineering and physics of MEMS Fabrication Process.**
    *   Covered in Section 2 (Process Design), especially subsections on microfabrication techniques and critical parameters.
*   **CO3: Understand the various processes in MEMS Fabrication.**
    *   Detailed in Section 2 (Process Design), highlighting lithography, etching, deposition, etc.
*   **CO4: Understand the interface between MEMS and CAD.**
    *   Completely covered in Section 4 (CAD).

### Important Points to Remember:

*   **Interdependence:** Design, process, materials, and CAD are highly interdependent in MEMS. A change in one often necessitates changes in others.
*   **Trade-offs:** MEMS design is a process of managing trade-offs between performance, cost, manufacturability, and reliability.
*   **Micro-Scale Physics:** Surface forces, material properties at the micro-scale, and residual stresses are critical considerations not always present in macro-scale design.
*   **Fabrication Constraints Drive Design:** The capabilities and limitations of microfabrication processes heavily influence what can be designed.
*   **Simulation is Crucial:** Extensive simulation is essential to predict behavior and optimize designs before committing to expensive fabrication.
*   **Stiction:** A persistent challenge in MEMS, requiring careful design and process control.

---

## 6. Practice Questions and Answers

**Question 1:** A designer is creating a MEMS accelerometer based on piezoresistivity. What material properties are most critical for the beam and the piezoresistors, and why?

**Answer:**
*   **Beam Material:** Critical properties include high tensile strength to prevent fracture under acceleration, low Young's Modulus for compliance and large displacement, and low damping for good dynamic response. Silicon is a common choice.
*   **Piezoresistor Material:** Critical properties include a high gauge factor (sensitivity of resistance change to strain), good thermal stability (resistance should not fluctuate significantly with temperature), and compatibility with deposition and patterning. Doped polysilicon or specific metal films are often used.

**Question 2:** You are designing a micro-mirror that needs to tilt by 5 degrees. You are considering an electrostatic comb-drive actuator. What are the key design parameters for the comb fingers that will affect the generated torque and the maximum tilt angle?

**Answer:**
Key design parameters for comb fingers include:
*   **Gap distance (g):** Smaller gaps lead to stronger electrostatic forces for a given voltage, but increase the risk of stiction and limit the travel range due to overlap reduction.
*   **Finger overlap length (L):** Longer overlap increases the capacitance change and thus the driving force/torque.
*   **Number of fingers (N):** More fingers increase the total force and torque, but also increase parasitic capacitance and complexity.
*   **Finger thickness and height (t, h):** These affect the surface area for electrostatic interaction and the stiffness of the structure.
*   **Beam stiffness:** The compliance of the suspension beams supporting the comb fingers will determine the maximum achievable tilt angle for a given driving force.

**Question 3:** Describe a typical process flow for fabricating a surface-micromachined polysilicon cantilever beam. Mention key fabrication steps and potential challenges.

**Answer:**
A typical process flow:
1.  **Deposition of Sacrificial Layer:** Deposit a layer of silicon dioxide (SiO2) on a silicon substrate. (Challenge: ensuring uniform thickness).
2.  **Deposition of Structural Layer:** Deposit a layer of polysilicon. (Challenge: controlling film stress, doping for desired conductivity).
3.  **Patterning of Structural Layer:** Use photolithography to define the cantilever shape and then etch the polysilicon (e.g., using RIE). (Challenge: achieving sharp edges, controlling etch depth).
4.  **Patterning of Sacrificial Layer (Optional but common):** If the beam needs to be anchored to a different layer or released with a specific gap, an opening is etched in the sacrificial layer.
5.  **Removal of Sacrificial Layer:** Etch away the SiO2 layer using a wet etchant like hydrofluoric acid (HF). (Challenge: Stiction – the cantilever sticking to the substrate during drying, requiring specialized release techniques like critical point drying or supercritical CO2 drying).
6.  **Metallization (Optional):** Deposit metal for electrical contact if needed.

**Question 4:** What is the primary role of CAD tools in the MEMS design process, and why is it crucial to perform Design Rule Checks (DRC)?

**Answer:**
The primary role of CAD tools in MEMS design is to:
*   **Create and visualize complex geometries:** Both 2D layouts and 3D structures.
*   **Simulate device behavior:** Predict mechanical, electrical, thermal, and fluidic performance.
*   **Generate fabrication masks:** Translate designs into manufacturing instructions.
*   **Automate verification:** Ensure designs are manufacturable and meet specifications.

Performing **Design Rule Checks (DRC)** is crucial because it ensures that the layout adheres to the minimum feature sizes, spacing requirements, and other limitations of the chosen microfabrication processes. Failing to pass DRC can lead to:
*   **Fabrication failures:** Features that are too small to be patterned or etched correctly.
*   **Poor device performance:** Due to incorrect dimensions or alignment.
*   **Low yield:** A high percentage of non-functional devices.
*   **Increased manufacturing costs:** Due to rework or scrap.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
