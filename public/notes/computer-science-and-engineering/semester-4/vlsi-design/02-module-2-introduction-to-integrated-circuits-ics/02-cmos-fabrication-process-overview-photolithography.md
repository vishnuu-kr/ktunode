---
title: "CMOS fabrication process overview-  Photolithography"
subject: "VLSI DESIGN"
module: "Module 2: Introduction to Integrated Circuits (ICs):"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b2f8"
status: "completed"
scrapedAt: "2026-05-20T16:17:15.179Z"
---
# VLSI Design - Module 2: Introduction to Integrated Circuits (ICs)
## Topic: CMOS Fabrication Process Overview - Photolithography

**Learning Outcomes:**

*   Understand the role of photolithography in the CMOS fabrication process.
*   Describe the key steps involved in the photolithography process.
*   Explain the concepts of photoresists, masks, and resolution in photolithography.
*   Identify and understand common challenges and limitations of photolithography.
*   Differentiate between positive and negative photoresists.

### 1. Introduction to Photolithography

*   **Definition:** Photolithography, also known as optical lithography or UV lithography, is a process used in microfabrication to selectively remove parts of a thin film. It uses light to transfer a geometric pattern from a photomask to a light-sensitive chemical photoresist on the substrate.
*   **Role in CMOS Fabrication:** It's a crucial step in creating the intricate patterns that define the various layers of a CMOS integrated circuit (IC), such as transistors, interconnects, and insulating layers. Photolithography allows for precise patterning of materials on the silicon wafer.
*   **Why is it Important?** It provides high resolution and precise control over the dimensions of the structures created on the wafer, which is essential for achieving the desired performance and functionality of the IC.

### 2. Key Steps in Photolithography

*   **2.1 Wafer Cleaning:**
    *   Removes contaminants (particles, organic residues, metal ions) from the wafer surface. This is essential for proper photoresist adhesion and to prevent defects.
    *   Common cleaning methods include:
        *   RCA clean (a sequence of chemical washes).
        *   Piranha etch (sulfuric acid and hydrogen peroxide mixture).
        *   Plasma cleaning.
*   **2.2 Surface Preparation:**
    *   Ensures good adhesion of the photoresist to the wafer surface.
    *   Often involves dehydration baking to remove moisture.
    *   Sometimes, a primer (e.g., HMDS – Hexamethyldisilazane) is applied to promote adhesion.  HMDS makes the surface hydrophobic.
*   **2.3 Photoresist Coating:**
    *   A thin, uniform layer of photoresist is applied to the wafer surface.
    *   **Spin Coating:** The most common method. A liquid photoresist is dispensed onto the wafer, which is then rapidly rotated to spread the resist evenly.  The thickness depends on the viscosity of the resist and the spin speed.
    *   Photoresist thickness is crucial for resolution and etch resistance.
*   **2.4 Soft Baking (Prebake):**
    *   The wafer is heated to remove solvents from the photoresist and improve adhesion to the wafer.
    *   Important for creating a stable photoresist film.
    *   Temperature and time are carefully controlled to prevent unwanted chemical reactions.
*   **2.5 Mask Alignment and Exposure:**
    *   The photomask, containing the desired pattern, is aligned precisely above the wafer.
    *   The photoresist is exposed to UV light (or deep UV – DUV, or extreme UV – EUV in advanced technologies) through the photomask.
    *   **Mask Alignment:** Accurate alignment is critical for achieving proper overlay and ensuring that different layers in the IC are correctly positioned relative to each other.
    *   **Exposure Systems:**
        *   **Contact Printing:** Mask is in direct contact with the wafer (high resolution, but damages the mask and wafer).
        *   **Proximity Printing:** Mask is held close to the wafer (less damage, but lower resolution).
        *   **Projection Printing (Steppers/Scanners):** A lens system projects the mask pattern onto the wafer (high resolution, less damage, most common).  Steppers expose one field at a time, while scanners scan the mask and wafer simultaneously.
*   **2.6 Post-Exposure Bake (PEB):**
    *   (Optional, but commonly used, especially for chemically amplified resists)
    *   A thermal step performed after exposure to promote chemical reactions in the photoresist, which enhance the contrast between exposed and unexposed regions.
    *   Especially critical for chemically amplified resists (CARs), which are commonly used in advanced technologies. CARs rely on a photoacid generator (PAG) within the resist. Upon exposure, the PAG generates an acid, which then catalyzes a chemical reaction during the PEB to change the solubility of the resist.
*   **2.7 Development:**
    *   The exposed (or unexposed, depending on the photoresist type) photoresist is selectively dissolved in a developer solution.
    *   The developer removes the unwanted photoresist, leaving the desired pattern on the wafer.
    *   The type of developer used depends on the type of photoresist (e.g., TMAH – Tetramethylammonium hydroxide for positive resists).
*   **2.8 Hard Baking (Postbake):**
    *   The wafer is heated to further harden the remaining photoresist and improve its adhesion to the wafer, as well as its resistance to subsequent etching processes.
    *   Also removes residual developer.
*   **2.9 Etching:**
    *   The patterned photoresist acts as a mask for etching the underlying material.
    *   **Wet Etching:** Uses liquid chemicals to remove material (isotropic etching – etches in all directions).
    *   **Dry Etching (Plasma Etching):** Uses plasma to remove material (anisotropic etching – etches primarily in one direction). More precise and commonly used in modern fabrication.
    *   Examples: Reactive Ion Etching (RIE), Deep Reactive Ion Etching (DRIE).
*   **2.10 Photoresist Stripping:**
    *   After etching, the remaining photoresist is removed from the wafer.
    *   Common methods include:
        *   Wet stripping (using solvents like acetone or photoresist strippers).
        *   Dry stripping (using oxygen plasma).

### 3. Key Concepts and Definitions

*   **Photoresist:** A light-sensitive material used to create a pattern on a substrate.
*   **Photomask (Mask or Reticle):** A transparent plate (usually glass or quartz) containing opaque patterns that define the features to be transferred to the wafer.
*   **Resolution:** The smallest feature size that can be reliably patterned using photolithography. Limited by diffraction, wavelength of light, and numerical aperture of the lens.
*   **Numerical Aperture (NA):**  A measure of the light-gathering ability of a lens. Higher NA provides better resolution.
*   **Depth of Focus (DOF):** The range of distances over which the image remains in focus.  Higher resolution typically comes at the expense of a smaller DOF.
*   **Overlay:** The accuracy with which different layers are aligned to each other.
*   **Wavelength of Light (λ):**  Shorter wavelengths enable higher resolution (e.g., moving from UV to DUV to EUV).
*   **K1 Factor:** A process-dependent factor that relates resolution to wavelength and numerical aperture (Resolution = K1 * λ / NA). Lower K1 allows for smaller feature sizes, and requires sophisticated resolution enhancement techniques (RETs).
*   **Critical Dimension (CD):** The width or length of a feature on the wafer. Precise control of CD is essential for device performance.
*   **Etch Selectivity:** The ratio of the etch rate of the target material to the etch rate of the photoresist or other masking material. High selectivity is desirable to prevent excessive erosion of the photoresist.

### 4. Types of Photoresists

*   **Positive Photoresist:**  The exposed areas become soluble in the developer, while the unexposed areas remain insoluble. The pattern on the mask is transferred directly to the wafer.
*   **Negative Photoresist:** The exposed areas become insoluble in the developer, while the unexposed areas are dissolved. The pattern on the mask is inverted on the wafer.
*   **Chemically Amplified Resists (CARs):**  Utilize a photoacid generator (PAG) to amplify the effect of exposure. Upon exposure to light, the PAG generates an acid, which catalyzes a chemical reaction during the PEB, leading to a change in solubility. CARs are highly sensitive and used in advanced technologies.

**Comparison of Positive and Negative Photoresists:**

| Feature          | Positive Photoresist                                   | Negative Photoresist                                     |
|-------------------|--------------------------------------------------------|----------------------------------------------------------|
| Exposed Areas     | Becomes soluble, removed by developer               | Becomes insoluble, remains after development             |
| Unexposed Areas   | Remains insoluble, not removed by developer            | Becomes soluble, removed by developer                    |
| Pattern Transfer  | Direct (mask pattern is transferred directly)       | Inverted (mask pattern is inverted)                       |
| Resolution        | Generally better resolution for fine features         | Generally lower resolution                               |
| Adhesion          | Can have adhesion issues with some substrates        | Generally better adhesion                                |
| Sensitivity       | Typically lower sensitivity than negative resists     | Typically higher sensitivity than positive resists         |
| Applications      | High-resolution applications, fine-line features       | General-purpose applications, larger features              |
| Shelf Life        | Longer shelf life generally                           | Shorter shelf life generally                            |

### 5. Challenges and Limitations of Photolithography

*   **Diffraction:** The spreading of light waves as they pass through an aperture (the mask), limiting the resolution.  Shorter wavelengths and higher NA lenses help mitigate diffraction.
*   **Depth of Focus:**  As resolution increases (smaller feature sizes), the depth of focus decreases, making it more difficult to maintain focus across the entire wafer.
*   **Mask Defects:** Imperfections on the photomask can be transferred to the wafer, causing defects in the IC.
*   **Overlay Errors:** Misalignment between different layers can lead to malfunctioning devices.
*   **Photoresist Issues:**
    *   **Adhesion:** Poor adhesion can cause the photoresist to peel off during processing.
    *   **Etch Resistance:**  The photoresist must be resistant to the etching process.
    *   **Contamination:**  Photoresist can be contaminated by particles or chemicals.
*   **Cost:** Photolithography equipment and materials are expensive.
*   **Resolution Enhancement Techniques (RETs):**  Techniques like Optical Proximity Correction (OPC), Phase-Shift Masks (PSM), and Off-Axis Illumination (OAI) are used to improve resolution and process window, but they add complexity and cost.
*   **EUV Lithography:** While promising for future generations of ICs, EUV lithography faces challenges such as source power, cost, and resist development.

### 6. Examples

*   **Creating a Transistor Gate:** Photolithography is used to define the gate electrode of a transistor. A thin layer of gate oxide is grown on the silicon wafer, followed by deposition of polysilicon.  Photolithography is then used to pattern the polysilicon, defining the gate.
*   **Forming Interconnects:** After depositing a metal layer (e.g., aluminum or copper), photolithography is used to pattern the metal, creating the interconnects that connect different devices on the chip.
*   **Creating Vias:** Vias (vertical interconnect access) are used to connect different metal layers. Photolithography is used to pattern the insulating layer between the metal layers, creating openings for the vias to be formed.

### 7. Important Points to Remember

*   Photolithography is a fundamental process in CMOS fabrication.
*   Understanding the steps involved is crucial for VLSI design and manufacturing.
*   Resolution, overlay, and defect control are key considerations.
*   Different types of photoresists have different properties and applications.
*   Photolithography faces ongoing challenges as feature sizes shrink.

### 8. Practice Questions/Exercises

1.  **What is the role of photolithography in CMOS fabrication?**
    *   *Answer:* To transfer patterns from a mask onto the wafer surface, defining the various layers of the IC.

2.  **Describe the main steps involved in photolithography.**
    *   *Answer:* Wafer cleaning, surface preparation, photoresist coating, soft baking, mask alignment and exposure, post-exposure bake (PEB, optional), development, hard baking, etching, and photoresist stripping.

3.  **What are the differences between positive and negative photoresists?**
    *   *Answer:* In positive photoresist, exposed areas become soluble, while in negative photoresist, exposed areas become insoluble.  Positive resists generally offer better resolution, while negative resists have better adhesion.

4.  **What is the purpose of a post-exposure bake (PEB) in photolithography?**
    *   *Answer:* To promote chemical reactions in the photoresist, particularly in chemically amplified resists (CARs), enhancing the contrast between exposed and unexposed regions and improving the resist's sensitivity and resolution.

5.  **What are some of the limitations of photolithography?**
    *   *Answer:* Diffraction, depth of focus, mask defects, overlay errors, and photoresist issues.

6.  **Explain the concept of Resolution in Photolithography.**
   * *Answer:* The smallest feature size that can be reliably patterned using photolithography. It's crucial for the performance of the final IC.  It is dependent on the wavelength of light used for exposure and the numerical aperture of the lens system. Resolution = K1 * λ / NA.

7. **What are the advantages of using Dry Etching (Plasma Etching) over Wet Etching for VLSI Fabrication?**
 *Answer:* Dry etching is anisotropic, enabling more precise pattern transfer and vertical sidewalls. Wet etching is isotropic, which can lead to undercutting and less precise feature definition.
