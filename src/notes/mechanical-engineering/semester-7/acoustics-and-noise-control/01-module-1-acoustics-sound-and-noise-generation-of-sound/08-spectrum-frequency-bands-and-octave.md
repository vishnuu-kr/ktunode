---
title: "Spectrum, frequency bands and octave"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 1: Acoustics, sound and noise, generation of sound"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fd7"
status: "completed"
scrapedAt: "2026-05-20T18:09:27.816Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 1: Acoustics, Sound and Noise, Generation of Sound

### Topic: Spectrum, Frequency Bands and Octave

---

**Course Outcomes Addressed:**

*   **CO1:** To define various acoustic terminologies and understand the physics behind acoustic wave propagation (Knowledge Level: K2).
*   **CO2:** To analyse the transmission of sound through different media and tubes (Knowledge Level: K4) - *While this topic focuses on characterization, understanding the frequency content is crucial for analyzing transmission.*

**Learning Outcomes Covered:**

*   Understanding of spectrum, frequency bands, and octaves in the context of sound.
*   Ability to differentiate between various frequency bands and their significance.
*   Understanding the concept of an octave band and its measurement.

---

### 1. Introduction to Sound and its Frequency Content

Sound, in its simplest form, is a vibration that propagates as an acoustic wave, through a transmission medium such as a gas, liquid or solid. However, most real-world sounds are complex, consisting of a mixture of different frequencies and intensities. To understand and control sound, especially noise, we need to be able to analyze its frequency content.

**Key Concept:** **Spectrum**

*   The **spectrum** of a sound is a representation of its frequency content. It shows how the energy or intensity of the sound is distributed across different frequencies.
*   Think of it like a recipe for a sound – it tells you which "ingredients" (frequencies) are present and how much of each.

**Reference:**
*   **Ekinsler, Frey, Coppens, & Sanders (2000):** Emphasize that complex sounds can be decomposed into simpler sinusoidal components using techniques like Fourier analysis.

---

### 2. Frequency Components of Sound

Sound waves are often characterized by their **frequency**, which is the number of cycles per second, measured in Hertz (Hz).

*   **Low Frequencies:** Typically perceived as deep or bass sounds (e.g., thunder, a bass guitar).
*   **Mid Frequencies:** Common in speech and most musical instruments (e.g., human voice, piano mid-range).
*   **High Frequencies:** Perceived as sharp or treble sounds (e.g., a whistle, rustling leaves).

**Important Point to Remember:**
*   The human ear can typically hear sounds in the frequency range of approximately 20 Hz to 20,000 Hz (20 kHz). Sounds outside this range are infrasound (< 20 Hz) or ultrasound (> 20 kHz).

---

### 3. Frequency Bands: Analyzing Complex Sounds

Since real-world sounds are rarely pure tones (single frequencies), we often analyze them in **frequency bands**. This involves grouping frequencies into specific ranges.

**Key Concept:** **Frequency Band**

*   A **frequency band** is a continuous range of frequencies.
*   By dividing the audible spectrum into bands, we can understand the contribution of different frequency ranges to the overall sound.

**Why use frequency bands?**

*   **Simplification:** Makes complex spectral data more manageable.
*   **Perception:** Our hearing is not equally sensitive to all frequencies. Analyzing in bands can relate to how we perceive loudness.
*   **Noise Control:** Different noise sources often dominate in specific frequency bands. Identifying these bands is crucial for effective noise reduction.

---

### 4. Octave Bands: A Standardized Approach

One of the most common ways to categorize frequency bands is by using **octave bands**.

**Key Concept:** **Octave**

*   In acoustics, an **octave** represents a doubling of frequency.
*   If a sound has a frequency *f*, then a frequency twice that, *2f*, is one octave higher. Similarly, *f/2* is one octave lower.

**Example:**
*   If a band is centered around 100 Hz, the next octave higher band is centered around 200 Hz, and the one after that around 400 Hz.
*   The range from 100 Hz to 200 Hz is a 100 Hz band. The range from 200 Hz to 400 Hz is a 200 Hz band. Both are octave bands.

**Key Concept:** **Octave Band**

*   An **octave band** is a frequency band where the upper frequency limit is twice the lower frequency limit.
*   Mathematically, if the lower frequency limit is $f_1$ and the upper frequency limit is $f_2$, then for an octave band, $f_2 = 2f_1$.

**Reference:**
*   **Ver & Beranek (2006):** Explain that octave bands are widely used in noise measurement and analysis because they approximate the critical bands of human hearing.

---

### 5. Standard Octave Band Definitions

Octave bands are typically defined with respect to their **center frequency**. Standardized center frequencies are used for convenience in measurements and analysis.

**Commonly Used Octave Band Center Frequencies (Geometric Mean):**

The center frequency ($f_c$) of an octave band with lower limit $f_1$ and upper limit $f_2$ is the geometric mean: $f_c = \sqrt{f_1 \times f_2}$.
Since $f_2 = 2f_1$, then $f_c = \sqrt{f_1 \times 2f_1} = \sqrt{2f_1^2} = f_1\sqrt{2}$.
This means $f_1 = f_c / \sqrt{2}$ and $f_2 = f_c \times \sqrt{2}$.

| Standard Octave Band Center Frequency (Hz) | Lower Frequency Limit (Hz) ($f_1$) | Upper Frequency Limit (Hz) ($f_2$) | Bandwidth (Hz) ($f_2 - f_1$) |
| :----------------------------------------- | :--------------------------------- | :--------------------------------- | :--------------------------- |
| 31.5                                       | 22.1                               | 44.2                               | 22.1                         |
| 63                                         | 44.2                               | 88.4                               | 44.2                         |
| 125                                        | 88.4                               | 177                                | 88.4                         |
| 250                                        | 177                                | 354                                | 177                          |
| 500                                        | 354                                | 707                                | 354                          |
| 1000 (1 kHz)                               | 707                                | 1414                               | 707                          |
| 2000 (2 kHz)                               | 1414                               | 2828                               | 1414                         |
| 4000 (4 kHz)                               | 2828                               | 5656                               | 2828                         |
| 8000                                       | 5656                               | 11312                              | 5656                         |
| 16000                                      | 11312                              | 22624                              | 11312                        |

**Important Note:** The bandwidth of an octave band increases with frequency, as it's a fixed ratio (1:2) of the center frequency.

**Reference:**
*   **Crocker (2007):** Provides detailed tables and explanations of standard octave and fractional octave bands used in noise analysis.

---

### 6. Fractional Octave Bands

While octave bands are common, sometimes finer analysis is needed. This is achieved using **fractional octave bands**.

**Key Concept:** **Fractional Octave Band**

*   A **fractional octave band** divides an octave into a specified number of smaller bands.
*   The most common are **one-third octave bands** and **one-sixth octave bands**.

**One-Third Octave Bands:**

*   An octave is divided into three bands.
*   The ratio of the upper to lower frequency limit is $2^{1/3}$ (approximately 1.26).
*   Standard center frequencies for one-third octave bands are spaced by approximately the cube root of 2.

**Example (around 1 kHz):**
*   Center Frequencies: ..., 800 Hz, 1000 Hz, 1250 Hz, 1600 Hz, ...
*   Bandwidth for 1000 Hz one-third octave band: $1000 \times 2^{1/3} \approx 1260$ Hz (Upper), $1000 / 2^{1/3} \approx 794$ Hz (Lower). Bandwidth $\approx 466$ Hz.

**One-Sixth Octave Bands:**

*   An octave is divided into six bands.
*   The ratio of the upper to lower frequency limit is $2^{1/6}$ (approximately 1.122).
*   These provide even finer frequency resolution.

**Why use Fractional Octave Bands?**

*   **Finer Resolution:** To pinpoint the exact frequencies where noise is dominant, especially for specific machinery or acoustic phenomena.
*   **More Detail:** Provides a more detailed understanding of the sound spectrum.

**Reference:**
*   **Munjal (2013):** Discusses the advantages of using one-third octave bands for analyzing noise from specific sources like rotating machinery.
*   **Barron (2001):** Explains how fractional octave band analysis is applied in industrial noise control.

---

### 7. Applications in Acoustics and Noise Control

Understanding spectrum, frequency bands, and octaves is fundamental for:

*   **Noise Measurement:** Sound level meters often measure sound pressure levels in different octave or one-third octave bands.
*   **Source Identification:** Different machines and sound sources have characteristic frequency signatures. Analyzing the spectrum helps identify the source of noise.
*   **Noise Mitigation:** Strategies for noise reduction are often frequency-dependent. For example, a silencer designed for a specific engine might target its dominant noise frequencies.
*   **Acoustic Design:** Designing concert halls, studios, or workplaces requires understanding how sound behaves at different frequencies.
*   **Hearing Protection:** The effectiveness of hearing protection devices can vary with frequency.

**Example:**
If a factory machine is found to have high noise levels specifically in the 500 Hz octave band, engineers might focus on materials or treatments that are effective at dampening or blocking sound in that particular frequency range.

**Reference:**
*   **Lasithan (2014):** Illustrates how industrial noise control measures are tailored based on the frequency spectrum of the noise.

---

### 8. Practice Questions and Exercises

**Question 1:**
What is the definition of an octave in acoustics?
*   a) A doubling of amplitude
*   b) A doubling of sound pressure level
*   c) A doubling of frequency
*   d) A halving of frequency

**Answer:** c) A doubling of frequency

**Question 2:**
If a sound has a center frequency of 250 Hz, what are the approximate lower and upper frequency limits for its octave band?
*   a) 125 Hz and 500 Hz
*   b) 177 Hz and 354 Hz
*   c) 100 Hz and 200 Hz
*   d) 200 Hz and 400 Hz

**Answer:** b) 177 Hz and 354 Hz (using $f_c = 250$ Hz, $f_1 = 250 / \sqrt{2} \approx 176.78$, $f_2 = 250 \times \sqrt{2} \approx 353.55$)

**Question 3:**
Why are octave bands useful in noise analysis?
*   a) They provide the exact frequency of every sound.
*   b) They simplify complex sound spectra into manageable ranges and relate to human hearing.
*   c) They are the only way to measure sound.
*   d) They are always constant bandwidths.

**Answer:** b) They simplify complex sound spectra into manageable ranges and relate to human hearing.

**Question 4 (Conceptual):**
Explain why a one-third octave band analysis might be preferred over an octave band analysis for diagnosing the source of high-frequency noise from a specific piece of rotating equipment.

**Answer:** One-third octave band analysis provides finer frequency resolution. This allows for a more precise identification of the specific frequencies at which the rotating equipment is generating noise. Octave bands are broader and might obscure subtle but significant noise peaks at particular frequencies, which could be critical for pinpointing a fault or imbalance in the machinery.

**Question 5 (Calculation):**
What is the bandwidth of the octave band centered at 1000 Hz?

**Answer:**
The lower frequency limit ($f_1$) is $1000 / \sqrt{2} \approx 707.1$ Hz.
The upper frequency limit ($f_2$) is $1000 \times \sqrt{2} \approx 1414.2$ Hz.
Bandwidth = $f_2 - f_1 \approx 1414.2 - 707.1 = 707.1$ Hz.

---

### 9. Important Points to Remember

*   **Spectrum:** Represents the distribution of sound energy across frequencies.
*   **Octave:** A frequency range where the upper limit is twice the lower limit.
*   **Octave Bands:** Standardized frequency bands (e.g., 125 Hz octave band covers 88.4 Hz to 177 Hz).
*   **Fractional Octave Bands (e.g., 1/3 octave):** Provide finer frequency resolution for detailed analysis.
*   **Center Frequency:** Often used to identify octave or fractional octave bands (e.g., 1 kHz octave band).
*   **Human Hearing:** Octave and 1/3 octave bands are often used because they approximate the way humans perceive loudness at different frequencies (critical bands).
*   **Noise Control:** Understanding the frequency spectrum of noise is crucial for designing effective noise reduction strategies.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
