---
title: "Alternate form of Euler’s equation"
subject: "TURBO MACHINERY"
module: "Module 1: Introduction: Definition of turbo machine"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf480446300a"
status: "completed"
scrapedAt: "2026-05-20T17:57:16.104Z"
---
# TURBO MACHINERY: Module 1: Introduction: Definition of Turbo Machine

## Topic: Alternate Form of Euler’s Equation

### 1. Introduction and Relevance to Turbo Machines

*   **Definition of Turbo Machine:** A turbo machine is a device that transfers energy between a rotor and a fluid. This energy transfer can be from the fluid to the rotor (e.g., turbines) or from the rotor to the fluid (e.g., pumps, compressors, fans).
*   **Euler's Turbine Equation:** This fundamental equation relates the work done by or on the fluid to the change in angular momentum of the fluid as it passes through the rotor. It is derived from the angular momentum principle.
*   **Need for Alternate Forms:** While the original Euler's turbine equation is powerful, alternate forms can be more convenient for specific analyses of different types of turbo machines and flow conditions. These forms often simplify the equation by incorporating specific properties or assumptions relevant to the machine being studied.

### 2. Original Euler's Turbine Equation (Recap)

The original form of Euler's turbine equation, derived from the change in angular momentum, is typically expressed as:

$$
W_{shaft} = \dot{m} (u_2v_{\theta 2} - u_1v_{\theta 1})
$$

Where:
*   $W_{shaft}$ is the shaft power (work done per unit time).
*   $\dot{m}$ is the mass flow rate of the fluid.
*   $u_1$ and $u_2$ are the peripheral velocities of the rotor at the inlet and outlet, respectively.
*   $v_{\theta 1}$ and $v_{\theta 2}$ are the tangential components of the absolute fluid velocity at the inlet and outlet, respectively.

**Important Note:** This equation represents the *ideal* work done, assuming no losses.

### 3. Alternate Forms of Euler’s Equation

The alternate forms of Euler's equation are derived by manipulating the original equation or by applying different thermodynamic principles (like the steady flow energy equation). These forms are particularly useful for understanding specific aspects of turbo machine operation.

#### 3.1. Based on Velocity Triangles and Specific Speed

While not a direct algebraic manipulation of the original equation, understanding the velocity triangles is crucial for applying Euler's equation effectively. The velocity triangles at the inlet and outlet of the rotor provide the values for $v_{\theta 1}$ and $v_{\theta 2}$.

*   **Velocity Triangle Components:**
    *   **Absolute Velocity (v):** The velocity of the fluid relative to the stationary casing.
    *   **Blade Velocity (u):** The peripheral velocity of the rotor.
    *   **Relative Velocity (w):** The velocity of the fluid relative to the moving rotor blades.
    *   **Tangential Component (vθ):** The component of the absolute velocity in the direction of rotation.
    *   **Radial Component (vr):** The component of the absolute velocity in the radial direction.
    *   **Axial Component (va):** The component of the absolute velocity in the axial direction.

*   **Relationship for vθ:** From the velocity triangles, we can express $v_{\theta}$ in terms of other components. For example, at the inlet:
    *   $v_{\theta 1} = u_1 - w_{r1} \cos \beta_1$ (where $w_{r1}$ is the radial component of relative velocity and $\beta_1$ is the blade angle)
    *   $v_{\theta 1} = v_{u1}$ (often denoted as the tangential component of absolute velocity)

*   **Specific Work:** The Euler's equation can also be expressed in terms of specific work (work done per unit mass of fluid):

    $$
    w_{specific} = \frac{W_{shaft}}{\dot{m}} = u_2v_{\theta 2} - u_1v_{\theta 1}
    $$

    This form is often used when considering energy transfer per unit mass, which is a common thermodynamic approach.

#### 3.2. Incorporating Pressure and Kinetic Energy Changes (for Pumps/Compressors)

For pumps and compressors, the work done by the rotor is used to increase the fluid's pressure and kinetic energy. The steady flow energy equation can be combined with Euler's equation to derive alternate forms that highlight these changes.

Consider the steady flow energy equation for a fluid flowing through the rotor, neglecting heat transfer and changes in potential energy:

$$
\frac{p_1}{\rho g} + \frac{v_1^2}{2g} + z_1 + H_p = \frac{p_2}{\rho g} + \frac{v_2^2}{2g} + z_2 + H_t
$$

Where $H_p$ and $H_t$ are the head added by pump and head transferred to turbine respectively.
For a pump, $H_p > 0$. For a turbine, $H_t > 0$.

If we consider the work done per unit weight (head), the Euler's equation can be written as:

$$
H_{ideal} = \frac{u_2v_{\theta 2} - u_1v_{\theta 1}}{g}
$$

Where $H_{ideal}$ is the ideal head developed by the machine.

Now, let's relate this to pressure and velocity changes. For a frictionless flow, the total energy at the inlet and outlet can be considered. The work done by the rotor increases the total energy of the fluid.

$$
\Delta E_{fluid} = \frac{p_2 - p_1}{\rho} + \frac{v_2^2 - v_1^2}{2}
$$

The work input per unit mass from the rotor is $u_2v_{\theta 2} - u_1v_{\theta 1}$. For a pump, this work input is converted into an increase in fluid energy.

$$
u_2v_{\theta 2} - u_1v_{\theta 1} = \frac{p_2 - p_1}{\rho} + \frac{v_2^2 - v_1^2}{2} + \text{losses}
$$

**Ideal Euler's Equation (in terms of head):**

$$
\text{Head added per unit mass} = \frac{u_2v_{\theta 2} - u_1v_{\theta 1}}{g}
$$

This form is directly applicable to pumps and compressors where the objective is to increase the fluid's pressure and kinetic energy.

#### 3.3. Incorporating Slip Factor (for Centrifugal Machines)

Centrifugal machines, especially pumps and compressors with radial discharge, experience a phenomenon called "slip." Slip occurs because the fluid does not follow the impeller vanes perfectly at the exit, leading to a reduced tangential component of velocity compared to the ideal case.

*   **Slip Factor ($\sigma$):** A factor less than 1 that accounts for this velocity deficit.
    $$
    \sigma = \frac{v_{\theta 2, \text{actual}}}{v_{\theta 2, \text{ideal}}}
    $$
    Where $v_{\theta 2, \text{ideal}}$ is the tangential velocity component if the fluid perfectly followed the vane.

*   **Modified Euler's Equation (for Centrifugal Machines):**
    The actual work done by the impeller is therefore reduced due to slip.
    $$
    W_{actual} = \dot{m} (u_2v_{\theta 2, \text{actual}} - u_1v_{\theta 1}) = \dot{m} (u_2 (\sigma v_{\theta 2, \text{ideal}}) - u_1v_{\theta 1})
    $$

    Alternatively, we can express the actual tangential component of velocity at the outlet in terms of the rotor speed and the outlet vane angle. For a radial vane at the exit ($\beta_2 = 90^\circ$), $v_{\theta 2, \text{ideal}} = u_2$.

    So, for a centrifugal machine with radial vanes at the exit:
    $$
    W_{actual} = \dot{m} (u_2 (\sigma u_2) - u_1v_{\theta 1})
    $$

    This form explicitly accounts for the reduction in energy transfer due to slip, which is a key characteristic of centrifugal turbo machines. (Refer to Dixon, S.I., Chapter 4 for detailed discussion on slip).

#### 3.4. Considering Circulation (Advanced Form)

For a more general and advanced understanding, Euler's equation can be related to the concept of circulation ($\Gamma$). Circulation is the line integral of the velocity around a closed curve.

$$
\Gamma = \oint \mathbf{v} \cdot d\mathbf{l}
$$

The rate of change of circulation with respect to time for a fluid particle is related to the torque applied to the fluid. For a system of fluid particles within a turbo machine rotor, the torque exerted on the fluid is directly proportional to the rate of change of angular momentum.

If we consider a control volume enclosing the rotor, the rate of angular momentum leaving minus the rate of angular momentum entering equals the torque exerted by the rotor on the fluid.

$$
\text{Torque (T)} = \dot{m} (r_2 v_{\theta 2} - r_1 v_{\theta 1}) \quad (\text{using } r \text{ for radius})
$$

And the power is $W = \Omega T$, where $\Omega$ is the angular velocity. Since $u = \Omega r$, we get back to the original form.

An alternative perspective using circulation relates the work done to the change in circulation around a circuit within the fluid that encloses the rotor. For a steady flow, the rate of work done per unit mass is related to the change in circulation around a path within the fluid that encloses the rotor.

$$
w_{specific} = \Omega \Delta \Gamma_{\text{fluid}}
$$

Where $\Delta \Gamma_{\text{fluid}}$ is the change in circulation of the fluid around a path enclosing the rotor. This form is more abstract but demonstrates the fundamental connection between rotational forces and fluid work transfer.

### 4. Practical Implications and Applications

*   **Pump/Compressor Design:** The alternate forms help in predicting the head or pressure rise a machine can deliver based on its geometry ($u_1, u_2, \beta_1, \beta_2$) and fluid properties.
*   **Turbine Design:** They help in calculating the power output of a turbine based on the fluid's momentum change and the rotor's speed.
*   **Performance Analysis:** Understanding the impact of slip factor (for centrifugal machines) or the velocity triangle components is crucial for accurate performance prediction and troubleshooting.
*   **Efficiency Calculations:** The ideal work calculated from Euler's equation forms the basis for calculating the isentropic or adiabatic efficiency of the turbo machine by comparing it with the actual work done. (CO1)

### 5. Examples

**Example 1: Centrifugal Pump Impeller**

A centrifugal pump impeller has an outer radius $r_2 = 0.1$ m and rotates at $1500$ rpm. The absolute velocity of the fluid at the inlet is $v_1 = 10$ m/s, and its tangential component is $v_{\theta 1} = 0$ m/s (radial entry). The absolute velocity of the fluid leaving the impeller has a tangential component $v_{\theta 2} = 12$ m/s, and the radial component is $v_{r2} = 5$ m/s. The slip factor at the outlet is $\sigma = 0.8$. If the mass flow rate is $\dot{m} = 5$ kg/s, calculate the ideal and actual shaft power.

**Solution:**

*   Peripheral velocity at the outlet: $u_2 = \Omega r_2 = \frac{2\pi N}{60} r_2 = \frac{2\pi \times 1500}{60} \times 0.1 = 15.71$ m/s.
*   Ideal tangential velocity at the outlet if no slip: $v_{\theta 2, \text{ideal}} = u_2 = 15.71$ m/s (assuming radial vanes for simplicity in this ideal case, though the problem states $v_{\theta 2} = 12$ m/s which is actual. Let's recalculate the given $v_{\theta 2}$ and $u_2$).

Let's re-evaluate the question. Usually, $v_{\theta 2}$ is derived from $u_2$, $\beta_2$, and $w_{\theta 2}$ or $w_{r2}$. If $v_{\theta 2} = 12$ m/s is the actual tangential component and slip factor is given, then it implies that the ideal tangential velocity might be different from $u_2$. Let's assume $v_{\theta 2}$ given is the actual tangential velocity.

However, if the problem intends to use the slip factor concept, it's usually applied to the ideal tangential velocity. Let's assume the vane angle at outlet $\beta_2$ leads to an ideal $v_{\theta 2, \text{ideal}}$ and the given $v_{\theta 2} = 12$ m/s is the actual one. The slip factor relates the actual tangential velocity to the ideal one.

Let's assume the problem meant that without slip ($ \sigma = 1 $), the tangential velocity would be $v_{\theta 2, \text{ideal}}$.

If we consider $v_{\theta 2}$ as the actual tangential velocity, the problem might be structured to test the application of the slip factor by implying that this $v_{\theta 2}$ is already reduced.

Let's go by the definition of slip factor: $\sigma = \frac{v_{\theta 2, \text{actual}}}{v_{\theta 2, \text{ideal}}}$.
If $v_{\theta 2, \text{actual}} = 12$ m/s and $\sigma = 0.8$, then $v_{\theta 2, \text{ideal}} = \frac{12}{0.8} = 15$ m/s.

Now, applying Euler's equations:

*   **Ideal Shaft Power:**
    $W_{ideal} = \dot{m} (u_2 v_{\theta 2, \text{ideal}} - u_1 v_{\theta 1})$
    Assuming radial entry $v_{\theta 1} = 0$. We also need $u_1$. Let's assume inlet radius $r_1 = 0.05$ m.
    $u_1 = \Omega r_1 = 15.71 \times 0.05 = 0.785$ m/s.
    $W_{ideal} = 5 \times (15.71 \times 15 - 0.785 \times 0)$
    $W_{ideal} = 5 \times 235.65 = 1178.25$ W

*   **Actual Shaft Power:**
    $W_{actual} = \dot{m} (u_2 v_{\theta 2, \text{actual}} - u_1 v_{\theta 1})$
    $W_{actual} = 5 \times (15.71 \times 12 - 0.785 \times 0)$
    $W_{actual} = 5 \times 188.52 = 942.6$ W

**If the intent was that the $v_{\theta 2}$ given ($12$ m/s) is the actual, and slip is defined with respect to $u_2$ for radial vanes:**

If vanes are radial at the exit ($\beta_2=90^\circ$), then $v_{\theta 2, \text{ideal}} = u_2$.
Given $v_{\theta 2} = 12$ m/s and $\sigma=0.8$, and $u_2 = 15.71$ m/s.
This would mean $\sigma = \frac{12}{15.71} \approx 0.76$. If the slip factor is given as 0.8, it's inconsistent unless the vane angle is not radial.

Let's assume the problem implies: the actual tangential velocity is $v_{\theta 2, \text{actual}} = \sigma \times u_2$ for radial vanes.
So, $v_{\theta 2, \text{actual}} = 0.8 \times 15.71 = 12.57$ m/s.

Then, Actual Shaft Power:
$W_{actual} = \dot{m} (u_2 v_{\theta 2, \text{actual}} - u_1 v_{\theta 1})$
$W_{actual} = 5 \times (15.71 \times 12.57 - 0.785 \times 0)$
$W_{actual} = 5 \times 197.43 = 987.15$ W

This highlights the importance of precisely understanding how the slip factor is defined and applied in a problem.

**Example 2: Axial Flow Turbine Stage**

In an axial flow turbine stage, the rotor has an average radius of $0.5$ m and rotates at $3000$ rpm.
At the mean radius:
Inlet absolute velocity tangential component: $v_{\theta 1} = 200$ m/s.
Outlet absolute velocity tangential component: $v_{\theta 2} = 100$ m/s.
The mass flow rate is $\dot{m} = 100$ kg/s.

Calculate the specific work done and the power developed by the turbine stage.

**Solution:**

*   Peripheral velocity at the mean radius:
    $u = \Omega r = \frac{2\pi N}{60} r = \frac{2\pi \times 3000}{60} \times 0.5 = 157.08$ m/s.

*   Specific work done (using the general form of Euler's equation):
    $w_{specific} = u_2v_{\theta 2} - u_1v_{\theta 1}$
    For an axial flow machine, the peripheral velocity is generally constant across the radius for a single stage analysis at the mean radius, so $u_1 = u_2 = u$.
    $w_{specific} = u (v_{\theta 2} - v_{\theta 1})$
    $w_{specific} = 157.08 \times (100 - 200)$
    $w_{specific} = 157.08 \times (-100) = -15708$ J/kg

    The negative sign indicates that work is done *by* the fluid on the rotor (i.e., the turbine extracts energy).

*   Power developed:
    $W = \dot{m} \times |w_{specific}|$
    $W = 100 \times |-15708|$
    $W = 100 \times 15708 = 1,570,800$ W = 1.57 MW

### 6. Key Points to Remember

*   **Euler's equation is fundamental** to understanding energy transfer in turbo machines.
*   **Alternate forms** provide flexibility for different machine types and analyses.
*   **Velocity triangles** are essential for determining the velocity components ($v_{\theta 1}, v_{\theta 2}$) needed for Euler's equation.
*   For **pumps and compressors**, the work done increases fluid pressure and kinetic energy.
*   For **turbines**, the work done is extracted from the fluid's momentum.
*   **Slip** is a significant factor in centrifugal machines, reducing the effective tangential velocity at the outlet and thus the work done. The slip factor ($\sigma$) quantifies this.
*   The equation represents **ideal work**; actual work is always less due to losses.
*   Understanding the **sign convention** is important: positive work implies work done by the rotor on the fluid (pump/compressor), while negative work implies work done by the fluid on the rotor (turbine).

### 7. Practice Questions

1.  **Centrifugal Compressor:** A centrifugal compressor impeller has an inlet radius $r_1 = 0.08$ m and an outlet radius $r_2 = 0.15$ m. It rotates at $4000$ rpm. At the inlet, the absolute velocity has a radial component $v_{r1} = 30$ m/s and a tangential component $v_{\theta 1} = -20$ m/s. At the outlet, the absolute velocity has a radial component $v_{r2} = 50$ m/s and a tangential component $v_{\theta 2} = 100$ m/s. Calculate the work done per unit mass of air flowing through the impeller. (Assume air density $\rho = 1.2$ kg/m³).
    *   **Hint:** Use $w_{specific} = u_2v_{\theta 2} - u_1v_{\theta 1}$.

2.  **Axial Flow Turbine:** An axial flow turbine rotor operates at a constant radius of $0.75$ m and rotates at $2500$ rpm. The inlet tangential component of the absolute velocity of steam is $v_{\theta 1} = 500$ m/s, and the outlet tangential component is $v_{\theta 2} = 200$ m/s. If the mass flow rate of steam is $20$ kg/s, determine the power developed by the turbine.

3.  **Centrifugal Pump with Slip:** A centrifugal pump impeller has an outlet radius of $0.2$ m and rotates at $1200$ rpm. The vanes are radial at the exit. The slip factor is $\sigma = 0.75$. The inlet flow is radial. Calculate the ideal head and the actual head developed by the impeller for a flow rate of $0.1$ m³/s, assuming the specific weight of water is $9810$ N/m³.
    *   **Hint:** For radial vanes at exit, $v_{\theta 2, \text{ideal}} = u_2$. For radial inlet, $v_{\theta 1} = 0$. Use $\rho = 1000$ kg/m³.

### 8. Answers to Practice Questions

**Answer 1:**
*   Inlet peripheral velocity: $u_1 = \Omega r_1 = \frac{2\pi \times 4000}{60} \times 0.08 = 33.51$ m/s.
*   Outlet peripheral velocity: $u_2 = \Omega r_2 = \frac{2\pi \times 4000}{60} \times 0.15 = 62.83$ m/s.
*   Specific work done: $w_{specific} = u_2v_{\theta 2} - u_1v_{\theta 1} = (62.83 \times 100) - (33.51 \times -20)$
    $w_{specific} = 6283 - (-670.2) = 6283 + 670.2 = 6953.2$ J/kg.
    This is positive, indicating work is done *on* the fluid by the compressor.

**Answer 2:**
*   Peripheral velocity: $u = \Omega r = \frac{2\pi \times 2500}{60} \times 0.75 = 196.35$ m/s.
*   Assuming constant peripheral velocity: $u_1 = u_2 = u = 196.35$ m/s.
*   Specific work done: $w_{specific} = u_2v_{\theta 2} - u_1v_{\theta 1} = (196.35 \times 200) - (196.35 \times 500)$
    $w_{specific} = 196.35 \times (200 - 500) = 196.35 \times (-300) = -58905$ J/kg.
*   Power developed: $W = \dot{m} \times |w_{specific}| = 20 \times |-58905| = 20 \times 58905 = 1,178,100$ W = 1.178 MW.

**Answer 3:**
*   Outlet radius $r_2 = 0.2$ m. Rotational speed $N = 1200$ rpm.
*   Outlet peripheral velocity: $u_2 = \Omega r_2 = \frac{2\pi \times 1200}{60} \times 0.2 = 25.13$ m/s.
*   For radial vanes at exit, ideal tangential velocity $v_{\theta 2, \text{ideal}} = u_2 = 25.13$ m/s.
*   Inlet flow is radial, so $v_{\theta 1} = 0$.
*   Slip factor $\sigma = 0.75$.
*   Actual tangential velocity at outlet: $v_{\theta 2, \text{actual}} = \sigma \times v_{\theta 2, \text{ideal}} = 0.75 \times 25.13 = 18.85$ m/s.

*   **Ideal Head:**
    Ideal work per unit mass: $w_{specific, \text{ideal}} = u_2 v_{\theta 2, \text{ideal}} - u_1 v_{\theta 1} = (25.13 \times 25.13) - (u_1 \times 0)$
    $w_{specific, \text{ideal}} = 631.5$ J/kg.
    Ideal Head $H_{ideal} = \frac{w_{specific, \text{ideal}}}{g} = \frac{631.5}{9.81} = 64.37$ m.

*   **Actual Head:**
    Actual work per unit mass: $w_{specific, \text{actual}} = u_2 v_{\theta 2, \text{actual}} - u_1 v_{\theta 1} = (25.13 \times 18.85) - (u_1 \times 0)$
    $w_{specific, \text{actual}} = 473.7$ J/kg.
    Actual Head $H_{actual} = \frac{w_{specific, \text{actual}}}{g} = \frac{473.7}{9.81} = 48.29$ m.

### 9. Alignment with Course Outcomes

*   **CO1 (Use fundamental principles and find efficiencies):** This topic directly applies the fundamental principle of angular momentum (via Euler's equation) to calculate the ideal work done. This ideal work is the basis for calculating efficiencies by comparing it with actual work.
*   **CO2 (Analyze velocity triangles and find performance):** The alternate forms of Euler's equation rely heavily on the velocity components derived from velocity triangles. Understanding these components allows for the analysis of performance parameters like work transfer.
*   **CO3 & CO4 (Select appropriate machines):** By understanding how Euler's equation dictates the energy transfer capabilities of different turbo machines (e.g., the effect of radial vanes and slip in centrifugal pumps vs. axial flow turbines), students gain insight into selecting machines for specific applications based on their theoretical performance limits.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 10. References for Further Study

*   **Dixon, S.I. (1999). *Fluid Mechanics and Thermodynamics of Turbomachinery*. Pergamon Press.** (Chapters on Euler's Turbine Equation and Centrifugal Machines are particularly relevant).
*   **Venkanna, B.K. (2009). *Fundamentals of Turbo Machinery*. PHI Learning Pvt. Ltd.** (Chapters introducing Euler's equation and performance analysis).
*   **Yahya, S.H. (1996). *Turbines, Compressor and Fans*. Tata McGraw Hill.** (Provides a good foundation on the application of Euler's equation in various machines).
*   **Gambini, M., & Vellini, M. (2021). *Turbomachinery – Fundamentals, Selection and Preliminary Design*. Springer.** (Offers advanced perspectives and design considerations).
*   **Dick, E. (2022). *Fundamentals of Turbomachines*. Springer.** (Covers fundamental principles with modern approaches).