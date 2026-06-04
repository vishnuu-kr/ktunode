---
title: "Impulse and reaction turbines-velocity diagram-condition for"
subject: "POWER PLANT ENGINEERING"
module: "Module 2: Steam generator classifications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463787"
status: "completed"
scrapedAt: "2026-05-20T18:06:29.325Z"
---
# POWER PLANT ENGINEERING: Module 2: Steam Generator Classifications

## Topic: Impulse and Reaction Turbines - Velocity Diagram - Condition for Maximum Efficiency

This module focuses on understanding the fundamental differences between impulse and reaction steam turbines, how their operation is analyzed using velocity diagrams, and the conditions required for achieving maximum efficiency. This knowledge is crucial for understanding the performance of steam turbines, directly contributing to **CO1** (explaining components and working of steam plants) and **CO3** (calculating performance parameters of steam turbines).

---

### 1. Introduction to Steam Turbines

A steam turbine is a rotary mechanical device that extracts thermal energy from pressurized steam and uses it to do mechanical work on a rotating output shaft. This mechanical work can then be used to drive an electric generator.

*   **Primary Function:** To convert the thermal energy of steam into kinetic energy and then into mechanical rotational energy.
*   **Working Principle:** High-pressure steam expands through a series of nozzles and blades, causing the rotor to spin.

---

### 2. Classification of Steam Turbines

Steam turbines can be broadly classified based on various criteria. For this topic, we will focus on the classification based on the *principle of operation* relating to how steam energy is converted into mechanical work.

#### 2.1 Impulse Turbines

*   **Definition:** In an impulse turbine, the entire pressure drop occurs in the stationary nozzles. The steam expands in the nozzles, converting its internal energy into kinetic energy, and emerges as a high-velocity jet. This high-velocity jet strikes the moving blades, imparting momentum and causing rotation. The pressure of the steam remains nearly constant across the moving blades.
*   **Key Features:**
    *   Pressure drop occurs only in stationary nozzles.
    *   Steam velocity is high when it strikes the moving blades.
    *   No pressure drop across the moving blades.
    *   Typically have a larger diameter for the same power output compared to reaction turbines.
*   **Examples:**
    *   **De Laval Turbine:** A simple impulse turbine with a single stage. It features a nozzle for expansion and a single row of moving blades. Used for high-speed applications.
    *   **Rateau Turbine:** A multi-stage impulse turbine where the total pressure drop is divided into several stages, each consisting of a set of stationary nozzles (nozzle blades) and a set of moving blades. This arrangement reduces the steam velocity at each stage, improving efficiency.
    *   **Curtis Turbine:** A velocity-compounded impulse turbine. It utilizes multiple rows of moving blades separated by stationary rows of guide blades (nozzles). The steam jet strikes the first row of moving blades, then a stationary row redirects it to the second row of moving blades, and so on, allowing for a significant pressure drop in a single stage, making it suitable for large pressure differences.

#### 2.2 Reaction Turbines

*   **Definition:** In a reaction turbine, the steam expands partly in the stationary nozzles (nozzle vanes) and partly in the moving blades. Both the stationary and moving blades are designed to act as nozzles. As steam passes through the moving blades, it expands further, and the resulting increase in velocity (and thus kinetic energy) within the moving blades creates a reaction force that pushes the blades and causes rotation.
*   **Key Features:**
    *   Pressure drop occurs in both stationary and moving blades.
    *   Steam velocity increases as it passes through both stationary and moving blades.
    *   There is a pressure drop across the moving blades.
    *   The force on the blades is due to both impulse (change in momentum) and reaction (from steam expansion).
    *   Typically have a smaller diameter for the same power output compared to impulse turbines.
*   **Examples:**
    *   **Parsons Turbine:** A classic example of a reaction turbine. It uses alternating rows of stationary and moving blades. The stationary blades are nozzles that direct the steam onto the moving blades. The moving blades are shaped to cause further expansion and acceleration of the steam, generating a reaction force.

---

### 3. Velocity Diagrams for Impulse and Reaction Turbines

Velocity diagrams are graphical representations used to analyze the flow of steam through the blades of a turbine. They help in understanding the velocities of steam and the blades, and in calculating the work done and efficiency.

Let's define the key velocities:

*   $v_1$: Absolute velocity of steam entering the moving blades.
*   $v_{f1}$: Velocity of steam flowing through the fixed blades (or nozzle).
*   $u$: Blade speed (tangential velocity of the blade). This is the same for both impulse and reaction turbines at a given radius and stage.
*   $v_{r1}$: Relative velocity of steam entering the moving blades.
*   $v_{r2}$: Relative velocity of steam leaving the moving blades.
*   $v_2$: Absolute velocity of steam leaving the moving blades.
*   $v_{f2}$: Velocity of steam flowing through the moving blades (or exit velocity).

#### 3.1 Velocity Diagram for Impulse Turbine (Single Stage)

In an impulse turbine, the steam expands entirely in the nozzle before hitting the moving blades.

**Assumptions for a basic diagram:**

*   No friction in the blades.
*   No velocity of whirl at the exit of the moving blades ($v_{w2} = 0$).
*   The angle of the nozzle (fixed blade) with the direction of motion is $\alpha$.
*   The angle of the moving blade inlet with the direction of motion is $\beta_1$.
*   The angle of the moving blade outlet with the direction of motion is $\beta_2$.
*   The steam leaves the nozzle at a uniform velocity $v_1$ at angle $\alpha$ to the direction of motion.

**Construction:**

1.  **Blade Velocity Vector:** Draw a vector $OA$ representing the blade velocity $u$ horizontally to the right.
2.  **Absolute Velocity of Steam Entering:** Draw a vector $AB$ representing the absolute velocity of steam $v_1$ at an angle $\alpha$ to the horizontal. The resultant $OB$ represents the relative velocity of steam $v_{r1}$ with which it approaches the moving blades.
3.  **Relative Velocity Vector:** The vector $OB$ represents $v_{r1}$ at an angle $\beta_1$ to the direction of motion.
4.  **Blade Angle at Inlet:** The blade is designed such that its angle at the inlet $\beta_1$ matches the angle of $v_{r1}$.
5.  **Relative Velocity at Outlet:** Assume the steam leaves the moving blades with a relative velocity $v_{r2}$ at an angle $\beta_2$ (typically $\beta_2 = \beta_1$ for symmetrical blades). From point $A$, draw a vector $AC$ representing $v_{r2}$ at an angle $-\beta_2$ to the horizontal (assuming symmetrical blades, where the inlet and outlet angles are equal in magnitude but opposite in direction relative to the blade tangent).
6.  **Absolute Velocity at Outlet:** The vector $AD$ from $OB$ to $AC$ (closing the vector triangle, i.e., $OB + BA' = OA + AC$, where $BA'$ is opposite to $AB$) represents the absolute velocity of steam leaving the moving blades $v_2$. The angle $\alpha_2$ of this vector with the direction of motion is the exit angle.
    *   More directly, from the diagram, $v_2$ is found by vector addition: $\vec{v}_2 = \vec{u} + \vec{v}_{r2}$. Since $\vec{v}_{r1} = \vec{v}_1 - \vec{u}$, we have $\vec{v}_1 = \vec{v}_{r1} + \vec{u}$.
    *   The velocity diagram for the outlet is constructed from the exit point of the inlet diagram. From the end of the $u$ vector (point $A$), draw the relative velocity $v_{r2}$ at angle $-\beta_2$. The resultant from the origin $O$ to the end of $v_{r2}$ vector is $v_2$.

**Whirl Velocity:**

*   Whirl velocity ($v_w$) is the tangential component of the absolute velocity of steam.
*   Whirl velocity at inlet: $v_{w1} = v_1 \cos \alpha$.
*   Whirl velocity at outlet: $v_{w2} = v_2 \cos \alpha_2$.

**Work Done per unit mass of steam:**

The work done per unit mass of steam is given by the change in kinetic energy of the steam due to the tangential impulse on the blades.
Work Done per unit mass = $u \times (v_{w1} + v_{w2})$

*   Note: For an impulse turbine, the steam expands in the nozzle, so the pressure is constant across the moving blades. The velocity triangle analysis shows the impulse component contributing to work. If we assume no friction, then $v_{r2} = v_{r1}$. For a purely impulse turbine without velocity compounding, the steam leaves the blade row without any radial velocity, and often $v_{w2}$ is assumed to be zero for simplification in basic diagrams, although this is not always the case in practice. The diagram above shows $v_{w2} = v_2 \cos \alpha_2$.

#### 3.2 Velocity Diagram for Reaction Turbine (Single Stage)

In a reaction turbine, there is a pressure drop and velocity increase in both the stationary and moving blades. The stationary blades act as nozzles to direct steam at a certain velocity and angle onto the moving blades. The moving blades are also shaped like nozzles, causing further expansion and acceleration.

**Assumptions for a basic diagram:**

*   No friction in the blades.
*   The angle of the fixed blade (nozzle) with the direction of motion is $\alpha$.
*   The angle of the moving blade inlet with the direction of motion is $\beta_1$.
*   The angle of the moving blade outlet with the direction of motion is $\beta_2$.
*   The steam enters the moving blades with absolute velocity $v_1$ at angle $\alpha$.
*   The steam leaves the moving blades with absolute velocity $v_2$ at angle $\alpha_2$.
*   For a reaction turbine, the design is often symmetric, meaning the blade angles are equal in magnitude but opposite in direction relative to the tangent, and the relative velocities are equal in magnitude ($v_{r1} = v_{r2}$).

**Construction:**

1.  **Blade Velocity Vector:** Draw a vector $OA$ representing the blade velocity $u$ horizontally to the right.
2.  **Absolute Velocity of Steam Entering:** Draw a vector $AB$ representing the absolute velocity of steam $v_1$ at an angle $\alpha$ to the horizontal. The resultant $OB$ represents the relative velocity of steam $v_{r1}$ with which it approaches the moving blades.
3.  **Blade Angle at Inlet:** The blade angle at inlet $\beta_1$ is designed to match the angle of $v_{r1}$.
4.  **Relative Velocity at Outlet:** Assume the steam leaves the moving blades with a relative velocity $v_{r2}$. For a symmetrical reaction turbine stage (often called a "40% reaction" stage, meaning 40% of the total enthalpy drop occurs in the moving blades), $v_{r1} = v_{r2}$. Draw a vector $AC$ representing $v_{r2}$ at an angle $-\beta_2$ to the horizontal. Note that here $\beta_2$ is the angle of the blade at the outlet relative to the direction of motion.
5.  **Absolute Velocity at Outlet:** The vector $OC$ represents the absolute velocity of steam $v_2$ leaving the moving blades. This $v_2$ is at an angle $\alpha_2$ to the direction of motion.

**Whirl Velocity Components:**

*   Whirl velocity at inlet: $v_{w1} = v_1 \cos \alpha$.
*   Whirl velocity at outlet: $v_{w2} = v_2 \cos \alpha_2$.

**Work Done per unit mass of steam:**

Work Done per unit mass = $u \times (v_{w1} + v_{w2})$

*   Crucially, in a reaction turbine, both $v_{w1}$ and $v_{w2}$ are significant. The reaction force is proportional to the change in velocity, and the impulse force is proportional to the change in momentum.

#### 3.3 Comparison of Velocity Diagrams

| Feature               | Impulse Turbine                               | Reaction Turbine                                      |
| :-------------------- | :-------------------------------------------- | :---------------------------------------------------- |
| **Pressure Drop**     | Entirely in stationary nozzles.               | In both stationary and moving blades.                 |
| **Steam Velocity**    | High velocity at entry to moving blades.      | Velocity increases in both sets of blades.            |
| **Work Mechanism**    | Primarily impulse (change in momentum).       | Both impulse and reaction forces.                     |
| **Blade Outlet Angle**| Can be designed for zero whirl ($v_{w2}=0$). | Usually non-zero whirl.                               |
| **Symmetry**          | Not necessarily symmetrical.                  | Often designed symmetrically ($v_{r1} = v_{r2}$, $\beta_1 = \beta_2$). |
| **Diagram Shape**     | $v_1$ is often much larger than $v_{r2}$.      | $v_{r1}$ and $v_{r2}$ are often comparable.            |

---

### 4. Condition for Maximum Efficiency

The efficiency of a turbine stage is maximized when the work done on the blades is maximized for a given amount of steam energy. This is related to the blade speed and the steam velocity.

*   **Work Done (W) per unit mass of steam:** $W = u (v_{w1} + v_{w2})$
*   **Specific Steam Consumption (SSC):** The mass of steam required to produce unit power. Lower SSC implies higher efficiency.
*   **Isentropic Enthalpy Drop ($\Delta h_0$):** The theoretical enthalpy drop available in a stage if the expansion were isentropic.
*   **Blade Efficiency ($\eta_{blade}$):** The ratio of work done on the blades to the isentropic enthalpy drop available for that stage.
    $\eta_{blade} = \frac{Work Done}{Isentropic Enthalpy Drop} = \frac{u(v_{w1} + v_{w2})}{\Delta h_0}$

**Condition for Maximum Blade Efficiency (for a Simple Impulse Turbine Stage without Velocity Compounding and assuming no friction):**

For a simple impulse turbine, the steam expands in the nozzle to velocity $v_1$, and this velocity is utilized by the moving blades. The work done is $u \times v_{w1}$.

From the velocity diagram of an impulse turbine: $v_{r1} = \sqrt{v_1^2 + u^2 - 2 v_1 u \cos \alpha}$.
Assuming no friction, $v_{r2} = v_{r1}$.
For maximum efficiency, we typically aim for the steam to leave the blades with minimum kinetic energy relative to the blades. In an ideal impulse stage with no blade friction and symmetrical blades, the steam should leave the blades with zero axial velocity if it's a single stage and all energy is converted to rotational work. However, a more practical condition for maximum efficiency relates the blade speed to the steam speed.

Consider the impulse force component: Work = $m \times u \times (v_{w1} + v_{w2})$.
For a simple impulse turbine, $v_{w1} = v_1 \cos \alpha$.
If we assume that the steam leaves the blades with zero whirl ($v_{w2} = 0$) and no friction, then the relative velocity $v_{r2}$ would be axial. However, this is an extreme case.

A more realistic condition for maximum blade efficiency in a simple impulse turbine (single row of blades, no friction, no compounding) occurs when the blade speed is half the steam speed:

**$u = \frac{v_1}{2}$**

*   **Derivation Sketch:**
    *   Let $v_{r1}$ be the relative velocity entering the blades. Work done is proportional to $u \cdot v_{w1}$.
    *   $v_{w1} = v_1 \cos \alpha$.
    *   If friction is neglected and blades are symmetrical, $v_{r2} = v_{r1}$. The outlet velocity triangle relates $v_2$ and $v_{w2}$.
    *   For maximum work done from a given kinetic energy of steam ($v_1^2/2$), the steam should be turned through the maximum angle possible by the blades.
    *   The condition $u = v_1/2$ leads to the steam leaving the blades with zero axial velocity if the blade angles are designed appropriately. In reality, some axial velocity is usually present.
    *   A more general approach considers the change in momentum. The impulse force is the rate of change of momentum. Work done is force times velocity.

**Condition for Maximum Blade Efficiency (for a Reaction Turbine Stage):**

In a reaction turbine, the stage efficiency depends on both the impulse and reaction components. For a reaction turbine, the condition for maximum efficiency is when the blade speed is equal to the steam speed entering the moving blades:

**$u = v_1$**

*   **Derivation Sketch:**
    *   In a reaction turbine, the steam expands in both fixed and moving blades.
    *   The enthalpy drop in the moving blades causes further acceleration, leading to a reaction force.
    *   The condition $u = v_1$ ensures that the steam leaves the moving blades axially (zero whirl component $v_{w2}$ if the blade outlet angle $\beta_2$ is set correctly).
    *   If $u = v_1$ and the blades are symmetrical ($v_{r1} = v_{r2}$), the outlet velocity triangle will show $v_2$ as being purely axial.
    *   The work done is $u(v_{w1} + v_{w2})$. When $u = v_1$ and the outlet angle is adjusted, $v_{w2}$ becomes zero.
    *   Work Done = $u \cdot v_{w1}$. Since $v_{w1} = \sqrt{v_1^2 - v_{r1}^2}$ and $v_{r1} = \sqrt{u^2 + v_1^2 - 2uv_1 \cos\alpha}$
    *   For a 50% reaction turbine (equal enthalpy drop in fixed and moving blades), the nozzle angle $\alpha$ and blade angles $\beta_1, \beta_2$ are usually set such that $u = v_1$. This maximizes the stage efficiency.

**Why these conditions?**

These conditions ($u = v_1/2$ for impulse, $u = v_1$ for reaction) are derived from optimizing the work output for a given steam flow and velocity, considering the mechanics of blade-steam interaction. They represent the point where the blade speed is ideally matched to the steam speed to extract the maximum possible kinetic energy (impulse) or to utilize the combined impulse and reaction forces effectively.

**Important Considerations:**

*   **Friction:** Real blades have friction, which reduces the relative velocity ($v_{r2} < v_{r1}$). This means the optimum blade speed might shift slightly.
*   **Blade Angles:** The angles of the blades ($\alpha$, $\beta_1$, $\beta_2$) are critical in determining the velocity triangles and thus the efficiency.
*   **Axial Velocity:** In multi-stage turbines, some axial velocity component is usually maintained at the exit of each stage to guide the steam to the next stage.
*   **Degree of Reaction:** The proportion of enthalpy drop occurring in the moving blades defines the degree of reaction.
    *   0% Reaction: Pure impulse turbine.
    *   50% Reaction: Equal enthalpy drop in fixed and moving blades (often called a "symmetrical" reaction turbine).
    *   100% Reaction: Pure reaction turbine (rarely achieved in practice due to nozzle design limitations).
    *   For a 50% reaction turbine, the condition for maximum efficiency is indeed $u = v_1$.

---

### 5. Practical Implications and Examples

*   **Impulse Turbines:** Preferred for high-pressure, high-velocity applications (like the first stage of a large turbine) due to their ability to handle large pressure drops efficiently in a single stage. However, they can be less efficient at lower speeds.
*   **Reaction Turbines:** Generally more efficient at lower steam velocities and pressures and are widely used in the later stages of large turbines where steam velocities are lower. The continuous expansion provides smoother torque.

**Example: Calculating Work Done**

Consider a stage of an impulse turbine where the steam leaves the nozzle with a velocity $v_1 = 400$ m/s at an angle $\alpha = 20^\circ$. The blade speed is $u = 200$ m/s. Assume no friction and the steam leaves the blades with zero whirl ($v_{w2} = 0$).

1.  **Whirl velocity at inlet ($v_{w1}$):**
    $v_{w1} = v_1 \cos \alpha = 400 \cos 20^\circ = 400 \times 0.9397 \approx 375.88$ m/s.

2.  **Work Done per unit mass:**
    $W = u (v_{w1} + v_{w2}) = 200 (375.88 + 0) = 75176$ J/kg.

If the condition for maximum efficiency for this impulse stage were met, $u$ would be $v_1/2 = 400/2 = 200$ m/s. This matches the given blade speed, suggesting the stage is operating at or near its maximum efficiency for these ideal conditions.

---

### 6. Key Points to Remember

*   **Impulse Turbine:** Pressure drop in stationary nozzles only. Steam jet strikes moving blades. Work is due to impulse.
*   **Reaction Turbine:** Pressure drop in both stationary and moving blades. Steam expands in moving blades, creating reaction force. Work is due to impulse and reaction.
*   **Velocity Diagram:** Essential tool for analyzing steam flow and calculating work done.
*   **Work Done:** Proportional to blade speed ($u$) and the sum of whirl velocities at inlet and outlet ($v_{w1} + v_{w2}$).
*   **Condition for Maximum Efficiency (Impulse):** $u \approx v_1/2$ (for simple impulse stage).
*   **Condition for Maximum Efficiency (Reaction):** $u \approx v_1$ (for symmetrical/50% reaction stage).
*   **Degree of Reaction:** Defines the distribution of pressure drop and enthalpy drop between fixed and moving blades.

---

### 7. Practice Questions and Exercises

**Question 1:**
Differentiate between impulse and reaction turbines. Draw and explain the velocity diagram for a single-stage impulse turbine. (CO1, K2)

**Answer Outline:**
*   **Impulse Turbine:** Define key features (pressure drop in nozzles, no drop in blades, impulse force dominant).
*   **Reaction Turbine:** Define key features (pressure drop in both sets of blades, reaction force significant).
*   **Velocity Diagram (Impulse):**
    *   Draw the vectors: blade velocity $u$, absolute velocity $v_1$, relative velocity $v_{r1}$, relative velocity $v_{r2}$, absolute velocity $v_2$.
    *   Label angles: $\alpha$, $\beta_1$, $\beta_2$, $\alpha_2$.
    *   Explain the meaning of each vector and its relation to the blade and steam motion.

**Question 2:**
For a reaction turbine stage, the steam enters the moving blades with an absolute velocity of 200 m/s at an angle of 30° to the direction of motion. The blade speed is 150 m/s. If the relative velocity of steam leaving the blades is equal in magnitude to the relative velocity entering the blades, and the outlet relative velocity angle is 150° (measured from the direction of motion), calculate the whirl velocity at the inlet and outlet and the work done per unit mass of steam. (CO3, K3)

**Given:**
*   $v_1 = 200$ m/s
*   $\alpha = 30^\circ$
*   $u = 150$ m/s
*   $v_{r2} = v_{r1}$
*   $\beta_2 = 150^\circ$ (This angle is often given relative to the tangent or absolute direction of motion at outlet. Assuming it's measured from the direction of motion at outlet for the diagram construction, which would mean $\beta_2$ relative to blade tangent is negative). A more standard notation is $\beta_2$ for the angle of the blade outlet, typically measured from the tangent of the blade. Let's assume the question implies the outlet relative velocity $v_{r2}$ makes an angle of 150 degrees *with the direction of motion*. This is an unusual way to state it for a velocity diagram, typically $\beta_2$ is the blade angle at outlet. Let's assume the outlet angle from the tangent of the blade is $\beta_2'$ and the angle of $v_{r2}$ relative to the direction of motion is $180 - \beta_2'$. Let's rework based on standard diagram conventions.

Let's assume $\beta_1$ and $\beta_2$ are blade angles relative to the direction of motion, and for symmetric blades, the angle of $v_{r1}$ and $v_{r2}$ with the tangent are equal.
If $\beta_1$ is the angle of $v_{r1}$ with the direction of motion, and $v_{r2}$ is at angle $\beta_2$ with the direction of motion from the outlet.

Let's re-interpret the question for a standard velocity triangle:
*   $v_1 = 200$ m/s, $\alpha = 30^\circ$
*   $u = 150$ m/s
*   $v_{r1} = v_{r2}$ (Symmetrical blades, no friction)

**Calculations:**

1.  **Construct Inlet Velocity Triangle:**
    *   Draw $OA$ representing $u$ (150 m/s) horizontally.
    *   Draw $AB$ representing $v_1$ (200 m/s) at $\alpha = 30^\circ$ from the horizontal.
    *   $OB$ is $v_{r1}$.
    *   $v_{w1}$ is the horizontal component of $v_1$. $v_{w1} = v_1 \cos \alpha = 200 \cos 30^\circ = 200 \times 0.866 = 173.2$ m/s.
    *   $v_{f1}$ is the vertical component of $v_1$. $v_{f1} = v_1 \sin \alpha = 200 \sin 30^\circ = 200 \times 0.5 = 100$ m/s.
    *   $v_{r1} = \sqrt{v_1^2 + u^2 - 2 v_1 u \cos \alpha}$ is incorrect. It should be from the triangle $OAB$. $v_{r1} = OB$. Using the cosine rule on $\triangle OAB$, $v_{r1}^2 = u^2 + v_1^2 - 2 u v_1 \cos \alpha$ is incorrect.
    *   Correct approach: From the velocity triangle $OAB$, where $O$ is origin, $A$ is end of $u$, $B$ is end of $v_1$. $OA = u$, $OB = v_1$ (not correct vector representation).
    *   Correct vector: $\vec{v}_1 = \vec{v}_{r1} + \vec{u}$. $\vec{v}_{r1} = \vec{v}_1 - \vec{u}$.
    *   In the diagram, $u$ is horizontal $OA$. $v_1$ is $AB$. $v_{r1}$ is $OB$.
    *   $v_{w1}$ is the horizontal component of $v_1$ from origin $O$. So $v_{w1} = v_1 \cos \alpha = 173.2$ m/s.
    *   The axial component of $v_1$ is $v_{f1} = v_1 \sin \alpha = 100$ m/s.
    *   $v_{r1}^2 = (u - v_1 \cos \alpha)^2 + (v_1 \sin \alpha)^2$.
        $v_{r1}^2 = (150 - 173.2)^2 + (100)^2 = (-23.2)^2 + 10000 = 538.24 + 10000 = 10538.24$
        $v_{r1} = \sqrt{10538.24} \approx 102.65$ m/s.

2.  **Calculate Outlet Conditions:**
    *   Since $v_{r1} = v_{r2}$, then $v_{r2} = 102.65$ m/s.
    *   To find $v_{w2}$, we need the outlet velocity triangle. $\vec{v}_2 = \vec{u} + \vec{v}_{r2}$.
    *   We are given that the outlet relative velocity angle is 150° *from the direction of motion*. This is unusual. Let's assume it means $\beta_2 = 150^\circ$ as the blade angle, meaning $v_{r2}$ is at angle $180-150 = 30^\circ$ to the backward direction. If it's a standard symmetrical blade, the angle of $v_{r2}$ with the backward tangent is equal to the angle of $v_{r1}$ with the forward tangent.

    Let's use the standard symmetric blade condition: $v_{r1} = v_{r2}$ and the outlet blade angle $\beta_2$ is such that the steam leaves axially (zero whirl $v_{w2}$). This is for maximum efficiency in a reaction turbine *if* $\alpha = 90^\circ$.
    If the question implies $v_{r2}$ is at $150^\circ$ to the direction of motion:
    *   $v_{w2}$ is the component of $v_2$ along the direction of $u$.
    *   $v_{f2}$ is the component of $v_2$ perpendicular to $u$.
    *   We need the angle of $v_{r2}$ with the horizontal (direction of $u$). Let's assume the "150° from the direction of motion" means the angle of $v_{r2}$ with the positive x-axis (direction of motion) is $180^\circ - \phi_{r2}$ or some such convention.

    **Let's assume a standard symmetrical reaction turbine with $u=v_1$ for maximum efficiency.** The question gives $u=150, v_1=200$. This is not the condition for maximum efficiency.

    Let's use the given values directly to calculate work done, assuming the blade angles are set for this.
    We have $v_{r1} = 102.65$ m/s. So $v_{r2} = 102.65$ m/s.
    Let's assume the angle of $v_{r2}$ with the horizontal (blade direction) is $\beta_2$.
    If $v_{r2}$ makes an angle of $150^\circ$ with the direction of motion: this means $v_{r2}$ is directed backward and upwards relative to motion.
    Let $\theta_{r2}$ be the angle of $v_{r2}$ with the horizontal (direction of motion). $\theta_{r2} = 150^\circ$.
    *   $v_{r2} = 102.65$ m/s.
    *   $v_{w2}$ (tangential component of $v_2$) = $u + v_{r2} \cos \theta_{r2}$ (if $\theta_{r2}$ is angle from tangent, and is directed backward)
    *   Let's use the outlet velocity triangle: $\vec{v}_2 = \vec{u} + \vec{v}_{r2}$.
    *   $u$ is along x-axis. $OA$ is $u$. $AC$ is $v_{r2}$. $OC$ is $v_2$.
    *   If $\theta_{r2} = 150^\circ$ (angle of $v_{r2}$ from positive x-axis):
        $v_{r2x} = v_{r2} \cos 150^\circ = 102.65 \times (-0.866) = -88.91$ m/s.
        $v_{r2y} = v_{r2} \sin 150^\circ = 102.65 \times (0.5) = 51.33$ m/s.
    *   $v_2 = \sqrt{(u + v_{r2x})^2 + (v_{r2y})^2}$ (Incorrect, should be vector addition from same origin)

    **Correct outlet velocity triangle construction:**
    *   From point $A$ (end of $u$), draw $AC$ representing $v_{r2}$ at angle $\theta_{r2} = 150^\circ$ from the horizontal.
    *   $v_{w2} = v_{w1} + (\text{component of } v_{r2} \text{ in direction of } u)$
    *   $v_{w2}$ in the context of work done formula $u(v_{w1}+v_{w2})$ is the tangential component of the *absolute* exit velocity $v_2$.
    *   From the outlet velocity triangle: $v_{w2}$ is the component of $v_2$ along the direction of $u$.
    *   $v_{w2} = u + v_{r2} \cos(180^\circ - \beta_2')$ where $\beta_2'$ is blade exit angle.

    **Let's use the components of velocities:**
    $v_{w1}$ (tangential component of $v_1$) = $v_1 \cos \alpha = 200 \cos 30^\circ = 173.2$ m/s.
    $v_{f1}$ (axial component of $v_1$) = $v_1 \sin \alpha = 200 \sin 30^\circ = 100$ m/s.

    In the outlet triangle, $\vec{v}_2 = \vec{u} + \vec{v}_{r2}$.
    Let $\vec{u}$ be in the x-direction. $\vec{v}_{r2}$ at $150^\circ$ from x-axis.
    $\vec{v}_{r2} = v_{r2} \cos 150^\circ \hat{i} + v_{r2} \sin 150^\circ \hat{j}$
    $\vec{v}_{r2} = 102.65 \times (-0.866) \hat{i} + 102.65 \times (0.5) \hat{j}$
    $\vec{v}_{r2} = -88.91 \hat{i} + 51.33 \hat{j}$
    $\vec{u} = 150 \hat{i}$
    $\vec{v}_2 = (150 - 88.91) \hat{i} + 51.33 \hat{j} = 61.09 \hat{i} + 51.33 \hat{j}$
    $v_{w2}$ (tangential component of $v_2$) = $61.09$ m/s.
    $v_{f2}$ (axial component of $v_2$) = $51.33$ m/s.

3.  **Work Done per unit mass:**
    $W = u (v_{w1} + v_{w2}) = 150 (173.2 + 61.09) = 150 \times 234.29 = 35143.5$ J/kg.

**Answer:**
*   Whirl velocity at inlet ($v_{w1}$) = **173.2 m/s**
*   Whirl velocity at outlet ($v_{w2}$) = **61.09 m/s**
*   Work done per unit mass of steam = **35143.5 J/kg**

*(Self-correction: The interpretation of the angle for $v_{r2}$ is crucial and can lead to errors. Standard practice in textbooks usually provides blade angles.)*

**Question 3:**
What is the condition for maximum efficiency for a reaction turbine stage? Explain why this condition is important. (CO3, K2)

**Answer:**
The condition for maximum efficiency for a symmetrical (50%) reaction turbine stage is when the blade speed ($u$) is equal to the absolute velocity of steam entering the moving blades ($v_1$), i.e., **$u = v_1$**.

This condition is important because it ensures that the steam leaves the moving blades with minimum kinetic energy, thereby maximizing the transfer of energy from the steam to the blades. When $u = v_1$ and the blades are designed appropriately (for symmetrical reaction turbines, this often implies $v_{r1} = v_{r2}$ and specific blade angles), the absolute velocity of the steam leaving the moving blades ($v_2$) becomes purely axial (zero whirl component $v_{w2}$). This means all the tangential momentum imparted to the rotor comes from the initial whirl of the steam entering the blades ($v_{w1}$), and the blade speed is perfectly matched to this whirl to extract maximum work. Deviating from this condition leads to either too much steam velocity remaining at the exit (low efficiency) or excessive blade speed relative to steam velocity, also reducing efficiency.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. References

*   **Power Plant Technology by M. M. El Wakil (McGraw Hill Education, 1, 2017):** Chapters on steam turbines will provide detailed explanations of impulse and reaction types, including velocity diagram constructions and efficiency considerations. (Refer to sections on turbine theory and blade aerodynamics).
*   **Power Plant Engineering by P. K. Nag (McGraw Hill Education, 4, 2017):** This book offers a comprehensive treatment of steam turbines, covering their classification, working principles, velocity triangles, and efficiency analysis, including the conditions for maximum work output. (Refer to chapters on steam turbines).
*   **Power Plant Engineering by G. R. Nagpal, S. C. Sharma (KHANNA Publishers, 16, 2012):** This reference will likely cover the fundamentals of turbine design, blade profiles, and the derivation of velocity diagrams.
*   **Power Plant Engineering by Manoj Kumar Gupta (PHI Learning Pvt. Ltd, 1, 2012):** Provides practical insights into turbine performance, efficiency calculations, and the impact of design parameters.

---

This concludes the study notes for Impulse and Reaction Turbines, Velocity Diagrams, and Conditions for Maximum Efficiency. Understanding these concepts is fundamental for analysing and designing efficient steam turbine stages, directly contributing to **CO1** and **CO3**.