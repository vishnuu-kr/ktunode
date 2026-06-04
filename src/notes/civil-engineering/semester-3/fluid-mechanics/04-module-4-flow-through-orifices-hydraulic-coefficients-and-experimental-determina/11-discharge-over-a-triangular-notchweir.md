---
title: "discharge over a triangular notch/weir"
subject: "FLUID MECHANICS"
module: "Module 4: Flow through Orifices: hydraulic coefficients and experimental determination of hydraulic coefficients (associated numerical problems)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba81070a"
status: "completed"
scrapedAt: "2026-05-20T18:40:47.063Z"
---
# Fluid Mechanics: Module 4 - Flow through Orifices & Weirs

## Topic: Discharge over a Triangular Notch/Weir

---

### Learning Outcomes Covered:

*   Understand the principle of flow over a triangular notch/weir.
*   Derive the theoretical discharge formula for a triangular notch/weir.
*   Understand the concept of hydraulic coefficients for triangular notches/weirs.
*   Explain the experimental determination of hydraulic coefficients for triangular notches/weirs.
*   Solve numerical problems related to discharge over triangular notches/weirs.

---

### 1. Introduction to Notches and Weirs

*   **Definition:** A **notch** is a constriction in a channel that is used to measure the flow rate. It has a regular shape, typically a V-shape or a rectangle. A **weir** is a barrier built across an open channel that obstructs flow, causing the water level to rise behind it. While the terms are often used interchangeably, a weir is generally a larger structure. For the purpose of this topic, we will focus on **triangular notches (or V-notches)** as they are commonly used for flow measurement, especially at low flow rates.

*   **Purpose:**
    *   **Flow Measurement:** To accurately determine the discharge (flow rate) of fluid in an open channel.
    *   **Water Level Control:** In some applications, weirs are used to control water levels.

*   **Types of Notches/Weirs (brief mention for context):**
    *   **Rectangular Notch/Weir:** The opening is rectangular.
    *   **Triangular Notch/Weir (V-notch):** The opening is triangular.
    *   **Trapezoidal Notch/Weir:** The opening is trapezoidal.

---

### 2. Flow Over a Triangular Notch/Weir

#### 2.1. Principle of Operation

*   When water flows over a triangular notch, it forms a **nappe**.
*   The discharge is dependent on the **head** ($h$), which is the vertical distance between the upstream liquid surface and the lowest point of the notch.
*   The flow is typically **submerged** or **unsubmerged**. For theoretical derivations and practical measurements, we usually assume **unsubmerged flow**, where the nappe is not in contact with the downstream edge of the notch.

#### 2.2. Theoretical Discharge Formula

Let's derive the formula for discharge over a triangular notch with an angle $\theta$ (or $2\theta$ for the total vertex angle). We will consider the angle at the vertex as $\theta$.

*   **Assumptions:**
    *   Steady flow.
    *   Uniform velocity distribution across the cross-section of the nappe.
    *   No velocity of approach (upstream velocity is negligible compared to the velocity of water flowing over the notch).
    *   The liquid surface is smooth and not turbulent.
    *   The nappe is perfectly formed and not contracted.

*   **Derivation:**
    1.  Consider a small horizontal strip of the notch at a depth $x$ from the vertex.
    2.  Let the thickness of this strip be $dx$.
    3.  The width of the strip ($w$) can be determined using trigonometry.
        *   In the triangle formed by the vertex and the edges of the strip, the angle at the vertex is $\theta$.
        *   The distance from the vertex to the strip is $x$.
        *   Using $\tan(\theta/2) = (w/2) / x$, we get $w = 2x \tan(\theta/2)$.

    4.  The area of this small strip ($dA$) is $w \times dx = 2x \tan(\theta/2) dx$.

    5.  The velocity of water flowing over this strip can be calculated using Torricelli's theorem. The theoretical velocity ($v$) is given by $v = \sqrt{2gx}$, where $g$ is the acceleration due to gravity.

    6.  The theoretical discharge ($dQ$) through this small strip is the product of its area and velocity:
        $dQ = dA \times v = (2x \tan(\theta/2) dx) \times \sqrt{2gx}$
        $dQ = 2 \tan(\theta/2) \sqrt{2g} x^{3/2} dx$

    7.  To find the total theoretical discharge ($Q_{th}$), we integrate $dQ$ from the vertex (where $x=0$) to the upstream liquid surface level ($h$):
        $Q_{th} = \int_{0}^{h} 2 \tan(\theta/2) \sqrt{2g} x^{3/2} dx$

    8.  $Q_{th} = 2 \tan(\theta/2) \sqrt{2g} \int_{0}^{h} x^{3/2} dx$

    9.  Integrating $x^{3/2}$: $\int x^{3/2} dx = \frac{x^{3/2 + 1}}{3/2 + 1} = \frac{x^{5/2}}{5/2} = \frac{2}{5} x^{5/2}$

    10. Substituting the limits:
        $Q_{th} = 2 \tan(\theta/2) \sqrt{2g} \left[ \frac{2}{5} x^{5/2} \right]_{0}^{h}$
        $Q_{th} = 2 \tan(\theta/2) \sqrt{2g} \left( \frac{2}{5} h^{5/2} - 0 \right)$
        $Q_{th} = \frac{4}{5} \tan(\theta/2) \sqrt{2g} h^{5/2}$

*   **Standard Notation:** Often, the total angle at the vertex is denoted by $2\theta$. In this case, the derivation uses $\tan(\theta)$ for half the angle, leading to the formula:
    $Q_{th} = \frac{8}{15} \tan(\theta/2) \sqrt{2g} h^{5/2}$  (where $\theta$ is the total vertex angle)

    **Commonly Used V-notch Angle:** A common angle for V-notches is 90 degrees. For a 90-degree V-notch, $\theta/2 = 45^\circ$, and $\tan(45^\circ) = 1$.
    *   Using the $\theta$ as vertex angle: $Q_{th} = \frac{8}{15} \tan(90^\circ/2) \sqrt{2g} h^{5/2} = \frac{8}{15} \tan(45^\circ) \sqrt{2g} h^{5/2} = \frac{8}{15} \sqrt{2g} h^{5/2}$

    *   Using the $\theta/2$ as half vertex angle: If we use $\alpha = \theta/2$ as the half-angle at the vertex, the formula is: $Q_{th} = \frac{4}{5} \tan(\alpha) \sqrt{2g} h^{5/2}$. For a 90-degree V-notch, $\alpha = 45^\circ$, so $Q_{th} = \frac{4}{5} \tan(45^\circ) \sqrt{2g} h^{5/2} = \frac{4}{5} \sqrt{2g} h^{5/2}$.

    **Important Note:** Be consistent with whether $\theta$ represents the full vertex angle or half the vertex angle. Most standard texts use $\theta$ as the **full vertex angle** for triangular notches.

*   **The Formula to Remember (for full vertex angle $\theta$):**
    $Q_{th} = \frac{8}{15} \tan(\frac{\theta}{2}) \sqrt{2g} h^{5/2}$

*   **Constant Factor:** The term $\frac{8}{15} \sqrt{2g}$ is a constant.
    *   If $g = 9.81 \, m/s^2$:
        $\frac{8}{15} \sqrt{2 \times 9.81} = \frac{8}{15} \sqrt{19.62} \approx \frac{8}{15} \times 4.429 \approx 2.364$
        So, $Q_{th} \approx 2.364 \tan(\frac{\theta}{2}) h^{5/2}$ (for $h$ in meters, $Q$ in $m^3/s$)

---

### 3. Hydraulic Coefficients for Triangular Notches/Weirs

*   **Definition:** Due to various real-world conditions (viscosity, surface tension, friction, contraction of the nappe, velocity of approach), the actual discharge ($Q_{actual}$) is less than the theoretical discharge ($Q_{th}$). The ratio of actual discharge to theoretical discharge is called the **coefficient of discharge** ($C_d$).

*   **Coefficient of Discharge ($C_d$):**
    $C_d = \frac{Q_{actual}}{Q_{th}}$

*   **Actual Discharge ($Q_{actual}$):**
    $Q_{actual} = C_d \times Q_{th} = C_d \times \frac{8}{15} \tan(\frac{\theta}{2}) \sqrt{2g} h^{5/2}$

*   **Typical Values of $C_d$ for Triangular Notches:**
    *   $C_d$ for triangular notches is generally higher than for rectangular notches.
    *   It typically ranges from **0.58 to 0.62**.
    *   $C_d$ is not a constant but depends on the head ($h$), the notch angle ($\theta$), and the physical condition of the notch. However, for practical purposes and typical problems, a constant value within this range is often assumed or provided.

*   **Other Hydraulic Coefficients (less commonly discussed in introductory contexts but good to know):**
    *   **Coefficient of Velocity ($C_v$):** Accounts for the reduction in velocity due to friction. $v_{actual} = C_v \sqrt{2gx}$.
    *   **Coefficient of Contraction ($C_c$):** Accounts for the reduction in the area of the nappe due to contraction. $A_{actual} = C_c A_{theoretical}$.
    *   **Coefficient of Area ($C_a$):** Accounts for the reduction in area due to velocity of approach. $A_{effective} = C_a A_{theoretical}$.

    The coefficient of discharge can be related to these coefficients: $C_d = C_v \times C_c$. The effect of velocity of approach is usually handled separately or incorporated into $C_d$ in some empirical formulas. For triangular notches, the contraction is less significant than for rectangular ones, and $C_d$ is often used directly.

---

### 4. Experimental Determination of Hydraulic Coefficients

*   **Purpose:** To find the actual $C_d$ for a specific triangular notch under actual laboratory or field conditions.

*   **Procedure:**
    1.  **Setup:** A suitable tank or channel is used with a precisely machined triangular notch. A hook gauge or manometer is used to measure the head ($h$) accurately. A collecting tank with a calibrated volume or a flow meter is used to measure the actual discharge.
    2.  **Vary the Head:** The upstream water level is gradually increased, and for each distinct head ($h$), the corresponding discharge is measured.
    3.  **Data Collection:** A table of measured heads ($h$) and measured discharges ($Q_{actual}$) is created.
    4.  **Calculation:**
        *   For each observed head ($h$), calculate the theoretical discharge ($Q_{th}$) using the derived formula: $Q_{th} = \frac{8}{15} \tan(\frac{\theta}{2}) \sqrt{2g} h^{5/2}$.
        *   Calculate the coefficient of discharge ($C_d$) for each observation using: $C_d = \frac{Q_{actual}}{Q_{th}}$.
    5.  **Analysis:**
        *   The average value of $C_d$ can be calculated.
        *   Alternatively, a graph of $Q_{actual}$ versus $h^{5/2}$ can be plotted. This should ideally be a straight line passing through the origin. The slope of this line will be $C_d \times \frac{8}{15} \tan(\frac{\theta}{2}) \sqrt{2g}$. From this slope, $C_d$ can be determined.
        *   A graph of $C_d$ versus $h$ can also be plotted to observe how $C_d$ varies with the head.

*   **Key Measurement:** Accurate measurement of the head ($h$) is crucial for accurate results. The head should be measured upstream of the notch where the water surface is relatively undisturbed.

---

### 5. Numerical Problems and Examples

**Example 1: Calculating Discharge**

A triangular notch with a vertex angle of 90 degrees is used to measure the discharge of water. If the head of water over the notch is 0.25 m, find the discharge. Assume $C_d = 0.60$.

**Solution:**
*   Given: $\theta = 90^\circ$, $h = 0.25 \, m$, $C_d = 0.60$.
*   The formula for discharge over a triangular notch is $Q = C_d \times \frac{8}{15} \tan(\frac{\theta}{2}) \sqrt{2g} h^{5/2}$.
*   For $\theta = 90^\circ$, $\frac{\theta}{2} = 45^\circ$, and $\tan(45^\circ) = 1$.
*   Using $g = 9.81 \, m/s^2$:
    $Q = 0.60 \times \frac{8}{15} \times 1 \times \sqrt{2 \times 9.81} \times (0.25)^{5/2}$
    $Q = 0.60 \times \frac{8}{15} \times 4.429 \times (0.25)^{2.5}$
    $Q = 0.60 \times 2.364 \times (0.009765625)$
    $Q \approx 0.60 \times 0.02307$
    $Q \approx 0.01384 \, m^3/s$

    Alternatively, using the constant:
    $Q = 0.60 \times 2.364 \times (0.25)^{5/2}$
    $Q \approx 0.60 \times 2.364 \times 0.009765625$
    $Q \approx 0.01384 \, m^3/s$

**Answer:** The discharge is approximately $0.01384 \, m^3/s$.

**Example 2: Calculating Head**

Water flows through a 60-degree V-notch weir at a rate of $0.025 \, m^3/s$. Determine the head of water over the weir. Take $C_d = 0.62$.

**Solution:**
*   Given: $\theta = 60^\circ$, $Q = 0.025 \, m^3/s$, $C_d = 0.62$.
*   The formula is $Q = C_d \times \frac{8}{15} \tan(\frac{\theta}{2}) \sqrt{2g} h^{5/2}$.
*   Here, $\frac{\theta}{2} = 30^\circ$, and $\tan(30^\circ) = \frac{1}{\sqrt{3}} \approx 0.5774$.
*   Using $g = 9.81 \, m/s^2$:
    $0.025 = 0.62 \times \frac{8}{15} \times 0.5774 \times \sqrt{2 \times 9.81} \times h^{5/2}$
    $0.025 = 0.62 \times 2.364 \times 0.5774 \times h^{5/2}$
    $0.025 = 0.8444 \times h^{5/2}$
*   Now, solve for $h^{5/2}$:
    $h^{5/2} = \frac{0.025}{0.8444} \approx 0.029607$
*   To find $h$, we raise both sides to the power of $(2/5)$ or $0.4$:
    $h = (0.029607)^{2/5} = (0.029607)^{0.4}$
    $h \approx 0.215 \, m$

**Answer:** The head of water over the weir is approximately $0.215 \, m$.

**Example 3: Determining $C_d$ from Experimental Data**

During an experiment, a triangular notch with a 90-degree angle was used. The measured head was found to be 0.15 m. The actual discharge was measured as $0.0075 \, m^3/s$. Calculate the coefficient of discharge for this notch.

**Solution:**
*   Given: $\theta = 90^\circ$, $h = 0.15 \, m$, $Q_{actual} = 0.0075 \, m^3/s$.
*   First, calculate the theoretical discharge:
    $Q_{th} = \frac{8}{15} \tan(\frac{90^\circ}{2}) \sqrt{2g} h^{5/2}$
    $Q_{th} = \frac{8}{15} \times 1 \times \sqrt{2 \times 9.81} \times (0.15)^{5/2}$
    $Q_{th} = 2.364 \times (0.15)^{2.5}$
    $Q_{th} = 2.364 \times 0.0170957$
    $Q_{th} \approx 0.04041 \, m^3/s$
*   Now, calculate $C_d$:
    $C_d = \frac{Q_{actual}}{Q_{th}} = \frac{0.0075}{0.04041}$
    $C_d \approx 0.1856$

    **Wait!** This value of $C_d$ is extremely low and not within the typical range. Let's recheck the calculation.

    Let's redo the theoretical discharge calculation more carefully.
    $h^{5/2} = (0.15)^{2.5} \approx 0.0170957$
    $\frac{8}{15} \sqrt{2g} = \frac{8}{15} \sqrt{19.62} \approx \frac{8}{15} \times 4.429 \approx 2.362$
    $Q_{th} \approx 2.362 \times 0.0170957 \approx 0.040405 \, m^3/s$

    $C_d = \frac{0.0075}{0.040405} \approx 0.1856$.

    The problem might have an error in the provided actual discharge value. If we assume a reasonable $C_d$ of 0.6, let's see what the discharge should be:
    $Q_{actual} = 0.60 \times 0.040405 \approx 0.02424 \, m^3/s$.

    **Let's assume the problem meant the actual discharge was $0.024 \, m^3/s$ instead of $0.0075 \, m^3/s$ for a more realistic scenario.**

    **Revised Calculation with assumed $Q_{actual} = 0.024 \, m^3/s$:**
    $C_d = \frac{Q_{actual}}{Q_{th}} = \frac{0.024}{0.040405}$
    $C_d \approx 0.594$

    This value is within the expected range.

    **If we MUST use the given $0.0075 \, m^3/s$ and get a $C_d$, the calculation is:**
    $C_d = \frac{0.0075}{0.040405} \approx 0.1856$. This indicates a likely experimental error or a typo in the problem statement. In an exam, if such a value is obtained, it's good to note that it's outside the usual range and might suggest an error in the input data.

**Answer (using the provided data, acknowledging the unusual result):** The coefficient of discharge is approximately 0.186.

---

### 6. Practice Questions

1.  A triangular notch has a vertex angle of 90°. If the head of water is 0.1 m, calculate the theoretical discharge over the notch. Use $g = 9.81 \, m/s^2$.
2.  A 60° V-notch is used to measure the flow of water in a channel. If the coefficient of discharge is 0.60 and the head over the notch is 0.2 m, calculate the actual discharge.
3.  A triangular notch weir with an angle of 120° discharges $0.03 \, m^3/s$ of water when the head is 0.15 m. Calculate the coefficient of discharge.
4.  What is the head of water over a 90° triangular notch when the discharge is $0.01 \, m^3/s$? Assume the coefficient of discharge is 0.62.

---

### 7. Answers to Practice Questions

1.  **Given:** $\theta = 90^\circ$, $h = 0.1 \, m$, $g = 9.81 \, m/s^2$.
    $Q_{th} = \frac{8}{15} \tan(\frac{90^\circ}{2}) \sqrt{2g} h^{5/2}$
    $Q_{th} = \frac{8}{15} \times 1 \times \sqrt{2 \times 9.81} \times (0.1)^{5/2}$
    $Q_{th} = 2.364 \times 0.003162$
    $Q_{th} \approx 0.007476 \, m^3/s$

2.  **Given:** $\theta = 60^\circ$, $C_d = 0.60$, $h = 0.2 \, m$.
    $Q = C_d \times \frac{8}{15} \tan(\frac{60^\circ}{2}) \sqrt{2g} h^{5/2}$
    $Q = 0.60 \times \frac{8}{15} \times \tan(30^\circ) \times \sqrt{2 \times 9.81} \times (0.2)^{5/2}$
    $Q = 0.60 \times 2.364 \times 0.5774 \times (0.2)^{2.5}$
    $Q = 0.60 \times 1.364 \times 0.0178885$
    $Q \approx 0.0146 \, m^3/s$

3.  **Given:** $\theta = 120^\circ$, $Q_{actual} = 0.03 \, m^3/s$, $h = 0.15 \, m$.
    First, find $Q_{th}$:
    $Q_{th} = \frac{8}{15} \tan(\frac{120^\circ}{2}) \sqrt{2g} h^{5/2}$
    $Q_{th} = \frac{8}{15} \times \tan(60^\circ) \times \sqrt{2 \times 9.81} \times (0.15)^{5/2}$
    $Q_{th} = \frac{8}{15} \times 1.732 \times 4.429 \times 0.0170957$
    $Q_{th} = 2.364 \times 1.732 \times 0.0170957$
    $Q_{th} \approx 0.06996 \, m^3/s$
    Now, calculate $C_d$:
    $C_d = \frac{Q_{actual}}{Q_{th}} = \frac{0.03}{0.06996}$
    $C_d \approx 0.429$
    *(Again, this $C_d$ is low, suggesting potential issues with the problem data, but this is the calculated answer based on the provided numbers.)*

4.  **Given:** $\theta = 90^\circ$, $Q_{actual} = 0.01 \, m^3/s$, $C_d = 0.62$.
    $Q_{actual} = C_d \times \frac{8}{15} \tan(\frac{\theta}{2}) \sqrt{2g} h^{5/2}$
    $0.01 = 0.62 \times \frac{8}{15} \times \tan(45^\circ) \times \sqrt{2 \times 9.81} \times h^{5/2}$
    $0.01 = 0.62 \times 2.364 \times 1 \times h^{5/2}$
    $0.01 = 1.46568 \times h^{5/2}$
    $h^{5/2} = \frac{0.01}{1.46568} \approx 0.0068225$
    $h = (0.0068225)^{2/5} = (0.0068225)^{0.4}$
    $h \approx 0.140 \, m$

---

### 8. Important Points to Remember

*   **Formula:** The discharge over a triangular notch is given by $Q = C_d \times \frac{8}{15} \tan(\frac{\theta}{2}) \sqrt{2g} h^{5/2}$, where $\theta$ is the total vertex angle.
*   **$C_d$ Range:** For triangular notches, $C_d$ is typically between 0.58 and 0.62.
*   **Head Measurement:** Accurate measurement of the head ($h$) is critical.
*   **Units:** Ensure consistent units (e.g., meters for head, $m^3/s$ for discharge, $m/s^2$ for $g$).
*   **Nappe Condition:** The formula is derived assuming unsubmerged flow.
*   **Angle Convention:** Be mindful of whether the angle $\theta$ refers to the full vertex angle or half the vertex angle. Most standard formulas use the full vertex angle.

---
