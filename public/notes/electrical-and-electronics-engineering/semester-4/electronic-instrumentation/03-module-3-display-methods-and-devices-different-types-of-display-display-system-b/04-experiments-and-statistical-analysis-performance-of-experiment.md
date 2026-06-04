---
title: "Experiments and statistical analysis: Performance of experiment-"
subject: "ELECTRONIC INSTRUMENTATION"
module: "Module 3: Display methods and devices: Different types of display –display system building blocks."
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e83"
status: "completed"
scrapedAt: "2026-05-23T16:16:20.526Z"
---
# Electronic Instrumentation: Module 3 - Display Methods and Devices

## Topic: Experiments and Statistical Analysis: Performance of Experiment

This module delves into the crucial aspect of evaluating the performance of experiments and measurement systems, a fundamental skill in electronic instrumentation. Understanding how to conduct experiments and analyze their results statistically is vital for ensuring the accuracy, reliability, and validity of measurements. This topic directly contributes to **CO5: Analyze the performance of measurement systems using statistical methods (Knowledge Level: K4)**.

---

### 1. Performance of an Experiment

An experiment in electronic instrumentation is a controlled procedure designed to investigate the relationship between variables or to measure a specific quantity. The "performance" of an experiment refers to how well it achieves its intended objectives, particularly in terms of the quality and reliability of the data obtained.

#### 1.1. Key Concepts and Definitions

*   **Measurement System:** A system designed to quantify a physical quantity. It typically consists of a transducer, signal conditioning circuitry, and a display device.
*   **Experiment:** A planned procedure designed to gather data to test a hypothesis, demonstrate a principle, or determine the characteristics of a system.
*   **Variable:** A quantity that can change or vary within an experiment.
    *   **Independent Variable:** The variable that is manipulated or changed by the experimenter.
    *   **Dependent Variable:** The variable that is measured and is expected to change in response to the independent variable.
    *   **Controlled Variable:** Variables that are kept constant during the experiment to prevent them from influencing the results.
*   **Accuracy:** The closeness of a measurement to the true value of the quantity being measured.
*   **Precision:** The degree of agreement among several measurements of the same quantity, taken under the same conditions. It indicates the reproducibility of the measurements.
*   **Resolution:** The smallest change in a quantity that a measurement system can detect.
*   **Sensitivity:** The ratio of the change in the output of a measurement system to the change in the input that caused it.
*   **Error:** The difference between the measured value and the true value of a quantity.
    *   **Absolute Error:** The difference between the measured value and the true value ($E_a = x_m - x_t$).
    *   **Relative Error:** The ratio of the absolute error to the true value ($E_r = E_a / x_t$). Often expressed as a percentage.
    *   **Systematic Error (Bias):** Errors that are consistent and repeatable, often due to instrument calibration issues or inherent design flaws. They affect accuracy.
    *   **Random Error:** Errors that vary unpredictably from one measurement to another, often due to environmental factors or limitations in human observation. They affect precision.
*   **Calibration:** The process of comparing the output of a measurement instrument with a known standard to ensure its accuracy.

#### 1.2. Factors Affecting Experimental Performance

The performance of an experiment is influenced by several factors:

*   **Instrument Characteristics:**
    *   **Accuracy and Precision of the measuring instrument:** Using instruments with inadequate specifications will lead to poor results.
    *   **Resolution of the display:** A display with low resolution might not be able to show small changes in the measured quantity.
    *   **Sensitivity and range of the instrument:** The instrument must be sensitive enough to detect the desired changes and its range must be appropriate for the expected values.
*   **Experimental Setup:**
    *   **Proper grounding and shielding:** To minimize electrical noise interference.
    *   **Environmental conditions:** Temperature, humidity, vibration, and ambient electromagnetic fields can all influence measurements.
    *   **Stability of power supply:** Fluctuations in power can affect instrument performance.
*   **Procedure and Technique:**
    *   **Consistency of measurement technique:** Variations in how measurements are taken can introduce random errors.
    *   **Correct reading of instruments:** Parallax error, for instance, can occur when reading analog meters.
*   **Data Acquisition and Processing:**
    *   **Sampling rate (for digital systems):** Too low a sampling rate can lead to aliasing.
    *   **Data logging and storage:** Ensuring data integrity during storage.
    *   **Signal conditioning:** Proper amplification, filtering, and conversion of signals.

#### 1.3. Elements of a Measurement System Building Blocks (Revisited in the context of performance)

(Referencing Kalsi, H.S., Electronic Instrumentation, 4th Ed., Chapter 1: Introduction to Electronic Instrumentation)

While Module 3 focuses on displays, understanding how they fit into the broader measurement system is crucial for evaluating experimental performance.

1.  **Transducer:** Converts the physical quantity into an electrical signal (e.g., strain gauge, thermocouple, LVDT). Its performance (accuracy, linearity, sensitivity) directly impacts the overall experiment.
2.  **Signal Conditioning:** Amplifies, filters, isolates, and converts the transducer's signal into a usable form for display or further processing. Poorly designed signal conditioning can introduce noise, distortion, or offset errors.
3.  **Display Device:** Presents the processed signal in a human-readable format (e.g., analog meter, digital display, oscilloscope). The display's resolution, update rate, and readability are critical for interpreting experimental results.

**Example:** Consider an experiment to measure the temperature of a water bath using a thermocouple and a digital voltmeter.
*   **Transducer:** Thermocouple (Type J, K, etc.). Its accuracy and drift over time will affect the measurement.
*   **Signal Conditioning:** May include a cold-junction compensation circuit and amplification. Imperfect compensation or amplifier noise will impact results.
*   **Display:** Digital Voltmeter. Its resolution (e.g., 3.5 digits vs. 5.5 digits) determines the smallest temperature change that can be observed.

---

### 2. Statistical Analysis of Experimental Data

Statistical analysis is essential for making sense of experimental data, quantifying uncertainties, and drawing valid conclusions. It helps to distinguish between real changes and random fluctuations.

#### 2.1. Key Statistical Concepts and Techniques

(Referencing Sawhney, A.K., Electrical and Electronic Measurements & Instrumentation, Chapters related to Errors and Measurements)

*   **Measures of Central Tendency:**
    *   **Mean ($\bar{x}$):** The average of a set of measurements. It's often the best estimate of the true value when random errors are present.
        $\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$
        Where $x_i$ are individual measurements and $n$ is the number of measurements.
    *   **Median:** The middle value in a sorted dataset. Less sensitive to outliers than the mean.
    *   **Mode:** The most frequently occurring value.

*   **Measures of Dispersion (Variability):**
    *   **Range:** The difference between the maximum and minimum values in a dataset.
    *   **Standard Deviation ($\sigma$ or $s$):** A measure of the spread or dispersion of data points around the mean. A lower standard deviation indicates that the data points are clustered closely around the mean, signifying higher precision.
        For a sample: $s = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}}$
        For a population: $\sigma = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \mu)^2}{N}}$
        Where $\mu$ is the population mean and $N$ is the population size.
    *   **Variance ($\sigma^2$ or $s^2$):** The square of the standard deviation.

*   **Probability Distributions:**
    *   **Normal Distribution (Gaussian Distribution):** A bell-shaped curve that describes the distribution of many random variables. It's characterized by its mean and standard deviation. Many measurement errors tend to follow a normal distribution.
        The probability density function (PDF) is given by:
        $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^2}$
    *   **Standard Normal Distribution:** A normal distribution with a mean of 0 and a standard deviation of 1. Z-scores are used to convert values from any normal distribution to the standard normal distribution.
        $Z = \frac{x - \mu}{\sigma}$

*   **Confidence Intervals:** A range of values that is likely to contain the true value of a parameter (e.g., the mean) with a certain level of confidence.
    *   For a large sample or known population standard deviation, the confidence interval for the mean is:
        $\bar{x} \pm Z_{\alpha/2} \frac{\sigma}{\sqrt{n}}$
        Where $Z_{\alpha/2}$ is the Z-score corresponding to the desired confidence level (e.g., 1.96 for 95% confidence).
    *   For a small sample ($n < 30$) and unknown population standard deviation, the t-distribution is used:
        $\bar{x} \pm t_{\alpha/2, n-1} \frac{s}{\sqrt{n}}$
        Where $t_{\alpha/2, n-1}$ is the critical value from the t-distribution with $n-1$ degrees of freedom.

*   **Hypothesis Testing:** A statistical method used to determine whether there is enough evidence in a sample of data to conclude that a certain condition is true for the entire population.

#### 2.2. Steps in Designing and Performing an Experiment for Performance Analysis

1.  **Define Objectives:** Clearly state what you want to measure or investigate. What is the hypothesis?
2.  **Identify Variables:** Determine the independent, dependent, and controlled variables.
3.  **Select Appropriate Instruments:** Choose instruments with specifications (accuracy, resolution, range) suitable for the task.
4.  **Develop a Procedure:** Outline the step-by-step process for conducting the experiment, ensuring consistency.
5.  **Minimize Errors:**
    *   **Systematic Errors:**
        *   **Calibration:** Calibrate instruments before use against known standards.
        *   **Correct Usage:** Ensure instruments are used as intended.
        *   **Environmental Control:** Minimize environmental influences where possible.
    *   **Random Errors:**
        *   **Repeat Measurements:** Take multiple readings of the same quantity under identical conditions.
        *   **Average Results:** Use the mean of repeated measurements as the best estimate.
6.  **Collect Data:** Record all measurements systematically, noting any unusual observations.
7.  **Analyze Data:**
    *   Calculate descriptive statistics (mean, standard deviation, range).
    *   Determine the uncertainty in the measurements.
    *   Plot the data (e.g., scatter plots, histograms) to visualize trends and distributions.
    *   Perform hypothesis tests if necessary.
8.  **Interpret Results:** Draw conclusions based on the statistical analysis, considering the uncertainties.
9.  **Report Findings:** Document the experimental setup, procedure, data, analysis, and conclusions clearly and concisely.

#### 2.3. Example: Analyzing the Performance of a Digital Voltmeter (DVM)

**Objective:** To determine the accuracy and precision of a 3.5-digit DVM when measuring a stable DC voltage source (e.g., a precision voltage reference).

**Procedure:**
1.  Calibrate the voltage source if necessary.
2.  Set the voltage source to a specific value, say 5.000 V.
3.  Connect the DVM to the voltage source.
4.  Record 20 readings from the DVM over a period of 5 minutes, ensuring the DVM's stability.
5.  Repeat steps 2-4 for several different voltage levels (e.g., 1.000 V, 2.500 V, 7.500 V).

**Data Analysis (for 5.000 V measurements):**

Let's assume the recorded readings are:
5.001, 5.003, 5.000, 5.002, 5.004, 5.001, 5.003, 5.000, 5.002, 5.004,
5.001, 5.003, 5.000, 5.002, 5.004, 5.001, 5.003, 5.000, 5.002, 5.004

**Calculations:**

*   **Number of readings ($n$):** 20
*   **True Value ($x_t$):** 5.000 V
*   **Sum of readings ($\sum x_i$):** 100.070 V
*   **Mean ($\bar{x}$):** $100.070 / 20 = 5.0035$ V
*   **Absolute Error (of the mean):** $E_a = \bar{x} - x_t = 5.0035 - 5.000 = 0.0035$ V
*   **Relative Error (of the mean):** $E_r = (0.0035 / 5.000) \times 100\% = 0.07\%$

To calculate precision, we need the standard deviation:
*   Calculate $(x_i - \bar{x})^2$ for each reading.
*   Sum these squared differences.
*   Calculate variance $s^2 = \frac{\sum (x_i - \bar{x})^2}{n-1}$.
*   Calculate standard deviation $s = \sqrt{s^2}$.

Let's assume, after calculation, $s = 0.0015$ V.

**Interpretation:**
*   **Accuracy:** The mean reading is 5.0035 V, indicating an absolute error of +0.0035 V. The relative error is 0.07%. The DVM is reasonably accurate for this voltage.
*   **Precision:** The standard deviation of 0.0015 V suggests that the readings are tightly clustered around the mean, indicating good precision.

**Confidence Interval (95%):**
Assuming the errors are normally distributed, we use the t-distribution for a small sample.
$t_{0.025, 19} \approx 2.093$ (from t-table)
Confidence Interval = $\bar{x} \pm t_{0.025, 19} \frac{s}{\sqrt{n}}$
CI = $5.0035 \pm 2.093 \frac{0.0015}{\sqrt{20}}$
CI = $5.0035 \pm 2.093 \times 0.000335$
CI = $5.0035 \pm 0.00070$
CI = [5.0028 V, 5.0042 V]

**Conclusion:** We can be 95% confident that the true mean voltage measured by the DVM under these conditions lies between 5.0028 V and 5.0042 V. This analysis helps in understanding the DVM's performance characteristics.

---

### 3. Important Points to Remember

*   **Accuracy vs. Precision:** High accuracy means measurements are close to the true value. High precision means repeated measurements are close to each other. An instrument can be precise but not accurate, or accurate but not precise.
*   **Errors are Inevitable:** All measurements have errors. The goal of statistical analysis is to quantify and minimize these errors.
*   **Multiple Measurements:** Always take multiple readings and average them to improve precision and reduce the impact of random errors.
*   **Standard Deviation is Key:** Standard deviation is a direct indicator of the spread of data and thus the precision of the measurements.
*   **Confidence Levels Matter:** When reporting results, always state the confidence level associated with any calculated interval.
*   **Context is Crucial:** The acceptable level of error depends on the application. A slight error in measuring room temperature might be acceptable, but the same error in measuring a critical component in a medical device could be catastrophic.
*   **Understanding Instrument Specifications:** Know the manufacturer's specifications for accuracy, resolution, linearity, etc., and compare them with your experimental results.

---

### 4. Practice Questions and Exercises

**Question 1:**
An experiment involves measuring the resistance of a resistor using an ohmmeter. The true resistance is 100 $\Omega$. Ten readings are taken and recorded as: 99.5 $\Omega$, 100.2 $\Omega$, 99.8 $\Omega$, 100.0 $\Omega$, 100.5 $\Omega$, 99.7 $\Omega$, 100.3 $\Omega$, 99.9 $\Omega$, 100.1 $\Omega$, 100.4 $\Omega$.

a) Calculate the mean of these readings.
b) Calculate the absolute error of the mean.
c) Calculate the relative error of the mean.
d) If the standard deviation of these readings is calculated to be 0.3 $\Omega$, what is the precision of the measurements?
e) Calculate the 95% confidence interval for the mean, assuming a normal distribution of errors and using an appropriate critical value (assume $t_{0.025, 9} \approx 2.262$).

**Question 2:**
Explain the difference between systematic error and random error, and provide one method to reduce each type of error in an experiment.

**Question 3:**
A sensor outputs a voltage that is supposed to be proportional to temperature. An experiment is conducted to verify this. The readings are plotted, showing a general upward trend but with significant scatter. Which statistical measure would best describe the *spread* of the data points around the best-fit line, and why?

**Question 4:**
The display of a digital multimeter shows "1.234 V". What does each digit represent in terms of the measured quantity and its resolution? If the multimeter is advertised as having an accuracy of "±(0.5% of reading + 2 counts)", how would you interpret this specification?

---

### 5. Answers to Practice Questions

**Answer 1:**

a) **Mean:**
Sum = 99.5 + 100.2 + 99.8 + 100.0 + 100.5 + 99.7 + 100.3 + 99.9 + 100.1 + 100.4 = 1000.4 $\Omega$
Mean ($\bar{x}$) = 1000.4 / 10 = **100.04 $\Omega$**

b) **Absolute Error:**
True Value ($x_t$) = 100 $\Omega$
Absolute Error ($E_a$) = $\bar{x} - x_t = 100.04 - 100 = \mathbf{+0.04 \Omega}$

c) **Relative Error:**
Relative Error ($E_r$) = ($E_a / x_t$) * 100% = (0.04 / 100) * 100% = **0.04%**

d) **Precision:**
The standard deviation is given as 0.3 $\Omega$. This value quantifies the precision of the measurements. A lower standard deviation indicates higher precision. In this case, the spread of the data around the mean is relatively small compared to the measured value.

e) **95% Confidence Interval:**
$\bar{x} \pm t_{0.025, 9} \frac{s}{\sqrt{n}}$
CI = $100.04 \pm 2.262 \frac{0.3}{\sqrt{10}}$
CI = $100.04 \pm 2.262 \times 0.09487$
CI = $100.04 \pm 0.2146$
CI = **[99.8254 $\Omega$, 100.2546 $\Omega$]**
We can be 95% confident that the true resistance lies within this range.

**Answer 2:**

*   **Systematic Error:** An error that is consistent and repeatable. It causes measurements to deviate from the true value by a fixed amount or a fraction.
    *   **Method to Reduce:** Calibration of instruments against a known standard. Ensuring proper setup and usage of equipment (e.g., grounding, correct settings).
*   **Random Error:** An error that varies unpredictably from one measurement to another. It causes scatter in the data.
    *   **Method to Reduce:** Taking multiple measurements and averaging the results. This helps to cancel out the random fluctuations.

**Answer 3:**

The statistical measure that would best describe the spread of data points around the best-fit line is the **standard deviation of the residuals** (or more generally, the standard error of the estimate). The residuals are the differences between the actual data points and the values predicted by the best-fit line. A smaller standard deviation of residuals indicates that the data points are closer to the line, implying a stronger linear relationship and better model fit.

**Answer 4:**

*   **Display "1.234 V":**
    *   **1:** Represents the volts digit.
    *   **.2:** Represents 200 millivolts.
    *   **.03:** Represents 30 millivolts.
    *   **.004:** Represents 4 millivolts.
    The resolution of this display is 1 millivolt (the smallest change the display can show).

*   **Accuracy Specification "±(0.5% of reading + 2 counts)":**
    This means the total error in the measurement is composed of two parts:
    1.  **0.5% of the displayed reading:** This is a proportional error. For a reading of 1.234 V, this part of the error is 0.5% of 1.234 V = 0.00617 V.
    2.  **+ 2 counts:** This is a fixed error, often referred to as the "least significant digit" (LSD) error. Since each count represents 1 millivolt (0.001 V), 2 counts = 2 * 0.001 V = 0.002 V.

    Therefore, the total possible error for a reading of 1.234 V is ±(0.00617 V + 0.002 V) = ±0.00817 V, or approximately ±8.17 millivolts. This indicates that the true voltage could be anywhere between (1.234 - 0.00817) V and (1.234 + 0.00817) V.

---
This concludes the notes for the topic "Experiments and Statistical Analysis: Performance of Experiment" within Module 3. Remember to consult the specified textbooks for more in-depth explanations and examples.
