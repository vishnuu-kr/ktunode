---
title: "Statistical analysis of data"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 1: Introduction: Significance of Mechanical Measurements"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464302"
status: "completed"
scrapedAt: "2026-05-20T18:11:28.513Z"
---
# ENGINEERING INSTRUMENTS AND MEASUREMENTS

## Module 1: Introduction: Significance of Mechanical Measurements

---

## Topic: Statistical Analysis of Data

### 1. Introduction and Significance of Statistical Analysis in Mechanical Measurements

In mechanical engineering, measurements are fundamental to understanding, designing, and controlling systems. However, no measurement is perfect. Every measurement is subject to various sources of error, leading to variations in the obtained values. Statistical analysis provides the tools and techniques to:

*   **Quantify Uncertainty:** Understand the reliability and precision of measurement results.
*   **Identify Trends and Patterns:** Extract meaningful information from a set of measurements.
*   **Make Informed Decisions:** Base engineering conclusions and actions on statistically sound data.
*   **Improve Measurement Processes:** Identify sources of error and implement strategies to reduce them.

**Key Concept:** **Error** is the difference between the measured value and the true value of a quantity. Understanding and quantifying error is central to statistical analysis of measurement data.

**Course Outcome Alignment:** This topic directly supports **CO1** by helping to understand the characteristics of measurement systems and the uncertainties associated with them, enabling proper selection and usage. It also underpins **CO2, CO3, CO4, and CO5** by providing the analytical framework to interpret the data obtained from various measurement devices.

**Textbook References:**
*   **Dobelin (1990):** Discusses the nature of errors and their propagation in measurement systems.
*   **Sawhney & Sawhney (2009):** Covers fundamental statistical concepts as applied to measurement data.
*   **Nakra & Chaudhry (2009):** Explains methods for data analysis and error estimation.

---

### 2. Types of Errors

Understanding the different types of errors is crucial for effective statistical analysis.

*   **Systematic Errors (Bias):**
    *   **Definition:** Errors that are constant in magnitude and sign, or vary in a predictable way, during a series of measurements. They often arise from flaws in the instrument, calibration errors, or environmental conditions.
    *   **Characteristics:** Consistent deviation from the true value. They affect accuracy but not necessarily precision.
    *   **Examples:**
        *   A weighing scale consistently showing 0.5 kg more than the actual weight (constant offset).
        *   A thermometer calibrated incorrectly, always reading 2°C higher.
        *   Parallax error when reading a scale.
    *   **Mitigation:** Calibration, careful instrument selection, proper setup, understanding environmental influences.
    *   **Reference:** *Dobelin (1990)* extensively covers systematic errors and their impact.

*   **Random Errors (Indeterminate Errors):**
    *   **Definition:** Errors that vary unpredictably in magnitude and sign during a series of measurements. They are often due to uncontrollable factors, such as fluctuations in environmental conditions, observer variations, or inherent limitations of the measuring instrument.
    *   **Characteristics:** Unpredictable variations that tend to cancel out over many measurements. They affect precision.
    *   **Examples:**
        *   Slight variations in reaction time when manually operating a stopwatch.
        *   Air currents affecting the reading of a sensitive balance.
        *   Electrical noise in electronic measuring circuits.
    *   **Mitigation:** Taking multiple readings and averaging them, using more precise instruments, improving experimental conditions.
    *   **Reference:** *Sawhney & Sawhney (2009)* and *Nakra & Chaudhry (2009)* provide methods for quantifying and reducing the impact of random errors.

*   **Gross Errors (Blunders/Mistakes):**
    *   **Definition:** Significant errors caused by human mistakes or faulty operations during the measurement process. These are usually obvious and should be discarded.
    *   **Examples:**
        *   Reading the wrong scale on an instrument.
        *   Incorrectly transcribing data.
        *   Loose connections in an electrical circuit.
    *   **Mitigation:** Careful observation, double-checking readings, proper training of personnel.
    *   **Reference:** *Jain (2022)* highlights the importance of avoiding gross errors.

---

### 3. Basic Statistical Concepts and Calculations

When dealing with random errors, statistical tools are employed to analyze a set of measurements.

*   **Single Measurement:** A single observed value.
*   **True Value (Actual Value):** The theoretically correct value of the quantity being measured. Often unknown in practice, so we aim to estimate it.
*   **Observed Value:** The value obtained from a measurement.
*   **Error:** `Error = Observed Value - True Value`
*   **Absolute Error:** The magnitude of the error.
*   **Relative Error:** `Relative Error = (Absolute Error) / (True Value)` or `(Observed Value - True Value) / True Value`. Often expressed as a percentage.
*   **Systematic Error:** `Systematic Error = Average of Observed Values - True Value` (assuming random errors average to zero).
*   **Random Error:** `Random Error = Observed Value - Average of Observed Values`.

**Central Tendency Measures:**

*   **Arithmetic Mean (Average):** The sum of all measurements divided by the number of measurements. It's the best estimate of the true value when random errors are present.
    *   Formula: $\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$
        *   Where $\bar{x}$ is the mean, $x_i$ is the i-th measurement, and $n$ is the total number of measurements.
    *   **Example:** If measurements of a length are 10.1 cm, 10.2 cm, 10.0 cm, 10.3 cm, 10.1 cm, the mean is $(10.1 + 10.2 + 10.0 + 10.3 + 10.1) / 5 = 10.14$ cm.

**Measures of Dispersion (Variability):**

*   **Deviation (or Residual):** The difference between an individual measurement and the mean.
    *   Formula: $d_i = x_i - \bar{x}$
    *   **Example:** For the measurements above, the deviations are: $0.1 - 10.14 = -0.04$, $10.2 - 10.14 = 0.06$, $10.0 - 10.14 = -0.14$, $10.3 - 10.14 = 0.16$, $10.1 - 10.14 = -0.04$.
    *   **Important Note:** The sum of all deviations is always zero.

*   **Average Deviation (Mean Absolute Deviation):** The average of the absolute values of the deviations.
    *   Formula: $AD = \frac{\sum_{i=1}^{n} |x_i - \bar{x}|}{n}$
    *   **Example:** For the above deviations: $(|{-0.04}| + |0.06| + |{-0.14}| + |0.16| + |{-0.04}|) / 5 = (0.04 + 0.06 + 0.14 + 0.16 + 0.04) / 5 = 0.44 / 5 = 0.088$ cm.

*   **Standard Deviation (Root Mean Square Deviation):** A more robust measure of dispersion, widely used in statistical analysis. It is the square root of the average of the squared deviations.
    *   Formula: $\sigma = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n}}$
    *   For a sample (if the measurements are considered a sample from a larger population):
        $s = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}}$ (Bessel's correction is used for sample standard deviation to provide a less biased estimate of the population standard deviation).
    *   **Example:**
        *   Squared deviations: $(-0.04)^2 = 0.0016$, $(0.06)^2 = 0.0036$, $(-0.14)^2 = 0.0196$, $(0.16)^2 = 0.0256$, $(-0.04)^2 = 0.0016$.
        *   Sum of squared deviations: $0.0016 + 0.0036 + 0.0196 + 0.0256 + 0.0016 = 0.052$
        *   Sample Standard Deviation ($s$): $\sqrt{0.052 / (5-1)} = \sqrt{0.013} \approx 0.114$ cm.
        *   Population Standard Deviation ($\sigma$): $\sqrt{0.052 / 5} = \sqrt{0.0104} \approx 0.102$ cm.
    *   **Reference:** *Sawhney & Sawhney (2009)* and *Nakra & Chaudhry (2009)* extensively cover the calculation and interpretation of standard deviation.

*   **Variance:** The square of the standard deviation. It represents the average squared deviation from the mean.
    *   Formula: $\sigma^2 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n}$ or $s^2 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}$

**Important Point:** The standard deviation is a crucial indicator of the spread of data around the mean. A smaller standard deviation indicates that the data points are clustered closely around the mean, implying higher precision.

---

### 4. Probability Distributions

When random errors are present, their distribution often follows certain probability patterns.

*   **Normal Distribution (Gaussian Distribution):**
    *   **Definition:** The most common distribution for random errors. It is a bell-shaped, symmetrical curve.
    *   **Characteristics:**
        *   Mean, median, and mode are equal.
        *   The area under the curve represents probability.
        *   The spread is characterized by the standard deviation ($\sigma$).
    *   **Relevance:** Many physical phenomena and measurement errors approximate a normal distribution, especially when the errors are due to a large number of small, independent causes.
    *   **Standard Normal Distribution:** A normal distribution with a mean of 0 and a standard deviation of 1. It is often denoted by 'z'.
    *   **Reference:** *Dobelin (1990)* and *Sawhney & Sawhney (2009)* explain the importance of the normal distribution in measurement error analysis.

*   **Probability Density Function (PDF) for Normal Distribution:**
    $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$
    Where $\mu$ is the true mean.

*   **Confidence Intervals:**
    *   **Definition:** A range of values, derived from sample statistics, that is likely to contain the true value of a population parameter.
    *   **Concept:** Based on the normal distribution, we can state that a certain percentage of measurements will fall within a certain number of standard deviations from the mean.
        *   Approximately 68.3% of values lie within $\pm 1\sigma$ of the mean.
        *   Approximately 95.5% of values lie within $\pm 2\sigma$ of the mean.
        *   Approximately 99.7% of values lie within $\pm 3\sigma$ of the mean.
    *   **Calculation:** A $(1 - \alpha) \times 100\%$ confidence interval for the mean can be estimated as:
        $\bar{x} \pm z_{\alpha/2} \frac{\sigma}{\sqrt{n}}$ (for population standard deviation $\sigma$)
        $\bar{x} \pm t_{\alpha/2, n-1} \frac{s}{\sqrt{n}}$ (for sample standard deviation $s$, using t-distribution, especially for small sample sizes)
        *   $z_{\alpha/2}$ and $t_{\alpha/2, n-1}$ are critical values from the z-distribution and t-distribution tables, respectively.
    *   **Example:** If the mean of 100 measurements is 50 units with a standard deviation of 5 units, a 95% confidence interval for the true mean would be approximately $50 \pm 2 \times (5 / \sqrt{100}) = 50 \pm 1$ unit, meaning the true mean is likely between 49 and 51 units.

---

### 5. Propagation of Errors

When a measured quantity is a function of other measured quantities, the errors in the individual measurements propagate to the final result.

*   **General Rule for Functions:** If $Y = f(X_1, X_2, ..., X_n)$, and the errors in $X_i$ are independent, the variance of $Y$ is approximately:
    $\sigma_Y^2 \approx \sum_{i=1}^{n} \left(\frac{\partial f}{\partial X_i}\right)^2 \sigma_{X_i}^2$

*   **Common Cases:**
    *   **Addition/Subtraction:** If $Y = X_1 \pm X_2$:
        $\sigma_Y^2 = \sigma_{X_1}^2 + \sigma_{X_2}^2$
        $\sigma_Y = \sqrt{\sigma_{X_1}^2 + \sigma_{X_2}^2}$
        **Example:** If length $L_1 = 100 \pm 0.2$ mm and $L_2 = 50 \pm 0.1$ mm, and the total length is $L = L_1 + L_2$, then $L = 150$ mm and $\sigma_L = \sqrt{(0.2)^2 + (0.1)^2} = \sqrt{0.04 + 0.01} = \sqrt{0.05} \approx 0.22$ mm. So, $L = 150 \pm 0.22$ mm.

    *   **Multiplication:** If $Y = X_1 \times X_2$:
        $\frac{\sigma_Y^2}{Y^2} \approx \frac{\sigma_{X_1}^2}{X_1^2} + \frac{\sigma_{X_2}^2}{X_2^2}$
        This means the sum of squares of relative errors.
        $\sigma_Y \approx |Y| \sqrt{\left(\frac{\sigma_{X_1}}{X_1}\right)^2 + \left(\frac{\sigma_{X_2}}{X_2}\right)^2}$
        **Example:** If voltage $V = 12 \pm 0.1$ V and resistance $R = 100 \pm 1$ $\Omega$, and current $I = V/R$. The nominal current is $12V / 100\Omega = 0.12$ A.
        Relative error in V: $0.1/12$. Relative error in R: $1/100$.
        Relative error in I: $\sqrt{(0.1/12)^2 + (1/100)^2} = \sqrt{(0.00833)^2 + (0.01)^2} = \sqrt{0.0000694 + 0.0001} = \sqrt{0.0001694} \approx 0.013$ or 1.3%.
        Absolute error in I: $0.12 A \times 0.013 \approx 0.00156$ A. So, $I = 0.12 \pm 0.0016$ A.

    *   **Division:** If $Y = X_1 / X_2$:
        $\frac{\sigma_Y^2}{Y^2} \approx \frac{\sigma_{X_1}^2}{X_1^2} + \frac{\sigma_{X_2}^2}{X_2^2}$ (Same as multiplication)

    *   **Raising to a Power:** If $Y = X^n$:
        $\frac{\sigma_Y}{Y} \approx |n| \frac{\sigma_X}{X}$
        **Example:** If Area $A = L^2$, where $L = 10 \pm 0.1$ cm. Nominal Area $A = 10^2 = 100$ cm$^2$.
        Relative error in A: $2 \times (0.1/10) = 2 \times 0.01 = 0.02$ or 2%.
        Absolute error in A: $100 \times 0.02 = 2$ cm$^2$. So, $A = 100 \pm 2$ cm$^2$.

**Reference:** *Nakra & Chaudhry (2009)* and *Dobelin (1990)* provide comprehensive coverage of error propagation formulas.

---

### 6. Least Squares Method

*   **Definition:** A method used to find the best-fitting straight line (or curve) through a set of data points that are subject to random errors. It minimizes the sum of the squares of the vertical distances (residuals) between the data points and the line.
*   **Application:** Used to determine the relationship between two variables, such as in calibration curves or stress-strain relationships.
*   **Linear Regression:** For a relationship $y = mx + c$:
    *   Slope ($m$) = $\frac{n(\sum xy) - (\sum x)(\sum y)}{n(\sum x^2) - (\sum x)^2}$
    *   Intercept ($c$) = $\frac{(\sum y)(\sum x^2) - (\sum x)(\sum xy)}{n(\sum x^2) - (\sum x)^2}$
    *   Alternatively, $c = \bar{y} - m\bar{x}$
*   **Reference:** *Sawhney & Sawhney (2009)* and *Nakra & Chaudhry (2009)* provide detailed explanations of the least squares method.

---

### 7. Uncertainty Analysis

*   **Definition:** The process of quantifying the doubt about the result of a measurement. It is the range within which the true value is expected to lie with a certain level of confidence.
*   **Components of Uncertainty:**
    *   **Type A Evaluation:** Evaluated by statistical methods (e.g., standard deviation of the mean from repeated measurements).
    *   **Type B Evaluation:** Evaluated by other means (e.g., manufacturer's specifications, calibration certificates, assumed limits of resolution).
*   **Combined Standard Uncertainty ($u_c$):** Calculated using the square root of the sum of the squares of individual uncertainties (similar to error propagation).
*   **Expanded Uncertainty ($U$):** $U = k \times u_c$, where $k$ is a coverage factor (often $k=2$ for approximately 95% confidence).
*   **Reporting a Measurement:** The result is reported as $y \pm U$, with the confidence level.
*   **Reference:** This is a modern approach to reporting measurement results, and while not explicitly detailed in older texts, the principles of statistical analysis laid out in *Dobelin (1990)* and *Nakra & Chaudhry (2009)* form the basis for understanding uncertainty.

---

### Important Points to Remember:

*   **All measurements have errors.** The goal is to minimize and quantify them.
*   **Systematic errors affect accuracy, random errors affect precision.**
*   **The mean of multiple readings is the best estimate of the true value** when random errors are present.
*   **Standard deviation quantifies the spread of data** and the precision of the measurement process.
*   **Error propagation is crucial** for determining the uncertainty in derived quantities.
*   **Understanding probability distributions (especially Normal) helps in estimating confidence intervals.**
*   **Clear reporting of results includes the estimated uncertainty.**

---

### Practice Questions and Exercises

**Question 1 (Conceptual):**
Differentiate between systematic errors and random errors. Give one example of each in the context of measuring the diameter of a shaft with a vernier caliper.

**Answer:**
*   **Systematic Error:** A consistent deviation from the true value. Example: If the zero mark on the vernier caliper is not aligned with the main scale zero, and there's a consistent offset in every reading. Or, consistently applying too much pressure while measuring.
*   **Random Error:** Unpredictable variations in readings. Example: Slight variations in hand steadiness while holding the caliper, or microscopic variations in the caliper's jaw contact with the shaft surface.

**Question 2 (Calculation):**
The following readings were obtained for the length of a component using a measuring tape: 10.5 cm, 10.6 cm, 10.4 cm, 10.7 cm, 10.5 cm.
(a) Calculate the arithmetic mean of the readings.
(b) Calculate the standard deviation of the readings.
(c) Calculate the probable error of the mean.

**Answer:**
Let the readings be $x_i$. $n=5$.
$x_1=10.5, x_2=10.6, x_3=10.4, x_4=10.7, x_5=10.5$

(a) **Arithmetic Mean ($\bar{x}$):**
$\bar{x} = \frac{10.5 + 10.6 + 10.4 + 10.7 + 10.5}{5} = \frac{52.7}{5} = 10.54$ cm

(b) **Standard Deviation ($s$):**
Deviations ($d_i = x_i - \bar{x}$):
$10.5 - 10.54 = -0.04$
$10.6 - 10.54 = 0.06$
$10.4 - 10.54 = -0.14$
$10.7 - 10.54 = 0.16$
$10.5 - 10.54 = -0.04$

Squared Deviations ($d_i^2$):
$(-0.04)^2 = 0.0016$
$(0.06)^2 = 0.0036$
$(-0.14)^2 = 0.0196$
$(0.16)^2 = 0.0256$
$(-0.04)^2 = 0.0016$

Sum of Squared Deviations ($\sum d_i^2$): $0.0016 + 0.0036 + 0.0196 + 0.0256 + 0.0016 = 0.052$

Sample Variance ($s^2$): $s^2 = \frac{\sum d_i^2}{n-1} = \frac{0.052}{5-1} = \frac{0.052}{4} = 0.013$

Sample Standard Deviation ($s$): $s = \sqrt{0.013} \approx 0.114$ cm

(c) **Probable Error of the Mean:**
Probable Error (PE) is approximately $0.6745 \times s$ for a single observation.
For the mean, the probable error of the mean is $PE_{\bar{x}} = 0.6745 \times \frac{s}{\sqrt{n}}$.
$PE_{\bar{x}} = 0.6745 \times \frac{0.114}{\sqrt{5}} \approx 0.6745 \times \frac{0.114}{2.236} \approx 0.6745 \times 0.0509 \approx 0.034$ cm.
So, the mean can be reported as $10.54 \pm 0.034$ cm (with a probable error of $\pm 0.034$ cm).

**Question 3 (Error Propagation):**
The voltage across a resistor is measured as $V = 12 \pm 0.2$ V, and the current through it is measured as $I = 0.5 \pm 0.01$ A. Calculate the resistance $R$ and its uncertainty, given $R = V/I$.

**Answer:**
Nominal Resistance $R = V/I = 12 \text{ V} / 0.5 \text{ A} = 24$ $\Omega$.

Using the formula for relative error in division:
$\left(\frac{\sigma_R}{R}\right)^2 = \left(\frac{\sigma_V}{V}\right)^2 + \left(\frac{\sigma_I}{I}\right)^2$

Relative error in V: $\frac{\sigma_V}{V} = \frac{0.2}{12} \approx 0.01667$
Relative error in I: $\frac{\sigma_I}{I} = \frac{0.01}{0.5} = 0.02$

$\left(\frac{\sigma_R}{R}\right)^2 = (0.01667)^2 + (0.02)^2 = 0.00027789 + 0.0004 = 0.00067789$
$\frac{\sigma_R}{R} = \sqrt{0.00067789} \approx 0.02604$

Absolute error in R: $\sigma_R = R \times 0.02604 = 24 \times 0.02604 \approx 0.625$ $\Omega$.

So, the resistance is $R = 24 \pm 0.625$ $\Omega$.

---

### Learning Outcome Mapping:

*   **CO1:** Understanding of errors and dispersion (standard deviation) directly relates to understanding instrument characteristics and uncertainty.
*   **CO2, CO3, CO4:** The statistical analysis methods learned here are applied to interpret the data obtained from displacement, strain, force, pressure, flow, and temperature measuring devices.
*   **CO5:** By understanding uncertainty, one can better select a measurement system that meets the required precision and accuracy for a given application.

---
*(This concludes the study notes for Topic: Statistical analysis of data from Module 1.)*

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
