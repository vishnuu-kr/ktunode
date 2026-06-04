---
title: "Sound level frequency weightings"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 3: Ear its structure and function"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fef"
status: "completed"
scrapedAt: "2026-05-20T18:09:43.252Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 3: The Ear: Its Structure and Function

### Topic: Sound Level Frequency Weightings

This topic delves into how we perceive sound and how measurement instruments are designed to mimic this perception. Sound level frequency weightings are crucial for understanding the subjective impact of noise and for establishing relevant noise regulations.

---

### 1. Introduction to Sound Perception and Measurement

*   **Human Hearing is Frequency Dependent:** Our ears are not equally sensitive to all frequencies. We are most sensitive to frequencies in the speech range (approximately 1 kHz to 4 kHz) and less sensitive to very low and very high frequencies.
*   **Objective vs. Subjective Measurement:**
    *   **Objective Measurement:** Using a sound level meter to measure the physical sound pressure level (SPL) in decibels (dB).
    *   **Subjective Measurement:** How humans perceive loudness, which is influenced by frequency.
*   **Purpose of Frequency Weightings:** To adjust the measured sound pressure level to better represent the perceived loudness by the human ear. This allows for more meaningful comparisons of noise levels that affect human comfort and health.

---

### 2. Understanding the Equal-Loudness Contours

*   **Definition:** Equal-loudness contours (also known as Fletcher-Munson curves or Robinson-Dadson curves) are graphs that show the SPL required to produce the same perceived loudness at different frequencies.
*   **Key Concept:** For a given perceived loudness, the required SPL varies with frequency.
*   **Visual Representation:** The contours are a family of curves, where each curve represents a constant perceived loudness level (measured in phons).
*   **Implication:** A sound at 1000 Hz is taken as the reference for perceived loudness. A sound at 50 Hz with the same perceived loudness as a 1000 Hz sound would have a higher SPL.

**(Referenced in: Ekinsler, Frey, Coppens, Sanders - Fundamentals of Acoustics, Chapter 10 - Hearing and Sound Measurement)**

---

### 3. Common Frequency Weighting Networks

Frequency weighting networks are electronic filters applied to the output of a sound level meter to approximate the frequency response of the human ear.

#### 3.1. A-Weighting (dBA)

*   **Most Widely Used:** The A-weighting network is the most common and widely used weighting for environmental noise, occupational noise exposure, and community noise.
*   **Rationale:** It approximates the sensitivity of the human ear at moderate loudness levels (around 40 phons). It significantly attenuates low frequencies and, to a lesser extent, high frequencies.
*   **Characteristics:**
    *   **Low Frequency Attenuation:** High attenuation at frequencies below 100 Hz.
    *   **Mid-Frequency Sensitivity:** Relatively flat response in the mid-frequencies (1 kHz to 4 kHz) where the ear is most sensitive.
    *   **High Frequency Roll-off:** Gradual roll-off at frequencies above 10 kHz.
*   **Application:** Regulatory standards for noise pollution, workplace noise exposure limits, product noise ratings.

**(Referenced in: Ver & Beranek - Noise and Vibration Control Engineering, Chapter 2 - Measurement of Noise, and Crocker - Handbook of Noise and Vibration Control, Chapter 3 - Sound Level Meters)**

#### 3.2. B-Weighting (dBB)

*   **Historical Significance:** Once used to approximate hearing at higher loudness levels (around 70 phons), but largely superseded by C-weighting.
*   **Characteristics:** Less aggressive low-frequency attenuation than A-weighting.
*   **Current Use:** Rarely used in modern standards.

#### 3.3. C-Weighting (dBC)

*   **Higher Loudness Levels:** Approximates the sensitivity of the human ear at higher loudness levels (around 100 phons).
*   **Characteristics:**
    *   **Flatter Response:** Much flatter response across a wider range of frequencies compared to A-weighting.
    *   **Less Low-Frequency Attenuation:** Lower attenuation at low frequencies than A-weighting.
*   **Application:** Useful for measuring peak levels and for assessing the impact of impulsive or low-frequency noise, such as from machinery or traffic. Often used in conjunction with A-weighting.

**(Referenced in: Ver & Beranek - Noise and Vibration Control Engineering, Chapter 2 - Measurement of Noise)**

#### 3.4. Z-Weighting (or Linear/Flat)

*   **Definition:** Z-weighting (from the French "zero") means no weighting is applied. The response is essentially flat across the frequency range of the instrument.
*   **Characteristics:** The meter measures the true sound pressure level without any frequency adjustment.
*   **Application:** Used for calibrating instruments, analyzing the full frequency spectrum of sound, or when the specific application requires an unweighted measurement. It serves as a baseline for applying other weightings.

**(Referenced in: Crocker - Handbook of Noise and Vibration Control, Chapter 3 - Sound Level Meters)**

#### 3.5. Other Weightings (Less Common)

*   **D-Weighting:** Developed for aircraft noise measurement.
*   **G-Weighting:** Used for very low-frequency infrasound measurements.

---

### 4. Importance and Application of Frequency Weightings

*   **Correlating with Perceived Loudness:** Weightings help bridge the gap between objective sound measurements and subjective human perception.
*   **Regulatory Compliance:** Many national and international standards (e.g., occupational health and safety, environmental protection) specify A-weighting for noise limits.
*   **Noise Assessment:** A-weighted sound levels are commonly used to assess the overall noise environment and its potential impact on health and well-being.
*   **Diagnostic Tool:** Comparing A-weighted and C-weighted levels can provide insights into the spectral content of noise. A large difference suggests significant low-frequency components.

**(Referenced in: Munjal - Noise and Vibration Control, Chapter 1 - Introduction to Acoustics and Noise Control; Barron - Industrial Noise Control and Acoustics, Chapter 2 - Fundamentals of Acoustics and Noise Measurement)**

---

### 5. How Weighting is Applied in Sound Level Meters

*   **Internal Filtering:** Sound level meters (SLMs) incorporate electronic filters that correspond to the defined weighting curves (A, C, Z, etc.).
*   **Display:** The SLM displays the sound pressure level as measured through the selected weighting network, typically denoted as dB(A), dB(C), or dB(Z).

---

### 6. Key Concepts and Definitions

*   **Sound Pressure Level (SPL):** The objective measure of sound intensity, expressed in decibels (dB).
*   **Decibel (dB):** A logarithmic unit used to express the ratio of two values of a physical quantity, often power or intensity.
*   **Frequency:** The number of cycles of a sound wave per second, measured in Hertz (Hz).
*   **Phon:** A unit of perceived loudness, where 1 phon is the perceived loudness of a 1 kHz pure tone at 1 dB SPL.
*   **Equal-Loudness Contours:** Curves showing the sound pressure levels of pure tones that are perceived as equally loud as a reference tone (usually 1 kHz).
*   **Weighting Network:** An electronic filter that modifies the frequency response of a measurement instrument to mimic human hearing.

---

### 7. Learning Outcomes Addressed

*   **CO1: To define various acoustic terminologies and understand the physics behind acoustic wave propagation (Knowledge Level: K2)**
    *   Definitions of dB, Hz, SPL, Phon are covered. The physical basis for frequency dependence of hearing is explained.
*   **CO3: To understand the mechanism of hearing, noise regulations and noise measuring devices (Knowledge Level: K2)**
    *   The relationship between sound perception (mechanism of hearing) and frequency weightings is explained. The use of weightings in noise regulations and their implementation in noise measuring devices (SLMs) is discussed.

---

### 8. Important Points to Remember

*   **A-weighting is the most common.** Use dBA for general environmental and occupational noise assessment.
*   **C-weighting is useful for low-frequency noise** and peak levels.
*   **Z-weighting (or Linear) measures the raw sound pressure level** without any frequency adjustment.
*   **Human hearing is not uniformly sensitive to all frequencies.** Weightings are designed to account for this.
*   **The perceived loudness is subjective.** Weightings are an attempt to quantify this subjectivity.

---

### 9. Practice Questions and Exercises

**Question 1:**
What is the primary reason for using frequency weighting in sound level measurements?
a) To increase the measured sound pressure level.
b) To account for the varying sensitivity of the human ear at different frequencies.
c) To measure only the low-frequency components of sound.
d) To provide a linear measurement of sound pressure.

**Answer 1:**
b) To account for the varying sensitivity of the human ear at different frequencies.

**Question 2:**
Which frequency weighting network is most commonly used for environmental noise regulations and why?
a) C-weighting, because it is sensitive to low frequencies.
b) Z-weighting, because it provides an absolute measurement.
c) A-weighting, because it approximates human hearing sensitivity at moderate levels.
d) B-weighting, due to its historical significance.

**Answer 2:**
c) A-weighting, because it approximates human hearing sensitivity at moderate levels.

**Question 3:**
A sound source emits noise with significant low-frequency components. If you measure the noise using both A-weighting and C-weighting, what difference would you expect between the dBA and dBC readings?
a) dBA will be significantly higher than dBC.
b) dBC will be significantly higher than dBA.
c) dBA and dBC will be approximately equal.
d) The difference cannot be determined without knowing the exact frequencies.

**Answer 3:**
b) dBC will be significantly higher than dBA.
*(Explanation: C-weighting attenuates low frequencies less than A-weighting. Therefore, when a sound has strong low-frequency content, the C-weighted level will be higher than the A-weighted level.)*

**Question 4:**
Explain the concept of an "equal-loudness contour" and its relationship to A-weighting.

**Answer 4:**
An equal-loudness contour (or iso-loudness contour) is a graphical representation of the sound pressure levels of different frequencies that are perceived by the human ear to be equally loud. A reference frequency (typically 1 kHz) is used, and its loudness is assigned a value in phons. Other frequencies are then matched to this reference level to produce contours. A-weighting is designed to approximate the shape of the equal-loudness contour at a moderate loudness level (around 40 phons), meaning it de-emphasizes very low and very high frequencies relative to mid-frequencies, reflecting how our ears perceive loudness.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 10. References Used

*   **Ekinsler, Lawrence, Frey, Austin R, Coppens, Alan B, Sanders, James V. (2000). *Fundamentals of Acoustics*. Wiley. (Fourth edition)**
*   **Ver, Istvan L, Beranek, Leo L. (2006). *Noise and Vibration Control Engineering*. Wiley. (Second edition)**
*   **Crocker, Malcom J. (2007). *Handbook of Noise and Vibration Control*. Wiley.**
*   **Barron, Randall F. (2001). *Industrial Noise Control and Acoustics*. Marcel Dekker, Inc.**
*   **Munjal, M L. (2013). *Noise and Vibration Control*. World Scientific Publishing.**

---