---
title: "DC servo-motor modelling.  (4 hours)."
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 1: Introduction to Control Systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366b4"
status: "completed"
scrapedAt: "2026-05-23T16:29:19.228Z"
---
# Introduction to Control Systems - Module 1: Introduction to Control Systems

## Topic: DC Servo-Motor Modelling (4 hours)

---

### **1. Introduction to DC Servo Motors**

**1.1 What is a DC Servo Motor?**

*   A DC servo motor is a type of DC electric motor that is specifically designed for precise control of angular or linear position, velocity, and acceleration.
*   They are commonly used in robotics, automation, CNC machines, and other applications where accurate motion control is critical.
*   The "servo" aspect implies that it's part of a feedback control system, allowing for precise adjustments to achieve a desired output.

**1.2 Components of a DC Servo Motor System:**

*   **DC Motor:** The core component that converts electrical energy into mechanical rotational energy.
*   **Gear Train:** Often included to reduce speed and increase torque, which is essential for precise positioning.
*   **Feedback Sensor:** Typically an encoder or potentiometer, which measures the motor's shaft position or velocity. This information is fed back to the controller.
*   **Controller (e.g., Amplifier/Driver):** Receives the feedback signal and the desired setpoint from the user or a higher-level control system, and generates the appropriate voltage/current to drive the motor.

**1.3 Applications:**

*   Robotic arms and joints
*   Automated manufacturing processes
*   Camera pan/tilt mechanisms
*   Automotive systems (e.g., electric power steering)
*   Printers and scanners

---

### **2. Fundamental Principles of DC Motors**

**2.1 Motor Construction:**

*   **Stator:** The stationary part, containing field poles (magnets or electromagnets) that create a magnetic field. In a permanent magnet DC motor (PMDC), these are permanent magnets.
*   **Rotor (Armature):** The rotating part, consisting of windings (coils of wire) mounted on a core.
*   **Commutator:** A rotary electrical switch that reverses the direction of current in the armature windings at the appropriate time, ensuring continuous rotation.
*   **Brushes:** Stationary contacts that connect the DC power source to the commutator segments.

**2.2 Electromechanical Conversion:**

*   **Torque Production:** When current flows through the armature windings in the presence of the magnetic field, a force is generated on the wires (Lorentz force). This force creates a torque, causing the rotor to rotate.
    *   **Torque ($\tau$) is directly proportional to the armature current ($I_a$) and the magnetic field flux ($\phi$).**
    *   For PMDC motors, the magnetic field is constant, so $\tau \propto I_a$. We can write this as $\tau = K_t I_a$, where $K_t$ is the torque constant.

*   **Back EMF (Electromotive Force):** As the rotor rotates within the magnetic field, a voltage is induced in the armature windings. This induced voltage, known as back EMF ($e_b$), opposes the applied armature voltage.
    *   **Back EMF ($e_b$) is directly proportional to the angular velocity ($\omega$) of the motor and the magnetic field flux ($\phi$).**
    *   For PMDC motors, $e_b \propto \omega$. We can write this as $e_b = K_e \omega$, where $K_e$ is the back EMF constant.
    *   **Important Point:** In SI units, the torque constant ($K_t$) and back EMF constant ($K_e$) have the same numerical value when expressed in appropriate units (e.g., Nm/A and Vs/rad for $K_t$ and $K_e$ respectively).

---

### **3. Electrical Subsystem Modelling**

**3.1 Armature Circuit:**

*   The armature circuit is an electrical circuit consisting of the armature winding's resistance ($R_a$) and inductance ($L_a$), connected to the DC voltage source ($e(t)$) through the brushes.
*   The applied voltage $e(t)$ must overcome the back EMF ($e_b$) and the voltage drop across the armature resistance and inductance.

**3.2 Applying Kirchhoff's Voltage Law (KVL):**

*   Applying KVL to the armature circuit:
    $e(t) = I_a(t)R_a + L_a \frac{dI_a(t)}{dt} + e_b(t)$

*   Substituting $e_b(t) = K_e \omega(t)$:
    $e(t) = I_a(t)R_a + L_a \frac{dI_a(t)}{dt} + K_e \omega(t)$

**3.3 Transfer Function Approach (Laplace Domain):**

*   Taking the Laplace transform of the KVL equation (assuming zero initial conditions):
    $E(s) = I_a(s)R_a + sL_a I_a(s) + K_e \Omega(s)$

*   Rearranging to find the transfer function between armature voltage and armature current:
    $E(s) = I_a(s) (R_a + sL_a) + K_e \Omega(s)$

*   **Relationship between Armature Current and Torque:**
    $\tau(t) = K_t I_a(t)$
    In the Laplace domain:
    $\Tau(s) = K_t I_a(s)$
    Therefore, $I_a(s) = \frac{\Tau(s)}{K_t}$

*   Substitute $I_a(s)$ back into the KVL equation:
    $E(s) = \frac{\Tau(s)}{K_t} R_a + sL_a \frac{\Tau(s)}{K_t} + K_e \Omega(s)$

*   Rearranging to express torque in terms of applied voltage and speed:
    $\Tau(s) = K_t \left( \frac{E(s) - K_e \Omega(s)}{R_a + sL_a} \right)$

**3.4 Simplifying Assumptions for DC Servo Motors:**

*   **Negligible Armature Inductance ($L_a \approx 0$):** In many DC servo motors, the inductance of the armature winding is very small. This significantly simplifies the model.
    *   If $L_a \approx 0$, the armature KVL equation becomes:
        $e(t) = I_a(t)R_a + K_e \omega(t)$
    *   In the Laplace domain:
        $E(s) = I_a(s)R_a + K_e \Omega(s)$
    *   This gives us: $I_a(s) = \frac{E(s) - K_e \Omega(s)}{R_a}$

*   **Transfer Function of the Electrical Subsystem (with $L_a \approx 0$):**
    *   We know $\Tau(s) = K_t I_a(s)$. Substituting the expression for $I_a(s)$:
        $\Tau(s) = K_t \left( \frac{E(s) - K_e \Omega(s)}{R_a} \right)$
    *   Rearranging to find the transfer function between applied voltage $E(s)$ and torque $\Tau(s)$:
        $\Tau(s) = \frac{K_t}{R_a} E(s) - \frac{K_t K_e}{R_a} \Omega(s)$
    *   Let $K_m = \frac{K_t}{R_a}$ (Motor torque constant adjusted for resistance)
    *   Let $K_b = \frac{K_t K_e}{R_a}$ (Motor damping constant, incorporating back EMF effect)
    *   So, $\Tau(s) = K_m E(s) - K_b \Omega(s)$

---

### **4. Mechanical Subsystem Modelling**

**4.1 Torque-Speed Relationship:**

*   The generated torque ($\tau$) by the motor must overcome opposing torques, such as:
    *   **Inertial Torque ($\tau_J$):** Torque required to accelerate the rotor's inertia. $\tau_J = J \frac{d\omega}{dt}$, where $J$ is the moment of inertia.
    *   **Viscous Friction Torque ($\tau_f$):** Torque due to viscous friction, which is proportional to the angular velocity. $\tau_f = b \omega$, where $b$ is the viscous friction coefficient.
    *   **Load Torque ($\tau_L$):** Torque required by the external load connected to the motor shaft.

**4.2 Applying Newton's Second Law of Rotation:**

*   The net torque acting on the rotor is the sum of the generated torque and the opposing torques.
*   $\tau_{motor}(t) = \tau_J(t) + \tau_f(t) + \tau_L(t)$
*   Substituting the expressions:
    $\tau_{motor}(t) = J \frac{d\omega(t)}{dt} + b \omega(t) + \tau_L(t)$

**4.3 Transfer Function of the Mechanical Subsystem:**

*   In the Laplace domain (assuming zero initial conditions and $\tau_L(s) = 0$ for now, to find the inherent motor dynamics):
    $\Tau_{motor}(s) = J s \Omega(s) + b \Omega(s)$
    $\Tau_{motor}(s) = (Js + b) \Omega(s)$

*   The transfer function relating motor torque to angular velocity is:
    $\frac{\Omega(s)}{\Tau_{motor}(s)} = \frac{1}{Js + b}$

**4.4 Combining Electrical and Mechanical Subsystems:**

*   We have two key relationships:
    1.  $\Tau(s) = K_m E(s) - K_b \Omega(s)$ (From Electrical Subsystem)
    2.  $\Omega(s) = \frac{1}{Js + b} \Tau(s)$ (From Mechanical Subsystem)

*   Substituting the second equation into the first one to eliminate $\Tau(s)$:
    $\Tau(s) = K_m E(s) - K_b \left( \frac{1}{Js + b} \Tau(s) \right)$

*   Rearrange to solve for $\Tau(s)$:
    $\Tau(s) \left( 1 + \frac{K_b}{Js + b} \right) = K_m E(s)$
    $\Tau(s) \left( \frac{Js + b + K_b}{Js + b} \right) = K_m E(s)$
    $\Tau(s) = \frac{K_m (Js + b)}{Js + b + K_b} E(s)$

*   Now substitute this expression for $\Tau(s)$ into the mechanical equation $\Omega(s) = \frac{1}{Js + b} \Tau(s)$:
    $\Omega(s) = \frac{1}{Js + b} \left( \frac{K_m (Js + b)}{Js + b + K_b} E(s) \right)$

*   This simplifies to:
    $\Omega(s) = \frac{K_m}{Js + b + K_b} E(s)$

*   **This is the complete transfer function of the DC servo motor, relating the applied armature voltage to the angular velocity of the shaft.**

**4.5 Including Load Torque:**

*   If there's an external load torque $\Tau_L(s)$, the mechanical equation becomes:
    $\Tau_{motor}(s) = J \frac{d\omega(t)}{dt} + b \omega(t) + \tau_L(t)$
    $\Tau_{motor}(s) = (Js + b) \Omega(s) + \Tau_L(s)$

*   The electrical equation is still:
    $\Tau_{motor}(s) = K_m E(s) - K_b \Omega(s)$

*   Equating the two expressions for $\Tau_{motor}(s)$:
    $K_m E(s) - K_b \Omega(s) = (Js + b) \Omega(s) + \Tau_L(s)$

*   Rearranging to find the transfer function from $E(s)$ to $\Omega(s)$ when a load torque is present:
    $K_m E(s) - \Tau_L(s) = (Js + b + K_b) \Omega(s)$
    $\Omega(s) = \frac{K_m E(s) - \Tau_L(s)}{Js + b + K_b}$

*   The transfer function from applied voltage $E(s)$ to angular velocity $\Omega(s)$, assuming no load torque, is:
    $\boxed{\frac{\Omega(s)}{E(s)} = \frac{K_m}{Js + (b + K_b)}}$

    *   **Important Point:** The term $(b + K_b)$ represents the total damping of the system, combining mechanical viscous friction ($b$) and electrical damping due to back EMF ($K_b$).

---

### **5. Modeling with Gear Trains (Optional but common in Servo Systems)**

**5.1 Purpose of Gear Trains:**

*   To reduce the high speed of the motor to a lower speed required by the load.
*   To increase the torque delivered to the load.

**5.2 Effects of Gear Ratio:**

*   Let the gear ratio be $N$, where $N = \frac{\text{Angular velocity of motor shaft}}{\text{Angular velocity of output shaft}} = \frac{\omega_m}{\omega_L}$.
*   Conversely, the torque is amplified by the gear ratio (ignoring friction in the gears):
    $\tau_L = N \tau_m$ (where $\tau_m$ is motor torque and $\tau_L$ is load torque at the output shaft).

*   **Inertia Referred to Motor Shaft:** The inertia of the load referred to the motor shaft is $J_L' = J_L / N^2$.
*   **Friction Referred to Motor Shaft:** The friction of the load referred to the motor shaft is $b_L' = b_L / N^2$.

**5.3 Modelling with Gear Train:**

*   If the transfer function $\frac{\Omega(s)}{E(s)} = \frac{K_m}{Js + b}$ represents the motor itself, and we are interested in the output shaft velocity $\Omega_L(s)$:
    $\Omega_m(s) = \frac{K_m}{Js + b} E(s)$
    And $\Omega_L(s) = \frac{\Omega_m(s)}{N}$ (assuming ideal gears)

*   So, the transfer function from applied armature voltage to output shaft velocity is:
    $\frac{\Omega_L(s)}{E(s)} = \frac{1}{N} \frac{K_m}{Js + b} = \frac{K_m/N}{Js + b}$

*   **Note:** If the inertia and friction are referred to the output shaft, then the dynamics on the output shaft are represented by $J_{eq} = J_m/N^2 + J_L$ and $b_{eq} = b_m/N^2 + b_L$.

---

### **6. Modeling for Position Control**

**6.1 Relation between Velocity and Position:**

*   Angular position ($\theta$) is the integral of angular velocity ($\omega$).
*   $\omega(t) = \frac{d\theta(t)}{dt}$
*   In the Laplace domain: $\Omega(s) = s \Theta(s)$

**6.2 Transfer Function for Position:**

*   Starting with the velocity transfer function:
    $\frac{\Omega(s)}{E(s)} = \frac{K_m}{Js + (b + K_b)}$

*   Substitute $\Omega(s) = s \Theta(s)$:
    $\frac{s \Theta(s)}{E(s)} = \frac{K_m}{Js + (b + K_b)}$

*   The transfer function from applied voltage to angular position is:
    $\frac{\Theta(s)}{E(s)} = \frac{K_m}{s(Js + (b + K_b))}$

    *   **This represents a Type-1 system due to the 's' in the denominator.**

---

### **7. Key Concepts and Definitions**

*   **Torque Constant ($K_t$):** Relates the torque produced by the motor to the armature current.
*   **Back EMF Constant ($K_e$):** Relates the back EMF generated by the motor to its angular velocity.
*   **Armature Resistance ($R_a$):** Electrical resistance of the armature winding.
*   **Armature Inductance ($L_a$):** Electrical inductance of the armature winding (often neglected for simplicity).
*   **Moment of Inertia ($J$):** Resistance of the rotor to angular acceleration.
*   **Viscous Friction Coefficient ($b$):** Resistance to motion proportional to angular velocity.
*   **Angular Velocity ($\omega$):** Rate of change of angular position.
*   **Angular Position ($\theta$):** The rotational orientation of the motor shaft.
*   **Load Torque ($\tau_L$):** External torque applied to the motor shaft.
*   **Gear Ratio ($N$):** Ratio of motor angular velocity to output shaft angular velocity.

---

### **8. Learning Outcomes Addressed**

*   **CO1 (K2): To represent continuous time systems in the classical domain.**
    *   The derivation of the transfer function $\frac{\Theta(s)}{E(s)} = \frac{K_m}{s(Js + (b + K_b))}$ represents the DC servo motor as a continuous-time system in the classical (Laplace) domain.

*   **CO5 (K2): To represent continuous time systems in the classical domain.** (Identical to CO1, suggesting a potential typo in the original learning outcomes. The notes fully cover this.)

---

### **9. Practice Questions and Exercises**

**Question 1:** A DC servo motor has the following parameters:
*   $R_a = 2 \text{ } \Omega$
*   $L_a = 10 \text{ mH} = 0.01 \text{ H}$
*   $K_t = 0.05 \text{ Nm/A}$
*   $K_e = 0.05 \text{ Vs/rad}$
*   $J = 0.01 \text{ kgm}^2$
*   $b = 0.001 \text{ Nm s/rad}$

**(a)** Derive the transfer function from armature voltage $E(s)$ to angular velocity $\Omega(s)$.
**(b)** Simplify the transfer function by neglecting the armature inductance $L_a$.
**(c)** Calculate the motor torque constant $K_m$ and the total damping constant $(b + K_b)$ for the simplified model.
**(d)** Derive the transfer function from armature voltage $E(s)$ to angular position $\Theta(s)$ using the simplified model.

**Answer 1:**

**(a) Transfer function including $L_a$:**
The general equation is $E(s) = I_a(s)R_a + sL_a I_a(s) + K_e \Omega(s)$.
And $\Omega(s) = \frac{1}{Js+b} \tau(s)$.
Also $\tau(s) = K_t I_a(s)$.
$I_a(s) = \frac{\tau(s)}{K_t}$
$E(s) = \frac{\tau(s)}{K_t}R_a + sL_a \frac{\tau(s)}{K_t} + K_e \Omega(s)$
$E(s) = \frac{R_a + sL_a}{K_t} \tau(s) + K_e \Omega(s)$
Substitute $\tau(s) = (Js+b)\Omega(s)$:
$E(s) = \frac{R_a + sL_a}{K_t} (Js+b)\Omega(s) + K_e \Omega(s)$
$E(s) = \left[ \frac{(R_a + sL_a)(Js+b)}{K_t} + K_e \right] \Omega(s)$
$E(s) = \left[ \frac{R_aJs + R_ab + s^2L_aJs + sL_ab}{K_t} + K_e \right] \Omega(s)$
$E(s) = \left[ \frac{L_a J s^2 + (R_a J + L_a b) s + R_a b}{K_t} + K_e \right] \Omega(s)$
$E(s) = \left[ \frac{L_a J}{K_t} s^2 + \frac{R_a J + L_a b}{K_t} s + \frac{R_a b}{K_t} + K_e \right] \Omega(s)$
$\frac{\Omega(s)}{E(s)} = \frac{1}{\frac{L_a J}{K_t} s^2 + \frac{R_a J + L_a b}{K_t} s + \frac{R_a b}{K_t} + K_e}$
Plugging in values:
$L_a J = 0.01 \times 0.01 = 0.0001$
$R_a J = 2 \times 0.01 = 0.02$
$L_a b = 0.01 \times 0.001 = 0.00001$
$R_a b = 2 \times 0.001 = 0.002$
$K_t = 0.05$
$K_e = 0.05$

$\frac{\Omega(s)}{E(s)} = \frac{1}{\frac{0.0001}{0.05} s^2 + \frac{0.02 + 0.00001}{0.05} s + \frac{0.002}{0.05} + 0.05}$
$\frac{\Omega(s)}{E(s)} = \frac{1}{0.002 s^2 + 0.4002 s + 0.04 + 0.05}$
$\frac{\Omega(s)}{E(s)} = \frac{1}{0.002 s^2 + 0.4002 s + 0.09}$

**(b) Simplified transfer function ($L_a \approx 0$):**
$\frac{\Omega(s)}{E(s)} = \frac{K_m}{Js + (b + K_b)}$
First, calculate $K_m$ and $K_b$:
$K_m = \frac{K_t}{R_a} = \frac{0.05}{2} = 0.025 \text{ rad/Vs}$
$K_b = \frac{K_t K_e}{R_a} = \frac{0.05 \times 0.05}{2} = \frac{0.0025}{2} = 0.00125 \text{ s}^{-1}$

Now substitute these into the simplified transfer function:
$\frac{\Omega(s)}{E(s)} = \frac{0.025}{0.01 s + (0.001 + 0.00125)}$
$\frac{\Omega(s)}{E(s)} = \frac{0.025}{0.01 s + 0.00225}$

**(c) $K_m$ and $(b + K_b)$:**
From part (b):
$K_m = 0.025 \text{ rad/Vs}$
Total damping constant $(b + K_b) = 0.001 + 0.00125 = 0.00225 \text{ s}^{-1}$

**(d) Transfer function from $E(s)$ to $\Theta(s)$ (simplified model):**
We know $\Omega(s) = s \Theta(s)$.
So, $\frac{\Theta(s)}{E(s)} = \frac{1}{s} \frac{\Omega(s)}{E(s)}$
$\frac{\Theta(s)}{E(s)} = \frac{1}{s} \left( \frac{0.025}{0.01 s + 0.00225} \right)$
$\frac{\Theta(s)}{E(s)} = \frac{0.025}{s(0.01 s + 0.00225)}$

**Question 2:** What is the primary role of the commutator in a DC motor? Explain why armature inductance is often neglected in simplified servo motor models.

**Answer 2:**
*   **Role of the Commutator:** The commutator, along with the brushes, acts as a mechanical rotary switch. It reverses the direction of current in the armature windings at the precise moment to ensure that the torque produced by the motor consistently acts in the same direction, leading to continuous rotation.
*   **Neglecting Armature Inductance:** In many DC servo motors, especially those designed for fast response and precise control, the physical length and size of the armature windings are minimized. This results in a very low inductance ($L_a$). When $L_a$ is small compared to $R_a$, the term $sL_a$ becomes negligible for the frequencies of interest in typical control applications, simplifying the mathematical model significantly without a substantial loss of accuracy. The time constant of the electrical circuit, $\tau_e = L_a/R_a$, is very small.

---

### **10. Important Points to Remember**

*   **Torque is proportional to current ($\tau = K_t I_a$).**
*   **Back EMF is proportional to speed ($e_b = K_e \omega$).**
*   **Newton's Second Law for rotation: $\tau_{net} = J\frac{d\omega}{dt} + b\omega$.**
*   **The transfer function of a simplified DC motor (neglecting $L_a$) relating voltage to velocity is $\frac{\Omega(s)}{E(s)} = \frac{K_m}{Js + (b + K_b)}$, where $K_m = K_t/R_a$ and $K_b = K_tK_e/R_a$.**
*   **The transfer function relating voltage to position is $\frac{\Theta(s)}{E(s)} = \frac{K_m}{s(Js + (b + K_b))}$.**
*   **Gear trains reduce speed and increase torque, affecting the overall system dynamics (inertia and friction referred to motor or output shaft).**
*   **The term $(b + K_b)$ represents the total damping in the system.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **11. References**

*   **Control Systems Engineering by Norman S. Nise (Wiley, 5th Edition, 2009):** Chapters covering modeling of rotational systems, DC motors, and transfer function derivation.
*   **Control Systems Engineering by I. J. Nagrath, M. Gopal (New Age, 5th Edition, 2009):** Sections on DC motor modeling, electromechanical systems, and basic control system components.
*   **Automatic Control Systems by Kuo B. C (Prentice Hall of India, 9th Edition, 2014):** Detailed explanations of DC motor dynamics and their representation.
*   **Modern Control Systems by Dorf R. C. , Bishop R. H (Pearson Education India, 12th Edition, 2013):** Chapters discussing the fundamental principles of servomechanisms and their modeling.
*   **Modern Control Engineering by Katsuhiko Ogata (Pearson, 5th Edition, 2009):** Comprehensive treatment of system modeling, particularly electromechanical systems like DC motors.

---