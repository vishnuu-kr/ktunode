---
title: "Absolute Threshold of Hearing"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 4: Signal Processing models of audio perception "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca6c"
status: "completed"
scrapedAt: "2026-05-20T17:27:08.769Z"
---
# Speech and Audio Processing: Module 4 - Signal Processing Models of Audio Perception

## Topic: Absolute Threshold of Hearing

---

### 1. Understanding the Absolute Threshold of Hearing (ATH)

The **Absolute Threshold of Hearing (ATH)** is the minimum sound pressure level (SPL) that a healthy human ear can detect at a given frequency. It represents the faintest sound we can perceive.

*   **Key Concept:** The ATH is not a single value but a curve that varies with frequency. Our hearing sensitivity is not uniform across the entire audible spectrum.
*   **Definition:** The minimum sound intensity that can be heard 50% of the time by a listener.
*   **Units:** Typically measured in decibels (dB), specifically **dB SPL** (Sound Pressure Level).
    *   **dB SPL:** A logarithmic scale used to express the ratio of a sound pressure to a reference pressure. The reference pressure for human hearing is typically $20 \mu Pa$ (micropascals).
    *   **Formula for dB SPL:** $20 \log_{10} \left(\frac{P}{P_{ref}}\right)$, where $P$ is the sound pressure and $P_{ref}$ is the reference pressure.

---

### 2. The Frequency Dependence of the ATH

Our ears are most sensitive to frequencies in the mid-range, generally between 2 kHz and 5 kHz. This is a crucial aspect of how we perceive sound.

*   **Human Auditory Range:** The typical range of human hearing is from 20 Hz to 20,000 Hz (20 kHz).
*   **Most Sensitive Frequencies:** Our hearing is most sensitive between approximately 1 kHz and 4 kHz. At these frequencies, the ATH is at its lowest, meaning we can detect very faint sounds.
*   **Least Sensitive Frequencies:** At very low frequencies (below 100 Hz) and very high frequencies (above 15 kHz), our hearing becomes less sensitive, and the ATH is higher. This means we need louder sounds to perceive them at these extremes.
*   **The ATH Curve:** This variation in sensitivity across frequencies is represented by the **ATH curve**.

---

### 3. Visualizing the ATH Curve

The ATH curve is often plotted with frequency on the x-axis (logarithmic scale) and SPL (dB) on the y-axis.

*   **Typical ATH Curve Shape:**
    *   The curve dips to its lowest point in the 2-5 kHz range.
    *   It rises significantly at both lower and higher frequencies.
*   **Example Values (approximate for a young, healthy ear):**
    *   At 100 Hz: ATH might be around 20-30 dB SPL.
    *   At 1 kHz: ATH might be around 0-5 dB SPL.
    *   At 3 kHz: ATH might be at its minimum, near 0 dB SPL.
    *   At 10 kHz: ATH might be around 10-15 dB SPL.
    *   At 15 kHz: ATH might be around 30-40 dB SPL.
*   **Important Note:** These are approximate values and can vary significantly between individuals and with age.

---

### 4. Factors Affecting the Absolute Threshold of Hearing

Several factors can influence an individual's ATH.

*   **Age:** Hearing sensitivity, particularly to higher frequencies, generally declines with age (presbycusis).
*   **Noise Exposure:** Prolonged exposure to loud noise can damage the auditory system, leading to a permanent elevation in the ATH.
*   **Genetics:** Individual genetic makeup can play a role in hearing sensitivity.
*   **Ear Health:** Conditions affecting the ear, such as infections or earwax buildup, can temporarily or permanently alter hearing thresholds.
*   **Individual Variability:** Even among healthy individuals, there's natural variation in hearing acuity.

---

### 5. Significance of the ATH in Audio Processing

The ATH is a foundational concept in audio processing, particularly in areas related to psychoacoustics and audio compression.

*   **Psychoacoustic Models:** Understanding the ATH is crucial for developing models that simulate human hearing perception. These models are used in:
    *   **Audio Compression:** Algorithms like MP3 and AAC use psychoacoustic models to discard audio information that is likely to be inaudible or masked by other sounds. The ATH helps determine the lower limit of perceivable sound.
    *   **Speech Recognition:** Knowing the limits of human hearing can inform the design of speech recognition systems.
    *   **Audio Watermarking:** Embedding imperceptible information within audio signals.
*   **Loudness Perception:** While the ATH defines the minimum perceivable sound, the concept of loudness is more complex and depends on factors like duration and frequency. However, the ATH is the baseline for all loudness calculations.
*   **Noise Reduction:** In noise reduction algorithms, understanding what constitutes a "barely audible" sound can help in distinguishing desired signals from noise.

---

### 6. Key Concepts and Definitions Recap

*   **Absolute Threshold of Hearing (ATH):** The minimum sound pressure level (SPL) detectable by the human ear at a given frequency.
*   **Sound Pressure Level (SPL):** A logarithmic measure of sound pressure, typically in dB SPL, relative to a reference pressure of $20 \mu Pa$.
*   **Audible Spectrum:** The range of frequencies humans can hear (typically 20 Hz to 20 kHz).
*   **ATH Curve:** A graph showing how the ATH varies across different frequencies.
*   **Presbycusis:** Age-related hearing loss.
*   **Masking:** The phenomenon where a louder sound makes a quieter sound inaudible. (Though not directly the ATH, it's closely related in psychoacoustics).

---

### 7. Learning Outcome Coverage

This study guide covers the following learning outcomes:

*   **Understanding the minimum sound pressure level that a healthy human ear can detect at a given frequency.** (Covered in Section 1)
*   **Recognizing the frequency dependence of the absolute threshold of hearing.** (Covered in Section 2)
*   **Identifying the typical range of frequencies where human hearing is most and least sensitive.** (Covered in Section 2)
*   **Explaining the units used to measure the absolute threshold of hearing (dB SPL).** (Covered in Section 1)
*   **Discussing the factors that can affect an individual's absolute threshold of hearing.** (Covered in Section 4)
*   **Understanding the significance of the absolute threshold of hearing in audio processing applications.** (Covered in Section 5)

---

### 8. Practice Questions and Exercises

**Question 1:**
What is the absolute threshold of hearing?
a) The maximum sound pressure level a human can tolerate without pain.
b) The minimum sound pressure level that can be perceived by the human ear at a given frequency.
c) The frequency range that humans can hear.
d) The point at which a sound becomes uncomfortable to listen to.

**Question 2:**
The human ear is most sensitive to frequencies in which range?
a) 20 Hz - 100 Hz
b) 1 kHz - 4 kHz
c) 15 kHz - 20 kHz
d) 500 Hz - 1 kHz

**Question 3:**
If the reference sound pressure for dB SPL is $20 \mu Pa$, and a sound has a pressure of $200 \mu Pa$, what is its SPL in dB? (Use the formula: $20 \log_{10} \left(\frac{P}{P_{ref}}\right)$)

**Question 4:**
Name three factors that can influence a person's absolute threshold of hearing.

**Question 5:**
Why is the ATH important in audio compression techniques like MP3?

---

### 9. Answers to Practice Questions

**Answer 1:**
b) The minimum sound pressure level that can be perceived by the human ear at a given frequency.

**Answer 2:**
b) 1 kHz - 4 kHz

**Answer 3:**
$SPL = 20 \log_{10} \left(\frac{200 \mu Pa}{20 \mu Pa}\right)$
$SPL = 20 \log_{10} (10)$
$SPL = 20 \times 1$
$SPL = 20 dB SPL$

**Answer 4:**
Possible answers include:
*   Age (presbycusis)
*   Noise exposure history
*   Genetics
*   Ear health (infections, earwax)
*   Individual variability

**Answer 5:**
The ATH helps psychoacoustic models identify sounds that are likely to be inaudible (below the threshold) or masked by other sounds. Audio compression algorithms can then remove or reduce the bit rate for these inaudible sounds, thereby reducing file size without a significant perceived loss of audio quality.

---

### 10. Important Points to Remember

*   **ATH is frequency-dependent:** It's not a flat line; our ears are more sensitive to mid-range frequencies.
*   **dB SPL is the unit:** Always remember the reference pressure ($20 \mu Pa$) when dealing with sound pressure levels.
*   **ATH defines the *minimum*:** It's about what we *can* just barely hear, not about loudness or comfort.
*   **Age and noise are major factors:** Hearing deteriorates with age and with exposure to loud sounds.
*   **Psychoacoustics relies heavily on ATH:** It's a cornerstone for understanding how we perceive sound and for designing intelligent audio systems.
