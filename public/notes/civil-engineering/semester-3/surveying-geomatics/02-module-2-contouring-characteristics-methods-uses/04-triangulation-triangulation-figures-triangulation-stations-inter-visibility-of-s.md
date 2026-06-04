---
title: "Triangulation : Triangulation figures, Triangulation stations, Inter visibility of stations, Satellite Stations and reduction to centre."
subject: "SURVEYING & GEOMATICS"
module: "Module 2: Contouring  : Characteristics, methods, uses."
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810778"
status: "completed"
scrapedAt: "2026-05-20T18:42:18.729Z"
---
# SURVEYING & GEOMATICS: Module 2: Contouring

## Topic: Triangulation

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the fundamental principles of triangulation.
*   Identify and describe different triangulation figures.
*   Define and explain the purpose of triangulation stations.
*   Explain the concept of intervisibility of stations and factors affecting it.
*   Understand the necessity and method of using satellite stations (reduction to centre).
*   Perform calculations related to satellite stations and reduction to centre.

---

### 1. Introduction to Triangulation

Triangulation is a surveying method used to determine the positions of points by measuring angles and using trigonometric principles. It's a cornerstone for establishing a network of control points over large areas, especially in areas where direct distance measurement is difficult or impossible.

**Key Concept:** The fundamental principle of triangulation is to divide a large area into a series of connected triangles. By measuring the angles within these triangles and the length of at least one side (a "base line"), the lengths and positions of all other sides and points can be calculated using trigonometry.

**When is Triangulation Used?**

*   Establishing control for large-scale mapping.
*   Geodetic surveys (determining the shape and size of the Earth).
*   Setting out large engineering projects (bridges, dams, tunnels).
*   Monitoring ground deformation.

---

### 2. Triangulation Figures

Triangulation figures are geometric arrangements of triangles that form the network. The efficiency and accuracy of the triangulation scheme depend heavily on the chosen figures.

**Common Triangulation Figures:**

*   **Single Chain of Triangles:**
    *   **Description:** A series of triangles connected end-to-end, forming a single line or chain.
    *   **Advantages:** Simple to plan and execute.
    *   **Disadvantages:** Errors accumulate rapidly along the chain. Less accurate than other figures for extensive networks.
    *   **Example:** Imagine a chain of triangles stretched across a valley.

*   **Double Chain of Triangles:**
    *   **Description:** Two parallel chains of triangles are run, with connecting triangles forming quadrilaterals or braced quadrilaterals.
    *   **Advantages:** Provides stronger geometric strength and allows for error checking through redundant measurements.
    *   **Disadvantages:** More complex to plan and requires more observations.
    *   **Example:** Two parallel chains across a river with diagonal connections.

*   **Braced Quadrilateral:**
    *   **Description:** A quadrilateral with one or both diagonals observed.
    *   **Advantages:** Provides excellent strength and redundancy. Allows for calculation of all sides from a base line.
    *   **Disadvantages:** Requires more observations than a simple triangle.
    *   **Example:** Four points forming a square or rectangle, with one or both lines connecting opposite corners measured.

*   **Central Figure (e.g., Rhombus with two diagonals):**
    *   **Description:** A figure with a central point observed from surrounding points, and often connecting lines between these surrounding points.
    *   **Advantages:** Very strong and accurate, with excellent error distribution.
    *   **Disadvantages:** Most complex to plan and execute, requiring numerous observations.
    *   **Example:** A central observation station from which four surrounding points are sighted, and then the surrounding points are also observed from each other.

**Important Note:** The choice of triangulation figure depends on the required accuracy, the size of the area, the terrain, and the available resources. **Braced quadrilaterals and central figures are generally preferred for high-accuracy work due to their inherent strength and redundancy.**

---

### 3. Triangulation Stations

Triangulation stations are the points or locations from which observations are made. These points are carefully selected and marked on the ground.

**Types of Triangulation Stations:**

*   **Primary Stations:** These are the most important points, forming the main framework of the triangulation. They are established with the highest precision, often using fundamental base lines. Primary stations are typically located on prominent, stable landmarks that offer excellent intervisibility.
*   **Secondary Stations:** These are established to subdivide the large triangles formed by primary stations, increasing the density of control. They are observed from primary stations and may serve as stations for tertiary triangulation.
*   **Tertiary Stations:** These are established from secondary stations to provide a dense network of control points for detailed mapping or specific engineering purposes.

**Requirements for Selecting Triangulation Stations:**

*   **Intervisibility:** Stations must be mutually visible from each other.
*   **Stability:** The ground at the station should be stable and not prone to settlement or movement.
*   **Accessibility:** Stations should be accessible for setting up instruments and performing observations.
*   **Height:** Stations should ideally be elevated to maximize intervisibility over terrain obstacles.
*   **Clear Lines of Sight:** Vegetation or other obstructions must be cleared to ensure unobstructed views.

---

### 4. Intervisibility of Stations

Intervisibility refers to the ability to see one triangulation station directly from another. This is a critical requirement for making angular observations.

**Factors Affecting Intervisibility:**

*   **Curvature of the Earth:** For long distances, the curvature of the Earth causes lines of sight to fall below the horizon.
*   **Refraction:** The bending of light rays as they pass through atmospheric layers can either improve or worsen intervisibility, but it's generally accounted for in precise calculations.
*   **Topography:** Hills, mountains, and other elevated terrain can obstruct lines of sight.
*   **Man-made Structures:** Buildings, towers, and other structures can block visibility.
*   **Vegetation:** Trees, forests, and dense foliage can obscure lines of sight.
*   **Atmospheric Conditions:** Fog, smoke, and dust can reduce visibility.

**Ensuring Intervisibility:**

*   **Station Height:** Placing stations on elevated points (hills, towers) helps overcome curvature and terrain.
*   **Clearing Lines of Sight:** Removing vegetation and obstructions is essential.
*   **Use of Huts or Towers:** In some cases, temporary or permanent observation huts or towers are constructed to raise instruments and observers above obstructions.
*   **Satellite Stations:** If direct intervisibility is impossible, satellite stations can be used (discussed next).

**Important Point:** The distance over which intervisibility is possible is determined by the height of the stations and the curvature of the Earth. For very long distances, the height of the stations becomes increasingly important to overcome the Earth's curvature.

---

### 5. Satellite Stations (Eccentric Stations) and Reduction to Centre

**Purpose:** Satellite stations are used when a required triangulation station cannot be occupied directly due to inaccessibility or when direct intervisibility between the main stations is not possible. They are temporary stations established near the true (main) station from which observations are made.

**What is a Satellite Station?**
A satellite station is a point established near a main triangulation station (also called a geodetic station) from which observations are made. The purpose is to obtain angular measurements to other stations that would have been sighted from the main station.

**Why Use Satellite Stations?**

*   **Inaccessibility:** The true station might be on top of a tall, unstable structure, or in a location where setting up a precise instrument is difficult.
*   **Obstructions:** If the exact location of the main station has an obstruction directly in the line of sight to another essential station.
*   **Improved Geometry:** Sometimes, a satellite station might offer a better geometric configuration for the triangulation scheme.

**Reduction to Centre (RTC):**

This is the process of correcting the angles observed from a satellite station to determine the angles that would have been observed from the true (main) station. This correction is necessary because the satellite station is offset from the true station.

**Key Concepts for Reduction to Centre:**

*   **Main Station (M):** The intended station.
*   **Satellite Station (S):** The actual station occupied.
*   **Offset Distance (d):** The distance between the Main Station (M) and the Satellite Station (S). This distance is measured precisely.
*   **Observed Angle:** The angle measured from the satellite station (S) to two other stations (e.g., ∠ASB).
*   **Corrected Angle:** The angle that would have been measured from the main station (M) (e.g., ∠AMB).

**The Correction:**

The correction applied to an observed angle from a satellite station depends on the relative positions of the satellite station, the main station, and the observed target stations. The correction is generally small and is usually applied to the angles subtended at the satellite station.

**Method of Reduction to Centre:**

1.  **Establish the Satellite Station (S) near the Main Station (M).**
2.  **Precisely measure the offset distance (d) between M and S.** This is typically done using electronic distance measurement (EDM) or precise tape measurement.
3.  **Observe all necessary angles from the satellite station (S).**
4.  **Calculate the correction for each observed angle.**

**Corrections to Observed Angles:**

Let:
*   `a` be the distance from the satellite station (S) to the first target station (A).
*   `b` be the distance from the satellite station (S) to the second target station (B).
*   `d` be the offset distance from the main station (M) to the satellite station (S).
*   `α` be the observed angle ∠ASB.

The correction to the observed angle `α` is given by:

**Correction (c) = (d / a) * sin(α)  (in radians)**  *applied to the angle at A*
**Correction (c) = (d / b) * sin(α)  (in radians)**  *applied to the angle at B*

*Note: The above is a simplified explanation. The actual calculation for the angle at the center (M) involves considering the entire triangle formed by M, S, and the target stations.*

**A more precise and common approach for the angle correction at the center (∠AMB) from observations at S (∠ASB = α):**

The correction `Δα` to the observed angle `α` is given by:

`Δα = (d / sin(α)) * (cos(φ_A) - cos(φ_B))`

Where:
*   `φ_A` is the angle ∠MSA
*   `φ_B` is the angle ∠MSB

**Simpler Approximation for Small Offsets:**

For small offset distances (d) relative to the distances to the observed points (a and b), a simpler correction can be applied. The correction to the observed angle `α` to get the central angle `α'` is approximately:

`α' ≈ α + (d/a)sin(α) + (d/b)sin(α)`

*More precisely, consider the triangle formed by M, S, and a target point P. The angle subtended at M will differ from the angle subtended at S.*

**Practical Calculation Steps for Reduction to Centre:**

1.  **Diagram:** Draw a diagram showing the main station (M), satellite station (S), and at least two target stations (A and B). Mark the offset distance (d) and the observed angle (∠ASB).
2.  **Calculate Side Distances:** From the observations at S, and knowing the angles, calculate the distances SA and SB.
3.  **Calculate Angles at S:** Calculate the angles ∠MSA and ∠MSB. These are the angles between the line MS and the lines SA and SB, respectively.
4.  **Calculate Correction:** Use the formula to calculate the correction for the observed angle ∠ASB.

**Example:**

Let M be the main station and S be the satellite station, with MS = d = 10 meters.
From S, angles are observed to A and B.
Observed angle ∠ASB = 50° 00' 00".
Distance SA = 500 meters.
Distance SB = 600 meters.
Angle ∠MSA = 80° 00' 00".
Angle ∠MSB = 70° 00' 00".

**To find the corrected angle ∠AMB:**

1.  We need to find the angles ∠AMS and ∠BMS.
2.  In triangle AMS, using the sine rule:
    `sin(∠AMS) / SA = sin(∠MSA) / d`
    `sin(∠AMS) / 500 = sin(80°) / 10`
    `sin(∠AMS) = (500 * sin(80°)) / 10 ≈ 49.24`
    This shows an issue with the example values, as sine cannot be greater than 1. Let's re-evaluate the setup for a realistic example.

**Revised Example for Reduction to Centre:**

Main Station: M
Satellite Station: S, offset 10m from M.
Target Stations: A and B.

Observations from S:
*   Distance SA = 1000m
*   Distance SB = 1200m
*   Angle ∠ASB = 45° 00' 00"
*   Angle ∠MSA = 90° 00' 00" (meaning S is directly to the side of M, and A is directly in front of M, forming a right angle at M)
*   Angle ∠MSB = 90° 00' 00" (This implies M, S, and B form a right angle at M, which is unlikely given the setup for angle correction).

Let's use a more typical scenario where the satellite is offset from the main station, and the angles to the targets are measured.

**Scenario:**
Main Station M. Satellite Station S is 10m from M.
From S, we observe:
*   Distance SA = 500m
*   Distance SB = 700m
*   Angle ∠ASB = 30°00'00"
*   Angle ∠MSA = 15°00'00"
*   Angle ∠MSB = 12°00'00"

**Calculation of Corrected Angle ∠AMB:**

We need to find the angles ∠AMS and ∠BMS to calculate the central angle ∠AMB.

In triangle AMS:
We know SA = 500m, SM = 10m, ∠MSA = 15°00'00".
Using the sine rule:
`sin(∠AMS) / SM = sin(∠MSA) / SA`
`sin(∠AMS) / 10 = sin(15°00'00") / 500`
`sin(∠AMS) = (10 * sin(15°00'00")) / 500`
`sin(∠AMS) ≈ (10 * 0.2588) / 500 ≈ 0.005176`
`∠AMS = arcsin(0.005176) ≈ 0° 17' 42"`

Now, in triangle AMS, we can find ∠MAS:
`∠MAS = 180° - ∠MSA - ∠AMS = 180° - 15°00'00" - 0°17'42" = 164° 42' 18"`

In triangle MSB:
We know SB = 700m, SM = 10m, ∠MSB = 12°00'00".
Using the sine rule:
`sin(∠BMS) / SM = sin(∠MSB) / SB`
`sin(∠BMS) / 10 = sin(12°00'00") / 700`
`sin(∠BMS) = (10 * sin(12°00'00")) / 700`
`sin(∠BMS) ≈ (10 * 0.2079) / 700 ≈ 0.002970`
`∠BMS = arcsin(0.002970) ≈ 0° 10' 07"`

Now, the corrected angle ∠AMB can be calculated:
`∠AMB = ∠ASB - ∠AMS - ∠BMS` (This assumes the configuration where S is between the rays MA and MB).
*Or, if M is between the rays SA and SB:*
`∠AMB = ∠ASB + ∠AMS + ∠BMS` (This configuration is less common for satellite stations).

Let's assume the typical case where the satellite station S is offset such that the central angle is the observed angle minus the small angles at S.

`∠AMB = ∠ASB - ∠AMS - ∠BMS`
`∠AMB = 30°00'00" - 0°17'42" - 0°10'07"`
`∠AMB = 29° 32' 11"`

**Important:** The signs of the corrections depend on the geometric arrangement of the stations. A detailed diagram is crucial for correct application. The formula `Δα = (d / sin(α)) * (cos(φ_A) - cos(φ_B))` is more robust as it directly calculates the correction to the observed angle.

**Let's use the formula for correction: `Δα = (d / sin(α)) * (cos(φ_A) - cos(φ_B))`**
Here, `α = ∠ASB = 30°00'00"`.
`φ_A = ∠MSA = 15°00'00"`
`φ_B = ∠MSB = 12°00'00"`
`d = 10m`

`Δα = (10 / sin(30°00'00")) * (cos(15°00'00") - cos(12°00'00"))`
`Δα = (10 / 0.5) * (0.9659 - 0.9781)`
`Δα = 20 * (-0.0122)`
`Δα = -0.244` (in radians)

Convert to degrees and minutes:
`Δα = -0.244 * (180 / π) ≈ -14.00 minutes` or `-0° 14' 00"`

**Corrected Angle ∠AMB = Observed Angle ∠ASB + Δα**
`∠AMB = 30°00'00" + (-0°14'00")`
`∠AMB = 29° 46' 00"`

*Note: The exact formulation and signs can be tricky and depend on the precise orientation of the satellite station relative to the main station and the observed points. Always refer to standard surveying texts for definitive formulas and geometric conventions.*

---

### 6. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of triangulation in surveying?

**Answer:**
The primary purpose of triangulation is to establish a network of control points over large areas by dividing the area into triangles and measuring angles and a base line, allowing for the calculation of distances and positions of other points.

**Question 2:**
List three common triangulation figures and describe one advantage of using a braced quadrilateral.

**Answer:**
Common triangulation figures include:
*   Single chain of triangles
*   Double chain of triangles
*   Braced quadrilateral
*   Central figure (e.g., rhombus with diagonals)

**Advantage of a Braced Quadrilateral:** Provides strong geometric strength and redundancy, allowing for verification of measurements and better distribution of errors.

**Question 3:**
Explain the term "intervisibility of stations" and mention two factors that can obstruct it.

**Answer:**
Intervisibility of stations refers to the ability to directly see one triangulation station from another.
Two factors that can obstruct intervisibility are:
1.  The curvature of the Earth.
2.  Topographical features (hills, mountains).
3.  Vegetation (trees, forests).
4.  Man-made structures.

**Question 4:**
When would a surveyor use a satellite station, and what is the process called to derive the correct angles from such observations?

**Answer:**
A surveyor would use a satellite station when the actual main triangulation station is inaccessible or when there are obstructions to direct lines of sight. The process of deriving the correct angles from observations made at a satellite station is called **Reduction to Centre (RTC)**.

**Question 5 (Calculation):**
A satellite station (S) is established 15 meters from a main station (M). From S, the following observations are made:
*   Distance SA = 800 m
*   Distance SB = 900 m
*   Angle ∠ASB = 40° 00' 00"
*   Angle ∠MSA = 10° 00' 00"
*   Angle ∠MSB = 8° 00' 00"

Calculate the corrected angle ∠AMB using the formula:
`Δα = (d / sin(α)) * (cos(φ_A) - cos(φ_B))`
Where `α` is ∠ASB, `φ_A` is ∠MSA, `φ_B` is ∠MSB, and `d` is the offset distance.

**Answer:**
Given:
*   d = 15 m
*   α = ∠ASB = 40° 00' 00"
*   φ_A = ∠MSA = 10° 00' 00"
*   φ_B = ∠MSB = 8° 00' 00"

Calculate Δα:
`Δα = (15 / sin(40°00'00")) * (cos(10°00'00") - cos(8°00'00"))`
`sin(40°) ≈ 0.6428`
`cos(10°) ≈ 0.9848`
`cos(8°) ≈ 0.9903`

`Δα = (15 / 0.6428) * (0.9848 - 0.9903)`
`Δα = 23.335 * (-0.0055)`
`Δα ≈ -0.1283` (in radians)

Convert Δα to degrees and minutes:
`Δα = -0.1283 * (180 / π) ≈ -7.35 minutes`
`Δα ≈ -0° 07' 21"`

Corrected Angle ∠AMB = ∠ASB + Δα
`∠AMB = 40° 00' 00" + (-0° 07' 21")`
`∠AMB = 39° 52' 39"`

---

### 7. Important Points to Remember

*   **Triangulation** is based on trigonometry, using measured angles and at least one measured side (base line) to determine unknown distances and positions.
*   The strength of a triangulation figure significantly impacts accuracy. **Braced quadrilaterals and central figures are preferred for high accuracy.**
*   **Intervisibility** is paramount. Stations must be mutually visible, and factors like Earth's curvature and topography must be considered.
*   **Satellite stations** are a workaround for inaccessibility or obstructions at the main station.
*   **Reduction to Centre (RTC)** is the essential correction process applied to angles observed from satellite stations to obtain angles that would have been measured from the main station.
*   Accurate measurement of the offset distance (`d`) between the main station and the satellite station is crucial for RTC.
*   Always use a diagram to visualize the geometric relationships when performing RTC calculations.

---
