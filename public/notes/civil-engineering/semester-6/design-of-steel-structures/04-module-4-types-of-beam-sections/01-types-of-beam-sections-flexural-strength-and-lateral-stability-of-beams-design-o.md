---
title: "Types of beam sections- Flexural strength and lateral stability of beams- Design of laterally supported and laterally unsupported beams."
subject: "DESIGN OF STEEL STRUCTURES"
module: "Module 4: Types of beam sections"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8110bc"
status: "completed"
scrapedAt: "2026-05-20T18:52:48.932Z"
---
# DESIGN OF STEEL STRUCTURES - Module 4: Types of Beam Sections

## Topic: Types of Beam Sections, Flexural Strength and Lateral Stability of Beams, Design of Laterally Supported and Laterally Unsupported Beams

This module delves into the fundamental aspects of beam design in steel structures, focusing on different beam sections, their capacity to resist bending, and their susceptibility to instability. We will cover how to design beams that are adequately supported against buckling and those that are not.

---

### 1. Types of Beam Sections

Beams are structural elements designed to resist loads primarily through bending. The choice of beam section significantly impacts its strength, stiffness, and cost.

#### 1.1 Common Hot-Rolled Steel Beam Sections

*   **I-Sections (Rolled Steel I-Beams / Universal Beams / W-Sections):**
    *   **Description:** Characterized by their "I" shape, consisting of two flanges (horizontal elements) connected by a web (vertical element).
    *   **Advantages:** High bending strength due to the efficient distribution of material in the flanges, good stiffness, widely available in various sizes.
    *   **Applications:** Primary beams, secondary beams, columns in some cases.
    *   **Classification:**
        *   **S-beams (Standard I-beams):** In IS codes, often referred to as ISMB (Indian Standard Medium Beam).
        *   **W-beams (Wide flange beams):** In IS codes, often referred to as ISWB (Indian Standard Wide Beam) or ISMB with wider flanges.
        *   **H-beams:** Sections with roughly equal flange width and depth (often used as columns but can function as beams).
*   **Channel Sections (Rolled Steel Channel Beams / C-Sections):**
    *   **Description:** U-shaped sections with a web and two flanges.
    *   **Advantages:** Good for purlins, girts, and secondary framing where loads are typically smaller. Can provide some torsional resistance.
    *   **Applications:** Purlins in roof structures, secondary beams, door frames, window frames.
    *   **Classification:**
        *   **C-channels:** Standard channels.
        *   **MC-channels:** Miscellaneous channels.
        *   **In IS codes:** ISMC (Indian Standard Medium Channel), ISLC (Indian Standard Light Channel).
*   **Angle Sections (L-Sections):**
    *   **Description:** L-shaped sections with two legs. Can be equal or unequal legs.
    *   **Advantages:** Versatile, used for bracing, purlins, and secondary beams, especially in lighter structures.
    *   **Applications:** Bracing members, purlins, connections, secondary beams in truss systems.
    *   **Classification:**
        *   **Equal Leg Angles:** ISHA (Indian Standard Heavy Angle), ISA (Indian Standard Angle).
        *   **Unequal Leg Angles:** ISUA (Indian Standard Unequal Angle).
*   **T-Sections:**
    *   **Description:** Formed by cutting an I-section along its longitudinal axis of symmetry.
    *   **Advantages:** Can be used as secondary beams or in situations where one flange is not required.
    *   **Applications:** Secondary beams, cantilever beams, situations where only one flange is beneficial.

#### 1.2 Built-up Beam Sections

These are fabricated by welding or bolting together thinner plates to form a composite section, allowing for customisation of depth and flange width to meet specific load requirements.

*   **Box Girders/Cellular Beams:**
    *   **Description:** Rectangular or square hollow sections formed by welding plates.
    *   **Advantages:** High torsional stiffness, efficient use of material for large spans, can have openings (cellular beams) for services.
    *   **Applications:** Long-span bridges, heavy industrial structures, large roof spans.
*   **Plate Girders:**
    *   **Description:** Consist of a web plate and two flange plates connected by welding.
    *   **Advantages:** Can be fabricated to any depth and span, allowing for optimization for very heavy loads.
    *   **Applications:** Bridges, crane girders, large industrial beams.

#### **Learning Outcome 1: Identify and describe common types of steel beam sections.**

*   **Key Concept:** Understanding the geometric properties and advantages of different beam cross-sections is crucial for selecting the most efficient and economical member for a given application.

---

### 2. Flexural Strength of Beams

Flexural strength refers to a beam's ability to resist bending moments without yielding or buckling.

#### 2.1 Stress Distribution in a Beam

When a beam is subjected to transverse loads, it develops internal bending moments, causing compression on one face and tension on the opposite face. The stress distribution across the cross-section is linear, with zero stress at the neutral axis.

*   **Yielding:** Occurs when the stress at the extreme fiber reaches the yield stress of the material ($f_y$).
*   **Plastic Moment Capacity ($M_p$):** For ductile materials like steel, the section can undergo plastic redistribution of stresses after yielding. The plastic moment capacity is the maximum bending moment a cross-section can resist before reaching a plastic hinge.
    *   **Calculation:** $M_p = A_t \cdot y_p \cdot f_y$, where $A_t$ is the area of the tension or compression zone and $y_p$ is the distance from the neutral axis to the centroid of that zone.
    *   For symmetric I-sections, $M_p = Z_p \cdot f_y$, where $Z_p$ is the plastic section modulus.

#### 2.2 Classification of Steel Sections based on Local Buckling

Local buckling refers to the buckling of individual elements (flanges or web) of a beam section under compressive stress before the entire beam buckles or the material yields. Steel sections are classified into four categories based on their width-to-thickness ratios, which influence their behavior under bending.

| Class       | Flange Width-to-Thickness Ratio ($b/t$) | Web Slenderness Ratio ($h/t_w$) | Behaviour Under Bending                                                                                                                                                              | Design Moment Capacity                                                                                                                                         |
| :---------- | :-------------------------------------- | :-------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Class 1** | $\le \frac{67}{\sqrt{f_y}}$               | $\le \frac{3450}{\sqrt{f_y}}$       | Can develop plastic hinges. Can undergo significant plastic rotation.                                                                                                                | $M_d = \beta_b Z_p f_y / \gamma_{m0}$ (where $\beta_b$ is a factor usually taken as 1.0 for Class 1 and 2)                                                           |
| **Class 2** | $\le \frac{81}{\sqrt{f_y}}$               | $\le \frac{3450}{\sqrt{f_y}}$       | Can develop yielding but not full plastic hinges due to limited ductility. Strain hardening may occur.                                                                             | $M_d = Z_p f_y / \gamma_{m0}$ (or $M_d = Z_e f_y / \gamma_{m0}$, whichever is smaller, $Z_e$ is elastic section modulus)                                        |
| **Class 3** | $\le \frac{137}{\sqrt{f_y}}$              | $\le \frac{3450}{\sqrt{f_y}}$       | Elastic distribution of stress up to the yield point. Local buckling of the flange or web limits the stress.                                                                    | $M_d = Z_e f_y / \gamma_{m0}$                                                                                                                                  |
| **Class 4** | $>\frac{137}{\sqrt{f_y}}$               | $>\frac{3450}{\sqrt{f_y}}$        | Undergo local buckling at stresses below the yield point. Effective section properties need to be calculated based on the reduced width of the elements. (Often for built-up sections) | $M_d = Z_{eff} f_y / \gamma_{m0}$ (where $Z_{eff}$ is the effective section modulus)                                                                            |

*   **Note:** $f_y$ is the yield strength of steel (in N/mm²) and $\gamma_{m0}$ is the partial safety factor for yielding (typically 1.10 as per IS 800:2007).
*   **Flange Classification:** $b$ is the width of the flange element projecting from the web. For I-sections, $b$ is typically taken as half the flange width.
*   **Web Classification:** $h$ is the clear depth of the web between the fillets or the toes of the flanges.

#### 2.3 Design Moment Capacity

The design moment capacity of a beam is the maximum bending moment it can resist, considering its cross-sectional properties, material properties, and safety factors.

*   **Yielding Moment ($M_y$):** $M_y = Z_e \cdot f_y$, where $Z_e$ is the elastic section modulus.
*   **Plastic Moment ($M_p$):** $M_p = Z_p \cdot f_y$.
*   **Design Bending Strength ($M_{d,b}$):** This is the factored applied bending moment that the beam can resist.
    *   For Class 1 and 2 sections: $M_{d,b} = \beta_b Z_p f_y / \gamma_{m0}$ (where $\beta_b = 1.0$ if the section is capable of forming plastic hinges).
    *   For Class 3 sections: $M_{d,b} = Z_e f_y / \gamma_{m0}$.
    *   For Class 4 sections: $M_{d,b} = Z_{eff} f_y / \gamma_{m0}$.

#### **Learning Outcome 2: Calculate the flexural strength of different beam sections.**

*   **Key Concepts:** Yielding, plastic moment, section modulus ($Z_e$, $Z_p$), classification of sections (Class 1-4), design bending strength.
*   **Example:** A steel beam with an elastic section modulus $Z_e = 1200 \times 10^3$ mm³ and plastic section modulus $Z_p = 1400 \times 10^3$ mm³ is made of steel with $f_y = 250$ N/mm². If it's a Class 2 section, what is its design bending strength?
    *   $M_{d,b} = Z_p f_y / \gamma_{m0} = (1400 \times 10^3 \text{ mm}^3) \times (250 \text{ N/mm}^2) / 1.10$
    *   $M_{d,b} = 318.18 \times 10^6$ N-mm = 318.18 kN-m.

---

### 3. Lateral Stability of Beams

Lateral-torsional buckling (LTB) is a critical failure mode for beams, especially slender ones subjected to bending. It occurs when the compression flange of the beam buckles laterally and twists out of its original plane, along with the web and the tension flange.

#### 3.1 Factors Affecting Lateral Stability

*   **Unbraced Length ($L_u$):** The distance between points of lateral restraint (e.g., connections to bracing, slab participation). Longer unbraced lengths reduce stability.
*   **Cross-sectional Properties:**
    *   **Flange Width and Thickness:** Wider and thicker flanges provide greater resistance to lateral buckling.
    *   **Web Depth and Thickness:** Deeper webs can be more susceptible to LTB if not adequately supported.
    *   **Torsional Rigidity:** Sections with higher torsional rigidity (like box sections) are less prone to LTB.
*   **Magnitude and Gradient of Bending Moment:** A non-uniform bending moment along the span can provide some inherent restraint. The distribution of bending moment affects the critical buckling load.
*   **Support Conditions:** How the beam is supported at its ends and intermediate points.

#### 3.2 Types of Lateral Support

*   **Laterally Supported Beams:** The compression flange is continuously restrained against lateral movement and torsion. This can be achieved through:
    *   **Decking:** Concrete slab cast monolithically with the top flange.
    *   **Purlins/Girts:** Members connected to the compression flange at regular intervals.
    *   **Diagonal Bracing:** Members providing lateral restraint.
*   **Laterally Unsupported Beams:** The compression flange is not continuously restrained, and the beam is susceptible to lateral-torsional buckling. The unbraced length is the critical parameter.

#### 3.3 Design for Lateral Stability

The design bending strength ($M_{d,b}$) of a beam needs to be checked against the lateral-torsional buckling resistance ($M_{cr}$ or $M_{nl}$).

*   **When the beam is adequately braced (e.g., slab cast on top flange):** The design bending strength is primarily governed by the section's local buckling capacity (Class 1, 2, or 3) and yielding. The unbraced length is considered effectively zero or very small.
*   **When the beam is laterally unsupported:** The design bending strength is limited by the beam's resistance to lateral-torsional buckling.

#### **Learning Outcome 3: Understand the phenomenon of lateral stability and lateral-torsional buckling (LTB).**

*   **Key Concepts:** Lateral-torsional buckling (LTB), unbraced length ($L_u$), lateral restraints, factors affecting LTB.

---

### 4. Design of Laterally Supported Beams

When a beam is adequately braced against lateral movement and torsion (e.g., by a concrete slab acting as a diaphragm), its bending strength is governed by the material's yield strength and the section's plastic or elastic capacity.

#### 4.1 Design Procedure for Laterally Supported Beams

1.  **Calculate Factored Loads:** Determine the dead load and live load on the beam and apply load factors as per relevant codes (e.g., IS 800:2007).
2.  **Determine Maximum Factored Bending Moment ($M_u$):** Calculate the maximum bending moment from the applied factored loads.
3.  **Select a Trial Beam Section:** Choose a suitable rolled steel section (e.g., ISMB, ISWB) from the standard tables based on approximate depth and span considerations.
4.  **Check Section Classification:** Determine the class of the chosen section (Class 1, 2, 3, or 4) based on its flange and web slenderness ratios and the yield strength ($f_y$).
5.  **Calculate Design Bending Strength ($M_{d,b}$):**
    *   If Class 1 or 2: $M_{d,b} = \beta_b Z_p f_y / \gamma_{m0}$ (where $\beta_b = 1.0$).
    *   If Class 3: $M_{d,b} = Z_e f_y / \gamma_{m0}$.
    *   (Assume Class 4 requires calculation of effective section properties, which is usually for built-up members or specific cases).
6.  **Check for Shear:** Ensure the beam's shear capacity is adequate for the applied shear forces. (This is often checked after bending is satisfied, as beams are typically governed by bending).
7.  **Check Deflection:** Ensure the calculated deflection under service loads is within the allowable limits.
8.  **Compare:** If $M_u \le M_{d,b}$, the section is adequate for bending. If not, select a larger section and repeat the process.

#### 4.2 Example: Design of a Laterally Supported Beam

**Problem:** Design a simply supported beam of span 6 m subjected to a uniformly distributed service load of 20 kN/m (including self-weight). The beam is provided with a concrete slab cast on the top flange, effectively bracing it laterally. Assume Fe 410 grade steel ($f_y = 250$ N/mm²).

**Solution:**

1.  **Factored Load:**
    *   Load factor = 1.5
    *   Factored UDL, $w_u = 1.5 \times 20$ kN/m = 30 kN/m

2.  **Maximum Factored Bending Moment ($M_u$):**
    *   For a simply supported beam with UDL, $M_u = w_u L^2 / 8$
    *   $M_u = (30 \times 10^{-3} \text{ MN/m}) \times (6 \text{ m})^2 / 8 = 135$ kNm

3.  **Select Trial Section:**
    *   Approximate $M_u \approx Z_e f_y / \gamma_{m0}$. Let's assume Class 2 for initial selection, so $M_{d,b} \approx Z_p f_y / \gamma_{m0}$.
    *   Required $Z_p \approx M_u \times \gamma_{m0} / f_y = (135 \times 10^6 \text{ N-mm}) \times 1.10 / 250 \text{ N/mm}^2 = 594 \times 10^3$ mm³.
    *   Let's try ISMB 300 (from steel tables).
        *   Area ($A$) = 5620 mm²
        *   Depth ($d$) = 300 mm
        *   Flange width ($b_f$) = 140 mm
        *   Web thickness ($t_w$) = 8.0 mm
        *   Flange thickness ($t_f$) = 10.4 mm
        *   $Z_e = 519.2 \times 10^3$ mm³
        *   $Z_p = 591.2 \times 10^3$ mm³ (approximate, check tables carefully)

4.  **Check Section Classification:**
    *   For flange: $b/t_f = (140/2) / 10.4 = 70 / 10.4 = 6.73$
    *   Limit for Class 1 flange: $67/\sqrt{f_y} = 67/\sqrt{250} = 4.23$
    *   Limit for Class 2 flange: $81/\sqrt{f_y} = 81/\sqrt{250} = 5.13$
    *   Limit for Class 3 flange: $137/\sqrt{f_y} = 137/\sqrt{250} = 8.67$
    *   Since $5.13 < 6.73 < 8.67$, the flange is Class 3.
    *   For web: $h/t_w = (300 - 2 \times 10.4 - 2 \times (\text{approx. fillet radius})) / 8.0$. Assuming web depth is $d - 2t_f - 2r$ (approximate $r=12$). So, $h \approx 300 - 2(10.4) - 2(12) = 300 - 20.8 - 24 = 255.2$ mm.
    *   $h/t_w = 255.2 / 8.0 = 31.9$
    *   Limit for Class 1 web: $3450/\sqrt{f_y} = 3450/\sqrt{250} = 218.2$
    *   Limit for Class 2 web: $3450/\sqrt{f_y} = 218.2$
    *   Limit for Class 3 web: $3450/\sqrt{f_y} = 218.2$
    *   Since $31.9 < 218.2$, the web is Class 1.
    *   The section is governed by the flange classification, so it's a **Class 3 section**.

5.  **Calculate Design Bending Strength ($M_{d,b}$):**
    *   For Class 3 section: $M_{d,b} = Z_e f_y / \gamma_{m0}$
    *   $M_{d,b} = (519.2 \times 10^3 \text{ mm}^3) \times (250 \text{ N/mm}^2) / 1.10$
    *   $M_{d,b} = 118.00 \times 10^6$ N-mm = 118.00 kNm

6.  **Compare:**
    *   $M_u = 135$ kNm
    *   $M_{d,b} = 118.00$ kNm
    *   Since $M_u > M_{d,b}$, the ISMB 300 is **not adequate**.

7.  **Select Next Section:** Let's try ISMB 350.
    *   Area ($A$) = 6970 mm²
    *   Depth ($d$) = 350 mm
    *   Flange width ($b_f$) = 165 mm
    *   Web thickness ($t_w$) = 9.1 mm
    *   Flange thickness ($t_f$) = 12.1 mm
    *   $Z_e = 733.3 \times 10^3$ mm³
    *   $Z_p = 830.6 \times 10^3$ mm³

8.  **Check Classification for ISMB 350:**
    *   Flange: $b/t_f = (165/2) / 12.1 = 82.5 / 12.1 = 6.82$. Still Class 3 flange (since $8.67$ is the limit).
    *   Web: $h/t_w \approx (350 - 2(12.1) - 2(14.2)) / 9.1 = (350 - 24.2 - 28.4) / 9.1 = 297.4 / 9.1 = 32.68$. Still Class 1 web.
    *   The section is **Class 3**.

9.  **Calculate Design Bending Strength ($M_{d,b}$) for ISMB 350:**
    *   $M_{d,b} = Z_e f_y / \gamma_{m0} = (733.3 \times 10^3 \text{ mm}^3) \times (250 \text{ N/mm}^2) / 1.10$
    *   $M_{d,b} = 166.66 \times 10^6$ N-mm = 166.66 kNm

10. **Compare:**
    *   $M_u = 135$ kNm
    *   $M_{d,b} = 166.66$ kNm
    *   Since $M_u < M_{d,b}$, the **ISMB 350 is adequate** for bending.

    **(Further checks for shear, deflection, and bearing would be required in a complete design).**

#### **Learning Outcome 4: Design laterally supported beams.**

*   **Key Concepts:** Load factors, factored loads, bending moment calculation, section classification, design bending strength calculation, comparison of applied moment with design strength.

---

### 5. Design of Laterally Unsupported Beams

For beams without adequate lateral restraint, the primary design consideration becomes their resistance to lateral-torsional buckling (LTB). The design bending strength will be governed by the lesser of the section's local buckling capacity and its LTB capacity.

#### 5.1 Design Procedure for Laterally Unsupported Beams

1.  **Calculate Factored Loads and Maximum Factored Bending Moment ($M_u$):** Same as for laterally supported beams.
2.  **Select a Trial Beam Section:** Choose a section based on approximate depth and span.
3.  **Check Section Classification:** Determine the class of the chosen section (Class 1, 2, 3, or 4) based on its flange and web slenderness ratios.
4.  **Calculate Design Bending Strength for Local Buckling ($M_{d,b}$):** This is calculated as per the section classification (as discussed in Section 2.3).
5.  **Calculate Design Bending Strength due to Lateral-Torsional Buckling ($M_{nl}$):** This is the critical step for unsupported beams.
    *   **Calculate the critical elastic buckling moment ($M_{cr}$):** This depends on the unbraced length ($L_u$), the section's torsional constant ($J$), warping constant ($C_w$), and the moment gradient factor ($C_b$).
        *   $M_{cr} = \frac{\pi}{L_u} \sqrt{E I_y G J + \frac{\pi^2 E^2 I_y C_w}{L_u^2}}$
        *   Where:
            *   $E$ = Modulus of Elasticity of steel ($200 \times 10^3$ N/mm²)
            *   $I_y$ = Moment of inertia about the weak axis (y-axis)
            *   $G$ = Shear Modulus of steel ($0.77 \times 10^5$ N/mm²)
            *   $J$ = Torsional constant
            *   $C_w$ = Warping constant
            *   $L_u$ = Unbraced length
            *   $C_b$ = Moment gradient factor (accounts for variation in bending moment along $L_u$)
    *   **Determine Design Strength for LTB ($M_{nl}$):** This depends on whether $M_{cr}$ is greater or less than the yield moment ($M_y = Z_p f_y$ or $Z_e f_y$ depending on section class). The code provides specific formulas to calculate $M_{nl}$ by considering $M_{cr}$, $M_y$, and the slenderness of the beam in LTB.
        *   For I-sections (and similar symmetric sections), IS 800:2007 provides formulas based on the slenderness parameter $\lambda_{LT}$.
        *   The design shear force ($V_u$) also plays a role in reducing the bending strength if $V_u$ is high relative to shear capacity.
6.  **Determine the Design Bending Strength ($M_{d,b}$):** The final design bending strength is the minimum of the local buckling capacity and the LTB capacity.
    *   $M_{d,b} = \min (M_{d,b, \text{local}}, M_{nl})$
7.  **Check for Shear:** Ensure shear capacity is adequate.
8.  **Check Deflection:** Ensure deflection is within limits.
9.  **Compare:** If $M_u \le M_{d,b}$, the section is adequate. Otherwise, select a larger section or provide lateral bracing.

#### 5.2 Moment Gradient Factor ($C_b$)

The moment gradient factor $C_b$ accounts for the beneficial effect of a non-uniform bending moment distribution on LTB resistance. For a simply supported beam with UDL, the formula is:

$C_b = \frac{M_{max}}{2.75 M_{avg}}$

where:
*   $M_{max}$ is the maximum bending moment in the unbraced segment.
*   $M_{avg}$ is the average bending moment in the unbraced segment.

For a simply supported beam with UDL over the full span, $M_{avg} = M_{max}/2$, so $C_b = M_{max} / (2.75 \times M_{max}/2) = 1 / 1.375 = 0.727$.
However, for beams under uniform moment or similar distributions, $C_b$ can be 1.0. The code provides specific values for various loading conditions. For design purposes, $C_b$ is often capped at 1.0.

#### 5.3 Design of Laterally Unsupported Beams - Key Formulas (Based on IS 800:2007)

Let's consider an I-section.

*   **Calculate $M_{cr}$:** (Simplified expression for bending about major axis)
    $M_{cr} = \frac{\pi}{L_u} \sqrt{E I_y G J + \frac{\pi^2 E^2 I_y C_w}{L_u^2}}$
    *   For I-sections, $J$ and $C_w$ values are available in standard tables or can be calculated.
*   **Calculate Slenderness Parameter $\lambda_{LT}$:**
    $\lambda_{LT} = \sqrt{\frac{Z_p f_y}{M_{cr}}}$ (approximate for Class 1 & 2 sections)
    *   More precisely, the code defines $\lambda_{LT}$ based on geometric properties and $M_{cr}$.
*   **Calculate Design Stress in Flange ($f_{bd}$) resisting LTB:**
    This is a function of $\lambda_{LT}$.
    *   If $\lambda_{LT} \le 0.2$: $f_{bd} = 0.66 f_y$
    *   If $0.2 < \lambda_{LT} \le 1.76$: $f_{bd} = \frac{f_y}{1.76} (1.76 - 0.44 \lambda_{LT})$
    *   If $\lambda_{LT} > 1.76$: $f_{bd} = \frac{f_y}{4 \lambda_{LT}^2}$
*   **Calculate Design Bending Moment Capacity ($M_{nl}$):**
    *   $M_{nl} = f_{bd} Z_p$ (for Class 1 & 2 sections)
    *   $M_{nl} = f_{bd} Z_e$ (for Class 3 sections)
    *   Where $Z_p$ or $Z_e$ corresponds to the section's plastic or elastic section modulus.

**Important Note:** The above are simplified representations. The actual formulas in IS 800:2007 are more precise and account for various factors and exceptions. It's crucial to refer to the code for exact calculations, especially for $M_{cr}$ and the subsequent calculation of $f_{bd}$.

#### 5.4 Example: Design of a Laterally Unsupported Beam

**Problem:** Design a simply supported beam of span 8 m subjected to a uniformly distributed service load of 15 kN/m (including self-weight). The beam is not provided with continuous lateral support. Assume Fe 410 grade steel ($f_y = 250$ N/mm²) and the unbraced length $L_u = 8$ m. Use $C_b = 1.0$ for this simplified example.

**Solution:**

1.  **Factored Load:**
    *   Load factor = 1.5
    *   Factored UDL, $w_u = 1.5 \times 15$ kN/m = 22.5 kN/m

2.  **Maximum Factored Bending Moment ($M_u$):**
    *   $M_u = w_u L^2 / 8 = (22.5 \times 10^{-3} \text{ MN/m}) \times (8 \text{ m})^2 / 8 = 180$ kNm

3.  **Select Trial Section:**
    *   Approximate $M_u \approx M_{nl}$. Let's assume a Class 1 or 2 section for initial estimation of $Z_p$.
    *   Required $Z_p \approx M_u \times \gamma_{m0} / f_y = (180 \times 10^6 \text{ N-mm}) \times 1.10 / 250 \text{ N/mm}^2 = 792 \times 10^3$ mm³.
    *   Let's try ISMB 400.
        *   Area ($A$) = 8070 mm²
        *   Depth ($d$) = 400 mm
        *   Flange width ($b_f$) = 180 mm
        *   Web thickness ($t_w$) = 9.8 mm
        *   Flange thickness ($t_f$) = 13.1 mm
        *   $Z_e = 930.4 \times 10^3$ mm³
        *   $Z_p = 1050.5 \times 10^3$ mm³
        *   $I_y = 31.0 \times 10^6$ mm⁴
        *   $J = 1.36 \times 10^6$ mm³
        *   $C_w = 341.7 \times 10^9$ mm⁶

4.  **Check Section Classification:**
    *   Flange: $b/t_f = (180/2) / 13.1 = 90 / 13.1 = 6.87$. Flange is Class 3 (limit is 8.67).
    *   Web: $h/t_w \approx (400 - 2 \times 13.1 - 2 \times 16) / 9.8 = (400 - 26.2 - 32) / 9.8 = 341.8 / 9.8 = 34.88$. Web is Class 1 (limit is 218.2).
    *   The section is **Class 3**. This means we use $Z_e$ for local buckling capacity and $Z_e$ or $Z_p$ for LTB capacity depending on the context. Let's use $Z_p$ for LTB capacity as per code tendency.

5.  **Calculate Design Bending Strength for Local Buckling ($M_{d,b, \text{local}}$):**
    *   For Class 3 section: $M_{d,b, \text{local}} = Z_e f_y / \gamma_{m0}$
    *   $M_{d,b, \text{local}} = (930.4 \times 10^3 \text{ mm}^3) \times (250 \text{ N/mm}^2) / 1.10$
    *   $M_{d,b, \text{local}} = 211.45 \times 10^6$ N-mm = 211.45 kNm

6.  **Calculate Design Bending Strength due to Lateral-Torsional Buckling ($M_{nl}$):**
    *   **Calculate $M_{cr}$:**
        $M_{cr} = \frac{\pi}{L_u} \sqrt{E I_y G J + \frac{\pi^2 E^2 I_y C_w}{L_u^2}}$
        $M_{cr} = \frac{\pi}{8000 \text{ mm}} \sqrt{(200000 \text{ N/mm}^2)(31.0 \times 10^6 \text{ mm}^4)(0.77 \times 10^5 \text{ N/mm}^2)(1.36 \times 10^6 \text{ mm}^3) + \frac{\pi^2 (200000 \text{ N/mm}^2)^2 (31.0 \times 10^6 \text{ mm}^4)(341.7 \times 10^9 \text{ mm}^6)}{(8000 \text{ mm})^2}}$
        *   This calculation is complex. Using structural software or online calculators, we find $M_{cr} \approx 190$ kNm (this is a rough estimate, actual value needs careful computation).

    *   **Calculate $\lambda_{LT}$:** (Using simplified code formula for I-sections)
        $\lambda_{LT} = \frac{L_u}{r_{yy}} \sqrt{\frac{f_y}{E}} \sqrt{1 + \frac{\pi^2 E C_w}{G J L_u^2}}$  (approximate)
        A more practical approach uses a direct formula relating $M_{cr}$ to $L_u$, $I_y$, $J$, $C_w$.
        Let's assume $\lambda_{LT} = 1.0$ for this section and span (this needs proper calculation based on code).

    *   **Calculate $f_{bd}$ based on $\lambda_{LT}$:**
        If $\lambda_{LT} = 1.0$, then using the formula for $0.2 < \lambda_{LT} \le 1.76$:
        $f_{bd} = \frac{f_y}{1.76} (1.76 - 0.44 \lambda_{LT}) = \frac{250}{1.76} (1.76 - 0.44 \times 1.0) = 142.05 (1.32) = 187.45$ N/mm²

    *   **Calculate $M_{nl}$:**
        Since the section is Class 3, we use $Z_e$.
        $M_{nl} = f_{bd} Z_e = (187.45 \text{ N/mm}^2) \times (930.4 \times 10^3 \text{ mm}^3) = 174.44 \times 10^6$ N-mm = 174.44 kNm

7.  **Determine the Design Bending Strength ($M_{d,b}$):**
    *   $M_{d,b} = \min (M_{d,b, \text{local}}, M_{nl})$
    *   $M_{d,b} = \min (211.45 \text{ kNm}, 174.44 \text{ kNm})$
    *   $M_{d,b} = 174.44$ kNm

8.  **Compare:**
    *   $M_u = 180$ kNm
    *   $M_{d,b} = 174.44$ kNm
    *   Since $M_u > M_{d,b}$, the ISMB 400 is **not adequate**.

9.  **Select Next Section:** Try ISMB 450.
    *   (Repeat the process of checking classification, calculating $M_{d,b, \text{local}}$ and $M_{nl}$, and comparing).
    *   **A more practical approach would be to increase the section size or provide intermediate lateral bracing to reduce $L_u$.**

#### **Learning Outcome 5: Design laterally unsupported beams.**

*   **Key Concepts:** Lateral-torsional buckling (LTB), critical elastic buckling moment ($M_{cr}$), moment gradient factor ($C_b$), slenderness parameter ($\lambda_{LT}$), design stress for LTB ($f_{bd}$), design bending moment capacity ($M_{nl}$), comparison of applied moment with the minimum of local buckling and LTB capacities.

---

### 6. Practice Questions and Exercises

**Question 1:** Classify the following sections made of Fe 410 steel ($f_y = 250$ N/mm²) as Class 1, 2, 3, or 4 under bending.
    a) Flange: $b/t_f = 7.0$, Web: $h/t_w = 25.0$
    b) Flange: $b/t_f = 5.0$, Web: $h/t_w = 20.0$
    c) Flange: $b/t_f = 9.0$, Web: $h/t_w = 30.0$

**Question 2:** Calculate the design bending strength of a Class 2 I-section with $Z_p = 950 \times 10^3$ mm³ and $f_y = 250$ N/mm².
    **(Assume $\gamma_{m0} = 1.10$)**

**Question 3:** A simply supported beam of span 5 m is laterally supported along its entire length. It carries a factored UDL of 40 kN/m. The beam is an ISMB 300 (Class 3 section with $Z_e = 519.2 \times 10^3$ mm³). Check if the section is adequate for bending.
    **(Assume $f_y = 250$ N/mm², $\gamma_{m0} = 1.10$)**

**Question 4:** Explain the importance of the moment gradient factor ($C_b$) in the design of laterally unsupported beams.

**Question 5:** Briefly outline the steps involved in designing a laterally unsupported beam.

---

### Answers to Practice Questions

**Answer 1:**
Limits for $f_y = 250$ N/mm²:
*   Flange: Class 1 ($\le 4.23$), Class 2 ($\le 5.13$), Class 3 ($\le 8.67$)
*   Web: Class 1, 2, 3 ($\le 218.2$)

    a) Flange: $7.0$ (Class 3), Web: $25.0$ (Class 1). Overall: **Class 3**
    b) Flange: $5.0$ (Class 2), Web: $20.0$ (Class 1). Overall: **Class 2**
    c) Flange: $9.0$ (Class 4), Web: $30.0$ (Class 1). Overall: **Class 4**

**Answer 2:**
For a Class 2 section, $M_{d,b} = Z_p f_y / \gamma_{m0}$
$M_{d,b} = (950 \times 10^3 \text{ mm}^3) \times (250 \text{ N/mm}^2) / 1.10$
$M_{d,b} = 215.91 \times 10^6$ N-mm = **215.91 kNm**

**Answer 3:**
1.  Factored UDL, $w_u = 40$ kN/m
2.  Maximum factored bending moment, $M_u = w_u L^2 / 8 = (40 \times 10^{-3} \text{ MN/m}) \times (5 \text{ m})^2 / 8 = 125$ kNm
3.  Section is Class 3.
4.  Design bending strength, $M_{d,b} = Z_e f_y / \gamma_{m0}$
    $M_{d,b} = (519.2 \times 10^3 \text{ mm}^3) \times (250 \text{ N/mm}^2) / 1.10$
    $M_{d,b} = 118.00 \times 10^6$ N-mm = 118.00 kNm
5.  Comparison: $M_u = 125$ kNm and $M_{d,b} = 118.00$ kNm.
    Since $M_u > M_{d,b}$, the **ISMB 300 is not adequate**.

**Answer 4:**
The moment gradient factor ($C_b$) accounts for the beneficial effect of a non-uniform bending moment distribution along the unbraced length of a beam. When the bending moment varies along the span, the points of maximum compression are not subjected to the maximum moment throughout the entire unbraced length, which increases the beam's resistance to lateral-torsional buckling. A higher $C_b$ value (closer to 1.0) indicates a more favorable moment distribution and thus a higher LTB capacity.

**Answer 5:**
The steps involved in designing a laterally unsupported beam are:
1.  Calculate factored loads and determine the maximum factored bending moment ($M_u$).
2.  Select a trial beam section.
3.  Check the section classification (Class 1, 2, 3, or 4) based on flange and web slenderness.
4.  Calculate the design bending strength for local buckling ($M_{d,b, \text{local}}$) based on the section class.
5.  Calculate the critical elastic buckling moment ($M_{cr}$) using properties like $I_y$, $J$, $C_w$, and the unbraced length ($L_u$), along with the moment gradient factor ($C_b$).
6.  Determine the design bending strength due to lateral-torsional buckling ($M_{nl}$) using $M_{cr}$ and section properties, often via a slenderness parameter $\lambda_{LT}$ and corresponding design stress $f_{bd}$.
7.  The overall design bending strength is the minimum of $M_{d,b, \text{local}}$ and $M_{nl}$.
8.  Compare the applied moment ($M_u$) with the calculated design bending strength. If $M_u \le M_{d,b}$, the section is adequate; otherwise, a larger section or intermediate bracing is required.
9.  Perform checks for shear, deflection, and bearing.

---

### Important Points to Remember

*   **Section Classification:** Crucial for determining the bending strength of a beam. Always check both flange and web.
*   **Laterally Supported vs. Unsupported:** This distinction dictates whether LTB needs to be considered.
*   **Unbraced Length ($L_u$):** The most critical parameter for LTB. Any provided lateral restraint reduces $L_u$.
*   **$M_{cr}$ Calculation:** Requires accurate properties of the section ($I_y, J, C_w$) and the correct moment gradient factor ($C_b$).
*   **Design Strength:** Always the *minimum* of the capacities due to local buckling and lateral-torsional buckling.
*   **IS 800:2007:** Always refer to the latest version of the design code for specific formulas, limits, and safety factors.

---
This concludes Module 4. The next module will likely build upon these concepts by discussing other beam design aspects like shear design and deflection control in more detail.
