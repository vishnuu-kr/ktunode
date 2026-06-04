---
title: "Loudness"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 3: Ear its structure and function"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463ff1"
status: "completed"
scrapedAt: "2026-05-20T18:09:44.614Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 3: The Ear: Structure and Function

### Topic: Loudness

---

### 1. Introduction to Loudness

Loudness is a subjective perceptual attribute of sound. It describes how strong or intense a sound *seems* to us, as opposed to the objective physical measure of sound pressure. Our perception of loudness is influenced by several factors beyond just the sound pressure level, including frequency, duration, and the presence of other sounds.

**Key Concept:** Loudness is a **psychoacoustic** phenomenon.

**Reference:**
*   *Fundamentals of Acoustics* (Ekinsler et al., 2000) discusses the subjective nature of sound perception.
*   *Noise and Vibration Control Engineering* (Ver & Beranek, 2006) touches upon loudness in the context of human response to noise.

---

### 2. Objective vs. Subjective Measures of Sound

It's crucial to distinguish between objective and subjective measures of sound.

*   **Objective Measures:** These are quantifiable physical properties of a sound wave. Examples include Sound Pressure Level (SPL), frequency, and duration.
*   **Subjective Measures:** These are perceptual qualities of a sound as experienced by a listener. Loudness is the primary subjective measure discussed in this topic.

**Key Concept:** While SPL is an objective measure, loudness is a subjective perception.

**Alignment with CO1 (K2):** Understanding the distinction between objective and subjective sound properties aligns with defining acoustic terminologies.

---

### 3. Factors Influencing Loudness Perception

Several factors contribute to how loud we perceive a sound:

*   **Sound Pressure Level (SPL):** Generally, higher SPLs are perceived as louder.
*   **Frequency:** The human ear is most sensitive to frequencies in the range of 1 kHz to 5 kHz. Sounds at these frequencies are perceived as louder than sounds of the same SPL at lower or higher frequencies.
*   **Duration:** For very short sounds (less than ~200 ms), perceived loudness decreases with decreasing duration. Very brief sounds may not be perceived as loud at all, even at high SPLs.
*   **Bandwidth:** The complexity of the sound (e.g., pure tone vs. broadband noise) can affect perceived loudness.
*   **Presence of Other Sounds:** The perception of loudness can be masked or influenced by simultaneous sounds.

**Key Concepts:**
*   Frequency-dependent sensitivity of the human ear.
*   Temporal integration of sound energy by the ear.

**Examples:**
*   A 60 dB tone at 3 kHz will sound louder than a 60 dB tone at 100 Hz.
*   A short click at a high SPL might not seem as loud as a continuous tone at the same SPL.

**Reference:**
*   *Fundamentals of Acoustics* (Ekinsler et al., 2000) dedicates significant sections to the audibility curves and equal-loudness contours.
*   *Noise and Vibration Control Engineering* (Ver & Beranek, 2006) discusses the impact of frequency and duration on annoyance and loudness.

---

### 4. Units of Loudness

The primary unit used to quantify loudness is the **sone**.

*   **Sone:** A dimensionless unit of loudness. By definition, a sound with a loudness of 1 sone is perceived as equally loud as a 1 kHz pure tone at 40 dB SPL. Doubling the loudness in sones corresponds to a perceived doubling of loudness.
*   **Phon:** An alternative unit that relates loudness to a reference sound (a 1 kHz pure tone). A sound has a loudness of N phons if it is perceived to be as loud as a 1 kHz pure tone with an SPL of N dB.

**Key Concepts:**
*   Sone: Relates to perceived loudness directly and is nonlinear.
*   Phon: Relates loudness to a reference SPL at a specific frequency (1 kHz) and is linear with respect to SPL at that frequency.

**Relationship between Sone and Phon:**
The relationship between sones and phons is often approximated by the formula:
$L_{sone} = 2^{((L_{phon} - 40)/10)}$

Where:
*   $L_{sone}$ is the loudness in sones.
*   $L_{phon}$ is the loudness in phons.

**Example:**
*   A sound perceived as 80 phons is twice as loud as a sound perceived as 70 phons (in terms of the phon scale).
*   Using the formula, 80 phons corresponds to $2^{((80-40)/10)} = 2^4 = 16$ sones.
*   70 phons corresponds to $2^{((70-40)/10)} = 2^3 = 8$ sones.
*   Thus, 80 phons is indeed twice as loud as 70 phons in sones.

**Important Point to Remember:**
*   The sone scale is **nonlinear**. A doubling of sones means a perceived doubling of loudness.
*   The phon scale is **linear** with respect to SPL at 1 kHz.

**Reference:**
*   *Fundamentals of Acoustics* (Ekinsler et al., 2000) provides detailed explanations of the sone and phon scales.
*   *Noise and Vibration Control Engineering* (Ver & Beranek, 2006) uses these units in discussions of human response.

---

### 5. Equal-Loudness Contours (Fletcher-Munson and Robinson-Dadson Curves)

These curves graphically represent the relationship between frequency and the SPL required to achieve a constant perceived loudness across different frequencies.

*   **Fletcher-Munson Curves:** The earliest widely accepted set of equal-loudness contours, published in 1933.
*   **Robinson-Dadson Curves:** More recent and considered more accurate, published in the 1950s and 1960s.

**How to read an Equal-Loudness Contour:**
1.  Find the desired loudness level on the y-axis (e.g., 60 dB SPL at 1 kHz).
2.  Follow that line horizontally to intersect the curve corresponding to a specific frequency.
3.  Drop vertically from the intersection point to the x-axis to find the SPL required at that frequency to be perceived as equally loud as the reference sound.

**Key Observations from the Curves:**
*   At low SPLs (e.g., 20-40 phons), the ear is much less sensitive to low frequencies, and sensitivity peaks around 2-4 kHz.
*   As SPL increases, the ear becomes more sensitive to low frequencies, and the curves become flatter.
*   At very high SPLs, the sensitivity across frequencies becomes more uniform.

**Alignment with CO3 (K2):** Understanding equal-loudness contours is essential for comprehending the mechanism of hearing and how our perception of loudness varies with frequency.

**Reference:**
*   *Fundamentals of Acoustics* (Ekinsler et al., 2000) is a primary source for these curves and their interpretation.
*   *Noise and Vibration Control Engineering* (Ver & Beranek, 2006) often refers to these curves when discussing the impact of noise on humans.

---

### 6. Loudness Level in Decibels (dB) and Weighting Networks

While sones and phons directly quantify loudness, in practical noise measurement, we often use sound pressure levels with frequency weighting.

*   **A-Weighting (dBA):** This is the most common weighting network. It approximates the inverse of the 40-phon equal-loudness contour. It attenuates low frequencies and, to a lesser extent, high frequencies, to reflect the human ear's reduced sensitivity at these extremes at moderate loudness levels.

**Why A-Weighting?**
A-weighting provides a single-number metric that correlates well with the perceived loudness and annoyance of sounds, especially for moderate to high-level noises.

*   **B-Weighting (dB):** Approximates the 70-phon equal-loudness contour. Less commonly used than A-weighting.
*   **C-Weighting (dBC):** Approximates the 100-phon equal-loudness contour. It is flatter than A-weighting and is used for measuring higher-level sounds or for characterizing the frequency content of sound.

**Key Concept:** A-weighting is a frequency-weighting filter designed to simulate the human ear's response at moderate loudness levels.

**Alignment with CO3 (K2):** Understanding weighting networks is directly related to noise measuring devices and the perception of sound.

**Alignment with CO1 (K2):** Recognizing dBA as a specific acoustic terminology.

**Reference:**
*   *Noise and Vibration Control Engineering* (Ver & Beranek, 2006) extensively discusses weighting networks and their application in noise measurement.
*   *Handbook of Noise and Vibration Control* (Crocker, 2007) provides detailed specifications and applications of various weighting curves.

---

### 7. Predicting Loudness from Objective Measurements

While direct loudness measurement (in sones) is complex and requires specialized equipment and listening tests, engineers often rely on predicting loudness from objective measurements like SPL.

*   **Stevens' Power Law:** A psychophysical law that relates the perceived magnitude of a stimulus to its physical intensity. For loudness, it's often expressed as:
    $L = k \cdot I^a$
    where $L$ is loudness, $I$ is intensity (or related physical measure), $k$ is a constant, and $a$ is an exponent. For loudness, $a$ is approximately 0.3. This non-linear relationship explains why doubling SPL does not double loudness.

*   **Loudness Calculation Models:** More sophisticated models exist to predict loudness from a sound's spectrum. Examples include:
    *   **Zwicker's Loudness Model:** A widely used model that accounts for psychoacoustic phenomena like critical bands and masking to predict loudness in sones.
    *   **Moore's Auditory Filter Bank Model:** Another advanced model.

**Key Concept:** Loudness can be predicted using models that incorporate psychoacoustic principles and frequency analysis.

**Alignment with CO2 (K4):** Analyzing the transmission of sound through different media is a prerequisite for understanding its spectral content, which is then used in loudness prediction models.

**Reference:**
*   *Fundamentals of Acoustics* (Ekinsler et al., 2000) may introduce basic psychophysical laws.
*   *Noise and Vibration Control Engineering* (Ver & Beranek, 2006) discusses loudness prediction methods and their applications in noise control.

---

### 8. Relationship Between Loudness and Annoyance

Loudness is a major contributor to annoyance, but it is not the sole factor. Annoyance also depends on:

*   **Sound Quality:** Characteristics like tonality (pure tones), impulsiveness (sudden impacts), and roughness.
*   **Frequency:** Low-frequency noise can be particularly annoying.
*   **Time of Day:** Noise at night is generally more annoying.
*   **Expectations and Control:** The ability to control or predict the noise.
*   **Previous Exposure:** Habituation can reduce annoyance.

**Key Concept:** Loudness is a primary, but not the only, determinant of annoyance.

**Alignment with CO3 (K2):** Understanding the factors that contribute to annoyance is part of understanding the human response to noise.

**Reference:**
*   *Noise and Vibration Control Engineering* (Ver & Beranek, 2006) has extensive sections on noise annoyance and its correlates.
*   *Industrial Noise Control and Acoustics* (Barron, 2001) discusses human perception of noise, including annoyance.

---

### 9. Practice Questions and Answers

**Question 1:**
What is the primary difference between Sound Pressure Level (SPL) and Loudness?
**(Alignment: CO1 - K2)**

**Answer 1:**
SPL is an objective, physical measure of sound pressure, while loudness is a subjective, perceptual attribute of how strong a sound seems to a listener. Loudness is influenced by factors like frequency and duration, whereas SPL is a direct measurement of pressure.

**Question 2:**
A 1 kHz pure tone at 50 dB SPL is perceived as equally loud as a 200 Hz pure tone at 70 dB SPL. Using the concept of equal-loudness contours, what can be concluded?
**(Alignment: CO3 - K2)**

**Answer 2:**
This illustrates the frequency-dependent nature of hearing. The ear is more sensitive to 1 kHz than to 200 Hz at moderate levels. Therefore, a higher SPL (70 dB) is required at 200 Hz to achieve the same perceived loudness as a lower SPL (50 dB) at 1 kHz. This implies that the 200 Hz tone has a higher phon value than the 1 kHz tone if they are perceived as equally loud at different SPLs and frequencies. *Correction*: The statement implies they are perceived as equally loud. If they are perceived as equally loud, they have the same phon value. The difference in SPL at different frequencies to achieve the same loudness is the essence of equal-loudness contours. So, the 1 kHz tone at 50 dB SPL and the 200 Hz tone at 70 dB SPL both fall on the same equal-loudness contour. This contour would represent a specific loudness level (e.g., 50 phons if the 1 kHz tone was the reference).

**Question 3:**
If a sound has a loudness of 16 sones, how many sones would a sound have if its loudness is perceived as twice as great?
**(Alignment: CO1 - K2)**

**Answer 3:**
A sound perceived as twice as great in loudness would have a loudness of 32 sones. The sone scale is linear with perceived loudness, meaning doubling the sone value corresponds to a perceived doubling of loudness.

**Question 4:**
Why is A-weighting commonly used in noise measurements?
**(Alignment: CO3 - K2)**

**Answer 4:**
A-weighting is used because it approximates the frequency response of the human ear at moderate loudness levels (similar to the 40-phon equal-loudness contour). This weighting helps to correlate objective sound pressure level measurements (in dBA) with the subjective perception of loudness and annoyance.

**Question 5:**
A particular sound is measured at 80 dB SPL at 1 kHz. If the equal-loudness contour for 70 phons passes through 80 dB SPL at 1 kHz, and the equal-loudness contour for 80 phons passes through 70 dB SPL at 1 kHz, how would these sounds likely be perceived in terms of loudness?
**(Alignment: CO3 - K2, CO1 - K2)**

**Answer 5:**
The sound at 80 dB SPL at 1 kHz is 70 phons. The sound at 70 dB SPL at 1 kHz is 80 phons. In terms of perceived loudness, the second sound (80 phons) would be perceived as *louder* than the first sound (70 phons). Using the sone conversion:
*   70 phons = $2^{((70-40)/10)} = 2^3 = 8$ sones
*   80 phons = $2^{((80-40)/10)} = 2^4 = 16$ sones
Thus, the sound at 80 phons (70 dB SPL at 1 kHz) is perceived as twice as loud as the sound at 70 phons (80 dB SPL at 1 kHz). This is counter-intuitive based solely on SPL but demonstrates the non-linear relationship between SPL and perceived loudness, and the role of the phon scale.

---

### 10. Important Points to Remember

*   **Loudness is subjective:** It's how we *perceive* a sound's intensity.
*   **Frequency matters:** The ear's sensitivity varies significantly with frequency. We are most sensitive to frequencies between 1 kHz and 5 kHz.
*   **Duration matters:** Very short sounds are perceived as less loud than longer sounds of the same SPL.
*   **Sone and Phon:** Sone is a direct measure of perceived loudness (nonlinear), while Phon is a measure of loudness level relative to a 1 kHz reference (linear with SPL at 1 kHz).
*   **Equal-Loudness Contours:** Show the SPL needed at different frequencies to achieve the same perceived loudness.
*   **A-Weighting:** A practical filter that approximates human hearing at moderate levels, correlating SPL (dBA) with perceived loudness.
*   **Loudness vs. Annoyance:** Loudness is a key factor, but other sound qualities and circumstances also contribute to annoyance.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 11. Further Reading and References

*   **Ver, I. L., & Beranek, L. L. (2006).** *Noise and vibration control engineering: Principles and applications*. John Wiley & Sons. (Chapter on Human Response to Noise)
*   **Ekinsler, L. E., Frey, A. R., Coppens, A. B., & Sanders, J. V. (2000).** *Fundamentals of acoustics*. John Wiley & Sons. (Chapters on Psychoacoustics and Auditory Perception)
*   **Munjal, M. L. (2013).** *Noise and vibration control*. World Scientific.
*   **Crocker, M. J. (2007).** *Handbook of noise and vibration control*. John Wiley & Sons.
*   **Barron, R. F. (2001).** *Industrial noise control and acoustics*. CRC Press.
*   **Lasithan, L. G. (2014).** *Mechanical vibrations and industrial noise control*. PHI Learning Pvt. Ltd.

---