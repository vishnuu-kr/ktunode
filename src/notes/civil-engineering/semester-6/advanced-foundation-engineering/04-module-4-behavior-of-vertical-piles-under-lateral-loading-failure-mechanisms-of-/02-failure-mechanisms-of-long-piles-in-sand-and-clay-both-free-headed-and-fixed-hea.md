---
title: "Failure mechanisms of long piles in sand and clay both free
headed and fixed headed given by Broms-Empirical Methods to Determine
Lateral Strength of Piles-IS 2911 and Brom’s method."
subject: "ADVANCED FOUNDATION ENGINEERING"
module: "Module 4: Behavior of vertical piles under lateral loading – Failure mechanisms of short
piles in cohesive and granular soils for restrained and unrestrained conditions,
given by (Broms)."
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811217"
status: "completed"
scrapedAt: "2026-05-20T18:52:08.528Z"
---
# Advanced Foundation Engineering: Module 4 - Behavior of Vertical Piles Under Lateral Loading

## Topic: Failure Mechanisms of Long Piles in Sand and Clay (Broms), Empirical Methods to Determine Lateral Strength (IS 2911 and Broms)

---

### **1. Introduction to Lateral Loading on Piles**

*   **Definition:** Lateral loading refers to forces applied perpendicular to the axis of a pile, such as from wind, seismic activity, earth pressure, or impact.
*   **Importance:** Understanding pile behavior under lateral loads is crucial for the stability and safety of structures, especially in areas prone to lateral forces. Unlike axial loads, lateral loads often lead to more complex failure mechanisms involving bending, shear, and soil-pile interaction.
*   **Factors Influencing Lateral Response:**
    *   Pile properties (material, diameter, embedment length, stiffness)
    *   Soil properties (cohesion, friction angle, stiffness, stratification)
    *   Pile head conditions (free/unrestrained vs. fixed/restrained)
    *   Pile group effects
    *   Presence of adjacent structures

---

### **2. Broms' Approach to Lateral Pile Behavior**

Broms' seminal work (1964, 1965) provides a simplified framework for analyzing the behavior of single piles under lateral loads, categorizing failure mechanisms based on pile slenderness and soil type.

#### **2.1. Classification of Piles Based on Slenderness Ratio**

Broms classified piles into short, intermediate, and long piles based on their slenderness and the soil's behavior. The classification helps in predicting the dominant failure mechanism.

*   **Short Piles:** Failure is primarily due to the **crushing** of the pile itself or **shear failure** of the soil. Bending is not the primary failure mode.
*   **Intermediate Piles:** Exhibit a combination of shear and bending.
*   **Long Piles:** Failure is primarily due to **excessive bending** of the pile, and the soil's resistance is mobilized over a significant length.

The classification often involves a parameter like $P_{y.cr}/M_{cr}$, which relates the yield strength of the pile to its ultimate bending moment. For practical purposes, Broms used a simpler classification based on the ratio of the pile's embedment length to its diameter and the soil properties.

**Key Concept:** The distinction between short and long piles is critical for determining the appropriate failure mechanism and analysis method.

#### **2.2. Failure Mechanisms of Long Piles in Cohesive Soils (Clay)**

Broms analyzed long piles in clay under lateral loading by considering two primary pile head conditions.

**2.2.1. Free-headed (Unrestrained) Long Piles in Clay**

*   **Characteristics:** The pile head is free to rotate and translate.
*   **Failure Mechanism:** The pile fails primarily due to **excessive bending**. The soil resistance is mobilized along the pile shaft, creating a passive wedge behind the pile.
*   **Broms' Analysis:**
    *   **Ultimate Lateral Soil Resistance:** Broms simplified the soil resistance by assuming it to be a uniform distribution of pressure. For cohesive soils, he considered two zones:
        *   **Upper Zone (Active Pressure):** Where the pile moves away from the soil.
        *   **Lower Zone (Passive Pressure):** Where the soil offers resistance.
    *   **Failure Pattern:** The pile typically develops a **plastic hinge** at a certain depth. The pile may fail in bending or shear depending on the pile's stiffness and the soil's strength.
    *   **Equations (Conceptual):** Broms derived equations to estimate the ultimate lateral load ($P_u$) and the depth of the plastic hinge. These equations involve the undrained shear strength ($c_u$) of the clay, the pile diameter ($D$), and embedment length ($L$).
        *   The ultimate lateral load is generally related to $c_u D^2$ and the embedment length.
        *   The depth of the plastic hinge ($x_p$) is often found to be a fraction of the ultimate penetration depth.

**2.2.2. Fixed-headed (Restrained) Long Piles in Clay**

*   **Characteristics:** The pile head is restrained against rotation and translation, typically by a rigid pile cap or structure.
*   **Failure Mechanism:** Similar to free-headed piles, failure is dominated by **bending**. However, the restraint at the head significantly affects the distribution of bending moments and the location of the plastic hinge.
*   **Broms' Analysis:**
    *   **Soil Resistance:** Similar to free-headed piles, with mobilization of passive pressure.
    *   **Failure Pattern:** The fixed head induces a **negative bending moment** at the pile head. This shifts the location of the plastic hinge to a deeper depth compared to free-headed piles.
    *   **Equations (Conceptual):** Broms provided methods to calculate the ultimate lateral load and the plastic hinge location.
        *   The ultimate lateral load for fixed-headed piles is generally higher than for free-headed piles due to the redistribution of moments.
        *   The depth of the plastic hinge is typically greater, approaching $L/2$ or more, depending on the soil and pile properties.

**Key Concept:** The pile head condition significantly alters the bending moment diagram and consequently the pile's capacity and failure location.

#### **2.3. Failure Mechanisms of Long Piles in Granular Soils (Sand)**

Broms also analyzed long piles in granular soils, considering the different mode of soil resistance.

**2.3.1. Free-headed (Unrestrained) Long Piles in Sand**

*   **Characteristics:** The pile head is free to rotate and translate.
*   **Failure Mechanism:** Primarily **excessive bending**. The soil resistance is mobilized based on the internal friction angle ($\phi$) of the sand.
*   **Broms' Analysis:**
    *   **Ultimate Lateral Soil Resistance:** Broms modeled the soil resistance as a non-uniform pressure distribution, increasing with depth. The resistance is related to the effective stress and the angle of internal friction.
    *   **Failure Pattern:** The pile develops a **plastic hinge**. The sand's passive resistance increases with depth, leading to a stiffer response compared to clay.
    *   **Equations (Conceptual):**
        *   The ultimate lateral load ($P_u$) is related to the friction angle ($\phi$), the effective unit weight of sand ($\gamma'$), the pile diameter ($D$), and the embedment length ($L$).
        *   The depth of the plastic hinge is influenced by the increasing soil resistance with depth.

**2.3.2. Fixed-headed (Restrained) Long Piles in Sand**

*   **Characteristics:** The pile head is restrained against rotation and translation.
*   **Failure Mechanism:** Primarily **excessive bending**, with a shifted plastic hinge location due to the head restraint.
*   **Broms' Analysis:**
    *   **Soil Resistance:** Similar to free-headed piles, with increasing resistance with depth.
    *   **Failure Pattern:** The fixed head induces a negative bending moment at the pile head, shifting the plastic hinge to a greater depth.
    *   **Equations (Conceptual):**
        *   The ultimate lateral load is generally higher than for free-headed piles in sand.
        *   The depth of the plastic hinge is also greater.

**Key Concept:** In granular soils, the increasing lateral resistance with depth plays a significant role in the pile's response and failure mechanism.

---

### **3. Empirical Methods to Determine Lateral Strength of Piles**

Broms' method is an empirical/semi-empirical approach. Other empirical methods, particularly design codes, also provide guidelines.

#### **3.1. Broms' Empirical Method for Ultimate Lateral Load**

Broms provided simplified charts and equations to estimate the ultimate lateral load ($P_u$) for long piles. These methods are based on analyzing the pile as a beam on an elastic or Winkler foundation and then applying plasticity theory to determine the ultimate load and failure mechanism.

*   **Key Parameters:**
    *   $P_u$: Ultimate lateral load per pile.
    *   $D$: Pile diameter.
    *   $L$: Embedment length.
    *   $c_u$: Undrained shear strength of clay.
    *   $\phi$: Angle of internal friction of sand.
    *   $E_p$: Modulus of elasticity of the pile material.
    *   $I_p$: Moment of inertia of the pile cross-section.
    *   $M_p$: Plastic moment capacity of the pile.

*   **General Approach:** Broms' method involves defining "short" and "long" piles based on a characteristic length and then using specific formulas for each case. For long piles, the failure is governed by the pile's flexural capacity and the soil's passive resistance.

*   **Conceptual Equations (for Long Piles):**
    *   **In Clay (Undrained):**
        *   Free Head: $P_u \approx c_u D (L/D)^2$ (simplified, actual equations are more complex)
        *   Fixed Head: $P_u$ is generally higher than for free head.
    *   **In Sand (Drained):**
        *   Free Head: $P_u \approx (\phi \gamma' D^2) L$ (simplified, actual equations depend on $\phi$ and depth)
        *   Fixed Head: $P_u$ is generally higher than for free head.

**Important Note:** The actual Broms equations are more detailed and account for the shape of the soil resistance envelope and the pile's plastic moment capacity. They often involve comparing the applied load to the limiting capacity or the moment capacity of the pile.

#### **3.2. IS 2911 (Part 1/Sec 2): Indian Standard for Pile Foundations**

The Indian Standard provides guidelines for the design of pile foundations, including lateral load capacity. It often adopts simplified approaches based on empirical relationships and soil mechanics principles.

*   **Key Provisions:**
    *   **Method of Analysis:** IS 2911 often refers to analyzing piles as beams on elastic foundations or using simplified Winkler models.
    *   **Lateral Capacity Estimation:** The standard provides methods to estimate the lateral load capacity based on:
        *   **Allowable Bearing Capacity:** Similar to axial loads, a factor of safety is applied to the ultimate lateral capacity.
        *   **Soil Resistance:**
            *   **Cohesive Soils:** Resistance is often related to the undrained shear strength ($c_u$).
            *   **Granular Soils:** Resistance is related to the angle of internal friction ($\phi$) and effective stresses.
        *   **Pile Properties:** Stiffness ($E_p I_p$), embedment length, and diameter.
    *   **Behavior Consideration:** The standard might classify piles into short, medium, and long based on the pile-soil system characteristics.
    *   **Group Action:** For pile groups, the standard often requires considering group reduction factors for lateral capacity.
    *   **Allowable Lateral Load:** Determined by dividing the ultimate lateral capacity by an appropriate factor of safety (typically 2.5 or 3).

*   **Comparison with Broms:**
    *   **Philosophy:** IS 2911 provides a design code framework, while Broms offers a more theoretical approach to understanding failure mechanisms.
    *   **Simplification:** IS 2911 may employ more simplified assumptions for practical design.
    *   **Empirical Basis:** Both methods are heavily reliant on empirical correlations and observed behavior.

**Key Concept:** Design codes like IS 2911 provide a structured approach to ensure safety and compliance, often incorporating lessons learned from empirical studies like Broms'.

---

### **4. Practice Questions and Exercises**

**Question 1:**
Describe the primary difference in failure mechanism between a short pile and a long pile under lateral loading. What parameter is most crucial in distinguishing between these two categories?

**Answer 1:**
A short pile fails primarily due to **crushing or shear failure of the pile itself or the surrounding soil**. In contrast, a long pile fails primarily due to **excessive bending**. The crucial parameter distinguishing them is the **slenderness ratio** of the pile relative to the soil's stiffness and the pile's embedment length. For long piles, the soil resistance is mobilized over a significant length, leading to bending as the dominant failure mode.

---

**Question 2:**
How does the pile head condition (free-headed vs. fixed-headed) affect the behavior of a long pile under lateral loading in cohesive soil?

**Answer 2:**
In cohesive soil, a fixed-headed pile will generally have a higher lateral load capacity and a greater embedment depth for the plastic hinge compared to a free-headed pile. The restraint at the head of a fixed-headed pile induces a negative bending moment at the pile top, which helps to redistribute the moments along the pile shaft, shifting the plastic hinge to a deeper location. This leads to a stiffer response and a greater ability to resist lateral forces.

---

**Question 3:**
Explain the fundamental difference in how lateral soil resistance is mobilized in sand versus clay according to Broms' approach.

**Answer 3:**
In **clay (cohesive soil)**, the lateral soil resistance is primarily due to the undrained shear strength ($c_u$) and is often modeled as a more uniform distribution of passive pressure. In contrast, in **sand (granular soil)**, the lateral soil resistance is mobilized based on the angle of internal friction ($\phi$) and effective stresses, leading to a resistance that generally **increases with depth**. This difference in resistance mobilization influences the bending moment distribution and the location of the plastic hinge.

---

**Question 4:**
(Conceptual) A long pile is embedded in a uniform clay layer. If the pile is subjected to a lateral load, which part of the pile is most likely to experience failure initiation, and why?

**Answer 4:**
The failure initiation is most likely to occur at the location where the bending moment in the pile is maximum. For a long pile under lateral loading, this typically occurs at or near the location of the **plastic hinge**. This hinge forms at a depth where the combination of applied shear force, soil resistance, and pile bending capacity leads to yielding of the pile material. For a free-headed pile, this hinge might be at a shallower depth, while for a fixed-headed pile, it will be at a greater depth.

---

**Question 5:**
Briefly compare the role of Broms' method and IS 2911 in determining the lateral strength of piles.

**Answer 5:**
Broms' method provides a theoretical and empirical framework for understanding the fundamental failure mechanisms and load-carrying capacities of single piles under lateral loading. It offers insights into the behavior based on soil type, pile properties, and head conditions. IS 2911, on the other hand, is a design code that provides practical guidelines, simplified methods, and safety factors for the design of pile foundations. It aims to ensure the safety and serviceability of the foundation by translating theoretical principles and empirical data into design requirements. While Broms' work informs such codes, IS 2911 offers a direct pathway for engineers to design structures.

---

### **5. Important Points to Remember**

*   **Long piles fail primarily due to bending.**
*   The **pile head condition (free vs. fixed)** significantly impacts the bending moment distribution and the location of the plastic hinge.
*   **Cohesive soils** offer more uniform lateral resistance, while **granular soils** offer resistance that increases with depth.
*   Broms' method provides analytical solutions for predicting ultimate lateral capacity and failure mechanisms based on soil properties and pile characteristics.
*   **IS 2911** provides a code-based approach for practical design, incorporating simplified methods and safety factors.
*   The **plastic hinge** is a critical concept in the failure of long piles, representing the point of maximum bending moment and yielding.
*   For design, the ultimate lateral capacity is determined and then divided by a **factor of safety** to obtain the allowable lateral load.
*   Pile group effects can significantly alter the lateral capacity and response compared to single piles.
