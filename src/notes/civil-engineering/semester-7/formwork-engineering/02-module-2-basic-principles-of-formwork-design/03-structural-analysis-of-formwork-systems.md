---
title: "Structural analysis of formwork systems"
subject: "FORMWORK ENGINEERING"
module: "Module 2: Basic Principles of Formwork Design"
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba811444"
status: "completed"
scrapedAt: "2026-05-20T18:59:36.933Z"
---
# Formwork Engineering: Module 2 - Basic Principles of Formwork Design
## Topic: Structural Analysis of Formwork Systems

---

### **Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental principles of structural analysis as applied to formwork.
*   Identify the different types of loads that act on formwork systems.
*   Apply basic structural analysis methods to determine the forces and stresses within formwork components.
*   Understand the concept of beam action, column action, and diaphragm action in formwork.
*   Calculate the required sizes and strengths of formwork members based on calculated forces.
*   Appreciate the importance of deflection and stability in formwork design.

---

### **1. Introduction to Structural Analysis of Formwork**

Formwork is essentially a temporary structure that supports wet concrete until it gains sufficient strength to support itself. Structural analysis is crucial to ensure that the formwork can safely withstand all the loads it will encounter during the construction process without collapsing or deforming excessively.

**Key Concepts:**

*   **Load:** Any force or action that is applied to the formwork.
*   **Stress:** The internal resistance per unit area of a material to an external force.
*   **Strain:** The deformation of a material in response to stress.
*   **Strength:** The ability of a material or structure to withstand applied loads without failure.
*   **Stiffness:** The resistance of a structural element to deformation under load.
*   **Stability:** The ability of a structure to maintain its shape and position under load.

---

### **2. Types of Loads on Formwork Systems**

Understanding the loads is the first step in any structural analysis. Formwork is subjected to various types of loads, which can be broadly categorized as:

#### **2.1. Dead Loads:**

These are permanent loads that are always present.

*   **Weight of the Formwork itself:** The self-weight of timber, steel, plywood, and any supporting elements (props, shores, scaffolding).
*   **Weight of Reinforcement:** The weight of steel bars placed within the concrete.
*   **Weight of Wet Concrete:** This is the most significant dead load. It's calculated based on the volume of concrete and its density.

    *   **Density of concrete:** Typically around 24 kN/m³ (or 150 lb/ft³).
    *   **Calculation:** Load = Volume of concrete x Density of concrete.

#### **2.2. Live Loads:**

These are temporary loads that are applied during the construction phase.

*   **Weight of Workers:** The presence of construction personnel on the formwork.
*   **Weight of Equipment:** Tools, small machinery, wheelbarrows, concrete vibrators.
*   **Impact Loads:** Sudden application of forces, such as dropping materials or tools.
*   **Accumulation of Materials:** Stacking of rebar, tools, or even small amounts of concrete.
*   **Wind Loads:** Significant in tall structures or exposed locations. These can cause lateral pressure and uplift.
*   **Seismic Loads:** Forces generated during earthquakes, especially relevant in seismic zones.

#### **2.3. Lateral Pressure of Wet Concrete:**

This is a critical load and a primary consideration for formwork design. It's the pressure exerted by the fluid-like fresh concrete against the form face.

*   **Factors influencing lateral pressure:**
    *   **Head of Concrete:** The vertical height of the wet concrete.
    *   **Rate of Pour:** Faster pours exert higher pressures.
    *   **Temperature of Concrete:** Higher temperatures can lead to increased pressure due to faster setting times and potential hydration heat.
    *   **Workability (Slump):** More fluid concrete exerts higher pressure.
    *   **Vibration:** Excessive vibration can liquefy the concrete, increasing pressure.
    *   **Addition of Admixtures:** Some admixtures can affect the setting time and pressure.
    *   **Curing Conditions:** Temperature and humidity.

*   **Simplified Calculation for Lateral Pressure (often used for preliminary design):**
    *   **Hydrostatic Pressure:** $P = \gamma_c \times h$, where $\gamma_c$ is the unit weight of concrete and $h$ is the height of concrete. This is a simplified approach and doesn't account for all factors.
    *   **More accurate empirical formulas:** Several codes and standards (e.g., ACI, EN) provide more sophisticated formulas that consider the rate of pour and temperature. For example, a commonly cited formula for vertical wall formwork pressure is:
        $P = \gamma_c \times H$ (for $H \le H_1$)
        $P = \gamma_c \times H_1$ (for $H_1 < H \le H_2$)
        $P = \gamma_c \times H_2$ (for $H_2 < H \le H_3$)
        Where:
        *   $H$ is the height of the pour.
        *   $H_1, H_2, H_3$ are critical heights based on pour rate and temperature.
        *   $\gamma_c$ is the unit weight of concrete.

    **Important Note:** The maximum lateral pressure generally occurs at the bottom of the pour or at a certain depth, not necessarily at the very bottom of the formwork. It's crucial to consult relevant building codes and standards for specific pressure calculations.

#### **2.4. Other Loads:**

*   **Buoyancy:** If formwork is submerged in water.
*   **Thermal Expansion/Contraction:** Due to temperature changes.

---

### **3. Structural Behavior of Formwork Components**

Formwork systems are typically comprised of various elements that behave like structural members in conventional buildings, but in a temporary capacity.

#### **3.1. Beam Action:**

*   **Concept:** Formwork panels (like plywood or steel sheets) and the supporting joists/wales act as beams spanning between supports.
*   **Loads:** They primarily carry the lateral pressure of concrete and distributed loads from workers or materials.
*   **Analysis:**
    *   **Bending Moment (M):** The internal moment due to the applied loads. For a simply supported beam with a uniformly distributed load (UDL) $w$ and span $L$, the maximum bending moment is $M = \frac{wL^2}{8}$.
    *   **Shear Force (V):** The internal shear force due to the applied loads. For the same beam, the maximum shear force is $V = \frac{wL}{2}$.
    *   **Deflection:** The vertical displacement of the beam under load. Excessive deflection can lead to an uneven surface for the concrete. For a simply supported beam with UDL, the maximum deflection is $\delta = \frac{5wL^4}{384EI}$, where $E$ is the modulus of elasticity and $I$ is the moment of inertia of the beam's cross-section.

#### **3.2. Column Action:**

*   **Concept:** Vertical supports like props, shores, or vertical posts in a scaffolding system act as columns.
*   **Loads:** They primarily carry the vertical loads from the supported formwork and the weight of concrete.
*   **Analysis:**
    *   **Axial Load (P):** The total vertical load acting on the column.
    *   **Compressive Stress:** Stress developed within the column due to the axial load ($Stress = \frac{P}{A}$, where $A$ is the cross-sectional area).
    *   **Buckling:** A critical consideration for columns. Buckling is the sudden lateral instability of a slender column under compression. The load at which buckling occurs depends on the column's length, cross-sectional shape, material properties, and end conditions. Euler's buckling formula for a pinned-pinned column is $P_{cr} = \frac{\pi^2 EI}{L^2}$.

#### **3.3. Diaphragm Action:**

*   **Concept:** When formwork panels are joined together, they can act as a rigid diaphragm, distributing lateral loads (like wind or construction loads) to vertical bracing elements.
*   **Application:** Especially important in large slab formwork or wall formwork where lateral stability is crucial.
*   **Analysis:** Involves analyzing the shear resistance and bending stiffness of the assembled panels.

---

### **4. Design Considerations and Calculations**

The structural analysis provides the forces and stresses. These are then used to select appropriate formwork materials and sizes.

#### **4.1. Material Properties:**

*   **Timber:** Strength varies significantly with species, grain orientation, and moisture content. Modulus of Elasticity ($E$) and allowable stresses (bending, shear, compression) are crucial.
*   **Steel:** High strength and stiffness. Modulus of Elasticity ($E$) and yield strength ($F_y$) are key parameters.
*   **Plywood:** Strength is generally along the grain and across the grain. Usually designed to act as a bending member (panel) or shear connector.

#### **4.2. Design of Beams (Joists, Wales, Soldiers):**

*   **Bending Strength:** The bending moment capacity of the member must be greater than or equal to the maximum bending moment due to the loads.
    *   $M_{allowable} \ge M_{actual}$
    *   $M_{allowable} = S \times \sigma_{allowable}$, where $S$ is the section modulus and $\sigma_{allowable}$ is the allowable bending stress.
*   **Shear Strength:** The shear capacity must exceed the maximum shear force.
    *   $V_{allowable} \ge V_{actual}$
    *   $V_{allowable}$ is related to the allowable shear stress and the cross-sectional area.
*   **Deflection Control:** The calculated deflection must be within acceptable limits (e.g., $\frac{L}{240}$ or $\frac{L}{360}$ for slab formwork, depending on the surface finish requirements).
    *   $\delta_{allowable} \ge \delta_{actual}$

#### **4.3. Design of Columns (Props, Shores):**

*   **Axial Load Capacity:** The column must be able to support the total axial load without exceeding its compressive strength or buckling.
    *   $P_{allowable} \ge P_{actual}$
    *   $P_{allowable} = A \times \sigma_{allowable}$ (for crushing)
    *   $P_{allowable}$ must also account for buckling loads.

#### **4.4. Connections:**

*   **Importance:** The strength and rigidity of the connections between formwork members are as critical as the members themselves. Weak connections can lead to premature failure.
*   **Types:** Nails, screws, bolts, clamps, wedges, special formwork hardware.
*   **Analysis:** Connections are analyzed for shear, tension, and bearing stresses.

---

### **5. Example Scenario: Slab Formwork Analysis**

Let's consider a simple concrete slab supported by formwork.

**Scenario:** A concrete slab of 150 mm thickness is to be cast. The formwork consists of plywood sheeting supported by timber joists, which are in turn supported by adjustable props.

**Assumptions:**

*   Slab Span: 4.0 m x 4.0 m
*   Slab Thickness: 150 mm (0.15 m)
*   Unit weight of concrete ($\gamma_c$): 24 kN/m³
*   Load from workers/materials (Live Load): 1.5 kN/m² (uniform distributed load on the formwork surface)
*   Plywood sheeting: 18 mm thick
*   Timber joists: 50 mm x 100 mm (actual dimensions) with an allowable bending stress ($\sigma_{allowable}$) of 10 N/mm² and an allowable shear stress ($\tau_{allowable}$) of 1.0 N/mm².
*   Deflection limit for plywood: $\frac{L}{300}$ (where $L$ is the span of the plywood panel).

**Steps:**

1.  **Determine Loads on Plywood Sheeting:**
    *   **Dead Load (Weight of concrete):**
        *   Load per m² = Slab Thickness x Unit weight of concrete = 0.15 m x 24 kN/m³ = 3.6 kN/m²
    *   **Live Load:** 1.5 kN/m²
    *   **Total Load on Plywood (w):** 3.6 kN/m² + 1.5 kN/m² = 5.1 kN/m² (This is a uniformly distributed load on the surface of the plywood)

2.  **Determine Span of Plywood Sheeting:**
    *   Assume the plywood is supported by timber joists at a spacing of 400 mm (0.4 m). This means the plywood acts as a beam spanning between joists with a span ($L_{ply}$) of 0.4 m.
    *   The load per unit length on a single plywood panel spanning between joists is:
        *   $w_{ply}$ = Load per m² x Joist Spacing = 5.1 kN/m² x 0.4 m = 2.04 kN/m

3.  **Analyze Plywood Sheeting as a Beam:**
    *   **Maximum Bending Moment (M) for plywood:**
        *   Assuming simply supported (although it's continuous over joists, this is a conservative estimate for a single span):
        *   $M_{ply} = \frac{w_{ply} \times (L_{ply})^2}{8} = \frac{2.04 \text{ kN/m} \times (0.4 \text{ m})^2}{8} = 0.0408 \text{ kNm}$
    *   **Section Modulus (S) of 18 mm plywood:** This is complex and depends on the wood grain direction and layers. For simplicity in this example, let's assume it can be treated as a thin plate and its bending capacity is primarily determined by its stiffness and tensile strength. However, in practice, plywood manufacturers provide span tables or load tables.

4.  **Analyze Timber Joists:**
    *   **Span of Joists ($L_{joist}$):** Assume joists span between beams or supports at 2.0 m.
    *   **Load on Joists:** The joists carry the load from the plywood panels. They are subjected to a uniformly distributed load from the plywood.
    *   **Load per unit length on a single joist:** The joist supports plywood over a width of 0.4 m.
        *   $w_{joist}$ = Load per unit length on plywood x Width supported by joist = 2.04 kN/m (This is incorrect).
        *   **Correct load on joist:** Load per m² x Joist Spacing = 5.1 kN/m² x 0.4 m = 2.04 kN/m (This is the UDL on the joist).
    *   **Maximum Bending Moment (M) for joist:**
        *   $M_{joist} = \frac{w_{joist} \times (L_{joist})^2}{8} = \frac{2.04 \text{ kN/m} \times (2.0 \text{ m})^2}{8} = 2.04 \text{ kNm}$

5.  **Check Timber Joist Strength:**
    *   **Section Modulus (S) of 50 mm x 100 mm timber:**
        *   $S = \frac{bd^2}{6} = \frac{50 \text{ mm} \times (100 \text{ mm})^2}{6} = 83333.3 \text{ mm}^3 = 8.33 \times 10^{-5} \text{ m}^3$
    *   **Allowable Bending Moment:**
        *   $M_{allowable} = S \times \sigma_{allowable} = (8.33 \times 10^{-5} \text{ m}^3) \times (10 \times 10^6 \text{ N/m}^2) = 833 \text{ Nm} = 0.833 \text{ kNm}$
    *   **Check Bending:** $M_{allowable} (0.833 \text{ kNm}) < M_{joist} (2.04 \text{ kNm})$. **The joist is NOT strong enough to resist the bending moment.** This indicates the joist size or spacing needs to be revised, or a stronger timber is required.

    *   **Shear Force (V) for joist:**
        *   $V_{joist} = \frac{w_{joist} \times L_{joist}}{2} = \frac{2.04 \text{ kN/m} \times 2.0 \text{ m}}{2} = 2.04 \text{ kN}$
    *   **Cross-sectional Area (A) of joist:** $A_{joist} = 50 \text{ mm} \times 100 \text{ mm} = 5000 \text{ mm}^2$
    *   **Allowable Shear Force:**
        *   Shear stress is more complex for timber. A simplified approach for rectangular beams is $V_{allowable} = \tau_{allowable} \times \frac{2}{3} A_{joist}$ (incorporating a factor of safety for shear).
        *   $V_{allowable} \approx (1.0 \times 10^6 \text{ N/m}^2) \times \frac{2}{3} \times (5000 \times 10^{-6} \text{ m}^2) = 3333 \text{ N} = 3.33 \text{ kN}$
    *   **Check Shear:** $V_{allowable} (3.33 \text{ kN}) \ge V_{joist} (2.04 \text{ kN})$. The joist is adequate for shear.

6.  **Check Joist Deflection:**
    *   **Moment of Inertia (I) of joist:**
        *   $I = \frac{bd^3}{12} = \frac{50 \text{ mm} \times (100 \text{ mm})^3}{12} = 4.167 \times 10^6 \text{ mm}^4 = 4.167 \times 10^{-6} \text{ m}^4$
    *   **Modulus of Elasticity (E) for typical timber:** Let's assume $E = 10 \text{ GPa} = 10 \times 10^9 \text{ N/m}^2$.
    *   **Calculated deflection ($\delta$) for joist:**
        *   $\delta_{joist} = \frac{5 w_{joist} L_{joist}^4}{384 E I}$
        *   Convert $w_{joist}$ to N/m: $2.04 \text{ kN/m} = 2040 \text{ N/m}$
        *   $\delta_{joist} = \frac{5 \times 2040 \text{ N/m} \times (2.0 \text{ m})^4}{384 \times (10 \times 10^9 \text{ N/m}^2) \times (4.167 \times 10^{-6} \text{ m}^4)} \approx 0.0049 \text{ m} = 4.9 \text{ mm}$
    *   **Allowable deflection:** $\frac{L_{joist}}{300} = \frac{2000 \text{ mm}}{300} \approx 6.67 \text{ mm}$
    *   **Check Deflection:** $\delta_{allowable} (6.67 \text{ mm}) \ge \delta_{joist} (4.9 \text{ mm})$. The deflection is acceptable.

**Conclusion from Example:** The timber joists are the weakest link in this simplified analysis, failing in bending. The joist size needs to be increased, or the spacing of the plywood supports (or the joists themselves) needs to be reduced.

---

### **6. Practice Questions/Exercises**

**Question 1:**
List and briefly describe the four main categories of loads that act on formwork systems.

**Question 2:**
A concrete wall is to be formed with a pour height of 3.0 meters. The unit weight of concrete is 24 kN/m³.
a) Calculate the hydrostatic pressure of the wet concrete at the bottom of the pour using the formula $P = \gamma_c \times h$.
b) If the formwork panel is supported by wales spaced at 1.5 meters vertically, what is the total load on the top wale and the bottom wale? (Assume the pressure varies linearly from 0 at the top of the pour to its maximum at the bottom).

**Question 3:**
A timber beam used as a formwork joist has a rectangular cross-section of 75 mm x 150 mm and spans 2.5 meters. It carries a uniformly distributed load of 3.0 kN/m. The allowable bending stress for the timber is 9 N/mm² and its Modulus of Elasticity is 12 GPa.
a) Calculate the maximum bending moment in the joist.
b) Calculate the section modulus of the joist.
c) Determine if the joist is adequate in bending.
d) Calculate the maximum deflection of the joist and comment on its adequacy if the allowable deflection is L/300.

---

### **7. Answers to Practice Questions**

**Answer 1:**
The four main categories of loads on formwork are:
*   **Dead Loads:** Permanent loads including the self-weight of formwork, reinforcement, and wet concrete.
*   **Live Loads:** Temporary loads like workers, equipment, impact, and accumulated materials.
*   **Lateral Pressure of Wet Concrete:** The pressure exerted by fluid-like fresh concrete against the form face, influenced by pour height, rate of pour, temperature, workability, and vibration.
*   **Other Loads:** Including wind, seismic, buoyancy, and thermal forces.

**Answer 2:**
Given: Pour height ($h$) = 3.0 m, Unit weight of concrete ($\gamma_c$) = 24 kN/m³

a) **Hydrostatic Pressure at the bottom:**
   $P = \gamma_c \times h = 24 \text{ kN/m}^3 \times 3.0 \text{ m} = 72 \text{ kN/m}^2$

b) **Load on Wales:** The pressure distribution is triangular, peaking at 72 kN/m² at the bottom.
   *   **Load on the top wale (at 0m from top of pour):** Pressure is 0 kN/m². Therefore, the load on the top wale is 0 kN/m of wale length.
   *   **Load on the bottom wale (at 1.5m from top of pour):** The pressure at this depth is $P = 24 \text{ kN/m}^3 \times 1.5 \text{ m} = 36 \text{ kN/m}^2$.
      The load on the bottom wale is the pressure multiplied by the width it supports. Assuming the wale supports the formwork over a 1.0 m width, the load would be $36 \text{ kN/m}^2 \times 1.0 \text{ m} = 36 \text{ kN/m}$ of wale length.
      *(Note: This assumes the wale supports the formwork panel along its entire length. In reality, the load is the pressure acting on the form face, which is transferred to the wale. If the question implies the wale is a beam itself, and its span is 1.5m, then the load would be the pressure at that depth distributed over the width of the panel it supports.)*

      Let's re-interpret the question as the pressure acting on the form face. The wales are the horizontal members that brace the formwork. The pressure acts on the formwork panels, and these pressures are transferred to the wales.

      *   **Pressure at 0m:** 0 kN/m²
      *   **Pressure at 1.5m:** 36 kN/m²
      *   **Pressure at 3.0m:** 72 kN/m²

      Assuming the wales are spaced vertically at 1.5 m intervals (e.g., one at the top, one in the middle, one at the bottom):

      *   **Load on the top wale (supporting formwork from 0m to 1.5m):** The average pressure on the formwork between 0m and 1.5m is the area under the pressure curve divided by the height: $(0 + 36)/2 = 18 \text{ kN/m}^2$. If the wale supports a panel width of 1m, the load on this wale is $18 \text{ kN/m}^2 \times 1 \text{ m} = 18 \text{ kN/m}$ of wale length.
      *   **Load on the middle wale (supporting formwork from 1.5m to 3.0m):** The average pressure on the formwork between 1.5m and 3.0m is $(36 + 72)/2 = 54 \text{ kN/m}^2$. If the wale supports a panel width of 1m, the load on this wale is $54 \text{ kN/m}^2 \times 1 \text{ m} = 54 \text{ kN/m}$ of wale length.

      *(This interpretation assumes the wales are horizontal beams and the load is transferred from the vertical formwork panels to them.)*

**Answer 3:**
Given: Beam cross-section = 75 mm x 150 mm, Span ($L$) = 2.5 m, UDL ($w$) = 3.0 kN/m, $\sigma_{allowable}$ = 9 N/mm², $E$ = 12 GPa = 12 x 10⁹ N/m²

a) **Maximum Bending Moment (M):**
   $M = \frac{wL^2}{8} = \frac{(3.0 \text{ kN/m}) \times (2.5 \text{ m})^2}{8} = 2.34 \text{ kNm}$

b) **Section Modulus (S):**
   For a rectangular section, $S = \frac{bd^2}{6}$. Assuming the 150 mm is the depth:
   $S = \frac{75 \text{ mm} \times (150 \text{ mm})^2}{6} = 281,250 \text{ mm}^3 = 2.81 \times 10^{-4} \text{ m}^3$

c) **Check Bending:**
   Allowable Moment ($M_{allowable}$) $= S \times \sigma_{allowable}$
   Convert $\sigma_{allowable}$ to N/m²: $9 \text{ N/mm}^2 = 9 \times 10^6 \text{ N/m}^2$
   $M_{allowable} = (2.81 \times 10^{-4} \text{ m}^3) \times (9 \times 10^6 \text{ N/m}^2) = 2529 \text{ Nm} = 2.53 \text{ kNm}$
   **Check:** $M_{allowable} (2.53 \text{ kNm}) \ge M (2.34 \text{ kNm})$. **Yes, the joist is adequate in bending.**

d) **Maximum Deflection ($\delta$):**
   Moment of Inertia (I) = $\frac{bd^3}{12} = \frac{75 \text{ mm} \times (150 \text{ mm})^3}{12} = 21,093,750 \text{ mm}^4 = 2.11 \times 10^{-5} \text{ m}^4$
   Convert $w$ to N/m: $3.0 \text{ kN/m} = 3000 \text{ N/m}$
   $\delta = \frac{5 w L^4}{384 E I} = \frac{5 \times (3000 \text{ N/m}) \times (2.5 \text{ m})^4}{384 \times (12 \times 10^9 \text{ N/m}^2) \times (2.11 \times 10^{-5} \text{ m}^4)} \approx 0.0020 \text{ m} = 2.0 \text{ mm}$

   Allowable Deflection: $\frac{L}{300} = \frac{2500 \text{ mm}}{300} \approx 8.33 \text{ mm}$
   **Check:** $\delta_{allowable} (8.33 \text{ mm}) \ge \delta (2.0 \text{ mm})$. **Yes, the deflection is adequate.**

---

### **Important Points to Remember:**

*   **Load Identification is Key:** Accurately identifying and quantifying all possible loads is the foundation of formwork structural analysis.
*   **Lateral Pressure of Concrete:** This is often the dominant load for vertical formwork and requires careful consideration of influencing factors beyond simple hydrostatic pressure. Always refer to relevant codes.
*   **Factor of Safety:** Formwork design implicitly or explicitly includes factors of safety to account for uncertainties in loads, material properties, and workmanship.
*   **Connections Matter:** The strength and rigidity of connections between formwork components are critical for overall system stability and performance.
*   **Deflection Limits:** Control of deflection is crucial for achieving the desired concrete surface finish and to prevent excessive cracking of the partially set concrete.
*   **Buckling:** Slender vertical members (props, shores) are susceptible to buckling, and their design must account for this failure mode.
*   **System Behavior:** Formwork components do not act in isolation. Consider how loads are transferred through the entire system.
*   **Temporary Nature:** While designed for safety, formwork is temporary. Its strength is often less than permanent structures, and its behaviour under load can be different.
*   **Code Compliance:** Always design formwork in accordance with relevant building codes and standards (e.g., ACI, EN, BS).

---
This concludes Module 2, Topic: Structural Analysis of Formwork Systems.
