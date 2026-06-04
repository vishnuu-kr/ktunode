---
title: "Relationship between intensity of load, shear force and bending moment"
subject: "MECHANICS OF SOLIDS"
module: "Module 2: Beams – different types"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912f6b"
status: "completed"
scrapedAt: "2026-05-20T18:37:22.717Z"
---
## Mechanics of Solids: Module 2 - Beams – Different Types

### Topic: Relationship between Intensity of Load, Shear Force and Bending Moment

Welcome, everyone! Today, we’re diving into a fundamental concept in the study of beams, a concept that forms the very backbone of how we analyze and design structures. We're going to explore the crucial relationship between the **intensity of the load** acting on a beam, the **shear force** it experiences, and the **bending moment** it develops internally. Understanding this triad is absolutely essential for predicting how a beam will behave under stress, and by extension, how any structure will perform. This directly ties into our course outcomes, particularly CO2 (explaining behavior under loads) and CO3 (calculating internal stresses and stress resultants).

Imagine a simple ruler. If you press down on it in the middle, it bends. That bending is caused by internal forces, and the way you apply that force directly dictates how those internal forces behave. This is precisely what we'll be dissecting today.

### 1. What are Beams? And What Kinds of Loads Do They Encounter?

Before we get to the relationships, let's quickly recap what we mean by a beam. A beam, in its simplest form, is a structural element that is primarily designed to resist loads applied laterally to its longitudinal axis. Think of the beam supporting a shelf, or the main girders of a bridge. They are designed to carry loads that are perpendicular to their length.

Now, the loads can come in various forms:

*   **Concentrated Load:** This is like placing a heavy book at a single point on your shelf. It’s a force acting over a very small area, often idealized as a single point.
*   **Uniformly Distributed Load (UDL):** Imagine spreading that same book's weight evenly across the entire shelf. This is a load where the force is spread out uniformly along a length. We often represent the intensity of a UDL as a force per unit length (e.g., N/m or kN/m). This is the type of load where our relationships become particularly interesting.
*   **Uniformly Varying Load (UVL):** This is where the load intensity changes linearly along the length. Think of the pressure of water in a dam, which is zero at the top and increases with depth.
*   **Other Loads:** Of course, we can have combinations of these, or even concentrated moments.

Today, our focus will largely be on understanding how a distributed load influences shear force and bending moment.

### 2. Shear Force and Bending Moment: The Internal Story

When a load is applied to a beam, it doesn't just bend; internal forces arise to resist this deformation. The two primary internal force resultants we focus on are shear force and bending moment.

#### Shear Force (V)

Think of a pair of scissors cutting through paper. The two blades are sliding past each other. In a beam, shear force is the internal force that acts perpendicular to the longitudinal axis of the beam, trying to slide one part of the beam past another.

Imagine cutting a beam at any cross-section. The sum of all vertical forces acting on *either* side of that cut is the shear force at that section. It’s about equilibrium: the external forces trying to shear the beam apart must be balanced by internal shear forces.

*   **Sign Convention:** A common convention is that forces acting downwards on the left segment, or upwards on the right segment, create a *positive* shear force. This might seem arbitrary, but consistency is key! (Refer to Shah & Junnarkar for detailed sign conventions.)

#### Bending Moment (M)

Now, the bending. When you press down on that ruler, it curves. This curvature is due to internal *moments*. The bending moment at a cross-section is the internal couple that resists the tendency of the beam to bend. It’s the sum of the moments of all forces acting on *either* side of the cut, about that specific cross-section.

Think about how the ruler bends upwards or downwards. The bending moment is what causes this. It’s the internal resistance to this rotational tendency.

*   **Sign Convention:** Typically, a moment that causes the beam to sag (like a smile, convex downwards) is considered *positive* bending moment. A moment that causes the beam to hog (like a frown, convex upwards) is *negative*. Again, consistency is paramount. (Bansal's textbook provides excellent illustrations of these conventions.)

### 3. The Fundamental Relationships: The Heart of the Matter

Here’s where it all connects. We can establish direct mathematical relationships between the applied load intensity, the shear force, and the bending moment at any point along the beam. These are the equations that allow us to *calculate* these internal forces from the external loads. This is vital for CO3 – applying principles to calculate internal stresses.

Let’s consider a small, infinitesimal segment of the beam of length $dx$. Let:

*   $w(x)$ be the intensity of the distributed load at a distance $x$ from the origin (e.g., N/m or kN/m).
*   $V(x)$ be the shear force at section $x$.
*   $M(x)$ be the bending moment at section $x$.

Now, let's examine the forces and moments acting on this tiny segment.

#### Relationship between Load Intensity and Shear Force

Consider a segment of length $dx$. The total load acting on this segment is approximately $w(x) \cdot dx$.
For equilibrium of this small segment, the net vertical force must be zero.

Let the shear force at section $x$ be $V(x)$ and the shear force at section $x+dx$ be $V(x+dx)$.
Summing the vertical forces, considering our sign convention:

$V(x) - V(x+dx) - w(x) \cdot dx = 0$

Rearranging, we get:

$V(x) - V(x+dx) = w(x) \cdot dx$

Or, $V(x+dx) - V(x) = -w(x) \cdot dx$

Dividing by $dx$ and taking the limit as $dx \to 0$:

$\frac{dV}{dx} = -w(x)$

This is our **first fundamental relationship**! It tells us that the *rate of change of shear force* along the beam is equal to the *negative* of the intensity of the distributed load.

**What does this mean in practice?**

*   If there is no load ($w(x)=0$), then $\frac{dV}{dx} = 0$, which means the shear force is **constant** in that region. For example, in a simply supported beam with no load between the supports, the shear force is constant.
*   If there is a UDL ($w(x) = w$, a constant), then $\frac{dV}{dx} = -w$. This means the shear force changes **linearly** with the load. It will be a straight line with a negative slope.
*   If the load intensity is positive (acting downwards by convention), the shear force decreases as you move along the beam (from left to right).

This relationship is critical for constructing shear force diagrams (SFDs). It helps us understand how the shear force varies. (Punmia's textbook has excellent diagrams illustrating this).

#### Relationship between Shear Force and Bending Moment

Now, let's look at the moments acting on our small segment. For equilibrium, the net moment must also be zero. We consider the moments about the section $x+dx$.

The shear force at $x$, $V(x)$, creates a moment $V(x) \cdot dx$ about section $x+dx$.
The shear force at $x+dx$, $V(x+dx)$, acts at $x+dx$, so its moment arm is effectively $dx$ but its direct moment about $x+dx$ is negligible if we consider higher-order terms.
The load $w(x) \cdot dx$ acts at the midpoint of the segment (for approximation), creating a moment $w(x) \cdot dx \cdot (dx/2)$. This is a second-order term and tends to zero as $dx \to 0$.
The bending moment at $x$ is $M(x)$, and at $x+dx$ is $M(x+dx)$.

Summing moments about section $x+dx$, again using our sign convention (clockwise moment is positive):

$M(x+dx) - M(x) - V(x) \cdot dx + (\text{moment due to load}) = 0$

As $dx \to 0$, the term $V(x) \cdot dx$ and the moment due to the load become significant.
$M(x+dx) - M(x) \approx V(x) \cdot dx$

Dividing by $dx$ and taking the limit as $dx \to 0$:

$\frac{dM}{dx} = V(x)$

This is our **second fundamental relationship**! It states that the *rate of change of bending moment* along the beam is equal to the *shear force* at that section.

**What does this imply?**

*   Where the shear force is zero ($V(x)=0$), the bending moment has a **stationary value** (either a maximum, minimum, or a point of inflection). This is a very common point to check for maximum bending moments, which are critical for beam design. This is a crucial exam point! (Hibbeler emphasizes this point).
*   If the shear force is positive, the bending moment is increasing. If the shear force is negative, the bending moment is decreasing.
*   The *area under the shear force diagram* between two points is equal to the *change in bending moment* between those two points. This is another powerful tool for analysis.

#### Relationship between Load Intensity and Bending Moment

We can also directly relate the load intensity to the bending moment by combining the two relationships:

From $\frac{dV}{dx} = -w(x)$, we get $V(x) = -\int w(x) dx + C_1$ (where $C_1$ is an integration constant).
Substituting this into $\frac{dM}{dx} = V(x)$:

$\frac{dM}{dx} = -\int w(x) dx + C_1$

Integrating again:

$M(x) = -\iint w(x) dx dx + C_1 x + C_2$ (where $C_2$ is another integration constant).

This shows that the bending moment is related to the integral of the shear force, which is the double integral of the load intensity.

**Key Takeaway:** The bending moment is related to the *area under the shear force diagram*, which in turn is related to the *area under the load diagram* (if you consider the load diagram as a rate of change of shear force).

This is similar to how velocity is the integral of acceleration, and displacement is the integral of velocity. Here, load is like acceleration, shear force is like velocity, and bending moment is like displacement (though with different physical interpretations and units).

### 4. Connecting the Dots: Visualizing the Relationships

These relationships are best understood by looking at the diagrams: Load Diagram, Shear Force Diagram (SFD), and Bending Moment Diagram (BMD).

*   **Load Diagram:** Shows the intensity of the applied load along the beam.
*   **Shear Force Diagram (SFD):** Plots the shear force $V(x)$ against $x$.
    *   $\frac{dV}{dx} = -w(x)$ means the slope of the SFD is the negative of the load intensity.
    *   A UDL will result in a linearly sloping SFD.
    *   Concentrated loads cause sudden vertical jumps in the SFD.
*   **Bending Moment Diagram (BMD):** Plots the bending moment $M(x)$ against $x$.
    *   $\frac{dM}{dx} = V(x)$ means the slope of the BMD is equal to the shear force.
    *   A linearly sloping SFD (due to UDL) will result in a parabolic BMD.
    *   Where $V(x) = 0$, the BMD will have a peak (maximum or minimum).

Think of it like this, as described in Rattan's "Strength of Materials": "The shape of the SFD is obtained by integrating the load function, and the shape of the BMD is obtained by integrating the SFD." (Paraphrased from the conceptual explanation).

**Example Analogy:** Imagine driving a car.
*   **Load Intensity ($w(x)$):** This is like the acceleration/deceleration. Pushing the accelerator (positive acceleration), pressing the brake (negative acceleration).
*   **Shear Force ($V(x)$):** This is like the velocity. If you accelerate steadily, your velocity increases linearly. If you brake steadily, your velocity decreases linearly. If you maintain speed, velocity is constant.
*   **Bending Moment ($M(x)$):** This is like the position or displacement. If your velocity is constant, your position changes linearly. If your velocity is increasing linearly (e.g., from constant acceleration), your position changes parabolically.

This analogy helps visualize how the rate of change of one quantity dictates the behavior of the next.

### 5. Putting it to Practice: A Simply Supported Beam with a UDL

Let's take a classic example: a simply supported beam of length $L$, subjected to a uniformly distributed load of intensity $w$ per unit length.

*   **Reactions:** Due to symmetry, the reactions at each support ($R_A$ and $R_B$) will be $wL/2$.
*   **Shear Force $V(x)$:**
    Consider a section at distance $x$ from the left support A.
    $V(x) = R_A - (\text{load acting on length } x)$
    $V(x) = \frac{wL}{2} - w x$
    This is a linear equation. At $x=0$, $V(0) = wL/2$. At $x=L$, $V(L) = wL/2 - wL = -wL/2$.
    The shear force is zero when $wL/2 - wx = 0$, which means $x = L/2$. So, shear is zero at the midpoint.
    The SFD is a straight line dropping from $wL/2$ at A to $-wL/2$ at B, crossing zero at $L/2$.
*   **Bending Moment $M(x)$:**
    $M(x) = R_A \cdot x - (\text{moment due to UDL on length } x)$
    The UDL $wx$ on length $x$ acts at its centroid, $x/2$ from the section.
    $M(x) = \frac{wL}{2} x - w x \cdot \frac{x}{2}$
    $M(x) = \frac{wL}{2} x - \frac{w x^2}{2}$
    This is a parabolic equation.
    At $x=0$, $M(0) = 0$. At $x=L$, $M(L) = \frac{wL}{2} L - \frac{w L^2}{2} = 0$.
    The maximum bending moment occurs where $V(x) = 0$, which is at $x=L/2$.
    $M_{max} = M(L/2) = \frac{wL}{2} (\frac{L}{2}) - \frac{w (\frac{L}{2})^2}{2} = \frac{wL^2}{4} - \frac{wL^2}{8} = \frac{wL^2}{8}$.
    The BMD is a parabola opening downwards, starting from zero, reaching a maximum of $wL^2/8$ at the center, and returning to zero at the other support.

This example is a cornerstone of beam analysis and understanding it thoroughly is key. It directly illustrates $\frac{dV}{dx} = -w$ (linear change in V due to constant w) and $\frac{dM}{dx} = V$ (parabolic change in M due to linear V, and M is max where V is zero).

### 6. Important Considerations and Exam Focus

*   **Units:** Always be mindful of units! Load intensity ($kN/m$), Shear Force ($kN$), Bending Moment ($kNm$).
*   **Sign Conventions:** The choice of sign convention is crucial for consistent calculations. Stick to one and apply it rigorously. (Many problems are lost due to incorrect sign conventions).
*   **Points of Zero Shear:** As mentioned, these are critical for finding maximum bending moments. If $V(x)=0$ at some point, then $\frac{dM}{dx}=0$ at that point, indicating a maximum or minimum bending moment.
*   **Points of Zero Moment:** These are called "points of contraflexure" or "inflection points." At these points, the curvature of the beam changes direction, and the BMD crosses the zero axis. For a simply supported beam with only downward loads, these typically occur at the supports.
*   **SFD and BMD Shapes:** Memorizing the shapes of SFDs and BMDs for common load cases (UDL, point load, moment) on different beam supports (simply supported, cantilever) is extremely helpful. These relationships are the foundation for deriving these shapes. (This is excellent for CO2 and CO3).
*   **Area Under SFD:** The change in moment between two sections is the area under the SFD between those sections. This is a graphical way to integrate shear force.
*   **Slope of BMD:** The slope of the BMD at any point is equal to the shear force at that point.

### 7. Connecting to Course Outcomes

*   **CO1 (Recall):** You need to recall the definitions of shear force and bending moment, and the sign conventions.
*   **CO2 (Explain Behavior):** The relationships explain *why* a beam bends and develops internal forces. You can explain how a UDL causes a linear change in shear and a parabolic change in bending.
*   **CO3 (Apply Principles):** This topic *is* the application of principles to calculate these internal forces. Deriving $V(x)$ and $M(x)$ from $w(x)$ is core to this outcome.
*   **CO6 (Analyze for Safe Load):** To determine if a beam can carry a load safely, you first need to calculate the maximum bending moment and shear force using these relationships. Then, you compare these values with the material's strength limits.

These fundamental relationships are the bedrock upon which all subsequent beam analysis and design in mechanics of solids is built. Master them, and you'll have a very clear understanding of how structures respond to loads.

---

### Sample Questions with Answers

**Q1. State the fundamental relationship between the intensity of a distributed load $w(x)$ and the shear force $V(x)$ at any section of a beam.**

**Answer:** The fundamental relationship is given by the differential equation:
$\frac{dV}{dx} = -w(x)$
This means that the rate of change of shear force along the length of the beam is equal to the negative of the intensity of the distributed load at that section.

**Q2. For a simply supported beam subjected to a uniformly distributed load, where does the bending moment attain its maximum value? Justify your answer using the relationship between shear force and bending moment.**

**Answer:** For a simply supported beam with a UDL, the bending moment attains its maximum value at the point where the shear force is zero.
This is because the relationship between shear force $V(x)$ and bending moment $M(x)$ is given by $\frac{dM}{dx} = V(x)$.
At a point where $V(x) = 0$, $\frac{dM}{dx} = 0$. This condition signifies a stationary point for the bending moment, which corresponds to the maximum (or minimum) bending moment. For a simply supported beam with a UDL, this point is at the center of the beam.

**Q3. If the shear force diagram in a certain section of a beam is a horizontal line, what can you infer about the load intensity in that section? Explain using the relationship $\frac{dV}{dx} = -w(x)$.**

**Answer:** If the shear force diagram (SFD) is a horizontal line in a section, it means the shear force $V(x)$ is constant in that section. Mathematically, if $V(x)$ is constant, its derivative with respect to $x$ is zero:
$\frac{dV}{dx} = 0$
Using the relationship $\frac{dV}{dx} = -w(x)$, we can substitute $0$ for $\frac{dV}{dx}$:
$0 = -w(x)$
This implies $w(x) = 0$. Therefore, we can infer that there is **no distributed load** acting on the beam in that section. Any external forces present would be concentrated loads or moments, which cause jumps in the SFD but not a constant slope of zero.

**Q4. A beam is subjected to a load intensity $w(x) = 2x$ (in kN/m) over a length of 4 meters. What is the rate of change of shear force at $x = 2$ meters?**

**Answer:**
The relationship between load intensity and shear force is $\frac{dV}{dx} = -w(x)$.
Given $w(x) = 2x$ kN/m.
We need to find the rate of change of shear force at $x = 2$ meters, which is $\frac{dV}{dx}$ at $x=2$.
Substitute $x=2$ into the load intensity function:
$w(2) = 2 \times 2 = 4$ kN/m.
Therefore, the rate of change of shear force at $x = 2$ meters is:
$\frac{dV}{dx} \Big|_{x=2} = -w(2) = -4$ kN/m.
This means that at 2 meters from the origin, the shear force is decreasing at a rate of 4 kN per meter.

**Q5. Explain why the bending moment is maximum or minimum when the shear force is zero.**

**Answer:** The relationship between shear force ($V$) and bending moment ($M$) is given by $\frac{dM}{dx} = V$.
This equation tells us that the slope of the bending moment diagram at any point is equal to the shear force at that point.
When the shear force $V$ is zero, the slope of the bending moment diagram, $\frac{dM}{dx}$, is also zero. A point where the derivative of a function is zero is a critical point, which can be a local maximum, a local minimum, or a point of inflection. In the context of bending moment diagrams for beams under typical loading conditions, a zero shear force typically corresponds to the location of the maximum bending moment. This is because the shear force usually changes sign at this point, and the bending moment diagram transitions from increasing to decreasing (or vice-versa), creating a peak.
