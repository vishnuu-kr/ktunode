---
title: "Permeability Test- Constant Head Permeability"
subject: "GEOTECHNICAL ENGINEERING LAB"
module: "Module 12: Permeability Test"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba811012"
status: "completed"
scrapedAt: "2026-05-20T18:48:58.725Z"
---
# Geotechnical Engineering Lab: Module 12 - Permeability Test

## Topic: Permeability Test - Constant Head Permeability

---

### 1. Introduction to Permeability

*   **Definition:** Permeability is a measure of a soil's ability to allow fluids (typically water) to pass through it. It is a crucial property in geotechnical engineering for understanding groundwater flow, seepage analysis, and the design of foundations, dams, and retaining walls.
*   **Importance:**
    *   **Seepage Analysis:** Predicting the rate of water flow through soil structures like dams, levees, and foundations to ensure stability.
    *   **Settlement Analysis:** Estimating consolidation rates and time-dependent settlements, which are influenced by the rate of pore water dissipation.
    *   **Well Design:** Determining the yield of water from wells drilled into aquifers.
    *   **Filtration and Drainage:** Designing filter layers and drainage systems to control water flow.
*   **Factors Affecting Permeability:**
    *   **Grain Size and Distribution:** Larger and better-sorted grains lead to higher permeability.
    *   **Void Ratio:** Higher void ratios generally result in higher permeability.
    *   **Particle Shape:** Rounded particles tend to be more permeable than angular particles due to better interlocking and larger pore spaces.
    *   **Degree of Saturation:** Permeability is typically measured for saturated soils.
    *   **Pore Water Chemistry:** Dissolved salts can affect the viscosity of water and the structure of clay particles, influencing permeability.
    *   **Temperature:** Higher temperatures decrease water viscosity, thus increasing permeability.

---

### 2. Permeability Test: Constant Head Permeability Test

*   **Purpose:** To determine the coefficient of permeability ($k$) of a soil sample under constant head conditions.
*   **Applicability:** Primarily used for **coarse-grained soils** (sands, gravels) where the flow rate is significant enough to be measured accurately over a reasonable period. For fine-grained soils (silts, clays), the flow rate is too low, and the falling head permeability test is preferred.

---

### 3. Theory and Principles

*   **Darcy's Law:** The fundamental principle governing fluid flow through porous media.
    *   **Statement:** The rate of flow ($Q$) through a porous medium is directly proportional to the hydraulic gradient ($i$) and the cross-sectional area ($A$) of flow, and inversely proportional to the length of the flow path ($L$).
    *   **Equation:**
        $Q = k \cdot A \cdot i$
        where:
            *   $Q$ = discharge or flow rate (volume of fluid per unit time, e.g., cm³/s, m³/s)
            *   $k$ = coefficient of permeability (units of velocity, e.g., cm/s, m/s)
            *   $A$ = cross-sectional area of the soil sample perpendicular to the direction of flow (e.g., cm², m²)
            *   $i$ = hydraulic gradient (dimensionless ratio of head loss to flow length)
*   **Hydraulic Gradient ($i$):**
    *   **Definition:** The ratio of the total head loss ($h_L$) to the length of the flow path ($L$).
    *   **Equation:** $i = \frac{h_L}{L}$
    *   **Head Loss ($h_L$):** The difference in total head between the upstream and downstream ends of the soil sample.
    *   **Flow Length ($L$):** The length of the soil sample through which the water flows.

---

### 4. Laboratory Setup and Apparatus

*   **Permeameter:** A cylindrical container where the soil sample is placed.
    *   **Types:**
        *   **Gravel Permeameter:** For larger samples, often used in field permeability tests.
        *   **Standard Permeameter:** For laboratory-scale samples.
*   **Water Supply:** A reservoir or tap that can maintain a constant water level.
*   **Standpipes or Manometers:** To measure the head difference across the soil sample.
*   **Stopwatch:** To measure the time taken for a specific volume of water to collect.
*   **Graduated Cylinder or Measuring Container:** To collect and measure the volume of water that has passed through the sample.
*   **Balance:** To measure the mass of the soil sample and to determine its dry density.
*   **Thermometer:** To record the temperature of the water.
*   **Drying Oven:** To determine the moisture content of the soil sample.

---

### 5. Test Procedure

1.  **Specimen Preparation:**
    *   **Compaction:** Prepare a soil specimen of a known length ($L$) and diameter ($D$) by compacting it to a desired dry density. Ensure uniform compaction.
    *   **Saturation:** Initially saturate the specimen by filling the permeameter with water from the bottom upwards to avoid entrapping air.
2.  **Setup:**
    *   Place the prepared soil specimen in the permeameter.
    *   Ensure watertight seals at the top and bottom of the specimen.
    *   Connect the inlet and outlet of the permeameter to the water supply and collection system, respectively.
    *   Insert standpipes or manometers at the top and bottom of the specimen to measure the water levels.
3.  **Applying Constant Head:**
    *   Allow water to flow through the specimen.
    *   Adjust the water supply to maintain a constant head difference ($h_L$) across the specimen. This is typically achieved by overflow pipes or by controlling the water input.
    *   The head difference ($h_L$) is the difference in water levels in the upstream and downstream standpipes.
4.  **Measuring Flow Rate:**
    *   Once a steady flow is established (water levels in the standpipes remain constant), collect the outflowing water in a graduated cylinder for a measured time interval ($\Delta t$).
    *   Record the volume of water collected ($V$).
5.  **Recording Data:**
    *   Record the following:
        *   Head difference ($h_L$)
        *   Length of the specimen ($L$)
        *   Diameter of the specimen ($D$)
        *   Volume of water collected ($V$)
        *   Time interval ($\Delta t$)
        *   Water temperature
6.  **Repeat Measurements:** Repeat steps 4 and 5 for at least three different constant head differences to ensure accuracy and to check for consistency.
7.  **Specimen Properties:**
    *   After the test, remove the soil specimen and determine its:
        *   Moisture content ($w$)
        *   Dry unit weight ($\gamma_d$) or dry density ($\rho_d$)
        *   Specific gravity of soil solids ($G_s$) (if not known)

---

### 6. Calculations

1.  **Discharge Rate ($Q$):**
    *   $Q = \frac{V}{\Delta t}$
    *   Units: Volume/Time (e.g., cm³/s)
2.  **Cross-sectional Area ($A$):**
    *   $A = \frac{\pi D^2}{4}$
    *   Units: Area (e.g., cm²)
3.  **Hydraulic Gradient ($i$):**
    *   $i = \frac{h_L}{L}$
    *   Units: Dimensionless
4.  **Coefficient of Permeability ($k$):**
    *   Rearranging Darcy's Law: $k = \frac{Q \cdot L}{A \cdot h_L}$
    *   Units: Velocity (e.g., cm/s)
5.  **Correcting for Temperature:**
    *   The measured permeability ($k$) is usually at the laboratory water temperature. To compare with standard values or for different applications, it's often corrected to a reference temperature (e.g., 20°C).
    *   $k_T = k_{lab} \cdot \frac{\mu_{lab}}{\mu_T}$
    *   where:
        *   $k_T$ = permeability at reference temperature $T$
        *   $k_{lab}$ = permeability measured at laboratory temperature
        *   $\mu_{lab}$ = viscosity of water at laboratory temperature
        *   $\mu_T$ = viscosity of water at reference temperature $T$
    *   **Note:** The viscosity of water decreases as temperature increases. Values of viscosity at different temperatures can be found in tables or calculated. A simplified empirical relation can also be used.

---

### 7. Example Calculation

**Problem:**
A constant head permeability test was conducted on a soil sample of length 10 cm and diameter 5 cm. The head difference across the sample was maintained at 25 cm. In 5 minutes, 300 cm³ of water was collected. The temperature of the water was 22°C. Assume the viscosity of water at 22°C is $0.95 \times 10^{-3}$ Pa·s and at 20°C is $1.01 \times 10^{-3}$ Pa·s.

**Solution:**

1.  **Given Data:**
    *   $L = 10$ cm
    *   $D = 5$ cm
    *   $h_L = 25$ cm
    *   $V = 300$ cm³
    *   $\Delta t = 5$ minutes $= 5 \times 60 = 300$ seconds
    *   $T_{lab} = 22$°C
    *   $\mu_{lab}$ at 22°C $= 0.95 \times 10^{-3}$ Pa·s
    *   $\mu_{ref}$ at 20°C $= 1.01 \times 10^{-3}$ Pa·s

2.  **Calculate Discharge Rate ($Q$):**
    *   $Q = \frac{V}{\Delta t} = \frac{300 \text{ cm}^3}{300 \text{ s}} = 1 \text{ cm}^3/\text{s}$

3.  **Calculate Cross-sectional Area ($A$):**
    *   $A = \frac{\pi D^2}{4} = \frac{\pi (5 \text{ cm})^2}{4} = \frac{25\pi}{4} \approx 19.63 \text{ cm}^2$

4.  **Calculate Hydraulic Gradient ($i$):**
    *   $i = \frac{h_L}{L} = \frac{25 \text{ cm}}{10 \text{ cm}} = 2.5$

5.  **Calculate Coefficient of Permeability ($k$) at 22°C:**
    *   $k_{22°C} = \frac{Q \cdot L}{A \cdot h_L} = \frac{(1 \text{ cm}^3/\text{s}) \cdot (10 \text{ cm})}{(19.63 \text{ cm}^2) \cdot (25 \text{ cm})} = \frac{10}{490.75} \approx 0.0204 \text{ cm/s}$

6.  **Correct for Temperature to 20°C:**
    *   $k_{20°C} = k_{22°C} \cdot \frac{\mu_{22°C}}{\mu_{20°C}} = 0.0204 \text{ cm/s} \cdot \frac{0.95 \times 10^{-3} \text{ Pa·s}}{1.01 \times 10^{-3} \text{ Pa·s}}$
    *   $k_{20°C} = 0.0204 \text{ cm/s} \cdot 0.9406 \approx 0.0192 \text{ cm/s}$

**Answer:** The coefficient of permeability at 22°C is approximately 0.0204 cm/s, and corrected to 20°C, it is approximately 0.0192 cm/s.

---

### 8. Learning Outcomes Covered

*   **Understand the concept of permeability and its significance in geotechnical engineering.** (Covered in Section 1)
*   **Identify the purpose and applicability of the constant head permeability test.** (Covered in Section 2)
*   **Explain the theoretical basis of the test, including Darcy's Law.** (Covered in Section 3)
*   **Describe the laboratory apparatus and setup for the constant head permeability test.** (Covered in Section 4)
*   **Outline the step-by-step procedure for conducting the test.** (Covered in Section 5)
*   **Perform the necessary calculations to determine the coefficient of permeability.** (Covered in Section 6 and 7)
*   **Apply temperature corrections to the determined coefficient of permeability.** (Covered in Section 6)

---

### 9. Important Points to Remember

*   **Applicable for coarse-grained soils:** The constant head test is suitable for sands and gravels.
*   **Constant Head:** Maintaining a stable head difference is crucial for accurate results.
*   **Saturation:** Ensure the soil specimen is fully saturated to avoid air entrapment, which can significantly affect flow.
*   **Steady Flow:** Wait for steady-state flow conditions before taking measurements.
*   **Temperature Correction:** Always consider and apply temperature corrections if comparing results or using them in designs that require a standard reference temperature.
*   **Uniformity:** Uniform compaction and absence of voids or cracks in the specimen are essential.
*   **Watertight Seals:** Ensure no leakage occurs around the specimen or the permeameter.

---

### 10. Practice Questions/Exercises

**Question 1:**
Define permeability and list three factors that influence it.

**Question 2:**
For which type of soils is the constant head permeability test most suitable? Why?

**Question 3:**
State Darcy's Law in words and provide its mathematical expression. Define each term.

**Question 4:**
A constant head permeability test yielded the following data:
*   Length of specimen = 15 cm
*   Diameter of specimen = 6 cm
*   Head difference = 30 cm
*   Volume of water collected in 3 minutes = 450 cm³
Calculate the coefficient of permeability ($k$) in cm/s.

**Question 5:**
The measured permeability of a soil sample at 25°C is 0.05 cm/s. If the viscosity of water at 25°C is $0.798 \times 10^{-3}$ Pa·s and at 20°C is $1.01 \times 10^{-3}$ Pa·s, calculate the permeability corrected to 20°C.

---

### Answers to Practice Questions

**Answer 1:**
Permeability is a measure of a soil's ability to transmit fluids. Three factors influencing permeability are:
*   Grain size and distribution
*   Void ratio
*   Particle shape

**Answer 2:**
The constant head permeability test is most suitable for coarse-grained soils (sands and gravels). This is because these soils have higher permeability, allowing for a measurable flow rate within a reasonable time period. For fine-grained soils, the flow rate is too low for the constant head test to be practical.

**Answer 3:**
Darcy's Law states that the rate of flow through a porous medium is directly proportional to the hydraulic gradient and the cross-sectional area of flow.
Mathematical expression: $Q = k \cdot A \cdot i$
Where:
*   $Q$ = discharge or flow rate
*   $k$ = coefficient of permeability
*   $A$ = cross-sectional area of flow
*   $i$ = hydraulic gradient

**Answer 4:**
*   $L = 15$ cm
*   $D = 6$ cm
*   $h_L = 30$ cm
*   $V = 450$ cm³
*   $\Delta t = 3$ minutes $= 3 \times 60 = 180$ seconds

1.  **Discharge Rate ($Q$):**
    $Q = \frac{V}{\Delta t} = \frac{450 \text{ cm}^3}{180 \text{ s}} = 2.5 \text{ cm}^3/\text{s}$

2.  **Cross-sectional Area ($A$):**
    $A = \frac{\pi D^2}{4} = \frac{\pi (6 \text{ cm})^2}{4} = \frac{36\pi}{4} = 9\pi \approx 28.27 \text{ cm}^2$

3.  **Hydraulic Gradient ($i$):**
    $i = \frac{h_L}{L} = \frac{30 \text{ cm}}{15 \text{ cm}} = 2$

4.  **Coefficient of Permeability ($k$):**
    $k = \frac{Q \cdot L}{A \cdot h_L} = \frac{(2.5 \text{ cm}^3/\text{s}) \cdot (15 \text{ cm})}{(28.27 \text{ cm}^2) \cdot (30 \text{ cm})} = \frac{37.5}{848.1} \approx 0.0442 \text{ cm/s}$

**Answer:** The coefficient of permeability ($k$) is approximately 0.0442 cm/s.

**Answer 5:**
*   $k_{25°C} = 0.05$ cm/s
*   $\mu_{25°C} = 0.798 \times 10^{-3}$ Pa·s
*   $\mu_{20°C} = 1.01 \times 10^{-3}$ Pa·s

$k_{20°C} = k_{25°C} \cdot \frac{\mu_{25°C}}{\mu_{20°C}}$
$k_{20°C} = 0.05 \text{ cm/s} \cdot \frac{0.798 \times 10^{-3} \text{ Pa·s}}{1.01 \times 10^{-3} \text{ Pa·s}}$
$k_{20°C} = 0.05 \text{ cm/s} \cdot 0.7901 \approx 0.0395 \text{ cm/s}$

**Answer:** The permeability corrected to 20°C is approximately 0.0395 cm/s.
