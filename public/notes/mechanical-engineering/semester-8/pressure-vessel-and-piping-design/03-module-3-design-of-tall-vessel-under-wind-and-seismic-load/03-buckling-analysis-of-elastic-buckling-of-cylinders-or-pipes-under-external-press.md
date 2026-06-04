---
title: "Buckling -Analysis of Elastic buckling of cylinders or pipes under external pressure- Design of Stiffeners for pressure vessel (Use relevant ASME codes and standard practices in pressure vessel design for the entire third module)"
subject: "PRESSURE VESSEL AND PIPING DESIGN"
module: "Module 3: Design of tall vessel under wind and seismic load"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464403"
status: "completed"
scrapedAt: "2026-05-20T18:23:35.900Z"
---
# Pressure Vessel and Piping Design - Module 3: Design of Tall Vessels under Wind and Seismic Loads

## Topic: Buckling - Analysis of Elastic Buckling of Cylinders or Pipes under External Pressure - Design of Stiffeners for Pressure Vessels

### Course Outcomes Addressed:
*   **CO1: Explain the design considerations of various shell type pressure vessels (Knowledge Level: K2)** - This topic contributes by explaining a crucial design consideration for cylindrical shells under external pressure.
*   **CO3: Apply design concepts in the design of shell and supports of vertical and horizontal pressure vessels and solve problems involving the thickness and stiffener support requirements of cylinders under buckling loads (Knowledge Level: K3)** - This topic directly addresses the core concepts of buckling analysis and stiffener design for cylinders under external pressure, enabling the application of these concepts in problem-solving.

### Learning Outcomes for this Topic:
*   Understand the phenomenon of elastic buckling in cylinders and pipes subjected to external pressure.
*   Learn the fundamental principles and equations governing the elastic buckling of thin-walled cylinders under external pressure, referencing relevant ASME codes and standards.
*   Identify the limitations of elastic buckling analysis and the transition to inelastic buckling.
*   Understand the purpose and types of stiffeners used to enhance the buckling resistance of pressure vessels.
*   Learn the principles and methodologies for designing stiffeners for pressure vessels to prevent buckling under external pressure, referencing relevant ASME codes and standards.
*   Be able to perform basic calculations for stiffener requirements.

---

### 1. Introduction to Buckling of Cylinders Under External Pressure

**Key Concept:** Buckling is a sudden and catastrophic failure mode that can occur in thin-walled structures when subjected to compressive loads. Unlike yielding, which is a gradual deformation, buckling involves a change in the structural shape, leading to a significant loss of load-carrying capacity.

**Relevance to Pressure Vessels:**
*   Many pressure vessels are subjected to external pressure (e.g., vacuum service, immersion in water, or internal pressure less than external atmospheric pressure).
*   Tall cylindrical vessels are particularly susceptible to buckling due to their slenderness ratio.
*   Wind and seismic loads, discussed in the broader context of Module 3, can induce compressive stresses in vessel shells, potentially leading to buckling.

**Sources and References:**
*   **Harvey, John F. (Theory and Design of Pressure Vessels):** Discusses buckling phenomena extensively, including theoretical formulations and practical considerations.
*   **Brownell & Young (Process Equipment Design):** Provides practical design approaches and examples for pressure vessel components, including stability against buckling.
*   **Chathopadhyay, Somnath (Pressure Vessels Design and Practice):** Covers various failure modes, including buckling, with reference to design codes.
*   **Megyesy, Eugene F. (Pressure Vessel Design Handbook):** Offers detailed analytical methods and design procedures, including buckling analysis.
*   **Moss, Dennis R. (Pressure Vessel Design Manual):** Presents practical insights and design guidelines based on industry practices and codes.

---

### 2. Elastic Buckling of Cylinders Under External Pressure

**Key Concept:** Elastic buckling occurs when the applied compressive stress reaches the *critical buckling stress*. At this stress level, the structure loses its stability and undergoes large lateral deflections without a significant increase in stress, as long as the material remains elastic.

**Fundamental Equation for Thin-Walled Cylinders:**

The theoretical critical buckling pressure ($P_{cr}$) for a long, thin-walled cylinder under uniform external pressure is given by:

$P_{cr} = \frac{E t^2}{R^2 \sqrt{3(1-\nu^2)}}$

Where:
*   $E$: Modulus of Elasticity of the material (e.g., psi or MPa)
*   $t$: Wall thickness of the cylinder (e.g., in or mm)
*   $R$: Mean radius of the cylinder (e.g., in or mm)
*   $\nu$: Poisson's ratio of the material

**Important Considerations:**

*   **GirShaft's Formula:** This is the theoretical formula derived assuming perfect cylinders, no residual stresses, and uniform external pressure.
*   **Imperfections:** Real-world cylinders always have imperfections (deviations from perfect geometry), residual stresses, and non-uniform loading. These imperfections significantly reduce the actual buckling pressure compared to the theoretical value.
*   **Short Cylinders:** For shorter cylinders, the ends are restrained, and the buckling mode might be different. The formula needs modification for shorter lengths.

**Transition to Inelastic Buckling:**

*   **Yield Strength ($S_y$):** If the critical buckling stress calculated from the elastic formula exceeds the yield strength of the material, the material will yield before buckling occurs. This phenomenon is called **inelastic buckling**.
*   **Transition Curve:** There's a transition region between purely elastic buckling and purely yielding. Design codes often use empirical formulas or charts to account for this transition.

**ASME Boiler and Pressure Vessel Code (BPVC) Section VIII, Division 1:**

*   **Divison 1 of ASME BPVC Section VIII** is the primary code governing the design of most pressure vessels.
*   **Paragraph UG-28** and related paragraphs deal with external pressure design.
*   **Buckling Charts (e.g., Figures UG-28.2 through UG-28.6):** These charts are derived from extensive experimental data and theoretical analyses, accounting for imperfections and the transition to inelastic buckling. They provide allowable external pressure as a function of diameter-to-thickness ratio ($D/t$) and material temperature.
*   **Design Procedure:** The design process typically involves:
    1.  Determining the required shell thickness to withstand the external pressure.
    2.  Using the appropriate buckling chart for the material and temperature.
    3.  Calculating the $D/t$ ratio.
    4.  Finding the maximum allowable external pressure for the calculated $D/t$ ratio.
    5.  Ensuring the design external pressure does not exceed the allowable external pressure. If it does, the thickness needs to be increased, or stiffeners must be used.

---

### 3. Stiffeners for Pressure Vessels

**Key Concept:** Stiffeners (or stiffening rings) are external or internal bands or ribs attached to the shell of a pressure vessel to increase its resistance to buckling under external pressure. They effectively reduce the unsupported length of the shell.

**Purpose of Stiffeners:**
*   **Increase Buckling Resistance:** By dividing the shell into shorter, unstiffened segments, stiffeners significantly increase the overall buckling pressure capacity.
*   **Prevent Local Buckling:** They prevent the shell from collapsing inwards between the stiffeners.
*   **Improve Structural Rigidity:** Stiffeners enhance the overall stiffness and stability of the vessel.

**Types of Stiffeners:**
*   **External Stiffening Rings:** These are typically angle sections, channel sections, or fabricated rings welded to the outside of the shell. They are the most common type.
*   **Internal Stiffening Rings:** Less common, but used in some applications where external access is restricted or aesthetic reasons prevail.
*   **Longitudinal Stiffeners:** Can be used for very large diameter vessels.

**Design of Stiffeners (ASME BPVC Section VIII, Division 1):**

*   **Paragraph UG-29:** This paragraph outlines the requirements for stiffened shells under external pressure.
*   **Stiffener Spacing:** Stiffeners are typically spaced at intervals that are related to the vessel's diameter and the stiffener's own stiffness.
*   **Stiffener Requirements:** Stiffeners must meet specific criteria to be effective. The primary requirement is that the stiffener itself must be capable of resisting the forces that would cause it to buckle or yield.

**Stiffener Design Procedure (Simplified Overview based on ASME VIII Div 1):**

1.  **Determine the Maximum Allowable External Pressure (PA) for the unstiffened shell:** This is done using the buckling charts in ASME Section VIII, Division 1 (as described in Section 2).
2.  **If the Design External Pressure (PD) exceeds PA, stiffeners are required.**
3.  **Determine the Required Stiffener Spacing:** The stiffeners divide the shell into segments. The design must ensure that each segment of the shell between stiffeners can withstand the external pressure.
4.  **Calculate the Required Moment of Inertia for the Stiffener ($I_s$):** This is the most critical part of stiffener design. ASME provides formulas and procedures to determine the minimum required moment of inertia of the stiffener, which is a function of the shell diameter, thickness, material properties, and the spacing of the stiffeners.
    *   The calculation involves ensuring that the stiffener plus a portion of the shell wall acts as a composite section to resist buckling.
    *   **Reference: ASME BPVC Section VIII, Division 1, Appendix 1-7** (or similar appendices dealing with external pressure design for stiffened shells) provides detailed formulas. The moment of inertia is calculated about the neutral axis of the stiffener and the attached shell plate.
5.  **Select a Stiffener Shape:** Choose a standard or fabricated shape (e.g., angle, channel, bulb flat) that provides the required moment of inertia.
6.  **Check the Stiffener Material Strength:** The stiffener itself must be strong enough.
    *   **Yielding:** The stress in the stiffener due to the applied external pressure must not exceed the yield strength of the stiffener material.
    *   **Local Buckling of the Stiffener:** The individual components of the stiffener (e.g., the leg of an angle or the web/flange of a channel) must also be checked for local buckling. ASME VIII Div 1 provides guidelines for this.
7.  **Attachment:** The stiffener must be securely attached to the shell by welding. Weld strength must be sufficient to transmit the forces.

---

### 4. Illustrative Example (Conceptual)

**Problem:** A cylindrical vessel with a mean diameter of 100 inches and a wall thickness of 0.25 inches is to be designed for an external pressure of 15 psi. The material is carbon steel (E = 29 x 10^6 psi, v = 0.3) at a temperature of 300°F.

**Solution Approach (following ASME BPVC Section VIII, Division 1 principles):**

1.  **Calculate D/t ratio:**
    $D/t = 100 / 0.25 = 400$

2.  **Determine Allowable External Pressure for Unstiffened Shell:**
    *   Refer to **ASME BPVC Section VIII, Division 1, Figure UG-28.3** (or the appropriate chart for carbon steel at 300°F).
    *   Locate the $D/t$ value of 400 on the chart.
    *   Read the corresponding allowable external pressure ($P_A$). Let's assume, for this example, that Figure UG-28.3 indicates an allowable pressure $P_A$ of 12 psi for $D/t = 400$ at 300°F.

3.  **Compare Design Pressure with Allowable Pressure:**
    *   Design External Pressure ($P_D$) = 15 psi
    *   Allowable External Pressure ($P_A$) = 12 psi
    *   Since $P_D > P_A$, the unstiffened shell is not adequate. Stiffeners are required.

4.  **Design Stiffeners (Conceptual Steps):**
    *   **Determine Stiffener Spacing (L):** The code allows for designing the vessel as a series of shorter cylinders, each with a stiffener. A common approach is to assume a stiffener spacing (e.g., L = 10 * D = 1000 inches if it's a very tall vessel, or a more economical spacing based on structural analysis). For a typical vessel, stiffeners might be placed every few diameters or as required by code limitations. Let's assume we need to place stiffeners such that the unsupported length is $L$.
    *   **Calculate Required Moment of Inertia ($I_s$) for each stiffener:** This calculation would involve using formulas from **ASME BPVC Section VIII, Division 1, Appendix 1-7**. The formula essentially equates the buckling resistance of the stiffened shell to the requirements for a shorter, unstiffened cylinder.
        *   The general principle is to ensure that the stiffener plus an effective width of the shell plate can resist the buckling pressure for the segment length $L$.
        *   A simplified concept: $I_s \ge k \cdot D \cdot L \cdot t^2$ (where 'k' is a factor derived from code formulas).
    *   **Select Stiffener Section:** Suppose the calculation dictates a minimum $I_s = 5.0 \text{ in}^4$. We would then select a standard angle section (e.g., L 3x3x1/4) and check if its moment of inertia (about the correct axis) meets or exceeds 5.0 in$^4$.
    *   **Check Stiffener Strength:** Ensure the selected stiffener, when welded to the shell, can withstand the external pressure without yielding or local buckling of its own components.

---

### 5. Key Points to Remember

*   **Buckling is a critical failure mode** for thin-walled structures under external pressure or compressive axial loads.
*   **Imperfections significantly reduce buckling capacity.** This is why design codes use empirical charts and factors.
*   **ASME BPVC Section VIII, Division 1** is the primary reference for pressure vessel design in many parts of the world.
*   **Buckling Charts (e.g., UG-28 charts)** are essential tools for determining allowable external pressure for unstiffened shells.
*   **Stiffeners are used to increase buckling resistance** by reducing the unsupported length of the shell.
*   **Stiffener design involves calculating the required moment of inertia ($I_s$)** and ensuring the stiffener can carry the load without yielding or local buckling.
*   **The selection and spacing of stiffeners** are crucial for the overall stability of tall vessels.
*   **Wind and seismic loads** can induce compressive stresses that must be considered in conjunction with external pressure and other load combinations.

---

### 6. Practice Questions and Exercises

**Question 1 (Conceptual - K2):**
Explain why thin-walled cylinders are more susceptible to buckling under external pressure than internal pressure.

**Answer:**
Under external pressure, the shell is subjected to compressive stresses. Compressive forces tend to deform the structure inwards. Even small initial imperfections in the geometry can be amplified by these compressive stresses, leading to a sudden outward bulging or inward collapse (buckling). Under internal pressure, the shell is subjected to tensile stresses, which tend to expand the shell uniformly. While ovalization can occur at very high pressures, it's generally a more stable behavior than buckling under compression.

**Question 2 (Calculation - K3):**
A cylindrical shell with a mean diameter of 60 inches and a wall thickness of 0.375 inches is to be designed for an external pressure of 10 psi at a temperature of 200°F. Using the principles of ASME BPVC Section VIII, Division 1, and assuming a hypothetical buckling chart indicates an allowable pressure of 8 psi for a $D/t$ ratio of 160 at 200°F, what conclusion can be drawn about the adequacy of the unstiffened shell? What is the next step in the design process?

**Given:**
*   Mean Diameter, $D = 60$ inches
*   Wall Thickness, $t = 0.375$ inches
*   Design External Pressure, $P_D = 10$ psi
*   Hypothetical Allowable Pressure for $D/t = 160$ at 200°F, $P_A = 8$ psi

**Solution:**
1.  **Calculate D/t:**
    $D/t = 60 / 0.375 = 160$

2.  **Compare Design Pressure with Allowable Pressure:**
    $P_D = 10$ psi
    $P_A = 8$ psi
    Since $P_D > P_A$, the unstiffened shell is **not adequate** for the specified external pressure.

3.  **Next Step:**
    The next step in the design process is to **design stiffeners** for the shell to increase its buckling resistance. Alternatively, the shell thickness could be increased, but stiffening is often more economical for significant overpressure.

**Question 3 (Conceptual - K3):**
What is the primary function of a stiffening ring on a pressure vessel shell designed for external pressure? What property of the stiffening ring is most critical for its effectiveness?

**Answer:**
The primary function of a stiffening ring is to **increase the vessel's resistance to buckling** under external pressure. It achieves this by effectively **reducing the unsupported length of the shell** between the stiffeners. The most critical property of the stiffening ring for its effectiveness is its **moment of inertia ($I_s$)** about the neutral axis of the stiffener and the attached shell plate. A larger moment of inertia provides greater stiffness and resistance to buckling.

---

This concludes the study notes for the topic of Buckling - Analysis of Elastic Buckling of Cylinders or Pipes Under External Pressure and Design of Stiffeners for Pressure Vessels. Remember to always refer to the latest edition of the ASME BPVC Section VIII, Division 1, for precise requirements and detailed formulas.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
