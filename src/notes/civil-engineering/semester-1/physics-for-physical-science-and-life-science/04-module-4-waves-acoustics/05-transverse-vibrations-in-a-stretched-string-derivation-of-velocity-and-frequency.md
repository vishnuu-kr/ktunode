---
title: "Transverse vibrations in a stretched string- derivation of velocity and frequency - laws of transverse vibration"
subject: "PHYSICS FOR PHYSICAL SCIENCE AND LIFE SCIENCE"
module: "Module 4: Waves & Acoustics"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912d3a"
status: "completed"
scrapedAt: "2026-05-20T18:31:42.498Z"
---
## Module 4: Waves & Acoustics - Transverse Vibrations in a Stretched String

Welcome, everyone! Today, we're diving into a fundamental topic in our Waves and Acoustics module: the fascinating world of **transverse vibrations in a stretched string**. This isn't just abstract physics; it's the very principle behind musical instruments like guitars, violins, and pianos, and it helps us understand how sound travels through vibrating mediums. We'll explore how to derive the speed and frequency of these waves and, crucially, the laws that govern their behavior.

**Connecting to Our Course Outcomes:**

Before we get started, let's see how this topic ties into what we're aiming to achieve in this course. Understanding how a string vibrates directly relates to:

*   **CO1 (Laser & Optic Fibers):** While seemingly different, the wave nature of light in optic fibers and sound waves in strings share fundamental principles of wave propagation, speed, and frequency. Understanding one helps build intuition for the other.
*   **CO2 (Interference & Diffraction):** These phenomena are all about waves interacting. The vibrations in a string can lead to interference patterns if we have multiple strings or reflections, and diffraction can occur when waves encounter obstacles.
*   **CO4 (Waves & Acoustics in Design):** This is where the rubber meets the road! The laws we'll discuss are essential for acoustic design – think about how to tune instruments, design concert halls for optimal sound, or even how to dampen vibrations in machinery.
*   **CO5 (Conducting Experiments):** Many experiments in the lab involve measuring the frequency and wavelength of waves on a string, directly applying the concepts we'll cover.

So, pay close attention as we build this understanding step-by-step.

### What are Transverse Vibrations?

Imagine a guitar string. When you pluck it, it doesn't move forward and backward along its length, does it? Instead, it moves *up and down*, perpendicular to its stretched position. This is the essence of a **transverse wave**. The particles of the medium (the string segments) oscillate perpendicular to the direction in which the wave energy is traveling.

Think about a ripple on a pond. The water molecules move up and down, but the ripple itself travels across the surface. Similarly, in a stretched string, segments of the string move up and down, creating a wave that propagates along the string's length.

### Deriving the Velocity of a Transverse Wave on a Stretched String

This is where our physics really comes into play. We need to figure out how fast this wave travels. To do this, we'll use some fundamental principles, particularly Newton's second law of motion.

Let's consider a small segment of the string that's vibrating. We can analyze the forces acting on this segment. For simplicity, let's imagine a section of the string that forms part of a circular arc.

**(Visualizing the Setup)**

Picture a long, taut string under tension, $T$. When a wave passes, a small segment of the string, which we can approximate as having length $\Delta s$, is displaced from its equilibrium position. Let the radius of curvature of this displaced segment be $R$. The tension $T$ acts tangentially at each end of this segment.

The forces due to tension at the two ends of our small segment are $T$. Since the string is curved, these forces are not parallel. They have an inward radial component that provides the centripetal force required for the segment to move in a curve.

Let's consider the angle subtended by this segment at the center of curvature, $\Delta \theta$. The radial component of tension at each end is $T \sin(\Delta \theta / 2)$. Since $\Delta \theta$ is very small, we can use the approximation $\sin(x) \approx x$ for small $x$. So, the radial force at each end is approximately $T (\Delta \theta / 2)$.

The total inward radial force acting on the segment is the sum of these components from both ends: $2 \times T (\Delta \theta / 2) = T \Delta \theta$. This force provides the centripetal force $F_c = \frac{mv^2}{R}$, where $m$ is the mass of the segment and $v$ is its velocity.

Now, let's relate these quantities to the properties of the string.

*   **Mass of the segment ($m$):** If the linear mass density of the string (mass per unit length) is $\mu$, then the mass of our segment is $m = \mu \times (\text{length of the arc})$. For a small segment, the arc length is approximately equal to the chord length, which is $R \Delta \theta$. So, $m \approx \mu R \Delta \theta$.
*   **Tension ($T$):** This is the force with which the string is stretched. A tighter string means a higher tension.

Substituting these into our centripetal force equation:
$T \Delta \theta = \frac{(\mu R \Delta \theta) v^2}{R}$

Notice that $R$ and $\Delta \theta$ cancel out! This is a very important simplification.
$T = \mu v^2$

Rearranging this to find the velocity ($v$):
$v^2 = \frac{T}{\mu}$
$v = \sqrt{\frac{T}{\mu}}$

**This is a crucial formula!** It tells us that the velocity of a transverse wave on a stretched string depends on two main factors:

1.  **Tension ($T$):** The greater the tension, the faster the wave travels. Think about tightening a guitar string – the pitch (which is related to frequency) goes up, meaning the wave speed must have increased.
2.  **Linear Mass Density ($\mu$):** The heavier the string (per unit length), the slower the wave travels. A thicker, heavier string will produce a lower note than a thinner, lighter string of the same length and tension.

**Analogy:** Imagine trying to push a light shopping cart versus a heavy grocery cart. If you apply the same force, the light cart will accelerate much faster. Similarly, with the same tension (force), a string with lower mass density (lighter cart) will allow waves to travel faster.

*(Referencing Textbooks: Avadhanulu et al., "A Textbook of Engineering Physics," discusses this derivation using similar force analysis. Malik & Singh, "Engineering Physics," also covers this and might provide slightly different visual aids for the force components.)*

### Deriving the Frequency of a Transverse Wave

Now that we know the velocity, how do we talk about frequency? Frequency ($f$) is the number of complete oscillations per second. We know the fundamental relationship for waves:

$v = f \lambda$

where $\lambda$ (lambda) is the wavelength – the spatial distance between two consecutive crests or troughs.

If we know the length of the string ($L$) and how it's vibrating, we can relate these. For the simplest mode of vibration, called the **fundamental mode** or **first harmonic**, the string vibrates in a single loop. In this case, the length of the string is exactly half a wavelength:

$L = \frac{\lambda}{2}$

Therefore, the wavelength is:
$\lambda = 2L$

Now, we can substitute this into our velocity equation:
$v = f \times (2L)$

Solving for frequency ($f$):
$f = \frac{v}{2L}$

And since we know $v = \sqrt{\frac{T}{\mu}}$, we can substitute that in:
$f = \frac{1}{2L} \sqrt{\frac{T}{\mu}}$

**This equation tells us the fundamental frequency of vibration for a stretched string.**

**Real-World Example:** Think about tuning a guitar.
*   **Tension:** When you turn the tuning peg, you're adjusting the tension ($T$) on the string. Increasing tension increases $T$, which increases $v$, which in turn increases $f$ (making the note higher).
*   **Length:** On a guitar, pressing down on a fret effectively shortens the vibrating length ($L$) of the string. As $L$ decreases, $f$ increases, raising the pitch.
*   **Linear Mass Density:** Guitars have strings of different thicknesses. Thicker strings have a higher $\mu$. For the same tension and length, a thicker string (higher $\mu$) will have a lower frequency ($f$) and thus a lower pitch.

*(Reference: Ghatak, "Optics," might focus more on light waves, but the fundamental wave equation $v=f\lambda$ is universal. Avadhanulu et al. and Malik & Singh will definitely cover these derivations for mechanical waves on strings.)*

### The Laws of Transverse Vibration of a Stretched String

These laws are direct consequences of the frequency formula we just derived: $f = \frac{1}{2L} \sqrt{\frac{T}{\mu}}$. They are beautifully simple and explain how to change the pitch of a string instrument.

These laws are often asked about in exams, so it's good to have them clearly in mind. They essentially state how frequency is affected by changes in tension, length, and linear density.

**Law 1: The frequency is directly proportional to the square root of the tension.**

$f \propto \sqrt{T}$ (when $L$ and $\mu$ are constant)

*   **Explanation:** If you increase the tension by a factor of 4, the frequency will double. This is a very common relationship to remember for exams.
*   **Example:** Tuning a string instrument. Tightening a string raises its pitch.

**Law 2: The frequency is inversely proportional to the length of the string.**

$f \propto \frac{1}{L}$ (when $T$ and $\mu$ are constant)

*   **Explanation:** If you double the length of the string (keeping tension and mass density the same), the frequency will be halved. This means the note will be an octave lower.
*   **Example:** Fretting a guitar. Pressing down on a fret shortens the vibrating length and raises the pitch.

**Law 3: The frequency is inversely proportional to the square root of the linear mass density.**

$f \propto \frac{1}{\sqrt{\mu}}$ (when $T$ and $L$ are constant)

*   **Explanation:** This means if you double the linear mass density (e.g., by using a string twice as heavy per unit length), the frequency will decrease by a factor of $\sqrt{2}$.
*   **Example:** Different gauge strings on a guitar. The thickest strings have the highest $\mu$ and produce the lowest notes.

**Summary of Laws:**

You can think of these laws as controlling the "note" or pitch.
*   **Tighter string = Higher note.**
*   **Shorter string = Higher note.**
*   **Lighter string = Higher note.**

*(Reference: All our core textbooks, Avadhanulu, Malik & Singh, and even Vijayakumari, will detail these laws. They are fundamental to understanding musical acoustics and string vibrations.)*

### Harmonics and Overtones

What we've discussed so far is the **fundamental frequency** ($f_1$), which corresponds to the simplest vibration pattern. However, a string can vibrate in more complex ways, producing higher frequencies called **harmonics** or **overtones**.

When a string vibrates in multiple segments, it forms **nodes** (points of no displacement) and **antinodes** (points of maximum displacement).

*   **First Harmonic (Fundamental):** 1 loop, nodes at ends, 1 antinode in middle. Wavelength $\lambda_1 = 2L$. Frequency $f_1 = \frac{v}{2L}$.
*   **Second Harmonic (First Overtone):** 2 loops, nodes at ends and middle, 2 antinodes. Wavelength $\lambda_2 = L$. Frequency $f_2 = \frac{v}{L} = 2f_1$.
*   **Third Harmonic (Second Overtone):** 3 loops, nodes at ends and two other points, 3 antinodes. Wavelength $\lambda_3 = \frac{2L}{3}$. Frequency $f_3 = \frac{v}{2L/3} = 3f_1$.

In general, for the $n^{th}$ harmonic, the string vibrates in $n$ segments, with wavelength $\lambda_n = \frac{2L}{n}$ and frequency $f_n = n f_1 = \frac{n}{2L} \sqrt{\frac{T}{\mu}}$.

The collection of frequencies ($f_1, f_2, f_3, \dots$) that a string can produce is what gives a musical instrument its unique **timbre** or tone quality. Even when playing the same note (same $f_1$), a violin sounds different from a piano because of the relative strengths of these overtones.

*(Reference: While Ghatak's "Optics" might not delve into musical acoustics, the concept of nodes and antinodes is fundamental to wave phenomena in general, including light waves.)*

### Practical Applications and Importance

The principles of transverse vibrations in a stretched string are foundational for:

*   **Musical Instruments:** Guitars, violins, pianos, harps – all rely on these principles for their sound production.
*   **Acoustic Engineering:** Designing concert halls, recording studios, and even noise cancellation systems involves understanding how vibrations and waves interact. CO4 is directly addressed here.
*   **Physics Education:** It’s a classic example to teach wave properties like speed, frequency, wavelength, and the relationships between them. This directly supports CO5.
*   **Understanding Oscillations:** The concepts learned here are transferable to understanding oscillations in many other physical systems, like pendulums or even electrical circuits.

Remember, the beauty of physics is in how interconnected seemingly different phenomena are. The way a guitar string vibrates shares mathematical and physical principles with how light travels in an optic fiber.

### Sample Questions and Answers

Let's test our understanding with some questions that might appear in exams:

**Q1. (Conceptual) If you pluck a guitar string and then press down on a fret further up the neck, what happens to the frequency of the sound produced? Explain why using the relevant law.**

**Answer:** The frequency of the sound produced will increase. This is explained by the **law of transverse vibration stating that frequency is inversely proportional to the length of the string ($f \propto 1/L$)**. By pressing down on a fret, you shorten the vibrating length of the string. As $L$ decreases, $f$ increases, resulting in a higher pitch.

**Q2. (Derivation/Calculation) A string of length 1.5 m has a tension of 120 N. If its linear mass density is $5 \times 10^{-3}$ kg/m, calculate the velocity of transverse waves on the string and its fundamental frequency.**

**Answer:**
We are given:
Length, $L = 1.5$ m
Tension, $T = 120$ N
Linear mass density, $\mu = 5 \times 10^{-3}$ kg/m

*   **Velocity ($v$):**
    The formula for velocity is $v = \sqrt{\frac{T}{\mu}}$.
    $v = \sqrt{\frac{120 \text{ N}}{5 \times 10^{-3} \text{ kg/m}}}$
    $v = \sqrt{\frac{120}{0.005}} = \sqrt{24000}$
    $v \approx 154.9$ m/s

*   **Fundamental Frequency ($f$):**
    The formula for fundamental frequency is $f = \frac{1}{2L} \sqrt{\frac{T}{\mu}}$ or simply $f = \frac{v}{2L}$.
    $f = \frac{154.9 \text{ m/s}}{2 \times 1.5 \text{ m}}$
    $f = \frac{154.9}{3} \approx 51.63$ Hz

So, the velocity of transverse waves is approximately 154.9 m/s, and the fundamental frequency is approximately 51.63 Hz.

**Q3. (Conceptual) A string is vibrating with a certain frequency. If the tension is increased by a factor of 9, what happens to the frequency?**

**Answer:** The frequency will increase by a factor of 3. This is because the frequency is directly proportional to the square root of the tension ($f \propto \sqrt{T}$). If $T$ increases by a factor of 9, then $\sqrt{T}$ increases by a factor of $\sqrt{9} = 3$. Therefore, the frequency $f$ also increases by a factor of 3.

**Q4. (Application to Music) Explain why heavier gauge strings on a guitar produce lower notes compared to lighter gauge strings, assuming the length and tension are the same.**

**Answer:** Heavier gauge strings have a greater **linear mass density ($\mu$)**. According to the third law of transverse vibration, the frequency is inversely proportional to the square root of the linear mass density ($f \propto 1/\sqrt{\mu}$). With a larger $\mu$, the frequency ($f$) will be lower, resulting in a lower musical note. This directly relates to CO4 by explaining the physical basis for different notes in musical instruments.

---
This concludes our session on transverse vibrations in a stretched string. Remember these formulas and laws, as they are incredibly useful and frequently tested. Keep practicing with these concepts, and you'll find them applicable in many areas of physics and engineering!
