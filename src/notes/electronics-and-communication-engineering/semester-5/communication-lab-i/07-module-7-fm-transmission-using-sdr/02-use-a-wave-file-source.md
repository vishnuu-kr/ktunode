---
title: "Use a wave file source."
subject: "COMMUNICATION LAB I"
module: "Module 7: FM transmission using SDR"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fecc3"
status: "completed"
scrapedAt: "2026-05-23T17:54:31.119Z"
---
# COMMUNICATION LAB I: Module 7 - FM Transmission using SDR

## Topic: Use a Wave File Source

### Learning Outcomes:

*   Understand the process of using a pre-recorded audio signal (wave file) as the source for FM transmission in an SDR setup.
*   Learn how to integrate an audio waveform into an SDR transmission chain.
*   Explore the impact of audio signal characteristics on the transmitted FM signal.
*   Gain practical experience in configuring SDR software to accept an audio input.

---

### 1. Introduction: The Wave File Source in FM Transmission

In a typical FM transmission system, the source signal is an analog audio signal, such as voice or music. In our Software Defined Radio (SDR) context, we can simulate this by using a pre-recorded digital audio file, commonly in the `.wav` format. This allows us to control and analyze the transmitted signal with precision, independent of real-time microphone input.

**Key Concept:** **Wave File as an Audio Source:** A `.wav` file is a digital representation of an audio signal. It contains sampled amplitude values of the sound wave at a specific sampling rate and bit depth. By reading and processing these samples, we can effectively use a wave file as the baseband modulating signal for FM transmission.

**Reference:** This concept aligns with the general principles of digital signal processing for communication systems discussed in **Digital Modulations using Python by Mathuranathan Viswanathan**, particularly in chapters dealing with signal generation and manipulation.

---

### 2. Understanding Wave File Structure and Properties

To effectively use a wave file as a source, it's crucial to understand its basic properties:

*   **Sampling Rate (Fs):** The number of audio samples taken per second. This determines the maximum frequency that can be accurately represented (Nyquist frequency = Fs/2). Common rates include 8 kHz, 16 kHz, 44.1 kHz, and 48 kHz.
*   **Bit Depth:** The number of bits used to represent each audio sample. Higher bit depth translates to a wider dynamic range and lower quantization noise. Common values are 8-bit, 16-bit, and 24-bit.
*   **Number of Channels:** Mono (1 channel) or Stereo (2 channels). For FM transmission, we typically use a mono signal.
*   **Audio Format:** Uncompressed PCM (Pulse Code Modulation) is the most common and easiest format to work with in SDR applications.

**Example:** A standard CD quality audio file has a sampling rate of 44.1 kHz and a bit depth of 16 bits per sample, usually in stereo. For FM transmission, we would typically convert this to a mono signal and potentially resample it to a lower rate suitable for the lab experiment's bandwidth constraints.

**Textbook Connection:** **Principles of Communication Systems Simulation with Wireless Applications by Tranter, Shanmugan, Rappaport, & Kosbar** provides foundational knowledge on digital signal representation and sampling, which are critical for understanding wave file inputs.

---

### 3. Integrating a Wave File into an SDR FM Transmitter Chain

The process involves several steps within the SDR software (e.g., GNU Radio, SDR# with appropriate plugins):

#### 3.1. Wave File Source Block/Module:

*   **Purpose:** This block reads the digital audio data from a `.wav` file.
*   **Configuration:**
    *   **File Path:** Specify the location of the `.wav` file on your system.
    *   **Sampling Rate:** The block needs to know the original sampling rate of the wave file. This is often read from the file's header.
    *   **Repeat/Loop:** Option to continuously loop the audio file.
    *   **Data Type:** Usually configured to output `float` or `complex` samples.

#### 3.2. Resampling (if necessary):

*   **Purpose:** If the wave file's sampling rate (Fs\_wav) is significantly higher than what your SDR hardware or experimental setup can handle, you'll need to resample it to a lower rate (Fs\_resampled). This also needs to be aligned with the desired baseband bandwidth of the FM signal.
*   **Block:** Resampling block (e.g., `Rational Resampler` in GNU Radio).
*   **Configuration:**
    *   **Input Rate:** Fs\_wav
    *   **Output Rate:** Fs\_resampled (e.g., 48 kHz, 96 kHz, or lower depending on the SDR and desired bandwidth).

#### 3.3. Gain/Scaling:

*   **Purpose:** The raw amplitude values from the wave file might need to be scaled to ensure they are within the appropriate range for modulation and to control the transmitted signal's power.
*   **Block:** Gain block or scaling operation.
*   **Configuration:** Apply a multiplier to the audio samples. A typical range for FM modulation might be between -1.0 and +1.0, but this depends on the specific modulator implementation.

#### 3.4. FM Modulator Block:

*   **Purpose:** This block takes the processed audio signal and generates the FM modulated signal in the baseband.
*   **Configuration:**
    *   **Modulation Index (β) or Deviation:** This parameter controls the frequency deviation of the carrier based on the amplitude of the modulating signal. It's a crucial parameter for FM. For narrow-band FM (NBFM), β << 1. For wide-band FM (WBFM), β >> 1.
    *   **Input Data Type:** Should match the output of the preceding blocks (usually `float` for the audio input).

#### 3.5. Upconversion and Transmission:

*   **Purpose:** The baseband FM signal is then mixed with a carrier frequency and transmitted by the SDR hardware.
*   **Blocks:**
    *   **Quadrature Demodulator (for receiver) / Quadrature Modulator (for transmitter):** In SDR, FM is often generated using complex baseband signals. The FM modulator typically outputs complex baseband samples (I/Q).
    *   **Multiply Const (for carrier frequency):** Multiplies the complex baseband signal with a complex sinusoid at the desired carrier frequency.
    *   **SDR Sink Block:** Configured to transmit on the specified frequency with the correct sample rate for the SDR hardware.

**Course Outcome Alignment:** This process directly addresses **CO3: Develop hands-on skills to emulate a communication system with software-defined radio working in a team.** By integrating a wave file source, students gain practical experience in building a complete transmission chain.

---

### 4. Practical Implementation Steps (using GNU Radio as an example)

Here's a typical workflow in GNU Radio Companion:

1.  **Create a New Flowgraph:** Start a new project.
2.  **Add Blocks:**
    *   **Audio Source (File):** From the `Audio` source block category, select `Audio Source (File)`.
    *   **Rational Resampler (optional):** From the `DSP` -> `Resampling` category.
    *   **Volume Control / Scale:** From the `Math` -> `Utility` category.
    *   **WBFM Transmit:** From the `Analog` -> `FM` category.
    *   **Throttle (optional but recommended):** From the `Time` category, to control the processing rate and avoid overwhelming the CPU.
    *   **USRP Sink / RTL-SDR Sink:** From the `SDR` category, corresponding to your SDR hardware.
3.  **Connect Blocks:**
    *   Connect the output of `Audio Source (File)` to the input of `Rational Resampler` (if used).
    *   Connect the output of `Rational Resampler` (or `Audio Source (File)` directly) to the input of `Volume Control`.
    *   Connect the output of `Volume Control` to the input of `WBFM Transmit`.
    *   Connect the output of `WBFM Transmit` to the input of your SDR Sink block.
4.  **Configure Blocks:**
    *   **Audio Source (File):**
        *   `File`: Path to your `.wav` file.
        *   `Sample Rate`: Ensure this matches the `.wav` file's sampling rate (e.g., 44100).
        *   `Repeat`: Check if you want the audio to loop.
    *   **Rational Resampler:**
        *   `Input Rate`: Same as the `Audio Source (File)` sample rate.
        *   `Output Rate`: Target sample rate (e.g., 48000, 96000).
    *   **Volume Control:** Set the `Gain` to a suitable value (e.g., 0.8).
    *   **WBFM Transmit:**
        *   `Audio Rate`: Should match the output sample rate of the preceding audio processing (e.g., 48000 or 96000).
        *   `Deviation`: Set this to control the FM bandwidth. A value of 5000 Hz is typical for NBFM, while 75000 Hz is for WBFM. Experiment with values.
    *   **SDR Sink:**
        *   `Sample Rate`: The sample rate of your SDR hardware (e.g., 2 Msps, 10 Msps).
        *   `Center Frequency`: The desired carrier frequency for transmission (e.g., 100 MHz).
        *   `Gain`: RF gain for the transmitter.
5.  **Run the Flowgraph:** Execute the flowgraph to start transmitting.

**Important Point to Remember:** The `Audio Rate` parameter in the `WBFM Transmit` block is crucial. It must match the effective sampling rate of the audio signal *after* any resampling.

---

### 5. Exploring Audio Signal Characteristics and FM Transmission

Using a wave file as a source allows for controlled experimentation:

*   **Audio Frequency Content:**
    *   **High-frequency audio:** Will result in larger frequency deviations in the FM signal.
    *   **Low-frequency audio:** Will result in smaller frequency deviations.
    *   **Complex audio (music):** Will produce a complex FM spectrum with sidebands that vary in amplitude and frequency based on the audio content.
*   **Audio Amplitude:**
    *   **Higher amplitude:** Leads to greater frequency deviation.
    *   **Lower amplitude:** Leads to smaller frequency deviation. This directly impacts the transmitted signal's bandwidth and the FM modulation index (β).

**Textbook Connection:** **Communication Systems by Simon Haykin and Michael Moher** provides detailed explanations of the relationship between modulating signal amplitude, frequency deviation, and the resulting FM spectrum, including Bessel functions for analysis.

**Course Outcome Alignment:** This exploration directly contributes to **CO1: Setup simple prototype circuits for waveform coding and digital modulation techniques working in a team.** Students can experiment with different audio files (speech vs. music, different pitches) and observe the effects on the transmitted FM signal, fostering teamwork in analysis.

---

### 6. Using SDR as a Receiver to Verify Transmission

To confirm the FM transmission is working correctly, you would set up a separate SDR receiver:

1.  **Receiver Flowgraph:**
    *   Add an SDR Source block (matching your receiver SDR hardware).
    *   Configure its `Center Frequency` to the same frequency you are transmitting on.
    *   Add a `WBFM Receive` block.
    *   Configure its `Audio Rate` to match the `WBFM Transmit`'s `Audio Rate`.
    *   Add an Audio Sink block to play the received audio.
2.  **Connect and Run:** Connect the blocks and run the receiver flowgraph.

**Observation:** You should hear the audio from your wave file being played back through the receiver's speakers.

**Experiment:**
*   Adjust the `Deviation` in the transmitter.
*   Adjust the RF gain in both transmitter and receiver.
*   Observe how changes affect the quality and clarity of the received audio.

**Example:** If you transmit a clear sine wave audio file at 1 kHz with a deviation of 5 kHz, and then transmit a music file with a wider frequency range and higher amplitudes, you'll hear different sound qualities. The deviation setting is crucial for bandwidth and fidelity.

---

### 7. Practice Questions and Exercises

**Question 1:**
You are using a `.wav` file that has a sampling rate of 48 kHz. You want to transmit it using an FM transmitter with a bandwidth of approximately 150 kHz. Which of the following settings for the `WBFM Transmit` block's `Deviation` parameter would be most appropriate for wideband FM (WBFM)?
a) 5 kHz
b) 10 kHz
c) 75 kHz
d) 1 kHz

**Answer 1:**
c) 75 kHz

**Explanation:** Wideband FM typically involves a frequency deviation significantly greater than the modulating signal's bandwidth. A deviation of 75 kHz is a common value used in broadcasting and for WBFM, leading to a total bandwidth of approximately 2 * (deviation + modulating frequency). If the audio bandwidth is up to ~15 kHz, then 75 kHz deviation results in a bandwidth around 2 * (75 + 15) = 180 kHz, which is in the ballpark of 150 kHz. Options a, b, and d represent narrow-band FM.

**Question 2:**
Describe the role of the `Rational Resampler` block when using a high-sampling-rate `.wav` file with an SDR that has a lower hardware sample rate capability.

**Answer 2:**
The `Rational Resampler` block is used to change the sampling rate of the audio signal from the `.wav` file to a rate that is compatible with the SDR's hardware sample rate and the desired FM transmission bandwidth. If the `.wav` file's original sampling rate (e.g., 192 kHz) is too high for the SDR's maximum sample rate (e.g., 2 Msps) or for the desired baseband processing bandwidth, resampling down to a lower rate (e.g., 48 kHz or 96 kHz) is necessary. This ensures that the data rate is manageable and the signal occupies a frequency band suitable for the SDR.

**Question 3:**
How would you adjust the FM transmission to make the received audio sound "louder" or "more intense"?

**Answer 3:**
You would typically adjust the `Gain` parameter in the `Volume Control` (or scaling) block before the FM modulator. Increasing this gain will increase the amplitude of the audio signal, which in turn increases the frequency deviation of the FM signal. A larger deviation often translates to a stronger signal perceived by the listener. You might also need to adjust the RF gain of the SDR transmitter.

**Exercise 1:**
Find a `.wav` file on your computer (or download one). Configure your SDR software to transmit this file via FM.
1.  Start with a deviation of 5 kHz and listen to the received audio.
2.  Change the deviation to 75 kHz and listen again.
3.  Describe the perceived differences in the received audio and the occupied bandwidth.

---

### 8. Key Points to Remember

*   `.wav` files provide a precise and controllable audio source for FM transmission experiments.
*   Understanding the `.wav` file's sampling rate, bit depth, and channels is essential.
*   Resampling may be necessary to match SDR hardware capabilities and desired bandwidth.
*   The `Deviation` parameter in the FM modulator critically affects the transmitted signal's bandwidth and the perceived audio intensity.
*   Proper configuration of both the transmitter and receiver SDRs is vital for successful communication.
*   Experimentation with different audio files and modulation parameters helps understand FM principles.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 9. Textbook References and Alignment with Course Outcomes

This module heavily relies on the practical application of communication system principles.

*   **CO1 (Setup simple prototype circuits):** The entire process of building an FM transmitter flowgraph using an SDR and a wave file source directly aligns with setting up a prototype communication system. Experimenting with different audio files and parameters allows for exploring waveform coding and modulation techniques.
*   **CO3 (Develop hands-on skills to emulate a communication system with SDR):** This is the core of the module. Students directly engage with SDR hardware and software to emulate an FM transmitter, integrating various signal processing blocks.

**Textbook and Reference Links:**

*   **Digital Modulations using Python by Mathuranathan Viswanathan:** Provides excellent examples of signal generation and modulation, directly applicable to creating the baseband FM signal from audio.
*   **Principles of Communication Systems Simulation with Wireless Applications by Tranter, Shanmugan, Rappaport, & Kosbar:** Offers theoretical background on digital signal sampling, quantization, and the mathematical basis of FM modulation, which is crucial for understanding the parameters used in SDR blocks.
*   **Communication Systems by Simon Haykin and Michael Moher:** Provides in-depth theoretical treatments of analog modulation techniques like FM, explaining concepts like frequency deviation, modulation index, and the FM spectrum, which helps in interpreting experimental results.

By utilizing a wave file source, students gain a concrete, hands-on understanding of how audio signals are transformed and transmitted using FM modulation, bridging theoretical knowledge with practical SDR implementation.