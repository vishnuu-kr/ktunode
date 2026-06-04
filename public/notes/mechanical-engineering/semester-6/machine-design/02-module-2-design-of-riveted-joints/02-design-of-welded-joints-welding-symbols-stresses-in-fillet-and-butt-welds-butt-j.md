---
title: "Design of welded joints- welding symbols, stresses in fillet and butt welds, Butt joint in tension, fillet weld in tension, fillet joint under torsion, fillet wed under"
subject: "MACHINE DESIGN"
module: "Module 2: Design of riveted joints"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1551d0cf480446375e"
status: "completed"
scrapedAt: "2026-05-20T18:05:53.469Z"
---
# Machine Design: Module 2 - Design of Welded Joints

## Introduction to Welded Joints

Welded joints are permanent joints made by joining two or more metal parts by melting them together, often with the addition of a filler metal. They are widely used in machine design due to their high strength, rigidity, and leak-proof nature. This module focuses on the design principles of welded joints, including understanding welding symbols, analyzing stresses in different weld types, and designing joints for various loading conditions.

**Key Concepts:**

*   **Welding:** A fabrication process that joins materials, usually metals or thermoplastics, by causing fusion. This is often done by melting the workpieces and adding a filler material to form a pool of molten material that cools to become a strong joint.
*   **Weldment:** An assembly of parts joined by welding.
*   **Types of Welds:**
    *   **Fillet Weld:** A weld placed in the angle between two surfaces of members joined at an angle (typically 90 degrees).
    *   **Butt Weld:** A weld placed in the groove formed by two members placed approximately edge to edge.
*   **Welding Processes:** Arc welding (SMAW, GMAW, GTAW), resistance welding, gas welding, etc. (While the module focuses on design, understanding the processes helps in visualizing weld types).

**Learning Outcomes Addressed:**

*   Interpret component behavior subjected to static and fatigue loads and identify the failure criteria (CO1 - K3)
*   Analyze the load carrying capacity of riveted joints, and welded joints (CO2 - K4)

---

## 1. Welding Symbols

Accurate communication of welding requirements on engineering drawings is crucial for ensuring the correct fabrication of welded joints. Welding symbols provide a standardized way to convey this information.

**Key Concepts:**

*   **Reference Line:** The horizontal line of the welding symbol. The weld information is placed above or below this line.
*   **Arrow:** Points to the weld or joint. The "arrow side" and "other side" of the joint are important.
*   **Tail:** Contains supplementary information like welding process, specifications, etc.
*   **Basic Weld Symbols:** Indicate the type of weld (e.g., fillet, groove).
*   **Supplementary Symbols:** Indicate special welding operations or desired weld appearance (e.g., flush, convex).
*   **Dimensioning:** Size, length, and spacing of welds.

**Components of a Welding Symbol (AWS Standard):**

*   **Reference Line:** Essential for all symbols.
*   **Arrow:** Connects the symbol to the weld location on the drawing.
*   **Basic Weld Symbol:** Placed below the reference line for welds on the "arrow side" and above for welds on the "other side."
*   **Dimensions:**
    *   **Size:** Placed to the left of the basic weld symbol. For fillet welds, it's the leg length. For groove welds, it's the root opening or groove angle.
    *   **Length:** Placed to the right of the basic weld symbol.
    *   **Pitch:** The distance between the centers of intermittent welds. Placed to the right of the length.
*   **Field Weld Symbol:** A flag-shaped symbol at the reference line-arrow connection indicates welding to be performed on-site.
*   **Weld-All-Around Symbol:** A circle at the reference line-arrow connection indicates welding around the entire joint.
*   **Contour Symbol:** Placed above or below the basic weld symbol to indicate the desired weld contour (e.g., flush, convex, concave).
*   **Finish Symbol:** Placed above or below the contour symbol to indicate the method used for finishing the weld surface (e.g., G for grinding, C for chipping).
*   **Tail:** Contains information about the welding process, filler metal, or other specifications.

**Example:**

Consider a fillet weld symbol for a 6mm leg length, 50mm long, placed on the arrow side of the joint, with welding to be performed all around.

```
      ___
     /   \
    /_____\  <-- Basic Fillet Weld Symbol
   /       \
  /_________\
  |_________|  <-- Reference Line
  |    |    |
  6    50   O  <-- Size (6mm), Length (50mm), Weld All Around (O)
  |_________|
      /
     /
    / <-- Arrow
```

**Textbook References:**

*   **Norton, "Machine Design – An Integrated Approach"**: Likely covers welding symbols as part of material joining techniques and design considerations for fabricated structures.
*   **Bhandari, "Design of Machine elements"**: May have a dedicated section or integrate welding symbols within discussions of joint design for various machine components.
*   **Sharma & Aggarwal, "A Text book of Machine Design"**: Expected to provide detailed explanations and examples of welding symbols according to relevant standards.

**Important Points to Remember:**

*   Always refer to the latest standards (e.g., AWS A2.4) for welding symbols.
*   The placement of the symbol (above/below reference line) is critical for indicating the "arrow side" vs. "other side" weld.
*   Dimensions must be clearly indicated.

---

## 2. Stresses in Fillet and Butt Welds

Understanding the types of stresses induced in different welds is fundamental to designing safe and efficient welded joints.

**Key Concepts:**

*   **Fillet Weld:**
    *   **Throat Thickness (t):** The shortest distance from the root of the weld to the face of the weld. For a standard fillet weld, it is $0.707 \times$ Leg Length ($l$).
    *   **Stress Concentration:** Can occur at the root of the weld, especially if not properly formed.
    *   **Shear Stress:** The primary stress in a fillet weld subjected to tensile or compressive loads parallel to the weld axis.
    *   **Tensile/Compressive Stress:** Occurs when the load is perpendicular to the weld axis.
    *   **Bending Stress:** Can occur in fillet welds due to eccentric loading or when the weld acts as a lever arm.
*   **Butt Weld:**
    *   **Types of Butt Welds:** Square, V, U, J, double V, etc., depending on the joint preparation.
    *   **Full Penetration Butt Weld:** The weld metal fuses completely through the thickness of the base metal. The strength of the joint is then governed by the strength of the base metal.
    *   **Partial Penetration Butt Weld:** The weld metal does not fuse completely through the thickness. The strength is governed by the weld metal and its geometry.
    *   **Stresses:** Primarily direct tensile, compressive, or shear stresses depending on the loading and weld type.

**Stresses in Fillet Welds:**

Consider a fillet weld subjected to a tensile load $P$. Let the leg length of the fillet weld be $l$, and the throat thickness be $t = 0.707l$. The effective length of the weld is $L$.

*   **Shear Stress ($\tau$)**: When the load $P$ is applied parallel to the weld axis (e.g., lap joint), the primary stress is shear.
    $$ \tau = \frac{P}{A_{throat}} = \frac{P}{t \times L} = \frac{P}{0.707l \times L} $$
    The allowable shear stress for the weld material is usually less than that of the base metal.

*   **Tensile/Compressive Stress ($\sigma$)**: When the load $P$ is applied perpendicular to the weld axis (e.g., T-joint), the stress is primarily tensile or compressive.
    $$ \sigma = \frac{P}{A_{throat}} = \frac{P}{t \times L} = \frac{P}{0.707l \times L} $$
    The allowable tensile stress for the weld material is usually less than that of the base metal.

**Stresses in Butt Welds:**

*   **Full Penetration Butt Weld:**
    *   **Tensile/Compressive Stress ($\sigma$)**: If the load $P$ is applied axially, the stress is calculated based on the cross-sectional area of the base metal ($A = t_{base} \times L$, where $t_{base}$ is the thickness of the base metal).
        $$ \sigma = \frac{P}{A} = \frac{P}{t_{base} \times L} $$
        Failure is typically governed by the strength of the base metal.
    *   **Shear Stress ($\tau$)**: If the load is applied in shear, the stress is calculated based on the cross-sectional area of the base metal.
        $$ \tau = \frac{P}{A} = \frac{P}{t_{base} \times L} $$

*   **Partial Penetration Butt Weld:** The design is more complex and depends on the geometry of the weld preparation and the assumed effective throat area, which is often taken as the minimum thickness of the welded material.

**Textbook References:**

*   **Norton, "Machine Design – An Integrated Approach"**: Provides detailed derivations of stresses in welds and failure theories applicable to welded joints.
*   **Bhandari, "Design of Machine elements"**: Offers practical design formulas and examples for calculating stresses in fillet and butt welds under various loading conditions.
*   **Sharma & Aggarwal, "A Text book of Machine Design"**: Likely includes comprehensive coverage of stress analysis in welded joints, drawing from international design codes.

**Important Points to Remember:**

*   For fillet welds, the **throat thickness ($t = 0.707l$)** is the critical dimension for stress calculation.
*   For full penetration butt welds, the strength is typically governed by the **base metal**.
*   Allowable stresses for weld metal are generally lower than for base metal.
*   Weld quality (e.g., presence of porosity, lack of fusion) significantly impacts actual stress distribution and joint strength.

---

## 3. Butt Joint in Tension

A butt joint is used when two components are joined end-to-end. In tension, the design ensures that the joint can withstand the applied tensile load without yielding or fracturing.

**Key Concepts:**

*   **Joint Efficiency:** The ratio of the strength of the joint to the strength of the solid plate. For a full penetration butt weld, the efficiency is generally considered 100% if the weld metal strength matches the base metal strength and the design is correct.
*   **Weld Preparation:** The shape of the edges of the plates being joined (e.g., square, bevel, V-groove) affects the ease of welding and the strength of the joint.
*   **Failure Modes:**
    *   **Base Metal Failure:** If the base metal is weaker than the weld or if the weld area is larger than the base metal area.
    *   **Weld Metal Failure:** If the weld metal is weaker than the base metal.
    *   **Interface Failure:** Failure at the fusion line between the weld and base metal.

**Design of a Butt Joint in Tension (Full Penetration):**

For a butt joint with full penetration, the stress is distributed uniformly across the cross-section of the plates. The design aims to ensure that the stress in the base metal does not exceed its allowable tensile strength.

Let:
*   $P$ = Tensile load
*   $t_{base}$ = Thickness of the plates
*   $w$ = Width of the plates
*   $L$ = Length of the weld
*   $\sigma_{allowable, base}$ = Allowable tensile stress of the base metal

The cross-sectional area of the plates is $A = t_{base} \times w$.
The tensile stress in the plate is $\sigma = P/A$.

**Design Condition:**
$$ \sigma \le \sigma_{allowable, base} $$
$$ \frac{P}{t_{base} \times w} \le \sigma_{allowable, base} $$

This means that the required plate thickness $t_{base}$ or width $w$ must be sufficient to handle the load. In practice, if we are designing the weld for a given pair of plates, the weld must be designed to provide full penetration, ensuring that the strength of the joint is at least equal to the strength of the base metal.

If the weld metal has a different strength, or if it's a partial penetration weld, calculations would involve the effective throat area of the weld. For full penetration butt welds, the primary concern is selecting appropriate base materials and ensuring the weld achieves full fusion.

**Example:**

A butt joint connects two plates of thickness 10 mm and width 100 mm, carrying a tensile load of 200 kN. The allowable tensile stress for the base metal is 150 MPa.

Cross-sectional area of the plate, $A = 10 \text{ mm} \times 100 \text{ mm} = 1000 \text{ mm}^2$.
Tensile stress in the plate, $\sigma = \frac{P}{A} = \frac{200 \times 10^3 \text{ N}}{1000 \text{ mm}^2} = 200 \text{ MPa}$.

Since $\sigma (200 \text{ MPa}) > \sigma_{allowable, base} (150 \text{ MPa})$, this joint would fail in the base metal. To design this joint, either the plate thickness or width needs to be increased, or a stronger material used.

If the allowable stress was 200 MPa, then:
Required Area $A_{required} = \frac{P}{\sigma_{allowable, base}} = \frac{200 \times 10^3 \text{ N}}{200 \text{ MPa}} = 1000 \text{ mm}^2$.
If the width is 100 mm, the required thickness would be $t_{base} = \frac{1000 \text{ mm}^2}{100 \text{ mm}} = 10 \text{ mm}$.

**Textbook References:**

*   **Jalaludeen, "Design of Machine elements"**: Likely provides practical guidelines and formulas for designing butt joints, considering different weld preparations and load conditions.
*   **Shigley's Mechanical Engineering Design**: Offers a rigorous approach to stress analysis in joints, including butt welds, and discusses factors affecting joint efficiency.

**Important Points to Remember:**

*   For full penetration butt welds, the goal is to match the strength of the base metal.
*   The design of the base material (thickness, width) is critical for butt joints in tension.
*   Weld preparation is important for achieving full penetration and good weld quality.

---

## 4. Fillet Weld in Tension

Fillet welds are commonly used to join plates at an angle, most often in lap or T-joints. When subjected to tension, the critical stress is usually shear stress acting on the throat area.

**Key Concepts:**

*   **Lap Joint:** Two plates overlap and are joined by fillet welds.
*   **T-Joint:** One plate is perpendicular to another, forming a T-shape, joined by fillet welds.
*   **Effective Throat Area:** The smallest area of the weld that can be used for stress calculations. For a standard fillet weld, this is the area of a rectangle with sides equal to the throat thickness ($t$) and the effective weld length ($L$).
*   **Failure Mode:** Typically due to shear failure of the weld metal.

**Design of a Fillet Weld in Tension:**

Consider a lap joint with a single fillet weld of length $L$ and leg length $l$. The throat thickness is $t = 0.707l$. The joint is subjected to a tensile load $P$.

The effective area of the fillet weld is $A_{throat} = t \times L = 0.707l \times L$.
The shear stress in the weld is $\tau = \frac{P}{A_{throat}} = \frac{P}{0.707l \times L}$.

The design condition is that the induced shear stress must be less than or equal to the allowable shear stress for the weld metal ($\tau_{allowable, weld}$).

$$ \tau \le \tau_{allowable, weld} $$
$$ \frac{P}{0.707l \times L} \le \tau_{allowable, weld} $$

From this, we can determine the required leg length ($l$) or weld length ($L$) for a given load and allowable stress.

**Example:**

A lap joint is made by welding two plates using fillet welds. The load is 50 kN. The allowable shear stress for the weld metal is 100 MPa. The length of each fillet weld is 75 mm. What is the required leg length ($l$) of the fillet weld?

$P = 50 \text{ kN} = 50 \times 10^3 \text{ N}$
$\tau_{allowable, weld} = 100 \text{ MPa} = 100 \text{ N/mm}^2$
$L = 75 \text{ mm}$

We need to find $l$.
The required effective throat area $A_{required} = \frac{P}{\tau_{allowable, weld}} = \frac{50 \times 10^3 \text{ N}}{100 \text{ N/mm}^2} = 500 \text{ mm}^2$.

We know $A_{throat} = 0.707l \times L$.
So, $500 \text{ mm}^2 = 0.707l \times 75 \text{ mm}$.
$$ l = \frac{500}{0.707 \times 75} \approx 9.43 \text{ mm} $$

A standard fillet weld size would be chosen, typically equal to the thickness of the thinner plate, or slightly less if the load permits. So, one might choose a 10 mm leg length.

If we use $l=10$ mm, then $t = 0.707 \times 10 = 7.07$ mm.
Actual shear stress $\tau = \frac{50 \times 10^3 \text{ N}}{7.07 \text{ mm} \times 75 \text{ mm}} \approx 94.3 \text{ N/mm}^2 = 94.3 \text{ MPa}$.
This is less than the allowable stress of 100 MPa, so the joint is safe.

**Failure at the base metal:**
It's also important to consider the strength of the base metal. If the fillet weld is designed such that its effective throat area is related to the plate thickness ($t_{plate}$), then the tensile stress on the plate cross-section should also be checked. For a lap joint with two fillet welds on opposite sides, the plate is in tension across its net area.

If the leg length $l$ is chosen such that $l = t_{plate}$, then the throat is $t = 0.707 t_{plate}$.
The area resisting shear is $A_{throat} = 0.707 t_{plate} \times L$.

The tensile stress on the plate cross-section is $\sigma = \frac{P}{t_{plate} \times w}$, where $w$ is the width of the plate.
We must ensure $\sigma \le \sigma_{allowable, base}$.

**Textbook References:**

*   **Bhandari, "Design of Machine elements"**: Provides clear examples and design procedures for fillet-welded joints under tensile loads, including considerations for both weld metal and base metal strength.
*   **Norton, "Machine Design – An Integrated Approach"**: Discusses the mechanics of fillet welds and how to calculate stresses, often linking to empirical data and design codes.

**Important Points to Remember:**

*   The **throat thickness ($t = 0.707l$)** is the critical dimension for fillet welds in shear.
*   Always check the allowable shear stress of the **weld metal**.
*   Consider the strength of the **base metal** and ensure it's not the weak link, especially for T-joints where direct tension/compression can occur on the weld face.

---

## 5. Fillet Joint Under Torsion

Fillet welds can also be subjected to torsional loads, typically when joining shafts or components that transmit torque. The stresses induced are primarily shear stresses.

**Key Concepts:**

*   **Torsion:** A twisting moment applied to a body.
*   **Polar Moment of Inertia ($J$)**: A geometric property that represents the resistance of a cross-section to torsion. For a rectangular area, it's more complex.
*   **Shear Stress ($\tau$)**: In torsion, shear stress varies linearly with the distance from the centroid of the area. It is maximum at the outermost fibers.

**Design of a Fillet Joint Under Torsion:**

Consider a fillet weld joining two components where a torque $T$ is transmitted. For instance, a shaft attached to a flange using fillet welds. The fillet welds resist this torque by developing shear forces.

The shear stress in a fillet weld subjected to torsion is calculated similarly to direct shear, but the resisting area needs to be considered in relation to the geometry of the weld group and the torque.

Let's consider a simplified case of two fillet welds connecting a shaft to a plate. If the welds are placed symmetrically, they will experience shear. The stress distribution due to torsion in fillet welds is complex, and often simplified methods are used.

**Simplified Approach for Torsion:**

When fillet welds are used to attach a component (like a plate or flange) to a shaft, the welds resist the torque. The shear force acting on the weld is related to the torque and the distance from the axis of rotation.

If we consider a fillet weld of length $L$ and throat thickness $t$, and it is at a radial distance $r$ from the center of rotation, the shear stress induced by torque $T$ can be approximated.

$$ \tau = \frac{T \times r}{J_{weld}} $$
where:
*   $T$ is the applied torque.
*   $r$ is the distance of the weld from the center of torsion.
*   $J_{weld}$ is the polar moment of inertia of the weld group's effective area.

For a fillet weld, the effective area is often considered as the throat area ($A_{throat} = 0.707l \times L$). Calculating $J_{weld}$ for a group of fillet welds involves finding the centroid of the weld group and then summing the contributions of each weld segment.

A common simplification for a fillet weld of length $L$ and throat $t$ is to consider its polar moment of inertia of area as approximately $J \approx \frac{L t^3}{3} + \frac{t L^3}{3}$ (this is for a rectangle, and the effective weld area is a bit different). A more practical approach for design purposes often involves calculating the maximum shear stress at the most remote fiber of the weld group.

**Example:**

Consider a shaft attached to a hub using two fillet welds, each of length 50 mm, with a leg length of 6 mm. The welds are located symmetrically at a radius of 30 mm from the shaft center. If the shaft transmits a torque of 2000 Nm, estimate the maximum shear stress in the welds.

$T = 2000 \text{ Nm} = 2000 \times 10^3 \text{ Nmm}$
$l = 6 \text{ mm}$, so $t = 0.707 \times 6 = 4.242 \text{ mm}$
$L = 50 \text{ mm}$
$r = 30 \text{ mm}$

The effective area of one weld is $A_{throat} = 4.242 \times 50 = 212.1 \text{ mm}^2$.

Calculating the polar moment of inertia for fillet welds under torsion is complex. For a rectangular section of length $L$ and width $t$, $J_{rect} = \frac{tL}{12}(t^2 + L^2)$. For a fillet weld, $t$ is the throat thickness.

$J \approx \frac{t L^3}{12} + \frac{L t^3}{12}$
If we consider $L$ as the longer dimension and $t$ as the shorter dimension for the "rectangle" of the throat area.
$J \approx \frac{4.242 \times 50^3}{12} + \frac{50 \times 4.242^3}{12} \approx \frac{4.242 \times 125000}{12} + \frac{50 \times 76.3}{12}$
$J \approx 44187.5 + 317.9 \approx 44505 \text{ mm}^4$.

However, this is a simplification. The centroid of the weld group matters. If the welds are symmetrically placed on opposite sides of the shaft, the shear is likely to be more uniform along their length, but stress concentration at the ends can occur.

A more common practical approach for design is to use empirical formulas or design handbooks which provide factors for calculating stress in fillet welds under torsion.

If we were to use a simplified approach considering shear force due to torque:
The shear force at the weld due to torque $T$ is $F = \frac{T}{r}$.
$F = \frac{2000 \text{ Nm}}{0.03 \text{ m}} = 66666.7 \text{ N} = 66.67 \text{ kN}$.

This force is distributed over the length of the weld ($L=50$ mm) and acts on the throat area.
The shear stress $\tau = \frac{F}{A_{throat}} = \frac{66666.7 \text{ N}}{212.1 \text{ mm}^2} \approx 314 \text{ N/mm}^2 = 314 \text{ MPa}$.

This calculated stress is very high and likely indicates that either the torque is too high for these welds, or the approximation used is too simplistic. Design codes often provide allowable stresses for fillet welds under torsion that are lower than for static shear.

**Textbook References:**

*   **Juvinall R.C, Marshek K.M., "Fundamentals of Machine Component Design"**: Offers detailed analysis of stresses in machine components, including torsion on welded connections, and might provide methods for calculating $J$ for weld groups.
*   **Spotts & Shoup, "Design of Machine Elements"**: Covers torsion of shafts and connections, and likely addresses the design of fillet welds in torsional applications.

**Important Points to Remember:**

*   Torsion on fillet welds is more complex than direct shear.
*   The **polar moment of inertia of the weld group's effective area** is critical.
*   Maximum shear stress occurs at the farthest point from the centroid of the weld group.
*   Allowable stresses for torsion are often lower than for direct shear.

---

## 6. Fillet Weld Under Combined Stress (Implied: from the topic "fillet wed under" likely meaning fillet weld under combined stresses)

Fillet welds in machine components are frequently subjected to a combination of stresses, such as shear and normal stresses, or shear and bending stresses. This requires a more comprehensive approach using failure theories.

**Key Concepts:**

*   **Principal Stresses:** The maximum and minimum normal stresses acting on a plane where shear stress is zero.
*   **Von Mises Yield Criterion (Distortion Energy Theory):** A common criterion for ductile materials that predicts yielding when the equivalent stress reaches the yield strength of the material.
*   **Maximum Shear Stress Theory (Tresca Criterion):** Predicts yielding when the maximum shear stress in the component reaches half the yield strength.
*   **Combined Loading:** Simultaneous application of different types of loads (tension, shear, bending, torsion).

**Design of a Fillet Weld Under Combined Stresses:**

When a fillet weld is subjected to multiple types of stresses, we need to combine them using appropriate failure theories.

Consider a fillet weld subjected to:
*   Direct shear stress ($\tau_{xy}$)
*   Tensile or compressive stress ($\sigma_z$) acting along the weld length.
*   Bending stresses in addition to direct stresses.

For a fillet weld with throat thickness $t$ and effective length $L$, subjected to a load $P$ that causes both shear and direct stress:

*   Shear stress: $\tau = \frac{P_{shear}}{0.707l \times L}$
*   Normal stress: $\sigma = \frac{P_{normal}}{0.707l \times L}$

Using the Von Mises criterion, the equivalent stress ($\sigma_v$) is calculated as:
$$ \sigma_v = \sqrt{\sigma^2 + 3\tau^2} $$
The design condition is:
$$ \sigma_v \le \sigma_{allowable, weld} $$
where $\sigma_{allowable, weld}$ is the allowable tensile stress for the weld metal (which is related to the yield strength of the weld material).

Alternatively, using the Maximum Shear Stress Theory:
The maximum shear stress is $\tau_{max} = \frac{\sigma}{2} + \sqrt{\left(\frac{\sigma}{2}\right)^2 + \tau^2}$.
The design condition is:
$$ \tau_{max} \le \tau_{allowable, weld} = \frac{\sigma_{allowable, weld}}{2} $$

**Example:**

A fillet weld of throat area $A_{throat} = 100 \text{ mm}^2$ and effective length $L=50$ mm is subjected to a shear force of 40 kN and a direct tensile force of 30 kN. The allowable tensile stress for the weld material is 140 MPa. Design the weld (determine required leg length).

Let the leg length be $l$. Then $t = 0.707l$.
$A_{throat} = t \times L = 0.707l \times 50 = 35.35l \text{ mm}^2$.
We need $A_{throat} \ge \frac{P_{total}}{(\text{effective allowable stress})}$.

First, calculate the stresses:
Shear stress: $\tau = \frac{40 \times 10^3 \text{ N}}{A_{throat}}$
Normal stress: $\sigma = \frac{30 \times 10^3 \text{ N}}{A_{throat}}$

Let's assume we have already determined the required $A_{throat}$ from a preliminary calculation or that the weld size is given. If $A_{throat} = 100 \text{ mm}^2$:
$\tau = \frac{40 \times 10^3}{100} = 400 \text{ MPa}$
$\sigma = \frac{30 \times 10^3}{100} = 300 \text{ MPa}$

Wait, these stresses are too high for typical weld strengths. Let's assume the question meant forces are such that stresses are within reasonable bounds. Let's reframe the example.

**Revised Example:**

A fillet weld has a leg length $l=10$ mm and length $L=75$ mm. The allowable tensile stress for the weld material is 140 MPa. If the weld is subjected to a shear force $P_{shear}$ and a normal force $P_{normal}$, such that the shear stress is $\tau = 90 \text{ MPa}$ and the normal stress is $\sigma = 50 \text{ MPa}$. Is the weld safe according to the Von Mises criterion?

Throat thickness $t = 0.707 \times 10 = 7.07 \text{ mm}$.
Effective area $A_{throat} = 7.07 \times 75 = 530.25 \text{ mm}^2$.
$\tau = \frac{P_{shear}}{530.25}$, $\sigma = \frac{P_{normal}}{530.25}$.

Let's assume we are given the stresses directly:
$\tau = 90 \text{ MPa}$
$\sigma = 50 \text{ MPa}$
$\sigma_{allowable, weld} = 140 \text{ MPa}$

Using Von Mises criterion:
$$ \sigma_v = \sqrt{\sigma^2 + 3\tau^2} = \sqrt{50^2 + 3 \times 90^2} = \sqrt{2500 + 3 \times 8100} $$
$$ \sigma_v = \sqrt{2500 + 24300} = \sqrt{26800} \approx 163.7 \text{ MPa} $$

Since $\sigma_v (163.7 \text{ MPa}) > \sigma_{allowable, weld} (140 \text{ MPa})$, the weld is **not safe** under these stress conditions.

**Using Maximum Shear Stress Theory:**
$$ \tau_{max} = \frac{\sigma}{2} + \sqrt{\left(\frac{\sigma}{2}\right)^2 + \tau^2} = \frac{50}{2} + \sqrt{\left(\frac{50}{2}\right)^2 + 90^2} $$
$$ \tau_{max} = 25 + \sqrt{25^2 + 90^2} = 25 + \sqrt{625 + 8100} = 25 + \sqrt{8725} $$
$$ \tau_{max} = 25 + 93.4 \approx 118.4 \text{ MPa} $$
Allowable shear stress for this theory is $\tau_{allowable, weld} = \frac{\sigma_{allowable, weld}}{2} = \frac{140}{2} = 70 \text{ MPa}$.
Since $\tau_{max} (118.4 \text{ MPa}) > \tau_{allowable, weld} (70 \text{ MPa})$, the weld is **not safe** according to this criterion either.

**Textbook References:**

*   **Norton, "Machine Design – An Integrated Approach"**: Discusses failure theories extensively and applies them to various machine elements, including joints.
*   **Shigley's Mechanical Engineering Design**: Provides detailed mathematical treatments of combined stresses and their evaluation against failure criteria for ductile and brittle materials.

**Important Points to Remember:**

*   When multiple stresses are present, always use appropriate **failure theories** (e.g., Von Mises, Tresca).
*   The **allowable stress** for weld metal is typically based on the ultimate tensile strength or yield strength of the weld metal and includes a safety factor.
*   **Stress concentrations** at weld toes and roots must be considered for fatigue analysis, though this module focuses on static design.

---

## Practice Questions and Exercises

**Question 1:**
A lap joint is subjected to a tensile load $P=60$ kN. It is welded with two fillet welds, each of length $L=80$ mm. The allowable shear stress for the weld metal is $100$ MPa. Determine the required leg length ($l$) of the fillet welds.
**(Answer: $l \approx 5.30$ mm. A standard size of 6 mm leg length would be chosen.)**

**Question 2:**
A T-joint is made using fillet welds. The leg length of the fillet weld is 8 mm, and the effective length of the weld is 100 mm. The joint is subjected to a tensile force of 75 kN applied perpendicular to the plate. The allowable tensile stress for the weld material is 150 MPa. Calculate the stress in the weld and determine if it is safe.
**(Answer: Throat thickness $t = 0.707 \times 8 = 5.656$ mm. Effective area $A_{throat} = 5.656 \times 100 = 565.6 \text{ mm}^2$. Stress $\sigma = \frac{75 \times 10^3}{565.6} \approx 132.6 \text{ MPa}$. Since $132.6 \text{ MPa} < 150 \text{ MPa}$, the weld is safe.)**

**Question 3:**
A fillet weld is subjected to a shear stress of 80 MPa and a normal stress of 60 MPa. Using the Von Mises criterion, calculate the equivalent stress. If the allowable tensile stress for the weld material is 120 MPa, is the weld safe?
**(Answer: Equivalent stress $\sigma_v = \sqrt{60^2 + 3 \times 80^2} = \sqrt{3600 + 3 \times 6400} = \sqrt{3600 + 19200} = \sqrt{22800} \approx 151 \text{ MPa}$. Since $151 \text{ MPa} > 120 \text{ MPa}$, the weld is not safe.)**

**Question 4:**
Explain the significance of the "arrow side" and "other side" conventions in welding symbols.
**(Answer: The arrow side indicates the weld on the side of the joint where the arrow points. The "other side" or "far side" indicates a weld on the opposite side of the joint from the arrow. This distinction is crucial for correctly interpreting and executing the weld on the workpiece.)**

---

## Summary and Key Takeaways

*   **Welding Symbols:** A standardized language for communicating welding requirements on drawings, comprising reference line, arrow, weld symbols, and dimensions.
*   **Fillet Welds:** Primarily resist shear stress with the throat thickness ($t=0.707l$) as the critical dimension. Can also experience normal stresses.
*   **Butt Welds:** For full penetration, strength is governed by the base metal. For partial penetration, design is based on the effective throat area.
*   **Stresses:** Fillet welds under tension primarily experience shear. Torsion induces shear stresses that vary with radial distance, requiring consideration of the polar moment of inertia of the weld group. Combined stresses require failure theories.
*   **Design:** Ensure induced stresses are below allowable stresses for weld metal and base metal, considering safety factors and failure criteria.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
