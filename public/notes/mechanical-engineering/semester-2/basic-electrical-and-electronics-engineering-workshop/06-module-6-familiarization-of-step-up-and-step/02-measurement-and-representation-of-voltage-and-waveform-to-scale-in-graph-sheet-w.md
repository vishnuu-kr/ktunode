---
title: "Measurement and representation of voltage and waveform to scale in graph sheet with the help of CRO"
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 6: Familiarization of step up and step"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edefeb4799d95e836d0"
status: "completed"
scrapedAt: "2026-05-20T17:41:39.040Z"
---
# Module 6: Familiarization of Step-Up and Step-Down Circuits

## Topic: Measurement and Representation of Voltage and Waveforms to Scale in a Graph Sheet with the Help of a CRO

Welcome, everyone! In this module, we're going to get hands-on with one of the most fundamental tools in any electrical or electronics workshop: the Cathode Ray Oscilloscope, or CRO. It’s like the X-ray vision for our electrical signals. Today, we're going to focus on how to use this incredible instrument to measure voltages and, more importantly, to visualize and understand electrical waveforms. This directly ties into several of our course outcomes, especially **CO5: Select and Operate various measuring instruments**, as the CRO is a primary measuring instrument. We'll also be touching upon **CO2: Familiarise with transformers, rheostats, batteries and earthing schemes**, as we might be observing the output of such components, and understanding their waveforms is crucial.

### What is a CRO and Why Do We Need It?

Think about electricity. It's invisible, right? We can feel its effects, but seeing the actual "shape" of an electrical signal – how its voltage changes over time – is not something we can do with our eyes. That’s where the CRO comes in. It’s an instrument that allows us to visualize these voltage changes as a graph, plotted on a screen. This graph is called a **waveform**.

Why is this important? Imagine trying to understand how a signal is behaving without seeing it. It’s like trying to describe a song without ever hearing it! By looking at a waveform on the CRO, we can understand:

*   **The voltage level:** How high or low the voltage is at any given moment.
*   **The shape of the signal:** Is it a steady DC voltage, a smooth AC sine wave, a sharp square wave, or something more complex?
*   **The frequency:** How fast the signal is repeating.
*   **The period:** The time it takes for one complete cycle of the waveform.
*   **Distortion or noise:** Are there any unwanted bumps or irregularities in the signal?

This ability to visualize is absolutely critical for troubleshooting, designing, and understanding electrical and electronic circuits. You can't fix what you can't see!

### Understanding the CRO: The Basics

Before we start measuring, let’s get a feel for the CRO itself. The heart of the CRO is the **Cathode Ray Tube (CRT)**. Inside this tube, an electron beam is generated, accelerated, and then directed towards a fluorescent screen. When these electrons hit the screen, they cause a spot of light to appear.

Now, how do we control this spot of light to draw a waveform? That's where the controls come in.

*   **Vertical (Y-axis) Controls:** These control the **up-and-down movement** of the electron beam. This is where we measure **voltage**.
    *   **VOLTS/DIV (Vertical Sensitivity):** This is a crucial knob! It tells you how much voltage corresponds to one vertical division on the screen. For example, if it's set to 1V/DIV, then each square box vertically represents 1 volt. If you set it to 5mV/DIV, then each box represents 5 millivolts. This is how we'll measure the amplitude of our signals.
    *   **Position (Vertical):** This knob allows you to move the entire waveform up or down on the screen. This is useful for centering the waveform or aligning it with a particular reference point.

*   **Horizontal (X-axis) Controls:** These control the **left-and-right movement** of the electron beam, essentially controlling the **time base**.
    *   **TIME/DIV (Sweep Speed):** This knob determines how much time each horizontal division on the screen represents. If it's set to 1ms/DIV, then each box horizontally represents 1 millisecond. This is how we’ll measure the period and frequency of our signals.
    *   **Position (Horizontal):** Similar to the vertical position, this knob lets you move the waveform left or right.

*   **Trigger Controls:** This is perhaps the most important and often the trickiest part to master. The trigger circuit synchronizes the sweep of the electron beam with the input signal. Without proper triggering, the waveform might appear to jump around or be unstable. We usually trigger on the rising or falling edge of the signal. Think of it like a camera flash that only fires when the subject is in the right position – the trigger ensures we see a stable, repeatable image of our waveform.

### Connecting the CRO and Measuring Voltage

To measure a voltage, we need to connect the signal source to the CRO using a **probe**. The probe typically connects to one of the **input channels** on the CRO (usually labeled CH1, CH2, etc.).

Let's say we want to measure the voltage of a battery. We'll connect the positive terminal of the battery to the input channel and the negative terminal to the **ground** terminal of the CRO.

Now, the magic happens on the screen. We'll see a spot of light moving across the screen. To make it look like a waveform, we need to adjust the controls.

1.  **Select the Channel:** Make sure the correct input channel (e.g., CH1) is selected.
2.  **Set the Vertical Scale (VOLTS/DIV):** We need to estimate the voltage of the signal. If it’s a battery, maybe it’s a 5V battery. We’d start with a VOLTS/DIV setting that allows the waveform to fit comfortably on the screen – maybe 2V/DIV or 5V/DIV. If the waveform is too small, we decrease the VOLTS/DIV (e.g., from 5V/DIV to 1V/DIV). If it’s too large and off-screen, we increase the VOLTS/DIV.
3.  **Set the Horizontal Scale (TIME/DIV):** For a DC voltage like a battery, the waveform should ideally be a horizontal line. So, we can set TIME/DIV to a relatively slow speed, like 10ms/DIV or 100ms/DIV, to clearly see this horizontal line.
4.  **Adjust Vertical Position:** Use the vertical position knob to move the horizontal line to a convenient position on the screen, say, along one of the horizontal grid lines.
5.  **Triggering (for DC):** For a stable DC voltage, triggering might not be as critical. Often, the CRO can automatically detect the DC level.

**Measurement Calculation:** Once we have a stable horizontal line, we can measure the voltage. Let’s say our VOLTS/DIV is set to 2V/DIV and the horizontal line is positioned exactly on a grid line. If we wanted to measure the voltage of a 5V battery, and after adjusting VOLTS/DIV to, say, 1V/DIV, the line appears 5 divisions above the center, then the voltage is 5 divisions \* 1V/DIV = 5V.

This is where **CO5** really comes into play. We're selecting an instrument (CRO) and operating it to make a measurement.

#### Example: Measuring a 9V Battery

Imagine you have a 9V battery.
*   You connect it to the CRO.
*   You start with VOLTS/DIV at 5V/DIV. The waveform is too small, barely visible.
*   You change VOLTS/DIV to 2V/DIV. Now you see a clear horizontal line. Let’s say it’s 4.5 divisions above the reference point.
*   **Measurement:** Voltage = 4.5 divisions \* 2V/DIV = 9V. Perfect!

### Visualizing Waveforms: AC Signals

Now, let’s move to AC signals, like those from a transformer or a function generator. These signals change over time, creating a distinct waveform.

Let's take a **sine wave** as an example. It looks like a smooth, undulating curve.

1.  **Connect the Signal:** Connect your AC signal source (e.g., a function generator set to produce a sine wave) to the CRO input.
2.  **Set Vertical Scale (VOLTS/DIV):** We need to find the **peak voltage** ($V_p$) of the sine wave. The VOLTS/DIV setting determines how many volts each vertical division represents. We'll adjust it so that the highest point (peak) of the sine wave sits nicely on the screen.
    *   If your function generator is set to output a 5V sine wave, it usually means a **peak-to-peak voltage** ($V_{pp}$) of 10V (from +5V to -5V). So, the peak voltage ($V_p$) is 5V.
    *   To display this clearly, you might set VOLTS/DIV to 2V/DIV. In this case, the waveform would reach 5 divisions (5V / 2V/DIV = 2.5 divisions) above the zero line and 2.5 divisions below.
3.  **Set Horizontal Scale (TIME/DIV):** This is where we observe the **period** ($T$) of the waveform. We adjust TIME/DIV until we can see one or more complete cycles of the sine wave clearly.
    *   Let’s say you set TIME/DIV to 1ms/DIV. If you see a complete sine wave occupying 5 horizontal divisions, the period ($T$) is 5 divisions \* 1ms/DIV = 5ms.
4.  **Triggering:** For a sine wave, you’ll typically trigger on the **rising edge** of the waveform. Adjust the trigger level and source (CH1) until the waveform is stable and not jittery.
5.  **Positioning:** Use the horizontal and vertical position knobs to center the waveform and align the zero voltage level with a grid line, if possible.

**Measurement Calculation:**

*   **Peak Voltage ($V_p$):** Count the number of vertical divisions from the zero line (or reference line) to the peak of the waveform. Multiply this by the VOLTS/DIV setting.
    *   *Example:* If the peak is 3 divisions high and VOLTS/DIV is 2V/DIV, then $V_p$ = 3 divisions \* 2V/DIV = 6V.
*   **Peak-to-Peak Voltage ($V_{pp}$):** Count the total number of vertical divisions from the lowest point (trough) to the highest point (peak). Multiply by the VOLTS/DIV setting.
    *   *Example:* If the waveform spans 6 divisions vertically, and VOLTS/DIV is 2V/DIV, then $V_{pp}$ = 6 divisions \* 2V/DIV = 12V.
*   **Period ($T$):** Count the number of horizontal divisions for one complete cycle of the waveform. Multiply this by the TIME/DIV setting.
    *   *Example:* If one cycle takes up 4 divisions, and TIME/DIV is 1ms/DIV, then $T$ = 4 divisions \* 1ms/DIV = 4ms.
*   **Frequency ($f$):** The frequency is the reciprocal of the period: $f = 1/T$.
    *   *Example:* If $T$ = 4ms = 0.004s, then $f$ = 1 / 0.004s = 250 Hz.

This process is a direct application of **CO5**, selecting and operating a measuring instrument.

### Representing Waveforms on Graph Sheets: Scaling

The CRO screen itself is a grid, a sort of built-in graph paper. When we measure and record a waveform, we're essentially transferring what we see on the screen to a more permanent format – a graph sheet. This is crucial for documentation, analysis, and sharing our findings. This also relates to **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits**, as understanding the waveform is part of the circuit's behavior.

To represent a waveform on a graph sheet accurately, we need to use the same principles of scaling that we use on the CRO.

**Steps for Graph Sheet Representation:**

1.  **Draw the Axes:**
    *   The **horizontal axis (X-axis)** will represent **time**.
    *   The **vertical axis (Y-axis)** will represent **voltage**.
2.  **Choose Scales:**
    *   **Vertical Scale (VOLTS/DIV on CRO becomes Volts per cm/mm on graph):** Decide how many volts each centimeter (or millimeter, depending on your graph paper) will represent. This should be consistent with your CRO measurement. For example, if on the CRO you used 1V/DIV and each division was 1cm on the screen, you'd use 1V/cm on your graph.
    *   **Horizontal Scale (TIME/DIV on CRO becomes Time per cm/mm on graph):** Decide how much time each centimeter (or millimeter) will represent. Again, this should match your CRO measurement. If on the CRO you used 1ms/DIV and each division was 1cm, you'd use 1ms/cm on your graph.
3.  **Mark Zero Points:** Clearly mark the zero voltage point on the vertical axis and the zero time point on the horizontal axis.
4.  **Plot Key Points:**
    *   Identify significant points on your observed waveform (peaks, troughs, zero crossings).
    *   Determine the voltage and time for each of these points based on your CRO settings and the number of divisions.
    *   Plot these points on your graph paper according to your chosen scales.
5.  **Draw the Waveform:** Connect the plotted points with a smooth curve, replicating the shape you saw on the CRO screen.
6.  **Label Everything:** This is vital!
    *   Label the axes (e.g., "Voltage (V)" for the Y-axis, "Time (ms)" for the X-axis).
    *   Clearly state your chosen vertical and horizontal scales (e.g., "Vertical Scale: 1V/cm", "Horizontal Scale: 1ms/cm").
    *   Give your graph a title (e.g., "Sine Waveform from Function Generator").

#### Example: Plotting a Square Wave

Let's say you observed a square wave on the CRO with the following settings and characteristics:

*   **VOLTS/DIV:** 5V/DIV
*   **TIME/DIV:** 2ms/DIV
*   **Waveform observed:** A square wave that stays at +10V for half its period and at -10V for the other half. One complete cycle takes up 8 horizontal divisions.

Now, let’s represent this on a graph sheet.

1.  **Axes:** Draw a horizontal time axis and a vertical voltage axis.
2.  **Scales:**
    *   Let's choose a **Vertical Scale:** 5V per 2 cm on the graph. So, 1 cm = 2.5V.
    *   Let’s choose a **Horizontal Scale:** 2ms per 2 cm on the graph. So, 1 cm = 1ms.
3.  **Zero Point:** Mark 0V on the Y-axis and 0ms on the X-axis.
4.  **Plotting:**
    *   The waveform is +10V for half the period. With our vertical scale (1cm = 2.5V), +10V is 10V / 2.5V/cm = 4 cm above the zero line.
    *   The waveform is -10V for the other half. This is 4 cm below the zero line.
    *   One complete cycle takes 8 horizontal divisions. With our horizontal scale (1cm = 1ms), this is 8 divisions \* 2ms/DIV = 16ms. So, the period $T = 16$ms.
    *   The waveform is at +10V for $T/2 = 8$ms and at -10V for $T/2 = 8$ms.
    *   Start at time 0, plot a point 4 cm up. Hold this voltage for 8ms (which is 8 cm on our graph). Then drop to -4 cm (which is -10V) and hold for another 8ms (another 8 cm on our graph).
5.  **Draw:** Connect the points to form a clear square wave.
6.  **Labels:** Label the axes "Voltage (V)" and "Time (ms)". State the scales: "Vertical: 5V/2cm", "Horizontal: 2ms/2cm". Title it "Square Waveform".

This process reinforces our understanding of **CO5** by translating CRO readings to a graphical format.

### Relating to Other Course Outcomes

*   **CO2: Familiarise with transformers, rheostats, batteries and earthing schemes:** Imagine you've just tested a small transformer. The CRO can show you if the output is a clean sine wave, or if it's distorted due to saturation. You can measure the AC voltage output. For a rheostat, you could observe how the voltage across it changes as you vary its resistance. For a battery, as we saw, you can confirm its voltage. Even for earthing, while not directly measured with a waveform, understanding the expected DC and AC voltages in a system helps in safe operation.
*   **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits:** To illustrate a circuit's behavior, you need to know its output voltage and waveform. The CRO allows you to do this. Knowing the waveform helps you select appropriate components (e.g., filters, capacitors) for that circuit. You'll also need the right probes and cables as accessories.
*   **CO1: Demonstrate safety measures against electrical shocks:** When working with any electrical equipment, including CROs and the circuits connected to them, safety is paramount. Always ensure proper grounding, use insulated tools, and be aware of the voltages you are working with. Never touch live wires. The CRO itself can be a high-voltage device internally, so handle it with care.

### Important Points to Remember

*   **Calibration:** Always check if the CRO is calibrated. Many CROs have a "CAL" output terminal that provides a known square wave (e.g., 1kHz, 1V peak-to-peak) which you can use to verify your settings.
*   **Probe Compensation:** Oscilloscope probes often have a compensation adjustment screw. This needs to be adjusted for accurate measurements, especially for square waves, to ensure the probe doesn't distort the signal. You’ll usually see a square wave on the CRO, and you adjust the screw on the probe until the corners of the square wave are sharp and not rounded or overshoot.
*   **DC Offset:** Remember that AC signals often have a DC component (offset). The CRO can often separate or display this DC component. The vertical position knob helps in adjusting the baseline.
*   **Accuracy:** The accuracy of your measurement depends on the accuracy of the CRO's scales and your ability to read them precisely.

### Common Pitfalls and Exam Tips

*   **Forgetting to set VOLTS/DIV and TIME/DIV correctly:** This is the most common mistake! Always ensure your scales are set to display the waveform appropriately.
*   **Poor Triggering:** If your waveform is unstable, check your trigger settings. Make sure the trigger level is within the signal's range and that you've selected the correct trigger source and slope.
*   **Not accounting for Probe Attenuation:** Many probes are "X10" probes. This means they attenuate the signal by a factor of 10 (divide the voltage by 10). The CRO usually has a setting to compensate for this, but if it's not set correctly, your voltage readings will be off by a factor of 10. Make sure the CRO knows whether you are using an X1 or X10 probe.
*   **Reading the Divisions Incorrectly:** Be precise when counting divisions for your measurements. Small errors in counting can lead to significant errors in calculated values.

When asked in an exam to measure a voltage or frequency using a CRO, clearly state your CRO settings (VOLTS/DIV, TIME/DIV), how you counted the divisions, and the final calculated value. If asked to draw a waveform, make sure your graph has properly labeled axes and scales.

---

## Sample Questions and Answers

**1. Conceptual Question:** What is the primary function of the "Trigger" control on a CRO?

**Answer:** The primary function of the trigger control on a CRO is to synchronize the sweep of the electron beam with the input signal. It ensures that the waveform displayed on the screen is stable and repeatable, appearing at the same point on the screen for each sweep. Without proper triggering, AC waveforms would appear to move erratically or be incomplete.

**2. Application Question:** You are given a signal with an unknown frequency and voltage. You connect it to a CRO and observe a waveform. You set VOLTS/DIV to 500mV/DIV and TIME/DIV to 1ms/DIV. The waveform shows a peak voltage 3 divisions above the center line and one complete cycle occupies 5 horizontal divisions. Calculate the peak voltage and frequency of the signal.

**Answer:**
*   **Peak Voltage ($V_p$):**
    *   Number of vertical divisions from center to peak = 3 divisions
    *   VOLTS/DIV setting = 500mV/DIV = 0.5V/DIV
    *   $V_p$ = Number of divisions \* VOLTS/DIV
    *   $V_p$ = 3 divisions \* 0.5V/DIV = 1.5V

*   **Period ($T$):**
    *   Number of horizontal divisions for one cycle = 5 divisions
    *   TIME/DIV setting = 1ms/DIV
    *   $T$ = Number of divisions \* TIME/DIV
    *   $T$ = 5 divisions \* 1ms/DIV = 5ms = 0.005 seconds

*   **Frequency ($f$):**
    *   $f = 1/T$
    *   $f = 1 / 0.005s = 200$ Hz

Therefore, the peak voltage is 1.5V and the frequency is 200 Hz.

**3. Exam-Oriented Question:** Describe the steps you would follow to accurately measure the peak-to-peak voltage of a sine wave using a CRO and then represent this waveform on a graph sheet.

**Answer:**

**Measuring Peak-to-Peak Voltage using CRO:**
1.  **Connect the CRO:** Connect the sine wave source to an input channel (e.g., CH1) of the CRO using an appropriate probe. Ensure the probe is properly compensated.
2.  **Set Time Base (TIME/DIV):** Adjust the TIME/DIV control until one or two complete cycles of the sine wave are visible on the screen.
3.  **Set Vertical Scale (VOLTS/DIV):** Adjust the VOLTS/DIV control so that the entire waveform (from its lowest point to its highest point) fits within the screen's vertical limits without being clipped.
4.  **Adjust Trigger:** Set the trigger source to the input channel being used (e.g., CH1) and adjust the trigger level so that the waveform is stable and does not jitter. Typically, trigger on the rising edge for a sine wave.
5.  **Position the Waveform:** Use the vertical position knob to move the waveform up or down so that its lowest point is clearly visible and preferably aligned with a horizontal grid line.
6.  **Measure Divisions:** Count the total number of vertical divisions between the lowest point (trough) and the highest point (peak) of the sine wave. Let this be $N_{div}$.
7.  **Calculate Peak-to-Peak Voltage ($V_{pp}$):** Multiply the number of vertical divisions by the VOLTS/DIV setting: $V_{pp} = N_{div} \times (\text{VOLTS/DIV setting})$.

**Representing the Waveform on a Graph Sheet:**
1.  **Draw Axes:** Draw a horizontal time axis (X-axis) and a vertical voltage axis (Y-axis).
2.  **Choose Scales:**
    *   **Vertical Scale:** Decide how many Volts each major division (e.g., cm) on your graph paper will represent. This should be a value that allows you to plot the measured peak voltage accurately. For example, if $V_{pp} = 10V$, you might choose 1V/cm or 2V/cm.
    *   **Horizontal Scale:** Decide how much time each major division (e.g., cm) on your graph paper will represent. This should correspond to the time base you used on the CRO and allow you to plot the period accurately. For example, if the observed period was 10ms, you might choose 1ms/cm or 2ms/cm.
3.  **Mark Zero and Scales:** Clearly mark the zero voltage point on the Y-axis and the zero time point on the X-axis. Write down your chosen scales (e.g., "Vertical Scale: 2V/cm", "Horizontal Scale: 1ms/cm").
4.  **Plot Key Points:** Based on your CRO measurements (peak voltage, trough voltage, period), calculate the coordinates of key points (e.g., zero crossings, peaks, troughs) and plot them on the graph paper according to your chosen scales. For a sine wave, the peak voltage will be $V_p = V_{pp}/2$.
5.  **Draw the Curve:** Connect the plotted points with a smooth sinusoidal curve.
6.  **Label:** Title the graph appropriately (e.g., "Sine Waveform Measurement"). Ensure both axes are labeled with units (e.g., Voltage (V), Time (ms)).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
