---
title: "Impact of jet on curved vanes – fixed and moving."
subject: "FLUID MECHANICS AND MACHINERY"
module: "Module 4: Impact of jets: Impact of jet on fixed vertical, moving vertical flat plates."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462d28"
status: "completed"
scrapedAt: "2026-05-20T17:49:30.719Z"
---
# Fluid Mechanics and Machinery - Module 4: Impact of Jets

## Topic: Impact of Jet on Curved Vanes (Fixed and Moving)

This module delves into the force exerted by a jet of fluid when it strikes a surface, specifically focusing on curved vanes. Understanding these forces is crucial for the design and analysis of hydraulic machinery like turbines and pumps. We will explore how the shape and motion of the vanes influence the force and work done by the jet.

---

### Learning Outcomes:

Upon successful completion of this topic, students will be able to:

*   Analyze the force exerted by a jet of fluid on a fixed curved vane.
*   Determine the work done and efficiency of a jet striking a fixed curved vane.
*   Analyze the force exerted by a jet of fluid on a moving curved vane.
*   Determine the work done and efficiency of a jet striking a moving curved vane.
*   Relate the impact of jets on curved vanes to the operation of hydraulic machinery.

---

### 1. Introduction to Jet Impact on Curved Vanes

When a jet of fluid strikes a curved surface (vane), the change in momentum of the fluid causes a force to be exerted on the vane. The curvature of the vane is designed to deflect the jet by a certain angle, which significantly influences the magnitude and direction of this force. This principle is fundamental to the operation of many hydraulic machines, particularly **Pelton turbines**, where a high-velocity jet strikes precisely shaped buckets (curved vanes).

---

### 2. Impact of Jet on Fixed Curved Vanes

#### 2.1 Force Exerted by a Jet on a Fixed Curved Vane

**Key Concept:** The force exerted on the vane is equal to the rate of change of momentum of the fluid.

**Derivation using Newton's Second Law of Motion:**

Consider a jet of fluid of mass $m$ and velocity $V$ striking a fixed curved vane. Let the vane deflect the jet through an angle $\theta$.

*   **Initial Momentum:** The initial momentum of the jet in the direction of the jet is $m \times V$.
*   **Final Momentum:** After striking the vane, the jet is deflected. Assuming no energy loss, the velocity of the fluid remains $V$. The component of the final velocity in the original direction of the jet is $V \cos \theta$. Therefore, the final momentum in the original direction is $m \times V \cos \theta$.
*   **Change in Momentum:** The change in momentum of the fluid in the direction of the jet is:
    $\Delta P_x = \text{Final Momentum}_x - \text{Initial Momentum}_x = m (V \cos \theta) - m V = m V (\cos \theta - 1)$
*   **Force:** The force exerted on the fluid by the vane is the rate of change of momentum:
    $F_{\text{on fluid}} = \frac{\Delta P_x}{\Delta t} = \frac{m}{\Delta t} V (\cos \theta - 1)$
    Since $\frac{m}{\Delta t}$ is the mass flow rate ($\rho \times A \times V$, where $\rho$ is density, $A$ is cross-sectional area of the jet),
    $F_{\text{on fluid}} = \rho A V^2 (\cos \theta - 1)$

By Newton's Third Law, the force exerted by the fluid on the vane is equal in magnitude and opposite in direction:
$F_{\text{on vane}} = -F_{\text{on fluid}} = \rho A V^2 (1 - \cos \theta)$

**Direction of Force:**
The force calculated is along the initial direction of the jet. If the vane is oriented such that the jet is deflected, we can resolve the force into components.

**Case 1: Jet striking a fixed curved plate inclined at an angle $\alpha$ to the direction of the jet.**

*   Let the jet velocity be $V$.
*   Let the angle of inclination of the plate to the direction of the jet be $\alpha$.
*   The force exerted by the jet on the plate is given by:
    $F_x = \rho A V^2 \cos^2 \alpha$ (Force normal to the plate)
    $F_y = \rho A V^2 \sin \alpha \cos \alpha$ (Force parallel to the plate)

**Case 2: Jet striking a fixed curved vane with deflection angle $\theta$ and outlet angle $\phi$ (angle of jet after striking the vane with respect to the initial direction of the jet).**

This is the more common scenario in turbines. The vane deflects the jet by an angle $\theta$ from its original direction. The angle of deflection is often described by the angle of the vane at the outlet.

If the jet is deflected by an angle $\theta$, the force component in the initial direction of the jet is:
$F_x = \rho A V^2 (1 - \cos \theta)$

*   **Bansal R.K. (2005), Chapter 6, Section 6.4 (Force on vanes):** Bansal emphasizes resolving the forces into components if the jet strikes the vane at an angle. For a curved vane, the change in momentum is key. He also highlights the importance of considering the outlet angle of the vane and the angle of the jet with respect to the vane.

*   **Cengel & Cimbala (2013), Chapter 9 (Momentum Equation):** While not directly on jet impact, their discussion on the momentum equation for control volumes provides the theoretical basis. The force on a surface is related to the rate of change of momentum of the fluid passing through the control volume.

**Example 1:**
A jet of water having a velocity of 20 m/s and a diameter of 2 cm strikes a fixed curved vane. The vane deflects the jet by 150 degrees. Calculate the force exerted by the jet on the vane.

*   Velocity, $V = 20$ m/s
*   Diameter, $d = 2$ cm $= 0.02$ m
*   Radius, $r = d/2 = 0.01$ m
*   Area, $A = \pi r^2 = \pi (0.01)^2 = 0.000314$ m$^2$
*   Deflection angle, $\theta = 150^\circ$
*   Density of water, $\rho = 1000$ kg/m$^3$

Force $F_x = \rho A V^2 (1 - \cos \theta)$
$F_x = 1000 \times 0.000314 \times (20)^2 (1 - \cos 150^\circ)$
$F_x = 1000 \times 0.000314 \times 400 \times (1 - (-0.866))$
$F_x = 125.6 \times (1.866)$
$F_x \approx 234.27$ N

**Important Point:** The angle $\theta$ is the angle of deflection of the jet. If the vane has an outlet angle $\phi$ and the jet enters tangentially, then $\theta = \phi$.

#### 2.2 Work Done and Efficiency for Fixed Curved Vane

**Key Concepts:**
*   **Work Done:** The force exerted on the vane multiplied by the distance moved in the direction of the force. For a fixed vane, there is no movement, so the work done *by the jet on the vane* is zero. However, we can talk about the rate of work done or power transmitted if the vane were moving. For a fixed vane, the primary concern is the force.

*   **Efficiency (for hypothetical movement or for understanding power transfer):** If the vane were to move, the power transmitted would be the force multiplied by the velocity of the vane. For a fixed vane, the concept of efficiency is not directly applicable in the same way as for moving vanes, as no work is being done.

---

### 3. Impact of Jet on Moving Curved Vanes

When the vane is moving, the relative velocity between the jet and the vane becomes important. This is the scenario in practical hydraulic machinery.

#### 3.1 Force Exerted by a Jet on a Moving Curved Vane

**Key Concepts:**
*   **Relative Velocity ($V_r$):** The velocity of the jet relative to the moving vane.
*   **Mass Flow Rate:** Remains $\rho A V$, assuming the jet velocity $V$ is measured relative to stationary ground and the jet is not blocked by the vane.
*   **Change in Momentum:** Calculated using relative velocities.

Consider a jet of velocity $V$ striking a vane moving with velocity $u$ in the same direction as the jet. The vane is curved and deflects the jet through an angle $\theta$.

*   **Velocity of Jet Relative to Vane ($V_r$):**
    $V_r = V - u$

*   **Force exerted by the jet on the vane:**
    The force is equal to the rate of change of momentum *in the direction of motion of the vane*.

    $F_x = \rho A V_r (V_r - V_r \cos \theta)$
    $F_x = \rho A (V - u) [(V - u) - (V - u) \cos \theta]$
    $F_x = \rho A (V - u)^2 (1 - \cos \theta)$

    This force $F_x$ is in the direction of motion of the vane.

**Direction of Force:**
The force is calculated along the direction of motion of the vane. If the vane is deflected and its outlet angle is $\phi$ relative to the direction of motion, the force can be resolved.

**Case: Jet striking a series of moving curved vanes (like in a Pelton turbine bucket).**

In a Pelton turbine, the jet strikes a series of buckets. The force on each bucket is calculated, and the total force is the sum of forces on all buckets being struck by the jet. The crucial aspect here is that the jet velocity relative to the vane at the outlet is often considered.

*   **Assumptions for Pelton Turbine Analysis:**
    1.  The jet velocity $V$ is uniform.
    2.  The vane is smooth, and there are no frictional losses.
    3.  The angle of deflection is $\theta$.
    4.  The vane moves with a uniform velocity $u$.
    5.  The jet is deflected by $180^\circ$ (i.e., $\theta = 180^\circ$, meaning $\cos \theta = -1$). This leads to maximum deflection and theoretical maximum force.

*   **Force on a Pelton Turbine Bucket (Simplified):**
    For a Pelton turbine bucket that deflects the jet by $180^\circ$ ($\theta = 180^\circ$), the force component in the direction of motion is:
    $F_x = \rho A (V - u)^2 (1 - \cos 180^\circ)$
    $F_x = \rho A (V - u)^2 (1 - (-1))$
    $F_x = 2 \rho A (V - u)^2$

    Since $Q = A V$ (volume flow rate), and if $V$ is the velocity of the jet, the mass flow rate is $\rho Q = \rho A V$.
    If we consider the entire mass flow rate passing through the runner, the force can also be expressed in terms of mass flow rate:
    $F_x = \frac{2 Q}{V} (V - u)^2 = \frac{2 \rho Q}{V} (V - u)^2$ (This is not entirely correct if $Q$ is taken as $AV$).

    A more standard way for continuous flow:
    Mass flow rate $=\rho \times A \times V$
    Force $F_x = (\rho A V) \times \Delta V_x$ where $\Delta V_x$ is the change in velocity in the x-direction.
    Initial momentum in x-dir: $\rho A V (V)$
    Final momentum in x-dir (relative to ground): $\rho A V_r (V_r \cos \theta)$
    This becomes complicated due to changing velocity relative to the ground.

    Let's stick to the momentum change of the fluid *passing through the vane*.
    Mass flow rate of fluid through the vane $= \rho A V_r = \rho A (V - u)$.
    Change in momentum in the direction of motion:
    Initial momentum per unit mass = $(V-u)$
    Final momentum per unit mass = $(V-u) \cos \theta$
    Force $F_x = \text{Mass flow rate} \times \text{Change in velocity (relative)}$
    $F_x = \rho A (V - u) \times [(V - u) - (V - u) \cos \theta]$
    $F_x = \rho A (V - u)^2 (1 - \cos \theta)$

    For a Pelton wheel bucket deflecting by $180^\circ$ ($\theta = 180^\circ$, $\cos \theta = -1$):
    $F_x = \rho A (V - u)^2 (1 - (-1)) = 2 \rho A (V - u)^2$

    **Som S.K. (2011), Chapter 12 (Impact of Jets):** Som details the analysis for moving vanes, especially for Pelton wheels. He clearly distinguishes between jet velocity, vane velocity, and relative velocities. He derives the force and power transmitted.

    **Cengel & Cimbala (2013), Chapter 9:** Reinforces the momentum principle. The force on the vane is the rate of momentum transfer.

**Example 2:**
A jet of water with a velocity of 40 m/s strikes a series of moving curved vanes. The vanes are moving at 20 m/s in the direction of the jet. The jet is deflected through an angle of $160^\circ$. The area of the jet is 20 cm$^2$. Calculate the force exerted by the jet on the vanes.

*   Jet velocity, $V = 40$ m/s
*   Vane velocity, $u = 20$ m/s
*   Deflection angle, $\theta = 160^\circ$
*   Area of jet, $A = 20$ cm$^2 = 20 \times 10^{-4}$ m$^2$
*   Density of water, $\rho = 1000$ kg/m$^3$

Relative velocity, $V_r = V - u = 40 - 20 = 20$ m/s
Force $F_x = \rho A V_r^2 (1 - \cos \theta)$
$F_x = 1000 \times (20 \times 10^{-4}) \times (20)^2 (1 - \cos 160^\circ)$
$F_x = 1000 \times 0.002 \times 400 \times (1 - (-0.9397))$
$F_x = 800 \times (1.9397)$
$F_x \approx 1551.76$ N

#### 3.2 Work Done and Efficiency for Moving Curved Vane

**Key Concepts:**
*   **Work Done:** The force exerted on the vane multiplied by the distance moved in the direction of the force.
*   **Power Transmitted ($P$):** The rate at which the jet does work on the vane. $P = F_x \times u$.
*   **Kinetic Energy of the Jet per unit time:** The rate at which kinetic energy is supplied by the jet. $KE = \frac{1}{2} m V^2$. If we consider a mass flow rate $\dot{m} = \rho A V$, then the power supplied is $P_{\text{in}} = \frac{1}{2} \dot{m} V^2 = \frac{1}{2} \rho A V^3$.
*   **Efficiency ($\eta$):** The ratio of power transmitted to the power supplied. $\eta = \frac{P}{P_{\text{in}}} = \frac{F_x \times u}{\frac{1}{2} \rho A V^3}$.

**Derivation for Power and Efficiency:**

*   **Force:** $F_x = \rho A (V - u)^2 (1 - \cos \theta)$
*   **Power Transmitted ($P$):**
    $P = F_x \times u = \rho A (V - u)^2 (1 - \cos \theta) \times u$

*   **Power Supplied ($P_{\text{in}}$):**
    $P_{\text{in}} = \frac{1}{2} (\rho A V) V^2 = \frac{1}{2} \rho A V^3$ (This is the kinetic power of the jet per unit time)

*   **Efficiency ($\eta$):**
    $\eta = \frac{P}{P_{\text{in}}} = \frac{\rho A u (V - u)^2 (1 - \cos \theta)}{\frac{1}{2} \rho A V^3}$
    $\eta = \frac{2 u (V - u)^2 (1 - \cos \theta)}{V^3}$

**Maximum Efficiency:**
To find the vane velocity $u$ that maximizes efficiency, we differentiate $\eta$ with respect to $u$ and set it to zero.
Let $f(u) = u (V - u)^2 = u (V^2 - 2Vu + u^2) = V^2 u - 2Vu^2 + u^3$.
$\frac{df}{du} = V^2 - 4Vu + 3u^2$.
Setting $\frac{df}{du} = 0$:
$3u^2 - 4Vu + V^2 = 0$
$(3u - V)(u - V) = 0$
This gives $u = V$ or $u = \frac{V}{3}$.
*   If $u = V$, then $V_r = V - u = 0$, force is zero, power is zero.
*   Therefore, maximum efficiency occurs when $u = \frac{V}{3}$.

**Important Note:** This analysis assumes that the jet velocity relative to the ground at the outlet is the same as the relative velocity at the inlet (i.e., no friction and ideal deflection). In reality, for a Pelton turbine, the outlet relative velocity is typically lower than the inlet relative velocity due to friction and the shape of the bucket. A common approximation for Pelton turbine analysis is that the relative velocity at the outlet is $k V_r$ where $k$ is the coefficient of velocity (typically 0.97 to 0.99).

*   **For a Pelton Wheel Bucket (Deflection $180^\circ$, $\theta = 180^\circ$):**
    Force: $F_x = 2 \rho A (V - u)^2$
    Power: $P = 2 \rho A u (V - u)^2$
    Efficiency: $\eta = \frac{2 u (V - u)^2}{V^3}$
    Maximum efficiency occurs at $u = \frac{V}{2}$.
    At $u = \frac{V}{2}$:
    $F_x = 2 \rho A (V - \frac{V}{2})^2 = 2 \rho A (\frac{V}{2})^2 = 2 \rho A \frac{V^2}{4} = \frac{1}{2} \rho A V^2$.
    $P_{\text{max}} = 2 \rho A (\frac{V}{2}) (V - \frac{V}{2})^2 = 2 \rho A \frac{V}{2} (\frac{V}{2})^2 = 2 \rho A \frac{V^3}{8} = \frac{1}{4} \rho A V^3$.
    $\eta_{\text{max}} = \frac{P_{\text{max}}}{P_{\text{in}}} = \frac{\frac{1}{4} \rho A V^3}{\frac{1}{2} \rho A V^3} = \frac{1}{2} = 50\%$.

    **Cengel & Cimbala (2013):** They might present a more generalized formula for efficiency and discuss how the theoretical maximum of 50% (for $180^\circ$ deflection) can be improved by considering the split jet and scoop design of Pelton buckets, aiming for $u \approx V/2$.

    **Bansal R.K. (2005), Chapter 6, Section 6.7 (Work Done and Efficiency of Moving Vanes):** Bansal provides clear derivations for work done and efficiency, including the condition for maximum efficiency ($u=V/3$ generally and $u=V/2$ for $180^\circ$ deflection). He also introduces the concept of outlet angle from the vane.

**Example 3:**
Consider the jet from Example 2. Calculate the work done per unit mass of water and the efficiency of the vanes.

*   $V = 40$ m/s, $u = 20$ m/s, $\theta = 160^\circ$
*   Relative velocity $V_r = 20$ m/s

*   **Work Done per unit mass:**
    The force on the vane is $F_x = \rho A V_r^2 (1 - \cos \theta)$.
    Work done by the jet on the vane per unit mass $= \frac{F_x \times u}{\dot{m}} = \frac{F_x \times u}{\rho A V_r}$
    Work done per unit mass $= \frac{\rho A V_r^2 (1 - \cos \theta) \times u}{\rho A V_r} = V_r u (1 - \cos \theta)$
    Work done per unit mass $= (20 \text{ m/s}) \times (20 \text{ m/s}) \times (1 - \cos 160^\circ)$
    Work done per unit mass $= 400 \times (1 - (-0.9397)) = 400 \times 1.9397 = 775.88$ J/kg.

*   **Power Transmitted ($P$):**
    $P = F_x \times u = 1551.76 \text{ N} \times 20 \text{ m/s} = 31035.2$ W $= 31.035$ kW.

*   **Power Supplied ($P_{\text{in}}$):**
    $P_{\text{in}} = \frac{1}{2} \rho A V^3 = \frac{1}{2} \times 1000 \times (20 \times 10^{-4}) \times (40)^3$
    $P_{\text{in}} = 0.5 \times 1000 \times 0.002 \times 64000 = 1000 \times 64 = 64000$ W $= 64$ kW.

*   **Efficiency ($\eta$):**
    $\eta = \frac{P}{P_{\text{in}}} = \frac{31035.2}{64000} \approx 0.485$ or $48.5\%$.

    Using the efficiency formula:
    $\eta = \frac{2 u (V - u)^2 (1 - \cos \theta)}{V^3} = \frac{2 \times 20 \times (40 - 20)^2 (1 - \cos 160^\circ)}{(40)^3}$
    $\eta = \frac{40 \times (20)^2 \times (1.9397)}{64000} = \frac{40 \times 400 \times 1.9397}{64000} = \frac{16000 \times 1.9397}{64000} = \frac{30971.2}{64000} \approx 0.484$ or $48.4\%$.
    (Slight difference due to rounding).

**Example 4 (Pelton Wheel):**
A jet of water having a velocity of 30 m/s strikes a Pelton wheel bucket moving at 15 m/s. The deflection angle is $170^\circ$. Find the force exerted on the bucket and the work done per unit mass of water.

*   $V = 30$ m/s
*   $u = 15$ m/s
*   $\theta = 170^\circ$

Relative velocity, $V_r = V - u = 30 - 15 = 15$ m/s

*   **Force ($F_x$):** This requires the area of the jet. Let's assume an area $A$ for now and express the force in terms of $A$.
    $F_x = \rho A (V - u)^2 (1 - \cos \theta)$
    $F_x = 1000 \times A \times (15)^2 (1 - \cos 170^\circ)$
    $F_x = 1000 \times A \times 225 \times (1 - (-0.9848))$
    $F_x = 225000 \times A \times (1.9848)$
    $F_x \approx 446580 A$ Newtons (where $A$ is in m$^2$)

*   **Work done per unit mass:**
    Work done per unit mass $= V_r u (1 - \cos \theta)$
    Work done per unit mass $= (15 \text{ m/s}) \times (15 \text{ m/s}) \times (1 - \cos 170^\circ)$
    Work done per unit mass $= 225 \times (1.9848) = 446.58$ J/kg.

---

### 4. Design Considerations and Applications

*   **Pelton Turbine:** The most prominent application of jet impact on moving curved vanes. The bucket shape is crucial for efficient energy transfer and splitting the jet to reduce exit losses and provide a balanced force. The deflection angle is typically close to $180^\circ$. The optimal vane speed is around $V/2$.
*   **Splash Guards and Deflectors:** Used to control the direction of water flow after impact.
*   **Water Jet Cutting:** While not directly about energy extraction, the principle of force exerted by a high-velocity jet on a surface is applicable.

#### 4.1 Factors Affecting Efficiency

*   **Friction:** Losses due to friction between the water and the vane surface reduce the relative velocity at the outlet. This is accounted for by a coefficient of velocity ($k$). The outlet relative velocity becomes $k(V-u)$.
*   **Deflection Angle:** A larger deflection angle generally leads to a larger force and potentially higher efficiency, up to a certain point. $180^\circ$ deflection is theoretically ideal for maximizing force.
*   **Vane Shape:** The curvature and the split of the bucket in Pelton turbines are designed to match the jet velocity and efficiently transfer momentum.
*   **Bucket Velocity ($u$):** There's an optimal bucket velocity for maximum efficiency, which depends on the jet velocity.

#### 4.2 Effect of Outlet Angle and Splitting of Jet (Pelton Wheel)

*   **Outlet Angle ($\phi$):** In a Pelton wheel, the jet is split into two halves by a splitter on the bucket. This reduces the amount of water striking each half and influences the exit direction. The outlet angle of the bucket from the direction of motion is also critical. A $180^\circ$ deflection means the jet exits backward relative to its entry direction.
*   **Ideal Velocity Ratio ($u/V$):** For a theoretical $180^\circ$ deflection with no losses, the maximum efficiency of 50% is achieved when $u = V/2$. This is a key design parameter for Pelton turbines.
*   **Practical Considerations:** In practice, due to friction and imperfect deflection, the optimal $u/V$ ratio is slightly different, and efficiencies can reach up to 90%. The angle of deflection is usually slightly less than $180^\circ$ (e.g., $170^\circ$ to $175^\circ$) to avoid the jet striking the adjacent bucket.

---

### 5. Practice Questions and Exercises

**Q1:** A jet of water with a velocity of 25 m/s and a diameter of 3 cm strikes a fixed curved vane. The vane deflects the jet by an angle of $120^\circ$. Calculate the force exerted by the jet on the vane. (Assume $\rho = 1000$ kg/m$^3$)

**Q2:** A jet of water moving at 50 m/s strikes a series of moving curved vanes. The vanes are moving at 20 m/s in the same direction as the jet. The angle of deflection of the jet is $165^\circ$. The mass flow rate of the jet is 50 kg/s. Calculate the force exerted on the vanes and the power transmitted.

**Q3:** For a jet of velocity $V$ striking a moving curved vane with velocity $u$, derive the expression for the efficiency of the jet. Show that the maximum efficiency occurs when $u = V/3$.

**Q4:** A Pelton wheel has a bucket speed of 10 m/s. The jet velocity is 30 m/s and its diameter is 5 cm. The jet is deflected by $175^\circ$. Calculate the force exerted on the bucket, the work done per unit mass, and the efficiency. (Assume $\rho = 1000$ kg/m$^3$)

**Q5:** Explain why the vane velocity for maximum efficiency for a Pelton wheel bucket is $V/2$, whereas for a general curved vane deflection by angle $\theta$, the optimum velocity ratio is $u/V = 1/3$.

---

### 6. Answers to Practice Questions

**A1:**
*   $V = 25$ m/s
*   $d = 3$ cm $= 0.03$ m, $r = 0.015$ m
*   $A = \pi r^2 = \pi (0.015)^2 = 0.0007068$ m$^2$
*   $\theta = 120^\circ$
*   $\rho = 1000$ kg/m$^3$

$F_x = \rho A V^2 (1 - \cos \theta)$
$F_x = 1000 \times 0.0007068 \times (25)^2 (1 - \cos 120^\circ)$
$F_x = 1000 \times 0.0007068 \times 625 \times (1 - (-0.5))$
$F_x = 441.75 \times 1.5 = 662.625$ N

**A2:**
*   $V = 50$ m/s
*   $u = 20$ m/s
*   $\theta = 165^\circ$
*   Mass flow rate $\dot{m} = 50$ kg/s.
*   Since $\dot{m} = \rho A V$, we have $50 = 1000 \times A \times 50$, so $A = 50 / 50000 = 0.001$ m$^2$.

Relative velocity, $V_r = V - u = 50 - 20 = 30$ m/s

*   **Force ($F_x$):**
    $F_x = \rho A V_r^2 (1 - \cos \theta)$
    $F_x = 1000 \times 0.001 \times (30)^2 (1 - \cos 165^\circ)$
    $F_x = 1 \times 900 \times (1 - (-0.9659))$
    $F_x = 900 \times 1.9659 = 1769.31$ N

*   **Power Transmitted ($P$):**
    $P = F_x \times u = 1769.31 \text{ N} \times 20 \text{ m/s} = 35386.2$ W $= 35.386$ kW.

**A3:**
*   Force $F_x = \rho A (V - u)^2 (1 - \cos \theta)$
*   Power $P = F_x \times u = \rho A u (V - u)^2 (1 - \cos \theta)$
*   Power Input $P_{\text{in}} = \frac{1}{2} \rho A V^3$
*   Efficiency $\eta = \frac{P}{P_{\text{in}}} = \frac{\rho A u (V - u)^2 (1 - \cos \theta)}{\frac{1}{2} \rho A V^3} = \frac{2 u (V - u)^2 (1 - \cos \theta)}{V^3}$

To find maximum efficiency, differentiate $\eta$ with respect to $u$:
Let $f(u) = u(V-u)^2 = u(V^2 - 2Vu + u^2) = V^2u - 2Vu^2 + u^3$.
$\frac{df}{du} = V^2 - 4Vu + 3u^2$.
Set $\frac{df}{du} = 0$: $3u^2 - 4Vu + V^2 = 0$.
$(3u - V)(u - V) = 0$.
Solutions are $u = V$ (gives zero force, hence zero power) and $u = V/3$.
Thus, maximum efficiency occurs at $u = V/3$.

**A4:**
*   $u = 10$ m/s
*   $V = 30$ m/s
*   $\theta = 175^\circ$
*   $d = 5$ cm $= 0.05$ m, $r = 0.025$ m
*   $A = \pi r^2 = \pi (0.025)^2 = 0.0019635$ m$^2$
*   $\rho = 1000$ kg/m$^3$

Relative velocity, $V_r = V - u = 30 - 10 = 20$ m/s

*   **Force ($F_x$):**
    $F_x = \rho A (V - u)^2 (1 - \cos \theta)$
    $F_x = 1000 \times 0.0019635 \times (20)^2 (1 - \cos 175^\circ)$
    $F_x = 1000 \times 0.0019635 \times 400 \times (1 - (-0.9962))$
    $F_x = 785.4 \times 1.9962 \approx 1568.5$ N

*   **Work done per unit mass:**
    Work done per unit mass $= V_r u (1 - \cos \theta)$
    Work done per unit mass $= (20 \text{ m/s}) \times (10 \text{ m/s}) \times (1 - \cos 175^\circ)$
    Work done per unit mass $= 200 \times 1.9962 = 399.24$ J/kg.

*   **Efficiency ($\eta$):**
    $\eta = \frac{2 u (V - u)^2 (1 - \cos \theta)}{V^3}$
    $\eta = \frac{2 \times 10 \times (30 - 10)^2 (1 - \cos 175^\circ)}{(30)^3}$
    $\eta = \frac{20 \times (20)^2 \times (1.9962)}{27000}$
    $\eta = \frac{20 \times 400 \times 1.9962}{27000} = \frac{8000 \times 1.9962}{27000} = \frac{15969.6}{27000} \approx 0.5914$ or $59.14\%$.

**A5:**
*   **General Curved Vane ($u = V/3$):** The efficiency formula is $\eta = \frac{2 u (V - u)^2 (1 - \cos \theta)}{V^3}$. The term $(V-u)^2$ represents the square of the relative velocity, which is directly related to the kinetic energy of the fluid striking the vane. The term $u$ is the work output velocity. The product $u(V-u)^2$ is maximized when $u=V/3$. This velocity ratio balances the power output with the power input and the losses associated with the remaining kinetic energy of the water.

*   **Pelton Wheel Bucket ($u = V/2$):** For a Pelton wheel, the bucket is designed to deflect the jet by approximately $180^\circ$. The ideal deflection angle is $\theta = 180^\circ$, where $\cos \theta = -1$. The efficiency formula becomes $\eta = \frac{2 u (V - u)^2 (1 - (-1))}{V^3} = \frac{4 u (V - u)^2}{V^3}$. Differentiating $u(V-u)^2$ with respect to $u$ gives $V^2 - 4Vu + 3u^2$. Setting to zero yields $u=V/3$ and $u=V$. However, this is for the general case. For the specific case of a Pelton wheel where the jet is split and exits backward, the relative velocity at the outlet is generally assumed to be $V_r' = k(V-u)$. For ideal conditions ($k=1$) and maximum energy transfer, the relative velocity should be minimum. This occurs when $u = V/2$. At $u=V/2$, the relative velocity is $V_r = V - V/2 = V/2$. The jet is then deflected backward, and the exit relative velocity is approximately $V/2$. The change in momentum is maximized for a given relative velocity, and the velocity ratio $u/V = 1/2$ balances the power output with the kinetic energy carried away by the water relative to the ground. The maximum theoretical efficiency for a Pelton wheel is 50% at $u = V/2$.

---

### 7. Important Points to Remember

*   The force exerted by a jet on a vane is due to the change in momentum of the fluid.
*   For fixed vanes, the force is calculated using the initial and final velocity components in the direction of the force. $\Delta P = m \Delta v$.
*   For moving vanes, the **relative velocity** ($V_r = V - u$) is crucial for calculating the force and power.
*   The force on a moving vane is $F_x = \rho A V_r^2 (1 - \cos \theta)$.
*   Power transmitted $P = F_x \times u$.
*   Efficiency $\eta = \frac{P}{P_{\text{in}}} = \frac{2 u (V - u)^2 (1 - \cos \theta)}{V^3}$.
*   Maximum efficiency for general curved vanes occurs at $u = V/3$.
*   For Pelton wheel buckets (ideal $180^\circ$ deflection, no losses), maximum efficiency occurs at $u = V/2$, and the theoretical maximum efficiency is 50%.
*   In practical applications like Pelton turbines, factors like friction (coefficient of velocity, $k < 1$) and the angle of deflection (slightly less than $180^\circ$) are important.

---

### 8. Alignment with Course Outcomes

*   **CO1 (Hydrostatic Forces):** While this module focuses on dynamic forces, understanding fluid properties like density is essential for calculations. The concept of force per unit area is implicitly used.
*   **CO2 (Kinematics and Dynamics):** This topic directly applies the principles of kinematics (velocities, angles) and dynamics (Newton's Second Law, momentum conservation). The calculation of forces from changes in momentum is a core aspect.
*   **CO3 (Viscous Flow):** Not directly addressed, as this topic often assumes ideal fluid flow for simplicity in calculating impact forces.
*   **CO4 (Dimensional Analysis):** Not directly addressed, but understanding dimensionless parameters like the velocity ratio ($u/V$) can be related to dimensional analysis principles.
*   **CO5 (Turbo Machines):** This topic is foundational for understanding the operation of turbo-machines, particularly impulse turbines like the Pelton turbine, which are designed based on the impact of jets on moving curved vanes.

---

This concludes the notes for the topic "Impact of Jet on Curved Vanes – Fixed and Moving." Remember to practice the derivations and problem-solving techniques to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
