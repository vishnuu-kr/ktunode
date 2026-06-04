---
title: "Perceived noise level"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 3: Ear its structure and function"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463ff7"
status: "completed"
scrapedAt: "2026-05-20T18:09:48.719Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 3: The Ear – Its Structure and Function

### Topic: Perceived Noise Level

---

**Learning Outcomes:**

Upon completion of this topic, you will be able to:

*   Understand the relationship between physical sound measurements and human perception of loudness.
*   Define and explain key psychoacoustic metrics like Loudness Level (Phon) and Loudness (Sone).
*   Describe the influence of frequency, intensity, and duration on perceived loudness.
*   Explain how the non-linear nature of hearing affects noise perception.
*   Relate the concept of perceived noise to noise annoyance and its impact.
*   Understand the limitations of simple decibel measurements in representing human response to noise.

---

**1. Introduction: Bridging the Gap Between Sound and Perception**

While acoustic engineering often deals with objective physical measurements of sound (e.g., sound pressure level in decibels), the ultimate goal in noise control is to manage the *impact* of sound on humans. This impact is not solely determined by the physical intensity of the sound but by how our auditory system perceives it. Perceived noise level refers to this subjective interpretation of sound intensity by the human ear.

**Key Concept:** **Psychoacoustics** is the study of how humans perceive sound. It bridges the gap between physical acoustics and the psychological experience of hearing.

---

**2. The Human Auditory System: A Non-Linear Receiver**

Understanding perceived noise level requires a basic understanding of how the ear functions as a sound receiver.

*   **Structure of the Ear (Brief Overview relevant to perception):**
    *   **Outer Ear (Pinna and Ear Canal):** Collects sound waves and channels them to the eardrum. The pinna provides some directional cues.
    *   **Middle Ear (Eardrum, Ossicles: Malleus, Incus, Stapes):** Converts sound pressure waves into mechanical vibrations and amplifies them before transmitting them to the inner ear. The impedance matching function is crucial.
    *   **Inner Ear (Cochlea):** The sensory organ of hearing. Within the cochlea, vibrations are converted into electrical signals by the organ of Corti (hair cells).
        *   **Basilar Membrane:** Within the cochlea, this membrane is **tonotopically organized**. Different frequencies cause maximum vibration at different points along the membrane. High frequencies stimulate the base, while low frequencies stimulate the apex. This frequency selectivity is fundamental to our ability to discern different pitches.

*   **Non-Linearity of Hearing:**
    *   The human ear does not respond to sound in a linear fashion. This means doubling the sound pressure level does not necessarily double the perceived loudness.
    *   **Threshold of Hearing:** The minimum sound pressure level that can be perceived by a healthy young ear.
    *   **Threshold of Pain:** The sound pressure level at which sound becomes painful. The dynamic range of hearing is vast, spanning from the threshold of hearing to the threshold of pain.
    *   **Saturation:** At very high sound pressure levels, the auditory system may become "saturated," meaning further increases in sound pressure level lead to smaller increases in perceived loudness.

**Important Point to Remember:** The ear is a biological transducer that processes sound in a complex, non-linear manner, heavily influenced by frequency.

---

**3. Measuring Perceived Loudness: Psychoacoustic Scales**

To quantify perceived loudness, specific psychoacoustic scales have been developed.

*   **3.1. Loudness Level (Phon):**
    *   **Definition:** Loudness Level is a measure of perceived loudness in **Phons**. It is defined as the sound pressure level in decibels of a **pure tone at 1000 Hz** that is judged by listeners to be as loud as the sound under consideration.
    *   **Purpose:** To provide a scale that corresponds to human perception of loudness across different frequencies.
    *   **Example:** A sound with a loudness level of 60 Phons is perceived to be as loud as a 1000 Hz pure tone at 60 dB SPL.
    *   **Relationship with SPL:**
        *   For pure tones at 1000 Hz, Loudness Level (Phon) = Sound Pressure Level (dB).
        *   For other frequencies, the relationship is more complex. Sounds at lower frequencies require a higher SPL to be perceived as equally loud as a 1000 Hz tone. Conversely, at frequencies where the ear is more sensitive (around 2-5 kHz), a lower SPL may be perceived as equally loud.
    *   **Contour Lines (Equal-Loudness Contours or Fletcher-Munson Curves/Robinson-Dadson Curves):** These curves plot the sound pressure level required for a given frequency to be perceived as equally loud as a 1000 Hz tone.
        *   **Key Observation:** At low SPLs, the ear is less sensitive to low and high frequencies compared to mid-frequencies. As SPL increases, the curves become flatter, indicating that the ear's sensitivity becomes more uniform across frequencies at higher loudness levels.

    **(Reference:** Ekinsler, Frey, Coppens, Sanders (2000), Chapter 11, "The Human Ear and Auditory System," discusses the principles behind equal-loudness contours.)

*   **3.2. Loudness (Sone):**
    *   **Definition:** Loudness is a scale that quantifies the *magnitude* of perceived loudness, where equal *steps* in Sone represent equal perceived *doubling* of loudness. The unit of loudness is the **Sone**.
    *   **Reference Point:** A loudness of 1 Sone is defined as the loudness of a 40 dB SPL pure tone at 1000 Hz (which corresponds to 40 Phons).
    *   **Relationship between Sone and Phon:** The relationship is approximately **power law**:
        *   $L_{sone} = 2^{(L_{Phon}/40)}$
        *   where $L_{sone}$ is the loudness in sones and $L_{Phon}$ is the loudness level in phons.
    *   **Interpretation:**
        *   A sound of 80 Phons has a loudness of $2^{(80/40)} = 2^2 = 4$ Sones. This means it is perceived as four times as loud as a 40-Phon sound.
        *   A sound of 50 Phons has a loudness of $2^{(50/40)} = 2^{1.25} \approx 2.37$ Sones.
        *   An increase of 10 Phons generally results in a perceived doubling of loudness (e.g., from 40 Phons to 50 Phons, the sone value increases by approximately 1.37, which is not quite doubling. However, the rule of thumb of a 10-dB increase *often* perceived as doubling of loudness is a simplification, more accurate for mid-range frequencies and levels, and implicitly relates to sone scales).
    *   **Stevens' Power Law:** This is a general psychophysical law stating that the perceived magnitude of a stimulus is proportional to the stimulus raised to a power. For loudness, the exponent is approximately 0.3, which translates to the $2^{(L_{Phon}/40)}$ relationship.

    **(Reference:** Ver & Beranek (2006), Chapter 2, "Psychoacoustics and the Perception of Sound," provides a detailed explanation of loudness scales and Stevens' Power Law.)

---

**4. Factors Affecting Perceived Loudness**

Beyond the sheer intensity (SPL), several other factors influence how loud a sound is perceived.

*   **4.1. Frequency:**
    *   As seen with equal-loudness contours, the ear's sensitivity varies with frequency.
    *   **Example:** A 50 Hz tone at 70 dB SPL might be perceived as equally loud as a 1000 Hz tone at 50 dB SPL.

*   **4.2. Bandwidth (Pure Tones vs. Complex Sounds):**
    *   **Pure Tones:** Have a single frequency.
    *   **Complex Sounds (e.g., Noise):** Consist of multiple frequencies.
    *   **Critical Bands:** The auditory system analyzes sound in frequency bands. When a complex sound occupies a bandwidth wider than a certain "critical band," the perceived loudness increases. This is because more auditory nerve fibers are stimulated.
    *   **Ruben's Model:** Explains how the cochlea acts as a spectrum analyzer.
    *   **Bandwidth Effect:** For a given sound pressure level, a broadband noise will generally be perceived as louder than a narrowband noise centered at the same frequency, provided the bandwidth is significant enough to cover critical bands.

    **(Reference:** Munjal (2013), Chapter 2, "Fundamentals of Acoustics and Psychoacoustics," likely discusses critical bands and their impact on loudness.)

*   **4.3. Duration:**
    *   For very short-duration sounds, the ear integrates the energy over time. This is known as **temporal integration**.
    *   **Impulsive Noise:** Short, sharp sounds (like a hammer blow) may be perceived as louder than a continuous sound with the same peak SPL if the duration is very short.
    *   **Threshold of Audibility:** For sounds shorter than approximately 200-300 ms, the perceived loudness decreases as the duration decreases, even if the peak SPL remains the same. The energy delivered is less.

    **(Reference:** Crocker (2007), Handbook of Noise and Vibration Control, often includes sections on temporal effects of sound perception.)

*   **4.4. Masking:**
    *   When a listener is exposed to two or more sounds simultaneously, the presence of one sound can make it more difficult to hear the other. This is called **auditory masking**.
    *   **Simultaneous Masking:** A louder sound can mask a quieter sound at the same or nearby frequencies.
    *   **Perceptual Impact:** Masking can affect the perceived loudness of individual components within a complex sound, and it plays a role in how we perceive different sounds in noisy environments.

---

**5. Perceived Noise Level and Noise Annoyance**

While loudness is a measure of the magnitude of perceived sound, **noise annoyance** refers to the undesirable impact of noise on humans, encompassing a range of negative reactions beyond just loudness.

*   **Loudness as a Key Factor:** Louder sounds are generally more annoying.
*   **Other Factors Contributing to Annoyance:**
    *   **Frequency Content:** Tones and certain frequency characteristics can be more annoying than broadband noise, even at the same loudness. High-frequency sounds can also be perceived as harsher.
    *   **Duration and Intermittency:** Unpredictable or intermittent noises can be more annoying than continuous, steady noises.
    *   **Time of Day:** Noise at night is generally more annoying than during the day due to reduced background noise and the impact on sleep.
    *   **Background Noise:** The level of existing background noise influences how intrusive a new sound is.
    *   **Meaning or Significance:** Sounds associated with unpleasant activities (e.g., alarms, crying) can be more annoying.
    *   **Subjective Factors:** Individual sensitivity, expectations, and the context of the noise all play a role.

*   **Noise Rating Scales:** Various scales have been developed to assess noise annoyance, often incorporating loudness and other factors. Some are directly related to perceived loudness:
    *   **PNdB (Perceived Noise in Decibels):** An older scale developed by Beranek, specifically designed to correlate with annoyance from aircraft noise. It accounts for the greater annoyance of high-frequency sounds.
        *   $L_{PN} = 10 \log_{10} \sum_{i=1}^{n} 10^{L_i/10} \times 10^{(w_i-C)/10}$
        *   Where $L_i$ is the sound pressure level in the $i$-th one-third octave band, $w_i$ is a weighting factor, and $C$ is a constant. The weighting factors $w_i$ are designed to give more weight to higher frequencies.
    *   **NEF (Noise Exposure Forecast):** Used for airport noise impact, integrating PNdB levels over time and factoring in nighttime noise.
    *   **NDm (Noise Dose Metric):** Used in some European countries, incorporating duration and time of day.

    **(Reference:** Barron (2001), Industrial Noise Control and Acoustics, likely discusses various noise rating scales and their psychoacoustic basis.)

---

**6. Limitations of Simple Decibel Measurements (dBA, dBC, etc.)**

While A-weighting (dBA) is commonly used and approximates the human ear's sensitivity at moderate levels, it has limitations in fully capturing perceived loudness and annoyance, especially for complex or loud sounds.

*   **A-Weighting:** Emphasizes mid-frequencies and attenuates low and high frequencies, mimicking the equal-loudness contours at moderate levels.
    *   **Good for:** General noise assessment, predicting annoyance for speech interference and moderate traffic noise.
    *   **Limitations:**
        *   Doesn't fully account for the frequency dependency at very low SPLs or very high SPLs.
        *   Doesn't capture the bandwidth effect (critical bands).
        *   Doesn't directly address annoyance from tonal components or impulsive sounds.
*   **B-Weighting (less common):** Mid-way between A and C.
*   **C-Weighting (dBC):** Flatter frequency response, closer to the ear's response at higher SPLs. Useful for assessing low-frequency content and impact of loud noises.
*   **Z-Weighting (Linear):** No weighting applied, measures the raw sound pressure level.

**Important Point to Remember:** While dBA is a useful metric, understanding perceived noise level requires considering psychoacoustic scales like Phons and Sones, and factors like bandwidth and duration, especially when dealing with complex or high-level noise.

---

**7. Practical Applications in Noise Control**

*   **Setting Noise Limits:** Understanding perceived loudness helps in setting appropriate noise limits for workplaces, residential areas, and public spaces.
*   **Designing Quieter Products:** Manufacturers use psychoacoustic principles to design appliances, vehicles, and machinery that are perceived as less noisy.
*   **Assessing Noise Impact:** Evaluating the subjective impact of noise from sources like construction sites, airports, and industrial plants requires going beyond simple SPL measurements.
*   **Developing Noise Regulations:** Many noise regulations are based on psychoacoustic metrics or scales that attempt to correlate with human annoyance.

---

**Practice Questions and Exercises:**

1.  **Define Loudness Level and Loudness.** What are their respective units?
2.  **Explain the concept of equal-loudness contours.** What do they illustrate about human hearing?
3.  A pure tone at 1000 Hz has a Sound Pressure Level (SPL) of 70 dB. What is its Loudness Level in Phons?
4.  If a sound has a Loudness Level of 70 Phons, what is its approximate Loudness in Sones? (Use the formula $L_{sone} = 2^{(L_{Phon}/40)}$).
5.  How does the duration of a sound affect its perceived loudness, and what is the principle behind this effect?
6.  Why is A-weighting (dBA) commonly used, but what are its limitations in representing perceived noise?
7.  Besides loudness, what other factors contribute to noise annoyance?
8.  Describe the concept of "critical bands" and how it influences perceived loudness.

---

**Answers:**

1.  **Loudness Level** is a measure of perceived loudness in **Phons**. It is the SPL of a 1000 Hz pure tone that sounds equally loud. **Loudness** is a measure of the magnitude of perceived loudness, with the unit **Sone**. 1 Sone is the loudness of a 40 dB SPL, 1000 Hz tone.
2.  Equal-loudness contours (e.g., Fletcher-Munson curves) plot the sound pressure level required at different frequencies to be perceived as equally loud as a reference sound (usually a 1000 Hz tone at a specific SPL). They illustrate that the ear's sensitivity varies with frequency, particularly at lower sound pressure levels.
3.  For a pure tone at 1000 Hz, the Loudness Level in Phons is equal to the Sound Pressure Level in decibels. So, the Loudness Level is **70 Phons**.
4.  $L_{sone} = 2^{(70/40)} = 2^{1.75} \approx 3.36$ Sones.
5.  The duration of a sound affects its perceived loudness through **temporal integration**. For very short sounds, the ear integrates the sound energy over time. Shorter sounds require a higher SPL to be perceived as equally loud as longer sounds.
6.  A-weighting approximates the human ear's frequency sensitivity at **moderate sound pressure levels**, emphasizing mid-frequencies where the ear is most sensitive and attenuating low and high frequencies. Its limitations include not fully capturing the frequency-dependent sensitivity at very low or very high SPLs, and not accounting for bandwidth effects or tonal characteristics that can influence annoyance.
7.  Other factors contributing to noise annoyance include: frequency content (tonal components, high frequencies), intermittency, time of day, background noise level, meaning or significance of the sound, and individual subjective factors.
8.  Critical bands are frequency ranges within the cochlea where the auditory system processes sound. When a sound occupies a bandwidth greater than a critical band, the perceived loudness increases because more auditory nerve fibers are stimulated. This is a key factor in why broadband noise can be perceived as louder than a pure tone of the same SPL if the bandwidth is significant.

---

**Important Points to Remember:**

*   **Perceived loudness is subjective and non-linear.**
*   **Phon** is a scale for perceived loudness that aligns with human hearing across frequencies, relative to a 1000 Hz reference.
*   **Sone** is a scale for the magnitude of perceived loudness, where doubling the Sone value roughly equates to a perceived doubling of loudness.
*   **Frequency, duration, and bandwidth** significantly influence perceived loudness.
*   **Noise annoyance** is a broader concept than loudness, influenced by loudness and other psychoacoustic and contextual factors.
*   **A-weighting (dBA)** is a useful approximation but not a perfect predictor of all aspects of perceived noise or annoyance.

---

**Alignment with Course Outcomes:**

*   **CO1 (Define acoustic terminologies and understand physics):** This topic defines psychoacoustic terms like Phon and Sone, and touches upon the physics of the ear's frequency analysis (tonotopic organization, critical bands).
*   **CO2 (Analyse transmission of sound):** While not the primary focus, the discussion of the ear's structure relates to how sound is received and transduced, which is the final stage of transmission before perception.
*   **CO3 (Understand mechanism of hearing, noise regulations, and measuring devices):** This topic directly addresses the mechanism of hearing by explaining psychoacoustic scales and factors affecting perception. It also indirectly relates to noise regulations by discussing noise annoyance and rating scales.
*   **CO4 (Explain noise reducing measures):** Understanding perceived noise level is foundational for knowing *what* aspects of sound need to be reduced or modified to achieve acceptable noise levels and reduce annoyance. For example, knowing that high frequencies can be more annoying might guide the choice of noise control treatments.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
