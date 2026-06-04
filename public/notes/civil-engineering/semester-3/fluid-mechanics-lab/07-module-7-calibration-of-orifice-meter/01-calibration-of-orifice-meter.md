---
title: "Calibration of Orifice meter"
subject: "FLUID MECHANICS LAB"
module: "Module 7: Calibration of Orifice meter"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba8108e2"
status: "completed"
scrapedAt: "2026-05-20T18:40:54.048Z"
---
# Fluid Mechanics Lab: Module 7 - Calibration of Orifice Meter

## 1. Introduction to Orifice Meters

### 1.1 What is an Orifice Meter?

*   An **orifice meter** is a device used to measure the **flow rate** of a fluid in a pipe.
*   It is a type of **differential pressure flow meter**.
*   It consists of a thin plate with a precisely manufactured hole (**orifice**) inserted into a pipe.
*   As the fluid flows through the orifice, its velocity increases, leading to a **pressure drop** across the orifice.
*   This pressure difference is measured and used to calculate the flow rate.

### 1.2 Working Principle

*   The working principle of an orifice meter is based on **Bernoulli's principle** and the concept of **vena contracta**.
*   **Bernoulli's Principle:** States that for an inviscid, incompressible fluid in steady flow, the sum of static pressure, kinetic energy per unit volume, and potential energy per unit volume is constant along a streamline.
    *   $P + \frac{1}{2}\rho v^2 + \rho g h = \text{constant}$
*   **Vena Contracta:** As the fluid passes through the sharp edge of the orifice, it contracts to a minimum cross-sectional area beyond the orifice plate. This point of minimum area is called the **vena contracta**.
    *   The velocity of the fluid is maximum at the vena contracta.
    *   The pressure is minimum at the vena contracta.

### 1.3 Components of an Orifice Meter

*   **Orifice Plate:** A thin plate with a sharp-edged circular hole.
*   **Flanges:** Used to attach the orifice plate to the pipe.
*   **Pressure Taps:** Locations where pressure is measured upstream and downstream of the orifice plate. Common tapping locations include:
    *   **Flange Taps:** Located one pipe diameter upstream and half a pipe diameter downstream of the orifice plate.
    *   **Corner Taps:** Located at the corner where the upstream face of the orifice plate meets the pipe wall and at the vena contracta downstream.
    *   **Vena Contracta Taps:** Located at the upstream pressure tap and at the point of maximum velocity (vena contracta) downstream.

## 2. Theoretical Calculation of Flow Rate

### 2.1 Derivation using Bernoulli's Equation

Consider a section upstream of the orifice (Section 1) and at the vena contracta (Section 2). Assume the pipe is horizontal (h1 = h2).

*   **Section 1 (Upstream):**
    *   Area: $A_1$ (pipe cross-sectional area)
    *   Velocity: $v_1$
    *   Pressure: $P_1$
*   **Section 2 (Vena Contracta):**
    *   Area: $A_2$ (area of vena contracta)
    *   Velocity: $v_2$
    *   Pressure: $P_2$

Applying Bernoulli's Equation between Section 1 and Section 2:
$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$

From the **Continuity Equation**:
$A_1 v_1 = A_2 v_2$
So, $v_1 = \frac{A_2}{A_1} v_2$

Substitute $v_1$ into Bernoulli's equation:
$P_1 + \frac{1}{2}\rho \left(\frac{A_2}{A_1} v_2\right)^2 = P_2 + \frac{1}{2}\rho v_2^2$
$P_1 - P_2 = \frac{1}{2}\rho v_2^2 \left(1 - \left(\frac{A_2}{A_1}\right)^2\right)$

Rearranging to find $v_2$:
$v_2 = \sqrt{\frac{2(P_1 - P_2)}{\rho \left(1 - \left(\frac{A_2}{A_1}\right)^2\right)}}$

The volumetric flow rate ($Q$) is given by $Q = A_2 v_2$:
$Q = A_2 \sqrt{\frac{2(P_1 - P_2)}{\rho \left(1 - \left(\frac{A_2}{A_1}\right)^2\right)}}$

### 2.2 Introducing the Coefficient of Discharge ($C_d$)

The theoretical derivation assumes ideal conditions (inviscid flow, fully developed flow profile, precise vena contracta). In reality, factors like friction, viscosity, and the slight deviation from ideal vena contracta cause the actual flow rate to be lower than the theoretical value.

This deviation is accounted for by introducing the **coefficient of discharge** ($C_d$).

$Q_{\text{actual}} = C_d \times Q_{\text{theoretical}}$

Therefore, the actual flow rate is:
$Q = C_d A_2 \sqrt{\frac{2(P_1 - P_2)}{\rho \left(1 - \left(\frac{A_2}{A_1}\right)^2\right)}}$

*   **Coefficient of Discharge ($C_d$):** A dimensionless factor that accounts for energy losses.
    *   Typically ranges from **0.6 to 0.65** for sharp-edged orifices.
    *   It depends on factors like the Reynolds number, orifice shape, and beta ratio ($\beta$).

### 2.3 Defining Key Ratios

*   **Beta Ratio ($\beta$):** The ratio of the orifice diameter ($d$) to the pipe diameter ($D$).
    *   $\beta = \frac{d}{D}$
    *   This ratio is crucial for determining the $C_d$ value. Standard recommendations exist for $\beta$ values (e.g., $\beta \le 0.75$).

*   **Area Ratio:** The ratio of the orifice area ($A_2$) to the pipe area ($A_1$).
    *   $A_2 = \frac{\pi d^2}{4}$
    *   $A_1 = \frac{\pi D^2}{4}$
    *   $\left(\frac{A_2}{A_1}\right)^2 = \left(\frac{\frac{\pi d^2}{4}}{\frac{\pi D^2}{4}}\right)^2 = \left(\frac{d^2}{D^2}\right)^2 = \beta^4$

So, the flow rate equation can be written as:
$Q = C_d \frac{\pi d^2}{4} \sqrt{\frac{2(P_1 - P_2)}{\rho \left(1 - \beta^4\right)}}$

## 3. Calibration of an Orifice Meter

### 3.1 Why is Calibration Necessary?

*   **Accuracy:** To ensure the orifice meter provides accurate flow rate measurements.
*   **Real-world conditions:** The theoretical $C_d$ values are ideal. Actual $C_d$ can vary due to:
    *   Wear and tear of the orifice plate (edge rounding).
    *   Changes in fluid properties (viscosity).
    *   Deviations from ideal installation conditions (e.g., upstream disturbances).
    *   Manufacturing tolerances.
*   **Specific Applications:** For critical applications, empirical calibration is essential.

### 3.2 Experimental Setup for Calibration

A typical experimental setup involves:

*   **Orifice Meter Assembly:** The pipe with the orifice plate and pressure taps.
*   **Flow Control Valve:** To regulate the flow rate through the pipe.
*   **Pressure Measuring Device:**
    *   **Manometer:** For measuring differential pressure ($P_1 - P_2$). This could be a U-tube manometer, inclined manometer, or a multi-tube manometer.
    *   **Differential Pressure Transmitter:** Electronic device for a more continuous and automated reading.
*   **Flow Measuring Device (Reference):** A more accurate flow meter used as a standard for calibration. Common reference meters include:
    *   **Positive Displacement Meter:** Highly accurate for volumetric measurement.
    *   **Weigh Tank System:** Fluid is collected in a tank, and its weight is measured over a specific time. This is often considered the most accurate method.
    *   **Master Orifice Meter or Venturi Meter:** Another calibrated flow meter.
*   **Power Supply and Data Acquisition System:** (If using electronic sensors).
*   **Fluid Source:** A pump to circulate the fluid.

### 3.3 Calibration Procedure

1.  **Setup:** Assemble the orifice meter in the pipeline. Connect the pressure taps to the differential pressure measuring device. Connect the flow control valve and the reference flow measuring device. Ensure proper upstream and downstream straight pipe lengths as per standards (e.g., ISO 5167).
2.  **Establish Flow:** Start the pump and gradually increase the flow rate using the control valve.
3.  **Take Readings:** For a range of flow rates:
    *   Record the differential pressure ($\Delta P = P_1 - P_2$) from the manometer or DP transmitter.
    *   Record the flow rate ($Q_{\text{ref}}$) from the reference flow measuring device.
4.  **Vary Flow Rate:** Repeat step 3 for several different flow rates, ensuring a reasonable range is covered.
5.  **Data Analysis:**
    *   Calculate the actual flow rate ($Q_{\text{actual}}$) from the orifice meter using the measured $\Delta P$, fluid density ($\rho$), orifice diameter ($d$), pipe diameter ($D$), and an assumed or standard $C_d$ value.
    *   Plot $Q_{\text{actual}}$ against $Q_{\text{ref}}$. The data points should ideally fall on a straight line passing through the origin.
    *   Calculate the experimental coefficient of discharge ($C_{d, \text{exp}}$) for each data point using the measured $\Delta P$ and the reference flow rate $Q_{\text{ref}}$:
        $Q_{\text{ref}} = C_{d, \text{exp}} \frac{\pi d^2}{4} \sqrt{\frac{2 \Delta P}{\rho \left(1 - \beta^4\right)}}$
        Rearranging for $C_{d, \text{exp}}$:
        $C_{d, \text{exp}} = \frac{Q_{\text{ref}} \times 4}{\pi d^2} \sqrt{\frac{\rho \left(1 - \beta^4\right)}{2 \Delta P}}$
    *   Average the calculated $C_{d, \text{exp}}$ values to obtain the calibrated $C_d$ for the orifice meter under the tested conditions.
    *   Plot $C_{d, \text{exp}}$ against the flow rate or Reynolds number. This plot can reveal how $C_d$ varies.

### 3.4 Standards for Orifice Meters

*   **ISO 5167:** Provides standardized methods for the measurement of fluid flow by means of pressure differential devices such as orifice plates, nozzles, and venturi tubes. It specifies installation requirements, dimensions, and calculation procedures, including typical values for $C_d$.
*   **ASME (American Society of Mechanical Engineers):** Also provides similar standards and recommendations.

## 4. Factors Affecting Orifice Meter Performance

*   **Upstream Flow Conditions:**
    *   **Turbulence and Swirl:** Non-uniform flow profiles and swirling can significantly affect the pressure readings and lead to inaccurate flow measurement.
    *   **Straight Pipe Lengths:** Sufficient straight pipe sections upstream and downstream of the orifice are crucial to ensure fully developed flow. Standards like ISO 5167 specify minimum straight lengths based on the beta ratio and the presence of pipe fittings (e.g., elbows, valves).
*   **Orifice Geometry:**
    *   **Edge Sharpness:** A sharp upstream edge is critical. Rounded edges increase the flow coefficient.
    *   **Plate Thickness:** The plate should be thin to ensure the vena contracta occurs downstream of the plate.
    *   **Concentricity:** The orifice must be precisely centered in the pipe.
*   **Fluid Properties:**
    *   **Density ($\rho$):** Affects the flow rate calculation directly. Density changes with temperature and pressure.
    *   **Viscosity:** Affects the Reynolds number and the coefficient of discharge.
    *   **Compressibility:** For gases, compressibility effects must be considered, often by introducing a **compressibility factor ($Y$)**.
*   **Reynolds Number (Re):**
    *   $Re = \frac{\rho v d}{\mu}$, where $\mu$ is the dynamic viscosity.
    *   The $C_d$ value is generally constant for higher Reynolds numbers (above approximately $10^4$), but it can vary at lower Reynolds numbers.
*   **Installation:**
    *   **Gaskets:** Gaskets used must not protrude into the flow stream.
    *   **Pressure Tap Location:** Incorrect location of pressure taps will lead to erroneous differential pressure readings.

## 5. Practice Questions and Exercises

**Assumptions for calculations:**
*   Fluid: Water, Density ($\rho$) = 1000 kg/m³
*   Orifice diameter ($d$) = 50 mm = 0.05 m
*   Pipe diameter ($D$) = 100 mm = 0.1 m
*   Assume standard orifice plate with sharp edges.

### Practice Question 1: Theoretical Flow Rate

**Question:** Calculate the theoretical volumetric flow rate of water through an orifice meter with the given dimensions. The differential pressure measured is $\Delta P = 50 \text{ kPa} = 50,000 \text{ Pa}$.

**Solution:**

1.  **Calculate Beta Ratio ($\beta$):**
    $\beta = \frac{d}{D} = \frac{0.05 \text{ m}}{0.1 \text{ m}} = 0.5$

2.  **Calculate Area Ratio squared ($\beta^4$):**
    $\beta^4 = (0.5)^4 = 0.0625$

3.  **Calculate Theoretical Flow Rate ($Q_{\text{theoretical}}$):**
    $Q_{\text{theoretical}} = \frac{\pi d^2}{4} \sqrt{\frac{2 \Delta P}{\rho \left(1 - \beta^4\right)}}$
    $Q_{\text{theoretical}} = \frac{\pi (0.05 \text{ m})^2}{4} \sqrt{\frac{2 \times 50,000 \text{ Pa}}{1000 \text{ kg/m}^3 \times (1 - 0.0625)}}$
    $Q_{\text{theoretical}} = \frac{\pi \times 0.0025 \text{ m}^2}{4} \sqrt{\frac{100,000 \text{ Pa}}{1000 \text{ kg/m}^3 \times 0.9375}}$
    $Q_{\text{theoretical}} = 0.001963 \text{ m}^2 \sqrt{\frac{100,000}{937.5} \frac{\text{m}^2}{\text{s}^2}}$
    $Q_{\text{theoretical}} = 0.001963 \text{ m}^2 \sqrt{106.67 \text{ m}^2/\text{s}^2}$
    $Q_{\text{theoretical}} = 0.001963 \text{ m}^2 \times 10.33 \text{ m/s}$
    $Q_{\text{theoretical}} = 0.02028 \text{ m}^3/\text{s}$

**Answer:** The theoretical volumetric flow rate is approximately $0.02028 \text{ m}^3/\text{s}$ or $20.28 \text{ L/s}$.

### Practice Question 2: Actual Flow Rate with Standard Cd

**Question:** If the coefficient of discharge for the orifice meter is $C_d = 0.62$, calculate the actual volumetric flow rate of water.

**Solution:**

1.  **Use the actual flow rate formula:**
    $Q_{\text{actual}} = C_d \times Q_{\text{theoretical}}$
    $Q_{\text{actual}} = 0.62 \times 0.02028 \text{ m}^3/\text{s}$
    $Q_{\text{actual}} = 0.01257 \text{ m}^3/\text{s}$

    Alternatively, using the full formula:
    $Q_{\text{actual}} = 0.62 \times \frac{\pi (0.05 \text{ m})^2}{4} \sqrt{\frac{2 \times 50,000 \text{ Pa}}{1000 \text{ kg/m}^3 \times (1 - 0.0625)}}$
    $Q_{\text{actual}} = 0.62 \times 0.001963 \text{ m}^2 \times 10.33 \text{ m/s}$
    $Q_{\text{actual}} = 0.01257 \text{ m}^3/\text{s}$

**Answer:** The actual volumetric flow rate is approximately $0.01257 \text{ m}^3/\text{s}$ or $12.57 \text{ L/s}$.

### Practice Question 3: Calculating Experimental Cd

**Question:** During a calibration test, the orifice meter registered a differential pressure of $\Delta P = 75 \text{ kPa} = 75,000 \text{ Pa}$. The reference flow meter indicated a flow rate of $Q_{\text{ref}} = 14.0 \text{ L/s} = 0.014 \text{ m}^3/\text{s}$. Calculate the experimental coefficient of discharge ($C_{d, \text{exp}}$).

**Solution:**

1.  **Calculate Beta Ratio ($\beta$) and $\beta^4$ (as before):**
    $\beta = 0.5$, $\beta^4 = 0.0625$

2.  **Calculate $C_{d, \text{exp}}$ using the formula:**
    $C_{d, \text{exp}} = \frac{Q_{\text{ref}}}{\frac{\pi d^2}{4} \sqrt{\frac{2 \Delta P}{\rho \left(1 - \beta^4\right)}}}}$
    We already calculated the theoretical flow rate for $\Delta P = 50 \text{ kPa}$ as $0.02028 \text{ m}^3/\text{s}$. We need to recalculate the theoretical flow rate for $\Delta P = 75 \text{ kPa}$:

    $Q_{\text{theoretical, 75kPa}} = \frac{\pi (0.05 \text{ m})^2}{4} \sqrt{\frac{2 \times 75,000 \text{ Pa}}{1000 \text{ kg/m}^3 \times (1 - 0.0625)}}$
    $Q_{\text{theoretical, 75kPa}} = 0.001963 \text{ m}^2 \sqrt{\frac{150,000}{937.5} \frac{\text{m}^2}{\text{s}^2}}$
    $Q_{\text{theoretical, 75kPa}} = 0.001963 \text{ m}^2 \sqrt{160 \text{ m}^2/\text{s}^2}$
    $Q_{\text{theoretical, 75kPa}} = 0.001963 \text{ m}^2 \times 12.65 \text{ m/s}$
    $Q_{\text{theoretical, 75kPa}} = 0.02484 \text{ m}^3/\text{s}$

    Now, calculate $C_{d, \text{exp}}$:
    $C_{d, \text{exp}} = \frac{Q_{\text{ref}}}{Q_{\text{theoretical, 75kPa}}}$
    $C_{d, \text{exp}} = \frac{0.014 \text{ m}^3/\text{s}}{0.02484 \text{ m}^3/\text{s}}$
    $C_{d, \text{exp}} = 0.5636$

**Answer:** The experimental coefficient of discharge is approximately $0.564$. This value is lower than the typical 0.62, suggesting potential issues like upstream disturbances or edge wear.

## 6. Important Points to Remember

*   **Bernoulli's Principle and Continuity Equation** are the foundational principles for orifice meter operation.
*   The **vena contracta** is the point of minimum area and maximum velocity downstream of the orifice.
*   The **coefficient of discharge ($C_d$)** accounts for real-world losses and is typically between 0.6 and 0.65 for sharp-edged orifices.
*   **Calibration** is essential to ensure accuracy by comparing the orifice meter's readings against a known standard.
*   **Reynolds number, upstream straight pipe lengths, orifice edge sharpness, and installation** significantly impact the accuracy of the orifice meter.
*   **ISO 5167** and similar standards provide guidelines for the design, installation, and use of orifice meters.
*   For gases, the **compressibility factor ($Y$)** must be included in the flow rate calculation.
*   The differential pressure is proportional to the square of the flow rate ($ \Delta P \propto Q^2 $).

This comprehensive set of notes covers the essential aspects of orifice meter calibration, from its working principle to practical calibration procedures and factors affecting its performance.
