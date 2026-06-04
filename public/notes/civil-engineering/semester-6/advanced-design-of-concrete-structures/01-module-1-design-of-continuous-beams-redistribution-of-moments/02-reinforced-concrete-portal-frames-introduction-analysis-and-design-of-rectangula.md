---
title: "Reinforced concrete portal frames: Introduction - Analysis and design of rectangular portal frames for vertical loading"
subject: "ADVANCED DESIGN OF CONCRETE STRUCTURES"
module: "Module 1: Design of continuous beams– Redistribution of moments"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8110d0"
status: "completed"
scrapedAt: "2026-05-20T18:51:44.487Z"
---
# ADVANCED DESIGN OF CONCRETE STRUCTURES

## Module 1: Design of Continuous Beams – Redistribution of Moments

---

### Topic: Reinforced Concrete Portal Frames: Introduction - Analysis and Design of Rectangular Portal Frames for Vertical Loading

---

### 1. Introduction to Reinforced Concrete Portal Frames

*   **Definition:** A portal frame is a structural system consisting of interconnected rigid frames, typically comprising two columns and a beam (or roof). They are commonly used in industrial buildings, warehouses, and large span structures due to their efficient use of material and ability to enclose large open spaces.
*   **Key Characteristics:**
    *   **Rigid Joints:** The connections between columns and beams are designed to be rigid (moment-resisting), allowing for the transfer of bending moments and shear forces. This is a crucial distinction from simply supported beams.
    *   **Stability:** Portal frames achieve stability through their inherent geometry and the rigidity of their connections.
    *   **Load Transfer:** Vertical loads (dead load, live load) and horizontal loads (wind, seismic) are carried by the frame and ultimately transferred to the foundations.
*   **Applications:**
    *   Industrial sheds and factories
    *   Warehouses
    *   Exhibition halls
    *   Sports arenas
    *   Aircraft hangars
*   **Advantages:**
    *   Efficient use of materials for large spans.
    *   Provides clear, unobstructed internal space.
    *   Can accommodate various roof shapes.
    *   Good resistance to lateral loads.
*   **Disadvantages:**
    *   Can be more complex to design and construct than simpler structures.
    *   Requires careful detailing of rigid joints.
    *   Potential for significant bending moments, especially at the eaves.

---

### 2. Analysis of Rectangular Portal Frames for Vertical Loading

*   **Objective of Analysis:** To determine the internal forces (bending moment, shear force, axial force) within the frame members under applied vertical loads. These forces are critical for designing the reinforcement.
*   **Types of Rectangular Portal Frames:**
    *   **Symmetrical:** Columns of equal height, and the beam is often symmetrical.
    *   **Asymmetrical:** Columns of different heights, or the beam has a different geometry, leading to less predictable moment distributions.
*   **Key Assumptions for Analysis:**
    *   **Linear Elastic Material Behaviour:** Concrete and steel behave elastically under working loads.
    *   **Plane Sections Remain Plane:** Cross-sections remain planar and perpendicular to the neutral axis after bending.
    *   **Rigid Joints:** Joints are perfectly rigid and do not undergo rotation.
    *   **Negligible Shear Deformation:** Shear deformation is often neglected in the analysis of typical portal frames, although it can be significant in very deep members.
    *   **Imperfections:** Initial geometric imperfections and eccentricities are often accounted for by adding equivalent eccentric loads as per design codes.
*   **Methods of Analysis:**
    *   **Classical Methods (Statically Determinate/Indeterminate):**
        *   **Force Methods (Flexibility Methods):** e.g., Force-displacement method. These methods involve introducing releases and calculating redundant forces and moments.
        *   **Displacement Methods (Stiffness Methods):** e.g., Slope-deflection method, Moment distribution method, Stiffness matrix method (FEM). These are generally more systematic and suitable for computer implementation.
    *   **Approximate Methods (for initial design and quick estimation):**
        *   **Substitute Frame Method:** A simplified approach where continuous beams are analyzed to estimate moments for portal frames.
        *   **Moment Distribution Method:** A classical iterative method for analyzing indeterminate structures.
        *   **Simplified Methods based on Moment Diagrams:** Recognizing typical moment patterns for vertical loading on symmetrical frames.
    *   **Finite Element Method (FEM):** The most rigorous and versatile method, especially for complex geometries, loading conditions, and material behaviours. Most modern design software uses FEM.

---

### 3. Analysis of a Symmetrical Rectangular Portal Frame for Vertical Loading (Illustrative Example using Basic Principles)

Let's consider a simple symmetrical rectangular portal frame with:
*   Span: $L$
*   Height of columns: $H$
*   Uniformly distributed load on the beam: $w$ per unit length.

**Key Points of Bending Moment Distribution for Vertical Loading:**

*   **Maximum Negative Moment (Eaves):** Occurs at the junction of the column and the beam (eaves). This is due to the continuity of the frame.
*   **Maximum Positive Moment (Mid-span of Beam):** Occurs at or near the mid-span of the horizontal beam.
*   **Inflection Points:** In the columns, there are points of contraflexure (zero bending moment) at a certain height from the base. For a symmetrical frame, this inflection point is typically around $0.5H$ from the base.
*   **Base Reactions:** The foundations resist vertical loads (shear) and horizontal thrust (axial force in columns).

**Simplified Analysis (for a symmetrical frame under UDL on the beam):**

For a symmetrical portal frame with UDL $w$ on the beam, and neglecting the axial deformation of members, the approximate moment distribution is often characterized by:

*   **Beam Moment:** A hogging moment at the eaves, a sagging moment in the span, and a hogging moment at the other eaves. The maximum sagging moment is usually near the mid-span.
*   **Column Moment:** A hogging moment at the eaves, decreasing to zero at the inflection point, and then remaining zero to the base (assuming pinned bases). If the bases are fixed, there will be a hogging moment at the base.

**Conceptual Moment Diagram (for pinned bases):**

*   **Beam:** Max negative moment at eaves, max positive moment at mid-span.
*   **Columns:** Max negative moment at eaves, zero moment at inflection point (approx. H/2 from base).

**More Rigorous Analysis (using Stiffness or Slope-Deflection):**

For a more accurate analysis, methods like the slope-deflection method or FEM are required. These methods account for the relative stiffness of the members and the joint rotations.

**Example - Symmetrical Portal Frame with Pinned Bases:**

Consider a portal frame with $L=10m$, $H=5m$, and $w = 20 \, kN/m$ on the beam.

*   **Shear Force in Beam:** $V = wL/2 = 20 \times 10 / 2 = 100 \, kN$ (at supports).
*   **Bending Moment at Mid-span of Beam (simply supported):** $M_{mid} = wL^2/8 = 20 \times 10^2 / 8 = 250 \, kNm$.
*   **Bending Moment at Eaves (approximate for pinned bases, assuming columns are much stiffer vertically than the beam is against lateral buckling):** For a simplified case, it's often found that the hogging moment at the eaves is roughly half the sagging moment at the mid-span, but this is a very rough approximation.
    *   A more accurate analysis would show the moments are more complex. For a symmetrical frame under UDL, the moment at the eaves (hogging) might be around $-WL/8$ and the moment at mid-span (sagging) might be around $+WL/12$. (Note: These are simplified values for illustration and depend heavily on the $L/H$ ratio and member stiffnesses).

**Important Consideration:** The distribution of moments depends significantly on the relative stiffness ($EI$) of the columns and the beam, and the geometry ($L$ and $H$).

---

### 4. Design of Rectangular Portal Frames for Vertical Loading

The design process involves:

1.  **Load Calculation:** Determine dead loads, live loads, and any other relevant loads acting on the frame.
2.  **Structural Analysis:** Determine the bending moments, shear forces, and axial forces in each member of the frame under the critical load combinations.
3.  **Moment Redistribution (Covered in other topics):** If applicable and permitted by codes, redistribute moments to optimize the section sizes and reinforcement.
4.  **Section Design:** Design the cross-section of the columns and the beam to resist the calculated forces. This involves:
    *   **Flexural Design:** Determine the required area of tension and compression reinforcement for bending moments.
    *   **Shear Design:** Design for shear forces.
    *   **Axial Force Design:** Design for axial forces (compression in columns).
    *   **Combined Forces:** Consider the combined effects of bending and axial forces.
5.  **Connection Design:** Design the rigid connections between members (e.g., eaves joint, base joint). This is a critical aspect of portal frame design.
6.  **Detailing:** Prepare reinforcement drawings and details.

---

### 5. Design of the Beam (for Vertical Loading)

*   **Critical Moments:**
    *   **Maximum Sagging Moment ($M_{beam,sag}$):** Typically at or near the mid-span of the beam. This requires tensile reinforcement at the bottom of the beam.
    *   **Maximum Hogging Moment ($M_{beam,hog}$):** Typically at the eaves (junction with columns). This requires tensile reinforcement at the top of the beam.
*   **Design Steps (Flexure):**
    1.  **Determine Required Moment Resistance:** Use the maximum sagging and hogging moments obtained from analysis.
    2.  **Select Section Dimensions:** Choose appropriate width ($b$) and depth ($d$) for the beam.
    3.  **Calculate Required Reinforcement Area ($A_s$):**
        *   For sagging moment (tensile reinforcement at bottom): Use standard rectangular beam flexural design formulas.
        *   For hogging moment (tensile reinforcement at top): Design for the hogging moment, providing reinforcement at the top. In regions of hogging moment, compression reinforcement might be needed at the bottom if the section is significantly over-reinforced for sagging.
    4.  **Check Shear Capacity:** Ensure the section can resist the shear forces.
    5.  **Check Deflection:** Ensure the beam's deflection is within permissible limits.

**Example Calculation (Simplified Flexural Design of Beam Segment):**

Assume the analysis of a portal frame beam resulted in:
*   Max Sagging Moment at mid-span: $M_{sag} = 300 \, kNm$
*   Max Hogging Moment at eaves: $M_{hog} = -200 \, kNm$
*   Beam width ($b$) = $300 \, mm$
*   Effective depth ($d$) = $550 \, mm$ (assume cover and bar diameter)
*   Concrete grade: M30 ($f_{ck} = 30 \, MPa$)
*   Steel grade: Fe500 ($f_y = 500 \, MPa$)

**Design for Sagging Moment ($M_{sag} = 300 \, kNm$):**

1.  **Calculate lever arm ($z$):**
    *   Assuming a singly reinforced section.
    *   $M_{u,req} = 1.5 \times M_{sag} = 1.5 \times 300 \, kNm = 450 \, kNm$ (using a load factor for ULS). However, for design notes, we'll work with characteristic moments initially and then apply factors as per codes. Let's use characteristic moments and then apply code factors for design.
    *   $M_{sag} = 300 \, kNm = 300 \times 10^6 \, Nmm$
    *   $k_1 = \frac{M_{u,req}}{bd^2 f_{ck}} = \frac{300 \times 10^6 \, Nmm}{300 \, mm \times (550 \, mm)^2 \times 30 \, N/mm^2} = 0.1096$
    *   $k_2 = 1.25 (1 - \sqrt{1 - 2k_1}) = 1.25 (1 - \sqrt{1 - 2 \times 0.1096}) = 1.25 (1 - \sqrt{0.7808}) = 1.25 (1 - 0.8836) = 0.1455$
    *   Lever arm $z = k_2 d = 0.1455 \times 550 \, mm = 79.9 \, mm$. (This seems unusually small, which indicates a mistake in the formula application or expectation. Let's recheck standard formulas. Standard practice is to find $z$ from the stress block.)

    *   **Alternative Calculation using Stress Block:**
        *   Assume the limiting moment of resistance for singly reinforced rectangular section is $M_{u,lim} = 0.36 \frac{f_{ck}}{f_y} bd^2 (1 - 0.414 \frac{x_u}{d})$, where $x_u$ is the depth of the neutral axis. The limiting value of $x_u/d$ is typically $0.48$ for Fe500.
        *   $M_{u,lim} = 0.36 \times \frac{30}{500} \times 300 \times 550^2 \times (1 - 0.414 \times 0.48) \approx 717 \, kNm$.
        *   Since $M_{sag} = 300 \, kNm < M_{u,lim}$, it's a singly reinforced section.
        *   $M_{sag} = 0.87 f_y A_{st} z$, where $z \approx 0.95d$.
        *   $z \approx 0.95 \times 550 \, mm = 522.5 \, mm$.
        *   $300 \times 10^6 \, Nmm = 0.87 \times 500 \, N/mm^2 \times A_{st} \times 522.5 \, mm$.
        *   $A_{st} = \frac{300 \times 10^6}{0.87 \times 500 \times 522.5} \approx 1382 \, mm^2$.

2.  **Select Reinforcement:**
    *   Try $20 \, mm$ diameter bars. Area of one bar = $\pi \times (20/2)^2 = 314 \, mm^2$.
    *   Number of bars = $1382 / 314 \approx 4.4$. So, use 5 bars of $20 \, mm$ diameter (Area = $5 \times 314 = 1570 \, mm^2$).
    *   Check minimum and maximum reinforcement requirements as per code.

**Design for Hogging Moment ($M_{hog} = 200 \, kNm$):**

*   This moment is at the top of the beam.
*   $M_{hog} = 200 \times 10^6 \, Nmm$.
*   The calculation is similar to the sagging moment, but reinforcement is provided at the top.
*   $z \approx 0.95d = 522.5 \, mm$.
*   $200 \times 10^6 \, Nmm = 0.87 \times 500 \, N/mm^2 \times A_{st,top} \times 522.5 \, mm$.
*   $A_{st,top} = \frac{200 \times 10^6}{0.87 \times 500 \times 522.5} \approx 921 \, mm^2$.

**Provide Steel at Top:**

*   Try $16 \, mm$ diameter bars. Area of one bar = $\pi \times (16/2)^2 = 201 \, mm^2$.
*   Number of bars = $921 / 201 \approx 4.58$. So, use 5 bars of $16 \, mm$ diameter (Area = $5 \times 201 = 1005 \, mm^2$).

**Combined Reinforcement:**

*   The section will have reinforcement at the top and bottom. The total reinforcement at the eaves section will be the sum of required top steel and bottom steel if the hogging moment is greater than the sagging moment, or if the section is designed as a doubly reinforced section.
*   In many portal frame designs, continuous reinforcement is provided along the length. The amount of steel at the eaves will be higher than at mid-span.

---

### 6. Design of Columns (for Vertical Loading)

*   **Critical Forces:**
    *   **Axial Compression ($P_{col}$):** Due to vertical loads.
    *   **Bending Moment ($M_{col}$):** Hogging moment at the eaves, decreasing to zero at the inflection point.
    *   **Shear Force ($V_{col}$):** Due to the transfer of beam shear.
*   **Design Steps:**
    1.  **Determine Maximum Axial Load and Moment:** Find the critical combination of axial load and bending moment at the base and at the eaves of the columns.
    2.  **Check Slenderness Effects (Second-order effects):** For columns, it's crucial to check their slenderness ratio. If slender, amplification of moments is required. This is often done using effective length and magnification factors as per codes.
    3.  **Design for Combined Axial Load and Bending:** Use interaction diagrams or design charts for short columns (if slenderness effects are negligible) or follow code provisions for slender columns. This involves determining the required area of longitudinal reinforcement and ensuring adequate concrete capacity.
    4.  **Shear Design:** Design the transverse reinforcement (stirrups) to resist the shear forces.
    5.  **Base Design:** Design the column base to transfer the axial load, moment, and shear to the foundation.

**Example - Column Design (Conceptual):**

Assume a column is subjected to:
*   Max Axial Compression: $P_{col,max} = 500 \, kN$
*   Max Moment at Eaves: $M_{col,max} = 150 \, kNm$
*   Column section: $300 \, mm \times 300 \, mm$ (square)
*   Concrete grade: M30
*   Steel grade: Fe500

1.  **Check Slenderness:** Calculate the effective length of the column and compare it with the code limits for slenderness. If it's slender, apply moment magnification.
2.  **Design for Combined Forces:**
    *   For a square column $300 \times 300 \, mm$, effective depth $d$ would be around $260 \, mm$ (considering cover and stirrups).
    *   Use interaction diagrams for reinforced concrete columns. Find the interaction curve for the given section size, concrete strength, and steel strength.
    *   Locate the point on the interaction diagram corresponding to $P = 500 \, kN$ and $M = 150 \, kNm$.
    *   Read off the required percentage of steel reinforcement or the required area of steel.
    *   For instance, if the interaction diagram suggests 2% steel, then $A_{st} = 0.02 \times (300 \times 300) = 1800 \, mm^2$.
    *   **Select Reinforcement:** Provide 8 bars of $16 \, mm$ diameter ($8 \times 201 = 1608 \, mm^2$) or 6 bars of $20 \, mm$ diameter ($6 \times 314 = 1884 \, mm^2$).
    *   **Shear Reinforcement:** Calculate shear force at the eaves and design stirrups.

---

### 7. Key Concepts and Definitions

*   **Portal Frame:** A rigid frame composed of columns and beams, with moment-resisting joints.
*   **Rigid Joint:** A connection that does not allow relative rotation between connected members, thereby transferring moments.
*   **Eaves:** The junction between the column and the beam in a portal frame.
*   **Inflection Point (Point of Contraflexure):** A point in a member where the bending moment is zero.
*   **Bending Moment Diagram (BMD):** A graphical representation of the bending moments along the length of a structure.
*   **Shear Force Diagram (SFD):** A graphical representation of the shear forces along the length of a structure.
*   **Stiffness:** The resistance of a structural member to deformation under load.
*   **Singly Reinforced Section:** A concrete section reinforced only in the tension zone.
*   **Doubly Reinforced Section:** A concrete section reinforced in both the tension and compression zones.
*   **Interaction Diagram:** A graphical representation of the load-carrying capacity of a column section under combined axial load and bending moment.
*   **Slenderness Ratio:** The ratio of the effective length of a column to its least lateral dimension.
*   **Moment Magnification:** The process of increasing the design moments in slender columns to account for second-order effects.

---

### 8. Important Points to Remember

*   **Rigidity of Joints is Paramount:** The behaviour of a portal frame is fundamentally different from that of a simply supported structure due to rigid joints.
*   **Moment Distribution:** Understand the typical distribution of bending moments for vertical loading – hogging at eaves, sagging in the beam span, and hogging in the upper part of columns.
*   **Relative Stiffness:** The distribution of moments is highly sensitive to the relative stiffness ($EI$) of the columns and beam, and the geometry ($L/H$ ratio).
*   **Eaves Moment is Critical:** The maximum hogging moment at the eaves is usually the governing factor for the top reinforcement of the beam and the design of the column head.
*   **Column Slenderness:** Always check for column slenderness effects and apply moment magnification where necessary, as this significantly impacts the column design.
*   **Base Connection:** The design of the column base connection is as crucial as the eaves connection. It must resist the overturning moments and axial loads.
*   **Code Provisions:** Always refer to the relevant national building codes (e.g., Eurocodes, IS Codes, ACI) for specific design procedures, load factors, material properties, and detailing requirements.
*   **Reinforcement Arrangement:** Ensure adequate anchorage and lap lengths for reinforcement, especially at critical regions like the eaves and column bases. Continuous reinforcement across joints is often preferred where possible.
*   **Shear in Columns:** While axial loads are dominant, shear forces in columns due to beam shear transfer should not be overlooked.

---

### 9. Practice Questions

1.  **Question:** Describe the typical distribution of bending moments in the beam and columns of a symmetrical rectangular portal frame subjected to a uniformly distributed vertical load on the beam. Sketch the bending moment diagrams for the beam and columns, indicating the locations of maximum moments and inflection points.
    **Answer Hint:** Focus on hogging moments at eaves and sagging moments in the beam span. Column moments decrease from the eaves to the inflection point.

2.  **Question:** A rectangular portal frame has a span of 12m and column height of 6m. It is subjected to a uniformly distributed load of $15 \, kN/m$ on the beam. If the beam is $300 \, mm \times 600 \, mm$ and the columns are $300 \, mm \times 300 \, mm$, estimate the approximate magnitude of the maximum hogging moment at the eaves and the maximum sagging moment at the mid-span of the beam. (Assume $EI$ of beam is approximately $1.5$ times $EI$ of column per meter length).
    **Answer Hint:** This question requires either approximate analysis methods or a basic understanding of how relative stiffness influences moment distribution. A precise answer without computational tools or advanced methods is challenging. For an approximate understanding, consider that moments are distributed based on stiffness. For a simplified symmetrical frame with UDL, a common (though approximate) distribution might suggest moments in the order of $WL/8$ for hogging and $WL/12$ for sagging.
    *   $W = 15 \, kN/m \times 12 \, m = 180 \, kN$ (total load on beam)
    *   Span $L = 12 \, m$.
    *   Approximate hogging moment at eaves $\approx W L / 8 = (15 \times 12) \times 12 / 8 = 270 \, kNm$.
    *   Approximate sagging moment at mid-span $\approx W L / 12 = (15 \times 12) \times 12 / 12 = 180 \, kNm$.
    *   *(Note: These are rough estimates. Actual values depend on detailed analysis and $L/H$ ratios.)*

3.  **Question:** A column of a portal frame experiences a maximum axial compressive force of $800 \, kN$ and a maximum bending moment of $120 \, kNm$. The column section is $350 \, mm \times 350 \, mm$, concrete is M25, and steel is Fe415. Calculate the required area of longitudinal reinforcement for the column. (Assume the column is short and can be designed using interaction diagrams, or use a simplified lever arm approach if an interaction diagram is not available).
    **Answer Hint:**
    *   $P_u = 800 \, kN$, $M_u = 120 \, kNm$.
    *   Column section: $350 \times 350 \, mm$. Effective depth $d \approx 315 \, mm$.
    *   For simplified design using lever arm: $M_u = P_u (0.5d - a/2)$, where $a$ is the depth of the neutral axis. Or, $M_u = P_u e$. Calculate eccentricity $e = M_u / P_u = 120 \, kNm / 800 \, kN = 0.15 \, m = 150 \, mm$.
    *   Using interaction diagram principles, a point ($P/A_{gc}$, $M/(A_{gc}d)$) is plotted.
    *   Using code-based approach (e.g., IS 456):
        *   Calculate $P_{ez} = P_u / (f_{ck} + 0.75 f_{y})$, where $P_{ez}$ is the axial load capacity if there was no eccentricity.
        *   Check slenderness. If short, use charts.
        *   If using simplified calculation for a square column under combined load, assume a lever arm $z$. The total moment resisting capacity is $P_u \times e_{total}$. $e_{total} = e + e_a$ where $e_a$ is due to ductility.
        *   A common approximation for designing a column with axial load and bending is to consider the resultant force acting at an eccentricity. The design is often based on interaction curves.
        *   For a conceptual answer, let's assume the design process leads to a required steel area of approximately 2% of the gross area. $A_{st} = 0.02 \times (350 \times 350) = 2450 \, mm^2$.
        *   **Select Reinforcement:** Provide 8 bars of $20 \, mm$ diameter ($8 \times 314 = 2512 \, mm^2$).

---
This concludes the study notes for the Introduction to Reinforced Concrete Portal Frames for Vertical Loading. Remember to always refer to the relevant design codes for specific calculations and requirements.
