---
title: "velocity triangle"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 2: Axial flow compressor – Working principle"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463ca0"
status: "completed"
scrapedAt: "2026-05-20T18:13:48.514Z"
---
# Module 2: Axial Flow Compressor - Working Principle
## Topic: Velocity Triangles

---

### **1. Introduction to Axial Flow Compressors**

Axial flow compressors are rotary mechanical devices that increase the pressure of a fluid by accelerating it along the axis of rotation. They are a crucial component in gas turbine engines, responsible for compressing the incoming air before it enters the combustion chamber.

*   **Key Components:**
    *   **Rotor Blades:** Rotating blades attached to the shaft. They impart kinetic energy to the fluid.
    *   **Stator Vanes (Nozzles):** Stationary blades placed between rotor stages. They guide the fluid and convert kinetic energy into pressure energy.
*   **Working Principle:** Air flows through successive stages of rotor and stator blades. Each stage involves acceleration of the air by the rotor followed by diffusion (slowing down and pressure rise) in the stator.

---

### **2. The Concept of Velocity Triangles**

Velocity triangles are graphical representations that depict the velocities of the fluid relative to the moving blades and the stationary casing at any given point in the compressor. They are fundamental to understanding the energy transfer and the aerodynamic design of compressor blades.

*   **Purpose:**
    *   Analyze the flow of air through each stage of the compressor.
    *   Determine the angles of the blades for optimal performance.
    *   Calculate the work done on the fluid and the change in enthalpy.
    *   Understand the incidence and deviation angles, which affect efficiency.

*   **Key Velocities Involved:**
    *   **Absolute Velocity (V):** The velocity of the air as seen by a stationary observer. It has tangential and axial components.
    *   **Blade Velocity (U):** The tangential velocity of the rotating blade at a specific radius. It depends on the rotational speed of the rotor and the radius. $U = \omega r$, where $\omega$ is the angular velocity and $r$ is the radius.
    *   **Relative Velocity (W):** The velocity of the air as seen by an observer moving with the blade. This is the velocity at which the air actually flows over the blade profile.

---

### **3. Velocity Triangles at the Rotor Inlet and Outlet**

For each stage of an axial flow compressor, we typically construct velocity triangles at the inlet and outlet of the rotor blades.

#### **3.1. Rotor Inlet Velocity Triangle**

At the inlet of the rotor blades, the air has an absolute velocity $V_1$ and a blade velocity $U$. The relative velocity $W_1$ is the vector difference between the absolute velocity and the blade velocity.

*   **Components of Absolute Velocity ($V_1$):**
    *   **Axial Velocity ($V_{a1}$):** The component of $V_1$ parallel to the axis of rotation. It's generally assumed to be constant across a stage for simplicity (in reality, it can change slightly due to radial flow).
    *   **Tangential Velocity ($V_{w1}$):** The component of $V_1$ perpendicular to the axis of rotation, representing the swirl. For the first stage, $V_{w1}$ is typically zero if the air enters without pre-swirl.

*   **Blade Velocity ($U$):**
    *   This velocity is purely tangential and in the direction of rotation.

*   **Relative Velocity ($W_1$):**
    *   $W_1 = V_1 - U$ (vector subtraction)

*   **Graphical Representation:**
    *   Draw the axial velocity $V_{a1}$ vertically upwards.
    *   Draw the blade velocity $U$ horizontally to the right (assuming rotation to the right).
    *   Draw the absolute velocity $V_1$ as a vector starting from the same origin as $U$ and $V_{a1}$.
    *   The relative velocity $W_1$ is the vector from the tip of $V_1$ to the tip of $U$.

*   **Important Angles:**
    *   **Inlet Absolute Flow Angle ($\alpha_1$):** The angle between the absolute velocity $V_1$ and the axial direction.
        *   $\tan(\alpha_1) = \frac{V_{w1}}{V_{a1}}$
    *   **Inlet Relative Flow Angle ($\beta_1$):** The angle between the relative velocity $W_1$ and the axial direction. This angle is crucial for blade design.
        *   $\tan(\beta_1) = \frac{V_{w1}}{V_{a1}}$  **(Mistake in derivation, correct is below)**
        *   **Correct:** The relative velocity $W_1$ is drawn from the tip of $U$ to the tip of $V_1$. The diagram shows $V_{a1}$ and $V_{w1}$ forming a right triangle with $V_1$. The relative velocity $W_1$ is the hypotenuse of a triangle formed by $V_{a1}$ and $(U-V_{w1})$.
        *   **Corrected:** $\tan(\beta_1) = \frac{U - V_{w1}}{V_{a1}}$

#### **3.2. Rotor Outlet Velocity Triangle**

After passing through the rotor, the air's velocity changes due to the work done by the blades. The outlet velocity triangle describes the velocities at the exit of the rotor blades.

*   **Components of Absolute Velocity ($V_2$):**
    *   **Axial Velocity ($V_{a2}$):** Assumed constant $V_{a2} = V_{a1}$ for simplification.
    *   **Tangential Velocity ($V_{w2}$):** The tangential component of the absolute velocity at the rotor outlet. The rotor is designed to increase this tangential velocity.

*   **Blade Velocity ($U$):**
    *   Same as at the inlet, purely tangential.

*   **Relative Velocity ($W_2$):**
    *   $W_2 = V_2 - U$ (vector subtraction)

*   **Graphical Representation:**
    *   Again, $V_{a2}$ is vertical.
    *   $U$ is horizontal.
    *   $V_{w2}$ is now typically larger than $V_{w1}$ and in the same direction as $U$ (forward whirl).
    *   $V_2$ is the vector sum of $V_{a2}$ and $V_{w2}$ (if considering absolute velocity components) or $V_2 = W_2 + U$ (vector addition of relative and blade velocities).
    *   $W_2$ is the vector from the tip of $U$ to the tip of $V_2$.

*   **Important Angles:**
    *   **Outlet Absolute Flow Angle ($\alpha_2$):** The angle between the absolute velocity $V_2$ and the axial direction.
        *   $\tan(\alpha_2) = \frac{V_{w2}}{V_{a2}}$
    *   **Outlet Relative Flow Angle ($\beta_2$):** The angle between the relative velocity $W_2$ and the axial direction. This angle is important for the incidence angle on the subsequent stator or rotor.
        *   $\tan(\beta_2) = \frac{V_{w2} - U}{V_{a2}}$ (if $V_{w2} > U$) or $\tan(\beta_2) = \frac{U - V_{w2}}{V_{a2}}$ (if $W_2$ is reversed relative to $U$) - **need to be careful with direction.**
        *   **Corrected:** $W_2$ is the hypotenuse of a triangle formed by $V_{a2}$ and $U-V_{w2}$.
        *   **Corrected:** $\tan(\beta_2) = \frac{U - V_{w2}}{V_{a2}}$ (assuming $V_{w2} < U$ or reversed whirl component). In rotor outlet, we typically have $U > V_{w2}$.

---

### **4. Stator and Rotor Action**

The velocity triangles help illustrate the function of both stator and rotor blades.

*   **Rotor Blades:**
    *   **Function:** To impart kinetic energy to the fluid.
    *   **Effect:** The rotor blades exert a torque on the fluid, increasing its angular momentum and hence its tangential velocity ($V_w$). This also increases the absolute velocity $V$. The relative velocity $W$ is the primary velocity over the blade surface.
    *   **Work Done:** The work done by the rotor on the fluid per unit mass is given by Euler's turbomachine equation:
        *   $W_{rotor} = U (V_{w2} - V_{w1})$
        *   This is the change in whirl component multiplied by the blade speed. (As per Ganesan, Chapter 3, Eq. 3.2)

*   **Stator Vanes (Nozzles):**
    *   **Function:** To guide the fluid and convert kinetic energy into pressure energy through diffusion.
    *   **Action:** Stators are designed as diverging passages (in subsonic flow) to slow down the fluid. They typically have a tangential velocity component (whirl) imparted to the flow.
    *   **Velocity Triangle at Stator Inlet:** This is the outlet velocity triangle of the preceding rotor.
    *   **Velocity Triangle at Stator Outlet:** The absolute velocity $V_2$ from the rotor is now the inlet absolute velocity for the stator. The stator vanes guide this flow, changing its direction and slowing it down, thereby increasing its pressure. The stator vanes typically add a negative whirl component to the flow, or at least reduce the positive whirl component from the rotor.

---

### **5. Types of Stages: Reaction and Impulse**

The degree of reaction in a stage is determined by the pressure changes across the rotor and stator. Velocity triangles are essential for calculating this.

*   **Degree of Reaction (R):**
    *   Defined as the ratio of the enthalpy drop in the rotor to the enthalpy drop in the stage.
    *   For incompressible flow, it relates to the changes in kinetic energy.
    *   $R = \frac{\text{Work done on fluid by rotor}}{\text{Work done on fluid by stage}}$
    *   $R = \frac{h_{rotor}}{h_{stage}} = \frac{\Delta i_{rotor}}{\Delta i_{rotor} + \Delta i_{stator}}$
    *   In terms of velocities (assuming constant axial velocity $V_a$):
        *   $R = \frac{W_1^2 - W_2^2}{W_1^2 - W_2^2 + V_1^2 - V_2^2}$ (This is complex, a simpler approach is via enthalpy)

*   **Relationship with Velocity Triangles:**
    *   **Impulse Stage:** No change in relative velocity magnitude across the rotor. $W_1 = W_2$. This means the rotor blades are primarily deflecting the flow, not changing its speed significantly relative to the blades. In the velocity triangle, this implies $V_{w1} = U - W_1$ and $V_{w2} = U - W_2$. If $W_1 = W_2$, then $V_{w1} = V_{w2}$. The pressure drop occurs entirely in the stator.
    *   **Reaction Stage:** There is a change in relative velocity magnitude across the rotor. $W_1 \neq W_2$. The rotor does work by changing the relative velocity. Pressure drop occurs across both rotor and stator.
    *   **50% Reaction Stage:** The enthalpy drop in the rotor is equal to the enthalpy drop in the stator. This means the pressure rise is distributed equally between the rotor and stator. In terms of velocities, it often implies that the change in relative velocity across the rotor is equal to the change in absolute velocity across the stator.
        *   $R = 0.5 \implies \frac{U(V_{w2} - V_{w1})}{U(V_{w2} - V_{w1})} = 0.5 \implies W_1^2 - W_2^2 = V_1^2 - V_2^2$ (This relation is derived from enthalpy balance and is a good approximation for reaction stages).

---

### **6. Key Concepts and Definitions Recap**

*   **Absolute Velocity (V):** Velocity of air relative to stationary casing.
*   **Blade Velocity (U):** Tangential velocity of the rotor blade.
*   **Relative Velocity (W):** Velocity of air relative to the moving rotor blade.
*   **Axial Velocity (Va):** Component of velocity parallel to the axis of rotation.
*   **Tangential Velocity (Vw):** Component of velocity perpendicular to the axis of rotation (whirl).
*   **Euler's Turbomachine Equation:** $W_{stage} = U_2 V_{w2} - U_1 V_{w1}$ (for pumps/compressors, considering signed whirl components). For axial compressors, $U_1=U_2$. So, $W_{stage} = U (V_{w2} - V_{w1})$.
*   **Incidence Angle:** The angle between the incoming relative velocity vector and the chord line of the blade. Affects flow separation and efficiency.
*   **Deviation Angle:** The angle between the exit relative velocity vector and the tangent to the blade's trailing edge.

---

### **7. Practice Questions and Exercises**

**Question 1:**
An axial flow compressor stage has the following conditions at the rotor inlet and outlet:
Rotor inlet: $V_{a1} = 150$ m/s, $V_{w1} = 50$ m/s, $U = 200$ m/s.
Rotor outlet: $V_{a2} = 150$ m/s, $V_{w2} = 170$ m/s.
Calculate:
a) The inlet absolute flow angle ($\alpha_1$).
b) The inlet relative flow angle ($\beta_1$).
c) The outlet absolute flow angle ($\alpha_2$).
d) The outlet relative flow angle ($\beta_2$).
e) The work done per unit mass of air by the rotor.
f) The degree of reaction.

**Solution 1:**

Given: $V_{a1} = 150$ m/s, $V_{w1} = 50$ m/s, $U = 200$ m/s, $V_{a2} = 150$ m/s, $V_{w2} = 170$ m/s.

a) **Inlet absolute flow angle ($\alpha_1$):**
$\tan(\alpha_1) = \frac{V_{w1}}{V_{a1}} = \frac{50}{150} = 0.3333$
$\alpha_1 = \arctan(0.3333) \approx 18.43^\circ$

b) **Inlet relative flow angle ($\beta_1$):**
$\tan(\beta_1) = \frac{U - V_{w1}}{V_{a1}} = \frac{200 - 50}{150} = \frac{150}{150} = 1$
$\beta_1 = \arctan(1) = 45^\circ$

c) **Outlet absolute flow angle ($\alpha_2$):**
$\tan(\alpha_2) = \frac{V_{w2}}{V_{a2}} = \frac{170}{150} = 1.1333$
$\alpha_2 = \arctan(1.1333) \approx 48.59^\circ$

d) **Outlet relative flow angle ($\beta_2$):**
$\tan(\beta_2) = \frac{U - V_{w2}}{V_{a2}} = \frac{200 - 170}{150} = \frac{30}{150} = 0.2$
$\beta_2 = \arctan(0.2) \approx 11.31^\circ$

e) **Work done per unit mass of air by the rotor:**
$W_{rotor} = U (V_{w2} - V_{w1}) = 200 (170 - 50) = 200 \times 120 = 24000$ J/kg (or 24 kJ/kg)

f) **Degree of reaction (R):**
For incompressible flow, $R \approx \frac{V_1^2 - V_2^2}{2 \times W_{rotor}}$ is not always accurate. A more direct approach using kinetic energy changes:
$R = \frac{\Delta KE_{rotor}}{\Delta KE_{stage}}$
$\Delta KE_{rotor} = \frac{1}{2}(W_1^2 - W_2^2)$
$W_1 = \sqrt{V_{a1}^2 + (U - V_{w1})^2} = \sqrt{150^2 + (200 - 50)^2} = \sqrt{22500 + 150^2} = \sqrt{22500 + 22500} = \sqrt{45000} \approx 212.13$ m/s
$W_2 = \sqrt{V_{a2}^2 + (U - V_{w2})^2} = \sqrt{150^2 + (200 - 170)^2} = \sqrt{22500 + 30^2} = \sqrt{22500 + 900} = \sqrt{23400} \approx 153.0$ m/s

$V_1 = \sqrt{V_{a1}^2 + V_{w1}^2} = \sqrt{150^2 + 50^2} = \sqrt{22500 + 2500} = \sqrt{25000} \approx 158.11$ m/s
$V_2 = \sqrt{V_{a2}^2 + V_{w2}^2} = \sqrt{150^2 + 170^2} = \sqrt{22500 + 28900} = \sqrt{51400} \approx 226.72$ m/s

Using enthalpy change approach (assuming specific heat $c_p$):
$\Delta i_{rotor} = c_p \Delta T_{rotor} = \frac{1}{2}(W_1^2 - W_2^2)$
$\Delta i_{stator} = c_p \Delta T_{stator} = \frac{1}{2}(V_2^2 - V_1^2)$ (Stator converts kinetic energy to pressure energy, so $V_2$ here is inlet to stator, $V_3$ is outlet)
Let's re-label: $V_{a2}, V_{w2}$ are rotor outlet. For the next stator, this is its inlet. Let stator outlet be $V_{a3}, V_{w3}$.
In a simple stage, $V_{a3} = V_{a2}$. Stator slows down flow. $V_{w3}$ is reduced from $V_{w2}$.
Degree of reaction $R = \frac{\Delta i_{rotor}}{\Delta i_{stage}} = \frac{\Delta i_{rotor}}{\Delta i_{rotor} + \Delta i_{stator}}$.
Assuming isentropic processes and using kinetic energy changes:
$R = \frac{c_p (T_{is2} - T_{is1})}{c_p (T_{is2} - T_{is1}) + c_p (T_{is3} - T_{is2})}$
$R = \frac{\frac{1}{2}(W_1^2 - W_2^2)}{\frac{1}{2}(W_1^2 - W_2^2) + \frac{1}{2}(V_2^2 - V_3^2)}$ (Here $V_2$ is inlet absolute to stator, $V_3$ is outlet absolute from stator).
For this problem, let's assume the given $V_{w2}$ and $V_{a2}$ are the absolute velocities *after* the rotor. The stator would then take this flow and diffuse it.

A common simplification for degree of reaction calculation for an **all-radial flow** stage where $U$ is constant (meaning $U_1=U_2=U$) is:
$R = \frac{W_1^2 - W_2^2}{2 \times \text{Work done per unit mass}}$ if specific heat is not used.
$R = \frac{(W_1^2 - W_2^2)/2}{U(V_{w2} - V_{w1})}$
$R = \frac{(212.13^2 - 153.0^2)/2}{24000} = \frac{(45000 - 23409)/2}{24000} = \frac{21591/2}{24000} = \frac{10795.5}{24000} \approx 0.4498$ or 45%

**Answer:**
a) $18.43^\circ$
b) $45^\circ$
c) $48.59^\circ$
d) $11.31^\circ$
e) 24 kJ/kg
f) Approximately 45%

---

**Question 2:**
For an impulse stage, what is the relationship between the inlet and outlet relative velocities at the rotor?

**Solution 2:**
For an impulse stage, the relative velocity magnitude does not change across the rotor. Therefore, $W_1 = W_2$.

---

### **8. Important Points to Remember**

*   **Velocity triangles are essential for understanding the aerodynamic forces acting on the blades and the energy transfer within each stage.**
*   **The axial velocity ($V_a$) is generally assumed constant across a stage for basic analysis, but in reality, it can vary radially.**
*   **The tangential velocity ($V_w$) represents the whirl component. An increase in $V_w$ by the rotor indicates work done on the fluid.**
*   **Euler's turbomachine equation directly relates the work done to the blade speed and the change in whirl velocities.**
*   **The degree of reaction is a crucial parameter determining how the pressure rise is distributed between the rotor and stator.**
*   **Blade angles are designed based on the relative flow angles ($\beta_1$, $\beta_2$) to achieve optimal incidence and minimize deviation.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **9. References and Further Reading**

*   **Gas Turbines by V Ganesan (McGraw Hill Education, Third, 2017):** Chapter 3 covers axial flow compressors, including detailed discussion and diagrams of velocity triangles.
*   **Turbines, Compressors and Fans by S M Yahya (McGraw Hill, Fourth, 2011):** Chapter 6 focuses on axial flow compressors and provides comprehensive explanations and examples related to velocity triangles.
*   **Gas Turbine & Jet Rocket Propulsion by Mathur M L (Standard Publishers Distributors, First, 2010):** Chapter 5 on compressors will also contain relevant information on velocity triangles.
*   **Gas Turbine Theory by H. Cohen (Pearson Education, Seventh, 2019):** Chapter 3 (Axial Compressors) and Chapter 4 (Performance and Efficiency) will provide advanced insights and theoretical underpinnings.

---

**Alignment with Course Outcomes:**

*   **CO1 (K3):** This topic directly applies principles of fluid dynamics (velocities, angles, vector addition) to analyze compressor working.
*   **CO2 (K4):** Understanding velocity triangles is fundamental to analyzing the performance characteristics of axial flow compressors, including work input and efficiency.
*   **CO3 (K4):** Velocity triangles are the primary tool for analyzing the performance of compressor stages, which are key components of gas turbine systems.
*   **CO4 (K2):** While primarily for compressors, the understanding of fluid deflection and energy transfer is a foundational concept that indirectly supports understanding jet propulsion.

---