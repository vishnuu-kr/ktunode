---
title: "Mechanical vibration  - Free and forced vibration"
subject: "ENGINEERING MECHANICS"
module: "Module 4: Mechanical vibration  "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9723"
status: "completed"
scrapedAt: "2026-05-23T16:06:42.035Z"
---
# Engineering Mechanics: Module 4 - Mechanical Vibrations

## Topic: Free and Forced Vibrations

Welcome, everyone! In our journey through Engineering Mechanics, we've explored statics, understanding how forces keep objects in balance, and we've started delving into dynamics, looking at how objects move under the influence of forces. Today, we're stepping into a fascinating area: **Mechanical Vibrations**.

Think about it. When does anything truly stay perfectly still forever? In the real world, most things are in motion, or at least capable of motion. And often, this motion isn't a smooth, steady cruise. It's often a back-and-forth, oscillating, or *vibrating* motion. From the gentle hum of a refrigerator to the powerful tremors of an earthquake, vibrations are everywhere. Understanding them is crucial for designing everything from skyscrapers to sensitive scientific instruments.

In this module, we'll specifically focus on two fundamental types of vibrations: **Free Vibration** and **Forced Vibration**.

---

### Understanding the Basics: What is Vibration?

Before we dive into free and forced vibrations, let's solidify what we mean by "vibration" in mechanics.

**Definition:** Vibration is a repetitive or oscillatory motion of a particle or a body about its equilibrium position.

The **equilibrium position** is the state where the net force acting on the system is zero. Imagine a simple spring-mass system. If you hang a mass from a spring and let it settle, it will hang at a certain position where the upward spring force balances the downward gravitational force. That's its equilibrium position. If you then pull the mass down slightly and release it, it will oscillate around this point.

Why is this important? Because the motion is *about* an equilibrium position. It's not about simply moving in a straight line; it's about oscillating back and forth.

---

### 1. Free Vibration: The Natural Dance

Let's start with the simpler case: **Free Vibration**.

**Definition:** Free vibration occurs when a system, once disturbed from its equilibrium position, is allowed to vibrate at its own natural frequency without any further external force being applied.

Think of a child on a swing. If you pull them back a little and let go, they swing back and forth. Once you've given them that initial push, you don't keep pushing them with every swing, do you? You let the swing itself do its thing. This is free vibration. The swing oscillates at its "natural frequency" – a characteristic of the swing itself (determined by its length and gravity, primarily).

**Key Characteristics of Free Vibration:**

*   **Initial Disturbance:** The vibration starts due to an initial displacement or velocity imparted to the system.
*   **No Continuous External Force:** Once disturbed, no external force (other than those that maintain equilibrium, like gravity) is continuously applied to sustain the motion.
*   **Natural Frequency ($\omega_n$):** The system oscillates at one or more specific frequencies called its natural frequencies. These frequencies are inherent properties of the system, depending on its mass, stiffness, and configuration.
*   **Damping:** In reality, all vibrating systems lose energy due to friction and other dissipative forces. This phenomenon is called **damping**. Without damping, free vibrations would continue indefinitely. With damping, the amplitude of vibration gradually decreases over time, eventually returning the system to its equilibrium position.

**Connection to Course Outcomes:**

*   **CO4 (Identify appropriate principles to solve problems of mechanics):** To analyze free vibrations, we primarily use Newton's Second Law ($F=ma$) applied to the dynamic system. We'll often model systems using springs (representing stiffness) and masses (representing inertia). Understanding the concept of equilibrium (CO3) is fundamental to identifying the equilibrium position around which vibrations occur.
*   **CO5 (Develop the understanding of fundamental principles of rigid body dynamics):** Free vibration analysis is a core part of rigid body dynamics, specifically dealing with oscillatory motion rather than just translational or rotational motion.

**Simple Harmonic Motion (SHM): The Ideal Case**

The simplest form of free vibration is **Simple Harmonic Motion (SHM)**. This occurs when the restoring force is directly proportional to the displacement from the equilibrium position. This is precisely what a spring provides – Hooke's Law ($F_s = -kx$).

Consider a mass ($m$) attached to a spring with stiffness ($k$). If we displace the mass by a distance $x$ from its equilibrium position, the spring exerts a restoring force $F = -kx$. Applying Newton's Second Law ($\Sigma F = ma$):

$-kx = m \frac{d^2x}{dt^2}$

This is a second-order linear differential equation. Rearranging it, we get:

$\frac{d^2x}{dt^2} + \frac{k}{m}x = 0$

We define the **natural circular frequency** ($\omega_n$) as:

$\omega_n = \sqrt{\frac{k}{m}}$

So the equation becomes:

$\frac{d^2x}{dt^2} + \omega_n^2 x = 0$

The solution to this equation is of the form:

$x(t) = X_m \sin(\omega_n t + \phi)$

where:
*   $x(t)$ is the displacement at time $t$.
*   $X_m$ is the **amplitude** – the maximum displacement from equilibrium.
*   $\omega_n$ is the natural circular frequency (in radians per second).
*   $t$ is time.
*   $\phi$ is the **phase angle**, determined by the initial conditions (initial displacement and velocity).

The **natural frequency** ($f_n$) in Hertz (cycles per second) is related to the circular frequency by:

$f_n = \frac{\omega_n}{2\pi}$

**Example:** Imagine a tuning fork. When you strike it, it vibrates at a specific pitch (frequency). This is its natural frequency. The sound it produces is due to this free vibration. The vibrations gradually die down because of air resistance and internal damping within the metal.

**Remember this:** For a simple spring-mass system, the natural frequency depends only on the mass and the stiffness of the spring. More mass means lower frequency; stiffer spring means higher frequency. Think of a heavy pendulum versus a light one; the heavier one swings slower (lower frequency).

---

### 2. Forced Vibration: The Persistent Push

Now, let's move on to **Forced Vibration**. This is what happens when a system is subjected to a continuously applied external force, which itself might be varying with time.

**Definition:** Forced vibration occurs when an external periodic force is applied to a system, causing it to vibrate at the frequency of the applied force.

Think about pushing a child on a swing again. If you keep pushing them *at the same rhythm as their natural swing*, they will go higher and higher – this is resonance! But if you push them at a different, irregular rhythm, their swing will still move, but not in that smooth, predictable way. The motion is *forced* by your pushes.

**Key Characteristics of Forced Vibration:**

*   **External Periodic Force:** The system is driven by an external force that typically varies cyclically (e.g., sinusoidal).
*   **Frequency of Driving Force ($ \omega $):** The system tends to vibrate at the frequency of the applied external force, denoted by $\omega$.
*   **Transient and Steady-State Response:** When the forcing starts, there's an initial period called the **transient response**, where the system's natural vibrations and the forced vibrations combine. As time goes on, and especially if damping is present, the natural vibrations die out, and the system settles into a **steady-state response**, oscillating solely at the driving frequency $\omega$.
*   **Steady-State Amplitude:** The amplitude of the steady-state vibration depends on the frequency of the applied force relative to the system's natural frequency, the amount of damping, and the magnitude of the forcing.

**Connection to Course Outcomes:**

*   **CO1 & CO2 (Vector representation of forces, components of forces):** The applied external force is a key component. We often represent these forces mathematically, which aligns with understanding vector representation.
*   **CO4 (Identify appropriate principles to solve problems of mechanics):** We use Newton's Second Law again, but this time it includes the forcing function. The analysis involves solving differential equations with forcing terms.
*   **CO5 (Develop the understanding of fundamental principles of rigid body dynamics):** Forced vibration is a critical aspect of dynamics, explaining how systems respond to external driving forces, which is common in real-world engineering applications.

**The Mathematical Model (for a spring-mass system with damping and forcing):**

Let's consider a more realistic system: a mass ($m$) attached to a spring ($k$) and a damper ($c$), subjected to an external force $F(t)$. The damper provides a force proportional to velocity, $F_d = -c \frac{dx}{dt}$. The external force $F(t)$ could be anything, but often it's a sinusoidal force, like $F(t) = F_0 \sin(\omega t)$.

Applying Newton's Second Law:
$\Sigma F = ma$
$-kx - c\frac{dx}{dt} + F(t) = m \frac{d^2x}{dt^2}$

Rearranging into the standard form of a second-order linear non-homogeneous differential equation:

$m \frac{d^2x}{dt^2} + c \frac{dx}{dt} + kx = F(t)$

This equation describes the motion of a **damped, forced, single-degree-of-freedom** system.

**The Phenomenon of Resonance:**

One of the most critical aspects of forced vibration is **resonance**.

**Definition:** Resonance occurs when the frequency of the applied external force ($\omega$) is equal or very close to the natural frequency of the system ($\omega_n$).

At resonance, the amplitude of vibration can become very large, potentially leading to failure of the structure or machine.

**Analogy:** Imagine pushing someone on a swing. If your pushes match the natural rhythm of the swing, even small pushes can make the swing go very high. If your pushes are too fast or too slow, the swing won't build up much height. This is resonance!

**Example:** The Tacoma Narrows Bridge collapse in 1940 is a classic, albeit tragic, example. High winds, which had a frequency that matched one of the bridge's natural frequencies, induced severe resonant vibrations, leading to its catastrophic failure. Modern bridge designs incorporate damping mechanisms and stiffness adjustments to avoid such occurrences.

**Steady-State Amplitude and Frequency Response:**

The steady-state amplitude ($X_{ss}$) for a sinusoidal forcing $F(t) = F_0 \sin(\omega t)$ in a damped system is given by:

$X_{ss} = \frac{F_0/k}{\sqrt{\left(1 - (\omega/\omega_n)^2\right)^2 + \left(2\zeta \omega/\omega_n\right)^2}}$

where:
*   $F_0$ is the amplitude of the forcing force.
*   $k$ is the spring stiffness.
*   $\omega$ is the driving frequency.
*   $\omega_n$ is the natural frequency.
*   $\zeta$ is the **damping ratio** (a dimensionless parameter representing the level of damping).

This formula shows that the amplitude is maximum when $\omega \approx \omega_n$ (resonance). The damping ratio $\zeta$ plays a crucial role: higher damping reduces the peak amplitude at resonance.

**Exam Tip:** When dealing with forced vibrations, pay close attention to the forcing frequency relative to the natural frequency. Resonance is a key concept that is often tested. Understanding how damping affects the amplitude at resonance is also important.

---

### Connecting with Textbooks and Course Outcomes

Let's see how these concepts tie into our references and course goals.

*   **Timoshenko and Young:** These authors provide rigorous mathematical treatments of vibration theory, including the derivation of equations of motion and solutions for various systems. Their work aligns with **CO4** and **CO5** by detailing the principles of dynamics and how to apply them to vibrating systems.
*   **Hibbeler:** Hibbeler's "Combined Statics and Dynamics" is known for its practical approach. He often uses real-world examples to illustrate concepts. You'll find excellent explanations and solved problems related to oscillations and vibrations, reinforcing **CO4** and **CO5**. The analysis of forces and their effects on motion is directly linked to **CO1**, **CO2**, and **CO3** when considering the equilibrium and dynamic response of bodies.
*   **Shames:** Shames delves deeply into the fundamental principles. His approach to vibration analysis would be invaluable for understanding the underlying physics and deriving the equations, directly supporting **CO5** and the deeper understanding required for **CO4**.

**Overall Relevance to Course Outcomes:**

*   **CO1 & CO2:** Understanding the forces involved, whether the initial disturbance in free vibration or the periodic forcing in forced vibration, requires knowledge of force representation and their components.
*   **CO3:** The concept of equilibrium position is fundamental. Many vibration problems start by finding the static equilibrium and then analyzing deviations from it.
*   **CO4:** Vibration analysis is a prime example of applying fundamental principles like Newton's Laws, energy methods, and differential equations to solve complex mechanical problems.
*   **CO5:** Free and forced vibrations are core topics in rigid body dynamics. They explain how systems respond to disturbances and external influences, which is essential for understanding dynamic behavior.

---

### Types of Damping

While not the main focus of "free vs. forced," understanding damping is crucial for a complete picture, as it significantly impacts the behavior of both. The most common models are:

1.  **Viscous Damping:** The damping force is proportional to velocity ($F_d = -c \dot{x}$). This is the most commonly assumed type in introductory mechanics.
2.  **Coulomb or Dry Friction Damping:** The damping force is constant in magnitude and opposite to the direction of motion ($F_d = -\mu N \text{ sgn}(\dot{x})$).
3.  **Structural or Hysteretic Damping:** Energy dissipation due to internal friction within the material. Often modeled as being proportional to displacement but with a phase lag.

For our purposes today, remember that damping *always* reduces vibration amplitude and dissipates energy.

---

### Summary and Key Takeaways

*   **Vibration** is oscillatory motion about an equilibrium position.
*   **Free Vibration** occurs when a system vibrates at its natural frequency after an initial disturbance, with no further forcing. The natural frequency ($\omega_n = \sqrt{k/m}$ for a spring-mass system) is an inherent property.
*   **Forced Vibration** occurs when an external periodic force drives the system, causing it to vibrate at the forcing frequency ($\omega$).
*   **Resonance** is the critical condition where the driving frequency ($\omega$) matches the natural frequency ($\omega_n$), leading to potentially large amplitudes.
*   **Damping** is the dissipation of energy in a vibrating system, which reduces amplitudes over time in free vibrations and limits amplitudes in forced vibrations, especially at resonance.

Understanding the interplay between natural frequency, forcing frequency, and damping is paramount in designing systems that either avoid or utilize vibrations effectively.

---

### Sample Questions and Answers

Let's test our understanding with a few questions.

**Question 1 (Conceptual):** What is the fundamental difference between free vibration and forced vibration?

**Answer:** The fundamental difference lies in the presence of a continuous external force. Free vibration starts with an initial disturbance and continues at the system's natural frequency without any ongoing external force. Forced vibration, on the other hand, is driven by a continuous external periodic force and occurs at the frequency of that applied force.

**Question 2 (Conceptual):** What is resonance, and why is it a critical phenomenon in mechanical engineering?

**Answer:** Resonance occurs when the frequency of an external driving force matches or is very close to the natural frequency of a system. It is critical because, at resonance, the amplitude of vibration can increase dramatically, potentially exceeding the structural limits of the system and leading to failure. Examples include the catastrophic collapse of structures like the Tacoma Narrows Bridge or resonant vibrations in machinery that can cause excessive wear or breakage.

**Question 3 (Problem-Oriented):** A mass of 5 kg is attached to a spring with a stiffness of 2000 N/m. If the mass is displaced by 0.1 m from its equilibrium position and released with zero initial velocity, what is its natural frequency? What is the amplitude of free vibration? (Assume no damping.)

**Solution:**

*   **Natural Frequency ($\omega_n$):**
    The natural circular frequency is given by $\omega_n = \sqrt{\frac{k}{m}}$.
    Given: $m = 5$ kg, $k = 2000$ N/m.
    $\omega_n = \sqrt{\frac{2000 \text{ N/m}}{5 \text{ kg}}} = \sqrt{400 \text{ s}^{-2}} = 20$ rad/s.

    The natural frequency in Hertz is $f_n = \frac{\omega_n}{2\pi} = \frac{20 \text{ rad/s}}{2\pi \text{ rad/cycle}} \approx 3.18$ Hz.

*   **Amplitude:**
    For free vibration starting from rest, the motion is simple harmonic motion. The initial displacement is the maximum displacement.
    The initial conditions are $x(0) = 0.1$ m and $\dot{x}(0) = 0$.
    The general solution for free vibration is $x(t) = X_m \sin(\omega_n t + \phi)$.
    Using $\dot{x}(0) = 0$: $X_m \omega_n \cos(\phi) = 0$. Since $\omega_n \neq 0$, we must have $\cos(\phi) = 0$, which means $\phi = \pm \pi/2$.
    Using $x(0) = 0.1$: $0.1 = X_m \sin(\phi)$.
    If $\phi = \pi/2$, $\sin(\phi) = 1$, so $0.1 = X_m$.
    If $\phi = -\pi/2$, $\sin(\phi) = -1$, so $0.1 = -X_m$, meaning $X_m = -0.1$, which isn't standard for amplitude (amplitude is a positive magnitude). So, $\phi = \pi/2$ and $X_m = 0.1$ m.
    Thus, the amplitude of free vibration is $0.1$ m.

    **In simpler terms for this specific initial condition (released from rest):** The amplitude is simply the initial displacement.

**Question 4 (Problem-Oriented):** A lightly damped system with a natural frequency of 10 rad/s is subjected to a harmonic force with a frequency of 9.8 rad/s. Will resonance be a significant concern in this case? Explain why.

**Answer:** Resonance occurs when the forcing frequency ($\omega$) is equal or very close to the natural frequency ($\omega_n$). Here, $\omega = 9.8$ rad/s and $\omega_n = 10$ rad/s. These frequencies are very close. Since the system is described as "lightly damped," the damping ratio ($\zeta$) is small. In lightly damped systems, the amplitude at resonance (or near-resonance) can be very large. Therefore, even though the frequencies are not exactly equal, resonance will be a significant concern and could lead to large vibration amplitudes.

---
I hope this detailed overview helps solidify your understanding of free and forced vibrations. Keep practicing, and don't hesitate to revisit these concepts!
