---
title: "Levels, decibel, sound pressure level, sound power level, and sound intensity level"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 1: Acoustics, sound and noise, generation of sound"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fda"
status: "completed"
scrapedAt: "2026-05-20T18:09:29.966Z"
---
# ACOUSTICS AND NOISE CONTROL: Module 1 - Acoustics, Sound and Noise, Generation of Sound

## Topic: Levels, Decibel, Sound Pressure Level, Sound Power Level, and Sound Intensity Level

---

### Introduction to Acoustics and Sound

**Definition:** Acoustics is the science and engineering that deals with the study of all mechanical waves in gases, liquids, and solids, including vibration, sound, ultrasound, and infrasound.

**Sound:** Sound is a mechanical wave that propagates through a medium (like air, water, or solids) as vibrations. These vibrations are typically caused by a source and are perceived by our ears as auditory sensation.

**Noise:** Noise is generally defined as unwanted or disturbing sound. The perception of what constitutes noise is subjective and can depend on context, loudness, frequency content, and personal preference.

---

### Course Outcomes Alignment

This topic directly addresses:

*   **CO1 (K2): To define various acoustic terminologies and understand the physics behind acoustic wave propagation.**
    *   We will define key terms like decibel, sound pressure level, sound power level, and sound intensity level.
    *   Understanding these levels requires grasping the fundamental physics of how sound energy is measured and quantified.
*   **CO3 (K2): To understand the mechanism of hearing, noise regulations and noise measuring devices.**
    *   While this topic doesn't directly cover hearing mechanisms or regulations, the concepts of sound levels are foundational for understanding how noise is measured (noise measuring devices) and how it's regulated (e.g., dB(A) limits).

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the concept of the decibel (dB) as a unit of logarithmic comparison.
*   Define and differentiate between Sound Pressure Level (SPL), Sound Power Level (SWL), and Sound Intensity Level (SIL).
*   Explain the reference quantities used for each level.
*   Perform basic calculations involving decibels.
*   Appreciate why logarithmic scales are used in acoustics.

---

### 1. The Decibel (dB) - A Logarithmic Unit

**Key Concept:** In acoustics, we often deal with a very wide range of sound pressures and intensities. To manage these large numbers and align with human perception, a logarithmic scale is used. The decibel (dB) is the fundamental unit for expressing ratios on a logarithmic scale.

**Definition:** A decibel is a dimensionless unit used to express the ratio of two values of a physical quantity, often power or intensity. It is defined as 10 times the base-10 logarithm of the ratio.

*   **Formula:**
    $$ \text{Decibel (dB)} = 10 \log_{10} \left( \frac{\text{Measured Value}}{\text{Reference Value}} \right) $$

**Why Use Decibels?**

1.  **Wide Dynamic Range:** Human hearing can detect sounds ranging from the faintest whisper to the roar of a jet engine – a difference of over a trillion in sound pressure. Decibels compress this vast range into a more manageable scale (typically 0-130 dB).
2.  **Human Perception:** The loudness of sound, as perceived by humans, is roughly proportional to the logarithm of the sound intensity. Decibels closely mimic this subjective response.
3.  **Simplifies Calculations:** Multiplying or dividing sound intensity levels in linear terms becomes adding or subtracting decibel values, which is often easier.

**Important Point:** A 10 dB increase corresponds to a 10-fold increase in power or intensity. A 3 dB increase corresponds to a doubling of power or intensity.

**Example:**
If sound source A has a power of 1 Watt and sound source B has a power of 10 Watts, the difference in power level is:
$10 \log_{10} (10/1) = 10 \log_{10} (10) = 10 \times 1 = 10$ dB.

---

### 2. Sound Pressure Level (SPL)

**Key Concept:** Sound pressure is the local deviation from the ambient atmospheric pressure caused by a sound wave. Sound Pressure Level (SPL) is the most commonly used measure to quantify sound loudness.

**Definition:** Sound Pressure Level (SPL) is a logarithmic measure of the effective sound pressure of a sound relative to a reference value.

*   **What is Sound Pressure?** Sound waves cause compressions and rarefactions in the medium, leading to changes in pressure. This pressure fluctuation is called acoustic pressure, denoted by $p$.
*   **Reference Pressure ($p_{ref}$):** The standard reference pressure in air is $20$ micropascals ($20 \, \mu \text{Pa}$ or $2 \times 10^{-5} \, \text{Pa}$). This is approximately the threshold of human hearing at $1 \, \text{kHz}$.
*   **Formula:**
    $$ \text{SPL (in dB)} = 10 \log_{10} \left( \frac{p^2}{p_{ref}^2} \right) = 20 \log_{10} \left( \frac{p}{p_{ref}} \right) $$
    *   **Note:** The factor of 20 appears because sound power (or intensity) is proportional to the square of the sound pressure ($P \propto p^2$).

**Important Points:**

*   SPL is measured in units of decibels (dB).
*   It is dependent on the medium (air, water) and the distance from the source.
*   It is a measure of the *effect* of a sound wave on a receiver (like our ears).

**Typical SPL Values (Approximate):**

| Sound Source                 | SPL (dB) |
| :--------------------------- | :------- |
| Threshold of Hearing         | 0        |
| Quiet Library                | 40       |
| Normal Conversation          | 60       |
| Busy Street                  | 75       |
| Motorcycle                   | 95       |
| Rock Concert                 | 110      |
| Jet Engine (at 30m)          | 140      |

**Referencing Textbooks:**
*   **Ekinsler, Frey, Coppens, Sanders (Fundamentals of Acoustics):** Chapter 5 discusses sound pressure, particle velocity, and impedance, which are fundamental to understanding SPL. They emphasize that SPL is a measure of the acoustic pressure amplitude relative to a reference pressure.
*   **Ver & Beranek (Noise and Vibration Control Engineering):** Chapter 2 provides a thorough introduction to sound fields, including sound pressure, and its measurement. They explain the rationale behind using dB scales for SPL.

**Example Calculation:**
If the measured sound pressure is $1 \, \text{Pa}$, what is the SPL?
$ \text{SPL} = 20 \log_{10} \left( \frac{1 \, \text{Pa}}{2 \times 10^{-5} \, \text{Pa}} \right) = 20 \log_{10} (50000) = 20 \times 4.6989... \approx 94 \, \text{dB} $

---

### 3. Sound Power Level (SWL)

**Key Concept:** Sound Power is the total acoustic energy radiated by a sound source per unit time. Sound Power Level (SWL) quantifies this radiated power.

**Definition:** Sound Power Level (SWL) is a logarithmic measure of the sound power of a source relative to a reference value.

*   **What is Sound Power?** It's an intrinsic property of the sound source, representing how much acoustic energy it emits, regardless of the environment or distance. It's measured in Watts (W).
*   **Reference Power ($W_{ref}$):** The standard reference power is $10^{-12}$ Watts ($1 \, \text{pW}$).
*   **Formula:**
    $$ \text{SWL (in dB)} = 10 \log_{10} \left( \frac{W}{W_{ref}} \right) $$

**Important Points:**

*   SWL is measured in decibels (dB).
*   It is a property of the *source* itself and is independent of distance and the surrounding environment.
*   It is useful for comparing the acoustic output of different sound sources.
*   To determine SWL, one typically measures sound pressure levels at multiple points around the source in a defined sound field (e.g., a reverberant room or an anechoic room) and then calculates the total sound power.

**Referencing Textbooks:**
*   **Ver & Beranek (Noise and Vibration Control Engineering):** Chapter 2 discusses sound power and its relation to sound pressure. They explain the difficulties in directly measuring sound power and the methods used to determine it indirectly through SPL measurements.
*   **Munjal (Noise and Vibration Control):** Chapter 1 introduces acoustic quantities, including sound power, and its measurement. He highlights SWL as a source characteristic that is independent of the listener's position.

**Example:**
A motor emits $10^{-3}$ Watts of acoustic power. What is its SWL?
$ \text{SWL} = 10 \log_{10} \left( \frac{10^{-3} \, \text{W}}{10^{-12} \, \text{W}} \right) = 10 \log_{10} (10^9) = 10 \times 9 = 90 \, \text{dB} $

---

### 4. Sound Intensity Level (SIL)

**Key Concept:** Sound Intensity is the rate of sound energy flow per unit area. It's a vector quantity, indicating the direction of energy propagation. Sound Intensity Level (SIL) quantifies this intensity.

**Definition:** Sound Intensity Level (SIL) is a logarithmic measure of the sound intensity relative to a reference value.

*   **What is Sound Intensity?** It represents the power passing through a unit area perpendicular to the direction of propagation. It's measured in Watts per square meter ($ \text{W/m}^2 $). For a plane wave in air, $I = p^2 / (\rho c)$, where $\rho$ is the air density and $c$ is the speed of sound. The product $\rho c$ is called the characteristic impedance of the medium.
*   **Reference Intensity ($I_{ref}$):** The standard reference intensity in air is $10^{-12}$ Watts per square meter ($1 \, \mu \text{W/m}^2$).
*   **Formula:**
    $$ \text{SIL (in dB)} = 10 \log_{10} \left( \frac{I}{I_{ref}} \right) $$

**Important Points:**

*   SIL is measured in decibels (dB).
*   It is a measure of the sound energy flow rate per unit area.
*   It's a vector quantity, but SIL typically refers to the magnitude.
*   Sound intensity measurements are direct measurements of the energy flow and are valuable for pinpointing noise sources and quantifying sound transmission through surfaces.

**Relationship between SPL and SIL (for plane waves in air):**
Since $I = p^2 / (\rho c)$ and $I_{ref} = p_{ref}^2 / (\rho c)$ (where $p_{ref}$ is the reference pressure and $\rho c$ is the characteristic impedance, approximately 400 Rayls for air at room temperature), we can relate SPL and SIL:

$ \text{SIL} = 10 \log_{10} \left( \frac{I}{I_{ref}} \right) = 10 \log_{10} \left( \frac{p^2 / (\rho c)}{p_{ref}^2 / (\rho c)} \right) = 10 \log_{10} \left( \frac{p^2}{p_{ref}^2} \right) $
This is the same formula as SPL. Therefore, **for plane waves in air, the numerical value of SIL is equal to the numerical value of SPL.** This is a crucial point.

**Referencing Textbooks:**
*   **Ver & Beranek (Noise and Vibration Control Engineering):** Chapter 2 discusses sound intensity as a fundamental quantity representing energy flow and its measurement using intensity probes. They explain its utility in source localization.
*   **Crocker (Handbook of Noise and Vibration Control):** Chapter 1 covers sound intensity measurement techniques and their applications in noise diagnostics and mapping.
*   **Barron (Industrial Noise Control and Acoustics):** Chapter 2 explains sound intensity and its relation to sound power and pressure, detailing measurement methods.

**Example:**
A sound intensity of $10^{-5} \, \text{W/m}^2$ is measured. What is the SIL?
$ \text{SIL} = 10 \log_{10} \left( \frac{10^{-5} \, \text{W/m}^2}{10^{-12} \, \text{W/m}^2} \right) = 10 \log_{10} (10^7) = 10 \times 7 = 70 \, \text{dB} $

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### Summary of Levels and Reference Quantities

| Level Type             | Symbol | Quantity Measured | Unit of Quantity | Reference Quantity              | Formula (dB)                                   | Notes                                                  |
| :--------------------- | :----- | :---------------- | :--------------- | :------------------------------ | :--------------------------------------------- | :----------------------------------------------------- |
| Sound Pressure Level   | SPL    | Sound Pressure    | Pascals (Pa)     | $2 \times 10^{-5}$ Pa           | $20 \log_{10} (p/p_{ref})$                     | Measured at a point; perceived loudness; medium-dependent |
| Sound Power Level      | SWL    | Sound Power       | Watts (W)        | $10^{-12}$ W                    | $10 \log_{10} (W/W_{ref})$                     | Property of the source; independent of environment     |
| Sound Intensity Level  | SIL    | Sound Intensity   | W/m²             | $10^{-12}$ W/m²                 | $10 \log_{10} (I/I_{ref})$                     | Energy flow rate per area; vector quantity          |

---

### Combining Decibel Levels

**Key Concept:** When dealing with multiple sound sources or sound arriving from different directions, it's common to need to combine their contributions. Because decibels are logarithmic, you cannot simply add or subtract them linearly.

**For Sound Power Levels (SWL) or Sound Intensity Levels (SIL) (when sources are uncorrelated):**
You must convert them back to linear power or intensity, add them, and then convert back to dB.

Let $L_1$ and $L_2$ be two sound power or intensity levels in dB.
The corresponding power or intensity values are $W_1 = W_{ref} 10^{L_1/10}$ and $W_2 = W_{ref} 10^{L_2/10}$.

The total power or intensity is $W_{total} = W_1 + W_2$.
The total level is $L_{total} = 10 \log_{10} \left( \frac{W_{total}}{W_{ref}} \right) = 10 \log_{10} \left( \frac{W_1 + W_2}{W_{ref}} \right)$.

Substituting the expressions for $W_1$ and $W_2$:
$$ L_{total} = 10 \log_{10} \left( \frac{W_{ref} 10^{L_1/10} + W_{ref} 10^{L_2/10}}{W_{ref}} \right) $$
$$ L_{total} = 10 \log_{10} (10^{L_1/10} + 10^{L_2/10}) $$

**Example:**
Two identical machines each produce a sound power level of 80 dB. What is the combined SWL?
$ L_{total} = 10 \log_{10} (10^{80/10} + 10^{80/10}) $
$ L_{total} = 10 \log_{10} (10^8 + 10^8) $
$ L_{total} = 10 \log_{10} (2 \times 10^8) $
$ L_{total} = 10 (\log_{10} 2 + \log_{10} 10^8) $
$ L_{total} = 10 (0.301 + 8) $
$ L_{total} = 10 \times 8.301 = 83.01 \, \text{dB} $

**Key Observation:** When combining two identical uncorrelated sound sources, the total level increases by approximately 3 dB.

**For Sound Pressure Levels (SPL) (in a diffuse sound field or for uncorrelated sources):**
The same principle applies – convert to intensity, add, and convert back.
$$ L_{total\_SPL} = 10 \log_{10} (10^{L_{SPL1}/10} + 10^{L_{SPL2}/10}) $$
*   **Note:** If the sources are coherent (e.g., two speakers playing the same signal in phase), pressure levels can be added directly if they are at the same point, but this is a more advanced topic. For most noise control scenarios with multiple machines, we assume uncorrelated sources.

---

### Important Points to Remember

*   **Decibel is a Ratio:** Always remember that dB represents a ratio on a logarithmic scale.
*   **Reference Values are Crucial:** Without the correct reference values ($p_{ref}$, $W_{ref}$, $I_{ref}$), a dB value is meaningless.
*   **SPL vs. SWL:** SPL is related to the sound *pressure* at a point, while SWL is related to the sound *power* emitted by a source. SPL depends on distance; SWL does not.
*   **SIL vs. SPL:** For plane waves in air, SIL and SPL have the same numerical value in dB. SIL measures energy flow, which is useful for source localization.
*   **Adding dB:** You cannot simply add dB values. You must convert to linear power/intensity, add, and then convert back to dB.
*   **3 dB Rule:** Doubling the sound power/intensity of uncorrelated sources increases the dB level by approximately 3 dB. A 10 dB increase means 10 times the power/intensity.

---

### Practice Questions and Exercises

1.  **Conversion:** A sound source emits $0.05$ Watts of acoustic power. Calculate its Sound Power Level (SWL) in dB.
2.  **Conversion:** The sound pressure measured at a location is $0.2 \, \text{Pa}$. Calculate the Sound Pressure Level (SPL) in dB, assuming the reference pressure is $2 \times 10^{-5} \, \text{Pa}$.
3.  **Comparison:** A vacuum cleaner has an SWL of 90 dB. A fan has an SWL of 85 dB. Which device emits more acoustic power? How many times more?
4.  **Combining Levels:** Two identical industrial fans, each producing an SWL of 85 dB, are operating simultaneously. What is the combined SWL?
5.  **Concept Check:** Explain the difference between Sound Power Level and Sound Pressure Level, and why the distinction is important in noise control.
6.  **Logarithmic Scale:** If a sound increases its intensity by a factor of 1000, by how many decibels does its Sound Intensity Level (SIL) increase?

---

### Answers to Practice Questions

1.  **SWL Calculation:**
    $ W_{ref} = 10^{-12} \, \text{W} $
    $ W = 0.05 \, \text{W} = 5 \times 10^{-2} \, \text{W} $
    $ \text{SWL} = 10 \log_{10} \left( \frac{5 \times 10^{-2} \, \text{W}}{10^{-12} \, \text{W}} \right) = 10 \log_{10} (5 \times 10^{10}) $
    $ \text{SWL} = 10 (\log_{10} 5 + \log_{10} 10^{10}) = 10 (0.699 + 10) = 10 \times 10.699 \approx 107 \, \text{dB} $

2.  **SPL Calculation:**
    $ p_{ref} = 2 \times 10^{-5} \, \text{Pa} $
    $ p = 0.2 \, \text{Pa} $
    $ \text{SPL} = 20 \log_{10} \left( \frac{0.2 \, \text{Pa}}{2 \times 10^{-5} \, \text{Pa}} \right) = 20 \log_{10} (10000) $
    $ \text{SPL} = 20 \log_{10} (10^4) = 20 \times 4 = 80 \, \text{dB} $

3.  **Comparison:**
    Vacuum cleaner SWL = 90 dB
    Fan SWL = 85 dB

    The vacuum cleaner emits more acoustic power because it has a higher SWL.
    To find how many times more, we look at the power ratio:
    Power Ratio $= 10^{(90-85)/10} = 10^{5/10} = 10^{0.5} \approx 3.16 $
    The vacuum cleaner emits approximately 3.16 times more acoustic power than the fan.

4.  **Combining Levels:**
    Let $L_1 = 85 \, \text{dB}$ and $L_2 = 85 \, \text{dB}$ (for identical fans).
    $ L_{total} = 10 \log_{10} (10^{L_1/10} + 10^{L_2/10}) $
    $ L_{total} = 10 \log_{10} (10^{85/10} + 10^{85/10}) $
    $ L_{total} = 10 \log_{10} (10^{8.5} + 10^{8.5}) $
    $ L_{total} = 10 \log_{10} (2 \times 10^{8.5}) $
    $ L_{total} = 10 (\log_{10} 2 + \log_{10} 10^{8.5}) $
    $ L_{total} = 10 (0.301 + 8.5) = 10 \times 8.801 \approx 88 \, \text{dB} $
    (Note: Since the sources are identical, the increase is 3 dB, from 85 dB to 88 dB).

5.  **Difference between SWL and SPL:**
    *   **SWL:** Represents the acoustic power *emitted* by a source. It is an intrinsic property of the source and is independent of the listener's position or the acoustic environment. It's measured in Watts and expressed logarithmically as dB (relative to $10^{-12}$ W).
    *   **SPL:** Represents the sound pressure *at a specific point* in space. It is dependent on the source's power, distance from the source, and the acoustic environment (reflections, absorption). It's measured in Pascals and expressed logarithmically as dB (relative to $2 \times 10^{-5}$ Pa).
    *   **Importance:** In noise control, we often need to identify the loudest *sources* (using SWL) and then assess the noise *impact* at a listener's position (using SPL). A loud source (high SWL) might not create high SPL at a distant location if sound propagates well. Conversely, a moderate source might create high SPL if the listener is very close or the sound is amplified by reflections.

6.  **Logarithmic Scale Increase:**
    Let $I_1$ and $I_2$ be two sound intensities.
    $ L_{SIL1} = 10 \log_{10} (I_1/I_{ref}) $
    $ L_{SIL2} = 10 \log_{10} (I_2/I_{ref}) $
    Given $I_2 = 1000 \times I_1$.
    $ L_{SIL2} = 10 \log_{10} (1000 \times I_1 / I_{ref}) $
    $ L_{SIL2} = 10 (\log_{10} 1000 + \log_{10} (I_1/I_{ref})) $
    $ L_{SIL2} = 10 (\log_{10} 10^3 + L_{SIL1}/10) $
    $ L_{SIL2} = 10 (3 + L_{SIL1}/10) $
    $ L_{SIL2} = 30 + L_{SIL1} $
    The increase in SIL is $L_{SIL2} - L_{SIL1} = 30 \, \text{dB}$.

---
This concludes Module 1, Topic: Levels, decibel, sound pressure level, sound power level, and sound intensity level.
---