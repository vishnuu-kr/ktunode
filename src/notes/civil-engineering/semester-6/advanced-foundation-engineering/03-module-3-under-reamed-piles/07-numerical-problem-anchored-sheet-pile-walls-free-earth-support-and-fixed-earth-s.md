---
title: "Numerical problem- Anchored sheet pile walls-free earth
support and fixed earth support analysis (concept only)-Rowe moment
reduction factor"
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 3: Under reamed piles"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811214"
status: "completed"
scrapedAt: "2026-05-20T18:52:07.134Z"
---
# ADVANCED FOUNDATION ENGINEERING - Module 3: Under-reamed Piles

## Topic: Anchored Sheet Pile Walls - Free Earth Support and Fixed Earth Support Analysis (Concept Only) - Rowe Moment Reduction Factor

This topic delves into the analysis of anchored sheet pile walls, focusing on the conceptual understanding of different support methods and the influence of the Rowe moment reduction factor. While the module title is "Under-reamed Piles," this specific topic within Module 3 addresses a different, albeit related, foundation element. It's important to note that under-reamed piles are typically used for resisting uplift forces or in expansive soils, while sheet pile walls are primarily used for retaining earth and resisting lateral pressures.

---

### 1. Learning Outcomes Covered:

*   **Conceptual understanding of free earth support analysis for anchored sheet pile walls.**
*   **Conceptual understanding of fixed earth support analysis for anchored sheet pile walls.**
*   **Understanding the concept and application of the Rowe moment reduction factor.**

---

### 2. Key Concepts and Definitions

#### 2.1. Sheet Pile Walls

Sheet pile walls are retaining structures constructed from interlocking sheets of material (usually steel, but can also be vinyl or wood). They are driven into the ground to form a continuous barrier. They are commonly used for:

*   **Earth retention:** Holding back soil on one side, creating a clear excavation or preventing landslides.
*   **Waterfront structures:** Docks, wharves, bulkheads, and cutoff walls.
*   **Cofferdams:** Temporary structures to dewater an area for construction.

#### 2.2. Anchored Sheet Pile Walls

These are sheet pile walls that are further stabilized by anchors. Anchors are typically tension members (ropes, rods, or cables) that are embedded in the soil behind the wall. They provide a counteracting force to resist the overturning moment and shear forces induced by the retained soil.

#### 2.3. Lateral Earth Pressure

The pressure exerted by the retained soil on the sheet pile wall. It is typically analyzed using Rankine or Coulomb theories, which provide active earth pressure for the retained soil and passive earth pressure for the soil in front of the wall.

*   **Active Earth Pressure ($P_a$)**: The pressure exerted by the soil when it is allowed to move away from the wall.
*   **Passive Earth Pressure ($P_p$)**: The pressure exerted by the soil when it is pushed against the wall.

#### 2.4. Support Analysis Concepts

The analysis of anchored sheet pile walls aims to determine the bending moment in the wall and the required anchor force. Two primary conceptual approaches exist:

**2.4.1. Free Earth Support Analysis (Cantilever Analysis)**

*   **Concept:** In this simplified analysis, the sheet pile wall is assumed to act as a cantilever, with the toe of the wall assumed to be a free support (no fixity). The wall is assumed to rotate about the anchor point.
*   **Mechanism:** The wall is assumed to penetrate into the retained soil until the passive resistance provided by the soil in front of the wall is sufficient to counteract the active pressure from the retained soil and establish static equilibrium.
*   **Assumptions:**
    *   The toe of the wall is a free support (no bending moment or shear at the toe).
    *   The wall rotates about the anchor point.
    *   The passive resistance is assumed to develop fully.
*   **Process (Conceptual):**
    1.  Assume an adequate depth of embedment ($D$) for the sheet pile.
    2.  Calculate the active earth pressure acting on the wall from the retained soil.
    3.  Calculate the passive earth pressure acting on the wall from the soil in front of the wall.
    4.  Determine the depth of embedment required for the wall to be in equilibrium, considering that the passive pressure needs to balance the active pressure. This is often done by assuming the wall is free to rotate at the anchor point and the toe is a hinge.
    5.  The maximum bending moment occurs at or near the anchor rod.
    6.  The anchor force is determined by summing moments about the toe.
*   **Limitations:** This method is generally conservative as it doesn't account for the fixity at the toe, which reduces the bending moment.

**2.4.2. Fixed Earth Support Analysis**

*   **Concept:** This analysis considers the sheet pile wall to be fixed or partially fixed at the toe, meaning there is some resistance to rotation at the bottom of the wall. This fixity reduces the bending moment in the wall.
*   **Mechanism:** The wall is assumed to have a point of contraflexure (zero bending moment) at some depth below the anchor rod, and the toe is considered to have some degree of rotational restraint.
*   **Assumptions:**
    *   The toe of the wall is not a free support; it has some rotational stiffness.
    *   There is a point of contraflexure at a calculated depth.
*   **Process (Conceptual):**
    1.  The embedment depth is determined to provide sufficient passive resistance to counteract the active pressures, but the point where this resistance is fully developed might be different from the free earth support case.
    2.  The point of contraflexure is located at a depth below the anchor rod.
    3.  The analysis involves distributing the bending moment between the cantilever portion above the contraflexure and the fixed portion below.
    4.  The anchor force is determined by summing moments about the point of contraflexure or the toe, considering the distribution of forces.
*   **Advantages:** This method is generally more realistic as it accounts for the fixity at the toe, leading to smaller bending moments and potentially shallower embedment depths or less robust sheet pile sections.

#### 2.5. Rowe Moment Reduction Factor ($\gamma$)

*   **Concept:** The Rowe moment reduction factor is an empirical factor used in the analysis of anchored sheet pile walls to account for the reduction in the maximum bending moment due to the fixity at the toe and the flexibility of the sheet pile wall. It is applied to the maximum bending moment calculated by the free earth support analysis.
*   **Origin:** Developed by H.Q. Rowe through extensive model tests and theoretical studies.
*   **Purpose:** To provide a more realistic estimation of the bending moment in anchored sheet pile walls, bridging the gap between the conservative free earth support analysis and the more complex fixed earth support analysis.
*   **Formula (Conceptual Application):**
    $$M_{fixed} = \gamma \times M_{free\_earth}$$
    Where:
    *   $M_{fixed}$ is the reduced maximum bending moment (closer to reality).
    *   $\gamma$ is the Rowe moment reduction factor.
    *   $M_{free\_earth}$ is the maximum bending moment calculated from the free earth support analysis.
*   **Factors Influencing $\gamma$:**
    *   **Embedment Depth ($D$):** The greater the embedment depth relative to the excavation depth, the greater the fixity and thus a lower $\gamma$.
    *   **Anchor Depth:** The position of the anchor rod influences the distribution of forces and moments.
    *   **Soil Properties:** The shear strength of the soil (particularly the passive resistance) affects the degree of fixity.
    *   **Flexibility of the Sheet Pile:** Thinner and more flexible piles might exhibit less fixity.
*   **Values of $\gamma$**: Typically range from 0.5 to 0.7 for most common conditions. Lower values indicate greater fixity and a more significant moment reduction.
*   **How it's Used (Conceptual):**
    1.  Perform a free earth support analysis to determine the maximum bending moment ($M_{free\_earth}$) and the required embedment depth.
    2.  Determine the appropriate Rowe moment reduction factor ($\gamma$) based on charts or empirical relationships provided by Rowe's work, considering the ratio of embedment depth to excavation depth and other relevant factors.
    3.  Calculate the reduced maximum bending moment ($M_{fixed}$) by multiplying $M_{free\_earth}$ by $\gamma$. This reduced moment is then used for designing the sheet pile section.
    4.  The anchor force is typically not significantly altered by the Rowe factor; it's primarily used for moment reduction.

---

### 3. Examples (Conceptual Illustration)

**Scenario:** Imagine a sheet pile wall supporting a sandy soil with a certain excavation depth and a given anchor depth.

*   **Free Earth Support Analysis (Conceptual):**
    *   We'd calculate the active pressure from the retained sand.
    *   We'd assume the wall rotates about the anchor.
    *   We'd extend the wall downwards until the passive resistance at the toe balances the active pressure.
    *   This would yield a certain embedment depth and a maximum bending moment (let's call it $M_{free}$). This $M_{free}$ would be relatively large, occurring at or near the anchor.

*   **Fixed Earth Support Analysis (Conceptual):**
    *   In reality, the toe isn't free. The soil resisting the movement at the toe provides some rotational restraint.
    *   This restraint allows for a point of contraflexure in the bending moment diagram, typically somewhere below the anchor.
    *   The maximum bending moment would be significantly less than $M_{free}$.

*   **Rowe Moment Reduction Factor Application (Conceptual):**
    *   After doing the free earth support analysis and finding $M_{free}$ and the required embedment $D$, we'd look up a Rowe factor $\gamma$ based on the ratio $D / H$ (where $H$ is the excavation depth) and the anchor depth.
    *   If, for example, the free earth analysis gave $M_{free} = 100$ kNm/m and we found $\gamma = 0.6$, then the actual maximum bending moment would be $M_{actual} = 0.6 \times 100 = 60$ kNm/m.
    *   This reduced moment (60 kNm/m) would be used to select a lighter, more economical sheet pile section.

---

### 4. Practice Questions or Exercises

**Question 1 (Conceptual):**
What is the fundamental difference between free earth support analysis and fixed earth support analysis for anchored sheet pile walls?

**Answer:**
Free earth support analysis assumes the toe of the sheet pile wall acts as a free support (a hinge), allowing the wall to rotate freely about the anchor. Fixed earth support analysis, on the other hand, considers that the toe of the wall has some rotational restraint, leading to a point of contraflexure and a reduced bending moment in the wall.

**Question 2 (Conceptual):**
Explain the purpose of the Rowe moment reduction factor in the design of anchored sheet pile walls.

**Answer:**
The Rowe moment reduction factor is used to reduce the maximum bending moment calculated from a conservative free earth support analysis. It accounts for the actual fixity at the toe of the sheet pile wall and the flexibility of the wall, providing a more realistic and often more economical design by allowing the selection of a less robust sheet pile section.

**Question 3 (Conceptual):**
What factors typically influence the magnitude of the Rowe moment reduction factor ($\gamma$)?

**Answer:**
The Rowe moment reduction factor ($\gamma$) is influenced by:
*   The ratio of the embedment depth ($D$) to the excavation depth ($H$).
*   The depth of the anchor rod.
*   The properties of the soil, particularly its passive resistance.
*   The flexibility of the sheet pile wall itself.

---

### 5. Important Points to Remember

*   **Free earth support is conservative:** It overestimates the bending moment because it assumes no fixity at the toe.
*   **Fixed earth support is more realistic:** It accounts for toe fixity, leading to lower bending moments.
*   **Rowe moment reduction factor ($\gamma$) is an empirical tool:** It's used to adjust the bending moment from free earth support analysis to a value closer to that of fixed earth support analysis.
*   **Lower $\gamma$ means greater fixity and moment reduction.**
*   The Rowe factor is primarily applied to reduce the *bending moment*, not significantly to alter the anchor force.
*   Understanding these concepts is crucial for selecting appropriate sheet pile sections and anchor systems for safe and economical retaining structures.

---
