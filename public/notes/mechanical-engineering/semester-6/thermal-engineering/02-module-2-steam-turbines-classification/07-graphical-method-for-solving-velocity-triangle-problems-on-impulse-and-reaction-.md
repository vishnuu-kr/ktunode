---
title: "Graphical Method for
solving velocity triangle problems on impulse and reaction turbines."
subject: "THERMAL ENGINEERING"
module: "Module 2: Steam turbines : Classification"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463991"
status: "completed"
scrapedAt: "2026-05-20T18:08:42.856Z"
---
# THERMAL ENGINEERING - Module 2: Steam Turbines: Classification

## Topic: Graphical Method for Solving Velocity Triangle Problems on Impulse and Reaction Turbines

### Learning Outcomes:

*   Understand the concept of velocity triangles in steam turbines.
*   Construct and interpret velocity triangles for both impulse and reaction turbine stages.
*   Apply graphical methods to determine key performance parameters from velocity triangles.
*   Analyze the impact of blade angles and steam velocities on turbine work and efficiency.
*   Differentiate between velocity triangles for impulse and reaction turbine stages.

### Course Outcomes Alignment:

*   **CO1 (K4):** While this topic focuses on the mechanical analysis of turbines, understanding velocity triangles is foundational to calculating work output, which directly relates to the thermal efficiency of steam power cycles.
*   **CO2 (K3):** This topic is central to analyzing the performance of steam turbines. By solving velocity triangles, we can determine specific work done, blade force, and ultimately, turbine efficiency. This enables identification of methods to improve efficiency through blade design and steam conditions.
*   **CO3 (K3):** Although focused on steam turbines, the fundamental principles of velocity triangles and their graphical solution are analogous to analyzing rotating machinery in general, including IC engines (though the application is different).
*   **CO4 (K2):** Not directly covered by this topic.
*   **CO5 (K6):** Practical application of these graphical methods in simulation or testing would fall under this outcome.

---

### 1. Introduction to Velocity Triangles in Steam Turbines

Velocity triangles are graphical representations of the velocities of steam and the turbine blades at the inlet and outlet of a blade passage. They are essential tools for analyzing the forces acting on the blades and calculating the work done by the steam.

**Key Concepts:**

*   **Absolute Velocity ($V$):** The velocity of the steam relative to a stationary observer.
*   **Blade Velocity ($U$):** The tangential velocity of the turbine blades. This is assumed to be constant across a given stage.
*   **Relative Velocity ($V_r$):** The velocity of the steam relative to the moving blades.

**Why Velocity Triangles are Important:**

*   **Force Calculation:** The force exerted by the steam on the blades is directly related to the change in momentum of the steam. Velocity triangles help determine the change in momentum.
*   **Work Done:** The work done per unit mass of steam is determined by the tangential component of the force acting on the blades and the blade velocity.
*   **Efficiency Analysis:** By understanding the energy transfer from steam to blades, we can analyze and improve turbine efficiency.

---

### 2. Velocity Triangles for Impulse Turbines

In an **impulse turbine**, the entire pressure drop (and hence the kinetic energy increase) occurs in the nozzle. The steam then impinges on the moving blades without any further pressure change within the blades themselves.

**Key Features of Impulse Turbine Velocity Triangles:**

*   **Nozzle:** Converts thermal energy into kinetic energy.
*   **Moving Blades:** Redirect the steam flow to impart momentum change and extract work.

**Constructing the Velocity Triangle:**

We'll use a standard convention for angles:

*   **Inlet:**
    *   $V_1$: Absolute velocity of steam entering the moving blade.
    *   $U_1$: Blade velocity at the inlet (tangential).
    *   $V_{r1}$: Relative velocity of steam entering the moving blade.
    *   $\alpha_1$: Nozzle angle (angle of absolute velocity $V_1$ with the direction of blade motion).
    *   $\beta_1$: Blade inlet angle (angle of relative velocity $V_{r1}$ with the direction of blade motion).
*   **Outlet:**
    *   $V_2$: Absolute velocity of steam leaving the moving blade.
    *   $U_2$: Blade velocity at the outlet (usually $U_1$ for a single stage, but can be different for multiple stages or axial flow turbines).
    *   $V_{r2}$: Relative velocity of steam leaving the moving blade.
    *   $\beta_2$: Blade outlet angle (angle of relative velocity $V_{r2}$ with the direction of blade motion).
    *   $\alpha_2$: Outlet angle of the absolute velocity $V_2$ with the direction of blade motion.

**Graphical Method Steps:**

1.  **Draw the Blade Velocity Vector:** Draw a line representing the blade velocity ($U$). Typically, this is drawn horizontally.
2.  **Draw the Steam Inlet Velocity Vector:** At the point where the steam enters the blade, draw the absolute velocity of steam ($V_1$) at the nozzle angle ($\alpha_1$) with respect to the blade velocity line.
3.  **Determine Relative Velocity at Inlet:** From the tail of the $V_1$ vector, draw the blade velocity vector ($U$) such that its head meets the head of the $V_1$ vector. The vector connecting the tail of $U$ to the tail of $V_1$ (reversed $U$) is the relative velocity $V_{r1}$ at the inlet. The angle this vector makes with the direction of blade motion is $\beta_1$.
4.  **Draw the Steam Outlet Velocity Vector:** At the point where the steam leaves the blade, draw the blade velocity vector ($U$) again, parallel to the inlet $U$.
5.  **Determine Relative Velocity at Outlet:** From the head of the $U$ vector, draw the relative velocity vector $V_{r2}$ at the blade outlet angle ($\beta_2$).
6.  **Determine Absolute Velocity at Outlet:** The vector closing the triangle, from the tail of $V_{r2}$ to the head of $U$, is the absolute velocity of steam leaving the blade ($V_2$). The angle this vector makes with the direction of blade motion is $\alpha_2$.

**Important Considerations for Impulse Turbines:**

*   **Nozzle Angle ($\alpha_1$):** Usually around 15-25 degrees.
*   **Blade Inlet Angle ($\beta_1$):** Typically around 30-45 degrees.
*   **Blade Outlet Angle ($\beta_2$):** Typically around 30-45 degrees, but symmetrical blades have $\beta_1 = \beta_2$. However, in practice, blades are often skewed to reduce shock losses.
*   **Dryness Fraction:** The velocity of steam from the nozzle depends on the enthalpy drop and is influenced by the dryness fraction of the steam.

**Calculations from Velocity Triangles:**

*   **Blade Force ($F_b$):**  $F_b = m \times (V_{r1} \cos \beta_1 - V_{r2} \cos \beta_2)$, where $m$ is the mass flow rate. This is the force in the direction of motion.
*   **Work Done per Unit Mass ($W$):** $W = U \times (\text{tangential component of } V_{r1} \text{ + tangential component of } V_{r2})$
    *   $W = U (V_{r1} \sin \beta_1 + V_{r2} \sin \beta_2)$ if angles are measured from the blade edge.
    *   Alternatively, $W = U (V_{w1} + V_{w2})$, where $V_{w1}$ and $V_{w2}$ are the whirl components of absolute velocity at inlet and outlet respectively. From the velocity triangles, $V_{w1} = V_1 \cos \alpha_1$ and $V_{w2} = V_2 \cos \alpha_2$.
*   **Axial Thrust ($F_a$):** $F_a = m \times (V_{a1} - V_{a2})$, where $V_{a1}$ and $V_{a2}$ are the axial components of absolute velocities.

**Example (Impulse Turbine):**

In a simple impulse turbine stage, steam enters a moving blade with an absolute velocity of 300 m/s at a nozzle angle of 15°. The blade speed is 120 m/s. The relative velocity leaving the blade is 80% of the relative velocity entering the blade, and it leaves at an angle of 30° to the direction of motion.

**Solution Steps (Graphical):**

1.  **Draw Blade Velocity ($U$):** Draw a horizontal line representing $U = 120$ m/s.
2.  **Draw Inlet Absolute Velocity ($V_1$):** From a point (say, origin O), draw a line at 15° to the horizontal, representing $V_1 = 300$ m/s. Let the head of this line be P.
3.  **Construct Inlet Velocity Triangle:** From P, draw a line parallel to $U$ (in the same direction) of length 120 m/s. Let its head be Q. The vector OQ represents the relative velocity $V_{r1}$. Measure its magnitude and angle $\beta_1$.
    *   Using Sine Rule on triangle OPQ: $\frac{V_1}{\sin \angle OQP} = \frac{U}{\sin \angle POQ} = \frac{V_{r1}}{\sin \angle OPQ}$
    *   $\angle POQ = 180^\circ - 15^\circ = 165^\circ$ (this is incorrect, it's simpler than this).
    *   Let's re-think the construction:
        *   Draw $U$ horizontally (length 120).
        *   From the head of $U$, draw $V_1$ at 15° to the horizontal (length 300).
        *   The vector from the tail of $U$ to the head of $V_1$ is $V_{r1}$.
        *   Alternatively, draw $U$ horizontally. From the tail, draw $V_1$ at 15°. From the head of $V_1$, draw a line representing $-U$ (opposite direction). The vector from the tail of $V_1$ to the head of $-U$ is $V_{r1}$.
    *   Let's use the standard method:
        *   Draw $U$ (length 120).
        *   At the inlet, the steam velocity is $V_1$. We need $V_{r1}$. The relation is $\vec{V_1} = \vec{U} + \vec{V}_{r1}$. Therefore, $\vec{V}_{r1} = \vec{V_1} - \vec{U}$.
        *   Draw $V_1$ (length 300) at $\alpha_1 = 15^\circ$.
        *   From the head of $V_1$, draw $-U$ (length 120) parallel to $U$ but in the opposite direction.
        *   The vector from the tail of $V_1$ to the head of $-U$ is $V_{r1}$.
        *   The angle this vector makes with $U$ is $\beta_1$.
        *   *Practical construction:* Draw $U$ horizontally. At the inlet point, draw $V_1$ at $15^\circ$. From the point where $V_1$ starts (tail), draw $V_{r1}$ at angle $\beta_1$. From the head of $V_{r1}$, draw $U$ (parallel to the initial $U$). The head of $U$ should coincide with the head of $V_1$.
        *   Let's stick to the most common convention:
            *   Draw $U$ horizontally (length 120).
            *   From the point representing the inlet to the blade, draw $V_1$ (length 300) at $15^\circ$ to the horizontal.
            *   From the head of $V_1$, draw $U$ reversed (length 120) parallel to the original $U$.
            *   The vector from the tail of $V_1$ to the head of reversed $U$ is $V_{r1}$.
            *   Measure the angle $\beta_1$ and magnitude of $V_{r1}$.
            *   Let's use the law of cosines: $V_{r1}^2 = U^2 + V_1^2 - 2UV_1 \cos(180^\circ - \alpha_1)$
            *   $V_{r1}^2 = 120^2 + 300^2 - 2(120)(300) \cos(165^\circ)$
            *   $\cos(165^\circ) = \cos(180-15) = -\cos(15^\circ) \approx -0.9659$
            *   $V_{r1}^2 = 14400 + 90000 - 72000 (-0.9659) = 104400 + 69544.8 = 173944.8$
            *   $V_{r1} = \sqrt{173944.8} \approx 417.06$ m/s.
            *   Using law of sines to find $\beta_1$: $\frac{V_1}{\sin \beta_1} = \frac{V_{r1}}{\sin(180-\alpha_1)}$ => $\frac{300}{\sin \beta_1} = \frac{417.06}{\sin(165^\circ)}$
            *   $\sin \beta_1 = \frac{300 \sin(165^\circ)}{417.06} = \frac{300 \times 0.2588}{417.06} \approx 0.1855$
            *   $\beta_1 = \arcsin(0.1855) \approx 10.68^\circ$. This seems too small for a typical blade angle. Let's check the diagram convention.

    *   **Revisiting Velocity Triangle Construction Convention:**
        *   The most common convention is to draw the **blade velocity ($U$) horizontally**.
        *   Then, the **absolute velocity ($V_1$) is drawn from the same origin as $U$ at the nozzle angle $\alpha_1$**.
        *   The **relative velocity ($V_{r1}$) is the vector connecting the head of $U$ to the head of $V_1$**. This is $V_{r1} = V_1 - U$. This is incorrect vectorially.
        *   Correct vector relation: $\vec{V_1} = \vec{U} + \vec{V}_{r1}$. So $\vec{V}_{r1} = \vec{V_1} - \vec{U}$.
        *   **Standard Construction:**
            1.  Draw $U$ horizontally (length 120).
            2.  From the **tail** of $U$, draw $V_1$ (length 300) at $\alpha_1 = 15^\circ$ to the horizontal.
            3.  The vector $V_{r1}$ is from the head of $U$ to the head of $V_1$.
            4.  Measure $V_{r1}$ and $\beta_1$ (angle $V_{r1}$ makes with the direction of $U$).
            *   Using Law of Cosines on triangle formed by $U$, $V_1$ and $V_{r1}$:
            *   $V_{r1}^2 = U^2 + V_1^2 - 2 U V_1 \cos \alpha_1$ (if $V_1$ and $U$ are drawn tail to tail)
            *   Let's draw it with $U$ and $V_1$ starting from the same point:
                *   Draw $U$ (length 120) horizontally.
                *   From the same point, draw $V_1$ (length 300) at $15^\circ$.
                *   $V_{r1}$ is the vector $V_1 - U$. This means drawing $-U$ from the head of $V_1$ and connecting the tail of $V_1$ to the head of $-U$.
                *   Let's use a right-angled triangle approach for simplicity in calculation.
                *   **Component Method:**
                    *   $V_{w1}$ (Whirl component of $V_1$) = $V_1 \cos \alpha_1 = 300 \cos 15^\circ = 300 \times 0.9659 = 289.77$ m/s.
                    *   $V_{a1}$ (Axial component of $V_1$) = $V_1 \sin \alpha_1 = 300 \sin 15^\circ = 300 \times 0.2588 = 77.64$ m/s.
                    *   Relative velocity components:
                        *   $V_{r1x} = V_{w1} - U = 289.77 - 120 = 169.77$ m/s (This is the tangential component of $V_{r1}$).
                        *   $V_{r1y} = V_{a1} = 77.64$ m/s (This is the axial component of $V_{r1}$).
                    *   $V_{r1} = \sqrt{V_{r1x}^2 + V_{r1y}^2} = \sqrt{169.77^2 + 77.64^2} = \sqrt{28821.65 + 6027.97} = \sqrt{34849.62} \approx 186.68$ m/s.
                    *   $\tan \beta_1 = \frac{V_{r1y}}{V_{r1x}} = \frac{77.64}{169.77} \approx 0.4573$.
                    *   $\beta_1 = \arctan(0.4573) \approx 24.59^\circ$. This looks more reasonable.

4.  **Calculate Outlet Conditions:**
    *   Given $V_{r2} = 0.8 \times V_{r1} = 0.8 \times 186.68 = 149.34$ m/s.
    *   $\beta_2 = 30^\circ$.
    *   From the outlet velocity triangle: $\vec{V_2} = \vec{U} + \vec{V}_{r2}$.
    *   $V_{w2}$ (Whirl component of $V_2$) = $V_{r2} \cos \beta_2 = 149.34 \cos 30^\circ = 149.34 \times 0.866 = 129.32$ m/s.
    *   $V_{a2}$ (Axial component of $V_2$) = $V_{r2} \sin \beta_2 = 149.34 \sin 30^\circ = 149.34 \times 0.5 = 74.67$ m/s.
    *   $V_2 = \sqrt{V_{w2}^2 + V_{a2}^2} = \sqrt{129.32^2 + 74.67^2} = \sqrt{16723.78 + 5575.61} = \sqrt{22299.39} \approx 149.33$ m/s.
    *   $\alpha_2$ can be found from $\tan \alpha_2 = \frac{V_{a2}}{V_{w2}} = \frac{74.67}{129.32} \approx 0.5774$, so $\alpha_2 \approx 30^\circ$.

5.  **Calculate Work Done per Unit Mass:**
    *   $W = U \times (V_{w1} + V_{w2})$
    *   $W = 120 \times (289.77 + 129.32) = 120 \times 419.09 = 50290.8$ J/kg or 50.29 kJ/kg.

**Practice Question 1 (Impulse Turbine):**

In a simple impulse turbine, steam enters the blade at 400 m/s with a nozzle angle of 20°. The blade speed is 180 m/s. The relative velocity of steam leaving the blade is 120 m/s and leaves at an angle of 30° to the direction of motion. Assuming no friction, construct the velocity triangles and calculate:
a) The work done per kg of steam.
b) The axial thrust per kg of steam.

**Answer to Practice Question 1:**

*   **Given:** $V_1 = 400$ m/s, $\alpha_1 = 20^\circ$, $U = 180$ m/s, $V_{r2} = 120$ m/s, $\beta_2 = 30^\circ$.

*   **Inlet Velocity Triangle:**
    *   Using component method:
        *   $V_{w1} = V_1 \cos \alpha_1 = 400 \cos 20^\circ = 400 \times 0.9397 = 375.88$ m/s.
        *   $V_{a1} = V_1 \sin \alpha_1 = 400 \sin 20^\circ = 400 \times 0.3420 = 136.80$ m/s.
        *   $V_{r1x} = V_{w1} - U = 375.88 - 180 = 195.88$ m/s.
        *   $V_{r1y} = V_{a1} = 136.80$ m/s.
        *   $V_{r1} = \sqrt{195.88^2 + 136.80^2} = \sqrt{38369.34 + 18714.24} = \sqrt{57083.58} \approx 238.92$ m/s.
        *   $\tan \beta_1 = \frac{V_{r1y}}{V_{r1x}} = \frac{136.80}{195.88} \approx 0.6984$.
        *   $\beta_1 = \arctan(0.6984) \approx 34.93^\circ$.

*   **Outlet Velocity Triangle:**
    *   $V_{w2} = V_{r2} \cos \beta_2 = 120 \cos 30^\circ = 120 \times 0.866 = 103.92$ m/s.
    *   $V_{a2} = V_{r2} \sin \beta_2 = 120 \sin 30^\circ = 120 \times 0.5 = 60.00$ m/s.

*   **Calculations:**
    *   a) Work done per kg of steam:
        *   $W = U (V_{w1} + V_{w2}) = 180 \times (375.88 + 103.92) = 180 \times 479.80 = 86364$ J/kg or 86.36 kJ/kg.
    *   b) Axial thrust per kg of steam:
        *   $F_a = m (V_{a1} - V_{a2})$. For 1 kg, $F_a = V_{a1} - V_{a2} = 136.80 - 60.00 = 76.80$ N/kg.

---

### 3. Velocity Triangles for Reaction Turbines

In a **reaction turbine**, the pressure drop and the corresponding increase in kinetic energy occur in both the fixed (nozzle) and moving blades. This means there is a pressure drop across the moving blades themselves, which contributes to the work done.

**Types of Reaction Turbines:**

*   **0% Reaction (Pure Impulse):** All pressure drop in nozzles.
*   **50% Reaction (Parsons Turbine):** Equal pressure drop in fixed and moving blades.
*   **100% Reaction (Pure Reaction):** All kinetic energy from nozzle is utilized, and pressure drop occurs solely in moving blades. (Rarely achieved in practice).

**Key Features of Reaction Turbine Velocity Triangles:**

*   **Fixed Blades (Nozzles):** Accelerate steam due to pressure drop.
*   **Moving Blades:** Further accelerate steam due to their own shape and angle, while also extracting work.

**Construction of Velocity Triangles for Reaction Stages:**

A reaction turbine stage consists of a set of fixed blades followed by a set of moving blades. We need to consider velocity triangles for both.

**Fixed Blades (Nozzle):**

*   $V_1$: Absolute velocity entering the moving blade (from the nozzle).
*   $\alpha_1$: Nozzle angle.
*   $V_{f1}$: Velocity of steam leaving the fixed blades (entering the moving blades). This is the same as $V_1$.

**Moving Blades:**

*   **Inlet to Moving Blade:**
    *   $V_1$: Absolute velocity of steam entering the moving blade.
    *   $U$: Blade velocity.
    *   $V_{r1}$: Relative velocity entering the moving blade.
    *   $\alpha_1$: Angle of absolute velocity $V_1$ with the direction of blade motion.
    *   $\beta_1$: Blade inlet angle.
*   **Outlet from Moving Blade:**
    *   $V_2$: Absolute velocity of steam leaving the moving blade.
    *   $U$: Blade velocity.
    *   $V_{r2}$: Relative velocity leaving the moving blade.
    *   $\alpha_2$: Outlet angle of absolute velocity $V_2$.
    *   $\beta_2$: Blade outlet angle.

**Important Note:** In a reaction turbine, the steam velocities can change significantly across the moving blades due to the pressure drop.

**Velocity Triangle for Moving Blades (Similar to Impulse, but $V_2$ can be different from $V_1$ even if U is constant):**

The construction process for the moving blade velocity triangle is the same as for impulse turbines. The difference lies in the thermodynamic conditions that lead to the steam velocities.

**50% Reaction Turbine:**

In a 50% reaction turbine, the velocity diagrams for the inlet and outlet of the moving blades are often assumed to be symmetrical when the inlet and outlet blade angles are equal ($\beta_1 = \beta_2$). This means $V_{r1} = V_{r2}$.

If $V_{r1} = V_{r2}$, then the outlet velocity triangle for the moving blades will be a mirror image of the inlet triangle. This implies:
*   $V_{w1}$ (tangential component of $V_1$) and $V_{w2}$ (tangential component of $V_2$) will be equal in magnitude but opposite in direction (if $\beta_1 = \beta_2$ and $V_{r1}=V_{r2}$). This is not generally true.

**Let's consider the correct relationships for a 50% reaction turbine:**

*   The enthalpy drop in the fixed blades is equal to the enthalpy drop in the moving blades.
*   This means the kinetic energy gained in the fixed blades is equal to the kinetic energy gained in the moving blades.
*   If the initial velocity entering the fixed blades is $V_0$ and it leaves with velocity $V_1$ (entering moving blades): $\frac{1}{2}V_1^2 - \frac{1}{2}V_0^2 = \Delta h_{fixed}$.
*   If steam leaves the moving blades with velocity $V_2$: $\frac{1}{2}V_2^2 - \frac{1}{2}V_1^2 = \Delta h_{moving}$.
*   For 50% reaction, $\Delta h_{fixed} = \Delta h_{moving}$.
*   This leads to a relationship between $V_0$, $V_1$, and $V_2$. A common simplification for 50% reaction is that the exit velocity from the moving blades ($V_2$) is equal to the velocity entering the moving blades ($V_1$). This is not always true but is a good approximation for analysis.

**If $V_2 = V_1$ in a reaction turbine:**

*   This means the magnitude of the absolute velocity of steam remains constant across the moving blades.
*   The work done per unit mass of steam is $W = U (V_{w1} - V_{w2})$ (for impulse) or $W = U (V_{w1} + V_{w2})$ (for reaction, depending on signs of whirl).
*   For reaction, $\vec{V_2} = \vec{U} + \vec{V}_{r2}$.
*   If $V_1 = V_2$, then the inlet and outlet absolute velocity triangles have the same length for $V_1$ and $V_2$.

**Graphical Method for Reaction Turbine Stages:**

Consider a stage comprising fixed and moving blades.

**Step 1: Velocity Triangle for Fixed Blades (Nozzle):**

*   Steam enters the fixed blades with some velocity (often assumed negligible or relatively low).
*   It exits with velocity $V_1$ at angle $\alpha_1$. This is the absolute velocity entering the moving blades.
*   The components are $V_{w1} = V_1 \cos \alpha_1$ and $V_{a1} = V_1 \sin \alpha_1$.

**Step 2: Velocity Triangle for Moving Blades (Inlet):**

*   This is constructed exactly as in the impulse turbine, using $V_1$, $\alpha_1$, and $U$ to find $V_{r1}$ and $\beta_1$.

**Step 3: Velocity Triangle for Moving Blades (Outlet):**

*   We are given $V_{r2}$ and $\beta_2$.
*   We can construct the outlet triangle by drawing $U$ (parallel to the inlet $U$) and $V_{r2}$ at angle $\beta_2$.
*   The absolute velocity $V_2$ is the closing vector from the tail of $V_{r2}$ to the head of $U$.
*   Components $V_{w2} = V_2 \cos \alpha_2$ and $V_{a2} = V_2 \sin \alpha_2$.

**Key Calculation for Reaction Turbine:**

*   **Work Done per Unit Mass ($W$):**
    *   $W = U \times (V_{w1} + V_{w2})$. Note that $V_{w1}$ and $V_{w2}$ are the whirl components of the absolute velocities $V_1$ and $V_2$ respectively, relative to the direction of blade motion.
    *   Using the component method from velocity triangles:
        *   $V_{w1} = V_1 \cos \alpha_1$
        *   $V_{w2} = V_{r2} \cos \beta_2 - U$ (This is incorrect. $V_{w2}$ is the whirl component of $V_2$. $V_2 = U + V_{r2}$ vectorially.)
        *   Let's use the vector components:
            *   $\vec{V_1} = V_{w1} \hat{i} + V_{a1} \hat{j}$ (assuming $U$ is in $\hat{i}$ direction)
            *   $\vec{U} = U \hat{i}$
            *   $\vec{V}_{r1} = \vec{V_1} - \vec{U} = (V_{w1}-U)\hat{i} + V_{a1}\hat{j}$
            *   $\vec{V}_{r2} = V_{r2} \cos \beta_2 \hat{i} + V_{r2} \sin \beta_2 \hat{j}$ (assuming $\beta_2$ is measured from the direction of blade motion, and the axial component is positive)
            *   $\vec{V_2} = \vec{U} + \vec{V}_{r2} = U \hat{i} + (V_{r2} \cos \beta_2)\hat{i} + (V_{r2} \sin \beta_2)\hat{j}$
            *   $\vec{V_2} = (U + V_{r2} \cos \beta_2)\hat{i} + (V_{r2} \sin \beta_2)\hat{j}$
            *   So, $V_{w2} = U + V_{r2} \cos \beta_2$ and $V_{a2} = V_{r2} \sin \beta_2$.
            *   Work Done $W = U \times (V_{w1} + V_{w2})$
            *   $W = U \times (V_1 \cos \alpha_1 + U + V_{r2} \cos \beta_2)$. This formula is correct if $V_{w2}$ is defined properly.

*   **Alternative Work Calculation:**
    *   Work done = Change in kinetic energy of steam + Work done against friction + Work done on fluid by moving blades.
    *   A simpler and more direct way from velocity triangles:
    *   Work Done per unit mass ($W$) = $U \times$ change in whirl velocity of steam.
    *   Whirl velocity of steam entering moving blade = $V_{w1}$ (tangential component of $V_1$).
    *   Whirl velocity of steam leaving moving blade = $V_{w2}$ (tangential component of $V_2$).
    *   The sign convention is crucial here. If both $V_{w1}$ and $V_{w2}$ are in the direction of $U$, then $W = U (V_{w1} - V_{w2})$.
    *   However, if they are in opposite directions or one is against the direction of $U$, the signs need to be handled carefully.
    *   A robust formula for work done is: $W = U (\text{tangential component of } V_{r1} \text{ entering blade} + \text{tangential component of } V_{r2} \text{ leaving blade})$.
    *   Let's re-evaluate $V_{r1}$ and $V_{r2}$ components in the direction of $U$:
        *   Tangential component of $V_{r1}$ entering blade = $V_{r1} \cos \beta_1$. This is $V_{w1} - U$.
        *   Tangential component of $V_{r2}$ leaving blade = $V_{r2} \cos \beta_2$. This is $V_{w2} - U$.
    *   The work done by the moving blade on the steam is $U \times$ (change in momentum).
    *   The work done **by the steam on the blade** is what we need.
    *   From the $\vec{V}_{r1} = \vec{V_1} - \vec{U}$ and $\vec{V}_{r2} = \vec{V_2} - \vec{U}$, the work done per unit mass is $W = \frac{1}{2}(V_1^2 - V_2^2) + \frac{1}{2}(V_{r2}^2 - V_{r1}^2)$. This is from energy balance.
    *   From the velocity triangles, $W = U (V_{w1} + V_{w2})$ is often used for reaction turbines, where $V_{w1}$ and $V_{w2}$ are the whirl components of the absolute velocities $V_1$ and $V_2$ respectively, measured in the direction of blade motion.
        *   $V_{w1} = V_1 \cos \alpha_1$ (tangential component of $V_1$).
        *   $V_{w2} = V_2 \cos \alpha_2$ (tangential component of $V_2$).
        *   The formula $W = U (V_{w1} + V_{w2})$ is derived from $W = U (V_{w1} - V_{w2}')$, where $V_{w2}'$ is the whirl component of the absolute velocity leaving the blade in the opposite direction of $V_{w1}$. This implies the absolute velocity direction reverses.
        *   A more general formula: $W = U \times (\text{Change in Whirl Velocity})$. Let's carefully define whirl velocity.
        *   Whirl Velocity ($V_w$) is the component of absolute velocity parallel to the direction of blade motion ($U$).
        *   $V_{w1} = V_1 \cos \alpha_1$.
        *   $V_{w2} = V_2 \cos \alpha_2$.
        *   **Work done per unit mass = $U \times (V_{w1} + V_{w2})$ is correct for reaction turbines when $V_{w1}$ and $V_{w2}$ are whirl components.**

**Example (Reaction Turbine - 50% Reaction):**

In a 50% reaction turbine stage, steam enters the moving blades with an absolute velocity of 250 m/s at an angle of 20° to the direction of motion. The blade speed is 100 m/s. The relative velocity of steam leaving the moving blades is 150 m/s at an angle of 130° to the direction of motion (i.e., $\beta_2 = 180^\circ - 130^\circ = 50^\circ$ measured from the trailing edge in the forward direction).

**Solution Steps (Graphical):**

1.  **Inlet Velocity Triangle (Moving Blade):**
    *   Given: $V_1 = 250$ m/s, $\alpha_1 = 20^\circ$, $U = 100$ m/s.
    *   $V_{w1} = V_1 \cos \alpha_1 = 250 \cos 20^\circ = 250 \times 0.9397 = 234.92$ m/s.
    *   $V_{a1} = V_1 \sin \alpha_1 = 250 \sin 20^\circ = 250 \times 0.3420 = 85.50$ m/s.
    *   $V_{r1x} = V_{w1} - U = 234.92 - 100 = 134.92$ m/s.
    *   $V_{r1y} = V_{a1} = 85.50$ m/s.
    *   $V_{r1} = \sqrt{134.92^2 + 85.50^2} = \sqrt{18203.4 + 7310.25} = \sqrt{25513.65} \approx 159.73$ m/s.
    *   $\tan \beta_1 = \frac{V_{r1y}}{V_{r1x}} = \frac{85.50}{134.92} \approx 0.6337$.
    *   $\beta_1 = \arctan(0.6337) \approx 32.36^\circ$.

2.  **Outlet Velocity Triangle (Moving Blade):**
    *   Given: $V_{r2} = 150$ m/s, $\beta_2 = 50^\circ$.
    *   $V_{w2} = V_{r2} \cos \beta_2 = 150 \cos 50^\circ = 150 \times 0.6428 = 96.42$ m/s.
    *   $V_{a2} = V_{r2} \sin \beta_2 = 150 \sin 50^\circ = 150 \times 0.7660 = 114.90$ m/s.
    *   From $\vec{V_2} = \vec{U} + \vec{V}_{r2}$:
        *   $V_2 = \sqrt{(U + V_{r2} \cos \beta_2)^2 + (V_{r2} \sin \beta_2)^2}$
        *   $V_2 = \sqrt{(100 + 96.42)^2 + (114.90)^2} = \sqrt{(196.42)^2 + 114.90^2} = \sqrt{38581.5 + 13202.0} = \sqrt{51783.5} \approx 227.56$ m/s.
    *   $\alpha_2$ can be found using $\tan \alpha_2 = \frac{V_{a2}}{V_{w2}'}$, where $V_{w2}'$ is the whirl component of $V_2$.
    *   $V_{w2}' = U + V_{r2} \cos \beta_2 = 100 + 96.42 = 196.42$ m/s.
    *   $\tan \alpha_2 = \frac{114.90}{196.42} \approx 0.5850$.
    *   $\alpha_2 = \arctan(0.5850) \approx 30.33^\circ$.

3.  **Calculate Work Done per Unit Mass:**
    *   $W = U (V_{w1} + V_{w2}')$
    *   $W = 100 \times (234.92 + 196.42) = 100 \times 431.34 = 43134$ J/kg or 43.13 kJ/kg.

**Practice Question 2 (Reaction Turbine):**

In a reaction turbine stage, steam enters the moving blades with an absolute velocity of 300 m/s at an angle of 15° to the direction of motion. The blade speed is 150 m/s. The steam leaves the moving blades with a relative velocity of 100 m/s at an angle of 45° to the direction of motion. Construct the velocity triangles and calculate:
a) The work done per kg of steam.
b) The axial thrust per kg of steam.

**Answer to Practice Question 2:**

*   **Given:** $V_1 = 300$ m/s, $\alpha_1 = 15^\circ$, $U = 150$ m/s, $V_{r2} = 100$ m/s, $\beta_2 = 45^\circ$.

*   **Inlet Velocity Triangle (Moving Blade):**
    *   $V_{w1} = V_1 \cos \alpha_1 = 300 \cos 15^\circ = 300 \times 0.9659 = 289.77$ m/s.
    *   $V_{a1} = V_1 \sin \alpha_1 = 300 \sin 15^\circ = 300 \times 0.2588 = 77.64$ m/s.
    *   $V_{r1x} = V_{w1} - U = 289.77 - 150 = 139.77$ m/s.
    *   $V_{r1y} = V_{a1} = 77.64$ m/s.
    *   $V_{r1} = \sqrt{139.77^2 + 77.64^2} = \sqrt{19535.73 + 6027.97} = \sqrt{25563.7} \approx 159.89$ m/s.
    *   $\tan \beta_1 = \frac{V_{r1y}}{V_{r1x}} = \frac{77.64}{139.77} \approx 0.5555$.
    *   $\beta_1 = \arctan(0.5555) \approx 29.03^\circ$.

*   **Outlet Velocity Triangle (Moving Blade):**
    *   $V_{w2}' = U + V_{r2} \cos \beta_2 = 150 + 100 \cos 45^\circ = 150 + 100 \times 0.7071 = 150 + 70.71 = 220.71$ m/s.
    *   $V_{a2} = V_{r2} \sin \beta_2 = 100 \sin 45^\circ = 100 \times 0.7071 = 70.71$ m/s.
    *   $V_2 = \sqrt{(V_{w2}')^2 + V_{a2}^2} = \sqrt{220.71^2 + 70.71^2} = \sqrt{48713.1 + 5000.0} = \sqrt{53713.1} \approx 231.76$ m/s.
    *   $\alpha_2 = \arctan(\frac{V_{a2}}{V_{w2}'}) = \arctan(\frac{70.71}{220.71}) = \arctan(0.3204) \approx 17.76^\circ$.

*   **Calculations:**
    *   a) Work done per kg of steam:
        *   $W = U (V_{w1} + V_{w2}') = 150 \times (289.77 + 220.71) = 150 \times 510.48 = 76572$ J/kg or 76.57 kJ/kg.
    *   b) Axial thrust per kg of steam:
        *   $F_a = m (V_{a1} - V_{a2})$. For 1 kg, $F_a = V_{a1} - V_{a2} = 77.64 - 70.71 = 6.93$ N/kg.

---

### 4. Graphical Representation and Key Points

The graphical method is powerful because it allows for a direct visual understanding of the velocity relationships and their impact on performance.

**Key Points to Remember:**

*   **Consistency in Conventions:** Always maintain a consistent convention for angles ($\alpha$, $\beta$) and velocity directions.
*   **Vector Addition/Subtraction:** Velocity triangles are based on vector addition and subtraction: $\vec{V_1} = \vec{U} + \vec{V}_{r1}$ and $\vec{V_2} = \vec{U} + \vec{V}_{r2}$.
*   **Whirl Velocity:** The tangential component of absolute velocity ($V_w$) is crucial for calculating work done.
*   **Axial Velocity:** The axial component of absolute velocity ($V_a$) is important for calculating axial thrust.
*   **Blade Angles:** $\beta_1$ and $\beta_2$ are the angles at which steam enters and leaves the moving blades relative to the blade surface.
*   **Nozzle Angle:** $\alpha_1$ is the angle of the absolute steam velocity from the nozzle relative to the direction of blade motion.
*   **Assumptions:** Friction in blades, varying blade speed across the blade height, and steam leakage are often neglected in basic analysis but are important for real-world performance.
*   **Rudra Moorthy (2003):** Provides detailed explanations and diagrams for velocity triangles in various turbine stages, emphasizing the graphical construction and calculation of work and efficiency.
*   **R.K. Rajput (2010):** Also covers velocity triangles extensively, providing clear examples and derivations of formulas used in the calculations.

---

### 5. Applications and Further Considerations

*   **Blade Efficiency:** The efficiency of the blades themselves can be improved by optimizing blade angles and profiles to minimize losses due to friction and shock.
*   **Degree of Reaction:** The degree of reaction ($r$) is defined as the ratio of the enthalpy drop in the moving blades to the enthalpy drop in the entire stage (fixed + moving blades). $r = \frac{\Delta h_{moving}}{\Delta h_{stage}}$. For 50% reaction, $\Delta h_{moving} = \Delta h_{fixed}$.
*   **Maximum Efficiency:** For a given set of blade angles, there exists an optimal blade speed to steam speed ratio ($U/V_1$) for maximum efficiency. This is often around 0.4-0.5 for impulse turbines.
*   **Multi-stage Turbines:** The analysis of each stage is similar, but the steam conditions and velocities change from one stage to the next.

---

This comprehensive study guide covers the graphical method for solving velocity triangle problems in both impulse and reaction steam turbines, aligning with the learning outcomes and course objectives. The examples and practice questions provide practical application of the concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
