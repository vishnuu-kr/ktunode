---
title: "Particle velocity"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 1: Acoustics, sound and noise, generation of sound"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fd3"
status: "completed"
scrapedAt: "2026-05-20T18:09:25.034Z"
---
# ACOUSTICS AND NOISE CONTROL - Module 1: Acoustics, Sound and Noise, Generation of Sound

## Topic: Particle Velocity

---

### 1. Introduction to Particle Velocity

Particle velocity is a fundamental concept in understanding sound waves. It describes the **velocity of the individual particles of the medium through which the sound wave is propagating**, as opposed to the velocity of the wave itself (which is the wave propagation speed). In acoustics, we often deal with pressure waves, but these waves are caused by the oscillating motion of these particles.

**Key Concepts:**

*   **Medium:** The substance (e.g., air, water, solids) through which a sound wave travels.
*   **Particles:** The constituent molecules or atoms of the medium.
*   **Oscillation:** The back-and-forth movement of particles around their equilibrium position.

**Learning Outcomes Covered:**

*   **CO1 (K2):** To define various acoustic terminologies and understand the physics behind acoustic wave propagation. (Particle velocity is a key term in understanding wave propagation).

**Textbook References:**

*   **Einsler, Frey, Coppens, Sanders (Fundamentals of Acoustics):** This textbook is a foundational resource for understanding the physical principles of acoustics, including the motion of particles in a medium under the influence of a sound wave.
*   **Ver & Beranek (Noise and Vibration Control Engineering):** While focusing on control, this text will likely touch upon the fundamental physics of sound generation and propagation, where particle velocity plays a crucial role.

---

### 2. Understanding Particle Motion in Sound Waves

Sound waves are typically **longitudinal waves** in fluids (like air and water), meaning the particle displacement and velocity are parallel to the direction of wave propagation.

**Mechanism:**

1.  **Source Vibration:** A sound source (e.g., a speaker cone, vocal cords) vibrates.
2.  **Compression and Rarefaction:** This vibration displaces adjacent particles in the medium.
    *   When the source moves outwards, it pushes nearby particles together, creating a region of higher pressure and density (compression).
    *   When the source moves inwards, it pulls away from nearby particles, creating a region of lower pressure and density (rarefaction).
3.  **Energy Transfer:** These compressions and rarefactions propagate through the medium as a wave.
4.  **Particle Oscillation:** As the wave passes, each particle in the medium is displaced from its equilibrium position and oscillates back and forth. The **particle velocity** is the instantaneous velocity of this oscillating particle.

**Types of Particle Motion:**

*   **Longitudinal Waves:** Particles oscillate parallel to the direction of wave propagation. This is the most common type for sound in fluids.
*   **Transverse Waves:** Particles oscillate perpendicular to the direction of wave propagation. This is less common for sound in fluids but can occur in solids.

**Important Points to Remember:**

*   **Particle velocity is NOT wave velocity.** The wave moves through the medium at the speed of sound, while the particles themselves only move a small distance back and forth.
*   The direction of particle velocity is **along the direction of wave propagation** in longitudinal waves.

---

### 3. Mathematical Representation of Particle Velocity

In a plane harmonic sound wave, the particle velocity ($v$) can be related to the acoustic pressure ($p$) and the acoustic impedance of the medium.

**Relationship with Acoustic Pressure:**

For a plane wave propagating in the $+x$ direction:

$v(x,t) = \frac{p(x,t)}{\rho_0 c}$

Where:

*   $v(x,t)$: Particle velocity at position $x$ and time $t$.
*   $p(x,t)$: Acoustic pressure at position $x$ and time $t$.
*   $\rho_0$: Equilibrium density of the medium.
*   $c$: Speed of sound in the medium.
*   $\rho_0 c$: Characteristic impedance of the medium ($Z_0$).

**Key Concept:**

*   **Characteristic Impedance ($Z_0$):** The ratio of acoustic pressure to particle velocity in a plane wave. It is an intrinsic property of the medium and depends on its density and the speed of sound.

**Example (Ver & Beranek):**

Consider a plane wave in air with a frequency of 1000 Hz. If the sound pressure level is 94 dB re $20 \mu$Pa, the corresponding sound pressure is approximately 1 Pa. The density of air is about 1.21 kg/m³ and the speed of sound is about 343 m/s.
Therefore, the characteristic impedance of air is $Z_0 = \rho_0 c \approx 1.21 \text{ kg/m³} \times 343 \text{ m/s} \approx 415 \text{ Pa s/m}$.
The particle velocity would then be $v = \frac{1 \text{ Pa}}{415 \text{ Pa s/m}} \approx 0.0024 \text{ m/s}$ or 2.4 mm/s.

**Relationship with Particle Displacement:**

Particle velocity is the time derivative of particle displacement ($\xi$).

$v(x,t) = \frac{\partial \xi(x,t)}{\partial t}$

Where:

*   $\xi(x,t)$: Particle displacement at position $x$ and time $t$.

**Example (Einsler et al.):**

If the particle displacement in a sinusoidal wave is given by $\xi(x,t) = \xi_{max} \sin(kx - \omega t)$, then the particle velocity is:
$v(x,t) = \frac{\partial}{\partial t} [\xi_{max} \sin(kx - \omega t)] = \xi_{max} (-\omega \cos(kx - \omega t)) = -\omega \xi_{max} \cos(kx - \omega t)$.
The maximum particle velocity is $v_{max} = \omega \xi_{max}$.
We know that $\omega = 2\pi f$ and $k = \frac{2\pi}{\lambda}$, where $f$ is frequency and $\lambda$ is wavelength.
Also, $c = \omega/k = f\lambda$.
So, $v_{max} = 2\pi f \xi_{max}$.
Relating this to pressure: $p_{max} = \rho_0 c \omega \xi_{max}$.
Thus, $v_{max} = \frac{p_{max}}{\rho_0 c}$, which confirms the previous relation.

**Learning Outcomes Covered:**

*   **CO1 (K2):** Defines acoustic terminology like characteristic impedance, pressure, and velocity.
*   **CO2 (K4):** Understands the relationship between pressure and particle velocity in wave propagation, which is crucial for analyzing sound transmission.

---

### 4. Particle Velocity in Different Acoustic Scenarios

*   **Near Field vs. Far Field:**
    *   **Near Field:** Close to the sound source, particle velocity can be complex, with significant reactive components and may not be simply related to pressure. The relationship $v=p/Z_0$ might not hold directly.
    *   **Far Field:** Far from the source, the sound wave behaves more like a plane wave, and the relationship $v=p/Z_0$ becomes a good approximation.

*   **In Tubes and Ducts:**
    *   In a rigid-walled tube, for a plane wave, the particle velocity and pressure are in phase.
    *   The presence of walls and boundary conditions affects particle motion. In a tube, the particle velocity at the wall is zero (no-slip condition).

*   **Sound Generation:**
    *   The motion of vibrating surfaces (e.g., loudspeaker diaphragms, engine pistons, fan blades) directly generates the initial particle motion in the surrounding medium, which then propagates as sound. The velocity of these surfaces is directly related to the initial particle velocity.

**Learning Outcomes Covered:**

*   **CO2 (K4):** Analyzing sound transmission through different media and tubes involves understanding how particle velocity behaves in these confined or varied environments.

**Reference Book Insights:**

*   **Munjal (Noise and Vibration Control):** Will likely discuss particle velocity in the context of wave propagation in ducts, a common scenario in industrial noise control. The concept of impedance is central here.
*   **Barron (Industrial Noise Control and Acoustics):** Focuses on practical applications. Particle velocity is essential for understanding how noise is generated by machinery and how it propagates through industrial environments.

---

### 5. Measurement of Particle Velocity

Direct measurement of particle velocity is more complex than pressure measurement.

*   **Hot-Wire Anemometers:** Used to measure air velocity, these can be adapted for acoustic particle velocity measurements, especially at lower frequencies. They rely on the cooling effect of the airflow on a heated element.
*   **Laser Doppler Velocimetry (LDV):** A non-intrusive optical technique that measures the velocity of particles (either naturally present or seeded) in a fluid by analyzing the Doppler shift of laser light scattered by these particles. This is a very accurate method.
*   **Acoustic Intensity Probes:** While primarily measuring acoustic intensity (the rate of sound energy flow), these probes often use a pair of closely spaced microphones to determine the pressure gradient, which is directly related to particle velocity.

**Learning Outcomes Covered:**

*   **CO3 (K2):** While this outcome focuses on hearing and regulations, understanding noise measuring devices is part of it. Particle velocity meters are specialized noise measuring devices.

---

### 6. Significance of Particle Velocity in Noise Control

Understanding particle velocity is crucial for effective noise control:

*   **Source Characterization:** The velocity of vibrating surfaces is a primary indicator of noise generation potential.
*   **Transmission Path Analysis:** Knowing particle velocity helps in understanding how sound energy is transported through a medium.
*   **Absorber and Muffler Design:** The design of acoustic treatments like absorbers and mufflers often relies on controlling particle motion and its interaction with the material. For instance, porous absorbers work by converting the kinetic energy of oscillating particles into heat.
*   **Vibration Isolation:** Reducing the velocity of vibrating components at the source can significantly reduce radiated sound power.

**Learning Outcomes Covered:**

*   **CO4 (K2):** Explaining various noise reducing measures often involves understanding how they impact particle velocity. For example, adding mass to a vibrating surface reduces its velocity for a given force.

---

### 7. Key Points to Remember

*   **Particle velocity is the velocity of the medium's particles, not the wave itself.**
*   In longitudinal waves (sound in fluids), particle velocity is **parallel** to the direction of wave propagation.
*   Particle velocity is directly proportional to acoustic pressure and inversely proportional to the medium's characteristic impedance ($v = p / (\rho_0 c)$).
*   Particle velocity is the time derivative of particle displacement.
*   Direct measurement of particle velocity is more challenging than pressure measurement.
*   Understanding particle velocity is fundamental to analyzing sound generation, propagation, and designing noise control solutions.

---

### 8. Practice Questions and Exercises

**Question 1 (CO1, K2):**
Define particle velocity and differentiate it from wave velocity.

**Answer:**
Particle velocity is the instantaneous velocity of the individual particles of the medium through which a sound wave is traveling. Wave velocity (or speed of sound) is the velocity at which the sound wave propagates through the medium. The particle velocity is typically much smaller than the wave velocity.

**Question 2 (CO1, K2):**
What is the characteristic impedance of a medium, and what are its units?

**Answer:**
The characteristic impedance ($Z_0$) of a medium is the ratio of acoustic pressure to particle velocity in a plane wave. It is an intrinsic property of the medium and is calculated as the product of the medium's density ($\rho_0$) and the speed of sound ($c$). Its units are Pascal-seconds per meter (Pa·s/m) or Rayls.

**Question 3 (CO1, CO2, K2/K4):**
If a sound wave in air produces an acoustic pressure of 5 Pa, what is the approximate particle velocity? (Assume air density $\rho_0 = 1.21$ kg/m³ and speed of sound $c = 343$ m/s).

**Answer:**
Characteristic impedance of air $Z_0 = \rho_0 c = 1.21 \text{ kg/m³} \times 343 \text{ m/s} \approx 415 \text{ Pa·s/m}$.
Particle velocity $v = \frac{p}{Z_0} = \frac{5 \text{ Pa}}{415 \text{ Pa·s/m}} \approx 0.012 \text{ m/s}$ or 12 mm/s.

**Question 4 (CO4, K2):**
How does understanding particle velocity help in the design of acoustic absorbers?

**Answer:**
Acoustic absorbers, particularly porous materials, work by converting the kinetic energy of oscillating particles into heat through viscous friction within the pores. Knowing the particle velocity helps in optimizing the material's structure and thickness to maximize this energy dissipation at the frequencies of interest.

**Question 5 (CO2, K4):**
Explain why particle velocity is essential for analyzing sound transmission through a duct.

**Answer:**
Analyzing sound transmission through a duct involves understanding how the acoustic energy propagates. Particle velocity, along with acoustic pressure, defines the acoustic field. The behavior of particle velocity at duct boundaries (e.g., walls, openings) and in the presence of impedance elements (like mufflers) is critical for predicting transmission loss and the overall acoustic performance of the duct system.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
