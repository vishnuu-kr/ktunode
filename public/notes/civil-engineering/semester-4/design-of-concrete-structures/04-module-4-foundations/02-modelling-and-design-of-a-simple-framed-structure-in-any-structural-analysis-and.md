---
title: "Modelling and design of a simple framed structure in any structural analysis and design software. (Example: A double storied structure with three rooms in GF and FF)"
subject: "DESIGN OF CONCRETE STRUCTURES"
module: "Module 4: Foundations "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109ce"
status: "completed"
scrapedAt: "2026-05-20T18:43:50.595Z"
---
# DESIGN OF CONCRETE STRUCTURES - Module 4: Foundations

## Topic: Modelling and Design of a Simple Framed Structure

This module focuses on applying structural analysis and design principles to a practical example: a simple double-storied framed structure. We will explore the process of modelling this structure in a software and then proceed with its design.

---

### Learning Outcomes:

By the end of this module, you will be able to:

*   **Understand the importance of structural modelling:** Recognize why creating a digital representation of a structure is crucial for analysis and design.
*   **Develop a structural model for a framed structure:** Learn to define the geometry, material properties, and boundary conditions of a building in analysis software.
*   **Apply different load combinations:** Understand how to combine various loads (dead, live, wind, seismic) according to design codes.
*   **Perform structural analysis:** Utilize software to determine forces (moments, shear, axial forces) and displacements in structural members.
*   **Design structural elements (beams, columns, slabs, foundations):** Apply design principles and code provisions to ensure the safety and serviceability of the proposed structure.
*   **Interpret analysis and design results:** Understand the output from the software and make informed decisions regarding member sizing and reinforcement.
*   **Understand the role of foundations in framed structures:** Recognize how the framed structure's loads are transferred to the ground through foundations.

---

### 1. Introduction to Framed Structures

*   **Definition:** A framed structure is a structural system where loads are transferred through a network of interconnected members: beams, columns, and slabs. These members form a rigid or semi-rigid framework that carries the loads to the foundation.
*   **Components:**
    *   **Beams:** Horizontal members that primarily resist bending and shear forces.
    *   **Columns:** Vertical members that primarily resist axial forces and bending moments.
    *   **Slabs:** Horizontal or inclined planes that resist bending and shear, typically supporting distributed loads and transferring them to beams.
    *   **Foundations:** The substructure that transfers the loads from the superstructure to the supporting soil.
*   **Advantages of Framed Structures:**
    *   Flexibility in layout and design.
    *   Efficient for resisting lateral loads (wind and seismic).
    *   Can span larger distances compared to load-bearing walls.

---

### 2. Modelling a Simple Framed Structure (Double-Storied, 3 Rooms GF & FF)

We will use a hypothetical example: A double-storied residential building with three rooms on the Ground Floor (GF) and three rooms on the First Floor (FF).

#### 2.1 Defining the Geometry

*   **Plan Layout:** Assume a rectangular building footprint. For instance:
    *   Length: 15 meters
    *   Width: 9 meters
    *   Grid lines for beams and columns.
*   **Floor Heights:**
    *   Ground Floor Height: 3.0 meters
    *   First Floor Height: 3.0 meters
    *   Total height to the top of the parapet: Approx. 6.3 meters (assuming a small parapet wall).
*   **Room Layout:**
    *   Three rooms of equal size (e.g., 5m x 3m) on each floor, arranged linearly along the length. This implies a span arrangement of beams.

#### 2.2 Software Selection

Several structural analysis and design software packages can be used. Common examples include:

*   **ETABS (Extended 3D Analysis of Building Systems):** Widely used for building analysis and design.
*   **STAAD.Pro:** Another popular and versatile structural analysis software.
*   **SAP2000:** General-purpose structural analysis software.
*   **Revit Structure:** BIM (Building Information Modelling) software with integrated analysis capabilities.

For this example, we will conceptually describe the modelling process, assuming a typical workflow common to these software.

#### 2.3 Creating the Model in Software

**Step 1: Project Setup**

*   Start a new project.
*   Select the analysis and design codes (e.g., IS 456 for concrete design, IS 875 for loads, IS 1893 for seismic).
*   Define units (e.g., kN, m, °C).

**Step 2: Defining Materials**

*   **Concrete:**
    *   Characteristic compressive strength of concrete ($f_{ck}$) (e.g., M25, M30).
    *   Unit weight of concrete (e.g., 25 kN/m³ for reinforced concrete).
    *   Modulus of Elasticity of concrete ($E_c$).
*   **Steel Reinforcement:**
    *   Yield strength of steel ($f_y$) (e.g., Fe415, Fe500).
    *   Modulus of Elasticity of steel ($E_s$).

**Step 3: Defining Section Properties**

*   **Columns:**
    *   Typical cross-sections: Rectangular (e.g., 300mm x 450mm, 400mm x 500mm).
*   **Beams:**
    *   Typical cross-sections: Rectangular (e.g., 230mm x 450mm, 300mm x 500mm).
*   **Slabs:**
    *   Thickness of slabs (e.g., 120mm, 150mm).

**Step 4: Grids and Story Levels**

*   Define the grid system based on the building plan.
*   Define the story levels with their respective elevations.

**Step 5: Drawing Structural Elements**

*   **Columns:** Draw columns at the intersection of grid lines, extending from the foundation level to the top of the structure.
*   **Beams:** Draw beams connecting the columns at each floor level, forming the frame. Consider primary beams and secondary beams if applicable.
*   **Slabs:** Draw slabs on each floor, spanning between the beams.

**Step 6: Defining Supports (Foundation Level)**

*   At the base of the columns, define the boundary conditions. Typically, these are considered **fixed supports** in preliminary analysis, implying no translation or rotation.
*   In a more detailed analysis, the interaction with the soil might be modelled using springs. For this simplified example, fixed supports are sufficient.

---

### 3. Loads and Load Combinations

**Key Concepts:**

*   **Dead Loads (DL):** Loads due to the self-weight of the structural elements and permanent non-structural elements.
*   **Live Loads (LL):** Loads due to occupancy and use of the building (e.g., people, furniture). These are variable.
*   **Wind Loads (WL):** Lateral loads due to wind pressure.
*   **Seismic Loads (EQ):** Inertial forces generated due to ground acceleration during an earthquake.

**Calculating Loads:**

*   **Self-weight of Members:** Software automatically calculates the self-weight of beams, columns, and slabs based on their defined dimensions and material unit weights.
*   **Live Load:** Refer to design codes (e.g., IS 875 Part 2) for typical live loads based on occupancy (residential, office, etc.). For residential buildings, a typical LL for floors is 2 kN/m².
*   **Wall Loads:** If there are load-bearing walls on slabs or beams, their weight needs to be calculated and applied as distributed or point loads.
*   **Finishes Load:** Weight of flooring, plastering, etc. (typically a fixed value per unit area).
*   **Wind Load:** Calculated based on wind speed, building height, exposure, and structural characteristics (as per IS 875 Part 3).
*   **Seismic Load:** Calculated based on seismic zone, soil type, building importance factor, response reduction factor, and the building's mass and dynamic characteristics (as per IS 1893).

**Load Combinations (as per IS 456 and IS 1893):**

Load combinations are essential to ensure that the structure is designed for the most critical combination of loads. Some common combinations (using Load Factors):

*   **Ultimate Limit State (ULS) for Strength:**
    *   1.5 (DL + LL)
    *   1.5 (DL + WL)
    *   1.5 (DL - WL)
    *   1.5 (DL + EQ)
    *   1.5 (DL - EQ)
    *   1.2 (DL + LL + WL)
    *   1.2 (DL + LL - WL)
    *   1.2 (DL + LL + EQ)
    *   1.2 (DL + LL - EQ)
    *   *(Note: Specific load factors and combinations vary slightly between codes and for different load types. Refer to the relevant IS codes for precise combinations.)*

**Applying Loads in Software:**

*   Assign live loads to slabs and beams as distributed loads.
*   Apply wind and seismic loads according to the analysis type (e.g., equivalent static analysis or dynamic analysis).
*   Define load patterns and combine them using the specified load factors.

---

### 4. Structural Analysis

Once the model is created and loads are applied, the software performs structural analysis.

**Key Concepts:**

*   **Stiffness Matrix Method:** Most software uses this method (or finite element method, which is an extension of it) to solve for the equilibrium of the structure.
*   **Degrees of Freedom (DOF):** Each node in the structure has potential displacements and rotations (e.g., translations in X, Y, Z and rotations about X, Y, Z).
*   **Member End Forces:**
    *   **Axial Force:** Force acting along the longitudinal axis of a member.
    *   **Shear Force:** Force acting perpendicular to the longitudinal axis of a member.
    *   **Bending Moment:** Moment causing bending in a member.
    *   **Torsional Moment:** Moment causing twisting in a member.
*   **Displacements:** Deflections and rotations of the nodes and members.

**Analysis Process in Software:**

1.  **Run Analysis:** Initiate the analysis process in the software.
2.  **Review Displacement:** Check for excessive deflections and drifts that might affect serviceability. This is crucial for lateral load analysis.
3.  **Display/Extract Forces:** View and extract axial forces, shear forces, and bending moments for all members (beams, columns, slabs) under various load combinations.

---

### 5. Design of Structural Elements

The analysis results (forces) are used to design the individual structural members. The design process ensures that the members have sufficient strength to resist the applied forces and meet serviceability requirements.

**5.1 Beam Design**

*   **Input:** Bending moment ($M_{u}$), shear force ($V_{u}$), and axial force ($P_u$) from analysis under critical ULS load combinations.
*   **Design Checks:**
    *   **Bending Reinforcement:** Calculate the required area of steel ($A_{st}$) to resist the bending moment based on concrete and steel properties.
    *   **Shear Reinforcement:** Determine the required shear stirrups (links) to resist the shear force.
    *   **Axial Force Check:** Ensure columns are adequate for axial loads.
    *   **Serviceability Checks:** Check for deflection and cracking under service loads.
*   **Software Output:** Typically provides required reinforcement details (bar sizes and spacing) for the top and bottom of beams, and stirrup details.

**Example (Conceptual):**

For a beam experiencing a maximum bending moment $M_u = 100$ kNm, $f_{ck} = 25$ MPa, $f_y = 415$ MPa, and effective depth $d = 400$ mm:

*   The software would calculate the required $A_{st}$ using relevant design equations (e.g., based on IS 456, like finding the lever arm and then $A_{st} = M_u / (0.87 f_y \times \text{lever arm})$).
*   It would then suggest suitable bar arrangements (e.g., 3 bars of 16mm diameter at the bottom).

**5.2 Column Design**

*   **Input:** Axial force ($P_u$), bending moments ($M_{ux}$ and $M_{uy}$) about major and minor axes, and shear forces from analysis under critical ULS load combinations.
*   **Design Checks:**
    *   **Axial Load Capacity:** Ensure the column can carry the axial load.
    *   **Biaxial Bending Capacity:** Design for combined axial load and bending moments in both directions. This is a crucial check for framed structures where columns often experience significant moments.
    *   **Shear Reinforcement:** Design shear stirrups.
    *   **Longitudinal Reinforcement:** Determine the required percentage of steel (typically between 0.8% and 6% of the gross cross-sectional area).
    *   **Confinement Reinforcement (Ties):** Design ties to prevent buckling of longitudinal bars and provide confinement, especially important in seismic zones.
*   **Software Output:** Suggests longitudinal bar sizes and quantities, and tie details.

**5.3 Slab Design**

*   **Input:** Bending moments ($M_{ux}$, $M_{uy}$), shear forces ($V_{ux}$, $V_{uy}$), and moments due to the supporting beams.
*   **Design Checks:**
    *   **One-way vs. Two-way Slabs:** Determine if the slab acts as a one-way or two-way slab based on the ratio of longer to shorter span.
    *   **Bending Reinforcement:** Calculate the required area of steel in both directions (main and distribution steel).
    *   **Shear Capacity:** Check if the slab thickness is adequate for shear. Punching shear needs to be checked around columns if the slab is flat.
    *   **Deflection Control:** Ensure deflections are within acceptable limits.
*   **Software Output:** Provides the required reinforcement layout for the top and bottom surfaces of the slab.

**5.4 Foundation Design**

*   **Input:** Axial loads ($P_u$), shear forces ($V_u$), and bending moments ($M_u$) from the columns at the base.
*   **Types of Foundations:**
    *   **Isolated Footings:** Used when columns are spaced adequately.
    *   **Combined Footings:** Used when columns are close together or to balance uneven loads.
    *   **Raft Foundations:** Used when soil bearing capacity is low or column loads are very high, covering the entire building footprint.
    *   **Pile Foundations:** Used for very poor soil conditions.
*   **Design Checks for Isolated Footings (most common for simple structures):**
    *   **Bearing Pressure:** Ensure the soil pressure under the footing does not exceed the allowable bearing capacity.
    *   **Bending Moment:** Design the footing for bending in the critical section (usually at the face of the column).
    *   **One-way Shear (Beam Shear):** Check shear capacity of the footing.
    *   **Two-way Shear (Punching Shear):** Check punching shear capacity around the column.
    *   **Column Base Reinforcement:** Design the dowels connecting the column to the footing.
*   **Software Output:** Can suggest footing dimensions (length, width, depth) and reinforcement details for isolated footings.

---

### 6. Practice Questions & Exercises

**Scenario:**

Consider a simply supported beam with a clear span of 6 meters. It carries a uniformly distributed dead load of 15 kN/m and a uniformly distributed live load of 10 kN/m. The beam is of rectangular cross-section with an effective depth $d = 450$ mm and width $b = 230$ mm. Assume M25 concrete and Fe415 steel.

**Questions:**

1.  Calculate the factored bending moment and shear force for this beam under the ULS load combination (1.5 DL + 1.5 LL).
2.  Calculate the required area of tension reinforcement ($A_{st}$) for the beam.
3.  If the beam has two layers of 16mm diameter bars at the bottom, calculate the provided area of tension reinforcement.
4.  Check the suitability of the provided reinforcement for bending.
5.  Calculate the required shear reinforcement (stirrups) if the factored shear force is $V_u = 120$ kN.
6.  Suggest suitable stirrup details (size and spacing).

**Answers:**

**(Assume $E_c = 2.6 \times 10^4$ MPa and $E_s = 2 \times 10^5$ MPa for relevant checks, though not explicitly needed for basic design calculations here.)**

1.  **Factored Loads:**
    *   Factored Dead Load = $1.5 \times 15 = 22.5$ kN/m
    *   Factored Live Load = $1.5 \times 10 = 15$ kN/m
    *   Total Factored Load ($w_u$) = $22.5 + 15 = 37.5$ kN/m
    *   Factored Bending Moment ($M_u$) = $w_u L^2 / 8 = 37.5 \times 6^2 / 8 = 168.75$ kNm
    *   Factored Shear Force ($V_u$) = $w_u L / 2 = 37.5 \times 6 / 2 = 112.5$ kN

2.  **Required Area of Tension Reinforcement ($A_{st}$):**
    *   For M25 concrete, $f_{ck} = 25$ MPa.
    *   For Fe415 steel, $f_y = 415$ MPa.
    *   Lever Arm ($z$) can be approximated as $0.9d = 0.9 \times 450 = 405$ mm (for preliminary checks, or calculated more precisely).
    *   For ultimate moment resistance, $M_{u, \text{max}}$ for a singly reinforced section is $0.36 \times f_{ck} \times b \times d \times (1 - 0.42 \times x_u / d)$ where $x_u/d = 0.48$.
    *   $M_{u, \text{max}} = 0.36 \times 25 \times 230 \times 450 \times (1 - 0.42 \times 0.48) = 689.1$ kNm. Since $M_u < M_{u, \text{max}}$, a singly reinforced section is sufficient.
    *   $A_{st} = M_u / (0.87 \times f_y \times z) = 168.75 \times 10^6 / (0.87 \times 415 \times 405) = 1164$ mm².

3.  **Provided Area of Tension Reinforcement ($A_{st, \text{provided}}$):**
    *   Assuming 2 bars of 16mm diameter.
    *   Area of one 16mm bar = $\pi/4 \times (16)^2 = 201.06$ mm².
    *   $A_{st, \text{provided}} = 2 \times 201.06 = 402.12$ mm².

4.  **Check Suitability for Bending:**
    *   The provided area ($402.12$ mm²) is **less** than the required area ($1164$ mm²). This means the beam needs more steel or a larger cross-section.
    *   Let's assume we used 3 bars of 16mm diameter: $A_{st, \text{provided}} = 3 \times 201.06 = 603.18$ mm² (Still insufficient).
    *   Let's assume we used 3 bars of 20mm diameter: $A_{st, \text{provided}} = 3 \times \pi/4 \times (20)^2 = 942.48$ mm² (Still insufficient).
    *   Let's assume we used 4 bars of 20mm diameter: $A_{st, \text{provided}} = 4 \times 942.48 / 2 \approx 942.48$ mm² (Approximate due to rounding, actual is $4 \times 314.16 = 1256.64$ mm²). This is adequate.

    *   **Minimum Reinforcement Check (IS 456 Clause 26.5.1.1):**
        *   $A_{st, \text{min}} = (0.85 \times b \times d) / f_y = (0.85 \times 230 \times 450) / 415 = 212.3$ mm².
        *   The provided area should also be checked against this minimum.

    *   **Maximum Reinforcement Check (IS 456 Clause 26.5.1.1):**
        *   $A_{st, \text{max}} = 0.04 \times b \times D = 0.04 \times 230 \times (450 + \text{cover})$ - this is for total cross-section. For tension reinforcement, it's usually $0.04 \times b \times D$, where D is the overall depth. A simpler check is often against the neutral axis depth limit. The software ensures this during design. For 4 x 20mm bars, $A_{st} = 1256.64$ mm², which is reasonable.

5.  **Required Shear Reinforcement (Stirrups):**
    *   Factored shear force $V_u = 112.5$ kN.
    *   Shear strength of concrete ($ \tau_{c} $) depends on the shear stress ($ \tau_{vc} = V_u / (b \times d) $) and the grade of concrete.
    *   $ \tau_{vc} = 112.5 \times 10^3 / (230 \times 450) = 1.087$ N/mm².
    *   From Table 19 of IS 456 for M25 concrete, for $ \tau_{vc} = 1.087 $ N/mm², the corresponding minimum shear reinforcement percentage ($p_t = 100 A_{sv} / (b s_v)$) is not directly available, but for $ \tau_{vc} $ values up to 1.40 N/mm², the value is based on $A_{sv}$ for $V_u$.
    *   Let's assume a minimum shear stress resistance of concrete. For $ \tau_{vc} \le 0.5 $, no shear reinforcement is needed, but we have $1.087$ N/mm².
    *   From Table 20 of IS 456 for $ \tau_{vc} = 1.087 $ N/mm² (interpolating between 1.0 and 1.2 N/mm²), the shear strength provided by concrete ($ \tau_c $) is around 0.70 N/mm².
    *   The nominal shear stress = $1.087$ N/mm².
    *   The maximum shear stress that concrete can resist ($ \tau_{cm, \text{max}} $) for M25 is $2.5$ N/mm². Since $1.087 < 2.5$, the section is adequate for shear resistance by concrete itself.
    *   Now, we need to provide shear reinforcement to resist the *balance* shear.
    *   Shear to be resisted by stirrups ($V_{us}$) = $V_u - \tau_c \times b \times d = 112.5 \times 10^3 - 0.70 \times 230 \times 450 = 112.5 \times 10^3 - 72450 = 40050$ N = 40.05 kN.
    *   Area of stirrups ($A_{sv}$) required = $V_{us} / (0.87 \times f_y \times d_v)$, where $d_v$ is the effective depth, generally taken as 0.9d. Let's use $d$ for simplicity in this example.
    *   $A_{sv} = 40.05 \times 10^3 / (0.87 \times 415 \times 450) = 0.24$ mm².

6.  **Suggested Stirrup Details:**
    *   Using 8mm diameter stirrups (two-legged).
    *   Area of one 8mm diameter stirrup (two-legged) = $2 \times \pi/4 \times (8)^2 = 100.53$ mm².
    *   Spacing of stirrups ($s_v$) = $(A_{sv} \times 0.87 \times f_y \times d) / V_{us}$
    *   $s_v = (100.53 \times 0.87 \times 415 \times 450) / 40050 = 430$ mm.
    *   **Minimum Shear Reinforcement Check (IS 456 Clause 26.5.1.6):**
        *   $A_{sv, \text{min}} / (b s_v) = 0.4 / (0.87 f_y) = 0.4 / (0.87 \times 415) = 0.00111$.
        *   $A_{sv, \text{min}} = 0.00111 \times b \times s_v = 0.00111 \times 230 \times s_v$.
        *   We need $A_{sv} \ge A_{sv, \text{min}}$.
        *   Spacing should not exceed $0.75d = 0.75 \times 450 = 337.5$ mm.
        *   Spacing should not exceed $300$ mm (whichever is lesser).
    *   **Therefore, the spacing of 8mm diameter two-legged stirrups should be limited to 330 mm c/c (or 337.5mm if checking with more precision, but 330mm is a common practical value that ensures the minimum is met).** The calculated spacing of 430mm is greater than the maximum allowed, so we must use the maximum allowed spacing.

---

### 7. Important Points to Remember

*   **Accurate Modelling is Key:** The accuracy of analysis and design heavily relies on the correct modelling of geometry, materials, and supports.
*   **Load Calculation and Combinations:** Understand the different types of loads and how to combine them using appropriate load factors as per the relevant design codes.
*   **Software is a Tool:** Software aids in analysis and design, but the engineer's understanding of structural principles and code requirements is paramount.
*   **Serviceability vs. Strength:** Design must satisfy both strength (ULS) and serviceability (SLS) limit states. Deflections, cracking, and vibrations are critical serviceability aspects.
*   **Ductility:** For seismic design, ensuring ductility of members (especially columns) is crucial.
*   **Foundation-Structure Interaction:** While simplified in this module, the interaction between the foundation and the soil is a critical aspect of foundation design.
*   **Iterative Process:** Structural design is often an iterative process. Initial member sizes might need to be revised based on analysis and design results.
*   **Code Compliance:** Always adhere to the provisions of the relevant national building codes and standards.

---

This concludes Module 4. The practical application of these concepts using software will further solidify your understanding of the design process for framed structures.
