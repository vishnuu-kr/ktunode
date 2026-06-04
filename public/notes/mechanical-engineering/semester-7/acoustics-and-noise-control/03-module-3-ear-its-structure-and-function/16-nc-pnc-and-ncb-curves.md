---
title: "NC, PNC, and NCB curves"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 3: Ear its structure and function"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463ffa"
status: "completed"
scrapedAt: "2026-05-20T18:09:50.839Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 3: The Ear - Its Structure and Function

### Topic: NC, PNC, and NCB Curves

**Course Outcomes (COs) addressed:**

*   **CO3: To understand the mechanism of hearing, noise regulations and noise measuring devices (Knowledge Level: K2)** - This topic directly relates to understanding noise regulations and how subjective perceptions of loudness are quantified.

**Learning Outcomes (LOs) covered:**

*   Understanding the concept of perceived loudness and how it relates to octave band sound pressure levels.
*   Familiarity with different noise criteria (NC, PNC, NCB) and their applications.
*   Ability to interpret and use NC, PNC, and NCB curves for noise assessment.

---

### 1. Introduction to Perceived Loudness and Noise Criteria

The human ear does not perceive all frequencies of sound with equal loudness. A sound at 1000 Hz at a certain sound pressure level (SPL) will sound louder than a sound at 100 Hz with the same SPL. This psychoacoustic phenomenon necessitates the development of metrics that correlate objective sound measurements with subjective human perception of loudness and annoyance.

**Key Concept:** Psychoacoustics - the study of how humans perceive sound.

**1.1 Equal Loudness Contours (Fletcher-Munson and Robinson-Dadson Curves)**

Early research by Fletcher and Munson (Bell Telephone Laboratories) and later refined by Robinson and Dadson established **equal loudness contours**. These curves represent the sound pressure levels of pure tones that are perceived as equally loud by the average human listener at different frequencies.

*   **Definition:** Equal loudness contours are graphs showing the sound pressure level (in dB) required to produce a sensation of loudness equal to a 1000 Hz tone at a given sound pressure level.
*   **Structure:** Typically presented as a family of curves, each corresponding to a different loudness level (e.g., 40 phons, 60 phons, 80 phons). A "phon" is a unit of loudness level.
*   **Observation:** The ear is most sensitive in the frequency range of 1000 Hz to 5000 Hz. Sensitivity decreases significantly at lower and higher frequencies.

**Reference:**
*   Einsler, Frey, Coppens, Sanders, *Fundamentals of Acoustics*, Chapter 15 (Psychoacoustics).
*   Ver & Beranek, *Noise and vibration control engineering*, Chapter 3 (Human Response to Noise).

---

### 2. Noise Criteria (NC) Curves

Noise Criteria (NC) curves are a widely used system for rating the loudness of airborne noise in enclosed spaces, particularly offices and other occupied environments. They aim to provide acceptable noise levels that contribute to occupant comfort and intelligibility of speech.

**2.1 Definition and Purpose:**

*   **Definition:** NC curves are a set of curves, plotted on a graph with frequency (Hz) on the x-axis and Sound Pressure Level (dB) on the y-axis. Each curve is labeled with an NC number (e.g., NC-35, NC-40, NC-50).
*   **Purpose:** To establish desirable and acceptable background noise levels for various types of spaces based on human perception. They are used to specify maximum allowable noise levels in building interiors.

**2.2 Construction of NC Curves:**

NC curves are derived from the equal loudness contours. A specific NC curve represents the desired subjective loudness for a particular environment. The sound spectrum of the noise in a room is measured in octave bands (or sometimes one-third octave bands). The **NC level** of the noise is determined by finding the NC curve that is just touched or exceeded by the measured octave band sound pressure levels.

*   **Procedure:**
    1.  Measure the octave band sound pressure levels (SPLs) of the background noise.
    2.  Plot these measured SPLs on a graph with frequency on the x-axis and SPL on the y-axis.
    3.  Compare the measured spectrum to the family of NC curves.
    4.  The NC level is the number of the curve that the measured spectrum **just touches or exceeds** for the first time when moving from lower frequencies to higher frequencies. If the measured spectrum falls below all NC curves, the NC rating is taken as the level of the lowest NC curve that the spectrum is below.

**Example:** If the measured octave band levels fall below NC-30 for all frequencies below 500 Hz, touch NC-40 at 1000 Hz, and fall below NC-40 for frequencies above 1000 Hz, the NC rating of the noise would be NC-40.

**2.3 Typical NC Levels for Different Spaces:**

| Space Type                 | Typical NC Level | Comments                                                                                                       |
| :------------------------- | :--------------- | :------------------------------------------------------------------------------------------------------------- |
| Recording Studio           | NC-15 to NC-20   | Very quiet, requires minimal background noise.                                                                 |
| Private Office             | NC-35 to NC-40   | Allows for clear speech communication.                                                                         |
| General Office / Open Plan | NC-40 to NC-45   | Can be acceptable, but intelligibility of speech may be slightly compromised.                                  |
| Restaurant / Dining Area   | NC-45 to NC-50   | Moderate background noise for ambiance and masking of conversations.                                           |
| Retail Store               | NC-45 to NC-55   | Higher levels are acceptable; can contribute to a lively atmosphere.                                         |
| Light Industrial           | NC-50 to NC-60   | Higher noise levels can be tolerated, but hearing protection may be required depending on specific tasks.      |
| Heavy Industrial           | NC-60 to NC-75   | Significant background noise; requires hearing protection.                                                     |

**Reference:**
*   Ver & Beranek, *Noise and vibration control engineering*, Chapter 17 (Noise Control in Buildings).
*   Munjal, *Noise and Vibration Control*, Chapter 8 (Noise Criteria and Rating).

**Important Point to Remember:** NC curves are primarily designed for background noise and assume a relatively "flat" spectrum. They are not ideal for characterizing noises with prominent tonal components or impulsive sounds.

---

### 3. Preferred Noise Criteria (PNC) Curves

Preferred Noise Criteria (PNC) curves were developed as an improvement over NC curves. They address some of the limitations of NC curves, particularly their inability to account for the annoyance caused by certain frequency characteristics or the need for speech intelligibility.

**3.1 Definition and Purpose:**

*   **Definition:** PNC curves are also a set of curves on a frequency vs. SPL graph. They are numbered from PNC-15 to PNC-70.
*   **Purpose:** To provide a more comprehensive and refined system for rating background noise in occupied spaces, considering both loudness and intelligibility. They are generally considered more modern and flexible than NC curves.

**3.2 Construction of PNC Curves:**

PNC curves are also based on octave band measurements. The primary difference in their derivation is that PNC curves incorporate specific adjustments and considerations for:

*   **Speech Intelligibility:** PNC curves are designed to ensure good speech intelligibility, especially in offices and conference rooms.
*   **Annoyance of Tones:** PNC curves may give more weight to octave bands that contain significant tonal components, which can be more annoying than broadband noise.

The procedure for determining the PNC rating is similar to NC:

1.  Measure octave band SPLs.
2.  Plot the measured levels.
3.  Determine the PNC rating by identifying the PNC curve that the measured spectrum just touches or exceeds.

**3.3 Key Differences and Advantages over NC:**

*   **Broader Frequency Range:** PNC curves often extend to lower and higher frequencies than some older NC curves.
*   **Consideration of Tonal Components:** While not explicitly defining spectral adjustments for every tone, the underlying principles of PNC development often take into account the potential for annoyance from certain frequency content.
*   **Better Correlation with Annoyance:** PNC curves are generally found to correlate better with perceived annoyance in a wider range of environments.

**Reference:**
*   Ver & Beranek, *Noise and vibration control engineering*, Chapter 17 (Noise Control in Buildings).
*   Barron, *Industrial Noise Control and Acoustics*, Chapter 3 (Noise Criteria and Standards).

---

### 4. Balanced Noise Criteria (NCB) Curves

Balanced Noise Criteria (NCB) curves represent a further evolution in noise rating systems, aiming to balance different aspects of noise perception, including loudness, intelligibility, and the perceived quality of background sound.

**4.1 Definition and Purpose:**

*   **Definition:** NCB curves are another set of curves on a frequency vs. SPL graph.
*   **Purpose:** To provide a more holistic approach to noise assessment by considering the balance between different sonic attributes. NCB is particularly useful for spaces where the quality of the sound environment is critical, such as concert halls, auditoriums, and high-end restaurants. It aims to ensure that the background noise is not only at an acceptable loudness level but also does not interfere with the desired acoustic experience (e.g., music or speech).

**4.2 Construction of NCB Curves:**

The derivation of NCB curves is more complex and often involves considerations beyond simple octave band SPLs. While octave band measurements are still fundamental, NCB may also incorporate:

*   **Psychoacoustic Models:** More sophisticated models that account for the interaction of different frequency components.
*   **Spectral Balance:** Ensuring that the noise spectrum is "balanced" in a way that is aesthetically pleasing or least intrusive.
*   **Speech Intelligibility Index (SII) or Articulation Index (AI):** While not directly part of the NCB *curve* definition, the principles guiding NCB development often relate to maintaining good intelligibility.

**4.3 Key Applications and Considerations:**

*   **Acoustic Design of Performance Spaces:** NCB is often used in the design of spaces where the quality of sound is paramount.
*   **Balancing Noise Sources:** It can help in designing a background noise that complements, rather than detracts from, the primary sound source (e.g., orchestral music).
*   **Subjective Evaluation:** NCB aims for a more subjective "pleasantness" or "appropriateness" of the background noise.

**Reference:**
*   While explicit detailed derivations of NCB curves might be found in specialized acoustic journals or proprietary standards, the general principles of balancing noise perception are discussed in broader texts on architectural acoustics and psychoacoustics. The concept is an extension of the evolution from NC to PNC, seeking a more nuanced rating.

---

### 5. Comparison and Applications of NC, PNC, and NCB

| Feature         | NC Curves                                        | PNC Curves                                         | NCB Curves                                                        |
| :-------------- | :----------------------------------------------- | :------------------------------------------------- | :---------------------------------------------------------------- |
| **Primary Focus** | Overall loudness of background noise.            | Loudness and speech intelligibility.               | Balanced acoustic environment, loudness, intelligibility, and quality. |
| **Origin**      | Based on equal loudness contours.                | Refinement of NC, with better correlation to annoyance. | Further refinement, balancing multiple perceptual factors.        |
| **Application** | Offices, general occupied spaces.                | Offices, conference rooms, general occupied spaces. | Performance spaces, auditoriums, spaces requiring high acoustic quality. |
| **Limitations** | Not ideal for tones, less nuanced for annoyance. | Still primarily octave band based.                 | More complex, less universally standardized for simpler applications. |
| **Evolution**   | Older system.                                    | More modern and preferred over NC in many cases.   | Advanced system for specialized acoustic environments.            |

**Choosing the Right Curve:**

*   For **general office environments**, PNC is often preferred over NC due to better correlation with perceived annoyance and consideration for speech intelligibility.
*   For **performance venues, concert halls, or studios**, NCB or other specialized metrics that consider spectral balance and tonal perception are more appropriate.
*   **NC** is still used, particularly in older specifications or when a simpler loudness criterion is sufficient.

**Reference:**
*   Ver & Beranek, *Noise and vibration control engineering*, Chapter 17.
*   Crocker, *Handbook of Noise and Vibration Control*, various chapters on noise criteria and building acoustics.

---

### 6. Practice Questions and Answers

**Question 1:** What is the primary purpose of NC curves?
**(CO3 - K2)**

**Answer:** The primary purpose of NC curves is to establish acceptable levels of background noise in occupied spaces, such as offices, to ensure comfort and speech intelligibility.

---

**Question 2:** If a measured octave band spectrum has sound pressure levels of 60 dB at 500 Hz, 55 dB at 1000 Hz, and 50 dB at 2000 Hz, and these are the highest levels relative to the NC curves, which NC curve would this noise likely fall into? (Assume other octaves are lower).
**(CO3 - K4)**

**Answer:** Without the actual NC curves and the full spectrum, it's impossible to give a definitive answer. However, if the measured levels are such that they *just touch or exceed* the NC-55 curve at 1000 Hz and 2000 Hz, and are below NC-55 at other frequencies, the NC rating would be NC-55. The key is to find the curve that is *just met or exceeded* by the measured spectrum.

---

**Question 3:** What is a key advantage of PNC curves over NC curves?
**(CO3 - K2)**

**Answer:** A key advantage of PNC curves over NC curves is their better correlation with perceived annoyance and their consideration for speech intelligibility.

---

**Question 4:** In which type of environment would NCB curves typically be more appropriate than NC or PNC curves?
**(CO3 - K2)**

**Answer:** NCB curves would typically be more appropriate in environments where the quality of the sound experience is critical, such as concert halls, auditoriums, or recording studios, where spectral balance and the perception of subtle acoustic attributes are important.

---

**Question 5:** Explain the concept of "phon" briefly.
**(CO1 - K2)**

**Answer:** A phon is a unit of perceived loudness. It represents the sound pressure level of a 1000 Hz pure tone that is perceived to be as loud as the sound in question. Equal loudness contours are plotted in phons.

---

### 7. Important Points to Remember

*   **Subjectivity of Loudness:** Human perception of loudness is not linear with sound pressure level and varies with frequency.
*   **NC, PNC, NCB are Tools:** These curves are tools for *rating* noise and specifying *criteria* for acceptable background noise levels. They are not directly measuring physical sound power.
*   **Octave Band Analysis:** All these criteria are fundamentally based on octave band or one-third octave band sound pressure level measurements.
*   **Context is Crucial:** The appropriate choice of NC, PNC, or NCB curve depends heavily on the specific application, the intended use of the space, and the desired acoustic qualities.
*   **Evolution of Standards:** There is an evolution from NC to PNC and then towards more nuanced criteria like NCB, reflecting a deeper understanding of psychoacoustics.
*   **Limitations:** These criteria are primarily for steady-state background noise and may not be ideal for impulsive sounds, impact noise, or highly tonal noise without further analysis or different metrics.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
