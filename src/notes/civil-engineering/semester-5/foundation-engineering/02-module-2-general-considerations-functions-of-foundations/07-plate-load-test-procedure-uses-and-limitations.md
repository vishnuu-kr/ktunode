---
title: "Plate load test – Procedure, uses and limitations"
subject: "FOUNDATION ENGINEERING"
module: "Module 2: General Considerations: Functions of foundations "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e38"
status: "completed"
scrapedAt: "2026-05-20T18:48:35.538Z"
---
# FOUNDATION ENGINEERING: Module 2 - General Considerations: Functions of Foundations

## Topic: Plate Load Test

---

### 1. Introduction to the Plate Load Test

The Plate Load Test (PLT) is a **field test** used to determine the ultimate bearing capacity and the modulus of elasticity (or settlement characteristics) of soil *in situ*. It is a relatively simple and direct method for assessing the load-settlement behavior of a soil deposit.

**Key Concepts:**

*   **In situ:** In its original place or position. This means the test is performed directly on the soil as it exists in the ground, without taking samples to a lab.
*   **Ultimate Bearing Capacity:** The maximum pressure that can be applied to the soil without causing shear failure.
*   **Modulus of Elasticity (or Settlement Characteristics):** A measure of the soil's stiffness and its tendency to deform under load.

---

### 2. Functions of Foundations (Contextualization)

Before diving into the Plate Load Test, it's crucial to understand the fundamental functions of foundations, as the PLT helps assess the soil's ability to fulfill these functions:

*   **Transmit Loads:** Foundations are designed to transfer all loads from the superstructure (building, bridge, etc.) to the underlying soil or rock.
*   **Prevent Excessive Settlement:** They ensure that the settlement of the structure is within acceptable limits, preventing damage to the superstructure or discomfort to occupants.
*   **Ensure Stability:** Foundations provide lateral stability against forces like wind and seismic loads.
*   **Resist Uplift:** In some cases, foundations need to resist upward forces.
*   **Distribute Stresses:** They spread the concentrated loads from columns or walls over a larger area of the soil.

The Plate Load Test directly helps engineers understand how the soil will behave under these transmitted loads, particularly in terms of bearing capacity and settlement.

---

### 3. Procedure of the Plate Load Test

The Plate Load Test is conducted by applying incremental loads to a rigid plate placed on the soil surface (or at foundation level) and measuring the resulting settlement.

**General Steps:**

1.  **Site Preparation:**
    *   Excavate a pit to the desired foundation level. The pit size should be at least 3 to 5 times the width of the loading plate to minimize the influence of the pit walls on the test.
    *   Level the base of the pit.

2.  **Placing the Loading Plate:**
    *   Place a rigid steel plate of a specified size (commonly circular with a diameter of 300 mm, 450 mm, 600 mm, or 750 mm) centrally at the bottom of the pit.
    *   Ensure the plate is perfectly horizontal.
    *   *Important Consideration:* The size of the loading plate influences the test results. Smaller plates might overestimate the bearing capacity compared to larger prototype foundations due to the difference in the zone of influence.

3.  **Applying the Load:**
    *   A loading platform (e.g., a reaction beam supported by kentledge or anchor piles) is constructed above the plate.
    *   The load is applied through a hydraulic jack placed between the loading platform and the loading plate.
    *   The load is applied in **increments**. The magnitude of increments is usually about 1/5th of the anticipated safe bearing capacity or a predetermined value.
    *   Each load increment is maintained for a specific time interval (usually 1 to 2 hours, or until the rate of settlement becomes negligible, typically less than 0.1 mm per hour).

4.  **Measuring Settlement:**
    *   Settlements are measured using **dial gauges** or **settlement measuring devices**.
    *   These devices are typically mounted on a reference beam, which is supported by undisturbed soil or stakes placed at a distance from the loaded area to avoid settlement.
    *   The dial gauges should be sensitive enough to measure small settlements accurately (e.g., to 0.01 mm).

5.  **Load-Settlement Curve:**
    *   A graph is plotted with applied load (or applied pressure) on the Y-axis and the corresponding settlement on the X-axis.
    *   This curve helps in determining the ultimate bearing capacity and the modulus of elasticity.

6.  **Unloading:**
    *   After reaching the maximum load or the desired settlement, the load is gradually removed in decrements.
    *   The rebound settlement is also recorded to assess the elastic properties of the soil.

**Variations:**

*   **Vertical Plate Load Test:** The standard test described above.
*   **Horizontal Plate Load Test:** Used to determine the shear strength of the soil along a horizontal plane, typically for cohesive soils. This involves applying a horizontal force to a plate.

**Typical Testing Standards:**

*   **ASTM D1194:** Standard Test Method for Bearing Capacity of Soil for Static or Slow Repetitive Axial Load.
*   **IS 1888:** Method of Load Tests on Soiling.

---

### 4. Uses of the Plate Load Test

The Plate Load Test is a valuable tool in foundation engineering for several reasons:

*   **Determination of Ultimate Bearing Capacity:** The load-settlement curve can be extrapolated to estimate the ultimate bearing capacity of the soil at the test level. The "ultimate load" is often taken as the load at which a rapid increase in settlement occurs or when a predetermined settlement limit is reached.
*   **Determination of Modulus of Elasticity (Subgrade Reaction):** The initial straight-line portion of the load-settlement curve can be used to calculate the modulus of elasticity ($E_s$) of the soil. For a circular plate of diameter $B_p$ loaded at the surface, $E_s = \frac{\pi}{4}(1-\nu^2) B_p \frac{\Delta P}{\Delta s}$, where $\nu$ is Poisson's ratio of the soil. This can then be used to determine the subgrade reaction ($k_s = E_s / (1-\nu^2) B_p$ for a rigid plate, or simplified as $k_s = E_s / B_p$ for a flexible footing).
*   **Assessment of Settlement:** The test provides direct information about the settlement of the soil under various load intensities, allowing for an estimation of the settlement of a full-scale foundation.
*   **Correlation with Other Soil Properties:** The results can be correlated with the results of other laboratory tests (like triaxial tests or consolidation tests) and empirical methods for estimating bearing capacity.
*   **Verification of Design Assumptions:** It helps verify the bearing capacity and settlement estimations made during the design phase.
*   **Suitability for Different Soil Types:** It is most effective for sandy soils and gravelly soils. It can be used in cohesive soils, but interpretation requires care.

---

### 5. Limitations of the Plate Load Test

Despite its usefulness, the Plate Load Test has several significant limitations that restrict its applicability and interpretation:

*   **Scale Effect:** The most critical limitation. The bearing capacity and settlement behavior of a small plate do not directly represent the behavior of a large prototype foundation.
    *   **Bearing Capacity:** For cohesive soils, the ultimate bearing capacity is generally independent of the plate size, but for granular soils, the ultimate bearing capacity decreases with increasing plate size.
    *   **Settlement:** Settlement generally increases with the size of the foundation. A smaller plate influences a shallower zone of soil, while a larger foundation influences a deeper zone.
*   **Shallow Depth Influence:** The test is generally influenced by the soil properties in the top layer (typically up to twice the plate diameter). If the critical depth for a large foundation is significantly deeper than this, the test results may not be representative of the soil's behavior under the actual foundation.
*   **Time-Consuming and Costly:** Conducting a full Plate Load Test can be time-consuming and expensive, especially for multiple tests or at great depths.
*   **Not Suitable for Very Soft Clays:** In very soft cohesive soils, the plate might sink rapidly, making it difficult to establish a stable load.
*   **Influence of Pit Walls:** The presence of the excavated pit walls can affect the lateral confinement of the soil around the plate, potentially influencing the results. This is why the pit is made significantly larger than the plate.
*   **Doesn't Simulate Actual Foundation Conditions Perfectly:** It doesn't account for the stress distribution and interaction that occur under an actual foundation, which is embedded within the ground and subjected to loads from the structure.
*   **Practical Difficulties:** Setting up the loading platform, reaction system, and ensuring undisturbed soil conditions can be challenging in certain field conditions.
*   **Interpretation for Bearing Capacity:** Determining the "ultimate bearing capacity" from the load-settlement curve is often subjective, especially when a clear failure point is not observed. Extrapolation methods are used, which introduce some uncertainty.

**Corrections and Considerations for Scale Effect:**

To account for the scale effect, empirical correlations are used to convert plate load test results to prototype foundation behavior:

*   **For Granular Soils:** The ultimate bearing capacity of a prototype footing is often taken as equal to that of the plate load test. However, settlement increases with footing size. A common approach is to assume settlement ($s$) is proportional to the footing width ($B$): $s_{prototype} \approx s_{plate} \times (\frac{B_{prototype}}{B_{plate}})^n$, where $n$ is an exponent between 1 and 2.
*   **For Cohesive Soils:** The ultimate bearing capacity is generally considered to be independent of the footing size. However, settlement extrapolation is more complex and often relies on correlations with consolidation test results.

---

### 6. Practice Questions and Answers

**Question 1:** What is the primary purpose of a Plate Load Test?

**Answer:** The primary purpose of a Plate Load Test is to determine the ultimate bearing capacity and the modulus of elasticity (or settlement characteristics) of soil *in situ*.

**Question 2:** List at least three limitations of the Plate Load Test.

**Answer:**
1.  **Scale Effect:** Results from a small plate do not perfectly represent larger foundations.
2.  **Shallow Depth Influence:** The test primarily reflects the properties of the shallow soil layers.
3.  **Time-Consuming and Costly:** Conducting the test can be resource-intensive.

**Question 3:** Briefly describe the process of applying load and measuring settlement during a Plate Load Test.

**Answer:** Load is applied incrementally to a rigid plate placed on the soil surface using a hydraulic jack. Settlement is measured using sensitive dial gauges mounted on a stable reference beam, recording the deformation of the soil under each load increment.

**Question 4:** Why is the "scale effect" a significant limitation of the Plate Load Test? Explain with respect to bearing capacity and settlement.

**Answer:** The scale effect is a limitation because the zone of influence of a small plate is much shallower than that of a large foundation.
*   **Bearing Capacity:** In granular soils, larger foundations tend to have lower ultimate bearing capacities than small plates because they engage weaker soil at greater depths. In cohesive soils, this effect is less pronounced.
*   **Settlement:** Settlement generally increases with the size of the foundation. A small plate may underestimate the settlement of a large foundation, as it doesn't account for the deformation of soil at greater depths.

**Question 5:** If a 300 mm diameter plate settles by 5 mm under a certain load in a sandy soil, what approximate settlement would you expect for a 1.5 m diameter footing under the same pressure, assuming $n=1.5$ for settlement extrapolation?

**Answer:**
Using the formula $s_{prototype} \approx s_{plate} \times (\frac{B_{prototype}}{B_{plate}})^n$:
$B_{plate} = 300 \text{ mm} = 0.3 \text{ m}$
$s_{plate} = 5 \text{ mm}$
$B_{prototype} = 1.5 \text{ m}$
$n = 1.5$

$s_{prototype} \approx 5 \text{ mm} \times (\frac{1.5 \text{ m}}{0.3 \text{ m}})^{1.5}$
$s_{prototype} \approx 5 \text{ mm} \times (5)^{1.5}$
$s_{prototype} \approx 5 \text{ mm} \times 11.18$
$s_{prototype} \approx 55.9 \text{ mm}$

Therefore, the approximate settlement for the 1.5 m diameter footing would be **55.9 mm**.

---

### 7. Important Points to Remember

*   **In situ test:** Measures soil properties directly in the ground.
*   **Plate size matters:** The scale effect is the most critical limitation, especially in granular soils.
*   **Depth of influence:** The test is sensitive to the soil properties in the top layer (roughly 2 times the plate diameter).
*   **Load-settlement curve:** Key output for analysis.
*   **Modulus of Elasticity:** Calculated from the initial, more linear portion of the curve.
*   **Ultimate Bearing Capacity:** Extrapolated from the curve, often where settlement becomes rapid.
*   **Pit size:** Must be significantly larger than the plate to avoid wall effects.
*   **Reference beam:** Crucial for accurate settlement measurements, ensuring it's not affected by the load.
*   **Correlations:** Used to bridge the gap between plate test results and prototype foundation behavior.

---
