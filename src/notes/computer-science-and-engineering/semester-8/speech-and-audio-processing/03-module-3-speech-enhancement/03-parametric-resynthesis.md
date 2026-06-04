---
title: "Parametric resynthesis"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 3: Speech Enhancement :"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca5d"
status: "completed"
scrapedAt: "2026-05-20T17:26:58.593Z"
---
# Speech and Audio Processing: Module 3 - Speech Enhancement: Parametric Resynthesis

## 1. Introduction to Parametric Resynthesis

### 1.1 What is Parametric Resynthesis?

Parametric resynthesis is a technique used in speech enhancement and speech synthesis that involves **modeling speech as a set of acoustic parameters** and then **reconstructing or modifying speech based on these parameters**. Instead of directly manipulating the raw audio waveform, we work with a higher-level representation of the speech signal.

### 1.2 Why Use Parametric Resynthesis for Speech Enhancement?

*   **Noise Reduction:** By extracting clean speech parameters from a noisy signal and then resynthesizing the speech, we can effectively remove or reduce the impact of noise.
*   **Speech Modification:** Allows for manipulation of various speech characteristics like pitch, speaking rate, and voice quality without needing to alter the entire waveform.
*   **Compact Representation:** Parametric representations are often more compact than raw audio, making them suitable for storage and transmission.
*   **Control:** Provides a higher degree of control over the synthesized speech compared to waveform manipulation.

### 1.3 Key Concepts

*   **Parametric Model:** A mathematical model that represents speech using a set of time-varying parameters.
*   **Parameter Extraction:** The process of analyzing a speech signal to derive these acoustic parameters.
*   **Speech Synthesizer/Vocoder:** A system that takes acoustic parameters as input and generates an audible speech signal.
*   **Inverse Filtering:** A technique used in some parametric models to remove the spectral envelope (formants) from the speech signal, leaving behind the glottal source.

## 2. Common Parametric Models for Speech

Parametric resynthesis relies on specific models that capture different aspects of speech production. The most common ones are:

### 2.1 Linear Predictive Coding (LPC)

*   **Core Idea:** LPC models the vocal tract as an all-pole filter. It assumes that the current speech sample can be predicted as a linear combination of past speech samples.
*   **Parameters:**
    *   **LPC Coefficients (a_k):** These coefficients describe the spectral envelope of the vocal tract. They are derived by minimizing the error between the predicted and actual speech samples.
    *   **Gain:** The amplitude of the excitation signal.
    *   **Excitation Signal:** This can be either:
        *   **Voiced Excitation:** A periodic pulse train representing the vibrations of the vocal folds. The **pitch period** is a key parameter here.
        *   **Unvoiced Excitation:** A random noise signal representing fricatives and unvoiced stops, where the vocal folds are not vibrating.
*   **How it works for enhancement:**
    1.  **Analyze:** Extract LPC coefficients, gain, and excitation type/pitch from the noisy speech.
    2.  **Enhance Parameters:** Noise often corrupts the LPC coefficients and the excitation signal. Techniques are applied to clean these parameters. For example, LPC coefficients might be smoothed or their bandwidth extended. The excitation signal can be classified more accurately.
    3.  **Resynthesize:** Use a LPC synthesizer (e.g., a filter driven by the enhanced excitation signal) to generate the clean speech.

*   **Example:** Imagine trying to resynthesize the vowel "ah". LPC would model the resonant frequencies (formants) of your vocal tract that produce that sound. If the recording is noisy, the LPC coefficients might be slightly off, or the excitation (your vocal cord vibration) might be masked. By extracting cleaner LPC coefficients and a clearer pitch from the noisy signal, you can then use an LPC synthesizer to produce a clearer "ah".

### 2.2 Frequency Domain Parametric Models (e.g., Filter Banks)

*   **Core Idea:** These models work by analyzing the speech signal in the frequency domain, often by dividing it into a series of frequency bands.
*   **Parameters:**
    *   **Magnitude/Energy in Frequency Bands:** The strength of the signal in different frequency ranges.
    *   **Spectral Tilt/Shape:** How the spectral energy varies across frequencies.
    *   **Harmonic Structure:** For voiced speech, the relative amplitudes of harmonics.
*   **How it works for enhancement:**
    1.  **Analyze:** The noisy speech is transformed into the frequency domain (e.g., using the Fast Fourier Transform - FFT). The signal is then divided into bands.
    2.  **Enhance Parameters:** Noise typically affects the magnitude of the spectral components. Techniques like spectral subtraction or Wiener filtering are applied to estimate cleaner spectral magnitudes.
    3.  **Resynthesize:** The modified spectral components are used to reconstruct the time-domain waveform, often using an inverse FFT.

*   **Example:** Think of a graphic equalizer. You can adjust the loudness of different frequency bands. Frequency domain parametric models are similar but more sophisticated. For enhancement, if a particular frequency band is dominated by noise, we can reduce its energy during resynthesis.

### 2.3 Source-Filter Models (Generalization)

*   **Core Idea:** Speech is viewed as the product of two main components:
    *   **Sound Source:** Represents the excitation of the vocal tract (e.g., glottal pulses for voiced speech, turbulent airflow for fricatives).
    *   **Vocal Tract Filter:** Represents the resonances and shaping of the sound by the vocal tract, nasal cavity, and lips.
*   **Parameters:**
    *   **Source Parameters:** Pitch period, glottal waveform characteristics, breathiness.
    *   **Filter Parameters:** Formant frequencies, formant bandwidths, spectral envelope.
*   **How it works for enhancement:**
    1.  **Analyze:** Separate the speech signal into its source and filter components.
    2.  **Enhance Parameters:** Clean the parameters of both the source and the filter. For example, noise might obscure the true pitch or distort the formant frequencies.
    3.  **Resynthesize:** Recombine the enhanced source and filter components to produce clean speech.

*   **Example:** A singer's voice might have a certain "timbre" (related to source characteristics) and a specific vocal tract configuration (filter characteristics) producing certain vowels. Parametric resynthesis can isolate and clean these aspects.

## 3. Parametric Resynthesis Process

The general workflow for parametric resynthesis in speech enhancement typically involves these steps:

1.  **Parameter Extraction:** Analyze the noisy speech signal to extract relevant acoustic parameters according to a chosen model (LPC, filter banks, etc.).
2.  **Parameter Enhancement/Modification:** Apply noise reduction or modification algorithms to the extracted parameters. This is the core of the enhancement.
3.  **Speech Resynthesis:** Feed the enhanced parameters into a speech synthesizer (vocoder) to generate the modified, hopefully cleaner, speech waveform.

### 3.1 Parameter Extraction Techniques

*   **LPC Coefficients:** Typically obtained using the Autocorrelation method or Covariance method.
*   **Pitch/Fundamental Frequency (F0):** Algorithms like autocorrelation, Average Magnitude Difference Function (AMDF), or YIN are used.
*   **Formants:** Can be estimated from LPC coefficients or directly from the spectral envelope.
*   **Excitation Classification (Voiced/Unvoiced):** Determined by features like zero-crossing rate, energy, and spectral characteristics.
*   **Spectral Features:** Mel-Frequency Cepstral Coefficients (MFCCs), Linear Frequency Cepstral Coefficients (LFCCs) are also used in some contexts, though more common in ASR and speaker recognition. For parametric resynthesis specifically, direct spectral envelope parameters are more relevant.

### 3.2 Parameter Enhancement Techniques

*   **LPC Parameter Smoothing:** Averaging LPC coefficients over short segments or applying regularization.
*   **Spectral Post-filtering:** Applying filters to the spectral envelope estimated by LPC.
*   **Noise-Aware Excitation Estimation:** Improving the accuracy of pitch extraction and excitation classification in noisy conditions.
*   **Spectral Subtraction/Wiener Filtering:** Applied in the frequency domain to estimate clean spectral magnitudes.
*   **Model-Based Noise Reduction:** Using statistical models of speech and noise to estimate clean parameters.

### 3.3 Speech Synthesis (Vocoders)

*   **LPC Synthesizer:** A digital filter with the extracted LPC coefficients, driven by the synthesized excitation signal (pulse train or noise).
*   **Harmonic Synthesizer:** Reconstructs speech by combining sine waves at harmonic frequencies, with amplitudes based on spectral analysis.
*   **All-Pole/All-Zero/Mixed-Phase Synthesizers:** Variations on filtering techniques.

## 4. Learning Outcome Coverage & Key Points

**Learning Outcome 1: Explain the concept of parametric resynthesis and its role in speech enhancement.**

*   **Parametric Resynthesis:** Modeling speech with acoustic parameters and reconstructing/modifying speech from these parameters.
*   **Role in Speech Enhancement:** Enables noise reduction by cleaning parameters and resynthesizing speech. Offers more control and often a more compact representation.

**Learning Outcome 2: Describe common parametric models used in speech production, such as LPC and filter banks.**

*   **LPC:** All-pole model of vocal tract, parameters are LPC coefficients, gain, and excitation (pitch/noise).
*   **Filter Banks:** Divide frequency spectrum, parameters are energy/magnitude in bands, spectral shape.
*   **Source-Filter Model:** Generalizes speech production into excitation source and vocal tract filter. Parameters relate to both.

**Learning Outcome 3: Explain the steps involved in parametric resynthesis for speech enhancement.**

*   **Steps:** Parameter Extraction -> Parameter Enhancement/Modification -> Speech Resynthesis.

**Learning Outcome 4: Discuss techniques for parameter extraction and enhancement.**

*   **Extraction:** Autocorrelation/Covariance for LPC, AMDF/YIN for Pitch, spectral analysis for filter banks.
*   **Enhancement:** Smoothing, post-filtering, spectral subtraction, Wiener filtering, model-based methods.

**Learning Outcome 5: Understand the role of speech synthesizers (vocoders) in the resynthesis process.**

*   **Vocoders:** Convert enhanced acoustic parameters back into an audible speech waveform. LPC vocoders are common for LPC-based resynthesis.

### **Important Points to Remember:**

*   Parametric resynthesis works by **indirectly manipulating the speech signal** through its underlying acoustic parameters.
*   The **quality of the extracted and enhanced parameters directly dictates the quality of the resynthesized speech.**
*   **LPC is a fundamental and widely used model** for parametric resynthesis due to its ability to capture vocal tract resonances.
*   **Noise can significantly degrade parameter extraction**, requiring specific enhancement techniques for the parameters themselves.
*   **Vocoders are the bridge** between the parametric representation and the audible speech signal.

## 5. Practice Questions and Exercises

**Question 1:**
Which of the following is NOT a typical parameter extracted for parametric resynthesis using the LPC model?
a) LPC coefficients
b) Fundamental frequency (pitch)
c) Mel-Frequency Cepstral Coefficients (MFCCs)
d) Excitation type (voiced/unvoiced)

**Question 2:**
Describe the two main components of the source-filter model of speech production.

**Question 3:**
Outline the general steps involved in performing speech enhancement using parametric resynthesis.

**Question 4:**
Explain how noise can affect the LPC coefficients and what kind of enhancement techniques might be applied to these coefficients.

**Question 5 (Conceptual):**
If you wanted to make a speech recording sound more "nasal", how might you conceptually approach this using parametric resynthesis? (Hint: Think about what parts of the speech production model contribute to nasality).

---

**Answers:**

**Answer 1:**
c) Mel-Frequency Cepstral Coefficients (MFCCs)
*   **Explanation:** While MFCCs are acoustic features, they are more commonly used in Automatic Speech Recognition (ASR) and speaker recognition. For LPC-based parametric resynthesis, the primary parameters are LPC coefficients, pitch, and excitation characteristics.

**Answer 2:**
The two main components of the source-filter model are:
1.  **Sound Source:** This represents the excitation signal produced by the larynx (vocal folds for voiced speech, or turbulent airflow for unvoiced sounds like fricatives). Key parameters include pitch for voiced sounds and the characteristics of the noise source for unvoiced sounds.
2.  **Vocal Tract Filter:** This represents the acoustic system through which the sound source propagates, including the pharynx, oral cavity, and nasal cavity. It shapes the sound by introducing resonances (formants) and anti-resonances. Key parameters include formant frequencies and bandwidths.

**Answer 3:**
The general steps are:
1.  **Parameter Extraction:** Analyze the noisy speech signal to extract relevant acoustic parameters (e.g., LPC coefficients, pitch, spectral envelope, excitation type).
2.  **Parameter Enhancement/Modification:** Apply algorithms to clean or modify the extracted parameters, aiming to reduce noise or achieve a desired speech modification.
3.  **Speech Resynthesis:** Use a speech synthesizer (vocoder) that takes the enhanced parameters as input to generate a new, hopefully cleaner, speech waveform.

**Answer 4:**
Noise can affect LPC coefficients in several ways:
*   **Distortion of Spectral Peaks:** Noise can smear or shift the formant frequencies, leading to inaccurate LPC coefficients that represent a corrupted spectral envelope.
*   **Introduction of spurious spectral components:** Noise can create spectral features that are not present in clean speech, which the LPC model might try to represent, leading to less accurate modeling.

Enhancement techniques for LPC coefficients include:
*   **Smoothing:** Averaging LPC coefficients over short time windows to reduce the impact of rapid, noise-induced fluctuations.
*   **Spectral Post-filtering:** Applying filters to the estimated spectral envelope derived from LPC coefficients.
*   **Bandwidth Extension:** In some cases, noise might broaden the apparent bandwidth of formants; enhancement might involve sharpening these.
*   **Regularization:** Adding constraints or prior knowledge to the parameter estimation process to prevent overfitting to noise.

**Answer 5:**
To make speech sound more nasal, you would want to modify the **vocal tract filter** parameters. Nasality in speech is primarily caused by the **coupling of the nasal cavity** to the vocal tract. This coupling introduces characteristic resonances and anti-resonances, often a "nasal formant" and a "null" or anti-resonance in the oral cavity's spectral representation.

In a parametric resynthesis system (especially one using a source-filter model or more advanced spectral modeling), you would:
1.  **Extract** the vocal tract filter parameters (e.g., formant frequencies, bandwidths, or spectral envelope features) from the original speech.
2.  **Modify** these parameters to mimic the acoustic effects of nasal coupling. This might involve:
    *   Introducing a new resonance (nasal formant) in the low-mid frequency range.
    *   Introducing a null (anti-resonance) in the mid-frequency range, typically associated with the blockage of the oral path when the velum is lowered.
    *   Adjusting existing formants to reflect the altered vocal tract shape.
3.  **Resynthesize** the speech using the modified filter parameters and the original (or potentially enhanced) source parameters.

If using LPC, you would try to modify the LPC coefficients to reflect these spectral changes characteristic of nasality.
