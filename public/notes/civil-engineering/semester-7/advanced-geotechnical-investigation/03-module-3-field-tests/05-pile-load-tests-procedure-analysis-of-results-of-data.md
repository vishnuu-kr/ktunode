---
title: "Pile load tests- Procedure- analysis of results of data"
subject: "ADVANCED GEOTECHNICAL INVESTIGATION"
module: "Module 3: Field Tests"
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba8115be"
status: "completed"
scrapedAt: "2026-05-20T18:56:50.274Z"
---
# Advanced Geotechnical Investigation: Module 3 - Field Tests

## Topic: Pile Load Tests: Procedure and Analysis of Results

---

### 1. Introduction to Pile Load Tests

**1.1. Purpose of Pile Load Tests:**

*   **Verification of Load-Carrying Capacity:** To determine the ultimate axial load capacity of a single pile or a group of piles.
*   **Settlement Prediction:** To estimate the settlement of piles under service loads.
*   **Design Validation:** To confirm that the designed pile foundation meets the project requirements and safety standards.
*   **Soil-Structure Interaction:** To understand how the pile interacts with the surrounding soil.
*   **Quality Control:** To ensure the constructed piles are performing as intended.

**1.2. Types of Pile Load Tests:**

*   **Axial Compression Tests:** The most common type, where the pile is loaded in the downward direction.
*   **Axial Tension (Uplift) Tests:** To determine the pull-out resistance of piles, especially in situations with uplift forces (e.g., wind loads on tall structures, buoyant forces).
*   **Lateral Load Tests:** To assess the pile's resistance to horizontal forces, crucial for structures subjected to wind, seismic activity, or earth pressure.

**1.3. Key Terminology:**

*   **Pile:** A structural element, usually made of concrete, steel, or timber, that is driven or bored into the ground to transfer loads from a superstructure to deeper, more competent soil or rock strata.
*   **Load-Deflection Curve:** A graphical representation of the relationship between the applied load and the resulting settlement (deflection) of the pile head.
*   **Ultimate Load Capacity:** The maximum load a pile can withstand before significant, uncontrolled settlement or failure occurs.
*   **Service Load:** The expected working load that the pile foundation will carry during its service life.
*   **Failure Load:** The load at which a rapid and progressive increase in settlement occurs with little or no increase in applied load.
*   **Safe Load:** The load that can be applied to a pile without causing excessive settlement or failure, typically determined by applying a factor of safety to the ultimate load capacity.
*   **Elastic Settlement:** Immediate settlement that occurs due to the elastic deformation of the pile material and the soil.
*   **Consolidation Settlement:** Long-term settlement due to the expulsion of pore water from the soil under load.
*   **Negative Skin Friction (Downdrag):** A downward drag force on a pile caused by the settlement of surrounding soil, often due to consolidation.
*   **Group Efficiency:** The ratio of the load capacity of a pile group to the sum of the load capacities of individual piles.

---

### 2. Pile Load Test - Axial Compression Test: Procedure

**2.1. Preparation and Setup:**

*   **Pile Selection:** Choose a representative pile from the foundation installation. If multiple pile types are used, test each type.
*   **Test Location:** The test pile should be installed under conditions representative of the production piles. Avoid areas that may have been disturbed by the installation of other piles.
*   **Reaction System:**
    *   **Dead Load Reaction:** Using kentledge (concrete blocks or steel weights) stacked on a platform supported by beams resting on the ground away from the test pile.
    *   **Reaction Piles:** Driving or boring a sufficient number of auxiliary piles around the test pile to provide the necessary reaction. These reaction piles must be installed sufficiently in advance to allow for soil set-up.
    *   **Tie-down Anchors:** Driving anchor piles or rock anchors to provide uplift resistance for the reaction beams.
*   **Load Application System:**
    *   **Hydraulic Jack(s):** A calibrated hydraulic jack (or multiple jacks) placed between the pile head and the reaction system.
    *   **Load Cell:** An instrument to accurately measure the applied load.
*   **Instrumentation:**
    *   **Settlement Measurement Devices:**
        *   **Dial Gauges:** Typically mounted on a stable reference beam supported by datum posts set away from the pile and reaction system to avoid settlement effects. Multiple dial gauges are often used for redundancy.
        *   **Linear Variable Differential Transformers (LVDTs):** Provide continuous, high-precision displacement measurements.
    *   **Pile Top Instrumentation (Optional):**
        *   **Strain Gauges:** To measure strain along the pile shaft, allowing for calculation of load distribution and detection of pile integrity issues.
        *   **Tiltmeters:** To measure any tilting of the pile head.
*   **Pile Head Preparation:** The pile head must be prepared to provide a stable and uniform surface for the jack and reaction beams. This may involve capping the pile with concrete.

**2.2. Loading Sequence:**

*   **Incremental Loading:** The load is applied in a series of increments. The magnitude of each increment is typically a fraction of the expected ultimate load.
    *   **Common practice:** 10% or 20% of the design load for initial increments, and then progressively smaller increments as the load increases.
*   **Soak Time (Creep Load):** At each load increment, the load is maintained for a specified period (e.g., 10-20 minutes, or longer for specific tests) to allow the pile to creep. This is crucial for observing the settlement rate.
*   **Settlement Recording:** During the soak time, settlements are recorded at regular intervals (e.g., every 1-5 minutes for the first few minutes, then every 5-10 minutes). The test is considered stable when the settlement rate falls below a predefined threshold (e.g., 0.02 mm/minute).
*   **Unloading Sequence:** After reaching the maximum test load, the load is usually removed in a similar series of decrements, and the rebound settlement is recorded. This helps in assessing the elastic and permanent components of settlement.

**2.3. Test Duration:**

*   The test can last for several hours to several days, depending on the soil conditions, the type of pile, and the loading sequence.
*   **Constant Rate of Penetration (CRP) Test:** In some cases, the load is increased continuously at a constant rate, and the settlement is recorded continuously. This is less common for large diameter piles but can be useful for rapid assessment.
*   **Maintain Load Test:** The pile is loaded to a specific service load and monitored for settlement over a longer period (days or weeks) to assess long-term behavior.

---

### 3. Pile Load Test - Axial Compression Test: Analysis of Results

**3.1. Plotting the Load-Settlement Curve:**

*   The most fundamental step is to plot the applied load against the total settlement.
*   **Axes:**
    *   X-axis: Applied Load (kN or tf)
    *   Y-axis: Total Settlement (mm)
*   **Interpretation:**
    *   The curve typically shows an initial steep slope (elastic behavior), followed by a decreasing slope as the soil resistance mobilizes, and eventually, a sharp increase in settlement indicating approaching failure.

**3.2. Determining the Ultimate Load Capacity:**

Several methods are used to interpret the load-settlement curve to determine the ultimate load capacity.

*   **a) Straight-line Tangent Method (Danish Method):**
    *   Draw a straight line through the initial elastic portion of the load-settlement curve.
    *   Draw another straight line through the final steep portion of the curve where failure is occurring.
    *   The intersection of these two lines is taken as the ultimate load.
    *   **Pros:** Simple and objective.
    *   **Cons:** Can be subjective, especially if the transition from elastic to failure is not clear.

*   **b) 10% Strain Criterion (Davisson & Gill, 1963):**
    *   The ultimate load is defined as the load at which the settlement equals 10% of the pile diameter (or 10% of the pile length for long piles).
    *   **Formula:** $P_{ult} = P_{10\% strain}$ where settlement $S = 0.1 \times D$ (for short piles) or $S = 0.1 \times L$ (for long piles), and D is the pile diameter, L is the pile length.
    *   **Pros:** Objective, accounts for pile geometry.
    *   **Cons:** May not always represent actual soil failure, especially in cohesive soils.

*   **c) Butler-Hannam Method:**
    *   The ultimate load is the load at which the settlement reaches a value equal to $S = \frac{P}{20 \times D}$ for short piles or $S = \frac{P}{20 \times L}$ for long piles (where P is the applied load).
    *   This criterion is also known as the "limit load". It defines the load at which the settlement becomes unduly large.
    *   **Pros:** Provides a consistent interpretation.
    *   **Cons:** Similar limitations to the Davisson & Gill method.

*   **d) Secant Modulus Method:**
    *   The ultimate load is the load at which the slope of the load-settlement curve (secant modulus) drops to a specific value, often one-tenth of the initial tangent modulus.
    *   **Pros:** Based on the stiffness of the pile-soil system.
    *   **Cons:** Can be sensitive to the initial tangent modulus.

*   **e) Log-Log Method (Terzaghi & Peck, 1967):**
    *   Plot the applied load versus settlement on a log-log scale.
    *   The ultimate load is the load at which the curve becomes horizontal or nearly horizontal.
    *   **Pros:** Often effective in identifying the ultimate load in various soil conditions.
    *   **Cons:** Can be subjective in drawing the horizontal line.

*   **f) Hyperbolic Method (Sigmund & Mesch, 1964):**
    *   Plot $P/S$ vs. $S$ on a linear scale. The relationship is often linear up to a certain point, and the reciprocal of the slope of the initial linear portion gives the ultimate load.
    *   **Pros:** Can provide a more precise determination of ultimate load.
    *   **Cons:** Requires careful plotting and interpretation.

**3.3. Determining the Safe Load:**

*   The safe load ($P_{safe}$) is determined by dividing the ultimate load capacity ($P_{ult}$) by a factor of safety ($FS$).
*   **Formula:** $P_{safe} = \frac{P_{ult}}{FS}$
*   **Factor of Safety (FS):**
    *   Typically ranges from **2.0 to 3.0** for static axial compression tests.
    *   The FS accounts for uncertainties in soil properties, pile installation, construction methods, and the accuracy of the analysis methods.
    *   A higher FS is used for situations with greater uncertainty or where settlement is critical.

**3.4. Settlement Analysis:**

*   **Elastic Settlement:** Can be estimated from the initial loading stage of the load-settlement curve.
*   **Consolidation Settlement:** Observed during the "soak" periods at each load increment, particularly in cohesive soils.
*   **Rebound Settlement:** The settlement recovered after unloading indicates the elastic component. The unrecovered settlement is the permanent or plastic settlement.
*   **Settlement at Service Load:** By interpolating or extrapolating the load-settlement curve, the expected settlement under the design service load can be estimated.

**3.5. Pile Integrity Assessment (from load test data):**

*   **Pile Head Displacements:** High settlement under low loads can indicate poor soil conditions or a defective pile.
*   **Load-Distribution Analysis:** If strain gauges are used, the load distribution along the pile shaft can be analyzed. A sudden reduction in load carried by a section of the pile can indicate a defect (e.g., necking, inclusion, void).
*   **Comparison with Oedometer Data or Cone Penetration Test (CPT) Data:** The load-settlement behavior can be compared with predictions based on other soil investigation data to assess the consistency and integrity of the pile.

**3.6. Back-Analysis:**

*   The results of the pile load test can be used to calibrate geotechnical parameters used in design models, improving the accuracy of predictions for subsequent piles.

---

### 4. Pile Load Test - Axial Tension (Uplift) Test: Procedure and Analysis

**4.1. Procedure:**

*   Similar setup to compression tests, but the load is applied upwards.
*   Reaction system must provide sufficient downward force to resist the uplift.
*   Measurements are of uplift force and upward displacement (uplift).

**4.2. Analysis:**

*   Plotting of uplift load vs. uplift displacement.
*   Determination of ultimate uplift capacity using similar criteria as for compression tests (e.g., 10% strain criterion).
*   The capacity is primarily due to the skin friction along the pile shaft and the weight of the pile itself.

---

### 5. Pile Load Test - Lateral Load Test: Procedure and Analysis

**5.1. Procedure:**

*   Load is applied horizontally to the pile head.
*   Reaction can be provided by a dead-load system, reaction piles, or anchorages.
*   Instrumentation measures lateral displacement and applied lateral load.
*   Deflection profile along the pile length can be measured using inclinometers.

**5.2. Analysis:**

*   Plot of lateral load vs. lateral deflection.
*   Determination of lateral load capacity and stiffness.
*   Analysis often involves comparing measured deflections with theoretical models (e.g., using p-y curves).

---

### 6. Important Points to Remember

*   **Purpose:** Always remember *why* the test is being performed – to ensure safety and performance.
*   **Representativeness:** The test pile and its installation must be representative of the production piles.
*   **Instrumentation Accuracy:** Calibrated instruments are essential for reliable results.
*   **Reaction System Stability:** The reaction system must be stable and not influence the test pile's settlement.
*   **Loading Increments and Soak Times:** Adhering to the specified loading sequence and soak times is crucial for capturing soil behavior.
*   **Multiple Interpretation Methods:** It's good practice to use more than one method to determine the ultimate load capacity for cross-validation.
*   **Factor of Safety:** The selection of the factor of safety is critical for ensuring the safe design load.
*   **Long-Term Monitoring:** For critical structures or problematic soil conditions, long-term monitoring of settlement may be required.
*   **Pile Integrity:** Load test results can provide valuable insights into the integrity of the pile.

---

### 7. Practice Questions and Answers

**Question 1:** What is the primary purpose of a pile load test?

**Answer 1:** The primary purpose is to verify the load-carrying capacity and estimate the settlement of a pile or pile group under design loads.

---

**Question 2:** List three common methods for determining the ultimate axial load capacity of a pile from its load-settlement curve.

**Answer 2:**
1.  Straight-line Tangent Method (Danish Method)
2.  10% Strain Criterion (Davisson & Gill)
3.  Log-Log Method (Terzaghi & Peck)
4.  Hyperbolic Method

---

**Question 3:** A pile load test on a 0.5m diameter pile resulted in an ultimate load capacity of 2000 kN. If a factor of safety of 2.5 is required, what is the safe working load for the pile?

**Answer 3:**
Safe Load = Ultimate Load / Factor of Safety
Safe Load = 2000 kN / 2.5
Safe Load = 800 kN

---

**Question 4:** Why is it important to have a stable reference beam and datum posts set away from the test pile and reaction system during a pile load test?

**Answer 4:** This is to ensure that the settlement measurements are not affected by the settlement of the reaction system itself or any ground movement around the test area, thereby providing accurate readings of the pile head settlement.

---

**Question 5:** Explain the "soak time" or "creep load" in a pile load test.

**Answer 5:** Soak time refers to the period at each load increment during which the load is held constant. This allows the pile and the surrounding soil to reach equilibrium under that load, and the settlement rate is monitored. This is important for observing the time-dependent behavior of the soil (creep and consolidation) and to ensure the load is stable before proceeding to the next increment.

---

**Question 6:** The following data was obtained from a pile load test. Determine the ultimate load capacity using the 10% strain criterion for a pile diameter of 0.4m.

| Load (kN) | Settlement (mm) |
| :-------- | :-------------- |
| 0         | 0               |
| 200       | 1.0             |
| 400       | 2.1             |
| 600       | 3.3             |
| 800       | 4.7             |
| 1000      | 6.5             |
| 1200      | 8.9             |
| 1400      | 12.0            |
| 1600      | 17.5            |

**Answer 6:**
1.  **Calculate the settlement threshold:**
    *   Pile Diameter (D) = 0.4 m = 400 mm
    *   10% of Diameter = 0.10 * 400 mm = 40 mm
2.  **Find the load at which settlement equals or exceeds 40 mm:**
    *   From the table, at a load of 1400 kN, the settlement is 12.0 mm.
    *   At a load of 1600 kN, the settlement is 17.5 mm.
    *   We need to find the load that would cause 40 mm of settlement. We can interpolate between the last two points or observe that the settlement is rapidly increasing.
    *   Let's assume the test continued and the load causing 40mm settlement was recorded. In this *provided limited data*, the load at 17.5mm is 1600 kN. The settlement is rapidly increasing.
    *   **However, if we strictly apply the criterion from the given data**, we can't directly find 40mm. A common approach when the full criterion isn't met is to take the last recorded load if the trend indicates that the load is approaching failure before reaching the 10% criterion *or* to consider the load at which the settlement *rate* becomes excessive.
    *   Let's assume the intention of the question is to see if you can apply the criterion. If the test had continued, we'd look for the load corresponding to 40mm.
    *   **Revisiting the 10% strain criterion:** It's the load *at which* the settlement *equals* 10% of the diameter.
    *   Let's examine the settlement increments:
        *   200 kN: 1.0 mm
        *   400 kN: 2.1 mm (increase of 1.1 mm for 200 kN)
        *   600 kN: 3.3 mm (increase of 1.2 mm for 200 kN)
        *   800 kN: 4.7 mm (increase of 1.4 mm for 200 kN)
        *   1000 kN: 6.5 mm (increase of 1.8 mm for 200 kN)
        *   1200 kN: 8.9 mm (increase of 2.4 mm for 200 kN)
        *   1400 kN: 12.0 mm (increase of 3.1 mm for 200 kN)
        *   1600 kN: 17.5 mm (increase of 5.5 mm for 200 kN)
    *   The settlement is clearly increasing rapidly. If we had data points for loads around 1800 kN, we might reach 40mm.
    *   **For a practical interpretation of this limited data**, if the 10% strain criterion is 40mm, and the last load tested was 1600kN giving 17.5mm, the test might not have reached the point of failure according to this criterion. However, if the *next* load increment were to cause settlement to exceed 40mm, then the *previous* load is often considered.
    *   Let's assume for the sake of demonstration that the test *did* reach 40mm settlement. From the trend, the load would be significantly higher than 1600 kN.

    *   **Alternative Interpretation using the provided data:** If we have to choose from the given loads, and knowing that the settlement is rapidly increasing, the **ultimate load is the load at which the settlement reaches 10% of the pile diameter.** This is 40mm. Since the highest settlement in the table is 17.5mm at 1600 kN, the ultimate load is not precisely determined from this limited data.
    *   **However, often in questions, you are expected to use the data provided.** If the question implies we *must* choose from the given loads, and the test is progressing, it might be interpreted as the last load at which the settlement was *less* than the failure criterion. This is not ideal.

    *   **Let's re-evaluate the prompt:** "Determine the ultimate load capacity using the 10% strain criterion". The criterion is 40 mm. The last data point is 1600 kN for 17.5 mm.
    *   **A common practice in exams is to assume the data is sufficient to apply the method.** If the test had reached failure, the load at 40mm settlement would be reported. Without it, we can't definitively apply the 10% criterion *to determine the ultimate load*.
    *   **Perhaps the question implicitly assumes a simpler failure:** If the test *had* reached 40mm, what would it be?
    *   Let's assume a hypothetical scenario where the next data point was: 1800 kN, 25 mm; 2000 kN, 40 mm. Then the ultimate load would be 2000 kN.

    *   **Given the provided data, a more appropriate answer would be:** "The 10% strain criterion is 40 mm. From the provided data, the maximum settlement recorded is 17.5 mm at a load of 1600 kN. Therefore, the ultimate load capacity according to the 10% strain criterion cannot be definitively determined from this incomplete dataset."

    *   **If forced to pick from the existing data and assuming a failure state IS represented by the trend:** The load at which settlement increases most rapidly suggests a near-failure condition. The jump from 12.0 mm to 17.5 mm (an increase of 5.5 mm) for a 200 kN load increase is significant. This occurs at 1400-1600 kN. However, this is not the 10% criterion.

    *   **Let's stick to the strict definition:** 40 mm settlement. The data does not reach 40 mm. Therefore, the ultimate load by this criterion is not determined.

    *   **Final thought on a possible interpretation if a single value is expected:** The criterion is about the *load that causes* that settlement. If a load causes settlement greater than 40mm, then it's considered ultimate. In the absence of data for 40mm, some might take the load at which settlement *approaches* this value. However, this is subjective.

    *   **Best approach for an exam:** State the criterion, state what the data shows, and explain why it cannot be definitively determined, or if forced, make a reasoned assumption about extrapolation.

    *   **Let's try a different approach:** Some methods look at the rate of settlement. For example, the straight-line tangent method.
        *   Initial tangent (e.g., 0-400 kN): Slope = 2.1 mm / 400 kN = 0.00525 mm/kN
        *   Final steep part (e.g., 1200-1600 kN): Slope = (17.5 - 12.0) mm / (1600 - 1400) kN = 5.5 mm / 200 kN = 0.0275 mm/kN. This is a very steep slope indicating failure is imminent.
        *   If we try to draw tangents, it's hard with this data.

    *   **Let's assume the question intended for the test to have gone further and that 1600 kN resulted in 17.5 mm. If we assume the criterion of 10% of diameter (40mm) is approached, the ultimate load would be greater than 1600kN.**

    *   **Let's assume a typo in the question or data and that 1400 kN caused 40 mm settlement.** Then the ultimate load = 1400 kN.
    *   **Let's assume a typo and that 1600 kN caused 40 mm settlement.** Then the ultimate load = 1600 kN.

    *   **Given the commonality of such questions in textbooks, there is often an expectation of a direct answer from the data.** If the test *did* reach failure at or before the last point, the failure load is the load at which settlement becomes excessive. The jump from 12.0 to 17.5mm at 1600kN might be interpreted as failure. In that case, the ultimate load is 1600 kN. This is a *possible* interpretation but not strictly the 10% criterion.

    *   **Let's go with the most likely exam interpretation:** The 10% criterion is 40mm. Since 40mm is not reached, the ultimate load is *not* determined by this criterion from the given data. However, if the *test had concluded* at the last data point, and we need to provide *an* ultimate load value, we would have to look at other methods or make assumptions. The question specifically asks for the 10% criterion.

    *   **Final Conclusion for Answer 6:** The 10% strain criterion for a 0.4m diameter pile is 40 mm settlement. The maximum settlement recorded in the provided data is 17.5 mm at a load of 1600 kN. Therefore, the ultimate load capacity, according to the 10% strain criterion, **cannot be definitively determined from this data alone.**

---
