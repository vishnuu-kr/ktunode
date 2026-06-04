---
title: "Estimation of modulus of rigidity of steel by performing tension and compression tests on spring specimens."
subject: "MATERIALS TESTING LAB"
module: "Module 9: Estimation of modulus of rigidity of steel by performing tension and compression tests on spring specimens."
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810d11"
status: "completed"
scrapedAt: "2026-05-20T18:45:45.446Z"
---
# MATERIALS TESTING LAB: Module 9 - Estimation of Modulus of Rigidity of Steel

## 1. Introduction to Modulus of Rigidity (G)

*   **Definition:** The Modulus of Rigidity (also known as shear modulus, symbol **G**) is a material property that describes its resistance to shearing deformation. It quantifies how much a material will deform under a given shear stress.
*   **Formula:**
    $G = \frac{\text{Shear Stress}}{\text{Shear Strain}}$
*   **Units:** Typically expressed in Pascals (Pa) or Gigapascals (GPa), or psi in imperial units.
*   **Importance:** Understanding the modulus of rigidity is crucial for designing components that experience torsional or shear loads, such as shafts, springs, and bolts.

## 2. Key Concepts and Definitions

### 2.1 Shear Stress ($\tau$)

*   **Definition:** Shear stress is the stress component parallel to a material's cross-sectional area. It arises from forces acting parallel to the surface.
*   **Formula:**
    $\tau = \frac{\text{Shear Force (F)}}{\text{Area (A)}}$
*   **Example:** Imagine trying to slide one page of a book over another. The force you apply parallel to the pages creates shear stress.

### 2.2 Shear Strain ($\gamma$)

*   **Definition:** Shear strain is the measure of the deformation of a material under shear stress. It is defined as the change in angle between two initially perpendicular lines within the material.
*   **Formula:**
    $\gamma = \tan(\theta) \approx \theta$ (for small deformations, where $\theta$ is in radians)
    Where $\theta$ is the angle of shear.
*   **Example:** Continuing the book analogy, the slight tilting or angular change of the book's pages from their original perpendicular orientation represents shear strain.

### 2.3 Spring as a Specimen

*   **Springs:** Helical springs are commonly used to demonstrate and measure the modulus of rigidity because their deformation is directly related to the applied torque, which induces shear stress within the spring wire.
*   **Types of Springs:**
    *   **Helical Compression Springs:** Designed to be compressed.
    *   **Helical Tension Springs:** Designed to be stretched.
    *   **Torsion Springs:** Designed to resist a twisting motion. (While the topic focuses on tension/compression tests, understanding torsion springs is relevant to rigidity).
*   **Why Springs Work:** When a helical spring is subjected to an axial load (tension or compression), the wire of the spring experiences torsion (twisting). This torsional stress is directly related to the applied axial load and the geometry of the spring.

### 2.4 Relationship between Axial Load and Torsional Stress in a Helical Spring

*   **Torque (T) induced in the spring wire:**
    $T = F \times R$
    Where:
    *   $F$ is the applied axial load (tension or compression).
    *   $R$ is the mean radius of the spring coil.
*   **Shear Stress ($\tau$) in the spring wire:** This torque induces shear stress in the wire. The formula for shear stress in a solid circular wire under torsion is:
    $\tau = \frac{16T}{\pi d^3}$
    Where:
    *   $d$ is the diameter of the spring wire.
    *   $\pi d^3 / 16$ is the polar section modulus.

### 2.5 Relationship between Axial Deformation and Torsional Angle in a Helical Spring

*   **Torsional Angle ($\phi$) of the wire:** For a helical spring, the total angle of twist ($\phi$) of the wire over its length ($L$) due to torque ($T$) is given by:
    $\phi = \frac{TL}{GI_p}$
    Where:
    *   $L$ is the total length of the spring wire.
    *   $G$ is the modulus of rigidity.
    *   $I_p$ is the polar moment of inertia of the wire's cross-section. For a solid circular wire of diameter $d$: $I_p = \frac{\pi d^4}{32}$.
*   **Axial Deformation ($\delta$) of the spring:** The axial deformation of the spring is directly related to the total angle of twist of the wire. A simplified formula relating axial deformation to torsional angle is:
    $\delta = R \phi$ (This assumes small pitch angles)
    Substituting the expressions for $T$ and $\phi$:
    $\delta = R \times \frac{(FR)L}{G (\frac{\pi d^4}{32})}$
    $\delta = \frac{32 F R^2 L}{G \pi d^4}$

*   **Spring Stiffness (k):** The stiffness of the spring is the ratio of the applied load to the resulting deflection:
    $k = \frac{F}{\delta}$
    From the deformation equation:
    $k = \frac{G \pi d^4}{32 R^2 L}$

### 2.6 Derivation of Modulus of Rigidity (G) from Spring Tests

From the stiffness formula ($k = \frac{F}{\delta}$), we can rearrange to solve for $G$:

$G = \frac{k \times 32 R^2 L}{\pi d^4}$

**Therefore, to estimate the modulus of rigidity ($G$), we need to:**

1.  **Determine the spring stiffness ($k$)**: This is done by applying known axial loads ($F$) and measuring the corresponding axial deflections ($\delta$).
2.  **Measure the spring geometry**:
    *   Mean coil radius ($R$).
    *   Length of the spring wire ($L$).
    *   Diameter of the spring wire ($d$).

## 3. Experimental Procedure (Tension and Compression Tests on Spring Specimens)

### 3.1 Apparatus Required

*   **Spring Specimens:** Helical compression or tension springs made of steel.
*   **Universal Testing Machine (UTM) or Tensile Testing Machine:** Capable of applying controlled axial loads (tension or compression).
*   **Extensometer or Dial Gauge/Vernier Calipers:** To accurately measure axial deformation ($\delta$).
*   **Measuring Tools:** Vernier calipers or micrometer to measure wire diameter ($d$).
*   **Ruler or Measuring Tape:** To measure coil diameter and number of coils (for calculating $L$).
*   **Calipers:** To measure the outer diameter of the spring, from which the mean coil radius ($R$) can be calculated.

### 3.2 Steps for Conducting the Test

1.  **Measure Spring Geometry:**
    *   **Wire Diameter ($d$):** Use a vernier caliper or micrometer to measure the diameter of the spring wire at several points and take the average.
    *   **Outer Diameter of the Spring:** Measure the outer diameter of the spring at a few locations using calipers.
    *   **Number of Coils:** Count the total number of coils in the spring.
    *   **Length of Spring Wire ($L$):** Calculate the length of the wire using the formula: $L = \pi \times D_{mean} \times N$, where $D_{mean}$ is the mean coil diameter ($D_{outer} - d$) and $N$ is the number of coils. *Alternatively, if the spring is disassembled, the wire length can be measured directly.*
    *   **Mean Coil Radius ($R$):** Calculate $R = \frac{D_{mean}}{2} = \frac{(D_{outer} - d)}{2}$.

2.  **Set up the Test:**
    *   Mount the spring specimen in the UTM.
    *   For compression tests, ensure the spring is placed between flat, parallel platens.
    *   For tension tests, ensure the spring is attached to suitable grips at both ends.
    *   Attach the extensometer or set up the dial gauge to measure axial displacement.

3.  **Apply Loads and Record Data:**
    *   **Zero the measuring instrument.**
    *   **Apply a series of axial loads (F) incrementally**, ensuring that the elastic limit of the spring is not exceeded.
    *   For each applied load ($F$), **record the corresponding axial deformation ($\delta$)**.
    *   **Repeat the loading and unloading cycle** a few times to observe linearity and reversibility of deformation.
    *   *For tension tests, apply tension gradually. For compression tests, apply compression gradually.*

4.  **Data Analysis:**
    *   **Plot a Load vs. Deformation graph** (F vs. $\delta$). The graph should ideally be a straight line within the elastic limit, indicating a linear elastic behavior.
    *   **Determine the Spring Stiffness ($k$)**: Calculate the slope of the linear portion of the F- $\delta$ graph. $k = \frac{\Delta F}{\Delta \delta}$.
    *   **Calculate the Modulus of Rigidity ($G$)**: Using the determined spring stiffness ($k$) and the measured geometric parameters ($R$, $L$, $d$), calculate $G$ using the formula:
        $G = \frac{k \times 32 R^2 L}{\pi d^4}$

### 3.3 Example Calculation

**Given Data:**

*   Spring Wire Diameter ($d$) = 5 mm = 0.005 m
*   Outer Spring Diameter ($D_{outer}$) = 40 mm = 0.040 m
*   Number of Coils ($N$) = 10
*   Load ($F$) applied from 0 N to 500 N.
*   Measured Deflections ($\delta$) at different loads:
    *   F = 100 N, $\delta$ = 5 mm = 0.005 m
    *   F = 200 N, $\delta$ = 10 mm = 0.010 m
    *   F = 300 N, $\delta$ = 15 mm = 0.015 m
    *   F = 400 N, $\delta$ = 20 mm = 0.020 m
    *   F = 500 N, $\delta$ = 25 mm = 0.025 m

**Calculations:**

1.  **Mean Coil Diameter ($D_{mean}$):** $D_{mean} = D_{outer} - d = 40 \text{ mm} - 5 \text{ mm} = 35 \text{ mm} = 0.035 \text{ m}$
2.  **Mean Coil Radius ($R$):** $R = \frac{D_{mean}}{2} = \frac{0.035 \text{ m}}{2} = 0.0175 \text{ m}$
3.  **Length of Spring Wire ($L$):** $L = \pi \times D_{mean} \times N = \pi \times 0.035 \text{ m} \times 10 = 1.0996 \text{ m}$
4.  **Spring Stiffness ($k$):** From the data, $k = \frac{\Delta F}{\Delta \delta} = \frac{500 \text{ N}}{0.025 \text{ m}} = 20000 \text{ N/m}$
5.  **Modulus of Rigidity ($G$):**
    $G = \frac{k \times 32 R^2 L}{\pi d^4}$
    $G = \frac{(20000 \text{ N/m}) \times 32 \times (0.0175 \text{ m})^2 \times (1.0996 \text{ m})}{\pi \times (0.005 \text{ m})^4}$
    $G = \frac{20000 \times 32 \times 0.00030625 \times 1.0996}{\pi \times 0.0000000625}$
    $G = \frac{2131.44}{0.00000019635}$
    $G \approx 10855.3 \times 10^6 \text{ N/m}^2 = 108.55 \text{ GPa}$

**Note:** The accepted value for the modulus of rigidity of steel is around 75-80 GPa. The difference in the calculated value could be due to approximations in the spring formula (e.g., ignoring the pitch angle), experimental errors, or the specific alloy of steel used.

## 4. Learning Outcomes Addressed

*   **Understanding the concept of Modulus of Rigidity (G):** Covered in Section 1 and 2.
*   **Defining Shear Stress and Shear Strain:** Explained in Section 2.
*   **Relating the physical behavior of a spring under axial load to torsional stress and strain in its wire:** Detailed in Section 2.
*   **Understanding the experimental setup and procedure for tension and compression tests on spring specimens:** Outlined in Section 3.
*   **Performing the necessary calculations to estimate the Modulus of Rigidity (G) from the experimental data:** Demonstrated in Section 3.4.
*   **Interpreting the experimental results and comparing them with known values:** Briefly discussed in the example.

## 5. Practice Questions

**Question 1:**
Define the Modulus of Rigidity and state its formula in terms of shear stress and shear strain.

**Question 2:**
A helical spring has the following properties:
*   Wire diameter ($d$) = 4 mm
*   Mean coil diameter ($D_{mean}$) = 30 mm
*   Number of coils ($N$) = 15
When an axial load of 250 N is applied, the spring compresses by 12 mm. Calculate the spring stiffness ($k$) and the Modulus of Rigidity ($G$) for the spring material. (Assume $\pi \approx 3.14$)

**Question 3:**
What are the key geometric parameters of a helical spring that are needed to calculate the modulus of rigidity?

**Question 4:**
Explain the importance of plotting a load-deformation graph in this experiment.

**Question 5:**
If the calculated modulus of rigidity is significantly different from the accepted value for steel, what are some possible reasons for this discrepancy?

## 6. Answers to Practice Questions

**Answer 1:**
The Modulus of Rigidity ($G$) is a material property that describes its resistance to shearing deformation. It is defined as the ratio of shear stress ($\tau$) to shear strain ($\gamma$):
$G = \frac{\tau}{\gamma}$

**Answer 2:**
1.  **Calculate Spring Stiffness ($k$):**
    $k = \frac{\Delta F}{\Delta \delta} = \frac{250 \text{ N}}{12 \text{ mm}} = \frac{250 \text{ N}}{0.012 \text{ m}} = 20833.33 \text{ N/m}$

2.  **Calculate Geometric Parameters:**
    *   Wire diameter ($d$) = 4 mm = 0.004 m
    *   Mean coil radius ($R$) = $D_{mean}/2 = 30 \text{ mm}/2 = 15 \text{ mm} = 0.015 \text{ m}$
    *   Length of spring wire ($L$) = $\pi \times D_{mean} \times N = 3.14 \times 30 \text{ mm} \times 15 = 3.14 \times 0.030 \text{ m} \times 15 = 1.413 \text{ m}$

3.  **Calculate Modulus of Rigidity ($G$):**
    $G = \frac{k \times 32 R^2 L}{\pi d^4}$
    $G = \frac{(20833.33 \text{ N/m}) \times 32 \times (0.015 \text{ m})^2 \times (1.413 \text{ m})}{3.14 \times (0.004 \text{ m})^4}$
    $G = \frac{20833.33 \times 32 \times 0.000225 \times 1.413}{3.14 \times 0.0000000256}$
    $G = \frac{2130.0}{0.0000000804} \approx 26492537 \times 10^3 \text{ N/m}^2 \approx 26.49 \text{ GPa}$
    *Note: This value is lower than typical for steel, suggesting the spring might be made of a different material or the assumptions in the formula are being stressed.*

**Answer 3:**
The key geometric parameters are:
*   Wire diameter ($d$)
*   Mean coil radius ($R$)
*   Length of the spring wire ($L$)

**Answer 4:**
The load-deformation graph helps to:
*   **Verify the elastic behavior:** A linear relationship between load and deformation indicates that the spring is behaving elastically.
*   **Determine the spring stiffness ($k$) accurately:** The slope of the linear portion of the graph represents the spring stiffness.
*   **Identify the elastic limit:** The point where the graph deviates from linearity indicates the onset of plastic deformation.

**Answer 5:**
Possible reasons for discrepancy include:
*   **Experimental Errors:** Inaccurate measurements of geometric parameters (d, R, L) or deformation ($\delta$).
*   **Approximations in the Formula:** The derived formula for spring stiffness is an approximation and doesn't account for all factors (e.g., the pitch angle of the coils, stress concentration at the coil bends).
*   **Material Variability:** The actual modulus of rigidity of the specific steel alloy might differ from standard values.
*   **Manufacturing Defects:** Imperfections in the spring wire or manufacturing process.
*   **Overstressing:** If the spring was loaded beyond its elastic limit, the measurements would be affected.

## 7. Important Points to Remember

*   **Elastic Limit:** Ensure all tests are conducted within the elastic limit of the spring material to obtain meaningful results.
*   **Accuracy of Measurements:** Precise measurement of geometric parameters (especially wire diameter and mean radius) is critical for accurate calculation of $G$.
*   **Linearity:** The F-$\delta$ graph should be linear. Any deviation from linearity should be noted and considered in the analysis.
*   **Assumptions:** Be aware of the assumptions made in the formulas used for spring analysis. These formulas are often simplified.
*   **Steel Properties:** The modulus of rigidity for steel typically ranges from 75 GPa to 80 GPa. Compare your experimental results with this range.
*   **Tension vs. Compression:** While the formulas are similar, ensure the setup and data recording are appropriate for the type of test (tension or compression) being performed.

This comprehensive study note covers the theoretical background, practical procedure, data analysis, and essential considerations for estimating the modulus of rigidity of steel using spring specimens.
