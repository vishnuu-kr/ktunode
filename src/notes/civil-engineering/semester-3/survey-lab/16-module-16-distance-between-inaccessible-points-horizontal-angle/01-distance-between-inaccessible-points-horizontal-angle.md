---
title: "Distance between inaccessible points (horizontal angle)"
subject: "SURVEY LAB"
module: "Module 16: Distance between inaccessible points (horizontal angle)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba8108ab"
status: "completed"
scrapedAt: "2026-05-20T18:42:07.701Z"
---
# Survey Lab: Module 16 - Distance Between Inaccessible Points (Horizontal Angle)

## 1. Introduction to Measuring Distances to Inaccessible Points

In surveying, we often encounter situations where direct measurement of distance is impossible due to physical obstructions. These are called **inaccessible points**. This module focuses on techniques to determine the distance to such points using **horizontal angles** measured with surveying instruments.

**Key Concept:** When direct measurement is not feasible, we employ indirect methods that rely on trigonometric principles and angular observations.

## 2. Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the concept of inaccessible points in surveying.
*   Identify and apply various methods for determining distances to inaccessible points using horizontal angles.
*   Perform calculations to determine the unknown distance.
*   Understand the importance of accurate angle measurements for achieving reliable results.
*   Analyze potential sources of error and their impact on the calculated distances.

## 3. Key Concepts and Definitions

### 3.1 Inaccessible Points
A point whose distance cannot be directly measured due to physical obstructions such as rivers, lakes, buildings, cliffs, or extreme terrain.

### 3.2 Horizontal Angle
The angle between two lines in a horizontal plane, measured using a theodolite or total station. These angles are crucial for establishing the geometric relationships between known and unknown points.

### 3.3 Traverse
A series of connected straight lines whose lengths and directions are measured. Traverses are fundamental to surveying and can be used to establish control points from which inaccessible distances can be determined.

### 3.4 Triangulation
A surveying method that divides a large area into a network of triangles. The angles of these triangles are measured, and by knowing the length of one side (the baseline), the lengths of all other sides can be calculated using trigonometry.

### 3.5 Baseline
A precisely measured line of known length used as a starting point for triangulation or other indirect measurement methods.

### 3.6 Sine Rule
A fundamental trigonometric rule that states:
$$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} $$
Where $a, b, c$ are the lengths of the sides of a triangle, and $A, B, C$ are the angles opposite those sides, respectively. This rule is extensively used in calculating unknown distances in surveying.

### 3.7 Tangent Rule (or Law of Tangents)
Another trigonometric rule that can be used for solving triangles, though the Sine Rule is more commonly applied in these scenarios:
$$ \frac{a-b}{a+b} = \frac{\tan \frac{1}{2}(A-B)}{\tan \frac{1}{2}(A+B)} $$

## 4. Methods for Determining Distances to Inaccessible Points (Horizontal Angle)

The primary methods involve setting up survey stations and measuring horizontal angles to the inaccessible point and other known points.

### 4.1 Method 1: Two Known Points and One Inaccessible Point

This is a common scenario where you have two known points (A and B) and you want to find the distance to an inaccessible point (C).

**Procedure:**

1.  **Establish two known stations (A and B):** These points should have precisely known coordinates or a precisely measured baseline between them.
2.  **Set up the instrument at Station A:**
    *   Sight Station B and establish it as the backsight.
    *   Measure the horizontal angle from Station A to the inaccessible point C (angle BAC).
3.  **Set up the instrument at Station B:**
    *   Sight Station A and establish it as the backsight.
    *   Measure the horizontal angle from Station B to the inaccessible point C (angle ABC).
4.  **Measure the distance AB:** This is the baseline, and its accuracy is critical.

**Calculations:**

*   You have a triangle ABC.
*   You know the length of side AB.
*   You have measured angles BAC and ABC.
*   You can calculate angle ACB: $ \text{Angle ACB} = 180^\circ - (\text{Angle BAC} + \text{Angle ABC}) $.
*   Now you have all angles and one side of triangle ABC. Using the Sine Rule, you can calculate the distances AC and BC.

    *   To find AC: $ \frac{AC}{\sin(\text{Angle ABC})} = \frac{AB}{\sin(\text{Angle ACB})} $
        $ AC = AB \times \frac{\sin(\text{Angle ABC})}{\sin(\text{Angle ACB})} $
    *   To find BC: $ \frac{BC}{\sin(\text{Angle BAC})} = \frac{AB}{\sin(\text{Angle ACB})} $
        $ BC = AB \times \frac{\sin(\text{Angle BAC})}{\sin(\text{Angle ACB})} $

**Example:**

Let's say the distance between known points A and B is 100.00 meters.
From Station A, the horizontal angle to point C is observed as $35^\circ 15'00''$.
From Station B, the horizontal angle to point C is observed as $48^\circ 30'00''$.

**Solution:**

1.  **Calculate Angle ACB:**
    $ \text{Angle ACB} = 180^\circ - (35^\circ 15'00'' + 48^\circ 30'00'') $
    $ \text{Angle ACB} = 180^\circ - 83^\circ 45'00'' $
    $ \text{Angle ACB} = 96^\circ 15'00'' $

2.  **Calculate AC using the Sine Rule:**
    $ AC = 100.00 \text{ m} \times \frac{\sin(48^\circ 30'00'')}{\sin(96^\circ 15'00'')} $
    $ AC = 100.00 \text{ m} \times \frac{0.7490}{0.9937} $ (approximate values for sin)
    $ AC \approx 75.37 \text{ meters} $

3.  **Calculate BC using the Sine Rule:**
    $ BC = 100.00 \text{ m} \times \frac{\sin(35^\circ 15'00'')}{\sin(96^\circ 15'00'')} $
    $ BC = 100.00 \text{ m} \times \frac{0.5773}{0.9937} $ (approximate values for sin)
    $ BC \approx 58.09 \text{ meters} $

### 4.2 Method 2: One Known Point and Two Known Directions to the Inaccessible Point

This method is useful when you can establish one known point (A) and have two lines of sight from that point, but you cannot establish a second known point at a suitable distance.

**Procedure:**

1.  **Establish one known station (A):** This point has known coordinates.
2.  **Set up the instrument at Station A:**
    *   Sight a reference point (e.g., North or a known object) to establish the orientation.
    *   Measure the horizontal angle to a second known point (B).
    *   Measure the horizontal angle to the inaccessible point (C).
3.  **Measure the distance AB:** This is a known distance and serves as a baseline.
4.  **Measure the horizontal angle BAC:** This is the angle between AB and AC.

**Calculations:**

*   You have a triangle ABC.
*   You know the length of side AB.
*   You have measured the angle BAC.
*   You need to find angle ABC or ACB to use the Sine Rule. This usually requires additional information or measurements from another known point if available.

**A More Practical Variation:** If you have one known point (A) and can establish a baseline (AB) of known length, and then measure angles from both A and B to the inaccessible point C, it reverts back to Method 1.

**If you only have one known point (A) and can't establish a second point readily, you might need to use a different approach, perhaps involving a series of measurements to intermediate points that eventually lead to the inaccessible point, or using trilateration (distance measurements only) or resection techniques if the context allows.**

**Let's reframe Method 2 to be more distinct and commonly used:**

### 4.2 Method 2 (Revised): Measuring to an Inaccessible Point from a Single Known Point with a Baseline and a Third Station

This method involves setting up at a known point (A), establishing a baseline (AB), and then setting up at another point (B) to form a triangle.

**Procedure:**

1.  **Establish a known point (A).**
2.  **Set up the instrument at Station A:**
    *   Measure the horizontal angle to a reference point (e.g., North).
    *   Measure the horizontal angle to the inaccessible point (C). Let this be $\alpha$.
3.  **Establish a second point (B) at a known distance AB:** This baseline can be measured directly if possible, or established through other survey methods.
4.  **Set up the instrument at Station B:**
    *   Measure the horizontal angle to Station A.
    *   Measure the horizontal angle to the inaccessible point (C). Let this be $\beta$.

**Calculations:**

*   This is essentially the same as Method 1. You have a triangle ABC, known side AB, and measured angles at A and B. The calculations are identical to Method 1.

**Important Note:** The core principle for using horizontal angles to find distances to inaccessible points is **forming a triangle** where at least one side is known and enough angles are measured to solve the triangle.

### 4.3 Method 3: Using a Known Point and Intersecting Lines of Sight (Resection-like Principle)

This method is useful when you can see the inaccessible point from a known point, but you don't have a convenient baseline. Instead, you rely on intersecting lines of sight.

**Procedure:**

1.  **Establish a known point (A) with known coordinates.**
2.  **Set up the instrument at Station A:**
    *   Measure the horizontal angle to the inaccessible point (C). Let this be $\alpha$.
3.  **Establish a second known point (B) with known coordinates, or a point that can be used to establish a baseline.**
4.  **Set up the instrument at Station B:**
    *   Measure the horizontal angle to the inaccessible point (C). Let this be $\beta$.
5.  **Measure the horizontal angle between Stations A and B (angle BOA or AOB).** This is often part of a larger traverse.

**Calculations:**

*   You have a triangle formed by Stations A, B, and the inaccessible point C.
*   You know the coordinates of A and B, so you can calculate the distance AB and its azimuth.
*   You have measured the angles at A and B to C.
*   This again leads to solving triangle ABC using the Sine Rule as in Method 1.

**Key Takeaway:** The common thread across these methods is the formation of a triangle where we can leverage known distances and measured angles to determine unknown distances. The challenge lies in establishing the initial known points and accurately measuring the angles.

## 5. Importance of Accurate Angle Measurements

The accuracy of the calculated distance is highly sensitive to the precision of the horizontal angle measurements.

*   **Small errors in angle measurement can lead to significant errors in distance, especially when the angles are very small or very close to $90^\circ$.**
*   **Instrumental errors:** Calibration, centering, and leveling errors.
*   **Observational errors:** Parallax, bisection errors, reading errors.
*   **Atmospheric refraction:** Can bend light rays, affecting angle readings.
*   **Target definition:** The point being sighted must be clearly defined.

**Best Practice:**
*   Use precise surveying instruments (theodolites, total stations).
*   Employ techniques like face left/face right measurements to average out instrumental errors.
*   Take multiple readings and check for consistency.
*   Ensure proper setup (centering and leveling) of the instrument.

## 6. Sources of Error and Mitigation

| Source of Error             | Impact on Distance Calculation                               | Mitigation Strategies                                                                                                                                                                                                |
| :-------------------------- | :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Instrumental Errors**     |                                                              |                                                                                                                                                                                                                      |
| - Calibration Error         | Systematic error in all readings                             | Regular calibration of instruments.                                                                                                                                                                                  |
| - Centering Error           | Affects angles, especially at longer distances               | Precise centering of the instrument over the station mark. Use optical plummets or laser plummets.                                                                                                                   |
| - Leveling Error            | Affects horizontal angles if the instrument is not level     | Accurate leveling of the instrument using plate levels and tribrachs.                                                                                                                                                |
| **Observational Errors**    |                                                              |                                                                                                                                                                                                                      |
| - Bisection Error           | Inaccurate sighting of the target center                     | Practice in sighting, use clear targets, ensure good lighting.                                                                                                                                                       |
| - Parallax Error            | Apparent shift of the image due to observer's eye movement | Ensure the image is sharply focused and the crosshairs are in the same focal plane as the image.                                                                                                                   |
| - Reading Error             | Incorrect reading of the angle on the instrument             | Practice in reading verniers or digital displays, double-checking readings.                                                                                                                                        |
| **Environmental Factors**   |                                                              |                                                                                                                                                                                                                      |
| - Atmospheric Refraction    | Bending of light rays, causing apparent vertical shifts      | Avoid observations during extreme temperature gradients. Consider corrections for refraction if high accuracy is needed.                                                                                               |
| - Wind                       | Causes instrument to vibrate                                 | Shield the instrument from wind, use sturdy tripods, avoid observations in high winds.                                                                                                                               |
| **Baseline Measurement**    |                                                              |                                                                                                                                                                                                                      |
| - Length of Baseline        | Directly impacts the calculated distance                     | Use calibrated measuring tapes, electronic distance measurement (EDM) for high accuracy, ensure baseline is measured with sufficient precision for the required output accuracy.                                  |
| - Position of Baseline      | Affects angles                                               | Ensure the baseline connects the observation stations in a geometrically sound way for the intended calculation method.                                                                                              |
| **Triangle Geometry**       |                                                              |                                                                                                                                                                                                                      |
| - Acute Angles              | Can lead to instability in calculations                      | If possible, choose observation points that create well-conditioned triangles (angles not too acute or obtuse).                                                                                                      |
| - Small Angles at Base      | Large errors in computed distances from the base             | Ensure the baseline is sufficiently long relative to the distance to the inaccessible point.                                                                                                                         |

## 7. Practice Questions and Exercises

**Question 1:**

From two points A and B, separated by a distance of 150.00 meters, an inaccessible point C is observed. The horizontal angle BAC is measured to be $40^\circ 20'30''$ and the horizontal angle ABC is measured to be $55^\circ 10'00''$. Calculate the distances AC and BC.

**Answer 1:**

1.  **Calculate Angle ACB:**
    $ \text{Angle ACB} = 180^\circ - (40^\circ 20'30'' + 55^\circ 10'00'') $
    $ \text{Angle ACB} = 180^\circ - 95^\circ 30'30'' $
    $ \text{Angle ACB} = 84^\circ 29'30'' $

2.  **Calculate AC using Sine Rule:**
    $ AC = 150.00 \text{ m} \times \frac{\sin(55^\circ 10'00'')}{\sin(84^\circ 29'30'')} $
    $ AC = 150.00 \text{ m} \times \frac{0.8196}{0.9968} $ (approximate sin values)
    $ AC \approx 123.42 \text{ meters} $

3.  **Calculate BC using Sine Rule:**
    $ BC = 150.00 \text{ m} \times \frac{\sin(40^\circ 20'30'')}{\sin(84^\circ 29'30'')} $
    $ BC = 150.00 \text{ m} \times \frac{0.6477}{0.9968} $ (approximate sin values)
    $ BC \approx 97.31 \text{ meters} $

**Question 2:**

A surveyor establishes a baseline AB of 200.00 meters. From point A, the horizontal angle to an inaccessible point C is $62^\circ 15'45''$. From point B, the horizontal angle to point C is $70^\circ 05'20''$. What are the distances AC and BC?

**Answer 2:**

1.  **Calculate Angle ACB:**
    $ \text{Angle ACB} = 180^\circ - (62^\circ 15'45'' + 70^\circ 05'20'') $
    $ \text{Angle ACB} = 180^\circ - 132^\circ 21'05'' $
    $ \text{Angle ACB} = 47^\circ 38'55'' $

2.  **Calculate AC using Sine Rule:**
    $ AC = 200.00 \text{ m} \times \frac{\sin(70^\circ 05'20'')}{\sin(47^\circ 38'55'')} $
    $ AC = 200.00 \text{ m} \times \frac{0.9399}{0.7392} $ (approximate sin values)
    $ AC \approx 254.28 \text{ meters} $

3.  **Calculate BC using Sine Rule:**
    $ BC = 200.00 \text{ m} \times \frac{\sin(62^\circ 15'45'')}{\sin(47^\circ 38'55'')} $
    $ BC = 200.00 \text{ m} \times \frac{0.8850}{0.7392} $ (approximate sin values)
    $ BC \approx 239.44 \text{ meters} $

**Exercise 1:**

Consider a scenario where you are standing at point P and want to find the distance to a building corner Q. Due to a river, you cannot directly measure to Q. You set up a traverse and establish two points, A and B, with a measured distance of 80.00 meters between them. You then measure the following horizontal angles:

*   Angle PAB = $55^\circ 30'00''$
*   Angle ABP = $65^\circ 00'00''$
*   Angle PAQ = $75^\circ 45'00''$
*   Angle BAQ = $30^\circ 15'00''$

**Calculate the distance PQ.**

**Hint:** You'll need to calculate the distance AP first using triangle PAB, and then use that distance and angles related to A to find PQ in triangle PAQ.

**Answer to Exercise 1:**

1.  **Solve Triangle PAB for distance AP:**
    *   Angle APB = $180^\circ - (55^\circ 30'00'' + 65^\circ 00'00'') = 180^\circ - 120^\circ 30'00'' = 59^\circ 30'00''$
    *   Using Sine Rule in triangle PAB:
        $ AP = AB \times \frac{\sin(\text{Angle ABP})}{\sin(\text{Angle APB})} $
        $ AP = 80.00 \text{ m} \times \frac{\sin(65^\circ 00'00'')}{\sin(59^\circ 30'00'')} $
        $ AP = 80.00 \text{ m} \times \frac{0.9063}{0.8616} $
        $ AP \approx 84.13 \text{ meters} $

2.  **Solve Triangle PAQ for distance PQ:**
    *   We know AP = 84.13 m.
    *   We know Angle PAQ = $75^\circ 45'00''$.
    *   We need Angle AQP or Angle APQ to use the Sine Rule.
    *   Angle APQ = Angle APB + Angle BPQ. We don't know Angle BPQ directly.
    *   However, we are given Angle BAQ = $30^\circ 15'00''$. We can find Angle PAB and Angle BAQ to get Angle PAB - Angle BAQ if they are in the same direction, or PAB + BAQ if they are in different directions.
    *   Let's assume the angles are measured such that A is the vertex.
    *   Angle PAB = $55^\circ 30'00''$
    *   Angle BAQ = $30^\circ 15'00''$
    *   If Q is to the "right" of AP, then Angle PAQ = $75^\circ 45'00''$.
    *   The angles around point A are PAB, BAQ, and PAQ.
    *   It seems the question implies that Point P is the *same* as Point B in the first measurement, or there is a misunderstanding in the setup description.

    **Let's re-interpret the question for clarity:**

    **Revised Exercise 1:**

    From two points A and B, separated by a distance of 80.00 meters, an inaccessible point Q is observed.
    The horizontal angle BAQ is measured to be $30^\circ 15'00''$.
    The horizontal angle ABQ is measured to be $65^\circ 00'00''$.
    Calculate the distance BQ and AQ.

    **Revised Answer to Exercise 1:**

    1.  **Calculate Angle AQB:**
        $ \text{Angle AQB} = 180^\circ - (30^\circ 15'00'' + 65^\circ 00'00'') $
        $ \text{Angle AQB} = 180^\circ - 95^\circ 15'00'' $
        $ \text{Angle AQB} = 84^\circ 45'00'' $

    2.  **Calculate BQ using Sine Rule:**
        $ BQ = AB \times \frac{\sin(\text{Angle BAQ})}{\sin(\text{Angle AQB})} $
        $ BQ = 80.00 \text{ m} \times \frac{\sin(30^\circ 15'00'')}{\sin(84^\circ 45'00'')} $
        $ BQ = 80.00 \text{ m} \times \frac{0.5064}{0.9961} $
        $ BQ \approx 40.67 \text{ meters} $

    3.  **Calculate AQ using Sine Rule:**
        $ AQ = AB \times \frac{\sin(\text{Angle ABQ})}{\sin(\text{Angle AQB})} $
        $ AQ = 80.00 \text{ m} \times \frac{\sin(65^\circ 00'00'')}{\sin(84^\circ 45'00'')} $
        $ AQ = 80.00 \text{ m} \times \frac{0.9063}{0.9961} $
        $ AQ \approx 72.77 \text{ meters} $

## 8. Important Points to Remember

*   **Accuracy is paramount:** The accuracy of your computed distance depends directly on the accuracy of your baseline measurement and your horizontal angle observations.
*   **Triangle geometry matters:** Aim for well-conditioned triangles (avoiding very small or very large angles) to minimize error propagation.
*   **Sine Rule is your friend:** It's the primary tool for solving triangles when you know two angles and one side, or two sides and one angle.
*   **Systematic vs. Random Errors:** Understand the difference and how to mitigate them. Systematic errors can be corrected or minimized through proper procedure, while random errors are reduced by taking multiple measurements.
*   **Visualize the problem:** Draw a sketch of the situation. This helps in identifying the triangle, the knowns, and the unknowns.
*   **Units:** Ensure consistent use of units (degrees/minutes/seconds for angles, meters for distances).

This module provides a foundational understanding of how to measure distances to inaccessible points using horizontal angles. In practice, this is a crucial skill in various surveying applications, from land surveying to construction and engineering projects.
