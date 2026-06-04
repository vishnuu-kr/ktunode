---
title: "Flow through Notches and weirs: classification of notches and weirs"
subject: "FLUID MECHANICS"
module: "Module 4: Flow through Orifices: hydraulic coefficients and experimental determination of hydraulic coefficients (associated numerical problems)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810708"
status: "completed"
scrapedAt: "2026-05-20T18:40:45.676Z"
---
# Fluid Mechanics: Module 4 - Flow through Orifices, Notches, and Weirs

## Topic: Flow through Notches and Weirs: Classification of Notches and Weirs

This module focuses on understanding the principles governing the flow of liquids over openings, specifically notches and weirs. We will delve into the different types of notches and weirs and their respective classifications.

### 1. Introduction to Notches and Weirs

**Definition:**
*   **Notch:** A notch is a contraction in the *top* of a tank or reservoir, through which fluid flows. It is essentially an opening in the side of a tank with the top edge exposed to the atmosphere.
*   **Weir:** A weir is a barrier across the *width* of an open channel, over which flow occurs. It is typically used to measure the flow rate in open channels.

**Purpose:**
Both notches and weirs are primarily used for:
*   **Discharge Measurement:** They are simple and effective devices for measuring the rate of flow of liquids, especially in laboratory settings and smaller industrial applications.
*   **Head Measurement:** The discharge is a function of the head (the vertical distance between the free surface of the liquid and the crest of the notch or weir).

### 2. Classification of Notches and Weirs

Notches and weirs can be classified based on several criteria. Understanding these classifications is crucial for selecting the appropriate device for a given application and for applying the correct theoretical formulas.

#### 2.1. Classification Based on Shape of Opening

This is the most common and significant classification.

##### 2.1.1. Notches

*   **Rectangular Notch:**
    *   **Description:** The opening is rectangular in shape.
    *   **Diagram:** (Imagine a rectangle cut into the side of a tank)
    *   **Characteristics:**
        *   Simple to construct.
        *   Suitable for measuring flow rates over a wide range.
        *   The velocity of approach of the liquid approaching the notch can significantly affect the discharge, especially at low heads.
    *   **Formula (without velocity of approach correction):**
        $Q = \frac{2}{3} C_d \sqrt{2g} L H^{3/2}$
        Where:
        *   $Q$ = Discharge (m³/s)
        *   $C_d$ = Coefficient of discharge (typically between 0.6 to 0.65)
        *   $g$ = Acceleration due to gravity (approximately 9.81 m/s²)
        *   $L$ = Length of the notch (m)
        *   $H$ = Head over the crest of the notch (m)

*   **Triangular Notch (V-Notch):**
    *   **Description:** The opening is triangular in shape.
    *   **Diagram:** (Imagine a triangle cut into the side of a tank, apex pointing downwards)
    *   **Characteristics:**
        *   More accurate than rectangular notches for measuring small discharge rates.
        *   The width of the opening varies with the head, which helps in maintaining a more consistent discharge coefficient over a range of heads.
        *   The apex angle ($\theta$) is a key parameter.
    *   **Formula (without velocity of approach correction):**
        $Q = \frac{8}{15} C_d \sqrt{2g} \tan(\frac{\theta}{2}) H^{5/2}$
        Where:
        *   $Q$ = Discharge (m³/s)
        *   $C_d$ = Coefficient of discharge (typically between 0.6 to 0.65)
        *   $g$ = Acceleration due to gravity (approximately 9.81 m/s²)
        *   $\theta$ = Angle of the notch
        *   $H$ = Head over the apex of the notch (m)

*   **Trapezoidal Notch (Cipolletti Notch):**
    *   **Description:** The opening is trapezoidal in shape. It is a special case of a trapezoidal notch where the side slopes are designed to compensate for the increased discharge due to velocity of approach in a rectangular notch.
    *   **Diagram:** (Imagine a trapezoid cut into the side of a tank)
    *   **Characteristics:**
        *   Combines features of rectangular and triangular notches.
        *   The side slopes are typically 1 horizontal to 4 vertical ($1H:4V$).
        *   Eliminates the need for velocity of approach correction for ordinary heads.
    *   **Formula (Cipolletti Notch):**
        $Q = C_d \sqrt{2g} L H^{1/2}$
        Where:
        *   $Q$ = Discharge (m³/s)
        *   $C_d$ = Coefficient of discharge (typically around 0.61)
        *   $g$ = Acceleration due to gravity (approximately 9.81 m/s²)
        *   $L$ = Length of the weir crest (m)
        *   $H$ = Head over the crest of the notch (m)

##### 2.1.2. Weirs

Weirs are broadly classified based on the shape of the crest and the flow over them.

*   **Broad-Crested Weir:**
    *   **Description:** The crest is relatively wide.
    *   **Diagram:** (Imagine a broad, flat horizontal surface across a channel)
    *   **Characteristics:**
        *   Flow is typically critical over the crest.
        *   The upstream edge is usually sharp.
        *   The discharge is primarily dependent on the head over the upstream edge and the width of the crest.
    *   **Formula (approximate):**
        $Q = C_d \sqrt{g} L H^{3/2}$
        Where:
        *   $Q$ = Discharge (m³/s)
        *   $C_d$ = Coefficient of discharge (typically between 0.9 to 1.3, depends on crest width and upstream edge shape)
        *   $g$ = Acceleration due to gravity (approximately 9.81 m/s²)
        *   $L$ = Width of the weir crest (m)
        *   $H$ = Head over the upstream edge of the weir (m)

*   **Sharp-Crested Weir:**
    *   **Description:** The crest is sharp, with a thin edge. This ensures that the nappe (the sheet of water flowing over the weir) springs clear from the crest.
    *   **Diagram:** (Imagine a thin, sharp edge across a channel)
    *   **Characteristics:**
        *   Allows for more precise discharge measurements.
        *   Includes rectangular, triangular (V-notch), and trapezoidal weirs (which are essentially the same as notches but used in open channels).
    *   **Formulas:** The same formulas as the corresponding notches apply.

#### 2.2. Classification Based on Flow Condition

This classification describes how the water flows over the weir.

*   **Suppressed Weir:**
    *   **Description:** The weir extends across the entire width of the channel, so the flow is suppressed at the sides.
    *   **Diagram:** (Imagine a weir that perfectly fits the width of the channel)
    *   **Characteristics:** The ends of the weir are flush with the channel walls.

*   **Contractions Weir:**
    *   **Description:** The weir is narrower than the channel, creating contractions at the sides.
    *   **Diagram:** (Imagine a weir that is narrower than the channel, with open space on the sides)
    *   **Characteristics:** There are side contractions. The number of side contractions determines the type:
        *   **One Contraction:** One end of the weir is flush with a channel wall, and the other end has a contraction.
        *   **Two Contractions:** Both ends of the weir have contractions.

#### 2.3. Classification Based on Nappe Ventilation

This refers to whether air can pass under the nappe.

*   **Drowned Weir:**
    *   **Description:** The nappe is submerged or partially submerged by the tailwater (the water downstream of the weir).
    *   **Diagram:** (Imagine the water level downstream is higher than the top of the nappe)
    *   **Characteristics:** The discharge is reduced due to the backpressure. Special formulas are needed to calculate the discharge.

*   **Un-drowned Weir:**
    *   **Description:** The nappe flows freely in the air, and there is no significant backpressure from the tailwater.
    *   **Diagram:** (Imagine the water level downstream is lower than the top of the nappe)
    *   **Characteristics:** This is the ideal condition for standard weir formulas to apply.

### 3. Key Concepts and Definitions

*   **Head (H):** The vertical distance between the free surface of the liquid and the crest (bottom edge) of the notch or weir opening.
*   **Crest:** The upstream edge of the opening of a weir or notch.
*   **Nappe:** The sheet of water flowing over the crest of a weir or notch.
*   **Coefficient of Discharge ($C_d$):** A dimensionless factor that accounts for energy losses due to friction and contraction of the nappe. It is a ratio of the actual discharge to the theoretical discharge. $C_d = \frac{Q_{actual}}{Q_{theoretical}}$.
*   **Velocity of Approach:** The velocity of the liquid approaching the notch or weir from the tank or channel. It causes an increase in the effective head, and its effect needs to be considered, especially for rectangular notches and low heads.
*   **End Contractions:** The reduction in the effective length of a weir due to the proximity of the channel walls.
*   **Suppressed Weir:** A weir that spans the full width of the channel.
*   **Sharp-Crested Weir:** A weir with a sharp upstream edge.
*   **Broad-Crested Weir:** A weir with a wide, flat crest.
*   **Critical Flow:** Flow where the specific energy is at a minimum for a given discharge. This often occurs over broad-crested weirs.

### 4. Examples

**Example 1: Rectangular Notch Discharge Calculation**

A rectangular notch, 0.5 m wide, is installed in a tank. The head of water over the crest of the notch is observed to be 0.2 m. If the coefficient of discharge is 0.62, calculate the discharge through the notch.

**Solution:**
Given:
*   Length of notch, $L = 0.5$ m
*   Head over the crest, $H = 0.2$ m
*   Coefficient of discharge, $C_d = 0.62$
*   $g = 9.81$ m/s²

Using the formula for a rectangular notch:
$Q = \frac{2}{3} C_d \sqrt{2g} L H^{3/2}$
$Q = \frac{2}{3} \times 0.62 \times \sqrt{2 \times 9.81} \times 0.5 \times (0.2)^{3/2}$
$Q = \frac{2}{3} \times 0.62 \times \sqrt{19.62} \times 0.5 \times (0.008 \times \sqrt{0.2})$
$Q = \frac{2}{3} \times 0.62 \times 4.429 \times 0.5 \times (0.008 \times 0.4472)$
$Q = \frac{2}{3} \times 0.62 \times 4.429 \times 0.5 \times 0.003578$
$Q \approx 0.0259$ m³/s

**Example 2: Triangular (V-Notch) Notch Discharge Calculation**

A V-notch with an angle of 90° is used to measure the flow of water. The head over the apex of the notch is 0.3 m. If the coefficient of discharge is 0.6, calculate the discharge.

**Solution:**
Given:
*   Angle of notch, $\theta = 90°$
*   Head over the apex, $H = 0.3$ m
*   Coefficient of discharge, $C_d = 0.6$
*   $g = 9.81$ m/s²

Using the formula for a triangular notch:
$Q = \frac{8}{15} C_d \sqrt{2g} \tan(\frac{\theta}{2}) H^{5/2}$
$\tan(\frac{\theta}{2}) = \tan(\frac{90°}{2}) = \tan(45°) = 1$
$Q = \frac{8}{15} \times 0.6 \times \sqrt{2 \times 9.81} \times 1 \times (0.3)^{5/2}$
$Q = \frac{8}{15} \times 0.6 \times 4.429 \times (0.0243 \times \sqrt{0.3})$
$Q = \frac{8}{15} \times 0.6 \times 4.429 \times (0.0243 \times 0.5477)$
$Q = \frac{8}{15} \times 0.6 \times 4.429 \times 0.01332$
$Q \approx 0.0706$ m³/s

### 5. Practice Questions

1.  A rectangular weir, 1.2 m long, is installed in a channel. The head over the weir crest is 0.25 m. If the coefficient of discharge is 0.6, calculate the discharge. (Assume no velocity of approach).
    **Answer:** $Q \approx 0.274$ m³/s

2.  A V-notch with an apex angle of 60° is used to measure discharge. The head of water over the apex is 0.15 m. Calculate the discharge through the V-notch if $C_d = 0.62$.
    **Answer:** $Q \approx 0.0167$ m³/s

3.  A Cipolletti weir has a crest length of 1 m. If the head over the crest is 0.2 m, calculate the discharge. Assume $C_d = 0.61$.
    **Answer:** $Q \approx 0.386$ m³/s

### 6. Important Points to Remember

*   **Shape is Crucial:** The shape of the notch or weir significantly influences the discharge formula and its applicability.
*   **Head Measurement:** Accurate measurement of the head ($H$) is paramount for calculating discharge.
*   **Coefficient of Discharge ($C_d$):** This empirical coefficient accounts for real-world losses and is essential for accurate calculations. It can vary with head, weir geometry, and nappe conditions.
*   **Velocity of Approach:** For rectangular notches/weirs, especially at low heads, the velocity of approach correction can be significant and should be considered. Triangular notches are less affected.
*   **Channel Width:** For weirs, whether they have end contractions or are suppressed affects the effective length and thus the discharge.
*   **Nappe Ventilation:** Ensure the nappe is well-ventilated for accurate measurements using standard formulas. Drowned conditions require specific corrections.
*   **Cipolletti Weir Advantage:** The specific side slopes of a Cipolletti weir are designed to negate the need for velocity of approach correction.
*   **V-Notch for Low Flows:** V-notches are generally preferred for measuring small flow rates due to their sensitivity.

This concludes the introduction to the classification of notches and weirs. The subsequent sections of this module will delve into the determination of hydraulic coefficients and the analysis of flow through these devices.
