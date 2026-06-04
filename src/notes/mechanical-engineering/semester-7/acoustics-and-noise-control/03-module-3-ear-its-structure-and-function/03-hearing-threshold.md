---
title: "Hearing threshold"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 3: Ear its structure and function"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fed"
status: "completed"
scrapedAt: "2026-05-20T18:09:41.896Z"
---
# ACOUSTICS AND NOISE CONTROL - MODULE 3: EAR, ITS STRUCTURE AND FUNCTION

## TOPIC: HEARING THRESHOLD

This topic delves into the fundamental concept of the hearing threshold, exploring the minimum sound pressure level required for a human to perceive sound. Understanding this threshold is crucial for appreciating the sensitivity of human hearing and its implications in noise control engineering.

---

### 1. LEARNING OUTCOMES COVERED

*   **Understanding the mechanism of hearing (CO3):** The hearing threshold is a direct manifestation of how our auditory system functions at its most sensitive level.
*   **Defining acoustic terminologies (CO1):** Concepts like sound pressure level, frequency, and decibels are central to defining and measuring the hearing threshold.

---

### 2. KEY CONCEPTS AND DEFINITIONS

#### 2.1 Sound Pressure Level (SPL)

*   **Definition:** Sound pressure level is a logarithmic measure of the effective pressure of a sound relative to a reference value. It quantifies the intensity or loudness of a sound.
*   **Formula:**
    $L_p = 20 \log_{10} \left( \frac{p}{p_{ref}} \right)$
    Where:
    *   $L_p$ is the sound pressure level in decibels (dB).
    *   $p$ is the root-mean-square (RMS) sound pressure in Pascals (Pa).
    *   $p_{ref}$ is the reference sound pressure, typically $20 \times 10^{-6}$ Pa (the threshold of human hearing at 1 kHz).
*   **Significance:** A lower SPL indicates a quieter sound, while a higher SPL indicates a louder sound.

#### 2.2 Frequency

*   **Definition:** Frequency is the number of cycles of a sound wave that pass a point per second, measured in Hertz (Hz). It determines the pitch of a sound.
*   **Significance:** Human hearing is most sensitive to certain frequencies. The hearing threshold varies significantly with frequency.

#### 2.3 Hearing Threshold (Threshold of Hearing, T.O.H.)

*   **Definition:** The hearing threshold is the minimum sound pressure level (SPL) at a particular frequency that is required for a human to hear a sound. It represents the lower limit of audibility.
*   **Reference Point:** The hearing threshold is often defined as 0 dB SPL at a frequency of 1000 Hz. This is the reference sound pressure.
*   **Variation:** The hearing threshold is not a single value but a curve that varies with frequency.

#### 2.4 Equal-Loudness Contours (Fletcher-Munson Curves, ISO 226)

*   **Definition:** Equal-loudness contours are curves that show the SPL of different frequencies that are perceived as equally loud by the average human ear.
*   **Visual Representation:** These are typically plotted with frequency on the x-axis and SPL on the y-axis. Each curve represents a different perceived loudness level.
*   **Significance:** They illustrate that our perception of loudness is dependent on frequency. Sounds at frequencies where our hearing is most sensitive (around 2-5 kHz) can be perceived at much lower SPLs than sounds at very low or very high frequencies.
*   **Reference:** The most widely used standard for equal-loudness contours is ISO 226. Early influential work was done by Fletcher and Munson.
    *   **Textbook Reference:**
        *   *Noise and vibration control engineering* by Ver & Beranek (2006) discusses equal-loudness contours in relation to psychoacoustics and how loudness perception is frequency-dependent.
        *   *Fundamentals of Acoustics* by Kinsler, Frey, Coppens, & Sanders (2000) provides a detailed explanation of the physical basis of sound and its perception, including discussions on loudness and equal-loudness contours.

---

### 3. THE HEARING THRESHOLD CURVE

The hearing threshold is often represented by a curve on a graph of SPL versus frequency.

*   **Shape of the Curve:**
    *   **Most Sensitive Frequencies:** Human hearing is most sensitive in the frequency range of approximately 2,000 Hz to 5,000 Hz. At these frequencies, the hearing threshold is at its lowest, often close to 0 dB SPL.
    *   **Low Frequencies:** At very low frequencies (e.g., below 50 Hz), significantly higher SPLs are required to hear the sound. The threshold can be as high as 60-70 dB SPL or more.
    *   **High Frequencies:** Similarly, at very high frequencies (e.g., above 10,000 Hz), the hearing threshold increases again, meaning higher SPLs are needed for detection.
*   **Practical Implications:** This frequency dependence means that a sound that might be inaudible at one frequency could be clearly audible at another frequency if the SPL were the same. This is critical in understanding the impact of noise at different frequencies.

---

### 4. FACTORS INFLUENCING THE HEARING THRESHOLD

The hearing threshold is not a fixed value and can be influenced by several factors:

*   **Age:** As people age, their hearing sensitivity, particularly at higher frequencies, tends to decrease. This phenomenon is known as presbycusis.
    *   **Impact:** The hearing threshold curve shifts upwards with age, meaning older individuals require louder sounds to hear.
    *   **Textbook Reference:**
        *   *Noise and Vibration Control* by Munjal (2013) often touches upon age-related hearing loss (presbycusis) in the context of occupational hearing loss and regulatory standards.
*   **Exposure to Loud Noise (Noise-Induced Hearing Loss - NIHL):** Prolonged or intense exposure to loud sounds can damage the delicate hair cells in the inner ear, leading to a permanent elevation of the hearing threshold.
    *   **Impact:** This results in a reduction in hearing sensitivity, especially at higher frequencies.
    *   **Reference Book:**
        *   *Handbook of Noise and Vibration Control* by Crocker (2007) extensively covers NIHL, its mechanisms, and its impact on hearing thresholds.
        *   *Industrial Noise Control and Acoustics* by Barron (2001) also discusses the effects of industrial noise on hearing and how it shifts the hearing threshold.
*   **Genetics:** Individual genetic predispositions can influence the sensitivity of the auditory system.
*   **Health Conditions:** Certain medical conditions and medications can affect hearing and, consequently, the hearing threshold.
*   **Test Conditions:** The precise hearing threshold measured can also depend on the testing environment (e.g., ambient noise levels) and the testing methodology used.

---

### 5. PRACTICE QUESTIONS AND EXERCISES

**Question 1:**
What is the reference sound pressure level for human hearing at 1 kHz, and what is the corresponding sound pressure in Pascals?
**Answer:** The reference sound pressure level is 0 dB SPL. The corresponding reference sound pressure ($p_{ref}$) is $20 \times 10^{-6}$ Pa.

**Question 2:**
Describe the general trend of the hearing threshold curve across the audible frequency range (approximately 20 Hz to 20 kHz).
**Answer:** The hearing threshold is highest at very low and very high frequencies, meaning more sound pressure is needed to hear these sounds. It is lowest in the mid-frequency range (around 2-5 kHz), indicating peak hearing sensitivity.

**Question 3:**
Explain why equal-loudness contours are important in acoustics and noise control.
**Answer:** Equal-loudness contours are important because they demonstrate that our perception of loudness is not solely dependent on the sound pressure level but also on the frequency of the sound. This understanding is crucial for designing effective noise mitigation strategies and for setting appropriate noise regulations, as it highlights that sounds at different frequencies with the same SPL may be perceived as having different loudness levels.

**Question 4:**
If a sound has a sound pressure of $2 \times 10^{-3}$ Pa at 1 kHz, what is its sound pressure level (SPL)?
**Answer:**
Using the formula: $L_p = 20 \log_{10} \left( \frac{p}{p_{ref}} \right)$
$L_p = 20 \log_{10} \left( \frac{2 \times 10^{-3} \text{ Pa}}{20 \times 10^{-6} \text{ Pa}} \right)$
$L_p = 20 \log_{10} \left( \frac{2 \times 10^{-3}}{2 \times 10^{-5}} \right)$
$L_p = 20 \log_{10} (100)$
$L_p = 20 \times 2$
$L_p = 40 \text{ dB SPL}$

**Question 5:**
Discuss one factor that can cause an individual's hearing threshold to be higher than that of a young, healthy individual.
**Answer:** Age (presbycusis) is a significant factor. As people age, their ability to hear high-frequency sounds deteriorates, leading to an increased hearing threshold in those frequency ranges. Another major factor is exposure to loud noise, which can damage the ear and cause noise-induced hearing loss, raising the hearing threshold.

---

### 6. IMPORTANT POINTS TO REMEMBER

*   **The hearing threshold is frequency-dependent.** Human hearing is most sensitive between 2 kHz and 5 kHz.
*   **0 dB SPL at 1 kHz is the reference for the threshold of hearing.** This corresponds to a sound pressure of $20 \times 10^{-6}$ Pa.
*   **Equal-loudness contours (e.g., ISO 226) visually represent the frequency dependence of perceived loudness.**
*   **Factors like age and noise exposure can elevate the hearing threshold**, leading to hearing loss.
*   **Understanding the hearing threshold is fundamental to acoustics and noise control** as it defines the lower limit of audibility and helps in assessing the impact of noise on human perception.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 7. REFERENCES AND FURTHER READING

*   **Ver, Istvan L., and Leo L. Beranek. *Noise and vibration control engineering*. Wiley, Second edition, 2006.** (Provides context on how sound perception relates to noise control engineering principles.)
*   **Ekinsler, Lawrence, Austin R Frey, Alan B Coppens, and James V Sanders. *Fundamentals of Acoustics*. Wiley, Fourth edition, 2000.** (Offers a foundational understanding of sound physics and its psychoacoustic aspects.)
*   **Munjal, M. L. *Noise and Vibration Control*. World Scientific publishing, 2013.** (Discusses practical aspects of noise control and potential impacts on hearing.)
*   **Crocker, Malcom J. *Handbook of Noise and Vibration Control*. Wiley, 2007.** (A comprehensive resource covering various facets of noise and vibration, including human perception and hearing.)
*   **Barron, Randall F. *Industrial Noise Control and Acoustics*. Marcel Dekker, Inc., New York., 2001.** (Focuses on industrial applications and the effects of noise in occupational settings.)
*   **Lasithan, L. G. *Mechanical Vibrations and Industrial Noise Control*. PHI Learning, 2014.** (Covers vibration and noise control, often with considerations for human impact.)

---

### 8. ALIGNMENT WITH COURSE OUTCOMES

*   **CO1: To define various acoustic terminologies and understand the physics behind acoustic wave propagation (Knowledge Level: K2)**
    *   This topic directly supports CO1 by defining and explaining terms like Sound Pressure Level (SPL), frequency, and hearing threshold, all of which are core acoustic terminologies. The understanding of how sound pressure relates to perceived loudness at different frequencies is an aspect of the physics of sound perception.
*   **CO3: To understand the mechanism of hearing, noise regulations and noise measuring devices (Knowledge Level: K2)**
    *   This topic is a foundational element of understanding the mechanism of hearing. The hearing threshold is the most basic level of auditory perception. While not directly covering noise regulations or measuring devices, it provides the necessary context for *why* those things are important (e.g., to protect hearing from levels that exceed safe thresholds or to measure sound relative to our perception).

This concludes the notes for the Hearing Threshold topic within Module 3.