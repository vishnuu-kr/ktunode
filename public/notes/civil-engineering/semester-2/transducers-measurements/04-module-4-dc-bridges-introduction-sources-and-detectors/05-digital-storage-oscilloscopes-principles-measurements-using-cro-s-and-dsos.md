---
title: "Digital storage oscilloscopes: principles- Measurements using CRO s and DSOs-"
subject: "TRANSDUCERS & MEASUREMENTS"
module: "Module 4: DC bridges: introduction, sources and detectors"
branch: "Civil Engineering"
semester: 2
topicId: "68b54567d74ec52cc09130bd"
status: "completed"
scrapedAt: "2026-05-20T18:38:52.372Z"
---
# TRANSDUCERS & MEASUREMENTS - Module 4: DC Bridges: Introduction, Sources and Detectors

## Topic: Digital Storage Oscilloscopes (DSOs): Principles, Measurements using CROs and DSOs

Welcome, everyone! Today, we're diving into a fascinating and incredibly useful tool in the world of electronics: the Oscilloscope. Specifically, we'll be exploring the **Digital Storage Oscilloscope (DSO)**. Think of a DSO as your electronic detective, helping you visualize and understand the invisible world of electrical signals. While our module is about DC bridges, understanding oscilloscopes is crucial because they are often used as *detectors* or *indicators* in measurement systems, especially when you need to see the *quality* or *characteristics* of a signal, not just its magnitude.

This topic directly links to several of our course outcomes. We'll be covering **CO4: Explain the concepts of CRO, DSO, various recording devices.** and **CO5: Understand and utilize various measurement systems, enhancing their capability to apply theoretical knowledge in practical scenarios.** By understanding how a DSO works and how to use it for measurements, you'll gain a practical skill that's essential for many applications, aligning with that K2 knowledge level for understanding and utilization. It also implicitly supports **CO3: Illustrate the working principles of electronic measuring instruments…** because the DSO *is* a key electronic measuring instrument.

### 1. From Cathode Ray Oscilloscope (CRO) to Digital Storage Oscilloscope (DSO): A Natural Evolution

Before we get to DSOs, it’s helpful to understand their predecessor: the **Cathode Ray Oscilloscope (CRO)**. Many of you might have seen or even used older oscilloscopes that look quite bulky.

**What is a CRO?** At its heart, a CRO is an instrument that displays a voltage waveform, typically as a two-dimensional plot of one or more signals as a function of time. It uses a **Cathode Ray Tube (CRT)**, which is a vacuum tube. Inside this tube, an electron beam is generated, accelerated, and then deflected by electric fields (in most common oscilloscopes) or magnetic fields. This beam strikes a fluorescent screen, creating a bright spot. The voltage you want to measure is applied to deflection plates, causing the spot to move up or down (vertical deflection), and a sweep generator causes the spot to move horizontally across the screen at a constant speed. This horizontal sweep, when synchronized with the input signal, creates the familiar waveform display on the screen.

Think of it like this: Imagine you're watching a race car on a track. The vertical position of the car (up/down) represents the voltage you're measuring. The horizontal movement across the screen (left to right) is like time passing. The CRO "draws" this path for the electron beam, showing you how the voltage changes over time.

**Why the Evolution? Limitations of CROs:** While revolutionary, CROs had some limitations:
*   **Transient Signals:** They were not very good at capturing and displaying single-shot or transient events. If a signal happened very quickly and then disappeared, a standard CRO would miss it.
*   **No Memory:** Once the signal disappeared, the display vanished. You couldn't save or review the waveform later.
*   **Subjectivity:** Interpreting waveform details could sometimes be subjective, and precise measurements were often cumbersome.
*   **Bulkiness:** CRTs were relatively large and fragile.

This is where the **Digital Storage Oscilloscope (DSO)** comes in. It addresses these limitations by digitizing the signal before storing and displaying it.

### 2. Principles of Digital Storage Oscilloscopes (DSOs)

A DSO essentially takes an analog signal, converts it into digital data, stores that data, and then reconstructs and displays it on a screen (usually an LCD). Let's break down its core principles:

**The Digitization Process:** This is the heart of the DSO. It involves three key steps:

*   **Sampling:** The DSO periodically "takes snapshots" of the incoming analog signal. Imagine taking photos of that race car at regular intervals. The rate at which these snapshots are taken is called the **sampling rate**, measured in samples per second (S/s) or mega-samples per second (MS/s). A higher sampling rate means more snapshots are taken per unit of time, leading to a more accurate representation of the original signal. According to David A. Bell's "Electronic Instrumentation and Measurements," a common rule of thumb for Nyquist-Shannon sampling theorem is that you need to sample at least twice the highest frequency component of your signal to reconstruct it accurately. Many DSOs aim for 5-10 times the bandwidth of the analog front-end.
*   **Quantization:** Each sampled snapshot (voltage level) is then assigned a discrete numerical value. Think of a thermometer with only certain temperature markings (e.g., 0, 10, 20 degrees). You can't record temperatures between these markings precisely; you have to choose the closest one. This process is called quantization. The number of bits used to represent the voltage level determines the **vertical resolution** or accuracy of the measurement. A higher number of bits (e.g., 8-bit, 10-bit, or 12-bit ADCs) means finer voltage increments and thus a more detailed representation of the signal's amplitude.
*   **Encoding/Storage:** The quantized digital values are then stored in the DSO's memory. This is where the "Storage" in DSO comes from. The memory allows the DSO to hold waveforms even after the original signal has gone.

**Key Components of a DSO:**

*   **Vertical Input Amplifiers:** These are similar to the input stages of a CRO, attenuating or amplifying the incoming signal to a suitable level for the Analog-to-Digital Converter (ADC). They also provide impedance matching.
*   **Analog-to-Digital Converter (ADC):** This is the crucial component that performs the sampling, quantization, and encoding. Its performance (sampling rate and resolution) dictates the DSO's capabilities.
*   **Memory:** This stores the digital samples of the waveform. Different types of memory are used, and the size of the memory determines how much waveform data (how long a time window) can be captured. This is often referred to as the "record length."
*   **Horizontal System (Time Base):** This controls the rate at which the ADC samples the signal and how the waveform is displayed horizontally (time per division).
*   **Trigger System:** This is absolutely vital. Just like in a CRO, the trigger tells the DSO *when* to start acquiring data. It allows you to capture a specific part of a repetitive waveform or a single-shot event. You can trigger on rising edges, falling edges, specific voltage levels, pulses, and more. A good trigger system is what allows you to stabilize a waveform on the screen or capture a fleeting glitch.
*   **Display Unit:** Usually an LCD screen that reconstructs the waveform from the stored digital data.
*   **Control Panel:** Buttons, knobs, and menus that allow you to adjust settings like voltage per division, time per division, trigger type, acquisition modes, and perform measurements.

**Types of DSOs (Briefly):**

*   **Real-time DSOs:** These are the most common. They digitize and display signals as they happen. Their performance is primarily limited by the ADC's sampling rate.
*   **Equivalent-Time Sampling (ETS) DSOs:** These are used for very high-frequency repetitive signals. They build up a picture of the waveform by acquiring samples from many repetitions of the signal, effectively creating a higher sampling rate than the ADC might have in real-time. Think of it like piecing together a puzzle from many different vantage points.

### 3. Measurements Using DSOs

Now, let's talk about how we actually *use* this powerful instrument for measurements. This directly relates to **CO5: Understand and utilize various measurement systems...**

DSOs offer a much more versatile and precise way to measure compared to older analog oscilloscopes. You can measure not just voltage but also time-related parameters directly on the screen.

**Common Measurements and How to Perform Them:**

*   **Voltage Measurements:**
    *   **Peak-to-Peak Voltage (Vpp):** The difference between the maximum and minimum voltage of a waveform.
    *   **Amplitude (Vp):** The difference between the maximum voltage and the zero-volt reference.
    *   **RMS Voltage (Vrms):** For AC signals, this is the root-mean-square value, which represents the equivalent DC voltage that would dissipate the same amount of power. DSOs can often calculate this automatically.
    *   **Maximum/Minimum Voltage:** The highest and lowest voltage points captured.

    *How to Measure:*
    1.  Connect your signal to the DSO input.
    2.  Adjust the **Vertical Scale (Volts/Division)** so the waveform occupies a good portion of the screen vertically.
    3.  Use the on-screen **cursors**. These are movable lines (horizontal or vertical) that you can place on the waveform. Most DSOs have automatic measurement functions where you select the type of voltage (e.g., Vpp) and the DSO automatically reads the voltage difference between the highest and lowest points of the displayed waveform. If you need to do it manually, you position the cursors at the peak and trough and read the difference on the display.
    *Example:* Imagine measuring the voltage swing of a simple square wave. You'd set the volts/div to see both the high and low levels clearly. Then, you'd use the cursors to mark the very top of the square wave and the very bottom, and the DSO would tell you the voltage difference.

*   **Time Measurements:**
    *   **Period (T):** The time it takes for one complete cycle of a repetitive waveform.
    *   **Frequency (f):** The reciprocal of the period (f = 1/T). DSOs calculate this directly.
    *   **Rise Time (Tr):** The time it takes for a signal to transition from its low value (typically 10%) to its high value (typically 90%). This is a critical parameter for digital signals, indicating how fast the signal can change.
    *   **Fall Time (Tf):** Similarly, the time from high to low (90% to 10%).
    *   **Pulse Width:** The duration of a single pulse.
    *   **Duty Cycle:** The percentage of time a signal is in its high state within one period.

    *How to Measure:*
    1.  Ensure the waveform is stable using the **trigger controls**. Set the trigger level and slope appropriately.
    2.  Adjust the **Horizontal Scale (Time/Division)** so you can clearly see one or more cycles of the waveform.
    3.  Use the **time cursors**. Place one cursor at the beginning of the event (e.g., the start of a pulse) and another at the end. The DSO will display the time difference. For rise/fall times, you typically place one cursor at the 10% voltage level and another at the 90% voltage level. Many DSOs have automated "rise time" or "pulse width" measurements where you just select the option and the DSO finds these points automatically.
    *Example:* Measuring the frequency of a CPU clock. You’d trigger on the clock signal, set the time base to see a few clock cycles, and then use the cursors to measure the time for one cycle. The DSO would then display the frequency.

*   **Phase Measurements:** For signals that are related but shifted in time (like in AC circuits with different phases), DSOs can help measure this shift. You can measure the time difference between corresponding points (e.g., zero crossings) of two signals (if the DSO has multiple channels) and convert this time difference into a phase angle.

*   **Measuring Glitches and Transients:** This is where DSOs truly shine over CROs. With their digital storage capability and sophisticated triggering, you can capture those elusive, short-lived "glitches" that might be causing problems in your circuit. You can set the DSO to trigger on a specific condition (e.g., a pulse that is too short or a voltage that goes outside a certain range) and capture that event for detailed analysis. A. K. Sawhney’s book often emphasizes the importance of such transient analysis in measurement systems.

**Advanced DSO Features & Measurement Techniques:**

*   **Acquisition Modes:**
    *   **Normal:** Displays only when a trigger event occurs.
    *   **Average:** Reduces noise in repetitive signals by averaging multiple waveforms. This improves signal-to-noise ratio and can reveal the underlying signal more clearly. Think of it like taking many slightly blurry photos and averaging them to get a sharper final image.
    *   **Peak Detect / High Resolution:** Captures the highest and lowest voltage points within each sampling interval, improving vertical resolution and helping to see small variations.
    *   **Persistence:** Allows old waveforms to fade away gradually, showing how often events occur. Useful for spotting infrequent events.

*   **FFT (Fast Fourier Transform):** Many DSOs have a built-in FFT function. This converts a time-domain signal into its frequency-domain components. It tells you what frequencies are present in your signal and their amplitudes. This is incredibly powerful for analyzing noise, identifying harmonics, and understanding the spectral content of a signal.
    *Example:* You might be debugging a noisy power supply. An FFT can help you pinpoint the specific frequencies of the noise, which can then help you design a filter to remove it.

*   **Mask Testing:** You can define a "mask" or a boundary on the screen, and the DSO will check if the incoming signal stays within that mask. If it deviates, it triggers an alert. This is excellent for production testing or ensuring a signal conforms to specifications.

### 4. Connecting DSOs to DC Bridges

While this topic focuses on DSOs, remember Module 4 is about DC bridges. How do DSOs fit in?

*   **Detectors for AC Bridges:** Although we are discussing DC bridges, many bridge circuits are actually used for AC measurements (e.g., Maxwell bridge, Hay bridge, Schering bridge for inductance and capacitance). In such cases, the output of the bridge is an AC voltage that is ideally zero when the bridge is balanced. A CRO or DSO can be used as a highly sensitive detector to observe this AC unbalance voltage. You'd tune the DSO to the bridge frequency and look for the smallest possible amplitude of the unbalance signal on the screen. If you're looking for a DC unbalance, a sensitive voltmeter or galvanometer would be more typical, but if the unbalance causes a very small AC ripple due to noise or instability, a DSO could show that.
*   **Signal Source Analysis:** If the "source" for your DC bridge or any other measurement setup is an electronic circuit, a DSO can be used to verify the characteristics of that source signal (e.g., DC offset, ripple, noise).
*   **General Measurement System Troubleshooting:** If a measurement system involving DC bridges is not performing as expected, a DSO can be invaluable for troubleshooting. You can probe various points in the system to see the voltage levels and signal waveforms, helping to identify where the problem lies.

### Summary and Key Takeaways

*   **DSO vs. CRO:** DSOs digitize signals for storage and analysis, overcoming limitations of CROs like transient capture and lack of memory.
*   **Core Principle:** Sampling, Quantization, and Storage are key to DSO operation.
*   **Key Components:** ADC, Memory, Trigger System, and Display are essential.
*   **Measurements:** DSOs excel at measuring voltage (Vpp, Vrms, amplitude), time (period, frequency, rise/fall time), and can perform advanced analysis like FFT.
*   **Triggering is Crucial:** A well-understood trigger system is vital for capturing meaningful data, especially for non-repetitive signals.
*   **Practicality:** DSOs are indispensable tools for debugging, characterization, and verification in electronic systems. They enhance our ability to understand and utilize measurement systems effectively.

Remember, mastering the DSO is like gaining an extra sense for electronics. It lets you *see* what's happening with your signals, which is fundamental to understanding and fixing any electronic circuit.

---

### Sample Questions with Answers

**1. Conceptual Question:** Explain the difference between sampling rate and vertical resolution in a Digital Storage Oscilloscope. How does each affect the accuracy of a measurement?

**Answer:**
*   **Sampling Rate:** This refers to how often the DSO takes a snapshot (sample) of the incoming analog signal per second. It determines how accurately the DSO can represent the *time-varying* aspect of the signal. A higher sampling rate allows the DSO to capture faster changes and higher frequencies in the signal, reducing aliasing (where high frequencies are misrepresented as lower ones). For accurate waveform reconstruction, the sampling rate should be at least twice the highest frequency component of the signal (Nyquist theorem), but ideally much higher (e.g., 5-10 times the DSO's bandwidth).
*   **Vertical Resolution:** This refers to the number of bits the Analog-to-Digital Converter (ADC) uses to represent the amplitude of each sampled point. It determines how finely the voltage is quantized. A higher vertical resolution (e.g., 10 or 12 bits compared to 8 bits) means more discrete voltage levels are available, resulting in a more accurate representation of the signal's amplitude and smaller voltage variations being visible.

In essence, sampling rate determines *how much time detail* you capture, while vertical resolution determines *how much voltage detail* you capture. Both are critical for accurate measurement.

**2. Exam-Oriented Question:** A student is trying to measure the rise time of a digital pulse using a DSO. They observe that the measured rise time varies significantly each time they capture the signal. What are the most likely causes for this instability, and how can they be resolved?

**Answer:**
The primary reason for an unstable rise time measurement on a DSO is an **inadequate or unstable trigger**.

*   **Cause 1: Poor Triggering:** If the trigger level is set too close to the noise floor, or if the trigger slope (rising/falling edge) is set incorrectly, or if the trigger is set to an edge that is not the primary transition of interest, the DSO might trigger inconsistently or on unwanted parts of the signal (like noise glitches).
    *   **Resolution:**
        *   **Set Trigger Level Appropriately:** Ensure the trigger level is set well above any noise and within the actual voltage range of the pulse transition.
        *   **Select Correct Trigger Slope:** Choose "Rising Edge" if you want to measure the transition from low to high, and "Falling Edge" for high to low.
        *   **Use Trigger Holdoff:** If there are multiple fast transitions, trigger holdoff can prevent the DSO from re-triggering too quickly, ensuring it captures the specific event you want.
        *   **Consider Trigger Modes:** For digital signals, trigger modes like "Pulse Width" or "Runt Pulse" might be more effective than simple edge triggering if the problem is specifically about pulse duration.

*   **Cause 2: Signal Noise:** High levels of noise on the signal can cause the trigger point to fluctuate, leading to inconsistent capture of the rise time.
    *   **Resolution:**
        *   **Use Averaging Mode:** If the signal is repetitive, the DSO's averaging mode can significantly reduce random noise, stabilizing the waveform and the rise time measurement.
        *   **Use Bandwidth Limit:** Many DSOs have a bandwidth limit option. This filters out high-frequency noise that might not be relevant to the signal's fundamental characteristics, potentially stabilizing the trigger and measurement.
        *   **Check Probes and Connections:** Ensure probes are properly connected, terminated, and that any grounding issues are addressed.

*   **Cause 3: Incorrect Time Base Setting:** If the horizontal time base is too fast or too slow, it can make it difficult for the DSO to acquire the transition accurately, affecting measurement stability.
    *   **Resolution:** Adjust the time base so that the rise time occupies a reasonable portion of the screen (e.g., 1-2 divisions) for clear observation and measurement.

By addressing these potential issues, particularly focusing on the trigger setup and noise reduction, the student should be able to achieve stable and accurate rise time measurements.
