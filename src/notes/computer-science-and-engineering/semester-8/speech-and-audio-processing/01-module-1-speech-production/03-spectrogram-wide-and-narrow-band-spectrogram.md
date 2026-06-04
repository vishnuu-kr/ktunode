---
title: "Spectrogram- Wide and narrow band spectrogram"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 1: Speech Production :"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca4c"
status: "completed"
scrapedAt: "2026-05-20T17:26:48.002Z"
---
# Speech and Audio Processing: Module 1 - Speech Production
## Topic: Spectrogram - Wide and Narrow Band Spectrogram

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the concept of a spectrogram and its purpose in speech analysis.
*   Differentiate between wide-band and narrow-band spectrograms.
*   Identify the characteristics of vowels and consonants on both types of spectrograms.
*   Relate the visual patterns on a spectrogram to the underlying acoustic phenomena of speech production.
*   Interpret basic speech signals by analyzing their spectrogram representations.

---

### 1. Introduction to Spectrograms

A **spectrogram** is a visual representation of the spectrum of frequencies of a signal as it varies with time. In the context of speech processing, it's an indispensable tool for analyzing the acoustic properties of spoken sounds.

**Key Concepts:**

*   **Time:** Typically represented on the horizontal axis (x-axis).
*   **Frequency:** Typically represented on the vertical axis (y-axis).
*   **Amplitude/Intensity:** Represented by the darkness or color intensity of the plotted points. Brighter or darker areas indicate higher energy at a specific time and frequency.

**Purpose of Spectrograms in Speech Analysis:**

*   **Visualizing Sound:** Allows us to "see" the sound of speech.
*   **Identifying Phonemes:** Different speech sounds (phonemes) have distinct visual patterns on spectrograms.
*   **Analyzing Prosody:** Intonation, rhythm, and stress can be observed.
*   **Speech Synthesis and Recognition:** Crucial for building and evaluating speech technologies.
*   **Understanding Speech Production:** Provides insights into how the vocal tract shapes sound.

---

### 2. Types of Spectrograms: Wide-Band vs. Narrow-Band

The difference between wide-band and narrow-band spectrograms lies in the **frequency resolution** and **time resolution** they offer. This is determined by the **window size** used in the Short-Time Fourier Transform (STFT), the algorithm used to generate spectrograms.

#### 2.1. Wide-Band Spectrogram

*   **Window Size:** Uses a **short** analysis window (e.g., 5-25 ms).
*   **Frequency Resolution:** **Poor** frequency resolution. It averages spectral information over a wider range of frequencies.
*   **Time Resolution:** **Good** time resolution. It can pinpoint rapid changes in the signal.

**Visual Characteristics on a Wide-Band Spectrogram:**

*   **Harmonics:** Individual harmonics are **not clearly resolved**. Instead, you see broader bands of energy.
*   **Vocal Fold Vibrations (Glottal Pulses):** The vertical striations, called **"buzz"** or **"periodicity,"** are clearly visible. These represent the opening and closing of the vocal folds, occurring at the fundamental frequency ($f_0$). The spacing between these vertical lines directly reflects the fundamental period.
*   **Formants:** The resonant frequencies of the vocal tract, which are crucial for distinguishing vowels, are visible as **dark, horizontal bands**. These formants are the most prominent features.

**What it Reveals:**

*   **Voicing:** The presence of periodic vertical striations indicates voiced sounds.
*   **Vowel Formants:** The centers of the dark bands show the formant frequencies.
*   **Major Spectral Changes:** Good for seeing abrupt changes in the speech signal, like plosive releases or fricative noise.

**Example Use:** Identifying vowels by their formant patterns and the presence of voicing.

#### 2.2. Narrow-Band Spectrogram

*   **Window Size:** Uses a **long** analysis window (e.g., 25-100 ms).
*   **Frequency Resolution:** **Good** frequency resolution. It can distinguish closely spaced frequencies.
*   **Time Resolution:** **Poor** time resolution. It averages spectral information over a longer duration, blurring rapid changes.

**Visual Characteristics on a Narrow-Band Spectrogram:**

*   **Harmonics:** Individual **harmonics** of the fundamental frequency are clearly resolved as thin, horizontal lines.
*   **Vocal Fold Vibrations (Glottal Pulses):** The vertical striations are **not clearly visible** because the long window averages out the rapid glottal pulses.
*   **Formants:** Formants appear as **darker, broader bands** where multiple harmonics are amplified due to resonance. The *centers* of these bands still correspond to formant frequencies, but they are more diffuse than in wide-band spectrograms.

**What it Reveals:**

*   **Fundamental Frequency ($f_0$):** The spacing between the horizontal lines directly indicates the fundamental frequency. This is excellent for analyzing pitch.
*   **Harmonic Structure:** Shows how the harmonic content of the speech signal changes.
*   **Vocal Tract Resonances:** Formants are visible as regions of high energy where harmonics align.

**Example Use:** Analyzing pitch contours (intonation) and detailed spectral changes related to vowel articulation.

---

### 3. Spectrograms of Different Speech Sounds

Let's look at how vowels and consonants appear on both types of spectrograms.

#### 3.1. Vowels

Vowels are generally voiced sounds characterized by their distinct formant frequencies.

*   **Wide-Band Spectrogram:**
    *   Shows clear **vertical striations** (voicing).
    *   **Formants** appear as prominent, dark horizontal bands. The first three or four formants are typically visible.
    *   The position of these dark bands determines the vowel. For example, a low F1 (first formant) and a high F2 (second formant) are characteristic of /i/, while a high F1 and a low F2 are characteristic of /a/.

*   **Narrow-Band Spectrogram:**
    *   Shows individual **horizontal harmonics**.
    *   **Formants** are visible as regions where the density of harmonics is higher (darker bands).
    *   The spacing of harmonics can be used to estimate $f_0$.

**Example:**
*   **/i/ (as in "see"):** High F2, low F1. On a wide-band spectrogram, this would show two prominent dark bands relatively far apart vertically at the bottom, with the lower band being narrower.
*   **/a/ (as in "father"):** Low F2, high F1. On a wide-band spectrogram, this would show two prominent dark bands relatively close together vertically at the bottom, with the lower band being wider.

#### 3.2. Consonants

Consonants are more diverse and can be voiced or voiceless.

*   **Plosives (Stops like /p/, /t/, /k/, /b/, /d/, /g/):**
    *   **Silent Gap/Voice Bar:** A period of little to no energy, especially for voiceless plosives. For voiced plosives, a "voice bar" (a low-frequency dark band corresponding to $f_0$) may be visible at the bottom of the spectrogram.
    *   **Burst:** A short, intense burst of noise. On wide-band spectrograms, this appears as a dense, vertical block of energy. On narrow-band spectrograms, it's a rapid spread of energy across many harmonics.
    *   **Voice Onset Time (VOT):** The time between the release of the burst and the onset of voicing for the following vowel. This is a crucial feature, especially for distinguishing voiced/voiceless pairs.
    *   **Aspiration:** A "hissing" sound after the burst, more prominent in voiceless plosives like /p/, /t/, /k/ at the beginning of words. This appears as a broad band of noise.

*   **Fricatives (/s/, /ʃ/, /f/, /θ/, /v/, /ð/, /z/, /ʒ/):**
    *   **Noise:** Characterized by a broad band of aperiodic noise, appearing as diffuse, speckled energy across a wide range of frequencies.
    *   **Place of Articulation:** Affects the distribution of energy. For example, /s/ has energy concentrated at higher frequencies, while /ʃ/ has energy spread over a wider range, including lower frequencies.
    *   **Voicing:** Voiced fricatives (/v/, /ð/, /z/, /ʒ/) will also show a voice bar at the bottom of the spectrogram.

*   **Nasals (/m/, /n/, /ŋ/):**
    *   **Voiced:** Will have voicing striations (wide-band) or harmonics (narrow-band).
    *   **Low Frequency Focus:** Tend to have more energy concentrated at lower frequencies due to the nasal cavity.
    *   **Formant Transitions:** Show characteristic formant transitions into and out of the nasal sound.

*   **Liquids (/l/, /r/):**
    *   **Voiced:** Will have voicing.
    *   **Complex Formant Structure:** Often show dynamic formant movements, especially F3 (third formant) for /r/.

---

### 4. Key Differences Summarized

| Feature             | Wide-Band Spectrogram                                  | Narrow-Band Spectrogram                                |
| :------------------ | :---------------------------------------------------- | :----------------------------------------------------- |
| **Window Size**     | Short (5-25 ms)                                       | Long (25-100 ms)                                       |
| **Time Resolution** | Good                                                  | Poor                                                   |
| **Frequency Resolution** | Poor                                                  | Good                                                   |
| **Harmonics**       | Not resolved; appear as broad bands                   | Resolved as thin horizontal lines                      |
| **Voicing**         | Clearly visible as vertical striations ("buzz")      | Not clearly visible; harmonics indicate voicing        |
| **Formants**        | Clearly visible as dark, horizontal bands             | Visible as regions of high harmonic density            |
| **Best for**        | Identifying vowels (formants), transitions, bursts    | Analyzing pitch ($f_0$), harmonic structure, slow changes |

---

### 5. Important Points to Remember

*   **Trade-off:** There's always a trade-off between time and frequency resolution. Improving one degrades the other.
*   **Window Function:** The shape of the analysis window (e.g., Hamming, Hanning) can influence the appearance of the spectrogram, especially the bandwidth of the formants.
*   **STFT:** Spectrograms are generated using the Short-Time Fourier Transform (STFT).
*   **Context Matters:** The interpretation of a spectrogram is always within the context of the spoken utterance and the speaker.
*   **Practice is Key:** Becoming proficient in reading spectrograms requires significant practice.

---

### 6. Practice Questions and Exercises

**Instructions:** For each question, consider what type of spectrogram would be most useful and why. Describe the expected visual features.

**Question 1:** You are analyzing a speech recording to determine the intonation pattern of a speaker. Which type of spectrogram would be more appropriate and why? Describe what features you would look for.

**Question 2:** You are tasked with identifying the specific vowel sounds (/i/, /a/, /u/) in a recording. Which type of spectrogram would you choose and what visual cues would you use to differentiate them?

**Question 3:** You observe a recording with clear, regularly spaced vertical striations at the bottom of the spectrum, with dark, broad bands appearing at different frequencies.
    a) What type of sound is likely being produced?
    b) What do the vertical striations represent?
    c) What do the dark, broad bands represent?

**Question 4:** You see a spectrogram with many thin, parallel horizontal lines. In certain regions, these lines become more densely packed, forming darker bands.
    a) What type of spectrogram are you likely looking at?
    b) What do the thin horizontal lines represent?
    c) What do the denser bands of lines represent?

**Question 5:** Describe the expected visual difference between the spectrograms of the words "pat" and "bat" at the beginning of the utterance. Focus on features related to the initial consonant.

---

### 7. Answers to Practice Questions

**Answer 1:**

*   **More Appropriate Spectrogram:** **Narrow-band spectrogram**.
*   **Reasoning:** A narrow-band spectrogram provides better frequency resolution, allowing for clear visualization of individual harmonics. The spacing between these harmonics directly reflects the fundamental frequency ($f_0$), which determines the pitch of the voice. Intonation is the variation of pitch over time.
*   **Features to Look For:** You would look for the overall pattern of the horizontal harmonic lines. Changes in the vertical spacing of these lines would indicate changes in $f_0$. A rising pitch would show the lines moving further apart (lower $f_0$ to higher $f_0$), and a falling pitch would show them moving closer together (higher $f_0$ to lower $f_0$).

**Answer 2:**

*   **Chosen Spectrogram:** **Wide-band spectrogram**.
*   **Reasoning:** Wide-band spectrograms offer better time resolution and clearly display formants as dark, horizontal bands. Formants are the primary acoustic cues for distinguishing vowels.
*   **Visual Cues:**
    *   **/i/ (as in "see"):** Expect two prominent dark bands. The first formant (F1, lowest band) will be at a relatively low frequency, and the second formant (F2, second band) will be at a relatively high frequency.
    *   **/a/ (as in "father"):** Expect two prominent dark bands. Both F1 and F2 will be at relatively lower frequencies compared to /i/, with F1 being higher than in /i/, and F2 also lower than in /i/.
    *   **/u/ (as in "too"):** Expect two prominent dark bands. F1 will be at a low frequency (similar to /i/), but F2 will be at a very low frequency (lower than both /i/ and /a/).

**Answer 3:**

*   a) This description strongly suggests a **voiced sound**, likely a **vowel**, and the spectrogram is most likely a **wide-band spectrogram**.
*   b) The vertical striations represent the **periodic vibration of the vocal folds** (glottal pulses). Each striation indicates the instance when the vocal folds open and close.
*   c) The dark, broad bands represent the **formants** of the vocal tract. These are the resonant frequencies of the vocal tract that are amplified, and their positions determine the perceived vowel quality.

**Answer 4:**

*   a) This description, with clear horizontal lines representing harmonics, points to a **narrow-band spectrogram**.
*   b) The thin horizontal lines represent the **individual harmonics** of the fundamental frequency ($f_0$).
*   c) The denser bands of lines represent the **formants**. Formants occur at frequencies where the vocal tract resonates, amplifying the harmonics of the source (vocal fold vibration) that fall near these resonance frequencies.

**Answer 5:**

*   **Expected Visual Difference:**
    *   **"Pat" (initial /p/):** At the beginning of the spectrogram for "pat," you would expect to see a **silent gap** or a period of very low energy. If it's at the beginning of a word, there might be a brief aspiration noise following the gap, appearing as fuzzy, widespread energy.
    *   **"Bat" (initial /b/):** At the beginning of the spectrogram for "bat," you would expect to see a **"voice bar"**. This is a low-frequency dark band at the bottom of the spectrogram, indicating the presence of vocal fold vibration (voicing) during the production of the stop consonant.

---
