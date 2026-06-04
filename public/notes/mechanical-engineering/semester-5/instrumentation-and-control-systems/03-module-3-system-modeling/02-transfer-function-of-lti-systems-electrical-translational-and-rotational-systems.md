---
title: "Transfer function of LTI systems- Electrical, translational and rotational systems – Force voltage and force current analogy"
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 3: System Modeling"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463675"
status: "completed"
scrapedAt: "2026-05-20T18:00:40.593Z"
---
# INSTRUMENTATION AND CONTROL SYSTEMS - MODULE 3: SYSTEM MODELING

## Topic: Transfer Function of LTI Systems - Electrical, Translational and Rotational Systems – Force Voltage and Force Current Analogy

### Learning Outcomes:

*   Understand the concept of Linear Time-Invariant (LTI) systems.
*   Define and derive the transfer function for various LTI systems.
*   Model electrical systems using differential equations and derive their transfer functions.
*   Model translational mechanical systems using differential equations and derive their transfer functions.
*   Model rotational mechanical systems using differential equations and derive their transfer functions.
*   Understand and apply the concept of analogies between electrical, mechanical, and rotational systems.
*   Formulate and solve problems involving system modeling and transfer function derivation.

### Course Outcomes Addressed:

*   **CO1 (K2):** Basic knowledge about industrial measurement systems and elements. (Understanding the fundamental building blocks and mathematical representations of systems).
*   **CO5 (K4):** Analyze time domain responses and apply Root Locus. (The ability to model systems is foundational for subsequent analysis).
*   **CO6 (K4):** Analyze the stability of LTI systems. (Stability analysis relies on the system's transfer function).

---

## 1. Introduction to Linear Time-Invariant (LTI) Systems

### 1.1 What is a System?

A **system** can be defined as a collection of interconnected components that interact to perform a specific function. In control systems, we often consider a system as the "plant" or the process we want to control.

*   **Example:** An electric motor, a heating element, a robot arm, an aircraft.

### 1.2 Linearity

A system is **linear** if it satisfies the principle of superposition:

1.  **Additivity:** If input $x_1(t)$ produces output $y_1(t)$ and input $x_2(t)$ produces output $y_2(t)$, then the input $x_1(t) + x_2(t)$ produces the output $y_1(t) + y_2(t)$.
2.  **Homogeneity (Scaling):** If input $x(t)$ produces output $y(t)$, then the input $a \cdot x(t)$ produces the output $a \cdot y(t)$, where $a$ is a scalar constant.

**Important Note:** Most physical systems are inherently linear within a certain operating range. Nonlinearities are often approximated as linear for analysis and control design. (Nise, 6/e, Chapter 2).

### 1.3 Time-Invariance

A system is **time-invariant** if its parameters do not change with time. This means that if an input $x(t)$ produces an output $y(t)$, then a time-shifted input $x(t - \tau)$ will produce a time-shifted output $y(t - \tau)$ for any time shift $\tau$.

**Important Note:** Many physical systems exhibit time-invariance, especially when their characteristics (like resistance, mass, inertia) remain constant over time.

### 1.4 LTI Systems

An **LTI system** is a system that is both linear and time-invariant. These systems are fundamental in control theory because their behavior can be effectively analyzed and predicted using mathematical tools like differential equations and their transforms.

---

## 2. Transfer Function of LTI Systems

### 2.1 Definition

The **transfer function**, denoted by $H(s)$ or $G(s)$, of an LTI system is defined as the ratio of the **Laplace transform of the output signal** to the **Laplace transform of the input signal**, assuming all initial conditions are zero.

$$H(s) = \frac{\mathcal{L}\{\text{output}(t)\}}{\mathcal{L}\{\text{input}(t)\}} \bigg|_{\text{zero initial conditions}}$$

Where:
*   $s$ is the complex Laplace variable.
*   $\mathcal{L}\{\cdot\}$ denotes the Laplace transform.

**Key Points about Transfer Functions:**

*   It is a mathematical model that describes the input-output relationship of an LTI system.
*   It is independent of the input signal.
*   It completely characterizes the system's dynamic behavior.
*   It is typically expressed as a rational function of $s$ (a ratio of polynomials in $s$).
*   The poles of the transfer function (roots of the denominator polynomial) determine the system's stability and transient response.
*   The zeros of the transfer function (roots of the numerator polynomial) influence the system's transient response.

### 2.2 Deriving Transfer Functions

To derive a transfer function:

1.  **Model the system:** Write down the governing differential equation(s) that describe the system's behavior based on physical laws (e.g., Kirchhoff's laws for electrical circuits, Newton's second law for mechanical systems).
2.  **Take the Laplace Transform:** Apply the Laplace transform to the differential equation(s), assuming zero initial conditions.
3.  **Solve for the Transfer Function:** Rearrange the transformed equation(s) to express the ratio of the output transform to the input transform.

---

## 3. Modeling and Transfer Functions of Electrical Systems

Electrical systems are typically modeled using Kirchhoff's Voltage Law (KVL) and Kirchhoff's Current Law (KCL). The basic passive electrical components are resistors (R), inductors (L), and capacitors (C).

### 3.1 Component Equations and Laplace Transforms

| Component   | Time Domain Equation (Series)        | Laplace Domain Equation (Series)                                                                                                   | Impedance ($Z(s)$) |
| :---------- | :----------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- | :----------------- |
| Resistor (R)| $v_R(t) = R \cdot i(t)$              | $V_R(s) = R \cdot I(s)$                                                                                                            | $R$                |
| Inductor (L)| $v_L(t) = L \frac{di(t)}{dt}$        | $V_L(s) = L(sI(s) - i(0^-))$                                                                                                       | $sL$               |
| Capacitor (C)| $i_C(t) = C \frac{dv_C(t)}{dt}$    | $I_C(s) = C(sV_C(s) - v_C(0^-))$  or $v_C(t) = \frac{1}{C} \int i_C(t) dt \implies V_C(s) = \frac{1}{sC} I_C(s)$ (assuming $v_C(0^-)=0$) | $\frac{1}{sC}$     |

**Important Note:** When deriving transfer functions, we assume zero initial conditions, meaning $i(0^-) = 0$ and $v_C(0^-) = 0$. This simplifies the Laplace transform of derivatives and integrals.

### 3.2 Examples of Electrical Systems

#### Example 3.2.1: First-Order RC Circuit (Series)

Consider a series RC circuit with a voltage source $v_{in}(t)$ and output voltage $v_{out}(t)$ across the capacitor.

*   **Governing Equation (KVL):** $v_{in}(t) = R \cdot i(t) + v_{out}(t)$
*   **Relationship between current and output voltage:** $i(t) = C \frac{dv_{out}(t)}{dt}$
*   **Substitute i(t) into KVL:** $v_{in}(t) = R \left( C \frac{dv_{out}(t)}{dt} \right) + v_{out}(t)$
*   **Differential Equation:** $RC \frac{dv_{out}(t)}{dt} + v_{out}(t) = v_{in}(t)$

**Deriving the Transfer Function $G(s) = V_{out}(s) / V_{in}(s)$:**

1.  **Take Laplace Transform (zero initial conditions):**
    $RC(sV_{out}(s) - v_{out}(0^-)) + V_{out}(s) = V_{in}(s)$
    $RCsV_{out}(s) + V_{out}(s) = V_{in}(s)$ (since $v_{out}(0^-) = 0$)
2.  **Factor out $V_{out}(s)$:**
    $V_{out}(s)(RCs + 1) = V_{in}(s)$
3.  **Transfer Function:**
    $$G(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{1}{RCs + 1}$$

*(Refer to Nise, 6/e, Chapter 2 for similar examples.)*

#### Example 3.2.2: Second-Order RLC Circuit (Series)

Consider a series RLC circuit with a voltage source $v_{in}(t)$ and output voltage $v_{out}(t)$ across the resistor.

*   **Governing Equation (KVL):** $v_{in}(t) = v_R(t) + v_L(t) + v_C(t)$
*   **Component voltage-current relations:**
    *   $v_R(t) = R \cdot i(t)$
    *   $v_L(t) = L \frac{di(t)}{dt}$
    *   $i(t) = C \frac{dv_C(t)}{dt}$
*   **Output voltage:** $v_{out}(t) = v_R(t) = R \cdot i(t)$

**Deriving the Transfer Function $G(s) = V_{out}(s) / V_{in}(s)$:**

1.  **Express all terms in terms of one variable (e.g., $i(t)$):**
    $v_{in}(t) = R \cdot i(t) + L \frac{di(t)}{dt} + \frac{1}{C} \int i(t) dt$
2.  **Take Laplace Transform (zero initial conditions):**
    $V_{in}(s) = R \cdot I(s) + L(sI(s) - i(0^-)) + \frac{1}{sC} I(s)$ (assuming $i(0^-)=0$)
    $V_{in}(s) = R \cdot I(s) + LsI(s) + \frac{1}{sC} I(s)$
3.  **Factor out $I(s)$:**
    $V_{in}(s) = I(s) \left( R + Ls + \frac{1}{sC} \right) = I(s) \left( \frac{s^2LC + sRC + 1}{sC} \right)$
4.  **Express output in Laplace domain:**
    $V_{out}(s) = R \cdot I(s)$
5.  **Substitute $I(s)$ from step 3 into step 4:**
    $I(s) = V_{in}(s) \left( \frac{sC}{s^2LC + sRC + 1} \right)$
    $V_{out}(s) = R \cdot V_{in}(s) \left( \frac{sC}{s^2LC + sRC + 1} \right)$
6.  **Transfer Function:**
    $$G(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{RsC}{s^2LC + sRC + 1} = \frac{s (\frac{R}{L})}{(s^2 + s\frac{R}{L} + \frac{1}{LC})}$$

*(This can be further simplified to the standard second-order form for analysis.)*

---

## 4. Modeling and Transfer Functions of Translational Mechanical Systems

Translational mechanical systems involve motion along a straight line. The primary components are mass (M), damping (viscous friction, B), and spring (K).

### 4.1 Force-Motion Equations

Newton's Second Law of Motion is the basis for modeling these systems:
$\Sigma F = M \cdot a(t)$

Where:
*   $F$ is the net force acting on the object.
*   $M$ is the mass of the object.
*   $a(t)$ is the acceleration of the object.

Recall the relationships:
*   $a(t) = \frac{dv(t)}{dt} = \frac{d^2x(t)}{dt^2}$
*   $v(t) = \frac{dx(t)}{dt}$

Forces acting on an object in a translational system:
1.  **Inertial Force ($F_M$):** Force due to mass, opposing acceleration. $F_M = M \cdot a(t) = M \frac{d^2x(t)}{dt^2}$
2.  **Damping Force ($F_B$):** Force due to viscous friction, opposing velocity. $F_B = B \cdot v(t) = B \frac{dx(t)}{dt}$
3.  **Spring Force ($F_K$):** Force due to a spring, opposing displacement. $F_K = K \cdot x(t)$

### 4.2 Laplace Transform of Mechanical Components

| Component   | Force-Displacement Relation                  | Laplace Domain Force-Displacement Relation (zero initial conditions)                                                              |
| :---------- | :------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| Mass (M)    | $F_M(t) = M \cdot a(t) = M \frac{d^2x(t)}{dt^2}$ | $F_M(s) = M(s^2X(s) - sx(0^-) - v(0^-))$  $\implies F_M(s) = M s^2 X(s)$ (zero initial conditions)                        |
| Damper (B)  | $F_B(t) = B \cdot v(t) = B \frac{dx(t)}{dt}$ | $F_B(s) = B(sX(s) - x(0^-))$ $\implies F_B(s) = B s X(s)$ (zero initial conditions)                                             |
| Spring (K)  | $F_K(t) = K \cdot x(t)$                      | $F_K(s) = K \cdot X(s)$                                                                                                          |

**Important Note:** The input to a mechanical system is typically a force $F(t)$, and the output is typically a displacement $x(t)$ or velocity $v(t)$.

### 4.3 Examples of Translational Systems

#### Example 4.3.1: Mass-Damper System

Consider a mass $M$ attached to a damper with coefficient $B$. An external force $F(t)$ is applied to the mass. The output is the displacement $x(t)$.

*   **Forces acting on the mass:**
    *   Applied force: $F(t)$
    *   Inertial force: $M \frac{d^2x(t)}{dt^2}$ (acting opposite to acceleration)
    *   Damping force: $B \frac{dx(t)}{dt}$ (acting opposite to velocity)
*   **Apply Newton's Second Law (sum of forces = mass x acceleration):**
    $F(t) - B \frac{dx(t)}{dt} - M \frac{d^2x(t)}{dt^2} = 0$
    Rearranging: $M \frac{d^2x(t)}{dt^2} + B \frac{dx(t)}{dt} = F(t)$

**Deriving the Transfer Function $G(s) = X(s) / F(s)$:**

1.  **Take Laplace Transform (zero initial conditions):**
    $Ms^2X(s) + BsX(s) = F(s)$
2.  **Factor out $X(s)$:**
    $X(s)(Ms^2 + Bs) = F(s)$
3.  **Transfer Function:**
    $$G(s) = \frac{X(s)}{F(s)} = \frac{1}{Ms^2 + Bs} = \frac{1}{s(Ms + B)}$$

*(Refer to Doebelin, 1990, Chapter 3 for foundational principles of mechanical systems.)*

#### Example 4.3.2: Mass-Spring-Damper System

Consider a mass $M$ attached to a spring with stiffness $K$ and a damper with coefficient $B$. An external force $F(t)$ is applied to the mass. The output is the displacement $x(t)$.

*   **Forces acting on the mass:**
    *   Applied force: $F(t)$
    *   Inertial force: $M \frac{d^2x(t)}{dt^2}$
    *   Damping force: $B \frac{dx(t)}{dt}$
    *   Spring force: $K x(t)$
*   **Apply Newton's Second Law:**
    $F(t) - B \frac{dx(t)}{dt} - K x(t) - M \frac{d^2x(t)}{dt^2} = 0$
    Rearranging: $M \frac{d^2x(t)}{dt^2} + B \frac{dx(t)}{dt} + K x(t) = F(t)$

**Deriving the Transfer Function $G(s) = X(s) / F(s)$:**

1.  **Take Laplace Transform (zero initial conditions):**
    $Ms^2X(s) + BsX(s) + KX(s) = F(s)$
2.  **Factor out $X(s)$:**
    $X(s)(Ms^2 + Bs + K) = F(s)$
3.  **Transfer Function:**
    $$G(s) = \frac{X(s)}{F(s)} = \frac{1}{Ms^2 + Bs + K}$$

This is a standard second-order system transfer function.

---

## 5. Modeling and Transfer Functions of Rotational Mechanical Systems

Rotational mechanical systems involve rotation about an axis. The primary components are inertia (J), viscous friction (B), and torsional spring (K).

### 5.1 Torque-Motion Equations

Newton's Second Law for rotational motion is:
$\Sigma T = J \cdot \alpha(t)$

Where:
*   $T$ is the net torque acting on the object.
*   $J$ is the moment of inertia of the object.
*   $\alpha(t)$ is the angular acceleration of the object.

Recall the relationships:
*   $\alpha(t) = \frac{d\omega(t)}{dt} = \frac{d^2\theta(t)}{dt^2}$
*   $\omega(t) = \frac{d\theta(t)}{dt}$

Torques acting on an object in a rotational system:
1.  **Inertial Torque ($T_J$):** Torque due to inertia, opposing angular acceleration. $T_J = J \cdot \alpha(t) = J \frac{d^2\theta(t)}{dt^2}$
2.  **Damping Torque ($T_B$):** Torque due to viscous friction, opposing angular velocity. $T_B = B \cdot \omega(t) = B \frac{d\theta(t)}{dt}$
3.  **Spring Torque ($T_K$):** Torque due to a torsional spring, opposing angular displacement. $T_K = K \cdot \theta(t)$

### 5.2 Laplace Transform of Rotational Components

| Component   | Torque-Angular Displacement Relation        | Laplace Domain Torque-Angular Displacement Relation (zero initial conditions)                                                                 |
| :---------- | :------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| Inertia (J) | $T_J(t) = J \cdot \alpha(t) = J \frac{d^2\theta(t)}{dt^2}$ | $T_J(s) = J(s^2\Theta(s) - s\theta(0^-) - \omega(0^-))$  $\implies T_J(s) = J s^2 \Theta(s)$ (zero initial conditions)                   |
| Damper (B)  | $T_B(t) = B \cdot \omega(t) = B \frac{d\theta(t)}{dt}$ | $T_B(s) = B(s\Theta(s) - \theta(0^-))$ $\implies T_B(s) = B s \Theta(s)$ (zero initial conditions)                                           |
| Spring (K)  | $T_K(t) = K \cdot \theta(t)$                | $T_K(s) = K \cdot \Theta(s)$                                                                                                                  |

**Important Note:** The input to a rotational system is typically a torque $T(t)$, and the output is typically an angular displacement $\theta(t)$ or angular velocity $\omega(t)$.

### 5.3 Examples of Rotational Systems

#### Example 5.3.1: Mass-Damper System (Rotational)

Consider a rigid body with moment of inertia $J$ attached to a damper with coefficient $B$. An external torque $T(t)$ is applied to the body. The output is the angular displacement $\theta(t)$.

*   **Torques acting on the body:**
    *   Applied torque: $T(t)$
    *   Inertial torque: $J \frac{d^2\theta(t)}{dt^2}$ (acting opposite to angular acceleration)
    *   Damping torque: $B \frac{d\theta(t)}{dt}$ (acting opposite to angular velocity)
*   **Apply Newton's Second Law for rotation:**
    $T(t) - B \frac{d\theta(t)}{dt} - J \frac{d^2\theta(t)}{dt^2} = 0$
    Rearranging: $J \frac{d^2\theta(t)}{dt^2} + B \frac{d\theta(t)}{dt} = T(t)$

**Deriving the Transfer Function $G(s) = \Theta(s) / T(s)$:**

1.  **Take Laplace Transform (zero initial conditions):**
    $Js^2\Theta(s) + Bs\Theta(s) = T(s)$
2.  **Factor out $\Theta(s)$:**
    $\Theta(s)(Js^2 + Bs) = T(s)$
3.  **Transfer Function:**
    $$G(s) = \frac{\Theta(s)}{T(s)} = \frac{1}{Js^2 + Bs} = \frac{1}{s(Js + B)}$$

*(This is analogous to the translational mass-damper system.)*

#### Example 5.3.2: Mass-Spring-Damper System (Rotational)

Consider a rigid body with moment of inertia $J$ attached to a torsional spring with stiffness $K$ and a damper with coefficient $B$. An external torque $T(t)$ is applied to the body. The output is the angular displacement $\theta(t)$.

*   **Torques acting on the body:**
    *   Applied torque: $T(t)$
    *   Inertial torque: $J \frac{d^2\theta(t)}{dt^2}$
    *   Damping torque: $B \frac{d\theta(t)}{dt}$
    *   Spring torque: $K \theta(t)$
*   **Apply Newton's Second Law for rotation:**
    $T(t) - B \frac{d\theta(t)}{dt} - K \theta(t) - J \frac{d^2\theta(t)}{dt^2} = 0$
    Rearranging: $J \frac{d^2\theta(t)}{dt^2} + B \frac{d\theta(t)}{dt} + K \theta(t) = T(t)$

**Deriving the Transfer Function $G(s) = \Theta(s) / T(s)$:**

1.  **Take Laplace Transform (zero initial conditions):**
    $Js^2\Theta(s) + Bs\Theta(s) + K\Theta(s) = T(s)$
2.  **Factor out $\Theta(s)$:**
    $\Theta(s)(Js^2 + Bs + K) = T(s)$
3.  **Transfer Function:**
    $$G(s) = \frac{\Theta(s)}{T(s)} = \frac{1}{Js^2 + Bs + K}$$

This is also a standard second-order system transfer function, analogous to the translational mass-spring-damper system.

---

## 6. System Analogies

Analogies are powerful tools to understand the similarities between different physical systems. By establishing analogies, we can leverage knowledge from one domain (e.g., electrical circuits) to analyze systems in another domain (e.g., mechanical systems). This is particularly useful as electrical circuit analysis is often taught earlier and more extensively.

The goal is to represent a mechanical system with an equivalent electrical circuit such that the governing differential equations have similar forms. This allows us to draw circuit diagrams for mechanical systems and analyze them using electrical circuit techniques.

There are two main types of analogies for mechanical systems:

### 6.1 Force-Voltage (F-V) Analogy

In the F-V analogy, we try to make the force ($F$) analogous to voltage ($V$) and velocity ($v$) analogous to current ($I$).

| Mechanical Quantity      | Electrical Quantity (F-V) | Component Relation           | Electrical Component (F-V) |
| :----------------------- | :------------------------ | :--------------------------- | :------------------------- |
| Force ($F$)              | Voltage ($V$)             | $V = IR$                     | Resistor (R)               |
| Velocity ($v$)           | Current ($I$)             | $V = L \frac{dI}{dt}$        | Inductor (L)               |
| Displacement ($x$)       | Flux Linkage ($\lambda$)  | $V = \frac{1}{C} \int I dt$  | Capacitor (C)              |
| Mass ($M$)               | Reciprocal of Capacitance ($1/C$) | $F_M = M \frac{d^2x}{dt^2}$  | $V_L = L \frac{dI}{dt}$    |
| Damper ($B$)             | Reciprocal of Resistance ($1/R$) | $F_B = B \frac{dx}{dt}$     | $V_R = RI$                 |
| Spring ($K$)             | Reciprocal of Inductance ($1/L$) | $F_K = K x$                  | $V_C = \frac{1}{C} \int I dt$ |

**Derivation of F-V Analogy from Equations:**

Let's consider the **translational mass-spring-damper system:**
$M \frac{d^2x}{dt^2} + B \frac{dx}{dt} + K x = F$

Substitute the analogous quantities:
$F \rightarrow V$, $v = \frac{dx}{dt} \rightarrow I$, $x \rightarrow \int I dt$ (or $I = \frac{dQ}{dt}, V_C = \frac{Q}{C}$)
$M \rightarrow 1/C$, $B \rightarrow 1/R$, $K \rightarrow 1/L$

The equation becomes:
$\frac{1}{C} \frac{dI}{dt} + \frac{1}{R} I + \frac{1}{L} \int I dt = V$

This equation relates voltage and current in an electrical circuit. To match the component relations directly:
*   Term $M \frac{d^2x}{dt^2} = M \frac{dv}{dt}$: Analogous to $L \frac{dI}{dt}$ (voltage across an inductor). So, $M \leftrightarrow L$.
*   Term $B \frac{dx}{dt} = B v$: Analogous to $RI$ (voltage across a resistor). So, $B \leftrightarrow R$.
*   Term $K x$: Analogous to $\frac{1}{C} \int I dt$ (voltage across a capacitor). So, $K \leftrightarrow 1/C$.

Wait, there's a slight inconsistency depending on how you set up the analogy. Let's re-examine the core relationships for the F-V analogy to ensure consistency. The most common and robust way is to map:

*   **Force (F) <=> Voltage (V)**
*   **Velocity (v) <=> Current (I)**

From these base mappings, we derive the component analogies:

*   **Mass (M):** $F_M = M \frac{dv}{dt}$. Since $F \leftrightarrow V$ and $v \leftrightarrow I$, we have $V_M = M \frac{dI}{dt}$. This matches the voltage across an **inductor**, so $M \leftrightarrow L$.
*   **Damper (B):** $F_B = Bv$. Since $F \leftrightarrow V$ and $v \leftrightarrow I$, we have $V_B = BI$. This matches the voltage across a **resistor**, so $B \leftrightarrow R$.
*   **Spring (K):** $F_K = Kx$. Since $v = \frac{dx}{dt}$, $x = \int v dt$. So, $F_K = K \int v dt$. Since $F \leftrightarrow V$ and $v \leftrightarrow I$, we have $V_K = K \int I dt$. This matches the voltage across a **capacitor**, so $K \leftrightarrow 1/C$.

**Therefore, the F-V analogy mapping is:**
*   Force $\leftrightarrow$ Voltage
*   Velocity $\leftrightarrow$ Current
*   Mass $M \leftrightarrow$ Inductance $L$
*   Damper $B \leftrightarrow$ Resistance $R$
*   Spring $K \leftrightarrow$ Reciprocal of Capacitance $1/C$

**Example: Mass-Damper-Spring System (F-V Analogy)**

Mechanical System: $M \ddot{x} + B \dot{x} + K x = F$
Input: $F(t)$, Output: $x(t)$

Equivalent Electrical Circuit (F-V Analogy):
*   Replace $F$ with $V_{in}$.
*   Replace $x$ with the charge $Q$ on the capacitor (since $I = dQ/dt$ and $v=dx/dt$, $x = \int v dt$, so $x \leftrightarrow Q$).
*   Replace $v$ with current $I$.
*   Replace $M$ with $L$.
*   Replace $B$ with $R$.
*   Replace $K$ with $1/C$.

The equation becomes: $L \frac{dI}{dt} + RI + \frac{1}{C} Q = V_{in}$
This is the KVL equation for a series RLC circuit.

*   Input: $V_{in}(t)$
*   Output: Charge $Q(t)$ on the capacitor.
*   System: Series RLC circuit.

If the output is displacement $x(t)$, and $x \leftrightarrow Q$, then the transfer function $X(s)/F(s)$ is analogous to $Q(s)/V_{in}(s)$.
For a series RLC circuit, $V_{in}(s) = LsI(s) + RI(s) + Q(s)/C$. Since $I(s) = sQ(s)$,
$V_{in}(s) = Ls(sQ(s)) + R(sQ(s)) + Q(s)/C$
$V_{in}(s) = Q(s)(Ls^2 + Rs + 1/C)$
$\frac{Q(s)}{V_{in}(s)} = \frac{1}{Ls^2 + Rs + 1/C}$

Mapping back: $G_{mech}(s) = \frac{X(s)}{F(s)} = \frac{1}{Ms^2 + Bs + K}$
$G_{elec}(s) = \frac{Q(s)}{V_{in}(s)} = \frac{1}{Ls^2 + Rs + 1/C}$

Comparing the denominators: $Ms^2 + Bs + K \leftrightarrow Ls^2 + Rs + 1/C$.
This confirms the analogy: $M \leftrightarrow L$, $B \leftrightarrow R$, $K \leftrightarrow 1/C$.

*(Refer to Ogata, 5/e, Chapter 2 for detailed explanation of analogies.)*

### 6.2 Force-Current (F-I) Analogy

In the F-I analogy, we try to make the force ($F$) analogous to current ($I$) and velocity ($v$) analogous to voltage ($V$).

| Mechanical Quantity      | Electrical Quantity (F-I) | Component Relation           | Electrical Component (F-I) |
| :----------------------- | :------------------------ | :--------------------------- | :------------------------- |
| Force ($F$)              | Current ($I$)             | $V = IR$                     | Resistor (R)               |
| Velocity ($v$)           | Voltage ($V$)             | $V = L \frac{dI}{dt}$        | Inductor (L)               |
| Displacement ($x$)       | Flux Linkage ($\lambda$)  | $I = C \frac{dV}{dt}$        | Capacitor (C)              |
| Mass ($M$)               | Reciprocal of Inductance ($1/L$) | $F_M = M \frac{d^2x}{dt^2}$  | $I_L = \frac{1}{L} \int V dt$ |
| Damper ($B$)             | Reciprocal of Capacitance ($1/C$) | $F_B = B \frac{dx}{dt}$     | $I_C = C \frac{dV}{dt}$    |
| Spring ($K$)             | Inductance ($L$)          | $F_K = K x$                  | $V = L \frac{dI}{dt}$      |

**Derivation of F-I Analogy from Equations:**

Let's again consider the **translational mass-spring-damper system:**
$M \frac{d^2x}{dt^2} + B \frac{dx}{dt} + K x = F$

Substitute the analogous quantities for F-I analogy:
*   **Force (F) <=> Current (I)**
*   **Velocity (v) <=> Voltage (V)**

From these, derive component analogies:

*   **Mass (M):** $F_M = M \frac{dv}{dt}$. Since $F \leftrightarrow I$ and $v \leftrightarrow V$, we have $I_M = M \frac{dV}{dt}$. This matches the current through a **capacitor**, so $M \leftrightarrow C$.
*   **Damper (B):** $F_B = Bv$. Since $F \leftrightarrow I$ and $v \leftrightarrow V$, we have $I_B = BV$. This matches the current through a **conductance** (1/R), so $B \leftrightarrow 1/R$ or $1/B \leftrightarrow R$.
*   **Spring (K):** $F_K = Kx$. Since $v = \frac{dx}{dt}$, $x = \int v dt$. So, $F_K = K \int v dt$. Since $F \leftrightarrow I$ and $v \leftrightarrow V$, we have $I_K = K \int V dt$. This matches the current through an **inductor**, so $K \leftrightarrow 1/L$.

**Therefore, the F-I analogy mapping is:**
*   Force $\leftrightarrow$ Current
*   Velocity $\leftrightarrow$ Voltage
*   Mass $M \leftrightarrow$ Capacitance $C$
*   Damper $B \leftrightarrow$ Reciprocal of Resistance $1/R$ (or Conductance G)
*   Spring $K \leftrightarrow$ Reciprocal of Inductance $1/L$

**Example: Mass-Damper-Spring System (F-I Analogy)**

Mechanical System: $M \ddot{x} + B \dot{x} + K x = F$
Input: $F(t)$, Output: $x(t)$

Equivalent Electrical Circuit (F-I Analogy):
*   Replace $F$ with $I_{in}$.
*   Replace $v$ with voltage $V$.
*   Replace $x$ with flux linkage $\lambda$ (since $V = d\lambda/dt$ and $v=dx/dt$, $x = \int v dt$, so $x \leftrightarrow \lambda$).
*   Replace $M$ with $C$.
*   Replace $B$ with $G = 1/R$.
*   Replace $K$ with $1/L$.

The equation becomes: $C \frac{dV}{dt} + \frac{1}{R} V + \frac{1}{L} \int V dt = I_{in}$
This is the KCL equation for a parallel RLC circuit.

*   Input: $I_{in}(t)$
*   Output: Voltage $V(t)$ across the components.
*   System: Parallel RLC circuit.

If the output is displacement $x(t)$, and $x \leftrightarrow \lambda$, where $V = d\lambda/dt$, then the transfer function $X(s)/F(s)$ is analogous to $\Lambda(s)/I_{in}(s)$.
For a parallel RLC circuit, $I_{in}(s) = C s V(s) + G V(s) + V(s)/(Ls)$.
$I_{in}(s) = V(s) (Cs + G + 1/(Ls))$
$\frac{V(s)}{I_{in}(s)} = \frac{1}{Cs + G + 1/(Ls)}$

Mapping back: $G_{mech}(s) = \frac{X(s)}{F(s)} = \frac{1}{Ms^2 + Bs + K}$
$G_{elec}(s) = \frac{V(s)}{I_{in}(s)} = \frac{1}{Cs + G + 1/(Ls)}$

Comparing the denominators: $Ms^2 + Bs + K \leftrightarrow Cs^2 + Gs + 1/L$.
This confirms the analogy: $M \leftrightarrow C$, $B \leftrightarrow G=1/R$, $K \leftrightarrow 1/L$.

*(Refer to Krishnaswamy, 2003, Chapter 3 for basic system modeling including analogies.)*

### 6.3 Rotational System Analogies

Analogies can also be drawn for rotational systems.

#### Rotational to Electrical (F-V Analogy)

*   Angular Velocity ($\omega$) $\leftrightarrow$ Current ($I$)
*   Angular Displacement ($\theta$) $\leftrightarrow$ Charge ($Q$)
*   Torque ($T$) $\leftrightarrow$ Voltage ($V$)
*   Moment of Inertia ($J$) $\leftrightarrow$ Inductance ($L$)
*   Viscous Friction ($B$) $\leftrightarrow$ Resistance ($R$)
*   Torsional Spring ($K$) $\leftrightarrow$ Reciprocal of Capacitance ($1/C$)

**Example:** Rotational Mass-Damper-Spring system: $J \ddot{\theta} + B \dot{\theta} + K \theta = T$
Equivalent electrical circuit (F-V analogy): Series RLC circuit with $L=J$, $R=B$, $1/C=K$.
Input: $V_{in} \leftrightarrow T$
Output: $Q \leftrightarrow \theta$
Transfer function $ \Theta(s)/T(s) $ is analogous to $ Q(s)/V_{in}(s) $.

#### Rotational to Electrical (F-I Analogy)

*   Angular Velocity ($\omega$) $\leftrightarrow$ Voltage ($V$)
*   Angular Displacement ($\theta$) $\leftrightarrow$ Flux Linkage ($\lambda$)
*   Torque ($T$) $\leftrightarrow$ Current ($I$)
*   Moment of Inertia ($J$) $\leftrightarrow$ Capacitance ($C$)
*   Viscous Friction ($B$) $\leftrightarrow$ Reciprocal of Resistance ($1/R$)
*   Torsional Spring ($K$) $\leftrightarrow$ Reciprocal of Inductance ($1/L$)

**Example:** Rotational Mass-Damper-Spring system: $J \ddot{\theta} + B \dot{\theta} + K \theta = T$
Equivalent electrical circuit (F-I analogy): Parallel RLC circuit with $C=J$, $1/R=B$, $1/L=K$.
Input: $I_{in} \leftrightarrow T$
Output: $V \leftrightarrow \omega$ (note: output is velocity here, not displacement)

If the output is displacement $\theta$, then $\theta \leftrightarrow \lambda$. We know $V = d\lambda/dt$. So the transfer function for displacement $\Theta(s)/T(s)$ is analogous to $V(s)/I_{in}(s)$.

---

## 7. Practice Questions

**Question 1:**
Derive the transfer function $G(s) = \frac{V_o(s)}{V_{in}(s)}$ for the electrical circuit shown below, where $V_{in}(t)$ is the input voltage and $V_o(t)$ is the output voltage across the inductor. Assume zero initial conditions.

[Diagram: A series circuit with a resistor R, a capacitor C, and an inductor L, connected to an input voltage $V_{in}$. The output voltage $V_o$ is taken across the inductor L.]

**Solution 1:**
*   **KVL:** $V_{in}(t) = R i(t) + V_C(t) + V_L(t)$
*   **Component Relations:**
    *   $V_R(t) = R i(t)$
    *   $i(t) = C \frac{dV_C(t)}{dt} \implies V_C(t) = \frac{1}{C} \int i(t) dt$
    *   $V_L(t) = L \frac{di(t)}{dt}$
*   **Output:** $V_o(t) = V_L(t) = L \frac{di(t)}{dt}$

Taking Laplace transform with zero initial conditions:
$V_{in}(s) = R I(s) + \frac{1}{sC} I(s) + LsI(s)$
$V_{in}(s) = I(s) \left( R + \frac{1}{sC} + Ls \right)$
$V_{in}(s) = I(s) \left( \frac{s^2LC + sR C + 1}{sC} \right)$

Output in Laplace domain:
$V_o(s) = LsI(s)$

From the $V_{in}(s)$ equation, we get:
$I(s) = V_{in}(s) \left( \frac{sC}{s^2LC + sRC + 1} \right)$

Substitute $I(s)$ into the $V_o(s)$ equation:
$V_o(s) = Ls \left[ V_{in}(s) \left( \frac{sC}{s^2LC + sRC + 1} \right) \right]$
$V_o(s) = V_{in}(s) \left( \frac{Ls^2C}{s^2LC + sRC + 1} \right)$

The transfer function is:
$$G(s) = \frac{V_o(s)}{V_{in}(s)} = \frac{Ls^2C}{s^2LC + sRC + 1} = \frac{s^2}{s^2 + \frac{R}{L}s + \frac{1}{LC}}$$

**Question 2:**
A mechanical system consists of a mass $M=2$ kg, a damper $B=5$ Ns/m, and a spring $K=10$ N/m, arranged in series. An external force $F(t)$ is applied to the mass, and the displacement $x(t)$ is measured.
a) Write the differential equation governing the system.
b) Derive the transfer function $G(s) = \frac{X(s)}{F(s)}$.

**Solution 2:**
a) The governing differential equation for a mass-spring-damper system is $M \ddot{x} + B \dot{x} + K x = F$.
Substituting the given values:
$2 \frac{d^2x(t)}{dt^2} + 5 \frac{dx(t)}{dt} + 10 x(t) = F(t)$

b) Taking the Laplace transform of the differential equation with zero initial conditions:
$2s^2X(s) + 5sX(s) + 10X(s) = F(s)$
$X(s)(2s^2 + 5s + 10) = F(s)$

The transfer function is:
$$G(s) = \frac{X(s)}{F(s)} = \frac{1}{2s^2 + 5s + 10}$$

**Question 3:**
For the rotational mechanical system described by the equation $J \ddot{\theta} + B \dot{\theta} = T$, where $J=3$ kg-m$^2$ and $B=2$ Ns/m.
a) Draw the mechanical system diagram.
b) Find the transfer function $\Theta(s)/T(s)$ using the Force-Voltage analogy.

**Solution 3:**
a) Mechanical System Diagram: A body with moment of inertia $J$ attached to a damper $B$. An external torque $T(t)$ is applied, and the angular displacement is $\theta(t)$.

b) Using the Force-Voltage (F-V) analogy for rotational systems:
*   Torque ($T$) $\leftrightarrow$ Voltage ($V$)
*   Angular Velocity ($\omega$) $\leftrightarrow$ Current ($I$)
*   Angular Displacement ($\theta$) $\leftrightarrow$ Charge ($Q$)
*   Moment of Inertia ($J$) $\leftrightarrow$ Inductance ($L$)
*   Viscous Friction ($B$) $\leftrightarrow$ Resistance ($R$)

The mechanical equation is $J \ddot{\theta} + B \dot{\theta} = T$.
The analogous electrical equation is $L \frac{dI}{dt} + RI = V$.

The transfer function of this electrical circuit is $\frac{Q(s)}{V(s)} = \frac{1}{Ls^2 + Rs}$.

Mapping back to the mechanical system:
$J \leftrightarrow L$, $B \leftrightarrow R$, $T \leftrightarrow V$, $\theta \leftrightarrow Q$.

Therefore, the transfer function $\Theta(s)/T(s)$ is analogous to $Q(s)/V(s)$.
$$ \frac{\Theta(s)}{T(s)} = \frac{Q(s)}{V(s)} = \frac{1}{Ls^2 + Rs} $$
Substituting the analogous values $L=J=3$ and $R=B=2$:
$$ \frac{\Theta(s)}{T(s)} = \frac{1}{3s^2 + 2s} = \frac{1}{s(3s + 2)} $$

---

## 8. Important Points to Remember

*   **LTI Systems:** Linearity and Time-Invariance are crucial assumptions for using transfer functions.
*   **Transfer Function Definition:** Ratio of Laplace transform of output to input, with zero initial conditions. It's a property of the system itself.
*   **Electrical Systems:** Modeled using KVL/KCL and component relations (R, L, C). Impedances are $R$, $sL$, $1/(sC)$.
*   **Translational Mechanical Systems:** Modeled using Newton's second law. Forces due to Mass ($M\ddot{x}$), Damper ($B\dot{x}$), and Spring ($Kx$).
*   **Rotational Mechanical Systems:** Modeled using Newton's second law for rotation. Torques due to Inertia ($J\ddot{\theta}$), Damper ($B\dot{\theta}$), and Spring ($K\theta$).
*   **Analogies:**
    *   **Force-Voltage (F-V):** $F \leftrightarrow V$, $v \leftrightarrow I$. Mechanical $M, B, K$ map to Electrical $L, R, 1/C$. Results in **series** RLC circuits.
    *   **Force-Current (F-I):** $F \leftrightarrow I$, $v \leftrightarrow V$. Mechanical $M, B, K$ map to Electrical $C, 1/R, 1/L$. Results in **parallel** RLC circuits.
*   **Common Transfer Function Forms:**
    *   First-order: $K / ( \tau s + 1 )$
    *   Second-order: $K / ( s^2 + 2\zeta\omega_n s + \omega_n^2 )$

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 9. References

*   Krishnaswamy, K. (2003). *Industrial Instrumentation*. New Age International Publishers. (Chapter 3: Basic System Modeling)
*   Doebelin, E. O. (1990). *Measurement Systems: Applications and Design*. McGraw-Hill Publishing Company. (Chapter 3: Mechanical Measurement Systems)
*   Nise, N. S. (6/e). *Control Systems Engineering*. Wiley Eastern. (Chapter 2: Linear System Representation)
*   Ogata, K. (5/e). *Modern Control Engineering*. Prentice Hall of India. (Chapter 2: Mathematical Modeling of Dynamic Systems)
*   Patranabis, D. (2017). *Principles of Industrial Instrumentation*. McGraw-Hill Education. (Chapter 2: System Modeling)

---