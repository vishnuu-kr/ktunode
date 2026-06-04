---
title: "Subjective and objective assessment of sound"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 3: Ear its structure and function"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fec"
status: "completed"
scrapedAt: "2026-05-20T18:09:41.256Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 3: Ear - Its Structure and Function

### Topic: Subjective and Objective Assessment of Sound

This topic delves into how we perceive and measure sound, differentiating between human perception (subjective) and quantifiable physical measurements (objective). Understanding these two aspects is crucial for effective noise control.

**Learning Outcomes Covered:**

*   **LO3.1: Differentiate between subjective and objective assessment of sound.** (Aligns with CO1: Acoustic Terminologies, CO3: Mechanism of Hearing, Noise Measuring Devices)
*   **LO3.2: Explain the human auditory system's response to sound.** (Aligns with CO3: Mechanism of Hearing)
*   **LO3.3: Define and explain key objective sound measurement parameters.** (Aligns with CO1: Acoustic Terminologies, CO3: Noise Measuring Devices)
*   **LO3.4: Discuss the relationship between subjective perception and objective measurements.** (Aligns with CO1: Acoustic Terminologies, CO3: Mechanism of Hearing, Noise Measuring Devices)

---

### 1. Introduction to Sound Assessment

Sound is a physical phenomenon and a sensory experience. Assessing it involves understanding both its physical properties and how humans perceive it.

*   **Objective Assessment:** Focuses on measurable physical quantities of sound waves. This is the domain of instruments and scientific principles.
*   **Subjective Assessment:** Relates to how humans perceive and experience sound, including loudness, pitch, annoyance, and speech intelligibility. This involves psychological and physiological factors.

---

### 2. The Human Auditory System: The Subjective Receiver

The ear is the primary organ responsible for hearing. Its structure and function dictate our subjective experience of sound.

**Key Concepts:**

*   **Sound Perception:** The process by which the ear and brain interpret sound waves.
*   **Frequency:** Perceived as **pitch**. High frequency corresponds to high pitch, and low frequency to low pitch.
*   **Amplitude/Intensity:** Perceived as **loudness**. Higher amplitude/intensity generally leads to louder sound.
*   **Timbre (Quality):** Determined by the harmonic content and the way a sound evolves over time, allowing us to distinguish between different sound sources (e.g., a violin and a piano playing the same note).

**(Reference: Fundamentals of Acoustics by Kinsler et al., Chapter 13: Physiological Acoustics)**

**Structure of the Ear (Brief Overview relevant to sound perception):**

*   **Outer Ear (Pinna and Ear Canal):** Collects sound waves and directs them towards the eardrum. The pinna also helps in sound localization.
*   **Middle Ear (Eardrum, Ossicles - Malleus, Incus, Stapes):** The eardrum vibrates in response to sound waves. The ossicles amplify these vibrations and transmit them to the oval window of the inner ear. This amplification is crucial for overcoming impedance mismatch between air and the fluid-filled inner ear.
*   **Inner Ear (Cochlea):** Contains the basilar membrane and hair cells. Vibrations from the stapes cause movement in the cochlear fluid. The basilar membrane vibrates at different frequencies along its length (tonotopic organization). Hair cells on the basilar membrane are stimulated by these vibrations, converting mechanical energy into electrical signals.
*   **Auditory Nerve:** Transmits these electrical signals to the brain for interpretation as sound.

**(Reference: Fundamentals of Acoustics by Kinsler et al., Chapter 13: Physiological Acoustics)**

**Subjective Loudness Perception:**

*   **Logarithmic Scale:** The human ear's response to loudness is logarithmic, not linear. A doubling of sound pressure level (SPL) does not sound twice as loud.
*   **Decibel (dB) Scale:** Developed to represent this logarithmic relationship. A 10 dB increase is generally perceived as roughly a doubling of loudness.
*   **Phon:** A unit of perceived loudness. Sounds with the same phon value are perceived to have the same loudness.
*   **Sone:** Another unit of perceived loudness, directly proportional to the subjective loudness. A sound with 2 sones is perceived twice as loud as a sound with 1 sone.

**(Important Point to Remember: The relationship between sound pressure and perceived loudness is complex and non-linear. The decibel scale is a convenient way to represent this.)**

---

### 3. Objective Measurement of Sound

Objective assessment relies on instruments to quantify sound properties.

**Key Concepts and Definitions:**

*   **Sound Pressure:** The deviation from atmospheric pressure caused by a sound wave. It is measured in Pascals (Pa).
*   **Sound Intensity:** The rate of sound energy flow through a unit area perpendicular to the direction of propagation. It is measured in Watts per square meter (W/m²).
*   **Sound Power:** The total rate at which sound energy is radiated by a source. It is measured in Watts (W).
*   **Sound Pressure Level (SPL):** A logarithmic measure of sound pressure relative to a reference pressure.
    *   **Formula:** $SPL_{dB} = 20 \log_{10} \left( \frac{p}{p_{ref}} \right)$
    *   Where:
        *   $p$ is the root-mean-square (RMS) sound pressure (Pa)
        *   $p_{ref}$ is the reference sound pressure, typically $20 \mu Pa$ (the threshold of human hearing for a 1 kHz tone).
    *   **Unit:** Decibels (dB)
    *   **Significance:** Most common objective measure of sound. It relates directly to perceived loudness, though not linearly.

**(Reference: Noise and Vibration Control Engineering by Ver & Beranek, Chapter 2: Fundamentals of Acoustics)**

*   **Sound Intensity Level (SIL):** A logarithmic measure of sound intensity relative to a reference intensity.
    *   **Formula:** $SIL_{dB} = 10 \log_{10} \left( \frac{I}{I_{ref}} \right)$
    *   Where:
        *   $I$ is the sound intensity (W/m²)
        *   $I_{ref}$ is the reference sound intensity, typically $10^{-12} W/m²$.
    *   **Unit:** Decibels (dB)
    *   **Significance:** Useful for pinpointing sound sources and measuring sound energy flow.

**(Reference: Noise and Vibration Control Engineering by Ver & Beranek, Chapter 2: Fundamentals of Acoustics)**

*   **Sound Power Level (PWL):** A logarithmic measure of sound power relative to a reference power.
    *   **Formula:** $PWL_{dB} = 10 \log_{10} \left( \frac{W}{W_{ref}} \right)$
    *   Where:
        *   $W$ is the sound power (W)
        *   $W_{ref}$ is the reference sound power, typically $10^{-12} W$.
    *   **Unit:** Decibels (dB)
    *   **Significance:** An intrinsic property of a sound source, independent of the environment or distance. Used for comparing the sound output of different machines.

**(Reference: Noise and Vibration Control Engineering by Ver & Beranek, Chapter 2: Fundamentals of Acoustics)**

*   **Frequency Analysis:** Sound is often composed of multiple frequencies. Objective assessment involves analyzing the distribution of sound energy across different frequencies.
    *   **Octave Bands and Third-Octave Bands:** Common ways to divide the audible frequency spectrum for analysis.
    *   **Sound Level Meter (SLM):** A device used to measure sound pressure levels. Modern SLMs can perform frequency analysis.
    *   **Weighting Networks:** SLMs use weighting networks (e.g., A-weighting, C-weighting) to approximate human hearing sensitivity at different frequencies.

**(Reference: Noise and Vibration Control Engineering by Ver & Beranek, Chapter 3: Measurement of Noise)**

    *   **A-Weighting ($L_{A}$):** Simulates the human ear's reduced sensitivity to low and very high frequencies. It is most commonly used for environmental noise assessment and is expressed in dB(A). This is the most relevant weighting for subjective loudness perception at typical environmental noise levels.
    *   **C-Weighting ($L_{C}$):** More sensitive to low frequencies than A-weighting. It is used for higher sound levels where the ear's sensitivity at low frequencies is better.
    *   **Z-Weighting (or Flat/Linear):** Represents the raw sound pressure level without any frequency weighting. Expressed in dB or dB(L).

**(Important Point to Remember: A-weighting is the most common and usually the most relevant objective measure for correlating with subjective loudness in noise control.)**

---

### 4. Relationship Between Subjective and Objective Assessment

The goal of objective sound measurement is often to predict or understand the subjective experience of sound.

*   **Correlation:** There is a correlation between objective measures (like SPL) and subjective perception (like loudness), but it's not always direct or linear.
*   **Frequency Dependence:** The human ear's sensitivity varies with frequency. A-weighting attempts to account for this, making dB(A) a better indicator of subjective loudness than unweighted dB.
*   **Time Dependence:** The way we perceive sound changes with time. For example, a sudden impulse noise may be perceived as more annoying than a continuous noise of the same average SPL.
    *   **Peak Level:** Measures the maximum instantaneous SPL.
    *   **Impulse Response (Fast/Slow):** SLMs have response time settings (Fast, Slow, Impulse) that approximate how the ear integrates sound energy over time.
        *   **Fast:** Corresponds roughly to how the ear perceives rapid changes.
        *   **Slow:** Corresponds to averaging over about 1 second, reflecting longer-term loudness perception.
        *   **Impulse:** For very short duration sounds.
*   **Annoyance:** Subjective annoyance is influenced by factors beyond loudness, such as:
    *   **Frequency content:** Tones or high-frequency noise can be more annoying.
    *   **Variability:** Fluctuating or impulsive noise is often more annoying than steady noise.
    *   **Time of day:** Noise at night is more disruptive.
    *   **Background noise:** The perceived intrusiveness of a sound depends on the existing noise environment.
    *   **Personal factors:** Individual sensitivity, attitude towards the source, and activity being performed.

**(Reference: Noise and Vibration Control Engineering by Ver & Beranek, Chapter 3: Measurement of Noise, and Chapter 1: Introduction to Noise Control)**
**(Reference: Fundamentals of Acoustics by Kinsler et al., Chapter 13: Physiological Acoustics)**

**Example:**

Consider two sounds:

*   **Sound A:** A pure tone of 100 Hz at 80 dB SPL.
*   **Sound B:** A pure tone of 4000 Hz at 80 dB SPL.

Subjectively, Sound B might be perceived as louder or more irritating than Sound A because the human ear is more sensitive to frequencies around 3-4 kHz. An A-weighted measurement will reflect this difference, showing a higher dB(A) value for Sound B compared to Sound A, even though their SPLs are the same.

**Objective Measures for Specific Noise Characteristics:**

*   **Equivalent Continuous Sound Level ($L_{eq}$):** The steady sound level that would contain the same amount of sound energy as the actual fluctuating sound over a given period. This is a crucial metric for environmental noise, representing the average loudness over time.
    *   **Formula:** $L_{eq} = 10 \log_{10} \left( \frac{1}{T} \int_{0}^{T} 10^{L(t)/10} dt \right)$
    *   Where $L(t)$ is the instantaneous sound level and $T$ is the measurement duration.
    *   **Unit:** Typically dB(A) for environmental noise.
*   **Sound Exposure Level ($SEL$):** The A-weighted sound pressure level of a single event normalized to a 1-second duration. Used for characterizing impulsive or transient sounds.
*   **Percentile Levels ($L_{N}$):** The sound level that is exceeded for N% of the measurement time.
    *   $L_{10}$: The level exceeded 10% of the time (often represents the higher, more intrusive sounds).
    *   $L_{50}$: The median sound level.
    *   $L_{90}$: The level exceeded 90% of the time (often represents the background noise).

**(Reference: Noise and Vibration Control Engineering by Ver & Beranek, Chapter 3: Measurement of Noise)**

---

### 5. Practical Considerations and Instruments

*   **Sound Level Meters (SLMs):**
    *   **Types:** Class 1 (more accurate, for laboratory and precision measurements) and Class 2 (for general-purpose measurements).
    *   **Features:** Capability to measure SPL, display time-weighted averages (Fast/Slow), perform frequency analysis (octave/third-octave bands), and record data.
*   **Noise Dosimeters:** Worn by individuals to measure their personal noise exposure over a workday, calculating the average SPL and total noise dose.
*   **Calibrators:** Acoustic calibrators are essential for ensuring the accuracy of SLMs before and after measurements.

**(Reference: Handbook of Noise and Vibration Control by Crocker, Chapter 2: Noise Measurement and Instrumentation)**
**(Reference: Industrial Noise Control and Acoustics by Barron, Chapter 3: Noise Measurement)**

---

### 6. Practice Questions and Answers

**Question 1:**
What is the primary difference between subjective and objective assessment of sound?
**Answer:**
Subjective assessment refers to how humans perceive and experience sound (e.g., loudness, annoyance), which involves psychological and physiological factors. Objective assessment involves measurable physical quantities of sound, such as sound pressure level, intensity, and frequency, using instruments.

**Question 2:**
Which part of the ear is responsible for converting mechanical vibrations into electrical signals?
**Answer:**
The hair cells within the cochlea in the inner ear are responsible for this conversion.

**Question 3:**
Define Sound Pressure Level (SPL) and provide its formula and unit.
**Answer:**
Sound Pressure Level (SPL) is a logarithmic measure of sound pressure relative to a reference pressure.
Formula: $SPL_{dB} = 20 \log_{10} \left( \frac{p}{p_{ref}} \right)$
Unit: Decibels (dB)
Reference Pressure ($p_{ref}$) is typically $20 \mu Pa$.

**Question 4:**
Why is A-weighting commonly used in noise measurements related to human perception?
**Answer:**
A-weighting is used because it approximates the frequency response of the human ear at typical environmental noise levels. It reduces the contribution of very low and very high frequencies, which the ear is less sensitive to, thus providing a better correlation with perceived loudness.

**Question 5:**
If a machine produces a sound that is 80 dB(A) for 1 hour and then 70 dB(A) for 7 hours, what is the total noise exposure in terms of $L_{eq}$ over 8 hours? (Assume $L_{eq}$ for an 8-hour period).

**Hint:**
$L_{eq} = 10 \log_{10} \left( \frac{1}{T} \sum_{i} 10^{L_i T_i / 10} \right)$
where $T$ is the total time, $L_i$ is the sound level during interval $i$, and $T_i$ is the duration of interval $i$.
In this case, we are dealing with sound energy, so we need to consider the energy contribution of each period.
Let $T = 8$ hours.
Period 1: $L_1 = 80$ dB(A), $T_1 = 1$ hour.
Period 2: $L_2 = 70$ dB(A), $T_2 = 7$ hours.

We need to find the average energy. It's easier to work with the energy flux (pressure squared or intensity) which is proportional to $10^{L/10}$.

Average energy flux $\propto \frac{1}{T} \sum_{i} 10^{L_i T_i / 10}$

**Calculation:**
For Period 1 (1 hour at 80 dB(A)): Energy factor = $10^{80/10} \times 1 \text{ hour} = 10^8 \times 1 \text{ hour}$
For Period 2 (7 hours at 70 dB(A)): Energy factor = $10^{70/10} \times 7 \text{ hours} = 10^7 \times 7 \text{ hours}$

Total energy factor = $10^8 \times 1 + 10^7 \times 7 = 100 \times 10^6 + 70 \times 10^6 = 170 \times 10^6$

Average energy factor over 8 hours = $\frac{170 \times 10^6}{8 \text{ hours}} = 21.25 \times 10^6$

$L_{eq} = 10 \log_{10} (21.25 \times 10^6)$
$L_{eq} = 10 \log_{10} (2.125 \times 10^7)$
$L_{eq} = 10 \times (\log_{10}(2.125) + \log_{10}(10^7))$
$L_{eq} = 10 \times (\log_{10}(2.125) + 7)$
$L_{eq} = 10 \times (0.327 + 7)$
$L_{eq} = 10 \times 7.327$
$L_{eq} \approx 73.3 \text{ dB(A)}$

**Answer:**
The equivalent continuous sound level ($L_{eq}$) over 8 hours is approximately 73.3 dB(A).

---

### 7. Important Points to Remember

*   **Subjective vs. Objective:** Always distinguish between how sound is perceived (subjective) and how it is measured (objective).
*   **The Ear's Role:** The human ear is a complex biological instrument that dictates our subjective experience of sound, influencing the choice of objective measurement parameters.
*   **A-Weighting:** The most commonly used weighting for correlating objective measurements with subjective loudness.
*   **Decibel Scale:** A logarithmic scale is used for sound pressure and intensity levels because of the wide dynamic range of human hearing and the non-linear relationship between physical intensity and perceived loudness.
*   **$L_{eq}$:** A critical metric for assessing environmental noise and total noise dose over a period, representing the equivalent continuous sound level.
*   **Beyond Loudness:** Subjective assessments also include factors like annoyance, which depend on more than just the sound pressure level.

---

### 8. Alignment with Course Outcomes

*   **CO1 (K2):** Definitions of SPL, SIL, PWL, frequency, pitch, loudness are covered. The physics behind these measurements and their relation to sound wave propagation is implicitly addressed through the discussion of sound pressure and intensity.
*   **CO3 (K2):** The mechanism of hearing is explained through the structure of the ear and its function in processing sound. Various noise measuring devices (SLMs, Dosimeters) and their parameters ($L_{eq}$, dB(A)) are discussed.
*   **CO4 (K2):** While this topic doesn't directly cover noise reducing measures, understanding the subjective and objective assessment of sound is foundational to evaluating the effectiveness of such measures. For instance, knowing that A-weighting correlates with loudness helps in understanding how mufflers or enclosures reduce perceived noise.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
