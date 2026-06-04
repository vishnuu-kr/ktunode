---
title: "Objective: Obtain the transfer function and state space model of the armature and field-controlled DC motor by experiment."
subject: "CONTROL SYSTEM LAB"
module: "Module 1: Transfer Function and State Space Modelling of Armature and Field Controlled DC Motor."
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36753"
status: "completed"
scrapedAt: "2026-05-23T16:25:02.221Z"
---
# CONTROL SYSTEM LAB - Module 1: Transfer Function and State Space Modelling of Armature and Field Controlled DC Motor

## Objective: Obtain the Transfer Function and State Space Model of the Armature and Field-Controlled DC Motor by Experiment

This module focuses on the practical aspect of modeling a DC motor, a fundamental component in many control systems. We will move from theoretical understanding to experimental determination of the system's mathematical representation, specifically its transfer function and state-space model.

### 1. Introduction to DC Motors and their Control

#### 1.1 Types of DC Motors and their Control Mechanisms

DC motors are electromechanical devices that convert electrical energy into mechanical energy. Their speed and torque can be controlled by varying either the armature voltage or the field voltage.

*   **Armature Controlled DC Motor:**
    *   The field voltage/current is kept constant.
    *   The speed is varied by changing the armature voltage ($V_a$).
    *   This is a common and simpler control method.

*   **Field Controlled DC Motor:**
    *   The armature voltage/current is kept constant.
    *   The speed is varied by changing the field voltage/current ($V_f$).
    *   This method is generally used for higher speed operation and when torque is not the primary concern for speed control.

#### 1.2 Importance of Modeling in Control Systems

*   **Understanding System Behavior:** Models provide a mathematical description of how a system responds to inputs. This understanding is crucial for designing effective controllers. (CO1)
*   **Simulation and Analysis:** Models allow for simulation of system behavior under various conditions, enabling analysis without the need for physical experimentation on potentially delicate or expensive hardware. (CO3)
*   **Controller Design:** Accurate models are essential for designing controllers that meet specific performance requirements, such as speed, accuracy, and stability. (CO4)
*   **Predictive Maintenance and Diagnosis:** Models can be used to predict potential failures or diagnose system issues.

### 2. Theoretical Derivation of DC Motor Models

Before performing experiments, it's important to understand the underlying physics that lead to the mathematical models.

#### 2.1 Armature Controlled DC Motor

**Assumptions:**
*   Linear magnetic circuit.
*   Constant field flux.
*   No saturation in the magnetic circuit.

**Electrical Equation (Armature Circuit):**
$V_a(t) = R_a i_a(t) + L_a \frac{di_a(t)}{dt} + V_b(t)$

Where:
*   $V_a(t)$: Armature voltage
*   $R_a$: Armature resistance
*   $i_a(t)$: Armature current
*   $L_a$: Armature inductance
*   $V_b(t)$: Back EMF

**Back EMF Equation:**
$V_b(t) = K_b \omega(t)$

Where:
*   $K_b$: Back EMF constant
*   $\omega(t)$: Angular speed of the motor

**Mechanical Equation (Torque):**
$T_m(t) = J \frac{d\omega(t)}{dt} + B \omega(t)$

Where:
*   $T_m(t)$: Motor torque
*   $J$: Moment of inertia of the rotor and load
*   $B$: Viscous friction coefficient

**Torque-Current Relationship:**
$T_m(t) = K_t i_a(t)$

Where:
*   $K_t$: Torque constant

**Substituting and forming the equations:**

1.  $V_a(t) = R_a i_a(t) + L_a \frac{di_a(t)}{dt} + K_b \omega(t)$
2.  $K_t i_a(t) = J \frac{d\omega(t)}{dt} + B \omega(t)$

**Taking Laplace Transforms (assuming zero initial conditions):**

1.  $V_a(s) = R_a I_a(s) + s L_a I_a(s) + K_b \Omega(s)$
    $V_a(s) = (R_a + s L_a) I_a(s) + K_b \Omega(s)$  (Equation 1')

2.  $K_t I_a(s) = (s J + B) \Omega(s)$  (Equation 2')

**Deriving the Transfer Function $\frac{\Omega(s)}{V_a(s)}$:**

From Equation 2', express $I_a(s)$ in terms of $\Omega(s)$:
$I_a(s) = \frac{(s J + B)}{K_t} \Omega(s)$

Substitute $I_a(s)$ into Equation 1':
$V_a(s) = (R_a + s L_a) \left(\frac{s J + B}{K_t}\right) \Omega(s) + K_b \Omega(s)$
$V_a(s) = \left[ (R_a + s L_a) \frac{(s J + B)}{K_t} + K_b \right] \Omega(s)$

Expand and simplify the term in the bracket:
$\frac{1}{K_t} [ (R_a + s L_a)(s J + B) + K_b K_t ]$
$\frac{1}{K_t} [ s^2 L_a J + s R_a J + s L_a B + R_a B + K_b K_t ]$
$\frac{1}{K_t} [ s^2 L_a J + s (R_a J + L_a B) + (R_a B + K_b K_t) ]$

So, $V_a(s) = \left[ \frac{L_a J}{K_t} s^2 + \frac{R_a J + L_a B}{K_t} s + \frac{R_a B + K_b K_t}{K_t} \right] \Omega(s)$

The transfer function $\frac{\Omega(s)}{V_a(s)}$ is:
$\frac{\Omega(s)}{V_a(s)} = \frac{K_t}{(s L_a + R_a)(s J + B) + K_b K_t}$
$\frac{\Omega(s)}{V_a(s)} = \frac{K_t}{s^2 L_a J + s (R_a J + L_a B) + (R_a B + K_b K_t)}$

This is a second-order transfer function. A common simplification is to consider the electrical time constant $T_a = \frac{L_a}{R_a}$ and the mechanical time constant $T_m = \frac{J}{B}$.
Also, the torque constant $K_t$ and back EMF constant $K_b$ are often related for SI units ($K_t = K_b = K$).

If we approximate $L_a$ to be small or negligible in some DC motors (especially those with permanent magnets and low inductance), the transfer function can be approximated as first-order:
$\frac{\Omega(s)}{V_a(s)} \approx \frac{K_t/R_a B}{s (L_a J/R_a B) + (R_a B + K_b K_t)/R_a B}$

**Commonly used simplified form (assuming $L_a$ is negligible):**
$V_a(s) \approx R_a I_a(s) + K_b \Omega(s)$
$K_t I_a(s) = (s J + B) \Omega(s)$
$I_a(s) = \frac{(s J + B)}{K_t} \Omega(s)$
$V_a(s) = R_a \left(\frac{s J + B}{K_t}\right) \Omega(s) + K_b \Omega(s)$
$V_a(s) = \left[ \frac{R_a}{K_t}(s J + B) + K_b \right] \Omega(s)$
$V_a(s) = \left[ \frac{R_a J}{K_t} s + \frac{R_a B}{K_t} + K_b \right] \Omega(s)$

$\frac{\Omega(s)}{V_a(s)} = \frac{K_t}{s R_a J + R_a B + K_b K_t}$
$\frac{\Omega(s)}{V_a(s)} = \frac{K_t/R_a}{s J + B + K_b K_t/R_a}$
$\frac{\Omega(s)}{V_a(s)} = \frac{K_t/R_a}{s J + (B + K_b K_t/R_a)}$
If $K_t = K_b = K$:
$\frac{\Omega(s)}{V_a(s)} = \frac{K/R_a}{s J + (B + K^2/R_a)}$
$\frac{\Omega(s)}{V_a(s)} = \frac{K/R_a}{s J + (BR_a + K^2)/R_a}$
$\frac{\Omega(s)}{V_a(s)} = \frac{K}{s R_a J + B R_a + K^2}$

A more common simplified form, considering $L_a \approx 0$, leads to:
$\frac{\Omega(s)}{V_a(s)} = \frac{K_t/R_a}{s(J/R_a) + (B/R_a) + K_b K_t / R_a}$ (Incorrect derivation)

Let's re-derive from the first-order assumption ($L_a \approx 0$):
$V_a(s) \approx R_a I_a(s) + K_b \Omega(s)$
$K_t I_a(s) = J s \Omega(s) + B \Omega(s)$

From the first eq: $I_a(s) = \frac{V_a(s) - K_b \Omega(s)}{R_a}$
Substitute into second eq: $K_t \frac{V_a(s) - K_b \Omega(s)}{R_a} = (J s + B) \Omega(s)$
$\frac{K_t}{R_a} V_a(s) - \frac{K_t K_b}{R_a} \Omega(s) = (J s + B) \Omega(s)$
$\frac{K_t}{R_a} V_a(s) = (J s + B + \frac{K_t K_b}{R_a}) \Omega(s)$

$\frac{\Omega(s)}{V_a(s)} = \frac{K_t/R_a}{J s + B + K_t K_b/R_a}$
$\frac{\Omega(s)}{V_a(s)} = \frac{K_t/R_a}{J s + (BR_a + K_t K_b)/R_a}$
$\frac{\Omega(s)}{V_a(s)} = \frac{K_t}{J R_a s + B R_a + K_t K_b}$

If $K_t = K_b = K$:
$\frac{\Omega(s)}{V_a(s)} = \frac{K}{J R_a s + B R_a + K^2}$

This is a first-order system: $\frac{\Omega(s)}{V_a(s)} = \frac{K_{eff}}{s \tau_{eff} + 1}$, where $K_{eff} = \frac{K}{B R_a + K^2}$ and $\tau_{eff} = \frac{J R_a}{B R_a + K^2}$.

*(Refer to Ogata, 5th ed., Chapter 2: Mathematical Modeling of Mechanical Systems and Electrical Systems for detailed derivations)*

#### 2.2 Field Controlled DC Motor

**Assumptions:**
*   Armature voltage and current are constant.
*   Field flux is varied by changing the field voltage.

**Electrical Equation (Field Circuit):**
$V_f(t) = R_f i_f(t) + L_f \frac{di_f(t)}{dt}$

Where:
*   $V_f(t)$: Field voltage
*   $R_f$: Field resistance
*   $i_f(t)$: Field current
*   $L_f$: Field inductance

**Torque-Field Current Relationship:**
The torque is proportional to the product of field flux and armature current. Since armature current is constant, torque is proportional to field flux, which in turn is proportional to field current (assuming linear magnetic circuit).
$T_m(t) = K'_t i_f(t)$

Where:
*   $K'_t$: Torque constant related to field current

**Mechanical Equation:**
$T_m(t) = J \frac{d\omega(t)}{dt} + B \omega(t)$

**Substituting and forming the equations:**

1.  $V_f(s) = R_f I_f(s) + s L_f I_f(s)$
    $V_f(s) = (R_f + s L_f) I_f(s)$  (Equation 3')

2.  $K'_t I_f(s) = (s J + B) \Omega(s)$  (Equation 4')

**Deriving the Transfer Function $\frac{\Omega(s)}{V_f(s)}$:**

From Equation 3', express $I_f(s)$ in terms of $V_f(s)$:
$I_f(s) = \frac{V_f(s)}{R_f + s L_f}$

Substitute $I_f(s)$ into Equation 4':
$K'_t \left(\frac{V_f(s)}{R_f + s L_f}\right) = (s J + B) \Omega(s)$

$\frac{\Omega(s)}{V_f(s)} = \frac{K'_t}{ (R_f + s L_f)(s J + B) }$
$\frac{\Omega(s)}{V_f(s)} = \frac{K'_t}{ s^2 L_f J + s (R_f J + L_f B) + R_f B }$

This is a second-order transfer function. If the field inductance $L_f$ is negligible, the transfer function becomes first-order:
$\frac{\Omega(s)}{V_f(s)} \approx \frac{K'_t}{R_f(s J + B)}$
$\frac{\Omega(s)}{V_f(s)} = \frac{K'_t/R_f}{s J + B}$
$\frac{\Omega(s)}{V_f(s)} = \frac{K'_t / (R_f B)}{s (J/B) + 1}$

This is in the form $\frac{K_{eff}}{s \tau_{eff} + 1}$, where $K_{eff} = \frac{K'_t}{R_f B}$ and $\tau_{eff} = \frac{J}{B}$.

*(Refer to Nise, 5th ed., Chapter 3: Modeling of Transfer Function Systems for detailed derivations of electromechanical systems)*

### 3. State Space Modeling

State-space representation describes a system using a set of first-order differential equations. It's a more general approach than transfer functions and is particularly useful for multi-input, multi-output (MIMO) systems and for analyzing internal system states.

#### 3.1 State-Space Representation of Armature Controlled DC Motor

From the equations of motion:
1.  $L_a \frac{di_a(t)}{dt} = -R_a i_a(t) - K_b \omega(t) + V_a(t)$
2.  $J \frac{d\omega(t)}{dt} = K_t i_a(t) - B \omega(t)$

Let the state variables be $x_1(t) = i_a(t)$ and $x_2(t) = \omega(t)$.
The input is $u(t) = V_a(t)$.
The output can be chosen as speed $\omega(t)$, so $y(t) = \omega(t)$.

The state-space equations in matrix form $\dot{\mathbf{x}}(t) = A \mathbf{x}(t) + B u(t)$ and $y(t) = C \mathbf{x}(t) + D u(t)$:

$\frac{di_a(t)}{dt} = -\frac{R_a}{L_a} i_a(t) - \frac{K_b}{L_a} \omega(t) + \frac{1}{L_a} V_a(t)$
$\frac{d\omega(t)}{dt} = \frac{K_t}{J} i_a(t) - \frac{B}{J} \omega(t)$

In matrix form:
$\begin{bmatrix} \dot{x}_1(t) \\ \dot{x}_2(t) \end{bmatrix} = \begin{bmatrix} -R_a/L_a & -K_b/L_a \\ K_t/J & -B/J \end{bmatrix} \begin{bmatrix} x_1(t) \\ x_2(t) \end{bmatrix} + \begin{bmatrix} 1/L_a \\ 0 \end{bmatrix} u(t)$
$y(t) = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} x_1(t) \\ x_2(t) \end{bmatrix} + 0 u(t)$

So, the matrices are:
$A = \begin{bmatrix} -R_a/L_a & -K_b/L_a \\ K_t/J & -B/J \end{bmatrix}$, $B = \begin{bmatrix} 1/L_a \\ 0 \end{bmatrix}$, $C = \begin{bmatrix} 0 & 1 \end{bmatrix}$, $D = 0$

*(Refer to Nagrath & Gopal, 5th ed., Chapter 4: State Variable Analysis for detailed state-space concepts)*

#### 3.2 State-Space Representation of Field Controlled DC Motor

From the equations of motion:
1.  $L_f \frac{di_f(t)}{dt} = -R_f i_f(t) + V_f(t)$
2.  $J \frac{d\omega(t)}{dt} = K'_t i_f(t) - B \omega(t)$

Let the state variables be $x_1(t) = i_f(t)$ and $x_2(t) = \omega(t)$.
The input is $u(t) = V_f(t)$.
The output is speed $\omega(t)$, so $y(t) = \omega(t)$.

The state-space equations:

$\frac{di_f(t)}{dt} = -\frac{R_f}{L_f} i_f(t) + \frac{1}{L_f} V_f(t)$
$\frac{d\omega(t)}{dt} = \frac{K'_t}{J} i_f(t) - \frac{B}{J} \omega(t)$

In matrix form:
$\begin{bmatrix} \dot{x}_1(t) \\ \dot{x}_2(t) \end{bmatrix} = \begin{bmatrix} -R_f/L_f & 0 \\ K'_t/J & -B/J \end{bmatrix} \begin{bmatrix} x_1(t) \\ x_2(t) \end{bmatrix} + \begin{bmatrix} 1/L_f \\ 0 \end{bmatrix} u(t)$
$y(t) = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} x_1(t) \\ x_2(t) \end{bmatrix} + 0 u(t)$

So, the matrices are:
$A = \begin{bmatrix} -R_f/L_f & 0 \\ K'_t/J & -B/J \end{bmatrix}$, $B = \begin{bmatrix} 1/L_f \\ 0 \end{bmatrix}$, $C = \begin{bmatrix} 0 & 1 \end{bmatrix}$, $D = 0$

### 4. Experimental Determination of Model Parameters

The objective is to obtain these models *by experiment*. This involves applying known inputs to the DC motor and measuring the corresponding outputs.

#### 4.1 Identifying System Parameters (CO1)

**Parameters to be identified:** $R_a, L_a, K_b, J, B$ (for armature control) and $R_f, L_f, K'_t, J, B$ (for field control).

**Experimental Setup:**
*   DC Motor coupled to a load (can be a generator, flywheel, or simply inertia).
*   Variable DC power supply for armature or field.
*   Measuring instruments: Voltmeter, Ammeter, Tachometer (to measure speed), Oscilloscope.
*   Potentiometer or other input devices to vary the voltage.

#### 4.2 Procedure for Armature Controlled DC Motor

**Objective:** Determine $R_a, L_a, K_b, K_t, J, B$.

**Step 1: Measure Electrical Parameters ($R_a, L_a$)**
*   Disconnect the motor from the mechanical load.
*   Apply a DC voltage to the armature terminals.
*   Measure the armature current. The steady-state current $I_a = V_a / R_a$. Thus, $R_a = V_a / I_a$. This gives $R_a$.
*   To determine $L_a$:
    *   Apply a step voltage $V_a$ to the armature.
    *   Observe the armature current $i_a(t)$ using an oscilloscope. The current will rise exponentially according to $i_a(t) = \frac{V_a}{R_a}(1 - e^{-t/T_a})$, where $T_a = L_a/R_a$.
    *   From the transient response, estimate the time constant $T_a$. Then, $L_a = R_a T_a$.
    *   Alternatively, apply a sinusoidal voltage and measure the impedance at a known frequency.

**Step 2: Measure Electromechanical Parameters ($K_b, K_t, K_{em})$**
*   Couple the motor to the load.
*   Run the motor at a constant speed $\omega$ using a constant armature voltage $V_a$.
*   Measure the armature current $I_a$.
*   The back EMF is $V_b = V_a - I_a R_a$.
*   Since $V_b = K_b \omega$, we have $K_b = V_b / \omega$.
*   The torque produced is $T_m = K_t I_a$.
*   The motor torque equals the load torque plus the torque due to friction and inertia. At steady-state with no external load, $T_m = B \omega$. So, $K_t I_a = B \omega$.
*   **Important:** In SI units, $K_b$ (V/(rad/s)) and $K_t$ (Nm/A) are numerically equal. $K_{em} = K_b = K_t = K$.

**Step 3: Measure Mechanical Parameters ($J, B$)**
*   **Method 1: No-load test:**
    *   Apply a constant armature voltage $V_a$ to run the motor at a steady speed $\omega_{nl}$ without any load.
    *   Measure the armature current $I_{nl}$.
    *   The torque developed by the motor is $T_{nl} = K I_{nl}$.
    *   At no load, this torque is used to overcome viscous friction, so $T_{nl} = B \omega_{nl}$.
    *   Therefore, $K I_{nl} = B \omega_{nl}$. If $K$ is known, $B = K I_{nl} / \omega_{nl}$.
*   **Method 2: Load test (applying a known load):**
    *   Couple the motor to a known load (e.g., a DC generator with a known load resistance).
    *   Apply an armature voltage $V_a$ to achieve a speed $\omega$.
    *   Measure armature current $I_a$.
    *   Measure the load torque $T_L$.
    *   The equation of motion is $K I_a = J \frac{d\omega}{dt} + B \omega + T_L$.
    *   At steady-state, $\frac{d\omega}{dt} = 0$, so $K I_a = B \omega + T_L$.
    *   If we perform this at two different speeds or two different loads, we can solve for $B$ and $J$. For example, at no load ($T_L=0, \omega=\omega_{nl}, I_a=I_{nl}$): $K I_{nl} = B \omega_{nl}$. At load ($T_L, \omega, I_a$): $K I_a = B \omega + T_L$.
    *   If a known inertia $J_{add}$ is added to the rotor, the mechanical equation becomes $T_m = (J + J_{add}) \frac{d\omega}{dt} + B \omega$. The transient response can be analyzed to find $J$ and $B$.

**Step 4: Formulate the Transfer Function**
Once $R_a, L_a, K, J, B$ are known, plug them into the derived transfer function:
$\frac{\Omega(s)}{V_a(s)} = \frac{K}{(s L_a + R_a)(s J + B) + K^2}$ (Second-order)
or
$\frac{\Omega(s)}{V_a(s)} = \frac{K}{J R_a s + B R_a + K^2}$ (First-order approximation)

**Step 5: Formulate the State-Space Model**
Using the values obtained, populate the A, B, C, D matrices.

#### 4.3 Procedure for Field Controlled DC Motor

**Objective:** Determine $R_f, L_f, K'_t, J, B$.

**Step 1: Measure Electrical Parameters ($R_f, L_f$)**
*   Disconnect the motor from the armature circuit.
*   Apply a DC voltage to the field terminals.
*   Measure the field current $I_f$. The steady-state current $I_f = V_f / R_f$. Thus, $R_f = V_f / I_f$. This gives $R_f$.
*   To determine $L_f$:
    *   Apply a step voltage $V_f$ to the field.
    *   Observe the field current $i_f(t)$ using an oscilloscope. The current will rise exponentially according to $i_f(t) = \frac{V_f}{R_f}(1 - e^{-t/T_f})$, where $T_f = L_f/R_f$.
    *   From the transient response, estimate the time constant $T_f$. Then, $L_f = R_f T_f$.

**Step 2: Measure Electromechanical Parameter ($K'_t$)**
*   Keep the armature circuit excited with a constant voltage and thus constant current.
*   Run the motor at a constant speed $\omega$ using a constant field voltage $V_f$.
*   Measure the field current $I_f$.
*   The torque produced is $T_m = K'_t i_f(t)$.
*   At steady-state, $T_m = B \omega$. So, $K'_t I_f = B \omega$.

**Step 3: Measure Mechanical Parameters ($J, B$)**
*   Similar to the armature controlled case, perform no-load tests or load tests with the field control.
*   **No-load test:** Apply a constant field voltage $V_f$ to run the motor at a steady speed $\omega_{nl}$ without any load. Measure the field current $I_{nl}$. The torque developed is $T_{nl} = K'_t I_{nl}$. At no load, $T_{nl} = B \omega_{nl}$. So, $K'_t I_{nl} = B \omega_{nl}$. If $K'_t$ is known, $B = K'_t I_{nl} / \omega_{nl}$.
*   **Load test:** Measure torque $T_L$, speed $\omega$, and field current $I_f$. At steady state, $K'_t I_f = B \omega + T_L$.

**Step 4: Formulate the Transfer Function**
Once $R_f, L_f, K'_t, J, B$ are known, plug them into the derived transfer function:
$\frac{\Omega(s)}{V_f(s)} = \frac{K'_t}{(s L_f + R_f)(s J + B)}$ (Second-order)
or
$\frac{\Omega(s)}{V_f(s)} = \frac{K'_t / (R_f B)}{s (J/B) + 1}$ (First-order approximation)

**Step 5: Formulate the State-Space Model**
Using the values obtained, populate the A, B, C, D matrices.

### 5. Experimental Considerations and Best Practices

*   **Coupling:** Ensure the motor is securely coupled to the load. Any slippage will introduce errors.
*   **Load:** The nature of the load (inertia, friction) significantly affects the mechanical parameters $J$ and $B$.
*   **Power Supply:** Use a stable and well-regulated DC power supply.
*   **Measurement Accuracy:** Use calibrated instruments for accurate readings.
*   **Transient vs. Steady-State:** Be clear whether you are analyzing transient behavior (for time constants) or steady-state behavior (for resistances, gains).
*   **Simplifications:** Justify any assumptions made (e.g., neglecting $L_a$ or $L_f$). A small inductance usually means a faster electrical response, potentially allowing a first-order approximation.

### 6. Relating Experimental Results to Course Outcomes

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system.**
    *   This entire module is about conducting experiments (measuring voltages, currents, speeds, transients) to identify parameters ($R_a, L_a, K_b, J, B$, etc.).
*   **CO2: Conduct suitable experiments and determine the performance specifications.**
    *   While not explicitly stated as an objective for *this* topic, the determined parameters are the basis for calculating performance specifications (e.g., settling time, rise time, steady-state error) by analyzing the transfer function or state-space model.
*   **CO3: Analyze a linear continuous time system model using simulation tools.**
    *   Once the transfer function or state-space model is obtained experimentally, it can be implemented in MATLAB/Simulink or other simulation tools to analyze its behavior and predict its response.
*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools.**
    *   The experimentally derived model is the foundation for designing controllers like PID controllers. These controllers are then tuned and tested using simulation before being implemented on the physical system.

### 7. Practice Questions and Answers

**Question 1:** For an armature controlled DC motor, if $V_a(s)/I_a(s) = R_a + sL_a$ and $T_m(s)/I_a(s) = K_t$. The mechanical system is $T_m(s) = (sJ+B)\Omega(s)$. If $V_b(s) = K_b \Omega(s)$, derive the transfer function $\frac{\Omega(s)}{V_a(s)}$.

**Answer:**
The electrical equation is $V_a(s) = I_a(s)(R_a + sL_a) + V_b(s)$.
Substitute $V_b(s) = K_b \Omega(s)$:
$V_a(s) = I_a(s)(R_a + sL_a) + K_b \Omega(s)$.
From the mechanical system and torque equation: $I_a(s) = \frac{(sJ+B)\Omega(s)}{K_t}$.
Substitute $I_a(s)$ into the electrical equation:
$V_a(s) = \frac{(sJ+B)\Omega(s)}{K_t}(R_a + sL_a) + K_b \Omega(s)$
$V_a(s) = \left[ \frac{(sJ+B)(R_a + sL_a)}{K_t} + K_b \right] \Omega(s)$
$V_a(s) = \frac{(sJ+B)(R_a + sL_a) + K_b K_t}{K_t} \Omega(s)$
$\frac{\Omega(s)}{V_a(s)} = \frac{K_t}{(sL_a + R_a)(sJ+B) + K_b K_t}$.

**Question 2:** A DC motor has the following parameters: $R_a = 1 \Omega$, $L_a = 0.1 H$, $J = 0.01 kg \cdot m^2$, $B = 0.005 Nm/(rad/s)$, $K_t = K_b = 0.1 Nm/A$. Assuming $L_a$ is negligible, find the transfer function $\frac{\Omega(s)}{V_a(s)}$.

**Answer:**
Using the simplified first-order approximation derived earlier:
$\frac{\Omega(s)}{V_a(s)} = \frac{K}{J R_a s + B R_a + K^2}$
Plugging in the values:
$K = 0.1$
$J R_a = 0.01 \times 1 = 0.01$
$B R_a = 0.005 \times 1 = 0.005$
$K^2 = (0.1)^2 = 0.01$
$\frac{\Omega(s)}{V_a(s)} = \frac{0.1}{0.01 s + 0.005 + 0.01}$
$\frac{\Omega(s)}{V_a(s)} = \frac{0.1}{0.01 s + 0.015}$
To put it in the standard form $\frac{K_{eff}}{s \tau_{eff} + 1}$:
Divide numerator and denominator by 0.015:
$\frac{\Omega(s)}{V_a(s)} = \frac{0.1/0.015}{(0.01/0.015) s + 1}$
$\frac{\Omega(s)}{V_a(s)} = \frac{6.667}{0.667 s + 1}$

**Question 3:** For a field controlled DC motor, the parameters are $R_f = 100 \Omega$, $L_f = 10 H$, $J = 0.1 kg \cdot m^2$, $B = 0.02 Nm/(rad/s)$, $K'_t = 0.5 Nm/A$. Assuming $L_f$ is negligible, find the transfer function $\frac{\Omega(s)}{V_f(s)}$.

**Answer:**
Using the simplified first-order approximation:
$\frac{\Omega(s)}{V_f(s)} = \frac{K'_t / (R_f B)}{s (J/B) + 1}$
Plugging in the values:
$K'_t = 0.5$
$R_f = 100$
$B = 0.02$
$J = 0.1$

Numerator constant: $\frac{K'_t}{R_f B} = \frac{0.5}{100 \times 0.02} = \frac{0.5}{2} = 0.25$
Time constant denominator term: $\frac{J}{B} = \frac{0.1}{0.02} = 5$

$\frac{\Omega(s)}{V_f(s)} = \frac{0.25}{5 s + 1}$

**Question 4:** Write down the state-space representation matrices (A, B, C, D) for an armature-controlled DC motor with armature resistance $R_a$, armature inductance $L_a$, back EMF constant $K_b$, torque constant $K_t$, moment of inertia $J$, and viscous friction coefficient $B$. Assume the input is armature voltage $V_a$ and the output is angular speed $\omega$.

**Answer:**
State variables: $x_1 = i_a$, $x_2 = \omega$. Input: $u = V_a$. Output: $y = \omega$.
The equations of motion are:
$L_a \frac{di_a}{dt} = -R_a i_a - K_b \omega + V_a$
$J \frac{d\omega}{dt} = K_t i_a - B \omega$

$\frac{di_a}{dt} = -\frac{R_a}{L_a} i_a - \frac{K_b}{L_a} \omega + \frac{1}{L_a} V_a$
$\frac{d\omega}{dt} = \frac{K_t}{J} i_a - \frac{B}{J} \omega$

State-space matrices:
$A = \begin{bmatrix} -R_a/L_a & -K_b/L_a \\ K_t/J & -B/J \end{bmatrix}$
$B = \begin{bmatrix} 1/L_a \\ 0 \end{bmatrix}$
$C = \begin{bmatrix} 0 & 1 \end{bmatrix}$
$D = 0$

### 8. Important Points to Remember

*   **Two main types of DC motor control:** Armature control and Field control.
*   **Modeling involves identifying:** Electrical parameters ($R, L$) and Electromechanical parameters ($K_t, K_b, K'_t$) and Mechanical parameters ($J, B$).
*   **Experimental determination:** Requires careful measurement of voltages, currents, and transient responses.
*   **Transfer Function:** A ratio of output to input in the Laplace domain, useful for classical control design.
*   **State-Space Model:** A set of first-order differential equations, useful for modern control theory and system analysis.
*   **Approximations:** Neglecting inductance ($L_a$ or $L_f$) can simplify the model to a first-order system, often valid for DC motors with small inductances.
*   **Parameter Equality:** In SI units, torque constant $K_t$ and back EMF constant $K_b$ are often numerically equal.
*   **Experimental Accuracy:** The accuracy of the obtained model directly depends on the accuracy of the experimental measurements.

---
This comprehensive set of notes covers the theoretical background, experimental procedures, and practical considerations for obtaining the transfer function and state-space models of DC motors, aligning with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
