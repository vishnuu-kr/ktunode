---
title: "Lithography - Photo lithographic sequence"
subject: "VLSI CIRCUIT DESIGN"
module: "Module 2: Fabrication techniques:  Material Preparation Purification and Crystal growth (CZ process)"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefc2"
status: "completed"
scrapedAt: "2026-05-23T18:03:35.576Z"
---
## VLSI CIRCUIT DESIGN: Module 2 - Fabrication Techniques: Lithography - Photo-lithographic Sequence

---

### **Module Objective:**

This module introduces the fundamental fabrication techniques used in VLSI circuit design, focusing on material preparation, purification, crystal growth, and the intricate process of lithography. Understanding these processes is crucial for realizing integrated circuits as described in **CO2: Describe VLSI fabrication techniques.**

---

### **Topic: Lithography - Photo-lithographic Sequence**

**Learning Outcome:**

*   Understand the photo-lithographic sequence as a key technique in VLSI fabrication.
*   Explain the steps involved in the photo-lithographic process.
*   Identify the critical parameters and challenges associated with each step.

---

### **1. Introduction to Lithography**

Lithography is the process of transferring a geometric pattern from a mask to a wafer. In VLSI, this pattern defines the features of the transistors, interconnects, and other components on the integrated circuit. Photo-lithography, also known as optical lithography, is the most widely used lithographic technique in semiconductor manufacturing due to its precision, speed, and cost-effectiveness. It leverages light to transfer patterns.

**Key Concept:** Lithography is akin to "printing" circuit patterns onto the silicon wafer.

**References:**
*   **Sze (VLSI Technology, 2/e):** Chapter 4 discusses lithography in detail, covering masks, light sources, and the exposure process.
*   **Wolf (Modern VLSI Design, 4/e):** Chapter 5 provides an overview of fabrication processes, including lithography as a critical step for defining features.

---

### **2. The Photo-lithographic Sequence: Step-by-Step**

The photo-lithographic process is a multi-step sequence, each step requiring precise control for successful pattern transfer.

#### **2.1. Wafer Preparation and Cleaning**

Before any patterning can occur, the silicon wafer must be meticulously prepared and cleaned to remove any contaminants that could interfere with subsequent steps.

*   **Wafer Cleaning:**
    *   **Purpose:** To remove particles, organic residues, metallic contaminants, and native oxides from the wafer surface.
    *   **Methods:** Wet chemical cleaning (e.g., RCA clean using SC-1 and SC-2 solutions), plasma cleaning.
    *   **Importance:** Contamination can lead to process failures, reduced yield, and device degradation.

*   **Wafer Surface Treatment:**
    *   **Purpose:** To promote adhesion of the photoresist to the wafer surface.
    *   **Methods:** HMDS (Hexamethyldisilazane) dehydration bake, surface priming with adhesion promoters.

**Important Point:** A perfectly clean and appropriately prepared wafer surface is paramount for successful lithography.

#### **2.2. Photoresist Coating**

Photoresist is a light-sensitive polymer that is applied to the wafer surface.

*   **Photoresist:** A viscous liquid that hardens upon exposure to UV light (for positive photoresist) or becomes soluble in specific developers (for negative photoresist).
*   **Coating Method:**
    *   **Spin Coating:** The wafer is spun at high speed while a small amount of photoresist is dispensed onto the center. Centrifugal force spreads the resist evenly across the wafer.
    *   **Thickness Control:** The spin speed and resist viscosity determine the thickness of the photoresist layer. Uniformity is critical.
*   **Soft Bake (Pre-bake):**
    *   **Purpose:** To evaporate the solvent from the photoresist, solidifying the layer and improving adhesion.
    *   **Temperature:** Typically between 90-120°C.

**Example:** For a 0.5 µm feature size, a photoresist thickness of around 1 µm might be used, achieved through careful control of spin speed and resist viscosity.

#### **2.3. Mask Alignment**

The photomask, containing the desired pattern, is precisely aligned with the existing features on the wafer. This is a critical step for multi-layer devices.

*   **Photomask:** A transparent plate (usually quartz) with an opaque pattern (typically chromium) representing the circuit layout.
*   **Alignment:** Sophisticated alignment systems use fiducial marks on the mask and wafer to achieve sub-micron alignment accuracy.
*   **Types of Alignment:**
    *   **Global Alignment:** Aligns the entire wafer based on patterns on the wafer itself.
    *   **Die-to-Die Alignment:** Aligns each individual die on the wafer.

**Importance:** Misalignment can lead to short circuits or open circuits between layers, rendering the device non-functional.

#### **2.4. Exposure**

Light is used to transfer the pattern from the mask to the photoresist.

*   **Light Source:**
    *   **Historically:** Mercury vapor lamps (g-line, i-line).
    *   **Currently:** Deep Ultraviolet (DUV) excimer lasers (KrF at 248 nm, ArF at 193 nm) are commonly used. Extreme Ultraviolet (EUV) lithography (13.5 nm) is used for the most advanced nodes.
*   **Exposure Tool:**
    *   **Contact Lithography:** The mask is in direct contact with the photoresist. High resolution but can damage the mask and wafer.
    *   **Proximity Lithography:** A small gap exists between the mask and wafer. Less damage but lower resolution due to diffraction.
    *   **Projection Lithography:** A lens system is used to project a reduced image of the mask onto the wafer. This is the most common method for high-resolution lithography.
*   **Types of Photoresist:**
    *   **Positive Photoresist:** Exposed areas become soluble in the developer. The pattern transferred to the resist is the same as the mask.
    *   **Negative Photoresist:** Exposed areas become insoluble in the developer. The pattern transferred to the resist is the inverse of the mask.
*   **Exposure Dose:** The amount of light energy delivered to the photoresist. Crucial for proper development.

**Example:** Using ArF excimer laser (193 nm) for DUV lithography allows for the creation of very small features.

#### **2.5. Post-Exposure Bake (PEB)**

A bake after exposure can improve the resolution and sidewall profile of the developed resist pattern.

*   **Purpose:** To reduce standing wave effects (interference of reflected light within the resist layer) and to drive chemical reactions in chemically amplified resists.
*   **Temperature:** Usually higher than soft bake (e.g., 100-130°C).

#### **2.6. Development**

The exposed wafer is immersed in a developer solution.

*   **Developer:** A chemical solution that selectively dissolves either the exposed (positive resist) or unexposed (negative resist) portions of the photoresist.
*   **Process:** Immersion, spray, or puddle development.
*   **Result:** The pattern from the mask is replicated in the photoresist layer.

**Important Point:** The choice of developer and development time is critical for achieving the desired resist profile and pattern fidelity.

#### **2.7. Post-bake (Hard Bake)**

A final bake to further harden the remaining photoresist.

*   **Purpose:** To improve the etch resistance and mechanical stability of the photoresist pattern, making it more robust for subsequent processing steps.
*   **Temperature:** Higher than soft bake and PEB (e.g., 120-150°C).

#### **2.8. Inspection**

After development, the wafer is inspected for defects.

*   **Purpose:** To check for pattern fidelity, critical dimension (CD) uniformity, registration (alignment accuracy), and defects (e.g., particles, missing features, bridging).
*   **Tools:** Optical microscopes, scanning electron microscopes (SEM), automated optical inspection (AOI) systems.

#### **2.9. Etching or Other Pattern Transfer Processes**

The patterned photoresist acts as a mask for subsequent processing steps, typically etching or ion implantation.

*   **Etching:** The exposed material (e.g., silicon dioxide, polysilicon) is selectively removed.
    *   **Wet Etching:** Uses liquid etchants. Isotropic (etches in all directions), leading to undercutting.
    *   **Dry Etching (Plasma Etching):** Uses plasma to remove material. Anisotropic (etches primarily in the vertical direction), allowing for finer features. Reactive Ion Etching (RIE) is a common dry etching technique.
*   **Ion Implantation:** Dopant ions are implanted into the wafer in the areas not protected by photoresist.

#### **2.10. Photoresist Stripping**

Once the pattern transfer is complete, the photoresist is removed.

*   **Purpose:** To remove the remaining photoresist layer.
*   **Methods:** Wet chemical stripping (e.g., using solvents like acetone or specialized strippers), plasma stripping (ashing).

**Important Point:** Complete removal of photoresist is essential to prevent contamination in subsequent steps.

---

### **3. Key Concepts and Definitions**

*   **Photoresist:** A light-sensitive material used to transfer patterns.
*   **Photomask:** A template containing the circuit pattern.
*   **Resolution:** The smallest feature size that can be reliably reproduced.
*   **Alignment:** The accuracy with which patterns from different layers are superimposed.
*   **CD (Critical Dimension):** The minimum feature size in a circuit.
*   **UV (Ultraviolet) Light:** Electromagnetic radiation used for exposure.
*   **Developer:** A chemical solution that selectively removes exposed or unexposed photoresist.
*   **Etching:** The process of selectively removing material.
*   **Anisotropic Etching:** Etching that occurs primarily in one direction (vertical).
*   **Isotropic Etching:** Etching that occurs equally in all directions.
*   **Defect:** An unintended anomaly in the pattern or wafer.

---

### **4. Factors Affecting Lithographic Performance**

*   **Wavelength of Light:** Shorter wavelengths enable higher resolution (e.g., EUV < DUV < i-line).
*   **Numerical Aperture (NA) of the Projection Lens:** Higher NA increases resolution (Resolution $\propto \lambda / NA$).
*   **Photoresist Properties:** Sensitivity, contrast, adhesion, and etch resistance.
*   **Process Control:** Uniformity of photoresist coating, accuracy of exposure dose, development time, and bake temperatures.
*   **Mask Quality:** Accuracy of the pattern on the mask.
*   **Optical Proximity Effects (OPE):** Diffraction and interference effects that can distort the pattern, especially for small features. These are mitigated by techniques like Optical Proximity Correction (OPC).

---

### **5. Practice Questions and Exercises**

1.  **What is the primary purpose of lithography in VLSI fabrication?**
    *   **Answer:** To transfer a geometric pattern from a mask to the wafer, defining the features of the integrated circuit.

2.  **Describe the key differences between positive and negative photoresists.**
    *   **Answer:** Positive photoresist becomes soluble in developer after exposure, transferring the mask pattern directly. Negative photoresist becomes insoluble after exposure, transferring the inverse of the mask pattern.

3.  **Explain why wafer cleaning is a critical first step in the photo-lithographic sequence.**
    *   **Answer:** Contaminants on the wafer surface can cause defects, reduce adhesion of the photoresist, lead to pattern inaccuracies, and ultimately cause device failure.

4.  **You are designing a new generation of chips requiring very small features. Which type of light source would be most suitable for lithography and why?**
    *   **Answer:** Extreme Ultraviolet (EUV) lithography with a wavelength of 13.5 nm would be most suitable. Shorter wavelengths of light allow for higher resolution, enabling the printing of smaller features.

5.  **What is the role of the soft bake and hard bake in the photo-lithographic process?**
    *   **Answer:** Soft bake (pre-bake) evaporates the solvent from the photoresist, solidifying and improving its adhesion. Hard bake further hardens the resist to improve its resistance to etching and mechanical stress during subsequent processing.

6.  **Consider the formula for lithographic resolution: Resolution $\propto \lambda / NA$. How can you improve the resolution using this formula? (2 marks)**
    *   **Answer:** To improve resolution, you can either decrease the wavelength ($\lambda$) of the light used or increase the Numerical Aperture (NA) of the projection lens.

---

### **6. Important Points to Remember**

*   Lithography is the foundation of defining patterns in VLSI.
*   Each step in the photo-lithographic sequence must be precisely controlled for successful pattern transfer.
*   Cleanliness is paramount throughout the entire process.
*   The choice of photoresist and light source significantly impacts the achievable resolution.
*   Alignment accuracy is crucial for multi-layer fabrication.
*   Dry etching (anisotropic) is preferred over wet etching (isotropic) for defining fine features.

---

### **7. Alignment with Course Outcomes (COs)**

*   **CO1: Explain VLSI design methodologies including ASIC types, SoC and FPGA devices, design flows, methodologies.**
    *   While this topic directly focuses on fabrication, understanding lithography is essential for appreciating the limitations and capabilities of design methodologies. For example, the resolution achievable by lithography dictates the minimum feature sizes designers can use, influencing the density and complexity of ASICs and SoCs.
*   **CO2: Describe VLSI fabrication techniques.**
    *   This module directly addresses **CO2** by detailing the step-by-step photo-lithographic sequence, a core fabrication technique.
*   **CO3: Design, analyse and create the layout of static CMOS logic circuits adhering to design rules and specifications.**
    *   Layout designers must be aware of the lithographic capabilities and design rules (e.g., minimum feature size, spacing) imposed by the fabrication process to create manufacturable circuits. Lithography directly influences these rules.
*   **CO4: Design and analysis of dynamic logic circuits and the implementation of basic storage cells.**
    *   Similar to CO3, the physical implementation of dynamic logic and storage cells (like SRAM) relies on the capabilities of lithography to create the small, precisely positioned transistors and interconnects required for these circuits.

---

This concludes the study notes for Lithography - Photo-lithographic Sequence. Thoroughly understanding these steps will provide a strong foundation for comprehending the fabrication of complex integrated circuits.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
