---
title: "Absolute Threshold of Hearing"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 4: Signal Processing models of audio perception"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff462"
status: "completed"
scrapedAt: "2026-05-23T18:11:26.883Z"
---
# SPEECH AND AUDIO PROCESSING: Module 4 - Signal Processing Models of Audio Perception

## Topic: Absolute Threshold of Hearing

---

### 1. Introduction to Audio Perception and the Ear

**Key Concept:** The human ear is a complex biological transducer that converts acoustic vibrations into neural signals that are interpreted by the brain as sound. Audio perception is how we experience and interpret these sounds.

**Learning Outcome Alignment:**
*   **CO4 (K1):** To describe the fundamental concepts, principles, and theories of hearing mechanism.

**Overview:**
Understanding how humans hear is crucial for audio processing. The process involves several stages:
*   **Outer Ear:** Collects sound waves and directs them into the ear canal.
*   **Middle Ear:** Amplifies sound vibrations and transmits them to the inner ear.
*   **Inner Ear (Cochlea):** Converts mechanical vibrations into electrical signals via hair cells.
*   **Auditory Nerve:** Transmits these electrical signals to the brain for interpretation.

**Textbook References:**
*   **O'Shaughnessy (2nd Ed.):** Chapter 1 provides an overview of the speech communication process, including the role of the listener and the auditory system.
*   **Quatieri (2001):** While primarily focused on speech signal processing, understanding the listener's capabilities is implicitly important for signal design and analysis.

---

### 2. Sound Intensity and Decibels (dB)

**Key Concept:** Sound intensity is a measure of the power of a sound wave per unit area. The decibel (dB) scale is a logarithmic scale used to express sound intensity levels relative to a reference intensity.

**Learning Outcome Alignment:**
*   **CO4 (K1):** To describe the fundamental concepts, principles, and theories of hearing mechanism.
*   **CO2 (K2):** To analyze the speech signal in the time and frequency domain (understanding signal levels is part of analysis).

**Definitions:**
*   **Sound Intensity ($I$):** The power of sound per unit area. Measured in Watts per square meter (W/m²).
*   **Reference Intensity ($I_0$):** The lowest intensity that can be perceived by the human ear under ideal conditions. Typically set at $10^{-12}$ W/m².
*   **Sound Intensity Level (SIL) in dB:**
    $$ \text{SIL (dB)} = 10 \log_{10} \left( \frac{I}{I_0} \right) $$
*   **Sound Pressure Level (SPL) in dB:** Often used interchangeably with SIL, especially in audio contexts, as sound pressure is more directly related to the vibrations the ear experiences.
    $$ \text{SPL (dB)} = 20 \log_{10} \left( \frac{p}{p_0} \right) $$
    where $p$ is the sound pressure and $p_0$ is the reference sound pressure (typically 20 micropascals or 20 µPa).

**Important Point to Remember:** The 20 in the SPL formula comes from the fact that sound pressure is proportional to the square root of intensity, and $\log(x^2) = 2\log(x)$.

**Example:**
If a sound wave has an intensity of $10^{-10}$ W/m², its Sound Intensity Level is:
$$ \text{SIL (dB)} = 10 \log_{10} \left( \frac{10^{-10} \text{ W/m}^2}{10^{-12} \text{ W/m}^2} \right) = 10 \log_{10}(10^2) = 10 \times 2 = 20 \text{ dB} $$

**Textbook References:**
*   **O'Shaughnessy (2nd Ed.):** Section 1.3.1 discusses sound intensity and the decibel scale as it relates to speech loudness.
*   **Rabinar (2003):** Likely includes a discussion of signal levels and the dB scale in the context of digital signal processing.

---

### 3. The Absolute Threshold of Hearing (ATH)

**Key Concept:** The absolute threshold of hearing (ATH) is the minimum sound intensity (or pressure) level that a human ear can detect at a specific frequency. It represents the lower limit of human hearing.

**Learning Outcome Alignment:**
*   **CO4 (K1):** To describe the fundamental concepts, principles, and theories of hearing mechanism.

**Definition:**
*   **Absolute Threshold of Hearing (ATH):** The minimum audible sound pressure level (SPL) required for a listener to just detect the presence of a sound, typically defined as the SPL at which the sound is perceived 50% of the time.

**Factors Influencing ATH:**
*   **Frequency:** The ATH is not constant across all frequencies. The human ear is most sensitive to frequencies in the speech range (approximately 1 kHz to 4 kHz).
*   **Age:** Hearing sensitivity generally decreases with age, particularly for higher frequencies (presbycusis).
*   **Individual Variability:** There are significant differences in hearing thresholds between individuals.
*   **Environmental Conditions:** Background noise can mask sounds, raising the effective threshold of hearing.

**The Equal-Loudness Contour (Phon Curve):**
*   While ATH refers to the *minimum* detectable sound, our perception of loudness also varies with frequency.
*   Equal-loudness contours (or phon curves) plot the sound pressure level required to produce a perceived loudness equal to a pure tone of 1 kHz at a given SPL.
*   The 0-phon contour represents the locus of sounds that are perceived as equally loud as a 1 kHz tone at 0 dB SPL.
*   Crucially, the 0-phon contour closely approximates the ATH across different frequencies.

**Reference Point:**
*   The standard reference for ATH is often given as 0 dB SPL at 1 kHz. This corresponds to the minimum audible pressure.

**Textbook References:**
*   **O'Shaughnessy (2nd Ed.):** Discusses the auditory system's sensitivity and introduces the concept of loudness perception.
*   **Quatieri (2001):** While focusing on speech signals, it might reference the hearing thresholds to contextualize the signal levels that are perceivable.

---

### 4. The Minimum Audible Field (MAF)

**Key Concept:** The Minimum Audible Field (MAF) is the lowest sound pressure level measured in a free sound field (without reflections) that a listener can detect. It is a more ecologically relevant measure of the threshold of hearing.

**Learning Outcome Alignment:**
*   **CO4 (K1):** To describe the fundamental concepts, principles, and theories of hearing mechanism.

**Definition:**
*   **Minimum Audible Field (MAF):** The minimum sound pressure level (SPL) in a free sound field at which a listener can detect a pure tone. Measured in dB SPL.

**Relationship to ATH:**
*   MAF is closely related to the ATH, but it is measured in a realistic listening environment (free field) rather than a controlled anechoic chamber where sound is delivered via headphones (which often uses Minimum Audible Pressure or MAP).
*   For pure tones, the MAF curve generally shows higher sensitivity (lower dB levels) in the 2-5 kHz range compared to lower or higher frequencies.

**Characteristics of the MAF Curve:**
*   The MAF curve (averaged across many listeners) typically shows a minimum around 2-5 kHz, often reaching values of -5 dB to 0 dB SPL.
*   At lower frequencies (e.g., below 100 Hz), the threshold increases significantly due to the physical limitations of the ear and the inverse square law effect in free fields.
*   At higher frequencies (e.g., above 10 kHz), the threshold also increases due to age-related hearing loss and the reduced efficiency of the outer and middle ear.

**Example:**
A common representation of the MAF curve shows that a listener can detect a 3 kHz tone at approximately -5 dB SPL in a free field. This means that even though the decibel scale is referenced to $20 \mu\text{Pa}$, the ear's sensitivity is so high at this frequency that it can detect sound pressures lower than this reference, resulting in negative dB SPL values.

**Important Point to Remember:** Negative dB SPL values indicate that the sound pressure is less than the reference pressure ($p_0$), but the ear is sensitive enough to detect it.

**Textbook References:**
*   **O'Shaughnessy (2nd Ed.):** Likely discusses the characteristics of human hearing sensitivity across frequencies, which MAF represents.
*   **Rabinar (2003):** May reference these thresholds when discussing the limits of audibility for speech signals.

---

### 5. Minimum Audible Pressure (MAP)

**Key Concept:** The Minimum Audible Pressure (MAP) is the minimum sound pressure level that a listener can detect when a pure tone is presented via headphones in a sound-attenuated room.

**Learning Outcome Alignment:**
*   **CO4 (K1):** To describe the fundamental concepts, principles, and theories of hearing mechanism.

**Definition:**
*   **Minimum Audible Pressure (MAP):** The minimum sound pressure level (SPL) measured at the eardrum that a listener can detect when a pure tone is delivered via headphones. Measured in dB SPL.

**Relationship to MAF:**
*   MAP is typically measured under more controlled laboratory conditions (earphones) compared to MAF (free field).
*   Generally, MAP thresholds are slightly *higher* (less sensitive) than MAF thresholds, especially at lower frequencies. This is because earphones can sometimes introduce more occlusion effects or do not couple as efficiently with the ear canal as the natural process in a free field.

**Characteristics of the MAP Curve:**
*   Similar to MAF, the MAP curve shows maximum sensitivity in the 1-4 kHz range.
*   The minimum MAP threshold is typically around 0 dB SPL.
*   At frequencies below 500 Hz, the MAP threshold rises considerably.

**Textbook References:**
*   **O'Shaughnessy (2nd Ed.):** Might use MAP data as a basis for discussing auditory thresholds, as it's a common laboratory measurement.

---

### 6. Frequency Dependence of the Threshold of Hearing

**Key Concept:** The absolute threshold of hearing is not uniform across all audible frequencies. The human ear's sensitivity varies significantly with frequency.

**Learning Outcome Alignment:**
*   **CO4 (K1):** To describe the fundamental concepts, principles, and theories of hearing mechanism.
*   **CO2 (K2):** To analyze the speech signal in the time and frequency domain (understanding the perceptual relevance of different frequencies).

**Summary of Frequency Response:**
*   **Peak Sensitivity:** The ear is most sensitive to frequencies between approximately 1 kHz and 4 kHz. This is the range where human speech is most intelligible.
*   **Low Frequencies (< 200 Hz):** The threshold of hearing increases significantly at low frequencies. Very low-frequency sounds require much higher SPLs to be detected. This is partly due to the mechanical limitations of the middle and inner ear at these frequencies.
*   **High Frequencies (> 10 kHz):** The threshold of hearing also increases at high frequencies. This is due to age-related hearing loss (presbycusis) and the decreasing efficiency of the auditory system at very high frequencies.

**Graphical Representation:**
*   The MAF and MAP curves plotted against frequency visually represent this frequency dependence. They are often referred to as "threshold curves" or "hearing threshold curves."

**Example:**
*   A pure tone at 100 Hz might require 40 dB SPL to be detected, while a tone at 3 kHz might only require 0 dB SPL.

**Implications for Speech Processing:**
*   Understanding this frequency dependence is vital for speech coding and enhancement. We can potentially compress or reduce information in frequency bands where the ear is less sensitive, without significant perceptual loss.

**Textbook References:**
*   **O'Shaughnessy (2nd Ed.):** Chapter 1 and other relevant sections likely detail the psychophysical characteristics of hearing, including the frequency response.

---

### 7. Practical Implications and Applications

**Key Concept:** The absolute threshold of hearing and the frequency-dependent nature of hearing sensitivity have direct implications for how we design, process, and evaluate audio signals, including speech.

**Learning Outcome Alignment:**
*   **CO3 (K3):** To apply speech processing concepts in real-world applications.
*   **CO5 (K3):** To develop applications by combining concepts of speech production and hearing mechanism.

**Applications:**
*   **Audio Compression (e.g., MP3, AAC):** Psychoacoustic models that exploit the threshold of hearing and masking effects are used to remove inaudible components of audio, thus reducing file size.
*   **Speech Enhancement:** Algorithms can prioritize processing in frequency bands where the speech signal is more likely to be audible and intelligible.
*   **Hearing Aids:** The design of hearing aids is heavily influenced by an individual's hearing threshold curve. Amplification is tailored to compensate for hearing loss at specific frequencies.
*   **Noise Reduction:** Understanding the threshold helps in distinguishing between audible background noise and speech signals.
*   **Telecommunications:** Designing systems that ensure speech intelligibility within the limits of human hearing and typical communication channel noise.

**Example:**
*   In a lossy audio codec, if a particular frequency component of a song is below the listener's absolute threshold of hearing at that frequency, the codec can discard that information without a perceivable difference in the output.

**Textbook References:**
*   **O'Shaughnessy (2nd Ed.):** Likely discusses the perceptual aspects of speech quality and intelligibility, which are informed by these thresholds.
*   **Quatieri (2001):** While focused on signal processing, the principles discussed are applied in systems that aim to be perceptually relevant.
*   **Rabinar (2003):** The practical applications of signal processing for speech systems would inherently consider perceptual limitations.

---

### 8. Practice Questions and Answers

**Question 1 (CO4, K1):** Define the Absolute Threshold of Hearing (ATH) and explain how it relates to the concept of sound pressure level (SPL) in decibels.

**Answer 1:**
The Absolute Threshold of Hearing (ATH) is the minimum sound pressure level (SPL) that a human ear can detect, typically defined as the level at which a sound is perceived 50% of the time. It represents the lower limit of audibility. SPL is a logarithmic measure of sound pressure relative to a reference pressure, usually $20 \mu\text{Pa}$ ($0 \text{ dB SPL}$). The ATH is therefore expressed in dB SPL, indicating the weakest sound pressure the ear can perceive.

**Question 2 (CO4, K1):** Describe the primary factor that causes the Absolute Threshold of Hearing to vary across different frequencies.

**Answer 2:**
The primary factor causing the Absolute Threshold of Hearing to vary across frequencies is the **frequency response of the human auditory system**. The ear is most sensitive to frequencies in the range of approximately 1 kHz to 4 kHz, where the threshold is lowest. Sensitivity decreases significantly at very low and very high frequencies.

**Question 3 (CO4, K1; CO2, K2):** Differentiate between Minimum Audible Field (MAF) and Minimum Audible Pressure (MAP). Which one is generally considered a more realistic measure of everyday listening?

**Answer 3:**
*   **MAF (Minimum Audible Field):** The minimum sound pressure level (SPL) detectable in a free sound field.
*   **MAP (Minimum Audible Pressure):** The minimum sound pressure level (SPL) detectable via headphones at the eardrum.

**MAF** is generally considered a more realistic measure of everyday listening because it reflects how we hear sounds in open environments where sound waves propagate freely. MAP, measured with headphones, is more controlled but may not perfectly replicate natural listening conditions.

**Question 4 (CO3, K3; CO5, K3):** Provide one example of how the concept of the Absolute Threshold of Hearing is applied in a practical audio processing application.

**Answer 4:**
The Absolute Threshold of Hearing is applied in **audio compression algorithms** (e.g., MP3, AAC). These algorithms use psychoacoustic models to identify and discard audio information that falls below the listener's threshold of hearing at specific frequencies. This allows for a significant reduction in file size with minimal or imperceptible loss of audio quality.

**Question 5 (CO4, K1):** A pure tone at 100 Hz can be heard at 40 dB SPL. A pure tone at 3000 Hz can be heard at 0 dB SPL.
    a) Which frequency is the ear more sensitive to?
    b) What can you infer about the relationship between frequency and sensitivity from this example?

**Answer 5:**
    a) The ear is more sensitive to the **3000 Hz** tone because it requires a lower sound pressure level (0 dB SPL) to be detected compared to the 100 Hz tone (40 dB SPL).
    b) This example illustrates that the human ear's sensitivity varies with frequency. The ear is more sensitive (requires lower SPLs) at higher frequencies (like 3000 Hz) within the speech range, and less sensitive at lower frequencies (like 100 Hz).

---

### 9. Important Points to Remember

*   **Decibel Scale:** Essential for quantifying sound intensity and pressure, reflecting human logarithmic perception.
*   **ATH is Frequency-Dependent:** The ear is not equally sensitive across all frequencies. Peak sensitivity is in the 1-4 kHz range.
*   **MAF vs. MAP:** MAF (free field) is generally more reflective of natural listening than MAP (headphones).
*   **Presbycusis:** Age-related hearing loss significantly impacts the upper range of hearing sensitivity.
*   **Psychoacoustics:** Understanding perceptual thresholds is fundamental to efficient audio and speech signal processing, enabling compression and enhancement.
*   **0 dB SPL:** While often considered the "quietest" sound, it's a reference point, and negative dB SPL values are perceivable.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
