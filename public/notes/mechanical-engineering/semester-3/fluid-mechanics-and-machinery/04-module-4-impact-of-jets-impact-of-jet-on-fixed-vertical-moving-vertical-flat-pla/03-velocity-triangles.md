---
title: "Velocity triangles."
subject: "FLUID MECHANICS AND MACHINERY"
module: "Module 4: Impact of jets: Impact of jet on fixed vertical, moving vertical flat plates."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462d29"
status: "completed"
scrapedAt: "2026-05-20T17:49:31.437Z"
---
## Fluid Mechanics and Machinery - Module 4: Impact of Jets

### Topic: Velocity Triangles

---

### 1. Introduction to Impact of Jets

*   **Concept:** When a fluid jet strikes a surface (like a vane or plate), it exerts a force on that surface due to the change in its momentum. Understanding the interaction between the jet and the surface is crucial for designing hydraulic machinery like turbines and pumps.
*   **Importance:** This module focuses on calculating the force exerted by a jet on various types of surfaces, particularly fixed and moving flat plates. The analysis relies heavily on the concept of momentum and the change in momentum of the fluid.
*   **Relevance to Course Outcomes:** This topic directly contributes to **CO2 (Classify the fluid flow and apply the principles kinematic and dynamics using the conservation of mass and momentum equations)** by applying momentum principles to fluid-jet interactions. It also lays the groundwork for **CO5 (Select suitable turbo machine for specific application by identifying the pertinent parameters)** as the forces calculated are fundamental to turbine efficiency.

---

### 2. Velocity Triangles: The Foundation of Analysis

*   **Definition:** A velocity triangle is a graphical representation of the velocities involved when a fluid interacts with a moving surface, such as a vane in a turbine. It uses vector addition to depict the relationships between:
    *   **Absolute Velocity ($V$):** The velocity of the fluid as observed by a stationary observer.
    *   **Relative Velocity ($v$):** The velocity of the fluid relative to the moving surface.
    *   **Blade Velocity ($u$):** The velocity of the moving surface itself (e.g., the tangential velocity of a turbine vane).
*   **Purpose:** Velocity triangles are essential for:
    *   Determining the direction of flow at the inlet and outlet of a vane.
    *   Calculating the change in momentum of the fluid, which is directly proportional to the force exerted.
    *   Analyzing energy transfer between the fluid and the moving surface.
    *   Optimizing the design of hydraulic machinery for maximum efficiency.
*   **Key Principle:** The vector sum of the relative velocity and the blade velocity equals the absolute velocity:
    $ \vec{V} = \vec{v} + \vec{u} $
    This fundamental relationship is the basis for constructing all velocity triangles.

---

### 3. Components of Velocity in Velocity Triangles

Let's define the components we'll use:

*   **Absolute Velocity ($V$):**
    *   $V_1$: Absolute velocity of the jet at inlet.
    *   $V_2$: Absolute velocity of the fluid at outlet.
*   **Relative Velocity ($v$):**
    *   $v_1$: Velocity of the jet relative to the vane at inlet.
    *   $v_2$: Velocity of the fluid relative to the vane at outlet.
*   **Blade Velocity ($u$):**
    *   $u_1$: Velocity of the vane at inlet (often the same as $u_2$ for a flat plate or a simple turbine runner).
    *   $u_2$: Velocity of the vane at outlet.
*   **Whirl Velocity ($V_w$):** The tangential component of the absolute velocity, responsible for imparting torque.
    *   $V_{w1}$: Whirl velocity at inlet.
    *   $V_{w2}$: Whirl velocity at outlet.
*   **Flow Velocity ($V_f$):** The radial component of the absolute velocity.
    *   $V_{f1}$: Flow velocity at inlet.
    *   $V_{f2}$: Flow velocity at outlet.
*   **Angles:**
    *   $\alpha$: Angle between absolute velocity ($V$) and the direction of motion of the vane (tangential direction).
    *   $\beta$: Angle between relative velocity ($v$) and the direction of motion of the vane (tangential direction).
    *   $\theta$: Angle of the vane itself with respect to the direction of motion.

---

### 4. Impact of Jet on a Fixed Vertical Flat Plate

*   **Scenario:** A jet of fluid strikes a flat plate held perpendicular to the direction of the jet. The plate is stationary.
*   **Assumptions:**
    *   The jet is uniform and strikes the center of the plate.
    *   The plate is smooth, so there is no friction.
    *   The fluid spreads out radially and tangentially after striking the plate.
    *   No splashing or atomization occurs.
    *   The velocity of the fluid leaving the plate is the same as the velocity of the jet striking it (i.e., $v_1 = v_2$ in terms of magnitude). This is because the relative velocity component perpendicular to the surface is zeroed, but the tangential component remains. However, for a flat plate perpendicular to the jet, the relative velocity is purely tangential and its magnitude is conserved in the absence of friction.
*   **Velocity Triangles for Fixed Flat Plate:**
    *   **At Inlet:**
        *   The jet strikes the plate normally.
        *   $V_1$ is the absolute velocity of the jet, perpendicular to the plate.
        *   The plate is fixed, so $u_1 = 0$.
        *   From $\vec{V_1} = \vec{v_1} + \vec{u_1}$, since $u_1=0$, we have $\vec{V_1} = \vec{v_1}$.
        *   Thus, the relative velocity $v_1$ is equal in magnitude and direction to the absolute velocity $V_1$.
        *   The velocity triangle degenerates into a single vector representing $V_1$ (and $v_1$).
        *   Angle $\beta_1$ (angle between relative velocity and tangential direction) is $90^\circ$ if the jet strikes the plate tangentially.

    *   **At Outlet:**
        *   The fluid leaves the plate radially outwards and tangentially.
        *   The relative velocity $v_2$ is tangential to the plate's surface (in the radial direction) and its magnitude is equal to $v_1$.
        *   Since the plate is flat and perpendicular to the jet, the fluid leaves the plate with no tangential component of absolute velocity relative to the plate in the direction of motion, i.e., $v_2$ is radial.
        *   The plate velocity $u_2 = 0$.
        *   From $\vec{V_2} = \vec{v_2} + \vec{u_2}$, we get $\vec{V_2} = \vec{v_2}$.
        *   The absolute velocity $V_2$ is now radial, and its magnitude is equal to $v_2$.

*   **Force Calculation:**
    *   **Force in the direction of jet:** This is the force exerted by the jet on the plate. It's calculated using the change in momentum in the direction of the jet.
    *   Let the direction of the jet be the x-direction.
    *   Momentum at inlet (per unit mass of fluid): $V_{x1}$
    *   Momentum at outlet (per unit mass of fluid): $V_{x2}$
    *   For a fixed vertical flat plate, the jet strikes normally. Let's assume the jet is moving along the x-axis.
        *   Inlet x-component of absolute velocity: $V_1$
        *   Outlet x-component of absolute velocity: $V_2$
        *   The fluid strikes the plate and spreads radially. The component of velocity in the direction of the jet flow (x-direction) becomes zero if the plate is smooth and the jet spreads out perfectly.
        *   Therefore, $V_{x2} = 0$.
    *   Force $F_x = \dot{m} (V_{x1} - V_{x2})$
    *   Where $\dot{m}$ is the mass flow rate = $\rho \times A \times V_1$, with $\rho$ being density and $A$ being the cross-sectional area of the jet.
    *   $F_x = \rho A V_1 (V_1 - 0) = \rho A V_1^2$
    *   **This is the force when the jet is normal to the plate.**

*   **Force on Inclined Flat Plate (Fixed):**
    *   If the plate is inclined at an angle $\theta$ to the direction of the jet.
    *   The absolute velocity $V_1$ has components in the direction perpendicular and parallel to the plate.
    *   Let's consider the force component perpendicular to the plate.
    *   The component of $V_1$ perpendicular to the plate is $V_1 \cos \theta$.
    *   The fluid leaves the plate tangentially to the surface. The component of velocity perpendicular to the plate after striking is usually assumed to be zero if the plate is smooth.
    *   Force perpendicular to the plate: $F = \rho A V_1^2 \cos \theta$.
    *   The force component in the direction of the jet (for a plate inclined at $\theta$ to the jet) would be:
        *   $V_{x1} = V_1 \cos \theta$ (if $\theta$ is the angle of inclination of the plate to the jet)
        *   $V_{x2} = V_1 \cos \theta \cos(180^\circ) = -V_1 \cos \theta$ (if the fluid leaves parallel to the jet in the opposite direction, which is not typical for a flat plate).
        *   More commonly, the fluid leaves tangentially. If the angle of inclination is $\theta$, the jet velocity component perpendicular to the plate is $V_1 \cos \theta$. The fluid leaves with the same relative velocity, but now in the opposite direction perpendicular to the plate. So, the component of absolute velocity perpendicular to the plate after impact is $-V_1 \cos \theta$.
        *   $F = \rho A (V_1 \cos \theta - (-V_1 \cos \theta)) = 2 \rho A V_1^2 \cos \theta$.
        *   However, if we consider the force in the direction of the jet's initial motion, and the plate is inclined at $\theta$ to this direction, the component of jet velocity in this direction is $V_1 \cos \theta$. The fluid leaves with its relative velocity, and its component in the original jet direction depends on the outlet angle. For a smooth plate, the fluid leaves at an angle $2\theta$ with the original direction of the jet.
        *   $V_{x2} = V_1 \cos(2\theta)$.
        *   $F_x = \rho A V_1 (V_1 \cos \theta - V_1 \cos(2\theta)) = \rho A V_1^2 (\cos \theta - \cos(2\theta))$.
        *   **For a normal plate ($\theta=0$), $F_x = \rho A V_1^2 (1-1) = 0$, which is incorrect.**

    *   **Correction for Inclined Plate (Force in direction of Jet):**
        *   Let the jet be along the x-axis. The plate is inclined at $\theta$ to the x-axis.
        *   Initial velocity in x-direction: $V_1$
        *   The fluid hits the plate and leaves at an angle $2\theta$ with the x-axis (assuming the surface is smooth and the exit angle is equal to the angle of incidence for reflection).
        *   Final velocity in x-direction: $V_2 \cos(2\theta)$, where $V_2 = V_1$ in magnitude (assuming no loss).
        *   $F_x = \dot{m} (V_1 - V_1 \cos(2\theta)) = \rho A V_1^2 (1 - \cos(2\theta))$.
        *   Using the identity $1 - \cos(2\theta) = 2 \sin^2 \theta$.
        *   $F_x = 2 \rho A V_1^2 \sin^2 \theta$.
        *   **Important Note:** This is the force component *in the direction of the original jet*. The force *normal* to the plate is $2 \rho A V_1^2 \cos \theta$. For the specific case of a fixed vertical plate normal to the jet, $\theta=90^\circ$ in the context of the angle with the normal. If the plate is perpendicular to the jet, the angle of incidence is $0^\circ$. The angle $2\theta$ is the angle of deviation from the normal, so $2\theta=180^\circ$ from original direction. The correct approach for a normal plate is the initial calculation: $F = \rho A V_1^2$.

    *   **Key takeaway for fixed vertical flat plate:** The velocity triangles are simple because $u=0$. The force is directly calculated from the change in momentum. For a normal plate, the change in momentum in the direction of the jet is entirely from $V_1$ to $0$, resulting in $F = \rho A V_1^2$.

---

### 5. Impact of Jet on a Moving Vertical Flat Plate

*   **Scenario:** A jet of fluid strikes a flat plate that is moving perpendicular to the direction of the jet.
*   **Assumptions:**
    *   The jet is uniform.
    *   The plate is smooth.
    *   The jet strikes the plate normally.
    *   The plate moves with a constant velocity $u$ in the direction of the jet.
*   **Velocity Triangles:**
    *   **At Inlet:**
        *   $V_1$: Absolute velocity of the jet.
        *   $u$: Velocity of the plate (moving in the same direction as $V_1$).
        *   $v_1$: Velocity of the jet relative to the plate.
        *   Using the vector relation $\vec{V_1} = \vec{v_1} + \vec{u}$. Since all velocities are along the same line, this becomes $V_1 = v_1 + u$ (in magnitude, assuming $v_1$ is in the direction of $V_1$).
        *   Therefore, the relative velocity of the jet with respect to the plate is $v_1 = V_1 - u$.
        *   The velocity triangle at inlet is collinear (a straight line).
        *   $V_1$ (absolute velocity), $u$ (plate velocity), and $v_1$ (relative velocity) lie on the same line.
        *   Angle $\beta_1 = 0^\circ$ (relative velocity is in the same direction as the jet).

    *   **At Outlet:**
        *   The fluid leaves the plate tangentially. For a flat plate moving perpendicular to the jet, the fluid is assumed to leave with its relative velocity component perpendicular to the plate being zeroed.
        *   $v_2$: Velocity of the fluid relative to the plate at outlet. For a smooth plate, the magnitude of relative velocity is conserved, so $v_2 = v_1 = V_1 - u$.
        *   $u$: Velocity of the plate (still $u$, in the same direction).
        *   $V_2$: Absolute velocity of the fluid at outlet.
        *   From $\vec{V_2} = \vec{v_2} + \vec{u}$.
        *   Since the jet is perpendicular to the plate, the relative velocity $v_2$ is also perpendicular to the plate. After impact, the fluid leaves tangentially. For a flat plate moving perpendicular to the jet, the fluid is assumed to leave with zero tangential component relative to the plate in the direction of motion, meaning $v_2$ has no component along the direction of $u$.
        *   However, a more accurate representation is that the fluid leaves the plate at an angle. For a flat plate, the fluid leaves radially. If the plate is moving perpendicular to the jet, the outlet velocity triangle is constructed as follows:
            *   $v_2 = v_1 = V_1 - u$ (relative velocity magnitude is conserved).
            *   $u$ is the plate velocity.
            *   $V_2$ is the absolute velocity.
            *   For a flat plate perpendicular to the jet, the fluid leaves tangentially with its relative velocity. If the plate is moving, and the jet is perpendicular, the fluid leaves with relative velocity $v_2$ in the direction of the jet's flow, but the plate has moved.
            *   The key is the change in momentum *in the direction of motion*.
            *   The fluid is assumed to leave with its relative velocity $v_2$, and this velocity is purely tangential or radial to the plate's motion.
            *   For a flat plate perpendicular to the jet, the exit relative velocity $v_2$ is discharged without any tangential component relative to the plate. This means $v_2$ is effectively radial.
            *   The absolute velocity $V_2$ is found by vector addition.

*   **Force Calculation:**
    *   Force $F$ is calculated based on the change in momentum in the direction of motion of the plate.
    *   Let the direction of the jet and the plate motion be the x-direction.
    *   Inlet momentum per unit mass in x-direction: $V_1$.
    *   Outlet momentum per unit mass in x-direction: $V_{x2}$.
    *   From $\vec{V_2} = \vec{v_2} + \vec{u}$:
        *   $V_{x2} = v_{x2} + u$.
        *   For a flat plate moving perpendicular to the jet, the fluid leaves with relative velocity $v_2 = V_1 - u$. This $v_2$ is in the direction of the original jet.
        *   However, the fluid leaves the plate tangentially. If the plate is moving, the fluid leaves with $v_2$ as the relative velocity. The absolute velocity $V_2$ is the vector sum of $v_2$ and $u$.
        *   For a flat plate moving perpendicular to the jet, the fluid is assumed to leave with the same relative velocity magnitude $v_2 = v_1 = V_1 - u$. The direction of $v_2$ is along the original jet direction.
        *   The absolute velocity at outlet is $V_2 = V_1 - u$ (since $v_2$ is in the same direction as $V_1$ at inlet and $u$ is also in the same direction). This isn't quite right.

    *   **Correct approach using momentum change in the direction of motion:**
        *   Mass flow rate $\dot{m} = \rho A v_1 = \rho A (V_1 - u)$.
        *   Change in momentum in the direction of motion (x-direction):
            *   Momentum at inlet in x-direction per unit mass = $V_1$.
            *   Momentum at outlet in x-direction per unit mass:
                *   For a flat plate moving perpendicular to the jet, the fluid leaves with relative velocity $v_2 = v_1 = V_1 - u$. The absolute velocity $V_2$ is the vector sum of $v_2$ and $u$.
                *   Since $v_2$ is in the direction of the jet, and $u$ is in the direction of the jet, the absolute velocity $V_2$ is also in the direction of the jet.
                *   $V_2 = v_2 + u = (V_1 - u) + u = V_1$. This implies no change in absolute velocity, which is incorrect.

    *   **Revisiting the velocity triangles for a flat plate moving perpendicular to the jet:**
        *   **Inlet:**
            *   $V_1$ (absolute velocity), $u$ (plate velocity), $v_1$ (relative velocity).
            *   $\vec{V_1} = \vec{v_1} + \vec{u}$.
            *   Since $V_1$ and $u$ are in the same direction, $v_1 = V_1 - u$.
            *   The velocity triangle is collinear. $\beta_1 = 0^\circ$.
        *   **Outlet:**
            *   The jet strikes the plate and moves with it. The fluid leaves the plate tangentially. For a flat plate moving perpendicular to the jet, the fluid leaves with relative velocity $v_2$. The magnitude is conserved, $v_2 = v_1 = V_1 - u$.
            *   The direction of $v_2$ is the same as $v_1$.
            *   The absolute velocity $V_2 = v_2 + u$.
            *   $V_2 = (V_1 - u) + u = V_1$. This still seems wrong.

    *   **Let's use the force derived from momentum change, which is more direct:**
        *   The fluid strikes the plate with velocity $V_1$.
        *   The plate moves with velocity $u$.
        *   The relative velocity is $v_1 = V_1 - u$.
        *   The fluid leaves the plate tangentially with relative velocity $v_2$. For a smooth flat plate, $v_2 = v_1 = V_1 - u$.
        *   The absolute velocity of the fluid leaving the plate is $V_2$.
        *   We need the component of velocity in the direction of motion.
        *   The jet is moving with $V_1$. The plate is moving with $u$.
        *   The mass flow rate is $\dot{m} = \rho A v_1 = \rho A (V_1 - u)$.
        *   **Initial momentum in direction of motion = $\dot{m} V_1$**.
        *   **Final momentum in direction of motion = $\dot{m} V_{x2}$**.
        *   For a flat plate moving perpendicular to the jet, the fluid leaves with relative velocity $v_2 = V_1 - u$. The component of this relative velocity along the direction of motion is zero if the fluid leaves radially.
        *   The absolute velocity $V_2$ is the vector sum of $v_2$ and $u$.
        *   If $v_2$ is purely radial, then $V_2 = u$. This implies the fluid leaves with the same velocity as the plate.
        *   **So, $V_{x2} = u$.**
        *   Force $F = \dot{m} (V_1 - V_{x2})$
        *   $F = \rho A (V_1 - u) (V_1 - u)$
        *   $F = \rho A (V_1 - u)^2$

*   **Summary for Moving Vertical Flat Plate:**
    *   Inlet velocity triangle is collinear: $v_1 = V_1 - u$.
    *   Mass flow rate: $\dot{m} = \rho A (V_1 - u)$.
    *   Force exerted by the jet on the plate (in the direction of motion) = $\rho A (V_1 - u)^2$.

*   **Considerations:**
    *   If $u > V_1$, the jet will not reach the plate, or the plate will be moving faster than the jet can supply fluid, leading to zero flow. In such cases, the force is zero. So, the formula is valid for $V_1 > u$.
    *   This force is the force exerted by the jet on the plate.

---

### 6. Velocity Triangles for Vanes (General Concept - Relevant for CO5)

While this specific module focuses on flat plates, the concept of velocity triangles is crucial for understanding the action of jets on curved vanes in hydraulic machinery (like Pelton turbines).

*   **Curved Vanes:** When a jet strikes a curved vane, the direction of the fluid changes significantly, leading to a larger change in momentum and thus a larger force.
*   **Inlet Velocity Triangle:**
    *   $V_1$ (Absolute velocity).
    *   $u$ (Blade velocity, tangential).
    *   $v_1$ (Relative velocity).
    *   $\alpha$ (Inlet angle of absolute velocity with tangential direction).
    *   $\beta_1$ (Inlet angle of relative velocity with tangential direction, i.e., the angle of the vane at inlet, $\theta$).
    *   Vector relationship: $\vec{V_1} = \vec{v_1} + \vec{u}$.
*   **Outlet Velocity Triangle:**
    *   $V_2$ (Absolute velocity).
    *   $u$ (Blade velocity, tangential, often constant for a Pelton turbine runner).
    *   $v_2$ (Relative velocity).
    *   $\alpha_2$ (Outlet angle of absolute velocity with tangential direction).
    *   $\beta_2$ (Outlet angle of relative velocity with tangential direction).
    *   Vector relationship: $\vec{V_2} = \vec{v_2} + \vec{u}$.
*   **Whirl Velocity and Flow Velocity:**
    *   $V_{w1} = V_1 \cos \alpha$.
    *   $V_{f1} = V_1 \sin \alpha$.
    *   $V_{w2} = V_2 \cos \alpha_2$.
    *   $V_{f2} = V_2 \sin \alpha_2$.
*   **Force and Work:**
    *   The force on the vane is related to the change in whirl velocity: $F_w \propto (V_{w1} \pm V_{w2})$. The sign depends on the direction of $V_{w2}$ relative to $V_{w1}$.
    *   Work done per unit mass = Change in kinetic energy = $\frac{1}{2} (V_1^2 - V_2^2)$.
    *   Work done on the runner = $\frac{1}{2} (V_1^2 - V_2^2)$.
    *   Power = $\dot{m} \times \text{Work done per unit mass}$.
    *   This knowledge is essential for selecting suitable turbo machines (CO5).

---

### 7. Key Concepts and Definitions

*   **Absolute Velocity ($V$):** Velocity of fluid relative to a stationary observer.
*   **Relative Velocity ($v$):** Velocity of fluid relative to a moving surface.
*   **Blade Velocity ($u$):** Velocity of the moving surface (e.g., vane).
*   **Momentum:** Mass in motion, $mv$. Change in momentum is force.
*   **Mass Flow Rate ($\dot{m}$):** Mass of fluid passing per unit time, $\rho A V$.
*   **Velocity Triangle:** Vector diagram showing the relationship between $V$, $v$, and $u$.
*   **Whirl Velocity ($V_w$):** Tangential component of absolute velocity.
*   **Flow Velocity ($V_f$):** Radial component of absolute velocity.
*   **Smooth Plate:** Assumed to have no frictional losses.
*   **Normal Jet:** Jet strikes the surface perpendicularly.
*   **Tangential Discharge:** Fluid leaves the surface along the tangent to the surface.

---

### 8. Important Points to Remember

*   **Vector Addition:** Always remember $\vec{V} = \vec{v} + \vec{u}$.
*   **Fixed Plate:** $u=0$, so $V=v$. Velocity triangles are simpler.
*   **Moving Plate:** $u \neq 0$. Velocity triangles are collinear for normal impact.
*   **Force Calculation:** Based on the change in momentum in the direction of force application.
*   **Mass Flow Rate:** For a moving plate, the mass flow rate depends on the relative velocity ($V_1 - u$).
*   **Smoothness:** Assume no friction unless stated otherwise.
*   **Direction of Discharge:** For flat plates, the fluid is assumed to discharge radially or tangentially without loss of relative velocity magnitude.
*   **Pelton Turbine:** This module's concepts are directly applicable to understanding the action of the jet on the buckets of a Pelton turbine.

---

### 9. Examples and Practice Questions

**Example 1: Fixed Vertical Flat Plate**

A jet of water with a diameter of 5 cm strikes a fixed vertical flat plate normally. The velocity of the jet is 20 m/s. Calculate the force exerted by the jet on the plate.

**Solution:**
*   Diameter $d = 5$ cm $= 0.05$ m
*   Radius $r = d/2 = 0.025$ m
*   Area of jet $A = \pi r^2 = \pi (0.025)^2 = 0.0019635$ m$^2$
*   Jet velocity $V_1 = 20$ m/s
*   Density of water $\rho = 1000$ kg/m$^3$
*   For a fixed vertical flat plate struck normally, the force $F = \rho A V_1^2$.
*   $F = 1000 \times 0.0019635 \times (20)^2$
*   $F = 1000 \times 0.0019635 \times 400$
*   $F = 785.4$ N

**Example 2: Moving Vertical Flat Plate**

A jet of water with a velocity of 25 m/s and a diameter of 4 cm strikes a flat plate moving perpendicular to the jet with a velocity of 10 m/s in the same direction as the jet. Calculate the force exerted by the jet on the plate.

**Solution:**
*   Jet velocity $V_1 = 25$ m/s
*   Diameter $d = 4$ cm $= 0.04$ m
*   Radius $r = d/2 = 0.02$ m
*   Area of jet $A = \pi r^2 = \pi (0.02)^2 = 0.0012566$ m$^2$
*   Plate velocity $u = 10$ m/s
*   Density of water $\rho = 1000$ kg/m$^3$
*   The force exerted by the jet on the moving plate is $F = \rho A (V_1 - u)^2$.
*   $F = 1000 \times 0.0012566 \times (25 - 10)^2$
*   $F = 1000 \times 0.0012566 \times (15)^2$
*   $F = 1000 \times 0.0012566 \times 225$
*   $F = 282.735$ N

**Practice Question 1:**

A jet of water of diameter 7 cm strikes a stationary flat plate normally. If the velocity of the jet is 30 m/s, determine the force exerted on the plate.
*   **Answer:** $1154.5$ N (Approx.)

**Practice Question 2:**

A flat plate moves away from a jet of water with a velocity of 8 m/s. The jet has a velocity of 20 m/s and a diameter of 6 cm. Calculate the force exerted by the jet on the plate.
*   **Answer:** $4517.17$ N (Approx.)

**Practice Question 3 (Conceptual):**

For a jet striking a moving flat plate perpendicular to its motion, if the plate velocity equals the jet velocity ($u=V_1$), what is the force exerted by the jet on the plate? Explain why.
*   **Answer:** Zero. If $u=V_1$, the relative velocity of the jet with respect to the plate $(V_1 - u)$ is zero. This means no fluid is supplied to the plate, so there is no momentum change and hence no force.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 10. References

*   **Fluid Mechanics by Cengel Y. A. and J. M. Cimbala (Tata McGraw Hill, 2013):** Chapters on Momentum Analysis and its Applications.
*   **Introduction to Fluid Mechanics and Fluid Machines by Som S.K. (McGraw Hill Education India, 2011):** Chapters covering jet impact and turbo-machinery principles.
*   **Fluid Mechanics and Hydraulic Machines by Bansal R.K. (Laxmi Publications, 2005):** Sections on impact of jets and turbines.
*   **Fluid Mechanics by White F.M. (Tata McGraw Hill, 2003):** For advanced understanding of momentum principles and applications.
*   **Engineering applications of Fluid dynamics by Fisher and Henly (Willford Press, 2023):** For real-world context and advanced applications.

---
---