---
title: "Modeling of LTI systems:  Electrical, translational and rotational mechanical systems, DC servo-motor"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Frequency domain characterization of Signals and Systems: Fourier transform: Existence "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361d8"
status: "completed"
scrapedAt: "2026-05-23T16:23:47.695Z"
---
# Signals and Systems: Module 2 - Frequency Domain Characterization & Fourier Transform: Existence

## Topic: Modeling of LTI Systems (Electrical, Mechanical, DC Servo-Motor)

**Course Outcomes Alignment:**
* **CO1:** (K2) Represent continuous and discrete time signals in time domain and perform various mathematical operations. (While this topic focuses on systems, understanding signal behavior within these systems is crucial, aligning with CO1's foundation.)
* **CO2:** (K3) Represent continuous time signals and systems in frequency domain. (This is the core of the module, and modeling systems is the precursor to frequency domain analysis using tools like the Fourier Transform.)
* **CO4:** (K3) Analyze the stability of continuous time dynamical systems. (Accurate system modeling is essential for stability analysis, a key aspect of system understanding.)

**Textbook References:**
* Signals and Systems by Simon Haykin, Barry Van Veen (Wiley, 2nd Edition, 2007) - Chapters on System Modeling and Frequency Domain Analysis.
* Control Systems Engineering by Norman S. Nise (Wiley, 5th Edition, 2009) - Chapters on First-Order and Second-Order Systems, Modeling Mechanical Systems.

**Reference Book References:**
* Signals and Systems by Oppenheim A.V., Willsky A.S. & Nawab S.H. (Prentice Hall, 2nd Edition, 2015) - Chapters on System Representation and Modeling.
* Modern Control Systems by Dorf R. C., (Bishop R. H Pearson Education India, 12th Edition, 2013) - Chapters on System Modeling and Transfer Functions.

---

### 1. Introduction to Linear Time-Invariant (LTI) Systems Modeling

*   **Definition of LTI Systems:** A system is LTI if it satisfies the properties of linearity and time-invariance.
    *   **Linearity:**
        *   Additivity: $T\{x_1(t) + x_2(t)\} = T\{x_1(t)\} + T\{x_2(t)\}$ (Response to sum of inputs is sum of responses)
        *   Homogeneity (Scaling): $T\{ax(t)\} = aT\{x(t)\}$ (Response to scaled input is scaled response)
    *   **Time-Invariance:** $T\{x(t - t_0)\} = y(t - t_0)$ (If input is shifted in time, output is shifted by the same amount)
*   **Why Model LTI Systems?**
    *   To predict system behavior for given inputs.
    *   To design controllers for desired system performance.
    *   To analyze system properties like stability, transient response, and steady-state response.
    *   To understand how systems transform signals.
*   **Modeling Approach:**
    *   **Physics-Based Modeling:** Using fundamental physical laws (e.g., Kirchhoff's laws, Newton's laws) to derive differential equations that describe the system's behavior.
    *   **Block Diagrams:** Visual representation of system components and their interconnections.
    *   **Transfer Functions:** Mathematical representation of the input-output relationship in the frequency domain (Laplace Transform or Fourier Transform), which is crucial for CO2.

---

### 2. Modeling of Electrical Systems

Electrical systems are commonly modeled using Kirchhoff's laws.

#### 2.1. Kirchhoff's Laws
*   **Kirchhoff's Current Law (KCL):** The algebraic sum of currents entering a node is zero.
*   **Kirchhoff's Voltage Law (KVL):** The algebraic sum of voltages around any closed loop is zero.

#### 2.2. Basic Electrical Components and their Relationships
*   **Resistor (R):** $v(t) = R i(t)$
    *   Voltage is proportional to current.
*   **Inductor (L):** $v(t) = L \frac{di(t)}{dt}$
    *   Voltage is proportional to the rate of change of current.
*   **Capacitor (C):** $i(t) = C \frac{dv(t)}{dt}$ or $v(t) = \frac{1}{C} \int i(t) dt$
    *   Current is proportional to the rate of change of voltage.
    *   Voltage is proportional to the integral of current.

#### 2.3. Modeling Examples

**Example 2.3.1: Series RL Circuit**

Consider a series RL circuit with a voltage source $v_{in}(t)$ and output voltage $v_{out}(t)$ across the resistor.

*   **KVL:** $v_{in}(t) = R i(t) + L \frac{di(t)}{dt}$
*   **Output:** $v_{out}(t) = R i(t)$
*   **Expressing output in terms of input:** Substitute $i(t) = \frac{v_{out}(t)}{R}$ into the KVL equation:
    $v_{in}(t) = R \left(\frac{v_{out}(t)}{R}\right) + L \frac{d}{dt}\left(\frac{v_{out}(t)}{R}\right)$
    $v_{in}(t) = v_{out}(t) + \frac{L}{R} \frac{dv_{out}(t)}{dt}$

*   **Differential Equation Form:** $\frac{L}{R} \frac{dv_{out}(t)}{dt} + v_{out}(t) = v_{in}(t)$

*   **Transfer Function (using Laplace Transform):** Taking the Laplace transform (assuming zero initial conditions) for $s$:
    $\frac{L}{R} s V_{out}(s) + V_{out}(s) = V_{in}(s)$
    $V_{out}(s) \left(\frac{L}{R} s + 1\right) = V_{in}(s)$
    $H(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{1}{\frac{L}{R} s + 1} = \frac{R}{Ls + R}$
    This is a first-order system.

**Example 2.3.2: Series RLC Circuit**

Consider a series RLC circuit with a voltage source $v_{in}(t)$ and output voltage $v_{out}(t)$ across the resistor.

*   **KVL:** $v_{in}(t) = R i(t) + L \frac{di(t)}{dt} + v_C(t)$
*   **Component Relationships:**
    *   $v_R(t) = R i(t)$
    *   $v_L(t) = L \frac{di(t)}{dt}$
    *   $i(t) = C \frac{dv_C(t)}{dt}$
*   **Output:** $v_{out}(t) = v_R(t) = R i(t)$
*   **Expressing output in terms of input:** Substitute $i(t) = \frac{v_{out}(t)}{R}$ and $\frac{di(t)}{dt} = \frac{1}{R}\frac{dv_{out}(t)}{dt}$ and $v_C(t) = \int i(t) dt = \int \frac{v_{out}(t)}{R} dt$ into the KVL equation:
    $v_{in}(t) = R \left(\frac{v_{out}(t)}{R}\right) + L \left(\frac{1}{R}\frac{dv_{out}(t)}{dt}\right) + \frac{1}{C} \int \frac{v_{out}(t)}{R} dt$
    $v_{in}(t) = v_{out}(t) + \frac{L}{R} \frac{dv_{out}(t)}{dt} + \frac{1}{RC} \int v_{out}(t) dt$

*   **Differential Equation Form:** To get a standard differential equation, differentiate with respect to time:
    $\frac{dv_{in}(t)}{dt} = \frac{dv_{out}(t)}{dt} + \frac{L}{R} \frac{d^2v_{out}(t)}{dt^2} + \frac{1}{RC} v_{out}(t)$
    Rearranging: $\frac{L}{R} \frac{d^2v_{out}(t)}{dt^2} + \frac{dv_{out}(t)}{dt} + \frac{1}{RC} v_{out}(t) = \frac{dv_{in}(t)}{dt}$

*   **Transfer Function:** Taking Laplace Transform:
    $\frac{L}{R} s^2 V_{out}(s) + s V_{out}(s) + \frac{1}{RC} V_{out}(s) = s V_{in}(s)$
    $V_{out}(s) \left(\frac{L}{R} s^2 + s + \frac{1}{RC}\right) = s V_{in}(s)$
    $H(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{s}{\frac{L}{R} s^2 + s + \frac{1}{RC}} = \frac{sRC}{Ls^2RC + RCs + 1}$
    Dividing by $L/R$: $H(s) = \frac{sC}{s^2C + \frac{R}{L}sC + \frac{1}{L}} = \frac{sC}{s^2 + \frac{R}{L}s + \frac{1}{LC}}$
    This is a second-order system.

**Important Point:** The order of the differential equation corresponds to the order of the system and the degree of the denominator polynomial in the transfer function. This relates to CO4 (stability analysis).

---

### 3. Modeling of Translational Mechanical Systems

Translational mechanical systems are modeled using Newton's laws of motion.

#### 3.1. Newton's Laws of Motion
*   **Newton's Second Law:** The net force acting on an object is equal to its mass times its acceleration. $\Sigma F = ma(t)$
    *   $a(t) = \frac{d^2x(t)}{dt^2}$, where $x(t)$ is displacement.
    *   $\Sigma F = m \frac{d^2x(t)}{dt^2}$

#### 3.2. Basic Mechanical Components and their Relationships

*   **Mass (m):** Inertial element. Resists acceleration.
    *   Force required to accelerate a mass: $F_m(t) = m a(t) = m \frac{d^2x(t)}{dt^2}$
    *   Force is proportional to acceleration.
*   **Spring (k):** Elastic element. Stores potential energy.
    *   Force exerted by a spring: $F_s(t) = k x(t)$, where $x(t)$ is displacement from equilibrium.
    *   Force is proportional to displacement.
*   **Damper (b):** Dissipative element. Converts kinetic energy to heat.
    *   Force exerted by a damper: $F_d(t) = b v(t) = b \frac{dx(t)}{dt}$, where $v(t)$ is velocity.
    *   Force is proportional to velocity.

#### 3.3. Modeling Examples

**Example 3.3.1: Mass-Spring-Damper System**

Consider a mass $m$ attached to a spring with spring constant $k$ and a damper with damping coefficient $b$. An external force $F(t)$ is applied to the mass. We want to model the displacement $x(t)$ of the mass.

*   **Forces acting on the mass:**
    *   Applied force: $F(t)$ (Assume positive in the direction of positive $x$)
    *   Spring force: $-kx(t)$ (Opposes displacement)
    *   Damping force: $-b\frac{dx(t)}{dt}$ (Opposes velocity)
    *   Inertial force: $-m\frac{d^2x(t)}{dt^2}$ (Force required to accelerate the mass, acting in the opposite direction of acceleration if we consider it as an "inertial reaction force" when summing forces equal to zero in Newton's second law)

*   **Applying Newton's Second Law ($\Sigma F = ma$):** Sum of forces acting on the mass equals the mass times its acceleration.
    $F(t) - kx(t) - b\frac{dx(t)}{dt} = m \frac{d^2x(t)}{dt^2}$

*   **Differential Equation Form:** Rearranging the terms to standard form:
    $m \frac{d^2x(t)}{dt^2} + b \frac{dx(t)}{dt} + kx(t) = F(t)$

*   **Transfer Function:** Taking Laplace Transform (assuming zero initial conditions for $x(t)$ and $\frac{dx(t)}{dt}$):
    $m s^2 X(s) + b s X(s) + k X(s) = F(s)$
    $X(s) (m s^2 + b s + k) = F(s)$
    $H(s) = \frac{X(s)}{F(s)} = \frac{1}{m s^2 + b s + k}$

This is a second-order system, similar in form to the RLC circuit. The natural frequency and damping ratio can be extracted from the coefficients.

**Example 3.3.2: Mass and Spring System with Velocity Input**

Consider a mass $m$ attached to a spring with constant $k$. The other end of the spring is attached to a mechanism that imparts a velocity $v_{in}(t)$. We are interested in the displacement $x(t)$ of the mass.

*   Let the position of the mass be $x(t)$.
*   Let the velocity of the input mechanism be $v_{in}(t) = \frac{dx_{in}(t)}{dt}$.
*   The velocity of the mass is $v(t) = \frac{dx(t)}{dt}$.
*   The relative displacement of the spring is $(x(t) - x_{in}(t))$.
*   The force exerted by the spring on the mass is $F_s(t) = k(x(t) - x_{in}(t))$.
*   The velocity of the spring is $(v(t) - v_{in}(t))$.

*   **Applying Newton's Second Law:**
    $F_s(t) = m a(t)$
    $k(x_{in}(t) - x(t)) = m \frac{d^2x(t)}{dt^2}$ (Assuming $F_s$ acts in the direction of positive $x$ if $x_{in} > x$)

*   **Differential Equation Form:**
    $m \frac{d^2x(t)}{dt^2} + kx(t) = kx_{in}(t)$

*   **Transfer Function:** Taking Laplace Transform:
    $m s^2 X(s) + k X(s) = k X_{in}(s)$
    $X(s) (m s^2 + k) = k X_{in}(s)$
    $H(s) = \frac{X(s)}{X_{in}(s)} = \frac{k}{m s^2 + k}$

**Important Point:** Notice how the input is now a displacement $x_{in}(t)$. If the input was specified as velocity $v_{in}(t)$, the transfer function would change. $X_{in}(s) = \frac{V_{in}(s)}{s}$.
$H(s) = \frac{V_{in}(s)/s}{m s^2 + k} = \frac{V_{in}(s)}{s(m s^2 + k)}$. This shows how input type matters for the transfer function.

---

### 4. Modeling of Rotational Mechanical Systems

Rotational mechanical systems are modeled using analogous laws to translational systems, based on torque and angular momentum.

#### 4.1. Analogous Concepts
*   **Translational | Rotational**
*   Displacement ($x$) | Angular Displacement ($\theta$)
*   Velocity ($v = \frac{dx}{dt}$) | Angular Velocity ($\omega = \frac{d\theta}{dt}$)
*   Acceleration ($a = \frac{d^2x}{dt^2}$) | Angular Acceleration ($\alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2}$)
*   Force ($F$) | Torque ($T$)
*   Mass ($m$) | Moment of Inertia ($J$)
*   Spring Constant ($k$) | Torsional Spring Constant ($K$)
*   Damping Coefficient ($b$) | Viscous Damping Coefficient ($B$)

#### 4.2. Basic Rotational Components and their Relationships

*   **Moment of Inertia (J):** Rotational inertia. Resists angular acceleration.
    *   Torque required to angularly accelerate inertia: $T_J(t) = J \alpha(t) = J \frac{d^2\theta(t)}{dt^2}$
    *   Torque is proportional to angular acceleration.
*   **Torsional Spring (K):** Stores potential energy in twist.
    *   Torque exerted by a torsional spring: $T_K(t) = K \theta(t)$, where $\theta(t)$ is angular displacement from equilibrium.
    *   Torque is proportional to angular displacement.
*   **Viscous Damper (B):** Dissipates rotational kinetic energy.
    *   Torque exerted by a damper: $T_B(t) = B \omega(t) = B \frac{d\theta(t)}{dt}$, where $\omega(t)$ is angular velocity.
    *   Torque is proportional to angular velocity.

#### 4.3. Modeling Examples

**Example 4.3.1: Rotational Mass-Spring-Damper System**

Consider a rigid body with moment of inertia $J$ attached to a torsional spring with constant $K$ and a viscous damper with coefficient $B$. An external torque $T(t)$ is applied. We want to model the angular displacement $\theta(t)$ of the body.

*   **Torques acting on the body:**
    *   Applied torque: $T(t)$ (Assume positive in the direction of positive $\theta$)
    *   Spring torque: $-K\theta(t)$ (Opposes angular displacement)
    *   Damping torque: $-B\frac{d\theta(t)}{dt}$ (Opposes angular velocity)
    *   Inertial torque: $-J\frac{d^2\theta(t)}{dt^2}$

*   **Applying Analogous to Newton's Second Law (Sum of Torques = $J\alpha$):**
    $T(t) - K\theta(t) - B\frac{d\theta(t)}{dt} = J \frac{d^2\theta(t)}{dt^2}$

*   **Differential Equation Form:**
    $J \frac{d^2\theta(t)}{dt^2} + B \frac{d\theta(t)}{dt} + K\theta(t) = T(t)$

*   **Transfer Function:** Taking Laplace Transform (assuming zero initial conditions):
    $J s^2 \Theta(s) + B s \Theta(s) + K \Theta(s) = T(s)$
    $\Theta(s) (J s^2 + B s + K) = T(s)$
    $H(s) = \frac{\Theta(s)}{T(s)} = \frac{1}{J s^2 + B s + K}$

This is again a second-order system, structurally identical to the translational mass-spring-damper system.

**Example 4.3.2: DC Motor Speed Control (Simplified Rotational)**

A DC motor converts electrical energy into mechanical rotational energy. The angular velocity of the motor shaft $\omega(t)$ is often the output of interest.

*   **Electrical Side:** Voltage $v_a(t)$, armature resistance $R_a$, armature inductance $L_a$, back EMF $e_b(t)$.
    *   $v_a(t) = R_a i_a(t) + L_a \frac{di_a(t)}{dt} + e_b(t)$
    *   Back EMF is proportional to angular velocity: $e_b(t) = K_b \omega(t)$
*   **Mechanical Side:** Torque $T(t)$, moment of inertia $J$, damping $B$ (viscous friction).
    *   $T(t) = J \frac{d\omega(t)}{dt} + B \omega(t)$
*   **Motor Torque:** The torque produced by the motor is proportional to the armature current: $T(t) = K_t i_a(t)$, where $K_t$ is the motor torque constant.

*   **Modeling the system:**
    1.  **From Electrical to Torque:**
        $v_a(t) = R_a i_a(t) + L_a \frac{di_a(t)}{dt} + K_b \omega(t)$
        Substitute $i_a(t) = \frac{T(t)}{K_t}$ and $\frac{di_a(t)}{dt} = \frac{1}{K_t}\frac{dT(t)}{dt}$:
        $v_a(t) = R_a \frac{T(t)}{K_t} + L_a \frac{1}{K_t}\frac{dT(t)}{dt} + K_b \omega(t)$
        Multiply by $K_t$: $K_t v_a(t) = R_a T(t) + L_a \frac{dT(t)}{dt} + K_t K_b \omega(t)$

    2.  **From Torque to Speed:**
        $T(t) = J \frac{d\omega(t)}{dt} + B \omega(t)$

    3.  **Combining:** Substitute the expression for $T(t)$ from (2) into (1) or vice versa. A more common approach is to work with currents and torques as intermediate variables.
        Let's use Laplace Transforms for clarity.

*   **Transfer Function (Voltage to Angular Velocity):**
    *   From electrical side: $V_a(s) = R_a I_a(s) + L_a s I_a(s) + K_b \Omega(s)$
        $V_a(s) = (R_a + L_a s) I_a(s) + K_b \Omega(s)$
    *   Motor torque: $T(s) = K_t I_a(s)$  => $I_a(s) = \frac{T(s)}{K_t}$
    *   Substitute $I_a(s)$ into the electrical equation:
        $V_a(s) = (R_a + L_a s) \frac{T(s)}{K_t} + K_b \Omega(s)$
    *   From mechanical side: $T(s) = J s \Omega(s) + B \Omega(s)$
        $T(s) = (J s + B) \Omega(s)$
    *   Substitute $T(s)$ into the modified electrical equation:
        $V_a(s) = (R_a + L_a s) \frac{(J s + B) \Omega(s)}{K_t} + K_b \Omega(s)$
        $V_a(s) = \left[ \frac{(R_a + L_a s)(J s + B)}{K_t} + K_b \right] \Omega(s)$
        $V_a(s) = \left[ \frac{R_a J s + R_a B + L_a J s^2 + L_a B s}{K_t} + K_b \right] \Omega(s)$
        $V_a(s) = \left[ \frac{L_a J s^2 + (R_a J + L_a B) s + R_a B}{K_t} + K_b \right] \Omega(s)$

    *   The transfer function $H(s) = \frac{\Omega(s)}{V_a(s)}$ is:
        $H(s) = \frac{1}{\frac{L_a J}{K_t} s^2 + \frac{(R_a J + L_a B)}{K_t} s + \frac{R_a B}{K_t} + K_b}$

    *   **Simplified Transfer Function (Neglecting $L_a$ and $B$):** If we neglect armature inductance ($L_a \approx 0$) and damping ($B \approx 0$), the equations simplify significantly.
        *   $v_a(t) = R_a i_a(t) + K_b \omega(t)$
        *   $T(t) = J \frac{d\omega(t)}{dt}$
        *   $T(t) = K_t i_a(t)$

        Substituting $i_a(t) = T(t)/K_t$ into the voltage equation:
        $v_a(t) = R_a \frac{T(t)}{K_t} + K_b \omega(t)$
        Substitute $T(t) = J \frac{d\omega(t)}{dt}$:
        $v_a(t) = R_a \frac{J}{K_t} \frac{d\omega(t)}{dt} + K_b \omega(t)$

        **Simplified Transfer Function:**
        $\frac{J}{K_t} \frac{d\omega(t)}{dt} + K_b \omega(t) = v_a(t)$
        Taking Laplace Transform:
        $\frac{J}{K_t} s \Omega(s) + K_b \Omega(s) = V_a(s)$
        $\Omega(s) \left(\frac{J}{K_t} s + K_b \right) = V_a(s)$
        $H(s) = \frac{\Omega(s)}{V_a(s)} = \frac{1}{\frac{J}{K_t} s + K_b} = \frac{K_t}{J s + K_t K_b}$
        This simplified model is a first-order system.

**Important Point:** The DC servo-motor is a system that couples electrical and mechanical domains. Understanding these interdependencies is key to modeling. The simplification by neglecting certain parameters (like inductance or damping) is common and leads to lower-order models that are easier to analyze.

---

### 5. DC Servo-Motor Modeling (More Detailed Perspective)

The DC servo-motor is a prime example of an electromechanical system often studied in control systems.

#### 5.1. Components and Governing Equations

*   **Electrical System (Armature Control):**
    *   Applied armature voltage: $v_a(t)$
    *   Armature resistance: $R_a$
    *   Armature inductance: $L_a$
    *   Armature current: $i_a(t)$
    *   Back EMF constant: $K_b$
    *   Back EMF: $e_b(t) = K_b \omega(t)$
    *   KVL Equation: $v_a(t) = R_a i_a(t) + L_a \frac{di_a(t)}{dt} + e_b(t)$
        $v_a(t) = R_a i_a(t) + L_a \frac{di_a(t)}{dt} + K_b \omega(t)$

*   **Mechanical System:**
    *   Motor torque constant: $K_t$
    *   Motor torque: $T(t) = K_t i_a(t)$
    *   Load inertia: $J$
    *   Viscous damping coefficient: $B$
    *   Angular velocity: $\omega(t) = \frac{d\theta(t)}{dt}$
    *   Newton's Second Law for rotation: $T(t) = J \frac{d\omega(t)}{dt} + B \omega(t)$

#### 5.2. Block Diagram Representation

A block diagram can visually represent the relationships between these variables.

```
        +-------+     +-------+     +-------+
v_a(t) ->| 1/(Ra+L_a s)|->|  1/Kt |->| 1/(Js+B)|-> w(t)
        +-------+     +-------+     +-------+
           ^             |             ^
           |             |             |
           +-------------+-------------+
                         |
                       +---+
                       |Kb |
                       +---+
```
*(Note: This block diagram needs refinement to accurately show feedback. A more common representation involves the current influencing torque, and torque influencing speed, with back-EMF opposing voltage.)*

A more accurate block diagram showing the feedback loop for back EMF:

```
         +--------------------+      +-----------------+      +-----------------+
v_a(t) --| R_a + L_a s (Sum)  |--i_a(t)--| K_t             |--T(t)--| J s + B         |-- w(t)
         +--------+-----------+      +-----------------+      +-----------------+
                  ^                                                    |
                  |                                                    |
                  +---- K_b * w(t) (Feedback) -------------------------+
```
*   The output of the $(J s + B)$ block is $\omega(t)$.
*   The input to the $K_t$ block is $i_a(t)$.
*   The input to the $(R_a + L_a s)$ block is $v_a(t)$.
*   The back EMF $K_b \omega(t)$ is subtracted from $v_a(t)$ before entering the $(R_a + L_a s)$ block's effective input.

Let's derive the transfer function from this block diagram.
1.  $T(s) = (J s + B) \Omega(s)$
2.  $T(s) = K_t I_a(s) \implies I_a(s) = \frac{T(s)}{K_t}$
3.  $V_a(s) - K_b \Omega(s) = (R_a + L_a s) I_a(s)$
4.  Substitute (2) into (3): $V_a(s) - K_b \Omega(s) = (R_a + L_a s) \frac{T(s)}{K_t}$
5.  Substitute (1) into (4): $V_a(s) - K_b \Omega(s) = (R_a + L_a s) \frac{(J s + B) \Omega(s)}{K_t}$
6.  Rearrange to solve for $\frac{\Omega(s)}{V_a(s)}$:
    $V_a(s) = K_b \Omega(s) + \frac{(R_a + L_a s)(J s + B)}{K_t} \Omega(s)$
    $V_a(s) = \left[ K_b + \frac{(R_a + L_a s)(J s + B)}{K_t} \right] \Omega(s)$
    $H(s) = \frac{\Omega(s)}{V_a(s)} = \frac{1}{K_b + \frac{(R_a + L_a s)(J s + B)}{K_t}}$
    $H(s) = \frac{K_t}{K_t K_b + (R_a + L_a s)(J s + B)}$
    $H(s) = \frac{K_t}{K_t K_b + R_a J s + R_a B + L_a J s^2 + L_a B s}$
    $H(s) = \frac{K_t}{L_a J s^2 + (R_a J + L_a B) s + (R_a B + K_t K_b)}$

This is the complete second-order transfer function for the DC servo-motor.

#### 5.3. Simplified DC Servo-Motor Model (Armature Control)

As seen before, neglecting $L_a$ and $B$:
$H(s) = \frac{K_t}{J s + K_t K_b}$

This first-order model is often sufficient for many control applications.

**Important Point:** The parameters $K_t$ and $K_b$ are related. For SI units, $K_t = K_b$ (often denoted as $K_m$). The units must be consistent.

---

### 6. Fourier Transform and System Modeling (Connecting to Module 2)

Once systems are modeled using differential equations or transfer functions, we can analyze their behavior in the frequency domain using the Fourier Transform (and Laplace Transform). This is the core of Module 2.

*   **Frequency Response:** The Fourier Transform of the impulse response $h(t)$ of an LTI system gives its frequency response $H(j\omega)$:
    $H(j\omega) = \mathcal{F}\{h(t)\} = \int_{-\infty}^{\infty} h(t) e^{-j\omega t} dt$
*   **Transfer Function:** The transfer function $H(s)$ is the Laplace transform of the impulse response $h(t)$. The frequency response $H(j\omega)$ is obtained by substituting $s = j\omega$ into the transfer function $H(s)$.
*   **Impact of Modeling:** The accuracy of the system model directly impacts the accuracy of its frequency domain characterization. For example, the RLC circuit and mass-spring-damper system (translational and rotational) all result in second-order transfer functions, leading to similar frequency response characteristics (e.g., resonance).

---

### 7. Key Concepts and Definitions Recap

*   **LTI System:** Linearity + Time-Invariance.
*   **Modeling:** Deriving mathematical descriptions (differential equations, transfer functions) of physical systems.
*   **Electrical Components:** Resistor ($R$), Inductor ($L$), Capacitor ($C$). Governed by KVL/KCL.
*   **Translational Mechanical Components:** Mass ($m$), Spring ($k$), Damper ($b$). Governed by Newton's Laws.
*   **Rotational Mechanical Components:** Inertia ($J$), Torsional Spring ($K$), Damper ($B$). Governed by rotational equivalents of Newton's Laws.
*   **DC Servo-Motor:** Electromechanical system linking electrical voltage/current to mechanical torque/speed. Characterized by $R_a, L_a, K_b, K_t, J, B$.
*   **Transfer Function:** Ratio of output Laplace transform to input Laplace transform, assuming zero initial conditions. Essential for frequency domain analysis.
*   **Frequency Response:** The Fourier Transform of the impulse response, describing how a system amplifies or attenuates sinusoidal inputs at different frequencies.

---

### 8. Practice Questions

**Question 1:**
Derive the transfer function for a series RC circuit where the output voltage is taken across the capacitor, $v_{out}(t) = v_C(t)$, given an input voltage $v_{in}(t)$.
*   **Learning Outcome Addressed:** CO2 (Representing systems in frequency domain)

**Question 2:**
A mass $m$ is connected to a spring $k$. The other end of the spring is attached to a wall that moves with velocity $v_{wall}(t)$. Derive the differential equation and the transfer function relating the wall's velocity to the mass's displacement $x(t)$.
*   **Learning Outcome Addressed:** CO1 (Signal representation within system), CO2 (System modeling)

**Question 3:**
Consider a simplified DC servo-motor model where armature inductance ($L_a$) and viscous damping ($B$) are neglected. If the armature current is $i_a(t)$ and the angular velocity is $\omega(t)$, and the applied armature voltage is $v_a(t)$, derive the transfer function $\frac{\Omega(s)}{V_a(s)}$.
*   **Learning Outcome Addressed:** CO2 (System modeling)

**Question 4:**
A second-order mechanical system is described by the differential equation: $2 \frac{d^2x(t)}{dt^2} + 6 \frac{dx(t)}{dt} + 10x(t) = F(t)$.
What is the transfer function of this system, $H(s) = \frac{X(s)}{F(s)}$?
*   **Learning Outcome Addressed:** CO2 (System modeling)

---

### 9. Answers to Practice Questions

**Answer 1:**
*   **KVL:** $v_{in}(t) = R i(t) + v_C(t)$
*   **Component:** $i(t) = C \frac{dv_C(t)}{dt}$
*   **Output:** $v_{out}(t) = v_C(t)$
*   **Substitution:** $v_{in}(t) = R C \frac{dv_C(t)}{dt} + v_C(t)$
*   **Differential Equation:** $RC \frac{dv_{out}(t)}{dt} + v_{out}(t) = v_{in}(t)$
*   **Laplace Transform:** $RC s V_{out}(s) + V_{out}(s) = V_{in}(s)$
*   **Transfer Function:** $H(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{1}{RCs + 1}$

**Answer 2:**
*   Let $x(t)$ be the displacement of the mass.
*   The velocity of the wall is $v_{wall}(t)$.
*   The relative velocity of the spring is $v_{spring}(t) = \frac{dx(t)}{dt} - v_{wall}(t)$.
*   The force exerted by the spring on the mass is $F_s(t) = -k(x(t) - x_{wall}(t))$, where $x_{wall}(t)$ is the wall's displacement. $v_{wall}(t) = \frac{dx_{wall}(t)}{dt}$.
*   **Force on mass:** $F_s(t) = k(x_{wall}(t) - x(t))$
*   **Newton's Second Law:** $F_s(t) = m \frac{d^2x(t)}{dt^2}$
*   **Differential Equation:** $m \frac{d^2x(t)}{dt^2} = k(x_{wall}(t) - x(t))$
    $m \frac{d^2x(t)}{dt^2} + kx(t) = kx_{wall}(t)$
*   **Transfer Function:** Take Laplace Transform (assuming zero initial conditions for $x$ and its derivatives):
    $m s^2 X(s) + k X(s) = k X_{wall}(s)$
    $X(s) (m s^2 + k) = k X_{wall}(s)$
    Since $V_{wall}(s) = s X_{wall}(s)$, we have $X_{wall}(s) = \frac{V_{wall}(s)}{s}$.
    $X(s) (m s^2 + k) = k \frac{V_{wall}(s)}{s}$
    $H(s) = \frac{X(s)}{V_{wall}(s)} = \frac{k}{s(m s^2 + k)}$

**Answer 3:**
From the simplified model derivation in section 5.3:
$H(s) = \frac{\Omega(s)}{V_a(s)} = \frac{K_t}{J s + K_t K_b}$

**Answer 4:**
The differential equation is $2 \frac{d^2x(t)}{dt^2} + 6 \frac{dx(t)}{dt} + 10x(t) = F(t)$.
Taking the Laplace Transform:
$2 s^2 X(s) + 6 s X(s) + 10 X(s) = F(s)$
$X(s) (2 s^2 + 6 s + 10) = F(s)$
The transfer function is:
$H(s) = \frac{X(s)}{F(s)} = \frac{1}{2 s^2 + 6 s + 10}$

---

### 10. Important Points to Remember

*   **Analogy:** Recognize the strong analogies between electrical, translational mechanical, and rotational mechanical systems (e.g., voltage-current vs. force-velocity vs. torque-angular velocity; capacitance vs. mass vs. inertia).
*   **System Order:** The order of the differential equation or the highest power of 's' in the denominator of the transfer function determines the system's order. This is critical for stability and response analysis (CO4).
*   **Component Behavior:** Understand the fundamental voltage-current (or force-velocity/torque-angular velocity) relationships for basic passive components ($R, L, C, m, k, b, J, K, B$).
*   **Laplace Transform:** The Laplace transform is the primary tool used to convert differential equations into algebraic equations, allowing for the straightforward derivation of transfer functions.
*   **DC Motor Parameters:** Be aware of the key parameters of a DC servo-motor and how they contribute to the overall system dynamics. Simplifications are often made to reduce model complexity.
*   **Foundation for Frequency Domain:** System modeling is the essential first step before any frequency domain analysis (Fourier Transform, Bode Plots, etc.) can be performed (CO2).

---
This comprehensive study note covers the modeling of various LTI systems, laying the groundwork for subsequent frequency domain analysis using the Fourier Transform. It aligns with the specified learning outcomes and references the provided textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
