---
title: "Use appropriate sink in GNU Radio to display the spectrum of signal."
subject: "COMMUNICATION LAB I"
module: "Module 6: FM reception using SDR"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fecbf"
status: "completed"
scrapedAt: "2026-05-23T17:54:28.964Z"
---
# COMMUNICATION LAB I - Module 6: FM Reception using SDR

## Topic: Use Appropriate Sink in GNU Radio to Display the Spectrum of Signal

### Learning Outcomes Covered:

*   **Understanding the role of spectrum display sinks in SDR for signal analysis.**
*   **Selecting and configuring appropriate sinks in GNU Radio for visualizing signal spectra.**
*   **Interpreting spectral plots to identify signal characteristics and potential issues.**
*   **Applying spectrum visualization techniques in the context of FM reception.**

### 1. Introduction to Signal Spectrum Analysis

In communication systems, understanding the frequency content of a signal is crucial for analysis, debugging, and optimization. The **spectrum** of a signal represents its power distribution across different frequencies. For FM reception, analyzing the spectrum helps us:

*   **Identify the center frequency of the FM broadcast band.**
*   **Observe the bandwidth occupied by an FM signal.**
*   **Detect interference from other signals.**
*   **Verify the proper demodulation and filtering of the FM signal.**

**Key Concepts:**

*   **Frequency Domain:** The representation of a signal in terms of its frequency components.
*   **Time Domain:** The representation of a signal as a function of time.
*   **Spectrum Analyzer:** A device or software tool that displays the magnitude of a signal as a function of frequency.
*   **Bandwidth:** The range of frequencies over which a signal has significant power.
*   **Power Spectral Density (PSD):** A function that describes the distribution of power over frequency.

**Textbook Reference:**
*   **Principles of Communication Systems Simulation with Wireless Applications** by Tranter, Shanmugan, Rappaport, & Kosbar (2nd Ed.) discusses spectral analysis techniques in the context of communication system simulation.
*   **Digital Modulations using Python** by Viswanathan provides practical examples of spectral analysis using Python libraries, which can be conceptually linked to SDR tools like GNU Radio.

### 2. GNU Radio and its Visualization Capabilities

GNU Radio is an open-source software development toolkit that provides signal processing blocks for building radio communication systems. It offers a graphical user interface (GUI) for designing signal processing flows, known as **flowgraphs**.

Within GNU Radio, **sinks** are blocks that consume data from the signal processing chain and present it to the user or output it to a file. For spectrum visualization, GNU Radio provides specialized sink blocks.

**Course Outcome Alignment:**
*   **CO3: Develop hands-on skills to emulate a communication system with software-design-radio working in a team. (Knowledge Level: K5)**
    *   This topic directly contributes to CO3 by enabling students to build and visualize signal processing flows for FM reception, a fundamental aspect of emulating a communication system with SDR.

### 3. Appropriate Sinks for Spectrum Display in GNU Radio

GNU Radio offers several sinks that can be used to visualize the spectrum of a signal. The most commonly used and appropriate sinks for this purpose are:

#### 3.1. Waterfall Sink

The **Waterfall Sink** (often named `Waterfall Sink` or similar in the GUI) displays the signal's spectrum over time. It's particularly useful for observing how the spectrum changes dynamically.

**How it works:**
*   The horizontal axis represents frequency.
*   The vertical axis represents time (scrolling downwards).
*   Color intensity represents the signal's power or amplitude at a given frequency and time.

**When to use it:**
*   To identify intermittent signals or interference.
*   To observe the frequency drift of a transmitter.
*   To get a general overview of the spectral activity in a given frequency range.

**Configuration:**
*   **Input:** Takes a complex or float stream of samples representing the signal.
*   **Window:** Often allows selection of windowing functions (e.g., Hann, Hamming) for spectral estimation to reduce leakage.
*   **Gain:** Adjusts the display intensity for better visibility.
*   **Average:** Can average multiple spectral frames for a smoother display.

#### 3.2. FFT Sink (or Frequency Sink)

The **FFT Sink** (or `Frequency Sink`) displays the instantaneous spectrum of the signal at a particular moment in time. It performs a Fast Fourier Transform (FFT) on incoming data chunks to compute the spectrum.

**How it works:**
*   The horizontal axis represents frequency.
*   The vertical axis represents the magnitude (amplitude or power) of the signal at that frequency.

**When to use it:**
*   To precisely identify the center frequency of a signal.
*   To measure the bandwidth of a stable signal.
*   To compare the spectra of different signals.
*   To verify the output of filters.

**Configuration:**
*   **Input:** Takes a complex or float stream of samples.
*   **Sample Rate:** Crucial for correctly scaling the frequency axis. This should match the sample rate of the data being processed.
*   **FFT Size:** Determines the resolution of the frequency display. A larger FFT size provides finer frequency resolution but requires more computation.
*   **Window:** Similar to the Waterfall Sink, windowing functions are important.
*   **Average:** Can be used to average multiple FFT results for a smoother spectrum.
*   **Baseband Frequency:** If the signal is basebanded, this can be used to shift the frequency axis appropriately.

**Textbook Reference:**
*   **The Hobbyist's Guide to the RTL-SDR** by Carl Laufer likely provides practical guidance on using GNU Radio with RTL-SDR dongles, including setting up spectrum visualization blocks.

### 4. Practical Application: Displaying the Spectrum of an FM Signal

To display the spectrum of an FM signal received using an SDR (like an RTL-SDR dongle), you would typically construct a GNU Radio flowgraph that includes:

1.  **Source Block:** An SDR source block (e.g., `RTL-SDR Source`) to capture radio signals.
2.  **Signal Processing Blocks:** Blocks for tuning to the desired FM frequency, applying gain, and potentially filtering.
3.  **Spectrum Display Sink:** Either a `Waterfall Sink` or an `FFT Sink` to visualize the spectrum.

**Example Flowgraph Structure:**

```
[RTL-SDR Source] --> [Frequency Correction (Optional)] --> [Low Pass Filter (Optional)] --> [Waterfall Sink / FFT Sink]
```

**Steps to implement in GNU Radio Companion (GRC):**

1.  **Start GNU Radio Companion (GRC).**
2.  **Add an SDR Source:** Drag and drop an `RTL-SDR Source` block from the "SDR Sources" category onto the canvas.
3.  **Configure the SDR Source:**
    *   **Device Address:** Leave blank if you have only one RTL-SDR.
    *   **Sample Rate:** Set this to a value appropriate for FM reception (e.g., 2 Msps or higher).
    *   **Center Frequency:** Set this to the desired FM station's frequency (e.g., 98.1 MHz for 98,100,000 Hz).
    *   **Gain:** Adjust for optimal signal strength.
4.  **Add a Spectrum Sink:**
    *   Drag and drop a `Waterfall Sink` or `FFT Sink` from the "Visualization" category.
    *   **Connect the Output:** Connect the "Out" port of the `RTL-SDR Source` to the "In" port of the chosen sink.
5.  **Configure the Spectrum Sink:**
    *   **Waterfall Sink:**
        *   **Sample Rate:** Crucial for correct frequency display. Set this to match the `Sample Rate` of your `RTL-SDR Source`.
        *   **FFT Size:** Choose a value that provides a good balance between resolution and performance (e.g., 1024 or 2048).
        *   **Window:** Select a window function like `hann`.
    *   **FFT Sink:**
        *   **Sample Rate:** Set this to match the `Sample Rate` of your `RTL-SDR Source`.
        *   **FFT Size:** Similar considerations as the Waterfall Sink.
        *   **Window:** Select a window function like `hann`.
6.  **Run the Flowgraph:** Click the "Run" button.

You should now see the spectral display showing the FM signal at its center frequency, with its occupied bandwidth.

**Reference:**
*   **Digital Modulations using Python** by Viswanathan provides a conceptual framework for understanding FFTs and their application in signal analysis, which is directly relevant to the operation of GNU Radio's FFT-based sinks.

### 5. Interpreting Spectral Plots for FM Reception

Once the spectrum is displayed, you can observe several characteristics:

*   **Peak:** The highest point on the spectrum indicates the center frequency of the FM signal.
*   **Bandwidth:** The width of the spectrum around the peak, where the signal power is significant. For standard FM, this is typically around 200 kHz.
*   **Sidebands:** The variations in amplitude on either side of the carrier frequency are due to the modulation.
*   **Noise Floor:** The baseline level of the spectrum, representing background noise and interference.
*   **Interference:** Other peaks or elevated noise levels at different frequencies indicate interference from other radio signals.

**Example Interpretation:**

If you tune to an FM station at 98.1 MHz and the `FFT Sink` shows a strong peak centered at 98.1 MHz, with a bandwidth extending roughly 100 kHz on either side, this is a typical FM spectrum. If you see another strong peak at 98.3 MHz, it indicates interference from another station or signal at that frequency.

**Textbook Reference:**
*   **Communication Systems** by Haykin & Moher (5th Ed.) and **Modern Digital and Analog Communication Systems** by Lathi & Ding (5th Ed.) cover the principles of FM modulation and the spectral characteristics of FM signals, which are essential for interpreting the output of the spectrum sinks.

### 6. Important Points to Remember

*   **Sample Rate is Critical:** Ensure the `Sample Rate` parameter in the spectrum sink matches the `Sample Rate` of your SDR source for accurate frequency display.
*   **FFT Size and Resolution:** A larger FFT size gives better frequency resolution but increases computational load.
*   **Windowing:** Always use a window function in spectrum analysis to reduce spectral leakage and improve accuracy.
*   **Gain Adjustment:** Proper gain on the SDR source is essential to get a clear signal without clipping or excessive noise.
*   **Waterfall vs. FFT:** Use the Waterfall Sink for observing dynamic spectral changes and the FFT Sink for precise measurements of static spectral characteristics.
*   **Interpreting Noise Floor:** A high noise floor can indicate a weak signal or poor reception conditions.

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of a spectrum analyzer in the context of SDR?

**Answer:**
The primary purpose of a spectrum analyzer is to display the magnitude of a signal as a function of frequency, allowing users to analyze its frequency content, identify its center frequency and bandwidth, and detect interference.

**Question 2:**
Which two GNU Radio sinks are most commonly used for displaying the spectrum of a received signal?

**Answer:**
The two most commonly used sinks for displaying spectrum are the `Waterfall Sink` and the `FFT Sink` (or `Frequency Sink`).

**Question 3:**
When using an `FFT Sink` to display the spectrum of an FM signal, why is it important to set the `Sample Rate` parameter correctly?

**Answer:**
It is crucial to set the `Sample Rate` parameter correctly in the `FFT Sink` so that the frequency axis of the displayed spectrum is accurate. If the `Sample Rate` is incorrect, the displayed frequencies will be misaligned with the actual frequencies of the received signals.

**Question 4:**
Consider you are trying to tune into an FM radio station at 101.5 MHz. You notice a strong peak in the `Waterfall Sink` that is not centered at 101.5 MHz but rather slightly lower. What could be a potential reason for this observation?

**Answer:**
A potential reason for this observation could be **frequency drift** of the transmitter, or more commonly, **incorrect tuning** of the SDR to the exact center frequency. The `Waterfall Sink` shows the spectrum over time, and if the actual signal center is slightly different from the tuned frequency, the peak will appear shifted. Alternatively, there might be issues with the SDR's internal clock causing a slight frequency offset.

**Exercise:**

1.  **Task:** Set up a GNU Radio flowgraph to receive FM radio using your RTL-SDR.
2.  **Objective:** Tune to a known FM station (e.g., 98.1 MHz) and use the `FFT Sink` to display its spectrum.
3.  **Analysis:**
    *   Identify the center frequency of the observed spectrum. Does it match the tuned frequency?
    *   Estimate the bandwidth occupied by the FM signal.
    *   Observe the noise floor of the spectrum.
    *   If possible, tune to a different FM station and compare its spectrum to the first one.

**Course Outcome Alignment Check:**
*   **CO1 (K3):** This exercise involves setting up a prototype circuit (SDR hardware) and visualizing its output, contributing to understanding waveform coding and modulation.
*   **CO3 (K5):** This directly aligns with developing hands-on skills in emulating a communication system using SDR by demonstrating practical visualization of received signals.

This comprehensive set of notes aims to provide a solid understanding of using spectrum display sinks in GNU Radio for FM reception, aligning with the learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
