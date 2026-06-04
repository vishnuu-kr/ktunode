---
title: "Experiment on Whirling of shaft"
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 2: Experiment on Whirling of shaft"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf480446370d"
status: "completed"
scrapedAt: "2026-05-20T18:01:32.807Z"
---
# Mechanical Engineering Lab: Module 2 - Experiment on Whirling of Shaft

## 1. Introduction to Whirling of Shaft

Whirling, also known as critical speed or natural frequency, is a phenomenon that occurs in rotating shafts. When a shaft rotates, it possesses inherent natural frequencies at which it tends to vibrate. If the rotational speed of the shaft matches or is close to one of these natural frequencies, resonance can occur, leading to large amplitude vibrations. This can cause excessive stress, fatigue, and potentially catastrophic failure of the shaft and connected machinery.

**Key Concepts:**

*   **Shaft:** A rotating mechanical component that transmits torque or power.
*   **Rotation:** The act of turning around an axis.
*   **Natural Frequency:** The frequency at which a system oscillates when disturbed from its equilibrium position without any external driving force.
*   **Resonance:** A phenomenon that occurs when the frequency of an external force or vibration matches the natural frequency of a system, leading to amplified oscillations.
*   **Critical Speed:** The rotational speed of a shaft at which whirling occurs. It is directly related to the natural frequencies of the shaft.

**Importance of Studying Whirling:**

Understanding whirling phenomena is crucial for:

*   **Preventing catastrophic failures:** By identifying and avoiding critical speeds, engineers can design machinery to operate safely.
*   **Ensuring smooth operation:** Excessive vibrations lead to noise, reduced efficiency, and discomfort.
*   **Optimizing machine design:** Knowledge of critical speeds allows for appropriate selection of shaft material, diameter, and support conditions.
*   **Predicting system behavior:** Understanding whirling helps in analyzing the dynamic behavior of rotating machinery.

**Learning Outcome Addressed:**

*   **CO3: Develop knowledge of designing and analyzing mechanisms in machinery (Knowledge Level: K3)** - This experiment directly contributes to understanding the dynamic behavior and potential failure modes of rotating shafts, which are fundamental components in many mechanisms.

## 2. Theoretical Background and Formulae

The whirling speed of a shaft is influenced by its physical properties and the conditions of its support. The fundamental formula for the whirling speed of a simply supported shaft with negligible mass is derived from the principles of vibration and mechanics.

### 2.1 Simply Supported Shaft (Negligible Mass)

For a simply supported shaft of length *L*, Young's Modulus *E*, and area moment of inertia *I*, the fundamental natural frequency ($f_n$) can be approximated by:

$f_n = \frac{n^2 \pi}{L^2} \sqrt{\frac{EI}{\mu}}$

Where:
*   $n$: Mode number (n=1 for fundamental mode, n=2 for the second mode, etc.)
*   $L$: Length of the shaft between supports
*   $E$: Young's Modulus of the shaft material
*   $I$: Area Moment of Inertia of the shaft's cross-section ($I = \frac{\pi d^4}{64}$ for a solid circular shaft of diameter $d$)
*   $\mu$: Mass per unit length of the shaft

The whirling speed ($N_w$) in revolutions per minute (RPM) is related to the natural frequency ($f_n$) by:

$N_w = 60 \times f_n$

Substituting the values, the first critical speed ($N_{w1}$) for a simply supported shaft is:

$N_{w1} = \frac{60}{2\pi} \sqrt{\frac{EI}{\mu L^4}}$

**Simplification for a solid circular shaft:**

For a solid circular shaft of diameter $d$ and density $\rho$:
$\mu = \rho \times \frac{\pi d^2}{4}$
$I = \frac{\pi d^4}{64}$

Substituting these into the whirling speed equation can lead to a more specific formula. However, it's often more practical to work with the general formula and experimental measurements.

### 2.2 Influence of Disk or Rotor on Whirling Speed

When a disk or rotor is attached to the shaft, it introduces additional mass and stiffness effects. The whirling speed can be calculated using more complex methods like the Rayleigh's method or the Dunkerley's method, which consider the deflection caused by the weight of the disk.

**Dunkerley's Method (Simplified Approach for Multiple Loads):**

Dunkerley's method provides an empirical formula to estimate the fundamental critical speed when there are multiple concentrated loads on a shaft. For a shaft with a single concentrated load (like a rotor) at a distance $a$ from one end and $b$ from the other, the whirling speed ($N_w$) is given by:

$N_w \approx \frac{2170}{ \sqrt{\delta}}$ (for RPM, where $\delta$ is the static deflection in mm due to the load)

Alternatively, the whirling speed can be expressed in terms of the natural frequency:

$\frac{1}{N_{w1}^2} = \frac{1}{N_{w1,shaft}^2} + \frac{1}{N_{w1,disk}^2}$

Where:
*   $N_{w1,shaft}$ is the critical speed due to the shaft's own mass.
*   $N_{w1,disk}$ is the critical speed due to the mass of the disk.

### 2.3 Influence of Gyroscopic Effects and Shear Deflection

For higher speeds and when dealing with shafts that are not very long and slender, additional effects need to be considered:

*   **Gyroscopic Effect:** Due to the rotation, the shaft possesses angular momentum. Any applied force causes precession, which can influence the whirling speed. This effect is more pronounced at higher rotational speeds.
*   **Shear Deflection:** The formula for natural frequency usually assumes beam theory where deflection is solely due to bending. However, shear stresses also contribute to deflection, especially in short, stiff shafts. This effect generally lowers the natural frequency.

**Textbook References:**

*   **Kinematics and Dynamics of Machinery by C.E.Wilson, P. Sadler:** This textbook provides detailed derivations and analyses of whirling phenomena, including the effects of disks and gyroscopic action. Chapter 7, on "Vibration Analysis of Rotating Machinery," would be particularly relevant.
*   **Metrology for Engineers by Shotbolt C.R. and Gayler J.F.W:** While primarily focused on measurement, it might touch upon dynamic measurements related to rotating systems.
*   **Practical Engineering Metrology by Sharp K.W.B. and Hume Sir Isaac:** Similar to Shotbolt, this book could provide insights into measuring vibration parameters.

**Learning Outcome Addressed:**

*   **CO3: Develop knowledge of designing and analyzing mechanisms in machinery (Knowledge Level: K3)** - Understanding the theoretical basis allows for analysis of how different parameters affect the whirling speed, which is critical for design.

## 3. Experimental Setup and Procedure

The experiment typically involves a rotating shaft apparatus with provisions for attaching masses (simulating rotors) and varying its speed.

### 3.1 Apparatus Required

*   **Whirling Shaft Apparatus:** This usually consists of a motor, a drive system (e.g., belt drive or direct drive), a shaft, bearings to support the shaft, and a speed control mechanism (variable speed drive).
*   **Stroboscope:** A device that emits flashes of light at adjustable frequencies. When the flashing frequency matches the shaft's rotational speed, the shaft appears stationary, allowing for accurate speed measurement.
*   **Disks/Rotors:** Concentric masses that can be attached to the shaft at various positions.
*   **Dial Indicator or Vibration Sensor:** To measure the amplitude of vibration or deflection of the shaft.
*   **Tachometer:** To measure the rotational speed of the shaft directly.
*   **Stopwatch:** For timing measurements if required.
*   **Measuring Scale:** To measure the length of the shaft and the position of the masses.

### 3.2 Procedure

1.  **Familiarization:** Understand the operation of the whirling shaft apparatus, including the motor, speed control, and measurement devices.
2.  **Shaft Properties:** Measure the diameter and length of the shaft. Note the material and obtain its Young's Modulus ($E$) from standard tables or material properties sheets.
3.  **Setup:** Mount the shaft in the bearings. Ensure the bearings are in good condition and lubricated.
4.  **Initial Run (No Mass):**
    *   Start the motor and gradually increase the shaft's rotational speed.
    *   Observe the shaft for any vibrations or whirling.
    *   Using the stroboscope, adjust its frequency to match the shaft's rotation. When the stroboscope illuminates the shaft, it will appear to be moving slowly or be frozen. Measure the frequency of the stroboscope. This frequency is the rotational speed of the shaft.
    *   As the speed increases, observe the amplitude of vibration. A peak in vibration amplitude indicates proximity to a critical speed.
    *   Carefully increase the speed beyond the critical speed.
    *   Record the speed at which significant whirling is observed.
5.  **Adding Mass/Rotor:**
    *   Attach a disk or rotor of known mass at a specific position along the shaft.
    *   Repeat step 4: gradually increase the speed, observe vibrations, and identify the critical speed(s).
    *   Record the speed at which whirling occurs with the mass attached.
6.  **Varying Mass and Position:**
    *   Change the position of the attached mass on the shaft and repeat step 5.
    *   Change the mass of the rotor and repeat step 5 with the same or different positions.
7.  **Data Recording:** Meticulously record all observations, including:
    *   Shaft length ($L$)
    *   Shaft diameter ($d$)
    *   Mass of the rotor ($m$)
    *   Position of the rotor from one end ($x$)
    *   Observed whirling speed (RPM)
    *   Stroboscope frequency (Hz)
    *   Tachometer reading (RPM)
    *   Amplitude of vibration (if measured)

**Learning Outcome Addressed:**

*   **CO1: Choose the appropriate instruments for different measurements (Knowledge Level: K3)** - The experiment requires selecting instruments like stroboscopes, tachometers, and vibration sensors for accurate speed and vibration measurement.
*   **CO2: Determine dimensional and form accuracies of various components (Knowledge Level: K3)** - Measuring shaft diameter and length, and ensuring the masses are balanced, relates to dimensional accuracy.

## 4. Data Analysis and Calculation

The experimental data is analyzed to compare observed whirling speeds with theoretically calculated values.

### 4.1 Calculation of Theoretical Whirling Speed

1.  **Shaft Properties:**
    *   Young's Modulus ($E$): Obtain from material data (e.g., Steel $\approx 200 \times 10^9$ Pa, Aluminum $\approx 70 \times 10^9$ Pa).
    *   Density ($\rho$): Obtain from material data.
    *   Shaft Diameter ($d$)
    *   Shaft Length ($L$)
    *   Mass per unit length ($\mu = \rho \times \frac{\pi d^2}{4}$)
    *   Area Moment of Inertia ($I = \frac{\pi d^4}{64}$)

2.  **Theoretical Whirling Speed (Shaft Mass Only):**
    Using the formula for a simply supported shaft (assuming no external masses initially):
    $N_{w1} = \frac{60}{2\pi} \sqrt{\frac{EI}{\mu L^4}}$

3.  **Theoretical Whirling Speed (with Disk):**
    This is more complex. For a simply supported shaft with a disk of mass $m$ attached at a distance $x$ from one end and $(L-x)$ from the other:

    *   **Static Deflection due to Disk:**
        The static deflection ($\delta_1$) caused by the disk at its point of application can be calculated using beam deflection formulas. For a simply supported beam with a central load, $\delta = \frac{PL^3}{48EI}$. For a load at an arbitrary position $x$, the deflection at that point is:
        $\delta_1 = \frac{m g x (L-x)^2}{L E I}$
        (where $g$ is acceleration due to gravity)

    *   **Using Dunkerley's Method:**
        The whirling speed due to the disk's mass can be considered separately. The static deflection due to the disk's weight ($mg$) at its location on the shaft gives an indication of its effect on critical speed. A simplified formula for the critical speed influenced by a single concentrated mass $m$ at a distance $x$ from the supports of length $L$ is related to the static deflection $\delta$ at the point of the mass:
        $N_{w,disk} \approx \frac{2170}{\sqrt{\delta}}$ (RPM)

        A more robust approach involves calculating the influence coefficients. However, for this experiment, the focus is often on demonstrating the phenomenon rather than precise theoretical calculation of complex cases.

    *   **Consideration of Shaft's Own Mass:** If the shaft's own mass is significant, its contribution to critical speed should also be considered. Dunkerley's method combines these effects:
        $\frac{1}{N_w^2} = \sum \frac{1}{N_{wi}^2}$
        Where $N_{wi}$ are the critical speeds due to individual components (shaft mass, disk mass).

4.  **Comparison:** Compare the experimentally observed whirling speeds with the calculated theoretical values.

### 4.2 Graphical Analysis

*   Plot the amplitude of vibration versus the rotational speed for each case (no mass, different masses, different positions). This will clearly show the peak amplitudes at the critical speeds.
*   Plot the calculated critical speed against the position of the mass.
*   Plot the calculated critical speed against the mass of the rotor.

### 4.3 Error Analysis

*   Calculate the percentage error between the experimental and theoretical values.
*   Identify potential sources of error:
    *   Inaccurate measurement of shaft dimensions.
    *   Imbalance of the rotor.
    *   Non-uniformity of the shaft.
    *   Stiffness and damping of the bearings.
    *   Eccentricity of the rotor mounting.
    *   Accuracy of the stroboscope and tachometer.
    *   Neglect of gyroscopic effects or shear deflection in theoretical models.

**Learning Outcome Addressed:**

*   **CO3: Develop knowledge of designing and analyzing mechanisms in machinery (Knowledge Level: K3)** - Analyzing the experimental data and comparing it with theoretical calculations is key to understanding and designing mechanisms involving rotating shafts.
*   **CO2: Determine dimensional and form accuracies of various components (Knowledge Level: K3)** - Error analysis requires assessing the impact of dimensional inaccuracies on the results.

## 5. Discussion and Interpretation of Results

The discussion should interpret the findings and their implications.

### 5.1 Key Observations

*   **Presence of Critical Speeds:** Confirm that critical speeds exist for the shaft, both with and without attached masses.
*   **Effect of Mass:** Explain how adding mass to the shaft generally lowers the critical speed. This is because the increased mass leads to larger deflections under load, effectively reducing the stiffness-to-mass ratio.
*   **Effect of Mass Position:** Discuss how the position of the mass influences the critical speed. Critical speeds are sensitive to the distribution of mass and stiffness along the shaft.
*   **Amplitude of Vibration:** Describe the sharp increase in vibration amplitude as the shaft approaches a critical speed and the subsequent decrease as it moves past it.
*   **Relationship with Theory:** Comment on the agreement or disagreement between experimental and theoretical results and the reasons for any discrepancies.

### 5.2 Influence of Different Factors

*   **Bearing Stiffness:** The stiffness of the bearings supporting the shaft significantly affects the critical speed. Stiffer bearings tend to increase the critical speed.
*   **Shaft Diameter:** A larger diameter shaft has a higher area moment of inertia ($I$), which increases its stiffness and thus increases the critical speed.
*   **Shaft Material:** The Young's Modulus ($E$) of the material directly influences the critical speed. Materials with higher $E$ will have higher critical speeds.
*   **Shaft Length:** Critical speed is inversely proportional to the square of the shaft length ($L^2$). Longer shafts have significantly lower critical speeds.

### 5.3 Practical Applications

*   **Turbine and Compressor Shafts:** In power generation and industrial applications, turbine and compressor shafts rotate at high speeds. Designing them to operate well above or below their critical speeds is paramount.
*   **Engine Crankshafts:** Crankshafts in internal combustion engines undergo complex dynamic loading and must be designed to avoid resonance.
*   **Propeller Shafts:** Ships' propeller shafts must be analyzed for whirling.
*   **Machine Tool Spindles:** High-speed spindles in CNC machines need careful design to prevent whirling and ensure precision.

**Reference Books:**

*   **Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering by W.Bolton:** This book might discuss vibration control systems and how mechatronic principles are applied to mitigate issues like whirling.
*   **Machines and Mechanisms Applied Kinematic Analysis by D.H.Myskza:** This reference could offer advanced analysis techniques for dynamic behavior of machines, including rotating elements.
*   **Mechatronics: Integrated Mechanical Electronic Systems by K.P.Ramachandran, G.K.Vijayaraghavan, M.S.Balasundaram:** This book can provide context on how vibration monitoring and control are integrated into mechatronic systems.

**Learning Outcome Addressed:**

*   **CO3: Develop knowledge of designing and analyzing mechanisms in machinery (Knowledge Level: K3)** - Interpreting the results and relating them to real-world applications is a core aspect of design and analysis.
*   **CO4: Demonstrate the functions and control of various devices used for industrial automation (Knowledge Level: K3)** - Understanding whirling is crucial for designing automated systems that involve rotating components.

## 6. Safety Precautions

*   Ensure all guards are in place on the rotating apparatus.
*   Do not touch the rotating shaft while it is in motion.
*   Wear safety glasses at all times.
*   Be aware of the stroboscope's high-intensity light; do not look directly into the light source for extended periods.
*   Ensure electrical connections are secure and properly insulated.
*   Do not exceed the maximum speed rating of the apparatus or the shaft.
*   If any unusual noise or vibration occurs that is not related to whirling, stop the apparatus immediately and inform the instructor.

## 7. Practice Questions and Answers

**Question 1:** Define whirling of a shaft and explain why it is a critical phenomenon in rotating machinery.
**Answer:** Whirling of a shaft is the phenomenon where the shaft vibrates radially when it rotates at certain speeds called critical speeds. These speeds correspond to the natural frequencies of the shaft. If the operating speed matches a critical speed, resonance can occur, leading to large amplitude vibrations, increased stress, fatigue, and potential catastrophic failure of the shaft and connected equipment.

**Question 2:** How does the addition of a mass (rotor) to a shaft affect its critical speed?
**Answer:** Adding a mass to a shaft generally lowers its critical speed. This is because the added mass increases the inertia of the system and also contributes to the static deflection of the shaft. The critical speed is inversely related to the square root of the static deflection, so an increased deflection leads to a reduced critical speed.

**Question 3:** List three factors that influence the critical speed of a shaft.
**Answer:** Three factors are:
1.  Shaft length
2.  Shaft diameter (and hence area moment of inertia)
3.  Young's Modulus of the shaft material
4.  Mass and position of attached rotors
5.  Boundary conditions (type of supports/bearings)

**Question 4:** What is the purpose of using a stroboscope in the whirling shaft experiment?
**Answer:** A stroboscope is used to measure the rotational speed of the shaft accurately. By adjusting the flashing frequency of the stroboscope to match the shaft's rotation, the shaft appears stationary or moves in slow motion, allowing the observer to determine the exact RPM. This is crucial for identifying the speed at which significant vibrations occur.

**Question 5:** If a shaft is supported at both ends, how would increasing the shaft diameter affect the critical whirling speed? Explain why.
**Answer:** Increasing the shaft diameter would **increase** the critical whirling speed. The critical speed is directly proportional to the square root of the area moment of inertia ($I$). For a circular shaft, $I = \frac{\pi d^4}{64}$, which means $I$ is proportional to the fourth power of the diameter ($d^4$). Therefore, increasing the diameter significantly increases $I$, making the shaft stiffer and leading to a higher critical speed.

**Question 6:** State the formula for the fundamental whirling speed of a simply supported shaft with negligible mass.
**Answer:** The formula is $N_{w1} = \frac{60}{2\pi} \sqrt{\frac{EI}{\mu L^4}}$, where $N_{w1}$ is the fundamental whirling speed in RPM, $E$ is Young's Modulus, $I$ is the area moment of inertia, $\mu$ is the mass per unit length, and $L$ is the shaft length.

**Question 7:** How can you minimize the risk of resonance in a rotating machine?
**Answer:** To minimize the risk of resonance, engineers should:
*   Design the machine so that its operating speed is significantly far from any of its critical speeds.
*   If possible, modify the design to change the critical speeds (e.g., by altering shaft stiffness or mass distribution).
*   Use damping mechanisms to reduce vibration amplitudes if operating near a critical speed is unavoidable.
*   Ensure proper balancing of rotating components to avoid introducing external forcing frequencies.

**Question 8:** Explain the concept of "critical speed" in your own words.
**Answer:** A critical speed is like a "danger speed" for a rotating shaft. If the shaft spins at this particular speed, it starts to wobble or whirl excessively. This happens because the speed matches the shaft's natural tendency to vibrate, and even small disturbances can cause the wobbling to become very large and potentially break the shaft.

## 8. Important Points to Remember

*   **Whirling vs. Balancing:** Whirling is a dynamic phenomenon related to natural frequencies, while balancing is about minimizing static and dynamic imbalances that cause vibrations at any speed. However, imbalance can excite whirling.
*   **Multiple Critical Speeds:** A shaft can have multiple critical speeds corresponding to different modes of vibration (e.g., first mode, second mode, etc.). The first critical speed is usually the lowest and most commonly encountered.
*   **Bearing Influence:** The type and stiffness of bearings supporting the shaft are critical and significantly affect the critical speed.
*   **Rotor Imbalance:** An unbalanced rotor will induce a forcing frequency at the rotational speed, which can excite vibrations even when not at a critical speed. It also exacerbates vibrations when near a critical speed.
*   **Operating Speed vs. Critical Speed:** Machines are typically designed to operate either well below the first critical speed or well above it to avoid resonance.

This comprehensive set of notes covers the theoretical background, experimental procedure, data analysis, practical implications, and safety aspects of the whirling of shafts experiment, aligning with the learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
