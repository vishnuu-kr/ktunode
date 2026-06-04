---
title: "Measurement of Numerical Aperture of an Optical fiber"
subject: "COMMUNICATION LAB II"
module: "Module 2: Setting up of Fiber optic Digital link."
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff0ba"
status: "completed"
scrapedAt: "2026-05-23T17:59:41.505Z"
---
# Communication Lab II: Module 2 - Setting up of Fiber Optic Digital Link

## Topic: Measurement of Numerical Aperture (NA) of an Optical Fiber

### Learning Outcomes:

*   Understand the concept of Numerical Aperture (NA) of an optical fiber.
*   Explain the theoretical basis for calculating NA.
*   Describe the experimental setup for measuring NA.
*   Perform the measurement of NA using a suitable experimental method.
*   Analyze the results of the NA measurement and compare them with theoretical values.
*   Understand the significance of NA in fiber optic communication systems.

### 1. Introduction to Numerical Aperture (NA)

Numerical Aperture (NA) is a dimensionless quantity that describes the light-gathering ability of an optical fiber. It defines the range of incident angles at which light can be coupled into the fiber and propagate through it via total internal reflection.

*   **Key Concept:** NA is a crucial parameter that determines the acceptance angle of the fiber and influences several performance characteristics, including signal bandwidth and coupling efficiency.

*   **Definition:** NA is defined as the sine of the acceptance angle ($\theta_a$).

    $$ NA = \sin(\theta_a) $$

*   **Relationship with Core and Cladding Refractive Indices:** NA can also be expressed in terms of the refractive indices of the fiber's core ($n_1$) and cladding ($n_2$).

    $$ NA = \sqrt{n_1^2 - n_2^2} $$

    *   **Explanation:** This formula arises from the condition for total internal reflection at the core-cladding interface. Light entering the fiber within the acceptance cone strikes the core-cladding boundary at an angle greater than the critical angle, leading to TIR and propagation.

*   **Significance in Fiber Optic Communications:**
    *   **Light Gathering Ability:** A higher NA means a larger acceptance angle, allowing more light to be coupled into the fiber from a given source. This is crucial for efficient signal transmission.
    *   **Bandwidth:** While a higher NA generally improves coupling, it can also lead to increased modal dispersion in multimode fibers, potentially limiting bandwidth.
    *   **Coupling Efficiency:** NA directly impacts how effectively light from a source (like an LED or laser) can be coupled into the fiber.

*   **Types of Fibers and NA:**
    *   **Step-Index Fiber:** Has a constant refractive index in the core and a sudden drop at the core-cladding interface. The NA calculation using the refractive indices is directly applicable.
    *   **Graded-Index Fiber:** The refractive index of the core gradually decreases from the center to the periphery. The NA varies across the core, and the effective NA is typically quoted.

### 2. Theoretical Basis for Calculating NA

As mentioned, the primary theoretical formulas for NA are:

*   $$ NA = \sin(\theta_a) $$
*   $$ NA = \sqrt{n_1^2 - n_2^2} $$

Where:
*   $\theta_a$ is the **acceptance angle**.
*   $n_1$ is the **refractive index of the fiber core**.
*   $n_2$ is the **refractive index of the fiber cladding**.

*   **Derivation of $NA = \sqrt{n_1^2 - n_2^2}$:**
    Consider a light ray entering the fiber at an angle $\theta_i$ with respect to the fiber axis. For the ray to be guided by total internal reflection, it must strike the core-cladding interface at an angle $\theta_r$ greater than or equal to the critical angle $\theta_c$.
    From Snell's Law at the fiber's end face:
    $$ n_{air} \sin(\theta_i) = n_1 \sin(\theta_r) $$
    Assuming $n_{air} = 1$, we get:
    $$ \sin(\theta_i) = n_1 \sin(\theta_r) $$
    The condition for total internal reflection is $\theta_r \ge \theta_c$. The critical angle is given by:
    $$ \sin(\theta_c) = \frac{n_2}{n_1} $$
    The maximum angle of incidence $\theta_a$ (acceptance angle) occurs when $\theta_r = \theta_c$. Thus:
    $$ \sin(\theta_a) = n_1 \sin(\theta_c) $$
    Substituting the expression for $\sin(\theta_c)$:
    $$ \sin(\theta_a) = n_1 \left(\frac{n_2}{n_1}\right) $$
    $$ \sin(\theta_a) = n_2 $$
    This is incorrect. Let's re-evaluate the incident angle. The maximum angle of incidence $\theta_a$ with respect to the axis is such that the refracted ray inside the core makes an angle $\theta_r$ with the normal at the core-cladding interface equal to the critical angle $\theta_c$.
    Consider the geometry: The angle between the fiber axis and the normal to the core-cladding interface is $90^\circ$. The refracted ray makes an angle $\theta_r$ with this normal. The incident ray makes an angle $\theta_i$ with the fiber axis. From the right triangle formed by the incident ray, the fiber axis, and the normal to the fiber end face:
    $$ \theta_{interface} = 90^\circ - \theta_r $$
    For total internal reflection, $\theta_r \ge \theta_c$. The maximum angle of incidence $\theta_a$ with respect to the fiber axis occurs when $\theta_r = \theta_c$.
    At the fiber end face, by Snell's law:
    $$ n_{air} \sin(\theta_a) = n_1 \sin(\theta_{r,max}) $$
    The condition for TIR is that the angle of incidence at the core-cladding boundary, $\theta_{inc,boundary}$, must be greater than or equal to the critical angle $\theta_c$.
    $$ \theta_{inc,boundary} \ge \theta_c $$
    The angle of incidence at the core-cladding boundary, $\theta_{inc,boundary}$, is related to the angle of refraction $\theta_r$ inside the core and the fiber geometry. If $\theta_r$ is the angle the ray makes with the axis inside the core, then the angle with the normal to the interface is $90^\circ - \theta_r$.
    The maximum $\theta_r$ inside the core is such that $\theta_r = \theta_c$.
    From Snell's law at the fiber end face:
    $$ n_{air} \sin(\theta_a) = n_1 \sin(\theta_r) $$
    For the maximum acceptance angle $\theta_a$, $\theta_r = \theta_c$.
    $$ \sin(\theta_a) = n_1 \sin(\theta_c) $$
    Using $\sin(\theta_c) = n_2/n_1$:
    $$ \sin(\theta_a) = n_1 \left(\frac{n_2}{n_1}\right) = n_2 $$
    This is still not leading to the correct formula. Let's revisit the geometry from standard textbooks like Keiser.

    *   **Revisiting Keiser (5th Ed., Chapter 2):**
        Consider a light ray entering the fiber at an angle $\theta_1$ with respect to the fiber axis. At the fiber end face, by Snell's law:
        $$ n_0 \sin(\theta_1) = n_1 \sin(\theta_2) $$
        Where $n_0$ is the refractive index of the external medium (e.g., air, $n_0 \approx 1$) and $n_1$ is the core refractive index.
        For the ray to propagate, it must undergo total internal reflection at the core-cladding interface. This occurs when the angle of incidence at the interface, $\theta_2$, is greater than or equal to the critical angle $\theta_c$. The critical angle is defined as:
        $$ \sin(\theta_c) = \frac{n_2}{n_1} $$
        where $n_2$ is the cladding refractive index.
        The maximum angle of incidence $\theta_{a}$ (which is the acceptance angle) occurs when $\theta_2 = \theta_c$. So, the condition for acceptance is $\theta_2 \le \theta_c$.
        $$ n_0 \sin(\theta_a) = n_1 \sin(\theta_c) $$
        Substituting $\sin(\theta_c) = n_2/n_1$:
        $$ n_0 \sin(\theta_a) = n_1 \left(\frac{n_2}{n_1}\right) $$
        $$ n_0 \sin(\theta_a) = n_2 $$
        If the external medium is air ($n_0=1$):
        $$ \sin(\theta_a) = n_2 $$
        This implies the acceptance angle is related to the cladding index, which is counter-intuitive. There must be a misunderstanding in how $\theta_1$ and $\theta_2$ are defined or how the geometry is applied.

    Let's reconsider the geometry: The angle of incidence *on the fiber axis* is $\theta_a$. The ray refracts into the core at an angle $\theta_r$ with respect to the fiber axis.
    Snell's Law at the fiber end face:
    $n_{air} \sin(\theta_a) = n_1 \sin(\theta_r)$
    The ray travels within the core and strikes the core-cladding interface. The angle of incidence at the interface, measured with respect to the normal to the interface, is $\alpha$. The angle of refraction inside the core relative to the fiber axis is $\theta_r$. The angle between the ray and the interface normal is $90^\circ - \theta_r$.
    For total internal reflection, $90^\circ - \theta_r \ge \theta_c$, where $\sin(\theta_c) = n_2/n_1$.
    This implies $\theta_r \le 90^\circ - \theta_c$.
    The maximum value of $\theta_r$ for propagation is when $90^\circ - \theta_r = \theta_c$, so $\theta_r = 90^\circ - \theta_c$.
    Substituting this into the Snell's law equation at the end face:
    $n_{air} \sin(\theta_a) = n_1 \sin(90^\circ - \theta_c)$
    Since $\sin(90^\circ - \theta_c) = \cos(\theta_c)$ and $\cos(\theta_c) = \sqrt{1 - \sin^2(\theta_c)} = \sqrt{1 - (n_2/n_1)^2}$:
    $n_{air} \sin(\theta_a) = n_1 \sqrt{1 - \left(\frac{n_2}{n_1}\right)^2}$
    $n_{air} \sin(\theta_a) = n_1 \sqrt{\frac{n_1^2 - n_2^2}{n_1^2}}$
    $n_{air} \sin(\theta_a) = n_1 \frac{\sqrt{n_1^2 - n_2^2}}{n_1}$
    $n_{air} \sin(\theta_a) = \sqrt{n_1^2 - n_2^2}$
    If $n_{air} = 1$, then:
    $$ \sin(\theta_a) = \sqrt{n_1^2 - n_2^2} $$
    This confirms the formula.

*   **Acceptance Cone:** The set of all possible incident angles that allow light to propagate within the fiber forms a cone, known as the **acceptance cone**. The angle $\theta_a$ is half the apex angle of this cone.

### 3. Experimental Setup for Measuring NA

The most common experimental method for measuring NA involves observing the far-field radiation pattern of the light emerging from the fiber. This is often referred to as the **cone of light method**.

*   **Principle:** Light is launched into the fiber, and the angular distribution of the light exiting the fiber is measured. The NA is related to the maximum angle of this emitted light cone.

*   **Components Required:**
    1.  **Optical Fiber Sample:** The fiber whose NA is to be measured.
    2.  **Light Source:** A stable light source, typically a laser diode or an LED. For multimode fibers, an LED is often preferred to avoid launching only the fundamental mode. For single-mode fibers, a laser is essential.
    3.  **Fiber Optic Connector/Cleaver:** To prepare the fiber ends for launching and receiving light. A clean, perpendicular end face is crucial.
    4.  **Microscope Objective (Optional but recommended):** To launch light efficiently into the fiber, especially for laser sources and smaller core fibers.
    5.  **Optical Power Meter:** To measure the intensity of the emitted light.
    6.  **Rotary Stage/Goniometer:** To accurately measure the angle of the power meter relative to the fiber axis.
    7.  **Dark Room/Enclosure:** To minimize ambient light interference and to project the radiation pattern onto a screen if visual observation is used.
    8.  **Screen (Optional):** To visualize the cone of light.

*   **Block Diagram of the Experimental Setup:**

    ```
                                     +-------------------+
                                     |    Light Source   |
                                     +---------+---------+
                                               |
                                               |  (Launch Optics)
                                               v
                                     +-------------------+
                                     |   Fiber End 1     |
                                     | (Input Coupling)  |
                                     +---------+---------+
                                               |
                                     +---------+---------+
                                     |    Optical Fiber  |
                                     |      Sample       |
                                     +---------+---------+
                                               |
                                     +---------+---------+
                                     |   Fiber End 2     |
                                     | (Output - Radiation)|
                                     +---------+---------+
                                               |
                                               |
                                               v
                       +------------------------------------------+
                       |        Goniometer / Rotary Stage         |
                       +--------------------+---------------------+
                                            |
                                            v
                                 +-----------------------+
                                 | Optical Power Meter   |
                                 +-----------------------+
    ```

*   **Alternative Setup (Visual Method):**
    In some simpler setups, the cone of light is projected onto a screen placed at a known distance. The diameter of the projected cone is then measured.

    ```
                                     +-------------------+
                                     |    Light Source   |
                                     +---------+---------+
                                               |
                                               |  (Launch Optics)
                                               v
                                     +-------------------+
                                     |   Fiber End 1     |
                                     | (Input Coupling)  |
                                     +---------+---------+
                                               |
                                     +---------+---------+
                                     |    Optical Fiber  |
                                     |      Sample       |
                                     +---------+---------+
                                               |
                                     +---------+---------+
                                     |   Fiber End 2     |
                                     | (Output - Radiation)|
                                     +---------+---------+
                                               |
                                               |
                                               v
                                     +-------------------+
                                     |      Screen       |
                                     | (Distance D)      |
                                     +-------------------+
                                       (Measure Diameter d)
    ```

### 4. Procedure for Measurement

The experiment is typically conducted in two phases: launching light and measuring the output radiation pattern.

#### **Phase 1: Launching Light into the Fiber**

1.  **Fiber Preparation:** Ensure the fiber end face (both input and output) is clean and properly cleaved to be perpendicular to the fiber axis. Use a fiber cleaver for this.
2.  **Light Source Connection:** Connect the light source to the input end of the optical fiber. For laser sources, use a microscope objective to focus the laser beam onto the fiber core for efficient coupling. For LEDs, direct coupling or a lens can be used.
3.  **Alignment:** Carefully align the light source (or launching optics) with the fiber core to maximize the power launched into the fiber. Monitor the output power if possible during alignment.
4.  **Mode Stripping (for multimode fibers):** If measuring multimode fiber, it's important to strip higher-order modes to obtain a stable far-field pattern and a more accurate NA measurement. This can be done by bending the fiber slightly in a controlled manner (e.g., a 5-10 cm loop) or by using mode-stripping coatings.

#### **Phase 2: Measuring the Radiation Pattern**

**Method A: Using Goniometer and Power Meter**

1.  **Setup:** Position the output end of the fiber at the center of rotation of the goniometer. Mount the optical power meter on the arm of the goniometer. Ensure the power meter's detector is aligned to receive light from the fiber.
2.  **Zero Angle Measurement:** Set the goniometer arm to $0^\circ$ (aligned with the fiber axis). Record the power meter reading ($P_0$). This is the maximum power output, typically along the fiber axis.
3.  **Angular Scan:** Rotate the goniometer arm from $0^\circ$ outwards in small angular increments (e.g., $0.5^\circ$ or $1^\circ$). At each angle $\theta$, record the power meter reading ($P(\theta)$).
4.  **Data Collection:** Continue scanning until the power reading drops to a negligible level (e.g., below the noise floor of the power meter).
5.  **Data Analysis:** Plot $P(\theta)$ versus $\theta$. The NA is determined from the half-power (-3 dB) points of this radiation pattern. The angle corresponding to the -3 dB point is approximately the acceptance angle $\theta_a$.

    $$ NA = \sin(\theta_a) $$

    *   **Note:** The half-power point is where the power is $P_{max} / \sqrt{2}$ or $0.707 \times P_{max}$.

**Method B: Visual Method (Projecting Cone of Light)**

1.  **Setup:** Position the output end of the fiber so that the emitted cone of light is projected onto a screen placed at a known distance $D$ from the fiber end. Ensure the setup is in a dark environment.
2.  **Observation:** Observe the cone of light. The cone's boundary represents the acceptance angle.
3.  **Measurement:** Measure the diameter $d$ of the circular spot on the screen.
4.  **Calculation:** The half-angle of the cone ($\theta_a$) can be calculated using trigonometry:

    $$ \tan(\theta_a) = \frac{d/2}{D} $$
    For small angles (which is often the case for optical fibers), $\tan(\theta_a) \approx \sin(\theta_a)$. Therefore, we can approximate:

    $$ NA \approx \sin(\theta_a) \approx \tan(\theta_a) = \frac{d}{2D} $$

    *   **Important:** This approximation is valid when $\theta_a$ is small (typically less than 10-15 degrees). For larger angles, it's better to calculate $\theta_a = \arctan(d/2D)$ and then $NA = \sin(\theta_a)$.

### 5. Data Analysis and Calculation of NA

Once the angular power distribution or the spot diameter is measured, the NA can be calculated.

*   **From Goniometer Data:**
    1.  Find the peak power $P_{max}$ from the $P(\theta)$ vs. $\theta$ plot.
    2.  Determine the power level corresponding to the -3 dB point: $P_{-3dB} = P_{max} / \sqrt{2}$.
    3.  Locate the angle(s) $\theta_a$ where the measured power $P(\theta)$ is equal to $P_{-3dB}$.
    4.  Calculate $NA = \sin(\theta_a)$. If the angles are symmetric around $0^\circ$, you can use either the positive or negative angle.

*   **From Visual Method Data:**
    1.  Using the measured diameter $d$ and distance $D$:
        $$ \theta_a = \arctan\left(\frac{d}{2D}\right) $$
    2.  Then, calculate:
        $$ NA = \sin(\theta_a) $$
        Or, using the small angle approximation:
        $$ NA \approx \frac{d}{2D} $$

### 6. Understanding Results and Sources of Error

*   **Expected Values:** Typical NA values for multimode step-index fibers are in the range of 0.10 to 0.30. Graded-index fibers usually have NA values between 0.20 and 0.30. Single-mode fibers have very low NA, typically around 0.10-0.14. (Reference: Keiser, Chapter 2).
*   **Comparison:** Compare the experimentally measured NA with the manufacturer's specified NA for the fiber being tested.
*   **Sources of Error:**
    *   **Fiber End Face Quality:** Imperfect cleaves or damaged end faces can scatter light and affect the radiation pattern.
    *   **Launch Conditions:** The NA measurement is dependent on the launch conditions. Overfilling the fiber or launching light at specific angles can influence the results. For multimode fibers, ensuring proper mode excitation (e.g., by using a controlled launch or mode stripper) is crucial.
    *   **Alignment Errors:** Misalignment of the light source, fiber, or detector can lead to inaccurate measurements.
    *   **Measurement Accuracy:** Precision of the goniometer, power meter sensitivity, and accuracy in measuring diameter/distance.
    *   **Ambient Light:** If not conducted in a dark environment, ambient light can interfere with the power readings.
    *   **Fiber Bending/Microbending:** Physical stress on the fiber can alter its optical properties and affect the NA measurement.
    *   **Temperature Variations:** Refractive indices can be temperature-dependent, though this is usually a minor effect in typical lab settings.

*   **Important Point:** The NA measured is an **effective NA** and can depend on the launch conditions, especially in multimode fibers.

### 7. Connection to Course Outcomes

*   **CO1 (K4):** This topic directly involves practical measurement and analysis of a fiber optic parameter. Students will need to apply knowledge of optical principles (snell's law, TIR) to design and conduct the experiment, analyze the data, and interpret the results, demonstrating knowledge at the analytical level (K4). The understanding of light-gathering ability relates to signal parameters.
*   **CO2 (K2):** Understanding the definition and significance of NA is fundamental to describing how light propagates in fiber optic communications and understanding factors affecting signal quality. NA directly impacts modal dispersion, a key signal degradation factor.
*   **CO3 (K6):** While this specific module is about measurement, the skills developed in aligning components, collecting data systematically, and analyzing results using trigonometric relationships and power levels are foundational for designing and simulating antenna experiments or other signal transmission systems. The concept of a radiation pattern (cone of light) is analogous to antenna radiation patterns.

### Practice Questions and Answers

**Question 1:** Define Numerical Aperture (NA) and provide its formula in terms of core and cladding refractive indices.

**Answer 1:**
Numerical Aperture (NA) is a dimensionless parameter that quantifies the light-gathering ability of an optical fiber. It determines the range of incident angles for which light can be guided through the fiber by total internal reflection.
The formula for NA is:
$$ NA = \sqrt{n_1^2 - n_2^2} $$
where $n_1$ is the refractive index of the fiber core and $n_2$ is the refractive index of the fiber cladding.

**Question 2:** What is the acceptance angle ($\theta_a$), and how is it related to NA?

**Answer 2:**
The acceptance angle ($\theta_a$) is the maximum angle with respect to the fiber axis at which light can be incident on the fiber end face and still be guided within the core by total internal reflection. It is related to NA by:
$$ NA = \sin(\theta_a) $$

**Question 3:** Briefly describe the principle of the cone of light method for measuring NA.

**Answer 3:**
The cone of light method involves launching light into the fiber and measuring the angular distribution of the emitted light from the fiber's output end. The NA is determined from the half-power (-3 dB) points of this radiation pattern, where the angle corresponding to this power level is the acceptance angle $\theta_a$. Alternatively, the diameter of the projected cone of light on a screen at a known distance can be used to calculate $\theta_a$ and subsequently the NA.

**Question 4:** If a fiber produces a cone of light with a diameter of 10 cm on a screen placed 20 cm away from the fiber end, what is the approximate NA of the fiber?

**Answer 4:**
Using the visual method and the small angle approximation:
Diameter $d = 10$ cm
Distance $D = 20$ cm
$$ NA \approx \frac{d}{2D} = \frac{10 \text{ cm}}{2 \times 20 \text{ cm}} = \frac{10}{40} = 0.25 $$
For a more accurate calculation:
$$ \theta_a = \arctan\left(\frac{d/2}{D}\right) = \arctan\left(\frac{10 \text{ cm}/2}{20 \text{ cm}}\right) = \arctan\left(\frac{5}{20}\right) = \arctan(0.25) $$
$$ \theta_a \approx 14.04^\circ $$
$$ NA = \sin(\theta_a) = \sin(14.04^\circ) \approx 0.2425 $$
Both methods give similar results for this angle.

**Question 5:** What are two common sources of error when measuring the NA of an optical fiber experimentally?

**Answer 5:**
Two common sources of error are:
1.  **Fiber End Face Quality:** Poor cleaving or damaged fiber ends can cause light scattering and affect the accuracy of the radiation pattern measurement.
2.  **Launch Conditions:** In multimode fibers, improper launching of light (e.g., overfilling or underfilling the fiber core, or not stripping higher-order modes) can lead to an inaccurate or unstable measurement of the NA.

### Important Points to Remember

*   **NA dictates light-gathering power:** Higher NA = more light captured.
*   **NA is directly related to refractive indices:** $NA = \sqrt{n_1^2 - n_2^2}$.
*   **NA determines the acceptance angle:** $NA = \sin(\theta_a)$.
*   **The cone of light method is common:** Observe or measure the angular spread of light exiting the fiber.
*   **Half-power point:** The angle where the output power drops to 70.7% of its maximum is approximately the acceptance angle.
*   **Fiber preparation is critical:** Clean and perpendicular end faces are essential.
*   **Mode stripping is important for MM fibers:** To ensure accurate NA measurement for multimode fibers.
*   **Launch conditions matter:** The NA can be affected by how light is coupled into the fiber.
*   **Sources of error exist:** Be aware of end face quality, alignment, and launch conditions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### Textual References

*   **Optical Fiber Communication by Gred Keiser (5th Edition, 2013):** This textbook is a primary resource for understanding the principles of optical fibers, including the definition, calculation, and measurement of Numerical Aperture in Chapter 2. It provides detailed explanations of acceptance angle, acceptance cone, and the relationship between NA and refractive indices. The experimental methods are also discussed.
*   **Microwave Devices and Circuits by Samuel Y. Liao (3rd Edition, 2008):** While primarily focused on microwave engineering, Liao's book can provide foundational knowledge on wave propagation and measurement techniques that might be indirectly relevant to understanding signal characteristics in any guided wave system.
*   **Antenna Theory and Design by Constantine A. Balanis (4th Edition, 2016):** Balanis's book is crucial for understanding radiation patterns. The concept of the far-field radiation pattern measured in the NA experiment is analogous to antenna radiation patterns. Understanding beamwidth and half-power beamwidth from antenna theory can be helpful for analyzing the NA measurement data.

This comprehensive study note covers the essential aspects of measuring the Numerical Aperture of an optical fiber, aligning with the learning outcomes and course objectives of Communication Lab II.