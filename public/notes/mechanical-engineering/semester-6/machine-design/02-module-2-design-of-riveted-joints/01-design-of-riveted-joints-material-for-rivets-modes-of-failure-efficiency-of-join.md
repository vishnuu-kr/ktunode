---
title: "Design of riveted joints- Material for rivets, modes of failure, efficiency of joint, design of boiler and tank joints, structural joints"
subject: "MACHINE DESIGN"
module: "Module 2: Design of riveted joints"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1551d0cf480446375d"
status: "completed"
scrapedAt: "2026-05-20T18:05:52.762Z"
---
# Machine Design: Module 2 - Design of Riveted Joints

## Table of Contents

1.  [Introduction to Riveted Joints](#introduction)
2.  [Material for Rivets](#material-for-rivets)
3.  [Modes of Failure in Riveted Joints](#modes-of-failure)
    *   [Tensile Failure](#tensile-failure)
    *   [Shear Failure](#shear-failure)
    *   [Crushing/Bearing Failure](#crushing-bearing-failure)
    *   [Edge Failure](#edge-failure)
4.  [Efficiency of a Riveted Joint](#efficiency-of-joint)
5.  [Design of Boiler and Tank Joints](#design-of-boiler-and-tank-joints)
    *   [Types of Joints](#types-of-joints-boiler)
    *   [Design Considerations](#design-considerations-boiler)
6.  [Design of Structural Joints](#design-of-structural-joints)
    *   [Types of Joints](#types-of-joints-structural)
    *   [Design Considerations](#design-considerations-structural)
7.  [Practice Questions and Exercises](#practice-questions)
8.  [Important Points to Remember](#important-points)
9.  [References](#references)

---

## 1. Introduction to Riveted Joints

Riveted joints are semi-permanent fastening methods used to join two or more components, typically plates, by deforming a rivet. They are commonly found in structures like bridges, boilers, tanks, ships, and aircraft.

*   **Key Concept:** Riveting involves inserting a rivet through aligned holes in the components and then deforming the rivet head on one side (and sometimes both) to create a permanent joint.
*   **Types of Rivets:**
    *   **Button Head Rivets:** Common for general structural applications.
    *   **Countersunk Head Rivets:** Used where a smooth surface is required, like in aircraft skins.
    *   **Pan Head Rivets:** Offer good shear strength.
*   **Types of Joints Based on Rivet Arrangement:**
    *   **Lap Joint:** One plate overlaps another.
    *   **Butt Joint:** Plates are placed end-to-end, with a cover plate on one or both sides.

---

## 2. Material for Rivets

The material for rivets should be ductile enough to be easily deformed during the riveting process and to withstand the stresses in service. It is crucial that the rivet material is of similar or slightly lower strength than the plates being joined to ensure that the failure occurs in the rivet (shearing) rather than in the plate (tearing).

*   **Common Rivet Materials:**
    *   **Low Carbon Steel (Mild Steel):** Most commonly used for structural applications due to its good ductility, weldability, and cost-effectiveness. ([Bhandari, V.B.](https://www.tatamcgrawhill.com/design-of-machine-elements/9789339220278), Chapter 10)
    *   **Copper:** Used for non-ferrous metals and in applications where electrical conductivity is important.
    *   **Aluminum Alloys:** Used for light-weight structures, especially in aerospace.
    *   **Brass:** Used for light-duty applications and where corrosion resistance is needed.
    *   **Stainless Steel:** Used for corrosion-resistant applications.

*   **Key Consideration:** The shear strength of the rivet material is a primary factor in designing riveted joints. The tensile strength of the plate material influences tearing and bearing strengths.

---

## 3. Modes of Failure in Riveted Joints

A riveted joint can fail in several ways. The design aims to prevent failure by ensuring that the stresses induced in the joint do not exceed the allowable stresses for the rivet and plate materials.

*(Corresponds to CO1: Interpret component behavior subjected to static and fatigue loads and identify the failure criteria)*

### a) Tensile Failure (Tearing of the Plate)

This occurs when the plate rips apart in the section with the minimum cross-sectional area, usually at the edge of a rivet hole.

*   **Cause:** The net tensile stress in the plate material exceeds its ultimate tensile strength.
*   **Condition for Failure:**
    $P \ge n \times (\pi \times d^2 / 4) \times \tau_{ultimate}$ (Shear of rivet)
    $P \ge d \times t \times \sigma_{t, ultimate}$ (Tearing of plate at single shear)
    $P \ge (p - d) \times t \times \sigma_{t, ultimate}$ (Tearing of plate at double shear)

    Where:
    *   $P$ = Applied load per unit length of joint (or per rivet)
    *   $n$ = Number of rivets in a row
    *   $d$ = Diameter of the rivet
    *   $t$ = Thickness of the plate
    *   $\tau_{ultimate}$ = Ultimate shear strength of the rivet material
    *   $\sigma_{t, ultimate}$ = Ultimate tensile strength of the plate material
    *   $p$ = Pitch of the rivets (distance between centers of adjacent rivets in the same row)

*   **Design Aspect:** Ensure the net area of the plate is sufficient to withstand the tensile load. The pitch ($p$) plays a crucial role.

### b) Shear Failure of the Rivet

This occurs when the rivet breaks due to the shear stress induced by the applied load.

*   **Cause:** The shear stress in the rivet exceeds its ultimate shear strength.
*   **Modes of Shear:**
    *   **Single Shear:** Occurs in lap joints. The rivet is sheared across one cross-section.
    *   **Double Shear:** Occurs in butt joints with one or two cover plates. The rivet is sheared across two cross-sections.

*   **Condition for Failure (Single Shear):**
    $P > n \times (\pi d^2 / 4) \times \tau_{ultimate}$
    Here, $n=1$ for a single row of rivets.

*   **Condition for Failure (Double Shear):**
    $P > 2 \times n \times (\pi d^2 / 4) \times \tau_{ultimate}$
    Here, $n=1$ for a single rivet in double shear.

*   **Design Aspect:** The cross-sectional area of the rivet and its shear strength are critical. Double shear is stronger than single shear.

### c) Crushing or Bearing Failure

This occurs when the rivet hole in the plate deforms or elongates due to the compressive stress exerted by the rivet.

*   **Cause:** The bearing pressure between the rivet and the plate exceeds the ultimate bearing strength of the material.
*   **Condition for Failure:**
    $P > d \times t \times \sigma_{c, ultimate}$ (Single shear)
    $P > 2 \times d \times t \times \sigma_{c, ultimate}$ (Double shear)

    Where:
    *   $\sigma_{c, ultimate}$ = Ultimate crushing/bearing strength of the plate material (often taken as 1.5 to 2 times the ultimate tensile strength of the plate, as per some design codes, or specific bearing strength values). ([Shigley's Mechanical Engineering Design, Budynas & Nisbett](https://www.mheducation.com/highereducation/isbn/9781260574278.html), Chapter 7)

*   **Design Aspect:** The bearing area ($d \times t$) and the bearing strength of the plate material are important. A larger plate thickness or rivet diameter increases the bearing area.

### d) Edge Failure (Jagged Shearing)

This occurs when the edge distance (distance from the center of the rivet to the edge of the plate) is too small. The plate material is torn away in a jagged manner due to shear stress concentration.

*   **Cause:** High shear stress at the edge of the plate.
*   **Condition for Failure:**
    $P > (\text{edge distance} - 0.5d) \times t \times \tau_{ultimate}$ (Approximate formulation, simplified)

*   **Design Aspect:** The edge distance ($e$) must be sufficient. A common rule of thumb is $e \ge 1.5d$ to $2d$. ([Sharma & Aggarwal, A Text book of Machine Design](https://www.skkatariaandsons.com/books/machine-design/a-textbook-of-machine-design-6th-ed), Chapter 10)

---

## 4. Efficiency of a Riveted Joint

The efficiency of a riveted joint is defined as the ratio of the strength of the joint to the strength of the solid plate without any holes. It indicates how effectively the joint transmits the load.

*   **Key Concept:** A joint with lower efficiency means more material is wasted or the joint is weaker relative to the solid plate. Maximizing efficiency is a design goal.
*   **Calculation:**

    $\text{Efficiency} (\eta) = \frac{\text{Strength of the joint}}{\text{Strength of the solid plate}}$

    The strength of the joint is the minimum of the strengths calculated for shear, tearing, and crushing. The strength of the solid plate is its tensile strength multiplied by its cross-sectional area.

    *   **Strength of Joint (per pitch length):**
        *   Shear strength: $n \times (\pi d^2 / 4) \times \tau$ (for single shear)
        *   Shear strength: $2 \times n \times (\pi d^2 / 4) \times \tau$ (for double shear)
        *   Tearing strength: $(p - nd) \times t \times \sigma_t$
        *   Bearing strength: $n \times d \times t \times \sigma_c$ (for single shear)
        *   Bearing strength: $2 \times n \times d \times t \times \sigma_c$ (for double shear)

        Where $n$ is the number of rivets in a row for the failure mode considered per pitch length. For standard single/double riveted joints, $n=1$.

    *   **Strength of Solid Plate (per pitch length):**
        $p \times t \times \sigma_t$

*   **Example Calculation (Single Riveted Lap Joint):**
    Assume:
    *   Applied load $P$
    *   Rivet diameter $d$
    *   Plate thickness $t$
    *   Pitch $p$
    *   Allowable shear stress of rivet $\tau$
    *   Allowable tensile stress of plate $\sigma_t$
    *   Allowable bearing stress of plate $\sigma_c$

    *   **Strength in Shear of Rivet:** $P_s = 1 \times (\pi d^2 / 4) \times \tau$
    *   **Strength in Tearing of Plate:** $P_t = (p - d) \times t \times \sigma_t$
    *   **Strength in Bearing of Rivet/Plate:** $P_b = d \times t \times \sigma_c$

    *   **Strength of Joint:** $P_{joint} = \min(P_s, P_t, P_b)$
    *   **Strength of Solid Plate:** $P_{plate} = p \times t \times \sigma_t$
    *   **Efficiency:** $\eta = P_{joint} / P_{plate}$

*(Corresponds to CO2: Analyze the load carrying capacity of riveted joints)*

---

## 5. Design of Boiler and Tank Joints

Boiler and tank joints are critical as they are subjected to internal pressure, leading to tensile stresses in the shell. The joints must be designed to be as efficient as possible to prevent leakage and failure.

### a) Types of Joints

These joints are typically butt joints with cover plates to achieve double shear for the rivets and maintain the strength of the joint.

*   **Longitudinal Joints:** Join plates along the length of the cylindrical shell. These are subjected to higher stress than circumferential joints.
*   **Circumferential Joints:** Join plates around the circumference of the shell.

*   **Common Configurations:**
    *   **Single Riveted Lap Joint:** Weakest, rarely used for boilers.
    *   **Double Riveted Lap Joint:** Better than single, but still not ideal for high-pressure vessels.
    *   **Triple Riveted Lap Joint:** Stronger, but still susceptible to bending stresses.
    *   **Single Cover Butt Joint:** Stronger than lap joints, but cover plate is only on one side.
    *   **Double Cover Butt Joint:** Most efficient for boilers. Two cover plates are used, one on each side of the main plates. This allows for double shear in the rivets. Often designed with different rivet spacing in different rows to improve efficiency.

### b) Design Considerations

*(Corresponds to CO2: Analyze the load carrying capacity of riveted joints)*

1.  **Internal Pressure:** The hoop stress ($\sigma_h$) and longitudinal stress ($\sigma_l$) in the shell are calculated based on internal pressure ($p$), shell diameter ($D$), and shell thickness ($t$).
    *   Hoop Stress: $\sigma_h = \frac{pD}{2t}$
    *   Longitudinal Stress: $\sigma_l = \frac{pD}{4t}$
    *   **Note:** The joint must be designed to withstand the higher hoop stress.

2.  **Rivet Pitch and Arrangement:**
    *   **Pitch (p):** The distance between the centers of adjacent rivets in a row. It should be chosen to balance shear and tearing strength. Too large a pitch leads to tearing, too small leads to excessive shear or bearing stress or inefficiency.
    *   **Diagonal Pitch ($p_d$):** Distance between centers of adjacent rivets in adjacent rows, measured diagonally. Important for staggered joints.
    *   **Edge Distance (e):** Distance from the center of the rivet to the edge of the plate. Typically $e \ge 1.5d$.
    *   **Margin ($m$):** Distance from the center of the rivet to the end of the cover plate.

3.  **Number of Rivets:** Determine the number of rivets required to carry the load based on shear strength.

4.  **Rivet Diameter (d):**
    *   Often chosen based on empirical rules or standard sizes. A common rule is to choose rivet diameter based on plate thickness: $d \approx 6\sqrt{t}$ for steel plates. ([Bhandari, V.B.](https://www.tatamcgrawhill.com/design-of-machine-elements/9789339220278), Chapter 10)
    *   Ensure the rivet can withstand shear.

5.  **Cover Plate Thickness:**
    *   For double cover butt joints, the total thickness of the cover plates should be slightly greater than the thickness of the main plate.
    *   If two cover plates of equal thickness are used, each cover plate thickness ($t_c$) should be at least half the main plate thickness ($t$).
    *   The cover plates must also be designed to resist tearing and bearing.

6.  **Joint Efficiency:** Aim for high efficiency (e.g., $> 90\%$ for critical applications like boilers) by selecting appropriate rivet patterns and dimensions.

7.  **Staggering of Rivets:** In multi-row joints, staggering rivets can improve strength and efficiency by reducing the effective tearing area per rivet.

*   **Design Procedure Example (Double Cover Butt Joint):**
    1.  Determine the hoop stress in the shell.
    2.  Calculate the total load acting on the joint per unit length ($P = \sigma_h \times t$).
    3.  Select a preliminary rivet diameter ($d$) based on plate thickness.
    4.  Determine the shear strength of a single rivet in double shear ($P_s = 2 \times (\pi d^2 / 4) \times \tau$).
    5.  Calculate the required number of rivets per pitch length ($n = P / P_s$). Round up to the nearest integer.
    6.  Choose a pitch ($p$) and arrangement (e.g., staggered) for the rivets.
    7.  Check the tearing strength of the plate between rivet holes: $P_t = (p - d) \times t \times \sigma_t$.
    8.  Check the bearing strength of the rivet and plate: $P_b = 2 \times d \times t \times \sigma_c$ (for double shear, considering one rivet diameter).
    9.  The minimum of $P_s$, $P_t$, and $P_b$ is the joint strength.
    10. Calculate the strength of the solid plate for the same pitch ($P_{plate} = p \times t \times \sigma_t$).
    11. Calculate the efficiency ($\eta = P_{joint} / P_{plate}$).
    12. Adjust $d$, $p$, or the joint configuration if the efficiency is too low or if any failure mode is critical.
    13. Design the cover plates for adequate thickness and to avoid their own failure modes (tearing, shear, bearing).

---

## 6. Design of Structural Joints

Structural joints are used to connect beams, columns, and other load-bearing members in buildings, bridges, and frameworks. They are typically subjected to tensile, compressive, and shear forces.

### a) Types of Joints

*   **Lap Joint:** Simple but induces bending moments.
*   **Butt Joint:** With cover plates, handles axial loads more efficiently.
*   **T-Joint:** Connecting a T-section to a plate or beam.
*   **Corner Joint:** Connecting two plates at a right angle.

*   **Specific Configurations:**
    *   **Beam to Beam Connection:** Connecting a beam to another beam (e.g., using angle cleats).
    *   **Column Splices:** Joining sections of columns.
    *   **Gusset Plates:** Used in trusses to connect members, often with multiple rivets.

### b) Design Considerations

*(Corresponds to CO2: Analyze the load carrying capacity of riveted joints)*

1.  **Load Type:** Determine if the joint is subjected to tensile, compressive, shear, or a combination of loads.
2.  **Stresses in Members:** Calculate the forces acting on the members to be joined.
3.  **Rivet Strength:** Rivets are primarily designed to resist shear.
    *   **Shear Strength:** Determined by the cross-sectional area of the rivet and its shear strength.
    *   **Bearing Strength:** Determined by the projected area of the rivet hole and the bearing strength of the plate/rivet material.
4.  **Plate Strength:** The connected plates must resist tearing, shear-out, and bearing.
5.  **Gusset Plates:** If used, gusset plates must be designed to resist the forces transferred from the connected members, considering bearing and tearing.
6.  **Bolt vs. Rivet:** In modern structural design, high-strength bolts have largely replaced rivets due to ease of installation, consistent pre-stressing, and higher strength. However, understanding riveted joints is foundational.
7.  **Allowable Stresses:** Design is typically done using allowable stresses (based on ultimate or yield strength with a factor of safety).
    *   Allowable Shear Stress of Rivet ($\tau_{allow}$)
    *   Allowable Tensile Stress of Plate ($\sigma_{t,allow}$)
    *   Allowable Bearing Stress of Plate ($\sigma_{c,allow}$)

*   **Design Procedure Example (Connecting a Bracket Plate to a Column):**
    1.  Determine the load applied to the bracket.
    2.  Assume a rivet diameter ($d$) and material.
    3.  Calculate the shear strength of a single rivet ($P_s = (\pi d^2 / 4) \times \tau_{allow}$).
    4.  Calculate the bearing strength of a single rivet ($P_b = d \times t \times \sigma_{c,allow}$, where $t$ is plate thickness).
    5.  The safe load per rivet is $P_{rivet} = \min(P_s, P_b)$.
    6.  Determine the number of rivets required ($N = \text{Total Load} / P_{rivet}$).
    7.  Arrange the rivets in a suitable pattern (e.g., rows with appropriate pitch) to distribute the load.
    8.  Check the tearing strength of the bracket plate between rivet holes: $P_t = (p - d) \times t \times \sigma_{t,allow}$.
    9.  Check edge distances and other geometric constraints.

---

## 7. Practice Questions and Exercises

**Question 1:** A lap joint is made by joining two plates of 10 mm thickness using 20 mm diameter rivets. The allowable stresses for the rivet material are $\tau_{allow} = 80$ MPa and $\sigma_{c,allow} = 160$ MPa. For the plate material, $\sigma_{t,allow} = 120$ MPa. The pitch of the rivets is 60 mm. Calculate the efficiency of the joint per pitch length.

**Solution 1:**
Given:
*   Plate thickness, $t = 10$ mm
*   Rivet diameter, $d = 20$ mm
*   Allowable shear stress, $\tau_{allow} = 80$ MPa
*   Allowable bearing stress, $\sigma_{c,allow} = 160$ MPa
*   Allowable tensile stress, $\sigma_{t,allow} = 120$ MPa
*   Pitch, $p = 60$ mm
*   Joint type: Lap joint (single shear)

1.  **Strength in Shear of Rivet ($P_s$):**
    $P_s = (\pi d^2 / 4) \times \tau_{allow}$
    $P_s = (\pi \times 20^2 / 4) \times 80$
    $P_s = (\pi \times 400 / 4) \times 80 = 100\pi \times 80 = 25132.7$ N $\approx 25.13$ kN

2.  **Strength in Tearing of Plate ($P_t$):**
    $P_t = (p - d) \times t \times \sigma_{t,allow}$
    $P_t = (60 - 20) \times 10 \times 120$
    $P_t = 40 \times 10 \times 120 = 400 \times 120 = 48000$ N $= 48$ kN

3.  **Strength in Bearing ($P_b$):**
    $P_b = d \times t \times \sigma_{c,allow}$
    $P_b = 20 \times 10 \times 160$
    $P_b = 200 \times 160 = 32000$ N $= 32$ kN

4.  **Strength of the Joint ($P_{joint}$):**
    $P_{joint} = \min(P_s, P_t, P_b) = \min(25.13, 48, 32)$ kN
    $P_{joint} = 25.13$ kN

5.  **Strength of Solid Plate ($P_{plate}$):**
    $P_{plate} = p \times t \times \sigma_{t,allow}$
    $P_{plate} = 60 \times 10 \times 120$
    $P_{plate} = 600 \times 120 = 72000$ N $= 72$ kN

6.  **Efficiency ($\eta$):**
    $\eta = \frac{P_{joint}}{P_{plate}} \times 100\%$
    $\eta = \frac{25.13}{72} \times 100\%$
    $\eta = 34.9\%$

**Answer:** The efficiency of the joint is 34.9%.

**Question 2:** A double-riveted lap joint is to be designed for a tensile force of 200 kN. The plates are 12 mm thick. The allowable stresses are $\tau_{allow} = 90$ MPa, $\sigma_{t,allow} = 150$ MPa, and $\sigma_{c,allow} = 180$ MPa. Determine the required rivet diameter and the pitch.

**Solution 2:**
Given:
*   Tensile force, $P = 200$ kN $= 200 \times 10^3$ N
*   Plate thickness, $t = 12$ mm
*   Allowable shear stress, $\tau_{allow} = 90$ MPa
*   Allowable tensile stress, $\sigma_{t,allow} = 150$ MPa
*   Allowable bearing stress, $\sigma_{c,allow} = 180$ MPa
*   Joint type: Double riveted lap joint (so there are two rivets in the effective section)

**Step 1: Determine Rivet Diameter (d)**
Assume the joint is governed by the shear strength of the rivets. For a double riveted lap joint, each pitch length carries the load through two rivets.
Let's consider the strength of *one rivet* in shear:
$P_{s, \text{one rivet}} = (\pi d^2 / 4) \times \tau_{allow}$

The total force on the joint is $P = 200$ kN. If we assume the joint fails in shear, and it's a double riveted joint, the total shear load carried by two rivets is $2 \times P_{s, \text{one rivet}}$.
So, $P = 2 \times (\pi d^2 / 4) \times \tau_{allow}$
$200 \times 10^3 = 2 \times (\pi d^2 / 4) \times 90$
$200 \times 10^3 = (\pi d^2 / 2) \times 90$
$d^2 = \frac{200 \times 10^3 \times 2}{90 \pi} = \frac{400 \times 10^3}{282.74} \approx 1414.7$
$d \approx \sqrt{1414.7} \approx 37.6$ mm

Let's choose a standard rivet diameter slightly larger, say $d = 38$ mm.

**Step 2: Check Bearing Strength for the chosen diameter**
The bearing strength per rivet is $P_{b, \text{one rivet}} = d \times t \times \sigma_{c,allow}$
$P_{b, \text{one rivet}} = 38 \times 12 \times 180 = 82080$ N $= 82.08$ kN
Total bearing strength for two rivets = $2 \times 82.08 = 164.16$ kN.

**Step 3: Check Shear Strength for the chosen diameter**
The shear strength per rivet is $P_{s, \text{one rivet}} = (\pi d^2 / 4) \times \tau_{allow}$
$P_{s, \text{one rivet}} = (\pi \times 38^2 / 4) \times 90 = (\pi \times 1444 / 4) \times 90 \approx 1134.1 \times 90 = 102069$ N $= 102.07$ kN
Total shear strength for two rivets = $2 \times 102.07 = 204.14$ kN.

Since $P_{joint}$ governed by shear (204.14 kN) is greater than the load (200 kN) and the bearing strength (164.16 kN) is also greater than the load, let's re-evaluate based on the load per rivet.
Total load = 200 kN. Load per rivet = 100 kN.
Required shear strength per rivet: $100 \times 10^3 = (\pi d^2 / 4) \times 90 \implies d^2 = \frac{400 \times 10^3}{90 \pi} \approx 1414.7 \implies d \approx 37.6$ mm.
Required bearing strength per rivet: $100 \times 10^3 = d \times 12 \times 180 \implies d = \frac{100 \times 10^3}{12 \times 180} = \frac{100000}{2160} \approx 46.3$ mm.

Therefore, the diameter must be governed by bearing, so we select $d = 46.3$ mm. Let's choose a standard size, say $d=48$ mm.

**Re-check with $d=48$ mm:**
*   Shear strength per rivet: $P_s = (\pi \times 48^2 / 4) \times 90 = (\pi \times 2304 / 4) \times 90 \approx 1809.56 \times 90 = 162860$ N $= 162.86$ kN.
*   Total shear strength for two rivets: $2 \times 162.86 = 325.72$ kN. (Adequate for 200 kN)
*   Bearing strength per rivet: $P_b = 48 \times 12 \times 180 = 103680$ N $= 103.68$ kN.
*   Total bearing strength for two rivets: $2 \times 103.68 = 207.36$ kN. (Adequate for 200 kN)

So, $d = 48$ mm is a suitable diameter.

**Step 4: Determine Pitch (p)**
The tensile strength of the plate per pitch length must be greater than or equal to the total load.
$P_{plate} = (p - nd) \times t \times \sigma_{t,allow}$
For a double riveted lap joint, $n=2$.
$P_{plate} \ge 200 \times 10^3$ N
$(p - 2 \times 48) \times 12 \times 150 \ge 200 \times 10^3$
$(p - 96) \times 1800 \ge 200 \times 10^3$
$p - 96 \ge \frac{200000}{1800} \approx 111.11$
$p \ge 111.11 + 96 = 207.11$ mm

Also, the pitch must be within reasonable limits for effective riveting and to prevent excessive stress concentration. Common guidelines suggest:
*   $p \ge 2.5d$ (for single/double riveting)
    $p \ge 2.5 \times 48 = 120$ mm
*   $p \le 16t$ (for double/treble riveting)
    $p \le 16 \times 12 = 192$ mm
*   $p \le 100 + 4d$ (for double/treble riveting)
    $p \le 100 + 4 \times 48 = 100 + 192 = 292$ mm

Considering the requirement $p \ge 207.11$ mm and the upper limit $p \le 192$ mm, there seems to be a conflict. This indicates that a double-riveted lap joint might not be sufficient for this load with these plate dimensions and stresses, or that a different rivet arrangement or higher strength material is needed.

Let's re-examine the assumption that the joint fails in shear for $d=38$ mm:
Shear strength for $d=38$ mm (two rivets) = $2 \times 102.07$ kN = 204.14 kN.
Bearing strength for $d=38$ mm (two rivets) = $2 \times (38 \times 12 \times 180) = 2 \times 82.08 = 164.16$ kN.
This means failure is likely governed by bearing for $d=38$ mm.

Let's try to satisfy bearing first, and then check shear and tearing.
For bearing, each rivet needs to carry $200 \text{ kN} / 2 = 100 \text{ kN}$.
$100 \times 10^3 = d \times t \times \sigma_{c,allow} = d \times 12 \times 180 \implies d = 46.3$ mm.
Let's take $d = 48$ mm.

Now check shear for $d = 48$ mm:
Shear strength per rivet = 162.86 kN. Total shear for two rivets = 325.72 kN. This is adequate.

Now check tearing for $d = 48$ mm:
$P_{plate} = (p - 2 \times 48) \times 12 \times 150 \ge 200 \times 10^3$
$(p - 96) \times 1800 \ge 200000$
$p - 96 \ge 111.11 \implies p \ge 207.11$ mm.

The upper limit for pitch in double riveting is typically around $16t = 16 \times 12 = 192$ mm.
Since $207.11$ mm is greater than the maximum allowable pitch of 192 mm, a double-riveted lap joint is **not suitable** for this load and plate thickness.

**If we were to proceed assuming a suitable arrangement or materials allow for a larger pitch:**
If we must provide an answer based on the calculations, we would select $d=48$ mm and a pitch around 200-210 mm, acknowledging the limitations.

**Answer (with caveats):**
Required rivet diameter $d \approx 48$ mm.
Required pitch $p \approx 207$ mm.
However, this pitch is beyond typical design limits for a double-riveted lap joint, suggesting the joint configuration or parameters need reconsideration.

**Question 3:** A double cover butt joint is used to join two plates of 15 mm thickness. The joint is subjected to a tensile load of 150 kN per meter width. The rivets are 20 mm in diameter and made of steel with $\tau_{allow} = 90$ MPa. The plates are of mild steel with $\sigma_{t,allow} = 120$ MPa and $\sigma_{c,allow} = 200$ MPa. Design the joint by determining the pitch and the required thickness of the cover plates.

**Solution 3:**
Given:
*   Plate thickness, $t = 15$ mm
*   Tensile load per meter width, $P = 150$ kN/m $= 150 \times 10^3$ N/m
*   Rivet diameter, $d = 20$ mm
*   Allowable shear stress, $\tau_{allow} = 90$ MPa
*   Allowable tensile stress, $\sigma_{t,allow} = 120$ MPa
*   Allowable bearing stress, $\sigma_{c,allow} = 200$ MPa
*   Joint type: Double cover butt joint (double shear)

**Step 1: Determine the number of rivets per meter width.**
Load per rivet = $150 \times 10^3$ N / (number of rivets in the width)
Let's assume a single row of rivets for simplicity first, and calculate the load each rivet can carry.
Shear strength of one rivet in double shear: $P_s = 2 \times (\pi d^2 / 4) \times \tau_{allow} = 2 \times (\pi \times 20^2 / 4) \times 90 = 2 \times (\pi \times 400 / 4) \times 90 = 2 \times 100\pi \times 90 = 18000\pi \approx 56548.7$ N $\approx 56.55$ kN.
Bearing strength of one rivet: $P_b = 2 \times d \times t \times \sigma_{c,allow} = 2 \times 20 \times 15 \times 200 = 2 \times 300 \times 200 = 120000$ N $= 120$ kN.

The safe load per rivet is limited by shear: $P_{rivet} = \min(P_s, P_b) = 56.55$ kN.

Number of rivets required per meter width = Load per meter width / Load per rivet
$N = \frac{150 \times 10^3 \text{ N}}{56.55 \times 10^3 \text{ N/rivet}} \approx 2.65$ rivets/m.
Since we need a whole number of rivets, we must have at least 3 rivets per meter, but this doesn't account for pitch directly.

**Step 2: Determine the pitch (p).**
Let's assume we use a pitch $p$. The load per pitch length is $P_{pitch} = p \times 150$ N.
This load is carried by the rivets within that pitch.
*   Shear strength of rivets in one pitch: $P_s = 2 \times (\pi d^2 / 4) \times \tau_{allow} = 56.55$ kN.
*   Tearing strength of plate in one pitch: $P_t = (p - d) \times t \times \sigma_{t,allow} = (p - 20) \times 15 \times 120 = (p - 20) \times 1800$ N.
*   Bearing strength of rivets in one pitch: $P_b = 2 \times d \times t \times \sigma_{c,allow} = 120$ kN.

The strength of the joint per pitch length is $P_{joint, pitch} = \min(P_s, P_t, P_b)$.
We also need $P_{joint, pitch} \ge P_{pitch}$.

Let's set the joint strength equal to the applied load per pitch length to find the required pitch:
We need $P_t \ge P_{pitch}$.
$(p - 20) \times 1800 \ge p \times 150$
$1800p - 36000 \ge 150p$
$1650p \ge 36000$
$p \ge \frac{36000}{1650} \approx 21.82$ mm. This is too small, indicating the tearing strength is much higher than the applied load if $p$ is large.

Let's match shear strength to the load per pitch:
$56.55 \times 10^3 = p \times 150$
$p = \frac{56.55 \times 10^3}{150} \approx 377$ mm.

Now check tearing and bearing for this pitch $p = 377$ mm and $d = 20$ mm:
*   $P_s = 56.55$ kN (per rivet, in double shear).
*   $P_t = (377 - 20) \times 15 \times 120 = 357 \times 1800 = 642600$ N $= 642.6$ kN. (Strength of plate per pitch)
*   $P_b = 120$ kN (per rivet, in double shear bearing).

The load per pitch length is $P_{pitch} = 377 \times 150 = 56550$ N $= 56.55$ kN.
The strength of the joint per pitch length = $\min(P_s, P_t, P_b) = \min(56.55 \text{ kN (for one rivet)}, 642.6 \text{ kN (for plate)}, 120 \text{ kN (for one rivet bearing)})$.
The critical failure mode for a single rivet is shear. The strength of the joint per pitch length should be considered as the load that can be transferred. In a double cover butt joint with a single row of rivets, the entire load per pitch length needs to be transferred by the rivets in that pitch.

If $p = 377$ mm, then the load per pitch length is $377 \times 150 = 56.55$ kN. This load is carried by the rivets.
The capacity of one rivet in shear is 56.55 kN. This matches exactly.
The capacity of one rivet in bearing is 120 kN.
The capacity of the plate in tearing is 642.6 kN.

So, with $p = 377$ mm, the joint is designed to fail in shear of the rivets.
Check pitch limits:
*   $p \ge 3d = 3 \times 20 = 60$ mm. (Satisfied)
*   $p \le 12t = 12 \times 15 = 180$ mm for single/double riveting. (Not satisfied by 377 mm)
*   $p \le 24t = 24 \times 15 = 360$ mm for triple riveting. (Close to 377 mm, but still not satisfied)
*   $p \le 100 + 4d = 100 + 4 \times 20 = 180$ mm for double/triple riveting.

This large pitch suggests that a single row of rivets is not optimal. To achieve a more practical pitch, multiple rows or staggered riveting would be used.

Let's assume a common pitch, say $p = 80$ mm.
Load per pitch length = $80 \times 150 = 12000$ N.
This load needs to be carried by the rivets in this pitch.
Strength of one rivet in shear = 56.55 kN.
Strength of one rivet in bearing = 120 kN.
The load per pitch (12 kN) is much less than the capacity of one rivet. This means we have more rivets than necessary for this load if pitch is 80 mm.

Let's go back to the number of rivets calculation more carefully.
We have a load of $150 \times 10^3$ N per meter width.
We have rivets with shear capacity of 56.55 kN (double shear).
Number of rivets per meter = $150 \text{ kN} / 56.55 \text{ kN/rivet} \approx 2.65$ rivets/meter.
This means that over a 1-meter length, we need the equivalent of 2.65 rivets to carry the load.

If we use a pitch of, say, $p = 100$ mm (0.1 m).
Number of rivets per meter = $1/0.1 = 10$ rivets.
Load per pitch = $100 \times 150 = 15000$ N $= 15$ kN.
This load is carried by the rivets in that pitch.
The capacity of one rivet in shear is 56.55 kN. The capacity in bearing is 120 kN.
The load of 15 kN is well within the capacity of one rivet.
The strength of the plate per pitch is $P_t = (100 - 20) \times 15 \times 120 = 80 \times 1800 = 144000$ N $= 144$ kN.
The joint strength per pitch is $\min(56.55 \text{ kN (shear)}, 144 \text{ kN (tear)}, 120 \text{ kN (bearing)}) = 56.55$ kN.
Since the joint strength per pitch (56.55 kN) is much greater than the load per pitch (15 kN), a pitch of 100 mm is safe and feasible.

**Step 3: Determine the thickness of the cover plates.**
For a double cover butt joint with two cover plates of equal thickness, the thickness of each cover plate ($t_c$) should be at least half the thickness of the main plate.
$t_c \ge t/2 = 15 / 2 = 7.5$ mm.

We should check the cover plates for failure as well.
*   Shear of cover plates: The cover plates must also have sufficient area to resist shear. In double shear, the two cover plates together are typically designed to have at least the same shear strength as the rivet shank.
*   Tearing of cover plates: The cover plates must have sufficient cross-sectional area to resist tearing where the rivets are placed. For the first row of rivets, the area of the cover plate is reduced by the area of two rivet holes.
*   Bearing of cover plates: The cover plates must resist bearing against the rivets.

Let's assume $t_c = 8$ mm (standard thickness).
For the first row of rivets, the net area of the cover plate is $(p - d) \times t_c$. The tearing strength of the cover plate is $(p - d) \times t_c \times \sigma_{t,allow}$.
With $p = 100$ mm, $d = 20$ mm, $t_c = 8$ mm, $\sigma_{t,allow} = 120$ MPa:
$P_{t,cover} = (100 - 20) \times 8 \times 120 = 80 \times 8 \times 120 = 640 \times 120 = 76800$ N $= 76.8$ kN.
The load per rivet is $15$ kN. So, the tearing strength of the cover plate per rivet is $76.8$ kN, which is sufficient.

**Answer:**
Rivet diameter $d = 20$ mm.
Pitch $p = 100$ mm.
Cover plate thickness $t_c = 8$ mm.

---

## 8. Important Points to Remember

*   **Failure Modes:** Always consider shear of the rivet, tearing of the plate, and crushing/bearing of the plate against the rivet. The joint is designed to be weakest in the intended failure mode (often shear for rivets).
*   **Material Selection:** Rivet material should be ductile and of similar strength to the plate.
*   **Efficiency:** Aim for high joint efficiency, especially in critical applications like boilers.
*   **Double Shear:** Double cover butt joints provide greater strength than lap joints due to double shear of the rivets.
*   **Pitch and Edge Distance:** These geometric parameters significantly influence the joint's strength and efficiency. Follow standard design guidelines for these.
*   **Boiler Joints:** Designed to withstand internal pressure, hence hoop stress is critical. Double cover butt joints are preferred for high efficiency.
*   **Structural Joints:** Designed for external loads, considering shear, bearing, and tensile/compressive stresses in members.
*   **Factors of Safety:** In practice, allowable stresses incorporate factors of safety.
*   **Modern Practice:** High-strength bolts and welding have largely replaced riveting in many applications, but the principles of stress analysis for joints remain fundamental.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


## 9. References

*   **Norton, Robert L.** *Machine Design – An Integrated Approach*. 5th ed., Pearson Education, 2018.
*   **Bhandari, V. B.** *Design of Machine Elements*. 5th ed., Tata McGraw Hill, 2020.
*   **Jalaludeen.** *Design of Machine elements*. Anuradha Publications, Chennai, 2014.
*   **Sharma, P. C., and D. K. Aggarwal.** *A Text book of Machine Design*. S.K. Kataria & Sons, 2017.
*   **Shigley, J. E.** *Mechanical Engineering Design*. McGraw Hill, 2003.
*   **Juvinall, R. C., and K. M. Marshek.** *Fundamentals of Machine Component Design*. 5th ed., John Wiley, 2011.
*   **Budynas, Richard G., and J. Keith Nisbett.** *Shigley’s Mechanical Engineering Design*. 11th ed., McGraw Hill, 2020.
*   **Spotts, M. F., and T. E. Shoup.** *Design of Machine Elements*. 8th ed., Pearson Education, 2019.
*   **Klebanov, Boris M., David M. Barlam, and Frederic E. Nystrom.** *Machine Elements: Life and Design*. CRC Press, 2019.