---
title: "Lighting design calculations - Definitions of Luminous flux, Luminous intensity, Illuminance. Illumination calculation, factors affecting Coefficients of Utilisation (CoU) - Light Loss Factor (LLF)."
subject: "ELECTRICAL SYSTEM DESIGN AND ESTIMATION"
module: "Module 2: General requirements for electrical installations"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3654b"
status: "completed"
scrapedAt: "2026-05-23T16:27:11.318Z"
---
Sure, here are detailed study notes for the topic "Lighting design calculations" within Module 2 of "Electrical System Design and Estimation," incorporating your specified learning outcomes, course outcomes, textbooks, and reference books.

---

# Module 2: General Requirements for Electrical Installations

## Topic: Lighting Design Calculations

This topic delves into the fundamental concepts and calculations necessary for designing effective and efficient lighting systems. Understanding these principles is crucial for ensuring adequate illumination levels, visual comfort, and energy efficiency in various electrical installations, aligning with Indian Standards (IS codes) and the National Building Code of India.

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the basic photometric quantities used in lighting design.
*   Define and differentiate between luminous flux, luminous intensity, and illuminance.
*   Perform basic illumination calculations to determine the number of luminaires required for a given space.
*   Identify and explain the factors affecting the Coefficient of Utilisation (CoU).
*   Understand the concept of the Light Loss Factor (LLF) and its components.

### Course Outcomes Addressed

*   **CO1 (K2):** Understand the Indian standards and code of practice for efficient and effective energy usage with various electrical system design components. (This topic directly addresses the foundational photometric principles and calculation methods that underpin efficient lighting design as mandated by codes like the National Lighting Code 2010 and NBC of India 2016).

---

### 1. Key Concepts and Definitions

#### 1.1 Photometric Quantities

Photometry is the science of the measurement of light, especially the measurement of the intensity and spectral distribution of electromagnetic radiation in the range of visible wavelengths.

*   **Luminous Flux (Φ)**
    *   **Definition:** Luminous flux is the measure of the total quantity of visible light emitted by a source per unit of time. It represents the "amount of light" the source produces.
    *   **Unit:** Lumen (lm)
    *   **Analogy:** Think of it like the total amount of water flowing from a tap per minute.
    *   **Importance:** It's the primary characteristic of a light source, indicating its overall light output.

*   **Luminous Intensity (I)**
    *   **Definition:** Luminous intensity is the luminous flux emitted by a point source in a particular direction per unit solid angle. It describes how concentrated the light is in a specific direction.
    *   **Unit:** Candela (cd)
    *   **Relationship with Luminous Flux:** $I = \frac{d\Phi}{d\Omega}$, where $d\Phi$ is the luminous flux in a solid angle $d\Omega$.
    *   **Analogy:** Think of a spotlight; it has a high luminous intensity in a narrow beam, meaning the luminous flux is concentrated in that direction. A floodlight spreads its flux over a wider area, resulting in lower luminous intensity in any single direction.
    *   **Importance:** Crucial for understanding how a luminaire distributes light and for calculating illuminance at a specific point.

*   **Illuminance (E)**
    *   **Definition:** Illuminance is the measure of the amount of luminous flux incident on a surface per unit area. It represents the density of light falling on a surface.
    *   **Unit:** Lux (lx)
    *   **Relationship with Luminous Intensity:** $E = \frac{I}{d^2}$ (for a point source, where $I$ is the luminous intensity and $d$ is the distance from the source). This is known as the **Inverse Square Law**.
    *   **Analogy:** Think of the amount of sunlight hitting a square meter of ground.
    *   **Importance:** This is the primary quantity we aim to achieve in lighting design to ensure adequate visibility for the task or space.

#### 1.2 Derived Photometric Quantities

*   **Luminance (L)**
    *   **Definition:** Luminance is the luminous intensity of any surface per unit area of the surface projected perpendicular to the direction of observation. It describes the brightness of a surface.
    *   **Unit:** Candela per square meter ($cd/m^2$) or Nit.
    *   **Importance:** Affects visual comfort and glare. While not directly calculated in basic illumination design, it's a crucial consideration for the overall quality of lighting.

*   **Illumination Unit Conversion:**
    *   1 Lux = 1 Lumen per square meter ($lm/m^2$)
    *   1 Foot-candle = 1 Lumen per square foot ($lm/ft^2$)
    *   1 Foot-candle $\approx$ 10.76 Lux

---

### 2. Illumination Calculation (The Lumen Method/Average Illuminance Method)

This method is widely used for calculating the average illuminance over a horizontal work plane in a room. It's a practical approach for determining the number of luminaires needed.

**Formula:**

$E_{avg} = \frac{\Phi \times N \times CoU \times LLF}{A}$

Where:

*   $E_{avg}$: Average illuminance on the work plane (in lux)
*   $\Phi$: Luminous flux per luminaire (in lumens) - obtained from luminaire manufacturer's data.
*   $N$: Number of luminaires required.
*   $CoU$: Coefficient of Utilisation (dimensionless) - represents the ratio of luminous flux effective in the room to the total flux generated by the lamps.
*   $LLF$: Light Loss Factor (dimensionless) - accounts for the depreciation of light output over time.
*   $A$: Area of the room or work plane (in square meters, $m^2$).

**Steps for Calculation:**

1.  **Determine the required average illuminance ($E_{avg}$):** This is based on the type of activity or space, as specified in standards like the National Lighting Code 2010 or NBC of India 2016. (See CO1).
    *   *Example:* For general office work, a typical requirement might be 300-500 lux.
2.  **Select the light source (lamp) and luminaire:** Choose appropriate lamps (e.g., LED, fluorescent) and luminaires based on the required illuminance, energy efficiency, and aesthetic considerations. Obtain the total luminous flux ($\Phi$) per luminaire from the manufacturer's specifications.
3.  **Determine the Light Loss Factor (LLF):** This is a critical factor for long-term performance. LLF will be discussed in detail later.
4.  **Determine the Coefficient of Utilisation (CoU):** This is a crucial factor that depends on the room geometry, surface reflectances, and the luminaire's light distribution characteristics. This will also be discussed in detail.
5.  **Calculate the number of luminaires ($N$):** Rearrange the formula:
    $N = \frac{E_{avg} \times A}{\Phi \times CoU \times LLF}$

**Example Calculation:**

Let's design lighting for an office space with the following characteristics:

*   Room dimensions: 10 m (length) x 8 m (width) x 3 m (height)
*   Required average illuminance ($E_{avg}$): 400 lux
*   Luminaire selected: LED panel with a luminous flux ($\Phi$) of 4000 lumens per luminaire.
*   Estimated CoU: 0.75 (This would be obtained from luminaire data and room properties)
*   Estimated LLF: 0.80 (This would be calculated based on maintenance schedules and lamp type)

**Calculations:**

1.  **Area of the room (A):** $A = 10 \text{ m} \times 8 \text{ m} = 80 \text{ m}^2$
2.  **Number of luminaires (N):**
    $N = \frac{400 \text{ lx} \times 80 \text{ m}^2}{4000 \text{ lm} \times 0.75 \times 0.80}$
    $N = \frac{32000}{2400}$
    $N \approx 13.33$

Since we cannot install a fraction of a luminaire, we round up to the nearest whole number.
**Therefore, we need 14 luminaires.**

**Important Note:** The lumen method provides an *average* illuminance. To ensure uniformity, the spacing of luminaires should also be considered, often referencing luminaire manufacturer guidelines or lighting design software.

---

### 3. Factors Affecting Coefficient of Utilisation (CoU)

The Coefficient of Utilisation (CoU) is a critical factor that accounts for the efficiency of light transfer from the lamp to the work plane. It's essentially the ratio of lumens reaching the work plane to the lumens generated by the lamps. A higher CoU means more light reaches the desired area.

**Factors affecting CoU:**

*   **Room Index (RI):**
    *   **Definition:** A dimensionless quantity representing the geometry of the room. It relates the room dimensions to the light distribution from the luminaire.
    *   **Formula:** $RI = \frac{L \times W}{H_t \times (L + W)}$
        *   $L$: Length of the room
        *   $W$: Width of the room
        *   $H_t$: Height from the light source (luminaire) to the work plane (mounting height). This is often referred to as "effective height."
    *   **Significance:** Rooms with a low RI (long and narrow) generally have lower CoU compared to rooms with a high RI (square-shaped), as light has more chances to escape or be absorbed before reaching the work plane.

*   **Surface Reflectances:**
    *   **Definition:** The percentage of light that is reflected from the surfaces of the room (ceiling, walls, floor).
    *   **Types of Surfaces:**
        *   Ceiling reflectance ($\rho_c$)
        *   Wall reflectance ($\rho_w$)
        *   Floor reflectance ($\rho_f$)
    *   **Significance:**
        *   **High Reflectances:** Lighter colors reflect more light, allowing it to bounce around the room and reach the work plane, thus increasing the CoU.
        *   **Low Reflectances:** Darker colors absorb more light, reducing the amount that reaches the work plane and decreasing the CoU.
    *   **Reference:** Lighting design guides and manufacturer data often provide tables or charts for CoU based on Room Index and specific surface reflectances. (Referencing the National Lighting Code 2010 and Luminaire manufacturers' technical data is crucial here).

*   **Luminaire Light Distribution Characteristics:**
    *   **Definition:** The way a luminaire distributes its light in different directions. This is typically shown in a **luminous intensity distribution curve (polar curve)** provided by the manufacturer.
    *   **Significance:**
        *   **Direct Luminaires:** Direct most of their light downwards. They are efficient for tasks where light is needed directly on the work plane, but can be less effective in distributing light evenly in rooms with low ceiling reflectances.
        *   **Indirect Luminaires:** Direct most of their light towards the ceiling and upper walls, which then reflect the light downwards. They provide a softer, more diffused illumination and can improve CoU in rooms with high ceiling reflectances, but are generally less efficient overall.
        *   **Semi-direct/Semi-indirect/General Diffuse Luminaires:** Exhibit characteristics between direct and indirect types.
    *   **Reference:** The CoU tables provided by luminaire manufacturers are based on their specific light distribution patterns.

*   **Luminaire Dirt Depreciation (LDD):**
    *   **Definition:** The reduction in light output due to dirt accumulation on the luminaire's diffusing or optical components.
    *   **Significance:** Affects the amount of light that can escape the luminaire, directly impacting the CoU. This is often implicitly included in CoU tables or handled by LLF.

**Example Illustrating CoU Dependency:**

Consider two identical rooms of the same dimensions and with the same luminaires.
*   **Room A:** White walls, ceiling, and floor (high reflectances).
*   **Room B:** Dark grey walls, ceiling, and floor (low reflectances).

The CoU for Room A will be significantly higher than for Room B, meaning fewer luminaires will be needed in Room A to achieve the same average illuminance.

---

### 4. Light Loss Factor (LLF)

The Light Loss Factor (LLF), also known as the Lamp Lumen Depreciation (LLD) Factor and Luminaire Dirt Depreciation (LDD) Factor, is a crucial multiplier used in lighting calculations to account for the reduction in light output of a lighting system over time. It ensures that the initial design illuminance can be maintained throughout the life of the lamps and luminaires.

**LLF Formula:**

$LLF = LLD \times LDD \times (\text{other factors})$

Where:

*   **Lamp Lumen Depreciation (LLD):**
    *   **Definition:** The percentage of the initial luminous flux that a lamp retains over its operating life. Lamps do not maintain their full lumen output throughout their lifespan; they gradually degrade.
    *   **Value:** Typically less than 1. For example, a lamp might retain 80% of its initial lumens at the end of its rated life, so its LLD would be 0.80. This value is provided by lamp manufacturers.
    *   **Importance:** Accounts for the aging of the lamp.

*   **Luminaire Dirt Depreciation (LDD):**
    *   **Definition:** The percentage of initial lumens that a luminaire can deliver after a period of dirt accumulation on its surfaces and optics, without cleaning.
    *   **Value:** Typically less than 1. The value depends on the environment (clean, moderately dirty, or dirty), the type of luminaire (enclosed, vented, etc.), and the cleaning schedule.
    *   **Factors influencing LDD:**
        *   **Environment:** Industrial environments with dust or smoke will have lower LDD values (more light loss) than clean office environments.
        *   **Luminaire Type:** Enclosed luminaires with sealed diffusers generally have higher LDD values (less light loss) than open or vented luminaires.
        *   **Cleaning Schedule:** Regular cleaning of luminaires will improve the LDD value.
    *   **Reference:** Tables of LDD factors are available in lighting handbooks and from luminaire manufacturers, often categorized by environmental conditions and luminaire types.

*   **Other Factors (often included or considered separately):**
    *   **Lamp Burnout (or premature failure):** While LLF primarily deals with depreciation, a factor can be included for expected lamp failures before the end of their average life, especially in systems with individual lamp switching.
    *   **Ballast Factor (BF):** For fluorescent and HID lamps, the ballast's performance affects the light output. This is often incorporated into the lamp's stated lumen output but can sometimes be a separate consideration.
    *   **Room Surface Dirt Depreciation (RSDD):** Dirt accumulation on walls and ceilings can also reduce the amount of reflected light, but this is often implicitly handled by using lower reflectance values in the CoU calculation rather than a separate LLF component.
    *   **Temperature Effects:** Some lamps' lumen output can be affected by ambient temperature.

**Determining LLF for Design:**

*   **Worst-Case Scenario:** For critical applications, designers often use a conservative LLF (e.g., 0.70-0.80) to ensure adequate light levels even with less frequent maintenance.
*   **Maintenance Schedule:** If a specific cleaning and relamping schedule is planned, the LLF can be calculated more precisely based on the expected LLD and LDD at the time of maintenance.
    *   *Example:* If luminaires are cleaned every 12 months and lamps are replaced every 24 months, and the LDD at 12 months is 0.85 and the LDD at 24 months is 0.75, and the LLD of the lamp at 24 months is 0.80, the LLF for a 24-month maintenance cycle would be approximately $0.80 \times 0.75 = 0.60$.

**Importance of LLF:**

By incorporating LLF into the calculation, we ensure that the initial lumen output of the luminaires is higher than what is theoretically required, so that as the system ages and depreciates, the illuminance level remains above the minimum acceptable threshold. This aligns with the goal of energy-efficient design by avoiding over-lighting from the start.

---

### 5. Important Points to Remember

*   **Units are Crucial:** Always ensure consistency in units (lumens, candelas, lux, square meters).
*   **Manufacturer Data is Key:** The lumen output ($\Phi$), luminous intensity distribution curves, and recommended CoU values for luminaires are provided by manufacturers. Always refer to this data.
*   **Standards for Illuminance:** Refer to the National Lighting Code 2010 and NBC of India 2016 for recommended illuminance levels for different tasks and spaces. This is fundamental for CO1.
*   **CoU and LLF are Estimates:** These values are often derived from tables and estimations. For precise designs, lighting design software is often used, which employs more sophisticated algorithms.
*   **Work Plane Height:** The height of the work plane ($H_t$) is critical for calculating the Room Index and applying the inverse square law. Typically, it's considered to be 0.85 meters above the floor for office environments.
*   **Uniformity:** While the lumen method gives average illuminance, also consider the uniformity ratio (minimum illuminance / average illuminance) to avoid dark spots or excessive brightness variations.
*   **Glare Control:** While not directly part of the lumen method calculation, glare is a critical aspect of good lighting design and should be addressed by selecting appropriate luminaires and placement.

---

### 6. Practice Questions and Exercises

**Question 1:**
Define Luminous Flux, Luminous Intensity, and Illuminance. State their respective units.

**Answer 1:**
*   **Luminous Flux (Φ):** The total quantity of visible light emitted by a source per unit of time. Unit: Lumen (lm).
*   **Luminous Intensity (I):** The luminous flux emitted by a point source in a particular direction per unit solid angle. Unit: Candela (cd).
*   **Illuminance (E):** The measure of the amount of luminous flux incident on a surface per unit area. Unit: Lux (lx).

**Question 2:**
A classroom measuring 12m x 10m with a mounting height of 3m requires an average illuminance of 300 lux. Luminaires with a total luminous flux of 5000 lumens are to be used. The estimated CoU is 0.70 and the LLF is 0.85. Calculate the number of luminaires required.

**Answer 2:**
*   Area (A) = 12m * 10m = 120 $m^2$
*   $E_{avg}$ = 300 lux
*   $\Phi$ = 5000 lumens
*   CoU = 0.70
*   LLF = 0.85

$N = \frac{E_{avg} \times A}{\Phi \times CoU \times LLF}$
$N = \frac{300 \text{ lx} \times 120 \text{ m}^2}{5000 \text{ lm} \times 0.70 \times 0.85}$
$N = \frac{36000}{2975}$
$N \approx 12.1$

Rounding up, **13 luminaires** are required.

**Question 3:**
List and briefly explain at least three factors that affect the Coefficient of Utilisation (CoU) of a luminaire.

**Answer 3:**
1.  **Room Index (RI):** This dimensionless quantity represents the room's geometry (length, width, and mounting height). Rooms with different dimensions will have different light distribution patterns, affecting the CoU.
2.  **Surface Reflectances:** The reflectivity of the ceiling, walls, and floor. Higher reflectances (lighter colors) allow more light to be reflected onto the work plane, increasing the CoU.
3.  **Luminaire Light Distribution Characteristics:** How a luminaire distributes light (e.g., direct, indirect, spread of the beam). Luminaires with different light distribution patterns will have different CoU values for the same room and surface conditions.

**Question 4:**
What is the purpose of the Light Loss Factor (LLF)? Name its two main components.

**Answer 4:**
The purpose of the LLF is to account for the reduction in light output of a lighting system over time due to factors like lamp aging and dirt accumulation. This ensures that the required illuminance is maintained throughout the operational life of the installation.
The two main components are:
1.  **Lamp Lumen Depreciation (LLD):** Reduction in light output due to lamp aging.
2.  **Luminaire Dirt Depreciation (LDD):** Reduction in light output due to dirt accumulation on the luminaire.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 7. References and Further Reading

*   **National Electrical Code, Bureau of Indian Standards:** Provides general safety and installation requirements, forming the basis for electrical system design.
*   **National Lighting Code 2010, Bureau of Indian Standards:** This is the primary reference for lighting design parameters, including recommended illuminance levels, glare considerations, and efficiency standards in India.
*   **National Building Code of INDIA 2016, Bureau of Indian Standards:** Contains broader building design guidelines, including those related to lighting and electrical services.
*   **Electrical Systems Design by M. K. Giridharan:** Offers comprehensive coverage of electrical system design principles, potentially including detailed discussions on lighting calculations.
*   **Electrical Design Estimating Costing by K. B. Raina, S. K. Bhattacharya:** Provides insights into cost estimation, which is directly linked to the number and type of luminaires selected based on lighting design calculations.
*   **A Course in Electrical Installation Estimating and Costing by J. B. Gupta:** Similar to Raina & Bhattacharya, it offers practical aspects of costing based on design.

---

This comprehensive set of notes covers the essential definitions, calculation methods, and factors influencing lighting design as per your requirements, with a focus on aligning with Indian standards and codes relevant to Course Outcome 1.