---
title: "Set up an LPF and FM receiver using GNU Radio."
subject: "COMMUNICATION LAB I"
module: "Module 6: FM reception using SDR"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fecbe"
status: "completed"
scrapedAt: "2026-05-23T17:54:28.293Z"
---
# COMMUNICATION LAB I - Module 6: FM Reception using SDR

## Topic: Set up an LPF and FM Receiver using GNU Radio

### 1. Learning Outcomes

Upon successful completion of this topic, students will be able to:

*   **Understand the fundamental principles of FM demodulation.**
*   **Identify and configure essential GNU Radio blocks for FM reception.**
*   **Implement a functional FM receiver flowgraph in GNU Radio.**
*   **Apply a Low-Pass Filter (LPF) appropriately in an FM reception chain.**
*   **Recognize and interpret the output of an FM receiver.**
*   **Troubleshoot common issues in SDR-based FM reception.**

### 2. Key Concepts and Definitions

*   **Software Defined Radio (SDR):** A radio communication system where components that have been traditionally implemented in hardware (like mixers, filters, amplifiers, modulators/demodulators, detectors, etc.) are instead implemented using software on a personal computer or embedded system. This allows for flexibility and adaptability.
    *   *Referenced in:* The Hobbyist's Guide to the RTL-SDR.
*   **Frequency Modulation (FM):** A modulation technique used to encode information on a carrier wave by varying the carrier wave's frequency. The instantaneous frequency of the carrier wave is varied in proportion to the instantaneous amplitude of the message signal.
    *   *Referenced in:* Principles of Communication Systems Simulation, Modern Digital and Analog Communication Systems.
*   **FM Demodulation:** The process of extracting the original message signal from an FM modulated carrier wave.
*   **Low-Pass Filter (LPF):** A filter that passes signals with a frequency lower than a certain cutoff frequency and attenuates signals with frequencies higher than the cutoff frequency. In FM reception, an LPF is crucial for removing unwanted high-frequency components, such as the sidebands generated during modulation or noise outside the desired signal bandwidth.
    *   *Referenced in:* Electronic Communication Systems, Introduction to Analog and Digital Communication.
*   **GNU Radio:** An open-source software development toolkit that provides signal processing blocks and a framework for building signal processing applications. It is widely used for SDR.
    *   *Referenced in:* Digital Modulations using Python (as a platform for simulation and implementation).
*   **Flowgraph:** A graphical representation of a signal processing system in GNU Radio, where blocks are connected to represent the flow of data.
*   **SDR Hardware (e.g., RTL-SDR):** A physical device that interfaces with the computer to receive and transmit radio signals. The RTL-SDR is a popular and affordable option for hobbyists and learning.
    *   *Referenced in:* The Hobbyist's Guide to the RTL-SDR.
*   **Sampling Rate:** The number of samples taken per second from a continuous signal to convert it into a discrete-time signal. This is a critical parameter in SDR.
*   **Center Frequency:** The nominal frequency of the FM broadcast station or the signal of interest.
*   **Bandwidth:** The range of frequencies occupied by the FM signal. Broadcast FM typically occupies a bandwidth of around 200 kHz.
*   **Quadrature Demodulator (or FM Demodulator Block):** A core block in GNU Radio that performs the FM demodulation.
*   **Decimation:** The process of reducing the sampling rate of a signal by discarding samples. This is often used to reduce the processing load and bring the signal to an appropriate rate for further processing.
    *   *Referenced in:* Principles of Communication Systems Simulation.
*   **Resampling:** Changing the sampling rate of a signal. Similar to decimation but can also involve increasing the sampling rate (interpolation).
    *   *Referenced in:* Principles of Communication Systems Simulation.

### 3. Setting up the FM Receiver Flowgraph in GNU Radio

This section outlines the steps to create a basic FM receiver flowgraph using GNU Radio Companion.

**Objective:** To tune into an FM broadcast station and demodulate its audio signal.

**Required Components (GNU Radio Blocks):**

1.  **Source Block:**
    *   **`RTL-SDR Source`**: This block interfaces with the RTL-SDR dongle to receive raw radio frequency data.
    *   **Parameters:**
        *   `Center Frequency (Hz)`: Set to the desired FM station's frequency (e.g., 98.1 MHz = 98100000 Hz).
        *   `Sample Rate (Hz)`: The rate at which the RTL-SDR samples the incoming signal. A common value for FM reception is 2.4 MSps (2,400,000 Hz) or higher, to capture the full FM bandwidth and potential sidebands.
        *   `Gain (dB)`: Adjust for optimal signal strength without clipping. Start with an automatic setting or a moderate value.
        *   `Frequency Correction (PPM)`: If your RTL-SDR has known PPM error, set it here.

2.  **Filtering/Resampling (Optional but Recommended):**
    *   **`Rational Resampler` or `Bandpass Filter`**: To narrow down the signal to the specific FM channel's bandwidth and remove out-of-band noise.
    *   **If using `Rational Resampler`:**
        *   `Decimation`: Reduce the sample rate to a more manageable level (e.g., divide by 8 or 16).
        *   `Interpolation`: Keep at 1, or adjust if needed for specific filtering stages.
    *   **If using `Bandpass Filter` (e.g., `FFT Filter` or `FIR Filter`):**
        *   `Center Frequency`: Set to 0 Hz if the `RTL-SDR Source` is already tuned to the desired station.
        *   `Bandwidth`: Set to the bandwidth of an FM channel (e.g., 200,000 Hz or 0.2 MSps).
        *   `Sampling Rate`: The sample rate *after* the previous stage (e.g., if using `Rational Resampler` with decimation 8, this would be your original sample rate / 8).

3.  **FM Demodulator Block:**
    *   **`Quadrature Demod`**: This block implements the FM demodulation process. It takes a complex baseband signal and outputs a real-valued audio signal.
    *   **Parameters:**
        *   `Gain`: This is a crucial parameter. It relates the frequency deviation of the FM signal to the amplitude of the demodulated audio. The optimal gain depends on the FM modulation index and the `Sample Rate` of the input signal. A common starting point is `Gain = Sample_Rate / (2 * pi * Max_Frequency_Deviation)`. For broadcast FM, the maximum deviation is typically 75 kHz. So, `Gain = Sample_Rate / (2 * pi * 75000)`. If the audio sounds distorted or too loud/quiet, adjust this value.

4.  **Audio Output Block:**
    *   **`Audio Sink`**: This block sends the demodulated audio signal to your computer's sound card.
    *   **Parameters:**
        *   `Device Name`: Usually left blank to use the default audio output.
        *   `Sample Rate`: Should match the sample rate of the signal *after* demodulation (which is usually the sample rate of the `Quadrature Demod` block's output, typically the same as its input after any resampling).

**Flowgraph Structure:**

```
[RTL-SDR Source] ----> [Rational Resampler (Optional)] ----> [Quadrature Demod] ----> [Audio Sink]
       |                                    |
       | (Optional: Bandpass Filter)        |
       +------------------------------------+
```

**Step-by-Step Implementation in GNU Radio Companion:**

1.  **Create a New Flowgraph:** Open GNU Radio Companion and create a new empty flowgraph.
2.  **Add Source Block:** Drag and drop an `RTL-SDR Source` block from the "SDR" category.
3.  **Configure Source Block:**
    *   Double-click the `RTL-SDR Source` block.
    *   Set `Sample Rate` to `2.4e6`.
    *   Set `Center Frequency` to your desired FM station's frequency (e.g., `98.1e6`).
    *   Set `Gain` to an appropriate value (e.g., `auto` or `30` dB).
    *   Click "OK".
4.  **Add Resampler (Optional but Recommended):**
    *   Drag and drop a `Rational Resampler` block from the "DSP -> Rate" category.
    *   Connect the output of the `RTL-SDR Source` to the input of the `Rational Resampler`.
    *   Double-click the `Rational Resampler` block.
    *   Set `Decimation` to a value like `8`. This will reduce the sample rate from 2.4 MSps to 300 kSps (2,400,000 / 8 = 300,000).
    *   Click "OK".
5.  **Add FM Demodulator:**
    *   Drag and drop a `Quadrature Demod` block from the "Analog -> Demodulators" category.
    *   Connect the output of the `Rational Resampler` (or `RTL-SDR Source` if no resampler is used) to the input of the `Quadrature Demod`.
    *   Double-click the `Quadrature Demod` block.
    *   Calculate and set the `Gain`. If using the `Rational Resampler` with a decimation of 8 (input sample rate to `Quadrature Demod` is 300 kSps), and assuming a max FM deviation of 75 kHz:
        *   `Gain = 300000 / (2 * pi * 75000)`
        *   `Gain ≈ 300000 / 471238.89`
        *   `Gain ≈ 0.6366`
        *   Set `Gain` to this value or a slightly adjusted one for testing.
    *   Click "OK".
6.  **Add Audio Sink:**
    *   Drag and drop an `Audio Sink` block from the "Audio" category.
    *   Connect the output of the `Quadrature Demod` to the input of the `Audio Sink`.
    *   Double-click the `Audio Sink` block. Ensure the `Sample Rate` matches the output of the `Quadrature Demod` (which is the same as its input, 300 kSps in our example). You might need to adjust this based on your system's audio capabilities, or it might be automatically handled if you leave the device name blank.
    *   Click "OK".
7.  **Run the Flowgraph:** Click the "Run" button (green play icon) in the GNU Radio Companion toolbar.

**Monitoring and Visualization (Optional but Highly Recommended):**

To understand what's happening, add the following blocks:

*   **`Water Sink` (or `File Sink`)**: To view the received signal's magnitude. Connect the output of the `RTL-SDR Source` to this.
*   **`Constellation Sink`**: To visualize the signal's phase and amplitude. Connect the output of the `RTL-SDR Source` to this.
*   **`Frequency Sink` (or `Waterfall Sink`)**: To see the frequency spectrum of the received signal. Connect the output of the `RTL-SDR Source` (or after the resampler) to this.
    *   **Parameters for `Frequency Sink`:**
        *   `FFT Size`: A larger value (e.g., 1024 or 2048) gives better frequency resolution.
        *   `Sample Rate`: The sample rate of the input signal.
        *   `Y-Axis Label`: "Power" or "Magnitude".
        *   `X-Axis Label`: "Frequency".

**Example Flowgraph with Visualization:**

```
[RTL-SDR Source] ----> [Rational Resampler] ----> [Quadrature Demod] ----> [Audio Sink]
       |                     |                        |
       |                     |                        +------> [Constellation Sink]
       |                     |
       +---------------------+------------------------+------> [Frequency Sink]
```

### 4. The Role of the Low-Pass Filter (LPF)

In the context of FM reception, the "LPF" is intrinsically part of the `Quadrature Demod` block. When FM is demodulated, the frequency deviations are converted into amplitude variations. However, this process can introduce high-frequency noise or artifacts. The `Quadrature Demod` block implicitly includes a low-pass filtering stage to remove these undesirable components, leaving only the desired audio signal.

*   **Why is it needed?**
    *   **Noise Reduction:** High-frequency noise can corrupt the demodulated audio.
    *   **Bandwidth Limiting:** The demodulated audio signal has a limited bandwidth (e.g., 20 Hz to 15 kHz for broadcast FM). An LPF ensures that only this audio bandwidth is passed through.
    *   **Removing Modulation Artifacts:** The demodulation process itself can sometimes create unwanted spectral components.

*   **Implicit LPF in `Quadrature Demod`:** The `Quadrature Demod` block is designed to output a real-valued signal representing the detected audio. Internally, it effectively performs a differentiation and then an integration (or a phase-locked loop) followed by a low-pass filter to extract the baseband message. The gain parameter in `Quadrature Demod` often scales this output, and the internal filter's cutoff frequency is implicitly set to handle the expected audio bandwidth.

*   **Explicit LPF (Optional/Advanced):** In more complex scenarios, you might add an explicit `Low Pass Filter` block (e.g., `FFT Filter` or `FIR Filter` from the "DSP -> Filters" category) *after* the `Quadrature Demod` block if you need finer control over the audio bandwidth or want to apply specific filtering characteristics (e.g., a flatter passband response). If you do this, ensure the `Sample Rate` parameter of this explicit LPF is set correctly and its cutoff frequency is set to the desired audio cutoff (e.g., 15 kHz or 20 kHz).

    *   **Example of explicit LPF usage:**
        *   Connect the output of `Quadrature Demod` to the input of a `Low Pass Filter` block.
        *   Configure the `Low Pass Filter`:
            *   `Sampling Rate`: The sample rate of the `Quadrature Demod` output (e.g., 300 kSps).
            *   `Cutoff Frequency`: Set to `15000` Hz (for 15 kHz audio).
            *   `Transition Width`: Adjust as needed (e.g., `5000` Hz).
        *   Connect the output of the `Low Pass Filter` to the `Audio Sink`.

### 5. Practice Questions and Exercises

**Question 1:**
What is the primary function of the `Quadrature Demod` block in an FM receiver flowgraph?

**Answer:**
The `Quadrature Demod` block is responsible for demodulating the FM signal, converting the frequency variations of the carrier wave back into the original message signal (audio).

**Question 2:**
If your `RTL-SDR Source` is set to a `Sample Rate` of 2.048 MSps (2,048,000 Hz) and you use a `Rational Resampler` with `Decimation` set to 4, what will be the input `Sample Rate` to the `Quadrature Demod` block? What `Gain` value would be a good starting point for the `Quadrature Demod` block, assuming a maximum FM deviation of 75 kHz?

**Answer:**
*   Input `Sample Rate` to `Quadrature Demod` = `2,048,000 Hz / 4` = `512,000 Hz` (or 512 kSps).
*   `Gain` calculation: `Gain = Sample_Rate / (2 * pi * Max_Frequency_Deviation)`
    `Gain = 512,000 Hz / (2 * pi * 75,000 Hz)`
    `Gain ≈ 512,000 / 471,238.89`
    `Gain ≈ 1.0865`

**Question 3:**
Why is it often beneficial to use a `Rational Resampler` before the `Quadrature Demod` block?

**Answer:**
Using a `Rational Resampler` to reduce the sample rate (decimate) before demodulation serves several purposes:
1.  **Reduced Computational Load:** Lower sample rates require less processing power for subsequent blocks.
2.  **Improved Demodulator Performance:** Some demodulator implementations might perform better at lower sample rates, especially if the internal filters are designed with that in mind.
3.  **Easier Gain Calculation:** Calculating the correct gain for the `Quadrature Demod` becomes simpler with a known, reduced sample rate.
4.  **Potential Noise Reduction:** Intermediate filtering or resampling can help remove out-of-band noise before it reaches the demodulator.

**Question 4:**
What is the role of a Low-Pass Filter in the context of FM reception, and where is it implicitly or explicitly implemented in the GNU Radio flowgraph?

**Answer:**
The LPF is crucial for removing high-frequency noise and limiting the demodulated audio signal to its intended bandwidth (e.g., 20 Hz to 15 kHz). In a typical FM receiver flowgraph:
*   **Implicitly:** It is part of the internal workings of the `Quadrature Demod` block.
*   **Explicitly (optional):** An additional `Low Pass Filter` block can be placed *after* the `Quadrature Demod` block for finer control over the audio bandwidth.

### 6. Important Points to Remember

*   **Accurate Frequency Tuning:** Ensure the `Center Frequency` in your `RTL-SDR Source` is set precisely to the FM station you want to receive.
*   **Appropriate Sample Rate:** The `Sample Rate` in the `RTL-SDR Source` must be high enough to capture the entire bandwidth of the FM signal (at least 200 kHz, but higher is often better for flexibility).
*   **Gain Adjustment:** The `Gain` in the `RTL-SDR Source` is critical. Too low, and you won't receive the signal; too high, and you'll get clipping and distortion. Experiment to find the sweet spot.
*   **`Quadrature Demod` Gain is Key:** This is the most sensitive parameter for FM demodulation. Incorrect gain leads to distorted or unintelligible audio. The formula `Sample_Rate / (2 * pi * Max_Frequency_Deviation)` is a starting point.
*   **Resampling for Efficiency:** Use `Rational Resampler` to reduce the sample rate after the source and before the demodulator to lessen the computational burden.
*   **Visualizers are Your Friend:** Use `Frequency Sink` and `Waterfall Sink` to observe the signal spectrum and ensure you are tuned correctly and that the signal occupies the expected bandwidth.
*   **Audio Output:** Ensure your `Audio Sink` is configured correctly to hear the demodulated audio.

### 7. Alignment with Course Outcomes

*   **CO1: Setup simple prototype circuits for waveform coding and digital modulation techniques working in a team.**
    *   This topic directly addresses the "digital modulation techniques" aspect by implementing a practical FM receiver. While it doesn't involve physical circuits, the GNU Radio flowgraph acts as a software-defined "prototype circuit." The team aspect is assumed in a lab setting where students collaborate on building and testing the flowgraph.
    *   **Knowledge Level:** K3 (Application) - Students are applying their knowledge of FM principles to build a working system.

*   **CO3: Develop hands-on skills to emulate a communication system with software-design-radio working in a team.**
    *   This is the most direct alignment. The entire topic is about developing hands-on skills in using GNU Radio (software-defined radio) to emulate a communication system (FM receiver). Students will learn to select, configure, and connect software blocks to achieve a functional outcome.
    *   **Knowledge Level:** K5 (Synthesis/Evaluation) - Students are synthesizing different signal processing blocks into a coherent system and are expected to evaluate its performance (audio quality) and troubleshoot issues.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 8. Textbook and Reference Book Content Integration

*   **The Hobbyist's Guide to the RTL-SDR:** Provides foundational knowledge on SDR hardware, including RTL-SDR dongles, their capabilities, and how to interface them with software. It would explain the initial steps of getting an SDR to work.
*   **Principles of Communication Systems Simulation with Wireless Applications:** Discusses simulation techniques for communication systems. It would cover concepts like sampling, decimation, resampling, and the mathematical principles behind FM demodulation. The book might provide formulas or methods for filter design and parameter selection.
*   **Digital Modulations using Python:** While focused on Python, it likely covers similar signal processing concepts and might use GNU Radio as a comparison or implementation platform. It would reinforce the understanding of digital modulation schemes and their reception.
*   **Modern Digital and Analog Communication Systems (Lathi & Ding):** Provides a strong theoretical foundation for analog modulation techniques like FM, including detailed explanations of the FM spectrum, bandwidth, and the mathematical principles of FM demodulation. This is crucial for understanding *why* the `Quadrature Demod` block works and how to set its parameters.
*   **Communication Systems (Haykin & Moher):** Similar to Lathi & Ding, this textbook offers comprehensive theoretical coverage of analog communication systems, including FM, its properties, and demodulation techniques.
*   **Electronic Communication Systems (Kennedy):** Covers fundamental electronic communication principles, including filters (LPF, BPF), amplifiers, and demodulation methods. It would provide context for the role of filters in signal reception.
*   **Introduction to Analog and Digital Communication (Haykin & Moher):** A more introductory text, likely covering the basics of FM, bandwidth, and common receiver architectures.

This set of notes aims to bridge the theoretical understanding from the textbooks with the practical implementation skills required for CO3, using GNU Radio as the primary tool. The exercises and key points reinforce the practical application of the concepts learned.