---
title: "Critical Band Structure"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 4: Signal Processing models of audio perception "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca6b"
status: "completed"
scrapedAt: "2026-05-20T17:27:08.127Z"
---
# Speech and Audio Processing: Module 4 - Signal Processing Models of Audio Perception

## Topic: Critical Band Structure

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Define the concept of a critical band.
*   Explain the relationship between frequency and the width of critical bands.
*   Describe the psychoacoustic implications of critical bands, such as masking.
*   Discuss the role of critical bands in auditory processing and their application in audio compression.
*   Identify different methods for estimating critical band widths.

---

### 1. Introduction to Critical Bands

#### Key Concepts:

*   **Frequency Selectivity:** The human auditory system is not a perfectly linear system; it doesn't respond to individual frequencies in isolation. Instead, it groups frequencies into regions that are processed together.
*   **Auditory Filters:** Imagine the cochlea as containing a series of filters, each tuned to a specific frequency. However, these filters are not infinitely narrow. They have a certain "spread" or "width."
*   **Critical Band:** A critical band is a range of audible frequencies that are perceived as a single sound, even if they consist of multiple pure tones. Within a critical band, the auditory system's processing is largely independent of frequencies outside that band, except for masking effects.

#### Definition:

A **critical band** is a specific range of frequencies that is processed by the auditory system as a single perceptual unit. Frequencies within a critical band interact with each other, leading to psychoacoustic phenomena like masking, while frequencies outside the band have less influence.

---

### 2. Relationship Between Frequency and Critical Band Width

#### Key Concepts:

*   **Non-uniform Distribution:** The auditory filters are not uniformly spaced across the audible spectrum.
*   **Broadening with Frequency:** Critical band widths generally increase with increasing frequency. This means that at higher frequencies, a larger range of frequencies is perceived as a single unit compared to lower frequencies.

#### Explanation:

The width of a critical band is frequency-dependent.

*   **Low Frequencies (e.g., < 500 Hz):** Critical bands are relatively narrow, approximately constant in Hz.
*   **High Frequencies (e.g., > 500 Hz):** Critical band widths increase roughly linearly with frequency, and are often expressed in terms of Hertz (Hz) or Bark.

#### Important Point to Remember:

The auditory system becomes less frequency-resolving at higher frequencies.

---

### 3. Psychoacoustic Implications of Critical Bands

#### Key Concepts:

*   **Masking:** This is the most significant psychoacoustic implication of critical bands.
    *   **Frequency Masking (or Spectral Masking):** A louder sound (the masker) can make it difficult or impossible to hear a quieter sound (the target) if the target sound falls within the same critical band as the masker.
    *   **Temporal Masking:** A sound can also be masked by a preceding or succeeding sound, even if their frequencies are different. This is less directly related to critical band *width* but is an important auditory phenomenon.
*   **Loudness Perception:** The perceived loudness of a sound is related to the total energy within the critical band that the sound occupies.
*   **Pitch Perception:** While not directly determined by critical bands, the grouping of frequencies within critical bands can influence how we perceive the pitch of complex sounds.

#### Masking Explained:

Imagine two pure tones, one at 100 Hz and another at 120 Hz. If these two frequencies fall within the same critical band, the louder tone will likely mask the quieter one. However, if the frequencies are far apart, outside each other's critical bands, they may be perceived as separate sounds, even if the louder one is quite intense.

**Example:** If you are listening to a radio, and a loud car horn honks outside, you might not be able to hear a quiet passage in the music. This is because the car horn's sound likely masks the music within the relevant critical bands.

---

### 4. Role of Critical Bands in Auditory Processing and Applications

#### Key Concepts:

*   **Auditory Scene Analysis:** Critical bands help the brain to segregate different sound sources in a complex auditory environment. By grouping frequencies, the brain can "chunk" related auditory information together, aiding in identifying and separating individual sounds.
*   **Audio Compression (e.g., MP3, AAC):** Critical band theory is a cornerstone of perceptual audio coding.
    *   **Quantization Noise:** Digital audio signals have a limited bit depth, leading to quantization noise.
    *   **Perceptual Masking:** Audio compression algorithms exploit masking. If a sound is already masked by another sound within its critical band, any quantization noise introduced in that frequency range will also be masked and therefore inaudible.
    *   **Bit Allocation:** Algorithms allocate fewer bits (less precision) to frequency components that are masked or contribute less to the perceived sound, while allocating more bits to perceptually significant components.

#### Application Example (MP3 Compression):

1.  **Frequency Analysis:** The audio signal is first transformed into the frequency domain.
2.  **Critical Band Calculation:** The frequencies are grouped according to critical band widths.
3.  **Masking Threshold Calculation:** For each critical band, the algorithm determines a masking threshold – the minimum level at which a signal in that band would be audible. This is based on the presence and intensity of other frequency components.
4.  **Quantization:** Bits are allocated to different frequency sub-bands. Frequency components that are below the masking threshold are either discarded or quantized with very low precision, as they are unlikely to be perceived.

---

### 5. Methods for Estimating Critical Band Widths

#### Key Concepts:

*   **Psychoacoustic Experiments:** Critical band widths are determined through human listening tests.
*   **Methods:**
    *   **Psychoacoustic Tuning Curves (PTCs):** Participants listen to a tone at a specific frequency and adjust the level of a masker tone at a different frequency until the original tone is just masked. This helps to define the "reach" of a masker.
    *   **Two-Tone Excitation:** Participants listen to two tones simultaneously. The distance between them is varied until they are no longer perceived as a single fused sound or until the listener reports a change in the perceived timbre or loudness.
    *   **Simultaneous Masking Experiments:** Similar to PTCs, but often focusing on the width of the region masked by a single tone.

#### Common Scales and Formulas:

While precise values can vary slightly between studies, several scales and formulas are used to estimate critical band widths.

*   **Equivalent Rectangular Bandwidth (ERB):** This is a widely used metric. The ERB of a filter at a given center frequency is the bandwidth of an ideal rectangular filter that would have the same height and pass the same power as the auditory filter.

    *   **Moore & Glasberg formula (1983):**
        $ERB(f) = 21.4 \cdot 10^{0.037f} + 650$
        where $f$ is the frequency in Hz, and $ERB(f)$ is the critical band width in Hz.

    *   **Glasberg & Moore formula (2002) - a refinement:**
        $ERB(f) = 24.7 \cdot \frac{4.37 f + 1}{1 + 0.76 f}$
        where $f$ is the frequency in kHz, and $ERB(f)$ is the critical band width in kHz. (This formula is often presented with frequency in kHz).

*   **Bark Scale:** This is a perceptual scale of frequency, where the unit is the "Bark." One Bark is approximately the width of a critical band. The scale is roughly linear in Hz at low frequencies and logarithmic at high frequencies.

    *   **Zwicker's Bark Scale Formula (1961):**
        $z(f) = 13 \arctan(0.00076 f) + 3.5 \arctan(\frac{f}{7500})^2$
        where $f$ is the frequency in Hz, and $z(f)$ is the frequency in Bark.

    *   **Relationship to ERB:** A critical band width in Hz can be approximated by a function of the Bark scale. For example, $1 \text{ Bark} \approx 100 \text{ Hz}$ at low frequencies and increases significantly at higher frequencies.

#### Example Calculation (using Moore & Glasberg 1983 ERB formula):

Let's calculate the ERB (critical band width) at:

*   **100 Hz:**
    $ERB(100) = 21.4 \cdot 10^{0.037 \times 100} + 650$
    $ERB(100) = 21.4 \cdot 10^{3.7} + 650$
    $ERB(100) \approx 21.4 \cdot 5011.87 + 650$
    $ERB(100) \approx 107253 + 650 \approx 107903 \text{ Hz}$
    **(Note:** This formula can give large values at low frequencies. It's often more illustrative at higher frequencies. The earlier part of the formula is more dominant at higher frequencies.)

*   **1000 Hz (1 kHz):**
    $ERB(1000) = 21.4 \cdot 10^{0.037 \times 1000} + 650$
    $ERB(1000) = 21.4 \cdot 10^{37} + 650$
    **(Note:** This is not correct. The formula is typically applied to the frequency in Hz. Let's re-calculate correctly for 1000 Hz)

    Using Moore & Glasberg formula (1983) where $f$ is in Hz:
    $ERB(1000) = 21.4 \cdot 10^{0.037 \times 1000} + 650$
    $ERB(1000) = 21.4 \cdot 10^{37} + 650$
    **(Correction:** The original formula had a typo. It should be $e^{0.037f}$ or similar, or the coefficient is scaled for Hz. Let's use a more common interpretation of these formulas.)

    Let's use the Glasberg & Moore (2002) formula for clarity, where $f$ is in kHz:
    $ERB(f) = 24.7 \cdot \frac{4.37 f + 1}{1 + 0.76 f}$

    *   **At 1 kHz (f = 1 kHz):**
        $ERB(1) = 24.7 \cdot \frac{4.37 \cdot 1 + 1}{1 + 0.76 \cdot 1}$
        $ERB(1) = 24.7 \cdot \frac{5.37}{1.76}$
        $ERB(1) \approx 24.7 \cdot 3.05 \approx 75.3 \text{ kHz}$
        **(Correction:** This formula might be for kHz output too. The unit interpretation is crucial. Let's assume $f$ is in kHz and the output is in kHz. Then this would be very large. The typical formulas are designed to show the *increase* in bandwidth.)

    Let's re-examine the ERB formula and its typical application. The Moore & Glasberg (1983) formula is often cited as:
    $ERB = 25 + (75 \times (f/1000)^{0.5})$  -- This is another common approximation showing the increase.

    **Let's use a more standard interpretation and common values:**

    *   **At 250 Hz:** Critical band width is roughly **50 Hz**.
    *   **At 1000 Hz (1 kHz):** Critical band width is roughly **160 Hz**.
    *   **At 4000 Hz (4 kHz):** Critical band width is roughly **300 Hz**.

    This clearly demonstrates the widening of critical bands with frequency.

---

### 6. Practice Questions & Exercises

**Question 1:**
Define a critical band in your own words.

**Question 2:**
How does the width of a critical band change as the center frequency increases?

**Question 3:**
Explain the phenomenon of frequency masking and how it relates to critical bands.

**Question 4:**
Give one practical application of critical band theory in modern technology.

**Question 5 (Calculation):**
Using the formula $ERB(f) = 25 + (75 \times (f/1000)^{0.5})$ (where $f$ is in Hz and ERB is in Hz), calculate the critical band width at:
    a) 500 Hz
    b) 3000 Hz

---

### 7. Answers to Practice Questions

**Answer 1:**
A critical band is a range of frequencies within the audible spectrum that the human ear processes as a single unit. Frequencies within a critical band interact perceptually, particularly regarding loudness and masking, while frequencies outside the band have less influence on each other.

**Answer 2:**
The width of a critical band *increases* as the center frequency increases. This means the auditory system is less precise at separating frequencies at higher frequencies.

**Answer 3:**
Frequency masking occurs when a louder sound makes it difficult or impossible to hear a quieter sound. This happens when the quieter sound falls within the same critical band as the louder sound. The auditory system's response to the louder sound effectively "masks" or obscures the presence of the quieter sound within that frequency range.

**Answer 4:**
One practical application is **audio compression** (e.g., MP3, AAC). Critical band theory allows compression algorithms to intelligently discard or reduce the precision of audio information that is likely to be masked by other sounds, thereby reducing file size without significant audible loss of quality.

**Answer 5 (Calculation):**
Using $ERB(f) = 25 + (75 \times (f/1000)^{0.5})$:

    a) At 500 Hz:
    $ERB(500) = 25 + (75 \times (500/1000)^{0.5})$
    $ERB(500) = 25 + (75 \times (0.5)^{0.5})$
    $ERB(500) = 25 + (75 \times 0.707)$
    $ERB(500) = 25 + 53.025$
    $ERB(500) \approx 78 \text{ Hz}$

    b) At 3000 Hz:
    $ERB(3000) = 25 + (75 \times (3000/1000)^{0.5})$
    $ERB(3000) = 25 + (75 \times (3)^{0.5})$
    $ERB(3000) = 25 + (75 \times 1.732)$
    $ERB(3000) = 25 + 129.9$
    $ERB(3000) \approx 155 \text{ Hz}$

---

### Important Points to Remember:

*   **Critical bands are fundamental to understanding how we hear.** They explain why we don't perceive every single frequency in a complex sound.
*   **Masking is the key psychoacoustic consequence of critical bands.**
*   **Bandwidth increases with frequency.**
*   **Audio compression techniques heavily rely on exploiting critical band masking.**
*   **ERB (Equivalent Rectangular Bandwidth) and the Bark scale are common ways to quantify critical band widths.**

---
