---
title: "(b) Measurement of electrical variables and frequency using CRO and DSO"
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 22: Demo Experiments:"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d0f"
status: "completed"
scrapedAt: "2026-05-23T16:12:10.147Z"
---
# CIRCUITS AND MEASUREMENTS LAB - Module 22: Demo Experiments

## Topic: (b) Measurement of Electrical Variables and Frequency using CRO and DSO

**Learning Outcomes:** Upon completion of this topic, students will be able to:

*   Understand the fundamental operating principles of Cathode Ray Oscilloscope (CRO) and Digital Storage Oscilloscope (DSO).
*   Measure various electrical quantities such as voltage (peak, RMS, peak-to-peak), current (indirectly via voltage across a known resistor), and time period using CRO and DSO.
*   Determine the frequency of a given waveform using CRO and DSO.
*   Differentiate between the functionalities and advantages of CRO and DSO.
*   Interpret and analyze waveforms displayed on the CRO and DSO screens.

---

### 1. Introduction to Oscilloscopes

Oscilloscopes are versatile electronic test instruments used to observe and analyze the characteristics of electrical signals, particularly voltage signals as a function of time. They are indispensable tools in electronics laboratories for troubleshooting, characterization, and measurement.

---

### 2. Cathode Ray Oscilloscope (CRO)

#### 2.1 Principle of Operation

A CRO uses a **Cathode Ray Tube (CRT)** to display waveforms. The key components and their functions are:

*   **Electron Gun:** Generates a beam of electrons.
    *   **Heater:** Heats the cathode.
    *   **Cathode:** Emits electrons via thermionic emission.
    *   **Control Grid:** Controls the intensity of the electron beam.
    *   **Accelerating Anode:** Accelerates the electrons.
    *   **Focusing Anode:** Focuses the electron beam into a sharp spot.
*   **Deflection System:** Controls the path of the electron beam.
    *   **Vertical Deflection Plates (Y-plates):** Deflect the beam vertically in response to the input signal. The deflection is proportional to the applied voltage.
    *   **Horizontal Deflection Plates (X-plates):** Deflect the beam horizontally. In normal operation, a **Time Base Generator** provides a sawtooth voltage to these plates, causing the beam to sweep across the screen from left to right at a constant speed, thus displaying voltage as a function of time.
*   **Screen:** A fluorescent screen that glows when struck by the electron beam, creating a visible trace.

#### 2.2 CRO Controls

Understanding the primary controls is crucial for effective usage:

*   **Intensity:** Controls the brightness of the spot.
*   **Focus:** Adjusts the sharpness of the spot.
*   **Vertical Position (Y-position):** Moves the trace up or down.
*   **Horizontal Position (X-position):** Moves the trace left or right.
*   **Vertical Gain/Volts/Div (Y-axis):** Sets the sensitivity of the vertical deflection in volts per division. This allows you to scale the voltage on the screen.
*   **Horizontal Sweep Speed/Time/Div (X-axis):** Sets the sweep speed of the time base in seconds per division. This allows you to scale the time on the screen.
*   **Trigger Controls:**
    *   **Trigger Level:** Sets the voltage level at which the sweep will be initiated.
    *   **Trigger Source:** Selects the signal (internal, external, or line) to trigger the sweep.
    *   **Trigger Mode (Auto, Normal, Single):**
        *   **Auto:** The sweep restarts periodically even without a trigger signal, ensuring a trace is always visible.
        *   **Normal:** The sweep starts only when a trigger signal is received.
        *   **Single:** The sweep starts once upon receiving a trigger signal and then stops, useful for capturing transient events.

#### 2.3 Measurement Techniques using CRO

**a) Voltage Measurement:**

1.  **Connect the input signal** to the vertical input (Y-input) of the CRO, typically through a probe.
2.  **Set the Volts/Div control** to an appropriate range so that the waveform occupies a significant portion of the screen vertically.
3.  **Use the Vertical Position control** to align the zero voltage level of the waveform (if discernible) or a reference point with a horizontal graticule line.
4.  **Measure the vertical distance** (in divisions) from the zero level (or reference) to the peak of the waveform.
5.  **Calculate the peak voltage:**
    $V_{peak} = \text{(Number of vertical divisions)} \times \text{(Volts/Div setting)}$
6.  **Peak-to-Peak Voltage ($V_{pp}$):** Measure the total vertical distance between the positive and negative peaks.
    $V_{pp} = \text{(Number of vertical divisions between peaks)} \times \text{(Volts/Div setting)}$
7.  **RMS Voltage ($V_{rms}$) for Sinusoidal Waves:** For a pure sine wave, $V_{rms} = V_{peak} / \sqrt{2}$.
    $V_{rms} = V_{pp} / (2\sqrt{2})$

**b) Time Period and Frequency Measurement:**

1.  **Connect the input signal** to the vertical input.
2.  **Set the Time/Div control** to an appropriate range to display at least one complete cycle of the waveform horizontally.
3.  **Use the Horizontal Position control** to align the start of a cycle with a vertical graticule line.
4.  **Measure the horizontal distance** (in divisions) occupied by one complete cycle of the waveform.
5.  **Calculate the Time Period (T):**
    $T = \text{(Number of horizontal divisions for one cycle)} \times \text{(Time/Div setting)}$
6.  **Calculate the Frequency (f):** Frequency is the reciprocal of the time period.
    $f = 1 / T$

**c) Current Measurement (Indirect):**

Current cannot be directly measured by a standard CRO. However, it can be measured indirectly by measuring the voltage across a known series resistor ($R_{series}$) placed in the circuit.

1.  **Insert a known resistor ($R_{series}$) in series** with the component through which current is to be measured.
2.  **Measure the voltage ($V_{Rs}$) across $R_{series}$** using the CRO.
3.  **Calculate the current ($I$)** using Ohm's Law:
    $I = V_{Rs} / R_{series}$
    The CRO will display the voltage waveform across the resistor, from which you can determine the peak, RMS, or peak-to-peak current.

#### 2.4 Advantages of CRO

*   Provides a visual representation of the waveform, aiding in understanding signal behavior.
*   Can display multiple waveforms simultaneously (dual-trace CROs).
*   Can measure various electrical parameters directly from the screen.
*   Versatile for analyzing complex signals.

#### 2.5 Limitations of CRO

*   Analog nature can lead to parallax error in readings.
*   Limited bandwidth compared to modern digital instruments.
*   Requires manual interpretation of waveforms.
*   The electron beam can be damaged by improper operation (e.g., leaving intensity high without a signal).

---

### 3. Digital Storage Oscilloscope (DSO)

A DSO converts an analog input signal into a digital format, stores it in memory, and then displays it on a digital screen.

#### 3.1 Principle of Operation

1.  **Analog-to-Digital Converter (ADC):** The input analog signal is sampled at a high rate by the ADC, converting it into a sequence of digital values.
2.  **Memory:** These digital values are stored in the DSO's memory.
3.  **Microprocessor/DSP:** A microprocessor processes the stored digital data.
4.  **Display:** The processed digital data is then reconstructed and displayed on a digital screen (LCD, LED).

#### 3.2 DSO Controls

DSOs have similar controls to CROs for basic setup (intensity, focus, position, volts/div, time/div, trigger), but with additional digital features:

*   **Sampling Rate:** Determines how many samples are taken per second. Higher sampling rates allow for measurement of higher frequencies.
*   **Memory Depth:** The amount of memory available to store waveform data. Deeper memory allows for capturing longer time records at higher sampling rates.
*   **Acquisition Modes:**
    *   **Sample:** The most basic mode, samples the signal at the specified rate.
    *   **Peak Detect:** Captures the highest and lowest signal values between samples, useful for detecting glitches.
    *   **Average:** Averages multiple waveforms to reduce random noise and reveal the underlying signal.
    *   **High Resolution:** Achieves higher effective vertical resolution by averaging multiple samples within each display interval.
*   **Cursors:** On-screen markers that can be moved to precisely measure voltage, time, and frequency between two points on the waveform.
*   **Automatic Measurements:** DSOs can automatically calculate and display various parameters like RMS voltage, frequency, period, rise time, fall time, etc., eliminating manual calculations.
*   **FFT (Fast Fourier Transform):** Many DSOs include an FFT function to analyze the frequency spectrum of a signal.

#### 3.3 Measurement Techniques using DSO

DSOs simplify measurements significantly due to their digital nature and automated functions.

**a) Voltage Measurement:**

1.  **Connect the input signal.**
2.  **Select the appropriate channel** and **Volts/Div setting**.
3.  **Set the trigger** to stabilize the waveform.
4.  **Use the built-in measurement functions:** Select "Voltage," "Vrms," "Vpeak," or "Vpp" from the measurement menu. The DSO will automatically display the selected voltage value.
5.  **Alternatively, use cursors:** Place two horizontal cursors at the desired voltage levels (e.g., zero and peak) and read the voltage difference displayed by the DSO.

**b) Time Period and Frequency Measurement:**

1.  **Connect the input signal.**
2.  **Select the appropriate channel** and **Time/Div setting**.
3.  **Set the trigger** to stabilize the waveform.
4.  **Use the built-in measurement functions:** Select "Frequency" or "Period" from the measurement menu. The DSO will automatically display the values.
5.  **Alternatively, use cursors:** Place two vertical cursors at the start and end of one cycle. The DSO will display the time difference ($\Delta$T), from which you can calculate frequency ($f = 1 / \Delta T$).

**c) Current Measurement (Indirect):**

Similar to CRO, current is measured indirectly via a series resistor.

1.  **Insert a known resistor ($R_{series}$) in series.**
2.  **Measure the voltage ($V_{Rs}$) across $R_{series}$** using the DSO.
3.  **Use the DSO's measurement functions** to get $V_{Rs}$ (e.g., Vrms).
4.  **Calculate the current ($I$)**:
    $I = V_{Rs} / R_{series}$

#### 3.4 Advantages of DSO

*   **Digital Accuracy:** Eliminates parallax error.
*   **Waveform Storage:** Allows saving and recalling waveforms for later analysis.
*   **Automated Measurements:** Speeds up the measurement process and reduces errors.
*   **Advanced Analysis:** Features like FFT, zooming, and advanced triggering.
*   **Better Noise Reduction:** Averaging modes significantly improve signal-to-noise ratio.
*   **Higher Bandwidth and Sampling Rates:** Capable of measuring faster signals.
*   **Portability and Connectivity:** Many DSOs are compact and can connect to computers for data logging and analysis.

#### 3.5 Limitations of DSO

*   **Quantization Error:** The ADC introduces a small error due to the finite resolution of digital representation.
*   **Aliasing:** If the sampling rate is not at least twice the highest frequency component of the signal (Nyquist theorem), the DSO may display incorrect waveforms.
*   **Cost:** Generally more expensive than basic CROs.

---

### 4. Comparison: CRO vs. DSO

| Feature               | Cathode Ray Oscilloscope (CRO)                               | Digital Storage Oscilloscope (DSO)                                 |
| :-------------------- | :----------------------------------------------------------- | :----------------------------------------------------------------- |
| **Display**           | Analog, fluorescent screen                                   | Digital screen (LCD, LED)                                        |
| **Signal Processing** | Direct deflection of electron beam                           | Sampling, digitization, digital processing, reconstruction         |
| **Measurement**       | Manual reading from graticule, calculations                  | Automated measurements, cursor-based measurements                  |
| **Waveform Storage**  | Not possible (except specialized memory scopes)              | Possible, can save to memory or external storage                   |
| **Analysis**          | Limited to visual interpretation                             | Advanced analysis (FFT, averaging, zooming, glitch detection)      |
| **Bandwidth**         | Generally lower                                              | Generally higher                                                   |
| **Triggering**        | Basic triggering                                             | Advanced triggering options (edge, pulse width, logic, runt)       |
| **Noise Reduction**   | Limited (e.g., repetitive sweep)                             | Effective (averaging mode)                                         |
| **Accuracy**          | Susceptible to parallax error, manual reading errors         | Higher accuracy, limited by ADC resolution and sampling rate       |
| **Aliasing**          | Not susceptible                                              | Susceptible if sampling rate is too low                            |
| **Cost**              | Generally lower for basic models                             | Generally higher                                                   |

---

### 5. Relating to Course Outcomes

This topic directly contributes to several Course Outcomes:

*   **CO1 (Analyse voltage current phasor relations of RLC circuits):** While this experiment doesn't directly involve RLC circuits, understanding how to measure voltage and frequency accurately using oscilloscopes is fundamental for analyzing AC circuits where phasor analysis is applied. The time-varying nature of voltages and currents in RLC circuits is best visualized and measured with an oscilloscope.
*   **CO4 (Determine the calibration characteristics of various meters used in electrical systems):** Oscilloscopes themselves are measurement instruments. Understanding their operation and how to obtain accurate readings is a prerequisite for understanding calibration concepts for other meters. You can even use an oscilloscope to verify the readings of other instruments under controlled signal conditions.
*   **Implied understanding of electrical variables:** The core of this topic is the measurement of fundamental electrical variables (voltage, frequency) which are key to understanding all other electrical systems and phenomena.

---

### 6. Important Points to Remember

*   **Always start with the lowest sensitivity (highest Volts/Div) and slowest sweep speed (highest Time/Div) when first connecting a signal.** This protects the instrument and helps you find the signal.
*   **Proper triggering is essential for a stable waveform display.** Set the trigger level within the signal's amplitude and choose the correct source and mode.
*   **For accurate measurements, use the graticule lines on the screen.**
*   **Be aware of the probe's attenuation factor (usually 1x or 10x).** Ensure the oscilloscope's channel setting matches the probe being used. A 10x probe reduces the signal amplitude by a factor of 10, which also increases the effective input impedance, making it less loading to the circuit.
*   **Understand the Nyquist-Shannon sampling theorem** when using DSOs to avoid aliasing. The sampling rate must be at least twice the highest frequency component of the signal.
*   **For current measurement, always use a known, suitable series resistor.** The resistor should be small enough not to significantly affect the circuit's operation but large enough to produce a measurable voltage.

---

### 7. Practice Questions & Exercises

**Question 1:**
A sinusoidal voltage waveform is displayed on a CRO. The peak voltage is measured to be 4 vertical divisions. The Volts/Div setting is 5 V/div.
a) Calculate the peak voltage of the waveform.
b) Calculate the RMS voltage of the waveform.

**Answer 1:**
a) Peak Voltage ($V_{peak}$) = Number of divisions × Volts/Div = 4 div × 5 V/div = **20 V**.
b) For a sinusoidal waveform, $V_{rms} = V_{peak} / \sqrt{2} = 20 V / \sqrt{2} \approx **14.14 V**.

**Question 2:**
A DSO is used to measure the time period of a square wave. One complete cycle of the square wave occupies 6 horizontal divisions. The Time/Div setting on the DSO is 2 ms/div.
a) Calculate the time period of the waveform.
b) Calculate the frequency of the waveform.

**Answer 2:**
a) Time Period (T) = Number of divisions × Time/Div = 6 div × 2 ms/div = 12 ms = **0.012 s**.
b) Frequency (f) = 1 / T = 1 / 0.012 s $\approx **83.33 Hz**.

**Question 3:**
When measuring a signal with a DSO, what phenomenon can occur if the sampling rate is less than twice the signal's highest frequency component? How can you mitigate this?

**Answer 3:**
The phenomenon is called **aliasing**. It causes the DSO to display a waveform that is different from the actual input signal, often appearing at a lower frequency.
**Mitigation:** Increase the sampling rate of the DSO to be at least twice the highest frequency component of the signal, or use an anti-aliasing filter before the ADC.

**Question 4:**
You are measuring the voltage across a 100 $\Omega$ resistor in series with an unknown load, and you observe a sinusoidal voltage waveform on the CRO with a peak-to-peak value of 2 divisions. The Volts/Div setting is 1 V/div, and the Time/Div is 5 ms/div.
a) Calculate the peak-to-peak voltage across the resistor.
b) Calculate the RMS voltage across the resistor.
c) Calculate the RMS current flowing through the resistor and the load.

**Answer 4:**
a) Peak-to-Peak Voltage ($V_{pp}$) = Number of divisions × Volts/Div = 2 div × 1 V/div = **2 V**.
b) RMS Voltage ($V_{rms}$) = $V_{pp} / (2\sqrt{2}) = 2 V / (2\sqrt{2}) = 1 V / \sqrt{2} \approx **0.707 V**.
c) RMS Current ($I_{rms}$) = $V_{rms} / R_{series} = 0.707 V / 100 \Omega \approx **7.07 mA**.

---
