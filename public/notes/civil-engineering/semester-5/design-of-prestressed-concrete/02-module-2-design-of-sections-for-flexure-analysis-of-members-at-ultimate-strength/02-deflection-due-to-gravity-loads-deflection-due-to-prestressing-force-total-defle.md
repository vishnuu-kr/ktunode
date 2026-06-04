---
title: "Deflection due to gravity loads - Deflection due to prestressing force-Total deflection - Limits of deflection - Limits of span-to-effective depth ratio"
subject: "DESIGN OF PRESTRESSED CONCRETE"
module: "Module 2: Design of Sections for Flexure: Analysis of members at ultimate strength "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810fe0"
status: "completed"
scrapedAt: "2026-05-20T18:47:53.633Z"
---
# DESIGN OF PRESTRESSED CONCRETE - Module 2: Design of Sections for Flexure: Analysis of Members at Ultimate Strength

## Topic: Deflection Control in Prestressed Concrete Members

This module focuses on the serviceability limit state of deflection, a critical aspect in the design of prestressed concrete structures. We will analyze the components contributing to deflection and the factors influencing it, ultimately ensuring that deflections remain within acceptable limits for functional and aesthetic reasons.

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   **Analyze** the deflection of prestressed concrete members due to prestressing force.
*   **Calculate** the deflection of prestressed concrete members due to gravity loads.
*   **Determine** the total deflection of prestressed concrete members by combining deflections from different sources.
*   **Understand and apply** the various limits of deflection specified in design codes.
*   **Apply** the limits of span-to-effective depth ratio as a preliminary check for deflection control.

---

### 1. Deflection Due to Prestressing Force

The application of a prestressing force, either concentric or eccentric, induces an initial curvature in the concrete member. This curvature, in turn, causes a deflection that is opposite to the direction of the applied prestress (for upward prestressing).

#### Key Concepts and Definitions:

*   **Prestressing Force (P):** The internal force applied to the concrete member to induce compression and counteract tensile stresses caused by external loads.
*   **Eccentricity (e):** The distance between the centroid of the concrete section and the line of action of the prestressing force.
*   **Moment due to Prestressing (M<sub>p</sub>):** The bending moment induced by the eccentric prestressing force. For a constant eccentricity 'e', $M_p = P \times e$.
*   **Curvature due to Prestressing ($\phi_p$):** The initial curvature induced in the beam due to the prestressing force. This can be calculated using the flexure formula:
    $\phi_p = \frac{M_p}{EI}$
    where $M_p$ is the moment due to prestressing, $E$ is the modulus of elasticity of concrete, and $I$ is the moment of inertia of the concrete section.

#### Calculation of Deflection due to Prestressing:

The deflection due to the prestressing force depends on the distribution of the prestressing force along the span.

*   **For a simply supported beam with a parabolic prestressing tendon:**
    If the prestressing force $P$ is applied with an eccentricity that varies parabolically, with maximum eccentricity $e_0$ at midspan and zero at the supports, the prestressing force induces an upward deflection at midspan.
    The prestressing moment at midspan is $M_{p0} = P \times e_0$.
    The upward deflection at midspan ($\Delta_p$) can be calculated using standard beam deflection formulas. For a parabolic moment distribution, it's often approximated as:
    $\Delta_p = \frac{5}{48} \frac{M_{p0} L^2}{EI}$ (This is for a uniformly distributed load, but the principle applies with an equivalent load).
    A more precise approach considers the resultant upward force and its distribution. For a parabolic tendon profile, the upward deflection at midspan can be directly calculated as:
    $\Delta_p = \frac{5}{48} \frac{P e_0 L^2}{EI}$ where $e_0$ is the maximum eccentricity at midspan.

*   **For a simply supported beam with a linear prestressing tendon:**
    If the prestressing force $P$ is applied with a constant eccentricity $e$ along the span, it induces a constant bending moment $M_p = P \times e$. This is equivalent to a uniformly distributed load.
    The upward deflection at midspan ($\Delta_p$) is:
    $\Delta_p = \frac{5 w_p L^4}{384 EI}$ where $w_p = \frac{8 M_p L}{L^2} = \frac{8 P e}{L}$ (This isn't quite right as $w_p$ should relate to the curvature).
    A simpler way for constant eccentricity:
    $\Delta_p = \frac{M_p L^2}{8 EI}$ (This is for a concentrated moment at midspan).
    For a constant moment $M_p$ across the span (equivalent to two equal concentrated moments $M_p/2$ at $L/4$ from supports), the deflection at midspan is:
    $\Delta_p = \frac{5}{48} \frac{M_p L^2}{EI}$
    This is for a simply supported beam with a uniformly distributed load $w_p = \frac{8 M_p}{
