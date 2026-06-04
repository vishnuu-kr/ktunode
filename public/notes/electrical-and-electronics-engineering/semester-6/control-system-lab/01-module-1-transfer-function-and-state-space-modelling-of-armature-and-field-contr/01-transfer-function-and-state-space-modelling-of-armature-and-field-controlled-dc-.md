---
title: "Transfer Function and State Space Modelling of Armature and Field Controlled DC Motor."
subject: "CONTROL SYSTEM LAB"
module: "Module 1: Transfer Function and State Space Modelling of Armature and Field Controlled DC Motor."
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36752"
status: "completed"
scrapedAt: "2026-05-23T16:25:01.433Z"
---
# CONTROL SYSTEM LAB - MODULE 1: TRANSFER FUNCTION AND STATE SPACE MODELLING OF DC MOTOR

## Topic: Transfer Function and State Space Modelling of Armature and Field Controlled DC Motor

This module focuses on developing mathematical models for DC motors, both in the time domain (state-space) and the frequency domain (transfer function). Understanding these models is crucial for analyzing the behavior of DC motors and designing controllers for them.

---

### **1. Introduction to DC Motors**

*   **What is a DC Motor?** A DC motor is an electromechanical device that converts electrical energy into mechanical energy, typically in the form of rotational motion.
*   **Key Components:**
    *   **Armature:** The rotating part of the motor, usually a coil of wire wound on a cylindrical core. It experiences a torque due to the interaction of magnetic fields and current.
    *   **Field Winding:** A stationary winding that produces a magnetic field. The strength of this magnetic field can be controlled.
    *   **Commutator and Brushes:** Mechanical components that reverse the direction of current in the armature coils as the motor rotates, ensuring continuous rotation in one direction.
*   **Princ of Operation:** The torque produced in a DC motor is proportional to the product of the armature current and the field flux.
    *   $T_m \propto \phi I_a$
    *   Where:
        *   $T_m$: Motor torque
        *   $\phi$: Field flux
        *   $I_a$: Armature current

---

### **2. Types of DC Motors (Based on Field Winding Connection)**

*   **Shunt DC Motor:** Field winding is connected in parallel with the armature winding.
*   **Series DC Motor:** Field winding is connected in series with the armature winding.
*   **Compound DC Motor:** Has both series and shunt field windings.
*   **Separately Excited DC Motor:** The field winding and armature winding are excited by independent DC sources. This offers greater control over speed and torque.

**For this module, we will primarily focus on separately excited DC motors, as they are commonly used for control system analysis and provide a clear basis for understanding armature and field control.**

---

### **3. Modelling of Separately Excited DC Motor**

We will derive the mathematical models for both armature control and field control.

#### **3.1. Armature Controlled DC Motor**

In armature control, the field current and hence the field flux are kept constant. The motor speed is controlled by varying the armature voltage.

**Assumptions:**
*   The field flux $\phi$ is constant.
*   Linear magnetic circuit.

**Electrical Subsystem (Armature Circuit):**
*   Apply Kirchhoff's Voltage Law (KVL) to the armature circuit.
*   $v_a(t) = R_a i_a(t) + L_a \frac{di_a(t)}{dt} + v_b(t)$
    *   $v_a(t)$: Applied armature voltage
    *   $R_a$: Armature resistance
    *   $i_a(t)$: Armature current
    *   $L_a$: Armature inductance
    *   $v_b(t)$: Back EMF (electromotive force)

*   **Back EMF ($v_b(t)$):** The back EMF is proportional to the motor speed $\omega(t)$ and the field flux $\phi$. Since $\phi$ is constant in armature control, $v_b(t) = K_b \omega(t)$.
    *   $K_b$: Back EMF constant.

*   Substituting back EMF into the KVL equation:
    *   $v_a(t) = R_a i_a(t) + L_a \frac{di_a(t)}{dt} + K_b \omega(t)$  **(Equation 1)**

**Mechanical Subsystem:**
*   The torque produced by the motor ($T_m$) is proportional to the armature current ($i_a$) and the constant field flux ($\phi$).
*   $T_m(t) = K_t \phi i_a(t)$
    *   $K_t$: Torque constant.
    *   Since $\phi$ is constant, we can combine $K_t \phi$ into a single motor torque constant, $K_m$.
    *   $T_m(t) = K_m i_a(t)$  **(Equation 2)**

*   This motor torque ($T_m$) is used to overcome the inertia of the rotor ($J$) and the viscous friction ($B$).
*   Apply Newton's second law for rotation: $T_m = J \frac{d\omega(t)}{dt} + B \omega(t) + T_L(t)$
    *   $J$: Moment of inertia of the rotor and load
    *   $B$: Viscous friction coefficient
    *   $T_L(t)$: Load torque (disturbance)

*   Substituting Equation 2 into the mechanical equation:
    *   $K_m i_a(t) = J \frac{d\omega(t)}{dt} + B \omega(t) + T_L(t)$  **(Equation 3)**

**Transfer Function Modelling (Armature Control):**

**Objective:** Find the transfer function from armature voltage $V_a(s)$ to angular velocity $\Omega(s)$. We will assume zero initial conditions and consider the load torque $T_L(s)$ as a disturbance.

*   Take the Laplace transform of Equation 1 (assuming $T_L(t) = 0$ for now):
    *   $V_a(s) = R_a I_a(s) + s L_a I_a(s) + K_b \Omega(s)$
    *   $V_a(s) = (R_a + s L_a) I_a(s) + K_b \Omega(s)$  **(Equation 1a)**

*   From Equation 1a, express $I_a(s)$ in terms of $V_a(s)$ and $\Omega(s)$:
    *   $(R_a + s L_a) I_a(s) = V_a(s) - K_b \Omega(s)$
    *   $I_a(s) = \frac{V_a(s) - K_b \Omega(s)}{R_a + s L_a}$

*   Take the Laplace transform of Equation 3 (assuming $T_L(t) = 0$):
    *   $K_m I_a(s) = J s \Omega(s) + B \Omega(s)$
    *   $K_m I_a(s) = (J s + B) \Omega(s)$  **(Equation 3a)**

*   Substitute the expression for $I_a(s)$ from Equation 1a into Equation 3a:
    *   $K_m \left( \frac{V_a(s) - K_b \Omega(s)}{R_a + s L_a} \right) = (J s + B) \Omega(s)$

*   $K_m V_a(s) - K_m K_b \Omega(s) = (R_a + s L_a)(J s + B) \Omega(s)$

*   $K_m V_a(s) = (R_a + s L_a)(J s + B) \Omega(s) + K_m K_b \Omega(s)$

*   $K_m V_a(s) = [(R_a + s L_a)(J s + B) + K_m K_b] \Omega(s)$

*   $K_m V_a(s) = [R_a J s + R_a B + s^2 L_a J + s L_a B + K_m K_b] \Omega(s)$

*   $K_m V_a(s) = [s^2 L_a J + s (R_a J + L_a B) + (R_a B + K_m K_b)] \Omega(s)$

*   The transfer function from $V_a(s)$ to $\Omega(s)$ is $G(s) = \frac{\Omega(s)}{V_a(s)}$:
    *   $G(s) = \frac{K_m}{s^2 L_a J + s (R_a J + L_a B) + (R_a B + K_m K_b)}$

*   **Standard Form of the Transfer Function:**
    *   Divide numerator and denominator by $L_a J$:
        *   $G(s) = \frac{\frac{K_m}{L_a J}}{s^2 + s \left(\frac{R_a}{L_a} + \frac{B}{J}\right) + \frac{R_a B + K_m K_b}{L_a J}}$

    *   This is a second-order system. The general form of a second-order system is:
        *   $G(s) = \frac{K}{(s/\omega_n)^2 + 2\zeta(s/\omega_n) + 1}$ or $G(s) = \frac{K \omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$
        *   Where $K$ is the DC gain, $\omega_n$ is the natural frequency, and $\zeta$ is the damping ratio.

    *   In our case:
        *   DC Gain ($s=0$): $K_{armature} = \frac{K_m}{R_a B + K_m K_b}$
        *   $\omega_n^2 = \frac{R_a B + K_m K_b}{L_a J}$
        *   $2\zeta\omega_n = \frac{R_a}{L_a} + \frac{B}{J}$

*   **Impact of Load Torque ($T_L(s)$):**
    *   Revisit Equation 3: $K_m I_a(s) = (J s + B) \Omega(s) + T_L(s)$
    *   Substitute $I_a(s)$: $K_m \left( \frac{V_a(s) - K_b \Omega(s)}{R_a + s L_a} \right) = (J s + B) \Omega(s) + T_L(s)$
    *   $K_m V_a(s) - K_m K_b \Omega(s) = (R_a + s L_a) [(J s + B) \Omega(s) + T_L(s)]$
    *   $K_m V_a(s) - K_m K_b \Omega(s) = (R_a + s L_a)(J s + B) \Omega(s) + (R_a + s L_a) T_L(s)$
    *   $K_m V_a(s) = [(R_a + s L_a)(J s + B) + K_m K_b] \Omega(s) + (R_a + s L_a) T_L(s)$
    *   This can be written in matrix form for state-space or analyzed as a system with two inputs ($V_a$, $T_L$).

**State-Space Modelling (Armature Control):**

**Objective:** Define the state variables and derive the state-space equations in the form $\dot{\mathbf{x}} = A\mathbf{x} + B\mathbf{u}$ and $y = C\mathbf{x} + D\mathbf{u}$.

*   **State Variables:** The energy storage elements in the system are the inductor (armature current) and the inertia (rotor velocity).
    *   Let $x_1(t) = i_a(t)$ (armature current)
    *   Let $x_2(t) = \omega(t)$ (angular velocity)

*   **Input Variables:**
    *   Let $u(t) = v_a(t)$ (armature voltage)
    *   Consider load torque $T_L(t)$ as an external force/disturbance. To fit the standard state-space form, we might represent it as an input. For simplicity in some analyses, it can be ignored or treated as a disturbance directly. Let's initially include it as an input for a more complete model.

*   **Output Variable:** Typically, the angular velocity is the output.
    *   Let $y(t) = \omega(t)$

*   **Deriving State Equations:**
    *   From Equation 1: $L_a \frac{di_a(t)}{dt} = v_a(t) - R_a i_a(t) - K_b \omega(t)$
        *   $\frac{di_a(t)}{dt} = -\frac{R_a}{L_a} i_a(t) - \frac{K_b}{L_a} \omega(t) + \frac{1}{L_a} v_a(t)$
        *   $\dot{x}_1(t) = -\frac{R_a}{L_a} x_1(t) - \frac{K_b}{L_a} x_2(t) + \frac{1}{L_a} u(t)$

    *   From Equation 3: $J \frac{d\omega(t)}{dt} = K_m i_a(t) - B \omega(t) - T_L(t)$
        *   $\frac{d\omega(t)}{dt} = \frac{K_m}{J} i_a(t) - \frac{B}{J} \omega(t) - \frac{1}{J} T_L(t)$
        *   $\dot{x}_2(t) = \frac{K_m}{J} x_1(t) - \frac{B}{J} x_2(t) - \frac{1}{J} T_L(t)$

*   **Forming the State-Space Matrices:**
    *   If we consider $v_a(t)$ as the only input:
        *   $\mathbf{\dot{x}} = \begin{bmatrix} \dot{x}_1 \\ \dot{x}_2 \end{bmatrix} = \begin{bmatrix} -R_a/L_a & -K_b/L_a \\ K_m/J & -B/J \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} + \begin{bmatrix} 1/L_a \\ 0 \end{bmatrix} u(t)$
        *   $A_{armature} = \begin{bmatrix} -R_a/L_a & -K_b/L_a \\ K_m/J & -B/J \end{bmatrix}$
        *   $B_{armature} = \begin{bmatrix} 1/L_a \\ 0 \end{bmatrix}$

    *   Output equation: $y(t) = \omega(t) = 0 \cdot x_1(t) + 1 \cdot x_2(t)$
        *   $C_{armature} = \begin{bmatrix} 0 & 1 \end{bmatrix}$
        *   $D_{armature} = 0$

    *   If we include $T_L(t)$ as an input (let's call it $u_2(t)$) and $v_a(t)$ as $u_1(t)$:
        *   $\mathbf{\dot{x}} = \begin{bmatrix} -R_a/L_a & -K_b/L_a \\ K_m/J & -B/J \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} + \begin{bmatrix} 1/L_a & 0 \\ 0 & -1/J \end{bmatrix} \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}$
        *   $A_{armature} = \begin{bmatrix} -R_a/L_a & -K_b/L_a \\ K_m/J & -B/J \end{bmatrix}$
        *   $B_{armature} = \begin{bmatrix} 1/L_a & 0 \\ 0 & -1/J \end{bmatrix}$
        *   $C_{armature} = \begin{bmatrix} 0 & 1 \end{bmatrix}$
        *   $D_{armature} = \begin{bmatrix} 0 & 0 \end{bmatrix}$

#### **3.2. Field Controlled DC Motor**

In field control, the armature voltage ($v_a$) and hence the armature current ($i_a$) are kept constant. The motor speed is controlled by varying the field voltage ($v_f$) which in turn changes the field current ($i_f$) and field flux ($\phi$).

**Assumptions:**
*   Armature current $I_a$ is constant.
*   Linear magnetic circuit.

**Electrical Subsystem (Field Circuit):**
*   Apply KVL to the field circuit.
*   $v_f(t) = R_f i_f(t) + L_f \frac{di_f(t)}{dt}$
    *   $v_f(t)$: Applied field voltage
    *   $R_f$: Field resistance
    *   $i_f(t)$: Field current
    *   $L_f$: Field inductance

**Mechanical Subsystem:**
*   The motor torque ($T_m$) is proportional to the armature current ($I_a$, which is constant) and the field flux ($\phi$). The field flux is proportional to the field current ($i_f$).
*   $T_m(t) = K_t I_a \phi(t)$
*   Since $\phi(t) \propto i_f(t)$, let $\phi(t) = K_\phi i_f(t)$ (where $K_\phi$ is a flux constant).
*   $T_m(t) = K_t I_a (K_\phi i_f(t))$
*   Let $K_{mf} = K_t I_a K_\phi$ be the combined field control torque constant.
*   $T_m(t) = K_{mf} i_f(t)$

*   Apply Newton's second law for rotation (same as before):
    *   $T_m(t) = J \frac{d\omega(t)}{dt} + B \omega(t) + T_L(t)$
*   Substituting $T_m(t)$:
    *   $K_{mf} i_f(t) = J \frac{d\omega(t)}{dt} + B \omega(t) + T_L(t)$  **(Equation 4)**

**Transfer Function Modelling (Field Control):**

**Objective:** Find the transfer function from field voltage $V_f(s)$ to angular velocity $\Omega(s)$. Assume $T_L(t) = 0$.

*   Take the Laplace transform of the field circuit equation:
    *   $V_f(s) = R_f I_f(s) + s L_f I_f(s)$
    *   $V_f(s) = (R_f + s L_f) I_f(s)$  **(Equation 5)**

*   From Equation 5, express $I_f(s)$ in terms of $V_f(s)$:
    *   $I_f(s) = \frac{V_f(s)}{R_f + s L_f}$

*   Take the Laplace transform of Equation 4 (assuming $T_L(t) = 0$):
    *   $K_{mf} I_f(s) = J s \Omega(s) + B \Omega(s)$
    *   $K_{mf} I_f(s) = (J s + B) \Omega(s)$  **(Equation 6)**

*   Substitute the expression for $I_f(s)$ from Equation 5 into Equation 6:
    *   $K_{mf} \left( \frac{V_f(s)}{R_f + s L_f} \right) = (J s + B) \Omega(s)$

*   $\frac{K_{mf}}{R_f + s L_f} V_f(s) = (J s + B) \Omega(s)$

*   The transfer function from $V_f(s)$ to $\Omega(s)$ is $G(s) = \frac{\Omega(s)}{V_f(s)}$:
    *   $G(s) = \frac{K_{mf}}{(R_f + s L_f)(J s + B)}$

*   **Standard Form of the Transfer Function:**
    *   $G(s) = \frac{K_{mf}}{s^2 L_f J + s (R_f J + L_f B) + R_f B}$

    *   Divide numerator and denominator by $L_f J$:
        *   $G(s) = \frac{\frac{K_{mf}}{L_f J}}{s^2 + s \left(\frac{R_f}{L_f} + \frac{B}{J}\right) + \frac{R_f B}{L_f J}}$

    *   This is also a second-order system.
        *   DC Gain ($s=0$): $K_{field} = \frac{K_{mf}}{R_f B}$
        *   $\omega_n^2 = \frac{R_f B}{L_f J}$
        *   $2\zeta\omega_n = \frac{R_f}{L_f} + \frac{B}{J}$

**State-Space Modelling (Field Control):**

**Objective:** Define the state variables and derive the state-space equations.

*   **State Variables:**
    *   Let $x_1(t) = i_f(t)$ (field current)
    *   Let $x_2(t) = \omega(t)$ (angular velocity)

*   **Input Variable:**
    *   Let $u(t) = v_f(t)$ (field voltage)
    *   Consider load torque $T_L(t)$ as an external force/disturbance.

*   **Output Variable:**
    *   Let $y(t) = \omega(t)$

*   **Deriving State Equations:**
    *   From the field circuit equation: $L_f \frac{di_f(t)}{dt} = v_f(t) - R_f i_f(t)$
        *   $\frac{di_f(t)}{dt} = -\frac{R_f}{L_f} i_f(t) + \frac{1}{L_f} v_f(t)$
        *   $\dot{x}_1(t) = -\frac{R_f}{L_f} x_1(t) + \frac{1}{L_f} u(t)$

    *   From Equation 4: $J \frac{d\omega(t)}{dt} = K_{mf} i_f(t) - B \omega(t) - T_L(t)$
        *   $\frac{d\omega(t)}{dt} = \frac{K_{mf}}{J} i_f(t) - \frac{B}{J} \omega(t) - \frac{1}{J} T_L(t)$
        *   $\dot{x}_2(t) = \frac{K_{mf}}{J} x_1(t) - \frac{B}{J} x_2(t) - \frac{1}{J} T_L(t)$

*   **Forming the State-Space Matrices:**
    *   If we consider $v_f(t)$ as the only input:
        *   $\mathbf{\dot{x}} = \begin{bmatrix} \dot{x}_1 \\ \dot{x}_2 \end{bmatrix} = \begin{bmatrix} -R_f/L_f & 0 \\ K_{mf}/J & -B/J \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} + \begin{bmatrix} 1/L_f \\ 0 \end{bmatrix} u(t)$
        *   $A_{field} = \begin{bmatrix} -R_f/L_f & 0 \\ K_{mf}/J & -B/J \end{bmatrix}$
        *   $B_{field} = \begin{bmatrix} 1/L_f \\ 0 \end{bmatrix}$

    *   Output equation: $y(t) = \omega(t) = 0 \cdot x_1(t) + 1 \cdot x_2(t)$
        *   $C_{field} = \begin{bmatrix} 0 & 1 \end{bmatrix}$
        *   $D_{field} = 0$

    *   If we include $T_L(t)$ as an input $u_2(t)$ and $v_f(t)$ as $u_1(t)$:
        *   $\mathbf{\dot{x}} = \begin{bmatrix} -R_f/L_f & 0 \\ K_{mf}/J & -B/J \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} + \begin{bmatrix} 1/L_f & 0 \\ 0 & -1/J \end{bmatrix} \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}$
        *   $A_{field} = \begin{bmatrix} -R_f/L_f & 0 \\ K_{mf}/J & -B/J \end{bmatrix}$
        *   $B_{field} = \begin{bmatrix} 1/L_f & 0 \\ 0 & -1/J \end{bmatrix}$
        *   $C_{field} = \begin{bmatrix} 0 & 1 \end{bmatrix}$
        *   $D_{field} = \begin{bmatrix} 0 & 0 \end{bmatrix}$

---

### **4. Practical Parameter Determination (CO1)**

To implement these models, we need to determine the physical parameters of the DC motor. Experiments are conducted to find these values.

*   **Armature Resistance ($R_a$) and Field Resistance ($R_f$):**
    *   Measure using a multimeter across the respective terminals.

*   **Armature Inductance ($L_a$) and Field Inductance ($L_f$):**
    *   These are typically small and difficult to measure accurately with standard methods for motor windings. Often, they are estimated or determined indirectly.
    *   One common approach is to perform an open-circuit test at a known speed and measure the inductance using an LCR meter (though this might not be representative of operating conditions).
    *   Alternatively, the time constant of the electrical circuit ($L_a/R_a$ or $L_f/R_f$) can be estimated from the step response of the current when a voltage step is applied to the armature or field winding, respectively.

*   **Armature Inertia ($J$) and Viscous Friction ($B$):**
    *   These are determined from the mechanical behavior of the motor.
    *   **Inertia ($J$):**
        *   **No-Load Test with Added Inertia:** Mount a known inertia disk on the motor shaft. Apply a constant voltage. Measure the initial acceleration from rest or the change in acceleration when inertia is added.
        *   $T_m = J_{total} \alpha$ where $J_{total} = J_{motor} + J_{added}$.
        *   By comparing accelerations with and without added inertia, $J_{motor}$ can be found.
    *   **Friction ($B$):**
        *   **No-Load Test:** Run the motor at a constant, known speed $\omega$. Apply a voltage $v_a$ such that the motor runs at this speed. Measure the armature current $i_a$. The torque developed is $T_m = K_m i_a$. At no load and constant speed, $T_m = B\omega$. So, $B = T_m / \omega = (K_m i_a) / \omega$.
        *   Alternatively, analyze the deceleration of the motor when power is cut off. The torque during deceleration is $T_m = -J \frac{d\omega}{dt}$. If we assume torque is purely due to friction, $T_m = -B\omega$. Then $-B\omega = J \frac{d\omega}{dt}$.

*   **Torque Constant ($K_m$) / Torque Constant ($K_t$) and Back EMF Constant ($K_b$):**
    *   These are electromechanical constants.
    *   **Torque Constant ($K_m$ for armature control, $K_{mf}$ for field control):**
        *   Run the motor at a known speed $\omega$. Apply a known armature current $i_a$ (or field current $i_f$). Measure the developed torque $T_m$ (e.g., using a torque sensor or a Prony brake).
        *   For armature control: $K_m = T_m / i_a$ (with constant flux).
        *   For field control: $K_{mf} = T_m / i_f$ (with constant armature current).
    *   **Back EMF Constant ($K_b$):**
        *   Run the motor at a known speed $\omega$ with constant field flux. Apply zero armature voltage ($v_a = 0$). Measure the back EMF $v_b$ at the armature terminals.
        *   $K_b = v_b / \omega$.
    *   **Relationship between $K_t$ and $K_b$:** In SI units, $K_t$ and $K_b$ are often numerically equal. If $T_m$ is in Nm, $\phi$ in Wb, $I_a$ in A, $v_b$ in V, and $\omega$ in rad/s: $T_m = K_t \phi I_a$ and $v_b = K_b \phi \omega$. If we use $T_m = K_t' I_a$ (where $K_t'$ incorporates flux), and $v_b = K_b' \omega$ (where $K_b'$ incorporates flux), then $K_t'$ is often equal to $K_b'$.

**Example Experiment for Parameter Determination:**
Suppose we have a separately excited DC motor.

1.  **Measure:** $R_a$, $R_f$ with a multimeter.
2.  **Field Control Parameter Determination:**
    *   Keep armature voltage $v_a$ constant and high enough to ensure $I_a$ is constant (e.g., 120V).
    *   Apply a step voltage $v_f(t)$ to the field winding and measure $i_f(t)$ and $\omega(t)$.
    *   From the steady-state values: $T_{m,ss} = K_{mf} i_{f,ss}$. Measure $T_{m,ss}$ using a Prony brake or dynamometer. This gives $K_{mf}$.
    *   The field circuit step response $i_f(t)$ can be used to estimate $L_f/R_f$ (the field time constant).
    *   Run the motor at a constant speed $\omega$ and measure $T_m$ and $i_f$. $T_m = K_{mf} i_f$. This confirms $K_{mf}$.
3.  **Armature Control Parameter Determination:**
    *   Keep field voltage $v_f$ constant to maintain constant flux $\phi$.
    *   Apply a step voltage $v_a(t)$ to the armature and measure $i_a(t)$ and $\omega(t)$.
    *   From the steady-state values:
        *   $T_{m,ss} = K_m i_{a,ss}$ (assuming constant flux, $K_m$ is the effective torque constant). Measure $T_{m,ss}$. This gives $K_m$.
        *   $v_{b,ss} = K_b \omega_{ss}$. Measure $v_b$ (voltage across armature when no current flows due to speed) or calculate it from $v_a = R_a i_a + v_b$. This gives $K_b$.
    *   The armature circuit step response $i_a(t)$ can be used to estimate $L_a/R_a$.
    *   Run the motor at a constant speed $\omega$ with constant field flux. Apply armature voltage $v_a$. Measure armature current $i_a$. $T_m = K_m i_a$. This confirms $K_m$.
    *   Run the motor at a constant speed $\omega$ with constant field flux. Apply armature voltage $v_a$. Measure armature current $i_a$. The back EMF is $v_b = v_a - i_a R_a$. Then $K_b = v_b / \omega$.

---

### **5. Analysis of System Behavior (CO3)**

Once the models (transfer function or state-space) are obtained, we can analyze the system's behavior using simulation tools like MATLAB/Simulink.

*   **Transfer Function Analysis:**
    *   **Step Response:** Analyze how the motor's speed responds to a step change in voltage (armature or field). Characteristics like rise time, settling time, overshoot, and steady-state error can be observed.
    *   **Frequency Response:** Analyze the system's response to sinusoidal inputs. Bode plots, Nyquist plots, and Nichols charts can reveal stability margins and bandwidth.
    *   **Pole-Zero Analysis:** The locations of the poles of the transfer function determine the stability and transient response of the system. For the second-order models:
        *   $G(s) = \frac{K \omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$
        *   Poles are at $s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$.
        *   Stability is guaranteed if all poles have negative real parts. For DC motors with positive parameters, these poles are usually in the left-half plane.

*   **State-Space Analysis:**
    *   **Stability:** Analyze the eigenvalues of the A matrix. If all eigenvalues have negative real parts, the system is stable.
    *   **Controllability:** Determine if all states of the system can be influenced by the input. This is checked using the controllability matrix.
    *   **Observability:** Determine if all states of the system can be estimated from the output measurements. This is checked using the observability matrix.
    *   **Simulation:** Simulate the system's response to various inputs (step, impulse, ramps) and disturbances.

---

### **6. Performance Specifications (CO2)**

Performance specifications are used to quantify the desired behavior of a closed-loop control system. These are typically evaluated in response to a standard input, such as a unit step input.

*   **For a Step Input:**
    *   **Delay Time ($t_d$):** Time taken for the response to reach 50% of its final value for the first time.
    *   **Rise Time ($t_r$):** Time taken for the response to rise from 10% to 90% of its final value.
    *   **Peak Time ($t_p$):** Time taken for the response to reach its first peak.
    *   **Maximum Overshoot ($M_p$):** The maximum deviation of the response from its steady-state value, usually expressed as a percentage of the steady-state value. $M_p = \frac{y_{peak} - y_{final}}{y_{final}} \times 100\%$.
    *   **Settling Time ($t_s$):** Time taken for the response to settle within a specified tolerance band (e.g., ±2% or ±5%) of its final value.
    *   **Steady-State Error ($e_{ss}$):** The difference between the desired final value and the actual final value of the response.

*   **For DC Motors:** These specifications are directly related to the parameters of the transfer function (natural frequency $\omega_n$, damping ratio $\zeta$) or the eigenvalues of the state-space representation.

---

### **7. Practice Questions and Answers**

**Question 1 (Transfer Function):**
The armature circuit of a separately excited DC motor is described by:
$v_a(t) = 0.5 i_a(t) + 0.05 \frac{di_a(t)}{dt} + 0.1 \omega(t)$
The mechanical system is described by:
$0.01 \frac{d\omega(t)}{dt} + 0.02 \omega(t) = 0.2 i_a(t)$
Find the transfer function relating the angular velocity $\omega(s)$ to the armature voltage $v_a(s)$.

**Answer 1:**
From the armature circuit equation:
$V_a(s) = 0.5 I_a(s) + 0.05 s I_a(s) + 0.1 \Omega(s)$
$V_a(s) = (0.5 + 0.05s) I_a(s) + 0.1 \Omega(s)$
$I_a(s) = \frac{V_a(s) - 0.1 \Omega(s)}{0.5 + 0.05s}$

From the mechanical system equation:
$0.01 s \Omega(s) + 0.02 \Omega(s) = 0.2 I_a(s)$
$(0.01s + 0.02) \Omega(s) = 0.2 I_a(s)$
$I_a(s) = \frac{0.01s + 0.02}{0.2} \Omega(s) = (0.05s + 0.1) \Omega(s)$

Substitute $I_a(s)$:
$(0.05s + 0.1) \Omega(s) = \frac{V_a(s) - 0.1 \Omega(s)}{0.5 + 0.05s}$
$(0.05s + 0.1)(0.5 + 0.05s) \Omega(s) = V_a(s) - 0.1 \Omega(s)$
$(0.025s + 0.0025s^2 + 0.05 + 0.005s) \Omega(s) = V_a(s) - 0.1 \Omega(s)$
$(0.0025s^2 + 0.03s + 0.05) \Omega(s) = V_a(s) - 0.1 \Omega(s)$
$(0.0025s^2 + 0.03s + 0.05 + 0.1) \Omega(s) = V_a(s)$
$(0.0025s^2 + 0.03s + 0.15) \Omega(s) = V_a(s)$

$G(s) = \frac{\Omega(s)}{V_a(s)} = \frac{1}{0.0025s^2 + 0.03s + 0.15}$
Multiply by 400 to normalize:
$G(s) = \frac{400}{s^2 + 12s + 60}$

**Question 2 (State-Space):**
For the armature controlled DC motor described by the state-space matrices:
$A = \begin{bmatrix} -10 & -5 \\ 2 & -3 \end{bmatrix}$, $B = \begin{bmatrix} 5 \\ 0 \end{bmatrix}$, $C = \begin{bmatrix} 0 & 1 \end{bmatrix}$, $D = 0$
Find the transfer function $G(s) = Y(s)/U(s)$.

**Answer 2:**
The transfer function from state-space representation is given by $G(s) = C(sI - A)^{-1}B + D$.
$sI - A = s \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} - \begin{bmatrix} -10 & -5 \\ 2 & -3 \end{bmatrix} = \begin{bmatrix} s+10 & 5 \\ -2 & s+3 \end{bmatrix}$

Calculate the inverse:
$(sI - A)^{-1} = \frac{1}{\det(sI - A)} \text{adj}(sI - A)$
$\det(sI - A) = (s+10)(s+3) - (5)(-2) = s^2 + 13s + 30 + 10 = s^2 + 13s + 40$
$\text{adj}(sI - A) = \begin{bmatrix} s+3 & -5 \\ 2 & s+10 \end{bmatrix}$

$(sI - A)^{-1} = \frac{1}{s^2 + 13s + 40} \begin{bmatrix} s+3 & -5 \\ 2 & s+10 \end{bmatrix}$

Now, $G(s) = C(sI - A)^{-1}B$:
$G(s) = \begin{bmatrix} 0 & 1 \end{bmatrix} \frac{1}{s^2 + 13s + 40} \begin{bmatrix} s+3 & -5 \\ 2 & s+10 \end{bmatrix} \begin{bmatrix} 5 \\ 0 \end{bmatrix}$
$G(s) = \frac{1}{s^2 + 13s + 40} \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} (s+3) \cdot 5 + (-5) \cdot 0 \\ 2 \cdot 5 + (s+10) \cdot 0 \end{bmatrix}$
$G(s) = \frac{1}{s^2 + 13s + 40} \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} 5(s+3) \\ 10 \end{bmatrix}$
$G(s) = \frac{1}{s^2 + 13s + 40} [0 \cdot 5(s+3) + 1 \cdot 10]$
$G(s) = \frac{10}{s^2 + 13s + 40}$

**Question 3 (Parameter Identification - Conceptual):**
If you are given a DC motor and asked to find its parameters for modeling, describe the experiments you would perform to estimate $R_a$, $K_m$, $J$, and $B$ for an armature-controlled setup.

**Answer 3:**
*   **$R_a$ (Armature Resistance):** Measure directly using a multimeter across the armature terminals.
*   **$K_m$ (Motor Torque Constant):** Run the motor at a constant speed $\omega$ (using a variable DC supply for armature and field). Apply a constant armature current $i_a$ and measure the developed torque $T_m$ using a Prony brake or torque sensor. $K_m = T_m / i_a$. Ensure field flux is constant.
*   **$J$ (Moment of Inertia) and $B$ (Viscous Friction):**
    *   **No-load test:** Run the motor at a constant speed $\omega$ with a known armature voltage $v_a$ and constant field. Measure armature current $i_a$. The torque developed is $T_m = K_m i_a$. This torque is used to overcome friction, so $T_m = B\omega$. This gives an estimate of $B = (K_m i_a) / \omega$.
    *   **Added inertia test:** Mount a known inertia disk $J_{added}$ on the motor shaft. Apply a voltage step. Measure the initial acceleration $\alpha_1$ of the motor alone and $\alpha_2$ with the added inertia.
        *   $T_m = (J_{motor} + J_{added})\alpha_2$.
        *   $T_m = J_{motor}\alpha_1$. (Assuming friction is negligible or constant).
        *   Subtracting the equations or solving for $J_{motor}$: $J_{motor}(\alpha_1 - \alpha_2) = J_{added}\alpha_2 \Rightarrow J_{motor} = J_{added} \frac{\alpha_2}{\alpha_1 - \alpha_2}$.
    *   By performing these tests, both $J$ and $B$ can be estimated.

---

### **8. Important Points to Remember**

*   **Armature vs. Field Control:** Armature control generally provides faster response than field control due to the lower inductance of the armature winding compared to the field winding. Field control is often used for very high-speed applications.
*   **Back EMF:** The back EMF is a crucial component in DC motor modeling, acting as a feedback signal proportional to speed.
*   **Torque Equation:** Torque is proportional to the product of flux and armature current.
*   **State Variables:** For DC motors, state variables are typically the currents in inductive circuits and the angular velocities/positions of mechanical systems.
*   **Transfer Function:** Represents the input-output relationship in the frequency domain. It's useful for classical control design and analysis.
*   **State-Space:** Represents the system's internal dynamics. It's powerful for modern control techniques, controllability/observability analysis, and multi-input/multi-output systems.
*   **Parameter Identification:** Crucial for creating accurate models. Experiments are essential to obtain these parameters.
*   **CO Alignment:** This module directly addresses CO1 (identifying parameters through experiments) and CO3 (analyzing linear systems using simulation tools). The understanding gained here is foundational for CO2 (performance specifications) and CO4 (controller design).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **9. Textbook and Reference Book Connections**

*   **Katsuhiko Ogata (Modern Control Engineering):** Chapters on mechanical systems, electromechanical systems, transfer function derivation, and state-space representation will be highly relevant. Ogata provides detailed examples of DC motor modeling.
*   **Norman S. Nise (Control Systems Engineering):** Similar to Ogata, Nise covers system modeling, transfer functions, state-space, and parameter identification techniques. The chapters on modeling physical systems and time-domain responses are particularly useful.
*   **Nagrath & Gopal (Control Systems Engineering):** This textbook offers a comprehensive treatment of DC motor modeling, control, and analysis, including both transfer function and state-space approaches.
*   **Reference Books (Kuo, Gopal, Dorf):** These books provide alternative perspectives and additional examples that can deepen understanding of the core concepts of DC motor modeling and control.

---