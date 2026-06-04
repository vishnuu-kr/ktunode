---
title: "Sheet metal operations- Press tool operations- Shearing, Tension, Compression, Tension and compression operations, applications, numerical problems."
subject: "MANUFACTURING PROCESSES"
module: "Module 3: Metal Forming: Plastic deformation and yield criteria − hot and cold working processes"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d5b"
status: "completed"
scrapedAt: "2026-05-20T17:50:13.762Z"
---
# MANUFACTURING PROCESSES - Module 3: Metal Forming

## Topic: Sheet Metal Operations - Press Tool Operations

This module focuses on understanding the plastic deformation of metals and the principles behind various metal forming processes. We will delve into hot and cold working, with a specific emphasis on sheet metal operations performed using press tools.

### Learning Outcomes:

*   Understand the fundamental principles of plastic deformation and yield criteria in metal forming.
*   Differentiate between hot and cold working processes.
*   Explain the mechanics and applications of various sheet metal operations, including shearing, tension, compression, and combined tension-compression.
*   Analyze the role of press tools in these operations.
*   Solve numerical problems related to forming loads and material behavior in sheet metal operations.

---

### 1. Plastic Deformation and Yield Criteria

**1.1. Introduction to Plastic Deformation:**

*   **Elastic Deformation:** Reversible deformation where a material returns to its original shape upon removal of the applied load. Stress is proportional to strain (Hooke's Law).
*   **Plastic Deformation:** Permanent deformation that occurs when the applied stress exceeds the material's yield strength. The material does not return to its original shape. This is the basis of metal forming.
*   **Yield Strength ($\sigma_y$):** The stress at which a material begins to deform plastically.

**1.2. Yield Criteria:**

*   **Purpose:** To predict when plastic deformation will occur under complex stress states (e.g., multi-axial stress).
*   **Tresca Yield Criterion (Maximum Shear Stress Criterion):**
    *   States that yielding occurs when the maximum shear stress in the material reaches the shear yield strength of the material.
    *   $\tau_{max} = \frac{\sigma_1 - \sigma_3}{2} \le \tau_y$
    *   Where $\sigma_1$ is the maximum principal stress, $\sigma_3$ is the minimum principal stress, and $\tau_y$ is the shear yield strength.
    *   For ductile materials, $\tau_y \approx \sigma_y / 2$, so $\sigma_1 - \sigma_3 \le \sigma_y$.
    *   **Important Note:** Tresca is generally more conservative and predicts yielding at lower stress levels.
*   **Von Mises Yield Criterion (Distortion Energy Criterion):**
    *   States that yielding occurs when the distortion energy per unit volume reaches a critical value.
    *   $\sqrt{\frac{1}{2}[(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2]} \le \sigma_y$
    *   Where $\sigma_1, \sigma_2, \sigma_3$ are the principal stresses.
    *   **Important Note:** Von Mises is generally more accurate for ductile metals and is widely used in engineering.
*   **Mises-Henky Yield Condition:** A common formulation for Von Mises, often expressed in terms of stress invariants.

**Key Concept:** Yield criteria are essential for predicting the onset of plastic deformation, which is fundamental to all metal forming processes.

---

### 2. Hot Working vs. Cold Working

**2.1. Hot Working:**

*   **Definition:** Metal forming operations performed at temperatures above the recrystallization temperature of the material.
*   **Advantages:**
    *   Lower forces required for deformation.
    *   Greater ductility, allowing for larger deformations.
    *   Eliminates defects like porosity and internal stresses.
    *   Improved grain structure and mechanical properties (e.g., toughness).
    *   Can refine grain structure.
*   **Disadvantages:**
    *   Poor surface finish due to oxidation and scaling.
    *   Lower dimensional accuracy due to thermal contraction.
    *   Requires heating, which consumes energy.
    *   May lead to grain coarsening if not controlled properly.
*   **Examples:** Hot rolling, hot forging, hot extrusion, hot spinning.
*   **Recrystallization Temperature:** The temperature above which new, strain-free grains nucleate and grow during deformation, effectively softening the material and eliminating work hardening. This temperature varies with the material and prior cold work.

**2.2. Cold Working:**

*   **Definition:** Metal forming operations performed at temperatures below the recrystallization temperature (usually at or near room temperature).
*   **Advantages:**
    *   Excellent surface finish.
    *   High dimensional accuracy.
    *   Increased strength and hardness due to work hardening.
    *   No need for heating.
*   **Disadvantages:**
    *   Higher forces required for deformation.
    *   Limited amount of deformation before annealing is required to prevent fracture.
    *   Induces residual stresses.
    *   Reduced ductility.
*   **Work Hardening (Strain Hardening):** The strengthening of a metal by plastic deformation. This is caused by the tangling of dislocations, which impedes their movement.
*   **Examples:** Cold rolling, cold forging, wire drawing, stamping, shearing, bending.

**Key Concept:** The choice between hot and cold working depends on the desired properties, the amount of deformation, and economic considerations.

---

### 3. Sheet Metal Operations - Press Tool Operations

Sheet metal operations are typically cold working processes performed on thin sheets of metal using stamping presses and specialized tooling called **press tools** (or dies). These operations involve separating, forming, or shaping the sheet metal.

**3.1. Press Tool Fundamentals:**

*   **Press Machine:** Provides the power and motion to operate the press tool.
*   **Press Tool (Die):** A custom-made tool set consisting of a punch and a die that performs the desired operation on the sheet metal.
    *   **Punch:** The moving part that forces the sheet metal into or through the die.
    *   **Die:** The stationary part that shapes or cuts the sheet metal.
    *   **Die Set:** Guides the punch and die to ensure accurate alignment.
    *   **Stripper Plate:** Strips the workpiece from the punch after the operation.
    *   **Blank Holder:** Holds the sheet metal in place during certain operations.

**3.2. Shearing Operations:**

*   **Definition:** A cutting operation that separates a piece of sheet metal from a larger sheet by applying a tensile or compressive stress that exceeds the shear strength of the material.
*   **Mechanics:** Occurs through three stages:
    1.  **Dent formation:** The punch begins to indent the sheet.
    2.  **Ductile fracture:** Cracks initiate at the punch and die edges and propagate through the thickness of the sheet.
    3.  **Fracture completion:** The two pieces separate.
*   **Types of Shearing:**
    *   **Blanking:** Removing a piece from a sheet, and the removed piece is the desired product. The remaining material is scrap.
    *   **Piercing (Punching):** Creating a hole in a sheet. The removed piece is scrap, and the sheet with the hole is the product.
    *   **Slitting:** Cutting along a straight line to separate a strip from a sheet.
    *   **Lancing:** Cutting and bending a flap or tab from the sheet without removing material.
    *   **Trimming:** Removing excess material from the edges of a stamped part.
*   **Clearance:** The gap between the punch and die. Crucial for clean shearing.
    *   **Optimal Clearance:** Typically 5-10% of the sheet thickness for mild steel.
    *   **Effect of Clearance:**
        *   Too little clearance: High forces, potential for galling, burr formation on the punch side.
        *   Too much clearance: Large burr on the die side, rough fracture surface, potential for double shearing.
*   **Burr:** A raised edge on the sheared surface.
*   **Force Required for Shearing:**
    $F_{shear} = S \times t \times UTS$
    Where:
    *   $F_{shear}$ = Shearing force (N)
    *   $S$ = Perimeter of the cut (length of the shear line) (m)
    *   $t$ = Sheet thickness (m)
    *   $UTS$ = Ultimate Tensile Strength of the material (Pa)
    *(Source: Kalpakjian & Schmid)*

**3.3. Tension Operations:**

*   **Definition:** Operations that involve stretching the sheet metal.
*   **Deep Drawing:** A forming process where a flat sheet metal blank is formed into a seamless cup or other shaped part by drawing it into a die cavity using a punch.
    *   **Mechanics:**
        1.  A blank holder applies a controlled force to prevent wrinkling in the flange.
        2.  The punch pushes the blank into the die cavity.
        3.  The material in the flange is drawn radially inward, reducing its diameter and increasing its thickness.
    *   **Key Parameters:**
        *   **Blank Diameter ($D_0$)**
        *   **Cup Diameter ($D_d$)**
        *   **Cup Height ($h$)**
        *   **Die Radius ($r_d$)**
        *   **Punch Radius ($r_p$)**
        *   **Blank Holder Force ($F_{bh}$)**
    *   **Limiting Drawing Ratio (LDR):** The maximum ratio of blank diameter to punch diameter that can be drawn without fracture.
        $LDR = \frac{D_0}{D_d}$
    *   **Wrinkling:** Occurs in the flange if the blank holder force is too low.
    *   **Tearing:** Occurs at the punch nose or die edge if the blank holder force is too high, or if the material is too thin or drawn too far.
    *   **Force Required for Deep Drawing:**
        $F_{draw} \approx P_{die} \times A_{drawn} + F_{bh}$
        Where:
        *   $P_{die}$ = Punch pressure required to draw the material (related to material flow stress).
        *   $A_{drawn}$ = Projected area of the drawn cup base.
        *   $F_{bh}$ = Blank holder force.
        *(More detailed calculations involve flow stress and friction considerations - refer to Rao or Kalpakjian)*
*   **Stretch Forming:** A process where a sheet of metal is stretched over or into a die to shape it. The deformation is primarily tensile.
    *   **Mechanics:** The sheet is gripped by jaws and stretched beyond its yield point before being pressed against a die.
    *   **Applications:** Aircraft panels, automobile body parts.

**3.4. Compression Operations:**

*   **Definition:** Operations that involve squeezing or compressing the sheet metal.
*   **Coining:** A secondary stamping operation where the part is subjected to very high pressure to create sharp details and improve surface finish. Significant metal flow occurs.
    *   **Mechanics:** High pressure causes the metal to flow into fine details of the die.
    *   **Forces:** Very high forces are required, often exceeding the shear strength.
*   **Embossing:** Creating raised or sunken designs on sheet metal by passing it between matched male and female dies.
    *   **Mechanics:** Localized compression and stretching.
*   **Upsetting:** Increasing the cross-sectional area of a portion of a workpiece by compressing it axially. Primarily used in bar stock but can be applied to sheet metal in some contexts.

**3.5. Tension and Compression Operations (Combined):**

Many sheet metal operations involve a combination of tensile and compressive stresses, or sequences of tension and compression.

*   **Bending:** Forming a curved shape by applying a tensile stress on the outer surface and a compressive stress on the inner surface.
    *   **Mechanics:**
        1.  A bending force is applied to the sheet.
        2.  The outer fibers are stretched (tension), and the inner fibers are compressed.
        3.  A **neutral axis** exists within the bend where the strain is zero. This axis shifts slightly towards the outer surface after plastic deformation due to the Bauschinger effect.
    *   **Bend Allowance (BA):** The length of material required to make a bend. It's added to the straight lengths to determine the flat pattern size.
        *   For a 90-degree bend: $BA = (\text{Bend Radius} + \text{K-factor} \times \text{Material Thickness})$
        *   **K-factor:** A ratio representing the location of the neutral axis. For most metals, $K$ is between 0.33 and 0.5. A common approximation is $K=0.33$ or $K=0.4$.
    *   **Bend Radius ($R$):** The radius of the punch or die corner. Smaller bend radii lead to greater tensile stress and potential for cracking.
    *   **Springback:** The elastic recovery of the material after the bending load is removed. This causes the bend angle to be slightly less than intended.
        *   To compensate for springback, the punch is often designed to over-bend the part.
    *   **Minimum Bend Radius:** The smallest radius a material can be bent to without cracking. This is a function of material properties (ductility, tensile strength) and thickness.
        $R_{min} = T \times BMRF$
        Where:
        *   $T$ = Material Thickness
        *   $BMRF$ = Bend Material Factor (lookup table value based on material and thickness).
    *   **Force Required for Bending:**
        $F_{bend} = \frac{K \times UTS \times w \times t^2}{D}$
        Where:
        *   $K$ = Empirical constant (typically 1.33 for air bending)
        *   $UTS$ = Ultimate Tensile Strength
        *   $w$ = Width of the sheet
        *   $t$ = Sheet thickness
        *   $D$ = Die opening (distance between punch and die edges)
        *(Source: Rao, Kalpakjian)*

**3.6. Applications of Sheet Metal Operations:**

*   **Automotive Industry:** Car body panels, doors, hoods, chassis components.
*   **Aerospace Industry:** Aircraft fuselage sections, wing components, interior panels.
*   **Consumer Goods:** Appliances (refrigerators, washing machines), kitchenware, furniture.
*   **Electronics:** Casings for computers, mobile phones.
*   **Construction:** Roofing, cladding, ductwork.

---

### 4. Numerical Problems

**4.1. Shearing Problem:**

**Problem:** A rectangular blank of 100 mm x 150 mm is to be cut from a steel sheet of 2 mm thickness. The Ultimate Tensile Strength (UTS) of the steel is 400 MPa. Calculate the force required to shear the blank.

**Solution:**

*   The perimeter of the blank is $S = 2 \times (100 \text{ mm} + 150 \text{ mm}) = 2 \times 250 \text{ mm} = 500 \text{ mm}$.
*   Convert units to meters:
    *   $S = 500 \text{ mm} = 0.5 \text{ m}$
    *   $t = 2 \text{ mm} = 0.002 \text{ m}$
    *   $UTS = 400 \text{ MPa} = 400 \times 10^6 \text{ Pa}$

*   Using the shearing force formula:
    $F_{shear} = S \times t \times UTS$
    $F_{shear} = 0.5 \text{ m} \times 0.002 \text{ m} \times (400 \times 10^6 \text{ Pa})$
    $F_{shear} = 0.001 \times 400 \times 10^6 \text{ N}$
    $F_{shear} = 400 \times 10^3 \text{ N} = 400 \text{ kN}$

**Answer:** The force required to shear the blank is 400 kN.

**4.2. Bending Problem:**

**Problem:** A steel sheet of 1.5 mm thickness and 50 mm width is to be bent at a 90-degree angle. The bending is done using a die with a 5 mm opening. The UTS of the steel is 350 MPa. The bend radius is 3 mm. Assume a K-factor of 0.4 for calculating the bend allowance and an empirical constant of 1.33 for bending force. Neglect springback for simplicity.

**Solution:**

*   **Calculate Bend Allowance (BA):**
    *   Bend Radius ($R$) = 3 mm
    *   Material Thickness ($T$) = 1.5 mm
    *   K-factor = 0.4
    *   $BA = (R + K \times T)$ for a 90-degree bend
    *   $BA = (3 \text{ mm} + 0.4 \times 1.5 \text{ mm})$
    *   $BA = (3 \text{ mm} + 0.6 \text{ mm}) = 3.6 \text{ mm}$

*   **Calculate the flat pattern length:**
    *   Assume we are bending a piece of width 50 mm. Let's say we want a flat pattern length of 100 mm for one side and 100 mm for the other side.
    *   The outer bend length is $100 \text{ mm} + (90/360) \times 2\pi(R+T)$ or $100 \text{ mm} + (90/360) \times 2\pi R$ depending on how you define the dimensions. A more direct approach using BA:
    *   If the original flat part had two straight sections of length $L_1$ and $L_2$, the total flat length is $L_1 + L_2 + BA$. If the final part has outer dimensions of 100mm and 100mm, the flat pattern would be $L_1' + L_2' + BA$.
    *   Let's assume we are calculating the required flat blank size for a simple L-shaped part where each leg is 100mm long *after* bending, and we want to determine the flat length needed for *one* leg of length 100mm.
    *   The length along the outer surface of the bend is $R + \text{tangent length}$. The length along the inner surface is $R_{inner} + \text{tangent length}$. Using BA directly simplifies this.
    *   If the desired length of the bend line (e.g., along the neutral axis) is $L_{bendline}$, the flat blank length is $L_{flat} = L_{straight} + BA$.
    *   Let's assume we want to bend a 100mm straight section such that after bending, the flat portion is 100mm. The bend itself requires an additional 3.6mm of material along the bend line.
    *   So, a flat piece of length $100 + 3.6 = 103.6$ mm would be needed to achieve a 100mm outer length bend (this is a simplification).

*   **Calculate Bending Force:**
    *   Convert units to meters:
        *   $UTS = 350 \text{ MPa} = 350 \times 10^6 \text{ Pa}$
        *   $w = 50 \text{ mm} = 0.05 \text{ m}$
        *   $t = 1.5 \text{ mm} = 0.0015 \text{ m}$
        *   $D$ (Die opening) = The die opening is usually twice the die corner radius plus clearance. If the punch radius is 3mm, the die radius is also typically 3mm. So, $D = 2 \times R_{die} + \text{clearance}$. For air bending with a punch radius of 3mm, the die opening is often approximated as $2 \times R_{punch} + 2T$ or related to the punch radius directly. Let's assume the die opening is $2 \times (\text{die radius}) + \text{clearance}$. If punch radius is 3mm, a common die opening is $2 \times 3 \text{mm} + 2 \times 1.5 \text{mm} = 9$ mm.
        *   $D = 9 \text{ mm} = 0.009 \text{ m}$
    *   Using the bending force formula:
        $F_{bend} = \frac{K \times UTS \times w \times t^2}{D}$
        $F_{bend} = \frac{1.33 \times (350 \times 10^6 \text{ Pa}) \times 0.05 \text{ m} \times (0.0015 \text{ m})^2}{0.009 \text{ m}}$
        $F_{bend} = \frac{1.33 \times 350 \times 10^6 \times 0.05 \times 2.25 \times 10^{-6}}{0.009}$
        $F_{bend} = \frac{52312.5}{0.009} \approx 5.81 \times 10^6 \text{ N} = 5810 \text{ kN}$

**Answer:**
*   The bend allowance for a 90-degree bend with a 3 mm radius and K=0.4 is 3.6 mm.
*   The approximate force required for bending is 5810 kN.

**4.3. Deep Drawing Problem (Conceptual):**

**Problem:** A circular blank of diameter 100 mm is to be deep drawn into a cylindrical cup of diameter 50 mm and height 40 mm. The UTS of the material is 400 MPa, and its yield strength is 200 MPa. The Limiting Drawing Ratio (LDR) for this material is 2.0.

**Analysis:**

*   **Calculate the actual drawing ratio:**
    *   Blank diameter ($D_0$) = 100 mm
    *   Cup diameter ($D_d$) = 50 mm
    *   Drawing Ratio = $D_0 / D_d = 100 \text{ mm} / 50 \text{ mm} = 2.0$

*   **Check against LDR:**
    *   The actual drawing ratio (2.0) is equal to the LDR (2.0). This indicates that the operation is at the limit of what can be achieved without fracture. Careful control of blank holder force and lubrication would be critical.

*   **Determine if multiple draws are needed:** If the drawing ratio were higher than the LDR, or if greater reduction in diameter was required in a single step, multiple drawing operations with intermediate annealing would be necessary.

**Answer:** The drawing operation is feasible as the drawing ratio equals the LDR. However, it's at the limit, requiring precise process control.

---

### 5. Important Points to Remember:

*   **Yield Criteria:** Tresca (max shear stress) and Von Mises (distortion energy) are key for predicting plastic deformation under multi-axial stress. Von Mises is more commonly used for ductile metals.
*   **Hot Working:** Above recrystallization temperature; lower forces, higher ductility, but poor surface finish and accuracy.
*   **Cold Working:** Below recrystallization temperature; higher forces, work hardening (increased strength/hardness), good surface finish and accuracy.
*   **Sheet Metal Operations:** Performed using press tools (punch and die).
*   **Shearing:** Cutting operations like blanking, piercing, slitting. Force depends on shear strength, perimeter, and thickness. Clearance is critical.
*   **Deep Drawing:** Forming cups from flat blanks; involves tension in the flange. LDR is crucial to avoid tearing. Wrinkling is a concern with low blank holder force.
*   **Bending:** Combines tension and compression. Bend allowance accounts for material used in the bend. Springback affects the final angle. Minimum bend radius prevents cracking.
*   **Force Calculations:** Formulas exist for shearing, bending, and estimations for drawing, but often involve material properties (UTS, yield strength, flow stress), geometry, and empirical factors.
*   **Work Hardening:** A significant effect in cold working, leading to increased strength but reduced ductility.

---

### 6. Practice Questions:

1.  **Differentiate between Tresca and Von Mises yield criteria. Which is generally more conservative and why?**
2.  **Explain the advantages and disadvantages of hot working compared to cold working.**
3.  **What is the primary purpose of a blank holder in deep drawing? What happens if the blank holder force is too low or too high?**
4.  **A rectangular blank measuring 80 mm x 120 mm needs to be punched from a steel sheet of 1.0 mm thickness. The UTS of the steel is 450 MPa. Calculate the punching force required.**
5.  **A 1 mm thick aluminum sheet is to be bent 90 degrees with a bend radius of 2 mm. Calculate the bend allowance using a K-factor of 0.4. If the width of the sheet is 30 mm and the die opening is 6 mm, estimate the bending force, given that the UTS of aluminum is 150 MPa and the empirical constant is 1.2.**
6.  **What is springback in bending, and how can it be compensated for in tool design?**

---

### 7. Answers to Practice Questions:

1.  **Tresca** is based on the maximum shear stress, while **Von Mises** is based on distortion energy. **Tresca** is generally more conservative as it predicts yielding at a lower stress level under certain multi-axial stress conditions.
2.  **Advantages of Hot Working:** Lower forces, higher ductility, elimination of defects. **Disadvantages:** Poor surface finish, lower dimensional accuracy. **Advantages of Cold Working:** Excellent surface finish, high dimensional accuracy, increased strength/hardness. **Disadvantages:** Higher forces, limited deformation before fracture/annealing, residual stresses.
3.  The blank holder applies a controlled force to the flange during deep drawing to **prevent wrinkling**. If the force is too low, the flange buckles, causing wrinkles. If the force is too high, it can cause excessive thinning and tearing in the flange or at the punch nose/die radius.
4.  **Shearing Force Calculation:**
    *   Perimeter ($S$) = 2 * (80 mm + 120 mm) = 2 * 200 mm = 400 mm = 0.4 m
    *   Thickness ($t$) = 1.0 mm = 0.001 m
    *   UTS = 450 MPa = 450 x 10⁶ Pa
    *   $F_{punch} = S \times t \times UTS = 0.4 \text{ m} \times 0.001 \text{ m} \times (450 \times 10^6 \text{ Pa})$
    *   $F_{punch} = 0.0004 \times 450 \times 10^6 \text{ N} = 180 \times 10^3 \text{ N} = 180 \text{ kN}$
    *   **Answer:** 180 kN.
5.  **Bending Calculations:**
    *   Bend Allowance (BA) = R + K*T = 2 mm + 0.4 * 1 mm = 2.4 mm
    *   Bending Force (F_bend) = (K_emp * UTS * w * t²) / D
    *   K_emp = 1.2
    *   UTS = 150 MPa = 150 x 10⁶ Pa
    *   w = 30 mm = 0.03 m
    *   t = 1 mm = 0.001 m
    *   D = 6 mm = 0.006 m
    *   $F_{bend} = (1.2 \times 150 \times 10^6 \text{ Pa} \times 0.03 \text{ m} \times (0.001 \text{ m})^2) / 0.006 \text{ m}$
    *   $F_{bend} = (1.2 \times 150 \times 10^6 \times 0.03 \times 1 \times 10^{-6}) / 0.006$
    *   $F_{bend} = (5400) / 0.006 = 900,000 \text{ N} = 900 \text{ kN}$
    *   **Answer:** Bend Allowance = 2.4 mm, Bending Force = 900 kN.
6.  **Springback** is the elastic recovery of the material after the bending load is removed, causing the bend angle to become slightly less than the angle formed in the die. It can be compensated for by:
    *   **Over-bending:** Bending the part to a slightly larger angle than required.
    *   **Coining:** Applying very high pressure in the bend area to plastically deform the inner surface, reducing springback.
    *   **Using appropriate die/punch radii:** Larger bend radii generally result in less springback.
    *   **Process control:** Optimizing lubrication and strain rate.

---

This comprehensive set of notes covers the fundamental aspects of metal deformation, hot and cold working, and the specific operations within sheet metal forming using press tools. The inclusion of numerical examples and practice questions aims to solidify understanding and prepare for applying these concepts. The material is aligned with the specified learning outcomes and course outcomes, particularly CO4 which focuses on determining forming loads.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
