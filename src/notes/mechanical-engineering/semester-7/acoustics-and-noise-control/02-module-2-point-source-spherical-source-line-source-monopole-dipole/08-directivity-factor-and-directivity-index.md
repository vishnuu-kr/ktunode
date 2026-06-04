---
title: "Directivity factor and directivity index"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 2: Point source, spherical source, Line source, Monopole, dipole"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fe4"
status: "completed"
scrapedAt: "2026-05-20T18:09:36.320Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 2: Point Source, Spherical Source, Line Source, Monopole, Dipole

### Topic: Directivity Factor and Directivity Index

---

### **1. Introduction to Sound Source Directivity**

Understanding how sound energy is distributed in space around a source is crucial for predicting noise levels and designing effective noise control measures. This spatial distribution is known as **directivity**.

*   **Key Concept:** Sound sources do not always radiate sound equally in all directions. Some sources are more directional, meaning they emit more sound energy in specific directions.

*   **Alignment with Course Outcomes:**
    *   **CO1 (K2):** Defines directivity as a fundamental acoustic property.
    *   **CO2 (K4):** Analyzing the transmission of sound requires understanding how its energy is spread, which directivity addresses.

*   **Textbook Reference:**
    *   *Noise and vibration control engineering* by Ver & Beranek (2nd ed., 2006) discusses source characteristics and their impact on sound propagation.
    *   *Fundamentals of Acoustics* by Kinsler et al. (4th ed., 2000) provides the foundational physics of wave radiation from sources.

---

### **2. What is a Directivity Factor ($D$) ?**

The **Directivity Factor ($D$)** quantifies how much more sound a source radiates in its *preferred* direction compared to an *omnidirectional* source radiating the same total sound power.

*   **Key Concept:** It's a ratio that compares the sound intensity from a directional source in its direction of maximum radiation to the sound intensity from an omnidirectional source at the same distance, assuming both sources have the same total radiated sound power.

*   **Mathematical Definition:**
    The directivity factor ($D$) is defined as the ratio of the sound intensity ($I(\theta, \phi)$) at a point in a specific direction $(\theta, \phi)$ to the average sound intensity ($\bar{I}$) over all directions at the same distance from the source.

    $$D(\theta, \phi) = \frac{I(\theta, \phi)}{\bar{I}}$$

    Where:
    *   $I(\theta, \phi)$ is the sound intensity in a specific direction $(\theta, \phi)$.
    *   $\bar{I}$ is the average sound intensity over all directions.

*   **Relationship to Sound Power:**
    Since sound intensity is related to sound power ($W$) by $I = W / (4\pi r^2)$ for an omnidirectional source and by $I(\theta, \phi) = W(\theta, \phi) / (4\pi r^2)$ for a directional source (where $W(\theta, \phi)$ is the directional sound power radiated per unit solid angle), the directivity factor can also be expressed as:

    $$D(\theta, \phi) = \frac{W(\theta, \phi) / (4\pi r^2)}{W_{total} / (4\pi r^2)} = \frac{W(\theta, \phi)}{W_{total}}$$

    Where:
    *   $W(\theta, \phi)$ is the sound power radiated per unit solid angle in the direction $(\theta, \phi)$.
    *   $W_{total}$ is the total sound power radiated by the source.

*   **Important Note:** The directivity factor is a dimensionless quantity.

*   **Alignment with Course Outcomes:**
    *   **CO1 (K2):** Defines the directivity factor and its purpose.
    *   **CO2 (K4):** Useful for analyzing how sound power is distributed, impacting transmission.

*   **Textbook Reference:**
    *   *Noise and vibration control engineering* by Ver & Beranek (2nd ed., 2006) provides detailed explanations of directivity and its calculation for various sources.
    *   *Fundamentals of Acoustics* by Kinsler et al. (4th ed., 2000) lays the groundwork for understanding sound intensity and power radiation.
    *   *Noise and Vibration Control* by Munjal (2013) offers insights into source directivity in the context of noise control.

---

### **3. What is a Directivity Index ($DI$) ?**

The **Directivity Index ($DI$)** is the directivity factor expressed in decibels (dB). It's a more commonly used term in noise control engineering because decibels are typically used for sound pressure levels and sound intensity levels.

*   **Key Concept:** It represents the difference in sound pressure level (SPL) or sound intensity level (SIL) between a directional source and an omnidirectional source, when both have the same total sound power.

*   **Mathematical Definition:**
    The directivity index ($DI$) is defined as:

    $$DI = 10 \log_{10}(D)$$

    Where:
    *   $DI$ is the Directivity Index in decibels (dB).
    *   $D$ is the Directivity Factor.

*   **Relationship to Sound Pressure Level (SPL):**
    If $L_{p, directional}(\theta, \phi)$ is the SPL in a specific direction $(\theta, \phi)$ and $L_{p, omni}$ is the SPL in any direction for an omnidirectional source with the same total sound power, then:

    $$DI = L_{p, directional}(\theta, \phi) - L_{p, omni}$$

    This means a positive $DI$ indicates that the SPL is higher in that direction compared to an omnidirectional source, while a negative $DI$ would imply less SPL in that direction (though usually, we focus on the maximum $DI$).

*   **Important Note:** The directivity index is expressed in decibels (dB).

*   **Alignment with Course Outcomes:**
    *   **CO1 (K2):** Defines the directivity index and its relation to the directivity factor.
    *   **CO3 (K2):** Relates directivity to measurable quantities like SPL.

*   **Textbook Reference:**
    *   *Noise and vibration control engineering* by Ver & Beranek (2nd ed., 2006) extensively uses and explains the directivity index for various noise sources.
    *   *Handbook of Noise and Vibration Control* by Crocker (2007) provides practical data and applications of directivity indices.

---

### **4. Directivity of Common Sound Sources**

Different types of sound sources exhibit different directivity patterns. Understanding these patterns is crucial for predicting noise levels at various locations.

#### **4.1. Monopole Source (Spherical Source)**

A monopole is a fundamental acoustic radiator. It represents a pulsating volume, such as a small, vibrating sphere or a source that radiates sound equally in all directions.

*   **Key Concept:** A monopole is an **omnidirectional** source. It radiates sound uniformly in all directions.

*   **Directivity Factor ($D$) and Index ($DI$):**
    *   Since the sound intensity is the same in all directions ($\bar{I} = I(\theta, \phi)$), the directivity factor for a monopole is:
        $$D = \frac{I(\theta, \phi)}{\bar{I}} = \frac{\bar{I}}{\bar{I}} = 1$$
    *   The directivity index is:
        $$DI = 10 \log_{10}(1) = 0 \text{ dB}$$

*   **Examples:**
    *   A small, unbaffled loudspeaker diaphragm vibrating uniformly outwards and inwards.
    *   A bubble expanding and contracting in a liquid.
    *   A simple point source of sound.

*   **Textbook Reference:**
    *   *Fundamentals of Acoustics* by Kinsler et al. (4th ed., 2000) provides the mathematical derivation of sound radiation from a spherical source (monopole).
    *   *Noise and vibration control engineering* by Ver & Beranek (2nd ed., 2006) often uses the monopole as a reference omnidirectional source.

#### **4.2. Dipole Source**

A dipole consists of two equal and opposite monopoles separated by a small distance. It represents sources that oscillate back and forth, like a vibrating piston or a simple rigid sphere in an acoustic field.

*   **Key Concept:** A dipole is a **directional** source. It radiates sound with maximum intensity along its axis of oscillation and minimum (ideally zero) intensity perpendicular to its axis.

*   **Directivity Pattern:**
    *   The sound pressure from a dipole is proportional to $\cos(\theta)$, where $\theta$ is the angle from the dipole axis.
    *   The sound intensity is proportional to $\cos^2(\theta)$.

*   **Directivity Factor ($D$) and Index ($DI$):**
    *   For a simple dipole, the maximum sound intensity occurs along the axis ($\theta = 0^\circ$, where $\cos^2(0^\circ) = 1$). The minimum intensity occurs perpendicular to the axis ($\theta = 90^\circ$, where $\cos^2(90^\circ) = 0$).
    *   The average intensity $\bar{I}$ for a dipole is $1/3$ of the maximum intensity ($I_{max}$) because the average of $\cos^2(\theta)$ over a sphere is $1/3$.
    *   The directivity factor in the direction of maximum radiation is:
        $$D_{max} = \frac{I_{max}}{\bar{I}} = \frac{I_{max}}{(1/3)I_{max}} = 3$$
    *   The directivity index in the direction of maximum radiation is:
        $$DI_{max} = 10 \log_{10}(3) \approx 4.77 \text{ dB}$$

*   **Examples:**
    *   A vibrating cylinder or rod.
    *   A loudspeaker cone that moves back and forth without a baffle.
    *   Unbalanced rotating machinery (e.g., a fan blade, a rotating shaft).

*   **Textbook Reference:**
    *   *Fundamentals of Acoustics* by Kinsler et al. (4th ed., 2000) provides a detailed theoretical analysis of dipole radiation.
    *   *Noise and vibration control engineering* by Ver & Beranek (2nd ed., 2006) discusses the directivity of sources like fans and unbalanced rotors.
    *   *Mechanical Vibrations and Industrial Noise Control* by Lasithan L G (2014) connects mechanical vibrations to noise sources like dipoles.

#### **4.3. Line Source**

A line source consists of a series of monopoles or dipoles distributed along a line. Examples include a vibrating pipe or a row of equally spaced sound sources.

*   **Key Concept:** The directivity of a line source depends on the distribution of the sources along the line, their spacing, and their phasing. For a line of uncorrelated monopoles, it can be approximately omnidirectional in the plane perpendicular to the line.

*   **Directivity Pattern:**
    *   For a long line of incoherent monopoles, the sound distribution is often nearly uniform in the plane perpendicular to the line. In the plane containing the line, the directivity can be more complex, often exhibiting a figure-eight pattern similar to a dipole if the sources are in phase.

*   **Directivity Factor ($D$) and Index ($DI$):**
    *   For a long line source of incoherent monopoles radiating uniformly into the half-space above the line (like a vibrating pipe on the ground), the directivity factor is approximately 2 in the horizontal plane.
    *   $$D \approx 2$$
    *   $$DI = 10 \log_{10}(2) \approx 3 \text{ dB}$$

*   **Examples:**
    *   A long, vibrating pipe or duct.
    *   A train of tires on a road.
    *   A row of identical machines operating independently.

*   **Textbook Reference:**
    *   *Noise and vibration control engineering* by Ver & Beranek (2nd ed., 2006) details the directivity of line sources, particularly in industrial contexts.
    *   *Handbook of Noise and Vibration Control* by Crocker (2007) may offer practical estimations for line sources.

#### **4.4. Point Source (General)**

A point source is a conceptualization of a sound source that is very small compared to the wavelength of the sound it emits and is located at a single point. It serves as a basic model for analyzing sound propagation.

*   **Key Concept:** A point source is often treated as a monopole (omnidirectional) for simplified analysis, but in reality, any real sound source has some degree of directivity.

*   **Directivity Factor ($D$) and Index ($DI$):**
    *   As discussed for the monopole, a perfectly omnidirectional point source has $D=1$ and $DI=0$ dB.
    *   However, real-world "point sources" like a small speaker can have some directivity, especially at higher frequencies.

*   **Alignment with Course Outcomes:**
    *   **CO1 (K2):** Introduces the concept of a point source.
    *   **CO2 (K4):** Analyzing sound propagation from point sources is a fundamental step.

*   **Textbook Reference:**
    *   *Fundamentals of Acoustics* by Kinsler et al. (4th ed., 2000) uses the point source model extensively in its derivations.
    *   *Noise and vibration control engineering* by Ver & Beranek (2nd ed., 2006) may use point source models as building blocks for more complex sources.

---

### **5. Factors Affecting Directivity**

The directivity of a sound source is influenced by several factors:

*   **Frequency:** As frequency increases, the wavelength of sound decreases. Sources tend to become more directional at frequencies where their dimensions are comparable to or larger than the wavelength. For example, a loudspeaker becomes more directional at higher frequencies.
*   **Size and Shape of the Source:** The physical dimensions and geometry of the radiating surface are primary determinants of directivity. Larger sources tend to be more directional.
*   **Phasing of Radiators:** For sources composed of multiple vibrating elements (like an array of speakers), the relative phase of vibration significantly impacts directivity. In-phase radiation leads to constructive interference in certain directions and destructive interference in others.
*   **Presence of Baffles or Reflectors:** A baffle (e.g., around a loudspeaker) prevents sound waves from the front and back of the diaphragm from cancelling each other out, and influences the directivity pattern.

*   **Alignment with Course Outcomes:**
    *   **CO2 (K4):** Understanding these factors helps analyze how sound transmission varies with source characteristics.

*   **Textbook Reference:**
    *   *Fundamentals of Acoustics* by Kinsler et al. (4th ed., 2000) explains how wavelength relative to source size dictates radiation patterns.
    *   *Noise and vibration control engineering* by Ver & Beranek (2nd ed., 2006) provides detailed discussions on frequency-dependent directivity.

---

### **6. Practical Applications and Importance in Noise Control**

Directivity information is vital for:

*   **Predicting Noise Levels:** Knowing the directivity helps estimate the sound pressure levels at different locations around a noise source. This is crucial for impact assessments and compliance with noise regulations.
*   **Designing Noise Barriers:** The effectiveness of noise barriers depends on the sound source's directivity. Barriers are most effective when placed in the path of the dominant sound radiation.
*   **Source Identification and Localization:** The directionality of sound can help pinpoint the source of noise.
*   **Optimizing Sound System Design:** In public address systems, directivity is used to focus sound towards the audience and minimize sound spill into unintended areas.
*   **Machine Design:** Engineers can design machinery with inherent directivity characteristics to reduce noise in critical areas.

*   **Alignment with Course Outcomes:**
    *   **CO2 (K4):** Essential for analyzing noise transmission in various environments.
    *   **CO4 (K2):** Understanding directivity informs the selection and design of noise-reducing measures.
    *   **CO3 (K2):** Knowledge of directivity is relevant to understanding noise regulations which often specify limits at specific locations.

*   **Textbook Reference:**
    *   *Industrial Noise Control and Acoustics* by Barron (2001) discusses practical applications of directivity in industrial settings.
    *   *Noise and Vibration Control* by Munjal (2013) offers comprehensive strategies for noise reduction based on source characteristics, including directivity.

---

### **7. Summary of Key Concepts and Definitions**

*   **Directivity:** The spatial distribution of sound energy radiated by a source.
*   **Directivity Factor ($D$):** The ratio of sound intensity in a specific direction to the average sound intensity over all directions, for a source with the same total sound power. $D = I(\theta, \phi) / \bar{I}$.
*   **Directivity Index ($DI$):** The directivity factor expressed in decibels. $DI = 10 \log_{10}(D)$.
*   **Monopole (Spherical Source):** An omnidirectional source ($D=1$, $DI=0$ dB).
*   **Dipole:** A directional source radiating maximally along its axis and minimally perpendicular to it ($D_{max}=3$, $DI_{max} \approx 4.77$ dB).
*   **Line Source:** Directivity depends on its length, spacing, and phasing of constituent elements. A long incoherent line source of monopoles can have $D \approx 2$ ($DI \approx 3$ dB) in the horizontal plane.
*   **Factors Affecting Directivity:** Frequency, source size/shape, phasing, and baffles.

---

### **8. Important Points to Remember**

*   **Directional vs. Omnidirectional:** Monopoles are omnidirectional, while dipoles and most real-world sources have some degree of directivity.
*   **Frequency Dependence:** Directivity generally increases with frequency for a given source size.
*   **Decibels are Key:** In acoustics, the directivity index (in dB) is the most commonly used measure.
*   **Reference for Comparison:** The directivity factor/index compares a directional source to an idealized omnidirectional source with the same total sound power.
*   **Practical Implications:** Directivity directly impacts how noise propagates and where the loudest sound levels will be experienced, guiding noise control efforts.

---

### **9. Practice Questions and Exercises**

**Question 1:**
Define the Directivity Factor and the Directivity Index. What are the units for each?
*   **Answer:**
    *   **Directivity Factor ($D$):** A dimensionless ratio comparing the sound intensity in a specific direction to the average sound intensity over all directions for a source with the same total sound power.
    *   **Directivity Index ($DI$):** The directivity factor expressed in decibels ($DI = 10 \log_{10}(D)$). Its units are decibels (dB).

**Question 2:**
What is the directivity factor and directivity index for an ideal monopole source? Explain why.
*   **Answer:**
    *   For an ideal monopole source, the directivity factor $D = 1$.
    *   The directivity index $DI = 10 \log_{10}(1) = 0$ dB.
    *   This is because a monopole is an omnidirectional source, meaning it radiates sound equally in all directions. Therefore, the sound intensity in any direction is the same as the average sound intensity.

**Question 3:**
A specific noise source has a directivity factor of 4 in its direction of maximum radiation. Calculate its directivity index. If an omnidirectional source with the same sound power is placed at the same location, by how many decibels will the sound pressure level be higher at the location of maximum radiation from the directional source?
*   **Answer:**
    *   Directivity Index ($DI$) = $10 \log_{10}(D) = 10 \log_{10}(4) = 10 \times 0.602 = 6.02$ dB.
    *   The directivity index directly represents the difference in sound pressure level between the directional source and an omnidirectional source (with the same sound power) at the same distance. Therefore, the sound pressure level will be 6.02 dB higher.

**Question 4:**
List at least three factors that influence the directivity of a sound source.
*   **Answer:**
    1.  Frequency of the sound.
    2.  Size and shape of the radiating surface.
    3.  Phasing of multiple radiating elements.
    4.  Presence of baffles or enclosures.

**Question 5:**
Explain why a loudspeaker with a large diaphragm is likely to be more directional than a loudspeaker with a small diaphragm, especially at higher frequencies. (Relate this to the concept of wavelength).
*   **Answer:**
    As frequency increases, the wavelength of sound ($\lambda = c/f$, where $c$ is the speed of sound and $f$ is frequency) decreases. When the size of the radiating surface becomes comparable to or larger than the wavelength, the source tends to beam sound in specific directions (become more directional). A larger diaphragm will reach this condition at lower frequencies than a smaller diaphragm. For a small diaphragm, when its size is much smaller than the wavelength (low frequencies), it behaves more like an omnidirectional monopole. As the frequency increases and the diaphragm size becomes a significant fraction of the wavelength, it starts to radiate more like a directional source, with the sound concentrated more towards the front.

---

This concludes the study notes on Directivity Factor and Directivity Index. Understanding these concepts is fundamental to analyzing and controlling noise from various sources.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
