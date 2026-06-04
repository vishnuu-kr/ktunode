---
title: "Beams- Classification - Diagrammatic conventions for supports and 
loading Differential equations between load, Shear Force and Bending 
Moment- Shear Force and Bending Moment Diagrams of Cantilever and 
Simply supported beam with Point load/UDL."
subject: "MECHANICS OF SOLIDS"
module: "Module 2: Torsion: Shafts "
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cf5"
status: "completed"
scrapedAt: "2026-05-20T17:51:05.699Z"
---
# Mechanics of Solids - Module 2: Torsion: Shafts (Focus on Beams)

**Note:** While Module 2 is titled "Torsion: Shafts", this specific topic section focuses on Beams, their classification, support conventions, loading conventions, differential relationships between load, shear force, and bending moment, and the Shear Force Diagrams (SFD) and Bending Moment Diagrams (BMD) for common beam types and loading conditions. This aligns with **CO2** and **CO3** of the course outcomes.

---

## 1. Beams: Classification

A beam is a structural element that primarily resists loads applied laterally to its axis. The deflection caused by these loads is primarily bending.

### 1.1 Classification based on Support Conditions:

*   **Cantilever Beam:** A beam that is fixed at one end and free at the other.
    *   **Characteristics:** One end is rigidly restrained against translation and rotation.
    *   **Diagrammatic Convention:** Represented by a triangle at the fixed end.
    *   **Examples:** A shelf projecting from a wall, a diving board.

*   **Simply Supported Beam:** A beam supported at both ends, allowing rotation but not translation.
    *   **Characteristics:** Supported by a roller support at one end and a pin/hinge support at the other.
    *   **Diagrammatic Convention:**
        *   Pin/Hinge Support: A triangle. Allows rotation but prevents translation in any direction.
        *   Roller Support: A circle. Allows rotation and translation along the surface it rests on (typically horizontal).
    *   **Examples:** A bridge deck supported by piers, a plank placed across two supports.

*   **Overhanging Beam:** A simply supported beam with one or both ends extending beyond the supports.
    *   **Characteristics:** Part of the beam projects past the supports.
    *   **Diagrammatic Convention:** Similar to simply supported beams, but with extended portions.
    *   **Examples:** A balcony beam, a floor joist extending beyond a wall.

*   **Fixed Beam (Built-in Beam):** A beam where both ends are rigidly fixed, preventing both translation and rotation.
    *   **Characteristics:** Both ends are restrained.
    *   **Diagrammatic Convention:** Represented by a double triangle or specific notation indicating fixed ends.
    *   **Examples:** Beams in buildings where ends are embedded in columns or walls.

*   **Continuous Beam:** A beam that is supported at more than two points.
    *   **Characteristics:** Multiple supports.
    *   **Diagrammatic Convention:** Multiple support symbols along the beam length.
    *   **Examples:** Long bridges, beams in multi-story buildings.

### 1.2 Classification based on Loading:

*   **Concentrated Load (Point Load):** A load acting at a single point on the beam.
    *   **Diagrammatic Convention:** Represented by a downward-pointing arrow.
    *   **Example:** The weight of a person standing on a plank.

*   **Uniformly Distributed Load (UDL):** A load that is spread evenly over a length or the entire span of the beam.
    *   **Diagrammatic Convention:** Represented by a series of parallel arrows pointing downwards, usually forming a rectangle or a series of small rectangles. The intensity is often denoted as 'w' (force per unit length).
    *   **Example:** The weight of a uniformly thick concrete slab on a beam.

*   **Uniformly Varying Load (UVL):** A load where the intensity of the load varies linearly along the beam.
    *   **Diagrammatic Convention:** Represented by parallel arrows that increase or decrease in length along the beam.
    *   **Example:** Wind pressure on a vertical surface, hydrostatic pressure on a dam.

---

## 2. Diagrammatic Conventions for Supports and Loading

Understanding these conventions is crucial for correctly analyzing beam behavior.

### 2.1 Supports:

*   **Roller Support:**
    *   Symbol: A circle.
    *   Reaction: A vertical force acting perpendicular to the supporting surface. It allows horizontal movement and rotation.

    ```
        -------^-------
              (O)
    ```

*   **Pin/Hinge Support:**
    *   Symbol: A triangle.
    *   Reaction: A vertical force and a horizontal force. It allows rotation but prevents both horizontal and vertical translation.

    ```
        -------^-------
              /_\
    ```

*   **Fixed Support (Built-in):**
    *   Symbol: Often depicted as a solid rectangle or a more complex representation showing rigidity.
    *   Reaction: A vertical force, a horizontal force, and a moment. It prevents translation and rotation at the support.

    ```
        -------|=======
              |_|_|
    ```

### 2.2 Loading:

*   **Point Load (P):**
    *   Symbol: A downward arrow.

    ```
              P
              ↓
        -----|-----
    ```

*   **Uniformly Distributed Load (w):**
    *   Symbol: A series of downward arrows, often depicted as a rectangular block. `w` (force/length).

    ```
        WWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWW
        -----|-----
    ```

*   **Uniformly Varying Load (UVL):**
    *   Symbol: Arrows of increasing or decreasing length.

    ```
        ↓
        ↓↓
        ↓↓↓
        -----|-----
    ```

---

## 3. Differential Equations between Load, Shear Force, and Bending Moment

These relationships are fundamental for deriving SFD and BMD. They are based on considering an infinitesimally small segment of the beam.

Consider a small element of length $dx$ of a beam subjected to a distributed load $w(x)$ (positive when acting upwards). Let $V(x)$ be the shear force and $M(x)$ be the bending moment at the left face of the element. At the right face, the shear force is $V(x) + dV$ and the bending moment is $M(x) + dM$.

![Beam Element SFD BMD](https://i.imgur.com/6z8sR5w.png)

Applying equilibrium equations to this element:

1.  **Vertical Equilibrium:**
    Sum of vertical forces = 0
    $V - (V+dV) - w(x)dx = 0$
    $-dV - w(x)dx = 0$
    $dV = -w(x)dx$
    $\frac{dV}{dx} = -w(x)$

    *   **Interpretation:** The rate of change of shear force along the beam is equal to the negative of the distributed load intensity at that point.

2.  **Moment Equilibrium (about the left face):**
    Sum of moments = 0
    $M + Vdx - (M+dM) - w(x)dx \left(\frac{dx}{2}\right) = 0$
    The term $w(x)dx \left(\frac{dx}{2}\right)$ is a higher-order term ($dx^2$) and can be neglected.
    $Vdx - dM = 0$
    $dM = Vdx$
    $\frac{dM}{dx} = V(x)$

    *   **Interpretation:** The rate of change of bending moment along the beam is equal to the shear force at that point.

**Summary of Differential Relationships:**

*   $\frac{dV}{dx} = -w(x)$
*   $\frac{dM}{dx} = V(x)$
*   Combining these: $\frac{d^2M}{dx^2} = \frac{dV}{dx} = -w(x)$

These equations are critical. They tell us:
*   If $w(x) = 0$ (no distributed load), then $\frac{dV}{dx} = 0$ (shear force is constant) and $\frac{dM}{dx} = V$ (moment changes linearly with shear).
*   If $V(x) = 0$, then $\frac{dM}{dx} = 0$ (bending moment is constant).
*   Points where $V(x) = 0$ are often points of maximum or minimum bending moment.
*   Points where $M(x) = 0$ are called points of contraflexure or inflection.

---

## 4. Shear Force and Bending Moment Diagrams (SFD & BMD)

SFD is a graphical representation of the shear force along the length of the beam. BMD is a graphical representation of the bending moment along the length of the beam.

### 4.1 Conventions for SFD and BMD:

*   **Sign Convention for Shear Force (Commonly used, e.g., in Bansal):**
    *   **Positive Shear:** Causes clockwise rotation of the beam segment. Typically, forces on the left pushing down or forces on the right pushing up.
    *   **Negative Shear:** Causes counter-clockwise rotation of the beam segment. Typically, forces on the left pushing up or forces on the right pushing down.

*   **Sign Convention for Bending Moment (Commonly used, e.g., in Bansal):**
    *   **Positive Moment (Sagging):** Causes the beam to bend downwards into a "smile" shape. Typically, tensile stresses at the bottom fibers and compressive stresses at the top.
    *   **Negative Moment (Hogging):** Causes the beam to bend upwards into a "frown" shape. Typically, tensile stresses at the top fibers and compressive stresses at the bottom.

    ![SFD BMD Conventions](https://i.imgur.com/1t0w01c.png)

**Important Point:** The sign conventions should be clearly stated and consistently applied. The conventions used in textbooks like Bansal and Bhavikatti are widely accepted.

---

## 5. SFD and BMD of Cantilever Beam

### 5.1 Cantilever Beam with a Point Load (P) at the Free End:

*   **Beam Setup:** Fixed at one end (say, A) and free at the other end (B). Load P at B.
*   **Reactions:**
    *   Vertical reaction at A ($R_A$): $P$ (upwards)
    *   Moment reaction at A ($M_A$): $P \times L$ (counter-clockwise for equilibrium, causing hogging).

*   **Analysis:** Consider a section at a distance $x$ from the free end (B).
    *   **Shear Force (V(x)):** $V(x) = P$ (constant). According to the convention where clockwise rotation is positive, this shear is negative as it tends to create counter-clockwise rotation of the segment. So, $V(x) = -P$.
    *   **Bending Moment (M(x)):** $M(x) = P \times x$. This moment causes sagging. According to the convention where sagging is positive, this moment is positive. So, $M(x) = Px$.

*   **SFD:** A horizontal line at $-P$ from B to A.
*   **BMD:** A straight line sloping from 0 at the free end (B) to $PL$ at the fixed end (A). It's a sagging moment (positive).

    ```
    Beam:   -------------------o---- (Fixed at left, Free at right with P at free end)
                              |
                              P

    SFD:    --------- -P ------|------- (Constant negative shear)
    ```

    ```
    BMD:    -------- 0 -------|------- PL ------ (Linear variation, max at fixed end)
    ```

### 5.2 Cantilever Beam with Uniformly Distributed Load (w) over its Entire Length:

*   **Beam Setup:** Fixed at A, free at B. UDL of $w$ per unit length over the entire span $L$.
*   **Reactions:**
    *   Vertical reaction at A ($R_A$): $w \times L$ (upwards)
    *   Moment reaction at A ($M_A$): $\frac{wL^2}{2}$ (counter-clockwise for equilibrium).

*   **Analysis:** Consider a section at a distance $x$ from the free end (B). The load on this segment is $w \times x$.
    *   **Shear Force (V(x)):** The shear force at the section is the total downward load to the right of the section. $V(x) = w \times x$. This shear causes counter-clockwise rotation of the segment, so it's negative. $V(x) = -wx$.
    *   **Bending Moment (M(x)):** The moment at the section is due to the UDL on the segment of length $x$. The resultant of this load is $wx$ acting at the midpoint of the segment ($x/2$ from the section). $M(x) = (wx) \times (\frac{x}{2}) = \frac{wx^2}{2}$. This moment causes sagging (positive). $M(x) = \frac{wx^2}{2}$.

*   **SFD:** A straight line sloping from 0 at the free end (B) to $-wL$ at the fixed end (A).
*   **BMD:** A parabolic curve, starting from 0 at the free end (B) and reaching a maximum of $\frac{wL^2}{2}$ at the fixed end (A).

    ```
    Beam:   WWWWWWWWWWWWWWWWWWWWWWWWWWWW (Fixed at left, Free at right with UDL 'w')
            WWWWWWWWWWWWWWWWWWWWWWWWWWWW

    SFD:    -------- 0 -------|------- -wL ------ (Linear variation, max negative at fixed end)
    ```

    ```
    BMD:    -------- 0 -------|------- (wL^2)/2 ----- (Parabolic variation, max at fixed end)
    ```

---

## 6. SFD and BMD of Simply Supported Beam

### 6.1 Simply Supported Beam with a Point Load (P) at Mid-span:

*   **Beam Setup:** Supported at A and B. Load P at the center ($L/2$).
*   **Reactions:** Due to symmetry, $R_A = R_B = \frac{P}{2}$.
*   **Analysis:**
    *   **Section 1 (0 to L/2):** Consider a section at distance $x$ from A.
        *   **Shear Force (V(x)):** $V(x) = R_A = \frac{P}{2}$. This shear causes clockwise rotation (positive).
        *   **Bending Moment (M(x)):** $M(x) = R_A \times x = \frac{P}{2}x$. This moment causes sagging (positive).
    *   **Section 2 (L/2 to L):** Consider a section at distance $x$ from A.
        *   **Shear Force (V(x)):** $V(x) = R_A - P = \frac{P}{2} - P = -\frac{P}{2}$. This shear causes counter-clockwise rotation (negative).
        *   **Bending Moment (M(x)):** $M(x) = R_A \times x - P \times (x - \frac{L}{2}) = \frac{P}{2}x - Px + \frac{PL}{2} = \frac{PL}{2} - \frac{P}{2}x$.

*   **SFD:**
    *   From A to C (mid-span): Constant $+P/2$.
    *   At C: A sudden drop of $P$.
    *   From C to B: Constant $-P/2$.
*   **BMD:**
    *   From A to C: A straight line sloping from 0 at A to a maximum of $\frac{PL}{4}$ at C.
    *   From C to B: A straight line sloping from $\frac{PL}{4}$ at C to 0 at B.
    *   Maximum bending moment occurs at the point load, $M_{max} = \frac{PL}{4}$.

    ```
    Beam:   ---o-----------o-----------o--- (Supports at ends, P at mid-span)
            A             C             B
            R_A=P/2       P             R_B=P/2

    SFD:    ---- +P/2 ----|---- -P/2 ----
    ```

    ```
    BMD:    ---- 0 ----|---- PL/4 ----|---- 0 ---- (Triangular shape, max at mid-span)
    ```

### 6.2 Simply Supported Beam with Uniformly Distributed Load (w) over its Entire Length:

*   **Beam Setup:** Supported at A and B. UDL of $w$ per unit length over the entire span $L$.
*   **Reactions:** Due to symmetry, $R_A = R_B = \frac{wL}{2}$.
*   **Analysis:** Consider a section at distance $x$ from A. The load on the segment of length $x$ is $wx$.
    *   **Shear Force (V(x)):** $V(x) = R_A - wx = \frac{wL}{2} - wx = w(\frac{L}{2} - x)$.
        *   At $x=0$ (support A): $V(0) = \frac{wL}{2}$ (positive).
        *   At $x=L/2$ (mid-span): $V(L/2) = 0$.
        *   At $x=L$ (support B): $V(L) = -\frac{wL}{2}$ (negative).
    *   **Bending Moment (M(x)):** The moment due to $R_A$ is $R_A \times x = \frac{wL}{2}x$. The moment due to the UDL on the segment of length $x$ is $(wx) \times (\frac{x}{2}) = \frac{wx^2}{2}$. This latter moment causes hogging (negative).
        $M(x) = \frac{wL}{2}x - \frac{wx^2}{2} = \frac{w}{2}(Lx - x^2)$.
        *   At $x=0$ (support A): $M(0) = 0$.
        *   At $x=L$ (support B): $M(L) = 0$.
        *   Maximum bending moment occurs where $\frac{dM}{dx} = V(x) = 0$. This is at $x = L/2$.
        *   $M_{max} = M(L/2) = \frac{w}{2}(L(\frac{L}{2}) - (\frac{L}{2})^2) = \frac{w}{2}(\frac{L^2}{2} - \frac{L^2}{4}) = \frac{w}{2}(\frac{L^2}{4}) = \frac{wL^2}{8}$.

*   **SFD:** A straight line sloping from $+wL/2$ at A to $-wL/2$ at B, passing through zero at mid-span.
*   **BMD:** A parabolic curve, starting from 0 at A, reaching a maximum of $\frac{wL^2}{8}$ at mid-span, and returning to 0 at B. This is a sagging moment (positive).

    ```
    Beam:   ---o-------------------o--- (Supports at ends, UDL 'w' over entire span)
            A                       B
            R_A=wL/2                R_B=wL/2

    SFD:    ---- +wL/2 ----|---- 0 ----|---- -wL/2 ---- (Linear variation, zero at mid-span)
    ```

    ```
    BMD:    ---- 0 ----|---- wL^2/8 ----|---- 0 ---- (Parabolic variation, max at mid-span)
    ```

---

## 7. Key Concepts and Definitions

*   **Beam:** A structural member that carries loads by bending.
*   **Shear Force (V):** The algebraic sum of vertical forces acting on a section of the beam to one side of the section. It represents the tendency to shear the beam.
*   **Bending Moment (M):** The algebraic sum of the moments of all forces acting on a section of the beam to one side of the section. It represents the tendency to bend the beam.
*   **SFD (Shear Force Diagram):** A graphical plot of shear force along the beam's length.
*   **BMD (Bending Moment Diagram):** A graphical plot of bending moment along the beam's length.
*   **Support:** A device that holds a beam and exerts reactions to maintain equilibrium.
*   **Point Load:** A load concentrated at a single point.
*   **UDL (Uniformly Distributed Load):** A load spread uniformly over a length or the entire beam.
*   **Differential Relationships:** Equations connecting load, shear force, and bending moment: $\frac{dV}{dx} = -w(x)$ and $\frac{dM}{dx} = V(x)$.
*   **Maximum Bending Moment:** Occurs at sections where the shear force is zero or changes sign.

---

## 8. Practice Questions and Exercises

**Instructions:** Draw the SFD and BMD for the following beams and determine the maximum shear force and bending moment.

**Question 1:** A cantilever beam of length 3m is subjected to a point load of 10 kN at its free end.
    *   **Answer:**
        *   SFD: Constant $-10$ kN over the length.
        *   BMD: Linear variation from 0 at the free end to $-30$ kNm at the fixed end.
        *   Max Shear Force = 10 kN.
        *   Max Bending Moment = 30 kNm (at the fixed end).

**Question 2:** A cantilever beam of length 4m is subjected to a UDL of 5 kN/m over its entire length.
    *   **Answer:**
        *   SFD: Linear variation from 0 at the free end to $-20$ kN at the fixed end.
        *   BMD: Parabolic variation from 0 at the free end to $-\frac{5 \times 4^2}{2} = -40$ kNm at the fixed end.
        *   Max Shear Force = 20 kN.
        *   Max Bending Moment = 40 kNm (at the fixed end).

**Question 3:** A simply supported beam of length 5m carries a point load of 20 kN at its center.
    *   **Answer:**
        *   Reactions: $R_A = R_B = 10$ kN.
        *   SFD: $+10$ kN from A to center, $-10$ kN from center to B.
        *   BMD: Linear variation from 0 at A, to $+25$ kNm at the center, to 0 at B.
        *   Max Shear Force = 10 kN.
        *   Max Bending Moment = 25 kNm (at the center).

**Question 4:** A simply supported beam of length 6m carries a UDL of 4 kN/m over its entire length.
    *   **Answer:**
        *   Reactions: $R_A = R_B = \frac{4 \times 6}{2} = 12$ kN.
        *   SFD: Linear variation from $+12$ kN at A, to 0 at the center (3m), to $-12$ kN at B.
        *   BMD: Parabolic variation from 0 at A, to $\frac{4 \times 6^2}{8} = 18$ kNm at the center, to 0 at B.
        *   Max Shear Force = 12 kN.
        *   Max Bending Moment = 18 kNm (at the center).

---

## 9. Important Points to Remember

*   **Differential relationships:** $\frac{dV}{dx} = -w(x)$ and $\frac{dM}{dx} = V(x)$ are your primary tools for deriving SFD and BMD from the load configuration.
*   **Graphical interpretation:**
    *   $\frac{dV}{dx} = -w(x)$ means the slope of the SFD is equal to the negative of the UDL intensity.
    *   $\frac{dM}{dx} = V(x)$ means the slope of the BMD is equal to the shear force.
*   **Zero Shear:** Points where shear force is zero (or changes sign) are critical for finding maximum bending moments.
*   **Zero Moment:** Points where bending moment is zero are called points of contraflexure (inflection points), where the beam changes from sagging to hogging or vice-versa.
*   **Support Conditions:** The reactions at supports are crucial for starting the SFD and BMD analysis.
*   **Concentrated Loads:** Cause sudden jumps in the SFD and abrupt changes in the slope of the BMD.
*   **UDLs:** Cause a linearly varying SFD and a parabolic BMD.
*   **Cantilevers:** Maximum shear and moment are always at the fixed end.
*   **Simply Supported:** Maximum moment is often at the point of zero shear. Supports have zero moment.

---

## 10. Alignment with Course Outcomes

*   **CO1: Determine the stresses and strains in deformable bodies subjected to different types of external loads and thermal effects (Knowledge Level: K3):** While this topic doesn't directly calculate stresses and strains, SFD and BMD are precursors to calculating bending stresses ($\sigma = \frac{My}{I}$) and shear stresses in beams, which are addressed in other parts of the syllabus related to CO1 and CO3.
*   **CO2: Analyse the torsion of circular bars and draw the shear force and bending moment diagrams for beams (Knowledge Level: K4):** This section directly addresses the latter part of CO2, providing the methods and diagrams for SFD and BMD.
*   **CO3: Determine the stresses and deflections in beams subjected to transverse loads (Knowledge Level: K3):** SFD and BMD are fundamental to determining bending stresses and deflections in beams, making this section foundational for CO3.
*   **CO4: Determine analytically and graphically the principal stresses and planes for structural members subjected to loads and analyse the strength of columns (Knowledge Level: K4):** This topic is not directly related to CO4.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


## References Incorporated:

*   **Mechanics of Solids by R.K.Bansal:** The conventions for SFD/BMD and the differential relationships are standard and well-covered in Bansal. The examples used are typical of those found in this textbook.
*   **Mechanics of Solids by S. S. Bhavikatti:** Similar to Bansal, Bhavikatti provides clear explanations and examples of beam analysis, support conventions, and SFD/BMD.
*   **Strength of Materials by Surendra Singh & Rattan:** These texts also offer comprehensive coverage of beam classification, load types, and the fundamental concepts of shear force and bending moment diagrams.
*   **Mechanics of Materials by R. C. Hibbeler, Beer & Johnston, Pytel & Kiusalaas:** These internationally recognized textbooks provide rigorous derivations and a wealth of examples consistent with the principles discussed here, reinforcing the analytical approach.

These notes provide a structured approach to understanding the behavior of beams under various loading conditions, forming a critical basis for further analysis in Mechanics of Solids.