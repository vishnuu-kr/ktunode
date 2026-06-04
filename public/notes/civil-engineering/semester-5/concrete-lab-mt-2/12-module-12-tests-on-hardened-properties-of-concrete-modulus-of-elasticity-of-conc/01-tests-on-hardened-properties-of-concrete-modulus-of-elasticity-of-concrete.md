---
title: "Tests on hardened properties of concrete: Modulus of elasticity of concrete"
subject: "CONCRETE LAB (MT-2)"
module: "Module 12: Tests on hardened properties of concrete: Modulus of elasticity of concrete"
branch: "Civil Engineering"
semester: 5
topicId: "689f15ce56b5e963ba811054"
status: "completed"
scrapedAt: "2026-05-20T18:47:46.907Z"
---
# CONCRETE LAB (MT-2): Module 12 - Tests on Hardened Properties of Concrete: Modulus of Elasticity of Concrete

## 1. Introduction to Modulus of Elasticity of Concrete

The Modulus of Elasticity (MOE) of concrete, also known as the Young's Modulus, is a fundamental material property that describes its stiffness or resistance to deformation under tensile or compressive stress. It is a crucial parameter in structural design, as it influences how a concrete structure will behave under load.

### Key Concepts & Definitions

*   **Stress:** Force per unit area.
    *   $\text{Stress} (\sigma) = \frac{\text{Force} (P)}{\text{Area} (A)}$
*   **Strain:** Deformation per unit length.
    *   $\text{Strain} (\epsilon) = \frac{\text{Change in Length} (\Delta L)}{\text{Original Length} (L_0)}$
*   **Modulus of Elasticity (E):** The ratio of stress to strain in the elastic region of the stress-strain curve. This represents the slope of the initial linear portion of the stress-strain diagram.
    *   $E = \frac{\text{Stress} (\sigma)}{\text{Strain} (\epsilon)}$

### Importance of Modulus of Elasticity

*   **Structural Design:** Used to calculate deflections and deformations of structural elements like beams, columns, and slabs.
*   **Serviceability Limit States:** Essential for ensuring that a structure performs adequately under service loads, preventing excessive cracking or discomfort due to excessive deformation.
*   **Dynamic Analysis:** Influences the natural frequencies and vibration characteristics of concrete structures.
*   **Durability:** Indirectly related to cracking, which can impact durability by allowing ingress of aggressive substances.

## 2. Factors Affecting Modulus of Elasticity of Concrete

The MOE of concrete is not a constant value and is influenced by several factors:

*   **Compressive Strength of Concrete ($f_c'$):** Generally, as the compressive strength of concrete increases, its MOE also increases. Stronger concrete is typically stiffer.
*   **Aggregate Properties:**
    *   **Type of Aggregate:** The MOE of the aggregate itself plays a significant role. Stiffer aggregates (e.g., granite, basalt) lead to higher MOE of concrete compared to softer aggregates (e.g., limestone, sandstone).
    *   **Aggregate Content:** A higher proportion of aggregate generally increases the MOE, provided the aggregate is stiffer than the cement paste.
    *   **Aggregate Shape and Texture:** Well-graded, angular aggregates can contribute to higher MOE due to better interlocking.
*   **Cement Paste Properties:** The stiffness of the cement paste (influenced by water-cement ratio and degree of hydration) affects the overall MOE.
*   **Age of Concrete:** The MOE increases with age as hydration continues and the cement paste gains strength.
*   **Moisture Content:** The MOE can be slightly affected by moisture content, with drier concrete generally exhibiting a slightly higher MOE.
*   **Type of Test:** The MOE measured in compression is typically higher than that measured in tension (Modulus of Rupture).

## 3. Types of Modulus of Elasticity

There are two primary types of Modulus of Elasticity relevant to concrete:

### 3.1. Static Modulus of Elasticity

This is the MOE determined from a static load test where the load is applied gradually.

*   **Tangent Modulus of Elasticity ($E_c$):** The slope of the stress-strain curve at a specific point (usually at the origin or a specific stress level).
*   **Secant Modulus of Elasticity ($E_{c,sec}$):** The slope of the secant line drawn from the origin to a specific point on the stress-strain curve. This is commonly used in design codes.

### 3.2. Dynamic Modulus of Elasticity

This is the MOE determined from dynamic or vibration tests. It is generally higher than the static MOE.

*   **Methods:**
    *   **Ultrasonic Pulse Velocity (UPV) Method:** Measures the time taken for an ultrasonic pulse to travel through the concrete specimen.
    *   **Resonant Frequency Method:** Determines the natural frequency of vibration of a concrete specimen.

### **Important Point to Remember:** Dynamic MOE is usually higher than Static MOE because the rapid loading in dynamic tests does not allow for the same time-dependent deformations (e.g., creep) that occur under static loading.

## 4. Testing for Static Modulus of Elasticity

The most common method for determining the static MOE of concrete is through a **compression test** on cylindrical or prism specimens.

### 4.1. Relevant Standards

*   **ASTM C469:** Standard Test Method for Mechanical Properties of Mortar and Concrete under Compressive Loads.
*   **IS 516:** Methods for Tests for Strength of Concrete (Indian Standard).

### 4.2. Test Procedure (Generalized)

1.  **Specimen Preparation:**
    *   Cylindrical specimens (typically 150mm diameter x 300mm height) or prism specimens are used.
    *   Specimens should be cured for at least 28 days (or as specified) to achieve the desired strength.
    *   The ends of the specimens should be capped or ground to ensure a flat and parallel surface for uniform load application.

2.  **Instrumentation:**
    *   **Compressometer:** A device used to measure the axial deformation of the specimen. It typically consists of a frame that clamps onto the specimen and has dial gauges or LVDTs (Linear Variable Differential Transformers) to measure strain.
    *   **Strain Gauges:** Can also be directly attached to the surface of the specimen to measure strain.

3.  **Loading:**
    *   The specimen is placed in a universal testing machine (UTM).
    *   A compressive load is applied gradually and at a controlled rate.
    *   The load is increased incrementally, and the corresponding deformations are recorded.
    *   The load is typically applied up to approximately 40% of the expected ultimate compressive strength of the concrete.

4.  **Data Recording:**
    *   Simultaneously record the applied load and the corresponding deformation readings from the compressometer or strain gauges.

5.  **Calculation:**
    *   **Calculate Stress:** Divide the applied load by the cross-sectional area of the specimen.
    *   **Calculate Strain:** Determine the change in length per unit original length. The original length is usually taken as the gauge length of the compressometer.
    *   **Plot Stress-Strain Curve:** Plot the recorded stress values against the corresponding strain values.
    *   **Determine MOE:**
        *   **Secant Modulus:** Draw a secant line from the origin of the stress-strain curve to a specific stress point (often 40% of the ultimate strength or a stress level defined by the standard). The slope of this line is the Secant Modulus of Elasticity.
        *   **Tangent Modulus:** Determine the slope of the initial linear portion of the stress-strain curve.

### **Example Calculation:**

Suppose you have a cylindrical specimen of 150mm diameter and a compressometer with a gauge length of 150mm.

| Load (kN) | Deformation (mm) | Stress (MPa) = Load / (π * (0.075)^2) | Strain = Deformation / 150mm |
| :-------- | :--------------- | :------------------------------------ | :--------------------------- |
| 50        | 0.025            | 11.32                                 | 0.000167                     |
| 100       | 0.050            | 22.64                                 | 0.000333                     |
| 150       | 0.075            | 33.96                                 | 0.000500                     |
| 200       | 0.100            | 45.28                                 | 0.000667                     |

If we consider the point at 150 kN load (stress = 33.96 MPa, strain = 0.000500), the Secant Modulus of Elasticity at this point would be:

$E_c = \frac{33.96 \text{ MPa}}{0.000500} = 67,920 \text{ MPa} = 67.92 \text{ GPa}$

**Important Point to Remember:** The initial portion of the stress-strain curve for concrete is not perfectly linear. Therefore, specifying the stress level at which the MOE is determined is crucial for consistency.

## 5. Testing for Dynamic Modulus of Elasticity

Dynamic methods are often preferred in laboratory settings for their speed and non-destructive nature.

### 5.1. Ultrasonic Pulse Velocity (UPV) Method

This method measures the speed of ultrasonic sound pulses through the concrete. The pulse velocity is related to the MOE.

*   **Principle:** The velocity of a wave propagating through a material is dependent on its elastic properties and density.
*   **Formula (approximate):** $E = \rho v^2 \frac{(1 + \nu)(1 - 2\nu)}{(1 - \nu)}$ where:
    *   $E$ = Dynamic Modulus of Elasticity
    *   $\rho$ = Density of concrete
    *   $v$ = Pulse velocity
    *   $\nu$ = Poisson's Ratio (often assumed to be around 0.2 for concrete)

*   **Test Setup:**
    *   **Transmitter Transducer:** Emits ultrasonic pulses.
    *   **Receiver Transducer:** Detects the arriving pulses.
    *   **Pulse Generator/Timer:** Generates the pulse and measures the transit time.
    *   **Specimen:** The concrete element being tested.

*   **Procedure:**
    1.  Measure the distance ($L$) between the transducers on the concrete specimen.
    2.  Apply a coupling agent (e.g., grease, gel) to ensure good contact.
    3.  Initiate the pulse from the transmitter and measure the time ($t$) taken for the pulse to reach the receiver.
    4.  Calculate pulse velocity: $v = L / t$.
    5.  Estimate density and Poisson's ratio.
    6.  Calculate MOE using the formula.

### 5.2. Resonant Frequency Method

This method involves determining the natural frequency of vibration of a concrete specimen.

*   **Principle:** The natural frequency of vibration of a body is directly related to its stiffness (MOE) and inversely related to its mass and dimensions.
*   **Test Setup:**
    *   **Specimen:** A concrete prism or cylinder.
    *   **Exciter:** A device (e.g., a small speaker or electromagnetic exciter) to induce vibration.
    *   **Detector:** A device (e.g., an accelerometer or microphone) to detect the vibrations.
    *   **Frequency Generator/Analyzer:** To vary the excitation frequency and identify the resonant frequencies.

*   **Procedure:**
    1.  Suspend the concrete specimen freely.
    2.  Apply a varying frequency excitation.
    3.  The specimen will resonate at its natural frequencies.
    4.  Identify the fundamental resonant frequencies (e.g., longitudinal, transverse, torsional).
    5.  Calculate the MOE using specific formulas based on the type of vibration and specimen dimensions. For example, for longitudinal vibration of a bar:
        $E = 4 \times L \times f_f^2 \times \frac{m}{A}$ where:
        *   $L$ = Length of specimen
        *   $f_f$ = Fundamental longitudinal resonant frequency
        *   $m$ = Mass of specimen
        *   $A$ = Cross-sectional area

### **Important Point to Remember:** UPV is commonly used for in-situ assessment of concrete quality and MOE, while resonant frequency methods are more controlled laboratory techniques.

## 6. Typical Values of Modulus of Elasticity

The MOE of concrete can vary significantly. However, some typical ranges and empirical relationships exist.

*   **Empirical Relationships (for normal-weight concrete):**
    *   **ACI (American Concrete Institute) Code:** $E_c = 4500 \sqrt{f_c'}$ (MPa), where $f_c'$ is the characteristic compressive strength in MPa.
    *   **IS Code (IS 456):** $E_c = 5000 \sqrt{f_c'}$ (MPa) (for characteristic strength of 20 MPa or more).
    *   **Eurocode 2:** $E_c = E_{c0} \left( \frac{f_{ck}}{f_{ck,0}} \right)^{0.5}$, where $E_{c0} = 22$ GPa, $f_{ck,0} = 10$ MPa.

*   **Typical Range:**
    *   **Lightweight Concrete:** 10 - 25 GPa
    *   **Normal Weight Concrete:** 25 - 40 GPa
    *   **High-Strength Concrete:** 40 - 50 GPa

**Note:** These are approximate values. Actual MOE should be determined from tests for critical applications.

## 7. Practice Questions & Exercises

**Question 1:** Define the Modulus of Elasticity of concrete. What is its significance in structural design?

**Answer 1:** The Modulus of Elasticity (MOE) of concrete, also known as Young's Modulus, is a measure of its stiffness or its resistance to elastic deformation under stress. It is defined as the ratio of stress to strain in the elastic region of the stress-strain curve ($E = \sigma / \epsilon$). Its significance in structural design lies in its use for calculating deflections, deformations, and serviceability limits of concrete structures, ensuring they perform adequately under service loads.

**Question 2:** List at least four factors that influence the Modulus of Elasticity of concrete.

**Answer 2:**
1.  Compressive strength of concrete ($f_c'$).
2.  Type, content, and properties of aggregates.
3.  Age of concrete.
4.  Moisture content.
5.  Water-cement ratio.

**Question 3:** Explain the basic principle behind the Ultrasonic Pulse Velocity (UPV) method for determining the dynamic modulus of elasticity.

**Answer 3:** The UPV method measures the time taken for an ultrasonic pulse to travel through a concrete specimen. Since the velocity of a wave in a material is dependent on its elastic properties and density, the pulse velocity ($v$) can be used to estimate the dynamic MOE. The formula $E = \rho v^2 \times \text{factor}$ shows this relationship, where $\rho$ is density and the factor accounts for Poisson's ratio.

**Question 4:** A cylindrical concrete specimen of 150mm diameter and 300mm height is tested for its static modulus of elasticity. A load of 150 kN causes a deformation of 0.075 mm over a gauge length of 150 mm. Calculate the Secant Modulus of Elasticity at this load. (Assume the specimen is tested until failure and the stress corresponding to 150 kN is below the proportional limit).

**Solution 4:**
*   Area of specimen ($A$) = $\pi \times (0.150 \text{ m} / 2)^2 = \pi \times (0.075)^2 \text{ m}^2 = 0.01767 \text{ m}^2$
*   Load ($P$) = 150 kN = 150,000 N
*   Stress ($\sigma$) = $P / A = 150,000 \text{ N} / 0.01767 \text{ m}^2 = 8,489,190 \text{ N/m}^2 = 8.489 \text{ MPa}$
*   Deformation ($\Delta L$) = 0.075 mm
*   Gauge Length ($L_0$) = 150 mm
*   Strain ($\epsilon$) = $\Delta L / L_0 = 0.075 \text{ mm} / 150 \text{ mm} = 0.0005$

Secant Modulus of Elasticity ($E_c$) = $\sigma / \epsilon = 8.489 \text{ MPa} / 0.0005 = 16,978 \text{ MPa} \approx 17.0 \text{ GPa}$

*(Note: The stress calculation above used meters for area, leading to MPa. If we use mm for calculations throughout, the stress would be in N/mm² which is MPa.)*

Let's recalculate with mm for consistency in units often used in these calculations:
*   Area ($A$) = $\pi \times (75 \text{ mm})^2 = 17671.46 \text{ mm}^2$
*   Load ($P$) = 150 kN = 150,000 N
*   Stress ($\sigma$) = $P / A = 150,000 \text{ N} / 17671.46 \text{ mm}^2 = 8.489 \text{ N/mm}^2 = 8.489 \text{ MPa}$
*   Deformation ($\Delta L$) = 0.075 mm
*   Gauge Length ($L_0$) = 150 mm
*   Strain ($\epsilon$) = $\Delta L / L_0 = 0.075 \text{ mm} / 150 \text{ mm} = 0.0005$

Secant Modulus of Elasticity ($E_c$) = $\sigma / \epsilon = 8.489 \text{ MPa} / 0.0005 = 16,978 \text{ MPa} \approx 17.0 \text{ GPa}$

**Question 5:** What is the relationship between Static Modulus of Elasticity and Dynamic Modulus of Elasticity? Which one is generally higher and why?

**Answer 5:** The Dynamic Modulus of Elasticity is generally higher than the Static Modulus of Elasticity. This is because dynamic tests involve rapid loading, which minimizes the effects of time-dependent deformations like creep. Static tests, with their slower application of load, allow for these time-dependent strains to occur, resulting in a seemingly lower stiffness.

## 8. Key Points to Remember

*   **MOE measures stiffness:** Higher MOE means less deformation under the same stress.
*   **Strength-MOE relationship:** Generally, stronger concrete has a higher MOE.
*   **Aggregate is key:** The MOE of aggregates significantly influences the MOE of concrete.
*   **Static vs. Dynamic:** Dynamic MOE is higher than Static MOE due to time-dependent effects (creep).
*   **Secant Modulus:** The most commonly used MOE in design, determined from the slope of the stress-strain curve.
*   **Empirical formulas:** Useful for estimation but actual testing is preferred for critical applications.
*   **Standardized tests:** Follow ASTM C469 or equivalent standards for accurate results.
