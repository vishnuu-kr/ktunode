---
title: "Level difference between points (vertical angle)"
subject: "SURVEY LAB"
module: "Module 6: Level difference between points (vertical angle)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810892"
status: "completed"
scrapedAt: "2026-05-20T18:41:57.124Z"
---
# Survey Lab: Module 6 - Level Difference Between Points (Vertical Angle)

## 1. Introduction to Level Difference and Vertical Angles

### 1.1 What is Level Difference?

*   **Definition:** The level difference (or elevation difference) between two points is the **vertical distance** between them. It tells us how much higher or lower one point is compared to another.
*   **Importance:** Crucial for:
    *   Design of infrastructure (roads, canals, drainage systems)
    *   Earthwork calculations (cut and fill)
    *   Understanding topography
    *   Ensuring water flow in gravity systems

### 1.2 What is a Vertical Angle?

*   **Definition:** A vertical angle is the **angle between the horizontal plane and the line of sight to an object**.
*   **Types of Vertical Angles:**
    *   **Angle of Elevation:** Measured upwards from the horizontal.
    *   **Angle of Depression:** Measured downwards from the horizontal.
*   **Measurement:** Typically measured using an instrument like a **theodolite** or a **total station**, which has a graduated vertical circle.

## 2. Principles of Determining Level Difference Using Vertical Angles

The fundamental principle relies on trigonometry. When we measure a vertical angle and the horizontal distance to a point, we can form a right-angled triangle.

### 2.1 The Right-Angled Triangle

Imagine a scenario where:

*   **Point A:** The instrument is set up.
*   **Point B:** The target point whose elevation we want to find relative to Point A.
*   **Point C:** A point directly below or above Point B, at the same horizontal level as Point A.

In this scenario, we form a right-angled triangle ABC, where:

*   **AC:** The horizontal distance between Point A and Point B.
*   **BC:** The vertical difference between Point B and Point A.
*   **Angle BAC:** The vertical angle (either angle of elevation or depression).

### 2.2 Trigonometric Relationships

Using the measured vertical angle and horizontal distance, we can calculate the vertical difference (BC) using the tangent function:

$$ \text{tan}(\text{Vertical Angle}) = \frac{\text{Opposite Side}}{\text{Adjacent Side}} $$

In our triangle ABC:

$$ \text{tan}(\text{Vertical Angle}) = \frac{\text{BC}}{\text{AC}} $$

Therefore, the vertical difference (BC) can be calculated as:

$$ \text{BC} = \text{AC} \times \text{tan}(\text{Vertical Angle}) $$

### 2.3 Including Instrument Height and Target Height

In real-world surveying, we need to account for:

*   **Instrument Height ($H_i$):** The height from the ground at Point A to the center of the instrument's telescope.
*   **Target Height ($H_t$):** The height from the ground at Point B to the point where the line of sight intersects (e.g., the tribrach on a prism).

**Formula for Level Difference:**

Let:
*   $EL_A$: Elevation of Point A (the instrument station).
*   $EL_B$: Elevation of Point B (the target point).
*   $H_i$: Height of instrument above Point A.
*   $H_t$: Height of target above Point B.
*   $D$: Horizontal distance between Point A and Point B.
*   $\alpha$: Vertical angle measured from the instrument at A to the target at B.

The vertical distance from the instrument's line of sight to Point B is $D \times \tan(\alpha)$.

The elevation of the line of sight at the target is $EL_A + H_i$.

Therefore, the elevation of Point B ($EL_B$) can be calculated as:

$$ EL_B = (EL_A + H_i) + (D \times \text{tan}(\alpha)) - H_t $$

**Important Note:**
*   If $\alpha$ is an **angle of elevation**, $D \times \text{tan}(\alpha)$ is **added** to the instrument's height.
*   If $\alpha$ is an **angle of depression**, $D \times \text{tan}(\alpha)$ is **subtracted** from the instrument's height (or more precisely, we would use $\tan(-\alpha)$ which results in a negative value).

## 3. Measurement Techniques and Instruments

### 3.1 Instruments Used

*   **Theodolite:** A precise optical instrument used for measuring horizontal and vertical angles.
*   **Total Station:** Combines an electronic theodolite with an electronic distance meter (EDM) and a microprocessor. It directly measures angles and distances and can compute elevations.
*   **Level (Automatic Level/Digital Level):** Primarily used for precise differential leveling, but advanced digital levels can sometimes incorporate angle measurement capabilities or be used in conjunction with other instruments.

### 3.2 Measurement Process (General)

1.  **Setup:**
    *   Set up the instrument precisely over Point A.
    *   Measure and record the instrument height ($H_i$).
2.  **Targeting:**
    *   Place a target (e.g., prism on a tribrach) at Point B.
    *   Measure and record the target height ($H_t$).
3.  **Angle Measurement:**
    *   Aim the instrument at the target at Point B.
    *   Read and record the vertical angle ($\alpha$).
4.  **Distance Measurement:**
    *   Measure the horizontal distance ($D$) between Point A and Point B using an EDM (if using a Total Station) or a separate EDM. If only a theodolite is used, the distance might be determined by stadia readings or other methods.
5.  **Data Recording:** Record all relevant data: instrument station, target station, instrument height, target height, horizontal distance, and vertical angle.
6.  **Calculation:** Use the formula to calculate the level difference and subsequently the elevation of Point B.

## 4. Sources of Error and Precautions

### 4.1 Common Errors

*   **Instrumental Errors:**
    *   Collimation error (line of sight not perpendicular to the vertical axis).
    *   Inaccurate calibration of the instrument.
*   **Personal Errors:**
    *   Improper centering and leveling of the instrument.
    *   Incorrect sighting of the target.
    *   Parallax in optical instruments.
    *   Incorrect reading of angles and distances.
*   **Environmental Errors:**
    *   **Atmospheric Refraction:** Bending of the line of sight through the atmosphere due to temperature and pressure variations. This causes the observed vertical angle to be slightly different from the true angle.
    *   **Earth Curvature:** For very long distances, the curvature of the Earth becomes significant, causing the line of sight to fall away from the target.
    *   **Wind:** Can cause vibrations in the instrument or target.
    *   **Temperature Variations:** Can affect instrument readings and atmospheric conditions.

### 4.2 Precautions to Minimize Errors

*   **Instrument Calibration:** Ensure instruments are regularly calibrated.
*   **Careful Setup:** Precise centering and leveling of the instrument and target.
*   **Two-Face (Face Left/Face Right) Measurements:** For theodolites, measuring angles with the telescope in both positions helps to eliminate collimation errors.
*   **Repeat Readings:** Take multiple readings and average them.
*   **Correction Factors:** Apply corrections for Earth curvature and refraction for long sights.
*   **Stable Setup:** Avoid setting up in areas prone to vibration.
*   **Shielding:** Protect instruments from direct sunlight and wind where possible.
*   **Accurate Distance Measurement:** Ensure the horizontal distance is measured accurately.

## 5. Corrections for Earth Curvature and Refraction

These corrections are significant for longer distances (typically over 300-500 meters).

### 5.1 Combined Correction ($C$)

The combined effect of Earth's curvature and atmospheric refraction can be approximated by the formula:

$$ C = \frac{D^2}{2R} (1 - \epsilon) $$

Where:
*   $C$ is the combined correction (in the same units as distance).
*   $D$ is the horizontal distance.
*   $R$ is the radius of the Earth (approximately 6,371,000 meters or 20,900,000 feet).
*   $\epsilon$ is the coefficient of refraction, which is typically taken as 0.13 (meaning refraction reduces the effect of curvature by about 13%). The combined correction is often approximated as $C \approx 0.0785 D^2$ (in meters, with $D$ in kilometers) or $C \approx 0.667 D^2$ (in feet, with $D$ in miles).

### 5.2 Application of Correction

*   **Correction is always additive:** The observed vertical difference is always less than the true vertical difference due to these effects.
*   The true vertical difference = Observed vertical difference + Combined correction ($C$).

### 5.3 Calculation Example (with Correction)

Let's say we have:
*   $EL_A = 100.000$ m
*   $H_i = 1.500$ m
*   $H_t = 1.200$ m
*   $D = 1000$ m (1 km)
*   $\alpha = +3^\circ 00' 00''$ (angle of elevation)

**Step 1: Calculate observed vertical difference (without correction)**
Observed vertical difference = $D \times \text{tan}(\alpha)$
Observed vertical difference = $1000 \times \text{tan}(3^\circ)$
Observed vertical difference $\approx 1000 \times 0.052408$
Observed vertical difference $\approx 52.408$ m

**Step 2: Calculate combined correction ($C$)**
$C \approx 0.0785 \times (1 \text{ km})^2$
$C \approx 0.0785$ m

**Step 3: Calculate true vertical difference**
True vertical difference = Observed vertical difference + $C$
True vertical difference $\approx 52.408 \text{ m} + 0.0785 \text{ m}$
True vertical difference $\approx 52.4865$ m

**Step 4: Calculate the elevation of Point B ($EL_B$)**
$EL_B = (EL_A + H_i) + \text{True Vertical Difference} - H_t$
$EL_B = (100.000 + 1.500) + 52.4865 - 1.200$
$EL_B = 101.500 + 52.4865 - 1.200$
$EL_B \approx 152.7865$ m

## 6. Practice Questions and Exercises

---

**Question 1:**
An instrument is set up at Point P with an elevation of 250.500 m. The instrument height ($H_i$) is 1.450 m. A target is placed at Point Q, and the target height ($H_t$) is 1.100 m. The horizontal distance between P and Q is 300 m. The vertical angle measured from P to Q is an angle of elevation of $5^\circ 30' 00''$. Calculate the elevation of Point Q. (Assume no corrections for Earth curvature or refraction are needed for this distance).

**Answer 1:**
*   Vertical angle ($\alpha$) = $5^\circ 30' 00'' = 5.5^\circ$
*   Horizontal distance ($D$) = 300 m
*   $EL_P = 250.500$ m
*   $H_i = 1.450$ m
*   $H_t = 1.100$ m

Vertical difference (observed) = $D \times \text{tan}(\alpha)$
Vertical difference = $300 \times \text{tan}(5.5^\circ)$
Vertical difference $\approx 300 \times 0.09629$
Vertical difference $\approx 28.887$ m

$EL_Q = (EL_P + H_i) + \text{Vertical Difference} - H_t$
$EL_Q = (250.500 + 1.450) + 28.887 - 1.100$
$EL_Q = 251.950 + 28.887 - 1.100$
$EL_Q \approx 280.737$ m

---

**Question 2:**
From Point X, the elevation of which is 50.000 m, an instrument is set up with $H_i = 1.500$ m. A target at Point Y has a height $H_t = 1.500$ m. The horizontal distance is 800 m. The observed vertical angle is an angle of depression of $2^\circ 15' 00''$. Calculate the elevation of Point Y, applying corrections for Earth curvature and refraction. (Use $C \approx 0.0785 D^2$, where $D$ is in km).

**Answer 2:**
*   Vertical angle ($\alpha$) = $-2^\circ 15' 00'' = -2.25^\circ$ (angle of depression)
*   Horizontal distance ($D$) = 800 m = 0.8 km
*   $EL_X = 50.000$ m
*   $H_i = 1.500$ m
*   $H_t = 1.500$ m

Vertical difference (observed) = $D \times \text{tan}(\alpha)$
Vertical difference = $800 \times \text{tan}(-2.25^\circ)$
Vertical difference $\approx 800 \times (-0.03929)$
Vertical difference $\approx -31.432$ m

Combined Correction ($C$) = $0.0785 \times (0.8 \text{ km})^2$
$C = 0.0785 \times 0.64$
$C \approx 0.05024$ m

True vertical difference = Observed vertical difference + $C$
True vertical difference $\approx -31.432 + 0.05024$
True vertical difference $\approx -31.38176$ m

$EL_Y = (EL_X + H_i) + \text{True Vertical Difference} - H_t$
$EL_Y = (50.000 + 1.500) + (-31.38176) - 1.500$
$EL_Y = 51.500 - 31.38176 - 1.500$
$EL_Y \approx 18.61824$ m

---

**Question 3:**
Explain the difference between an angle of elevation and an angle of depression and how each affects the calculation of level difference.

**Answer 3:**
*   **Angle of Elevation:** This is the angle measured **upwards** from the horizontal plane to the line of sight to a higher point. When calculating the level difference, a positive angle of elevation contributes positively to the height difference (i.e., you add $D \times \text{tan}(\alpha)$).
*   **Angle of Depression:** This is the angle measured **downwards** from the horizontal plane to the line of sight to a lower point. When calculating the level difference, a negative angle of depression contributes negatively to the height difference (i.e., you subtract $|D \times \text{tan}(\alpha)|$ or add $D \times \text{tan}(\alpha)$ where $\alpha$ is a negative value).

---

## 7. Important Points to Remember

*   **Vertical Angle is Key:** The vertical angle, combined with the horizontal distance, is the core of this method.
*   **Instrument and Target Heights:** Always account for $H_i$ and $H_t$. They are crucial for determining the correct ground-to-ground elevation difference.
*   **Signs Matter:** Pay close attention to whether the angle is an elevation (positive) or depression (negative).
*   **Horizontal Distance:** Ensure the horizontal distance is used in the calculation, not the slope distance. If you measure slope distance, you'll need to convert it using the zenith angle or vertical angle.
*   **Corrections:** For long distances, the combined correction for Earth curvature and refraction is essential for accuracy.
*   **Two-Point Method:** For even greater accuracy and to check for instrument errors, this method is often performed by measuring the vertical angle from Point A to Point B, and then from Point B back to Point A.

This set of notes provides a comprehensive understanding of determining level differences between points using vertical angles, covering the principles, techniques, errors, corrections, and practical applications.
