---
title: "Estimation of modulus of rigidity of steel and brass / copper materials utilizing the principles of torsional vibrations – Torsion Pendulum."
subject: "MATERIALS TESTING LAB"
module: "Module 5: Estimation of modulus of rigidity of steel and brass / copper materials utilizing the principles of torsional vibrations – Torsion Pendulum."
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810d09"
status: "completed"
scrapedAt: "2026-05-20T18:45:42.641Z"
---
# MATERIALS TESTING LAB: Module 5 - Estimation of Modulus of Rigidity using Torsion Pendulum

This module focuses on experimentally determining the **Modulus of Rigidity (G)** for metallic materials like steel, brass, and copper, using the principle of torsional vibrations. We will employ a **Torsion Pendulum** for this purpose.

---

## 1. Introduction to Torsion and Modulus of Rigidity

### 1.1 What is Torsion?

*   **Definition:** Torsion is a type of deformation where an object is twisted or spun around an axis. This occurs when a twisting force, known as a **torque**, is applied.
*   **Torque (τ):** The moment of a force that tends to cause rotation. It's calculated as the product of the force and the perpendicular distance from the axis of rotation to the line of action of the force (τ = F × r).

### 1.2 Shear Stress and Shear Strain

*   **Shear Stress (τ):** When a torque is applied to a cylindrical rod, the material experiences stress acting parallel to the surface. This is shear stress, defined as the applied torque per unit of polar moment of inertia of the cross-section.
    *   Formula: $\tau = \frac{T}{J}$
    *   Where:
        *   $\tau$ is the shear stress (N/m² or Pa)
        *   $T$ is the applied torque (Nm)
        *   $J$ is the polar moment of inertia of the cross-section (m⁴)
*   **Shear Strain (γ):** The angular deformation that occurs due to shear stress. It's the angle of twist per unit length.
    *   Formula: $\gamma = \frac{\theta L}{L} = \frac{\theta}{L}$
    *   Where:
        *   $\gamma$ is the shear strain (dimensionless, usually in radians)
        *   $\theta$ is the total angle of twist (radians)
        *   $L$ is the length of the specimen (m)

### 1.3 Modulus of Rigidity (G)

*   **Definition:** The Modulus of Rigidity, also known as the shear modulus, is a material property that describes its resistance to shear deformation. It's the ratio of shear stress to shear strain within the elastic limit.
*   **Hooke's Law for Shear:** $G = \frac{\text{Shear Stress}}{\text{Shear Strain}} = \frac{\tau}{\gamma}$
*   **Relationship with Torque:** For a solid circular shaft under torsion, the shear stress is maximum at the outer surface and zero at the center. The angle of twist is related to the applied torque, material properties, and specimen dimensions by the following formula:
    *   $\theta = \frac{TL}{JG}$
*   **Rearranging for G:** We can express the Modulus of Rigidity as:
    *   $G = \frac{TL}{J\theta}$

### 1.4 Polar Moment of Inertia (J) for a Circular Cross-Section

*   **Definition:** The polar moment of inertia is a geometric property that represents the resistance of a cross-section to torsion. For a solid circular cross-section, it's calculated based on the radius or diameter.
*   **Formula (in terms of radius 'r'):** $J = \frac{\pi r^4}{2}$
*   **Formula (in terms of diameter 'D'):** Since $r = D/2$,
    *   $J = \frac{\pi (D/2)^4}{2} = \frac{\pi D^4}{32}$

---

## 2. The Torsion Pendulum

### 2.1 Principle of Operation

*   The torsion pendulum is an experimental setup designed to utilize torsional vibrations to determine material properties.
*   It consists of a disc or mass suspended by a wire or rod.
*   When the disc is twisted by an external torque and then released, it oscillates back and forth due to the restoring torque provided by the wire.
*   The period of these oscillations is dependent on the inertia of the disc and the torsional rigidity of the wire.

### 2.2 Components of a Torsion Pendulum

1.  **Suspension Wire/Rod:** The material whose modulus of rigidity is to be determined.
2.  **Disc/Mass:** A body of known moment of inertia, usually a circular disc, attached to the lower end of the wire.
3.  **Rigid Support:** To hold the upper end of the wire.
4.  **Scale and Pointer/Pointer System:** To measure the angle of twist and observe oscillations.
5.  **Timer/Stopwatch:** To measure the time period of oscillations.

### 2.3 Derivation of the Period of Oscillation

*   Consider a wire of length $L$ and radius $r$ (or diameter $D$) made of a material with modulus of rigidity $G$.
*   A disc of moment of inertia $I$ is attached to the lower end.
*   When the disc is twisted by an angle $\theta$ from its equilibrium position, the wire experiences a restoring torque $T$.
*   The relationship between torque and angle of twist is given by:
    *   $T = - \frac{JG\theta}{L}$ (The negative sign indicates that the restoring torque is opposite to the direction of twist).
*   From Newton's second law for rotational motion, the applied torque is equal to the moment of inertia times angular acceleration ($\alpha$):
    *   $T = I \alpha$
*   Equating the two expressions for torque:
    *   $I \alpha = - \frac{JG\theta}{L}$
*   Angular acceleration is the second derivative of angular displacement with respect to time: $\alpha = \frac{d^2\theta}{dt^2}$
*   Substituting this into the equation:
    *   $I \frac{d^2\theta}{dt^2} = - \frac{JG\theta}{L}$
*   Rearranging into the standard form of a second-order linear homogeneous differential equation for Simple Harmonic Motion (SHM):
    *   $\frac{d^2\theta}{dt^2} + \left(\frac{JG}{IL}\right) \theta = 0$
*   Comparing this with the standard SHM equation $\frac{d^2x}{dt^2} + \omega^2 x = 0$, where $\omega$ is the angular frequency, we have:
    *   $\omega^2 = \frac{JG}{IL}$
    *   $\omega = \sqrt{\frac{JG}{IL}}$
*   The period of oscillation $P$ is related to the angular frequency by $P = \frac{2\pi}{\omega}$.
*   Therefore, the period of oscillation is:
    *   $P = 2\pi \sqrt{\frac{IL}{JG}}$

---

## 3. Experimental Procedure and Calculations

### 3.1 Learning Outcome 1: Perform the experiment to determine the modulus of rigidity.

**Objective:** To determine the period of oscillation of the torsion pendulum for a given material wire.

**Materials:**

*   Torsion pendulum apparatus
*   Specimen wires of Steel, Brass, and Copper (of known length $L$ and diameter $D$)
*   Circular disc (known mass and radius/diameter)
*   Stopwatch
*   Vernier calipers (to measure wire diameter)
*   Plumb bob and scale (optional, for initial setup)

**Procedure:**

1.  **Setup:**
    *   Securely fix the suspension wire at the rigid support.
    *   Attach the circular disc to the lower end of the wire. Ensure the wire is vertical and the disc is horizontal.
    *   Ensure the disc is free to rotate without obstruction.
    *   Set up a scale and pointer system to measure the angular displacement of the disc.

2.  **Measurement of Dimensions:**
    *   Measure the length ($L$) of the suspension wire accurately.
    *   Using Vernier calipers, measure the diameter ($D$) of the wire at multiple points and calculate the average diameter. This is crucial for calculating the polar moment of inertia.

3.  **Measurement of Moment of Inertia (I):**
    *   The moment of inertia of the disc about its central axis can be calculated using its mass ($M$) and radius ($R$) or diameter ($D_{disc}$):
        *   $I_{disc} = \frac{1}{2} M R^2 = \frac{1}{16} M D_{disc}^2$
    *   **Important:** If additional masses are to be added to the disc, their moment of inertia must also be calculated and added. For this specific experiment, we assume the disc's moment of inertia is known or calculated beforehand.

4.  **Initiating Oscillations:**
    *   Gently twist the disc through a small angle (typically 5-10 degrees) from its equilibrium position.
    *   Release the disc slowly and allow it to oscillate.
    *   Ensure the oscillations are torsional and in the horizontal plane.

5.  **Measuring the Period of Oscillation (P):**
    *   Start the stopwatch when the disc passes through the equilibrium position in one direction.
    *   Count a significant number of complete oscillations (e.g., 10 or 20 oscillations) to minimize timing errors.
    *   Stop the stopwatch when the disc completes the counted number of oscillations and passes through the equilibrium position in the same direction.
    *   Record the total time taken for these oscillations.
    *   Calculate the time period ($P$) by dividing the total time by the number of oscillations.
    *   Repeat this measurement several times (at least 3-5 times) for the same wire to get an average period.

6.  **Repeat for Other Materials:**
    *   Replace the wire with one made of a different material (brass, copper).
    *   Repeat steps 1-5 for each material.

### 3.2 Learning Outcome 2: Calculate the modulus of rigidity of the given materials.

**Calculations:**

1.  **Calculate Polar Moment of Inertia (J):**
    *   Using the measured average diameter ($D$) of the wire:
        *   $J = \frac{\pi D^4}{32}$ (Ensure $D$ is in meters)

2.  **Calculate the Period of Oscillation (P):**
    *   Average the recorded times for $n$ oscillations: $P = \frac{\text{Total Time}}{n}$

3.  **Calculate the Modulus of Rigidity (G):**
    *   Rearrange the period formula to solve for $G$:
        *   $P = 2\pi \sqrt{\frac{IL}{JG}}$
        *   $P^2 = 4\pi^2 \frac{IL}{JG}$
        *   $JG = \frac{4\pi^2 IL}{P^2}$
        *   $G = \frac{4\pi^2 IL}{JP^2}$
    *   Substitute the values of $I$, $L$, $J$, and $P$ (in SI units) into the formula to get $G$.

### 3.3 Learning Outcome 3: Compare the calculated modulus of rigidity values with standard values.

*   Once you have calculated the values of $G$ for steel, brass, and copper, compare them with the accepted standard values for these materials.
*   **Standard Values (approximate):**
    *   Steel: $75 - 85 \times 10^9$ Pa (or $75 - 85$ GPa)
    *   Brass: $35 - 45 \times 10^9$ Pa (or $35 - 45$ GPa)
    *   Copper: $40 - 50 \times 10^9$ Pa (or $40 - 50$ GPa)
*   Calculate the percentage error for each material:
    *   Percentage Error $= \left| \frac{\text{Experimental Value} - \text{Standard Value}}{\text{Standard Value}} \right| \times 100\%$

---

## 4. Key Concepts and Definitions Recap

*   **Torsion:** Twisting of an object by a torque.
*   **Torque (T):** Twisting force (Nm).
*   **Shear Stress (τ):** Stress acting parallel to a surface (Pa).
*   **Shear Strain (γ):** Angular deformation (radians).
*   **Modulus of Rigidity (G):** Ratio of shear stress to shear strain, a measure of stiffness in torsion (Pa).
*   **Polar Moment of Inertia (J):** Geometric property resisting torsion (m⁴). For a solid circle: $J = \frac{\pi D^4}{32}$.
*   **Torsion Pendulum:** An apparatus using torsional oscillations to measure $G$.
*   **Period of Oscillation (P):** Time for one complete oscillation (s).
*   **Moment of Inertia (I):** Resistance to rotational acceleration (kg m²).

---

## 5. Practice Questions and Exercises

**Scenario:** A steel wire of length $L = 0.5$ m and diameter $D = 1.0 \times 10^{-3}$ m is used in a torsion pendulum. A circular disc with a mass $M = 1.0$ kg and radius $R = 0.05$ m is attached. The moment of inertia of the disc is $I = 0.00125$ kg m². When the experiment is performed, 10 oscillations are observed to take $45.0$ seconds.

**Question 1:** Calculate the polar moment of inertia ($J$) of the steel wire.
**Question 2:** Calculate the time period ($P$) of oscillation.
**Question 3:** Calculate the modulus of rigidity ($G$) of the steel wire.
**Question 4:** If the standard value for steel is $80 \times 10^9$ Pa, calculate the percentage error of your result.

---

**Answers:**

**Answer 1: Calculation of Polar Moment of Inertia (J)**
*   Diameter $D = 1.0 \times 10^{-3}$ m
*   $J = \frac{\pi D^4}{32} = \frac{\pi (1.0 \times 10^{-3} \text{ m})^4}{32}$
*   $J = \frac{\pi \times 1.0 \times 10^{-12} \text{ m}^4}{32}$
*   $J \approx \frac{3.14159 \times 10^{-12}}{32} \text{ m}^4$
*   $J \approx 0.09817 \times 10^{-12} \text{ m}^4 = 9.817 \times 10^{-14} \text{ m}^4$

**Answer 2: Calculation of Time Period (P)**
*   Total time for 10 oscillations = 45.0 s
*   $P = \frac{\text{Total Time}}{n} = \frac{45.0 \text{ s}}{10}$
*   $P = 4.5$ s

**Answer 3: Calculation of Modulus of Rigidity (G)**
*   $G = \frac{4\pi^2 IL}{JP^2}$
*   $I = 0.00125$ kg m²
*   $L = 0.5$ m
*   $J = 9.817 \times 10^{-14}$ m⁴
*   $P = 4.5$ s
*   $G = \frac{4 \times (3.14159)^2 \times (0.00125 \text{ kg m}^2) \times (0.5 \text{ m})}{(9.817 \times 10^{-14} \text{ m}^4) \times (4.5 \text{ s})^2}$
*   $G = \frac{4 \times 9.8696 \times 0.000625 \text{ kg m}^3}{9.817 \times 10^{-14} \times 20.25 \text{ m}^4 \text{ s}^2}$
*   $G = \frac{0.024674 \text{ kg m}^3}{198.77 \times 10^{-14} \text{ m}^4 \text{ s}^2}$
*   $G \approx 0.0001241 \times 10^{14} \frac{\text{kg}}{\text{m s}^2}$
*   $G \approx 1.241 \times 10^{10}$ Pa (Note: The units kg/(m s²) are equivalent to Pa)

*Let's recheck the calculation with more precise values:*
*   $I = \frac{1}{2} M R^2 = \frac{1}{2} \times 1.0 \times (0.05)^2 = \frac{1}{2} \times 1.0 \times 0.0025 = 0.00125$ kg m² (This is correct)
*   $J = \frac{\pi D^4}{32} = \frac{\pi (0.001)^4}{32} = \frac{\pi \times 10^{-12}}{32} \approx 9.817 \times 10^{-14}$ m⁴ (This is correct)

*Let's re-calculate G:*
*   $G = \frac{4 \times \pi^2 \times 0.00125 \times 0.5}{9.817 \times 10^{-14} \times (4.5)^2}$
*   $G = \frac{4 \times 9.8696 \times 0.00125 \times 0.5}{9.817 \times 10^{-14} \times 20.25}$
*   $G = \frac{0.024674}{1.9877 \times 10^{-12}}$
*   $G \approx 0.01241 \times 10^{12}$ Pa
*   $G \approx 1.241 \times 10^{10}$ Pa

**Hold on! There seems to be a discrepancy with expected values for steel. Let's double-check the formula and the problem setup.**

*   The formula $G = \frac{4\pi^2 IL}{JP^2}$ is correct.
*   The units seem correct.

**Possible reasons for a low value:**
1.  **Error in Disc Moment of Inertia:** The given $I$ value might be incorrect or not precisely measured.
2.  **Error in Wire Dimensions:** Diameter measurement is critical.
3.  **Timing Error:** The time for oscillations might be misread.
4.  **Instability of the setup:** If the setup isn't perfectly rigid or the wire isn't perfectly vertical.
5.  **Non-uniform wire:** The wire might not be uniform in diameter.

Let's assume the calculation itself is correct based on the given numbers. If the question intended a more realistic value, the given parameters would need to be adjusted. For a more typical steel result, $P$ would need to be smaller, or $I$, $L$ larger relative to $J$.

**Let's re-read the problem statement to ensure no misinterpretation.**
*   The problem statement and calculations seem to be followed correctly. The provided numbers might be for demonstration and not necessarily to yield a precise standard value.

**Let's recalculate with an assumption that the expected result for steel is around 80 GPa.**
*   If $G = 80 \times 10^9$ Pa, and $I=0.00125$, $L=0.5$, $J=9.817 \times 10^{-14}$
*   $P^2 = \frac{4\pi^2 IL}{JG} = \frac{4 \times (3.14159)^2 \times 0.00125 \times 0.5}{9.817 \times 10^{-14} \times 80 \times 10^9}$
*   $P^2 = \frac{0.024674}{7.8536 \times 10^{-3}} \approx 3.139$
*   $P \approx \sqrt{3.139} \approx 1.77$ seconds.
*   This suggests that if the material properties were standard, the period would be much shorter (around 1.77s), not 4.5s.

**So, the calculation is correct for the given data, but the data itself leads to a non-standard result for steel.**

**Answer 4: Percentage Error**
*   Experimental Value $\approx 1.241 \times 10^{10}$ Pa
*   Standard Value $= 80 \times 10^9$ Pa $= 8.0 \times 10^{10}$ Pa
*   Percentage Error $= \left| \frac{1.241 \times 10^{10} \text{ Pa} - 8.0 \times 10^{10} \text{ Pa}}{8.0 \times 10^{10} \text{ Pa}} \right| \times 100\%$
*   Percentage Error $= \left| \frac{-6.759 \times 10^{10}}{8.0 \times 10^{10}} \right| \times 100\%$
*   Percentage Error $\approx |-0.8449| \times 100\% \approx 84.5\%$

**(This indicates a significant deviation from the standard value, likely due to the input parameters chosen for the problem.)**

---

## 6. Important Points to Remember

*   **Small Angle Approximation:** The derivation of the SHM equation assumes that the angle of twist ($\theta$) is small, so $\sin(\theta) \approx \theta$. Ensure the initial twist is not too large.
*   **Uniformity:** The suspension wire should be uniform in diameter and material properties along its length for accurate results.
*   **Rigidity of Support:** The upper end of the wire must be rigidly fixed to prevent slipping or deformation at the support.
*   **Disc Stability:** The disc should be balanced and oscillate in a pure torsional manner, without any translational or bending motion.
*   **Accurate Measurements:** Precise measurement of the wire's diameter ($D$), length ($L$), the disc's moment of inertia ($I$), and the time period ($P$) are crucial for obtaining reliable results.
*   **SI Units:** Always ensure all measurements are converted to SI units (meters, kilograms, seconds) before plugging them into the formulas.
*   **Temperature Effects:** Modulus of rigidity can be affected by temperature. Conduct the experiment at a stable room temperature.
*   **Experimental Errors:** Be aware of potential sources of error, such as air resistance, damping, parallax error in timing, and inaccuracies in measuring dimensions. Repeat measurements and take averages to minimize these errors.

---
This set of notes provides a comprehensive understanding of estimating the modulus of rigidity using a torsion pendulum, covering theoretical principles, experimental procedures, calculations, and practical considerations.
