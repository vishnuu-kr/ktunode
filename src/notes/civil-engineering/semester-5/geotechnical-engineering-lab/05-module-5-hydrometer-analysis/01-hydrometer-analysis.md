---
title: "Hydrometer analysis"
subject: "GEOTECHNICAL ENGINEERING LAB"
module: "Module 5: Hydrometer analysis"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba811001"
status: "completed"
scrapedAt: "2026-05-20T18:48:49.712Z"
---
# GEOTECHNICAL ENGINEERING LAB

## Module 5: Hydrometer Analysis

### Topic: Hydrometer Analysis

---

### 1. Introduction to Hydrometer Analysis

**Purpose:**
Hydrometer analysis is a sedimentation test used to determine the particle-size distribution of fine-grained soils, specifically those passing the No. 200 (75 µm) sieve (silt and clay fractions). It complements sieve analysis, which is suitable for coarser particles.

**Underlying Principle:**
The test is based on Stokes' Law, which describes the terminal velocity of a spherical particle falling through a viscous fluid under gravity. Stokes' Law relates the particle diameter to its settling velocity, the fluid viscosity, and the specific gravity of the soil particles.

**Key Concepts:**

*   **Sedimentation:** The process of fine particles settling out of a suspension over time.
*   **Stokes' Law:**  $v = \frac{g D^2 (\rho_s - \rho_f)}{18 \eta}$
    *   $v$: Velocity of settling particle (m/s)
    *   $g$: Acceleration due to gravity (9.81 m/s²)
    *   $D$: Diameter of the particle (m)
    *   $\rho_s$: Specific gravity of soil particles
    *   $\rho_f$: Specific gravity of the fluid (water)
    *   $\eta$: Dynamic viscosity of the fluid (Pa·s or N·s/m²)

**Important Notes:**
*   Stokes' Law assumes particles are spherical, smooth, and of uniform size, which is an idealization for soil particles.
*   The hydrometer method provides a *cumulative* percentage finer than a given particle size.

---

### 2. Apparatus and Materials

*   **Hydrometer:** A specialized float with a graduated stem to measure the density of the soil suspension. Common types include ASTM 152H, ASTM 151H, or BS 903.
*   **Dispersion Cup/Stirrer:** To break up soil aggregates and create a uniform suspension.
*   **Beaker (e.g., 1000 ml):** To hold the soil suspension.
*   **Thermometer:** To measure the temperature of the suspension, as viscosity is temperature-dependent.
*   **Stopwatch:** To record elapsed time.
*   **Balance:** For weighing soil samples.
*   **Oven:** For drying soil samples.
*   **Distilled Water:** Used as the fluid medium.
*   **Dispersing Agent:** To prevent flocculation (clumping) of fine particles. Common agents include sodium hexametaphosphate (Calgon) or sodium silicate.
*   **Sieve (No. 200 / 75 µm):** To separate the fine fraction of the soil.

---

### 3. Procedure for Hydrometer Analysis

**3.1. Sample Preparation:**

*   **Dry Sieving (Optional but Recommended):** Perform sieve analysis on a representative portion of the soil to determine the percentage of particles coarser than the No. 200 sieve. The hydrometer analysis is only performed on the material that passes the No. 200 sieve.
*   **Weighing the Fine Fraction:** Take a known mass of soil (e.g., 50-100g) that has already passed the No. 200 sieve.
*   **Dispersing the Soil:**
    *   Place the weighed fine soil fraction in a dispersion cup.
    *   Add a measured amount of dispersing agent (e.g., 40-50 ml of 4% sodium hexametaphosphate solution).
    *   Add distilled water to cover the soil.
    *   Mix thoroughly using a high-speed stirrer for a specified time (e.g., 1-2 minutes) to break down soil aggregates.

**3.2. Setting up the Hydrometer Test:**

*   **Transfer to Hydrometer Jar:** Carefully transfer the dispersed soil suspension into a 1000 ml graduated cylinder (hydrometer jar).
*   **Rinse:** Rinse the dispersion cup and stirrer with distilled water to ensure all soil particles are transferred.
*   **Add Water:** Fill the hydrometer jar to the 1000 ml mark with distilled water.
*   **Mix Thoroughly:** Stir the suspension with a plunger or a stirring rod to ensure a homogeneous mixture. Remove the plunger carefully to avoid introducing air bubbles.
*   **Start Timing:** Begin timing immediately after the last particle has settled or the plunger has been removed (zero time).

**3.3. Taking Hydrometer Readings:**

*   **Insert Hydrometer:** Gently insert the hydrometer into the suspension.
*   **Take Readings:**
    *   At specified time intervals (e.g., 15 seconds, 30 seconds, 1 minute, 2 minutes, 4 minutes, 8 minutes, 15 minutes, 30 minutes, 1 hour, 2 hours, etc.), carefully remove the hydrometer, lightly wipe it, and re-insert it.
    *   Allow the hydrometer to settle and take a reading from the graduated stem. The reading is the top of the meniscus.
*   **Record Temperature:** Record the temperature of the suspension at each reading interval.

---

### 4. Calculations and Corrections

**4.1. Hydrometer Correction Factors:**

*   **Meniscus Correction ($C_m$):** The hydrometer is calibrated to read from the bottom of the meniscus. If readings are taken from the top of the meniscus, a correction needs to be applied. This is usually a constant value provided by the manufacturer or determined experimentally.
*   **Dispersing Agent Correction ($C_d$):** The presence of a dispersing agent increases the density of the water, affecting the hydrometer reading. This correction accounts for the specific gravity of the dispersing agent.
*   **Temperature Correction ($C_t$):** The viscosity and density of water are temperature-dependent. A correction factor is applied to account for deviations from the calibration temperature of the hydrometer (usually 20°C). This correction can be found in standard tables or charts.
*   **Zero Correction ($C_0$):** This correction is applied to account for the effective volume displacement of the hydrometer itself. It's typically determined by taking a reading in plain water with the dispersing agent added.

**Effective Reading = Hydrometer Reading + Meniscus Correction + Dispersing Agent Correction + Temperature Correction**

**4.2. Calculating Particle Diameter ($D$):**

Stokes' Law can be rearranged to solve for particle diameter:
$D = \sqrt{\frac{30 \eta L}{g (\rho_s - \rho_f)}}$

Where:
*   $L$: Effective depth of the particle at the time of the reading (distance from the surface of the suspension to the bottom of the hydrometer bulb). This is calculated as:
    $L = L_h + C_h$
    *   $L_h$: Reading on the hydrometer stem.
    *   $C_h$: Hydrometer bulb correction (distance from the bottom of the bulb to the zero mark on the stem). This is often incorporated into the meniscus correction.
*   $\eta$: Dynamic viscosity of water at the measured temperature.
*   $\rho_s$: Specific gravity of soil particles (typically assumed as 2.65 for most soils unless determined otherwise).
*   $\rho_f$: Specific gravity of water at the measured temperature (approximately 1.000).

**Simplified Formula for Diameter (ASTM):**
$D = K \sqrt{\frac{L}{t}}$

Where:
*   $K$: Constant that depends on temperature, specific gravity of soil solids, and viscosity of water.
*   $L$: Effective depth (calculated as described above).
*   $t$: Time elapsed from the start of sedimentation.

**4.3. Calculating Percentage Finer (P):**

The percentage of particles finer than diameter $D$ at time $t$ is calculated as:

$P = \frac{V_s}{W_s} \times 100$

Where:
*   $V_s$: Volume of soil solids suspended in the water at the time of reading. This is calculated from the effective hydrometer reading and the volume of the hydrometer bulb.
    $V_s = (R_{effective} - V_{bulb}) \times \frac{1}{V_{jar}}$
    *   $R_{effective}$: The effective hydrometer reading.
    *   $V_{bulb}$: The volume displaced by the hydrometer bulb (a constant).
    *   $V_{jar}$: The total volume of the suspension (e.g., 1000 ml).
*   $W_s$: Total weight of the soil sample used in the test (dry weight of the fine fraction).

**Simplified Calculation:**
$P = \frac{A \times 1000}{W_s}$

Where:
*   $A$: Apparent specific gravity of the suspension, calculated as $1 + \frac{R_{effective}}{1000}$ (where $R_{effective}$ is the reading from the hydrometer). This is directly related to the density of the suspension.
*   $W_s$: Dry weight of the soil sample passing the No. 200 sieve.

---

### 5. Data Presentation and Interpretation

**5.1. Data Tabulation:**

| Time (min) | Temp (°C) | Hydrometer Reading ($R_h$) | $C_m$ | $C_d$ | $C_t$ | $R_{effective}$ | $L$ (mm) | $K$ | $D$ (mm) | % Finer (P) |
| :--------- | :-------- | :------------------------- | :---- | :---- | :---- | :-------------- | :------- | :-- | :------- | :---------- |
| 0.25       |           |                            |       |       |       |                 |          |     |          |             |
| 0.5        |           |                            |       |       |       |                 |          |     |          |             |
| 1          |           |                            |       |       |       |                 |          |     |          |             |
| ...        |           |                            |       |       |       |                 |          |     |          |             |

**5.2. Grain-Size Distribution Curve:**

*   Plot the percentage finer (P) on the y-axis (logarithmic scale) against the particle diameter (D) on the x-axis (logarithmic scale).
*   Extend the curve to the right to include the results from sieve analysis.

**5.3. Soil Classification:**

*   Use the grain-size distribution curve to classify the soil according to systems like the Unified Soil Classification System (USCS) or AASHTO.
*   Determine characteristic sizes like $D_{10}$ (effective size), $D_{30}$, and $D_{60}$.
*   Calculate the coefficient of uniformity ($C_u = D_{60}/D_{10}$) and coefficient of gradation ($C_c = D_{30}^2 / (D_{60} \times D_{10})$).

---

### 6. Learning Outcomes Covered

*   **Understanding the purpose of hydrometer analysis:** To determine the particle-size distribution of fine-grained soils (silt and clay).
*   **Familiarity with the underlying principle (Stokes' Law):** How particle settling velocity relates to size, fluid properties, and specific gravity.
*   **Knowledge of the apparatus and materials required:** Hydrometer, dispersion cup, beaker, thermometer, stopwatch, balance, oven, distilled water, dispersing agent.
*   **Proficiency in the test procedure:** Sample preparation, dispersing, taking hydrometer and temperature readings at specified intervals.
*   **Ability to perform necessary calculations and apply corrections:** Meniscus, dispersing agent, temperature, zero corrections, calculating effective depth and particle diameter, and determining the percentage finer.
*   **Skill in presenting and interpreting the results:** Tabulating data, plotting the grain-size distribution curve, and using it for soil classification and determining characteristic sizes.

---

### 7. Practice Questions and Exercises

**Question 1:**
Explain the fundamental principle behind the hydrometer analysis. What law governs the settling of soil particles in a suspension?

**Answer:**
The fundamental principle of hydrometer analysis is sedimentation, governed by Stokes' Law. Stokes' Law describes the terminal velocity of a spherical particle falling through a viscous fluid under gravity, relating the particle's diameter to its settling velocity and the properties of the fluid and the particle.

**Question 2:**
List at least three common corrections that need to be applied to raw hydrometer readings. Briefly explain why each correction is necessary.

**Answer:**
1.  **Meniscus Correction ($C_m$):** Accounts for the reading taken from the top of the meniscus instead of the bottom, due to surface tension.
2.  **Dispersing Agent Correction ($C_d$):** Accounts for the effect of the dispersing agent on the density of the suspending fluid.
3.  **Temperature Correction ($C_t$):** Accounts for the variation in water viscosity and density with temperature, as these properties change from the hydrometer's calibration temperature.

**Question 3:**
A hydrometer reading is taken in a soil suspension at 20°C. The hydrometer reads 30. The soil sample used had a dry weight of 50g, and passed the No. 200 sieve. Calculate the apparent percentage of clay-sized particles (assume diameter < 0.002 mm) if the effective hydrometer reading (after all corrections) is 28. Use the simplified formula $P = \frac{A \times 1000}{W_s}$ where $A = 1 + \frac{R_{effective}}{1000}$.

**Answer:**
Given:
*   $R_{effective}$ = 28
*   $W_s$ = 50 g
*   $A = 1 + \frac{R_{effective}}{1000} = 1 + \frac{28}{1000} = 1 + 0.028 = 1.028$
*   $P = \frac{A \times 1000}{W_s} = \frac{1.028 \times 1000}{50} = \frac{1028}{50} = 20.56\%$

Therefore, the apparent percentage of particles finer than the effective size corresponding to the reading of 28 is 20.56%.

**Question 4:**
Why is a dispersing agent used in hydrometer analysis?

**Answer:**
A dispersing agent (like sodium hexametaphosphate) is used to prevent the fine soil particles (silt and clay) from flocculating (clumping together). By dispersing the particles, it ensures that they behave more independently and settle according to Stokes' Law, allowing for a more accurate determination of their individual sizes and distribution.

---

### 8. Important Points to Remember

*   **Homogeneity:** Ensure the soil suspension is perfectly homogeneous before taking the first reading.
*   **Zero Time:** Start timing precisely when the suspension becomes homogeneous.
*   **Temperature:** Accurately record the temperature at each reading and apply the correct temperature correction.
*   **Hydrometer Handling:** Handle the hydrometer gently; avoid jarring or dropping it.
*   **Meniscus Reading:** Be consistent in reading the top of the meniscus.
*   **Effective Depth (L):** Correctly calculate the effective depth for each reading. This is crucial for calculating particle diameter.
*   **Specific Gravity of Soil Solids ($\rho_s$):** If not given, a standard value of 2.65 is commonly used. This can significantly affect the calculated diameter.
*   **Curve Extension:** The hydrometer analysis typically covers the finer silt and clay fractions. Ensure results are plotted and analyzed in conjunction with sieve analysis results for a complete grain-size distribution curve.
*   **Calibration:** Be aware that hydrometers may have slight variations, and manufacturer's data should be consulted for specific correction factors.

---
