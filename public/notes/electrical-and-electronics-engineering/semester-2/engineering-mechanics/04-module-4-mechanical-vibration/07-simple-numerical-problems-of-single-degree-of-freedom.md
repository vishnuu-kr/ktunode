---
title: "simple numerical problems of single degree of freedom"
subject: "ENGINEERING MECHANICS"
module: "Module 4: Mechanical vibration  "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9729"
status: "completed"
scrapedAt: "2026-05-23T16:06:46.707Z"
---
# Module 4: Mechanical Vibration - Simple Numerical Problems of Single Degree of Freedom (SDOF)

Welcome, everyone! In this session, we're diving into the fascinating world of **Mechanical Vibrations**, specifically focusing on the simplest, yet fundamental, systems: **Single Degree of Freedom (SDOF) systems**. Think of it as the bedrock upon which all our understanding of more complex vibrating systems will be built. We'll be tackling numerical problems, which means we’ll be putting theory into practice, crunching numbers, and truly understanding how these systems behave.

Before we jump into the problems, let's quickly recap why this is so important. Understanding vibrations is crucial in engineering to avoid resonance, which can lead to catastrophic failure (think of the Tacoma Narrows Bridge collapse – a classic, albeit extreme, example of resonance!). It's also about designing systems that perform optimally, like ensuring a comfortable ride in a car or preventing excessive shaking in machinery. This topic directly builds on your understanding of forces, equilibrium, and dynamics from previous modules.

**Connecting to Course Outcomes:**

As we work through these problems, keep these course outcomes in mind:

*   **CO1 (Vector Representation of Forces and Moments - K2):** While we won't be doing complex vector math here, remember that forces causing vibration are vectors. Understanding their direction and magnitude is key to setting up our equations.
*   **CO2 (Components of Force Systems - K3):** We’ll be identifying the forces acting on our vibrating object – the spring force, damping force, and inertia force. These are the components we need to consider.
*   **CO3 (Conditions of Equilibrium - K3):** While we’re dealing with *dynamics* (motion), the fundamental principle of Newton's Second Law (ΣF = ma) is an extension of equilibrium concepts. We’re essentially looking at *unbalanced* forces causing acceleration.
*   **CO4 (Appropriate Principles - K3):** We’ll be applying Newton's Second Law, the concept of restoring force from springs, and the concept of damping. Choosing the right principles is vital.
*   **CO5 (Principles of Rigid Body Dynamics - K3):** SDOF systems are the simplest form of rigid body dynamics. We'll be looking at how forces cause acceleration and motion.

Now, let's get started with the core concepts.

## What is a Single Degree of Freedom (SDOF) System?

Imagine a simple pendulum, or a mass attached to a spring. How many independent ways can this system move? If you pull the mass to the side and let it go, it can only move back and forth along a single line. It doesn't swing sideways independently. This single direction of motion is what defines a **degree of freedom**.

**Definition:** A single degree of freedom (SDOF) system is a mechanical system that can be described by a single independent coordinate. This coordinate defines the configuration of the system at any given time.

Think of a simple mass-spring system. The position of the mass, let's call it 'x' from its equilibrium position, is all we need to know to describe its state. Whether the spring is compressed or extended, where the mass is on its path – it's all captured by that single 'x'.

### Key Components of an SDOF System

Most SDOF systems we encounter in introductory mechanics can be modeled with three fundamental components:

1.  **Mass (m):** This represents the inertia of the system. It's the resistance to acceleration. In our problems, this will be given as a numerical value (e.g., kilograms).
2.  **Spring (Stiffness, k):** This provides the **restoring force**. When you displace the mass, the spring tries to pull or push it back to its equilibrium position. The stiffness 'k' quantifies how "stiff" the spring is – a higher 'k' means a stronger restoring force for a given displacement. The force exerted by an ideal spring is given by **Hooke's Law: F = -kx**, where 'x' is the displacement from equilibrium. The negative sign indicates that the force is always opposite to the displacement.
3.  **Damper (Damping Coefficient, c):** This dissipates energy from the system, usually as heat. Think of a shock absorber in a car. It slows down the oscillations. The damping force is typically proportional to the velocity of the mass: **F_damping = -cx**, where 'c' is the damping coefficient. The negative sign means the damping force opposes the velocity.

We'll often encounter systems with just mass and spring (undamped) or mass, spring, and damper (damped).

## The Equation of Motion for an SDOF System

This is where it all comes together. We'll use Newton's Second Law of Motion: **ΣF = ma**.

Let's consider our mass-spring system displaced by 'x' from equilibrium. The forces acting on the mass are:

*   **Spring Force:** $F_s = -kx$ (restoring force)
*   **Inertia Force:** This is the 'ma' term, but we often think of it as a force that causes acceleration. So, $F_i = mx''$ (where $x''$ is the acceleration, the second derivative of displacement with respect to time).

For an undamped system (mass-spring only):
The net force is $F_{net} = F_s + F_{inertia\_reaction} = -kx + m(x'' \text{ applied}) $.
Applying Newton's second law (Sum of forces = mass * acceleration):
$ \Sigma F = ma $
$ -kx = m x'' $
Rearranging this, we get the standard form of the **undamped free vibration equation**:

$ m x'' + kx = 0 $

Now, if we add damping, we have:

*   **Spring Force:** $F_s = -kx$
*   **Damping Force:** $F_d = -cx'$ (where $x'$ is the velocity, the first derivative of displacement)
*   **Inertia Force:** $F_i = mx''$

Applying Newton's Second Law:
$ \Sigma F = ma $
$ F_s + F_d = m x'' $
$ -kx - cx' = m x'' $
Rearranging, we get the standard form of the **damped free vibration equation**:

$ m x'' + cx' + kx = 0 $

This is a second-order linear homogeneous differential equation. The solutions to these equations tell us how the system oscillates.

## Natural Frequency and Damping Ratio

These are critical parameters that describe the behavior of SDOF systems.

### Natural Frequency ($\omega_n$)

For an **undamped** system ($c=0$), the equation is $m x'' + kx = 0$. We can rewrite this as $x'' + (k/m)x = 0$.
This equation is of the form $x'' + \omega_n^2 x = 0$, where $\omega_n$ is the **natural angular frequency**.

Therefore, for an undamped system:
$ \omega_n^2 = k/m $
$ \omega_n = \sqrt{k/m} $

The **natural frequency** ($f_n$) is the frequency at which the system would oscillate if it were disturbed from its equilibrium position and allowed to vibrate freely without any damping. It's typically measured in Hertz (Hz), which is cycles per second. The relationship between angular frequency ($\omega_n$ in rad/s) and frequency ($f_n$ in Hz) is:

$ f_n = \omega_n / (2\pi) $

**Think of it this way:** If you have a guitar string and pluck it, it vibrates at its natural frequency. If you have a perfectly stiff spring and a massless object, it wouldn't vibrate at all. As you add mass or make the spring softer, the natural frequency decreases.

**Exam Tip:** Often, you'll be given mass and spring stiffness, and asked to find the natural frequency. This formula is your go-to!

### Damping Ratio ($\zeta$)

For a **damped** system, the equation is $m x'' + cx' + kx = 0$.
To get this into a standard form, we divide by 'm':
$ x'' + (c/m)x' + (k/m)x = 0 $
We know $k/m = \omega_n^2$.
Let's define a term called the **critical damping coefficient** ($c_c$). This is the minimum damping required to prevent oscillation altogether. It's found by setting the discriminant of the characteristic equation to zero. The characteristic equation is $mr^2 + cr + k = 0$. For critical damping, the roots are repeated, which happens when $c^2 - 4mk = 0$, so $c_c = \sqrt{4mk} = 2\sqrt{mk}$.
We can relate $c_c$ to $\omega_n$: $c_c = 2\sqrt{m(k/m)m} = 2m\sqrt{k/m} = 2m\omega_n$.

The **damping ratio**, denoted by the Greek letter zeta ($\zeta$), is defined as the ratio of the actual damping coefficient ($c$) to the critical damping coefficient ($c_c$):

$ \zeta = c / c_c $
$ \zeta = c / (2m\omega_n) $
$ \zeta = c / (2\sqrt{mk}) $

The damping ratio tells us about the nature of the damping:

*   **$\zeta = 0$:** Undamped system. Oscillations continue forever.
*   **$0 < \zeta < 1$:** Underdamped system. The system oscillates, but the amplitude decays over time. This is common in many real-world systems like car suspensions.
*   **$\zeta = 1$:** Critically damped system. The system returns to equilibrium as quickly as possible without oscillating. Think of a well-designed door closer.
*   **$\zeta > 1$:** Overdamped system. The system returns to equilibrium slowly without oscillating. It's like trying to move through thick molasses.

**Exam Tip:** You might be given mass, stiffness, and damping coefficient and asked to determine the type of damping. Calculate $\zeta$ using the formula!

## Types of Vibration

We've touched upon this with the damping ratio, but let's be explicit:

1.  **Free Vibration:** Occurs when the system is disturbed from its equilibrium position and then left to vibrate on its own. No external forces are acting on it after the initial disturbance. The motion is governed by the system's mass, stiffness, and damping.
2.  **Forced Vibration:** Occurs when a time-varying external force is applied to the system. The system vibrates at the frequency of the applied force. This is very common in engineering – think of an engine’s vibration being transmitted to the car chassis.
3.  **Damped Vibration:** Any vibration where energy is lost from the system due to damping.

When we're dealing with numerical problems in SDOF, we often analyze free vibrations initially, looking at natural frequency and damping behavior.

## Numerical Problems: Let's Get Our Hands Dirty!

We'll start with the most common scenarios. Remember, the key is to **identify the mass, stiffness, and damping (if any)**, and then apply the relevant formulas.

### Scenario 1: Undamped Free Vibration (Mass-Spring System)

This is the simplest case. A mass is attached to a spring and then displaced. We want to know how it vibrates.

**Example 1 (Timoshenko & Young, adapted):**
A mass of 10 kg is attached to a spring with a stiffness of 4000 N/m. If the mass is pulled down by 0.05 m and released, what is its natural frequency of vibration?

**Solution Approach:**
1.  **Identify parameters:**
    *   Mass, $m = 10$ kg
    *   Spring stiffness, $k = 4000$ N/m
2.  **Recognize the system:** This is an undamped free vibration problem.
3.  **Recall the formula:** Natural angular frequency, $ \omega_n = \sqrt{k/m} $.
4.  **Calculate:**
    $ \omega_n = \sqrt{4000 \text{ N/m} / 10 \text{ kg}} $
    $ \omega_n = \sqrt{400 \text{ s}^{-2}} $
    $ \omega_n = 20 \text{ rad/s} $
5.  **Convert to frequency (Hz) if asked:**
    $ f_n = \omega_n / (2\pi) $
    $ f_n = 20 \text{ rad/s} / (2\pi) $
    $ f_n \approx 3.18 \text{ Hz} $

**Professor's Note:** You see how straightforward it is when you know the formulas? The units are also important. N/m divided by kg gives $ (kg \cdot m/s^2)/m \cdot kg = 1/s^2 $, and taking the square root gives $1/s$ or $s^{-1}$, which is radians per second for angular frequency.

**What if we want to know the maximum velocity?**
If the mass is released from rest at a displacement of $X_0 = 0.05$ m, the initial potential energy stored in the spring is $PE = \frac{1}{2}k X_0^2$. When the mass passes through the equilibrium position ($x=0$), all this potential energy is converted into kinetic energy, $KE = \frac{1}{2}m v_{max}^2$.
By conservation of energy: $ \frac{1}{2}k X_0^2 = \frac{1}{2}m v_{max}^2 $
$ v_{max} = X_0 \sqrt{k/m} = X_0 \omega_n $

For our example:
$ v_{max} = (0.05 \text{ m}) \times (20 \text{ rad/s}) = 1.0 \text{ m/s} $

**Remember this:** The maximum velocity in an undamped system is the amplitude of oscillation multiplied by the natural angular frequency.

### Scenario 2: Damped Free Vibration (Mass-Spring-Damper System)

Here we introduce damping.

**Example 2 (Hibbeler, adapted):**
A mass of 5 kg is connected to a spring of stiffness 2000 N/m and a damper with a coefficient $c = 200$ Ns/m.
(a) Determine the natural frequency of the undamped system.
(b) Determine the damping ratio.
(c) What type of damping does this system have?
(d) If the mass is displaced by 0.1 m and released, what will be its position after 5 seconds?

**Solution Approach:**
1.  **Identify parameters:**
    *   Mass, $m = 5$ kg
    *   Spring stiffness, $k = 2000$ N/m
    *   Damping coefficient, $c = 200$ Ns/m
2.  **Part (a): Natural frequency ($\omega_n$)**
    $ \omega_n = \sqrt{k/m} = \sqrt{2000 \text{ N/m} / 5 \text{ kg}} = \sqrt{400 \text{ s}^{-2}} = 20 \text{ rad/s} $
3.  **Part (b): Damping ratio ($\zeta$)**
    First, find the critical damping coefficient, $c_c$:
    $ c_c = 2\sqrt{mk} = 2\sqrt{(5 \text{ kg})(2000 \text{ N/m})} = 2\sqrt{10000 \text{ kg}^2\text{/s}^2} = 2 \times 100 \text{ kg/s} = 200 \text{ Ns/m} $
    Now, calculate the damping ratio:
    $ \zeta = c / c_c = 200 \text{ Ns/m} / 200 \text{ Ns/m} = 1.0 $
4.  **Part (c): Type of damping**
    Since $ \zeta = 1.0 $, the system is **critically damped**.

    **Professor's Insight:** Critically damped systems are special. They return to equilibrium as fast as possible without any overshoot or oscillation. This is often the ideal scenario for many engineering applications, like shock absorbers or control systems.
5.  **Part (d): Position after 5 seconds**
    For a critically damped system, the motion is described by:
    $ x(t) = e^{-\zeta \omega_n t} (A_1 + A_2 t) $
    Since $ \zeta = 1 $ and $ \omega_n = 20 $ rad/s, the equation becomes:
    $ x(t) = e^{-20t} (A_1 + A_2 t) $

    We need to find the constants $A_1$ and $A_2$ using the initial conditions:
    *   Initial displacement: $x(0) = 0.1$ m
    *   Initial velocity: $x'(0) = 0$ (released from rest)

    Using $x(0) = 0.1$:
    $ 0.1 = e^0 (A_1 + A_2 \cdot 0) $
    $ A_1 = 0.1 $

    Now, we need to find $x'(t)$. We use the product rule for differentiation:
    $ x'(t) = \frac{d}{dt} [e^{-20t} (A_1 + A_2 t)] $
    $ x'(t) = (-20 e^{-20t})(A_1 + A_2 t) + (e^{-20t})(A_2) $
    $ x'(t) = e^{-20t} [-20A_1 - 20A_2 t + A_2] $

    Using $x'(0) = 0$:
    $ 0 = e^0 [-20A_1 - 20A_2 \cdot 0 + A_2] $
    $ 0 = -20A_1 + A_2 $
    $ A_2 = 20A_1 $
    Since $A_1 = 0.1$, $A_2 = 20 \times 0.1 = 2.0$.

    So, the equation of motion is:
    $ x(t) = e^{-20t} (0.1 + 2.0 t) $

    Now, find the position at $t = 5$ seconds:
    $ x(5) = e^{-20 \times 5} (0.1 + 2.0 \times 5) $
    $ x(5) = e^{-100} (0.1 + 10) $
    $ x(5) = e^{-100} (10.1) $

    **Professor's Warning:** $e^{-100}$ is an extremely small number (virtually zero).
    $ x(5) \approx 0 $ meters.

    **What does this mean?** In just 5 seconds, a critically damped system will have returned to its equilibrium position, almost perfectly. This highlights the efficiency of critical damping.

### Scenario 3: Underdamped Free Vibration

This is perhaps the most common scenario you'll analyze quantitatively in exams.

**Example 3 (Shames, adapted):**
A mass of 2 kg is suspended from a spring of stiffness 800 N/m. The system is found to have a damping ratio of $\zeta = 0.1$. If the mass is displaced by 50 mm and released from rest, find:
(a) The frequency of damped vibration.
(b) The amplitude of vibration after 10 cycles.

**Solution Approach:**
1.  **Identify parameters:**
    *   Mass, $m = 2$ kg
    *   Spring stiffness, $k = 800$ N/m
    *   Damping ratio, $\zeta = 0.1$
    *   Initial displacement (amplitude), $X_0 = 50$ mm = 0.05 m
    *   Initial velocity, $x'(0) = 0$ m/s
2.  **Part (a): Frequency of damped vibration ($\omega_d$)**
    First, find the natural angular frequency, $\omega_n$:
    $ \omega_n = \sqrt{k/m} = \sqrt{800 \text{ N/m} / 2 \text{ kg}} = \sqrt{400 \text{ s}^{-2}} = 20 \text{ rad/s} $
    The frequency of damped vibration is given by:
    $ \omega_d = \omega_n \sqrt{1 - \zeta^2} $
    $ \omega_d = 20 \text{ rad/s} \sqrt{1 - (0.1)^2} $
    $ \omega_d = 20 \text{ rad/s} \sqrt{1 - 0.01} $
    $ \omega_d = 20 \text{ rad/s} \sqrt{0.99} $
    $ \omega_d \approx 20 \times 0.995 $
    $ \omega_d \approx 19.90 \text{ rad/s} $

    To convert this to damped frequency in Hz ($f_d$):
    $ f_d = \omega_d / (2\pi) \approx 19.90 / (2\pi) \approx 3.17 \text{ Hz} $

    **Key Distinction:** The damped frequency ($\omega_d$) is slightly lower than the natural frequency ($\omega_n$) because of damping. The difference is usually small for small damping ratios.
3.  **Part (b): Amplitude of vibration after 10 cycles**
    For an underdamped system, the displacement is given by:
    $ x(t) = X_0 e^{-\zeta \omega_n t} \cos(\omega_d t - \phi) $
    Or, more conveniently for our initial conditions ($x(0)=X_0, x'(0)=0$), the amplitude decays as:
    $ X(t) = X_0 e^{-\zeta \omega_n t} $
    The amplitude after 'n' cycles depends on the time it takes for one cycle. The period of damped vibration $T_d = 2\pi/\omega_d$.
    The time for 10 cycles is $t_{10} = 10 \times T_d = 10 \times (2\pi/\omega_d)$.
    $ t_{10} = 10 \times (2\pi / 19.90) \approx 10 \times 0.3158 \approx 3.158 \text{ seconds} $

    Alternatively, and more simply, the ratio of successive amplitudes separated by one period ($T_d$) is constant and given by $e^{-\zeta \omega_n T_d}$. Since $T_d = 2\pi/\omega_d$ and $\omega_d = \omega_n \sqrt{1-\zeta^2}$, we have:
    $ \frac{X_{k+1}}{X_k} = e^{-\zeta \omega_n (2\pi / (\omega_n \sqrt{1-\zeta^2}))} = e^{-2\pi\zeta/\sqrt{1-\zeta^2}} $
    This ratio is often called the "logarithmic decrement" related factor.
    The amplitude after 'n' cycles, $X_n$, can be calculated from the initial amplitude $X_0$ as:
    $ X_n = X_0 \left( e^{-\zeta \omega_n T_d} \right)^n $
    Let's calculate the decay factor per cycle:
    Decay factor per cycle = $ e^{-\zeta \omega_n T_d} $
    $ \zeta \omega_n T_d = 0.1 \times 20 \text{ rad/s} \times (2\pi / 19.90 \text{ rad/s}) $
    $ \zeta \omega_n T_d = 2 \times (2\pi / 19.90) \approx 2 \times 0.3158 \approx 0.6316 $
    Decay factor per cycle $ = e^{-0.6316} \approx 0.5318 $

    So, the amplitude after 10 cycles ($X_{10}$) is:
    $ X_{10} = X_0 \times (\text{Decay factor per cycle})^{10} $
    $ X_{10} = 0.05 \text{ m} \times (0.5318)^{10} $
    $ (0.5318)^{10} \approx 0.00416 $
    $ X_{10} = 0.05 \text{ m} \times 0.00416 \approx 0.000208 \text{ m} $
    $ X_{10} \approx 0.208 \text{ mm} $

    **Professor's Comment:** Notice how rapidly the amplitude decreases for a small damping ratio of 0.1. After only 10 cycles, the amplitude is less than half a millimeter! This illustrates the concept of "transient response" – the initial oscillating motion that eventually dies out.

### Scenario 4: Forced Vibration (Simple Case – Harmonic Excitation)

When an external force acts on the system, it can cause it to vibrate. The simplest and most common forcing function is a harmonic force, $F(t) = F_0 \sin(\omega t)$ or $F_0 \cos(\omega t)$, where $F_0$ is the force amplitude and $\omega$ is the forcing frequency.

The equation of motion becomes:
$ m x'' + cx' + kx = F_0 \sin(\omega t) $

The system will exhibit two types of responses:
1.  **Transient Response:** This is the initial response due to the initial conditions and damping. It eventually decays.
2.  **Steady-State Response:** This is the response that persists as long as the force is applied. It occurs at the forcing frequency $\omega$.

For a damped system under harmonic excitation, the steady-state response is also harmonic with the same frequency $\omega$, but with a different amplitude and a phase lag. The steady-state displacement is typically written as:
$ x_{ss}(t) = X \cos(\omega t - \phi) $
where:
*   $X = \frac{F_0/k}{\sqrt{(1 - ( \omega/\omega_n )^2)^2 + (2 \zeta \omega/\omega_n)^2}}}$ is the amplitude of the steady-state response.
*   $\phi = \arctan\left(\frac{2 \zeta \omega/\omega_n}{1 - (\omega/\omega_n)^2}\right)$ is the phase angle by which the displacement lags the force.

**Key Concept: Resonance!**
Look at the amplitude equation. What happens when $\omega$ is close to $\omega_n$? The denominator becomes very small, and the amplitude $X$ can become very large, especially if damping ($\zeta$) is low. This phenomenon is **resonance**.

**Example 4 (Conceptual, based on principles from textbooks):**
Consider a structure with a natural frequency of 10 Hz. It is subjected to an external force that varies sinusoidally with a frequency of 10 Hz. What is likely to happen?

**Solution:**
When the forcing frequency ($10$ Hz) is equal to the natural frequency ($10$ Hz) of the structure, the system is at **resonance**. In the absence of significant damping, the amplitude of vibration will grow very large, potentially leading to structural failure. This is why engineers must ensure that the natural frequencies of structures do not match the frequencies of potential external forces.

**Exam Insight:** Questions about resonance are common. They test your understanding of the relationship between forcing frequency and natural frequency. If $f_{forcing} = f_n$, expect very large amplitudes, especially with low damping.

**Example 5 (Hibbeler, section on forced vibrations):**
A mass of 10 kg is attached to a spring with stiffness $k = 4000$ N/m. The system has damping $c = 500$ Ns/m. It is subjected to a harmonic force $F(t) = 200 \sin(10t)$ N. Determine the amplitude of the steady-state vibration.

**Solution Approach:**
1.  **Identify parameters:**
    *   Mass, $m = 10$ kg
    *   Spring stiffness, $k = 4000$ N/m
    *   Damping coefficient, $c = 500$ Ns/m
    *   Force amplitude, $F_0 = 200$ N
    *   Forcing frequency, $\omega = 10$ rad/s
2.  **Calculate natural frequency, $\omega_n$:**
    $ \omega_n = \sqrt{k/m} = \sqrt{4000 \text{ N/m} / 10 \text{ kg}} = \sqrt{400 \text{ s}^{-2}} = 20 \text{ rad/s} $
3.  **Calculate damping ratio, $\zeta$:**
    First, find $c_c$:
    $ c_c = 2\sqrt{mk} = 2\sqrt{(10 \text{ kg})(4000 \text{ N/m})} = 2\sqrt{40000} = 2 \times 200 = 400 \text{ Ns/m} $
    Now, $ \zeta = c/c_c = 500 \text{ Ns/m} / 400 \text{ Ns/m} = 1.25 $
4.  **Calculate the frequency ratio ($r$) and determine damping type:**
    Frequency ratio, $r = \omega / \omega_n = 10 \text{ rad/s} / 20 \text{ rad/s} = 0.5$.
    Since $\zeta = 1.25 > 1$, the system is **overdamped**.
5.  **Calculate the steady-state amplitude ($X$):**
    Use the formula for amplitude:
    $ X = \frac{F_0/k}{\sqrt{(1 - r^2)^2 + (2 \zeta r)^2}}} $
    $ F_0/k = 200 \text{ N} / 4000 \text{ N/m} = 0.05 \text{ m} $ (This is the static deflection if the force $F_0$ were applied statically)
    $ r^2 = (0.5)^2 = 0.25 $
    $ 2 \zeta r = 2 \times 1.25 \times 0.5 = 1.25 $
    Denominator: $ \sqrt{(1 - 0.25)^2 + (1.25)^2} = \sqrt{(0.75)^2 + (1.25)^2} $
    $ = \sqrt{0.5625 + 1.5625} = \sqrt{2.125} \approx 1.4577 $
    $ X = \frac{0.05 \text{ m}}{1.4577} \approx 0.0343 \text{ m} $
    $ X \approx 34.3 \text{ mm} $

    **Professor's Summary:** In this case, the steady-state amplitude is about 34.3 mm. Notice that the forcing frequency (10 rad/s) is significantly lower than the natural frequency (20 rad/s), and the system is overdamped. This combination leads to a moderate amplitude that is much smaller than what you would see at resonance.

## Some Practical Examples and Analogies

*   **Car Suspension:** A car's shock absorbers are designed to be critically damped or slightly underdamped. If they were undamped, every bump would cause the car to bounce uncontrollably. If they were too heavily damped (overdamped), the ride would be stiff and uncomfortable. The natural frequency of the suspension system determines how quickly the car settles after a bump.
*   **Musical Instruments:** A guitar string or a tuning fork vibrates at its natural frequency when plucked. The material and geometry determine these frequencies. Damping (air resistance, internal material damping) causes the sound to die down over time.
*   **Buildings and Bridges:** Engineers must consider the natural frequencies of these structures. If an earthquake or strong wind has frequencies that match a building's natural frequencies, resonance can cause catastrophic damage. Tuned mass dampers are often used in tall buildings to counteract such vibrations.
*   **Washing Machine:** When unbalanced, a washing machine during its spin cycle can vibrate intensely. If the spin speed matches a natural frequency of the machine's structure or mounting, resonance can occur. Modern machines have complex suspension systems to mitigate this.

## Common Pitfalls and How to Avoid Them

*   **Units:** Always, always, always check your units! Make sure mass is in kg, stiffness in N/m, and damping in Ns/m. Convert all values to a consistent set of SI units before calculations.
*   **Angular vs. Linear Frequency:** Be clear whether you need $\omega_n$ (rad/s) or $f_n$ (Hz). The question will usually specify, or the context will make it clear. $f = \omega / (2\pi)$.
*   **Amplitude Decay in Underdamped Systems:** When calculating amplitude after multiple cycles, remember that the amplitude decays exponentially. Using the ratio of successive amplitudes is often easier than calculating the exact time and plugging it into the complex cosine form. The amplitude decreases by a factor of $e^{-\zeta \omega_n T_d}$ for each cycle.
*   **Resonance Condition:** Understand that resonance occurs when the *forcing frequency* ($\omega$) is equal to the *natural frequency* ($\omega_n$), not the damped frequency ($\omega_d$).

## Review and Summary

We've covered the essentials of SDOF systems:

*   **Definition:** Systems described by a single coordinate.
*   **Components:** Mass (m), Spring (k), Damper (c).
*   **Equations of Motion:**
    *   Undamped: $mx'' + kx = 0$
    *   Damped: $mx'' + cx' + kx = 0$
*   **Key Parameters:**
    *   Natural Angular Frequency: $ \omega_n = \sqrt{k/m} $
    *   Damping Ratio: $ \zeta = c / (2\sqrt{mk}) $
*   **Types of Damping:** Underdamped ($0 < \zeta < 1$), Critically Damped ($\zeta = 1$), Overdamped ($\zeta > 1$).
*   **Damped Frequency:** $ \omega_d = \omega_n \sqrt{1 - \zeta^2} $
*   **Forced Vibration:** Steady-state amplitude $X = \frac{F_0/k}{\sqrt{(1 - r^2)^2 + (2 \zeta r)^2}}}$ where $r = \omega/\omega_n$.
*   **Resonance:** Occurs when $ \omega \approx \omega_n $, leading to large amplitudes.

Mastering these concepts and formulas is your ticket to understanding more complex vibration problems. Practice is key, so work through as many examples as you can!

---

## Sample Questions with Answers

**Question 1 (Conceptual):**
A heavy machine is mounted on springs. If the machine operates at a frequency that is very close to the natural frequency of the spring-mass system, what phenomenon might occur, and what would be the likely consequence?

**Answer:**
The phenomenon is **resonance**. When the operating frequency matches the natural frequency of the system, the amplitude of vibration can increase dramatically. The likely consequence would be excessive vibration, potential fatigue failure of the springs or machine components, discomfort for operators, and inefficient operation.

**Reasoning:** Resonance occurs when the forcing frequency ($\omega$) equals the natural frequency ($\omega_n$). The amplitude of steady-state vibration is inversely proportional to the denominator in the amplitude formula, which contains $(1-r^2)^2$ where $r = \omega/\omega_n$. When $r=1$, this term is zero, leading to theoretically infinite amplitude in an undamped system. Even with damping, the amplitude becomes significantly large.

**Question 2 (Numerical - Undamped):**
A mass of 5 kg is attached to a spring of stiffness 5000 N/m. If the mass is displaced by 20 mm and released, what is the maximum velocity it attains during its oscillation?

**Answer:**
First, calculate the natural angular frequency:
$ m = 5 $ kg
$ k = 5000 $ N/m
$ \omega_n = \sqrt{k/m} = \sqrt{5000 \text{ N/m} / 5 \text{ kg}} = \sqrt{1000 \text{ s}^{-2}} \approx 31.62 \text{ rad/s} $

The initial displacement is the amplitude, $X_0 = 20 $ mm $ = 0.02 $ m.
For an undamped system, maximum velocity $v_{max} = X_0 \omega_n$.
$ v_{max} = (0.02 \text{ m}) \times (31.62 \text{ rad/s}) \approx 0.6324 \text{ m/s} $

The maximum velocity is approximately 0.632 m/s.

**Reasoning:** In an undamped free vibration, energy oscillates between potential energy in the spring and kinetic energy of the mass. Maximum potential energy occurs at maximum displacement (amplitude). Maximum kinetic energy (and thus maximum velocity) occurs at the equilibrium position ($x=0$), where all potential energy has been converted to kinetic energy. The relationship $v_{max} = X_0 \omega_n$ is derived from conservation of energy.

**Question 3 (Numerical - Damped):**
A system has a mass of 2 kg, stiffness of 1000 N/m, and a damping coefficient of 50 Ns/m.
(a) Calculate the damping ratio.
(b) Determine the type of damping.
(c) Calculate the damped natural frequency.

**Answer:**
Given: $ m = 2 $ kg, $ k = 1000 $ N/m, $ c = 50 $ Ns/m.

(a) **Damping Ratio ($\zeta$)**:
First, find critical damping coefficient $c_c$:
$ c_c = 2\sqrt{mk} = 2\sqrt{(2 \text{ kg})(1000 \text{ N/m})} = 2\sqrt{2000} \approx 2 \times 44.72 = 89.44 \text{ Ns/m} $
Now, calculate $\zeta$:
$ \zeta = c / c_c = 50 \text{ Ns/m} / 89.44 \text{ Ns/m} \approx 0.559 $

(b) **Type of Damping**:
Since $ \zeta \approx 0.559 $, which is between 0 and 1 ($0 < \zeta < 1$), the system is **underdamped**.

(c) **Damped Natural Frequency ($\omega_d$)**:
First, find the undamped natural frequency $\omega_n$:
$ \omega_n = \sqrt{k/m} = \sqrt{1000 \text{ N/m} / 2 \text{ kg}} = \sqrt{500 \text{ s}^{-2}} \approx 22.36 \text{ rad/s} $
Now, calculate $\omega_d$:
$ \omega_d = \omega_n \sqrt{1 - \zeta^2} = 22.36 \text{ rad/s} \sqrt{1 - (0.559)^2} $
$ \omega_d = 22.36 \text{ rad/s} \sqrt{1 - 0.3125} = 22.36 \text{ rad/s} \sqrt{0.6875} $
$ \omega_d \approx 22.36 \times 0.829 \approx 18.54 \text{ rad/s} $

The damped natural frequency is approximately 18.54 rad/s.

**Reasoning:** The damping ratio characterizes the system's response to disturbances. Underdamped systems oscillate with decreasing amplitude. The damped natural frequency is the actual frequency of oscillation observed in an underdamped system, and it is always slightly lower than the undamped natural frequency because the damping effectively "slows down" the oscillation.
