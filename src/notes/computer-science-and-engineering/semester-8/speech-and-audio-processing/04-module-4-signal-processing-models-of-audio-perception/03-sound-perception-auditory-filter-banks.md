---
title: "Sound perception -  Auditory Filter Banks"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 4: Signal Processing models of audio perception "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca6a"
status: "completed"
scrapedAt: "2026-05-20T17:27:07.430Z"
---
# SPEECH AND AUDIO PROCESSING

## Module 4: Signal Processing Models of Audio Perception

### Topic: Sound Perception - Auditory Filter Banks

---

This module delves into how humans perceive sound by examining signal processing models that mimic the human auditory system. Specifically, this topic focuses on **Auditory Filter Banks**, which are fundamental to understanding how our ears analyze the complex spectrum of incoming sound.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Understand the concept of auditory filtering:** Explain why the auditory system needs to filter sounds and the fundamental principles behind this process.
*   **Describe the role of the cochlea in frequency analysis:** Detail how the physical structure of the cochlea enables it to perform spectral decomposition.
*   **Explain the concept of Critical Bands:** Define critical bands, their significance in psychoacoustics, and how they relate to frequency resolution.
*   **Discuss the relationship between Critical Bands and filter bandwidth:** Explore how critical band widths inform the design of auditory filter models.
*   **Describe common signal processing models of auditory filter banks:** Introduce and explain various models used to simulate the filtering behavior of the auditory system.
*   **Apply auditory filter bank concepts to signal processing tasks:** Understand how these models are used in speech and audio processing applications.

---

### 1. Understanding the Concept of Auditory Filtering

The human auditory system is not a simple microphone. It actively processes incoming sound, breaking it down into its constituent frequencies and analyzing their intensities. This process of **auditory filtering** is crucial for:

*   **Frequency Separation:** Distinguishing between different musical notes, speech phonemes, and environmental sounds.
*   **Noise Reduction:** Ignoring irrelevant or masking sounds to focus on desired ones.
*   **Perceptual Grouping:** Combining sounds that belong together into a coherent auditory scene.
*   **Pitch Perception:** Our ability to perceive the fundamental frequency of a complex sound.
*   **Timbre Perception:** Our ability to distinguish between different instruments or voices playing the same note.

**Key Concept: Spectral Decomposition**

At its core, auditory filtering is about **spectral decomposition** – breaking down a complex sound (which is a combination of many frequencies) into its individual frequency components and their respective strengths (amplitudes).

---

### 2. The Role of the Cochlea in Frequency Analysis

The **cochlea**, located in the inner ear, is the primary organ responsible for the initial spectral analysis of sound. It acts as a mechanical frequency analyzer.

**Structure of the Cochlea:**

*   **Tympanic Membrane (Eardrum):** Receives sound waves and vibrates.
*   **Ossicles (Malleus, Incus, Stapes):** Amplify and transmit vibrations from the eardrum to the oval window.
*   **Oval Window:** A membrane-covered opening into the cochlea.
*   **Cochlear Fluid:** The cochlea is filled with fluid.
*   **Basilar Membrane:** A flexible membrane that runs along the length of the cochlea. It is narrow and stiff at the base (near the oval window) and wider and more flexible at the apex.
*   **Organ of Corti:** Located on the basilar membrane, this contains hair cells (auditory receptors) that convert mechanical vibrations into electrical signals.

**Mechanism of Frequency Analysis (Place Theory):**

The **place theory of hearing** explains how the cochlea performs frequency analysis based on the physical properties of the basilar membrane:

*   **High Frequencies:** Cause maximum vibration of the basilar membrane at its **base** (near the oval window), where it is narrow and stiff.
*   **Low Frequencies:** Cause maximum vibration of the basilar membrane at its **apex** (at the far end), where it is wide and flexible.
*   **Intermediate Frequencies:** Cause maximum vibration at points in between, corresponding to the membrane's stiffness and width.

This means that different **spatial locations** along the basilar membrane are maximally sensitive to different **frequencies**. This is the foundation of our ability to distinguish between tones of different pitches.

**Analogy:** Imagine a piano. Each key corresponds to a different frequency. The cochlea, in a way, "plays" the different frequencies of a complex sound on its basilar membrane, with different parts vibrating more strongly for different frequencies.

---

### 3. The Concept of Critical Bands

While the cochlea provides a physical basis for frequency separation, our **perceptual resolution** of frequencies is not perfectly linear with physical frequency. Instead, our auditory system groups frequencies into perceptually relevant **critical bands**.

**Definition of Critical Bands:**

A **critical band** is a range of audible frequencies that are perceived as belonging together. Within a critical band, the loudness of a sound is relatively independent of the bandwidth, but as the bandwidth exceeds the critical band, the loudness increases. Similarly, the ability to distinguish between two pure tones degrades significantly when their frequency separation is smaller than a critical band.

**Significance of Critical Bands:**

*   **Psychoacoustic Measure:** Critical bands are a psychoacoustic measure of auditory resolution. They reflect how our auditory system *perceives* frequency separation, rather than just the physical separation.
*   **Masking:** Critical bands are crucial for understanding auditory masking. A masker sound at a certain frequency will mask (obscure) a weaker signal sound if the signal falls within the masker's critical band. The extent of masking depends on how close the signal is to the center of the masker's critical band and the signal's intensity relative to the masker.
*   **Perceptual Grouping:** Frequencies within the same critical band tend to be perceived as a single auditory event or source.

**How Critical Bands are Measured:**

Critical bands are typically measured using psychophysical experiments, such as:

*   **Masking Experiments:** Determining the bandwidth of noise that masks a pure tone at a given frequency.
*   **Two-Tone Discrimination:** Finding the minimum frequency separation required to distinguish between two pure tones.

**Formula for Critical Bands:**

The bandwidth of the critical bands is not constant across the audible spectrum. It increases with increasing frequency. A widely used approximation for the critical band width in Hz is **Zwicker's formula**:

$CB = 25 \text{ Hz} + \frac{\text{Frequency}}{1000}$

Or, more commonly:

$CB(f) = 25 + 75 (\frac{f}{1000})^{0.7}$ (This is a more refined version often used)

Where:
*   $CB$ is the critical band width in Hz.
*   $f$ is the frequency in Hz.

**Example:**

*   At 200 Hz: $CB(200) \approx 25 + 75 (\frac{200}{1000})^{0.7} \approx 25 + 75 (0.2)^{0.7} \approx 25 + 75 \times 0.315 \approx 25 + 23.6 = 48.6 \text{ Hz}$
*   At 1000 Hz: $CB(1000) \approx 25 + 75 (\frac{1000}{1000})^{0.7} \approx 25 + 75 \times 1 = 100 \text{ Hz}$
*   At 5000 Hz: $CB(5000) \approx 25 + 75 (\frac{5000}{1000})^{0.7} \approx 25 + 75 (5)^{0.7} \approx 25 + 75 \times 2.6 \approx 25 + 195 = 220 \text{ Hz}$

As you can see, critical bands get wider at higher frequencies.

**Important Point:** Critical bands are a measure of *perceptual* frequency resolution, not just physical separation.

---

### 4. Relationship Between Critical Bands and Filter Bandwidth

Auditory filter models aim to simulate the frequency analysis performed by the cochlea, and the concept of critical bands directly informs the design of these filters.

*   **Filter Bank Design:** Auditory filter banks are typically implemented as a series of bandpass filters, each centered at a specific frequency.
*   **Variable Bandwidth:** The key insight is that these filters should not have a constant bandwidth. Instead, their bandwidths should correspond to the critical band widths at their respective center frequencies.
*   **Logarithmic Spacing:** Since critical bands increase with frequency, the center frequencies of these filters are often spaced logarithmically (similar to the Bark scale or Mel scale, discussed later). This ensures that filters at higher frequencies are wider, reflecting the increased perceptual bandwidth.

**Why this relationship is important:**

Using filter bandwidths that match critical bands allows signal processing models to better predict and reproduce human auditory perception, particularly in tasks like:

*   **Loudness perception:** Loudness is related to the energy within a critical band.
*   **Masking prediction:** Understanding how sounds mask each other.
*   **Timbre analysis:** Capturing the spectral characteristics that define the "quality" of a sound.

---

### 5. Common Signal Processing Models of Auditory Filter Banks

Several models have been developed to simulate the spectral decomposition of the auditory system. These models often use filter banks with characteristics inspired by critical bands.

#### a) Equivalent Rectangular Bandwidth (ERB) Model

The **Equivalent Rectangular Bandwidth (ERB)** is another widely used measure of auditory filter bandwidth, closely related to critical bands. It defines the bandwidth of a hypothetical rectangular filter that would have the same area under its magnitude response as the actual auditory filter.

*   **ERB Formula:** A common formula for ERB is:
    $ERB(f) = 24.7 + 0.76 \times f$ (in Hz)
    Or a more commonly used version that is closer to critical bands at low frequencies:
    $ERB(f) = 21.4 \text{ Hz} + 0.74 \times f$ (in Hz)
    Where $f$ is the frequency in Hz.

*   **Implementation:** This model uses a bank of bandpass filters whose bandwidths are determined by the ERB at their respective center frequencies. The filters are often implemented using specific filter types like Gammatone filters.

#### b) Gammatone Filter Bank

**Gammatone filters** are a class of signal processing filters that have been found to closely mimic the frequency response of auditory filters in the cochlea.

*   **Characteristic Shape:** The impulse response of a Gammatone filter is the product of a gamma-shaped function and a cosine wave (or sinusoid). This results in a bandpass filter with a characteristic "damped oscillation" in the time domain and a specific frequency response.
*   **Bandwidth and Shape:** The bandwidth of a Gammatone filter is controlled by a parameter, often denoted by the "equivalent rectangular bandwidth" or a related parameter like the "equivalent rectangular bandwidth constant." The "Q-factor" (quality factor) of these filters, which is inversely proportional to the bandwidth, is higher at lower frequencies and decreases with increasing frequency, reflecting the behavior of auditory filters.
*   **Relationship to Critical Bands:** The parameters of Gammatone filters are often set so that their bandwidths closely match the critical band widths at different frequencies.

#### c) Mel Scale and Mel Filter Bank

The **Mel scale** is a perceptual scale of pitches judged by listeners to be equal in distance from one another. While not a direct measure of filter bandwidth, it describes how our perception of frequency intervals changes with absolute frequency.

*   **Non-linear Scale:** The Mel scale is non-linear, meaning that equal intervals on the Mel scale correspond to larger physical frequency differences at higher frequencies. This reflects the fact that our pitch discrimination becomes coarser at higher frequencies.
*   **Mel Scale Formula:** A common approximation is:
    $Mel(f) = 1127 \log_{10}(1 + \frac{f}{700})$
    Where $f$ is the frequency in Hz.

*   **Mel Filter Bank:** A Mel filter bank uses bandpass filters whose center frequencies are spaced according to the Mel scale. The bandwidths of these filters are also typically designed to be wider at higher frequencies, often proportional to the spacing on the Mel scale.
*   **Application:** Mel filter banks are very popular in speech recognition and audio feature extraction because they capture the perceptual relevance of spectral information.

**Summary of Models:**

| Model                  | Key Concept                                                                                                | Implementation                                                                         | Relationship to Auditory System                                                              |
| :--------------------- | :--------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| **ERB Model**          | Equivalent Rectangular Bandwidth, a measure of auditory filter width.                                      | Bandpass filters with bandwidths matching ERB at center frequencies.                 | Mimics the spectral resolution of the cochlea, with wider filters at higher frequencies.     |
| **Gammatone Filter**   | Filters with a specific impulse response (gamma function * sinusoid) that closely match cochlear filter shapes. | Bank of Gammatone filters with parameters set to match critical band behavior.         | Directly models the physiological response of auditory filters.                              |
| **Mel Filter Bank**    | Uses a perceptual frequency scale (Mel scale) to space filter centers and determine bandwidths.          | Bandpass filters spaced logarithmically on the Mel scale, with increasing bandwidths.  | Captures perceptual pitch differences and spectral grouping, widely used in speech processing. |

**Important Point:** All these models aim to capture the **non-uniform frequency resolution** of the human auditory system, where resolution is finer at low frequencies and coarser at high frequencies, as dictated by critical bands.

---

### 6. Applying Auditory Filter Bank Concepts to Signal Processing Tasks

Understanding auditory filter banks is not just theoretical; it has practical applications in various speech and audio processing tasks.

*   **Audio Compression (e.g., MP3):** Psychoacoustic models, which heavily rely on concepts like critical bands and masking, are used to determine which parts of the audio signal can be discarded or quantized more coarsely without significant perceptual loss. By understanding how frequencies interact within critical bands, encoders can efficiently remove perceptually irrelevant information.

*   **Speech Recognition:** Mel filter banks are a cornerstone of many speech recognition systems. They are used to extract **Mel-Frequency Cepstral Coefficients (MFCCs)**, which are robust features that represent the spectral envelope of speech sounds in a way that is perceptually relevant.

*   **Audio Feature Extraction:** Beyond speech, these filter banks are used for general audio analysis tasks like music information retrieval, sound event detection, and speaker recognition. They provide spectral representations that better align with human perception.

*   **Hearing Aid Design:** Understanding auditory filtering is crucial for designing hearing aids that can compensate for hearing loss effectively. They aim to shape the frequency response of amplified sound to match the user's perceived loudness and spectral resolution.

*   **Auditory Modeling and Simulation:** Researchers use these models to simulate listening experiments and to understand the complex interplay of auditory processes.

**Example: MFCC Extraction**

1.  **Framing:** The audio signal is divided into short, overlapping frames.
2.  **Windowing:** Each frame is multiplied by a window function (e.g., Hamming window).
3.  **Fast Fourier Transform (FFT):** The FFT converts each frame into its frequency spectrum.
4.  **Mel Filter Bank Application:** The power spectrum is passed through a bank of Mel-spaced triangular filters. The output of each filter is the sum of the squared magnitudes of the FFT coefficients within its band.
5.  **Logarithm:** The logarithm of the filter bank outputs is taken to compress the dynamic range.
6.  **Discrete Cosine Transform (DCT):** A DCT is applied to the log-Mel filter bank outputs to decorrelate the features, resulting in MFCCs.

---

### Practice Questions and Exercises

**Question 1:**
Explain the primary role of the cochlea in auditory processing. How does the physical structure of the basilar membrane contribute to frequency analysis?

**Question 2:**
Define "critical band" in the context of psychoacoustics. Why are critical bands important for understanding auditory masking?

**Question 3:**
Describe the relationship between critical band widths and filter bandwidths in auditory filter bank models. Provide a simple formula (like Zwicker's or ERB) to illustrate how bandwidth changes with frequency.

**Question 4:**
Compare and contrast the ERB model and the Mel filter bank model. What are the key differences in their approaches to modeling auditory filtering?

**Question 5:**
How are auditory filter banks applied in the context of audio compression (e.g., MP3)?

---

### Answers to Practice Questions

**Answer 1:**
The cochlea is responsible for the initial spectral decomposition of sound. It acts as a mechanical frequency analyzer. The basilar membrane, which varies in stiffness and width along its length, vibrates maximally at different locations depending on the frequency of the incoming sound. High frequencies cause maximum vibration at the stiff, narrow base, while low frequencies cause maximum vibration at the flexible, wide apex. This spatial mapping of frequency onto the basilar membrane is the basis for our ability to distinguish pitches.

**Answer 2:**
A critical band is a range of audible frequencies that are perceived as belonging together. Within a critical band, the loudness of a sound is relatively stable, but it increases as the bandwidth exceeds the critical band. Critical bands are important for auditory masking because a sound within a given frequency range will effectively mask other sounds that fall within its critical band. The wider the critical band, the greater the masking effect.

**Answer 3:**
In auditory filter bank models, the bandwidth of each bandpass filter is designed to correspond to the critical band width at its center frequency. This means that the filters are narrower at lower frequencies and wider at higher frequencies, mirroring the non-uniform frequency resolution of the human auditory system.

A simple illustration of this is through the ERB formula: $ERB(f) = 21.4 \text{ Hz} + 0.74 \times f$. This shows that the ERB (and thus the filter bandwidth) increases linearly with frequency.

**Answer 4:**
*   **ERB Model:** Focuses on the equivalent rectangular bandwidth as a measure of auditory filter width, aiming to replicate the spectral resolution. The filters are designed to have bandwidths matching the ERB at their respective center frequencies.
*   **Mel Filter Bank:** Uses the perceptually motivated Mel scale to space the center frequencies of the filters. The bandwidths are also designed to be wider at higher frequencies, often in proportion to the spacing on the Mel scale. This model is particularly effective in capturing perceptual pitch differences and is widely used in speech processing.

Both models aim to capture the non-uniform frequency resolution of hearing, but the Mel scale model more directly incorporates a perceptual frequency scale.

**Answer 5:**
In audio compression algorithms like MP3, auditory filter banks and psychoacoustic models based on critical bands are used to identify and discard audio information that is likely to be inaudible or perceptually irrelevant. For example:
1.  The audio signal is transformed into the frequency domain.
2.  Psychoacoustic models determine the "masking threshold" for different frequency bands, often defined by critical bands. A loud sound in one frequency band can mask quieter sounds in nearby frequency bands (within the same critical band).
3.  Based on these masking thresholds, the algorithm quantifies the frequency components. Components below the masking threshold can be quantized more coarsely or discarded entirely, reducing the data rate without significant perceptual degradation.

---

### Important Points to Remember:

*   **Auditory filtering is a fundamental process** for our ability to perceive and interpret sound.
*   The **cochlea's basilar membrane** provides a physical basis for frequency analysis through its tonotopic organization.
*   **Critical bands** represent the perceptual frequency resolution of the auditory system, not just physical bandwidth. They increase with frequency.
*   Auditory filter bank models (e.g., ERB, Gammatone, Mel) aim to **mimic this non-uniform spectral analysis** by using filters with varying bandwidths.
*   These models are crucial for **applications like audio compression, speech recognition, and hearing aid design**, as they align signal processing with human perception.
*   **Mel-Frequency Cepstral Coefficients (MFCCs)** are a key application of Mel filter banks in speech processing.

---
