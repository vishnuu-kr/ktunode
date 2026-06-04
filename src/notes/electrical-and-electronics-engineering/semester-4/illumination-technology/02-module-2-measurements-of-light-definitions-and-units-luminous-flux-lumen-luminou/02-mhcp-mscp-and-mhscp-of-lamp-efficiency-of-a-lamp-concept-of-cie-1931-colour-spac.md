---
title: "M.H.C.P., M.S.C.P. and M.H.S.C.P. of lamp, Efficiency of a lamp, Concept of CIE 1931 colour space"
subject: "ILLUMINATION TECHNOLOGY"
module: "Module 2: Measurements of Light : Definitions and units – Luminous flux & Lumen, luminous intensity & Candela, illuminance& Lux, Luminance &Candela/m2, luminous efficacy, colour temperature, Candle power."
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35fe0"
status: "completed"
scrapedAt: "2026-05-23T16:16:36.871Z"
---
# ILLUMINATION TECHNOLOGY: Module 2: Measurements of Light

## Topic: Lamp Characteristics and Color Space

This section delves into the practical aspects of characterizing lamps, understanding their efficiency, and exploring the concept of color perception through the CIE 1931 color space. This builds upon the fundamental definitions of photometric quantities covered previously.

**Course Outcomes Addressed:** CO1 (K4), CO2 (K3), CO3 (K5), CO4 (K6), CO5 (K6)

---

### 1. Mean Horizontal Candle Power (M.H.C.P.)

**Key Concept:** The average luminous intensity of a light source in the horizontal plane.

*   **Definition:** M.H.C.P. is the average of the luminous intensity readings taken around the lamp at a constant angle of 0 degrees (horizontal). It represents the lamp's average output in its "sideways" direction.
*   **Calculation:**
    $$ \text{M.H.C.P.} = \frac{\sum_{0^\circ}^{360^\circ} \text{Luminous Intensity at } \theta}{N} $$
    Where:
    *   $\theta$ is the angle in the horizontal plane.
    *   $N$ is the number of measurements taken (typically 360 for a full circle, or a representative sample).
*   **Significance:** It provides a single value to represent the lamp's general performance in a common orientation, often used for comparing lamps intended for general illumination.

---

### 2. Mean Spherical Candle Power (M.S.C.P.)

**Key Concept:** The average luminous intensity of a light source in all directions.

*   **Definition:** M.S.C.P. is the average luminous intensity of a light source over all solid angles of the sphere surrounding it. It's a more comprehensive measure of the lamp's total light output.
*   **Calculation:** M.S.C.P. is the luminous flux (lumens) divided by $4\pi$ (steradians), which is the solid angle of a sphere.
    $$ \text{M.S.C.P.} = \frac{\text{Total Luminous Flux (lumens)}}{4\pi} $$
*   **Relationship with Luminous Flux:** M.S.C.P. is directly proportional to the total luminous flux emitted by the lamp.
*   **Significance:** This is a fundamental measure of a lamp's overall light-producing capability, regardless of its directional output. It's crucial for calculating illuminance on surfaces in any direction.
*   **Reference:** M.A. Cayless, Lamps and Lighting, discusses the importance of M.S.C.P. in understanding lamp output (p. 45).

---

### 3. Mean Horizontal Spherical Candle Power (M.H.S.C.P.)

**Key Concept:** A specific measure of average luminous intensity, often derived from M.H.C.P. and other readings.

*   **Definition:** This term can sometimes be used interchangeably or in conjunction with M.S.C.P., but it typically refers to an average of intensities measured in the horizontal plane and projected spherically, or a weighted average derived from various angular distributions. In some contexts, it might refer to the average of M.H.C.P. and other specific zones.
*   **Practicality:** While M.S.C.P. is the most accurate measure of total output, M.H.C.P. is often used as a practical proxy. The term M.H.S.C.P. might arise in older literature or specific applications.
*   **Note:** For most modern applications and lamp comparisons, M.S.C.P. (derived from total lumen output) and M.H.C.P. are the most commonly used and understood metrics.

---

### 4. Efficiency of a Lamp

**Key Concept:** The ratio of the total luminous flux emitted by a lamp to the electrical power consumed.

*   **Definition:** Lamp efficiency quantifies how effectively a lamp converts electrical energy into visible light.
*   **Calculation:**
    $$ \text{Efficiency (lumens per watt, lm/W)} = \frac{\text{Total Luminous Flux (lumens)}}{\text{Electrical Power Input (watts)}} $$
*   **Units:** Lumens per Watt (lm/W).
*   **Factors Affecting Efficiency:**
    *   **Lamp Type:** Incandescent, fluorescent, LED, HID lamps have vastly different efficiencies.
    *   **Ballast/Driver Efficiency:** For fluorescent and LED lamps, the efficiency of the auxiliary electronic components affects the overall system efficiency.
    *   **Operating Conditions:** Voltage fluctuations, temperature, and lamp age can impact efficiency.
*   **Significance:** A critical factor in energy conservation and operational cost reduction. Higher efficiency means more light for the same amount of energy.
*   **Example:**
    *   An incandescent lamp might have an efficiency of 10-15 lm/W.
    *   A fluorescent lamp might range from 70-100 lm/W.
    *   An LED lamp can achieve 100-200+ lm/W.
*   **Reference:** Applied Illumination Engineering by Jack L. Lindsey provides detailed comparisons of lamp efficiencies (Chapter 3).

---

### 5. Luminous Efficacy

**Key Concept:** This is another term for lamp efficiency, representing the ratio of luminous flux to electrical power.

*   **Definition:** Luminous efficacy is the measure of how well a light source produces visible light. It's essentially the "light output per unit of energy consumed."
*   **Units:** Lumens per Watt (lm/W).
*   **Distinction from Luminous Efficacy of Radiation:** While related, "luminous efficacy of radiation" refers to the efficacy of radiation at a specific wavelength, with the maximum being at 555 nm. The luminous efficacy of a lamp is the overall system efficacy.
*   **Importance:** A primary metric for comparing the energy efficiency of different lighting technologies.

---

### 6. Colour Temperature

**Key Concept:** A descriptor of the spectral distribution of light emitted by a source, often characterized by the color it appears.

*   **Definition:** Colour temperature is defined by the temperature to which a black-body radiator must be heated to produce a light of the same chromaticity as the source. It is expressed in Kelvin (K).
*   **Black-Body Radiator:** A theoretical object that absorbs all incident electromagnetic radiation and does not reflect or transmit any. As it heats up, it emits radiation across a spectrum, and the "color" of this radiation changes with temperature.
*   **Interpreting Colour Temperature:**
    *   **Low Colour Temperatures (e.g., 2000K - 3000K):** Tend to produce warm, yellowish light, similar to candlelight or incandescent lamps. These are often used in residential settings for a cozy atmosphere.
    *   **Medium Colour Temperatures (e.g., 3500K - 4500K):** Produce neutral or white light, suitable for general office environments.
    *   **High Colour Temperatures (e.g., 5000K - 6500K and above):** Produce cool, bluish-white light, often associated with daylight or overcast skies. These can be stimulating and are used in task lighting or areas where alertness is desired.
*   **Correlated Colour Temperature (CCT):** For non-blackbody sources (like many LEDs and fluorescent lamps), the term "correlated colour temperature" is used. It's the temperature of the black-body radiator whose perceived colour most closely matches that of the light source.
*   **Significance:** Affects the mood, perception of color, and visual comfort in a space.
*   **Reference:** The Lighting Handbook by Zumtobel Lighting GmbH, July 2017, provides extensive information on color temperature and its application (Section 4.3). Lighting by D.C. Pritchard also details color temperature and its impact on visual perception (Chapter 5).
*   **Example:**
    *   Candlelight: ~1800K
    *   Incandescent Lamp: ~2700K
    *   Office Fluorescent: ~4000K
    *   Daylight (clear sky): ~6500K

---

### 7. Concept of CIE 1931 Colour Space

**Key Concept:** A standardized model of human color perception that describes all colors visible to the average human observer.

*   **Background:** The Commission Internationale de l'Éclairage (CIE) established this standard in 1931 to provide a consistent and objective way to describe and measure color.
*   **Basis:** It's based on extensive psychophysical experiments that determined how the human eye mixes three primary colors (red, green, and blue) to perceive all other colors.
*   **Key Components:**
    *   **Tristimulus Values (X, Y, Z):** These values represent the amount of each of the three primary "color-matching functions" needed to match a particular color stimulus. The Y value is particularly important as it often corresponds to the luminance (brightness) of the color.
    *   **CIE Chromaticity Diagram (xy Diagram):** This is a 2D projection of the 3D color space. It plots the chromaticity coordinates (x, y), where:
        $$ x = \frac{X}{X+Y+Z} $$
        $$ y = \frac{Y}{X+Y+Z} $$
        The "horseshoe" shape of this diagram represents the gamut of all perceivable colors. The points *outside* this horseshoe are not visible colors.
    *   **Location of Spectral Colors:** The curved boundary of the diagram represents the spectral colors (monochromatic light from violet to red).
    *   **Location of White:** The "white point" (typically around x=0.333, y=0.333 for pure white) is within the diagram. Lines extending from the white point represent the locus of constant color temperature (Planckian locus).
*   **Significance:**
    *   **Color Matching:** Used to ensure consistency in the color of light sources and colored surfaces.
    *   **Color Rendering:** Helps evaluate how accurately a light source reveals the colors of objects compared to a reference source (e.g., daylight).
    *   **Lighting Design:** Allows designers to specify and compare the color quality of different lamps and to understand how they will affect the appearance of a space.
    *   **Defining Color Standards:** Basis for many other color models and standards.
*   **Reference:** Applied Illumination Engineering by Jack L. Lindsey discusses color and its measurement, including the CIE system (Chapter 5). Lighting Engineering Applied Calculations by Simons and Bean may offer insights into the mathematical aspects and applications of the CIE color space (Chapter 7).
*   **Important Point:** The CIE 1931 color space is a model of *human perception*, not a physical model of light itself.

---

### Practice Questions

**Question 1:**
A certain lamp produces a total luminous flux of 1200 lumens and consumes 60 watts of electrical power. Calculate its luminous efficacy. If the lamp is designed to have an average horizontal intensity of 25 candelas in all horizontal directions, what is its M.H.C.P.?

**Answer 1:**
*   **Luminous Efficacy:**
    $$ \text{Luminous Efficacy} = \frac{1200 \text{ lumens}}{60 \text{ watts}} = 20 \text{ lm/W} $$
*   **M.H.C.P.:** Since the lamp is stated to have an average horizontal intensity of 25 candelas in *all* horizontal directions, its M.H.C.P. is 25 candelas.

**Question 2:**
What is the primary difference between M.H.C.P. and M.S.C.P.? Which metric is a better indicator of a lamp's total light output?

**Answer 2:**
*   **Difference:** M.H.C.P. is the average luminous intensity in the horizontal plane only, while M.S.C.P. is the average luminous intensity across all directions (over a sphere).
*   **Total Light Output:** M.S.C.P. is a better indicator of a lamp's total light output because it considers the luminous intensity in every direction. It is directly related to the total luminous flux emitted by the lamp ($ \text{M.S.C.P.} = \frac{\text{Total Luminous Flux}}{4\pi} $).

**Question 3:**
A lamp is described as having a color temperature of 4000K. What kind of light would you expect from this lamp, and in what type of environment might it be suitable?

**Answer 3:**
*   **Expected Light:** A color temperature of 4000K indicates a neutral to cool white light. It is neither overly warm (yellowish) nor overly cool (bluish).
*   **Suitable Environment:** This type of light is often found in general office environments, commercial spaces, or areas where good color rendering is needed without being overly stimulating or relaxing. It provides a good balance for tasks requiring visual acuity.

**Question 4:**
Explain the purpose of the CIE 1931 color space and the significance of the xy chromaticity diagram.

**Answer 4:**
*   **Purpose of CIE 1931 Color Space:** The CIE 1931 color space is a standardized model that aims to describe all colors perceivable by the average human observer. It was developed to provide an objective and consistent method for measuring, specifying, and comparing colors, based on human visual perception.
*   **Significance of xy Chromaticity Diagram:** The xy chromaticity diagram is a 2D representation derived from the 3D CIE color space. It plots the chromaticity coordinates (x, y), which are independent of luminance. Its significance lies in:
    *   **Visualizing the Gamut of Visible Colors:** The horseshoe shape clearly delineates all perceivable colors.
    *   **Color Mixing:** It's used to predict the resulting color when mixing different colored lights.
    *   **Color Consistency:** Designers can specify the desired chromaticity of a light source on this diagram.
    *   **Relationship to Color Temperature:** The Planckian locus (a curve on the diagram) shows the chromaticity of black-body radiators at different temperatures, allowing for the assessment of a source's color temperature.

---

### Important Points to Remember

*   **M.S.C.P.** is directly proportional to **total luminous flux** and is a comprehensive measure of a lamp's light output in all directions.
*   **M.H.C.P.** is a more practical, but less complete, measure of average intensity in the **horizontal plane**.
*   **Luminous Efficacy (lm/W)** is a key metric for **energy efficiency** in lighting.
*   **Color Temperature (K)** describes the **color appearance** of light, influencing mood and perception. Lower K = warmer (yellowish), Higher K = cooler (bluish).
*   The **CIE 1931 color space** is a universal standard for describing **human color perception**, with the **xy diagram** being its critical 2D representation for chromaticity.

---
