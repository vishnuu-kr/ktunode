---
title: "Pipes- Size and wall thickness specification, Type of pipes based on manufacturing technique"
subject: "PRESSURE VESSEL AND PIPING DESIGN"
module: "Module 4: Pipes"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464405"
status: "completed"
scrapedAt: "2026-05-20T18:23:36.605Z"
---
# Module 4: Pipes - Size and Wall Thickness Specification, Type of Pipes based on Manufacturing Technique

This module delves into the crucial aspects of selecting and specifying pipes for pressure vessel and piping systems, focusing on their size, wall thickness, and the impact of manufacturing techniques on their properties. Understanding these elements is vital for ensuring the integrity, safety, and efficiency of the entire system.

## Learning Outcomes:

Upon successful completion of this module, you will be able to:

*   Understand the fundamental principles governing pipe size and wall thickness selection.
*   Identify and differentiate between various types of pipes based on their manufacturing techniques.
*   Relate pipe manufacturing methods to their properties and suitability for specific applications.
*   Apply relevant design codes and standards for pipe specification.

## Course Outcomes Alignment:

This module directly contributes to the following Course Outcomes:

*   **CO1 (K2):** While CO1 focuses on pressure vessel shells, the principles of pressure containment and material behavior discussed in this module are foundational. Understanding pipe selection is an extension of this general knowledge of pressure containment.
*   **CO4 (K3):** This module is highly relevant to CO4, as pipe size, wall thickness, and manufacturing method directly influence pipe stress and flexibility analysis. Fracture-based design concepts also rely on understanding the material properties inherent in different pipe types.

## 1. Pipes - Size and Wall Thickness Specification

The selection of appropriate pipe size and wall thickness is a critical step in piping design. It involves balancing operational requirements, safety considerations, and economic factors.

### 1.1. Pipe Size Specification

Pipe size is typically specified by its **Nominal Pipe Size (NPS)** or **Nominal Bore (NB)** and its **Outside Diameter (OD)**.

*   **Nominal Pipe Size (NPS) / Nominal Bore (NB):**
    *   NPS is a dimensionless designation for pipes used in the United States and Canada. It is related to the inside diameter but is not a direct measurement.
    *   NB is used in India and some other countries and is generally synonymous with NPS.
    *   For NPS 1/8 to NPS 12, the NPS designation is not directly related to the actual OD. The OD is larger than the NPS.
    *   For NPS 14 and larger, the NPS designation is equal to the OD in inches.
    *   **Important Point:** Always refer to pipe dimension tables (e.g., ASME B36.10M for carbon steel, ASME B36.19M for stainless steel) to find the actual OD and wall thickness for a given NPS.

*   **Outside Diameter (OD):**
    *   The external diameter of the pipe.
    *   For NPS 14 and above, NPS = OD.

*   **Inside Diameter (ID):**
    *   The internal diameter of the pipe.
    *   ID = OD - 2 * Wall Thickness.

**Example:**
For an NPS 6 pipe, the actual OD is 6.625 inches.
For an NPS 14 pipe, the actual OD is 14.000 inches.

**Reference:**
*   **ASME B36.10M:** Welded and Seamless Wrought Steel Pipe. This standard provides dimensions, tolerances, and markings for welded and seamless carbon and alloy steel pipes.
*   **ASME B36.19M:** Stainless Steel Pipe. This standard provides dimensions and tolerances for stainless steel pipes.

### 1.2. Wall Thickness Specification

Pipe wall thickness is a crucial parameter that determines the pipe's strength and ability to withstand internal pressure, external loads, and corrosive environments.

*   **Schedule (SCH):**
    *   For NPS 1/8 to NPS 12, wall thickness is designated by **Schedule (SCH)**.
    *   Schedule is a series of sizes that indicate the wall thickness for a given pipe size. It is related to the internal pressure and the allowable stress of the material.
    *   **Higher Schedule Number = Thicker Wall.**
    *   There is no simple direct relationship between Schedule number and actual wall thickness across all NPS.
    *   **Important Point:** For a given NPS, different schedules will result in different ODs and wall thicknesses. This is a common point of confusion.

*   **Wall Thickness (WT):**
    *   For NPS 14 and larger, the wall thickness is often specified directly in inches or millimeters.
    *   However, even for these sizes, standard wall thicknesses are defined by schedules (e.g., SCH 40, SCH 80 for NPS 14 and above).

*   **Relationship between NPS, Schedule, OD, and WT:**
    *   The relationship between NPS, Schedule, OD, and WT is governed by the **American Iron and Steel Institute (AISI)** formulas or, more commonly, by **ASME B36.10M** and **ASME B36.19M**.
    *   The basic formula for calculating the minimum required wall thickness (t) for internal pressure is derived from Barlow's formula or more refined formulas from design codes like ASME B31.3 (Process Piping).

    *   **Barlow's Formula (Simplified):**
        *   $t = \frac{P \times OD}{2 \times S \times E + P}$
        Where:
            *   $t$ = minimum wall thickness (inches)
            *   $P$ = internal design pressure (psi)
            *   $OD$ = outside diameter of the pipe (inches)
            *   $S$ = allowable stress of the material at design temperature (psi)
            *   $E$ = longitudinal weld joint efficiency factor (typically 1.0 for seamless, less for welded)

    *   **ASME B31.3 (Process Piping) Formula for minimum required thickness for internal pressure:**
        *   $t_m = \frac{P \times D_o}{2 \times (S \times E + P \times Y)} + C_a$
        Where:
            *   $t_m$ = minimum required wall thickness (inches)
            *   $P$ = internal design pressure (psi)
            *   $D_o$ = outside diameter of pipe (inches)
            *   $S$ = allowable stress value for the material at the design temperature (psi)
            *   $E$ = longitudinal weld joint quality factor (from ASME B31.3)
            *   $Y$ = longitudinal stress reduction factor (from ASME B31.3, dependent on material and temperature)
            *   $C_a$ = allowance for corrosion, erosion, and threading (inches)

*   **Design Considerations for Wall Thickness:**
    *   **Internal Pressure:** The primary driver for wall thickness.
    *   **External Pressure:** For vacuum services, external pressure needs to be considered, which might require thicker walls or external stiffening.
    *   **Thermal Expansion/Contraction:** While not directly affecting wall thickness, flexibility analysis (covered in CO4) determines the need for expansion loops or joints, indirectly impacting pipe routing and thus the need for specific pipe sizes.
    *   **Mechanical Loads:** External loads like weight, wind, seismic forces.
    *   **Corrosion/Erosion Allowance:** An additional thickness is added to account for material loss over the service life.
    *   **Manufacturing Tolerances:** Actual wall thickness is usually greater than the specified minimum.
    *   **Support Spacing:** Longer unsupported spans may require thicker pipes to prevent sagging.

**Important Points to Remember:**
*   Always use the appropriate ASME B36.10M or B36.19M tables to determine actual OD and WT for a given NPS and Schedule.
*   The design pressure, material properties (allowable stress), temperature, and corrosion allowance are crucial inputs for calculating the required wall thickness using applicable codes.
*   For pipes NPS 14 and larger, specifying OD and wall thickness directly might be more common than using schedules.

### 1.3. Practice Questions

**Question 1:** A process requires an NPS 8 pipe. What is the outside diameter of this pipe according to ASME B36.10M?
**Answer:** For NPS 8, the OD is 8.625 inches.

**Question 2:** For an NPS 6 pipe, what is the wall thickness for Schedule 40 and Schedule 80 pipes, respectively, according to ASME B36.10M?
**Answer:** For NPS 6:
*   Schedule 40: Wall thickness = 0.280 inches
*   Schedule 80: Wall thickness = 0.375 inches

**Question 3:** If you need a pipe with an outside diameter of 10.75 inches and a minimum wall thickness of 0.365 inches, what NPS and Schedule would you typically specify according to ASME B36.10M?
**Answer:** According to ASME B36.10M tables, an NPS 8 pipe has an OD of 8.625 inches. However, an NPS 10 pipe has an OD of 10.75 inches. For NPS 10, Schedule 80 has a nominal wall thickness of 0.365 inches. Therefore, you would specify NPS 10, Schedule 80.

## 2. Type of Pipes based on Manufacturing Technique

Pipes are manufactured using various techniques, each imparting distinct characteristics that influence their suitability for different applications. The primary distinction is between seamless and welded pipes.

### 2.1. Seamless Pipes

Seamless pipes are manufactured without any welding or seam. They are produced by piercing a solid billet of steel and then drawing it over a mandrel to achieve the desired dimensions.

*   **Manufacturing Process:**
    1.  **Piercing:** A hot solid billet is forced over a piercing point (mandrel) by a rotary piercing mill (e.g., Mannesmann process). This creates a hollow shell.
    2.  **Elongating/Rolling:** The hollow shell is then passed through a series of rolling operations (e.g., plug mill, mandrel mill, hot-finishing mill) to reduce the wall thickness and diameter, and improve surface finish and dimensional accuracy.
    3.  **Finishing:** The pipe may undergo further finishing processes like straightening, cutting, heat treatment, and inspection.

*   **Advantages:**
    *   **Uniform Wall Thickness:** Generally have more uniform wall thickness and better dimensional accuracy compared to some welded pipes.
    *   **Higher Strength:** Lack of a weld seam makes them inherently stronger and more resistant to bursting under pressure.
    *   **Corrosion Resistance:** Uniform structure can offer better resistance to certain forms of corrosion that might initiate at weld defects.
    *   **Suitable for High Pressure/Temperature:** Preferred for critical applications involving high pressures, high temperatures, and corrosive services.

*   **Disadvantages:**
    *   **Higher Cost:** Manufacturing process is more complex, leading to higher costs.
    *   **Limited Sizes:** Available in a more limited range of sizes and wall thicknesses compared to welded pipes.
    *   **Potential for Ovality:** Can sometimes have slight ovality in cross-section.

*   **Typical Applications:**
    *   High-pressure steam lines
    *   Hydraulic systems
    *   Boiler tubes
    *   Oil and gas pipelines (especially in critical sections)
    *   Heat exchangers

*   **Reference:**
    *   **Theory and Design of Pressure Vessels by John F. Harvey:** Discusses material properties and their impact on design, implicitly covering why seamless pipes are often preferred for high-stress applications.
    *   **Pressure Vessel Design Manual by Dennis R. Moss:** Often refers to using seamless pipe for critical components in pressure vessel construction.

### 2.2. Welded Pipes

Welded pipes are formed by shaping a flat metal strip or plate into a tubular form and then joining the edges by welding.

*   **Types of Welded Pipes based on Welding Method:**

    *   **a) Electric Resistance Welding (ERW):**
        *   **Process:** A flat strip of steel is formed into a cylindrical shape, and the edges are brought together under pressure. An electric current is passed through the edges, heating them to a plastic state, and the seam is forged together.
        *   **Sub-types:**
            *   **High-Frequency Induction (HFI) / High-Frequency Resistance (HFR):** Uses high-frequency current to heat the edges, resulting in a narrower heat-affected zone and a stronger weld. This is the most common and preferred ERW method.
            *   **Low-Frequency Resistance Welding:** Less common now due to lower weld quality.
        *   **Advantages:** Economical for large volumes, good dimensional accuracy, suitable for medium pressures.
        *   **Disadvantages:** Weld seam can be a point of weakness, potential for defects in the weld, not typically used for very high-pressure or high-temperature applications where seamless is preferred.
        *   **Reference:**
            *   **Process Equipment Design by Brownell, L. E., and Young, E. H.:** Might discuss the selection criteria for welded pipe in process equipment, considering cost and performance.

    *   **b) Submerged Arc Welding (SAW):**
        *   **Process:** The seam is welded by an electric arc that is submerged under a blanket of granular fusible material (flux). This protects the weld pool from atmospheric contamination and produces a high-quality, deep-penetrating weld.
        *   **Sub-types:**
            *   **Longitudinal Submerged Arc Welding (LSAW):** The seam runs along the length of the pipe. Typically made from steel plates.
            *   **Helical/Spiral Submerged Arc Welding (HSAW):** The seam is formed in a spiral path around the pipe. This allows for the production of larger diameter pipes from narrower steel plates.
        *   **Advantages:** Capable of producing thick-walled pipes, suitable for large diameters, high production rates, excellent weld quality, can be used for higher pressures and temperatures than ERW.
        *   **Disadvantages:** Higher cost than ERW, potential for inclusions or porosity if flux is not properly controlled.
        *   **Reference:**
            *   **Pressure Vessels Design and practice by SomnathChathopadhyay:** May cover the application of SAW pipes in pressure vessel construction or related piping.

    *   **c) Other Welding Processes:**
        *   **Fusion Welding (e.g., GTAW/TIG, GMAW/MIG):** While not as common for large-scale pipe manufacturing as ERW or SAW, these processes are used for specific alloys or smaller diameter pipes where high-quality welds are paramount.

*   **Advantages of Welded Pipes (General):**
    *   **Cost-Effective:** Generally less expensive to manufacture than seamless pipes, especially for large volumes and larger diameters.
    *   **Wide Range of Sizes:** Available in a broader range of diameters and wall thicknesses, particularly LSAW and HSAW for large diameters.
    *   **Consistent OD:** Often have a more consistent OD for a given size.

*   **Disadvantages of Welded Pipes (General):**
    *   **Weld Seam Integrity:** The weld seam is a potential point of failure if not manufactured and inspected properly.
    *   **Weld Defects:** Can have defects like porosity, inclusions, or lack of fusion.
    *   **Less Uniform Mechanical Properties:** Mechanical properties across the weld can differ from the base metal.

*   **Important Points to Remember:**
    *   The choice between seamless and welded pipe depends heavily on the application's pressure, temperature, corrosive environment, and cost considerations.
    *   For critical applications, seamless pipes are often preferred.
    *   For large diameter, high-volume applications where cost is a major factor, welded pipes (especially SAW) can be suitable if weld integrity is assured through rigorous quality control and testing.
    *   Design codes (e.g., ASME B31.3, ASME Section VIII) specify requirements for both seamless and welded pipes, including allowable stress values and weld joint efficiency factors.

### 2.3. Practice Questions

**Question 4:** What is the primary advantage of using seamless pipes over welded pipes in high-pressure applications?
**Answer:** Seamless pipes lack a weld seam, making them inherently stronger and more resistant to bursting under pressure, making them ideal for high-pressure applications.

**Question 5:** Briefly describe the manufacturing process of High-Frequency Induction (HFI) ERW pipes.
**Answer:** In HFI ERW, a flat steel strip is formed into a cylinder, and high-frequency electric current is used to heat the edges to a plastic state. The edges are then forged together to form a weld.

**Question 6:** For a project requiring large-diameter pipes (e.g., 24 inches NPS and above) for moderate pressure service, which manufacturing technique would likely be more economical and practical, and why?
**Answer:** Welded pipes, specifically those manufactured using Submerged Arc Welding (SAW) like LSAW or HSAW, would likely be more economical and practical for large-diameter pipes. SAW allows for the production of thick walls and large diameters from plates efficiently, and it offers good weld quality suitable for moderate pressure services.

## 3. Relevance to Course Outcomes

*   **CO1 (K2):** Understanding pipe types and their properties directly relates to the general design considerations of pressure containment. Knowing that seamless pipes are preferred for higher pressures helps in the broader understanding of pressure vessel design principles.
*   **CO4 (K3):** This module is directly aligned with CO4.
    *   **Pipe Stress and Flexibility Analysis:** The manufacturing method (seamless vs. welded) affects the material's properties and potential failure modes. The size and wall thickness directly influence the pipe's stiffness, flexibility, and its ability to withstand stresses under internal pressure, thermal expansion, and external loads. This module provides the foundational knowledge for these analyses.
    *   **Fracture-Based Design Concepts:** The presence or absence of a weld seam, and the quality of that seam in welded pipes, are critical factors in fracture mechanics. Understanding the potential for crack initiation and propagation at welds is vital for fracture-based design.

## Key Takeaways and Summary

*   **Pipe Size:** Specified by NPS (or NB) and actual OD. Always refer to ASME B36.10M/B36.19M.
*   **Wall Thickness:** Specified by Schedule (SCH) for smaller NPS, or directly as WT for larger NPS. Calculated based on pressure, material properties, and code requirements.
*   **Seamless Pipes:** Preferred for high pressure, high temperature, and critical applications due to their inherent strength and uniform structure. They are generally more expensive.
*   **Welded Pipes:** Cost-effective for large volumes and diameters. ERW (especially HFI) is common for medium pressures. SAW (LSAW/HSAW) is used for large diameters and thicker walls. Weld integrity is a crucial consideration.
*   **Design Codes:** ASME B31.3 (Process Piping) and ASME Section VIII (Pressure Vessels) are key standards that govern pipe selection and design, including material properties, allowable stresses, and weld joint factors.

This module provides the essential building blocks for understanding how to select and specify pipes in pressure vessel and piping systems, laying the groundwork for more advanced design and analysis in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
