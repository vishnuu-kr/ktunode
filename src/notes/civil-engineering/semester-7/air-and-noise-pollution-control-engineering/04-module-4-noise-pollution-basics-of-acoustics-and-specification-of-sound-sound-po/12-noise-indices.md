---
title: "Noise indices"
subject: "AIR AND NOISE POLLUTION CONTROL ENGINEERING"
module: "Module 4: Noise pollution: Basics of acoustics and specification of sound; sound power"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba811691"
status: "completed"
scrapedAt: "2026-05-20T18:57:27.871Z"
---
# AIR AND NOISE POLLUTION CONTROL ENGINEERING - Module 4: Noise Pollution

## Topic: Noise Indices

### Learning Outcomes:

Upon successful completion of this topic, students will be able to:

*   Understand the necessity of noise indices for quantifying and comparing noise levels.
*   Define and explain the concept of equivalent continuous sound level ($L_{eq}$).
*   Explain the meaning and application of single-number rating systems for noise.
*   Understand the concept of loudness and its measurement.
*   Explain the importance of frequency analysis and octave band analysis.
*   Describe various noise rating curves and their significance.
*   Understand the concept of sound exposure level ($L_{AE}$) and its calculation.
*   Explain the concept of day-night average sound level ($L_{dn}$) and its use in environmental noise assessment.
*   Discuss the concept of peak sound pressure level ($L_{peak}$).
*   Understand the concept of sound exposure (SE) and its units.
*   Explain the limitations and appropriate applications of different noise indices.

---

### 1. Introduction to Noise Indices

**Why do we need Noise Indices?**

*   **Quantifying Noise:** Sound is a complex phenomenon. Simply stating a sound pressure level (e.g., 80 dB) doesn't tell the whole story about its impact. Noise indices provide a standardized way to measure and quantify the "annoyance" or "damage potential" of noise.
*   **Comparing Noise Levels:** Different noise sources (traffic, industry, construction) have varying sound characteristics (intensity, frequency, duration). Indices allow for a fair comparison of these different noise sources.
*   **Regulatory Standards:** Governments and regulatory bodies use noise indices to set acceptable noise limits and assess compliance.
*   **Health and Environmental Impact Assessment:** Indices help in evaluating the potential health effects of noise exposure on humans and its impact on the environment.

**Key Concept:** Noise indices are single-number or multi-number metrics used to describe the characteristics of sound in a way that relates to its subjective perception, potential for hearing damage, or environmental impact.

---

### 2. Equivalent Continuous Sound Level ($L_{eq}$)

**Definition:** $L_{eq}$ is the equivalent steady sound level that would produce the same sound energy over a given period as the actual fluctuating sound. It is essentially the root-mean-square (RMS) average of the sound pressure level over time, expressed in decibels.

**Formula:**
$L_{eq} = 10 \log_{10} \left( \frac{1}{T} \int_{0}^{T} \frac{p^2(t)}{p_{ref}^2} dt \right)$ dB

Where:
*   $T$ is the time period of observation.
*   $p(t)$ is the instantaneous sound pressure at time $t$.
*   $p_{ref}$ is the reference sound pressure ($20 \mu Pa$).

**Explanation:**
*   It averages out the fluctuations in noise over a defined period (e.g., 1 hour, 24 hours).
*   A higher $L_{eq}$ indicates a greater overall sound energy exposure.
*   It is widely used for environmental noise monitoring, especially for traffic noise, industrial noise, and community noise.

**Example:**
Imagine a noise level that is 70 dB for 1 hour and 80 dB for the next hour. A simple average (75 dB) would be misleading. $L_{eq}$ would account for the energy difference. If the noise fluctuates between 70 dB and 90 dB over an hour, $L_{eq}$ will provide a single value representing the overall noise energy over that hour.

**Important Point to Remember:** $L_{eq}$ is a measure of *energy* averaged over time, not a simple arithmetic average of decibel values.

---

### 3. Single-Number Rating Systems for Noise

**Purpose:** To simplify the complex nature of noise into a single, understandable number that can be easily used for regulation, comparison, and assessment.

**Types of Single-Number Ratings:**

*   **Sound Level ($L$):** This usually refers to the A-weighted sound pressure level ($L_A$) measured at a specific time. It's a snapshot of the noise.
    *   **$L_{A}$: A-weighted Sound Pressure Level:** This is the most common form of single-number rating. The 'A-weighting' filter approximates the human ear's sensitivity to different frequencies at moderate sound levels. Lower frequencies are attenuated, while mid-range frequencies are emphasized, reflecting how humans perceive loudness.

*   **Equivalent Continuous Sound Level ($L_{eq}$):** (As discussed above) Often used with a specific time weighting (e.g., $L_{eq, 1h}$ for one hour, $L_{eq, 24h}$ for 24 hours).

*   **Loudness Level ($L_N$, denoted by Sones):** While not a single-number *index* in the same way as decibels, loudness is a perceptual attribute. It's often related to decibels through psychoacoustic models. A loudness level of 40 phons is subjectively perceived as twice as loud as 30 phons. However, the relationship between phons and decibels is not linear. The *sone* is a unit of loudness, where 1 sone is the loudness of a 40-phon tone. Doubling the sone value means the sound is perceived as twice as loud.

**Example:**
*   A construction site might be regulated with an $L_{Aeq, 1h}$ limit of 85 dB.
*   Residential areas might have a $L_{Aeq, 24h}$ limit of 55 dB.

**Important Point to Remember:** A-weighting is crucial for assessing human annoyance and hearing damage potential.

---

### 4. Loudness and its Measurement (Brief Overview)

**Loudness:** A subjective attribute of auditory sensation by which sounds may be ordered by the amount of 'ear-protective' response they produce. It's what we *hear* as loud.

**Units:**
*   **Phon:** A unit of loudness level. A sound has a loudness level of $X$ phons if it is perceived as equally loud as a pure 1000 Hz tone with a sound pressure level of $X$ dB.
*   **Sone:** A unit of loudness. The loudness in sones is related to loudness level in phons by an empirical formula. A 1-sone sound is defined as a 40-phon tone. Loudness roughly doubles for every 10 phons increase.

**Relevance to Noise Indices:** While not always directly calculated in routine noise monitoring, the concept of loudness underpins the development of A-weighting and other psychoacoustic metrics used to assess the *annoyance* of noise.

**Example:** A 100 Hz tone at 80 dB might be perceived as less loud than a 1000 Hz tone at 80 dB due to the human ear's frequency response. A-weighting attempts to account for this.

**Important Point to Remember:** Loudness is subjective; decibel scales (like $L_A$) are attempts to quantify this subjective experience.

---

### 5. Frequency Analysis and Octave Band Analysis

**Why Frequency Analysis?**
*   **Identifying Noise Sources:** Different machines and activities produce noise with distinct frequency characteristics. Analyzing the frequency content helps pinpoint the source of the noise.
*   **Noise Control Strategies:** Knowing the dominant frequencies allows engineers to select appropriate noise control measures (e.g., specific silencers, acoustic treatments).
*   **Health Effects:** Some frequencies can be more damaging to hearing than others.

**Octave Band Analysis:**
*   A common method for frequency analysis.
*   Divides the audible frequency spectrum into bands, each with a bandwidth equal to its center frequency.
*   **Center Frequencies:** Standardized center frequencies are used (e.g., 63 Hz, 125 Hz, 250 Hz, 500 Hz, 1 kHz, 2 kHz, 4 kHz, 8 kHz).
*   **Bandwidth:** The bandwidth of an octave band is approximately the center frequency. For example, the 1 kHz octave band typically covers the range from 707 Hz to 1414 Hz.
*   **Third-Octave Band Analysis:** Provides finer frequency resolution, dividing the spectrum into narrower bands.

**Output:** The result is a set of sound pressure levels for each octave band, often plotted as an "octave band spectrum."

**Example:**
*   A fan might have peak noise levels in the higher frequency octave bands (e.g., 1 kHz, 2 kHz).
*   A low-frequency rumble from machinery might show high levels in the 63 Hz or 125 Hz bands.

**Important Point to Remember:** Frequency analysis is essential for diagnosing noise problems and designing effective control measures.

---

### 6. Noise Rating Curves (NRC and PNC)

**Purpose:** To provide a graphical method for assessing the acceptability of noise in a given environment, particularly for steady-state noise. They establish criteria for acceptable indoor noise levels based on perceived loudness and speech interference.

**Noise Criterion (NC) Curves:**
*   Developed by the Acoustical Society of America (ASA).
*   Used primarily for rating noise in **offices, schools, and other indoor environments**.
*   A noise spectrum is plotted on a graph with frequency (Hz) on the x-axis and octave band sound pressure levels (dB) on the y-axis.
*   The noise is assigned an **NC rating** equal to the highest NC curve that the noise spectrum **does not exceed**.
*   Lower NC values indicate quieter environments and are preferred for activities requiring concentration and clear speech.

**Preferred Noise Criterion (PNC) Curves:**
*   A more recent revision of NC curves, updated to reflect current understanding of acoustics and speech intelligibility.
*   PNC curves are generally set 5-10 dB lower than NC curves for similar applications.

**Example:**
*   A quiet library might have an NC rating of NC-30 to NC-35.
*   A typical office might be NC-40 to NC-50.
*   A factory floor would have a much higher NC rating.

**Use of NC/PNC Curves:**
1.  Measure octave band sound pressure levels of the noise.
2.  Plot these levels on a standard NC chart.
3.  Determine the highest NC curve that the plotted spectrum does not exceed.

**Important Point to Remember:** NC/PNC curves are for assessing the *acceptability* of noise in specific indoor environments based on its frequency content.

---

### 7. Sound Exposure Level ($L_{AE}$)

**Definition:** $L_{AE}$ is the single-event sound exposure level for a specified event, normalized to a reference duration of 1 second. It represents the total acoustic energy of a single noise event.

**Formula:**
$L_{AE} = 10 \log_{10} \left( \frac{1 \text{ s}}{1 \text{ s}} \int_{t_1}^{t_2} \frac{p^2(t)}{p_{ref}^2} dt \right)$ dB

Where:
*   $t_1$ and $t_2$ are the start and end times of the noise event.
*   The integration time is normalized to 1 second.

**Explanation:**
*   It's useful for characterizing the noise from individual, distinct events (e.g., an aircraft flyover, a truck passing, a single impact).
*   It accounts for both the intensity and the duration of the event. A louder but shorter event can have the same $L_{AE}$ as a quieter but longer event.

**Relationship to $L_{eq}$:**
$L_{AE}$ can be used to calculate $L_{eq}$ over a period:
$L_{eq} = 10 \log_{10} \left( \frac{1}{T_{total}} \sum_{i=1}^{N} 10^{L_{AE,i}/10} \right)$ dB

Where:
*   $T_{total}$ is the total observation time.
*   $N$ is the number of events.
*   $L_{AE,i}$ is the sound exposure level of the $i$-th event.

**Example:**
*   A single aircraft flyover might have an $L_{AE}$ of 95 dB.
*   If there are 10 such flyovers in an hour, and no other noise, the $L_{eq, 1h}$ from these flyovers would be calculated using their $L_{AE}$ values.

**Important Point to Remember:** $L_{AE}$ is for single events; it's the total acoustic energy of one occurrence.

---

### 8. Day-Night Average Sound Level ($L_{dn}$)

**Definition:** $L_{dn}$ is a 24-hour average sound level that accounts for the increased annoyance of noise during nighttime hours. It is calculated by adding a 10 dB penalty to all sound levels measured between 10 PM and 7 AM.

**Formula:**
$L_{dn} = 10 \log_{10} \left( \frac{1}{24 \text{ hr}} \left[ \int_{7 \text{ AM}}^{10 \text{ PM}} 10^{L_A(t)/10} dt + \sum_{\text{night}} 10^{(L_A(t) + 10)/10} dt \right] \right)$ dB

Where:
*   $L_A(t)$ is the A-weighted sound pressure level at time $t$.

**Explanation:**
*   It's widely used for assessing environmental noise, particularly around airports and for urban planning.
*   The 10 dB penalty reflects the fact that people are generally more sensitive to noise at night due to sleep disturbances and increased quiet.

**Example:**
*   If the average sound level during the day (7 AM to 10 PM) is 60 dB, and the average sound level at night (10 PM to 7 AM) is 50 dB.
*   The night contribution to $L_{dn}$ would be effectively 60 dB (50 dB + 10 dB penalty).
*   The $L_{dn}$ would then be calculated based on these weighted contributions over 24 hours.

**Important Point to Remember:** $L_{dn}$ is a 24-hour average that weights nighttime noise more heavily.

---

### 9. Peak Sound Pressure Level ($L_{peak}$)

**Definition:** $L_{peak}$ is the absolute maximum instantaneous sound pressure measured during a specified period, regardless of frequency weighting. It represents the highest pressure fluctuation encountered.

**Measurement:**
*   Measured using a sound level meter with a 'peak' or 'impulse' setting.
*   The timescale for measurement is very short (typically milliseconds).
*   Often uses a C-weighting or Z-weighting (unweighted) frequency response.

**Explanation:**
*   It is used to characterize impact noise or very short-duration impulsive sounds.
*   It can be indicative of potential damage to hearing structures, especially for very high peak pressures.
*   It is often used in conjunction with other indices like $L_{eq}$ or $L_{AE}$.

**Example:**
*   A hammer striking metal could produce a very high $L_{peak}$ value.
*   The firing of a gun.
*   The sound of a door slamming.

**Important Point to Remember:** $L_{peak}$ captures the absolute highest pressure variation, not the average energy. It's important for impulsive sounds.

---

### 10. Sound Exposure (SE)

**Definition:** Sound Exposure (SE) is the time integral of the squared instantaneous sound pressure over a specified time interval. It is a measure of the total acoustic energy received.

**Units:** Typically expressed in Pascal-squared seconds ($Pa^2 \cdot s$).

**Relationship to $L_{AE}$:**
The Sound Exposure Level ($L_{AE}$) is derived from Sound Exposure (SE):
$L_{AE} = 10 \log_{10} \left( \frac{SE}{p_{ref}^2 \cdot T_{ref}} \right)$ dB

Where:
*   $SE$ is the sound exposure.
*   $p_{ref}$ is the reference pressure (20 $\mu Pa$).
*   $T_{ref}$ is the reference time (1 second).

**Explanation:**
*   SE is the fundamental physical quantity representing acoustic energy over time.
*   $L_{AE}$ is a logarithmic, dB-scaled representation of SE, normalized to 1 second.

**Example:**
*   A short burst of sound with a high peak pressure might have a significant SE.
*   A continuous, moderate sound might have a large SE due to its duration, even if its peak pressure is lower than the burst.

**Important Point to Remember:** SE is the direct measure of acoustic energy; $L_{AE}$ is its dB-scaled, time-normalized representation.

---

### 11. Limitations and Appropriate Applications of Different Noise Indices

| Noise Index        | Description                                                          | Appropriate Application                                                                           | Limitations                                                                                               |
| :----------------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| $L_A$              | Instantaneous A-weighted sound pressure level                        | Quick checks, indicating immediate loudness, comparisons of specific moments.                     | Does not account for duration or fluctuations, poor for assessing annoyance over time.                    |
| $L_{eq}$           | Equivalent continuous A-weighted sound level (time-averaged energy)  | Environmental noise (traffic, industry), community noise assessment, regulatory compliance.       | Doesn't capture peak events or sudden changes in noise, can mask variations that cause annoyance.         |
| $L_{AE}$           | Single-event sound exposure level (energy of one event)              | Aircraft noise, impact noise, transient sources.                                                  | Only for individual events; needs to be combined to get average levels for continuous exposure.         |
| $L_{dn}$           | Day-night average sound level (24-hr average with nighttime penalty) | Airport noise, urban planning, assessing overall community noise impact.                           | Can mask significant differences between day and night if the penalty is the only adjustment.             |
| $L_{peak}$         | Absolute peak instantaneous sound pressure                           | Impulsive noise, potential for hearing damage from sharp impacts.                                 | Does not reflect overall energy or annoyance, only the highest transient pressure.                      |
| NC/PNC Curves      | Noise criterion curves (frequency spectrum acceptability)            | Indoor noise assessment (offices, schools, hospitals), determining acceptable background noise.   | Primarily for steady-state noise, requires octave band measurements, less useful for fluctuating noise. |
| **Loudness (Phons/Sones)** | Subjective perception of loudness                                    | Psychoacoustic research, understanding human response to sound.                                  | Difficult to measure directly in the field; often inferred from dB levels and weighting.                |

**General Limitations of Indices:**

*   **Subjectivity of Annoyance:** Indices like $L_{eq}$ don't perfectly capture human annoyance, which can be influenced by factors like predictability, tonal components, and individual sensitivity.
*   **Single-Number Simplification:** While useful, single numbers can oversimplify complex noise situations.
*   **Context Dependency:** The "acceptability" of a noise level depends heavily on the context (time of day, activity, location).

**Important Point to Remember:** The choice of noise index is critical and depends on the specific noise source, the environment, and the intended assessment (e.g., health impact, regulatory compliance, comfort).

---

### Practice Questions and Exercises

**Question 1:**
What is the primary purpose of using noise indices in noise pollution control engineering?
a) To measure the exact frequency of all sounds.
b) To quantify and compare the impact of noise.
c) To determine the speed of sound.
d) To calculate the intensity of light.

**Question 2:**
Define $L_{eq}$ and explain why it is commonly used for measuring traffic noise.

**Question 3:**
What is the purpose of A-weighting, and why is $L_{Aeq}$ a preferred metric over an unweighted $L_{eq}$ for assessing human response to noise?

**Question 4:**
If a single aircraft flyover has an $L_{AE}$ of 100 dB, what is the approximate $L_{eq}$ for 10 such flyovers in an hour, assuming no other noise? (Hint: $10 \times 10^{100/10}$ gives the total energy.)
a) 100 dB
b) 110 dB
c) 105 dB
d) 90 dB

**Question 5:**
Explain the difference between $L_{peak}$ and $L_{eq}$. Give an example of a noise scenario where $L_{peak}$ would be a more important metric than $L_{eq}$.

**Question 6:**
What does a low NC rating (e.g., NC-25) typically indicate about an indoor environment?

**Question 7:**
Why is a 10 dB penalty added for nighttime noise when calculating $L_{dn}$?

**Question 8:**
If you are designing an acoustic treatment for a factory machine, why would octave band analysis be more useful than just knowing the overall $L_{Aeq}$?

---

### Answers to Practice Questions

**Answer 1:**
b) To quantify and compare the impact of noise.

**Answer 2:**
$L_{eq}$ (Equivalent Continuous Sound Level) is the equivalent steady sound level that would produce the same sound energy over a given period as the actual fluctuating sound. It's commonly used for traffic noise because traffic noise is highly variable, and $L_{eq}$ provides a single, representative value for the overall noise energy over a period, reflecting the total exposure.

**Answer 3:**
A-weighting approximates the frequency response of the human ear at moderate sound levels, emphasizing frequencies that humans perceive as louder. This makes $L_{Aeq}$ a more accurate reflection of the subjective loudness and potential for annoyance or hearing damage compared to an unweighted $L_{eq}$, which treats all frequencies equally.

**Answer 4:**
To calculate $L_{eq}$ from multiple $L_{AE}$ events:
Total energy contribution from 10 events = $10 \times 10^{L_{AE}/10}$
Total energy factor = $10 \times 10^{100/10} = 10 \times 10^{10} = 10^{11}$
$L_{eq} = 10 \log_{10} (\text{Total energy factor} / \text{Reference energy})$
Assuming reference energy for 1 second is $10^{0/10}=1$.
$L_{eq} = 10 \log_{10} (10^{11}) = 110$ dB.
The $L_{eq}$ for 10 flyovers in an hour is 110 dB.
The correct answer is **b) 110 dB**.

**Answer 5:**
*   **$L_{eq}$** is the average sound energy over a period, smoothing out fluctuations.
*   **$L_{peak}$** is the absolute maximum instantaneous sound pressure, capturing sudden, sharp bursts.

For a hammer striking metal, $L_{peak}$ would be a more important metric. The impact creates a very high, short-duration pressure spike, which can be damaging to the ear, even if the overall energy ($L_{eq}$) of the entire process (e.g., a few hammer strikes over a minute) is not extremely high. $L_{peak}$ directly measures the magnitude of this sharp impact.

**Answer 6:**
A low NC rating (e.g., NC-25) typically indicates a very quiet indoor environment. It suggests that the background noise levels are low across most octave bands and are unlikely to interfere with speech intelligibility or cause distraction for activities requiring concentration, such as in a recording studio, a library, or a high-quality conference room.

**Answer 7:**
The 10 dB penalty is added for nighttime noise when calculating $L_{dn}$ because human sensitivity to noise generally increases during the night. People are more likely to be disturbed by noise during sleep or rest periods. This penalty helps to account for the increased annoyance and potential disruption caused by noise at night compared to the same noise level during the day.

**Answer 8:**
Octave band analysis provides a breakdown of noise levels across different frequency ranges. For a factory machine, this is crucial because:
1.  **Source Identification:** Different parts of the machine or different operating mechanisms might produce noise at specific frequencies.
2.  **Control Strategies:** Acoustic treatments (e.g., mufflers, enclosures, sound-absorbing materials) are often designed to be most effective within particular frequency ranges. Knowing the octave band spectrum allows engineers to select the most appropriate and efficient control measures for the specific noise problem. For example, if most of the noise is in the high-frequency bands, specific high-frequency absorption materials would be recommended. If it's low-frequency rumble, different solutions are needed.

---
---
