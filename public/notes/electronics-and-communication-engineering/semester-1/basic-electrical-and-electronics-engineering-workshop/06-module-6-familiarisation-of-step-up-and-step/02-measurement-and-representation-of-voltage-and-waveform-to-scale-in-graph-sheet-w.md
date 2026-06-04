---
title: "Measurement and representation of voltage and waveform to scale in graph sheet with the help of CRO"
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 6: Familiarisation of step up and step"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc9020463779487da142"
status: "completed"
scrapedAt: "2026-05-23T17:32:52.883Z"
---
# Module 6: Familiarisation of Step Up and Step Down Transformers

## Topic: Measurement and Representation of Voltage and Waveform to Scale in a Graph Sheet with the Help of CRO

Welcome, everyone, to this session on understanding and visualizing electrical signals using the Cathode Ray Oscilloscope (CRO). This is a crucial skill, and today, we'll dive deep into how to use the CRO to measure voltage and represent waveforms accurately on a graph sheet. This directly ties into our course outcomes, especially **CO5: Operate various measuring instruments** and **CO6: Apply the design procedure of simple electronic circuits on a breadboard and PCB**, because to design and test circuits, we *must* be able to see and understand what the circuit is doing electronically.

### Understanding the Cathode Ray Oscilloscope (CRO) – Your Visualizer

Think of the CRO as a very sophisticated voltmeter that doesn't just give you a number, but shows you the *entire story* of an electrical signal over time. It’s like a super-fast pen drawing a picture of your voltage. The most important part is the display screen, where you see this "picture" – the waveform.

The CRO works by firing a beam of electrons at a phosphorescent screen. This beam is controlled by electrical signals. By manipulating these signals, we can move the electron beam around, allowing us to plot voltage (usually on the vertical axis) against time (usually on the horizontal axis).

### Measuring Voltage with the CRO: More Than Just a Number

When we talk about measuring voltage with a CRO, we’re often interested in more than just a single, steady DC voltage. We want to see how the voltage changes, its peak values, and its average values, especially for AC signals.

#### Key Controls for Voltage Measurement

To measure voltage, we primarily use the **Vertical Controls**.

*   **VOLTS/DIV (Vertical Sensitivity):** This is perhaps the most important knob for voltage measurement. It tells you how many volts each vertical division on the screen represents. For example, if the VOLTS/DIV knob is set to 2 V/DIV, it means that every single grid square going up or down represents 2 volts. If your waveform peak is 3 divisions above the center line, your peak voltage is 3 divisions * 2 V/DIV = 6 volts. This is vital for making accurate measurements. A good practice, as often emphasized in texts like D. P. Kothari and I. J. Nagrath, is to adjust this control so that the waveform occupies a significant portion of the screen vertically, making it easier to read.

*   **VERTICAL POSITION:** This knob allows you to move the entire waveform up or down on the screen. We often use this to set the "ground" or zero-voltage level of the waveform to a convenient horizontal line on the screen.

*   **AC/DC/GND Coupling:** This selection is crucial.
    *   **DC Coupling:** Shows you the *total* voltage, both AC and DC components.
    *   **AC Coupling:** Blocks the DC component and only shows you the AC part of the signal. This is very useful when you have a small AC signal riding on a large DC voltage.
    *   **GND:** This disconnects the input signal and grounds the vertical amplifier. It’s used to establish a zero-volt reference point on the screen.

**Remember this:** Always establish your zero-volt reference using the GND setting before coupling your signal. This is a common mistake beginners make, leading to inaccurate voltage readings.

#### Example: Measuring the Voltage of a Battery

Let’s say you want to check the voltage of a 9V battery.
1.  Connect the battery to the CRO input (usually through a probe).
2.  Set the CRO to DC coupling.
3.  Set the VOLTS/DIV to a suitable range, maybe 5 V/DIV.
4.  Use the VERTICAL POSITION knob to move the waveform so its bottom (representing zero volts) aligns with a major horizontal grid line.
5.  Now, adjust the VOLTS/DIV knob until the top of the waveform (the 9V level) is clearly visible. If the waveform is, say, 2 divisions above the zero line, and your VOLTS/DIV is set to 5 V/DIV, your reading would be 2 divisions * 5 V/DIV = 10V. You might then switch to 2 V/DIV to get a more precise reading, perhaps seeing the waveform rise to 4.5 divisions, giving you 4.5 divisions * 2 V/DIV = 9V. This process of adjusting the sensitivity is key to precise measurement, just like adjusting the scales on a ruler.

### Understanding Time and Waveforms: The Horizontal Story

The CRO doesn't just show voltage; it shows how that voltage *changes over time*. This is where the **Horizontal Controls** come into play.

#### Key Controls for Time Measurement

*   **TIME/DIV (Sweep Speed):** This knob determines how much time each horizontal division on the screen represents. If TIME/DIV is set to 1 ms/DIV, each horizontal square represents 1 millisecond. This allows us to see how fast or slow a signal is changing.

*   **HORIZONTAL POSITION:** Similar to the vertical position, this allows you to move the waveform left or right on the screen.

*   **SWEEP MODE (Auto/Normal/Single):**
    *   **AUTO:** The CRO will automatically trigger and display the waveform, even if the input signal isn't perfectly repeating. This is good for general observation.
    *   **NORMAL:** The CRO will only display the waveform when it receives a trigger signal (explained below).
    *   **SINGLE:** Captures a single sweep of the waveform. Useful for observing transient events.

*   **TRIGGER Controls (Level, Slope, Source):** This is perhaps the most challenging but most important part for getting a stable waveform, especially for AC signals. The trigger circuit tells the CRO *when* to start drawing the waveform.
    *   **TRIGGER LEVEL:** You set a voltage level, and when the input signal crosses this level (either rising or falling, depending on the slope setting), the CRO triggers.
    *   **SLOPE (+/-):** You choose whether the trigger happens when the signal is rising (positive slope) or falling (negative slope).
    *   **SOURCE:** You select which signal provides the trigger – usually the input signal itself (CH1 or CH2).

Imagine you’re watching a dancer. If you start recording at random times, you might catch them in awkward poses. But if you start recording precisely when they hit a specific pose (like a grand jeté), your video will look smooth and continuous. The trigger control is like that specific pose – it ensures each sweep starts at the same point in the signal’s cycle, giving you a stable, readable waveform. This is fundamental for understanding periodic signals, as discussed in basic electronics principles found in Bhargava, Kulshreshtha, and Gupta.

#### Example: Measuring the Period of a Sine Wave

Let's say you have a mains AC voltage (like from a wall socket, typically 50 Hz in India).
1.  Connect the AC signal to the CRO input.
2.  Set the coupling to AC.
3.  Use the VOLTS/DIV to get a good vertical amplitude for the sine wave.
4.  Use the TIME/DIV and HORIZONTAL POSITION to spread out the waveform horizontally so you can clearly see one or more complete cycles.
5.  Adjust the TRIGGER LEVEL and SLOPE so the waveform is stable and doesn't jitter. You typically want to trigger on the rising edge of the waveform.
6.  Once you have a stable waveform, identify one complete cycle. This is the segment from one point on the wave to the next corresponding point. For a sine wave, it's often easiest to pick a point crossing the zero line going upwards.
7.  Measure the horizontal distance of this complete cycle in terms of divisions. Let's say one cycle occupies 10 divisions.
8.  If your TIME/DIV is set to 2 ms/DIV, then the period (T) of the waveform is 10 divisions * 2 ms/DIV = 20 ms.
9.  From the period, you can easily calculate the frequency: Frequency (f) = 1 / T. So, f = 1 / 20 ms = 1 / 0.02 s = 50 Hz. This matches our expected mains frequency!

### Representing Waveforms on a Graph Sheet: Making it Permanent

The CRO gives us a live view, but sometimes we need to document or analyze the waveform more formally. This is where plotting on a graph sheet comes in. This process ensures our measurements are accurate and can be reproduced, aligning with the scientific rigor required in electrical engineering.

#### The Grid System: Your Coordinate Plane

The CRO screen itself is a grid. Graph paper is essentially a scaled-up version of this grid. We need to make sure the scales on the graph paper match the scales we set on the CRO.

1.  **Understand the CRO Scales:** You have two main scales:
    *   Vertical: VOLTS/DIV (e.g., 2 V/DIV)
    *   Horizontal: TIME/DIV (e.g., 5 ms/DIV)

2.  **Choose Your Graph Paper:** Standard graph paper usually has 10 divisions per inch or centimeter, with thicker lines every 5 or 10 divisions.

3.  **Establishing Zero References:** On your graph paper, decide which horizontal line will represent 0 Volts and which vertical line will represent 0 time.
    *   **For Voltage:** Typically, the center horizontal line is a good choice for your 0V reference when observing AC signals. For DC signals, you might choose a bottom line.
    *   **For Time:** The leftmost vertical line on your plotting area is usually the 0-time reference.

4.  **Plotting Points:**
    *   Observe your waveform on the CRO screen.
    *   Pick a few key points on the waveform – the peaks, troughs, zero crossings, and any other significant features.
    *   For each point, determine its voltage (how many VOLTS/DIV above or below your 0V reference) and its time (how many TIME/DIV from your 0-time reference).
    *   Convert these divisions into actual voltage and time values using your CRO settings.
    *   Mark these (time, voltage) coordinates on your graph paper.

5.  **Connecting the Dots:** Once you have plotted several points, draw a smooth curve connecting them, replicating the shape of the waveform you see on the CRO.

#### Example: Plotting a Simple Sine Wave

Let’s go back to the 50 Hz AC signal example. Suppose you set your CRO to:
*   VOLTS/DIV = 2 V/DIV
*   TIME/DIV = 5 ms/DIV
*   You’ve used GND to set your 0V reference on a central horizontal line.
*   You’ve triggered on the rising edge at the 0V crossing.

Now, you want to plot this on graph paper. Let’s say you’ll use the central horizontal line as 0V and the leftmost vertical line in your plotting area as your time origin (t=0).

1.  **Zero Crossing (Rising):** At t=0, voltage is 0V. Plot (0ms, 0V).
2.  **Peak Positive:** The sine wave reaches its peak 1/4 of the way through its cycle. The period is 20ms, so 1/4 of the period is 5ms. Let’s say the peak amplitude is 4 divisions. So, at t=5ms, voltage is 4 divisions * 2 V/DIV = +8V. Plot (5ms, +8V).
3.  **Zero Crossing (Falling):** The waveform crosses zero again at 1/2 the period, which is 10ms. Voltage is 0V. Plot (10ms, 0V).
4.  **Peak Negative:** At 3/4 of the period (15ms), the waveform reaches its negative peak. If the positive peak was +8V, the negative peak would be -8V (4 divisions * 2 V/DIV, but downwards). Plot (15ms, -8V).
5.  **End of Cycle:** Back to zero at the end of the cycle (20ms). Plot (20ms, 0V).

You would then connect these points with a smooth curve. This process makes the waveform tangible and allows for detailed analysis, which is crucial for tasks described in **CO6**.

### Connecting to Course Outcomes: Why This Matters

*   **CO5: Operate various measuring instruments:** This entire topic is a direct application of operating a sophisticated measuring instrument – the CRO. You’re learning to manipulate its controls (VOLTS/DIV, TIME/DIV, Trigger) to get meaningful readings. This is analogous to using a multimeter, but far more powerful for dynamic signals.
*   **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB:** When you design circuits, you need to test them. How do you know if your oscillator is oscillating at the right frequency? How do you verify the output voltage of a power supply? You use the CRO! Measuring and representing waveforms is how you *verify* your designs and troubleshoot problems. For example, if you build a simple amplifier, you'd use the CRO to see how it amplifies a small input signal, checking for distortion.
*   **CO1: Demonstrate safety measures against electrical shocks:** While we're focusing on measurement, remember that the CRO itself is an electrical instrument. Always ensure your connections are correct, use appropriate probes, and be aware of the voltages you are working with. Never touch live wires or components. Refer to the safety guidelines from your lab manual or texts like "Electrical Design Estimating and Costing" by Raina and Bhattacharya for general electrical safety, which applies even when using test equipment.
*   **CO2: Familiarise with transformers, rheostats, batteries and earthing schemes:** The signals you’ll be measuring often come *from* these components. For instance, you might measure the output waveform of a transformer (step-up or step-down) to see if it's a clean sine wave. A rheostat's resistance change can affect voltage and current waveforms. Batteries provide DC voltages you can measure. Understanding these sources makes the CRO measurements more contextual.

### Common Pitfalls and Exam Tips

*   **Incorrect Triggering:** The most common issue is a shaky or unstable waveform. Spend time understanding the trigger level, slope, and source. Usually, triggering on the rising edge of the input signal at or near the zero crossing is ideal for AC sine waves.
*   **Misinterpreting Scales:** Always double-check your VOLTS/DIV and TIME/DIV settings before reading values or plotting. A simple error here can lead to wildly incorrect measurements.
*   **Not Establishing a 0V Reference:** Especially with AC signals, failing to establish a clear ground reference can lead to voltage measurement errors. Use the GND coupling.
*   **Plotting Divisions, Not Values:** When plotting on graph paper, ensure you are converting the divisions into actual volts and seconds/milliseconds using your CRO's settings.

**Exam Questions often focus on:**
1.  Identifying the purpose of key CRO controls (VOLTS/DIV, TIME/DIV, Trigger).
2.  Calculating voltage and time period from a given CRO display (with specified settings).
3.  Drawing a waveform on graph paper based on given CRO settings and observed divisions.
4.  Explaining how to obtain a stable waveform.

### Summary

The CRO is your eyes into the electrical world. By mastering its controls for voltage (VOLTS/DIV) and time (TIME/DIV), and by understanding the crucial role of triggering, you can accurately measure and visualize electrical signals. Plotting these waveforms on graph paper allows for precise documentation and analysis, directly supporting your ability to design, test, and understand electronic circuits.

---

## Sample Questions and Answers

**Question 1 (Conceptual - CO5):** What is the primary function of the 'VOLTS/DIV' control on a CRO?
**Answer:** The primary function of the 'VOLTS/DIV' control is to set the **vertical sensitivity** of the CRO. It determines how many volts each vertical division on the screen represents. This allows the user to scale the vertical amplitude of the input signal to fit conveniently on the display for measurement. For instance, if set to 5 V/DIV, then 1 cm (or 1 major division) upwards or downwards on the screen corresponds to 5 volts.

**Question 2 (Application - CO5, CO6):** A sine wave is displayed on a CRO with the following settings: VOLTS/DIV = 10 mV/DIV, TIME/DIV = 2 ms/DIV. The waveform starts at the center horizontal line (0V) at the left of the screen, rises to a peak 4 vertical divisions above the center line, crosses the center line again 5 horizontal divisions from the start, and reaches a minimum 4 vertical divisions below the center line 10 horizontal divisions from the start. Calculate:
    a) The peak voltage of the waveform.
    b) The period of the waveform.
    c) The frequency of the waveform.
    d) The time at which the first negative peak occurs.

**Answer:**
    Given:
    VOLTS/DIV = 10 mV/DIV
    TIME/DIV = 2 ms/DIV

    a) **Peak Voltage:** The waveform rises 4 vertical divisions from the center line.
       Peak Voltage = 4 divisions * 10 mV/DIV = 40 mV.

    b) **Period:** The waveform completes one cycle (from 0V rising to 0V falling) in 10 horizontal divisions.
       Period (T) = 10 divisions * 2 ms/DIV = 20 ms.

    c) **Frequency:** Frequency (f) is the reciprocal of the period.
       f = 1 / T = 1 / 20 ms = 1 / (20 * 10^-3 s) = 1 / 0.02 s = 50 Hz.

    d) **Time of First Negative Peak:** The negative peak occurs 10 horizontal divisions from the start.
       Time of negative peak = 10 divisions * 2 ms/DIV = 20 ms.
       *Correction:* The negative peak occurs at the *halfway point* between the zero crossings. The zero crossing going upwards is at 0 divisions (time = 0). The zero crossing going downwards is at 5 divisions (time = 5 * 2ms = 10ms). The negative peak occurs between these points. Looking at the provided info, it says the negative peak is at 10 horizontal divisions from the start, which would imply the period is actually 20 divisions if it returns to zero after the negative peak. Let's re-evaluate based on the data:
       - Zero crossing (rising) at 0 divisions.
       - Positive peak at 4 divisions.
       - Zero crossing (falling) at 5 divisions.
       - Negative peak at 10 divisions.

       This description is slightly contradictory if it's a standard sine wave where the negative peak should occur halfway between the positive peak and the next zero crossing. However, if we take the "10 horizontal divisions from the start" as the point of the first negative peak, then:
       Time of first negative peak = 10 divisions * 2 ms/DIV = 20 ms.
       *Self-Correction/Clarification:* In a standard sine wave, the negative peak occurs exactly halfway through the cycle. If the period is 20ms (10 divisions * 2ms/DIV), the negative peak should be at 10ms. The description provided ("reaches a minimum 4 vertical divisions below the center line 10 horizontal divisions from the start") implies a period of 20 divisions or that the waveform described is not a simple sine wave or the description has an error in horizontal placement. **Assuming a standard sine wave and that 5 divisions represents a half-cycle (period of 10 divisions):**
       - Zero crossing (rising) at 0 divisions (time 0ms).
       - Positive peak at 2.5 divisions (time 5ms).
       - Zero crossing (falling) at 5 divisions (time 10ms).
       - Negative peak at 7.5 divisions (time 15ms).
       - End of cycle at 10 divisions (time 20ms).

       If we strictly follow the *given data* where the negative peak is at 10 divisions:
       - Zero crossing (rising) at 0 div.
       - Positive peak at 4 div.
       - Zero crossing (falling) at 5 div.
       - Negative peak at 10 div.

       This implies a period of 20 divisions to get back to a similar point (e.g., the next zero crossing upwards). Thus, the period T = 10 divisions * 2 ms/DIV * 2 = 40 ms. And frequency f = 1/40ms = 25 Hz. However, typically a period is marked by completing one full cycle. Given the conflicting information, a student should point this out. If forced to choose based on the text: **The time at which the first negative peak occurs is 10 horizontal divisions * 2 ms/DIV = 20 ms.** (Assuming the description intends to mark this specific point, even if it makes the waveform unusual).

**Question 3 (Analysis - CO5, CO6):** You are tasked with measuring the output of a circuit that produces a 1kHz square wave with an amplitude of 5V peak-to-peak, superimposed on a DC offset of +2V. How would you set up the CRO to view and measure this signal accurately? Explain your settings for Vertical Controls, Horizontal Controls, and Trigger Controls.

**Answer:**
To accurately measure this signal, we need to:
1.  **Observe the DC offset and the AC square wave clearly.**
2.  **Measure the peak-to-peak voltage and the DC offset.**

**Settings:**

*   **Vertical Controls:**
    *   **Coupling:** Set to **DC Coupling**. This is essential to see both the AC square wave and the DC offset together. If set to AC, you would only see the 5V square wave and lose the +2V offset information.
    *   **VOLTS/DIV:** Since the total signal swing will be from (0V - 2V = -2V) to (5V + 2V = +7V) if the peak is +5V, or from (2V - 2.5V = -0.5V) to (2V + 2.5V = +4.5V) if the peak-to-peak is 5V around a +2V offset, let's assume the peak-to-peak is 5V. The total voltage range is from 2V - 2.5V = -0.5V to 2V + 2.5V = +4.5V. The total voltage span is 5V. We want to display this with some margin. A setting of **2 V/DIV** would be appropriate. This would give us a vertical display range of roughly 10 divisions (e.g., from -4V to +6V or similar, depending on position), which easily covers the -0.5V to +4.5V signal.
    *   **Vertical Position:** Adjust this knob to place the 0V reference line (using GND coupling temporarily to find it) at a convenient horizontal line, perhaps towards the bottom of the screen, to allow the entire positive excursion of the signal to be visible.

*   **Horizontal Controls:**
    *   **TIME/DIV:** The signal is a 1kHz square wave. The period of a 1kHz wave is T = 1/f = 1/1000 Hz = 1 ms. To see one or two cycles clearly, a setting of **0.5 ms/DIV** or **1 ms/DIV** would be suitable. Let's choose **0.5 ms/DIV**. This gives us 2 divisions per millisecond, allowing us to see one full period (1ms) across 2 divisions.
    *   **Horizontal Position:** Center the waveform horizontally for easy viewing.

*   **Trigger Controls:**
    *   **Source:** Set to the input channel where the signal is connected (e.g., CH1).
    *   **Mode:** Set to **AUTO** or **NORMAL**. AUTO is often easier for initial setup.
    *   **Trigger Level:** Since it's a square wave, the transitions are sharp. Set the trigger level to the **mid-point of the square wave's amplitude**. This would be approximately the DC offset voltage, which is +2V. Adjust the level knob to point to the +2V level on the screen.
    *   **Slope:** Set to **Positive Slope** (or rising edge). This ensures the sweep starts when the signal transitions from low to high.

**Measurement:**
*   **Peak-to-peak voltage:** Measure the vertical distance between the highest and lowest points of the square wave in divisions, then multiply by the VOLTS/DIV setting (4 divisions * 2 V/DIV = 8V, which is incorrect if the peak-to-peak is 5V. Let's assume the peak-to-peak is 5V). If the peak-to-peak is 5V, and VOLTS/DIV is 2 V/DIV, the waveform will span 5V / 2V/DIV = 2.5 vertical divisions. So, measure the vertical distance in divisions (which should be 2.5) and multiply by 2 V/DIV.
*   **DC Offset:** Measure the vertical distance from the 0V reference line to the point where the square wave transitions occur (the flat part of the square wave). This should be approximately 2 divisions (2 divisions * 2 V/DIV = 4V). This would be incorrect, as the offset is 2V. So the peak-to-peak is 5V, and the offset is 2V. The total span from minimum to maximum is 5V. The signal goes from (2 - 2.5) = -0.5V to (2 + 2.5) = +4.5V. Total span 5V. So, 5V / 2V/DIV = 2.5 divisions. The DC offset is at 2V, which is 2V / 2V/DIV = 1 division above the 0V reference. So the DC offset is 1 division on the screen.

This detailed setup allows clear visualization and accurate measurement of both the AC component and the DC offset, demonstrating the practical application of CRO controls.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
