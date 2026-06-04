---
title: "Stability of immersed and floating bodies."
subject: "FLUID MECHANICS AND MACHINERY"
module: "Module 1: Prerequisite: Properties of fluid: Specific gravity, Specific Weight, Specific Volume, Dynamic and Kinematic Viscosity."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462d1a"
status: "completed"
scrapedAt: "2026-05-20T17:49:22.872Z"
---
# FLUID MECHANICS AND MACHINERY - MODULE 1: PREREQUISITE: PROPERTIES OF FLUID

## Topic: Stability of Immersed and Floating Bodies

This module section delves into the crucial concept of stability for bodies submerged in or floating on a fluid. Understanding this is fundamental for designing ships, submarines, buoys, and various other structures that interact with fluids.

---

### **1. Introduction to Buoyancy and Stability**

*   **Buoyancy:** An upward force exerted by a fluid that opposes the weight of an immersed object.
*   **Archimedes' Principle:** Any body completely or partially submerged in a fluid is buoyed up by a force equal to the weight of the fluid displaced by the body.
    *   *Key Concept:* The buoyant force ($F_B$) is equal to the weight of the displaced fluid.
    *   $F_B = \rho_f \times V_{sub} \times g$
        *   $\rho_f$: Density of the fluid
        *   $V_{sub}$: Volume of the submerged part of the body
        *   $g$: Acceleration due to gravity

*   **Stability:** The ability of a body to return to its original position after being slightly displaced. In fluid mechanics, this refers to whether a body submerged or floating will remain in its equilibrium position or will capsize (tip over).

---

### **2. Stability of Immersed Bodies**

An immersed body is completely surrounded by the fluid. Its stability depends on the relative positions of its center of gravity (G) and its center of buoyancy (B).

*   **Center of Gravity (G):** The point where the entire weight of the body acts vertically downwards.
*   **Center of Buoyancy (B):** The centroid of the displaced volume of fluid. It is the point where the buoyant force acts vertically upwards.

For an immersed body in equilibrium, the weight of the body ($W$) acting through G and the buoyant force ($F_B$) acting through B must be equal and act along the same vertical line.

$W = F_B$
$\rho_b \times V_b \times g = \rho_f \times V_{sub} \times g$
Where:
*   $\rho_b$: Density of the body
*   $V_b$: Volume of the body
*   $V_{sub}$: Volume of the submerged part of the body (for a fully immersed body, $V_{sub} = V_b$)

**Conditions for Stability of Immersed Bodies:**

1.  **Stable Equilibrium:** If the body is displaced slightly, the forces create a restoring moment that tends to bring it back to its original position.
    *   **Condition:** The center of gravity (G) must be *below* the center of buoyancy (B).
    *   *Explanation:* When tilted, the center of buoyancy shifts to the centroid of the new submerged volume. If G is below B, the buoyant force and weight will create a moment that opposes the tilt.
    *   *Example:* A neutrally buoyant object with its mass concentrated at the bottom.

2.  **Unstable Equilibrium:** If the body is displaced slightly, the forces create a moment that tends to increase the displacement, causing it to move further away from its original position.
    *   **Condition:** The center of gravity (G) must be *above* the center of buoyancy (B).
    *   *Explanation:* When tilted, the center of buoyancy shifts such that the resultant moment amplifies the tilt.
    *   *Example:* A hot air balloon that has lost some of its hot air and is starting to descend.

3.  **Neutral Equilibrium:** If the body is displaced slightly, it remains in its new position, and there is no tendency to return or move further.
    *   **Condition:** The center of gravity (G) coincides with the center of buoyancy (B).
    *   *Explanation:* The position of the center of buoyancy does not change with a slight tilt.
    *   *Example:* A perfectly uniform sphere submerged in a fluid.

**Important Note:** For a fully immersed body, the center of buoyancy (B) is the centroid of the body's volume. The stability is solely determined by the relative positions of G and B.

---

### **3. Stability of Floating Bodies**

A floating body is only partially submerged in the fluid. Its stability is a bit more complex and involves the concept of the metacenter.

*   **Center of Gravity (G):** Same as before, the point where the weight of the body acts.
*   **Center of Buoyancy (B):** The centroid of the *displaced volume* of fluid. This is the point where the buoyant force acts.

When a floating body is tilted by a small angle ($\theta$), the shape of the submerged volume changes. This causes the center of buoyancy (B) to shift to a new position, $B'$.

*   **Metacenter (M):** The point of intersection of the vertical line through the new center of buoyancy ($B'$) and the original line of action of the buoyant force (which is the vertical line through the original center of buoyancy, B).

**Condition for Stability of Floating Bodies:**

The stability of a floating body depends on the relative positions of the center of gravity (G) and the metacenter (M).

1.  **Stable Equilibrium:** The body returns to its original position after being tilted.
    *   **Condition:** The metacenter (M) is *above* the center of gravity (G).
    *   *Explanation:* When tilted, the buoyant force ($F_B$) acting through $B'$ and the weight ($W$) acting through G create a restoring moment that brings the body back to its upright position. This moment is called the **righting moment**.
        *   Righting Moment ($M_R$) = $F_B \times GM \times \sin(\theta)$
        *   Where GM is the **metacentric height** ($GM = BM - BG$).

2.  **Unstable Equilibrium:** The body moves further away from its original position after being tilted.
    *   **Condition:** The metacenter (M) is *below* the center of gravity (G).
    *   *Explanation:* The forces create an overturning moment that causes the body to capsize.

3.  **Neutral Equilibrium:** The body remains in its tilted position.
    *   **Condition:** The metacenter (M) coincides with the center of gravity (G).
    *   *Explanation:* There is no restoring or overturning moment.

**Calculating the Metacentric Height (GM):**

*   **Metacentric Radius (BM):** The distance between the original center of buoyancy (B) and the metacenter (M).
    *   $BM = \frac{I}{V_{sub}}$
        *   $I$: The minimum moment of inertia of the waterplane area about the axis of tilt. The waterplane area is the area of the cross-section of the floating body at the water's surface.
        *   $V_{sub}$: The submerged volume of the body.

*   **Metacentric Height (GM):** The distance between the center of gravity (G) and the metacenter (M).
    *   $GM = BM - BG$
        *   $BG$: The distance between the original center of buoyancy (B) and the center of gravity (G).

**Crucial Point:** For a floating body, the weight of the body must equal the buoyant force.
$W = F_B$
$\rho_b \times V_b \times g = \rho_f \times V_{sub} \times g$

**Key Aspects of Metacentric Height (GM):**

*   **Positive GM ($M$ above $G$):** Stable equilibrium.
*   **Negative GM ($M$ below $G$):** Unstable equilibrium.
*   **Zero GM ($M$ coincides with $G$):** Neutral equilibrium.

The larger the metacentric height (GM), the more stable the floating body is. A very large GM can lead to a "stiff" ship, which experiences large restoring moments and can be uncomfortable in rough seas. A small GM can lead to a "tender" ship, which is more comfortable but less stable.

**Analysis of the Shifting Center of Buoyancy (B') for a Tilted Floating Body:**

Consider a floating body tilted by an angle $\theta$. The submerged volume changes shape. The buoyant force ($F_B$) always acts through the centroid of the submerged volume. When tilted, the submerged volume's centroid shifts to $B'$. The new buoyant force ($F_B'$) acts vertically upwards through $B'$. For equilibrium after tilting, the resultant buoyant force must balance the weight, and the line of action of $F_B'$ must pass through the vertical line of action of $W$.

The metacenter M is the point where the vertical line through $B'$ intersects the original vertical axis of the body (passing through B and G when in the upright position). The distance $BM$ can be derived by considering the wedging effect of the emergent and submerged wedges of fluid when the body is tilted.

*   Let $A_w$ be the area of the waterplane.
*   Let $d\nabla$ be an infinitesimal volume element.
*   When tilted by angle $\theta$, the shifting of the center of buoyancy causes a moment equal to $F_B \times BM \times \sin(\theta)$.
*   This moment is also equal to the moment of the weights of the emergent wedge and the submerged wedge. The moment is generated by the difference in the centroids of these wedges and the waterplane area.
*   This leads to the formula $BM = I / V_{sub}$, where $I$ is the second moment of area of the waterplane about the axis of tilt.

---

### **4. Practical Examples and Considerations**

*   **Ships:** The stability of ships is critical. Naval architects carefully design the hull shape and ballast to ensure a sufficient positive metacentric height. A ship might become unstable if cargo shifts or if it takes on too much water.
    *   *Example:* A ship listing (tilting) to one side due to uneven loading. If its GM is positive, it will right itself. If GM is negative, it will capsize.

*   **Submarines:** Submarines control their buoyancy and stability by taking in or expelling water from ballast tanks. When submerged, their stability depends on the relative positions of G and B, similar to immersed bodies.

*   **Buoys and Pontoons:** These are designed to float. Their stability is crucial for their function. The shape of the waterplane area and the distribution of weight are important design considerations.

*   **Icebergs:** An iceberg floats with approximately 90% of its volume submerged, demonstrating Archimedes' principle. Its stability depends on the location of its center of gravity relative to the center of buoyancy.

---

### **5. Practice Questions and Exercises**

**Question 1:** A uniform wooden cube of side 0.5 m floats in water with one face horizontal. If the specific gravity of wood is 0.6, calculate the depth of immersion and the position of the center of buoyancy.

**Solution:**
*   Volume of the cube, $V = (0.5)^3 = 0.125 \, m^3$.
*   Weight of the cube, $W = \text{specific gravity} \times \rho_{water} \times g \times V = 0.6 \times 1000 \, kg/m^3 \times g \times 0.125 \, m^3 = 75g \, N$.
*   For floating, $F_B = W$.
*   Let the depth of immersion be $h$. The submerged volume $V_{sub} = (0.5) \times (0.5) \times h = 0.25h \, m^3$.
*   $F_B = \rho_{water} \times g \times V_{sub} = 1000 \times g \times 0.25h \, N$.
*   Equating $F_B = W$: $1000 \times g \times 0.25h = 75g$.
*   $250h = 75 \implies h = 75/250 = 0.3 \, m$.
*   **Depth of immersion = 0.3 m**.
*   The center of buoyancy (B) is the centroid of the submerged volume. Since the cube floats with one face horizontal, the submerged part is a rectangular prism of dimensions $0.5 \times 0.5 \times 0.3 \, m$.
*   The center of buoyancy B is at the center of this submerged prism, which is $h/2$ from the bottom face.
*   **Position of B from the bottom face = 0.3 / 2 = 0.15 m**.

**Question 2:** A solid cylinder of diameter 1 m and height 1.5 m floats vertically in fresh water. The specific gravity of the cylinder material is 0.8. Determine if the cylinder is stable. The center of gravity is at 0.75 m from the base.

**Solution:**
*   Volume of the cylinder, $V = \pi (D/2)^2 \times H = \pi (1/2)^2 \times 1.5 = \pi \times 0.25 \times 1.5 = 0.375\pi \, m^3$.
*   Weight of the cylinder, $W = \text{specific gravity} \times \rho_{water} \times g \times V = 0.8 \times 1000 \times g \times 0.375\pi = 300\pi g \, N$.
*   For floating, $F_B = W$.
*   Let the depth of immersion be $h$. Submerged volume $V_{sub} = \pi (D/2)^2 \times h = \pi (1/2)^2 \times h = 0.25\pi h \, m^3$.
*   $F_B = \rho_{water} \times g \times V_{sub} = 1000 \times g \times 0.25\pi h = 250\pi h g \, N$.
*   Equating $F_B = W$: $250\pi h g = 300\pi g$.
*   $h = 300/250 = 1.2 \, m$.
*   **Depth of immersion = 1.2 m**.
*   The center of buoyancy (B) is at the midpoint of the submerged depth, i.e., $h/2$ from the base.
*   Position of B from the base = $1.2 / 2 = 0.6 \, m$.
*   The center of gravity (G) is given at 0.75 m from the base.
*   The distance $BG = |0.75 - 0.6| = 0.15 \, m$.
*   Now, calculate the metacentric radius $BM$:
    *   $I = \frac{\pi D^4}{64} = \frac{\pi (1)^4}{64} = \frac{\pi}{64} \, m^4$ (Moment of inertia of the circular waterplane about its diameter).
    *   $V_{sub} = 0.25\pi h = 0.25\pi \times 1.2 = 0.3\pi \, m^3$.
    *   $BM = \frac{I}{V_{sub}} = \frac{\pi/64}{0.3\pi} = \frac{1}{64 \times 0.3} = \frac{1}{19.2} \approx 0.052 \, m$.
*   Metacentric height $GM = BM - BG = 0.052 - 0.15 = -0.098 \, m$.
*   Since GM is negative, the metacenter (M) is below the center of gravity (G).
*   **Conclusion: The cylinder is UNSTABLE.**

---

### **6. Important Points to Remember**

*   **Buoyant Force ($F_B$):** Always equal to the weight of the displaced fluid ($\rho_f V_{sub} g$).
*   **Immersed Bodies:** Stability depends on the relative positions of G and B. G below B is stable.
*   **Floating Bodies:** Stability depends on the relative positions of G and M. M above G is stable.
*   **Metacenter (M):** Intersection of the line of action of the buoyant force after tilting and the original vertical axis.
*   **Metacentric Radius ($BM$):** $I / V_{sub}$, where $I$ is the moment of inertia of the waterplane area about the tilt axis.
*   **Metacentric Height ($GM$):** $BM - BG$. A positive GM indicates stability for floating bodies.
*   For floating bodies, $W = F_B$ must always hold.
*   For submerged bodies, $W = F_B$ and G must be below B for stability.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### **7. Textbook and Reference Material Alignment**

This topic is covered in the standard fluid mechanics textbooks:

*   **Cengel & Cimbala:** Provides a thorough explanation of buoyancy and stability, including derivations for metacentric height.
*   **Som S.K.:** Covers buoyancy, flotation, and stability of submerged and floating bodies with examples.
*   **Bansal R.K.:** Offers detailed analysis of stability of floating bodies and methods for determining the metacentric height.
*   **White F.M.:** Discusses stability criteria for submerged and floating bodies, with an emphasis on the underlying physics.
*   **Fisher & Henly:** Likely provides engineering applications and examples of stability in real-world scenarios.

---

### **8. Alignment with Course Outcomes (COs)**

*   **CO1:** This topic directly addresses the relationship between fluid properties (density) and forces (buoyant force) acting on submerged and floating bodies. Calculations of buoyant force and understanding of equilibrium conditions contribute to estimating hydrostatic forces.
*   **CO2:** While not directly about flow classification, understanding how forces balance in static fluids is a prerequisite for dynamic analysis. The stability conditions are based on force equilibrium.
*   **CO3, CO4, CO5:** These COs are not directly covered in this specific topic, which focuses on static fluids and body stability.

---