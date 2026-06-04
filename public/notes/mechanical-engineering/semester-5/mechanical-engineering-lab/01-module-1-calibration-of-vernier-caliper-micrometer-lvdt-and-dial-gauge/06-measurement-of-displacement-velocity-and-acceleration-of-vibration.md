---
title: "Measurement of displacement, velocity and acceleration of vibration."
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 1: Calibration of vernier caliper, micrometer, LVDT and dial gauge."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463703"
status: "completed"
scrapedAt: "2026-05-20T18:01:26.633Z"
---
# Mechanical Engineering Lab: Module 1 - Calibration and Vibration Measurement

## Topic: Measurement of Displacement, Velocity, and Acceleration of Vibration

This module focuses on understanding and performing fundamental calibrations of precision measuring instruments, and then applying these principles to the measurement of vibration parameters: displacement, velocity, and acceleration.

---

### 1. Introduction to Vibration

Vibration is the oscillatory motion of a body or system about a mean position. It is a ubiquitous phenomenon in mechanical systems and can be both beneficial (e.g., in sonic cleaning) and detrimental (e.g., causing wear, noise, and structural fatigue). Accurate measurement of vibration parameters is crucial for:

*   **Condition Monitoring:** Detecting early signs of wear or damage in machinery.
*   **Design Optimization:** Ensuring smooth operation and longevity of mechanical components.
*   **Performance Evaluation:** Assessing the dynamic behavior of systems.
*   **Troubleshooting:** Identifying the root cause of operational issues.

---

### 2. Measuring Instruments and Their Calibration (Brief Recap from Module 1)

While this topic is primarily about vibration, it's essential to remember the foundational calibration principles of common precision instruments that are often used in conjunction with vibration analysis or for understanding the underlying measurement principles.

*   **Vernier Caliper:** Used for measuring external and internal dimensions, and depths.
    *   **Calibration:** Involves checking the accuracy against known standards (e.g., gauge blocks) and ensuring the vernier scale is aligned correctly with the main scale.
    *   *Refer to Shotbolt & Gayler (Metrology for Engineers) for detailed calibration procedures.*
*   **Micrometer:** Used for highly accurate measurement of small dimensions.
    *   **Calibration:** Checking the zero error and ensuring the spindle and anvil are parallel and the ratchet mechanism provides consistent pressure.
    *   *Refer to Sharp & Hume (Practical Engineering Metrology) for micrometer calibration specifics.*
*   **LVDT (Linear Variable Differential Transformer):** A transducer that converts linear displacement into an electrical signal.
    *   **Calibration:** Establishing a linear relationship between the input displacement and the output voltage. This involves applying known displacements and recording the corresponding outputs.
    *   *Key Concept: Differential transformer principle where the relative position of the core to the coils determines the output voltage.*
    *   *Refer to Bolton (Mechatronics: Electronic Control Systems...) and Ramachandran et al. (Mechatronics: Integrated Mechanical Electronic Systems) for LVDT operation and calibration.*
*   **Dial Gauge:** A mechanical gauge used for measuring small linear displacements or variations in surface flatness.
    *   **Calibration:** Checking the accuracy of the dial and needle movement against standards.
    *   *Refer to Shotbolt & Gayler (Metrology for Engineers) for dial gauge calibration methods.*

**Why is calibration important for vibration measurement?**
The accuracy of vibration measurements directly depends on the accuracy of the transducers (sensors) and the associated data acquisition and processing equipment. Any error in the calibration of these components will propagate into the vibration data, leading to incorrect analysis and potentially flawed conclusions.

---

### 3. Vibration Measurement: Displacement, Velocity, and Acceleration

Vibration can be characterized by its displacement, velocity, or acceleration. The choice of parameter to measure depends on the frequency range and the characteristics of the vibration.

#### 3.1. Vibration Displacement

*   **Definition:** The maximum distance a vibrating object moves from its equilibrium position.
*   **Units:** Typically measured in micrometers ($\mu m$) or mils (0.001 inches).
*   **Measurement Techniques:**
    *   **Proximity Probes (Eddy Current Sensors):** Non-contact sensors that measure the gap between the probe tip and a conductive surface. As the surface vibrates, the gap changes, and the sensor outputs a voltage proportional to this change. These are commonly used for high-frequency, large-displacement vibrations.
        *   *Refer to Bolton (Mechatronics: Electronic Control Systems...) for principles of eddy current sensors.*
    *   **Non-Contact Optical Sensors:** Employ optical principles (e.g., laser interferometry) to measure displacement without physical contact.
    *   **LVDTs:** Can be used for measuring displacement in lower frequency vibration applications, especially when physical contact is acceptable or the vibration amplitude is within the LVDT's range.
*   **Relationship with Velocity and Acceleration:**
    *   For simple harmonic motion (SHM):
        *   $x(t) = X_p \sin(\omega t + \phi)$ (Displacement)
        *   $v(t) = \frac{dx}{dt} = X_p \omega \cos(\omega t + \phi) = V_p \cos(\omega t + \phi)$ (Velocity)
        *   $a(t) = \frac{dv}{dt} = -X_p \omega^2 \sin(\omega t + \phi) = -A_p \sin(\omega t + \phi)$ (Acceleration)
    *   Where:
        *   $X_p$ = Peak displacement
        *   $V_p$ = Peak velocity ($V_p = X_p \omega$)
        *   $A_p$ = Peak acceleration ($A_p = X_p \omega^2$)
        *   $\omega$ = Angular frequency ($\omega = 2\pi f$, where $f$ is frequency in Hz)

#### 3.2. Vibration Velocity

*   **Definition:** The rate of change of displacement with respect to time.
*   **Units:** Typically measured in millimeters per second ($mm/s$) or inches per second ($in/s$).
*   **Measurement Techniques:**
    *   **Velocity Transducers (Seismic Velocity Pickups):** These contain a mass-spring system. When the casing of the transducer vibrates, the mass tends to remain stationary due to inertia. The relative motion between the casing and the mass induces a voltage, often through electromagnetic induction (similar to a moving coil in a magnetic field). The induced voltage is proportional to the relative velocity.
        *   *These are particularly useful for low to medium frequency vibrations where displacement might be too small to measure accurately, and acceleration might be too small to be sensitive.*
        *   *Refer to Wilson & Sadler (Kinematics and Dynamics of Machinery) for principles of mass-spring systems and their dynamic behavior.*
    *   **Integration of Accelerometer Output:** Electronic integration of the acceleration signal can yield the velocity signal. This is a common technique in modern digital vibration analysis.
*   **Relationship with Displacement and Acceleration:**
    *   $V_p = X_p \omega$
    *   $A_p = V_p \omega$

#### 3.3. Vibration Acceleration

*   **Definition:** The rate of change of velocity with respect to time.
*   **Units:** Typically measured in $m/s^2$ or $g$ (where $1g \approx 9.81 m/s^2$).
*   **Measurement Techniques:**
    *   **Accelerometers (Piezoelectric, Piezoresistive, Capacitive):** These are the most common vibration sensors.
        *   **Piezoelectric Accelerometers:** Utilize the piezoelectric effect, where certain materials generate an electric charge when subjected to mechanical stress (vibration). The charge produced is proportional to the applied acceleration.
            *   *These are widely used due to their high sensitivity, wide frequency range, and small size.*
            *   *Refer to Bolton (Mechatronics: Electronic Control Systems...) and Ramachandran et al. (Mechatronics: Integrated Mechanical Electronic Systems) for details on piezoelectric sensors.*
        *   **Piezoresistive Accelerometers:** Employ materials whose electrical resistance changes significantly when subjected to mechanical strain caused by acceleration.
        *   **Capacitive Accelerometers:** Measure the change in capacitance between a seismic mass and a fixed electrode due to acceleration.
*   **Relationship with Displacement and Velocity:**
    *   $A_p = V_p \omega$
    *   $A_p = X_p \omega^2$
*   **Advantages of Measuring Acceleration:**
    *   High frequency response.
    *   Can measure very small displacements at high frequencies because acceleration increases with the square of the frequency.
    *   Robust and compact sensors.

---

### 4. Practical Aspects of Vibration Measurement

*   **Transducer Mounting:** Proper mounting of the vibration sensor is critical.
    *   **Rigidity:** The sensor must be rigidly attached to the vibrating object to ensure it moves with it. A flexible mount will dampen the vibration and lead to inaccurate readings.
    *   **Surface Finish:** The mounting surface should be clean and flat.
    *   **Mounting Methods:** Screws, studs, magnets, or adhesives are used depending on the application.
*   **Signal Conditioning:** The raw signal from the transducer often requires amplification, filtering, or integration/differentiation by signal conditioning electronics.
*   **Data Acquisition System (DAS):** This system converts the analog sensor signals into digital data for analysis.
*   **Analysis:** Vibration data can be analyzed in the time domain (e.g., amplitude vs. time) or the frequency domain (e.g., using Fast Fourier Transform - FFT to identify dominant frequencies and their amplitudes).

---

### 5. Lab Exercise: Measurement of Vibration Parameters

**Objective:** To measure the displacement, velocity, and acceleration of a vibrating object (e.g., a shaker table or an unbalanced rotating shaft) using appropriate sensors and to verify the theoretical relationships between these parameters.

**Materials:**

*   Vibration shaker table or a rotating machine with an imbalance.
*   Accelerometer (e.g., piezoelectric).
*   Velocity transducer (optional, if available).
*   Proximity probe or LVDT (for displacement, if available).
*   Signal conditioning units for each sensor.
*   Data acquisition system (e.g., oscilloscope, spectrum analyzer, or PC-based DAQ).
*   Mounting hardware.
*   Speed sensor (e.g., tachometer) to measure rotational speed.

**Procedure (General Outline):**

1.  **Sensor Calibration Check:** Briefly confirm the calibration status of the sensors or perform a quick calibration if required, as per Module 1 principles.
2.  **Mounting:**
    *   Mount the accelerometer securely onto the vibrating object.
    *   If using a proximity probe, position it to measure displacement of a non-vibrating part or a specific point on the vibrating object.
    *   If using a velocity transducer, mount it similarly.
3.  **Machine Setup:**
    *   Start the vibration source (shaker table or rotating machine).
    *   If using a rotating machine, set it to a known operating speed. Use the tachometer to accurately measure this speed.
4.  **Data Acquisition:**
    *   Connect the sensors to their respective signal conditioning units.
    *   Connect the output of the signal conditioning units to the data acquisition system.
    *   Record the vibration signals (displacement, velocity, acceleration) while simultaneously recording the machine speed.
5.  **Varying Conditions:**
    *   If possible, change the vibration amplitude or frequency (e.g., by adjusting the shaker table settings or the speed of the rotating machine) and repeat the data acquisition.
6.  **Data Analysis:**
    *   From the recorded data, extract peak values of displacement ($X_p$), velocity ($V_p$), and acceleration ($A_p$) at different operating speeds ($f$).
    *   Calculate the angular frequency ($\omega = 2\pi f$).
    *   Verify the relationships: $V_p \approx X_p \omega$ and $A_p \approx V_p \omega$ or $A_p \approx X_p \omega^2$.
    *   Analyze the frequency spectrum (using FFT) to identify the dominant vibration frequencies and their amplitudes, which should ideally correspond to the rotational frequency and its harmonics.

**Safety Precautions:**

*   Ensure all electrical connections are secure and properly insulated.
*   Be cautious around moving machinery.
*   Wear appropriate Personal Protective Equipment (PPE).

---

### 6. Learning Outcomes Addressed

*   **LO 1: Apply the principles of calibration for vernier caliper, micrometer, LVDT, and dial gauge.**
    *   This is foundational to the module and ensures the accuracy of instruments used in vibration measurement.
*   **LO 2: Measure displacement, velocity, and acceleration of vibration using appropriate transducers.**
    *   Directly addressed by the lab exercise and the theoretical background on sensors.
*   **LO 3: Understand the underlying principles of operation for common vibration transducers.**
    *   Covered in the sections on proximity probes, velocity transducers, and accelerometers.
*   **LO 4: Analyze the relationships between displacement, velocity, and acceleration for simple harmonic motion.**
    *   Explicitly presented with the mathematical formulas and their practical implications.
*   **LO 5: Interpret vibration data in the context of machine health and performance.**
    *   Implied by the practical application of vibration measurement for condition monitoring.

---

### 7. Course Outcomes Alignment

*   **CO1: Choose the appropriate instruments for different measurements (K3).**
    *   Understanding when to use a proximity probe for displacement, a velocity transducer, or an accelerometer based on frequency and amplitude is a key aspect of choosing appropriate instruments.
*   **CO2: Determine dimensional and form accuracies of various components (K3).**
    *   While not directly about dimensional accuracy, the precision in calibrating measuring tools (from Module 1) is a prerequisite for accurate vibration measurement, which in turn can reveal form/dimensional issues leading to vibration.
*   **CO3: Develop knowledge of designing and analyzing mechanisms in machinery (K3).**
    *   Vibration analysis is a crucial part of analyzing the dynamic behavior and performance of mechanisms, allowing for design improvements.
*   **CO4: Demonstrate the functions and control of various devices used for industrial automation (K3).**
    *   Vibration monitoring is a key aspect of predictive maintenance and condition monitoring in automated industrial systems. Understanding vibration sensors and data acquisition is part of demonstrating these functions.
*   **CO5: Demonstrate 3D printing technique (K3).**
    *   While not directly related to 3D printing, the precision and accuracy emphasized in calibration and measurement are analogous to the precision required in additive manufacturing. Some components in vibration testing setups might be custom-designed and 3D printed.

---

### 8. Important Points to Remember

*   **Calibration is Paramount:** Never use a measuring instrument without ensuring it is properly calibrated. Errors in calibration will lead to erroneous vibration data.
*   **Sensor Choice Matters:** The frequency content and amplitude of the vibration dictate the most suitable sensor.
    *   **Accelerometers:** Best for high frequencies and small displacements.
    *   **Velocity Transducers:** Good for low to medium frequencies.
    *   **Proximity Probes:** Excellent for non-contact measurement of displacement, especially in demanding industrial environments.
*   **Mounting is Critical:** A poorly mounted sensor is a primary source of measurement error. Rigidity and good contact are essential.
*   **Relationships are Interconnected:** Displacement, velocity, and acceleration are directly related through frequency. Understanding these relationships allows for cross-validation of data and deduction of one parameter from another.
*   **Frequency Domain Analysis (FFT):** Essential for diagnosing machinery faults, as specific faults manifest at specific frequencies.

---

### 9. Practice Questions and Answers

**Q1: A machine component is vibrating sinusoidally with a frequency of 60 Hz and an amplitude of 50 $\mu m$. Calculate its peak velocity and peak acceleration.**

**A1:**
Given:
Frequency, $f = 60$ Hz
Peak displacement, $X_p = 50 \, \mu m = 50 \times 10^{-6}$ m

Angular frequency, $\omega = 2\pi f = 2\pi \times 60 = 120\pi$ rad/s $\approx 377$ rad/s

Peak velocity, $V_p = X_p \omega$
$V_p = (50 \times 10^{-6} \, m) \times (120\pi \, rad/s)$
$V_p = 6000\pi \times 10^{-6} \, m/s$
$V_p \approx 0.01885 \, m/s$
$V_p \approx 18.85 \, mm/s$

Peak acceleration, $A_p = V_p \omega = X_p \omega^2$
$A_p = (0.01885 \, m/s) \times (120\pi \, rad/s)$
$A_p \approx 7.106 \, m/s^2$

Alternatively, using $A_p = X_p \omega^2$:
$A_p = (50 \times 10^{-6} \, m) \times (120\pi \, rad/s)^2$
$A_p = (50 \times 10^{-6}) \times (14400\pi^2)$
$A_p \approx (50 \times 10^{-6}) \times (142122)$
$A_p \approx 7.106 \, m/s^2$

**Q2: Why is measuring acceleration often preferred over measuring displacement for high-frequency vibrations?**

**A2:**
For simple harmonic motion, acceleration is proportional to the square of the frequency ($A_p \propto f^2$), while velocity is proportional to the frequency ($V_p \propto f$), and displacement is independent of frequency (for a given amplitude).
At high frequencies, even with small displacements, the acceleration can become significantly large. This makes acceleration a more sensitive indicator of vibration at higher frequencies. Furthermore, accelerometers are typically robust and have a wide frequency range, making them suitable for a broad spectrum of vibration analysis.

**Q3: Briefly explain the working principle of a piezoelectric accelerometer.**

**A3:**
A piezoelectric accelerometer utilizes piezoelectric materials (like quartz or ceramics). These materials generate an electric charge when subjected to mechanical stress. In an accelerometer, a seismic mass is attached to a piezoelectric crystal. When the accelerometer experiences vibration, the mass exerts a force on the crystal, causing it to deform and generate an electric charge. This charge is proportional to the acceleration experienced by the sensor. The charge is then processed by internal electronics (or external charge amplifiers) to produce a voltage signal that represents the acceleration.

**Q4: A proximity probe measures a vibration amplitude of 0.05 mm at a shaft speed of 1800 RPM. If the vibration is primarily at the shaft's rotational frequency, what is the approximate peak velocity of the shaft?**

**A4:**
Given:
Peak displacement, $X_p = 0.05$ mm $= 0.05 \times 10^{-3}$ m
Shaft speed, $N = 1800$ RPM

First, convert RPM to frequency in Hz:
Frequency, $f = N / 60 = 1800 / 60 = 30$ Hz

Angular frequency, $\omega = 2\pi f = 2\pi \times 30 = 60\pi$ rad/s $\approx 188.5$ rad/s

Peak velocity, $V_p = X_p \omega$
$V_p = (0.05 \times 10^{-3} \, m) \times (60\pi \, rad/s)$
$V_p \approx (0.05 \times 10^{-3}) \times 188.5$
$V_p \approx 9.425 \times 10^{-3} \, m/s$
$V_p \approx 9.425 \, mm/s$

---

This comprehensive study note covers the essential aspects of measuring vibration displacement, velocity, and acceleration, linking them back to the calibration principles of basic metrology instruments and aligning with the provided learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
