---
title: "types of fluids (description only)"
subject: "FLUID MECHANICS"
module: "Module 1: Fluid properties"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106e1"
status: "completed"
scrapedAt: "2026-05-20T18:40:21.077Z"
---
# FLUID MECHANICS: Module 1 - Fluid Properties

## Topic: Types of Fluids (Description Only)

This module introduces the fundamental properties of fluids. Understanding these properties is crucial for analyzing fluid behavior in various engineering applications. This specific topic focuses on classifying fluids based on their rheological behavior.

---

### Learning Outcomes

Upon completion of this topic, you should be able to:

*   **Describe** the concept of a Newtonian fluid.
*   **Describe** the concept of a non-Newtonian fluid.
*   **Differentiate** between various types of non-Newtonian fluids.
*   **Explain** the rheological behavior of fluids and how it relates to their classification.

---

### Key Concepts and Definitions

#### 1. What is a Fluid?

A fluid is a substance that deforms continuously when subjected to a shearing stress. Unlike solids, fluids do not possess a definite shape and take the shape of their container. They are characterized by their ability to flow.

#### 2. Rheology

Rheology is the study of the flow of matter, primarily in a liquid or gaseous state, but also as "soft solids" or solids under conditions in which they respond as such a fluid. In fluid mechanics, rheology is particularly concerned with the relationship between stress and strain rate.

#### 3. Shear Stress ($\tau$)

Shear stress is the force applied parallel to a surface, divided by the area of that surface. In the context of fluids, it's the force that causes layers of the fluid to slide past each other.

#### 4. Shear Rate ($\frac{du}{dy}$)

Shear rate (also known as the velocity gradient) is the rate at which the fluid's velocity changes across a perpendicular distance. It represents how quickly the fluid is deforming.

---

### Types of Fluids

Fluids can be broadly classified into two main categories based on their response to shear stress and shear rate: **Newtonian Fluids** and **Non-Newtonian Fluids**.

#### 1. Newtonian Fluids

*   **Definition:** A Newtonian fluid is a fluid whose viscosity remains constant regardless of the applied shear stress or shear rate. The relationship between shear stress and shear rate is linear.
*   **Rheological Behavior:** For a Newtonian fluid, the shear stress is directly proportional to the shear rate. This proportionality constant is known as the **dynamic viscosity** ($\mu$).
    *   **Equation:** $\tau = \mu \frac{du}{dy}$
*   **Key Characteristics:**
    *   Viscosity is independent of shear rate.
    *   Exhibit a linear relationship between shear stress and shear rate.
    *   Follow Newton's law of viscosity.
*   **Examples:**
    *   **Water:** A classic example of a Newtonian fluid. Its viscosity at a given temperature is constant.
    *   **Air:** Another common Newtonian fluid.
    *   **Simple oils (e.g., motor oil at moderate temperatures):** Many common oils behave as Newtonian fluids under normal operating conditions.
    *   **Alcohol:** Ethanol and methanol are Newtonian.
    *   **Gases:** Most common gases behave as Newtonian fluids.

#### 2. Non-Newtonian Fluids

*   **Definition:** A non-Newtonian fluid is a fluid whose viscosity changes when subjected to an applied shear stress or shear rate. The relationship between shear stress and shear rate is non-linear.
*   **Rheological Behavior:** The viscosity of non-Newtonian fluids is not constant and depends on the shear rate. This leads to a variety of flow behaviors.
*   **Key Characteristics:**
    *   Viscosity is dependent on shear rate.
    *   Exhibit a non-linear relationship between shear stress and shear rate.
    *   Do not follow Newton's law of viscosity directly.
*   **Sub-Classification of Non-Newtonian Fluids:**

    Non-Newtonian fluids are further classified based on how their apparent viscosity changes with shear rate:

    *   **a) Shear-Thinning Fluids (Pseudoplastic)**
        *   **Description:** The apparent viscosity of these fluids decreases as the shear rate increases. They become less viscous (thinner) when agitated or stirred.
        *   **Rheological Behavior:** $\tau \propto (\frac{du}{dy})^n$, where $n < 1$.
        *   **Examples:**
            *   **Ketchup:** Becomes easier to pour (thinner) when shaken or squeezed.
            *   **Paint:** Easier to spread and apply when brushed or rolled.
            *   **Blood:** The viscosity of blood decreases as it flows faster through blood vessels.
            *   **Shampoos and conditioners:** Designed to be easily spreadable.
            *   **Yogurt:** Thins out when stirred.

    *   **b) Shear-Thickening Fluids (Dilatant)**
        *   **Description:** The apparent viscosity of these fluids increases as the shear rate increases. They become more viscous (thicker) when subjected to higher stress.
        *   **Rheological Behavior:** $\tau \propto (\frac{du}{dy})^n$, where $n > 1$.
        *   **Examples:**
            *   **Cornstarch and water mixture (Oobleck):** Feels solid when you punch it or try to stir it quickly, but flows like a liquid when handled gently.
            *   **Wet sand:** Becomes firmer when you step on it quickly.
            *   **Some concentrated suspensions:** Like silicon carbide in water.

    *   **c) Bingham Plastics**
        *   **Description:** These fluids behave like a rigid solid at low stresses but flow like a viscous fluid once a certain **yield stress** ($\tau_y$) is exceeded. After the yield stress is overcome, they may behave as Newtonian or non-Newtonian fluids.
        *   **Rheological Behavior:**
            *   $\tau < \tau_y$: Behaves as a solid (no flow).
            *   $\tau > \tau_y$: Behaves as a fluid. If it behaves like a Newtonian fluid after yielding: $\tau = \tau_y + \mu \frac{du}{dy}$
        *   **Examples:**
            *   **Toothpaste:** Stays in place on your toothbrush until you apply pressure to spread it on your teeth.
            *   **Mayonnaise:** Holds its shape until spread.
            *   **Mud:** Can resist flow until a certain amount of force is applied.
            *   **Drilling muds:** Used in oil and gas exploration.

    *   **d) Thixotropic Fluids**
        *   **Description:** These are time-dependent shear-thinning fluids. Their apparent viscosity decreases over time when subjected to a constant shear rate. If the shear is removed, their viscosity gradually recovers to its original value over time.
        *   **Rheological Behavior:** Viscosity is a function of both shear rate and time.
        *   **Examples:**
            *   **Yogurt:** While often described as shear-thinning, it can also exhibit thixotropy as its structure breaks down with continuous agitation.
            *   **Some paints:** Can become easier to brush after initial stirring.
            *   **Certain gels and colloids.**

    *   **e) Rheopectic Fluids (Anti-thixotropic Fluids)**
        *   **Description:** These are time-dependent shear-thickening fluids. Their apparent viscosity increases over time when subjected to a constant shear rate. This is a rarer phenomenon.
        *   **Rheological Behavior:** Viscosity is a function of both shear rate and time, increasing with time under shear.
        *   **Examples:**
            *   **Some gypsum pastes.**
            *   **Certain printing inks.**

---

### Important Points to Remember

*   **The fundamental difference** between Newtonian and non-Newtonian fluids lies in the **constancy of their viscosity** with respect to shear rate.
*   **Newtonian fluids** have a constant viscosity and a linear relationship between shear stress and shear rate.
*   **Non-Newtonian fluids** have a variable viscosity that depends on the shear rate (and sometimes time).
*   **Shear-thinning (pseudoplastic)** fluids become less viscous with increased shear.
*   **Shear-thickening (dilatant)** fluids become more viscous with increased shear.
*   **Bingham plastics** require a yield stress before they start to flow.
*   **Thixotropic fluids** are time-dependent shear-thinning.
*   **Rheopectic fluids** are time-dependent shear-thickening.
*   Understanding these classifications is vital for predicting how fluids will behave in pipes, pumps, mixing processes, and many other engineering applications.

---

### Practice Questions/Exercises

**Question 1:**

Which of the following is a characteristic of a Newtonian fluid?
a) Its viscosity increases with shear rate.
b) Its viscosity decreases with shear rate.
c) Its viscosity remains constant regardless of shear rate.
d) It requires a yield stress to flow.

**Question 2:**

Ketchup is a common example of which type of non-Newtonian fluid?
a) Bingham Plastic
b) Shear-Thickening (Dilatant)
c) Shear-Thinning (Pseudoplastic)
d) Rheopectic

**Question 3:**

A fluid that flows like a solid until a certain stress is applied, after which it flows like a viscous fluid, is known as a:
a) Newtonian fluid
b) Thixotropic fluid
c) Shear-thinning fluid
d) Bingham plastic

**Question 4:**

Describe the rheological behavior of blood, classifying it if possible.

**Question 5:**

Provide two distinct examples of shear-thickening (dilatant) fluids.

---

### Answers to Practice Questions

**Answer 1:**
c) Its viscosity remains constant regardless of shear rate.

**Answer 2:**
c) Shear-Thinning (Pseudoplastic)

**Answer 3:**
d) Bingham plastic

**Answer 4:**
Blood is a non-Newtonian fluid. Specifically, it is generally classified as a shear-thinning (pseudoplastic) fluid because its viscosity decreases as the shear rate increases. This is due to the way red blood cells aggregate and disaggregate under different flow conditions. It can also exhibit some Bingham plastic characteristics at very low flow rates due to the presence of fibrinogen.

**Answer 5:**
1. Cornstarch and water mixture (Oobleck)
2. Wet sand
