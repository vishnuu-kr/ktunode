---
title: "Calibration of rectangular notch"
subject: "FLUID MECHANICS LAB"
module: "Module 9: Calibration of rectangular notch"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba8108e6"
status: "completed"
scrapedAt: "2026-05-20T18:40:55.462Z"
---
# Fluid Mechanics Lab: Module 9 - Calibration of Rectangular Notch

## Topic: Calibration of Rectangular Notch

### Introduction

This module focuses on the practical application of fluid flow measurement using a rectangular notch. Calibration is a crucial process to ensure the accuracy of the discharge calculated from the measured head over the notch. This involves establishing an experimental relationship between the actual flow rate and the observed head, which may differ from theoretical values due to factors like friction and viscosity.

### Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **Understand the principle of operation of a rectangular notch for flow measurement.**
*   **Identify the components of a rectangular notch apparatus.**
*   **Determine the actual discharge through a rectangular notch experimentally.**
*   **Calculate the theoretical discharge through a rectangular notch.**
*   **Determine the coefficient of discharge ($C_d$) for a rectangular notch.**
*   **Plot a calibration curve for the rectangular notch.**
*   **Use the calibration curve to predict discharge for a given head.**
*   **Understand the importance of calibration in ensuring accurate flow measurement.**

### Key Concepts and Definitions

*   **Rectangular Notch:** An opening in the side of a tank or channel over which fluid flows. A rectangular notch has a rectangular crest. It is used for measuring the rate of flow of a liquid.
*   **Head ($H$):** The vertical distance from the crest of the notch to the free surface of the liquid. It is the primary parameter measured for flow calculation.
*   **Discharge ($Q$):** The volume of fluid flowing per unit time, typically measured in m³/s or L/s.
*   **Theoretical Discharge ($Q_{th}$):** The discharge calculated based on ideal fluid assumptions, neglecting frictional losses and velocity variations across the flow profile.
*   **Actual Discharge ($Q_{act}$):** The true volume of fluid flowing per unit time, determined through experimental measurements (e.g., using a collecting tank and stopwatch).
*   **Coefficient of Discharge ($C_d$):** A dimensionless factor that accounts for the deviation of actual flow from theoretical flow. It represents the ratio of actual discharge to theoretical discharge: $C_d = \frac{Q_{act}}{Q_{th}}$.
*   **Calibration:** The process of establishing a direct relationship between a measured quantity (e.g., head over the notch) and the actual quantity being measured (e.g., discharge). This is typically done by creating a calibration curve.
*   **Calibration Curve:** A graph plotting the actual discharge ($Q_{act}$) against the measured head ($H$). This curve represents the experimentally determined performance of the measuring device.

### Principle of Operation

A rectangular notch functions by creating a constriction in the flow. As the fluid flows over the crest of the notch, its velocity increases, and a portion of the potential energy (due to the head) is converted into kinetic energy. The discharge over the notch is primarily dependent on the head of the fluid above the crest.

### Theoretical Discharge Calculation

For a rectangular notch, the theoretical discharge is given by the formula:

$Q_{th} = \frac{2}{3} C_d \sqrt{2g} L H^{3/2}$

Where:
*   $Q_{th}$ = Theoretical discharge (m³/s)
*   $C_d$ = Coefficient of discharge (dimensionless, typically between 0.6 to 0.65 for sharp-crested rectangular notches)
*   $g$ = Acceleration due to gravity (approximately 9.81 m/s²)
*   $L$ = Length of the notch crest (m)
*   $H$ = Head of the liquid over the crest (m)

**Note:** The $C_d$ in this theoretical formula is often assumed or taken from typical values. During calibration, we *determine* the actual $C_d$ by comparing actual flow to the calculated $Q_{th}$ using an assumed $C_d$. More accurately, the calibration curve allows us to directly find $Q_{act}$ for any given $H$ without needing to assume a $C_d$ beforehand.

### Experimental Procedure (Typical)

1.  **Setup:** Set up the rectangular notch apparatus. Ensure the notch is placed in the side of a channel or tank and that the approach channel is sufficiently wide and long to ensure smooth, undisturbed flow upstream of the notch. A weir tank or a sump with a controllable inlet valve and an outlet valve to regulate flow is essential.
2.  **Measure Notch Dimensions:** Accurately measure the length of the notch crest ($L$).
3.  **Water Supply:** Start the water supply to the tank/channel. Adjust the inflow to achieve a steady flow.
4.  **Head Measurement:** Using a point gauge or a hook gauge positioned upstream of the notch (at a sufficient distance to avoid the drawdown effect), measure the head ($H$) of the water surface above the notch crest. Ensure the point gauge is leveled.
5.  **Discharge Measurement:**
    *   **Method 1 (Collecting Tank):** Place a measuring tank of known volume under the outlet. Start a stopwatch simultaneously as the water begins to fill the measuring tank. When the tank is full up to a marked level, stop the stopwatch. Record the volume collected ($V$) and the time taken ($t$).
        *   Actual Discharge, $Q_{act} = \frac{V}{t}$ (e.g., in m³/s or L/s).
    *   **Method 2 (Flow Meter):** If a calibrated flow meter is available, directly read the flow rate.
6.  **Vary the Flow:** Adjust the inlet valve to change the head ($H$) and repeat steps 4 and 5 for several different head values, covering a reasonable range.
7.  **Data Recording:** Tabulate the recorded data: measured head ($H$), volume collected ($V$), time taken ($t$), and calculated actual discharge ($Q_{act}$).

### Data Analysis and Calibration Curve

1.  **Calculate Theoretical Discharge ($Q_{th}$):** For each recorded head ($H$), calculate the theoretical discharge using the formula:
    $Q_{th} = \frac{2}{3} \sqrt{2g} L H^{3/2}$
    *(Note: For calibration purposes, we often use a standard $C_d$ value here to see how our experimental $Q_{act}$ deviates, or we directly use the $Q_{act}$ vs $H$ plot.)*

2.  **Calculate Coefficient of Discharge ($C_d$):** For each data point, calculate the coefficient of discharge:
    $C_d = \frac{Q_{act}}{Q_{th}}$

3.  **Plot the Calibration Curve:**
    *   Plot **Actual Discharge ($Q_{act}$) on the y-axis** against **Head ($H$) on the x-axis**.
    *   Alternatively, plot $Q_{act}$ vs $H^{3/2}$ to obtain a linear relationship if the theoretical formula is assumed to be accurate but $C_d$ is unknown. The slope of this line would be $\frac{2}{3} C_d \sqrt{2g} L$.

### Interpretation of the Calibration Curve

*   The calibration curve provides a direct, empirical relationship between the head ($H$) and the actual discharge ($Q_{act}$) for the specific rectangular notch tested.
*   This curve is more accurate than using a theoretical formula with an assumed $C_d$ because it accounts for the specific hydraulic conditions and imperfections of the notch.
*   To find the discharge for a new, measured head, simply locate the head on the x-axis of the calibration curve and read the corresponding actual discharge from the y-axis.

### Importance of Calibration

*   **Accuracy:** Ensures that the flow rate calculated from measured head is accurate.
*   **Device Specificity:** Accounts for the unique characteristics of the specific notch, including its sharpness, side contractions, and the approach conditions, which are not fully captured by theoretical formulas.
*   **Detecting Deviations:** Helps identify deviations from ideal flow behavior and potential issues with the apparatus.
*   **Reliability:** Makes the flow measurement device reliable for practical applications.

### Important Points to Remember

*   **Accurate Head Measurement:** The accuracy of the discharge measurement is highly dependent on the accurate measurement of the head ($H$).
*   **Upstream Conditions:** Ensure the flow upstream of the notch is steady and free from turbulence or swirling. The velocity of approach in the channel should be negligible, or its effect accounted for if significant.
*   **Drawdown Effect:** Measure the head at a point sufficiently upstream of the notch (usually 4-5 times the maximum head) to avoid the drawdown effect, where the water surface drops significantly as it approaches the notch.
*   **Nappe Ventilation:** For sharp-crested rectangular notches, the nappe (sheet of water flowing over the notch) should be properly ventilated (air allowed to pass freely between the nappe and the underside of the notch) to avoid clinging and pressure variations that affect discharge.
*   **Notch Angle:** While this module focuses on rectangular notches, the principles of calibration apply to other types of notches and weirs as well (e.g., V-notch).
*   **Range of Operation:** The calibration curve is valid only within the range of heads for which it was generated.

---

### Practice Questions & Exercises

**Question 1:**
A rectangular notch with a crest length of $L = 0.5$ m is used to measure flow. When the head over the notch is measured as $H = 0.2$ m, the actual discharge is found to be $0.05$ m³/s. Calculate the theoretical discharge using the formula $Q_{th} = \frac{2}{3} \sqrt{2g} L H^{3/2}$ (assume $g = 9.81$ m/s²) and then determine the coefficient of discharge ($C_d$) for this specific condition.

**Answer 1:**
Given:
$L = 0.5$ m
$H = 0.2$ m
$Q_{act} = 0.05$ m³/s
$g = 9.81$ m/s²

Theoretical Discharge ($Q_{th}$):
$Q_{th} = \frac{2}{3} \sqrt{2 \times 9.81 \times (0.2)^3}$
$Q_{th} = \frac{2}{3} \sqrt{19.62 \times 0.008}$
$Q_{th} = \frac{2}{3} \sqrt{0.15696}$
$Q_{th} = \frac{2}{3} \times 0.3962$
$Q_{th} \approx 0.2641$ m³/s

Coefficient of Discharge ($C_d$):
$C_d = \frac{Q_{act}}{Q_{th}}$
$C_d = \frac{0.05 \text{ m³/s}}{0.2641 \text{ m³/s}}$
$C_d \approx 0.189$

**Important Note on Answer 1:** The calculated $C_d$ of 0.189 is unusually low for a rectangular notch. This highlights that the theoretical formula is often used with a *pre-determined* typical $C_d$ (around 0.6-0.65) to calculate $Q_{th}$, and then *actual* $Q$ is compared. Or, more commonly in calibration, we *plot* $Q_{act}$ vs $H$ and use that plot directly. Let's re-calculate using a typical $C_d$ for the formula:

If we assume a typical $C_d$ of 0.62 for calculation:
$Q_{th} = 0.62 \times \frac{2}{3} \sqrt{2 \times 9.81} \times 0.5 \times (0.2)^{3/2}$
$Q_{th} = 0.62 \times \frac{2}{3} \times 4.428 \times 0.5 \times 0.0894$
$Q_{th} \approx 0.1032$ m³/s

Then, the experimental $C_d$ would be:
$C_d = \frac{Q_{act}}{Q_{th}} = \frac{0.05 \text{ m³/s}}{0.1032 \text{ m³/s}} \approx 0.484$

This still indicates a low $C_d$, suggesting either very unusual conditions, or the question might be intended to show how theoretical calculations can be far off without proper calibration. In a real lab scenario, the $Q_{act}$ would likely be higher for that head, or the $C_d$ would be closer to the expected range. The key takeaway is that $Q_{act}$ is measured, and then compared.

**Question 2:**
You have conducted experiments on a rectangular notch and collected the following data:

| Trial | Head ($H$, m) | Volume Collected ($V$, m³) | Time Taken ($t$, s) |
| :---- | :------------ | :-------------------------- | :------------------ |
| 1     | 0.1           | 0.01                        | 20                  |
| 2     | 0.15          | 0.025                       | 22                  |
| 3     | 0.2           | 0.045                       | 21                  |

The length of the rectangular notch crest is $L = 0.4$ m.
a) Calculate the actual discharge ($Q_{act}$) for each trial.
b) Calculate the theoretical discharge ($Q_{th}$) for each trial using $Q_{th} = \frac{2}{3} \sqrt{2g} L H^{3/2}$ (assume $g = 9.81$ m/s²).
c) Calculate the coefficient of discharge ($C_d$) for each trial.
d) Which trial shows the most consistent result with the typical $C_d$ values for a sharp-crested rectangular notch (around 0.6-0.65)?

**Answer 2:**
Given: $L = 0.4$ m, $g = 9.81$ m/s²

a) Calculate Actual Discharge ($Q_{act}$):
*   Trial 1: $Q_{act} = \frac{V}{t} = \frac{0.01 \text{ m³}}{20 \text{ s}} = 0.0005 \text{ m³/s}$
*   Trial 2: $Q_{act} = \frac{V}{t} = \frac{0.025 \text{ m³}}{22 \text{ s}} \approx 0.001136 \text{ m³/s}$
*   Trial 3: $Q_{act} = \frac{V}{t} = \frac{0.045 \text{ m³}}{21 \text{ s}} \approx 0.002143 \text{ m³/s}$

b) Calculate Theoretical Discharge ($Q_{th}$):
*   Trial 1 ($H = 0.1$ m):
    $Q_{th} = \frac{2}{3} \sqrt{2 \times 9.81 \times (0.1)^3} \times 0.4$
    $Q_{th} = \frac{2}{3} \sqrt{19.62 \times 0.001} \times 0.4$
    $Q_{th} = \frac{2}{3} \sqrt{0.01962} \times 0.4$
    $Q_{th} = \frac{2}{3} \times 0.1399 \times 0.4 \approx 0.0373 \text{ m³/s}$
*   Trial 2 ($H = 0.15$ m):
    $Q_{th} = \frac{2}{3} \sqrt{2 \times 9.81 \times (0.15)^3} \times 0.4$
    $Q_{th} = \frac{2}{3} \sqrt{19.62 \times 0.003375} \times 0.4$
    $Q_{th} = \frac{2}{3} \sqrt{0.06623} \times 0.4$
    $Q_{th} = \frac{2}{3} \times 0.2573 \times 0.4 \approx 0.0686 \text{ m³/s}$
*   Trial 3 ($H = 0.2$ m):
    $Q_{th} = \frac{2}{3} \sqrt{2 \times 9.81 \times (0.2)^3} \times 0.4$
    $Q_{th} = \frac{2}{3} \sqrt{19.62 \times 0.008} \times 0.4$
    $Q_{th} = \frac{2}{3} \sqrt{0.15696} \times 0.4$
    $Q_{th} = \frac{2}{3} \times 0.3962 \times 0.4 \approx 0.1057 \text{ m³/s}$

c) Calculate Coefficient of Discharge ($C_d$):
*   Trial 1: $C_d = \frac{Q_{act}}{Q_{th}} = \frac{0.0005 \text{ m³/s}}{0.0373 \text{ m³/s}} \approx 0.0134$
*   Trial 2: $C_d = \frac{Q_{act}}{Q_{th}} = \frac{0.001136 \text{ m³/s}}{0.0686 \text{ m³/s}} \approx 0.0166$
*   Trial 3: $C_d = \frac{Q_{act}}{Q_{th}} = \frac{0.002143 \text{ m³/s}}{0.1057 \text{ m³/s}} \approx 0.0203$

**Important Note on Answer 2c:** Similar to Question 1, the calculated $C_d$ values are extremely low and not realistic for a rectangular notch. This indicates the theoretical formula $Q_{th} = \frac{2}{3} \sqrt{2g} L H^{3/2}$ is only the *geometric* part and the *actual flow* is dependent on $C_d$. The calibration process is about finding the *actual* $Q$ for a given $H$. The calculation above *assumes* the formula without $C_d$ is $Q_{geo}$, and then calculates $C_d = Q_{act} / Q_{geo}$.

**Let's rephrase the intention of these questions:** The lab is about creating a calibration curve of $Q_{act}$ vs $H$. The theoretical formula *with a typical $C_d$* is: $Q_{theo\_calibrated} = C_d \times \frac{2}{3} \sqrt{2g} L H^{3/2}$.

Let's assume the task is to calculate $Q_{act}$ and plot it. For question 2d, the experiment is flawed or simplified, as the $Q_{act}$ values are too low. In a real lab, you would observe $Q_{act}$ values that are a significant fraction of $Q_{th}$ (e.g., $Q_{act}$ around 0.03 m³/s for Trial 1 if $Q_{th}$ was 0.0373).

**Revised Answer 2d based on observation:**
If we were to assume typical $C_d$ values of 0.6-0.65, then the actual discharges should be roughly:
*   Trial 1 ($H=0.1$): $Q_{act} \approx 0.62 \times 0.0373 \approx 0.0231$ m³/s
*   Trial 2 ($H=0.15$): $Q_{act} \approx 0.62 \times 0.0686 \approx 0.0425$ m³/s
*   Trial 3 ($H=0.2$): $Q_{act} \approx 0.62 \times 0.1057 \approx 0.0655$ m³/s

Comparing these expected $Q_{act}$ values with the measured $Q_{act}$ values:
*   Trial 1: 0.0005 vs 0.0231 (Very different)
*   Trial 2: 0.001136 vs 0.0425 (Very different)
*   Trial 3: 0.002143 vs 0.0655 (Very different)

**Conclusion for 2d:** In this particular dataset, none of the trials show results consistent with typical $C_d$ values. This suggests potential issues with the experimental setup, measurement accuracy, or the provided data itself. A correctly performed experiment would yield $Q_{act}$ values closer to the calculated $Q_{theo\_calibrated}$.

**Question 3 (Conceptual):**
Why is it necessary to calibrate a rectangular notch rather than relying solely on the theoretical formula?

**Answer 3:**
Calibration is necessary because the theoretical formula for discharge over a rectangular notch (even with a $C_d$ term) makes several assumptions that may not hold true in a real-world scenario. These include:
1.  **Ideal Fluid:** Assumes no viscosity or friction.
2.  **Uniform Velocity Distribution:** Assumes the velocity of water approaching the notch is uniform.
3.  **Perfect Notch Geometry:** Assumes the notch crest is perfectly sharp and smooth, and the sides are perfectly vertical.
4.  **Negligible Velocity of Approach:** Assumes the velocity of the water in the channel before reaching the notch is negligible.
5.  **Proper Nappe Ventilation:** Assumes the nappe is well-ventilated.

In practice, factors like friction at the notch edges, non-uniform velocity profiles, minor imperfections in the notch shape, and the velocity of approach in the channel all influence the actual flow rate. The coefficient of discharge ($C_d$) attempts to account for these deviations, but its value can vary depending on the specific conditions. Calibration involves directly measuring the actual discharge for various heads and establishing an empirical relationship ($Q_{act}$ vs $H$), which is specific to the tested notch and its operating conditions, thus providing a more accurate and reliable flow measurement.

---

This concludes the study notes for the calibration of a rectangular notch. Remember to focus on the practical aspects of data collection and the construction of the calibration curve in your lab sessions.
