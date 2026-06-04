---
title: "Simple harmonic motion - spring mass model"
subject: "ENGINEERING MECHANICS"
module: "Module 4: Mechanical vibration  "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9725"
status: "completed"
scrapedAt: "2026-05-23T16:06:43.589Z"
---
# Module 4: Mechanical Vibrations - Simple Harmonic Motion: The Spring-Mass Model

Welcome, everyone, to our exploration of mechanical vibrations! In engineering, understanding how things move, especially when they oscillate or shake, is absolutely crucial. Think about bridges swaying in the wind, engines humming, or even the simple bounce of a basketball. All these involve vibrations. Today, we're diving into the very heart of vibration analysis with a foundational concept: **Simple Harmonic Motion (SHM)**, and we'll be using the classic **spring-mass model** to understand it. This is the bedrock upon which much of dynamic analysis is built.

This topic directly connects with several of our Course Outcomes. As we analyze the motion of a mass attached to a spring, we'll be dealing with the **vector representation of forces (CO1)**, like the spring force and gravity. We'll be identifying and describing the components of the system and the forces acting on it **(CO2)**. We'll see how the system eventually settles, which implicitly relates to **equilibrium conditions (CO3)**, even though we're focusing on motion. Most importantly, we'll be applying fundamental **principles to solve problems of mechanics (CO4)** and developing our understanding of **rigid body dynamics (CO5)** by seeing how forces cause acceleration and motion.

## 1. What is Vibration? And Why Does it Matter?

Simply put, vibration is an oscillatory motion about a fixed equilibrium position. It's a back-and-forth movement. But why should we care so much about it?

*   **Comfort and Performance:** Unwanted vibrations can make vehicles uncomfortable, reduce the precision of machinery, and lead to fatigue failure in structures. Think about the shudder you feel in an old car – that's vibration!
*   **Structural Integrity:** In bridges, buildings, and aircraft, vibrations can be destructive. The Tacoma Narrows Bridge collapse is a stark reminder of how resonance from vibrations can lead to catastrophic failure.
*   **Machine Design:** Many machines are designed to operate at specific vibration frequencies. Understanding these frequencies allows engineers to optimize performance, reduce noise, and prevent damage.

So, to design reliable and efficient systems, we *must* understand vibrations.

## 2. The Ideal Spring-Mass Model: Our Starting Point

To grasp the fundamentals of vibration, we start with the simplest possible model that exhibits oscillatory behavior: the **ideal spring-mass system**.

Imagine a mass ($m$) attached to one end of an ideal spring, with the other end fixed. An "ideal spring" is one that obeys **Hooke's Law**.

### 2.1 Hooke's Law: The Heart of the Spring

Hooke's Law, a cornerstone of mechanics, states that the force exerted by a spring is directly proportional to its displacement from its equilibrium position. Mathematically, we write this as:

$F_s = -kx$

Let's break this down:

*   $F_s$: This is the **restoring force** exerted by the spring. It's the force that always tries to bring the mass back to its equilibrium position.
*   $k$: This is the **spring stiffness** or spring constant. It's a measure of how "stiff" the spring is. A higher $k$ means a stiffer spring, requiring more force to stretch or compress it. You'll find values of $k$ discussed in textbooks like Timoshenko and Young, and Hibbeler.
*   $x$: This is the **displacement** of the mass from its equilibrium position. If the spring is at its natural length with no mass attached, that's the equilibrium. When you attach the mass, gravity will stretch the spring to a new equilibrium position. $x$ is measured from *that* new equilibrium.
*   The **minus sign (-)**: This is incredibly important! It signifies that the restoring force $F_s$ is always in the **opposite direction** to the displacement $x$. If you stretch the spring (positive $x$), the spring pulls back (negative $F_s$). If you compress the spring (negative $x$), it pushes outward (positive $F_s$). This opposition is what drives the oscillation.

**Analogy:** Think about a rubber band. If you pull it away from its resting position, it snaps back. The further you pull it, the stronger the force trying to pull it back. That's exactly what Hooke's Law describes.

### 2.2 Setting Up the Spring-Mass System

Consider a mass $m$ hanging vertically from a spring with stiffness $k$.

1.  **Equilibrium Position:** When the mass is attached and at rest, the spring will stretch by some amount, say $\Delta L$, due to gravity. At this point, the system is in equilibrium. The upward spring force ($k\Delta L$) balances the downward force of gravity ($mg$). So, $k\Delta L = mg$. This position is our reference point for displacement.

2.  **Displacement and Restoring Force:** Now, if we pull the mass down further by an additional displacement $x$ from this equilibrium position, the total stretch of the spring becomes $(\Delta L + x)$. The total upward spring force is now $k(\Delta L + x)$.

    The net force acting on the mass is the sum of gravity and the spring force. Let's take downward as positive:

    $F_{net} = mg - k(\Delta L + x)$

    We know from equilibrium that $mg = k\Delta L$. Substituting this in:

    $F_{net} = k\Delta L - k(\Delta L + x)$
    $F_{net} = k\Delta L - k\Delta L - kx$
    $F_{net} = -kx$

    See? Even with gravity acting on it, the *net force* causing acceleration away from the equilibrium position is still $-kx$. This is the essence of SHM. The negative sign confirms that the net force is always directed towards the equilibrium position.

## 3. Deriving the Equation of Motion for SHM

Now, we apply Newton's Second Law of Motion: $F_{net} = ma$. Here, $a$ is the acceleration of the mass.

Substituting our net force:

$-kx = ma$

Since acceleration $a$ is the second derivative of displacement with respect to time ($a = \frac{d^2x}{dt^2}$), we get:

$m \frac{d^2x}{dt^2} = -kx$

Rearranging this equation, we get the classic **differential equation for Simple Harmonic Motion**:

$\frac{d^2x}{dt^2} + \frac{k}{m}x = 0$

This is a second-order linear homogeneous differential equation with constant coefficients. It's the mathematical signature of SHM.

### 3.1 Introducing the Natural Frequency ($\omega_n$)

Engineers love to simplify and generalize. We define a term called the **natural angular frequency**, denoted by $\omega_n$. It's related to the spring stiffness and mass by:

$\omega_n = \sqrt{\frac{k}{m}}$

Substituting this back into our differential equation:

$\frac{d^2x}{dt^2} + \omega_n^2 x = 0$

This is the most common form of the SHM equation. What does $\omega_n$ tell us? It's the inherent frequency at which the system *wants* to oscillate if disturbed from its equilibrium, assuming no damping or external forces. It's measured in radians per second.

**Example:** Imagine a tuning fork. When you strike it, it vibrates at a specific frequency – its natural frequency. Our spring-mass system is similar. If you give it a little push, it will vibrate at $\omega_n$.

### 3.2 The Solution: Describing SHM

The general solution to this differential equation describes the displacement $x$ as a function of time $t$. The solution is typically expressed in one of two forms:

**Form 1: Using Sine and Cosine**

$x(t) = C_1 \cos(\omega_n t) + C_2 \sin(\omega_n t)$

Here, $C_1$ and $C_2$ are constants determined by the initial conditions (how the mass is started).

**Form 2: Using Amplitude and Phase Angle (More Intuitive!)**

$x(t) = A \cos(\omega_n t + \phi)$

This form is often preferred because it directly tells us about the *amplitude* and the *phase* of the motion.

Let's break down this second form:

*   $A$: This is the **amplitude** of the vibration. It's the maximum displacement from the equilibrium position. Remember, this is the maximum distance the mass moves from its resting point. Think of a pendulum swinging – the amplitude is how far it swings out to the side at its highest point.
*   $\omega_n$: The **natural angular frequency** we just discussed.
*   $t$: Time.
*   $\phi$: This is the **phase angle** or **phase shift**. It tells us the starting position of the mass at $t=0$. If $\phi = 0$, the mass starts at its maximum positive displacement ($x = A$). If $\phi = -\pi/2$, it starts at the equilibrium position moving in the positive direction ($x=0, v > 0$).

**Important Connection (CO4):** We've now derived a mathematical model that describes the motion. This is a direct application of principles to solve a mechanics problem.

### 3.3 Relating Amplitude and Phase

Sometimes, you're given initial conditions like initial displacement ($x_0$) and initial velocity ($v_0$) at $t=0$. You can use these to find $A$ and $\phi$.

From $x(t) = A \cos(\omega_n t + \phi)$:
At $t=0$, $x(0) = x_0 = A \cos(\phi)$.

The velocity $v(t)$ is the first derivative of displacement:
$v(t) = \frac{dx}{dt} = -A\omega_n \sin(\omega_n t + \phi)$

At $t=0$, $v(0) = v_0 = -A\omega_n \sin(\phi)$.

From these two equations, you can solve for $A$ and $\phi$. A common way to find $A$ is to square both equations and add them:
$x_0^2 + (\frac{v_0}{\omega_n})^2 = A^2 \cos^2(\phi) + A^2 \sin^2(\phi) = A^2(\cos^2(\phi) + \sin^2(\phi)) = A^2$
So, $A = \sqrt{x_0^2 + (\frac{v_0}{\omega_n})^2}$.

And $\tan(\phi) = -\frac{v_0}{\omega_n x_0}$.

**Quick Tip for Exams:** If initial velocity is zero ($v_0=0$), then $A = x_0$ and $\phi=0$ (assuming $x_0$ is the maximum displacement). If the mass starts at equilibrium with an initial velocity $v_0$, then $x_0=0$, $A = v_0/\omega_n$, and $\phi = -\pi/2$.

## 4. Characteristics of SHM

The solution $x(t) = A \cos(\omega_n t + \phi)$ reveals the key characteristics of Simple Harmonic Motion:

### 4.1 Period ($T$) and Frequency ($f_n$)

*   **Period ($T$)**: This is the time it takes for one complete cycle of oscillation. In our equation, the cosine function repeats every $2\pi$ radians. So, the period is:
    $T = \frac{2\pi}{\omega_n}$

    Substituting $\omega_n = \sqrt{k/m}$:
    $T = 2\pi \sqrt{\frac{m}{k}}$

    **Intuition:** A heavier mass ($m$) will swing slower, leading to a longer period. A stiffer spring ($k$) will snap back faster, leading to a shorter period. This makes perfect sense!

*   **Natural Frequency ($f_n$)**: This is the number of complete cycles per unit time. It's the reciprocal of the period.
    $f_n = \frac{1}{T} = \frac{\omega_n}{2\pi} = \frac{1}{2\pi} \sqrt{\frac{k}{m}}$

    This is usually measured in Hertz (Hz), where 1 Hz means one cycle per second.

**Relatable Example:** Think about a playground swing.
*   **Mass ($m$)**: The weight of the person on the swing. A heavier person means a longer period (takes longer to swing back and forth).
*   **Length of the swing (related to $k$)**: For a simple pendulum (which approximates SHM for small angles), the "stiffness" is related to the length of the string. A longer string (like a longer pendulum) results in a longer period. While our model is a spring, the concept of how mass and the spring's resistance to deformation affect the time for a cycle is analogous.

**Textbook Reference:** You'll find these derivations and discussions prominently in Hibbeler's "Engineering Mechanics: Combined Statics and Dynamics" and Shames' "Engineering Mechanics - Statics and Dynamics." They emphasize how these parameters ($m$, $k$, $T$, $f_n$) are fundamental to defining the vibratory characteristics of any system.

### 4.2 Velocity and Acceleration in SHM

We already looked at velocity:
$v(t) = \frac{dx}{dt} = -A\omega_n \sin(\omega_n t + \phi)$

The maximum velocity ($v_{max}$) occurs when $\sin(\omega_n t + \phi) = \pm 1$:
$v_{max} = A\omega_n = A\sqrt{\frac{k}{m}}$

Now for acceleration:
$a(t) = \frac{dv}{dt} = \frac{d^2x}{dt^2} = -A\omega_n^2 \cos(\omega_n t + \phi)$

Notice something interesting: $a(t) = -\omega_n^2 (A \cos(\omega_n t + \phi)) = -\omega_n^2 x(t)$. This is precisely the form of our original differential equation, $\frac{d^2x}{dt^2} = -\frac{k}{m}x$, since $\omega_n^2 = k/m$.

The maximum acceleration ($a_{max}$) occurs when $\cos(\omega_n t + \phi) = \pm 1$:
$a_{max} = A\omega_n^2 = A\frac{k}{m}$

**Key Insight:** In SHM, acceleration is directly proportional to displacement and always directed towards the equilibrium position. When displacement is maximum (at the extremes of the motion), acceleration is also maximum. When displacement is zero (at the equilibrium position), acceleration is zero.

**Analogy:** Imagine a child on a bouncy castle.
*   When the child is at the very top of a bounce (maximum displacement), they are momentarily at rest, but the ground (spring) is pulling them down with maximum force, hence maximum acceleration downwards.
*   When the child is at the bottom of the bounce, right when they hit the "peak" compression of the bouncy surface (equilibrium for the bounce), their velocity is maximum, but the surface is pushing them upwards with zero net force relative to their equilibrium, meaning zero acceleration at that instant. *Correction:* For a spring-mass system, at equilibrium ($x=0$), the acceleration is zero. The velocity is maximum at equilibrium. At maximum displacement, velocity is zero and acceleration is maximum.

**Common Pitfall:** Students sometimes confuse maximum velocity and maximum acceleration points. Remember: Max velocity is at equilibrium ($x=0$), max acceleration is at maximum displacement ($x = \pm A$).

### 4.3 Energy in SHM

In an ideal spring-mass system (no friction or damping), the total mechanical energy is conserved. Energy continuously transforms between kinetic energy ($KE$) and potential energy ($PE$).

*   **Kinetic Energy (KE):** $KE = \frac{1}{2}mv^2$
*   **Potential Energy (PE):** $PE = \frac{1}{2}kx^2$ (This is the elastic potential energy stored in the spring).

The total energy $E$ is constant: $E = KE + PE = \frac{1}{2}mv^2 + \frac{1}{2}kx^2 = \text{constant}$

Let's see where this total energy is maximized and minimized:

*   **At Maximum Displacement ($x = \pm A$):**
    Here, velocity $v=0$.
    $KE = \frac{1}{2}m(0)^2 = 0$
    $PE = \frac{1}{2}kA^2$
    Total Energy $E = \frac{1}{2}kA^2$ (All energy is stored as potential energy in the spring).

*   **At Equilibrium Position ($x = 0$):**
    Here, velocity is maximum ($v = \pm v_{max} = \pm A\omega_n$).
    $KE = \frac{1}{2}m(A\omega_n)^2 = \frac{1}{2}m A^2 (\frac{k}{m}) = \frac{1}{2}kA^2$
    $PE = \frac{1}{2}k(0)^2 = 0$
    Total Energy $E = \frac{1}{2}kA^2$ (All energy is kinetic energy of the mass).

This constant total energy $E = \frac{1}{2}kA^2$ is a crucial result, as it directly relates the amplitude to the stiffness and mass.

**Exam Focus:** Understanding the energy transformation is key. Questions often ask about the state of energy at different points of the oscillation.

## 5. Types of Vibrations

So far, we've implicitly assumed the system is disturbed and then left to oscillate on its own. This is called **free vibration**.

*   **Free Vibration:** Occurs when a system is disturbed from its equilibrium position and then allowed to vibrate without any external force acting on it. The motion is characterized by its natural frequency ($\omega_n$). This is what we've been analyzing.

What happens if we keep pushing it?

*   **Forced Vibration:** Occurs when an external periodic force is applied to the system. The system will then vibrate at the frequency of the applied force. This is crucial for analyzing how structures respond to external stimuli like earthquakes or machinery vibrations.
*   **Damped Vibration:** In reality, all vibrating systems lose energy due to friction, air resistance, or internal material damping. This causes the amplitude of free vibrations to gradually decrease over time. This is called damping. We'll cover this in more detail later, but for now, remember that our ideal SHM model is *undamped*.

## 6. Practical Examples and Applications

The spring-mass model, though simple, is surprisingly versatile.

*   **Vehicle Suspension Systems:** The shock absorbers and springs in a car are a classic example. They are designed to absorb road imperfections, preventing those jolts from reaching the passengers. The tuning of these springs and dampers is critical for ride comfort and handling. A car with too soft a suspension might bounce excessively (long period), while one with too stiff a suspension might feel every bump (short period, high "stiffness").
*   **Musical Instruments:** The vibrating strings of a guitar or piano, or the air column in a wind instrument, all exhibit oscillatory behavior. The pitch of a note is directly related to the frequency of vibration, which depends on factors analogous to mass, stiffness, and tension.
*   **Vibrating Machinery:** Many machines have rotating parts. If these parts are not perfectly balanced, they create an unbalanced centrifugal force that acts like a periodic external force, causing forced vibrations in the structure of the machine. Engineers must analyze these vibrations to ensure the machine operates safely and efficiently.
*   **Bouncing Balls:** While air resistance and deformation play roles, the vertical motion of a ball after bouncing can be approximated as SHM for a few oscillations if the bounce is elastic. The "stiffness" here would relate to how the ball and the surface deform.

**Remember this:** The principles of SHM are fundamental. Whether it's a large bridge or a tiny sensor, the underlying dynamics can often be understood by relating it to these basic spring-mass models.

## 7. Connecting to Course Outcomes (Recap)

Let's explicitly see how this topic supports our Course Outcomes:

*   **CO1 (Vector Representation of Forces):** We used forces like gravity ($mg$) and spring force ($F_s = -kx$) in our analysis. While we simplified to a scalar equation of motion, understanding that these are vector forces acting on the mass is fundamental.
*   **CO2 (Identify and Describe Components):** We identified the mass ($m$) and the spring ($k$) as key components. We described the forces acting on them (gravity, spring force) and how they interact to produce motion.
*   **CO3 (Conditions of Equilibrium):** We used the equilibrium position ($k\Delta L = mg$) to define our reference point ($x=0$) for displacement. Understanding equilibrium is crucial for understanding the *deviation* from equilibrium that causes vibration.
*   **CO4 (Apply Principles):** We directly applied Newton's Second Law ($F=ma$) and Hooke's Law ($F_s = -kx$) to derive the equation of motion for SHM. We used calculus to move from force to displacement.
*   **CO5 (Understand Rigid Body Dynamics):** The entire motion of the mass on the spring is an example of rigid body dynamics. We're analyzing how the mass accelerates and moves in response to forces, and how its properties ($m$) and the system's properties ($k$) dictate that motion.

## Sample Questions and Answers

Here are some practice questions to test your understanding:

**1. Conceptual Question:**
What are the two main characteristics of the restoring force in Simple Harmonic Motion?

**Answer:**
The two main characteristics of the restoring force in SHM are:
1.  **Proportionality to Displacement:** The force is directly proportional to the displacement from the equilibrium position ($F_s \propto x$).
2.  **Opposite Direction to Displacement:** The force always acts in the direction opposite to the displacement from equilibrium ($F_s = -kx$). This is what makes it a "restoring" force.

**Reasoning:** This directly tests the understanding of Hooke's Law, which is the defining characteristic of the restoring force in SHM.

**2. Calculation Question:**
A mass of 2 kg is attached to a spring with a stiffness of 200 N/m. If the mass is displaced by 0.1 m from its equilibrium position and released with zero initial velocity, what is its amplitude and period of oscillation?

**Answer:**
*   **Given:**
    Mass ($m$) = 2 kg
    Spring stiffness ($k$) = 200 N/m
    Initial displacement ($x_0$) = 0.1 m
    Initial velocity ($v_0$) = 0 m/s

*   **Amplitude (A):**
    Since the mass is released from rest ($v_0 = 0$), the initial displacement is the maximum displacement, which is the amplitude.
    $A = x_0 = 0.1$ m

*   **Period (T):**
    First, calculate the natural angular frequency ($\omega_n$):
    $\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{200 \text{ N/m}}{2 \text{ kg}}} = \sqrt{100 \text{ s}^{-2}} = 10$ rad/s

    Now, calculate the period ($T$):
    $T = \frac{2\pi}{\omega_n} = \frac{2\pi}{10 \text{ rad/s}} = \frac{\pi}{5}$ s $\approx 0.628$ s

*   **Therefore:** The amplitude is 0.1 m, and the period of oscillation is approximately 0.628 seconds.

**Reasoning:** This question tests the ability to apply the formulas for amplitude (from initial conditions) and period, using the given mass and stiffness to first find the natural frequency. It's a direct application of the derived formulas.

**3. Conceptual/Application Question:**
Describe the energy transformation occurring in a vertical spring-mass system undergoing free vibration. Where is the kinetic energy maximum, and where is the potential energy maximum?

**Answer:**
In a vertical spring-mass system undergoing free undamped vibration, the total mechanical energy (the sum of kinetic and potential energy) remains constant. Energy continuously transforms between kinetic energy ($KE = \frac{1}{2}mv^2$) and elastic potential energy stored in the spring ($PE = \frac{1}{2}kx^2$, where $x$ is displacement from equilibrium).

*   **Kinetic Energy is maximum** when the velocity is maximum. In SHM, velocity is maximum at the **equilibrium position** ($x=0$). At this point, all the energy is kinetic.
*   **Potential Energy is maximum** when the displacement from equilibrium is maximum. This occurs at the **extreme points** of the oscillation ($x = \pm A$), where the velocity is momentarily zero. At these points, all the energy is stored as potential energy in the spring.

**Reasoning:** This question probes the understanding of energy conservation and the relationship between displacement, velocity, and energy state at different points in the oscillation. It relates directly to CO5 (dynamics) and CO4 (applying principles).

**4. Formula Recall Question:**
What is the unit of the natural frequency ($\omega_n$) of vibration?

**Answer:**
The unit of the natural frequency ($\omega_n$) is **radians per second (rad/s)**.

**Reasoning:** This is a fundamental unit recall question, important for ensuring correct use of the term in calculations.

This concludes our introduction to the spring-mass model and Simple Harmonic Motion. Keep practicing these concepts, and you'll build a very strong foundation for understanding more complex vibration phenomena!
