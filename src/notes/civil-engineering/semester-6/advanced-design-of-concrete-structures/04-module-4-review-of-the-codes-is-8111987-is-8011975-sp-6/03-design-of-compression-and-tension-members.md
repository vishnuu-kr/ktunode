---
title: "Design of compression and Tension members"
subject: "ADVANCED DESIGN OF CONCRETE STRUCTURES"
module: "Module 4: Review of the codes –IS 811(1987), IS 801(1975), SP 6"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8110e1"
status: "completed"
scrapedAt: "2026-05-20T18:51:54.427Z"
---
# ADVANCED DESIGN OF CONCRETE STRUCTURES - Module 4: Review of Codes - IS 811 (1987), IS 801 (1975), SP 6

## Topic: Design of Compression and Tension Members

---

### Learning Outcomes:

*   Understand the relevant provisions of IS 811 (1987), IS 801 (1975), and SP 6 for designing compression members.
*   Understand the relevant provisions of IS 811 (1987), IS 801 (1975), and SP 6 for designing tension members.
*   Apply these codes to the design of compression and tension members in reinforced concrete structures.

---

## 1. Introduction to Relevant Codes and Standards

This module focuses on the design of compression and tension members, primarily using the following Indian Standards (IS) and Special Publications (SP):

*   **IS 811 (1987) - Indian Standard Code of Practice for Use of Steel in Structures:** While primarily for steel structures, certain principles and connection details might be referenced or provide context for the design of steel components within composite concrete structures, particularly for connections. However, for the core design of **steel compression and tension members**, **IS 801 (1975)** is the primary code.

*   **IS 801 (1975) - Indian Standard Code of Practice for Use of Aluminium in Structures (Third Revision):** This code is **mistakenly listed as IS 801 (1975) for steel**. The correct code for the design of **steel compression and tension members** is **IS 800 (various revisions, with IS 800:2007 being the most current and widely used).** It's crucial to note that the prompt specifically mentions IS 801 (1975). **For the purpose of this module based on the prompt, we will assume it refers to IS 800 (latest relevant revision for steel members), and if IS 801 (1975) is strictly intended for a specific context (e.g., older course material), its limitations should be acknowledged.** *However, in modern practice, IS 800:2007 is the governing code for steel structures.*

*   **SP 6 (Various Parts) - Special Publications:** These are often supplementary to the main IS codes and provide additional guidance, design aids, tables, and examples. For steel structures, relevant SPs might include those related to structural steel, connections, or specific structural elements.

**Important Clarification:** The prompt's mention of IS 811 (1987) and IS 801 (1975) in the context of "ADVANCED DESIGN OF CONCRETE STRUCTURES" is unusual. Typically, IS 456 (2000) is the primary code for reinforced concrete structures. The other codes mentioned are for steel structures. This suggests the module might be dealing with **composite structures** or structures where steel elements are significant components within a larger concrete framework, or it could be a review of older standards for historical or comparative purposes.

**For this module, we will primarily focus on the principles of designing steel compression and tension members as guided by IS 800 (assuming IS 801 (1975) is a typo or older reference to steel design).** We will also touch upon potential implications if these were indeed meant for a composite context.

---

## 2. Design of Steel Compression Members (Axially Loaded)

This section will outline the design principles for axially loaded steel compression members based on IS 800 (assuming it's the intended code for steel design).

### 2.1 Key Concepts and Definitions

*   **Compression Member:** A structural element designed to carry primarily axial compressive loads. Examples include columns, struts in trusses, and members of a built-up section.
*   **Buckling:** The phenomenon where a slender structural member under axial compression suddenly bends or collapses laterally when a critical load is reached. This is the primary failure mode for compression members.
*   **Slenderness Ratio ($\lambda$):** The ratio of the effective length of a compression member to its least radius of gyration. It is a critical parameter in determining buckling resistance.
    *   $\lambda = \frac{L_e}{r_{min}}$
    *   $L_e$: Effective length of the member.
    *   $r_{min}$: Least radius of gyration of the cross-section.
*   **Effective Length ($L_e$):** The length of an equivalent pin-ended column that would buckle under the same load as the given member. It depends on the end conditions of the member.
    *   $L_e = k L$, where $k$ is the effective length factor and $L$ is the actual length.
*   **Radius of Gyration ($r$):** A property of a cross-section that indicates how the area is distributed around the centroidal axis. $r = \sqrt{\frac{I}{A}}$, where $I$ is the moment of inertia and $A$ is the cross-sectional area.
*   **Buckling Classes:** IS 800 categorizes cross-sections into buckling classes (A, B, C, D) based on their geometry and the presence of stress-raising features, which affect their buckling resistance.
*   **Design Compressive Stress ($f_{cd}$):** The allowable compressive stress for a member, which is reduced from the yield stress due to the possibility of buckling. This is determined based on the slenderness ratio and buckling class.
*   **Yield Stress ($f_y$):** The stress at which a material begins to deform plastically.

### 2.2 Design Steps (Based on IS 800:2007)

1.  **Select a trial section:** Choose a suitable steel section (e.g., I-section, channel, angle, built-up section) based on the estimated load and preliminary buckling calculations.
2.  **Determine the effective length ($L_e$):**
    *   Identify the actual length ($L$) of the member.
    *   Determine the effective length factor ($k$) based on the end support conditions (e.g., pinned-pinned, fixed-fixed, fixed-pinned, fixed-free). IS 800 provides guidance on $k$ values.
    *   Calculate $L_e = k L$.
3.  **Calculate the slenderness ratio ($\lambda$):**
    *   Determine the least radius of gyration ($r_{min}$) for the chosen section from steel tables or calculations.
    *   Calculate $\lambda = \frac{L_e}{r_{min}}$.
4.  **Determine the buckling class of the section:** Classify the chosen section based on its geometry according to IS 800.
5.  **Find the design compressive stress ($f_{cd}$):**
    *   Using the calculated slenderness ratio ($\lambda$) and the buckling class, determine the buckling reduction factor ($k_c$) from the relevant tables in IS 800.
    *   Calculate $f_{cd} = k_c \frac{f_y}{\gamma_{m0}}$, where $\gamma_{m0}$ is the partial safety factor for yielding (typically 1.1).
    *   *(Note: For higher slenderness ratios or specific cases, IS 800 might use a modified formula involving the Euler buckling stress as well, but the general approach relies on these reduction factors).*
6.  **Calculate the design compressive strength ($P_{cd}$):**
    *   $P_{cd} = A_{net} f_{cd}$, where $A_{net}$ is the net effective area of the section. For axially loaded members without end connections, $A_{net} \approx A_{gross}$. For members with connections, $A_{net}$ is reduced.
7.  **Check for adequacy:**
    *   Compare the design compressive strength ($P_{cd}$) with the applied axial compressive load ($P_u$).
    *   The section is adequate if $P_{cd} \ge P_u$.
8.  **Consider buckling about other axes:** Ensure that the chosen section is also adequate for buckling about other axes if applicable.
9.  **Connection Design:** Design the connections (e.g., with gusset plates) to transfer the load effectively and ensure that the effective length assumptions are valid.

### 2.3 Example (Illustrative - Assuming IS 800)

**Problem:** Design a single angle compression member to carry an axial compressive load of $150$ kN. The effective length of the member is $2.5$ m. The ends are pinned. Use steel of grade Fe 410 ($f_y = 250$ N/mm$^2$).

**Solution:**

1.  **Assume a trial section:** Let's try an unequal angle $75 \times 50 \times 8$ mm.
    *   From steel tables, for $75 \times 50 \times 8$ angle:
        *   Area ($A$) = $1120$ mm$^2$
        *   Least radius of gyration ($r_{min}$) $\approx 13.7$ mm (this needs careful checking from tables, it's usually about the axis parallel to the shorter leg). Let's assume for this example $r_{min} = 13.7$ mm.
        *   Buckling class: Typically Class C for unequal angles.

2.  **Determine effective length ($L_e$):**
    *   Actual length ($L$) = $2.5$ m = $2500$ mm.
    *   End conditions are pinned, so assume $k = 1.0$.
    *   $L_e = k L = 1.0 \times 2500 = 2500$ mm.

3.  **Calculate slenderness ratio ($\lambda$):**
    *   $\lambda = \frac{L_e}{r_{min}} = \frac{2500}{13.7} \approx 182.5$.

4.  **Determine design compressive stress ($f_{cd}$):**
    *   For $\lambda = 182.5$ and buckling class C, refer to IS 800:2007 Table 9.3.1. For $\lambda > 150$, we need to interpolate or use the limiting values. Let's assume for this high slenderness, the buckling reduction factor $k_c$ is very low. (Actual interpolation would be done using the table).
    *   Let's assume, for demonstration, $k_c = 0.15$ (This is a hypothetical value; actual value must be obtained from code tables).
    *   $f_{cd} = k_c \frac{f_y}{\gamma_{m0}} = 0.15 \times \frac{250}{1.1} \approx 34.09$ N/mm$^2$.

5.  **Calculate design compressive strength ($P_{cd}$):**
    *   $P_{cd} = A \times f_{cd} = 1120 \times 34.09 \approx 38180.8$ N $\approx 38.18$ kN.

6.  **Check for adequacy:**
    *   Applied load ($P_u$) = $150$ kN.
    *   $P_{cd} = 38.18$ kN.
    *   Since $P_{cd} < P_u$ ($38.18 < 150$), the section $75 \times 50 \times 8$ is **not adequate**.

7.  **Select a heavier section or a more efficient section/built-up section:** The process would be repeated with a larger or different section until adequacy is achieved. For example, a double angle section back-to-back with a batten plate or tie plate would be considered for such a load.

### 2.4 Important Points to Remember for Compression Members

*   **Buckling is the critical failure mode.** Always check the slenderness ratio and the corresponding design compressive stress.
*   **Effective length factor ($k$) is crucial.** Incorrect estimation of $k$ can lead to unsafe designs.
*   **End conditions** dictate the effective length.
*   **Least radius of gyration ($r_{min}$) determines the buckling resistance.**
*   **Buckling class** affects the reduction factor. Ensure correct classification.
*   **Connections** can influence the effective length and the net area. They must be designed to transmit the force without premature failure.
*   For built-up sections, **lacing or battening** must be designed to prevent local buckling of individual components and to maintain the effective radius of gyration of the composite section.

---

## 3. Design of Steel Tension Members (Axially Loaded)

This section will outline the design principles for axially loaded steel tension members based on IS 800.

### 3.1 Key Concepts and Definitions

*   **Tension Member:** A structural element designed to carry primarily axial tensile loads. Examples include members of trusses, tie rods, and hangers.
*   **Failure Modes in Tension Members:**
    *   **Yielding of Gross Section:** Failure occurs when the stress on the entire cross-section reaches the yield stress.
    *   **Fracture at Net Section:** Failure occurs when the stress at the thinnest cross-section (due to holes for fasteners) reaches the ultimate tensile strength.
    *   **Block Shear Failure:** Failure of a connected leg or member in shear along the transverse plane and in tension along the longitudinal plane.
*   **Gross Section Area ($A_g$):** The total cross-sectional area of the member.
*   **Net Section Area ($A_{net}$):** The effective area of the cross-section after deducting the area of holes for fasteners. For a plate with staggered holes, the net section needs careful calculation.
    *   $A_{net} = A_g - (\text{number of holes}) \times (\text{nominal diameter of hole}) \times (\text{thickness})$
    *   For staggered holes, $A_{net} = A_g - n t + \sum \frac{s^2}{4g t}$ (for critical section).
*   **Nominal Diameter of Hole:** The diameter of the hole, which is usually the bolt diameter plus an allowance for clearance (e.g., 2 mm for M12 to M24 bolts, 3 mm for larger bolts).
*   **Design Tensile Strength ($T_{dn}$):** The maximum tensile load a member can carry, considering the different failure modes.
    *   $T_{dn} = \min(\text{Strength due to yielding}, \text{Strength due to fracture}, \text{Strength due to block shear})$.

### 3.2 Design Steps (Based on IS 800:2007)

1.  **Select a trial section:** Choose a suitable steel section (e.g., angle, channel, rod, plate) based on the estimated load and preliminary net area calculation.
2.  **Calculate the design tensile strength due to yielding of the gross section ($T_{dg}$):**
    *   $T_{dg} = A_g \frac{f_y}{\gamma_{m0}}$
    *   Where $A_g$ is the gross area, $f_y$ is the yield stress, and $\gamma_{m0}$ is the partial safety factor for yielding (typically 1.1).
3.  **Calculate the design tensile strength due to fracture at the net section ($T_{dn}$):**
    *   First, calculate the net effective area ($A_{net}$). This involves considering the holes for fasteners and applying a reduction factor for shear lag ($A_{en}$).
    *   $A_{en} = k_1 A_{net}$
        *   $k_1$ is a factor depending on the type of member and connection. For a single angle connected by one leg, $k_1$ is typically $0.7$. For plates or angles connected by both legs, $k_1 = 1.0$.
    *   $T_{dn} = A_{en} \frac{f_u}{\gamma_{m1}}$
        *   Where $f_u$ is the ultimate tensile strength, and $\gamma_{m1}$ is the partial safety factor for fracture (typically 1.25).
4.  **Calculate the design tensile strength due to block shear failure:**
    *   This needs to be checked for connections where failure can occur by shearing across the ultimate strength on the failure plane and yielding on the ultimate strength on the tension plane.
    *   $T_{db} = \min \left\{ \begin{array}{l} A_{vg} \frac{f_y}{\sqrt{3} \gamma_{m0}} + 0.9 A_{tn} \frac{f_u}{\gamma_{m1}} \\ 0.9 A_{vg} \frac{f_u}{\sqrt{3} \gamma_{m1}} + A_{tn} \frac{f_y}{\gamma_{m0}} \end{array} \right.$
        *   $A_{vg}$: Area of the gross section perpendicular to the direction of the applied force, resisting shear.
        *   $A_{tn}$: Area of the net section perpendicular to the direction of the applied force, resisting tension.
    *   The design tensile strength is the minimum of $T_{dg}$, $T_{dn}$, and $T_{db}$.
5.  **Check for adequacy:**
    *   Compare the applied factored tensile load ($T_u$) with the design tensile strength ($T_{dn}$ or the minimum of the three failure modes).
    *   The section is adequate if $T_{dn} \ge T_u$.

### 3.3 Example (Illustrative - Assuming IS 800)

**Problem:** Design a tension member consisting of a single angle to carry an axial tensile force of $80$ kN. The connection is made by bolting one leg of the angle to a gusset plate. Use steel Fe 410 ($f_y = 250$ N/mm$^2$, $f_u = 410$ N/mm$^2$). The angle is connected using two $16$ mm diameter bolts in a single line.

**Solution:**

1.  **Assume a trial section:** Let's try an unequal angle $65 \times 35 \times 6$ mm.
    *   From steel tables, for $65 \times 35 \times 6$ angle:
        *   Gross Area ($A_g$) = $642$ mm$^2$.
        *   Assume it's connected by the longer leg.

2.  **Calculate design tensile strength due to yielding of the gross section ($T_{dg}$):**
    *   $T_{dg} = A_g \frac{f_y}{\gamma_{m0}} = 642 \times \frac{250}{1.1} = 145909$ N $\approx 145.91$ kN.

3.  **Calculate design tensile strength due to fracture at the net section ($T_{dn}$):**
    *   **Nominal diameter of hole:** For 16 mm bolt, nominal hole diameter = $16 + 2 = 18$ mm.
    *   **Net section area ($A_{net}$):**
        *   Since there are two bolts in a line, and we assume the connection is to the 65 mm leg.
        *   $A_{net} = A_g - 2 \times (\text{hole diameter}) \times (\text{thickness})$
        *   $A_{net} = 642 - 2 \times 18 \times 6 = 642 - 216 = 426$ mm$^2$.
    *   **Net effective area ($A_{en}$):**
        *   Since it's a single angle connected by one leg, the shear lag factor $k_1$ is typically $0.7$.
        *   $A_{en} = k_1 A_{net} = 0.7 \times 426 = 298.2$ mm$^2$.
    *   $T_{dn} = A_{en} \frac{f_u}{\gamma_{m1}} = 298.2 \times \frac{410}{1.25} = 97771.2$ N $\approx 97.77$ kN.

4.  **Calculate design tensile strength due to block shear failure:**
    *   This would involve calculating $A_{vg}$ and $A_{tn}$ based on the gusset plate connection geometry. For a single line of bolts, $A_{vg}$ would be the area along the length perpendicular to the load (e.g., width of the angle leg minus bolt holes, multiplied by thickness), and $A_{tn}$ would be the area along the length parallel to the load (e.g., the other leg's area).
    *   For simplicity in this example, let's assume block shear is not critical for this load and section (this requires detailed calculation as per IS 800 Clause 6.3.3).

5.  **Check for adequacy:**
    *   Applied tensile load ($T_u$) = $80$ kN.
    *   $T_{dg} = 145.91$ kN.
    *   $T_{dn} = 97.77$ kN.
    *   The design tensile strength ($T_{dn}$) is the minimum of these values (assuming block shear is checked and is higher). So, $T_{dn} = 97.77$ kN.
    *   Since $T_{dn} \ge T_u$ ($97.77 \ge 80$), the section $65 \times 35 \times 6$ mm is **adequate** for tensile strength.

6.  **Final Check:** Ensure all connections are designed properly to ensure the net section is achieved.

### 3.4 Important Points to Remember for Tension Members

*   **Failure can occur by yielding, fracture, or block shear.** All three must be checked.
*   **Net effective area ($A_{en}$) is critical for fracture resistance.** Correctly calculate $A_{net}$ and apply the shear lag factor ($k_1$).
*   **Staggered bolt holes** can reduce the effective width and require careful calculation of $A_{net}$.
*   **Block shear failure** is often critical in connections with a limited number of fasteners in the direction of load.
*   The **ultimate tensile strength ($f_u$)** governs the fracture strength, while **yield strength ($f_y$)** governs the yielding strength.
*   Always use the correct partial safety factors ($\gamma_{m0}$, $\gamma_{m1}$).

---

## 4. Context of IS 811 (1987) and IS 801 (1975) in Concrete Structures

As noted earlier, the prompt's reference to these codes within "Advanced Design of Concrete Structures" is unusual.

*   **IS 811 (1987):** Primarily for steel structures. If mentioned in a concrete context, it might relate to:
    *   **Composite Structures:** Where steel beams or columns are encased in or connected to concrete. The design of the steel component would follow IS 811 (or IS 800).
    *   **Connections:** Steel elements connecting to concrete, or steel members used within concrete structures (e.g., precast concrete elements connected by steel plates).
    *   **Older practices:** Could be for historical comparison or understanding older design methodologies.

*   **IS 801 (1975):** If this is indeed IS 801 (1975) for aluminium, its relevance to concrete structures would be extremely limited, perhaps only in very niche applications or as a comparative study. **It is highly probable that this is a typo and IS 800 was intended.** If IS 801 (1975) for steel was intended, it would be an outdated version of steel design codes.

**SP 6:** Special publications often contain design aids, tables, and examples. For steel members, SP 6 Part 1 (for rolled steel sections) and other relevant parts would be used in conjunction with IS 800. If composite structures are involved, SPs related to composite construction would be crucial.

**In the context of "Advanced Design of Concrete Structures," the most likely scenario is that the module covers the design of composite members or structures where steel elements are integrated with concrete.** In such cases, the design of the steel component would still follow IS 800, while the interaction with concrete would be governed by IS 456 and specific codes for composite structures (e.g., relevant parts of IS 11384 series for composite structures).

---

## 5. Practice Questions/Exercises

**Question 1:**
A steel column is to be designed for an effective length of $4$ m. The trial section chosen is an ISMB $300$ with an area of $5679$ mm$^2$ and a least radius of gyration of $29.4$ mm. The ends are effectively held in position and restrained against rotation. Calculate the slenderness ratio and determine the appropriate buckling class. (Assume steel Fe 410).

**Answer:**
1.  **Effective Length Factor ($k$):** For ends effectively held in position and restrained against rotation, IS 800 suggests $k=0.65$ to $0.8$. Let's assume $k=0.7$.
2.  **Effective Length ($L_e$):** $L_e = k L = 0.7 \times 4000$ mm $= 2800$ mm.
3.  **Slenderness Ratio ($\lambda$):** $\lambda = \frac{L_e}{r_{min}} = \frac{2800}{29.4} \approx 95.2$.
4.  **Buckling Class:** IS 800:2007 specifies buckling classes based on section geometry. For I-sections with rolled flange widths up to 150 mm, the most common buckling class is **B**. For wider flanges, it might be Class C. Assuming ISMB 300 falls under **Class B**.

**Question 2:**
A tie bar consists of a flat $50 \times 8$ mm of steel Fe 410. It is connected using two $16$ mm diameter bolts in a single line, with a pitch of $60$ mm and gauge distance of $50$ mm. Calculate the design tensile strength due to yielding of the gross section and due to fracture at the net section.

**Answer:**
Given:
*   Flat width ($b$) = $50$ mm
*   Thickness ($t$) = $8$ mm
*   Steel grade: Fe 410 ($f_y = 250$ N/mm$^2$, $f_u = 410$ N/mm$^2$)
*   Bolt diameter = $16$ mm
*   Number of bolts = $2$

1.  **Design tensile strength due to yielding of the gross section ($T_{dg}$):**
    *   Gross Area ($A_g$) = $b \times t = 50 \times 8 = 400$ mm$^2$.
    *   $T_{dg} = A_g \frac{f_y}{\gamma_{m0}} = 400 \times \frac{250}{1.1} = 90909$ N $\approx 90.91$ kN.

2.  **Design tensile strength due to fracture at the net section ($T_{dn}$):**
    *   Nominal diameter of hole = $16 + 2 = 18$ mm.
    *   Net section area ($A_{net}$) = $A_g - (\text{number of holes}) \times (\text{hole diameter}) \times (\text{thickness})$
    *   $A_{net} = 400 - 2 \times 18 \times 8 = 400 - 288 = 112$ mm$^2$.
    *   **Shear Lag Factor ($k_1$):** For a flat connected by bolting, the shear lag factor $k_1$ depends on the number of fasteners and their arrangement. For a flat with bolts in a line across the width, and assuming the connection is made to the entire width, the net effective area is usually taken as $A_{net}$ itself, meaning $k_1 = 1.0$ if there are sufficient fasteners. However, IS 800:2007 Clause 6.3.3 discusses shear lag for various members. For a plate, it's generally assumed that the net section is effective if connected efficiently. Let's assume $A_{en} = A_{net} = 112$ mm$^2$ for this simplified check.
    *   $T_{dn} = A_{en} \frac{f_u}{\gamma_{m1}} = 112 \times \frac{410}{1.25} = 36864$ N $\approx 36.86$ kN.

**Conclusion:** The design tensile strength is limited by the fracture at the net section, which is $36.86$ kN. This section is not adequate if the applied load is greater than $36.86$ kN. *A thicker or wider flat, or a different section, would be required.*

---

## 6. Summary and Key Takeaways

*   **Compression members fail primarily due to buckling.** The design depends heavily on the slenderness ratio, effective length, and buckling class.
*   **Tension members fail due to yielding, fracture, or block shear.** The net effective area and ultimate tensile strength are critical for fracture resistance.
*   **IS 800 (latest revision) is the primary code for the design of steel structural members in India.** The codes IS 811 and IS 801 mentioned in the prompt are likely for context or specific applications (e.g., composite structures) or are outdated references.
*   **Accurate determination of effective length ($L_e$) for columns and net effective area ($A_{en}$) for tension members is crucial.**
*   **Connection design plays a vital role** in the overall performance of both compression and tension members.

---
