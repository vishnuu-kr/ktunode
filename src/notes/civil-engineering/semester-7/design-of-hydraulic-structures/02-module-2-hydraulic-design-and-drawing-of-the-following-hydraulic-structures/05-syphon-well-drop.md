---
title: "Syphon Well Drop"
subject: "DESIGN OF HYDRAULIC STRUCTURES"
module: "Module 2: Hydraulic design   and Drawing of the following hydraulic structures:"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba81170f"
status: "completed"
scrapedAt: "2026-05-20T18:57:49.405Z"
---
# Design of Hydraulic Structures - Module 2: Hydraulic Design and Drawing of Hydraulic Structures

## Topic: Syphon Well Drop

---

### **1. Introduction to Syphon Well Drop**

**1.1 Definition:**
A syphon well drop is a type of cross-drainage structure used in irrigation canals where a canal crosses a natural drainage channel at a lower elevation. It essentially involves diverting the canal water through a syphon arrangement under the drainage channel and then lifting it back to its original level. The "well drop" aspect refers to the vertical shafts or wells incorporated into the design to facilitate the entry and exit of water.

**1.2 Purpose and Function:**
*   **To allow canal flow to pass under a natural drainage:** The primary purpose is to prevent interference between the irrigation canal and the natural watercourse.
*   **To maintain the irrigation supply:** It ensures that the canal water continues to flow to the command area without interruption.
*   **To manage different elevations:** It effectively handles situations where the canal bed is significantly lower than the natural drainage bed.

**1.3 Classification and Suitability:**
Syphon well drops are suitable for:
*   **Moderate to high discharges:** They can handle substantial volumes of canal water.
*   **Conditions where a level crossing or aqueduct is not feasible:** When an aqueduct would be too costly due to excessive height, or a level crossing is impractical due to large drainage discharges.
*   **Sites where the canal is at a significantly lower level than the drainage:** This is a key factor in deciding the suitability of a syphon well drop.

---

### **2. Components of a Syphon Well Drop**

A typical syphon well drop consists of the following main components:

**2.1 Inlet Well (Upstream Well):**
*   **Function:** To receive the canal water and guide it into the syphon barrel.
*   **Design Considerations:**
    *   **Shape:** Usually square or rectangular.
    *   **Structure:** Reinforced concrete structure.
    *   **Inlet Arrangements:** Designed to smoothly transition flow from the canal to the barrel, minimizing energy losses. This may include dividing walls.
    *   **Velocity Control:** The area of the well should be sufficient to reduce velocity and prevent scour in the barrel.

**2.2 Syphon Barrel(s):**
*   **Function:** The conduit through which the water flows under the drainage channel.
*   **Design Considerations:**
    *   **Number of Barrels:** Often designed with multiple barrels to cater for different flow rates and to provide redundancy in case of maintenance.
    *   **Shape:** Typically circular or arch-shaped for hydraulic efficiency and structural strength.
    *   **Material:** Reinforced concrete pipes or cast-in-situ reinforced concrete.
    *   **Alignment:** Straight alignment is preferred for minimum head loss.
    *   **Gradient:** Designed to achieve the required flow velocity.
    *   **Protection:** May be protected against hydrostatic pressure from the drainage channel and external loads.

**2.3 Outlet Well (Downstream Well):**
*   **Function:** To receive the water from the syphon barrel and lift it back to the downstream canal section.
*   **Design Considerations:**
    *   **Similar to Inlet Well:** Usually similar in design and function to the inlet well.
    *   **Dissipating Energy:** May incorporate energy dissipation features if high velocities are encountered.
    *   **Transition:** Smooth transition to the downstream canal.

**2.4 Drop in Canal Bed Level:**
*   **Function:** The vertical drop in the canal bed level is inherent to the syphon action. This drop is necessary to create the necessary hydraulic gradient to drive the flow through the barrel.

**2.5 Abutments and Wing Walls:**
*   **Function:** To support the upstream and downstream canal banks and to guide the flow into and out of the wells.
*   **Design Considerations:**
    *   **Structural Stability:** Must withstand earth pressure and hydraulic forces.
    *   **Protection:** Against erosion and seepage.

---

### **3. Hydraulic Design of Syphon Well Drop**

The hydraulic design aims to ensure efficient and safe flow of water through the structure while minimizing head losses.

**3.1 Calculation of Discharge (Q):**
*   The discharge of the canal at the location of the syphon well drop is the primary parameter for design. This is typically the full supply discharge (FSD) of the canal.

**3.2 Determination of Velocity in Syphon Barrel:**
*   **General Principle:** The flow in the syphon barrel is typically under pressure (as it's submerged).
*   **Velocity Range:** The velocity is generally kept within a range to avoid excessive head loss due to friction and turbulence, and also to prevent scour. A typical range might be 1.5 m/s to 3.0 m/s, but this depends on the specific design and material.
*   **Velocity Calculation:**
    *   Can be estimated based on empirical formulas or by using Manning's formula for pressurized flow, considering the hydraulic radius and roughness of the barrel.

**3.3 Determination of Barrel Size and Number:**
*   **Area Requirement:** The total cross-sectional area of the syphon barrel(s) ($A$) is determined by:
    $A = \frac{Q}{V}$
    where:
    *   $Q$ = Design discharge (m³/s)
    *   $V$ = Desired velocity in the barrel (m/s)
*   **Number of Barrels:**
    *   If the required area is large, it is often more economical and practical to divide the flow into multiple barrels.
    *   Consideration is given to the efficiency of flow, structural stability, and maintenance.
*   **Diameter/Dimensions:**
    *   For circular barrels, the diameter ($D$) is calculated from the area: $A = \frac{\pi D^2}{4}$.
    *   For other shapes, the dimensions are determined to achieve the required area.

**3.4 Head Loss Calculation:**
*   **Major Components of Head Loss:**
    *   **Entrance Loss ($h_e$):** Loss due to friction and turbulence at the inlet of the barrel.
        $h_e = C_e \frac{V^2}{2g}$
        where $C_e$ is the coefficient of entrance (typically 0.5 for well-rounded entrance).
    *   **Friction Loss ($h_f$):** Loss due to friction along the length of the barrel.
        Using Manning's formula:
        $h_f = n^2 \frac{L V^2}{R^{4/3}}$
        where:
        *   $n$ = Manning's roughness coefficient
        *   $L$ = Length of the barrel (m)
        *   $R$ = Hydraulic radius of the barrel (m)
    *   **Exit Loss ($h_x$):** Loss due to kinetic energy of the water leaving the barrel.
        $h_x = C_x \frac{V^2}{2g}$
        where $C_x$ is the coefficient of exit (typically 1.0 for abrupt exit).
    *   **Minor Losses:** Losses due to bends, changes in section (if any).
*   **Total Head Loss ($H_L$):**
    $H_L = h_e + h_f + h_x + \text{minor losses}$

**3.5 Hydraulic Gradient and Syphon Action:**
*   **Required Head:** The difference in water levels between the upstream canal and the downstream canal must be sufficient to overcome the total head loss ($H_L$).
*   **Syphon Action:** The flow is initiated and maintained by the difference in water levels. The structure operates as a pressure conduit.
*   **Invert Level of Barrel:** The invert level of the syphon barrel should be kept sufficiently below the bed of the drainage channel to allow for drainage flow and to avoid structural interference.

**3.6 Afflux:**
*   Afflux is the rise in the upstream water level above the normal full supply level due to the obstruction caused by the structure. This needs to be checked to ensure it does not affect the upstream canal command area.

**3.7 Velocity of Approach:**
*   The velocity of the canal water just before entering the syphon well drop.

**3.8 Design of Wells:**
*   **Area of Wells:** The cross-sectional area of the wells should be such that the velocity of approach into the wells is reduced, minimizing entrance losses. A common practice is to have the area of the well to be 1.5 to 2 times the area of the barrel.
*   **Drop in Well:** The difference in water level between the upstream canal and the syphon barrel invert.

---

### **4. Structural Design of Syphon Well Drop**

While this module focuses on hydraulic design, a brief mention of structural aspects is relevant.

**4.1 Material:**
*   Primarily reinforced concrete for wells, barrels, and abutments.

**4.2 Loads:**
*   Hydrostatic pressure from canal water and drainage water.
*   Earth pressure from embankments.
*   Live loads (if applicable).
*   Self-weight of the structure.

**4.3 Stability:**
*   **Uplift Pressure:** The structure needs to be designed to resist uplift pressures, especially from the drainage channel.
*   **Scour Protection:** The foundations of the wells and surrounding areas need protection against scour.

---

### **5. Drawing of Syphon Well Drop**

The drawing is a crucial part of the design process and should clearly illustrate all components and dimensions.

**5.1 Key Drawings Required:**
*   **Plan View:** Showing the alignment of the canal, drainage channel, and the syphon well drop in plan.
*   **Longitudinal Section:** Showing the profile of the canal and drainage channel, the syphon barrel, and the inlet/outlet wells in elevation.
*   **Cross-Sections:**
    *   Cross-section of the canal upstream and downstream.
    *   Cross-section of the drainage channel.
    *   Cross-section of the inlet and outlet wells.
    *   Cross-section of the syphon barrel.
*   **Detailed Drawings:** Showing reinforcement details, expansion joints, and foundation details.

**5.2 Information to be Shown on Drawings:**
*   **Dimensions:** All critical dimensions of the canal, drainage channel, wells, barrels, and associated structures.
*   **Levels:** Bed levels, water levels, crest levels, foundation levels.
*   **Material Specifications:** Type of concrete, reinforcement details, etc.
*   **Sections of Canal and Drainage:** Showing their typical cross-sections.
*   **Alignment:** The line of the canal and the path of the syphon barrel.
*   **Discharge and Velocity:** Indication of the design discharge and velocities at various points.

---

### **6. Advantages and Disadvantages of Syphon Well Drop**

**6.1 Advantages:**
*   **Cost-Effective:** Generally more economical than an aqueduct for moderate drops.
*   **Reduced Head Loss:** Compared to a level crossing with a similar drop, it offers better hydraulic efficiency.
*   **Simple Construction:** Relatively straightforward to construct compared to large aqueducts.
*   **Efficient Use of Space:** Takes up less plan area compared to a ramp-type structure.

**6.2 Disadvantages:**
*   **Afflux:** Can cause some afflux upstream.
*   **Maintenance:** Cleaning and repair of barrels can be challenging.
*   **Limited Suitability:** Not suitable for very large drops or where drainage flow is very high and causes significant uplift.
*   **Structural Complexity:** Wells require careful structural design to handle pressures.

---

### **7. Practice Questions and Exercises**

**Question 1:**
What is the primary purpose of a syphon well drop?

**Answer 1:**
The primary purpose of a syphon well drop is to allow a canal to pass under a natural drainage channel at a lower elevation while maintaining the flow of canal water.

**Question 2:**
List the main components of a syphon well drop.

**Answer 2:**
The main components are:
1.  Inlet Well (Upstream Well)
2.  Syphon Barrel(s)
3.  Outlet Well (Downstream Well)
4.  Abutments and Wing Walls

**Question 3:**
A canal carrying a discharge of 10 m³/s needs to be crossed by a syphon well drop. If the desired velocity in the syphon barrels is 2.5 m/s, what is the total required cross-sectional area of the barrels?

**Answer 3:**
Area ($A$) = Discharge ($Q$) / Velocity ($V$)
$A = \frac{10 \text{ m³/s}}{2.5 \text{ m/s}} = 4 \text{ m²}$

**Question 4:**
If a syphon well drop has two identical circular barrels, what would be the diameter of each barrel required to carry a discharge of 12 m³/s with a velocity of 3 m/s in each barrel?

**Answer 4:**
Total area required = $12 \text{ m³/s} / 3 \text{ m/s} = 4 \text{ m²}$.
Area per barrel = $4 \text{ m²} / 2 = 2 \text{ m²}$.
For a circular barrel, Area ($A$) = $\frac{\pi D^2}{4}$.
$2 = \frac{\pi D^2}{4}$
$D^2 = \frac{8}{\pi}$
$D = \sqrt{\frac{8}{\pi}} \approx \sqrt{2.546} \approx 1.596 \text{ m}$
So, the diameter of each barrel would be approximately 1.60 meters.

**Question 5:**
What are the main types of head losses considered in the hydraulic design of a syphon well drop?

**Answer 5:**
The main types of head losses are:
1.  Entrance Loss
2.  Friction Loss
3.  Exit Loss
4.  Minor Losses (e.g., bends)

---

### **8. Important Points to Remember**

*   **Velocity Control:** Maintain velocities within a suitable range (e.g., 1.5-3.0 m/s) in the syphon barrels to balance head loss and scour.
*   **Area of Wells:** The area of the wells should be larger than the barrel area to reduce entrance velocity and head loss.
*   **Head Loss Calculation:** Accurately calculate all components of head loss to ensure proper syphon action.
*   **Hydraulic Gradient:** The difference in water levels must be sufficient to overcome total head loss.
*   **Drainage Clearance:** The invert of the syphon barrel must be safely below the bed of the drainage channel.
*   **Structural Stability:** Pay close attention to hydrostatic pressures, uplift, and earth pressures during structural design.
*   **Drawing Clarity:** Ensure all drawings are clear, detailed, and accurately represent the design.
*   **Maintenance Considerations:** While primarily a hydraulic design topic, consider ease of maintenance for barrels during the design phase.

---
