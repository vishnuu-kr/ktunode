---
title: "Shear force and bending moment diagrams of cantilever beams, simply supported beams and overhanging beams for different type of loads"
subject: "MECHANICS OF SOLIDS"
module: "Module 2: Beams – different types"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1ee0feb4799d95e839f9"
status: "completed"
scrapedAt: "2026-05-20T17:46:21.942Z"
---
# Mechanics of Solids: Module 2 - Beams: Shear Force and Bending Moment Diagrams

Welcome, everyone! Today, we embark on a crucial journey into the world of beams, specifically focusing on how internal forces – shear force and bending moment – distribute across them under various loading conditions. Understanding these diagrams is fundamental to our study of mechanics of solids. Why? Because it's through these diagrams that we can predict where a beam is most likely to fail and how it will deform. This directly connects to our course outcomes: by understanding these distributions (CO2), we can then calculate the stresses and strains they cause (CO3), and ultimately design structures to carry loads safely (CO6). Think of it as diagnosing the internal stress of a building's support beam before it shows any visible cracks.

Our focus today will be on three common types of beams:
1.  **Cantilever Beams:** Fixed at one end, free at the other.
2.  **Simply Supported Beams:** Supported at both ends.
3.  **Overhanging Beams:** Simply supported at two points but with portions extending beyond the supports.

We’ll explore these beam types under different kinds of loads: concentrated (point) loads, uniformly distributed loads (UDLs), and uniformly varying loads (UVLs).

## 1. Understanding Shear Force and Bending Moment

Before we dive into the diagrams, let’s clarify what shear force and bending moment actually are. Imagine you have a beam, and you slice it transversely (perpendicular to its length). What forces and moments are acting across that cut surface to keep the two pieces in equilibrium?

### Shear Force (SF)

Shear force at any section of a beam is the algebraic sum of all vertical forces acting on either side of that section. Think of it as the tendency for one part of the beam to slide vertically relative to the adjacent part.

*   **Analogy:** Imagine you're trying to cut a loaf of bread with a knife. The force you apply sideways, trying to make the knife slip through, is analogous to shear.
*   **Sign Convention:** A common convention is to consider forces acting upwards on the left of the section as positive shear, and downwards on the left as negative. Alternatively, forces that tend to rotate the segment clockwise are positive, and counter-clockwise are negative. We'll stick to the first convention for consistency, as seen in texts like Bansal's "A Text book of Strength of Materials."
*   **CO Connection:** This is the very foundation of understanding internal forces (CO1) and how beams respond to loads (CO2).

### Bending Moment (BM)

Bending moment at any section of a beam is the algebraic sum of all moments of the forces acting on either side of that section about that section. It represents the tendency of the forces to bend the beam.

*   **Analogy:** Think of trying to bend a ruler. The force you apply creates a bending effect. The bending moment quantifies this effect. A beam subjected to a bending moment will either sag (tension at the bottom, compression at the top) or hog (tension at the top, compression at the bottom).
*   **Sign Convention:** A moment causing the beam to sag or develop a "smiley face" curvature (tension at the bottom) is typically taken as positive (sagging moment). A moment causing the beam to hog or develop a "frowny face" curvature (tension at the top) is taken as negative (hogging moment). This is a standard convention found in most materials science texts, including Punmia, Jain, and Jain.
*   **CO Connection:** Understanding bending moments is crucial for calculating stresses and strains due to bending (CO3) and for determining the capacity of structural elements (CO6).

### The Relationship: The Fundamental Link

There's a crucial relationship between the shear force and the bending moment:

*   The rate of change of bending moment is equal to the shear force. Mathematically, $\frac{dM}{dx} = V$.
*   The rate of change of shear force is equal to the intensity of the distributed load. Mathematically, $\frac{dV}{dx} = -w$ (where $w$ is the downward load intensity).

These relationships are vital because if you know the shear force diagram, you can derive the bending moment diagram, and vice-versa. This is a key area where exam questions often test your understanding (CO3, CO6).

## 2. Shear Force and Bending Moment Diagrams for Different Beam Types

Now, let’s apply these concepts to our beam types and loads. The diagrams we draw will visually represent how the shear force and bending moment vary along the length of the beam.

### 2.1 Cantilever Beams

A cantilever beam is fixed at one end and completely free at the other. This means the free end has no external forces or moments applied, and it cannot have any reactions from supports. This simplicity makes it a great starting point.

#### 2.1.1 Cantilever with a Point Load at the Free End

Imagine a diving board fixed to the pool deck, with a person standing at the end. This is our scenario.

*   **Setup:** Let the cantilever beam be fixed at point A and free at point B, with a point load $W$ acting downwards at B. Let the length of the beam be $L$.
*   **Shear Force Diagram (SFD):**
    *   Consider any section at a distance $x$ from the free end B.
    *   The only force to the right of the section is the load $W$ acting downwards.
    *   Following our convention (downward on the right is positive shear), the shear force $V$ at any section is $+W$.
    *   This means the SF is constant and positive across the entire beam length.
    *   At the free end (B), SF = $W$. At the fixed end (A), SF = $W$.
    *   The SFD will be a rectangle.
*   **Bending Moment Diagram (BMD):**
    *   The moment at section $x$ from the free end is caused by the load $W$ acting at a distance $x$ from the section.
    *   The moment is $M = W \times x$. This moment tends to bend the beam downwards, causing tension at the top fibers and compression at the bottom. So, it's a hogging moment, which we'll take as negative.
    *   $M = -Wx$.
    *   At the free end (B, where $x=0$), $M = 0$.
    *   At the fixed end (A, where $x=L$), $M = -WL$.
    *   The BMD will be a straight line, starting from zero at the free end and reaching a maximum hogging moment of $-WL$ at the fixed end.
*   **Key Takeaway:** The maximum shear force and maximum bending moment occur at the fixed end for a cantilever with a point load at the free end. Remember this – fixed ends are crucial!

#### 2.1.2 Cantilever with a Uniformly Distributed Load (UDL)

Think of a balcony cantilevered out from a building, with its entire surface covered by concrete, making the load spread evenly.

*   **Setup:** A cantilever beam of length $L$, fixed at A, free at B, with a UDL of intensity $w$ per unit length over its entire span.
*   **Shear Force Diagram (SFD):**
    *   Consider a section at distance $x$ from the free end B.
    *   The load to the right of the section is a distributed load of intensity $w$ over a length $x$. The total load is $w \times x$.
    *   This downward load causes a positive shear at the section.
    *   So, $V = wx$.
    *   At the free end (B, $x=0$), $V = 0$.
    *   At the fixed end (A, $x=L$), $V = wL$.
    *   The SFD will be a straight line, starting from zero at the free end and increasing linearly to $wL$ at the fixed end.
*   **Bending Moment Diagram (BMD):**
    *   Consider a section at distance $x$ from the free end B.
    *   The distributed load to the right of the section is $w$ per unit length, acting over a length $x$.
    *   The total downward load is $wx$. This load can be considered to act at the centroid of the distributed load, which is at a distance $x/2$ from the section.
    *   The moment caused by this load is $(wx) \times (x/2) = \frac{wx^2}{2}$.
    *   This moment is hogging (negative).
    *   So, $M = -\frac{wx^2}{2}$.
    *   At the free end (B, $x=0$), $M = 0$.
    *   At the fixed end (A, $x=L$), $M = -\frac{wL^2}{2}$.
    *   Since the formula involves $x^2$, the BMD will be a parabolic curve, starting from zero at the free end and reaching a maximum hogging moment of $-\frac{wL^2}{2}$ at the fixed end.
*   **Key Takeaway:** For a cantilever with UDL, the shear force is zero at the free end and maximum at the fixed end. The bending moment is zero at the free end and maximum (hogging) at the fixed end. This parabolic variation of BM is very common and important to recognize, as seen in Shah & Junnarkar's detailed examples.

#### 2.1.3 Cantilever with a Point Load at an Intermediate Point

Let's say a support bracket for a shelf is fixed at one end, and you place a heavy book not at the very end, but a bit inwards.

*   **Setup:** Cantilever beam fixed at A, free at B, length $L$. Point load $W$ at a distance $a$ from the fixed end (or $L-a$ from the free end).
*   **Shear Force Diagram (SFD):**
    *   For the section between the free end (B) and the point of load application (distance $L-a$ from B): The shear force is $W$ (constant, positive).
    *   For the section between the point of load application and the fixed end (A): The shear force is still $W$ (constant, positive).
    *   The SFD will show a constant shear $W$ across the entire beam.
*   **Bending Moment Diagram (BMD):**
    *   For the section between the free end (B) and the point of load application (distance $x$ from B, where $x < L-a$): The moment is caused by $W$ at a distance $x$. So, $M = -Wx$. This varies linearly from 0 at B to $-W(L-a)$ at the point of load.
    *   For the section between the point of load application and the fixed end (A) (distance $x'$ from B, where $x' > L-a$): The moment is caused by $W$ at a distance $x'$. So, $M = -Wx'$. This part of the BMD continues linearly.
    *   The maximum hogging moment occurs at the fixed end (A), where $x' = L$, so $M = -WL$.
    *   The BMD will be linear, with the slope changing at the point of load application. The maximum moment is at the fixed end.
*   **Key Takeaway:** The shear is constant. The bending moment is maximum at the fixed end and varies linearly.

### 2.2 Simply Supported Beams

A simply supported beam is supported at both ends. These supports typically allow rotation but prevent vertical displacement.

#### 2.2.1 Simply Supported Beam with a Point Load at the Mid-Span

Imagine a simple plank of wood supported at two ends, with someone standing exactly in the middle.

*   **Setup:** A simply supported beam of length $L$, supported at A and B. A point load $W$ acts downwards at the mid-span ($L/2$).
*   **Reactions:** Due to symmetry, the reactions at A ($R_A$) and B ($R_B$) will be equal.
    *   Sum of vertical forces = 0: $R_A + R_B - W = 0$.
    *   Sum of moments about A = 0: $R_B \times L - W \times (L/2) = 0 \implies R_B = W/2$.
    *   Therefore, $R_A = W/2$.
*   **Shear Force Diagram (SFD):**
    *   Consider a section to the left of the load (0 to $L/2$): The only force to consider (e.g., on the left side) is $R_A$ acting upwards. So, $V = +R_A = +W/2$.
    *   Consider a section to the right of the load ($L/2$ to $L$): The forces to the left of the section are $R_A$ (up) and $W$ (down). So, $V = +R_A - W = +W/2 - W = -W/2$.
    *   The SFD will show a constant $+W/2$ from A to the mid-span, and then it drops to $-W/2$ and remains constant until B.
*   **Bending Moment Diagram (BMD):**
    *   Consider a section at a distance $x$ from the left support A, where $x < L/2$: The moment is caused by $R_A$ acting at distance $x$. This moment is causing sagging (positive).
    *   $M = R_A \times x = (W/2) \times x$. This is a linear variation.
    *   At $x=0$ (support A), $M=0$.
    *   At $x=L/2$ (mid-span), $M = (W/2) \times (L/2) = WL/4$. This is the maximum bending moment.
    *   For a section to the right of the load (distance $x$ from A, where $x > L/2$): The moment is $R_A \times x$ (positive) minus the moment due to $W$ at $(x - L/2)$ (negative). $M = R_A \times x - W \times (x - L/2) = (W/2)x - Wx + WL/2 = WL/2 - (W/2)x$.
    *   At $x=L/2$, $M = WL/2 - W/2(L/2) = WL/2 - WL/4 = WL/4$.
    *   At $x=L$ (support B), $M = WL/2 - W/2(L) = WL/2 - WL/2 = 0$.
    *   The BMD will be a triangle, peaking at $WL/4$ at the mid-span and being zero at the supports. This shape is characteristic of a point load at the center of a simply supported beam.

#### 2.2.2 Simply Supported Beam with Uniformly Distributed Load (UDL)

Picture a bridge deck with a uniform layer of asphalt, supported at its ends.

*   **Setup:** Simply supported beam of length $L$ over supports A and B, with a UDL of intensity $w$ per unit length over its entire span.
*   **Reactions:** The total load is $wL$. By symmetry, the reactions are equal. $R_A = R_B = wL/2$.
*   **Shear Force Diagram (SFD):**
    *   Consider a section at distance $x$ from the left support A ($0 < x < L$).
    *   The forces to the left of the section are $R_A$ (up) and the UDL over length $x$ (down). The load from UDL is $wx$.
    *   So, $V = R_A - wx = wL/2 - wx$.
    *   At $x=0$ (support A), $V = wL/2$.
    *   At $x=L$ (support B), $V = wL/2 - wL = -wL/2$.
    *   The SFD starts at $wL/2$ at support A, decreases linearly, passes through zero at the mid-span ($x=L/2$ where $V = wL/2 - w(L/2) = 0$), and ends at $-wL/2$ at support B.
*   **Bending Moment Diagram (BMD):**
    *   Consider a section at distance $x$ from the left support A ($0 < x < L$).
    *   The moment is due to $R_A$ and the UDL over length $x$.
    *   Moment from $R_A$: $R_A \times x = (wL/2)x$ (sagging, positive).
    *   Moment from UDL: The load over length $x$ is $wx$, acting at $x/2$ from the section. This causes hogging (negative). Moment = $(wx) \times (x/2) = wx^2/2$.
    *   Total Moment $M = (wL/2)x - wx^2/2$.
    *   At $x=0$ (support A), $M = 0$.
    *   At $x=L$ (support B), $M = (wL/2)L - wL^2/2 = wL^2/2 - wL^2/2 = 0$.
    *   To find the maximum moment, we set $dV/dx = -w$ and $dM/dx = V$. The maximum moment occurs where $V=0$, which is at $x=L/2$ (the mid-span).
    *   At $x=L/2$, $M_{max} = (wL/2)(L/2) - w(L/2)^2/2 = wL^2/4 - w(L^2/4)/2 = wL^2/4 - wL^2/8 = wL^2/8$.
    *   The BMD is a parabolic curve, zero at the supports and reaching a maximum sagging moment of $wL^2/8$ at the mid-span. This parabolic shape for UDL is a hallmark, as thoroughly explained in R.K. Bansal.

#### 2.2.3 Simply Supported Beam with a Uniformly Varying Load (UVL)

This is a bit more complex. Imagine a triangular load, like a pile of sand that's highest on one side and tapers to zero at the other.

*   **Setup:** Simply supported beam of length $L$. Let's consider a UVL that varies linearly from zero at support A to $w_0$ at support B.
*   **Reactions:**
    *   Total load $W = $ Area of the triangle $= (1/2) \times L \times w_0 = w_0L/2$.
    *   The resultant load acts at the centroid of the triangle, which is at $2L/3$ from the zero end (A) and $L/3$ from the $w_0$ end (B).
    *   $R_A + R_B = W = w_0L/2$.
    *   Taking moments about A: $R_B \times L - W \times (2L/3) = 0 \implies R_B \times L - (w_0L/2) \times (2L/3) = 0$.
    *   $R_B \times L = w_0L^2/3 \implies R_B = w_0L/3$.
    *   $R_A = W - R_B = w_0L/2 - w_0L/3 = w_0L/6$.
*   **Shear Force Diagram (SFD):**
    *   Consider a section at distance $x$ from A. The load intensity at this point is $w = w_0(x/L)$.
    *   The load to the left of the section is the area of a smaller triangle (intensity $w_0(x/L)$ over length $x$).
    *   Total load to the left = $(1/2) \times x \times w_0(x/L) = w_0x^2/(2L)$.
    *   The shear force $V$ at section $x$ is $R_A$ minus the load to the left.
    *   $V = w_0L/6 - w_0x^2/(2L)$. This is a quadratic variation for shear.
    *   At $x=0$, $V = w_0L/6$ (equal to $R_A$).
    *   At $x=L$, $V = w_0L/6 - w_0L^2/(2L) = w_0L/6 - w_0L/2 = -w_0L/3$ (equal to $-R_B$).
    *   The SFD starts at $R_A$, decreases quadratically, and ends at $-R_B$.
*   **Bending Moment Diagram (BMD):**
    *   Consider a section at distance $x$ from A.
    *   Moment from $R_A$: $M_{R_A} = R_A \times x = (w_0L/6)x$ (positive).
    *   Moment from the UVL to the left: The load is $w_0x^2/(2L)$, acting at the centroid of this triangular load, which is $x/3$ from the section.
    *   Moment from UVL: $M_{UVL} = -(w_0x^2/(2L)) \times (x/3) = -w_0x^3/(6L)$ (negative).
    *   Total Moment $M = (w_0L/6)x - w_0x^3/(6L)$. This is a cubic variation for moment.
    *   At $x=0$, $M=0$. At $x=L$, $M=0$.
    *   Maximum moment occurs where $dV/dx = -w$. From the shear equation $V = w_0L/6 - w_0x^2/(2L)$, we have $dV/dx = -2w_0x/(2L) = -w_0x/L$. This is the intensity of the load at section x, as expected. The shear is zero when $w_0L/6 = w_0x^2/(2L) \implies x^2 = L^2/3 \implies x = L/\sqrt{3}$. This is where the maximum moment occurs.
    *   Substituting $x=L/\sqrt{3}$ into the moment equation gives the maximum bending moment. This is an important calculation, often tested. (Refer to advanced texts like Gere & Timoshenko for derivation details on UVLs).

### 2.3 Overhanging Beams

These are beams supported at two points but extending beyond one or both supports. They are essentially combinations of simply supported beams with cantilevers.

*   **Setup:** Imagine a balcony where the supporting beams are also simple supports, but the balcony slab extends beyond these supports.
*   **Key Features:** Overhanging beams can experience both sagging moments (in the span between supports) and hogging moments (in the overhang sections).
*   **Analysis Approach:** The general procedure is the same:
    1.  Calculate reactions at the supports.
    2.  Determine SFD and BMD for each segment.
    3.  Pay close attention to points where the shear force is zero (for maximum bending moment) and points where the bending moment is zero (points of contraflexure or inflection).
*   **Example: Simply Supported Beam with One End Overhanging**
    *   Let a simply supported beam of length $L$ have an overhang of length $a$ at end B. The supports are at A and C.
    *   Consider a point load $W$ at the free end of the overhang (point D, at $L+a$ from A).
    *   First, find reactions $R_A$ and $R_C$.
        *   Sum of moments about A = 0: $R_C \times L - W \times (L+a) = 0 \implies R_C = W(L+a)/L$.
        *   Sum of vertical forces = 0: $R_A + R_C - W = 0 \implies R_A = W - R_C = W - W(L+a)/L = (WL - WL - Wa)/L = -Wa/L$.
        *   Wait, $R_A$ is negative! This means the support A would need to exert an upward force to counteract the tendency of the beam to lift at A due to the overhang load. In many practical problems, the load might be distributed such that the reactions are positive. If we have a load *only* on the overhang, it will create a lifting tendency at the support opposite the overhang. If there's a load between supports, it will help keep reactions positive.
        *   Let's consider a more common scenario: a simply supported beam with a UDL $w$ over its entire length $L+a$, with supports at A and C ($L$ apart), and an overhang of $a$ at B.
            *   Total load $= w(L+a)$.
            *   $R_A + R_C = w(L+a)$.
            *   Moments about A: $R_C \times L - w(L+a) \times (L+a)/2 = 0 \implies R_C = w(L+a)^2/(2L)$.
            *   $R_A = w(L+a) - R_C = w(L+a) - w(L+a)^2/(2L) = w(L+a) [1 - (L+a)/(2L)] = w(L+a) [(2L-L-a)/(2L)] = w(L+a)(L-a)/(2L)$.
            *   Notice that if $a > L$, $R_A$ becomes negative, which signifies the beam would lift off support A without an external downward force.
    *   **SFD and BMD:** You would then analyze sections:
        *   From A to C (simply supported part).
        *   From C to the end of the overhang.
        *   In the overhang section, the moment will be hogging (negative), and the shear force will be related to the load in the overhang.
        *   In the span AC, the moment will generally be sagging (positive), and you will find a point of contraflexure where the bending moment changes sign. This is a critical point.
*   **CO Connection:** Overhanging beams introduce the concept of hogging moments and points of contraflexure, deepening our understanding of how loads affect beam behavior (CO2) and how to calculate stresses in more complex configurations (CO3). Finding these points of zero moment is crucial for structural design.

## 3. Points of Contraflexure (Inflection Points)

These are extremely important! A point of contraflexure is a point on the beam where the bending moment changes its sign (from positive to negative or vice versa).

*   **What does it mean?** At these points, the curvature of the beam changes. The beam goes from sagging to hogging, or vice versa.
*   **How to find them?** Simply set the bending moment equation ($M$) to zero and solve for $x$.
*   **Significance:** These points are critical in design because the material at the outer fiber is neither in tension nor in compression due to bending at that exact point. However, regions around these points still experience stress.
*   **Example:** In a simply supported beam with an overhang, the point where the bending moment crosses zero within the main span is a point of contraflexure.

## 4. Summarizing Key Concepts and Exam Tips

*   **Relationship between V and M:** Always remember $\frac{dM}{dx} = V$. This means the slope of the BMD is equal to the shear force at that point.
    *   Where $V=0$, the BMD has a horizontal tangent (maximum or minimum BM).
    *   Where $V$ is constant, the BMD is a straight line.
    *   Where $V$ varies linearly, the BMD is parabolic.
    *   Where $V$ is parabolic, the BMD is cubic.
*   **Relationship between Load and V:** $\frac{dV}{dx} = -w$.
    *   Where there's a point load, the SFD jumps by the magnitude of the load.
    *   Where there's a UDL, the SFD is linear.
    *   Where there's a UVL, the SFD is parabolic.
*   **Maximum Bending Moment:** Usually occurs where the Shear Force is zero, *or* at a point load, *or* at a support (though BM is zero at simple supports).
*   **Area under SFD:** The change in bending moment between two points is equal to the area under the SFD between those points. $\Delta M = \int V dx$. This is another powerful tool for constructing BMDs, especially from SFDs.
*   **Sign Conventions:** Be consistent! This is where many students make mistakes. Stick to sagging = positive, hogging = negative for BM, and your chosen convention for SF.
*   **Visualizing:** Always try to sketch the deflected shape of the beam. This helps in understanding the sagging and hogging. A sagging beam has a "U" shape, a hogging beam has an inverted "U" shape.

**CO Alignment Recap:**

*   **CO1 (Recall terms):** SF, BM, cantilever, simply supported, overhanging, UDL, UVL, point load, reactions, point of contraflexure.
*   **CO2 (Explain behavior):** SFD and BMD visually explain how the beam responds internally to external loads.
*   **CO3 (Calculate stresses):** The maximum bending moment ($M_{max}$) and maximum shear force ($V_{max}$) are directly used to calculate the maximum bending stress ($\sigma = M_{max}y/I$) and maximum shear stress ($\tau = V_{max}Q/(Ib)$).
*   **CO6 (Analyze/proportion):** By finding $M_{max}$ and $V_{max}$, engineers can choose beam cross-sections that can safely withstand these internal forces, preventing failure.

## Sample Questions with Answers

**1. Conceptual Question:** In a simply supported beam subjected to a central point load, where does the bending moment achieve its maximum value?

**Answer:** The bending moment achieves its maximum value at the center of the beam, directly under the point load. This is because the shear force diagram crosses zero at this point, and the bending moment is maximum where the shear force is zero. (Relates to CO2, CO3).

**2. Exam-Oriented Question:** A cantilever beam of length 4m is subjected to a uniformly distributed load of 10 kN/m over its entire length. Draw the Shear Force Diagram and Bending Moment Diagram for the beam and determine the maximum bending moment.

**Solution:**
*   **Beam Type:** Cantilever, Length $L = 4$ m, UDL $w = 10$ kN/m.
*   **SFD:** For a cantilever with UDL, $V = wx$ from the free end.
    *   At free end (x=0), $V = 0$.
    *   At fixed end (x=4m), $V = 10 \text{ kN/m} \times 4 \text{ m} = 40$ kN.
    *   The SFD is a straight line starting from 0 and reaching 40 kN at the fixed end. (CO2)
*   **BMD:** For a cantilever with UDL, $M = -wx^2/2$ from the free end.
    *   At free end (x=0), $M = 0$.
    *   At fixed end (x=4m), $M = -10 \text{ kN/m} \times (4 \text{ m})^2 / 2 = -10 \times 16 / 2 = -80$ kNm.
    *   The BMD is a parabolic curve starting from 0 and reaching -80 kNm at the fixed end. (CO2)
*   **Maximum Bending Moment:** The maximum bending moment occurs at the fixed end and its value is 80 kNm (hogging). This value is critical for stress calculations. ($\sigma_{max} = M_{max}y/I$) (CO3, CO6)

**3. Conceptual Question:** What is a point of contraflexure? Explain its significance in beam analysis.

**Answer:** A point of contraflexure (or inflection point) is a point on a beam where the bending moment is zero and changes its sign (from positive to negative, or vice versa).
*   **Significance:** It indicates a change in the curvature of the beam. Where the moment is zero, the bending stress at the extreme fibers is also zero (assuming $I$ and $y$ are non-zero). This point is crucial for structural design, as it helps in identifying regions of potentially lower bending stress and can influence where supports are placed or where structural reinforcements might be concentrated in more complex structures. (Relates to CO2, CO3, CO6).

**4. Exam-Oriented Question:** A simply supported beam of length 8m carries a point load of 6 kN at 2m from the left support and another point load of 8 kN at 3m from the right support. Calculate the reactions at the supports and draw the SFD and BMD.

**Solution:**
*   **Setup:** Beam length $L=8$m. Load $W_1 = 6$ kN at 2m from A. Load $W_2 = 8$ kN at 3m from B (i.e., at 5m from A). Supports at A and B.
*   **Reactions:** Let $R_A$ and $R_B$ be the reactions.
    *   Sum of vertical forces: $R_A + R_B = W_1 + W_2 = 6 + 8 = 14$ kN.
    *   Sum of moments about A: $R_B \times 8 - W_1 \times 2 - W_2 \times 5 = 0$
    *   $8R_B - 6 \times 2 - 8 \times 5 = 0$
    *   $8R_B - 12 - 40 = 0 \implies 8R_B = 52 \implies R_B = 52/8 = 6.5$ kN.
    *   $R_A = 14 - R_B = 14 - 6.5 = 7.5$ kN.
*   **SFD:**
    *   From A to 2m: $V = +R_A = +7.5$ kN (constant).
    *   At 2m (due to $W_1$): SF drops by 6 kN. $V = 7.5 - 6 = 1.5$ kN.
    *   From 2m to 5m: $V = +1.5$ kN (constant).
    *   At 5m (due to $W_2$): SF drops by 8 kN. $V = 1.5 - 8 = -6.5$ kN.
    *   From 5m to B: $V = -6.5$ kN (constant).
    *   At B: SF becomes 0 as $R_B = 6.5$ kN acts upwards.
*   **BMD:**
    *   From A to 2m: $M = R_A \times x = 7.5x$. Max at 2m: $M = 7.5 \times 2 = 15$ kNm.
    *   From 2m to 5m: $M = R_A \times x - W_1 \times (x-2) = 7.5x - 6(x-2) = 7.5x - 6x + 12 = 1.5x + 12$. Max at 5m: $M = 1.5 \times 5 + 12 = 7.5 + 12 = 19.5$ kNm.
    *   From 5m to B: $M = R_A \times x - W_1 \times (x-2) - W_2 \times (x-5) = 7.5x - 6(x-2) - 8(x-5) = 7.5x - 6x + 12 - 8x + 40 = -6.5x + 52$. Max at B (x=8m): $M = -6.5 \times 8 + 52 = -52 + 52 = 0$.
*   **Maximum Bending Moment:** The maximum bending moment is 19.5 kNm, occurring at 5m from the left support. (CO3, CO6).

This completes our foundational understanding of SFD and BMD for common beam types and loads. Mastering these diagrams is essential for all subsequent topics in mechanics of solids and structural analysis. Keep practicing!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
