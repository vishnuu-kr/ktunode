---
title: "Fatigue testing"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 2: Fatigue loading"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463dd9"
status: "completed"
scrapedAt: "2026-05-20T18:12:30.097Z"
---
# Failure Analysis and Design: Module 2 - Fatigue Loading

## Topic: Fatigue Testing

This module delves into the critical aspect of fatigue testing, a fundamental practice in understanding and predicting material failure under cyclic loading. We will explore the principles behind fatigue testing, its various methodologies, and how the generated data is used for design and failure analysis.

---

### 1. Introduction to Fatigue Testing

Fatigue testing is a crucial experimental method used to determine the resistance of a material or component to failure under repeated or fluctuating stresses. It is essential for predicting the service life of components subjected to cyclic loads, which are prevalent in many engineering applications.

**Key Concept:** Fatigue is a progressive and localized structural damage process that occurs when a material is subjected to cyclic loading. It can lead to crack initiation and propagation, ultimately resulting in fracture, often at stress levels well below the material's static tensile strength.

**Importance:**
*   **Predicting Service Life:** Essential for estimating how long a component will last under anticipated operating conditions.
*   **Material Selection:** Aids in choosing materials with adequate fatigue strength for specific applications.
*   **Design Validation:** Verifies the fatigue performance of designed components and structures.
*   **Failure Analysis:** Helps understand the root cause of fatigue failures observed in service.

**Alignment with Course Outcomes:**
*   **CO1 (K2):** Understanding material behavior under various loading conditions, including cyclic.
*   **CO2 (K1):** Remembering factors affecting fatigue loading and its representation (S-N curves).
*   **CO3 (K3):** While fracture mechanics is a separate topic, fatigue testing data directly informs crack growth models used in fracture mechanics analysis.
*   **CO4 (K2):** Understanding how fatigue mechanisms are investigated and quantified.

---

### 2. Types of Fatigue Tests

Fatigue tests can be categorized based on the type of stress applied or the test setup. The most common types are:

#### 2.1. Constant Amplitude Fatigue Tests

These tests apply a sinusoidal stress or strain cycle with a constant amplitude.

*   **Axial Fatigue Testing:**
    *   Applies tensile or compressive stress along the axis of the specimen.
    *   Most common and relevant to many real-world applications.
    *   **Test Setup:** Typically uses a servo-hydraulic or electromechanical testing machine. The specimen is gripped at both ends and subjected to cyclic pulling and pushing.
    *   **Specimen Design:** Standardized specimens with specific geometries (e.g., hourglass or dog-bone shape) are used to ensure failure occurs in the gauge section and to minimize stress concentrations at the grips.

*   **Rotary Bending Fatigue Testing:**
    *   Applies a bending stress that alternates between maximum tensile and maximum compressive at different points on the rotating specimen.
    *   Simulates the fatigue loading experienced by rotating shafts (e.g., crankshafts, axles).
    *   **Test Setup:** A specimen is supported by bearings at its ends and loaded in the center by a rotating force. The stress distribution across the specimen cross-section varies from tensile to compressive as it rotates.
    *   **Advantages:** Can achieve a high number of cycles relatively quickly.
    *   **Reference:** Commonly described in sections related to fatigue testing in "Engineering Materials 3– Materials Failure Analysis: Case Studies and Design Implications" by Jones D. R. H.

*   **Torsional Fatigue Testing:**
    *   Applies cyclic shear stress.
    *   Relevant for components subjected to twisting loads, like drive shafts.
    *   **Test Setup:** Specimen is subjected to alternating torques.

*   **Flexural Fatigue Testing:**
    *   Applies cyclic bending stress to a stationary beam-like specimen.
    *   Can be used for materials that are difficult to machine into axial specimens or for specific applications like springs.

#### 2.2. Variable Amplitude Fatigue Tests (Random/Spectrum Fatigue)

These tests simulate more realistic service conditions where stress levels vary randomly over time.

*   **Purpose:** To assess the fatigue life of components under complex loading histories that cannot be accurately represented by constant amplitude loading.
*   **Methodology:** Involves applying a sequence of stress cycles with varying amplitudes. This sequence can be derived from actual operational data (e.g., strain gauge measurements from a vehicle suspension).
*   **Challenges:** Analyzing and predicting fatigue life under variable amplitude loading is more complex. It often involves cycle counting methods and damage accumulation models (e.g., Miner's rule).
*   **Reference:** Discussions on spectrum fatigue and its analysis can be found in "Failure of Materials in Mechanical Design" by Jack A. Collins.

#### 2.3. High Cycle Fatigue (HCF) vs. Low Cycle Fatigue (LCF) Testing

This distinction is based on the number of cycles to failure and the stress/strain levels involved.

*   **High Cycle Fatigue (HCF):**
    *   Typically occurs at stress levels below the material's yield strength.
    *   Number of cycles to failure is generally greater than $10^4$ or $10^5$ cycles.
    *   Crack initiation is the dominant phase.
    *   **Testing:** Often conducted at relatively low stress amplitudes and high frequencies to accelerate testing.
*   **Low Cycle Fatigue (LCF):**
    *   Occurs at stress levels exceeding the material's yield strength, leading to significant plastic deformation in each cycle.
    *   Number of cycles to failure is typically less than $10^4$ or $10^5$ cycles.
    *   Crack propagation is a significant part of the fatigue life.
    *   **Testing:** Focuses on controlled strain amplitude rather than stress amplitude.
    *   **Applications:** High-temperature gas turbine engines, aerospace components, nuclear reactors.
    *   **Reference:** "Elements of Fracture Mechanics" by Prashant Kumar might discuss LCF within the context of cyclic plasticity and crack growth.

---

### 3. Key Parameters and Data Obtained from Fatigue Tests

Fatigue testing generates critical data used for design and analysis.

*   **Stress Amplitude ($\sigma_a$) / Stress Range ($\Delta\sigma$):** The magnitude of the cyclic stress.
    *   $\sigma_a = (\sigma_{max} - \sigma_{min}) / 2$
    *   $\Delta\sigma = \sigma_{max} - \sigma_{min}$
*   **Mean Stress ($\sigma_m$):** The average stress over a cycle.
    *   $\sigma_m = (\sigma_{max} + \sigma_{min}) / 2$
*   **Stress Ratio (R):** The ratio of minimum stress to maximum stress.
    *   $R = \sigma_{min} / \sigma_{max}$
    *   $R = -1$: Fully reversed stress (tension to compression)
    *   $R = 0$: Stress varies from 0 to maximum tension
    *   $R > 0$: Both stresses are tensile
    *   $R < 0$: One stress is tensile, the other is compressive
*   **Number of Cycles to Failure (N):** The total number of stress cycles applied until the specimen fractures.
*   **Strain Amplitude ($\epsilon_a$) / Strain Range ($\Delta\epsilon$):** For LCF testing, the controlled cyclic strain.
*   **Fatigue Life ($N_f$):** The number of cycles a component can withstand before failure.

#### 3.1. S-N Curves (Wöhler Curves)

These are the most fundamental graphical representations of fatigue data.

*   **Definition:** An S-N curve plots the stress amplitude (S) against the logarithm of the number of cycles to failure (N).
*   **Construction:** Typically generated from a series of fatigue tests on identical specimens, each tested at a different stress amplitude.
*   **Interpretation:**
    *   At high stress amplitudes, fatigue life is low.
    *   As stress amplitude decreases, fatigue life increases.
    *   For many materials, particularly ferrous alloys, the S-N curve eventually becomes horizontal at a certain stress level. This level is known as the **fatigue limit** or **endurance limit**.
    *   For non-ferrous alloys (e.g., aluminum, copper), the S-N curve may continue to decrease indefinitely, and the fatigue strength at a specific number of cycles (e.g., $10^8$ cycles) is reported instead of a fatigue limit.
*   **Important Point:** S-N curves are generated under specific test conditions (e.g., specimen geometry, surface finish, testing environment, stress ratio). Deviations from these conditions in actual service can significantly affect fatigue life.
*   **Reference:** This is a core concept discussed extensively in most fatigue-related literature, including "Engineering Materials 3– Materials Failure Analysis: Case Studies and Design Implications" and "Failure of Materials in Mechanical Design." It directly relates to **CO2 (K1)**.

**Example of S-N Curve Data:**
| Specimen | Stress Amplitude (MPa) | Cycles to Failure (N) |
| :------- | :--------------------- | :-------------------- |
| 1        | 400                    | $5 \times 10^4$       |
| 2        | 350                    | $1.2 \times 10^5$     |
| 3        | 300                    | $3 \times 10^5$       |
| 4        | 250                    | $1 \times 10^6$       |
| 5        | 200                    | $1 \times 10^7$       |
| 6        | 180                    | $> 1 \times 10^7$     |

**Plotting (conceptual):**
*   Y-axis: Stress Amplitude (log scale often used)
*   X-axis: Number of Cycles to Failure (log scale essential)

**Important Point to Remember:** The S-N curve is a statistical representation. A single specimen test does not define the curve. Multiple tests at each stress level are needed to establish a confidence interval.

#### 3.2. Stress-Life (S-N) vs. Strain-Life (ε-N) Curves

*   **S-N Curves:** Primarily used for HCF where stresses are below the yield strength, and plastic deformation is minimal.
*   **Strain-Life (ε-N) Curves:** Used for LCF where plastic deformation is significant. These curves plot strain amplitude ($\epsilon_a$) against the number of cycles to failure (N).
    *   **Components of Strain:** Total strain amplitude ($\epsilon_a$) is often decomposed into elastic strain amplitude ($\epsilon_{ae}$) and plastic strain amplitude ($\epsilon_{ap}$).
    *   **Coffin-Manson Relation:** Describes the relationship between plastic strain amplitude and fatigue life: $\epsilon_{ap} = \epsilon'_f (2N_f)^c$, where $\epsilon'_f$ is the fatigue ductility coefficient and $c$ is the fatigue strength exponent.
    *   **Reference:** Detailed discussions on strain-life approaches are likely found in "Failure of Materials in Mechanical Design" by Jack A. Collins.

#### 3.3. Fatigue Limit and Fatigue Strength

*   **Fatigue Limit (Endurance Limit):** The theoretical stress amplitude below which a material can withstand an infinite number of cycles without failure. Found primarily in ferrous metals.
*   **Fatigue Strength:** The stress amplitude at which a material fails after a specific number of cycles (e.g., $10^8$ cycles). Used for materials that do not exhibit a distinct fatigue limit.
*   **Fatigue Strength Reduction Factor ($K_f$):** Accounts for the effect of stress concentrations (e.g., holes, notches) on fatigue life. It is related to the theoretical stress concentration factor ($K_t$) by the fatigue notch sensitivity ($q$): $K_f = 1 + q(K_t - 1)$.
    *   **Fatigue Notch Sensitivity (q):** A material property indicating how sensitive it is to notches. High $q$ means high sensitivity. Generally, softer, more ductile materials are less notch-sensitive ($q$ closer to 0), while harder, brittle materials are more notch-sensitive ($q$ closer to 1).
    *   **Reference:** Notch effects are a critical aspect of fatigue design and are covered in "Failure of Materials in Mechanical Design."

#### 3.4. S-N-P Curves (Stress-Life-Probability Curves)

*   **Purpose:** To incorporate the statistical variability inherent in fatigue life.
*   **Definition:** These are a series of S-N curves, each representing a different probability of survival (P). For example, one curve might show the stress for 90% survival, another for 50% survival, and so on.
*   **Construction:** Requires testing a statistically significant number of specimens at each stress level to determine the distribution of fatigue lives.
*   **Importance:** Crucial for designs where failure has severe consequences, allowing engineers to design for a high probability of survival.
*   **Alignment with Course Outcomes:** Directly supports **CO2 (K1)** by providing a more complete picture of fatigue behavior.

---

### 4. Factors Influencing Fatigue Performance and Test Results

Numerous factors can affect the fatigue life of a material and the interpretation of fatigue test data.

*   **Material Properties:**
    *   **Tensile Strength:** Higher strength generally correlates with higher fatigue strength, but not always linearly.
    *   **Hardness:** Often a good indicator of fatigue strength.
    *   **Microstructure:** Grain size, presence of inclusions, and phases can significantly influence crack initiation and propagation.
    *   **Surface Finish:** Surface defects (scratches, pits) act as stress concentrators and initiation sites for fatigue cracks. Polished surfaces exhibit higher fatigue life than rough surfaces.
    *   **Surface Treatments:** Shot peening, case hardening, or nitriding can introduce compressive residual stresses on the surface, significantly improving fatigue life.
*   **Stress Parameters:**
    *   **Mean Stress:** Tensile mean stress generally reduces fatigue life, while compressive mean stress increases it.
    *   **Stress Amplitude/Range:** Higher amplitudes lead to shorter lives.
    *   **Stress Concentration:** Geometric discontinuities (notches, holes, fillets) increase local stress, reducing fatigue life.
*   **Environmental Factors:**
    *   **Temperature:** High temperatures can lead to creep-fatigue interactions, while low temperatures can increase brittleness.
    *   **Corrosion:** Corrosive environments can accelerate fatigue crack initiation and growth (corrosion fatigue), dramatically reducing life. This relates to **CO4 (K2)**.
    *   **Surface Contamination:**
*   **Loading History:**
    *   **Variable Amplitude Loading:** As discussed earlier, this significantly complicates fatigue life prediction.
*   **Specimen Geometry and Size:**
    *   Larger specimens or components may have different fatigue behaviors due to variations in material properties, stress gradients, and the likelihood of encountering critical flaws.
    *   **Reference:** "Failure Analysis and Prevention," ASM Handbook, Vol. 11, likely contains detailed sections on these influencing factors and best practices for testing.

---

### 5. Fatigue Testing Procedures and Standards

Standardized procedures are crucial for obtaining reliable and comparable fatigue data.

*   **ASTM Standards:** Organizations like ASTM (American Society for Testing and Materials) provide detailed standards for conducting various fatigue tests (e.g., ASTM E466 for constant amplitude axial fatigue, ASTM E606 for strain-controlled fatigue).
*   **Test Setup and Calibration:** Ensuring testing machines are properly calibrated and grips are not introducing unintended stresses is vital.
*   **Specimen Preparation:** Surface finish, dimensions, and alignment of specimens must be precisely controlled.
*   **Data Acquisition and Analysis:** Recording stress, strain, and cycle counts accurately. Statistical analysis of fatigue data is essential.

---

### 6. Failure Analysis Applications of Fatigue Testing

Fatigue testing plays a vital role in understanding why components fail in service.

*   **Simulating Failure Mechanisms:** Fatigue tests can replicate the loading conditions that caused a failure, allowing engineers to observe similar crack initiation and propagation patterns.
*   **Determining Fatigue Limit/Strength of Failed Material:** If a component fails due to fatigue, testing samples of the material used can help determine its inherent fatigue properties and compare them to design specifications.
*   **Investigating the Role of Defects:** Fatigue tests can be conducted on specimens with controlled defects (e.g., surface cracks, internal flaws) to understand their impact on fatigue life and to validate fracture mechanics models. This links to **CO3 (K3)**.
*   **Root Cause Analysis:** By comparing the fatigue behavior of a failed component with that of new material, engineers can pinpoint whether the failure was due to an inherent material deficiency, overstressing, or design flaw.
*   **Reference:** "Engineering Materials 3– Materials Failure Analysis: Case Studies and Design Implications" by Jones D. R. H. and "Failure Analysis and Prevention," ASM Handbook, Vol. 11 are invaluable for understanding these applications.

---

### 7. Practice Questions and Exercises

**Question 1 (CO2 - K1):**
What is the difference between a fatigue limit and fatigue strength? For which type of material is the term "fatigue limit" typically used, and why?

**Answer 1:**
The **fatigue limit (or endurance limit)** is the theoretical stress amplitude below which a material can withstand an infinite number of cycles without failure. It is typically used for ferrous metals (like steels). The **fatigue strength** is the stress amplitude at which a material fails after a specific, finite number of cycles (e.g., $10^8$ cycles). For non-ferrous metals (like aluminum alloys), the stress-life curve continues to decrease, so a fatigue limit isn't well-defined, and fatigue strength at a specified life is used instead.

**Question 2 (CO1 - K2, CO2 - K1):**
Describe the key parameters measured during a constant amplitude axial fatigue test. How are these parameters used to construct an S-N curve?

**Answer 2:**
Key parameters measured are:
*   **Stress Amplitude ($\sigma_a$):** The magnitude of the cyclic stress.
*   **Mean Stress ($\sigma_m$):** The average stress in the cycle.
*   **Stress Ratio (R):** The ratio $\sigma_{min} / \sigma_{max}$.
*   **Number of Cycles to Failure (N):** The total cycles endured before fracture.

To construct an S-N curve, multiple specimens are tested at different stress amplitudes ($\sigma_a$). For each test, the corresponding number of cycles to failure (N) is recorded. The data points $(\sigma_a, N)$ are then plotted on a graph with stress amplitude on the y-axis and the number of cycles to failure on the x-axis, typically on logarithmic scales.

**Question 3 (CO3 - K3, CO2 - K1):**
A component is designed to operate under a fully reversed axial stress of 200 MPa. A fatigue test on a specimen of the same material under the same stress ratio ($R=-1$) yielded the following data:
*   Test 1: $\sigma_a = 250$ MPa, $N = 1 \times 10^5$ cycles
*   Test 2: $\sigma_a = 200$ MPa, $N = 5 \times 10^5$ cycles
*   Test 3: $\sigma_a = 150$ MPa, $N = 2 \times 10^6$ cycles

Assuming a linear relationship on a log-log scale for stress amplitude vs. cycles ($log(\sigma_a) = m \cdot log(N) + c$), estimate the fatigue life of the component.

**Answer 3:**
We can use two points to find the slope ($m$) and intercept ($c$) of the line $log(\sigma_a) = m \cdot log(N) + c$.
Let's use Test 2 and Test 3:
$log(\sigma_a)_2 = 2.398$, $log(N)_2 = 5.699$
$log(\sigma_a)_3 = 2.176$, $log(N)_3 = 6.301$

Slope $m = \frac{log(\sigma_a)_3 - log(\sigma_a)_2}{log(N)_3 - log(N)_2} = \frac{2.176 - 2.398}{6.301 - 5.699} = \frac{-0.222}{0.602} \approx -0.369$

Now, find the intercept $c$ using Test 2:
$log(\sigma_a)_2 = m \cdot log(N)_2 + c$
$2.398 = (-0.369) \cdot (5.699) + c$
$2.398 = -2.103 + c$
$c = 4.501$

So, the relationship is $log(\sigma_a) = -0.369 \cdot log(N) + 4.501$.

Now, for the component operating at $\sigma_a = 200$ MPa, we need to find N:
$log(200) = -0.369 \cdot log(N) + 4.501$
$2.301 = -0.369 \cdot log(N) + 4.501$
$0.369 \cdot log(N) = 4.501 - 2.301 = 2.200$
$log(N) = \frac{2.200}{0.369} \approx 5.962$

$N = 10^{5.962} \approx 916,000$ cycles.

*Important Note for Question 3:* This assumes a simplified linear relationship on the log-log plot and uses limited data. In reality, more data points and statistical analysis are required. However, this demonstrates the principle of life prediction from S-N data.

**Question 4 (CO4 - K2):**
Explain how shot peening can improve the fatigue life of a component.

**Answer 4:**
Shot peening is a surface treatment process where small, hard spherical media (shot) are propelled at high velocity onto the surface of a metal component. This impact causes localized plastic deformation of the surface layer. This plastic deformation induces **compressive residual stresses** in the surface and near-surface regions of the material. Fatigue cracks typically initiate at the surface and propagate under tensile stress. The presence of compressive residual stresses counteracts applied tensile stresses at the surface, making it more difficult for fatigue cracks to initiate and grow, thereby significantly improving the fatigue life of the component.

---

### 8. Important Points to Remember

*   **Fatigue is a Progressive Damage Process:** It involves initiation, propagation, and final fracture.
*   **S-N Curves are Essential Tools:** They provide a graphical representation of fatigue behavior under constant amplitude loading.
*   **Statistical Nature of Fatigue:** Fatigue life is inherently variable. S-N-P curves are used to account for this variability.
*   **Surface Condition is Critical:** Surface finish, defects, and surface treatments have a profound impact on fatigue life.
*   **Mean Stress Matters:** Tensile mean stress reduces fatigue life; compressive mean stress increases it.
*   **Stress Concentrations:** Geometric discontinuities significantly reduce fatigue life.
*   **Environmental Effects:** Corrosion and temperature can drastically alter fatigue performance.
*   **Real-world loading is often variable amplitude:** Simulating this accurately is crucial for realistic life predictions.

---

This comprehensive set of notes covers the fundamental aspects of fatigue testing, its methodologies, data interpretation, influencing factors, and its applications in failure analysis and design. The provided questions and answers help reinforce the learning outcomes and knowledge levels discussed. Remember to consult the recommended textbooks for deeper insights and specific examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
