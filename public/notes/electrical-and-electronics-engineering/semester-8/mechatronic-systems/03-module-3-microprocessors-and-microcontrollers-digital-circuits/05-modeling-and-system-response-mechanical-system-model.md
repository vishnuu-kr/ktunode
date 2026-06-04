---
title: "Modeling and system response: Mechanical system model"
subject: "MECHATRONIC SYSTEMS"
module: "Module 3: Microprocessors and microcontrollers: Digital circuits"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bab"
status: "completed"
scrapedAt: "2026-05-23T16:42:40.042Z"
---
# MECHATRONIC SYSTEMS - Module 3: Microprocessors and Microcontrollers: Digital Circuits

## Topic: Modeling and System Response: Mechanical System Model

---

### **Introduction**

This module delves into the foundational principles of mechatronic systems, focusing on the role of microprocessors and microcontrollers. Understanding how mechanical systems behave and how to represent this behavior mathematically is crucial for designing effective control strategies. This topic, "Mechanical System Model," lays the groundwork for analyzing and predicting the response of mechanical components within a mechatronic system, thereby informing the selection and programming of microcontrollers.

---

### **Learning Outcomes Addressed in this Topic:**

*   **LO1: Understand the principles of modeling dynamic mechanical systems.** (This is the core of this topic.)
*   **LO2: Identify and describe different types of mechanical system elements (mass, spring, damper).**
*   **LO3: Apply Newton's laws of motion to derive mathematical models for simple mechanical systems.**
*   **LO4: Represent mechanical system models in standard mathematical forms (e.g., differential equations).**
*   **LO5: Understand the concept of system response and its dependence on system parameters.**

---

### **Course Outcomes Alignment:**

*   **CO4: Analyse the models and responses of different systems (Knowledge Level: K3)**
    *   This topic directly contributes to CO4 by equipping students with the ability to *analyze* mechanical system *models* and understand their *responses*.

---

### **Key Concepts and Definitions**

**1. What is a Mechanical System Model?**

*   A **mechanical system model** is a mathematical representation of a physical mechanical system that describes its behavior and how it responds to external forces or inputs.
*   It simplifies complex real-world systems into idealized components that can be analyzed using mathematical tools.
*   These models are essential for predicting system performance, designing controllers, and simulating system behavior before physical implementation.

**(Referenced in: Bolton, Chapter 2: Modelling of Mechanical Systems; Histand & Al-ciatore, Chapter 1: Introduction to Mechatronics and Measurement Systems)**

**2. Fundamental Mechanical Elements**

Mechanical systems can be broken down into three fundamental, idealized elements:

*   **Mass (M):**
    *   Represents inertia. A mass resists changes in its velocity.
    *   **Governing Principle:** Newton's Second Law of Motion ($F = ma$).
    *   **Characteristic:** Mass stores kinetic energy.
    *   **Units:** Kilograms (kg).
    *   **Example:** The weight of a robotic arm, the mass of a vehicle.

*   **Spring (K):**
    *   Represents stiffness or elasticity. A spring exerts a force proportional to its displacement from its equilibrium position.
    *   **Governing Principle:** Hooke's Law ($F = kx$, where $x$ is displacement).
    *   **Characteristic:** Spring stores potential energy (elastic potential energy).
    *   **Units:** Newtons per meter (N/m).
    *   **Example:** Suspension springs in a car, a rubber band.

*   **Damper (B or C):**
    *   Represents resistance to motion (friction or viscosity). A damper exerts a force proportional to its velocity.
    *   **Governing Principle:** Damping Law ($F = bv$, where $v$ is velocity).
    *   **Characteristic:** Damper dissipates energy, typically as heat.
    *   **Units:** Newton-seconds per meter (Ns/m).
    *   **Example:** Shock absorbers in a car, fluid resistance.

**(Referenced in: Bolton, Chapter 2; Histand & Al-ciatore, Chapter 1; Shetty & Kolk, Chapter 3: Mechanical Systems)**

**3. Forces in Mechanical Systems**

*   **Applied Force ($F_{app}(t)$):** An external force applied to the system. This is often the input signal.
*   **Inertial Force ($F_{inertia}$):** The force due to acceleration of a mass ($ma$).
*   **Spring Force ($F_{spring}$):** The force exerted by a spring ($kx$).
*   **Damping Force ($F_{damper}$):** The force exerted by a damper ($bv$).
*   **Friction Force ($F_{friction}$):** Can be modeled as a damper in many cases, but can also be more complex (e.g., static friction, Coulomb friction).

**4. Newton's Laws of Motion**

*   **Newton's First Law (Law of Inertia):** An object at rest stays at rest, and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.
*   **Newton's Second Law ($ \Sigma F = ma $):** The acceleration of an object is directly proportional to the net force acting upon it and inversely proportional to its mass. This is the primary law used for deriving models.
*   **Newton's Third Law (Action-Reaction):** For every action, there is an equal and opposite reaction.

**(Referenced in: Bolton, Chapter 2; Histand & Al-ciatore, Chapter 1)**

---

### **Modeling Simple Mechanical Systems**

The process of modeling involves:
1.  **Identifying the system's components:** Mass, springs, dampers, forces.
2.  **Drawing a Free-Body Diagram (FBD):** A diagram showing all the forces acting on each component of the system.
3.  **Applying Newton's Second Law:** Summing the forces acting on each mass and setting them equal to $ma$.
4.  **Expressing forces in terms of displacements, velocities, and accelerations.**
5.  **Formulating a differential equation** that describes the system's behavior.

**Example 1: Mass-Damper System (First-Order)**

Consider a mass $M$ connected to a damper $B$, moving on a frictionless surface. An external force $F_{app}(t)$ is applied to the mass.

*   **Components:** Mass ($M$), Damper ($B$), Applied Force ($F_{app}(t)$).
*   **Free-Body Diagram:**
    *   Forces acting on mass $M$:
        *   Applied Force ($F_{app}(t)$) in the direction of motion.
        *   Damping Force ($F_{damper}$) opposing motion.
*   **Newton's Second Law:** $\Sigma F = Ma$
    *   $F_{app}(t) - F_{damper} = Ma$
    *   $F_{app}(t) - Bv = M\frac{dv}{dt}$ (since $a = \frac{dv}{dt}$)

*   **Differential Equation:**
    $M\frac{dv}{dt} + Bv = F_{app}(t)$

This is a first-order linear differential equation.

**Example 2: Mass-Spring System (Second-Order)**

Consider a mass $M$ connected to a spring with stiffness $K$, moving on a frictionless surface. An external force $F_{app}(t)$ is applied to the mass.

*   **Components:** Mass ($M$), Spring ($K$), Applied Force ($F_{app}(t)$).
*   **Free-Body Diagram:**
    *   Forces acting on mass $M$:
        *   Applied Force ($F_{app}(t)$) in the direction of motion.
        *   Spring Force ($F_{spring}$) opposing displacement from equilibrium.
*   **Newton's Second Law:** $\Sigma F = Ma$
    *   $F_{app}(t) - F_{spring} = Ma$
    *   $F_{app}(t) - Kx = M\frac{d^2x}{dt^2}$ (since $a = \frac{d^2x}{dt^2}$)

*   **Differential Equation:**
    $M\frac{d^2x}{dt^2} + Kx = F_{app}(t)$

This is a second-order linear differential equation.

**Example 3: Mass-Spring-Damper System (Second-Order)**

Consider a mass $M$ connected to a spring with stiffness $K$ and a damper with damping coefficient $B$, moving on a frictionless surface. An external force $F_{app}(t)$ is applied to the mass.

*   **Components:** Mass ($M$), Spring ($K$), Damper ($B$), Applied Force ($F_{app}(t)$).
*   **Free-Body Diagram:**
    *   Forces acting on mass $M$:
        *   Applied Force ($F_{app}(t)$) in the direction of motion.
        *   Spring Force ($F_{spring}$) opposing displacement.
        *   Damping Force ($F_{damper}$) opposing velocity.
*   **Newton's Second Law:** $\Sigma F = Ma$
    *   $F_{app}(t) - F_{spring} - F_{damper} = Ma$
    *   $F_{app}(t) - Kx - Bv = M\frac{dv}{dt}$
    *   $F_{app}(t) - Kx - B\frac{dx}{dt} = M\frac{d^2x}{dt^2}$ (substituting $v = \frac{dx}{dt}$)

*   **Differential Equation:**
    $M\frac{d^2x}{dt^2} + B\frac{dx}{dt} + Kx = F_{app}(t)$

This is a standard second-order linear differential equation, often used to model many mechanical systems (e.g., vehicle suspension, control systems).

**(Referenced in: Bolton, Chapter 2; Histand & Al-ciatore, Chapter 1; Shetty & Kolk, Chapter 3; Bishop, Chapter 4: Modeling and Simulation of Dynamic Systems)**

---

### **System Response**

**System response** refers to how a system's output (e.g., position, velocity) changes over time when subjected to an input (e.g., applied force, control signal).

*   **Key aspects of response:**
    *   **Transient Response:** The behavior of the system as it transitions from its initial state to its final state. This includes oscillations, overshoot, and settling time.
    *   **Steady-State Response:** The behavior of the system after the transient effects have died out.

*   **Factors influencing response:**
    *   **System parameters:** Values of Mass ($M$), Damping ($B$), and Stiffness ($K$).
    *   **Input signal:** The nature of the applied force ($F_{app}(t)$).

**Understanding the Second-Order System Response (Mass-Spring-Damper)**

The behavior of the $M\frac{d^2x}{dt^2} + B\frac{dx}{dt} + Kx = F_{app}(t)$ system depends significantly on the relative values of $B$, $M$, and $K$. This is often characterized by the **damping ratio ($\zeta$)** and **natural frequency ($\omega_n$)**.

*   **Natural Frequency ($\omega_n$):** The frequency at which the system would oscillate if there were no damping ($B=0$).
    $\omega_n = \sqrt{\frac{K}{M}}$

*   **Damping Ratio ($\zeta$):** A dimensionless parameter that describes how oscillations decay after a disturbance.
    $\zeta = \frac{B}{2\sqrt{MK}} = \frac{B}{2M\omega_n}$

**Types of Damping and their Response:**

1.  **Underdamped ($\zeta < 1$):**
    *   **Characteristics:** The system oscillates with decreasing amplitude. It will overshoot the final position and then settle.
    *   **Response:** Exhibits oscillatory behavior.
    *   **Example:** A car's suspension without adequate damping (bounces excessively).

2.  **Critically Damped ($\zeta = 1$):**
    *   **Characteristics:** The system returns to equilibrium as quickly as possible without oscillating.
    *   **Response:** Fastest response without overshoot.
    *   **Example:** A well-designed door closer.

3.  **Overdamped ($\zeta > 1$):**
    *   **Characteristics:** The system returns to equilibrium slowly without oscillating. The damping is so strong that it impedes rapid motion.
    *   **Response:** Slow and sluggish.
    *   **Example:** Very heavy viscous fluid damping, like a thick oil damper on a slow-moving mechanism.

**(Referenced in: Bolton, Chapter 2; Histand & Al-ciatore, Chapter 1; Bishop, Chapter 4; Merzouki et al., Chapter 3: Modelling and Identification of Mechanical Systems)**

---

### **Rotational Mechanical Systems**

Similar principles apply to rotational systems. The analogous components are:

*   **Moment of Inertia ($J$):** Analogous to mass. Resists angular acceleration. ($ \Sigma T = J\alpha $, where $T$ is torque, $\alpha$ is angular acceleration).
*   **Rotational Spring ($K_{rot}$):** Analogous to linear spring. Resists angular displacement. ($ T = K_{rot}\theta $, where $\theta$ is angular displacement).
*   **Rotational Damper ($B_{rot}$):** Analogous to linear damper. Resists angular velocity. ($ T = B_{rot}\omega $, where $\omega$ is angular velocity).

**Example 4: Rotational Mass-Spring-Damper System**

Consider a rotating disk of moment of inertia $J$ attached to a torsional spring with stiffness $K_{rot}$ and a torsional damper with damping coefficient $B_{rot}$. An applied torque $T_{app}(t)$ is present.

*   **Differential Equation:**
    $J\frac{d^2\theta}{dt^2} + B_{rot}\frac{d\theta}{dt} + K_{rot}\theta = T_{app}(t)$

**(Referenced in: Bolton, Chapter 2; Histand & Al-ciatore, Chapter 1; Shetty & Kolk, Chapter 3)**

---

### **Modeling for Mechatronic System Design**

*   **Purpose:** To understand how a mechanical component will behave when controlled by a microprocessor/microcontroller.
*   **Microcontroller's Role:** The microcontroller will likely provide an input (e.g., voltage, PWM signal) to an actuator (e.g., motor, solenoid) that generates the forces/torques in the mechanical system.
*   **Feedback:** The model helps in designing feedback loops (using sensors) to ensure the mechanical system reaches and maintains a desired state (position, velocity).

**(Referenced in: Histand & Al-ciatore, Chapter 1; Shetty & Kolk, Chapter 1: Introduction to Mechatronics Systems)**

---

### **Important Points to Remember**

*   **Idealization is key:** Mechanical models simplify reality. Assume components are ideal (e.g., massless springs, frictionless surfaces) initially.
*   **Free-Body Diagrams are crucial:** They ensure all forces are accounted for correctly.
*   **Newton's Second Law ($ \Sigma F = ma $ or $ \Sigma T = J\alpha $):** The fundamental tool for deriving models.
*   **Force-Displacement/Velocity relationships:** Remember $F_{spring} = kx$ and $F_{damper} = bv$.
*   **Second-order systems:** The mass-spring-damper configuration leads to second-order differential equations, which exhibit rich response behaviors (underdamped, critically damped, overdamped).
*   **Damping ratio ($\zeta$):** A critical parameter for understanding transient response.
*   **Modeling is iterative:** Start simple and add complexity as needed.

---

### **Practice Questions**

**Question 1:**
A system consists of a mass of 5 kg attached to a spring with a stiffness of 200 N/m. If the mass is displaced by 0.1 m and released, what is the natural frequency of oscillation? (Assume no damping).

**Answer 1:**
The natural frequency ($\omega_n$) is given by $\omega_n = \sqrt{\frac{K}{M}}$.
Given: $M = 5$ kg, $K = 200$ N/m.
$\omega_n = \sqrt{\frac{200 \text{ N/m}}{5 \text{ kg}}} = \sqrt{40} \text{ rad/s} \approx 6.32 \text{ rad/s}$.

**Question 2:**
A dashpot (damper) with a damping coefficient of 15 Ns/m is connected to a mass of 2 kg. What is the damping ratio if the system also has a spring with stiffness 100 N/m?

**Answer 2:**
First, calculate the natural frequency:
$\omega_n = \sqrt{\frac{K}{M}} = \sqrt{\frac{100 \text{ N/m}}{2 \text{ kg}}} = \sqrt{50} \text{ rad/s} \approx 7.07 \text{ rad/s}$.
Now, calculate the damping ratio:
$\zeta = \frac{B}{2\sqrt{MK}} = \frac{B}{2M\omega_n}$
$\zeta = \frac{15 \text{ Ns/m}}{2 \times 2 \text{ kg} \times \sqrt{50} \text{ rad/s}} = \frac{15}{4 \times 7.07} \approx \frac{15}{28.28} \approx 0.53$.
Since $\zeta < 1$, the system is underdamped.

**Question 3:**
Write down the differential equation for a system with mass $M$, damping coefficient $B$, and spring stiffness $K$, subjected to an external force $F_{app}(t)$.

**Answer 3:**
The differential equation is:
$M\frac{d^2x}{dt^2} + B\frac{dx}{dt} + Kx = F_{app}(t)$
where $x$ is the displacement and $\frac{dx}{dt}$ is the velocity.

**Question 4:**
A door closer mechanism is designed to return a door to its closed position as quickly as possible without excessive bouncing. What type of damping is most desirable for this application?
    a) Underdamped
    b) Critically damped
    c) Overdamped

**Answer 4:**
b) Critically damped. This provides the fastest return to equilibrium without overshoot or oscillations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **Further Reading & References**

*   **Bolton, W. (2010).** *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering* (4th ed.). Pearson Education. (Chapters on Mechanical Systems Modeling)
*   **Histand, M. B., & Al-ciatore, D. G. (2003).** *Introduction to Mechatronics and Measurement Systems*. McGraw-Hill Series in Mechanical Engineering. (Chapters on Dynamic System Models)
*   **Shetty, D., & Kolk, R. A. (2010).** *Mechatronics System Design*. CL-Engineering. (Chapters covering Mechanical System Dynamics)
*   **Bishop, R. H. (2017).** *Mechatronics: An Introduction*. CRC Press. (Sections on System Modeling)
*   **Merzouki, R., Samantaray, A. K., Pathak, P. M., & Bouamama, B. O. (2003).** *Intelligent Mechatronic Systems: Modeling, Control and Diagnosis*. Springer. (Chapters dedicated to Mechanical System Modeling)

---