---
title: "Familiarize available blocks in GNU radio. Study how signals can be generated and spectrum (or power spectral density) of signals can be analyzed. Study how filtering can be performed."
subject: "COMMUNICATION LAB I"
module: "Module 5: Familiarization with Software Defined Radio (Hardware and Control Software)"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fecba"
status: "completed"
scrapedAt: "2026-05-23T17:54:26.168Z"
---
# COMMUNICATION LAB I: Module 5 - Familiarization with Software Defined Radio (Hardware and Control Software)

## Topic: Familiarize available blocks in GNU Radio, signal generation, spectrum analysis, and filtering.

---

### **1. Introduction to Software Defined Radio (SDR)**

*   **Definition:** Software Defined Radio (SDR) is a radio communication system where components that have been traditionally implemented in hardware (e.g., mixers, filters, amplifiers, modulators/demodulators, detectors) are instead implemented using software on a personal computer or embedded system.
    *   *Reference:* Laufer, C. (2015). *The Hobbyist's Guide to the RTL-SDR*. Emphasizes the accessibility and flexibility of SDR for hobbyists.
    *   *Reference:* Tranter, W. H., Shanmugan, K. S., Rappaport, T. S., & Kosbar, K. L. (2006). *Principles of Communication Systems Simulation with Wireless Applications*. Provides foundational principles for understanding radio communication systems, which SDR aims to emulate.
*   **Advantages of SDR:**
    *   **Flexibility:** Radio functions can be changed via software updates, enabling new features and protocols.
    *   **Cost-effectiveness:** Can be more economical than dedicated hardware, especially for research and experimentation.
    *   **Rapid Prototyping:** Allows for quick iteration and testing of new communication algorithms.
    *   **Accessibility:** Enables individuals to experiment with radio signals and systems without expensive proprietary hardware.
*   **Key Components of an SDR System:**
    *   **Antenna:** Captures or transmits radio waves.
    *   **RF Front-End:** Tuner and amplifier that selects and processes radio frequencies.
    *   **Analog-to-Digital Converter (ADC):** Converts the analog radio signal into a digital stream.
    *   **Digital Signal Processor (DSP):** Performs radio functions in software (e.g., demodulation, filtering, modulation). This is where GNU Radio plays a crucial role.
    *   **Digital-to-Analog Converter (DAC):** Converts the digital stream back to an analog signal for transmission.
    *   **Host Computer/Processor:** Runs the software (e.g., GNU Radio) and controls the SDR hardware.

### **2. GNU Radio: An Overview**

*   **Definition:** GNU Radio is a free and open-source software development toolkit that provides signal processing blocks for implementing software radios. It is a powerful framework for building complex signal processing applications.
    *   *Reference:* Viswanathan, M. (2019). *Digital Modulations using Python*. While focused on Python, it often leverages GNU Radio for simulations and practical implementation, highlighting its role in modern digital communications.
*   **GNU Radio Companion (GRC):** A graphical user interface (GUI) that allows users to design and build signal processing flowgraphs by connecting pre-built blocks. This is the primary tool for familiarization.
*   **Core Concepts in GNU Radio:**
    *   **Flowgraph:** A visual representation of a signal processing system, consisting of interconnected blocks.
    *   **Blocks:** Individual processing units that perform specific functions (e.g., signal generation, filtering, FFT).
    *   **Ports:** Connections between blocks for passing data (streams of samples).
    *   **Messages:** Control signals that can be passed between blocks to alter their behavior.
    *   **Sample Rate:** The number of samples per second processed by the system.
    *   **Data Types:** GNU Radio handles various data types, commonly `float` (complex floating-point numbers) for signals.

### **3. Familiarizing Available Blocks in GNU Radio**

This section focuses on exploring common block categories and specific examples within GNU Radio.

#### **3.1. Signal Generation Blocks**

These blocks create various types of signals that can be used as input to other processing blocks or transmitted.

*   **`Signal Source` Block:**
    *   **Functionality:** Generates a sinusoidal waveform at a specified frequency and amplitude. Can also generate square, triangle, and sawtooth waves.
    *   **Parameters:**
        *   `Signal Type`: Sine, Square, Triangle, Sawtooth.
        *   `Frequency`: The frequency of the generated signal in Hz.
        *   `Amplitude`: The peak amplitude of the signal.
        *   `Offset`: A DC offset added to the signal.
    *   **Example:** Generating a 1 kHz sine wave with an amplitude of 1.0 and an offset of 0.0 at a sample rate of 32000 Hz.

*   **`Constellation Source` Block:**
    *   **Functionality:** Generates complex baseband symbols based on a specified digital modulation scheme (e.g., BPSK, QPSK, 16-QAM).
    *   **Parameters:**
        *   `Constellation`: The constellation points defined for the modulation scheme.
        *   `Samples per symbol`: The number of samples used to represent each symbol.
    *   **Example:** Creating a stream of BPSK symbols.

*   **`Noise Source` Blocks (e.g., `White Gaussian Noise`)**
    *   **Functionality:** Generates random noise, often with a Gaussian distribution, which is crucial for simulating communication channel impairments.
    *   **Parameters:**
        *   `Standard Deviation`: Controls the amplitude of the noise.
    *   **Example:** Adding realistic noise to a generated signal.

*   **`File Source` Block:**
    *   **Functionality:** Reads data from a file (e.g., WAV audio file, raw IQ data) to be processed.

*   **`Vector Source` Block:**
    *   **Functionality:** Generates a signal based on a predefined list of values.

*   **`Sine` Block (also available as `Sine Const`)**:
    *   **Functionality:** Generates a complex sinusoid.
    *   **Parameters:**
        *   `Frequency`: Angular frequency in radians per sample.
        *   `Phase`: Initial phase in radians.
    *   **Example:** Useful for generating carriers or specific frequency components.

#### **3.2. Spectrum Analysis Blocks (Power Spectral Density)**

These blocks analyze the frequency content of a signal, allowing us to visualize its spectrum.

*   **`FFT Sink` Block:**
    *   **Functionality:** Computes the Fast Fourier Transform (FFT) of an input signal and displays the magnitude spectrum. It essentially provides the Power Spectral Density (PSD) estimation.
    *   **Parameters:**
        *   `Window`: The windowing function applied before FFT (e.g., Hamming, Blackman) to reduce spectral leakage.
        *   `Decimation`: Downsamples the input before FFT.
        *   `Number of Bins`: The number of frequency bins in the output FFT.
    *   **Key Concept: FFT:** The FFT transforms a signal from the time domain to the frequency domain, revealing the amplitude of different frequencies present in the signal.
    *   **Key Concept: Spectral Leakage:** Occurs when a signal's frequency does not fall exactly on an FFT bin, causing energy to spread to adjacent bins. Windowing functions mitigate this.
    *   **Example:** Observing the spectrum of a generated sine wave to confirm its frequency.

*   **`Frequency Xlating FIR Filter` (as part of analysis):**
    *   While primarily a filter, understanding its output helps in spectrum analysis. If used to shift frequencies, observing the output spectrum can show the effect of the shift.

*   **`Waterfall Sink` Block:**
    *   **Functionality:** Displays the spectrum of a signal over time, showing how the frequency content changes. It's like an FFT Sink that scrolls.
    *   **Example:** Observing the spectrum of a modulated signal as it changes.

*   **`FPGA FFT` Block (for specific hardware):**
    *   **Functionality:** Hardware-accelerated FFT, offering higher performance when connected to compatible SDR hardware.

#### **3.3. Filtering Blocks**

Filters are used to select or reject specific frequency components from a signal.

*   **`Low Pass Filter` Block:**
    *   **Functionality:** Allows frequencies below a cutoff frequency to pass while attenuating frequencies above it.
    *   **Parameters:**
        *   `Cutoff Frequency`: The frequency below which signals are passed.
        *   `Transition Width`: The range of frequencies between the passband and stopband.
        *   `Decimation`: Downsamples the signal after filtering.
    *   **Example:** Removing high-frequency noise from a signal.

*   **`High Pass Filter` Block:**
    *   **Functionality:** Allows frequencies above a cutoff frequency to pass while attenuating frequencies below it.
    *   **Example:** Removing low-frequency noise or DC offset.

*   **`Band Pass Filter` Block:**
    *   **Functionality:** Allows frequencies within a specific band to pass while attenuating frequencies outside that band.
    *   **Parameters:**
        *   `Center Frequency`: The middle of the frequency band to be passed.
        *   `Bandwidth`: The width of the frequency band to be passed.
    *   **Example:** Isolating a specific communication channel.

*   **`Low Pass FIR Filter` Block:**
    *   **Functionality:** Implements a Finite Impulse Response (FIR) filter for low-pass filtering. FIR filters are known for their linear phase response, which is desirable in many communication systems.
    *   **Parameters:**
        *   `Filter Tap Coefficients`: The coefficients that define the filter's frequency response. These are typically calculated using design tools or the `FIR Filter Design` block.
    *   **Key Concept: FIR Filter:** A filter whose impulse response is of finite duration. It's implemented by convolving the input signal with the filter's coefficients.
    *   *Reference:* Lathi, B. P., & Ding, Z. (2018). *Modern Digital and Analog Communication Systems*. Discusses FIR filter design and their properties in digital signal processing for communications.

*   **`Freq Xlating FIR Filter` Block:**
    *   **Functionality:** Combines a frequency translation (mixing) with an FIR filter. This is very useful for shifting a signal to baseband or to a different intermediate frequency before filtering.
    *   **Parameters:**
        *   `Decimation`: Downsamples the input.
        *   `Interpolation`: Upsamples the input.
        *   `Frequency`: The frequency shift (often the carrier frequency).
        *   `Filter Tap Coefficients`: Coefficients of the FIR filter.
    *   **Example:** Bringing a radio signal down to baseband for demodulation.

*   **`Rational Resampler` Block:**
    *   **Functionality:** Resamples a signal by a rational factor (integer numerator and denominator). This is essential for changing sample rates efficiently when the ratio is not a simple integer.

*   **`Pass Through` Block:**
    *   **Functionality:** A block that simply passes its input to its output without any processing. Useful for flowgraph organization or debugging.

---

### **4. Practical Examples and Flowgraphs**

We will now design simple flowgraphs to demonstrate these concepts.

#### **4.1. Example 1: Generating and Analyzing a Sine Wave**

*   **Objective:** Generate a sine wave and visualize its spectrum.
*   **Flowgraph Design (GRC):**
    1.  Add a `Signal Source` block.
        *   Set `Signal Type` to `Sine`.
        *   Set `Frequency` to `1000` Hz.
        *   Set `Amplitude` to `1.0`.
        *   Set `Offset` to `0.0`.
    2.  Add an `FFT Sink` block.
        *   Set `Window` to `Hamming`.
        *   Set `Number of Bins` to `1024`.
    3.  Connect the output of the `Signal Source` to the input of the `FFT Sink`.
    4.  Set the `Sample Rate` in the GRC options to a suitable value (e.g., `32000` Hz).
*   **Expected Output:** The `FFT Sink` plot should show a prominent peak at approximately 1 kHz. The shape of the peak will be influenced by the window function.

#### **4.2. Example 2: Low Pass Filtering a Signal with Noise**

*   **Objective:** Generate a sine wave, add Gaussian noise, and then filter out the noise using a low-pass filter.
*   **Flowgraph Design (GRC):**
    1.  Add a `Signal Source` block (e.g., 1 kHz sine wave).
    2.  Add a `White Gaussian Noise` block.
        *   Set `Standard Deviation` to a value that creates noticeable noise (e.g., `0.5`).
    3.  Add a `Add` block (or `Vector Add`).
        *   Connect the output of the `Signal Source` to one input of the `Add` block.
        *   Connect the output of the `White Gaussian Noise` block to the other input of the `Add` block. This creates a signal with noise.
    4.  Add a `Low Pass Filter` block.
        *   Set `Cutoff Frequency` to slightly above the signal frequency (e.g., `2000` Hz).
        *   Set `Transition Width` to a reasonable value (e.g., `1000` Hz).
        *   Set `Decimation` to `1`.
    5.  Add an `FFT Sink` block to visualize the spectrum *before* filtering.
    6.  Add another `FFT Sink` block to visualize the spectrum *after* filtering.
    7.  Connect the output of the `Add` block to the input of the first `FFT Sink`.
    8.  Connect the output of the `Add` block to the input of the `Low Pass Filter`.
    9.  Connect the output of the `Low Pass Filter` to the input of the second `FFT Sink`.
    10. Set the `Sample Rate` (e.g., `32000` Hz).
*   **Expected Output:**
    *   The first `FFT Sink` will show the 1 kHz sine wave peak plus a broad spectrum of noise.
    *   The second `FFT Sink` will show a much cleaner peak at 1 kHz, with the noise significantly attenuated, especially at higher frequencies.

#### **4.3. Example 3: Frequency Translation and Filtering (Bandpass)**

*   **Objective:** Simulate receiving a signal at an intermediate frequency (IF) and bringing it down to baseband using frequency translation and then filtering it.
*   **Flowgraph Design (GRC):**
    1.  Add a `Signal Source` block (e.g., `100000` Hz sine wave). This represents our desired signal at IF.
    2.  Add a `White Gaussian Noise` block.
    3.  Add an `Add` block to combine the signal and noise.
    4.  Add a `Freq Xlating FIR Filter` block.
        *   Set `Decimation` to `1`.
        *   Set `Frequency` to `-100000` Hz (to shift the 100 kHz signal down to DC/baseband).
        *   **Important:** We need filter coefficients. For this example, we can create a simple low-pass FIR filter that acts as our IF filter. In a real scenario, you'd use the `FIR Filter Design` block or provide coefficients calculated elsewhere. For this exercise, let's assume we've pre-calculated coefficients for a low-pass filter with a cutoff frequency slightly above 0 Hz (after translation) and a reasonable transition width.
        *   *Note on Coefficients:* Designing optimal FIR filters is a complex topic covered in digital signal processing. For practical GNU Radio usage, the `FIR Filter Design` block is invaluable. Let's assume we've designed a low-pass filter with a cutoff around 50 kHz and a transition width of 20 kHz, then sampled its coefficients.
    5.  Add an `FFT Sink` block to observe the spectrum *before* translation and filtering.
    6.  Add another `FFT Sink` block to observe the spectrum *after* translation and filtering.
    7.  Connect the output of the `Add` block to the input of the first `FFT Sink`.
    8.  Connect the output of the `Add` block to the input of the `Freq Xlating FIR Filter`.
    9.  Connect the output of the `Freq Xlating FIR Filter` to the input of the second `FFT Sink`.
    10. Set the `Sample Rate` to a sufficiently high value (e.g., `400000` Hz) to capture the 100 kHz signal and its bandwidth.
*   **Expected Output:**
    *   The first `FFT Sink` will show the 100 kHz sine wave peak and noise.
    *   The second `FFT Sink` will show the sine wave peak now centered at 0 Hz (baseband), with the filtering removing out-of-band noise and potentially other unwanted signals. The `Freq Xlating FIR Filter` effectively acts as both a mixer and a low-pass filter in this configuration.

---

### **5. Practicing with RTL-SDR Hardware (Connecting to the Real World)**

*(This section assumes you have an RTL-SDR dongle connected and the necessary drivers installed.)*

*   **Objective:** Tune into a radio signal using the RTL-SDR and analyze its spectrum.
*   **Flowgraph Design (GRC):**
    1.  Add an `RTL-SDR Source` block.
        *   Set `Frequency` to a known broadcast frequency (e.g., an FM radio station).
        *   Set `Sample Rate` to a value that covers the bandwidth of interest (e.g., `2.048e6` or `2.4e6` for FM).
        *   Set `Gain` appropriately (auto or manual).
    2.  Add an `FFT Sink` block.
        *   Set `Window` to `Hanning` or `Blackman-Harris`.
        *   Set `Number of Bins` to `2048` or `4096`.
    3.  Add a `Waterpower` block (shows power over time and frequency, a variation of Waterfall).
        *   Connect the output of the `RTL-SDR Source` to the input of both sinks.
    4.  Run the flowgraph.
*   **Expected Output:** The `FFT Sink` will display the spectrum around the tuned frequency. You should be able to identify peaks corresponding to strong radio signals (like FM broadcast stations). The `Waterpower` plot will show how these signals persist over time.

---

### **6. Key Concepts to Remember**

*   **SDR Flexibility:** The power of changing radio functions through software.
*   **GNU Radio:** A visual programming environment for building signal processing applications.
*   **Flowgraphs:** The building blocks of GNU Radio applications.
*   **Sample Rate:** Crucial for capturing signals correctly.
*   **FFT:** The fundamental tool for spectrum analysis.
*   **Windowing:** Essential for accurate FFT results by mitigating spectral leakage.
*   **Filters:** Used to shape the frequency content of signals (low-pass, high-pass, band-pass).
*   **Frequency Translation:** Moving a signal from its carrier frequency to baseband or an IF.
*   **RTL-SDR:** A low-cost entry point to real-world SDR experimentation.
*   **CO3 Alignment:** These practical exercises directly contribute to developing hands-on skills to emulate communication systems using SDR.

---

### **7. Practice Questions**

1.  **Question:** You want to generate a pure 500 Hz sine wave at a sample rate of 48000 Hz. What parameters would you set for the `Signal Source` block?
    *   **Answer:** `Signal Type`: `Sine`, `Frequency`: `500` Hz, `Amplitude`: `1.0` (or any desired amplitude), `Offset`: `0.0`. The `Sample Rate` in the global options should be set to `48000` Hz.

2.  **Question:** You have a signal that contains a desired 10 kHz component and significant noise above 20 kHz. Which type of filter would you use, and what would be a reasonable cutoff frequency and transition width?
    *   **Answer:** A `Low Pass Filter` would be appropriate. A cutoff frequency slightly above 10 kHz (e.g., `12000` Hz) and a transition width that smoothly attenuates frequencies above that (e.g., `8000` Hz) would be suitable.

3.  **Question:** When using an `FFT Sink`, you notice that your signal's peak is broadened and has "skirts." What is this phenomenon called, and how can you reduce it?
    *   **Answer:** This phenomenon is called **spectral leakage**. It can be reduced by applying a **windowing function** (e.g., Hamming, Blackman-Harris) to the input signal before performing the FFT.

4.  **Question:** You are using the `Freq Xlating FIR Filter` block to bring a signal centered at 70 kHz down to baseband. If your sample rate is 300 kHz, what `Frequency` parameter would you set in the `Freq Xlating FIR Filter` block?
    *   **Answer:** You would set the `Frequency` parameter to `-70000` Hz to shift the signal from 70 kHz down to 0 Hz (baseband).

5.  **Question:** Explain the primary difference between the `FFT Sink` and the `Waterfall Sink` blocks in GNU Radio.
    *   **Answer:** The `FFT Sink` displays a single snapshot of the signal's frequency spectrum at a given moment. The `Waterfall Sink` displays the spectrum over time, showing how the frequency content evolves, often scrolling downwards as new data arrives.

---

### **8. Connection to Course Outcomes**

*   **CO1: Setup simple prototype circuits for waveform coding and digital modulation techniques working in a team.**
    *   This module provides the foundation for understanding the building blocks (signal generation, filtering) that are essential for waveform coding and modulation. While GRC is software, the concepts translate directly to hardware prototyping. The team aspect can be applied by collaborating on GRC flowgraph design.
*   **CO2: Simulate the error performance of a digital communication system using standard binary and M-ary modulation schemes.**
    *   Understanding signal generation (e.g., `Constellation Source`) and filtering is crucial for simulating modulation schemes. Analyzing the spectrum of these modulated signals helps in understanding their bandwidth requirements and potential for interference, which are factors affecting error performance.
*   **CO3: Develop hands-on skills to emulate a communication system with software-design-radio working in a team.**
    *   This module directly addresses CO3. By familiarizing with GNU Radio blocks, designing flowgraphs for signal generation, analysis, and filtering, and potentially interacting with hardware like the RTL-SDR, students gain essential hands-on experience in building and understanding software-defined communication systems. The practical examples provided are direct implementations of this outcome.

---
This set of notes provides a comprehensive overview of the GNU Radio blocks for signal generation, spectrum analysis, and filtering, along with practical examples and their connection to the course outcomes. Remember to experiment with the blocks and parameters in GNU Radio Companion to gain a deeper understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
