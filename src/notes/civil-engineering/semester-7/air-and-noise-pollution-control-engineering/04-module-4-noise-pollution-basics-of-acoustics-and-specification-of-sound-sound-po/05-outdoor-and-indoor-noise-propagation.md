---
title: "outdoor and indoor noise propagation"
subject: "AIR AND NOISE POLLUTION CONTROL ENGINEERING"
module: "Module 4: Noise pollution: Basics of acoustics and specification of sound; sound power"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba81168a"
status: "completed"
scrapedAt: "2026-05-20T18:57:22.682Z"
---
# AIR AND NOISE POLLUTION CONTROL ENGINEERING

## Module 4: Noise Pollution: Basics of Acoustics and Specification of Sound; Sound Power

### Topic: Outdoor and Indoor Noise Propagation

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the fundamental principles governing the propagation of sound outdoors.
*   Identify the factors that influence sound levels in outdoor environments.
*   Explain the concept of sound attenuation and its components in outdoor propagation.
*   Describe the principles governing the propagation of sound indoors.
*   Identify the factors that influence sound levels in indoor environments.
*   Explain the concept of sound attenuation and its components in indoor propagation.
*   Differentiate between outdoor and indoor noise propagation characteristics.
*   Apply basic principles to predict or estimate noise levels in different environments.

---

## 1. Outdoor Noise Propagation

Outdoor noise propagation describes how sound travels from a source to a receiver through the atmosphere and environment. The intensity of sound decreases with distance from the source due to several factors.

### 1.1. Key Concepts and Definitions

*   **Sound Source:** Any object or phenomenon that produces sound waves (e.g., traffic, machinery, aircraft, speech).
*   **Sound Receiver:** The point at which the sound is measured or perceived (e.g., a person's ear, a microphone).
*   **Sound Propagation Path:** The medium and route through which sound waves travel.
*   **Sound Intensity (I):** The power per unit area carried by a sound wave. Measured in Watts per square meter (W/m²).
*   **Sound Pressure Level (Lp):** The logarithmic measure of the effective sound pressure relative to a reference pressure. Measured in decibels (dB). This is what we typically perceive as loudness.
*   **Sound Power (W):** The total energy radiated by a sound source per unit time. Measured in Watts (W). This is an intrinsic property of the source, independent of the environment.
*   **Sound Power Level (Lw):** The logarithmic measure of sound power relative to a reference power. Measured in decibels (dB).
*   **Decibel (dB):** A logarithmic unit used to express the ratio of two values of a physical quantity, often and especially the ratio of two values of power or intensity.
*   **Sound Propagation:** The process by which sound waves travel from a source to a receiver.

### 1.2. Factors Influencing Outdoor Noise Propagation

The level of sound at a receiver in an outdoor environment is influenced by:

*   **Geometric Spreading (Inverse Square Law):**
    *   As sound waves expand outwards from a point source, the energy is distributed over a larger and larger area.
    *   For a free-field, omnidirectional point source, sound intensity is inversely proportional to the square of the distance from the source.
    *   This leads to a decrease of 6 dB in Sound Pressure Level (SPL) for every doubling of distance.
    *   **Formula:** $L_p(r_2) = L_p(r_1) - 20 \log_{10}(r_2/r_1)$
        *   $L_p(r_1)$ = Sound Pressure Level at distance $r_1$
        *   $L_p(r_2)$ = Sound Pressure Level at distance $r_2$
        *   $r_1$ = Initial distance
        *   $r_2$ = Final distance

*   **Atmospheric Absorption:**
    *   Sound energy is converted into heat due to the viscosity and thermal conductivity of the air.
    *   This effect is frequency-dependent, with higher frequencies being absorbed more significantly.
    *   Factors influencing atmospheric absorption include temperature, humidity, and frequency.
    *   **Impact:** Causes attenuation, especially over long distances.

*   **Ground Effect:**
    *   The interaction of sound waves with the ground surface can lead to attenuation or reinforcement.
    *   **Soft ground (grass, soil):** Tends to absorb sound, leading to additional attenuation. This is due to viscous and thermal losses at the ground surface.
    *   **Hard ground (concrete, asphalt):** Reflects sound, generally leading to less attenuation compared to soft ground.
    *   The angle of incidence and the absorption coefficient of the ground are critical.

*   **Atmospheric Turbulence:**
    *   Variations in air density due to temperature and wind fluctuations can scatter and refract sound waves.
    *   This can cause fluctuations in sound levels and create "shadow zones" where sound is reduced.

*   **Meteorological Effects:**
    *   **Wind:**
        *   **Downwind Propagation:** Sound levels are generally higher. Wind "carries" the sound, effectively bending the sound waves towards the ground. This can lead to a reduced attenuation rate (less than 6 dB per doubling of distance).
        *   **Upwind Propagation:** Sound levels are generally lower. Wind bends sound waves away from the ground, leading to increased attenuation.
        *   **Crosswind:** Can cause a sideways deviation of the sound path.
    *   **Temperature Gradients:**
        *   **Temperature Inversion (cold air near ground, warmer air above):** Sound waves are refracted upwards, leading to reduced sound levels at the ground.
        *   **Normal Lapse Rate (cooler air near ground, warmer air above):** Sound waves are refracted downwards, leading to increased sound levels at the ground, particularly in the direction of propagation.

*   **Barriers (Obstacles):**
    *   Any object placed between the sound source and the receiver can block or diffract sound waves.
    *   **Noise Barriers/Walls:** Engineered structures designed to reduce noise levels.
    *   **Attenuation by Barriers:** Depends on:
        *   **Height of the barrier:** Taller barriers provide more attenuation.
        *   **Width of the barrier:** Wider barriers are more effective.
        *   **Source-to-barrier distance and barrier-to-receiver distance:** Shorter distances allow for more diffracting waves around the barrier.
        *   **Path Length Difference (or Insertion Loss):** The difference in distance a sound wave travels around the barrier compared to a direct path. A larger path length difference leads to greater attenuation.
        *   **Frequencies:** Lower frequencies are more difficult to shield as they have longer wavelengths and diffract more easily.

*   **Reflection:**
    *   Sound waves can reflect off surfaces like buildings, walls, and the ground.
    *   These reflections can either reinforce or interfere with the direct sound, leading to complex sound field variations.

### 1.3. Sound Attenuation in Outdoor Propagation (Summary)

Total attenuation ($A_{total}$) is the sum of various losses:

$A_{total} = A_{geometric} + A_{atm} + A_{ground} + A_{barrier} + A_{turbulence}$

Where:
*   $A_{geometric}$: Attenuation due to distance (e.g., 6 dB per doubling of distance for point source).
*   $A_{atm}$: Atmospheric absorption losses.
*   $A_{ground}$: Ground effect losses.
*   $A_{barrier}$: Attenuation provided by barriers.
*   $A_{turbulence}$: Losses due to atmospheric turbulence.

---

## 2. Indoor Noise Propagation

Indoor noise propagation describes how sound travels within enclosed spaces such as rooms, buildings, or factories. The enclosed nature of these environments significantly alters the propagation characteristics compared to outdoor settings.

### 2.1. Key Concepts and Definitions

*   **Enclosed Space:** A space bounded by surfaces (walls, ceiling, floor).
*   **Direct Sound:** Sound waves traveling directly from the source to the receiver without reflection.
*   **Reverberant Sound:** Sound waves that have undergone one or more reflections from surfaces before reaching the receiver.
*   **Reverberation Time (RT60):** The time it takes for the reverberant sound energy in a room to decay by 60 dB after the sound source has stopped.
*   **Sound Absorption Coefficient ($\alpha$):** A dimensionless quantity representing the fraction of incident sound energy absorbed by a surface. Ranges from 0 (perfect reflector) to 1 (perfect absorber).
*   **Equivalent Absorption Area (A):** The total absorption of a room, expressed in units of Sabin (m²). $A = \sum_{i} S_i \alpha_i$, where $S_i$ is the surface area of the i-th surface and $\alpha_i$ is its absorption coefficient.
*   **Sound Intensity Level (SIL):** A measure related to the intensity of sound.
*   **Sound Pressure Level (SPL):** As defined before.

### 2.2. Factors Influencing Indoor Noise Propagation

The level of sound at a receiver in an indoor environment is influenced by:

*   **Geometric Spreading:**
    *   Similar to outdoor propagation, direct sound from the source attenuates with distance.
    *   For a point source in free field, it's the inverse square law (6 dB per doubling of distance).
    *   However, in an enclosed space, reflections quickly become significant.

*   **Reverberation:**
    *   This is the dominant factor in indoor sound propagation, especially at distances further from the source.
    *   Sound waves reflect off walls, ceiling, and floor. These reflections build up a "reverberant sound field."
    *   The reverberant sound field is characterized by:
        *   **Diffuse Sound Field:** Sound energy is evenly distributed throughout the space, arriving at the receiver from all directions.
        *   **Fluctuations:** Sound levels can vary significantly depending on the position relative to the source and reflecting surfaces.
    *   **Reverberation Time (RT60):** A key parameter describing the acoustic quality of a room.
        *   **Formula (Sabine's Formula):** $RT_{60} \approx \frac{0.161 V}{A}$
            *   $V$ = Volume of the room (m³)
            *   $A$ = Total equivalent absorption area of the room (Sabin or m²)
        *   **Formula (Eyring Formula, for highly absorptive rooms):** $RT_{60} \approx \frac{0.161 V}{-S \ln(1 - \bar{\alpha})}$
            *   $\bar{\alpha}$ = Average absorption coefficient of the surfaces.
        *   **Impact of Reverberation Time:**
            *   **Long RT60 (highly reflective surfaces):** Sound decays slowly, leading to higher average sound levels and potentially speech intelligibility issues or a "boomy" sound.
            *   **Short RT60 (highly absorptive surfaces):** Sound decays quickly, leading to lower average sound levels and better speech intelligibility.

*   **Sound Absorption by Surfaces:**
    *   Interior surfaces (walls, ceiling, floor, furniture, occupants) absorb sound energy.
    *   The amount of absorption depends on the material's sound absorption coefficient ($\alpha$).
    *   Soft, porous materials (carpets, curtains, acoustic tiles) have high $\alpha$ values and effectively reduce reverberation.
    *   Hard, dense materials (concrete, glass, plaster) have low $\alpha$ values and reflect sound.

*   **Sound Diffusion:**
    *   The presence of irregular shapes, surfaces, or objects in a room can help to scatter sound waves in many directions, leading to a more uniform sound field.
    *   A well-diffused sound field is desirable for consistent acoustics.

*   **Room Geometry and Dimensions:**
    *   The size and shape of a room significantly affect reverberation time and the distribution of sound.
    *   Parallel surfaces can lead to flutter echoes (rapid, repetitive reflections).
    *   Large volumes generally lead to longer reverberation times.

*   **Occupancy:**
    *   People in a room absorb sound, contributing to the total absorption. The amount of absorption per person varies.

*   **Sound Sources:**
    *   **Point Source:** In a room, a point source can be approximated.
    *   **Line Source:** (e.g., a long conveyor belt) produces a different propagation pattern.
    *   **Surface Source:** (e.g., a vibrating panel) also has unique propagation characteristics.
    *   The directivity of the source matters. Some sources radiate sound equally in all directions (omnidirectional), while others radiate more in specific directions.

### 2.3. Sound Level Calculation Indoors

The sound pressure level at a point in a room can be approximated by the sum of the direct field and the reverberant field:

$L_p = 10 \log_{10} \left( 10^{L_{p,direct}/10} + 10^{L_{p,reverberant}/10} \right)$

Where:
*   $L_{p,direct}$: Sound pressure level from the direct sound.
    *   $L_{p,direct} = L_w - 10 \log_{10}(4\pi r^2)$ (for free field, with $L_w$ as sound power level)
    *   $L_{p,direct} = L_w - 20 \log_{10}(r) + C$ (simplified, where C incorporates conversion factors and reference values).
*   $L_{p,reverberant}$: Sound pressure level from the reverberant sound field.
    *   $L_{p,reverberant} = L_w + 10 \log_{10} \left( \frac{Q}{4\pi r^2} + \frac{4}{A} \right)$
        *   $Q$: Directivity factor of the source (1 for omnidirectional).
        *   $r$: Distance from source to receiver.
        *   $A$: Total equivalent absorption area.

**Simplified Approach:**

For typical rooms and distances, the reverberant field often dominates, and the sound pressure level can be approximated as:

$L_p \approx L_w + 10 \log_{10} \left( \frac{Q}{4\pi r^2} + \frac{4}{A} \right) - K$

Where $K$ is a factor that accounts for units and reference values. Often, it's presented as:

$L_p \approx L_w + 10 \log_{10} \left( \frac{Q}{4\pi r^2} + \frac{4}{A} \right)$  (if $L_w$ is in Watts and $A$ in Sabins, and $r$ in meters).

**A more practical formula relating $L_p$ to $L_w$ and room acoustics is:**

$L_p \approx L_w + 10 \log_{10} \left( \frac{Q}{4\pi r^2} + \frac{4}{A} \right)$  (where $L_w$ is in dB, $A$ in m², $r$ in m)

If $r$ is large, the term $\frac{Q}{4\pi r^2}$ (direct sound) becomes small, and $L_p \approx L_w + 10 \log_{10}(4/A)$.

### 2.4. Sound Attenuation in Indoor Propagation (Summary)

Indoor attenuation is primarily governed by:

*   **Distance (Geometric Spreading):** Significant for direct sound, less so for reverberant sound.
*   **Absorption:** Primarily through reverberation, governed by the total absorption area ($A$) and room volume ($V$) (via RT60).
*   **Room Geometry:** Influences diffusion and reflection patterns.
*   **Source Directivity:** Affects how sound is distributed in the room.

---

## 3. Comparison of Outdoor and Indoor Noise Propagation

| Feature                 | Outdoor Propagation                                     | Indoor Propagation                                       |
| :---------------------- | :------------------------------------------------------ | :------------------------------------------------------- |
| **Primary Loss Factor** | Geometric spreading, atmospheric absorption, barriers   | Reverberation (absorption by surfaces), geometric spreading |
| **Environment**         | Open space, atmosphere                                  | Enclosed space (rooms, buildings)                        |
| **Sound Field**         | Dominated by direct sound, influenced by atmospheric effects | Combination of direct and diffuse reverberant sound fields |
| **Key Parameters**      | Distance, wind, temperature, humidity, ground type, barriers | Reverberation time (RT60), absorption coefficient, room volume, geometry, distance |
| **Effect of Distance**  | Significant, typically 6 dB per doubling (free field)   | Significant for direct sound, less so for reverberant sound |
| **Dominant Factor at Distance** | Atmospheric effects, ground, barriers | Reverberant sound field, dominated by room absorption |
| **Complexity**          | Highly influenced by meteorological and environmental factors | Primarily influenced by architectural and material properties |

---

## 4. Examples

**Example 1 (Outdoor):** A noise source emits 90 dB (Lw) of sound power. If you are 10 meters away from an omnidirectional source in an open field with no significant ground effects or barriers, what will be the sound pressure level (Lp)?

*   **Concept:** Geometric spreading (inverse square law).
*   **Formula:** $L_p = L_w - 20 \log_{10}(r) + C$ (where C is a constant for conversion and reference, often implicitly handled by standard formulas).
    A more direct formula for Lp from Lw in free field is:
    $L_p = L_w - 10 \log_{10}(4\pi r^2)$
*   **Calculation:**
    *   $L_w = 90$ dB
    *   $r = 10$ m
    *   $4\pi r^2 = 4 \pi (10)^2 = 400\pi \approx 1256.6$
    *   $10 \log_{10}(1256.6) \approx 31.0$ dB
    *   $L_p = 90 \text{ dB} - 31.0 \text{ dB} = 59.0 \text{ dB}$
*   **Answer:** The sound pressure level at 10 meters would be approximately 59 dB.

**Example 2 (Outdoor):** If you move to 20 meters away from the same source in Example 1, what will be the sound pressure level?

*   **Concept:** Geometric spreading (doubling of distance).
*   **Rule of Thumb:** For every doubling of distance, the sound level decreases by 6 dB.
*   **Calculation:**
    *   New distance = 20 m (double of 10 m)
    *   Expected decrease = 6 dB
    *   $L_p$ at 20 m = 59.0 dB - 6 dB = 53.0 dB
*   **Answer:** The sound pressure level at 20 meters would be approximately 53 dB.

**Example 3 (Indoor):** A small machine in a factory room produces a sound power level ($L_w$) of 95 dB. The room has a volume ($V$) of 200 m³ and a total absorption area ($A$) of 40 Sabin (m²). The machine is omnidirectional ($Q=1$) and you are 5 meters away ($r=5$ m). Calculate the sound pressure level ($L_p$) at your location, assuming the reverberant field is significant.

*   **Concept:** Combination of direct and reverberant sound.
*   **Formula:** $L_p \approx L_w + 10 \log_{10} \left( \frac{Q}{4\pi r^2} + \frac{4}{A} \right)$
*   **Calculation:**
    *   $L_w = 95$ dB
    *   $Q = 1$
    *   $r = 5$ m
    *   $A = 40$ m²
    *   $4\pi r^2 = 4 \pi (5)^2 = 100\pi \approx 314.16$
    *   $10 \log_{10} \left( \frac{1}{314.16} + \frac{4}{40} \right)$
    *   $10 \log_{10} \left( 0.00318 + 0.1 \right)$
    *   $10 \log_{10} (0.10318) \approx 10 \times (-0.885) \approx -8.85$ dB
    *   $L_p \approx 95 \text{ dB} + (-8.85 \text{ dB}) \approx 86.15 \text{ dB}$
*   **Answer:** The sound pressure level at 5 meters would be approximately 86.2 dB. (Notice this is higher than if it were just direct sound propagation, due to the reverberant field).

---

## 5. Practice Questions

**Question 1:**
An industrial fan emits sound at a power level ($L_w$) of 100 dB. If the fan is located in an open field and you measure the sound pressure level ($L_p$) at 25 meters, what is the approximate $L_p$ assuming free-field conditions?

**Question 2:**
What is the primary difference in the dominant sound propagation characteristics between an outdoor open field and an indoor room?

**Question 3:**
How does wind affect sound propagation outdoors, and under what condition is sound typically louder at a receiver?

**Question 4:**
Define Reverberation Time (RT60) and explain its significance in indoor acoustics.

**Question 5:**
A room has a volume of 150 m³ and a total absorption area of 30 m². Calculate the Reverberation Time (RT60) using Sabine's formula.

**Question 6:**
Which type of ground surface generally causes more sound attenuation in outdoor propagation: a paved asphalt surface or a grass field? Explain why.

**Question 7:**
A sound source has a sound power level ($L_w$) of 90 dB. In a reverberant room with a total absorption area ($A$) of 50 m², what is the approximate sound pressure level ($L_p$) in the reverberant field, assuming the source is omnidirectional and the distance is large enough that the direct sound is negligible?

---

## 6. Answers to Practice Questions

**Answer 1:**
*   **Concept:** Free-field propagation (inverse square law).
*   **Formula:** $L_p = L_w - 10 \log_{10}(4\pi r^2)$
*   **Calculation:**
    *   $L_w = 100$ dB
    *   $r = 25$ m
    *   $4\pi r^2 = 4 \pi (25)^2 = 2500\pi \approx 7854$
    *   $10 \log_{10}(7854) \approx 38.95$ dB
    *   $L_p = 100 \text{ dB} - 38.95 \text{ dB} = 61.05 \text{ dB}$
*   **Answer:** Approximately 61 dB.

**Answer 2:**
The primary difference is that **outdoor propagation** is dominated by geometric spreading, atmospheric absorption, and meteorological factors (wind, temperature gradients), leading to sound levels that generally decrease with distance. **Indoor propagation** is characterized by a combination of direct sound and a significant **reverberant sound field**, which is strongly influenced by the absorption properties of the room's surfaces and its geometry, leading to sound levels that may not decrease as rapidly with distance due to reflections.

**Answer 3:**
Wind affects sound propagation by "carrying" or bending the sound waves. Sound is typically louder at a receiver when propagating **downwind** (in the direction of the wind). This is because the wind speed gradient (faster wind at higher altitudes) causes sound waves to refract or bend downwards towards the ground, effectively increasing the sound level at the receiver. Upwind propagation generally results in lower sound levels.

**Answer 4:**
**Reverberation Time (RT60)** is the time it takes for the sound pressure level in a room to decay by 60 decibels after the sound source has stopped. It is a key measure of how long sound persists in an enclosed space. It is significant because it directly impacts the **acoustic quality** of the room, affecting speech intelligibility, the perception of loudness, and the "liveness" or "deadness" of the sound. Rooms with shorter RT60 are generally better for speech clarity.

**Answer 5:**
*   **Concept:** Sabine's Formula for Reverberation Time.
*   **Formula:** $RT_{60} \approx \frac{0.161 V}{A}$
*   **Calculation:**
    *   $V = 150 \text{ m}^3$
    *   $A = 30 \text{ m}^2$
    *   $RT_{60} \approx \frac{0.161 \times 150}{30} = \frac{24.15}{30} = 0.805$ seconds.
*   **Answer:** Approximately 0.81 seconds.

**Answer 6:**
A **grass field** generally causes more sound attenuation. This is because grass and soil are typically softer and more porous materials compared to asphalt. These surfaces absorb sound energy through viscous and thermal losses at the ground surface, reducing the amount of sound reflected back into the atmosphere and leading to a greater overall attenuation of the sound wave.

**Answer 7:**
*   **Concept:** Reverberant field approximation.
*   **Formula:** $L_p \approx L_w + 10 \log_{10} \left( \frac{4}{A} \right)$ (when direct sound is negligible, i.e., $r$ is large, $Q=1$).
*   **Calculation:**
    *   $L_w = 90$ dB
    *   $A = 50 \text{ m}^2$
    *   $10 \log_{10} \left( \frac{4}{50} \right) = 10 \log_{10} (0.08) \approx 10 \times (-1.079) \approx -10.79$ dB
    *   $L_p \approx 90 \text{ dB} + (-10.79 \text{ dB}) \approx 79.21 \text{ dB}$
*   **Answer:** Approximately 79.2 dB.

---

### Important Points to Remember:

*   **Outdoor:** Geometric spreading is fundamental (6 dB/doubling). Meteorological conditions (wind, temperature gradients) and ground conditions significantly alter propagation. Barriers are key for attenuation.
*   **Indoor:** Reverberation is the dominant factor at distance. Sound absorption by surfaces dictates RT60 and overall sound levels. Room geometry and source directivity are also crucial.
*   The transition from direct sound dominance to reverberant sound dominance occurs as distance from the source increases.
*   Understanding these propagation mechanisms is essential for designing noise control strategies in both outdoor and indoor environments.
