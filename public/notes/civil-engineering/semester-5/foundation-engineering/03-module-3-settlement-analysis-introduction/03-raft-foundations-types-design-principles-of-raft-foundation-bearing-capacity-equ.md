---
title: "Raft foundations: Types – Design Principles of raft foundation- Bearing capacity equations for raft on sand (Teng’s equation based on SPT value) and for raft on clay (Skempton’s formula) - Floating foundations"
subject: "FOUNDATION ENGINEERING"
module: "Module 3: Settlement analysis: Introduction"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e3f"
status: "completed"
scrapedAt: "2026-05-20T18:48:40.154Z"
---
# FOUNDATION ENGINEERING: Module 3: Settlement Analysis: Introduction

## Topic: Raft Foundations: Types, Design Principles, Bearing Capacity, and Floating Foundations

---

### **Learning Outcomes Covered:**

*   Understand the different types of raft foundations.
*   Learn the fundamental design principles of raft foundations.
*   Apply bearing capacity equations for rafts on sand (Teng's equation) and clay (Skempton's formula).
*   Understand the concept and design considerations for floating foundations.

---

### **1. Introduction to Raft Foundations**

*   **Definition:** A raft foundation, also known as a mat foundation, is a large, continuous slab of concrete that supports multiple columns and walls over a wide area. It essentially acts as a single, large footing that distributes the building loads over a significant portion of the soil surface.

*   **When are Raft Foundations Used?**
    *   When soil bearing capacity is low, and individual footings would be too large or overlap excessively.
    *   When differential settlement of individual footings is likely to cause structural distress.
    *   To provide buoyancy for structures built in areas with high water tables.
    *   When column spacing is close and the combined area of individual footings would be more than 50% of the total area.
    *   In structures with heavy loads and widely spaced columns.

---

### **2. Types of Raft Foundations**

Raft foundations can be categorized based on their structural design to resist bending and shear stresses.

*   **2.1. Slab-on-Ground (or Flat Slab) Raft:**
    *   **Description:** The simplest form, a uniformly thick concrete slab spanning between column loads. It directly transfers the loads to the soil.
    *   **Suitability:** Suitable for lighter loads and soils with moderate bearing capacity.
    *   **Behavior:** Primarily resists bending due to the soil pressure.

*   **2.2. Ribbed (or Beam and Slab) Raft:**
    *   **Description:** Consists of a relatively thin slab supported by a grid of integral concrete beams (ribs). The beams are typically aligned with the columns.
    *   **Suitability:** Used for heavier loads and where the flat slab might experience excessive bending.
    *   **Behavior:** The beams carry the primary load and distribute it to the slab and then to the soil. This provides greater rigidity and load-carrying capacity.

*   **2.3. Cellular Raft:**
    *   **Description:** A more complex system involving two or more slabs interconnected by a network of web walls (similar to box girders).
    *   **Suitability:** Used for very heavy loads, large spans, and structures requiring significant structural stiffness.
    *   **Behavior:** Forms a rigid box structure that distributes loads very effectively and can resist significant bending and shear forces.

---

### **3. Design Principles of Raft Foundation**

The design of a raft foundation involves ensuring that it can safely carry the applied loads and that the resulting settlements are within acceptable limits.

*   **3.1. Load Determination:**
    *   All vertical loads (dead load, live load, wind load, seismic load) from columns and walls must be accurately calculated.
    *   Consider the effect of eccentricities in column loads.

*   **3.2. Soil Properties and Bearing Capacity:**
    *   Determine the soil's bearing capacity (both ultimate and allowable).
    *   Conduct thorough geotechnical investigations (SPT, CPT, lab tests).
    *   Understand the soil's settlement characteristics.

*   **3.3. Structural Design (Slab and Beams):**
    *   **Consideration of Soil Pressure:** The raft is subjected to upward soil pressure from the ground and downward loads from the structure. The net soil pressure is the critical factor for design.
    *   **Bending Moments:** Analyze the bending moments in the raft due to column loads and the resisting soil pressure.
    *   **Shear Forces:** Check for shear stresses, particularly punching shear around columns and beam shear.
    *   **Reinforcement:** Design the reinforcement in the slab and beams to resist the calculated bending moments and shear forces. This typically involves top and bottom reinforcement to handle hogging and sagging moments.
    *   **Stiffness:** Ensure sufficient stiffness to minimize differential settlements.

*   **3.4. Settlement Analysis:**
    *   **Primary Consideration:** Raft foundations are often designed primarily to control settlement, especially differential settlement.
    *   **Uniform Settlement:** Ideally, the load distribution and raft stiffness aim for uniform settlement across the entire foundation.
    *   **Differential Settlement:** Minimize the difference in settlement between adjacent columns or sections of the raft.
    *   **Methods of Settlement Calculation:**
        *   **Elastic Theory:** Using methods based on elasticity of soil.
        *   **Empirical Methods:** Based on SPT values or other index properties.
        *   **Finite Element Analysis (FEA):** A more advanced technique for complex geometries and soil conditions.

---

### **4. Bearing Capacity Equations for Raft Foundations**

These equations help estimate the ultimate bearing capacity of a raft foundation.

*   **4.1. Bearing Capacity for Raft on Sand (Teng's Equation based on SPT Value):**

    *   **Concept:** Teng's method provides an empirical approach to estimate the allowable bearing capacity for shallow foundations (including rafts) on granular soils using Standard Penetration Test (SPT) N-values.

    *   **Equation for Allowable Bearing Capacity ($q_{a}$):**
        $q_{a} = c_1 N_{avg} \left(\frac{B+3.28}{B}\right)^2$

        Where:
        *   $q_{a}$ = Allowable bearing capacity (in kPa)
        *   $N_{avg}$ = Average SPT N-value within a depth of $1.5B$ below the foundation base, where $B$ is the width of the foundation.
        *   $c_1$ = A coefficient that depends on the type of foundation:
            *   For continuous footings (like a raft): $c_1 = 20$
            *   For square footings: $c_1 = 22$
            *   For circular footings: $c_1 = 24$
            *   *(Note: For rafts, $B$ is often taken as the smaller dimension of the raft, or the characteristic width of the loaded area.)*
        *   $(B+3.28)/B$ = Correction factor for embedment depth and width (3.28 is approximately 1 meter in feet).

    *   **Important Notes for Teng's Equation:**
        *   The equation inherently includes a factor of safety (typically around 3).
        *   The SPT N-value should be corrected for overburden pressure and rod length if necessary, but Teng's original formulation is often applied to raw N-values or a standard correction.
        *   The width $B$ is crucial. For a rectangular raft of dimensions $L \times W$, $B$ is usually taken as $W$ (the smaller dimension).
        *   The depth of influence for $N_{avg}$ is $1.5B$.

    *   **Example:**
        A rectangular raft foundation is $20$m $\times$ $30$m. The average SPT N-value within $1.5$ times the smaller width ($1.5 \times 20$m = $30$m depth) below the foundation base is $15$. Estimate the allowable bearing capacity of the raft.

        *   $B = 20$ m (smaller dimension)
        *   $N_{avg} = 15$
        *   $c_1 = 20$ (for continuous footing/raft)

        $q_{a} = 20 \times 15 \left(\frac{20+3.28}{20}\right)^2$
        $q_{a} = 300 \left(\frac{23.28}{20}\right)^2$
        $q_{a} = 300 (1.164)^2$
        $q_{a} = 300 \times 1.355$
        $q_{a} \approx 406.5$ kPa

*   **4.2. Bearing Capacity for Raft on Clay (Skempton's Formula):**

    *   **Concept:** Skempton's formula is used for shallow foundations on cohesive soils (clays) and is based on the undrained shear strength ($c_u$) of the clay. It's a simplification of the Terzaghi's bearing capacity equation for cohesive soils, adjusted for the geometry of the foundation.

    *   **Equation for Ultimate Bearing Capacity ($q_u$):**
        $q_u = c_u N_c + \gamma_s D_f$

        Where:
        *   $q_u$ = Ultimate bearing capacity (in kPa)
        *   $c_u$ = Undrained shear strength of the clay (in kPa)
        *   $N_c$ = Bearing capacity factor, which depends on the shape and embedment depth ratio. For shallow foundations, $N_c$ is typically taken as $5.14$ for a strip footing, $6.20$ for a circular footing, and it varies for rectangles based on the length-to-width ratio. **For a raft foundation, which is essentially a large footing, $N_c$ is often taken as $5.14$ (assuming it acts somewhat like a strip footing due to its large size relative to its depth).**
        *   $\gamma_s$ = Unit weight of the soil above the foundation base.
        *   $D_f$ = Depth of foundation embedment.

    *   **For Allowable Bearing Capacity ($q_a$):**
        $q_{a} = \frac{q_u}{F.S.}$
        Where $F.S.$ is the Factor of Safety, typically $2.5$ to $3.0$.

    *   **Simplified Approach for Rafts on Clay (often used in practice, considering the large dimensions):**
        When the raft is very large and the embedment depth is relatively small, the term $\gamma_s D_f$ becomes less significant compared to the cohesive term. A common simplification for rafts on clay is:
        $q_{a} = s_c N_c \frac{c_u}{F.S.} + q_0$ (where $q_0$ is the surcharge pressure)
        Or, more directly, for the net allowable bearing capacity (ignoring surcharge and soil above):
        $q_{a,net} \approx \frac{5.14 c_u}{F.S.}$ (This is a simplified view, emphasizing the cohesive contribution).

        **A more robust application of Skempton's concept for rafts on clay would involve considering the shape factor $N_c$ that depends on the $B/L$ ratio and $D_f/B$ ratio. However, for typical foundation engineering problems at an introductory level, using $N_c = 5.14$ and a suitable F.S. with the undrained shear strength is often expected for rafts on clay.**

    *   **Example:**
        A raft foundation is to be constructed on a deep deposit of clay with an undrained shear strength ($c_u$) of $30$ kPa. The foundation is embedded at a depth ($D_f$) of $2$ m. The unit weight of the clay is $18$ kN/m³. If a factor of safety of $3.0$ is required, estimate the allowable bearing capacity.

        *   $c_u = 30$ kPa
        *   $D_f = 2$ m
        *   $\gamma_s = 18$ kN/m³
        *   $F.S. = 3.0$
        *   Assume $N_c = 5.14$ for a large raft (strip footing assumption).

        Ultimate Bearing Capacity ($q_u$):
        $q_u = 5.14 \times 30 + (18 \times 2)$
        $q_u = 154.2 + 36$
        $q_u = 190.2$ kPa

        Allowable Bearing Capacity ($q_{a}$):
        $q_{a} = \frac{190.2}{3.0}$
        $q_{a} = 63.4$ kPa

        **Important Note:** The interpretation of "Skempton's formula" can vary. The above uses the general form. In many contexts, for rafts on clay, the allowable soil pressure is directly related to the undrained shear strength, often simplified to $q_a \approx (c_u \times N_c) / FS$.

---

### **5. Floating Foundations (or Buoyancy Rafts)**

*   **Definition:** A floating foundation is a type of raft foundation that is designed to counteract the buoyant forces acting on a structure. They are typically used in areas with high water tables and where the weight of the structure (including basement levels) is less than the buoyant force on the substructure.

*   **When are Floating Foundations Used?**
    *   High water table.
    *   Structures with deep basements or underground levels.
    *   When the weight of the structure is insufficient to overcome the hydrostatic uplift.

*   **Design Principle:**
    *   The foundation is designed to be slightly heavier than the buoyant force acting on it.
    *   The weight of the structure, foundation slab, and any basement levels must be greater than the upward hydrostatic pressure.
    *   **Net upward force = Buoyant Force - Weight of Structure**
    *   For stability, the **weight of the structure** must be greater than the **buoyant force**.
    *   **$W_{structure} > U$**
        *   $W_{structure}$ = Total weight of the structure and foundation.
        *   $U$ = Buoyant force acting on the submerged portion of the foundation.

*   **Types of Floating Foundations:**
    *   **Open Basement Raft:** The basement is open to the external water table.
    *   **Box Foundation (or Hollow Box Raft):** The foundation is a hollow, watertight box structure.

*   **Considerations for Floating Foundations:**
    *   **Uplift Pressure:** The hydrostatic pressure acting on the underside of the raft and basement walls.
    *   **Buoyancy:** The upward force exerted by the water.
    *   **Settlement:** Even with buoyancy, settlement can still be a concern and needs to be analyzed.
    *   **Differential Settlement:** Crucial to ensure even distribution of loads and buoyant forces.
    *   **Cracking:** The concrete must be designed to withstand tensile stresses from uplift.
    *   **Permeability:** Waterproofing is essential if the structure is to remain dry.

*   **Example:**
    A proposed building has a basement that extends $5$ m below the ground surface, where the water table is at ground level. The total weight of the structure above the basement is $15,000$ kN. The raft foundation and basement walls are $0.5$ m thick. The area of the raft is $1000$ m². If the unit weight of water is $9.81$ kN/m³, will the structure float? What additional weight is needed?

    *   Depth of basement ($D_f$) = $5$ m
    *   Area of raft ($A$) = $1000$ m²
    *   Weight of structure ($W_{structure}$) = $15,000$ kN
    *   Unit weight of water ($\gamma_w$) = $9.81$ kN/m³

    Buoyant force ($U$) acting on the submerged portion of the foundation:
    The submerged depth is the full $5$ m.
    $U = \gamma_w \times \text{Volume of displaced water}$
    The volume of displaced water is the volume of the submerged part of the foundation.
    Volume of foundation = Area $\times$ Thickness = $1000 \times 0.5 = 500$ m³
    However, the buoyant force acts on the entire submerged volume. We need to consider the volume of water displaced by the foundation's presence.
    Volume of displaced water = Area of raft $\times$ Submerged depth
    Volume of displaced water = $1000 \text{ m}^2 \times 5 \text{ m} = 5000 \text{ m}^3$

    $U = 9.81 \text{ kN/m}^3 \times 5000 \text{ m}^3 = 49,050 \text{ kN}$

    Now compare the weight of the structure with the buoyant force:
    $W_{structure} = 15,000 \text{ kN}$
    $U = 49,050 \text{ kN}$

    Since $W_{structure} < U$ ($15,000 < 49,050$), the structure will float.

    To prevent floating, the total weight of the structure (including the foundation) must be greater than the buoyant force.
    Required total weight $\ge U$
    Required total weight $\ge 49,050$ kN

    Additional weight needed = Required total weight - Current weight of structure
    Additional weight needed $\approx 49,050 \text{ kN} - 15,000 \text{ kN} = 34,050 \text{ kN}$

    This additional weight would need to be provided by making the foundation slab thicker, adding basement levels, or adding ballast.

---

### **6. Important Points to Remember**

*   **Rafts distribute load over a larger area**, reducing the intensity of pressure on the soil.
*   **Primary purpose:** Control differential settlement and increase bearing capacity when individual footings are impractical.
*   **Types:** Flat slab, ribbed, cellular. Choose based on load and soil conditions.
*   **Teng's equation for sand** is empirical and uses SPT N-values. Remember the formula and the meaning of $B$ and $N_{avg}$.
*   **Skempton's formula for clay** relies on undrained shear strength ($c_u$). For rafts, $N_c \approx 5.14$ is often used, but shape and depth factors can be more complex.
*   **Floating foundations** are essentially rafts designed to counteract hydrostatic uplift. The structure's weight must exceed the buoyant force.
*   **Settlement is still a critical design parameter** for rafts, even if bearing capacity is met.
*   **The width $B$ is crucial** in Teng's equation; it's typically the smaller dimension of the raft.

---

### **7. Practice Questions**

1.  **Question (Teng's Equation):** A rectangular raft foundation measuring $25$m $\times$ $40$m is to be constructed on a sandy soil. The average SPT N-value obtained from boreholes within the zone of influence is $18$. Using Teng's equation, calculate the allowable bearing capacity of the raft. (Assume $c_1 = 20$ and Factor of Safety is implicitly included).

2.  **Question (Skempton's Formula):** A raft foundation is to be built on a saturated clay deposit. The undrained shear strength ($c_u$) of the clay is $25$ kPa. The depth of embedment ($D_f$) is $3$ m, and the unit weight of the soil is $19$ kN/m³. Using Skempton's formula (assume $N_c = 5.14$ for the raft) and a Factor of Safety of $3.0$, determine the allowable bearing capacity.

3.  **Question (Floating Foundation):** A large underground reservoir with a concrete roof slab acting as a raft foundation is to be built. The water table is at the level of the roof slab. The total weight of the reservoir (including its contents) is $20,000$ kN. The area of the roof slab is $2000$ m². If the reservoir is submerged to a depth of $6$ m, and the unit weight of water is $9.81$ kN/m³, will the reservoir remain submerged, or will it tend to float upwards? Calculate the net uplift force if it exists.

---

### **8. Answers to Practice Questions**

1.  **Answer (Teng's Equation):**
    *   $B = 25$ m (smaller dimension)
    *   $N_{avg} = 18$
    *   $c_1 = 20$

    $q_{a} = c_1 N_{avg} \left(\frac{B+3.28}{B}\right)^2$
    $q_{a} = 20 \times 18 \left(\frac{25+3.28}{25}\right)^2$
    $q_{a} = 360 \left(\frac{28.28}{25}\right)^2$
    $q_{a} = 360 (1.1312)^2$
    $q_{a} = 360 \times 1.2796$
    $q_{a} \approx 460.65$ kPa

2.  **Answer (Skempton's Formula):**
    *   $c_u = 25$ kPa
    *   $D_f = 3$ m
    *   $\gamma_s = 19$ kN/m³
    *   $N_c = 5.14$
    *   $F.S. = 3.0$

    Ultimate Bearing Capacity ($q_u$):
    $q_u = c_u N_c + \gamma_s D_f$
    $q_u = (25 \text{ kPa} \times 5.14) + (19 \text{ kN/m}^3 \times 3 \text{ m})$
    $q_u = 128.5 \text{ kPa} + 57 \text{ kPa}$
    $q_u = 185.5$ kPa

    Allowable Bearing Capacity ($q_{a}$):
    $q_{a} = \frac{q_u}{F.S.}$
    $q_{a} = \frac{185.5 \text{ kPa}}{3.0}$
    $q_{a} \approx 61.83$ kPa

3.  **Answer (Floating Foundation):**
    *   Weight of reservoir ($W_{reservoir}$) = $20,000$ kN
    *   Area of roof slab ($A$) = $2000$ m²
    *   Submerged depth = $6$ m
    *   Unit weight of water ($\gamma_w$) = $9.81$ kN/m³

    Volume of displaced water = Area $\times$ Submerged depth
    Volume of displaced water = $2000 \text{ m}^2 \times 6 \text{ m} = 12,000 \text{ m}^3$

    Buoyant force ($U$) = $\gamma_w \times \text{Volume of displaced water}$
    $U = 9.81 \text{ kN/m}^3 \times 12,000 \text{ m}^3 = 117,720 \text{ kN}$

    Compare forces:
    $W_{reservoir} = 20,000$ kN
    $U = 117,720$ kN

    Since $W_{reservoir} < U$ ($20,000 < 117,720$), the reservoir will tend to float upwards.

    Net uplift force = $U - W_{reservoir}$
    Net uplift force = $117,720 \text{ kN} - 20,000 \text{ kN} = 97,720 \text{ kN}$ (upward)

---
This concludes the study notes for Raft Foundations within Module 3. Remember to review the definitions and practice applying the equations.
