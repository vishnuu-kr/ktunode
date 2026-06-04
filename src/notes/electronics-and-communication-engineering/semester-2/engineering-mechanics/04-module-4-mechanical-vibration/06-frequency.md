---
title: "frequency"
subject: "ENGINEERING MECHANICS"
module: "Module 4: Mechanical vibration  "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da329"
status: "completed"
scrapedAt: "2026-05-23T17:39:07.001Z"
---
# Engineering Mechanics: Module 4 - Mechanical Vibration

## Topic: Frequency in Mechanical Vibration

Welcome, everyone! Today, we're diving into Module 4 of our Engineering Mechanics journey: Mechanical Vibration. This is a crucial area, as understanding how things move back and forth, or oscillate, is fundamental to designing stable and efficient systems, from the smallest smartwatch to the largest bridge. Our focus today is on a key concept that quantifies this oscillation: **frequency**.

Now, before we get too deep, let's connect this to our broader course goals. Remember our Course Outcomes (COs)? Understanding frequency directly relates to **CO5: Develop the understanding of fundamental principles of rigid body dynamics**. Vibration is a form of dynamic motion, and frequency helps us characterize *how* that motion occurs. It also indirectly supports **CO4: Identify appropriate principles to solve problems of mechanics**, because knowing the frequency of a system is often the first step in analyzing its behavior under different loads or disturbances.

### What is Vibration? A Quick Recap

Think about it – when we talk about mechanical vibration, we're talking about repetitive motion around an equilibrium position. Imagine a child on a swing. When you push them, they move back and forth. That’s a classic example of vibration. Or consider the strings of a guitar when you pluck them – they buzz back and forth, producing sound. Even the engine of your car, when it's running, has countless vibrating parts.

The core idea is that a system is displaced from its stable resting position, and then a restoring force pulls it back. This restoring force overshoots, and the process repeats. This cycle of motion is what we call oscillation or vibration.

### Defining Frequency: How Fast is It Oscillating?

So, what exactly is **frequency**? In simple terms, frequency tells us *how many complete cycles of vibration occur in one unit of time*. Think of our swing analogy. If the swing goes from one extreme to the other and back to the starting extreme – that’s one complete cycle. Frequency is simply counting how many times that complete back-and-forth motion happens every second.

Let's formalize this a bit. The standard unit of time we use is the **second**. So, frequency is measured in **cycles per second**. This unit has a special name: the **Hertz (Hz)**. So, if a system vibrates at 10 Hz, it means it completes 10 full cycles of oscillation every second.

**Remember this:** A higher frequency means the system is vibrating *faster*, completing more cycles in the same amount of time. A lower frequency means it's vibrating *slower*.

### Connecting Frequency to Related Concepts: Period and Angular Frequency

Now, frequency isn't the only term we use to describe oscillatory motion. We often talk about its close cousins: **period** and **angular frequency**. Understanding these will give us a more complete picture.

#### The Period (T)

The **period (T)** is the *time it takes to complete one full cycle of vibration*. If frequency is about "how many cycles per second," then period is about "how much time per cycle." They are inversely related, and this is a key relationship to grasp.

Imagine our swing again. If it takes 2 seconds for the swing to go from its highest point on one side, to the highest point on the other side, and back to the original high point, then the period (T) is 2 seconds.

The mathematical relationship is straightforward:

$$ \text{Frequency (f)} = \frac{1}{\text{Period (T)}} $$

And conversely:

$$ \text{Period (T)} = \frac{1}{\text{Frequency (f)}} $$

So, if the period is 2 seconds, the frequency is $1/2$ Hz, or 0.5 Hz. This makes intuitive sense, right? If each cycle takes longer, you'll complete fewer cycles in a second.

This inverse relationship is something you'll see in many physics and engineering contexts, not just vibrations. It's a powerful concept.

#### Angular Frequency (ω)

While frequency (f) is measured in cycles per second (Hz), we also often use **angular frequency (ω)**, which is measured in **radians per second (rad/s)**. Why do we need another measure? Well, vibrations are often described using sinusoidal functions (like sine or cosine waves), and these functions are naturally related to angles.

One complete cycle of oscillation corresponds to a full rotation of 360 degrees, or $2\pi$ radians. So, if a system completes 'f' cycles in one second, it covers $f \times 2\pi$ radians in that same second.

Therefore, the relationship between angular frequency (ω) and frequency (f) is:

$$ \omega = 2\pi f $$

And conversely:

$$ f = \frac{\omega}{2\pi} $$

So, if our swing has a frequency of 0.5 Hz, its angular frequency would be $\omega = 2\pi \times 0.5 = \pi$ rad/s.

**Think of it this way:** Frequency (f) tells you how many "laps" are completed per second. Angular frequency (ω) tells you how many "radians worth of laps" are completed per second. Both describe the speed of oscillation, but from slightly different perspectives. This concept of angular frequency is particularly useful when we start looking at the mathematical modeling of vibrations, which often involves trigonometric functions.

### Types of Frequencies in Vibrating Systems

When we analyze vibrating systems, especially those that might be a bit more complex than a simple pendulum, we encounter different types of frequencies:

#### 1. Natural Frequency ($f_n$ or $\omega_n$)

This is perhaps the most important frequency. The **natural frequency** is the frequency at which a system will oscillate if it's disturbed from its equilibrium position and then left to vibrate freely, *without any damping or external forcing*. It's an inherent property of the system itself, determined by its physical characteristics like mass and stiffness.

Imagine flicking a tuning fork. It vibrates at its natural frequency, producing a specific musical note. It does this because of its material properties (stiffness) and its mass.

For a simple spring-mass system (a mass 'm' attached to a spring with stiffness 'k'), the natural frequency is given by:

$$ f_n = \frac{1}{2\pi} \sqrt{\frac{k}{m}} $$

And the natural angular frequency is:

$$ \omega_n = \sqrt{\frac{k}{m}} $$

**Key takeaway:** The natural frequency is the system's preferred speed of vibration. It's like the inherent rhythm of the system. This is directly linked to **CO5**, as it helps us understand the fundamental dynamics of how a system responds to initial disturbances.

#### 2. Damped Natural Frequency ($f_d$ or $\omega_d$)

In the real world, most vibrating systems have some form of **damping**. Damping is a force that opposes motion, like friction or air resistance, and it causes the amplitude of vibration to decrease over time.

When damping is present, the system still oscillates, but it does so at a slightly *lower* frequency than its natural frequency. This is called the **damped natural frequency**.

The formula for the damped natural frequency (for a system with damping ratio $\zeta$) is:

$$ f_d = f_n \sqrt{1 - \zeta^2} $$

And similarly for angular frequency:

$$ \omega_d = \omega_n \sqrt{1 - \zeta^2} $$

For small amounts of damping (which is common in many engineering applications), the damped natural frequency is very close to the natural frequency. However, as damping increases, the difference becomes more noticeable.

#### 3. Forced Frequency ($f_f$ or $\omega_f$)

This is the frequency of any **external force** that is applied to the system to keep it vibrating. For example, if you continuously push the swing at regular intervals, the frequency of your pushes is the forced frequency.

If the forced frequency is close to the system's natural frequency, we get a phenomenon called **resonance**, which can lead to very large amplitudes of vibration. This is a critical concept in vibration analysis, as it can cause catastrophic failures if not accounted for. Understanding resonance is key to practical engineering design and directly relates to **CO4** (identifying principles to solve problems) and **CO5** (understanding dynamics).

### Why is Frequency So Important in Engineering?

Understanding frequency isn't just an academic exercise. It has immense practical implications:

*   **Avoiding Resonance:** As mentioned, resonance can be destructive. Bridges, buildings, aircraft wings – all are designed to avoid their natural frequencies matching common external forces (like wind gusts or engine vibrations). Think of the Tacoma Narrows Bridge collapse! It's a famous (though complex) example where wind forces excited the bridge's natural frequency, leading to catastrophic failure. This links directly to **CO4** and **CO5**.

*   **Designing for Performance:** Many machines operate most efficiently at specific frequencies. For example, a washing machine might have different spin cycles, each at a particular frequency to achieve optimal cleaning and drying.

*   **System Identification:** By measuring the frequency of vibration, engineers can learn about the properties of a system, like its mass or stiffness. For instance, if a bridge develops a crack, its stiffness might decrease, leading to a change in its natural frequency. Monitoring these changes can indicate damage. This relates to **CO2** (identifying components affecting behavior) and **CO4**.

*   **Musical Instruments:** The frequency of a vibrating string or air column determines the pitch of the sound produced. This is a direct application of vibration principles.

*   **Seismic Design:** Buildings in earthquake-prone areas are designed to withstand vibrations at frequencies typically associated with earthquakes.

### Examples to Visualize

Let's try some relatable examples:

*   **Your Smartphone:** When your phone vibrates to notify you of a message, it's not just vibrating randomly. There's a specific frequency and amplitude designed for you to feel it, but not be overly annoyed. If the vibration motor's frequency were too low, you might miss the notification. If it were too high, it might feel unpleasant.

*   **A Guitar String:** Pluck a thick, heavy guitar string, and it vibrates slowly, producing a low-pitched sound. Pluck a thin, light string, and it vibrates much faster, producing a high-pitched sound. This demonstrates the relationship between mass (or tension) and frequency. Heavier objects tend to have lower natural frequencies, while lighter objects have higher ones. This also touches on **CO5**.

*   **A Car Suspension System:** When you hit a bump, the car bounces. The suspension system (springs and dampers) is designed so that the car doesn't keep bouncing uncontrollably. The stiffness of the springs and the damping provided by the shock absorbers determine the natural frequency and how quickly vibrations die down. If the damping is too low, you'd feel every little ripple in the road, and the car would feel "floaty." If it's too high, the ride might be bumpy and uncomfortable. This is a great example of tuning system properties to achieve a desired frequency response, linking to **CO4** and **CO5**.

### Practical Considerations for Problem Solving

When you encounter problems involving frequency in your exams or future work, keep these points in mind:

1.  **Identify the System:** What are the key components? What is the mass? What is the stiffness? (This relates to **CO2**).
2.  **Determine the Type of Frequency:** Are you looking for the natural frequency (undamped), damped natural frequency, or frequency of an applied force?
3.  **Recall the Formulas:** Make sure you have the basic formulas for natural frequency (e.g., $\frac{1}{2\pi}\sqrt{\frac{k}{m}}$ for a spring-mass system) and the relationships between f, T, and ω.
4.  **Check Units:** Always ensure your units are consistent. Mass in kg, stiffness in N/m, resulting frequency in Hz or rad/s.
5.  **Consider Damping and Forcing:** Is damping present? Is there an external force? How do these affect the system's vibration?

### Summary of Key Concepts

To wrap up our discussion on frequency, let's reinforce the most critical ideas:

*   **Frequency (f)**: The number of complete vibration cycles per second, measured in Hertz (Hz).
*   **Period (T)**: The time taken for one complete vibration cycle, measured in seconds (s). $f = 1/T$.
*   **Angular Frequency (ω)**: The rate of oscillation in radians per second (rad/s). $\omega = 2\pi f$.
*   **Natural Frequency ($f_n$ or $\omega_n$)**: The inherent frequency of free vibration of a system, determined by its mass and stiffness. It's the system's characteristic rhythm.
*   **Damped Natural Frequency ($f_d$ or $\omega_d$)**: The frequency of vibration in the presence of damping. It's slightly lower than the natural frequency.
*   **Forced Frequency ($f_f$)**: The frequency of an external driving force applied to the system.
*   **Resonance**: Occurs when the forced frequency matches the natural frequency, leading to large amplitude vibrations.

Understanding these concepts will equip you to analyze a wide range of dynamic mechanical systems. It's a foundational step in mastering mechanical vibration.

---

### Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual to more problem-solving oriented:

**Q1. Conceptual Question:** What does it mean if a mechanical system has a natural frequency of 50 Hz?
    *   **Answer:** This means that if the system is displaced from its equilibrium position and allowed to vibrate freely without any damping or external forces, it will complete 50 full cycles of oscillation every second. It's the system's inherent rate of vibration.

**Q2. Conceptual Question:** How does damping affect the frequency of a vibrating system?
    *   **Answer:** Damping causes the system to vibrate at a slightly lower frequency than its natural, undamped frequency. This is known as the damped natural frequency. For small amounts of damping, the difference is usually negligible, but for heavier damping, the decrease in frequency becomes more significant.

**Q3. Problem-Solving Question:** A mass of 2 kg is attached to a spring with a stiffness of 800 N/m. Calculate the natural frequency of vibration in Hertz (Hz) and in radians per second (rad/s).
    *   **Solution:**
        *   We are given: mass (m) = 2 kg, stiffness (k) = 800 N/m.
        *   The formula for natural angular frequency ($\omega_n$) for a simple spring-mass system is $\omega_n = \sqrt{\frac{k}{m}}$.
        *   $\omega_n = \sqrt{\frac{800 \text{ N/m}}{2 \text{ kg}}} = \sqrt{400 \text{ s}^{-2}} = 20 \text{ rad/s}$.
        *   The relationship between natural frequency (f_n) and natural angular frequency ($\omega_n$) is $f_n = \frac{\omega_n}{2\pi}$.
        *   $f_n = \frac{20 \text{ rad/s}}{2\pi \text{ rad/cycle}} = \frac{10}{\pi} \text{ Hz} \approx 3.18 \text{ Hz}$.
        *   **Answer:** The natural frequency is approximately 3.18 Hz, and the natural angular frequency is 20 rad/s.

**Q4. Application/Analysis Question:** Imagine designing a shelf for a heavy piece of machinery. The machinery vibrates at 60 Hz when running. If the shelf has a natural frequency of 55 Hz, is this a safe design? Explain why or why not, relating your answer to the concepts of frequency.
    *   **Solution:**
        *   The machinery vibrates at a **forced frequency** of 60 Hz.
        *   The shelf has a **natural frequency** of 55 Hz.
        *   The forced frequency (60 Hz) is close to, but not exactly equal to, the natural frequency (55 Hz).
        *   While not a direct match, being close to the natural frequency means there is a significant risk of **resonance**. Resonance occurs when the driving frequency is near the natural frequency, causing a large increase in the amplitude of vibration.
        *   **Therefore, this design is likely not safe.** Even though it's not an exact match, the proximity could lead to dangerously large vibrations in the shelf, potentially causing it to fail or transmit excessive vibration to the surrounding structure. A safer design would ensure the shelf's natural frequency is significantly different from the machinery's operating frequency, typically much higher or much lower, to avoid resonance. This directly relates to **CO4** and **CO5**.

**Q5. Conceptual Linkage Question:** How does the concept of frequency in mechanical vibrations relate to Course Outcome 2 (CO2: Identify and describe the components of system of forces acting on the rigid body)?
    *   **Answer:** While CO2 focuses on static force analysis, understanding the *components* of a system is crucial for vibration analysis too. For vibration frequency, the key "components" influencing it are the system's **mass (m)** and its **stiffness (k)**. The stiffness of a spring, the mass of an object, or the rigidity of a beam all act like "force-related properties" in a dynamic sense – they contribute to the restoring forces and inertia that dictate the oscillation frequency. So, identifying these mass and stiffness characteristics is analogous to identifying force components in statics, helping us predict the system's dynamic behavior (frequency). This demonstrates how principles learned in earlier modules extend to dynamics and vibration analysis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
