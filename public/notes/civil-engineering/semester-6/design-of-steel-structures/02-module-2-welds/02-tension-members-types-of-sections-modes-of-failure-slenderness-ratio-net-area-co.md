---
title: "Tension Members - Types of sections -Modes of failure-Slenderness ratio- Net area- Concepts of Shear Lag- Design of tension Members-Connections in tension members - Use of lug angles"
subject: "DESIGN OF STEEL STRUCTURES"
module: "Module 2: Welds"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8110b6"
status: "completed"
scrapedAt: "2026-05-20T18:52:45.669Z"
---
# DESIGN OF STEEL STRUCTURES - MODULE 2: WELDS

## Topic: Tension Members

This module focuses on the behavior and design of structural elements subjected to tensile forces. We will explore different types of sections used as tension members, how they fail, critical design parameters, and common connection details.

---

### 1. Types of Sections Used as Tension Members

Tension members can be formed from various steel sections, each with its advantages and design considerations.

*   **Rolled Sections:**
    *   **Equal and Unequal Angles:**
        *   Versatile and commonly used, especially in single or back-to-back configurations.
        *   Connection is typically made through one leg.
        *   The outstanding leg contributes to the tensile resistance, but its effectiveness is reduced due to **shear lag**.
        *   **Example:** ISA 100x100x10 (Equal angle, 100mm legs, 10mm thickness)
    *   **Channels (C-sections):**
        *   Good stiffness and can be used in single or back-to-back arrangements.
        *   Often connected through one flange.
        *   **Example:** MC 200 (Medium channel, 200mm depth)
    *   **I-sections (Beams):**
        *   Efficient in tension due to their compact cross-section and good distribution of material.
        *   Can be connected through flanges.
        *   **Example:** ISMB 300 (Indian Standard Medium Weight Beam, 300mm depth)
    *   **Tubes (Circular/Square/Rectangular):**
        *   Efficient use of material, uniform stress distribution, and good torsional resistance.
        *   Connections can be made through welding or bolting to specially fabricated end plates.
        *   **Example:** RHS 50x50x5 (Rectangular Hollow Section, 50mm x 50mm sides, 5mm thickness)

*   **Built-up Sections:**
    *   Used when rolled sections are not available in the required size or strength, or to achieve specific stiffness requirements.
    *   **Examples:**
        *   **Two angles back-to-back:** Connected with battens or lacing.
        *   **Two channels back-to-back:** Similar construction to angles.
        *   **Plates:** Wide plates can be used, often connected to gusset plates.
        *   **Box Sections:** Formed by welding four plates together.

---

### 2. Modes of Failure of Tension Members

Tension members can fail in several ways. Understanding these failure modes is crucial for designing safe and efficient members.

*   **Gross Section Yielding:**
    *   **Description:** The entire cross-section of the member yields (undergoes plastic deformation) under tensile load.
    *   **Critical Area:** Gross cross-sectional area ($A_g$).
    *   **Design Strength:** $T_{dg} = A_g \times f_y / \gamma_{m0}$, where $f_y$ is the yield strength of the steel and $\gamma_{m0}$ is the partial safety factor for yielding.
    *   **Important:** This is usually the most desirable failure mode as it involves significant plastic deformation and ductile behavior.

*   **Net Section Fracture:**
    *   **Description:** The net cross-section at the plane of the weakest fastener hole fractures due to localized stress concentrations. This typically occurs in members connected by bolts.
    *   **Critical Area:** Net cross-sectional area ($A_n$) at the critical section.
    *   **Design Strength:** $T_{dn} = 0.9 \times A_n \times f_u / \gamma_{m1}$, where $f_u$ is the ultimate tensile strength of the steel and $\gamma_{m1}$ is the partial safety factor for fracture.
    *   **Important:** This is a brittle failure mode and should be avoided if possible.

*   **Block Shear Failure:**
    *   **Description:** Occurs in connections where a portion of the member is connected at one end and the remaining portion is subjected to shear at the other end. It involves yielding in one plane and fracture in a perpendicular plane.
    *   **Critical Areas:**
        *   Area yielding in shear ($A_{vg}$).
        *   Area fracturing in tension ($A_{tn}$).
    *   **Design Strength:** The design strength is the minimum of two conditions:
        1.  $T_{db1} = (A_{vg} \times f_y / \sqrt{3} \times \gamma_{m0}) + (0.9 \times A_{tn} \times f_u / \gamma_{m1})$
        2.  $T_{db2} = (0.9 \times A_{vg} \times f_u / \sqrt{3} \times \gamma_{m1}) + (A_{tn} \times f_y / \gamma_{m0})$
    *   **Important:** This failure mode is common in plates and angles connected by bolts.

*   **Slenderness Effect (Buckling):**
    *   **Description:** While primarily a concern for compression members, long and lightly loaded tension members can buckle out of their plane if not adequately braced. This is not a direct failure mode of the tension member itself but a consequence of insufficient lateral bracing.
    *   **Critical Parameter:** Slenderness ratio ($L/r$).
    *   **Design Consideration:** Ensure adequate bracing to prevent buckling.

---

### 3. Slenderness Ratio ($L/r$)

The slenderness ratio is a measure of the buckling susceptibility of a structural member.

*   **Definition:** The ratio of the effective length ($L$) of a member to its radius of gyration ($r$) about the axis of buckling.
*   **Formula:** Slenderness Ratio = $L/r$
    *   $L$: Effective length of the member. This depends on the end conditions and the spacing of lateral supports. For axially loaded members without lateral support, $L$ is the unsupported length.
    *   $r$: Radius of gyration about the axis perpendicular to the direction of buckling. For a given section, $r = \sqrt{I/A}$, where $I$ is the moment of inertia and $A$ is the cross-sectional area.
*   **Importance:**
    *   For **compression members**, a higher slenderness ratio leads to lower buckling strength. There are limiting slenderness ratios specified in design codes to prevent buckling failure.
    *   For **tension members**, while not directly limiting the tensile capacity, it's crucial for preventing **lateral torsional buckling** if the member is also subjected to bending or if it's a long, lightly loaded member susceptible to out-of-plane buckling. Design codes provide limiting slenderness ratios for tension members to prevent such instability. For example, IS 800:2007 specifies a limiting slenderness ratio of 350 for tension members supporting loads other than directly from the structure (e.g., sag rods) and 250 for tension members carrying loads from the structure.

---

### 4. Net Area ($A_n$)

The net area is the effective cross-sectional area of a tension member when holes for fasteners are present.

*   **Definition:** The gross cross-sectional area minus the area of the holes for fasteners.
*   **Calculation for a single line of holes:**
    *   $A_n = (B - n \times d_h) \times t$
        *   $B$: Width of the member (e.g., flange width, leg width of an angle).
        *   $n$: Number of holes at the critical section.
        *   $d_h$: Diameter of the hole (nominal diameter of bolt + allowance, typically 2 mm for M12 to M24 bolts).
        *   $t$: Thickness of the member.

*   **Calculation for multiple lines of holes (staggered holes):**
    *   When holes are staggered, the effective net area needs to account for the inclined path connecting the holes.
    *   $A_n = (B - n \times d_h) \times t + \sum \frac{s^2}{4g} \times t$
        *   $s$: Pitch (longitudinal spacing) between successive holes in the line of force.
        *   $g$: Gauge distance (transverse spacing) between the lines of holes.
    *   **Important:** The term $\sum \frac{s^2}{4g} \times t$ accounts for the material in the diagonal path, effectively increasing the net area. The longest chain of holes in any diagonal or zigzag line, commencing with a hole in one end of the piece and terminating with a hole in the other end, is considered. The number of holes ($n$) in this equation refers to the number of holes in the outermost line.

*   **Effective Net Area ($A_{en}$):**
    *   For members connected by bolts, the net area is further reduced by a factor to account for stress concentrations and the fact that not all the area is equally effective.
    *   $A_{en} = k_e \times A_n$
        *   $k_e$: An "efficiency factor" or "reduction factor."
        *   **For plates:** $k_e = 1.0$
        *   **For single or double angles:** $k_e = 0.75$ (when connected by one leg) or $k_e = 0.85$ (when connected by both legs, but usually not as a tension member)
        *   **For channels:** $k_e = 0.75$
        *   **For tubes:** $k_e = 1.0$
        *   **For built-up sections:** $k_e$ depends on the connection and configuration.
    *   **Design Strength due to Net Section Fracture:** $T_{dn} = 0.9 \times A_{en} \times f_u / \gamma_{m1}$

---

### 5. Concepts of Shear Lag

Shear lag is a phenomenon that reduces the effectiveness of the connected leg(s) of an angle or flange of a channel/beam when used as a tension member.

*   **Description:** When a tension member with an unsymmetrical cross-section (like an angle or channel) is connected by fasteners (bolts) to a gusset plate through only a portion of its cross-section (e.g., one leg of an angle or one flange of a channel), the tensile stresses are not uniformly distributed across the entire cross-section. The unconnected portions of the cross-section lag behind in strain development, leading to a non-uniform stress distribution.
*   **Cause:** The connection transmits force to only part of the cross-section. The internal forces have to travel through the connected element to reach the unconnected elements, causing a shear lag effect.
*   **Consequences:**
    *   The average stress on the net section is lower than it would be if the stress were uniformly distributed.
    *   This leads to a reduction in the effective area available for resisting tension.
*   **Quantification:** Shear lag is accounted for by using the effective net area ($A_{en} = k_e \times A_n$), where $k_e$ is the efficiency factor that incorporates the effect of shear lag.
*   **Factors Affecting Shear Lag:**
    *   **Length of the connection:** Longer connections (more bolts) generally result in a greater shear lag effect.
    *   **Cross-sectional shape:** Angles and channels are more susceptible than I-sections or plates.
    *   **Number of connected elements:** A single angle has a greater shear lag effect than two angles connected by battens or lacing.
*   **Reducing Shear Lag:**
    *   Using more bolts to increase the length of the connection.
    *   Connecting both legs of an angle (though this can be impractical for tension members).
    *   Using sections where the centroid is closer to the connection plane (e.g., I-sections).
    *   Using lug angles.

---

### 6. Design of Tension Members

The design of a tension member involves checking its capacity against yielding, fracture, and block shear failure, ensuring it meets the required safety standards.

**Design Steps (following IS 800:2007):**

1.  **Assume a Section and Determine Areas:**
    *   Choose a trial section based on preliminary estimates or experience.
    *   Determine the gross area ($A_g$).
    *   Determine the net area ($A_n$) based on the planned bolt holes.
    *   Determine the effective net area ($A_{en}$) using the appropriate efficiency factor ($k_e$).

2.  **Check for Yielding of Gross Section:**
    *   Calculate the design strength due to yielding: $T_{dg} = A_g \times f_y / \gamma_{m0}$
    *   This capacity must be greater than or equal to the factored applied tensile load ($P_t$).

3.  **Check for Fracture at Net Section:**
    *   Calculate the design strength due to fracture: $T_{dn} = 0.9 \times A_{en} \times f_u / \gamma_{m1}$
    *   This capacity must be greater than or equal to the factored applied tensile load ($P_t$).

4.  **Check for Block Shear Failure:**
    *   Determine the areas involved in block shear failure ($A_{vg}$ and $A_{tn}$).
    *   Calculate the design strength for block shear failure ($T_{db1}$ and $T_{db2}$).
    *   The design strength for block shear failure is the minimum of $T_{db1}$ and $T_{db2}$, which must be greater than or equal to the factored applied tensile load ($P_t$).

5.  **Check for Slenderness Ratio:**
    *   Calculate the radius of gyration ($r$) for the chosen section about the appropriate axis.
    *   Determine the effective length ($L$) based on bracing conditions.
    *   Calculate the slenderness ratio ($L/r$).
    *   Check if the slenderness ratio is within the limits specified by the design code (e.g., 350 or 250 for IS 800:2007).

6.  **Select the Governing Design Strength:**
    *   The design strength of the tension member is the minimum of the strengths calculated from yielding, fracture, and block shear.
    *   This governing design strength must be greater than or equal to the factored applied tensile load.

7.  **Iterate if Necessary:** If the chosen section does not satisfy the design criteria, select a larger or stronger section and repeat the checks.

---

### 7. Connections in Tension Members

Connections are critical components that transmit tensile forces to the member and between members. Common connection types include bolted and welded connections.

*   **Bolted Connections:**
    *   **Types of Bolts:** High-strength bolts (e.g., 8.8 grade) are typically used.
    *   **Connection Details:**
        *   **Single Angle to Gusset Plate:** Connected by bolting one leg to the gusset plate. The outstanding leg contributes to the tensile resistance but suffers from shear lag.
        *   **Double Angle to Gusset Plate:** Two angles are placed back-to-back, connected to the gusset plate. Shear lag is reduced compared to a single angle.
        *   **Plates to Gusset Plate:** Simple and efficient, with less shear lag.
        *   **Channels to Gusset Plate:** Connected through one flange.
    *   **Design Checks for Bolts:**
        *   **Shear Strength of Bolts:** Resistance against shear failure of the bolt shank.
        *   **Bearing Strength of Bolts:** Resistance against crushing of the bolt and the connected plate at the hole.
        *   **Tensile Strength of Bolts:** Resistance against the bolt fracturing in tension (less common for load transfer unless the bolt itself is the tension member).
    *   **Failure Modes at Connection:**
        *   **Shear Failure of Bolts:**
            *   $V_{nsb} = \frac{f_{ub}}{\sqrt{3}} \frac{A_{nb}}{\gamma_{m1}}$ (for threads intercepting shear plane)
            *   $V_{nsb} = \frac{f_{ub}}{\sqrt{3}} \frac{A_{sb}}{\gamma_{m1}}$ (for threads not intercepting shear plane)
            *   $A_{nb}$ = Net tensile stress area of bolt
            *   $A_{sb}$ = Shank area of bolt
        *   **Bearing Strength of Bolts:**
            *   $V_{npb} = 2.4 \times d \times t \times f_u / \gamma_{m1}$
            *   $d$: Nominal diameter of bolt
            *   $t$: Sum of thicknesses of connected plates in direct contact
            *   $f_u$: Ultimate tensile strength of the connected plate (or bolt, whichever is smaller)
    *   **Important:** The design shear strength of a bolt is the minimum of its shear strength and bearing strength. The design tensile strength of a bolt is the minimum of its tensile strength and bearing strength.

*   **Welded Connections:**
    *   **Types of Welds:** Fillet welds and butt welds are common.
    *   **Connection Details:** Welds can be used to connect plates, angles, or other sections. They generally provide a more rigid connection and avoid the shear lag effect associated with staggered bolt holes.
    *   **Design Strength of Fillet Welds:**
        *   The design strength of a fillet weld is based on the shear strength of the throat area.
        *   Design Strength $= \frac{f_u}{\sqrt{3}} \frac{A_w}{\gamma_{mw}}$
            *   $f_u$: Ultimate tensile strength of the weld metal or parent metal (whichever is smaller).
            *   $A_w$: Effective throat area of the weld.
            *   $\gamma_{mw}$: Partial safety factor for welds.
        *   For leg size 's' and length 'l', $A_w = 0.7 \times s \times l$.

---

### 8. Use of Lug Angles

Lug angles are small angles used in connections to improve the efficiency of members, particularly angles, that are connected by only one leg.

*   **Purpose:** To connect the outstanding leg of an angle tension member to the gusset plate, thereby transferring the tensile force more uniformly across the entire cross-section and reducing the effect of shear lag.
*   **How they work:** Lug angles are bolted to the outstanding leg of the main tension member and then to the gusset plate. This provides an alternative path for the force to be transferred to the gusset plate, engaging the full cross-section of the angle.
*   **Advantages:**
    *   Increases the effective area of the tension member.
    *   Reduces the shear lag effect, leading to a higher tensile capacity.
    *   Allows for a more economical design by enabling the use of smaller or lighter main members.
*   **Design Considerations for Lug Angles:**
    *   **Connection to Main Member:** The lug angle should be designed to resist the portion of the load it is intended to carry from the outstanding leg of the main member. It needs sufficient bolts to transfer this load without failing in shear or bearing.
    *   **Connection to Gusset Plate:** The lug angle must have sufficient bolts to transfer its share of the load to the gusset plate.
    *   **Overall Load Distribution:** The total tensile resistance of the connection is the sum of the resistance provided by the direct connection to the gusset plate and the connection through the lug angles.
    *   **Length of Lug Angle:** The connection of lug angles to the gusset plate should extend over the same length as the connection of the main member to the gusset plate to ensure efficient load transfer.
    *   **Number of Bolts:** The number of bolts in the lug angle connection to the main member and the gusset plate should be sufficient to develop the strength of the outstanding leg.

---

## Practice Questions and Exercises

**Question 1:**
A single angle tension member ISA 100x75x8 is connected to a gusset plate by bolting the longer leg. The connection consists of 4 bolts in a line. The diameter of the bolt is 20 mm. Determine the net area of the section.
**(Given: $f_y = 250$ MPa, $f_u = 415$ MPa)**

**Answer:**
*   Longer leg width ($B$) = 100 mm
*   Thickness ($t$) = 8 mm
*   Number of bolts ($n$) = 4
*   Diameter of bolt hole ($d_h$) = $20 + 2 = 22$ mm
*   Net Area ($A_n$) = $(B - n \times d_h) \times t = (100 - 4 \times 22) \times 8 = (100 - 88) \times 8 = 12 \times 8 = 96$ mm$^2$.

**Question 2:**
A tie member consists of two unequal angles ISA 90x60x10 placed back to back on the same side of a gusset plate. The angles are connected to the gusset plate by bolting one leg of each angle. The connection uses 3 bolts in a line. Determine the effective net area of the section.
**(Given: Bolt diameter 20 mm)**

**Answer:**
*   One angle: ISA 90x60x10. Connected leg is the 90 mm leg. Outstanding leg is 60 mm.
*   Gross Area of one angle ($A_g$) = $(90+60-10) \times 10 = 1400$ mm$^2$.
*   Total Gross Area ($A_g$ for two angles) = $2 \times 1400 = 2800$ mm$^2$.
*   Net Area of one angle ($A_n$) = $(90 - 3 \times 22) \times 10 = (90 - 66) \times 10 = 24 \times 10 = 240$ mm$^2$.
*   Total Net Area ($A_n$ for two angles) = $2 \times 240 = 480$ mm$^2$.
*   For angles connected by one leg, the efficiency factor ($k_e$) is 0.75.
*   Effective Net Area ($A_{en}$) = $k_e \times A_n = 0.75 \times 480 = 360$ mm$^2$.

**Question 3:**
A tension member has a gross area ($A_g$) of 2000 mm$^2$ and an effective net area ($A_{en}$) of 1500 mm$^2$. The yield strength of the steel is 250 MPa, and the ultimate tensile strength is 415 MPa. Calculate the design strengths for yielding and net section fracture.
**(Given: $\gamma_{m0} = 1.10$, $\gamma_{m1} = 1.25$)**

**Answer:**
*   **Design Strength for Yielding:**
    *   $T_{dg} = A_g \times f_y / \gamma_{m0} = 2000 \, \text{mm}^2 \times 250 \, \text{MPa} / 1.10 = 500000 \, \text{N} / 1.10 = 454545.45 \, \text{N} = 454.55 \, \text{kN}$.
*   **Design Strength for Net Section Fracture:**
    *   $T_{dn} = 0.9 \times A_{en} \times f_u / \gamma_{m1} = 0.9 \times 1500 \, \text{mm}^2 \times 415 \, \text{MPa} / 1.25 = 550800 \, \text{N} / 1.25 = 440640 \, \text{N} = 440.64 \, \text{kN}$.

---

### Important Points to Remember

*   **Failure Modes:** Always consider yielding of the gross section, fracture of the net section, and block shear failure.
*   **Shear Lag:** Be aware of its impact, especially for angles and channels connected by only one leg. Use the efficiency factor ($k_e$) to account for it.
*   **Net Area Calculation:** Accurately calculate the net area, considering staggered bolt holes.
*   **Bolt Design:** Ensure bolts in connections have adequate shear and bearing strength.
*   **Slenderness Ratio:** Check limiting slenderness ratios to prevent buckling, particularly for long and lightly loaded members.
*   **Lug Angles:** Understand their purpose and design them correctly to improve connection efficiency.
*   **Partial Safety Factors:** Use the correct partial safety factors ($\gamma_{m0}$, $\gamma_{m1}$, $\gamma_{mw}$) as specified in the design codes.
*   **Factor of Safety:** The applied loads must be factored loads, and the design strength must be greater than or equal to these factored loads.
