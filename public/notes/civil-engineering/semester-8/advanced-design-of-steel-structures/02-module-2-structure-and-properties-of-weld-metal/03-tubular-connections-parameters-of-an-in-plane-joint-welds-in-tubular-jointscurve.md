---
title: "- Tubular Connections −Parameters of an in -plane joint - Welds in tubular joints−curved weld length at intersection of tubes"
subject: "ADVANCED DESIGN OF STEEL STRUCTURES"
module: "Module 2: Structure and properties of weld metal."
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba8118f7"
status: "completed"
scrapedAt: "2026-05-20T19:02:27.712Z"
---
# Advanced Design of Steel Structures

## Module 2: Structure and Properties of Weld Metal

### Topic: Tubular Connections

This module delves into the intricacies of tubular connections, focusing on the parameters defining in-plane joints, the types and considerations of welds in these connections, and a specific focus on the curved weld length at the intersection of tubes.

---

### 1. Tubular Connections: An Overview

Tubular structures, formed by joining hollow sections, offer several advantages in structural engineering:

*   **High strength-to-weight ratio:** Efficient material usage leads to lighter structures.
*   **Aesthetic appeal:** Modern and often visually pleasing.
*   **Good torsional resistance:** Ideal for members subjected to twisting loads.
*   **Reduced wind resistance:** Due to their aerodynamic shape.
*   **Ease of fabrication (with specialized equipment):** Can be cost-effective for repetitive designs.

However, designing connections for tubular members presents unique challenges due to:

*   **Complex stress distributions:** Particularly at joints where members intersect.
*   **Buckling susceptibility:** Thin-walled tubes can be prone to local buckling under compression.
*   **Weldability:** Material properties and preparation are crucial for sound welds.

---

### 2. Parameters of an In-Plane Joint

An **in-plane joint** refers to a connection where the axes of the connected members lie within the same plane. For tubular connections, understanding the geometric parameters is crucial for analysis and design.

#### 2.1 Key Geometric Parameters

For a typical in-plane joint involving a **chord** (the main member) and a **brace** (the connecting member), the following parameters are essential:

*   **Chord Diameter ($D_c$)**: The outer diameter of the chord member.
*   **Chord Wall Thickness ($T_c$)**: The wall thickness of the chord member.
*   **Brace Diameter ($D_b$)**: The outer diameter of the brace member.
*   **Brace Wall Thickness ($T_b$)**: The wall thickness of the brace member.
*   **Intersection Angle ($\theta$)**: The angle between the longitudinal axis of the chord and the longitudinal axis of the brace. This is a critical parameter affecting stress concentration.
*   **Punch-Through Parameter ($\kappa$)**: Defined as the ratio of the brace diameter to the chord diameter ($D_b / D_c$). This parameter significantly influences the strength and behavior of the connection. Values typically range from 0.2 to 1.0.
    *   **Class 1 Connections ($\kappa \le 0.2$):** Brace diameter is significantly smaller than the chord diameter.
    *   **Class 2 Connections ($0.2 < \kappa \le 0.5$):** Brace diameter is moderately smaller than the chord diameter.
    *   **Class 3 Connections ($0.5 < \kappa \le 0.8$):** Brace diameter is a significant proportion of the chord diameter.
    *   **Class 4 Connections ($\kappa > 0.8$):** Brace diameter is close to or equal to the chord diameter. These connections are prone to punching failure of the chord.
*   **Chord to Brace Thickness Ratio ($\beta$)**: Defined as the ratio of the chord wall thickness to the brace diameter ($T_c / D_b$). This parameter influences the stiffness and load-carrying capacity.
*   **Brace to Chord Thickness Ratio ($\lambda$)**: Defined as the ratio of the brace wall thickness to the chord wall thickness ($T_b / T_c$). This affects the relative stiffness and stress transfer.
*   **Overlap ($Ov$)**: For certain connection types (like lap joints or specific welding configurations), the extent to which the brace overlaps the chord.
*   **Weld Preparation Geometry**: The shape of the groove or fillet prepared on the members for welding. This includes angles, root gaps, and bevels.

#### 2.2 Importance of Parameters

*   **Load Transfer Mechanism:** These parameters dictate how loads are transferred from the brace to the chord and how stresses are distributed within the connection.
*   **Failure Modes:** Different parameter combinations lead to various potential failure modes (e.g., yielding of the brace, punching shear of the chord, lamellar tearing, buckling).
*   **Connection Strength:** The geometric parameters directly influence the ultimate load-carrying capacity of the connection.
*   **Weld Design:** They inform the size, type, and extent of welds required for adequate strength and integrity.

**Example:** Consider a K-joint in a space frame. The chord is a large diameter tube, and two smaller diameter braces connect to it at an angle. The **intersection angle ($\theta$)** and the **punch-through parameter ($\kappa = D_b/D_c$)** are critical for understanding how forces from the braces are distributed around the chord and how much stress concentrates at the intersection. If $\kappa$ is high, the brace can "punch through" the chord wall.

---

### 3. Welds in Tubular Joints

Welding is the most common method for joining tubular members. The type and quality of welds are paramount for the performance of these connections.

#### 3.1 Common Weld Types in Tubular Joints

*   **Fillet Welds:** Used to join members at a right angle or when full penetration is not required or feasible. In tubular joints, they are often used to connect a brace that is cut to match the contour of the chord.
*   **Butt Welds (with preparation):** Used when a full-strength connection is desired and members are joined end-to-end or at an angle. For tubular joints, this typically involves preparing the ends of the brace to match the curvature of the chord, creating a "fish-mouth" or bevelled edge. This allows for a full penetration weld.
    *   **Square Butt Weld:** Less common in tubular joints due to difficulty in achieving full penetration and the presence of gaps.
    *   **Bevelled Butt Weld (e.g., V-groove, U-groove):** Most common for achieving full penetration in tubular connections, especially for larger diameter or thicker-walled members.

#### 3.2 Key Considerations for Welds in Tubular Joints

*   **Weld Edge Preparation:**
    *   **Fitting the Brace to the Chord:** The end of the brace is typically cut to match the external profile of the chord. This is often referred to as a "fish-mouth" cut. The accuracy of this cut is vital for ensuring good weld contact and minimizing residual stresses.
    *   **Beveling:** For thicker sections, beveling the edges of the brace and/or chord allows for deeper weld penetration and better fusion.
*   **Weld Size:**
    *   Determined by the design loads, the strength of the parent metal, and the throat thickness of the weld.
    *   For fillet welds, the leg length is specified.
    *   For butt welds, the weld size is typically the thickness of the thinner member or the depth of penetration.
*   **Weld Quality:**
    *   **Absence of Defects:** Crucial to avoid porosity, slag inclusions, cracks, undercut, and lack of fusion.
    *   **Penetration:** Full penetration is generally desired for critical tubular connections to ensure load transfer across the entire joint.
    *   **Concavity/Convexity:** Excessive concavity can reduce the effective throat, while excessive convexity can lead to stress concentrations.
*   **Stress Concentrations at Welds:**
    *   The geometry of the weld and the preparation of the base metal significantly influence stress concentrations.
    *   Sharp internal angles or abrupt changes in geometry can lead to higher localized stresses, potentially causing fatigue or brittle fracture.
*   **Lamellar Tearing:**
    *   A potential failure mode in thick plates or sections subjected to through-thickness tensile stresses, often occurring in the root of fillet welds or at the toes of butt welds.
    *   Can be mitigated by using specific welding procedures, low-hydrogen electrodes, and sometimes by employing specific detailing (e.g., using welding "buttering" techniques).
*   **Residual Stresses:**
    *   Welding processes introduce residual stresses due to differential cooling. These can be significant in tubular joints and can affect their buckling strength and fatigue life.
    *   Proper welding sequence and post-weld heat treatment can help manage residual stresses.
*   **Welding Procedures and Materials:**
    *   Selection of appropriate welding consumables (electrodes, wires, fluxes) and welding processes (e.g., SMAW, GMAW, FCAW, SAW) is critical based on the steel grade, thickness, and environmental conditions.
    *   Preheating may be required for certain steels to prevent hydrogen-induced cracking.

**Example:** When joining a circular brace to a circular chord in a tubular truss, a common approach is to cut the end of the brace to match the curvature of the chord (creating a fish-mouth). This prepared end is then welded to the chord, often with a bevel to allow for full penetration butt welding. The quality of this weld is critical as it directly transfers forces from the brace to the chord.

---

### 4. Curved Weld Length at Intersection of Tubes

This specific aspect focuses on the length of the weld along the curved surface of the intersection between two tubes.

#### 4.1 Defining Curved Weld Length

When a brace tube intersects a chord tube, the weld is applied along the perimeter of the intersection. This perimeter is not a straight line; it's a curve dictated by the geometry of the two intersecting tubes.

*   **Projection of the Brace onto the Chord:** Imagine projecting the circumference of the brace tube onto the surface of the chord tube at the intersection. This projected curve defines the path along which the weld is laid.
*   **Effective Weld Length:** The actual length of the weld applied, considering the fish-mouth preparation and any potential gaps.

#### 4.2 Calculation of Curved Weld Length

The calculation of the curved weld length depends on the type of connection and the relative diameters of the intersecting tubes.

*   **Simple Case: Brace Intersecting Chord (Perpendicular)**
    If the brace axis is perpendicular to the chord axis, and the brace is fully contained within the chord's circumference (i.e., the brace diameter is less than the chord diameter), the weld path can be approximated as the circumference of the brace tube.

    *   **Circumference of Brace ($C_b$) = $\pi \times D_b$**

    However, the actual weld path on the chord surface is generally longer due to the curvature of the chord. For a simple saddle weld (where the brace is welded to the outside of the chord), the weld line on the chord is an ellipse.

    A more accurate approach considers the **projection of the brace circumference onto the chord's outer surface.**

*   **General Case: Brace Intersecting Chord at an Angle ($\theta$)**
    When the intersection angle ($\theta$) is not 90 degrees, the calculation becomes more complex. The weld line on the chord surface is an ellipse. The length of this ellipse depends on the brace diameter, chord diameter, and the intersection angle.

    A common method to estimate this length involves considering the **effective circumference of the brace projected onto the plane perpendicular to the chord axis.**

    Let $D_c$ be the chord diameter and $D_b$ be the brace diameter. The semi-major axis ($a$) and semi-minor axis ($b$) of the elliptical weld line on the chord surface can be approximated.

    A simplified approach, often used in design codes, relates the weld length to the brace diameter and the intersection angle. For a brace intersecting a chord, the weld line on the chord can be visualized.

    **Formula for Weld Length (Elliptical Weld):**
    The perimeter of an ellipse with semi-major axis $a$ and semi-minor axis $b$ can be approximated by Ramanujan's approximation:
    $L \approx \pi [3(a+b) - \sqrt{(3a+b)(a+3b)}]$

    For a brace of diameter $D_b$ intersecting a chord of diameter $D_c$ at an angle $\theta$, the weld line on the chord's surface forms an ellipse.
    *   The semi-minor axis of the ellipse is $D_b/2$.
    *   The semi-major axis of the ellipse is $(D_b/2) / \sin(\theta)$ (if $\theta$ is the angle with the chord's circumference, or related to the angle between the axes).

    **More practically, design codes often provide simplified formulas or tables based on the punch-through parameter ($\kappa$) and the intersection angle.**

    A common approximation for the weld length ($L_w$) in a T-connection or K-connection is:
    $L_w \approx \pi \times D_b / \sin(\alpha)$
    where $\alpha$ is the angle the brace makes with the chord. For an in-plane joint, this can be related to the intersection angle.

    **Key Concept: Weld Length in Relation to Brace Diameter**
    The effective weld length is typically related to the circumference of the brace. However, due to the curvature of the chord and the intersection angle, this length is modified. For a simple saddle weld, the weld length will be longer than $\pi D_b$ when viewed on the developed surface of the chord.

    **Design Code Approaches (e.g., Eurocode, AISC):**
    Design codes usually specify the throat thickness ($t_w$) of the weld required for a given load. The design capacity of the weld is then calculated as:
    $V_{w,Rd} = L_w \times t_w \times f_{vw,d}$
    where $f_{vw,d}$ is the design shear strength of the weld.

    The codes implicitly account for the curved weld length by defining the effective length $L_w$. Often, this is taken as the circumference of the brace, but with adjustments for the geometry and potential for incomplete welds at the crown or root.

    **Important Considerations for Curved Welds:**
    *   **Uniformity of Weld:** Achieving a uniform weld along the entire curved length can be challenging.
    *   **Root Penetration:** Ensuring adequate root penetration along the entire curved path is crucial.
    *   **Undercut and Overlap:** These defects are more likely on curved surfaces.
    *   **Weld Access:** The accessibility for welding can be limited at the intersection.

**Example:** Consider a brace tube of diameter 100mm intersecting a chord tube at an angle of 45 degrees. The weld will be applied along the curved path on the chord's surface. The length of this curved path will be longer than the circumference of the brace ($100\pi \approx 314$ mm) due to the geometric intersection. The exact length would be calculated based on the projection of the brace circumference onto the chord surface, considering the angle. For practical design, codes will provide guidelines for the effective weld length.

---

### Summary of Key Points to Remember

*   **Tubular connections require careful consideration of geometric parameters** like diameter ratios ($\kappa$), thickness ratios ($\beta$, $\lambda$), and intersection angles ($\theta$) to predict their behavior and failure modes.
*   **Punch-through parameter ($\kappa$) is critical** for classifying connections and understanding the risk of chord failure.
*   **Welds are the critical element** in tubular connections, and their quality, type, and size are paramount.
*   **Full penetration welds** are generally preferred for critical joints in tubular connections.
*   **Weld edge preparation** (fish-mouth, beveling) is essential for achieving sound welds.
*   **Stress concentrations** are inherent in tubular joints and must be accounted for in design.
*   **Lamellar tearing** is a potential failure mode that needs to be addressed, especially in thick sections.
*   The **curved weld length** at the intersection of tubes is longer than the simple circumference of the brace due to the geometric intersection and is influenced by the intersection angle.
*   **Design codes provide methods and formulas** to determine the required weld size and account for the effective weld length in capacity calculations.

---

### Practice Questions

1.  **Define the punch-through parameter ($\kappa$) for a tubular connection and explain its significance in classifying connection types.**
2.  **Describe two common weld types used in tubular connections and the scenarios where each would be preferred.**
3.  **What are the primary challenges associated with welding tubular members compared to conventional steel sections?**
4.  **Explain the concept of lamellar tearing and how it can be mitigated in tubular joints.**
5.  **Consider a brace tube of diameter 150 mm intersecting a chord tube at an angle. If the weld length is calculated as 500 mm, what can you infer about the intersection angle and the nature of the weld on the chord surface? (Assume it's a standard saddle weld).**
6.  **For a tubular connection, how does an increase in the brace diameter relative to the chord diameter (i.e., an increase in $\kappa$) typically affect the connection's strength and potential failure modes?**

---

### Answers to Practice Questions

1.  **Definition:** The punch-through parameter ($\kappa$) is defined as the ratio of the outer diameter of the brace member to the outer diameter of the chord member ($\kappa = D_b / D_c$).
    **Significance:** It's a crucial parameter used to classify tubular connections based on the relative sizes of the members. This classification helps predict the load transfer mechanism, stress distribution, and potential failure modes. For instance, high $\kappa$ values (Class 4 connections) indicate a higher risk of chord wall punching failure.

2.  **Weld Types:**
    *   **Fillet Welds:** Used when members meet at an angle, and a full-strength, full-penetration weld is not strictly required or feasible. They are often used to attach braces that are cut to match the chord's curvature, providing a connection along the curved edge.
    *   **Butt Welds (with preparation):** Used to achieve full-strength, full-penetration connections. In tubular joints, this involves preparing the brace end (e.g., with a fish-mouth cut and beveling) to match the chord's profile, allowing the weld to fuse the complete thickness of the brace to the chord. This is preferred for critical load-bearing connections.

3.  **Welding Challenges in Tubular Members:**
    *   **Complex Geometry:** The curved surfaces of tubes make achieving uniform weld preparation and deposition more challenging than on flat surfaces.
    *   **Root Penetration:** Ensuring full and consistent root penetration along the curved weld path can be difficult.
    *   **Stress Concentrations:** The intersection geometry inherently creates stress concentrations, which can be exacerbated by welding defects.
    *   **Access:** Welding access to the inside of the joint might be limited.
    *   **Lamellar Tearing:** Higher risk in thick-walled tubular sections due to through-thickness stresses.

4.  **Lamellar Tearing Mitigation:**
    Lamellar tearing is a brittle fracture that occurs within the parent metal due to through-thickness tensile stresses, often concentrated at the root of welds.
    **Mitigation:**
    *   **Proper Weld Detailing:** Designing connections to minimize through-thickness stresses.
    *   **Weld Preparation:** Using full penetration welds with proper beveling to distribute stresses.
    *   **Welding Procedures:** Employing low-hydrogen welding consumables and procedures to reduce the risk of hydrogen embrittlement.
    *   **Material Selection:** Using steels with improved through-thickness properties.
    *   **Post-Weld Heat Treatment:** Can help reduce residual stresses.
    *   **Butter Layer Technique:** Applying a weld metal layer to the "through-thickness" face of the connection before applying the main fillet or butt weld can absorb some of the through-thickness stress.

5.  **Inference from Weld Length:** A weld length of 500 mm for a 150 mm diameter brace suggests that the weld path on the chord surface is significantly longer than the brace's circumference ($\pi \times 150 \text{ mm} \approx 471 \text{ mm}$). This indicates that the intersection angle between the brace and the chord is likely **acute** (less than 90 degrees) relative to the chord's circumference. An acute angle means the brace "cuts into" the chord at a more oblique angle, resulting in a longer elliptical weld line on the chord's surface.

6.  **Effect of Increasing $\kappa$**: As the brace diameter ($D_b$) increases relative to the chord diameter ($D_c$), meaning $\kappa$ increases:
    *   **Strength:** The connection strength generally increases up to a certain point (where $\kappa \approx 0.7-0.8$). However, beyond this, the strength might plateau or even decrease due to increased stress concentrations and susceptibility to chord-specific failures.
    *   **Failure Modes:** The likelihood of chord wall punching failure (where the brace punches through the chord wall) increases significantly. Other failure modes like chord shear failure and brace yielding become more critical. Buckling of the chord wall around the connection also becomes a greater concern. The weld itself may also experience higher stresses.
