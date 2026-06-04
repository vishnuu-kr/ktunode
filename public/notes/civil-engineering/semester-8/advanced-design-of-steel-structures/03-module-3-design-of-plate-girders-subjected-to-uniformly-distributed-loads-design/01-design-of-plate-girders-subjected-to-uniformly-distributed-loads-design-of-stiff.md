---
title: "Design of plate girders subjected to uniformly distributed loads – design   of stiffeners"
subject: "ADVANCED DESIGN OF STEEL STRUCTURES"
module: "Module 3: Design of plate girders subjected to uniformly distributed loads – design   of stiffeners"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba8118f9"
status: "completed"
scrapedAt: "2026-05-20T19:02:28.457Z"
---
# ADVANCED DESIGN OF STEEL STRUCTURES - Module 3: Design of Plate Girders

## Topic: Design of Plate Girders Subjected to Uniformly Distributed Loads – Design of Stiffeners

This module focuses on the detailed design of plate girders, specifically addressing the crucial role of stiffeners when subjected to uniformly distributed loads (UDLs).

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the need for and types of stiffeners in plate girders.
*   Calculate the bending and shear capacity of plate girder webs.
*   Determine the slenderness limits for web panels.
*   Design longitudinal stiffeners for plate girders.
*   Design transverse stiffeners (vertical and horizontal) for plate girders.
*   Check the adequacy of stiffeners against buckling, yielding, and shear distortion.
*   Understand the interaction between stiffeners and the web panel.
*   Apply relevant design codes and standards (e.g., IS 800:2007, Eurocode 3, AASHTO LRFD) for stiffener design.

---

### 1. Introduction to Plate Girders and the Role of Stiffeners

#### 1.1 What is a Plate Girder?

*   A **plate girder** is a built-up beam formed by welding or riveting together three rectangular steel plates: a **web plate** and two **flange plates**.
*   They are used for longer spans and heavier loads where a single rolled section would be uneconomical or unavailable.
*   The primary load-carrying elements are the flanges (resisting bending moment) and the web (resisting shear force).

#### 1.2 The Need for Stiffeners

*   **Thin Webs:** The web of a plate girder is typically thin relative to its depth, making it susceptible to buckling under shear and transverse loads.
*   **Buckling Modes:**
    *   **Shear Buckling:** The web can buckle in a diagonal tension field pattern when subjected to shear.
    *   **Transverse Buckling:** The web can buckle locally under concentrated transverse loads.
    *   **Longitudinal Buckling:** Under high bending stresses, the web can buckle longitudinally.
*   **Stiffeners** are additional steel elements attached to the web to improve its buckling resistance and load-carrying capacity. They act to stiffen the web, prevent excessive deformation, and distribute loads.

#### 1.3 Types of Stiffeners

*   **Longitudinal Stiffeners:** Placed parallel to the longitudinal axis of the girder, along the web. They increase the shear buckling strength and the slenderness limit for the web.
*   **Transverse Stiffeners:** Placed perpendicular to the longitudinal axis of the girder.
    *   **Vertical Stiffeners (Web Stiffeners):** The most common type, used to resist shear buckling and concentrated loads.
    *   **Horizontal Stiffeners (Intermediate Transverse Stiffeners):** Less common, used in conjunction with vertical stiffeners to provide additional support against shear buckling, especially for very deep webs.
*   **Bearing Stiffeners:** A special type of transverse stiffener placed at supports or under concentrated loads to prevent web crippling and buckling.

---

### 2. Design of Plate Girder Webs

Before designing stiffeners, it's essential to understand the web's capacity.

#### 2.1 Bending Capacity of the Web

*   The web primarily resists shear. Bending stresses in the web are typically low compared to the flanges and are often neglected in preliminary calculations unless the web is very deep.
*   **Effective Area:** For bending, the full depth of the web can be considered if the web slenderness ratio ($h/t_w$) is within limits. If it's too slender, local buckling of the web might govern.

#### 2.2 Shear Capacity of the Web

*   The web's primary role is to resist shear. The shear capacity depends on:
    *   Web material yield strength ($f_y$).
    *   Web slenderness ratio ($h/t_w$), where $h$ is the clear depth of the web and $t_w$ is the web thickness.
    *   Presence and spacing of stiffeners.

*   **Design Shear Strength ($V_{dw}$):** This is typically calculated based on yielding and buckling criteria. Standards provide specific formulas. For example, in IS 800:2007 (Clause 8.4.1):
    *   **Shear Yielding:** $V_{yw} = A_v f_{yw} / \sqrt{3}$, where $A_v$ is the shear area ($h \times t_w$) and $f_{yw}$ is the yield strength of the web.
    *   **Shear Buckling Strength ($V_{cr}$):** This is a more complex calculation involving the shear buckling coefficient ($k_v$), which depends on the aspect ratio of the web panel ($a/h$) and the stiffener type.

#### 2.3 Slenderness Limits for Web Panels

*   **Web Slenderness Ratio ($h/t_w$):** This is a critical parameter. High $h/t_w$ values require more robust stiffening.
*   **Aspect Ratio ($a/h$):** The ratio of the distance between transverse stiffeners ($a$) to the clear depth of the web ($h$).
*   **Allowable $h/t_w$:** Codes specify limits for unstiffened webs. When these limits are exceeded, stiffeners are required.
*   **Intermediate Transverse Stiffeners:** Used to reduce the effective aspect ratio ($a/h$), thereby increasing the shear buckling strength.

---

### 3. Design of Longitudinal Stiffeners

Longitudinal stiffeners are used to increase the buckling resistance of the web to shear, especially in panels with high $h/t_w$ ratios.

#### 3.1 Purpose of Longitudinal Stiffeners

*   Increase the shear buckling strength by reducing the effective slenderness of the web.
*   Can be used to allow for a larger $h/t_w$ ratio in the web, potentially saving material.
*   They effectively divide the web into smaller panels.

#### 3.2 Design Considerations for Longitudinal Stiffeners

*   **Location:** Typically placed at a distance from the tension flange to avoid interference with the principal stress flow.
*   **Effective Width:** The stiffener, along with a portion of the web adjacent to it, acts as a composite section to resist buckling. The effective width of the web is usually taken as a fraction of the web depth, defined by codes.
*   **Moment of Inertia Requirement:** The longitudinal stiffener must have a minimum moment of inertia ($I_{st}$) to effectively stiffen the web. Codes provide formulas for this minimum $I_{st}$, often dependent on the web slenderness, aspect ratio, and desired shear capacity.
    *   **Example (Conceptual, based on general principles):** $I_{st} \ge C \times t_w^3$, where $C$ is a coefficient based on the design requirements.
*   **Cross-Sectional Area Requirement:** The stiffener itself must have sufficient area to resist buckling as a column (when considering the buckling mode involving the stiffener and attached web).
    *   **Minimum Area:** Codes usually specify a minimum cross-sectional area for the longitudinal stiffener, often proportional to the web thickness and the stiffener spacing.
*   **Stiffener-to-Web Connection:** The stiffener must be adequately welded or riveted to the web to ensure composite action. The strength of these connections is crucial.
*   **Local Buckling of Stiffener:** The stiffener itself can buckle locally. Its width-to-thickness ratio must be checked against slenderness limits.

#### 3.3 Calculation of Shear Buckling with Longitudinal Stiffeners

*   When longitudinal stiffeners are present, the shear buckling coefficient ($k_v$) increases, leading to a higher shear buckling strength.
*   The spacing of longitudinal stiffeners ($a$ or $b$) and their stiffness influence $k_v$. Codes provide charts or formulas to determine $k_v$ based on these parameters.

---

### 4. Design of Transverse Stiffeners (Vertical Stiffeners)

Vertical stiffeners are essential to prevent shear buckling and to transfer concentrated loads.

#### 4.1 Purpose of Vertical Stiffeners

*   **Shear Buckling Resistance:** They divide the web into smaller rectangular panels, increasing the shear buckling strength of the web.
*   **Load Transfer:** They are used to transmit concentrated loads from the flanges or other structural elements to the web or to transfer shear to adjacent panels.
*   **Prevent Web Crippling/Buckling:** At supports or points of concentrated load, they prevent the web from crushing or buckling under the applied force.

#### 4.2 Types of Vertical Stiffeners

*   **Unstiffened Web Panels:** Panels without any stiffeners (only suitable for low shear stresses).
*   **Stiffened Web Panels:**
    *   **Intermediate Transverse Stiffeners:** Placed at intervals to enhance shear buckling resistance.
    *   **Bearing Stiffeners:** Placed at supports or concentrated load points.

#### 4.3 Design of Intermediate Transverse Stiffeners

*   **Stiffener Area Requirement:** The stiffener must act as a strut to resist the buckling of the web panel. The required area of the stiffener is often determined by treating it as a column subjected to a portion of the shear force or a buckling load.
    *   **Example (IS 800:2007 Clause 8.4.2.2):** The stiffener is designed to have a minimum area and a minimum moment of inertia. The area requirement ensures it can carry a portion of the shear force as a column. The moment of inertia requirement ensures it can adequately stiffen the web against buckling.
*   **Moment of Inertia Requirement:** The stiffener must have a minimum moment of inertia about the web mid-plane to ensure sufficient rigidity. This is crucial for effectively preventing shear buckling.
    *   **Example (IS 800:2007):** $I_{st} \ge \frac{h t_w^3}{12} \times (\text{factor based on } a/h \text{ and web buckling factor})$.
*   **Cross-Sectional Area Requirement:** The stiffener needs sufficient area to withstand buckling as a column. The effective column is often considered as the stiffener plus a portion of the web.
    *   **Example (IS 800:2007):** The net area of the stiffener should be at least $25 t_w^2$ (for pairs of stiffeners) or $12 t_w^2$ (for single stiffeners), where $t_w$ is the web thickness. The calculation of the effective slenderness ratio for this column is important, considering boundary conditions.
*   **Stiffener-to-Web Connection:** The welds connecting the stiffener to the web must be strong enough to transfer the shear and any induced forces.
*   **Local Buckling of Stiffener:** The outstanding leg of the stiffener must be checked for local buckling. The width-to-thickness ratio of the stiffener leg should be within code limits.
*   **Stiffener Spacing ($a$):** The spacing of transverse stiffeners is determined by the required shear capacity and the web slenderness. Shorter spans between stiffeners ($a$) increase shear buckling resistance.

#### 4.4 Design of Bearing Stiffeners

*   **Purpose:** To transfer concentrated loads (reactions at supports, loads from columns) to the web without local web buckling or crippling.
*   **Design as Columns:** Bearing stiffeners are designed as columns. The effective load on the column is the applied concentrated force.
*   **Effective Length:** The effective length of the bearing stiffener column is usually taken as 0.7 to 1.0 times the web depth ($h$), depending on the stiffener-to-web connection and the presence of other stiffeners.
*   **Cross-Section:** Typically designed as pairs of angles or channels back-to-back, or as a box section with the web acting as one side.
*   **Load Transfer:** The stiffeners must be adequately connected to the flanges and the web to transfer the concentrated load efficiently.
*   **Web Crippling:** In addition to column buckling, the web under the bearing stiffener must be checked for crippling. This is a local failure mode where the web buckles under the concentrated bearing pressure. Codes provide formulas for web crippling capacity.
*   **Bearing Area:** The bearing area of the stiffener on the flange and the web must be sufficient to prevent yielding or crushing.

---

### 5. Checking Stiffener Adequacy

After determining the required properties and cross-section of a stiffener, its adequacy must be checked against various failure modes.

#### 5.1 Buckling of Stiffeners

*   **Longitudinal Stiffeners:**
    *   **Column Buckling:** Check the stiffener plus its effective web width against column buckling.
    *   **Local Buckling:** Check the outstanding leg of the stiffener.
*   **Transverse Stiffeners (as columns):**
    *   **Column Buckling:** Check the stiffener cross-section (including effective web portion) as a column against the forces it is designed to resist. Effective slenderness ratio and buckling class are determined based on boundary conditions and geometry.
    *   **Local Buckling:** Check the outstanding leg of the stiffener.

#### 5.2 Yielding

*   **Stiffener Yielding:** The stress in the stiffener under axial load or bending should not exceed the yield strength of the material.
*   **Web Yielding:** Under concentrated loads or bending stresses, the web around the stiffener should be checked for yielding.

#### 5.3 Shear Distortion of Web Panels

*   **Web Buckling:** The primary check for stiffened web panels is shear buckling. The designed stiffeners should provide adequate shear buckling resistance to the web panels.
*   **Shear Yielding:** For very shallow panels, shear yielding might govern.

#### 5.4 Anchorage and Connections

*   The welds or rivets connecting the stiffeners to the web and flanges must be designed to transfer the required forces without failure. This involves checking weld shear capacity, fatigue, and anchorage.

---

### 6. Design Codes and Standards (Illustrative Examples)

Design codes provide specific formulas, coefficients, and limits for stiffener design.

*   **IS 800:2007 (India):**
    *   Clause 8.4: Design of webs in plate girders.
    *   Clause 8.4.1: Shear buckling of webs.
    *   Clause 8.4.2: Transverse stiffeners.
    *   Clause 8.4.3: Longitudinal stiffeners.
    *   Clause 8.2.4: Bearing stiffeners.
*   **Eurocode 3 (EN 1993-1-5):**
    *   Part 1-5 deals with plated structural elements. It provides detailed methods for shear buckling, including the influence of stiffeners.
*   **AASHTO LRFD (USA):**
    *   Chapter 6: Design of Bridge Components and Appurtenances.
    *   Chapter 7: Load and Resistance Factor Design of Bearing Steel Bridge Components.
    *   Provides specific requirements for plate girder design, including web and stiffener design.

**Key Point:** Always refer to the relevant governing design code for precise formulas, limit states, and design procedures.

---

### 7. Practice Questions and Exercises

**Question 1:**
A plate girder has a web with clear depth $h = 1200 \text{ mm}$ and thickness $t_w = 8 \text{ mm}$. The girder is subjected to a uniformly distributed load. If the spacing between transverse stiffeners is $a = 1000 \text{ mm}$, and the web material has a yield strength $f_y = 250 \text{ MPa}$.

a) Calculate the slenderness ratio of the web panel ($h/t_w$).
b) Determine if intermediate transverse stiffeners are likely required based on typical code limits for unstiffened panels.
c) If longitudinal stiffeners are to be used, what is their primary role in this scenario?

**Solution 1:**

a) **Slenderness Ratio ($h/t_w$):**
   $h/t_w = 1200 \text{ mm} / 8 \text{ mm} = 150$.

b) **Requirement for Transverse Stiffeners:**
   Most codes consider webs with $h/t_w$ ratios significantly above 60-70 as requiring stiffening for shear. An $h/t_w$ of 150 is very high and will almost certainly require transverse stiffeners to prevent shear buckling. The $a/h$ ratio of $1000/1200 = 0.83$ also suggests significant shear stress.

c) **Role of Longitudinal Stiffeners:**
   If longitudinal stiffeners are used, their primary role would be to increase the shear buckling strength of the web panel. They would effectively reduce the unsupported width of the web that is subject to shear, thus allowing for higher shear stresses or a greater shear capacity.

---

**Question 2:**
Design the minimum area and minimum moment of inertia for a pair of intermediate transverse stiffeners for a plate girder web panel with $h = 1000 \text{ mm}$, $t_w = 10 \text{ mm}$, $f_y = 250 \text{ MPa}$, and an aspect ratio $a/h = 1.0$. Assume you are using a design code that requires the stiffener to act as a column with an effective slenderness ratio of 60. The stiffener is made of mild steel with $f_y = 250 \text{ MPa}$.

**Solution 2:**
This is a conceptual design problem, as precise values would depend on the specific code provisions. Let's use principles from IS 800:2007.

*   **Stiffener Cross-Section:** Let's assume a pair of mild steel angles of size $100 \times 100 \times 10 \text{ mm}$ placed back-to-back. Each angle has an area $A_{angle} = 1900 \text{ mm}^2$. The total area of the stiffener is $2 \times 1900 = 3800 \text{ mm}^2$.
*   **Web Portion:** A portion of the web is considered effective for the stiffener's column action. For a pair of stiffeners, this is typically $12 t_w$ on each side of the stiffener, but the stiffener's width might limit this. For simplicity, let's consider the stiffener plates themselves.

*   **Minimum Area Requirement (Conceptual, based on IS 800 Clause 8.4.2.2):**
    The minimum area of the stiffener is often related to the web thickness and the spacing. A common requirement is something like $A_{st} \ge 12 t_w^2$ for a single stiffener and $A_{st} \ge 25 t_w^2$ for a pair of stiffeners.
    Minimum Area = $25 \times (10 \text{ mm})^2 = 2500 \text{ mm}^2$.
    Our assumed pair of angles provides $3800 \text{ mm}^2$, which is adequate.

*   **Minimum Moment of Inertia Requirement (Conceptual, based on IS 800 Clause 8.4.2.2):**
    The minimum moment of inertia is critical for stiffening the web against buckling. It is often given as a function of the web dimensions and the shear buckling factor.
    Let's assume a simplified formula from a code: $I_{st} \ge \alpha \frac{h t_w^3}{12}$, where $\alpha$ is a factor related to the panel aspect ratio ($a/h$) and the web slenderness. For $a/h=1.0$, $\alpha$ might be around 0.5.
    Minimum $I_{st} \approx 0.5 \times \frac{1000 \times (10)^3}{12} = 0.5 \times \frac{10000000}{12} \approx 416667 \text{ mm}^4$.

    Now, let's calculate the moment of inertia for our assumed stiffener (pair of angles $100 \times 100 \times 10$).
    Consider the angles placed back-to-back on the web. The axis for calculating the moment of inertia for stiffening purposes is the axis passing through the web's mid-thickness and parallel to the web face.
    For an angle $100 \times 100 \times 10$, the centroid is at a distance from the back-to-back of the legs. Let's assume the legs are fillet welded to the web. The axis would be the axis of the web.
    The moment of inertia of an angle $100 \times 100 \times 10$ about its centroidal axis parallel to one leg is approximately $I_x = I_y \approx 1.16 \times 10^6 \text{ mm}^4$.
    The distance from the centroid of the angle leg to the web mid-plane is crucial. If we assume the angle is placed such that its back is against the web, the effective width contributing to inertia is $100 \text{ mm}$.
    Let's simplify and assume the stiffener is a plate $200 \times 10$ back-to-back (not realistic for angles). $I_{st} = \frac{200 \times 10^3}{12} = 166667 \text{ mm}^4$. This is insufficient.
    If we use two plates $100 \times 10$ welded to the web, the moment of inertia about the web center is $2 \times (\frac{10 \times 100^3}{12}) = 1.67 \times 10^6 \text{ mm}^4$. This is more than adequate.

    **Correct approach for angles:** For a pair of angles $100 \times 100 \times 10$ placed back-to-back on either side of the web, the stiffener effectively acts as a column. The moment of inertia required is about the axis passing through the web's center. We need to calculate the moment of inertia of the two angles about this axis. If they are welded to the web, the effective stiffener cross-section might be the two angles plus a portion of the web.
    For a pair of angles with legs of length $b_s$ and thickness $t_s$, the moment of inertia about the web mid-plane would be approximately $I_{st} = 2 \times (I_{xc} + A_{angle} \times d^2)$, where $I_{xc}$ is the moment of inertia of the angle about its own centroidal axis parallel to the web, $A_{angle}$ is the area of one angle, and $d$ is the distance of the centroid of the angle from the web mid-plane.
    Using published $I$ values for angles (e.g., from steel tables), for $100 \times 100 \times 10$ angle, $I_{xc} = 1.16 \times 10^6 \text{ mm}^4$. The centroid is about $28 \text{ mm}$ from the back of the leg. If the angle is welded flush, $d \approx 28 + t_w/2 \approx 28 + 5 = 33 \text{ mm}$.
    $I_{st} = 2 \times (1.16 \times 10^6 + 1900 \times 33^2) = 2 \times (1.16 \times 10^6 + 1900 \times 1089) = 2 \times (1.16 \times 10^6 + 2.069 \times 10^6) = 2 \times 3.229 \times 10^6 = 6.458 \times 10^6 \text{ mm}^4$. This is significantly more than the minimum required.

**Answer Summary:**
*   Minimum Area: $2500 \text{ mm}^2$ (for a pair, conceptual)
*   Minimum Moment of Inertia: $416667 \text{ mm}^4$ (conceptual)
*   The assumed pair of $100 \times 100 \times 10 \text{ mm}$ angles provides sufficient area and moment of inertia. Further checks for column buckling of the stiffener assembly and local buckling of the angle legs would be necessary according to the specific code.

---

### 8. Important Points to Remember

*   **Web Slenderness ($h/t_w$):** The primary driver for stiffener requirements. Higher $h/t_w$ means greater need for stiffening.
*   **Shear Buckling:** The main phenomenon transverse stiffeners counteract.
*   **Longitudinal Stiffeners:** Increase shear buckling strength by reducing the effective unsupported width and increasing the buckling coefficient ($k_v$).
*   **Transverse Stiffeners:** Act as columns and struts to prevent shear buckling of panels. Bearing stiffeners are specifically designed for load transfer.
*   **Stiffener Stiffness (Moment of Inertia):** Crucial for effective web stiffening.
*   **Stiffener Area:** Must be sufficient to resist buckling as a column.
*   **Connections:** Welds or rivets connecting stiffeners to the web and flanges are critical and must be designed for the transferred forces.
*   **Local Buckling:** The outstanding legs of stiffeners must be checked for local buckling.
*   **Code Compliance:** Always use the specific formulas and guidelines provided in the relevant design codes.

---
This concludes the notes for Module 3, Topic: Design of Stiffeners in Plate Girders Subjected to Uniformly Distributed Loads. Remember to practice applying the code provisions to various scenarios.
