---
title: "geometric, Kinematic and dynamic similarity"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 4: Dimensional  Analysis and Hydraulic similitude: Dimensional  analysis"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a81"
status: "completed"
scrapedAt: "2026-05-20T18:46:41.377Z"
---
# Mechanics of Fluid Flow: Module 4 - Dimensional Analysis and Hydraulic Similitude

## Topic: Geometric, Kinematic, and Dynamic Similarity

---

### **Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   Define and explain geometric similarity.
*   Define and explain kinematic similarity.
*   Define and explain dynamic similarity.
*   Identify the conditions required for each type of similarity to exist.
*   Understand the relationship between these three types of similarity and their importance in fluid mechanics.
*   Apply the concepts of similarity to predict fluid flow behavior in scaled models.

---

### **1. Introduction to Similarity**

In fluid mechanics, we often encounter situations where direct experimentation on a full-scale prototype is impractical, expensive, or impossible. This is particularly true for large-scale phenomena like the flow around an airplane wing, a ship hull, or in a large dam. Dimensional analysis and the principle of hydraulic similitude provide powerful tools to overcome these challenges.

**Hydraulic Similitude** is the principle that states that if two situations (e.g., a prototype and a model) are geometrically, kinematically, and dynamically similar, then the results obtained from the model can be reliably extrapolated to the prototype.

---

### **2. Geometric Similarity**

**Definition:** Geometric similarity exists between two objects or flow fields when they have the same shape, regardless of their size. It means that all linear dimensions of one object are proportional to the corresponding linear dimensions of the other object, and the angles between corresponding lines are the same.

**Conditions for Geometric Similarity:**

*   **Proportional Dimensions:** The ratio of corresponding linear dimensions (length, width, height, diameter, etc.) between the model and the prototype must be constant. This constant ratio is known as the **scale ratio** or **scale factor**, often denoted by $\lambda$ or $L_r$.
    *   $L_{model} / L_{prototype} = B_{model} / B_{prototype} = H_{model} / H_{prototype} = ... = \lambda$
*   **Identical Shape:** The shapes must be identical. If one object has a rounded corner, the corresponding corner on the other object must also be rounded with the same relative curvature.
*   **Same Orientation:** Corresponding surfaces must be parallel.

**Key Concepts:**

*   **Scale Ratio ($\lambda$):** The ratio of a linear dimension of the model to the corresponding linear dimension of the prototype. Typically, $\lambda < 1$ when referring to models.
    *   $\lambda = \frac{L_m}{L_p}$
*   **Scale Factor:** Can be used interchangeably with scale ratio.

**Examples:**

*   **Airplane Models in a Wind Tunnel:** A miniature airplane in a wind tunnel is geometrically similar to the full-scale airplane if all its dimensions (wingspan, chord length, fuselage length, etc.) are reduced by the same scale factor.
*   **Ship Models in a Towing Tank:** A small-scale model of a ship is geometrically similar to the actual ship if the ratio of its length to beam, its draft, and the shape of its hull are identical to the prototype.
*   **Distorted Models:** In cases where terrain or specific features dominate, models might be geometrically *distorted*. For example, in river models, the horizontal scale might be different from the vertical scale to accurately represent the water surface slope. However, for true geometric similarity, the scales must be the same.

**Important Point to Remember:** Geometric similarity is a **prerequisite** for kinematic and dynamic similarity. Without matching shapes and proportional dimensions, the other types of similarity cannot be achieved.

---

### **3. Kinematic Similarity**

**Definition:** Kinematic similarity exists between two flow fields when the velocities at corresponding points in the two flows are proportional, and the directions of velocities are the same. This implies that the velocity vectors at corresponding points are parallel and their magnitudes are in a constant ratio.

**Conditions for Kinematic Similarity:**

*   **Geometric Similarity:** The flow fields must be geometrically similar.
*   **Constant Velocity Ratio:** The ratio of velocities at corresponding points between the model and prototype must be constant. This ratio is related to the scale ratio and a time scale ratio.
    *   $V_{model} / V_{prototype} = \frac{\Delta L_m / \Delta t_m}{\Delta L_p / \Delta t_p}$
    *   If geometric similarity is maintained ($\Delta L_m / \Delta L_p = \lambda$), and the time scale ratio is also constant ($\Delta t_m / \Delta t_p = \lambda_t$), then the velocity ratio is:
        *   $V_{model} / V_{prototype} = \frac{\lambda}{\lambda_t}$
*   **Identical Flow Pattern:** This means that streamlines in the model flow must be geometrically similar to streamlines in the prototype flow. The pattern of flow (e.g., laminar or turbulent) and the relative location of eddies and vortices should be preserved in a scaled manner.

**Key Concepts:**

*   **Velocity Scale Ratio ($V_r$):** The ratio of velocities at corresponding points: $V_r = V_m / V_p$.
*   **Time Scale Ratio ($T_r$):** The ratio of characteristic time intervals: $T_r = t_m / t_p$.
*   **Relationship:** $V_r = \lambda / T_r$.
*   **Reynolds Number (Re):** For kinematic similarity to be achieved in many situations, the Reynolds number must be the same in both the model and the prototype. The Reynolds number represents the ratio of inertial forces to viscous forces.
    *   $Re = \frac{\rho V L}{\mu}$
    *   Condition for kinematic similarity: $Re_m = Re_p$

**Examples:**

*   **Flow Visualization:** Imagine observing smoke patterns around a model airplane in a wind tunnel and comparing it to the expected smoke patterns around a real airplane. If the streamlines are similarly shaped and the flow velocities are scaled correctly, then kinematic similarity exists.
*   **River Flow:** If the water particles in a model river reach a certain point at the same relative time as particles in the prototype river, and the velocity vectors at corresponding points are parallel and proportional, then kinematic similarity is achieved.

**Important Point to Remember:** Kinematic similarity ensures that the *motion* of the fluid is similar in both systems, neglecting the forces involved.

---

### **4. Dynamic Similarity**

**Definition:** Dynamic similarity exists between two flow fields when the ratios of all corresponding forces acting on the fluid particles are the same in both systems. This means that the force vectors at corresponding points are parallel and their magnitudes are in a constant ratio.

**Conditions for Dynamic Similarity:**

*   **Geometric Similarity:** The flow fields must be geometrically similar.
*   **Kinematic Similarity:** The flow fields must be kinematically similar.
*   **Constant Force Ratio:** The ratio of corresponding forces must be constant. The key here is that the *types* of forces dominating the flow must be the same in both the model and the prototype, and their ratios must be equal.

**Key Concepts:**

*   **Forces in Fluid Flow:**
    *   **Inertial Forces ($F_I$):** Forces due to mass and acceleration. Proportional to $\rho V^2 L^2$.
    *   **Viscous Forces ($F_V$):** Forces due to viscosity. Proportional to $\mu V L$.
    *   **Pressure Forces ($F_P$):** Forces due to pressure differences. Proportional to $P L^2$.
    *   **Gravitational Forces ($F_G$):** Forces due to gravity. Proportional to $\rho L^3 g$.
    *   **Surface Tension Forces ($F_T$):** Forces due to surface tension. Proportional to $\sigma L$.
    *   **Compressibility Forces ($F_C$):** Forces due to elastic compression. Proportional to $\rho V^2 L^2$ (related to Mach number).

*   **Dimensionless Numbers (Similitude Criteria):** Dynamic similarity is achieved when the ratios of these forces are equal in the model and prototype. These ratios are expressed as dimensionless numbers.

    *   **Reynolds Number (Re):** Ratio of inertial forces to viscous forces. Crucial for flows dominated by viscosity and inertia (e.g., flow in pipes, boundary layers).
        *   $Re = \frac{\rho V L}{\mu}$
        *   Condition for dynamic similarity (if viscosity and inertia are dominant): $Re_m = Re_p$

    *   **Froude Number (Fr):** Ratio of inertial forces to gravitational forces. Important for flows with a free surface where gravity is significant (e.g., ship waves, open channel flow, waves in a canal).
        *   $Fr = \frac{V}{\sqrt{g L}}$ (using characteristic length $L$)
        *   Condition for dynamic similarity (if inertia and gravity are dominant): $Fr_m = Fr_p$

    *   **Mach Number (M):** Ratio of inertial forces to compressibility forces. Important for high-speed flows where density changes are significant (e.g., supersonic aircraft).
        *   $M = \frac{V}{c}$ (where $c$ is the speed of sound)
        *   Condition for dynamic similarity (if inertia and compressibility are dominant): $M_m = M_p$

    *   **Weber Number (We):** Ratio of inertial forces to surface tension forces. Important for flows involving the formation of droplets or bubbles, or where surface tension effects are significant (e.g., spray atomization).
        *   $We = \frac{\rho V^2 L}{\sigma}$
        *   Condition for dynamic similarity (if inertia and surface tension are dominant): $We_m = We_p$

    *   **Euler Number (Eu):** Ratio of pressure forces to inertial forces. Often used in conjunction with other numbers.
        *   $Eu = \frac{\Delta P}{\rho V^2}$

*   **The Buckingham Pi Theorem:** This theorem is the theoretical foundation for dimensional analysis and similarity. It states that if a physical phenomenon is described by $n$ variables, and these variables involve $k$ fundamental dimensions, then the relationship between the variables can be expressed in terms of $(n-k)$ dimensionless groups (Pi terms). Dynamic similarity is achieved when all corresponding dimensionless groups are equal between the model and the prototype.

**Examples:**

*   **Ship Model Testing:** To achieve dynamic similarity between a ship and its model, both Reynolds number (for viscous drag) and Froude number (for wave-making resistance) must be matched. This often leads to using different scales for different aspects of the flow or using multiple towing speeds.
*   **Aircraft Wing Testing:** In a wind tunnel, achieving dynamic similarity for an airplane wing involves matching the Reynolds number (to simulate viscous effects) and potentially the Mach number (for compressibility effects at high speeds).

**Important Point to Remember:** Dynamic similarity is the most comprehensive type of similarity. If dynamic similarity is achieved, then kinematic and geometric similarity are inherently satisfied. It ensures that the underlying physics of the flow are the same in both the model and the prototype.

---

### **5. Relationship Between Geometric, Kinematic, and Dynamic Similarity**

*   **Geometric similarity is the foundation.** Without it, no other similarity can exist.
*   **Kinematic similarity builds upon geometric similarity.** It requires matching velocity directions and having proportional velocities at corresponding points.
*   **Dynamic similarity builds upon both geometric and kinematic similarity.** It requires matching the ratios of all relevant forces, which is achieved by equating corresponding dimensionless numbers.

**Hierarchy:**

Geometric Similarity $\implies$ Kinematic Similarity $\implies$ Dynamic Similarity

If dynamic similarity is achieved, then geometric and kinematic similarity are automatically satisfied.

---

### **6. Application of Similarity**

The primary application of these similarity concepts is in **model testing**. By designing a model that is geometrically similar to the prototype and ensuring that the relevant dimensionless numbers are equal between the model and prototype, engineers can:

*   **Predict performance:** Estimate drag, lift, pressure drop, wave resistance, etc., for the prototype.
*   **Optimize design:** Test different design variations on the model to find the most efficient configuration.
*   **Understand complex phenomena:** Visualize and analyze flow patterns that are difficult to study on the full-scale prototype.

**Challenges in Model Testing:**

It is often difficult or impossible to achieve dynamic similarity for all relevant forces simultaneously. For instance, matching both Reynolds number and Froude number for a ship model might require different model speeds or scales, leading to compromises. In such cases, engineers must:

*   Identify the dominant forces for the specific problem.
*   Prioritize matching the dimensionless numbers corresponding to these dominant forces.
*   Understand the limitations imposed by neglecting other forces.

---

### **7. Practice Questions and Exercises**

**Question 1:**
Define geometric similarity and list its essential conditions.

**Question 2:**
What is kinematic similarity? What dimensionless number is crucial for achieving kinematic similarity in many fluid flow problems, and why?

**Question 3:**
Explain dynamic similarity. What are the main types of forces considered in fluid flow, and how are they represented by dimensionless numbers?

**Question 4:**
A 1:100 scale model of a ship is to be tested in a towing tank. The ship travels at a speed of 20 knots.
a) What should be the speed of the model if Froude number similarity is to be maintained?
b) If the Reynolds number for the full-scale ship is $5 \times 10^9$, what should be the Reynolds number for the model? Will it be the same or different if kinematic similarity is based on Froude number?
(Given: 1 knot = 0.514 m/s)

**Question 5:**
In a wind tunnel test for an aircraft wing, the prototype flies at 200 m/s at an altitude where air density is $0.8 kg/m^3$ and viscosity is $1.5 \times 10^{-5} Pa.s$. The characteristic length of the wing is 5 m. The model is tested at the same conditions. What should be the velocity of the air flowing over the model if geometric similarity is maintained and dynamic similarity is desired?

---

### **8. Answers to Practice Questions**

**Answer 1:**
Geometric similarity exists when two objects or flow fields have the same shape, and all corresponding linear dimensions are proportional by a constant scale ratio ($\lambda$).
Conditions:
*   All linear dimensions are proportional: $L_m/L_p = B_m/B_p = H_m/H_p = \lambda$.
*   All corresponding angles are equal.
*   Corresponding surfaces are parallel.

**Answer 2:**
Kinematic similarity exists when the flow patterns are identical in shape, and the velocities at corresponding points are proportional and parallel.
The **Reynolds number (Re)** is crucial for achieving kinematic similarity in many situations, as it represents the ratio of inertial forces to viscous forces. Matching Re ensures that the relative importance of these forces is the same, leading to similar flow patterns (e.g., laminar vs. turbulent, boundary layer behavior).

**Answer 3:**
Dynamic similarity exists when the flow patterns are geometrically and kinematically similar, and the ratios of all corresponding forces acting on the fluid are the same. This is achieved by matching dimensionless numbers that represent the ratios of different forces.
Main types of forces and associated dimensionless numbers:
*   **Inertial forces vs. Viscous forces:** Reynolds number ($Re = \frac{\rho V L}{\mu}$)
*   **Inertial forces vs. Gravitational forces:** Froude number ($Fr = \frac{V}{\sqrt{g L}}$)
*   **Inertial forces vs. Compressibility forces:** Mach number ($M = \frac{V}{c}$)
*   **Inertial forces vs. Surface tension forces:** Weber number ($We = \frac{\rho V^2 L}{\sigma}$)

**Answer 4:**
Given: Scale ratio $\lambda = L_m/L_p = 1/100$. Prototype speed $V_p = 20$ knots.
a) For Froude number similarity: $Fr_m = Fr_p$.
$\frac{V_m}{\sqrt{g L_m}} = \frac{V_p}{\sqrt{g L_p}}$
$\frac{V_m}{V_p} = \sqrt{\frac{L_m}{L_p}} = \sqrt{\lambda}$
$V_m = V_p \sqrt{\lambda} = 20 \text{ knots} \times \sqrt{1/100} = 20 \times (1/10) = 2$ knots.
Model speed should be 2 knots.

b) For the full-scale ship, $Re_p = 5 \times 10^9$.
If kinematic similarity is based on Froude number, the velocity scale ratio is $V_r = V_m/V_p = \sqrt{\lambda} = 0.1$.
The Reynolds number is $Re = \frac{\rho V L}{\mu}$.
$Re_m = \frac{\rho_m V_m L_m}{\mu_m}$ and $Re_p = \frac{\rho_p V_p L_p}{\mu_p}$.
$\frac{Re_m}{Re_p} = \frac{\rho_m V_m L_m}{\mu_m} \times \frac{\mu_p}{\rho_p V_p L_p} = \frac{\rho_m}{\rho_p} \times \frac{V_m}{V_p} \times \frac{L_m}{L_p} \times \frac{\mu_p}{\mu_m}$
Assuming water in the towing tank has the same properties as seawater for the ship ($\rho_m = \rho_p, \mu_m = \mu_p$):
$\frac{Re_m}{Re_p} = \frac{V_m}{V_p} \times \frac{L_m}{L_p} = \sqrt{\lambda} \times \lambda = (0.1) \times (0.01) = 0.001$.
$Re_m = Re_p \times 0.001 = (5 \times 10^9) \times 0.001 = 5 \times 10^6$.

The Reynolds number for the model will be different and much lower than the prototype ($5 \times 10^6$ vs $5 \times 10^9$). This indicates that while Froude number similarity is achieved, Reynolds number similarity is not. This is a common issue in ship model testing where viscosity effects are not perfectly scaled.

**Answer 5:**
Given: Prototype velocity $V_p = 200$ m/s, characteristic length $L_p = 5$ m. Model is tested at the same conditions ($\rho_m = \rho_p, \mu_m = \mu_p$).
For dynamic similarity, we need to match the relevant dimensionless numbers. For aircraft wings, Reynolds number (viscous effects) and Mach number (compressibility effects) are usually important. Let's assume we need to match both.

**Reynolds Number Similarity:** $Re_m = Re_p$
$\frac{\rho_m V_m L_m}{\mu_m} = \frac{\rho_p V_p L_p}{\mu_p}$
Since $\rho_m = \rho_p$ and $\mu_m = \mu_p$, and assuming geometric similarity ($L_m/L_p = \lambda$), we get:
$V_m \lambda = V_p$
$V_m = V_p / \lambda$

**Mach Number Similarity:** $M_m = M_p$
$\frac{V_m}{c_m} = \frac{V_p}{c_p}$
Assuming the speed of sound is the same for the model and prototype air ($c_m = c_p$):
$V_m = V_p$

**Conflict:** These two conditions give conflicting requirements for $V_m$ unless $\lambda=1$ (which means no model) or certain specific conditions are met.

Let's re-read the question: "What should be the velocity of the air flowing over the model if geometric similarity is maintained and dynamic similarity is desired?" This implies we need to achieve dynamic similarity. The problem statement doesn't specify *which* dimensionless number to match, but for aircraft, both Re and M are critical.

If we assume the question implies matching the *most* critical dimensionless number for the flight regime described (which isn't explicitly given), or if we assume a simplification where only one needs to be matched for the purpose of the exercise, it's ambiguous.

**However, if the question implies we must match *both* relevant numbers for dynamic similarity in the context of aircraft aerodynamics, there's a conflict.**
Typically, for sub-sonic flight, matching Reynolds number is primary. For supersonic flight, matching Mach number is primary.

Let's assume for this exercise, we are meant to primarily match the Reynolds number as a common requirement, or if the flight regime is sub-sonic. If we assume the flight is sub-sonic, and we want to match Reynolds number, we need to consider the scale $\lambda$. Since $\lambda$ is not given, we can't determine $V_m$ based on Re alone.

**Let's assume a typical wind tunnel scenario where the goal is to match the Reynolds number.** The question likely implies that we might have a different scale, but the test conditions (density, viscosity) are the same. If the question is interpreted as "if $V_p$ was measured at $L_p$ and we want to test a model of *any* scale $\lambda$ at the same conditions to match Re", then:
$Re_m = Re_p$
$\frac{\rho V_m L_m}{\mu} = \frac{\rho V_p L_p}{\mu}$
$V_m L_m = V_p L_p$
$V_m (L_m/L_p) = V_p$
$V_m \lambda = V_p$
$V_m = V_p / \lambda$

**If we assume the question implies matching Mach number:**
$M_m = M_p$
$\frac{V_m}{c_m} = \frac{V_p}{c_p}$
Since $c_m = c_p$ and conditions are the same, $V_m = V_p = 200$ m/s.

**Let's re-examine the phrasing: "What should be the velocity of the air flowing over the model..."** This strongly suggests we are determining the model's operating velocity. Without the model scale ($\lambda$), we cannot determine $V_m$ using Re. If we assume the test is performed at the same Mach number as the prototype, then $V_m = V_p$. This is a common simplification if compressibility is significant.

**Common Wind Tunnel Practice:** For many aircraft tests, the wind tunnel air speed is set to match the Mach number of the flight, and then efforts are made to achieve a sufficiently high Reynolds number using a smaller scale model and higher air density (if possible) or by accepting a lower Reynolds number.

**Let's assume the simplest interpretation that the question implies matching Mach Number, as it is often a primary criterion for high-speed flight.**
If $M_m = M_p$, and $c_m = c_p$, then $V_m = V_p$.
**Therefore, $V_m = 200$ m/s.**

**However, if the question implied matching Reynolds Number and gave a scale, the answer would be different.** Given the lack of scale, matching Mach number (by matching velocity if air properties are the same) is the most direct interpretation for dynamic similarity in aerodynamic contexts where compressibility is relevant. If the flight regime was low speed (subsonic), then matching Reynolds Number would be more critical.

**Let's consider the possibility that the question is flawed by not providing $\lambda$ or specifying the flight regime.** If we must choose one, matching Mach number is often done by matching velocity in similar air conditions.

**Revised interpretation considering common practice:**
To achieve dynamic similarity for aircraft, both Mach number (compressibility) and Reynolds number (viscosity) are crucial.
1.  **Mach Number:** To match the Mach number, $M_m = M_p$, which implies $V_m/c_m = V_p/c_p$. If air properties are the same, $c_m = c_p$, so $V_m = V_p = 200$ m/s.
2.  **Reynolds Number:** To match the Reynolds number, $Re_m = Re_p$, which implies $\frac{\rho_m V_m L_m}{\mu_m} = \frac{\rho_p V_p L_p}{\mu_p}$. If air properties are the same, $V_m L_m = V_p L_p$. This means $V_m/V_p = L_p/L_m = 1/\lambda$. This requires a specific model scale $\lambda$ to achieve the same velocity.

Without a specified scale $\lambda$, we cannot determine $V_m$ from the Reynolds number condition alone. If we assume the intent is to match Mach number (which is often achieved by matching velocity in the same fluid), then $V_m = 200$ m/s.

**Final Answer for Q5 (based on matching Mach number): $V_m = 200$ m/s.**

---

### **9. Important Points to Remember:**

*   **Similarity is key:** It bridges the gap between model tests and real-world prototypes.
*   **Hierarchy:** Geometric $\rightarrow$ Kinematic $\rightarrow$ Dynamic. Dynamic similarity is the most comprehensive.
*   **Dimensionless Numbers:** These are the "tickets" to achieving similarity. Matching them ensures that the ratios of forces are the same.
*   **Dominant Forces:** Identify which forces are most important for a given problem to select the correct dimensionless numbers to match.
*   **Model Testing Challenges:** It's often impossible to match all dimensionless numbers simultaneously. Prioritization and understanding limitations are crucial.
*   **Buckingham Pi Theorem:** Provides the theoretical basis for reducing the number of variables and identifying dimensionless groups.

---
