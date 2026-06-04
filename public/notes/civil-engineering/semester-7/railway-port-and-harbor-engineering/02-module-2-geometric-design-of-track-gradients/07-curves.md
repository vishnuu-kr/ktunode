---
title: "curves"
subject: "RAILWAY, PORT AND HARBOR ENGINEERING"
module: "Module 2: Geometric design of track : gradients"
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba8115fa"
status: "completed"
scrapedAt: "2026-05-20T19:00:58.008Z"
---
# RAILWAY, PORT AND HARBOR ENGINEERING

## Module 2: Geometric Design of Track: Gradients and Curves

### Topic: Curves

This module focuses on the geometric design of railway tracks, specifically the interplay between gradients and curves. While gradients deal with the vertical alignment of the track, curves deal with the horizontal alignment, ensuring smooth and safe transitions for trains.

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Understand the necessity of curves in railway track layout.
*   Classify different types of curves used in railway engineering.
*   Define and understand the key geometric parameters of simple circular curves.
*   Calculate the essential geometric elements of a simple circular curve.
*   Understand the concept and necessity of transition curves.
*   Explain the types and functions of transition curves.
*   Understand the concept of equilibrium cant and its calculation.
*   Understand the concept of cant deficiency and cant excess.
*   Calculate the maximum permissible speed on curves considering cant.
*   Discuss the impact of curves on train operation and design considerations.

---

### 1. Necessity of Curves in Railway Track Layout

**Key Concept:** Railway tracks need to change direction to follow the natural topography, connect different locations, and overcome obstacles.

**Why curves are essential:**

*   **Topographical Constraints:** To navigate hilly terrains, valleys, and existing geographical features.
*   **Connecting Points:** To link different stations, depots, industrial areas, or ports.
*   **Avoiding Obstacles:** To bypass buildings, rivers, or other structures.
*   **Aesthetics and Efficiency:** To create a more pleasing and efficient route alignment.

**Important Point:** While necessary, curves introduce design challenges related to centrifugal force, track wear, and passenger comfort.

---

### 2. Classification of Curves

Curves are classified based on their shape and complexity.

#### 2.1. Based on Shape:

*   **Simple Circular Curve:** A single circular arc of constant radius connecting two straight sections of track (tangents).
*   **Compound Curve:** Two or more circular arcs of different radii connected by a common tangent, where the arcs curve in the same direction.
*   **Reverse Curve (or Serpent Curve):** Two circular arcs of the same or different radii connected by a common tangent, where the arcs curve in opposite directions.

#### 2.2. Based on Turn Direction:

*   **Right-Hand Curve:** The curve turns to the right when viewed from the starting point of the curve.
*   **Left-Hand Curve:** The curve turns to the left when viewed from the starting point of the curve.

#### 2.3. Based on Radius:

*   **Sharp Curves:** Small radii, generally found on narrow-gauge railways or in restricted areas.
*   **Gentle Curves:** Large radii, preferred for high-speed lines.

---

### 3. Geometric Parameters of Simple Circular Curves

Understanding these parameters is crucial for laying out curves accurately.

*   **Tangent Points (TP):** The points where the straight track (tangent) meets the circular curve.
*   **Point of Intersection (PI):** The theoretical point where the two tangents would intersect if extended.
*   **Angle of Intersection ($\Delta$):** The angle between the two tangents. It is equal to the angle subtended by the curve at the center of the circle.
*   **Radius of the Curve (R):** The radius of the circular arc forming the curve.
*   **Length of the Curve (L):** The actual length of the circular arc from TP1 to TP2.
*   **Back Tangent:** The tangent preceding the curve.
*   **Forward Tangent:** The tangent following the curve.

#### Key Geometric Elements and Their Calculations:

Let:
*   $R$ = Radius of the curve
*   $\Delta$ = Angle of intersection (in degrees)
*   $T$ = Length of the tangent (from PI to TP)
*   $L$ = Length of the curve
*   $C$ = Chord length (straight line distance between TP1 and TP2)
*   $LC$ = Long Chord (straight line distance between TP1 and TP2)
*   $E$ = External Distance (distance from PI to the midpoint of the curve)
*   $M$ = Middle Ordinate (distance from the midpoint of the curve to the midpoint of the long chord)

**Formulas:**

1.  **Tangent Length (T):**
    $T = R \tan(\frac{\Delta}{2})$

2.  **Length of the Curve (L):**
    *   If $\Delta$ is in degrees: $L = \frac{\pi R \Delta}{180}$
    *   If $\Delta$ is in radians: $L = R \Delta$

3.  **Long Chord (LC):**
    $LC = 2R \sin(\frac{\Delta}{2})$

4.  **External Distance (E):**
    $E = R ( \sec(\frac{\Delta}{2}) - 1 )$
    or
    $E = R (\frac{1}{\cos(\frac{\Delta}{2})} - 1)$

5.  **Middle Ordinate (M):**
    $M = R (1 - \cos(\frac{\Delta}{2}))$

**Example:**

A railway curve has an angle of intersection of $60^\circ$ and a radius of $300$ meters. Calculate the tangent length, length of the curve, long chord, external distance, and middle ordinate.

**Solution:**

*   $\Delta = 60^\circ$
*   $R = 300$ m
*   $\frac{\Delta}{2} = 30^\circ$

1.  **Tangent Length (T):**
    $T = 300 \tan(30^\circ) = 300 \times 0.57735 = 173.205$ meters

2.  **Length of the Curve (L):**
    $L = \frac{\pi \times 300 \times 60}{180} = \pi \times 300 \times \frac{1}{3} = 100\pi \approx 314.16$ meters

3.  **Long Chord (LC):**
    $LC = 2 \times 300 \sin(30^\circ) = 600 \times 0.5 = 300$ meters

4.  **External Distance (E):**
    $E = 300 (\sec(30^\circ) - 1) = 300 (\frac{1}{\cos(30^\circ)} - 1) = 300 (\frac{1}{0.86603} - 1) = 300 (1.1547 - 1) = 300 \times 0.1547 = 46.41$ meters

5.  **Middle Ordinate (M):**
    $M = 300 (1 - \cos(30^\circ)) = 300 (1 - 0.86603) = 300 \times 0.13397 = 40.19$ meters

---

### 4. Transition Curves

**Key Concept:** A transition curve is a curve of gradually changing radius, designed to connect a tangent section of track to a circular curve smoothly. It is also known as a spiral or a lemniscate.

**Necessity of Transition Curves:**

*   **Smooth Introduction of Centrifugal Force:** When a train enters a circular curve, it experiences an instantaneous centrifugal force. Transition curves gradually increase this force, preventing sudden jolts.
*   **Comfort of Passengers:** Reduces discomfort and potential for injuries to passengers and crew.
*   **Reduced Track Wear:** Distributes the lateral forces more evenly, reducing wear on rails and wheels.
*   **Improved Balancing of Forces:** Allows for the gradual introduction of cant (superelevation).
*   **Avoidance of Sudden Banking:** Prevents abrupt changes in the banking angle of the track.

**Types of Transition Curves:**

*   **Clothoid (Euler Spiral):** The most commonly used transition curve in railway engineering. Its curvature changes linearly with its arc length ($R \times L = K^2$, where K is the spiral parameter). This linear relationship leads to a constant rate of change of centrifugal force.
*   **Lemniscate:** Historically used, but less common now due to more complex design and installation. Its parameter is related to the radius and distance.
*   **Cubic Parabola:** Used for lighter loads and lower speeds.

**Function of Transition Curves:**

*   To provide a gradual change in the direction of the track.
*   To introduce and remove centrifugal force gradually.
*   To allow for the gradual application and removal of cant.

---

### 5. Cant (Superelevation)

**Key Concept:** Cant, or superelevation, is the practice of raising the outer rail above the inner rail on a curve. This tilting of the track counters the centrifugal force acting on the train.

**Purpose of Cant:**

*   **Counteracting Centrifugal Force:** The component of the weight of the train acting inwards on the tilted track balances the centrifugal force, preventing the train from overturning or riding outwards.
*   **Reducing Lateral Pressure:** Minimizes the lateral force exerted by the wheel flanges on the outer rail.
*   **Improving Passenger Comfort:** Reduces the feeling of being pushed outwards.

**Equilibrium Cant:**

**Key Concept:** Equilibrium cant is the cant required to perfectly balance the centrifugal force with the component of the train's weight, with no lateral forces acting on the track.

**Calculation of Equilibrium Cant:**

Let:
*   $v$ = speed of the train (m/s)
*   $R$ = radius of the curve (m)
*   $g$ = acceleration due to gravity (9.81 m/s²)
*   $h$ = equilibrium cant (m)
*   $\theta$ = angle of cant (inclination of the track)

The centrifugal force ($F_c$) acting outwards is given by:
$F_c = \frac{mv^2}{R}$, where $m$ is the mass of the train.

The component of the train's weight ($W$) acting inwards is:
$W \sin(\theta) = mg \sin(\theta)$

For equilibrium, $F_c = W \sin(\theta)$:
$\frac{mv^2}{R} = mg \sin(\theta)$

Assuming $\theta$ is small (which is typically the case for railways), $\sin(\theta) \approx \tan(\theta) \approx \frac{h}{G}$, where $G$ is the track gauge.

So, $\frac{v^2}{R} = g \frac{h}{G}$

Rearranging for $h$:
$h = \frac{G v^2}{g R}$

Alternatively, in terms of cant angle $\theta$:
$\frac{v^2}{R} = g \tan(\theta)$

**Cant Ratio:**
The cant ratio is the ratio of the cant ($h$) to the track gauge ($G$): $\frac{h}{G}$. This is often expressed as a percentage or a fraction.

**Maximum Permissible Cant:**
The maximum permissible cant is limited by practical considerations like:
*   **Passenger Comfort:** Excessive cant can be uncomfortable for passengers, especially at low speeds.
*   **Freight Trains:** For freight trains, a higher cant can lead to instability and potential derailment of heavy loads.
*   **Starting and Stopping:** At low speeds or when starting, the train may not have enough speed to effectively use the cant, leading to outward forces.
*   **Wear:** Excessive cant can increase wear on the inner rail.

The Indian Railways (IR) and other railway authorities specify maximum permissible cant values based on gauge and speed. For broad gauge, the maximum cant is typically around 160-180 mm.

**Relationship between Cant, Speed, and Radius (for equilibrium):**

The ideal speed ($v_0$) for a given curve with cant ($h$) and radius ($R$) is:
$v_0 = \sqrt{\frac{g R h}{G}}$

This formula highlights that for a given radius, the speed for equilibrium cant increases with increasing cant and radius.

---

### 6. Cant Deficiency and Cant Excess

**Key Concepts:**
*   **Cant Deficiency:** Occurs when a train travels at a speed *higher* than the equilibrium speed for the given cant and radius. This results in an outward centrifugal force that is not fully counteracted by the cant, leading to a net outward force on the track.
*   **Cant Excess:** Occurs when a train travels at a speed *lower* than the equilibrium speed for the given cant and radius. This results in a net inward force on the track.

**Calculation of Cant Deficiency ($CD$) and Cant Excess ($CE$):**

Let:
*   $v$ = actual speed of the train (m/s)
*   $R$ = radius of the curve (m)
*   $h_{req}$ = required equilibrium cant for speed $v$ and radius $R$.
*   $h_{actual}$ = actual cant provided on the curve (m).

$h_{req} = \frac{G v^2}{g R}$

*   **Cant Deficiency ($CD$):**
    If $v > v_0$ (i.e., $h_{req} > h_{actual}$), then:
    $CD = h_{req} - h_{actual}$
    $CD = \frac{G v^2}{g R} - h_{actual}$

*   **Cant Excess ($CE$):**
    If $v < v_0$ (i.e., $h_{req} < h_{actual}$), then:
    $CE = h_{actual} - h_{req}$
    $CE = h_{actual} - \frac{G v^2}{g R}$

**Permissible Cant Deficiency:**

Railway authorities set limits on the maximum permissible cant deficiency to ensure passenger comfort and track safety. This limit varies with the gauge and the intended use of the line (passenger vs. freight). Exceeding the permissible cant deficiency can lead to:

*   Increased wear on the outer rail.
*   Uncomfortable ride for passengers.
*   Potential for derailment, especially for freight trains.

**Permissible Cant Excess:**

Similarly, there are limits to permissible cant excess to avoid excessive inward forces and potential instability, particularly for heavy vehicles.

**Important Point:** Transition curves are designed to gradually introduce the equilibrium cant, ensuring that the cant deficiency or excess changes smoothly from zero at the tangent to the full value (or deficiency) at the start of the circular curve.

---

### 7. Maximum Permissible Speed on Curves

The maximum permissible speed on a curve is a critical design parameter that depends on:

*   **Radius of the Curve (R):** Larger radii allow for higher speeds.
*   **Cant Provided (h):** Higher cant can accommodate higher speeds.
*   **Track Gauge (G):** Affects the cant calculation.
*   **Permissible Cant Deficiency:** The primary factor limiting speed.

**Formula for Maximum Permissible Speed ($v_{max}$):**

Based on the concept of maximum permissible cant deficiency ($CD_{max}$):

$CD_{max} = \frac{G v_{max}^2}{g R} - h_{actual}$

Rearranging to find $v_{max}$:

$\frac{G v_{max}^2}{g R} = h_{actual} + CD_{max}$

$v_{max}^2 = \frac{g R (h_{actual} + CD_{max})}{G}$

$v_{max} = \sqrt{\frac{g R (h_{actual} + CD_{max})}{G}}$

**Example:**

Consider a broad gauge (G = 1.676 m) track with a curve of radius $R = 500$ m. If the actual cant provided is $h_{actual} = 100$ mm ($0.1$ m) and the maximum permissible cant deficiency is $CD_{max} = 75$ mm ($0.075$ m), calculate the maximum permissible speed.

**Solution:**

*   $G = 1.676$ m
*   $R = 500$ m
*   $h_{actual} = 0.1$ m
*   $CD_{max} = 0.075$ m
*   $g = 9.81$ m/s²

$v_{max} = \sqrt{\frac{9.81 \times 500 \times (0.1 + 0.075)}{1.676}}$
$v_{max} = \sqrt{\frac{9.81 \times 500 \times 0.175}{1.676}}$
$v_{max} = \sqrt{\frac{858.375}{1.676}}$
$v_{max} = \sqrt{512.157}$
$v_{max} \approx 22.63$ m/s

To convert to km/h: $22.63 \times \frac{18}{5} \approx 81.47$ km/h

---

### 8. Impact of Curves on Train Operation and Design Considerations

**Impacts:**

*   **Reduced Speed:** Trains must slow down on curves for safety and comfort.
*   **Increased Track Forces:** Centrifugal force and flange forces lead to increased wear on rails, wheels, and ballast.
*   **Higher Maintenance Costs:** Curves require more frequent and intensive maintenance than straight tracks.
*   **Passenger Comfort:** Lateral acceleration can cause discomfort.
*   **Fuel Consumption:** Increased resistance on curves can lead to higher fuel consumption.
*   **Axle Loads:** The effective axle load increases on curves due to lateral forces.
*   **Train Dynamics:** Can affect the stability of long and heavy freight trains.

**Design Considerations:**

*   **Curve Radius Selection:** Aim for the largest possible radius to minimize speed restrictions and track forces.
*   **Transition Curve Design:** Proper transition curves are essential for smooth transitions. The length of the transition curve should be adequate for the speed and cant.
*   **Cant Design:** Optimize cant for the prevailing speeds and types of traffic.
*   **Track Gauge Widening:** On sharp curves, track gauge is often widened slightly to reduce the risk of gauge widening under load and improve wheel-flange contact.
*   **Superelevation of Turnouts:** Turnouts (switches and crossings) require special design considerations for cant.
*   **Visibility:** Ensure adequate sight distances on curves, especially at level crossings and junctions.
*   **Drainage:** Proper drainage is crucial to prevent ballast erosion and track instability.

---

### Practice Questions and Exercises

**Question 1:**
Define the following terms related to simple circular curves:
a) Point of Intersection (PI)
b) Tangent Points (TP)
c) Angle of Intersection ($\Delta$)

**Question 2:**
A railway curve has an angle of intersection of $45^\circ$ and a radius of $400$ meters. Calculate:
a) Tangent Length
b) Length of the Curve
c) Long Chord

**Question 3:**
Explain the necessity of transition curves in railway track design. Name the most common type of transition curve used in railways.

**Question 4:**
What is cant (superelevation)? How does it help in counteracting centrifugal force?

**Question 5:**
A broad gauge (G = 1.676 m) track has a curve with a radius of $600$ m. If the actual cant provided is $120$ mm, and the train operates at a speed of $120$ km/h, calculate:
a) The equilibrium cant required for this speed and radius.
b) The cant deficiency or excess.
c) If this is a deficiency, determine the maximum permissible speed if the permissible cant deficiency is $80$ mm.

---

### Answers to Practice Questions

**Answer 1:**
a) **Point of Intersection (PI):** The theoretical point where the two tangents of a curve would intersect if extended.
b) **Tangent Points (TP):** The points where the straight sections of the track (tangents) meet the circular curve.
c) **Angle of Intersection ($\Delta$):** The angle between the two tangents, which is also equal to the angle subtended by the curve at the center of the circle.

**Answer 2:**
*   $\Delta = 45^\circ$, $R = 400$ m
*   $\frac{\Delta}{2} = 22.5^\circ$

a) **Tangent Length (T):**
    $T = R \tan(\frac{\Delta}{2}) = 400 \tan(22.5^\circ) = 400 \times 0.4142 = 165.68$ meters

b) **Length of the Curve (L):**
    $L = \frac{\pi R \Delta}{180} = \frac{\pi \times 400 \times 45}{180} = \pi \times 400 \times \frac{1}{4} = 100\pi \approx 314.16$ meters

c) **Long Chord (LC):**
    $LC = 2R \sin(\frac{\Delta}{2}) = 2 \times 400 \sin(22.5^\circ) = 800 \times 0.3827 = 306.16$ meters

**Answer 3:**
Transition curves are necessary to provide a smooth entry and exit from circular curves. They gradually introduce and remove centrifugal force and cant, preventing sudden jolts, improving passenger comfort, reducing track wear, and allowing for a smooth change in banking. The most common type of transition curve used in railways is the **Clothoid (Euler Spiral)**.

**Answer 4:**
Cant (superelevation) is the practice of raising the outer rail above the inner rail on a curve. It helps counteract centrifugal force by tilting the train inwards. The component of the train's weight acting along the tilted track then balances the outward centrifugal force, reducing the lateral forces on the track and improving passenger comfort.

**Answer 5:**
*   $G = 1.676$ m, $R = 600$ m, $h_{actual} = 120$ mm $= 0.120$ m
*   $v = 120$ km/h $= 120 \times \frac{5}{18} = 33.33$ m/s
*   $g = 9.81$ m/s²

a) **Equilibrium Cant Required ($h_{req}$):**
    $h_{req} = \frac{G v^2}{g R} = \frac{1.676 \times (33.33)^2}{9.81 \times 600} = \frac{1.676 \times 1110.89}{5886} = \frac{1861.9}{5886} \approx 0.316$ m or $316$ mm

b) **Cant Deficiency or Excess:**
    Since $h_{req} (316$ mm) $> h_{actual} (120$ mm), there is a **cant deficiency**.
    $CD = h_{req} - h_{actual} = 316 - 120 = 196$ mm.
    The cant deficiency is $196$ mm.

c) **Maximum Permissible Speed:**
    Given $CD_{max} = 80$ mm $= 0.080$ m.
    We need to find $v_{max}$ such that the actual cant deficiency is $80$ mm.
    The relationship is: $CD_{max} = \frac{G v_{max}^2}{g R} - h_{actual}$
    $0.080 = \frac{1.676 \times v_{max}^2}{9.81 \times 600} - 0.120$
    $0.080 + 0.120 = \frac{1.676 \times v_{max}^2}{5886}$
    $0.200 = \frac{1.676 \times v_{max}^2}{5886}$
    $v_{max}^2 = \frac{0.200 \times 5886}{1.676} = \frac{1177.2}{1.676} \approx 702.4$
    $v_{max} = \sqrt{702.4} \approx 26.5$ m/s

    Converting to km/h: $26.5 \times \frac{18}{5} \approx 95.4$ km/h.
    The maximum permissible speed is approximately $95.4$ km/h.

---

### Important Points to Remember:

*   Curves are essential for following terrain and connecting routes.
*   Simple circular curves are defined by radius and angle of intersection.
*   Transition curves (like clothoids) are vital for smooth introduction of centrifugal force and cant.
*   Cant (superelevation) counteracts centrifugal force.
*   Equilibrium cant balances centrifugal force with the component of gravity.
*   Cant deficiency occurs at speeds exceeding equilibrium speed, while cant excess occurs at speeds below equilibrium speed.
*   Maximum permissible speed on curves is governed by the radius, cant, and permissible cant deficiency.
*   Curves lead to reduced speeds, increased track forces, and higher maintenance requirements.
