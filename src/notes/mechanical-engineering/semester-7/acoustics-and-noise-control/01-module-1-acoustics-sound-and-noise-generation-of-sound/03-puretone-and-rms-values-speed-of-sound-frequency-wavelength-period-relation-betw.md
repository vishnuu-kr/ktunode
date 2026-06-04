---
title: "Puretone and rms values, speed of sound, frequency, wavelength, period, relation between them"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 1: Acoustics, sound and noise, generation of sound"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fd2"
status: "completed"
scrapedAt: "2026-05-20T18:09:24.230Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 1: Acoustics, Sound and Noise, Generation of Sound

### Topic: Puretone and RMS Values, Speed of Sound, Frequency, Wavelength, Period, Relation Between Them

---

### 1. Introduction to Sound and Acoustics

*   **Acoustics:** The science that deals with the production, transmission, reception, and effects of sound. It encompasses the study of all mechanical waves in gases, liquids, and solids. (Kinsler et al., 2000)
*   **Sound:** A form of energy that travels as waves through a medium (like air, water, or solids). It is a mechanical wave, meaning it requires a medium to propagate.
*   **Noise:** Unwanted sound. The subjective perception of sound as unpleasant, disruptive, or harmful. What is considered noise can vary between individuals and situations.

---

### 2. Characteristics of Sound Waves

Sound waves are characterized by their physical properties, which determine how we perceive them.

#### 2.1. Puretone

*   **Definition:** A puretone is a sound wave consisting of a single frequency (a sinusoidal wave). It's the simplest form of sound.
*   **Graphical Representation:** Typically represented as a sine wave, where the vertical axis represents pressure or displacement, and the horizontal axis represents time.
    *   *Example:* A tuning fork produces a nearly puretone.
*   **Relevance:** Puretones are fundamental building blocks for understanding more complex sounds, which can be analyzed as a combination of puretones (Fourier analysis).

#### 2.2. Root Mean Square (RMS) Value

*   **Definition:** The RMS value of a time-varying signal (like sound pressure) is a measure of its effective value or intensity. It's calculated as the square root of the mean of the squared values of the signal over a specific time interval.
*   **Formula:** For a time-varying pressure $p(t)$:
    $$p_{rms} = \sqrt{\frac{1}{T} \int_{0}^{T} [p(t)]^2 dt}$$
    where $T$ is the observation time.
*   **For a Puretone (Sinusoidal Wave):** If $p(t) = P_p \sin(\omega t)$, where $P_p$ is the peak pressure, then:
    $$p_{rms} = \frac{P_p}{\sqrt{2}} \approx 0.707 P_p$$
*   **Significance in Acoustics:** The RMS value of sound pressure is directly related to the sound intensity and loudness. It's commonly used to measure and specify sound levels because it represents the average energy of the sound wave. Sound pressure level (SPL) is often expressed in dB relative to a reference RMS pressure. (Ver & Beranek, 2006)
*   **Example:** If a puretone has a peak pressure of 2 Pascals (Pa), its RMS pressure is approximately $2 / \sqrt{2} \approx 1.414$ Pa.

#### 2.3. Frequency ($f$)

*   **Definition:** The number of complete cycles of a wave that pass a given point per unit of time. It is measured in Hertz (Hz), where 1 Hz = 1 cycle per second.
*   **Perception:** Frequency is perceived as pitch. Higher frequencies correspond to higher pitches, and lower frequencies correspond to lower pitches.
*   **Human Hearing Range:** Typically from 20 Hz to 20,000 Hz (20 kHz).
*   **Example:** A middle C note on a piano has a fundamental frequency of approximately 261.6 Hz.

#### 2.4. Period ($T_{period}$)

*   **Definition:** The time taken for one complete cycle of a wave to occur. It is the reciprocal of frequency.
*   **Formula:**
    $$T_{period} = \frac{1}{f}$$
*   **Units:** Seconds (s).
*   **Example:** For a 100 Hz puretone, the period is $1/100 = 0.01$ seconds (or 10 milliseconds).

#### 2.5. Wavelength ($\lambda$)

*   **Definition:** The spatial distance over which the wave's shape repeats. It is the distance between two consecutive corresponding points of the same phase on the wave, such as two crests or two troughs.
*   **Units:** Meters (m).
*   **Example:** Imagine a snapshot of a sound wave in air; wavelength is the distance from one peak pressure to the next peak pressure.

#### 2.6. Speed of Sound ($c$)

*   **Definition:** The speed at which sound waves propagate through a medium. This speed depends on the properties of the medium, such as its elasticity and density.
*   **Factors Affecting Speed of Sound:**
    *   **Medium:** Sound travels faster in solids than in liquids, and faster in liquids than in gases.
    *   **Temperature:** In gases, the speed of sound increases with temperature.
    *   **Composition:** The specific chemical makeup and molecular structure of the medium.
*   **Formula (for gases):** The speed of sound in an ideal gas is given by:
    $$c = \sqrt{\frac{\gamma R T}{M}}$$
    where:
    *   $\gamma$ is the adiabatic index (ratio of specific heats).
    *   $R$ is the ideal gas constant.
    *   $T$ is the absolute temperature (in Kelvin).
    *   $M$ is the molar mass of the gas.
*   **Speed of Sound in Air (Approximate):** At room temperature (around 20°C or 293 K), the speed of sound in air is approximately **343 meters per second (m/s)**. (Ver & Beranek, 2006)
*   **Example:** If a sound wave travels 100 meters in 0.29 seconds, its speed is $100 / 0.29 \approx 345$ m/s.

---

### 3. Fundamental Relationships Between Wave Properties

These relationships are crucial for understanding how frequency, wavelength, and speed are interconnected.

*   **Relationship between Speed, Frequency, and Wavelength:** The speed of a wave is the product of its frequency and wavelength.
    $$c = f \lambda$$
    This fundamental equation holds true for all types of waves, including sound.

*   **Derivations:**
    *   From $c = f \lambda$, we can find:
        *   $\lambda = \frac{c}{f}$
        *   $f = \frac{c}{\lambda}$

*   **Understanding the Interplay:**
    *   If the speed of sound in a medium is constant (e.g., air at a fixed temperature), then:
        *   Higher frequency means shorter wavelength.
        *   Lower frequency means longer wavelength.
    *   If the frequency of a sound is constant (e.g., a puretone from a source), then:
        *   The wavelength will be longer in media where the speed of sound is higher.
        *   The wavelength will be shorter in media where the speed of sound is lower.

---

### 4. Puretone vs. Complex Sound

*   **Puretone:** As discussed, a single frequency.
*   **Complex Sound:** A sound composed of multiple frequencies (a sum of puretones with different amplitudes, frequencies, and phases). Most everyday sounds are complex.
    *   *Example:* Speech, music, machinery noise.
*   **Fourier Analysis:** A mathematical technique used to decompose a complex sound wave into its constituent puretones. This is a cornerstone of signal processing in acoustics. (Kinsler et al., 2000)

---

### 5. Key Concepts Summary and Important Points to Remember

*   **Sound is a mechanical wave.** It requires a medium.
*   **Frequency (f)** determines pitch; measured in Hz.
*   **Period (T)** is the time for one cycle; $T = 1/f$.
*   **Wavelength ($\lambda$)** is the spatial extent of one cycle; measured in meters.
*   **Speed of Sound (c)** depends on the medium and its properties (temperature, density, elasticity); approximately 343 m/s in air at 20°C.
*   **Fundamental Relationship:** $c = f \lambda$.
*   **RMS Value** of sound pressure is a measure of its effective value and is related to sound intensity and loudness. For a puretone, $p_{rms} = P_p / \sqrt{2}$.
*   **Puretones** are single-frequency sounds.
*   **Complex sounds** are combinations of puretones.

---

### 6. Examples and Applications

*   **Musical Instruments:** A violin string vibrating produces a fundamental frequency and its harmonics (multiples of the fundamental), creating a complex tone. The pitch is determined by the fundamental frequency.
*   **Ultrasound:** Frequencies above the human hearing range (typically > 20 kHz) used in medical imaging. Higher frequencies generally mean shorter wavelengths, allowing for finer detail resolution.
*   **Infrasound:** Frequencies below the human hearing range (typically < 20 Hz) generated by natural phenomena like earthquakes or man-made sources like wind turbines. Lower frequencies have longer wavelengths.
*   **Engine Noise:** Typically consists of multiple frequencies, including tonal components (puretones) and broadband noise (a range of frequencies). Analyzing these components is crucial for noise control. (Crocker, 2007)

---

### 7. Practice Questions

**Question 1:**
A puretone sound wave has a frequency of 500 Hz. If the speed of sound in the medium is 340 m/s, what is its wavelength?

**Question 2:**
A loudspeaker emits a puretone sound with a peak pressure of 5 Pa. Calculate the RMS pressure of this sound.

**Question 3:**
If a sound wave has a wavelength of 0.1 meters and travels at 340 m/s, what is its frequency? What is the period of this wave?

**Question 4:**
Explain why the RMS value of sound pressure is more useful for measuring sound intensity than the peak pressure.

**Question 5:**
Describe how the wavelength of a puretone changes if it moves from air (speed of sound $\approx$ 343 m/s) to water (speed of sound $\approx$ 1480 m/s), assuming the frequency remains constant.

---

### 8. Answers to Practice Questions

**Answer 1:**
Using the formula $c = f \lambda$:
$\lambda = c / f$
$\lambda = 340 \, \text{m/s} / 500 \, \text{Hz}$
$\lambda = 0.68 \, \text{m}$
The wavelength is 0.68 meters.

**Answer 2:**
For a puretone, $p_{rms} = P_p / \sqrt{2}$.
$p_{rms} = 5 \, \text{Pa} / \sqrt{2}$
$p_{rms} \approx 5 \, \text{Pa} / 1.414$
$p_{rms} \approx 3.54 \, \text{Pa}$
The RMS pressure is approximately 3.54 Pascals.

**Answer 3:**
First, calculate the frequency:
$f = c / \lambda$
$f = 340 \, \text{m/s} / 0.1 \, \text{m}$
$f = 3400 \, \text{Hz}$
The frequency is 3400 Hz.

Next, calculate the period:
$T = 1 / f$
$T = 1 / 3400 \, \text{Hz}$
$T \approx 0.000294 \, \text{s}$ or $0.294 \, \text{ms}$
The period is approximately 0.294 milliseconds.

**Answer 4:**
The RMS value of sound pressure is proportional to the square root of the sound intensity, which represents the average power carried by the sound wave per unit area. Sound intensity is a more direct measure of the energy delivered by the sound wave and its potential to cause annoyance or damage. Peak pressure, on the other hand, only represents the maximum instantaneous pressure variation and doesn't account for the duration or average energy of the sound. (Ver & Beranek, 2006)

**Answer 5:**
The frequency of the puretone remains the same. The speed of sound in water is significantly higher than in air. Using the relationship $\lambda = c / f$:
Since $c$ (speed of sound) is larger in water, and $f$ (frequency) is constant, the wavelength ($\lambda$) of the sound wave will be **longer** in water compared to air.

---

### 9. Alignment with Course Outcomes (CO) and Knowledge Levels (K)

*   **CO1 (K2 - Knowledge):** This topic directly addresses the definition of acoustic terminologies like puretone, frequency, wavelength, period, and speed of sound, and explains the physics behind wave propagation through the relationships between these parameters.
*   **CO2 (K4 - Analysis):** While this topic primarily focuses on basic definitions and relationships (K2), the understanding of these fundamental properties is essential for analyzing sound transmission through different media or tubes in later modules. For instance, knowing the wavelength allows for the study of resonance in tubes.
*   **CO3 (K2 - Knowledge):** Understanding frequency (pitch) and the physical characteristics of sound waves is foundational to understanding how we perceive sound and how noise is measured (which involves measuring sound pressure levels, often related to RMS values).
*   **CO4 (K2 - Knowledge):** A grasp of basic sound wave properties is necessary to comprehend how different noise-reducing measures work, for example, how altering the wavelength or amplitude of a sound can affect its perception or impact.

---

This concludes Module 1, Topic: Puretone and RMS Values, Speed of Sound, Frequency, Wavelength, Period, Relation Between Them. This foundational knowledge is critical for further study in Acoustics and Noise Control.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
