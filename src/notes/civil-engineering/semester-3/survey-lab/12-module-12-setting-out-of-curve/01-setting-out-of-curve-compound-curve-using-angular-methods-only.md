---
title: "Setting out of curve - Compound curve using angular methods only"
subject: "SURVEY LAB"
module: "Module 12: Setting out of curve "
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba8108a0"
status: "completed"
scrapedAt: "2026-05-20T18:42:02.979Z"
---
# SURVEY LAB: Module 12 - Setting Out of Curves

## Topic: Setting Out of Curve - Compound Curve using Angular Methods Only

### 1. Introduction to Compound Curves

**What is a Compound Curve?**

A compound curve is a combination of two or more simple curves of different radii, joined together and turning in the same direction. The point where the first curve ends and the second curve begins is called the **Point of Compound Curvature (PCC)**.

**Why Use Compound Curves?**

*   **Topographical Constraints:** To navigate around obstacles or follow the natural terrain.
*   **Traffic Requirements:** To provide smoother transitions for traffic, especially in urban areas or where there are different speed limits on different sections.
*   **Aesthetic Considerations:** To create more graceful and visually appealing alignments.

**Key Terminology:**

*   **First Simple Curve:** The initial curve in the compound curve.
*   **Second Simple Curve:** The subsequent curve following the first.
*   **Point of Compound Curvature (PCC):** The junction point between the two simple curves. It is tangent to both curves.
*   **Point of Tangency (PT):** The end of the second simple curve.
*   **Point of Intersection (PI):** The intersection of the tangents of the first and second curves (extended).
*   **Principal Point of Intersection (PPI) or Common Point of Intersection (PI):** The point where the initial tangent and the final tangent of the compound curve intersect.
*   **Tangent Lengths (T1 and T2):** The length of the tangent from the PI to the start of the curve (TS) and from the end of the curve (PT) to the PI, respectively, for each simple curve.
*   **Deflection Angles:** The angle between the forward extension of the tangent and the chord to a point on the curve.
*   **Intersection Angle (Δ):** The total change in direction of the alignment.
*   **Intersection Angles of Simple Curves (Δ1 and Δ2):** The deflection angles subtended by the arcs of the first and second simple curves, respectively. Note that for a compound curve, Δ = Δ1 + Δ2.
*   **Radii of Curves (R1 and R2):** The radii of the first and second simple curves, respectively.
*   **Lengths of Curves (L1 and L2):** The arc lengths of the first and second simple curves.
*   **Long Chords (LC1 and LC2):** The straight-line distance between the tangent point and the PCC for the first curve, and between the PCC and the PT for the second curve.
*   **Semi-cicular Points (SCP):** Points on the curve that are 90 degrees along the arc from the tangent point.

### 2. Understanding the Geometry of Compound Curves

For a compound curve, we have two simple curves back-to-back:

*   **Curve 1:** With radius R1 and deflection angle Δ1.
*   **Curve 2:** With radius R2 and deflection angle Δ2.

The total deflection angle is:
**Δ = Δ1 + Δ2**

The tangent lengths for the individual curves are calculated as:
**T1 = R1 * tan(Δ1 / 2)**
**T2 = R2 * tan(Δ2 / 2)**

The location of the PCC is crucial for setting out. It is located from the starting tangent point (TS) at a distance T1.

The total length of the compound curve is:
**L = L1 + L2**
where:
**L1 = (π * R1 * Δ1) / 180**
**L2 = (π * R2 * Δ2) / 180**

### 3. Setting Out Compound Curves using Angular Methods Only

Angular methods rely on using the theodolite to measure angles and establish points on the curve. This is particularly useful when direct measurement of chords is difficult due to terrain.

**The Angular Method involves:**

1.  **Establishing the Tangent:** Set up the theodolite on the initial tangent and sight the tangent point (TS).
2.  **Determining the First Point of Deflection (POD1):**
    *   The first POD is located at a distance equal to the chord length of the first sub-chord.
    *   The deflection angle for the first sub-chord is calculated.
3.  **Setting out Subsequent Points on the First Curve:**
    *   The theodolite is "transited" (plunged) and set to the calculated deflection angle.
    *   The instrument is then "walked" along the curve, setting out points at regular chord intervals.
    *   **Important:** After setting out a point, the theodolite is oriented to the back tangent of that point, and the instrument is "walked" ahead by transiting the telescope and setting the new deflection angle relative to the new tangent.
4.  **Locating the PCC:** The PCC is the point where the second curve begins. Its location is determined by the first curve's parameters.
5.  **Setting out Points on the Second Curve:**
    *   Once the PCC is established, the theodolite is moved to the PCC.
    *   The alignment is oriented to the tangent at the PCC.
    *   Subsequent points on the second curve are set out using deflection angles calculated for the second curve's radius and chord length.
6.  **Verification:** The final tangent is checked for alignment at the PT.

**Detailed Steps for Setting Out using Angular Methods:**

This method typically uses the **Deflection Angle method** and involves setting out points at fixed chord lengths.

**Step 1: Calculate Basic Curve Data for Both Curves**

*   Given: Δ, R1, R2, total tangent length from PPI to TS (if applicable).
*   Determine Δ1 and Δ2. (This might require additional data or assumptions about the PCC location if not explicitly given).
*   Calculate T1 = R1 * tan(Δ1 / 2)
*   Calculate T2 = R2 * tan(Δ2 / 2)
*   Calculate L1 = (π * R1 * Δ1) / 180
*   Calculate L2 = (π * R2 * Δ2) / 180
*   Calculate the chord length (c) for both curves. Often, the same chord length is used for simplicity, but it's calculated based on the radius and the deflection angle per chord.
    *   **c = 2 * R * sin(δ / 2)**, where δ is the deflection angle for one chord interval. A common interval is 3 degrees (meaning δ = 3 degrees).

**Step 2: Locate the PPI and TS**

*   The PPI is the main reference point.
*   The TS (Tangent to the Start) is located at a distance T1 from the PPI along the initial tangent.

**Step 3: Setting Out the First Curve (from TS to PCC)**

1.  **Set up the theodolite at the PPI.**
2.  **Orient the telescope to the TS.**
3.  **Plunge the telescope.**
4.  **Set the deflection angle.** This is usually done in increments (e.g., every 3 degrees of arc).
    *   Deflection angle for the first chord = δ / 2 (where δ is the angle subtended by the chord at the center of the curve).
5.  **Walk to the first POD.**
6.  **Set the deflection angle for the next chord.** The deflection angle increases by the same amount for each subsequent chord *relative to the original tangent*.
    *   For the second chord, the deflection angle will be δ.
    *   For the third chord, the deflection angle will be 3δ/2, and so on.
7.  **Continue setting out points** until the total length of the first curve (L1) or the calculated number of chords for L1 is reached. The last point set out before the PCC will be the end of the last sub-chord of the first curve.

**Step 4: Locating and Setting Up at the PCC**

*   **The PCC is the point on the ground that corresponds to the end of the first curve.** Its position is determined by the calculations in Step 3.
*   **Move the theodolite to the PCC.**

**Step 5: Setting Out the Second Curve (from PCC to PT)**

1.  **Orient the theodolite at the PCC.**
    *   The tangent at the PCC is the extension of the last chord of the first curve.
    *   Set the theodolite to the back tangent of the first curve and then turn the last deflection angle to get the new tangent direction.
2.  **Calculate deflection angles for the second curve.** These deflection angles are measured *from the tangent at the PCC*.
    *   The first deflection angle for the second curve (for the chord starting at the PCC) will be δ2 / 2, where δ2 is the angle subtended by one chord interval at the center of the second curve.
3.  **Set the theodolite to this first deflection angle.**
4.  **Walk to the first POD of the second curve.**
5.  **Continue setting out points** on the second curve by increasing the deflection angle by δ2 / 2 for each subsequent chord interval.
    *   The deflection angle for the second chord of the second curve will be δ2.
    *   The deflection angle for the third chord of the second curve will be 3δ2 / 2, and so on.
6.  **Continue until the end of the second curve (PT) is reached.** The PT is the point where the total deflection angle for the second curve (Δ2) has been applied.

**Important Considerations for Angular Methods:**

*   **Accuracy of the Theodolite:** A precise theodolite is essential.
*   **Chord Length Consistency:** Using a consistent chord length simplifies calculations and setting out.
*   **Cumulative Errors:** Deflection angles are cumulative. Any error in setting out a point will propagate to subsequent points.
*   **Tangent Checks:** Regularly check the tangent alignment to catch errors early.
*   **Instrument Setup:** Ensure accurate and stable instrument setups at each station.
*   **Field Bookkeeping:** Meticulous record-keeping is crucial for verification and troubleshooting.

### 4. Example Calculation and Setting Out Procedure

**Problem:**

A compound curve connects two tangents. The first curve has a radius R1 = 200m and a deflection angle Δ1 = 30°. The second curve has a radius R2 = 300m and a deflection angle Δ2 = 45°. The chord length for setting out is to be 20m.

**Solution:**

**1. Calculate Basic Data:**

*   **Total Deflection Angle (Δ):** Δ = Δ1 + Δ2 = 30° + 45° = 75°
*   **Tangent Length of First Curve (T1):** T1 = R1 * tan(Δ1 / 2) = 200 * tan(30° / 2) = 200 * tan(15°) = 200 * 0.26795 = 53.59 m
*   **Tangent Length of Second Curve (T2):** T2 = R2 * tan(Δ2 / 2) = 300 * tan(45° / 2) = 300 * tan(22.5°) = 300 * 0.41421 = 124.26 m
*   **Length of First Curve (L1):** L1 = (π * R1 * Δ1) / 180 = (π * 200 * 30) / 180 = 104.72 m
*   **Length of Second Curve (L2):** L2 = (π * R2 * Δ2) / 180 = (π * 300 * 45) / 180 = 235.62 m
*   **Total Length of Compound Curve (L):** L = L1 + L2 = 104.72 m + 235.62 m = 340.34 m

*   **Deflection Angle per Chord Interval (δ1 for Curve 1):**
    *   Number of chords for L1 = L1 / chord length = 104.72 m / 20 m = 5.236 chords. Let's assume we will use 5 chords of 20m and adjust the last one, or use 6 chords with the last one being shorter. For simplicity in the field, we often use a fixed number of chords, let's say 6 chords for L1.
    *   Angle subtended by each 20m chord at the center of R1: δ1 = (20 / R1) * (180 / π) = (20 / 200) * (180 / π) = 0.1 * 57.2958 = 5.73°
    *   Deflection angle per chord for Curve 1 = δ1 / 2 = 5.73° / 2 = 2.865°

*   **Deflection Angle per Chord Interval (δ2 for Curve 2):**
    *   Number of chords for L2 = L2 / chord length = 235.62 m / 20 m = 11.78 chords. Let's assume 12 chords for L2.
    *   Angle subtended by each 20m chord at the center of R2: δ2 = (20 / R2) * (180 / π) = (20 / 300) * (180 / π) = 0.06667 * 57.2958 = 3.8197°
    *   Deflection angle per chord for Curve 2 = δ2 / 2 = 3.8197° / 2 = 1.90985°

**2. Setting Out Procedure (Field Implementation):**

*   **Locate PPI and TS:** Assume PPI is at Chainage 0+000. The TS is at Chainage 0+000. The initial tangent is along the line from PPI to TS.

*   **Setting out the First Curve (TS to PCC):**
    *   Set up the theodolite at the PPI.
    *   Sight the TS.
    *   Plunge the telescope.
    *   **Point 1 (First POD):** Set deflection angle = 2.865°. Measure 20m chord from TS and mark the point.
    *   **Point 2:** Set deflection angle = 2.865° * 2 = 5.73°. Measure 20m chord from Point 1 and mark the point.
    *   **Point 3:** Set deflection angle = 2.865° * 3 = 8.595°. Measure 20m chord from Point 2 and mark the point.
    *   ... continue this pattern until the end of the first curve.
    *   The last chord for the first curve would be set out with a deflection angle that sums up to Δ1 = 30°.
    *   Number of full 20m chords = 104.72 / 20 = 5.236. So, 5 full chords of 20m.
    *   The chainage of the end of the 5th chord from TS will be 5 * 20 = 100m.
    *   The deflection angle for the 5th chord would be 2.865° * 5 = 14.325°.
    *   The remaining length of the curve = 104.72 - 100 = 4.72m. This last chord will be shorter. Its deflection angle will be based on the remaining arc.
    *   Let's assume for simplicity, we use 6 chords for L1. Total arc angle = 30°. Angle per chord = 30°/6 = 5°. Deflection angle per chord = 5°/2 = 2.5°. Chord length = 2 * R1 * sin(2.5°) = 2 * 200 * 0.0436 = 17.44m. This means we would set out 6 chords of 17.44m.

    *   **Let's stick to the 20m chord and 5 full chords approach for this example:**
        *   TS (Chainage 0+000)
        *   POD1 (Chainage 0+020): Deflection angle = 2.865°
        *   POD2 (Chainage 0+040): Deflection angle = 5.730°
        *   POD3 (Chainage 0+060): Deflection angle = 8.595°
        *   POD4 (Chainage 0+080): Deflection angle = 11.460°
        *   POD5 (Chainage 0+100): Deflection angle = 14.325°
        *   PCC (Chainage 0+104.72): The point is at the end of the 5th chord, with a remaining length of 4.72m. The deflection angle for this short chord needs to be calculated based on the remaining arc.

*   **Locate and Move to PCC:** The PCC is at Chainage 0+104.72. Move the theodolite to this point.

*   **Setting out the Second Curve (PCC to PT):**
    *   **Orient the theodolite at PCC:** Sight POD5. Plunge the telescope. This establishes the tangent at PCC.
    *   **Point 6 (First POD of 2nd Curve):** Set deflection angle = 1.90985°. Measure 20m chord from PCC and mark the point. (Chainage 0+124.72)
    *   **Point 7:** Set deflection angle = 1.90985° * 2 = 3.8197°. Measure 20m chord from Point 6 and mark the point. (Chainage 0+144.72)
    *   **Point 8:** Set deflection angle = 1.90985° * 3 = 5.72955°. Measure 20m chord from Point 7 and mark the point. (Chainage 0+164.72)
    *   ... continue this pattern for the second curve.
    *   The total deflection angle for the second curve is 45°.
    *   Number of full 20m chords = 235.62 / 20 = 11.78. So, 11 full chords of 20m.
    *   The chainage of the end of the 11th chord from PCC will be 11 * 20 = 220m.
    *   The deflection angle for the 11th chord will be 1.90985° * 11 = 20.908°.
    *   The remaining length of the curve = 235.62 - 220 = 15.62m. This last chord will be shorter.
    *   **PT (End of the Compound Curve):** The PT will be at a total chainage of 0+104.72 (PCC chainage) + 235.62 (L2) = 0+340.34. The final deflection angle from the tangent at PCC should be 45°.

**Verification:** After setting out the last point of the second curve (PT), the theodolite should be able to sight the next PI of the alignment with the correct final bearing, and the total deflection angle should be Δ1 + Δ2.

### 5. Practice Questions and Exercises

**Question 1:**

A compound curve has two simple curves with radii R1 = 150m and R2 = 250m. The deflection angles are Δ1 = 40° and Δ2 = 50°. Calculate:
a) The tangent lengths T1 and T2.
b) The lengths of the curves L1 and L2.
c) The total length of the compound curve.
d) If a chord length of 15m is used, calculate the deflection angle per chord for both curves.

**Answer 1:**

a) T1 = 150 * tan(40°/2) = 150 * tan(20°) = 150 * 0.36397 = **54.60m**
   T2 = 250 * tan(50°/2) = 250 * tan(25°) = 250 * 0.46631 = **116.58m**

b) L1 = (π * 150 * 40) / 180 = **104.72m**
   L2 = (π * 250 * 50) / 180 = **218.17m**

c) L = L1 + L2 = 104.72m + 218.17m = **322.89m**

d) For Curve 1:
   Angle subtended by 15m chord at center = (15 / 150) * (180 / π) = 0.1 * 57.2958 = 5.73°
   Deflection angle per chord = 5.73° / 2 = **2.865°**

   For Curve 2:
   Angle subtended by 15m chord at center = (15 / 250) * (180 / π) = 0.06 * 57.2958 = 3.4377°
   Deflection angle per chord = 3.4377° / 2 = **1.71885°**

**Question 2:**

Describe the key steps involved in setting out a compound curve using the angular method, assuming you are starting from the Point of Intersection (PPI). What are the main challenges or potential sources of error in this method?

**Answer 2:**

**Key Steps:**

1.  **Calculate Curve Data:** Determine R1, Δ1, R2, Δ2, T1, T2, L1, L2, and deflection angles per chord for both curves.
2.  **Locate PPI and TS:** Establish the PPI and measure T1 along the initial tangent to locate the TS.
3.  **Set up at PPI:** Set up the theodolite at the PPI and sight the TS.
4.  **Set out First Curve:**
    *   Plunge the telescope and set the first deflection angle (δ1/2).
    *   Measure the chord length and mark the first POD.
    *   Advance the instrument, establish the new tangent, and set the next cumulative deflection angle.
    *   Repeat until the PCC is reached (end of L1).
5.  **Set up at PCC:** Move the theodolite to the PCC.
6.  **Orient at PCC:** Orient the theodolite to the tangent at the PCC (extension of the last chord of the first curve).
7.  **Set out Second Curve:**
    *   Set the first deflection angle for the second curve (δ2/2).
    *   Measure the chord length and mark the first POD of the second curve.
    *   Continue setting out points by increasing the deflection angle cumulatively until the PT is reached (end of L2).
8.  **Verify:** Check the final alignment at the PT.

**Main Challenges/Sources of Error:**

*   **Cumulative Errors:** Errors in setting out each point accumulate and affect subsequent points.
*   **Instrumental Errors:** Inaccuracies in the theodolite (collimation error, horizontal circle error).
*   **Setting Up Errors:** Imperfect leveling and centering of the theodolite.
*   **Measurement Errors:** Inaccuracies in measuring chord lengths on the ground.
*   **Tangent Identification:** Difficulty in precisely identifying the tangent direction at each step.
*   **Environmental Factors:** Wind, visibility, and uneven terrain can affect accuracy.
*   **PCC Location:** Any error in locating the PCC will directly impact the setting out of the second curve.

### 6. Important Points to Remember

*   **Compound curves change radius within the curve.**
*   **The PCC is the crucial junction point.**
*   **Deflection angles for the second curve are measured from the tangent at the PCC.**
*   **Angular methods require careful and systematic application of deflection angles.**
*   **Accuracy depends heavily on the precision of the theodolite and meticulous field procedures.**
*   **Cumulative errors are a significant concern; frequent checks are recommended.**
*   **Field bookkeeping must be precise to track chainages and deflection angles.**

This concludes the notes for setting out compound curves using angular methods. Remember to practice these concepts and calculations to gain proficiency.
