---
title: "Measurement of directivity factor"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 3: Ear its structure and function"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464002"
status: "completed"
scrapedAt: "2026-05-20T18:09:56.454Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 3: Ear, Its Structure and Function

### Topic: Measurement of Directivity Factor

---

### 1. Introduction to Directivity Factor ($Q$)

**What is Directivity Factor?**

The directivity factor ($Q$) is a dimensionless quantity that describes how a sound source concentrates its radiated sound energy in a particular direction compared to an omnidirectional source (a hypothetical source radiating sound equally in all directions). It quantifies the directional beaming of a sound source.

**Key Concepts:**

*   **Omnidirectional Source:** A theoretical sound source that emits sound energy uniformly in all directions. The directivity factor of an omnidirectional source is 1 ($Q = 1$).
*   **Directional Source:** A sound source that radiates sound energy more strongly in some directions than others. These sources have $Q > 1$.
*   **Sound Intensity ($I$):** The power per unit area carried by a sound wave. For a point source in free space, intensity decreases with the square of the distance ($I \propto 1/r^2$).
*   **Sound Power ($W$):** The total acoustic energy radiated by a source per unit time.

**Relevance to Ear Function and Noise Control:**

While this topic might seem distant from the ear's structure and function, understanding how sound sources direct their energy is crucial for:

*   **Noise Source Identification:** Identifying which specific machines or components are the dominant noise contributors in a particular direction.
*   **Noise Mitigation Strategies:** Tailoring noise control treatments to the specific directions where sound energy is most intense.
*   **Perception of Loudness:** The direction from which a sound arrives can influence our perception of its loudness and localization, although the directivity *factor* itself is a source characteristic, not a direct measure of perception.
*   **Sound Field Analysis:** Understanding how sound propagates from a source in an environment, impacting how it might reach the ear.

---

### 2. Definition and Calculation of Directivity Factor ($Q$)

**Formal Definition:**

The directivity factor ($Q$) of a source in a specific direction is defined as the ratio of the sound intensity radiated by the source in that direction to the sound intensity radiated by an omnidirectional source with the same total radiated sound power, assuming both sources are in a free field.

Mathematically:

$Q(\theta, \phi) = \frac{I(\theta, \phi)}{I_{omni}}$

Where:
*   $Q(\theta, \phi)$ is the directivity factor in the direction defined by spherical coordinates $(\theta, \phi)$.
*   $I(\theta, \phi)$ is the sound intensity in the direction $(\theta, \phi)$.
*   $I_{omni}$ is the sound intensity at the same distance from an omnidirectional source radiating the same total sound power.

**Alternative Calculation using Sound Pressure Level (SPL):**

Since sound intensity is proportional to the square of the sound pressure ($I \propto p^2$), we can also express $Q$ in terms of sound pressure levels.

Consider a source radiating sound power $W$.
For an omnidirectional source in a free field, the sound pressure at a distance $r$ is related to the source strength and inversely proportional to the distance. The sound intensity is:

$I_{omni} = \frac{W}{4\pi r^2}$

For a directional source, the sound intensity in a particular direction $(\theta, \phi)$ is:

$I(\theta, \phi) = \frac{W(\theta, \phi)}{4\pi r^2}$

Where $W(\theta, \phi)$ is the directional sound power in that direction.

The ratio of intensities is:

$Q(\theta, \phi) = \frac{I(\theta, \phi)}{I_{omni}} = \frac{W(\theta, \phi) / (4\pi r^2)}{W / (4\pi r^2)} = \frac{W(\theta, \phi)}{W}$

Since $W = \int_{4\pi} W(\theta, \phi) d\Omega$, where $d\Omega$ is the solid angle element.

**Relating to Sound Pressure Level (SPL):**

The sound pressure level (SPL) at a distance $r$ from a source is given by:

$L_p = 10 \log_{10} \left( \frac{p^2}{p_{ref}^2} \right) = 20 \log_{10} \left( \frac{p}{p_{ref}} \right)$

Where $p$ is the RMS sound pressure and $p_{ref}$ is the reference sound pressure (typically $20 \mu Pa$).

For an omnidirectional source in a free field, the sound pressure $p_{omni}$ is related to the source velocity and distance.
For a directional source, the sound pressure $p(\theta, \phi)$ will vary with direction.

The directivity factor $Q$ can also be related to the difference in sound pressure levels:

$L_p(\theta, \phi) = 10 \log_{10} \left( \frac{W \cdot Z_{ac}}{4\pi r^2 \cdot p_{ref}^2} \right) + 10 \log_{10} Q(\theta, \phi)$

Where $Z_{ac}$ is the specific acoustic impedance of the medium.

A more practical definition for measurement purposes often involves comparing the SPL in a particular direction to the average SPL in all directions, or to the SPL at a reference direction.

**Directivity Index (DI):**

The directivity index (DI) is the directivity factor expressed in decibels:

$DI(\theta, \phi) = 10 \log_{10} Q(\theta, \phi)$

*   $DI = 0 dB$ for an omnidirectional source.
*   $DI > 0 dB$ for a directional source.

---

### 3. Measurement of Directivity Factor

Measuring the directivity factor requires carefully controlled conditions and precise instrumentation. The typical approach involves measuring sound pressure levels (or sound intensity) at various points around the sound source in a free field or an anechoic environment.

**3.1 Experimental Setup:**

*   **Anechoic Chamber:** The ideal environment for measuring directivity is an anechoic chamber. This room absorbs nearly all sound reflections, creating a "free field" condition where only the sound directly from the source is measured. This is crucial to avoid interference from reflected sound waves.
    *   **Reference Textbooks:** Ver & Beranek (2006) and Ekinsler et al. (2000) extensively discuss anechoic chamber design and their importance in acoustic measurements.
*   **Sound Source:** The source under investigation (e.g., a loudspeaker, a machine component, an engine). It should be positioned at the center of the anechoic chamber.
*   **Microphone Array or Rotating Microphone Boom:**
    *   **Microphone Array:** A set of microphones placed at various positions around the source to capture sound pressure levels simultaneously in different directions.
    *   **Rotating Microphone Boom:** A motorized arm that holds a microphone and rotates it around the source through a defined angular path (e.g., a sphere or a series of circles). This allows for sequential measurement of SPL in different directions.
*   **Sound Level Meter (SLM) or Data Acquisition System:** To record the microphone output.
*   **Signal Generator and Amplifier:** To drive the sound source with a specific signal (e.g., a pure tone, a noise band).

**3.2 Measurement Procedure:**

1.  **Source Excitation:** The sound source is excited with a specific, stable sound signal (e.g., a single frequency sine wave or a broad-band noise). The source power output should be kept constant during the measurement.
2.  **Free Field Assumption:** Ensure the source is operating in an environment that approximates a free field (e.g., an anechoic chamber or outdoors away from reflective surfaces).
3.  **Measurement of Sound Pressure Level (SPL) in Different Directions:**
    *   **Spherical Coordinates:** The sound field around the source is typically described using spherical coordinates $(\theta, \phi)$, where $\theta$ is the polar angle (e.g., from the vertical axis) and $\phi$ is the azimuthal angle (around the horizontal plane).
    *   **Sampling Directions:** Microphones are moved or an array is used to capture SPL at a sufficient number of points to define the sound field with adequate resolution. Common practices involve measuring along:
        *   Meridians (constant $\phi$, varying $\theta$)
        *   Parallels (constant $\theta$, varying $\phi$)
    *   **Reference Distance:** Measurements are taken at a fixed, usually relatively small, distance ($r$) from the source's acoustic center. This distance should be large enough to be in the far-field of the source but small enough to avoid significant atmospheric absorption.
4.  **Calculation of Average SPL or Total Power:**
    *   **Method 1 (Using average SPL):** Calculate the average sound pressure level over all measured directions. This can be done by integrating the sound pressure (or intensity) over the sphere and then converting back to dB. A simpler approximation is to average the SPL values over the sampled directions, often weighted by the solid angle.
    *   **Method 2 (Using sound intensity):** Measure the sound intensity vector in different directions. Integrate the magnitude of the intensity vector over the entire surface of a sphere enclosing the source to obtain the total sound power ($W$).
5.  **Determination of Directivity Factor ($Q$):**

    *   **Using SPL Data:**
        Let $L_p(\theta, \phi)$ be the SPL measured at direction $(\theta, \phi)$.
        Let $L_{p,avg}$ be the average SPL over all directions.

        The directivity factor can be approximated as:
        $Q(\theta, \phi) \approx 10^{(L_p(\theta, \phi) - L_{p,avg}) / 10}$

        Or, more precisely, if we know the sound pressure $p(\theta, \phi)$ at each point:
        $Q(\theta, \phi) = \frac{|p(\theta, \phi)|^2}{|p_{omni}|^2}$
        Where $|p_{omni}|^2$ is the mean-square pressure of an equivalent omnidirectional source with the same total radiated power.

    *   **Using Sound Intensity Data:**
        $Q(\theta, \phi) = \frac{I(\theta, \phi)}{I_{omni}} = \frac{I(\theta, \phi)}{W / (4\pi r^2)}$
        Where $I(\theta, \phi)$ is the measured sound intensity in the direction $(\theta, \phi)$ at distance $r$, and $W$ is the total sound power calculated from the integral of intensity over the sphere.

**3.3 Important Considerations for Measurement:**

*   **Source Location:** The acoustic center of the source needs to be identified and used as the reference point for distance measurements.
*   **Distance:** Measurements should be taken in the far-field of the source, where the sound intensity is inversely proportional to the square of the distance.
*   **Stability of Source:** The sound source must operate with stable amplitude and frequency during measurements.
*   **Background Noise:** Background noise in the measurement environment must be significantly lower than the source's radiated sound.
*   **Reflections:** Minimizing reflections is paramount. Anechoic conditions are essential.
*   **Frequency Dependence:** Directivity is typically frequency-dependent. Measurements should be performed for discrete frequency bands or octaves of interest.

---

### 4. Types of Directivity Patterns and Examples

The directivity of a sound source can be visualized by plotting the directivity factor ($Q$) or directivity index (DI) as a function of direction. This plot is called a **directivity pattern**.

**Common Directivity Patterns:**

*   **Omnidirectional (Q=1, DI=0 dB):** The source radiates sound equally in all directions. This is an idealization, but some sources (like small, unfaced pistons or very small sources) can approximate it at low frequencies.
    *   *Example:* A theoretical point source; a small loudspeaker cone operating at very low frequencies where its size is much smaller than the wavelength.
*   **Unidirectional (e.g., Cardioid, Hypercardioid):** Sources that primarily radiate sound in one direction.
    *   *Cardioid:* $Q$ is maximum in the forward direction and zero at the rear (180 degrees opposite). The pattern resembles a heart shape.
        *   *Example:* Many microphones (e.g., condenser microphones used in studios) exhibit cardioid patterns to reject sound from the rear. This is not a typical sound source pattern for noise control but illustrates a directional characteristic.
    *   *Hypercardioid:* A narrower main lobe than cardioid, with some rear pickup.
*   **Bidirectional:** Radiates equally in two opposite directions.
    *   *Example:* A simple dipole source (e.g., two closely spaced, out-of-phase sources); some types of transducers.
*   **Directional/Beamed:** The source has a dominant lobe in one or more directions, with significantly lower radiation in other directions. The shape of the lobe depends on the source's physical characteristics and frequency.
    *   *Example:*
        *   **Horn Loudspeakers:** Designed to focus sound into a narrow beam. They have high directivity in the direction of the horn opening.
        *   **Turbine Engines:** The exhaust jet noise can be directional, often with higher intensity at certain angles relative to the jet axis.
        *   **Machinery Components:** A vibrating panel or a small, high-frequency source can exhibit directional beaming.

**Visualizing Directivity Patterns:**

*   **Polar Plots:** Often used to show directivity patterns. The radial distance represents the directivity factor (or SPL), and the angle represents the direction from the source. For 3D sources, these can be represented as spheres with color coding for intensity.
*   **Cartesian Plots:** Plotting $Q$ or DI versus angle.

**Frequency Dependence:**

The directivity of a source is highly dependent on frequency relative to its size.

*   **Low Frequencies ($\lambda \gg D$):** Sources tend to be more omnidirectional (more isotropic).
*   **High Frequencies ($\lambda \ll D$):** Sources tend to be more directional (beaming occurs).

Consider a circular piston sound source:
*   At low frequencies, it acts like a simple source, radiating nearly omnidirectionally.
*   As frequency increases, its directivity pattern develops a main lobe in the forward direction, and side lobes appear at higher frequencies.

---

### 5. Directivity Factor in Relation to Course Outcomes

This topic directly supports several course outcomes:

*   **CO1: To define various acoustic terminologies and understand the physics behind acoustic wave propagation (Knowledge Level: K2)**
    *   **Key Concepts:** Directivity factor, omnidirectional source, sound intensity, sound power, directivity index, free field, anechoic chamber.
    *   **Physics:** Understanding how the physical size and operating conditions of a source influence the spatial distribution of radiated sound energy. The relationship between sound intensity, sound pressure, and sound power is fundamental.

*   **CO3: To understand the mechanism of hearing, noise regulations and noise measuring devices (Knowledge Level: K2)**
    *   **Mechanism of Hearing (Indirectly):** While not directly about the ear's biological function, understanding sound source directivity helps explain *how* sound energy reaches the ear from different directions and intensities. It informs how we might perceive a sound source. For example, a directional source might be perceived as louder from its primary direction.
    *   **Noise Measuring Devices:** The measurement of directivity factor relies heavily on noise measuring devices like microphones and sound level meters, as well as data acquisition systems. This topic showcases their application in characterizing sound sources.

*   **CO4: To explain various noise reducing measures (Knowledge Level: K2)**
    *   **Application in Noise Control:** Knowing the directivity of a noise source is crucial for designing effective noise control strategies. If a source is highly directional, treating the noise in the primary direction of radiation might be more effective than a general treatment. For example, placing an acoustic barrier or absorber specifically in the path of the main sound beam.

---

### 6. Practice Questions and Answers

**Question 1:**
Define the directivity factor ($Q$) of a sound source. What does a $Q$ value of 1 signify?

**Answer 1:**
The directivity factor ($Q$) of a sound source in a specific direction is the ratio of the sound intensity radiated by the source in that direction to the sound intensity radiated by an omnidirectional source with the same total radiated sound power. A $Q$ value of 1 signifies that the source is omnidirectional, meaning it radiates sound equally in all directions.

**Question 2:**
What are the essential requirements for an environment to accurately measure the directivity factor of a sound source?

**Answer 2:**
The essential requirement is a **free field** environment. This is typically achieved in an **anechoic chamber**, which minimizes sound reflections. This ensures that the measured sound pressure or intensity originates solely from the source under investigation, without interference from reflected waves.

**Question 3:**
A loudspeaker is measured to have a sound pressure level of 90 dB at a certain angle and an average sound pressure level of 85 dB across all directions at the same distance. Calculate its directivity factor ($Q$) in that direction.

**Answer 3:**
We use the relationship between SPL and Q:
$Q \approx 10^{(L_p - L_{p,avg}) / 10}$

Given:
$L_p = 90 \text{ dB}$
$L_{p,avg} = 85 \text{ dB}$

$Q \approx 10^{(90 - 85) / 10}$
$Q \approx 10^{5 / 10}$
$Q \approx 10^{0.5}$
$Q \approx 3.16$

The directivity factor in that direction is approximately 3.16.

**Question 4:**
Explain why directivity is frequency-dependent, using the relationship between source size and wavelength.

**Answer 4:**
Directivity is frequency-dependent because it relates to how the physical size of the sound source compares to the wavelength of the sound being emitted.
*   **Low Frequencies (Long Wavelengths):** When the wavelength ($\lambda$) is much larger than the source's characteristic dimension ($D$), the source tends to act as a point source and radiates sound more uniformly in all directions (more omnidirectional).
*   **High Frequencies (Short Wavelengths):** When the wavelength is much smaller than the source's dimension, constructive and destructive interference effects become significant, leading to the formation of preferential radiation lobes in specific directions (more directional beaming).

**Question 5:**
How is the directivity of a sound source useful in noise control engineering?

**Answer 5:**
Understanding the directivity of a noise source allows for more effective and efficient noise control strategies:
1.  **Targeted Treatment:** If a source is highly directional, noise control measures (like barriers or absorbers) can be focused on the specific directions of maximum radiation, rather than treating the entire source or environment uniformly.
2.  **Source Identification:** Directivity patterns can help identify the specific components or mechanisms within a machine that are contributing most significantly to noise in certain directions.
3.  **Optimized Placement:** The placement of noise-generating equipment can be optimized to direct its sound away from sensitive receivers.

---

### 7. Key Points to Remember

*   **Directivity Factor ($Q$)** quantifies how directional a sound source is. $Q=1$ for omnidirectional, $Q>1$ for directional.
*   **Directivity Index (DI)** is $Q$ in decibels: $DI = 10 \log_{10} Q$.
*   Measurements require a **free field** environment (anechoic chamber is ideal).
*   Measurements involve capturing sound pressure (or intensity) at various angles around the source.
*   Directivity is highly **frequency-dependent**.
*   At low frequencies (long wavelengths), sources are more **omnidirectional**.
*   At high frequencies (short wavelengths), sources are more **directional** (beaming).
*   Understanding directivity is crucial for **targeted noise control**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. References and Further Reading

*   **Noise and Vibration Control Engineering** by Istvan L. Ver and Leo L. Beranek (Wiley, Second edition, 2006): Chapters on sound power, radiation from sources, and measurement techniques will be highly relevant.
*   **Fundamentals of Acoustics** by Lawrence Ekinsler, Austin R Frey, Alan B Coppens, James V Sanders (Wiley, Fourth edition, 2000): Provides foundational principles of sound radiation and measurement.
*   **Noise and Vibration Control** by M L Munjal (World Scientific publishing, 2013): Offers detailed analysis of noise radiation from various sources.
*   **Handbook of Noise and Vibration Control** by Malcom J Crocker (Wiley, 2007): Contains practical information and methodologies for acoustic measurements.
*   **Industrial Noise Control and Acoustics** by Randall F. Barron (Marcel Dekker, Inc., New York., 2001): Discusses applications of acoustic principles in industrial settings, including source characterization.

---