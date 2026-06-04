---
title: "Setting out of curve- simple curve"
subject: "SURVEY LAB"
module: "Module 11: Setting out of curve"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba81089e"
status: "completed"
scrapedAt: "2026-05-20T18:42:02.233Z"
---
# Survey Lab: Module 11 - Setting Out of Curves (Simple Curves)

This module focuses on the practical techniques and theoretical understanding required to accurately set out simple horizontal curves in the field using surveying instruments.

---

## 1. Introduction to Curves in Surveying

**What are Curves in Surveying?**

*   Curves are used in route surveying (roads, railways, canals, pipelines) to provide a smooth transition between two straight sections of a route, known as **tangents**.
*   They allow vehicles or traffic to change direction gradually, improving safety, comfort, and efficiency.
*   Simple curves are the most basic type, consisting of a single circular arc connecting two tangents.

**Why is Setting Out Curves Important?**

*   **Precision:** Accurate placement of curves is crucial for the functionality and safety of the designed route.
*   **Construction:** Setting out provides the ground control points for construction crews to build the curve accurately.
*   **Legal Boundaries:** In some cases, curves may define property lines.

---

## 2. Key Concepts and Definitions Related to Simple Curves

Let's define the fundamental elements of a simple circular curve:

*   **Tangents:** The straight sections of the route that precede and follow the curve.
*   **Point of Intersection (PI):** The point where the two tangents, if extended, would intersect. This is a crucial reference point.
*   **Point of Beginning (BC) / Tangent Point (TP1):** The point on the first tangent where the curve begins.
*   **Point of End (EC) / Tangent Point (TP2):** The point on the second tangent where the curve ends.
*   **Deflection Angle (Δ):** The angle between the extension of the first tangent and the second tangent. It is also the angle subtended by the curve at the center of the circle.
    *   **Important Note:** The deflection angle is equal to the angle of intersection (I) of the two tangents.
*   **Angle of Intersection (I):** The angle between the two tangents. Often used interchangeably with Deflection Angle (Δ).
*   **Radius (R):** The radius of the circular arc forming the curve.
*   **Curve Length (L):** The length of the circular arc from the BC to the EC.
*   **Tangent Length (T):** The distance along the tangent from the PI to the BC (or EC).
*   **Long Chord (LC):** The straight line distance from the BC to the EC.
*   **External Secant (E):** The distance from the PI to the midpoint of the curve along the line bisecting the angle of intersection.
*   **Middle Ordinate (M):** The distance from the midpoint of the curve to the midpoint of the long chord, measured along the bisector of the angle of intersection.
*   **Subtangents:** The segments of the tangents from the PI to the points where perpendiculars from the BC and EC meet the tangents.
*   **Normal Chords:** Chords used in setting out the curve, typically of equal length.

---

## 3. Formulas for Simple Curves

Understanding these formulas is essential for calculating curve elements before setting out:

**From Deflection Angle (Δ) and Radius (R):**

*   **Tangent Length (T):**
    $$ T = R \tan(\frac{\Delta}{2}) $$
*   **Long Chord (LC):**
    $$ LC = 2R \sin(\frac{\Delta}{2}) $$
*   **Curve Length (L):**
    $$ L = \frac{\pi R \Delta}{180^\circ} \quad (\text{where } \Delta \text{ is in degrees}) $$
    or
    $$ L = R \Delta \quad (\text{where } \Delta \text{ is in radians}) $$
*   **External Secant (E):**
    $$ E = R (\sec(\frac{\Delta}{2}) - 1) $$
    or
    $$ E = R (\frac{1}{\cos(\frac{\Delta}{2})} - 1) $$
*   **Middle Ordinate (M):**
    $$ M = R (1 - \cos(\frac{\Delta}{2})) $$
    or
    $$ M = R - R \cos(\frac{\Delta}{2}) $$

**From Other Elements (e.g., T and Δ):**

*   **Radius (R):**
    $$ R = \frac{T}{\tan(\frac{\Delta}{2})} $$

---

## 4. Methods for Setting Out Simple Curves

Several methods are used to set out simple curves in the field. The choice depends on the available equipment, the required accuracy, and the nature of the terrain.

### 4.1. Chord Deflection Method

This is a widely used and accurate method, especially with modern total stations or theodolites.

**Principle:** The curve is approximated by a series of chords of equal length (except possibly the first and last). The direction of each chord is set out by measuring a deflection angle from the preceding tangent or chord.

**Procedure:**

1.  **Locate PI:** Establish the position of the Point of Intersection (PI) by traversing or other control methods.
2.  **Calculate Curve Elements:** Determine T, L, R, LC, E, M, and the length of the normal chord (c).
3.  **Determine Tangent Points (BC & EC):**
    *   From the PI, measure the tangent length (T) back along the first tangent to establish the BC.
    *   From the PI, measure the tangent length (T) forward along the second tangent to establish the EC.
4.  **Choose Chord Length (c):**
    *   Select a suitable chord length (e.g., 10m, 20m, 30m) based on the curve's radius and the desired accuracy. A common rule of thumb is to keep the chord length roughly 1/10th to 1/20th of the radius for good approximation.
    *   **Important Note:** The normal chord length (c) is calculated as:
        $$ c = 2R \sin(\frac{\alpha}{2}) $$
        where $\alpha$ is the angle subtended by the normal chord at the center of the curve.
5.  **Calculate Deflection Angles (δ):**
    *   The total deflection angle is Δ.
    *   The deflection angle for each normal chord (δ) is calculated as:
        $$ \delta = \frac{\alpha}{2} = \arcsin(\frac{c}{2R}) $$
    *   **Important Note:** The angle subtended by the normal chord at the center ($\alpha$) is often related to the desired chord length by:
        $$ \alpha = \frac{c}{R} \times \frac{180^\circ}{\pi} \quad (\text{if } \alpha \text{ in degrees}) $$
        So,
        $$ \delta = \frac{c}{2R} \times \frac{180^\circ}{\pi} \quad (\text{if } \delta \text{ in degrees}) $$
6.  **Set Out the Curve:**
    *   **At BC:**
        *   Set up the theodolite at the BC.
        *   Sight along the first tangent (back tangent) and plunge the telescope.
        *   Set the horizontal circle to zero.
        *   Turn off the first deflection angle ($\delta_1$) from the back tangent. Mark the first curve point (PC1). The angle measured is $\delta_1$.
    *   **At PC1:**
        *   Move the instrument to PC1.
        *   Sight back to the BC (this establishes the line of the previous chord).
        *   Plunge the telescope.
        *   Turn off the second deflection angle ($\delta_2$) from the line of the previous chord. Mark the second curve point (PC2). The angle measured is $\delta_2$.
    *   **Continue:** Repeat this process for each normal chord. The deflection angles are cumulative.
    *   **Last Chord:** The last chord may be shorter than the normal chord. Its length will be $L - (n-1)c$, where $n$ is the number of normal chords. The deflection angle for the last segment will be half of the angle subtended by the last chord at the center.
    *   **Check:** The total deflection angle measured from the first tangent to the last chord should equal the total deflection angle (Δ). The final EC point should coincide with the calculated EC location.

**Example Calculation (Chord Deflection Method):**

**Problem:** Set out a simple curve with the following data:
*   PI: Station 150 + 00.00
*   Deflection Angle (Δ): 40° 00' 00"
*   Radius (R): 200.00 m

**Solution:**

1.  **Calculate Curve Elements:**
    *   $\Delta/2 = 40^\circ/2 = 20^\circ$
    *   $T = R \tan(\frac{\Delta}{2}) = 200.00 \times \tan(20^\circ) = 200.00 \times 0.36397 = 72.79$ m
    *   $L = \frac{\pi R \Delta}{180^\circ} = \frac{\pi \times 200 \times 40}{180} = 139.63$ m
    *   $LC = 2R \sin(\frac{\Delta}{2}) = 2 \times 200 \times \sin(20^\circ) = 400 \times 0.34202 = 136.81$ m
    *   $E = R (\sec(\frac{\Delta}{2}) - 1) = 200 (\sec(20^\circ) - 1) = 200 (1.06418 - 1) = 200 \times 0.06418 = 12.84$ m
    *   $M = R (1 - \cos(\frac{\Delta}{2})) = 200 (1 - \cos(20^\circ)) = 200 (1 - 0.93969) = 200 \times 0.06031 = 12.06$ m

2.  **Determine Tangent Points:**
    *   BC Station: PI Station - T = (150 + 00.00) - 72.79 m = 149 + 27.21
    *   EC Station: BC Station + L = (149 + 27.21) + 139.63 m = 150 + 76.84

3.  **Choose Chord Length and Calculate Deflection Angles:**
    *   Let's choose a normal chord length $c = 20.00$ m.
    *   Calculate the angle subtended by the normal chord at the center ($\alpha$):
        $$ \alpha = \frac{c}{R} \times \frac{180^\circ}{\pi} = \frac{20}{200} \times \frac{180}{\pi} = 0.1 \times 57.2958 = 5.7296^\circ = 5^\circ 43' 47" $$
    *   Calculate the deflection angle for each normal chord ($\delta$):
        $$ \delta = \frac{\alpha}{2} = \frac{5^\circ 43' 47"}{2} = 2^\circ 51' 53.5" $$

4.  **Set Out the Curve:**
    *   **At BC (Station 149 + 27.21):**
        *   Set up instrument. Sight back tangent, set circle to 0°00'00".
        *   Turn off deflection angle $\delta_1 = 2^\circ 51' 53.5"$. Mark point PC1 at 20.00 m from BC along this line.
    *   **At PC1:**
        *   Set up instrument. Sight back to BC.
        *   Turn off deflection angle $\delta_2 = 2^\circ 51' 53.5"$ (cumulative angle $2\delta = 5^\circ 43' 47"$). Mark point PC2 at 20.00 m from PC1 along this line.
    *   **Continue:**
        | Point | Station (from BC) | Cumulative Angle (from BC) | Deflection Angle (from previous line) | Chord Length (m) |
        | :---- | :---------------- | :------------------------- | :---------------------------------- | :--------------- |
        | BC    | 0.00              | 0°00'00"                   | -                                   | -                |
        | PC1   | 20.00             | 2°51'53.5"                 | 2°51'53.5"                          | 20.00            |
        | PC2   | 40.00             | 5°43'47.0"                 | 2°51'53.5"                          | 20.00            |
        | PC3   | 60.00             | 8°35'40.5"                 | 2°51'53.5"                          | 20.00            |
        | PC4   | 80.00             | 11°27'34.0"                | 2°51'53.5"                          | 20.00            |
        | PC5   | 100.00            | 14°19'27.5"                | 2°51'53.5"                          | 20.00            |
        | PC6   | 120.00            | 17°11'21.0"                | 2°51'53.5"                          | 20.00            |
        | EC    | 139.63            | 20°00'00"                  | 2°48'39.0"                          | 19.63            |

    *   **Last Chord Calculation:**
        *   Number of normal chords = $\lfloor \frac{L}{c} \rfloor = \lfloor \frac{139.63}{20} \rfloor = \lfloor 6.98 \rfloor = 6$
        *   Length of normal chords used = $6 \times 20.00 = 120.00$ m
        *   Remaining length = $139.63 - 120.00 = 19.63$ m. This is the length of the last chord.
        *   The angle subtended by the last chord at the center ($\alpha_{last}$) is:
            $$ \alpha_{last} = \frac{19.63}{200} \times \frac{180^\circ}{\pi} = 0.09815 \times 57.2958 = 5.621^\circ = 5^\circ 37' 16" $$
        *   The deflection angle for the last chord ($\delta_{last}$) is:
            $$ \delta_{last} = \frac{\alpha_{last}}{2} = \frac{5^\circ 37' 16"}{2} = 2^\circ 48' 38" $$
        *   Cumulative angle to PC6 = $6 \times 2^\circ 51' 53.5" = 17^\circ 11' 21"$
        *   Total angle to EC = $17^\circ 11' 21" + 2^\circ 48' 38" = 19^\circ 59' 59" \approx 20^\circ$ (matches $\Delta/2$).

### 4.2. Arc Deflection Method

This method uses cumulative deflection angles measured from the tangent, but the points are located along the curve itself at equal arc lengths.

**Principle:** The curve is defined by arcs of equal length, and the deflection angle from the tangent to the chord connecting the start of the arc to the end of the arc is calculated.

**Procedure:**

1.  **Locate PI, Calculate Curve Elements:** Same as Chord Deflection Method.
2.  **Choose Arc Length (s):** Select a suitable arc length (e.g., 10m, 20m).
3.  **Calculate Deflection Angles (θ):** The deflection angle (θ) from the tangent to the chord subtending an arc length 's' at the center is given by:
    $$ \theta = \frac{s}{2R} \times \frac{180^\circ}{\pi} \quad (\text{if } \theta \text{ in degrees}) $$
    *   **Important Note:** This angle is measured from the *tangent* at the beginning of the arc.
4.  **Set Out the Curve:**
    *   **At BC:**
        *   Set up the theodolite at the BC.
        *   Sight along the first tangent (back tangent) and plunge the telescope.
        *   Set the horizontal circle to zero.
        *   Turn off the first deflection angle (θ) from the back tangent. Mark the first point on the curve. The distance along this line from BC to the marked point will be the chord length corresponding to the arc length 's'.
    *   **At the first curve point:**
        *   Set up the theodolite.
        *   Sight back to the BC.
        *   Plunge the telescope.
        *   Turn off the *same* deflection angle (θ) from the line of the previous chord. Mark the next point on the curve.
    *   **Continue:** Repeat the process. The deflection angles are *not* cumulative in the same way as the chord deflection method. Each deflection angle is measured from the preceding tangent or chord. The points are located by measuring the *chord length* corresponding to the arc length 's' along the deflected line.

**Advantages:** Can be more accurate for longer curves with larger radii as it uses the tangent for each deflection.
**Disadvantages:** Requires more frequent instrument setups.

**Example Calculation (Arc Deflection Method):**

**Problem:** Same as the previous example (Δ=40°, R=200m, PI Station 150+00).
**Solution:**

1.  **Curve Elements:** Same as before (T=72.79m, L=139.63m).
2.  **Choose Arc Length:** Let's choose an arc length $s = 20.00$ m.
3.  **Calculate Deflection Angle (θ):**
    $$ \theta = \frac{s}{2R} \times \frac{180^\circ}{\pi} = \frac{20}{2 \times 200} \times \frac{180}{\pi} = \frac{20}{400} \times 57.2958 = 0.05 \times 57.2958 = 2.8648^\circ = 2^\circ 51' 53.5" $$
    *   This is the same angle calculated for $\delta$ in the chord deflection method!
4.  **Set Out the Curve:**
    *   **At BC (Station 149 + 27.21):**
        *   Set up instrument, sight back tangent, set to 0°00'00".
        *   Turn off deflection angle $\theta_1 = 2^\circ 51' 53.5"$. Mark PC1 at a distance (chord length) of $2R \sin(\theta/2)$ from BC.
            *   Chord length = $2 \times 200 \times \sin(2.8648^\circ / 2) = 400 \times \sin(1.4324^\circ) = 400 \times 0.02499 = 9.996$ m.
            *   *Correction*: The chord length for an arc deflection of angle $\theta$ is actually $2R \sin(\theta/2)$. This is often misunderstood. If the arc length is $s$, the chord length $c'$ is $2R \sin(\frac{\alpha}{2})$, where $\alpha$ is the angle subtended by $c'$ at the center. The deflection angle for a given arc length $s$ is $\theta = s/(2R)$. The chord length $c'$ subtending this arc is $c' = 2R \sin(\frac{\theta}{2})$.

            Let's re-calculate based on the standard definition:
            The deflection angle $\theta$ is from the *tangent* to the *chord* that connects the start of the arc to the end of the arc. The arc length $s$ is along the curve.
            The angle subtended at the center by arc length $s$ is $\alpha_{arc} = \frac{s}{R} \times \frac{180^\circ}{\pi}$.
            The deflection angle $\theta$ to the chord that spans this arc is $\theta = \frac{\alpha_{arc}}{2} = \frac{s}{2R} \times \frac{180^\circ}{\pi}$.
            The length of this chord is $c' = 2R \sin(\theta)$. *This is where the distinction lies.*

            Let's use the more common interpretation where the deflection angle from the tangent to the chord is used to locate points on the curve, and these points are spaced by equal *chords*, not necessarily equal *arcs*.

            **Revisiting Chord Deflection Method:** It's generally more practical and widely taught. The arc deflection method is often confused with it. For practical setting out, the **chord deflection method** is the dominant technique.

            Let's stick to the Chord Deflection Method for clarity and practical application.

---

## 5. Setting Out with Total Stations

Modern total stations significantly simplify the process of setting out curves.

**Principle:** Total stations directly calculate and display the required deflection angles or bearings.

**Procedure:**

1.  **Input Curve Data:** Enter the curve elements (BC station, EC station, Radius, Deflection Angle, etc.) into the total station's software.
2.  **Set up at BC:**
    *   Set up the total station at the BC.
    *   Backsight to a known point on the tangent (or set the instrument to read zero along the tangent).
3.  **Stake Out Points:**
    *   The total station software will guide the operator. It will prompt for the required angle (deflection angle) and distance.
    *   The operator turns the instrument to the correct horizontal angle and then measures the specified chord length along that line to locate the next point.
    *   The instrument displays the required horizontal angle relative to the previous line of sight or the initial tangent.

**Advantages:**
*   **Speed:** Much faster than manual methods.
*   **Accuracy:** Reduces human error in angle accumulation and reading.
*   **Direct Guidance:** Software provides step-by-step instructions.

---

## 6. Setting Out Using the Tapes and Angles (For simpler cases or when a theodolite isn't available)

This method is less accurate and more labor-intensive but can be used for basic curves.

**Principle:** Points are located by measuring offsets perpendicular to the tangent, or by using angles and radial lines.

**Method 1: Offsets from Tangents**

*   **Procedure:**
    1.  Establish tangents and mark points along the tangents at regular intervals (e.g., 10m, 20m).
    2.  At each point along the tangent, measure a perpendicular offset to the curve.
    3.  The offset distance (y) at a distance (x) from the BC along the tangent is given by:
        $$ y = R - \sqrt{R^2 - x^2} $$
    4.  **Limitations:** Becomes increasingly inaccurate for longer tangents and larger offsets. The angle of intersection of the offset with the tangent should be close to 90 degrees for accurate measurement.

**Method 2: Offsets from Long Chord**

*   **Procedure:**
    1.  Locate BC and EC. Measure the long chord (LC).
    2.  Bisect the long chord to find its midpoint.
    3.  Measure the middle ordinate (M) from the midpoint of the LC perpendicular to the curve.
    4.  Subdivide the LC into segments. At each segment point, measure offsets perpendicular to the LC. The offset (y) at a distance (x) from the midpoint of the LC is:
        $$ y = \sqrt{R^2 - (x')^2} - (R - M) $$
        where $x'$ is the distance from the midpoint of the LC.

---

## 7. Setting Out Points on the Curve Using Tapes Only (Less common for precision)

This method relies on the property that the angle between a tangent and a chord is equal to the angle subtended by the chord in the alternate segment.

**Principle:** Points on the curve are located by measuring chords of equal length and setting out the correct angle between successive chords.

**Procedure:**

1.  **Locate BC and Calculate Curve Elements:** As before.
2.  **Choose Chord Length (c):** As in the chord deflection method.
3.  **Set Out the First Chord:**
    *   Fix the BC.
    *   Choose a chord length $c$. Measure $c$ along the first tangent from the BC. Mark a point P.
    *   Measure a *subtangent* length $ST = R \sin(\delta)$ from P back towards PI along the tangent. Mark point Q.
    *   Measure the chord length $c$ from P at an angle $\delta$ (calculated as in the chord deflection method) from the tangent. Mark the first curve point.
4.  **Setting Subsequent Chords:**
    *   At the end of the first chord, measure the chord length $c$ at an angle $2\delta$ from the first chord.
    *   This method is complex to execute accurately with tapes alone.

---

## 8. Practice Questions and Exercises

**Question 1:**
A simple curve has a deflection angle of 50° 00' 00" and a radius of 250.00 m. Calculate:
a) Tangent Length (T)
b) Curve Length (L)
c) Long Chord (LC)
d) External Secant (E)

**Question 2:**
Set out a simple curve with the following data using the Chord Deflection Method:
*   PI Station: 200 + 50.00
*   Deflection Angle (Δ): 30° 00' 00"
*   Radius (R): 150.00 m
*   Normal Chord Length: 15.00 m

Calculate:
a) Station of BC and EC.
b) Deflection angle per normal chord ($\delta$).
c) Prepare a deflection angle table for the first 5 normal chords.

**Question 3:**
A total station is used to set out a simple curve. The following data is entered:
*   BC Station: 100 + 00.00
*   Curve Length (L): 100.00 m
*   Radius (R): 100.00 m

What is the Deflection Angle (Δ) of this curve? If the total station is set up at the BC, backsighting to a point on the tangent, what would be the angle and distance to stake out the first point on the curve, assuming a chord length of 10.00 m?

---

## 9. Answers to Practice Questions

**Answer 1:**
a) $\Delta/2 = 25^\circ$
   $T = 250.00 \times \tan(25^\circ) = 250.00 \times 0.46631 = 116.58$ m
b) $L = \frac{\pi \times 250 \times 50}{180} = 218.17$ m
c) $LC = 2 \times 250 \times \sin(25^\circ) = 500 \times 0.42262 = 211.31$ m
d) $E = 250 (\sec(25^\circ) - 1) = 250 (1.10338 - 1) = 250 \times 0.10338 = 25.85$ m

**Answer 2:**
a) $\Delta/2 = 15^\circ$
   $T = 150.00 \times \tan(15^\circ) = 150.00 \times 0.26795 = 40.19$ m
   $L = \frac{\pi \times 150 \times 30}{180} = 78.54$ m
   *   BC Station: PI Station - T = (200 + 50.00) - 40.19 m = 199 + 09.81
   *   EC Station: BC Station + L = (199 + 09.81) + 78.54 m = 200 + 28.35

b) Angle subtended by normal chord at center ($\alpha$):
   $\alpha = \frac{c}{R} \times \frac{180^\circ}{\pi} = \frac{15}{150} \times \frac{180}{\pi} = 0.1 \times 57.2958 = 5.7296^\circ = 5^\circ 43' 47"$
   Deflection angle per normal chord ($\delta$):
   $\delta = \frac{\alpha}{2} = \frac{5^\circ 43' 47"}{2} = 2^\circ 51' 53.5"$

c) Deflection Angle Table:
   *   Number of normal chords = $\lfloor \frac{78.54}{15} \rfloor = \lfloor 5.236 \rfloor = 5$
   *   Length of 5 normal chords = $5 \times 15.00 = 75.00$ m
   *   Length of last chord = $78.54 - 75.00 = 3.54$ m
   *   Deflection angle for last chord ($\delta_{last}$):
       $\alpha_{last} = \frac{3.54}{150} \times \frac{180}{\pi} = 0.0236 \times 57.2958 = 1.352^\circ = 1^\circ 21' 07"$
       $\delta_{last} = \frac{1^\circ 21' 07"}{2} = 0^\circ 40' 33.5"$

   | Point | Station (from BC) | Cumulative Angle (from BC) | Deflection Angle (from previous line) | Chord Length (m) |
   | :---- | :---------------- | :------------------------- | :---------------------------------- | :--------------- |
   | BC    | 0.00              | 0°00'00"                   | -                                   | -                |
   | PC1   | 15.00             | 2°51'53.5"                 | 2°51'53.5"                          | 15.00            |
   | PC2   | 30.00             | 5°43'47.0"                 | 2°51'53.5"                          | 15.00            |
   | PC3   | 45.00             | 8°35'40.5"                 | 2°51'53.5"                          | 15.00            |
   | PC4   | 60.00             | 11°27'34.0"                | 2°51'53.5"                          | 15.00            |
   | PC5   | 75.00             | 14°19'27.5"                | 2°51'53.5"                          | 15.00            |
   | EC    | 78.54             | 15°00'00"                  | 0°40'33.5"                          | 3.54             |
   *(Note: Cumulative angle check: 14°19'27.5" + 0°40'33.5" = 15°00'01", which is close to Δ/2)*

**Answer 3:**
*   $L = 100.00$ m, $R = 100.00$ m
*   $L = \frac{\pi R \Delta}{180^\circ}$
*   $100.00 = \frac{\pi \times 100.00 \times \Delta}{180^\circ}$
*   $\Delta = \frac{100.00 \times 180}{\pi \times 100.00} = \frac{180}{\pi} = 57.2958^\circ = 57^\circ 17' 45"$
*   Deflection Angle (Δ) = 57° 17' 45"

*   For the first point on the curve with a chord length of 10.00 m:
    *   $\delta = \arcsin(\frac{c}{2R}) = \arcsin(\frac{10.00}{2 \times 100.00}) = \arcsin(0.05) = 2.8654^\circ = 2^\circ 51' 55.5"$
    *   Angle to stake out the first point: 2° 51' 55.5"
    *   Distance from BC: 10.00 m

---

## 10. Important Points to Remember

*   **Accuracy:** The accuracy of setting out a curve depends on the accuracy of locating the PI and BC/EC, and the precision of angle and distance measurements.
*   **Chord Length Selection:** A shorter chord length leads to a more accurate representation of the circular curve but requires more setups and calculations. A longer chord length is faster but less accurate.
*   **Cumulative Errors:** In the Chord Deflection Method, errors in angle measurement can accumulate. Using a total station with its precise angle measurement capabilities minimizes this.
*   **Double Centering:** Always use double centering (foresight and backsight) to eliminate instrumental errors when setting out angles.
*   **Field Checks:** Verify the calculated EC station and the total deflection angle at the end of the curve to ensure accuracy.
*   **Terrain:** Consider the terrain when choosing a method and chord length. Offset methods can be difficult on steep slopes.
*   **Instrument Calibration:** Ensure surveying instruments are properly calibrated before use.
*   **Understanding Formulas:** A thorough understanding of the formulas is crucial for both manual and instrument-based setting out.

---
This concludes Module 11 on Setting Out Simple Curves. Practice the calculations and be aware of the practical considerations for accurate field execution.
