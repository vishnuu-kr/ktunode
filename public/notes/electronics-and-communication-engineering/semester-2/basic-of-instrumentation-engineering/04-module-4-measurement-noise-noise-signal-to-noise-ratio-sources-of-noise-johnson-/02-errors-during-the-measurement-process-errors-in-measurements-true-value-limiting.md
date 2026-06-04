---
title: "ERRORS  DURING  THE  MEASUREMENT  PROCESS:  Errors  in measurements, true value, Limiting errors (Guarantee errors). Relative (fractional) limiting error. Combination of quantities with limiting errors. Known errors, types of errors, gross errors, systematic errors, instrumental errors, environmental errors, observational errors. Random (residual) errors. Reduction of systematic errors - Careful instrument design - Method of opposing inputs -Calibration - Manual correction of output reading."
subject: "BASIC OF INSTRUMENTATION ENGINEERING"
module: "Module 4: MEASUREMENT NOISE: Noise, signal to noise ratio, sources of noise, Johnson noise, power spectrum density. Sources of measurement noise"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9120463779487da5ed"
status: "completed"
scrapedAt: "2026-05-23T17:37:22.049Z"
---
# BASIC OF INSTRUMENTATION ENGINEERING - Module 4: MEASUREMENT NOISE & ERRORS

## Introduction to Measurement Errors: The Inevitable Companion of Measurement

Welcome back, everyone! In our journey through the fascinating world of instrumentation, we've learned about the beauty of precise measurement. But as any seasoned engineer will tell you, perfect measurement is an ideal we strive for, not a reality we always achieve. Today, we're diving into the heart of this reality: **Errors during the measurement process**. Think of it like trying to hit a bullseye – you might be skilled, but the wind, the lighting, even your own slight tremor can nudge your arrow off course. Similarly, in instrumentation, there are always factors that introduce inaccuracies. Understanding these errors is crucial, not to be discouraged, but to *manage* them, to make our measurements as reliable as possible. This is fundamental to what we do in instrumentation engineering, and it directly ties into our **Course Outcome 4: Demonstrate a comprehensive understanding of noise and errors in measurement.**

### What is an "Error" in Measurement?

So, let's start with the basics. What exactly *is* an error in measurement? In simple terms, an error is the difference between the value we *measure* and the true value of the quantity we are trying to measure.

**Error (e) = Measured Value - True Value**

Now, this brings us to a key concept: the **True Value**. What is this "true value"? Imagine weighing yourself on a super-accurate laboratory scale. That reading is likely very close to your true mass. However, even that scale has its limitations. The true value is the actual, exact value of the physical quantity being measured. It's often an ideal or a theoretical value, and in many practical situations, we can only *approximate* it. The closer our measured value is to this true value, the more accurate our measurement is.

### Limiting Errors (Guarantee Errors): The Manufacturer's Promise

When you buy a digital multimeter or a pressure gauge, have you ever noticed those small percentages printed on the specification sheet? Like "±1% of reading" or "±0.5% of full scale"? Those are what we call **Limiting Errors**, often referred to as **Guarantee Errors**. These are the maximum possible errors that can occur in an instrument due to its manufacturing tolerances and design limitations.

Think of it this way: when a manufacturer builds an instrument, they have to account for tiny variations in components. For example, a resistor might not be exactly 100 ohms; it could be 100.1 ohms or 99.9 ohms due to manufacturing processes. These small variations, when combined, can lead to a maximum deviation from the ideal performance. The limiting error tells you the *worst-case scenario* for the instrument's accuracy under normal operating conditions. It's a guarantee from the manufacturer that the instrument's reading will be within this specified tolerance of the true value.

### Relative (Fractional) Limiting Error: Putting it in Perspective

Now, how do we express this limiting error in a way that's meaningful? We can express it in two main ways:

1.  **Absolute Limiting Error:** This is the direct specification, like ±1% of reading.
2.  **Relative (or Fractional) Limiting Error:** This is often more useful because it expresses the error as a fraction or percentage of the *true value* or the *full-scale reading*.

The formula for Relative Limiting Error is:

**Relative Limiting Error = (Absolute Limiting Error) / (True Value)**

Often, for simplicity and practicality, especially when the true value is unknown or varies, the limiting error is specified as a percentage of the **full-scale reading (FSR)**.

**Relative Limiting Error (as % of FSR) = (Absolute Limiting Error) / (Full Scale Reading) * 100%**

Let's use an analogy. Suppose you buy a ruler that's supposed to be 30 cm long, but the manufacturer guarantees its accuracy within ±0.3 cm.

*   If you measure an object that's actually 15 cm long, and the instrument reads 15.1 cm, the absolute error is 0.1 cm.
*   If the instrument's limiting error is ±0.3 cm, this means the true length could be anywhere between 14.7 cm and 15.3 cm for a reading of 15 cm.
*   Now, let's consider the relative limiting error. If the instrument's limiting error is ±0.3 cm, and we are measuring a 15 cm length (let's assume this is the true value for a moment), the relative error would be (0.3 cm / 15 cm) * 100% = 2%.
*   However, if the limiting error is specified as ±1% of *full scale*, and the ruler's full scale is 30 cm, then the absolute limiting error is 1% of 30 cm, which is 0.3 cm. If you are measuring a 15 cm length, the relative error *with respect to the full scale* is (0.3 cm / 30 cm) * 100% = 1%.

This distinction is important! When the error is expressed as a percentage of the reading, the absolute error value stays the same, but the *relative* error changes with the measured value. When it's a percentage of the full scale, the absolute error is fixed, and the relative error is highest at low readings and lowest at full-scale readings. This is a common point of confusion, so **remember this: the significance of an error often depends on the magnitude of the quantity being measured.** A 1-volt error in measuring 1000 volts is much less significant than a 1-volt error in measuring 5 volts.

### Combination of Quantities with Limiting Errors: When Measurements Intertwine

In real-world applications, we rarely measure just one quantity. We often combine several measured values to get a final result. For instance, calculating the power in an electrical circuit requires measuring voltage and current. If each of these measurements has its own limiting error, how does that affect the final calculated power? This is where we need to understand how to combine errors.

The rules for combining errors are similar to those used in error propagation in statistics. Here are some common scenarios:

*   **Addition/Subtraction:** If a quantity $Z$ is obtained by adding or subtracting two measured quantities $X$ and $Y$, where $Z = X + Y$ or $Z = X - Y$:
    The absolute limiting error of $Z$ is the *sum* of the absolute limiting errors of $X$ and $Y$.
    $|\Delta Z| = |\Delta X| + |\Delta Y|$
    This might seem counter-intuitive – shouldn't errors cancel out? No, in the worst-case scenario, both errors could push the result further away from the true value.

*   **Multiplication/Division:** If a quantity $Z$ is obtained by multiplying or dividing two measured quantities $X$ and $Y$, where $Z = X * Y$ or $Z = X / Y$:
    The *relative* limiting error of $Z$ is the sum of the relative limiting errors of $X$ and $Y$.
    $|\frac{\Delta Z}{Z}| = |\frac{\Delta X}{X}| + |\frac{\Delta Y}{Y}|$

These are simplified rules, often used for quick estimations of combined errors, assuming the errors are independent and the relative errors are small. For more rigorous analysis, calculus-based methods are used, but for our purposes, understanding these basic combinations is key. This connects to **Course Outcome 3: Develop a deep understanding of the principles of calibration and analysing input-output relationships in measurement systems**, as combining errors is a way of analyzing the output's relationship with its input uncertainties.

### Known Errors: Identifying the Predictable

Now, let's talk about the different *types* of errors. It's helpful to categorize them to understand their origin and how we might deal with them. We can broadly classify errors into three main categories:

1.  **Gross Errors (Human Errors):** These are the big, obvious mistakes that often stem from human oversight or blunders. Think about misreading a scale, incorrect wiring of a circuit, or forgetting to zero an instrument before taking a reading. These are typically the easiest to spot and correct *if* you're paying attention. For example, accidentally pressing the wrong button on a calculator when computing a power value, or reading a needle on an analog meter at an angle (parallax error).

2.  **Systematic Errors:** These are more insidious because they are consistent and predictable. They cause the measurement to deviate from the true value in the same direction each time. It’s like having a scale that is consistently 1 kg heavy. Every time you weigh yourself, you'll be off by the same amount. This is a crucial concept, directly related to **Course Outcome 4**. Systematic errors affect the *accuracy* of the measurement.

3.  **Random (Residual) Errors:** Unlike systematic errors, these errors fluctuate unpredictably. They can be positive or negative, and their magnitude varies from one measurement to the next. They are often due to factors that are difficult to control or even identify, like slight variations in temperature, vibrations, or electrical noise. Random errors affect the *precision* of the measurement. If you repeatedly measure the same quantity, random errors will cause your readings to scatter around a central value.

### Diving Deeper into Systematic Errors

Let's break down systematic errors further, as they are very common in instrumentation:

*   **Instrumental Errors:** These are inherent to the instrument itself. They arise from:
    *   **Imperfect Calibration:** If an instrument isn't calibrated correctly against a known standard, it will consistently show a wrong reading. Imagine a thermometer that's always 2 degrees off because it wasn't calibrated at the boiling point of water.
    *   **Wear and Tear:** Mechanical instruments can degrade over time. A spring might become less elastic, a bearing might develop friction, leading to consistent deviations.
    *   **Manufacturing Defects:** As we discussed with limiting errors, subtle variations in components can lead to systematic offsets.
    *   **Loading Effects:** When you connect an instrument to a circuit, it draws some current or voltage, which can alter the behavior of the circuit being measured. For example, a voltmeter with low resistance will draw current from the circuit, changing the voltage it's trying to measure. This is a classic example of an instrumental error.

*   **Environmental Errors:** These errors arise from the conditions surrounding the measurement. The environment can significantly influence instrument readings.
    *   **Temperature Variations:** Many components change their electrical properties with temperature. A measuring resistor might increase its resistance on a hot day, leading to a systematic error in current measurement.
    *   **Humidity:** High humidity can affect insulation resistance or cause condensation, leading to erratic behavior.
    *   **Atmospheric Pressure:** Changes in pressure can affect certain types of sensors.
    *   **Vibrations:** Mechanical instruments can be affected by external vibrations, causing them to record inaccurate values. Imagine trying to read a delicate analog meter on a vibrating platform – the needle will jump around due to both random and potentially systematic drift.

*   **Observational Errors:** These are errors made by the person taking the measurement, specifically due to how they observe the instrument.
    *   **Parallax Error:** This is very common with analog meters. If you don't look at the needle perpendicular to the scale, the reading will be off. Imagine looking at a speedometer from the side; the needle's position will appear to be at a different speed than if you looked straight on.
    *   **Zero Error:** If an instrument doesn't read zero when the input is zero, it introduces a constant offset for all subsequent readings. Forgetting to set a balance on a chemical scale to zero before weighing ingredients.

### Random Errors: The Unpredictable Nature of Measurement

As mentioned, **random errors** are unpredictable fluctuations. They are sometimes called **residual errors** because they are what's left over after all known and systematic errors have been accounted for or minimized.

*   **Examples:**
    *   Slight fluctuations in the power supply voltage to an amplifier.
    *   Electromagnetic interference from external sources affecting sensor readings.
    *   Operator's reaction time when starting or stopping a timer.
    *   The inherent thermal agitation of electrons in a conductor (which we'll touch upon more in the noise section).

While we can't eliminate random errors, we can often *reduce their effect* on the final result by taking multiple readings and averaging them. The law of large numbers suggests that as you take more and more random measurements, the average of those measurements will tend to get closer and closer to the true value, as positive and negative deviations tend to cancel each other out.

### Reducing Systematic Errors: Strategies for Improvement

Since systematic errors are consistent, we can often devise strategies to minimize or eliminate them. This is where our understanding of instrument characteristics and calibration comes into play, directly supporting **Course Outcome 3**.

Here are some key methods for reducing systematic errors:

1.  **Careful Instrument Design:** This is a preventative measure. Manufacturers can design instruments to be less susceptible to environmental factors. For example, using materials with low thermal expansion coefficients, shielding sensitive components from electromagnetic interference, or designing circuits that are less sensitive to voltage fluctuations. This is about building a better, more robust measuring tool from the ground up.

2.  **Method of Opposing Inputs (Bridge Circuits):** This is a clever technique often used in electrical measurements, particularly with Wheatstone bridges. Instead of directly measuring an unknown quantity, the instrument is designed so that the unknown quantity is balanced against a known, adjustable quantity. For example, in a resistance measurement, you might adjust a known resistor until a null detector shows zero. The error in the known resistor is then the primary source of error, and it's often easier to manage. It's like balancing two forces to find an equilibrium point.

3.  **Calibration:** This is arguably the most important technique for dealing with systematic errors. Calibration involves comparing the readings of an instrument with a known, traceable standard.
    *   **Standard:** A standard is an instrument or reference material whose value is accepted as a basis for comparison. For example, a certified weight used to calibrate a scale.
    *   **Process:** You apply known inputs to the instrument and record its readings. You then compare these readings to the known inputs. If there's a consistent difference (a systematic error), you can either:
        *   **Adjust the Instrument:** If the instrument has adjustable mechanisms, you can recalibrate it to bring its readings in line with the standard.
        *   **Determine a Correction Factor:** If the instrument cannot be adjusted, you can determine the systematic error and apply a correction factor to every reading. For example, if your scale consistently reads 1 kg high, you know to subtract 1 kg from every measurement. This brings us back to the concept of a "known error."

4.  **Manual Correction of Output Reading:** This is essentially applying the correction factor identified during calibration. If you know your instrument has a systematic error of +2 units at a particular reading, you simply subtract 2 units from whatever the instrument shows. This is also a way of compensating for known errors. Think about GPS navigation systems that might have a slight built-in correction for atmospheric delays; that's a form of manual (or automatic) correction of a known systematic effect.

### Types of Errors: A Summary Table (for clarity)

To recap, let's quickly organize the types of errors. While I prefer a flowing explanation, a table can be helpful for exam recall.

| Error Type         | Characteristics                                                                                                | Examples                                                                     | How to Reduce/Address

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
