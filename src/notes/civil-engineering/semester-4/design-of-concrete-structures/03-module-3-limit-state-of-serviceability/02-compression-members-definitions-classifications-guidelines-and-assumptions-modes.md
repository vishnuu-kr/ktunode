---
title: "Compression members - Definitions, Classifications, Guidelines and Assumptions - modes of failure."
subject: "DESIGN OF CONCRETE STRUCTURES"
module: "Module 3: Limit State of Serviceability "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109c9"
status: "completed"
scrapedAt: "2026-05-20T18:43:47.804Z"
---
# DESIGN OF CONCRETE STRUCTURES

## Module 3: Limit State of Serviceability

### Topic: Compression Members - Definitions, Classifications, Guidelines and Assumptions - Modes of Failure

---

This module delves into the behaviour of compression members under service loads, focusing on the limit state of serviceability. We will explore the fundamental definitions, classifications, and the underlying principles governing the design of these critical structural elements. Understanding the potential modes of failure is crucial for ensuring the satisfactory performance of structures under everyday conditions.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Define a compression member and its role in structural systems.
*   Classify compression members based on their geometry and loading conditions.
*   Understand the key guidelines and assumptions used in the design of compression members for serviceability.
*   Identify and explain the primary modes of failure for compression members.

---

### 1. Definitions and Role of Compression Members

#### 1.1 Definition of a Compression Member

A **compression member** is a structural element primarily subjected to axial compressive forces. These forces tend to shorten the member.

#### 1.2 Role in Structural Systems

Compression members are vital components in a wide range of structures. They transfer loads from upper levels to lower levels or foundations. Common examples include:

*   **Columns:** Vertical members supporting beams, slabs, and walls in buildings.
*   **Struts:** Inclined or horizontal members in trusses, bridges, and other framed structures that resist compression.
*   **Piers and Abutments:** Supports for bridges.
*   **Webs of Girders:** In certain types of girders, the web acts as a compression member.

**Key Concept:** Compression members are essential for transmitting vertical loads efficiently through a structure.

---

### 2. Classification of Compression Members

Compression members can be classified based on various criteria:

#### 2.1 Based on Geometry and Support Conditions

*   **Axially Loaded Compression Members:** These are ideally subjected to a compressive force acting precisely at the centroid of their cross-section.
    *   **Note:** Purely axial loading is rarely achieved in practice; eccentricities are almost always present.
*   **Eccentrically Loaded Compression Members:** The resultant compressive force acts at an offset from the centroid of the cross-section. This eccentricity induces bending moments in addition to axial compression.
    *   **Examples:** Columns supporting beams at their edges, columns with lateral loads.
*   **Short Compression Members:** Their slenderness ratio is low enough that buckling is not a primary concern. Their failure is typically governed by material crushing.
*   **Slender (Long) Compression Members:** Their slenderness ratio is high, making them susceptible to **buckling** under compressive loads, even before the material reaches its yield or crushing strength.

#### 2.2 Based on Slenderness Ratio

The **slenderness ratio** is a critical parameter that dictates the behaviour of compression members. It is defined as the ratio of the effective length of the member to its least radius of gyration.

*   **Slenderness Ratio ($ \lambda $):** $ \lambda = \frac{L_e}{r} $
    *   $ L_e $: Effective length of the compression member (depends on end support conditions).
    *   $ r $: Least radius of gyration of the cross-section. $ r = \sqrt{\frac{I}{A}} $, where $I$ is the moment of inertia and $A$ is the cross-sectional area.

**Classification based on Slenderness Ratio (typically for steel members, but the concept applies to concrete too):**

*   **Short:** $ \lambda \le \lambda_{limit} $ (Failure by crushing/yielding)
*   **Intermediate:** $ \lambda_{limit} < \lambda < \lambda_{critical} $ (Failure by combined yielding and buckling)
*   **Slender/Long:** $ \lambda \ge \lambda_{critical} $ (Failure by elastic buckling)

For concrete compression members, the distinction between short and slender is often made based on empirical criteria within design codes, considering the potential for buckling.

#### 2.3 Based on Material and Reinforcement (for Reinforced Concrete)

*   **Unreinforced Concrete Compression Members:** Primarily consist of concrete only. Their capacity is limited by the crushing strength of concrete and they are highly susceptible to brittle failure.
*   **Reinforced Concrete (RC) Compression Members:** Contain longitudinal steel reinforcement and transverse reinforcement (ties or spirals). The steel reinforcement significantly enhances the load-carrying capacity and ductility, preventing brittle failure.
    *   **Tied Columns:** Longitudinal bars are held in place by discrete ties at intervals.
    *   **Spiral Columns:** Longitudinal bars are enclosed by a continuous spiral. Spiral reinforcement provides superior confinement to the concrete core, leading to higher ductility and load-carrying capacity, especially under eccentric loading and in seismic regions.

---

### 3. Guidelines and Assumptions for Design (Serviceability Limit State)

The design of compression members under serviceability conditions aims to ensure they perform satisfactorily without excessive deflections, cracking, or vibrations during their intended use. While ultimate strength (Limit State of Collapse) is also critical, serviceability focuses on the behaviour under normal service loads.

#### 3.1 Key Guidelines (General Principles)

*   **Adequate Strength:** The member must be able to resist the service loads without exceeding the allowable stresses in the materials.
*   **Stability:** The member must be stable and not buckle under the applied loads.
*   **Durability:** The member should be designed to withstand environmental conditions and maintain its integrity over its lifespan.
*   **Crack Control:** For reinforced concrete, serviceability checks often involve limiting crack widths under service loads to prevent aesthetic issues and protect reinforcing steel from corrosion.
*   **Deflection Control:** Although more critical for flexural members, excessive shortening of compression members can also be a serviceability concern.

#### 3.2 Common Design Assumptions

1.  **Plane Sections Remain Plane:** This fundamental assumption of reinforced concrete theory is applied to compression members. It implies that the strain distribution across the cross-section is linear.
2.  **Perfect Bond:** There is assumed to be perfect bond between the concrete and the reinforcing steel.
3.  **Homogeneous and Isotropic Materials:** Concrete and steel are often idealized as homogeneous and isotropic materials for simplified analysis, though their actual stress-strain behaviour is non-linear.
4.  **Linear Elastic Behaviour (under service loads):** For serviceability checks, stresses in concrete and steel are often assumed to be within the elastic range, allowing for the use of elastic analysis.
5.  **Centroidal Axis:** For ideally axially loaded members, the load is assumed to act along the centroidal axis. In reality, eccentricities are considered for more accurate design.
6.  **Effective Length:** The effective length ($L_e$) is used to account for the end restraint conditions and the overall stability of the member. This is particularly important for slender members susceptible to buckling.
    *   **Effective Length Factor (k):** $ L_e = k L $, where $L$ is the actual length. The factor 'k' depends on the rotational and translational stiffness of the supports at the ends of the member.
        *   Pinned-Pinned: k = 1.0
        *   Fixed-Fixed: k = 0.5
        *   Fixed-Pinned: k = 0.7
        *   Fixed-Free: k = 2.0
7.  **Buckling Analysis (for slender members):** For slender compression members, design is often based on the principles of buckling analysis, considering the onset of instability.

**Important Point:** For reinforced concrete members, the presence of reinforcement significantly influences their behaviour. The interaction between concrete and steel is crucial. Design codes provide specific formulas and guidelines to account for this interaction.

---

### 4. Modes of Failure for Compression Members

Compression members can fail in several ways, depending on their geometry, material properties, and loading conditions. Understanding these modes is vital for preventing catastrophic failure.

#### 4.1 Failure by Crushing (Short Members)

*   **Description:** In short, stocky compression members, the applied compressive stress exceeds the crushing strength of the concrete (or yield strength of the steel in an all-steel member). The material deforms significantly and fails by disintegration or yielding.
*   **Mechanism:** The concrete fails in compression due to excessive stress. The longitudinal steel reinforcement, if present, will yield or crush along with the concrete.
*   **Governing Factor:** Material strength.
*   **Reinforced Concrete:** In RC columns, the presence of longitudinal steel and ties/spirals increases the ultimate crushing capacity and provides some ductility, delaying brittle failure. However, if the load is too high, crushing will still occur.

#### 4.2 Failure by Buckling (Slender Members)

*   **Description:** Buckling is a phenomenon where a slender member subjected to axial compression suddenly deforms laterally, losing its straightness and stability. This occurs when the applied load reaches the **critical buckling load**.
*   **Mechanism:** The member bends laterally, and the stresses in the outer fibers increase significantly, leading to failure. Buckling is a stability failure, not necessarily a material strength failure.
*   **Governing Factor:** Slenderness ratio ($ \lambda $), material stiffness (Young's modulus), and end support conditions.
*   **Euler's Buckling Formula (for a perfectly straight, elastic column with pinned ends):**
    $ P_{cr} = \frac{\pi^2 EI}{(L)^2} $
    *   $ P_{cr} $: Critical buckling load
    *   $ E $: Young's modulus of the material
    *   $ I $: Moment of inertia of the cross-section
    *   $ L $: Actual length of the column
*   **Reinforced Concrete:** For RC columns, the effective stiffness ($EI$) is modified to account for the presence of reinforcement and the non-linear behaviour of concrete under load. Design codes provide methods to calculate the buckling capacity considering the material properties and reinforcement.

#### 4.3 Failure by Combined Crushing and Buckling (Intermediate Members)

*   **Description:** For members with intermediate slenderness ratios, the failure is a combination of material crushing and buckling. The member may start to crush, but as it deforms, buckling effects become significant, accelerating the failure process.
*   **Mechanism:** The axial load causes both stress build-up (leading to potential crushing) and lateral deflection (leading to bending stresses). The failure is a complex interaction of these two phenomena.
*   **Governing Factor:** Both material strength and slenderness ratio.

#### 4.4 Failure due to Eccentricity

*   **Description:** When the compressive load is not applied axially, it induces bending moments in addition to axial compression. This leads to non-uniform stress distribution across the cross-section. The extreme fibers experience higher stresses.
*   **Mechanism:** The bending moment causes tensile stresses on one side of the section and further compression on the other. Failure can occur due to:
    *   **Crushing:** On the compression side if the combined compressive stress exceeds the material's crushing capacity.
    *   **Tensile Failure:** On the tension side if the reinforcement yields and cracks extensively, or if the concrete cracks and is unable to carry the tensile forces.
    *   **Combined Failure:** The interaction of axial compression and bending moment can lead to a failure mode not simply attributable to either alone.
*   **Reinforced Concrete:** The longitudinal steel reinforcement plays a crucial role in resisting the tensile stresses induced by bending. The amount and arrangement of reinforcement are critical in designing against eccentric loading.

#### 4.5 Interaction of Loads (Axial Force and Bending Moment)

*   **Description:** In reality, most compression members experience both axial load and bending moment, especially columns supporting beams. The failure criterion for such members is often represented by an **interaction diagram**.
*   **Interaction Diagram:** This diagram plots the axial load capacity against the bending moment capacity for a given cross-section. It defines the safe combinations of axial load and bending moment that the member can resist. Failure occurs when the applied load-moment combination falls outside this diagram.
*   **Serviceability Aspect:** Under service loads, the stresses induced by the combination of axial load and bending moment must not exceed the allowable stresses for the materials. This prevents excessive cracking and deformations.

**Important Point:** For reinforced concrete columns, the failure modes are heavily influenced by the amount and arrangement of longitudinal and transverse reinforcement. Spiral reinforcement, for instance, provides better confinement and ductility than ties, improving the capacity and behaviour under eccentric loading and seismic events.

---

### Practice Questions and Exercises

1.  **Define a compression member and provide three examples of its use in a building structure.**

    *   **Answer:** A compression member is a structural element that primarily resists axial compressive forces, tending to shorten it. Examples include columns, struts in a roof truss, and piers supporting a bridge.

2.  **What is the slenderness ratio, and why is it an important parameter in the design of compression members?**

    *   **Answer:** The slenderness ratio ($ \lambda $) is the ratio of the effective length ($L_e$) of a compression member to its least radius of gyration ($r$). It is crucial because it indicates a member's susceptibility to buckling. Low slenderness ratios suggest failure by crushing, while high ratios indicate potential failure by buckling.

3.  **Differentiate between tied columns and spiral columns in reinforced concrete, highlighting their typical behavioural differences.**

    *   **Answer:** Tied columns have longitudinal bars confined by transverse ties at intervals. Spiral columns have longitudinal bars confined by a continuous spiral. Spiral columns generally exhibit higher ductility and load-carrying capacity, especially under eccentric loads and seismic conditions, due to the superior confinement provided by the spiral reinforcement to the concrete core.

4.  **Explain the primary mode of failure for a short, stocky concrete compression member.**

    *   **Answer:** The primary mode of failure for a short, stocky concrete compression member is **crushing**. The axial compressive stress exceeds the crushing strength of the concrete, leading to material failure and significant deformation.

5.  **Under what conditions does a compression member fail by buckling? What factors influence the critical buckling load?**

    *   **Answer:** A compression member fails by buckling when it is slender (has a high slenderness ratio) and the applied compressive load reaches its critical buckling load. The critical buckling load is influenced by the member's effective length, its cross-sectional stiffness (moment of inertia), and its material stiffness (Young's modulus). End support conditions are also critical as they affect the effective length.

6.  **What is an interaction diagram, and how is it relevant to the design of eccentrically loaded compression members?**

    *   **Answer:** An interaction diagram plots the relationship between the axial load capacity and the bending moment capacity of a cross-section. It is relevant to eccentrically loaded compression members because it defines the safe combinations of axial force and bending moment that the member can resist simultaneously, considering the combined stress effects and potential failure modes.

---

### Important Points to Remember:

*   **Slenderness Ratio is Key:** Always consider the slenderness ratio to determine if buckling is a potential failure mode.
*   **Eccentricity is Inevitable:** Assume some degree of eccentricity in real-world designs; pure axial loading is an idealization.
*   **Reinforcement Matters:** For RC members, the type, amount, and arrangement of steel reinforcement critically influence capacity and ductility.
*   **Failure Modes are Interconnected:** Short members fail by crushing, slender members by buckling, and intermediate members by a combination. Eccentricity introduces bending stresses.
*   **Serviceability vs. Ultimate:** This module focuses on performance under service loads (e.g., no excessive cracking or deformation). Ultimate limit state design (collapse prevention) is also critical but may involve different load factors and material strengths.
*   **Design Codes:** Always refer to relevant building codes (e.g., IS 456, ACI 318) for specific guidelines, assumptions, and formulas for designing compression members. These codes incorporate empirical data and safety factors.
