---
title: "Micro fabrication Techniques:  Lithography, Thin Film Deposition and Doping, Etching and Substrate Removal, Substrate Bonding, MEMS Fabrication Techniques, Micro-fabrication using deposition techniques: epitaxial, sputtering, chemical vapour deposition (CVD) techniques."
subject: "MICRO AND NANO MANUFACTURING"
module: "Module 3: Characterizing etching processes in bulk micromachining"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044644d8"
status: "completed"
scrapedAt: "2026-05-20T18:22:12.886Z"
---
# Module 3: Characterizing Etching Processes in Bulk Micromachining

## Introduction to Microfabrication Techniques

This module delves into the foundational techniques employed in micro and nano manufacturing, with a specific focus on bulk micromachining and the various processes involved. We will explore lithography, thin film deposition, doping, etching, substrate bonding, and MEMS fabrication techniques, along with detailed explanations of deposition methods like epitaxy, sputtering, and CVD.

### Learning Outcomes (LOs) Covered:

*   **LO1:** Explain different techniques used in micro and nano manufacturing.
*   **LO2:** Describe conventional techniques and non-conventional micro-nano manufacturing approaches.
*   **LO4:** Explain the basics of micro and nano fabrication techniques.

### Course Outcomes (COs) Alignment:

*   **CO1 (K2):** Explain different techniques used in micro and nano manufacturing.
*   **CO2 (K2):** Describe conventional techniques and non-conventional micro-nano manufacturing approaches.
*   **CO4 (K2):** Explain the basics of micro and nano fabrication techniques.

---

## 1. Lithography

Lithography is a fundamental patterning technique used to transfer a geometric design from a mask to a substrate. It is the cornerstone of microfabrication, enabling the creation of intricate patterns on micro- and nanoscale devices.

### 1.1 Key Concepts and Definitions

*   **Mask:** A template containing the desired pattern, typically made of glass or quartz with a patterned layer of opaque material (e.g., chromium).
*   **Photoresist:** A light-sensitive material that undergoes chemical changes when exposed to light. It can be positive (exposed areas become soluble) or negative (exposed areas become insoluble).
*   **Exposure:** The process of irradiating the photoresist with light (UV, X-ray, electron beam) through the mask.
*   **Development:** The process of selectively removing either the exposed (positive resist) or unexposed (negative resist) portions of the photoresist, revealing the pattern on the substrate.
*   **Resolution:** The smallest feature size that can be accurately replicated.

### 1.2 Types of Lithography

*   **Photolithography:** Uses ultraviolet (UV) light for exposure.
    *   **Contact Lithography:** Mask is in direct contact with the photoresist. High resolution but can damage the mask and resist.
    *   **Proximity Lithography:** Mask is separated from the resist by a small gap. Lower resolution than contact but avoids mask damage.
    *   **Projection Lithography:** Uses lenses to project an image of the mask onto the resist. Offers the highest resolution and minimizes mask defects. This is the dominant technique in semiconductor manufacturing.
*   **Electron Beam Lithography (EBL):** Uses a focused beam of electrons to directly write patterns on the resist. Offers very high resolution but is slow and expensive, typically used for mask making and R&D.
*   **X-ray Lithography:** Uses X-rays for exposure. Can achieve high resolution with good depth of focus, but requires complex and expensive equipment.
*   **Nanoimprint Lithography (NIL):** A mechanical patterning technique where a mold with a nanoscale pattern is pressed into a resist material. It's a promising non-conventional technique for high-throughput nanolithography.

### 1.3 Examples and Applications

*   **Integrated Circuits (ICs):** Used to pattern transistors, interconnects, and other features on silicon wafers.
*   **Microfluidic Devices:** Creating channels and chambers for biological and chemical analysis.
*   **Optical Components:** Fabricating diffraction gratings and microlenses.

### 1.4 Important Points to Remember

*   Lithography is the critical step for defining the geometric features of micro- and nano-scale devices.
*   The choice of lithography technique depends on the required resolution, throughput, and cost.
*   Projection lithography is the workhorse of the semiconductor industry due to its high resolution and throughput.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 1.5 Textbook References

*   **Microfabrication and Nano manufacturing by Mark J. Jackson (2006):** Chapter on Lithographic Techniques.
*   **Micro manufacturing Processes by Jain V.K (2012):** Chapter on Photolithography.
*   **MEMS and microsystems: design, manufacture, and nanoscale engineering by Hsu, Tai-Ran (2008):** Section on Lithographic Patterning.

---

## 2. Thin Film Deposition and Doping

Thin film deposition is the process of depositing thin layers of material onto a substrate. Doping involves introducing impurities into a semiconductor material to alter its electrical properties.

### 2.1 Key Concepts and Definitions

*   **Thin Film:** A layer of material typically ranging from a few angstroms to several micrometers in thickness.
*   **Substrate:** The base material onto which the thin film is deposited.
*   **Doping:** The intentional introduction of impurities (dopants) into a semiconductor crystal lattice to control its conductivity.
*   **Dopant:** An impurity atom added to a semiconductor. Examples include phosphorus (n-type) and boron (p-type) for silicon.

### 2.2 Thin Film Deposition Techniques

This section elaborates on the deposition techniques mentioned in the topic description, aligning with LO1, LO2, and LO4.

#### 2.2.1 Epitaxial Growth

*   **Definition:** The deposition of a crystalline layer on a crystalline substrate, where the deposited layer replicates the crystallographic orientation of the substrate.
*   **Principle:** Growth occurs atom by atom from the vapor phase onto a heated crystalline surface.
*   **Types:**
    *   **Vapor Phase Epitaxy (VPE) / Chemical Vapor Deposition (CVD) Epitaxy:** Uses gaseous precursors that react on the substrate surface.
    *   **Liquid Phase Epitaxy (LPE):** Uses a molten solution from which the material crystallizes onto the substrate.
    *   **Molecular Beam Epitaxy (MBE):** Uses a highly controlled beam of atoms or molecules in a ultra-high vacuum (UHV) environment. Offers superior control over layer thickness and composition.
*   **Examples:** Silicon epitaxy for creating strain-engineered silicon or silicon-germanium (SiGe) alloys for advanced transistors. Gallium arsenide (GaAs) epitaxy for optoelectronic devices.
*   **Applications:** Creating high-quality crystalline layers for semiconductor devices, heterostructures, and superlattices.
*   **References:** Jackson (2006), Jain (2012).

#### 2.2.2 Sputtering

*   **Definition:** A physical vapor deposition (PVD) technique where atoms are ejected from a target material by bombardment with energetic ions (usually noble gas ions like Ar+).
*   **Principle:** A plasma is generated in a vacuum chamber. Ions from the plasma are accelerated towards a target material, causing atoms to be sputtered from the target surface. These sputtered atoms then deposit onto the substrate.
*   **Types:**
    *   **DC Sputtering:** Used for conductive targets.
    *   **RF Sputtering:** Used for insulating targets.
    *   **Magnetron Sputtering:** Uses magnetic fields to confine the plasma, increasing the sputtering rate and efficiency.
*   **Examples:** Depositing metal films (e.g., aluminum, copper, titanium) for interconnects, reflective coatings, and barrier layers. Depositing dielectric films like silicon dioxide (SiO2) or silicon nitride (Si3N4).
*   **Applications:** Metallization of ICs, electrode fabrication, optical coatings, and deposition of hard coatings.
*   **References:** Jackson (2006), Jain (2012).

#### 2.2.3 Chemical Vapor Deposition (CVD)

*   **Definition:** A chemical process used to produce high-purity, high-performance solid materials, typically thin films, from a gaseous phase.
*   **Principle:** Gaseous precursor molecules are introduced into a reaction chamber and react on or near a heated substrate surface, depositing a solid film.
*   **Types:**
    *   **Atmospheric Pressure CVD (APCVD):** Performed at atmospheric pressure. Fast but can lead to poorer film quality and conformality.
    *   **Low-Pressure CVD (LPCVD):** Performed at reduced pressure. Results in higher purity films, better uniformity, and improved conformality.
    *   **Plasma-Enhanced CVD (PECVD):** Uses a plasma to lower the reaction temperature, enabling deposition on temperature-sensitive substrates and improving film properties.
    *   **Metal-Organic CVD (MOCVD):** Uses metal-organic compounds as precursors. Widely used for depositing compound semiconductors (e.g., GaAs, GaN) for optoelectronic and high-speed electronic devices.
*   **Examples:** Depositing silicon dioxide (SiO2), silicon nitride (Si3N4), polycrystalline silicon (poly-Si), and various metals and compound semiconductors.
*   **Applications:** Dielectric layers, passivation layers, gate electrodes, and active semiconductor layers.
*   **References:** Jackson (2006), Jain (2012), Hsu (2008).

### 2.3 Doping Techniques

*   **Diffusion:** Dopant atoms are introduced at high temperatures, allowing them to diffuse into the semiconductor substrate.
    *   **Gas-Phase Diffusion:** Using gaseous dopant sources.
    *   **Solid-Source Diffusion:** Using solid dopant sources (e.g., doped oxide layers).
*   **Ion Implantation:** Dopant atoms are ionized, accelerated to high energies, and physically implanted into the substrate. Offers precise control over dopant concentration and depth profile. This is the dominant doping technique in modern IC fabrication.
*   **In-Situ Doping:** Dopants are introduced into the gas stream during thin film deposition (e.g., during epitaxy or CVD).

### 2.4 Examples and Applications

*   **Transistors:** Doping creates the p-n junctions that are essential for transistor operation.
*   **Resistors:** Doped regions can be used to create resistive elements.
*   **Sensors:** Selective doping can tailor the sensing properties of materials.

### 2.5 Important Points to Remember

*   Thin film deposition techniques are crucial for building up layered structures in microdevices.
*   Epitaxy provides crystalline perfection, sputtering offers versatile material deposition, and CVD enables complex chemical reactions for film formation.
*   Doping is essential for controlling the electrical conductivity of semiconductors, with ion implantation offering precise control.

---

## 3. Etching and Substrate Removal

Etching is a subtractive process used to remove unwanted material from a substrate, creating patterns defined by the lithography step. Bulk micromachining often relies on etching to create 3D structures.

### 3.1 Key Concepts and Definitions

*   **Etchant:** The chemical or physical agent used to remove material.
*   **Masking Layer:** A protective layer (often patterned photoresist or a more robust mask material like silicon nitride) that prevents etching in specific areas.
*   **Etch Rate:** The speed at which material is removed by the etchant.
*   **Selectivity:** The ratio of etch rates between the material to be etched and the masking layer. High selectivity is crucial to prevent damage to the mask.
*   **Anisotropy:** The directional dependence of the etch rate.
    *   **Isotropic Etching:** Etches equally in all directions, leading to undercutting.
    *   **Anisotropic Etching:** Etches primarily in one direction (usually vertical), allowing for the creation of straight sidewalls.
*   **Undercutting:** The horizontal etching of material beneath the masking layer.

### 3.2 Etching Techniques

This section aligns with LO1, LO2, and LO4, and provides context for bulk micromachining.

#### 3.2.1 Wet Etching (Isotropic)

*   **Definition:** Uses liquid chemicals (acids, bases, etchants) to remove material.
*   **Principle:** Chemical reactions between the etchant and the substrate material.
*   **Characteristics:**
    *   Generally isotropic, leading to undercutting.
    *   High etch rates.
    *   High selectivity to masking materials.
    *   Relatively simple and low-cost.
*   **Examples:**
    *   **Silicon Etching:**
        *   **Alkaline etchants (e.g., KOH, TMAH):** Highly anisotropic for single-crystal silicon. Etch planes with different crystallographic orientations at different rates (e.g., (100) vs. (111)). This anisotropy is key for bulk micromachining.
        *   **Acid etchants (e.g., HF:HNO3:CH3COOH):** More isotropic, used for silicon dioxide and metals.
    *   **Metal Etching:** Acids like aqua regia for gold, ferric chloride for copper.
    *   **Dielectric Etching:** Hydrofluoric acid (HF) or buffered HF (BHF) for silicon dioxide.
*   **Applications:** Bulk micromachining for creating trenches, cavities, and membranes. Patterning metal layers.
*   **References:** Jackson (2006), Jain (2012), Hsu (2008).

#### 3.2.2 Dry Etching (Anisotropic)

*   **Definition:** Uses gaseous etchants, often activated by plasma, to remove material.
*   **Principle:** Combines chemical reactions with physical bombardment by energetic ions.
*   **Characteristics:**
    *   Can achieve high anisotropy, leading to vertical sidewalls.
    *   Lower etch rates compared to wet etching.
    *   Requires more complex and expensive equipment.
    *   More control over etch profile.
*   **Types:**
    *   **Plasma Etching / Reactive Ion Etching (RIE):** Uses a plasma to generate reactive species that etch the material. RIE adds an ion bombardment component that enhances anisotropy.
    *   **Deep Reactive Ion Etching (DRIE):** A specialized form of RIE that allows for the etching of very deep, high-aspect-ratio structures in silicon (e.g., Bosch process).
*   **Examples:**
    *   **RIE for Silicon Dioxide:** Using fluorocarbon gases (e.g., CHF3, CF4).
    *   **RIE for Silicon Nitride:** Using fluorocarbon or oxygen-based plasmas.
    *   **DRIE (Bosch Process):** Alternating steps of passivation (using C4F8) and etching (using SF6) to achieve deep anisotropic etching of silicon.
*   **Applications:** High-resolution patterning, creation of high-aspect-ratio structures (e.g., micro-channels, actuators), gate etching in transistors.
*   **References:** Jackson (2006), Jain (2012), Hsu (2008).

### 3.3 Substrate Removal

In bulk micromachining, etching is often used to remove significant portions of the substrate to create 3D features. This can involve deep etching through the entire substrate or selective removal of material to form cavities or suspended structures.

### 3.4 Examples and Applications

*   **Bulk Micromachined Accelerometers:** Silicon membranes etched using anisotropic wet etching (KOH) or DRIE to create a suspended proof mass.
*   **Micro-nozzles:** Deep etching to create flow channels.
*   **Inkjet printheads:** Etched nozzles for precise ink ejection.

### 3.5 Important Points to Remember

*   Etching is a subtractive process that creates patterns.
*   Wet etching is generally isotropic and cost-effective, while dry etching (especially RIE/DRIE) offers anisotropy for precise vertical features.
*   The choice of etchant and technique depends on the material to be etched, the desired etch profile, selectivity, and etch rate.
*   Anisotropy is crucial for defining vertical sidewalls in bulk micromachining.

---

## 4. Substrate Bonding

Substrate bonding is the process of joining two or more substrates together. This is often necessary to create complex 3D structures or encapsulate microdevices.

### 4.1 Key Concepts and Definitions

*   **Wafer Bonding:** The process of joining two wafers.
*   **Bonding Interface:** The region where the two substrates are joined.
*   **Hermetic Seal:** A seal that prevents the passage of gases or liquids.

### 4.2 Bonding Techniques

This section aligns with LO1, LO2, and LO4.

*   **Fusion Bonding (Direct Bonding):**
    *   **Principle:** Surfaces of two wafers are brought into intimate contact after cleaning and activation. Van der Waals forces initially hold them together, followed by high-temperature annealing to form covalent bonds.
    *   **Characteristics:** High bond strength, excellent hermeticity, no intermediate material required.
    *   **Applications:** SOI (Silicon-On-Insulator) wafer fabrication, creating sealed cavities for pressure sensors or accelerometers.
*   **Anodic Bonding (Electrostatic Bonding):**
    *   **Principle:** Typically used to bond silicon to glass (like Pyrex). A voltage is applied across the two substrates at elevated temperatures. This drives ionic diffusion in the glass, creating an electrostatic attraction that pulls the surfaces together and forms strong covalent bonds.
    *   **Characteristics:** Suitable for creating sealed cavities, relatively low processing temperature compared to fusion bonding.
    *   **Applications:** Pressure sensors, accelerometers, microfluidic devices, IR sensors.
*   **Eutectic Bonding:**
    *   **Principle:** Involves a low-melting-point alloy (eutectic) placed between the two substrates. Heating above the eutectic temperature causes the alloy to melt and form a new alloy with the substrate materials, solidifying into a strong bond upon cooling.
    *   **Examples:** Gold-silicon eutectic for bonding silicon dies to headers.
    *   **Applications:** Packaging of microelectronic and MEMS devices.
*   **Adhesive Bonding:**
    *   **Principle:** Uses an organic or inorganic adhesive material (e.g., epoxy, polymer, glass frit) to join the substrates.
    *   **Characteristics:** Lower processing temperatures, can bond dissimilar materials, but may have lower bond strength and hermeticity compared to other methods.
    *   **Applications:** Low-cost packaging, bonding of optical components.
*   **Metal Diffusion Bonding:**
    *   **Principle:** Similar to fusion bonding but utilizes a thin metal layer as an intermediate. The metal diffuses into both substrates at elevated temperatures, forming a strong bond.
    *   **Applications:** High-reliability packaging.

### 4.3 Examples and Applications

*   **Pressure Sensors:** Bonding a silicon diaphragm to a glass or Pyrex cap to create a sealed sensing chamber.
*   **Accelerometers:** Bonding a cap to a silicon proof mass structure.
*   **Microfluidic Devices:** Bonding layers to create intricate microchannels.

### 4.4 Important Points to Remember

*   Substrate bonding is essential for creating multi-layered or encapsulated microstructures.
*   The choice of bonding technique depends on the materials being joined, required bond strength, hermeticity, temperature constraints, and cost.
*   Fusion and anodic bonding are common for creating hermetically sealed MEMS devices.

---

## 5. MEMS Fabrication Techniques

Micro-Electro-Mechanical Systems (MEMS) integrate mechanical elements, sensors, actuators, and electronics on a common silicon substrate through microfabrication technology. Bulk micromachining is one of the primary approaches for MEMS fabrication.

### 5.1 Key Concepts and Definitions

*   **MEMS:** Microscopic devices that combine electrical and mechanical functions.
*   **Bulk Micromachining:** Fabricating devices by selectively removing material from the bulk of a substrate.
*   **Surface Micromachining:** Fabricating devices by building up layers of material on the surface of a substrate, often using sacrificial layers that are later removed.
*   **Sacrificial Layer:** A temporary layer that is etched away to release or form movable structures.
*   **Aspect Ratio:** The ratio of height to width of a feature.

### 5.2 MEMS Fabrication Approaches

This section aligns with LO1, LO2, and LO4, focusing on how the previously discussed techniques are integrated into MEMS fabrication.

#### 5.2.1 Bulk Micromachining for MEMS

*   **Principle:** Utilizes lithography to define patterns, followed by deep etching (wet or dry) to remove bulk substrate material, forming 3D structures.
*   **Key Techniques Used:**
    *   **Lithography:** To define etch masks.
    *   **Anisotropic Wet Etching (e.g., KOH):** For creating V-grooves, cavities, and membranes with crystallographically defined angles.
    *   **Isotropic Wet Etching:** For etching other materials like SiO2.
    *   **DRIE:** For creating high-aspect-ratio vertical features.
    *   **Substrate Bonding:** For encapsulation or creating multi-layer structures.
*   **Advantages:** Can create robust structures, relatively mature technology.
*   **Disadvantages:** Limited in achieving high aspect ratios without DRIE, often involves etching through the entire wafer, potentially limiting miniaturization.
*   **Examples:** Silicon pressure sensors, accelerometers, microphones, inkjet printheads.

#### 5.2.2 Surface Micromachining for MEMS

*   **Principle:** Involves depositing alternating layers of structural materials and sacrificial materials. Lithography is used to pattern each layer. The sacrificial layers are then etched away to release the structural components.
*   **Key Techniques Used:**
    *   **Thin Film Deposition:** For structural (e.g., polysilicon, silicon nitride) and sacrificial (e.g., silicon dioxide, silicon nitride) layers.
    *   **Lithography:** For patterning each layer.
    *   **Wet Etching:** For removing sacrificial layers.
*   **Advantages:** Can create complex 3D microstructures with high aspect ratios, suitable for producing movable parts.
*   **Disadvantages:** Susceptible to stiction (adhesion of released microstructures to underlying surfaces), limited mechanical strength compared to bulk micromachined structures.
*   **Examples:** Micro-mirrors, micro-relays, comb-drive actuators, early accelerometers.

### 5.3 Hybrid Approaches

Many advanced MEMS devices combine both bulk and surface micromachining techniques to leverage the advantages of each. For instance, a bulk micromachined structure might be combined with surface micromachined actuators.

### 5.4 Important Points to Remember

*   MEMS fabrication relies on a sequence of microfabrication steps.
*   Bulk micromachining uses etching to remove substrate material, creating 3D structures.
*   Surface micromachining uses sacrificial layers to release movable parts.
*   The choice between bulk and surface micromachining depends on the desired device structure and functionality.

---

## 6. Micro-fabrication using Deposition Techniques (Review and Integration)

This section reiterates the importance of deposition techniques as discussed in Section 2, specifically in the context of microfabrication and MEMS.

### 6.1 Epitaxial Deposition in Microfabrication

*   **Role:** Used to grow high-quality, crystalline layers with precise doping profiles for advanced semiconductor devices and heterostructures. Essential for devices requiring specific electronic or optical properties.
*   **Applications:** Heterojunction Bipolar Transistors (HBTs), High Electron Mobility Transistors (HEMTs), strained silicon for improved carrier mobility in advanced ICs.

### 6.2 Sputtering in Microfabrication

*   **Role:** Versatile for depositing a wide range of conductive and insulating films. Crucial for metallization, creating electrodes, and forming barrier layers.
*   **Applications:** Interconnects in ICs, gate electrodes, reflective coatings for optical MEMS, electrode fabrication for sensors.

### 6.3 Chemical Vapor Deposition (CVD) in Microfabrication

*   **Role:** A workhorse for depositing dielectric films (SiO2, Si3N4), polysilicon, and compound semiconductors. Its ability to form conformal films is vital for covering complex 3D topography.
*   **Applications:** Dielectric isolation, passivation layers, gate dielectrics, structural layers in surface micromachined devices, active layers in compound semiconductor devices.

### 6.4 Integration with Other Processes

*   **Lithography & Deposition:** Deposition is often followed by lithography and etching to pattern the deposited film.
*   **Deposition & Doping:** In-situ doping during deposition (e.g., epitaxial growth or CVD) allows for integrated doping.
*   **Deposition & Bonding:** Deposited films can also serve as bonding layers.

### 6.5 Important Points to Remember

*   Deposition techniques are fundamental building blocks for creating the layered structures and materials necessary for microdevices.
*   Each deposition method (epitaxy, sputtering, CVD) has unique strengths and is chosen based on the material properties and desired film characteristics.

---

## Practice Questions and Answers

**1. Question:** What is the primary advantage of projection lithography over contact lithography?
    *   **Answer:** The primary advantage of projection lithography is its significantly higher resolution and its ability to reduce the impact of mask defects on the printed pattern due to the use of optical reduction.

**2. Question:** Describe the difference between isotropic and anisotropic etching. Which type is essential for creating high-aspect-ratio vertical sidewalls in MEMS?
    *   **Answer:** Isotropic etching proceeds equally in all directions, leading to undercutting of the mask. Anisotropic etching proceeds primarily in one direction (usually vertical), allowing for straight sidewalls. Anisotropic etching, particularly through techniques like DRIE, is essential for creating high-aspect-ratio vertical sidewalls in MEMS.

**3. Question:** Name three common thin film deposition techniques and briefly state their primary principle of operation.
    *   **Answer:**
        *   **Epitaxial Growth:** Deposition of a crystalline layer on a crystalline substrate, replicating its crystallographic orientation.
        *   **Sputtering:** Ejection of target material atoms by energetic ion bombardment, followed by deposition on a substrate.
        *   **Chemical Vapor Deposition (CVD):** Chemical reaction of gaseous precursors on or near a heated substrate surface, depositing a solid film.

**4. Question:** Which substrate bonding technique is commonly used to bond silicon to glass for applications like pressure sensors, and what is its underlying principle?
    *   **Answer:** Anodic bonding (electrostatic bonding) is commonly used to bond silicon to glass. Its principle involves applying a voltage across the substrates at elevated temperatures, driving ionic diffusion in the glass, which creates electrostatic attraction and forms covalent bonds.

**5. Question:** Briefly explain the difference between bulk micromachining and surface micromachining in MEMS fabrication.
    *   **Answer:** Bulk micromachining fabricates devices by selectively removing material from the bulk of a substrate using etching. Surface micromachining fabricates devices by building up layers on the substrate surface, often using sacrificial layers that are later removed to release movable parts.

**6. Question:** If you need to deposit a thin film of aluminum for electrical interconnects on a silicon wafer, which deposition technique would you most likely choose and why?
    *   **Answer:** Sputtering (specifically DC magnetron sputtering if the target is conductive aluminum) would likely be chosen. It is a widely used and effective method for depositing metal films like aluminum, providing good adhesion and uniformity for interconnect applications.

**7. Question:** What role does a masking layer play in both lithography and etching processes?
    *   **Answer:** In lithography, the mask transfers the pattern to the photoresist. In etching, a patterned masking layer (often derived from the lithography step, e.g., photoresist or a harder mask like SiN) protects specific areas of the substrate from being etched, thus defining the final structure.

---

## Important Points to Remember (Module Summary)

*   **Lithography** is the primary patterning technique, defining features from masks onto photoresist.
*   **Thin Film Deposition** techniques (epitaxy, sputtering, CVD) are essential for building layered structures.
    *   **Epitaxy** for crystalline perfection.
    *   **Sputtering** for versatile material deposition.
    *   **CVD** for chemical reactions forming films.
*   **Doping** (diffusion, ion implantation) controls semiconductor electrical properties.
*   **Etching** is a subtractive process. **Wet etching** is isotropic and cost-effective, while **Dry etching** (RIE, DRIE) offers anisotropy for precise features.
*   **Substrate Bonding** joins multiple substrates, often for encapsulation and 3D structures.
*   **MEMS fabrication** integrates these techniques, with bulk and surface micromachining being the main approaches.
*   Understanding the principles, advantages, and limitations of each technique is crucial for selecting the appropriate process for micro- and nano-manufacturing.

---