---
title: "Errors in measurement and data analysis"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 1: Introduction: Significance of Mechanical Measurements"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464301"
status: "completed"
scrapedAt: "2026-05-20T18:11:27.817Z"
---
# ENGINEERING INSTRUMENTS AND MEASUREMENTS

## Module 1: Introduction: Significance of Mechanical Measurements

### Topic: Errors in Measurement and Data Analysis

**Learning Outcomes:**

*   Understand the sources and types of errors in mechanical measurements.
*   Quantify and analyze measurement errors.
*   Apply statistical methods for data analysis and interpretation.
*   Select appropriate measuring instruments based on error considerations.
*   Improve measurement accuracy and reliability.

**Course Outcomes Addressed:**

*   **CO1 (K2):** Understanding the fundamental concepts of measurement, including the inherent presence of errors, which is a prerequisite for classifying instruments and understanding their characteristics.
*   **CO5 (K3):** The ability to select measurement systems is directly influenced by understanding the potential errors associated with different instruments and methods, enabling informed decisions.

---

### 1. Introduction to Errors in Measurement

**Key Concept:** No measurement is perfect. Every measurement process is subject to uncertainties and deviations from the true value. These deviations are collectively termed as "errors."

**Definition:** An **error** in measurement is the difference between the measured value and the true value of the quantity being measured.

**True Value vs. Measured Value:**

*   **True Value:** The actual, exact value of the quantity being measured. This is often an ideal or theoretical value that is practically impossible to determine precisely in many engineering applications.
*   **Measured Value (Observed Value):** The value obtained from a measurement using a specific instrument and method.

**Importance of Understanding Errors:**

*   **Accuracy and Reliability:** Knowing the types and magnitudes of errors helps assess the accuracy and reliability of a measurement.
*   **Instrument Selection:** It guides the selection of appropriate measuring instruments for a given application, considering the acceptable error limits.
*   **Process Improvement:** Identifying the sources of error can lead to improvements in measurement techniques, instrument calibration, and experimental procedures.
*   **Decision Making:** Understanding the uncertainty associated with measurements is crucial for making informed engineering decisions.

**Reference:**
*   **Dobelin, E.O. (1990).** *Measurement Systems (Applications and Design)*, Chapter 2: "Measurement Errors". Dobelin provides a foundational understanding of error analysis and its importance in measurement systems.
*   **Sawhney, A.K. & Sawhney, P. (2009).** *Mechanical Measurements and Instrumentation & Control*, Chapter 1: "Introduction to Measurement and Instrumentation". This text often introduces the concept of errors early on as a fundamental aspect of instrumentation.
*   **Nakra, B.C. & Chaudhry, K.K. (2009).** *Instrumentation Measurement and Analysis*, Chapter 2: "Errors in Measurements". Nakra and Chaudhry offer a detailed breakdown of various error sources.

---

### 2. Classification of Errors

Errors can be broadly classified based on their nature and origin.

#### 2.1. Gross Errors (Mistakes or Blunders)

*   **Definition:** These are large, significant errors that arise due to human mistakes, faulty judgment, or procedural errors. They are usually non-recurring.
*   **Examples:**
    *   Incorrect reading of a scale (e.g., parallax error).
    *   Misinterpretation of instrument readings.
    *   Using a damaged or uncalibrated instrument.
    *   Incorrectly connecting a circuit.
    *   Typographical errors during data recording.
*   **Prevention:** Careful observation, proper training, standardized procedures, and independent checks.
*   **Elimination:** While not predictable, gross errors are usually identified during the measurement process or by repeating the measurement. If a result seems wildly off, a gross error is suspected.

#### 2.2. Systematic Errors (Bias)

*   **Definition:** These errors tend to occur in the same direction and have the same magnitude for repeated measurements under the same conditions. They are often predictable and can be compensated for.
*   **Sources:**
    *   **Instrumental Errors:**
        *   **Calibration Errors:** The instrument is not properly calibrated against a standard.
        *   **Zero Error:** The instrument does not read zero when it should.
        *   **Wear and Tear:** Deterioration of instrument components.
        *   **Design Flaws:** Inherent limitations in the instrument's design.
    *   **Environmental Errors:**
        *   **Temperature:** Changes in ambient temperature affecting instrument performance or the object being measured.
        *   **Humidity:** Affecting electrical components or material properties.
        *   **Pressure:** Affecting fluid measurements or certain sensors.
        *   **Vibration:** Inducing unwanted signals in sensitive instruments.
    *   **Observational Errors:**
        *   **Parallax Error:** The apparent shift in the position of an object when viewed from different angles (though this can sometimes be a gross error if large).
        *   **Subjectivity in Interpolation:** Human judgment when reading between scale divisions.
    *   **Theoretical Errors:**
        *   **Assumptions:** Assumptions made in the theoretical model used to relate the measured quantity to the instrument output might not be perfectly valid.
*   **Characteristics:** Consistent, repeatable, and usually additive or multiplicative in nature.
*   **Elimination/Minimization:**
    *   Proper calibration of instruments.
    *   Controlling environmental conditions.
    *   Using more precise instruments.
    *   Applying correction factors derived from calibration or theoretical analysis.
    *   Using different measurement methods.

**Reference:**
*   **Nakra, B.C. & Chaudhry, K.K. (2009).** *Instrumentation Measurement and Analysis*, Chapter 2: "Errors in Measurements". This book provides a good classification and detailed examples of systematic errors.
*   **Raghavendra, N.V. (2013).** *Engineering metrology and Measurements*, Chapter 3: "Errors in Measurement". Raghavendra discusses the impact of various systematic errors in metrology contexts.

#### 2.3. Random Errors (Indeterminate Errors)

*   **Definition:** These errors vary in magnitude and sign unpredictably from one measurement to the next, even when performed under the same conditions. They are often due to unpredictable fluctuations in conditions or instrument behavior.
*   **Sources:**
    *   **Instrumental Noise:** Unpredictable fluctuations in the electronic components of an instrument.
    *   **Environmental Fluctuations:** Unpredictable small changes in temperature, pressure, etc.
    *   **Observer Variations:** Slight, unpredictable variations in the observer's judgment or reaction time.
    *   **Statistical Fluctuations:** Inherent statistical variations in physical phenomena.
*   **Characteristics:** Unpredictable, fluctuate around the true value, and cannot be eliminated by calibration or correction factors.
*   **Minimization:**
    *   Repeating the measurement multiple times and averaging the results. The average of a large number of random observations tends to approach the true value.
    *   Using more sensitive and stable instruments.
    *   Improving the measurement environment.

**Reference:**
*   **Dobelin, E.O. (1990).** *Measurement Systems (Applications and Design)*, Chapter 2: "Measurement Errors". Dobelin extensively covers random errors and their statistical treatment.
*   **Kumar, D.S. (2012).** *Mechanical Measurement and Control*, Chapter 1: "Introduction to Measurements". Kumar's text often links random errors to statistical analysis techniques.

---

### 3. Quantifying Errors

Errors are typically expressed in several ways:

#### 3.1. Absolute Error (AE)

*   **Definition:** The difference between the measured value and the true value.
*   **Formula:**
    $AE = Measured\;Value - True\;Value$
*   **Units:** Same as the measured quantity.
*   **Limitation:** Absolute error is often difficult to interpret because its significance depends on the magnitude of the true value. An error of 1 mm is significant for measuring a thin wire but insignificant for measuring the diameter of a large pipe.

#### 3.2. Relative Error (RE)

*   **Definition:** The ratio of the absolute error to the true value. It expresses the error as a fraction or percentage of the true value, providing a normalized measure of accuracy.
*   **Formula:**
    $RE = \frac{Absolute\;Error}{True\;Value} = \frac{Measured\;Value - True\;Value}{True\;Value}$
*   **Units:** Dimensionless (often expressed as a percentage).
*   **Formula (Percentage Relative Error):**
    $Percentage\;RE = \left| \frac{Measured\;Value - True\;Value}{True\;Value} \right| \times 100\%$
*   **Advantage:** Relative error is more informative than absolute error as it indicates the magnitude of the error in proportion to the size of the quantity being measured.

#### 3.3. Percentage Limiting Error (or Tolerance)

*   **Definition:** The maximum permissible error in a measurement, often specified by the manufacturer for a particular instrument. It's usually expressed as a percentage of the full-scale reading (FSR) or a percentage of the true value.
*   **For Instruments with a Fixed Range:** It's often specified as a percentage of the Full-Scale Reading (FSR).
    $Percentage\;Limiting\;Error = \pm \left( \frac{Specified\;Percentage}{100} \right) \times FSR$
*   **Example:** A voltmeter with a range of 0-150 V has a stated accuracy of ±1% of FSR.
    *   Limiting Error = ±(1/100) * 150 V = ±1.5 V.
    *   This means any reading on this voltmeter will be within ±1.5 V of the true value. If the reading is 100 V, the true value could be between 98.5 V and 101.5 V.

#### 3.4. Accuracy

*   **Definition:** A measure of how close a measured value is to the true value. Higher accuracy means smaller errors.
*   **Often expressed as:**
    *   Percentage of true value.
    *   Percentage of full-scale reading.
    *   Tolerance (e.g., ±0.5 mm).

#### 3.5. Precision

*   **Definition:** A measure of the reproducibility or repeatability of a measurement. It describes how close a series of measurements are to each other.
*   **Distinction from Accuracy:** An instrument can be precise but not accurate, or accurate but not precise.
    *   **Precise but not Accurate:** Repeated measurements cluster tightly together but are consistently offset from the true value (systematic error).
    *   **Accurate but not Precise:** Measurements are scattered but their average is close to the true value (significant random error).
    *   **Precise and Accurate:** Measurements are clustered tightly around the true value.

**Example:** Consider target practice:
*   **Precise but not Accurate:** All shots are clustered in one spot, but that spot is far from the bullseye.
*   **Accurate but not Precise:** Shots are scattered widely across the target, but their average location is near the bullseye.
*   **Precise and Accurate:** Shots are clustered tightly around the bullseye.

**Reference:**
*   **Jain, R.K. (2022).** *A Text Book of Engineering Metrology*, Chapter 2: "Measurement Systems and Standards". Jain often emphasizes the distinction between accuracy and precision in metrology.
*   **Sawhney, A.K. & Sawhney, P. (2009).** *Mechanical Measurements and Instrumentation & Control*, Chapter 1: "Introduction to Measurement and Instrumentation". This text usually dedicates a section to defining and differentiating accuracy and precision.

---

### 4. Data Analysis and Statistical Methods

When random errors are present, statistical methods are essential for analyzing measurement data and estimating the true value and its uncertainty.

#### 4.1. Arithmetic Mean (Average)

*   **Definition:** The sum of all measured values divided by the number of measurements. For random errors, the arithmetic mean is the best estimate of the true value.
*   **Formula:**
    $\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$
    Where:
    *   $\bar{x}$ is the arithmetic mean.
    *   $x_i$ is the $i$-th measurement.
    *   $n$ is the total number of measurements.

#### 4.2. Deviation from the Mean

*   **Definition:** The difference between each individual measurement and the arithmetic mean.
*   **Formula:**
    $d_i = x_i - \bar{x}$
*   **Property:** The sum of deviations from the mean is always zero ($\sum d_i = 0$).

#### 4.3. Average Deviation (AD)

*   **Definition:** The average of the absolute values of the deviations from the mean.
*   **Formula:**
    $AD = \frac{\sum_{i=1}^{n} |d_i|}{n} = \frac{\sum_{i=1}^{n} |x_i - \bar{x}|}{n}$
*   **Interpretation:** A measure of the spread of the data.

#### 4.4. Standard Deviation (SD)

*   **Definition:** A measure of the dispersion or spread of a dataset around its mean. It is the most commonly used measure of the variability of random errors. The standard deviation of the sample is an estimate of the standard deviation of the population from which the sample was drawn.
*   **Formula (for a sample):**
    $s = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}}$
    *   The denominator $(n-1)$ is used for the sample standard deviation (Bessel's correction) to provide a less biased estimate of the population standard deviation.
*   **Interpretation:** A smaller standard deviation indicates that the data points are clustered closer to the mean, implying less random error.

#### 4.5. Variance

*   **Definition:** The square of the standard deviation.
*   **Formula (for a sample):**
    $s^2 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}$

#### 4.6. Standard Error of the Mean (SEM)

*   **Definition:** The standard deviation of the sampling distribution of the mean. It measures how much the sample mean is likely to vary from the true population mean.
*   **Formula:**
    $SEM = \frac{s}{\sqrt{n}}$
*   **Interpretation:** A smaller SEM indicates that the sample mean is a more reliable estimate of the true mean. As $n$ increases, SEM decreases, meaning the average of more measurements is a better estimate of the true value.

#### 4.7. Confidence Interval

*   **Definition:** A range of values within which the true value is expected to lie with a certain level of confidence (e.g., 95% or 99%).
*   **Calculation:**
    $Confidence\;Interval = \bar{x} \pm Z \times SEM$
    Where:
    *   $Z$ is the Z-score corresponding to the desired confidence level (e.g., 1.96 for 95% confidence, 2.576 for 99% confidence, assuming a large sample size and normal distribution).
*   **Interpretation:** A 95% confidence interval means that if we were to repeat the experiment many times, 95% of the calculated confidence intervals would contain the true value.

#### 4.8. Gaussian Distribution (Normal Distribution)

*   **Concept:** Random errors often follow a normal distribution when a large number of measurements are taken. The probability density function (PDF) of the normal distribution is bell-shaped, with the mean at the center.
*   **Significance:** The properties of the normal distribution allow us to predict the likelihood of errors falling within certain ranges.

**Reference:**
*   **Dobelin, E.O. (1990).** *Measurement Systems (Applications and Design)*, Chapter 2: "Measurement Errors". Dobelin dedicates significant space to the statistical treatment of random errors, including standard deviation and its interpretation.
*   **Nakra, B.C. & Chaudhry, K.K. (2009).** *Instrumentation Measurement and Analysis*, Chapter 3: "Statistical Analysis of Measurement Data". This is a key chapter for understanding the application of statistical tools in measurement analysis.
*   **Singh, S.K. (2009).** *Industrial Instrumentation and Control*, Chapter 1: "Introduction to Instrumentation". Singh often provides practical examples of statistical analysis in industrial settings.

---

### 5. Error Propagation

*   **Definition:** When a quantity is determined from a calculation involving several measured quantities, each with its own uncertainty, the uncertainties combine to create an overall uncertainty in the calculated result. This is known as error propagation.
*   **General Rule (for uncorrelated variables):** If $Z = f(X, Y)$, where $X$ and $Y$ are independent measurements with uncertainties $\Delta X$ and $\Delta Y$, then the uncertainty in $Z$, $\Delta Z$, is given by:
    $(\Delta Z)^2 = \left(\frac{\partial f}{\partial X}\right)^2 (\Delta X)^2 + \left(\frac{\partial f}{\partial Y}\right)^2 (\Delta Y)^2$
*   **Common Cases:**
    *   **Addition/Subtraction:** If $Z = X \pm Y$, then $\Delta Z = \sqrt{(\Delta X)^2 + (\Delta Y)^2}$ (uncertainties add in quadrature).
    *   **Multiplication/Division:** If $Z = X \times Y$ or $Z = X / Y$, then $\frac{\Delta Z}{|Z|} = \sqrt{\left(\frac{\Delta X}{X}\right)^2 + \left(\frac{\Delta Y}{Y}\right)^2}$ (relative uncertainties add in quadrature).
    *   **Multiplication by a Constant:** If $Z = aX$, then $\Delta Z = |a| \Delta X$ and $\frac{\Delta Z}{Z} = \frac{\Delta X}{X}$.

**Reference:**
*   **Nakra, B.C. & Chaudhry, K.K. (2009).** *Instrumentation Measurement and Analysis*, Chapter 4: "Error Analysis and Propagation". This book provides a comprehensive treatment of error propagation rules with examples.
*   **Dobelin, E.O. (1990).** *Measurement Systems (Applications and Design)*, Chapter 2: "Measurement Errors". Dobelin also covers the principles of error propagation.

---

### 6. Improving Measurement Accuracy

*   **Instrument Selection:** Choose instruments with appropriate accuracy and precision for the required measurement.
*   **Calibration:** Regularly calibrate instruments against traceable standards.
*   **Proper Usage:** Follow manufacturer guidelines and established procedures for using instruments.
*   **Environmental Control:** Minimize the impact of environmental factors (temperature, vibration, etc.).
*   **Multiple Readings:** Take multiple readings and average them to reduce the effect of random errors.
*   **Statistical Analysis:** Use statistical tools to quantify and understand the uncertainties.
*   **Error Compensation:** Apply correction factors for known systematic errors.
*   **Method Selection:** Choose the measurement method that minimizes potential errors.

---

### 7. Summary of Key Concepts and Important Points to Remember

*   **Errors are inherent** in all measurements.
*   **Three main types of errors:** Gross Errors, Systematic Errors, and Random Errors.
*   **Gross errors** are due to mistakes and are usually eliminated by repetition and care.
*   **Systematic errors** are consistent and can be reduced by calibration, correction factors, or improved techniques. They affect accuracy.
*   **Random errors** are unpredictable and are reduced by averaging multiple readings. They affect precision.
*   **Absolute Error:** Measured Value - True Value.
*   **Relative Error:** (Absolute Error / True Value) x 100% (more informative).
*   **Accuracy vs. Precision:** Accuracy is closeness to the true value; Precision is reproducibility.
*   **Arithmetic Mean** is the best estimate for the true value when random errors are present.
*   **Standard Deviation** quantifies the spread of random errors.
*   **Standard Error of the Mean** indicates the reliability of the sample mean as an estimate of the true mean.
*   **Confidence Intervals** provide a range for the true value with a certain probability.
*   **Error propagation** is crucial when calculations involve multiple measured quantities.

---

### 8. Practice Questions and Exercises

**Question 1:**
A resistor is measured to have a value of 99 $\Omega$. The true value is known to be 100 $\Omega$. Calculate the absolute error and the percentage relative error.

**Answer 1:**
*   Absolute Error (AE) = Measured Value - True Value = 99 $\Omega$ - 100 $\Omega$ = -1 $\Omega$.
*   Percentage Relative Error = $\left| \frac{AE}{True\;Value} \right| \times 100\% = \left| \frac{-1\; \Omega}{100\; \Omega} \right| \times 100\% = 1\%$.

---

**Question 2:**
A digital thermometer has a stated accuracy of ±0.5% of reading. If the thermometer displays a temperature of 25.0 °C, what is the range of the true temperature?

**Answer 2:**
*   The specified error is ±0.5% of the reading.
*   Error = ±(0.5/100) * 25.0 °C = ±0.125 °C.
*   The true temperature lies in the range: 25.0 °C - 0.125 °C to 25.0 °C + 0.125 °C.
*   True Temperature Range = 24.875 °C to 25.125 °C.

---

**Question 3:**
A pressure gauge with a full-scale range of 500 kPa has an accuracy of ±1% of full-scale reading. What is the maximum error in measurement, and what is the percentage error if the actual pressure is 200 kPa?

**Answer 3:**
*   Maximum Error (Absolute Error at Full Scale) = ±(1/100) * 500 kPa = ±5 kPa.
*   When the actual pressure is 200 kPa, the measured value could be anywhere between 195 kPa and 205 kPa (assuming the error is a systematic one centered around the reading). If the true value is 200 kPa and the measured value is, say, 202 kPa, the error is +2 kPa.
*   The question asks for the percentage error *if the actual pressure is 200 kPa*. This implies the percentage error relative to the true value.
*   If the reading is 200 kPa and the error is, for instance, +2 kPa, the percentage error relative to the true value is:
    Percentage Error = $\left| \frac{Measured\;Value - True\;Value}{True\;Value} \right| \times 100\% = \left| \frac{202\; kPa - 200\; kPa}{200\; kPa} \right| \times 100\% = \frac{2}{200} \times 100\% = 1\%$.
    *Note: The ±1% of FSR means the maximum possible absolute error is ±5 kPa. So, for a true pressure of 200 kPa, the measured value can range from 195 kPa to 205 kPa. The percentage error relative to the true value (200 kPa) could be up to (±5 kPa / 200 kPa) * 100% = ±2.5%.* The phrasing of the question is a bit ambiguous, but commonly, when asked for percentage error at a specific reading based on FSR tolerance, it means the maximum possible percentage error relative to the true value.

---

**Question 4:**
Five measurements of a voltage were taken as: 10.2 V, 10.3 V, 10.1 V, 10.4 V, 10.2 V. Calculate:
a) The arithmetic mean.
b) The standard deviation.
c) The standard error of the mean.

**Answer 4:**
Given measurements: 10.2, 10.3, 10.1, 10.4, 10.2 (n=5)

a) **Arithmetic Mean ($\bar{x}$):**
$\bar{x} = \frac{10.2 + 10.3 + 10.1 + 10.4 + 10.2}{5} = \frac{51.2}{5} = 10.24\;V$

b) **Standard Deviation ($s$):**
First, calculate deviations from the mean ($d_i = x_i - \bar{x}$):
*   $d_1 = 10.2 - 10.24 = -0.04$
*   $d_2 = 10.3 - 10.24 = +0.06$
*   $d_3 = 10.1 - 10.24 = -0.14$
*   $d_4 = 10.4 - 10.24 = +0.16$
*   $d_5 = 10.2 - 10.24 = -0.04$

Now, calculate $d_i^2$:
*   $d_1^2 = (-0.04)^2 = 0.0016$
*   $d_2^2 = (0.06)^2 = 0.0036$
*   $d_3^2 = (-0.14)^2 = 0.0196$
*   $d_4^2 = (0.16)^2 = 0.0256$
*   $d_5^2 = (-0.04)^2 = 0.0016$

Sum of squares ($\sum d_i^2$) = 0.0016 + 0.0036 + 0.0196 + 0.0256 + 0.0016 = 0.0520

Standard Deviation ($s$) = $\sqrt{\frac{\sum d_i^2}{n-1}} = \sqrt{\frac{0.0520}{5-1}} = \sqrt{\frac{0.0520}{4}} = \sqrt{0.013} \approx 0.114\;V$

c) **Standard Error of the Mean (SEM):**
$SEM = \frac{s}{\sqrt{n}} = \frac{0.114\;V}{\sqrt{5}} = \frac{0.114\;V}{2.236} \approx 0.051\;V$

---

**Question 5:**
If the true length of a shaft is 50.00 mm, and the measured length is 50.05 mm, what type of error is predominantly indicated by this single measurement? If you took 100 measurements and the average was 50.05 mm, but the individual measurements varied significantly, what would this suggest about the errors?

**Answer 5:**
*   **Single Measurement:** The single measurement (50.05 mm) shows a deviation from the true value (50.00 mm). This deviation is an absolute error of +0.05 mm. Without further information, it's hard to definitively classify the error. However, if this deviation is consistent across multiple measurements taken under similar conditions, it suggests a **systematic error** (e.g., a slight offset in the measuring instrument or a temperature difference). If the deviation varies unpredictably, it could be a **random error**, but a single measurement isn't enough to confirm this.
*   **100 Measurements with Average 50.05 mm and Significant Variation:**
    *   The average being 50.05 mm suggests a potential **systematic error** of +0.05 mm (assuming the true value is indeed 50.00 mm).
    *   The significant variation in individual measurements indicates the presence of substantial **random errors**.
    *   In this scenario, you have both systematic and random errors. The systematic error contributes to the shift of the average from the true value, while the random errors cause the spread of the individual measurements around that average.

---

This comprehensive set of notes covers the fundamental aspects of errors in measurement, their classification, quantification, statistical analysis, and methods for improvement, directly addressing the learning outcomes and aligning with the provided course outcomes at the specified knowledge levels.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
