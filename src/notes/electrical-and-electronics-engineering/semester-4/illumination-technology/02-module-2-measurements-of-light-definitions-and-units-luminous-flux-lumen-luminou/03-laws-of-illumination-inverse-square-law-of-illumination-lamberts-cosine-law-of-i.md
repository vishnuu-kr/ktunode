---
title: "Laws of illumination – Inverse square law of illumination, Lambert’s cosine law of illumination, Numerical problems based of laws of illumination, Practical application of the laws, Polar curve in illumination, Rousseau’s construction"
subject: "ILLUMINATION TECHNOLOGY"
module: "Module 2: Measurements of Light : Definitions and units – Luminous flux & Lumen, luminous intensity & Candela, illuminance& Lux, Luminance &Candela/m2, luminous efficacy, colour temperature, Candle power."
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35fe1"
status: "completed"
scrapedAt: "2026-05-23T16:16:37.579Z"
---
# ILLUMINATION TECHNOLOGY - MODULE 2: MEASUREMENTS OF LIGHT & LAWS OF ILLUMINATION

This module delves into the fundamental principles of quantifying light and the laws that govern its distribution. Understanding these concepts is crucial for designing effective and efficient lighting systems, aligning with Course Outcomes CO3, CO4, and CO5.

## 2.1 Definitions and Units of Light Measurement

This section revisits and expands upon the basic photometric quantities and their units, as introduced in Module 1.

### 2.1.1 Luminous Flux ($\Phi$ or F)

*   **Definition:** The total quantity of visible light emitted by a source per unit time. It represents the "brightness" of the light source in terms of its perceived power by the human eye.
*   **Unit:** **Lumen (lm)**
*   **Concept:** Think of it as the "total amount of light" a source produces. Different light sources, even with the same power consumption, will produce different amounts of luminous flux depending on their spectral distribution and efficiency.
*   **Example:** A 60W incandescent bulb might produce around 800 lumens, while a comparable LED bulb can produce over 800 lumens with much lower wattage.

### 2.1.2 Luminous Intensity (I)

*   **Definition:** The luminous flux emitted by a point source in a particular direction per unit solid angle. It quantifies how much light is concentrated in a specific direction.
*   **Unit:** **Candela (cd)**
*   **Concept:** This is directional. A light source might emit a lot of flux overall, but if it's concentrated in a narrow beam, its luminous intensity in that direction will be high.
*   **Relationship:** $I = \frac{d\Phi}{d\Omega}$ (Luminous Intensity is the rate of change of Luminous Flux with respect to solid angle).
*   **Example:** The filament of a traditional light bulb has a high luminous intensity in certain directions, while a spotlight has a very high luminous intensity in a narrow beam.

### 2.1.3 Illuminance (E)

*   **Definition:** The luminous flux incident on a surface per unit area. It describes how much light falls *on* a surface.
*   **Unit:** **Lux (lx)**, where 1 lx = 1 lumen per square meter ($lm/m^2$).
*   **Concept:** This is what we perceive as the "brightness" of a surface. It depends on both the luminous flux of the source and the distance and angle at which the light strikes the surface.
*   **Relationship:** $E = \frac{d\Phi}{dA}$ (Illuminance is the rate of change of Luminous Flux with respect to area).
*   **Example:** A desk needs an illuminance of around 500 lux for comfortable reading, while a hallway might only need 100 lux.

### 2.1.4 Luminance (L)

*   **Definition:** The luminous intensity of a surface in a given direction per unit projected area of that surface. It describes how "bright" a surface appears to an observer.
*   **Unit:** **Candela per square meter ($cd/m^2$)**, also known as **Nit**.
*   **Concept:** This is about the light *coming from* the surface, whether it's emitted, reflected, or transmitted. It's what the eye perceives as brightness.
*   **Relationship:** $L = \frac{I}{A_{proj}}$, where $A_{proj}$ is the projected area perpendicular to the direction of observation.
*   **Example:** The screen of a smartphone or television has a certain luminance that determines how bright it appears. A white wall reflects incident light and thus has luminance.

### 2.1.5 Luminous Efficacy

*   **Definition:** A measure of how efficiently a light source converts electrical power into visible light. It's the ratio of luminous flux to electrical power consumed.
*   **Unit:** **Lumens per Watt (lm/W)**
*   **Concept:** A higher luminous efficacy means the light source is more energy-efficient.
*   **Relationship:** Luminous Efficacy = $\frac{\text{Luminous Flux (lm)}}{\text{Electrical Power (W)}}$
*   **Example:** Incandescent bulbs have low luminous efficacy (around 10-15 lm/W), while LEDs can have very high luminous efficacy (over 100 lm/W).

### 2.1.6 Colour Temperature

*   **Definition:** A characteristic of visible light that has a significant influence on the visual perception of its color. It is often described by the temperature to which a "blackbody radiator" would have to be heated to emit light of a similar spectral distribution to that of the light source.
*   **Unit:** **Kelvin (K)**
*   **Concept:**
    *   **Warm White (2700K - 3000K):** Yellowish light, creates a cozy and relaxed atmosphere (e.g., residential living rooms, bedrooms).
    *   **Neutral White (3500K - 4000K):** Balanced white light, good for general illumination (e.g., offices, retail stores).
    *   **Cool White/Daylight (5000K - 6500K):** Bluish-white light, appears crisp and stimulating, often used in task lighting or areas where alertness is desired (e.g., hospitals, garages, workshops).
*   **Example:** Sunrise light is "warm" (low color temperature), while midday sun is "cool" (high color temperature).

### 2.1.7 Candle Power

*   **Definition:** An older term, essentially synonymous with **Luminous Intensity** in a specific direction. Historically, the luminous intensity of a standard candle was used as a reference.
*   **Unit:** **Candela (cd)**
*   **Note:** While the term "candle power" is still sometimes used colloquially, "luminous intensity" is the preferred scientific term.

## 2.2 Laws of Illumination

These laws are fundamental to calculating illuminance levels and understanding how light is distributed from a source.

### 2.2.1 Inverse Square Law of Illumination

*   **Statement:** The illuminance (E) on a surface due to a point source of light is directly proportional to the luminous intensity (I) of the source and inversely proportional to the square of the distance (d) from the source to the surface.
*   **Formula:** $E \propto \frac{I}{d^2}$
*   **More Precisely:** When the surface is perpendicular to the light rays, $E = \frac{I}{d^2}$.
*   **Concept:** As you move further away from a light source, the light gets dimmer at an accelerating rate. If you double the distance, the illuminance drops to one-fourth. If you triple the distance, it drops to one-ninth.
*   **Assumptions:**
    *   The light source is a point source (its dimensions are negligible compared to the distance).
    *   The surface is perpendicular to the direction of the light rays.
*   **Derivation:** Consider a sphere of radius 'd' centered on a point source with luminous intensity 'I'. The luminous flux passing through this sphere is $4\pi I$ (since $I = \Phi/\Omega$ and the solid angle of a sphere is $4\pi$ steradians). The surface area of this sphere is $4\pi d^2$. Therefore, the illuminance on the surface of the sphere is $E = \frac{\text{Luminous Flux}}{\text{Area}} = \frac{4\pi I}{4\pi d^2} = \frac{I}{d^2}$.

### 2.2.2 Lambert's Cosine Law of Illumination

*   **Statement:** The illuminance on a surface is proportional to the cosine of the angle between the direction of the incident light rays and the normal to the surface.
*   **Formula:** $E = E_0 \cos\theta$
    *   Where $E_0$ is the illuminance when the light rays are perpendicular to the surface.
    *   $\theta$ is the angle between the incident light ray and the normal to the surface.
*   **Concept:** This law modifies the Inverse Square Law when the surface is not perpendicular to the light rays. The further the angle deviates from 0 degrees (perpendicular incidence), the less light falls on a given area.
*   **Derivation:** Imagine a surface element dA. If it's perpendicular to the light rays, the illuminance is $E_0$. If this same surface element is tilted by an angle $\theta$, the area presented to the light rays becomes $dA \cos\theta$. Since illuminance is flux per unit area, and the flux incident on the original area dA is the same, the illuminance on the tilted surface becomes $E = \frac{\text{Flux}}{dA_{projected}} = \frac{E_0 \cdot dA}{dA/\cos\theta} = E_0 \cos\theta$.
*   **Combined Law:** For a point source, the illuminance on a surface at a distance 'd' and at an angle $\theta$ with the normal to the surface is:
    $E = \frac{I \cos\theta}{d^2}$

### 2.2.3 Numerical Problems based on Laws of Illumination

**Example 1: Inverse Square Law**
A lamp of 200 candela is suspended at a height of 3 meters above a horizontal surface. Calculate the illuminance on the surface directly below the lamp.

*   **Given:**
    *   Luminous Intensity, $I = 200$ cd
    *   Distance, $d = 3$ m
    *   Surface is perpendicular to the light rays (directly below).
*   **Formula:** $E = \frac{I}{d^2}$
*   **Calculation:**
    $E = \frac{200 \text{ cd}}{(3 \text{ m})^2} = \frac{200}{9} \text{ lx} \approx 22.22 \text{ lx}$
*   **Answer:** The illuminance on the surface directly below the lamp is approximately 22.22 lux.

**Example 2: Combined Law (Inverse Square and Cosine Law)**
A lamp of 400 cd is placed 4 meters above the center of a circular table. Calculate the illuminance at the edge of the table, which is 3 meters away from the center.

*   **Given:**
    *   Luminous Intensity, $I = 400$ cd
    *   Height of lamp, $h = 4$ m
    *   Distance from center to edge of table, $r = 3$ m
*   **To find:** Illuminance at the edge of the table.
*   **First, calculate the distance 'd' from the lamp to the edge of the table:**
    This forms a right-angled triangle with height $h$ and base $r$.
    $d = \sqrt{h^2 + r^2} = \sqrt{(4 \text{ m})^2 + (3 \text{ m})^2} = \sqrt{16 + 9} = \sqrt{25} = 5$ m
*   **Next, calculate the angle $\theta$ between the light ray and the normal to the table surface at the edge:**
    The normal to the table surface is vertical. The light ray is the hypotenuse of the triangle.
    $\cos\theta = \frac{\text{Adjacent}}{\text{Hypotenuse}} = \frac{h}{d} = \frac{4 \text{ m}}{5 \text{ m}} = 0.8$
*   **Formula:** $E = \frac{I \cos\theta}{d^2}$
*   **Calculation:**
    $E = \frac{400 \text{ cd} \times 0.8}{(5 \text{ m})^2} = \frac{320}{25} \text{ lx} = 12.8 \text{ lx}$
*   **Answer:** The illuminance at the edge of the table is 12.8 lux.

**Example 3: Luminous Efficacy**
An LED bulb consumes 10 Watts of power and produces a luminous flux of 1200 lumens. Calculate its luminous efficacy.

*   **Given:**
    *   Power, $P = 10$ W
    *   Luminous Flux, $\Phi = 1200$ lm
*   **Formula:** Luminous Efficacy = $\frac{\Phi}{P}$
*   **Calculation:**
    Luminous Efficacy = $\frac{1200 \text{ lm}}{10 \text{ W}} = 120 \text{ lm/W}$
*   **Answer:** The luminous efficacy of the LED bulb is 120 lm/W.

### 2.2.4 Practical Application of the Laws

The Inverse Square Law and Lambert's Cosine Law are foundational for:

*   **Lighting Design:** Estimating illuminance levels on work surfaces, floors, and walls. This helps in determining the number and placement of luminaires (light fixtures) needed to achieve desired lighting levels for different tasks and spaces (CO4, CO5).
*   **Luminaire Selection:** Understanding how the luminous intensity distribution of a luminaire affects the illuminance at various points.
*   **Energy Efficiency:** By understanding how illuminance decreases with distance, designers can optimize luminaire placement to minimize energy consumption while meeting performance requirements.
*   **Troubleshooting:** Diagnosing why certain areas in a space are too dark or too bright by applying these laws.
*   **Standards Compliance:** Ensuring that the designed lighting meets the illuminance requirements specified in building codes and standards (e.g., National Lighting Code).

### 2.2.5 Polar Curve in Illumination

*   **Definition:** A polar curve (also known as a candle power distribution curve or luminous intensity distribution curve) is a graphical representation of the luminous intensity of a light source or luminaire in different directions. It's plotted on polar coordinates, with the radial distance representing luminous intensity and the angle representing the direction from the light source.
*   **Construction:**
    *   The center of the polar graph typically represents the light source.
    *   Radial lines represent different angles of distribution (often measured from the nadir, straight down).
    *   The distance from the center along a radial line indicates the luminous intensity in that direction.
*   **Types of Polar Curves:**
    *   **Symmetrical:** For lamps with uniform distribution in all horizontal directions (e.g., bare incandescent bulbs).
    *   **Asymmetrical:** For luminaires designed for specific applications, where light needs to be directed in particular ways (e.g., streetlights, floodlights, downlights).
*   **Information Conveyed:**
    *   **Distribution Pattern:** Whether the light is concentrated downwards, upwards, or spread evenly.
    *   **Maximum Intensity Direction:** The direction where the luminaire emits the most light.
    *   **Beam Angle:** The spread of the light beam.
*   **Example:**
    *   A luminaire with a polar curve showing high intensity directly downwards is suitable for task lighting on a desk.
    *   A luminaire with a polar curve showing significant distribution upwards and outwards might be used for general ambient lighting.
    *   Streetlights often have polar curves designed to direct light onto the roadway and sidewalks, minimizing light pollution upwards.

### 2.2.6 Rousseau's Construction

*   **Purpose:** Rousseau's construction is a graphical method used to determine the illuminance at any point on a surface from a point source, taking into account both the Inverse Square Law and Lambert's Cosine Law. It's particularly useful when dealing with extended sources or complex distribution patterns, though it's most directly applied to point sources.
*   **Principle:** It relies on constructing a rectangle where one side represents the luminous intensity in a given direction, and the adjacent side represents the cosine of the angle of incidence. The illuminance is then proportional to the area of this constructed rectangle.
*   **Construction Steps (for a point source):**
    1.  **Polar Curve:** Obtain the polar curve (luminous intensity distribution curve) of the light source.
    2.  **Select a Point:** Choose a point on the surface for which you want to calculate illuminance.
    3.  **Determine Distance and Angle:** From the light source to the chosen point, determine the distance 'd' and the angle $\theta$ between the light ray and the normal to the surface at that point.
    4.  **Construct the Rectangle:**
        *   Draw a line from the light source representing the luminous intensity $I$ in the direction of the point.
        *   From the end of this intensity line, draw a line perpendicular to it, representing the cosine of the angle $\theta$ (i.e., $I \cos\theta$).
        *   Complete the rectangle using these two lines as adjacent sides.
    5.  **Calculate Area:** The area of this rectangle is proportional to $I \cos\theta$.
    6.  **Apply Inverse Square Law:** The illuminance is then calculated using $E = \frac{\text{Area}}{d^2}$ (where the proportionality constant is adjusted based on the scaling of the polar curve and cosine values).
*   **Modern Application:** While historically significant, Rousseau's construction is now largely superseded by computer-aided design (CAD) software and lighting simulation tools, which can perform these calculations much faster and more accurately for complex scenarios. However, understanding the principle behind it provides insight into how these laws are integrated.

**Key Point to Remember:** Rousseau's construction essentially visualizes the product $I \cos\theta$ and then relates it to the distance squared.

## 3.0 Important Points to Remember

*   **Luminous Flux (lm)** is the total light output, **Luminous Intensity (cd)** is light in a specific direction, and **Illuminance (lx)** is the light falling on a surface.
*   **Luminance ($cd/m^2$)** is how bright a surface appears.
*   **Luminous Efficacy (lm/W)** is a key indicator of energy efficiency.
*   **Inverse Square Law ($E = I/d^2$)** applies when the surface is perpendicular to the light.
*   **Lambert's Cosine Law ($E = E_0 \cos\theta$)** accounts for the angle of incidence.
*   The combined formula is **$E = \frac{I \cos\theta}{d^2}$**.
*   **Polar curves** are essential for understanding the directional output of luminaires.
*   **Color temperature** significantly impacts the mood and perception of a space.
*   These laws and units are critical for **designing functional and comfortable lighting environments** and for **ensuring compliance with standards**.

## 4.0 Practice Questions

**Question 1:**
A lamp with a luminous intensity of 500 cd is placed 5 meters above a desk. Calculate the illuminance on the desk directly below the lamp.
*   **Answer:** $E = \frac{500 \text{ cd}}{(5 \text{ m})^2} = \frac{500}{25} = 20 \text{ lx}$

**Question 2:**
Using the lamp from Question 1 (500 cd, 5m height), calculate the illuminance at a point on the desk that is 4 meters horizontally away from the point directly below the lamp.
*   **Solution:**
    *   Height $h = 5$ m
    *   Horizontal distance $r = 4$ m
    *   Distance $d = \sqrt{h^2 + r^2} = \sqrt{5^2 + 4^2} = \sqrt{25 + 16} = \sqrt{41} \approx 6.40$ m
    *   $\cos\theta = \frac{h}{d} = \frac{5}{\sqrt{41}} \approx 0.781$
    *   $E = \frac{I \cos\theta}{d^2} = \frac{500 \text{ cd} \times \frac{5}{\sqrt{41}}}{(\sqrt{41} \text{ m})^2} = \frac{500 \times 5}{41 \times \sqrt{41}} \approx \frac{2500}{41 \times 6.40} \approx \frac{2500}{262.4} \approx 9.53 \text{ lx}$
*   **Answer:** The illuminance is approximately 9.53 lux.

**Question 3:**
A luminaire has a luminous flux of 1500 lumens and consumes 15 Watts of power. What is its luminous efficacy?
*   **Answer:** Luminous Efficacy = $\frac{1500 \text{ lm}}{15 \text{ W}} = 100 \text{ lm/W}$

**Question 4:**
Describe the difference between illuminance and luminance. Provide an example of each in a typical office environment.
*   **Answer:**
    *   **Illuminance** is the amount of light falling *on* a surface, measured in lux. Example: The illuminance on a desk surface for reading.
    *   **Luminance** is how bright a surface *appears* to an observer, measured in candela per square meter. Example: The brightness of a computer monitor screen.

**Question 5:**
An office requires an average illuminance of 500 lux. If a single luminaire provides a luminous intensity of 800 cd directly downwards and is mounted at a height of 3 meters, what would be the illuminance at the point directly below it? Would this single luminaire be sufficient?
*   **Solution:**
    *   $I = 800$ cd
    *   $d = 3$ m
    *   $E = \frac{I}{d^2} = \frac{800 \text{ cd}}{(3 \text{ m})^2} = \frac{800}{9} \approx 88.89 \text{ lx}$
*   **Answer:** The illuminance is approximately 88.89 lux. This single luminaire is *not* sufficient to meet the requirement of 500 lux. Multiple luminaires or a luminaire with a higher luminous intensity or lower mounting height would be needed.
