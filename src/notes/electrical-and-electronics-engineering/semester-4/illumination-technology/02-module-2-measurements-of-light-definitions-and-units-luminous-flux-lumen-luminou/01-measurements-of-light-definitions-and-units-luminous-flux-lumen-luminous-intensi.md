---
title: "Measurements of Light : Definitions and units – Luminous flux & Lumen, luminous intensity & Candela, illuminance& Lux, Luminance &Candela/m2, luminous efficacy, colour temperature, Candle power."
subject: "ILLUMINATION TECHNOLOGY"
module: "Module 2: Measurements of Light : Definitions and units – Luminous flux & Lumen, luminous intensity & Candela, illuminance& Lux, Luminance &Candela/m2, luminous efficacy, colour temperature, Candle power."
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35fdf"
status: "completed"
scrapedAt: "2026-05-23T16:16:36.170Z"
---
# Illumination Technology: Module 2 - Measurements of Light

This module introduces the fundamental concepts and units used to measure and quantify light in illumination engineering. Understanding these measurements is crucial for designing effective and efficient lighting systems, as it allows us to objectively assess light levels, quality, and performance.

**Course Outcome Alignment:**

*   **CO3:** Evaluate measurements of light using definitions, units, laws of illumination, and measurement apparatus. (Knowledge Level: K5) - This module directly addresses this outcome by defining and explaining the key measurement quantities and their units.

**Learning Outcomes Covered:**

*   Definitions and units of photometric quantities: Luminous flux, luminous intensity, illuminance, luminance.
*   Understanding the relationship between these quantities.
*   Understanding the concept of luminous efficacy.
*   Understanding the concept of color temperature.
*   Understanding the historical unit of candle power.

---

## 1. Introduction to Photometry

Photometry is the science of the measurement of light, specifically visible light. It quantifies light in terms of its perceived effect on the human eye. This is different from radiometry, which measures electromagnetic radiation in general, regardless of whether it is visible.

---

## 2. Key Photometric Quantities and Units

### 2.1. Luminous Flux ($\Phi_v$)

*   **Definition:** Luminous flux is the total amount of visible light emitted by a source per unit time. It is the radiant flux of visible light, weighted by the luminosity function, which represents the human eye's sensitivity to different wavelengths. In simpler terms, it's the "quantity of light" a source produces.

*   **Unit:** Lumen (lm)

*   **Symbol:** $\Phi_v$ or $\Phi$

*   **Explanation:** Imagine a light bulb emitting light in all directions. Luminous flux measures the total "output" of light from that bulb. It's a measure of the power of visible light.

*   **Example:** A typical 60W incandescent lamp produces about 800 lumens, while a 10W LED lamp can produce a similar amount of lumens, demonstrating luminous efficacy.

*   **Reference:** Lindsey (1991) likely defines luminous flux as the total perceived light power. Pritchard (2016) might emphasize its connection to radiometric power. The Lighting Handbook (Zumtobel) will undoubtedly provide practical values for various light sources.

---

### 2.2. Luminous Intensity ($I_v$)

*   **Definition:** Luminous intensity is the luminous flux emitted by a point source per unit solid angle in a particular direction. It describes how bright a light source appears when viewed from a specific direction.

*   **Unit:** Candela (cd)

*   **Symbol:** $I_v$

*   **Explanation:** While luminous flux is the total light output, luminous intensity tells us how concentrated that light is in a specific direction. A spotlight has high luminous intensity in its beam, while a bare bulb has lower luminous intensity in any single direction but high total luminous flux.

*   **Relationship to Luminous Flux:**
    *   For an isotropic (uniform in all directions) source, $\Phi_v = 4\pi I_v$.
    *   The solid angle ($\Omega$) is measured in steradians (sr).
    *   $I_v = \frac{d\Phi_v}{d\Omega}$ (Luminous flux per unit solid angle).

*   **Example:** A laser pointer has a very high luminous intensity in a narrow beam, even though its total luminous flux might be low. A street lamp is designed to have high luminous intensity in the downward direction to illuminate the road.

*   **Reference:** Lindsey (1991) will explain this as the directional output. Pritchard (2016) might discuss how luminous intensity is measured using goniophotometers. The Lighting Handbook (Zumtobel) will provide luminous intensity data for different luminaires.

---

### 2.3. Illuminance ($E_v$)

*   **Definition:** Illuminance is the luminous flux incident on a surface per unit area. It measures how much light falls onto a specific surface.

*   **Unit:** Lux (lx)

*   **Symbol:** $E_v$

*   **Explanation:** This is what we often perceive as "brightness" on a surface. It's the density of light on a plane.

*   **Relationship to Luminous Intensity and Distance (Inverse Square Law):**
    *   For a point source, $E_v = \frac{I_v \cos \theta}{d^2}$, where:
        *   $I_v$ is the luminous intensity in the direction of the surface.
        *   $\theta$ is the angle between the direction of the light and the normal to the surface.
        *   $d$ is the distance from the source to the surface.
    *   **Important Note:** This law applies when the distance $d$ is large compared to the dimensions of the light source.

*   **Example:** The illuminance on a desk under a ceiling lamp tells us how well the desk is lit. A classroom might require 500 lux, while a corridor might only need 100 lux.

*   **Reference:** Lindsey (1991) will detail the inverse square law and its applications in calculations. Pritchard (2016) will likely discuss the practical implications of illuminance levels for various tasks. The Lighting Handbook (Zumtobel) will provide recommended illuminance values for different environments.

---

### 2.4. Luminance ($L_v$)

*   **Definition:** Luminance is the luminous intensity per unit projected area of a light source or a reflecting surface in a given direction. It measures how bright a surface *appears* to the observer, considering both the light emitted or reflected and the surface's apparent size.

*   **Unit:** Candela per square meter (cd/m²), also known as a Nit.

*   **Symbol:** $L_v$

*   **Explanation:** Luminance is the perception of brightness. Two surfaces with the same illuminance can appear to have different brightness if one is more reflective or has a different color. It's a measure of the "lightness" of a surface.

*   **Relationship to Illuminance and Reflectance:**
    *   For a diffusely reflecting surface, $L_v = E_v \times \rho / \pi$, where $\rho$ is the diffuse reflectance of the surface.
    *   For a light-emitting surface, $L_v = I_v / A_{proj}$, where $A_{proj}$ is the projected area of the source in the direction of observation.

*   **Example:** A white paper under a lamp might have a lower illuminance than a black piece of cloth under the same lamp, but the white paper will appear much brighter due to its higher reflectance. The luminance of a computer screen is a key factor in its perceived brightness.

*   **Reference:** Lindsey (1991) will explain luminance as the perceived brightness. Pritchard (2016) might discuss its role in visual comfort and glare. The Lighting Handbook (Zumtobel) will likely mention luminance limits to control glare.

---

### 2.5. Candle Power (CP)

*   **Definition:** Candle power is an older, now largely superseded, unit of luminous intensity. Historically, it was based on the light emitted by a standard candle.

*   **Unit:** Candle Power (CP) or sometimes Hefnerkerze (HK) or Carcel lamp.

*   **Relationship to Candela:**
    *   1 Candela is approximately equal to 1 Candle Power (though historical definitions varied slightly).
    *   The international candela replaced the various national standards of candle power.

*   **Explanation:** This unit highlights the historical development of light measurement. While no longer the primary unit, understanding it provides context for the evolution of photometric units.

*   **Reference:** Older textbooks like Lindsey (1991) might still use or refer to candle power. Cayless (1996) might discuss its historical significance.

---

### 2.6. Luminous Efficacy

*   **Definition:** Luminous efficacy is the ratio of the luminous flux produced by a light source to the electrical power consumed by that source. It measures how efficiently a light source converts electrical energy into visible light.

*   **Unit:** Lumens per Watt (lm/W)

*   **Symbol:** $\eta$ (eta)

*   **Explanation:** This is a critical metric for energy efficiency in lighting. A higher luminous efficacy means a light source produces more light for the same amount of energy.

*   **Example:**
    *   Incandescent lamps: 10-17 lm/W
    *   Fluorescent lamps: 50-100 lm/W
    *   LED lamps: 70-150+ lm/W

*   **Reference:** All textbooks (Lindsey, Pritchard, Zumtobel) will extensively discuss luminous efficacy as it's central to modern lighting design and energy conservation. DiLouie (2005) on lighting controls will likely link efficacy to system performance.

---

### 2.7. Colour Temperature

*   **Definition:** Colour temperature is a characteristic of visible light that has important applications in photography, videography, stage lighting, and illumination engineering. It describes the perceived color of light emitted by a black-body radiator as it is heated. It's expressed in Kelvin (K).

*   **Unit:** Kelvin (K)

*   **Explanation:**
    *   **Low Colour Temperatures (e.g., 2000K - 3000K):** Appear warm, with more red and yellow hues. Think of candlelight or incandescent bulbs.
    *   **Medium Colour Temperatures (e.g., 3500K - 4500K):** Appear neutral or slightly warm.
    *   **High Colour Temperatures (e.g., 5000K - 6500K+):** Appear cool, with more blue hues. Think of daylight or fluorescent lamps.

*   **Important Distinction:** Colour temperature is a descriptor of light appearance, not the actual temperature of the light source itself (except for black-body radiators).

*   **Correlated Colour Temperature (CCT):** For light sources that are not true black-body radiators (like LEDs or fluorescent lamps), we use Correlated Colour Temperature (CCT). It represents the color temperature of the black-body radiator whose perceived color most closely matches that of the light source.

*   **Example:** A cozy living room might use lamps with a CCT of 2700K for a warm ambiance, while an office might use 4000K for a more neutral and productive environment. Daylight has a CCT of around 5500K-6500K.

*   **Reference:** Pritchard (2016) and The Lighting Handbook (Zumtobel) will cover color temperature in detail, discussing its impact on ambiance and task performance. Lindsey (1991) may also touch upon it.

---

## 3. Laws of Illumination

While not explicitly requested as a "definition" in the topic, the laws governing illuminance are crucial for understanding how light levels are achieved.

### 3.1. The Inverse Square Law (Revisited)

*   **Principle:** The illuminance ($E_v$) on a surface is inversely proportional to the square of the distance ($d$) from a point source of light.

*   **Formula:** $E_v \propto \frac{1}{d^2}$

*   **Explanation:** As you move further away from a light source, the light spreads out over a larger area, thus reducing the illuminance on any given unit area of the surface.

### 3.2. The Cosine Law (Lambert's Cosine Law)

*   **Principle:** The illuminance ($E_v$) on a surface is directly proportional to the cosine of the angle of incidence ($\theta$) between the light rays and the normal to the surface.

*   **Formula:** $E_v \propto \cos \theta$

*   **Explanation:** Light rays striking a surface perpendicularly ($\theta = 0^\circ$, $\cos 0^\circ = 1$) provide maximum illuminance. As the angle of incidence increases, the light rays spread over a larger area of the surface, and the illuminance decreases.

---

## 4. Measurement Apparatus

*   **Light Meters (Illuminance Meters/Photometers):** These instruments are used to measure illuminance. They typically consist of a sensor (photodiode or photovoltaic cell) that converts light into an electrical signal, which is then processed and displayed as a lux value.

    *   **Calibration:** Light meters are calibrated to be sensitive to the same spectral distribution as the human eye (using the CIE luminosity function).
    *   **Use:** They are held flat on the surface where the illuminance is to be measured.

*   **Goniophotometers:** Used to measure the luminous intensity distribution of a light source or luminaire. They rotate the light source or a detector to capture intensity values in various directions.

*   **Spectroradiometers:** Measure the spectral distribution of light, which is essential for understanding color rendering and color temperature.

*   **Reference:** The Lighting Handbook (Zumtobel) will likely illustrate various measurement instruments. Simons & Bean (2020) will provide practical details on using these for calculations.

---

## 5. Practical Considerations and Important Points

*   **Interrelation of Units:** Understand how luminous flux, luminous intensity, and illuminance are related. Luminous flux is the total output, luminous intensity is the output in a direction, and illuminance is the light received by a surface.
*   **Perception vs. Measurement:** Luminance is key to perceived brightness, while illuminance is the objective measure of light falling on a surface.
*   **Energy Efficiency:** Luminous efficacy (lm/W) is the primary metric for energy-efficient lighting.
*   **Color Temperature Impact:** Choose appropriate color temperatures for different applications to create desired moods and support visual tasks.
*   **Directionality:** Luminous intensity is crucial for directional lighting (e.g., spotlights, streetlights), while total flux is important for general area lighting.
*   **Standards:** Indian Standards (IS Codes: IS:1944-1970, IS:10322-1982, IS:3646-1992, IS:2440-1975, IS:6665-1972) and the National Lighting Code (SP72:2010) provide specific recommended illuminance levels and guidelines for various environments.

---

## 6. Practice Questions

**Question 1:**
A point source emits 1000 lumens of luminous flux uniformly in all directions. What is its luminous intensity?
(a) 1000 cd
(b) 1000/$\pi$ cd
(c) 1000/(4$\pi$) cd
(d) 1000/(2$\pi$) cd

**Question 2:**
If the illuminance on a surface is 100 lux and the surface has a diffuse reflectance of 0.5, what is the luminance of the surface?
(a) 50 cd/m²
(b) 15.9 cd/m²
(c) 31.8 cd/m²
(d) 100 cd/m²

**Question 3:**
A lamp has a luminous efficacy of 120 lm/W. If it consumes 15W of power, what is its total luminous flux output?
(a) 1800 lumens
(b) 120 lumens
(c) 8 lumens
(d) 15 lumens

**Question 4:**
Which unit measures the total amount of visible light emitted by a source per unit time?
(a) Lux
(b) Candela
(c) Lumen
(d) Nit

**Question 5:**
Describe the difference between luminous flux and luminous intensity, providing an example for each.

---

## 7. Answers to Practice Questions

**Answer 1:**
(c) 1000/(4$\pi$) cd
*   **Explanation:** For an isotropic source, $\Phi_v = 4\pi I_v$. Therefore, $I_v = \Phi_v / (4\pi) = 1000 / (4\pi)$ cd.

**Answer 2:**
(b) 15.9 cd/m²
*   **Explanation:** Luminance ($L_v$) of a diffuse surface is given by $L_v = (E_v \times \rho) / \pi$.
    $L_v = (100 \text{ lux} \times 0.5) / \pi = 50 / \pi \approx 15.9 \text{ cd/m²}$.

**Answer 3:**
(a) 1800 lumens
*   **Explanation:** Luminous Flux ($\Phi_v$) = Luminous Efficacy ($\eta$) $\times$ Power (P).
    $\Phi_v = 120 \text{ lm/W} \times 15 \text{ W} = 1800 \text{ lumens}$.

**Answer 4:**
(c) Lumen
*   **Explanation:** Lumen is the unit of luminous flux, which represents the total visible light emitted.

**Answer 5:**
*   **Luminous Flux ($\Phi_v$):** This measures the total quantity of visible light emitted by a source in all directions per unit time. It's like the total "amount" of light produced.
    *   **Example:** A standard household bulb might have a luminous flux of 800 lumens. This tells you the overall light output without regard to direction.

*   **Luminous Intensity ($I_v$):** This measures the luminous flux emitted by a point source per unit solid angle in a specific direction. It tells you how bright the source appears from a particular viewpoint.
    *   **Example:** A spotlight has a high luminous intensity in the direction of its beam, concentrating its luminous flux into a narrow cone. A bare bulb has low luminous intensity in any single direction but high total luminous flux.

---

This comprehensive study of photometric units and concepts will form the foundation for understanding lighting calculations and design principles in subsequent modules.
