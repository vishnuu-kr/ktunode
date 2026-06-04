---
title: "Transient heat conduction – Lumped system analysis – transient heat conduction analysis of bodies with non-negligible internal temperature gradient."
subject: "HEAT AND MASS TRANSFER"
module: "Module 1: Conduction heat transfer"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633a2"
status: "completed"
scrapedAt: "2026-05-20T18:00:09.988Z"
---
# HEAT AND MASS TRANSFER - Module 1: Conduction Heat Transfer

## Topic: Transient Heat Conduction

Transient heat conduction refers to the process of heat transfer through a material where the temperature at any point within the material changes with time. This is in contrast to steady-state conduction, where the temperature distribution remains constant over time.

### 1. Lumped System Analysis

**Introduction:**
Lumped system analysis is a simplification technique used for transient heat conduction problems when the internal resistance to heat conduction within the solid is negligible compared to the external resistance to heat transfer at the surface. This assumption simplifies the problem significantly, reducing the partial differential equation of heat conduction to an ordinary differential equation.

**Key Concept: Biot Number (Bi)**
The Biot number is a dimensionless parameter that characterizes the ratio of internal conduction resistance to external convection resistance. It is defined as:

$Bi = \frac{hL_c}{k}$

where:
*   $h$ is the convective heat transfer coefficient ($W/m^2 \cdot K$)
*   $L_c$ is the characteristic length of the body ($m$)
*   $k$ is the thermal conductivity of the solid ($W/m \cdot K$)

**Lumped System Approximation Criteria:**
A lumped system analysis is considered valid when the Biot number is significantly less than 0.1 ($Bi < 0.1$). This condition implies that the temperature within the solid is nearly uniform at any given time.

**Characteristic Length ($L_c$):**
The characteristic length is defined as the volume of the body divided by its surface area.
$L_c = \frac{V}{A_s}$

**Derivation of the Governing Equation:**
Consider a solid object with uniform initial temperature $T_i$ exposed to a surrounding fluid at temperature $T_\infty$ with a convective heat transfer coefficient $h$.
The energy balance for the object is:

Rate of change of internal energy = Rate of heat transfer by convection

$\rho V c \frac{dT}{dt} = -hA_s(T - T_\infty)$

where:
*   $\rho$ is the density of the solid ($kg/m^3$)
*   $V$ is the volume of the solid ($m^3$)
*   $c$ is the specific heat of the solid ($J/kg \cdot K$)
*   $T$ is the instantaneous temperature of the solid ($K$)
*   $t$ is the time ($s$)
*   $A_s$ is the surface area of the solid ($m^2$)

Rearranging the equation:
$\frac{dT}{T - T_\infty} = -\frac{hA_s}{\rho V c} dt$

Let $\theta = T - T_\infty$. Then $d\theta = dT$.
$\frac{d\theta}{\theta} = -\frac{hA_s}{\rho V c} dt$

Integrating from $t=0$ to $t$ and from $\theta_i = T_i - T_\infty$ to $\theta = T - T_\infty$:
$\int_{\theta_i}^{\theta} \frac{d\theta}{\theta} = -\int_{0}^{t} \frac{hA_s}{\rho V c} dt$

$\ln\left(\frac{\theta}{\theta_i}\right) = -\frac{hA_s}{\rho V c} t$

Exponentiating both sides:
$\frac{\theta}{\theta_i} = e^{-\frac{hA_s}{\rho V c} t}$

Substituting back $\theta = T - T_\infty$ and $\theta_i = T_i - T_\infty$:
$\frac{T(t) - T_\infty}{T_i - T_\infty} = e^{-\frac{hA_s}{\rho V c} t}$

This equation describes the temperature of the solid as a function of time under lumped system analysis.

**Time Constant ($\tau$):**
The term $\frac{\rho V c}{hA_s}$ is known as the time constant of the system, denoted by $\tau$.
$\tau = \frac{\rho V c}{hA_s}$

The equation can be rewritten as:
$\frac{T(t) - T_\infty}{T_i - T_\infty} = e^{-t/\tau}$

The time constant represents the time required for the temperature difference to decrease to $1/e$ (approximately 36.8%) of its initial value.

**Example (Sachdeva, 2022, Chapter 7):**
A small aluminum ball ($k = 205 \, W/m \cdot K$, $\rho = 2700 \, kg/m^3$, $c = 900 \, J/kg \cdot K$) of diameter $2$ cm is initially at $900^\circ C$. It is suddenly dropped into an oil bath at $100^\circ C$ with a convective heat transfer coefficient of $h = 50 \, W/m^2 \cdot K$. Determine the time required for the ball to cool to $150^\circ C$.

*   **Calculate Characteristic Length ($L_c$):**
    The volume of the sphere is $V = \frac{4}{3}\pi r^3 = \frac{4}{3}\pi (0.01 m)^3$.
    The surface area of the sphere is $A_s = 4\pi r^2 = 4\pi (0.01 m)^2$.
    $L_c = \frac{V}{A_s} = \frac{\frac{4}{3}\pi r^3}{4\pi r^2} = \frac{r}{3} = \frac{0.01 m}{3} \approx 0.00333 \, m$.

*   **Calculate Biot Number ($Bi$):**
    $Bi = \frac{hL_c}{k} = \frac{(50 \, W/m^2 \cdot K)(0.00333 \, m)}{205 \, W/m \cdot K} \approx 0.000815$

*   **Check Lumped System Assumption:**
    Since $Bi \approx 0.000815 < 0.1$, the lumped system analysis is valid.

*   **Calculate Time Constant ($\tau$):**
    $\tau = \frac{\rho V c}{hA_s} = \frac{L_c \rho c}{h} = \frac{(0.00333 \, m)(2700 \, kg/m^3)(900 \, J/kg \cdot K)}{50 \, W/m^2 \cdot K} \approx 162.18 \, s$

*   **Calculate Time ($t$):**
    $\frac{T(t) - T_\infty}{T_i - T_\infty} = e^{-t/\tau}$
    $\frac{150 - 100}{900 - 100} = e^{-t/162.18}$
    $\frac{50}{800} = e^{-t/162.18}$
    $0.0625 = e^{-t/162.18}$
    $\ln(0.0625) = -\frac{t}{162.18}$
    $-2.7726 = -\frac{t}{162.18}$
    $t = 2.7726 \times 162.18 \approx 449.5 \, s$

**Important Points to Remember (Lumped System Analysis):**
*   Valid when internal resistance is negligible ($Bi < 0.1$).
*   Temperature within the solid is assumed to be uniform at any given time.
*   Governing equation: $\frac{T(t) - T_\infty}{T_i - T_\infty} = e^{-t/\tau}$.
*   Time constant $\tau = \frac{\rho V c}{hA_s}$ indicates how quickly the object cools or heats up.

### 2. Transient Heat Conduction Analysis of Bodies with Non-negligible Internal Temperature Gradient

**Introduction:**
When the Biot number is greater than or equal to 0.1 ($Bi \geq 0.1$), the internal temperature gradients within the solid are significant, and the lumped system analysis is no longer valid. In such cases, the full partial differential equation (PDE) of heat conduction must be solved.

**The Heat Conduction Equation:**
The general unsteady-state heat conduction equation in Cartesian coordinates is:

$\frac{\partial T}{\partial t} = \alpha \left( \frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2} \right) + \frac{q_g}{\rho c}$

where:
*   $T(x, y, z, t)$ is the temperature as a function of position and time.
*   $\alpha = \frac{k}{\rho c}$ is the thermal diffusivity of the material ($m^2/s$).
*   $q_g$ is the volumetric heat generation rate ($W/m^3$).

For pure conduction without internal heat generation in one dimension:
$\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$

**Solving the PDE:**
Solving these PDEs typically involves:

*   **Initial Condition (IC):** Specifies the temperature distribution at $t=0$.
    $T(x, y, z, 0) = T_i(x, y, z)$

*   **Boundary Conditions (BCs):** Specify the temperature or heat flux at the boundaries of the body. Common BCs include:
    *   **Dirichlet (Type 1):** Temperature specified at the boundary. $T(x, y, z, t) = T_s(x, y, z, t)$
    *   **Neumann (Type 2):** Heat flux specified at the boundary. $-k \frac{\partial T}{\partial n} = q''_s(x, y, z, t)$ (where $n$ is the outward normal)
    *   **Robin (Type 3) / Convective:** Heat transfer by convection at the boundary. $-k \frac{\partial T}{\partial n} = h(T_s - T_\infty)$

**Methods of Solution:**

1.  **Analytical Solutions:**
    *   **Separation of Variables:** Applicable for simple geometries (slab, cylinder, sphere) with constant boundary conditions and initial uniform temperature. This method leads to solutions in the form of infinite series (e.g., Fourier series).
    *   **Integral Transform Techniques:** Useful for more complex geometries and boundary conditions.
    *   **Duhamel's Theorem:** Used to solve problems with time-varying boundary conditions by building upon solutions for constant boundary conditions.

2.  **Numerical Solutions:**
    *   **Finite Difference Method (FDM):** The domain is discretized into a grid, and the derivatives in the PDE are approximated by finite differences. This converts the PDE into a system of algebraic equations that can be solved iteratively.
        *   **Explicit Method:** Easier to implement but may require very small time steps for stability (CFL condition).
        *   **Implicit Method:** More stable and allows larger time steps but requires solving a system of linear equations at each time step.
    *   **Finite Element Method (FEM):** The domain is divided into smaller elements, and the solution is approximated within each element using shape functions. This method is very versatile for complex geometries and boundary conditions.

**Example: Transient Conduction in a Plane Wall (P.K. Nag, 2011, Chapter 5)**
Consider a plane wall of thickness $2L$ initially at a uniform temperature $T_i$. At time $t=0$, the surfaces at $x=-L$ and $x=+L$ are suddenly exposed to a convection environment at $T_\infty$ with a heat transfer coefficient $h$.

The governing PDE is:
$\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$, for $-L < x < L$, $t > 0$

The initial condition is:
$T(x, 0) = T_i$

The boundary conditions are:
*   At $x = -L$: $-k \frac{\partial T}{\partial x} \Big|_{x=-L} = h(T(-L, t) - T_\infty)$
*   At $x = +L$: $-k \frac{\partial T}{\partial x} \Big|_{x=+L} = h(T(L, t) - T_\infty)$

For symmetrical heating/cooling, we can consider only half of the wall ($0 \leq x \leq L$) with BCs:
*   $T(x, 0) = T_i$
*   $\frac{\partial T}{\partial x} \Big|_{x=0} = 0$ (Insulated boundary due to symmetry)
*   $-k \frac{\partial T}{\partial x} \Big|_{x=L} = h(T(L, t) - T_\infty)$

**Dimensionless Parameters:**
To generalize the solution and reduce the number of parameters, we introduce dimensionless variables:
*   Dimensionless Temperature: $\theta_D = \frac{T - T_\infty}{T_i - T_\infty}$
*   Dimensionless Time (Fourier Number, Fo): $Fo = \frac{\alpha t}{L^2}$
*   Biot Number: $Bi = \frac{hL}{k}$ (where $L$ is half the wall thickness for this case)

The PDE becomes:
$\frac{\partial \theta_D}{\partial Fo} = \frac{\partial^2 \theta_D}{\partial (x/L)^2}$

The analytical solution for this problem is an infinite series:
$\theta_D(x, Fo) = \sum_{n=0}^{\infty} A_n \cos(\lambda_n \frac{x}{L}) e^{-\lambda_n^2 Fo}$

where $\lambda_n$ are the positive roots of the transcendental equation:
$\lambda_n \tan(\lambda_n) = Bi$

And $A_n = \frac{4 \sin(\lambda_n)}{2\lambda_n + \sin(2\lambda_n)}$.

**Practical Implications of Solutions:**
*   **Heisler Charts (Cengel & Ghajar, 2020, Chapter 4):** For simple geometries (plane wall, cylinder, sphere) subjected to convection, graphical solutions called Heisler charts are available. These charts provide the centerline temperature, center temperature, and the temperature at a specific location as a function of the Biot number and Fourier number.
    *   The charts are typically plotted as $\frac{T_0 - T_\infty}{T_i - T_\infty}$ vs. $Fo$ for different values of $Bi$. ($T_0$ is the center temperature).
    *   To use Heisler charts, one needs to calculate $Bi$ and $Fo$ and identify the relevant chart for the geometry and desired location.

*   **Semi-infinite Solid Analysis:** For bodies where the heat transfer occurs over a short period such that the temperature changes are significant only near the surface, and the interior of the body remains at its initial temperature, the solid can be treated as semi-infinite.
    *   The governing equation is still $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$.
    *   The boundary condition at the infinite depth is $T(x \to \infty, t) = T_i$.
    *   The solutions involve the **error function (erf)**. For a sudden change in surface temperature from $T_i$ to $T_s$:
        $\frac{T(x, t) - T_i}{T_s - T_i} = \text{erfc}\left(\frac{x}{2\sqrt{\alpha t}}\right)$
        where $\text{erfc}(u) = 1 - \text{erf}(u) = \frac{2}{\sqrt{\pi}} \int_{u}^{\infty} e^{-s^2} ds$.
    *   The characteristic length for this analysis is $\sqrt{\alpha t}$.

**Important Points to Remember (Non-negligible Gradients):**
*   Required when $Bi \geq 0.1$.
*   Involves solving the transient heat conduction PDE with appropriate ICs and BCs.
*   Solutions can be analytical (series solutions) or numerical (FDM, FEM).
*   Heisler charts provide graphical solutions for common geometries.
*   The concept of thermal diffusivity ($\alpha$) is crucial.
*   Semi-infinite solid analysis is applicable when heat penetration depth is small.

### Practice Questions and Exercises:

**Question 1 (Lumped System Analysis):**
A steel ball bearing ($k=45 \, W/m \cdot K$, $\rho=7800 \, kg/m^3$, $c=470 \, J/kg \cdot K$) with a diameter of $2.5 \, cm$ is heated to $800^\circ C$ and then cooled by being immersed in oil at $40^\circ C$. The convective heat transfer coefficient is $h=90 \, W/m^2 \cdot K$.

(a) Calculate the Biot number and determine if lumped system analysis is appropriate.
(b) Calculate the time required for the ball bearing to cool to $100^\circ C$.

**Answer 1:**
(a) $L_c = r/3 = (0.0125 \, m)/3 \approx 0.004167 \, m$.
$Bi = \frac{hL_c}{k} = \frac{(90 \, W/m^2 \cdot K)(0.004167 \, m)}{45 \, W/m \cdot K} \approx 0.00833$.
Since $Bi < 0.1$, lumped system analysis is appropriate.

(b) $\tau = \frac{\rho V c}{hA_s} = \frac{L_c \rho c}{h} = \frac{(0.004167 \, m)(7800 \, kg/m^3)(470 \, J/kg \cdot K)}{90 \, W/m^2 \cdot K} \approx 170.6 \, s$.
$\frac{T(t) - T_\infty}{T_i - T_\infty} = e^{-t/\tau}$
$\frac{100 - 40}{800 - 40} = e^{-t/170.6}$
$\frac{60}{760} = e^{-t/170.6}$
$0.0789 \approx e^{-t/170.6}$
$\ln(0.0789) \approx -\frac{t}{170.6}$
$-2.539 \approx -\frac{t}{170.6}$
$t \approx 2.539 \times 170.6 \approx 433.1 \, s$.

**Question 2 (Semi-infinite Solid):**
A large mild steel plate ($k=45 \, W/m \cdot K$, $\alpha=1.2 \times 10^{-5} \, m^2/s$) is initially at $20^\circ C$. Its surface is suddenly exposed to a heat flux of $2000 \, W/m^2$. Calculate the temperature at a depth of $1 \, cm$ after $10$ minutes.

**Answer 2:**
This is a semi-infinite solid problem with a specified heat flux boundary condition. The general solution for a step heat flux $q''_0$ applied at $t=0$ is:
$T(x, t) - T_i = \frac{q''_0}{k} \sqrt{\frac{\alpha t}{\pi}} e^{-x^2/(4\alpha t)} - \frac{q''_0 x}{k} \text{erfc}\left(\frac{x}{2\sqrt{\alpha t}}\right)$

Given:
$T_i = 20^\circ C$
$q''_0 = 2000 \, W/m^2$
$k = 45 \, W/m \cdot K$
$\alpha = 1.2 \times 10^{-5} \, m^2/s$
$t = 10 \, \text{minutes} = 600 \, s$
$x = 1 \, cm = 0.01 \, m$

Calculate intermediate terms:
$\frac{q''_0}{k} = \frac{2000}{45} \approx 44.44 \, K/W \cdot m$
$\sqrt{\alpha t} = \sqrt{(1.2 \times 10^{-5} \, m^2/s)(600 \, s)} = \sqrt{0.0072} \, m \approx 0.08485 \, m$
$\frac{x}{\sqrt{\alpha t}} = \frac{0.01 \, m}{0.08485 \, m} \approx 0.1178$
$\frac{x}{2\sqrt{\alpha t}} = \frac{0.1178}{2} \approx 0.0589$
$\text{erfc}(0.0589) \approx 0.9347$ (from error function tables or calculator)
$e^{-x^2/(4\alpha t)} = e^{-(0.1178)^2/4} = e^{-0.0138784/4} = e^{-0.0034696} \approx 0.9965$

Substitute into the equation:
$T(0.01, 600) - 20 = (44.44 \, K/W \cdot m) \sqrt{0.0072} \, m \times 0.9965 - (44.44 \, K/W \cdot m) (0.01 \, m) \times 0.9347$
$T(0.01, 600) - 20 \approx (44.44)(0.08485)(0.9965) - (44.44)(0.01)(0.9347)$
$T(0.01, 600) - 20 \approx 3.772 - 0.415$
$T(0.01, 600) - 20 \approx 3.357$
$T(0.01, 600) \approx 23.36 \, ^\circ C$

### Alignment with Course Outcomes:

*   **CO1: To understand and apply the principles of heat conduction in engineering problems (Knowledge Level: K3)**
    *   Lumped system analysis involves applying the energy balance principle and understanding the role of Biot number.
    *   Transient analysis with non-negligible gradients requires understanding the heat conduction PDE and its boundary/initial conditions, and applying solution methods (analytical or numerical).

*   **CO2: To analyse mechanisms of natural and forced heat convection and understand the factors influencing the design of heat transfer equipment. (Knowledge Level: K4)**
    *   Convection coefficient ($h$) is a critical parameter in both lumped system analysis and transient analysis (boundary conditions). Understanding how $h$ affects the transient response is key to designing effective heat transfer equipment.

*   **CO3: To understand the principles of thermal radiation and apply the principles for radiation shielding (Knowledge Level: K3)**
    *   While this topic focuses on conduction, the context of transient heat transfer often involves convection and sometimes radiation. For example, an object cooling in air will experience all three modes. Understanding conduction is foundational for analyzing combined modes.

*   **CO4: To understand the principles modern cooling techniques and solve mass transfer problems using correlations. (Knowledge Level: K3)**
    *   Transient heat transfer is fundamental to many modern cooling techniques (e.g., rapid cooling of components). Understanding the rate of heat removal (governed by transient conduction) is crucial.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### Textbooks and References Used:

*   **Sachdeva, R. C.** (2022). *Fundamentals of Engineering Heat and Mass Transfer*.
*   **Nag, P. K.** (2011). *Heat and Mass Transfer Elements*.
*   **Cengel, Y. A., & Ghajar, A. J.** (2020). *Heat and Mass Transfer – Fundamental and Application*.
*   **Sukhatme, S. P.** (2005). *A Text Book on Heat Transfer*.

*(Note: Specific page numbers or chapter references would be included in a formal course note if provided by the instructor. The content above reflects the typical treatment of these topics in the cited textbooks.)*