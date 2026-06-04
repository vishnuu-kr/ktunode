---
title: "Calculation of luminance and illumination in case of linear source, round source and flat source. Measuring apparatus- Goniophotometer, Integrating sphere, luxmeter"
subject: "ILLUMINATION TECHNOLOGY"
module: "Module 2: Measurements of Light : Definitions and units – Luminous flux & Lumen, luminous intensity & Candela, illuminance& Lux, Luminance &Candela/m2, luminous efficacy, colour temperature, Candle power."
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35fe2"
status: "completed"
scrapedAt: "2026-05-23T16:16:38.281Z"
---
# ILLUMINATION TECHNOLOGY: Module 2 - Measurements of Light

## Topic: Calculation of Luminance and Illumination for Different Light Sources & Measuring Apparatus

### 1. Introduction to Light Measurement

Understanding and quantifying light is crucial for designing effective and comfortable lighting systems. This module introduces the fundamental concepts of light measurement, focusing on key photometric quantities, their units, and the methods used to obtain these measurements.

**Course Outcome Alignment:** CO3 (Evaluate measurements of light using definitions, units, laws of illumination, and measurement apparatus.) - This topic directly addresses the evaluation of light measurements.

---

### 2. Key Definitions and Units

This section revisits and expands on fundamental photometric terms essential for understanding calculations.

*   **Luminous Flux ($\Phi$)**:
    *   **Definition:** The total amount of visible light emitted by a source per unit time. It's the "quantity of light" produced.
    *   **Unit:** **Lumen (lm)**
    *   **Concept:** Imagine a light bulb emitting light in all directions. Luminous flux is the sum of all the light power that reaches the eye, weighted by the eye's sensitivity at different wavelengths.
    *   **Relation to Radiant Flux:** Luminous flux is derived from radiant flux (total electromagnetic energy) by considering the human eye's spectral sensitivity curve.
    *   **Reference:** Lindsey, Chapter 2: "Photometry and Radiometry" - Discusses the conversion from radiant flux to luminous flux using the luminosity function.

*   **Luminous Intensity ($I$)**:
    *   **Definition:** The luminous flux emitted by a point source per unit solid angle in a particular direction.
    *   **Unit:** **Candela (cd)**
    *   **Concept:** While luminous flux tells us the total light output, luminous intensity tells us how concentrated that light is in a specific direction. Think of a spotlight versus a bare bulb.
    *   **Formula:** $I = \frac{d\Phi}{d\Omega}$ (where $\Omega$ is the solid angle)
    *   **Reference:** Pritchard, Chapter 3: "Light Sources and Measurements" - Explains the concept of luminous intensity and its directional dependence.

*   **Candle Power (CP)**:
    *   **Definition:** An older term for luminous intensity, often used historically.
    *   **Unit:** Historically, it was based on the light emitted by a standard candle.
    *   **Relationship to Candela:** 1 cp ≈ 0.981 cd. For most modern applications, Candela is the preferred unit.
    *   **Important Note:** While still encountered in older literature, it's generally superseded by Candela.

*   **Illuminance ($E$)**:
    *   **Definition:** The luminous flux incident on a surface per unit area. It's the amount of light falling *onto* a surface.
    *   **Unit:** **Lux (lx)** (1 lx = 1 lm/m²)
    *   **Concept:** This is what we perceive as the brightness of a surface receiving light. The same luminous flux will result in higher illuminance on a smaller area.
    *   **Formula (for a point source):** $E = \frac{I \cos \theta}{d^2}$ (Inverse Square Law and Cosine Law)
        *   $I$: Luminous intensity of the source in the direction of the surface.
        *   $\theta$: Angle between the light rays and the surface normal.
        *   $d$: Distance from the source to the surface.
    *   **Reference:** Zumtobel Lighting Handbook, Section 1.2 "Light Properties" - Defines illuminance and provides examples of typical lux levels for various tasks.

*   **Luminance ($L$)**:
    *   **Definition:** The luminous intensity of a surface per unit projected area in a given direction. It's what we perceive as the brightness of an object or light source itself.
    *   **Unit:** **Candela per square meter (cd/m²)** (also known as Nit)
    *   **Concept:** Luminance describes how "bright" a surface appears to the observer. It depends on the illuminance on the surface, its reflectivity (or its own emission), and the viewing angle.
    *   **Formula (for a perfectly diffuse surface):** $L = \frac{E}{\pi}$ (This is a simplified case; in general, $L = \frac{I_{surface}}{A_{projected}}$)
    *   **Reference:** Lindsey, Chapter 2: "Photometry and Radiometry" - Explains luminance as perceived brightness and its dependency on material properties.

*   **Luminous Efficacy**:
    *   **Definition:** The ratio of the total luminous flux emitted by a light source to the electrical power consumed by the source. It measures how efficiently a light source converts electrical energy into visible light.
    *   **Unit:** **Lumens per Watt (lm/W)**
    *   **Concept:** A higher luminous efficacy means a more energy-efficient light source.
    *   **Example:** An incandescent bulb might have an efficacy of 15 lm/W, while an LED can have an efficacy of over 100 lm/W.
    *   **Reference:** Pritchard, Chapter 3: "Light Sources and Measurements" - Compares the luminous efficacy of different lamp technologies.

*   **Colour Temperature**:
    *   **Definition:** A characteristic of visible light that has important applications in photography, videography, interior design, and other fields. It is typically described in terms of Kelvin (K).
    *   **Concept:** It describes the color appearance of light emitted by a luminous body. For incandescent lamps, it is the temperature to which a black body radiator must be heated to emit light of a specific color. For other sources, it's a correlated color temperature (CCT) that approximates this.
    *   **Examples:**
        *   Candle flame: ~1800 K (warm, reddish)
        *   Incandescent bulb: ~2700-3000 K (warm white)
        *   Fluorescent lamps: ~4000-5000 K (neutral to cool white)
        *   Daylight: ~5000-6500 K (cool, bluish-white)
    *   **Reference:** Zumtobel Lighting Handbook, Section 1.3 "Light Color" - Details color temperature and its impact on visual perception.

---

### 3. Calculation of Luminance and Illuminance for Different Light Sources

This section delves into applying photometric principles to practical scenarios.

#### 3.1. Linear Source (e.g., Fluorescent Tube, Linear LED)

Linear sources are common in general lighting. Calculating illuminance and luminance requires integrating the contribution of each infinitesimal segment of the source.

*   **Assumptions:**
    *   The source is uniformly luminous along its length.
    *   We are calculating illuminance on a point at a certain distance and angle from the source.
    *   Luminance is usually calculated from the source's surface itself.

*   **Calculating Illuminance ($E$):**
    *   Consider an infinitesimal element of the linear source ($dl$) with luminous intensity $dI$.
    *   The luminous flux emitted by this element is $d\Phi = dI \cdot d\Omega$.
    *   For a point at distance $d$ from $dl$, making an angle $\theta$ with the normal to the source at $dl$, the illuminance on a surface perpendicular to the light ray is $dE = \frac{dI \cos \phi}{r^2}$, where $\phi$ is the angle between the light ray and the normal to the surface, and $r$ is the distance from $dl$ to the point.
    *   If the source is emitting uniformly in all directions perpendicular to its length, and we consider a point directly below its center, the calculation involves integration.
    *   **Simplified approach for a point directly below the center of a linear source of length $L$:**
        *   Let the source have a uniform luminous intensity per unit length, $i$ (cd/m).
        *   Consider an element $dl$ at a distance $x$ from the midpoint of the source.
        *   The distance $r$ to a point P at a height $h$ below the midpoint is $r = \sqrt{h^2 + x^2}$.
        *   The angle $\phi$ between the ray from $dl$ to P and the vertical (normal to the surface at P) is such that $\cos \phi = \frac{h}{r} = \frac{h}{\sqrt{h^2 + x^2}}$.
        *   The illuminance contribution from $dl$ at P is $dE = \frac{i dl \cos \phi}{r^2} = \frac{i dl \cdot \frac{h}{\sqrt{h^2 + x^2}}}{h^2 + x^2} = \frac{ih \, dl}{(h^2 + x^2)^{3/2}}$.
        *   To get the total illuminance, integrate from $x = -L/2$ to $x = L/2$:
            $E = \int_{-L/2}^{L/2} \frac{ih \, dx}{(h^2 + x^2)^{3/2}}$
            *   This integral can be solved using trigonometric substitution or standard integral formulas.
            *   The result is $E = \frac{iLh}{h^2(h^2 + (L/2)^2)^{1/2}}$. (This formula simplifies further if $h \gg L$, approaching the inverse square law, or if $L \gg h$, becoming more constant).

*   **Calculating Luminance ($L$):**
    *   For a diffuse linear source, its luminance is often considered uniform and directly related to its luminous intensity per unit length. If the source has luminous intensity $i$ (cd/m) and a projected area $A_{proj}$ in the direction of view, $L = \frac{i}{A_{proj}}$. For a tube of diameter $D$, the projected area is $D \times L$. However, for a cylindrical source viewed from the side, the projected area is effectively its diameter. For a flat linear source, it's its width times length.
    *   More accurately, luminance is related to the luminous flux emitted per unit area of the source's surface.

*   **Reference:** Simons & Bean, Chapter 4: "Light Sources and Their Properties" - Provides detailed mathematical treatments for calculating illuminance from linear sources.

#### 3.2. Round Source (e.g., Bare Lamp, Sphere)

*   **Assumptions:**
    *   The source is a sphere emitting light uniformly in all directions (or has a defined intensity distribution).
    *   We are calculating illuminance on a surface at a distance from the sphere.

*   **Calculating Illuminance ($E$):**
    *   **For a point directly below the center of a spherical source:**
        *   If the source emits uniformly in all directions, its total luminous flux is $\Phi$.
        *   Its luminous intensity in any direction is $I = \frac{\Phi}{4\pi}$ (since $4\pi$ is the total solid angle).
        *   Using the Inverse Square Law and Cosine Law: $E = \frac{I \cos \theta}{d^2}$
            *   $I$: Luminous intensity of the source.
            *   $\theta$: Angle between the light ray and the surface normal.
            *   $d$: Distance from the *center* of the sphere to the point.
    *   **Considering the finite size of the sphere:** For points very close to the sphere, the inverse square law is less accurate. We need to integrate the contributions from all visible points on the sphere.
        *   This involves calculating the illuminance from each elemental area on the sphere's surface, considering its distance, the angle of emission, and the angle of incidence.
        *   **Special Case: Illuminance at the surface of a diffuse sphere:** If we are considering illuminance on a point *on* the surface of a diffuse sphere, it's related to the source's luminance.

*   **Calculating Luminance ($L$):**
    *   **For a perfectly diffusing spherical source:** Its luminance is uniform in all directions and is given by $L = \frac{\Phi}{4\pi A_{proj}}$. For a sphere of radius $R$, the projected area in any direction is $\pi R^2$. So, $L = \frac{\Phi}{4\pi (\pi R^2)}$.
    *   **Alternatively, if the source has a known luminous intensity $I$:** $L = \frac{I}{A_{proj}}$.
    *   **Reference:** IS:3646-1992 (Indian Standard Code of Practice for Artificial Lighting of Public Buildings) might contain guidelines or formulas related to illuminance calculations for common light sources.

#### 3.3. Flat Source (e.g., Panel Light, Diffuse Surface)

*   **Assumptions:**
    *   The source is a flat plane, emitting light uniformly or with a defined distribution.
    *   We are calculating illuminance on a surface parallel or perpendicular to the source.

*   **Calculating Illuminance ($E$):**
    *   **For a large, flat, uniformly luminous source (approaching an infinite plane):**
        *   The illuminance at any point directly in front of the plane is constant and equal to $E = L \cdot \frac{\pi}{2}$ (or $E = \pi L$ if the formula assumes incidence from a hemisphere, check references for exact formulation). The key is that the distance and angle dependencies of the inverse square law "cancel out" over the large area.
        *   **Formula:** $E = \pi L$ for an ideal lambertian surface emitting light over a hemisphere. More precisely, $E = L \times (\text{aperture solid angle})$. For a very large flat source viewed from directly in front, the aperture is effectively a hemisphere.
    *   **For a small flat rectangular or circular source:**
        *   We need to integrate the illuminance contribution from each elemental area of the source.
        *   Consider a small element $dA$ on the source. Its luminous flux is $d\Phi = L \cdot dA \cdot \frac{d\Omega}{\text{steradians in emission}}$. For a diffuse emitter, $d\Phi = L \cdot dA \cdot \pi$ is not correct. The flux from $dA$ is $d\Phi = L \cdot dA \cdot \cos\theta_e \cdot d\Omega$, where $\theta_e$ is the emission angle from the normal of the source surface.
        *   The illuminance at a point P is $E = \int_{Source} \frac{d\Phi \cos \theta_i}{r^2}$, where $\theta_i$ is the incidence angle at P and $r$ is the distance.
        *   **Example:** Illuminance at a point below the center of a rectangular panel of size $W \times H$. This involves complex integration. Often, pre-calculated tables or lighting design software are used.
    *   **Reference:** Simons & Bean, Chapter 4: "Light Sources and Their Properties" - Offers methods for calculating illuminance from planar sources.

*   **Calculating Luminance ($L$):**
    *   For a flat, uniformly diffusing panel, the luminance is typically specified by the manufacturer.
    *   If not specified, and the total luminous flux $\Phi$ and the emitting area $A_{emit}$ are known, and assuming diffuse emission, $L = \frac{\Phi}{A_{emit}}$. This is a simplified view; the angular distribution of flux from the panel is critical.
    *   For a surface illuminated and then reflecting light, $L = E \cdot \rho \cdot \frac{1}{\pi}$ for a perfectly diffuse reflector, where $\rho$ is the diffuse reflectance.

#### **Important Point for Calculations:**
*   **Uniformity:** Assume uniform emission unless specified otherwise.
*   **Directionality:** The luminous intensity distribution curve (polar curve) is crucial for accurate calculations, especially for non-uniform sources.
*   **Integration:** Many calculations involve integration, especially for extended sources. Lighting design software automates this.

---

### 4. Measuring Apparatus

These instruments are used to measure the photometric quantities defined earlier.

#### 4.1. Goniophotometer

*   **Purpose:** Measures the luminous intensity distribution of a light source or luminaire.
*   **How it Works:**
    *   The light source/luminaire is mounted on a rotating platform.
    *   A detector (photometer head) is placed at a fixed distance and angle.
    *   The source/luminaire is rotated (or the detector is moved) to measure luminous intensity in various directions.
    *   The results are often plotted as a polar curve.
*   **Information Obtained:** Luminous intensity ($I$) in different directions, total luminous flux ($\Phi$), and luminous efficacy.
*   **Reference:** Lindsey, Chapter 2: "Photometry and Radiometry" - Describes the function and types of goniophotometers.
*   **Importance:** Essential for understanding the light distribution pattern of any luminaire.

#### 4.2. Integrating Sphere

*   **Purpose:** Measures the total luminous flux of a light source or luminaire.
*   **How it Works:**
    *   A hollow sphere coated internally with a highly reflective, diffuse material (e.g., BaSO4).
    *   The light source is placed inside the sphere.
    *   The internal reflections distribute the light uniformly throughout the sphere.
    *   A small detector (photometer head), usually shielded from direct light, measures the uniform illuminance inside the sphere.
    *   The measurement is calibrated using a known standard lamp.
*   **Information Obtained:** Total luminous flux ($\Phi$). By measuring the power consumed, luminous efficacy can be calculated.
*   **Reference:** Pritchard, Chapter 3: "Light Sources and Measurements" - Explains the principle and use of integrating spheres.
*   **Important Note:** Requires careful baffling to prevent direct light from reaching the detector.

#### 4.3. Luxmeter (Illuminance Meter)

*   **Purpose:** Measures the illuminance on a surface.
*   **How it Works:**
    *   Consists of a detector (photodiode) that is sensitive to visible light and often corrected for spectral response to match the human eye (V(λ) function).
    *   The detector is placed on the surface where illuminance is to be measured.
    *   The meter displays the reading in Lux.
*   **Information Obtained:** Illuminance ($E$) in lux.
*   **Reference:** Zumtobel Lighting Handbook, Section 3.1 "Measuring Instruments" - Provides details on luxmeters and their calibration.
*   **Important Note:** The orientation of the luxmeter sensor is crucial, as it measures illuminance on a plane. It should be placed parallel to the plane of interest (e.g., desktop, floor).

---

### 5. Practice Questions and Answers

**Question 1:** A point source has a luminous intensity of 500 cd. Calculate the illuminance on a surface placed 3 meters away, when the surface is perpendicular to the light rays.
**Answer:**
Using the Inverse Square Law: $E = \frac{I}{d^2}$
$I = 500$ cd
$d = 3$ m
$E = \frac{500 \text{ cd}}{(3 \text{ m})^2} = \frac{500}{9} \text{ lx} \approx 55.56 \text{ lx}$

**Question 2:** If the surface in Question 1 is tilted so that the light rays make an angle of 60 degrees with the surface normal, what is the illuminance?
**Answer:**
Using the Inverse Square Law and Cosine Law: $E = \frac{I \cos \theta}{d^2}$
$I = 500$ cd
$d = 3$ m
$\theta = 60^\circ$
$E = \frac{500 \text{ cd} \cdot \cos 60^\circ}{(3 \text{ m})^2} = \frac{500 \cdot 0.5}{9} \text{ lx} = \frac{250}{9} \text{ lx} \approx 27.78 \text{ lx}$

**Question 3:** A luminaire emits a total luminous flux of 4000 lumens and consumes 40 watts of power. What is its luminous efficacy?
**Answer:**
Luminous Efficacy = $\frac{\text{Total Luminous Flux}}{\text{Power Consumed}}$
Luminous Efficacy = $\frac{4000 \text{ lm}}{40 \text{ W}} = 100 \text{ lm/W}$

**Question 4:** A bare incandescent lamp is approximated as a point source with a luminous intensity of 100 cd. If you want to achieve an illuminance of 200 lx on a desk directly below the lamp, how far should the lamp be mounted above the desk?
**Answer:**
$E = \frac{I}{d^2}$
$200 \text{ lx} = \frac{100 \text{ cd}}{d^2}$
$d^2 = \frac{100 \text{ cd}}{200 \text{ lx}} = 0.5 \text{ m}^2$
$d = \sqrt{0.5} \text{ m} \approx 0.707 \text{ m}$

**Question 5:** A flat, diffuse panel light has a luminance of 2000 cd/m². What is the illuminance on a surface directly below it, assuming the panel is large enough to be considered infinite?
**Answer:**
For a large, flat, diffuse source, $E = \pi L$ (assuming light is emitted into a hemisphere).
$L = 2000 \text{ cd/m}^2$
$E = \pi \times 2000 \text{ cd/m}^2 \approx 6283 \text{ lx}$

---

### 6. Important Points to Remember

*   **Distinguish:** Clearly differentiate between luminous flux (total light output), luminous intensity (light in a direction), illuminance (light falling on a surface), and luminance (brightness of a surface/source).
*   **Units:** Always use the correct units (lm, cd, lx, cd/m², lm/W, K).
*   **Inverse Square Law:** Applies to point sources and assumes the distance is large compared to the source dimensions.
*   **Cosine Law:** Accounts for the angle of incidence of light on a surface.
*   **Luminance is Key:** For perceived brightness and visual comfort, luminance is often more critical than illuminance.
*   **Source Type Matters:** Calculations for linear, round, and flat sources differ significantly due to their geometry and how their luminous output is distributed.
*   **Measurement Tools:** Each measuring apparatus has a specific purpose and measures a particular photometric quantity.

---

### 7. Alignment with Course Outcomes

*   **CO1 (K4):** Understanding these definitions and units (luminous flux, intensity, illuminance, luminance, efficacy, color temperature) is fundamental to analyzing the qualities of lighting and factors affecting visual perception. Calculating these quantities helps in quantifying effects like glare (related to high luminance) or color appearance.
*   **CO2 (K3):** While this topic focuses on measurement, the understanding of luminous flux and intensity distribution from different lamp types (linear, round) is a precursor to applying methods of artificial lighting schemes and understanding lamp/luminaire principles.
*   **CO3 (K5):** This topic directly addresses CO3 by explaining how to evaluate measurements using definitions, units, laws of illumination (inverse square, cosine), and the specific measuring apparatus (goniophotometer, integrating sphere, luxmeter). The calculation examples and formulas are key to this evaluation.
*   **CO4 (K6) & CO5 (K6):** The ability to calculate illuminance and luminance accurately is essential for designing efficient interior and outdoor lighting systems. For instance, knowing how to calculate illuminance on a desk (CO4) or a roadway (CO5) ensures that the required light levels are met and that visual comfort and safety are achieved.

---

This comprehensive set of notes provides a strong foundation for understanding light measurements and calculations for various sources, along with the tools used for these measurements. It emphasizes the practical application of these concepts in illumination technology.
