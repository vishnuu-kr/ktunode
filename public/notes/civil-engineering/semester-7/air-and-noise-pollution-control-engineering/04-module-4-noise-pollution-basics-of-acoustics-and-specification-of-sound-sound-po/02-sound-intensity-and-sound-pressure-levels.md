---
title: "sound intensity and sound pressure levels"
subject: "AIR AND NOISE POLLUTION CONTROL ENGINEERING"
module: "Module 4: Noise pollution: Basics of acoustics and specification of sound; sound power"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba811687"
status: "completed"
scrapedAt: "2026-05-20T18:57:20.394Z"
---
# AIR AND NOISE POLLUTION CONTROL ENGINEERING

## Module 4: Noise Pollution: Basics of Acoustics and Specification of Sound; Sound Power

### Topic: Sound Intensity and Sound Pressure Levels

---

This module introduces the fundamental concepts of acoustics and how sound is measured and specified, with a focus on its implications for noise pollution control. This topic delves into the two primary ways sound is quantified: sound intensity and sound pressure levels.

---

### Learning Outcomes:

*   **Understand the fundamental relationship between sound pressure and sound intensity.**
*   **Define and explain sound pressure and sound intensity.**
*   **Describe the concept of sound pressure level (SPL) and its logarithmic nature.**
*   **Describe the concept of sound intensity level (SIL) and its logarithmic nature.**
*   **Explain the relationship between sound pressure level and sound intensity level in free-field conditions.**
*   **Convert between sound pressure and sound pressure level, and sound intensity and sound intensity level.**
*   **Understand the units of measurement for sound pressure (Pascals) and sound intensity (Watts per square meter).**
*   **Appreciate the need for logarithmic scales to represent the wide range of sound pressures and intensities encountered in the environment.**

---

### 1. Introduction to Sound

Sound is a form of energy that travels as **waves** through a medium (like air, water, or solids). In most environmental noise scenarios, we are concerned with sound propagating through **air**.

*   **Nature of Sound Waves:** Sound waves are typically **longitudinal waves**, meaning the particles of the medium oscillate back and forth in the same direction as the wave's propagation. This creates regions of compression (higher pressure) and rarefaction (lower pressure).

---

### 2. Sound Pressure

**Definition:** Sound pressure is the **fluctuation in atmospheric pressure** caused by the passage of a sound wave. It is the difference between the instantaneous total pressure and the ambient atmospheric pressure.

*   **Units:** Sound pressure is measured in **Pascals (Pa)**. 1 Pascal is equal to 1 Newton per square meter (N/m²).
*   **Ambient Atmospheric Pressure:** Under normal conditions, the atmospheric pressure is around 101,325 Pa. Sound pressure represents the *variation* around this average.
*   **Range of Sound Pressures:** The range of sound pressures that humans can perceive is vast, from the faintest audible sounds (around 20 micropascals, µPa) to extremely loud sounds that can cause damage (over 200 Pa).

**Key Concept:** Sound pressure is what our eardrums detect and what microphones measure directly.

---

### 3. Sound Intensity

**Definition:** Sound intensity ($I$) is the **average rate of energy flow per unit area** perpendicular to the direction of wave propagation. It quantifies the amount of sound energy passing through a specific area in a given time.

*   **Units:** Sound intensity is measured in **Watts per square meter (W/m²)**.
*   **Calculation:** For a plane wave in a free field, sound intensity can be calculated as:
    $I = \frac{p^2}{\rho c}$
    Where:
    *   $p$ is the **sound pressure** (in Pascals, Pa).
    *   $\rho$ (rho) is the **density of the medium** (e.g., air, approximately 1.225 kg/m³ at sea level and 15°C).
    *   $c$ is the **speed of sound** in the medium (e.g., air, approximately 343 m/s at sea level and 15°C).
    *   $\rho c$ is the **characteristic acoustic impedance** of the medium. For air, $\rho c \approx 407.5$ Pa·s/m.

**Key Concept:** Sound intensity represents the "strength" or "power" of the sound wave per unit area. It is a vector quantity, meaning it has both magnitude and direction, indicating the direction of energy flow. However, in noise pollution, we are often concerned with its magnitude.

---

### 4. The Need for Logarithmic Scales

The range of human hearing for both sound pressure and sound intensity is extremely wide.

*   The faintest audible sound has a pressure of about $2 \times 10^{-5}$ Pa.
*   The sound pressure at the threshold of pain is about 200 Pa.
*   This is a range of $10^7$ (10 million) in pressure.

It is impractical and difficult to work with such large numbers directly. Therefore, **logarithmic scales** are used to compress this range into more manageable numbers. These scales are based on **ratios** relative to a reference value.

---

### 5. Sound Pressure Level (SPL)

**Definition:** Sound Pressure Level ($L_p$) is a logarithmic measure of the **rms (root mean square) sound pressure** of a sound relative to a reference sound pressure.

*   **Formula:**
    $L_p = 20 \log_{10} \left( \frac{p}{p_{ref}} \right)$
    Where:
    *   $p$ is the **rms sound pressure** (in Pascals, Pa).
    *   $p_{ref}$ is the **reference sound pressure**. For air, the standard reference sound pressure is **$20 \mu Pa$** ($2 \times 10^{-5}$ Pa), which is approximately the threshold of human hearing.

*   **Units:** Sound Pressure Level is measured in **decibels (dB)**.

**Explanation of the 20:**
The factor of 20 arises because sound pressure is a **linear quantity**, and sound intensity (which is proportional to the square of sound pressure, $p^2$) is the quantity directly related to energy. When taking the logarithm of a squared term ($log(p^2)$), it becomes $2 \times log(p)$, hence the 20.

**Key Concept:** SPL is the most common way to express sound levels in everyday contexts and in noise regulations.

---

### 6. Sound Intensity Level (SIL)

**Definition:** Sound Intensity Level ($L_I$) is a logarithmic measure of the **sound intensity** of a sound relative to a reference sound intensity.

*   **Formula:**
    $L_I = 10 \log_{10} \left( \frac{I}{I_{ref}} \right)$
    Where:
    *   $I$ is the **sound intensity** (in W/m²).
    *   $I_{ref}$ is the **reference sound intensity**. For air, the standard reference sound intensity is **$10^{-12}$ W/m²**, which corresponds to the intensity of a plane wave with a pressure of $20 \mu Pa$.

*   **Units:** Sound Intensity Level is also measured in **decibels (dB)**.

**Explanation of the 10:**
The factor of 10 is used because sound intensity is directly related to energy, and the decibel scale for power/energy quantities uses a factor of 10 ($10 \log_{10}$).

**Key Concept:** SIL provides a measure of the "acoustic power flow" per unit area and is a more fundamental measure of the sound wave's energy. It is often used in more technical acoustic measurements and research.

---

### 7. Relationship between SPL and SIL in Free-Field Conditions

In a **free field** (an environment with no reflections), the relationship between sound pressure and sound intensity is well-defined. For a plane wave propagating in a free field:

*   $I = \frac{p^2}{\rho c}$

Let's substitute this into the SIL formula:
$L_I = 10 \log_{10} \left( \frac{p^2 / (\rho c)}{I_{ref}} \right)$

We know that $I_{ref} = \frac{p_{ref}^2}{\rho c}$, where $p_{ref} = 20 \mu Pa$.

So,
$L_I = 10 \log_{10} \left( \frac{p^2 / (\rho c)}{p_{ref}^2 / (\rho c)} \right)$
$L_I = 10 \log_{10} \left( \frac{p^2}{p_{ref}^2} \right)$
$L_I = 10 \log_{10} \left( \left(\frac{p}{p_{ref}}\right)^2 \right)$
$L_I = 10 \times 2 \log_{10} \left( \frac{p}{p_{ref}} \right)$
$L_I = 20 \log_{10} \left( \frac{p}{p_{ref}} \right)$

**Therefore, in free-field conditions, the Sound Intensity Level ($L_I$) is equal to the Sound Pressure Level ($L_p$).**

$L_I = L_p$

**Important Note:** This equality holds true only in ideal free-field conditions. In enclosed spaces with reflections, the relationship can become more complex, and SPL and SIL may differ.

---

### 8. Practical Implications and Examples

*   **Doubling of Sound Pressure:** If sound pressure doubles ($p_{new} = 2p$), the sound intensity quadruples ($I_{new} = (2p)^2 / (\rho c) = 4 p^2 / (\rho c) = 4I$).
    *   In terms of SPL: $L_{p,new} = 20 \log_{10}(2p/p_{ref}) = 20(\log_{10}2 + \log_{10}(p/p_{ref})) = 20 \log_{10}2 + 20 \log_{10}(p/p_{ref}) \approx 6 \text{ dB} + L_p$.
    *   So, a doubling of sound pressure results in approximately a **6 dB increase** in SPL.

*   **Doubling of Sound Intensity:** If sound intensity doubles ($I_{new} = 2I$), the sound pressure increases by a factor of $\sqrt{2}$ ($p_{new}^2 = 2I \times \rho c = 2 \times (p^2 / (\rho c)) \times \rho c = 2p^2$, so $p_{new} = \sqrt{2}p$).
    *   In terms of SIL: $L_{I,new} = 10 \log_{10}(2I/I_{ref}) = 10(\log_{10}2 + \log_{10}(I/I_{ref})) = 10 \log_{10}2 + 10 \log_{10}(I/I_{ref}) \approx 3 \text{ dB} + L_I$.
    *   So, a doubling of sound intensity results in approximately a **3 dB increase** in SIL.

*   **Hearing Threshold:** The threshold of human hearing is often defined as:
    *   Sound Pressure: $p_{ref} = 20 \mu Pa = 2 \times 10^{-5}$ Pa
    *   Sound Intensity: $I_{ref} = 10^{-12}$ W/m²
    *   $L_p$ at threshold = $20 \log_{10}(20 \mu Pa / 20 \mu Pa) = 20 \log_{10}(1) = 0$ dB.
    *   $L_I$ at threshold = $10 \log_{10}(10^{-12} W/m² / 10^{-12} W/m²) = 10 \log_{10}(1) = 0$ dB.

*   **Typical Noises:**
    *   Whisper: ~30 dB SPL
    *   Normal Conversation: ~60 dB SPL
    *   Busy Street: ~80 dB SPL
    *   Rock Concert: ~120 dB SPL
    *   Jet Engine (close): ~140 dB SPL

---

### 9. Conversion between Levels and Pressures/Intensities

*   **SPL to Sound Pressure:**
    $10^{(L_p / 20)} = \frac{p}{p_{ref}}$
    $p = p_{ref} \times 10^{(L_p / 20)}$
    $p = 20 \mu Pa \times 10^{(L_p / 20)}$

*   **SIL to Sound Intensity:**
    $10^{(L_I / 10)} = \frac{I}{I_{ref}}$
    $I = I_{ref} \times 10^{(L_I / 10)}$
    $I = 10^{-12} W/m² \times 10^{(L_I / 10)}$

---

### 10. Important Points to Remember

*   **Sound Pressure (p):** Fluctuations in atmospheric pressure, measured in Pascals (Pa).
*   **Sound Intensity (I):** Rate of energy flow per unit area, measured in Watts per square meter (W/m²).
*   **Logarithmic Scales (dB):** Used to handle the vast range of sound pressures and intensities.
*   **Sound Pressure Level (SPL, $L_p$):** Logarithmic measure of sound pressure ($20 \log_{10}(p/p_{ref})$), with $p_{ref} = 20 \mu Pa$.
*   **Sound Intensity Level (SIL, $L_I$):** Logarithmic measure of sound intensity ($10 \log_{10}(I/I_{ref})$), with $I_{ref} = 10^{-12}$ W/m².
*   **Free-Field Equality:** In free-field conditions, $L_p = L_I$.
*   **6 dB Rule:** A doubling of sound pressure results in a ~6 dB increase in SPL.
*   **3 dB Rule:** A doubling of sound intensity results in a ~3 dB increase in SIL.

---

### Practice Questions and Exercises

**Question 1:**
What is the unit of sound pressure?
A) Watts per square meter (W/m²)
B) Pascals (Pa)
C) Decibels (dB)
D) Hertz (Hz)

**Answer:** B) Pascals (Pa)

---

**Question 2:**
Sound intensity is defined as the rate of energy flow per unit _______.
A) Volume
B) Frequency
C) Area
D) Time

**Answer:** C) Area

---

**Question 3:**
The reference sound pressure level for air is typically set at:
A) $10^{-12}$ Pa
B) $20$ Pa
C) $20 \mu Pa$
D) $1 Pa$

**Answer:** C) $20 \mu Pa$

---

**Question 4:**
If the sound pressure doubles, by approximately how many decibels does the Sound Pressure Level (SPL) increase?
A) 3 dB
B) 6 dB
C) 10 dB
D) 20 dB

**Answer:** B) 6 dB

---

**Question 5:**
Calculate the sound pressure level (SPL) in dB for a sound pressure of $0.5$ Pa. Use $p_{ref} = 20 \mu Pa$.

**Answer:**
$L_p = 20 \log_{10} \left( \frac{p}{p_{ref}} \right)$
$L_p = 20 \log_{10} \left( \frac{0.5 \text{ Pa}}{20 \times 10^{-6} \text{ Pa}} \right)$
$L_p = 20 \log_{10} \left( \frac{0.5}{0.00002} \right)$
$L_p = 20 \log_{10} (25000)$
$L_p \approx 20 \times 4.398$
$L_p \approx 87.96$ dB

---

**Question 6:**
If the sound intensity is $1 \times 10^{-5}$ W/m², calculate the Sound Intensity Level (SIL) in dB. Use $I_{ref} = 10^{-12}$ W/m².

**Answer:**
$L_I = 10 \log_{10} \left( \frac{I}{I_{ref}} \right)$
$L_I = 10 \log_{10} \left( \frac{1 \times 10^{-5} \text{ W/m}^2}{10^{-12} \text{ W/m}^2} \right)$
$L_I = 10 \log_{10} (10^{-5 - (-12)})$
$L_I = 10 \log_{10} (10^7)$
$L_I = 10 \times 7$
$L_I = 70$ dB

---

**Question 7:**
In a free field, a sound source produces a sound intensity of $5 \times 10^{-4}$ W/m². What is the Sound Pressure Level (SPL) of the sound?

**Answer:**
First, calculate the SIL:
$L_I = 10 \log_{10} \left( \frac{5 \times 10^{-4} \text{ W/m}^2}{10^{-12} \text{ W/m}^2} \right)$
$L_I = 10 \log_{10} (5 \times 10^8)$
$L_I \approx 10 \times 8.699$
$L_I \approx 87.0$ dB

Since it's a free field, $L_p = L_I$.
Therefore, SPL $\approx 87.0$ dB.

---

This concludes the topic on Sound Intensity and Sound Pressure Levels. Understanding these fundamental concepts is crucial for analyzing and controlling noise pollution.
