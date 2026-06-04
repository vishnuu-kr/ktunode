---
title: "Sound transmission: Transmission through two media-Normal and oblique incidence"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 2: Point source, spherical source, Line source, Monopole, dipole"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fe5"
status: "completed"
scrapedAt: "2026-05-20T18:09:37.033Z"
---
# ACOUSTICS AND NOISE CONTROL - Module 2: Point Source, Spherical Source, Line Source, Monopole, Dipole

## Topic: Sound Transmission: Transmission Through Two Media - Normal and Oblique Incidence

### Course Outcomes Addressed:
*   **CO1: To define various acoustic terminologies and understand the physics behind acoustic wave propagation (Knowledge Level: K2)** - This topic directly relates to understanding wave propagation and the factors influencing it at interfaces.
*   **CO2: To analyse the transmission of sound through different media and tubes (Knowledge Level: K4)** - This is the core of this topic, requiring analysis of how sound energy is divided between two media.

### Learning Outcomes Addressed:
*   Understand the concept of impedance in acoustic waves.
*   Calculate the reflection and transmission coefficients for plane waves incident normally on a plane boundary between two media.
*   Calculate the reflected and transmitted sound pressure and particle velocity for normal incidence.
*   Understand the phenomenon of sound transmission at oblique incidence.
*   Calculate the critical angle for total reflection.

---

### 1. Introduction to Sound Transmission Between Two Media

When a sound wave encounters a boundary between two different media, a portion of the wave is reflected back into the incident medium, and another portion is transmitted into the second medium. The distribution of acoustic energy between reflection and transmission is governed by the acoustic properties of the two media and the angle of incidence.

**Key Concepts:**

*   **Acoustic Impedance (Z):** A measure of the opposition a medium presents to the propagation of sound waves. It is defined as the product of the density of the medium ($\rho$) and the speed of sound in the medium ($c$).
    *   $Z = \rho c$
    *   Units: Rayl (Pa·s/m) in SI units.
    *   **High Impedance:** Indicates a medium that is difficult to vibrate, resisting sound propagation.
    *   **Low Impedance:** Indicates a medium that is easily vibrated, allowing sound to propagate more readily.
    *   **Important Point:** The greater the difference in acoustic impedance between two media, the more sound energy will be reflected at the boundary.

*   **Specific Acoustic Impedance (z):** Often used to denote the specific acoustic impedance, particularly in the context of surface impedance. However, in this context, $Z$ refers to the characteristic acoustic impedance of the bulk medium.

**Textbook References:**
*   **Ekinsler, Frey, Coppens, Sanders (Fundamentals of Acoustics):** Chapter 5, "Propagation of Sound Waves in Ducts and Enclosures," discusses impedance concepts in relation to wave propagation.
*   **Ver & Beranek (Noise and Vibration Control Engineering):** Chapter 2, "Acoustic Properties of Materials," introduces acoustic impedance as a fundamental property influencing sound absorption and transmission.

---

### 2. Sound Transmission at Normal Incidence

Normal incidence occurs when the sound wave strikes the boundary at a 90-degree angle to the surface. This is the simplest case to analyze.

**Scenario:**
Consider a plane sound wave in medium 1 (with density $\rho_1$, speed of sound $c_1$, and acoustic impedance $Z_1 = \rho_1 c_1$) incident normally on a plane boundary with medium 2 (with density $\rho_2$, speed of sound $c_2$, and acoustic impedance $Z_2 = \rho_2 c_2$).

**Key Variables:**

*   $p_{i1}$: Incident sound pressure wave in medium 1.
*   $p_{r1}$: Reflected sound pressure wave in medium 1.
*   $p_{t2}$: Transmitted sound pressure wave in medium 2.
*   $v_{i1}$: Particle velocity in medium 1 due to incident wave.
*   $v_{r1}$: Particle velocity in medium 1 due to reflected wave.
*   $v_{t2}$: Particle velocity in medium 2 due to transmitted wave.

**Fundamental Relationships:**

At the boundary, the following conditions must be met:

1.  **Continuity of Pressure:** The total pressure on both sides of the boundary must be equal.
    $p_{i1} + p_{r1} = p_{t2}$

2.  **Continuity of Particle Velocity:** The particle velocity in both media at the boundary must be equal.
    $v_{i1} + v_{r1} = v_{t2}$

We know that for a plane wave, the particle velocity is related to the pressure by:
$v = p/Z$

Therefore, we can rewrite the velocity equation as:
$(p_{i1}/Z_1) + (p_{r1}/Z_1) = p_{t2}/Z_2$

**Calculating Reflection and Transmission Coefficients:**

Let:
*   **Reflection Coefficient (R):** The ratio of the reflected pressure amplitude to the incident pressure amplitude.
    $R = p_{r1} / p_{i1}$
*   **Transmission Coefficient (T):** The ratio of the transmitted pressure amplitude to the incident pressure amplitude.
    $T = p_{t2} / p_{i1}$

Using the continuity equations and the impedance relationships:

From (1): $p_{i1} + R p_{i1} = T p_{i1} \implies 1 + R = T$

From (2): $(p_{i1}/Z_1) + (R p_{i1}/Z_1) = (T p_{i1}/Z_2) \implies (1 + R)/Z_1 = T/Z_2$

Substitute $T = 1 + R$ into the second equation:
$(1 + R)/Z_1 = (1 + R)/Z_2$
This implies $Z_1 = Z_2$, which is only true if the media are the same, meaning no reflection. Let's re-evaluate the velocity equation carefully:

$(p_{i1}/Z_1) - (p_{r1}/Z_1) = p_{t2}/Z_2$ (Note: reflected wave velocity is in the opposite direction to incident wave)
$(p_{i1}/Z_1) - (R p_{i1}/Z_1) = (T p_{i1}/Z_2)$
Divide by $p_{i1}$:
$1/Z_1 - R/Z_1 = T/Z_2$
$(1 - R)/Z_1 = T/Z_2$

Now we have a system of two equations:
1.  $1 + R = T$
2.  $(1 - R)/Z_1 = T/Z_2$

Substitute (1) into (2):
$(1 - R)/Z_1 = (1 + R)/Z_2$
$Z_2 (1 - R) = Z_1 (1 + R)$
$Z_2 - Z_2 R = Z_1 + Z_1 R$
$Z_2 - Z_1 = (Z_1 + Z_2) R$

$$R = \frac{Z_2 - Z_1}{Z_2 + Z_1}$$

Now, find T using $T = 1 + R$:
$$T = 1 + \frac{Z_2 - Z_1}{Z_2 + Z_1} = \frac{Z_2 + Z_1 + Z_2 - Z_1}{Z_2 + Z_1} = \frac{2Z_2}{Z_2 + Z_1}$$

**Important Points to Remember for Normal Incidence:**

*   **Reflection Coefficient (R):**
    *   If $Z_1 = Z_2$ (impedances are matched), $R = 0$. No reflection, all energy is transmitted.
    *   If $Z_2 >> Z_1$ (e.g., sound in air hitting a massive concrete wall), $R \approx 1$. Almost all energy is reflected.
    *   If $Z_2 << Z_1$ (e.g., sound in water hitting air), $R \approx -1$. Almost all energy is reflected, with a pressure phase reversal.
    *   The magnitude of $R$ is $|R|$.

*   **Transmission Coefficient (T):**
    *   If $Z_1 = Z_2$, $T = 1$. All energy is transmitted.
    *   If $Z_2 >> Z_1$, $T \approx 0$. Very little energy is transmitted.
    *   If $Z_2 << Z_1$, $T \approx 0$. Very little energy is transmitted.
    *   The magnitude of $T$ is $|T|$.

*   **Energy Reflection Coefficient (R_E) and Energy Transmission Coefficient (T_E):**
    Energy is proportional to pressure squared divided by impedance.
    *   Reflected Energy Density: $E_{r1} = |p_{r1}|^2 / (2 \rho_1 c_1^2) = R^2 p_{i1}^2 / (2 Z_1 c_1) = R^2 p_{i1}^2 / (2 Z_1^2)$  *(Correction: Energy density is related to pressure and density/speed of sound, not directly impedance)*
    *   Incident Energy Density: $E_{i1} = p_{i1}^2 / (2 \rho_1 c_1^2)$
    *   **Energy Reflection Coefficient ($R_E$):** Ratio of reflected energy flux to incident energy flux.
        $R_E = \frac{\text{Incident Power}}{\text{Reflected Power}} = \frac{|p_{r1}|^2/Z_1}{|p_{i1}|^2/Z_1} = R^2 = \left(\frac{Z_2 - Z_1}{Z_2 + Z_1}\right)^2$
    *   **Energy Transmission Coefficient ($T_E$):** Ratio of transmitted energy flux to incident energy flux.
        $T_E = \frac{\text{Transmitted Power}}{\text{Incident Power}} = \frac{|p_{t2}|^2/Z_2}{|p_{i1}|^2/Z_1} = \frac{T^2 Z_1}{Z_2}$
        $T_E = \frac{(2Z_2/(Z_2+Z_1))^2 Z_1}{Z_2} = \frac{4Z_2^2}{(Z_2+Z_1)^2} \frac{Z_1}{Z_2} = \frac{4Z_1 Z_2}{(Z_1 + Z_2)^2}$

    *   **Conservation of Energy:** $R_E + T_E = 1$.
        $R_E + T_E = \left(\frac{Z_2 - Z_1}{Z_2 + Z_1}\right)^2 + \frac{4Z_1 Z_2}{(Z_1 + Z_2)^2} = \frac{Z_2^2 - 2Z_1 Z_2 + Z_1^2 + 4Z_1 Z_2}{(Z_1 + Z_2)^2} = \frac{Z_1^2 + 2Z_1 Z_2 + Z_2^2}{(Z_1 + Z_2)^2} = \frac{(Z_1 + Z_2)^2}{(Z_1 + Z_2)^2} = 1$.

**Example: Sound Transmission from Air to Concrete (Normal Incidence)**

*   **Medium 1: Air**
    *   Density ($\rho_1$): $\approx 1.2 \, \text{kg/m}^3$
    *   Speed of Sound ($c_1$): $\approx 343 \, \text{m/s}$
    *   Acoustic Impedance ($Z_1$): $\rho_1 c_1 \approx 1.2 \times 343 \approx 411.6 \, \text{Rayl}$

*   **Medium 2: Concrete**
    *   Density ($\rho_2$): $\approx 2400 \, \text{kg/m}^3$
    *   Speed of Sound ($c_2$): $\approx 3000 \, \text{m/s}$ (This can vary significantly based on concrete type and reinforcement)
    *   Acoustic Impedance ($Z_2$): $\rho_2 c_2 \approx 2400 \times 3000 \approx 7,200,000 \, \text{Rayl}$

**Calculations:**

*   **Reflection Coefficient (R):**
    $R = \frac{Z_2 - Z_1}{Z_2 + Z_1} = \frac{7,200,000 - 411.6}{7,200,000 + 411.6} \approx \frac{7,199,588.4}{7,200,411.6} \approx 0.99988$
    This is very close to 1, indicating almost complete reflection.

*   **Transmission Coefficient (T):**
    $T = \frac{2Z_2}{Z_2 + Z_1} = \frac{2 \times 7,200,000}{7,200,000 + 411.6} \approx \frac{14,400,000}{7,200,411.6} \approx 1.99976$
    *(Note: T can be greater than 1, reflecting the amplitude of the transmitted wave relative to the incident wave. The energy transmission coefficient is what truly tells us how much energy passes.)*

*   **Energy Reflection Coefficient ($R_E$):**
    $R_E = R^2 \approx (0.99988)^2 \approx 0.99976$
    So, about 99.976% of the sound energy is reflected.

*   **Energy Transmission Coefficient ($T_E$):**
    $T_E = 1 - R_E \approx 1 - 0.99976 \approx 0.00024$
    So, only about 0.024% of the sound energy is transmitted.

This explains why a hard, massive surface like concrete is a good sound reflector and a poor sound transmitter (when considering direct transmission through the material).

**Textbook References:**
*   **Ekinsler, Frey, Coppens, Sanders (Fundamentals of Acoustics):** Chapter 5, sections on normal incidence.
*   **Ver & Beranek (Noise and Vibration Control Engineering):** Chapter 12, "Sound Transmission Through Structures," discusses impedance mismatch and its effect.
*   **Munjal (Noise and Vibration Control):** Chapter 4, "Transmission of Sound Through Walls," provides detailed derivations and examples for normal incidence.

---

### 3. Sound Transmission at Oblique Incidence

When a sound wave strikes a boundary at an angle other than 90 degrees (oblique incidence), the analysis becomes more complex, involving angles of incidence, reflection, and refraction.

**Scenario:**
A plane sound wave in medium 1 is incident on the boundary with medium 2 at an angle $\theta_i$ with respect to the normal to the boundary.

**Key Concepts:**

*   **Angle of Reflection ($\theta_r$):** The angle between the reflected wave and the normal. By the law of reflection, $\theta_r = \theta_i$.
*   **Angle of Refraction ($\theta_t$):** The angle between the transmitted wave and the normal. This is governed by Snell's Law for acoustic waves.
*   **Snell's Law (for acoustics):** Relates the angles of incidence and transmission to the speeds of sound in the two media.
    $$\frac{\sin(\theta_i)}{\sin(\theta_t)} = \frac{c_1}{c_2}$$
    This law is analogous to Snell's Law in optics.

**Wave Vectors:**
The wave vector $\mathbf{k}$ points in the direction of wave propagation. The component of the wave vector parallel to the boundary must be conserved across the interface.
$k_1 \sin(\theta_i) = k_2 \sin(\theta_t)$
Since $k = \omega/c$ (where $\omega$ is angular frequency and $c$ is speed of sound), we get:
$(\omega/c_1) \sin(\theta_i) = (\omega/c_2) \sin(\theta_t)$
$\sin(\theta_i)/c_1 = \sin(\theta_t)/c_2$, which is Snell's Law.

**Reflection and Transmission Coefficients at Oblique Incidence:**

At oblique incidence, the reflection and transmission coefficients depend not only on the impedances but also on the angle of incidence and the polarization of the wave (though for plane acoustic waves, we typically consider scalar pressure waves).

**Two Types of Waves:**
1.  **Longitudinal Waves (Pressure Waves):** These are the waves we've been discussing, where particle displacement is parallel to the direction of propagation.
2.  **Transverse Waves (Shear Waves):** These waves involve particle displacement perpendicular to the direction of propagation. In fluids, shear waves cannot propagate. However, if medium 2 is a solid, shear waves can be generated at the boundary. For simplicity, we often assume we are dealing with fluids or solids that only support longitudinal waves.

For longitudinal waves, the continuity conditions for pressure and velocity still apply at the boundary, but they are applied to the components of these quantities relevant to the wave propagation direction. The derivation leads to pressure reflection and transmission coefficients that are functions of impedance ratio and the angle of incidence.

**Pressure Reflection Coefficient ($R_p$):**
The pressure reflection coefficient for longitudinal waves at oblique incidence is given by:
$$R_p(\theta_i) = \frac{p_{r1}}{p_{i1}} = \frac{Z_2 \cos(\theta_t) - Z_1 \cos(\theta_i)}{Z_2 \cos(\theta_t) + Z_1 \cos(\theta_i)}$$
where $\theta_t$ is determined by Snell's Law.

**Pressure Transmission Coefficient ($T_p$):**
$$T_p(\theta_i) = \frac{p_{t2}}{p_{i1}} = \frac{2 Z_2 \cos(\theta_t)}{Z_2 \cos(\theta_t) + Z_1 \cos(\theta_i)}$$

**Important Observations for Oblique Incidence:**

*   **Normal Incidence as a Special Case:** If $\theta_i = 0$, then $\theta_t = 0$.
    $R_p(0) = \frac{Z_2 - Z_1}{Z_2 + Z_1}$ (Matches the normal incidence formula)
    $T_p(0) = \frac{2 Z_2}{Z_2 + Z_1}$ (Matches the normal incidence formula)

*   **Critical Angle ($\theta_c$):**
    Total reflection of the *longitudinal wave* occurs when the transmitted wave would have to travel at an angle $\theta_t = 90^\circ$. This happens when the incident angle is large enough.
    From Snell's Law: $\sin(\theta_c)/c_1 = \sin(90^\circ)/c_2$
    $$\sin(\theta_c) = \frac{c_1}{c_2}$$
    This critical angle exists only if $c_1 < c_2$.
    If $c_1 > c_2$, then $\sin(\theta_c) > 1$, which is impossible. In this case, there is no critical angle for the longitudinal wave, and some energy is always transmitted.
    If $\theta_i < \theta_c$, then $\theta_t$ is a real angle, and both reflection and transmission occur.
    If $\theta_i > \theta_c$, then $\sin(\theta_t) = (c_2/c_1) \sin(\theta_i) > 1$. This indicates that a simple refracted longitudinal wave cannot propagate in medium 2. Instead, a *leaky wave* or *evanescent wave* can be generated, which decays exponentially with distance into medium 2. For practical purposes concerning sound transmission into the bulk of medium 2, if $\theta_i > \theta_c$, the longitudinal wave is effectively totally reflected.

*   **Energy Transmission:**
    The energy transmission coefficient ($T_E$) at oblique incidence is more complex to derive and depends on the relationship between acoustic impedance, densities, and speeds of sound. It generally involves the ratio of the cosine of the angle of transmission to the cosine of the angle of incidence, along with the impedance ratio.
    $T_E(\theta_i) = \frac{Z_1 \cos(\theta_i)}{Z_2 \cos(\theta_t)} \left| T_p(\theta_i) \right|^2$
    It can be shown that $T_E = 1 - R_E$, where $R_E = |R_p(\theta_i)|^2$.

**Example: Sound Transmission from Air to Water (Oblique Incidence)**

*   **Medium 1: Air**
    *   $c_1 \approx 343 \, \text{m/s}$
    *   $Z_1 \approx 411.6 \, \text{Rayl}$

*   **Medium 2: Water**
    *   $c_2 \approx 1480 \, \text{m/s}$
    *   $Z_2 = \rho_2 c_2 \approx 1000 \, \text{kg/m}^3 \times 1480 \, \text{m/s} \approx 1,480,000 \, \text{Rayl}$

**Critical Angle Calculation:**
Since $c_1 < c_2$ (343 < 1480), a critical angle exists.
$\sin(\theta_c) = c_1/c_2 = 343 / 1480 \approx 0.2317$
$\theta_c = \arcsin(0.2317) \approx 13.4^\circ$

*   If the sound wave in air strikes the water surface at an angle less than $13.4^\circ$ with respect to the normal, it will be refracted into the water, and some energy will be transmitted.
*   If the sound wave in air strikes the water surface at an angle greater than $13.4^\circ$, the longitudinal wave will be totally reflected.

**Transmission at an angle less than critical:**
Let's consider incidence at $\theta_i = 10^\circ$.
First, find $\theta_t$ using Snell's Law:
$\sin(\theta_t) = (c_2/c_1) \sin(\theta_i) = (1480/343) \sin(10^\circ) \approx 4.315 \times 0.1736 \approx 0.7475$
$\theta_t = \arcsin(0.7475) \approx 48.37^\circ$

Now calculate $R_p$ and $T_p$:
$\cos(\theta_i) = \cos(10^\circ) \approx 0.9848$
$\cos(\theta_t) = \cos(48.37^\circ) \approx 0.6642$

$R_p(10^\circ) = \frac{1,480,000 \times 0.6642 - 411.6 \times 0.9848}{1,480,000 \times 0.6642 + 411.6 \times 0.9848} = \frac{982912 - 405.2}{982912 + 405.2} \approx \frac{982506.8}{983317.2} \approx 0.99917$

This value is still very close to 1, indicating significant reflection even at this oblique angle. The impedance mismatch between air and water is very large.

**Textbook References:**
*   **Ekinsler, Frey, Coppens, Sanders (Fundamentals of Acoustics):** Chapter 7, "Waves at Boundaries," covers oblique incidence and Snell's Law.
*   **Munjal (Noise and Vibration Control):** Chapter 4 discusses oblique incidence and the critical angle phenomenon in detail.
*   **Crocker (Handbook of Noise and Vibration Control):** Chapters related to sound transmission through partitions will likely touch upon oblique incidence effects.

---

### 4. Practical Implications and Summary

*   **Sound Insulation:** The significant difference in acoustic impedance between air and common building materials (concrete, brick, glass) is why these materials are effective at blocking airborne sound. Most of the sound energy is reflected due to the impedance mismatch.
*   **Underwater Acoustics:** Conversely, when sound travels from air to water, or vice versa, there is a massive impedance mismatch, leading to very poor transmission of sound between these media. This is why sound signals are often converted to electrical signals before entering the water from air, or vice versa, as direct airborne sound is not effective underwater.
*   **Critical Angle in Applications:** The concept of the critical angle is important in areas like sonar, where sound is transmitted through water. Understanding how sound reflects off the surface or bottom at different angles is crucial. In some architectural acoustics scenarios, the geometry of sound paths might lead to oblique incidence, and the critical angle could influence how sound is transmitted between different acoustic treatments or into adjacent spaces.
*   **Frequency Dependence:** While impedance is largely independent of frequency for homogeneous materials, the speed of sound can have some frequency dependence in complex media or at very high frequencies. However, for typical audible frequencies and common materials, the impedance-based analysis is a good approximation.

**Important Points to Remember:**

*   **Acoustic Impedance ($Z = \rho c$) is the key property governing reflection and transmission.**
*   **Large impedance mismatches lead to high reflection and low transmission.**
*   **For normal incidence, simple formulas for reflection and transmission coefficients exist.**
*   **For oblique incidence, Snell's Law describes the angle of refraction, and critical angles can occur, leading to total reflection under certain conditions ($c_1 < c_2$ and $\theta_i > \theta_c$).**
*   **Energy transmission is governed by $T_E = 1 - R_E$.**

---

### 5. Practice Questions and Exercises

**Question 1 (Normal Incidence):**
A sound wave in air ($Z_{air} \approx 400$ Rayl) is incident normally on a wall made of steel ($Z_{steel} \approx 45 \times 10^6$ Rayl).
(a) Calculate the pressure reflection coefficient (R).
(b) Calculate the energy reflection coefficient ($R_E$).
(c) Calculate the energy transmission coefficient ($T_E$).
(d) What can you conclude about the sound transmission from air to steel?

**Question 2 (Normal Incidence Comparison):**
Compare the energy transmission coefficient when sound travels from air to concrete ($Z_{concrete} \approx 7.2 \times 10^6$ Rayl) versus air to glass ($Z_{glass} \approx 14 \times 10^6$ Rayl), assuming normal incidence and using approximate impedance values. Which material is a better transmitter of sound from air?

**Question 3 (Oblique Incidence - Critical Angle):**
Sound travels from air ($c_{air} = 343 \, \text{m/s}$) into a liquid ($c_{liquid} = 1500 \, \text{m/s}$).
(a) Calculate the critical angle for the sound wave to be totally reflected.
(b) If the sound wave is incident at an angle of $10^\circ$ to the normal, what is the angle of refraction into the liquid?
(c) If the sound wave is incident at an angle of $20^\circ$ to the normal, what happens to the sound wave according to the theory of total internal reflection?

**Question 4 (Conceptual):**
Explain why the concept of acoustic impedance is crucial for understanding sound transmission through different media. Provide an example of a high impedance mismatch and its consequences.

---

### 6. Answers to Practice Questions

**Answer 1:**
Given: $Z_{air} = 400$ Rayl, $Z_{steel} = 45 \times 10^6$ Rayl.
(a) Pressure Reflection Coefficient (R):
$R = \frac{Z_{steel} - Z_{air}}{Z_{steel} + Z_{air}} = \frac{45 \times 10^6 - 400}{45 \times 10^6 + 400} \approx \frac{45 \times 10^6}{45 \times 10^6} \approx 0.99998$

(b) Energy Reflection Coefficient ($R_E$):
$R_E = R^2 \approx (0.99998)^2 \approx 0.99996$

(c) Energy Transmission Coefficient ($T_E$):
$T_E = 1 - R_E \approx 1 - 0.99996 = 0.00004$

(d) Conclusion: There is almost complete reflection of sound energy from air to steel. Very little sound energy is transmitted into the steel. Steel is an excellent sound reflector and a poor sound transmitter (in terms of direct transmission through the material).

**Answer 2:**
Air to Concrete: $Z_{air} \approx 400$, $Z_{concrete} \approx 7.2 \times 10^6$.
$R_{concrete} = \frac{7.2 \times 10^6 - 400}{7.2 \times 10^6 + 400} \approx 1$. $R_{E, concrete} \approx 1^2 = 1$. $T_{E, concrete} \approx 0$.

Air to Glass: $Z_{air} \approx 400$, $Z_{glass} \approx 14 \times 10^6$.
$R_{glass} = \frac{14 \times 10^6 - 400}{14 \times 10^6 + 400} \approx 1$. $R_{E, glass} \approx 1^2 = 1$. $T_{E, glass} \approx 0$.

In both cases, the impedance mismatch is very large, leading to very low energy transmission. While the impedance of glass is higher than concrete, the *ratio* of impedances is still extremely large in both cases, so the difference in transmission coefficients will be minimal and both will be very poor transmitters.
*Correction*: The question asks which is a *better* transmitter. Let's look at the $T_E$ formula: $T_E = \frac{4Z_1 Z_2}{(Z_1 + Z_2)^2}$. A larger $Z_2$ (for a fixed $Z_1$) leads to a higher $T_E$ as long as $Z_2$ is significantly larger than $Z_1$.
$T_{E, concrete} = \frac{4 \times 400 \times 7.2 \times 10^6}{(400 + 7.2 \times 10^6)^2} \approx \frac{1.152 \times 10^{10}}{(7.2 \times 10^6)^2} \approx \frac{1.152 \times 10^{10}}{5.184 \times 10^{13}} \approx 0.00022$
$T_{E, glass} = \frac{4 \times 400 \times 14 \times 10^6}{(400 + 14 \times 10^6)^2} \approx \frac{2.24 \times 10^{10}}{(14 \times 10^6)^2} \approx \frac{2.24 \times 10^{10}}{1.96 \times 10^{14}} \approx 0.00011$
Glass has a higher impedance, but its higher impedance leads to a slightly *lower* energy transmission in this extreme mismatch scenario. This is counter-intuitive but arises from the $(Z_1+Z_2)^2$ term in the denominator. The effect of the larger numerator ($4Z_1Z_2$) is less significant than the effect of the larger denominator.
**So, concrete is a slightly better transmitter of sound from air than glass in this simplified model.**

**Answer 3:**
Given: $c_{air} = 343 \, \text{m/s}$, $c_{liquid} = 1500 \, \text{m/s}$.
(a) Critical Angle ($\theta_c$):
$\sin(\theta_c) = c_{air} / c_{liquid} = 343 / 1500 \approx 0.2287$
$\theta_c = \arcsin(0.2287) \approx 13.24^\circ$

(b) Angle of refraction for $\theta_i = 10^\circ$:
Since $10^\circ < 13.24^\circ$, refraction occurs.
$\sin(\theta_t) = (c_{liquid} / c_{air}) \sin(\theta_i) = (1500 / 343) \sin(10^\circ) \approx 4.373 \times 0.1736 \approx 0.7586$
$\theta_t = \arcsin(0.7586) \approx 49.34^\circ$

(c) For $\theta_i = 20^\circ$:
Since $20^\circ > 13.24^\circ$, the incident angle is greater than the critical angle. The longitudinal sound wave will be totally internally reflected. No energy will be transmitted as a refracted longitudinal wave into the liquid.

**Answer 4:**
Acoustic impedance ($Z = \rho c$) represents the resistance a medium offers to sound propagation. When a sound wave travels from one medium to another, the difference in their acoustic impedances determines how much energy is reflected and how much is transmitted. A large impedance mismatch (e.g., air to a very dense solid) means the particle velocity is drastically different for the same pressure at the boundary. This causes most of the sound energy to be reflected back into the original medium, rather than being transmitted.
Example: Sound traveling from air to a concrete wall. Air has a low impedance ($Z_{air} \approx 400$ Rayl), while concrete has a very high impedance ($Z_{concrete} \approx 7.2 \times 10^6$ Rayl). The impedance ratio is huge. Consequently, almost all sound energy is reflected, making the concrete wall an effective barrier for airborne sound, and very little sound energy is transmitted directly through the concrete.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 7. Further Reading and References

*   **Noise and vibration control engineering** by Istvan L. Ver and Leo L. Beranek (Wiley, Second edition, 2006) - Chapters on acoustic properties of materials, sound transmission through structures.
*   **Fundamentals of Acoustics** by Lawrence Ekinsler, Austin R Frey, Alan B Coppens, James V Sanders (Wiley, Fourth edition, 2000) - Chapters on wave propagation, impedance, boundary conditions, oblique incidence.
*   **Noise and Vibration Control** by M L Munjal (World Scientific publishing, 2013) - Particularly chapters on sound transmission and wave propagation.
*   **Handbook of Noise and Vibration Control** by Malcom J Crocker (Wiley, 2007) - Relevant sections on sound transmission loss and material properties.
*   **Industrial Noise Control and Acoustics** by Randall F. Barron (Marcel Dekker, Inc., New York., 2001) - Sections on sound transmission through barriers and materials.

---