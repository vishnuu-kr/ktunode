---
title: "Errors in Measurements"
subject: "TRANSDUCERS & MEASUREMENTS"
module: "Module 3: Measurements  and Measurement  Systems"
branch: "Civil Engineering"
semester: 2
topicId: "68b54567d74ec52cc09130af"
status: "completed"
scrapedAt: "2026-05-20T18:38:43.316Z"
---
# TRANSDUCERS & MEASUREMENTS

## Module 3: Measurements and Measurement Systems

### Topic: Errors in Measurements

Welcome, everyone! Today, we're diving into a crucial aspect of measurements: **Errors in Measurements**. You see, in the world of science and engineering, we're always striving for accuracy. Whether we're building a bridge, designing a microchip, or even just measuring the temperature for a recipe, we want our measurements to be as close to the true value as possible. But here's the reality: no measurement is ever perfectly accurate. There will *always* be some discrepancy between the measured value and the true value. Understanding these discrepancies, or *errors*, is absolutely fundamental to interpreting our results, ensuring the reliability of our instruments, and ultimately, making sound engineering decisions. This topic directly ties into **CO3: Illustrate the working principles of electronic measuring instruments and identify various types of errors in measuring systems and choose methods for minimization of the errors.** By understanding errors, we learn how to use instruments wisely and make our measurements meaningful.

---

### 3.1 What is Measurement and Why Do We Care About Errors?

Before we get into the "what" of errors, let's quickly revisit the "what" of measurement. A **measurement** is essentially the process of comparing an unknown quantity with a known standard. Think about measuring your height. You're comparing your length against the markings on a measuring tape (the standard). The result? "I am 1.75 meters tall."

Now, why do we care so much about errors? Imagine you're a surgeon performing a delicate operation and the instruments you're using to measure blood pressure or tissue thickness have significant errors. The consequences could be dire. In engineering, a small error in measuring the dimensions of a component could lead to a faulty product that fails under stress. So, a thorough understanding of errors allows us to:

*   **Assess the quality and reliability of our measurements.**
*   **Select appropriate instruments for a given task.**
*   **Determine the limitations of our measuring systems.**
*   **Improve the accuracy and precision of our measurements.**

This is all about building confidence in our data. As David A. Bell emphasizes in "Electronic Instrumentation and Measurements," a good understanding of errors is paramount to intelligent instrument selection and application.

---

### 3.2 Defining Key Terms: Accuracy, Precision, and Error

It's important to get our definitions straight right from the start. These terms are often used interchangeably in everyday language, but in measurement science, they have distinct meanings.

#### 3.2.1 Accuracy

**Accuracy** refers to how close a measured value is to the true or accepted value of the quantity being measured. Think of it as "correctness."

*   **Analogy:** Imagine you're at a shooting range. If your shots are all clustered very close to the bullseye, you have high accuracy.

*   **Example:** If the true length of a resistor is 100 ohms, and you measure it as 100.1 ohms, that's a highly accurate measurement.

#### 3.2.2 Precision

**Precision**, on the other hand, refers to the degree of reproducibility or repeatability of a measurement. It's about how close multiple measurements of the same quantity are to each other, regardless of whether they are close to the true value. Think of it as "consistency."

*   **Analogy:** Back to the shooting range. If all your shots are clustered tightly together, even if they are far from the bullseye, you have high precision.

*   **Example:** If you measure the same resistor five times and get readings of 105.2 ohms, 105.3 ohms, 105.1 ohms, 105.2 ohms, and 105.3 ohms, these measurements are precise (they're very close to each other), but they are not accurate if the true value is 100 ohms.

**Key Takeaway:** You can have precise measurements that are not accurate, and you can have accurate measurements that are not very precise. Ideally, we want both!

#### 3.2.3 Error

Now, let's define **error**. Error is the difference between the measured value and the true value of the quantity being measured.

$$ \text{Error} = \text{Measured Value} - \text{True Value} $$

Errors can be positive or negative. A positive error means the measured value is higher than the true value, and a negative error means it's lower.

---

### 3.3 Classification of Errors

Errors aren't a single monolithic thing; they come in different flavors. Understanding these classifications is key to identifying their sources and figuring out how to deal with them. We generally categorize errors into three main types:

1.  **Gross Errors (or Blunders)**
2.  **Systematic Errors**
3.  **Random Errors**

Let's break each of these down. This classification is a common exam topic, so pay close attention!

---

#### 3.3.1 Gross Errors (Blunders or Mistakes)

These are the most serious types of errors, and thankfully, they are usually obvious and avoidable. Gross errors are usually due to human mistakes in reading an instrument, using it incorrectly, or making errors during calculation.

*   **Examples:**
    *   **Parallax Error:** When reading a scale, if your eye isn't directly in line with the pointer, you'll get a different reading. Imagine trying to read a ruler from an angle; the mark you see might be slightly off.
    *   **Incorrect Scale Reading:** Reading a 10V scale as a 100V scale, or misinterpreting a division.
    *   **Faulty Connections:** A loose wire or incorrect wiring in a circuit can lead to completely nonsensical readings.
    *   **Transposition of Digits:** Writing down 51 instead of 15.
    *   **Using the wrong instrument:** Trying to measure a very high voltage with a low-voltage meter.

*   **Minimization:** These are typically eliminated by careful observation, proper training, using appropriate procedures, double-checking readings and calculations, and ensuring the instrument is functioning correctly. They are generally not amenable to statistical analysis because they are erratic.

#### 3.3.2 Systematic Errors

These errors are more insidious because they tend to be consistent and repeatable. They occur in the same direction (either always high or always low) and have the same magnitude for a given set of conditions. They are often caused by the limitations of the measuring instrument or the environment. As A.K. Sawhney discusses in "A Course in Electronic Measurements and Instrumentation," systematic errors affect the accuracy of the measurement.

Systematic errors can be further categorized:

*   **Instrumental Errors:** These arise from the inherent limitations of the measuring instruments themselves.
    *   **Calibration Errors:** If an instrument is not properly calibrated against a known standard, it will consistently show incorrect readings. Think of a weighing scale that's always off by 50 grams.
    *   **Wear and Tear:** Over time, the components of an instrument can degrade, leading to systematic errors. For example, a spring in a mechanical meter might lose its elasticity.
    *   **Zero Error:** An instrument might show a reading even when the input is zero. For instance, a digital multimeter showing 0.01V when no voltage is applied. This is like a clock that consistently runs 5 minutes fast.
    *   **Loading Effects:** When a measuring instrument is connected to a circuit, it draws some current or voltage, thereby altering the circuit's behavior and thus the measurement itself. This is particularly relevant with voltmeters that have finite input impedance.

*   **Environmental Errors:** These are due to variations in the surrounding conditions.
    *   **Temperature:** Changes in ambient temperature can affect the properties of electronic components and the dimensions of mechanical parts, leading to altered readings.
    *   **Humidity:** High humidity can affect the insulation resistance of circuits.
    *   **Pressure:** Atmospheric pressure can affect certain types of sensors.
    *   **Vibration and Magnetic Fields:** External influences can interfere with sensitive instruments.

*   **Personal Errors (Observable Systematic Errors):** While gross errors are human *blunders*, personal errors can be more subtle, systematic human habits.
    *   **Consistent parallax error:** Always reading a scale from the same incorrect angle.
    *   **Consistent reaction time:** A delay in pressing a stop button in a timing experiment.
    *   **Setting the zero of an instrument incorrectly.**

*   **Minimization of Systematic Errors:**
    *   **Calibration:** Regularly calibrate instruments against standards.
    *   **Correction Factors:** Determine the magnitude of the systematic error (e.g., zero error) and apply a correction factor to the readings.
    *   **Instrument Selection:** Choose instruments with higher accuracy and lower sensitivity to environmental changes.
    *   **Controlled Environment:** Conduct measurements in a stable environment (e.g., temperature-controlled room).
    *   **Proper Technique:** Use instruments correctly and be aware of their limitations (e.g., understanding input impedance).

#### 3.3.3 Random Errors

These are the most challenging errors to deal with because they are unpredictable and fluctuate in magnitude and sign. They are often due to factors that cannot be controlled or eliminated, or that vary randomly from one measurement to the next.

*   **Examples:**
    *   **Electronic Noise:** Random fluctuations in voltage or current within electronic circuits, often due to thermal agitation of charge carriers (Johnson noise) or other quantum effects.
    *   **Friction in Mechanical Parts:** Slight variations in friction can cause the pointer of a mechanical instrument to settle at slightly different positions each time.
    *   **Vibration:** Minor, unpredictable vibrations affecting the instrument.
    *   **Fluctuations in Power Supply:** Small, random variations in the voltage of the power supply.
    *   **Operator Variability:** Even with proper training, slight variations in how an operator manipulates an instrument or makes a reading can occur.

*   **Minimization of Random Errors:**
    *   **Increase the number of readings:** The most effective way to reduce the impact of random errors is to take multiple measurements and calculate the average. As David Bell explains, the average of many readings tends to approach the true value, as positive and negative random errors cancel each other out.
    *   **Statistical Analysis:** Use statistical tools like standard deviation and probable error to quantify the uncertainty introduced by random errors.
    *   **Improve the measuring system:** Use more stable components, better shielding, or more sophisticated signal processing techniques.

---

### 3.4 Expressing Errors

We've discussed what errors are and how they arise, but how do we quantify them and express them in a meaningful way? This is where we start using some mathematical tools.

#### 3.4.1 Absolute Error

The absolute error is simply the difference between the measured value and the true value, as we defined earlier.

$$ \text{Absolute Error} = \text{Measured Value} - \text{True Value} $$

It has the same units as the measured quantity.

*   **Example:** If the true value is 10V and the measured value is 10.2V, the absolute error is +0.2V.

#### 3.4.2 Relative Error

Relative error expresses the error as a fraction or percentage of the true value. This is often more useful than absolute error because it gives a sense of the *significance* of the error. A 0.1V error in a 1V measurement is much more significant than a 0.1V error in a 1000V measurement.

$$ \text{Relative Error} = \frac{\text{Absolute Error}}{\text{True Value}} $$

It is often expressed as a percentage:

$$ \text{Percentage Relative Error} = \frac{\text{Absolute Error}}{\text{True Value}} \times 100\% $$

*   **Example:** If the true value is 10V and the measured value is 10.2V:
    *   Absolute Error = 10.2V - 10V = +0.2V
    *   Relative Error = 0.2V / 10V = 0.02
    *   Percentage Relative Error = 0.02 * 100% = 2%

**Important Note for Exams:** When the true value is not known (which is usually the case in real-world measurements!), we often use the *measured value* as an approximation for the true value in the denominator. However, it's crucial to understand this is an approximation.

#### 3.4.3 Relative Accuracy

Relative accuracy is the reciprocal of the relative error, often expressed as a percentage.

$$ \text{Relative Accuracy} = \frac{\text{Measured Value}}{\text{True Value}} $$

or more commonly, as a percentage of how close the measurement is to the true value. If the relative error is 2%, the relative accuracy is 98%.

#### 3.4.4 Nominal Value

This is the value assigned to a component or device, often indicated on its surface (e.g., a 10kΩ resistor). The actual value will deviate from the nominal value due to manufacturing tolerances.

---

### 3.5 The Concept of Uncertainty

In a more rigorous sense, especially when dealing with random errors, we talk about **uncertainty**. Uncertainty is a parameter, associated with the result of a measurement, that characterizes the dispersion of the values that could reasonably be attributed to the quantity being measured. It's our way of saying, "We measured this value, and we're confident the true value lies within this range."

*   **Example:** Instead of saying "The voltage is 5.0V," we might say "The voltage is 5.0V ± 0.1V." This ±0.1V is the uncertainty. It tells us the range within which the true voltage is likely to lie, based on the errors and limitations of our measurement process.

Kalsi H.S. in "Electrical Measurements and Measuring systems" often discusses how to quantify this uncertainty, often using statistical methods. For a set of measurements where random errors are dominant, the **standard deviation** of the mean provides a good estimate of the uncertainty.

---

### 3.6 Errors in Measurement Systems

Now, let's put it all together in the context of a measurement *system*. A measurement system comprises several components: the sensor/transducer, the signal conditioning circuits, the display or recording device, and often a power supply. Errors can creep in at *any* of these stages.

For instance, if we're measuring temperature using a thermocouple (transducer), the thermocouple itself might have manufacturing variations (systematic error). The amplifier used to boost the thermocouple's small voltage might introduce electronic noise (random error). The digital display might have a quantization error because it can only display discrete values (a form of rounding error, often treated with uncertainty).

This reinforces why **CO3** is so important – it's not just about individual instruments but the entire measurement chain. Every link in the chain can contribute to the overall error.

---

### 3.7 Common Errors and Their Mitigation in Electronic Instruments

Let's touch upon specific types of errors commonly encountered in electronic measurements, drawing from resources like Kim R. Fowler's "Electronic Instrument Design."

*   **Offset Error:** This is a type of systematic error where the instrument produces a non-zero output when the input is zero. This is often corrected by adjusting the "zero" setting of the instrument.
*   **Gain Error (or Scale Factor Error):** This is another systematic error where the instrument's output is not proportional to the input by the correct factor. For example, a voltmeter might consistently read 1% higher than it should for all input values. This is corrected by adjusting the "gain" or "span" setting.
*   **Linearity Error:** Ideally, the output of a measuring instrument should be directly proportional to the input. However, in reality, the relationship might be slightly curved. This deviation from a straight line is the linearity error. It's a type of systematic error that varies with the input magnitude.
*   **Hysteresis Error:** This occurs in instruments where the output depends not only on the current input but also on the history of the input. For example, if measuring a rising voltage and then a falling voltage, the reading might be different for the same voltage value. This is common in systems with mechanical hysteresis or electronic circuits with feedback.
*   **Loading Errors:** As mentioned, connecting a measurement device to a circuit can alter the circuit. A voltmeter with low input impedance will draw current, changing the voltage it's trying to measure. Conversely, an ammeter with high internal resistance inserted in series can reduce the current it's measuring.

**Mitigation strategies** for these electronic-specific errors include careful circuit design, high-quality components, proper grounding and shielding, and sophisticated calibration procedures.

---

### 3.8 The Role of Statistical Methods

As we've seen, random errors are best handled using statistical methods. The core idea is that if we take many measurements, the average value will be a better estimate of the true value than any single measurement.

*   **Mean (Average):** $ \bar{x} = \frac{\sum_{i=1}^{n} x_i}{n} $, where $x_i$ are the individual measurements and $n$ is the number of measurements.
*   **Standard Deviation ($ \sigma $ or $ s $):** This quantifies the spread of the data around the mean. For a sample of $n$ measurements, it's often calculated as:
    $$ s = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}} $$
    The $(n-1)$ in the denominator is Bessel's correction, used when estimating the population standard deviation from a sample.
*   **Standard Error of the Mean (SEM):** This is the standard deviation divided by the square root of $n$. It tells us how much the sample mean is likely to vary from the true mean.
    $$ \text{SEM} = \frac{s}{\sqrt{n}} $$
    As $n$ increases, SEM decreases, meaning our average becomes more reliable.

These statistical tools are invaluable for determining the confidence interval for our measurements. When you see specifications like "accuracy ± 0.5% of reading + 1 count," that "1 count" often relates to the inherent uncertainty due to quantization or random noise, which statistical methods help characterize.

---

### 3.9 Summary: Connecting to Course Outcomes

Let's quickly recap how our discussion on errors directly supports our course objectives:

*   **CO1 (Summarize concepts of sensors, transducers):** Understanding errors is crucial for evaluating the performance of any sensor or transducer we might use.
*   **CO2 (Apply principles of transducers in measuring systems):** Knowing the types of errors helps us select the right transducer for a job and understand its limitations when integrated into a larger system.
*   **CO3 (Illustrate working principles of instruments, identify errors, choose minimization methods):** This is precisely what we've been doing! We've identified gross, systematic, and random errors and discussed various methods to minimize them, which is essential for understanding how instruments work and how to use them effectively.
*   **CO4 (Explain concepts of CRO, DSO, etc.):** While we haven't deeply discussed specific instruments here, the principles of error analysis apply to them. For example, the bandwidth of a CRO or the sampling rate of a DSO can introduce or limit certain types of errors.
*   **CO5 (Understand and utilize measurement systems, apply theoretical knowledge):** By understanding errors, we gain the practical knowledge needed to use measurement systems reliably and interpret their results correctly.

---

### Sample Questions with Answers

Here are some questions that test your understanding, similar to what you might find in an exam.

**Question 1 (Conceptual):** Explain the difference between accuracy and precision using an analogy. Why is it important to distinguish between them in measurement systems?

**Answer:**
Accuracy refers to how close a measurement is to the true value (correctness), while precision refers to how close multiple measurements are to each other (reproducibility).

*   **Analogy:** Imagine a dart player.
    *   **High Accuracy, High Precision:** All darts hit the bullseye, tightly grouped.
    *   **Low Accuracy, High Precision:** All darts miss the bullseye but are tightly grouped in another area of the board.
    *   **High Accuracy, Low Precision:** Darts are scattered all over the board, but their average position is near the bullseye.
    *   **Low Accuracy, Low Precision:** Darts are scattered all over the board, and their average position is also far from the bullseye.

**Importance:** In measurement systems, we need to ensure our instruments not only give consistent readings (precision) but that these readings reflect the actual quantity being measured (accuracy). A highly precise but inaccurate instrument can lead to misleading conclusions and potentially flawed engineering designs because it consistently gives the "wrong" answer. Understanding the distinction helps us diagnose problems (e.g., if readings are inconsistent, it's likely a precision issue, possibly random error; if readings are consistently off, it's an accuracy issue, likely systematic error) and select appropriate instruments.

**Question 2 (Problem-Solving):** A resistor is measured to have a resistance of 99.5 Ω. The true value of the resistor is 100.0 Ω. Calculate the absolute error and the percentage relative error.

**Answer:**
Given:
Measured Value ($V_m$) = 99.5 Ω
True Value ($V_t$) = 100.0 Ω

1.  **Absolute Error:**
    Absolute Error = Measured Value - True Value
    Absolute Error = 99.5 Ω - 100.0 Ω = -0.5 Ω

2.  **Percentage Relative Error:**
    First, calculate the Relative Error:
    Relative Error = Absolute Error / True Value
    Relative Error = -0.5 Ω / 100.0 Ω = -0.005

    Now, convert to percentage:
    Percentage Relative Error = Relative Error × 100%
    Percentage Relative Error = -0.005 × 100% = -0.5%

**Question 3 (Identification/Application):** A student is measuring the voltage of a battery using a voltmeter. They notice that every time they connect the voltmeter, the battery voltage reading is slightly lower than what they expect from a rough calculation. They check their connections, and they seem fine. What type of error is most likely occurring, and how could they confirm or minimize it?

**Answer:**
The most likely type of error occurring here is a **systematic error** due to the **loading effect** of the voltmeter.

*   **Explanation:** A voltmeter has a finite input impedance. When connected to the battery, it draws a small amount of current. This current, flowing through the internal resistance of the battery (even if small), causes a voltage drop, making the measured voltage appear slightly lower than the actual open-circuit voltage of the battery. This is a systematic effect because the voltmeter's impedance is usually constant.

*   **Confirmation/Minimization:**
    *   **Confirmation:** To confirm this, the student could try using a voltmeter with a much higher input impedance. If the reading becomes closer to the expected value, it confirms the loading effect of the original voltmeter.
    *   **Minimization:** The best way to minimize this error is to use a voltmeter with a significantly higher input impedance than the source impedance of the circuit being measured. For measuring battery voltages, where the internal resistance is typically very low, a digital voltmeter (which generally has very high input impedance, often in the MΩ range) is preferred over older analog voltmeters (which might have input impedance in the kΩ range). If the source impedance were high, one might consider using a different measurement technique or a high-impedance buffer amplifier.

**Question 4 (Distinction):** Differentiate between Gross Errors and Random Errors, explaining how each is dealt with in a measurement process.

**Answer:**
*   **Gross Errors:**
    *   **Nature:** Caused by human mistakes, blunders, or faulty procedures (e.g., parallax error, misreading scales, incorrect connections). They are often large, unpredictable in their occurrence, but when they happen, they can lead to wildly incorrect readings.
    *   **Dealing with:** They are best dealt with by careful observation, proper training, using standardized procedures, double-checking readings and calculations, and ensuring the instrument is used correctly. They are usually eliminated by repetition of the measurement and scrutiny of the procedure, rather than statistical averaging.

*   **Random Errors:**
    *   **Nature:** Caused by unpredictable, fluctuating influences (e.g., electronic noise, vibration, minor variations in operator reaction time). They vary in both magnitude and sign from one measurement to the next in an unpredictable manner.
    *   **Dealing with:** They are best dealt with by statistical methods. The most common technique is to take multiple measurements and calculate the average. The Law of Large Numbers suggests that the average of many random measurements will approach the true value. Statistical tools like standard deviation are used to quantify the uncertainty introduced by these errors.

This concludes our session on errors in measurements. Remember, understanding and managing errors is not just an academic exercise; it's fundamental to reliable engineering and scientific practice. Keep these concepts in mind as you work with instruments and analyze your results!
