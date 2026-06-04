---
title: "Syphon Aqueduct (Type III)"
subject: "DESIGN OF HYDRAULIC STRUCTURES"
module: "Module 2: Hydraulic design   and Drawing of the following hydraulic structures:"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba81170e"
status: "completed"
scrapedAt: "2026-05-20T18:57:48.659Z"
---
# DESIGN OF HYDRAULIC STRUCTURES - Module 2: Hydraulic Design and Drawing of Hydraulic Structures

## Topic: Syphon Aqueduct (Type III)

---

### 1. Introduction to Syphon Aqueducts

**1.1 Definition:**
A syphon aqueduct is a structure designed to carry an irrigation canal or water supply channel over a natural drainage path (like a river, stream, or natural depression) where the canal has to pass *below* the natural ground level of the drainage path. Essentially, the canal water is depressed into a closed conduit (the "syphon") to pass beneath the obstacle.

**1.2 Classification of Aqueducts:**
Aqueducts are broadly classified based on the relative levels of the canal soffit and the bed of the drainage:

*   **Aqueduct:** Canal soffit is *above* the flood level of the drainage.
*   **Syphon Aqueduct:** Canal soffit is *below* the flood level of the drainage.
*   **Super Passage:** Drainage passes *above* the canal.

**1.3 Type III Syphon Aqueduct:**
Type III refers to a specific configuration of a syphon aqueduct. While "Type III" might not be a universally standardized term in all textbooks, in the context of common classifications, it often refers to a scenario where:

*   The canal water is carried across the drainage path in a closed conduit (syphon).
*   The syphon barrel is submerged in the bed of the drainage path, and the water level in the drainage path can rise significantly, potentially submerging the syphon barrel.
*   The canal water is under pressure within the syphon barrel.

**1.4 Key Considerations for Syphon Aqueducts:**

*   **Hydraulic Gradient:** Ensuring efficient flow within the syphon barrel without excessive energy loss.
*   **Structural Stability:** Designing the syphon barrel and supporting structures to withstand external loads (water pressure from drainage, earth pressure) and internal loads (water pressure from the canal).
*   **Maintenance:** Providing access for cleaning and inspection of the syphon barrel.
*   **Debris Management:** Preventing debris from entering and accumulating in the syphon barrel.

---

### 2. Hydraulic Design of Syphon Aqueducts (Type III)

This section focuses on the hydraulic principles governing the flow of water through the syphon barrel.

**2.1 Flow in Closed Conduits (Syphon Barrel):**
The flow in the syphon barrel is essentially open channel flow transitioning to pressurized flow and back to open channel flow. The primary objective is to ensure the canal water flows smoothly and efficiently under the drainage path.

**2.2 Components of Energy Loss:**
When water flows through a syphon aqueduct, energy losses occur. These are crucial for determining the required hydraulic gradient and ensuring sufficient head for flow.

*   **Entrance Loss (Loss of Head at Entrance):** Occurs at the inlet of the syphon barrel where water enters from the canal trough.
    *   Formula: $h_e = 0.5 \frac{V^2}{2g}$ (for well-rounded entrance)
    *   Formula: $h_e = k \frac{V^2}{2g}$ (general form, where k depends on entrance shape)
*   **Friction Loss (Loss of Head due to Friction):** Occurs along the length of the syphon barrel due to the roughness of the conduit walls.
    *   Formula: $h_f = f \frac{L}{D} \frac{V^2}{2g}$ (Darcy-Weisbach equation)
        *   $f$: Darcy friction factor (depends on Reynolds number and relative roughness)
        *   $L$: Length of the syphon barrel
        *   $D$: Hydraulic mean radius or diameter of the barrel
        *   $V$: Average velocity in the barrel
        *   $g$: Acceleration due to gravity
    *   Alternatively, using Manning's formula for velocity: $V = \frac{1}{n} R^{2/3} S^{1/2}$
        *   $R$: Hydraulic radius of the barrel
        *   $S$: Slope of the energy line
        *   $h_f = \frac{V^2 L}{D_h (\frac{V}{n})^2} = \frac{n^2 L V^2}{D_h V^{4/3}} = \frac{n^2 L V^{1/3}}{D_h^{7/3}}$  (This needs careful derivation if starting from Manning's, more common to directly calculate S and then hf)
        *   A more direct approach from Manning's: $h_f = L \times S_f$, where $S_f$ is the friction slope calculated using Manning's formula: $S_f = (\frac{n V}{R^{2/3}})^2$.
*   **Exit Loss (Loss of Head at Exit):** Occurs at the outlet of the syphon barrel where water discharges back into the canal trough.
    *   Formula: $h_x = \frac{V^2}{2g}$ (for discharge into a large body of water or similar section)
*   **Bend Losses:** If the syphon barrel has bends, additional losses will occur. These are usually accounted for by adding equivalent lengths of straight pipe or using specific bend loss coefficients.

**2.3 Total Head Loss:**
The total head loss ($h_L$) in the syphon barrel is the sum of these individual losses:
$h_L = h_e + h_f + h_x + h_{bends}$

**2.4 Governing Equation (Energy Equation):**
The flow in the syphon is governed by the energy equation between the inlet and outlet of the syphon barrel. Let:

*   $EL_1$: Energy Line at the inlet of the syphon barrel (just after entering the closed conduit).
*   $EL_2$: Energy Line at the outlet of the syphon barrel (just before exiting the closed conduit).

$EL_1 = Z_1 + \frac{p_1}{\gamma} + \frac{V_1^2}{2g}$
$EL_2 = Z_2 + \frac{p_2}{\gamma} + \frac{V_2^2}{2g}$

Where:
*   $Z$: Datum elevation
*   $p$: Pressure head
*   $\gamma$: Specific weight of water
*   $V$: Velocity of water

For the syphon aqueduct, the energy equation from the upstream water surface of the canal to the downstream water surface of the canal is:

$H_{uplift} + H_{canal\_upstream} = H_{canal\_downstream} + h_L$

Where:
*   $H_{uplift}$: The total head available at the upstream side to drive the flow through the syphon. This is essentially the difference in water levels between the upstream canal water surface and the point where the syphon barrel starts to dip downwards.
*   $H_{canal\_upstream}$: Water level in the upstream canal.
*   $H_{canal\_downstream}$: Water level in the downstream canal.
*   $h_L$: Total head loss in the syphon barrel.

Alternatively, considering the energy gradient from the upstream water surface to the downstream water surface:

$H_{canal\_upstream} = H_{canal\_downstream} + h_L$

The critical aspect is that the lowest point of the syphon barrel should be below the drainage bed level. The highest point of the syphon barrel will be at the level of the upstream canal bed. The water surface in the canal is above this.

**2.5 Determination of Syphon Barrel Dimensions:**

*   **Discharge (Q):** Determined from the canal design discharge.
*   **Velocity (V):** Typically chosen to be within an economical and efficient range (e.g., 1.5 to 3 m/s) to avoid excessive silting or scour and minimize energy losses.
*   **Area of Barrel (A):** $A = Q / V$.
*   **Shape and Size of Barrel:**
    *   **Circular Barrel:** Most common and structurally efficient. Diameter $D = \sqrt{4A/\pi}$.
    *   **Rectangular Barrel:** Less common due to structural complexity and higher friction losses.

**2.6 Hydraulic Gradient Line (HGL) and Energy Grade Line (EGL):**
*   **HGL:** Represents the sum of the pressure head and datum head. In pressurized flow, the HGL is above the top of the conduit.
*   **EGL:** Represents the total energy head (pressure head, velocity head, and datum head). The EGL is always above the HGL by the velocity head ($V^2/2g$).
*   **Design Requirement:** The EGL at the upstream end of the syphon must be sufficiently above the crown of the syphon barrel at its highest point to ensure gravity flow. The difference between the upstream water surface elevation and the downstream water surface elevation must be greater than or equal to the total head loss.

**2.7 Aeration of Water:**
In a syphon aqueduct, water flows under pressure and can become de-aerated. This can lead to cavitation issues and corrosion.
*   **Aeration:** Mechanisms are often provided at the inlet or at intermediate points to re-aerate the water and prevent these problems. This can be achieved through splashing or cascading of water.

**2.8 Selection of Barrel Material and Roughness:**
The roughness coefficient ('n' in Manning's formula) depends on the material (concrete, steel) and its condition. This significantly impacts friction losses.

---

### 3. Structural Design Aspects

While the focus is hydraulic design, structural aspects are intrinsically linked.

**3.1 Loads on the Syphon Barrel:**

*   **Internal Water Pressure:** Due to the head of water in the canal.
*   **External Water Pressure:** From the drainage water when it floods.
*   **Earth Pressure:** If the syphon barrel is buried.
*   **Dead Load:** Self-weight of the structure.
*   **Live Load:** Occasional loads.
*   **Buoyancy:** If submerged in water.

**3.2 Types of Syphon Barrels:**

*   **Single Barrel:** For smaller discharges.
*   **Multiple Barrels:** For larger discharges, offering redundancy and allowing for maintenance of one barrel while others are in operation.

**3.3 Construction Considerations:**

*   **Cofferdams:** Required to dewater the site for construction.
*   **Foundations:** Must be stable and designed to prevent seepage.
*   **Expansion Joints:** Necessary in long barrels to accommodate thermal expansion and contraction.

---

### 4. Examples and Calculations

**Example 1: Hydraulic Design of a Syphon Aqueduct Barrel**

**Problem:**
Design the dimensions of a circular syphon barrel for a canal carrying a discharge of 30 m³/s. The syphon barrel has a length of 50 m. The upstream water level in the canal is 105.0 m and the downstream water level is 104.5 m. Assume Manning's roughness coefficient $n = 0.013$. The canal trough velocity is 1.2 m/s. Assume entrance and exit losses are negligible for initial estimation, and friction factor $f=0.02$.

**Solution:**

1.  **Head Available for Flow:**
    Head available = Upstream canal water level - Downstream canal water level
    Head available = 105.0 m - 104.5 m = 0.5 m

2.  **Determine Velocity in the Barrel:**
    Let's assume a velocity $V$ in the barrel. A reasonable starting point is often slightly higher than the canal velocity to keep the barrel size manageable, but not too high to cause excessive head loss. Let's try $V = 2.0$ m/s.

3.  **Calculate Area of Barrel:**
    Area $A = Q / V = 30 \, \text{m³}/s / 2.0 \, \text{m/s} = 15 \, \text{m²}$.

4.  **Calculate Diameter of Circular Barrel:**
    $A = \pi D^2 / 4$
    $D^2 = 4A / \pi = 4 \times 15 / \pi \approx 19.1$
    $D = \sqrt{19.1} \approx 4.37$ m.

5.  **Calculate Head Loss due to Friction ($h_f$) using Darcy-Weisbach:**
    We need the hydraulic radius $R$ and friction factor $f$.
    For a circular barrel, $R = D/4 = 4.37/4 = 1.09$ m.
    Using $f=0.02$ (this is a simplification; $f$ is usually found from Moody chart or Colebrook equation).
    $h_f = f \frac{L}{D} \frac{V^2}{2g} = 0.02 \times \frac{50}{4.37} \times \frac{2.0^2}{2 \times 9.81}$
    $h_f = 0.02 \times 11.44 \times \frac{4}{19.62} \approx 0.093$ m.

6.  **Calculate Head Loss using Manning's Formula (as an alternative check or for a more accurate approach):**
    First, calculate the friction slope $S_f$:
    $S_f = (\frac{n V}{R^{2/3}})^2 = (\frac{0.013 \times 2.0}{(1.09)^{2/3}})^2 = (\frac{0.026}{1.06})^2 \approx 0.0245^2 \approx 0.00060$
    $h_f = S_f \times L = 0.00060 \times 50 = 0.030$ m.

    *Note: The discrepancy between Darcy-Weisbach with a assumed 'f' and Manning's is due to the chosen 'f' and the complexity of friction factor determination.* Let's proceed with Manning's as it's more typical for open channel/pressurized flow.

7.  **Consider Entrance and Exit Losses (if applicable):**
    Assuming $h_e = 0.5 \frac{V^2}{2g}$ and $h_x = \frac{V^2}{2g}$.
    $h_e = 0.5 \times \frac{2.0^2}{2 \times 9.81} \approx 0.102$ m.
    $h_x = \frac{2.0^2}{2 \times 9.81} \approx 0.204$ m.
    Total losses $h_L = h_f + h_e + h_x = 0.030 + 0.102 + 0.204 = 0.336$ m.

8.  **Check if Head Available is Sufficient:**
    Head Available = 0.5 m.
    Total Head Loss = 0.336 m.
    Since $0.5 \text{ m} > 0.336 \text{ m}$, the flow is possible with the chosen velocity.

9.  **Refinement (if needed):**
    If the head available was insufficient, we would need to increase the barrel diameter (reducing velocity and friction loss) or consider multiple barrels.
    Let's check the velocity for a larger diameter, say $D = 4.5$ m.
    $A = \pi (4.5)^2 / 4 = 15.92 \, \text{m²}$.
    $V = Q/A = 30 / 15.92 \approx 1.88$ m/s.
    $R = 4.5/4 = 1.125$ m.
    $S_f = (\frac{0.013 \times 1.88}{(1.125)^{2/3}})^2 = (\frac{0.02444}{1.109})^2 \approx 0.0220^2 \approx 0.000484$
    $h_f = 0.000484 \times 50 = 0.0242$ m.
    $h_e = 0.5 \times \frac{1.88^2}{2 \times 9.81} \approx 0.096$ m.
    $h_x = \frac{1.88^2}{2 \times 9.81} \approx 0.192$ m.
    Total losses $h_L = 0.0242 + 0.096 + 0.192 = 0.3122$ m.
    This is also feasible. The designer would choose based on cost, construction practicality, and desired velocity.

    **Final Design Choice (for this example):** Let's select the first option with $D = 4.37$ m and $V = 2.0$ m/s, as it utilizes the head more efficiently. The downstream water level might be lower if more head is available.

**Example 2: Aeration Requirement**

**Problem:**
A syphon aqueduct barrel carries water at a velocity of 2.5 m/s. What is the potential for de-aeration, and what measures could be considered?

**Solution:**
*   **De-aeration:** At velocities above approximately 1 m/s, the water in a closed conduit can become de-aerated. High velocities increase the tendency for dissolved gases to come out of solution.
*   **Measures:**
    *   **Aeration Basins:** At the inlet of the syphon barrel, the canal water can be made to fall from a certain height into the barrel, creating turbulence and allowing air to mix with the water.
    *   **Aeration Weirs/Steps:** Within the syphon, intermediate structures can be designed to cause the water to cascade or splash, promoting aeration.
    *   **Maintaining a Sufficient Freeboard:** In the approach channel to the syphon, maintaining adequate freeboard can help entrain air.

---

### 5. Drawings and Layout

While not performing actual drawing here, understanding the typical drawing components is crucial.

**5.1 Key Components in a Drawing:**

*   **Canal Trough:** The section of the canal leading into and out of the syphon.
*   **Syphon Barrel(s):** The closed conduit(s) passing under the drainage.
*   **Abutments/Wing Walls:** Structures supporting the canal trough at the transition to the syphon.
*   **Inlet Transition:** Gradual change from the open canal trough to the closed barrel.
*   **Outlet Transition:** Gradual change from the closed barrel back to the open canal trough.
*   **Drainage Path:** The river, stream, or natural depression.
*   **Hydraulic Gradient Lines (HGL) and Energy Grade Lines (EGL):** Shown on a longitudinal section to illustrate the flow profile.
*   **Cross-sections:** Showing the dimensions of the canal trough, syphon barrel, and any supporting structures.
*   **Longitudinal Section:** Showing the profile of the canal, syphon barrel, drainage bed, and water levels.

**5.2 Type III Specifics in Drawing:**

*   The syphon barrel will be clearly shown submerged beneath the drainage bed level.
*   The water level in the drainage path during flood conditions will be indicated, showing the extent of submergence of the syphon.
*   The upward curve of the syphon at the inlet and outlet will be detailed, ensuring smooth transition.

---

### 6. Learning Outcomes Checklist

*   **Understand the definition and classification of syphon aqueducts.**
    *   Covered in Section 1.1 and 1.2.
*   **Identify Type III syphon aqueducts and their characteristics.**
    *   Covered in Section 1.3.
*   **Apply hydraulic principles to design the syphon barrel.**
    *   Covered in Section 2.1 to 2.6, including head loss calculations and governing equations.
*   **Calculate head losses in the syphon barrel (entrance, friction, exit).**
    *   Covered in Section 2.2.
*   **Determine appropriate dimensions for the syphon barrel.**
    *   Covered in Section 2.5 and illustrated in Example 1.
*   **Understand the importance of the hydraulic gradient and energy grade line in the design.**
    *   Covered in Section 2.6.
*   **Recognize issues related to aeration and measures to address them.**
    *   Covered in Section 2.7 and Example 2.
*   **Be aware of the structural design considerations.**
    *   Covered in Section 3.
*   **Understand the typical drawing components for a syphon aqueduct.**
    *   Covered in Section 5.

---

### 7. Practice Questions & Exercises

**Question 1:**
A syphon aqueduct carries a discharge of 25 m³/s. The syphon barrel is circular and 60 m long. The upstream water level is 98.5 m and the downstream is 98.0 m. The velocity in the barrel is designed to be 1.8 m/s. Assuming Manning's $n=0.013$, $h_e = 0.5 V^2/(2g)$, and $h_x = V^2/(2g)$. Calculate the total head loss and the required diameter of the syphon barrel.

**Answer 1:**
1.  **Head Available:** $98.5 \, \text{m} - 98.0 \, \text{m} = 0.5 \, \text{m}$.
2.  **Area of Barrel:** $A = Q/V = 25 \, \text{m³/s} / 1.8 \, \text{m/s} = 13.89 \, \text{m²}$.
3.  **Diameter of Barrel:** $D = \sqrt{4A/\pi} = \sqrt{4 \times 13.89 / \pi} \approx \sqrt{17.69} \approx 4.21 \, \text{m}$.
4.  **Hydraulic Radius:** $R = D/4 = 4.21/4 = 1.05 \, \text{m}$.
5.  **Friction Head Loss ($h_f$):**
    $S_f = (\frac{n V}{R^{2/3}})^2 = (\frac{0.013 \times 1.8}{(1.05)^{2/3}})^2 = (\frac{0.0234}{1.034})^2 \approx 0.0226^2 \approx 0.00051$
    $h_f = S_f \times L = 0.00051 \times 60 = 0.0306 \, \text{m}$.
6.  **Entrance Head Loss ($h_e$):**
    $h_e = 0.5 \times \frac{1.8^2}{2 \times 9.81} = 0.5 \times \frac{3.24}{19.62} \approx 0.083 \, \text{m}$.
7.  **Exit Head Loss ($h_x$):**
    $h_x = \frac{1.8^2}{2 \times 9.81} = \frac{3.24}{19.62} \approx 0.165 \, \text{m}$.
8.  **Total Head Loss ($h_L$):**
    $h_L = h_f + h_e + h_x = 0.0306 + 0.083 + 0.165 = 0.2786 \, \text{m}$.

    **Conclusion:** The head available (0.5 m) is greater than the total head loss (0.2786 m), so the design is feasible.

**Question 2:**
What are the main reasons for providing aeration in a syphon aqueduct barrel?

**Answer 2:**
The main reasons for providing aeration in a syphon aqueduct barrel are:
*   **Preventing De-aeration:** As water flows under pressure in a closed conduit, dissolved gases can come out of solution, leading to "gas pockets" or "air locks."
*   **Preventing Cavitation:** De-aerated water can lead to cavitation, which is the formation and collapse of vapor bubbles. This phenomenon can cause significant damage to the structure through erosion and pitting.
*   **Preventing Corrosion:** The presence of dissolved oxygen is necessary for the passivation of steel reinforcement in concrete. De-aerated water can be more corrosive.
*   **Ensuring Efficient Flow:** Air pockets can disrupt the smooth flow of water and create back pressure, reducing the efficiency of the syphon.

---

### 8. Important Points to Remember

*   **Syphon aqueducts are for canal crossings where the canal must pass *below* the drainage bed.**
*   **Type III implies the syphon barrel is submerged, and the drainage water can rise significantly.**
*   **Head loss calculation is critical: $h_L = h_e + h_f + h_x (+ h_{bends})$.**
*   **Ensure the available head (difference in upstream and downstream canal water levels) is greater than the total head loss.**
*   **Velocity selection balances barrel size, cost, and head loss.**
*   **Aeration is essential for long-term durability and performance of the syphon.**
*   **The hydraulic gradient and energy grade line must be analyzed to ensure proper flow and pressure conditions.**
*   **Structural stability under internal and external pressures is a concurrent design requirement.**

---
