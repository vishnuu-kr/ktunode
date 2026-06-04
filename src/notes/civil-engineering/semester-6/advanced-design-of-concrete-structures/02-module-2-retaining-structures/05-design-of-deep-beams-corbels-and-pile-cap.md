---
title: "Design of Deep beams, Corbels and Pile cap"
subject: "ADVANCED DESIGN OF CONCRETE STRUCTURES"
module: "Module 2: Retaining Structures"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8110d8"
status: "completed"
scrapedAt: "2026-05-20T18:51:49.399Z"
---
# ADVANCED DESIGN OF CONCRETE STRUCTURES

## Module 2: Retaining Structures

### Topic: Design of Deep Beams, Corbels, and Pile Caps

---

### **Learning Outcomes (LOs)**

This module aims to equip students with the knowledge and skills to:

*   **LO1:** Understand the behavior and design principles of deep beams.
*   **LO2:** Analyze and design corbels according to relevant codes.
*   **LO3:** Design and analyze pile caps for supporting multiple piles and superstructure loads.
*   **LO4:** Recognize the structural behavior and key design considerations for each of these structural elements.

---

### **1. Design of Deep Beams**

#### **1.1 Introduction to Deep Beams**

*   **Definition:** A deep beam is a beam whose clear span to effective depth ratio ($L_c/d$) is less than 2 (or $L/d < 2.5$ depending on the code). In essence, the beam's depth is significant relative to its span.
*   **Behavior:** Unlike slender beams where shear deformation is negligible compared to flexural deformation, in deep beams, shear deformation plays a significant role in the overall deflection and stress distribution. They often behave more like deep girders, with load transfer occurring through arch action or strut-and-tie mechanisms.
*   **Classification:**
    *   **Simply Supported Deep Beams:** Supported at their ends.
    *   **Contiuous Deep Beams:** Span over multiple supports.
    *   **Wall-like Beams:** Extremely deep beams where the depth is significantly greater than the span.

#### **1.2 Key Concepts and Definitions**

*   **Clear Span ($L_c$):** The distance between the supports.
*   **Effective Depth ($d$):** The distance from the extreme compression fiber to the centroid of the tension reinforcement.
*   **Span-to-Depth Ratio ($L_c/d$):** The primary parameter for distinguishing between deep and slender beams.
*   **Shear Span Ratio ($a/d$):** Often used in strut-and-tie models, where 'a' is the shear span (distance between load point and support). For deep beams, $a/d$ is typically small (e.g., < 2.5).
*   **Arch Action:** In deep beams, loads can be transferred to supports via a compression strut formed within the beam's concrete.
*   **Strut-and-Tie Model (STM):** A powerful method for analyzing and designing deep beams and other D-regions (Discontinuity Regions). It visualizes the load transfer as a system of compression struts and tension ties.

#### **1.3 Design Methods for Deep Beams**

The design of deep beams is more complex than for slender beams due to the influence of shear and localized stresses. Common methods include:

*   **Strut-and-Tie Model (STM):**
    *   **Concept:** Divides the structure into a truss-like system of compression struts (concrete) and tension ties (reinforcement).
    *   **Steps:**
        1.  **Identify D-regions:** Regions where the strain distribution is non-linear (e.g., near supports, concentrated loads, openings).
        2.  **Idealize the STM:** Draw a simplified truss model that represents the flow of forces. Struts follow lines of compression, and ties follow lines of tension.
        3.  **Determine Strut Capacity:** Concrete struts must be checked for crushing under compression. Effective width of the strut and concrete strength are crucial.
        4.  **Determine Tie Capacity:** Reinforcement (tension ties) must be provided to resist the tensile forces. Reinforcement detailing (anchorage, development length) is critical.
        5.  **Check Nodal Zones:** The intersection points (nodes) where struts and ties meet must be checked for bearing and crushing of concrete.
    *   **Advantages:** Excellent for understanding force flow, effective for complex geometries and load cases.
    *   **Limitations:** Requires engineering judgment to create an appropriate model.

*   **Linear Elastic Analysis with Shear Modification:**
    *   Some codes allow linear elastic analysis with modifications to account for shear deformation and shear stresses.
    *   This involves adjusting bending moments and shear forces based on the span-to-depth ratio.

*   **Empirical and Semi-Empirical Methods:**
    *   Based on experimental data and observations.
    *   Often embedded within code provisions for specific deep beam configurations.

#### **1.4 Design Considerations**

*   **Reinforcement:**
    *   **Flexural Reinforcement:** Similar to slender beams, but anchorage lengths and development lengths need careful consideration due to the high shear forces and potential for cracking.
    *   **Shear Reinforcement:** Often provided as a mesh of reinforcement in both directions, particularly in STM, to act as tension ties. Horizontal reinforcement is crucial for controlling shear cracking.
*   **Cracking:** Deep beams are prone to cracking, especially near the supports and under concentrated loads. Adequate reinforcement is needed to control crack widths.
*   **Serviceability:** Deflection limits are important, and shear deformation significantly affects overall deflection.

#### **1.5 Example: Simple Deep Beam using STM**

*   **Problem:** Design a simply supported deep beam of span $L = 4$m, supporting a uniformly distributed load $w$ at the top. The beam has a depth $D$ and width $b$.
*   **Assumptions for STM:**
    *   Assume the load is concentrated at the center for simplicity.
    *   Identify a likely strut path from the load to the supports and a tension tie path at the bottom.
*   **Simplified STM:**
    *   A triangular strut angle $\theta$ can be defined.
    *   The vertical load $V$ is resolved into horizontal and vertical components along the strut and tie.
    *   Calculate the force in the strut ($C_s$) and tie ($T$).
    *   Check the capacity of the concrete strut for crushing.
    *   Design the tension tie reinforcement ($A_s$) based on $T$ and the steel yield strength.
    *   Reinforcement needs to be anchored properly at the nodes and along its length.

#### **1.6 Important Points to Remember for Deep Beams**

*   **$L_c/d < 2$ is the defining characteristic.**
*   **Shear deformation is dominant.**
*   **Strut-and-Tie Modeling is the most appropriate and versatile method.**
*   **Focus on concrete strut capacity and reinforcement tie capacity.**
*   **Nodal zones and reinforcement anchorage are critical.**
*   **Horizontal reinforcement is essential for shear resistance.**

---

### **2. Design of Corbels**

#### **2.1 Introduction to Corbels**

*   **Definition:** A corbel (or bracket) is a structural element projecting from a wall or column to support a load, typically a beam, ledger, or projecting floor. It is characterized by its short span and large depth, often exhibiting deep beam behavior.
*   **Key Feature:** The ratio of the projection length ($C$) to the effective depth ($d$) is typically less than 1 ($C/d < 1$).
*   **Load Transfer Mechanism:** Corbels are prone to failure by shear, flexure, and bearing. The load is transferred to the supporting member through a combination of strut-and-tie action, especially at the connection.

#### **2.2 Key Concepts and Definitions**

*   **Projection Length ($C$):** The distance from the face of the supporting member to the outermost point of load application.
*   **Effective Depth ($d$):** The distance from the extreme compression fiber to the centroid of the tension reinforcement.
*   **Bearing Area:** The area over which the load is applied to the corbel.
*   **Reinforcement Ratio:** Minimum reinforcement requirements are crucial for corbel design.

#### **2.3 Design Methods for Corbels**

Corbel design is often governed by the strut-and-tie model due to the high shear and localized stress concentrations. Codes provide specific guidelines, often based on STM principles.

*   **Strut-and-Tie Model for Corbels:**
    *   **Load Application:** Assume the load is applied at the outer face of the corbel.
    *   **Strut:** A diagonal concrete strut forms from the load application point to the underside of the corbel at the support face.
    *   **Tie:** A horizontal tension tie of reinforcement is placed near the top surface of the corbel to resist the horizontal component of the strut force.
    *   **Force Calculation:**
        *   Let $V_u$ be the ultimate vertical load.
        *   Let $C$ be the projection length and $d$ be the effective depth.
        *   The angle of the strut, $\theta$, is often taken as approximately $28.3^\circ$ to $45^\circ$ or as determined by the STM. A common assumption is $\theta$ such that $\tan \theta = d/C$. However, for consistency with STM, it's better to define based on the assumed strut path.
        *   The force in the tension tie ($T_u$) is $V_u \cot \theta$.
        *   The force in the compression strut ($C_u$) is $V_u / \sin \theta$.
    *   **Reinforcement Design:** The tension tie reinforcement ($A_s$) is designed to resist $T_u$: $A_s = T_u / f_y$.
    *   **Reinforcement Detailing:**
        *   The tension tie reinforcement must be anchored effectively within the supporting member.
        *   Additional reinforcement may be required to resist secondary moments and to provide confinement.
        *   **Minimum Reinforcement:** Codes typically specify minimum reinforcement in both directions to control cracking and enhance ductility.
    *   **Bearing Check:** The bearing area of the load on the corbel and the bearing area of the corbel on the supporting member must be checked.
    *   **Shear Capacity:** The concrete strut capacity must be checked against crushing under the strut force $C_u$. Code provisions usually simplify this by checking the shear resistance of the corbel based on the applied shear force and concrete strength.

#### **2.4 Design Considerations**

*   **Reinforcement Requirements:**
    *   **Primary Tension Reinforcement:** Placed near the top surface to act as the tension tie.
    *   **Secondary Reinforcement:** A minimum amount of reinforcement should be placed near the bottom face and at right angles to the primary tension reinforcement to resist cracking and enhance shear resistance.
*   **Anchorage:** Crucial for the tension tie reinforcement to ensure it can develop its full yield strength.
*   **Bearing:** Localized bearing stresses under the applied load and at the support must be checked.
*   **Factor of Safety:** Loads are factored up, and material strengths are factored down according to code provisions.

#### **2.5 Example: Design of a Corbel**

*   **Problem:** Design a corbel to support a factored ultimate load of $V_u = 200$ kN. The projection length is $C = 250$ mm. The effective depth to the tension reinforcement is $d = 300$ mm. The supporting member is concrete with $f_{ck} = 30$ N/mm$^2$, and the reinforcement is steel with $f_y = 415$ N/mm$^2$. Assume the width of the corbel is $b = 200$ mm.
*   **Assumed Strut Angle:** Let's assume a strut angle $\theta$ such that $\tan \theta = d/C = 300/250 = 1.2$.
    *   $\theta = \arctan(1.2) \approx 50.19^\circ$.
    *   $\cot \theta = 1/1.2 \approx 0.833$.
    *   $\sin \theta \approx 0.768$.
*   **Force in Tension Tie ($T_u$):**
    *   $T_u = V_u \cot \theta = 200 \text{ kN} \times 0.833 \approx 166.6$ kN.
*   **Required Area of Tension Reinforcement ($A_s$):**
    *   $A_s = T_u / f_y = (166.6 \times 10^3 \text{ N}) / (415 \text{ N/mm}^2) \approx 401.4$ mm$^2$.
*   **Reinforcement Selection:** Use two bars of diameter 16 mm: $2 \times \pi \times (16/2)^2 = 2 \times 201.1 = 402.2$ mm$^2$. This is sufficient.
*   **Secondary Reinforcement:** Provide minimum reinforcement as per code, typically a percentage of the area of the tension reinforcement or a minimum area based on concrete strength. For example, provide a distribution of $10$ mm bars at $150$ mm spacing in the bottom face.
*   **Bearing Check:** Check the bearing area of the applied load and the bearing area at the support face.
*   **Concrete Strength Check:** Check the capacity of the concrete strut under the force $C_u = V_u / \sin \theta = 200 / 0.768 \approx 250.6$ kN. This would typically be checked against the allowable bearing stress of concrete, considering effective widths of the strut. Code formulas usually incorporate these checks implicitly.

#### **2.5.1 Practice Question (Corbel)**

Design a corbel with a projection length of $C = 300$ mm and an effective depth of $d = 350$ mm to support a factored ultimate load of $V_u = 250$ kN. The width of the corbel is $b = 250$ mm. Use concrete with $f_{ck} = 35$ N/mm$^2$ and steel with $f_y = 500$ N/mm$^2$.

**Answer:**

*   **Assumed Strut Angle:** $\tan \theta = d/C = 350/300 \approx 1.167$.
    *   $\theta = \arctan(1.167) \approx 49.39^\circ$.
    *   $\cot \theta \approx 1/1.167 \approx 0.857$.
    *   $\sin \theta \approx 0.759$.
*   **Force in Tension Tie ($T_u$):**
    *   $T_u = V_u \cot \theta = 250 \text{ kN} \times 0.857 \approx 214.25$ kN.
*   **Required Area of Tension Reinforcement ($A_s$):**
    *   $A_s = T_u / f_y = (214.25 \times 10^3 \text{ N}) / (500 \text{ N/mm}^2) \approx 428.5$ mm$^2$.
*   **Reinforcement Selection:** Use two bars of diameter 18 mm: $2 \times \pi \times (18/2)^2 = 2 \times 254.5 = 509$ mm$^2$. This is sufficient.
*   **Secondary Reinforcement:** Provide minimum reinforcement as per code.

#### **2.6 Important Points to Remember for Corbels**

*   **$C/d < 1$ is typical.**
*   **Strut-and-tie action is dominant.**
*   **Adequate tension reinforcement must be provided and anchored properly.**
*   **Minimum reinforcement is crucial for crack control and shear resistance.**
*   **Bearing stresses must be checked.**

---

### **3. Design of Pile Caps**

#### **3.1 Introduction to Pile Caps**

*   **Definition:** A pile cap is a thick concrete slab that sits on top of a group of piles, distributing the loads from the superstructure (columns, walls) to the individual piles.
*   **Purpose:**
    *   To unify the pile group and ensure loads are distributed evenly.
    *   To transfer loads from the superstructure to the piles.
    *   To protect the pile heads from damage and environmental effects.
    *   To provide a level base for columns or walls.
*   **Behavior:** Pile caps act as a rigid or semi-rigid diaphragm, transferring loads to the piles. They are subjected to bending moments, shear forces, and punching shear.

#### **3.2 Key Concepts and Definitions**

*   **Pile Group:** A collection of piles acting together to support a load.
*   **Pile Head:** The top of a pile, usually embedded within the pile cap.
*   **Superstructure Load:** The load transmitted from the column or wall to the pile cap.
*   **Pile Capacity:** The ultimate load-carrying capacity of an individual pile.
*   **Distribution of Load:** The mechanism by which the load from the superstructure is shared by the piles.
*   **Punching Shear:** Shear failure around a concentrated load, such as the point where a pile head connects to the cap.
*   **Beam Shear:** Shear forces acting along the section of the pile cap, similar to beam shear.
*   **Bending Moment:** Moments induced in the pile cap due to the load distribution and pile reactions.
*   **Effective Depth of Pile Cap:** The distance from the compression face to the centroid of the tensile reinforcement.

#### **3.3 Analysis of Pile Caps**

The analysis of pile caps involves determining the bending moments, shear forces, and punching shear forces acting on the cap due to the superstructure loads and the pile reactions.

*   **Load Distribution:**
    *   **Rigid Cap Assumption:** Assumes the pile cap is infinitely rigid, distributing the load equally to all piles (if the load is centered).
    *   **Flexible Cap Assumption:** Considers the bending of the cap, with the load being distributed based on the relative stiffness of the cap and the piles. This is more realistic.
    *   **Method of Analysis:**
        1.  **Pile Reactions:** Determine the load acting on each pile. This is typically done by considering the overall equilibrium and moments due to eccentric loads. For a centered load on a group of 9 piles, the load on each pile would be the total load divided by 9. If the load is eccentric, piles on one side will carry more load.
        2.  **Consider Pile Cap as a Slab:** Treat the pile cap as a slab supported by the piles.
        3.  **Determine Load Distribution to Piles:** Using principles of statics and structural analysis, calculate the upward forces (pile reactions) from each pile.
        4.  **Calculate Bending Moments and Shear Forces:** Treat the pile cap as a slab spanning between piles or over individual piles. The most critical sections for bending and shear are usually at the face of the column or at the pile heads.

*   **Design Methods for Bending and Shear:**
    *   **Beam Analogy:** Consider strips of the pile cap as beams spanning between piles.
    *   **Slab Analogy:** Treat the pile cap as a two-way slab, considering bending and shear in both directions.
    *   **Critical Sections:**
        *   **Bending Moment:** Critical section for bending is typically at the face of the column (for cantilever action) or between piles.
        *   **Beam Shear:** Critical section for beam shear is usually at the face of the column or at the pile head.
        *   **Punching Shear:** Critical section for punching shear is usually at a distance of $d/2$ from the face of the column or around the pile heads.

#### **3.4 Design of Pile Caps**

The design involves ensuring adequate concrete strength and reinforcement to resist the calculated bending moments, shear forces, and punching shear.

*   **Reinforcement Requirements:**
    *   **Bending Reinforcement:** Top reinforcement is typically provided to resist positive bending moments (acting as a slab spanning between piles). Bottom reinforcement is provided to resist negative bending moments, especially in larger pile caps acting as continuous slabs.
    *   **Shear Reinforcement:**
        *   **Beam Shear:** If beam shear stresses exceed the concrete's capacity, shear reinforcement (stirrups) may be required. However, due to the thickness of pile caps, shear failure is often critical around concentrated loads.
        *   **Punching Shear:** This is a critical design aspect. If punching shear stresses around the pile heads or column exceed the concrete's capacity, shear reinforcement (e.g., stirrups, shear heads) must be provided.
    *   **Minimum Reinforcement:** Codes specify minimum reinforcement to control cracking and improve ductility.

*   **Design Steps:**
    1.  **Determine Pile Group Layout and Size:** Based on the column load and individual pile capacity.
    2.  **Calculate Superstructure Load:** Factored load from the column/wall.
    3.  **Determine Pile Reactions:** Distribute the superstructure load to the piles.
    4.  **Analyze for Bending Moments and Shear Forces:** Use appropriate structural analysis methods.
    5.  **Design Reinforcement for Bending:** Calculate the required area of steel for the critical bending moments.
    6.  **Check Shear Capacity:**
        *   **Beam Shear:** Check at the critical section.
        *   **Punching Shear:** Check around the column base and around the pile heads. Provide shear reinforcement if necessary.
    7.  **Detail Reinforcement:** Ensure proper anchorage and spacing of bars.

#### **3.5 Example: Design of a Two-Pile Cap**

*   **Problem:** Design a pile cap to support a single column carrying a factored axial load of $P_u = 1000$ kN. The pile cap supports two piles, each with a capacity of $800$ kN. The piles are spaced at $1.5$ m center to center. The column has a square section of $400 \times 400$ mm. Use concrete grade $f_{ck} = 30$ N/mm$^2$ and steel grade $f_y = 415$ N/mm$^2$. Assume pile diameter is $400$ mm.
*   **Load Distribution:**
    *   Total load = $1000$ kN.
    *   Pile spacing = $1.5$ m.
    *   Assume the column is centered over the two piles.
    *   Load on each pile = $1000$ kN / 2 = $500$ kN. (This is within the pile capacity).
*   **Pile Cap Dimensions:**
    *   Assume pile cap width (perpendicular to the pile line) is governed by the column width and half pile diameter on each side: say, $0.4$ m (column) + $2 \times (0.4 \text{ m} / 2) = 0.8$ m. Let's assume a width $B = 0.8$ m.
    *   Length of pile cap (parallel to pile line) is pile spacing + pile diameters: $1.5$ m + $2 \times 0.4$ m = $2.3$ m. Let's assume a length $L_{cap} = 2.3$ m.
*   **Pile Cap Depth:** Assume a trial depth for the pile cap. Let's assume the depth $D_{cap} = 600$ mm (0.6 m) and the effective depth $d = 550$ mm (assuming $50$ mm cover).
*   **Analysis (Simplified Beam Analogy):**
    *   Consider a strip of the pile cap of width $1$ m.
    *   The column load is $1000$ kN / $0.8$ m width = $1250$ kN/m.
    *   Pile reactions are $500$ kN / $0.8$ m width = $625$ kN/m.
    *   The critical section for bending moment is at the face of the column. The distance from the center of the pile to the column face is $(1.5 \text{ m} / 2) - (0.4 \text{ m} / 2) = 0.75 \text{ m} - 0.2 \text{ m} = 0.55$ m.
    *   Bending Moment ($M_u$) at the column face:
        *   Moment from pile reaction = $625 \text{ kN/m} \times 0.55 \text{ m} = 343.75$ kNm/m.
        *   Moment from column load = $-1250 \text{ kN/m} \times 0.55 \text{ m} = -687.5$ kNm/m.
        *   Net $M_u = 343.75 - 687.5 = -343.75$ kNm/m. This means the top steel will be in tension.
    *   Beam Shear ($V_u$) at the column face:
        *   $V_u = (\text{Pile reaction per meter}) - (\text{Column load per meter}) \times (\text{distance to critical section})$
        *   $V_u = 625 \text{ kN/m} - 1250 \text{ kN/m} \times 0.55 \text{ m} = 625 - 687.5 = -62.5$ kN/m. This indicates a negative shear, suggesting the column load is trying to push the cap down between the piles. The critical shear will likely be in the other direction, or we need to consider the overall behavior.

    *   **Alternative Simplified Analysis:** Consider the pile cap as a beam spanning between pile centers.
        *   Span between pile centers = $1.5$ m.
        *   Assume column is centered.
        *   Load on the pile cap $= 1000$ kN.
        *   Load on each pile $= 500$ kN.
        *   The pile cap acts as a beam. The critical section for bending is at the center of the span between the piles (if no column is present), or at the face of the column.
        *   Consider the bending moment due to the difference in load distribution. The "lever arm" for the pile reactions relative to the column center is $0.75$ m.
        *   $M_u$ at the column center $= (500 \text{ kN} \times 0.75 \text{ m}) - (500 \text{ kN} \times 0.75 \text{ m}) = 0$. This simplification is not correct.

    *   **Correct approach for a two-pile cap:**
        *   The column load $P_u$ is supported by two piles. Pile reactions are $P_1 = P_2 = P_u / 2 = 500$ kN.
        *   The pile cap acts as a beam of span $1.5$ m, with the column load at the center and pile reactions at the ends.
        *   $M_u$ at the center $= (500 \text{ kN} \times 0.75 \text{ m}) - (1000 \text{ kN} / 2 \times 0.75 \text{ m}) = 375 - 375 = 0$. This is again incorrect because the load distribution is not uniform.

    *   **Actual Analysis:** The column load creates a moment on the pile cap relative to the piles.
        *   Consider the pile cap as a beam spanning between the pile centers.
        *   The column is located at the center of the span.
        *   The pile reactions are $500$ kN at each pile.
        *   The critical section for bending is at the center of the span between the piles.
        *   The bending moment at the center is $M_u = (500 \text{ kN} \times 0.75 \text{ m}) = 375$ kNm.
        *   The shear force at the face of the pile is $V_u = 500$ kN.
        *   The critical shear section is at the face of the pile. The distance from the center of the pile to the face of the $400$ mm column is $0.75 \text{ m} - 0.2 \text{ m} = 0.55$ m.

*   **Design for Bending:**
    *   $M_u = 375$ kNm.
    *   Assume the width of the pile cap is $B = 1.0$ m (for calculation simplicity, representing a unit width strip). The column width is $0.4$ m.
    *   The critical section for bending is at the center of the span between piles. However, with a column at the center, the bending can be more complex.
    *   **Consider the cap as a beam spanning between the pile reactions.** The column load is at the center.
    *   The bending moment at the column face is $M_u = 500 \text{ kN} \times 0.75 \text{ m} = 375$ kNm.
    *   Let's assume the cap width is $1.0$ m. Effective depth $d = 550$ mm.
    *   $M_u = 375 \text{ kNm} = 375 \times 10^6$ Nmm.
    *   Required steel area $A_s$: Using $M_u = 0.87 f_y A_s z$, where $z = 0.9d = 0.9 \times 550 = 495$ mm.
    *   $A_s = (375 \times 10^6) / (0.87 \times 415 \times 495) \approx 1759$ mm$^2$.
    *   Provide this reinforcement in the top of the pile cap, distributed across the width. E.g., 16 bars of 12 mm diameter: $16 \times \pi \times (12/2)^2 = 16 \times 113.1 = 1809.6$ mm$^2$.

*   **Check Shear:**
    *   **Beam Shear:** Consider the shear force at the face of the pile. $V_u = 500$ kN.
    *   Shear stress $\tau_v = V_u / (b \times d) = (500 \times 10^3 \text{ N}) / (1000 \text{ mm} \times 550 \text{ mm}) \approx 0.91$ N/mm$^2$.
    *   Check against allowable shear stress $v_{c,max}$ for the concrete. For $f_{ck} = 30$, $v_{c,max}$ is typically around $2.5 \sqrt{f_{ck}}$ or higher depending on the code. If $\tau_v < v_c$, no shear reinforcement is needed for beam shear.
    *   **Punching Shear:** Critical section is at $d/2$ from the column face. $d/2 = 550/2 = 275$ mm.
    *   Perimeter of the critical section = $2 \times (400 + 2 \times 275) + 2 \times (400 + 2 \times 275)$ is wrong.
    *   Perimeter of critical section around the column $= 4 \times (400 + 2 \times 275) = 4 \times (400 + 550) = 4 \times 950 = 3800$ mm.
    *   Area of the critical section $= 3800 \times D_{cap} = 3800 \times 600$ is wrong.
    *   Area of the critical section around the column $= 3800 \text{ mm} \times 0.6 \text{ m}$ (depth) is wrong.
    *   Area of critical section for punching shear is $4 \times (column\_side + 2 \times d/2) \times \text{depth}$. NO.
    *   The perimeter is $4 \times (400 + 2 \times 275) = 3800$ mm.
    *   The depth of the pile cap is $D_{cap} = 600$ mm.
    *   The punching shear force $V_{us}$ is the total load on the column minus the load within the critical perimeter.
    *   Assume the column load of $1000$ kN is uniformly distributed over the $0.4$ m $\times 0.4$ m column area.
    *   **Simplified Punching Shear Check:** Treat the column load as acting on the pile cap. Calculate the shear force at the critical perimeter $d/2$ from the column face. The load resisted by the pile cap within this perimeter is assumed to be carried by shear.
    *   **Alternative Simplified Approach:** Calculate the shear stress due to the column load. The shear force is $P_u = 1000$ kN. The area of the critical section is the perimeter $\times$ depth of the cap.
    *   Shear stress $\tau_p = P_u / (\text{perimeter} \times d)$ is not correct.
    *   The punching shear stress is typically calculated as $V_{up} / (b_0 \times d)$, where $b_0$ is the perimeter of the critical section.
    *   $V_{up} = P_u = 1000$ kN.
    *   $b_0 = 3800$ mm.
    *   $\tau_p = (1000 \times 10^3 \text{ N}) / (3800 \text{ mm} \times 550 \text{ mm}) \approx 0.48$ N/mm$^2$.
    *   Check this against the allowable punching shear stress for concrete. For $f_{ck} = 30$, the basic shear stress $v_c$ is about $0.25 \sqrt{f_{ck}}$. $v_c = 0.25 \sqrt{30} \approx 1.37$ N/mm$^2$.
    *   Since $\tau_p < v_c$, no punching shear reinforcement is required around the column.

*   **Pile Head Punching Shear:** Check punching shear around the pile heads. Pile diameter $= 400$ mm. Critical section at $d/2 = 275$ mm from the pile head face.
    *   Consider a unit width strip around the pile head.
    *   The load on the pile is $500$ kN for a $1$ m width.
    *   The punching shear force is $500$ kN.
    *   The perimeter of the critical section around a $400$ mm diameter pile at $d/2 = 275$ mm distance is: $2 \times \pi \times (400/2 + 275) = 2 \times \pi \times (200 + 275) = 2 \times \pi \times 475 \approx 2985$ mm.
    *   Shear stress $\tau_p = (500 \times 10^3 \text{ N}) / (2985 \text{ mm} \times 550 \text{ mm}) \approx 0.30$ N/mm$^2$.
    *   This is also less than the allowable shear stress.

*   **Minimum Shear Reinforcement:** Provide minimum reinforcement as per code, especially if shear stresses are close to the limits.

#### **3.5.1 Practice Question (Pile Cap)**

Design a square pile cap to support a column carrying a factored axial load of $P_u = 1200$ kN. The pile cap supports four piles arranged in a square pattern, with a spacing of $2.0$ m center to center. The column is $500 \times 500$ mm. Use concrete $f_{ck} = 30$ N/mm$^2$ and steel $f_y = 415$ N/mm$^2$. Assume pile diameter is $450$ mm.

**Answer:**

*   **Pile Arrangement:** $2 \times 2$ pile group.
*   **Load Distribution:** $P_u = 1200$ kN. Load on each pile $= 1200$ kN / 4 = $300$ kN.
*   **Pile Cap Dimensions:**
    *   Assume a square pile cap. Width to accommodate column and piles. Column side = $0.5$ m. Pile diameter = $0.45$ m.
    *   Center-to-center pile spacing = $2.0$ m.
    *   Overall dimension considering piles: $2.0$ m (pile spacing) + $2 \times (0.45 \text{ m} / 2) = 2.0 + 0.45 = 2.45$ m. Let's assume the pile cap extends beyond the outer piles for support.
    *   Let's consider the critical sections relative to the column and piles.
    *   Assume pile cap width $B = 2.5$ m.
    *   Assume pile cap depth $D_{cap} = 700$ mm. Effective depth $d = 650$ mm.
*   **Analysis (Beam Analogy):**
    *   Consider the pile cap as a beam spanning between the piles in each direction.
    *   The column load of $1200$ kN is distributed to four piles, $300$ kN each.
    *   Consider a strip of the pile cap $1$ m wide. The column load per meter is $1200 \text{ kN} / 2.5 \text{ m} = 480$ kN/m.
    *   The pile reaction per meter is $300 \text{ kN} / 2.5 \text{ m} = 120$ kN/m.
    *   The pile spacing is $2.0$ m.
    *   **Bending Moment:** Critical section for bending is at the face of the column.
    *   Distance from the center of the pile to the face of the $500$ mm column: $(2.0 \text{ m} / 2) - (0.5 \text{ m} / 2) = 1.0 \text{ m} - 0.25 \text{ m} = 0.75$ m.
    *   Moment due to pile reaction at the center of the cap = $120 \text{ kN/m} \times 1.0 \text{ m} \times 0.75 \text{ m} = 90$ kNm/m.
    *   Moment due to column load at the center of the cap = $-480 \text{ kN/m} \times 0.75 \text{ m} = -360$ kNm/m.
    *   Net $M_u = 90 - 360 = -270$ kNm/m. The top steel is in tension.
*   **Design for Bending:**
    *   $M_u = 270$ kNm/m $= 270 \times 10^6$ Nmm/m.
    *   $z = 0.9d = 0.9 \times 650 = 585$ mm.
    *   $A_s = (270 \times 10^6) / (0.87 \times 415 \times 585) \approx 1073$ mm$^2$ per meter width.
    *   Provide reinforcement in the top of the pile cap, e.g., 12 mm bars at approximately $125$ mm spacing ($A_s = \pi \times (12/2)^2 \approx 113$ mm$^2$. $113 \times N = 1073 \implies N \approx 9.5$ bars per meter. So, $12$ mm @ $125$ mm c/c).
*   **Check Shear:**
    *   **Beam Shear:** Critical section at the face of the pile. Shear force $V_u = 120 \text{ kN/m} - (480 \text{ kN/m} \times 0.75 \text{ m}) = 120 - 360 = -240$ kN/m. This shear calculation needs to be carefully considered with the cap's support conditions. A more direct approach: The shear at the face of the pile is the pile reaction minus the load from the column within that segment.
    *   **Punching Shear around Column:** Perimeter $b_0 = 4 \times (500 + 2 \times 325) = 4 \times (500 + 650) = 4 \times 1150 = 4600$ mm.
    *   $V_{up} = 1200$ kN.
    *   $\tau_p = (1200 \times 10^3 \text{ N}) / (4600 \text{ mm} \times 650 \text{ mm}) \approx 0.40$ N/mm$^2$.
    *   Allowable shear for $f_{ck} = 30$: $v_c = 0.25 \sqrt{30} \approx 1.37$ N/mm$^2$.
    *   $\tau_p < v_c$, so no punching shear reinforcement around the column is needed.
*   **Punching Shear around Pile Heads:** Pile diameter = $450$ mm. Critical section at $d/2 = 325$ mm from pile head face.
    *   Load on pile = $300$ kN.
    *   Perimeter $b_0 = 2 \times \pi \times (450/2 + 325) = 2 \times \pi \times (225 + 325) = 2 \times \pi \times 550 \approx 3456$ mm.
    *   $\tau_p = (300 \times 10^3 \text{ N}) / (3456 \text{ mm} \times 650 \text{ mm}) \approx 0.13$ N/mm$^2$.
    *   This is also less than $v_c$.

#### **3.6 Important Points to Remember for Pile Caps**

*   **Distribute load to piles effectively.**
*   **Punching shear around pile heads and column base is critical.**
*   **Top reinforcement resists bending moments.**
*   **Pile caps are often thick, leading to high shear capacities in concrete.**
*   **Consider the critical sections for bending and shear carefully.**
*   **Follow code-specified detailing for reinforcement and cover.**

---

### **Summary of Module 2: Retaining Structures**

This module covered three distinct but related structural elements: deep beams, corbels, and pile caps. While each has unique applications and geometries, they share common underlying principles related to advanced structural behavior:

*   **Deep Beams:** Characterized by a low span-to-depth ratio, where shear deformation is significant. Strut-and-tie modeling is the preferred analysis method, focusing on concrete strut capacity and reinforcement tie capacity.
*   **Corbels:** Short, projecting elements that exhibit deep beam behavior. They are designed using strut-and-tie principles, with a focus on providing adequate tension reinforcement anchored effectively to resist the applied load.
*   **Pile Caps:** Thick slabs that distribute superstructure loads to a group of piles. Analysis involves determining pile reactions and then designing the cap for bending, beam shear, and critically, punching shear around the column base and pile heads.

Understanding the load transfer mechanisms and potential failure modes for these elements is crucial for safe and efficient structural design.

---
