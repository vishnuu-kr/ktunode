---
title: "Introduction of IS 456:2000 design provisions"
subject: "DESIGN OF CONCRETE STRUCTURES"
module: "Module 1: Properties of Concrete and Steel"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109ba"
status: "completed"
scrapedAt: "2026-05-20T18:43:38.481Z"
---
# DESIGN OF CONCRETE STRUCTURES

## Module 1: Properties of Concrete and Steel

### Topic: Introduction to IS 456:2000 Design Provisions

---

### **1. Overview of IS 456:2000**

*   **Purpose:** IS 456:2000 is the Indian Standard code of practice for plain and reinforced concrete. It provides the fundamental principles, guidelines, and specifications for the design and construction of concrete structures in India.
*   **Scope:** The code covers the design of buildings, bridges, retaining walls, water tanks, and other structures subjected to various loading conditions.
*   **Key Principles:**
    *   **Limit State Method (LSM):** IS 456:2000 primarily adopts the Limit State Method for design. This method ensures that the structure remains fit for its intended use throughout its service life under all expected conditions. It considers the ultimate strength of the structure and its serviceability requirements.
    *   **Working Stress Method (WSM):** While LSM is preferred, the code also provides some provisions for the Working Stress Method, which is an older design philosophy. However, LSM is the recommended approach for most designs.
*   **Importance:** Adherence to IS 456:2000 is crucial for ensuring the safety, durability, and serviceability of concrete structures, thereby preventing failures and ensuring public safety.

---

### **2. Fundamental Concepts of Limit State Method (LSM)**

LSM aims to prevent the structure from reaching any of its **limit states**. A limit state is defined as the state beyond which the structure or part thereof ceases to perform its intended function.

*   **Two Main Limit States:**
    *   **Limit State of Collapse (Ultimate Limit State):** This relates to the maximum load-carrying capacity of the structure. The structure should not collapse or fail under the most adverse combination of loads.
        *   **Failure Modes Considered:**
            *   **Flexure:** Bending failure.
            *   **Shear:** Shear failure.
            *   **Torsion:** Torsional failure.
            *   **Axial Load:** Failure due to compression or tension.
            *   **Buckling:** Instability failure.
    *   **Limit State of Serviceability (Serviceability Limit State):** This relates to the performance of the structure under normal service loads. The structure should function satisfactorily during its service life.
        *   **Failure Modes Considered:**
            *   **Deflection:** Excessive sagging or hogging.
            *   **Cracking:** Development of cracks beyond acceptable limits.
            *   **Vibration:** Undesirable vibrations.
            *   **Durability:** Resistance to environmental degradation.

*   **Partial Safety Factors ($\gamma$):**
    *   In LSM, to account for uncertainties in loads, material properties, and construction practices, partial safety factors are applied to loads and strengths of materials.
    *   **Partial Safety Factor for Loads ($\gamma_f$):** Applied to service loads to obtain design loads. These factors are greater than 1.0.
        *   *Example:* For dead loads and imposed loads, $\gamma_f$ is typically 1.5 for the limit state of collapse. For wind loads, it can vary.
    *   **Partial Safety Factor for Materials ($\gamma_m$):** Applied to the characteristic strength of materials to obtain their design strength. These factors are greater than 1.0.
        *   *Example:* For concrete, $\gamma_m$ is typically 1.5. For steel, $\gamma_m$ is typically 1.15.

*   **Characteristic Values:**
    *   **Characteristic Load ($F_k$):** The load that has a 95% probability of not being exceeded during the structure's life.
    *   **Characteristic Strength ($f_{ck}$ for concrete, $f_y$ for steel):** The strength of the material that has a 95% probability of not being undercut.

*   **Design Values:**
    *   **Design Load ($F_d$):** Characteristic Load multiplied by the partial safety factor for load.
        *   $F_d = \gamma_f \times F_k$
    *   **Design Strength:** Characteristic Strength divided by the partial safety factor for material.
        *   *Design Strength of Concrete ($f_{cd}$):* $f_{cd} = f_{ck} / \gamma_m$
        *   *Design Strength of Steel ($f_{yd}$):* $f_{yd} = f_y / \gamma_m$

*   **Design Equation (General):**
    *   For the Limit State of Collapse: **Design Effect of Loads $\leq$ Design Strength of Structure**
    *   For the Limit State of Serviceability: **Service Load Effects $\leq$ Serviceability Limits**

---

### **3. Materials and Their Properties as per IS 456:2000**

IS 456:2000 specifies the requirements and properties for concrete and reinforcing steel.

#### **3.1 Concrete**

*   **Constituents:** Cement, fine aggregate (sand), coarse aggregate (gravel/stone), and water. Admixtures can also be used.
*   **Grades of Concrete:** Specified by their characteristic compressive strength at 28 days.
    *   **M-Series:**
        *   M refers to the mix.
        *   The number indicates the characteristic compressive strength in N/mm² (MPa).
        *   *Examples:* M20, M25, M30, M35, M40, M45, M50, M55, M60.
    *   **Design Compressive Strength ($f_{ck}$):** This is the characteristic strength.
    *   **Design Compressive Strength ($f_{cd}$):** $f_{cd} = f_{ck} / \gamma_m$, where $\gamma_m = 1.5$ for concrete.
        *   *Example for M20 concrete:* $f_{ck} = 20 \text{ N/mm}^2$.
            $f_{cd} = 20 / 1.5 = 13.33 \text{ N/mm}^2$.
*   **Other Properties:**
    *   **Modulus of Elasticity ($E_c$):** Affects the stiffness and deflection of concrete members. IS 456:2000 provides formulas for calculating $E_c$ based on $f_{ck}$.
        *   $E_c = 5000 \sqrt{f_{ck}}$ (approximately, for typical concrete)
    *   **Poisson's Ratio:** Used in stress analysis.
    *   **Creep and Shrinkage:** Time-dependent deformations that can affect the long-term performance and stress distribution.
    *   **Workability:** The ease with which concrete can be mixed, transported, placed, compacted, and finished. Measured by slump test.
    *   **Durability:** The ability of concrete to resist weathering, chemical attack, and abrasion. Depends on concrete mix design, cover to reinforcement, and water-cement ratio.

#### **3.2 Steel Reinforcement**

*   **Types:**
    *   **Mild Steel (Plain Bars):** Lower yield strength, ductile. Less common in modern structures.
    *   **High Strength Deformed (HSD) Bars:** Most commonly used. Have ribs or lugs to improve bond with concrete.
        *   *Examples:* Fe 415, Fe 500, Fe 550. The number indicates the characteristic yield strength ($f_y$) in N/mm².
*   **Characteristic Yield Strength ($f_y$):** The stress at which significant plastic deformation begins.
*   **Design Yield Strength ($f_{yd}$):** $f_{yd} = f_y / \gamma_m$, where $\gamma_m = 1.15$ for steel.
    *   *Example for Fe 415 steel:* $f_y = 415 \text{ N/mm}^2$.
        $f_{yd} = 415 / 1.15 = 360.87 \text{ N/mm}^2$.
*   **Modulus of Elasticity ($E_s$):** Approximately $2.0 \times 10^5 \text{ N/mm}^2$ for all types of steel reinforcement.
*   **Ductility:** The ability of steel to deform plastically without fracturing. Important for seismic performance.

---

### **4. Loads and Load Combinations**

IS 456:2000 refers to other Indian Standards for loads.

*   **Types of Loads:**
    *   **Dead Loads (DL):** The weight of the structure itself (self-weight of beams, columns, slabs, walls, finishes).
    *   **Imposed Loads (IL) / Live Loads (LL):** Loads due to occupancy, furniture, people, etc. Varies with the type of building/usage.
    *   **Wind Loads (WL):** Forces exerted by wind.
    *   **Earthquake Loads (EL):** Forces generated during seismic events.
    *   **Snow Loads (SL):** Applicable in regions with snowfall.
    *   **Other Loads:** Thermal loads, loads from stored materials, etc.

*   **Load Combinations (for Limit State of Collapse):**
    *   These combinations ensure that the structure is designed for the worst plausible combination of loads. The partial safety factor for loads ($\gamma_f$) is applied.
    *   **General Combinations:**
        *   $1.5(\text{DL} + \text{IL})$
        *   $1.5(\text{DL} + \text{WL})$
        *   $1.5(\text{DL} + \text{EL})$
        *   $1.2(\text{DL} + \text{IL} + \text{WL})$
        *   $1.2(\text{DL} + \text{IL} + \text{EL})$
        *   $1.2(\text{DL} + \text{WL} + \text{EL})$
        *   $0.9(\text{DL} + \text{WL})$
        *   $0.9(\text{DL} + \text{EL})$
    *   *Note:* The specific load combinations and their factors depend on the primary load types acting on the structure and are detailed in the relevant load codes (like IS 875 series) and further stipulated in IS 456:2000.

---

### **5. Structural Detailing and Cover**

*   **Reinforcement Cover:** The distance between the extreme tension or compression fibre of the concrete member and the outermost reinforcement.
    *   **Purpose of Cover:**
        *   **Protection of Reinforcement:** To prevent corrosion of steel due to ingress of moisture and atmospheric agents.
        *   **Fire Resistance:** To provide insulation against heat in case of fire.
        *   **Bond:** Contributes to the bond between concrete and steel.
    *   **Minimum Cover:** Specified in IS 456:2000 for different structural elements (beams, columns, slabs, walls) and exposure conditions. It is generally the larger of:
        *   Nominal cover specified for the exposure condition.
        *   Diameter of the reinforcing bar.
        *   A specific minimum value (e.g., 20 mm for slabs and walls, 25 mm for beams and columns).
    *   **Nominal Cover:** Specified based on exposure conditions (mild, moderate, severe, very severe, extreme).

*   **Spacing of Reinforcement:**
    *   **Minimum Spacing:** To allow for proper compaction of concrete and ensure good bond.
    *   **Maximum Spacing:** To control cracking and ensure that the concrete effectively binds the bars.
    *   Specified for longitudinal and transverse reinforcement in beams, columns, slabs, etc.

*   **Development Length ($L_d$):** The length of embedment required for a reinforcing bar to develop its full design strength through bond.
    *   Crucial for ensuring that the reinforcement can transfer stresses to the concrete.
    *   IS 456:2000 provides formulas to calculate $L_d$.

*   **Anchorage Value:** The equivalent length of bar embedded in concrete that provides the same anchorage value as a standard bend.

---

### **6. Important Points to Remember**

*   **IS 456:2000 is the governing Indian Standard for reinforced concrete design.**
*   **Limit State Method (LSM) is the primary design philosophy.**
*   **Design is based on keeping the structure safe from collapse and functional under service conditions.**
*   **Partial safety factors are used for loads and material strengths to account for uncertainties.**
*   **Characteristic values are used for loads and material strengths.**
*   **Design loads are obtained by multiplying characteristic loads by $\gamma_f$.**
*   **Design strengths are obtained by dividing characteristic strengths by $\gamma_m$.**
*   **Concrete grades are specified by their characteristic compressive strength (M-series).**
*   **HSD bars are commonly used with specified yield strengths (Fe-series).**
*   **Adequate cover to reinforcement is essential for durability and fire resistance.**
*   **Proper detailing of reinforcement (spacing, development length) is critical for structural integrity.**

---

### **7. Practice Questions & Exercises**

**Question 1:**
What is the primary design philosophy adopted by IS 456:2000?
a) Working Stress Method
b) Limit State Method
c) Elastic Method
d) Ultimate Load Method

**Answer:** b) Limit State Method

**Question 2:**
Calculate the design strength of M25 concrete. Assume the partial safety factor for concrete is 1.5.
a) 16.67 N/mm²
b) 20.00 N/mm²
c) 25.00 N/mm²
d) 37.50 N/mm²

**Answer:** a) 16.67 N/mm²
*   **Explanation:** Design strength of concrete ($f_{cd}$) = Characteristic strength ($f_{ck}$) / Partial safety factor ($\gamma_m$) = 25 N/mm² / 1.5 = 16.67 N/mm².

**Question 3:**
What is the partial safety factor for steel reinforcement for the limit state of collapse?
a) 1.0
b) 1.15
c) 1.5
d) 1.75

**Answer:** b) 1.15

**Question 4:**
List the two main limit states considered in IS 456:2000.

**Answer:**
1.  Limit State of Collapse (Ultimate Limit State)
2.  Limit State of Serviceability

**Question 5:**
Briefly explain the purpose of the minimum cover to reinforcement in concrete members as per IS 456:2000.

**Answer:** The minimum cover to reinforcement is provided to:
1.  **Protect reinforcement from corrosion:** Prevents ingress of moisture, carbon dioxide, and other aggressive substances from the atmosphere.
2.  **Provide fire resistance:** Acts as a thermal insulator to protect the steel bars from reaching critical temperatures during a fire.
3.  **Ensure adequate bond:** Contributes to the bond development between concrete and steel.

**Question 6:**
For a beam supporting a Dead Load of 10 kN/m and an Imposed Load of 15 kN/m, calculate the design load as per IS 456:2000 for the combination of Dead Load and Imposed Load for the limit state of collapse.

**Answer:**
*   Characteristic Dead Load ($DL_k$) = 10 kN/m
*   Characteristic Imposed Load ($IL_k$) = 15 kN/m
*   Partial safety factor for loads ($\gamma_f$) for DL + IL = 1.5
*   Design Load ($DL_d + IL_d$) = $\gamma_f \times (DL_k + IL_k)$
*   Design Load = $1.5 \times (10 \text{ kN/m} + 15 \text{ kN/m})$
*   Design Load = $1.5 \times 25 \text{ kN/m}$
*   Design Load = $37.5 \text{ kN/m}$

---
