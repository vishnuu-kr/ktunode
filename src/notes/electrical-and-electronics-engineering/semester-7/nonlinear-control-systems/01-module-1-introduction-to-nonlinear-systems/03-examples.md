---
title: "Examples."
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 1: Introduction to nonlinear systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3699a"
status: "completed"
scrapedAt: "2026-05-23T16:38:01.736Z"
---
# NONLINEAR CONTROL SYSTEMS: Module 1: Introduction to Nonlinear Systems

## Topic: Examples

This module introduces the fundamental concepts of nonlinear control systems, focusing on understanding their behavior and identifying scenarios where linear approximations are insufficient. This topic specifically delves into diverse examples that illustrate the inherent nonlinearity in various engineering and physical systems.

### 1. Learning Outcomes Covered

This topic contributes to the following learning outcomes:

*   **CO1: Analyse the qualitative behaviour of nonlinear systems about their equilibrium points. (Knowledge Level: K3)** - By examining various examples, we will begin to understand how nonlinearities affect system behavior near equilibrium points.
*   **CO2: Analyse the stability of nonlinear systems. (Knowledge Level: K3)** - Examples will implicitly or explicitly showcase systems with potentially complex stability characteristics that differ from linear systems.
*   **CO3: Analyse the behaviour of nonlinear systems using frequency domain analysis. (Knowledge Level: K2)** - While not the primary focus of this topic, some examples might hint at how nonlinearities complicate frequency domain interpretations.
*   **CO4: Design feedback controller for nonlinear systems. (Knowledge Level: K3)** - Understanding the types of nonlinearities through examples is crucial for later controller design.

### 2. Key Concepts and Definitions

*   **Nonlinear System:** A system whose behavior cannot be described by linear differential equations. This means the superposition principle does not hold. If $y_1(t)$ is the response to $u_1(t)$ and $y_2(t)$ is the response to $u_2(t)$, then the response to $a u_1(t) + b u_2(t)$ is not necessarily $a y_1(t) + b y_2(t)$.
*   **Equilibrium Point (or Equilibrium State):** A state of the system where all its time derivatives are zero. For a system $\dot{x} = f(x, u)$, an equilibrium point $x_e$ exists if $\dot{x} = 0$. If the input $u$ is constant ($u_e$), then $f(x_e, u_e) = 0$.
*   **Linearization:** The process of approximating a nonlinear system with a linear one around a specific operating point (equilibrium point). This is a fundamental technique in nonlinear control but has limitations when behavior far from the operating point is of interest.
*   **Qualitative Analysis:** The study of system behavior (e.g., stability, oscillations, limit cycles) without necessarily finding explicit analytical solutions for the state variables. Phase plane analysis is a common tool for qualitative analysis of second-order systems.

### 3. Examples of Nonlinear Systems

Nonlinearities are ubiquitous in real-world systems. Here are several key examples that highlight different types of nonlinear behavior:

#### 3.1. Mechanical Systems with Friction

*   **Description:** Many mechanical systems, such as robotic manipulators, automotive suspensions, and actuators, experience friction. Friction forces are often nonlinear with respect to velocity.
*   **Types of Friction:**
    *   **Viscous Friction:** Proportional to velocity ($F_v = bv$). This is linear.
    *   **Coulomb Friction (Dry Friction):** A constant force opposing motion, independent of velocity magnitude, but dependent on the normal force. It changes direction as the velocity changes direction.
    *   **Stiction:** The static friction that must be overcome to initiate motion. It is often higher than kinetic friction.
    *   **Hysteresis:** Friction can exhibit hysteresis, where the force depends on the history of motion.

*   **Mathematical Representation (Simplified):** Consider a simple mass-spring-damper system with Coulomb friction.
    $m\ddot{x} + c\dot{x} + kx + F_f(\dot{x}) = u(t)$
    where $F_f(\dot{x})$ represents the friction force. For Coulomb friction:
    $F_f(\dot{x}) = \mu N \text{ sgn}(\dot{x})$
    where $\mu$ is the coefficient of kinetic friction, $N$ is the normal force, and $\text{sgn}(\cdot)$ is the sign function.

*   **Implications:**
    *   **Dead Zones:** For the system to move, the applied force must overcome stiction. This creates a region around zero velocity where the system does not respond (a dead zone).
    *   **Limit Cycles:** Friction can lead to self-sustained oscillations (limit cycles) in some systems, which are not predicted by linear models.
    *   **Behavior around Equilibrium:** The presence of Coulomb friction means that the system might not return to its exact equilibrium position after a disturbance; it might settle at a small distance from it.

*   **Textbook Reference:** Khalil (2002) discusses friction in Chapter 1.1.

#### 3.2. Saturation (Actuator Saturation)

*   **Description:** Actuators (motors, hydraulic cylinders, etc.) have physical limitations on their output. For example, a motor cannot produce infinite torque, and a hydraulic valve cannot open beyond its maximum or minimum position.
*   **Mathematical Representation:**
    *   **Saturation Function:**
        $u_{sat}(x) = \begin{cases} u_{max} & \text{if } x > u_{max} \\ x & \text{if } -u_{max} \le x \le u_{max} \\ -u_{max} & \text{if } x < -u_{max} \end{cases}$
        or more compactly, $u_{sat}(x) = \text{sat}(x/u_{max})u_{max}$, where $\text{sat}(\sigma)$ is the sign function multiplied by $\sigma$ clipped at $\pm 1$.

*   **Implications:**
    *   **Loss of Linearity:** If an actuator is saturated, the output is no longer proportional to the input signal.
    *   **Performance Degradation:** Overdriving an actuator can lead to reduced performance, slower response, and increased wear.
    *   **Instability:** In feedback control, saturation can lead to limit cycles or even instability, particularly if the controller is trying to push the actuator beyond its limits. For example, a well-tuned linear controller might cause sustained oscillations when applied to a system with saturated actuators.

*   **Textbook Reference:** Slotine and Li (1991) discuss saturation extensively in the context of robust control and controller design, particularly in Chapter 6.

#### 3.3. Hysteresis in Relays and Thermostats

*   **Description:** Hysteresis is a phenomenon where the output of a system depends not only on the current input but also on its past inputs. This is common in systems with switching elements or memory effects.
*   **Example: On-Off Controller (Relay Control):** A simple thermostat controlling a heating system is a classic example. The heater turns on when the temperature drops below a certain threshold and turns off when it rises above another threshold (with a hysteresis band).
*   **Mathematical Representation (Simplified Relay with Hysteresis):**
    $y = H(e) = \begin{cases} +M & \text{if } e > h \\ \pm M & \text{if } e = h \text{ or } e = -h \text{ (depending on history)} \\ -M & \text{if } e < -h \end{cases}$
    where $e$ is the error signal, $h$ is the hysteresis band, and $M$ is the relay output amplitude.

*   **Implications:**
    *   **Oscillations:** Hysteresis inherently leads to oscillations around the desired setpoint. The system switches back and forth between states.
    *   **Limit Cycles:** The oscillations in a hysteresis system are a form of limit cycle. The amplitude and frequency of these oscillations depend on the system parameters and the hysteresis band.
    *   **Dead Band:** Similar to friction, a hysteresis band creates a range where the output does not change, introducing a form of dead band.

*   **Textbook Reference:** Khalil (2002) covers relay systems and hysteresis in Chapter 1.1 and its analysis in later chapters.

#### 3.4. Pendulum Systems

*   **Description:** The simple pendulum is a canonical example used extensively in nonlinear dynamics and control. Its equation of motion involves a trigonometric term that introduces nonlinearity.
*   **Mathematical Representation:** For a simple pendulum with angle $\theta$ from the vertical, and considering damping ($c$) and external torque ($\tau$):
    $ml^2\ddot{\theta} + c\dot{\theta} + mgl\sin(\theta) = \tau(t)$
    where $m$ is mass, $l$ is length, $g$ is gravity.
    The nonlinear term is $mgl\sin(\theta)$.

*   **Implications:**
    *   **Multiple Equilibrium Points:**
        *   Stable equilibrium: $\theta = 0$ (pendulum hanging down).
        *   Unstable equilibrium: $\theta = \pi$ (pendulum balanced upright).
    *   **Phase Plane Analysis:** The behavior of the pendulum can be visualized using phase plane analysis (plotting $\dot{\theta}$ vs. $\theta$), which reveals trajectories like oscillations (closed curves) and rotations (open curves).
    *   **Large Angle Oscillations:** For large angles, the $\sin(\theta)$ term significantly deviates from the linear approximation $\theta$, leading to periodic oscillations whose frequency depends on the amplitude.
    *   **Energy Dissipation:** Damping terms ($c\dot{\theta}$) cause energy dissipation, leading to damped oscillations that eventually settle at the stable equilibrium.

*   **Textbook Reference:** Both Khalil (2002) and Slotine and Li (1991) use the pendulum as a primary example for illustrating nonlinear phenomena, equilibrium points, linearization, and stability analysis. Khalil dedicates a section to it in Chapter 1.1.

#### 3.5. Biological and Chemical Systems

*   **Description:** Many biological and chemical processes are inherently nonlinear due to reaction kinetics, saturation effects in enzyme activity, population dynamics, and feedback mechanisms within living organisms.
*   **Examples:**
    *   **Chemical Reactions:** Reaction rates often depend on concentrations in a nonlinear fashion (e.g., mass action kinetics).
    *   **Population Dynamics:** Models like the Lotka-Volterra predator-prey model exhibit cyclical behavior due to nonlinear interactions.
    *   **Enzyme Kinetics (Michaelis-Menten):** The rate of an enzymatic reaction often saturates at high substrate concentrations.
        $v = \frac{V_{max}[S]}{K_m + [S]}$
        where $v$ is the reaction rate, $[S]$ is substrate concentration, $V_{max}$ is maximum rate, and $K_m$ is Michaelis constant. This equation shows a nonlinear relationship between $v$ and $[S]$, approaching $V_{max}$ asymptotically.
    *   **Neuroscience:** Neuron firing models (e.g., Hodgkin-Huxley) are highly nonlinear due to voltage-gated ion channels.

*   **Implications:**
    *   **Bifurcations:** Small changes in parameters can lead to qualitative changes in system behavior.
    *   **Limit Cycles and Oscillations:** Many biological systems exhibit rhythmic behavior.
    *   **Complex Dynamics:** Chaos can arise in some biological and chemical systems.

*   **Textbook Reference:** While not extensively detailed in the primary control textbooks for introductory examples, these are commonly cited as areas where nonlinear control is applied.

#### 3.6. Controlled Systems with Nonlinearities in State Variables

*   **Description:** Sometimes, the nonlinearities are not in the input or actuators but within the system dynamics itself, depending on the state variables.
*   **Example: Robot Manipulators:** The dynamics of robot manipulators involve Coriolis and centrifugal forces, as well as gravity terms, which are nonlinear functions of the joint positions and velocities.
    $M(q)\ddot{q} + C(q, \dot{q})\dot{q} + G(q) = \tau$
    where $q$ is the vector of joint positions, $M(q)$ is the inertia matrix (depends on $q$), $C(q, \dot{q})$ represents Coriolis and centrifugal forces, and $G(q)$ represents gravity forces.

*   **Implications:**
    *   **Coupled Dynamics:** Joint motions are coupled nonlinearly.
    *   **Parameter Variation:** Effective inertia changes with robot configuration.
    *   **Control Challenges:** Linearization around a specific configuration might not be valid for the entire operating range.

*   **Textbook Reference:** Slotine and Li (1991) extensively cover robot manipulator control, where these nonlinearities are central to controller design.

### 4. Practice Questions and Exercises

**Question 1:**
Consider a system described by the differential equation:
$\ddot{x} + x^3 = u(t)$
Is this system linear or nonlinear? Justify your answer using the definition of linearity.

**Answer 1:**
The system is **nonlinear**.
Justification: The term $x^3$ is a nonlinear function of the state variable $x$. According to the definition of linearity, if $y_1(t)$ is the response to $u_1(t)$ and $y_2(t)$ is the response to $u_2(t)$, then the response to $a u_1(t) + b u_2(t)$ must be $a y_1(t) + b y_2(t)$. If we have $x_1$ as the solution for $u_1$ and $x_2$ for $u_2$, then for $a u_1 + b u_2$, we would need:
$\ddot{(ax_1 + bx_2)} + (ax_1 + bx_2)^3 = a u_1(t) + b u_2(t)$
$\implies a\ddot{x}_1 + b\ddot{x}_2 + (ax_1 + bx_2)^3 = a u_1(t) + b u_2(t)$
However, the linear system would require:
$a(\ddot{x}_1 + x_1^3) + b(\ddot{x}_2 + x_2^3) = a u_1(t) + b u_2(t)$
$\implies a\ddot{x}_1 + ax_1^3 + b\ddot{x}_2 + bx_2^3 = a u_1(t) + b u_2(t)$
Comparing the two, we see that $(ax_1 + bx_2)^3 \neq ax_1^3 + bx_2^3$ in general. For example, if $a=1, b=1, x_1=1, x_2=1$, then $(1+1)^3 = 8$, but $1^3 + 1^3 = 2$. Therefore, the superposition principle does not hold, and the system is nonlinear.

**Question 2:**
A simple thermostat controls a heater. The desired temperature is $T_{set} = 20^\circ C$. The heater turns on when the temperature $T$ drops to $19^\circ C$ and turns off when it reaches $21^\circ C$. What type of nonlinearity is exhibited by this system? Describe the resulting behavior.

**Answer 2:**
This system exhibits **hysteresis** (specifically, a relay with hysteresis).
The behavior is characterized by **oscillations** around the setpoint. The temperature will cycle between $19^\circ C$ and $21^\circ C$. When the temperature falls to $19^\circ C$, the heater turns on, causing the temperature to rise. Once it reaches $21^\circ C$, the heater turns off, and the temperature begins to fall again due to heat loss to the environment. This creates a limit cycle.

**Question 3:**
Consider the equation of motion for a simple pendulum:
$ml^2\ddot{\theta} + mgl\sin(\theta) = \tau(t)$
For small angles $\theta$, $\sin(\theta) \approx \theta$. What is the linearized system for small oscillations around the stable equilibrium point ($\theta = 0$)?

**Answer 3:**
The stable equilibrium point is $\theta = 0$. For small angles, we can approximate $\sin(\theta) \approx \theta$.
Substituting this into the equation of motion:
$ml^2\ddot{\theta} + mgl\theta = \tau(t)$
Dividing by $ml^2$:
$\ddot{\theta} + \frac{g}{l}\theta = \frac{1}{ml^2}\tau(t)$
This is the linearized system. It is a second-order linear ordinary differential equation.

**Question 4:**
An actuator has a maximum output voltage of $V_{max} = 5V$. If the controller requests a voltage of $V_{req} = 7V$, what is the actual output voltage of the actuator? What type of nonlinearity is this?

**Answer 4:**
The actual output voltage of the actuator is $5V$.
This is an example of **saturation** or **amplitude limitation**. The actuator cannot provide a voltage exceeding its maximum limit.

### 5. Important Points to Remember

*   **Nonlinearity is the Absence of Superposition:** The fundamental characteristic that distinguishes nonlinear systems from linear ones is the violation of the superposition principle.
*   **Diverse Sources of Nonlinearity:** Nonlinearities can arise from physical limitations (saturation, friction), system physics (trigonometric terms, quadratic damping), control elements (relays, dead zones), and interactions between components.
*   **Qualitative Behavior is Crucial:** Unlike linear systems that are often fully characterized by eigenvalues, understanding the qualitative behavior (equilibrium points, limit cycles, bifurcations) is paramount in nonlinear control.
*   **Linearization is a Tool, Not a Replacement:** Linearization is useful for understanding local behavior around equilibrium points but can be misleading or insufficient for describing behavior over the entire operating range.
*   **Examples Illustrate Fundamental Concepts:** The examples discussed (friction, saturation, hysteresis, pendulums) are archetypal and help build intuition for the types of phenomena encountered in real-world nonlinear systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 6. Textbook References Incorporated

*   **Khalil, H. K. (2002). Nonlinear Systems.**
    *   Chapter 1.1 provides an excellent introduction to nonlinear systems with examples like pendulums, relay systems, and friction.
*   **Slotine, J.-J. E., & Li, W. (1991). Applied Nonlinear Control.**
    *   While this book leans towards control design, its examples and discussions in early chapters often implicitly reference these fundamental nonlinear phenomena as motivations for advanced techniques. Robot manipulators are a key example they use.

This topic sets the stage for the entire course by demonstrating why nonlinear control is necessary and what kinds of complex behaviors we need to analyze and manage. The examples provide concrete illustrations of the abstract concepts.