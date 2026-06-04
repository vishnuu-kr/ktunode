---
title: "Derivation of Bernoulli’s equation from Eulers’s equation of motion with assumptions"
subject: "FLUID MECHANICS"
module: "Module 3: Fluid Kinematics : Methods of describing fluid motion"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106fb"
status: "completed"
scrapedAt: "2026-05-20T18:40:37.469Z"
---
# Fluid Mechanics: Module 3 - Fluid Kinematics

## Topic: Derivation of Bernoulli's Equation from Euler's Equation of Motion with Assumptions

### Learning Outcomes

By the end of this topic, you will be able to:

*   Understand Euler's equation of motion for fluid flow.
*   Identify the assumptions required for the derivation of Bernoulli's equation from Euler's equation.
*   Perform the mathematical derivation of Bernoulli's equation.
*   Explain the physical significance of each term in Bernoulli's equation.
*   Recognize the limitations and applicability of Bernoulli's equation.

---

### 1. Introduction to Fluid Motion Descriptions

Before diving into the derivation, it's crucial to understand how fluid motion is described. Two primary methods exist:

*   **Lagrangian Description:** Follows individual fluid particles as they move. Imagine tracking a specific droplet of water.
*   **Eulerian Description:** Focuses on specific points in space and observes the fluid properties (velocity, pressure, etc.) passing through those points. This is the more common approach in fluid mechanics.

Euler's equation is derived using the **Eulerian description**.

---

### 2. Euler's Equation of Motion

Euler's equation is a fundamental differential equation in fluid mechanics that describes the motion of an **inviscid** (zero viscosity), **incompressible** fluid. It's essentially Newton's second law applied to a fluid element in the Eulerian frame.

**Key Concepts:**

*   **Inviscid Fluid:** A fluid with no internal friction (viscosity). This is a significant simplification.
*   **Incompressible Fluid:** A fluid whose density remains constant regardless of pressure changes.
*   **Fluid Element:** A small, representative volume of fluid.
*   **Body Force:** Forces acting on the entire volume of the fluid element, such as gravity.
*   **Surface Force:** Forces acting on the surface of the fluid element, such as pressure forces.

**The General Form of Euler's Equation (in vector notation, along a streamline):**

Consider a fluid element of mass $dm$ moving along a streamline. The forces acting on it are pressure forces and body forces. The equation of motion for this element is:

$$
\frac{dm \cdot \vec{a}}{ds} = \sum F_{pressure} + \sum F_{body}
$$

Where:
*   $dm$ is the mass of the fluid element.
*   $\vec{a}$ is the acceleration of the fluid element.
*   $ds$ is the infinitesimal displacement along the streamline.
*   $\sum F_{pressure}$ are the net pressure forces acting on the element.
*   $\sum F_{body}$ are the net body forces acting on the element.

For a fluid element of volume $dV$ and density $\rho$, $dm = \rho dV$.
The acceleration $\vec{a}$ in the Eulerian frame is given by the material derivative:
$$
\vec{a} = \frac{\partial \vec{V}}{\partial t} + (\vec{V} \cdot \nabla)\vec{V}
$$
Where $\vec{V}$ is the velocity vector.

The pressure gradient force per unit mass acting on the element is $-\frac{1}{\rho} \nabla p$.
The body force per unit mass (e.g., gravity) is $\vec{g}$.

Thus, Euler's equation becomes:
$$
\rho \left(\frac{\partial \vec{V}}{\partial t} + (\vec{V} \cdot \nabla)\vec{V}\right) = -\nabla p + \rho \vec{g}
$$

**Focusing on Flow Along a Streamline:**

For simplicity in deriving Bernoulli's equation, we often consider the flow along a **streamline**. A streamline is a curve everywhere tangent to the velocity vector at a given instant.

Let $s$ be the coordinate along the streamline.
The acceleration component along the streamline is $a_s = \frac{\partial V_s}{\partial t} + V_s \frac{\partial V_s}{\partial s}$, where $V_s$ is the velocity component along the streamline.

The pressure gradient component along the streamline is $-\frac{1}{\rho} \frac{\partial p}{\partial s}$.
The component of body force (e.g., gravity) along the streamline is $g_s$. If the streamline is inclined at an angle $\theta$ to the horizontal, and gravity acts vertically downwards, then $g_s = -g \sin \theta$.

Euler's equation along a streamline simplifies to:
$$
\rho \left(\frac{\partial V_s}{\partial t} + V_s \frac{\partial V_s}{\partial s}\right) = -\frac{\partial p}{\partial s} + \rho g_s
$$

---

### 3. Assumptions for Deriving Bernoulli's Equation

To simplify Euler's equation and arrive at Bernoulli's equation, the following assumptions are made:

1.  **Steady Flow:** The velocity, pressure, and density at any point in the fluid do not change with time. Mathematically, $\frac{\partial}{\partial t} = 0$.
    *   **Significance:** This eliminates the time-dependent term in Euler's equation.

2.  **Inviscid Flow:** The fluid has no viscosity (internal friction).
    *   **Significance:** This means there are no shear forces acting on the fluid element. All forces are either pressure forces or body forces.

3.  **Incompressible Flow:** The density of the fluid ($\rho$) is constant.
    *   **Significance:** This allows us to treat $\rho$ as a constant outside the differential operators, simplifying integration.

4.  **Flow Along a Streamline:** The equation is derived for points lying on the same streamline.
    *   **Significance:** This allows us to consider only the velocity and pressure gradients along the direction of flow.

5.  **Conservative Body Forces:** The body forces acting on the fluid are derivable from a potential function. Gravity is a common example, where the potential energy per unit mass is $gz$, where $z$ is the vertical height.
    *   **Significance:** This allows us to express body forces in terms of a potential, making integration possible.

---

### 4. Derivation of Bernoulli's Equation

Let's start with Euler's equation along a streamline for steady flow:

$$
\rho \left(V_s \frac{\partial V_s}{\partial s}\right) = -\frac{\partial p}{\partial s} + \rho g_s
$$

From the assumptions:
*   Steady flow means $\frac{\partial V_s}{\partial t} = 0$.
*   Incompressible flow means $\rho$ is constant.
*   Let's consider gravity as the only body force, acting vertically downwards. If the streamline is inclined at an angle $\theta$ to the horizontal, then $g_s = -g \sin \theta$.

The equation becomes:
$$
\rho V_s \frac{\partial V_s}{\partial s} = -\frac{\partial p}{\partial s} - \rho g \sin \theta
$$

We know that $\frac{\partial V_s}{\partial s}$ represents the rate of change of velocity along the streamline.
The term $V_s \frac{\partial V_s}{\partial s}$ can be rewritten as $\frac{\partial}{\partial s} \left(\frac{V_s^2}{2}\right)$.
So, the equation becomes:
$$
\rho \frac{\partial}{\partial s} \left(\frac{V_s^2}{2}\right) = -\frac{\partial p}{\partial s} - \rho g \sin \theta
$$

Now, consider the geometry. Let $s$ be the distance along the streamline and $z$ be the vertical height. For a small segment $ds$ along the streamline, the change in height $dz$ is related by $dz = ds \sin \theta$, or $\sin \theta = \frac{dz}{ds}$.

Substitute $\sin \theta = \frac{dz}{ds}$ into the equation:
$$
\rho \frac{\partial}{\partial s} \left(\frac{V_s^2}{2}\right) = -\frac{\partial p}{\partial s} - \rho g \frac{dz}{ds}
$$

Rearrange the terms to group them by their differential operator $\frac{\partial}{\partial s}$:
$$
\rho \frac{\partial}{\partial s} \left(\frac{V_s^2}{2}\right) + \frac{\partial p}{\partial s} + \rho g \frac{dz}{ds} = 0
$$

Since $\rho$ is constant for incompressible flow, we can bring it inside the partial derivative:
$$
\frac{\partial}{\partial s} \left(\frac{\rho V_s^2}{2}\right) + \frac{\partial p}{\partial s} + \frac{\partial}{\partial s} (\rho g z) = 0
$$

We can combine all the terms under a single derivative with respect to $s$:
$$
\frac{\partial}{\partial s} \left(\frac{\rho V_s^2}{2} + p + \rho g z\right) = 0
$$

This equation signifies that the quantity inside the derivative is constant along the streamline. Integrating this equation with respect to $s$ yields:

$$
\frac{\rho V_s^2}{2} + p + \rho g z = \text{constant along the streamline}
$$

This is the **Bernoulli's Equation** for steady, inviscid, incompressible flow along a streamline.

**Alternative Form:**

Often, Bernoulli's equation is divided by $\rho g$ to express it in terms of head (energy per unit weight):

$$
\frac{V_s^2}{2g} + \frac{p}{\rho g} + z = \text{constant along the streamline}
$$

Where:
*   $\frac{V_s^2}{2g}$ is the **velocity head** (kinetic energy per unit weight).
*   $\frac{p}{\rho g}$ is the **pressure head** (flow energy per unit weight).
*   $z$ is the **elevation head** (potential energy per unit weight).

---

### 5. Physical Significance of Bernoulli's Equation

Bernoulli's equation states that for a fluid in steady, inviscid, and incompressible flow, the sum of the kinetic energy, potential energy, and flow energy per unit volume is constant along a streamline.

*   **Kinetic Energy Term ($\frac{1}{2}\rho V^2$ or $\frac{V^2}{2g}$):** Represents the energy due to the motion of the fluid. Higher velocity means higher kinetic energy.
*   **Pressure Term ($p$ or $\frac{p}{\rho g}$):** Represents the energy associated with the pressure of the fluid. Pressure can be thought of as stored energy that can do work.
*   **Potential Energy Term ($\rho g z$ or $z$):** Represents the energy due to the fluid's elevation or position in a gravitational field. Higher elevation means higher potential energy.

**The principle of conservation of energy is at play here.** As fluid flows, energy can be converted between these three forms, but their sum remains constant along a streamline under the given assumptions.

---

### 6. Examples and Applications

Bernoulli's equation is a powerful tool with numerous applications, including:

*   **Venturi Meter:** Used to measure the flow rate of a fluid by measuring the pressure difference between the wider and narrower sections of a pipe.
    *   As the fluid passes through the narrower section (throat), its velocity increases, and according to Bernoulli's equation, the pressure decreases. This pressure difference is then used to calculate the flow rate.

*   **Pitot Tube:** Used to measure fluid velocity.
    *   It consists of a tube facing the flow. At the opening, the fluid is brought to rest (stagnation point), where its velocity is zero. By measuring the pressure at the stagnation point and comparing it to the static pressure of the fluid, the velocity can be determined.

*   **Aerodynamics (Lift on an Airplane Wing):** The curved shape of an airplane wing causes air to flow faster over the top surface than the bottom. According to Bernoulli's principle, this higher velocity over the top results in lower pressure compared to the bottom, creating an upward force (lift).

*   **Flow from a Tank:** Explaining the velocity of efflux (outflow) from a tank through a small opening.

**Example Calculation:**

Consider water flowing steadily through a horizontal pipe that narrows from a diameter of $D_1 = 0.2 \, \text{m}$ to $D_2 = 0.1 \, \text{m}$. If the velocity in the wider section is $V_1 = 2 \, \text{m/s}$ and the pressure is $p_1 = 200 \, \text{kPa}$, calculate the pressure $p_2$ in the narrower section. Assume water is incompressible with $\rho = 1000 \, \text{kg/m}^3$.

**Steps:**

1.  **Calculate velocities:**
    *   Area of wider section: $A_1 = \frac{\pi D_1^2}{4} = \frac{\pi (0.2)^2}{4} \approx 0.0314 \, \text{m}^2$.
    *   Area of narrower section: $A_2 = \frac{\pi D_2^2}{4} = \frac{\pi (0.1)^2}{4} \approx 0.00785 \, \text{m}^2$.
    *   Using the continuity equation ($A_1 V_1 = A_2 V_2$):
        $V_2 = V_1 \frac{A_1}{A_2} = 2 \, \text{m/s} \times \frac{0.0314}{0.00785} = 2 \, \text{m/s} \times 4 = 8 \, \text{m/s}$.

2.  **Apply Bernoulli's Equation:**
    Since the pipe is horizontal, $z_1 = z_2$. Bernoulli's equation simplifies to:
    $\frac{1}{2}\rho V_1^2 + p_1 = \frac{1}{2}\rho V_2^2 + p_2$

3.  **Solve for $p_2$:**
    $p_2 = p_1 + \frac{1}{2}\rho (V_1^2 - V_2^2)$
    $p_2 = 200 \times 10^3 \, \text{Pa} + \frac{1}{2} \times 1000 \, \text{kg/m}^3 \times ((2 \, \text{m/s})^2 - (8 \, \text{m/s})^2)$
    $p_2 = 200000 \, \text{Pa} + 500 \, \text{kg/m}^3 \times (4 - 64) \, \text{m}^2/\text{s}^2$
    $p_2 = 200000 \, \text{Pa} + 500 \times (-60) \, \text{Pa}$
    $p_2 = 200000 \, \text{Pa} - 30000 \, \text{Pa}$
    $p_2 = 170000 \, \text{Pa} = 170 \, \text{kPa}$

**Conclusion:** The pressure in the narrower section is lower than in the wider section, which is consistent with the principle.

---

### 7. Limitations of Bernoulli's Equation

It's crucial to remember that Bernoulli's equation is derived under specific assumptions, and these limitations must be considered:

*   **Viscosity:** Real fluids have viscosity, which causes friction and energy losses. In viscous flows, Bernoulli's equation is not strictly applicable without modification (e.g., adding a head loss term). The energy is not conserved, but rather dissipated as heat.
*   **Steady Flow:** The equation is only valid for steady flow conditions. Unsteady flows require more complex analysis.
*   **Incompressibility:** For highly compressible fluids (like gases at high speeds), density changes can be significant, and Bernoulli's equation for incompressible flow will be inaccurate.
*   **No Shaft Work:** The derivation does not account for work done by pumps or turbines within the flow. If such devices are present, they must be accounted for separately (e.g., by adding a pump head or subtracting a turbine head).
*   **No Heat Transfer:** The derivation assumes no heat is added to or removed from the fluid.
*   **Flow Along a Streamline:** While the equation can be generalized for irrotational flow (where the constant is the same for all streamlines), the basic derivation is for a single streamline.

---

### 8. Important Points to Remember

*   **Bernoulli's equation is a statement of energy conservation for fluid flow.**
*   **It is derived from Euler's equation by applying specific assumptions: steady, inviscid, incompressible flow along a streamline with conservative body forces.**
*   **The three terms in Bernoulli's equation represent velocity head, pressure head, and elevation head.**
*   **In a constricted section of a pipe with increasing velocity, pressure decreases (and vice-versa) for horizontal flow.**
*   **The limitations of Bernoulli's equation (viscosity, unsteadiness, compressibility, etc.) are critical for its correct application.**

---

### 9. Practice Questions

1.  State the three main assumptions required to derive Bernoulli's equation from Euler's equation.
2.  Write down Bernoulli's equation in terms of pressure, velocity, and elevation. Explain the physical meaning of each term.
3.  A horizontal pipe carries water. At section 1, the diameter is $0.3 \, \text{m}$, the velocity is $2 \, \text{m/s}$, and the pressure is $100 \, \text{kPa}$. At section 2, the diameter is $0.15 \, \text{m}$. Calculate the pressure at section 2, assuming the flow is steady, inviscid, and incompressible.
4.  Discuss a scenario where Bernoulli's equation would not be appropriate for analysis and explain why.
5.  If fluid flows from a wide section of a pipe to a narrow section, what happens to the pressure? Explain using Bernoulli's equation.

---

### 10. Answers to Practice Questions

1.  The three main assumptions are:
    *   **Steady Flow:** Velocity, pressure, and density at any point do not change with time.
    *   **Inviscid Flow:** No internal friction (viscosity is zero).
    *   **Incompressible Flow:** Density is constant.
    *(Additional assumptions include flow along a streamline and conservative body forces, which are often implied or explicitly stated in the derivation).*

2.  Bernoulli's equation is:
    $$
    \frac{V^2}{2} + \frac{p}{\rho} + gz = \text{constant}
    $$
    Or in head form:
    $$
    \frac{V^2}{2g} + \frac{p}{\rho g} + z = \text{constant}
    $$
    *   $\frac{V^2}{2}$ or $\frac{V^2}{2g}$: **Kinetic Energy per Unit Mass** or **Velocity Head**. Represents the energy of motion.
    *   $\frac{p}{\rho}$ or $\frac{p}{\rho g}$: **Flow Energy per Unit Mass** or **Pressure Head**. Represents the energy required to move the fluid.
    *   $gz$ or $z$: **Potential Energy per Unit Mass** or **Elevation Head**. Represents the energy due to the fluid's position in a gravitational field.

3.  **Given:**
    *   $D_1 = 0.3 \, \text{m}$, $V_1 = 2 \, \text{m/s}$, $p_1 = 100 \, \text{kPa} = 100000 \, \text{Pa}$
    *   $D_2 = 0.15 \, \text{m}$
    *   $\rho = 1000 \, \text{kg/m}^3$ (water)
    *   Pipe is horizontal, so $z_1 = z_2$.

    **Calculations:**
    *   $A_1 = \frac{\pi D_1^2}{4} = \frac{\pi (0.3)^2}{4} \approx 0.07069 \, \text{m}^2$
    *   $A_2 = \frac{\pi D_2^2}{4} = \frac{\pi (0.15)^2}{4} \approx 0.01767 \, \text{m}^2$
    *   Continuity equation: $A_1 V_1 = A_2 V_2 \implies V_2 = V_1 \frac{A_1}{A_2} = 2 \, \text{m/s} \times \frac{0.07069}{0.01767} \approx 2 \, \text{m/s} \times 4 = 8 \, \text{m/s}$

    **Bernoulli's Equation (for horizontal pipe $z_1=z_2$):**
    $\frac{1}{2}\rho V_1^2 + p_1 = \frac{1}{2}\rho V_2^2 + p_2$
    $p_2 = p_1 + \frac{1}{2}\rho (V_1^2 - V_2^2)$
    $p_2 = 100000 \, \text{Pa} + \frac{1}{2} \times 1000 \, \text{kg/m}^3 \times ((2 \, \text{m/s})^2 - (8 \, \text{m/s})^2)$
    $p_2 = 100000 \, \text{Pa} + 500 \, \text{kg/m}^3 \times (4 - 64) \, \text{m}^2/\text{s}^2$
    $p_2 = 100000 \, \text{Pa} + 500 \times (-60) \, \text{Pa}$
    $p_2 = 100000 \, \text{Pa} - 30000 \, \text{Pa}$
    $p_2 = 70000 \, \text{Pa} = 70 \, \text{kPa}$

    **Answer:** The pressure at section 2 is $70 \, \text{kPa}$.

4.  Bernoulli's equation would not be appropriate for analysis in the following scenarios:
    *   **Flow with significant viscosity:** For example, the slow flow of honey in a pipe. Viscous friction leads to significant energy losses (pressure drop) not accounted for in Bernoulli's equation. A head loss term would need to be added.
    *   **Unsteady flow:** For example, the flow of water when a tap is suddenly opened or closed. The time-dependent terms in Euler's equation are significant.
    *   **Compressible flow at high speeds:** For example, airflow over a supersonic aircraft wing. The density changes are substantial and cannot be ignored. Specific forms of Bernoulli's equation for compressible flow or other thermodynamic principles would be needed.
    *   **Flow involving pumps or turbines:** If a pump is adding energy to the fluid or a turbine is extracting energy, these energy transfers must be explicitly included in the energy balance equation (extended Bernoulli equation).

5.  If fluid flows from a wide section of a pipe to a narrow section, the velocity of the fluid **increases** due to the continuity equation (conservation of mass). According to Bernoulli's equation, for a horizontal pipe (where the elevation term is constant), if the velocity term increases, the pressure term must **decrease** for the sum to remain constant. Therefore, the pressure in the narrow section is lower than in the wide section.
