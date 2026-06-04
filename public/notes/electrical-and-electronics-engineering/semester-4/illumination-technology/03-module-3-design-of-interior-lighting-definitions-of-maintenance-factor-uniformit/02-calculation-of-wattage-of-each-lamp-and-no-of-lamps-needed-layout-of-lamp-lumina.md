---
title: "Calculation of wattage of each lamp and no of lamps needed, Layout of lamp luminaire, Calculation of space to mounting height ratio, Indian standard recommendation and standard practices for illumination levels in various areas, Numerical problems from design of interior lighting."
subject: "ILLUMINATION TECHNOLOGY"
module: "Module 3: Design of Interior Lighting: Definitions of maintenance factor, Uniformity ratio, Direct ratio, Coefficients of utilisation and factors affecting it, Illumination required for various work planes, Types of fixtures and relative terms used for interior illumination such as DLOR and ULOR, Selection of lamp and luminance, Selection of utilisation factor, reflection factor and maintenance factor."
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35fe5"
status: "completed"
scrapedAt: "2026-05-23T16:16:39.748Z"
---
# Illumination Technology: Module 3 - Design of Interior Lighting

This module delves into the practical aspects of designing effective interior lighting schemes. We will explore key metrics, calculation methods, and the factors that influence the selection of lamps and luminaires, culminating in the application of Indian Standards and practical design problems.

**Learning Outcomes:**

*   Understand the principles of calculating the wattage of individual lamps and the total number of lamps required for a given space.
*   Learn to create a suitable layout for lamps and luminaires.
*   Determine the space-to-mounting height ratio and its significance.
*   Familiarize with Indian Standard recommendations and standard practices for illumination levels in various areas.
*   Solve numerical problems related to the design of interior lighting.

**Course Outcomes Alignment:**

*   **CO1 (K4):** While this module focuses on design, understanding factors like glare and visual comfort implicitly relates to CO1.
*   **CO2 (K3):** Directly addresses understanding working principles of lamps and luminaires through their application in design.
*   **CO3 (K5):** Incorporates definitions and units to perform calculations, aligning with evaluation of measurements.
*   **CO4 (K6):** This module is entirely dedicated to designing and implementing efficient interior lighting systems, meeting this outcome's core objective.
*   **CO5 (K6):** Not directly addressed in this module, as it focuses on interior lighting.

---

## 1. Calculation of Wattage of Each Lamp and Number of Lamps Needed

The process of determining the required lighting involves calculating the total luminous flux needed and then selecting the appropriate lamps and luminaires to achieve this.

### 1.1 Key Concepts and Definitions

*   **Illuminance (E):** The amount of luminous flux incident on a unit area of a surface. Measured in Lux (lx), which is lumens per square meter (lm/m²).
    *   **Formula:** $E = \frac{\Phi}{A}$, where $\Phi$ is luminous flux in lumens and $A$ is area in square meters.
*   **Luminous Flux ($\Phi$):** The total quantity of light emitted by a source per unit time. Measured in lumens (lm).
*   **Wattage (W):** The power consumed by a lamp.

### 1.2 Lumen Method (or Flux Method) of Calculation

This is a widely used method for interior lighting design. It involves the following steps:

1.  **Determine the required illuminance (E):** This is based on the task being performed and the area's function (refer to Indian Standards for recommendations).
2.  **Calculate the required total luminous flux ($\Phi_{total}$):**
    *   $\Phi_{total} = E \times A \times \text{CU} \times \text{LLMF}$
    *   Where:
        *   $E$: Required illuminance in lux (lm/m²)
        *   $A$: Area of the working plane in m²
        *   $\text{CU}$ (Coefficient of Utilization): The ratio of luminous flux emitted by the luminaire that reaches the working plane to the total luminous flux emitted by the lamps. It accounts for light losses due to the luminaire, room geometry, and surface reflectances.
        *   $\text{LLMF}$ (Lamp Lumen Maintenance Factor): The ratio of the initial lumen output of a lamp to its lumen output at a specified time in its life. This accounts for the depreciation of light output over time.

3.  **Select the Luminaire and Lamp:** Based on the required illuminance, aesthetics, and budget, select a suitable luminaire. The luminaire's data will provide its lumen output per lamp and its Coefficient of Utilization (CU). Also, select the appropriate lamp type and its initial lumen output.

4.  **Calculate the number of luminaires (N):**
    *   $N = \frac{\Phi_{total}}{\Phi_{luminaire}}$
    *   Where:
        *   $\Phi_{luminaire}$: Luminous flux emitted by one luminaire that reaches the working plane = (Lumen output per lamp) $\times$ (Number of lamps per luminaire) $\times \text{CU}$

5.  **Calculate the wattage of each lamp:** This is determined by the selected lamp's wattage. If a luminaire contains multiple lamps, the total wattage per luminaire will be (wattage per lamp) $\times$ (number of lamps per luminaire).

**Important Point:** It's crucial to use the *effective* lumen output from the luminaire at the working plane, which is influenced by the CU.

**Example (Conceptual):**

Let's say we need to light a classroom (Area $A = 100 m^2$) with a required illuminance of $E = 300$ lux.
We select a luminaire that uses one 40W LED lamp with an initial lumen output of 4000 lm.
The CU for this luminaire in this room is 0.7, and the LLMF is 0.9.

*   **Total Luminous Flux required ($\Phi_{total}$):**
    $\Phi_{total} = 300 \, \text{lx} \times 100 \, m^2 \times 0.7 \times 0.9 = 18900 \, \text{lm}$
*   **Effective Lumens per Luminaire:**
    Effective Lumens = (4000 lm/lamp) $\times$ (1 lamp/luminaire) $\times 0.7$ = 2800 lm
*   **Number of Luminaires (N):**
    $N = \frac{18900 \, \text{lm}}{2800 \, \text{lm/luminaire}} \approx 6.75$
    We would round this up to **7 luminaires**.
*   **Wattage of each lamp:** 40W (as selected).

---

## 2. Layout of Lamp Luminaire

A well-designed layout ensures uniform illuminance, avoids glare, and is aesthetically pleasing.

### 2.1 Key Concepts and Definitions

*   **Luminaire:** A complete unit comprising a light source and all other necessary parts such as the ballasts, reflectors, refractors, diffusers, and the external electrical protective cover.
*   **Light Distribution Curve (Polar Curve):** A graphical representation showing the luminous intensity distribution of a light source or luminaire in different directions.
*   **Uniformity Ratio:** The ratio of the minimum illuminance to the average illuminance on the working plane. A higher uniformity ratio indicates more even light distribution.
    *   **Formula:** $\text{Uniformity Ratio} = \frac{E_{min}}{E_{avg}}$
*   **Direct Ratio:** The ratio of the luminous flux received directly from the luminaires at the working plane to the total luminous flux received at the working plane. It indicates the proportion of light coming directly from the source.

### 2.2 Layout Considerations

*   **Room Dimensions and Shape:** The layout should conform to the geometry of the space.
*   **Mounting Height:** The height at which the luminaires are installed.
*   **Luminaire Distribution Pattern:** Luminaires with different light distribution patterns (e.g., wide, medium, narrow beam) require different spacing.
*   **Task Locations:** If specific tasks are performed in particular areas, luminaires should be concentrated there or positioned to provide optimal light for those tasks.
*   **Obstructions:** Avoid placing luminaires in positions where they might be obstructed by beams, columns, or other architectural features.
*   **Glare Control:** Position luminaires to minimize direct glare for occupants.
*   **Aesthetics:** The layout should be visually appealing and integrated with the interior design.

### 2.3 Common Layout Patterns

*   **Square/Rectangular Grid:** Luminaires are spaced evenly in rows and columns. Suitable for most general lighting applications.
*   **Linear Layout:** Luminaires are arranged in straight lines, often along the length of the room or above workstations. Common in corridors or assembly lines.
*   **Circular/Radial Layout:** Luminaires are placed in a circular pattern around a central point. Used for specific aesthetic effects or in circular rooms.

### 2.4 Spacing Criteria

The maximum permissible spacing between luminaires is determined by:

*   **Required Uniformity Ratio:** To achieve a certain uniformity, luminaires need to be spaced closer together.
*   **Luminaire Light Distribution:** Wider light distributions allow for wider spacing.
*   **Mounting Height:** As mounting height increases, spacing can also increase.

**Reference:** IS:3646-1992 (Code of Practice for Artificial Lighting and its effect on human beings) provides guidelines on spacing and mounting heights.

---

## 3. Calculation of Space to Mounting Height Ratio (S/H)

The Space to Mounting Height ratio is a crucial parameter in lighting design that helps determine the appropriate spacing between luminaires to achieve uniform illumination.

### 3.1 Key Concepts and Definitions

*   **Space (S):** The distance between the centers of adjacent luminaires, or between a luminaire and a wall (sometimes referred to as mounting distance or spacing).
*   **Mounting Height (H):** The vertical distance from the light source (lamp) within the luminaire to the working plane.

### 3.2 Importance of S/H Ratio

*   **Uniformity:** The S/H ratio is directly related to the uniformity of illumination. A specific S/H ratio is often recommended for a given luminaire to achieve a desired uniformity.
*   **Luminaire Performance:** It helps in understanding how a particular luminaire will perform in a given environment and how to best position it.

### 3.3 Determining S/H Ratio

The optimal S/H ratio is often provided by the luminaire manufacturer or can be derived from the luminaire's light distribution data. It's typically determined through photometric measurements and calculations to ensure that the light from adjacent luminaires overlaps sufficiently to provide even illumination without creating dark spots or excessive overlapping.

**General Guideline:**

*   **Uniform illumination:** A lower S/H ratio generally leads to better uniformity.
*   **Economic considerations:** A higher S/H ratio means fewer luminaires are needed, which can reduce initial cost but might compromise uniformity or require more powerful lamps.

**Example:**

If a luminaire is designed to be mounted at a height of 3 meters, and its recommended maximum S/H ratio for good uniformity is 1.5, then the maximum spacing between luminaires should be:

$S_{max} = \text{S/H ratio} \times H = 1.5 \times 3 \, m = 4.5 \, m$

---

## 4. Indian Standard Recommendations and Standard Practices

Adhering to Indian Standards ensures safety, efficiency, and appropriate lighting levels for various applications.

### 4.1 Key Indian Standards

*   **IS:3646 (Part 1 to 4):** Code of Practice for Artificial Lighting and its effect on human beings. This is a primary reference for interior lighting.
    *   **Part 1:** General recommendations.
    *   **Part 2:** Lighting for educational institutions.
    *   **Part 3:** Lighting for offices.
    *   **Part 4:** Lighting for residential buildings.
*   **IS:1944-1970:** Code of practice for lighting of factories.
*   **IS:10322-1982:** Luminaires - General requirements and tests.
*   **IS:2440-1975:** Code of practice for flood lighting. (Primarily for exterior, but principles can be relevant).
*   **IS:6665-1972:** Code of practice for artificial lighting of sports stadiums. (Primarily for exterior, but principles can be relevant).
*   **National Lighting Code 2010 (SP72:2010):** A comprehensive document that often consolidates or updates recommendations.

### 4.2 Illuminance Levels for Various Work Planes

Indian Standards specify recommended illuminance levels for different tasks and areas. These are typically presented as average maintained illuminance in lux.

| Area/Activity                     | Recommended Illuminance (lux) (Typical, refer to specific IS codes for precise values) |
| :-------------------------------- | :------------------------------------------------------------------------------------- |
| **Offices**                       |                                                                                        |
| General Office Work               | 300 - 500                                                                              |
| Detailed Desk Work                | 500 - 750                                                                              |
| Drawing Offices, CAD Stations     | 500 - 1000                                                                             |
| **Educational Institutions**      |                                                                                        |
| Classrooms, Lecture Halls         | 300 - 500                                                                              |
| Laboratories, Workshops           | 500 - 750                                                                              |
| **Residential**                   |                                                                                        |
| Living Rooms                      | 100 - 200                                                                              |
| Reading/Writing Areas             | 300 - 500                                                                              |
| Kitchen Work Areas                | 300 - 500                                                                              |
| **Industrial Areas**              |                                                                                        |
| Assembly Line (fine work)         | 750 - 1500                                                                             |
| General Workshop                  | 300 - 500                                                                              |
| Storage Areas                     | 100 - 200                                                                              |
| **Healthcare**                    |                                                                                        |
| General Patient Rooms             | 100 - 200                                                                              |
| Examination Rooms                 | 500 - 750                                                                              |
| Surgical Areas                    | 1000 - 2000 (often with local supplementary lighting)                                    |
| **Circulation Areas**             |                                                                                        |
| Corridors, Staircases             | 50 - 100                                                                               |

**Important Note:** These are typical values. The exact recommendations depend on the specific standard being followed and the precise nature of the task and environment. Always consult the latest versions of the relevant IS codes.

### 4.3 Standard Practices

*   **Uniformity:** Aim for a uniformity ratio of at least 0.6 to 0.8 for most tasks, meaning $E_{min} \geq 0.6 \times E_{avg}$.
*   **Glare Control:** Use luminaires with appropriate shielding (diffusers, louvers) and avoid placing bare lamps or highly luminous sources directly in the line of sight. Utilize indirect or semi-indirect lighting where appropriate.
*   **Color Rendering Index (CRI):** Select lamps with a CRI suitable for the application (e.g., higher CRI for areas where accurate color perception is important, like retail or healthcare).
*   **Energy Efficiency:** Prioritize energy-efficient lighting solutions like LED lamps and controls.
*   **Maintenance:** Consider ease of cleaning and lamp replacement in luminaire selection and layout.

---

## 5. Numerical Problems from Design of Interior Lighting

These problems reinforce the application of the concepts discussed.

### Problem 1: Calculation of Wattage and Number of Lamps

**Question:** Design an artificial lighting scheme for a drawing office with dimensions $20m \times 10m$. The required average illuminance on the drawing tables is 750 lux. The drawing office is to be illuminated using 250W GLS lamps mounted in dispersive reflectors. The average reflectance of the walls, ceiling, and floor are 70%, 50%, and 20% respectively. The room is of medium size. The luminaire has a total lumen output of 4700 lm per lamp. The lumen output depreciation factor (LLMF) is 0.8 and the coefficient of utilization (CU) for the planned layout is 0.45. Calculate:
a) The total luminous flux required.
b) The number of lamps required.
c) The total wattage.

**Solution:**

*   **Given:**
    *   Length ($L$) = 20 m
    *   Width ($W$) = 10 m
    *   Area ($A$) = $L \times W = 20 \times 10 = 200 \, m^2$
    *   Required Illuminance ($E$) = 750 lux
    *   Lamp Lumen Output ($\Phi_{lamp}$) = 4700 lm
    *   Lamp Wattage = 250 W
    *   LLMF = 0.8
    *   CU = 0.45

*   **a) Total Luminous Flux Required ($\Phi_{total}$):**
    $\Phi_{total} = \frac{E \times A}{\text{CU} \times \text{LLMF}}$
    $\Phi_{total} = \frac{750 \, \text{lm/m}^2 \times 200 \, m^2}{0.45 \times 0.8}$
    $\Phi_{total} = \frac{150000}{0.36}$
    $\Phi_{total} = 416666.67 \, \text{lm}$

*   **b) Number of Lamps Required (N):**
    $N = \frac{\Phi_{total}}{\Phi_{lamp}}$
    $N = \frac{416666.67 \, \text{lm}}{4700 \, \text{lm/lamp}}$
    $N \approx 88.65$
    Round up to the nearest whole number: $N = 89$ lamps.

*   **c) Total Wattage:**
    Total Wattage = Number of lamps $\times$ Wattage per lamp
    Total Wattage = $89 \times 250 \, W$
    Total Wattage = $22250 \, W$

**Answer:**
a) Total luminous flux required = 416,667 lumens (approx.)
b) Number of lamps required = 89 lamps
c) Total wattage = 22,250 W

### Problem 2: Layout and Spacing

**Question:** For the drawing office in Problem 1, assume the luminaires are to be mounted at a height of 4 meters above the working plane. If the luminaire's recommended S/H ratio for good uniformity is 1.2, determine the maximum spacing between luminaires and suggest a possible layout arrangement for 89 lamps.

**Solution:**

*   **Given:**
    *   Mounting Height ($H$) = 4 m
    *   Recommended S/H Ratio = 1.2
    *   Number of Lamps = 89

*   **Maximum Spacing (S):**
    $S = \text{S/H ratio} \times H = 1.2 \times 4 \, m = 4.8 \, m$

*   **Layout Arrangement:**
    The room dimensions are 20m x 10m. We need to arrange approximately 89 lamps (which implies 89 luminaires if each luminaire has one lamp).

    Let's try arranging them in a grid:
    Assume we have $n_L$ luminaires along the length (20m) and $n_W$ luminaires along the width (10m).
    Total luminaires $N = n_L \times n_W = 89$.

    If we consider the spacing between luminaires and from walls, the effective area covered by each luminaire can be approximated as $(S_L \times S_W)$, where $S_L$ is spacing along length and $S_W$ is spacing along width.

    For a grid layout, we need $(n_L - 1)$ spacings along the length and $(n_W - 1)$ spacings along the width. Let's assume spacings are roughly equal to the maximum allowed spacing of 4.8m.

    Consider the width (10m): If we have 3 luminaires along the width ($n_W = 3$), the spacing would be $(10m / (3-1)) = 10m / 2 = 5m$. This is close to 4.8m.
    If $n_W = 3$, then $n_L = 89 / 3 \approx 29.67$. Let's assume $n_L = 30$.
    Spacing along the length would be $(20m / (30-1)) = 20m / 29 \approx 0.69m$. This is too small.

    Let's re-evaluate the number of luminaires required. The lumen method calculation gave 89 lamps. This implies 89 luminaires (assuming one lamp per luminaire).

    Let's assume we aim for approximately 3 rows along the width (10m) and 30 columns along the length (20m).

    **Trial Layout:**
    *   Along the 10m width: 3 luminaires. Spacing between luminaires $\approx (10m / 2) = 5m$. Spacing from walls $\approx 2.5m$. Total width covered $2.5 + 5 + 2.5 = 10m$. This spacing is acceptable as it's close to 4.8m.
    *   Along the 20m length: 30 luminaires. Spacing between luminaires $\approx (20m / 29) \approx 0.69m$. This spacing is very small and likely inefficient.

    **Let's consider a different approach to achieve roughly 89 luminaires with adequate spacing.**

    If we maintain a spacing of around 4.8m along both directions:
    *   Number of luminaires along 10m width: $(10m / 4.8m) + 1 \approx 2.08 + 1 = 3.08$. Let's try 3 rows.
    *   Number of luminaires along 20m length: $(20m / 4.8m) + 1 \approx 4.17 + 1 = 5.17$. Let's try 5 columns.

    If we have 3 rows and 5 columns, total luminaires = $3 \times 5 = 15$. This is far from 89.

    This indicates that the lumen method calculation might require a large number of luminaires with the given CU and other parameters. Let's check if the CU of 0.45 is indeed the best achievable. For drawing offices, a higher CU is often desirable.

    **Let's re-interpret the question for a more practical layout:** Perhaps the question implies a certain number of luminaires are to be chosen based on aesthetic or practical spacing, and then we calculate if the required lux is met. However, based on the lumen method, 89 lamps are needed.

    **Let's assume the intention is to space the luminaires based on the S/H ratio and then see how many are needed.**

    If we decide on a spacing of 4.5m x 4.5m, then:
    *   Along 10m width: $10m / 4.5m \approx 2.2$ intervals. This means 3 rows (including one near the wall).
    *   Along 20m length: $20m / 4.5m \approx 4.4$ intervals. This means 5 columns.

    Number of luminaires = 3 rows $\times$ 5 columns = 15 luminaires.
    If each luminaire has one 250W lamp (4700 lm), then total flux = $15 \times 4700 = 70500 \, \text{lm}$.
    Average illuminance = $\frac{70500 \, \text{lm} \times 0.45 \times 0.8}{200 \, m^2} = \frac{25380}{200} = 126.9 \, \text{lux}$. This is insufficient.

    **Conclusion:** The lumen method calculation (89 lamps) is likely correct given the parameters. The layout needs to accommodate these 89 lamps. This might mean closer spacing or multiple lamps per luminaire.

    **Revised Layout Strategy for 89 lamps:**
    Let's try to have roughly equal spacing in both directions, close to 4.8m.
    If we have $n_L$ luminaires along 20m and $n_W$ along 10m.

    Try $n_W = 3$. Spacing along width $\approx 5m$.
    Then $n_L = 89 / 3 \approx 29.67$. We need 30 luminaires along the length.
    Spacing along length $\approx 20m / 29 \approx 0.69m$. This is too dense.

    Consider luminaires with multiple lamps. If we use luminaires with 2 lamps each:
    Number of luminaires = $89 / 2 = 44.5$. Let's say 45 luminaires.
    *   Try $n_W = 3$. Then $n_L = 45 / 3 = 15$.
    *   Spacing along width (3 rows): $10m / 2 = 5m$. (Spacing from wall $2.5m$)
    *   Spacing along length (15 columns): $20m / 14 \approx 1.43m$. This is still quite close.

    If we use luminaires with 3 lamps each:
    Number of luminaires = $89 / 3 \approx 29.67$. Let's say 30 luminaires.
    *   Try $n_W = 3$. Then $n_L = 30 / 3 = 10$.
    *   Spacing along width (3 rows): $10m / 2 = 5m$. (Spacing from wall $2.5m$)
    *   Spacing along length (10 columns): $20m / 9 \approx 2.22m$. This is getting more reasonable, but still smaller than the 4.8m S/H ratio suggests.

    **Best approach:** Based on the calculation of 89 lamps, and a recommended S/H of 1.2 at 4m height, the maximum spacing is 4.8m. This implies that to achieve 750 lux with the given CU and LLMF, we need a significant number of light sources, likely necessitating many luminaires with close spacing, or luminaires with multiple lamps.

    **Proposed Layout (Example with 3 lamps per luminaire):**
    *   Use luminaires with 3 x 250W lamps each.
    *   Total luminaires needed = 30 (approx. 89/3).
    *   Arrange in 3 rows along the 10m width, with approximately 2.5m spacing from walls and 5m between rows.
    *   Arrange in 10 columns along the 20m length, with approximately 2.22m spacing between columns. Spacing from walls would be half of this, approx. 1.11m.
    *   This arrangement yields 30 luminaires $\times$ 3 lamps/luminaire = 90 lamps. This is very close to the required 89 lamps.

    **Final Layout Recommendation:**
    *   **Mounting Height:** 4m
    *   **Luminaire Type:** Luminaire with 3 x 250W GLS lamps.
    *   **Arrangement:** A grid of 3 rows and 10 columns.
    *   **Spacing:**
        *   Along width (10m): 2.5m (from wall) - 5m (between rows) - 2.5m (from wall) = 10m.
        *   Along length (20m): 1.11m (from wall) - 2.22m (between columns) ... (9 intervals of 2.22m) ... - 1.11m (from wall). This gives 1.11 + (9 * 2.22) + 1.11 = 1.11 + 19.98 + 1.11 = 22.2m. This slightly overshoots the 20m, meaning the spacing would need to be slightly adjusted downwards (e.g., 2.0m spacing between columns, giving $1.11 + (9 \times 2.0) + 1.11 = 20.22m$). Or, reduce the number of columns to 9 with a spacing of $20m/8 \approx 2.5m$. This would give $3 \times 9 = 27$ luminaires, which is too few.

    **Revised Plan:**
    *   **Number of Luminaires:** 89.
    *   **Let's try to use 4 lamps per luminaire:** $89/4 = 22.25$, say 22 luminaires.
    *   $n_W = 3 \implies n_L = 22/3 \approx 7.33$. Let's try 7 columns.
    *   Spacing along length (7 columns): $20m / 6 \approx 3.33m$.
    *   Spacing along width (3 rows): $10m / 2 = 5m$.
    *   Total luminaires = $7 \times 3 = 21$. This means $21 \times 4 = 84$ lamps. This is close enough to 89. We can adjust slightly.

    **Final Suggested Layout for 89 lamps:**
    *   **Mounting Height:** 4m
    *   **Luminaire Type:** Luminaire with 4 x 250W GLS lamps.
    *   **Total Luminaires:** 22 (to get $22 \times 4 = 88$ lamps, very close to 89).
    *   **Arrangement:** A grid of 3 rows along the 10m width and 8 columns along the 20m length.
    *   **Spacing:**
        *   Along width (10m): 2.5m (from wall) - 5m (between rows) - 2.5m (from wall) = 10m.
        *   Along length (20m): Spacing = $20m / (8-1) = 20m / 7 \approx 2.86m$. Spacing from walls = $2.86m/2 \approx 1.43m$.
        *   Total length covered = 1.43 + (7 * 2.86) + 1.43 = 1.43 + 20.02 + 1.43 = 22.88m. This is over the 20m.

    **Let's stick to the original calculation of 89 lamps and find a reasonable grid:**
    We need $n_L \times n_W \approx 89$.
    Try $n_W = 3$. $n_L \approx 30$.
    Spacing along width = 5m. Spacing from wall = 2.5m.
    Spacing along length = $20m / 29 \approx 0.69m$.

    This suggests that the lumen method calculation implies a very dense lighting setup for this specific case. The most practical approach given the S/H ratio of 1.2 (spacing of 4.8m) is to reconsider the number of lamps or lumens per lamp. However, if we MUST use 89 lamps:

    **Final Layout Strategy:**
    *   **Mounting Height:** 4m
    *   **Luminaire Type:** Luminaire with 3 x 250W lamps. Total lamps = 89. Need 30 luminaires.
    *   **Arrangement:** 3 rows along the 10m width.
    *   **Spacing along width:** 2.5m (wall) - 5m (between) - 2.5m (wall).
    *   **Number of columns needed = 89 / 3 ≈ 29.67.** Let's use 30 columns.
    *   **Spacing along length:** $20m / 29 \approx 0.69m$. Spacing from walls would be $0.69m/2 \approx 0.35m$.
    *   This implies a layout of 3 rows x 30 columns, with luminaires spaced approximately 0.7m apart along the length and 5m apart along the width. This is a practical implication of the calculation.

---

## 6. Definitions of Maintenance Factor, Uniformity Ratio, Direct Ratio, Coefficients of Utilisation and Factors Affecting It

These are critical parameters in lighting design calculations.

### 6.1 Maintenance Factor (MF)

*   **Definition:** The ratio of the average illuminance or luminance of a lighting installation when the lamps and fittings have been in use for a specified period and are in a dirty condition, to the average illuminance or luminance when the lamps and fittings are new and clean.
*   **Formula:** $\text{MF} = \frac{\text{Illuminance (after use)}}{\text{Illuminance (new)}}$
*   **Purpose:** Accounts for the depreciation in light output due to lamp aging and dirt accumulation on luminaires and room surfaces.
*   **Values:** Typically ranges from 0.4 to 0.9, depending on the environment (clean or dirty), type of luminaire (enclosed or open), and maintenance schedule.
    *   **Example:** In a clean office with regular cleaning (say, every 6 months), MF might be 0.8. In a dusty industrial environment with infrequent cleaning, MF could be as low as 0.5.
*   **Factors Affecting MF:**
    *   **Environment:** Dust, dirt, humidity, temperature.
    *   **Luminaire Type:** Enclosed luminaires offer better protection against dirt than open ones.
    *   **Maintenance Schedule:** Frequency of cleaning and lamp replacement.
    *   **Lamp Lumen Depreciation:** How quickly the lamp's light output decreases over its life.

### 6.2 Uniformity Ratio (UR)

*   **Definition:** The ratio of the minimum illuminance to the average illuminance on the working plane.
*   **Formula:** $\text{UR} = \frac{E_{min}}{E_{avg}}$
*   **Purpose:** Measures the evenness of light distribution. A higher ratio means more uniform lighting.
*   **Values:**
    *   For general office and school work, UR should be at least 0.6 to 0.7.
    *   For precision tasks, it might be higher.
    *   For circulation areas, a lower UR might be acceptable.
*   **Factors Affecting UR:**
    *   **Luminaire Spacing:** Wider spacing tends to reduce uniformity.
    *   **Luminaire Light Distribution:** Luminaires with wider and more uniform light distributions improve uniformity.
    *   **Room Proportions and Reflectances:** The shape of the room and the reflectance of surfaces influence light distribution.

### 6.3 Direct Ratio (DR)

*   **Definition:** The ratio of the luminous flux received directly from the luminaires at the working plane to the total luminous flux received at the working plane.
*   **Formula:** $\text{DR} = \frac{\Phi_{direct}}{\Phi_{total}}$
*   **Purpose:** Indicates the proportion of light that comes directly from the luminaire versus light that is reflected from ceilings and walls.
*   **Values:**
    *   **Direct Lighting:** DR is high (e.g., > 0.9), where most light comes directly from the luminaire.
    *   **Indirect Lighting:** DR is low (e.g., < 0.1), where most light is reflected from the ceiling.
    *   **Semi-direct/Semi-indirect:** Intermediate values.
*   **Factors Affecting DR:**
    *   **Luminaire Type and Light Distribution:** Luminaires designed for direct lighting have high DR, while indirect luminaires have low DR.
    *   **Room Reflectances:** Higher wall and ceiling reflectances increase the indirect component, thus reducing DR.
    *   **Mounting Height:** Higher mounting heights can reduce the proportion of light reaching the working plane directly.

### 6.4 Coefficients of Utilisation (CU)

*   **Definition:** The ratio of the luminous flux effectively utilized on the working plane to the total luminous flux emitted by the lamps.
*   **Formula:** $\text{CU} = \frac{\Phi_{working\_plane}}{\Phi_{lamps}}$
*   **Purpose:** Represents the efficiency of a lighting system in delivering light to the working plane, considering all light losses within the luminaire and the room.
*   **Values:** Typically range from 0.2 to 0.8, depending on luminaire design, room geometry, and surface reflectances.
*   **Factors Affecting CU:**
    *   **Luminaire Efficiency:** The proportion of light emitted by the lamp that is directed downwards by the luminaire.
    *   **Light Distribution Curve:** The pattern of light distribution from the luminaire.
    *   **Room Index (RI):** A measure of the room's geometry, calculated as:
        $RI = \frac{L \times W}{H \times (L+W)}$, where L, W are room dimensions and H is the height from luminaire to working plane. Larger RI generally means more efficient utilization.
    *   **Surface Reflectances:** Reflectances of the ceiling, walls, and floor significantly impact CU. Higher reflectances increase CU.
    *   **Luminaire Dirt Depreciation:** Similar to MF, dirt on the luminaire reduces its CU. (Note: CU is usually quoted for clean luminaires. The combined effect of depreciation is captured by MF).
    *   **Luminaire Position:** The position of the luminaire relative to the room surfaces.

---

## 7. Types of Fixtures and Relative Terms (DLOR and ULOR)

### 7.1 Types of Fixtures (Luminaires)

Luminaires are classified based on their light distribution and how they direct light.

*   **Direct Lighting:** >90% of light directed downwards. Creates strong shadows, high contrast. Used for task lighting or areas requiring high vertical illuminance.
*   **Semi-Direct Lighting:** 60-90% of light directed downwards, 10-40% upwards.
*   **Universal (General Diffuse) Lighting:** 40-60% downwards, 40-60% upwards. Provides a balanced distribution.
*   **Full Diffuse Lighting:** ~50% downwards, ~50% upwards. Soft, shadowless lighting.
*   **Semi-Indirect Lighting:** 10-40% downwards, 60-90% upwards. Mostly illuminates the ceiling, which then reflects light down. Creates soft, glare-free lighting.
*   **Indirect Lighting:** <10% of light directed downwards, >90% upwards. Illuminates the ceiling, which acts as a large secondary light source. Excellent for glare-free environments but requires high ceiling reflectances and can be less energy efficient if the ceiling is dark.

### 7.2 Relative Terms: DLOR and ULOR

These terms are crucial for understanding luminaire performance and are often found on photometric datasheets.

*   **Downlight Output Ratio (DLOR):**
    *   **Definition:** The ratio of the luminous flux emitted by the luminaire in the downward direction (below the horizontal plane) to the total luminous flux emitted by the lamp(s) within the luminaire.
    *   **Formula:** $\text{DLOR} = \frac{\Phi_{downward}}{\Phi_{lamp}}$
    *   **Purpose:** Indicates how much light is directed downwards by the luminaire.

*   **Uplight Output Ratio (ULOR):**
    *   **Definition:** The ratio of the luminous flux emitted by the luminaire in the upward direction (above the horizontal plane) to the total luminous flux emitted by the lamp(s) within the luminaire.
    *   **Formula:** $\text{ULOR} = \frac{\Phi_{upward}}{\Phi_{lamp}}$
    *   **Purpose:** Indicates how much light is directed upwards. For energy efficiency and preventing light pollution, ULOR is often minimized in interior lighting design (except for indirect lighting schemes).

**Relationship:**
For a luminaire: $\text{DLOR} + \text{ULOR} + \text{Flux emitted in horizontal direction} = 1$ (or 100% of lamp flux).
Often, for simplicity or if horizontal flux is negligible: $\text{DLOR} + \text{ULOR} \approx 1$.

**Example:**
A luminaire has DLOR = 0.75 and ULOR = 0.15. This means 75% of the lamp's light is directed downwards, and 15% upwards. The remaining 10% is emitted in the horizontal direction or lost within the luminaire.

---

## 8. Selection of Lamp and Luminance

### 8.1 Selection of Lamp

Choosing the right lamp is fundamental to achieving desired illuminance, quality of light, and energy efficiency.

*   **Factors to Consider:**
    *   **Lumen Output ($\Phi$):** To meet the required illuminance levels.
    *   **Wattage (W):** For energy efficiency and operating cost.
    *   **Efficacy (lm/W):** A measure of energy efficiency. Higher efficacy means more light per watt.
    *   **Color Temperature (CCT):**
        *   Warm White (2700-3000K): Cozy, relaxing atmosphere (residential, lounges).
        *   Neutral White (3500-4000K): Balanced, good for offices, retail.
        *   Cool White (5000-6500K): Crisp, stimulating, good for tasks, industrial.
    *   **Color Rendering Index (CRI):** How accurately the lamp reveals the true colors of objects compared to a natural light source. High CRI (>80) is desirable for most applications.
    *   **Lamp Life:** Affects maintenance costs and frequency of replacement.
    *   **Beam Angle/Distribution:** How the light is spread.
    *   **Dimming Capability:** If lighting controls are to be used.
    *   **Cost:** Initial cost and operating cost.
    *   **Technology:** Incandescent, Halogen, Fluorescent (T8, T5), Compact Fluorescent (CFL), High-Intensity Discharge (HID), Light Emitting Diode (LED). LEDs are generally preferred for their efficiency, long life, and controllability.

*   **Lamp Types and Characteristics:**
    *   **LEDs:** High efficacy, long life, excellent controllability, good CRI. Versatile.
    *   **Fluorescent Lamps (Linear):** Good efficacy, diffuse light, widely used in offices and commercial spaces. T8 and T5 are common.
    *   **Incandescent/Halogen:** High CRI, warm color, but very inefficient, short life. Increasingly phased out.

### 8.2 Selection of Luminance

*   **Definition of Luminance:** The luminous intensity per unit area of a light source or a surface in a given direction. Measured in candelas per square meter ($cd/m^2$) or nits.
*   **Purpose:** Luminance is perceived by the eye as brightness. While illuminance is the amount of light *on* a surface, luminance is the amount of light *from* a surface.
*   **Considerations:**
    *   **Visual Comfort:** Avoid excessively bright surfaces that can cause glare.
    *   **Contrast:** Sufficient luminance differences are needed for visibility.
    *   **Aesthetics:** The perceived brightness of luminaires and surfaces contributes to the atmosphere.
    *   **Luminaire Design:** Diffusers and louvers are used to control the luminance of luminaires.

### 8.3 Luminance Limits (Glare Control)

Standards often set limits on the maximum permissible luminance of luminaires or parts of the visual field to prevent discomfort or disability glare. These limits are typically expressed in $cd/m^2$ and depend on the angle of observation and the type of installation.

---

## 9. Selection of Utilisation Factor, Reflection Factor and Maintenance Factor

These factors are interlinked and are crucial inputs for the Lumen Method.

### 9.1 Selection of Utilisation Factor (CU)

*   **How to Select:**
    1.  **Determine Room Index (RI):** Calculate RI based on room dimensions and mounting height.
    2.  **Identify Surface Reflectances:** Note the reflectances of ceiling, walls, and floor.
    3.  **Consult Luminaire Photometric Data:** Manufacturers provide CU tables or charts that show CU values for different RIs and reflectances. These are specific to each luminaire.
    4.  **Choose Appropriate Luminaire:** Select a luminaire that offers a suitable CU for the intended application.

### 9.2 Selection of Reflection Factor

*   **Definition:** The ratio of the luminous flux reflected from a surface to the luminous flux incident upon it.
*   **Purpose:** To account for the contribution of reflected light to the total illuminance on the working plane.
*   **How to Determine:**
    *   **Surface Properties:** Different materials and colors have different reflection factors.
        *   White surfaces: High reflection factor (e.g., 80-90%).
        *   Light colors: Moderate to high (e.g., 50-70%).
        *   Dark colors: Low (e.g., 10-30%).
    *   **Standard Tables:** Reference tables provide typical reflection factors for common colors and materials.
    *   **Manufacturer Data:** Sometimes provided for specific finishes.
*   **Typical Values:**
    *   Ceiling: 0.7 - 0.9 (White, light paint)
    *   Walls: 0.5 - 0.7 (Light paint)
    *   Floor: 0.2 - 0.5 (Carpet, linoleum, polished concrete)

### 9.3 Selection of Maintenance Factor (MF)

*   **How to Select:**
    1.  **Assess the Environment:**
        *   **Clean:** Offices, hospitals, residential areas with regular cleaning. MF typically 0.7-0.8.
        *   **Moderately Dirty:** Schools, some light industrial. MF typically 0.6-0.7.
        *   **Dirty:** Industrial workshops, kitchens, dusty environments. MF typically 0.4-0.6.
    2.  **Consider Maintenance Schedule:**
        *   Frequent cleaning and lamp replacement (e.g., every 6-12 months): Higher MF.
        *   Infrequent cleaning and lamp replacement: Lower MF.
    3.  **Luminaire Type:** Open luminaires are more susceptible to dirt than enclosed ones.
    4.  **Lamp Lumen Maintenance:** Factor in the lamp's lumen depreciation curve. If the lamp output drops significantly over its life, this is implicitly considered in the MF.

**Important Note:** The Lumen Method formula $\Phi_{total} = \frac{E \times A}{\text{CU} \times \text{LLMF}}$ actually uses LLMF (Lamp Lumen Maintenance Factor) directly. However, when calculating CU, manufacturers often provide tables that implicitly incorporate some level of dirt depreciation for the luminaire itself. For a more robust calculation, some designers might use $\Phi_{total} = \frac{E \times A}{\text{CU} \times \text{LLMF} \times \text{LDDF}}$, where LDDF is Luminaire Dirt Depreciation Factor. Often, a combined Maintenance Factor (MF) is used that represents the combined effect of both lamp and luminaire depreciation: $\text{MF} = \text{LLMF} \times \text{LDDF}$. In such cases, the formula becomes $\Phi_{total} = \frac{E \times A}{\text{CU} \times \text{MF}}$. The problem statement in Problem 1 used LLMF, and CU was given as a single factor. It's crucial to understand how the provided CU value is defined by the manufacturer. If CU is given for clean luminaires, then an MF is definitely needed. If CU is already specified to include depreciation effects, then MF might be redundant. For practical purposes, using an MF based on environmental conditions is standard practice.

---

## Practice Questions

1.  A conference room measuring 8m x 6m requires an average illuminance of 500 lux. The luminaires are to be mounted at a height of 3m. Each luminaire contains two 40W fluorescent tubes, each producing 3200 lumens. The CU for the room and luminaire combination is 0.6, and the lamp lumen maintenance factor is 0.85.
    *   Calculate the total luminous flux required.
    *   Calculate the number of luminaires needed.
    *   Calculate the total wattage of the installation.

2.  For the conference room in Question 1, if the maximum recommended S/H ratio for good uniformity is 1.3, what is the maximum spacing between luminaires? Suggest a possible layout arrangement for the required number of luminaires.

3.  Explain the importance of the Maintenance Factor in interior lighting design. What factors influence its value, and provide typical ranges for different environments.

4.  Differentiate between Illuminance and Luminance. Why is controlling luminance important in lighting design?

5.  Define Coefficient of Utilisation (CU) and list the key factors that affect it.

---

## Answers to Practice Questions

1.  **Calculations:**
    *   Area ($A$) = $8m \times 6m = 48 m^2$
    *   Required Illuminance ($E$) = 500 lux
    *   Total Lumens per Luminaire = 2 lamps/luminaire $\times$ 3200 lm/lamp = 6400 lm
    *   CU = 0.6
    *   LLMF = 0.85

    *   **Total Luminous Flux Required ($\Phi_{total}$):**
        $\Phi_{total} = \frac{E \times A}{\text{CU} \times \text{LLMF}} = \frac{500 \, \text{lx} \times 48 \, m^2}{0.6 \times 0.85} = \frac{24000}{0.51} \approx 47058.8 \, \text{lm}$

    *   **Number of Luminaires Needed (N):**
        $N = \frac{\Phi_{total}}{\text{Lumens per Luminaire}} = \frac{47058.8 \, \text{lm}}{6400 \, \text{lm/luminaire}} \approx 7.35$
        Round up to **8 luminaires**.

    *   **Total Wattage:**
        Wattage per luminaire = 2 lamps $\times$ 40 W/lamp = 80 W
        Total Wattage = 8 Luminaires $\times$ 80 W/luminaire = **640 W**

2.  **Spacing and Layout:**
    *   Mounting Height ($H$) = 3m
    *   Recommended S/H Ratio = 1.3
    *   Maximum Spacing ($S$) = $1.3 \times 3m = 3.9m$

    *   **Layout Arrangement for 8 Luminaires:**
        Room dimensions: 8m x 6m.
        We need to arrange 8 luminaires. A grid of 4 columns along the 8m length and 2 rows along the 6m width would give $4 \times 2 = 8$ luminaires.
        *   Spacing along 8m length: $8m / (4-1) = 8m / 3 \approx 2.67m$. Spacing from walls would be $2.67m/2 \approx 1.33m$. This is less than the maximum of 3.9m, which is good for uniformity.
        *   Spacing along 6m width: $6m / (2-1) = 6m / 1 = 6m$. Spacing from walls would be $6m/2 = 3m$. This spacing (6m) is slightly more than the maximum recommended spacing (3.9m). This might lead to lower uniformity in the width direction.

        **Alternative Layout:**
        Consider a grid of 3 rows and 3 columns ($3 \times 3 = 9$ luminaires, close to 8).
        *   Spacing along 8m length: $8m / (3-1) = 8m / 2 = 4m$. This is slightly more than 3.9m, so it's on the edge of acceptable.
        *   Spacing along 6m width: $6m / (3-1) = 6m / 2 = 3m$. This is less than 3.9m.
        This layout (3x3, 9 luminaires) would provide slightly better uniformity but requires one more luminaire. If 8 luminaires must be used, the 4x2 arrangement is a starting point, but adjustments might be needed to improve uniformity along the width. Perhaps reducing the spacing along the length to $8m/3 \approx 2.67m$ and along the width to $6m/1 = 6m$ is acceptable if the luminaire has a wide distribution.

3.  **Maintenance Factor (MF):**
    *   **Importance:** MF accounts for the gradual decrease in light output over time due to lamp aging and the accumulation of dirt on lamps and luminaires. It ensures that the lighting design meets the required illuminance level throughout the maintenance cycle, not just when the system is new. Using an appropriate MF prevents under-lighting as the installation ages.
    *   **Factors Influencing MF:**
        *   **Environment:** Dust, smoke, humidity in the air.
        *   **Luminaire Enclosure:** Open types are more affected than enclosed ones.
        *   **Maintenance Schedule:** Frequency of cleaning and lamp replacement.
        *   **Lamp Lumen Maintenance:** The inherent depreciation of light output of the lamp itself.
    *   **Typical Ranges:**
        *   Clean environment, frequent maintenance: 0.7 - 0.8
        *   Moderately dirty, periodic maintenance: 0.6 - 0.7
        *   Dirty environment, infrequent maintenance: 0.4 - 0.6

4.  **Illuminance vs. Luminance:**
    *   **Illuminance (E):** The luminous flux incident on a unit area of a surface ($lm/m^2$ or lux). It's a measure of the light *falling onto* a surface.
    *   **Luminance (L):** The luminous intensity per unit area of a surface or light source in a given direction ($cd/m^2$). It's a measure of the light *reflected from* or *emitted by* a surface, as perceived by the eye.
    *   **Importance of Luminance Control:** Controlling luminance is crucial for visual comfort and preventing glare. Surfaces or luminaires that are too bright (high luminance) can cause discomfort glare, reducing visibility and causing eye strain. Disability glare, caused by veiling luminance, can significantly impair vision. Proper luminance distribution and contrast are essential for effective seeing and visual well-being.

5.  **Coefficient of Utilisation (CU):**
    *   **Definition:** The ratio of the luminous flux effectively utilized on the working plane to the total luminous flux emitted by the lamps. It quantifies how efficiently the light from the lamps reaches the intended work area, considering all internal luminaire and room losses.
    *   **Key Factors Affecting CU:**
        1.  **Room Index (RI):** Determined by the room's dimensions and mounting height.
        2.  **Surface Reflectances:** The reflectivity of the ceiling, walls, and floor.
        3.  **Luminaire Characteristics:** Light distribution pattern, luminaire efficiency, and design.
        4.  **Luminaire Position:** How the luminaire is placed relative to the room surfaces.

---

## Important Points to Remember:

*   **Lumen Method:** A primary tool for interior lighting design calculations.
*   **CU and LLMF/MF:** These factors are critical for accurate illuminance calculations. Always check manufacturer data for CU definitions.
*   **Indian Standards (IS Codes):** Essential for compliance and ensuring appropriate lighting levels and practices.
*   **Uniformity:** Crucial for visual comfort and task performance. Aim for UR $\ge$ 0.6-0.7.
*   **S/H Ratio:** Guides luminaire spacing to achieve desired uniformity.
*   **Glare:** A major concern that must be addressed through luminaire selection and layout.
*   **Energy Efficiency:** Prioritize high efficacy lamps (like LEDs) and efficient luminaire designs.
*   **Practical Layouts:** Balancing calculations with architectural constraints and aesthetic considerations.

This module provides the foundational knowledge for designing effective and efficient interior lighting schemes. Remember to always refer to the latest relevant standards and manufacturer data for precise calculations and selections.
