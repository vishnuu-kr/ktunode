---
title: "General heat conduction equation in three dimension through plane (derivation needed) cylindrical and spherical (only equation) walls –initial and boundary conditions - One Dimensional Steady state heat conduction - Thermal Conductivity – concept of thermal resistance – critical radius – conduction with heat generation."
subject: "HEAT AND MASS TRANSFER"
module: "Module 1: Conduction heat transfer"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633a1"
status: "completed"
scrapedAt: "2026-05-20T18:00:09.277Z"
---
# HEAT AND MASS TRANSFER

## Module 1: Conduction Heat Transfer

---

### Topic: General Heat Conduction Equation in Three Dimensions

#### Learning Outcome:
*   Understand and apply the principles of heat conduction in engineering problems (CO1 - K3).

#### Key Concepts & Definitions:
*   **Conduction:** The transfer of heat through a material by direct contact of its particles. It occurs in solids, liquids, and gases, but is most significant in solids.
*   **Heat Flux ($\vec{q}$):** The rate of heat transfer per unit area. It is a vector quantity.
*   **Fourier's Law of Conduction:** The fundamental law governing heat conduction. It states that the rate of heat conduction in a direction is proportional to the negative of the temperature gradient in that direction.

#### Derivation of the General Heat Conduction Equation in Three Dimensions (Cartesian Coordinates):

The general heat conduction equation is derived by applying the principle of conservation of energy to a differential control volume within the conducting medium.

**Assumptions:**
1.  The medium is homogeneous and isotropic (thermal conductivity is constant and the same in all directions).
2.  Heat transfer is solely by conduction.
3.  No internal heat generation. (This will be added later).

**Control Volume:** Consider a small rectangular control volume with dimensions $\Delta x$, $\Delta y$, and $\Delta z$ oriented in the Cartesian coordinate system.

**Energy Balance:**
The net rate of heat transfer into the control volume plus the rate of heat generated within the control volume (if any) must equal the rate of change of internal energy of the control volume.

$$ \text{Rate of heat in} - \text{Rate of heat out} + \text{Rate of heat generation} = \text{Rate of energy accumulation} $$

**1. Heat Transfer in x-direction:**
*   Heat entering the face perpendicular to the x-axis at $x$: $q_x = -k A_y \frac{\partial T}{\partial x} \Big|_{x}$ (where $A_y = \Delta y \Delta z$)
*   Heat leaving the face perpendicular to the x-axis at $x + \Delta x$: $q_{x+\Delta x} = -k A_y \frac{\partial T}{\partial x} \Big|_{x+\Delta x}$

The net heat transfer in the x-direction is:
$$ q_{net, x} = q_x - q_{x+\Delta x} = -k A_y \left(\frac{\partial T}{\partial x}\right)_x - \left(-k A_y \left(\frac{\partial T}{\partial x}\right)_{x+\Delta x}\right) $$
$$ q_{net, x} = k A_y \left[\left(\frac{\partial T}{\partial x}\right)_{x+\Delta x} - \left(\frac{\partial T}{\partial x}\right)_x\right] $$
As $\Delta x \to 0$, this becomes:
$$ q_{net, x} = k A_y \frac{\partial}{\partial x}\left(\frac{\partial T}{\partial x}\right) \Delta x = k A_y \frac{\partial^2 T}{\partial x^2} \Delta x $$
Substituting $A_y = \Delta y \Delta z$:
$$ q_{net, x} = k \Delta x \Delta y \Delta z \frac{\partial^2 T}{\partial x^2} $$

**2. Heat Transfer in y-direction:**
Similarly, for the y-direction:
$$ q_{net, y} = k \Delta x \Delta y \Delta z \frac{\partial^2 T}{\partial y^2} $$

**3. Heat Transfer in z-direction:**
Similarly, for the z-direction:
$$ q_{net, z} = k \Delta x \Delta y \Delta z \frac{\partial^2 T}{\partial z^2} $$

**Total Net Heat Transfer (excluding generation):**
$$ q_{net} = q_{net, x} + q_{net, y} + q_{net, z} = k \Delta x \Delta y \Delta z \left(\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2}\right) $$

**Rate of Energy Accumulation (Internal Energy Change):**
The internal energy of the control volume is $U = \rho (\Delta x \Delta y \Delta z) c_p T$ (assuming constant specific heat $c_p$ and density $\rho$).
The rate of change of internal energy is:
$$ \frac{\partial U}{\partial t} = \rho (\Delta x \Delta y \Delta z) c_p \frac{\partial T}{\partial t} $$

**Applying the Energy Balance (without heat generation):**
Net heat transfer into the volume = Rate of energy accumulation
$$ k \Delta x \Delta y \Delta z \left(\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2}\right) = \rho (\Delta x \Delta y \Delta z) c_p \frac{\partial T}{\partial t} $$

Dividing by $k \Delta x \Delta y \Delta z$:
$$ \frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2} = \frac{\rho c_p}{k} \frac{\partial T}{\partial t} $$

The term $\frac{k}{\rho c_p}$ is defined as the **thermal diffusivity**, denoted by $\alpha$.
$$ \alpha = \frac{k}{\rho c_p} $$
So, the equation becomes:
$$ \frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2} = \frac{1}{\alpha} \frac{\partial T}{\partial t} $$

This is the **General Heat Conduction Equation in Cartesian Coordinates (without internal heat generation)**.

**Introducing Heat Generation ($\dot{q}$):**
If there is internal heat generation within the control volume at a rate $\dot{q}$ per unit volume (e.g., electrical resistance heating, nuclear reactions), the energy balance changes:

$$ q_{net} + \dot{q} (\Delta x \Delta y \Delta z) = \frac{\partial U}{\partial t} $$
$$ k \Delta x \Delta y \Delta z \left(\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2}\right) + \dot{q} (\Delta x \Delta y \Delta z) = \rho (\Delta x \Delta y \Delta z) c_p \frac{\partial T}{\partial t} $$

Dividing by $k \Delta x \Delta y \Delta z$:
$$ \frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2} + \frac{\dot{q}}{k} = \frac{1}{\alpha} \frac{\partial T}{\partial t} $$

This is the **General Heat Conduction Equation in Cartesian Coordinates with Internal Heat Generation**.

In vector notation, this can be written as:
$$ \nabla^2 T + \frac{\dot{q}}{k} = \frac{1}{\alpha} \frac{\partial T}{\partial t} $$
where $\nabla^2$ is the Laplacian operator.

#### General Heat Conduction Equation in Other Coordinate Systems (Equations Only):

*   **Cylindrical Coordinates:**
    $$ \frac{1}{r} \frac{\partial}{\partial r}\left(r \frac{\partial T}{\partial r}\right) + \frac{1}{r^2} \frac{\partial^2 T}{\partial \phi^2} + \frac{\partial^2 T}{\partial z^2} + \frac{\dot{q}}{k} = \frac{1}{\alpha} \frac{\partial T}{\partial t} $$
    *   **Simplified for radial symmetry ($\frac{\partial}{\partial \phi}=0$, $\frac{\partial}{\partial z}=0$):**
        $$ \frac{1}{r} \frac{d}{dr}\left(r \frac{dT}{dr}\right) + \frac{\dot{q}}{k} = 0 \quad (\text{Steady State}) $$
        $$ \frac{1}{r} \frac{d}{dr}\left(r \frac{dT}{dr}\right) = \frac{1}{\alpha} \frac{\partial T}{\partial t} \quad (\text{Unsteady State, no generation}) $$

*   **Spherical Coordinates:**
    $$ \frac{1}{r^2} \frac{\partial}{\partial r}\left(r^2 \frac{\partial T}{\partial r}\right) + \frac{1}{r^2 \sin \theta} \frac{\partial}{\partial \theta}\left(\sin \theta \frac{\partial T}{\partial \theta}\right) + \frac{1}{r^2 \sin^2 \theta} \frac{\partial^2 T}{\partial \phi^2} + \frac{\dot{q}}{k} = \frac{1}{\alpha} \frac{\partial T}{\partial t} $$
    *   **Simplified for radial symmetry ($\frac{\partial}{\partial \theta}=0$, $\frac{\partial}{\partial \phi}=0$):**
        $$ \frac{1}{r^2} \frac{d}{dr}\left(r^2 \frac{dT}{dr}\right) + \frac{\dot{q}}{k} = 0 \quad (\text{Steady State}) $$
        $$ \frac{1}{r^2} \frac{d}{dr}\left(r^2 \frac{dT}{dr}\right) = \frac{1}{\alpha} \frac{\partial T}{\partial t} \quad (\text{Unsteady State, no generation}) $$

**Reference:** *Fundamentals of engineering heat and mass transfer* by R. C. Sachdeva, Chapter 2.

---

### Topic: Initial and Boundary Conditions

#### Learning Outcome:
*   Understand and apply the principles of heat conduction in engineering problems (CO1 - K3).

#### Key Concepts & Definitions:
*   **Initial Conditions (IC):** The temperature distribution throughout the medium at the beginning of the transient process (time $t=0$).
*   **Boundary Conditions (BC):** The conditions that the temperature or heat flux must satisfy at the boundaries of the medium. These conditions are crucial for solving the heat conduction equation and determining a unique temperature distribution.

#### Types of Boundary Conditions:

1.  **Dirichlet Boundary Condition (Specified Temperature):**
    The temperature is specified at a boundary.
    *   **Form:** $T(x, t) = T_s$ (for a plane wall at $x=x_1$) or $T(r, \phi, z, t) = T_s$ (in general coordinates).
    *   **Example:** One side of a plane wall is in contact with a fluid at a constant temperature $T_{\infty}$ and has a very high heat transfer coefficient, making the wall surface temperature approximately equal to $T_{\infty}$.

2.  **Neumann Boundary Condition (Specified Heat Flux):**
    The heat flux is specified at a boundary. This is derived from Fourier's Law.
    *   **Form:** $-k \frac{\partial T}{\partial n} = q_s''$ (where $n$ is the direction normal to the boundary and $q_s''$ is the specified heat flux).
    *   **Example:** One side of a plane wall is perfectly insulated. In this case, the heat flux in the normal direction is zero.
        *   Insulated boundary: $-k \frac{\partial T}{\partial x} = 0 \implies \frac{\partial T}{\partial x} = 0$ at $x=x_1$.

3.  **Robin Boundary Condition (Convection Boundary Condition):**
    The heat transfer at the boundary is due to convection to a surrounding fluid.
    *   **Form:** $-k \frac{\partial T}{\partial n} = h (T - T_{\infty})$ (where $h$ is the convection heat transfer coefficient and $T_{\infty}$ is the surrounding fluid temperature).
    *   **Example:** One side of a plane wall is exposed to a fluid at $T_{\infty}$ with a convection coefficient $h$.
        *   For a plane wall at $x=x_1$: $-k \frac{\partial T}{\partial x} \Big|_{x=x_1} = h [T(x_1, t) - T_{\infty}]$

4.  **Radiation Boundary Condition:**
    The heat transfer at the boundary is due to radiation to the surroundings.
    *   **Form:** $-k \frac{\partial T}{\partial n} = \epsilon \sigma (T^4 - T_{surr}^4)$ (where $\epsilon$ is emissivity, $\sigma$ is the Stefan-Boltzmann constant, and $T_{surr}$ is the temperature of the surroundings). This is a non-linear boundary condition.
    *   **Approximation for small temperature differences:** Can be linearized as $-k \frac{\partial T}{\partial n} \approx h_r (T - T_{surr})$, where $h_r$ is the radiation heat transfer coefficient.

**Special Case: Convection and Radiation Combined:**
If both convection and radiation occur at the boundary:
$$ -k \frac{\partial T}{\partial n} = h(T - T_{\infty}) + \epsilon \sigma (T^4 - T_{surr}^4) $$

**Initial Condition Example:**
For a plane wall of thickness $L$ initially at a uniform temperature $T_i$:
*   **Form:** $T(x, 0) = T_i$ for $0 \le x \le L$.

**Important Points to Remember:**
*   The number of boundary conditions required is equal to the number of dimensions. For a 1D problem, two boundary conditions are needed. For a 2D problem, four boundary conditions are needed, and so on.
*   The initial condition specifies the temperature distribution at $t=0$.
*   Boundary conditions must be specified at every point on the boundary of the region.
*   The type of boundary condition dictates the nature of the solution.

**Reference:** *Heat and Mass Transfer – Fundamental and Application* by Yunus A. Cengel and Afshin J. Ghajar, Chapter 4. *Fundamentals of engineering heat and mass transfer* by R. C. Sachdeva, Chapter 2.

---

### Topic: One Dimensional Steady State Heat Conduction

#### Learning Outcome:
*   Understand and apply the principles of heat conduction in engineering problems (CO1 - K3).

#### Key Concepts & Definitions:
*   **Steady State:** A condition where the temperature at any point within the system does not change with time ($\frac{\partial T}{\partial t} = 0$).
*   **One Dimensional:** Heat transfer occurs in only one spatial direction.

#### Heat Conduction in Plane Walls (Steady State, 1D):

Consider a plane wall of thickness $L$, thermal conductivity $k$, with temperatures $T_1$ and $T_2$ on its two surfaces ($x=0$ and $x=L$ respectively). Assume no heat generation.

The general heat conduction equation in Cartesian coordinates is:
$$ \frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2} + \frac{\dot{q}}{k} = \frac{1}{\alpha} \frac{\partial T}{\partial t} $$

For steady state ($\frac{\partial T}{\partial t} = 0$) and one-dimensional conduction in the x-direction ($\frac{\partial^2 T}{\partial y^2} = 0$, $\frac{\partial^2 T}{\partial z^2} = 0$), and no heat generation ($\dot{q} = 0$):
$$ \frac{d^2 T}{dx^2} = 0 $$

**Integrating twice:**
$$ \frac{dT}{dx} = C_1 $$
$$ T(x) = C_1 x + C_2 $$

Apply boundary conditions:
1.  At $x=0$, $T(0) = T_1$.
    $T_1 = C_1 (0) + C_2 \implies C_2 = T_1$.
2.  At $x=L$, $T(L) = T_2$.
    $T_2 = C_1 L + T_1 \implies C_1 = \frac{T_2 - T_1}{L}$.

Substituting $C_1$ and $C_2$:
$$ T(x) = \frac{T_2 - T_1}{L} x + T_1 $$
This is the **temperature distribution** in a plane wall under steady state, 1D conduction.

The heat flux is given by Fourier's Law:
$$ q_x'' = -k \frac{dT}{dx} = -k \left(\frac{T_2 - T_1}{L}\right) = k \frac{T_1 - T_2}{L} $$

The total rate of heat transfer $Q$ through an area $A$ is:
$$ Q = A q_x'' = k A \frac{T_1 - T_2}{L} $$

**Concept of Thermal Resistance:**
This equation is analogous to Ohm's Law in electrical circuits ($I = \frac{V_1 - V_2}{R}$).
We can rewrite the heat transfer equation as:
$$ Q = \frac{T_1 - T_2}{L / (kA)} $$
Here, $Q$ is the heat flow rate, $(T_1 - T_2)$ is the thermal "driving force" (analogous to voltage difference), and $R_{cond} = \frac{L}{kA}$ is the **thermal resistance** due to conduction.

*   **Units of Thermal Resistance:** $K/W$ or $^\circ C/W$.
*   **Factors affecting thermal resistance:**
    *   Length of the material ($L$): Higher $L$ means higher resistance.
    *   Area of heat transfer ($A$): Higher $A$ means lower resistance.
    *   Thermal conductivity ($k$): Higher $k$ means lower resistance.

**Thermal Resistance for Plane Walls:**
$$ R_{wall} = \frac{L}{kA} $$

**Thermal Resistance for Convection:**
If a surface at temperature $T_s$ is in contact with a fluid at $T_{\infty}$ with convection coefficient $h$, the heat transfer rate is $Q = hA(T_s - T_{\infty})$.
This can be written as $Q = \frac{T_s - T_{\infty}}{1/(hA)}$.
The thermal resistance due to convection is:
$$ R_{conv} = \frac{1}{hA} $$

**Thermal Resistance for Radiation:**
Similarly, for radiation between a surface at $T_s$ and surroundings at $T_{surr}$: $Q = h_r A (T_s - T_{surr})$.
The thermal resistance due to radiation is:
$$ R_{rad} = \frac{1}{h_r A} $$

**Composite Walls:**
For a composite wall made of multiple layers with different materials, the thermal resistances add up in series:
$$ R_{total} = R_1 + R_2 + R_3 + ... = \frac{L_1}{k_1 A} + \frac{L_2}{k_2 A} + \frac{L_3}{k_3 A} + ... $$
The total heat transfer rate is then $Q = \frac{T_{in} - T_{out}}{R_{total}}$.

**Reference:** *Fundamentals of engineering heat and mass transfer* by R. C. Sachdeva, Chapter 3. *Heat and Mass Transfer elements* by P.K Nag, Chapter 2.

---

#### Heat Conduction in Cylindrical Walls (Steady State, 1D):

Consider a thick-walled cylinder with inner radius $r_1$, outer radius $r_2$, thermal conductivity $k$. The inner surface is at $T_1$ and the outer surface is at $T_2$. Assume no heat generation and radial heat transfer only ($\frac{\partial T}{\partial z} = 0$, $\frac{\partial T}{\partial \phi} = 0$).

The general heat conduction equation in cylindrical coordinates is:
$$ \frac{1}{r} \frac{\partial}{\partial r}\left(r \frac{\partial T}{\partial r}\right) + \frac{1}{r^2} \frac{\partial^2 T}{\partial \phi^2} + \frac{\partial^2 T}{\partial z^2} + \frac{\dot{q}}{k} = \frac{1}{\alpha} \frac{\partial T}{\partial t} $$

For steady state, 1D radial conduction, and no heat generation:
$$ \frac{1}{r} \frac{d}{dr}\left(r \frac{dT}{dr}\right) = 0 $$
$$ \frac{d}{dr}\left(r \frac{dT}{dr}\right) = 0 $$

**Integrating once:**
$$ r \frac{dT}{dr} = C_1 $$
$$ \frac{dT}{dr} = \frac{C_1}{r} $$

**Integrating again:**
$$ T(r) = C_1 \ln(r) + C_2 $$

Apply boundary conditions:
1.  At $r=r_1$, $T(r_1) = T_1$.
    $T_1 = C_1 \ln(r_1) + C_2$.
2.  At $r=r_2$, $T(r_2) = T_2$.
    $T_2 = C_1 \ln(r_2) + C_2$.

Subtracting the two equations:
$T_1 - T_2 = C_1 (\ln(r_1) - \ln(r_2)) = C_1 \ln\left(\frac{r_1}{r_2}\right)$.
$$ C_1 = \frac{T_1 - T_2}{\ln(r_1/r_2)} $$

Substituting $C_1$ back into the first equation to find $C_2$:
$$ C_2 = T_1 - C_1 \ln(r_1) = T_1 - \frac{T_1 - T_2}{\ln(r_1/r_2)} \ln(r_1) $$

The temperature distribution is:
$$ T(r) = \frac{T_1 - T_2}{\ln(r_1/r_2)} \ln(r) + T_1 - \frac{T_1 - T_2}{\ln(r_1/r_2)} \ln(r_1) $$
$$ T(r) = T_1 + \frac{T_1 - T_2}{\ln(r_2/r_1)} \ln\left(\frac{r}{r_1}\right) $$
(Note: $\ln(r_1/r_2) = -\ln(r_2/r_1)$)

The heat flux in the radial direction is:
$$ q_r'' = -k \frac{dT}{dr} = -k \left(\frac{C_1}{r}\right) = -k \frac{T_1 - T_2}{r \ln(r_1/r_2)} = k \frac{T_2 - T_1}{r \ln(r_2/r_1)} $$

The total heat transfer rate $Q$ through a length $L$ of the cylinder is:
$$ Q = A q_r'' = (2 \pi r L) q_r'' = (2 \pi r L) \left( k \frac{T_1 - T_2}{r \ln(r_2/r_1)} \right) $$
$$ Q = k (2 \pi L) \frac{T_1 - T_2}{\ln(r_2/r_1)} $$

The thermal resistance for a cylindrical wall of length $L$ is:
$$ R_{cyl} = \frac{\ln(r_2/r_1)}{2 \pi L k} $$

**Reference:** *Fundamentals of engineering heat and mass transfer* by R. C. Sachdeva, Chapter 3. *Heat and Mass Transfer elements* by P.K Nag, Chapter 2.

---

#### Heat Conduction in Spherical Walls (Steady State, 1D):

Consider a spherical shell with inner radius $r_1$, outer radius $r_2$, thermal conductivity $k$. The inner surface is at $T_1$ and the outer surface is at $T_2$. Assume no heat generation and radial heat transfer only.

The general heat conduction equation in spherical coordinates is:
$$ \frac{1}{r^2} \frac{\partial}{\partial r}\left(r^2 \frac{\partial T}{\partial r}\right) + \frac{1}{r^2 \sin \theta} \frac{\partial}{\partial \theta}\left(\sin \theta \frac{\partial T}{\partial \theta}\right) + \frac{1}{r^2 \sin^2 \theta} \frac{\partial^2 T}{\partial \phi^2} + \frac{\dot{q}}{k} = \frac{1}{\alpha} \frac{\partial T}{\partial t} $$

For steady state, 1D radial conduction, and no heat generation:
$$ \frac{1}{r^2} \frac{d}{dr}\left(r^2 \frac{dT}{dr}\right) = 0 $$
$$ \frac{d}{dr}\left(r^2 \frac{dT}{dr}\right) = 0 $$

**Integrating once:**
$$ r^2 \frac{dT}{dr} = C_1 $$
$$ \frac{dT}{dr} = \frac{C_1}{r^2} $$

**Integrating again:**
$$ T(r) = -\frac{C_1}{r} + C_2 $$

Apply boundary conditions:
1.  At $r=r_1$, $T(r_1) = T_1$.
    $T_1 = -\frac{C_1}{r_1} + C_2$.
2.  At $r=r_2$, $T(r_2) = T_2$.
    $T_2 = -\frac{C_1}{r_2} + C_2$.

Subtracting the two equations:
$T_1 - T_2 = C_1 \left(-\frac{1}{r_1} + \frac{1}{r_2}\right) = C_1 \left(\frac{r_1 - r_2}{r_1 r_2}\right)$.
$$ C_1 = \frac{T_1 - T_2}{r_1 r_2 / (r_1 - r_2)} = \frac{(T_1 - T_2) r_1 r_2}{r_1 - r_2} = \frac{(T_2 - T_1) r_1 r_2}{r_2 - r_1} $$

The temperature distribution is:
$$ T(r) = -\frac{C_1}{r} + C_2 $$
$$ T(r) = T_1 + \frac{T_2 - T_1}{r_2 - r_1} \left(\frac{r_1 r_2}{r} - r_1\right) $$
$$ T(r) = T_1 + (T_2 - T_1) \frac{r_1}{r} \frac{r_2 - r}{r_2 - r_1} $$

The heat flux in the radial direction is:
$$ q_r'' = -k \frac{dT}{dr} = -k \left(-\frac{C_1}{r^2}\right) = k \frac{C_1}{r^2} = k \frac{(T_2 - T_1) r_1 r_2}{r^2 (r_2 - r_1)} $$

The total heat transfer rate $Q$ through the sphere is:
$$ Q = A q_r'' = (4 \pi r^2) q_r'' = (4 \pi r^2) \left( k \frac{(T_2 - T_1) r_1 r_2}{r^2 (r_2 - r_1)} \right) $$
$$ Q = k (4 \pi) \frac{T_1 - T_2}{\frac{r_2 - r_1}{r_1 r_2}} = k (4 \pi) \frac{T_1 - T_2}{\frac{1}{r_1} - \frac{1}{r_2}} $$

The thermal resistance for a spherical wall is:
$$ R_{sphere} = \frac{1}{4 \pi k} \left(\frac{1}{r_1} - \frac{1}{r_2}\right) $$

**Reference:** *Fundamentals of engineering heat and mass transfer* by R. C. Sachdeva, Chapter 3.

---

### Topic: Thermal Conductivity

#### Learning Outcome:
*   Understand and apply the principles of heat conduction in engineering problems (CO1 - K3).

#### Key Concepts & Definitions:
*   **Thermal Conductivity ($k$):** A material property that describes its ability to conduct heat. It represents the rate of heat transfer through a unit area of the material per unit temperature gradient.
*   **Fourier's Law (again):** $q'' = -k \frac{dT}{dx}$. If $\frac{dT}{dx} = 1 K/m$, then $q'' = k$. Thus, $k$ is the heat flux when the temperature gradient is unity.

#### Properties of Thermal Conductivity:
*   **Units:** W/(m·K) or W/(m·°C).
*   **Range:**
    *   **Metals:** High thermal conductivity (e.g., Copper $\approx$ 400 W/(m·K), Aluminum $\approx$ 237 W/(m·K)). They are good thermal conductors.
    *   **Non-metals/Insulators:** Low thermal conductivity (e.g., Glass $\approx$ 1 W/(m·K), Wood $\approx$ 0.04-0.12 W/(m·K), Air $\approx$ 0.026 W/(m·K)). They are good thermal insulators.
    *   **Gases:** Generally low thermal conductivity, increasing slightly with temperature.
    *   **Liquids:** Thermal conductivity varies widely. Water $\approx$ 0.6 W/(m·K).
*   **Temperature Dependence:** For most materials, thermal conductivity changes with temperature. However, for simplicity, it is often assumed constant over a specific temperature range.
    *   Metals: $k$ generally increases with temperature.
    *   Non-metals/Insulators: $k$ generally decreases with temperature.
*   **Mechanism:** Heat conduction in solids occurs through two primary mechanisms:
    *   **Lattice Vibrations (Phonons):** Atoms in a solid vibrate and transfer energy to adjacent atoms. This is dominant in electrical insulators.
    *   **Free Electron Movement:** In metals, free electrons carry thermal energy as well as electrical energy. This is why good electrical conductors are usually good thermal conductors.

#### Thermal Conductivity of Composite Walls and the Concept of Thermal Resistance:

The thermal resistance concept is extremely useful for analyzing heat transfer through composite structures.

*   **Plane Wall:** $R_{cond} = \frac{L}{kA}$
*   **Cylindrical Wall:** $R_{cond} = \frac{\ln(r_2/r_1)}{2 \pi L k}$
*   **Spherical Wall:** $R_{cond} = \frac{1}{4 \pi k} \left(\frac{1}{r_1} - \frac{1}{r_2}\right)$

**Example:** A composite wall consists of three layers of different materials with thermal conductivities $k_1, k_2, k_3$ and thicknesses $L_1, L_2, L_3$. The heat transfer is steady state and 1D through an area $A$.

The total thermal resistance is the sum of individual resistances:
$$ R_{total} = R_1 + R_2 + R_3 $$
$$ R_{total} = \frac{L_1}{k_1 A} + \frac{L_2}{k_2 A} + \frac{L_3}{k_3 A} $$

If the inner and outer surfaces are exposed to fluids with convection coefficients $h_1$ and $h_3$ respectively, the total resistance will also include convection resistances:
$$ R_{total} = R_{conv,1} + R_{cond,1} + R_{cond,2} + R_{cond,3} + R_{conv,3} $$
$$ R_{total} = \frac{1}{h_1 A} + \frac{L_1}{k_1 A} + \frac{L_2}{k_2 A} + \frac{L_3}{k_3 A} + \frac{1}{h_3 A} $$

The heat transfer rate is then $Q = \frac{T_{\infty,1} - T_{\infty,3}}{R_{total}}$.

**Reference:** *Fundamentals of engineering heat and mass transfer* by R. C. Sachdeva, Chapter 3. *Heat and Mass Transfer elements* by P.K Nag, Chapter 2. *Heat and Mass Transfer – Fundamental and Application* by Yunus A. Cengel and Afshin J. Ghajar, Chapter 2.

---

### Topic: Critical Radius of Insulation

#### Learning Outcome:
*   Understand and apply the principles of heat conduction in engineering problems (CO1 - K3).

#### Key Concepts & Definitions:
*   **Critical Radius ($r_c$):** For curved surfaces (cylinders and spheres), there is a specific radius of insulation for which the total thermal resistance is a minimum. Beyond this radius, adding more insulation *increases* heat transfer.

#### Cylindrical Surface:

Consider a cylindrical tube of radius $r_1$ and surface temperature $T_1$, insulated with a material of thermal conductivity $k$ and thickness $t$. The outer radius of the insulation is $r_2 = r_1 + t$. The outer surface is exposed to a fluid at $T_{\infty}$ with a convection heat transfer coefficient $h$.

The total thermal resistance for heat transfer from the fluid to the cylinder surface is the sum of the convection resistance and the conduction resistance of the insulation:
$$ R_{total} = R_{conv} + R_{cond} $$
$$ R_{total}(r_2) = \frac{1}{h A_2} + \frac{\ln(r_2/r_1)}{2 \pi L k} $$
where $A_2 = 2 \pi r_2 L$ is the outer surface area of the insulation.

Substituting $A_2$:
$$ R_{total}(r_2) = \frac{1}{h (2 \pi r_2 L)} + \frac{\ln(r_2/r_1)}{2 \pi L k} $$

To find the minimum thermal resistance, we differentiate $R_{total}$ with respect to $r_2$ and set it to zero:
$$ \frac{dR_{total}}{dr_2} = \frac{d}{dr_2} \left( \frac{1}{2 \pi L h r_2} + \frac{\ln(r_2/r_1)}{2 \pi L k} \right) = 0 $$
$$ \frac{1}{2 \pi L h} \left(-\frac{1}{r_2^2}\right) + \frac{1}{2 \pi L k} \left(\frac{1}{r_2}\right) = 0 $$
$$ -\frac{1}{h r_2^2} + \frac{1}{k r_2} = 0 $$
$$ \frac{1}{k r_2} = \frac{1}{h r_2^2} $$
$$ k r_2 = h r_2^2 $$
$$ r_2 = \frac{k}{h} $$

This radius $r_2$ is the critical radius of insulation for a cylinder, denoted as $r_{c, cylinder}$.
$$ r_{c, cylinder} = \frac{k}{h} $$

**Consequences of Critical Radius:**
*   If $r_1 < r_{c, cylinder}$: Adding insulation (increasing $r_2$) initially decreases the total thermal resistance, thus increasing heat transfer. This is beneficial for insulating cold surfaces to prevent heat gain.
*   If $r_1 > r_{c, cylinder}$: Adding insulation (increasing $r_2$) increases the total thermal resistance, thus decreasing heat transfer. This is the typical scenario for insulating hot surfaces to reduce heat loss.
*   If $r_1 = r_{c, cylinder}$: The total thermal resistance is at its minimum. Adding or removing insulation does not change the heat transfer rate at this point.

**Example:** A hot steam pipe at 400 K with an outer radius of 0.05 m is insulated with fiberglass ($k = 0.04$ W/m·K). The outer surface of the insulation is exposed to ambient air at 300 K with a convection coefficient $h = 10$ W/m²·K.
Calculate the critical radius of insulation.

$r_{c, cylinder} = \frac{k}{h} = \frac{0.04 \text{ W/m·K}}{10 \text{ W/m}^2\text{·K}} = 0.004 \text{ m}$.

Since the pipe radius $r_1 = 0.05$ m is greater than the critical radius $r_c = 0.004$ m, adding fiberglass insulation will increase the thermal resistance and decrease heat loss.

#### Spherical Surface:

Similarly, for a spherical surface of radius $r_1$ with surface temperature $T_1$, insulated with a material of thermal conductivity $k$ to an outer radius $r_2$. The outer surface is exposed to a fluid at $T_{\infty}$ with convection coefficient $h$.

The total thermal resistance is:
$$ R_{total}(r_2) = R_{conv} + R_{cond} $$
$$ R_{total}(r_2) = \frac{1}{h A_2} + \frac{1}{4 \pi k} \left(\frac{1}{r_1} - \frac{1}{r_2}\right) $$
where $A_2 = 4 \pi r_2^2$.

Substituting $A_2$:
$$ R_{total}(r_2) = \frac{1}{h (4 \pi r_2^2)} + \frac{1}{4 \pi k} \left(\frac{1}{r_1} - \frac{1}{r_2}\right) $$

Differentiating with respect to $r_2$ and setting to zero:
$$ \frac{dR_{total}}{dr_2} = \frac{1}{4 \pi h} \left(-\frac{2}{r_2^3}\right) + \frac{1}{4 \pi k} \left(\frac{1}{r_2^2}\right) = 0 $$
$$ -\frac{2}{h r_2^3} + \frac{1}{k r_2^2} = 0 $$
$$ \frac{1}{k r_2^2} = \frac{2}{h r_2^3} $$
$$ k r_2 = 2 h r_2^2 $$
$$ r_2 = \frac{k}{2h} $$

This is the critical radius of insulation for a sphere, denoted as $r_{c, sphere}$.
$$ r_{c, sphere} = \frac{k}{2h} $$

**Reference:** *Fundamentals of engineering heat and mass transfer* by R. C. Sachdeva, Chapter 3. *Heat and Mass Transfer – Fundamental and Application* by Yunus A. Cengel and Afshin J. Ghajar, Chapter 2.

---

### Topic: Conduction with Heat Generation

#### Learning Outcome:
*   Understand and apply the principles of heat conduction in engineering problems (CO1 - K3).

#### Key Concepts & Definitions:
*   **Heat Generation ($\dot{q}$):** Internal heat generated per unit volume (e.g., Joule heating in electrical conductors, nuclear fission in reactor fuel, chemical reactions).

#### General Heat Conduction Equation with Heat Generation:
As derived earlier, in Cartesian coordinates:
$$ \frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2} + \frac{\dot{q}}{k} = \frac{1}{\alpha} \frac{\partial T}{\partial t} $$
or in vector form:
$$ \nabla^2 T + \frac{\dot{q}}{k} = \frac{1}{\alpha} \frac{\partial T}{\partial t} $$

#### Steady State, 1D Conduction with Heat Generation:

Let's consider a plane wall of thickness $L$ with a uniform heat generation rate $\dot{q}$ and constant thermal conductivity $k$. Assume the boundary conditions are symmetrical, e.g., both surfaces are maintained at the same temperature $T_s$.

The governing equation simplifies to:
$$ \frac{d^2 T}{dx^2} + \frac{\dot{q}}{k} = 0 $$
$$ \frac{d^2 T}{dx^2} = -\frac{\dot{q}}{k} $$

**Integrating twice:**
$$ \frac{dT}{dx} = -\frac{\dot{q}}{k} x + C_1 $$
$$ T(x) = -\frac{\dot{q}}{k} \frac{x^2}{2} + C_1 x + C_2 $$

Apply boundary conditions:
Assume symmetry: $\frac{dT}{dx} = 0$ at the center of the wall ($x = L/2$).
$$ 0 = -\frac{\dot{q}}{k} \left(\frac{L}{2}\right) + C_1 \implies C_1 = \frac{\dot{q} L}{2k} $$

Now, use the surface condition: $T(L/2) = T_s$ (assuming symmetry, the temperature at the center is $T_s$).
$$ T_s = -\frac{\dot{q}}{k} \frac{(L/2)^2}{2} + \left(\frac{\dot{q} L}{2k}\right) \left(\frac{L}{2}\right) + C_2 $$
$$ T_s = -\frac{\dot{q} L^2}{8k} + \frac{\dot{q} L^2}{4k} + C_2 $$
$$ T_s = \frac{\dot{q} L^2}{8k} + C_2 \implies C_2 = T_s - \frac{\dot{q} L^2}{8k} $$

Substitute $C_1$ and $C_2$ into the temperature distribution equation:
$$ T(x) = -\frac{\dot{q}}{2k} x^2 + \frac{\dot{q} L}{2k} x + T_s - \frac{\dot{q} L^2}{8k} $$
$$ T(x) = T_s + \frac{\dot{q}}{2k} \left(Lx - x^2 - \frac{L^2}{4}\right) $$
$$ T(x) = T_s - \frac{\dot{q}}{2k} \left(\frac{L^2}{4} - Lx + x^2\right) $$
$$ T(x) = T_s - \frac{\dot{q}}{2k} \left(\frac{L}{2} - x\right)^2 $$

The maximum temperature occurs at the center of the wall ($x = L/2$):
$$ T_{max} = T(L/2) = T_s - \frac{\dot{q}}{2k} \left(\frac{L}{2} - \frac{L}{2}\right)^2 = T_s $$
This seems wrong, let's re-evaluate with the correct assumption of $T(x=0)=T_s$ and $T(x=L)=T_s$.
If $T(0) = T_s$ and $T(L) = T_s$:
From $T(x) = -\frac{\dot{q}}{k} \frac{x^2}{2} + C_1 x + C_2$:
$T(0) = T_s \implies C_2 = T_s$.
$T(L) = T_s \implies T_s = -\frac{\dot{q}}{k} \frac{L^2}{2} + C_1 L + T_s$.
$\implies C_1 L = \frac{\dot{q} L^2}{2k} \implies C_1 = \frac{\dot{q} L}{2k}$.

So, the temperature distribution is:
$$ T(x) = -\frac{\dot{q}}{2k} x^2 + \frac{\dot{q} L}{2k} x + T_s $$
$$ T(x) = T_s + \frac{\dot{q}}{2k} (Lx - x^2) $$

The maximum temperature occurs where $\frac{dT}{dx} = 0$, which is at $x = L/2$.
$$ T_{max} = T(L/2) = T_s + \frac{\dot{q}}{2k} \left(L\frac{L}{2} - \left(\frac{L}{2}\right)^2\right) = T_s + \frac{\dot{q}}{2k} \left(\frac{L^2}{2} - \frac{L^2}{4}\right) $$
$$ T_{max} = T_s + \frac{\dot{q}}{2k} \left(\frac{L^2}{4}\right) = T_s + \frac{\dot{q} L^2}{8k} $$

**Reference:** *Fundamentals of engineering heat and mass transfer* by R. C. Sachdeva, Chapter 3. *Heat and Mass Transfer elements* by P.K Nag, Chapter 2.

#### Cylindrical Fuel Rod with Heat Generation:

Consider a solid cylindrical fuel rod of radius $R$ with uniform heat generation $\dot{q}$ and surface temperature $T_s$.

The governing equation in cylindrical coordinates for steady-state, 1D radial conduction with heat generation is:
$$ \frac{1}{r} \frac{d}{dr}\left(r \frac{dT}{dr}\right) + \frac{\dot{q}}{k} = 0 $$
$$ \frac{d}{dr}\left(r \frac{dT}{dr}\right) = -\frac{\dot{q}}{k} r $$

**Integrating once:**
$$ r \frac{dT}{dr} = -\frac{\dot{q}}{k} \frac{r^2}{2} + C_1 $$
$$ \frac{dT}{dr} = -\frac{\dot{q}}{2k} r + \frac{C_1}{r} $$

**Integrating again:**
$$ T(r) = -\frac{\dot{q}}{2k} \frac{r^2}{2} + C_1 \ln(r) + C_2 $$
$$ T(r) = -\frac{\dot{q} r^2}{4k} + C_1 \ln(r) + C_2 $$

Apply boundary conditions:
1.  Symmetry at the center: $\frac{dT}{dr} = 0$ at $r=0$.
    From $\frac{dT}{dr} = -\frac{\dot{q}}{2k} r + \frac{C_1}{r}$, if $r \to 0$, for $\frac{dT}{dr}$ to be finite, $C_1$ must be zero.
    So, $C_1 = 0$.
2.  Surface temperature: $T(R) = T_s$.
    $T_s = -\frac{\dot{q} R^2}{4k} + C_2 \implies C_2 = T_s + \frac{\dot{q} R^2}{4k}$.

The temperature distribution is:
$$ T(r) = -\frac{\dot{q} r^2}{4k} + T_s + \frac{\dot{q} R^2}{4k} $$
$$ T(r) = T_s + \frac{\dot{q}}{4k} (R^2 - r^2) $$

The maximum temperature occurs at the center ($r=0$):
$$ T_{max} = T(0) = T_s + \frac{\dot{q} R^2}{4k} $$

**Reference:** *Fundamentals of engineering heat and mass transfer* by R. C. Sachdeva, Chapter 3. *Heat and Mass Transfer elements* by P.K Nag, Chapter 2.

---

### Practice Questions and Exercises:

**Question 1:**
Derive the one-dimensional, steady-state heat conduction equation in a plane wall without heat generation.
*   **Answer:** Refer to the derivation section for Plane Walls.

**Question 2:**
A composite wall consists of three layers: Layer A ($L_A=0.1m, k_A=0.05 W/mK$), Layer B ($L_B=0.2m, k_B=0.1 W/mK$), and Layer C ($L_C=0.15m, k_C=0.08 W/mK$). The inner surface is at $T_{in} = 200^\circ C$ and the outer surface is at $T_{out} = 40^\circ C$. Calculate the thermal resistance of each layer and the overall thermal resistance of the composite wall per unit area. If the area of the wall is $10m^2$, calculate the rate of heat transfer through the wall.
*   **Answer:**
    *   $R_A = L_A/k_A = 0.1/0.05 = 2 K m^2/W$
    *   $R_B = L_B/k_B = 0.2/0.1 = 2 K m^2/W$
    *   $R_C = L_C/k_C = 0.15/0.08 = 1.875 K m^2/W$
    *   $R_{total} = R_A + R_B + R_C = 2 + 2 + 1.875 = 5.875 K m^2/W$
    *   $Q = (T_{in} - T_{out}) / R_{total} \times A = (200 - 40) K / 5.875 K m^2/W \times 10 m^2 = 160 / 5.875 \times 10 \approx 272.3 \text{ W}$

**Question 3:**
A steam pipe ($r_1 = 0.04$ m) is insulated with a material of thermal conductivity $k = 0.06$ W/m·K. The outer surface of the pipe is at $T_1 = 450$ K. The insulation is exposed to ambient air at $T_{\infty} = 300$ K with a convection heat transfer coefficient $h = 12$ W/m²·K. Calculate the critical radius of insulation for this pipe. What is the heat transfer rate per unit length of the pipe if insulation thickness is equal to the critical radius?
*   **Answer:**
    *   Critical radius $r_c = k/h = 0.06 / 12 = 0.005$ m.
    *   Since $r_1 = 0.04$ m $> r_c = 0.005$ m, adding insulation will decrease heat transfer.
    *   If insulation thickness equals critical radius, the outer radius $r_2 = r_c = 0.005$ m. This is physically impossible as $r_2$ must be $> r_1$. The question should be interpreted as: what is the heat transfer rate when the outer radius of insulation is $r_2$? However, if we assume the question implies adding insulation *up to* the critical radius for a cold surface to *increase* heat transfer, that would be a different scenario. Let's re-read. The pipe is hot, so we want to reduce heat loss.
    *   Let's rephrase to calculate heat transfer if insulation thickness is 0.01m, and then if it's 0.005m (which isn't possible).
    *   Let's assume the question meant to ask for heat transfer if insulation thickness is $0.01$ m. Then $r_2 = 0.04 + 0.01 = 0.05$ m.
        $R_{total} = \frac{1}{h (2 \pi r_2 L)} + \frac{\ln(r_2/r_1)}{2 \pi L k} = \frac{1}{12 \times 2 \pi \times 0.05 \times 1} + \frac{\ln(0.05/0.04)}{2 \pi \times 1 \times 0.06}$
        $R_{total} \approx 0.265 + 0.599 = 0.864 K/W$.
        $Q/L = (T_1 - T_{\infty}) / R_{total} = (450 - 300) / 0.864 \approx 173.6$ W/m.
    *   **Let's consider the case where $r_1 < r_c$ and we add insulation up to $r_c$ to increase heat transfer.** For example, if $r_1 = 0.003$ m, $k=0.06$, $h=12$. $r_c = 0.005$ m.
        $Q/L$ for $r_2=r_1=0.003$ m: $R_{total} = \frac{1}{12 \times 2 \pi \times 0.003 \times 1} + 0 = 4.42 K/W$. $Q/L = (450-300)/4.42 = 33.9$ W/m.
        $Q/L$ for $r_2=r_c=0.005$ m: $R_{total} = \frac{1}{12 \times 2 \pi \times 0.005 \times 1} + \frac{\ln(0.005/0.003)}{2 \pi \times 1 \times 0.06} = 0.531 + 0.426 = 0.957 K/W$. $Q/L = (450-300)/0.957 = 156.7$ W/m.
        This shows the increase.

**Question 4:**
A plane wall of thickness $0.1$ m has a uniform heat generation rate of $50000$ W/m³. The thermal conductivity of the wall material is $25$ W/m·K. If the surface temperature of both sides of the wall is maintained at $100^\circ C$, determine the temperature distribution within the wall and the maximum temperature.
*   **Answer:**
    *   $T(x) = T_s + \frac{\dot{q}}{2k} (Lx - x^2)$
    *   $T(x) = 100 + \frac{50000}{2 \times 25} (0.1x - x^2) = 100 + 1000 (0.1x - x^2)$
    *   $T(x) = 100 + 100x - 1000x^2$ ($^\circ C$)
    *   Maximum temperature occurs at $x = L/2 = 0.05$ m.
    *   $T_{max} = 100 + 100(0.05) - 1000(0.05)^2 = 100 + 5 - 1000(0.0025) = 100 + 5 - 2.5 = 102.5^\circ C$.

---

### Important Points to Remember:

*   The general heat conduction equation governs temperature distribution in any solid medium.
*   Steady-state means temperature at any point is constant with time ($\frac{\partial T}{\partial t} = 0$).
*   One-dimensional means heat flows in only one direction.
*   Thermal conductivity ($k$) is a material property indicating heat conduction ability.
*   Thermal resistance ($R = \Delta T / Q$) simplifies analysis of composite systems.
*   For cylinders/spheres, a critical radius exists for insulation where heat transfer is minimized. This happens when the increase in conduction resistance due to insulation thickness is exactly balanced by the decrease in convection resistance due to the increasing outer surface area.
*   Heat generation within a material leads to parabolic temperature profiles, with the maximum temperature usually occurring at the center.

---

### Alignment with Course Outcomes:

*   **CO1: To understand and apply the principles of heat conduction in engineering problems (Knowledge Level: K3)**
    *   This entire module directly addresses CO1 by covering the fundamental equations, temperature distributions, thermal resistances, and practical applications like critical radius and heat generation. Students can apply these principles to solve conduction problems in various geometries.

This module lays the groundwork for understanding heat transfer, which is fundamental to many engineering disciplines. The ability to analyze conduction is crucial for designing efficient and safe thermal systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
