---
title: "Fabrication technologies – Photolithography – Ion implantation – diffusion – oxidation – CVD – Physical Vapour Deposition – Etching."
subject: "MICRO ELECTRO MECHANICAL SYSTEMS"
module: "Module 3: Materials for MEMS and Microsystems."
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1a51d0cf4804464788"
status: "completed"
scrapedAt: "2026-05-20T18:22:26.886Z"
---
# MEMS Fabrication Technologies: A Deep Dive

## Module 3: Materials for MEMS and Microsystems

### Topic: Fabrication Technologies – Photolithography – Ion Implantation – Diffusion – Oxidation – CVD – Physical Vapour Deposition – Etching

**Course Outcomes Addressed:**
*   **CO1:** Understand micro electromechanical systems, MEMS components, MEMS design concepts and working principles. (K2)
*   **CO2:** Understand the engineering and physics of MEMS Fabrication Process (K2)
*   **CO3:** Understand the various processes in MEMS Fabrication (K2)

**Knowledge Level:** K2 (Understanding)

---

### 1. Introduction to MEMS Fabrication

MEMS (Micro Electro Mechanical Systems) fabrication involves creating intricate miniature mechanical devices with integrated electronic capabilities. This process typically relies on a series of sequential steps performed on a substrate, usually silicon, to build up or remove material in a controlled manner. The core principle is **patterning**, which allows for the precise definition of structures at the micro- and nano-scale.

**Key Concept:** **Microfabrication** is the process of manufacturing very small devices, typically in the range of 1 to 100 micrometers.

**Reference:** Hsu, Chapter 2: Materials for MEMS and Microsystems.

---

### 2. Photolithography: The Foundation of Patterning

Photolithography, also known as optical lithography, is the most crucial step in MEMS fabrication for transferring a geometric pattern from a mask to a substrate. It's analogous to photography but on a microscopic scale.

**Key Concepts:**
*   **Mask (Reticle):** A transparent plate (usually quartz) with an opaque pattern representing the desired structure.
*   **Photoresist:** A light-sensitive chemical coating applied to the substrate.
    *   **Positive Photoresist:** Becomes soluble in the developer when exposed to UV light.
    *   **Negative Photoresist:** Becomes insoluble in the developer when exposed to UV light.
*   **UV Light Source:** Typically a mercury lamp or excimer laser.
*   **Stepper/Scanner:** Machines that project the mask pattern onto the wafer.
*   **Development:** Washing away the soluble photoresist.

**Process Steps:**
1.  **Substrate Preparation:** Cleaning the wafer to remove contaminants.
2.  **Photoresist Coating:** Applying a uniform layer of photoresist using spin coating.
3.  **Soft Bake:** Heating the wafer to drive off excess solvent from the photoresist.
4.  **Alignment:** Aligning the mask with the wafer.
5.  **Exposure:** Exposing the photoresist to UV light through the mask.
6.  **Post-Exposure Bake (PEB):** (Optional, depending on photoresist) Improves contrast.
7.  **Development:** Removing the exposed (positive resist) or unexposed (negative resist) photoresist.
8.  **Hard Bake:** Further hardening the remaining photoresist for subsequent processing.

**Example:** To create a metallic interconnect pattern, a mask with the desired metal lines would be used. A positive photoresist would be applied, exposed through the mask, and developed. The exposed resist would be removed, leaving the resist pattern where the metal lines should be.

**Important Point to Remember:** Photolithography is a **transfer process**. It defines the areas that will be processed in subsequent steps.

**Reference:** Hsu, Chapter 3: Microfabrication Processes; Madou, Chapter 3: Photolithography.

---

### 3. Ion Implantation: Precise Doping

Ion implantation is a highly controlled process used to introduce dopant atoms into a semiconductor substrate to alter its electrical conductivity.

**Key Concepts:**
*   **Dopant Ions:** Charged atoms of elements like Phosphorus (P), Arsenic (As), or Boron (B).
*   **Implantation Energy:** Determines the depth of penetration (range) of the ions.
*   **Implantation Dose:** The total number of ions implanted per unit area.
*   **Annealing:** A heat treatment step required to repair lattice damage caused by implantation and to electrically activate the dopants.

**Process:**
1.  A beam of dopant ions is generated and accelerated to high energies.
2.  This beam is directed towards the substrate.
3.  The ions penetrate the surface, displacing substrate atoms and embedding themselves.
4.  A "mask" (often photoresist or an oxide layer) is used to selectively block ions from certain areas.

**Example:** To create a p-type region in a silicon wafer, boron ions would be implanted at a specific energy and dose.

**Advantages:**
*   High dopant concentration control.
*   Precise depth control.
*   Ability to implant through thin masking layers.

**Disadvantages:**
*   Causes lattice damage that requires annealing.
*   Limited by the depth achievable with practical energies.
*   Can be a slow process for large areas.

**Reference:** Hsu, Chapter 3: Microfabrication Processes; Madou, Chapter 5: Ion Implantation.

---

### 4. Diffusion: Thermal Introduction of Dopants

Diffusion is a thermal process where dopant atoms are introduced into a semiconductor substrate at high temperatures. It relies on the principle of atomic movement from regions of high concentration to regions of low concentration.

**Key Concepts:**
*   **Diffusion Furnace:** High-temperature ovens (typically quartz tubes) operating at 800-1200°C.
*   **Dopant Source:** Can be gaseous (e.g., PH$_3$, AsH$_3$, B$_2$H$_6$) or solid (e.g., doped oxide layers).
*   **Drive-in Diffusion:** After an initial "pre-deposition" step, a second higher-temperature, longer-duration step moves the dopants deeper into the wafer.
*   **Diffusion Profile:** The concentration of dopant atoms as a function of depth.

**Process Steps:**
1.  **Pre-deposition:** The wafer is heated in the presence of a dopant source gas. Dopant atoms diffuse into the wafer surface.
2.  **Drive-in:** The wafer is heated at a higher temperature, causing the pre-deposited dopants to diffuse further into the bulk of the wafer.

**Example:** To create a heavily doped surface layer for a contact, a diffusion process can be used.

**Advantages:**
*   Can achieve high dopant concentrations.
*   Simpler equipment compared to ion implantation.

**Disadvantages:**
*   Less precise control over dopant concentration and depth compared to ion implantation.
*   The dopant profile is not sharp; it's a gradual concentration gradient.
*   Can cause surface morphology changes.

**Reference:** Hsu, Chapter 3: Microfabrication Processes; Madou, Chapter 4: Diffusion.

---

### 5. Oxidation: Creating Insulating Layers

Thermal oxidation is a crucial process for growing silicon dioxide (SiO$_2$) layers on silicon wafers. SiO$_2$ is an excellent electrical insulator and a good masking layer for subsequent diffusion or ion implantation steps.

**Key Concepts:**
*   **Silicon Dioxide (SiO$_2$):** A dielectric material commonly used in MEMS.
*   **Oxidation Furnace:** Similar to diffusion furnaces.
*   **Oxidation Ambients:**
    *   **Dry Oxidation:** Uses pure oxygen (O$_2$) at high temperatures (900-1200°C). Produces high-quality, dense SiO$_2$.
    *   **Wet Oxidation:** Uses steam (H$_2$O) at high temperatures. Faster growth rate but results in a less dense SiO$_2$ film.
*   **Deal-Grove Model:** Describes the growth rate of SiO$_2$ films.

**Process:**
Silicon reacts with oxygen or water vapor at high temperatures:
*   **Dry Oxidation:** Si (solid) + O$_2$ (gas) $\rightarrow$ SiO$_2$ (solid)
*   **Wet Oxidation:** Si (solid) + 2H$_2$ (gas) $\rightarrow$ SiO$_2$ (solid) + 2H$_2$ (gas)

**Example:** A silicon wafer is placed in a furnace with an oxygen atmosphere at 1000°C. A layer of SiO$_2$ will grow on the surface. This oxide can then be patterned using photolithography and etching.

**Important Point to Remember:** Oxidation consumes the silicon substrate. The thickness of the oxide layer depends on temperature, time, and the ambient gas.

**Reference:** Hsu, Chapter 3: Microfabrication Processes; Madou, Chapter 2: Oxidation.

---

### 6. Chemical Vapor Deposition (CVD): Building Up Layers

CVD is a versatile technique used to deposit thin films of various materials (insulators, conductors, semiconductors) onto a substrate from gaseous precursors.

**Key Concepts:**
*   **Gaseous Precursors:** Reacting gases that decompose on the heated substrate to form a solid film.
*   **Plasma-Enhanced CVD (PECVD):** Uses a plasma to lower deposition temperatures, allowing deposition on temperature-sensitive substrates or resists.
*   **Low-Pressure CVD (LPCVD):** Operates at lower pressures, leading to higher film uniformity and step coverage.
*   **Stoichiometric vs. Non-stoichiometric Films:** Depending on precursor ratios.

**Process:**
1.  The substrate is placed in a reaction chamber.
2.  Precursor gases are introduced.
3.  The chamber is heated, or a plasma is generated, causing the precursor gases to react and deposit a film on the substrate.

**Examples of Deposited Films:**
*   **Silicon Dioxide (SiO$_2$):** From silane (SiH$_4$) and nitrous oxide (N$_2$O).
*   **Silicon Nitride (Si$_3$N$_4$):** From silane (SiH$_4$) and ammonia (NH$_3$).
*   **Polysilicon:** From silane (SiH$_4$). Used for structural components and gate electrodes.
*   **Metals:** e.g., Tungsten (W), Aluminum (Al).

**Important Point to Remember:** CVD is an **additive process** used to build up layers of different materials. Film properties (density, stoichiometry, stress) are highly dependent on deposition parameters.

**Reference:** Hsu, Chapter 3: Microfabrication Processes; Madou, Chapter 6: Chemical Vapor Deposition.

---

### 7. Physical Vapor Deposition (PVD): Depositing Films Through Physical Means

PVD encompasses techniques that deposit thin films by vaporizing and transporting source material to the substrate without chemical reactions.

**Key Concepts:**
*   **Sputtering:** Ions are used to bombard a target material, ejecting atoms that then deposit on the substrate.
    *   **DC Sputtering:** Used for conductive targets.
    *   **RF Sputtering:** Used for insulating targets.
*   **Evaporation:** Material is heated to its boiling point and evaporates, then condenses on the substrate.
    *   **Thermal Evaporation:** Uses a resistive heater.
    *   **Electron-Beam Evaporation:** Uses an electron beam to heat the source material.

**Process:**
1.  **Sputtering:** A target material is placed in a vacuum chamber. Ions (e.g., Argon) are introduced and accelerated towards the target. The impact ejects target atoms, which travel to and deposit on the substrate.
2.  **Evaporation:** Source material is placed in a vacuum chamber and heated until it vaporizes. The vapor condenses on the cooler substrate.

**Examples of Deposited Films:**
*   **Metals:** Aluminum (Al), Gold (Au), Platinum (Pt), Titanium (Ti) for electrical contacts and passivation.
*   **Dielectrics:** e.g., Silicon monoxide (SiO).

**Advantages:**
*   Can deposit a wide range of materials.
*   Good control over film thickness.
*   Sputtering offers better adhesion and film properties.

**Disadvantages:**
*   Evaporation can have poor step coverage.
*   Sputtering can be slower.

**Reference:** Hsu, Chapter 3: Microfabrication Processes; Madou, Chapter 7: Physical Vapor Deposition.

---

### 8. Etching: Removing Material Selectively

Etching is the process of selectively removing material from the substrate surface according to a pattern defined by a mask. This is the complementary process to deposition, used to sculpt the MEMS structures.

**Key Concepts:**
*   **Anisotropic Etching:** Etches in a specific crystallographic direction, creating vertical sidewalls.
*   **Isotropic Etching:** Etches equally in all directions, leading to undercutting.
*   **Wet Etching:** Uses liquid etchants (acids or bases).
    *   **Isotropic:** e.g., HF for SiO$_2$, H$_3$PO$_4$ for Si$_3$N$_4$.
    *   **Anisotropic (Crystallographic):** e.g., KOH, TMAH for silicon.
*   **Dry Etching (Plasma Etching):** Uses reactive gases in a plasma.
    *   **Reactive Ion Etching (RIE):** Combines chemical etching with physical sputtering, achieving highly anisotropic etching.
    *   **Deep RIE (DRIE):** Specialized RIE for etching deep, high-aspect-ratio features, particularly in silicon.

**Process:**
1.  **Masking:** The areas to be protected are covered by a mask (e.g., photoresist or oxide).
2.  **Etching:** The exposed material is removed by the etchant.

**Examples:**
*   **Wet Etching of Silicon:** Using KOH solution is anisotropic and etches {100} planes slower than {111} planes, enabling V-groove formation.
*   **RIE of Silicon Dioxide:** Used to transfer a pattern from photoresist to an SiO$_2$ layer.
*   **DRIE (e.g., Bosch Process):** Widely used for creating high-aspect-ratio silicon structures like springs, beams, and membranes.

**Important Point to Remember:** The choice of etching technique dictates the profile and aspect ratio of the MEMS features. Anisotropy is critical for creating precise mechanical structures.

**Reference:** Hsu, Chapter 3: Microfabrication Processes; Madou, Chapter 9: Etching; Gad-el-Hak, Chapter 3: Materials.

---

### 9. Ion Implantation vs. Diffusion: A Comparison

| Feature           | Ion Implantation                                       | Diffusion                                              |
| :---------------- | :----------------------------------------------------- | :----------------------------------------------------- |
| **Control**       | High control over depth and concentration.             | Less precise control; gradual profile.                 |
| **Damage**        | Causes lattice damage requiring annealing.             | Minimal lattice damage.                                |
| **Masking**       | Can implant through thin masking layers (e.g., oxide). | Requires openings in a protective layer (e.g., oxide). |
| **Profile**       | Sharper profile, but can spread during annealing.      | Gradual concentration gradient.                        |
| **Equipment**     | Ion implanter, high vacuum, accelerators.              | High-temperature furnace, gas handling.                |
| **Speed**         | Can be slow for large areas or high doses.             | Relatively fast for pre-deposition and drive-in.       |
| **Applications**  | Precise doping for transistors, shallow junctions.     | Creating bulk doped regions, isolation regions.        |

---

### 10. CVD vs. PVD: A Comparison

| Feature           | Chemical Vapor Deposition (CVD)                     | Physical Vapor Deposition (PVD)                        |
| :---------------- | :-------------------------------------------------- | :----------------------------------------------------- |
| **Mechanism**     | Chemical reaction of precursor gases on surface.    | Vaporization and condensation of source material.      |
| **Film Properties**| Generally good uniformity, conformality, adhesion. | Can vary; sputtering better for adhesion and density.  |
| **Temperature**   | Can deposit at various temperatures, PECVD lowers.  | Typically requires vacuum, heating (evaporation).      |
| **Precursors**    | Gaseous precursors.                                 | Solid or liquid source materials.                      |
| **Uniformity**    | Generally good, especially LPCVD.                   | Can be challenging for conformal coverage (evaporation). |
| **Complexity**    | More complex gas handling and reaction control.     | Simpler physical processes.                            |
| **Applications**  | Dielectrics (SiO$_2$, Si$_3$N$_4$), polysilicon.     | Metals (Al, Au), some dielectrics.                     |

---

### Practice Questions and Answers

**Q1. What is the primary role of photolithography in MEMS fabrication?**
**Answer:** Photolithography is the process of transferring a geometric pattern from a mask onto a substrate, usually by exposing a light-sensitive photoresist. This patterned resist then acts as a mask for subsequent etching or deposition steps.

**Q2. Differentiate between positive and negative photoresists.**
**Answer:**
*   **Positive Photoresist:** Becomes soluble in the developer when exposed to UV light. The exposed areas are removed.
*   **Negative Photoresist:** Becomes insoluble in the developer when exposed to UV light. The unexposed areas are removed.

**Q3. Explain the difference in control between ion implantation and diffusion for doping silicon.**
**Answer:** Ion implantation offers much higher control over the precise depth and concentration of dopants in silicon. Diffusion, being a thermal process driven by concentration gradients, results in a more gradual dopant profile and less precise control over depth.

**Q4. Which process is primarily used to grow insulating layers like silicon dioxide on silicon?**
**Answer:** Thermal oxidation.

**Q5. What are the two main categories of etching processes, and what is their key difference?**
**Answer:** The two main categories are wet etching and dry etching (plasma etching). The key difference lies in the medium used: wet etching uses liquid chemicals, while dry etching uses reactive gases in a plasma. This difference significantly impacts the etch profile (isotropic vs. anisotropic).

**Q6. Name two common techniques used in Physical Vapor Deposition (PVD).**
**Answer:** Sputtering and Evaporation.

**Q7. What is PECVD, and why is it advantageous over traditional CVD in some MEMS applications?**
**Answer:** PECVD stands for Plasma-Enhanced Chemical Vapor Deposition. It uses a plasma to initiate or assist the chemical reaction, allowing deposition at lower temperatures. This is advantageous for depositing films on temperature-sensitive substrates or patterned photoresist that would degrade at high CVD temperatures.

**Q8. What is DRIE, and what kind of MEMS structures is it particularly suited for?**
**Answer:** DRIE stands for Deep Reactive Ion Etching. It's a specialized RIE process used to etch deep, high-aspect-ratio features, particularly in silicon. It's ideal for creating intricate mechanical structures like springs, beams, and membranes with very vertical sidewalls.

---

### Important Points to Remember:

*   **Layer-by-Layer Fabrication:** MEMS fabrication is a sequential process, building up or removing material layer by layer.
*   **Patterning is Key:** Photolithography is the fundamental patterning technique that defines where subsequent processes occur.
*   **Additive vs. Subtractive:** CVD and PVD are additive processes (deposit material), while etching is a subtractive process (removes material).
*   **Anisotropy Matters:** The ability to etch or deposit with anisotropic control is crucial for creating the precise shapes and high aspect ratios needed for MEMS components.
*   **Trade-offs Exist:** Each fabrication process has advantages and disadvantages in terms of cost, control, material compatibility, and resulting film properties. The choice depends on the specific MEMS device requirements.
*   **Cleanliness is Paramount:** MEMS fabrication requires ultra-clean environments to prevent contamination, which can ruin device performance.

---

This study guide provides a foundational understanding of the key fabrication technologies used in MEMS. Each process is critical and often used in conjunction with others to create complex micro-devices. Further study into the specific parameters, materials, and equipment for each process is recommended for a deeper understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
