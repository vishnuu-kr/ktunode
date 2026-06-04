---
title: "Experiment on Free and forced vibration analysis"
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 2: Experiment on Whirling of shaft"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463710"
status: "completed"
scrapedAt: "2026-05-20T18:01:34.899Z"
---
Sure, here are comprehensive study notes for the topic "Experiment on Free and Forced Vibration Analysis" from Module 2: Experiment on Whirling of Shaft in MECHANICAL ENGINEERING LAB.

## Mechanical Engineering Lab: Module 2 - Experiment on Whirling of Shaft

### Topic: Experiment on Free and Forced Vibration Analysis

This experiment focuses on understanding and analyzing the vibrational behavior of mechanical systems, particularly in the context of rotating shafts. We will explore both free vibrations (when a system oscillates without external force) and forced vibrations (when a system is subjected to periodic external forces).

---

### 1. Introduction to Vibrations

Vibrations are oscillations of a system about an equilibrium position. In mechanical systems, vibrations can be undesirable, leading to fatigue, noise, and reduced efficiency. Understanding and controlling vibrations is crucial in mechanical design.

**Key Concepts:**

*   **Oscillation:** A repetitive variation, typically in time, of some measure about a central value (the average value).
*   **Equilibrium Position:** The position where the net force on the system is zero.
*   **Displacement (x or y):** The distance of the oscillating object from its equilibrium position.
*   **Amplitude (A):** The maximum displacement from the equilibrium position.
*   **Period (T):** The time taken for one complete oscillation.
*   **Frequency (f):** The number of complete oscillations per unit time (f = 1/T). Measured in Hertz (Hz).
*   **Angular Frequency (ω):** The rate of change of phase angle, related to frequency by ω = 2πf.

**Relevance to Whirling of Shafts:**

Shafts, especially long and slender ones, are susceptible to vibrations. When a shaft rotates, imbalances can induce centrifugal forces that lead to lateral deflections. At certain rotational speeds, known as critical or whirling speeds, these deflections can become very large, leading to catastrophic failure. This experiment helps us understand the factors influencing these critical speeds.

---

### 2. Free Vibration Analysis

Free vibration occurs when a system is displaced from its equilibrium position and then allowed to oscillate freely without any external driving force. The characteristics of free vibration are determined by the system's physical properties: mass, stiffness, and damping.

**Key Concepts:**

*   **Natural Frequency (ωn):** The frequency at which a system oscillates when disturbed from its equilibrium position and allowed to vibrate freely. It depends on the mass and stiffness of the system.
*   **Undamped Free Vibration:** In an ideal system with no energy dissipation (damping), the oscillations continue indefinitely with constant amplitude and frequency equal to the natural frequency.
*   **Damped Free Vibration:** In real systems, energy is dissipated due to friction and air resistance. This causes the amplitude of oscillations to decrease over time.
    *   **Underdamped:** The system oscillates with decreasing amplitude.
    *   **Critically damped:** The system returns to equilibrium as quickly as possible without oscillating.
    *   **Overdamped:** The system returns to equilibrium slowly without oscillating.

**Mathematical Representation (Single Degree of Freedom System):**

For a simple system with mass ($m$) and stiffness ($k$), the equation of motion for free vibration is:
$m \ddot{x} + kx = 0$

The natural frequency (undamped) is given by:
$\omega_n = \sqrt{\frac{k}{m}}$

**In the context of whirling shafts:**

The natural frequency of a shaft's transverse vibration is a critical parameter. If the rotational speed of the shaft matches or is close to its natural frequency, resonance can occur, leading to large amplitudes of vibration.

---

### 3. Forced Vibration Analysis

Forced vibration occurs when an external periodic force is applied to a system that is already vibrating. The system will oscillate at the frequency of the applied force.

**Key Concepts:**

*   **Forcing Frequency (ω):** The frequency of the external periodic force applied to the system.
*   **Response Frequency:** The frequency at which the system oscillates due to the forced vibration. In steady-state, this is equal to the forcing frequency.
*   **Amplitude of Forced Vibration:** The amplitude of the system's vibration depends on the forcing frequency, natural frequency, damping, and the magnitude of the forcing function.
*   **Resonance:** A phenomenon that occurs when the forcing frequency ($\omega$) is equal to or very close to the natural frequency ($\omega_n$) of the system. This leads to a large increase in the amplitude of vibration, even with small forcing magnitudes.
*   **Phase Lag:** The difference in phase between the applied force and the system's response. This angle depends on the forcing frequency, natural frequency, and damping.

**Mathematical Representation (Single Degree of Freedom System with Damping):**

For a system with mass ($m$), stiffness ($k$), damping coefficient ($c$), and subjected to a harmonic force $F_0 \cos(\omega t)$:
$m \ddot{x} + c \dot{x} + kx = F_0 \cos(\omega t)$

The amplitude of the steady-state forced vibration ($X$) is given by:
$X = \frac{F_0/k}{\sqrt{(1 - (\omega/\omega_n)^2)^2 + (2 \zeta (\omega/\omega_n))^2}}$
where:
*   $\omega_n = \sqrt{k/m}$ is the natural frequency.
*   $\zeta = c / (2\sqrt{mk})$ is the damping ratio.

**At Resonance ($\omega = \omega_n$):**
$X_{resonance} = \frac{F_0/k}{\sqrt{(0)^2 + (2 \zeta)^2}} = \frac{F_0/k}{2 \zeta}$
This shows that amplitude at resonance is inversely proportional to damping.

**In the context of whirling shafts:**

An unbalanced rotating shaft acts as a source of forced vibration. The imbalance creates a centrifugal force that varies with the shaft's rotation. This force acts as the exciting force, and the shaft's natural frequency determines its response. Critical speeds are the rotational speeds where the forcing frequency (shaft's rotational speed) approaches the shaft's natural frequency.

---

### 4. Experimental Setup and Procedure (Typical)

The experimental setup for a whirling shaft typically includes:

*   **Shaft:** A shaft of known length, diameter, and material properties.
*   **Bearings:** Support the shaft, allowing it to rotate. The type of bearings (e.g., journal bearings, ball bearings) influences damping.
*   **Motor and Drive System:** To rotate the shaft at variable speeds.
*   **Imbalance Mass:** Small weights that can be attached to the shaft at specific radii to create known imbalances.
*   **Vibration Pickup (Accelerometer or Proximity Probe):** To measure the lateral displacement or acceleration of the shaft.
*   **Tachometer:** To measure the rotational speed of the shaft.
*   **Data Acquisition System:** To record vibration signals and rotational speed.
*   **Stroboscope (Optional):** To visualize shaft behavior at different speeds.

**Typical Procedure:**

1.  **Initial Setup:**
    *   Mount the shaft in the bearings.
    *   Connect the motor and drive system.
    *   Attach the vibration pickup and tachometer.
    *   Ensure the shaft is balanced initially (as much as possible).

2.  **Free Vibration (Impulsive Excitation):**
    *   Displace the shaft slightly from its equilibrium position and release it.
    *   Record the subsequent vibrations using the pickup.
    *   Analyze the recorded data to determine the natural frequency (e.g., by Fast Fourier Transform - FFT, or by observing the decay rate).

3.  **Forced Vibration (Rotating Imbalance):**
    *   Start rotating the shaft at a low speed.
    *   Gradually increase the speed of rotation.
    *   At each speed, record the vibration amplitude and the rotational speed.
    *   Continue increasing the speed until significant vibration amplitudes are observed, and then further.
    *   **Crucially, note the speeds at which the vibration amplitude is maximum.** These correspond to the critical (whirling) speeds.

4.  **Varying Imbalance (Optional):**
    *   Add a known imbalance mass at a known radius.
    *   Repeat step 3. Observe how the critical speeds and vibration amplitudes change.

5.  **Varying Shaft Parameters (Optional):**
    *   If possible, repeat the experiment with shafts of different lengths, diameters, or masses to understand their effect on critical speeds.

---

### 5. Data Analysis and Interpretation

**1. Determining Natural Frequency (from Free Vibration):**

*   The recorded vibration signal from free vibration will typically be a decaying sinusoid.
*   **Time Domain Analysis:** Measure the time between successive peaks to find the period ($T$) and calculate the natural frequency ($f_n = 1/T$).
*   **Frequency Domain Analysis (FFT):** Apply an FFT to the recorded signal. The dominant frequency peak in the spectrum will correspond to the natural frequency.

**2. Determining Critical Speeds (from Forced Vibration):**

*   Plot the vibration amplitude (or displacement, velocity, or acceleration) against the shaft's rotational speed.
*   The speeds at which the amplitude peaks occur are the critical speeds.
*   These speeds are often referred to as whirling speeds when dealing with rotating shafts.

**3. Comparing Experimental and Theoretical Critical Speeds:**

*   **Theoretical Critical Speed Calculation:**
    *   The critical speed ($\omega_c$) of a shaft is related to its natural frequency.
    *   For a simply supported shaft with a concentrated mass ($m$) and negligible shaft mass, the natural frequency is:
        $\omega_n = \sqrt{\frac{k}{m}}$
    *   For a continuous shaft with distributed mass, more complex calculations are needed, often involving beam deflection formulas.
    *   **Rayleigh's Method (Energy Method):** A common approach to estimate the fundamental critical speed. It equates the maximum potential energy stored in the shaft due to bending to the maximum kinetic energy of the shaft's mass.
        $\omega_c = \sqrt{\frac{EI}{\int y^2 dm}}$
        where:
        *   $E$ is the Young's modulus of the shaft material.
        *   $I$ is the area moment of inertia of the shaft's cross-section.
        *   $y$ is the deflection of the shaft at mass element $dm$.
        *   For simplified cases (e.g., simply supported beam with uniform cross-section), analytical solutions exist. For a simply supported shaft of length $L$ and negligible shaft mass, the fundamental critical speed is approximately:
            $\omega_{cr} = \sqrt{\frac{48EI}{mL^3}}$ (for a central concentrated mass $m$)
            Or in terms of rotational speed (RPM):
            $N_{cr} = \frac{60}{2\pi} \sqrt{\frac{48EI}{mL^3}}$
    *   **Gifford's Formula (for a uniformly distributed mass shaft):**
        For a simply supported shaft of length $L$, mass per unit length $\rho A$, Young's modulus $E$, and moment of inertia $I$:
        $\omega_{cr} = \frac{\pi^2 EI}{L^2 \sqrt{m_{eff}}}$ where $m_{eff}$ is an effective mass.
        A more commonly cited approximate formula for the first critical speed of a uniform shaft with negligible mass supported at its ends is related to its fundamental natural frequency. The exact formula depends on the end conditions and how the mass is distributed.
        For a simply supported shaft of length $L$, the fundamental natural frequency in Hertz is often approximated by:
        $f_n \approx \frac{\pi}{2} \sqrt{\frac{EI}{mL^3}}$ (where $m$ is the total mass)
        The corresponding critical speed in RPM ($N_{cr}$) would be:
        $N_{cr} \approx \frac{60}{2\pi} \times \frac{\pi}{2} \sqrt{\frac{EI}{mL^3}} = 15 \sqrt{\frac{EI}{mL^3}}$ (This is a simplified approximation)

*   **Correction for Bearing Stiffness:** The actual critical speeds might differ from theoretical calculations due to the stiffness and damping of the bearings.

**4. Effect of Damping:**

*   Observe how damping affects the amplitude of vibration, especially at resonance. Higher damping leads to lower peak amplitudes at critical speeds.

---

### 6. Learning Outcomes Alignment and Course Outcomes

This experiment directly addresses several learning and course outcomes:

*   **Learning Outcome 1: Choose appropriate instruments:** The experiment requires selecting appropriate vibration pickups, tachometers, and data acquisition systems.
*   **Learning Outcome 2: Determine dimensional and form accuracies:** While not directly measuring component accuracy, understanding shaft geometry (length, diameter) is crucial for theoretical calculations of critical speeds.
*   **Learning Outcome 3: Develop knowledge of designing and analyzing mechanisms:** Analyzing the whirling behavior of a shaft is a core aspect of understanding the dynamics of rotating machinery. This informs the design to avoid critical speeds in operation or to utilize them purposefully.
*   **Learning Outcome 4: Demonstrate functions and control of devices:** Understanding vibration analysis is essential for designing control systems to mitigate or suppress unwanted vibrations in industrial automation.

**Course Outcomes Addressed:**

*   **CO1: Choose the appropriate instruments for different measurements (K3):** Students must select suitable instruments for measuring vibration and rotational speed.
*   **CO2: Determine dimensional and form accuracies of various components (K3):** Understanding shaft dimensions is necessary for theoretical analysis.
*   **CO3: Develop knowledge of designing and analyzing mechanisms in machinery (K3):** This experiment is fundamental to analyzing the dynamic behavior of rotating machinery, including shafts, and designing them to avoid resonance.
*   **CO4: Demonstrate the functions and control of various devices used for industrial automation (K3):** Vibration analysis is a key input for designing vibration control systems in automated machinery.

---

### 7. Practice Questions and Answers

**Question 1:** Define natural frequency and critical speed in the context of a rotating shaft.

**Answer:**
*   **Natural Frequency:** The frequency at which a shaft would oscillate if disturbed and allowed to vibrate freely without any external force or rotation. It's an inherent property of the shaft system (mass and stiffness).
*   **Critical Speed:** The rotational speed of a shaft at which resonance occurs, leading to excessive vibration amplitudes. It corresponds to the rotational speed matching one of the shaft's natural frequencies.

**Question 2:** If a shaft has a natural frequency of 50 Hz, what are its critical speeds in RPM?

**Answer:**
A critical speed occurs when the forcing frequency (rotational speed) matches the natural frequency.
*   Natural frequency ($f_n$) = 50 Hz
*   Rotational speed (f) = 50 revolutions per second
*   Rotational speed in RPM = 50 rev/sec * 60 sec/min = 3000 RPM
Therefore, 3000 RPM is a critical speed for this shaft.

**Question 3:** How does damping affect the amplitude of vibration at resonance?

**Answer:** Damping reduces the amplitude of vibration at resonance. In the formula for the amplitude of forced vibration, the term with damping in the denominator increases when $\omega = \omega_n$, thus decreasing the amplitude. A higher damping ratio ($\zeta$) leads to a lower peak amplitude at resonance.

**Question 4:** What are the potential consequences of operating a shaft at its critical speed?

**Answer:** Operating a shaft at or near its critical speed can lead to:
*   Excessively large vibration amplitudes.
*   Increased stress on the shaft and bearings.
*   Noise generation.
*   Fatigue failure of the shaft.
*   Damage to surrounding components.
*   Potential for catastrophic failure.

**Question 5:** A simply supported shaft of length $L = 1.0$ m has an effective mass $m = 2.0$ kg. If its Young's modulus $E = 200$ GPa and its moment of inertia $I = 1 \times 10^{-6}$ m$^4$, calculate its approximate fundamental critical speed in RPM. (Use the simplified formula $N_{cr} \approx 15 \sqrt{\frac{EI}{mL^3}}$).

**Answer:**
Given:
$L = 1.0$ m
$m = 2.0$ kg
$E = 200 \times 10^9$ Pa (200 GPa)
$I = 1 \times 10^{-6}$ m$^4$

Using the formula:
$N_{cr} \approx 15 \sqrt{\frac{EI}{mL^3}}$
$N_{cr} \approx 15 \sqrt{\frac{(200 \times 10^9 \, \text{Pa}) \times (1 \times 10^{-6} \, \text{m}^4)}{(2.0 \, \text{kg}) \times (1.0 \, \text{m})^3}}$
$N_{cr} \approx 15 \sqrt{\frac{200 \times 10^3}{2.0}}$
$N_{cr} \approx 15 \sqrt{100 \times 10^3}$
$N_{cr} \approx 15 \times \sqrt{100000}$
$N_{cr} \approx 15 \times 316.23$
$N_{cr} \approx 4743.45$ RPM

Therefore, the approximate fundamental critical speed is **4743.45 RPM**.

---

### 8. Important Points to Remember

*   **Critical speeds are rotational speeds where resonance occurs.**
*   **Natural frequency is an inherent property; critical speed is dependent on rotation.**
*   **Imbalance in rotating shafts is a common cause of forced vibration.**
*   **Damping is crucial for limiting vibration amplitudes, especially at resonance.**
*   **Theoretical calculations of critical speeds provide estimates; experimental validation is essential.**
*   **Understanding critical speeds is vital for designing safe and efficient rotating machinery.**
*   **Different shaft configurations (end conditions, support types) will have different critical speed formulas.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 9. References

*   **Metrology for Engineers** by Shotbolt C.R. and Gayler J.F.W (ELBS, London, ): Provides foundational understanding of measurements and their precision, which is relevant for accurate data acquisition in experiments.
*   **Practical Engineering Metrology** by Sharp K.W.B. and Hume Sir Isaac (Pitman and sons Ltd, London, ): Similar to Shotbolt, offers insights into measurement techniques for mechanical components.
*   **Kinematics and Dynamics of Machinery** by C.E.Wilson, P. Sadler (Pearson Education, 2005): This text is highly relevant as it covers the principles of dynamics, including vibrations and rotating machinery, providing theoretical background for whirling phenomena.
*   **Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering** by W.Bolton (Person Education Limited, New Delhi, 2007): While focused on mechatronics, it provides context on how electrical and electronic systems are integrated with mechanical ones for measurement and control, relevant for data acquisition and potential vibration mitigation strategies.
*   **Engineering Measurements** by Collett, C.V. and Hope, A.D (Second edition, ELBS/Longman, ): Further reinforces the importance of accurate measurements in experimental physics and engineering.
*   **Machines and Mechanisms Applied Kinematic Analysis** by D.H.Myskza (Pearson Education, 2013): Offers insights into the kinematic and dynamic analysis of machinery, which is directly applicable to understanding the motion and forces involved in whirling.
*   **Mechatronics: Integrated Mechanical Electronic Systems** by K.P.Ramachandran, G.K.Vijayaraghavan, M.S.Balasundaram (Wiley India Pvt. Ltd., New Delhi, 2008): Again, highlights the integration of mechanical and electronic systems, crucial for modern experimental setups and control.

---