---
title: "Simple suspension bridges with three hinged stiffening girders - bending moments and shear force diagrams."
subject: "STRUCTURAL ANALYSIS - I"
module: "Module 1: Statically determinate trusses:  Analysis using method of joints and method of sections."
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba810740"
status: "completed"
scrapedAt: "2026-05-20T18:41:40.201Z"
---
# Structural Analysis - I: Module 1 - Statically Determinate Trusses

## Topic: Simple Suspension Bridges with Three-Hinged Stiffening Girders - Bending Moments and Shear Force Diagrams

---

### 1. Introduction to Suspension Bridges

**Definition:** A suspension bridge is a type of bridge in which the deck (roadway) is hung below suspension cables on vertical suspenders. The main cables are supported at each end by towers and anchored firmly to the ground.

**Components of a Simple Suspension Bridge:**

*   **Main Cables:** Large, strong cables that carry the primary load of the bridge.
*   **Towers:** Vertical structures that support the main cables.
*   **Suspenders (Hangers):** Vertical cables or rods that connect the main cables to the stiffening girder.
*   **Stiffening Girder:** A horizontal structural element that supports the deck and distributes the load from the deck to the suspenders. It also provides rigidity to the bridge, preventing excessive deformation under load.
*   **Anchorage:** Massive structures at the ends of the bridge that firmly secure the main cables.

---

### 2. The Role of the Stiffening Girder in Suspension Bridges

*   **Load Distribution:** The stiffening girder receives the applied loads (traffic, dead weight of the deck) and transfers them to the suspenders.
*   **Rigidity and Stability:** Without a stiffening girder, the main cable would take on a parabolic shape dictated solely by its own weight and the total uniformly distributed load. Under a concentrated or unevenly distributed load, the flexible cable would sag significantly, leading to large deflections and instability of the roadway. The stiffening girder resists these localized deformations.
*   **Redistribution of Bending Moments:** The stiffening girder itself resists bending moments and shear forces induced by the applied loads.

---

### 3. Three-Hinged Stiffening Girders

A key simplification in analyzing simple suspension bridges is the assumption of a **three-hinged stiffening girder**. This means the girder is considered to be hinged at two points along its span and at the points where it connects to the towers. However, in the context of analyzing the girder's internal forces, we typically consider the girder as a continuous beam that might be supported by the suspenders and the towers.

The "three-hinged" aspect often refers to the **effective system** that emerges when the parabolic main cable carries a uniformly distributed load (UDL). In such a scenario, the horizontal thrust in the main cable is constant, and the forces in the suspenders are uniform. This leads to the stiffening girder primarily carrying a bending moment, and the horizontal thrust in the girder (if any) is relatively small and often neglected in simplified analyses.

For analysis purposes, the stiffening girder is treated as a beam subjected to:

*   **Downward vertical forces:** From the suspenders, which are directly related to the load distribution on the bridge deck.
*   **Upward support forces:** From the towers (at the ends) and potentially from the main cable through the suspenders.

**Key Assumption for Three-Hinged Girders with Parabolic Cables:**
When the load on the bridge is uniformly distributed, the main cable takes a parabolic shape. In this specific case, the horizontal component of tension in the main cable is constant. The suspenders exert uniform downward forces on the stiffening girder. This setup simplifies the analysis of the stiffening girder.

---

### 4. Analysis of Bending Moments and Shear Forces in a Three-Hinged Stiffening Girder

The analysis involves determining the internal forces within the stiffening girder due to the applied loads.

**Steps for Analysis:**

1.  **Determine the Shape of the Main Cable:** For a uniformly distributed load (UDL) on the deck, the main cable takes a parabolic shape. The equation of the parabola is typically of the form $y = ax^2$ or $y = ax^2 + bx + c$.
2.  **Calculate the Forces in the Suspenders:**
    *   For a UDL, the load on each suspender is constant. If the total load on the girder is $W$ and there are $n$ suspenders equally spaced, the load per suspender is $W/n$.
    *   The vertical force in each suspender is equal to the load it supports.
3.  **Determine the Reactions at the Supports (Towers):**
    *   The stiffening girder is supported at the towers. These supports are usually considered as simple supports or roller supports, depending on how the girder is connected. For simplified analysis, they are often treated as simple supports.
    *   The total upward reaction at the towers will be equal to the total downward load on the girder.
4.  **Calculate Shear Force ($V$) and Bending Moment ($M$):**
    *   **Method of Sections:** Imagine cutting the girder at any point and considering the equilibrium of the section.
    *   **Shear Force (V):** The algebraic sum of all vertical forces acting on one side of the section.
    *   **Bending Moment (M):** The algebraic sum of the moments of all forces acting on one side of the section about the section cut.

**Important Consideration for Three-Hinged Girder (in a simplified context):**

In a truly three-hinged girder (e.g., a three-hinged arch), there is a hinge at the crown and at the springings. However, in suspension bridges, the stiffening girder itself isn't typically hinged at multiple points along its span in the same way as an arch. The "three-hinged" concept here often refers to the overall behavior where the parabolic cable under UDL simplifies the load transfer.

When the suspension bridge is analyzed as a system with a parabolic main cable and a stiffening girder, the forces within the girder can be analyzed by considering the following:

*   **Cable Tension:** The main cable carries the load and has a horizontal thrust component.
*   **Suspender Forces:** These transmit the load from the cable to the girder.
*   **Girder Internal Forces:** The girder resists these forces by developing shear forces and bending moments.

**Simplified Analysis for a Suspension Bridge with a Three-Hinged (effectively rigid) Stiffening Girder under a UDL:**

If the stiffening girder is very rigid, the main cable will approximate a parabola, and the suspenders will apply a uniform load to the girder. In this simplified model, the stiffening girder essentially acts as a simply supported beam carrying the load transmitted by the suspenders.

Let:
*   $L$ be the span of the bridge.
*   $w$ be the uniformly distributed load per unit length on the stiffening girder (from suspenders).

**Reactions at the supports (towers):**
$R_A = R_B = \frac{wL}{2}$ (for a simply supported beam)

**Shear Force (V):**
$V(x) = R_A - wx = \frac{wL}{2} - wx$
The shear force is zero at the center ($x = L/2$) and maximum at the supports ($x=0$ and $x=L$).
$V_{max} = \pm \frac{wL}{2}$

**Bending Moment (M):**
$M(x) = R_A x - \frac{wx^2}{2} = \frac{wL}{2}x - \frac{wx^2}{2}$
The bending moment is zero at the supports ($x=0, x=L$) and maximum at the center ($x = L/2$).
$M_{max} = \frac{wL}{2} \left(\frac{L}{2}\right) - \frac{w}{2} \left(\frac{L}{2}\right)^2 = \frac{wL^2}{4} - \frac{wL^2}{8} = \frac{wL^2}{8}$

**Diagrams:**
*   **Shear Force Diagram (SFD):** A straight line from $+wL/2$ at one support to $-wL/2$ at the other support, passing through zero at the center.
*   **Bending Moment Diagram (BMD):** A parabolic curve, starting from zero at the supports, reaching a maximum positive value at the center, and returning to zero at the other support.

---

### 5. Example Problem

**Problem:** A simple suspension bridge has a span of 100 meters. The stiffening girder is subjected to a uniformly distributed load of 20 kN/m. Assuming the stiffening girder behaves like a simply supported beam, determine the shear force and bending moment diagrams for the girder.

**Solution:**

Given:
*   Span, $L = 100$ m
*   Uniformly distributed load, $w = 20$ kN/m

**1. Reactions at the Supports:**
The stiffening girder is assumed to be simply supported at the towers.
Total load on the girder = $wL = 20 \text{ kN/m} \times 100 \text{ m} = 2000$ kN.
Reactions at supports A and B:
$R_A = R_B = \frac{wL}{2} = \frac{2000 \text{ kN}}{2} = 1000$ kN.

**2. Shear Force Calculation:**
Let's consider a section at a distance $x$ from the left support (A).
$V(x) = R_A - wx$
$V(x) = 1000 - 20x$

*   At support A ($x=0$): $V(0) = 1000 - 20(0) = 1000$ kN.
*   At the center ($x=50$ m): $V(50) = 1000 - 20(50) = 1000 - 1000 = 0$ kN.
*   At support B ($x=100$ m): $V(100) = 1000 - 20(100) = 1000 - 2000 = -1000$ kN.

**Shear Force Diagram (SFD):**
The SFD is a straight line starting from $+1000$ kN at $x=0$, decreasing linearly to $0$ kN at $x=50$ m, and further decreasing to $-1000$ kN at $x=100$ m.

```
      +1000 kN
      |
      |------0------|----(-1000 kN)
      A      x=50 m      B
```

**3. Bending Moment Calculation:**
Let's consider a section at a distance $x$ from the left support (A).
$M(x) = R_A x - \frac{wx^2}{2}$
$M(x) = 1000x - \frac{20x^2}{2}$
$M(x) = 1000x - 10x^2$

*   At support A ($x=0$): $M(0) = 1000(0) - 10(0)^2 = 0$ kNm.
*   At the center ($x=50$ m): $M(50) = 1000(50) - 10(50)^2 = 50000 - 10(2500) = 50000 - 25000 = 25000$ kNm.
*   At support B ($x=100$ m): $M(100) = 1000(100) - 10(100)^2 = 100000 - 10(10000) = 100000 - 100000 = 0$ kNm.

**Bending Moment Diagram (BMD):**
The BMD is a parabolic curve starting from $0$ kNm at $x=0$, increasing to a maximum of $25000$ kNm at $x=50$ m, and decreasing back to $0$ kNm at $x=100$ m.

```
      x=0      x=50 m     x=100 m
        0  ------- 25000 kNm ------- 0
       / \                             / \
      /   \                           /   \
     /     \                         /     \
    |       |                       |       |
```
The curve is a parabola opening downwards.

---

### 6. Effect of Other Loadings (Beyond UDL)

While the UDL case is standard for illustrating the concept, real suspension bridges experience various loads:

*   **Concentrated Loads:** Vehicles crossing the bridge. These loads will cause localized variations in the forces in the suspenders and, consequently, in the shear force and bending moment diagrams of the stiffening girder. The girder's rigidity is crucial in distributing these concentrated loads.
*   **Other Distributed Loads:** Wind loads, self-weight of the deck, etc.

**Analysis for Non-Uniform Loads:**

For non-uniform loads, the main cable shape will deviate from a perfect parabola. The forces in the suspenders will not be uniform. The analysis of the stiffening girder becomes more complex and typically involves:

1.  **Determining the shape of the main cable** under the actual load distribution (often requires iterative analysis or numerical methods).
2.  **Calculating the forces in each suspender.**
3.  **Treating the stiffening girder as a beam** supported at the towers and subjected to the forces from the suspenders. This beam analysis can then be performed using standard methods (e.g., superposition, influence lines, or numerical integration).

**The "Three-Hinged" Concept in this Context:**
The term "three-hinged" in the context of a suspension bridge's stiffening girder is often used to describe the *effect* of the parabolic cable under UDL, which leads to a certain distribution of forces. It simplifies the conceptual understanding rather than implying physical hinges along the girder span as seen in a three-hinged arch. If the stiffening girder itself had hinges at specific points, it would alter the load-carrying mechanism significantly.

---

### 7. Learning Outcomes Checklist

*   **Understand the components of a simple suspension bridge:** Covered in Section 1.
*   **Appreciate the function of the stiffening girder:** Covered in Section 2.
*   **Recognize the characteristics of a three-hinged stiffening girder (in the context of suspension bridges):** Covered in Section 3.
*   **Analyze the bending moments and shear forces in the stiffening girder under a uniformly distributed load:** Covered in Sections 4 and 5.
*   **Draw the Shear Force Diagram (SFD) and Bending Moment Diagram (BMD) for the stiffening girder under UDL:** Covered in Sections 4 and 5.

---

### 8. Practice Questions

**Question 1:**
A suspension bridge has a span of 200 meters. The stiffening girder carries a uniformly distributed load of 15 kN/m. Calculate the maximum shear force and maximum bending moment in the stiffening girder, assuming it acts as a simply supported beam.

**Answer 1:**
*   $L = 200$ m, $w = 15$ kN/m
*   Total load = $15 \times 200 = 3000$ kN
*   Reactions $R_A = R_B = \frac{3000}{2} = 1500$ kN
*   Maximum Shear Force = $R_A = 1500$ kN (at the supports)
*   Maximum Bending Moment = $\frac{wL^2}{8} = \frac{15 \times (200)^2}{8} = \frac{15 \times 40000}{8} = 15 \times 5000 = 75000$ kNm

**Question 2:**
For a suspension bridge with a span of 120 meters and a UDL of 25 kN/m on the stiffening girder, sketch the SFD and BMD for the stiffening girder.

**Answer 2:**
*   $L = 120$ m, $w = 25$ kN/m
*   Reactions $R_A = R_B = \frac{25 \times 120}{2} = 1500$ kN
*   **SFD:** A straight line from $+1500$ kN at one support, decreasing linearly to $0$ at the center ($x=60$ m), and to $-1500$ kN at the other support.
*   **BMD:** A parabolic curve from $0$ kNm at the supports, reaching a maximum at the center.
    *   Maximum bending moment = $\frac{wL^2}{8} = \frac{25 \times (120)^2}{8} = \frac{25 \times 14400}{8} = 25 \times 1800 = 45000$ kNm.
    *   The BMD starts at 0, rises to 45000 kNm at the center, and falls back to 0.

---

### 9. Important Points to Remember

*   The stiffening girder is crucial for maintaining the shape and stability of the suspension bridge deck under various load conditions.
*   For a uniformly distributed load (UDL) on the deck, the main cable adopts a parabolic shape, and the suspenders apply a uniform load to the stiffening girder.
*   In such UDL cases, the stiffening girder can be analyzed as a simply supported beam with a uniformly distributed load.
*   The SFD for a simply supported beam with UDL is a straight line, and the BMD is a parabolic curve.
*   The maximum shear force occurs at the supports.
*   The maximum bending moment occurs at the center of the span.
*   The "three-hinged" aspect in this context simplifies the analysis, primarily under UDL conditions, where the horizontal thrust in the cable is constant.

---
