---
title: "Welds-specifications and effective area of welds-Fillet and butt connections-Axially loaded connections for plate and angle truss members- Design of bracket connections."
subject: "DESIGN OF STEEL STRUCTURES"
module: "Module 2: Welds"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8110b5"
status: "completed"
scrapedAt: "2026-05-20T18:52:44.861Z"
---
# DESIGN OF STEEL STRUCTURES - MODULE 2: WELDS

## 2.1 Welds - Specifications and Effective Area of Welds

### 2.1.1 Introduction to Welds

Welding is a permanent joining process that creates a strong and continuous connection between two or more metal parts by melting them and adding a filler material. It's a crucial fabrication technique in steel structures.

### 2.1.2 Types of Welds

The two primary types of welds used in steel structures are:

*   **Fillet Welds:** These are triangular-shaped welds that join two surfaces at an approximate right angle. They are most commonly used in steel structures.
*   **Butt Welds:** These welds join two surfaces that lie in the same plane, with the edges of the parts brought together.

### 2.1.3 Weld Symbols

Understanding weld symbols is essential for clear communication between designers and fabricators. They are used on engineering drawings to indicate the type, size, and location of welds.

*   **Basic Symbol:** A horizontal line representing the weld.
*   **Arrow:** Points to the joint where the weld is to be made.
*   **Reference Line:** The horizontal line.
*   **Tail:** Attached to the reference line, used for specifying welding procedures or other supplementary information.
*   **Other Side Weld:** Indicated by a symbol below the reference line.
*   **Same Side Weld:** Indicated by a symbol above the reference line.
*   **Weld Size:** Indicated on the left of the weld symbol.
*   **Weld Type Symbol:** Placed above or below the reference line.

**Common Weld Type Symbols:**

*   **Fillet Weld:** Triangle (right-angled)
*   **Square Butt Weld:** Square
*   **Groove Weld (V-groove, U-groove, J-groove, etc.):** Respective groove shape symbol
*   **Plug or Slot Weld:** Circle (for plug) or elongated circle (for slot)
*   **Spot Weld:** Circle
*   **Seam Weld:** Circle with parallel lines

**Example:**

```
      <---- 5 ---->
      |           |
     /\          /\
    /  \        /  \
   /____\      /____\  <-- Fillet Weld of size 5mm
      |           |
 -----o-----------o-----  <-- Reference Line
      |           |
     /\          /\
    /  \        /  \
   /____\      /____\  <-- Fillet Weld of size 5mm on other side
```

### 2.1.4 Specifications for Welds (Based on IS 800:2007)

*   **Fillet Welds:**
    *   **Throat Thickness (t_t):** The minimum thickness of the weld metal measured at the root of the weld. For a standard fillet weld, it's the perpendicular distance from the root to the hypotenuse.
    *   **Effective Throat Thickness (t_e):** The minimum thickness of the weld that contributes to the strength of the joint.
    *   **Leg Length (s):** The length of the fillet weld from the root to the toe.
    *   **Relation between leg length and throat thickness:** For equal-leg fillet welds, $t_e = \frac{s}{\sqrt{2}}$. For unequal leg lengths, the throat thickness is the minimum perpendicular distance from the root to the toe.
    *   **Weld Size:** The nominal size of a fillet weld is its effective throat thickness.
    *   **Minimum and Maximum Leg Lengths:** These are specified in the code to ensure proper fusion and prevent lamellar tearing.
        *   *Minimum leg length:* Generally, the leg length should not be less than the thickness of the thinner part being welded.
        *   *Maximum leg length:* For fillet welds in corners formed by perpendicular surfaces, the leg length should not exceed the thickness of the thicker part by more than 3 mm.

*   **Butt Welds:**
    *   **Complete Penetration Butt Welds:** These welds are intended to have full thickness penetration of the weld metal, providing the same strength as the base metal.
    *   **Partial Penetration Butt Welds:** These welds have less than full penetration and are designed based on their effective throat thickness.
    *   **Weld Preparation:** The edges of the parts to be joined need proper preparation (e.g., beveling) to ensure complete penetration and good fusion. The type of preparation depends on the thickness of the material and the type of butt weld.

### 2.1.5 Effective Area of Welds

The effective area of a weld is the product of its effective length and its effective throat thickness. This is the area that is considered for calculating the strength of the weld.

*   **Effective Throat Thickness (t_e):**
    *   **Fillet Welds:** For a fillet weld with legs $s_1$ and $s_2$, the effective throat thickness $t_e$ is taken as $t_e = \frac{(s_1 + s_2)}{2\sqrt{2}}$ when both legs are at least 3mm, and the angle between the fusion faces is between 60 and 120 degrees. For standard fillet welds where $s_1 = s_2 = s$, $t_e = \frac{s}{\sqrt{2}}$.
    *   **Butt Welds:** For complete penetration butt welds, the effective throat thickness is equal to the thickness of the thinner part being joined. For partial penetration butt welds, the effective throat thickness is specified based on the groove geometry and root gap.

*   **Effective Length ($L_w$):**
    *   **Fillet Welds:** The effective length of a fillet weld is the length of the weld that is effective in resisting the applied forces. Generally, it is taken as the actual length of the weld. However, at the ends of a weld, a portion might be less effective. The code specifies that the effective length should not be taken as less than *twice* the weld size.
    *   **Butt Welds:** The effective length of a butt weld is usually taken as the length of the weld required to join the parts.

**Formula for Stress in Welds:**

*   **Fillet Welds:**
    *   Shear Stress: $\tau_{eff} = \frac{F_{eff}}{A_w} = \frac{F_{eff}}{L_w \times t_e}$
    *   When considered as a single unit, the allowable stress is $f_{aw} = \frac{F_{aw}}{\sqrt{3}}$ for fusion (for the weld metal).

*   **Butt Welds (Complete Penetration):**
    *   The strength is considered equal to the strength of the base metal. Stress in butt welds is generally the same as the stress in the connected members.

**Important Considerations for Effective Area:**

*   **Minimum Weld Length:** To ensure proper formation of the weld and avoid stress concentrations, a minimum weld length is often specified, typically not less than 4 times the weld size.
*   **Lap Joints:** In lap joints, the length of the weld should be sufficient to transfer the load. The effective length is generally the length of the weld applied.
*   **End Returns:** In fillet welds, end returns are provided to improve the strength at the ends. The length of the end return is usually 4 times the weld size.

---

## 2.2 Fillet and Butt Connections

### 2.2.1 Fillet Connections

Fillet connections are widely used to join members at an angle, most commonly at 90 degrees.

*   **Applications:** Joining plates to plates, plates to beams, beams to columns, etc.
*   **Advantages:** Versatile, easy to make, can join members at various angles.
*   **Disadvantages:** Less efficient than butt welds in terms of material usage and strength for certain applications, can create stress concentrations.

#### Design of Fillet Welds:

1.  **Determine the Forces:** Identify the forces acting on the connection (shear, tension, bending).
2.  **Determine the Effective Throat Thickness ($t_e$):** Based on the leg length ($s$), $t_e = \frac{s}{\sqrt{2}}$ for equal leg lengths.
3.  **Determine the Effective Length ($L_w$):** The length of the weld required to safely transfer the load.
4.  **Calculate Required Effective Area:** $A_{req} = \frac{F}{f_{aw}}$, where $F$ is the force and $f_{aw}$ is the allowable stress in the weld.
5.  **Determine Required Throat Thickness:** $t_{e, req} = \frac{F}{L_w \times f_{aw}}$
6.  **Determine Required Leg Length:** $s_{req} = t_{e, req} \times \sqrt{2}$
7.  **Check Minimum and Maximum Leg Lengths:** Ensure the chosen leg length satisfies the code requirements.
8.  **Check Weld Strength for Shear and Tension:**
    *   **Shear:** $F_{shear} \le L_w \times t_e \times \frac{f_u}{\sqrt{3} \gamma_{m1}}$ (where $f_u$ is ultimate tensile strength of weld metal, $\gamma_{m1}$ is partial safety factor for weld material).
    *   **Tension (in throat):** $F_{tension} \le L_w \times t_e \times \frac{f_u}{\gamma_{m1}}$ (less common for fillet welds).
    *   **Intermittent Fillet Welds:** Used to reduce weld metal deposition and control distortion. The length of each intermittent weld segment and the pitch (center-to-center distance between segments) are specified. The strength of intermittent fillet welds is calculated based on the total length of weld provided within a given length.

#### Example of Fillet Connection Design:

**Problem:** Design fillet welds to connect a gusset plate (10 mm thick) to the flange of an ISMB 450 beam to transmit a factored shear force of 150 kN. The gusset plate is connected to the flange with fillet welds on both sides. Assume $f_u = 410$ MPa for the weld metal.

**Solution:**

1.  **Factored Shear Force (F):** 150 kN = 150,000 N.
2.  **Allowable Shear Stress in Weld ($f_{aw}$):** For weld metal, $f_{aw} = \frac{f_u}{\sqrt{3} \gamma_{m1}}$. Assuming $\gamma_{m1} = 1.25$ (for fusion), $f_{aw} = \frac{410}{\sqrt{3} \times 1.25} \approx 189.6$ MPa.
3.  **Assume Leg Length (s):** Let's assume a leg length of 6 mm.
4.  **Effective Throat Thickness ($t_e$):** $t_e = \frac{s}{\sqrt{2}} = \frac{6}{\sqrt{2}} \approx 4.24$ mm.
5.  **Effective Area per unit length:** $A_{eff}/L_w = t_e = 4.24 \text{ mm}^2/\text{mm}$.
6.  **Required Effective Length:** The total effective area provided by welds on both sides should be equal to or greater than $F / f_{aw}$.
    *   Total effective length $L_{w, total} = \frac{F}{t_e \times f_{aw}} = \frac{150,000 \text{ N}}{4.24 \text{ mm} \times 189.6 \text{ MPa}} \approx 18.5$ mm.
    *   This is the total required effective length for both sides.

7.  **Distribution of Length:** Let the length of weld on each side be $L_w$.
    *   Total available effective area = $2 \times L_w \times t_e$.
    *   We need $2 \times L_w \times t_e \ge \frac{F}{f_{aw}}$.
    *   $2 \times L_w \times 4.24 \ge \frac{150,000}{189.6} \approx 791.1$ mm$^2$.
    *   $L_w \ge \frac{791.1}{2 \times 4.24} \approx 93.2$ mm.

8.  **Check Minimum Weld Length:** The minimum weld length should be at least 4 times the weld size. $4 \times 6 \text{ mm} = 24 \text{ mm}$. Our calculated length of 93.2 mm is greater than 24 mm.

9.  **Check Maximum Leg Length:** The leg length should not exceed the thickness of the thicker part plus 3 mm. Here, the gusset is 10 mm. So, max leg length $\approx 10 + 3 = 13$ mm. Our assumed 6 mm is well within this limit.

**Conclusion:** Fillet welds of size 6 mm, each of length approximately 94 mm, provided on both sides of the gusset plate to the beam flange, are adequate. Intermittent welding can be used if required.

### 2.2.2 Butt Connections

Butt connections join parts lying in the same plane.

*   **Types of Butt Welds:**
    *   **Square Butt Weld:** For thin plates, edges are square.
    *   **Single V-Groove Weld:** Edges are beveled to form a V-shape.
    *   **Double V-Groove Weld:** Beveling on both sides for thicker plates.
    *   **U-Groove Weld, J-Groove Weld:** For very thick plates, require more precise edge preparation.

*   **Advantages:** High strength, efficient for tensile members, good for fatigue loading when properly executed.
*   **Disadvantages:** Requires precise edge preparation, can be more expensive, quality control is critical.

#### Design of Butt Welds:

*   **Complete Penetration Butt Welds:**
    *   These are designed to have the same strength as the base metal.
    *   The effective throat thickness is taken as the thickness of the thinner part being joined.
    *   The allowable stresses (tension, shear, compression) are the same as those for the base metal.

*   **Partial Penetration Butt Welds:**
    *   Used when full penetration is not necessary or economical.
    *   The design strength is based on the effective throat thickness, which is determined by the geometry of the groove and the root penetration.
    *   The effective throat thickness is often taken as the minimum effective throat thickness specified by the code for a particular groove.

#### Example of Butt Connection Design:

**Problem:** Design a complete penetration butt weld to join two plates of 10 mm thickness, carrying a tensile force of 200 kN. Assume the plates are of grade E250 steel ($f_y = 250$ MPa).

**Solution:**

1.  **Tensile Force (F):** 200 kN = 200,000 N.
2.  **Plate Thickness (t):** 10 mm.
3.  **Base Metal Properties:** $f_y = 250$ MPa.
4.  **Allowable Tensile Stress in Base Metal ($f_{at}$):** $f_{at} = \frac{f_y}{\gamma_{m0}} = \frac{250}{1.1} \approx 227.3$ MPa. (Assuming $\gamma_{m0} = 1.1$ for yielding).
5.  **For Complete Penetration Butt Weld:** The strength is governed by the base metal. The effective throat thickness is the thickness of the thinner plate, which is 10 mm.
6.  **Required Effective Width of Weld ($L_w$):**
    *   The stress in the weld is considered the same as the stress in the plate.
    *   Required Area = $F / f_{at} = 200,000 \text{ N} / 227.3 \text{ MPa} \approx 880 \text{ mm}^2$.
    *   Since the weld is across the width of the plate, the effective width of the weld is the width of the plate. Let's assume the plate width is $B$.
    *   Effective area of weld = $B \times t = B \times 10 \text{ mm}$.
    *   Therefore, $B \times 10 \text{ mm} \ge 880 \text{ mm}^2$, which means $B \ge 88$ mm.

**Conclusion:** A complete penetration butt weld is suitable if the plate width is at least 88 mm. The weld should be made with appropriate edge preparation (e.g., single V-groove or double V-groove depending on the process) to ensure complete penetration.

---

## 2.3 Axially Loaded Connections for Plate and Angle Truss Members

Truss members are typically subjected to axial forces (tension or compression). The connections are designed to transfer these axial forces between members.

### 2.3.1 Plate Truss Members

In plate trusses, members are often formed by plates or angles connected by gusset plates.

*   **Connections using Gusset Plates:**
    *   A gusset plate is a steel plate used to join members of a truss.
    *   The members (plates or angles) are welded or bolted to the gusset plate.
    *   The gusset plate is then welded or bolted to another member or structure.

#### Design Considerations for Plate Truss Connections:

1.  **Force Transfer:** The axial force in the truss member must be transferred to the gusset plate.
2.  **Weld/Bolt Capacity:** The welds or bolts connecting the member to the gusset plate must have sufficient strength to carry the axial force.
3.  **Gusset Plate Design:** The gusset plate itself must be adequately designed to distribute the forces and resist stresses.
4.  **Weld/Bolt Capacity at Gusset Plate:** The welds or bolts connecting the gusset plate to the next member or structure must also be sufficient.
5.  **Stress Concentrations:** Avoid sharp corners and sudden changes in cross-section in the gusset plate and connections.
6.  **Battens/Lacing:** For built-up members, battens or lacing are used to connect the individual plates or angles.

#### Example: Connecting a Plate Member to a Gusset Plate

**Problem:** A flat plate member (10 mm thick) is to be connected to a gusset plate to transmit an axial tensile force of 250 kN. Design fillet welds to connect the plate member to the gusset plate. Assume weld metal of grade E415 and ultimate tensile strength $f_u = 415$ MPa.

**Solution:**

1.  **Factored Tensile Force (F):** 250 kN = 250,000 N.
2.  **Allowable Shear Stress in Weld ($f_{aw}$):** $f_{aw} = \frac{f_u}{\sqrt{3} \gamma_{m1}} = \frac{415}{\sqrt{3} \times 1.25} \approx 192.4$ MPa.
3.  **Assume Leg Length (s):** Let's assume a leg length of 8 mm.
4.  **Effective Throat Thickness ($t_e$):** $t_e = \frac{s}{\sqrt{2}} = \frac{8}{\sqrt{2}} \approx 5.66$ mm.
5.  **Required Effective Length of Weld:** The entire force is transferred through shear in the fillet weld.
    *   $L_{w, req} = \frac{F}{t_e \times f_{aw}} = \frac{250,000 \text{ N}}{5.66 \text{ mm} \times 192.4 \text{ MPa}} \approx 227.6$ mm.

6.  **Distribution of Weld:** This length can be provided along the edges of the plate member. If the plate is, say, 150 mm wide, we can provide welds along both longer edges.
    *   Length of weld on each side = $150 \text{ mm}$.
    *   Total effective length provided = $2 \times 150 \text{ mm} = 300 \text{ mm}$.

7.  **Check Minimum Weld Length:** Minimum weld length = $4 \times s = 4 \times 8 \text{ mm} = 32 \text{ mm}$. Our provision of 150 mm on each side is adequate.

**Conclusion:** Fillet welds of size 8 mm, each of length 150 mm, provided along the two longer edges of the 10 mm thick plate member, are sufficient to transmit a tensile force of 250 kN to the gusset plate.

### 2.3.2 Angle Truss Members

Angle members are very common in truss construction, especially for lighter loads. They can be connected using single angles or pairs of angles (back-to-back).

*   **Single Angle Connections:**
    *   A single angle is connected to a gusset plate or a structural member using its outstanding leg.
    *   **Important Consideration:** When a single angle is in tension and connected to only one side of a gusset plate, the connection is considered *eccentric*. This eccentricity can cause bending in the member and stress redistribution. The effective area of the connected leg is reduced to account for this eccentricity.
    *   **Effective Area:** $A_{eff} = A_g + k A_{nn}$, where $A_g$ is the gross area of the angle, $A_{nn}$ is the net area of the outstanding leg, and $k$ is a factor depending on the slenderness of the outstanding leg. IS 800 provides values for $k$.
    *   **Strength of Single Angle in Tension:** $T_{dn} = A_{eff} \times f_y / \gamma_{m0}$ (for yielding) and $T_{dn} = 0.9 A_{nn} \times f_u / \gamma_{m1}$ (for rupture).

*   **Double Angle Connections:**
    *   Angles connected back-to-back on opposite sides of a gusset plate.
    *   These connections are generally more efficient and less eccentric than single angle connections.
    *   When connected back-to-back with stitch bolts or continuous welds, they can be considered as a symmetric section.
    *   **Effective Area:** For a pair of angles connected by stitch bolts or continuous welds, the full net area is generally considered for tensile strength.

#### Design of Angle Truss Members:

1.  **Determine Axial Force:** Tensile or compressive force in the angle member.
2.  **Select Angle Section:** Choose an angle section based on preliminary strength and slenderness requirements.
3.  **Connection Type:** Decide between single angle or double angle connection.
4.  **Design Welds/Bolts:**
    *   **For Single Angles (Tension):**
        *   Calculate the required effective area.
        *   Determine the number and size of welds (or bolts) needed to develop the required effective area.
        *   Ensure adequate length of weld and proper placement to minimize eccentricity.
    *   **For Double Angles:**
        *   Calculate the required net area.
        *   Design welds (or bolts) to connect the angles to the gusset plate.
        *   If stitch bolts are used, ensure they are placed correctly to maintain the integrity of the pair.
5.  **Check Strength:** Verify the design against yielding, rupture, and block shear (for bolted connections).

#### Example: Connecting a Single Angle to a Gusset Plate

**Problem:** A single angle ISA 75x50x6 mm is used as a tension member in a truss, carrying a factored tensile force of 120 kN. It is connected to a gusset plate by welding. Design the fillet welds at the connection. Assume weld metal $f_u = 415$ MPa. The angle is connected by welding the longer leg (75 mm leg) to the gusset plate.

**Solution:**

1.  **Factored Tensile Force (F):** 120 kN = 120,000 N.
2.  **Angle Properties (ISA 75x50x6):**
    *   Longer leg (connected leg) = 75 mm.
    *   Shorter leg (outstanding leg) = 50 mm.
    *   Thickness (t) = 6 mm.
    *   Area of angle ($A_g$) = 7.28 cm$^2$ = 728 mm$^2$ (from steel tables).
3.  **Tensile Strength Calculation (IS 800):**
    *   **Yielding:** $T_{dn} = A_g \times f_y / \gamma_{m0} = 728 \times 250 / 1.1 = 165,454$ N = 165.5 kN. This is adequate.
    *   **Rupture:** We need the net area of the outstanding leg. $A_{nn}$ for the outstanding leg = (Outstanding leg length - bolt/weld thickness) $\times$ thickness. Since it's a weld, we consider the full outstanding leg dimension for effective area calculation.
        *   Effective Area $A_{eff} = A_g + k A_{nn}$. IS 800 gives $k$ as a function of $l_w/w$, where $l_w$ is weld length and $w$ is width of outstanding leg. For a single line of welds on the outstanding leg, $k$ can be assumed as 0.75 for the outstanding leg of length 50 mm.
        *   For rupture, we consider the net area of the outstanding leg. $A_{nn} = (50 - \text{weld size}/2) \times 6$. Assuming weld size 5 mm, $A_{nn} = (50 - 2.5) \times 6 = 47.5 \times 6 = 285 \text{ mm}^2$.
        *   This is a bit simplified for welds. The code often specifies reduction factors for the gross area or the connection is designed to develop the yield strength. Let's design based on yielding and ensure sufficient weld to develop it.

4.  **Designing Welds to Develop Yield Strength:**
    *   Assume we need to develop the yield strength of the angle, $T_{dn} = 165.5$ kN.
    *   Allowable shear stress in weld ($f_{aw}$): $f_{aw} = \frac{f_u}{\sqrt{3} \gamma_{m1}} = \frac{415}{\sqrt{3} \times 1.25} \approx 192.4$ MPa.
    *   Let's assume a weld leg size of 5 mm.
    *   Effective throat thickness ($t_e$) = $s/\sqrt{2} = 5/\sqrt{2} \approx 3.54$ mm.
    *   Required effective length of weld ($L_{w, req}$) = $F / (t_e \times f_{aw}) = 120,000 \text{ N} / (3.54 \text{ mm} \times 192.4 \text{ MPa}) \approx 176.5$ mm.

5.  **Placement of Welds:** The weld can be placed along the length of the connected leg.
    *   The connected leg is 75 mm. The weld can be placed along this 75 mm length.
    *   If we place weld along the entire 75 mm length of the connected leg, we can also place weld on the outstanding leg (50 mm) for better balance and strength.
    *   **Option 1:** Weld along the entire connected leg (75 mm) and outstanding leg (50 mm). Total length = 75 + 50 = 125 mm.
        *   Available effective length = 125 mm.
        *   Actual force transferable = $125 \text{ mm} \times 3.54 \text{ mm} \times 192.4 \text{ MPa} \approx 85.5$ kN. This is not enough.

    *   **Option 2:** We need a total effective length of 176.5 mm. We can distribute this along the edges.
        *   Provide fillet weld of size 5 mm along the full length of the connected leg (75 mm).
        *   Provide fillet weld of size 5 mm along the outstanding leg. The required length on the outstanding leg would be $176.5 - (75 \times \sqrt{2} \times \text{effective ratio for connected leg})$. This is getting complicated.

    *   **Simpler Approach for Angle Connections:** Often, the weld is provided along the length of the angle member and the code checks are based on the effective area. Let's try to provide weld along the connected leg and outstanding leg.
        *   Weld along connected leg (75 mm) and outstanding leg (50 mm). Total length = 125 mm.
        *   Let's try weld size of 6 mm. $t_e = 6/\sqrt{2} \approx 4.24$ mm.
        *   Total effective length required is $120,000 / (4.24 \times 192.4) \approx 147$ mm.
        *   If we provide welds along the full 75 mm of the connected leg and full 50 mm of the outstanding leg, total length is 125 mm. This is slightly less than required. We can increase the weld size or length.
        *   Let's increase the length of weld on the outstanding leg to be around 75 mm. Total length = 75 mm (connected leg) + 75 mm (outstanding leg) = 150 mm.
        *   Force transferable = $150 \text{ mm} \times 4.24 \text{ mm} \times 192.4 \text{ MPa} \approx 122.2$ kN. This is adequate.

    *   **Check Minimum Weld Length:** $4 \times s = 4 \times 6 \text{ mm} = 24 \text{ mm}$. Our welds of 75 mm are adequate.

**Conclusion:** Fillet welds of size 6 mm should be provided. A weld of 75 mm length along the connected (75 mm) leg and a weld of 75 mm length along the outstanding (50 mm) leg are required. This can be achieved by welding along the full length of the connected leg and then extending the weld along the outstanding leg by 75 mm.

---

## 2.4 Design of Bracket Connections

Bracket connections are used to transfer eccentric loads from a bracket plate to a column or beam. They often involve a combination of shear and bending.

### 2.4.1 Introduction to Bracket Connections

*   **Purpose:** To connect an offset load to a main structural member.
*   **Components:**
    *   **Bracket Plate:** A plate attached eccentrically to the main member.
    *   **Connecting Welds/Bolts:** To attach the bracket plate to the main member.
    *   **Main Member:** Column or beam.
*   **Load Transfer:** The load applied to the bracket plate is transferred to the main member through the welds or bolts, creating shear and bending stresses.

### 2.4.2 Types of Bracket Connections

*   **Welded Bracket Connections:** The bracket plate is welded to the column/beam.
*   **Bolted Bracket Connections:** The bracket plate is bolted to the column/beam.

### 2.4.3 Analysis of Bracket Connections

The load on the bracket creates shear force and bending moment at the connection to the main member.

*   **Shear Force:** The direct vertical shear force from the bracket load.
*   **Bending Moment:** Due to the eccentricity of the load with respect to the connection.

Consider a bracket plate welded to a column flange, carrying a vertical load $P$ at an eccentricity $e$ from the column face.

*   **Shear Force at the connection ($V$):** $V = P$.
*   **Bending Moment at the connection ($M$):** $M = P \times e$.

These forces are resisted by the welds along the column face.

### 2.4.4 Design of Welded Bracket Connections

Let's consider a bracket plate welded to a column flange. The welds are typically fillet welds along the edges of the bracket.

*   **Assumptions:**
    *   The welds are considered as a continuous beam of length equal to the width of the bracket ($b$).
    *   The welds are subjected to shear and bending.
    *   The critical stress in the weld is often at the extreme fiber due to combined shear and bending.

*   **Design Steps:**
    1.  **Determine Loads:** Calculate the shear force ($V$) and bending moment ($M$) at the connection.
    2.  **Assume Weld Arrangement:** Typically fillet welds are provided along the vertical edges of the bracket plate and potentially along the top edge.
    3.  **Calculate Required Weld Size:**
        *   **Shear Stress:** $\tau_v = V / A_w$, where $A_w$ is the total effective area of the welds.
        *   **Bending Stress:** $\sigma_b = M / Z_w$, where $Z_w$ is the section modulus of the welds.
        *   The resultant stress needs to be checked against the allowable stress for the weld material.
        *   A simplified approach often used is to determine the resultant force on the critical weld element.

    *   **Simplified Method (IS 800 Approach):**
        *   Consider the resultant force on the weld. The vertical shear force $V$ is distributed over the length of the welds.
        *   The bending moment $M$ creates tensile and compressive forces in the welds. These forces are proportional to their distance from the centroid of the weld group.
        *   Calculate the forces on critical weld elements (usually at the top and bottom edges).
        *   **Force per unit length due to shear:** $f_s = V / L_{total}$, where $L_{total}$ is the total length of the welds.
        *   **Force per unit length due to bending:** $f_b = M \times y / I_{weld}$, where $y$ is the distance from the centroid of the weld group, and $I_{weld}$ is the moment of inertia of the weld group about the axis of bending.
        *   **Resultant Force:** The resultant force per unit length at any point is $F_{res} = \sqrt{f_s^2 + f_b^2}$.
        *   This resultant force is resisted by the effective throat thickness of the weld.
        *   The ultimate shear strength of the throat area is $f_{aw} = f_u / (\sqrt{3} \gamma_{m1})$.
        *   So, the required effective throat thickness for a weld of length $dl$ is $t_{e,req} = F_{res} \times dl / f_{aw}$.

    *   **Design Procedure:**
        *   Assume a bracket plate thickness and a weld leg size ($s$). Calculate $t_e = s/\sqrt{2}$.
        *   Assume the geometry of the welds (e.g., welds on both vertical sides).
        *   Calculate $I_{weld}$ and the location of the centroid for the assumed weld geometry.
        *   Iterate by assuming a weld leg size ($s$) and check if the resultant stress is within the allowable limits.

#### Example of Bracket Connection Design:

**Problem:** Design the fillet welds to connect a steel bracket plate (12 mm thick) to a column flange to transmit a factored vertical load of 150 kN at an eccentricity of 200 mm from the column face. The bracket plate is 250 mm wide. Use weld metal with $f_u = 415$ MPa.

**Solution:**

1.  **Factored Load (P):** 150 kN = 150,000 N.
2.  **Eccentricity (e):** 200 mm.
3.  **Bracket Width (b):** 250 mm.
4.  **Shear Force (V):** $V = 150,000$ N.
5.  **Bending Moment (M):** $M = P \times e = 150,000 \text{ N} \times 200 \text{ mm} = 30 \times 10^6$ N-mm.
6.  **Allowable Shear Stress in Weld ($f_{aw}$):** $f_{aw} = \frac{f_u}{\sqrt{3} \gamma_{m1}} = \frac{415}{\sqrt{3} \times 1.25} \approx 192.4$ MPa.

7.  **Assume Weld Arrangement:** Provide fillet welds along the two vertical edges of the bracket plate. Let the height of the bracket plate on the column face be $h$. Assume $h = 250$ mm (same as bracket width for simplicity in this example).
    *   Total length of weld ($L_{total}$) = $2 \times h = 2 \times 250 = 500$ mm.
    *   Assume weld leg size $s = 8$ mm.
    *   Effective throat thickness ($t_e$) = $s/\sqrt{2} = 8/\sqrt{2} \approx 5.66$ mm.

8.  **Calculate Stresses:**
    *   **Shear Stress on Weld:** $\tau_v = V / (L_{total} \times t_e) = 150,000 \text{ N} / (500 \text{ mm} \times 5.66 \text{ mm}) \approx 53.0$ MPa.

    *   **Bending Stress on Weld:** The welds are at a distance $y_{max} = h/2 = 250/2 = 125$ mm from the centroid.
        *   Moment of inertia of the weld group about the centroidal axis (parallel to the bending axis): $I_{weld} = 2 \times (t_e \times b^2/12) + 2 \times (t_e \times b \times (h/2)^2)$ - This formula is for welds on both sides. A more accurate approach for fillet welds treated as a beam section: $I_{weld} = 2 \times \frac{t_e \times h^3}{12} + 2 \times (\text{area of weld} \times (\text{distance to CG})^2)$.
        *   A simpler way for two vertical welds: $I_{weld} = 2 \times \frac{t_e \times h^3}{12}$. This assumes the welds are parallel to the column face. Let's consider the critical stresses at the edges.
        *   Consider the welds as being at the extreme fibers of a "beam". The moment of inertia of the weld group about the centroidal axis is $I_{weld} = 2 \times \frac{t_e \times h^3}{12}$ if $t_e$ is the "width" and $h$ is the "depth". This is not accurate for fillet welds.
        *   **Correct approach for fillet welds acting as a beam:** The section modulus of a fillet weld group is usually calculated based on the stress distribution. For two fillet welds of length $h$ at a distance $b$ apart, the moment of inertia about the centroidal axis is $I_{weld} = 2 \times \frac{t_e \times h^3}{12} + 2 \times (t_e \times h) \times (\frac{b}{2})^2$. This is for welds parallel to the bending axis.
        *   In our case, the welds are vertical and parallel to the column face. The load causes bending about the horizontal axis. The welds are at a distance $h/2$ from the centroid.
        *   Let's consider the resultant force on the critical weld elements at the top and bottom.
        *   **Force per unit length due to shear:** $f_s = V / L_{total} = 150,000 \text{ N} / 500 \text{ mm} = 300$ N/mm.
        *   **Force per unit length due to bending:** Consider the critical point at the top or bottom of the weld. Let $y_{max} = h/2 = 125$ mm.
        *   The section modulus of the weld group about the horizontal axis passing through the centroid: $Z_{weld} = 2 \times \frac{I_{weld}}{y_{max}} = 2 \times \frac{[2 \times t_e \times h^3 / 12 + 2 \times t_e \times h \times (b/2)^2]}{h/2}$.
        *   $I_{weld} = 2 \times \frac{8 \times 250^3}{12} + 2 \times (8 \times 250) \times (\frac{250}{2})^2 = 2 \times 260,416,667 + 2 \times 2000 \times 15625 = 5.21 \times 10^8 + 6.25 \times 10^7 = 5.83 \times 10^8 \text{ mm}^4$.
        *   $Z_{weld} = \frac{I_{weld}}{y_{max}} = \frac{5.83 \times 10^8}{125} = 4.664 \times 10^6 \text{ mm}^3$.
        *   **Bending stress at critical point:** $\sigma_b = M / Z_{weld} = (30 \times 10^6 \text{ N-mm}) / (4.664 \times 10^6 \text{ mm}^3) \approx 6.43$ N/mm$^2$ = 6.43 MPa.

9.  **Check Combined Stress:** The resultant stress is not simply the sum. We need to check the resultant force on the weld element.
    *   **Force per unit length at the critical edge due to shear:** $f_s = 300$ N/mm.
    *   **Force per unit length at the critical edge due to bending:** $f_b = \sigma_b \times t_e = 6.43 \text{ MPa} \times 5.66 \text{ mm} \approx 36.4$ N/mm.
    *   **Resultant force per unit length:** $F_{res} = \sqrt{f_s^2 + f_b^2} = \sqrt{300^2 + 36.4^2} = \sqrt{90000 + 1325} \approx \sqrt{91325} \approx 302.2$ N/mm.

10. **Check Weld Capacity:** The weld capacity per unit length is $t_e \times f_{aw} = 5.66 \text{ mm} \times 192.4 \text{ MPa} \approx 1089.4$ N/mm.

11. **Comparison:** The required resultant force per unit length (302.2 N/mm) is less than the capacity per unit length (1089.4 N/mm).

**Conclusion:** Fillet welds of size 8 mm along the two vertical edges of the bracket plate (each 250 mm long) are adequate for this bracket connection. We should also consider providing a small fillet weld at the top edge to prevent rotation, but for strength, the vertical welds are critical. Also, check the strength of the bracket plate itself.

---

## Key Points to Remember

*   **Fillet Welds:** Triangles, strength based on throat thickness.
*   **Butt Welds:** Edges joined in the same plane, complete penetration welds match base metal strength.
*   **Effective Throat Thickness ($t_e$):** Crucial for calculating weld strength. For fillet welds, $t_e = s/\sqrt{2}$ (equal legs).
*   **Effective Length ($L_w$):** Minimum length of weld to ensure effectiveness.
*   **Weld Strength:** Governed by the shear strength of the throat area.
*   **Single Angle Connections:** Eccentricity is a major consideration, affecting effective area.
*   **Bracket Connections:** Involve combined shear and bending, leading to resultant stresses in the welds.
*   **Weld Symbols:** Essential for clear communication on drawings.
*   **Code Provisions:** Always refer to the relevant design codes (e.g., IS 800:2007) for specific specifications, limitations, and design procedures.

---

## Practice Questions

1.  A fillet weld with leg lengths of 6 mm and 8 mm is used to connect two plates. Calculate its effective throat thickness.
    *   **Answer:** $t_e = (6+8)/(2\sqrt{2}) = 14/(2\sqrt{2}) \approx 4.95$ mm.

2.  Design fillet welds to connect a gusset plate (8 mm thick) to the flange of a column to transfer a factored shear force of 100 kN. The gusset plate is welded on both sides. Assume $f_u = 410$ MPa for weld metal.
    *   **Answer:** Allowable shear stress $f_{aw} \approx 189.6$ MPa. Assume $s=5$ mm, $t_e \approx 3.54$ mm. Required total effective length = $100,000 / (3.54 \times 189.6) \approx 148.5$ mm. Provide fillet welds of size 5 mm, each of length approximately 75 mm on both sides. Minimum weld length $4 \times 5 = 20$ mm.

3.  A single angle ISA 90x55x8 mm is used as a tension member in a truss, carrying a factored tensile force of 180 kN. It is connected to a gusset plate by welding the longer leg. Design the fillet welds. Assume $f_u = 415$ MPa.
    *   **Answer:** Angle properties: longer leg 90 mm, shorter leg 55 mm, thickness 8 mm. Area $A_g = 11.0$ cm$^2 = 1100$ mm$^2$. Yield strength $T_{dn} = 1100 \times 250 / 1.1 = 250$ kN (adequate). For rupture, the effective area needs to be checked. To develop the yield strength, let's assume $s=6$ mm, $t_e \approx 4.24$ mm, $f_{aw} \approx 192.4$ MPa. Required effective length $= 180,000 / (4.24 \times 192.4) \approx 221$ mm. Provide fillet welds of size 6 mm along the full 90 mm of the connected leg and along approximately 131 mm of the outstanding leg (or distribute along the length). Minimum weld length $4 \times 6 = 24$ mm.

4.  A bracket plate 10 mm thick and 200 mm wide is welded to a column. It carries a factored load of 80 kN at an eccentricity of 150 mm. Design fillet welds to connect the bracket plate to the column. Assume bracket height on column is 200 mm and $f_u = 415$ MPa.
    *   **Answer:** $V = 80$ kN, $M = 80 \times 150 = 12000$ kN-mm $= 12 \times 10^6$ N-mm. $L_{total} = 2 \times 200 = 400$ mm. $f_{aw} \approx 192.4$ MPa. Assume $s=6$ mm, $t_e \approx 4.24$ mm.
        *   Shear stress on weld $= 80,000 / (400 \times 4.24) \approx 47.2$ MPa.
        *   $I_{weld} = 2 \times (4.24 \times 200^3 / 12) + 2 \times (4.24 \times 200) \times (200/2)^2 = 5.65 \times 10^7 + 3.39 \times 10^7 = 9.04 \times 10^7$ mm$^4$.
        *   $y_{max} = 200/2 = 100$ mm. $Z_{weld} = I_{weld} / y_{max} = 9.04 \times 10^7 / 100 = 9.04 \times 10^5$ mm$^3$.
        *   Bending stress $\sigma_b = M / Z_{weld} = (12 \times 10^6) / (9.04 \times 10^5) \approx 13.3$ MPa.
        *   Force per unit length due to shear $= 80,000 / 400 = 200$ N/mm.
        *   Force per unit length due to bending $= \sigma_b \times t_e = 13.3 \times 4.24 \approx 56.4$ N/mm.
        *   Resultant force $F_{res} = \sqrt{200^2 + 56.4^2} \approx 208.2$ N/mm.
        *   Weld capacity per unit length $= t_e \times f_{aw} = 4.24 \times 192.4 \approx 816.2$ N/mm.
        *   Capacity (816.2 N/mm) > Required (208.2 N/mm). Fillet welds of size 6 mm are adequate.
