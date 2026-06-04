---
title: "Tangential tacheometry (vertical angle)"
subject: "SURVEY LAB"
module: "Module 7: Tangential tacheometry (vertical angle)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810894"
status: "completed"
scrapedAt: "2026-05-20T18:41:57.820Z"
---
# SURVEY LAB: Module 7 - Tangential Tacheometry (Vertical Angle)

## 1. Introduction to Tangential Tacheometry

Tangential tacheometry is a surveying method used to determine horizontal distances and elevations of points using a tacheometer (a theodolite with stadia hairs) and known vertical angles. Unlike stadia tacheometry which relies on the stadia interval, tangential tacheometry primarily utilizes the measured vertical angle to a point and the known height of the instrument.

**Key Concepts:**

*   **Tacheometer:** A surveying instrument, typically a theodolite, equipped with stadia hairs in the telescope.
*   **Stadia Hairs:** Two horizontal lines in the reticle of a tacheometer, used in conjunction with the stadia interval to measure distance.
*   **Vertical Angle:** The angle between the horizontal plane and the line of sight to a point.
*   **Zenith Angle:** The angle measured downwards from the zenith (the point directly overhead) to the line of sight.
*   **Horizontal Distance:** The distance between the instrument station and the point being sighted, projected onto the horizontal plane.
*   **Reduced Level (RL):** The elevation of a point relative to a datum.

## 2. Principles of Tangential Tacheometry

The core principle of tangential tacheometry relies on trigonometry. When a vertical angle is measured to a target, a right-angled triangle is formed with the horizontal distance as one leg, the vertical difference in elevation as the other leg, and the line of sight as the hypotenuse.

### 2.1. Measuring Horizontal Distance

There are two primary methods for determining horizontal distance using tangential tacheometry with vertical angles:

#### 2.1.1. Single Setting Method

This is the most common method.

**Scenario:** The instrument is set up at point A, and we want to determine the horizontal distance to point B. We observe the vertical angle to a point C on the staff held vertically at B. The height of the instrument (HI) is known.

**Diagram:**

```
        B (Target Point)
       /|
      / | Vertical Difference (V)
     /  |
    /   |
   /    |
  /_____|
 A (Inst. Station)  Horizontal Distance (D)
```

**Formulas:**

*   **If the vertical angle ($\alpha$) is measured upwards (angle of elevation):**
    *   $V = D \tan(\alpha)$
    *   $D = \frac{HI_{AB} - HT_C}{\tan(\alpha)}$
    *   Where:
        *   $V$ = Vertical difference in elevation between the instrument's line of sight and point C.
        *   $D$ = Horizontal distance from the instrument to the point where the staff is held.
        *   $\alpha$ = Measured vertical angle to point C.
        *   $HI_{AB}$ = Height of instrument at station A (height of the telescope's optical center above the datum).
        *   $HT_C$ = Height of the target point C on the staff above the ground at B.

*   **If the vertical angle ($\alpha$) is measured downwards (angle of depression):**
    *   $V = D \tan(\alpha)$ (The angle is treated as positive in the formula, but conceptually it's depression).
    *   $D = \frac{HI_{AB} - HT_C}{\tan(\alpha)}$ (This formula still holds, but V will be negative, indicating a drop in elevation).

**Important Note:** The formula $D = \frac{HI_{AB} - HT_C}{\tan(\alpha)}$ assumes the staff is held vertically. If the staff is not perfectly vertical, a correction is needed.

**Example:**

An instrument is set up at point A with an $HI_{AB} = 1.500$ m. A vertical angle of +10°30' is observed to a target point C on a vertically held staff at point B, with $HT_C = 1.200$ m. Calculate the horizontal distance (D) between A and B.

**Solution:**

*   $D = \frac{HI_{AB} - HT_C}{\tan(\alpha)}$
*   $D = \frac{1.500 \text{ m} - 1.200 \text{ m}}{\tan(10°30')}$
*   $D = \frac{0.300 \text{ m}}{0.18534}$ (approx. value of tan(10°30'))
*   $D \approx 1.619$ m

#### 2.1.2. Two Setting Method (More Accurate for Distance)

This method involves observing vertical angles to both the top and bottom of a calibrated staff (or a targeted rod) held at the distant point. This is particularly useful when the target point is at a significant elevation difference, making the single observation less accurate.

**Scenario:** The instrument is set up at point A. A calibrated staff or target rod is held at point B. We observe the vertical angle to the top of the staff ($\alpha_1$) and to the bottom of the staff ($\alpha_2$). The length of the staff is known ($L$).

**Diagram:**

```
        Top of Staff (C)
       /|
      / | V1
     /  |
    /   |
   /____|
  A     Horizontal Distance (D)
  |\
  | \ V2
  |  \
  |___\
 Bottom of Staff (D)
```

**Formulas:**

*   $V_1 = D \tan(\alpha_1)$
*   $V_2 = D \tan(\alpha_2)$
*   The difference in vertical rise between the top and bottom of the staff is $V_1 - V_2 = L$.
*   Therefore, $D \tan(\alpha_1) - D \tan(\alpha_2) = L$
*   $D (\tan(\alpha_1) - \tan(\alpha_2)) = L$
*   $D = \frac{L}{\tan(\alpha_1) - \tan(\alpha_2)}$

**Example:**

An instrument is set up at point A. A calibrated staff of length 2.000 m is held vertically at point B. The vertical angle to the top of the staff is +8°20', and to the bottom is +6°15'. Calculate the horizontal distance (D) between A and B.

**Solution:**

*   $D = \frac{L}{\tan(\alpha_1) - \tan(\alpha_2)}$
*   $D = \frac{2.000 \text{ m}}{\tan(8°20') - \tan(6°15')}$
*   $D = \frac{2.000 \text{ m}}{0.14637 - 0.11001}$ (approx. values)
*   $D = \frac{2.000 \text{ m}}{0.03636}$
*   $D \approx 54.99$ m

### 2.2. Determining Elevation (Reduced Level - RL)

Once the horizontal distance (D) is known, the elevation of the sighted point can be calculated.

**Formulas:**

*   **For angle of elevation ($\alpha$):**
    *   $RL_{Point} = HI_{Instrument} + V - HT_{Target}$
    *   $RL_{Point} = HI_{Instrument} + (D \tan(\alpha)) - HT_{Target}$
    *   **Correction:** If the target point is not the ground point at the distant location, and the staff is held to measure to a specific point (e.g., benchmark), then $HT_{Target}$ is the height from the ground at the distant point to the sighted mark. If the staff is held on the ground, and the sighting is to a specific mark on the staff, $HT_{Target}$ is the height of that mark from the ground.

*   **For angle of depression ($\alpha$):**
    *   $RL_{Point} = HI_{Instrument} - V - HT_{Target}$
    *   $RL_{Point} = HI_{Instrument} - (D \tan(\alpha)) - HT_{Target}$
    *   **Note:** When using the angle of depression in the formula $D \tan(\alpha)$, the result $V$ will be positive, but it represents a drop in elevation.

**Example (Continuing from the first distance example):**

An instrument is set up at point A with an $HI_{AB} = 1.500$ m. A vertical angle of +10°30' is observed to a target point C on a vertically held staff at point B, with $HT_C = 1.200$ m. The RL of the instrument station A is 100.000 m. Calculate the RL of point B.

**Solution:**

*   First, calculate the horizontal distance D (as calculated before): $D \approx 1.619$ m.
*   Now, calculate the vertical difference V:
    *   $V = D \tan(\alpha)$
    *   $V = 1.619 \text{ m} \times \tan(10°30')$
    *   $V \approx 1.619 \text{ m} \times 0.18534$
    *   $V \approx 0.300$ m
*   Calculate the RL of point B:
    *   $RL_{B} = HI_{AB} + V - HT_C$
    *   $RL_{B} = 100.000 \text{ m} + 0.300 \text{ m} - 1.200 \text{ m}$
    *   $RL_{B} = 99.100$ m

**Example (Using angle of depression):**

An instrument is set up at point A with an $HI_{AB} = 1.600$ m. A vertical angle of -5°45' is observed to a target point C on a vertically held staff at point B, with $HT_C = 1.500$ m. The RL of the instrument station A is 120.000 m. Calculate the RL of point B.

**Solution:**

*   Calculate the horizontal distance D:
    *   $D = \frac{HI_{AB} - HT_C}{\tan(\alpha)}$
    *   $D = \frac{1.600 \text{ m} - 1.500 \text{ m}}{\tan(-5°45')}$
    *   $D = \frac{0.100 \text{ m}}{-0.10055}$
    *   $D \approx -0.9945$ m. (The negative sign indicates that the target is lower than the instrument, which is expected with an angle of depression. However, for distance, we use the absolute value for calculation, assuming the direction of offset is handled in the coordinates. For simplicity, we'll use the magnitude of the angle for distance calculation in this context, but be mindful of the sign.)
    *   Let's re-calculate D using the magnitude of the angle for clarity in this context:
        *   $D = \frac{0.100 \text{ m}}{\tan(5°45')}$
        *   $D = \frac{0.100 \text{ m}}{0.10055}$
        *   $D \approx 0.9945$ m
*   Calculate the vertical difference V:
    *   $V = D \tan(\alpha)$
    *   $V = 0.9945 \text{ m} \times \tan(-5°45')$
    *   $V \approx 0.9945 \text{ m} \times (-0.10055)$
    *   $V \approx -0.100$ m (The negative sign correctly indicates a drop)
*   Calculate the RL of point B:
    *   $RL_{B} = HI_{AB} + V - HT_C$
    *   $RL_{B} = 120.000 \text{ m} + (-0.100 \text{ m}) - 1.500 \text{ m}$
    *   $RL_{B} = 120.000 \text{ m} - 0.100 \text{ m} - 1.500 \text{ m}$
    *   $RL_{B} = 118.400$ m

## 3. Practical Considerations and Sources of Error

*   **Instrument Height (HI):** Accurate measurement of the instrument height is crucial.
*   **Staff Reading (HT):** Precise reading on the staff is essential. Ensure the staff is held truly vertical.
*   **Vertical Angle Measurement:** The accuracy of the theodolite's vertical circle reading directly impacts the results.
*   **Staff Plumbing:** If the staff is not perfectly vertical, the horizontal distance will be overestimated, and the elevation will be incorrect. A plumb bob can be used with the staff.
*   **Centering and Levelling:** Errors in centering the instrument over the station and levelling it will propagate into the distance and elevation calculations.
*   **Target Identification:** Clearly identifying the correct point on the staff to sight is important.
*   **Atmospheric Refraction:** Significant vertical angles over long distances can be affected by atmospheric refraction, which can cause the apparent vertical angle to be slightly different from the true angle.
*   **Curvature of the Earth:** For very long distances, the curvature of the earth can become significant and may require corrections. However, for typical survey lab exercises, these are usually ignored unless specified.

## 4. Instruments Used

*   **Theodolite/Total Station:** To measure horizontal and vertical angles.
*   **Levelling Staff (or calibrated rod):** To provide a target for observation and measure height of target.
*   **Plumb Bob:** To ensure the staff is held vertically.
*   **Tripod:** To support the instrument.
*   **Measuring Tape:** To measure the height of the instrument (HI).

## 5. Practice Questions and Exercises

**Question 1:**

An instrument is set up at point P. The height of the instrument (HI) is 1.450 m above the datum. A vertical angle of +8°20' is observed to a point on a vertically held staff at station Q. The staff reading at point Q is 1.100 m. Calculate the horizontal distance between P and Q.

**Answer 1:**

*   $D = \frac{HI - Staff Reading}{\tan(\alpha)}$
*   $D = \frac{1.450 \text{ m} - 1.100 \text{ m}}{\tan(8°20')}$
*   $D = \frac{0.350 \text{ m}}{0.14637}$
*   $D \approx 2.391$ m

**Question 2:**

Using the data from Question 1, if the Reduced Level (RL) of station P is 150.000 m, calculate the RL of station Q.

**Answer 2:**

*   First, calculate the horizontal distance D (from Question 1): $D \approx 2.391$ m.
*   Calculate the vertical difference (V):
    *   $V = D \tan(\alpha)$
    *   $V = 2.391 \text{ m} \times \tan(8°20')$
    *   $V \approx 2.391 \text{ m} \times 0.14637$
    *   $V \approx 0.350$ m
*   Calculate the RL of station Q:
    *   $RL_{Q} = HI + V - Staff Reading$
    *   $RL_{Q} = 150.000 \text{ m} + 0.350 \text{ m} - 1.100 \text{ m}$
    *   $RL_{Q} = 149.250$ m

**Question 3:**

An instrument is set up at point X. The HI is 1.550 m. A vertical angle of -6°30' is observed to a point on a vertically held staff at station Y. The staff reading is 1.200 m. The RL of station X is 200.000 m. Calculate the horizontal distance between X and Y, and the RL of station Y.

**Answer 3:**

*   **Horizontal Distance (D):**
    *   $D = \frac{HI - Staff Reading}{\tan(\alpha)}$
    *   $D = \frac{1.550 \text{ m} - 1.200 \text{ m}}{\tan(-6°30')}$
    *   $D = \frac{0.350 \text{ m}}{-0.11396}$
    *   $D \approx -3.071$ m. (We use the absolute value for distance: 3.071 m)
*   **RL of Station Y:**
    *   Calculate the vertical difference (V):
        *   $V = D \tan(\alpha)$
        *   $V = (-3.071 \text{ m}) \times \tan(-6°30')$
        *   $V \approx (-3.071 \text{ m}) \times (-0.11396)$
        *   $V \approx 0.350$ m (This is the magnitude of the drop)
    *   Calculate the RL of station Y:
        *   $RL_{Y} = HI + V - Staff Reading$
        *   $RL_{Y} = 200.000 \text{ m} + (-0.350 \text{ m}) - 1.200 \text{ m}$ (Note: V is negative in the formula as it's a depression)
        *   $RL_{Y} = 200.000 \text{ m} - 0.350 \text{ m} - 1.200 \text{ m}$
        *   $RL_{Y} = 198.450$ m

**Question 4 (Two Setting Method):**

A surveyor uses the two-setting method to determine the horizontal distance between two points, A and B. The calibrated staff length is 3.000 m. The vertical angle to the top of the staff at B is +12°00', and to the bottom is +10°30'. Calculate the horizontal distance between A and B.

**Answer 4:**

*   $D = \frac{L}{\tan(\alpha_1) - \tan(\alpha_2)}$
*   $D = \frac{3.000 \text{ m}}{\tan(12°00') - \tan(10°30')}$
*   $D = \frac{3.000 \text{ m}}{0.21256 - 0.18534}$
*   $D = \frac{3.000 \text{ m}}{0.02722}$
*   $D \approx 110.21$ m

## 6. Important Points to Remember

*   **Sign of Vertical Angle:** An angle of elevation is positive (+), and an angle of depression is negative (-). This sign is crucial for correct elevation calculations.
*   **Staff Held Vertically:** Always ensure the staff is held perfectly vertical. Use a plumb bob if necessary.
*   **Height of Instrument (HI):** Accurately measure the HI from the ground station to the optical centre of the telescope.
*   **Staff Reading (HT):** This is the reading on the staff at the point sighted.
*   **Formulas:** Memorize the basic formulas for horizontal distance and elevation calculation.
*   **Trigonometric Functions:** Ensure your calculator is set to the correct angle unit (degrees or radians) for trigonometric functions.
*   **Two-Setting Method:** Use the two-setting method when accurate distance measurement is critical, especially over significant vertical differences.
*   **Errors:** Be aware of potential sources of error and take steps to minimize them.

This concludes the notes for Tangential Tacheometry (Vertical Angle). Remember to practice these calculations with various scenarios to build proficiency.
