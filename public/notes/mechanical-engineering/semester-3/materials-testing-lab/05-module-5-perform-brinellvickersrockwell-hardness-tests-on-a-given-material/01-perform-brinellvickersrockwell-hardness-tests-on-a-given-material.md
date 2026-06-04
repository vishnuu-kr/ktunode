---
title: "Perform Brinell/Vickers/Rockwell hardness tests on a given material"
subject: "MATERIALS TESTING LAB"
module: "Module 5: Perform Brinell/Vickers/Rockwell hardness tests on a given material"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462e78"
status: "completed"
scrapedAt: "2026-05-20T17:50:21.614Z"
---
# MATERIALS TESTING LAB: Module 5 - Hardness Testing (Brinell, Vickers, Rockwell)

## Introduction to Hardness Testing

Hardness is a measure of a material's resistance to localized plastic deformation, such as scratching, abrasion, or indentation. It's a crucial mechanical property that often correlates with other important properties like tensile strength, wear resistance, and machinability. In this module, we will explore three common indentation hardness testing methods: Brinell, Vickers, and Rockwell.

**Key Concept:** Hardness is an *intrinsic* property of a material, meaning it is generally independent of the specimen's size and shape, unlike tensile strength which is dependent on the cross-sectional area.

**Reference:** Callister's Materials Science and Engineering (10th Ed) discusses hardness as a fundamental mechanical property and its relationship to other properties like tensile strength (Chapter 6).

### Why Perform Hardness Tests?

*   **Correlation with Tensile Strength:** For many metals, there is a direct and predictable correlation between hardness and tensile strength. This allows for quick estimations of tensile strength without performing destructive tensile tests. (CO1, CO2)
*   **Quality Control:** Hardness testing is widely used in manufacturing for quality control to ensure materials meet specifications and to detect variations in heat treatment or processing. (CO4)
*   **Wear Resistance:** Hardness is a good indicator of a material's resistance to abrasive and adhesive wear. (CO1)
*   **Machinability:** Harder materials are generally more difficult to machine. (CO3)
*   **Process Monitoring:** Hardness testing can be used to monitor the effects of heat treatment processes like hardening and tempering. (CO2)

**Example:** A manufacturer of automotive gears needs to ensure consistent hardness across a batch of components to guarantee wear resistance. Hardness testing provides a rapid and reliable method for this quality check.

## Brinell Hardness Test

The Brinell hardness test (ASTM E10) is a common method, particularly for softer metals like aluminum alloys, copper alloys, and some steels.

### Principle of the Brinell Test

A hardened steel or carbide ball of a specific diameter is pressed into the surface of the test material with a standard load for a specified dwell time.

### Procedure

1.  **Specimen Preparation:** The surface of the specimen should be smooth, clean, and free from scale or oxide layers. A reasonably flat surface is required. (CO4)
2.  **Indenter:** A hardened steel or carbide ball of specified diameter ($D$), typically 10 mm, 5 mm, or 2.5 mm.
3.  **Load Application:** A standard load ($F$) is applied for a specific dwell time (usually 10-30 seconds). The load is applied gradually and smoothly.
4.  **Indentation Measurement:** After the load is removed, the diameter ($d$) of the resulting permanent indentation (spherical impression) is measured using a measuring microscope or a specialized optical device. The average of two perpendicular diameter measurements is used to account for slight irregularities.
5.  **Calculation:** Brinell Hardness Number (BHN) is calculated using the formula:

    $$ \text{BHN} = \frac{2F}{\pi D \left( D - \sqrt{D^2 - d^2} \right)} $$

    Where:
    *   $F$ = applied load (kgf or N)
    *   $D$ = diameter of the ball indenter (mm)
    *   $d$ = average diameter of the indentation (mm)

**Important Point:** The ratio of the ball diameter ($D$) to the indentation diameter ($d$) should ideally be between 0.2 and 0.6 for reliable results. If the indentation is too shallow ($d/D < 0.2$) or too deep ($d/D > 0.6$), the test may not be representative.

**Reference:** Kuhn & Medlin (Vol. 8, Chapter 4) provides a detailed explanation of the Brinell test, including the formula and factors affecting accuracy.

### Brinell Hardness Number (BHN) Units

The BHN is typically expressed in kgf/mm² or MPa. However, the unit is often omitted, and the number itself is used (e.g., 200 BHN).

### Advantages of Brinell Test

*   Relatively simple and inexpensive.
*   Good for testing bulk materials.
*   The large indentation can average out variations in the microstructure.

### Disadvantages of Brinell Test

*   Can leave a relatively large indentation, which may not be suitable for thin specimens or precision parts.
*   Not suitable for very hard materials as the ball can deform.
*   Requires precise measurement of the indentation diameter.

**Example:** A 10 mm steel ball is pressed into a steel specimen with a load of 3000 kgf for 15 seconds. The measured indentation diameter is 4.5 mm.
BHN = $2 \times 3000 / (\pi \times 10 \times (10 - \sqrt{10^2 - 4.5^2}))$
BHN = $6000 / (\pi \times 10 \times (10 - \sqrt{100 - 20.25}))$
BHN = $6000 / (\pi \times 10 \times (10 - \sqrt{79.75}))$
BHN = $6000 / (\pi \times 10 \times (10 - 8.93))$
BHN = $6000 / (\pi \times 10 \times 1.07)$
BHN = $6000 / 33.61$
BHN ≈ 178.5 kgf/mm²

## Vickers Hardness Test

The Vickers hardness test (ASTM E384) is a versatile method that can be used for a wide range of materials, from very soft to very hard, and for thin coatings.

### Principle of the Vickers Test

A precisely ground diamond pyramid indenter with a square base and an apex angle of 136° is pressed into the surface of the test material with a standard load for a specified dwell time.

### Procedure

1.  **Specimen Preparation:** The surface must be highly polished and free from any defects or surface layers. This is critical for accurate measurement. (CO4)
2.  **Indenter:** A square-based diamond pyramid with an angle of 136° between opposite faces.
3.  **Load Application:** Loads can range from very low (e.g., 10 gf for microhardness testing) to high (e.g., 120 kgf for macrohardness testing). The load is applied gradually and smoothly.
4.  **Indentation Measurement:** After the load is removed, the two diagonals ($d_1$ and $d_2$) of the resulting square indentation are measured using a measuring microscope. The average diagonal length $\bar{d} = (d_1 + d_2) / 2$ is used.
5.  **Calculation:** Vickers Hardness Number (HV) is calculated using the formula:

    $$ \text{HV} = 1.8544 \frac{F}{\bar{d}^2} $$

    Where:
    *   $F$ = applied load (kgf or N)
    *   $\bar{d}$ = average length of the diagonals of the indentation (mm)

**Important Point:** The factor 1.8544 arises from the geometry of the diamond pyramid and the units used. It's important to use consistent units for load and diagonal length.

**Reference:** Callister's (10th Ed) dedicates a section to hardness testing, including the Vickers method and its applications in microhardness testing (Chapter 6).

### Vickers Hardness Number (HV) Units

The HV number is also often expressed in kgf/mm² or MPa, but the unit is usually omitted. The load used is often indicated by a suffix (e.g., HV30 for a 30 kgf load).

### Advantages of Vickers Test

*   Suitable for a very wide range of hardness.
*   The indentation shape is consistent regardless of the load.
*   Can be used for thin specimens and surface coatings (microhardness testing).
*   The formula is simpler than Brinell.

### Disadvantages of Vickers Test

*   Requires a highly polished surface, making specimen preparation more demanding.
*   Measuring the diagonals accurately can be challenging, especially for small indentations.

**Example:** A 50 kgf load is applied to a polished steel specimen, resulting in an indentation with diagonals measuring 0.35 mm and 0.37 mm.
Average diagonal $\bar{d}$ = (0.35 + 0.37) / 2 = 0.36 mm
HV = $1.8544 \times 50 / (0.36^2)$
HV = $1.8544 \times 50 / 0.1296$
HV = $92.72 / 0.1296$
HV ≈ 715.5 kgf/mm²

**Microhardness Testing:** When very low loads (typically < 200 gf) are used with the Vickers indenter, it's referred to as microhardness testing. This is useful for testing the hardness of individual phases in a multi-phase material or thin surface layers. (CO2, CO4)

## Rockwell Hardness Test

The Rockwell hardness test (ASTM E18) is the most widely used hardness test due to its speed, simplicity, and the fact that it doesn't require optical measurement of the indentation.

### Principle of the Rockwell Test

The Rockwell test measures the depth of indentation produced by a standard indenter under a specific load.

### Procedure

1.  **Specimen Preparation:** The surface should be clean and smooth, but not necessarily polished to the same degree as for Vickers. A reasonably flat surface is required. (CO4)
2.  **Indenter:** Either a hardened steel ball of various diameters (e.g., 1/16", 1/8", 1/4", 1/2") or a diamond cone (Brale indenter) with a 120° apex angle and a specified tip radius.
3.  **Load Application:** The test involves two loads:
    *   **Minor Load ($P_0$):** A light initial load (typically 10 kgf for steel balls, 3 kgf for diamond cone) is applied to seat the indenter and eliminate surface irregularities. This establishes a datum.
    *   **Major Load ($P_1$):** A heavier load is applied for a dwell time of 1-2 seconds.
4.  **Measurement:** The indenter is kept under the minor load, and the difference in the depth of penetration between the application of the minor load and the major load is measured by a dial gauge or digital display. This depth difference directly corresponds to the Rockwell hardness number.

**Important Point:** The Rockwell hardness number is inversely proportional to the depth of indentation. A shallower indentation means a harder material and a higher Rockwell number.

### Rockwell Scales

There are numerous Rockwell scales, each defined by a specific combination of indenter type and load. The most common scales are:

*   **HRC (Rockwell C Scale):** Uses a diamond cone indenter and a major load of 150 kgf. Used for hard materials like hardened steels. (CO1)
*   **HRB (Rockwell B Scale):** Uses a 1/16" steel ball indenter and a major load of 100 kgf. Used for softer materials like softer steels, aluminum alloys, copper alloys. (CO1)
*   **HRF (Rockwell F Scale):** Uses a 1/16" steel ball indenter and a major load of 60 kgf. Used for spring temper materials.

The Rockwell number is reported as a combination of the number and the scale (e.g., 60 HRC, 95 HRB).

**Reference:** Kuhn & Medlin (Vol. 8, Chapter 4) provides an excellent comparison of the Brinell, Vickers, and Rockwell hardness tests, detailing the different Rockwell scales and their applications.

### Advantages of Rockwell Test

*   Fast and simple to perform.
*   No optical measurement of indentation is required, making it suitable for production environments.
*   The results are directly read from a dial or digital display.
*   Various scales accommodate a wide range of materials.

### Disadvantages of Rockwell Test

*   Can be sensitive to surface finish, especially for softer materials on the HRB scale.
*   Not as suitable for very thin specimens or coatings as microhardness Vickers.
*   Different scales require different indenters and loads.

**Example:** Testing a hardened steel tool bit. A diamond cone indenter is used with a minor load of 10 kgf and a major load of 150 kgf. The depth difference measured by the dial gauge corresponds to 62 on the "C" scale. The result is reported as 62 HRC.

**Correlation between Hardness Scales:** While specific conversion charts exist, it's important to remember that these are approximate and depend on the material. Callister's (10th Ed) often includes tables for approximate correlations between Brinell, Vickers, and tensile strength for common steels. (CO1)

## Comparison of Brinell, Vickers, and Rockwell Hardness Tests

| Feature           | Brinell                                      | Vickers                                       | Rockwell                                      |
| :---------------- | :------------------------------------------- | :-------------------------------------------- | :-------------------------------------------- |
| **Indenter**      | Hardened steel or carbide ball               | Diamond pyramid (136° apex angle)             | Diamond cone or steel ball                    |
| **Measurement**   | Indentation diameter                         | Indentation diagonals                         | Depth of penetration (depth difference)       |
| **Surface Prep.** | Smooth, clean, flat                          | Highly polished                               | Clean, smooth, flat                           |
| **Material Range**| Soft to medium-hard materials                | Very soft to very hard materials, coatings    | Wide range, depends on scale                  |
| **Speed**         | Moderate                                     | Slower (due to measurement)                   | Very fast                                     |
| **Destructive?**  | Yes (leaves an indentation)                  | Yes (leaves an indentation)                   | Minimally destructive (shallow indentation)   |
| **Advantages**    | Good for bulk materials, averages micro-variations | Versatile, microhardness capability         | Fast, simple, no optical measurement needed |
| **Disadvantages** | Large indentation, not for very hard materials | Demanding surface prep, measurement accuracy | Scale-dependent, surface sensitivity          |

**Reference:** Kuhn & Medlin (Vol. 8, Chapter 4) provides an in-depth comparison, highlighting the strengths and weaknesses of each method.

## Relating Hardness to Other Properties

Hardness tests are valuable because the results can be correlated with other mechanical properties, particularly tensile strength.

*   **Hardness and Tensile Strength:** For many metals, especially steels, there is a fairly linear relationship between hardness and ultimate tensile strength (UTS). This relationship is often expressed as:

    $$ \text{UTS} \approx C \times \text{Hardness Number} $$

    Where $C$ is a constant that varies with material. This allows for rapid estimation of UTS without performing a tensile test. (CO1)

    **Example:** For many steels, the UTS in MPa is approximately 3.45 times the BHN.

*   **Hardness and Wear Resistance:** Generally, higher hardness correlates with better resistance to abrasive and adhesive wear. (CO1)

*   **Hardness and Machinability:** Harder materials are typically more difficult to machine and require different cutting tools and parameters. (CO3)

**Important Point:** These correlations are empirical and material-specific. Always use appropriate conversion charts or establish your own correlations for the specific material being tested.

**Reference:** Callister's (10th Ed) often includes tables showing approximate correlations between hardness (BHN, HV) and tensile strength for various metals.

## Practical Considerations for Performing Hardness Tests

*   **Specimen Thickness:** For Brinell and Rockwell tests, the specimen thickness should be at least 10 times the depth of the indentation to avoid supporting effects that can lead to incorrect readings. (CO4)
*   **Surface Finish:** A smooth, clean, and representative surface is crucial for accurate results. Remove any scale, paint, or oxide layers. (CO4)
*   **Indentation Spacing:** Indentations should not be too close to each other or to the edge of the specimen. A general rule is that the center of an indentation should be at least 2.5 indentation diameters from the edge and at least 4 indentation diameters from the center of another indentation. This prevents interaction between stress fields of adjacent indentations. (CO4)
*   **Dwell Time:** Ensure the load is applied for the specified dwell time. Too short a time can lead to higher readings, while too long a time might be acceptable for some materials but can introduce creep effects for others.
*   **Machine Calibration:** Regularly calibrate the hardness testing machine to ensure accurate load application and depth measurement. (CO4)

**Reference:** Kuhn & Medlin (Vol. 8, Chapter 4) provides practical guidance on specimen preparation and testing procedures.

## Practice Questions

1.  What is the primary principle behind the Brinell hardness test? How is the hardness number calculated?
2.  A Vickers hardness test is performed on a steel sample using a load of 20 kgf. The average diagonal length of the indentation is measured to be 0.4 mm. Calculate the Vickers hardness number (HV). (Assume appropriate units for F if not specified).
3.  Explain the difference between the minor and major loads in the Rockwell hardness test. What is being measured directly?
4.  Which hardness test would you choose for testing the hardness of a thin electroplated coating on a metal substrate? Justify your answer.
5.  Describe how hardness testing can be used for quality control in a manufacturing process.
6.  What are the potential drawbacks of using the Brinell test on very hard materials like tungsten carbide?
7.  If you measure a hardness of 60 HRC, what does this tell you about the material compared to a material with a hardness of 70 HRB? (Consider the scales used).

## Answers to Practice Questions

1.  **Brinell Principle:** A hardened ball indenter is pressed into the material surface with a known load for a specified time. The hardness number is calculated based on the diameter of the permanent indentation left behind. The formula is BHN $= \frac{2F}{\pi D (D - \sqrt{D^2 - d^2})}$.
2.  **Vickers Calculation:**
    HV = $1.8544 \times \frac{F}{d^2}$
    Assuming $F = 20$ kgf and $d = 0.4$ mm.
    HV = $1.8544 \times \frac{20}{(0.4)^2}$
    HV = $1.8544 \times \frac{20}{0.16}$
    HV = $1.8544 \times 125$
    HV ≈ 231.8 kgf/mm² (or HV 232)
3.  **Rockwell Loads:**
    *   **Minor Load ($P_0$):** An initial, light load (e.g., 10 kgf) applied to seat the indenter and remove surface irregularities, establishing a datum for measurement.
    *   **Major Load ($P_1$):** A heavier load applied after the minor load to create the primary indentation.
    The Rockwell hardness is directly measured by the *difference in depth* of indentation between the application of the minor load and the major load.
4.  **Thin Coating Test:** The **Vickers microhardness test** would be the most suitable. Its low loads and the ability to measure very small indentations make it ideal for characterizing the hardness of thin films and surface treatments without causing significant damage or being influenced by the substrate.
5.  **Quality Control:** Hardness testing is used to:
    *   Ensure materials meet specified hardness ranges, indicating they have undergone the correct heat treatment.
    *   Detect variations in material properties between different batches or within a single batch.
    *   Verify the effectiveness of surface hardening processes.
    *   Screen components for defects that might affect their performance.
6.  **Drawbacks on Hard Materials:** On very hard materials, the steel ball indenter of the Brinell test can deform plastically or even fracture. This invalidates the test. The diamond pyramid indenter of the Vickers test is more suitable for such hard materials.
7.  **Comparison of Scales:**
    *   **60 HRC:** This indicates a hardness of 60 on the Rockwell C scale, which uses a diamond cone and a 150 kgf major load. This scale is used for hard materials.
    *   **70 HRB:** This indicates a hardness of 70 on the Rockwell B scale, which uses a 1/16" steel ball and a 100 kgf major load. This scale is used for softer materials.
    Therefore, a material with 60 HRC is significantly harder than a material with 70 HRB. The HRC scale measures a higher range of hardness.

## Summary and Key Takeaways

*   Hardness is a material's resistance to localized plastic deformation.
*   Brinell, Vickers, and Rockwell tests are common indentation hardness tests.
*   **Brinell:** Uses a ball indenter, measures indentation diameter. Good for bulk materials, less suitable for very hard materials.
*   **Vickers:** Uses a diamond pyramid indenter, measures indentation diagonals. Versatile, suitable for a wide range of hardness and microhardness testing.
*   **Rockwell:** Uses a diamond cone or ball, measures depth of indentation. Fast and simple, no optical measurement needed. Various scales exist for different material ranges.
*   Hardness results can be correlated with other mechanical properties like tensile strength and wear resistance.
*   Proper specimen preparation and adherence to test procedures are critical for accurate results.

**(CO1, CO2, CO4)** This module directly addresses the evaluation of mechanical properties (hardness), relates it to material behavior (wear resistance, machinability), and emphasizes the utilization of experimental techniques.

**(CO3)** Understanding hardness helps analyze the effect of material selection on the performance of components related to wear and machinability.

**(CO5)** While this module focuses on material properties, the underlying principles of applying force and measuring response are fundamental to mechanics of materials.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
