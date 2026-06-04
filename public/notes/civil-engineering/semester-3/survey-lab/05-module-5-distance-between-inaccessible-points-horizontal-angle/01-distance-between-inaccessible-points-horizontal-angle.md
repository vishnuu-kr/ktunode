---
title: "Distance between inaccessible points (horizontal angle)"
subject: "SURVEY LAB"
module: "Module 5: Distance between inaccessible points (horizontal angle)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810890"
status: "completed"
scrapedAt: "2026-05-20T18:41:56.424Z"
---
# SURVEY LAB: Module 5 - Distance between Inaccessible Points (Horizontal Angle)

This module focuses on determining the distance between two points that cannot be directly measured due to physical obstacles. We will primarily utilize the concept of horizontal angles and trigonometry to achieve this.

## 1. Introduction to Inaccessible Points

**Definition:** Inaccessible points are locations where direct line-of-sight measurement of distance is impossible or impractical. This can be due to:

*   **Natural Obstacles:** Rivers, lakes, dense forests, steep ravines, mountains.
*   **Man-made Obstacles:** Buildings, walls, busy roads, industrial structures.
*   **Safety Concerns:** Hazardous terrain, unstable ground.

**Objective:** To accurately determine the horizontal distance between two inaccessible points (let's call them **A** and **B**) using surveying techniques.

## 2. Key Concepts and Definitions

### 2.1 Triangulation

**Definition:** Triangulation is a surveying method that involves dividing a tract of land into a network of interconnected triangles. By measuring the angles within these triangles and the length of at least one side (a baseline), the lengths of all other sides can be calculated using trigonometry.

### 2.2 Baseline

**Definition:** A baseline is a precisely measured and known distance on the ground. It serves as the fundamental starting point for triangulation surveys. All other distances are derived from the baseline.

### 2.3 Horizontal Angle

**Definition:** A horizontal angle is the angle measured in a horizontal plane between two lines of sight. In this module, horizontal angles will be measured from a known point to the inaccessible points and other reference points.

### 2.4 Trigonometric Principles

The core of this method relies on the sine rule and cosine rule.

*   **Sine Rule:** In any triangle, the ratio of the length of a side to the sine of its opposite angle is constant.
    *   Formula: $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$
    *   Where 'a', 'b', 'c' are side lengths and 'A', 'B', 'C' are their opposite angles.

*   **Cosine Rule:** In any triangle, the square of one side is equal to the sum of the squares of the other two sides minus twice the product of the other two sides and the cosine of the included angle.
    *   Formula: $c^2 = a^2 + b^2 - 2ab \cos C$

### 2.5 Surveying Instruments

*   **Theodolite/Total Station:** Used for precise measurement of horizontal and vertical angles. A total station also measures distances electronically.
*   **Prism/Target:** Placed at points where angles are to be observed.
*   **Tripod:** To provide a stable base for the instrument.
*   **Measuring Tape/EDM (Electronic Distance Measurement):** Used to establish the baseline.

## 3. Methods for Determining Distance between Inaccessible Points

This section will outline common methods employing horizontal angles.

### 3.1 Method 1: Measuring to One Inaccessible Point (Two Station Method)

This method is used when you can establish two known points (stations) from which both inaccessible points can be observed, but direct measurement between the inaccessible points is impossible.

**Scenario:** We want to find the distance between points **A** (inaccessible) and **B** (inaccessible).

**Procedure:**

1.  **Establish Two Known Stations:** Set up your surveying instrument at two accessible points, **P** and **Q**. These points should be well-defined and visible from each other.
2.  **Measure the Baseline:** Accurately measure the distance between **P** and **Q**. This is your baseline ($PQ$).
3.  **Observe Angles from Station P:**
    *   Measure the horizontal angle $\angle QPA$. Let's call this angle $\alpha$.
    *   Measure the horizontal angle $\angle PQA$. Let's call this angle $\beta$.
4.  **Observe Angles from Station Q:**
    *   Measure the horizontal angle $\angle QPB$. Let's call this angle $\gamma$.
    *   Measure the horizontal angle $\angle PQB$. Let's call this angle $\delta$.
5.  **Calculate Angles within Triangles:**
    *   In $\triangle PQA$: The third angle is $\angle PAQ = 180^\circ - (\alpha + \beta)$.
    *   In $\triangle PQB$: The third angle is $\angle PBQ = 180^\circ - (\gamma + \delta)$.
6.  **Calculate Distances using the Sine Rule:**
    *   **From $\triangle PQA$:** Use the sine rule to calculate the distance $PA$ or $QA$.
        *   $\frac{PA}{\sin \beta} = \frac{QA}{\sin \alpha} = \frac{PQ}{\sin \angle PAQ}$
        *   $PA = \frac{PQ \sin \beta}{\sin \angle PAQ}$
        *   $QA = \frac{PQ \sin \alpha}{\sin \angle PAQ}$
    *   **From $\triangle PQB$:** Use the sine rule to calculate the distance $PB$ or $QB$.
        *   $\frac{PB}{\sin \delta} = \frac{QB}{\sin \gamma} = \frac{PQ}{\sin \angle PBQ}$
        *   $PB = \frac{PQ \sin \delta}{\sin \angle PBQ}$
        *   $QB = \frac{PQ \sin \gamma}{\sin \angle PBQ}$
7.  **Determine the Distance AB:**
    *   Now you have two triangles, $\triangle PQA$ and $\triangle PQB$, sharing the base $PQ$. To find the distance $AB$, you need to consider the relative positions of A and B.
    *   **Case 1: A and B are on opposite sides of the baseline PQ.**
        *   The angle $\angle AQB = \angle AQP + \angle BQP = \beta + \delta$.
        *   In $\triangle AQB$, you know $QA$ and $QB$ and the angle $\angle AQB$.
        *   Use the cosine rule to find $AB$:
            *   $AB^2 = QA^2 + QB^2 - 2(QA)(QB) \cos \angle AQB$
    *   **Case 2: A and B are on the same side of the baseline PQ.**
        *   The angle $\angle AQB = |\angle AQP - \angle BQP| = |\beta - \delta|$.
        *   In $\triangle AQB$, you know $QA$ and $QB$ and the angle $\angle AQB$.
        *   Use the cosine rule to find $AB$:
            *   $AB^2 = QA^2 + QB^2 - 2(QA)(QB) \cos \angle AQB$

**Example:**

Suppose the baseline $PQ$ is 100.00 meters.
From P: $\angle QPA = 35^\circ 00'$, $\angle QPB = 50^\circ 00'$
From Q: $\angle PQA = 40^\circ 00'$, $\angle PQB = 45^\circ 00'$

**Calculations:**

*   **In $\triangle PQA$:**
    *   $\angle PAQ = 180^\circ - (35^\circ 00' + 40^\circ 00') = 180^\circ - 75^\circ 00' = 105^\circ 00'$
    *   Using Sine Rule:
        *   $PA = \frac{100.00 \sin 40^\circ 00'}{\sin 105^\circ 00'} = \frac{100.00 \times 0.6428}{0.9659} \approx 66.55$ m
        *   $QA = \frac{100.00 \sin 35^\circ 00'}{\sin 105^\circ 00'} = \frac{100.00 \times 0.5736}{0.9659} \approx 59.39$ m

*   **In $\triangle PQB$:**
    *   $\angle PBQ = 180^\circ - (50^\circ 00' + 45^\circ 00') = 180^\circ - 95^\circ 00' = 85^\circ 00'$
    *   Using Sine Rule:
        *   $PB = \frac{100.00 \sin 45^\circ 00'}{\sin 85^\circ 00'} = \frac{100.00 \times 0.7071}{0.9962} \approx 70.98$ m
        *   $QB = \frac{100.00 \sin 50^\circ 00'}{\sin 85^\circ 00'} = \frac{100.00 \times 0.7660}{0.9962} \approx 76.90$ m

*   **Determine AB:**
    *   Assume A and B are on opposite sides of PQ.
    *   $\angle AQB = \angle AQP + \angle BQP = 40^\circ 00' + 45^\circ 00' = 85^\circ 00'$
    *   In $\triangle AQB$, using Cosine Rule:
        *   $AB^2 = QA^2 + QB^2 - 2(QA)(QB) \cos \angle AQB$
        *   $AB^2 = (59.39)^2 + (76.90)^2 - 2(59.39)(76.90) \cos 85^\circ 00'$
        *   $AB^2 = 3527.18 + 5913.61 - 2(4567.69)(0.0872)$
        *   $AB^2 = 9440.79 - 795.95 \approx 8644.84$
        *   $AB = \sqrt{8644.84} \approx 92.98$ m

### 3.2 Method 2: Measuring from One Station to Both Inaccessible Points and a Third Known Point

This method is used when you can establish one known station from which both inaccessible points can be observed, and you also have a third known point that can be used to help define the geometry.

**Scenario:** We want to find the distance between points **A** (inaccessible) and **B** (inaccessible).

**Procedure:**

1.  **Establish Two Known Stations:** Set up your surveying instrument at two accessible points, **P** and **Q**.
2.  **Measure the Baseline:** Accurately measure the distance between **P** and **Q**. This is your baseline ($PQ$).
3.  **Observe Angles from Station P:**
    *   Measure the horizontal angle $\angle QPA$. Let's call this angle $\alpha$.
    *   Measure the horizontal angle $\angle QPB$. Let's call this angle $\gamma$.
4.  **Observe Angles from Station Q:**
    *   Measure the horizontal angle $\angle PQA$. Let's call this angle $\beta$.
    *   Measure the horizontal angle $\angle PQB$. Let's call this angle $\delta$.
5.  **Calculate Angles within Triangles:**
    *   In $\triangle PQA$: $\angle PAQ = 180^\circ - (\alpha + \beta)$
    *   In $\triangle PQB$: $\angle PBQ = 180^\circ - (\gamma + \delta)$
6.  **Calculate Distances using Sine Rule:**
    *   From $\triangle PQA$: Calculate $PA$ and $QA$.
    *   From $\triangle PQB$: Calculate $PB$ and $QB$.
7.  **Determine the Distance AB:** This is similar to step 7 in Method 1. You will form a triangle with sides $QA$, $QB$ (or $PA$, $PB$) and the angle between them.

**Note:** Method 2 is essentially the same underlying principle as Method 1, just described slightly differently depending on how the angles are grouped. The crucial part is establishing a known baseline and observing angles from its endpoints to the inaccessible points.

### 3.3 Method 3: Measuring from One Station to Both Inaccessible Points and Direct Measurement of an Angle Between Inaccessible Points (If Possible)

This is a more direct method if you can set up at one accessible point and observe angles to both inaccessible points and an intermediate point.

**Scenario:** We want to find the distance between points **A** (inaccessible) and **B** (inaccessible).

**Procedure:**

1.  **Establish One Known Station:** Set up your surveying instrument at an accessible point **P**.
2.  **Establish a Second Known Station (and Baseline):** Set up a target at an accessible point **Q**, such that both **A** and **B** are visible from **P**, and **Q** is also visible from **P**. Measure the baseline $PQ$.
3.  **Observe Angles from Station P:**
    *   Measure the horizontal angle $\angle QPA$. Let's call this angle $\alpha$.
    *   Measure the horizontal angle $\angle QPB$. Let's call this angle $\gamma$.
    *   Measure the horizontal angle $\angle APB$. Let's call this angle $\theta$.
    *   **Important Check:** $\theta = |\alpha - \gamma|$ (if A and B are on the same side of PQ) or $\theta = \alpha + \gamma$ (if A and B are on opposite sides of PQ).
4.  **Observe Angles from Station Q:**
    *   Measure the horizontal angle $\angle PQA$. Let's call this angle $\beta$.
    *   Measure the horizontal angle $\angle PQB$. Let's call this angle $\delta$.
5.  **Calculate Angles within Triangles:**
    *   In $\triangle PQA$: $\angle PAQ = 180^\circ - (\alpha + \beta)$.
    *   In $\triangle PQB$: $\angle PBQ = 180^\circ - (\gamma + \delta)$.
6.  **Calculate Distances using Sine Rule:**
    *   From $\triangle PQA$: Calculate $PA$ and $QA$.
    *   From $\triangle PQB$: Calculate $PB$ and $QB$.
7.  **Determine the Distance AB:**
    *   Now you have the lengths $PA$ and $PB$, and the angle $\angle APB$ between them.
    *   Use the cosine rule in $\triangle PAB$:
        *   $AB^2 = PA^2 + PB^2 - 2(PA)(PB) \cos \angle APB$

**Example:**

Suppose baseline $PQ = 150.00$ m.
From P: $\angle QPA = 40^\circ 30'$, $\angle QPB = 60^\circ 00'$, $\angle APB = 19^\circ 30'$ (Note: $60^\circ 00' - 40^\circ 30' = 19^\circ 30'$)
From Q: $\angle PQA = 55^\circ 00'$, $\angle PQB = 65^\circ 00'$

**Calculations:**

*   **In $\triangle PQA$:**
    *   $\angle PAQ = 180^\circ - (40^\circ 30' + 55^\circ 00') = 180^\circ - 95^\circ 30' = 84^\circ 30'$
    *   Using Sine Rule:
        *   $PA = \frac{150.00 \sin 55^\circ 00'}{\sin 84^\circ 30'} = \frac{150.00 \times 0.8192}{0.9954} \approx 123.51$ m
        *   $QA = \frac{150.00 \sin 40^\circ 30'}{\sin 84^\circ 30'} = \frac{150.00 \times 0.6494}{0.9954} \approx 97.78$ m

*   **In $\triangle PQB$:**
    *   $\angle PBQ = 180^\circ - (60^\circ 00' + 65^\circ 00') = 180^\circ - 125^\circ 00' = 55^\circ 00'$
    *   Using Sine Rule:
        *   $PB = \frac{150.00 \sin 65^\circ 00'}{\sin 55^\circ 00'} = \frac{150.00 \times 0.9063}{0.8192} \approx 166.05$ m
        *   $QB = \frac{150.00 \sin 60^\circ 00'}{\sin 55^\circ 00'} = \frac{150.00 \times 0.8660}{0.8192} \approx 158.10$ m

*   **Determine AB:**
    *   In $\triangle PAB$, using Cosine Rule:
        *   $AB^2 = PA^2 + PB^2 - 2(PA)(PB) \cos \angle APB$
        *   $AB^2 = (123.51)^2 + (166.05)^2 - 2(123.51)(166.05) \cos 19^\circ 30'$
        *   $AB^2 = 15254.71 + 27573.00 - 2(20507.86)(0.9426)$
        *   $AB^2 = 42827.71 - 38510.54 \approx 4317.17$
        *   $AB = \sqrt{4317.17} \approx 65.71$ m

## 4. Important Points to Remember

*   **Accurate Baseline Measurement:** The accuracy of the entire survey depends on the precise measurement of the baseline.
*   **Precise Angle Measurements:** Use a calibrated theodolite or total station. Measure angles to at least one decimal place for seconds or to three decimal places for minutes.
*   **Instrument Setup:** Ensure the instrument is perfectly leveled and centered over the station points.
*   **Target Placement:** Place targets precisely over the inaccessible points.
*   **Double-Checking:** Repeat observations or use different methods to verify results.
*   **Geometrical Conditions:** Ensure that the triangles formed are not too "flabby" (i.e., having very small angles). Triangles with angles close to 90 degrees are generally stronger for calculations. Avoid angles less than 30 degrees or greater than 150 degrees where possible.
*   **Scale of the Survey:** The size of the baseline and the accuracy of the angle measurements will determine the scale and accuracy of the final distance.

## 5. Practice Questions

1.  **Question:** You are at station P and want to determine the distance to an inaccessible point A. You set up a target at station Q, and the baseline PQ measures 250.00 meters. You measure the following horizontal angles: $\angle QPA = 42^\circ 30'$ and $\angle PQA = 58^\circ 15'$. Calculate the distance PA.

    **Answer:**
    *   In $\triangle PQA$: $\angle PAQ = 180^\circ - (42^\circ 30' + 58^\circ 15') = 180^\circ - 100^\circ 45' = 79^\circ 15'$
    *   Using Sine Rule:
        *   $PA = \frac{PQ \sin \angle PQA}{\sin \angle PAQ} = \frac{250.00 \sin 58^\circ 15'}{\sin 79^\circ 15'} = \frac{250.00 \times 0.8504}{0.9825} \approx 216.39$ m

2.  **Question:** Two inaccessible points, A and B, are to be located. You establish two stations, P and Q, with a baseline PQ of 300.00 meters. The following horizontal angles are measured:
    *   From P: $\angle QPA = 35^\circ 00'$, $\angle QPB = 55^\circ 00'$
    *   From Q: $\angle PQA = 45^\circ 00'$, $\angle PQB = 40^\circ 00'$
    Assume A and B are on opposite sides of the baseline PQ. Calculate the distance AB.

    **Answer:**
    *   **Calculate QA:**
        *   In $\triangle PQA$: $\angle PAQ = 180^\circ - (35^\circ 00' + 45^\circ 00') = 100^\circ 00'$
        *   $QA = \frac{PQ \sin \angle QPA}{\sin \angle PAQ} = \frac{300.00 \sin 35^\circ 00'}{\sin 100^\circ 00'} = \frac{300.00 \times 0.5736}{0.9848} \approx 174.50$ m
    *   **Calculate QB:**
        *   In $\triangle PQB$: $\angle PBQ = 180^\circ - (55^\circ 00' + 40^\circ 00') = 85^\circ 00'$
        *   $QB = \frac{PQ \sin \angle QPB}{\sin \angle PBQ} = \frac{300.00 \sin 55^\circ 00'}{\sin 85^\circ 00'} = \frac{300.00 \times 0.8192}{0.9962} \approx 246.86$ m
    *   **Calculate AB:**
        *   $\angle AQB = \angle AQP + \angle BQP = 45^\circ 00' + 40^\circ 00' = 85^\circ 00'$
        *   In $\triangle AQB$, using Cosine Rule:
            *   $AB^2 = QA^2 + QB^2 - 2(QA)(QB) \cos \angle AQB$
            *   $AB^2 = (174.50)^2 + (246.86)^2 - 2(174.50)(246.86) \cos 85^\circ 00'$
            *   $AB^2 = 30450.25 + 60940.80 - 2(43088.37)(0.0872)$
            *   $AB^2 = 91391.05 - 7517.46 \approx 83873.59$
            *   $AB = \sqrt{83873.59} \approx 289.61$ m

3.  **Question:** From a single accessible station P, you observe two inaccessible points A and B. You also establish a baseline PQ of 200.00 meters. The measured horizontal angles are:
    *   From P: $\angle QPA = 30^\circ 00'$, $\angle QPB = 50^\circ 00'$, $\angle APB = 20^\circ 00'$
    *   From Q: $\angle PQA = 60^\circ 00'$, $\angle PQB = 45^\circ 00'$
    Calculate the distance AB.

    **Answer:**
    *   **Calculate PA:**
        *   In $\triangle PQA$: $\angle PAQ = 180^\circ - (30^\circ 00' + 60^\circ 00') = 90^\circ 00'$
        *   $PA = \frac{PQ \sin \angle PQA}{\sin \angle PAQ} = \frac{200.00 \sin 60^\circ 00'}{\sin 90^\circ 00'} = \frac{200.00 \times 0.8660}{1.0000} \approx 173.21$ m
    *   **Calculate PB:**
        *   In $\triangle PQB$: $\angle PBQ = 180^\circ - (50^\circ 00' + 45^\circ 00') = 85^\circ 00'$
        *   $PB = \frac{PQ \sin \angle PQB}{\sin \angle PBQ} = \frac{200.00 \sin 45^\circ 00'}{\sin 85^\circ 00'} = \frac{200.00 \times 0.7071}{0.9962} \approx 141.97$ m
    *   **Calculate AB:**
        *   In $\triangle PAB$, using Cosine Rule with the given $\angle APB = 20^\circ 00'$:
            *   $AB^2 = PA^2 + PB^2 - 2(PA)(PB) \cos \angle APB$
            *   $AB^2 = (173.21)^2 + (141.97)^2 - 2(173.21)(141.97) \cos 20^\circ 00'$
            *   $AB^2 = 29999.68 + 20155.24 - 2(24576.19)(0.9397)$
            *   $AB^2 = 50154.92 - 46174.94 \approx 3980.00$
            *   $AB = \sqrt{3980.00} \approx 63.09$ m

This concludes Module 5. Remember to practice these calculations to become proficient in determining distances between inaccessible points using horizontal angles.
