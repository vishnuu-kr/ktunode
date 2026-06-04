---
title: "of probability distribution-probability error"
subject: "ELECTRONIC INSTRUMENTATION"
module: "Module 3: Display methods and devices: Different types of display –display system building blocks."
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e85"
status: "completed"
scrapedAt: "2026-05-23T16:16:22.155Z"
---
# Electronic Instrumentation: Module 3 - Display Methods and Devices
## Topic: Probability Distribution & Probability Error

This module delves into how measurement results are presented and interpreted, with a particular focus on understanding the inherent uncertainties in measurements through the lens of probability.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the fundamental concepts of probability distributions as applied to measurement errors.
*   Explain the different types of errors that occur in measurements.
*   Define and calculate probability errors in electronic instrumentation.
*   Analyze and interpret measurement data using statistical methods to quantify uncertainty.
*   Relate the concepts of probability distribution and error to the overall performance of measurement systems (CO5).

---

### 1. Introduction to Measurement Errors

In any measurement, there is a degree of uncertainty. These deviations from the true value are termed **errors**. Understanding and quantifying these errors is crucial for evaluating the reliability and accuracy of measurement systems.

**Key Concepts:**

*   **True Value:** The actual value of the quantity being measured. This is often an ideal concept and may not be directly known.
*   **Measured Value:** The value obtained from the measuring instrument.
*   **Error:** The difference between the measured value and the true value.
    *   **Absolute Error:** $E_a = \text{Measured Value} - \text{True Value}$
    *   **Relative Error:** $E_r = \frac{E_a}{\text{True Value}} = \frac{\text{Measured Value} - \text{True Value}}{\text{True Value}}$
    *   **Percentage Error:** $E_p = E_r \times 100\%$

**Sources of Errors (as discussed in Sawhney, Gupta, Golding & Widdis):**

Errors can broadly be classified into:

*   **Gross Errors (Blunders):** Usually due to human mistakes, such as incorrect reading, miscalculation, or faulty wiring.
*   **Systematic Errors:** These errors are consistent and predictable. They tend to shift the readings in a particular direction.
    *   **Instrumental Errors:** Due to calibration errors, faulty design, or wear and tear of the instrument.
    *   **Environmental Errors:** Caused by changes in ambient conditions like temperature, humidity, pressure, or magnetic fields.
    *   **Personal Errors:** Arise from individual habits or inabilities of the observer (e.g., parallax error).
*   **Random Errors (Accidental Errors):** These errors vary unpredictably in magnitude and sign with each reading. They are often due to factors beyond the control of the experimenter or inherent limitations of the instrument.

**Example (Sawhney, Chapter 2):**

If a resistor is stated to have a resistance of $100 \Omega \pm 1\%$, its true value lies between $99 \Omega$ and $101 \Omega$. If a measurement yields $100.5 \Omega$, the absolute error is $+0.5 \Omega$, and the percentage error is $\frac{+0.5}{100} \times 100\% = +0.5\%$.

---

### 2. Probability Distributions and Measurement Errors

Random errors, due to their unpredictable nature, can be analyzed using the principles of probability and statistics. When a series of measurements are taken for the same quantity under similar conditions, the random errors associated with these measurements often follow a specific probability distribution.

**Key Concepts:**

*   **Probability Distribution:** A function that describes the likelihood of obtaining a given outcome or set of outcomes from a random variable.
*   **Random Variable:** A variable whose value is a numerical outcome of a random phenomenon. In this context, it's the error in a measurement.
*   **Frequency Distribution:** A tabular representation of the number of times each value (or range of values) occurs in a set of data.

**The Gaussian (Normal) Distribution:**

The most common probability distribution encountered in analyzing random errors is the **Gaussian (Normal) Distribution**, often called the "bell curve."

*   **Characteristics:**
    *   Symmetrical about its mean.
    *   The mean, median, and mode are all equal.
    *   The spread of the data is determined by the standard deviation.
*   **Probability Density Function (PDF):** The mathematical function that describes the likelihood of a random variable taking on a given value. For a Gaussian distribution:

    $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$

    Where:
    *   $x$ is the value of the random variable (in our case, the error).
    *   $\mu$ is the mean of the distribution.
    *   $\sigma$ is the standard deviation of the distribution.
    *   $\pi \approx 3.14159$
    *   $e \approx 2.71828$

*   **Interpretation in Measurement:**
    *   The mean ($\mu$) of the errors approximates the systematic error component.
    *   The standard deviation ($\sigma$) quantifies the spread or dispersion of the random errors. Smaller $\sigma$ means less random error.

**Important Points from Textbooks (Sawhney, Gupta, Kalsi):**

*   When many independent random errors occur, their combined effect tends to follow a Gaussian distribution (Central Limit Theorem).
*   Most measurements with random errors will cluster around the true value, with fewer measurements deviating further.

---

### 3. Probability Error

**Probability Error (or Probable Error)** is a concept used to express the magnitude of random errors. It's the amount of error such that the probability of a random error exceeding this value is equal to the probability of it being less than this value (and vice-versa).

**Key Concepts:**

*   **Probable Error ($PE$):** A measure of the dispersion of random errors, defined as a value such that there is a 50% chance that the absolute random error of a measurement lies within $\pm PE$ of the mean.
*   **Relationship between Probable Error and Standard Deviation:** For a Gaussian distribution, the probable error is related to the standard deviation by:

    $PE = 0.6745 \times \sigma$

    Or, conversely:

    $\sigma = \frac{PE}{0.6745} \approx 1.483 \times PE$

**Calculation and Interpretation:**

If the probable error of a measurement is $\pm PE$, it means that there is a 50% probability that the error in any given measurement will fall within the range $-PE$ to $+PE$.

**How to Estimate $\sigma$ and $PE$ from Measurements:**

1.  **Take multiple readings:** Measure the same quantity repeatedly under identical conditions.
2.  **Calculate the mean ($\bar{x}$):** Sum all readings and divide by the number of readings ($n$).
    $\bar{x} = \frac{\sum x_i}{n}$
3.  **Calculate deviations from the mean:** For each reading $x_i$, find the deviation $d_i = x_i - \bar{x}$.
4.  **Calculate the standard deviation ($\sigma$):** The formula for sample standard deviation is:

    $\sigma = \sqrt{\frac{\sum d_i^2}{n-1}}$ (Using $n-1$ in the denominator provides a less biased estimate of the population standard deviation from a sample.)

5.  **Calculate the probable error ($PE$):**
    $PE = 0.6745 \times \sigma$

**Example (Gupta, Chapter 3):**

Suppose the following readings are obtained for a voltage measurement: 10.2V, 10.1V, 10.3V, 10.2V, 10.1V.

1.  **Number of readings ($n$) = 5**
2.  **Sum of readings = 10.2 + 10.1 + 10.3 + 10.2 + 10.1 = 50.9 V**
3.  **Mean ($\bar{x}$) = $\frac{50.9}{5} = 10.18$ V**
4.  **Deviations ($d_i$) and their squares ($d_i^2$):**
    *   $d_1 = 10.2 - 10.18 = 0.02$, $d_1^2 = 0.0004$
    *   $d_2 = 10.1 - 10.18 = -0.08$, $d_2^2 = 0.0064$
    *   $d_3 = 10.3 - 10.18 = 0.12$, $d_3^2 = 0.0144$
    *   $d_4 = 10.2 - 10.18 = 0.02$, $d_4^2 = 0.0004$
    *   $d_5 = 10.1 - 10.18 = -0.08$, $d_5^2 = 0.0064$
5.  **Sum of squared deviations ($\sum d_i^2$) = 0.0004 + 0.0064 + 0.0144 + 0.0004 + 0.0064 = 0.0280$ V$^2$**
6.  **Standard Deviation ($\sigma$):**
    $\sigma = \sqrt{\frac{0.0280}{5-1}} = \sqrt{\frac{0.0280}{4}} = \sqrt{0.0070} \approx 0.0837$ V
7.  **Probable Error ($PE$):**
    $PE = 0.6745 \times 0.0837 \approx 0.0565$ V

    **Interpretation:** The probable error of the measurement is approximately $\pm 0.0565$ V. This means there is a 50% chance that the true voltage is within the range $10.18 \pm 0.0565$ V, i.e., between 10.1235 V and 10.2365 V.

---

### 4. Other Statistical Measures Related to Error (Briefly)

While probable error is a key concept, other statistical measures are also used to characterize measurement uncertainty.

*   **Average Deviation:** The average of the absolute deviations from the mean.
    $AD = \frac{\sum |x_i - \bar{x}|}{n}$
*   **Mean Square Deviation (Variance):** The average of the squared deviations.
    $MSD = \frac{\sum (x_i - \bar{x})^2}{n}$ (This is the population variance; for sample variance, use $n-1$.)
*   **Root Mean Square (RMS) Deviation:** This is equivalent to the standard deviation.

**Textbook Reference (Doebelin):** Doebelin's "Measurement Systems" provides a thorough treatment of various statistical methods for error analysis and uncertainty quantification, emphasizing the importance of understanding the underlying probability distributions.

---

### 5. Display System Building Blocks and Probability Error

While this topic focuses on the statistical interpretation of errors, it's important to remember that these errors are what ultimately influence the displayed output of an electronic instrument.

**How Probability Error Impacts Displays:**

*   **Digital Displays:** A digital display will show a specific numerical value. The probability error helps us understand the confidence interval around that displayed value. If the displayed value is 10.2 V and the probable error is $\pm 0.06$ V, we know that the true value is likely within the range of 10.14 V to 10.26 V with 50% probability.
*   **Analog Displays (e.g., Meters):** The needle deflection on an analog meter is subject to random variations due to errors. The probable error helps quantify the uncertainty in the position of the needle.

**Relationship to Display System Building Blocks (as per Module 3 overview):**

The accuracy and reliability of the displayed information (the output of the display system) are directly affected by the errors introduced throughout the measurement chain, from the sensor/transducer to the signal conditioning and finally the display itself. Understanding probability error allows us to:

*   Specify instruments with appropriate accuracy for a given application.
*   Interpret the displayed readings with the correct level of confidence.
*   Compare different instruments or measurement techniques based on their error characteristics (CO5).

---

### 6. Important Points to Remember:

*   **Errors are inherent in all measurements.**
*   **Random errors** are unpredictable and can be analyzed using probability distributions, primarily the **Gaussian distribution**.
*   **Standard Deviation ($\sigma$)** quantifies the spread of random errors.
*   **Probable Error ($PE$)** is a measure of random error, with $PE = 0.6745 \times \sigma$. It signifies a 50% probability that the random error falls within $\pm PE$.
*   Calculating $\sigma$ and $PE$ requires taking multiple readings and applying statistical formulas.
*   Understanding probability error is crucial for **quantifying uncertainty** and ensuring the **reliability of displayed measurement data** (CO5).
*   The accuracy of the entire measurement system, including the display, depends on managing all types of errors (gross, systematic, and random).

---

### 7. Practice Questions and Exercises:

**Question 1:**
A set of readings for a length measurement were recorded as: 5.2 cm, 5.1 cm, 5.3 cm, 5.2 cm, 5.1 cm, 5.4 cm. Calculate:
a) The mean of the readings.
b) The standard deviation of the readings.
c) The probable error of the measurement.
d) Interpret the probable error.

**Answer 1:**
a) Mean ($\bar{x}$) = $\frac{5.2+5.1+5.3+5.2+5.1+5.4}{6} = \frac{31.3}{6} \approx 5.217$ cm
b) Deviations ($d_i$) and ($d_i^2$):
    *   0.017, 0.000289
    *   -0.117, 0.013689
    *   0.083, 0.006889
    *   0.017, 0.000289
    *   -0.117, 0.013689
    *   0.183, 0.033489
    $\sum d_i^2 = 0.000289 + 0.013689 + 0.006889 + 0.000289 + 0.013689 + 0.033489 = 0.068344$ cm$^2$
    $\sigma = \sqrt{\frac{0.068344}{6-1}} = \sqrt{\frac{0.068344}{5}} = \sqrt{0.0136688} \approx 0.1169$ cm
c) Probable Error ($PE$) = $0.6745 \times \sigma = 0.6745 \times 0.1169 \approx 0.0789$ cm
d) Interpretation: There is a 50% probability that the true length lies within the range $5.217 \pm 0.0789$ cm (i.e., between 5.1381 cm and 5.2959 cm).

**Question 2:**
What is the relationship between standard deviation and probable error for a Gaussian distribution? Which one is a measure of precision?

**Answer 2:**
The relationship is $PE = 0.6745 \times \sigma$. Both are measures of the spread of random errors and therefore related to the **precision** of the measurement. A smaller $\sigma$ (and consequently a smaller $PE$) indicates higher precision.

**Question 3:**
If the probable error of an ammeter reading is $\pm 0.05$ A, what is the probability that the random error in a reading is greater than 0.05 A?

**Answer 3:**
By definition of probable error, there is a 50% probability that the random error lies within $\pm 0.05$ A. Therefore, there is also a 50% probability that the random error lies outside this range, i.e., is greater than 0.05 A in magnitude.

---
