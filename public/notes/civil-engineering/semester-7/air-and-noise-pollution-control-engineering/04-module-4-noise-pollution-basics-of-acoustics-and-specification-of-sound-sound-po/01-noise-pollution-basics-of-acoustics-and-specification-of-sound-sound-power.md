---
title: "Noise pollution: Basics of acoustics and specification of sound; sound power"
subject: "AIR AND NOISE POLLUTION CONTROL ENGINEERING"
module: "Module 4: Noise pollution: Basics of acoustics and specification of sound; sound power"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba811686"
status: "completed"
scrapedAt: "2026-05-20T18:57:19.717Z"
---
# AIR AND NOISE POLLUTION CONTROL ENGINEERING

## Module 4: Noise Pollution: Basics of Acoustics and Specification of Sound; Sound Power

This module introduces the fundamental principles of acoustics, the measurement and specification of sound, and the concept of sound power, all of which are crucial for understanding and controlling noise pollution.

---

### Learning Outcomes

By the end of this module, you should be able to:

*   Understand the basic principles of sound propagation and perception.
*   Define and explain key acoustic parameters such as sound pressure, sound intensity, and sound power.
*   Understand and apply logarithmic scales for measuring sound levels (e.g., decibels).
*   Explain the concept of frequency and its impact on sound perception.
*   Differentiate between various weighting networks (A, B, C, Z) and their applications.
*   Define sound power and its significance in noise source characterization.
*   Understand how sound power levels are measured and expressed.
*   Relate sound pressure, intensity, and power through practical examples.

---

### 1. Basics of Acoustics and Sound Perception

#### 1.1 What is Sound?

Sound is a **vibration** that propagates as an **acoustic wave**, through a transmission medium such as a gas, liquid, or solid. In essence, it's a form of energy transfer.

*   **Mechanism of Sound Production:** Sound is typically produced by a vibrating source. This vibration causes the surrounding medium (usually air) to vibrate, creating compressions and rarefactions (areas of high and low pressure).
*   **Propagation:** These compressions and rarefactions travel outwards from the source as **longitudinal waves**. In air, sound travels as pressure variations.
*   **Perception:** When these pressure variations reach our ears, they cause the eardrum to vibrate, which is then interpreted by our brain as sound.

#### 1.2 Key Acoustic Parameters

##### 1.2.1 Sound Pressure

*   **Definition:** Sound pressure is the **local pressure deviation** from the ambient atmospheric pressure caused by a sound wave. It is the most common quantity measured by sound level meters.
*   **Units:** Sound pressure is measured in Pascals (Pa).
*   **Nature:** Sound pressure is a **dynamic quantity** that fluctuates over time as the sound wave passes.
*   **Relationship to Wave:** The amplitude of the pressure variation is directly related to the "loudness" of the sound.
*   **Example:** A normal conversation might have sound pressure variations of around 20 microPascals (µPa). The threshold of human hearing is approximately 20 µPa.

##### 1.2.2 Sound Intensity

*   **Definition:** Sound intensity is the **time-averaged rate of sound energy flow through a unit area** that is perpendicular to the direction of propagation of the sound wave.
*   **Units:** Sound intensity is measured in Watts per square meter (W/m²).
*   **Nature:** Sound intensity is a **vector quantity**, meaning it has both magnitude and direction. It describes the power carried by the sound wave per unit area.
*   **Relationship to Sound Pressure:** For plane waves in a free field, sound intensity ($I$) is related to sound pressure ($p$) by the following equation:
    $I = \frac{p^2}{\rho c}$
    Where:
    *   $p$ is the RMS (Root Mean Square) sound pressure.
    *   $\rho$ is the density of the medium (e.g., air).
    *   $c$ is the speed of sound in the medium.
    *   $\rho c$ is the specific acoustic impedance of the medium.
*   **Example:** For air at standard temperature and pressure, $\rho c \approx 413$ Pa·s/m. If the sound pressure is 20 Pa (a very loud sound), the intensity would be approximately $20^2 / 413 \approx 0.97$ W/m².

##### 1.2.3 Sound Power

*   **Definition:** Sound power is the **total acoustic energy radiated by a source per unit time**. It is an inherent property of the sound source itself, independent of the surrounding environment or the listener's position.
*   **Units:** Sound power is measured in Watts (W).
*   **Nature:** Sound power is a **scalar quantity**, representing the total "strength" of the sound source.
*   **Significance:** Sound power is a more fundamental measure of a noise source than sound pressure or intensity because it is independent of distance and direction. It allows for comparing the noise-generating capabilities of different sources.
*   **Example:** A running engine has a certain sound power output. This power spreads out in all directions.

#### 1.3 The Decibel (dB) Scale - Logarithmic Representation

Because the range of sound pressures and intensities that humans can perceive is vast, logarithmic scales are used to express these values. This makes the numbers more manageable and aligns better with human perception of loudness.

##### 1.3.1 Sound Pressure Level (Lp)

*   **Definition:** Sound Pressure Level (Lp) is a logarithmic measure of the RMS sound pressure relative to a reference sound pressure.
*   **Formula:**
    $L_p = 20 \log_{10} \left( \frac{p}{p_{ref}} \right)$ dB
    Where:
    *   $p$ is the RMS sound pressure in Pascals (Pa).
    *   $p_{ref}$ is the reference sound pressure, which is the threshold of human hearing, defined as $20 \times 10^{-6}$ Pa (or 20 µPa).
*   **Key Points:**
    *   The factor of 20 comes from the fact that sound pressure is proportional to the square root of sound intensity, and intensity is proportional to the square of pressure. $10 \log_{10} (p^2/p_{ref}^2) = 20 \log_{10} (p/p_{ref})$.
    *   An increase of 20 dB corresponds to a tenfold increase in sound pressure.
    *   An increase of 6 dB corresponds to a doubling of sound pressure (approximately).
    *   An increase of 10 dB corresponds to a tenfold increase in sound intensity.
    *   An increase of 3 dB corresponds to a doubling of sound intensity (approximately).

##### 1.3.2 Sound Intensity Level (LI)

*   **Definition:** Sound Intensity Level (LI) is a logarithmic measure of sound intensity relative to a reference sound intensity.
*   **Formula:**
    $L_I = 10 \log_{10} \left( \frac{I}{I_{ref}} \right)$ dB
    Where:
    *   $I$ is the sound intensity in W/m².
    *   $I_{ref}$ is the reference sound intensity, which is $10^{-12}$ W/m².
*   **Key Points:**
    *   The factor of 10 comes from the fact that intensity is proportional to the square of pressure.
    *   A sound intensity of $10^{-12}$ W/m² corresponds to a sound pressure level of 0 dB.

##### 1.3.3 Sound Power Level (Lw)

*   **Definition:** Sound Power Level (Lw) is a logarithmic measure of sound power relative to a reference sound power.
*   **Formula:**
    $L_W = 10 \log_{10} \left( \frac{W}{W_{ref}} \right)$ dB
    Where:
    *   $W$ is the sound power in Watts (W).
    *   $W_{ref}$ is the reference sound power, which is $10^{-12}$ W.
*   **Key Points:**
    *   This is a crucial parameter for characterizing noise sources.
    *   It is independent of distance and environmental conditions.

#### 1.4 Frequency and its Perception

*   **Definition:** Frequency is the **number of complete cycles of a sound wave that pass a given point per second**.
*   **Units:** Frequency is measured in Hertz (Hz). 1 Hz = 1 cycle per second.
*   **Perception:** Frequency determines the **pitch** of a sound.
    *   Low frequencies correspond to low pitches (e.g., bass sounds).
    *   High frequencies correspond to high pitches (e.g., whistles).
*   **Human Hearing Range:** The typical human hearing range is from approximately 20 Hz to 20,000 Hz (20 kHz).
*   **Infrasound:** Frequencies below 20 Hz.
*   **Ultrasound:** Frequencies above 20 kHz.
*   **Importance in Noise Control:** Different frequencies have different impacts on human health and comfort. Some noise control strategies are frequency-dependent.

#### 1.5 Weighting Networks

Sound level meters often incorporate weighting networks to adjust the measured sound pressure level to better reflect human hearing perception, which is not equally sensitive to all frequencies.

##### 1.5.1 A-Weighting (dBA)

*   **Purpose:** The **most commonly used** weighting network. It approximates the average human ear's response at moderate sound levels. It attenuates low and very high frequencies, similar to how our ears do.
*   **Application:** Used for general noise assessments, environmental noise measurements, and regulations.
*   **Example:** A machine producing noise across a wide spectrum might have a lower dBA reading than its overall sound pressure level because the A-weighting filters out the less audible low-frequency components.

##### 1.5.2 B-Weighting (dBB)

*   **Purpose:** Designed to approximate the human ear's response at higher sound levels. Less commonly used than A-weighting.

##### 1.5.3 C-Weighting (dBC)

*   **Purpose:** Approximates the human ear's response at very high sound levels. It has a flatter response than A-weighting, with less attenuation at low frequencies.
*   **Application:** Useful for assessing impulsive sounds or when low-frequency noise is significant.

##### 1.5.4 Z-Weighting (dBZ or Linear)

*   **Purpose:** Represents a **flat frequency response** across a specified range (e.g., 10 Hz to 20 kHz or more). It measures the sound pressure level without any frequency weighting.
*   **Application:** Used for scientific and engineering purposes where the true sound pressure spectrum is needed without human perception bias. Also used as a reference for defining other weighting curves.

**Important Point to Remember:** When measuring noise, specifying the weighting network (e.g., dBA, dBC) is crucial for accurate interpretation.

---

### 2. Sound Power

#### 2.1 Definition and Significance

*   **Sound Power (W):** The total acoustic energy radiated by a source per unit time. It's an intrinsic property of the source, like wattage for an electrical appliance.
*   **Significance:**
    *   **Source Comparison:** Allows direct comparison of the noise-generating capability of different machines or equipment, regardless of where they are used or measured.
    *   **Predicting Noise Levels:** Can be used with acoustic models to predict sound pressure levels at various distances in different acoustic environments.
    *   **Regulatory Standards:** Often used in product noise emission standards.

#### 2.2 Measurement of Sound Power

Sound power is not directly measured in the same way as sound pressure. Instead, it is *calculated* from measurements of sound pressure or sound intensity under specific conditions.

##### 2.2.1 Measurement in a Free Field Over a Reflecting Plane

*   **Scenario:** Typically used for noise sources placed on a hard, reflective surface (e.g., factory floor, ground).
*   **Method:** Sound pressure levels are measured at multiple points on a hypothetical surface (e.g., hemisphere, box) surrounding the source.
*   **Calculation:** The sound power is calculated using the following relationship (simplified for a hemispherical surface in a free field):
    $L_W = L_p + 10 \log_{10} \left( \frac{A}{A_{ref}} \right)$ dB
    Where:
    *   $L_W$ is the sound power level.
    *   $L_p$ is the average sound pressure level measured on the surface.
    *   $A$ is the area of the measurement surface.
    *   $A_{ref}$ is the reference area, typically 1 m².
*   **Standards:** ISO 3744, ISO 3745, ISO 9614 series.

##### 2.2.2 Measurement Using Sound Intensity

*   **Method:** Sound intensity is measured directly using a sound intensity probe (typically a pair of closely spaced microphones). The sound intensity is calculated from the pressure and particle velocity or from the phase difference between the microphones.
*   **Advantage:** This method is more accurate, especially in reverberant or noisy environments, and can pinpoint noise sources.
*   **Calculation:**
    $L_W = L_I + 10 \log_{10} \left( \frac{S}{S_{ref}} \right)$ dB
    Where:
    *   $L_I$ is the average sound intensity level measured over the surface.
    *   $S$ is the area of the measurement surface enclosing the source.
    *   $S_{ref}$ is the reference area, typically 1 m².
*   **Standards:** ISO 9614-1, ISO 9614-2.

#### 2.3 Expressing Sound Power

Sound power is typically expressed as a **Sound Power Level (Lw)** in decibels (dB).

*   **Example:** A specific model of air conditioner might have a sound power level of 70 dB (re 1 pW) for its cooling mode and 75 dB (re 1 pW) for its fan mode. (Note: the reference power is often 1 picowatt (pW) for sound power, which is $10^{-12}$ W. The reference can vary by standard, so always check the specification).

---

### 3. Relating Sound Pressure, Intensity, and Power

The relationship between these quantities is governed by the environment and the distance from the source.

#### 3.1 Free Field (No Reflections)

*   **Point Source:** For a theoretical point source radiating sound equally in all directions (spherically) in a free field:
    *   **Sound Power (W):** Total energy radiated per unit time.
    *   **Sound Intensity (I):** As the sound wave travels outwards, the power spreads over a larger area. The area of a sphere with radius $r$ is $4\pi r^2$.
        $I(r) = \frac{W}{4\pi r^2}$
        This means intensity decreases with the square of the distance ($1/r^2$).
    *   **Sound Pressure (p):** For a plane wave in the far field, intensity is related to pressure by $I = p^2 / (\rho c)$.
        So, $p^2 \propto \frac{W}{\rho c \cdot 4\pi r^2}$.
        This means sound pressure ($p$) decreases with the distance ($1/r$).
*   **Sound Pressure Level (Lp) vs. Distance:** Since $L_p$ is proportional to $20 \log_{10}(p)$, and $p \propto 1/r$, the sound pressure level decreases by approximately 6 dB for every doubling of distance from a point source in a free field.
    $L_p(2r) \approx L_p(r) - 6$ dB

#### 3.2 Reverberant Field (Reflections from Surfaces)

*   **Scenario:** In enclosed spaces like rooms or factories, sound waves reflect off surfaces, contributing to the overall sound pressure.
*   **Effect:** The sound pressure level decreases much less rapidly with distance compared to a free field. In a highly reverberant field, far from the source, the sound pressure level can become relatively constant.
*   **Sound Power vs. Sound Pressure:** In a reverberant field, the relationship between sound power level and sound pressure level also includes a term related to the room acoustics (absorption and volume):
    $L_W \approx L_p + 10 \log_{10} \left( \frac{V}{A_{total} \cdot T} \right) - 10 \log_{10} \left( \frac{4}{A_{ref}} \right)$ dB (simplified)
    Where $T$ is the reverberation time and $A_{total}$ is the total absorption of the room.

---

### 4. Practice Questions and Answers

**Question 1:** If the sound pressure in a room increases from 20 µPa to 200 µPa, what is the change in Sound Pressure Level (Lp)?

**Answer 1:**
$L_{p1} = 20 \log_{10} \left( \frac{20 \times 10^{-6} \text{ Pa}}{20 \times 10^{-6} \text{ Pa}} \right) = 20 \log_{10}(1) = 0$ dB
$L_{p2} = 20 \log_{10} \left( \frac{200 \times 10^{-6} \text{ Pa}}{20 \times 10^{-6} \text{ Pa}} \right) = 20 \log_{10}(10) = 20 \log_{10}(10^1) = 20 \times 1 = 20$ dB
Change in Lp = $L_{p2} - L_{p1} = 20 \text{ dB} - 0 \text{ dB} = 20$ dB.
*Alternatively, since the sound pressure increased by a factor of 10 (200 µPa / 20 µPa = 10), the Lp increases by $20 \log_{10}(10) = 20$ dB.*

**Question 2:** What is the sound intensity level (LI) if the sound intensity is $10^{-5}$ W/m²? (Reference intensity = $10^{-12}$ W/m²)

**Answer 2:**
$L_I = 10 \log_{10} \left( \frac{10^{-5} \text{ W/m}^2}{10^{-12} \text{ W/m}^2} \right)$
$L_I = 10 \log_{10} (10^{-5 - (-12)})$
$L_I = 10 \log_{10} (10^7)$
$L_I = 10 \times 7 = 70$ dB

**Question 3:** A machine has a sound power of 0.01 Watts. What is its Sound Power Level (Lw) if the reference power is $10^{-12}$ Watts?

**Answer 3:**
$L_W = 10 \log_{10} \left( \frac{0.01 \text{ W}}{10^{-12} \text{ W}} \right)$
$L_W = 10 \log_{10} (0.01 \times 10^{12})$
$L_W = 10 \log_{10} (10^{-2} \times 10^{12})$
$L_W = 10 \log_{10} (10^{10})$
$L_W = 10 \times 10 = 100$ dB

**Question 4:** If you measure a sound pressure level of 80 dBA at 1 meter from a point source in a free field, what would you expect the sound pressure level to be at 4 meters from the source?

**Answer 4:**
In a free field, the sound pressure level decreases by approximately 6 dB for every doubling of distance.
Distance 1m: 80 dBA
Distance 2m (1m * 2): 80 - 6 = 74 dBA
Distance 4m (2m * 2): 74 - 6 = 68 dBA
So, the sound pressure level at 4 meters would be approximately 68 dBA.

**Question 5:** Which weighting network is most commonly used to assess environmental noise pollution and why?

**Answer 5:**
The A-weighting (dBA) is most commonly used. This is because it best approximates the way the human ear perceives loudness at moderate sound levels, filtering out frequencies that are less audible to humans.

---

### 5. Important Points to Remember

*   **Sound is vibration:** It requires a medium to propagate.
*   **Sound Pressure:** Measured in Pascals (Pa), the "loudness" we often perceive at a specific point.
*   **Sound Intensity:** Measured in Watts/m², the rate of energy flow per unit area.
*   **Sound Power:** Measured in Watts (W), the total energy output of a source, independent of distance.
*   **Decibel (dB) Scale:** A logarithmic scale used to express sound pressure, intensity, and power levels, making them more manageable and aligning with human perception.
    *   $L_p = 20 \log_{10}(p/p_{ref})$
    *   $L_I = 10 \log_{10}(I/I_{ref})$
    *   $L_W = 10 \log_{10}(W/W_{ref})$
*   **Frequency:** Measured in Hertz (Hz), determines the pitch of the sound.
*   **Weighting Networks:** A-weighting (dBA) is standard for environmental noise. C-weighting (dBC) is for high levels/low frequencies, and Z-weighting is linear.
*   **Free Field:** Sound pressure level decreases by ~6 dB per doubling of distance from a point source.
*   **Sound Power is Key:** For comparing noise sources directly, sound power is the most fundamental parameter. It's often calculated from sound pressure or intensity measurements.

---
