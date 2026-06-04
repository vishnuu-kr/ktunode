---
title: "Field tests – Pressure meter Test procedure, uses -limitations,              correlations."
subject: "ADVANCED GEOTECHNICAL INVESTIGATION"
module: "Module 3: Field Tests"
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba8115bd"
status: "completed"
scrapedAt: "2026-05-20T18:56:49.500Z"
---
# Advanced Geotechnical Investigation: Module 3 - Field Tests: Pressuremeter Test

This module delves into the **Pressuremeter Test (PMT)**, a crucial in-situ field test for characterizing the mechanical properties of soil and rock. We will cover its procedure, applications, limitations, and important correlations.

## Learning Outcomes

By the end of this module, you should be able to:

*   Describe the principle and procedure of the Pressuremeter Test.
*   Explain the main components of a pressuremeter and its associated equipment.
*   Identify the primary uses and applications of the PMT in geotechnical engineering.
*   Discuss the limitations and advantages of the PMT compared to other field tests.
*   Understand and apply common correlations between PMT results and other soil/rock parameters.
*   Interpret and analyze pressuremeter test data.

---

## 1. Introduction to the Pressuremeter Test (PMT)

### 1.1 What is a Pressuremeter Test?

The Pressuremeter Test (PMT) is an **in-situ geomechanical test** used to determine the stress-strain behavior of soil and rock. It involves inserting a specialized probe (pressuremeter) into a pre-drilled borehole or directly into the ground and expanding it radially under increasing hydrostatic pressure.

### 1.2 Principle of the PMT

The core principle is to apply a controlled **radially outward pressure** to the borehole wall and measure the resulting **radial expansion (volume change)** of the borehole. This allows for the determination of:

*   **In-situ stress-strain characteristics:** How the ground deforms under applied stress.
*   **Deformation modulus:** A measure of stiffness.
*   **Undrained shear strength:** For cohesive soils.
*   **Creep characteristics:** The time-dependent deformation under sustained load.

---

## 2. Equipment and Procedure

### 2.1 Pressuremeter Equipment

The typical PMT setup consists of:

*   **Pressuremeter Probe (Cavity Expansion Device):**
    *   Usually cylindrical with a flexible membrane on its surface.
    *   Contains one or more **expansion chambers** (usually three: top, middle, and bottom).
    *   The middle chamber is the primary measuring zone.
    *   The probe is lowered into the borehole.
*   **Control and Measurement Console:**
    *   **Gas or Liquid Pump:** To pressurize the probe.
    *   **Pressure Transducer:** To accurately measure the applied pressure.
    *   **Volume Transducer/Flow Meter:** To measure the volume of gas/liquid injected into the probe, which directly relates to the expansion of the borehole.
    *   **Control Valves:** To regulate pressure and volume.
*   **Tubing and Cable:** Connects the probe to the console.
*   **Logging Device:** For recording pressure and volume data.

### 2.2 Preparation of the Borehole

Proper borehole preparation is crucial for reliable PMT results.

*   **Drilling Method:**
    *   **Rotary Drilling:** Common for soils and rock. Care must be taken to minimize borehole wall disturbance and over-consolidation.
    *   **Calibrated Drilling:** Using a specific drilling rate and fluid to reduce wall disturbance.
    *   **Air Drilling:** Used in some rock applications.
    *   **Hand Augering/Pushing:** For soft soils, minimizing disturbance.
*   **Casing:** A temporary casing might be used to support unstable boreholes. The PMT is typically performed below the casing to avoid the influence of casing installation.
*   **Cleanliness:** The borehole should be cleaned of debris and cuttings before inserting the probe.
*   **Borehole Diameter:** Must be accurately known and should generally be larger than the unexpanded probe diameter.

### 2.3 Test Procedure (Standard PMT)

The test is performed in stages:

1.  **Insertion of the Probe:** The pressuremeter probe is carefully lowered into the prepared borehole to the desired testing depth.
2.  **Initial Inflation (Priming):** A small initial pressure is applied to expand the probe's membrane and seat it against the borehole wall. This initial pressure is recorded ($P_0$).
3.  **Loading Phase:** Pressure is gradually increased in discrete steps. At each pressure increment, the probe expands radially, and the volume change is recorded after a short waiting period (e.g., 30 seconds or 1 minute) to allow for immediate deformation.
    *   **Pressure Increments:** Typically 10-15 steps, chosen to cover the expected range of ground response.
    *   **Volume Measurement:** The volume injected ($V$) at each pressure step ($P$) is recorded.
4.  **Unloading Phase (Optional but Recommended):** After reaching the maximum pressure, the pressure is reduced in steps, and the volume change is recorded during unloading. This helps in identifying the elastic recovery of the ground and potential dilatancy or contractancy effects.
5.  **Deflation and Retrieval:** The probe is deflated and retrieved from the borehole.

### 2.4 Recording Data

The primary data recorded are pairs of applied pressure ($P$) and the corresponding injected volume ($V$). This data is typically plotted as a **pressure-volume curve**.

---

## 3. Interpretation of Pressuremeter Test Results

### 3.1 Pressure-Volume Curve

The raw data is plotted as $P$ versus $V$. However, for analysis, it's often converted into a **pressure-expansion curve**.

### 3.2 Volume Correction

*   **Probe Volume:** The volume of the probe itself needs to be accounted for. The initial volume of the probe ($V_0$) is determined before insertion.
*   **Total Volume:** The total volume of the probe at any pressure $P$ is $V_{total} = V_0 + V_{injected}$.
*   **Borehole Volume:** The volume of the borehole at pressure $P$ is $V_{borehole} = V_0 + V_{injected}$.
*   **Expansion Ratio:** Often expressed as the ratio of the borehole radius to the initial borehole radius, or the change in volume normalized by the initial borehole volume.

### 3.3 Key Parameters from the Pressure-Volume Curve

1.  **Limit Pressure ($P_L$):**
    *   The pressure at which the borehole expands to twice its initial volume (i.e., the radius doubles).
    *   Represents the point of significant plastic deformation or failure.
    *   For some tests, it can be defined as the pressure at which significant rate of volume increase occurs.

2.  **Creep Pressure ($P_f$):**
    *   The pressure at which the ground exhibits significant creep (i.e., the volume increases substantially with little or no increase in pressure).
    *   Often determined by observing a marked change in the slope of the pressure-volume curve.

3.  **Proportion Factor ($f$):**
    *   $f = (P_L - P_0) / (P_L - P_i)$
    *   Where $P_i$ is the initial pressure before loading.
    *   Indicates the plastic-elastic behavior of the ground. Lower values suggest more ductile behavior.

4.  **Deformation Modulus ($E_M$) or Pressuremeter Modulus:**
    *   Represents the stiffness of the ground.
    *   It's typically calculated from the initial, near-linear portion of the pressure-expansion curve.
    *   **Borehole Expansion Modulus ($E_M$):**
        $E_M = \frac{V_{injected}}{\pi R_0^2 L} \frac{dP}{d(V_{injected}/V_0)}$
        Where:
        *   $R_0$ is the initial borehole radius.
        *   $L$ is the effective length of the pressuremeter probe.
        *   $dP/d(V_{injected}/V_0)$ is the slope of the pressure-volume curve in the elastic region.
    *   More commonly, it's simplified to:
        $E_M = V_{injected} \times \frac{dP}{dV_{injected}} \times \frac{1}{C}$
        Where $C$ is a geometric factor related to the expansion mode. For a cylindrical expansion in a borehole, $C \approx 2$.
    *   **Mean Elastic Modulus:** Often derived by considering the stress and strain in the ground surrounding the borehole.

5.  **Undrained Shear Strength ($c_u$) (for cohesive soils):**
    *   Can be estimated from the limit pressure.
    *   $c_u = (P_L - P_0) / k$
    *   Where $k$ is a factor that depends on the stress state and material properties (often around 8-12).

---

## 4. Uses and Applications of the PMT

The PMT is a versatile test with a wide range of applications in geotechnical engineering:

*   **Foundation Design:**
    *   **Bearing Capacity:** Determining the ultimate bearing capacity of shallow and deep foundations.
    *   **Settlement Analysis:** Estimating the immediate and long-term settlements of foundations.
    *   **Pile Design:** Evaluating the load-settlement behavior of piles and estimating their ultimate bearing capacity.
*   **Earth Retaining Structures:**
    *   Assessing the stiffness and strength of soils for designing retaining walls, diaphragm walls, and other underground structures.
*   **Slope Stability:**
    *   Providing deformation parameters for numerical modeling of slopes.
*   **Tunneling and Underground Excavations:**
    *   Characterizing the ground response around tunnel excavations.
    *   Assessing the risk of ground deformation and support requirements.
*   **Ground Improvement:**
    *   Monitoring the effectiveness of ground improvement techniques by assessing changes in soil stiffness.
*   **Characterization of Difficult Soils:**
    *   Particularly useful in soft clays, sensitive clays, loose sands, and fractured rocks where other tests may be less reliable or difficult to perform.
*   **Determination of In-situ Stress:**
    *   Can provide information about the horizontal stress state.

---

## 5. Limitations of the PMT

Despite its advantages, the PMT has some limitations:

*   **Borehole Quality:** The accuracy of the test is highly dependent on the quality of the borehole. Disturbed or enlarged boreholes can lead to erroneous results.
*   **Cost and Complexity:** The equipment is relatively expensive and requires skilled operators.
*   **Limited Depth:** While probes can be adapted for greater depths, very deep boreholes can be challenging to access.
*   **Anisotropy:** The standard PMT primarily measures radial properties. It may not fully capture anisotropic behavior (different properties in different directions).
*   **Creep at High Pressures:** In some soils, significant creep can occur even at pressures below the limit pressure, making it difficult to define the elastic region.
*   **Influence of Casing:** Performing the test within or near casing can affect the results.
*   **Interpretation:** While standardized, the interpretation of the pressure-volume curve requires engineering judgment, especially for complex soil behaviors.

---

## 6. Correlations with Other Geotechnical Parameters

The PMT results can be correlated with parameters obtained from other field and laboratory tests. These correlations are invaluable for design and verification.

### 6.1 Correlation with Soil Stiffness and Moduli

*   **Modulus of Elasticity ($E$):**
    *   The pressuremeter modulus ($E_M$) is often related to the Young's modulus of the soil.
    *   $E \approx \alpha E_M$
    *   The factor $\alpha$ varies depending on soil type and the definition of $E_M$. For granular soils, $\alpha$ might be around 1.5-3. For clays, it can be higher.
*   **Shear Modulus ($G$):**
    *   $G \approx \frac{E_M}{2(1+\nu)}$ (assuming isotropic elastic behavior)
    *   Where $\nu$ is Poisson's ratio.

### 6.2 Correlation with Undrained Shear Strength ($c_u$)

*   For cohesive soils, PMT provides a direct estimate of $c_u$.
*   $c_u \approx \frac{P_L - P_0}{k}$
*   The value of $k$ is empirically derived and varies. Typical ranges for $k$:
    *   Soft clays: 6-8
    *   Stiff clays: 8-10
    *   Overconsolidated clays: 10-12

### 6.3 Correlation with Drained Shear Strength ($c', \phi'$)

*   For granular soils (drained conditions), correlations are more complex.
*   **Friction Angle ($\phi'$):**
    *   Correlations exist between the pressuremeter modulus and $\phi'$.
    *   $\phi' \approx \beta + \gamma E_M$ (where $\beta$ and $\gamma$ are empirical constants)
*   **Cohesion ($c'$):**
    *   For normally consolidated soils, $c'$ is typically zero. For overconsolidated soils, it can be correlated.

### 6.4 Correlation with SPT N-value

*   While not as direct as correlations with lab tests, some relationships exist.
*   $E_M \propto N$
*   $c_u \propto N$ (for clays)
*   $\phi' \propto N$ (for sands)

### 6.5 Correlation with CPT Cone Resistance ($q_c$)

*   Similar to SPT, correlations can be made between $E_M$, $c_u$, $\phi'$ and $q_c$.

### 6.6 Correlation with In-situ Stress

*   The PMT can provide information about the **horizontal stress index ($\lambda$)**:
    *   $\lambda = \frac{P_0 - \sigma_{v0}'}{E_M}$ where $\sigma_{v0}'$ is the effective vertical stress.
    *   This can be used to estimate the coefficient of lateral earth pressure at rest ($K_0$).

**Important Note on Correlations:**
*   **Empirical Nature:** These correlations are empirical and site-specific. They should be used with caution and validated with local experience or laboratory testing whenever possible.
*   **Soil Type Dependency:** Correlations vary significantly with soil type (clay, silt, sand, gravel, rock).
*   **Test Conditions:** The quality of borehole preparation and test execution greatly influences the reliability of the correlations.

---

## 7. Practice Questions and Answers

**Question 1:** What is the primary principle behind the Pressuremeter Test?
*   **Answer:** Applying radially outward pressure to a borehole wall and measuring the resultant radial expansion.

**Question 2:** Name two key parameters that can be determined from a Pressuremeter Test.
*   **Answer:** Deformation Modulus ($E_M$), Limit Pressure ($P_L$), Undrained Shear Strength ($c_u$), Creep Pressure ($P_f$).

**Question 3:** What is the typical process for preparing a borehole for a PMT?
*   **Answer:** Drilling (e.g., rotary), cleaning of debris, and minimizing borehole wall disturbance.

**Question 4:** What does the Limit Pressure ($P_L$) represent in a PMT?
*   **Answer:** The pressure at which the borehole expands to twice its initial volume, indicating significant plastic deformation or failure.

**Question 5:** Discuss one limitation of the Pressuremeter Test.
*   **Answer:** Sensitivity to borehole quality, cost, complexity, limited depth, potential for anisotropy to be missed. (Choose one).

**Question 6:** How can the Pressuremeter Test be used to estimate the undrained shear strength ($c_u$) of a clay?
*   **Answer:** Using the correlation $c_u \approx (P_L - P_0) / k$, where $P_L$ is the limit pressure, $P_0$ is the initial pressure, and $k$ is an empirical factor.

**Question 7 (Scenario):** A PMT in a soft clay yielded an initial pressure ($P_0$) of 50 kPa and a limit pressure ($P_L$) of 250 kPa. Using an empirical factor $k=7$ for soft clays, estimate the undrained shear strength ($c_u$).
*   **Answer:** $c_u = (250 \text{ kPa} - 50 \text{ kPa}) / 7 = 200 \text{ kPa} / 7 \approx 28.6 \text{ kPa}$.

**Question 8 (Scenario):** You obtain a pressure-volume curve from a PMT. The initial portion of the curve, representing elastic expansion, has a slope ($dP/dV$) of 200 kPa/mm³. The effective length of your pressuremeter probe is 0.5 m, and the initial borehole radius is 0.05 m. Calculate the approximate pressuremeter modulus ($E_M$) using the simplified formula $E_M = V_{injected} \times (dP/dV_{injected}) \times (1/C)$, assuming $V_{injected} \approx V_{borehole}$ and $C \approx 2$. You'll need to approximate the slope at a point in the elastic region. Let's assume at a volume injection of 20 mm³ ($V_{injected}$) the pressure is 100 kPa and at 40 mm³ ($V_{injected}$) the pressure is 140 kPa.
*   **Answer:**
    *   Slope ($dP/dV_{injected}$) = (140 kPa - 100 kPa) / (40 mm³ - 20 mm³) = 40 kPa / 20 mm³ = 2 kPa/mm³.
    *   $E_M = (40 \text{ mm}^3) \times (2 \text{ kPa/mm}^3) \times (1/2) = 40 \text{ kPa}$.
    *   *Note: The pressuremeter modulus is often reported in MPa or GPa depending on the units of $V_{injected}$ and $R_0$ used in the more rigorous formula. This simplified example shows the principle.*

---

## 8. Important Points to Remember

*   **Borehole Quality is Paramount:** Any disturbance or enlargement of the borehole wall will significantly impact test results.
*   **Proper Calibration:** Ensure all equipment, especially pressure and volume transducers, are accurately calibrated.
*   **Site-Specific Correlations:** Use generic correlations cautiously and try to develop site-specific ones if sufficient data is available.
*   **Complementary Testing:** PMT results are often most valuable when used in conjunction with other field and laboratory tests.
*   **Understanding the Stress Path:** The PMT applies a radial stress path, which is distinct from other tests (e.g., triaxial compression).
*   **Interpretation Requires Experience:** Interpreting the pressure-volume curve and deriving design parameters requires experienced geotechnical engineers.

---
