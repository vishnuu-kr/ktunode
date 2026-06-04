---
title: "Test on stress-strain characteristics of mild steel and Tor Steel by conducting uniaxial tension test on rod specimens"
subject: "MATERIALS TESTING LAB"
module: "Module 1: Test on stress"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810d01"
status: "completed"
scrapedAt: "2026-05-20T18:45:39.904Z"
---
# MATERIALS TESTING LAB

## Module 1: Test on Stress

### Topic: Stress-Strain Characteristics of Mild Steel and Tor Steel via Uniaxial Tension Test on Rod Specimens

---

### 1. Introduction to Stress and Strain

**1.1. Stress:**

*   **Definition:** Stress is a measure of the internal forces that particles within a continuous material exert on each other. It's the force applied per unit area.
*   **Formula:** $\sigma = \frac{P}{A_0}$
    *   $\sigma$: Engineering Stress (unit: Pascals (Pa) or N/mm², psi)
    *   $P$: Applied Load (unit: Newtons (N), pounds (lb))
    *   $A_0$: Original Cross-sectional Area of the specimen (unit: m², mm², in²)
*   **Types of Stress:**
    *   **Tensile Stress:** Stress resulting from a pulling force, tending to stretch the material.
    *   **Compressive Stress:** Stress resulting from a pushing force, tending to shorten the material.
    *   **Shear Stress:** Stress resulting from forces acting parallel to a surface.

**1.2. Strain:**

*   **Definition:** Strain is a measure of the deformation of a material in response to applied stress. It's the change in length per unit of original length.
*   **Formula:** $\epsilon = \frac{\Delta L}{L_0}$
    *   $\epsilon$: Engineering Strain (dimensionless, often expressed as a percentage or in microstrain)
    *   $\Delta L$: Change in Length of the specimen (unit: meters (m), millimeters (mm), inches (in))
    *   $L_0$: Original Length of the specimen (unit: meters (m), millimeters (mm), inches (in))
*   **Types of Strain:**
    *   **Tensile Strain:** Strain resulting from tensile stress, representing elongation.
    *   **Compressive Strain:** Strain resulting from compressive stress, representing shortening.
    *   **Shear Strain:** Strain resulting from shear stress, representing angular distortion.

---

### 2. The Uniaxial Tension Test

**2.1. Objective:**

*   To determine the mechanical properties of a material, specifically its stress-strain behavior, under a gradually increasing tensile load.
*   To compare the stress-strain characteristics of mild steel and Tor steel.

**2.2. Apparatus:**

*   **Universal Testing Machine (UTM):** A machine capable of applying controlled tensile or compressive loads and measuring the applied force. It typically includes:
    *   **Load Cell:** Measures the applied force.
    *   **Extensometer (Optional but Recommended):** A device attached to the specimen to accurately measure its elongation over a specific gauge length. This provides more precise strain measurements than relying solely on crosshead movement.
    *   **Grips:** To securely hold the specimen ends.
    *   **Data Acquisition System:** To record load and displacement (or strain) data.
*   **Specimen:** A standardized rod specimen of mild steel and Tor steel with a defined gauge length and cross-sectional area.

**2.3. Specimen Preparation:**

*   **Material:** Mild Steel and Tor Steel (often referred to as TMT bars or deformed bars).
*   **Shape:** Typically cylindrical or with a uniform cross-section over the gauge length. Tor steel will have ribs or deformations on its surface.
*   **Dimensions:** Gauge length ($L_0$) and original cross-sectional area ($A_0$) are critical for calculations. These are measured precisely before the test.

**2.4. Test Procedure:**

1.  **Measure Specimen Dimensions:** Accurately measure the original diameter (for circular specimens) or dimensions of the cross-section, and the gauge length of the specimen.
2.  **Mount Specimen:** Securely grip the specimen in the UTM. Ensure proper alignment to avoid bending.
3.  **Attach Extensometer (if used):** Attach the extensometer to the specimen over the designated gauge length.
4.  **Set Zero:** Reset the load and displacement/strain readings to zero.
5.  **Apply Load:** Gradually increase the tensile load at a constant rate.
6.  **Record Data:** Continuously record the applied load and the corresponding elongation (or strain) at regular intervals.
7.  **Continue Loading:** Continue applying the load until the specimen fractures.
8.  **Remove Specimen:** Carefully remove the fractured specimen from the machine.
9.  **Measure Final Dimensions:** Measure the final gauge length and the minimum cross-sectional area at the fracture point (necking area).

---

### 3. Stress-Strain Curve and Key Characteristics

**3.1. Engineering Stress-Strain Curve:**

*   A graphical representation of the relationship between engineering stress ($\sigma$) on the y-axis and engineering strain ($\epsilon$) on the x-axis.
*   This curve reveals the material's mechanical behavior from elastic deformation to failure.

**3.2. Key Points and Regions on the Curve (Typical for Mild Steel):**

*   **Elastic Region:**
    *   **Definition:** The initial portion of the curve where stress is directly proportional to strain. The material returns to its original shape upon unloading.
    *   **Hooke's Law:** Within this region, stress is proportional to strain ($\sigma = E \epsilon$).
    *   **Proportional Limit ($\sigma_p$):** The point up to which stress is directly proportional to strain.
    *   **Elastic Limit ($\sigma_e$):** The maximum stress the material can withstand without permanent deformation. Often very close to the proportional limit.
    *   **Young's Modulus (Modulus of Elasticity, $E$):** The slope of the linear portion of the stress-strain curve in the elastic region. It represents the stiffness of the material.
        *   **Formula:** $E = \frac{\Delta \sigma}{\Delta \epsilon}$ (slope of the elastic region)
*   **Plastic Region:**
    *   **Definition:** The region beyond the elastic limit where deformation is permanent. The material will not return to its original shape upon unloading.
    *   **Yielding:** The process by which a material begins to deform plastically.
    *   **Yield Strength ($\sigma_y$):** The stress at which the material begins to yield. For mild steel, this is often characterized by a distinct yield point.
        *   **Upper Yield Point:** The maximum stress reached just before the material begins to yield significantly.
        *   **Lower Yield Point:** The stress at which significant plastic deformation occurs with little or no increase in stress. This plateau is characteristic of mild steel.
    *   **Yielding of Tor Steel:** Tor steel (deformed bars) typically does not exhibit a distinct upper and lower yield point. Instead, it shows a gradual yielding behavior. The yield strength is usually determined using the 0.2% offset method.
        *   **0.2% Offset Method:** A line parallel to the elastic portion of the stress-strain curve is drawn from a strain of 0.002 (0.2%) on the strain axis. The stress at which this line intersects the stress-strain curve is defined as the yield strength.
    *   **Strain Hardening (Work Hardening):** As the material continues to deform plastically, its resistance to further deformation increases. This is reflected by an upward slope in the stress-strain curve after yielding.
    *   **Tensile Strength (Ultimate Tensile Strength, UTS, $\sigma_u$):** The maximum stress the material can withstand before it starts to neck. This is the peak of the stress-strain curve.
*   **Necking Region:**
    *   **Definition:** After reaching the UTS, the specimen begins to deform locally in a smaller cross-sectional area, forming a "neck."
    *   The engineering stress *decreases* in this region because the load is divided by the *original* cross-sectional area, while the *actual* cross-sectional area is reducing significantly.
*   **Fracture:**
    *   **Definition:** The point at which the specimen breaks.
    *   **Fracture Strength:** The stress at which the specimen fractures.

**3.3. True Stress and True Strain:**

*   **True Stress:** Defined as the instantaneous load divided by the instantaneous cross-sectional area ($\sigma_t = \frac{P}{A_i}$, where $A_i$ is the instantaneous area).
*   **True Strain:** Defined as the natural logarithm of the ratio of instantaneous length to original length ($\epsilon_t = \ln(\frac{L_i}{L_0}) = \ln(1+\epsilon)$).
*   **True Stress-Strain Curve:** The true stress-strain curve rises more steeply than the engineering curve after yielding due to the reduction in cross-sectional area, and it continues to rise until fracture.

---

### 4. Comparison of Mild Steel and Tor Steel

| Feature           | Mild Steel                                     | Tor Steel (Deformed Bar)                            |
| :---------------- | :--------------------------------------------- | :-------------------------------------------------- |
| **Yield Point**   | Distinct upper and lower yield points.         | Gradual yielding, no distinct yield point.        |
| **Yield Strength**| Determined from the lower yield point.         | Typically determined by the 0.2% offset method.     |
| **Ductility**     | Generally higher ductility.                    | Can have slightly lower ductility than mild steel. |
| **Tensile Strength**| Lower than Tor Steel.                          | Higher than Mild Steel.                             |
| **Strain Hardening**| Exhibits significant strain hardening after yield. | Also exhibits strain hardening.                     |
| **Surface**       | Smooth surface.                                | Ribbed or deformed surface for better bond with concrete. |
| **Application**   | Structural frames, general fabrication.        | Reinforcement in concrete structures.               |

**Important Note:** The deformation ribs on Tor steel are primarily for improving the bond with concrete. They can influence the surface strain distribution during testing, but the fundamental stress-strain behavior is still captured.

---

### 5. Calculations and Data Analysis

*   **Calculate Engineering Stress:** For each load reading, $\sigma = P / A_0$.
*   **Calculate Engineering Strain:** For each elongation reading, $\epsilon = \Delta L / L_0$.
*   **Plot Stress-Strain Curve:** Plot $\sigma$ (y-axis) vs. $\epsilon$ (x-axis).
*   **Determine Young's Modulus ($E$):** Calculate the slope of the linear portion of the curve.
*   **Determine Yield Strength ($\sigma_y$):**
    *   For Mild Steel: Read from the graph (lower yield point).
    *   For Tor Steel: Apply the 0.2% offset method.
*   **Determine Tensile Strength (UTS, $\sigma_u$):** Find the maximum stress value from the graph.
*   **Calculate Percentage Elongation (% Elongation):** $\text{% Elongation} = \frac{L_f - L_0}{L_0} \times 100$, where $L_f$ is the final gauge length at fracture. This is a measure of ductility.
*   **Calculate Percentage Reduction in Area (% RA):** $\text{% RA} = \frac{A_0 - A_f}{A_0} \times 100$, where $A_f$ is the final minimum cross-sectional area at the fracture point. This is another measure of ductility.

---

### 6. Properties of Mild Steel and Tor Steel (Typical Values)

| Property              | Mild Steel (e.g., IS 2062 Grade E250) | Tor Steel (e.g., Fe 415, Fe 500, Fe 550) |
| :-------------------- | :----------------------------------- | :-------------------------------------- |
| **Yield Strength**    | ~250 MPa (N/mm²)                     | ~415 MPa, 500 MPa, 550 MPa etc.         |
| **Tensile Strength**  | ~400-440 MPa (N/mm²)                 | ~545 MPa, 600 MPa, 700 MPa etc.         |
| **Young's Modulus**   | ~200 GPa (N/mm²)                     | ~200 GPa (N/mm²)                        |
| **Elongation (%)**    | ~20-25%                              | ~12-18%                                 |

**Important Note:** These are typical values and can vary based on specific grades and manufacturing processes.

---

### 7. Practice Questions and Exercises

**Question 1:** Define engineering stress and engineering strain. Write down their formulas.

**Answer 1:**
*   **Engineering Stress:** Internal force per unit original cross-sectional area. Formula: $\sigma = \frac{P}{A_0}$.
*   **Engineering Strain:** Change in length per unit original length. Formula: $\epsilon = \frac{\Delta L}{L_0}$.

**Question 2:** What are the key points on the stress-strain curve of mild steel? Briefly describe each.

**Answer 2:**
*   **Proportional Limit:** Stress where stress is proportional to strain (Hooke's Law holds).
*   **Elastic Limit:** Maximum stress before permanent deformation occurs.
*   **Yield Point:** Stress at which significant plastic deformation begins (upper and lower points for mild steel).
*   **Tensile Strength (UTS):** Maximum stress the material can withstand before necking.
*   **Fracture Point:** Point where the specimen breaks.

**Question 3:** How is the yield strength of Tor steel typically determined?

**Answer 3:** The yield strength of Tor steel is typically determined using the 0.2% offset method. A line parallel to the elastic portion of the stress-strain curve is drawn from a strain of 0.002 (0.2%). The stress at which this line intersects the curve is the yield strength.

**Question 4:** A mild steel specimen with an original diameter of 12 mm and a gauge length of 50 mm is tested. During the test, it yielded at a load of 80 kN and fractured at a maximum load of 110 kN. The final gauge length at fracture was 65 mm, and the minimum diameter at the fracture surface was 8 mm. Calculate:
    a) The yield strength ($\sigma_y$).
    b) The tensile strength ($\sigma_u$).
    c) The percentage elongation (% Elongation).
    d) The percentage reduction in area (% RA).

**Answer 4:**
Given:
$d_0 = 12$ mm
$L_0 = 50$ mm
Yield Load ($P_y$) = 80 kN = $80 \times 10^3$ N
Maximum Load ($P_{max}$) = 110 kN = $110 \times 10^3$ N
Final Gauge Length ($L_f$) = 65 mm
Final Diameter ($d_f$) = 8 mm

Original Area ($A_0$) = $\frac{\pi}{4} d_0^2 = \frac{\pi}{4} (12 \text{ mm})^2 \approx 113.1$ mm²

a) **Yield Strength ($\sigma_y$):**
Assuming the yield point is reached at the given yield load (for a simplified calculation, as mild steel has a distinct yield point).
$\sigma_y = \frac{P_y}{A_0} = \frac{80 \times 10^3 \text{ N}}{113.1 \text{ mm}^2} \approx 707.3$ N/mm² (or MPa)

b) **Tensile Strength ($\sigma_u$):**
$\sigma_u = \frac{P_{max}}{A_0} = \frac{110 \times 10^3 \text{ N}}{113.1 \text{ mm}^2} \approx 972.6$ N/mm² (or MPa)

c) **Percentage Elongation (% Elongation):**
$\text{% Elongation} = \frac{L_f - L_0}{L_0} \times 100 = \frac{65 \text{ mm} - 50 \text{ mm}}{50 \text{ mm}} \times 100 = \frac{15}{50} \times 100 = 30\%$

d) **Percentage Reduction in Area (% RA):**
Final Area ($A_f$) = $\frac{\pi}{4} d_f^2 = \frac{\pi}{4} (8 \text{ mm})^2 \approx 50.27$ mm²
$\text{% RA} = \frac{A_0 - A_f}{A_0} \times 100 = \frac{113.1 \text{ mm}^2 - 50.27 \text{ mm}^2}{113.1 \text{ mm}^2} \times 100 = \frac{62.83}{113.1} \times 100 \approx 55.55\%$

**Question 5:** A specimen of Tor Steel experiences a strain of 0.0015 in the elastic region. If its Young's Modulus is 200 GPa, what is the stress in the specimen?

**Answer 5:**
Given:
$\epsilon = 0.0015$
$E = 200$ GPa $= 200 \times 10^3$ MPa (N/mm²)

Using Hooke's Law: $\sigma = E \epsilon$
$\sigma = (200 \times 10^3 \text{ MPa}) \times 0.0015 = 300$ MPa

---

### 8. Important Points to Remember

*   **Units:** Be consistent with units throughout calculations (e.g., N and mm for MPa, or N and m for Pa).
*   **Engineering vs. True Stress/Strain:** Understand the difference and when each is appropriate. The uniaxial tension test usually yields engineering stress-strain data.
*   **Specimen Geometry:** Accurate measurement of original dimensions is crucial for correct calculations.
*   **Extensometer:** Using an extensometer provides more accurate strain readings than relying solely on the UTM's crosshead movement, especially for determining the elastic modulus and yield point.
*   **Yielding in Tor Steel:** Always use the 0.2% offset method for determining the yield strength of Tor steel and similar materials that don't have a distinct yield point.
*   **Ductility:** Percentage elongation and percentage reduction in area are key indicators of a material's ductility.
*   **Safety:** Always follow proper safety procedures when operating the UTM and handling specimens.

---
