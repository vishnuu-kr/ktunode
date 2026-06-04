---
title: "Field Tests"
subject: "ADVANCED GEOTECHNICAL INVESTIGATION"
module: "Module 3: Field Tests"
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba8115ba"
status: "completed"
scrapedAt: "2026-05-20T18:56:47.212Z"
---
# Advanced Geotechnical Investigation: Module 3 - Field Tests

## 1. Introduction to Field Tests

**Learning Outcome:** Understand the purpose and importance of field tests in geotechnical investigations.

*   **Purpose:**
    *   To obtain in-situ (in its original position) data about soil and rock properties that cannot be reliably determined from laboratory tests.
    *   To provide a more realistic representation of ground conditions and behavior under stress.
    *   To validate and supplement laboratory test results.
    *   To identify geological features and variations in soil/rock strata that might be missed in sampling.
    *   To assess the engineering suitability of the ground for proposed structures.

*   **Importance:**
    *   **Direct Measurement:** Field tests measure properties directly in their natural environment, minimizing disturbance.
    *   **Scale Effects:** They account for the influence of larger soil/rock masses and heterogeneities, which is difficult to replicate in the lab.
    *   **Efficiency:** Can be more efficient for certain investigations, especially for large sites or continuous profiling.
    *   **Cost-Effectiveness:** While initial setup can be costly, they can prevent more expensive remedial measures later by providing accurate data.
    *   **Variability Assessment:** Crucial for understanding the spatial variability of ground conditions.

*   **Key Concepts:**
    *   **In-situ:** In its original place or position.
    *   **Disturbance:** Alteration of the soil/rock fabric and stress state during sampling or testing.
    *   **Stress Relaxation:** The reduction in stress that occurs when a soil or rock mass is disturbed.
    *   **Fabric:** The spatial arrangement of soil particles and voids.

## 2. Standard Penetration Test (SPT)

**Learning Outcome:** Describe the procedure, purpose, and interpretation of the Standard Penetration Test (SPT).

*   **Procedure:**
    *   A standard split-spoon sampler is driven into the ground using a standard hammer (63.5 kg or 140 lb) falling from a standard height (760 mm or 30 inches).
    *   The sampler is driven in three stages:
        1.  **Seating Drive (150 mm or 6 inches):** Initial penetration to seat the sampler.
        2.  **First Blow Count (150 mm or 6 inches):** Number of blows required for the next 150 mm penetration.
        3.  **Second Blow Count (150 mm or 6 inches):** Number of blows required for the subsequent 150 mm penetration.
    *   The **Standard Penetration Resistance (N-value)** is typically defined as the total number of blows required for the last 300 mm (12 inches) of penetration (sum of the blow counts for the last two 150 mm increments). Sometimes, N60 is used, which is the blow count corrected for energy efficiency.

*   **Purpose:**
    *   Estimate the **relative density** of granular soils (sands and gravels).
    *   Estimate the **consistency** of cohesive soils (clays and silts).
    *   Obtain a **disturbed soil sample** for visual classification and laboratory testing.
    *   Provide an index for **liquefaction potential** assessment in sands.

*   **Interpretation of N-values:**
    *   **Granular Soils (Relative Density):**
        *   0-4: Very Loose
        *   4-10: Loose
        *   10-30: Medium Dense
        *   30-50: Dense
        *   >50: Very Dense
    *   **Cohesive Soils (Consistency):**
        *   0-2: Very Soft
        *   2-4: Soft
        *   4-8: Firm
        *   8-15: Stiff
        *   15-30: Very Stiff
        *   >30: Hard
    *   **Bearing Capacity:** N-values can be correlated to allowable bearing capacity, although these correlations are highly empirical and site-specific.
    *   **Settlement:** N-values can be used to estimate settlements under applied loads.

*   **Corrections to N-values:**
    *   **Energy Ratio Correction ($C_E$):** Accounts for variations in hammer energy (e.g., automatic vs. safety hammer). $N_{60} = N \times C_E$.
    *   **Borehole Diameter Correction ($C_B$):** For borehole diameters larger than standard (approx. 100-150 mm).
    *   **Rod Length Correction ($C_R$):** For shorter or longer drill rods.
    *   **Groundwater Correction ($C_W$):** Applied when the test is conducted below the water table, particularly for fine sands and silts to account for pore water pressure effects.
    *   **Overburden Pressure Correction ($C_N$):** N-values increase with depth due to increased confinement. This correction is important for comparing N-values at different depths and for estimating strength parameters. $N_{corr} = N_{60} \times C_N$.

*   **Advantages:**
    *   Relatively inexpensive and widely used.
    *   Provides a disturbed sample.
    *   Good for rapid site reconnaissance.

*   **Disadvantages:**
    *   Highly empirical correlations.
    *   Disturbs the soil, especially in sensitive fine-grained soils.
    *   Reliability decreases in gravelly soils or soils with cobbles.
    *   Energy transfer is not perfectly consistent.

*   **Example:**
    If an SPT test yields blow counts of 10, 15, and 20 for the three 150 mm increments, the raw N-value is 15 + 20 = 35. If this is below the water table and requires a groundwater correction, the N-value would be adjusted.

*   **Important Point to Remember:** SPT is primarily an index test. Its value lies in its correlation to engineering properties, but these correlations are highly dependent on the soil type and site conditions.

## 3. Cone Penetration Test (CPT)

**Learning Outcome:** Explain the principles of the Cone Penetration Test (CPT) and its variations, and discuss the interpretation of CPT data.

*   **Principles:**
    *   A cone-shaped penetrometer is pushed into the soil at a constant rate (typically 20 mm/s) without rotation.
    *   The cone is advanced, and measurements are taken continuously or at discrete intervals.
    *   The primary measurements are:
        *   **Cone Resistance ($q_c$):** The resistance to penetration of the cone. This is a measure of the soil's strength and stiffness.
        *   **Sleeve Friction ($f_s$):** The frictional resistance along the surface of the sleeve located behind the cone. This is related to the soil's shear strength.
    *   **Pore Water Pressure ($u_2$) (PCPT):** In piezocone tests (PCPT), a pore pressure transducer is located at the tip of the cone (usually behind the shoulder, designated $u_2$). This provides information about the soil's drainage characteristics and can be used to estimate effective stress.

*   **Variations:**
    *   **Standard CPT (CPT):** Measures $q_c$ and $f_s$.
    *   **Piezocone Penetration Test (CPTU or PCPT):** Measures $q_c$, $f_s$, and $u_2$.
    *   **Seismic CPT (SCPT):** Measures shear wave velocity ($V_s$) by incorporating geophones and a seismic source, providing information on the soil's small-strain stiffness.

*   **Interpretation of CPT Data:**
    *   **Soil Stratigraphy:** Distinct changes in $q_c$ and $f_s$ indicate changes in soil type and layers.
    *   **Soil Type Classification:** Soil behavior can be classified based on charts that plot $q_c$ against $f_s$ or $\log(q_c)$ against $\log(f_s)$ (e.g., Robertson and Campanella Soil Behavior Type charts).
    *   **Strength and Stiffness:**
        *   $q_c$ is related to the undrained shear strength ($s_u$) of cohesive soils and the effective angle of internal friction ($\phi'$) of granular soils.
        *   $f_s$ is correlated with undrained shear strength ($s_u$) and effective stress.
    *   **Drained vs. Undrained Conditions:** The pore water pressure ($u_2$) in CPTU helps differentiate between saturated conditions (where pore pressures are significant) and unsaturated conditions.
    *   **Liquefaction Potential:** CPT data, particularly $q_c$, can be used with empirical correlations to assess the liquefaction susceptibility of sands.
    *   **Bearing Capacity and Settlement:** CPT data can be used to estimate bearing capacity and predict settlements.

*   **Advantages:**
    *   Continuous data profile, providing detailed stratigraphy.
    *   Less sensitive to soil disturbance compared to SPT.
    *   Faster than drilling and SPT for dense soils.
    *   Provides multiple parameters ($q_c$, $f_s$, $u_2$, $V_s$).
    *   Can penetrate dense soils and cemented layers more effectively than SPT.

*   **Disadvantages:**
    *   No soil sample obtained for visual inspection or direct laboratory testing.
    *   Cannot penetrate very dense gravels or cobbles.
    *   Requires specialized equipment.
    *   Interpretation relies on empirical correlations, which can be site-specific.
    *   Difficult to test in very soft, sensitive clays where the cone may advance too easily.

*   **Example:**
    A CPT log might show a sharp increase in $q_c$ at a certain depth, followed by a decrease and a steady increase in $f_s$. This pattern is indicative of a sand layer (high $q_c$) followed by a clay layer (lower $q_c$, higher $f_s$). A spike in $u_2$ might indicate a denser stratum or a transition zone.

*   **Important Point to Remember:** CPT provides a continuous, detailed profile of soil properties. While it doesn't provide physical samples, its ability to identify soil behavior type and provide quantitative measures of resistance makes it a powerful tool.

## 4. Vane Shear Test (VST)

**Learning Outcome:** Explain the principles, procedure, and interpretation of the Vane Shear Test (VST) for determining the undrained shear strength of soft cohesive soils.

*   **Principles:**
    *   A four-bladed vane is inserted into the soil at the bottom of a borehole or directly pushed into the ground.
    *   The vane is rotated at a slow, constant speed, and the torque required to shear the soil is measured.
    *   The test measures the **undrained shear strength ($s_u$)** of saturated, soft to medium stiff cohesive soils.

*   **Procedure:**
    *   The vane, typically with dimensions $H = 2D$ (where $H$ is height and $D$ is diameter), is lowered to the desired depth.
    *   It is rotated at a slow speed (e.g., 0.1 to 0.2 degrees per second) until the maximum torque is reached.
    *   The torque ($T$) is recorded.
    *   After reaching maximum torque, the soil may be remolded by rapid rotation of the vane, and the remolded shear strength is measured. This gives the **sensitivity** of the soil.

*   **Interpretation:**
    *   The undrained shear strength ($s_u$) is calculated using the following formula:
        $s_u = \frac{T}{\frac{\pi D^3}{2} \left(1 + \frac{H}{3D}\right)}$
        For the standard $H=2D$ vane:
        $s_u = \frac{T}{\pi D^3}$
    *   **Sensitivity (S_t):** The ratio of the undisturbed shear strength to the remolded shear strength.
        $S_t = \frac{s_u(\text{undisturbed})}{s_u(\text{remolded})}$
        High sensitivity soils (e.g., $>8$) can lose a significant portion of their strength when disturbed.

*   **Advantages:**
    *   Provides a direct measure of undrained shear strength in soft cohesive soils.
    *   Minimizes disturbance to the soil fabric if performed carefully.
    *   Can be performed in situ without sampling or at the bottom of a borehole.
    *   Allows for determination of soil sensitivity.

*   **Disadvantages:**
    *   Limited to soft to medium stiff cohesive soils.
    *   Not suitable for stiff or hard clays, or soils with sand/silt inclusions.
    *   Results can be affected by the rate of rotation.
    *   The vane itself can disturb the soil if not inserted carefully.
    *   Cannot be performed in cohesionless soils.

*   **Example:**
    A vane shear test in a soft clay layer yielded a maximum torque of 50 Nm for a vane with a diameter of 50 mm and height of 100 mm.
    $s_u = \frac{50 \text{ Nm}}{\pi (0.05 \text{ m})^3} = \frac{50}{\pi \times 0.000125} \approx 127324 \text{ Pa} = 127.3 \text{ kPa}$

*   **Important Point to Remember:** VST is the preferred method for determining the undrained shear strength of soft, sensitive clays in the field.

## 5. Plate Load Test (PLT)

**Learning Outcome:** Describe the principles and procedure of the Plate Load Test (PLT) and discuss its applications and limitations.

*   **Principles:**
    *   A rigid plate is placed on the ground surface or at the founding level of a proposed excavation.
    *   Load is applied incrementally to the plate, and the resulting settlement is measured.
    *   The test provides a stress-strain relationship for the soil under the plate, allowing for determination of the **modulus of elasticity ($E$)** and **bearing capacity**.

*   **Procedure:**
    *   A circular or square plate (typically 0.3 m to 1 m in diameter) is used.
    *   The plate is placed on a prepared surface.
    *   Load is applied to the plate using a hydraulic jack and a reaction load (e.g., a loaded platform or kentledge).
    *   Settlements are measured using dial gauges or transducers as the load is increased.
    *   Loads are applied in increments, and readings are taken after each increment has stabilized.
    *   The test is continued until the plate settles excessively or the desired load is reached.

*   **Interpretation:**
    *   **Load-Settlement Curve:** A plot of applied load versus measured settlement.
    *   **Bearing Capacity:** The ultimate bearing capacity can be estimated from the load-settlement curve as the load at which the plate fails or settles excessively.
    *   **Modulus of Elasticity ($E$):** Can be estimated from the initial, linear portion of the load-settlement curve using elastic theory. For a circular plate on a semi-infinite elastic soil:
        $E = \frac{\pi (1-\nu^2) D}{4} \times \frac{\Delta q}{\Delta s}$
        where $\nu$ is Poisson's ratio, $D$ is plate diameter, $\Delta q$ is the applied stress increment, and $\Delta s$ is the settlement increment.
    *   **Deformation Modulus ($E_m$):** Often determined, which is a more general term representing the stiffness of the soil mass under the plate.

*   **Applications:**
    *   Determining the bearing capacity and settlement characteristics of shallow foundations.
    *   Used for specialized structures or where site-specific data is crucial.
    *   Can be used to assess the load-bearing capacity of subgrades for roads and airfields.

*   **Limitations:**
    *   **Scale Effects:** The results are influenced by the size of the plate. The bearing capacity and modulus of elasticity obtained are specific to the plate size and may not directly represent the behavior of a larger foundation.
    *   **Depth of Influence:** The zone of influence for a PLT is limited to a depth of about 1.5 to 2 times the plate diameter. Deeper soil layers may not be adequately represented.
    *   **Cost and Time:** Can be expensive and time-consuming, especially for large diameter plates or deep tests.
    *   **Testing Environment:** Requires a stable reaction load system.
    *   **Soil Type:** Less reliable for highly stratified soils or soils with significant voids.

*   **Example:**
    A 0.6 m diameter plate is loaded, and at a stress of 100 kPa, it settles 5 mm, and at 200 kPa, it settles 12 mm. If Poisson's ratio is 0.3, the deformation modulus can be estimated.

*   **Important Point to Remember:** PLT is a valuable test for site-specific bearing capacity and settlement assessment, but its results must be carefully extrapolated to full-scale foundations due to scale effects.

## 6. Pressuremeter Test (PMT)

**Learning Outcome:** Explain the principles and procedure of the Pressuremeter Test (PMT) and discuss its interpretation for determining soil properties.

*   **Principles:**
    *   A cylindrical probe with an inflatable membrane is lowered into a pre-drilled borehole.
    *   The membrane is expanded radially against the borehole walls, applying a known pressure.
    *   The resulting radial expansion (volume increase) is measured.
    *   The test provides a stress-strain response of the soil in a more isotropic manner than other field tests.

*   **Procedure:**
    *   A borehole is drilled to the desired depth.
    *   The pressuremeter probe is lowered into the borehole.
    *   The probe is inflated in stages, and at each stage, the pressure and corresponding volume increase are recorded.
    *   The test is typically conducted in two phases:
        1.  **Loading Phase:** Pressure is increased incrementally.
        2.  **Creep Phase:** Pressure is held constant for a period to observe creep.
        3.  **Unloading Phase:** Pressure is decreased incrementally to assess rebound.

*   **Interpretation:**
    *   **Pressure-Expansion Curve:** A plot of applied pressure versus the corresponding volume expansion.
    *   **Menard's Pressuremeter Modulus ($E_m$):** Represents the stiffness of the soil. It is calculated from the linear portion of the pressure-expansion curve.
    *   **Limit Pressure ($P_L$):** The pressure at which the borehole walls have expanded to their original diameter or significant creep occurs.
    *   **Undrained Shear Strength ($s_u$):** Can be estimated from $P_L$ and the limit expansion.
    *   **Effective Angle of Internal Friction ($\phi'$):** Can be estimated from $P_L$ and the limit expansion in granular soils.
    *   **Lateral Stress ($\sigma_h$):** The initial lateral stress in the ground can be estimated.

*   **Advantages:**
    *   Measures soil properties in a more realistic stress state (triaxial compression and tension).
    *   Provides comprehensive data on stiffness, strength, and lateral stress.
    *   Less sensitive to borehole disturbance than some other tests, especially if the probe is self-boring.
    *   Can be performed in a wide range of soils, from soft clays to hard rocks.

*   **Disadvantages:**
    *   Requires specialized and expensive equipment.
    *   Borehole quality is critical; poorly executed boreholes can lead to unreliable results.
    *   Interpretation can be complex and relies on empirical correlations.
    *   Slower than CPT or SPT.

*   **Example:**
    In a pressuremeter test, at a pressure of 500 kPa, the probe expands by 1000 mm³. If the linear portion of the curve gives a slope of 200 kPa per 1000 mm³, the pressuremeter modulus can be calculated.

*   **Important Point to Remember:** The pressuremeter test provides a robust measure of soil stiffness and strength, reflecting the soil's response to a more isotropic stress state, making it valuable for foundation design.

## 7. Dilatometer Test (DMT)

**Learning Outcome:** Explain the principles and procedure of the Dilatometer Test (DMT) and discuss its interpretation for determining soil properties.

*   **Principles:**
    *   A flat, steel blade with an expandable diaphragm is pushed into the ground.
    *   At a specified depth, the diaphragm is inflated with gas, pushing against the soil.
    *   Two pressure readings are taken:
        *   **Pressure $P_1$ (Lift-off Pressure):** The pressure at which the diaphragm begins to move. This represents the horizontal stress on the blade.
        *   **Pressure $P_2$ (Maximum Expansion Pressure):** The pressure at which the diaphragm expands by a fixed amount (e.g., 1.1 mm or 1.15 mm). This is related to the soil's stiffness and strength.
    *   After the expansion test, the blade is retracted, and the amount of penetration is measured.

*   **Procedure:**
    *   The dilatometer blade is advanced into the soil using a CPT pushing system.
    *   At desired depths, the blade is stopped, and the test is conducted.
    *   The membrane is inflated, and $P_1$ and $P_2$ are recorded.
    *   The membrane is deflated, and the blade is advanced to the next test depth.

*   **Interpretation:**
    *   **Material Index ($I_D$):** $I_D = \frac{P_2 - P_1}{P_0 - P_1}$, where $P_0$ is the pore water pressure at the test level. This index helps classify the soil type.
    *   **Horizontal Stress Index ($K_D$):** $K_D = \frac{P_2 - u_0}{P_0 - u_0}$, where $u_0$ is the initial pore water pressure. This index is related to the coefficient of lateral earth pressure at rest ($K_0$).
    *   **DMT Modulus ($E_D$):** Related to the stiffness of the soil, derived from $P_2$.
    *   **Undrained Shear Strength ($s_u$):** Can be estimated from $P_2$.
    *   **Effective Angle of Internal Friction ($\phi'$):** Can be estimated for granular soils.
    *   **Overconsolidation Ratio (OCR):** Can be estimated from DMT parameters.

*   **Advantages:**
    *   Provides multiple soil parameters from a single test.
    *   Less susceptible to borehole disturbance than PMT.
    *   Can be performed rapidly with a CPT rig.
    *   Useful in a wide range of soil types, including sensitive clays and sands.
    *   Provides an estimate of lateral earth pressure at rest ($K_0$).

*   **Disadvantages:**
    *   No physical soil sample obtained.
    *   Interpretation relies on empirical correlations, which may need calibration.
    *   Can be difficult to advance in dense gravels or cemented layers.
    *   The flat shape of the blade can lead to different soil responses compared to cylindrical probes.

*   **Example:**
    In a dilatometer test, $P_1 = 200$ kPa, $P_2 = 500$ kPa, and the pore water pressure $u_0 = 150$ kPa.
    $I_D = \frac{500 - 200}{P_0 - 200}$ (requires $P_0$ to calculate $I_D$).
    $K_D = \frac{500 - 150}{P_0 - 150}$ (requires $P_0$ to calculate $K_D$).

*   **Important Point to Remember:** The DMT is a versatile in-situ test that provides an array of soil parameters, including stiffness and lateral stress, which are often difficult to obtain from other field tests.

## 8. Geophysical Methods in Geotechnical Investigations

**Learning Outcome:** Discuss the principles and applications of geophysical methods for characterizing subsurface conditions.

*   **Principles:**
    *   Geophysical methods involve measuring physical properties of the ground that vary with different soil and rock types, density, moisture content, and structure.
    *   These properties are then used to infer subsurface stratigraphy, material identification, and engineering characteristics.

*   **Common Geophysical Methods:**
    *   **Seismic Refraction/Reflection:**
        *   **Principle:** Measures the travel times of seismic waves (generated by a source like a hammer or explosive) as they travel through different subsurface layers. Waves refract or reflect at boundaries between layers with different acoustic impedances.
        *   **Applications:** Determining depth to bedrock, identifying geological structures, estimating seismic wave velocities (used for stiffness assessment and seismic design).
    *   **Electrical Resistivity/Induced Polarization (IP):**
        *   **Principle:** Measures the electrical resistance of the ground. Different materials have different resistivities due to factors like moisture content, porosity, and mineralogy. IP measures the ability of the ground to store and release electrical charge.
        *   **Applications:** Identifying groundwater tables, delineating different soil types (e.g., clays vs. sands), mapping contaminated zones, detecting underground cavities.
    *   **Ground Penetrating Radar (GPR):**
        *   **Principle:** Transmits short pulses of electromagnetic energy into the ground and detects reflections from subsurface interfaces.
        *   **Applications:** Shallow subsurface investigations, identifying buried utilities, mapping shallow stratigraphy, detecting voids and anomalies, locating buried objects.
    *   **Electromagnetic (EM) Methods:**
        *   **Principle:** Measures the conductivity or resistivity of the subsurface by inducing electrical currents and measuring their response.
        *   **Applications:** Similar to electrical resistivity, useful for mapping soil layers, groundwater, and buried metal objects.
    *   **Microgravity Surveys:**
        *   **Principle:** Measures subtle variations in the Earth's gravitational field, which can be related to density contrasts in the subsurface.
        *   **Applications:** Detecting large underground anomalies like sinkholes, tunnels, or large cavities.

*   **Advantages:**
    *   **Non-invasive or Minimally Invasive:** Can investigate large areas quickly without extensive drilling.
    *   **Continuous Profiling:** Can provide continuous data along survey lines.
    *   **Cost-Effective for Large Areas:** Can be more economical than drilling for broad site characterization.
    *   **Detects Features Missed by Drilling:** Can identify geological structures or anomalies between boreholes.

*   **Disadvantages:**
    *   **Indirect Measurement:** Relies on interpretation of physical properties to infer geotechnical characteristics.
    *   **Ambiguity:** Different subsurface conditions can produce similar geophysical responses.
    *   **Requires Calibration:** Results often need to be calibrated with boreholes or other ground truth data.
    *   **Limited Depth of Investigation:** Some methods are only effective for shallow depths.
    *   **Environmental Factors:** Performance can be affected by surface conditions, topography, and geological complexity.

*   **Example:**
    A seismic refraction survey reveals a sharp increase in wave velocity at a depth of 10 meters, indicating the presence of bedrock. Electrical resistivity surveys may show higher resistivities in sandy layers compared to clayey layers.

*   **Important Point to Remember:** Geophysical methods are powerful complementary tools for geotechnical investigations, providing broad coverage and identifying features that might be missed by conventional methods. However, they must be used in conjunction with direct subsurface investigation techniques like drilling and sampling.

## 9. Practice Questions and Answers

**Question 1:** What is the primary purpose of conducting field tests in geotechnical investigations, and how do they complement laboratory tests?

**Answer 1:** The primary purpose of field tests is to obtain in-situ data about soil and rock properties in their natural environment, which can be significantly influenced by factors like stress state, fabric, and scale. Field tests provide a more realistic assessment of ground behavior under load than laboratory tests alone, which are performed on disturbed or reconstituted samples. They help validate laboratory results and identify geological variations that might be missed by sampling.

**Question 2:** Describe the Standard Penetration Test (SPT). What are its main limitations?

**Answer 2:** The SPT involves driving a split-spoon sampler into the ground using a standard hammer. The N-value (number of blows for the last 300 mm penetration) is recorded and used to estimate relative density (sands) or consistency (clays). Its main limitations include the empirical nature of its correlations, the disturbance caused to the soil, its reduced reliability in gravelly soils, and inconsistencies in energy transfer.

**Question 3:** Explain the key measurements obtained from a Cone Penetration Test (CPT) and how they are used to classify soil.

**Answer 3:** The key measurements from a CPT are cone resistance ($q_c$) and sleeve friction ($f_s$). Piezocone tests (CPTU) also measure pore water pressure ($u_2$). Soil classification is achieved by plotting these parameters on charts (e.g., Robertson and Campanella charts) that delineate different soil behavior types based on the combination of $q_c$ and $f_s$, and the pore pressure response.

**Question 4:** In what type of soil is the Vane Shear Test (VST) most effectively used, and what key parameter does it determine?

**Answer 4:** The Vane Shear Test (VST) is most effectively used in soft to medium stiff cohesive soils (clays and silts). It directly determines the undrained shear strength ($s_u$) of these soils in situ.

**Question 5:** What are the main advantages and disadvantages of the Plate Load Test (PLT)?

**Answer 5:**
*   **Advantages:** Provides site-specific bearing capacity and settlement data for shallow foundations; can be used to determine the modulus of elasticity.
*   **Disadvantages:** Significant scale effects (results are specific to plate size and may not extrapolate well to larger foundations); limited depth of influence; can be costly and time-consuming.

**Question 6:** Briefly explain the principle of the Pressuremeter Test (PMT) and its advantage over other field tests.

**Answer 6:** The PMT involves expanding an inflatable probe radially within a borehole, measuring the applied pressure and resulting volume expansion. Its advantage is that it provides a stress-strain response that is more isotropic, reflecting the soil's behavior under a more realistic stress state compared to tests like SPT or CPT.

**Question 7:** What are the primary measurements in a Dilatometer Test (DMT), and what important information can be derived from them?

**Answer 7:** The primary measurements in a DMT are $P_1$ (lift-off pressure) and $P_2$ (maximum expansion pressure). From these, key parameters like the Material Index ($I_D$), Horizontal Stress Index ($K_D$), DMT Modulus ($E_D$), undrained shear strength ($s_u$), and overconsolidation ratio (OCR) can be derived.

**Question 8:** How can geophysical methods be used in geotechnical investigations, and what is a key limitation?

**Answer 8:** Geophysical methods (e.g., seismic, electrical resistivity) measure physical properties of the subsurface to infer stratigraphy and material characteristics. They are useful for broad site characterization and identifying features between boreholes. A key limitation is that they provide indirect measurements, and their interpretation can be ambiguous, often requiring calibration with direct ground truth data.

## 10. Summary and Key Takeaways

*   **Field tests are crucial** for understanding in-situ ground conditions and behavior, complementing laboratory tests by accounting for scale and stress effects.
*   **SPT** is a widely used, inexpensive test for relative density and consistency, but its correlations are empirical.
*   **CPT** provides continuous, detailed profiles of soil resistance and pore pressure, enabling soil classification and strength estimation without physical samples.
*   **VST** is the preferred method for determining the undrained shear strength of soft cohesive soils and their sensitivity.
*   **PLT** is used for direct bearing capacity and settlement assessment of shallow foundations but is subject to significant scale effects.
*   **PMT and DMT** offer more comprehensive soil characterization by providing insights into stiffness, strength, and stress states under more isotropic conditions.
*   **Geophysical methods** offer non-invasive, broad-scale site investigation, identifying features and variations between boreholes but requiring calibration.
*   **Selection of appropriate field tests** depends on the soil type, project requirements, budget, and desired level of detail.
*   **Always consider the limitations** of each test and the need for proper calibration and interpretation.

This module provides a foundation for understanding the practical application of various field testing techniques in advanced geotechnical investigations. Remember to always refer to relevant standards and codes of practice for specific testing procedures and interpretations.
