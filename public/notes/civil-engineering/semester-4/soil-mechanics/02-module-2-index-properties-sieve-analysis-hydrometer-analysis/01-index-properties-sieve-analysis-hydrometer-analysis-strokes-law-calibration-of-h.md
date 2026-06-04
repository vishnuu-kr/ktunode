---
title: "Index properties : Sieve analysis, Hydrometer analysis-strokes law, calibration of hydrometer, corrections to hydrometer readings, gradation of soil, combined sieve and hydrometer analysis, limitations, [no derivation required for percentage finer and diameter]."
subject: "SOIL MECHANICS"
module: "Module 2: Index properties : Sieve analysis, Hydrometer analysis"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810975"
status: "completed"
scrapedAt: "2026-05-20T18:46:58.566Z"
---
# SOIL MECHANICS - MODULE 2: INDEX PROPERTIES: SIEVE ANALYSIS, HYDROMETER ANALYSIS

## LEARNING OUTCOMES

Upon completion of this module, you should be able to:

*   Understand the purpose and procedure of sieve analysis for determining the particle size distribution of coarse-grained soils.
*   Understand the purpose and procedure of hydrometer analysis for determining the particle size distribution of fine-grained soils.
*   Explain Stokes' Law and its application in hydrometer analysis.
*   Describe the calibration of a hydrometer and its importance.
*   Apply the necessary corrections to hydrometer readings.
*   Define and interpret the gradation of soil based on particle size distribution.
*   Explain the concept of combined sieve and hydrometer analysis.
*   Recognize the limitations of sieve and hydrometer analyses.

---

## 1. INDEX PROPERTIES OF SOIL

Index properties are physical characteristics of a soil that are easily determined and are used to classify the soil and predict its engineering behavior. They do not directly measure the engineering properties (like shear strength or compressibility) but provide an indication of them.

**Key Concepts:**

*   **Particle Size Distribution (PSD):** The relative proportions of different sized particles within a soil mass. This is a crucial index property.
*   **Coarse-grained soils:** Soils where more than 50% of the particles are retained on a No. 200 (0.075 mm) sieve (e.g., gravels and sands).
*   **Fine-grained soils:** Soils where more than 50% of the particles pass a No. 200 (0.075 mm) sieve (e.g., silts and clays).

---

## 2. SIEVE ANALYSIS

Sieve analysis is a method used to determine the particle size distribution of **coarse-grained soils**. It involves passing a known weight of soil through a series of sieves with progressively smaller openings.

### 2.1 Purpose

*   To determine the percentage of soil particles retained on each sieve.
*   To establish the gradation (particle size distribution curve) of coarse-grained soils.

### 2.2 Procedure

1.  **Oven-dry the soil sample:** Ensure the sample is completely dry.
2.  **Weigh the dry soil sample:** Record the total weight ($W_{total}$).
3.  **Assemble a stack of sieves:** Start with the largest mesh size at the top and progressively decrease in size downwards. A standard set might include sieves like 4.75 mm, 2.36 mm, 1.18 mm, 0.600 mm, 0.300 mm, 0.150 mm, 0.075 mm (No. 200).
4.  **Place the soil sample onto the top sieve.**
5.  **Sieve the soil:** Agitate the sieves vigorously (e.g., using a mechanical sieve shaker) to ensure particles pass through the appropriate sieve openings.
6.  **Weigh the soil retained on each sieve:** Record the weight of soil retained on each sieve ($W_{retained, i}$).
7.  **Collect the material passing the finest sieve (e.g., No. 200 sieve):** This portion is considered the fine-grained fraction and is typically subjected to hydrometer analysis.
8.  **Calculate the percentage retained on each sieve:**
    $$ \text{Percentage Retained on Sieve } i = \frac{W_{retained, i}}{W_{total}} \times 100\% $$
9.  **Calculate the cumulative percentage retained on each sieve.**
10. **Calculate the percentage passing each sieve:**
    $$ \text{Percentage Passing Sieve } i = 100\% - \text{Cumulative Percentage Retained on Sieve } i $$

### 2.3 Example Calculation

Let's say you have a dry soil sample weighing 500 g.

| Sieve Size (mm) | Weight Retained (g) | % Retained | Cumulative % Retained | % Passing |
| :-------------- | :------------------ | :--------- | :-------------------- | :-------- |
| 4.75            | 50                  | 10.0       | 10.0                  | 90.0      |
| 2.36            | 100                 | 20.0       | 30.0                  | 70.0      |
| 0.075           | 200                 | 40.0       | 70.0                  | 30.0      |
| Pan             | 150                 | 30.0       | 100.0                 | 0.0       |

*Total Weight = 50 + 100 + 200 + 150 = 500 g*

**Important Point to Remember:** The sum of weights retained on all sieves and in the pan should ideally equal the initial total weight of the dry soil sample.

---

## 3. HYDROMETER ANALYSIS

Hydrometer analysis is used to determine the particle size distribution of **fine-grained soils** (silts and clays) that pass the No. 200 sieve. It is based on the principle of sedimentation and Stokes' Law.

### 3.1 Stokes' Law

Stokes' Law describes the terminal velocity of a small spherical particle falling through a viscous fluid. In hydrometer analysis, it relates the diameter of a suspended soil particle to the time of sedimentation and the properties of the fluid.

**Formula (Conceptual understanding, no derivation required):**

The effective diameter ($D$) of a soil particle settling in a liquid is proportional to the square root of the distance fallen and inversely proportional to the square root of the time.

$$ D \propto \sqrt{\frac{L}{T}} $$

Where:
*   $D$ = Particle diameter
*   $L$ = Distance fallen by the particle
*   $T$ = Time elapsed since sedimentation began

The more practical form used in soil mechanics is:

$$ D = K \sqrt{\frac{L}{T}} $$

Where:
*   $K$ is a constant that incorporates fluid properties (viscosity, density) and gravitational acceleration.

**Key Concepts from Stokes' Law:**

*   **Larger particles settle faster:** Due to their larger mass and surface area to volume ratio, they reach terminal velocity quicker and fall further in a given time.
*   **Smaller particles settle slower:** They remain suspended for longer periods.

### 3.2 Sedimentation Process

1.  A known mass of dry soil is dispersed in water, often with a dispersing agent (like sodium hexametaphosphate) to prevent flocculation (clumping of particles).
2.  The mixture is agitated to create a uniform suspension.
3.  A hydrometer (a type of densitometer) is placed into the suspension.
4.  As particles settle, the density of the suspension decreases.
5.  The hydrometer measures the density of the suspension at different depths and times.
6.  The depth of the reading on the hydrometer and the time elapsed allow for the calculation of the particle size that has settled out.

### 3.3 Hydrometer

*   A hydrometer is a glass instrument that floats in a liquid and measures its specific gravity (or density).
*   It has a weighted bulb at the bottom and a graduated stem.
*   The level to which the stem sinks indicates the density of the liquid.
*   In hydrometer analysis, the hydrometer is inserted into the soil suspension. The point where the liquid level intersects the stem is the "effective reading."

### 3.4 Calibration of a Hydrometer

Hydrometers are often calibrated for a specific temperature and liquid (usually distilled water). However, in the context of hydrometer analysis, calibrations are specific to the testing conditions.

*   **Standard Calibration:** Hydrometers are typically calibrated at 20°C with the liquid being distilled water.
*   **Importance:** Calibration ensures the accuracy of the density readings, which are critical for calculating particle sizes. Variations in hydrometer design (e.g., bulb volume) mean each hydrometer needs to be calibrated.

### 3.5 Corrections to Hydrometer Readings

Several corrections are necessary to obtain accurate particle size distribution from hydrometer readings.

#### a) Meniscus Correction ($C_m$)

*   **Reason:** The hydrometer stem has a meniscus (curve) where the liquid meets the glass. The volume of liquid displaced by the hydrometer bulb is measured up to the bottom of the meniscus. The reading is taken at the top of the meniscus.
*   **Value:** This correction is always **positive**.
*   **How to find:** The value is typically provided by the hydrometer manufacturer or can be determined by reading the liquid level at the bottom of the meniscus.
*   **Reading Adjustment:** Effective reading = Hydrometer Reading + $C_m$

#### b) Temperature Correction ($C_t$)

*   **Reason:** The viscosity of water changes with temperature. Higher temperatures mean lower viscosity, leading to faster settling and thus larger apparent particle sizes. Lower temperatures mean higher viscosity, leading to slower settling.
*   **Value:** Can be positive or negative depending on the standard temperature.
*   **How to find:** Usually obtained from standard tables or graphs provided with the testing equipment, correlating the actual temperature of the suspension to a standard temperature (typically 20°C).
*   **Reading Adjustment:** Effective reading = Hydrometer Reading + $C_m$ + $C_t$

#### c) Dispersing Agent Correction ($C_d$)

*   **Reason:** Dispersing agents are added to prevent particle flocculation. These agents increase the density of the suspension, affecting the hydrometer reading.
*   **Value:** Usually positive.
*   **How to find:** Determined by running a blank test with water and the dispersing agent without any soil.
*   **Reading Adjustment:** Effective reading = Hydrometer Reading + $C_m$ + $C_t$ + $C_d$

**Effective Reading ($R_e$) = Hydrometer Reading + $C_m$ + $C_t$ + $C_d$**

### 3.6 Calculation of Particle Diameter (No Derivation Required)

The diameter of a soil particle is calculated using a modified form of Stokes' Law:

$$ D = K \sqrt{\frac{L}{T}} $$

Where:
*   $D$ = Particle diameter in mm.
*   $K$ = Hydrometer constant (specific to the hydrometer and the liquid properties). It's often derived from calibration or empirical relationships. A typical form is $K = \sqrt{\frac{30 \eta}{(\rho_s - \rho_w)G}}$, where $\eta$ is viscosity, $\rho_s$ is soil particle density, $\rho_w$ is water density, and $G$ is gravitational acceleration.
*   $L$ = Effective distance fallen by the particle. This is measured from the surface of the suspension down to the level of the hydrometer bulb's effective sensing point. It depends on the hydrometer reading ($R_e$): $L = L_{total} - \text{correction for bulb depth}$.
*   $T$ = Time in minutes (or seconds, depending on the units of $K$).

**Note:** $L_{total}$ is the depth of the suspension. The depth of the bulb's effective sensing point changes with the hydrometer reading. For many standard hydrometers, $L$ is determined by subtracting a bulb correction from the total depth of the suspension. This bulb correction is specific to the hydrometer and is usually provided by the manufacturer or standard test procedures.

### 3.7 Calculation of Percentage Finer (No Derivation Required)

The percentage of particles finer than diameter $D$ at a given time $T$ is calculated as:

$$ \% \text{ Finer} = \frac{m_s'}{m_{s}} \times 100\% $$

Where:
*   $m_s'$ = Mass of soil particles finer than diameter $D$ at time $T$. This is calculated from the effective hydrometer reading ($R_e$) and the specific gravity of the soil solids ($G_s$): $m_s' = R_e \times \frac{G_s}{G_s - 1}$ (assuming a standard unit volume for hydrometer reading).
*   $m_{s}$ = Total mass of the fine-grained soil fraction subjected to hydrometer analysis.

**Important Point to Remember:** The mass $m_s$ is the weight of the soil that passed the No. 200 sieve and was used in the hydrometer test.

---

## 4. GRADATION OF SOIL

Gradation refers to the distribution of particle sizes in a soil mass. It is a critical factor influencing soil behavior, especially for coarse-grained soils.

### 4.1 Key Terms

*   **Well-Graded Soil:** Contains a wide range of particle sizes, with significant amounts of both coarse and fine particles. These soils generally have better engineering properties (e.g., higher density, lower permeability in some cases, better shear strength).
*   **Poorly-Graded Soil:** Contains particles of predominantly one or two sizes. This can result in voids that are too large or too small, leading to less desirable engineering properties.
*   **Uniformly Graded Soil:** Contains particles that are nearly all the same size (e.g., clean sands or gravels).
*   **Gap-Graded Soil:** Missing intermediate particle sizes.

### 4.2 Gradation Curve

A gradation curve (or particle size distribution curve) is a plot of percentage finer (y-axis) versus particle diameter (x-axis, usually on a logarithmic scale).

*   **Sieve Analysis Curve:** Typically plotted for diameters larger than 0.075 mm.
*   **Hydrometer Analysis Curve:** Typically plotted for diameters smaller than 0.075 mm.
*   **Combined Curve:** The results from both sieve and hydrometer analyses are plotted on the same graph to represent the full particle size distribution of the soil.

### 4.3 Coefficients of Gradation

*   **Coefficient of Uniformity ($C_u$):**
    $$ C_u = \frac{D_{60}}{D_{10}} $$
    *   $D_{60}$ = Particle diameter corresponding to 60% finer.
    *   $D_{10}$ = Particle diameter corresponding to 10% finer (effective size).
    *   Indicates the range of particle sizes. Higher $C_u$ means a wider range of sizes (better graded). For well-graded granular soils, $C_u > 4$ (gravels) or $C_u > 6$ (sands).

*   **Coefficient of Curvature ($C_c$):**
    $$ C_c = \frac{D_{30}^2}{D_{10} \times D_{60}} $$
    *   $D_{30}$ = Particle diameter corresponding to 30% finer.
    *   Indicates the shape of the gradation curve. For well-graded soils, $1 < C_c < 3$.

**Example Interpretation:**

*   A soil with a high $C_u$ and a $C_c$ between 1 and 3 is likely **well-graded**.
*   A soil with a low $C_u$ is likely **uniformly graded** or **poorly graded**.

---

## 5. COMBINED SIEVE AND HYDROMETER ANALYSIS

For soils that contain both coarse and fine particles, a combined analysis is performed.

### 5.1 Procedure

1.  **Sieve Analysis:** The soil is first sieved to determine the particle size distribution of the coarse fraction (particles retained on the No. 200 sieve).
2.  **Hydrometer Analysis:** The material passing the No. 200 sieve is collected, dried, and then subjected to hydrometer analysis to determine the particle size distribution of the fine fraction.
3.  **Data Combination:** The results from both analyses are plotted on the same particle size distribution graph. The x-axis uses a logarithmic scale for particle diameter, and the y-axis shows the percentage finer.
    *   For sieve analysis, the percentage passing each sieve is plotted.
    *   For hydrometer analysis, the percentage finer at each measured diameter is plotted.
    *   The two curves are joined at the 0.075 mm (No. 200 sieve) size.

### 5.2 Importance

*   Provides a complete picture of the entire particle size distribution of a soil sample.
*   Essential for classifying soils according to systems like the Unified Soil Classification System (USCS) and AASHTO.

---

## 6. LIMITATIONS OF SIEVE AND HYDROMETER ANALYSES

### 6.1 Sieve Analysis Limitations

*   **Particle Shape:** Assumes particles are roughly spherical or cubical. Irregularly shaped particles might get retained on sieves even if their smallest dimension is smaller than the sieve opening.
*   **Fines Content:** Not effective for soils with a high percentage of fines (typically above 10-15% passing the No. 200 sieve). The fines can clog the sieves and make separation difficult.
*   **Accuracy for Small Particles:** The accuracy decreases for very fine particles approaching the No. 200 sieve.
*   **Clumping:** Dry, sticky particles can clump together and be retained on sieves even if individually they would pass.

### 6.2 Hydrometer Analysis Limitations

*   **Stokes' Law Assumptions:**
    *   **Spherical Particles:** Stokes' Law is strictly applicable only to rigid, smooth, non-porous spheres. Soil particles are often irregular and porous.
    *   **Laminar Flow:** Assumes flow around the particle is laminar. At higher velocities (for larger particles or longer settling times), turbulence can occur, violating the assumption.
    *   **No Particle Interaction:** Assumes particles fall independently without interfering with each other. In dense suspensions, this is not true.
    *   **Constant Fluid Viscosity & Density:** Assumes viscosity and density of the fluid remain constant, which is affected by temperature and the presence of dispersing agents.
*   **Dispersing Agents:** The effectiveness of dispersing agents can vary depending on the soil type and the amount used. Incomplete dispersion leads to flocculation, making particles appear larger.
*   **Temperature Fluctuations:** Sensitive to temperature changes, requiring careful control and correction.
*   **Reading Errors:** Hydrometer readings can be subjective and prone to error.
*   **Clay Particle Size:** The smallest particles that can be reliably measured are typically around 0.0001 mm (0.1 micron).

---

## PRACTICE QUESTIONS AND EXERCISES

**Question 1:**

A soil sample is subjected to sieve analysis. The following data is obtained:

| Sieve Size (mm) | Weight Retained (g) |
| :-------------- | :------------------ |
| 10              | 0                   |
| 4.75            | 25                  |
| 2.36            | 75                  |
| 1.18            | 100                 |
| 0.600           | 150                 |
| 0.300           | 80                  |
| 0.150           | 40                  |
| 0.075           | 20                  |
| Pan             | 10                  |

What is the percentage of soil passing the 0.075 mm sieve?

**Answer 1:**

Total weight of dry soil = 0 + 25 + 75 + 100 + 150 + 80 + 40 + 20 + 10 = 400 g

Weight retained on 0.075 mm sieve = 25 + 75 + 100 + 150 + 80 + 40 + 20 = 490 g

Weight passing 0.075 mm sieve = Total weight - Weight retained on 0.075 mm sieve = 400 - 490 = -90g (Error in data. Let's assume the sum of retained on sieves plus pan is the total weight).

Let's re-calculate the total weight from the retained portions:
Total weight = 25 + 75 + 100 + 150 + 80 + 40 + 20 + 10 = 400 g

Weight retained on 0.075 mm sieve = 25 + 75 + 100 + 150 + 80 + 40 + 20 = 490g. There's a discrepancy in the provided data (sum of retained is more than total).

Let's assume the total weight of the sample *after sieving* was 500g and the values above are what was retained *on* the sieves, with the pan collecting what passes the 0.075mm sieve. If that's the case:

Total weight = 500g
Weight retained on sieves > 0.075mm = 25+75+100+150+80+40+20 = 490g
Weight retained in pan (passing 0.075mm) = 10g

Percentage passing 0.075 mm sieve = (Weight in Pan / Total Weight) * 100%
= (10 g / 500 g) * 100% = **2%**

*Self-correction: Always ensure the sum of retained weights + pan weight equals the initial total weight.*

**Question 2:**

What are the two main types of corrections applied to hydrometer readings, and why are they necessary?

**Answer 2:**

The two main types of corrections are:
1.  **Meniscus Correction ($C_m$):** Necessary because the hydrometer reading is taken at the top of the meniscus, but the effective volume displaced is up to the bottom of the meniscus.
2.  **Temperature Correction ($C_t$):** Necessary because the viscosity of water changes with temperature, affecting the settling velocity of soil particles and thus the hydrometer reading.

**Question 3:**

Define the Coefficient of Uniformity ($C_u$) and the Coefficient of Curvature ($C_c$). What do their values indicate about the soil's gradation?

**Answer 3:**

*   **Coefficient of Uniformity ($C_u$):** $C_u = \frac{D_{60}}{D_{10}}$. It indicates the range of particle sizes in the soil. A higher $C_u$ value suggests a wider range of particle sizes, meaning the soil is better graded.
*   **Coefficient of Curvature ($C_c$):** $C_c = \frac{D_{30}^2}{D_{10} \times D_{60}}$. It indicates the shape of the gradation curve. For well-graded soils, $C_c$ is typically between 1 and 3.

**Question 4:**

Which type of soil is sieve analysis most suitable for, and why is hydrometer analysis needed for other types?

**Answer 4:**

Sieve analysis is most suitable for **coarse-grained soils** (gravels and sands) because their particle sizes are large enough to be effectively separated by sieves.

Hydrometer analysis is needed for **fine-grained soils** (silts and clays) because their particles are too small to be retained on standard sieves. Hydrometer analysis, based on sedimentation principles, can measure the distribution of these smaller particles.

**Question 5:**

List two limitations of Stokes' Law as applied to hydrometer analysis.

**Answer 5:**

Two limitations of Stokes' Law in hydrometer analysis are:
1.  It assumes particles are **spherical**, while soil particles are often irregular.
2.  It assumes **laminar flow**, but turbulence can occur for larger particles or higher velocities.
3.  It assumes **no particle interaction**, which is violated in dense suspensions.
4.  It assumes **constant fluid viscosity and density**, which are affected by temperature and additives.

---

## IMPORTANT POINTS TO REMEMBER

*   **Sieve analysis** is for **coarse-grained soils**.
*   **Hydrometer analysis** is for **fine-grained soils**.
*   **Stokes' Law** is the fundamental principle behind hydrometer analysis, relating particle size to settling velocity.
*   Always apply **corrections ($C_m, C_t, C_d$)** to hydrometer readings for accuracy.
*   **Gradation** describes the distribution of particle sizes and affects soil behavior.
*   **$C_u$ and $C_c$** are key parameters for describing gradation.
*   A **combined sieve and hydrometer analysis** provides the complete particle size distribution.
*   Be aware of the **limitations** of each method.

---
