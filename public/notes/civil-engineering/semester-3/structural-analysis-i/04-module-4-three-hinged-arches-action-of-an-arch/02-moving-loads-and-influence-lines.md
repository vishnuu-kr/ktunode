---
title: "Moving Loads and influence lines"
subject: "STRUCTURAL ANALYSIS - I"
module: "Module 4: Three Hinged Arches:  Action of an arch "
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810750"
status: "completed"
scrapedAt: "2026-05-20T18:41:49.464Z"
---
# STRUCTURAL ANALYSIS - I: Module 4: Three Hinged Arches: Action of an Arch

## Topic: Moving Loads and Influence Lines

---

### Learning Outcomes:

*   **Understand the concept of moving loads and their impact on structural behavior.**
*   **Define and explain the principle and construction of influence lines for arches.**
*   **Analyze the bending moment, shear force, and thrust in a three-hinged arch under moving loads.**
*   **Determine the maximum and minimum values of forces and moments due to moving loads using influence lines.**
*   **Apply influence line concepts to solve practical problems involving three-hinged arches subjected to moving loads.**

---

### 1. Introduction to Moving Loads and Their Impact

**Concept:**

*   Moving loads are loads that can change their position along the span of a structure.
*   Examples include:
    *   Vehicular traffic on bridges.
    *   Cranes on overhead runways.
    *   Trains on railway bridges.
*   The effect of a moving load is not constant; it varies as the load traverses the structure.
*   To ensure structural safety and economy, we need to determine the *maximum possible effect* (e.g., maximum bending moment, maximum shear force, maximum thrust) at any point in the structure.

**Impact on Arches:**

*   Unlike simply supported beams, arches carry loads primarily through **thrust**, which is a compressive force.
*   Bending moments and shear forces are also present, but their magnitudes can be significantly reduced compared to beams under similar loading conditions, especially for parabolic or catenary arches with self-weight.
*   Moving loads can induce fluctuating bending moments, shear forces, and thrusts at different sections of the arch.
*   The location of the moving load that produces the maximum effect at a particular section is crucial for design.

---

### 2. Influence Lines: Principle and Construction for Arches

**Definition of an Influence Line:**

*   An influence line is a graphical representation that shows the variation of a particular response (e.g., reaction, shear force, bending moment, thrust) at a *fixed point* in a structure as a *unit load moves* across the structure.
*   The x-axis represents the position of the unit moving load.
*   The y-axis represents the magnitude of the response at the fixed point.

**Key Principles for Influence Lines:**

*   **Unit Load:** We consider a load of magnitude 1 moving across the span.
*   **Fixed Point:** We are interested in the response at a specific location (e.g., mid-span of the arch rib).
*   **Varied Load Position:** The load's position changes continuously.

**Construction of Influence Lines for Three-Hinged Arches:**

The general procedure involves applying a unit load at various points along the arch and calculating the desired response at the point of interest.

**Types of Responses for which Influence Lines are Constructed:**

*   **Vertical Reactions:** ( at supports)
*   **Horizontal Thrust:** ($H$)
*   **Shear Force:** ($V$) at a section
*   **Bending Moment:** ($M$) at a section

**Specifics for Three-Hinged Arches:**

The presence of hinges simplifies the analysis. The arch can be treated as two curved beams connected at the crown hinge.

**Procedure for Constructing Influence Lines:**

1.  **Apply a Unit Load:** Place a unit load (magnitude = 1) at a specific location on the arch span.
2.  **Analyze the Arch:**
    *   **For Reactions:** Use the equations of static equilibrium. The sum of vertical forces, horizontal forces, and moments must be zero.
    *   **For Thrust:** This is often the most critical response for arches. The horizontal thrust ($H$) is usually determined by considering the bending moment at the crown hinge (which is zero).
        *   Consider the entire arch or one half as a free body.
        *   Sum of moments about one support = 0 (to find the vertical reaction).
        *   Sum of moments about the crown hinge = 0 (to find the horizontal thrust).
    *   **For Shear Force and Bending Moment:** Consider a section of the arch. The shear and moment at this section will depend on the reactions, the thrust, and the segment of the arch.
3.  **Record the Response:** Note the value of the reaction, thrust, shear, or bending moment at the point of interest.
4.  **Repeat for Various Load Positions:** Move the unit load to different positions along the arch span and repeat steps 1-3.
5.  **Plot the Influence Line:** Plot the calculated values of the response against the position of the unit load.

**Example: Influence Line for Horizontal Thrust (H) of a Symmetrical Three-Hinged Parabolic Arch**

Consider a parabolic arch with span $L$ and rise $h$.
The equation of the parabola is typically $y = \frac{4h}{L^2}x(L-x)$.

Let a unit load move from $x=0$ to $x=L$. We want to find the influence line for $H$ at the supports.

*   **Consider the entire arch as a free body:**
    *   Vertical reactions at supports A and B are $R_A$ and $R_B$.
    *   Horizontal thrust at supports A and B is $H$ (acting inwards).
    *   Let the unit load be at position $x_0$.

*   **Calculate Vertical Reactions:**
    *   Sum of vertical forces: $R_A + R_B - 1 = 0$ (if load is within the span).
    *   Sum of moments about support A: $R_B \cdot L - 1 \cdot x_0 = 0 \implies R_B = \frac{x_0}{L}$.
    *   Sum of moments about support B: $R_A \cdot L - 1 \cdot (L-x_0) = 0 \implies R_A = \frac{L-x_0}{L}$.

*   **Calculate Horizontal Thrust (H):**
    *   Consider the right half of the arch as a free body (from crown hinge C to support B).
    *   The crown hinge is at $x = L/2$ and $y = h$.
    *   The support B is at $x = L$ and $y = 0$.
    *   The horizontal thrust from the left half on the crown hinge is $H$ (acting rightwards).
    *   The horizontal thrust from the right half on the crown hinge is $H$ (acting leftwards).
    *   Let the unit load be at $x_0$.

    *   **Case 1: Unit load is between C and B ($L/2 \le x_0 \le L$).**
        *   Consider the right half. The forces acting are:
            *   Horizontal thrust $H$ at B (acting leftwards).
            *   Vertical reaction $R_B = x_0/L$ at B (acting upwards).
            *   The load of 1 at $x_0$ (acting downwards).
            *   Horizontal thrust from the left half at the crown hinge (acting rightwards).
        *   Take moments about support B:
            *   The moment due to $H$ at B is zero.
            *   The moment due to $R_B$ about B is zero.
            *   The moment due to the unit load about B is $-1 \cdot (L-x_0)$.
            *   The moment due to the horizontal thrust $H$ from the left half at the crown hinge (at $x=L/2$, $y=h$) about B is $H \cdot h$.
            *   This approach is not straightforward. A better approach is to use the property that the bending moment at the crown hinge is zero.

    *   **Alternative Method using Crown Hinge:**
        *   Consider the left half of the arch as a free body (from support A to crown hinge C).
        *   The horizontal thrust from the right half at the crown hinge is $H$ (acting leftwards).
        *   The horizontal thrust at support A is $H$ (acting inwards).
        *   The vertical reaction at support A is $R_A = (L-x_0)/L$.
        *   At the crown hinge, the bending moment $M_C = 0$.
        *   Consider the section just to the left of the crown hinge.
        *   Take moments about the crown hinge (C):
            *   Moment due to $R_A$ about C = $R_A \cdot (L/2)$.
            *   Moment due to the unit load (if $x_0 < L/2$) about C = $-1 \cdot (L/2 - x_0)$.
            *   Moment due to horizontal thrust $H$ at A about C = $-H \cdot h$.
            *   Moment due to horizontal thrust $H$ at C (acting left) about C = 0.

        *   For $x_0 \le L/2$: $R_A \cdot (L/2) - 1 \cdot (L/2 - x_0) - H \cdot h = 0$
            $\frac{L-x_0}{L} \cdot \frac{L}{2} - \frac{L-2x_0}{2} - Hh = 0$
            $\frac{L-x_0}{2} - \frac{L-2x_0}{2} - Hh = 0$
            $\frac{L-x_0 - L + 2x_0}{2} - Hh = 0$
            $\frac{x_0}{2} - Hh = 0 \implies H = \frac{x_0}{2h}$

        *   For $x_0 \ge L/2$: $R_A \cdot (L/2) - H \cdot h = 0$ (since the load is to the right of the crown hinge, its moment about C is zero for the left half considered).
            $\frac{L-x_0}{L} \cdot \frac{L}{2} - Hh = 0$
            $\frac{L-x_0}{2} - Hh = 0 \implies H = \frac{L-x_0}{2h}$

        *   **Combined Influence Line for H:**
            *   From $x_0=0$ to $x_0=L/2$: $H(x_0) = \frac{x_0}{2h}$ (linear increase).
            *   From $x_0=L/2$ to $x_0=L$: $H(x_0) = \frac{L-x_0}{2h}$ (linear decrease).
            *   The maximum value of $H$ occurs at $x_0 = L/2$, where $H_{max} = \frac{L/2}{2h} = \frac{L}{4h}$.

**Influence Line for Bending Moment (M) at a Section**

*   Let's consider a section at a distance $x$ from the left support.
*   We need to find the bending moment $M_x$ at this section due to a unit load at $x_0$.
*   The bending moment at a section in an arch is given by: $M_x = M_{beam} - H \cdot y_x$, where:
    *   $M_{beam}$ is the bending moment at section $x$ if the arch were a simply supported beam.
    *   $H$ is the horizontal thrust.
    *   $y_x$ is the vertical distance of the section from the line of thrust (or the horizontal axis of the arch, if the arch is parabolic and loaded symmetrically with its own weight).

*   **Construction:**
    1.  Construct the influence line for $M_{beam}$ at section $x$. This is a standard beam influence line.
    2.  Construct the influence line for $H$.
    3.  Construct the influence line for $y_x$. (This is simply the shape of the arch scaled such that the rise at the crown is 1, or the actual ordinates if we are using $y$ directly).
    4.  The influence line for $M_x$ is obtained by:
        $IL_{M_x} = IL_{M_{beam}} - IL_H \cdot y_x$

**Important Note:** For a parabolic arch supporting a uniform load (like its own weight), the line of thrust is parabolic and coincides with the arch rib. In this case, the bending moment due to self-weight is zero. However, moving loads introduce bending moments.

---

### 3. Analyzing Forces in a Three-Hinged Arch Under Moving Loads

Once the influence lines are constructed, we can determine the maximum and minimum values of forces and moments due to a *distributed* moving load or a *concentrated* moving load.

**Case 1: Concentrated Moving Load (e.g., a single vehicle wheel)**

*   Let a concentrated load $P$ move across the arch.
*   To find the maximum value of a particular response (e.g., $H$, $M_x$, $V_x$) at a fixed point:
    *   Multiply the value of the influence line at the position of the load by the magnitude of the load.
    *   To find the *absolute maximum* effect, find the position of the load that corresponds to the peak ordinates of the influence line.

*   **Maximum Horizontal Thrust ($H_{max}$):**
    *   Locate the position of the unit load on the $IL_H$ that gives the maximum ordinate ($IL_{H,max}$).
    *   If a load $P$ is applied at this position, the thrust will be $H = P \cdot IL_{H,max}$.
    *   If multiple concentrated loads are present, the total thrust is the sum of $P_i \cdot IL_H(x_i)$, where $x_i$ is the position of load $P_i$.

*   **Maximum Bending Moment ($M_{x,max}$) at Section x:**
    *   Locate the position of the unit load on the $IL_{M_x}$ that gives the maximum positive ordinate ($IL_{M_x,max}$).
    *   If a load $P$ is applied at this position, the maximum positive bending moment will be $M_{x,max\_pos} = P \cdot IL_{M_x,max\_pos}$.
    *   Similarly, find the minimum (most negative) ordinate ($IL_{M_x,min}$) and calculate the maximum negative bending moment $M_{x,max\_neg} = P \cdot IL_{M_x,min}$.
    *   The design bending moment at section $x$ will be the one with the largest absolute value.

**Case 2: Uniformly Distributed Moving Load (e.g., a train or lane loading)**

*   Let a uniformly distributed load of intensity $w$ move across the arch.
*   To find the total response at a fixed point, we integrate the product of the load intensity and the influence line ordinates over the loaded length.
*   Response = $\int w \cdot IL(x) dx$.

*   **Maximum Horizontal Thrust ($H_{max}$):**
    *   The thrust is maximum when the load covers the portion of the span where the $IL_H$ is positive.
    *   Identify the region of positive ordinates on the $IL_H$.
    *   Integrate $w \cdot IL_H(x)$ over this region.
    *   If the entire span has positive ordinates, the maximum thrust is $w \times (\text{Area under } IL_H)$.

*   **Maximum Bending Moment ($M_{x,max}$) at Section x:**
    *   The bending moment is maximum when the load covers the portion of the span where the $IL_{M_x}$ is positive, and minimum when it covers the portion where the $IL_{M_x}$ is negative.
    *   To find the maximum positive moment, apply the load $w$ only over the regions where $IL_{M_x}$ is positive. The maximum value will be $w \times (\text{Maximum positive area under } IL_{M_x})$.
    *   To find the maximum negative moment, apply the load $w$ only over the regions where $IL_{M_x}$ is negative. The maximum negative value will be $w \times (\text{Minimum negative area under } IL_{M_x})$.

---

### 4. Examples

**Example 1: Symmetrical Three-Hinged Parabolic Arch with Moving Load**

A three-hinged parabolic arch has a span of 40 m and a rise of 10 m. The arch is supported at the same level. A concentrated load of 50 kN moves across the span. Determine the maximum horizontal thrust.

**Solution:**

*   Span $L = 40$ m, Rise $h = 10$ m.
*   The influence line for horizontal thrust ($H$) for a parabolic arch is triangular, peaking at the center.
*   The equation for $H$ as a function of load position $x_0$ (from the left support) is:
    *   For $0 \le x_0 \le L/2$: $H(x_0) = \frac{x_0}{2h}$
    *   For $L/2 \le x_0 \le L$: $H(x_0) = \frac{L-x_0}{2h}$
*   The maximum thrust occurs when the load is at the crown hinge ($x_0 = L/2 = 20$ m).
*   $H_{max} = \frac{L/2}{2h} = \frac{20}{2 \times 10} = 1$.
    *   This means that when a unit load is at the crown, the horizontal thrust is 1 kN.
*   The maximum horizontal thrust due to a 50 kN load will be:
    $H_{max, 50kN} = 50 \text{ kN} \times IL_{H,max} = 50 \text{ kN} \times 1 = 50 \text{ kN}$.

**Example 2: Symmetrical Three-Hinged Parabolic Arch with Uniformly Distributed Moving Load**

Consider the same arch as Example 1. A uniformly distributed load of 20 kN/m moves across the span. Determine the maximum bending moment at a section 10 m from the left support.

**Solution:**

*   Span $L = 40$ m, Rise $h = 10$ m. Section $x = 10$ m.
*   First, we need to construct the influence line for bending moment at $x=10$ m.
*   The arch equation is $y = \frac{4h}{L^2}x(L-x) = \frac{4 \times 10}{40^2}x(40-x) = \frac{40}{1600}x(40-x) = \frac{1}{40}x(40-x)$.
*   The ordinate of the arch at $x=10$ m is $y_{10} = \frac{1}{40}(10)(40-10) = \frac{10 \times 30}{40} = \frac{300}{40} = 7.5$ m.

*   **Influence Line for $M_{beam}$ at $x=10$ m:**
    *   Consider the arch as a simply supported beam of span $L=40$ m.
    *   Place a unit load at $x_0$.
    *   For $x_0 \le 10$ m: $M_{beam, 10} = R_A \cdot 10 = (\frac{40-x_0}{40}) \cdot 10 = \frac{40-x_0}{4}$.
    *   For $10 \le x_0 \le 40$ m: $M_{beam, 10} = R_B \cdot (40-10) = (\frac{x_0}{40}) \cdot 30 = \frac{3x_0}{4}$.

*   **Influence Line for $H$:**
    *   For $0 \le x_0 \le 20$: $IL_H(x_0) = \frac{x_0}{2h} = \frac{x_0}{20}$.
    *   For $20 \le x_0 \le 40$: $IL_H(x_0) = \frac{40-x_0}{2h} = \frac{40-x_0}{20}$.

*   **Influence Line for $M_x$ at $x=10$ m:**
    *   $M_x = M_{beam} - H \cdot y_x$
    *   $IL_{M_{10}}(x_0) = IL_{M_{beam,10}}(x_0) - IL_H(x_0) \cdot y_{10}$
    *   $IL_{M_{10}}(x_0) = IL_{M_{beam,10}}(x_0) - IL_H(x_0) \cdot 7.5$

    *   **For $0 \le x_0 \le 10$ m:**
        $IL_{M_{10}}(x_0) = \frac{40-x_0}{4} - \frac{x_0}{20} \cdot 7.5 = 10 - \frac{x_0}{4} - \frac{7.5x_0}{20} = 10 - 0.25x_0 - 0.375x_0 = 10 - 0.625x_0$.
        *   At $x_0=0$, $IL_{M_{10}} = 10$.
        *   At $x_0=10$, $IL_{M_{10}} = 10 - 0.625(10) = 10 - 6.25 = 3.75$.

    *   **For $10 \le x_0 \le 20$ m:**
        $IL_{M_{10}}(x_0) = \frac{3x_0}{4} - \frac{x_0}{20} \cdot 7.5 = 0.75x_0 - 0.375x_0 = 0.375x_0$.
        *   At $x_0=10$, $IL_{M_{10}} = 0.375(10) = 3.75$ (matches).
        *   At $x_0=20$, $IL_{M_{10}} = 0.375(20) = 7.5$.

    *   **For $20 \le x_0 \le 40$ m:**
        $IL_{M_{10}}(x_0) = \frac{3x_0}{4} - \frac{40-x_0}{20} \cdot 7.5 = 0.75x_0 - (2 - \frac{x_0}{20}) \cdot 7.5 = 0.75x_0 - 15 + \frac{7.5x_0}{20} = 0.75x_0 - 15 + 0.375x_0 = 1.125x_0 - 15$.
        *   At $x_0=20$, $IL_{M_{10}} = 1.125(20) - 15 = 22.5 - 15 = 7.5$ (matches).
        *   At $x_0=40$, $IL_{M_{10}} = 1.125(40) - 15 = 45 - 15 = 30$.

*   **Analysis of the $IL_{M_{10}}$:**
    *   The ordinates are positive throughout the span (from 10 to 30).
    *   The maximum positive ordinate is 30 at $x_0 = 40$ m.
    *   The minimum ordinate is 3.75 at $x_0 = 10$ m.

*   **Maximum Bending Moment due to Uniformly Distributed Load (20 kN/m):**
    *   To get the maximum positive bending moment, the load should cover the region where the $IL_{M_{10}}$ is positive. In this case, the entire span has positive ordinates.
    *   Maximum positive moment = $w \times (\text{Area under } IL_{M_{10}})$
    *   Area = Area of trapezoid (0 to 10) + Area of triangle (10 to 20) + Area of trapezoid (20 to 40)
    *   Area = $[\frac{10+3.75}{2} \times 10] + [\frac{1}{2} \times 10 \times (7.5-3.75)] + [\frac{7.5+30}{2} \times 20]$
    *   Area = $[68.75] + [18.75] + [375] = 462.5$ m.
    *   Max. positive moment = $20 \text{ kN/m} \times 462.5 \text{ m} = 9250 \text{ kNm}$.

    *   To get the maximum negative bending moment, the load should cover the region where the $IL_{M_{10}}$ is negative. Since there are no negative ordinates, the maximum negative moment is zero.
    *   Therefore, the maximum bending moment at $x=10$ m is 9250 kNm (positive).

---

### 5. Practice Questions and Exercises

**Question 1:**
A three-hinged parabolic arch has a span of 60 m and a rise of 15 m. A single concentrated load of 80 kN moves across the arch. Determine the maximum horizontal thrust exerted by the arch.

**Question 2:**
For the same arch as in Question 1, determine the maximum bending moment at a section located 15 m from the left support.

**Question 3:**
A three-hinged semi-circular arch of radius $R$ is subjected to a uniformly distributed load of intensity $w$ per unit length moving across the span. Determine the influence line for the bending moment at the crown.

---

### Answers to Practice Questions

**Answer 1:**

*   Span $L = 60$ m, Rise $h = 15$ m.
*   For a parabolic arch, the maximum horizontal thrust due to a unit load occurs at the crown.
*   The value of the influence line for horizontal thrust at the crown ($x_0 = L/2$) is $IL_{H,max} = \frac{L/2}{2h} = \frac{30}{2 \times 15} = \frac{30}{30} = 1$.
*   Maximum horizontal thrust = Load $\times IL_{H,max} = 80 \text{ kN} \times 1 = 80 \text{ kN}$.

**Answer 2:**

*   Span $L = 60$ m, Rise $h = 15$ m. Section $x = 15$ m.
*   Arch equation: $y = \frac{4h}{L^2}x(L-x) = \frac{4 \times 15}{60^2}x(60-x) = \frac{60}{3600}x(60-x) = \frac{1}{60}x(60-x)$.
*   Ordinate at $x=15$ m: $y_{15} = \frac{1}{60}(15)(60-15) = \frac{15 \times 45}{60} = \frac{675}{60} = 11.25$ m.

*   **Influence Line for $M_{beam}$ at $x=15$ m:**
    *   For $0 \le x_0 \le 15$: $M_{beam, 15} = R_A \cdot 15 = (\frac{60-x_0}{60}) \cdot 15 = \frac{60-x_0}{4}$.
    *   For $15 \le x_0 \le 60$: $M_{beam, 15} = R_B \cdot (60-15) = (\frac{x_0}{60}) \cdot 45 = \frac{3x_0}{4}$.

*   **Influence Line for $H$:**
    *   For $0 \le x_0 \le 30$: $IL_H(x_0) = \frac{x_0}{2h} = \frac{x_0}{30}$.
    *   For $30 \le x_0 \le 60$: $IL_H(x_0) = \frac{60-x_0}{2h} = \frac{60-x_0}{30}$.

*   **Influence Line for $M_{15}$:** $IL_{M_{15}}(x_0) = IL_{M_{beam,15}}(x_0) - IL_H(x_0) \cdot y_{15}$

    *   **For $0 \le x_0 \le 15$:**
        $IL_{M_{15}}(x_0) = \frac{60-x_0}{4} - \frac{x_0}{30} \cdot 11.25 = 15 - 0.25x_0 - 0.375x_0 = 15 - 0.625x_0$.
        *   At $x_0=0$, $IL_{M_{15}} = 15$.
        *   At $x_0=15$, $IL_{M_{15}} = 15 - 0.625(15) = 15 - 9.375 = 5.625$.

    *   **For $15 \le x_0 \le 30$:**
        $IL_{M_{15}}(x_0) = \frac{3x_0}{4} - \frac{x_0}{30} \cdot 11.25 = 0.75x_0 - 0.375x_0 = 0.375x_0$.
        *   At $x_0=15$, $IL_{M_{15}} = 0.375(15) = 5.625$ (matches).
        *   At $x_0=30$, $IL_{M_{15}} = 0.375(30) = 11.25$.

    *   **For $30 \le x_0 \le 60$:**
        $IL_{M_{15}}(x_0) = \frac{3x_0}{4} - \frac{60-x_0}{30} \cdot 11.25 = 0.75x_0 - (2 - \frac{x_0}{30}) \cdot 11.25 = 0.75x_0 - 22.5 + \frac{11.25x_0}{30} = 0.75x_0 - 22.5 + 0.375x_0 = 1.125x_0 - 22.5$.
        *   At $x_0=30$, $IL_{M_{15}} = 1.125(30) - 22.5 = 33.75 - 22.5 = 11.25$ (matches).
        *   At $x_0=60$, $IL_{M_{15}} = 1.125(60) - 22.5 = 67.5 - 22.5 = 45$.

*   **Maximum bending moment calculation for a concentrated load of 80 kN:**
    *   The maximum positive ordinate on the $IL_{M_{15}}$ is 45 at $x_0 = 60$ m.
    *   Maximum positive bending moment = $80 \text{ kN} \times 45 = 3600 \text{ kNm}$.
    *   The minimum ordinate on the $IL_{M_{15}}$ is 5.625 at $x_0 = 15$ m.
    *   Maximum negative bending moment = $80 \text{ kN} \times 5.625 = 450 \text{ kNm}$ (this is the minimum value, so it's a negative moment of -450 kNm).
    *   The maximum bending moment (absolute value) is **3600 kNm**.

**Answer 3:**

*   For a three-hinged semi-circular arch of radius $R$, the crown is at the top, where $y = R$.
*   Let the arch span from $-R$ to $R$ along the x-axis, and the crown be at $(0, R)$.
*   Equation of the semi-circle: $x^2 + (y-R)^2 = R^2$.
*   Consider the left half of the arch as a free body.
*   Let a unit load be at $x_0$.
*   The horizontal thrust $H$ at the supports can be related to the bending moment at the crown hinge. The bending moment at the crown is zero.
*   Consider the left half from $x=-R$ to $x=0$. The vertical reaction at $x=-R$ is $R_A = (R-x_0)/2R$ (for $-R \le x_0 \le R$).
*   The equation of the arch rib for the left half can be written.
*   The influence line for bending moment at the crown ($M_C$) for a semi-circular arch with a unit load at $x_0$ is generally more complex than a parabolic arch. The analysis involves breaking the arch into segments and considering the thrust.

    *   **Simplified Approach:** For a semi-circular arch under a moving load, the influence line for bending moment at the crown will typically be parabolic, reaching a maximum when the load is at the crown. The exact shape depends on the integration.
    *   **Key Idea:** The bending moment at the crown is zero for the self-weight of the arch if it's a catenary or parabola. For moving loads, the bending moment at the crown is $M_C = M_{beam\_C} - H \cdot R$.
    *   The influence line for $M_{beam\_C}$ (moment at crown if it were a beam) as a unit load moves from $-R$ to $R$ will be a triangle peaking at $x_0=0$.
    *   The influence line for $H$ will be triangular, peaking at $x_0=0$.
    *   The resulting $IL_{M_C}$ will be the difference between a parabola and a product of two triangles, resulting in a complex curve.

    *   **To be precise:** For a unit load at $x_0$, the horizontal thrust $H$ is given by $H = \frac{1}{2R} \int_{-R}^{x_0} (R-y) dx$. The vertical reaction $R_A = \frac{R-x_0}{2R}$. The bending moment at the crown due to the load $1$ at $x_0$ and reaction $R_A$ and thrust $H$ must be zero.
    *   Taking moments about the crown for the left half: $M_C = R_A \cdot R - H \cdot R - (\text{moment due to load})$.
    *   The analysis for a semi-circular arch influence line is more involved and often requires calculus of variations or specific integration formulas. For exam purposes, understanding the qualitative shape (peaking at the center for most responses) and the method of calculation is key.

---

### 6. Important Points to Remember

*   **Influence Lines are Key:** They are essential for determining the maximum and minimum effects of moving loads.
*   **Max Effect = Load × Max Ordinate of IL (for concentrated loads):** For a concentrated load $P$, the maximum effect is $P \times IL_{max}$.
*   **Max Effect = Load Intensity × Area Under IL (for UDL):** For a uniformly distributed load $w$, the maximum effect is $w \times (\text{Area under positive portion of IL})$.
*   **Thrust is Crucial for Arches:** Moving loads can significantly alter the horizontal thrust, which is the primary load-carrying mechanism.
*   **Bending Moment in Arches:** $M_x = M_{beam} - H \cdot y_x$. Understand how to construct the IL for each component.
*   **Hinges Simplify Analysis:** The zero moment at the hinges is a critical condition used in calculations.
*   **Parabolic Arches are Favorable:** For uniform loads, parabolic arches often have zero bending moment in the rib, simplifying design. However, moving loads introduce bending moments.
*   **Practice IL Construction:** The ability to draw and interpret influence lines is a fundamental skill.

---
