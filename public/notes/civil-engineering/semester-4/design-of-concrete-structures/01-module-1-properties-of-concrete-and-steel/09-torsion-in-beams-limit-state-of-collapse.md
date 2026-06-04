---
title: "Torsion in Beams - Limit State of Collapse"
subject: "DESIGN OF CONCRETE STRUCTURES"
module: "Module 1: Properties of Concrete and Steel"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109c0"
status: "completed"
scrapedAt: "2026-05-20T18:43:42.729Z"
---
# DESIGN OF CONCRETE STRUCTURES

## Module 1: Properties of Concrete and Steel

### Topic: Torsion in Beams - Limit State of Collapse

This topic focuses on understanding and designing for torsion in concrete beams at the Limit State of Collapse. Torsion occurs when a beam is subjected to a twisting moment about its longitudinal axis.

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

1.  **Define torsion and its causes in concrete beams.**
2.  **Understand the behavior of concrete beams under torsion at the Limit State of Collapse.**
3.  **Identify the components of torsional resistance in a concrete beam.**
4.  **Apply relevant design codes (e.g., IS 456:2000 or Eurocode 2 principles) for the design of beams subjected to torsion.**
5.  **Calculate the required torsional reinforcement.**
6.  **Check for serviceability requirements related to torsion (though the focus here is Limit State of Collapse).**
7.  **Understand the interaction between bending, shear, and torsion.**

---

### 1. Definition and Causes of Torsion in Concrete Beams

*   **Definition:** Torsion is the effect of a **twisting moment** (torsional moment, $T_u$) applied to a structural element about its longitudinal axis.
*   **Causes:** Torsion arises in beams when the applied loads are eccentric or when the beam is part of a structure that imposes a twisting effect. Common scenarios include:
    *   **Eccentrically Loaded Beams:** When the resultant load does not pass through the centroid of the beam's cross-section.
        *   *Example:* A bracket supporting a load at a distance from the beam's center.
    *   **Connecting Beams:** Beams connecting to other beams or slabs at an angle, or beams supporting cantilever slabs.
        *   *Example:* A beam supporting a staircase landing or a balcony slab.
    *   **Staircases:** The supporting beams for staircases are often subjected to torsion due to the eccentric application of loads.
    *   **Curved Beams:** Curved beams inherently experience torsional effects due to the geometry.
    *   **Coupled Beams:** Beams that are rigidly connected at their ends to form a frame can experience torsion due to the continuity and the distribution of forces.

---

### 2. Behavior of Concrete Beams Under Torsion at the Limit State of Collapse

*   **Pure Torsion:** In pure torsion, the entire cross-section is subjected to torsional stress. The concrete cracks in tension at approximately 45 degrees to the longitudinal axis, forming a characteristic **"corkscrew" pattern** of diagonal tensile and compressive stresses.
*   **Torsion with Bending and Shear:** In most practical scenarios, beams are subjected to a combination of bending moment ($M_u$), shear force ($V_u$), and torsional moment ($T_u$). This interaction significantly affects the beam's behavior and capacity.
    *   The tensile stresses induced by torsion interact with the tensile stresses from bending, leading to more complex cracking patterns.
    *   Shear and torsion can combine, leading to a higher shear demand on the concrete and reinforcement.

---

### 3. Components of Torsional Resistance

The torsional resistance of a reinforced concrete beam is provided by:

*   **Concrete's Intrinsic Resistance:** Even plain concrete can resist a certain amount of torsion due to its tensile strength and the cohesive forces within the material. This is known as **plain concrete resistance** or **unreinforced torsion resistance**.
*   **Reinforcement:** This is the primary means of providing torsional resistance in reinforced concrete beams and consists of:
    *   **Longitudinal Reinforcement:** Similar to bending, longitudinal bars resist tensile stresses developed due to torsion. These bars are placed along the length of the beam.
    *   **Transverse Reinforcement (Stirrups/Rings):** Closed stirrups (or links) are crucial for resisting the diagonal tensile stresses induced by torsion. These stirrups are placed perpendicular to the longitudinal axis of the beam, wrapping around the longitudinal bars.

---

### 4. Design Codes and Principles (IS 456:2000 based)

IS 456:2000 provides guidelines for the design of reinforced concrete members subjected to torsion. The design is generally carried out based on the **equivalent shear force and equivalent bending moment** concept, which accounts for the combined effects of bending, shear, and torsion.

**Key Design Principles:**

*   **Limit State of Collapse:** The design ensures that the beam does not fail under the combined factored loads of bending, shear, and torsion.
*   **Equivalence:** Torsion is converted into equivalent bending and shear effects for design purposes.
*   **Minimum Reinforcement:** Even if the calculated torsional moment is less than the torsional capacity of plain concrete, minimum torsional reinforcement is required.
*   **Spacing of Stirrups:** The spacing of the stirrups is governed by the torsional moment and the concrete's capacity.

**Design Steps (Simplified Approach):**

1.  **Calculate factored loads and determine $M_u$, $V_u$, and $T_u$.**
2.  **Check for cracking due to torsion (not strictly Limit State of Collapse, but good to know).**
3.  **Check if the torsional moment $T_u$ exceeds the cracking strength of plain concrete $T_{cr}$.**
    *   If $T_u \le T_{cr}$, only minimum reinforcement is required.
    *   If $T_u > T_{cr}$, additional torsional reinforcement is necessary.
4.  **Calculate equivalent shear force ($V_{eq}$) and equivalent bending moment ($M_{eq}$):**
    *   The code provides formulas to combine these effects. For a rectangular section of breadth $b$ and depth $d$:
        *   $V_{eq} = V_u + 1.6 \frac{T_u}{b}$
        *   $M_{eq} = M_u + T_u \left(1 + \frac{d}{b}\right) / 1.6$  *(Note: The exact formula might vary slightly depending on how the code defines the interaction, and often considers the ratio of sides for rectangular sections).*
        *   *Important Note:* The above is a simplified representation. The actual code provisions relate torsional stress to the stresses from bending and shear. The core idea is to ensure adequate reinforcement to resist the combined effects.

5.  **Design for Bending, Shear, and Torsion using the equivalent values.**

    *   **Shear Reinforcement:** Design stirrups based on $V_{eq}$.
    *   **Torsional Reinforcement (Stirrups):** Additional stirrup reinforcement is required specifically for torsion.
    *   **Longitudinal Reinforcement:** Additional longitudinal reinforcement is required in the flanges (or corners) of the beam to resist the tensile stresses due to torsion.

---

### 5. Calculation of Torsional Reinforcement (IS 456:2000 Approach)

The design for torsion in IS 456:2000 is often simplified by considering the torsional moment $T_u$ and the capacity of the section. For a rectangular section of size $b \times d$ (where $b$ is the smaller width), the torsional stress is distributed. The design typically involves providing reinforcement that can resist the applied torsional moment.

**Key Formulas and Requirements:**

*   **Torsional Moment Capacity of Plain Concrete ($T_{cr}$):**
    *   $T_{cr} = 0.7 \sqrt{f_{ck}} b d^2 \left(1 - \frac{b}{d}\right)$ (approximate, for rectangular sections)
    *   Where $f_{ck}$ is the characteristic compressive strength of concrete, and $b$ and $d$ are the overall width and depth.
*   **Design Torsional Moment ($T_{ud}$):** The factored torsional moment $T_u$.
*   **Design of Stirrups for Torsion:**
    *   The torsional resistance provided by stirrups is calculated based on the stress in the stirrups.
    *   For a rectangular beam, the total torsional moment resisted by the stirrups ($T_{ut}$) is related to the area of stirrups ($A_{st}$), yield strength of stirrup steel ($f_y$), and the perimeter of the stirrups ($p$) and the shear resistance of the concrete.
    *   A common approach involves calculating the required area of stirrup legs. For a closed stirrup with legs in the directions of $b$ and $d$, the torsional resistance is related to:
        *   $T_{ut} = \frac{2 A_{st} f_y}{s} j (b+d)$  (where $j$ is the lever arm, often taken as $0.9d$)
        *   However, a more direct IS 456:2000 approach uses the concept of equivalent shear, or a specific formula for torsional reinforcement.

    *   **IS 456:2000 Clause 41.3.3 (Torsion):** This clause details the design requirements. For members subjected to torsion, reinforcement should be provided in two parts:
        1.  **Reinforcement to resist torsion:** This is provided in addition to the reinforcement for bending and shear.
        2.  **Longitudinal reinforcement:** This is provided to resist the bending moments and axial loads, and additional longitudinal reinforcement is provided to resist torsion.

    *   **Calculation of Stirrup Area ($A_{st}$) for Torsion:**
        *   The torsional moment resisted by the stirrups is given by:
            $T_{ut} = \frac{A_{st}}{s} f_{y} (b_{min} + d_{min}) j$  (where $b_{min}$ and $d_{min}$ are the center-to-center dimensions of the stirrups)
            *   A simplified approach from IS 456:2000 relates the torsional moment to the shear resistance provided by the stirrups.
            *   The torsional resistance of the beam is considered to be provided by a thin-walled tube model.
            *   The torsional moment to be resisted by the stirrups is $T_{ut} = T_u - T_{cr}$ (if $T_u > T_{cr}$).
            *   The required area of stirrups per unit length ($A_{st}/s$) can be calculated using:
                $\frac{A_{st}}{s} = \frac{T_{ut}}{0.87 f_y x_1 y_1}$
                Where $x_1$ and $y_1$ are the center-to-center dimensions of the longitudinal bars. For a rectangular beam, $x_1 = b - 2(\text{cover} + \text{stirrup dia})$ and $y_1 = d - 2(\text{cover} + \text{stirrup dia})$. For simplicity in design, they are often taken as $b-2 \times \text{effective cover}$ and $d-2 \times \text{effective cover}$.
        *   **Spacing of Stirrups ($s$):**
            $s \le \frac{4 b}{T_{ut}/(0.87 f_y x_1 y_1)}$
            $s \le \frac{4 d}{T_{ut}/(0.87 f_y x_1 y_1)}$
            However, the spacing of stirrups should not exceed $\frac{b}{2}$ and $\frac{d}{2}$ and also the minimum spacing for shear.
            The spacing of stirrups for torsion should be the minimum of:
            $s \le \frac{A_{st}}{s} \frac{0.87 f_y x_1 y_1}{T_{ut}}$
            $s \le \frac{b}{2}$ and $s \le \frac{d}{2}$
            And also, the spacing for shear should be considered. The final spacing will be the minimum of the required spacing for shear and torsion.

    *   **Calculation of Longitudinal Reinforcement for Torsion:**
        *   Additional longitudinal reinforcement is required in the corners of the beam.
        *   The area of this additional longitudinal reinforcement ($\boldsymbol{A_{st,torsion}}$) is given by:
            $A_{st,torsion} = \frac{T_{ut} \cdot x_1}{0.87 f_y y_1}$  (approximately)
            This steel is to be distributed equally in all four corners of the beam.
        *   **Total Longitudinal Steel:** The minimum longitudinal steel required for bending is calculated. Then, the additional steel for torsion is added. This additional steel is placed along the length of the beam.
        *   **Placement:** The additional longitudinal bars for torsion are typically placed at the corners of the beam and distributed along the perimeter.

---

### 6. Serviceability Requirements (Brief Mention)

While the focus is on the Limit State of Collapse, it's important to note that excessive torsion can also lead to:

*   **Cracking:** Wider cracks due to tensile stresses.
*   **Deflection:** Increased deflections.

Design codes usually specify limits for crack widths and deflections under service loads, which might indirectly influence the reinforcement required for torsion.

---

### 7. Interaction Between Bending, Shear, and Torsion

*   **Combined Stresses:** Torsion, bending, and shear create complex stress distributions within the concrete cross-section.
*   **Capacity Reduction:** The presence of one effect can reduce the capacity of the beam to resist the others. For example, torsion can reduce the shear capacity of the concrete.
*   **Design Philosophy:** The design is based on ensuring that the combined effects do not exceed the ultimate capacity of the section. The "equivalent shear" and "equivalent bending moment" approaches are used to simplify this interaction in design codes.

---

### Important Points to Remember:

*   **Minimum Torsional Reinforcement:** Always provide minimum torsional reinforcement, even if $T_u < T_{cr}$. This is crucial for ductility and controlled failure.
*   **Closed Stirrups:** Torsional reinforcement *must* be in the form of closed stirrups, with the ends properly anchored.
*   **Longitudinal Bars:** Additional longitudinal bars are essential for resisting torsion, placed at the corners of the beam.
*   **Spacing Limits:** Adhere to the maximum spacing limits for stirrups in torsion.
*   **Ductility:** Torsional reinforcement significantly improves the ductility of the beam, allowing for a more controlled failure.
*   **Crack Control:** Torsion can lead to significant cracking. Proper reinforcement is key to managing this.
*   **Rectangular vs. Non-Rectangular Sections:** The design provisions in codes are often specific to rectangular sections. For other shapes, the principles remain the same but calculations might differ.
*   **Interaction:** Always consider the interaction of bending, shear, and torsion.

---

### Practice Questions and Exercises

**Question 1:**

A rectangular concrete beam, $300 \text{ mm} \times 500 \text{ mm}$, is subjected to a factored bending moment $M_u = 100 \text{ kNm}$, a factored shear force $V_u = 120 \text{ kN}$, and a factored torsional moment $T_u = 50 \text{ kNm}$. The characteristic strength of concrete $f_{ck} = 30 \text{ MPa}$ and the characteristic strength of steel $f_y = 415 \text{ MPa}$. Design the shear and torsional reinforcement for the beam. Assume a concrete cover of $25 \text{ mm}$ and stirrup diameter of $10 \text{ mm}$.

**Answer Outline:**

1.  **Calculate $T_{cr}$:**
    *   $b = 300 \text{ mm}$, $d = 500 \text{ mm}$
    *   $T_{cr} = 0.7 \sqrt{f_{ck}} b d^2 \left(1 - \frac{b}{d}\right)$
    *   $T_{cr} = 0.7 \sqrt{30} \times 300 \times 500^2 \times (1 - 300/500) \times 10^{-6} \text{ kNm}$
    *   $T_{cr} \approx 75.4 \text{ kNm}$
    *   Since $T_u (50 \text{ kNm}) < T_{cr} (75.4 \text{ kNm})$, only minimum reinforcement is required for torsion.

2.  **Check for Minimum Torsional Reinforcement:**
    *   Even though $T_u < T_{cr}$, minimum torsional reinforcement needs to be provided.
    *   The minimum area of stirrups required for torsion is given by:
        $\frac{A_{st,min}}{s} = \frac{0.75 \sqrt{f_{ck}}}{f_y} \frac{b}{d}$  (for perimeter stirrups) - *Check IS 456 for exact clause for minimum torsional reinforcement.*
    *   The minimum longitudinal reinforcement for torsion is also specified.

3.  **Design for Shear:**
    *   Calculate equivalent shear $V_{eq} = V_u + 1.6 \frac{T_u}{b} = 120 + 1.6 \frac{50}{0.3} = 120 + 266.67 = 386.67 \text{ kN}$
    *   Calculate the shear stress $ \tau_v = \frac{V_{eq}}{bd} $
    *   Design stirrups for this $V_{eq}$.

4.  **Design for Torsion (if $T_u > T_{cr}$):**
    *   If $T_u$ were greater than $T_{cr}$, you would calculate $T_{ut} = T_u - T_{cr}$.
    *   Then calculate the required area of stirrups per unit length: $\frac{A_{st}}{s} = \frac{T_{ut}}{0.87 f_y x_1 y_1}$
    *   And the required longitudinal steel: $A_{st,torsion} = \frac{T_{ut} \cdot x_1}{0.87 f_y y_1}$
    *   Where $x_1 = 300 - 2 \times (\text{effective cover})$ and $y_1 = 500 - 2 \times (\text{effective cover})$.

**Since $T_u < T_{cr}$, the primary design consideration for reinforcement will be governed by the shear and bending requirements, with the addition of minimum torsional reinforcement.**

**Question 2:**

Explain the role of longitudinal and transverse reinforcement in resisting torsion in a concrete beam at the Limit State of Collapse.

**Answer:**

*   **Transverse Reinforcement (Stirrups):** Closed stirrups are the primary reinforcement for resisting torsion. When a beam is subjected to torsion, tensile stresses develop at approximately 45 degrees to the longitudinal axis. The stirrups, acting like hoops, effectively resist these diagonal tensile stresses. They carry the tensile forces induced by the torsional shear stresses.
*   **Longitudinal Reinforcement:** The longitudinal bars contribute to torsional resistance by resisting the tensile forces that develop due to the warping of the cross-section under torsion. They are particularly effective when placed at the extremities of the cross-section. The longitudinal bars, in conjunction with the stirrups, form a "cage" that provides composite resistance to torsion. In reinforced concrete, the longitudinal bars help to maintain the integrity of the section and distribute the torsional stresses.

---

This concludes the study notes for Torsion in Beams - Limit State of Collapse. Remember to always refer to the specific clauses and formulas in your relevant design code for accurate calculations.
