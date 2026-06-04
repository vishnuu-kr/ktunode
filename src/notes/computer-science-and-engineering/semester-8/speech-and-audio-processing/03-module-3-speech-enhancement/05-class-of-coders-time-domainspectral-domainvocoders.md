---
title: "class of coders : Time domain/spectral domain/vocoders"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 3: Speech Enhancement :"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca5f"
status: "completed"
scrapedAt: "2026-05-20T17:27:00.272Z"
---
# SPEECH AND AUDIO PROCESSING

## Module 3: Speech Enhancement

### Topic: Classes of Coders: Time Domain / Spectral Domain / Vocoders

---

### **Learning Outcomes:**

By the end of this topic, you will be able to:

*   Differentiate between time-domain, spectral-domain, and vocoder approaches to speech coding.
*   Explain the fundamental principles behind each class of speech coder.
*   Identify the advantages and disadvantages of each coding approach.
*   Understand how these different approaches contribute to speech enhancement.
*   Recognize examples of specific coders within each class.

---

### **1. Introduction to Speech Coding**

Speech coding is the process of representing speech signals in a digital format for efficient transmission, storage, and processing. In the context of speech enhancement, understanding different coding classes is crucial because:

*   **Quantization:** All digital coders involve quantization, which introduces noise. Different coding schemes handle this noise differently, impacting the quality of enhanced speech.
*   **Parameter Estimation:** Many enhancement techniques rely on estimating speech parameters. The way speech is represented by a coder can directly influence the accuracy and robustness of these estimations.
*   **Reconstruction:** The reconstruction process in a coder can either amplify or mitigate the effects of noise.

---

### **2. Classes of Speech Coders**

Speech coders can be broadly categorized into three main classes based on how they represent the speech signal:

#### **2.1. Time-Domain Coders**

These coders operate directly on the speech waveform in the time domain. They aim to represent the amplitude of the speech signal at discrete points in time.

*   **Key Concept:** **Waveform Coding** - The primary goal is to accurately reproduce the original speech waveform.

*   **Principles:**
    *   **Sampling:** The continuous analog speech signal is sampled at a regular rate (e.g., 8 kHz, 16 kHz).
    *   **Quantization:** The amplitude of each sample is quantized to a finite number of levels. This is where distortion is introduced.
    *   **Encoding:** The quantized values are converted into a binary code for transmission or storage.
    *   **Decoding:** The binary code is converted back into quantized amplitude values.
    *   **Reconstruction:** A digital-to-analog converter (DAC) smooths the quantized samples to recreate the speech waveform.

*   **Sub-Classes:**

    *   **Pulse Code Modulation (PCM):**
        *   **Description:** The most basic form of waveform coding. It involves uniform or non-uniform quantization of sampled amplitudes.
        *   **Non-uniform Quantization (µ-law, A-law):** Compresses the dynamic range of the signal, providing more quantization levels for quieter speech segments and fewer for louder ones. This is a form of companding, which helps to improve the perceived quality at lower bitrates.
        *   **Examples:**
            *   **µ-law PCM:** Commonly used in North America and Japan.
            *   **A-law PCM:** Commonly used in Europe and the rest of the world.
        *   **Bitrates:** Typically 64 kbps for toll-quality speech.
        *   **Speech Enhancement Relevance:** PCM coders directly represent the waveform. Noise added during quantization can be a target for enhancement algorithms. Denoising can be applied before or after PCM coding.

    *   **Adaptive Differential Pulse Code Modulation (ADPCM):**
        *   **Description:** Exploits the high correlation between adjacent speech samples. Instead of quantizing the absolute sample value, it quantizes the *difference* between the current sample and a predicted value.
        *   **Prediction:** A predictor estimates the current sample based on previous samples. The predictor coefficients are often adapted to the changing characteristics of the speech signal.
        *   **Quantization:** The difference signal (quantized error) is then quantized.
        *   **Examples:**
            *   **G.726:** A widely used ADPCM standard.
        *   **Bitrates:** Typically 16, 24, 32, and 40 kbps.
        *   **Speech Enhancement Relevance:** By exploiting redundancy, ADPCM can achieve better quality at lower bitrates compared to PCM. The prediction mechanism can also be leveraged in enhancement algorithms, for example, by using the predictor to estimate the clean speech signal.

*   **Advantages of Time-Domain Coders:**
    *   **Simplicity:** Generally easier to implement than spectral-domain or vocoders.
    *   **High Fidelity (at high bitrates):** Can achieve excellent speech quality when operating at high bitrates (e.g., 64 kbps PCM).
    *   **Good for Wideband Speech:** Effective at capturing the full frequency range of speech.

*   **Disadvantages of Time-Domain Coders:**
    *   **High Bitrate Requirement:** Achieving good quality at low bitrates is challenging due to the direct representation of the waveform and the resulting quantization noise.
    *   **Sensitivity to Noise:** Quantization noise can be perceived as broadband noise, which can be difficult to remove without degrading the speech quality.

---

#### **2.2. Spectral-Domain Coders (Transform Coders)**

These coders operate in the frequency domain. They first transform the speech signal into a spectral representation and then quantize and encode these spectral coefficients.

*   **Key Concept:** **Frequency-Domain Representation** - The speech signal is analyzed in terms of its frequency content.

*   **Principles:**
    *   **Framing:** The speech signal is divided into short, overlapping frames (e.g., 20-30 ms).
    *   **Transformation:** A spectral transformation (e.g., Fourier Transform, Discrete Cosine Transform) is applied to each frame to obtain spectral coefficients.
    *   **Quantization:** The spectral coefficients are quantized. Different quantization strategies (e.g., scalar, vector quantization) and bit allocation schemes are used.
    *   **Encoding:** The quantized spectral coefficients are encoded.
    *   **Decoding:** The encoded coefficients are decoded.
    *   **Inverse Transformation:** An inverse spectral transformation is applied to reconstruct the speech signal in the time domain.

*   **Examples:**
    *   **Code-Excited Linear Prediction (CELP) Coders:** These are a very popular class of coders that combine spectral and waveform coding principles. They use linear prediction to model the spectral envelope and a codebook to represent the residual signal (the difference between the predicted signal and the actual signal).
        *   **Description:** CELP coders work by modeling the vocal tract's long-term and short-term characteristics using linear prediction. The excitation signal (the source of speech) is represented by a combination of a fixed codebook (for periodic excitation like voicing) and a possibly adaptive codebook (for pitch variations). The encoder searches for the best excitation and predictor parameters that minimize the error between the synthesized speech and the original speech.
        *   **Examples:**
            *   **G.729:** A widely used CELP coder for conversational speech at 8 kbps.
            *   **FS1016 (US Federal Standard):** Another well-known CELP coder.
    *   **Modified Discrete Cosine Transform (MDCT):** Used in many modern audio and speech codecs for its excellent time-frequency localization properties and overlapping windowing capabilities.
        *   **Description:** MDCT is a transform that allows for perfect reconstruction of the signal when used with overlapping windows. It is particularly effective at representing transient signals and reducing blocking artifacts.
        *   **Examples:**
            *   **AAC (Advanced Audio Coding):** Used in many multimedia applications.
            *   **MP3 (MPEG-1 Audio Layer III):** While primarily for audio, it utilizes MDCT principles.
            *   **AMR-WB (Adaptive Multi-Rate Wideband):** Uses a form of MDCT for wideband speech.
    *   **Sub-band Coding:** The speech signal is divided into frequency bands, and each band is coded separately.
        *   **Description:** This allows for different bit allocation and quantization strategies for different frequency bands, which can be beneficial as human hearing is more sensitive to certain frequencies.
        *   **Examples:**
            *   **G.722:** A codec for wideband speech that uses sub-band coding.

*   **Advantages of Spectral-Domain Coders:**
    *   **Better Performance at Lower Bitrates:** Can achieve good speech quality at bitrates significantly lower than PCM.
    *   **Efficient Representation:** Captures perceptually relevant features of speech efficiently.
    *   **Adaptability:** Can adapt to different speech conditions and bitrates.

*   **Disadvantages of Spectral-Domain Coders:**
    *   **Complexity:** Generally more complex to implement than time-domain coders.
    *   **Perceptual Artifacts:** Quantization of spectral coefficients can lead to different types of artifacts, such as "birdies" (unwanted tonal components) or pre-echoes.
    *   **Sensitivity to Parameter Estimation Errors:** Errors in estimating spectral parameters (like predictor coefficients) can have a significant impact on the reconstructed speech quality.

---

#### **2.3. Vocoders (Voice Coders)**

Vocoders are a very old class of speech coders that represent speech as a sequence of parameters that describe the characteristics of the vocal tract and the excitation source. They do not attempt to reproduce the actual speech waveform.

*   **Key Concept:** **Parametric Modeling** - Speech is modeled as the output of a source (excitation) and a filter (vocal tract).

*   **Principles:**
    *   **Source-Filter Model:** Speech production is modeled as the output of an excitation source (e.g., glottal pulses for voiced speech, random noise for unvoiced speech) passing through a time-varying filter representing the vocal tract.
    *   **Parameter Extraction:** The encoder analyzes the speech signal to extract parameters related to the source and the filter. These parameters typically include:
        *   **Pitch Period (for voiced speech):** The fundamental frequency of vocal fold vibration.
        *   **Voicing Decision:** Whether the speech segment is voiced or unvoiced.
        *   **Vocal Tract Filter Parameters:** These describe the spectral envelope of the speech, often represented by:
            *   **Formant Frequencies and Bandwidths:** Resonant frequencies of the vocal tract.
            *   **Linear Prediction Coefficients (LPCs):** Coefficients of a linear predictive model that approximates the vocal tract filter.
            *   **Mel-Frequency Cepstral Coefficients (MFCCs):** Features derived from the mel-frequency scale, commonly used in speech recognition but also applicable in vocoders.
    *   **Quantization and Encoding:** These parameters are quantized and encoded.
    *   **Decoding and Synthesis:** The decoder uses the quantized parameters to drive a speech synthesizer, which generates the speech signal. The synthesizer typically consists of:
        *   **Excitation Generator:** Produces either periodic pulses (for voiced speech) or random noise (for unvoiced speech) based on the extracted pitch and voicing information.
        *   **Vocal Tract Filter:** A digital filter (e.g., an LPC filter) whose coefficients are controlled by the extracted vocal tract parameters.

*   **Examples:**
    *   **Channel Vocoders:** Early vocoders that used a bank of filters to analyze the spectrum and then reconstructed the spectrum based on these parameters.
        *   **Description:** The speech signal is passed through a bank of bandpass filters. The outputs of these filters are then rectified and smoothed to extract spectral envelope information. This spectral information is then used to shape the spectrum of a synthesized excitation signal.
        *   **Speech Enhancement Relevance:** Channel vocoders are very susceptible to noise, as the filter outputs are directly quantized. Enhancement would typically involve pre-filtering or advanced parameter estimation.
    *   **Linear Predictive Coding (LPC) Vocoders:** A more advanced type of vocoder that uses linear prediction to model the vocal tract.
        *   **Description:** LPC models the vocal tract as an all-pole filter. The encoder estimates the LPC coefficients, pitch period, and voicing information. The decoder uses these parameters to synthesize speech from a synthesized excitation signal passed through an LPC filter.
        *   **Examples:**
            *   **FS1015 (LPC-10):** A military standard LPC vocoder operating at 2.4 kbps.
        *   **Speech Enhancement Relevance:** LPC vocoders are known for their "robotic" or "buzzy" sound at low bitrates. Enhancement efforts often focus on improving the naturalness and reducing the spectral artifacts. The LPC coefficients themselves can be smoothed or adapted for noise reduction.
    *   **Homomorphic Vocoders:** Use homomorphic filtering to separate the source and filter components of the speech signal.
        *   **Description:** Based on the principle that the log of the product of the source and filter spectra can be represented as the sum of the log of the source spectrum and the log of the filter spectrum. This allows for separation in the cepstral domain.
        *   **Speech Enhancement Relevance:** Can be used to separate the glottal source excitation from the vocal tract filtering, which can be useful for noise reduction.

*   **Advantages of Vocoders:**
    *   **Extremely Low Bitrates:** Can achieve very low bitrates (e.g., 2.4 kbps) while retaining intelligibility.
    *   **Robustness to Channel Errors (sometimes):** Parametric representations can be more robust to certain types of transmission errors than waveform coding.

*   **Disadvantages of Vocoders:**
    *   **Poor Speech Quality:** Often results in unnatural, robotic, or metallic-sounding speech.
    *   **Limited Intelligibility at Very Low Bitrates:** Intelligibility can suffer significantly when parameters are heavily quantized or lost.
    *   **Sensitivity to Excitation Modeling:** The quality of synthesized speech heavily depends on the accuracy of the excitation signal representation.
    *   **"Speech-like" sound, not "natural speech"**: They aim to convey the *meaning* of speech rather than its natural acoustic characteristics.

---

### **3. Comparison of Coding Classes**

| Feature           | Time-Domain Coders                 | Spectral-Domain Coders             | Vocoders                                 |
| :---------------- | :--------------------------------- | :--------------------------------- | :--------------------------------------- |
| **Representation**| Waveform samples                   | Spectral coefficients              | Source and vocal tract parameters        |
| **Operation**     | Direct amplitude quantization      | Spectral transformation & quantization | Parametric modeling & synthesis        |
| **Bitrate**       | High (e.g., 64 kbps for PCM)       | Medium (e.g., 8-32 kbps for CELP)  | Very Low (e.g., 2.4-4.8 kbps for LPC)    |
| **Quality**       | High fidelity (at high bitrates)   | Good, naturalness varies           | Low, robotic, but intelligible           |
| **Complexity**    | Low to Medium                      | Medium to High                     | Medium                                   |
| **Enhancement Focus** | Denoising waveform, de-reverberation | Spectral shaping, artifact removal | Improving naturalness, reducing artifacts |
| **Examples**      | PCM, ADPCM                         | CELP (G.729), MDCT-based codecs    | LPC-10, Channel Vocoders                 |

---

### **4. Relevance to Speech Enhancement**

Understanding these coding classes is vital for speech enhancement:

*   **Quantization Noise:** Different coders introduce different types of quantization noise. Enhancement algorithms need to be aware of this to effectively suppress it without damaging the speech signal. For example, a spectral-domain coder's quantization noise might appear as spectral distortions, while time-domain coders might introduce additive noise.
*   **Parameter Estimation Accuracy:** Enhancement algorithms that rely on estimating speech parameters (like pitch or vocal tract characteristics) will be influenced by the coder used. If the speech is already coded, these parameters might be less accurate.
*   **Reconstruction Artifacts:** The synthesis process in vocoders or the inverse transforms in spectral coders can introduce artifacts that enhancement algorithms might need to address.
*   **Codec-Aware Enhancement:** The most effective enhancement strategies often consider the characteristics of the codec being used. For example, an enhancement algorithm designed for PCM might differ from one designed for LPC.

---

### **5. Practice Questions and Answers**

**Question 1:** Which class of speech coders aims to represent the speech signal by analyzing and synthesizing the characteristics of the vocal tract and excitation source?

**Answer:** Vocoders.

**Question 2:** Explain the main difference between Pulse Code Modulation (PCM) and Adaptive Differential Pulse Code Modulation (ADPCM).

**Answer:** PCM quantizes the absolute amplitude of each speech sample, while ADPCM quantizes the difference between the current sample and a predicted value, exploiting the correlation between adjacent samples.

**Question 3:** What are the primary advantages and disadvantages of Vocoders compared to Time-Domain coders?

**Answer:**
*   **Advantages of Vocoders:** Can achieve very low bitrates, retaining intelligibility.
*   **Disadvantages of Vocoders:** Produce unnatural, robotic-sounding speech; limited quality compared to waveform coders at higher bitrates.

**Question 4:** Spectral-domain coders transform the speech signal into the frequency domain. Name a common transformation technique used in spectral coding.

**Answer:** Fourier Transform or Discrete Cosine Transform (DCT), and more specifically, Modified Discrete Cosine Transform (MDCT) in modern codecs. Linear Predictive Coding (LPC) coefficients are also considered spectral parameters.

**Question 5:** Imagine you have a noisy speech signal that has been encoded using a 64 kbps PCM coder. What kind of enhancement approach would be most direct and why?

**Answer:** A direct time-domain approach would be most direct. Since PCM encodes the waveform directly, denoising algorithms that operate on the time-domain waveform (e.g., spectral subtraction, Wiener filtering) would be suitable for removing the quantization noise and any additive background noise.

---

### **Important Points to Remember:**

*   **Time-domain coders** work directly with the waveform, prioritizing fidelity but requiring higher bitrates.
*   **Spectral-domain coders** analyze the frequency content, achieving better efficiency at lower bitrates by exploiting perceptual properties.
*   **Vocoders** model speech as a source-filter system, enabling extremely low bitrates but sacrificing naturalness.
*   **The choice of coder impacts the type and perceptual characteristics of the distortion (noise) introduced.**
*   **Speech enhancement techniques can be applied before or after coding, and their effectiveness can depend on the coding scheme used.**
*   **CELP coders are a significant class that bridges spectral and waveform coding by using linear prediction for the vocal tract and codebooks for the excitation.**
*   **Modern codecs often use advanced techniques like MDCT for efficient spectral representation.**

---
